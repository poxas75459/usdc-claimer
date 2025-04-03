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
    "5nk94PeenLiWfd37SuDFSYbDRpMvXG5CrdgzWif3QivjXjYnii8UFLyUdYZezj5QNSqmwTcPQUpxNeqSURT12byW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjH6E51hgFugyWfymLb5Xv6PaTdJ2QM8g57CBYevtCaPnuFSzboULDMj4maBq7CU555SxHjNRst8vxwyvkAABAo",
  "key1": "gvnh8aGm9vy8o5fFAdpqtBYcgNrU7F6nxs2tCfC2UoW5v6nPoi8U4jGoq9jDknNnFFGS6spx5WzDLWZLGmcifTW",
  "key2": "24YtgjtwP7GMtXAxxbgxgf6PLgGAb1QzjxMW5zdMvS45zerL816cmiWj9TNbYUU9qc9cw414DqGZqNrek9MbHSYo",
  "key3": "45C1SmPPSFUmBjMPV37K21SF1ZBcD8JAXNs6DUPH1y9crLLsTLb3PHkYGDjv83Q1TG5vSZ4kJuUFLevq4upANV5",
  "key4": "4tNJhxtQkhUSTF7SVpyzmqNgK1bkZcTMpParTmCH5h3Rq9twoJXSXtxJymJBkNCDvgWvwXqiM6xQSws1HDFkLTmp",
  "key5": "54oyeFUETgf1yjseisNPudsaEnUcXnW12L9co4faXG4BwyG54B4ygbU78B4y2cKkoTDH2Ak5MQj2dsaQ7ndKtSjy",
  "key6": "1jvDfZ7MKDhzUhhnFJe6xgzkW9yf5foyezriPMrzHdVxitrokaovbta1aY8XoguoMCGYmT7hFr9V6CzuDdbmzQf",
  "key7": "4H3bGjAPzdvB6qUu3vcSpMZE84uto1akVTTbcSfjsDZbC5ciucx24cjr6yWX5EKf5a57yfN7RSg3bJ4WSsobWCv2",
  "key8": "nyBhnGWiN9XVmwW4vbdEjD6vPKHWy6B3nMbTt4noyaHHsYQfZRz2GymT63CobNFaL6K8dZ2aRCXpUakztTWZwQK",
  "key9": "3LNx3dUetr76213s1NBcXh1xGUX9vxxH2hwN3MqhYUun3v7EXXEtAdJasxpbUCn1CrL41jVoRTeLWbHqhH3sa5hC",
  "key10": "5MfQW7Mar9APQ1ScmsW9ecoU1tfNiLoP7uJLZQ1BgVnmKHQc8omVGTck9xKEavtJEtwQqaXWuj35ZmEdg9dZeXdq",
  "key11": "reNF7DG3Y59oXsawDqwnPvZNHpyx7JtfW6V1fab5u7tbRtTBaEebrhkYLfra8LJYLTqnzTSE1pGxDuMcG83iRy9",
  "key12": "4GktPPAPoyefeJS1ECYzrEULpzMxaCpwPrbC65gW3bBNGrE4CEKH5RU6dbqgtbXP8T1XXXvTrq6UFZWAcdHA5W3b",
  "key13": "5e6YvbpKJzcGmbKL3BLdSZ7j3AMNYUanrtP797nvmvEW2bpaDYxKCarvTqoQBdG9dQTZxTAQABTuSgDVXjGubzsE",
  "key14": "3UgCVkw5NgRVKP6boxTiUnJrVPMFC86esom332FH72XRbndLYPfVcUoeUGAfK4Gt8S3i4wrfjsachLu8HPKTAoFd",
  "key15": "4KjFj2fPgmwPhWzNahCxS3Q6Ny2XnRxDabN5iEemmHPctJ2Grk6thd8UB3aQwQkRHmXDJjjnEhicxHXxpsb4EJkh",
  "key16": "rHueBaU7N9hHGNw46D5LK9XvQKiBYrzh1yg6VeGoLNLZ3d6EYMm87VxaBsXE3MqxdaNvDRWCUi4tuV8XevH9qT6",
  "key17": "25nFD3rMqzVTcrHeHhyhX7u7fd3f5yFvaPPTXXGJ1KzfsyPUFNRnFy7bPyEJPaD3yK8J7VvRK6fPNcGbZ9ufgcqb",
  "key18": "2G4tanHbAKcAyFhL6dsGVwtgQfY6U6iqWFR3WKDBstMxtfkdbY2TNuyKTvw3NAHS6mAtXSwoUQeuroXvEVzXvHwk",
  "key19": "2vCtQ5ToP1jVBz1MxGE286bppeuy8JgtNkSRVRpyMGsucyVZbB9uAGgJXcMH7UGxFZw1JA97T9U3QTYATAngjdkN",
  "key20": "3eZZhBwdxvDfmdKnrKrVwFuHdoZX8g5pPaL39UhsBxpS1uPrt6H8BquEbDDMMav5v3W7D39nzEwtmLypxQJ2Gn72",
  "key21": "34hQ8j8gRAfSbys4twga1bnHXqRA2ypJBPhTix2Kb93EcPdxbjjQoxSnLzL7BX4rgeyNB3i3jGFkxu2kTwhi151N",
  "key22": "ftChBognbhVaAkPuVgjxAz9sDpAUxwLay2gaMiTzxmaU2ArTSMNXc94RYsvvEZNTyiaNnswZ7YazepL4x9dc7Z7",
  "key23": "2g6VrU5XHpNmcaZdNw1mNMHaHJxyEML1pzWC2KgNjvv2Zhis3Z5EVi5DERVSoN4BpVZJxbGyqfSrtt2TBjtd5z4K",
  "key24": "3NN6QgFSfC2LeEL5DoxTtCDaJNUQy72kK8DXi738gmNWnTE8Fdhm5JwETBui37oLKmg9cjJ6KiKEGttw7etmXc96",
  "key25": "3aA3ECZYwD9CvhpvB4Vyx21K7FjhStBzuenMEftshy3K1MwdBiZh5x4YADLsSEKjU9fiM6gqNfT4PKQrNSAd6bpH",
  "key26": "2HmmVgUfmkxSFxa89Kprmfmk1rnUfinsdTF3EhCBrn14xoQqQ8dsWdxBxLFhCRgBbexjUMrM2d42B9oCvLMvyPbp",
  "key27": "2iRPmG3gap4ftocRJB7ZLLGgvC6LhffkePt6KXAP2CtzY4mL9kiCQtxdcxod2Rs9NDxS7qDhJ2jHpuKsfUXDax8f",
  "key28": "nsDfr6y4SWCh42kWFwCHkp4YfjZsSBNF9t2stq11iZGDgWxnvpCaFyfRBskXFtFufZD68ezYz2obtmVEH6j3dUi",
  "key29": "3JiwDSe8yh31uSFBgdXdcQC6uiJwpzQZ4ugFaQwiRQMvz5owdJewC88f71zfvYSsS7CaH2cfjQjv2UQA8aKgiDyZ",
  "key30": "4FaDvBRZp89Er2v42RTqxSF3WMpGXqGqrwfc3zgMiUZAiEKBH1H3MbrVKC2GjfWTHJTJz7a7ZAHRWdnJu3n8s92s",
  "key31": "2H297w7TLrS5CQKvdNtZtRPBz6eoS4ggKpsxBZELG9AzBf5RAJSwA2XGr1sFTSPZRPGc7nztmyFg6Qdwaqw43b5y",
  "key32": "2j4PSeT6S2VY9tPYdx5NWmixnzNBfkbsjy15iB1zSixR3KtxLEMngZ5P17yWDMHkEq82qkicH1LD25HFQJM8iyyh",
  "key33": "3ScZufVmK9MXWbZ7LFJuUx3pgwHTWps8MCN5zFdfx2sx6dwxDZbKv7uWSkdn9gQ1y3AesicCECfDmWdggw4FRisj",
  "key34": "3TQH9U8L1WmCgssf9foxRGENTN733qt7Pj6DgVYssDakv6VBUoWkpPXYW27ZEAU1fsgMivVYPrCB15FvrkNuJzE3",
  "key35": "4MtFpA57o1VNAwQboCtFTi6eSYS3XpN2vbGHzFbqhc1bfwQAywg4W1ksHWbdDjnNNmJf48Rybd48dxyCPFrv4pad",
  "key36": "4v4bXSARX7yEThEtMdjEAdYSxm137NB5Xvv6c1XSqdh24tjYcYc1p2rhMPyrZkxCzHahE8grtiABq4ocyU51YC95",
  "key37": "e9KTnEgjuqwtXPDJFnD9FitHEhHj6gJwKGjzqu7g2jm4Qp3ocNZCB2N8BkPz8pLfVFP1YNmA424WMZ5Xujcu2Y8",
  "key38": "2iWizkEZsAGmdrd9jmx9CoKsChBxaHBqxUYHeLsf2L6FTRjGG1ixrbbrtAxvvu33r9iMxkHcCtG3yV34ypRxUgaX",
  "key39": "47bKQaHLpVMvkxyF1bQsNAwzCJiyRHrQtFz74oAzaXJ5wK489NDqvdeRsxArar92xtLVQqR41gxyiQKZJrXdExo4"
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
