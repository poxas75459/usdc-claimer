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
    "4z6moFRQY8fwn58SkZBBgygFaYiZh3pPBhUmA5XBE3BLWcfjibiRYunfzCNutzvckkfDgQaRoEGvYiauqD7tkfcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dkim6r5aZmhG3AQZupHc6eHaihAJa8q6zWEAM2R7NTnfMjDgVHNwg5Pj89GyzZcazQiXY7eJ42LEqjb6dRRbkqR",
  "key1": "CX1wEuLq8wLGrVJLVd2psxyaGznmm7hxyWma3M6mCNtJCqHFPcMPHveZsS4Ri6M2r5zsEr8WiXhCYCVkcQn6sLr",
  "key2": "2Wr1NW9dTcbux9fQrJ5cFtMVSvmmf4MRPay8WcXXQp9Hgbteg1fojw8Tey7ifvBzCjYhqiAeTDkZkDdFBXSaJm1a",
  "key3": "2RjAizfoEmdHYkBSdsPc8e9RfaAv4M9Lsf7GyohTtfjCGJSEAAMJZj5fAsaj6FJtZmGEcxLrRBZh4FFYYqM4MVpi",
  "key4": "Nxqad3rvqBYGKM2sGd98YNDV5GfhXWaJReyeNTUspbi2y2FreQpgtCKcGKXk8sg2A9dhrS7EKwTLRY2riUMfyot",
  "key5": "41vznJWKp8p7C5bXTqXS7UTBfph8mvnGw4PPaSbjCgm7XRYpNE6ZJrvjeB9hsXyEGXGqQvz6AXrCdy3TEfhDWaMg",
  "key6": "3sCN4DZwykCDBrRSET3cSsVMBEggSFnx2gYgozdezcaLtJmQC5RttrvkFdryb1h6LeTBRsYQ91U1V4NgsJGQP4dK",
  "key7": "2Hbj7yZqS1n7w48dbzA9oc5cniuVyqKAWdmfxP76HFoeMKTTNdTzd9EEhWC5xvC2X99ofk7Ytki8cx9fWxeyKdc5",
  "key8": "3YMaEen2wgJN1H2dPRRbAY33NtVKa7vutpRWz1m2JGzYr9egz3bPVTYkC6FEr3vdhZUjpqzBJZyh5rf2ZGvTvFie",
  "key9": "5wWxcAhE6VyzjE1qT2L1NLB8czVB4zCL13Mb6FHC99AjCyiFXFR1gC22psLE1A5vh53B8xvNkRAqafCF8959GZfJ",
  "key10": "5CouX397ywSFnhf4yWYXJyv9hmeaJZbSP3Pp4P3j533kHLZsPSqBcMNqW152wJEDXbAMVLr3tJDyEnRksKSyw7qo",
  "key11": "4uBdohaZQ6fYxHkqwJECqCF6fmbuG3H5oTZcTZd6w2BAcrem92b4Rsv7bdRMjeQY6Nr4JR1JGFuxsmGZQqEuMVxH",
  "key12": "32nmfXGtqgUVzuzYvgbdH85SaryPqgSMiwsJW6dgZuD7GZxZ3E1qXpFeikfFpraTbJLF9wnzyXEaCB4tUYr5rzje",
  "key13": "3e2M7dQ8G3SQFeFRE1hp157QrsJWJXiFz3jfwPCVxSeZYrtTCMeNeV4SfJbxzLp6zCCA8oMmPSwpyKhtdNavy8jv",
  "key14": "5jrrzAxXPo6fEGu3zKFkkxNCPoLGiqVFT62kD4KhJmr6w4rSbrQ45q7TZMDeoHDx7kPfjuCqoqz78wcohBpRz9zr",
  "key15": "2PG2sKzfqUPkXKQasanYY8ZarMvBEVA2Yt42581sHAcTyUPrme9aYs6EH7n8vZsbmCrDyhoQowAXpMRCj3akKHuF",
  "key16": "cVJE9wwcAWrj4DpxsvtupG28ySgdDR3mC6ohoijytTXB31QgWwrgsfMmjbmvykixwTCDaQxZiqhU8rtj9SJG39Y",
  "key17": "5VgofkdrCkoUpC5QruSR5WjqobjgrvKodMVypg9y54DQq2e3ZuSM9Nsagarmx1DHZXg4FC2QQJHFmNcyNGzdeYQx",
  "key18": "289JaChDDGTwoNPosMgyHwyDFn2JuZQHEAA2tztF3A5d4CAigSAZEPzFVhrVxByvM38DDw7PCrGF9E6K61xfknBC",
  "key19": "4YEXD6nyBg7hRxowzRirSCrAMS96i2n41jMNTqHDWYkCGupg19t6ME94e9pr9LjpPshwTac48DcSPZBKEoMibqC2",
  "key20": "44fcd8Dk2vqVUGbu7Y5Jvz7S9GpaizauhDHaNDRnrrrz5J6novYBZFFLvcdQLJ2h4JxBWheS8yGrtsAY6ivmcrqU",
  "key21": "22FHmnJCQ2RQSNVAQAWJon3SZ4LaQTSGiecUreL641ZdSjFJkTqyPpGN7dqp7rFyAy9NpUqno6YjgynXGxcDagkR",
  "key22": "jLSfrVny6mQ468Dr8y1yavHdScjK8xpMGk8repnqF6gemCdGqDa1JbRn8Hv3rfMcPHLMGxkfv4FsL98MfFhZxYX",
  "key23": "2Tr3DtMJFvh2xBcc5ZQJJKDXpyhzvrvtqszVkzPY6vjMEt3cnjgUc9ahDmUDK7F3pP7rc1PhWpJn46RzVUPRFb11",
  "key24": "4w21Vt1wCXgg4hAHNZRFNaK5wMWCBdUJZesY7xrpLNdLSdNGKg2XgHELYkWdCsZ6vENTUQpB6FuAqds33mDnjwyg",
  "key25": "5DJmana7bG1JTiDhvKRD9hNDV3Pm1iSXDcYQY7MVrPMeuTLfJLwVLkZ4EbLHu6x6QRk5wG9EUaUG9Nhd2DtTh3zu",
  "key26": "2cDctBbrEvCcZxn89Uy96twJvEepKJ7bbfTPzLvefYthJPUbxz9t3nrcaiBGnhYdRXpkxSu3Zwg1zBRZ2Bucr1ae",
  "key27": "2iRysM8QoLFnWUTfswGFhnteqxMfP7C4bBH2QoWEiaPvFwrx5wutAYPZeWjUXiYhrEb3rmCSzhJvFK5Ty1PGssbe",
  "key28": "3eUWX2Bcso2y21CiDa8YkaUJ2SAC8ocQQNAkft61rdoLybStDoaAxekfDZzS4Wf92BNMCdpdBSokmysRcgvDFnkK",
  "key29": "2vKHkPwKYWJTni4r5wnbN5wwkd29srZtBiU31Ad7khpmeZVkrWCX1SKnAjYyvuy9X3Nw6PrSwp4ECqzWySifAhH",
  "key30": "J1UwVT2wBMhXpygzi9mh42D8FUwrutUxYnuKX6DiuaMZsibwS5DrMmYAPRyQ8YxHRiAvPk9bRYtcnt81G3JzqJh",
  "key31": "37Gh7TtcbLhSfbyi9un1CVZg88sNdpxwo1KYJVqKSPHtFRQMahMqCFKRHSNZqv5fX6xYC4kVATUqA5fNYTbtEHGw",
  "key32": "3wbDfxt5HeB3Aj1gCXPVz2tZXcpa3PbY3waiuoRinDqEZJc6rirVK5SwhUmncGZVz7rhUFSTsvkQ6hV2brwEkh8a",
  "key33": "5CKinHqyCkhQWVT9ae9fqSzzee343zFTHUkT2MmGt25Y3mCxbyFBRxfkyFbZt7TmVdZiSYBEFkgHPeQNHu7abc2N"
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
