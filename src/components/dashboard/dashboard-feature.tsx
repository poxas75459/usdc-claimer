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
    "5rwjhSQJbNjw51fg2HxQYwsa2CKsuDvXfkaQGYXAc9dUquAWNnCFKJg6aJSdZTUQGEHPCwtGrhPrHVCgf2E2kKuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqkfbEKCsEtU5xmtrHgAtu9LnBU6R86rJf8G6BDStTyHvi8SSstu1bQD5YpsYfJDRnZqgu24Re19fHXjfZC1Ms2",
  "key1": "QUs6t6FSeDT5zK2MgAGniAAwG174YJQtbHKi2VcgqsSH4LMYPCUCMf3Vp4g9FSVqjXVckRgz7CBrAa2GT3bqdTX",
  "key2": "YAZkQZX4S1uMmFvm43w2qHFXyeTo8emaQoVkAgzh7vaaUoy2UygW7Kh173Lp5rcQU2DyCKURBPerYvTnV9dZsaK",
  "key3": "gG5qGZbfUZdBiCEhb63yvzhjTosw35M3h89meLEpHP2y6kArupKKvpyAh5t9UccLsPQe5Rmgsy7MdvzMrWLipZH",
  "key4": "2KMpFGYv9fZ77hdQUxx9JrVKh2i8gfeHxRHCMsgrwuNxXBdLfdwsr5GLYG8Kcdf4wU6APCjvZJJf8zK7KbnmWE4w",
  "key5": "32JwcaSz6WBxrju8cNibQq9UJMb5dXckMrFJFj4SyiKH6ceDsz66gACRGmtrQ3PogQ4v7Gi6pSbCM6WgkLAeDjev",
  "key6": "2BuiwfdwLcdGNNKZf4ufhpJ8dwr77vxVYpuN2hix9pVbbjRmpAmPZi9PuwHBuoESPZPR39e5eLcvuKMFK2gSxqDc",
  "key7": "4DE3YFbNY3L27hoh7KbKNedMdBJUF1CroPr3RjpQNJTUar5ddUhdUADpBpvVS9iwJ87aiUsp9Cy4fz1gJ5cvrRvN",
  "key8": "rEmkY6EfC9bpcHB2iqWaNMGfk1qyjmJjPXHj4vYJ72P5oVVVvQ7ACAjWtqMyydxqdejav8x62nqhna6yg3HCmNY",
  "key9": "5iU1o3LYq7EDnF66AGFj5qtp6WpeNh3ofdbHD58RnmkrdwCFCvpt25GeY1RfRq1JMrC6cWsF3cn76f3NDzjfZmnK",
  "key10": "2kR8Y2vjU45mPWSAu6fudNm33bfaRGx9vyKzpZ97cxkTnQJTpeV5y9jGckay9kZm43tH1y8ATz9KD6kdA4qhfvdZ",
  "key11": "4Ydah4NpBy8drJ5XFFp3XMoNYwt5cKj7Y6V5nP2ncYfoiq3pX3Fa5H6fSS44Hq1MaoRBwLMiTUXMASFqz1GmFrft",
  "key12": "58nHLVPGBUuxTAnjoJBZqkzVkjyCfCygqHcAwXM916o8mCHzNvDxHmhjc84VPbDYyPmUetnydgXSkUJmRAevmqBg",
  "key13": "5Dag6LzbZEe6TYskU38GkzpTE3tRe9okZufbijx1sLkr7yfBgKKU41xV5ALN2kGyZ1suYn6GKxBdnrzwssySsHQJ",
  "key14": "5Xf5j13ZHepQ17hM9vPPphdtGGdmvftoqPL6ujBDQpTZvQTJPDBahSkjqTzi7bk8E5N3e8EEqh4ttZtvA6R3aKdh",
  "key15": "2Jf43Tey5Kzpef4JoQKJ9bXH71mXkTE28R8vvhZVTNJEEjiSdpZHWbXdK46JAqRTp5XxofEqVram8DSjnUd5HoUb",
  "key16": "jgJgX4Cx7KwBaPd2CuhnngPMUwdUjpcDECVqx6mRsNX8c1N5btBV79yP9ZaoHNyeaSBonGyd8yaNqAd7Wun3G6M",
  "key17": "UjcNvHm1q4vRmuvaa7oR1myzXwGS3rSHWCb5u8qUgbm66BTVCiHFnMoe2Zb5VP8jrZZV6vBYzQyNvjRs3hHT76X",
  "key18": "YBhDfaBTU24tpZkheNnGHjbJ21y327TaSqXKVMpXdcGUyjtMfnzf3VY7Jn8HELj8JiZfS7asAWRmz7soonS4MD4",
  "key19": "4KcanVLvmRNUaX9vHFaC58mkf2FMtKpzkBKRvVVgedVu59Xmt9UBFBP92oPqjt8QGhMzoEmCbSUcdK7ri1c7Axvc",
  "key20": "3bdVgVRjysa2DD7ALoinbUhCTvubHQ9sRq24SEVFmaSzmwUv8UShCxBXPy8Hj6CyZJCuoSavqzxCjHYxsFBaLk6V",
  "key21": "kRZBi1AS1LM6mmzPEL4x7okF6reS4yStNkfgKFbhyurb1ncSbQV6QLGrAUL1GHCMuxBjwMJ7VVpwHnySyZN7sY5",
  "key22": "gQ2ok55tLFr8KEUWynuja4vsLtGXyGin7Jmw7XDGs6EKCap8rY18vN1LhLJVk79D3TJXFF5gBQqD2v1yQe9Lz1k",
  "key23": "6oXXD8E9PCnUBNzY73XwT4CuLZg1bSrLQ1k15HgLxUusGGBaSGho8EJqFfyk3VqbX3GX9vYjhJgRg7EkDjxTn9g",
  "key24": "2C3XehWqZaBHakPFeapE4aBScRU3VtoZzqZGQs8Qjf6rE3M1rFFqV7GYSX9vf4rRSps4qpm5Mbdy3aLAbiqWoT5",
  "key25": "2GLXP1Fz1GXqWejjQR4rcqGgDG9AZFZdziAtAsk9HRAL4JSPXyvMYnJMSZ8DrRrsMZLAV4Kxfa6wstAGjYxVjZSk",
  "key26": "4FkFNog39HiJABFNxhPRcyughjH6BNfxWJ81j2CypGFrzMRLm2qwxkWh6fNgPF2S4t47R55fzP9UM76yqvcZZfwP",
  "key27": "3VtXbmkivuP3XBcyJfrBGrSwuNcZMJnShwU3ibK1fgqSnCZK8zS484oSwj3ErRYijGygoqCtWsNiGSYWRMVxLWVM",
  "key28": "4Ai6ihpRQScLpBewu9vnT5Cbnwtms5VfdFKH51xWVDbgUk1hpJYWiNk3iN362kemAD38W8ZNe3KcB9uu5SrW4Rz4",
  "key29": "5HCxatyxWbx4EZR7G7KdLJKrqyG9psK279JbXJ13hfTZS2UcRNZD1X4rrG9syNai1KJvLS9vaHnbiEDrQGsQip1a",
  "key30": "3H9kAnBBRUTNA1Em8x4c3TvqcnVuLUkvucDDfQEK7bSigsr89w275n91CqXBrSXmxCQ9bm2znW9aEYxg8U6DryDR",
  "key31": "YgyqkRQBGSvXtbfPS6cH7qUBbBzMRa55sup5pFSoPFbmZ9dCBaLv2FTxK7x5FX3u2pyADQCZXychKggwp5CZWLe",
  "key32": "3jCNAbZeeiouTXayoBsHtpRb6nk2tg76c1Ygk86MptHJv7Xy5NHjLsUgFHfkhysF9cuCJm6n1asJUG33a3hBjZdz",
  "key33": "3oxmLFHRS8KU8jmWRqztJofsemqYWK6Ejr6i3pzAXZMbYGHDRbwX8THvmXZtpT25qwf6dfWQynihhoFY5hLcMtNq",
  "key34": "5YFG3AGV2EsbnQFh1WKC6q6rSLRGMUjh15RC1n8pL66f5mLNRKDTPiwdUqSkKmnJnGEMuHwfSbtuphfbRkRJwgof",
  "key35": "3BCzJzMJVSqmBK4WqF9Ed4Q4GXJrMm8L4SypUZDuFd8rGboSwmSEW35ZSVRJuyKL9RPYcFfjzJkvZNKvsvjgj6TN"
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
