/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "279heSHRNFptXh2xdCx7ByeaPwnzv2DvQPkPCv9N31DQ1vEKb4EPZjbTiWWcJZ5F1d2g3A5JbhGNpacpp9rx923z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzdXNVj1ri49hWkUZyYkK5tfPfR7ywgqs7dJsj8Lc7vi8bU2fj128Mu1N3f451kUAgNMmVd2km5WVhMWbPf82gy",
  "key1": "5DN8xa3mTK88eo9ALGBk6yQ6GPFUbTnoc5TRHJaebfkRwAVtyj3YtQ3vTjFva3BAGgZUUeNhnJ6LcJHz3mcNa481",
  "key2": "4cNkAFpQt9fT4UXkfW43SQ4XdYqMjKprveTqjLmGHA7qnX5RLdq2g1UPh7uG2rAxdTQs2ewtv2jgVvw2qWcA8J4r",
  "key3": "352JsKy2jiSH7mUXiaqywB3EQzYY98oB7X2qLoazgqD4Mt5GDzqTrYP1SnGuUpwSaXfawJLchgbFmKdbvcMBBoaV",
  "key4": "5QU2aDH3FsnGHw5vxXWUhHVxphFhAkY7ZZNx3Zs1RHfrZVqj6XUZQ4WfQZMbizwxopaDPAWuzR3MF9Ep5nEcCUvt",
  "key5": "3bH5FefpdGQfZ1trGUWwxe7LAZz6CWjaxk5yLqzjq2qMVjEdhNFxPhKefnDdDbQRm9R1JPMrcTQxebmtpLo2QGfj",
  "key6": "2qLGzEqtDybJSA3HekfmQaJ2xgLKbzbCURRXAoiKkYorvY86zc6tAbaemySmSW6BkLchfUZFeU7MiSFoVm4LdSLP",
  "key7": "33ftYBWEK1iDLDmGrzgq9hCZjUZbUfUv2dBrir7g9QjacrEs7yZy7Z5jt25ipHNy6snNsjvxXPLkf1KBWZw2nYye",
  "key8": "3StNvXqzfqV1YadXrJXYa9LWrK5psNPNgJG8XDF928ND8CabLwBfZrFbz1qNEDNWyBBFKvpKMPAYyaw9RcfVxTRE",
  "key9": "4NJ3TBNDWS5PSGHVcyfVMFihaRuQZaJNNzb4norrJLsfUuqzF8nzDDAkiCkkWqhDW1LvEVbBAaP2oq384v91MwTU",
  "key10": "4fNUeQQ3JLNVZCRB2TgqYPNXR1XPGuHFeT9fmSw4rKzzmwMckbYEQCmuDeHdUQ7fWetbvSdZe2WriGAWCfzh517G",
  "key11": "2A7sZtryPg71JFCSnKQA2cgAfKqP3uL1DuDmff9uvhTBHuCQFcyEzcoc1fLwesAL5pBFNJCiMWNmjoPbWsbm2UxA",
  "key12": "xe1TpJqCzXWPTF7i1U3oFwPQD9GtUGgmhXY24bCaADrsXz7sbz9CVLc8fBGFEpzS8YnqMcXCALS2fYeTndNctrW",
  "key13": "uj6N5BZfdbrqF66ZHeaSvVQ59hCnyiv5U6xznoFf2CkTJqbdpRcCUUT7cDXf5BSjPxA9kcrEsLoTyoY4yvD7csQ",
  "key14": "4CSypac8RQnqWFCns7k5FcXKqsE1S2eMxZ7q1TqVJ9ux7t9vAnp3pnKeGnPfn1bgQq4ME9JpivuUtJcJ2TVkmMk",
  "key15": "7GpU8gCetFYgVsSyN9afMYwSrDjr41e7v3soRynGVxGPnTRXURmJL5HNJG1pykHyD2zLDjCvL4Trq5hzGuvkhoh",
  "key16": "4st7azhvPPjraD1Jnjx5Q2kYhAS8zGCDF465TRJgQyJVBievnKQzUVSPvqFVaiejnXYCM8SPB4U7X3p2HzkDw7nK",
  "key17": "2P6zmg6QvbgcL1CF2c1oPkJvJcsCR3iAYce3ZvMrbEFff49CMNrwCdmLwrRtDtssbVseKxQ2mpWG1Mdcevb4LFZk",
  "key18": "We17xpeR3LgXdDyDYTRUfF1qGtzswBBHi2pkEZzMmpmn4Da9q5k6Xgw9tfApAbkUinfHgnYBGP2AN5VK8oCMJYp",
  "key19": "5ZGJVkGDyrecKZsqgjXdmXqy6SiAkvKxo8Dfsq2poMUZmeXDorGdgVSUX4347XPEyXNPQA9Tc4HjXapTYTpwqQm7",
  "key20": "tGVDLHABz3Nytcwbf65AQyEXFyWz9KQDuSTPM6UZihX9fc3w9EJdER3NBKga8GDEvcgouGm5iGBktkC8UpNUQs4",
  "key21": "4BQiThoTTRnAcsSS98pgmi7wF3aisQY3D8HRUjusz2s5Do8N7Cckim3j8S9zRPFaDaUu6FwZWMiDCfLYMCubKBW2",
  "key22": "4DA7pFjb2npY7T8AaDrfHp2yan4ESzWvy3JvNVf5W45Ki42jgxoPDRD9YkLzsbQxx6v5ktmQJ8wo9dL8fopcPzxh",
  "key23": "2FLnn1ufhF5y93CkkPc852L1VgHUiyWsfB7akozcsWhwmQeS6kUWnpRfP6h7Ng5feJNQWoaBhRNH3B2cNCWuTdoj",
  "key24": "4zEwJ2QFs1mUabhfBEvCWwQrHzv861LbYaMY38aY2DrD3fck72KAPsQTaNWdDKiJTjNBJFamH4ZaWwhuK1bi3eZj",
  "key25": "2nmVuBvuNMpjqQG3ifckXEgaDbHVXws6C3gmVmYF7p8xtbwVeAKJ1py88wPABVAyn1v5TwhpbrZbRGhj6bgncKqw",
  "key26": "15ueJQWSsDsj5ehLgp56moEKp5ayJqbKjrm5Lhyu96DoD2PSD4eUnJnGgoFZC9YYEfzvt8gvMqCqKxMYkMKW1WD",
  "key27": "4EfhqNaU5xrcnGyG4VLUqvoq4zJcgvs84bQtcN5BerAHFP4x6kzFVmEPtZaSP3CEwWEyLsodtV7iJ8tqfQTxy7T",
  "key28": "sXNTXD4BLL6bz29WwczbmP21uvKgU9Gowm5jtUynFuFYftLBbopV7kLyL8tLRgZKvUiJBq4B9u31LuUAtpTuTW1",
  "key29": "4t2odDSqSb1LKphseoarSeXqpYvj9oZ6TThhiVEZXRSNbaNqLmKS7AcWN7aFF3t7XiFq2hC1PrdXtDYis9kY2K1D",
  "key30": "4nj2EZmMLKE4iLJYPhQdeiBCg62CNESfyTisMjqNxfBAywV9XyFdNRSZTGSWKiBfLzMevCmV8pd7MU1QJP6y2gZm",
  "key31": "351bhXL5qBaoaMAzFKkfEg5QPqkL4NVgwFSM3maaWV5keJubsVRHfH3cwThs8ddpnrtMhPUXhwifPHjju25uBbAZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
