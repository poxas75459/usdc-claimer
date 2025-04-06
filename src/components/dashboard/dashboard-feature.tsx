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
    "2ivaYicf9STMGFDHAoXxaT96CEszgTBSuMyYzKazQbXdbPkYBfnor1Pwgd73q2MrQKCfwFRK7dUPH3MFgFX754Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkWQ6rKSAwRC5CqBp3jzbHJkt8opVi7s4ir1XnYbZutiVMvsWU62HLf6ZpZwGSXkoieLbjSUeStKpFpTG2CiHm7",
  "key1": "2AL6RJoVvvXQkjY5fn7Dz9mMikhiYqA2hV6YMnKEfUhxwtYGx1Zt9JCLqhMnbcGEFSKcamxEr66wnh5RaPvSnYGx",
  "key2": "UdoR1559aUfg1bfugrer5KJqtBn35ZgNMDBvmmFHaCFowd1EHejUTAR6ovpRCh5dYQ31UGGdcKx88YvYQYpazoX",
  "key3": "5wLsBgXkTYYzDAXoQn4PJvHCoxVN3myZeaZsBBhPqv5En44iDWx1ojAY5YoTr6CZgLA52oFe3ji2AJATNTQ5g6Du",
  "key4": "4WtF9KMPy4UUkSbLWbfoWeoMTd1ftwswQSW8QLNRMqYcBfbpRLjz9RXZV8SN2mfHT5sEcMkpjDZjNhg6vAabUXSx",
  "key5": "3YJNYMSopK9YKJSfzQCjXk9deaXYrZaobYuDi6ZP9h9DdnhcEVCx13Ee4DxXkS3gaLXzFhGBiQRbqaL8fM4eEBxB",
  "key6": "4uZUHKGMtfFij2V54XTDYNTE9YYeeFSFL8FusNVZBtR7mQXurbUucWwfQ9ga14E5Je3ZsDhHuzQsCiQHGpqaLX2i",
  "key7": "2DucmNsTo9VU3KvGzXkxBBhD243qBoKohqtD4vejpPej7ptZ2ua5ZyEJE5QuUuW6sY4e1bN2syA4CXX9Bbg3XicQ",
  "key8": "44Qm6J7gMERrY66SdTNFNiRF9BqXCWKPQgvhH3Z4AUkpSaEF2maXauVXTiQvo71PAVesL2jjimfpuzoEQSWaWcUj",
  "key9": "5EZGP1qzQPjAU5JsgTBG7xX7FwCiLM8AZemicTDE5LXQxLKs6BKEXDD2oo2pd8Q6SqtSoEgQe6XSJ69AxwTCzkfi",
  "key10": "2qeCRT4RtTvv9qnGTbwBECu5nK1pxCL8JwXw5P3iMRzqMAqgBPeL9zXvpVLk4wqEcjEjXMqmGvij4QGdgyPVqyGQ",
  "key11": "2pyc2vAvKfnij2t4qJDQVsbNnTpk8tdRXxxU6Kn47UwYwkvbKCthBGd1CqRLJ9BpB2o55eMX5YjqJCwvHhh6ZrwJ",
  "key12": "3W7q4aWcS1Sxfv5tALwEfx46UwboXapWadJEyprfJ8t8DjxHWh4DS97oMUgM2oPsPqB4tWDuTX5nAVaJMrw3GgtZ",
  "key13": "2wJtyo537gi7JxeTqRAGrbB7YxXojbR8tBtWNvf6RoaUnkk52dK7vGnqQPZ4CakZF2q9ba9kSfhNBCieL5pzXcXo",
  "key14": "21fnUW91uXsT9PvP9t7tkjAsvECiYk5oLXZQzw98BdMk6FegvmgZGMATzqV6d6gjM75cSvBWNZuVCQ6CKKJ1yd5X",
  "key15": "2eefWpAhfg84fR8aiRimoJ1N6n5vBTopKda6mkEu8xiqMuUfdYmb2rFWAK3cUUtzPooixetWGXkFBWkLExmUydvm",
  "key16": "4A7xP7yxTnji6yCLhCBwX7VzZzDr74K7ZDDtBmQ4xS4hNYPZ6GaJ618NybkBak6CiTwAiKy4aa9KpPYa36G3pWMS",
  "key17": "EMH5GBH16PnuCaK5xjbN7a5zxu9Kmu9GzsbhcUApjgoyStPnUF4ixUGNsz3YQ8qMubuVAM7iKeir3vS482dAC8S",
  "key18": "4yRP8CTUwa7Xf9avuqwNWaSLrZzvkwCXc8pJnhuhYHRkyRKWU8XhAMefqrt9uoi3JDuygrcx7Hx2JR1ggWbixmcN",
  "key19": "33PPriXWpxyRGUZQtAmad2FeqRqBF7D4KDoqSG7iK229L7XTgHKhHrHTzYCTo9UQKV9Rwx8rdQeavPECGfLvCHM4",
  "key20": "4cLLQ1xMbVukjBMy3zgMsZm9Yx9E8d5jJt7a1C6BxkDjitLcU6ziog9eBwKmSHkZawFxrDZapQ2YUmZrsDwD3rRu",
  "key21": "4Vi4ActLZ54YGUbLs3EMuaUmmfvQu69Tef2MGrrqFgN6QnNk9QFqy87ojRqqZzsjWMexFrSTDu7ttU83FmsnV99t",
  "key22": "3XzGyDAGGra4ETFDgGB3aj5QExQDy398Ev1ZRGd9F7vAVXt6fzEueMYDS94CKVc3vSeodm7xvBQ4gnE89RJwAbEk",
  "key23": "4DuQoge7AsoLC3zjugZ1qMQe2hKHorQPzQKo2jKdPzdwdRDW22rvHfss4QLv76rtQyScCn8kchsYiRc728KCGqKW",
  "key24": "4bnDnPRhCYnTCgTNBSssaYX8toDEgbYUuTc23SpjArs8jaDNgDSUUoFftYujQ32JR9ZGUT7t598kY8EHkmxhzZSL",
  "key25": "66B2aV1dyup6qN9rfTGDQJ25Q79DW1wjW4QuutJzFeyGi8m9zMGJFC66AT4mJkSPhe8SgSZepk97X2H3tGomzRmv",
  "key26": "3TTgwj9zRuwivc76WuAj6uusYhM31mtkPa8jjDwbVxfrb5E2VUj5zEJBPaHrRqAiMUokgbj6owBgGfri4QUvXUgH",
  "key27": "4SoxzCwZys6M2TkfnCMgXyHqZz9TuDa7QEze6qhnE2VAacosgNC1pLvhCtCs6j8AwfEf4ZTp5rbe9Aqoc5Uizsr5",
  "key28": "2wVaccMtnGGezetcCy3ffmMLAvMcT6TyttP9VKKUSZJA2UCBNczMFaikKHz29kh29quB6HEJi34HAcJ2Accg6YRy",
  "key29": "4N5VHiZU3Lffi4VYzpdQswoRDYBf6iEVCDkYH2MZiHMKqcSBc3jH7XiUpg2yVPr5VE5X7kJtTCpJH1aYkqDGs69X",
  "key30": "3jTMfGeEAbqSyucirrU7Qq9usvB9ERTM1JG4XbuGjoEu3e7Jg7FA83moExUxFYyxo3DvFmiuNivG7CvBRsGzVm99",
  "key31": "5AYLGnVnqy5PtqnGnR1mvmwUq6CaStY3JDAe36zJSxvwi6qt6CrbbinPPPJthxYjXkizKpWQUqKj6mqcYgTLgQC6",
  "key32": "2aFgKRBqn9Ebd9UV28tcHRSAn21Vcr3bKbihEZcYtA97SZ4R3xeTgw4coAde9pkNE26imsx7ZNDb2F8SSH43iP5C",
  "key33": "osH8AUUsQ8hviw3kNKQX9a1oCS2Q3FJioGuop1Ya9yN5rX653QXM4X7goSEJe5GwRumookk1VCLM7K6VrJdy2Lk",
  "key34": "366zDMVC6RYh9fbHCFvVEwK4SPEggPtdBNbr3GNAdC2he1Ut4unnCP3ZZ2Z3FTfgsTFxGg9JoTodCqCtbf8JL5pK",
  "key35": "27LbUEawYTGULkwtUGJeJtFXd3mXqaZf3deHevYoPrGuQrm2gpTxXvEDWiYVSAX6NrLaEiHWjCxmZiJkMd6Qpia3",
  "key36": "3hX126eonhc4UHQdVasZNh5GxM8LsdqoA1bcFKea3k66r26GhtzTMSyepid6BeebUKLeUS29oqhBvKP1rFcnY9Gw",
  "key37": "24HGjX7nKAYD859KnDz6eBdoHfbRzHdoDNBsZNVrCwMekfhCR3EKVgEoJZv62PW5HkBMVYhDLqm1sHCrxQiNg75t",
  "key38": "4oYZhjMxGN65Z3rJqQq5DLSvMv3D9wra3pfRguLRmCMxYZDmuUdUbt5VJsShQdY9cJ2khhetoTTQA6TCj5CK1TyJ",
  "key39": "zw4fzSBatLcmQ6hTNWkBqAfe74WUgeUg5YWXFDdiiZbWZTci8HazpK9wYCkrDjPhg6u2DMd1N4xXUb9g8HK98Fs",
  "key40": "3k3GK1vRHMDEUVUFhxa2HdYn1xZuFsUqjGwdWJPqb3D7in6K4w7JSCCfDKBouhXei2xUxmUVzLXmvGKs2WFqd8mJ",
  "key41": "3KHLJCTAWrXpBdbcXUdXiSBLzvQ1FsSn6NMD94xSL7ige2SWd21gYmczPyJdfvMdPA5B5yEDhjoZCQbk6ptJU4RL",
  "key42": "3oyrZGXLJvcv5rggzeCKQkqByRLCaNd2GcrnNV8mZqCjFtFQCXKvcbRV8CNCozn648LnbUZQ5g4aTP9iCrRNcBaP",
  "key43": "4kwgGHJAGZHSWNkoSuAkK47wZqPxZ6iZj5VXfHmCMb7uhEEuJJNFXdjBc4qQvyfxdjCbg9n9HuhBGofZkzSEUwxy",
  "key44": "EE8WhFjVsdETWtu3EvnYnM6gvZznf4e5mwh1Yq83CcDTUzZqNLQejT6nYQ1puzKk5WpshF21QnBo88VhwGnM6DL"
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
