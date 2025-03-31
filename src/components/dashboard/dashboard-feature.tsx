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
    "3e7Q2QmfodCa3YSc59DhQc7LuSvrgeAtERkraiJ8ZyQdmgLHjfqqysQmq1VWBpHV6LEo1x3PL5g2XcsQG3VQb5Se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sh5otFeBvPfSYWpdPWSogsc4SWtS42KWmKEir6hg1UyXbVu6LrSKBQEp893ofZ9fN367KiPv6MhyfWak6WKd6ZP",
  "key1": "52YHcGnkJio7365Ki73B3jxp182LiVEzVcghL4sfQNor1U7cATzB8eus6qHGoPe7Gn7So4MV54LBQ4GNKzqK22is",
  "key2": "64Skukg5k7prnxzJKW4FThWQVKzDenZybHf7gggm35m9phTFKvY281PuEDcyULivmnMVMDuWtxea7dE5cX7x7m77",
  "key3": "4JWF3bB1Fioko15FtNf2GEaeGdyy8tJC1v3LFMwtstgZ8jsSaL78xD3C484P6o9adYCwXjGdcZhXpjpqj54ZMRcb",
  "key4": "3PJSmn6pMfE5u9i5ypGeaUFc3V1Zx5XuYhruaoKHcxtP2gehxekTwdj4sqbGqfSqKuPKgNye4xN6XnZRSTnB6tNn",
  "key5": "5P3cpeM2uVrCmBcsN3WbRbCCp4JvsJ7YakXpXKn7VDzU2XnNC6XKBtRtQ4xZ6FU6iY7wBw75nTJ7TCgdVGDH5KFU",
  "key6": "2yCPuVWCCcSys8hr3CUXwJKwDXwtndxgrFBUX45kZQMtckNQt1oDCZL2KG1Qw6DqLB2cEWk3PcDEqRT37MSifeYN",
  "key7": "3yJoftsEc5LjtzD1dMnzzEcJhmzo4PeNwjTTPKB31qi24qVKEk62My7V9LBVjctLBeBp5rPz1MtiNgygaBrqMYep",
  "key8": "5Uun1kdWx9dEedviXmUvccCYnhbaC2c6qSJARtwgbAMBD3Deo8xLfrSHVEKqcqEjN6h7s3NggE3zuSiUArcBSujX",
  "key9": "3Fqah8jgnZyW58P1XpoLuFUn7p6Gw3moR3R4QAZaN8hSZFxxyY8BBeayKqrrS4uHszxV1sKrWqfZRrQayuebRaBB",
  "key10": "2enQ3ax2XbCR7asiDMvhbvnHMRdv72owbCEa5HDmL11pAgS6XWn2ZaR5JDEmMp97GfgFb79HZ6NCDKV5TckJk8UH",
  "key11": "5pVjbZ1x6Wr3Ar3CFKpQm7tm4A6dwrA29JF7H23v5r4pXRZz92dcFG8DwQgivqboFrXLTN6vsYo3oLa6ycipfUtg",
  "key12": "5n8gGbrHvyh7dcXPPLyrpDuy7BXNFFETY3NJjournJ3ZPkXvVSqZakaaH8LDLfT3tRzmUUT3nhCsG4r5z3KLwmL8",
  "key13": "3RG5yqpWV6jTnmATf7kStxFC8EpNDt3CoeoapHZMGycDCQMhAcSWYpPmEN1uA1i4gFqZCPX5BCgPKpadX2PWzMTg",
  "key14": "5rDQZ8TxWLLjupiTFeYzs3amABGTEhkYao8VS2TKJ5VLQHgACxvpQRxGpRvnNkeeAGswuUGMG82yDzzr1KJrxXZv",
  "key15": "5aVnqyGRN5NJW2ryxSRpFpFP8MYvSFkqKt8d7fQm9753rzxhCszHsoce9HVTU4qFZk2CfjJsZGu2ufNCmw95qj3Q",
  "key16": "4Cfk9msqtZK3RsGNsz5RDs634tvaU8EvSxB78ynJYP6B3oKGFPbYxkCoGNciEeVdkBboiDxHiKVgtkEsTedXbqJY",
  "key17": "2Csg16bxi7ULWFozXVCXBNoxoHEEArE5uFM8bfo7Zs5wTqeJmYzZtJKFNjzAyFe3Rw2Mj3vRgiGXR7giKUYH7dbd",
  "key18": "WYo8EWWHBMpafFyHbWQTHGcdj4SXMHK6iVamJck7jzMdEgsoYnieX7kgCSub5pTFgwckYiMReWqWK36p1y5YHxN",
  "key19": "fujqFpdVvkewS1KE3Tbmqz9yZ4ruESigxmESY8i25oGsX6e9eTn65HKsxL1VA4vJhTuKgHWJ1CWrK7rfJYU4XRf",
  "key20": "2MxW8MDicF8kUqAVPUumjZp8j2i6seA7WPSzq69U6K33zoycCh32G5LA546k34ZdAUJWsv2ZwbAyHRNq88extvzN",
  "key21": "5nwpyQFKhw3m9KiUvhnwGtvLQSJAcGkYFY5NmAJA9BGaTjESDhLdB8Qti2MCi17CNUL5RJYWkgSi8j35pUgsa7pT",
  "key22": "4hyBcgn2eUqcNdrF4TTr5bfDKwEwbnzCed7seqaW9puxqR4KWUNsrAVHsjg2w1sPjLaZV8SFPzWpZK7uYUwTAP2f",
  "key23": "USRmSLHaQoQwhdYkNK6EbxZK7XjNTmKS2Eo8BtW51X8aFxmfWrXJC8xthpQKQgVkSyehroMWvjpdfRw7izv7p2z",
  "key24": "DzippsqgHtta1HT8moq4Aty7jcLGSpgAfqwoMKSGyNikMUNe5VAeRJ4y4u8HnvPmpQduSNb95x1WBw1TyM3Fk4W",
  "key25": "3jab9GSTtzZ5nCC9pT3nhe7Yipcpm2CXYpCbDDwyUHnTsVqanzrTfLpeMmBPvYKSbPpnUh76AEXmvMs5xui3kaJB",
  "key26": "3cY6veUQGPYWUPuEyWDrARNEwAU26VrnaT9zYhPYYTUVxctr5bNznbfeGWnU2uRcGWd9acZAUK6XEB3omLLPQDGp",
  "key27": "3js3UnLoYRtkqpKRQqAcPSVwY6khx6r4Uq7nYoehbCFRjwMnjRBzEpjizzKvDf4DfK8RBJy9FjxXk4JDPYaCtFLe",
  "key28": "36dQcDmpc3q81LQdpKcLDhWYfXzgeNbjQq8sayZDtop3prWBcAZuJ74JZzmr5HAeuokhwk2a7ncYb4Zm34GbYsmE",
  "key29": "2RM34yUy5u7LX5HvrjYajhHVHpN6iKMzGGzstxumpstJw6CXQzbjGgjPm7MHrnXQGQ4Hcgc9YhhNAw3HwHbNwod2",
  "key30": "5frQBhRgnYgEqJwsvqEhx3VXkdDu6sxsiuxVe2be3Aj6dRCg9QJN2Hb1KP9XNWvKvy1m1LbSYvkUT3b6QbbP2ut3",
  "key31": "25cWhnd4oTPq8hXx2YZufQne3guiL7y79hsXcFshQ5QbEaY2fWfQTN7VGmG31EhooVEzABXVoFmBQ9CbRhTMNXqd",
  "key32": "2WEiUT4mEPop3dPSk8tVYaMSoDuGjwQqa5NvRy4H9T4iRwT4RtVpWeqtTFXwj38vAqNwZ3CejKqtoqRRndpdkrS6",
  "key33": "CZhP1D4DJPk8Ed8PFko4Mwqs5qRsFkHaiFUWatQ8cSwYFeCrj5MD7SC14ZURYdyUS7wgg4BfTod6rQDbdNFTe3t",
  "key34": "5Fe2bgZxpYk7XBC7xgkWBmP2EczWWipV4pmQBCdMRK24yUNPi3J1D6vUTkETZ6VggGD6aqhbRSactNqMMFT4o7Dv",
  "key35": "3qLdUR1Nr4B19o49pnPTGmq4cauthTwgZvUddGKFjWJsKfhzrhkCkcf82CzJUEosqsNeTGZXs6J2tBa3YB8EoUoE",
  "key36": "4qjRaBqHSJbmqWTCASR1CK3ET5wvJJKAkNrzxBnC9LzE3VtKi81PoAewamS6ZUrorEJeTMhCTS9jcfFK94VU4GP4",
  "key37": "5JSnsqHHVbuKjXnZnAoqUvkSqFt9LtZERaV1WoJUHNCd6HLc2eJcBS8yLhahNE6oiLc1ZXAA7E2qWuAR4KGhZp1x",
  "key38": "4bjQ4g24Zd9dwAsRd5vr99ruBswUqxdyE3a6UdGz4ACQ3gBqa38fQWz8AWFRjS3MMgGSV9FumxRheQugTkwdswJU",
  "key39": "YjjeLGDgroeoDh5afbaL63DkaDgRAZHUtuv7hjaHpt4Mm1LuFGmQs8PMEkAfg1wjDtRp5kyynb8miH5zvg9vzgB",
  "key40": "2atP7uvCQH34Ac67rwu8KmaLk7BtpU7iMbURhVhcwP2bUL9JU6qMEX6WEKA7jTYv5Kxm8VWjjsGiKBMYqP9SPcjy",
  "key41": "2HVK2MC4WYioDJugeRUFGhze1KrpijrMq7A6WmRzZo9vNbM1W14xgMX9nwNgXuLVw56izCge5XfDrXRRPkYNkv7A",
  "key42": "52kHzVXfsh2LMbfjaKbEZ3zvEc5Szw5NL56MWpB46BmwTuMizsr2A77UpwF4on6uwoToi5upqn6kVVVoav2FCbLL",
  "key43": "3UxneGVtm4fRPDuGcRs2xhxfqkPkU5KzAZtMU3uoG2YF3TwRt4ajEsjqisUPB4jZKntqFXQggnyy1A6ncn1CUoc3",
  "key44": "DcNoA9p1F8ejaw64TpooJYk9i2VmaAX98JYrmxAhjUHXjRxY9XCZPr2ixrS3Ys9QyWJpmi7tMMbdafksujSW5Kn",
  "key45": "5Uc4mU6UciobP2SWoA6g3JqBMpqzdBADAG7qS5Bai7PipbnUEaJcq7VmbCVcYBMTHirZLAKSmSmfdAEtRcCyym19",
  "key46": "4FaeMgiykeZZczWmE9u6BRRFpkDYHYTosnW6r6VWJM34rAg9dALJfCFzb3ZscaReHBen3NCgWWZpTUNcbrJo13mw",
  "key47": "2qNitRPJkUVz7e8Fq8SRptaz6cC6GYJJ3MHh8RMiYLzCZHRcw1yymoxy857ciCUWpFgQiuhLTYBjEF5RvoNuGZT7",
  "key48": "5y52jnuMiyvXUstqLGgQZ1Rejdt11GRZ7vi5k7cQWd46D5XXXombF5ALivbBcEprBbPt9P5Z3uhwsBsRf1GhPQ6B"
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
