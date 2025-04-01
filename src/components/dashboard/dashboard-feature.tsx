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
    "48KkRCooncvdHocdhRMMqFXLrWHRy3JxA9zTG3s6t7vT7TJ6S1AR7F4zyLyn57BEDPMkALDRkQrM96Nw11ivTjuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCKCNpTWfoceLsY7FqAtThrKNbipDZqo9R4cNf6kkcKH68bX6bsrBApHxjUB732Y9tCHSVwdzhsQ2tpEKeHk7Qp",
  "key1": "5Xuj58wvXprehhxgS7VgVc5DaqtrN6pdR66tdx2CGNU8XSdNLTwNFJMhXHGZM5daZd9n1GiVUFvQniPMYLmNQ1SD",
  "key2": "21K7De22ngwEFqLsZcVRFxkbb7qMagG1qRmAkK9D6NmY9RAy8ty4WhfPuD9GMMUhzgBrhdtD32ZLAXqx7Uavfbg2",
  "key3": "64iZNVhDwSKUXvSgNWNo9v9UWCn5KNFS9ZX36uaUfttHmCHAMey71hBXMKC6HKXnZMEa2kyfdRTcCturd9b7rPZP",
  "key4": "3r7XNWd5MTyaPRkmjt59YzvyBSz535XBDsDsAMJPgGADnX2bc3FEm19BHw3cQAS3ecNgyNHpjvWAxjtU9Yyxh6zQ",
  "key5": "4izBAXEMmF2un7uWA1CsnA5b543ecAuBFvs7doxegXyr7kHnitvez9VhFk7t8iHjuFjY4TocqtvWiufEgfKww4wU",
  "key6": "LAHQmaCioTXBzkA2eSeA2VuN6FSJWGEG8sYm7e9DBoRfMsF2UsSMiekPrgHT6MWh5yu53YcqKfYNM8X8KAG5CUw",
  "key7": "5Q8GYqaQGFSfM2khi73ZeQAc16W7ngwSwhXZJqiH3jPwuEYMRsKVkXWQH6UagV8WQ5DB8G1U8BkEiietMJ2j6QNQ",
  "key8": "4YFMkBN8MP6cLjR7Fd5orZgWU8rS6zZHFngt2agqD2xUWGapNq4zZG1SMWG4upLdYd9z4mTj68UfE8XLwDFEZKyX",
  "key9": "4Egkvfz3Jumm4BGSeqcyzh9py3c8oSjZf22bAwybQMWBpm7jo4HFHhRTSeiyuUw3JNvxMRgNDgyeZ2kpS1JMUwqW",
  "key10": "kwGJUUh4w144r7f6SdwkUU3QPy8v1H21ZHPwPJUsHBgPRQZLa1TN2gK6oUrbK4fru43bVTNYM7wwzWh7cPtAQQY",
  "key11": "4mo8B8wyaV7FmPKyWpntqsBLJpBU2Km7QGwAVeNsEuc2vXV2HMTNbHGVpzDzDkvFVrGN8VN73UwM4kgKKT1Wv5aG",
  "key12": "5dF6KVELosQnNWUrcyjYW23xVBzxnctEQjVuuGaaP8t4Lc9ZP2NxScevd89ysgDzADUJmcU45HAg1T8PmkG4ZH2c",
  "key13": "4bGGfwWjDiH9sQP7vLDwbz315RNhHFk5ZGhWkgpMRU2ixztk15LUisopTS2rMTFGRVw3oWbEoz81MAVf228umbq2",
  "key14": "61opceeqke4zGwUV2eqqQmRmi6WDSvmSHv7gpZytGAVXFRtRZaMBySSih7deh3XBovUtKmP1wYmvxBSZxuvpDiWH",
  "key15": "6nUC7AywUNv5G2q74Z3AthTrpcSTiBWYhWaYKKxcdwYCgWnLwvRBxxvJSvJyy5kssBgbHrecdw7L92AacdyH5Jb",
  "key16": "S5d65DfVCp3JFbsEqouK2i4xHMmePbTsrAhZBTDV2yT3xAAv1CKNFF5Lv1bUaBvh4qw4XWyVVFFouSYQdAuJ4aN",
  "key17": "qcSdNzTS68HZLorr8j28VRbjxe4DjZS6c51s2UzFmm17JsN9MbYZ9rKUjXgsZoAGD7frL1dep1SnsYZ6d5tiZJk",
  "key18": "2xqH2EL3VgbeFTQBUeruMiKGj9m5i11gWNwongpUe6p7QJiyiVehXUg51GeiwbR6QrKLH2UUVGryheS2u2mPEHLJ",
  "key19": "cQeCML4FsSUpeQCCcuq6ZasH1vmTMDKNEftt1yYdhmCKbkgjKb6WZYswmYjvVQMG2PK1oGz8eTZ67icZhKr8vh6",
  "key20": "4xYsXu7HTSX8gsTiRLMHpeVd2MdgJSnTSULrqLVgWAfPJmdxDtHi5WC8t1JUjAyC1EwR38cUr3j3G2efyRzQpiYT",
  "key21": "3qs8uCtamE9KXPPBZMJLbvbt7amXvpik1MvGkCynCiJx625YKJ3xbUk8Q4qzsjdCCnWyQq1XF3oxof27tuABQrTA",
  "key22": "4ZS8TfAHzcUWoexqWXwGkpCX84iz9PAiWhTxVckiijSuULBL7uXpbZN8E4MeT8ovpFee31wJyDTTw7VfmPYJrYmk",
  "key23": "5fEoRfLob9fXjWkm4dBroJ5PuqG2oUGCQM6TdDYDsR6NYuqGNfEqtMn11rYPGTWeXQRj66ofGv2Q7LjCZKowbkXh",
  "key24": "5D5PkF6S9FSDK9JKPVBhVRQCB6n1oZ5RVoE5UokJG1x8cZY9tw1FbxzYezdK9PpwACDCMjHNufYo8qX1A58vLbf2",
  "key25": "2YbVs4KbzCUbjzPwWBSYZP7MFsxS8LvTS9UyfydgmoxU6DySMLpGHq7aMtJKUGua2Tohn4XrDtQeqb2MDKaN1z4t"
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
