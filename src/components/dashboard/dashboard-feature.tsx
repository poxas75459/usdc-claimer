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
    "JVLcs4znUv7YDXXL9i4Vpibp7fn71wQjGMLyp1zfxcKydPG5vcBhYA2zWb7XxkKr6gFkcgS8DGc2MgWcXmsw4Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTeDTbG7e7vakoouPujKsScVE5BMnXePtBhA63vV8Sc6PJGUD5dYaMXZ3qTcKueYdg2mer11HsgBEWUDXM1rh3q",
  "key1": "2jepH8z11oAedJ5k7BEeReeqdLjZn6MEqAFdMBQMw4rpqHM9fkqeBbsCkVmLdBMKRWXXAz4JujvhxEGRU4acACbx",
  "key2": "23YpaYRNm5zMmBSYMGUEouZ2kZqrkxnaYHPtVHtszAi6BFczyxDn9KPXv2Qare9idwHFFFZ4DdmXyGYLpW2Q3qHj",
  "key3": "txj5FJnuA3YwZX2tWvZpGiHP63PKVgfz8HRLaD5wNAnWtfni85L5fuG6QiqaHA1K62D3GCH6VrJtT6bPTqJXNMr",
  "key4": "5Y8ba8rmh59pPNU4PF8RPC74zvcihk53vo8MgNB7HDzLEtbcs292f2YCSjYYP89CT4cXzaDnBbnBjrZ8tYo42T2W",
  "key5": "Fd9QDdiaXHLkR5cosd1FXzcpLDJA2eRoAQrBTMnyof3bca4qpxMnxLg9FNQTtt443dWhvMfMhJknEEHmDSboWbt",
  "key6": "4LUNvMPuBx8yQgjYBy9QocGwqv4edRd6rVsYv6ucLoxxPMJTF8GKKMTbGX4zq4TjeWJb3fWjgAE37wiVKq8F37zQ",
  "key7": "5iMYWJFrBy2243fDXoXbh5DhYd2bbSHA9keLqFJzxA28JZ3LxbZBJJiCrnwY6SCiP4kGy1KsEhEGoeDp8SKxVXsF",
  "key8": "2vbYfzbFN5jK2qHJcTpxKxyD113Ka5pzceku6HgRc13gMv2UFU5RBYNwr3pNhiQwXeuYV9qZQ5i3XS8SmLhX8tmS",
  "key9": "zmt9QxWLQSrSU84C4PuEC6iUC5oZ75m2FMdj8A5R2NxrvMiouSwADLnK2WqJZa92of4tM6fafS11qWceG3byqqG",
  "key10": "4qP4GhKF6aYvyHwgQqcPR1Z3XWVSj3vFpEXRDfmaTbDhXQGtKYJEYXtg2axWr6Sx2SeKt7A7etCxzthZHYX17Mod",
  "key11": "3cZqsaHZ3Q6ceooVvgaZ26swWC49jWziiCSfRc4TwqYRm1arGEDZmbXcv9bm7A6W2tiAmkywef6s4cAEpZQLTLbp",
  "key12": "5iu1DLPY2T7y7z1KgpQdtb75biJUFhduuujjsovnh87BkVsRiEy9hbM4QXiD6dJoTYDjnWXVxg4JPfYWki6N3fcA",
  "key13": "5yXJhZcQXMyhMNUHSXNgS79SV7mjm9UHoVXNiJDeTB32qbrq7PRhhDrb5ZoJRpQnSoejGDoTb2CCMRvmXsoWwtdb",
  "key14": "2nPSu2TNQBa8ZsZpXw1KPcC62eQT418zJH25a6Sa9MqJDLpudNyKwgAUTRbJSR5Wweekcx2eDYGzxHAAj7YtZkSr",
  "key15": "4HRwB3zHSn8i1BsVn1x4LufuQXdTts4z3QBRaH9ANYhXKV9xeRdpQgzYhANzw53MQTJkGwZRXAcPxS2yjceAqa7h",
  "key16": "4taWkghFK7hhgaNts8KkhbmP3BPTDLxPzsRHdtGEccxdouA723njewmaKZvCwedFiZ3gisXCZrDjpLcDRMkkZXNB",
  "key17": "2BcSqViQpbNtpfT7QNK7E7ZqoBXJ3abo68bVod7urmiLZY3StpMtSrRnN8JrCJaVKwBEJVCNRjktcb9skuagvDHH",
  "key18": "49LrysLcc6mkyj4EQvmPhHoSah8a4C19CvzqVZeoauXC6ZwsPTqXAQgj3bZqWU5bWobKhagLALF7bDLyUj8bQfeC",
  "key19": "UhrcQQkUf94Fozi4kbWFPtpGp8HF4bnk8H11zkS5YEzQDvJ6MTK4zDkJwJxxP4AWTMKnAJFDa1fSWyzJqoF6W9C",
  "key20": "2ZJewreAK61LVoTs3LYHMpQkB5oDHtssTZ3yiARyb6bjZJjhY1o2wdSGgAr9STL18Wh1vU8o6PNMfzHpuFdJ9HMv",
  "key21": "5Vd7XRzsbGwPNgSNsRyQn3gn4dAjiuUtPpoRNwkgBop9FrU59i3nMarT9cUS29hsFUEZ6HtWqe2STZCvTDPLxtPQ",
  "key22": "5YmLyeWVCvi13UmK6ppRiBRNgzJ27Rs43uyHqWb7S6mHhY5V2RuFKJzd7gz69UPsnSzVN5T8dAZnFTXJGW8Au6Um",
  "key23": "47zfYq1hijSaVKJeBfCeSxBoosPhoVG4fB3n3SxBGYkJ73JZt77WmrqDkBLg9v8d3fkBfNDgUGLpntyHekBqEa6t",
  "key24": "3piW5adv7UVbimiH8XeNuTh8GfzkXfv9erEsyakXYCE28a3xpV9F6U7t9VetpHCKKLZx4v4k45LfZVJUwKUBXpzR",
  "key25": "HMZMemVZoHfN7qRcHrwUEDC6TAytD7464dyNrEAd3eomRSMmvBxUC7mWQKEzTrFb5oWzwAWfQ7e94GUu5W4BuNQ",
  "key26": "4mU7mETN4ZNQN5DC1sVx4ArHYCc8rLT4vjQLZhCKo9HGfEJvkKtePr1zwB8PVY7XGqrWsvHj9cnKdP3xzgpygrag"
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
