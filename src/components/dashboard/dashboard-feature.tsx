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
    "2ZVSsYW1TByDZhqYSZ1p1gNWFkrJ7Hcq2mUJGatkQP4izko5nV97BVawZe2DhjUfpoykjKD63htJPyZDxBYrNr8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dv1fPS8RW9LEu8Hf2hxdE3RpNfYxP9wLTmxRZoyM2sJ5buUdYj2tJRSMh7BSWMnPjCxntJjPrUHrfVSEcG6wXr",
  "key1": "3cJRHoNLwEBJEUzR7YYLYrAhEgMrjtezVaaf2vR5GgKvnRQPhQc2Mphqmwv5QRTdwR1PMvbuWPsP85vbjkyPtsJg",
  "key2": "4s9XMK2eCjX7BKNh3LNqdvdNN7L9VWfhEiRA3EVFe424UFyRAqUTjQNmaF2qi1xMbj3R4zVL6z9DQAtrhwz4sxVx",
  "key3": "2cqiieMskkAvH2caerB7VBaM6xRC2qHiyejTjxTSHokSMeEcAUCTNhNcuVcWu3uBpj1CPiM96Gf9DPPm8pKiymtQ",
  "key4": "2SQJiZGyFzJXtnEuk4m2BmMZvjuWf6s4AFrUfe4hNsNPMMNdsa2766HwsLEhGQFhHUhiwYptoqKzZRohvSWUQWZp",
  "key5": "4Z9EGpJJ9DQqCQWWtntSgk45c1v9fjXNakWsuRLV7XB9ZaHAEuF4d55fXh2gins6LUxTHsHLWCA6XaZ9X6fQaxW7",
  "key6": "4oRbyj4ok2f2upRi53xSEKfrhPzt449tfnDjfwYJzhatbFNtaYMbwGVSZUoN8ctcvHpn5jF6BQfRsdwe6zjNYoZS",
  "key7": "48ZTGvE6XA8TpNA4PMSkzgpeGjRe6tUTrTE4LEUyYwqxE6jacmDyBhZbHeJZ36VXgA6Qja4D7Yucgj5KYybcn5xM",
  "key8": "3G17dVJGWLqtHYWQvw9xwEB66WkwdSnAp2TaqWMYrnbNMpBmxB7LgJJdfZqdtJd4L58ABUTm6zQnWn7R78Hc5hRo",
  "key9": "2Abn3rcfigVj7zs87bQ4g7oBifN7YGky5PLTiSRYavTsqgj2ePs4qaYLrJyf8i1BVPTMAeoa66nour6jTX14VFQt",
  "key10": "34xC9S9EafU6njvsgiJeXs3Q2362WQv7TjyYNogRxvaLvDQGcUqJExtQae6q6dnzGmdBN2DdsWiy1SePHnnu5sxc",
  "key11": "4dG1jXBdwWscyVoSRZ41dWQ2pSChDan1KfWzmv7MFNGVzJySzRiG9J51HBvywmmkq823unx1hNt589ZAEZuy7Y8P",
  "key12": "AoeTEySRTDVPzShajC5extgKWto2QpkFRcRGJDuAzv4xqXXvgEaSNFS5qbXqPw3oxT6jsKvGL5bNRfmMvWpQPGA",
  "key13": "4fpjyfaS4LBkAbYZR3MdaoRMydytuCvJNEsGTw1dTTUDMbbgEM4Ej2rq15oApBPtT7SNCGXjEP1n2HbtzdWV2o7m",
  "key14": "4hgCuAt3HLYcCL3RHSVH9nQRLBDByoD4u7BTiateJ4gi1YFP2iAgDCDVebaVfYbrpHAbQ4c5oxuR9ohdnHwV8zu3",
  "key15": "3QBk7qKC5Ltwbii7ePE81Sbp8DomnFNDcGL9mXuaKUA6VCdFXJddMjZGqt6JQCcYegmQUW4BGRgSa393K6svLmhG",
  "key16": "3jHRUkxCYm4W6jTrr36mfvxnaKNusk5cxhqB2f9BfogDPRRKWSAmHJNofRNjLtkeKDmd8HJqLFoDzBeeKKnw7fFW",
  "key17": "5VJHtqUhYyZ2xs4gCvebTQgXeH3m5DNWGwGstNNqh6C5yCED2UD7i2Hu8huPEEiJSvEWxAzDiqHL7qfxrxMhEUQp",
  "key18": "4V4Q4tfuqycHLTbawyD3fUoSLLYCAfGg5Ss72AXAWCbvLWybCXXvATp97mmkPckDnwQ4gbhwb89uY9R4nzPrAKDc",
  "key19": "ZHun6p64L1pzTkmaZnnEP7MYDG3eorhzdPoLiu3n8bc8tMig7D5o1zGQD42S2NYdX3SXydM91rADKck56NrowAD",
  "key20": "2CohrPMsTSzDSUBNCZZ95i1gnbqxZtKvhRc4gQdpp6S9SRt5gBDCMNk1pyWBYj5M1ZNLFGNBKNNEcS1aZDEVbH7c",
  "key21": "22fLpPRAM29BD8uyEENM9qdd5ScBRHu1QhM62P5GU3xG3Kx3LndV8P25NgCJz1cgrcSoxdorLsJNnzNkTCRJwGGZ",
  "key22": "3Lxc2SNDE9TiSYrTF23R6hejckRpht1UFHgGeHV1RH35ZCg3F1suLWqNLHnpbc4n7fX8UX2ZbAXf8DJNrEH1sskJ",
  "key23": "2tDZVjMv1wyzJGYjxGzeGoJMFyaAF4cTDLENnQtYsCqkuXdLAmneQBzKYjcJYcnZ4r7sGpnQYrxk1HjTsz2B6uMG",
  "key24": "38zW7eyVrJVkCtDcN7Vcw7ChqjFWJAbCmux19SavAcxq24LQp9mKH2TgsB3XJR1nsLRu2sHCwiU9HAcr8PDi2Sbf",
  "key25": "mNK4oTnQz9NCZHSRR82AfKcPKLNsHM2ozR51ofUEx7bfDt8RaEAMYJkRygx4bzbtDaa9z7f4Nb16ZXQL9V1gbhc",
  "key26": "34rhGxD11L2vzyMiUmrU4mB75asMGU233fg8Rzi1YBG2ukkQJWK6gqBmGGR1KzUHdDr6X33ZGo4zw7jFMPtQYqKK",
  "key27": "3288p4RfJ3oQ3DoDwvvnDaUEHh3z6TFttJ7xXeM4jb6Ka9di7PoJwaeVny1zdEXY7kicssEmwXiMfNgbHn2fVPAR",
  "key28": "5yaK1UkSvPJFqoR4W49K3f8EcCgiHPNzgUy53ncF9zvp4zQec2k4FCJHSowbMeWymFvaLXDcRbZD8TWK6ZuQ4D3d",
  "key29": "Jn7K2WvudCsB9oupu45kqEoF6Dyygu42Nw5mYnj9o18vdv3zkhCybjehCtagEmv3qPtiVwTj1u2cyXv8N534don",
  "key30": "35bmsoj4MQ3xL4t5VWegtmd4rFbu5oXS6LRJWW6MvpeERegAsxrHLMtW3zbrqpxr69DddA6DiVvLXRdtnWmBiBr",
  "key31": "5p4y8hYPsAk6tuh1a9NVPQmCWbx6563e6xcBj6WYr6tFR9BqHmUERghFoDFYGXXqVFccSm48x5U37tKLzJdkyK29",
  "key32": "63LRzofJEeKM5WwGHP5YT7FFYTwkNBixyfSxWvSkdhBBNmZe5xp3bFKw1t6EDrMwQCPSGY5CoeyNfLipswmhxeng",
  "key33": "59ioNhX93ggwfgZyDcFESVsXMY5K2eQN8R7wNYCtWHRHXhvjNvD64iCXGfPHaZEtZvZuzZ7KsXjFRCgchuDPXqmq",
  "key34": "2M6xJntXScvZnjcqR54MepRdSs2KAUWDpj1oJgn5xDptNGBF1cvg47ZN3v9cg6wNgHMXepEozttWuryq1vj674nM",
  "key35": "ZE2SWEsD7ZZ5Bu7CgdJKStpzrDcvt82a6hu1Bvp3nDFaq7pxAjeYhzZL2bra5mQAk7ZAoGhaJFcjRoiBqL31hgL",
  "key36": "5jAUE4m5B1dN5wVPD46xNDYoaWBVB57KnHs8suM9Ce2mg55suCzM1yQRrZterC8DNtsz9nBFpjQrVZrTYs8LhK4Z",
  "key37": "2ieM3nGFE7XStewWjCzoDgbzPqSVJpp9zamqVVM37AvKudkZiHUYFeB7TdGNg32VfD8QK7v9UhgWw9DCnkqrGNbd",
  "key38": "2Mw4JVcoU2hb7z23QTtatx4HEvckwdMcUUYsxm2Cv6VtD6MGXu9nBWcWYyXWWn7sPgpiey1smadcvo41DpsLPooN",
  "key39": "65dLTm96xSmYqt9M4fWRwqyuGMnX6HQVb31F6ZUeQgF19Kwmf625n8xZcUTgMXAAzEps7fRZQ1Cvzn2xo5h3NGp3",
  "key40": "43wbLhLmu7N9pF7XCq1TJ6FJ2A3qtAJ59Ync6zEpsNGbnvXM6PVnh4gtaU82cd615Ln3RZAwZUmPAMWUvfWi6ymA",
  "key41": "4avcZYVFPGJFSEs6cEveisiH8JazJ3sKzV6eTzT8ZktzDs3PhCTnmdntbnANvuQ8WusHPYSBCPWkfM6qbPeH6ymw",
  "key42": "3ebA8bt4NMnY7e9AVZP2PJG5b2JjYd5k25qFz4PnA9p8dTBT6BWMdN3a8VKV7uLbZgaSFWeyMghiAXT1iMgXQfBZ",
  "key43": "5SyDx5WvFRFpvDSqKQ7TXtzt9o1HbnoDpmyDeyALqrK5nXvZimni6QbDxaztcMCgVmkzSEUvr4CzMJr99gjVzeii",
  "key44": "5M5xH3c8yWoJ2EcJJTZRHLtAuFdavpZ4fk8sdxKydKtzk9o3Tb1yvr29Uu1pRa9QjMSvPd6oT48arJ2Y9YF4y4zb"
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
