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
    "2SxyEeh9LWjJiQpCQYwcywGXhRWjkxvN9R5MJVdbZVWjtG3pcSfXupoUrSGRngjq4v2oM6yJyNpM3Nm68QHC5QFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WF1iXGnh9P6zc5oLhq6Jsgir8KD5EV9KaSHmCxMYAodFHfdR79MYimsiQipKnn6YtXpsvNrdkP4ERH5iekhWbpW",
  "key1": "5qC7DjfEgCSbdTWfKfuSY9qWwCMdx6dE8HiTLuV9APidsAj7d594tR5fJQqVdNDazaktQsBp8XFMbhJLtj3N5ec1",
  "key2": "229vnzQpSdeGNvFpiZmRJodAbxBijtgdXUNKHmZdJr27vQunNrAU3Ggjxh59ofhGGj8a8SoJnAcGmUXRiSWcxcDm",
  "key3": "2up6jqzXaA25PqbN25L8q9MEpZFshJy2eG3572RmoW1QBDPCRc9HYGNgKHcLeR6LhvKGpafxyjtgSX1AZ2ZwY7zM",
  "key4": "2WdbfHCJTQ2xrntvLvaK9Jn6F1sjFf7PtAQFDPxUAs1ReEnCbCcrn9wJFS5M5rSkqgwtNKsM4Emj5NCKdtMTA2QK",
  "key5": "2z3DW611ZMEsDk1EJoFiP1em8enhQd4MNCUracxb5QTbZiY7XKYnshjMzWsarPNMUG35aYpzw5GJ3hQdFayyo5nu",
  "key6": "yvWwUCTL8bJX3PJnQKF2oinsVxsRYuN4SvY2TAfekNe8tRqUwuyVdJZQbPDjo5dnphLUaVN9RVAHYJEjfGdGT31",
  "key7": "438aeKgKW2Ya9UHHW5VrLapWDShffV92U6TQsewe4eooYAhqyvinYVP94749qujfh6TYALA4NFdkSNT4jdQ5F4Sd",
  "key8": "24XafjyNqs16Dzjd95qaEJKTpsDH9wHmY35Zc9muTgqtR8GCvdGZg12kqwzuyqx7RhcSmc5pYaWorXUmWrwM1wkr",
  "key9": "2EexXHtPUs3miEFwdw6PeoBm6qPhTF9LZCKHALB7gatCZvZX1w9YJr66C1qfBUZ5WEzCS3PVePdmXLdK745d68bL",
  "key10": "3HFF8DtF36etpWUeQREE3LQBk1h7p25p7bfdk6rtUkM7Qv6PGXrwDXZbmNWdCAAp9De6XqRBwfG5wE3yh3Gv6wnR",
  "key11": "45GUe5ay1XSNdHNC44EWHoV4QxWjtMAyXzFY1hTEk9Mhwxu3v5dpa2rxrShjWc8nSrz6dyUntb8yJahUQNbPa1DL",
  "key12": "66zAVFr6U6RXUa44pzQWLZs3Q7X3eRe4nr2zHXiAbAercDpqRkHiKSwn1b4X85cbdN3rjQDv58YrSVNqkpRDgtei",
  "key13": "536HQNngTn5es74iJZzvZJVMWuzAuD8ZSYTr22RxMEoVq8A3GJjbGLMWgdVXfR5LP4N4z6Nrynb44vLBY2mxwdYH",
  "key14": "GFMkLkdDKnqgF9ey6g84i1imiMZ63xJRDjxPKWoBUCvsTotMVLJtjXLwSyrfTur11m5vGo5z23BK6NzRDhdK69F",
  "key15": "B5EecuffCxM2JU7UzP9X4htwjj6Z84umDpQzTLoqiuq76rpesFNRyK4oE2hDV15bLRiA8Pg46tffRkUym5JBkvh",
  "key16": "2XG8wPpBeTBbiXnJKRqee6xCCBGSbFgiLNGWBX1emeq8rCXZCn9GnFKZUx1isnL44JSL6Z1C6CjyYjzrLPSritSi",
  "key17": "626LukWHykhEiirzTZ122yaCRefoRejmPfycRgSPdQfV7FzWBsBDvyTnBiJQtNxtgb8HzBn3e4SoyFwG2tmuup2r",
  "key18": "5bABtxsskBuYoAX1Uo5CzDhoi8DgNAzWgymvkabEwF1HWgemEXZB6oWbyTjdeMAi5Gp2n6zL4WCU5Xxpw8J4xLsU",
  "key19": "2MBNGfaU5Zu5ikSDmvGRVoPRyM5AeFmdasToQqi2zBYndYdrgs3Ba7ymR4aqvf1YKaB8KNME3Z37LH6RybcNjevd",
  "key20": "YfLiiwc9vhiaamjhzRKzi7xv1jkjLWM15nnjSwcqoRm39WzJ6eqAsYrMkshkjTRSLT5WfhRXa2XoaQ4GdUA9WuA",
  "key21": "5xG6wVAfokDbh7AYbyYiRTqNxqQoREPeZqWrBuWArJdyVigRutZ8NAqfNajvKQwEu6GxSEFoY62oSbinTZgm4gRZ",
  "key22": "4kHoGyCLn51X7jKicGWx77AQKXFgNce8MeA7cfH5HJgBTfu3NzWBKuT5Q2D23ArxWAFWNCCbrdA18cwARz46vJSt",
  "key23": "Ye4TaWmZGzfdf81KMdZHSNn3QiZKFqNLRZauL85WGKdzBo7Se8zC17G1hHBAoXtiVBHTXErKN9FqVyuJUqfjTkq",
  "key24": "3K4vesL2zRTwxaoKCMnwGYrXKeLLhyVKpnZh29KHX7sstPJiwGsLPwvauzQFjwRnZzzAdUXFddgHJNJ3JQEYBiup"
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
