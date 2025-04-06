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
    "EjckN3sicfSZyLWL8kaPMwhU4K1aHe5hP5iFowAtUm9z4JEb6HVj6qJEZcTXHnGRpABKss4ornwcqyGsWuryoKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UosphRtuewGfLN7FTJMwWiz9HVY7Ey1iVUNnqCToN1vChMX3n7TK1FxcTHqmecgSgzwfg7VgUGa8Ux4QgRLyKs",
  "key1": "36T43VYPiAfiJkbW9R339pZF5CzS5DkQPyj7hWLkPdEqmnU7FsdjhMsBQuHGKRRXAq1PeBMiCTb897YqPhujiZks",
  "key2": "2SgY6hncyyJdXvicPJ9hMpdHyPGS2xU9Y3k8KXabAJHWvwSUjSgvSFJ4PESqLXf7Q4gm3Sq12PGkAZGBama9rZGV",
  "key3": "eAFDeJk2YvgnzzQhkKzTvpz5Ya3N6kq2eLg8k4vMqH5XkdhAyJ4vyzAuWr2rxkuq7qTfSLvsa7dYwNFRyoafq25",
  "key4": "2kP8nEHYjt3JqKPEHsQd1kW4SFWYKgZwy33qcpiMRq7p2E7Y6pLRVCe7wiAR8CL6MpqjGi1pgcjEMJ4TjmZAZ57y",
  "key5": "ktLDKVKf6hnWhNnStwWUcXXBzKzdUMiAA8xukdkDWCdBnbFnqam8LsAr3FxKSUaYBc5R1Q34JjCrbF5RL5L19Rr",
  "key6": "5FqfCRhGownfoQR8z5KMEjTNd3yw3JV9V79F73zurpYjn4Lcmk2c4j7tiieobTjjMiKJhKVPJdGK4RWe7iZxn1AE",
  "key7": "4hh34mpB9S8fZq36xDvTJhFkS8kftmtTz8XRSPB9vCkQTN8KzxsJ6RDPur8iggihkt9KrVJwc1bkLAgwj2wsTdXo",
  "key8": "5QR4MUk8RqjNxU2e6GtM8wzTGntZox717GBn3sFUyFCJvxAVHHJ1KsvcyxYHBbB9TWdnZKNf2B1N9tPgWHk1wKXB",
  "key9": "2VrTmEtZdGZ15hwg4ZFNmENAt7vC7otFmU7xnhbAxmCk8LxeqZiBGs3pC2LGCUyH7KV5tRWRzu4ZjgnPSQgDUzM2",
  "key10": "4tRFC6PDWRqzHFufji4e9orYGYHS2i7kZ63oA79zKT8QsTGZbDn4ZisLfyv1DQGNf9UoAWnMHm6ZQ69g9XgRBCwi",
  "key11": "5LVQrntFXi8MdbBT1UZNuYygFxENhLpRKYAb82mqNDZta3RS4qYhs4tUgVCqLhoMNG6NDWjBrPD1Sc1cnCUGgFBe",
  "key12": "4L24NhoEChoaqvaYZ889fDrmmAmo4zTkUr9vB1L6Wm7AW64Nxzr7AuUE9B2ykaqh9DL2LfddzkS2yvxiZUgEtXQc",
  "key13": "2A1NYX4eHxbjS2CM9TqYHZCHjuEzP4TVRiJEwP7LvLtZekwKsjcQoopcBR6oufhY5d73GuDrBEeMniQUY1FwiJE8",
  "key14": "24qksr2QDbP7byVjhC7aWZvan18Zi6DuJE2vEyssAaeu2Lj2itDBXPnBhD8vQFm95MygZRRJ8LE6fty9ZEbWjpKN",
  "key15": "SefTapzLQH1QUzFrdnSEEtt49fuCsdmWXTqFYCg6CgyymJJ2YEGSXQiHnLc9P8xsRSJ3SJEWBgJ3fVqBcxsSvrY",
  "key16": "3zGSXUjRvWEsU4mFcYZg7cC8D4juJCRTX41TqQD2L3Z81Pdv5bJWhhNHjK7d9RkYMr5APmv1xbghjFiK4z1u3Gvk",
  "key17": "2KaMnBPSNejhujuhhCE7DN3rCSGrtFjUcXGH9W6g1wUYd7sEH2pRzhvPrMmh6JA1uxe48PstiUcENEGdjHV7uA36",
  "key18": "3Wgg8wixUd41CUBkUZNm8C2S4nsJKkT9F3bNqbWTCh85Eur4Hn56z3jrAQ9364sxUwJuUT5Ay9DjEAiWL6jandi6",
  "key19": "3U1fWS8SXMBr4QXfqsfcGxo8pbH17k8LJ6DW3trw1uv25Y4x2SoTYwHqBzvRZ5yJFYF4dZFwp7U964U3hPcp4dkG",
  "key20": "5QQ77ixR8jdrmWGfcTXGv4HQTCbTEPvEsRuoJJ7XPqK19ZytNWRub8mkR8T22SQGgtR8aqwZb8nkNHFCChFXUPLL",
  "key21": "4u7Z7B4w1QxUeEQ4a1JqxcJ3HKedk8TVdhMSqvyWJbg8x5BQunjyZMBLEhVFwGsHKrYPwZYpKwZ2JukWCnX2EofA",
  "key22": "3r3MVUKHkoqGWQcbBD63d6EhTRhSPjepR87sCNSKMc87eddxdL7dcduGwRLYumRsmnXQxq597ZHTg8anVE9ffVAb",
  "key23": "4nvuv1HkvJNPLnNPZiRYt1PKtyBDnpLoemf2Qj5ij6hCpdeWci6xLmFyMA225SQT1MbSh8sS46Uj7iGoKG7NZJQs",
  "key24": "4mSm7EN62ZpVzwWKBpmW8iAAXcXAE54ngd5rJvVmNxYftWuddrb5uNn5AUu5nRjoWjqvnYGe2wE9D5yKDusVXpJr",
  "key25": "5yJttZTp2gAyBSqYnisayNFWerYKRbDs8fDGcf47uNToY68NU8YGJXGabmcc7iQab9gnRswi5xkB5MpDguz74g8o",
  "key26": "5oPbkDtpFhxrgi744qa5UkYchj7G47V2J8qtPYDRBJaS5geJDMfPbzTPUrA5bdjPgUU6A9it3vVsUfyRaHaAU2sF",
  "key27": "4kwXWFDrsBYaKGnZB7GaC16oMQhoGjUnUj3Rb9F8hXcoKQEka93t9GyCxSWGEBTWuqFNVGk426tnKPNfh9SUBWFB",
  "key28": "5zGwfVzrhkvsADg5ZY6dvQRKRMWpkfLTWG9BEYY2hv7fwcyVxqdUVebp2AHWFWVpeLdgyjR2ePLLetszVk4W2eqW",
  "key29": "Bm3mnTAWqZvubaMYfDXwkmHxBU2mYEMVhFX4v913KZ8CV6sxQZgdEoPEiMZqH6qX5XxAfVnfDjmw8q7takicqjK",
  "key30": "3265u1qeTUKAHP9GEukY2hhQo2SToffdCKsgiyTUzQp1uEvouwFoCoihT6e6sCNe9gMHc6RbgGgkEmd2YHpheVnS"
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
