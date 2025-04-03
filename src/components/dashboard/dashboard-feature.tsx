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
    "5BdjHp3ksPDCMe7naLUXhLpCsXhizA8Kpcrs47o7CyrWPCAa1E2CLzZ4nMYpFv9TKVeNKyd5zJAdTwrnjvzickJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBenfHDcruTeGQpwbj11fJeamXxwPzDYR82jf3PWin8Q8h7RZdTDmCa9zEwX6rK7E1RS2UPLqQp6qUsU1Uq77a5",
  "key1": "48bwrmrZrYiksrvzGgd5GECD5h6kn9vTnx6MYdDdWUQx8DY49rtkXiHDQYwFYQm7bLjEm5FKWtf8JReot6zwGfFa",
  "key2": "2T4kbQHEAAd37pB3bJ2MhnMiENFWS8VLabjuU8jdT1JFszZUJYotqetG1fgaBAqpRhKRUV6sQJxCyWCXssVPLCSP",
  "key3": "4q1gHzCcxdbUeP81kvhxTpAKYq8L7XLeUCdbthcmUc5LYPnuL4Aec1WT6vPijfxxrvGitv1D6C5Cfd9U6ocsDDbh",
  "key4": "5fTF52UskVxuvqyvktpY9vy4AfMtq3Uj5A23QoVBHsEnceidAsbuGFJSAAoKuacre7jydbvt53fzKC2wFpD5UiJP",
  "key5": "5QJB5VtHtB2AiC5tXWdhaFQomQAPXx9eah2cdpdqN3XKwajeAxyB4C35HqLoD9hwqE98QAs4hVreDuDJwThAy3fv",
  "key6": "4qbaKtApJLGtZW2jw6hYVLakB8ZHZVhhXD7ZSoUDUBw6z4U3KZGPoceYHtWNTjis4jeEAuhPHSpawz3u9kTNtNn2",
  "key7": "5VnoShqDKVopKNg3qBjepJ6Cgtndh4BM4Z8kMTCi8RTeDYfFrSJpVFjew5L6FS42x412UWTov5MDj9R385nhkR1g",
  "key8": "5P4anoGywBHvpimijNKttW4eoLJjGxLLsJSUTVxbzXPqffiSAjMqmoVUZnNk2wrpdRYPLfCCxuFm7JSFQKpsvPyw",
  "key9": "xFAiv24tGyHjxi5kPZUY6ANUY2KUSyd5AUsP6f5Uy4z2xBGC48hK4DHARKXyt7ZTgE49gWAveLVa6jEG3PpzXb5",
  "key10": "3xKR8aL3duJ6565YkvhC3sFe318cGv6pd9hh2NVSqAQPsLUAvtX4YoXCCvwwaxTzZ4yLASJXvKpVDHpTNdeVKCWa",
  "key11": "5HfT2LhzoSdwBwVidMc12WWqDqcrkfxTA5712sALj41sxPxn1ciCACtEwBovpounW6hz4ve1NLYyMm7Bacx1Naw",
  "key12": "4DrUmnwcSy28eKdQDCofA7bK36MDmLaYkthwpaRgmHBWrzNseRQ5hWFXvXx3sKpZXYfcxuhuHDoCBYUtgHhz8UFM",
  "key13": "wPUMs1NcmNxesTeTZEem64SvjrTK7cnqyfGkCJRhagthFS5nmnK3PLg8Hrgb4R77pmP5jSJy4PJdRveCs38UDGv",
  "key14": "2mdbogHBViDEtmAFhgY1dAzfxuQyejiDM2KJkrKCq9eBgtiqbUnGKxA3in3ZTHRckom1k5uZnZBgJPEV5887X41f",
  "key15": "2Mgtf2hebR783jyNo57KpFrLxNJv9HGmptmequKZdv86v7j8E58k9xhYngR2aCE4EEwknXhmiBWZWP6SMZXY1ntn",
  "key16": "3iYcqCcRLVu4sYMAdhGr72MS6Tr5E5kWdTUjJ3TG4SKmjAkaCVRnZ5pj61QqbycWB2yR8eVVLJPqwbChS9yyoSkm",
  "key17": "32D2TpbmUWZGdPmyeCJNxRRWKupaa5hwKduqucyeMQGPLGKTFFfUF2yB1AmKUvAR56KGE6yrWWHJDfgyLjY3UotR",
  "key18": "2xHKUb9NNdsfVJSit8afeFNcYD9ZDGMxuZFQQm66H5qhMdQpdQJ33XFyWwSG5EDuPFnPpotnyhn1t63YMthUdiuc",
  "key19": "4Mj99D2ZWjjXfAm3WuHT7iXgCCuyRsMjnBxF9Vxdesgkyzx4zANS3U1efdrEATUZNctYgvkFx7PGNZkshwsnxcTg",
  "key20": "2iE8yWmsJnLnizwN6beiPfaxetGqRdNyctQL7Wwd74jxxNurdtDap7Tn9YFwBbiKYZCA3Lx6RhDi8vEtLW8mrXGy",
  "key21": "3LUaf5RnxizfxsgXgE6nmH4jHgBH8UHE8URcZn5djij6wpQXTGBkDAfmv3KPk6ty71yuy9aKeYgqwbYLodVqbe6k",
  "key22": "pgyQZFiok58kcPWw35hfoU9AoTpcLGhSJFvULwvgSkfp3yYmS8tfjC3vGB7uULGhiby12tjyxrtPMYFxRn5sonW",
  "key23": "5WReL9wa3XJYE9EHB3yUzndn3C24C7Pz2pj4e9bBUjGqAazVDjk117ffJayWvJ5N4RPowTnZzw1rnnVhqisUF9Qy",
  "key24": "42rnxtLsPzfFbC4WQozZRvMj6RvfC6Z8eoRW3TbLrsz568cg2XruZXksu8Ex3jjXSspzM7XhGeAw1wrbyCZZdm2b",
  "key25": "51rR17EXXZ2H8VpzMmgCZP48vYoPwxbnGfsGzXGUpT1VgUzwzz5tdXQ9TMqQ7U6xfntUCMXoUnUkFAwkjjVZ5XYR"
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
