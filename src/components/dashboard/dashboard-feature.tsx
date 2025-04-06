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
    "3gqhsohMGzF2AamU1b8uNTX12hsSWdhmhANFEfeHtM5nsu2euurPCf8onMG1zex5AT6fLnWNorspHXwoMpgWVjoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkiNkSXvJSsSCp5gxQy66Dtzfa2YPXyaeJ4z8ZdBNPTvwqFwtp7jJcYmw6TGzpwu68XJz9WuwCabAbUb66h642t",
  "key1": "4pRu4gJSeiVF8qEUrrKHNH7ne6RALXQ4rUtbqpDDJ8qoWpMfLZpMVH6msPVtcwi349P74v5JJ74CgfBPffXHvk9N",
  "key2": "5moqMYTm7frWf4BtNg3hDKrYxYgH6PGXcAkcvuwCYK24sbepP1FjdeVQ1utGwBt7NNgTPuJSgvF4niX5FfccbzKU",
  "key3": "46itjenmSgr42m7YSkU8hZVaqNtQDvZYjyCM4VtxjcW2uWeDE7JKCN82s5UH4GFyALK8Z8HJyo4etvUnFrvyA6Kh",
  "key4": "4ULne5Rd3d2Vnm2jrmRbKz2rBk8QXBKuEb7x2ctovu7P211KCKRrciBVBaBoYTXYPjLE7TP3hzDiHxUrgU8snprw",
  "key5": "5TUgksMpfrGvn4XT7QezphLa96LoVJx5j6qmbP8XLyrY2Vm2YZFHBaHdLAjqjrvmkJUYBx1cmhedkhLQFWrnp5zL",
  "key6": "2gqvZ6i1FNhEwNmXjdvkG7arDA98r5LvaPwjMCv7M1ETU5pJCdXhokTc1ticbjTFu3MWDuDZLAAfohr6oooRowFM",
  "key7": "4ktCr6vmThBkZ88dj7GQmUDtVRzVsubkSrpwc2rT3XPSfnAiduG2x8vGvmh4E8XF2kB9S8LmuZSoRnRygVvEmBXx",
  "key8": "4NgQGuzUMvriuLacbhD6WVHu8daAr8FuRxqXkvHJuxojHJSHP9iD5G971ya9TBmAizrouH7bDJXzSENCVKtJW3ms",
  "key9": "3Gxjn4sAbP5SFCvDPKD2aWdCYnHpY31pbStiMpdwT7FDPUnGvqKr1GBT76n2D85Ce4GsJ9ajfMoCGwcmsWBBmQPs",
  "key10": "38AtAjRwtHBxbdRg6fxXCwYkPP39ddaAN5qvALkEmS6cRTBDsBut2MvMR2c43dLZRkCCSBT3Vuni8afgy7pA9Ndw",
  "key11": "24X5S4HQ4Txxj81iSJ9Dcj9v3FmsGkcdy6EaZLRNZPMxMWpLMajJipbHgkmEPQoe1tkY8PdwQWttnhrQbavztUMp",
  "key12": "376B48iKTiiQXSKdzbbH2uqg2f8bShwQHt8hGpu7JnbTAXSdFrac2kvaS1vBcGmdmkmgsm4GgnyoDV8UFv6FGQuH",
  "key13": "VrA3iif7B44pgex97HDqFXUfah9opJ6MFtFvdUBuK814Gq2gAjB3wDVYBt95UfPeouu7TT3Viz8ZvEKtaygkvqA",
  "key14": "21W7BQ6MJeebiu3qLFYrZ1xAuoBcX5zQobjZUFWpqeBd13utTFV8fq5G184yVA9kFdsFK8GVdZSWNrBVzdQXQ2q8",
  "key15": "3sVUcc9itZUhq7AqnzWgVQDLJ1rK6t6oHucwXmpzKDCsi4u69u6WrFCVi1wrsBSr8hmVDxfmnM89vVTGFUsPySyP",
  "key16": "2c46TeV5Vgajs4pbidxZPW79mwazNuf9Lt3XxdvXzFdQoZ4sG9EpGXwXs3FNpqFwmJCX6NqceTqntgbFVhKPohCK",
  "key17": "5VJx35A4wj3GqP8VBb1P44w4XPwu2WKvuPAvfjME6rFWbG6GqdPnpKxarGXEjVE1Er77SnxiQWPqps2TG6JHEKaE",
  "key18": "5SBAgrfL9E1bjWPWgSny4i9LcSZLoMPQeHpQ5GSyqiuegALRBsPfzsSvumekXXrSVLyCdAngrEt7iFWWbqDhCY2J",
  "key19": "5kmpnxuMBoyymbu3sCk4EaScPE97hpcmwzCJLG8z4stYRCEFwcZ9RZnfy5wVSFeXLTFhyr3DDQ8gTc7V1u6araPm",
  "key20": "5HU77xGoBmZZUFsYEVwgicCsJb3oZ7bn57n67rCMdPaevpiadbnJiBk6K3sbpnfL2hSY7WnWzoJdxnKdP1kmDKqF",
  "key21": "55kMaXFjmxQMLBe8srX9RBffGxR7bRPipXaUMeWZTMyNrxnxSGGysURHBjFrPZB24m4DVXkC3KDs6e14EcJTnwQi",
  "key22": "5WR1vYTjLjPYrR8y9pF9hbZdCyKF9sYQohjsHk1DBtTaEGpWG8xUohmsqMDPNBmQ59HAqzJP3WV52KJK9d9Y6WtK",
  "key23": "2Pcrk5dEzWNpsHAWZ2FhvnwQo9mBRZ7sQdgqM5iTBwiuE6zyaGmpu46zi8CLp36jSatGqpn4MCCZkpvLAtEz5Pqo",
  "key24": "LGVZuURhoUXp8qFV4k5BL2ARPtwR8CD5fuYAXhJ8nLE44WiMcmCeVLjViNsRUz7fahYzqjKSUvwZhutoB5QJjPf",
  "key25": "5XByZPTmZtZvreAvCN23Jnvvv1cpLD47wYoVt1DrvcEefxj5mNx2NRvnauveRxCWacTJ65mgurN5Q1PS4Z5hEARD",
  "key26": "3TVidj6AR6aVimwx1rscA8FnaSyWFHSKyLBUepfTQ9AzeSpsBuVuarPkCsjqXW6eJaRmWnbU3sFa5ufiKua3cFNL",
  "key27": "4QjDh8vipCPCgsEpwrkidXVzo3zweZdYRpSmejJNx8YgJZq7mrPNU7LT2XH8a9YTEYpQJK8fp49AnH7x6waF3eMP",
  "key28": "622oNRavBjWyXyighVXfSmjxRdbT2GHsuv4wkoakvJTeBRRtV3wFerwCKD7c81vomD7je9QcLsk416Dbx5PujjWg",
  "key29": "5K7dTHpocu46Jagj4LgczZuz4AeKjPKKGxnkiUqc2CDSoDshFh7mGPAjqZxqpP93GbeQ8fKeRDEczrpVv4wLJ5qn",
  "key30": "2gsKymyLyS3t3D92tbDp4KiEifmi2yc7KGCUUxmZMX96873LRzXyBVZraxeMmoaRRj2w9xFaKM2rhjNQeBkgRzs8",
  "key31": "5AS4GotQFbcApm1ZzEXXRr8a4beg5jjziqSBHaJxKNYeabkQxKcGWBzSWbhi7eb9A62SHXfGFBdQktPcGwb4NrE8",
  "key32": "3dtryfTyCkvjE56BktDZXJWYxM9D6WbLnybGbrqsVKQuXi7MgU4bQqYqioddLgswYQKGCJ84tNLG1TLW9YS9Exfz",
  "key33": "2ardUt5ToHvUBd9egYysNzrNBoMZQxqHUyRfpVcZ7U2EPwfBJEYzQuGkFuHW1VcsjEA6xtqWPLhL8BRAqJcTvMNN",
  "key34": "UQQiN4XSt8cSK27kPgoRMPuMV2ZG4PLgY2wAGHbaEdBC9VqbhkyBFkTXP7Pxga8uviNGuSxCW85ksCZW5YPh6zG",
  "key35": "oda8eMFnYPuxYNMjc35vZKCobrabrL1zrn9RMd5p7kf4pvUQ2a7gQrFAZw581j1U7i119iFg3bTmu9UtaQKfRzT",
  "key36": "4r5g6q9yEc43X67FGXbCMiw3BKw8tMfjppZ9mPb3KX9oVNJTdabqxVNXeQ8cVu9cNgD1CZWuSoEH2EWG1zBi1C8P",
  "key37": "3iyqZ6nnqEQbzGAAbbPXtSbYf5mZPvMaNanfRqhMcPmWGcy19PfbNE45Ea3WDBg2or86ZVrWy3996NqdTe79gH6P",
  "key38": "52CQVSJcfdbXEaroX3CKjQKnFsJTR5LdsXY7GZvriqVwKq9vV9dr2juaacJsU8RZWiBsM1W5GchX5qpUYv6Ft6Ep",
  "key39": "2cZhK76L7bqbBc1mpk4SGn7Mf3mGvtnysxGcmm8UwbKumsFkCvUdXLr8RmZFLK3FRKW125fHShwNHDqU7cv6nBRT",
  "key40": "DU4ab8fuV4aDMqMiS4rzeTd1qeHYJtmKMeA1HkekWnVasr6x7M3HDC7FsvsvGCiS9g9M7zwpRr2hUkxwKtt8uGQ",
  "key41": "4boivQpspBKSfDTNgXAM6NfpU5aKyaKz246mvrHsCNLGWRYdB3L8cfqNTTs1H8sWc4s8P1bto12WsXnN1dSrrgXs",
  "key42": "2s8wETj46wkxRkzPh5Ds9HvFVxEZdbdqJnugNw6gqzTipqP2raNYoYKo3qUBiA1qv1CCqMF1oA67cbwaKqJS2c3S",
  "key43": "2NGbY3wo71AMcNphk1gxE4xo3STpcRP17zGssSLEADQNg6JBgMYvnHgehjwJQsLwvw92NTUoP5mWDD3XzQx1G8gw"
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
