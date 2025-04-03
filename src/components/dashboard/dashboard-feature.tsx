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
    "jBeEVTtnEKopXpQqVYJ7KhrNyCkTgSmvkvXaWjQMZiEXFEQVdxMFXmQCRFt2U3kF5rbnS4q4GFmA9GgyLN5smFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozpBkr2XtFLLHjeDdXQmvWd6QvRCTVdu3otc9VrKRFtzm4ztQw5Bbu3KmhqeQiNpAdGvxrBBGEj5ydUZLUz8RYk",
  "key1": "5x555ruEkaqobbSzLwUaokb7kZtEFs9LVg6T6ZAxW9e89RdxJzMXYByn3HfqaWRWa4zWPRQrxmE4JpRsagCKtTnS",
  "key2": "5NHAqR71qPTcHvjYFYrs9CZ5wV8x9sNp7AV8V1esUgVh8ewFhGzF4RudHBVP65NkXgdqkYSFaQfHDxTcnLwn7jQy",
  "key3": "2gNeT6HyeueWr6tamzVi9YpuLPnFStsaRfgcP6F17Fq6KCiXPAnnWEg9oET4inxHaYiDPFYZsgTYurtHtB3KE8sk",
  "key4": "2nqBzQudyhPBcXVkAURCYcWwb739bbzmzGdyuLiAqnzkiUgHAce3tszjruzvjtrQ7jFkbbVydS9pHmg1EZWkgFA1",
  "key5": "5J4x9j8RHfQVi3FJ88r5V7kfoXkpxxAcfeNgPavUWGrc272nUTLgL26BH9SQqtv8NQfQRRmkhJB99qt4iQ8M2XiW",
  "key6": "XFNv8BB4U7JqPzuMkqSMZxsKB2JLvDuGEspLUjtPj4jRXFFKm3TBkhbur6otWZEKHG3ZKHYKPMWgoN4yQYiTSVt",
  "key7": "2A6Txovcn2bHwXXWDu7Seh44Caey3PWwJek3ysbrVHsozZ1GMC6nco4FAsBNGpVdUrNX9uYFzMV5WS41QhhuFWau",
  "key8": "4e2N3rJs6oaiPyj4HEKEpoHFffKTWBdogNqMzVyQDSuRunWYXxCny9Rw2RDnB8WwypLR1jDoGorLSJRfwUbgd3EL",
  "key9": "5cRC93n3Biiu65RLCG1FKBEziTbMtLAnnbGPLkCVZcsQpsEEjQgy7zg4WkBxKpWsZfnSKbPRasQgeRxyv7AGDqqe",
  "key10": "3nnLRteDWBdYMN2enWkhB7ZhfdF1e2ZDLj6G36fNNEpGtm34rmR4EdmuHvoL49Ejm6aoWzqCRdFXnFeAaN4tfJrp",
  "key11": "4UAPKy2QeFAQZ3pzZmiDUbJ6U9uuaCV5eSfzLZTprc6TAbiYQbSA9Egh8qbGWZ9NtVcoiqtuStFY9NWbdnsnqqgo",
  "key12": "3KBz6a6Go3msNvdP3mj4PBAKYdNCD5GTR9FBPPSimWETmUvhZZR8u8jSTL4pNAqT5Pcacx5tDYSPDd9thgKTJ7m1",
  "key13": "k3Qqji1sobMaEZbaKuwGfLHnw8xfbKfE8aMAj4rPL5qZo398fanM9BcJHUJXmqSrn6rwMou2WAkB3DCQb6eC7bF",
  "key14": "2Uw3dREd7tdePvUmi6m4epeFtR881zZCLsi4nmUfaKi5LR8fY6g4gymcouYFSqUshA8wwRSWK5JCrDg3ojuBDBDM",
  "key15": "2WCPD421FLJiPDWKzgufdTgSnwq2WCG2LJyLkYP4m1kn1CKbFdan2efyfrQju75bjbEdnHpUK2ZNJGcrddfUJSkc",
  "key16": "5F5yd26KcEs8Pq2Hsr1PkNo3ckYztPoPH2YCTfTJzxXswKakfdsCTh5xxM29ZR6MrZL9dv1avQyqCHxur1NnjoRT",
  "key17": "xQN6JrA2ebD51Vx26JiBPWqyq7gsgs7GK5RfTujLgMbdagVcVzdbMqfMK6XCAQhQkMY6nudxKDWSdqW7qk4wdQi",
  "key18": "JcoAVgvUtLXBLh41fB1jte8yaRHdRFsRjgHiPz1deM4K7wDffSy7kLbVAX2GQZknFvXYTJGpmqnVHen8QFNQxpL",
  "key19": "4eQgAmDT5U64yHRn3FpDuEfASmnYKnLa9vY5rGBfm9ZVC1LF2dh99gh7AwzDTAx4aFvSbQMiqKc8won97Dqqxm4i",
  "key20": "MT621soMTzTqhCpJk94SVNN6vf9AwewGKVHYCgU9gvFMvMziUqRnf5gniLpHXQcxRpxcHPaBxhp4kXMZpycNUzQ",
  "key21": "5CMs51teL6kUWBJHWQ9KMzgfzU694vmvVpS5GfKiPfENKVYckrZMvMZk2srG9opcfgPUk4Gr92QZFjX1u6H8YQzP",
  "key22": "2DhD5MmButPF87vWdtT5CGMgWfPFZhL8bH55mCButKbZ953Nj2CPNVamvHqVAqLhTd56bi4sXPKjjVAkAo6X29UM",
  "key23": "31aepKXVgGoYL4V6vtdKtnEUhruXQ6izbfDT3fTknVFddcrEtkKS9BzjDABD9JduidMmNsGXRcdVNAqbWbJ26mnX",
  "key24": "3DeMkXQ5F9WrZoEromzhSZSPYkRHHhYip4zY562vr9KxZSaE5UQZ3tEVdjAjbGfeorLengRJfGdAutkii9WKjuG7",
  "key25": "4ufhQ9d2HxFKL59mG9GqqEmyRByxUVBCbhu5rhJMibWF4B5CHVzHoCf3LGdP7s6DDMLkx6hoH3XmfSzR2Ct8xmEs",
  "key26": "4GGpCtntXSaP25TzPxJbjfmmaz5R888aVB8dvK96HfXUS1YF8wLkakqQPVFVrqhkLgTXhTgi5zXuqDQVvaHWu4Jt",
  "key27": "CDXpuqjdpQHq5Bp7MmbcjqXr86MTayNW1DLybrxaPerHoPFBoM13y2vsvAqhcABFpGPeGQSCvEjmeLx91NUrh8n",
  "key28": "3B6VTK6J4wvaFGgahsPdbvb6Ewt11jAsk5aKHYpnysFzvkc6A67i1ggsuktMiAGx8s4RucXacpoxDKgBvHE4yCRk",
  "key29": "5iJcVpgMwyrEoKZDe2mWzbrMSXoDBJMqZEbCwM8UXcqWUhTijvC4nRAqsSkcYTUFns5eZacccsZZzpW7vEHwsHQn",
  "key30": "3iiEmck4eeVcRkeu67PA3GcouQafacn3kbVdsMR5iEXPAqrYSrBDNDyTFPhHHT1QmMYMnhLrXMfkzhN3ooJqcGbh",
  "key31": "3vY3NgCaHsi98nXrwEdJzFJwAfyo6XgHpuBEPUwqoJWM7da71p2ZJnMRL7BLfV4AHTgfrHErVeP8atWZDaZ5Q4gu",
  "key32": "59B3pfvCX9Svi8EnEpWGSBPHR5VaV8KFbN4g6pGa6EsQwhQQ7GS9xepUvXD3ft2nBCfhYqFQUC2NR8G6iRSdjeMj",
  "key33": "G7ozLZgm5Y3NmVJJdeBieyUTAfCXM7ecr5EY2TaVtJnD4so64uQCvD4BXMM8GfN3HcLygjz3VASX7wVGg6517bM",
  "key34": "3VRhgUrFceF1PcZmXa5UmsuSuYP9oUEKAGynfGjXtvpXHENBmrSJxSAYJaTVAbrTXVdFiawsHtuV1A8HBNecAszm",
  "key35": "5kLZtwVUj3wPZwhqog3cFmXw2Yy9kqPZyKxQkLtnRJzorci642CbzqE2z4WWmLbgJUGwmjw9CSB4TrTUUXHxm4Cc"
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
