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
    "3g8MJDcHLbjeSkRySDFPiJuKSqp1VTgrxwvyJqbdA79kSrJ4JhA3cA1sySHDHgwta6MFVYL34xtkKNeQSqBeSULf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26u8p8U8EmMZHb6APJfuD2v4jjufGmMf9qEqFS15RmzyAp1ke22Wc2SiSQThgUSCcqkni5BHjtL5P9Afox2yJhLg",
  "key1": "399z9zWJzXk4h29SP4xiLVeBMdHGUpbBpq1DsW5EWSU7MhM5sRv74xFNuVhcTDTHYDcL1kHPkThGEJrPBZiTRjaL",
  "key2": "4jWBaprtazgb8TsbNAjXE25BL4NWm9iHe68CDv6BhBzujC1yimLMxP6JYgnvd5p8jS2vFFFEEhUe4H4kEa78mbDN",
  "key3": "38uBc64fuqmJHDpZqcCdk19FgGBjcUsLEN68BgVdPY75bd548bEtQY3BKbRpqFnA53YaKoWjMucq185qXtnDkxM3",
  "key4": "4L4M3mP2PndLRvc5NAuwBGkadmdYDKdCtikm3Hnho54BfkUKDrcrZb8tT6muBmWbEr61TvvTxE4yidc7BLoi7L8v",
  "key5": "2JzxtGNoaLTZUKc5J4LTs2HdXfKYCdV7xTcy5Tpv49TuJ2Xga37niHfHkgxTZ4JWyDzXSvMcg8AFwiMVyfCuxp15",
  "key6": "3kZpZ42HcVd6hVqu4wPWr7uGU9aaYui7RqntNw8o9PR4NNkdwuTyjAUEj4oxD1v8FFi2dhqrijfBcFuTzxxVFasQ",
  "key7": "2rtg6mfkkn6CvXHjxCYoqw6w3oj1PFiWHBWrJc9KgQHgmYiYZP3ExaWgRMtPvJxHhJ84xVuFNaoV2f3m41Zmu7Au",
  "key8": "3xcC6vGvXHGbyqYE4UYXnu52evVCjFp2YrKpD1eXsumx6no61f9PdTnNS9siS9gdcDrM8dP6McNwcCtXDf6sneDe",
  "key9": "2ZAgCk1i5xms6AA915Pm69N5djdbTTTby69pTaDCzy2R33hvtDzc9rDyqy1xJLXNXRQ2DfDDz1YstFecwwdRkrSL",
  "key10": "NDm14Zz9fMvKECjPBafthPQYMQAxnm7dMXRqVQQ6PEEYXZheGJFsA1DYXv6voFjpRVMp5suJCp4SadFk3r436Q7",
  "key11": "3UvJd69kYBC9PoUtUihrTkwdw6tt3WqgVoMZpdsdT3sQbynE6Eqj7SrmXyUzNbZsG3R7rUUxtfunPbgtgb3NqbVN",
  "key12": "XC6tDeJn9WzRWNZiP67QeZ3xSTLCxK2hoicUJVJ2JqxyNx3wJta24yetwY52gt7wEFNDgzSW9yBTfmPAexDkbxD",
  "key13": "rRnmZXdoM2YBY4Lfwb723TKQGqFF6YAYuLCYrAjitmvGjxb7BJdueXaEEBzGhcvZUGQqQxaTBnEwUJQYrYxmuKP",
  "key14": "3myHQtBffVjxErVaMkfGefA9mBhAWMG24hPvrAXkzqkhjDGNCpUHPSZpZmW4aa7jjQJL2DC53gDBHxpTt6i4Hm5W",
  "key15": "2aRCnEiHFB1xRrYPTPvTKLPZ7yK7xPse4yz3RPaazeu95C1QQMXe7xgux3YHDrYTdMBanSA3CRSuM1mXEw56kA8Z",
  "key16": "3nsBwWPUdrKXbDqiBs9tvvpc9smVVh1YP1khP3GjbzRvttJZi1DZG19YYoNEdo3AVSmQaJ8MLkuB8atuxT6J3sV2",
  "key17": "4xHq3ppsoqughTVffKnG2Y2V8TrQhDS8s7pFMxESiFfyTwecZ3DsGhprDA2BWkzBU3nzpio2bakYhDgMq5Q3vjmx",
  "key18": "5PpYxxbXaiwsWsjXL45S4r2SjPho7TuCC4zBbzK4pXuAv2sFQ8mNedTAySenc2Cp2Ts5XAbyrKRdxj249yQpaWFQ",
  "key19": "7aAFDeYN8DTD34N4CeBNdtxjSccFDoWHfXdDqsBmEXgtDjkHCzca5s7HTFrjQFSbujRMzTCVqj9nRoLG4NFZgA1",
  "key20": "3ETA7s6GAPmqcnVQCxop2wduXf1RYYzyjLMGzxhHjHSbz79Gjuzfsq7CGjo8E9sRacvM4Z9scboDNQzzpsMdfAp",
  "key21": "2t9FTMwdYZvveCU1GegSMQBYJSTGSEA5gNsJWEJHT1SAUWPT2T4G3ibJYzz84qCxfpb5spVpPeuz3B1gkuVPZ49N",
  "key22": "3ZRmxzePJPt9DkgUGuoUeeH9bQZVVKXfBpQZ1eAdQgtnH7KUHgPDuk7zUFPyEtBuDUMAyPdutzBAQcsSLo9HFrZ3",
  "key23": "5sCbeRmyVmYLMHVopEyUgCsCwome3zaWKFLYrdEMKqTjfTv3rwq74CpNKFgQQhYKo4kxgCPzFzL4jBvdzeviho2M",
  "key24": "29s9gDsSbcCF6xFJrEpjKzWzmFdKCw6Vxh9Mmz9yFQZEmXzmJLaFvFQAnoAQX46MCDAiQGJU2iV5AQt2GCC3bJ1h",
  "key25": "2URZYaxov3tqWoYTZ1VSDiMYQou48zpDk59bVGTibazZdtCUET5sdNVxQcksuvxnhorhUHoYYtcwgbLaNo6NWQ5A",
  "key26": "3pFSJFktwnBBKLrNN6qXtgx94893iLVsctYNLTg6mkfj2p1aQuxKgZ1A7nB5g5KkBM8hAK1WpSTCuT5jAo9Gs1pK",
  "key27": "2Do883rFP7r38cao6aMsLS7Ed7F1Ck7wV9izLXfsjZjRn2TP8CNpAQQi9keKg6oEGMH5df6FwSRWJ6wpw9LcwjFs",
  "key28": "3u6vBdbqwLUBrgNm3n83hvQQA3X7YWpnSk4b4M3oaidQvfQdL8SwxZkeR1wDfPahyPYFMA4n5Jkw3Qt2VwyhAKtm",
  "key29": "3tjXkm18VKEx8nZZgsB6tUPZFn4KKtMWgFKNPmpsRFmiBMrNp7hy21C9WdzELFJWnmBsiq4WqsxDvEt1b7WeHEHD",
  "key30": "9auxkPkaaeA4ivBiW3ug7hLom5gftBcjFBWh6vUTq3tcsKVPSigqQDK2u8u5aHuUbkogwa6Y1cfpXU38q6JHMDV",
  "key31": "4vWqfH8BhoUT92GDjAN5LF5WPKFmsyxT2F3Sv9xk4A36haNT6Mmr2sH2zBunfCGjYaJ8FgE2FNFQP2ZQ1TWtQvck",
  "key32": "3f9Jdt8pDv9KvE6pnDmAWBjpSyCcpapXaBD7XFt2rVYwNHGQ4xPpWpYKDvjJ5GAFPy8awmAwXyCEmS6bzN1nNEhN",
  "key33": "5KK4q2MjXMPS1pYzYyQQpfWKdypp73X42FPfFmsSmtgUaV8GFyYimKNr4TWpWBJFAtye9sPMPQW5M7Y4Jb2iriyh"
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
