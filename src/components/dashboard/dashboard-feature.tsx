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
    "95hgw9PUbdEw41ZYpDdf325tns8ixE4ca2vxEXqy43nwSZcL6LPGr6T2YPNJb4kd6dmocyvDHxxGYuN6n3hobfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bThMH2vDJy9Vtgo27yXUrFmUXm2USdkuiegzkmrQ8asxXYBA44a5XzrCTeJ8PjdmcYynvdjxCpfMpLZLfRUqm6f",
  "key1": "5qahu7EY5gcpfW2soJngyULVYx9sJtKEMMTBkwRaduTQipMikhLxku1KerrYenbgwnrQyL2oLeRAR9KyYxmbsun8",
  "key2": "3jbfcf77gKwG1eTZaUJDeQqR84AK8i1K3uviUg1ndFXzYrYAAxFz1B5f374neNZ2CAYCjMLE6EdXCVJpaa4PtApk",
  "key3": "2DsJmUXEof8bMC1S9p54BEkSeywohK5yn4bvTddCaBKjEixFz6ZvvEgKvjhiuakqJX9hbybgzgz3pa1RKfpW8nri",
  "key4": "3GM7NqnXu5nQ3tQN5JmMjnwfKeErXPg3UfipjVD6Zc7shBYsKAyRbdMV9js9fEvhgenkjCEd37GFgHfFQZDuSMmc",
  "key5": "4N6G6DKPTpWx1X1LRuGMZvNqv1vp73PuYZKas6ccGhSG6YS5EaketznoQK5akmjRs28rmQMBQ7qin1g8DJjqzS8i",
  "key6": "w2s6jaqE42Y83zQbN4HF6zYbmmWUc4Gp4wLn4w3zTZbCw4ATtgRobbgmT6hiymKGDQLhgMsk9Kbg8qZbk9W9STk",
  "key7": "59EDfZ9WswEyMYcdHHyXs5ymRzi7YphcewEbZrFcheFNWLJUq3tXqJ7EwcbQqY8j9vx2YkwJfgyca7WyLQVMqtQw",
  "key8": "33ayi8yAEKB99jgXaCAKKDFte3DWcADYKa4QVTQiYSSrSRQ7QG4zywJNeeyYQ9qfdGWtKNkfGUxnk8rZeVUHpsXt",
  "key9": "srBAC2G87epmwxFjE6Ut9sK3f5vyTX1La6zSERiXqqPaxXQVKgGewwgAcJwibmvfRKteAnv9XZuzw8G253dZ8vP",
  "key10": "5CDFfFJez5vJeEH1VAeb2HqjVMfdziWp2ZdG6TnqMXAnpjDphYMQ5r3HTyHPvF4ah72PBZgJeP2PNV38UM4ZjAhf",
  "key11": "ERzUL5xZBR4msQSdBiXBAZJUU8n3y6XF2ADbpcDiPPRMoTyrhapeS11tW8pbrwJ743FUKPkJs9SmBHRoEQAFXm9",
  "key12": "ZSJGDtAJJ1pE8ohRYGhDYGKmeZKjFbA6mJyJdFyQsvXtyJWGAMiRpdnoyZJHm4nQPZC2adLCsG4VAdUBVf6Pztm",
  "key13": "3EcvGawtzHGSd3Vj3KPHeyyi4U8xavnYg3F5ZmgFedSMeuooAF3Qpk2VuWuLd5FwNmQvEvd6KRjgg7T586m75szW",
  "key14": "5NXhxi9aSgAPkRDid5ah9B7Y6UJFaSZXnwXbHF9zBzSGKpnBkW7qWP2At6TDXBJpMVRH7tnyFViB25zovTCEygzu",
  "key15": "4np3a8YioqaPosd7R6NFQBCxqR6PWqWHvPvL6yURDzHuYbDXZQgt27nKipfAM5hhv1GiRCmmfUHZFjYUnnPr8C6d",
  "key16": "4veCMALTMX5BvTF1rzxv8VNd1KuKJegKH8jnE3dZd4RAVGajKgJqMiqjyEJhFv5gAuL2ihurAEhhyhAppLBoCtUs",
  "key17": "2X1tT1yhXcQNnDBER2fsrKU8KckoZT6WsxnUnctP6iLkcYk9JnuadTPP4J4hL4JcPX2L7joUD6uh82F3U9ZauUpR",
  "key18": "2ja4i8xPv7goaJWUPnwSTiHNjnwhDQuTRS6y3XcrZPg3zWEBAamjYdAhhgTFvApEBYUoPtLrbZs3QE7dx9QAi1Jt",
  "key19": "2J7sKAKWbS8ejmyaZRAf5LFHHhBFZaxnPWWHBzAvk8hqm6FffSkBsr8v7uj81DxX4163Et1W2u2i1hrDT9J8ATgr",
  "key20": "51DFobFo4K2qbbzRwofupxknd7yRGECyXw91jxh3D7pxr3BsMLPZEa2Zi2GkbNatket2khtNfSk7teFdVhKt7HR2",
  "key21": "yasqpLar1PbMZoE5imtW5VrR5T8rFp2V4D4ue3xdtGB7jdMctKyjPgQThaBGhu8gz14NPJE7wpTZB7Jh55KLUer",
  "key22": "G6RcgTtotzZMhK2EE4xjfZzaJdLTZxZie5YMtuNjd2AZBvuwgQqxVBw5HjRBSckwNjfz7NY7cetkGM2ohanyvkU",
  "key23": "4Z2XtyGzk63jGCrCCkWz3qgv8kbKnE1p9W2udaKkhvURe2gGeJTGJrGXwtNGMxqY1vs3wHQfZDxL7LSqUjj7UHgz",
  "key24": "aJAX3aC7BNmXsVmEZhiPVdhqA4aoPeKwyN5XRu4rDCic3iuefosBQCwdGn1a3XehJUoArwZsYRF2t3vNYk2oLYf",
  "key25": "HtE1pUoGAqxjhZecQt1NsTTVdne6d4JfXicaKV7X13hdiaVHpBPG4rRQRD2qY1qqnUgXWQCGvEqvL2SLZbqqhFQ",
  "key26": "53zdQFmsUo2785QnKbQE3bPYzNj8bxiESAvBp6uHwPyhfkqEMDrKXc4Ab4pT2ALKapRGRQEUbieN3y2F67WapSye",
  "key27": "3fbuQvxpucgi4ATc34wJn7jWxabvigSRAMKf2TsQnKZ8CcuJJ7QeqD3AU9ak5BDwyct1FgCv3G5ksN71Uxr7gBGY",
  "key28": "94tvAJrELSYhe2gKePdX85HxHHaF2UtTnrdFTpPCu9uPCSH29dP1cYQfHq7PQevQn2JomKZfQqvrw47qGKEBVbF",
  "key29": "3WCdgUr3yWbyoM812gFWRuwEWMhbJLJernCd13ZAgYhgXBQftiNvAZYhfgLprTRymwcRkHVB9ytJEydCqoy2KJgu",
  "key30": "5ENoZnUVedMZvsLs1GYTuytwnmXgSQQykvhhCMmURfLRk1w7hqLnsy2ipEddxakd1JFCV1L8FVZ5koFqin2jAETd",
  "key31": "xhPoxYy7QZCt5qxcGjjuxGQ9vqMYhosZrRRQ6duWeiHufvRLcqoExB3PnvBE8Fo1nXxUnvUGHGQg9wRUaGmeNJz",
  "key32": "4KkgQcykrM6bgqozikw7nnQwpexvjmAtxtYrcYmN93Zb1Nj6wW3uPeh716xhbiB8EQLmHAMJiQJhRxKf2nxugtZG",
  "key33": "35SyPJQEv3kBit5DfRnAw1p4Bd4pJiBs33drc7qr4o7zcehdkbCY3oHBYWBxXzYXSeAHpzgPx2fb7xxWB4to3sN8",
  "key34": "37CR1yToHp4yTPNYuUroEC2bKxPCW7yHXCVMvduTmdBeT1yRKZYMndsskWhjiW93Qvsf1cH3nUApGkjA7WSTeh8W",
  "key35": "58cu3HuaG4kMDU2XrdUhq2WcfdK1W9A1sjB7CGvbVsjrQUPt5vMCjQTXVyVSH9B3ji8BVAP5GW6K4VrPvsCSuYax",
  "key36": "23xobJn9hzE51caEirikiEnQPiZgjif6MbygiCo1q8CtUpB2VGdHCp4ttk3ouiy23vMcBWqjyMjZnSgXkA6TF7ho",
  "key37": "3J5Be8gF9jpePKJPZCswQmSrJeMJVCD2MYACgkQHQ5VRAqK6WspP4Rwi4z3hJvtDnG2STPJEkPZ5VqPHkAbRXjfn",
  "key38": "bUHkNdkgt6SxNYkvmcb6BV4QDDVjT8z8NVvJZygnc1Q9PaXRBCVRXFNTkW8EXNmytmzZqoXGsJWWHG9igTSfyka",
  "key39": "5DzBrxK2uwuBgQ2HCYBAfUp5T2fG1Q9Dw6o8AcLPTpDrnxZWtnN92ZCudvGokNDmAKKeam7hCNxvVZhEKq72mfEk",
  "key40": "2qgxSPywWKAcjSKLGNuFemjNsqoLjSxCcH46MADVLjmsgeWC2HCB5piTb7DJDDTL9B7AUFSrzBZTQP34BfCEnHp1",
  "key41": "61nrb1HtzufwM7mZTZX7fXWBjW8bhC8YN9jgPrw7oiVPRnidVk25JnsttmSNL9Wh4Xb2TniNwqu2t6X64MnAomdV",
  "key42": "3Z9hiCEH9M1fnXsEj5A7Sd4tuouyALS5o67PciEMqS5VB3SBxFXEj4YnLvdwjUxYPC4jKe7tBuvkPSK6VUrr5CPm",
  "key43": "37Q1qGsqW3oHqhYKXZAkVsp6BD4jS6rgEa2cZE7tjSYE24LiAQmtSm7SyZ3VakN4b4Vo42YBwoosJgVx6B7Q5nMo",
  "key44": "fBpN9z38W32SPScV69Ruhq7cHcEUiYapgLqcJGreJx4ekri55ERuf5xg2wHVipDLof5haZ1pizKLF7DqcNzzecW"
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
