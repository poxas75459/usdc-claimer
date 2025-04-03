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
    "4dyK3TF2ZNGdiBae3FftRbJR9y1EkRvp73fMJUAMLzP6iqu4D6qEm8TXsX5JLFVQvkG4nvdTLo9wLyXYKXeUnTrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TFeSG2a2Ueyie2SM1i3xMsbcrCSBxGYMe2ZBMFvqDyhuqDv9trDc8w7KStdYy3Nzz8V9Tvonz635CPcakfHFFPn",
  "key1": "3ANojodTjfX2c1UKLsMm1EqnpnY3umKjkjGT47Zj6isG9jkXugBsEbfWhBHwa7tKYskPQt1vT9rjAtPrkVL3oaEb",
  "key2": "g8zZ7aEpBXG8q9J8MHjLy4sVqisJBc8MjFN6jGijPzcXKG18dKmqgmPYWozetk861rfmsATm4XGdDZLE2W9HfH3",
  "key3": "3Y71fukAetCpjpwme5T683ZWEs5HxeZ1SGzGgmKkUFTJWudYhUJh7o9ToJ1n4qb6Hua2HqhCP7Cb2FwMuH5CphkX",
  "key4": "5BZrKXoAq3uktgma7s9cmX3jR4jxLxqWgtVDmxrJoWXzRKdvZLBsTYVXoVDGki6yQc6GKdBVJX72RGVxwuBUytMN",
  "key5": "2ruGKj8AzvUsXmCkLa5vofUiE2PaFySt4wrDS1hg4gYWHrJpUhzRYg2FEVWE14cfHJY8wMhj9hUox6hDpEa9cUJ8",
  "key6": "qFAqszm1TnbtodwNAtQsmVDg7d2MMhUFA8TBBtb4Asu6oWZ7wcmxVbrkd85S14Ns2pkszpkd6xUpM4UjVfeE6Fd",
  "key7": "63nBQYCbgxAwN4Pt29F8AzMRoLoHeX6fqErhKNfyS3k4XkDvsccgX1pnBX7HK8V4VvbTBS3Cj5YMcj139Q3KC8SP",
  "key8": "4s8SiCGKrE2qYn9kUzZ7Pfike4Vgx4wLVxzGBBXcVfPdyJgohm8K3jhm8EKdpnTHbMZ4FxjqudDKVbDB1vLE69w8",
  "key9": "y4NzkZVHNUFrsBww2x9ZxGz2wZK6UsYVeLTijNbv6MJzagDYBgSM4V9s54FZXqYuC8XcnhhhEwx4UzekDiyFqnB",
  "key10": "4mgRndK4uGfEXZCFKrM6D8ie7jqepkWqBj8L9R6fmDq43UQ3b7ZVMPvoUXy6CzSPqxiNaSuCa8j9s62CM5NXARzX",
  "key11": "5zvnVJxyNuqKJamYua3vKEVQQLNwzdNXQk8GjRSe5DRoi4Tr9EpwmBqRToS3Mfjwtz2kz4ZBnnx7jHtVEHsNtLh2",
  "key12": "3fpeueNTDZhAmnE51KwvUGrVpC94C4LiWQvbR5Zj8Ekw7GU81wVzkucUgEUp7FcheDVNMpKpJVqJhELuLCr3Cnf",
  "key13": "3q6fVZmGMsUpL24FXA3eH8uoiFuwJtm4QUpGJ1CKzB6xsFj7e99GJaNifC5qi6xDdaGGDVLZfBkzVcc3prxekyAj",
  "key14": "dQHuNpeAju74KkAosjrpwpDyWFu1yTyRiFLdHmi9oyT9wrDa8T9yNpM8o1d4HzPykP4BNw1nZBoAmdn9RwYPQMb",
  "key15": "5cy2HGKj1PSjt4z6JMoL14EdxpgLB9vgQYQKWmCtB1ZfqKXKf4ZtYe4CvhWc67KBd9ACJpJddBDW7ZDKruR8FRzn",
  "key16": "2HkzDEjrEemeLaWFfwKwbqnmP2abNHpsGM4hhHUGrUboxxB8PLCzzibAQ8KW3LXRkBVEM5Ymr5aLU2danKCGPYA7",
  "key17": "2kStGfc6PB4u5R3SQKsvV7cf5WDa4x6UCcDWqWz7N1R9TvMRQgKmfMnr39LZsPVnw94Rqe2TKA3DRLerVt7hhpbo",
  "key18": "5oxdRc1FjaXgA88afr5KVpHxbyoZKWDxdZC5n2XviHdbuP8TTntbkp9pehtqffWD8rNz3QXW2DmTw45vVPh2yb1u",
  "key19": "4iCq2cPoaLaRTD2TTthRXQEKz32BGcM3HC5zeyBXcqEcrm4baUTfEHqyPkBfgFaK6iSZkkYnWFLRXcjQFeNNCtTs",
  "key20": "9vbhgELTbW29g3S7ugqmHkUqLfHP23GpreWG5WobqifRLaNKLdCZB9LvU7ZNTSCgJ6WDthGGn3XbRA9u3VZwFt4",
  "key21": "5epChEnDugGNo2uPdBvj6vx62uqEBBRXPZVxpzRfwpT4YYQYMQ1Vz1ZD6fuXroYiTdvUTEYUVDL8ouyhU46GrpZA",
  "key22": "4M9KpQ2Kdzr37wGUgX29Ktq9aYkQRmcMKDyqN2RY6stQbo6sGViLXGwyuAt85eaGzDLofnzvHDStNPusF9u7yGnq",
  "key23": "5LTgfYHRosfqHb8yQWA8goHBUidXrZaHJb1W1Fr5L7CzuZjE1P38Au3fLVGThTLHxmBbcBrntxqxFyJTfQFheUX8",
  "key24": "5DYFwTvWHsgncZSMoZMq7FQMbUpW3fm5bUYYKa1UF57j6QiWq34kYecvHy3HQU87SYSVZAFM8qkhhFepm1aUX674",
  "key25": "3dSSVx3nsguw41G8VR5HmGChCavTeizmqLe6q1BUTcLUWxVKMnvHi1FY1DF41QUxYKiDdZC6KtiBzPnfobeH5Pb7",
  "key26": "2JCgNamnANVb965MgDoi5xB86Ncw6HPx8TJaubEAgQBFHqRBDGGVAmsaJjuSH5pekC8X9JfggG9G2AsKq1hcx3k8",
  "key27": "2s9oeJV9QGYizcpusgddjUCkzSj3BErtiLwu1QGMVZWtL1XzjjA2KmihKiow5Cp4ku2HAJuzqV3ZpZqwv1oFqa9",
  "key28": "1gxDvXBP2znAbQi5MiCdbBfi2vnUx9o5ceU8hbBXToAg3oWGPsDwtSeqZumKPJSJvHnoB1cg4EfePVrczn7LCLa",
  "key29": "3bHvBChPm4dhDh8G2U6iPqXTWkpVoTCYTUPhXQB2Goh2C6LanW1L7ubLcAruPbjWqMFp78TiHBNH1eyderQ3z3mR",
  "key30": "3awanyjJsP8gUPdksh6V5NhKMS9TgTuBxwyihLkGUenRZMNVhTBDv4BhJt8vHHazvbymfKzggJbqjyQWtap18HsZ",
  "key31": "5pnZ5f21bF13m3kY9qy41FwXKVftETDdZ6TKBJWG2NVq5ta5DvWKhc6gJ47ffZhSzoZQR5KDvRc6ZaeqMNat1q66",
  "key32": "3uCUyzjAWTGoPP2EWvJ3sC6NPAUUvRjaENeDhhna6sPNmiEqTf9RAvEyf4UETcGf9XLcdGWuNumfi9C5MEuVyvvh",
  "key33": "5gWTQxxPB9EqD2Ca14y9b6JVTMVMp2Dv5Lzd3BmyuMcXz4DLA8NSXT7hbKosybzaYi126aCPfGo56XCkQGW1kDAQ",
  "key34": "5jc2qn85Qnba8EtfWE4TFLTpw2hMn2YWihuQsKUEvtux1pDDXuX3tByM24X6U33MF5BidWiqbqWTeC8ykAyyhAmd",
  "key35": "54GeuRXrV8u7APeTWy4SLXPASgYnbCXQ7a2PVDW4jGqa4EK8u1TLuGYXMHwrcTq5QbXZqrt8XhG5qyv4uM4PnDtb",
  "key36": "4q2Ryzq7ytjG47CZiz9AsdCBj9KG8rb1Mupf9hfuofDwLjFrucc8t52NXXNs3YAFHUfRBNRY8TAGEKBkB2uhuAs1"
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
