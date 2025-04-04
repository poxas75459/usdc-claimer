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
    "2CKWw9d4CbuUFe2Z6my3WPe7n2192TidDt6uwEUfEcaLK5L2NK99Dw3RH2nvfk8WJXVAFwQE7UWokLfqG66Ru7yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MA7dYmmfDLdXgvcoXjPgWevtAdMUQZhsM5TS8MSr5mrPMj2SVqXY3pjT4d6uCAGRaPXd3h9EaAsDzZ6QXafk1to",
  "key1": "4HuLvDgAjqvbvCsej4eMznGJfkW4eefkzYF4awCiCarboidnd1BBoPiMUr2UmNk2YHUSU4VGBm2FJGouzXQUup97",
  "key2": "27G5vSyXEMVQyk5pxRhjAjoZmJCKcEtQNVaai5vU1wZYAx9K4DrBCdBiQUJpfZMRXyaDwZiebvKsTCZwJJgcCdMP",
  "key3": "64g2uduRyLv5AYqF2REahWhCPLXAh6sDb3Yn3Xz6fvRTZ2n7WdXVLPbVSRQPrQtgF33XCUaVdYKZ5urHMYYAFU46",
  "key4": "45xTsK6JbZcesu4fdSMjT3nKW9wmcwWc4ggdU26DDhRpvd4GMHBWyj8T9D2Mec63Y53iF3Z8oJg9GwznkKfwjsgR",
  "key5": "4XuoPJoZxUPUEBZJo4qCTaUs3SHNTCJUtvgMFR2sXkdtzVYaKHrUYiPYiXget13j1UA4dGDQfPovauEStLEaRf2r",
  "key6": "xhPxepsTtjQULBQ3J9H4EvicYQdjRN1vN8kMc7xLjAwVw3uJbxNH9Kg1xfkLQPrSYyhickuSVnrmJi6Tbx5PY1o",
  "key7": "561B9QoD2rUpju1S8EKWNeHCudJoCsCyeJbtZmancAdYT955YJCokv4j384jZ8ga6c5FnwHK6QNkTPnTzJwCwcgf",
  "key8": "5kMmTaMvA7JDvhgVqn6kYF3PubtMV7YsQ17BGWG97EHX79pMTakDvkBGiWFqT1AnnKHhmc3PoxrNmFGEjWi2rL79",
  "key9": "3aG81pt3Mij1po5qNzGwyAdPhKhbe2eqgWpZRYf9PEMGUW6SStFkv8sxFTFbPGf5aqoXzFx1YhXUpEjmvTk2CQmr",
  "key10": "FErTFYrnXxf9f5StZS7xcaRkUeofvhGBT56HedHjZPTZiuiAUrtLffiijNepvUv2ehJghvbwTnrAtAs8yrYy6Ct",
  "key11": "ea35YZYhSfxmFwaVxoX6aHQxsQco3Ho6caD34Ej6VjCJ3Gxo4wHZBcQuxtNYqTCGJC2sVArGZJ92JBRaRf9hYVn",
  "key12": "5HBthW69ULR2yosLnnpMCt9KH7ZkDzaVzvBFm8Cnbn9aoBjDhgpA6Ez5xefHt2WaMoEBc2L97vw2wbpU3GSwyT2g",
  "key13": "4c61D2imYCQV5ZMmT6iGQ3RDTFVmi61RbLWM82FzBitjdBAiQMNKd69d65d7TReJWCBFtHfUQG2pMcE5ozmfvhYT",
  "key14": "3C2GRz6fv7v7NgdWfAZFgf4zXVHntnNYWbXguhExqJRddfr4BGggZSZDMBX33w367VgEyaLcNqpthskCg7c2px2r",
  "key15": "4DjKMqSoq8M1Asa51X442vKvHaE4GC6jBL2a4SCoik7c1BT3sQ7k6PworZZDdY1ZwoE4BVXJR7fvAB3kTcAzcfPq",
  "key16": "2riztvNg2nJoSwtL7EFY5A7nYnDkrWRd4gHKSAYDqgCUpD15fpYUZieUVByNPWuSxSemGNeLQVa34HKH5RkueXWD",
  "key17": "672QPgJGAZgEENFzNuyCNA2nLz5f5CGgwJCCz7LXazESNC42dXmPmTWBWBS2CrLS1BEfjNvPehrbeaALmgckQFX5",
  "key18": "5yA9i8jT7j5vhczrCynfriUo6EHGSkmipbpfCq6w9mUCqC5Ns5GYdB4fpRgJe7p8b9E2hYjMf2RjSSGLUit3jPZv",
  "key19": "3t8gN4dU2R6fyuaNW3dbNKR74boir64xcHY7ian5uVAqkH8qGb72HCmCQZJJLMn5JH2enZGPjFGZeD1Ggb4VT859",
  "key20": "7eh6shZCmjVAiTrBLcmb44T6qZM8j4E98f79e1j8BhXVg8K35AF32XV1N1ta7P6hp1KmqzvmkosQ7jH3wxifLkb",
  "key21": "4mYLAtBjXgXXbY9e5dhBtvszAqc89xoFq6HvPgxjdhHPDGJ6gZTzP8YnmZ5YcVpAh31JkPjPneb44Rzr1aD2oeQN",
  "key22": "4DZLkcYM7NCE8qsYnCLjHhYgEnAnWBxuXrY4XfvFbm7x7niEogywj1SJU7MAHmJhcwUtNZCBZVjtwNUe64JU9mwb",
  "key23": "4sGnN2TuXHoQfpmK9nZHupHfvEVmu8DXNcm4ZW9tBMvbfF7BSocRMV9DUXWiVujP7GjYCE2gmZEZyPfzXZrKH9y6",
  "key24": "4aQaNyomb5HK3zjCrtJgBfuc56R3eAPZJNvzyTeaD18i2YK6Ucq3dQB2eBS7rfftCYCDffHXeSpGsGRDhjxSaz5C",
  "key25": "4XANCMhs9p6V4Miaop2psPrEsTANA68Woq5rca5Jd4jJ3SdJw6doP1fMGoikwdVCRQPdraho5a69uozEVKJggEYJ",
  "key26": "a8oKKbzg4VMQrewxDcUL3UZLrPvep6mAbGPsCkziHu9ZGRhJqozHJCAQHJNnBHMLapQhTjnb195xoWBK4cA6pHJ"
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
