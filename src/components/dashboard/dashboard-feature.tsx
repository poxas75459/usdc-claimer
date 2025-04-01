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
    "5ECVhNLP8BqyAeCpJb3vDZc9qa6yjMeaDhd4Ar5BERHKWCvMLQAzottqnThCetTVMASU1czw1MovnCacLAk85Wwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzeW2pXm2EL5DDv482Y7pxA5Tq5ETfJL4G8f9cYVWbMrXd9VbUuZi5guuFfe1gXuWUFph2Yj4uZMQKXeyhyj6rK",
  "key1": "3J4kyxxzeruRpRBB6kHko2TmeXDmRYwSQ93yCq1KRSNEYvfjrTCVENF9hVRCXVPBZmXCLi7auX96uCQbT6xG4odR",
  "key2": "wYFcWbDfGVoavZhDULzt8u6AiV8eSynv5KmcFCKuCND5Z8hzrqjYDyBMMzRFXJViwLLrfxV8iiRCtcRQQA1TyFv",
  "key3": "5nR3qtcDyvZ3WrSizPq15To8Y4Az4fiZTLViGZU6RqTb6MWbk4isxgELhBeMFte9vG6aTSrkqCdzTKHDyKC9qdDV",
  "key4": "3cdQXw3An2iF6J2BvK7iREJAcNiGruKUpMvypW3M3Z9oHBVYLAJwdhFsLn1Lh2iV2YLLVqGM9rC8ci5NbQsR5WcA",
  "key5": "T6GBHVJXxPSbnLs9eUtbKnYdWiSxoWDxr3XLEFe5QxTjcxBSNh5eJGiUP4oaREosECJGsMQUhrYPsuq4jxtPrDe",
  "key6": "4jHe6TjtzqffvjBH89Wg1DFLW2AuA2Ej5fjt49sCtTNptRNBbya1aJtmMrtsEHDAsjazi11hhDnUGB9KBJD5TxyS",
  "key7": "Goe2Y2UcXPx65RPY7mtQHDYXtDvnudZE98SP1YFC5XvobyFRmf5KqNycmwpPixh3ckHTzHNMMBANjwG5BN2c3gX",
  "key8": "33rVQnBUKwjbFsdDs93QU9mkoUDrABxQpKNgDoamBAy9SmChKobMYhWEA4reJo7FiprhfaVR2SRzLueGbpoxbb7E",
  "key9": "23Qe3BEWQu3rWdaEWNxxJatTMpkaw8Uy2hNhp2btkTZYVdfF78PSUHYpUvBgkPeb7EPnWcRe2AvFXgehi1W5ruFx",
  "key10": "5MUQD7ng8nn36jZFSHpsrFX24FyjoAD3a4fZMyRUbwEcqBy9GDqBFDi71G6jnmMbymSJV1Vg7uGFp1xR4haLTM4B",
  "key11": "5QNXsozw6orq6dnAwWNtiDddfKVXZEghTTbwtM1zK5B73L6tCELK8TeyQALhghtug5kn59FHv4VhfmVFd1SMcdR7",
  "key12": "94fbR6zsrBBVLQK3YSDfuqZXLkEFdv3M9PHEN29VvtJXpQuXeZw7U1U5EKjYfEcdx7R4vViNdWYcTGJuaqRkoef",
  "key13": "4ssTUbnpft4ts3mDFg97LFMjPZgzXzWw8n889E21tzwmYMxW3XwNYirvbu5ZrYR4Xxdw2vxtHGcBXNFkc5p66NNk",
  "key14": "37SoaRmAQmcXFW4QyYchwL8kLez9aCYJtAcbuhEAVQSov16xKbhr4D5U9V67H1NidahdK7TfmtdZYuzTnurjdJWs",
  "key15": "2YnLNhf13uHWxpVqj4cG45xuq4RVi7ty1n4HumnVVdxaJY5V6hGPrqJY2tSDJG5cnwcKi3G8m54fGxY5WsjMVNTi",
  "key16": "2iKy7gFVHR61zpJT163Vxmi7XzUutFZQfWD9JTa94P94w33WwQYTARWmSG3cnargqtiT1U5p7cnKFssZSNoWrG8m",
  "key17": "5TdarMG8FPWZxPZFAeG21qzAnKD7NCJ17rF68NgqzfTHCaCkJMVQsUUaoacuoAvHCQsjPkhGLTGsGCVQU64gvqui",
  "key18": "riai44yg4fWyeM7FaZ6uWE43geGMpQe5qUtqTDrjssqdmpiRURShwT7WrchswGHgUCAJAb5WoMcX25YqjNtNjLj",
  "key19": "63YjbW7kRtJ5daaC855mAqqyKKfPzy4113ugAkwCgtTB7SkiGJWq5v6dn62DEo8Y4aQk4Q7aSnrBv87BVnoDgtuV",
  "key20": "363gm4KzegWPTfsfwB1SsmQ3Qbpsdg37vXXqpUeCUH1DTN49nnvtepe3GVBSvztQEpF9GCXqURPmWCDvef5Lhyh6",
  "key21": "NDiFadYtSs3WCQcnqbvJKLCkF28kLvU17WNKMG22ZNVT6MTifakYq5vADVfrdXru2n9bKEL4ua5WeCiAiZGFKvj",
  "key22": "2HuXUoSXreye8WrxdBaaLEQMsNcPhd2K9Y3kcCj8MeYxQdxkKzrNNcDWjnJsMLu8V1qCAR956DiSKxx4fqcMHyXH",
  "key23": "3e6QMbcoXKQWmh2L2DxuWNfZdhSq9qB18EcTmTBXdxiAqcHsGmnCscSTBUgwk5UpnoURpMNCADCwsPB4Ak5Daboj",
  "key24": "2CBYGEKoht5Q4JXniNdNTimZ8fYoubMcdrUdEvgzd5wZJiPiDZe6D6aamXSu77G38ox4NVqTjp151mF5g8hWPheL"
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
