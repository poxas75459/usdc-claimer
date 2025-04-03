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
    "2hZjCZUeqnk6xys1QwHHWkn5iL2Sray47oaAnVx5r1hWMBFdPmhQtp3zCasPbSJFbQZU774ztAoJNhFYhpBr4Noz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebCDPQk2EsC4oAhgKxwbonPpS2rDo6oocgQM9mhfk3PYLevtgihdmL6GsrTDYMKrmdXDy8nmxBhkep3PwP2W9TD",
  "key1": "wghdoCFXxdPdpzTbBjwVEk3gSdpK2cX2UJAkrN8ELRSjxHmnMgxupoyyUkC3DD5CMAKdkBzywmLzsDgeshKpNsf",
  "key2": "3TxAirxLcWgSTipsN2YH8wbLR9cvNe5NvvnuuhJZ9p89kGVUVFVJUbbbZXtax4AWwNvp7WyMdxu2pjoe2Y7GGCjH",
  "key3": "43vbdgXsE7xwkKtk4u3QuoTXH1fZWcbkfSQ9RDaGPHkJbyLrvPBU4dQRRJcuFymuZp8BFWC6juGeaYDAqVhJAm3q",
  "key4": "KeLdDQNGTBr2QizXpQ5Wko8dbw5Zp63PnVFoUWJfzgGioe4aSCwi6ASsg2Pd8Fxg5qqmqZE8aBeMYSvMfaziy6V",
  "key5": "patgCFwCqZd1S8epvzgKayS2bsjoDYGWtEQRdfuK9x5YRg6zhjHT4QqTHQLK81znveurR5riDDhU72BDbDYCYo3",
  "key6": "5tjbJjjkDWs8FbRvjXU7TKyhxpwmoL7tez3nvooDanumUNSvPtTQ6jej2i6ixZvqdgGkVgFWC5GEfPhLHYZHzCvc",
  "key7": "EtJW9BVRQq4enYJo1gpjdbKNrNzfTDpFkVbBNMhDzQJqQDT9vbUhJEbVFbjBCmv3qje61GYeQ5cw8F6ECmWrgM8",
  "key8": "2JCiJgUdgYP28Cx25bednKu7d8tAz1dKrdbHYny6RZnkHHR56ooQPfWgzC38ETf4ULioGvazwMNZ63mn6jyUYLrV",
  "key9": "3UoUBePHzaE2ppDqmtBXszR3PJNE9wDM3p6kuJDMABMNUni4EqMZ9AKv5jbpVVvjbX98LfbUYzwZMdnsUUEHPKdd",
  "key10": "4kwUziLgPgCJeESv7KpJBVaccHEUmAAvfJmrq1R9WHX1CGtVABjPwgGAMMGvNUba7E7yauwPs1Ac8pPumrh1dFZU",
  "key11": "5fLqr7QVv479Kt9dRHceSDGwZzj6kzGFKHrAycmJMJoNCFqfPHL3y4F6etp9cvdijAXJDgrXEdAZJZN5wcuHpSpi",
  "key12": "5x7T9fZwZnozKFNbuCY4YgeKh68EHqbuZMYYmQzzbDfKatc8PFGCFWWNWoxPkUoeXRBVokxuFtvVDcj31KkLJvMH",
  "key13": "3Lgzr7U6Tp6S6bWntgrR69Wf4DKxAoRhYBfgQKrTAUogEW7GDJV8sE3pnAGGV1NHn6RHYXwwLmhcnnSZeLLgmrAk",
  "key14": "48gNrjAxbWto21TRRWkrV6VMSvKkphXJVRSLTCzimM4UwUUiDxaBkjo2eUeNFVP47ui3dv1NSqXtqhLi6naRYkRm",
  "key15": "59sxFHaiSDxd78dMESDcJ6GMXWKPB9w66FgucRc4G8L473XSgccZhgGts7FMeBkdp4yThmG9WTREdaXf3GmsTBTF",
  "key16": "4j1KsN5UH69nRfokQ37QsphY4HcZp4D9yGHdU43FCkRsBJHUYrkVsZaGd5AjECCWNXUJHPTD3mumRL8jVbhv2YiQ",
  "key17": "2CM5GyFrAHisvh1p7LRUpxeJex7ciXXGMgnqAVv5PTN8engXFgm4f8wCaWeSw1nMEcSNBgZRJyXXcDQzMxafnNbV",
  "key18": "2vyGFvootik9bsHxZT4orCiW92CuZXx6KZwT7UiQAJQqrPM5tg3JViJJwdNkKvQDMx3d2ahw6aURX1SD5CxvZ3Yp",
  "key19": "4Pg1YEViakdsQyQ16ufQgwj27HnAhraSrRwZrCVPKpkcXAq66isfd48SWUyaVcD25JcwofkUnREa81JjUUjUym97",
  "key20": "2W3FqY5gwwfPg3fnzFCFkBvyfxnc4GLqAY7cCuTKMaPZPutMY2t4Rxb6rLvC9JeiQUg6aR4cPzm76DB8tGBMMJMu",
  "key21": "2tk3jUF4zMb9R8kBQPBBpBjVYNq32iXzMqQuGbSK99ABsVm7WZiajvwuhkG3ahD17bGLGTLmbzL7PtY8mqk1zioM",
  "key22": "gtku4e4jh9HTgGRGQMrVhDjWK8MqyPCY5UnwF7vJ7wWLbnZDGB1y93AtwZzo4K4cd5jwk534g4cQWKrAJraEkSG",
  "key23": "GLBgPcC9DdQBjkRxidCS1WVUqgf6hQhSSEmTFLVfjHh2ayuhcH2S4BA6RAvhiJ859XKDsRpwXGk286oNJ7a3s8Y",
  "key24": "3NsUi5WEFD4cCTVtyyuoAH1AfYRKVA5YeMRfMq6P8NBvyEo9rZYPzt4QVYuiNeaQUZZadE85k1LcF1AF3kaMGTAW",
  "key25": "547yDiXhrTSbtUu3nT6gtP57g6nBoWNSBPjrRDqNtEvmXYLEf94Y92UZKhqgBKYcrpch5wwAmQdmQ6cFCCrPKT44",
  "key26": "31SwHA2A4114wKDZXb2vfhpQpMhTEnsPB31A4abnsxMrjde6ueWqbm7TJ5ybGZE5EfLuh8Wbbtw42euqychC7u87",
  "key27": "ndXgXQCrUCB5tMonNQ1rUs8PJRu7zeGioxCmSQFAR8L6KuwPQZWaeEJi9Nv5ENdmo2QvNFP8ZX4hb7xb1FawSac",
  "key28": "E1hEXVkhQVy61nTwy6qovUTZNGmkQEuDCceQEXWWNPgXD41ynr2joeYJfdRXFQM6viGd7QVzF6ZzNbL5NyMUYuu",
  "key29": "3LtY4L6PVMcuEXxVkZLcoeCkm2MRFPFRz9tyNGYq2vALFz1h6W4vTwhpUanY4zW3hu1V78KoBhvUhWmPDEuuw7pt",
  "key30": "3ap1U1ptfC37vK4x8QVZnFpzBz1FjnpzdaJZq7katjnbT22UdmbESK7p4rbJbpZWDe3ozdarfHpUgChd8zdC1Fh5",
  "key31": "3D5hcs6mHhbAMju43gNdnc29UnYFeVksXFyaX4ceVBZ85CFFLCRsgY8m1ZESJQH5KAp5C5QeuMxLAhsKyeHsphK2",
  "key32": "oYNPuJTdvk3odKbqX5vS1DFB7Xy7SDQVeQW4t1gzgjiUr88A16tpz2XjSwRTukdyAuUv3DrE1q4qm2FFAsVrkA7",
  "key33": "FetLYUmiRFquXqjK4xMZEk6uoWqXqMmzR8EY8VkjWEE8m9XmJfoSuEVe2fB9jHaCQADQ7NkroCSjdVRahMGUFEN",
  "key34": "4foRuCeHrybZGsasiEn2UGZ4q3SzzzKoGcs5bMToeEty1opRMeDR79AYycWxGZZ9BpsgVEoWqRvckwFNQioQpTMu",
  "key35": "3VTEfCSb8eRk1hfHjqFnoFsSut4PsYydxFxH2iSQRAaWPL3MVraLR72Nb3vasrFUejwNUpuq8Y4Ntj8TuLBR4UD2",
  "key36": "31ZaG971RrAYDvpE3ooJstsYyvTHfoL1px44QuLgZoVSqnrp3x5xz3kDY5vJQ3j53i9bdQjH1nLUiTyBtrNp2Xki",
  "key37": "F5tYqRNNMW8sfVMcU72BJC9LJcU4McyoKafTrvavpA9YE6wwQfky1fjjr2McYdrHuEHzKTf8TwQ1SzXKhKUzYQc",
  "key38": "2txLRoGGVJ54UkqoPtKrvmJiQrQg2tt5A8DBy6KoSZ7mgLs9xAy6nabpzHABBqtUTZfDf9KVnQsnbgesrFJWoijY"
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
