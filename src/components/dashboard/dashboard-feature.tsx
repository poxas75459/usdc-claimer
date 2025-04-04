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
    "7x34Lz68txkvq1sbo7QRJtKmgpyTcqMRzE2nzXLbAC3Lvfnnz7i9FjsHrs1zaSDqEy4RRrbqDKhizeh1XeZ7nFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVBsNDP7SAHWvTyxiCD6C5164ZMFGjonXRFo7QQsjocLg8YXZpN4XqKpzqezQotJMa1gTeKmUQawfvXAsk721Bj",
  "key1": "57d1bPSwZ5g8eKpntLQD8YSXvMbesmRhyRt2r6bxwHZ7NveeXtvJYRcC2zMvwzmxFbi6yFmuMUxAcRrqZrmtkfPt",
  "key2": "5pT27tXoTu2dCGW7SQxDzZdWqpuutKy8zntAQbKVaSs4naiLVBC8MMrNHN1gVUHNLjR8A4fVpEKcpZQTTdfeYjmj",
  "key3": "4UW4QUpHqvpkAhL7c2kYkztg7N4hMW3Lwf8gTSj7XJWR9qQDcZxq9mjw9vGBn33DxbPUB2urEXFEpYTTdeFsr7ms",
  "key4": "5HY2CnrwWjEWoJbN1hJtkZrhiTTtvB96Y6Kva9sVBB3wbQSsTXP56DFFbigqJYnKZUJM1hCnAgYSdGPzTNg9Wyvf",
  "key5": "4fzoDtqN7yaS5t2jDkLmuWbw4CzSrG45xbZ6HgW4bDKTdyGVR3xgv5W96QoPXKC6YfNwapDXJNUHREdQhZdG3SWw",
  "key6": "3C4BRRE3DayU4YH4FcZTt13MAnTEGKyWkofnoumX4HqG9pf6B6riayfLVogbx31M4FWTxVrsKNCWF5kYXkFtPSkk",
  "key7": "5FyKhBvqeySojkp8DC1MSKJLnTThaHmJ2L7LxrtypvCVDNKALAxKuxbkXRJMFomF1x6xjtKvoahSzivxRVKEo4Mf",
  "key8": "5FMBzRqLicxYztk26Zd2k9pTL6yhk44FNMw6io7TVkQZc8Q8jWCDkvBygsPJ44gREqtEC4aR4RT68T8WaFisAH9M",
  "key9": "K8UsWY1NtMZVDFYo8ErgL1Trz8nnt8gs4NLyTsej1rwGLVqHWAFGU9ZPLvmc8KjAMR6DeJH2pWWrgLUW8Vrh9Yc",
  "key10": "2Y9qAh3wCHNtaZx2FecrCvAiY8hQrfag6tiUXvqta3xGWc71ohzqRHNhEucmWzaf3dVw7hk3czuoQeu5sKZtpWt9",
  "key11": "UQy4HqDnhrWaTAYx5bH4hmzKtrb3MEdR2a8jqAamMt21meXFfaXDarw7CzRKE444AgPfzDFWZHc7p7GTaYTFXLg",
  "key12": "5pe1o4aYVgHbBJXRz5VsmQbUpgeQJGk2YnQJGFc1gVjw73oCZS5nRGDPox7dHPdjoE4AfuVAvkqDsjnE2M8xkgus",
  "key13": "3bgRNWQAgGUQKaWzvC1PfwCwgx2m6Pewuh2boatwXoECKJgQhEXsSC7mYMnm5CwSXWPsa2BFVKtK5f1saqxz8iqu",
  "key14": "2eu8qDRuDYtu28jcSFNT8NJ7GihpF6B3FdfCDT3dBN18auLxsMMAKATkN9kWTzZDAG9jkMCuTB4htF2p46DX7LYb",
  "key15": "5gRxFma1WirtLn6K6v6Tmz6WawuruWXUKMrkhWC8nFCKUPykNaCKwSiBA6YG4bSS4XuBzbtEoEmGkq19SRaUJEzp",
  "key16": "3E4PBth9UXcCdU7e2jd8bdR8HTTmPoJj3KA33Ben68DA34NyBZrHjad8kE9dV8wqYmnMTH8HLVdS8RB8boV9SCyH",
  "key17": "4hf8UG7THb2DzGYdt38iVQSDoZd39zTKNKEyu9egiiy8YgeD8io1puXtVcc1FAti3wVFnAsTGBGTqDrV7GpoRXV7",
  "key18": "3KJx883GHCQjdSoytL1M7GDuyfvooqeqG5a5pU5jgqR7G2S8wC4rxfiVSSraBJKXRdjBFQGVVqVWinHb8tLhKNxz",
  "key19": "emFTYM9ozYujD143S325LB2XCqZmBR8HZPbqAry141woK6VUgvJXvhQRGzdfNKL9Vy81dGRp8FEQNenREQVsGsA",
  "key20": "2EPcqmMh2uz9MdnVz4k417ei1DcXLNudaLWwMdykAsgRDnUA7gTwouP5derTAgbjZ89Nr21b9xgypwfB6KhX4vko",
  "key21": "321cCVxwbkpNdqGudcAmUXpSAPyBv4rwMJHwCsXkTHUnvvjf7VZkge5x88SrE23o8xQRjfJnr8mHHC2uhSjDY8RN",
  "key22": "cs86hBDQEYxh7Zdm9qPcKLy6w4onRtqxQBACHc18mPmkExwJeykynqnqzRTooiG1Qg9CLujgLqNKCF8DfvLTrxJ",
  "key23": "5D6VHTkQuH9w5qYF3qfRcXgouuDqvmVu3AyPp3s7kDwcmTUr6k6hUiW9W13HYEDmWZywdHxEm4FGtDK8A9BJuW4y",
  "key24": "3EbvDNd3mvP2srKhm8rj1Q6oeabbxavWsA1pUfPtrBkA9my1d7JqevfBAiyKHZZJ2Q8Tmqzq214H5N81kFrGecWy",
  "key25": "5X6MTHR4Lrgru1xVwk7gCvu5gbDCTtQcBmVRGRyiPsmXyv7jcZbLUnkVE5CR8ib6NcT4k4JXAcvuTnXS6YLBToqn",
  "key26": "2MCQ5oCNt78XmLAqXCrw5joPANwvaXMJztKMDepLxvQeYAr5tcm5wuyDUUyvGws7diWyKgGCyTfNmVHA3bvmpB2j",
  "key27": "5nwGEyrPhGUndYdSEWUzvMaRD9B6Jtkw5LS8k9s3R13kenTBhFb8u9VV6aHuYuoXqzbmm297MWAjiPcWRwZJbdcZ",
  "key28": "3cLZeNPZ1jtPz6JyEcFo6pRndExcbYgd8Lza7pYY2RnNQw78eU6t69Q9F7tkzTQC4UDAekVNqks7M9jcGWMpgmCN",
  "key29": "gdKHnXLVtMLfZEop7cyEaqjqpt17qa3TKM88dcZHuLNDQZD9zB7E4bciXpZniUG7UDQrNZD5FA6YQ1e3kwB6EuK",
  "key30": "25Ri6VzHSuVQm5ateA2XwiHChW8ZbZTyBREtd6cWZaPRiCnAKRFiGP5qAkohXC8wq9TdNSBeuyMYfqFLm1FpQ8KC",
  "key31": "5e9y8AMKrfF1oVuVsdW8doyAMKExfVm4pGAWoYijkUxBctgxoGDR52mukBDc4vMyxGpHdz73jXAy7ehSMv2HxzQg",
  "key32": "5DqXhch6yecZqy3oW3SN9bQQ92jxGpJFdfGxakdgUhxyHE9iyKZXG3BLTCUdBeAoJAoNc4RR5FHq4uxKcpSSwDFs",
  "key33": "3aMArG2YDTj7xVZQWn88bsPwcvtgy3dJFhSGnQbpsQx2PzaocnFe4JYepE78hJiZ3XF3WTxjwVGPFd9T9fuPuG8H",
  "key34": "2ncpTVCNXW51PJH5vp1WTdZxpVid9JPSHNSxytXkwpVRqVWGyRxTzgLV48qwCNHcoXcYYVLDaUnJ5pgsuP6rf8s6",
  "key35": "3YrKVM4N3q2aweELec1QWtgq7iPoCHn5cy6YSjyyAd4wDWLMiWpHTLfiWtxrBjY2uneXzVAchZmK7uMeEATFSpjc",
  "key36": "3xgKYMUo3dSDx6XXqeYfbqpTezjKQvnUETeTikmZdRuEJXVxXgiVtn1SqbsqGqwPDfKZiuCumcQH9mKKqyLSNwEq",
  "key37": "oRMjh7UfnMqBjU8uUu84pfW8PqnZd8r1GYgRQrN5vDNTVnNDNjoFfFQ6T9KmVj1QBs29H1J1GnApXYwyCdrp3Tn",
  "key38": "4B1PJQigp1i3b1CHXqAAbDeAUYFPcNi37bNixHiU9eiA8jceBTmzjEMH9VwPquCgyLzTTrkBKL5ED8s5RYUh8VTk",
  "key39": "48BiTS8dMX3LDhgfVt1P6wo1hwJ4rmhmAGm6DK2VhVwbW3cM59q5PdZFRdd7U1eeiotVAtTzs48myMXVjxyWqAbT",
  "key40": "3E2QAaAjqHxYvfdnsF35hbTeYwtk4SQ58b3T2wSVMEHt7T33LzpJGp8nxEYdpuwtzksNrTneTf16xdChTVCHWQ2E",
  "key41": "4ic1qY1TwJHDAgJ49YpJf7c4Z9BmYbg9KJNPygjBSEcAgTNEFuttML9XqTaGyM6x4vHHzFULsyNNmctLKnBGDVwo",
  "key42": "2HzyBuwEhC2PD4EyMp4Ze5mqnrJPkVN62PtiB4PyWEvWQbbR8vDnUe1BsncXzzhhCznmN1T55MQtYC6skMNuorVF",
  "key43": "3RSNiMhZojoRphKM3xh9gHeXuAScxfQQokUPmAaSx3XRV867PsHc8SeAiLGTLQ1eqqdzEY574VHTJGFoJFRGCQyq"
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
