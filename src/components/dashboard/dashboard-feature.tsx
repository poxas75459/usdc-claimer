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
    "2aGJ4xgxDjuJ5k93Xqw3314BEzstcwMKvRiX5cYsX4TREm4PExvrJoQcMQNesfSpUuMp1Mbv7qdH29vj4bWkSNrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZfNSCbv5qbFCcaaSQ4xFNebaifS2Fu8S5rSFR2VP8hGUDJVbqiFFG2AWF371rV5CEq8oprHyYfpcLP4onZuXKh",
  "key1": "B1cosvGEg2qUqLszvvLWFkut3YLhUck47unUvkRFoK5zacDdKhzHR4z1s2YtoHNbYS3632BnDDJhToiNhFVnRDJ",
  "key2": "2cSQduu4HUoJYUyRmkULaeApGBK4D76yEFcL5QYNdZkRj4kbj5f4Xp89Gu8CWW7KknAHyniPg1VVT4W5pD92dWbc",
  "key3": "2kkDMaWReKSjeSHz9qHyuNJHmrRqi9opUWskGT4SXP84jpbh6QzuLTastmxBPer7ZAsdc4CVdjxcQnU6oLfz45rZ",
  "key4": "3WTnAuHaM6EN8btAemBNaLDEhymEMuNFmutAS5EjgAwjgNV3TsZtYSwZKGnpEfX4KA5KkvaUr86L4fmoiHo3Stft",
  "key5": "3DCZt32GSRssKdYAnV72mcTjgYGpXeQ632voB32Pdr4SyjBUVjFU5bVh6kfe6Y3XBNKyPQUAY2aAiFm4LGZ2UV7t",
  "key6": "3EijhGVAJ5SYbodkAL68TWqm6PptC2SyKv5uiLtWAbCnViyqwoLcj8Y6VkE5sLGkk7JyWvgZySw4MnZGpGTtvsbf",
  "key7": "2ybb9tXtm747Yn5SdYS5GX3n9Xu9twHCSw4xF2TwX68vXjTpeM2NwPyuQgVFRMhprmhKXvhETRpC3vvWLQLbCJn3",
  "key8": "GD4G7zEGMZN5vKmABCadiXQ793P8QX29UWUVDzRdYpTLSPFTcwxeB47XL47BhCf9vv2hY6mahXzuSX76qYB4XAW",
  "key9": "4jbmF71XsotYvLW79Pp3xyfKpUE3VU2gBvZjfMR7aVemJsDY7svqmQSb3Qc62m3qGqFA8gSutfQUiJWcB7o3A3ae",
  "key10": "3CPfzdh7gjNMVjzYXF9Zr7gMN32hXGxJaXG5EqnHiT76QnMNbwhemvDLk8gd7UqBFp1WTs4k1hDycbCQuBNaNkJc",
  "key11": "2vjYfgSQMziKy7NmGwzTiVh61i6Bp5bzyqdvXmTWR9isxzEhmQv9kP9MKJ7T79kJzq6mZxrF2kBxtYL3xV1cvchW",
  "key12": "49ehH6HuT29AZnZCBgmmCxNQqYu2ez31FwmRvQfRtmYMQL6hFrwJwSmZQVaJdM1THjQVfxwMZ6P5yaY3FFS7nSbF",
  "key13": "3UmVRM7hmuTTSqR8CMKnpaGDv47JPyxEKVjHDpJQ6Ex8f1xLfe1AwWLpEpcsfyTyTJs7fWRkkYng2oZHYNJXsAxW",
  "key14": "5RqMs3FAfCy5P3rCxRwmpHA1YDQ63NPLTUiBrjEXg79wJJp5SBUXsFsS1XyQr7LXjRBGsUY1TxjJuqrNbD9NZBMe",
  "key15": "3Qm1urGyxiCPBirrusgcQ4gXfvrQFzZ2NRgNaZk3e9mGZUXFmZrm2Ar7VF8mxRupmyqop2cfXufEBfJKtKxrfVwa",
  "key16": "5zgx5QGqk5MKoKufKEY5igJ81wqsXUn4Hf24AmG4JmnmHHk8fS4pKPwk1jBp6KdwyWpPtNSBFu5oAMJNSysrxCgG",
  "key17": "Wrry4NHWv7vPcNUQqED2hZQDefhTnJot3JGBfnJZU6yFSenXnWE31WFxYbN6fbU42ogdoHFoRbay9TtaZmR4GJ4",
  "key18": "3r1rSZ8DQpBJ6qHASLg4CmD2sEaqziNSQYRe5G3qRfVosHKyaXFzk2fCFRU8rDqeSd1DhxrG2yj6CPC6rcX1yDN1",
  "key19": "wvNc4PMnkHeQtDDxESh9cD3govXwDQRNkXZFU9jPNqM8ma62PpbF9u7RAYW4z24H1VtxsYqvFA1Jj4KFtz8Vjnp",
  "key20": "wEveiLn4bXM64uSSux69hS771F21BfXgZi4FXYEgwA2yGStGKLG3sz1gRaKqoyrHVL2oP3s76ZAixq6FmL7xewW",
  "key21": "fQYX3oJjSVjsWRz2Fu4obtdN912ss57Uz8MbES48riP6SyAr2VZyzhLNB1QDeuVk7cWXkzebjERrfLgHCbHyZX5",
  "key22": "64i6zCEESLkNycry53Sh1ZhgQ25WRL8wGgYVAPVfoGScriWWxmafXJiahVd4KQ5Wxi5L37mfu4zV6bEhCYLJs1z7",
  "key23": "4oEn1RkrQVjjWJsfSKppmDU8BVwL7D3XrgPNKYHq8uQXVcZapWwf9TkiiyL7XzGGvJGuPMbRshL5Qyc1bgZFNuAK",
  "key24": "5cRj7e3dMabb1zMLTucA9Z3jzaLESH9RKbc4B7wK8FiVVdQomz3ftkNyKV1DhqHRdBEVP4eEBnCgr7gGzLgKeQeA",
  "key25": "5coGDP4Esz4JHPdgdsJX37spijGFcAqTDWQ3UzvAq7vum5SLiwU3iuv2QQEdKBThwXJ5AGE1A7Mm31f9WN5nxaRJ",
  "key26": "3rPPiGwJvkMBjzJ33Q1Ugbu6YbZgYV1D8oBxXnUfaanRBb7qCgzrjzzKe6eL6toe2gK6AfJH3LfkVVhsbqyJanp6"
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
