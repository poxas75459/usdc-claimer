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
    "2ZaQqMfKCiNZPmWyGmyQJ98cSGhkabt5p8wGqvvaz1tgpw5kDFuAcZp3ENyJHK3tBPRu8Rc5By4LMDCCyJyQWNVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWUJHL9q3C7gLrmC5aKp4D9Hu1vAgHBd2w6MLS7T2AsYx9mZBWWx1akGnPnC6WpYXDz7UxmnGznfn6XfKaYRmbM",
  "key1": "67EqZ3p3amBKGDZS4tGNTNAVkNSfMPdkAXxsem3vgmuSDMoGGVnxnLF1vDDv9DDYFMfxzcMdZVFS1MDv95e9uUiF",
  "key2": "24Ni5m4wdgdxQW1UmhBAqTEboevBqDaVGaMBNjKb8NGptpG8mGTJep8ryyDoShYRzw9nLR9vzbAEYML62wwtcxGz",
  "key3": "5T9gzPJQBdRXrTeEtDphwcUMmveg7DBNTx9QeZh1x3uzMRpZHHeXFwDQ6AsyErz1DDdirnXm4L99nfrsV6bJup16",
  "key4": "2igmpXFUjfdJQSMbBS1adz9FLgC4PtmxanZ4T3WRYgAgtztsSTQ5KsSFfGyYBcGj26fSAiqTL3HwuzDRcbEzoWXS",
  "key5": "4WRaGcVs2TovTULqXwxuuXgxJ1obRqHSs3TuN5xF8Z8a14nzxuvRBwmNVArsmL1kMZByzt9xvNYazd61AaDYnyhC",
  "key6": "5qdRAWXESKhCZ5bLE1ud4399DAjqovk5G9pF7RQKx8XqnC6So2yzedgE7dLsiDunuvAj3AtP7b6QZtFqwemzAxrw",
  "key7": "2P9hjEsLuKNohRLDSJz6gCzopa9baPXpgtgxRJGmTmcT6eQjxS1MeX7hBKisBSS1huHNBdsHxWS4gPsLDPrtqp2G",
  "key8": "5hwmpBsHdGfqdKvFfcw16uMzFif4wFt5kbzKir1SNFi71mb1egqt1F74HvrKxxcUgkYSgBixpSBQ1CfcUVRv6gaD",
  "key9": "3qQzKzo2u96parbsWf3YRHwK3dPrTT7dtLD8Kc2aT2XxZWeSA2zcU13B2bEtbXmmMZtRPDKYjL4whAbFbEyuQSjJ",
  "key10": "4Xy1M78x3kPPxmc4DtXy3M6wrkMLCpmrNgvKooQta8zTsxnm5A6ajNZsfMbjXLeGGTRG5SnWtQM7thKBmzZudTJq",
  "key11": "MCyLyy1uk1yuoWZyBJH1Wsu1zPuBVouhZDVq1i9wyf1oxkrSTo6Fx6oFGnKYrHCRegLR3hRqtSsrH8NWe4fscZm",
  "key12": "4gVcApbXuNgMX92wpgZu6bmoUQCVEazd3fZQ5wgnKruk1Wme8UmrNg4K9hnaHwGN6KckXx5t8YmsJZAevkqUrKV2",
  "key13": "2gKBskuDFBcWQ7fWVoaQt4etSeWy2NwrEBTxD5JhxWa1GdSoCUfGJbrDYjhZwG9eRZrwrJjQNztmZGfhASXEGXgg",
  "key14": "F28mGquw8ZcZoPjtTU4XZFBv45DCYti26nbcM5yVxpJJbQPExpHq88dGqJJcP1sNem4u8zPyz84sm1VNiy4Ne7F",
  "key15": "2rL926ZbvvoerieymcE2znX2pHvNJGc46Gr65Xqmvd2r52PqWyAR4L3wzvPd33Pyu3wKuKjPAsT54vm6p81uWmkq",
  "key16": "4zA3wdfLEXBMxPNYbS1jZbCxUmDHLewPwvNP92spKuwpLHUjeeEXzJ2mrecwERbHUD9VemKZGuh6jp6MuoPrJDp1",
  "key17": "SnPkEPuo6R3WzpSwGtJcyR7iLnS438DDEk315dMiAoSBMKRbtn3JffyPjoeVU4sX1o4cJzfuUV5WWW1gMxJ3D6e",
  "key18": "32j7bEjPKMHcSx79f5qLSanAtz5cnre7Sjt1MhHr7eKjiDohTuNxEBUN1SCRaCtwxNSWAQEnhQEvNnrkSnCirmKb",
  "key19": "kMp4EBpey4zAKCXASaw1vNBNbhpTqKFNjySj5Bikxs67c4jbi63FXxRsMFNaHPQeju9PFkMJL7ppnd7NnK6EyEa",
  "key20": "4XBq3quHHpjGwwgVmqNpR4vCTbVLMEVSWRcPjAnAYPe56D2QvYHRL5w9KAHNkXr3mZLEvszJEYqfm6noXd7DWQMF",
  "key21": "2Ks4XzRRLbceGa5X662AQheRK9AhMMfCanbU9qJ92BmhCGXDTocHn5tPP2TZJ45wSQTDpNTK6Nxq83Wq2kopnWRc",
  "key22": "3GjJdmwA1992bK8aoCsfBrNMfgYnGrQHeiuWTf3cbm9xVMXe5gYQSmo7WvWEnnqRQXN3GPh46UrmD2yEiGJqgjP9",
  "key23": "4KcZYFhRsvcLqSy8xmMUiBPDQi9ZduRFqpYL3uXYVdR6LFUKR3Fh7SfCdD2MiNEkYom9pAJP69pYuEGaFuK9pf3t",
  "key24": "2RNjCupxfi76Mk3cuDKRg4bZZVhEdoXUfaWfqvwyoCLSj4bxPCAdRLdah9LCbpbLw1Qv27E6sM5A5wQE79gxv4WN",
  "key25": "sG8JUwLfqWjUm1F12FfKdWqBCtArrddWMEupLX3GVS9see72LXfpsdgdHcvZpeEzXofzXMbZYMe4S9kq5dEKKv2",
  "key26": "68rsR5T6ZLwLNx2aDjnVZKTZdPpGaLGbi3rhE2E8F1XhPb1RhQVoWBNZTn8t8jbGHXFwRuGKNJAWDE4KSq65Wph",
  "key27": "5oaXDmUviM4Rc84R8i1RFJYKS5e8EsHLYv4G5HRLtXjG3aNJZmXqfQGgAP7ApoKVVseFienGuxj8FtVonqXYcfJB",
  "key28": "NrmquzX3k6BS8TSMAWW3ZqbniS9HcChpaEncJ3Vt3sV4kAH4sNK7Tip14SYEU1xRNhGirdneJGbqfXgGS23VhmL"
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
