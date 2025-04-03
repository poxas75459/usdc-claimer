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
    "Nnzq5V7RgWKUnVWkfyecyFKqv3Ud1s8s9VLZomhYxUxJtE8o1ZFh6Cv4eoS25Z3qxksmXWG4A2JMXiECnUwWbJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQBgRGbCK8SZhk8PAaZXF2LBdy4jjonb3n4VBpgM5isdjjygaa1tvudYrAuJqphNx4c42WmjVqoapJnWa1m8Lsd",
  "key1": "A2GNGo4wV2giG4APi5GZ6m7YvoFyy7CKim3KyhZrXkD49ajDRdvv3UUjYhxuS4Ndf3KHD3vmBnmAXfksfETWxbX",
  "key2": "26GpqBdaEZLtX6242JibD7DXSEqeKeqWGca9vFYq4Uyne1Qa6f7KW94S9HjVDcfKf85UvD8bfESjTqmgf77d6pUS",
  "key3": "2wQBEvDB2N2UaMotyt7LUJu1GxRXNJKV4HfLMYWh7XsuuhaHF8MdUaN3EMamX1XdSZUXry5SEEq4N994dLyDReZb",
  "key4": "2VGZSQxnJLVKorrN3aLs3AsVbLuWNhga2DHuZE7u1cceSrFunmvUshUvnM22YrZAYoVkE39kRzSDMqNHanjzWQPh",
  "key5": "5fRSSjy2j2fo7n8CGJDwmxdHYbaEHe4tHrbo3HJi6E9yjoMESFZc4WFqFJKJs34k6cLXxmF3RQJRFoGdHeheyCkZ",
  "key6": "2BBvs6ZTJ1b6qquCDWqtwvzfstNtHfJNcDsU4qmg9XSQ8ppbtBnMXmdAQC2wcSEWSCA5ykmXdythm6SEL2XmdDFE",
  "key7": "nChnRc9HcHwWu17SWpoLDSo4NqQgGQBeuURvgQL8AMsxBNwZsuaPmbqycX8c6VtbCci3p3CUJPeb4ctfefrL4k2",
  "key8": "KHB5K4KWsVCqidnib9jWB1CGhX2MNF2qRfyUxN5CoKhxBnzayD8sm7uAzdbPi26sR72jSosjULYhryAj5eH919E",
  "key9": "WhHs9XZ26MqWg1Vwrez2eBDG48KrxaGUY9Av5QHygsFM1U6BvJjJfuXNjxFbmJ7bD4d6Ku3mewXwAkqk1geNepZ",
  "key10": "2kCVfSTF9X6AddvzsRZQFtSoCjMcijGnFqDQh65m5DMchNFbtU9V3tJu9dJGHWaoJM2TtHd31Jhim5xZ36hqWGw4",
  "key11": "2Sg6SjakgzWc7JF61sCnBSoV1VMFbw8Y8b1hbnLKHnKxENPFgQjEk9Tpk2N1z4ZJBjPeSz3ncDUDpQeX175Za8tZ",
  "key12": "3G8f1Lqgpi46DghTeEKpTQN3ZbUfjY6XrGczac993GWwRigGi8XP1DvngQzB9pqjj7SqvZbvYB4uf8MZzXgVZMPP",
  "key13": "29NdQFuWtRkVtkkuNkuohAWh6LLzAxgekzVDfCRTuN5uFReGATLqzKTfE2rMrKPcRyMoGdsm8cFGf6NWugu6QqeV",
  "key14": "sZ5Rdmjgbs349PE7nzPYZqM3F2ucWhPk23kQg39nvWv3S5t6DkepwYtuAKkidFVTDkFJryx4KMvqseyzksQsAq5",
  "key15": "34ysakAWwjWRewbKr1dsvh76j5DRau2JZ928UQhoHDBp8zkEgR5S9WdoMGppwXAG4vz4LEVcqSQaQuKyAui6PRPW",
  "key16": "vCRM7BpgLUrJeJWW3MNVfXH2rJQUh1Qy9S2dwPvQ1nmn91VZ2ULeFLGDmjtCqoP2oHa5dvN6JBpBf3TKpBAVeey",
  "key17": "3KgLB1ytAJvmPtyHT7baoED2Fk5jtymEmZ9Fa5ofSvff34VgYrFaf6jk5D6CtVu5K7tXowdTxPqyuoPGfKxd6Qzw",
  "key18": "3nKZSWjKqAuzPP5fCGaaoJkRqb2N76qMF4R3uucUwehr4kHjvRdpfwVQ8mTjQeCnHgSuVoSmE1YwXcNuLFrRFLfu",
  "key19": "2rG5ZzXP3BBDUPrDaLftsjJcoERQm2wwHVV7dDfdisSTX5PKy5i4W65oBVDu4RfYWY1rYgax1pVYvgcfSi5pjFnm",
  "key20": "3SLfgxHZfN2iGPPYHB3gucGruX8qThubven1mJT1Ynd9ifZbqiNafprmKQ9rr53CXbJpftDdEJsrQrpVvcozg1uD",
  "key21": "5XfMY1yupePDMtaUZiJNvXbhSTQ31jpWyUdpHLHZbzoJKs353mN56kF8bKtP9u5u4iGSResnZhihFo1Bio2LkLEm",
  "key22": "4E7kvSwp4C2quoB7aBdTcT5CDzBYDejnMUJVP5DUYYfGJrFdh7RcSaeHUEHUbvWWHHivJVeGmSwuCMn3ZyrVajBp",
  "key23": "5fSkQr9kdXYpL69QXTggxkshcUnknKBq4uquK6WrwqQ5gVgvxKdYbDAn6gNTc9Tm1HrUuqTDp7UWKBvhD9XdMXhW",
  "key24": "3Jg2Rg17hEN3Vw7Z81vFwJ74gYMyZWQa3Z3LTo8HiMyaEMNuPe1F7ZKb2mvurX6BTC85zC9wcYoqLeojPDom8dJE",
  "key25": "2AxW2aA8VETK79S3CytnUjroWqRah3McZTP4T3KAr69ypGtXWEpTSLpAhg8ey6kL7z5HPpYmajX3a1D7Dziy386E",
  "key26": "u3LdcpB7cfuwJ9UoQCokqEhFqsuraWCuSTWaNCP5gMUwG19e4expKpVjSATT7tvVjtQa9jM6uppf74TBHT94qGX",
  "key27": "344jDZaF6wn5LV5fJtuZasx471cn75QKoeVdLLXK5ibCEoincyLxQXdwFrdQgEBm5cQPphVgtz9b3H5ZDYUL14oZ",
  "key28": "4QrdDmcpUGuvvcUyZwM8hydE1oGrKAxkLGS5rU7qe51Kd6UE5yq2WqvYPoFsqSm6Mzgt5KJMRZ4x4FuaYbBDZct2",
  "key29": "2pxiWYZmVgkPCcazchzskfZPUh3DXJnwXsyshwr2JbZzKEq2YGH9SMpAkaabzvdV6FPVNi2fRmWu4VmBpPueMeJM",
  "key30": "51HrWqAvM1M8evtwT3PJiRpCBqQYjUQRzH263ywr13AfoB4VPBKkAvpBApYHRfvVw12yKdtt3nYUhhHE8DvXs1hV",
  "key31": "4kcW7mrv7ReFa64enRySauUzZ6jVcmniSsdRF2JP7XUcYQivrU2cZm5vVx3uj2oKcoxYSTyoUy69wN3xRzaQ7Xbh",
  "key32": "64fF2wYrwqd5pqNGyu3fpuzk8qThRqsPVHTD2tvwDXwK51bwyTj48eFdUA29WnVpVJPcdb7t1mQB4TKw5nDMYDjr"
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
