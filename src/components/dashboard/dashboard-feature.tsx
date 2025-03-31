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
    "2Bf5mXdjUVe8ktLezkXVfzTsK8ZGEMV9fTiY5BaDxvhYcxkaTYswbay1YcLwGPrCTZzraoHyrza6cwL6V2xKnBw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWuGyWe7NjzFNSPNZsdD7np3jVRroXRSCqZHpHyHFUesMvSmTeXFnrHhojegCY3sjsu199yxS9fZXtdYCwgpsSu",
  "key1": "ChWtbPaZsBHdQd2Y4t3oCcKL4KmzVGftSD7i8eAEusbFKUGkDJLQurqSXL2igcuGCoz9dcUwXY3zdQWFBfqYHWu",
  "key2": "5GVxeMU7h8VVcxRR3excgaYKv4TF5yRX8kCFGWEXfQ1yAvPFkiz93xvBSdEoJyVEjWtAyX4xhaFrPNX8tx8d6QuQ",
  "key3": "TQ5RdNiqrTtVfgZUfshkENNe1XKEur9axSahFAhjtHktEk4PDGmbLUnkovhmdVNb6ZMLNfC9HzeLRsvw2JxpdwW",
  "key4": "4M2baf9C3YchRoFdGDsehVygmzFXYFKdU8MvXuFVrWmwm9YRNJkoocqCFPYWo2rQyQKThzHqyS1uVYPYa2qb59vo",
  "key5": "3jkAK3uvVtdotZGb9eiKQYaDBJSB5r7ngPUkXU572rs24j1SDbP7c3hjgUmwz9H1xGZKjWcipc2EiqipKinT5nSz",
  "key6": "4bGGJuCbzguRqn1mRbPB4wRqZ7mz8ag8hAoh4Bji8NQQAvZXkC4k7KsGnYpaArLE5BpmhBR5qheuaRTFVhV5dMoA",
  "key7": "RrCD8q98Covip5cFXtn1nT8StSQhzBy3w1vMk7ihG2yeUuC4jyh7vkJUUzXtqEVrNmiir2RKWzbKcicBxAMJuxZ",
  "key8": "2GcoLpVhVLWLgrux5f6xEjGdc3J6qZMjbPUF5FTVvYZym7TeC6CnjBUsHRGPKS7i3b9fVCJVFeLo833bzkqFyiWQ",
  "key9": "2djEdzipqnDb9nGMsamHL9pKAxGoB3LNG7AaP4P94T1FGBvLZeJhENTAJVpvkShxtw5asE7R6iYt8xGEYVjT7HLJ",
  "key10": "bGCkRakNRyEdAZucXyiz3werxYLg2zSYqggWeA7KsmgQJ8NAaCRjHKuvzjxzWgfv6n1PpST3qy7sLPb1p1qBQho",
  "key11": "5u2XrshBdmAhvnCq9U7QAP4NAirg5yXhdLqDkM98Bugb6iwoTrkCdEdYZWoysMWDqu2Eo1yuxyer44xGyZor1kTU",
  "key12": "4uu3S7qwJeZcB53izmv7rho6zhG1sC1AYnbkFijArBy3nHQRP5HFBm5QPnH4Ybz23b4bcNyinnuDopDLHssQ7jTj",
  "key13": "4zocd7GP8AmFX3giQvWWqYCLi2f3X6QSLBhcikBi62uLAL2NSbzWNHmY6Q6nrx6ZtiZQv3cLFJtLtvzSgKxNyJay",
  "key14": "23qtWKYZkWQ5iq7mxxGKD3bKewTfC6V8MLAo6AoQuPjLU9psN5ouFTdrQh2AMHQ3ydKUi6tKmt8ACyJYmquMSB4y",
  "key15": "hThDc1Ckh44Fo6i1Xjiyou5aKx4estqVnyTV4n9xgJNxiHZFvWy5JLLz6c7n7XY54vaxhUcqZ6mLEm9ePkD4zfn",
  "key16": "4Z48X6bXMzkeGxfwMrV9NPGgaWiW7UXtPDxMGxz2h37cEKp2YYtnyRLwZSx4mFtZ8xNmdVeFvzTEdTnWnfbnbA8C",
  "key17": "4YBcWEJSXiMKaS72yR4jG6ibxaWfP35jAg7KtpHcWgJqb4D4BiHcvw9VFUiffhXdb4PuwxvqvW9YyABq9BAJHQpp",
  "key18": "3JasoR2iV6HsCkSoNqH6WhDGahGWm9BbZzUKNx4T8cSFniLCfWkd3xfPFPpzmMoNQM874Bf3fH8DEBe37KmVDXnX",
  "key19": "5vD69JhX6T8yDqZ9LHcTEpDefpFaWPTzS8Y1bURsH7nNJnh5uRZRvYg8g3LBT3mu9KBDrckjQgcHVZKN7e6r2o7V",
  "key20": "3jwHvdbVPE5FQbtu2DDsywXoLwVyzAgjghGnUKzm1fMcM5KHJUNvVEJMFzX2u4mwfJp2HKHMNowvMLTAMPn67hN9",
  "key21": "31DVhNrmFWVnhgefABhjkdWf9c1VBNA1jykGAnfSjXNyysPSXqWLPDSAZsNEbGJtWHmT2kRZcK97P1jjxNUPa1uc",
  "key22": "rTVfmAvj6MSh88FpL2c8nUk1V7kNf3qdbmDosMabPTuL4rLp48FYvd4WYQLEnt5KzQwH6jBBpvjFmja5zcZWgCX",
  "key23": "6bLBVqDkHPgTyURyi5n8CTCaQkQScHSTK3Jy4Gts7xgLHwUa47FPrnyKfqj4i1CxyBSKBq8UqwB5oPx6hN3KdRk",
  "key24": "3VCwB66y645FZpY5hf42kXanDvUB1mjSj7YDpvBXnNvbHipqjAU19Fej6ZvrCSBPM7bhe2dgA4upjqNwZiNqppnY"
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
