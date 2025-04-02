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
    "5QgGiv2YUmEmDTrToF7MsK8KYmL1CQfe7NG2o7zV4oYrqztu4chUanFQAR2vyjuaHcBJ5xhhD8hV1FAGAC5ExWnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tc5NXZaBVTGTWVJCbRufKaCdCPupZJiL9wEHeJbGbeKyqrebi6Q1eRDYuLj2zESXZhU8pTJjz2JD4kJpGWFbG4N",
  "key1": "5k6MZ9QsLcawPkMQcuZevEMx9Hp4WPi5ZvVLV96V2J1QujprGZsd2PMScKFAChcWCaPZNhn6yM1AMNcDjTBqiA6s",
  "key2": "2h8H5Vixx8vg1cSNiUxLpVLC6KgbJbPMLNtaUw1tTLsJnMyThBznRGPJamXphsRvHfvWW6U7s4fxGDLZCfvETpBB",
  "key3": "5z6xiyc4dVyVkbFdhjvkDYJaJS3yxXiNmvYA7LzAj57oBw7mgNY6tJdJUqNXwzrxwQJfzDauHD3YNPy5sPqK7puy",
  "key4": "4xKd2WvKBUZME5RGSdDTfGgkgLNCyobv993dci4H1MneQWKD5kUCGKKFjvekS57CDANBsD2h3AtY6cCApfCXQuKK",
  "key5": "nA7qg2U58nSnGw6pYVSRvsASUmoExKgf5UVJ9FVB4oq9gkChYtbpejPcLe3viPcWJSwb84wwDreLQNh6suk6ho7",
  "key6": "VK14EhrGiCm68xrGFjygnLgRP2tHm9N6p9Q3pJ2p5QVCnTQb2er7hpptBVUyPSfyeYbmpvcrSH5Rg9ib5TdCgMF",
  "key7": "53s9DZn7P3TrqMEfsdCujx53zbkW8yHJrsuMB8s7dugrZeKHnn8tKFkCPLSpQbaMb5wLPounGwShoLWrrYN2DvP6",
  "key8": "yez7MJKdve555V9FHgU9vH9QH69VhDLDxTfUCpGKcbXyY8khhNV99tnKMSG8fuYk49PTKMGN7GSG8YqwTFmuYjn",
  "key9": "rzuktsJ67vs528hJ4CW5r3Yt8jQFHhSxJNgN1Hpb945pmBVVySZYHogJEZK8MarkRge4Jo4JJPJJzRhe494yGip",
  "key10": "5fqG7MJgCFemXAC6JHfjGsfCBpi6LmSTmgn24ync4wiuMETaxWmMVgBSpWVzESLQw2UctGuVZyTmGzgjD6E3dc9c",
  "key11": "nhR6szoLuWoa5JqpE88hXqdYrZtxLbhZN1rjsaeXrR2WdJmqQKabF3e99gmbsVdPiKrtJxPhXw85dcvHidb51F6",
  "key12": "fbFs3Y2UnWvodnHBw2nHjFNif2yAMdA1iHpWe2PY52jApwqFz6jKr5zgDkgSXupdDuTqDeBwUYFy9KdKMYF6iZc",
  "key13": "pDAXAst5ckVgi7UJVypw4CZ2vmqQiYbs7gyg7kzKC6AsfXcr7P3mzPVAzu7HAvaniFEszUaXqURFUe8DCzDy6PA",
  "key14": "5VGL4nniaybpH2hKLrShNERo1phCJGmDKzpJy2TDFcZ4HxUF9c7c3BC1snEC9P6y5sJEK27Xwnsi1WXGAKfQPbha",
  "key15": "poYsV3qn8dZDGQysRXozxEX81JtGsiHKxYaQ7KEVnq7sN4hHP36NpV1zKPLEnQiAmsCiDN72BjSYNESyBXgrCRU",
  "key16": "66VCyjmaxZvH6cVC31HdG2TsowfDcBVaFxDX1RraLjVTBtfMDDwRDUNkXHbRhxBQ12B7W3ujUGcm7qwwMoyCMHWc",
  "key17": "598U7QVJ4v1bCQjyj4CjjYjfZ8xEhtFfkw4sSQUTpW9jrLgxTPHxcJMmYppRKdwY9PrhJnjUkaS77qbmdXYHebbV",
  "key18": "3y9uCGtaMjd4Zo1c57xthYyvXutw33t8nWyh8dRmEqyZuspcJ4RgvLKZgZn2tTUj9TUcMuHg1Xt1q1w3BgZVtLrk",
  "key19": "3F6ANbHJQFV5Nmau71edqSLbFXNmxbvZAHb4sydgouka7VVXE7qTFY7qeZzeW2gADhLUtndLeg6L5AtXoA2A47dx",
  "key20": "qKC6QrRUrBL5wgowSF4wPe2r9gTGec8Dd3TqBisLw3TuPtnsrCGAHqHbA8u5kJURWhDyDPb78JspPVD1AmHdGeG",
  "key21": "4LtDapGRv7USFKDnhUt9U2GuJuYZz58xMghgqczUHumCoDyrYKU1we3bvbjpqEAxXoV5j2jogNKRd15APt6jSYMx",
  "key22": "4KLLY9yvToU1e12ce2BTqk3Fwh7Ne6mpYgoiWRm4NuM9HATqLCLb8XRUcH8WdrEMzvuVxzzqVdCWZtkTudydQVVa",
  "key23": "2sNgbUwVFVP93j3SxwUpKw88LT9sCkPS2SLcftf2xqcxPKZD1CkXYzHhg1KJwVMLjW4TGiT3Hkp18fFLtFWb1VCX",
  "key24": "UuejFW2pqqkYH5aZDf55ShVE3cYQfUgouUyyzL2k6Jsmo8XY5j98u8FJkLFq6cBU4A1vAd2no4jaz1TtffhNH3F",
  "key25": "3ua9h1gt16wGL77RuxrUNwSm44Ur3MNHQnjAGYaGGFKmGDmjLpsntLAZMMajWr9ShDHLA6eyXMKhuCtjmJLJzoQA",
  "key26": "5dazmrJtGxaKKofg5pr1jBmTBJ21597mw3GFt4uFniizUzjiesVXNxQxm3oLrofdgTyMvwjt86CK5LZ6uV4TqFfr",
  "key27": "5vrteicrpyJdqPW57wH9ewiwjS9VLC9rCesP1sZZLcdtejypUPaSK6jSv48jYZ314Ct8uggVykZmEnmuKR8VmPd5",
  "key28": "2x6j3D1TDD8QmVwGwaaVMDnZD9TJ485RF1vGiw7XF4LqMSx6pVLwawCjehNJmConNRmdoeCTWoJvYZzmQm9pv7WX",
  "key29": "5vR9MUZ5kSYVwrDtx2oKJ9nj41D1ZpLNX9sR3WFMBYX1aJaDe12BbQppei2XcU6SaFer5phwu6DfLH5hxEKQrBP4",
  "key30": "3UveXVXHsfjFPh1VqJETuzTtrmun8NsvCperKtRW6Khwp6owQBeTgnaQseVGp2TFazngU86oB12jXFdJy1E45Fix",
  "key31": "4vvnerJNNe8kG76hYdMjRyhNkjry3iGs3SR9M2XsjmxS2PWVhEFBkYZsPSDeAdBQpv9pRwcWrCff56yUbkoQtxmU",
  "key32": "4xXtA2StPZYz5wiTV3gLw73rQaRxsGp5n8G9CHFtbFRca88adKtbY2RaCzMMgc3ewAGVZyg5WFybR3uFAqpvPBCH",
  "key33": "4hdzWycUFSJAxoi9mLtbJT4v5FD9vxCpR4ahPYNQpeNEaSFJq5am82ravJKcRhsxDvyVfTHZGppbSVvyr4kmz1Cq",
  "key34": "4hBjexhQYmFELQoewHf6qhtDg57gKVHLWTZYHmP3Fir7oEUWhK3VV9cEKuJsCjvNttgTeZ4VWUbsFQE9GmvKFLo8",
  "key35": "2ynPc8od6xw9jPumgy9N7TrPGGFaZ5UgpSZWRjgZrQzRyTGQCsh5N5tbQj8K9GDYSCL2Jew6TDEjbT1H8QzL5t6i",
  "key36": "4QnMM2W2uBnP8RnHTF7XDmYU7aTD8eCt5a1iw8bh2DJx6MchzcrFC4bPpDF9kf3ruG9kfhxxyUwWeiCPmDQNZZDk",
  "key37": "4T7toyMocDyDXr7Vxva9buT53Atx83gYHjpqSyHwxcD26cKGkkFJUStNBVBwzzPXvgQXDABKFnmH3YQBJFxoLsXF",
  "key38": "62WvD1io1bDvNFWjpwch6B5j193Gz9BVkcLvQFDs167aeiCBbw87KUfBBo55k8Sth7VLm5MUjV99QMyUDQ7Gs33T",
  "key39": "4AC2WoFUp1i4Dpt55trMRYoHZuzwbczyQStFDPzxXQNNHbypig6CS86ivuyNAC15BS6QLx4w5dd6urYhPoNW2V1g",
  "key40": "4uWX8L1McLB47uasSkcC7oy7NJGYfC9HKs8DV9kJkkDpo6TLXTmAogjcwUtp3Hjc5nnrLPGDkz9n7t37R2EeMX5F",
  "key41": "vFfpnEAPM6ugPosu48BuEK8j53aWC2d7C8Zrh885dLftKVwhJSskqJkDfxFtWXJEYmy432EQ4yn2bMjZELEGZp1",
  "key42": "oBbeAK6D6byaMGcoV6W4JF1MQraF4WUGFy2gPzPnMt4KrNE9WY4aWqtwLa3A7cr2EjKY1651Q6MMz4dEPMDdU6V",
  "key43": "5B3rudpWp1zkbxobLG4vrnnJbgMRYBvV2nJ2HgTuZZbicS7xAwXWx4MNEVSG73DErufmWiDS24Z1Pk7eKrqc1KGs",
  "key44": "5pk5CQTAobrM9K2665Uf4JFQSBCbWRVYrP4dYgHjjCjXSi91eibTTfWiEF46iYMpLvpdAwT862P1Ytg9u2tRSbSA",
  "key45": "3hvpbb9GNJCaGfBNUExfLUP3aKak2dBBS4prwj8xVjHdX6yErWDJoLV7u4BX9zUTuNtjKAfDJx3m8N3N9eZNahhP",
  "key46": "3N2gAzYc32FU8UmYuQTSGUYpu4hamsESin1KdA91AZnbQrMMV8P2yUgww3XhmAHaXjWuFr8Jqd9RJDEQnfFPWEpA",
  "key47": "EmMCG8zgHnwjCK7yxYULeehmi3Yy1pd5yW6MDdYYKX5ueHmHWQ138tRVXvtPRaiJjrCA8Cs54FqB3Su4FDA1wVF"
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
