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
    "27VN7pUfeeYcrcjZqPqjGrbVAaef1aFpVhEuJt1SEcf5z1Ufk6x21bnPfd2st8i2iDPN5siUZu7mXb4q8YuUezdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ZgTp532DfJWgVqhJMUP7epyGQiCfn2d8GD1qh9bA3zkRVHnUL9VpbbjAAXkX2aooTX6easqpwnsW5Dgz4cXfdK",
  "key1": "56HiHushZwvdSmscT1NjQxEx7ZtTuemcpPqJkkDvDjWCcxJ6ZEFuujyXcQtwe2QSgx3FrW9cqBXqdLJfj5nhdTbd",
  "key2": "4HBMMugQdPrN9QHy2G8WacRnX9ZgbXPqoGFBnG8ySZ7XGCae1ZF6EZWrCiJRvmAVBfbeJL2C2Dm4btpRJ9ZpeBhf",
  "key3": "4hbNhf87AsXFxfBKPcyyTvnGH2sUY31dMWGtfivbejHsxHTL9CNyhvoYkvd8RppQHZVTnDaVmxNx3haNYi2gPNfC",
  "key4": "2ZDWMeGsAzNBoBuTASh1EJKgiuR3YereyrTyGYgZLGrcx5Vcft1pEi2ErTo6DV9DQcoQAU61ZDcmfKF9enTxEPBG",
  "key5": "sn9YpNRegk24Q2Hmt16xiYsKzJzEWyUeGJW8K9mwhqrhgfLxJoRsxD9DFoEiFwHmEuhim6DyPQ8ybNmWt5C9yEz",
  "key6": "2dZrTnjRFRoHMTxBquph8BtNP56gT4z1e91uhKwvt9dgPYLhN7dnYUtacbRJvKqf57jW8oVYK2pRp7n1GLJbUXnE",
  "key7": "4fxCFh3wkvqQ9xdczzQgcTUTFKWapGK27HERDDWixBh8wfPMnYPr8BR5eow8rZTm3DGKeLJYFkGVDTvoYZgjtQam",
  "key8": "2Nqoidu5rpagb64vA4mg8tGC16kRi2Fw2k1XKWyvZ8kX7ZDh9C4bVcBwZwe5XeQ4jyAsLmJc78aADtcCyGDH5uZ5",
  "key9": "34C9N72cBW4JPtXMHySggLFqtVkKcchtnUDbAF3LDgpXuYPQvoThGFRziTxh6EoYNcE9tbx1PMbcw9BDgPvMAi4h",
  "key10": "4JpNb2Mk9N8xaowWYAvb5fvN6HwGujzp1yk1TrkBiQduxDKE9haZ41geBKLf4gum7Zi6nYkGcE7tDaM9LQgHLopU",
  "key11": "4r4XiPfcLZmbEJJKfxrrYSP6CnisYpCp4VpbfnrWfZesA5iQdwiRRYHhqdPqHDnDaRZDY6Fd3Vw3yK1J9ZaZBSmY",
  "key12": "4sZLrTMjcg89UhhRhGDeydn4JwGsKo69pTvZX7tsSJg7G8Mu52gYFdh6URQWQhNHDQxfJxFjZoPzRFyUdg5oWKg5",
  "key13": "4Y9wMUtd3NGRPX1wz5cXzMG4HWAajjSMcSpdnvnuEZYNG2EkELhB4BJiVNUqVBGo9bQKseAjQp6QvBpqXmwd1yvJ",
  "key14": "316Ys6c2uuyhh3KhDsFdC3yGzJLbqkLUoTzoxJGTFXVKXTHxbRmgUFW52NxVXJkg5mAvyPbdryXAFUdJReLeCgoT",
  "key15": "2ovFKXWopoPTCJtqC6PsfGo2Mv7uL2XkTop2z7XB6tEoho3VYp8aUcjQrFRgGMwXypBqLeeNuNQQiVfmN1Q3pEMK",
  "key16": "4ogacrx7A7srS8do5n3iJSSUPr6GaYz2K3p5pFhCpaVn3JNnKDBY41SAgBs6uj5UaXEC8NA9HqVGb35ogqCqgVd6",
  "key17": "5EAtRmB6ZkULTf5KshDCqPZgGz8PvbLr3vYSQPn7JKnt5h3vhxpTQjVFgnmuctqEPMYahYJu6XnkqKBpUvX6suUo",
  "key18": "mF7BrQ3fp952e3rVp3wauU98qWV81sgtEVVKWsJGHUvYqfu1FF63aw8sHeHCTRWgVxqdgXUcZV3WYNs6Pjw9YWx",
  "key19": "37GkKQcUtES2V1FKwGoX4MDW5g78iyLxvBbSB1oLGF6dB3P9Ct6kMGYvUGMLe9q4ijV4BgnrD8E2LfAHmGoy3QXf",
  "key20": "1FDGZ1m9fXpLQw9heZMhcAUMAxBzDcUWyzXwxFAfz3qTEURrXoiCCMj1vw6jQjiBwFFSdFuury5Hb6JBEXHbSU1",
  "key21": "2FUrn3twixD3aw8QEYRG8YT9dvG9mgxMhCFAQB1UQLehqCcWjXyGz7VNdh3UNFLmN6bekeo1GEN8FUyo7PrxDATN",
  "key22": "5eBkpiJ5QvMdpNnGQ1MoLrk8itEeKUwwSATnZigSUNvAwFmCSBWqzs4hXdk7e2q91Gt4tEMgcGkVJW5fk6AAMQaw",
  "key23": "Dn5gW5LUXn1kA3DNqw75jpUikiQQM9PqPbaCBsVwy8uvgpyFQMwJHUGZXZ7GpT3Y1ZxMpmS4dJsbGbuXSJUcz2y",
  "key24": "4jr62HjpvrEL3PTZixLvVfCkqVMp1T3MxPcDNPx9QewrEUKMVsfg2RTxpSZ6T21655KQtMtx4Xn24mfsFkWVNPvq",
  "key25": "2FNjEHwCZGXAe7VVfBk9tAdoWrdoeFWMu9KxEbdowt8W7qpqSLQBX9Cd2ZCAnpvc9vHYDXYVxTNMUYhgkcCDnSKi",
  "key26": "DwV4SXeioE51AMCTdBtu1Nk4Xdi3HWsnikHfM1S1L5k6nJScEYR8uWNro38M389vh2uE2LtqEcd1ydjyTio5FHp",
  "key27": "3NbLtNdNv389QGwNqXsJS885CqhYqP5A5xJbFuBjedFoPGJ4dSphcco8bmLgUaLUNbBfjKMTSFnnxGKiWdBT6394",
  "key28": "5hnMz6tyd3ZTFXuvDz2ZNZ1nnsnF3RNiHyB83KNiaj4pqhkHLLFMveqzZ1WQ1YSaYtAtip1yEb6zVsUjHWSNbnJ",
  "key29": "5AQDGWxzwyoQJhGghCuJNetre8yrfNyMwf6TmSLrWvxFuG8oEpZbJBupTUkRMCLnahcZU3J7vxCDVGPoTTaUyNyP",
  "key30": "4bKfepw8bLfkHPkT3i5YduTvQanTmdijKQDCJHBWM61YSkqpErPsqx5WcZPEFa59nH9Xu56w2mknY8ozcjcXFrXt",
  "key31": "2cbDQAmBQreLm7EoMdjoS57CtNQGEMoR3ir2E7uFnGiSiZJPCidKfY71w9K92fbgBMoJPMoKGmar2EqVvCSuJaPK",
  "key32": "2Z9EbN24avR8NpuYmx5DvR5QSSu6nV1H2NgVJyiZ7g3aWNBbH5fQEQFPGQcswi2QbgEz32ewSsWztM5jJfTYvL7s",
  "key33": "4VxnXRa42HJwj6VZaeH7sxnfygGbBFEFpmmbDJUsorY7ADQt9CBjA6dhqt1k6ef1w9uaBHb9i5VqyPh9xM9EY1tS"
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
