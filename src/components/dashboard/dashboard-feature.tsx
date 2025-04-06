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
    "pMLH5Uw5x9GZBRcjzHtZaZ9rYjRoRuvRJiEDuFHsxx4sj5sgC1dEVfAoAx4jdsVyuXNJ1ZCNHJ7TTb5F8GwLeao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619v2MTzHfE68WfaueE8hCMmYBzdgF5gSQyAw3wab4UN8KMjbdGAiYjpzGAC4CCUWWcvd6MyJwYcN9J6m4Vesrwk",
  "key1": "312H9nggcd74sWQsGjpRRhfZUAwnsHtHZLrgozhy9s7qihU3dia6CcNrnn6FVizJ3kBGL8XKGV6Atu7nus3tKWvt",
  "key2": "nfUoZGSWyZxKdPx16EWRg9JfAVCABpWosCfdsozmkLvReoUCDvZEPWp8Vgm2oPbceEN1L9k9srok9Cur9JvxUNJ",
  "key3": "3yt1HtNWC39s9UbMWD4LpStyuXSHrtqV21EXgzPBsoSGhVwSnPucyJFMMSjRdWqbi8KyE5oCKKFUcQjqS5jsvZZE",
  "key4": "hM9Spo5E9ngLh1TEFg9PyyBCfwYLbvPVovUjVGqfX8vaMdsEb27Gadp83fig8ChGZUpZ5zGGsfdqoTTN5o2eJZn",
  "key5": "3Sb2ih9MvR82mEVx6e4LRig5P1kp6c9SGi81aP8o2AVMiAjWYgzNRRsbxn8MmP95HDVoVdMtWNe2r4jgYFLUrG5R",
  "key6": "yjfh5ZoYk2itNP74vq457wqdbat8487tJfuwRnMS8zZm5TZvP2p9ASsEgpHrmYvR6yJ7jD8ZvwuxFXE66zPHQyN",
  "key7": "g8xhyW7eH1PcbcxWWmVAesE8eiWd5RvB5dNoGDM3neok6Dr9ye2e9bctmafreuQ4HpGnKebyANV91hZvyDmhnme",
  "key8": "49rfRrBeu5kZGVVHxficX1CkBbmff4rFW4V31Ra8kURJjceBY1AJiDM1A2MawrSAoKK9gMAkusLu5Pu7q2Lo6Jvz",
  "key9": "3VnHfsGS2in6JhDxWJo7P7kP2zEgZDjpWpGESoeaZbHMeaguDmvFvpKKHZZffpjkNf86V7oW1h2zneb8FJQSScHE",
  "key10": "5FoCibs1kjRquYxE7DCCUZXFsxbzpvE2LwzPBceunjQbc6akaTswThzXp6j5MsA1DAeEfcDsZfi8SjWBQuo6fp29",
  "key11": "2jCwWkwk6u2u97anduzoF5ad16nwPKgJHb8pTVSoqHJrX4KBqAfB1Lkg9WvPoKg4JE6H4y3kzD5Rp4iBKqrLL3GM",
  "key12": "47vskvrS5f7W4jccG6X3swA7A1BG2HpyoMuhtDR152hVZiAQQKZHv37MopY8W4QTZ2MBWsVruLM2iag2Kg89NhSx",
  "key13": "63VprRNRKgcwnU5B5TWBF6bUvsxfNC2DehZoJuZD7GUtUcJGY2PGmxzTAVhDLBjBkMREcYucxvejXiEbfN3pB9dZ",
  "key14": "21DYC8EJCdyk3JveX2YeJEazhhonTMdpiqTV3HAzcsEp7zMSeHwZYxuDiWZpXL21T82fYpbtFT5Xo8guC1knmGDK",
  "key15": "595zoasgaL42y1wH6Tku65AwwNRTaYhyFRgqkYzkFjARxeWj1F25J1AHUhchY8L5Wzc2UEe5fKd7Rc124mxk4UR5",
  "key16": "2TSkB4M3SEA9wbo9uYq4w1gGt5A1D9C9Jx3rXdCAD2qBdn3uA5iop2PZiW5HVpoPFwduVPP1eoTFjYjrYu7LHsHo",
  "key17": "3wD7jn4p9sfSZuoFPcyxmRLxNMfmPsE75CCacFLev1WMQ6ueMiUfiqk7Y9MjvLFRTJ92rwfZPRATmqozNCfiSGyc",
  "key18": "3yG5zKhNuB1kUJXq3zXGLEiMMHLDnWzihiW2b4tn6p56nnJkPz7sKhZq2zXpUpArfk7Y2pGesQRW6ibxN5yNaLyW",
  "key19": "3k7oMWzRUxttmns2rbXkK71iki2gRDsVruVzqSvgViLm2DVaYAHyefgnaAyw3bZuHLY9VRbZ8HxuqNA5x9YT41eq",
  "key20": "256PxpU8TtQgvgKRybVk9t9cydwXyJFXjs4XWKicwj1RQxgo38AZjnAdyeyegrd9kYYifW5hXqge4YnC74j3U5aB",
  "key21": "5BDM8hkW2sm5Vo84Y25ps7vrLnWQ9Zx3z3DEck3zhPRu6NhYLUUxS1dmyKLtGtYPLnuUpEyNXXk5ZSkQwKxcKg6N",
  "key22": "5fDcif8Yr1HvMyV57oMU9UWt9Pw8pzq3QQeFMVCyfkwdGVRxhvTjzFgTxbRAsiFH9xSj2L2MtcJzbJWqk5VoGKSy",
  "key23": "2wWrYHNaJ1xyrV7MD6RTBYGyiTWVtpVFtBvciRj6KbtSHQ8Za12ec1rx7t1sNT1Gjxk5VG373xnN61ZYAqdMq1W9",
  "key24": "41bmKYvAHQJsdn2kgRbXDevtsHhjT8563nkDqXhj6hTzoqYdZzfXAMVNu6KSzqcQAk2LJM9RdkudLgxpWpxK2sus",
  "key25": "4HPJsBLG8oo9cmKp85v1Qt6HY6QN3PayTvhkjEWf7kCiCiaLU6VTMdcpumwLFHGoW6C6yg9tCuyH9Lsbt7untemL"
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
