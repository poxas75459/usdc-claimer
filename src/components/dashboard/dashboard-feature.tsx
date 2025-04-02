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
    "3xQrNHzNQDep99N6zThjwUgiNZWebqkbpqvWMGUb1WavXxgUWCN8kNAp1HCsaYfxeS8Nib6X6nx4cFpjNUGzskDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCgeFdavAwGgK1bB2ThmxPACPWsznmHSUdVi9ird2i3KmJPAKmQiygyBf9YWf6FoU4YPLiKMrt4PT8BLEgxNm7c",
  "key1": "5bdFL1H3mbw2xreWXBmjFyLBc9tSjXqSy2uu6NHLgJSRZniwwKhHvniePJpje8NQVCXnhC9XDPRXtdGHsr2ENfhR",
  "key2": "4SfHowPSSu4YH5PxbGk56g3S9rrUJwmR6b9gPWF59JAk7QxvyngYbr6uxK8R2ygKtn7w8UV7sZPAA4GEtaN2XWYW",
  "key3": "5Xk7fWrzxtPYbR2CKnxPctMoquu3Qky2EQHHitQWC2mbzSY418hPR12iEJwMKyL1gJQawSdEaefgJDcuQy9uBv1u",
  "key4": "2tGNdYaFqrZNNgMCwxKHBESheKWxpiXnW51PAKheKev4pQjBHV6Ro3uYbh85nJcNJUfyhkHGURDwhqCn39ZeJiDj",
  "key5": "341hr84HNSyLVuKMJsnTKJyNCvhKV9zWxt7TXk8vx9q54iLp3WP2r95HteSyn4QJ8QbDGhade3BiwRKAfPcUKDgh",
  "key6": "3m8wo21Tpgx7bYMSV4s696YtmExPFQzsq9FqCX4Q8YQcvu7L6hyg9khK51pVdYeJuCitKjt5RhLp5KQhkvfnh7vs",
  "key7": "A3twG3JobpMZiDiZhtxyJ3px367see8ZKf8un4duxCygd4jsGazi5wEZWWVXGRs6hiDjFSEboDXvBemMycqGRAW",
  "key8": "vkM4oz98eQs8aJ8X5xUESxqhhzC5nGEDQvbPhapugurnKRYQEi5SHknwmczyAF2P4btC6dkFo6avS5FsX4CzEkP",
  "key9": "5S9G8F9k5TLfgm6zbC2G3uHyRYfLdhu28sAVrStehu1pVyBfAaudHfoft4F6U7s3oF5XMZe8W6CtuPo1P7Ej29vB",
  "key10": "2oG3YBmH6tjZW9CTJwoQx8PRhCf8BKFGvUcSWFoByQdEf8UjVf9G5cP443CXadd2KThq9AqxdKMf4E6bjmoU9hNC",
  "key11": "M5h95gLp2okQMCehcQovAfBZg3mt8ixeHwHufgcvGkui31ybYZsNRmECzkwqSgdmpt8UZM3v41YLVvLk8HT6qQq",
  "key12": "4pBiH93KKwsTTYodMyw1F6AFZJPH7t2qJLyVkH1FG1E2ZKqu9rzpnPHph7oTez2F6NnyoCzQacno3Rqy7q2g8JAQ",
  "key13": "5e79An5hqnANqt7iUtLdFKH3EZ7BRbaWNTwzLrmhUseQDvctew7K5ic3QkhscywSuXEhRq8z73hCEghhBhJg8UDK",
  "key14": "29TgMKCaPZboGt6NBdped5tB8nDU9drUzD7hsYiF1BFtxzZkVmdC2PSWG2MxeyEbhkT5DeiRgorAvToM9YzTEgvm",
  "key15": "3T19R8MoQY21TB3FarVmbQrRsMFQhzBtUFibp1T5wJCM1jy9cyPG7VyHtDVF1tWd4PwRMMEqMdWf5PyRxhJMRn13",
  "key16": "4t9VULANPaSo4ztLfKsyx4o7Bu6KDeCrLgozJAMg1mwf2VDbBExNGfNqVYiBvqVmKQAUDtPyMs6xk14FCHMMevF",
  "key17": "3d5498AzB2LLNG9xYgmpkRBKN6q65aSvzGWPtrDN5dEL8iSHsMtCvBwWTYkUWrXYjVQcM9d1ghv7TXAHFrBAgBQb",
  "key18": "5HjhiuQz5LeRpQMQGjJ7EPYCGj3cEGhzeMAn9toj8MTJJq2VfSFgmgse9NYorQ1gDsY5a9VAMRoHWmMetKFU9q4p",
  "key19": "3TUXAC3b4XT6CnDA6UAdxQ3d18wXYZf5V4htY8eHVhDZLPws4jfr7QKw8jDnQFxUJr2dDqdu83HV4DGPYdZ7eRp2",
  "key20": "2LVEFj5DYnWDJzB9naR2vT8GAhNPTS9PbB4EGXsFdX84E7bi9aZ4HMF2vtrZKgTN1xTjr8Z5wUuPeFN8pcw7pKxE",
  "key21": "5GfA4PMTm3jocUpJyfcy99AtuHxaLe2DnAVsKB8oma6BjQ8tWGag88ZNbg9csYA3Z3Qo9sj1DAr71cyQ8Up6fpy1",
  "key22": "4anmtszVjxMsPSc7aUxTHnZWsc7GJ2zdYUxf4fWui9D5DqASR2nzcXjhy8qhgLW5m4i7ZpoeZmMbUZJpSRfCNVKU",
  "key23": "3pfDjDKarpENnTtQ5wZEEZEsWxWgfXDiwqPufSJnWVvYDu29C4JKzfL9LSrSgsU6anaqVtPwBrkDCaJx7TnHCfP3",
  "key24": "4Arz2S16yYdekerive9Fy6omPnpAYtkt8HDSUHhggngmKF3PYM5xXwdRjMnV2JUiDVVKHJJJovoQYBEHnFjNckB2",
  "key25": "5EBQPuhaNpeqTGpp3yqS27VmNramjy1ipVK87GWuKmXZXpP1fkdeHWekMzLibvt5gDKtfoDSsnej3TeixjjBhR9Z",
  "key26": "4Wz7WYC4qLg1cR8G1PjDF9AP5H9fdE3TFEaCucw2AxwvAeVsJasS2iQ2PQovZRXRdiEdPt3Hc31cdmnbhvbRhgaZ",
  "key27": "21ran9Gmu9fokerS3BY2c4dm8YwVJzBTwMdPhSBMcJKhKH3M3S9BvJ4j7drGj6WWhCSC1JgGC8dCkaNKZWsqJuwh",
  "key28": "Godij29Nw9KjKwNJYTKRtbDKTfzBXb4CAXocYhERNZtAuEqgc7VBZ67wtNZNpN3irAPtY5YJqmsKTEbkuKkfzQA",
  "key29": "3iUUg1pLdzZ1DgDMCxqFVutU9toahaMUoQFTwey5cV2wtXRk94HzTWwrCfm8GAQfkBNB9kZMEzUNK6k61GjXjLCM",
  "key30": "9gMSGGwDPVLMfc1napEoSgexvSfU9JUfiZvC1D2Q8moopDMoJRrUEsBtvDyqyx9BbicBZHaDrH5xSFz8TtVJT3X",
  "key31": "5fups4u1D59vYKQRTpv4ccDBk6cwZRYdGPuagAnQdiWwWoo9khcHfjywXLfYsyAa1tsFgxXAmf5QSA98AE4QtM2r",
  "key32": "5XEeoutTb8cGCHq5LPNuaopNB9FF1aCapt84YvhYix8E8S2GbrQ99yZ7igg6HThKeHbAU3GrkoFEPiKqt7mJdcse",
  "key33": "nvz1KKFysoaZE2rF3m2P33weERk3pKS9UzQr9RscNC6i7tanv9EdcJr5UUgdNeaxHtGtDxgC7N1racrKv9mW4pj",
  "key34": "cavG8KNd4WHViM9P9ZLR4Geuu9672LMNZZ36QgsodhAjQXyNi5BTiodLQUxANksZHVdQuVbvzYCJQdnYDiNZz5i",
  "key35": "4QDpmTAwadDxD16erHdy8L133GofNscyYZHocCq4PJPxMjhhempe4n7EcoXkPW7uYdEbqjUTzHWiVtYA6p4A8Pfq",
  "key36": "2DuXX8hRxwQjbRhAyomukmWXKuZpt2MpCiN8LVJ1Y81s8bAFwMRBCq19hcgHm1o5fu3queh74iiaJRgz5jDfRotK",
  "key37": "4gebESgf4N3bKHnhDfLavpSuGL4txsQGLQTanXBWfDnKnRWDzAV2uQe5PwN5i4n4oMgXiwtLo72TNdyzpLdDEyEW",
  "key38": "5ytDtL1WexBh9RXdBgnwzAxXScMB27w9euANc9sXLagvGQs7BGHAithBRWGybroVS96Hhp8zKwBsNBKd3p2aewjf",
  "key39": "3ZqGsbB8w6mGYkCMk6QJnhNvtFHLSd4EJ7DBk5GErwvCUbvLfLcWHbNZP5NKCGLcsjD5oqY7KanzbwHLV9gp9c7y",
  "key40": "5j26D7KfttWWcoB7p8wMxebeaWCKbXsik1hhycxqk2cguzvCBTsuuGoqHbrmqac54S4T7u3pmebgU2T9kUh3a3EK",
  "key41": "2LUs7mhVoJCN5vRfzrGbkawg9G521oghTT9yUSyWdgYj91ibQxKMdGL1CDSRLVoz6kHS6PGVRyuYSyzaKRrtSAm1",
  "key42": "5EBxaR5tGsbcu2dYMNGVsjcVSwvxbyrfiVKrccT74jfC9EvhqHw1VQdzBT4A2DZNdx36uNGGEYD4NxduZXbCR2Nc",
  "key43": "d5f52cbrQM7vazgWLD1oUuP2P7HgLmKKtPdAz2cGypRo1wAVjTbomnqFeCQ7e8UDV8s4eXUM114sUbRGydWSEUJ",
  "key44": "3cUcSHZe41LZfSn6Cg3J9m6ticU6onYnuVK2XxQHQEaGFaPRtx5euee9Kn32AHoy4zwHiMcjWh2i2pSoxxbnWpUP",
  "key45": "5LZJ5RUkowPvrGC7AdC3qbDTHgo7Wss9xcBfEyeurH4qzYj2bif2gC6PoBTv3MMn2sXz7VnTzEr98ZhxqJ3JN7qG",
  "key46": "2bjEJvwq3fRS2A2cEas4Meu8pfsPCtQCf5DGJVg7cFzBxqAe4tBJfpBgXc1qTjM4E1T2bhKu8gzsSn6gRGT7FiN4",
  "key47": "5YwgLapfB2omtDWbSBwyfpX7iGGNCqvVonYdLKRHLwrZ61cQeZ9Uw5cfm7LrfR1AkCMPdNzASFVvLNVEvTbXgVjx",
  "key48": "3HmgwYkXinWYaKr1KGkL6Qzkj9hHzZq6CH3XKLcz9F4zr5Wc3dt2M6pr2iFQsduZoG7XodkUUKC8LDXb3ntwYvYF",
  "key49": "5ZtZqsNi3dBEdvwsG8rmk4sux3jf8S4tFvMPFFFJsyLvNXgMu2SvWNCjwMNaAMC3VJ2tomiPodcgPAVMp6o9xvna"
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
