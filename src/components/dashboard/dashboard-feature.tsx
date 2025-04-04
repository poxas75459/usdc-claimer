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
    "5ys7FUAwyn8e3Syb98EDqRMqCCqKAKkzpubkZtFWNAy8WhrLeReVPWpnoMjp9sc5faXonK788u3922uGoHbkPVX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZAN7K37wBWKvghHcyXwhYijdquMRKcf2CNmKNGjywRUdDVJyCmHXTa5eY8xBRJtEM1zfhcHDmYPZpE6ZdUmAYY",
  "key1": "5jehe3kEnr9eJsPDVHeBYcNKZb5UgGsJARpWnjoJBbcWd6zWrm4aWify6CrVAaYmEvmoMjfm9SN9DQJ3HCAKjBLf",
  "key2": "5ozhd5UgZe5vcmZd6FZvQ3zNQTbpY8wiHS5iuSW8zE5Q4Yg9mdfjjntjSydJGQxSxEo98DaGU7yDbFNHJoqwiG1h",
  "key3": "5Guh7wRLPiuFq98xpMHby8hJReqw6zNZ2JdZnDA37RdCkjaJcMxEQ1NmLFLFoJNJNya19bwMAVLXGnbj8T4LRrC9",
  "key4": "5a4zKvkZ3CKvpiCd24QygR1k96E8d69geYAss3HnwzwAKY7oVzzHEAsYzkoSmVatdqcTynKKLa6gBR18QJ4tjqK9",
  "key5": "TW1Cs4vCVf2uJzsDatc6GfuaLfzcKdWRrwVVHCnw1MV8R2ikWZgfSyrvZ6pfGdJczLSqi2DUAWgcAK7UF6Z5STo",
  "key6": "4yU5bjnAXe1VibUtMSvqAJFkKTWpC7j3yeok942V8vgtrTX6GqbdZB9ozMZdncwMrYutNkn3ceAqnD7nyx9uXmuZ",
  "key7": "4thfztxsMSUG4wQmNGgbzREiv1hZDqtSVcnsPdkX91uLnstZG4x3cpiHRdJuG4L3YfPfJdyKonGnunxKYgsz2xkj",
  "key8": "54XypcgtRnhwCEnFgngGrTS4v7rYY7mRjDxjquVgHhW27u1ooKmB3owWpDwJypdgaawsYqY6tgBYTPXxjjMxkXbG",
  "key9": "5xnuJwG11moN2iPNgLy9fpZpBRi81NES4Y3hDV7YGkeZeeCS347BZcWqpGyGeuHdgvNnymQqAABBufmtuWEErvAJ",
  "key10": "23fuUQLB1a7E92mfVoup9TT63GkMh4Fk7xcuhsjZzwkGuV1KvWCQh9FjLT4GtfpwqME2QjTxxnNugRyn4x3ossP3",
  "key11": "35QLMxHU2S23buxc6UYHppSD1J6zDZyv1JtNKQSKHtvZuQLSrnpnE3yek6XW94HGQGxp1E1UDcEW5YjJhrdaV3pv",
  "key12": "3reJhFAQPwRALvXA2dLfMjezQNstTe2zkh65ajdFRVdvqD97fAzAxMHG7oec1W1sLj6hUDms63254ikT63iofjmP",
  "key13": "3rExBAcCxUv7hprNvz5HTbBdzpT1Dhw29bxz5XcRkMRCWVLpY2nVzuJN4dPRgZn1Wr1GeRwmb3ECADmYE17UenTv",
  "key14": "49WSYT2X6WWRc17Kx6KmrbBUs2SzuqLvRZ43bANh2mVtmfy8TSoH27UveXKNxArBnxh99SpmgaWoeCRMKBmxsE84",
  "key15": "q7Njt5tW7toSQ1WNW5Y2RadAB76oh17btcKAgBjppZFVu6H3MwZJSAAR9dU7nUSWUz4bxHD7ymx4bN4xGx6YVVQ",
  "key16": "5Efas5jkJju6LQjqYWLpgoD6mbX8ShiFzQqxvShZQKkTRtmvA2FZoyHkdv1NYM7x2EAnTNKNx8eu6tXgNQNfzeQ1",
  "key17": "5eZUBFGWS8GfKjR8cVJqJF8vCdaRpdckbv4RiAtBJozdw99LrpusxNi3NGHM46xJ7Djs16ZqQ413cu1Npr2AN3LJ",
  "key18": "5zXLAmaoe2jr8N36j4CP4fG7c4bsRd24ZkqmrTzC28zXgoCGNeNzobriikRWCsGnc1tw4TcWnpnJs1ypfpk4xZdr",
  "key19": "2aKJqwkqU1LP5JKYp2FoMEASdXXzGyYiSmNQVVU4biFg2SPLxxMgGvwqH4TP1A3udjKEXC5K7DE5YLmCyMU3H8nk",
  "key20": "3NwUADPpiFU7W4WLdH5gdjLaZUVoVoSpFkEaVvYgDb5gQi4h3QZf1DFXVuNe9VQBaYDAiYCwqWYwAF1PU6Fwfksu",
  "key21": "3DQBEuVN9PAdnQ8KwWV3WNKuCt5jyus8Bi1YgyiVpVv4FT44YZgHVk6oSgvnrb9FjB7g986h6Cp7WKxnbNAcTyMe",
  "key22": "WEq9RtHW3nt2bKGHahWUx1mxRa342YsvTL7p7THD3zg2sEqYJhhFsuYqhZn9PyB4KRWpP88twoWKr4Pb4jXkLyS",
  "key23": "62F5V45cHNwqqb3v3MKGu3MuHTpUBcJHsaYkRgrQYLutDU1Bbfdv4oxW4GsNVS8ebzWvhHWfjQjzbUQHfTamhcMG",
  "key24": "2qtVBsssPBRMWXKtnk1z2faVn7ddv75XdomfrFGaVwLvj8hdUhii6wpCPsRiAdnpkHmos3dWMjxbcTnwg5Kk6jQc",
  "key25": "41BPGtmPYPBdV6vA9YdPaHSKEpZGSz8jZPEqVaNQALmKe32eHGxuijBEivFiprJA8bKa22BY7eCXNT2SqUDkSmry",
  "key26": "4Trj4D5J8CrDWSD1S33unN4vs9tKaS1wdzcafj75zsr4aMcxvcbKZvzLa43CnLhB7aNfKDBTx9P1pMc4Z5WxcyK7",
  "key27": "5VYobSKEccp9hx3NTjee7T8vX7k6nc1qbTgv28qe7UhP3ufU6baJ4Gg47rFZR7gx3moGVxc8zV4DX1DcpYd98bBn",
  "key28": "3Psvs5BpCPbGUUmWH7wTJN5SVhk4v9qz7tXWpTbQetj8YXpbFZTEmTrQcngDQWbrK38d4bbEGS1QwZMnSz2Fp6ri",
  "key29": "2vE1Y11EHLJRfyCBssDF33g3TzSXCn6VUprvsbP5nfiMhQNy4GLfW89swX1DM9EhR2fphrpk5b28rjUsGn2Z8VS7",
  "key30": "2t2AXWDh42tAV2mK5g39U49KE8HLLZM7uXkwRUH7JreGtLtvaBzGRD6sbDuLGoegZ2KDMVL2bwFdxxEUW2Rpxg4H",
  "key31": "4aGgKBKGRVNoxqNCxqLA8SJHcY4bktNReqpKyA7EcgriMdunYSnX1t72C3MoqQZog57UVWm4ngsceTCvBiD7Diw6",
  "key32": "2zHZSWUN4zX37GpMTA3vgQumvS3SYywhJVUkHUwCTxkRqTk3bzCB7hZYrYv4aqaMHZx8V41XEGFNhugNYUucuyNx",
  "key33": "5iDV6Bx7GYJtZPiby4cvSq1tCub6tg3js6XroDgnx5uqT8Tzn6sbcgXVjd9WVV7Vy2eWAHx7YUQDCP7zm69xGhLp"
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
