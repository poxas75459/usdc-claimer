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
    "5s16EffpRkm3V2qBwFPTzWFx9F91oRLuEopWHe3nSRVwY7n2Uop5zaHkDGxczZRquFVSBZbepumSThngzqxQc7fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGKC1YSGt7cDpnJvYpprjnX79Ew1uvoLAL9WPT8UFReUmbtqzqN7NLz9q1uJ86EF5AsMk8hhMeY934Gga1WNcHG",
  "key1": "2od77B8Er8XTv5tUBUTtRS4TrTs5sqfY4r9uib3ekKk1fzygBZkDV8UedHjVoTxXvDQg1Le95dFBYc7ewRPbFiWF",
  "key2": "2TTJWo1D5WMRugQaRHikzExuxXg2dU4QAXGqYTZQ8u4WLa4rnNhs3qmW3B31azUTJEQSzkYB2qzWJ81YkbSCHYZc",
  "key3": "5bG5gpW6kAkK4vHghLBw8p9P42yt3KmS3dVkGdn6EAtUTxijsMZYvmkdBWStB6n48b3vMUZtZnmDkhJjowAsRoeN",
  "key4": "uconhHseZB4nbzPZVV2D9eNJSuf8PTk2L8apHoTwvtj91PZijtNKJLtksqMsbYtfKncb3utgzuz6n82x8Dpv9io",
  "key5": "4gQHucsBkgmHTyg9mfHScSMggHJF2tRGzUNfQGgxWvWvKYpSUzpCc8jQxJKspNuvDXQfpr2qLmbbLk1DS2ggZypS",
  "key6": "3ujS4pjXkiDVMaKKsbyNQ2ZKpx7kNLY1fSQ9Qv1cb2Ng4GdQsqyoB8TgQbaAbix2a6P8PH68jzWnXnA6sQHZdR4U",
  "key7": "crfjUA4pa9o7iRrJZoGq5NkT8k2n7Y4iA2fKFG6rvzrbDs5LJiLDDKKMrSGGwYWAYE3KsJtggFYY522ULZKxtds",
  "key8": "4idAn5bm98hdPQHBJnadDzZuz6D81C1FMD1ycWyRpTGvBeua19w37xbv5u2AqWpkMSz4eJTmeYcyyjeVEsB6BaQ3",
  "key9": "3KZNR4ZYsamPMZqFMsxFznAWSxhEb4grWb4rQXwNQu6DV1DAbqvf7HBTHhCEjyQ6SJjpj77sSHUkKJoSfP6Xdkzj",
  "key10": "3RKnBcbe86inGTBudqYjRGJdBpx8H7zuhFPoxoK4t2EkMEKxZXcEFn2qK2dRLGyEGGd5E8uyA32BAamfMV2WRMYY",
  "key11": "5R4L4eTNsL5Ac2bqwrKGddE319nZgxZdcKNU8rE9paeeTnjh17VXxmnCai94bNzHFw1pQehLhftyzeEx5RrWBdLY",
  "key12": "3tCdxH8cE64kTVkQRU1D93FFQ8Sd9xmR1aSHea89q5qvRCK2EDvHEDeyhhazcg8Tx8zAZ1DXwRrxcMk3wFT288A6",
  "key13": "3FABUac2LqhvSxfM6UBTNmq1fyPCxWftGKkJcTenqpVC6JArMXv59XKzpUxBCnj9gJZTwrkEhhQQyaN9dm16u6Jh",
  "key14": "2xn1e9p8g6ZcNFqX7auXBnWjjBJPws6t8xGR9QywzwSJiCFP4SFuKyXxGKiRsGtZseKzbVtx2Xpw7QSV5zo9ALoJ",
  "key15": "48odhWT2Zc28EcVfRjHP8cJN6EXDmwEBgRCNvZ5BvSDjbecdPazs49rkpPoEA7X6iNXmLwmVRcvUfMS2Bjp2Swu",
  "key16": "578rYNpiZbF9MVSnrvPiiaCvYTTr9zkqLtjmMN7NYgBzfpCWasNEudmqG6yrRaTDKNiuTu5Mxn1Ezne7ovPBBZYX",
  "key17": "yCxSptWtJDR9TViSpxeujwvMwq6S4EsXmY8F8qE3W4mpdFtucoJTxgyMNRorgFzXi9iZx3Vm881Cto25WAvPY4E",
  "key18": "HrwDX2P4x6CEWaJPAFjusWKzfpBYHQd7xYkCx4TL5qzREmtjmMPDwYFrqgk6EYHLbQurDaD1niXh1uN5xBdi9QF",
  "key19": "2RkUtHUqerJUaebvxYCEB7GXebZZXEj1g7eq5tLdmdgUvi6LVywZeGrakXo8SiLm2HtqjTAUDMogVddidUvnqB5V",
  "key20": "U9idSTenE3LiZCSSi8Vt52kQ1T4FXU87QvrxwrQovnuMXZSae8pQdWs425BbXSwWqM7bP4qGRvchdt2YTDkQ5nK",
  "key21": "3gLKk2YXMyjaMBLAoNW9Zd8jkuHL6Vutu2TvKm4x4BJGCNDN9G553dGC54NwKdpnfuLPWb7V51a9JtCf3a1EoMLb",
  "key22": "316rV3FAugakeQGGEbqoxD5DLikzfacrVRDogMAUYDnBCTSkz8gN4GZSBV5jywSSZwghTsBjZrDCKMDw3TCibvDk",
  "key23": "2cy3yKBnu7jNgmKHtUx6hvYK7GgaHYnqsjSBrdNmoMbAyxtadQkJd5rsvqGZBriceyr7VJ84C1oNhF7L2Y4q3tqX",
  "key24": "4UtroVMPPL63qVf6DZNtUSfPZimLEggUdxg2JdbCoNTXF6jtWuuuyVXobwquWqnZkS6JGdzooRv9CYor34tsQPux",
  "key25": "2Fctj2grt9rtQ95Kd1AVotG2MCbhLCwNGtFZN2KvroQ18TPZMikqJPXzu3G2gYjcW1HSdhv8rNnshdAUhXYfJDBX",
  "key26": "5HgprXpuinbvXsyrVSGXc1HHeaFjrduFRqrtfTEkQfruuUnAcPLhnYaPD7AkZGP8TFotALPAxdC7J12B9yE5proG",
  "key27": "3yk6NrYckMpGF2ccqbS86hy7NB8erHWDCdk2BHSbEGR4n1ZceU7EZmiy6sLQAkorzQ5rtbikVWebSo1ASsdf5dZt",
  "key28": "3AMKYXR6FTT4aKvDfBi63ZC9Byu2e6G7LDkGfoZMSksduHjZAhJbYbZqmAh68EPPFzMemdoDLJhXd8Xh9T5jPiyK"
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
