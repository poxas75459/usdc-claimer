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
    "qkyXdPA5PQ698EwEpTD1rNeTdJN1VGp5roBHkrFP8qXwwDaLJNuBUU4LQYEbjRK1mBoo3yzAYckxmWn8HHJ97ZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZT1adh6KtzEE3dNgybdF2exPC6siEpQPoR7Hy6wJB3EqfBry7GQEmHrpTwtvNXsdUDRLRx7v4nH1kUNHaMpa8u",
  "key1": "2MD65q4MCPWogzP9VTcbbbu5mvb9kE9tw94dmEmu2eKfySbkfq6jTy59cEZCeVz8NGny49vDjKAg2giW1x9y3RCb",
  "key2": "4xe67phw6AW3S5umFwr6ECg3ZYoX1a8YUzt6hfRNxi37vW5DraDQPVa6NeiT7BWaiVoCDgxYG4sVJgKybdxsuYMe",
  "key3": "2R5GuQUJnGoTgXKQFbs54UWbqZ8T22tjJsJQ7dRxWujkNRFKQ2CYuGDxh9tYzpCNFFC2dGcpwamoi2h94H9WATCc",
  "key4": "4UsrrHhMumYovnNNUGSrzVe5R1LGZ9oiSSRnhtWp7iQ5euaYQ5Q9RPTiz49WgaNFKfJ6tDZTKmDZvFJVgZm4HWAT",
  "key5": "5xngPEeHgNEg1asJh4Rf4NmxGbnvHNSyBTGkyFEgr8gEsRKoXwF59wMYs1YmavKrVyYfqizmpbkaz5zNK9UL4GoT",
  "key6": "31gVy4y6iGRihPaKTtGnK7fPHksULD6v5RV2HV921WKpCAy1oNPQku2mEhXjWZ6UvfVtFfn1ErGdfNb2cJ2UMFPW",
  "key7": "4Ex5tdstCAB3C5Vq5m1ST6CzkEJxmJ4Vf8WYnnAXoPPk1YB2RVdVbA57CK7ZUUyXRfTBYrv62zUNKwYyGA6jpZPc",
  "key8": "3nFLuKfacmzPcgFs1nuYZ2Qba7AKjhMRzZjLbkKnoqpfqtKwN6REpqsBxAY8Lmn6iZoTy68XCswjwMtvZNqCGRpa",
  "key9": "L9MLimkRkvS7PjaFaqo8ArA97dYvybqoKasBBx2Mwf6desQBz5DFTaQmD7GEeuVq3hJoxZZdUindHBokMAYEpdn",
  "key10": "3UozP4xjNTkZGjauaeaWD9jDxrKdrBeGHcnJDgpw9PuKL5ouReSnguNe2WkVd65KjzkBU184qRppWMgWEVXzK8FV",
  "key11": "3Nh9jJoQStcNvwbrvdQsvzq7m8LyRWQzrqdHgLJxHXS239oYRwLe94KMQ6iWDw1oaieNBBTzf6gs1w6CRWAew8AE",
  "key12": "61ebiV9nf3zt2fzopupWc1XXVWWjX2sfx3T24LycR6XpByieik2tixBXZZVm1LhVA6xYzaf6oDmC2tXbQMVmbHfS",
  "key13": "47CPCrnEuk2bYxYdrpQce45adN7siqZ3jsNb7hMArhGCkH59SgRkCxJ2sihaiHFpwubhxyBJxJBsPNEk9Ty39ocV",
  "key14": "58g7km2YPpoaS1sz4QdGAzA9ZRQBu2hNFUp6QsxxwG851UbRgL59ktZQTKv4N827xCZh3nD4ifHdpobbHAxcmCvG",
  "key15": "eV6fD3hxrks48VYgpMNBLi4JKQH8raRovypJLk4JLqkpBtaT86qZANwB62uQkhA8YcfN1NkzYPYbKPVk291UYsH",
  "key16": "4E5oofSygT1QDVdz9BA7rmuJRh5CQaTQbocT42Yoxzskptm4Cop4YpkmzbQVL4cVYGNL6x8c47q9SjPExLJy992u",
  "key17": "4X9sM5RbjWiADjFKMWKn8AGB6MHnKuoaf1Kiee93r2ok2HwQTsxZtJyzo9cnR6Vd7R691d7q4k9qap7cyUncf7Mn",
  "key18": "2hTzazWLxwxkXPTSFSrWN8zy58ZmMFAN7vCsUVwY1GmgWWW9Y9kCeenyNaD6Qm2zRMptXAzs7rUsDj3osZjt9UWg",
  "key19": "2UTJGjw4rbdsRWcrMitvukSiPz3QSwJ4gu9suhyDKrWg4RhG4CwZECMTNqWxpZAebKdHJpEsnuXHZ4vEs8EnaZNs",
  "key20": "2DaUJKbEAGqarf2MybuzHyWNfr7YpxWfJMXRBRerZHLKtWm76zyLdtfJsg5teyiokgdZvpgqa6yBg2u9LViZSLvT",
  "key21": "5iCeG7zX7JWqopFHWi7SyoFwhx377eAmL182ZGBKyBLKDrDJpErr7ugzFS6kZ4mMGVqjAPCQ6dCo6GDZaudLCsqk",
  "key22": "5EYSsxRo1Ytfr4x4AUDaKr7mF8oMM1gRsaDsXXT6brcYyMt3vyscw6jZrzH6vRFHR59unhTsnEQkPiYKb7jAsXfZ",
  "key23": "4Pob3dTu3obLY9TFzJp4y1k32Z81GgqU13AhDGzu8ykmbMFrEQs7DVXGZfDFsvU7kuogqhSagC84poBH38e46F7F",
  "key24": "RfDq5j3LBRDF1fsQU8REKp3DH3hPaa5DaioTKfFXDrb2pirEyrvAXArNpt1HqEqD53AR4iQD5ezU5EJXEcKJVbZ",
  "key25": "3tHD5oPKFa4GnzHHA5PrPT94ySoegtiMHJAeQZZj5TaE4P6bYtBEBaWbaX4W6jrLVzCJ62CYWz5rF8h8cECGXPtY",
  "key26": "8K5u67gVtBup6Q1jWZDeyzueKZvpQsWHFNiFESHfPY79baybjBgpCqjdwPd6FWeeR7gzys4MGR219kfYyk9Uuvb",
  "key27": "K5Wrh2vQPyrbSuSLm6b4adNGEamgWnqvacWTMAE8rkZU8APTMuDN75nbAFkAk4R6TrFEhzNuDZkcaF73eXbbrmU",
  "key28": "5Agodqt4pAcYqnFFAtimkXP7HM76xZhxLgNvFtoggjPtcinqqdo7EPzefttcTSin2SBJZe11PmERkuTE7S33UsdE",
  "key29": "4Wpqy4xmGypMuH9tJ3fjaqJCrfcxhdQsndada3Rg2BG5TpPzwihatyFUAbAGqoWFupbXYfvNWTUpUDyFxKBbQFjF",
  "key30": "58k9E9JVbLvxjS9N96TJezQ4X9fQtXjwEiFWQRk2M3TKH7VGvjUZDYiXQmdrk4GvbD6p1YgSprvgpktk7cp4NrX3",
  "key31": "4crkS3yCnA6Ug3NoyoXHy63HSXxZA56rMEpJqFYiFoi8anHgojQPa9QkxyGttSG7st4UJCsjNFGaa1gZVoAKqCVD",
  "key32": "5Gyn6S8ghR6We1SkEcLFhg1ReE2pYApH3WCVfaRrK6K7Z4YvsRqXWiP93X3pHEqvjBkC6D4jQnAS7X62Vh7Ftzrq",
  "key33": "GcqGCdq3FGPJuVQJwt4cBJ9o9tgYddoVfRewhVmh7ikRU1jyf3qaJuBBFMQSr96oyuoG5T6oYkSnSc6NBmWDBJX",
  "key34": "3QTByFXVM3kJRRwWAFAy9caFmVNM139ZzATVRaaktkA94JGXqaim6PopyspGPgUGa2gVtuvFeBvYNivQmxWjbnmm",
  "key35": "EZWdEqAeFx8QH1hoRTcW9XXhhZytYYx3cYeXkhZGxU6o2f14pFtGrq7VHqWsJupqCFYYuAL2RkcSCBSPEeDN2uD",
  "key36": "PAZLuzTAujD1WNVwFRcM6V6oPR8US3nj5Ms4ojYUEqrHMbkFiV3BW3BiiP4REH5pMVJpcSNPoJnw5ciz6GDyDcf",
  "key37": "2PjaAXzN1KjnuBXbhLrJu7gSLRqGsS4PfMgiFgAJuS1vGiJWci7aXxqEyrr2Dt7YqznvHtJUCuSqYzFKk4cQAmRR"
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
