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
    "WoNCHhSzXJGEyRxFa9cJ5JU45whK2TJHGsXb5ujHm2FN76cbJ6FsF84ZxCmjmh6ui9Br8TXc2DoAy2Sc7UEBZyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jt8T2epVaeHiExab4eDTTS1PPdepVSAXJRJdtT9KGmSvSuj6vJ8HAwrwv6BbdEV1mM3pzxxyAVE4vKf4eNW6J5C",
  "key1": "3v6nFanWVKgLftWvFsjLX5cHLWfySWzvsZL5KDrCVm91yQqsTX8DeJLYHdybn3EDcWhmtw9DEvVek2QtzDMypKXT",
  "key2": "64iDcYHWEnXJbKPzsEa9mbQMiEBvm99WnZZEUYfkm5hoxfiBBuPLqP6wxFbY7EUggVt4rhvdRyrHZTpKLFec94eJ",
  "key3": "5hkzPDSbgNkWYPe8jyUYti6BDGLi817KCsfM3XAK9pc4HmqQs5wFYY1nFC6dyhXWcTH8ho7YQwg1hasGrB6nEn3B",
  "key4": "625BT9PfaPN5QPRhPV9tsscE8NKoQkoGkYT7n9bnCvpB6y9yX71WM2MdsYse96wJcXWGAKArCMdjo8qR9wa2c6Ba",
  "key5": "3E5NHRjqVccxyKa5xA8bfbYjXz5ogfmWQ8Ptqz3YS6r4XC6veQYMy3M8PB5kg7fFVXqoNoDYZJAYMttofY5YCoFf",
  "key6": "5u8saPhHrVADTHzSWvQk2hLGvHkqgdmSrkPPmNngUekU5gFVL9VFSsuPtdsrKZZeyNuTnDei5EncqNQo7YxV6mdS",
  "key7": "2Bt1UBzHQ9CdnMvZhETvpoKZCd1Fykn4L79ZoFwb2y9gDhzrpCBBZH2wGEEZTiLqPsrsqmz8GYNZEtLRb2fN9Hgq",
  "key8": "3BX2nLkH3yyNAovkGS7EEKTHhHTkDnN1woLQKErdvh6oXCNfL68wQjqsuPGKsXkezLidwd7kHQsY8wy6R3f1y3zm",
  "key9": "5PzLhegoJg1Mih9N3Vj8Bgqw4PJiHPTkq6a77QPq8yt71Fn5EaixRVdY2sBFuo22ByhLHc77RZM7PS69t4hajfCb",
  "key10": "5LuqwSsNd8Cz9ymJ64g3a5ota97XLJub1uJkuPgTfAkoydK4cvnWFEtdXJ1An1rt2A3JVT6YdT7KVPqA4MZuBTAb",
  "key11": "5N8myuYcL3s8GHDTuP19qfv9kjQR18Fi7V6wkUyCBSTgKLhEb3MNQ3NKgNhjJaGTSBWPzJWa9UwViGXbXU29m6gz",
  "key12": "5eLCzT9moHog9YyEiMqKEfYqdzZ997kK5WUWuseeENrzePha75Pxsa8Az8z9YGxevgCeosEaDAY3914Q2t1QmG87",
  "key13": "P5sv9zeLk2jFqcAco6Mav21VxCpfCP6i56pbPAc9bFsA3HCNwyrDQpgESSj7bTCyVUewatw3Nm6bmmCh5eBdx71",
  "key14": "5Ph3Zb7KcPgrSSCB4zkgmarjJRqSYVRkxunjpcfhQ48XnhocDeVY46FsNVaEnZckT5KE3zdQihn7KecsqUGsDKwd",
  "key15": "2cptkVReVYz44PiVxkcEcLwkaXvrXPzF5DrNf8JcwY4ZxsYPZqmyCa5qyVVCroXmP8H9TuaMmhHRG2FzUG3UiM1z",
  "key16": "3PxgbbTGsECYnX3dxtybUAktPtE92mREdiTcxbtfVhm8ydwXhRTXyuBeLyW9TWQUEyatQFoGjCfrzSooRLj9jwXm",
  "key17": "5fN42sKbUgCeYSGb9R7NGamZhToVJwR2y9iPgBQyyxJ8io94gPwmBBZWTnveLv2Kj3QBTqAGatxUUhGbnh8UHTJi",
  "key18": "2N5H4zthnQ4Buvcx4AuMtQLynBz6STW9CS6Eh3xiEc9t2jqV1xfy5tDCXT7mBUG6aeymMQ2ccYWzv34E4iXfpHv4",
  "key19": "GQgCRaLyP9oyxZgWTNsRJU5D1NDUMGrY6fGhNWoZgeT9gtEr85nXzL6WWJKwS1PbqJhToN6i5e63NmM3sUGrZBQ",
  "key20": "4gPVGzbLZLFyTENXYFoPTKFRBP2ZPtTSNvhQb33EDazpB8uQNFskt2CgsR3eUTehAScMns3gLnJr7GUTLEuCREXa",
  "key21": "6HavPQ1z6Cr4YVfQ5sER5DpNLRgq3HWvKdYc2HTSewA2tRzXpXXwoLvGhkH5vfxyRuAPjADbjXer6Zt9wBfrwM5",
  "key22": "5mx3GvnfbH9c9meBLPWUFoXDnHHaHwR4Mr9aHoCqSCjd8fPWZY2oXBY886H1rdjVLqKE9T28pvyJ9rd9fSk4ZWV9",
  "key23": "5KgLz4otAkiAMCEujnrr9kE23LnH43QqwWX9rWambSXVT7bzAAii72Xgb8fgVFovgZsLATNdPQYM1uHA3ot6J4eQ",
  "key24": "3Ltoj7XcDXzpdGb7SFEaehG2Gg82WnoEd63HzaUbmKR2NK2W98kamRRRqCXr5AfhEPkM3wCrmP4aQ7LjkRus8zsp",
  "key25": "WUnDxKWLfUfg1QCXHkFmtNrY9Q47QKnTZuNFyAVWNFAiMxb2ofP32iPCm5dJYkdDjPtGH5YjKFjeSUnbLqfZbr9",
  "key26": "532zVWmV9Tmi3uX5jmEoy8GqJg652fapvVe6asjAZHahSLmpCvodvuGsuQgZvvTTBYvUUhAggNuTVtwYuuerCrDc",
  "key27": "nC7ganSTKCy5VG9ELo7FKaQeMepBEV8XyDZsZpvNBRqBniRkRd3YmuUtzcDybMPeSPoep2Wg7iEMVThCLsC9rB3",
  "key28": "SehdgPf2CGp9wzTif9j7SZQWaEcKsdpbaurg2YqMaCmdo1xScx7KLskVoH3Mdme2RsKhPLYgoaHQasG3JTFLisi",
  "key29": "2cWfsZw71odpikY7Csu32ihTGHtqNWr6TavaaoMQEbwkWM4BXxnB2uJceLPjS9Rg9etW4VoTrs1iDzvgAXK8PFy6",
  "key30": "4XBpBK2Jf6p4nyRkQPGFoW5wanqvx2MjPQx6SbtPwUHh37qZpdVjEyUA9uwBuURfBHVdVP3SzSKjwyxNfa5UoAT3",
  "key31": "3jGCcqcUZy9pJnWU6P4MMLpbT136QB3HgNkfntzbRDzmCoGaMAWgrZYmYC162DSPjeCcMSFS7ddYFFi1pUHT6ewq",
  "key32": "NkRUcSLnqMKCgEaB1vbwQi8VVqg9xwnpT2TYBA3PqwTzntgxV6PXjw4AEqyLzmsFeNyJGKi94wGhUjNamUjqCxq",
  "key33": "bACgPj5Bgo3QnRiEutoRBLbagpSZmTsKUwy2S9t4A1NUP9FotoZu65MfVLKZoC1dmMTzk1EcKFmGbGBGYCRnZMJ",
  "key34": "uUMXZLTxkJvXrbVKRJfWjnNWmvT3fDRU5NJbpnJyo7kESDRpDJ1L6Qj6xwwnfoi6tUS9kEQu9Z78j7pcHRG2k4H",
  "key35": "2QB6oSKwYaP3cHmsm7gkRCrN6CVeAo59zCU88tDBYygzML9Ybp4euJNz2iXRPhLodxfrwouo6ANUehvYvNWB3LSe",
  "key36": "5xTFiThrCR5EBvDruBvtRxcYLcWzjcRb76ssGvkunnefXvTVHkmnnyBhd6dEay85k83foKXGCx5VKNob5aiWwkw",
  "key37": "29559VSJorjMDsuqAA3qdQmuDtWJnh5zoKWqbbCTTqK5RnPdrvgPZgBwzUohR9D8q4n6KQNJFFgKB7aQTepoXGru",
  "key38": "3h457Jf8k3MfghWkFXyfWzqsWo35iXoAifVwbzCaP4VyFvQrhJU48apwb29FdJd8wu8p88iniusULbwodiUmEfE2",
  "key39": "X1KnKLyYF7LyZ64A9V8zGTxH1dychrygKEFuTsAs1WjZ7wmeHbPvtonWGKWx7BLLqAc74rGfSZ8s6UaY1UEe3Bp",
  "key40": "2DUZeuVigER7BmG6ye7j8yz72L1Rn6LyGgk8xohNBm6UfFX4CZYsEdkSLHTRqtYFXf9cb9EEV3ayf6o9ZUYLTJQD",
  "key41": "2cZ8tHdewcymCZMTuKrkeodQbHoXCAGXXvdXvJkZHEbbjkuNVP9NcpqqyTefUvmvvb2uwfe7hR5DjcLiUXihrEVU",
  "key42": "4ySnpKWwikhcWTjpaHEz2Ub2W7cniZtamyBXKHqZBXS4vAqwHFDDRukkADWSMo8s12Lv96Ra24tmKrRMuhZxTZpu",
  "key43": "9VYCpJB7cgrX6kSwqH3xMZv7XyRieWRryQhwxuL8jP7xV82fAm9mkpPWWK33Y814brw8PGFgpx2JWEGR2upX3gZ",
  "key44": "C76VEnCcmQNrafXmFaA97rUVuiF4nJYn2vCyPzFhMgYrjxzvbXZk6aj52JQ9Z7r5mNhF3ZHbAY9Y3w6aWeC7gvP"
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
