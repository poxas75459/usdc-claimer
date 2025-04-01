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
    "TiUqqGen9wzfcKYLxSkSbrtFyAGbis9B8PU8YGxLCLWqSKk2hS8TRjNNwAnCuxDLKZnuTTNRjdW6FMNbcqFp5we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qawL3H7NDNEoawKJZda6HmRMsYMi5G92bHUf4yTpd5Vt4d7bdz5EfMv7W7TpxWpvHgNir7Fd6bBXkkoapkjDVro",
  "key1": "5V2F9zU8tX4yfkkL6QJ1DzuQ9ZCbyYZahA8LofWzjCMowdJdLiKhgd3TuaFqnCjSdFqWBzsc8QqLZh8fCoN1pppf",
  "key2": "33UZ7owNL1ZiJmHdkm4GMFvmEhc36pbJjahub1z6FwQedznamR4zGqiogkBjsHM1dWUXVeF8AtfcPVwqgz92KXPF",
  "key3": "64YmHPhHfR5yowVKgDyENL1KUAGymisCcnasqh7DwPFqt7Zro6GtsFHuhmNh63niucgB9vhSBoNPUWizTBsoUUrH",
  "key4": "2MgJX4MLnk4wng2womx94NjVHyHfTGhbcmyrCSBQvZx2vbDGLqPTuz8Y3tCiZ28M5px5o9rP17soXqA49PidA9ZU",
  "key5": "2oP2YXcb6iUjY1GXKa8KP9ey2Lruz9vx34pcoaoCn5kphvEPLjWU9i9A72LsJTZaDmtmPzrHiGBgQ5wHPGaZhf4K",
  "key6": "4CVgA5LWxm2jehdbtmNtf2kXLQMdvF7RsjjZJk5AbPjHH6Mnsv5GKT5odhckyvjeR5yP9BC65QxRPeck3xF76FoY",
  "key7": "5xwBEHT9sT2oSDaznnnRb5Eumd8Gtp2ELJ7EVJThbfD1j1AJzvmcpXwFv15aibkpo54JHq51yskYqkC92NcNLnit",
  "key8": "tuYPQieTbnP1SCkphFq4hy1oUAy2MmFCxYPc18NaYk2f8oSDSx85swL4J7zapFkGACbzjryafzF4ttYsFJzNX4x",
  "key9": "2io7pNmZ7mGxwPfyo9Yg29jHbXTvF927MCfSfW322cUTYmRwxoiexX1Lkhn2SG4mptzoAAFDSGYNbkr3Bi2ozTyo",
  "key10": "22HA6wxSeKpetzyyaaFWxgBSJzusA3hWCzQZGcuL6uGS5mepNVhjpHtqGTN2aB89sJVddzdMckCizJTkm7Lx1r57",
  "key11": "4Nd3JWpYsq37ksLFrf9Zm6c8yZ484XHdTLEAVBMPnAukbetSYXXvkbin1brhY5yhB2YhJoUQ3Lj6MsTQQfoNkXza",
  "key12": "21g39bZWuZvU1U4aWWJ5zTu7kY24CUgW68G3FmXXsFXWumVPvsnAcWcxBjqoSaeFAfU6hHft5cM1QB7L9Te8fwc4",
  "key13": "4rbUhqAVyBBsSfgh9UdtsSwHkniQeJ91YjQmCw2Pn5DLd9BybrzzUyhmLN9G3QhUmV3JUkMwAUCCmDAT694gFk87",
  "key14": "wTckaF4J8f6Ygp4iCLU2CvqxaMDwT7wJ1oQM1dcKLWBeR4iSbXRPp8GWtrjjenPABj9dHjB8mQxuNUcKEBLoXVG",
  "key15": "4meEY8A52Ww1oc467vhSkBwpjBdovZgCFTDeJC3EQQsTf7q2n3fuepbrFodw3YFYZ4N5uSeh2B3qFEzxEbn7t4Nh",
  "key16": "33epwT7oHWKCN6qvSiGZ7hTbpW8y2uZkUCg87HPypRDQfnVRFcijanXuuuRR4kouV1a1DYEW47Sg7q55TPiXAfoU",
  "key17": "52rudfnDtp46WttyrxxSrHTkMWUCwWzPDRfv2JomamfDu2pRR7aMfzF7Q6JHeS5RwHLKetXtcC7RiD4Ji3Q2LN7",
  "key18": "3MmixSkHCCnXG3BjQo1KLhGG7gadsa839h4srFU7eBSchfjrG4vVsUfUZPbRLhCQiR9dtJFxoRP3F6piCphsUFtn",
  "key19": "36UsA5VCDApkLG2aeCosGKBjQvcxe266VaPWJhQYbYCMeENm5buUJiWg4fXpbU1DnT4cVrxn7Z4oGqekcH48CUfw",
  "key20": "4TKCyD2ZDUF2srBwxhj5QTv5f3RFEj3W5EFbZHt8ZehYy3p6zPLWFMxfkoCiWDEGZFwzBkTid5tE9zPLx8uzWUsZ",
  "key21": "2BsgNYKWQ2oi2uvbBv2P2nkAicm2mTfV89GsSUMgwabHjkSMQ6tJEkfjPGFRv6jdULMUuiQ7MXHa2MSBwhw5PqQJ",
  "key22": "5KzAFs4z2btRcxnq1dT3DNHcV5wKeQt2FZi9rR8TGKAL7se9ETPsaXHV8vQdn6H8WxGy7q4ekK3ojD2gaePxp7uD",
  "key23": "4k2N7S72PAcLJWvQ24FfTxQBPVGV9KenGpBMTERN1M2e34yKvzLMFepaT1dvVXggn9rUdvT6mYnLJKH2hb4FQtXV",
  "key24": "2KUndGYAgLD2bkVHF4tDyGC9tJUh1idUegVpHjJ4r65LXW8do1NDRjkTCVipfiEKFLF53KEmwbRCY6AxEzgouxSH",
  "key25": "2DaQskDqiQhMssfq2MPrDrtQkbWyvkYQR9ysb4YcbhwWXDRw8yu6hCXUh6KpTAAdeT6sqdk3thYaeC7Td5k8dDC8",
  "key26": "ZQnhfJshiFmB6smrMGSUYAMHuhCXUtcJrgKY1qndbFFZgPw5XCkpBV3dRuhutNzgPzYyVBrCCg1rUFE7E3VHQX7",
  "key27": "3VvuEUodPptokomMiTcChUcrWURgaQiy2wFNKaxssegUzGoSTqoqSesz9p6UFCRXYAZCFirubwyZvbe8qKz4ioMg",
  "key28": "VraSxUZ388CFNYP8XMaDTvhfzCyVFzX9cMijFT4Uc6x1rAaAbHrFqSkbN4jaY7saDDvv4zSuZi3K6ewKL6TUYsy",
  "key29": "3B8N7Yh3WsGs9sdTta28sGiEdixfSGSr5httwFY6i6xkEeRdt3rAnJi3C6iWLFQahiZza3z4vthdYZAjkUMXtkA",
  "key30": "4vHXKG8btF61HXsuyG9aDGSMRkU3HSQTFe2ztE8rBZrYcZvqTmPr2GkqT93pyEX6BKFV3xcqRvBdbp4Mo4Fo31cG",
  "key31": "Cter6nuGweEUCnsUijUMk8tCKXhVEBN17115AmM5rR3S6PNDxPWmBtiRao81HegXt6U7CwvxbFq6oGYvAkijzsX",
  "key32": "PKYeu5YWpJk6Jj9GdL5Gsa8hdsf875o6wLM6mRacefr9m2wzndktxZ9o3vbwCkeYh999VVVDDPmTsUNpHkeDteS",
  "key33": "5X9fGuZF4VvJ4E33tCVd5wQVUe4kz3kYXRdDEd45inozdTJuvk3ekLf7ExSbyxJoqM3UHLWPa7pi2M3ca2LZWaM2",
  "key34": "3wEuv9eA4qmedKnVtDjA1Uks885EtESKwRTq52HdWotufLAvdoaE5TgdMy9LxmZbXgf1QhVZepzjmr6bKrrEMRfS",
  "key35": "4uXtFcdr52JvULU6K8pYi8ipMmdLm2DtSYSC3XdABt1Wmyt5TF3PiaPDg7bgccRTuUHtuExHrnQTqHQGeuGssn12",
  "key36": "2wpPNtr6NrT5Xiehn3e12dqrWYGU4uf5YfLdDkSrc5mtYwHRV7HVSBQYoAMNB4eZxdKTBYEquhp1A6zLtYNUytNJ",
  "key37": "4XZjurhcWx4WH7h7mvXCZaNdYEuhkC3DXPx1BCQhR4tjfrqYj7q64MGHk5ydPe2bM3dM3kGYJzxsCgEBA5KKB4cP",
  "key38": "2bWEF7aXEGTUmjc48xykZ8stKm9qiXZnvdA295GMoN3atvsa5s3DnZASRXmi75EXjDHWXu1gkpWEbi4d5NEDXkxt",
  "key39": "7WYgwMvNh5CE9ZZXTgH7z44AcDnrmSf4N6q4m2vTCDWTh56PvZRb93R78E8D37mJT7agZWUSKQ2JqXUJcW1UykM",
  "key40": "2tKSJReJduhey4zpb9Y89fQTTbyKBVpDSyeDHWpPFEwhwmnrEdBqJyZVTBS7xby6EQD7MN4JdSWnTkZybud1e3wj",
  "key41": "f8XKLRDFqcTGPxJCLzBePmpTrJczZAikVFcsQdG9iBSP5kbdJfbqv4jv4WXPDbE1dwe5oFLWMuWVpxF6asCnDe2",
  "key42": "4xwbGUwxDhzHCFELn68Fudi1qWiu1kUd7D7wm4vTBBAKux5159AUE96EWzeiAcV1aHMsrrA5TzwTEoB2mNet9yCz",
  "key43": "Tmgqsgz8kWuFDb1CdLgtZCQPpmrhpPgYZS8W38VjVWftus5GRveVJqmCKWXXqQwaQDaJodeMFYJX3dRnTa4JJbt",
  "key44": "4Humn6e7rme8eS5kMHGhKKgmUdWcvWgC3KZovcSPxU7uzwKuby8imHhXWC2PB3bycuRnLzm28WFtf3ydX6aDQEiB",
  "key45": "2NiRZ3xoNS7bweh93B41Nz3ozcLPzJPFjZKftjG7n6f6dgcJnkFnTuHgX3qJVa3HNmv74LmWXKxBEDqsu6dvJn3q"
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
