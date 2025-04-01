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
    "4ckebhpbwmumZJ1c2jp5jAVuwtACmAcmBePuiaoiDMLpa7zYbWkdUkeKN9LekTybbMQsHxW3D7hk1wj13kKot9xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35uDuiR27eR5V6LUM7KaG7CGLok1sTbNeBmrPS94CqoBeW22A4buzaW7qRkgU2G33q7Y2k9WYHbrRA2pv18AsCg4",
  "key1": "uVc289Tgr75xRUarT4s7qkS2Uo7xg9MPJbT41PApBC4okAhC6yDgGrZXt9yt4VNzZT4XjC8GPBfhvwk4bNawCYH",
  "key2": "4B6PPD8HdFTYESwYU1JqKtQgtaDyWY42ftpQb8MMdnqwvzy4JYjLbiTZ4Xdu2TK4fDXoWMhvzGrx2QZwWFiRbdcm",
  "key3": "5YPM7nZLkDxu8wysStgg4RqqLTRe8DzYuuJutnojfMpCT1LutYWbcTH2uCjoJva3wcyFLFkU4gS3ZkaPLqNNCkKB",
  "key4": "5hopyUUSkTyFi28EFZphhCWvc85EzAshzuUCENJ41UxnK2qwtsfXsbyStohZkhftH6Rxyam1U9DDW4eWbe1xAozN",
  "key5": "4n4cXVRixAuvMnJaRhHbkz1yHWzYPtWCwYUBdJmu9hkv8At1trGqE1r8JxSBxNuXD4k7hWayVfHcj2CQkG3Xsusq",
  "key6": "37EfPMs4fFvnPEV8khZSfZU9DqqWB1Qm32E9nJUiZvxwJpvqVsvY1k2mNEnRKS5SwWno6enmHD3fDCKYegeenxAy",
  "key7": "444Po3XkMoXa64TDQnhLu3dawfSoecE4VFfmCFEuvgnTrVEzPepwKenharfa6cnRmUbMrKWUB4LVtEhT8Qa5yd5m",
  "key8": "21uLzLUvw7HqRaWLFfrBQHH3aSyTXiWf2J726ep9iUpwWdLygymWQ9vHwDPVCHD2ZrtxfniVa8vKz1rTuvrJNnVJ",
  "key9": "1vGuD7X8Vc2PuMbEzYbc5WR5LwQ53vBKU8MRBCSJbcDDuAjAGVenRSLw1qzNTXbmJnWdddXf4iwGBPpkxinfycS",
  "key10": "5pc7xSrTpS1Pug6Z7Y5G8eJUU79e1V4ybnTrmrxy4yLeicTkzqNALx3BqNjCAkewXZ3a5m1pqcDzHGpHB9NWLMwK",
  "key11": "2L3gqUutbwzFuXp46U78VqkTfWmG2RnfAGb39h7Wb6QZqF2PX4TdZJ7RHxXxL1zJMWGVzJcN9dAN8SLod355VupM",
  "key12": "W9PbprrZVbBtdcSg9XTAcvPPYxLtqEr7mSdkdwHZToiJVB4u7LHgP15ArFeqRgbESVjuXL6g59qycxAChcYfq96",
  "key13": "35Hp87ZhSJtcGyff4GgaHHAvG2JRNL1Bf7oy9VKoJ1xD8YunVk8RdrTfnavxUJzknZPnx9fCE6e5Y3493ZUcqccy",
  "key14": "uFkkm9q7ecZFe7Rk9cjH8MX4ndoCQGCKqU8CxFScogdrPKKNHqtcTq5doF1CYKd9zueDk8UAT2z2ZX9h7HBHxjc",
  "key15": "5bV8aHTCbehpbRsUtKLt8qz8DBfo1geaeehiMJE9BZiKWBsNKtU3hycRQjzcUagmHWY748KoPuhUA2t9EYnwyXwc",
  "key16": "27joQP4pvpfVUhKCFWUtqsAuFmw6JRHdCtqy6az6WLR2U1s5uuBVNiofTSZatpSxbYjzz8LphQgpkhFiXDRtz9pB",
  "key17": "54eLjt6veS92xrZGTNYhNHARYFUU12m4Jfwd9drJPzVnK8w637mgtud8jLVHV38Qrj92Uutp6xUrEfKuFi2cNYnM",
  "key18": "5xStC7q3pR6PPf9mdDN6Ko1oBfhuhce75TmvjzaSp2bSsnTNod1ZjfLxFpkxcVciEh3Jd9itqdHX9zYCB5S3r8B8",
  "key19": "4M2Dr2aVs3RPJBBy9R3TQG7JoJun8u23zvRoTasSCyQjiSE4aEssY3UGMcxbrsoWtkGXGf5BNaYFxuUijXHPuBYh",
  "key20": "5YAgy9pYnzf2JzSJApfC2ef5yFmp9DuEsc6AQKnR8aiqmc8uJHanT3FPhbRM6vDX1jEHHsGovfPb5FCGgyswT4N5",
  "key21": "4jRUm34NLt7YxZoqbKE4jZemp1zexE9SgCiCF1jtT7xAMSyTSs5mS7iFEmcds8wSj1oLiDqVUjpMdxvrx6dVqMio",
  "key22": "2xTLF2BuoF27aKaGJoJiDHrxj2cCw53tnCxhS15aFGruJRyrsyqLVzZFEcz5jeLuZjkJE7jYWBu8EwGqb3YfQRVR",
  "key23": "8bN1Q5LuoBKGBwDBrqpcaZgQgkkmi9AsBzvwngB9j4CjbX6cYL27bfgZsFd1SxeyPiJ8soWohxycerd4CByUpH7",
  "key24": "3fZjzAyixEu3YzqFc3tJpyTGnon9WCPJBeGij1NEUkHVM7mAktwakcCjfPHQomEs2oUN4teDegEHBRXRXjSXf6FQ",
  "key25": "2p9GWarZMf8yb4iZqqs7LHsMm42pBTrLMDQhL4WHDo4iZZyodsvuwTfzzpm5UEQ7VzHFCbgsSiNyWGZYPAfrfMh1",
  "key26": "3MeFnt2cTMNG9rQ5osuYrSN3MWi32ZrX8eQqZBTA5gDhq3jyN69ymDK6xtTRFqQBimaUXbbZcDA6Q4LHv7jKEKPF",
  "key27": "QCRHxLyFCNXUp17e3uGNeCy4pGge2uCkVGT8ECJC4jrgfWE9Uz96Sy6FjDZyTWDEwa5ihDtHACaLYhHCv9Uuj96",
  "key28": "49KdsBEgv75CKtuENT9G4fdMZHT7Q6g92N5FiXt7eZuj1Wi9rCyt526S4NY547X75ykjkwLYsU1bQDpPuG8x3xUg",
  "key29": "2Uj2myJy7Wf7Bav8hhkYH1burmWj9eGKBB39doRhWDyV7NcnW4BWGfi32bHBzbuhm8YUh1QUovjG86xhyYRyphcw",
  "key30": "MYXa7hQZqB6ZSxKgRKG1HABvhNaP71pXWYLUiCA7YQL21hzadG3G7Y3Wnuf3h2GcUByWyagjvejJpayardoF1a9",
  "key31": "3NfU1moeCjkbsNDVHKWcuTJYGVvxefWWpm9xTUqh7iQXERU5WFoNn95KNYqtmYVVK14xZomqG2wTgkCQyEw3CM9u",
  "key32": "2Z6ks6AGjBWKZXWj8Xkow7WKMvJ24qXvvgU5kGAyS3C1N5tampbyHoVtD9yjN6Vr1uRvoeXeron7A4mBEy4i1HAU",
  "key33": "5vT5UVMjZVGuqLi985nqHQZqq8v2uHzCttWZ8BPoFjLQq8qmUHAEtrLMPvUZVCbwFx5qhuG9ZiYFcBMEu1YubQGP",
  "key34": "38oXQ2Do7e4WQZcaWBxwRgm72xabNZrGb3yCwufWvqVP6gHyVjvA8TRaFGtdPySBjftPWC2Uk3NwEKo9ogFgwL8H",
  "key35": "2aisbiVvPNQzFKfgtRU82ABCTSfJkvgF1yERD27giqSxBc66dKN9tE51q5GTNgKH8ZXo6fU77SKprvJPA2JWRpoQ",
  "key36": "5w2BCwAWCdN4z3RkKzibrDog91xiz1xSXEkUadPmwU8wtPnanWGarKLWSApuHekmK4xos8DfrxNw5QYcEZ5zH4Kp",
  "key37": "2GKvEyo2uFGJgGC5uyBvtgKwgmmg6rzd72Fp2zwE9t3Boddhsi3Z1AjMAsoJchpUopzmvZrvZ2wttoPjS2HPjTrc",
  "key38": "5E66ryZ6kxwYGUh7psHKPQhCroQw6W1LXEfv1fX92ik2YiMa9kPthydcE39dYJxGFu7raweHVXDwFoEnHyihEm8K",
  "key39": "5UWt9rwiLamrgbSRMNU7DVQcQ1XGtowNmMN12RNCiFpVgvap9S1Qb4zMxRcx42Gb9g1NAiyuGBLxfBLJKPTsegpC",
  "key40": "4aEPhsk7K2zsyuYGu9vUaw8wsmWAMkL1V9EvXvWZnPAsDStzMo9ByJHYEECaWhioU7KUWMA4tmRn2BnenC6CoMRM",
  "key41": "4sbQYgaNmHn3uHRbjxTNTaumBjQyB8YGQA4CoR1AkGMKJM75ACuKW6458uao6yv8t6BQTXQq2KwCFAZTRDXzkWkn",
  "key42": "iU64U8Ue6Gy4by1NBtCrMgyieRXSwKcoKnivwKLcM8voar4ife1JbmwA65vJAPv9vNB8fJhZ3hZmsgbJUGJhbG9",
  "key43": "5Vo13PcoH2A1isiDb7bdyi3xy4MDcu6heuxmGSfQK7yPvWKscowSSEFd9VwVvxV3JFcgLW2UZwYXTLddyig1aNzm",
  "key44": "4NGZhvLHhoS9DMNMeXuMs9f1NsmwnXEB6BTY5Q7SfBSVSKWUZ1z6gBgNoPJoN95dtaFEvT821c82QNPtjZSYYxdD",
  "key45": "QDJrXiHN64UE7tLfqVLfqJdshnrBQGjuEZTFv3K7smoTPJJRkm3zjWj4eWto6jaJ62KYhsy11js62nBfBttbeW6",
  "key46": "58fs12hWj9eecWQyzmEcHNj9rZHVXLyr6ZeZ8ZBc35Hrzr2dxMyMhace6Nn2EGRy1SqhNa7iFNBtYzyu45YfTN9w",
  "key47": "wXjndyYet523hUbKUrTYJW32xSayhXvpwS8MiCM8cX1wGyVJZDw7ZCBUzewEk3t5zrfU3dRGwQh2pT6GZM2esyP"
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
