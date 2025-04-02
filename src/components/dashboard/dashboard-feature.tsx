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
    "5j48hsr9kEL7LFHZm2Kf3esNiBiBHNoQ1AQaexCxfMo5S1HC35QPcBUf1ti7eAnXGifUmK5WYucySdFN1UQYjKa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bk13CvV9MKQWHHeRTP7vM5t4jbGED3Uf6fPUJ8gMthQUDFzwwM8UaECwHXidDetzGvhqgUDdofjdBion7FWesGw",
  "key1": "5z8aSbNneFtiMWhbcbfkCzdavE7V4vpN5J8MnGvLKc4Fz1x8w1tmUCTp6C3FGkzYuedEcu3RxH7zJQnxDmd5AJSf",
  "key2": "5bNYUin4ktqvfn9qYTnzYRrYKaNSfepjSMQTmsB3kbR5TMRyq8m5FUUGPg4DDSkHPrUpGwV6U544ZmYHSqA1e6Rn",
  "key3": "SRLvCxUGxMCEvKF2oPAxbKd3eHtoZuVsgMY9Yfck1vKZvEhYgkTyVobtCiwPYK4zE92Dc5NRhX7N8YYFyMUfJqy",
  "key4": "3abdYm8WjTBiNTPbEZkuRW2mDtJNTDGAbrqHSXpNCuNNfaFVu7maCtLuffvYRK8ABY6RCBqSCJ1LG7y2wG9d3C3d",
  "key5": "qAiQT7up8RVeoBBiNidNDoYKqHWHLk9eskNc34E7Paq6v2NoQGdpbz5kyATDDgN5q2mrqUqM2WULBorfS1YE6q1",
  "key6": "5hpN7uL4W9tzrQSuhUBWVpbd5f5etJdFCVA2aHytEwpnw4TU6YbAnww21wC4mAqqrD6htK8kwack3aCf7AqTjSjg",
  "key7": "2g1dB2jDq8ZYGRVPe1TnW9QXjbBkaXWRYoqCuJ7uuMQMdQWLabaVuFn9NJTxCycRNcFniSgzoRbBPtJobttM4seA",
  "key8": "4NSrXoonrpN3qx2T3fH7To4KrVxu7P8tbM9dfKQW9w4wmYxGYcdC2WpFnF3mj6LJSqiKQAzKBbfEhWoFK1QjJHqK",
  "key9": "2x2y3XJXfEESY5ELuEzWsj6W2gdv4REfQCjteES4Lv5iBPNkyDzpN1Rxm3Js54nVap4riphVXbA9M9Ydne3BnaYb",
  "key10": "23MoZWC5jtB9jaYe78JLTz1RXugVJMaANmv4EUWyJd2ZTSPJeP7YZopCrZNYhrLbCKELDdrCNMJMwkc4iqm1pUtU",
  "key11": "NGH2cym3KScr1KZc3aP1nxNJ2adCTHf47iTkA8weNiWYUuC2PfnN6eHFuNust5rVdgrW8mX3iTLbyN2VKBN8tdH",
  "key12": "2XgNYxoBcPtZ8AQCAsSFFuptdPFXhCfDejzN7PHBSAqguBwqx4MhwwN6g4T5Q1RsqWKzqkeh1eeM3qMcqGxaw9NX",
  "key13": "58ZU9BsufT5N4ASekk5wKy8YMpAVDtiEeciN9uzKySNv68XDj2onfZX4AQYhQFUv1WzqU6pFSaANLDYU6nW4XCmb",
  "key14": "2rC6TvWsokVKHDTAi2B2DGLqPR355wk46Ue4uVhKYnv7jswpPThkzCtCCge9Cfw1CL5sR66MtBebuwz688epaa85",
  "key15": "2RVcPdZqZrP2PaT6ctzx7nCnsw6FtpSxyXtyVxbSthcX2fKJAvmp92vTfitn7zr4A3k7BVyjmK9QHPrXzzULozHF",
  "key16": "267HxTZSEN9LkAff7oi9v5WkuG9Nu3uNuz5otYNowqsgjXzg9omQ34Xh6NkNUH3s65uvRPZ9zCMPfwMTitFXV9v8",
  "key17": "65gwiH2SRHrpRgqgJXGN91qpsMhCTWotJmzqro2kax3Y49yAGH2QWug4CjoV29LbsgWMZxxck617G8ogSGA9eb8X",
  "key18": "JZGEGzZN3p2msMc6CU3cvuMUaFHMkd5iU9hc5XcQ1ZLnkrP3C3UUP1HEKe4CsZ1aCfeqCbRuBx99VTwYy2nRZQv",
  "key19": "dswPA4AY46HtrDxzq314k8FwPEzFaUxPkd1x33y5Ut3ARof6kSShNWxvB6dsnbfGa2T9oqZj1bAiFAmucYJM5x2",
  "key20": "4nxZP21yyotqnbmSrzeRqjDG7VphRkbkZX4JDmXwcPvsjrD1NMdsLfxmjWhwLqK2EA5RsDuMgLV6utdx9iCMC7nh",
  "key21": "4JPa71YmLayU4dSytNRiZyHrNgV957sdft2QDNEcwCuJNsvGgNHTo9mVaFvB79RZcc8c8P15rUWkffaEmkjini9S",
  "key22": "44SVsVE2XVGDyofsfewWkMR3K4kXqi3bAoFPUZhVqPxMhihsNfv3LTcm6qaxcxwpcQJuncHPhCPXiGZzR7S1eTCt",
  "key23": "GKhiW3oxgLyoduwwoL9bWEEYXxbRuq6aW5WeuRCFx1hvCeu8fjkAeSVtoGUVGi32H828Ehc2B3S25k3Jt8igerL",
  "key24": "2whZdHXifzTejifUNTSCQqtXV2sekFuNPsKk9iBhmzKJMEpVsAGZpcNGxqKd81Btwn5MAFmXBf1EQbXurb3oNnaR",
  "key25": "2Pw2UawuvpNx2AD1HzVyUrsGwSsgUS5NonKbCtbVGyqEkVjvfpyREnc2Zrqe1Ygb7pmoafn4x63rXapWEMvWSpxC",
  "key26": "234963GMUSTpvvwBRS73cfHB8Phw8KjEzz1c9X2ChnaeSmpSeZTiAFYzL9N26xB7suqghzX4ZhSMKD7JqWmjaDcK",
  "key27": "2ok7kTDbqAYF77ohVLjgm11aQ6FsSUW4PFANMWDpsKvJJQnMzHhKrB3YyWbVn7UBST6F4us3HhNSVfryyVHE7ohg",
  "key28": "2mGgCY35B4mbNQkRzNpmYyY5gpWFrzJXqKtYNMUL4WtBzM5inBsPohw5a5EoiYutxn1CC8pW58PkCTx81ErU6JbL",
  "key29": "2xCBvM3EaKtoHMA61QU1cxXjM619i7niBFvWVux7DLrVfS11GMR3Um8Eg1rkaRLnjuZzwLctYhnVGrUBAh77k3bf",
  "key30": "e2SFTijmehFzt81z2aX7MRWKYNxWFLrLoHgD4xWpBjF3RaadzxFdZtZU6DV8ahXFFTbbejdV6nFQ8xtjgWku2x2",
  "key31": "6ddwN9PBTXwzwNdLARV8D9JqrvuR73H7gXNBPiaK7gqY6M3pjJyRQFFm6E4NhCfRMDTVdJw9bvjcRYmXAkjzFZp"
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
