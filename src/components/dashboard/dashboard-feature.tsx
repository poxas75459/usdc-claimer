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
    "39tA6XDsX3rzGE3H2mJPwyQaY13gs4PaXobvFJ5z1E37yJTmLT3V8rtPpMAzVNvkSDmYBnJTDrizo5bLuD5EQGQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rnnBysyL9hChhg7EDUEx1azTCVqA5sCQ4159pGdVr8zsT2sgTKQkAr5WqDFiJufVZ5frJUCuE7Aw2zxDYTASb4",
  "key1": "ZiTiBZsjaXKjsEbczztreuAgC2yB9Zv9bbBdMJQU9GWmq2oPFzcDWpZjjQZm5N3vezAfwTdYzoSf8bGfSbNxmDF",
  "key2": "2RrawToBuDi9veRPMRj7nujDbBXkD67Dow9yviQfC3wVYyJJ79wwnTd9xfJLkS7boaTS6zHkHkZYcyyrAHANCg5x",
  "key3": "61Kuvb6a8oSGxiSWRpr8TVofL5D1HW3pBikWNKZ5jtsM5Lez1nVK4VxH2XPUeA139Hx9YGPYWzb4tC7e69M9fjwN",
  "key4": "5wZJaNroTiBwvVquh6Rf32hDfLm4bZ4JKvXTduX7sgwUfwvPkmhT5bKV5D8CQDAKMpHzQZHQmaGeyR7MC1dgSgox",
  "key5": "PbcNUZx9E5sR58PyQRDAAcs6a9YbY7AieaUXrokDtqT18mEr4jY1MrwKfth5RkGMm8G7dwxXrkaPamjSTiGmT5Y",
  "key6": "31a6YgzXwRvdfyfmNTXPjH7C3WjHBKNrwWxYSGvB2CYCYysGhpJVMZByGBQFbWgB7HWwHH21L4UsuzCBaqQZZMD5",
  "key7": "2RCakLY6JCFLLG3VJLtqdserfNXxjfvRUKVPMmYEBEych4t674t9nu9dERKvVRxrLEgPS3LjMzW7R29YqPprR8cF",
  "key8": "58k4476FznHncuepUcfM6gff1EfP7hBZYZP1WSiLw2V8wSdznwc7zVCvsbi1jkNgwToHYNhpBNxL6ULv3MHD4GP2",
  "key9": "3WmcWhcmgrXAjTVXa7fMGCuebTiAyaRA2CxqMrTVdxtshTTKwzRKBYUvmbWzELV66JqSKgfKkPqdq8AQ9fhV8rMd",
  "key10": "2sMom6mAC8hU32MKWhen4MsTY3DNf2k3yggLnDyvrt9MJgWGdDycgQk6D7NcLayBkhYdPePRNtGqND2X58ahnzoU",
  "key11": "48VFSqwkYQ17oFdNmh6YFU29nPJUy7QjhsJcgpGxWcvQ7upvV7gM5NGJqYJMwTThEgRPmWHFHS6hKANAw7ybRYSa",
  "key12": "vgfNSPepLRSg9DJoBCcMjd6pKNqwJUKptZD3N1KewagmDrKDNjtuu3cjGCpJmZZmuyiKyfhKe33nrENRR7TWEN5",
  "key13": "5bHLXG9X2bbf9KDty31TcmHvHegPLJc9m5WLcUJhUXbqxBt9LuNkLifQaNjLodm3gj4HPLZamreyabU5dYnUUAiz",
  "key14": "4HqRvqgfxoBEDcFZY4m6q6VFUKHDkVwddm4b8iNxMt8yuyasAsqYRxVLjkCEvJVtva8DvGenyTLrRNKD5yf6seB3",
  "key15": "4XGvc75PY3jjKFrvmCbRTzEZWhuThJDbugyqmJM35AYwNLaTujo16joKPMz3VtmnVYG1awnRquAZMmoJDFE2xzNr",
  "key16": "4EVP8WR5AKKnQME6cKoC9Cf2H3JwP5jCVbSS8aaFGb6adha8FfaWptYs3bdKsfYsyT5U74xqwAEfzv1Cg7A8ZaWx",
  "key17": "3bPr6rB6JToEaWCxS6YJd2pat7ygZitT9NpM3pfoL69gXc919arowRTTA2iERusrbYZ1fU5f6rcxnfhU73ifWDCA",
  "key18": "2tbMLSKxW9NTmwPiF6jWwzyAzjbKXMq9syVQb2tQEys8N9YGsWLvWAjTm2YE9ESqbFVKJY99pYEJKPzwCoK5P33P",
  "key19": "z5SEofCSBVDvKz781AxCEQK56s9mCt1DCBjaNjBokefoxa9V7zMvDo5mJmHHqYkbvCBaccUthdgRMPp2Fatvg4j",
  "key20": "mVpe55uw2ciqpyP13pTkF9SkQnJT8gP6KRew1xfUkEZ77eWB1tqKJ7TNvKwBSAqfnwYw2N1JtwyD1mbFGsyzny9",
  "key21": "3Wps7DcBs9vTGNsgF8R4NMK8QUQWDKXkgsUSayVVs3FZYmjmSJuZiLA71q3xt7Zu9NPW7QWQWhxL1qJsjFoB3e2h",
  "key22": "3Fw6Lz3iALCbSGhTFQ95rwYbr4wwDXk4NoPJ3x1pgumpxBABtTGRTtoMsLac4s9yAgreovApibgy71TsNbw1FV95",
  "key23": "4wZh2jNSQp7gcooSUJ4TTL6NeStVwRfD7WrtTSALStkbSRNDCx4nmDhZLZY9aDpTuxbzLd6ThF5aQApKoFpqsgAN",
  "key24": "45DNTbDFHsvaBniWmSiiCc2oac7EmJWNn37YdzGYggZ5Mv391wTLcSGjLHnAddJ9ZXwXnZm139wn26VXDsNS4Pkm",
  "key25": "3yh6Wxjh685DArt3swXV8tnvWgXbSyVMaW3xYFuwjDFfBNZ8ufekQMzr9q5pEeSt3ntWdaEMbF2LqioQ5ef5R4Qo",
  "key26": "6htiYv4cVBZFvRmZXk6zMWBZ1HhuWPhoAH3A6eXNJqkVT7c88rwgbTGk1e2GMwnr8AZ373htrPZNHKPf7aFSXzm",
  "key27": "5QPtnpeYpCdsKSmzebXviMqC8NiEtDij1WBrV9Syo1AXptbeAnSEtUxZSG6BVcHMPo4BWkAcYSgZmCBBr4He43vX",
  "key28": "4vW83eABySA8aiQJ2Pta7nF5gu9zc9v9VMRiFzSZcnFdyFsvBBSAYRzMe3vH9k65DQVBjzBSYgzSBeRtyXUoY2t3",
  "key29": "2xBhTN3jBonR6QawXeob1giQRhmWWEAoUUcHaF2r4ydMYzVpXKPUpWAMnCDFA9rpZm7KjdXKWv3tLpfQG5YdxurM"
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
