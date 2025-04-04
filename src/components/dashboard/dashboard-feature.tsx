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
    "62RFpnJUXUuNcgYdnS7Li8wtCUSNjKkzkU8rj5uwe9q4Yw8AXBuAgWTJ1GJFocizN2gxgF6FrPqs3MZsxuLeGJEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fy5BX8XGJH1yuWNFTpgDBEQQPZys4x9PePCr5KdDX1wfG1j3tki5PcRy1hnmH5vvSESrVwz7yJQx7bCnxYYKhTt",
  "key1": "52NcisszwxTGrTfL7GgELKwBKo75wgCqZX2FY8cN7XRpabzRygKTnBKX4MC2px6cx7ykfjRnDzz4Z2y5tRC23awq",
  "key2": "2BFJmGVxBtQKeY59YHGh3a4pHTZdC7NvAMCqJSkfwHtPXi9BFyiDS3xzW1xLKDa74K24iXQighsNLxwaioHE74Jw",
  "key3": "4PMX4btfwCt2KrTfrAbtmiBz38LPURAq1vxYzZdefN9KRC7TKh7hithkLDnos2V1qeiqSQQFDm5RkaBkz1WDMcDU",
  "key4": "5Wt1FXkFvznhJ2Jeyq3y9UNySsaPCWVZ8mUBCEiiFTuwbHAtxwR8oMRPfnpjCgevs8N8rjYbWFKRyxqZHZdwHcbu",
  "key5": "2FvVNCKLtn4op8W3YL6VdzxkFyc8apqMEcMBLCCkuJiA9SEmKbUYwT8b9bpZEXEsYHc5oCFYenknvBUaMP7xiDyR",
  "key6": "39YdN7TNfnJnkysyh4fpZikh1wwfrZB5NZbGv5WzGd1pxiaZxU6rWzPbSQjiGTE4sMBSZRe2g73ycH4eAkHohoup",
  "key7": "2c5nSfAhsMGLpCiEcU8BXapLRPrxsGNXTHgfZHyjsMucFcwHGETcVXa7giUFjx4QBqxWEomeUBUwzoRrhS7k9HKk",
  "key8": "4vrdCESi5KDEms4YupCTeVUGnphe33J6GPeiu69e3ZKdyw9Qjxkz6PhWf5UEytZywCteq4ZBN2cZKhw6tfi55aUu",
  "key9": "5oemaDwPTfdc3ELNyHtnjbnPn4syrRnAxC7DnD4fmoHh996hk2bbvyKNF13SuZC32yy157yEDnvz9kY5sE773E8C",
  "key10": "2yhgvohrA2M5f1xAPPNfbJQwRviYKMYgNLpThoNFC7HNGWt6xWoPsFLrdNVpU3qDcM1zfBKbricFrhihVsPuaucy",
  "key11": "66cE5G3Q18745wEJtQKjqW5mPs927BwcKvYzSkWPKSMoLnrLivUftVeMcpRKMbk76brWSya1dtMAk7c7TXPyhSiF",
  "key12": "iJMLm3k8sEp66Qtmyc6KhDSc1mbnbAhxMt7XPNqe7LCqkR9MGU5HMFEPTELivgaGANXEKvRjpp7FLPbL54oL31q",
  "key13": "3URW9g9WLENPVjyNTcWatd7i4fbQD2BLYPvvQbfQzELDG5AzS49wpG63KUJCm1Z1K1H9BY6wmTSGe29bQ9dErTDg",
  "key14": "3nKs6LNdardk6mZa29nyUb8574i9xJ98BifQmSyN5rhkY6aqZrDFGkQsmN5H1XpkFaY9ChzFi71ep2TSK76c4pqw",
  "key15": "5uxHvTP8tFupZvzBJE8LN1bf1L21kaeQ7wQ1i39kDBvBRrcZ6wENoPoBCD2bEBhsCz1VsdfmPCjjXa8mr7qSMPPM",
  "key16": "3MXTxfEMXR4JQjogBdd83r6yJGadPm1625J74DyMXhTSwi5pRmPbpmcToLeAb7KfrwpoBL9bh3SaL55QGtVRVMq9",
  "key17": "9jpwAMWEfZUSyGmq7yLPMvq9LCjDNTjyS8XCa2aPppaDQaghpzSQ37UaSVkSWTxWczuCxPVtvzejxLV1wpK2cgn",
  "key18": "4ToFKHW3SWQFjyKFNVxnAnE7ecd4V27GSemzb9vVLwLVzPTNKuLz7fBXqaqhuxgfc3bJCGo5NrvYaEs6wHWuJPKH",
  "key19": "2GYMrKGGmJS4mSVJ272DvUy1xAnYhHiBWM6ScxPtnZxpzGGL6cgeYC8sk1J4D4G9WgFBhDFJoRnPcE9bTGJyfkJS",
  "key20": "4RNHhMSK9o2ETMZ9oSogiUQkLgy6Vj2SKqZgwyU5RQwoKEdu76n8F19EwSTTidpPgqStnZpy9362FgRX9sD67qoP",
  "key21": "3niemuPnFW5gnuDrdUbrnpWmuKE5bXvbTXZcy6Hbpqc1fW6VD4UEAiJdG8YbWKUU1EBd4tn9SuvHMGwFW6XeKTzN",
  "key22": "Tdyt6QjqLkEgJ648W3MCVg8g4FtHjo6U2pzigTA9aviJrBDnS2XQXWiqqZg4nvqskb3oaQThyftCkovgFDQRaX8",
  "key23": "8ujVFBhATV9bMSvop3dxtzXWW3NP8VGHiLeCuxT9SU8SgThT9kieMU1VybkzsU5CpXawGkqdsLViTAMh6KRGAM9",
  "key24": "3ZAGopZkSKiZuVzrhLh3uVD9GKCm3LRUkhX5sm7H4Xjm6wmt7JbTm18RkbiSBQFok8ivQqvW9W94tEFthuNEZ8jB",
  "key25": "3o6MkgG1CnVJNbZJpUN13Nf9B9wySRKu59cNZmkxhe8uJJU85H5uQZg694N72Mi2RfWFvEkr7F9vqcJKmkWKkrMa",
  "key26": "3UrfXAtAS4qfdWuU7L8sGfebMHjCbVuwFHSbfsN6NC5XMa7wHGEmEFzVyUaGvJD9nZi9xgda1vdmdjGBn15ykDw",
  "key27": "3DJASADQeJg3E5dQP8MD16F4DHxVeMvuPMDE85nHFx3F7nVLxHDisECJiceDFkmeAR6ZEuPebbpBAmvC7bpUkZKg",
  "key28": "47i7qWfEsYTw5XXEVqSjsUhZgdivh5HKLWyRCiYDkH82pusGwLYWVzn1m55G4tKzG38MoqbyNLzq7iJU6aS7K2Nu",
  "key29": "4CgNYNh7pWjJWjghUU2x3ScVvaZfHyc5CEKz862u554dtsYTDKv2SFcf34dPBALysgGRSeHEfa9LzQmNw6K4TZPd",
  "key30": "57Pmh8FJ5wQLySaFk8yQXxBfnjQh3TPdWCeTvSM5mdGZmsSGQGeJZLs9BGiu3EGPRkYMbkXqN9Kg4dpqxvi92RNz",
  "key31": "5BjS6tUrehQBybFkuCixJ6Ds73hmGE5mfMX954aiPzmpnB2LV8UoHgaoe85DsZQP5Q2WBddE9LkQXnN5vxBEtpvq",
  "key32": "6MrLb11oVHhYmtt5W6bpxJ97rYdv2JwP1B9ckH32uXCFu4Uw43Bwc4MkMgvdYK5wDttdmemo39oPz7wsjWV15j3",
  "key33": "tr5HrkjpU78gBu7q6vrk65SGSb39TfFXR7c3tCsBrv8v9nzX2n2Q3Dsp1h4BWuxZP4ZuuS7QW1sXMegBWjZo1sH",
  "key34": "2YLGumpMMvCfcfotUgwPbU1QysvXveD1E9YKGFQTZrDdTJ9WqAcGjCrAJ2gFHzsxvgAth7WHcDHv2EEpjTKKDPaH",
  "key35": "2Qm3MvwUvtdSoUj2q4Fa5Jmxcky1BphG4RtvuUU8mPofJ8FxrQBNgwZCjFcVFA3wfhLjpYyh2KV2UqtaAu5dRzYt"
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
