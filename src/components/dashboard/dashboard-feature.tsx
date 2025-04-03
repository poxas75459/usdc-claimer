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
    "41vHUdyddz6cr1ByJPEg4fdLYZ1DAgw3E92bcZiKVvDtn4BaqJ4dVJgGY9K8xgs3gwwqd1ywMDFHQ2PsCbKWxMQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTXk7QDDDPVm7uKyRxCZw2rbX9bf4YCpwZDJdXtkjooJoXbFuZuiS7YHkKnRPNk61hs5KuJZD7gA7WoTBc4S97W",
  "key1": "4wj3qXhUW3wARBvpSfRBkZ27wbtwvF2VuLrBpWjJ3ff2PqTSe8qywkL9H9MxSNN9V8QD13TrvdvUTDvnVw2AeWaR",
  "key2": "5onjX1M7nULK67LxRgw5mEyR3K7AX43UmxikQj7mq1eMa59uQkzEV3h58XqY6NuGXAHsEKv7bPDjzRfzzi15Ayyy",
  "key3": "5WoJ82rkzLpjZtaMFpz9KsiH1GXSujgwGq8wN4rEhRmU3nxPidqAR8AgWrYJWRRdum3T2uoASuwmqevUCCtV5v9B",
  "key4": "9mZkttB7RPsQ1m1qgjtyR9djm96SkmT6SgRKpufLnqM79mfx5iN53ztNygNX2qJk5YCuG5H5mq65gWLi4A3yhiN",
  "key5": "2QdZkGNcJ2WBcQyxhWsBU9pCok9HVVcqbanVuoMFYzPyBJRjh8yDjYRX7i2gSWe3JNVLtRS8E865bRhXJtyW3Tgz",
  "key6": "57YAoDmtiuwfN63qhu9vENWaz4GMK7SSC9aKap3K2gDc7Bd5fkCmxEBTMgwWrLg4xWriijZaoYo4bdpK5PmmeR8N",
  "key7": "31tDiV9imZMADRFnxtqJkTkWC4SqW9ZhgWNTRtZZqPT5vFPrauAMas1VyXXc7v9samJFrYCsuMBD65W32Qo1EyhT",
  "key8": "4bEGZqiwEUK4gFF7rquTpn8SgCfAnKDwGRExRvkSKE8CxSAMVgimNi1hDw1xEZo5svB4aosALjJSb9Qs39yWVH9G",
  "key9": "37s885T8oeAHF21mAut8oWV9GH2aEmwpbwNEwxxbtXyCiE6JyQjFzhwaPZhYdKopfHkBp3JFFbi9jwgL68xL8wUv",
  "key10": "DZPboTkWQVAmFZ8Kkat9n5WvFXvJa4Z8WfJnLtDpiuLogSerRpN71i7ghjJ2y7Qcm8jhmX89FDLwMHkugGdQB7A",
  "key11": "2CyiTZvnTB39SuVRhm2MNnFsw6sLp6aC5atogdXciFDqkZ2LnvgsXsNWKKZqqdMTR9YQydE2ZA3kQPHE2pLzEKGU",
  "key12": "3pNqUKPeJtxXqA3KctTYahTgG1Yb7cHTzsmQxQG77aGQbiE4Mv5S9SLVy3CeRSukvUWH99JzAE71Sym865LnK1V9",
  "key13": "3rf4N4RDY73aYsyDWLBU3g2zSfNu3yJmSVCLQRT9zByUyJN3h9VWUt6oT3wawso9R4Pqfud73fazNg2V8NJ7LeJP",
  "key14": "5y9movVG5VkbgxqQsR2gfiDzxyrftV6fac9M6Yq748ENG91NV1g33fnddz6XTcVs93UAn83AmsRiGwHEf8mShqjx",
  "key15": "5vDs7DVo6PRuWoTdbHRKRwMB6z1pxS4P8cXegCW7DTrvVUztPN7bJemH7mKtCwmCLUE9oLwRwVqAEWxcBpUYHDfc",
  "key16": "3vitzGXjjfnqD9AMZJN64NjQN9H4yL45r1u4wZ9C7X4zdUSxXZNGoCxiZoVsTDCQY5pS5R4eAJtXxdpKvhu1dN1",
  "key17": "27vvvTpfiKBf2uxt6CxfPvDRNWWpK8ngowreBFeGy4MQqvGS4pHiTTykFBAeyDynwsiNisur23sDh748NtL6FkoX",
  "key18": "ECvAJrM56sKXP6cwywLL2zCpsEeHaTaqdqSWFcxLXcgbd6Zt7C5kK4eP6iykdW5Xpz84br8uaFot4b4B5kLVx56",
  "key19": "3ye13eGY2KQvmWHPyYztjitkz2zXRwJDQgUxkBq6Q1Ng5E9h7xHf9D5MZeGd42ojrGkVbpcDLPHg5DxWnzNwcDiV",
  "key20": "4E9tFSdPYiMXHsWyuk1v2kdUDG6uRLMxj8YKprp94Ahay4WSxzpp4YDn7fuAMmRPPBze66TLsE78EkbgSnNiXwMD",
  "key21": "5yjmpHjdYDgUMnuEhtxjV9F9JxnvDgg119kUuANNoqcXnS1BCPnLbqic97811ugm7c2u5bCdJ4adeukCgiaAsRAc",
  "key22": "3nq7h8jyUnSGuyKqi1TnWK3SZMmtbQo3cdUCEJ9YNAhALJjUX85knMugBtkegEZyUwLsbLJ7TZtGGrrEEiipsAsx",
  "key23": "5G82i124wBmASFGhBSkRoEfHKS8tsJtkGpZhfPTbNG4fDqBszE8yceqf7uchCGTxH3Hncu8AuZKWqSLkVrRuHiqs",
  "key24": "27KiPdYmJvk8RAteqeF4wG2nVmmBNyg5ZsmozUYUZvzfzm9VG27Lc3txZEXKQxCGGzHGrNBYN21YsQKnrFbM38ni",
  "key25": "2C67PJBLxiWLgGnkLRPDAQGdPjWKV1RmdkJ5GajuJH2G3R8DtLGAN9Z6tcmgt9ZAesaGCsqFpGXL1MQGwsbuHigm",
  "key26": "4Z9E2GdPDWhQFxntKXGn1MV6PcnCrUZrW48RiB4EqwxCX2kCSbkP3tNbjKhWnCMP8EDEFVwBaj4vTY6fF2NEHVWw",
  "key27": "5cEQSG7g9mdny144pFnJMyEuhgzDXhekVPXe9JoGVGsGPLQxbrVQfAdbDaqp6hNib2ssKMaaMhq1Rj7VTMXGPHkk",
  "key28": "5eDSJ15T62Ca1pvmHsf9UpCaBT8TUhreiW2dTS33bWuPdCc29hxsk8UEr21Y2TgbT222ffUHsrfQDBjGh62LgVoH"
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
