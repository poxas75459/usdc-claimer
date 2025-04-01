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
    "2FmJjrPDoxkDg1JwQpxdtF5o1iFYYZUK9cnsXeWNa1pJFsfeuqCY1nd4tpGxcEn3dS5M35nQDKT2oQbgPJtT4avJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFd962TQ5GMaLRndmEmd1snL3Dqm8MByeYwJY6ZMm5zyNsU9QpgDEKWhx2qU4Y8PvBNFAuzuVBzA1c6gmr9QTeE",
  "key1": "3fHjLdkxHWTA8q356mqb7WEpVqzFzoydEq1FpyJY5M9qt7gUnqHoZ8WWVzuq6CXL9uCLd9gfxhZSw4sBiHTYe33z",
  "key2": "3Fy5W569cp9xEMQNWNBmyggt8LYxgSYu5kHBjKabKjnxABGzoRB5mcgCL4z1CmfjUfDvRJRusbsdndntaFj7bQJU",
  "key3": "4gtaAUu7rhR3q9DRynvDxDe3uinUUQb2cHi9LotWnrmUiC5x3xJWpsHhHB4GF12GT2ak2AHKtboKSGTLwVMp1uYF",
  "key4": "3GzoF4CD1MaYWC6sAKEjubTTZ2ohyB9bgqUhKXUWj1NcEj4FeuGuR86SNctmJfowNXpz39PYCggdBgMoxx2YagYc",
  "key5": "3QcMw8WWVcJFxPFbygf7FJpsu7eCyRqGRcRJ16MvQyzpRdph3G8LVZptWU4GZBUUqpSy2Y9RkfbQqaE534vrHz6",
  "key6": "2sQyYV42bCKBAAJNvpe1jv612oiLQeYidTxT2TqhV12gKz92CsFyRyDMBta7h8Fgo4D5fe53j5D9SsQ6bVqnuxj1",
  "key7": "37EdY9KGoXnLBx4sbkuttKKxxoMtSc4Vv9hH9B7j27RhQDJHDq1JKDWFPUNc7iip8fMf9UCv39HAFhg8Cj929M17",
  "key8": "4BMMx7y8r3FqBzXH2Kvv1P3R5wVQYERJedjojmE9RSphMHP23KDqAnEKkL8LcAJczU2B1yeEHyc3oqFxa1HFeuWT",
  "key9": "5RzzvgZ2THByWhsxZLNKGys3kV4vBfwCajWBvwEwix5SP31wKzQsiopUXNE3pSZV347sRjrz9SgMzYP7Ko5VWJj3",
  "key10": "3rkzC6NyXrG4aLUwEmVLiPhZXpRiAtocGYrH7ECp2MDMUCDEzMUu6kZU89inwoimgDUcMLmCCCN8CwDK7e5Pzfju",
  "key11": "JGa7HyJhiiAS4JnFSNAvPhbGBQSHKQByxMqgTJxc7sEKQd4Rc7dtCDS8u97ZrMKEbDyA7rkUHU6EmUbNqATGrXF",
  "key12": "3tD6S2YokeLaj8qij4Pyn5wSwDJPqtqUfbBFcNhJzwtZVw4J3TPjX1aakXCxD5RXHKCmFTAMg8gQzTYDRFPvmbbJ",
  "key13": "zamiR3Jzq63gYvRnkFyqMV2ztTRDPTwT24eDn4K7Wv54dZe1WAsxBEkPLiGW3QEMiwjL5WsmKyc5kjroZJiJzKF",
  "key14": "2jzsE6g59EK7VA8W1pSLepQrHqsHVc74hwaZcjX4KKzyJ3SgJyCfZ5oaAVk5eqvJPmZYEkK3BrkRBLELUQSB7gB2",
  "key15": "5EQfuxwFPdZKBbTWHuQFvisKYW8QWFpkeCT27yUgeJZ974EaEoPcXE5hWE3jKcmdAYxziPKCRJLG76qYYMzryzze",
  "key16": "2PyyRibv921jHiunrzX1mSt4Au6yY3ZHM4vGUsgzDGTWJ8Qfpy2butARsCt8koo9H9j68SkPTWMcAwvWXBi4v6X4",
  "key17": "4zqicsWAh3PE6RCgcz7unMA8hSjfJCfcKRZfLmT6ySoqvYJf4fWYjYMReqMpcyKWcaDquHtJs7L3TJDDWu7y6Pse",
  "key18": "4UDEykSsAQudhEdhVaj8Mo9LC34nsex7qQPMMx1fjsZeasBy11d5D3RCS8y5G1pws82za6MnY9E5E1X1o5kYrhw3",
  "key19": "3TiFyJgjVi2rc1B25tzKbzXJEeLmKCEzyD3bxdCqUfRZ5Ff5u6kwpFg4pDZmy95ML4QiFp6WR4axwXR6fysPxaNV",
  "key20": "548zDuWFYMekAFjp7hUEWPa4JBJxpQZtQ2LwVfWvoTk6ub5juHoaqFkUkpys6PP3MPnzyjtrVRoL57tV83rjGWd8",
  "key21": "48Gn6MJ2DPtHbDcafE69JDDvZMm5HMbQ68dSer2WMJfWTba1pJbqvHo3LE5DRHALtMu6wZrM8qH1RbUYQFYSWUTa",
  "key22": "3HL4mPDMXt8fsaqqh8XKhKAQjdSCm1WA1mkLr1oC5UQ5joJvq3oZPB5fTtkasC5VMZNwJ8FsWEAgnfSc4YrtGadk",
  "key23": "4McSZtqSX12UvHac4PKoT12RoWaVNBhFaYptJRo8qKo32pU73gNWXBgz3XEQQAkEwidJ6Y9Z4d4gFx2Kip16f7ZS",
  "key24": "9khe9dqq56i4ixxAFHC6DaYvBHqddXDXY9REHtopNcJLV4DLgUdCgUPGT5V5EdGpYrfVfKkgxRHZh2cM1bjR3nf",
  "key25": "3GwrYxNtLNiFBDVDXbrGATDFTRh3eF8AvTjLZDQkf9yddB2GeCekXoXmhWGhoTKVJdwCMQd1LemUX8Y9dcqxCVpF",
  "key26": "2xejRLstDZiTrm4bm4H9ZHz9TymkseUUybSaj6ySjVypdh1DaBnPYRKoiqAsBYynTFkYAX1fso1uuTrJN1vMcTgD",
  "key27": "4eyUhhEN6BMsYPcxhiaXs9cgeP7RJvWTUk3EZ2byujgrajfTrDJNWj2NdZssrBReoNzJmZpvQkL6NtYieXMe8vZr",
  "key28": "3sMdDBsWRurU4QzaviwKM5jx9hSZS2Q6e42weT8WuscYt2ezarpW9iHiq44DYRWVQJdyDfAeAwFwUVuNfeXEqYzG",
  "key29": "BMh71z6CmCZxZ8ryWWX7T5cAHs1sZEMiGipkcibb7oR3JXjCoq3FF9hboQqF27KA2Ev7RFtjGHyJVDvZfugaKCB",
  "key30": "4bAiwxcdL3JzxgtZexTVuWM3XHsohzf3Y4G8MKKFjLcPw3P9WteT2aZpWRa55gMk5b54y8yc7NuotKLyoqvvDGZx",
  "key31": "34eyKXBMvw4CiykLU5u4iD4hR3jKMtudYDwr4nXVmB2DPhkzuqPBLXLYtJs53EifB9EdKqWfyQsn2ZT8ZE1JFqr2",
  "key32": "5qyw7Ch4Lv2swTp3dfmTKRyQKjHPBfEgERoCEx17asafCVjxSzKyqnEiUA3FfYvs5cjq7MZoL64jfJuWdtJjYwTD",
  "key33": "5VnPcJ4ENoTu4CcHgWmzRNwnoAmF3NTuQqvg3PxUX2Kewuw1ERg6Ponj8yNBxZB85aaoDsutfM4AAq6zmfaR8Q1Z",
  "key34": "3bcqr1Pdkhfv5ktV28m5JDFcTHKqgw8JWcXBD6QYCgJWSBeKUKcNbucjcGCGgs2gq3zVZygAMX126FVGDaT8DdCH",
  "key35": "a1kUMwkuMx2pL6tic34jdyYxxbWPuiMUiFEQDD2jNqx5gu7cXAhnZpPoBK2bn3qVdERnMd2mcod4m49LD3feYtn",
  "key36": "2QcVGb8yUzebHiW6SJd1WiL6GfHe8WtUWG6iG5jwHSsSpRfkyAib5aoQYLcGryLkJZBx9GQpTsbfo5bvY3w8zfT6",
  "key37": "4LtVozV3UibG4me2DbZhh9zPr5nbKWJRunhfMtrLhuTqkQtqiRF9P7qwbGbmgSsiB7L3ydH7Pk4qrr6caurEYmEz",
  "key38": "4Gg2g9LLii7Pbb5VCpTUvkmfd8E6eb1VeECKuVEdPXoL16AJQshJ4BoUbsiAcyCR3Fr5SZBBzrYwvjLWC37UqC1f",
  "key39": "4Uo32oSaVA4SwVyu1pFP6TG9QSDjztsSAcT9nQdQGop4GSwA8xuUwbxxvaZkKWBBzLURdE7EVmx6UpYJQLbke6Wk",
  "key40": "5vdzRhKsJZWSmChjgCjRTsswpa5jjC4cjJoDhdvDyUYxtzdSmUm1Uq2oCM19zmeiBh839k1FFbGZEQkLSqgeMHyQ",
  "key41": "3jzB2TT913En8ddXJZnvYUu2xMwFhc8x1PUjg3wMfqPK7kV4dviRSm9gMsK7VnDzqyyjUdaLubA9SMGtKGbEgHRE",
  "key42": "3YJ42JPCY9Z39fCBQXJhF7sJRDodWMXqRWDVuNposQE9VEAjGZVGJKa2AqtHSHPjBYYDjDqEh2xZ4EDUhhZN8qiT"
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
