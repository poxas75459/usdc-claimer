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
    "cbF4d8RVozUZ8rnmDNJyjZge1krVsXRZukNVrTwMd2fXYjq9JBifMnA963Uqq95McbowXP9Zv7tXCYKrt2wCMgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yc3pMhWRUn3GgqgjDASaKUs2wGc3JC21dPR7qi7rqxwvQNHauEq469gXRUaMwiG4FM5Fm2CbLyiHpymEBVPEckX",
  "key1": "njzPzXcxBpDjudcoHNFGQtAXB9Y8Typzjzw96639fBSxJkUfKFusEHY56dofDvKoEnHHgEqU2xbLzfB82ZENZFK",
  "key2": "2muL4TFtW3tnyFnHoTSKSmT82Q26ttaaCEptsqNnEYUHqMRvfEBHiP9EzVcu6jwdFjYr4V6UkwdST5JgKms9b6Dt",
  "key3": "21Ema13437cGgesVT6cZ7BMo4NVrHxC9usyGPugjmvbzDcaGnsmjV2CBuTi2qJ4oMT8yHqSeWTgQJCMYJMSHAvye",
  "key4": "2jABx6hWpMhiRzzx2syfqH647qivJhnkudiFYdaCyRnpFFMazWwmopcgLYntdsuecgGdRMRTfNmFUK3FkfQ4aifp",
  "key5": "3H5gJhD4qJYwnf6Gh2SyeSTr5UrGDQUsx2r8E7MekRQTzKndMUGyfwCg8VkQ4n9RAr918ddcBHs2gQ3bji8h2kFr",
  "key6": "3QpH5jqHVrputhKWgbs5tGKHWSanXPbpEqfpyeRy6unnSQqBsDiG3nbVMy36d3UqSv62RZCCYxmFCLEZ3NKc1Rq1",
  "key7": "4bzaHqa4sVAwcbEbvu9C4bW74dQyWdH42bcTYEs1mNtcm385sWbkKG8g8PDXYxZN2E1M9ojMtPopfqN9YKaa2fDb",
  "key8": "4iFz4WncYrKJbraUmvbjJFnoy7BaXdvHcPg5h1bdJxZCKrLau6qpHX8AG8ko9soRN8Sb9MXYrGCwy7Xo6X9GUUG8",
  "key9": "2CfndWQ9PA8JsCYjMAtnTBHAtfpgY5pm8E5vjmDbesMxGKWGk3f8RMsHhUKiP6e3yUu2qysJjYqAUgeuE4PMz5z6",
  "key10": "2PcyQwxdbXmp2tCukaoaK31D1zWWNVDFTJ5Fwczahyef6QddkPyJzr9PXg7ykLVgyCVyV2anQHNwZEt43z2hrW7x",
  "key11": "w1VfsRYLLuaP91BPWZfq4BYzNAaFewUfPs8QEpJLKaxUf8GhExrxjWPfDn7hTP1TwjivDnL4BCqQXkSJXK87MSa",
  "key12": "5hPUhBhhxu8haWesWeMuD9uLCt5baCX9aTgaZxXCxmSubnrSsyuxVUZWE2ULvQQ2HgwVXsxWo6xBzKqQV4Vs51QK",
  "key13": "3h8AzrzMcR1EvsFCirHy9mnSc3j8FFVR1BoPfDDmmKgVSk6fwu8bTNZBK7M5PsyaSmqnmrkFH9W17A7PpeLGBt8u",
  "key14": "BpSuaxQtybQ81mu3U4qNCq8F8r6AE9dRaxF7GJEszV4bxyTswK1NMDYsRkWLTcr386yVnmjxDwGPhtJHd6uvRD6",
  "key15": "48KXky9Q3kBmYC12oBvDXKyDimk7Sh9gguS1NQ2YSm6JKkR1hfSLYVvvE7aEJBcna98FbecbtqT7yQfYLZRkA1iu",
  "key16": "jR2mjSD7RZ4vhbC8oLyRWqQUN5rnFRSPfKGQL6jKgMF3ozi4WgmnpDx53mkVf6yDKamZ8BDKZ8uS4q4uiibDk29",
  "key17": "GPg1ukN1qosd8zSn4p32L6iT6qzwMeEQWU6NYe8hMwnYsx5RRbSpR4M1NhMYLEN5KbbWBDqG1qgVpTroCAut8dp",
  "key18": "5wWsnS32DZu6Gs3rs1v4n6jXcwZZUXvXSNnYsxhYhuvtqudvRfUzD5aucutWQR2JXsJxqKJCcqzSotY5L4NM83Ui",
  "key19": "28FvzLjrpEWCnycTQPYkFPHM6D8fY98cE7ErU92ah7Tz8hgjJbcU8nn8XUDpp8ZfBevMNKRrkCX35uHVnReCGp7z",
  "key20": "3Aty7wBScHKd4wGiq1HUWd8HKr64g9wbKG9K5s3wD7AhWhRR2dJfmnRtMRLHehkTwoBQT7JCggQG64mtwgavewSp",
  "key21": "5D7nNQ3eJDoA9v9hzJBxxN41hUSveXEyRXhDf96rBGP4KtHZET9oGSUNF9Lcf44MBHg4B98SNe9FQdKXVefYoqwo",
  "key22": "2iHcmDVp789g6eAtoU3g8FLDEVwPVB3VCCA9K2odeAUvKLyxELPEpsVDNLjp7nHdpHfY1TLLakLdVn9ss8etZCV8",
  "key23": "4Ye4nHxLLGezLTFcUvAa8g56esbtDrr2vkBfruNKMnxbm3SkinUN54rAGDE8i8jRZLXptfBKb1zBjdakwmbD1zUN",
  "key24": "5LTi7QJ795WXiTAbkanauKJNsXP5rwqgiCczYTC9CGfchsnDciCadW1oaHkMzxF6trWkZqAaTyogXarEmFpGxtDy",
  "key25": "4F9vGcJtXnG8YYRcTqeQXEYGZpZt4PLWWyZK7vYUhdQpdZ32z8wQkUJLQjFqubz4gc1nt3xJYx1bFXDLaepaTByU",
  "key26": "4e9z2H8uckov6N23dT8WaB3stx7Tjfr5syhiyBKnLvy4hDR1rAQYcaGDdEfdrjRHWGP1Tp9Qp1xYjs4ep48Fg2tB",
  "key27": "6wXhzNxxgR4EhvwqZQ2btff7r4GxvGqmpi2v58DCHipHqqYdxXFwfpb3M4Fdk4GnkEn6FrbhFRJkjFeFxh14ZsS",
  "key28": "2Mk67x39hVeuyeB4NhE6z7QQHPSbQVWaKicCiCRqHXJWJye2J6mmRhsXbk8WWxoBTdHVn8o3NbkoU5XV6an8b6N1",
  "key29": "BFPM74rAsHZTbnUhXjnWZm2guTJwGyueRDpheShijbPAADHzTdnoseFLYgGnydRdWoseVrpcB8e121GDJvHFpWg",
  "key30": "295dHQyeweU4sWNpdkay6ksYtYb8vQ8dfpLtasVkDZ2m4JvPKtWafuvjEvDLwtVPtPDd8Gc17weHH9SuMF3cS6vS",
  "key31": "5b9ocDZ92Nq9z9BkvCnaMpRJLFVffCGWoosuQ3eZxpLshy2BCqsMdS1LiJ9HaLTA74b55eVegE2zJvU1YuQk8vJd",
  "key32": "5XLdiKRiCyzna7sXrdhqDvLJ12yi4E7Hnd83woJjAVTi4eUmpE2uGnD7LpH3nGoPBm5cizZk2DTYCvGzLbyPUN5T",
  "key33": "z2zLFJRfh26KrPCuYHE1qSf3oxgGbt4czbugbcSYAtuLCERJe5T2FhXuyWLAj24Zk9Nd6tfMPdj5BGYvx6UweAc",
  "key34": "33uNTg178VHnsos1NqWftDNUnwL9Z8fyDzcncRzpKiYQ4NZjdK1xMc8wVKckL4QzgDCnYjz1y36CndVYkXGKqCZP",
  "key35": "2Gj9dA6R4PHUoBCpoUoKY7j3HdBiW4N7GS7spAv9UczTZx6xfQYJF2pFiH7Tez1fLe94gNoeEPfjMrnDennr5QdN",
  "key36": "3pnnnF2zG3xpsGnmBExaYpEzbdaE6ikPL3bX69iWynPfLZPELfhHHjJeRRUvfiQL6AfqkWnhTgqqBrjfJbmbzQq5",
  "key37": "bazJvwWnEn9cKRLh8Vp1oPner1NPcjKMsa57Bv5EmRxNtxZYUMS1f3fFTvZHXtvu75aN5UU4bdR82Q2HLWqdvkd",
  "key38": "4FTPokmJ32WS66yjvdPjV8ow1shp5jJ1kR9HRk52rKyYptMK6JwFZcpYtDnuWQokWFi5UKFoyc4Lnxc5wFqTGtHS",
  "key39": "41VsBeQ1hrTKSn2tC9QuCyghprCP9Tkv26pw6aEgwDfG8NTBb5JY7hL2mvEpFKhpzvoKDFhYJb81awMQGy2pHHSG"
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
