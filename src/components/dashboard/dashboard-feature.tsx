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
    "4xGn3hwbkHo1XVzzBRbqEvfX5DPznZxywSWZmMA5t35XsNZYC6kmrH7e26ijff1Lnkk22Ww23HykzYjAU7NUuQmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rguXmwgcogofjacKjrjoRpcBE2pkuMrqcdVryFLcs9Ey6eRj1qXACGxhnHYztBQ9hBcxJiJHRyEwMykPhsmcKTm",
  "key1": "5ByuSC4DZQgEz9qFmYtRX68Tv7phYzjLiP6m9YmeqG3hgFtzKTU943groC2Gwze4MKcDjcjqvHEc9viq98ne3Lk2",
  "key2": "4NwTarVaXcxQHdQ1ifZNpP2ddvKVMhx4ryTwC6nEBN56A6SAbsL5YoWU2SsPM6TB2znsRgxMt6AUQLuruPLw5Fix",
  "key3": "285jdtFvGion1gWXhCZMpah5XL8eXDTyk1ZM9qaPzgSF2iXiotevkam1eBpoP4L5B676banLNrhWGh6XscbZD1nY",
  "key4": "Ykt4G6KActUs7Wctnk8qJL1axW5KBJJP1e1tWhLNH5fJzUfqjFsVuxUCKKvFR9MdGTGLAchQCTPDwUDEMBGdu4T",
  "key5": "4xXwP7VeFZUzjdxosRHSKLbdRVsUbTXb348gyLxuPdHJ4VADTomv6j5YWm3NfCHDgzK6X1ya2Ym7feA2BXQSP2CD",
  "key6": "2m4M8SSa97aMZhwKYfH8yp8EPv7A1AmttEHnEy5UqdoQfjvadReMwrLjBWgBSmFEvmavzU8URb7QVUwPDpfcHuDx",
  "key7": "33D1cQuh4XdwEM5Z67EhnijFtenec5VhqcKcT6t1P9PaneDSjTexBEniVuD49fniq6KJx2pb6AkyvEsZnDZpnoSt",
  "key8": "2eTzL8B2EhLsbu5HgMMg7vvrSd8RQefRBdZwHC4EndM73UFTB6oH9GS9e9hJ2da5hBJEQ3x4zNCKZsy5prGweWAK",
  "key9": "7HXJsRdDxc2TEisSmNYLQ1A7UxDponPyHbqD59vdCszuR4w1MkX7MMhQAswPhbCT6hji3owA3rY46NkfENHKmmZ",
  "key10": "N9gCie1onRh4tJtxCuehLQKe2YrGMLMJoEZhzVyq1aUb4qJN3vz6gigsDSQZPcp8Dniqv2zhsmULvtpF6me8yMH",
  "key11": "2HSWgbRLj41BQntEWNwC9TH3L3pDJLooT7nQvQypmdNndRddZpxSQtwX8izwwwc7jReVNDb68TdckHr1j3ryn88u",
  "key12": "5TrtkUcuSYdRuBijJA3FmQ5L3yUpg3YrHGXF74X5V4EnQnnVQEuycj7Z9Zbr1afjBzUN6tgUneUXChwBb6xQuBbE",
  "key13": "2PkfHpac5AE2DyR45tYRPY3yqUXxZpmYiHjbB1sQbW6kxoziqogTNumkDURuP36tspo87hkYW9RY91ZqKKmMQ3iz",
  "key14": "GkZjgDiJGCPmUZ5NW3SDFH9hgPFRE1i7XwJdkfLXPLwGatcTUgAptRJbPcY7fqmeX8W5tVQ2xCSHbpx2WqTSczQ",
  "key15": "45GwZeT5xVHcJUi3XRk9hAE39TzZ8YfLqXGC5QnSLihG3qwQ29hnF8sguU8V9LaXxRWeWXNq1UZwkHbfsc9Q9jtA",
  "key16": "4ZUCJjbfSrJmV2izssubm5pbXyxkW1zcJdm9m2qfKSFJbejfhSGpKFyw6mz9PTSPrTqcjX5d3rchCeHG8TVQ7gCZ",
  "key17": "5bP9LDwDTWbbkkGKQSFhbyNS52X66RsMoorHetKegQ5QgFa7ZPSq8oZtRfXLoP11R8syN5WAob5aNBX2di5rhCeb",
  "key18": "2T9Jai53SYnemGzX8WFAKuHVRyAP7uDwCAcTA8EdPDbyRJHdw4DZ5QEq6PL1m9pgbHkTGV4tXXyCiDZW5GiME9xg",
  "key19": "5TwHppKmYaoGHkcZVCny1pDgRsAwy2tWa4qaVdwvRFBd57A6h2oZZzrvqR9z2H9SZzKm5wFiusj6JiiY3Kdyw92T",
  "key20": "5SpQ65cUzQ3RUo3pi5Zc54A3Nnq8GToXt98DZvYxKwQYGpu4nVmmfD5HM43rZUtVsAS4E8WnCbkb3uAgYvfyWuKA",
  "key21": "55c6xTykAMsE55PDv6ucpDvNA5aUBnx7eNSVdA8E3znZg3qUUETCZ2afZET6J5wM1e5U43CJG5AgmXpeBRSrLmBk",
  "key22": "5svku9Erb3oxwPVGSsXtdcTVaPjcRtA9n5wq1mqhfErZkcjCyTDQchyDTshmqbyNW8x8gfCT7yvWg877qNN9UtFt",
  "key23": "5GB7V3s3veo5eZZ9HHnZxBB7mnoT6PCWJioaG63Fn4wqHtCoPgrN4JKPcRhgR7J7gJXaFwWtgHr7iXRHhcGLWpGK",
  "key24": "mEr8Tsc6XMkQGuy8EvoxvBabSn4bAT8eNPsHWbR8JtN6c6rbnVnhvBLp6S4tWK2uJf1EvyT39NYDttTB6P7fp2u",
  "key25": "4MNNgvRBzquX7dgyMUnBCDGTsTrpSmnZJqJBKnFpMDCrbJTMV5V9BsL2RMV41yKqJ7tCqYuUsdAZ4rTC8Rq2fJ9D",
  "key26": "3RepzbJJvBbHniX8yDLJkjEEKB3WGHfoCGFi7uYbRQ5x49BSkPixGAeDhNBAqm6tWiYUKYPMYazvAcnNKrVAk8nc",
  "key27": "3ELX6ZSSwT5j8unsF3fydfdmMmj9y4ASD41BKfeG19waxwK4WyFWDe3usXRJfdtw4db5uiP8uvkXcxTg1qLoU7hi",
  "key28": "23MtcX7yXJ7x2c2FqXC1fBZYREkD8wJhx53uFViK7YLRqYBkXpSMyq8EiADfXXWMkgsEwTFYbmRsBfrRJ6wnE8Eo",
  "key29": "5t3BWnDN3TQDkhNF4RgsprftTttVbTqJUvbzVNAqUC93CetjhXePFYdZABu2JZDEHRxYHkTh8dLSb6nHmJhD2mdm",
  "key30": "37nj736fAHrX4wnjumFQ9sdigwYnBFaEm6bE2hDeWmqeCmDouGwLg9x5at3TT5eYhQoAhP7bESuFNmvgPdSbnXqf",
  "key31": "xSxXXN8wVRb6QYvnD5U7P2EUVr8KSiQ4BCRPPuShHEjyEuF4WYvydtnuAvtVHuX2fJ5W89819o6v3PyzEkHJCBj",
  "key32": "3rscYS35Y1sd2Mindt7ZBqMuSXvhaRfqCKATjX9EzTMP1wwTFovgbXevk7HKZjtqesqmSHonC7MzFGCqtRpsCQZ5",
  "key33": "5GP3M8rxqA9iTCRdXczuNkaUvLWWt9Yx66L2vAmwVPjopfxZ5FrxmVpGZFoxjXgmVBJWd9dt8nwaADe5aoSwZABy",
  "key34": "2Cw5scRSxjnrPMJ1nSEAiPtVvLa26ujS1Q11GMQwY2LbUmLuQz1UUTSw3snXgQksprHSAxVB6UDUnS5RmptG6kee",
  "key35": "5FG63Y5hxZ7yfXJe6SYqhTFfFsi8vpzgvMKsyXgpoFVLSUaZYoqp35VjTRLVP1b11TNbXwbK3TEhYqher8H82ri2",
  "key36": "4djFzPUkPoUrTrVvuxoP2BHxayjhvq79M7fDSE8r2eG7kRbS9arTZn9DxLZLzodridtCMAmcFL7jv7MF7wJ6iaXe",
  "key37": "5Ab4R5x3GtXEmcQkm7inMJeYofdZd9HS6mkabfe8RpkfjaDKTPSL9TpM5Sw5te3ZK1XnRzoCKizK75uDp7Nd7fSC",
  "key38": "MxvssP1FPqESX6vrcK6QKTqz331qjHMK6eUSTzrf1AJfXGr7GirDadSoTdkUyCfem7GsLNhPdCNV7s9BPLSybz4",
  "key39": "5px9xra3fhL3rAvLiRUCSLYGudtpy7FFamzgY4E9Tu9ZoZa8R3M9HKrumnXWLCA6wVB1ha9BsD4mZopTmnN5iVRo",
  "key40": "5J28gM4skKqCACncvU9d9CxNC6152MSKPHqg6jhdapJ6CgxXHYFTwHmpYeAr1AA6MSb9YCbeU49TXgbPXmyR2iuX"
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
