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
    "3JCePBPZRXnTzX9pPs72Ga82JaALDJUWeubxVb5MzbVSBFaHKwMLWTJxTv57KWTm6ww2gHUxWrj23pfqUXAg1Em7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2sxFXo1bnyEzs1o4BUQzomFNVu7QRSuCeQep2Efw4C3kYFM4SDxvwCF1v8KVSLisM6bYeoibF7TRNYuFb2BFZ",
  "key1": "5hsyYnksYvGPFai5GoQ3DAAF7azfSjBhjdMK7NWVjhPXrUwtAxXL4fEGY9ZcwZQJLWgi8asURzZvWmkMJF6xvFVJ",
  "key2": "5uDFLAauZokm84dA4brvCSq1bT8mUnrE6ECpoJvdUFJF7Guch34zoegJNMWuLMTKafWg2dz5MvWSdtXppZ4oQHJj",
  "key3": "5fnBKyFeLGthiz6qRGgGgsF13QLEV9JgFvNZw9PDiV9idvzciTwm7QqxtvD54rEEJv1cRHVnWuRYGSzCvT3LMgbn",
  "key4": "29LecVoXC4cqLyqvSTtyscKKm8HwZQsHLK8xsgbzjHw4jp6K3nq6qJFC7WKkrSwEAD3zCj7zF41B7y5DuWkbwxj9",
  "key5": "V1xsHDCmhkDn56m3SsWJUreibhDrJTY49UwpxWFuk6H49T4MJx5GhTRdgmFpo7az8zXp1D8oMUapRdUL5mxeBXa",
  "key6": "27au8vGHm3TydmNjNWaXrTYBAwGnTercD1nAJjc3rKRT3iYqdSYFRXzsBcmdcGWVwGNAzfQTEfjTDoneuqitamZ5",
  "key7": "31ZeN68hyt411hhhDTGBnkqPYHfyU2gTPYuCFXBPsSfMor42NhAGyetBumjQhe16ycSczvQiwbMfxCeSJ8k8rWym",
  "key8": "5HCpGbud8UgwKQpm73jJj8vhQ4RzVLmNfhyKiPVuCzvvAHsTBA6SVJzL6xrvvynnfuqC2Wb171Z2Uj2KWc7B74yK",
  "key9": "54RcNF7kyoU92mkTK3NwNo8xcu6RR6Sw4ds5Vo9KwTSYvgtkumYerH9L4zv6SxSb3nsyHuxXmoho1vHrNE24fdDw",
  "key10": "43hHMtdeRFyZtzbkmy13ZVoSZCZtjY9qbjmdmQ82nK8PuEE5aqRW4XrqjiXmigywKvf5vLGjg2Qoqx6646Fvcdr4",
  "key11": "2t12QGF5fYtutrDhVnneM3kUeg3LMYajeo7RjT9KWEAkVqGdcZEbwkSru2RXFSwXUeHZQwXXGoa9EAaFXTmXAQwi",
  "key12": "khGrCSj8DgFKYawpwNqHqmmJPvN8kUFDAC5Pk1HEmK6tSvB9qEedKr1Cbd2sbWSP2K3NcvyfHrTxkSZtX8hgM4a",
  "key13": "2qx11fSKBLxc12DHsxf2Tq3GWQcZ9eYrZLESm3FM72ouY3o9juB7DXcUsDeVRTXQ8uU1tZLzvjSL6fKukVYbGq5S",
  "key14": "2bdrKqXwdBEykAyytGoorB5LrM3AamTmLM6fXrw6oL55r5HfaqNKVhKYegUT5Z4F7uxFDf4WsLxB4ww1EqvWinZx",
  "key15": "j2ifZMsRV7TYPzqoEZf5e1wJi4CviwC6fMs3Gam7xRMqZVvsk6kXwpvaZbSR1X6gQD5V1QLP5qQwExsqR6PPWVs",
  "key16": "2iY3btvyaCzuPeqRhXBFrSxj8VELptMUkaLZo7Rz86CwE3p5wGmCzfoauintbm94VvkKo3xtF9vaYMQug8oBQhyw",
  "key17": "4PPgjkAfg3SbqCkjhExVHJCbKmnvdPhwJ4mGBCngPtje7fjRnf8QrTdhThisSnbxj8xu8q8wLBt7iGzyDUpHs3ac",
  "key18": "4ab9HdqXBrtSH1XMxtm1ZSFdjzbpM7XkCLAVCZNC3XbMuxDBARfQxBCBz2GP7iwM1ui9kufo7c1WX3Z6Fk686RCX",
  "key19": "4znaNDJKQRAgM823WpbPkyHA5vMcN7orYD7Ar7tYNzkuMyLaWcwKk4xqMQtczBMPa3j4PmQfC3kwkmQyPnRpG7y7",
  "key20": "3S1x6x9N98hRWLeFcCsxigdVEMs3HL8MW93rvCowugzsN6ybUDn4ShKr8HUJsvkE9QnFW8hEsrvqGCfgaqWWyzGt",
  "key21": "49HRqhcBGWW8AiG4sZsDCPbV2CUDArqcbazRKS7eey2ipuy9EZzGL1mfQaLKuzwzSNp5wMspXjM3gDQd2LBF4QvM",
  "key22": "HwV3tbiA93zcePcKnrZvjw1kML2qZ2bneufyEQok9Rpturd2FNuBVmxeTBkttqhCAvQKjePWaCpc5Ry9RLowUnH",
  "key23": "5vw2SE76AGxRtBQXkPLDBdNmkoz16JbBkanQR5NDGLCBkeDE36GrJQTV2ht6juTbgJPMpnZhtxEvdk2dcm53ybH6",
  "key24": "4vDTfVJ573SAN5NdU3esbATEVvaTcmAXUMQV7BMy6fiAAUPpRxGBtqeFWrw3RNBg9JoZJPzWSgozanKWXk8XLT6K",
  "key25": "56ezJBx3ka9QsNhGEHnWMsdGfeR6tKfUEd67An7tpj1S4n99MbttV8dTDwdgZCbUPsy2xiGfqPUMNHmgvyvMNUFc",
  "key26": "2BGq6KvjWv328ssKAcRyjpZUrd5G3APHp6Taw15sJ9AwUvn9BYqMMNg6CEgqR8woZWq9j46jePMvACLGh6ZNTGVk",
  "key27": "4J5rateichyhzwmEfhkKmRYC5bVjvrt9UNfgCFx8HLCDUx3XvqqamT3Q5t92skYYDTXym7LAELcFtjX5fMWWjzce",
  "key28": "5mB4MuxHbpCvmvnZW9PR36Q1ujzHH1huo9SmJtXyQrbmsVkH8ZEEpWrJ8W7S8G7cknLgMGSmNA9qx8FU5eb7sN8z",
  "key29": "2Ur2wqgN5DXr8wrJ2Y6mWNsAwnBFQvDX4tKX3Smw1Sh7BbqXRdebcRQuHutV4RSr6qjRtSNi8pdQv84q8diRVUSR",
  "key30": "5Lwg64YHMSjq8M4YfSeynf8r1AESNoXkFSTD7wNywif9x3agt86YWZv3xijZopqhuANYivqP8WWAB66o8ffyR4W3",
  "key31": "3PqdT2as5dtbT9G4SKii6pSPtjLGGc3rRULsNoGm1BkniJBA49a4HaLrzMQT6DW1vTmvDWgQopyTdFxE8YQvByg3",
  "key32": "43anQP7SBEMShzQRg118dvAkCYMp1sLGpWmcVqNyTzh5oh2L4oHpayPM6SQzmMjipWS72RHCJzVMUHYYECNj83y8",
  "key33": "3ULKSaHuP6ionFQXTCxM4ZBBQSz6NmFTXpyakxXHQ8qNNGq2kvKbBKj2dZMTzX4whTdwF3hbBstejEacypfqhigu",
  "key34": "5mJd1dCLc3tpYLufWaAqWuLG3KCmuZbc7TRbQAeY7XwGwQBcr7jMaceni5L3NN3v54q7mT98kHaGfRbVsq33fEuE",
  "key35": "3F3H5JiunyNKcRAve24Kv6GciQma1ZX4rwQ5kSbc1zG7jyAznc5EaCai6wuFXNYv5NWGHNjfeSWSnTKEXerwLRkz",
  "key36": "4fG9nE2ABdDFuiCTYJqAtnZv4MScdPGfJSm5utS4ZNFa1Xd4TfFrTnL3fiQBy3ZiTfLttffjbWmJEUSp2V42FcrJ",
  "key37": "2BHGmEycMdpgNusWsMNDLsLGcpmUpPZw5J3eTuQNntvRaKHyKg2MtziDxKjHTEhK4NfWaCxc2gx3nrjH2T7Nof44",
  "key38": "3qfxYRC5t3Tutb5VYYCwEiLRxURpx4cLD9x1L1yxRiZHxMikL98wEuvGxbSRDnoL2Q3Uy5sh9pkBGxKjTYWmhKzv",
  "key39": "3zUXxvQokx5hQ9q9JkEAXUYEPLUo98EKfceELnfJNTemRKofKJBrA5wXuksrKGcGows2oRyCrsVeNMxbvczkGcv2",
  "key40": "5oBiLKSEC1D4gFreehAVwkakfqevTujwNYToajYbaFLR3mN6DwMH31HtN9cEi5cySVHvmtGhi8fTb6g8tAKCgNuS",
  "key41": "YcVjZfkGgXsQLp85siz2RCB7Vv8y8tBWmUUvwofpnkVoPWfVbSUR1331onwSn153ANDvNYomFzJ2sGNcDiXAb1v"
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
