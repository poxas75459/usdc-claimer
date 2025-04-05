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
    "4FYDwqG17GsJVN6P4xd4Vz3sVPGqt2vPVS5i3u9G7Tuzj2jrUur69HA64GNp9YV8vobB2jXEGrhZikQjRHa54aaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDqe9jHkWmAbUdqbgxdZPx1WfxGNzP6TVGaZt7LNZTExyApYLH2QC7FKcZAeZsJEGsSBHwSbxmtuAt8uKq2b4No",
  "key1": "2wMF26SKNizd7Kzrbigsho7fuyyG95a7KxjWPfRi1Wx1mcDrMhS3gWpdzniTGqa77HiFZvAoaxDkEiEjH5DwgSAw",
  "key2": "oY9WUDKuuc7gYvSnUCrcWph25fceGGw63SiXdXTi2MocGU2xKuwgGa7Cgcxvp6oVYNvPMreG6cJfKBPwNrC5jVq",
  "key3": "4Ax3piZv7tjGGhRYfuav17ugq9DKyjTfBYSdKc1qPPTtYHwo5xaR2SM9tfFjQwozVQbq7ATtj5JUQr2UpqNfahRo",
  "key4": "mUyPAN6VuhYeVS44wSUfdfymwHZQLu9E8ciRAdvAmQbr6m6pn5nxpBNCCajZA7Sj7P3XCbXAB2ANBK8Tq9r5Kjg",
  "key5": "3jecLfQdcKTDJNUP4d7KJXrZBSErwwZ6rZEMNvsLHtt2w9UNdBEbnCfvxLqhFDiPcYeRn4xoZwJ8tNVeN7FpsoHw",
  "key6": "2Lh2NxAC7m1r8Anp7GG61KdAS8bBpRePvwEUb2ABkfNadZ87EKMtuYQ9J62RJLt8NTqtGhBxbwKvz1Xb48GUPdMF",
  "key7": "CLDRsrXUSWWRqStEwemK3Q57aGi72Mt6Gqd3EXMt8BQoTnU1WSr3n5SxB5hGYXsGfMCFxh9CNShJQtWeacqrAF6",
  "key8": "3aNKNi6Yj2PtiKD4F75r8YKfr3FFT1tMg2zyXJDgguH9YmqRwhkzQFHCdR3Q1uN634G375XdrDP3gwz8sAM8u9dz",
  "key9": "3r8xvqGXwz43c21bpMeQVee3jtjN5RP1diV4N12Erb1KiDavNZedESn61kne9dvguXwUcyphQU31dZYoRqX3vvxb",
  "key10": "4zLmHqJM1gKs61zevJ92Y7KWUfRCyc1SZsKGZTJ1TNwDUkRfjyGzUm74NinqDgrT2SeUsyhMpBXNw3cW5URpiy2W",
  "key11": "3uo6qgW5UuzqVzmm2jNJ12oDPmyfUj1gq1Ws7tjqJ1p2zdAoSWkNncNHBSXGWqif9h23M4XTATe3iG9T3fm4nYFA",
  "key12": "3bjoZUUoBvmwnTB4TN47vk6LmTFekkBsjZ1EGmuQkCksJ1zEsnEL7Dq4zCTW7U1vfuQjnj8ZpVtVKZ2g7qRK5Qvr",
  "key13": "4iLkxH3MPHkytht1hXMcyxmz9EwByDYewouabFi1URCG9KFN68VxpE8SrSuS2RMSSghidpuG9YB16aTTVwnhbfem",
  "key14": "TJQpSAcecc1twrs4Br1jSrFsi7X6R24pcDvUp12jbvU6ve6ZDWAd3HMSEECpFM3DmcCM8oVdFMYnf1HBndfx1yR",
  "key15": "3LZD8L1EAfCXbzuZthzb4qf6D56ad28GiJaixfi4KUZSvRWLS2TemXYEKpt45JJHSukGqzimSMJ2gZse133dxV57",
  "key16": "58ZDxR4NtAxiTckeb3ex8yXLzACE3whsaMYb3AfWehTZEqQAbgSUEPKHcbNLZcsCAprXYpHqGqJy6WS4zP8qkdsL",
  "key17": "3ZAyF38Gci4f4eAQDHecMxut2oL8DsCvfXNFo6wfD6NQXQxxSdSASXpT7TZ8MrkwhvgviU1e4cMHDDH6TngDH6bx",
  "key18": "3NmLQY6LyxavM8C9i4B8gwn1VbnF4YmqjToygv1TPchCUq9wSovevhDK69QhW3E3mdxhXTWb4E1zckroxc4HbjJu",
  "key19": "2ptkUxSoza7jwc2pygx4pE5AY8FDJfEYSHQntjXUntuaz5NgLZqtczsP1QrHWCy8B7E4wttS4sikVHbjRREA5yam",
  "key20": "3ATWwVBQCZUV1G6aWD3rXG27XsQSXfE9X6m4cFwLmkcNfHwzVGUv2v8oLFSzcRnZba9UedqVxh8CgFvUTYKHnNkr",
  "key21": "3wpuhPwaBuQxRQvoWVjeqKAEHMrDPy4sHjk85cGtdjhRCYddph1ophwQeiZkcKAUCvGksupf5pE6Ah1QS72wEcAh",
  "key22": "3n8QwPPGHahLfrmnkNuSbhfqcHGntryL2DU89AVz9jmGE3eonJYr94GdDjLwBotLP3PfbumoagPxfThHCnP497ck",
  "key23": "61kkBu4HeVH2VnpbUzsnozTzapRyYzAtg7Y5fUN7NB1i3TP5VmSM1uHfZ6bYxvTmYVd4xXyHcZgbhFRY3JMJbdtK",
  "key24": "48UUDRCxmQdMWn9FFpGyV6e5X25wPxhhMH8dp1pgPnUEsyEczdV4d3rFUuB5ScM1qNNUcKzBpEJZUeXNogqYmEaT",
  "key25": "4VWfbZBZRUhXv1mD3QR9yfRhnTTb2KGfktmVRsTW4oKGVh39zqDgDVfC7Yu9v29KCmvr73XjCCW5LJk9ynceNaPH",
  "key26": "328YDv4LsmBRaP3DhmpjJ8kKx9cmVvdXF4jGGBkFKQkihmWcrQMjeKeAodtE4QcwyDXMDZzAzK5dwgJmVqrpjx8k",
  "key27": "4i5t9aRYN7esrQkccesvdGeHkL9G7hhQjAuLN7y68tTDqeMmg3vSg84V1ERYFG3mDLpvMRg2fwMCYSe2S1irfF9G",
  "key28": "35eccMshS2566uWzsw2XhfwTBmiXRxGmX3VbZEeXEDWymSecERp9n4FKdhX46fRPfuRHY7SwbNQY6jq5Hkebyxc8",
  "key29": "3BvFWGqnZTqB9UfsJZMbhBDNKJjw3Lg2aBLb5rzw1JCMpmP5rnTPfbQb8CK8gFt4EeV8MMgvzR54D5DKEG4t2ahx",
  "key30": "31CfYuH7fhQAbU5yjfAGQ9EAjaepSvdkZRULxk24BEKpSm8xi6x2aT5vyDTrvmysFPQHkda5vQdGGob6JPSwAk9G",
  "key31": "5K4mK4ggMuh1xnk2Z3qT2QX8nRViBgh8CkPkgtT5oqKhZw3SYVfXLUya3aWBWqJVVRuPuaw4QE6NUJ5d4UVybpQC",
  "key32": "2zGuPvxxAmJuKjSKQJr1gBDcqbaBFST2SShfTEhgU3V2guy7W1Gd8ngwfsRFY61tUuZCy6dZSqRfX9kjweUdjGWx",
  "key33": "2YWQgB67VRbavMECrafKXjWkqaEX15akTj78YCy84TTfmNrzjc9DpTiUsHHyG868eYFqjKyiLkZkyut4QfXpgWWw",
  "key34": "5qCAFh5z6KMyEG1SsCF48N8KAcwXsXijyUTMLbXJgBgucPKnieAJ6H8PUfLj9UXS6f97RUWq9Q27YxJ9S6N51cg8",
  "key35": "oVDXU9LbhjYmo9qC2AbtPF8yz1M8ab82VvLQxsetcDJe8YqFJtbyfG8NK2wqEDvVYewmASSBW4Qaf1oxsSFEnew",
  "key36": "2SYzRn3vGYmpC12tXH484pueUv5sdyBogtTWaJwyhieeBuPQEjTAVdToCbT5RBiuvJT3nKZaStE8sA7Wzr7azKkp",
  "key37": "5XtA2icPU8QQF4Mqv3U7GvwbBpvnWMUz8Jjgb4tpFFPpBvmWHeBUs3ofRq6w11s83PaM25CvuLiYgU5XdGYLvo1N",
  "key38": "HvZdUPZQ18C9rUPWtNyTBCRaxj54uzwpqAdyzKqM11bYbZdwszNLrrruTQwRzZn2scpYb1pSE2eNWeuuhtCcWoQ",
  "key39": "4qcEqN4bWQjE3MRsGoW3LG8CC5MKxbNfB6icRSkLXmfZmwtLgVutexQSuG2dU53BeVFREcFvsJZTUb4JQkdWdtBg",
  "key40": "5ZCkqQ8U4t7848ArvdcsDHoPPumMTeyMjbLdvnWd2aUHxoSXzeGj5wbaYJ7bcsHeNFLqT8z5yCCEyXbdAsLL2CNk"
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
