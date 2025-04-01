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
    "2ZuBtfHbZYQVmEvLZU3uy9WLSa7g3Xpi4kCCWGGR6YVni2ssqiXCxJPKAR4huRc6Gf2UDgnERjy1tcE7EwMqWxEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKPxiV4LfyYGFnVp4YdQ8oZLSeQ1GpefCUTV1Vb1UU9ueJCtdhJ4Ym9NVd3KvAFAgXk3YrwmyeGiEhAXoR3geQf",
  "key1": "459vc7rWevurVrYg13ZLSSPWeEbesneYfQCPPqniPZPKYTJaAiCdLG3J53ymqpjGoJ8T6eEg2sDWNEX4xSYsTTPd",
  "key2": "4kK4GFK76iF68vYdeCPe8RmzEBqtXeHQCUq24sQFSVEzE47hBN8pY4hBPoShLNf1tRdAtD16ZmQp7Sunc6NJjisJ",
  "key3": "2UUMraqBUwy5dLhm8bNeEHX7HYqwBoPxhoBSyNoZ2UEodBnTzuNQJMq9hdRjqkXb6CDRDkBBLpb23iJ5hVngsGiF",
  "key4": "n5zH8xFKgsqUafyc6mx88YprpNodudK2JycN7tnMbLufWokHJ9xaSGn58SRJWw46pp2nP89KYZwNKi8QKEuUCQz",
  "key5": "3aVG39HBkkSb8JHLyVude3zqFrGyb7JdK4MUwD9YSUiFZvapHD7hWpkyUZQ9N8fHuhwYaDsNCH7cZCqN1pm28nZz",
  "key6": "39XDC8ZnsX4nJv7JAW1WvLNWL6enNsXbCx8Q62o7qAZQ2C9QMtLVWLs2dP1Q8oG7Rtf1iNWSkWCfR4krJobCgBn2",
  "key7": "3vaiG8yjRGqgYD9nGeKbAssmQWTgcgbvFRoqWqVeRSGHMg7S5Qp3W4knvnqj9AASfRo9JJvqBtn5bnMnmrkUh9Uv",
  "key8": "5DDKWBaXTWknBHQgtuCkWrcttyjRCvLkQ3F2xwy3UEDUaGm3oqj82ZcAetYL9f5Dq3F23uPq3sQkmePtzxETouQL",
  "key9": "5eM77w35aA35PnpNCzmVJJPFrwpNpQrqcmadSqj9L1x4JEvEgp4Z1i4FfCV1jH7Z6sHSkFfF9tD49K75ANdHG9Lw",
  "key10": "3E7j1h4zCWt3aS7U26mr3zpYpYjdzAGcKzLGxqXQAXFiTvUVc7Jv4kcZxpdTFNcRUyQXFujnSwFeUnHnfb6c9Apg",
  "key11": "4j8ZfoyAiDmaJEanFw4iW8Cu9w6YzfwbnmkxkUVj8jiEPqG4rDKfGZ8VB9GJPjKxbMZSW83HeuKsX18xUhxtPD6Y",
  "key12": "2M6RmuivqfKKZrCMjvkZbiCfHBX3UPzSrjB2ADz3Ebc9S54FKLTPRDvoogYaifWp1xDmGK8ypqLgps11VgpdX4o7",
  "key13": "27VqMFwXKiWruJougHovUrf26gvLActts1UVT1PiyFRATBmMvQFYpmEmS3LJJi4HBCVNNimSyUEp2aoEf74juTHs",
  "key14": "2bsNmD5kLi9W1rVLY7ydNu1nmr9ZrbXVTxF3gvedQ4VMY1RdYusT85yz2cwpZZUDHBYksyMGt1hQ2vCWkLeyp7oZ",
  "key15": "fBN4qmPSuG4TumPiUK7xyHygNBsQLTH6pXTNMAqbPPGj5zCr5C5aoRh7i192Y3GucKBbdCSWjZCyfYJxm53KUeW",
  "key16": "4qawKrD5X3NMRf5dn12ZDGfHVUeg11kyg69GPCQ44NqMmdmYNEsRSBpmjUprbygvaEjs12Kzj3v4ecBoe4nnhSc4",
  "key17": "vk3qBkkAwRgNFk6AL3dMUPob3kuxejFrfbRr6ucQaTUSvADmqLXQohV8FB6yQt74zpGVY5Lo2eT3XRCj8s315B4",
  "key18": "gWW6ee7QhBKLnjUhfmP6Le1e8wPd4D9TNCbwUh9NctsuVsuYue3KBKWeYkbu5pt1moXv2jVyugogHWhC8j6QoPx",
  "key19": "291njfqVrr7V45RYMkUtr1D65hzxxfgvvR4jqo48cgvs1iTwWzvtswCn1G8ywpze3sNGGPQT532Z7gTNxruKs5yZ",
  "key20": "2zztzBoqXRevQKVjBC9wviT4eQZAYmBkdfZss6uLTPd5isNRbbuBiMAE2SJmpJHR26GTsHPW7yFTG8ZjcqsXvjEH",
  "key21": "2ZxZLCS8oJSdHjagnnmvYKgUbDbcEvP5jNqaKmPV2iEHCTm2cYbXYZvn1r3T93c5E7KW6mBD1NuNhet2a25DyH6Y",
  "key22": "4eo1LpUBE8ZfoKkW1cJEtnqwnkTR1QemLUtjq7myQhYSCVVQbJPLhxJgdUCbbT6pt1dhvPvq9qK29aR9kKkHvGY3",
  "key23": "3hiJd7PuJw6GGPU7UDnpAXvKkvtnXcpHRKu8TpDPBAPwDMGqD1x1YBxgQqJboC4USc6w9LpWKoDEqxL64Tm5GPLm",
  "key24": "3SBM7LKkY9pN244aC5qB4TTxjYxPVe8UKEuzjRh54c9UeJJaJvJBztkcidfyhb88AZzMMqVt6PaKUQFEN1HRrcXB"
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
