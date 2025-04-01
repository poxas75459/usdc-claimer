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
    "59YVft9vVCkt6Leyohr8nKZWd31JLBZq1Zd69R3tnSNqSVyNW7byj7pu128fB9a2guGmtHn4du88t6i1aysALauX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNSgtLHuvybJM1q98zuc6L4znJQaowKDFL4bngDCrcyNEckYb9KEsPGBaCNyncU543SefBFVPrpxYkkFqfyhuxj",
  "key1": "5a3YdZYTeB3XKucAwWJcfH9N1BXv5moCkJFstUXPkjPZ487geN52C7Lahjsv2dsp6P3zNYcLXzG29orrhMo1b1PK",
  "key2": "3dYBaSjiPpzZnxeLYD5ADc386uqaRCRgkrnQJkcpMrncsDitXCYovghi9HCJSskG95JGjkHwj85AnSYLbCtSr4tK",
  "key3": "5rSM6PnbjzKZXdeJGVt7GC9gjwSEvWTsxTr6rgfcvhqAC1E24vYqbvnfY1RJFWmRnght5DjgkLEEVv3VFkt7rvY3",
  "key4": "5rfmBoUQuHGGtAbPWwrLcBFMsBL1a1qCwhMHoF9hJLD8BdsLtroMcXofRnTC6sA69S2Dgb6xR5tga8Yr5MTf3NXr",
  "key5": "dvi1UXBBsjw3PRXdMtznjXEs5spMinJyxNj4EpMx11HQv5cyZXq2p9TwRFqwe3w1BsdPeoBLnH4DzjpU2cxb33S",
  "key6": "kMcAe65SEoJT5hoQRnpqf5xJcfC3DxeUyUhUvH8UcaL4dNwTzHesycaAtdPm95VddoEAt4DXuYfihHGoUtSb6t6",
  "key7": "2G3Sda8kJzTkQ5TTceSSb7FUw4HoPfjmDcTuYeaYJg1U73croFokop6aiFg8ytFYZWmJMgfYX3EEXCFqhG391G5n",
  "key8": "5VmtCQtYBTLHS6ociBmedzyyeCim4e9AgWuirZgfijP5pW3VqsniqJcBYBLpzv2cwYnHFi6NpySqL5JzX3yJ9cre",
  "key9": "3Jbsc2Abp9QiiykGagfpC1FC5WjVZE2zw3KiY2WZwMYiWaVW2o8R5v1tPUBUFC42bNUgX1pwRuoW9jWioZW69oGs",
  "key10": "4CVcdP12gBaC7b7tYR5gEn7dpSx8a5QV3KdAsw965CkcoHUSXqZJoTLtVTvPvKfP1gYK5Xjr53FEsxAXw93HFoFb",
  "key11": "43bAtS6JMt168p7Hh2uyXFRuEjNEaTstz2FUEmaAVEnbT9PEswNR5cqgBCYexrekQfFtYrFkDL1NNDg4gQ1kHp5M",
  "key12": "393dqhVadoBB3wGGKuSZcbdnBFWYB4dBSHBye7SBdFoRqvAR3PqTS2B6kPraBEeBNzR3YaPf2EwwjrSWUU4SvpMU",
  "key13": "3TRK1GPsUjyLi6tn1R9K7pgtWs7oiqYo3cL2JXGbyAWJ8E2ivWkAvWcWvCQsJVEqHLasmT32Q28agc2wFYJxXYVG",
  "key14": "2xCFLNvmxC5VXnvQYyc6CWub52SUZnEBTrc3n3ZLiGc314KcoAGogc5boSuEuefojDTQqF4cT9v7vdjKW199JVM8",
  "key15": "5tSjQuusWu4DdZAThK953k5nurc8MvAgxr56AwutRmZNd4QBPFj97ePLPLJLmKTKVY8PaQYBhc2hGQziYRkJXMU2",
  "key16": "5x9JNyhry4Bm1pr9Ha9mJkQT3S6RRQqmCrsFWf1vKnQxDRvQmuMk3QA64QFfBLq4eYU2VoTeLiFmnqd4gRz47enG",
  "key17": "3Di2bPEFUN8LCohN9iyar7MZRKbajCi8zXYbqoDoTg83Qfu2ATXzUoU9NYkdmWsToyqN7BaeDN7FX8cz2BAtMGu5",
  "key18": "3stXcWdo1ASfx5WT9U8duV9v8FwGKFkscdE72mXA3gRaDTRCvKDg42xBBNYLkPqPwSyyjjJpzs7briRQubPsmdbp",
  "key19": "37RGayb9pY9siGvhvcz88RM5x5wEH32WA2ABW3Ru6jBbrPmnB1SDKZ6x9FufkCrS5sbnyCb8ebzNTp6uAVY6dKzg",
  "key20": "4xrPFN2zUBpXEP1E3FZz8SkktkLMJwwFahwum2oRXViYimoHy9Nw7dmd8itng5AC8PeswEANMCJzcCdxBC8aYWYv",
  "key21": "4EC97Z38VLMH5Ar5A1SZFpT5WhTJqDfiKMYFjcWdHpQ3NZjoGLtqJaoxBaz5q1ToFM9e5uc1w6d9ANf6ZejfoGrk",
  "key22": "2JmbaK4a3jB47QKwNLXLm5PEhyYGCApKQpKBTKqw4ftkCcer77anLgAAfUjESmbp92xNaiFMKqFnnopJAQ93wE1K",
  "key23": "5wviSJxR1DcQy76oJ5vvCQTvsJz2JftV8F1fcgHPC5VbWzAQ3Bc3WCcVVXnbCiNBGVgtFpe4qtdrB2zhh8Sef478",
  "key24": "2PDxvSoy1znrLFDej623CAPyJV4JV7QnnxmmwnNtAwGLVAp2xi2TZuAegaVZz6E9rN3Mh8mezSnBXgQ7HWWsq7Aa",
  "key25": "2N7YFiNVyc1sGt5uLoUY1vK6pgUPDmTFVz9RzFAwG1mnuVcJuZULb2FbYorNkiCnJXgqJNXsA7sAaNSvzyQaCeDu",
  "key26": "GDgpYV8xMUuRtbKBZS8Z9WJG3KmMCE6FmeqQCeGANai5FTQFgS9FX7kXCwuEQVCGC9J7xwY633tr4ZDBV2Shktg",
  "key27": "2eRcJTFZWqXK22ZQLssohWpxtiv7hgvR8BDn75FC7fpNUyeQ61g6bBgxYA28KsShG8rVz227MJfsH4VWcDJ73Ze6",
  "key28": "2JkHe6hgSAssqB3wReeERtbnpaEuhZvroi84tknGj1Kmkvu1KcqLARULbVsMWWhah9mui9WGfGdRrE27249AsQNZ",
  "key29": "QvDg4B8L4gZNznaNyvU8y45Vo1v35698PuM6htF9s7TiekanyKW6EpWWM8MXwNW8vPQNVtNdzsbZt9doaEfhDuC"
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
