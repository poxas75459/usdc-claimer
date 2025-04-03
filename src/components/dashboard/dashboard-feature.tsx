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
    "2D9MvRFMoKu5SVhXxgN2qoRbPvDCDySQe4h5h8SX17Z6bo8sN5uqMZVnh2PcS6wrfNcY97GozzBVu1pAMuAnoQ7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFWPoJC7uugRWwUNBLSXKc1XKgNDdGT7kbfnVp9jjfEGzMBVv59LMinZ626S7upwaT8KmFzjxGq2xgyAsCFXUuM",
  "key1": "4Gk95WcEWfSbSPp8z1TnMVDQouuPy96oRs9Ko4xxE3gFJftrmyxz3L3PjK8BDwCLSKUHMSomuzpguDnvLHJm9hEt",
  "key2": "3j3mgJThiGpvxAYtTitsk7W53v24a45DHCJcGwi5G6SKqUYeT4qBALVd3kbeNR1hNQePTXywSaAhMPt7cmhRwNip",
  "key3": "4znczjhdMYi8pATtm6pYAbjf4vB4kR17T2Kot31Egy6sgCUHxVCBQxrX9omF8uiEtm7h2bn9doeGJKr4yVcDfTLR",
  "key4": "4pAuoZGjGWu9k9W7vK1XYM41GWbGEya4nbkPS2bPXfgSed8gfrs9pv2cZrbfkrh34wNHNqudyU86DYAcBfZsY9z9",
  "key5": "4CjdkSXYVcez1UL2o5Swjn72CyarFNRzdDSSDQZ2XtdvLpudupCZwgbJnGyfDir3pDWj4QtimCpJYjKMhrwDwfRk",
  "key6": "sBsKCH9Lu4SMBS2nxhL7qveUKiMDyCaFFkqHnQeg6VXCGeXGM2aqcJevF5khRJkr3MJCavQd2YLhUPFTg6WiWt6",
  "key7": "5hM26ujFLgWaLq5PzpP1Akdt97hXsqxhexKgrePLjgrft5qAGe5YXyb2cRaGap5v85pHNciXANzU7CbCCp77R62X",
  "key8": "4bEmVHqSukunMg3VTeidahUMNFREf2UAsdF31UM1SmkCoTzfXeRssF9WYBvy9CwZCkTaksV3g4Fj1A7LqtPXUgvy",
  "key9": "dmNqf1zUZnNaswFmP4htLWq3EdJ3vGy9DfSKuUukMBwy5ENQWCg5YDfzydvm59b1umuFPRrCAEjKBdirMuUSeyJ",
  "key10": "3pskKDVGZXqamVtZvErRdoQM69N6WDrzQc513oHtUtWdrCP5MYhu3FQNsMhTrpXXtifJDRwtqSuU4BMfGWZLAWjX",
  "key11": "3wrkEq3nhhjkVjHC8Q7AHTiwdBFxBnaHxeNKxh5LSnv36BkpAdN2pJ21Jk13aeizzAKU6dJXmaNCgdTeFRQjXjBU",
  "key12": "HfE2RocKQMmPpSXqM41swxzXxxzS7vdmCz2cqahuzmEdkhZYNtUYKfRep3HtfakuxJkpxajAire357ognLtG4dW",
  "key13": "4PN5ZeCNvszcsTTB23qc45YEtWpbkZrzJGZK9cjk17VKNgoNyXbCTcuEwNjGLa8kVNUBLLLY1Ygb8KNEV77Yi157",
  "key14": "24GwcjHWSb8nFwEjW2x6QiKFUDa3cR39Y3udpuqqEzY3bFM5ka22adF8SxhxxbVgFuFdRjet49u6fAnvY3GXi1dV",
  "key15": "2VrLKcgjmTa5ETmLFCtoyantB6sEvh4kMacGXcoMkpRPt9dXRSBYuMXnazvGP5tu6FTjN93FXfhRTcyC111UdVpa",
  "key16": "5RDuCwNmb6CTpNEpR7AZsAGefWnqPB8Qb4RfnS4EvJqVp1TQmF2Y83E7vSg7k9naSsZqUvebMzcqJqyVc5872aw7",
  "key17": "5uSvENue9pmg12CYzqWjm6twgCVfU6wrrtd56XDx7crzu1ZknuB3LdRw74RVK4PiXAGDwheU9vQFPjwnriGBUQc8",
  "key18": "3qgZdgBE3FN7vLc6z9doQxb9X8aDJCRVMmqAMM9LimoHNQi7zK4f4Ke6bs6yutcMgbmfT338woM63yft4PNHE62V",
  "key19": "2RWz3yJhYhsdPZCqsTDLVesZ5QU49Sfy1p52E84oYjiDHaEEMHBxY7pC7VL6NJkpwTapfxkZUCBrrQ14AgkytXob",
  "key20": "wvMGm8LBrpvtuZ9nkky2fWpRnF715YEdA1o6cesbj6txFoTn4abca2JXLnPXzHtLdRxh766vswLaeqmn1QhWSGF",
  "key21": "2eo2mz27wGMhtmQvRtjEHnkViG6jNxmpSAt1KpMP5fbTwivNYMU6mEj4JiLZMbCpxpFtfnAHfDeeXCk8wEnweFU7",
  "key22": "44ZCNgf5TmFYAFM7HEmFS7yN3tC4YWTDKwLRoK2q8WsaV15SLVU1LwZsJabqjLyxKZK8MYfq4ckxjfKmS5ewCC7L",
  "key23": "5m6ZLoKATqEnHseZY3Bkwqm9JjxfQfCdaMpSLZJKjGk4ZmnvrD4Waeg7kLbvkSuhMFjvFk7iS14rcozevtzSnuA4",
  "key24": "jTy2f9WQ3pkEXefJa2EobpbntSu5cczzBQeqNLpT7HRZ6RCCoNSoqTYsQTpyysXPF2uURxPdjNW6sdAuM4t9Lk9",
  "key25": "3BrbcBhBzYe3xbSDNm7DfuP5HAyHMUfGeEVYJDb5jrqEWoDivbwsrUHABknSifiRsQvfRpRuc2m9mhh735uUJHMF",
  "key26": "4S3P5MuxfP1JDTqDPB8THw2tPAzWRFPd6nFjzTWCWkw4qvzC2CrvMr69dFEPjboium6n8uVYXdvU25Mxcwbo5keT",
  "key27": "5KaofDcLJ9j6Mgn2xhYdLMw3MAdJiuDSUEMZ8wfMUDjqVMX54mHYRm9mw2ZGGkTEn79scdodG62qewCsuNwoCTBk",
  "key28": "2tc6CtFFYVa8xQu7rz74YhHsdjvaagB45JTiPGWjtnVaxVYttKTPmDuXK8dXUrUaMdojPpJukJJqrGJDPzv8EH3v",
  "key29": "5Nkjfm3n2UN4YJyRZ7DBCgvxn5kVXPk8zDEFrWG9aECsBFs9BB1KqzWpb8MSX88t1B6sHF1QBJhTKDaKfg9tXxoV",
  "key30": "3LheWUy5V1sNBHKCuUC8RXR7QYFRf1HBJqMw3xeRWHDWeEc93yVGhCVCy3R8baqSZqYecNMJmkxAja8rKp3rupCk",
  "key31": "67S2JCXScCqaj9sapo5r5psvG11exjf5g1Bxdi3hxuaR2YbsELipBQFjmSuthfGtPZUiCWpb3Rvxfyrdr6mJvYJj",
  "key32": "5L9WsJvPJJru9uarPVGz91tH82jRW4QWshEHTNBEaSSQG4vTTuUMGQYCjmdGVx5VCnVreSifZDtP7MwypHTRCiFJ",
  "key33": "3uR7UsafDH5HCZdrzarNWEUgGfaeoqf8DfDY65cWjKsxCm7yt5LH3SyMpJ2H36Mx1QoFn1maqyGSJNJhxPukwLnc",
  "key34": "HU3J4Pxsm8yxLcs7eiecPNxFF6dXHcY4ffZ6FcVdDtsrbvQBmsA6RCg6R4kNyEkHhwQuQmjkxUx3aHdsvEazCAK",
  "key35": "33L8phUrdXzMZvDh6jJtWHPAe36Ff884wdgEB9BnC9Xyja9rd2pYqxj9k8SqfbkkbrAn2MnscwtpyLfGMkS2Y7k4",
  "key36": "4SNdvi61pRG5YQ193D3fYUSdgMYcfg2QoVAvXr49dWuaPeh9VLi1mY3tx2cZTLnZXqtxY61Jem1Ke5o9XhoTTZH1",
  "key37": "3K5n12VBSn1d6FBzWBpN3zUvNVfwL9YK9WZNWUXRw4PJ9Bynh9PqExePsaJr1QdtEarzg2RvfvziAix2bE1zXw8q",
  "key38": "3MhF9nCcgyMyWTUwczbUjJ9q4AcouWQ4fRXdoD6xE23oD5ddJuR6m4xffVznrw8RmcTeeqsGYePHHKNG6PAeFGP8",
  "key39": "366m2tQ99pgxCkjztF3FsxKgUETB1wbUhMkznofFJfg9QVb7Qg5KyVZcMMc2hxL8JHGCzPTkzVYf2yigiDkooz7y",
  "key40": "5YfRcxoGTsj9BkjNPaSYXzayDtvuJcbbSvGVcnQ7Zt4rvtCLx3dn3s3xYa7n22Sq8ayTF1NbvVtb1EkJLThefSzt",
  "key41": "5189EgNTrhxi7NWDCYr7jJGRTiq3gMDuLhhHg9rhe6ytVZiPWdMaYxtxq9ZrbPQqjU286Mhmc643ghyfFFARJEtH",
  "key42": "4PvPpCZegH6xvBzSb1KHe4NoKfXUneoebr73vYwsyLSArpYHsaj1N7QD1zo3tUr9f7UnfQc2gLhLHMtRPEv7qqxp"
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
