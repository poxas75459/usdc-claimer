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
    "4pXruADbPu6aWoehPFHxEZrb7Tkj9XnKBSdV9VcGqWi8funFBguHZ5hVzxVa37pdeCsVU2J17bMG3D7jf2YsAdns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fw5E2x9FHMTvdN89VdXFaWm5daKYMqpg8jo3GqwUK8ndPsAuNyRXB3yNCVp1EGCLGgvbncdP3GxQzX4JcBpcis6",
  "key1": "jVV6KC7aDzHUqD8bS3q4TbsDdbzDBtHzu8TsNqa3ejz1EmzqW8t2mNmRSWWZrK6xFWFLxy6JWWSd3K6HeHNayML",
  "key2": "4dMUsvGDNi693CS1wcQDsrtaaFUX84uH49JdMGe2DVxLrxZ13ChRG9tKBsbsHktsy62keWvqicSqCzN72YnW56WR",
  "key3": "5gyFXhDh2WRVkTXeziL3jWPgHWFHvxoZLN73MyCUPgcvV95r4PthqxSK8rMzmeNg3JzngHEgG6YmLrh2RCmiV7Vc",
  "key4": "2DixPcXo1ixALU5RaPhwDeVpnby6bU8959QdKD7xQhkK9XBPvtTycTswddNWZT9nM5aP6tBUn5dwYqHgn3aECTj3",
  "key5": "2rySnHg4gcRTFQURAjfzr1KBiwnbtNURAYSverLHPDwY67uauUMfw7PeoYHH71TyfZheffXas5gcFQgY7jJdC4MJ",
  "key6": "UTtYurPit9EtNLAPJiJ1y3TdtSrgqzAJFceZxxV6qUMMJ8hGecDVkbwpZV9VgBzrd1q7uHTw46DfpCjSvH14CSE",
  "key7": "5Nvx4QvvdXbxRAPnRa58VRY15qM5WporwkotccQKZzVjPr32CgfpUkbXRcr44LVbP4B9hmhVgCvS61iAtPnszZRr",
  "key8": "3qizUPfMeCRNJjAP1PQ89HwwJ9oD6J5cZHRHWytCJfkuGYu9BCJri5p98RGX6pGXNxQcecX5Nf5fJ9BxVtAPjLC",
  "key9": "3MVmoRQJciuaHSZ9p1QVxo6KmxVwEG3etPf5jmkQFBsimxcethM18JZU6ZHXFY3vKcvpCK349hcswmuEDTL28Rq7",
  "key10": "522iFo6kwARqZLDTdv5fqCYRuHGkcryBaGuua2SbQC1sh6kwa7BmoBwDxU8m8iYLb9aStcKEHyFrwE3ELK5jGvht",
  "key11": "61MNrSWfXC7vLkyuo3BdrSVwMMK6h5JxgXVADbbyJi2GP6ZjAXRzHrbvQhCX9raCnXmLBfE9UpQKH1o78VMwTVNP",
  "key12": "4qMPWUM1LETeC4s4L3x6cNQ3DdvN49R773iP2ZHjz7Tii3q3LRpXYXdXGYWWuVGqMc9hDSiLVQxiMZ3KiVqb3cUU",
  "key13": "2VgZn7rJ4zN7APSCXHmTJMYkqmRQvTastHiq1yc7tNXBXWHiePSfo2849FABYC1y25mw6G4H6hiYnQQwfVP85x8h",
  "key14": "2vJBjccUKURLBH2VHmqJVCYwpbRSWXbAFtqczSJg3ctXUmTRZQJqzr83d45bi8DbdLmWtxuYGC1fQRE44xGkpA4L",
  "key15": "V5YjmMCDYxA537My81Qj7V4QEFTJirkDiJVDZGZgrTVPRufdDdhxDCeQSyHCk62dvD7SRw64BAVUiKpFhJGnyKy",
  "key16": "4sXUbBnYUXZx4uDpNBkuQfyBcKXQdhw4NAVd9hzdecbsd83YJSKuKxeBaQ8MZHn7HFHZ4wjsZ6e9qvLjYGHCcfo8",
  "key17": "3gr2z1pTs6F1tPh5czckVstBUfRCx8bSvGUyi2zk1QYhjCFPy13Wjqo3yTDLvoQS7zfMhgXiNMf7oyWf1tseFucv",
  "key18": "3XJbX84hKCZx8yKsPD4v14H3h2yDfCVoSnyE4u2XwmaHifP73MZF2wZs5P1L1DJJ7FeixpFFz7NGF3zRsQi1emDL",
  "key19": "5G4XxQLusBhFaKxcxdc7HgttQTgLS6bGMuXYr93swxbd3iuEMzeUUMWyQ8isCuuquJH1zwjeLRKaNitZD2zGYZeJ",
  "key20": "4nYP5AdJvP2EDpPzYrjaZbbu8NVuuhkAuPYVVARHzyEXdQuKZ1eaFnAHVAjEvggg4XFaQjT2uZW7aKfMZKd19gah",
  "key21": "3mHBUmux4Dx8xNE2x96Y5sFUUeNmdCrdNquwNfvzY2FjTPzaG9XSSLtUysbNGM62g5z6rq5GokibTGJranVAfJ6P",
  "key22": "3XM9bRQBxgbHqfbCDKZYsB8hNorQAp8pM32Z1DX169NyzXworxZigZVSdhzfxzsM6tEVCJftMrNqqGJaX6mZDNNW",
  "key23": "24iZTxPmbNWadyim2snGDxauVzKWpbPawwkiCzMbVFMnxmiy3Zd1CdZrPC4zxbhTYNqJG2G6osEyCxBnAWbmMPVG",
  "key24": "4w2FEuFTJgD2MKiiB1YEd2dCKi9CACEieCx1kxQxdEJpdQVnwwtoBqd7mSBrhTYWB8YNPqZH2AcZQo2wpWEgYZst",
  "key25": "4b2Tkegio1moBXkM8XPuBvFFJoyCVc4gwaoN7W5nbHFTMHv1DwSdoNyVgbnVZjWoGvLVwjSDMEF8e9ZvahqGZn8i",
  "key26": "yAT9B3eTq23iEqDyLCk51dcXHmzwWRJQ3EPRLpdhDTbasqsh8k4eZkc3MrehrdN26CJvSaseaihuC8gADQUwWVz",
  "key27": "3WCwHaLbP2FebzXD3Y7FvrrLndpAw9SBLzugofsabML41urnaMZ8vkGMqYdywfHbBfZa9TYWF4KfSLWf8aJh3xos",
  "key28": "5EkRZ1UPwdFBuTdEuynnj28f15Un9efW1aFx3Hv8r67V3cvr5g4jVaQpe1CPZTivZsrT5FGHiPu6jmHcnQb85kNp",
  "key29": "2gWnuzfYkSJLZCRo4dKSSqEwDzimfzyeeThfXGyAAHHa9QNpNEiqf3UvhWkL195e1zXURFW24WMCbRkZmJ6FxfXQ"
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
