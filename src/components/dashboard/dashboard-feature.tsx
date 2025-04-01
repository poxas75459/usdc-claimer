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
    "52hCfV8QuyYQgL7JkZnC78DZMQ2182uERpemxA6QfLTbcrcQnL6PnvooNNJwav1Ciqw2ccti9zCCcCQtmd1kxk9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydtSSg7JWY58Bj1D8vcrWWmjqbzYDZDwE1wuAjgyURxqYxVtvvhb7WvmQRhU8uQQuZ1ZJNeBqo1mu18PDrYXnwn",
  "key1": "3aURYx9GXPBdW2naN1wLEPJB1Mm9PJAosQZRXYNvd677SJYTRCKsTK3REyPtvGrt5d3SK6xZKt5Why62hixaJtgd",
  "key2": "4vWKH8TinUcr3R4yAWLFXtz1W8Gfg7aiwD134tbpnqrP2nMtQFAoWPfyNNFKx2QC8vdaYZCk9bLE2U4FmvwghypE",
  "key3": "zHPrVknJWpk3jsHpbj86gAeKA5DSDJr9wewwpTQBJSDJ6zmPWe5C8oDeaSmAJ7nqtAyEM9HstZbNZWATZjiYh7g",
  "key4": "2UdKE7hXWyzxFCss3awNGo9UdJry8J2iUCCnJueayN5XRphXfxj15ZfpWE3VkWUZE2ARykWG9t3reWWiaMXzggUn",
  "key5": "x3ZcUGDfFn6DDLSo7xr5AU6KCziZ7ZqSEAbrJPeQwowyvgQKzWpmGH2A8Jvv8UaVMDgZ6B2VL8soyB1TWJvfxTo",
  "key6": "4yYd9rAkCdfWyiX5BKpn2CawbKad1ymegTwabdMjoCuW6w6sWsewP1YxX3v7X8vX3Vz43uj5hywF9vKkYgs2igzb",
  "key7": "avuq17LPQ4UUs5qbiqkPiSXEerfhRE5LaTLT1qugtSpPjDzGkqwKeJ1uZ3AB9iELFcwPJYCCcyoPxWDANfPAmVm",
  "key8": "xhTUGMSWjH3jWV19bwitSAcS9fM1m1FRS2KxH3M9tosrqHAPR3jjxFvRwM6hJRTfSSyx7UgzRQ8Tbb3tNP8Lkhw",
  "key9": "4c7xPV56xpxmUXV5sZ92RVwfftb1ria23LKn7MmquqxEdeq2zKqcz4Q6jzUJN4MPJMDBfiXpqeoPL9zm2z6EbFHJ",
  "key10": "3crHpUHErdamFi5ZF3UoL5s7PRcVbwFYHXG7X3WAWUD5ZJ2mSDMsbiUn5NQ2KgUNAeMio8SPoVdgFFtVCsULHscU",
  "key11": "ye6BsqQHgg3siRA7x8kzGvXNufVWTuV3Nu264LLAVLpAyxwWZH6Q21oNqTwbNSvUyJbfGicB2cG87oHomChTkYJ",
  "key12": "4cAqp6ELNra2RNRFXahaH8hvS7urPHeeJGsT9zj5C5EzXQcAHqCoh7Hzte5jAUn4VfKo2NQb9Nx5ErVmwRJS6exU",
  "key13": "27YtiNjG3pQDGqf6u948mjm8jzfhoY5Pi7LBpG4wDN83k7Ugu2C9vfEUt1vaAT8jtvLExhgwpPRcMrqHZm49EBvh",
  "key14": "3CRtMX28jqi3E84hy2LZPYYU7BFvRdv1UQjgKzpnxNqy9Utx2UhXjrqxR2qo8Eav8RUh1WoCWMG2wRKoNt3tRZSu",
  "key15": "4SuTVsXDnki1RZDj9oPS7Sc5Yo59iAVQpg7MXw6MvyQ96J9nXtg3cNQJkmLU5trCCytWvmqwHpAAZeHp1YKV5cNZ",
  "key16": "676Cs3eNKpx7kd4m7s9TkAppE5Apr7TazjDiB15GhARZjvEJsFcqaE29oBt8Z3NVsHHYDa42jKXfd7wG4aVY3b6o",
  "key17": "678dqS1mhGQw5r85GVngvXUpMVuF9296SxPSZubWjAs5cMg4zCXaS6Nw2EZw4Mbmkj4n8tq123tY3U2pGs1JEV69",
  "key18": "38E2p8iKr7qip4ADjgn4rg3XnjXwjmujymh3opqYBLjbxE91PWB1q6JxetLzt9NREvUrqgKgYjgk7z1yWrpusTSG",
  "key19": "4LjKZkBxVLWp2Pd6DWYrsDe2nSoe7qrxb47QgyfvLk9LghFtEcdQAtqiFJHT9qB7WV5yHT9Ayj1HYGQV1tADGTX7",
  "key20": "vL5U1EDkZrAn3MY1y7zLDK8McMUfFyxFy7tweHpAVnG9nzyGRPidDRZgdy2WScrnMt5ukyKCvSArRw7uKyDNBGF",
  "key21": "5ah66DNcmvD2zzRMP34A4Mn7QqkLy1fMb4ED1YKhH51diFwnVEbRG3jAM1gTQmi8vqBb62PaGLiA9im3Ff2bPyFk",
  "key22": "32YrCs7fpAr2oVF6dstYg6m5aHi4P8TVrNijKZk7QNnMs8skkiXzEi73a7a8cgaxMka9Rmq4B2mX8Hgtw4zuDFxX",
  "key23": "42mwvqKgXr7ixtsdmxVHfBV7LLwiZVcTQTj4Ktb7LRPChozy1DTTYat74bDoDvMWvQqumncsy8EovUqzZQcTZe4C",
  "key24": "49pnKxBU35THtcTuVuRuNiZN6MqDHw8U9AebQHg8SqSPenFXCT3MC1bY7pHTQ5HdiAWDHUJYWE5qXj29yzd5DUiQ",
  "key25": "CW3qQnCKQ17KGUXCv2UmixgWMNood7zqZtzHbCmxzYnFayGs8gXc1C5Uid7PhTom5ERsfJ2AqrwdD8hx8bsMcTH",
  "key26": "3B6WEm5CuBh26iT8gCMJ9WzRWY3XdC5EUWMK3brz6CaYRkz1sFZSDZ1RR2Gp7pct4J7TTbNzgeBqifgyQoEH9cDD",
  "key27": "ZqbTQDM7dMwjYwvxT5aGbby1tNq1HK4ZURVVWm3t41HJsipsvvg48Ziz9RvmHkeWp9aXPTowdrY8WhteAMNM8U9",
  "key28": "2XmEDUZWrFzovxSfCzPvhdoV6upfvGepZQxMoHgZAMJUC5CKAiH8bisTAA5CTFncBhAQCxja5ks46jSCDdvBKZ1y",
  "key29": "5a8rkcSy6yw4WdEFciXGCb59Vbz9S3H82tXw4L1dYbWPzjbmVVx34mRkjS9JNgVcVQa5KKgZe72BegnKzGare5PL",
  "key30": "5xqdeBiwm8zBK9mjfwtrgDKHthU63DF1rqvAjTvZDRX2XUJCd6BRWfiDG6KQ1j1qPYakXBamyw6N71TTVmhRsRz5",
  "key31": "mjon1mNxxQW9HcJ2SdrAPSRbnoCtpFPsRYgJUtxAb3SMAk1DPcXg9dfcxwbrXQ2yYDSaX7jehDReu3iTP6Xbhi9",
  "key32": "5xsvRuYyAiJna2JkZ9ZyBUqa4SWMjAd4Z3zVm8Lnb85LjNAz98Zvxk3ewQrJUTXh5XBBbcUTYtByM6tJWeprxeX2"
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
