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
    "A6jKpJ1FNUq5ThcTW2XW8kZxHKEkLJxH8yHJ7tbsYgrnv1odb5sKcDVnHkKRWu1o62BZ8ehFyqG65aRwyFWGL96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ot82V2svYeotDe1Jr2NWk3fKqjex92oyh5MWLqA384M4McUaeUyCBqwem4fvkM1cvao6ovv9UMqH6XtqhjKSFGU",
  "key1": "52QgLMVu21BXtcoYBhEzGmvLmw2DBwnz5kTFVbsAaGpaLYTVrkNc8q6qPEcHVf7y5W8TmHvKi9rov27Be6i675xF",
  "key2": "kJtqVyni7xAXX9HezsMbB3ik1DZkhnpgB4rmfUnubpbLnGFGJwQ1i8eyDFuMi83pgP8ocexexxu4zfPEXvQ47Fe",
  "key3": "45AKdhhQ4iAUHKKEcAkr5FLm6eMgwncSnFfwuzvytSh8EKtb89NN9gkqA2TGXJWNKCTEdEwCQ5R19Bn8xHdE3aAq",
  "key4": "54MQYEyscWjHCeJcG748CxF7eTSiUproDxnmrDKTVUqVUAULc3dNMgjPhg8spTMRGr9YkfLNQoEdzQyKdUKudoqN",
  "key5": "4RLFrDNysNmmpkroeejFsyRewqLisrJ1F5LwrqUtBGowPFKXNdPztPFKC1raGKRovLTrb8k8Mk4RiMhXxVUgFeCu",
  "key6": "AemC7ws7Sa5RtbWEiYKMSpkCcXzKkh15iFir18bj8Bdj2MwQJmz3sj4qeV3ZmsdUXrLVaG2y8qiRtYaBVL4RAuQ",
  "key7": "HHeMpty3BAmUNpgc46djCWqAsRt2wGmLTbzW9FNw7NRGf4PSRsZ5fMmwcHQTJ3LvDnDToVvXLdRaygvti8WbYG4",
  "key8": "4q5xrwiYa1zfnGuUw34TeEeXaFZvqU2cqcHttxX2FEjLqG8Ph1D8EZQiRHDRth1vmFoGTG5wTXQmWoVtDnpvzorW",
  "key9": "FeU7sE1G7GMXiBmU6cLdvsuoxo31ouagzg4F2yYJuwbcr3uim515pczGfPPhTU31cLBhPyzMLERUhSW5jnn2KiH",
  "key10": "5RFPJfWLB2L5zknLNu5t5kHvgiXsoCcaA3oCK7xLZisukaJwkYUJXSoJKX2wwCGcJioAvs5MMPQ4r6DLEQKa4EUg",
  "key11": "4eevY4XMyVzSKTMzBsRhKTEGqXQYK7iaeqRZczkkYVh4kW42jQH99zdTx2s3Di7ZBB229yyZHimX856kuswXFDL",
  "key12": "4aDdyGrCWGVSK7TjiV8t4rTHm18hvXVjft8mtxyVhrBPraGupM4hTLJpCVK2NAYJf9hdaCffc5avXBFvbCGhvy8X",
  "key13": "2Lp62SHS8XRUtRWytsLTnSxhtSjDa42pUKV9zA1tiDJAsS69zkQoTj7hU14PNWQFLaeNj7xQE5sBjaazun6xKzCU",
  "key14": "3JiPZb4Ep7nDzpMKqJr1GkecQq5dcUbirdDKaW942YcqKPd6rLuQJxtDrLeU3kXzWnaYxSrSLgNuUQLDNxPgqto3",
  "key15": "3pae8ESP1AzKaiMwT7DdMfjKYe6c8Us7xWBr5wJbTShyWdcAn8MMPj6qtyYesmwfwJ4nGPTMxbDEAr5MJSbJCoQE",
  "key16": "4fqvQTFM48oZ25KBC87Wt3cJ5dDbfH4aHYJVxc4XoXymGsVsC9xFGsCdFDrnixTxsK2P7btQAHxWZPNabLanZbS6",
  "key17": "kdU3dvzFq1HiAsmzf6t4zUmmorx6YSDPxu54X1RZ6c9mys87u2KnjJ3422UMNjTSx1VHBVuKBtjJBpTZ7J1jYDs",
  "key18": "3bBn54e4Apa2P8MKabUyfcVTS3GvwrfiSpbKn4RA1avzhThDPs8iwHeLzm22zNm2k15ADpaUyyztqYZbmhK4DruU",
  "key19": "5Y95H8JzAEqhQKZV41SNez9QQNtQp4fJeCPgQPjwshKXtH4pHU6Aea2MCyMzbDyRuEJfYQ4G33yxT8x4jySgoiAv",
  "key20": "5ijtftaG1qLTqyqEiCfTZPxqdWxvrfKtsYpA2TAmGsKGaUSgMhhvEBXi6z5H9eJvGZzjSqx8L4n3Pu3f6d7sNbPh",
  "key21": "4AEoQYAqhQCRn4D6oHHTbm3gRbjGPwEejsH3pvqk5pc7yTtbd1zbcU1iavw8xjqhT1FueWUSpHYGZucjhDApihL7",
  "key22": "2eXV7QbmYSHgv9FJZyZCQsGD5AG1oMA9YU4X7WUvJ5yH9ZfBALcw3WbMVCubUE8uTMugByiBEonKF1F1Si9E2qE7",
  "key23": "3yFcECLsUWAwicgiGUEXhufW1h8mrifFzV6FqUFfdepT8VyP1bM1KUzgZf1moVwyYs9Zgx7ij1SE7fgoegjkEdZh",
  "key24": "5fAcDLctYQk3WdGVFj13vtmpq7YFHHtr4Hsj8mddMdvbrNDY7VSuyiW1q1DFawyfYWLvL4WkTBe2jvgaQnYqXJx3",
  "key25": "5aukP9aEyDWDuwGGFQJnZoi8Zn7NJ99paLSBTniabymQh4JFXFjtEYc2haAJinpUc9cmAjMkpFZ9PyAcAE9gDWLZ",
  "key26": "3px9ixPChCAY3aQE9iMmWhbPTBRkmUJFNKkghhdtFsfT4hun1bmLxmuV6MN7U9BBRVavPedMaVXMG25iXDHzbCjb",
  "key27": "45s4gri9B5Qjvew6JZyWEBHfqvGwbmgyih53LtsT4BN6LCnfiJJwJotPW1f2ve1SBpqjYzzmFuEUmgR8AYZDvPEG",
  "key28": "5xhPAjgZgVf3GgvVsANF9K1ytgBd5Gw8qgcr3nqkENjVxydPym1DNdecgBw6rtxCn6TSU2192J5zPDZQdzzEtPiv",
  "key29": "5iqviri2hJg1jBVSvtY1RgFwBBF3rS6HR59ts7dSVgkTrDhxuSAJbZsv6VUR2TjsxgKzfwkiWFVtX88CXaMad2m",
  "key30": "5gAQmpg6W7EuTzJ4VqK8DMcV6mRvCaeFCswt88ZG6Pvf5dqHXi26fBSDpDWhL2Cwo8A55HRgP5ekZCfgmQpjxbYU",
  "key31": "9Ztjj37uDeBmiUxF8S2nP1ycSEh9xQEcBPEyQqei5c4yZ1QHYSkNVnY5bSzh1PGC32psuUtuSeyj6rGvHL3SeAT",
  "key32": "35TnRnq9u6oiYabJzDnvtaaJdFz73nXLNGxrrXABcSGqzg15TwGRwpkvy3x8CuWMedeQ6dA7noyfSnyhZK5C7M5b",
  "key33": "3r5Eof28aMd9B68uwoXWfPKsWj6JxreBDT5rNCoztSZeWjUKtAvTFWTCQQgVQnzwEKv57PmwxU38KadTRhPDTFwy",
  "key34": "aT1tYoA3ygu1dUPLrxgvRjciYBS4oBWB9yU9C5CwWomULQrXDs2t4DhdCSsXbfoPkfBNNrbLtzMsXVKNUhz5m92",
  "key35": "4C7NxL7Rh7eBisTWPUV75zXaREPvTEsd8qmxs7WJ5sgtM6josycLpzs1MXTUK7grKJxpu8fu3tG4YrLYJ5ruBy4Q",
  "key36": "5HH6C7euJv76oQ9JCytib37W3qZTDVLKhuC3wW5p9nuE8jRwCvCRg6DnsmxhHWNVocLsFGTkKYyQz1Caq64u4h7j",
  "key37": "5cUW2bVVgjtR1QRTGKdMoiojek8LJiGca8E4v2JZRGrB7kHQfNNnBEaeGgoVskMDy9QzbHByKw2XXnupfERDivcZ",
  "key38": "4PmCqaHzm272xPhmT5vj3yMJShTxqUqyxSYdeCYZijEVbgKm3DNgXjhoj28aS4y4e2nSHqqZPFJ89VxzoieK5Pbr",
  "key39": "23yV6VVGgDDVyTnzn4oebzjagVQyJbvEcugsqawdg97AJXNqmKvme5icuqE5LWNLCKRLtLyHcHpYX7g6v1h4R9eR",
  "key40": "57xgi2Z5uDDc81o9iEMC6soHHMif1fnqtw4zvUNC3k7WP465SWpgHbbhCjTMwtwxtm5Nns9Jz9hd6d4J597SGtnW",
  "key41": "57mSN6wA58XS7anbdzWXLnrWVjge9CiUgovLCH5qod7A8mF8RFHZQh56HFxGhZ6i9pviX5dqTttKob1wm7iQr8rn",
  "key42": "4mD55GntH9bzZAKFAL2aM2cFj5tFt6isHBU6RsLfzoNcjNt46sF3RD3bDgvWJ8tYiHpUxPsPfgAb25j4s7dmjKz7",
  "key43": "3s51jRKeerUjKuQT1CS5bXXz1dqiKUNrW68itrjyhiNgpMCsH6WwFqvbCwCS32KMqTrpna87j9jWPQ45syzCK6hZ",
  "key44": "2u5JGLtULfaH4Tj3qAURTTwqC5E6VWMMhBMC9PD6gvfp2ki3F4Zqp95nRs9Am91rHTXsZvjW27TGF4RrHdsAUnFf",
  "key45": "3pzm7swZdfSeNPCRvdypu45wuamCGr8eWrge5CP8fnuDB4RVABD6nm2WMLmW7ojoJCC5Pspb7bt78jP3um4BipiD",
  "key46": "4EaimVLnXHcvTup1kMwYfbxCAiNSNLJvdNozAKueuWw3wJH5vhb1D3T4HYBdsT6rygKaGFJpkq83WhLbdaFtwzC3",
  "key47": "2Baqzypk8S7ZyQVjxTtN6dNX8ieAukUK6cxqjtx5XWHLfoidkzKdyuxMrJVdMq3bRpLyDJBgCA3vGHXhimUnp7sc"
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
