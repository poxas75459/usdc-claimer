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
    "w4Ju1o4sQNYoyj5rgbu7zwbd7nDacSPdjmJaRcNrWGu7QUuiZYGAeDCMETCMNaoHZgwkwtcVA7kFx2ziv9MYKhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ue2jNLpvkkYjNuJv6XsNs2r6kvh9Q7T4rYmaCdoJMww93yUNY1GSpEL9FvDyuUpoepExxWU7FHizPNVzpRMRPH4",
  "key1": "3THEqL9QbW9DcDG9oKFHyb4fV3MRDhS2aA1MSTZRcutdatctpJ957R4b6SXgwr9dnXEoJCmfRV7iLWhT6nski17g",
  "key2": "5rrt9zzJ7rCx8ANmAvZUginiL2KuS9nPGkxciZAaPar5Mp4RXynrRhVRpE9tWTW9WG1eB9WKWRGkKsMK2nDGJVmA",
  "key3": "3icaRDKvp9QTqMFveHtojyqiMqwtnypcg5dZUJniu16EqRAH5yheijf29qxkXoWW2EpxZr7eeBXmtPdKYQrNSRiT",
  "key4": "6KeFbyRgvFy7GJbnAfRTqA7z1U6tR2eL7txHxY49q5P6WfVBQyyRvgsFak59UeRVpvv4y6Qt57Lha6kSma8r1eV",
  "key5": "5YQBHd2A995wDPo37Bu3szh1aZh6eCSgVYdpMbuVbMgxyauPN4QxG1Au95QpMi7qgnLn4qS1G2SKmuefKrfU8MPn",
  "key6": "2EywTcik89nqPGJMhmeRSS5xCm5pBFu6199JtM77775sUW65znoGNSzx7X8vSCP58tTrtTgwpC6dta9vupKF7Dgt",
  "key7": "4H6ee18868p6LUjSf1HZJpKWGBmvU5FEVAzMAEaGWtbs77ig3n8D25WPGFrWLQyUabX8DD3ksBfDxpXysB8e8tE8",
  "key8": "33u2JSsq6bGZz5PNWiWVyB3LX6D8S4ic9fZw4KZeUU8RYuRw9bNHekgbgwD1ggB1NbY2RzVdYJyjWwetDtG8DmKY",
  "key9": "5U6vvoiTuwBETUFJV9W9ST1ZPucjf71tUijt6bkPfAfMe3KJLdBfpjBVAZJjnjJxur2MAza4tr4aBHudWnNjBTKP",
  "key10": "46qh1Dfa5s7HLA9uWKpNaNBVskWdkJLh1TF7szwvF6WsZQngZtSdXU4Ukp1ho3AXo6qk7oRV1pLzWjEmaBHMSayh",
  "key11": "3ZZc8F1NQxrn4Y8UYkQF1o4bGQXKpS7bNbf18rez2jhfDGVVwAda9vZsTQU7xMVToTsskywTNcz3qdzjVaC9WJ7i",
  "key12": "zxfkWyGVmCoQJvcrHXAuEpk4SbH5oeTrwnfs6uSDCVsduhqnnSVqKuxuiwBxR7CJzD96UPzkCr5CLp64S7eisBX",
  "key13": "2uX6tDKhwg3Z7eDVSfMWviGr8psC12YoYHF5qkTjB8ZoH8KX61vsNFnwUMQGGHUsThVstkvhsAKBcHqZLEXTKShw",
  "key14": "3HkUhTWrtWtYkVu4jN3JG2PuujAaYVswZMFqfCZ7Js9dHvfaZuRvqZFrygV3Zk6kVpPQTyHmDEtvnv4ARj69RFVD",
  "key15": "5t4Fm8YMVuwu4XvquMXfo4jpdRp2gDM1265pueFEN8gvvuGkUJvah4b9FBxAA4GUpTUZwoM6LFbiFxy4KGG7Y48h",
  "key16": "3eAuaZTqBzavbrCSzUgSDc7Wy6Deo5JWY2i567bMPppaXsvbUVetE94DpEA8qodT45A4cX1vbh6qDHDKXrSyeAsR",
  "key17": "3JfBKf7huFkjYpFTqcqhhjxzUywCAqHGJ1kjVbSrLPPPf7fMKgh9gXA1TasXKGiiZA9483yxSUWzrzUmyz9Kjx9K",
  "key18": "5pKRquZWuoHFsBD8RMMUoxFQWKh3mw7sA2GswXwwwWtwzYNnERroruqg2aFinNouMi6WZggtjMoNpB6XQeXqP9LA",
  "key19": "2v4dP2tWLGPYM4TatPwx1RgdqPTa6VQU31P4uczkjCALJabYwesccMTxdDbuf11fmJCuexZnT5oHoR4vu7hxYsFW",
  "key20": "4HDtGuDsiEQ22MuPLvvcSQGzt2m8MoNyG4MFQiP6DvZy6Zd72ZAjEmUNcKmcFFQTSphULmETv2xJssUZyGhysLe5",
  "key21": "123FKJJYGcW4crvFDYQZhB5MuwpCigFXJFc4cxdWQtikJdotwHf7fxkdWz1EKqdfnagjSCRQzMJkZX8cK92mENSY",
  "key22": "5BsP7WPxtEPeGYUAWTSnbMhtUtgR471Ufeu59iyDCupJYiAo1BdL3EayEbE5Xze1Su8UvrhH7xHvvrjnbYz7msSW",
  "key23": "4qYGmZJCTyXZT4dtuMD49DpAAKDkResvjEAenBZfegZTLb2qaUFG2jXkqfXmru6bkffGK21nWAaxGrDCE9TrtjBz",
  "key24": "26EidvUd7zhhTdcaqueKWNgKJ54EEAtrYuP3iDa9mGNvyfWABQT6NqxXH8s7F25qEBHbV3qLAR7oVq1kjeXuMxyc",
  "key25": "3VtVyJa9aP6fJWCxDU4Zc9CCH88ZopoAt9QiVrWqw3HgnTGxHeoEKrgviBNfeLjdwFHFT6TqcCDsG3JvUS74o7KJ",
  "key26": "3wabvok6M8kkSzTbQ5WB56uLUnD9w5NbJDtq6aQD11hs3bSyWbBXnQXdUGoeBwC4qUHRccBFraithfo1xFXCoCsZ",
  "key27": "2xv5C5UAabPX8VSv4VpLQCeH8GdJ3CGrV76vfyYRytfoQFbwKrMLRm9V3wtj3cTfQ8rzyY4nA2sgauGYZNsNrnwR",
  "key28": "5sSQFk7kYc2CHTGVpdJmi4JmRuv9bZQQ249L6zW1NbsvDSL2BfRZv7nQBYSbWuL2hRbUkNu4NNTe8dUtE7sm4hYB",
  "key29": "XjkdatvwupmmqsSMKV6Hqa3S9sN9GuYhV37Eb2W2pkfSiiuLzLVo5GgBQoBgJuvFEjhuBVW6dSYvF9pE8h54fi8"
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
