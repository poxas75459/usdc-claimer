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
    "62rZPma6zyN7533bWusiuqoPPHkzAcBMktMAjPyzbYny1QwX6EFxGrVByPpUHi43wheu63Ewib1zNRgTfd4YpRva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcZzgK5AKGT7utEUhT7G4A3U7zfEpwbRf2sw3AQJyuhLqiRkN5N8qV56YyoB5rofsHxSUukFWwKsETPR1um9knK",
  "key1": "3trMKatYaNJCT8XkzdBsVvoCALzof8HJQPaxoKTeFakh616sUE7raEJUHxx2UwTLr5c9cGJJW1CpsrdeKkbiqz1U",
  "key2": "3o13XynMxztBH5yT2rUUKvz5VRhokh4adZPUyoBbXeokfLdnqnRhJSZFmMGPDZohCTKQxM9cvV1okuSFwqfMCwtN",
  "key3": "38JuZuEaJen5fo93C21zaYHUhpNeCdcJeCxLJM2yFW9t9NhBqfiNRUGC8Mch2wg83DhCuJ62GwvG2gxSX8Qeb5gq",
  "key4": "2vanMYZbb7Tve2ccpwpL5Akh24KMgmFsmDuGmkB1p32WFkURL6gYSQQnSXoR44uXQSrkrohM77jrGfdmU3cGvEuP",
  "key5": "4Hwe5PsDxKYnGJ97bt4rPDhus735hCuNCHg9efRxQ3QhszHeufupKPJmdM9VzGngqZcjCSfzMisfh6ppZKLfm6wL",
  "key6": "4ojBg75DC66YF5sLLZ4fnSUjFPtMWtbgS6XhEDyGxr8FLT6vRj3jqgAGEsofYu6hkF6pNydb3uHhbuf2kUrfibVu",
  "key7": "cTaz6TPN2jCenw9MJuY6YwMZvSS9VWqtUsma8DwErP3nqtJmgcD8FJmNW8Bz4cYUCmgzesrRNFpkJyQBUzgpaLE",
  "key8": "2wqmGep5voqgvA1j3zGgrgUrronDpZr9LSfaowUDD8xxy2HjcG41DsGx2f36THcDRzF7FtGgkGTHXTbvojyuqjc7",
  "key9": "25N6iaCkKo62pqnDtFFPwFe2Ar7WBz54aa5ZVkiNf4NrKAkweMhMLh2yuYL2gC5SiqWfqAmNNx54hKrphZZJxjvo",
  "key10": "2EHwgQMaLwHuWZCHZNBmgdBmuCvNNmXd93jyGUoY9xtCufoukAZfW9YHdHFRzALE6sDMD9ZDBYMj2bW4z41ukazj",
  "key11": "oWU3meGi93qqnULvMiSQsvzMCiq5NUaSq952G6XjsNSUxUAsWgJ3xAdVewe9aQa8WuifAjk4SBBY9XduwrcGySN",
  "key12": "4K2FHPd4aaRRaTALZe9QYVjLKp996zmEqQXjYvno7SCvxHcCNatQcFnXJCRjLNHzv6NBdDss6W3JevSmZsVDYoSB",
  "key13": "52LtTt5LqaJ3KN1rsRNiZoLcGJyyJ4m79qgjjypJ1M4F8FVJyJX9NwxbmnziXb7Mnor89sFGR9j8YtSepk9Ua48g",
  "key14": "5SE36Lo2pVKUCtuh3SfbEN61ingaJMu5KiSJfumjs9qe2k4Bk5Vcj6vPugeg7KZsjhCTNuZei8ARQHMjWKNgrZww",
  "key15": "3f78gykXNfeTe84FUNexQhtNpswE67Ps7Vg16nxH3EakCY1mynWMXsTmfd6SS59sckMpDbEtjyPC7PukUDKVT24j",
  "key16": "2DWh5q2dKPpk7rwbzGuNZ9AFDijcK7QLQy3ad7a4B6rx9z493SAogq2wr31FCVEPsiFzFPksAURNmBJwZ3269MT4",
  "key17": "4vj4zkyZqwWyGhS5oFPfww43DdV4aNabffSXDquTbZtKxB4wBUz7rjAbNZ7VVH9VydURrMXdtXUXJcShPwScfxNF",
  "key18": "2DdvQYrKmZAH7kbbS94zaGYA6WJ2tyJvN4FiTtGNVPxMSEAf2Sp913g6ByNBejAQRpSmVYn59uxE5SDtFNd81FdF",
  "key19": "4AEmyi3qPfDByJSy8Uw1AZEhrzJ5M8HJoQsBmetumjKUsEtYMTAQCjHV5yNg2H8bEKYCDAW5GJbwgGG1y4XZEcA",
  "key20": "4dcKwkWTme7urAUWoewkVdqQ15QEqJ6sC1LVYfi45gHEfUzHwC6xGZ3vvHHAbQzrX7t4yuPWir6CaDTS8q3Jorof",
  "key21": "2sd4x1wMW2Hf6KTitcNBr511PfLziGQZ3FKaykci1gmzKHGJ8aRZdTaicfndiDAMtr1o8xMJdAZSwCDUEQCvHjBe",
  "key22": "3cFsEdYYAEvY6DK416xVAhXgwavdA1nVE1mAS4f7BxMTuQVR9QH627UCFGvxUSo3F8f6thBsFEXXc6WBJTBHzzLw",
  "key23": "4vdW9TxJxx5ATYBnpbALmfNtmMexL93pqBDvmQoix7xhgNpkjmz8h7tbqVsMKxPU1oUyvTEkFwAKg8HW62hQAtDM",
  "key24": "5rwD6tn1awTLnn2CHqLxbsrAvDCwfBiRiWwZ3a7xhgDrhkYuHCEeEb5NqEnTKe1rVTTmX2SGpeFSvyS2zVTQLxCv",
  "key25": "5txfh6vFfCUgsSanKpMNWPzDvctveNkkLecbsMETaPAQuUc7NGQ3Edqy1xCFdDDVLFx33oToeEJCX4p6HaLio6T9",
  "key26": "4yLRku4T1JRBzHVXidTYqK6mrKFvboSddW9H9aLmgrzoX3cZtWsT5JQLBUbZrmziSZoo88Pf5ts4YMiNnXntAtii",
  "key27": "5yaR8inm38NL76U3ZR2HcnBdyi5WzaV78uqfogX8pCiGuqKR36TWUAHCdxuuWDdrHmfs95jgUazMPe2T6wwnQHWf",
  "key28": "5DiTPbLoxZXH6gGWUHmQEjGJwbyDGUBe52mzczXBkRbv4DZm1f16qzjm8tnDaUwKnCSsBd9XeNu345n8wozHdMzP",
  "key29": "5vecP2ReQPE4KWNfbGFUFCrGby19DypPHTDptYgsQB3JNMtyuRJc2rMU7BVKSTmjkapHxWkWYExGqpVSRoUBNULr",
  "key30": "bDFDGM5GLjCmK96kuGs7awQ3oSmgM1TjSTfcwEyY7nhdW9CqD7hRF1eGTi3zBr7CwL18LqRhYFQ8ESUzcDsDwrN",
  "key31": "5LeA5CzJYCNUF5oEogGjTLGTAAGXK1f2T519wicyFxaqaRgXCoR28x9xFkCcH1bc8xUXWKtFhDypuLF5wGw1nV5i",
  "key32": "2pEJaBkdq4LvxvbMw1AHtDoKYfVEoG1WXuFFZfLVD2DxdnJk77qTyqyycnxoRAFB6vTiKX2BmCpaDXgqCd4GLt1q",
  "key33": "4F7ZovUdzCPXjuED5cyYqsP1hJZ6YCPcUgXE87keDB7GrbdmZepW2UMwDg6b1u1X6PfqLCJXLAiPeq8tBadAXztg",
  "key34": "55HhoARa3dc8kvyAUWHQNKZUjkeukQuT9R27nuacsY8Mg4H58x4xqupQdAQZYaVe277rmgGAbREhLFNJyMAZgTZj",
  "key35": "31mRDsfT67bTnbgA3qoEwxvSTS2YdKpaWUAXzjvG6kstb4ybvJMGbJuPApGo8HzsKAY5Cnqi8m1M3Nmopzjq4tEA",
  "key36": "433eX4tjd9revTFaNN7sa9b28i3bHwrkv2vqfcmVE68Ppdhiy5Qxu2zofdPGmM9eS711dZgu6zv1BhbSwc5atkj9",
  "key37": "3ThwGa7mxvhaNHZ1DmowHfj93ArdgyxCYssskyzDd1rgyV2qgmihnrbWDJEnH66V4pzWFt1xQ1GeVZm5tMHEURGc",
  "key38": "jKeEZx5KL1DPwThnhwMZFhrbe8oJby48C3xYTBKEvRX5AijWfVv7kyXCRLgh3P9fwxpADDibGtKJZPc1zWpUeH2",
  "key39": "5snqF1PLXy3wHfPQvpDwzuPGytp11mFtvmHMZM6Kqty64Awye5n4nsTG7TtUJRydEF1e2GZgS68jDMfPjmfXpudT",
  "key40": "2jtJBD6kamDSrHmVkP5HoGL39FhiKY8iaHBgBAzx3HMNXWTZ2AMVfbmH1pt2KSfb9Wzyfy94XCWEq4TAfTWQUdn9",
  "key41": "5JXwzHsyrETRBXUJczi31LvAgnLBp6cBDQb5ysE4R1S3x6wtuPGpqJUKaaAc1QMxyNizrcY837CidBiFL3mK8adr",
  "key42": "3YqB73xGpie3d7uFiASJGA7eyuLheme6grVLV3w4wx83d8LaziLjUVBZuyuDtA6bf8768bFKazcpG5f8LrbBYewG",
  "key43": "BCTNdCNq5a1dDRaaiWJKqWeRPdms3woRohgRSdg2RT4QoziCRD99m2yYU2k8H8pt2qmkgzHHmXAt6WHz4piFT5J",
  "key44": "2fCc3n3phBVahS98WnGvDJ7VA5cLJagCDeNvGXUW6sxxjG2XQcGMK9rV6kaDsaeMpZnkn2p1MZz9ZxS1Hr8vKpiy",
  "key45": "5LqvpG56UFrFa5LRFfuV11VxwCawk7ynm6sDuPH2oiJm7qq79qKJmvcTZAMhjob6H7n69imDWDQ9YwytC6QfZheZ",
  "key46": "5pfvC1G4nNuT9WSTM3qmW64KywZhiFKJSXAzPz23b5ZckLA6qPgtspxdqaX1jhBVi3JTjorjgmjpKTQQAMyb5DoV",
  "key47": "2eQVXmjpV3pRv1APhoqcjzyGpaLRyAi1ujAP31TSfAqHso9gL6YKqLhBgxH2qP4jUdgCj9E9AYcuVSrQiP92uuaU"
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
