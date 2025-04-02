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
    "2kTVTeG3pXt9ggf1B97mriyJofipzTZs2zFKGUAQi32StMosgn33hmVThba2Pjuapacxo5hvEXczoUtjEQqwAfZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tiUzmrVTr7r8xAhKXs5HsSVtrjLKuEGT5y7Y14hYGk1uCkY3yCowufE6Hphy7qoTHiaBZLzKvtFNFTS28D3M5H",
  "key1": "4F23njsJDE9UfN6KZz7RBsigN85FL6XGaUhVnF6wWEC3GUEkDH2JrExbu21BFpSbBqYMrE95B6chLa1kTeF9V1Rr",
  "key2": "32AjczBqbPSRHZ2weZGmC6635hZvz7Nra7NgZS4ByvWL6TAmejVXa76GmGujXydom1Mk2pcmT9jNx4PKFk9s7KXY",
  "key3": "675RK98kogP3aYSRweRgc7jCN8Js2FV3n9wvxynY2QaVUcguy3DqLQRJqW6hkhxzj33ZKCae7sxr3Dv43bcjo8mp",
  "key4": "44poB2oTwwDemfUY5CLURN9vYn5nbfbZXmcgUAsYCXiKhxnKebuNgatw5brH12Z7S6Utxi6i8NGNsT9HKftRjAqq",
  "key5": "2ZuLVWNx4d2CSXfGuBkmyZL55tRQ9uSr2Ucg3JrMEXvE2gSauqruLx1NxQ9kb89uWRj6SF2ugERDKdwzydPMoq6s",
  "key6": "TLQoaVumM2UfbfERfvCSsijpR67qdQZkrQEQ8zqR22zYUyJhJPjZBPr1r3ujdtN6PhoLnHfzskhSMGF1MKNFQ1N",
  "key7": "5zDpEg2ZUKELiobVZuX42wHZB9xwzCgNGc7iCsTufxo1V4LPzGtQqWG4bu2VLj6LrHde2bsUwG8tkieaCrV3dyYZ",
  "key8": "45irsmcoRvShhvT1giQy4d1w2KFDJ9yQjt69zddTtVA6x4dy93E344F7TpWFerTB9HKXiDG6SP9wypcdTyp82fXG",
  "key9": "3vrrP61WXFAGW8a23J9G4D57HNtFYw6gvEvo3qjcmuYHwtREeGXn9jaHVDQZc11ur3v6RmbrcufMX2qTe7mkCTvf",
  "key10": "2aW5U19VuzEiJQQzwtPzRDwsuMAHFtuJWMR5CfXo6QLTU952fEAdRz7eRVFa4JTNhvGWbXBLWDK25kQY2MLL3Zv2",
  "key11": "3z4f3syQMR3q6cNRv537FXWAMnyG3PzWR3njjJgJJvuYSTjDr8Lj5jhAdD7X1pRSJ3wYvJJ4s4yK5Zg2ZTr9UjBj",
  "key12": "6nDyAb4urdbkiBfGPC7Cfi7JDiK7e7yHukrUvVeBsWcYvhwP8FK1sZyUV1tJpfFYLV2omricn41k1yeYXEUfjq3",
  "key13": "3jw22fxf2LKzsMPtkeZQJ1fMH3zmpqaLdHKfTg8dxKntKhZNtERkiVNTdaJvKcx1KJK2oWbPbf3enU1cUeu8Bvt7",
  "key14": "5hetfhxbPCm71fnoEaHQcnSV81X8YNw9T21LNpjpXpHRtSyiGYsfFNKCAPmJphpQGFTRNjapBV9d8mWDYDintrPp",
  "key15": "2KmUh8SUgthxBJWt2So5ipvw66juHq4mYyePNppWHY5tfzLErJeUwgUQBE5ngdgCW4TwhSmRH1aK7vGoXb74nTZt",
  "key16": "23ezQPUukXMr48sAdJ77JELhPWzbETDi6XmFF1NPqNmrmJifdZygFSBX9KiguyA4zQvU4Fx3SJ68bsTFN4NFsxHg",
  "key17": "2iYARP6BaEe7Pxf4aYYa73WLJrNASGw9WMXU8caRLZgFj6cjdzhHQEjzBpgst1iF8AzzkZvtdZSU55JjENcnMtEJ",
  "key18": "2gdwYxRNdNt3S5Wj5C1QdwFYLQdTxCPVERu4qwch7yy8MBNPo6eRT9dq6Wd4mpVGVrbzFjXGGk3JkmseMaFnWJmy",
  "key19": "5eiKwveGjUDdVZZErgZznexDhh7KJtYr1TDobeNMCYYSba2hRS62DrV1pjmm9313HHSoXViNELHosJvwSr8VKmNR",
  "key20": "4s3AN3iuLqFpCJiUEyiRrYNTaKKRLCxoNXEnSQYZmbTXUdqGV3pbGjsJrei4YpbzYKdazUPTZEU7tW2zvhm7gyr3",
  "key21": "2XpBtHc5TCgJanR7QzDKruFQ3EXeefs7UA6Grumka8cWh4hnttKES8Xq1Ws9qdBssZWQSiP9iXrSgtHrbgeLdxXe",
  "key22": "5qZbyydm9wDUeBi55rd7FeH9LhfwpYr3XoHRLYcFhy1HxSNpxt7AiVHgxVoq5StbckAhaC1Gi4i7uqGKCNgo6dPE",
  "key23": "npWWPapimdurmMyw1AYMWtwKd4QJpMBsW8WU5R9VAFAwKv3vNPFREneZPFUed49HyXJbW2wsYzVp4yQZjEkpUxc",
  "key24": "BMbxHw9stex7PUFcyjdudyRNDaazhNRwezGswN7NumsQj35uNTQebx64jER6bdYEYDPWd8wq1PVXRTjHNq7Rv6U",
  "key25": "5MBjwcHgcPBnYZVkRJAz6rKvAPFCxtkPTdb1MWWzEhg8NnyUxQFrHFtiGw3hnrHmbp83B5MnuAYEACHdJcYHkfHv",
  "key26": "5cWMsCemShkvKstBzEXSikmPKPRqzuUiWhyHJiP1xWXtmYHS8RbUdT7yER989WCtHEUAZVY4WcwQkEJUe4sXZJHn",
  "key27": "4zWMF1z7i8qyq24zHraD3ChzkP1H7j2ZjsV9dbhd5N7Eooci4NyNTVc7rH4tv9BX3hdD1YJKkFpG8CHKD9oGyJN4",
  "key28": "4YA4heAZEx9oodtwtpZxJq9iD4xxWKbeBKCUfPqQBe63iF1gdDScCyqhgqUrigNqDAZsMCsgLZhD3a97tj2X9Tpw",
  "key29": "5Vmrb9rxrKVdrLbECkiWuGrN9Bjcoe8dxjce6aUoAHjnwZ8acYbp4dWTZpNzuNucTneJtDMzPEkUGAMU7ACRjT36",
  "key30": "5mEG4YTaHZnULp6TAZRVqoqKK5XVdVQ5TDMQxtzGB3MqDpTJ8uE1fbNF67gkQhTzPTTTsNrEM4TmmbtdkDKwQJML",
  "key31": "HrAKzBy6cjthx8rhnQDVymX3ua2AmAzpsS3gjYdgxFUuo6cP4g86Sk8aGJzmbKgK22guuTbka5PZ5J7HBpBHB3p",
  "key32": "gK38DU2bmvrm1x9Ytn2jeHYg6Zwj27Bmo2F9PPwc33nQFDGy69z1aNkm98Qfmn3nZihVmXUzTHb67wdgaBeUXFv",
  "key33": "iUZsGEuEkCDyKfDqWfgjcbJMX2QB3cZS1S6gYb6w94PqSf4wgDnYWjCS5sJnjYZmtS3RfAjMcpYYUzCJu4YGEos",
  "key34": "wiNehmpY2YMPpjAG66xaY1v5tj5aSQvTTtu5ZquDKZCcGnoBbhGKLPjWPwgPnj1tcqwFTpgDhfQiBXgVnFzqyuT",
  "key35": "5d2QvzrevxBMmjk826XUt41L4SCc3zCtpvduB4f7XEttoyKF2mhEWFitK73TcRLzcJsQd1CgvATudV5PUKfhisyR",
  "key36": "E4qt2dFBrYJJ2Xi3D6GNo6UgP5dAqfSPK7NT168Ktp2hjD9z8DfuzGegS34WKTMBQy4uvpZ56u4m4pmUpqmZAQc",
  "key37": "3YBfoJ3jYTToPC2nV6GpkckMMEzofB3YXFpb2cruzCMggWbXXtthDXvjzeqtNQHXBxkcegFanxnCkNGsQwtMmE3Y",
  "key38": "5Z4NA7fzKiVRWyjZLCD9HmuhhrQv1x6AZ7CpYPFo6wxCVWaM9SD3GigG6BkXCSdVqNAyUEoQt61Yzzr96W4T6R8N",
  "key39": "vMgtAfnccErUeME9Hzku9uCo1H8AEFkXJ1J2hWYbTZ2yv9zSpYmheTtKNd1QWm6YNc7iGDXDTjpYoTmDu1rKbJQ",
  "key40": "xhm6VnujgiEsEbtb7RWdrEBMAd32eh39UpSNUe5nndbgAKTEuDR7ZkEYPEKyWFRzKMYBCJiHLE1fCvH5aD6wiEw",
  "key41": "5r71E5m4QfNTAa1ukQ2iAZgkMbe2T7tQAeaeRh1ANzjmoqht43ZVaUVTS1Kuzzn5UACFWzJcCzYTgmnUA8Acz4SM",
  "key42": "2fMcvwSQiNLbnVx9G3KWy39GdGtTrMYjQ8C4jhxckttPMr5UK6WdMr8kwawbGASQEtvDvpgE8juqUn5vUrdaFk5s",
  "key43": "2tdLr4foteDrZiLZpER7cQBmnuJdhAWdVumXE2GRoniDrRDcCp28CzCV3h394uHHvsCz31UFs9uotpYJKY6YEH9",
  "key44": "5irAct2TSAjcbrNLRTSmGKQJjYTvUzMzUc1iVujBAB6Jg76o6oR6R97RrGJScTXPaBccRasURtMZJTSgyAeW3W7B",
  "key45": "5Do5HhJJYVvT14YNqTN8zz6NL698AttkXKAVHbNRYun65tK7mwUwqMXpVnR5umpovDEqec7PipgSNbdB5TWbK23J",
  "key46": "2u1u5VCavRJ1HAyXH442nKutpthUxmiAbntnw7X7VCECaRcPvG6dbFgqZRB6k2QPwG8BrctS67RY7ukeg69e5sFf",
  "key47": "4sV77odTZZKMamgkhv14i49Sq2mUqhm9HX9LBEB8E1a8gu67sFpukkWjUX26BReVP6BVtY9Y6amULTT9wU5JQuJM",
  "key48": "46vVhMHczd1zXqn4X1Sd3UVAr7UAXAzwPiKojQ6eUck7Ew9Zsb8WrL7vVaiDJHDNuG2aS2PZtTz2R7D3YquN7MQw"
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
