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
    "Jb1fYcZdRv2U2HuNdXJzRxKtJVYUAnT53S1uzkX1FHZmxt1xu3JhKDB362E2i8WytmUcQLS8kJ1kLdQLVu4y9jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6QmAsakvezhsvhM6SEk5Vzu8MNVi3X7VKSFEgb29kmvTfqgzV1U4QibD8RbJPXbZV4kh33p8gFSDF9hnsoWG9Z",
  "key1": "5vhjxku2kAFBzXWK6xs3UiJ2EPMyt87VRpvAagJkT9CdyUpcFBunTaf4oUpDmAs9hy6a13Dqhge3RkgTuzTAePS2",
  "key2": "4QgprTAU5wwmNDVRwTyfSVDHgPgzXsh6KsXJyuVcW9GHXdj7Ln3PfM4bZ9okxXmZkxMWBgpAvzAR8EPY6Jw1fw75",
  "key3": "3ph5KEmUY8Q6jMNg9KjwximHdiX9J9o2rzRtcz1p7hnJ3Vj49pTtscryW1Bg3F6SpAakunFSXfqNHPyr5JtQbt6L",
  "key4": "5UdX1xbV1sCuJWh7gqvBzTfYCHKwBxr6ixAH9TMFSKHuzSVSSQ4utMfXUB6BcxRiLRqECkp9TuEAsZYg8wTBLn3S",
  "key5": "2AkRDoQUtYNR3hMLoPoB8oDE8yCjQYWVQmbpxsJJZVdBV12QN25u6UJfhhMrS4ei3j3v1D4hNV159rzgDfGijhtD",
  "key6": "Q6Fg8FJkdPsg7DazE9jnUGha56V6uRzrdtyUxB77hqUEuLw4ssMj8GHWc6UUmwRfmEbnUxSGBXKZX3FeatiaJrr",
  "key7": "2GeuwEh8uQ7xp4qrHXYgKS4txsyi89pFWAQBfn4brkv8hZ6hujPuJRWi9Re6c14ktqTCHXX59NsHcjNiqnMG9yUG",
  "key8": "3vSYdcwvqfBcDymKZkeqwx8L6WZRfWpvcD36JmhpHmDmNBo7q7hbDCwpVoLVKMhAu3CuoYJTKisFPscsfck3LtVS",
  "key9": "3HvabqftiQaJZtyBg3CtkxBffffGtzx5gk9CZXXXVwF2fuaoYrip81zziqCye7facX27KjNX89sbf6pC4QZ53GmK",
  "key10": "4g3nbUGMv48tpH9HTXNmUTTniiZXg8Kdv6njo5VFbXEKzN6dDaM1FbsaV5drzNg236WZ9XxkhrbG9vPRQjXYRRXA",
  "key11": "8sSBT1F5QQNTqyLuikgQmWkzfdvPY2onTit8ihVf1ix4x9KJystHUNGMgkU9dV2uYexbk64txt2whKomnFLgGAp",
  "key12": "4rCY3otYNQGVHWq8Lv9ByQ4chrFPK7niZQC63i39V92EuEBqPkGRR48EoqYjEAhTGcq6ynG2QuLEc5UZxCAJNMnq",
  "key13": "3gmxbve5MGoQeaLWmSDku3g6MJQJHkBkvBTAWtFJU11Kj7fD3uH49Qw2UtXAr6RUNYkT9rPJLeWeb5769M7casKd",
  "key14": "2turRE7B87fKDwthdV5M9c1AuPmCcm68wJQEu72bqobnJ1yDw28GFg4uW9QxYc2237maHfQV13or5J2vEnegESsc",
  "key15": "4AqKJpygHURtLUYG2RwXiqSUvTmmf86HUYZ8JfkWBu8r3wqyyaDRnszPY3wbFXMiwGdifN3NkQxaUUufMJCZ63WW",
  "key16": "5BaSuJwhrg2ccPMpgQcspWsQrohrDMyASW1us3rv3WG3ptfyizK7FgF7FEGH8irh86CcCDt6k96hnRY2LRCvPpwp",
  "key17": "5W6NU1t7gr6b3gUBkoRcSdvEWwrC6xoWnopFK9UYPzkNDAtbPE6TiBCHQtNA6eViKEZUU7F3yMyQaviQFRgrP3tw",
  "key18": "5Rd8h2VbK22o7DBSGAcng6bRMP47TCEhag4bDFvceCDgMo7sP7zxo1vy75H6yjCkczWEwy75zat28F22cZi8iZ8P",
  "key19": "2XHBzP4zqgB8A2xHXeE9ADbFm3Mm1sbLDJ9rdW9LgPRhUFSpb8zTDWfnwnmSXrbSBSix5BLeaCbqm3JSRA73TCx3",
  "key20": "29LDfQokBsHCY5oeMraTCzaQFF1tGCv82w7uPX3FZc2AiQsZJTvp8rwtULDGqNnj2gPoSQoWei8HfUopjoZvQSiG",
  "key21": "vD6LtYKDjvS1cdBpMzR4kVgKVJYHhV51FpSFzy39MvqURfR2QZt6QXjkwhKvyrfWc3C76992R41VKiYe6ZE1Eyy",
  "key22": "2KvFdpr9kcd9m7jc6XivQ4ThcysURpPdhuPpboBBYobzLx7GLuqMFxeZacWcVwZ2aK8k31FbCMg98oduBEK4cAaW",
  "key23": "KJo852VNpSoXSLqV9pNMrovB3yGEfTyHKj2vhyBC69nqLAxGmBH8MeG2KHeEFgrkb2eN3Z4FwKFFpTpy2zhHC83",
  "key24": "3bQkmhqbtUH8XUYtQXopvRUKsB4HzYAeh642GPKcopwrWkmL6cRtxR6roFobEcdSX1tF7nZG9UPZrPoWhmzBLfv8"
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
