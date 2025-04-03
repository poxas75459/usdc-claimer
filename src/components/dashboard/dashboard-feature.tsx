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
    "ypg5kXgbnudRBoVeWjmkidqMiqpT1yDZHWpbPczdamznpjtpcP6WrfGysNJuXmhuYhybPcrkuhmDWDnsyvR2vJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "De2tUBs1kpCXCW37JQNdREALuHTF81c6wFkWCW23Y4w64DHsx7rdP9xrcWa8eBnggncKrTt3FFf36xXeG3ZHWic",
  "key1": "r2Mey1We8BoZpyPLqNdHyxKYYamED9XSCtFUokXm4S6TCkDHASSCABuRDFZjJjEXxGwcT76qMV4fAKhptdDL3oj",
  "key2": "2xNYybFFizjbeiVtm9qu3Tm5PJGUMyZrDQREHCMY89iAb2rZtyKktEzbGEEF4it3hjNXXPbaMgzBMQrHX6nAtCrw",
  "key3": "5ZxAHqJPwW3Kiby2qTXzYSZFqfCrXpzK3VoJYQdyYFiSEDNNLTntj8c8E5GseW3ZhWN9Fw3iRhAb99tp9HdN3JXK",
  "key4": "gV9Tqznv3d9ScpWM2q5k2ubHrsDrNnnNuwJffNBcBPahxH1Upo6kH3MXuF1EYUYDDoYpv2JM4CaEYepvpfH92xG",
  "key5": "5jQ27oiEL93EgKK8LcmQAE765Lo9uYQtCQ9D6WbLMkmbff9bq34xyMjDXUK5Fu3NzcnAbkNk3XCwqABc47ZjKC4H",
  "key6": "5YWExF5FRLhEVoNFwTdbQkKYtzhqcxvR8y7j9PPY9zwqkpg5arkFCm4EEMewvFnPFq4qr33bZ1aqfxkx9bKmmbg4",
  "key7": "pkwwnhkkbGeLVRoz1u9L3cSfQYmGTVmSfPrpfsZHxpb6MsPvkEU4GQ27jmzQkBAHHSxgJx5Yas232WzWpHEZxZf",
  "key8": "47Poeq4jUCMNnyimh4TrKVQwxQ2cbUu7UZdmdAcXiu7oLUANz4CSEs8gmzNzx3MTVYkJimDEL56vyd6KfwPJ2veU",
  "key9": "m6d3a7NFjhzvwvcSofkzYad5DCV2vdP7oFTMQ5K6LCebN5mnpdjgwKPqEuX5LNNLZqVESKEcSYaGsUpGLweBRGL",
  "key10": "2PKwBTJoEChEgbxiBzzg2shLcrBcuoUsYRR5B1J2VS9SCTfMBow3W1sz4KhasC3gdEHcVWF9aEdVJgsHDzQpi5kt",
  "key11": "5wnTs7VhDGv37SnN9rCJYhvjysxSQkm28nrxu8uHuiTfzz9u9wk2xoc8V44jZwkHwiQDbv2UGTJnafk6A3iZp1h2",
  "key12": "K7XPSvXzE2NRDNBwkJeRhGBhDS18rDJqAiE9fV7M4yAw8MfsWvUvqzdVnDR2JdT2tvw1sy1AaPR4uov688efXbT",
  "key13": "3Z3qqBZwrhx3FsuDqYZQRKJyheD9rfncSeYmAHfsmd4hhPWUKmeuJc4exDmKNarRDNqCMPP8MPZ7RAfoKc2UaL5m",
  "key14": "5Rs7cgG8G7v1LRxbteBvmyo4z9uwEaTsG6z4tHeubMgEzCeh45VhTMQ15Z2qYw9ZCrb2Vf9QMzJhAePwXxtWsMf9",
  "key15": "5fLMDVSQuD6MMygJqKgmdajP9iQi3ErDkgTsq5ZG1CWBPkcFefttfqadYajHk6ZhVundfhZiDkUBt1X3CyN5HJiz",
  "key16": "33sXPognF2SbD3CaCrhMigPhQtHCd72bbqCMbHZ9MiXxzNs4wz5D6eNMj7WoEApgQhLxr8aC9mpzk7Hx4er829VH",
  "key17": "26XY9FYwTGvTAuLcShr8L4d1SKwFACCYZozXwCnoNLWKJkfPrwD6FewNJiHrwd7rvqwBYi4ScwmisnhCw7wV3Ndw",
  "key18": "5XEvzrKhDJCEb5Ly7brwjDtG9RiVtUELRu1FTCNqeDm4mKyJWjpzMkKxy1j8yphs6actws8HjsBdCv1k444EVrKd",
  "key19": "gzHVJbXf9Yv1mr2pXKvbvF26Xpdtggx3FxizTyGHQyVt1gdUJqN5q1UdQ4nRgJQVsY9sJzSiC9N2oasmYZkpiMP",
  "key20": "5QwuGU4DzCwHjqC8u31HFc1ke8x2ZmHgtF8Nqdd78ak1Y56AZJw6vZevDix2sb1ejjs2sndcmsh8W5azHjjkUeia",
  "key21": "crPb2GPQ7kiJyR7p3HnekzmJv24zQEEuq87BtiBvvKi4vkpPfDtW4KNn2wzEuxtS8zc37jXXDZchTPzjzcoSj1G",
  "key22": "4zgjC29xjshBUGRiKnM3LHGKkGZWrfMGJKEoisbpJdD4YHvBRAfoNPiNdPamUgM885e5QBM4BjbsD2ueDDH3owPM",
  "key23": "3BCq5VVjxWBmLWzvra8kAYschnydNoPbyw9JeBfcvbKEonsM6N3jsurNgE6PB4PwioxFwLU5UibbofgzFRuDEhpn",
  "key24": "5s639gqPQk66ZCMnvqeYDpncZ33ag8AdZjKXvHbPdaqWs5C1s6QZzV7vYvYwb3ik1CcEsca6nYyuCt2CQDVbemsB",
  "key25": "4mLSLNnnjUEfSQ7Pe5T44zqmZCD9nK6u4et5he3tcKGF8pFm1LtykX3Sb4S1oNzxsKk2zsucQjNSxkRoRRa61gYm",
  "key26": "63gnjJBnHcdpwEHSffFyMahvWmPKCNxgwkYWnfatabDgBofhAbAdixbDUZtEcMgJaeDBxrm3NiRhvqjKbWdXpudi",
  "key27": "ZXhfcvkf8GB4ZJGkjqx6TSTKeoM94yH7uuG6nPW6TjQtLC9Q58Ca1Q9gdCBMADSiwVKZLGGRGxoKo8xUgtNPjWg",
  "key28": "HwjT5cDpk5bLUCptoUUPo3GkXLksmK2ApywZZqobPwq3Fhd2WyhEETss3yRYwEmBHJ3S8SYqAZeQ7QSGvssRL6M",
  "key29": "5aebsuFuWi8V1Btm3FdNoVXN2Gr64FzsM3rUZ6KHPZiXz35mp5j4s29gPrBJqE8F1Tw54JK2U6kKUtiSnd3ZRMi9"
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
