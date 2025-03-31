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
    "2QwfEHjt6V1WGfdURg5J332g7vgomhnm4M6AiZi5Xi5CchTiMYidbUetEu5ZSA8CYiSNzd3oDCumUYXzj1KDvVdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BdUGocKZdMGmZzHzqZUqaiuhwUWJK3iLZLiFFEsn4pzp5btGuf1Ve1PWZTSVTrW2zz2WivZEEqpqj7CbNKQkPvC",
  "key1": "2DMe87UFQcjfV2SLR85rtFo1ew5MkEzbVibB3m54JqfgPv75WWZTQAMYFr2DvLRCHw2anmHnG44T4aFjLKDc4zfS",
  "key2": "5ERGBNie5cwGchDm9Kp1cnwnEbeHN8vwWSHXcpwQSkeDfnBMSk4YtLd6CLy2AfhK8Lg8QpSkfMFLRHrmxfnqKCET",
  "key3": "2AtWeB16kAz7r27nUtRx3eMZVTMD3ehcCNcKFQakizPFLKPGyJEkVQuxgjb9uBcsUME8scc7kUHjM1xjNrDy94M2",
  "key4": "44R9CMEY1a2c5YtoBvZoGhcV8BpqNP1YTrf8dToRriefDLdPpFqcU4GqJF6GT7kd7ymYxVyoGsBfw1uWXgMnhSoD",
  "key5": "nDercPWdq7txi3spTQ3ZwUTYhftpJjYop6CHQBfq6dRezF8uqMov4W8cWCDwGXhTCpKrEwB5sdHWFGE1ni7UAon",
  "key6": "4xw5fFvnPFeLw3UTPpuvvc87vHt6PE67dgA9Am9qrja2CnX4rMxwPu8AbMEXFiZVoU3q7mJKMLf6TBS8aKuRGW3F",
  "key7": "3J4u5y2QknjxygGrhZoEc1Cu4ewQ4aXcLRHuQ4wFtnNxQQ7H9PXJBDK5MH5AAYDSqCrygHyHmnjoTVxcabmefsub",
  "key8": "4R2Shv1sXtwDSkZbgJEkqEaaai8TTXeFGrC7iUsjaiec2bsMnk8oepG3bHqXWR9n1vBCYB7RVSDU7RJAMRafnxQg",
  "key9": "k2EeRSowz8U9emR8ykYNpBGcStQ2cmiCMLiJddM4pWSaLKFfitbucALXLDVVm2DXdczGYo1W9VWFtFhe3yRP5M7",
  "key10": "2GEfgF6P7wsj2mC8X8QWzhr4GhZJi1uEiCzXq3oBwaSm22KXnUifYUQqpyYEuiFC3GK5AKgp6FdajYQNg9Pkadsz",
  "key11": "5o6TCWkYMR56GQ3JuguHKE4qPz9pJVBXh2sopFisipMSnM7pkwvShUsSjsSsrNT5HHBfkMtaGLgzXgy87ZJkMtCQ",
  "key12": "2nc7xeJFB9cZeq4EVa6QC4zEeBNCp4CodyfECfohXBRG5gKUL6ZTCb5Ue4rJB1rkfsMKayFP5Hm7mmPyzWQdKgiu",
  "key13": "PRPc3bngdtVR3XuD4T83KpcGZPdkoc8gWkDBJpZU3NQUTJ9qHMTzvXEfGStJsGANSeQwotmbstQrmjQe4CNuAwG",
  "key14": "4KZ31ZtfFAytD66H9eh5VDmHQacjwKN8jyDzFUXPTBwu9qWHC4HVeY25pvX1FujUFenDXEkcurADNCH68hrmZ2Gs",
  "key15": "vNmW2JUanChQPQQbAxTgmj82W3nUKcPo7jcALVSY1xmgN7CBDUTPF7m26okkQ37AaJyoucy1wkwHEisiyLRfJh8",
  "key16": "3PZRsGQCwZFaaoNTFqvEdwKTCoQoQy64Japc4ZSuVr1H3NE8AWyMVECidsU2Ab2CEBqwAM22mh6PWBNiYeokucPx",
  "key17": "5A5eBuxaboT3dzyobXRo3sQ2pT7QYvzNXxdEpPFZTyRu6DH53yDWjJ8xnWa9EJj7KiZCGLVt6ATcUZfe9vduiyC6",
  "key18": "D3uBxtRh1akGK743o6CvKCnLrdAxyi9YVCKWZQGyeq83Fyg3wcbk5HuH71z7qUmgHMKyALbtM3uJDvkmAUSdrzb",
  "key19": "32rzJHg4jPfX5YGfwRDd5GGEYznofPJ1ecXFhH2ypdbpuXbKFv2gNXhzthE3BQjkRSCnGBPrUe53D75Ct3dBQ4Lc",
  "key20": "67Ka1frruEKNkkQPj5bLcVgfKW3NDZjB6jdwQKutgiYA7WgZWremsFxzMsFZazEyhpBx7dXUTipgYAKDe46sh64S",
  "key21": "3C1agHVnemqry8J3RETtBx6oVFMUpYbyKcSU5Mz2LogwFGA4Z9LkwmPcw4RgFFfAcVzjtkYJJwXe1Efwqky5LFbg",
  "key22": "24n7HWvAvkrDb97pLpkdeWe8mKk55NqDhGmrzxBxmbaTJXENp7em5byt1QEvqc8x5G71qKEroTBxRqvG3Swh4pZS",
  "key23": "4rLtkqjeY3e9xrcmA3q8DomhhthAhgscA4NfmYypRWV4qi1TH2JYV2fW3SoYjrsZrzztBPmBW8yQnCPQSG6cB2Z1",
  "key24": "2A2vtZa19cH5LDynvuyWNH4aLRiSC7Vp5FNDCEpQeHTfJrR3KbqV59cw9Tga14BaMihexJAMKxwdWxurgAZYSXHj",
  "key25": "4YHhEdTPFo8cDn774E856ejSrT3PPrhUURLue7UWi1yF2fBoxHZDmKc36SF7kpwG3LCJhGw1TG6seBS9nCZztQRp",
  "key26": "21bRwVvb1xwwddxzgHWGR2ZkSDNoRBhS5v9L36qyvnTcAkskWPoFJXQLCctz2WnhgyQkWmFKvyAxxpowdzijZuCP",
  "key27": "5BCHdyJVaScxFoyGziu9boXPzbe96JKr8wSbv8hhNQHmPBXJfJn84Xp9v1nZFnLbdKqxDHxajWBsHK5n1B5CwQSJ"
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
