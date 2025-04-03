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
    "CyPiGLC9FAAoNKz1zvSvZFSDUREHS66dKtzZppeanmSL39Aq1q7Zu7aTSTqChZ28JVct2oABDC6AUFbRzMrpRMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6exEzdiKxKsj9JeWn8azwUmNGM7cgL7UVhAthaez7qEHCZVBvF9FKSpsGDUniixU9aL6GdjwzPVJFDTB4xdSXC",
  "key1": "5WPb97zr6uZV4hpzd3gEExy389696W1GvaEV7MFibyg8avZAM8b8mftS6jxKiVUoUyfPBQZ1CatVVvwqtcrhgkVu",
  "key2": "29wf8AiVPhWaRVK3eVuPxnMnDW6kg7eq6WDc6wCqjYAwmPaxZiRjZYazdwh7dCkq2A9GDYE8mrPPQz9ApdH8r4en",
  "key3": "3mVD9oJfSYKWeEUauN1tFsgvvLj7EHsyDiWfTjofifaMjax3ZgxDrBVYnQ3aEcVhYHtmdsyS36vriCKfpKvztGP3",
  "key4": "3GTZ5kE6JauV6NijH2woTRy1MKyb8r21cLZB4hdf9DYGGN1BvULWz3hwnM3JYdZv7WT8in9bWUtY8z21sMMfyPN6",
  "key5": "5o5sQkXJUBRh6P2LJnpbrHQHqKnB1Ux1R8UELBP1EtiDTjwk7L4zoZkr4x3ENoN7NmPXQyQKjQ4hVnYAAXYLwsr5",
  "key6": "2ehpuMxYS6osx23Jez3sLtKoEqAPeDRiW93XfvwWuFw9p43irGj6ZwQYqV2bEsqx4TUu41jXvxtStaNSPs2NCkgM",
  "key7": "3TLR9syAYbHMWUNFNsS7te7WT7TswYpeeo1rXKaq81NNSFyfh9qWyqJHUif1mz9nppunW3oD7QjAbJYLxgusXZZL",
  "key8": "3QwvsiUXN1EMnAYpfHD8UUxQ5QfQ5EJj7EqSGyaeaA7uxCjH4RNYhJcRDBLs8JZHDPbWeZF6Fgmoh9LY9SHJdNGw",
  "key9": "5XwnwMNniHPACnp14ThVsNERdWmir84EVmsRCVbgUpLKPXypugZAzVhsn2nhs1nGkJC9YK2MRHKFa1KSYfQSTTdT",
  "key10": "4jhGmnDmg2SMHqPiVD4g3rrwVABSTamyeXfE1981CWuwu96diiuDsPbr8iiVj3zGriiXMPPuAQnyiDSwSmBQfjE4",
  "key11": "3cLVuUj3z8xd3XfiZEY5aPVH8axBeiA8nw8JJJ7dqmeiMshqi1WNMgdci1bH191JB7F4URKRyLi5ZcbvaMfhtLec",
  "key12": "5JELo96WwD6C75fFDuVGe3UiFqfVacfCLabmK58uesXUdiZyvLGuBsb3apSQgzfF6zSG72cqNuKcLQXLvZEsZ9NY",
  "key13": "5wxeJ7rbviUBbbuooE8Atin9RhFMZG842ntumAUSX5QPeRLS2wnW8V8udJxK5gRxVLsus94mgRFpZt3x54NtuK6F",
  "key14": "2g1W9kCEwwZ7enYq3vFpgzoXXfpMrrfqG9jbcZJ55Eb7ASH8TvcQMKkipuR7Pa7QPmqXCeCir73UFkanFmrss7cW",
  "key15": "5t3kJX2XnV2uCkzXmKkCeBjGiuBp8n2PL3QSaV6mzC3GrE3QvU4x64X5hp1SqEBa3KqpVG39RmS67MGjkyq846B8",
  "key16": "5AYmtDZj4st19P2rGk8LmTZDYexp1FdBok3E2x97GtEZeBFaHoJbfzjtCkqWzoqPzheVgdA2iSwzMa427gz8yMVa",
  "key17": "2M2BzjvhxiVvMj14YZfkhQg2otNGegwmx4qsLMDTy3VjvHV3aofiAgQXjcb9sunSBVo2gRksoGd5wDBgBGRs66WJ",
  "key18": "2g74gYrKjwDrmEASL2Cf7S9xVHvvQ2NzXCkKpfK7oizUMubjFibwf7DFh32UjUFr81EUTzoQw7njjqaUyr51SGJp",
  "key19": "5gqrQUhaziPJbj5eEwytTy4hn6A6GorMAmKcv9pMAB2rdCAeaanBf8z2hX4kB1fpKRSbwhdhJ5VLus44VdKUaLmu",
  "key20": "5uHDkRDeMpJ2MbG2dvJC2sjpZsWZuh9282bwdAUfPFiQQzwgzjbd3cMZW2d9fFihFNrZund8HEXZaYa4d51YmhD5",
  "key21": "3y8mSGMcKpD2tKMubbvRYFuB3vCWBUD1gMo7Uv8mAKhsaqGvmJu8K3XmA3Qhz1WSB4CQ56UhhPL3aTBR92nH6pCL",
  "key22": "D7HM5Keiz2Za7TdRamn75grypZjawcoPSrFeU2dg6Txf9t9Z5q7KokGdE52fbzhcPzspVkiN5FdncTzWWDyJApa",
  "key23": "5zhv8bY76oj39847XE7oD8GXMCnYnJn3s7y54jDhakqhGBqqnBK1m3959y1WAcriXmiCEcATiBKoHHLgca8Uoni9",
  "key24": "3SDTmcN8ytxXmbLrHitw7me7QvUf5cExpTg3kSEjy9HqDHkbx4nxpkeiE2G6d4PujAityNVLadJURzqmhsuxKe8E",
  "key25": "K8FnzKtE7yRU5AgXFJP2q1yBApAFocUxJqJG2fNzUDBkNxHfrw6s11HA6ytQPvwztmnApsRf5EdKpJtkfQqR2V4",
  "key26": "3kK5bSdp9Hme5gXTzomDWzATdiBZZNseCCDHb6vuV1TtzeDpCsi9uwkbh6iFKYwUZDRNeMjdEXe7uZZ5mfasGBiJ",
  "key27": "2VFWwDtvfkzAf7Gkevd5sSt1u8qobM9ZBffHgRWJSAufZef12crpWh3ZBuq4tcifCVxyXCtsQ6X1U4EMkzYdwuBJ",
  "key28": "4d5QBv81psbDm4ByjBFx2TZD1GKYG1h4YVP2FAVMcMJVtrFkmaUV6NYbGvqoiJ5VmXUFruUQQDvC7puHuSPYMaTb",
  "key29": "5u5yabngMAJqcQiY6f2JRQPYRcRKovXkr4qJ5xEeyYfQwdiJc6hB3arvbUSHuk9zY4dEnxenpm38eLav16LmwA49"
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
