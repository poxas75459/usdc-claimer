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
    "223yjNidVCcyjycModyZuJRBbM2UVUyGMVMgwwUkVeFHNsbcxDqZ6B9hMPSt4L7igDULYCSmvCwVujxSR1MFwjrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VwCBBCPA75B8yZMJkFRQ3bWLZs6R9r5D7KeJHNSaivUwNLkvsheNQQKyhUGxzo1orjURvskfQkDndENSbUHA6du",
  "key1": "5p56T4PqZwuKCNYvK9m4r3tWpTwi42UzW2AmbBGRGVxjk4HEgu2NBBfQ9inBbnfJss3gbR4w3Htj7UXzrUy4JepG",
  "key2": "5WU8WeL8uTGJUtRX9oeAw2GQMJcP24GauKoK1mEuafpMfFn11SaYb7EYKR2eGG19r8e75ZLhKNTKwwe9kZT9yp1G",
  "key3": "26ZtMfSMCYgxoSBUM1rHqPEFsvSp2tQEQX6aPufBixCy5qBDwwiKZvb7JC1vNpGYPe16m5TMV8PwxvHKzT8zs28h",
  "key4": "3Y6GZ3nqwBxqvoCygamqrYQUqFfEzDYxRKFb8bizKqAJxMobBovTbs61gNUc1JhMhDeysHvLhDb2QcC7uiiUQ61r",
  "key5": "3T57FaG76nYcnP3vqvcgUsgB1rS7yqwDdDnk9R3Xhp8eQX5HmwRuE3xuyAMxuw52e1gpDt89shXTExZSUEWGC5Xr",
  "key6": "2tHeiYa16Jm71sWBgqo3j8JaDcNQ9QaJL6caE6P6FnTd3cKBze9LTrX1yyzkQGmopnDHL2VjQmt5tHntM1XyWqyG",
  "key7": "4jJPQSb5XoA5cohUoevQDMzKvSJEM7yzHmfgMcS8BM9FEb6GL71ckmDrhRN4N1ngjtKbuKfzSCTbDcvp4jN5dBsd",
  "key8": "4Tfb9fkpkpRBFqXha5MJNS8PMbtbePbhAWA8daEvjJckUKsmDCQ7dsXz9m3Tyz1JDoh4CZSajT5dTGUJUaYc8745",
  "key9": "4LvSxWgBgQYKJrdEx4CZ8TPhNbZwNDYd9NP2AgGsBngPKQDRSqgBAtL4tHRdbD8e1fobAt2CkETz5xAr9y3TUpmS",
  "key10": "CKyGvBbYi2N7j8rs8B9rFLwGC6VuqCmsouG7QiMS2YABjg5SjhnVzyVcndwEzJ8xefctX2m7h3vtxVfD3kVLFrS",
  "key11": "95rfPAvzhgLf7ZuTa44xE1hBs3k26bPAx9zmF7MTK6EoYdEwvtxezX2rXv51YAb3RSUxgKJ4zxtwS2u4cvSYBKs",
  "key12": "5rh7gBLSss5fEeyKfhABbttSLjXXe1n6qgVVgxPv822YA9Y4rtFphhp2hw4HdUoeAtDyK8AMBoGJg8DXxQj69eMw",
  "key13": "5eH6zmXxC6c7dNmRSR5go88YSmNZw6b3VaDRfGk5zFyBJQLNztamHSQrJ6QuzjHKKZyEPqNby5EGNPehnoZgJd4D",
  "key14": "5a9bqokhdTwGNoPBrkzt1cxNbvKyRYHay84CidTri3qznY5eJpik3reLyj2Q9nGqEAv97jQkG3ougvQ69ZWpbXRm",
  "key15": "tJvYR2FE2QQe8YDrgkWNknyiecLBHhXwUbRKYqPHMM9DGFwyfqDvKYY1a6qE8184cNS81PMuFV5ZVktSiDiBwje",
  "key16": "4gJvKG9Pvtt3wgXJHA9PNDeGEF2VUCsmyRHKUjxhFaJfwHPtTbEzEKoVygqPGkG3W8X2Xjt4wNS2kW31rxfBv7fv",
  "key17": "4cEG2ofwDYDbvkYK5SSFQz3BnQx1pfpT4pw7HuE1X4Wt4WoZCPdbDHFUYEj8wyGfNY1uWcMxqLaxhfXGqeaQhFW6",
  "key18": "3dPKDFU24HoD7Ujm8cJrWY1grvkCENpLZXctyChYL8pJeg9rB4nqxpiJmbVBoxc53chN89k86VSQNzvbqxcuQgjm",
  "key19": "2BLGkN4GonWQD6jbfHwyuzfMAfQitys4TewyiKxCRjB3My1BQdZA88srTBtaCk3hN8ESVLyzmFb4Dim6zYuXPKSX",
  "key20": "2cbZMkfQ7U9USAd6CExw1LDPkayZRoi3d2gs2P15mkQi4bDhumqJNwmpDLZ37YaqJK3eNAoNDa2FwFR6CQm1YWML",
  "key21": "cWMCX2a2JLeCdmRtMqbYgsW1Zf4eRzeHFrkEyUwiHGWw3Zy4miHH1eEZTN8fyMaUWFMc5q55yVXMwFpW77AzdcM",
  "key22": "4ZnxkEY9rFTSTJ6yMexaDiWBLvuQ2bGAJsBRrssfQpmk6Kz2bR49cjNodeob2vxczg1CAdfuRq9vxb9XfHLinonh",
  "key23": "655xQAAiEv2Hc3RCvUWV94U7DJRa1HQFGKSaJxYxiL7Gze1iHUsAUMNbPtk8ALHZXMXnaaHCzMXBa1AT2ipMC6Ew",
  "key24": "3ZNWjbAQKa18Mhx7uPumt5vb1X8phLDQ3kyiH1eYFY3HUEP5FvARe4JaXNmiatETykJ1noAuQVWz7Lr8gvZGJDCe",
  "key25": "4Aj1tj4UkHWgEsVBhAtaVVcBkeeDUX53PY9CbgDse5NASkrBewYpt5Lb8T3hTTGAWDvBBuicMLxYwGQ81mU7JZkJ",
  "key26": "4GWQx69eqKekxFv4Dh7kjLEg4XtH86gGbS8DXqUnArYqRC3bZC53QWE2PKHQFU9zfPsTXEGahBwqGznZqp4RrCua",
  "key27": "3hvVK6d1JJQ8bsH7gQWeVkETrkj5n1K9MYCZSGfC7wS9kF15LdYnT11vZYhcXx36WXmoN3jhzQz9j7tr6syNeWgF",
  "key28": "3dWEntsRyWgNfm1QB2TtsiR7gMyTsAJd23KuRPVFEjrYqFsDnVndfQDG7XwzHpBptXeCVq7nEuTR4WMnj39Xma6Z",
  "key29": "5i4LH97ZMG9yPzSQ51Lzgr7kVoYmufy8LXssYACi6kBk72SpXh36U4Tc2bVUrfUpN7zoPhq4AhD1rGUBaqhfHaKV",
  "key30": "57iysjxhucAwEwUMxkB5qxgJroxzg3hkhFPsVaQD568yM8ictwViHw55Qm582C3NTCAf2xio4on7aUBFyER3ZnbD",
  "key31": "5W2GmzKVguNGfeqVt4iLkwvdNWBbZRZeLqB1rXL8aMZjgUQf95YUmBZfKNFkoZeaJaQUuFcuEadjFLB2pYE6NmJw",
  "key32": "d9adtKPw7aVeMtTjVRXPVbtGW6m3BaiRMVrb2F3PXf2nPboksnvvFkayz8agzyHxpZek2SiYxc3MPzKM1xYrYEc",
  "key33": "WRY7KoNDgRGvK9Hr6FouWtVE9khKqjGipgAHVYU4M2umsk421CQ8xLDnxVQ2sfJHqALae1H6ttXRrWyqvPj8Maf",
  "key34": "2kmeVH6asQCExjZizhjPqregojuLgEg5xtXCfPwyQhTym5ooQreh3YCgangN553zhjevxgaWHtLBTDLbdCdtRMGy",
  "key35": "5T4pE5X2pGHSUpqbtDTZjDjiHaLE4nAsUnwzDe7QzZwt92YqLbydHVVdPVtfuL9ejxXZV4NeAVygCp6H2ieYcadK",
  "key36": "2uNCtj5ZJLPDqAvQpwfxFPTBqCzJc2VuQRSC5u5NJKzYAR6Nqt2TNwXzayyYyAsSWNDLK7HyJJu43bzypvoJCNVe",
  "key37": "4k856VLk7L2RPch3jQXKeBHxTMwtgbmSDMSCq6zQQHiYBh1pTZAiwYMN39RqDMWvAY6TB7fupMD5L8DjzjeHUMuT",
  "key38": "2YXZN15fitqXtS5FHi6Scua5AabYuAtSwHCaZqcsueRU7LN7xyS89YzAe7GjKef54gaUN6rnYtg55cVY28qXknKh",
  "key39": "y2iwwV9UiBxnr1k1iMwWb5oh5DDh35E9YeJ2bihiZrFQqLT2taETRGnrfafHyYVpKmNb4BYCgSSxuiR4hzev7Mq",
  "key40": "219avHSfDXWWwdHAay8fFKy9BKYXVEygNTmx2MdG16nxApFHfZXjiUDU9rcFtWbK1Mdf6ovVySMf41rzyDQhXQcj",
  "key41": "5HapHhfnh1EpbtAJ7EiTeyw35xFPvFPynePL2mu2LJmnJ9fdMScfCErYGPQj2ZRTdn4iq5iRddE4WJ6AjH1Lwmtm",
  "key42": "4iCH8y3EobVTcj6n4FFSriBPGwBQAtCoLT9H4PxZcRVRZZfL6akx74hTubfuJwNxytjFsyR3n2oXCcWSRtzC4VH",
  "key43": "M2xi6E8kq3v1qiDaDcew2nKTczRwNpHFgBUqaayjXS4NUSLbxKWCg8o9GWwfsyrdexNi2u5Fu9kkRDF5yJc1mat",
  "key44": "38UVkgyv4i9AqJuMF2HRJvj5CHjoSu24uF7KrU6v8aCaaRAxKnSRaMCF9d8pfcQMdyHUyR5mbphNZcn38i1nSxj1",
  "key45": "2dx3nAFv1RvpkdNV58rnBLQu8oSvKeyLxn4EQzyHuaZAvwf65hsrzj1sZTa7GUmMM4oq5jdFHay4JVtcTkhBm6f1",
  "key46": "szgYPSUP7JuVpWw3cFHPCaJbTKRx7aLcZuDnZPcWoTr3WkUn1gH5rpgG2vED7ay7nseESC5w7nhoiMnD3qXcNLJ"
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
