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
    "zCR8rZXfKoRmUKgMMAnZRGECuUYnDUjjzmRW7VaRTJoMSaLoio7S3WQWA5ZiAvgRD2bdZBQnfgbzVu9Q8xZF5d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nSgLXnSzgxuNF6eyeH7EiCP83MURb8UVFeewc67ueYd5dpKc9SbZvcmwkLYrhWzB6hpBNzwL1BXCar4mRahL7Sq",
  "key1": "3YUq1ZXjsJGELHx82BD16suLjomy8jPZuHQb4NyPq7CzBLbrpdZyXCEjVjvpAYnycAqM2viKS7xaEeKtzg4LogaN",
  "key2": "2k3vjdzQ6VLn9BjpjUubqKVqCjon6YF78xBGBmVEzuSsQxSm8ezGgLDbs8iuJJ98z6hq9fmNhEBe7XPFTTgEpk3T",
  "key3": "3JJjp7enobW7QGVCM2NXUdmwQfdQmWs4YgdRAy51ZdLvBucUfzr89Y5boxfAGnHUBtFTufm3ZZR8WGbKJmz82T4n",
  "key4": "5Xgz34VQCeQM2KzzJQTnsz9FKh7FfZDdSN722YyLYBDyfZ5sUnNKfe5kYVrVvLZxU4oZJmmC9ePbfMeff9WjU2tk",
  "key5": "3GW2hu1MBXJoqh2kcv5v9QTeTRXRQmw6gtVr4FcmiwYFjEG5so16CBwaacrtAupFnwaESShRQGRhhEnZBbzAK3bq",
  "key6": "2kZJgdpD34yV6uNqi9ac5HiUcinppTNeVGcTZptxVEW2inMfayB6heg7sgSCHMTph1CaCwvGCboPnMhyAWAebzjF",
  "key7": "4edf38hFezYFC2ALhgpnDFPRpLsyiqeJGFnZuhuNNKMsj3yPxHMw1RkfUz7MuTrBLn9LdnYnKFK1dkGCPKGtL7wd",
  "key8": "4exFcf17CbCUyYUKBTF5UT9EQhgceTA9PsCM73CDfuEzARSRiaS8qzugUTdWzdXtMdCA4kj4gNnL9nKvinYvQnue",
  "key9": "4Fn6349KChjF7weU3y36wdcZxJ9ejfxqGFMSG9hCRkJP4xjE2o1yV6KYPqi8GaSBrKM8G4YDQzW8WiaUDVp5NAK2",
  "key10": "2Vw5HWdjuA5No2MYyQxYFRNT5j97MGJLbGcRrw5fVHGqhmUxoJEVqQyzSb1p268mhYatZD3psDpsgBRqnvBiXm2G",
  "key11": "3axKahxdXhniWP3buiU7kLE4j5Mftq4gCiqTsi4AQcwxQECXr9KudcoU2pg5qHChbaqEopKMrqxh7w22xjTsTY5m",
  "key12": "3kas6Z3vzo72BgDA4W4fSGzFrDPfW83YcwSkRnMyeRzBaUw4eFGPP5ZeUdGujuwups1QmVH4KZND6Zcpg93ihkxT",
  "key13": "jKjjNtEnULGiThjTA8kruRhYLLf2kRKPGLt2CNdHufYHe8q49XNCdQC4vJeGvtyzZyNvybubwe5FKw9SrUuyFWa",
  "key14": "3R7faqEBzwRWAfpVW7xBzY77gs3XGcCNvz498RyEM73RhRsyFFqJU39bbNnwvF9YLiSRGj7crvaos67eX9VEjcSL",
  "key15": "eW867XNS6ZtTvxUdtYAzrbXuhyfph8niGZ5yCunNhrxguhc3GPsoTNN4nmj9RbywVEx2vhzdZproiTkV3Ez9auA",
  "key16": "3rvs2tAZA8XvSdtPkLjHaciuT89U5HJiGaBsQPPuykbakfeBvY8kTHKoR83HXLb4SRXmgneagpcnoAvDnX4diVww",
  "key17": "LAjVxyJC7BNHPz7UvogMgQgaNKszigey8szhBRapho7uXgzeS1E4STbSakgNyFjsT33cc1tQ6kSESKiEvunQyoV",
  "key18": "3hGS9QR6EGJwbucXsX9xFsuewd4H9UqjrhbpVd8JCkh3T2G6vRCkUqLAYtMVcVDhdC9nz5EYEST85jxNhMoA8dQc",
  "key19": "2864huaaNwyMeaVKiiPmbebVsLZbmQRKdg52B32VErAFwYHLCpokNPNogt3vR6Y6c7gYq5ouXognW5dpY3KckzCF",
  "key20": "Fac3WCCSdC9oE1JhrTGpxdBr2vGpCqWQzmnB9ZozrDUEfVA2A26zBy4ZixSJG8SkQPJvuGV8CbDJ8C4xvFADUAt",
  "key21": "2kpt7UPC9di1cfrx3T3FBUWSyyQCHEHugTUFiPAqXQxLzrpFTB2vTGtKJrzvCq2iWosDMz3DgXHTJ3Ub1LY4dqwo",
  "key22": "2mZTRaQR5qdTsJqRL3NymhxDMccVFgVcq1yzvG2qs29Hn6DnaMFNxPnQBLeeXnz1fnokpJUwzSHdacNqSwEdRkho",
  "key23": "5G3f3o7tnxtheKhB23vACat5xwBJhTysm41a3twStMfD2Jj5tgj5RvoW8U4PLNdLJBCUWTSxx4SrC1g537bBMVVj",
  "key24": "4pKNe5r7UdkCqj9zFQEmNSf5wGusKnXfEffesmc9UY8DMCjKoXqLHbrYz71q7889EiJqvBB2y2jK1gMnNNmHaQYX",
  "key25": "55dWha7Moh57TYr4beBDV5wju8fF5NwWzXmfSxruZMcQGb9Q4P6CrZgUBr7NyuDQnoi7xn49ow6Fbnqg7y2NWSvP",
  "key26": "4xZC1mBuNXiXc1zDd5Vj2PGipLTSwK9z8yqDVGfdd1wBw4DynvhyKFC4kAjxhpz47hYCsXQQ7K3TuK2Rbvz4FWiL",
  "key27": "2p4Eg2bBReBmoK6jZ8yweGyGNyVZMKQ6ekuChvZGGzcXVzMRbeDAJHwkq71n9jn5LKcAdaSwmNrNRyxKkkZWmmnC",
  "key28": "41ZUaq7rzP2av7X7Zs55s2zhUirgKGWZx937i8wBs7eNoEXg2NC13LncMJQovidAH9Ao3icMiWwwuNExwnHymccj",
  "key29": "bWv5K79AfCmWBEoh2s78CCfsywEx3tSft7fYUaxmK5LdWZBAMQd1gjxYDboHNdxnkKLC5QJUinQSeVVJMXrVp9N",
  "key30": "2QyRZgg1vFu3XRmt3U6vYUbLsJX28Gs6UFWcrX8gBbyrCNFephKgNwHjm6Pe35kbSNC28DP66YGnUB7i2F2KJApj",
  "key31": "4T3ZyUvMgQaYfQaf2QdaXJZJmHqzjoV326iWJ2h9xqwrsJYRm1NrrEv7DnfJo2udVN1CmKbEpfo2KsibGd8japwQ",
  "key32": "4kkBvdM37AMv2N2ng619pP9RiyRoqs1SBsWG4tq1pHT2kP3MzLYRfBa6PwhVCoonbyV2nUUtTE9JWCgKPPfHS2sX",
  "key33": "mWi28ZRH2ri9oAvvjxxkMPLiq7TMYo8JSsanB5vNfjqiFtfPa2ucRv7DPdysrJpcMkyVhmbsTdLzaViLnaaKh5p",
  "key34": "37NK6HE7ju1o1tG514CbvTxUXDt2QmAggbw3zkPkTdJ56vriAywXEJifXPuC8znSoNNnPdaYPDARUrfMgh2CTBY4",
  "key35": "KPg5Zmj5TqCAXerSaxM4gkBYUP7iAqXwcA3vHMjLVWvo6vKuvzmymRg4QTQt1Xzb7Fmdih7EXG5Zqck1ry2xZTx",
  "key36": "2iaoz9hcQjqEBw3DETUyAPRXKSseNYat296h1VrjA4xrzmqeMLuFZT8kwjRb2xrnVEphjw4Q1Mqzu3xkAg9BE6qP",
  "key37": "3CFaEqg2XGUkqujkp91NgoYVvCWipSqzg3UxFbPSm7S5asCC67mCUFeAaJM45RScj73h6MZY2LSxkAroS64vAGMz"
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
