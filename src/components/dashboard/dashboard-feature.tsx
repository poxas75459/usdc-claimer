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
    "SrAfZw3hRY25brhjFWuprJ3HyjzLZJkz3zzw4xF1GAvaXBAYkjUdNzcD5kStGmdTw2BGLjbAQxMC1prgcfBJMgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NoY8qzGhySM9VDcCVDNaib4uSUrPWT48rzKY2uWFu8ZTVrhncy7KJXZ3WTaXy9o8SYkuB9fbe9BzbsCQz4YNH2f",
  "key1": "5oFKE2JNhNEzDRsrpEvN3RuqS2eH34uyEJnaWaPZhuDxTB2cSWccqFQCo8EijDPc7CtruhbHz9q9QLXd3HCLMCqh",
  "key2": "4CFKthCVyC1GwW3qQmLc2W58uERQ2gkZKzsSZX7HKk1Naqwc34o2rsMon86zTSnUvs2vWaiHBo1zBzSRqvRsPWkM",
  "key3": "5o8qtMWGXrRnATfkBvr4BungAjWKrkj7B5RhxfbYGKmHtbkfcgV8WhwkAQ3kF6C2FUXD2HZroGvRT8RmFuWhi29b",
  "key4": "bL1G9u1efb8ipv5HdzZ65d2d9NeaiUV99oHRoJb7Y7t9TZ4QCK7htvbdWd9k22VBdcFyBJrjDjEpcKRqmVNZ3C3",
  "key5": "388n9SseKhkwnohzrVpbiU79befqhkQGxWR9TKsza5b5fksz85kHx4HYnChp7dUyYEQRzTnYKojywN6RdByWfoQF",
  "key6": "bTVdSh6AaJ2kxBrA56eds2ErqdgQNpfY8e3LomzNaiCCATR8384kvb2BwTxnzPtyZtKwCczh8ZpwwsPGGrgVZFV",
  "key7": "4qfuMdf8epHAA5obndBjt7zB4KEJvCMSbcgUDK1gaY9a9xRGW5zYA2x9b8maM8BC5aui14x2QewwzX2dDEGcbwwn",
  "key8": "347jMqpdL2vYF66yJnqBsXtytQKYJYWHx9MavaiauMgBNFN4cvQ3MqKDbDhKMkTGhLcDtxD2AcfxwVZbPokku5GQ",
  "key9": "fnkr2KBW9gVM34XcEtXpxGm1H8jraqUtNpERcweuaxHcni7KRP769KVzVoDAfwtLS84Wp2ttw58wZum6A6PLGeQ",
  "key10": "3yTXRhKWY1D2qcgNdrCJyEaZPfV4C2d7FUzNXWcnsXrSvE4bx1UuTBcxnqXPZWbgehZ1Ka9QN45AVVkv9JtFMPwp",
  "key11": "52oeSGMUVrRE28aVCYFrgd2atDQHwQWfWtQk24UZbJxvDq58BVQvVW1qkox2PQRQyURnL6h3dD6MkajqN5qXGVAB",
  "key12": "3vknnYeqRE9H6Tw8mVVL5ocPhBnGpg1ft2WrFFwPh1wt6wcvv2La7cw9EBmdvLuav4yDxgQ5fGVJpgk41u5A79UE",
  "key13": "2643ozzb7tZJBRzgoDNaiwEqMCtMCCZryVh7mELWFRR88BXCSHU9iyvMPBeSLzQNK9hQwRtXjpAfdE4vb8q6Jqv2",
  "key14": "5Ax9i37S1FQbuB6AvN8dimRFfgq3c271XTWM3VmFBFac56sNB5mCfwwRV6cLvNK466C6a6wAXunr8FonukJBxehK",
  "key15": "5vxvrNqrp2LDBum6Gt8Z3pmFNUWSQqDj1yqz9CbJwToqDR3YPxFBbxR8ThbGi8vHYiHR4RxeQZcsJcfX96f5SQoe",
  "key16": "2rVHjKR9sYLMCDsLaXFEqqxRfQs54qYCcTkAhPEHndHVpjhaVAC7NK1tQwgYeAZghFG7V5xPWGRMBABMQHF2mmk1",
  "key17": "5H8c2hFQpeeSBPvGJhgTbqGE7N7vf9Sa2xt56dwzUUVCsUkkxCiHrqCrP43fxu5KSLr2zGJJjapVFYjf23g936GF",
  "key18": "P5Tp63onCqZRAAi7ChovSChFmdHtuR2VZbHpb1c72oywMhujPaTC8eYX2UkPizjbfiQgNtsH3Q29HHtiRboSMKy",
  "key19": "4qECpazueJCuNvGFGwGBtdjHEu6PQRkhqjeVZ4ju5vwKL8mF1UCoH9EZ8K3232fwfXZKNzSYbgbz9EF5PU3VwaJC",
  "key20": "3rEDhh3PDGXZUykPYY97zaiKLo8EpmsNvqpnBh8SLYHq5CWzjad8FG45PYviuvsS7PbT7a7ByStDFHL4pbRHVhSU",
  "key21": "41JakstSJcVE1DvSEsPgWBYyMc2zWMMEsdGs5uqTkKmSXT3Nvn62fguR2HrptbUBkJgFDksJv5rHp2B3nExrK11V",
  "key22": "2dHjFU4YsmR3KwDYMLgNhNoo3GNuxRBj9jgrQmjGNbkxHKGGxjiThMS4g7pUYP1yELw1EqYgFJWqhuj3hcLjWM6X",
  "key23": "56DY9yEmnQ47MebbhJxEGC3WzH3YXZKyPPCLuGrASecjSWo1azKtsSNhzEpdBjbUtGqqH8ZKQLRa5J7CkqTVTpep",
  "key24": "vc74M9ktsNu5HwGxWGoFLvZ2bybS8SB81iDhuzNo3PHKSnUx6PmEGTrgckhMCzuUndsDJ5CxpP9caZANJJchQ6E",
  "key25": "3vM99mHKJz9HPNoZgEvBGDwua9XFAH7vDEZK7Z4rUphCq8vSx8woL1YhptS7WzTLJDxYq1JBCBUCH9rgdrXD5yw1",
  "key26": "HTsRS8RbR5UMVzJYfbkLYN9xQ6Xo4YyWXzjz7AL7mb6V7bhcTrztxSsNVXgwHTZHEe9svP37AHknTDbFGHiv2Vq",
  "key27": "47p5Lcb5yftbEc9oKFSMuPbyywa752bAXyuMpXwWsDWFztnSMK4qTF6Woq88xXexQQajcFF4MCHoQFWaHDbhGwtG",
  "key28": "pqikmaLLoTMfWzBnsHLv92UfMm8sxnbVyr2kxBpV9eUynU3SSA7NafEGL22VCQqBKygy3qLntmiMENMA4ZvBbRT",
  "key29": "3zTrsMm6cSXqFBYX2t4MU5Q3v3VeyqsMJ4Udyx9eRt4uuvQUBYGWNA3xBhbreoZ2vQm1ZfzQKX5UFc2wMhj7uspX",
  "key30": "4HW1qsg9AWh4GHQtSi3XM8qdEZN71Y3AwTcEwcSuDtckctEQLyJYG51kBMYCfmrKWhwrQv4G6qVv7SYmR6gpKdNL",
  "key31": "4kCtJfjz1Gh58YmVv6a2k8EP3dbWb4gW9TtRdTM2nyGGeTG9aH66QneWE7cLMo4RrWvWCDL6G3BCTxYc8nhJD1pt"
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
