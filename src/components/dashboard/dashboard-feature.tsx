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
    "3pxhLr9Vz5aULj9DrK4ASG8PdfsW18PYJQQLCimE7KnB9QG9uNeWRwnNLLc4n3ExyQQuaAep3itVmYLKV5pPTDmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "443U2kkAVS2FbY31G7TCRMT8Wsfpt27iyRdvsJuS2jMGYSF1qpTX3cTNBy29fCHWRuaRyB6QQE6jGm7sn1nGbxqQ",
  "key1": "4X6yTnVacUFEfV1XzMZufzfs1iwMCvhmb8v5UUTiGYb8xMZsRoydWATFAdKvpTKRCjMhzUf7zJFy5YBQGubgPcCo",
  "key2": "48iYuts6X6JDGk5ttNebDwwMvtM8uG1FrWQZKPaFDwgbjTKdghmwGCezFmdtEtVStjBR77mFf6sUpcrbzDhvmSJp",
  "key3": "3fbo3QKAE3ud73ofJ1NbEt3K2MU5pNbRcpwsrwqvCtQMmJo9BhoMRzw66hmioNvqyapLBFXbTwzwfNPW1KoE1MHP",
  "key4": "2od6EqKFitirHew8sQ5cvtGXMjzs7RxivaU6NQXGTvmjXumiy4pWYsU8irikhuSvxGCsJAdkt6uu1aRZs5LvFpg7",
  "key5": "4CGGRCJLMe88Pmd4cw16WWJdvYUSoiy1XsC3Rj5gpR2weYDrG4Q9auSoN7usYtfP6ZKUFEMPFnVadPBXBGpH3113",
  "key6": "2VnDozb9dM7G5B3RJ1dAUreNgGjvjtUHkCNcJTBiijRvDffSzHZPqUNTQdLmVpPi2mKxemnpgKZfhUaFugF6GQsg",
  "key7": "4EqyKn9VrHDZqVENDXSsFY2TcSCW3r9kbK5VYAugcna5kxPjqds3B1wQ9cXFsxg7HxQV41pzvv5fYeqAvQ5Gn19a",
  "key8": "yQXk2ALrG4V21DkjJ4F8tYBiinbZRqXoBjphtxrdqh4qqdEQeLTb2U14EPYawNhRc49idGSqAhkHJvVD1YHzD1X",
  "key9": "4GcxpCMQiVvMLV6Dq8k9oqw5gctatbfYu4UmM7Gooc5DwAPdfp3Cs3eNVyBfQi5zfvugRXd5Cy8p8rce3V49rZky",
  "key10": "4ymDhAqB7jYUDKBX7NawBGrn2bbu4kGr1HXYvRnj3ETzxWdGfzjpJdxnfwqhcRiPtx2JnwbqNxrt8xxDuFdCNmrm",
  "key11": "uWFg8BtArGNpCyAT6TE6YsbrCWaE89xocNoXBG8mcXwBcNShmoXNTHZYQjmmpmV1QKWLfBCJUB5JNWeTRxrc53w",
  "key12": "3dv2c2pwY6nbsrc2UrjfQCqZ3UuTwAPBsDUC4xHMw39yzQGJ5Pc16MPsMwvUDzUZLPh5ofyXiqmt7qki9r4naQoP",
  "key13": "UCr9m2gFycMPeBJBKPd1XqyNHtTB15g3pMbSNS4qNwhYEMS5PaTNLJHosJ1YYGH8EgTvuRTn6PE749vDG7FitSF",
  "key14": "2Sw7wuLAh8icpmzUGAcJxqpd2SJ6XybvuQboRe8xSaoxhcT1yd1TH1JdBtc7dgCFTcEB52iHRYABFMos2roGk82P",
  "key15": "5pKHPCidqk8YbcbmM5qGHykiDgrnxgrW7ASQQbHvvLB1JPUPwcaB9d94NRdh7PEyyNjkK6HWvjEetjbvgZ5v8ZDn",
  "key16": "V4UsJZ4rQqzmzb7amuqMECWR9gtaT9NGA5FQtH8eGKnG8FnpqySm48W7doaxvYkmaDmf4Ei9JDokoJSX4VK3czn",
  "key17": "5SEGiCU7zRVEokvuDXVcF3Bb38TWtrf1RTVqFFPWwVQRC9efBJgN8p3cEg7AV62TknnyHKGJQih9j8yHUqPCaLDb",
  "key18": "41HWMBXpujpSGnzj6jSDXVQUXN2mmPCjT63AsBmFjoBwNnaYcKQSSvBwgtgF3W6jPXA5ijEruFbpDcFZAHkRwXD",
  "key19": "4eKBwUBgPLGCyxYrdR77h6zTZLD8NapUQMdhpRydCh9ExAUZTn76vXdbuKyVhRdAjZoXJcSBDtYCeFVfic3REcS4",
  "key20": "38CmRtnnUetN7MM7sq2j7hmhwacXauTi4SQCc3MMY3q4rsU5WorhaXDp3yDfXgh7PFcHjRXa1JcXioNorxiaWGhr",
  "key21": "3yKqVuRvGobMXPzfQNZ7naPugrxmVjQzqgGEsSW9AzAiHSrYF14PnYfSS9kRC5qwQbeepeoLPkWLhoHJdouThGsT",
  "key22": "4HiLxaz4ABPxzd8wU3E2UkT8QLFpJJvA6VRmyWk7ZBggkZdEDg4S4oR3KzHPWRumRCV5xZdGwsCeQQx5N64Amuxr",
  "key23": "5ifU9bn1tmGKKG8FbbJU6zoHFfcUcSRS6mLj8v8eprsNdJMRusbdPaDm8VY5r6fc8AH7DEniFoD9WrwwFsYk675g",
  "key24": "3mg4FSaE4f7RxTJ9eA9ywe6uEeC8pnijK7SqqRmJPK9WP2tZC8MQpGf2JawfPJLuqnAcjskKNtmVjsatjRrJ22V2",
  "key25": "6RekAnRxA2iZydLjznia8ym6HZeEuE8gQwrxGM4k5Y627SXbttBPMEWUd4p21zKe2z6PRZNw5JLsf1Y72WsNjvb",
  "key26": "4mhzZj7pJhNpiEnX3fpTzQV86PStX6kWMgVn3434vgukvnbFRtncCHrLAmbYH2BDyBB3ssj3pUHpBhYs4FJzNMzk"
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
