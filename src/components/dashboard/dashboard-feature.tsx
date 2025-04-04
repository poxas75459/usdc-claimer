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
    "bumsmuew3LepsVXTThrtzpLbzZGFCX8yAb2KBTTAoR9Qq7kzAAdnQRtQXQq7rdqF3SR1R8ebFGKvGpkhVsQDpFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KboXjkpnVuexkHiFGCzEpCEg1qoBLdxiKknygF97iuhq8JbnSshYeusKjw311ZJH3kcxHPZVRET8KWjKpJZf53N",
  "key1": "atXJWfr9DQBosRQCztWV3csKv5GD6MzdJhqJN9fknsruUdCEjywK2yKpT8eRfxQUeWQN39r8XXSTzqPEAhEhmnM",
  "key2": "37x6ZvoaDRdPfbx8aTnGPEqaASFdDkUWRjzAYGRqTHSkPDtBbQ7pi7AvqG95VD2boJJEFjEsfRhPvtgfcmqfxiXe",
  "key3": "3aLLP2HinYfiU5gnjgXujbauCYXbxTu4BpiUxTTagXk6nGhfinCCHkaczvMpKS549nr56YfTKFrq1GcdLuVBKoAy",
  "key4": "3iPEJnwnvQ7gVRyEncHUZ3jCBaHYF9xv1qdBa1rSMj15die6vWBYYe5J2THqhaDPYFvDbrK4mbFNJivTRiyTzLA6",
  "key5": "4xp2Qyr3pRbVAC8hKS4kMhYrUoFmDocTaVpadE3aZbPfrXTKjzEQUF8MFSX4ejQZvZByNgdEp6sEdA2wHXfo6Qe8",
  "key6": "3MsyM485tMnS9uqTpvZiwa6LF8S9wFnAsan3ev3qNHgfZ185B3u4S3EuNaHwwMjNKpGpdPEKYihVNUDCnN5neXSg",
  "key7": "3tmKgn4T2VvGvTdBdud3mj3akqskdbiEe5zgRCfnrFaLKBgUyebi336koaPA68cdNUF1XcZu7XFyyNdT3ddYRN8b",
  "key8": "3umfDF4d8CkgnZ2SYMJ3KuuZubYuPF83pyEaHZFn6WF5PzVRoAmCWPdYuE4MhRjDz1JhsMjRXJXGaYWtNpQq53EB",
  "key9": "22r9Ak2h4nPBJ29cirMxK5NEcPiPPGRPSfrmYeBse7CmgM3kH4cTTMc2kyyCpAkiYL8zXC3am5ieBqFeh4PAq1gC",
  "key10": "4JEhz6BWqiyB2QWENTShiYwoUyiJ7fiGDnq2khSSAUA3b5JAsypmnJtFVjEweTAnh4ZS45jqNbTjRBQ4yNBGbQyE",
  "key11": "2DVpzMaxSmAD2f58RhN5v4HYK2weken8z41Tw89VBTTgHChg48KnAu1URitJKW4VKvV2zssPMQsEiZ88MBAi1z98",
  "key12": "22d4dT3dz9a6YxE9z2N219bVLpCfLL99p7PoL51jxPw5sez2t3Jo2av9gwG8FpXyZFS3e1w691hMQ1gfZ2RknsgQ",
  "key13": "2kcHywVUZZayNdW6QaP8y8SAVQbJUQPcQScYguVcjD3rSdojmBsGYvGtsqpY94G4dHQ9NMfkfMgMGEe5RLTRpPMJ",
  "key14": "378ggM9Fy3xk6BJb5ecXK1aaBVnCaUSf5GubMXycPBjnfrj4vht18YpW2zJLBfaMba9ziCNNK8Xy8gWfRnu86GQw",
  "key15": "3c3YDzdKn7cNMHWyxUcZ3GPWC4yjTahVtp5GEPoq868JtByVuY7jKkyzBsenTD3NtVhroA7qQ1Y9kc1VKwAK8Gyq",
  "key16": "43Fc7TvL4ePCdcutqErCQVwHPtw1xZgFu31eSaNKNfe2Com8WN9kdcv6ATrhJjQDDckayEtrKSQ3iwAHVohtSfDm",
  "key17": "5hA9figkPN6QtwihCtZwdjzbyW3BMt5YpizT9ji7yehbxiakMuAutxKn9SV6rTVJhF8QsxS6NJrztW54Xvv7cbeK",
  "key18": "5bh8YHAbuSbzDD3o9p26AEV6NNyTDHQ5fwLeeCNDRfQuTENMEB7Z8d5NwDRcQV4xN9BdkHjqUCAWCtShKZP3f4Fq",
  "key19": "5JzkFqoZERUjnLH8LpgKoUnKnANQ1gPFnDvhR2AjadQhdWi4VciYHWKyg3BdoZ3awY1wm7RFdjMJLzDQYPDgXGmd",
  "key20": "2dTNSYbzoVJUBpBZRYGQnN7UM8A7C3QnpxkKGHhfsa4AUHFsBdYfcNJYRhFE84u6YmcK6aPvVqkL5xfb7T19Gny",
  "key21": "4RmGFRDhhGtkq8m8oVxQXWS3Thjrgsz6Hni3xxDHnQaYoCYcbEDTWeCYUoV2GFT5322hEVuaydQPjLsVsUUTug1m",
  "key22": "RVPitC49qRtNGBLcceqcQZHXLRPq5YHHh3GZbTWwQba9dj4MDmrtuX7zdd26fU8kKiDxHeXWWnJZZETCgDZY4rk",
  "key23": "UPKqXsZSqYuQ2W4gHi3VmUhDSN8vT3yjKJrzTWjbnZWPX6j86Ars7ayxS8UgtL1UvQV4meUZGxvKGRVtk6f5G4L",
  "key24": "4dBpxm9Q43WbAyLFmrxA9tZdDJovL43ZXra5CHSdMc5H7UZhPXwBPKbwRMQhHuetLjmprGWTRPrrP6j1mtSGgHr",
  "key25": "gZoqcoLiYV8qRix4AP7jV5xu4Ff14yJg4sX9gvC3AdWozk4jpj4Eydzaau33PfaAVnbCCDGLkxSCXHcGBFYhi2n",
  "key26": "3Tx9g3tRTSFtWsyDBM15GT4ZMDYCDb5CdKNVZ3DFELTbfMGZ7UcYhnDeddPLA9XGoA3fKRbqq9sEy1chbsX1rSn2",
  "key27": "3GnBNiw4Mux2KUf3bkMxmdjA8pqz8iZ7cmQbUN4WEySiXVbWSiqbgjRcvmADMSU6bvz9qnpBUUTKdiowPEVVx6dn",
  "key28": "5jitnbUEyU8HkSejs9w8YCQpShpvrkRSheanytw67SnBVz5L5eG5Pcv4kJYESaqe2pGcCt9RVHTGssbtfbz84aQN",
  "key29": "3GMTUMqEi71uiC2KyPtfWx75ghLzn8Au1VWRz7m5rvuWLzgWhH6cgiUvLHVoa84DvM8Ltgck1Jyg71bKJ7fGSJf2"
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
