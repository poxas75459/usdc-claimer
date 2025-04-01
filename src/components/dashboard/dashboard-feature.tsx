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
    "4bszHJVWzDGD1DkRvVVfYrY6WJM5VUGbDv3aJi7hk1jBsRwyW1rdL3DAnPQ1KD4TZkZr3Zfv8s2GSzgtygHoQ7N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zDrecGZYitfAhJufqeojakG7RrULGJcyUkkV3irJkEcyiMyZdyJxyu7LcuaFz42NvECrjfQgwTWENRw8XwJT4Dy",
  "key1": "23aKufcA5xwsBBKSkDrhhkg8xC5fXu3nSQ65VsBh4riL6ZH5wgML3vtW2XuE42YuRrczfzNu6wRY7seecbBqQG1W",
  "key2": "5yYTcyAYiUNYxmiykZ64SwqXSY7vF5Esouyz7L2Y3n9UwHUbaEqYNDH1xSRZro9KrTXYVH1PBKvg7u4DRaBS3Q5p",
  "key3": "3XSgLPDBP4QgzwJVwa3wiy7TA1rn92SBBP4zaKus5sGvEq1ch7VnPiAb7ya9QiJMQTZUUQEkuCNPxbLJnwGCWdE5",
  "key4": "4MR4vsCSsYC6F2p3QeBYrR4M6nU2X6njKVdQrp55PhbKaYmot1qdNqfhYiYHqL7paf428P9tyPB4cYiSeiAsaqdS",
  "key5": "Hk1z6jDdafvcKcU7LvePZyYSM1UVsJ4NqhKeCf4xRDvpExczQvwQXUrzKLQVGfQFqt4kzmxDjLY76Ye6s2DwZ3k",
  "key6": "3b7Rjzq2AkZa1AXs1nCAtTUPyoPhyxyopvTvra38ZfvWVTvMmWQqffDTe6ZH7589UgxSJ3x9ksSLoPSjPvMUXCth",
  "key7": "67F3ipN7iftAyDqk94Juj1wy3BaYauf7ArpMm7Lz7PSCS9HwM52LUc3DGRPys3Ee8raMaYrjXxsRFPK8UJHGZBH1",
  "key8": "2DJhJZ9vyQ5G3a4Vuy1xJUPBNojRqitoRnkaGEudaCWTSxDxYJ9YZ4QkyRWLoYHAWkeHgeYbb5hqKkbUJGHqQxJV",
  "key9": "4jzJG88Q7rdeqYzJCPDqWA96ZwNRAm1AX2sMDh84xdXnjyPzXmTgyrcxsjgGfyC7WMMhCGqgioBbSd6qAN1hitL7",
  "key10": "4tZREAScKWTEjR9LQcMJMXRym98Hu6FdHQWcbQybir2RsAAWMKM4ZXLMbsKrMze3hcVGLPWyFACiMeGRqNR3ssQU",
  "key11": "GCumqzAZj3V89UbSJLh9KCy5C2rnpkRst8iPX5oQgCjUyP7APSD5QDXagJSLSAvwrpBSQ2aibBQM3AKFegPR51h",
  "key12": "5E7wKiAqEqRjceZG5KQvB351rRc74pEHuGJZh6jGZEtEo6RoLfMACVyfiPY6jjMsaYNDqp2W1jVE4MxkubwWyVFp",
  "key13": "3pJti1BAAb7rXtNDk8XxrrJSKn3zuJDCcE4BBR58W4bvSqWDbn3fNiERDhPJYhYJAZYwtkKULWJ1Yg91p5XPHAxU",
  "key14": "3ANAEkzYZetjTr57JxTtCRTEru4pqtNMr97SJXcBbLALu4yNgpLZHcisoY94T7jVPZndceRVamjJNndLiA8pD6Q5",
  "key15": "Ly6XyhCmXjGLAp8F1qTuPcYRWEAzdaDFSAYzwVLR9tfdywAV79qYZwn9VobMTDgCCiaZ7Ruo9vstydBwBxqR7Wu",
  "key16": "4qzQFvRMLs1obc9ZPzaxe7kXgwyhLMwMjzcfDLMnQJwXcQHKfgsCtg4NoAfG4EkSA4e4vSY5yeTwVrbeBDrmoPCm",
  "key17": "UPAj1GpQC1sorM6dYQ5iSX9xnVAHYc9mYq3Go83LSPe9FBa2UFQa7CTa3XGkjzu73E4vS8QnnmJV8fUfumiWLRn",
  "key18": "3WfX8QEwEfzjcPUQ6Nrij86XtZ6sYZenozg4W5UT5cknSRjJLRhghx8vCdm8RrQzCN1bXEsu7V5XDFnqGqPG8Gtt",
  "key19": "3H2Eto3cTT3kK1ZuLsbATA4QmxFU6684Z3vR6cRpMwhbq1Fjy7Rp9pVbpgWML5CQsrkcCwzVcEinug3j5JT6jWXA",
  "key20": "5WgbF49nYx7dcDKcxaMCqtwfe7NUMZgto88FwyxL95ZwVFLEeaJKXxuEjzu1EWh1wiYs7nvSbCoSEox1ankS1HHq",
  "key21": "Uy2k5G271BMfDpHddLJdTLVqtBs6hT8mbiLqbZxG8EHtsaoN3zU8eaU9WELyvxP3NBCCgu2ZabNKfvSzjR5qog4",
  "key22": "2ruDqKPHQoLvUozWm4EFBoXMMVVV33k33pgtw5rspi9byffRbSZCbQwzdChCwM8Fm2i6sqW6HEUzrK9yqtjgfDeZ",
  "key23": "2beiz2cVEHPWdsz62QBbV9BAHEzK6SSpJVjsuTgGqm9GiwKMyQX75Qb5DJcJHTG2Q9Ajd7vypfnUfkLSrVpmCQvw",
  "key24": "4ri69Pcbfb1B3T8KwcRBFPjwfSwLmzX2m84CatgTCiGpdCWHLMTbWB5HWGqBDoUk8rxHRAet7mHAjUhpfNEnw8Wn",
  "key25": "5sJpMFLcst18VayCSSeptVraedyxq9ATFwwzNb3AxuLefhRr3EuU7tuVm4FKhGWFgGnAexTMKTromRscvh1FYWiC",
  "key26": "4eGPURAxbukyWT3z4dKf5oi3Mb1cZrTgjsQ9dTL37sYyZffeJst2BFxD4xfhe6HQEMkjgXpNanAo9xBjvaUt44bh",
  "key27": "5Lrcd6hYJcZwVygUMpawjhehfN8LJ1bCqT9kzM15cHF1rdtx5ywREFJnY3ezkyhQLvzDgHnrbHa9b4QxSUPYqgsd",
  "key28": "VfKYz6eRWmFgJh6BDCAhuPFXhj4AMTsQxDv3wDpLvx8dr5dYYXD81V5bNDzLaKQzU1H3QvuPH86VbkiBoQaG9Sz",
  "key29": "5ki5JsMBGbyRwZF2xUqXhGbnKBNFVzLiGnUuVzZoqYUVez2FWw9nYiQjkPBiAMj6qpMc5FdPz8cWk9hYJKf258BH",
  "key30": "2yfzdXWJsfpjDJez5uTx5JXCTWpmToedt6AQim8WPrrGaFoJA6kCapVnBXXG1pHWpLpUvcrBBC2Q56t3kfFciQjG",
  "key31": "2oKkUz5Em3B2Yazc3tnNqxWuRyvdMRzN2HouTNm7X4HWFhc8LfV1CCEk3GoD5L9UxCz7vhL2Kb4JRQ5Qb59w5GWv",
  "key32": "3Tq4Ptd6sJcjSPzEGLFSCVWnUnVeSMiLMggvYrYekVGyfqAYqrrtB6hQb5HX1qmeDVgZKvVXew5fHL3RFe7uhM3e",
  "key33": "LDmAqhUGLUW24tFuarMC5XmwxA3UGvcDvXg1uWyR77L2Tsa1krtaXxHjTSCNSTk127ZBNT4LZygQs77ZYQKBTUm",
  "key34": "5qRBeiTEzmtDsGXyqxsMHXyYpwwmREogmqpRnZ4hQ46vsk91cKgTYmJQPJmSfK3vm6SzVJJmg6LZoohnZsxG7Fym",
  "key35": "3xzFRL4jYAWNYKci73zAKjZcFidEggLCM5Bm6RQXUh4W9Ya1Ddfppt37SJgRcQaqCDttofGGNNo9G9qKzMXTbv5E",
  "key36": "5Eu4JCjAz9p9GRVCVKE4fYfpmnnsetxgRTdHwCbwJaeeALmmmQEQS12yeFE2iboZbWBvQ5uqZqaPpy7X6iG77eWa",
  "key37": "5QRSeaiZsSYpqVkCZPeiNrAPQhgAjG9cJfTUPYw3u4amGaNXSC9xaaRjJNxCCJdDBFTuCaB3VN4yLUaAuQtbkiyH",
  "key38": "2H7fX1gw4somHt1HWPqxMJSkG4KX6tGW9A9tyBtG7NHEW6f5r8h9kexJGQQYnS6nQpvjaHhEJq96XWkpnBa5QfGy"
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
