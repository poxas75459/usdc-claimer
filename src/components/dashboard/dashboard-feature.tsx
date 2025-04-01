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
    "EEHyLknWMGGWYthUfHg3AU4Pzn4mWmDxYFfXdZWzHyhrmaBKBzANUD4mTGjeMX49vZ6Qn6Y3MNcYfzzgz7epRfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4bXqA79ByqCDFBxgT28Z7BQ7GDHVFzaBLjd64KP2LTCaKpp4Mca9hELWFZ86PCzBU3SVu3Zqz1ZCLRU1NqFTpb",
  "key1": "3vgm9g9ams92rBEKAJf2N66amJHUsj43RchkZa5fPxrGWsNGvDaCa1xSUnFwcLSocubLhXxcBoD3jLXfHDkFAcLj",
  "key2": "s3e7jjSRGxvQanzGED2KYgMpfTj1e9RdbHt3m6hwyGWYtk9VKM8gMVNhNUeXTA58vNBpEQeTZS9gQuepxhR3k55",
  "key3": "58t3bRBnV3AuUANxBZd6go6DFwUzfahAca1yyrqvuZeG8DRNF92NiokEMiM3fHUQ3cooaEpvzbvMReQDHFREBonN",
  "key4": "65VhJNui8BxTYLEDghHsSK52eXHjSqE3RL2NX1PDsMhVLyckxvjfSHofTdbU8vhamdu8BDE18XcsggY7d3ELhDr3",
  "key5": "5g2snaDaRFuf7t3pV1zb4RfdYwxEYFHE9L3TU8TG4Up9VtiiEwBTTqDHeTzV5u7eNtDm9y9RoG9XFQzePK6BnaEp",
  "key6": "2NxHmCNJJuM9nx3357rzn1ZfKw6KYEiXqsKHdeF26BjuKskPdbgxSWGy3ECwX8cP1CGDUsDQUqx4WRsdFTA1v3mz",
  "key7": "2buJ1cYeYV69iWY6NzMgFEVqvV6SDGKDjFgkwFn3E4gJ8WfUjrDtvTCqTfdweUD5C6EUHsJdbTrwAh6gezCVM2nT",
  "key8": "5rKG4qgWzpL6DcoBfKobuHfqCeexAQPBSPRr41D8RuopFBVdkkysdQoHWMeRa2LmAYB1QRLAibsVMVVMDGreEiA6",
  "key9": "5bSivZrKWg9nDintBbCpXQF7tT6W164ZxU7wzrXjE5gpeMhMy3z9garCWLH3XTubGoANfCcKuibJhGKKfpvMagRd",
  "key10": "uoyVUmw1FSRrUkJGLb4eqcDXA2GBC9cvvnnumtLcxSqKpBDqRWwcXUcFLTdKzBepQsmDboQpX9hke1cNk29Fcdn",
  "key11": "hdEraLbsc7AztZBX91MdckECPNKVk9AN6xEkXMH6tPi9kMEy2Z1XyX9ccwgn7uCtwknW5zus2FNceF4xVWbGboz",
  "key12": "3ZEJxir3Mcg3D5E8Fh4Ry4b2NLUzM8oGZcgbYspvXbbtCY1CxKs8XK8onPAvxFw9FBFuA1fBgN4AujeqDAYUQDhC",
  "key13": "2oZAeykRsPoX3XRaaj2tWh2Ku7H56FKawrp8c6Bp2gPY78xvYfjrcj6Ua73xE25uctQ2oZz87jCE4VyoEVTE4CRp",
  "key14": "5Lf6b7grtsn4K6CsjxfhSw4jdqvH6YX7kjNnQwsTMXXxrFt5g9P5wDukswZaahy9oNBVgNkbE68a5cP4MGNMhQer",
  "key15": "2oNubZifS9t9R7EY3eck4j4rxs4dAqeqCMMr4pYMaohrapFYFHnYFeWnc6TrEdUVjj5hkxXkGyB9KATbLyCrZeTZ",
  "key16": "5QZCgNsgdeYihJPQk3hggcCA2Zh2whpGgWFcXB1WNyLQK9xELYVzXyfoSA9o6ovkaGwGAocWubcAWXqAWxBPQ3NQ",
  "key17": "4MWgkKMB8TqCaMbRs2fMxjubPNZv5NqiqNUsK8QhieaZmjQhrZM8ytcGG8bKo3t8FaBqTMifDfNFqy4Chk8TzCD",
  "key18": "58upsaW4frrcjmnqUQUzX23tDSEoDk2hD3Dp53pNtsYJpDEekqBGLrF59u67fNQv3Ym8FRHZUDznnG8zAtAsXDMw",
  "key19": "5oqxF5fHLXTczp8GCDTck2NwcEW1C5HkE8g3F9KA9mfWHdH5WtQqZFPDmQYvwoQcXzKiSzTzmw6gK9jJ318HQ7qT",
  "key20": "3ZBxw3427WWLDu3N8oA589YoTedzAV8cc26b5khcFy1ENiSoYpu2Dr4uzuoCeiLn6vASuq2D52V6BthRHCtWDzQG",
  "key21": "hpTSpCrufA61bX58jFn84m1SkSW5sHbxbnzqxnzgFMNdRQEwjNLpLtXHoK2VZ5pQrQK5FT6s5S1eHdpNYjarfK5",
  "key22": "4hC2CbUDiTdPTrNQ7ao9nEGNNUkUvPfPgRy4idWTze9fmw3GipLGoby4Guk8Q6VASNoT6Q1AfCbUf4JZSNgnVAUj",
  "key23": "es2HF5QUQGf5JmGLNcUpUdM3SWkJpfjYnk219q9ydPN1EwECtj8Fr8VhJfM9YwyBxd9VxazG1LT3EVyMANSqLSd",
  "key24": "5T97Dbd7GYLm96bDF9q2ii7kKt9dchxHcwAeXx5au7u1Vycs2XitS93NFnUcUM7yR3MiBqbdSTzCHVuhMTKHfr5k",
  "key25": "4GmWU9KMmQuL3KdANKghnEhQLMr9shqJAjBnuYqCiRJojByuqc9UMHiW9bb7kfmsiNh81ekrKUj3R2ZKDje1hhRv"
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
