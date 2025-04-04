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
    "FW4qmZiSyFoHSMsgGDDUyp57XjGuPpEjvq1wCF5eUuZMPBFYypCcZfNPN6Wu89dA1zRC74usihQNhscf9VfLZ89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ug8vhhaXZgUM9jNevtRxjnVZwckbZPcYQmaL56uWUSSQxhD3nP19Hay2XrbRC6p6atpQYQQYSNBTLzZA83URAUt",
  "key1": "2Gw3pnQN2oH4SEPgxvMC5ew9JbP2Qo54PpArPZXe3raB7a4LVfLMByZkSUP9SzjHYLWh2GQAage49pwqvju7JPS8",
  "key2": "xrcANy9TUGHT1enAq7ob3aVFEfg8NnrjU34jonvMPZ27F6whftEgSbguLLnzNuXNJdAHEsYXYmKxbZRU38CPEfT",
  "key3": "46pkoE5vTw8ibHGA4K1tctbpTbVttyZ4i5pTsKYP3PEV1NhJ47tdLW1VYR9CrA2CKVexbaSqr7SCkddBo4iN78Qk",
  "key4": "5PYYWHEmc7yDh2a6dtgTXyYE7viBRnEFfc5fSj6JjbBNYrYFAeuwsKKj4jhj7gycZzER2xUoScNAYiLX396Y7FWS",
  "key5": "2ckbtGoD6ysKHXJ6JGNYsEhxFvGy48Pj6AssPgnnhcQXcQZqpehrDNFwgfiehSxDX8kvCE4Yb5WWp424QKxdUJBU",
  "key6": "edSRkmdaMC82oDCXyrjArPbyHcoBdWnRSbkcQTyHWzmFyKq5sYRVj9R9wFFaDdEqNPpFJHHYrpVPjVgUPrEmNMK",
  "key7": "NxWmP6FbaarC95yQCSeoPBnX7CYMHQa7JqFTRb8UHSBJvcvtZsTK5hX8qatWLijanrRCJs6SJhdCJ9wHKWm4W4p",
  "key8": "3CkWvjxmHLQTKRnNL4udUVZ5awZzVCvyCKPNvz2WYtQN3zwFiL6xEaZN9CDc6aehwrtvcGR7rhWmVDw9on9tFbkJ",
  "key9": "5MYCqobinYofTY3fXXjtKN6FoCdvet5g648DLPipjiTLTETwATYdj675zrsTTpezRGsPxnNaQ9QAy87MRU5aQzWU",
  "key10": "4rEk9q8kybJBVXYUm1NZfAmtuwby79DjzCdfFDDHjRZJPCG9c9D2wuyafAwUhgzAfgDJN9n4PSxUL4ho6sGKKGqH",
  "key11": "zhFZCTzpXngrr9B4nNwTmfaBrHJcBKDaTKujHaiijqti1p13j41VSrj4KjTPhsChiDq2qrEBcZmypamx4ZzgeVh",
  "key12": "49cwMuTTmGkvMTaKG6i3c9YCkJoDFhfg8tNp3a23sYHGNnyQW8YiKb88JDxMFy2WR5g4dSzQJkTLjFDMEdV53sZW",
  "key13": "ebYFy8euSHGtZNeboNZu2zQWNu8GmR88rJ87XWsXGb9CfoN54MT3YviGWznvrT5MXCoWr2jSrfFBX5zusTQdPBk",
  "key14": "55cuDi2cMT1ugNYoh5hMMYiNgmUpiSvivnwzDa8b8jEUvebUYfa4TwP7Sp5qGK6EYmSZKcB3QMc7zYvRVS1hkDXA",
  "key15": "eUSXn4wbwNq1rvTWVk1nPtXp9s4PFDX6ufPBGhe7GrBy2kmCTX3swhSjJdQ1ACapCuLg6vjzqP7kNinian129UM",
  "key16": "3BhyYhBzRKAmW6DrwCDs5ZNyzq6GBsnjMPMXiWX8H1JNF4LuDvvRzQwsXfrVsoxTFCVhy8TVyd9irnNjmBLYxkdz",
  "key17": "2Jma7oh3JrzDLat84A35JJPU3LDS6DRKLfzbepbnkghnPVRoR3C6vxSC2GPiUXukiWhTTw8sQ9eoTbRZYqciQkYQ",
  "key18": "2pZ2yHj5KURKrZnXwUwcrfhMsGVKA2tBK5VRhEGshRv6ETYb6zriAwFiKPMiEt1QvHzctEB8Uzr8aW3rVDi7KdEH",
  "key19": "3YmoarVdsnueCnLKizwaGqLPhVMY7Q7qph7DuBmS227WsRfDduBwba5w1VmyqfwykcBFJisqqSL93umVkr4twev8",
  "key20": "3DotcTDt8wpnrCsxiM6zcJmjcghu4p1VVDfH4VXWS1TNAcucWFcqLQwSxbL1wToNNVQapwyHPZNqutVzQR2YLTHn",
  "key21": "4qtE7H6DnnhZF6bSGVG7yPdASdQoUszPyKirwPVmjrsgUDRrSAgWWeTWu7G55erfUm68aJpMmtFV8ExmGY2x8PBZ",
  "key22": "cSw4aJAFsVR2eQwYJ2hzMaee33hZCSuasdh4T8UAWD9WHFcQdcHFr722Jqn8iZheioBHassnCiLCA3EmUNLgFth",
  "key23": "5ZveSivTv1qoPj3SYHJU3TRSn8mgGSxRe99iFK5JLcAdYsh6aSA5YNjqEvoXkzXCWSrBP9v6uVx6vnAud6iNj9Ma",
  "key24": "4wFxCXnDCbvra5keJA3mgb8cXqZhy1RjbwyXXsPM3GrBRU6rMFYX8SY8jZ519SgJuvxUhwfxkTDLjsqj427h7tup",
  "key25": "36gjLz8LX5n6pv98HnKVGwhvARnf72Dk9uWx9X9epL2GHCabbowgL7jAzKNxXLBeEzdNFTGJUg8YHcndgeGmjrNy",
  "key26": "4JkjSUwY8iG3TTZUhjAmanCo9dLv6CcmiMThS8mnXaVq8wUphrwJjXpp5Gm9MguS4pif9PELLmDR1SdbjiZ8xRsv",
  "key27": "3RsrDwh2HKcK74UtPMEBeyBBPrgKex3chkgCadm9asD8GU1LqZnmJeRkjYMb5iXW4RpRd9xEdjNVtb9sC8G2N1TU",
  "key28": "4FupJtxr9UkZxGJb1z7cSutpQNLBHu6qbsDUDFQUpQj3RmFzFEoN5wpCnEFKRi1jzch4AjBpHKUGMwepQFwPeFvu",
  "key29": "4otvXKnq1z7jkMpMwfsvCXG8sTeiVWLYN8iqB3WHKn9oA4pyp8gtcd6iKyktHQJToybQYxVtVKHT3em5FnyDpF57",
  "key30": "LMXTJzvjeqjVfb68SMSbwNDQYWGbkPpnemJEixRuQQBXmu6eeJQXb29DMgmU8S3X9Tbs7RWWUYQgR9TiMAop4w6",
  "key31": "56BS1EDqL6hdKWsBWADMFDFhCxnjao3zte5i4J7Bwm8f2E5But5DQ44Zw2V2tvwjd8HxhKA5cQivXuEfBbkeywyP",
  "key32": "29YPAB6UhDzWgZT3iucB9FrQ4EFKDj8ieaKVmHZ5n7pSSbXJbwV5CqRq6TYS22p3ttEHSVWdSsQjW7pUNFXopX44",
  "key33": "32ghU6xEpPqzduY9VPAT6XZpmtJXuyv3brgSWRdZ2A4QRMdU3TE2DxrunruJprAs2DmvRbkLNL4ojEQYQpoJKtFb",
  "key34": "3LLSGKaDt119r1bLoH22yy36YANxo6vGgMTrDK2KvAieNTosEyznHC8bAvW7ixfdTJARLtxcqpAt2gPxAmn91YVU",
  "key35": "ox2vpSfGQsSDptdRmaL715WjD6UmDf35XG3N3Fi8QMWGkeLbCHPKe1Ry44EbNDm71hqWqgRxRHvWEVvVPKyTrrw",
  "key36": "7Pph15bqwx1XTPszCrakfaMX9yL28ZcXBnx8C67TcKtopooBhhms32anqSTACb7ovqUhgRzXarYCtNFWqXT3FDR",
  "key37": "3e7VG2HKunn2jSYfq2m1tExWxTkFVPUHSaU3w4bzb2xKcJwp2sXfE4oSr6t4qvhtunRXzA5YTM4wbqea4peFsJTi",
  "key38": "3wGWbxT9fx2kESRejArqArCjSCLMeHk3pUPLxh62qQA2CUnXx6yV6X6sVKrFkdxJrDCzswYAhkj3MHf547V6tZcT",
  "key39": "4TMJcp6YjBnChFVCg8fZ5726WSte3FzieQFE8KAwYMB1QYEhLyicfZgUDvYENUZDpVSM6qbPmAy1UXGKjcPrj2o",
  "key40": "5NRDFTGTEyCgpuEbuKkSLb6uQpxwJPAKrZeUxsjJXGq3hqzotTpotyeboZNTu7TSwRhhSckgbdEFvdTUhcBiNEW4",
  "key41": "31PtgoxDdr4YenBAd4rXCCHn7aJ7MDkQygvggD9m1kgK7c1CYUK9r4D9RE83EWDv2h64waP9anLZUD9y5gTJ3cuE",
  "key42": "38zq6BMTswYvHNQFnMSrnQhDNbbHor9Qk6CFU49VSpLchZCJopGrC62ndMjSxP6RyfKVLZ4xn3xU8UKge11ifan7",
  "key43": "366FC2j1HmbgpbMnbhnkhetrBrzMtMk24v3RaN5gS8p5RPGe7CjnEsTziZKkjV628GqCYCWdXb6oqjxAHbxDtogi"
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
