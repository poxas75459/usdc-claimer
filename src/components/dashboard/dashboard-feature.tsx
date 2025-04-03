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
    "611bhEcwMqNvo1SyfkKN9RRrQqzh3Fc6ogyCemMgrQbaEHnahMvRtdKmoc5zYzTwdGZL6Qmyun8WMNfNNhkbkGWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9JgJETDfHHnBXR48GZsd2CAjRVFBK12bL9Komru2nqwJXchzCXdo7RGXFbRS9pRLRuyLLGbaSXmYTKRR6AeGBX",
  "key1": "2kFNDxP5zDFY8Q2audthD7EUxQjvqKSc9kWfafxEd1aS3hXS6xwbZSfmYSFAz1kNsUXXz9ThBQ7oXoaSMXyCsryh",
  "key2": "327FCcq5EJuaAFBcZG2ZmxLJRZiFpWFvNYCX2S7up7LQjpeUD1DmUFAmcwH18MZfrgaLnRajSqPTRdaPZC63Lvcy",
  "key3": "2m32LZKqXojHncokJ1svMkLLdg1R2UCtTDTR2xejMfWxQdoarePh2pzj5BnphudwzqPe716vLRjyzrKxCspMxptk",
  "key4": "4ngm9fXai1bcgcWWoArQ9z2D556Duq8HSMWRjm9dCaubhcoHafKNRDcB9xito7q958kbGMEFJjG9juw154phXXd1",
  "key5": "2PSAFzCWS5Q98umd1Ufe1nPfhpFpFuSy7rGDkMUrM1a7N5hyXVxMhJCvYHoYTBXo7NruMTbDe6SZi8wuMd43f9Sp",
  "key6": "xZn11JFvbXCs6omQ9zVhHTS4AiJL15aFWTgjvr94s3nHxosdD2pQR7mjBqqsjAM1d7S5Zq77hRZnkkXduDYJXsN",
  "key7": "3ddbSLniiPHsfG8Y7ETzrYAAa5gv5DRvoLJKLhQSad3RVhH8AcP4k3jmeVNUfRGRqC3dCjbwtJ5WSTps2z4D8SaX",
  "key8": "42v7xjRiw4VQRh1HndLvKr5FGPhvwQ2FC9bMLkiMUeSuUGBZVNgm8eNqs2GZteTbDUk6avBZqnDG7hatPWnoP1cz",
  "key9": "5joGS4XjeBPGEpDW6bExcb3QqCrGzHV5Gd6MS6zySmQ5u9g5qTYxqvXFcVnojEP3bMUt6n2A9WuyCwbQTqj5mxDN",
  "key10": "4Bt9YkuFkHKaRJpUxfEhXwUkzPgU5UQSPF32bKBnHBfP73uDXXUqTSPqDpLzxno4mSJRYuft5fa89MSGbLEZJZsw",
  "key11": "4ia5NdJMYkYyaXV2XmAgqkHQdnAnxAqBxrN2yctU44yknU46d8GsUekuMnFvvBepvUv8p48nLU7wasCWtDr5XtgC",
  "key12": "3KYTEvUGi3VRLsepyR21JpJrMSrRHhjoCikXBVJVZ97FbyUvmnEZe68uyyEmEWssiQWQtm4psR4jfyWFzbdDKrqk",
  "key13": "8B6owprTpGz2jA16EARq1XhzknEUBAqFznECBysNeVbvjPS8urjiMgaiSALvdyfY2jMa6xLJrGUBRaYuBKbz3Lv",
  "key14": "v9A4JMEDtQfjpujfENsJ5cxXfwZQbVKYJQx3U2WdWW8kiEp1VMqFCztTZ3Dhn6qLBYPxVht4Wu1TecpJzc4uonQ",
  "key15": "W8scSeFeJvze6kDXSRe2ruv29kKiC84MpSBPiaveVJRaeoxXqCZ1wjUz3vKfraktHRoercJE3amiuaroDdG4PUZ",
  "key16": "2fVGEayR7246KnUN8SWR4DXAwCgVL5X2ijAuuRz482yYqeQYkhuMVVqHhTZFUUpyknCEcZFTJqkfQ7uHKVPUjZY",
  "key17": "4mXLYDWdxKqEq2cJHpwvdNBG9SjZz6Bt6hwWpSVDoqguCbK9p7B5BhRdKWwHthX64epybNhHBGV3U1cZVmSbAu5J",
  "key18": "2BFfCiqWVbMKmqaei4nzdhcX3b8eKK7NN38b2idVMTmAAfSc7kXWseTQCdr68dqh3M6WkMstiG491GoSkqZaL6cQ",
  "key19": "3E3XLC9TzaJZzmyUo2HErxJgr1pwQRpPrudsU5aDgjp4UTv347h9WvCFbFDwgRu2eiVv81nQnccjjdy7P3ADGZMm",
  "key20": "5fgWA2sFRsXpqV8nb24K5PeWuksqA37z6fSKB1BpViUWGHpdYmyXEGZQpRtopV6DBc1PdBe9TcM8x3FA22a7Ru2K",
  "key21": "2qzvWLWPmir6h8w5QcXbgr1Nbc6WkQPbVqfU9AmzCBt9gDZxuFnoY5nLK5Mv4ghPEFf5aPfzwszimPbtSucBELD5",
  "key22": "2n1ChcUmT2bkkGEizMx9ZeowHfu7sVoapZozRcDbvAdFVLLVK6g4b8pbAnXjvD8anCe9ZkV6oeGAvFzgHJjJ9SeN",
  "key23": "4VuXrwjbfwt43JPpeLNjYzPF1LMVXcZXXeAJHQJjA7P4w7A8bs4WRHFTuWRY1QXwmh5EV3rAzji96vqDf4158DEm",
  "key24": "5imvy2hMcFjXpdSpZpsJrxwZRXz2niLYb6hUmAs5zXDrJKwYU2o4hFpJc17qrdKtYgdCMTbkUuZfRQsMc7FJFU8W",
  "key25": "4pMUG2HYigmLcR5u43LKcvVdXzWmt2bXQ4ddCE3b4dN4LtkAdQz6qVRbhdKFJyvWxL6M6ztG8evb3xjzVjnVjbBU",
  "key26": "2QXGvEmQt4qJjyqDJdxF24GLsL7UnXTW8hjpCRkvti42fxSVsyrGSJoqo5N6dhtWJdTt6Qddhw341LyrccEhiyWg",
  "key27": "4eBH79DsXvTLX7nCRjpeHsj4jYYf4i25vaxEYnim9Ei1YS1MdDPHuf3Xw5gKMN5zRWqaswtLDCo3CHzsxMxAHxU6",
  "key28": "4GLeBqcUzPhdWie2PA5HSg9nMpxiEeLvaEnSZSAz49t8kAuZXHZh8265feBrejjUJpVNZcWDfNKJYUyfPnphCNSH",
  "key29": "5F1rdunmQwR4tU96vzheVxJjSvMRLUVJibxvDM6fqsh9RDjMPqRzV2jb1arjXvDY8FRyeVuwiX8Wi6E1RJorJSaf",
  "key30": "DFSEvhXQzG9B86xRtddCPR5k4Bg6RPsyNcSKKuA3BiRVrKvHBhvFaYwo3ZV5tPgnUwjifycH3CnhERPDh4MekDA",
  "key31": "4auPBXUmyJ9x3iEPY6XK74SuG5pTZGjFr9sb5h7wwRXSPN1egNsiNb8XRGkiArRGGHT5NqJ6khotYwDehW1UPsan",
  "key32": "3ZQ57vTg5g9CZLKg8CxWQLyubgAMg74z8V6ADyerxGiKvB6h3nGA45izMiCjanCeeep7aWPFEXYesLHr6uSAqquW",
  "key33": "3nUZGCZDUJSGcMXnCksn2UP77fszcRwzqryhPK1eqyfyjGT8z68evbiTuWss2oJRFR8FzWY1ji5jaCy6NVc4jstE",
  "key34": "5ceNn1aV9xogWUhMk9eVvTgUVJmNSF2SGZWTt4jJPz9hpaMVAb21gEJZ1fkoKiSEZyhenp2D3GubMNtkPeST4SHg",
  "key35": "UdqWyepVXYQSwQCnapBNZD9wFaoKsH1cfzzU9AQz7dhdxfdCGMsToHVPDALfnmMehHZv1i4XiC5rfj6Z9JUw5uJ",
  "key36": "QqS4Ck7YuA8JKo8LDS1cc3Mj4MUyvroVJ2kZ44ZBk9wNxttrRrHiKdKLUHZF2673hYKjRbAqnUJHrf4En4mSx9p"
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
