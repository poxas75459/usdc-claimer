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
    "2mg8UdpchDkshbZ5xqf6GszGkHKjDYoLWXFpPtjSXLgbUvYXDr9R7hzAF9cLVbni8Rzt5RP9MkwjYRYNqnefiC8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ymve6gd7nShNxBrQYmwHkUZ8LA7FNS5VBnYZFZwAcwiX9dRqo6TbnZ4mCHy4qCWskqDyaZGXMewZgxUYxh4LKx",
  "key1": "6Xmn7ZQaymAyMdnGResJ8NeovHXT4p4fWsmWJBp2VNy9pwP2hHHRaoXJ1h6zW78bXJkLyepFBans5qLja4PW7iB",
  "key2": "2wDpZ3J6Y9itDYetwveDGuiK4UcZyFj3QYXejTkUT6arAtYuZ91BZjZYhEXNKjnAawVzGNeJu4YmwDzefXr2icWx",
  "key3": "2PPjsWjrcbx9TsXniVbe38r2r63qkR5E5cixouAxTwkY5Kr8thtM9R3YegosLiMnavqfJRZ6uHrSjF1mejce2vz9",
  "key4": "3hcmgHbNRGBZAibbDShLiwGXgmjtQ4uFkiu8kuZnWe5ZyBTzcU787bBSYQT6nzjrFxb23CaHgZRKhTaMMKt4TMnL",
  "key5": "8eRcMKdLEj6cSv5CfQhErciLgRwLVj6Zpmtu42WYdx1ufBRqueKN6teDHEKzrTn7XUvMdCB7YuXqH8FzDnSJek2",
  "key6": "XzmLJDH6Zf5Nsv8vRkToqGJaPnELKZo33aUcTJJSCYfLyGc8v6SvnqjLZBNA5PGA31SyNPphhuRePyAMgm3N8tM",
  "key7": "5xQ5dMDQdmXBBDiEv24dj1RekVkfdr1zwz1s71QyPjPAT3og8RsYWnszT4NaxBHAaPmt3ThzNUDUPkY1ARQ9J1mr",
  "key8": "5vCfbgnCzWyTRunfsnBFuPWCR6rbnnhQrvqQqcCCs7H4r5LGv8xbXfoy5vNtgnJgCwgVs1rKGgffzeGgCMRg5jEy",
  "key9": "4BmZobFe9Q9JM8zq77cygRcrmbu35JBZeWxQrygG2eYhhBtHfmuA82aWMW95eLR7wUMETFu7rp2Exw2vpVKYHKjZ",
  "key10": "53Pwux5hPj3tewBAgkcQ8BkxyZZEDMg4UjDDcKpJzN8Voaw9pQtZKwNTX9PAWCTfo7qV9y6VWQBu6pGXqMfZuRL3",
  "key11": "2ty5bEJX1HFNPXemtFHtw31mR69QxWHTVSdiRe8whrS9Juvea4Jr9EuCMuo5AqQWqsfTNkyxTmgKSB3HrzeUVyGb",
  "key12": "5rmQ9Zyr5aG9VmtjonpHWLa3LPCyEEAa51UNJdt9fja922QRtzQs9G9nuP5DndSnnhgVwPkjaYrZkfbPoaBShEqr",
  "key13": "fjH7gGJnbWGpaAyvcCCSCWhEupyu1KJUCMNSDPxwA2f4qtTBHrRsoKDFYkZAKSKnMT4F57234RLWHMCCbdySiSC",
  "key14": "2NV3qEoX3HxaZZxcguUzpWVvWp91dG2kyzHJ5SHyFrxp1ac5WhitwbbXn51XQXXPbQBR9DF7mbcJ1tFyL9JCZ2jb",
  "key15": "5PgWX23nxNocM7d4KPCE2JMFnqooERW2KPU2n7bK9xbZ6QqbrzCHFFN3ioC6CfzJ9Qk91jRfDTrsKnFiQno3Qsq6",
  "key16": "3BYaVxxT5FDfgmJBqLnpKHMMZ8aXj7eYPMKWrQgvr3hU3QX3bMYX7SWN47z1NDUi2EGPVC59WMmmsq79kPq2vr8d",
  "key17": "4awfBRseP63BEgczQ5FQ29CqDggUbhT7z63vRCf7rTj7tsUBrkQGrYyAGpHsrxroBqSyrzsYHTznq47tYH7htXcb",
  "key18": "33NcmkUnhaUXMkMi1maeKRGDKajLHfw2uqajerqFiN7WHMzdxRkTqquf76z4igcutoyrKmcZgucmqFZK5MCaQ66h",
  "key19": "53HdPzMb4MdwrLG7EPeFLvyh3oUqiakoLPuCNL8jNFe3xeaKhs69tRFZGBMa9M7AiREzegEUbHzG5z2ucq9fDb5",
  "key20": "335PARAwSPjFAC25mYhPhpABpB7ZoBZJTvLE4rHTDU15ftMxtTadZu2aAufmq9zAMSatjWgujMY8A2gJKGpKv3HY",
  "key21": "WpX9DC66tQ5rbqAP4UvPNyRvRiCgnoHnNj2EsNmJXyiWNSQ4opiyrur9wn1XbRUhR8uQT8L75GLazEddrrnVLuC",
  "key22": "4HxzGFTtH3y2CXXwoe3yR7SoADmG5FohsjdXXY1kzxRK2eUbKfpC7GfaZiJWAQ4w6dmew1HrbYVv4ENAHiwk5L2d",
  "key23": "Qo4HuEg5tDYC61VA7FsFtZ6tBgGb2zh69VkjVnFranXwiinhxbGv7eeco2FhpyMhySrhKx398tsBSDcBFhA2w4g",
  "key24": "5XAFfY9Y8stanBFKwXmnAsgS3aHoeYbiDgcPUgRp9XfEZphTTYpuZYRsd8N5pxaiLfX1PHafK5AQvRF3JKKUZkP3",
  "key25": "4i65WwzEbmEJ69hjMJZfEh5wj46RXrk6jXHN6vEpY4myn63N53ML3pupN1DjLFTsP46A6VWAXXaReNSR3wAhMGB9",
  "key26": "3wrkxPLhUGKRyTmajTzBK2Gxn9dy1YZ9UoypwUyXkj3HJRbnSRGaFCTdMYEYAjBLhZz8oSA6ZHz2hL8FbFNMYwpN",
  "key27": "2LCXedYgW8bf7GjUXdNqoc929Hprxp4FDWja2rCHrwmwjetLqMhek8xhESWBLPjbKo3f5m9Knyvss2JuxtA96qFX",
  "key28": "5VZPHb8SsGCXSbdSHF1SQaYd2LAAN2iUEC7V5tCyKteRXqLC8i6X4SAFdm6vAnEKY2Vxg9qbs6nNN9bG6tgxVPre",
  "key29": "4SyaBEASrmUe3Yi9DU5kPyziS6W5PQvGuMkR1T5geaW25qVG4zoqZrVsfKuZS1Asqhr36qgnkr8dXDAkNcqckkhq"
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
