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
    "65EFtmEzXKjrHpHaeKtj7ZnanM6sUbY6FUk7mTmu6R7Bjxt3o9JM8KdhX5mGaU268Q3AwJtcoN8hh1rDStoBcNUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9mJNZvt45qTe2pNRz33eKMoQ4fmeDT8LjnPZi5iAUPECyr1GxVAMFJhnEMttiWmE8bFuz9FPhJt79FaAmeAuCF",
  "key1": "3vm8gckW49PNx1yi9dhb7FU4Md7BF3nmYQjrswcUV8eCwVDjRDuyxQ7TWs7ZFLWEAT2fi79CJvRRo6Hug52bCh47",
  "key2": "2pTTZ699d91YNvkHz2ZZ2jKFaF7fApBb9yPngaV3P6wfiSXWy7hNC5iMtzBLRW9DuQCk2BFH38FpAT1m5ACBGHQZ",
  "key3": "2RcCVVzy3ZfJefmeRfbJSCeqY3C9mvSs7WDEQjpZNdw3ukYDZibvZWHa7BYcX1upwEm6Z6CmWhE8gCVDwj2CWMrf",
  "key4": "2vrkRqJfQ9s6zVbJFzd7WCYFkDGRmne4wmH9gfZA4dKic8BT1hPrdHqxhfwFEeMuajEicjmL9b5subhVfAUK1vGV",
  "key5": "3wE285rawF36zKb5yLxPHSvp6dKz6NyMfhmWZx4RuubV1zdodeWuDHbpRDNKDqZkEbnuXmQf7MsaGzpPR6RaQc1w",
  "key6": "Q1ZyRkNfR6zfwQCrMhDRvRjoGAL1pry3Qgza3gV7vHK4dgfBFeM7WfKLa4yhLuW3nAK5ZuwybpRmwDCrY8uMU8H",
  "key7": "4wArdtWmAx8VrAFFSbNw7hZozQidCeSHwoMstkL3KkvJevLL7PhfwgUjcdyLfUGGi1eJiHtUs9od9MdqWFQLhGBq",
  "key8": "46YMhVdRzREmB1mJAFndxj1g9WDYiZSMn9avx8GkKWb3MA5aChKn3CmbYJTQmf3nype9qwsSK1FWVamhKsFLx293",
  "key9": "5wqefPciWvizKDhaUD6TzuXUCGFHK2JpUBmMq9TShscUW3Gsx7gfwSJFwQzTxsunhUSYSoWtijg9p18MHDSyREMC",
  "key10": "5TnyipkVaC4u3yC4Ujt4uKjGC9D2FynR7sRx8dzc7xkmd75rLH9Q4Vr6opDmqTDvDQEoySNd6GF725D5MXFZNcE1",
  "key11": "4YXs6WgLPL1SNPSJn9ew8wC6SkVVT9hSQXgijGR15a9wqVC9LKjfMEXQC5AsRycW8WmQkLVaNDbyFKpPQweqabye",
  "key12": "2eRieSr73oexsFLxg8213UpnG1NPRpRgpgHHRrB6KUqp7ZyawTHiwcXMHZsDppWMejDLxhyLeTnu9q7wyf49g1X3",
  "key13": "hWCQpSPKftgXh1GCfy4p6yTipBUCuAYvB2PMfumhLn5JWFzrwE6auAgHhEcW3Bo8MyWzTii483E8PUBua1Psnqi",
  "key14": "2HouFZVcjWuUXkN5ENcqVRM4u6ehTkvpcvd9v31dJe3Tpgzg8xLBiytBxTnML5utFzkSvfAbPBMX1UwyZLjKseT7",
  "key15": "3TfQusefWKP7UP3LU3pxPtZp1XdGSPmEiA9CMY7Nw1CEdBTDHLWYtcFUy5SPDE9wMQCXDHGkxsbAvWdNP8PEKuoU",
  "key16": "zjMuiDugC3kQcLcd7aARppWefuDqifgcrzkzEojtZX546JSB2XkmLyVdoy3xxyRbiz1LC4HDUm6tp4zF3MU1iNw",
  "key17": "2PdEF1xBAEffybfsHiZFVdQY9584c4Za8uDSS3cLC3RvPGp5MFY9Yr9uUMQhShuRpE1i5w7Ppq4DVLcike13JGq6",
  "key18": "5aKnDiTKXfuQsPVpEbqf2S64mBRQL5xiszrpPZaP6GqsKcUBManoVTvj5S1merpjxjBjDjWjuSWv5CJ1dsDP1Pug",
  "key19": "3AZuQmsmPAZJRzKHL7PY5FKRyFGBpo9uanBKDfNuKZSmHzMpJaHaSJm98EPRc1CqLaXoGnJre4uEX2c1R8m9rpfC",
  "key20": "qsvcUfjiJarStPHNp5EMuiCsBoLt2uA4EwdhSsRom1htW2VyK7A7aJEVcczabtijQ5X1DuB7HggW38vkvBunY2t",
  "key21": "2yy8gijx86kh2n62MRFijP1S1E6f3aZXuP18VcoZzxTx1siLjYebZtfEUijvBzJHckokKjq5DWcsCbJMFq57ap4z",
  "key22": "381v7bTwKLPDS8yL5HUJnqTqngqmAjhPAs5cZwo1TBx7XpQXBwr9mYhzFikghPyJrRoZpWGYsxTCKAxF93YxTzd2",
  "key23": "aae1ZvxxVwNDTsWdCMYytwC9dmHFG6EZYi8iG5WCJPo9bH8n6K6FVpDZKgSQ2o5YJrxD2YhKZzFCu6R8tdgKRnM",
  "key24": "3wmam1drRp4bHSnz1nJB2e4TV2jzox8jAUk1swRn4fgeDHcNwiDrYUbYnBg4KDsnuYYayYEbdcjDMNzrTpgWiJRe",
  "key25": "3MtVCQjKBYjBWw9pNZZu3ua22JZmbeNqDod34BEKsZDsx3ezhjLtYGaLHpoD4gHCyk8rFmZXfVrDFCcuEu6JWVYg",
  "key26": "4Zdc81Hapy4NGcJuhGaqRUnNsLLztLKSZh9e4JxKGnmYsPxEMsoZvDniv2sp5gPCGsccDioekn2xt1g2d2t9R4WA",
  "key27": "4hTWaqLit1Dq45NoKHvfBffNnq5uisjGACMySwHxtSqvRTHFbGGWFMmiQtRxWhWSgxWamFAyEE8rZgH7yw1J118v",
  "key28": "5WkuQhvUpRruRMoE7a2pwgQD5eKKAyPusqysR5gmULLk9MUC2vaf1A3wJTbfNs4Wdg2MNsGmwEVudj4efM6FaJwa",
  "key29": "314ZXGt5iUGfTGyyRvBnKqyJ5Vj6FQ3rao1fRzBC28M2yxFBYiav9yiZjfHbtLvHPCtmaBVeoKkJRJwyS2H4GdxG",
  "key30": "48HYsDqVJj1B1117sSwnmge2SGvv1K9awpkZSJBBEwLgLB9e5gUXJJZVZJ1XLgP6xs8KTSFGpUGNfp3uzGSoGzma",
  "key31": "5KYF3tsAjFudRRKRCZkzkf9sdNsUzKjdYsJ4Xiggq7pjzKsu1VEK1EHW6k75Cq1KoYoWxHBobtGhXmrr4y2Mnbe7",
  "key32": "37CwaJFdudenYigWBV2DjtiSG7y4YyPAdjvmXsu7RbptXzF9RQ8DWTnHvpBwu1hgR1RVeJdcc7SbSqP2py8tSaLP",
  "key33": "CXj3s6EgYRdpm2DEYPLJxcoHUgbyBEzUaeFbh2G6Q6kZnbSnbMbkraJBbTW6DZDa1vzQjb5dU2K5MavFHFS3HCK",
  "key34": "5N8sgbmSuZtEhMSuQZBhCfE3GrUxbesgVYmjQsnf9YbM4KFmgoqTiqX1WGndbqdPHd4vGLuRk7KWkgjQq3VSexFu",
  "key35": "Xr6RPdh2yzPbvC8w38HqPWHoHweunufcf7LUcpKEyDovdbrbTNH22ZGjCD7ckq7ztXJvW7p6f1FCpDUDCBjs11g",
  "key36": "32yJbUHA92u3AZewNNES9AKACSFauWc4kWtWLoCytmHXyLwt1zNm3CQdUvRadNJf3ogxC8d5yUoTURvwCzAnyJUA",
  "key37": "4MTQtGnK3DszJw29Wt2AEKR3WUSMRF9o8MP2ktnSW9gkyxu1TKcA9Ub82aHg3Q3qqCHRNM1xdtoyNvbD9zRqYFt5",
  "key38": "JXwraJLuRSP52rGK5XeoSVGKzH7C4uztFoF4A2EXxJTm5oNj7L98LvHRHoPAtiLGzXJGpPMgo3uvCALA2VzeAn8",
  "key39": "4SQ2SWLvjxriLiFHAAwfWZ3EGyFuDXcYipxS111E6qC1uWzwXHHsyQksoM7feSy9FdG3CaVydTa416jvEvVgWeGh",
  "key40": "oLrMcvXxhs49j9hX5tSBPyeoEy9BAtmz2aiErYY4S9Uty9JEmUUMpY6G6JUzdzVe8YXjoxv3wco7RtACZ5sN2Du",
  "key41": "2b6Sd5obJgpw5hLv5CrZXaXyWeWH81f5jQaAJdfwUryKUXPAsP7Po99B3q7NZPmfJiKXDCxveVj12zLnYo8P2qBt"
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
