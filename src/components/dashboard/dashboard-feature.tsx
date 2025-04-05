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
    "i38UUArvb8sJkLh8ZL1BBrXRYkygXR3HbLsYK5UeR5zsL1fgayQ6B2eBe65xD9rFyc65PgdpRJULcvmwRv2JorJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWTjiC4N7gja8ntReoeAwzn9WCmL3zU75twuj1Rvqv1YaGTZHrZ6r42mDb36yc9vuwch95uHiNjdLGjTuKu7nVg",
  "key1": "5GgBPiPdh8xC7DaBJBg1yj3ZANxLc6nnTLBM9u1RGGBMVTmkjb6HiPcxGDeLHN4ecR2bZTqPsVzSyzT9EAdpip7J",
  "key2": "23SFMfffiLQTneULPaZtXX3LN79iLjZZbFtMnQs77xf6NeFufSfQpgsDDiLe2xD1JAKDWPMgZqF2k4X3hRBJJGfZ",
  "key3": "48eT1H95owHFYUa5bPMFD6pJiwiZXP9vdHKMXZ23hTMu8CSULt81qKAdvFLo2ysgB1Z389yGLTZbrYN49wos3d1R",
  "key4": "2PnmsH4f1F8g5tTJBM4exZXbqAiwWxTJPoAbJCucowAEioCzcn1xoFkvkTznKexCRRnec59RuLfJYTQhzy6yCdg8",
  "key5": "5Yrf7AJnFNT4ijLwukETRsmpadq2odpHYeUhLsbSs6iNMU9syRct6HndTKXoMJQS9ZXHkmjKADhFtRR6js34k9gN",
  "key6": "2Cu4md8a4RFn64yhcvfEjKNxUVKZqQpzceBX22NsSuJfQn4AvieX3GxS6yTGHc5TEkXPSRxRvonVegV9MgfEU9tL",
  "key7": "2o1wHb8iNTnAgPMoNHyBbWGJ9Hp9SFDEnLHzasYN8cToEiaVJvbLbvEamkGAhPBXxGJW4HCkw8dEK6mVJjtMbxMk",
  "key8": "2Ed7pmQkvN2XGyq3exkFSdqbrVzY5HzhzBkCKAGGoWBGD5uepF6CwxSHZg5DKABJAmtd66tiJEv7Hpm1PxGQ1yi9",
  "key9": "5JNJYf8ExqBRBZPeQSMRGkPx7GG8FZfzKdL8dhTcEJUK2wgUsuo9nib12raPwYiDdfrohM8f3zxCePzCrgYVnQYL",
  "key10": "ZtzHedKoTFedWW215JqyvyLf8DLLnVySixXNsjAUkKZKnE3E9L4xDeTbL5f2LRqswnn3bCWc6NW68iWfZywz1Hd",
  "key11": "2iBpiHNAB2KuKCEhhqwvHGP6zPGfrhWp8KKboH4qDkvUGpa3HnkUYJ8p46J57iVx6YXTruMjWJ8d8MYr6iNMA7QR",
  "key12": "5p4uij6bwgGy4aR1tciTTNx6zkJ55datrRQhwJCu7TFCUQiBT5xmxQNgLjw8AKuU3nFkMZmaMwsEwSLULsd9DwkU",
  "key13": "5nE9Sr91GLNYzJAZobTRGVKxzjN6s9nZfLXqKPqN5wsWrGBicAbFS42brGzEDLixYQAjy9NZy5GWB9G8zKvSXzut",
  "key14": "2And2VwF2Eu4mLf8T4gUHtMMKaKBKZsthEt5qJYSVdD6dVf2cYiWQenJYdDkZRPsWS4UNkpcoyaQgQWV4oKuZNji",
  "key15": "4z1Vo3b6w5TMRMzjrN5iAyqAZeWep7hNzvVtVkaxFRbM4t31ANkGb9pH5RhBoDdb9pbr6LQJT36kpQpHPT6XE1QZ",
  "key16": "38WdVHFkLTBYjFFnVh9wr52nTemTcmKXi8tXz5c4DYcz7dGDvi8zcCVbTrr7hSiAyqnN3H8UfuvZ7bcBLNRW9tqs",
  "key17": "2k7yuuRR5U6TuKrZdVXxVrHFAo6umkvP7B4Hwju8bmQX5L9UpcFAYHKYQZxPJw7Ri1CNNMouzDT8GCzehhwXZQBp",
  "key18": "2Ub9sgWiRwvm68VnFzYQj4BfbuhyHH26QCoi7x1cRTF3JDiBLQdDZRoxbJ8Vfu22Ju8YkstHC47q5br8BcAEEfZA",
  "key19": "2U3ku94ybExbJE5LorB2Spa8EYZKaA4v6ekPAHCeP4qoS2VXpCwBBqJjz29LpBs5TYrkRaWCNvZ9BBwrLDYxHAiJ",
  "key20": "3cBi7QJC2H4TGTCgbj2VNDXEfV7dahCKSiHso46eyqC8osGzTeMuQkAp7Nv1DFinLm2gw21EJxrWyJ2Txozb3gyG",
  "key21": "4Ragwk8fmuU4sr1vmeAFrwKQGgGVkQ8wET6rFpvefhVN1YUUtJgmR1kQn9Hp5MNeHDnLGhCafCmMLv7CzEYf6DZ1",
  "key22": "4y5r1q8ydTF5kkwz28tZHpyZQV1Yi8Tp8TP121mruLwspUa3QfMYvb9ud3cUmfL4QesNheWme1LXioeLyYZXE6b3",
  "key23": "51HMU4BPkFdRgSVV9dM6ktRfZKUY5KerGfsotJiXVwYuusWMCKMNndGmHXozNQ2m3LFveJvxLuofqURzEo8zXcwV",
  "key24": "2BCxxRQ6mKc5tRXsY6aGbcA3Td5hnTaDowr81DZjjy96bapZAqwKzJKCuaUtDaEGsJWwEaYR1gTUYZypjhWLcPi4",
  "key25": "kGMujtuoe1QA8yNvPYw1r9mcyNdDiXUDGT5qiJ171iYPXLNtQrvLMSfgHuZYbWTbriXXdSt77vKgtnXpjrGKjuN",
  "key26": "4Dyp7yMfHZW4xQkmNokiD14PP7Xt1nU4ffkmxkzQjPySPLPy7PBaGgbUo5UK85DU6wZACxgTqbr6BC6X267MEsFo",
  "key27": "2uRDzeCULmrBCpMvYzCTkZEmzPTHGjJZBZaBNSDVrM43xCh7tFNugLYrK9KMasRg1STqA9VNbGpJqB4yFYMPZo62",
  "key28": "AffXzwQLHaJxeqQNGfeCJ7vhkpHPwcyZk3k2JPZWgMu6b29YzCGiMHLmDvMQp5nkiM3QJ3PxuXVsHxkueiBunou",
  "key29": "36LNxUqCe9gjYLXfMtEkMiYhvBW4goSnT7h13jA5Q6dbiuYUWue5dn3y7E8L8HgThjfB1wiUVnSFCGrPmDC25PcM",
  "key30": "5jZqWnR6sU2fGUGa8THjVvafQpf8XgyYUMkjd9VbNFHeXUwMsQ1nCFF78K2E5yyA7hRZZG31P7dcossc3fVzqRkZ",
  "key31": "2cP7c86xfE4XSnKNDEV2LedqWsQjKoWv9DytryQmxAHYC6gMdVbdix5jUcNm5J7dVfHMy82cM3SinVfu929w6eyz",
  "key32": "7mZwParz6r2QwYK9rMWjWzFSVz4V181r3AjiTS7W4Yb5d1VZyp9CMaP5EaguTR4uA62XWzfCiJ9JfuzkaPeNsEM",
  "key33": "5FCG96Ve118diGXY8NcLhEGxpn9DeSy76zJJzdFKB2PK5rKi5q71r6M8hWqE8jXAMLm9D3N66ZV3n8hbdzefotRU"
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
