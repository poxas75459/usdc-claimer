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
    "2Ss9u1XgmWUbg8fyNusKFauSpjre8YJSBbhYqTucMcwPfjUeLKAb9qSTnw6W1vWJw1dtrpZyHrrMkEtLn9vQYpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4hrQR7SvvAKhmwJen4L7fTUpbQRY27DLsfFNwdiv1Zyfzq8S6FeAGQ22BcVp6sSypZS3e7gEVxxRZMeKFgxdRR",
  "key1": "YdqDqKEpHNw91NsS68H4BndBbBFXfEchXJZpBEcVYKounc5FFFCACBQ3Ns1emjkgkwY4pmD92iwnbshrhhjc3Sf",
  "key2": "Mnjcg6s8X5eVaHXgZhMjaa6jKSGMdVCy6PDXkUwVQduMHcA3cVXRvvyG49EHHWGFXvyNpvYGbfMT96sLdrnVXSJ",
  "key3": "2c4LXjUwUMKt3FhgRPoym6WM4MYP8MNSfXvTPqHtgx4arHxFt9Qfuia8rRZZp5YD7rCBiXxoRwoY6KZ6MybtbpJ8",
  "key4": "5SUMixYhhgsAJeokwyMFVS7CmBFKEcg31TgurY2HhuuCerze7ihYTgNn4vG6vBEVELCsUw6pnESDGSSiTvV9yssr",
  "key5": "4jFYeT94JZqVH7WhvsY37BJUK4PM2EK4kzaMoJnxL4SFpNtWZpuE3TjEiX1D1eyFdkY66Cp35ZTifuEqcqBdMm4s",
  "key6": "5kfKvje5V1z5HVQHyegHAjbTXYcnNfnELvVwmJn7VKiLtfiYGnipfAHHSURNw7Kjo9DUs848cRfbmwaoa6dxbuPY",
  "key7": "5URne6goXQUs8k4asKhqADYqbDm3bzcdosPD6CrcBCJgAymjMovs8TDDSRYG1691UvnKGcva7kciBPrSXj5tb8mx",
  "key8": "5Lc5ddYckzKsUkkovyxFMk874q19iznGLa8kppJLKq2krcsjriH2YxDfj2iWPteq3tq6DFavMVRjbixXU1fb3MUx",
  "key9": "nXM9S76v6ZFDa1DgCnwmz4PvdmqAtUovvKZhALMFSN4mtrYCa8ebaLvgitYAPhAWjcco7ApKR6xuPQg84Aw4hwb",
  "key10": "3FTF5Su34sKRK7BecuPoaoY2DwquyiUxmEcSfkYPniyYTE4ckxpAPZUkNFPUL8noTkFXayXfuHVX8qthi3gNuw6Q",
  "key11": "3svxLqXHzdz8ANi7mEzGJUyCRrfCzZe22zDGh7j9Wyhs9ErGQNTA7JUSSvwne6FfjUdXDm4uABx5cXWzhzFqhvMA",
  "key12": "se6D9dN1V5hCJqoEytW2KFaXkFhDTY5DBauKuo12bWEMxbmHWLQ8ovLbaJLRwSKGK9bytLugrWDriroRivqLmKd",
  "key13": "3L689JhLK6Znye1cQvN2wPnYLdfXaQE7nuovt2pMw693VJDZbgyw39nAKYGmYgLMCweuyGu1pgpxe47m3w8zLBoV",
  "key14": "57fPtbBm5uUQvyhY24DaF3t7QAKLJ4pbqZrRmsN43af7W4HrkKq3YEXUaoLdzcXi8QZZPjTQdg6BujA4P1oky5Db",
  "key15": "5jkLzAfyaaKbz7CnJcVFUQzgMrK1gHzogh6medyf5GAsVd8MNxy6R5Sa2EKhijhR1n3eoBuFiuKv4oXmxJbXwPRG",
  "key16": "2ubpLbtn6djpAiCdNJkZ4Dze8veDyfJQYgF5vdA93GpJ7Hq3mCjKQWZNxENMqQiTkwApDLtmokkuxiDYPsNm4fWu",
  "key17": "64kUzZ5aMTaEosA39vgux6uSEtoD47VExq4ASTokNkScZs1pQzmp4cV64pJ5za6k5yCFW68Shytv2BVxKYERv6dX",
  "key18": "3M7iPKiYFNYBya93CKWiBKL5sg4Ng5wHXTW4g6KBsqMzStiTJAwxsnxL5w2xUZhE3f2sBaurf7cU72NqUP9WqCRW",
  "key19": "NF19F4t3ruzAknhy8fJnbfgZkVPzJ1aq28qARkyf81Qv8phpNWyAjc7qeDnfwRug9hwSsGgpv7e4wmvhKCmcfn9",
  "key20": "5Y7D7u99HZbzibFCQYu1EpvJhEiVQZj4zCzVD95pfJgcxAPJXkyKJc9LBACEmYAq1RtWbRkGjUhNarQ8nLJfB2dy",
  "key21": "3NCRisPr5qirFL9MojXvCHKXBsQZ6cXMhwrd7coGeu97pndhUW2bYKayfBr8gcqJpa8uKfUXe4MzNgHQJ6pUUHMn",
  "key22": "3DqrBDSy4woW5hezsTCzLbL3FKNrkeZL2ysYtWR93ytageZkra5ziraWwF1F2YhwUtHkPwYM4HbjUzhep6r2pHXF",
  "key23": "54Xr13GRdBjcXEFPjEdxnCBGF3RJernmBwFgyLgqhVwe4WDqZDrDg5vepapvZ1F5KdCfG9gZjxsfNefX9GueeMmt",
  "key24": "4vqMgSRYe4kcepqo4GNPiZFCBr7Ckz2MhSC51hUdVwGgUKsYNGLStbtgagiKdfQWcU5xgqrRCsn7cjVDE3dE38pv",
  "key25": "3ePN4WBC95n1sLa7SLSpD5eCRRwUjKnvTi24u7dTCUWdTPvDjGcrYgHfbkoXtw3e5LJ1jFAZXwB2EybgDsAzXMZX",
  "key26": "3iaszjMR1WXMyin7esGfjPTu7C1hJR3fGNXepHeeyFn4Dh8XQBiwSsR1B9TYHeSJAsfahTVMbe6CMvxtdy6xtBUT",
  "key27": "2dowDYVSw4ieCwnxVF6gTF3Jf3WNoZo9ifc4ZTAUTVywS5eEsUgq88wP7ciWUHEXWQdhR9Mw6ZBKn2z1ZUFhWao",
  "key28": "4VYjoPcDyH6oGdzDJL5HsbvwCrjibFiRSJGKQzJ5sRUrNZMunCX8DEPCQVn1ubL2hNDNLHaK3r8ti39tiQaBJCiR",
  "key29": "5VEWNP1oLJEms2pTrpgUaSam65ohBwzwSjNEEDFwpF1s1mG4yWteJ2iy5nPVTBQydGQXFJ6B9neYQh3wrLY3hExx",
  "key30": "5LGMthqtp2zkxYETL6JAdkzHm3cye4pF5qPF2C85cEcvJ86XMKfowLZGGA4pvNDtLhiRXXLYBTaqVuis1TbHWtbG",
  "key31": "3Xay546sPEx8vYCkQbVGrFovByDPmCCc6MfW51bspcvqxPGcw4uuinCkugiXGxeRDtJMcFE7x6Asu4Q1bqaQFwSS",
  "key32": "x2GgBCFKwtpJatq9n2xPeMwPpi6S5hyiac3EVcQjTdhd8jCMYqqPvMAviLAJTiiwDjnYSXG6bMQNsPjaVjJVgg1",
  "key33": "E6XfuhBLGwK2st7gVD1nPQ7r4wamAa2fmPdfkFn85EsbiVhFdDb5ieAGELBjSUBkix3M5JtVNUBMVTxekyaNYrJ",
  "key34": "5xbpt8GvJWVAhZjJ5uJfZtUTjXjUwnicuZ8ack6Xb34zuxG7HT36b2DLezMpf6gHSwJWJojK7FH3rmF8m7Fz3dmy",
  "key35": "59jpKa8dSzYevhhvofctv6rTPXjn5N3tXZKuJ8aFwUWFoB8j9CJBRCh7k7TGDXS7XgHFeZoJAkdYWY1VQuL6Hj2u",
  "key36": "n5piSwfjaCapF9A7a2v7fyE4duZCp2mqL9FFcsAMr9mNCNsfzbWMpxLtEtzhC3rQb5LaReG2PMNSfQoxCJPPkDA",
  "key37": "56k2MLFM675ArgQuHH7tF4rbWgYyECa4XqqecuX4uNQeyfdkUcB4cFoSYxKzxhzegLBgUH8rGX95UZx3ALtYom64",
  "key38": "4VJErCEFgbXTpXwUp8nTy9nU52rbj92SFn2ZEFkSXepSUc1br7RF3ttFLA1TmD6JEy35hN94CJkvzyCECU6QXapV",
  "key39": "4MUiw7UFFVts8hjfhQLwXMbcnrTb6cb3kPjbspGLTme6fBEABAdWzEAy8oXFBacjRmecddimtZrjwcyhMsXssAPd",
  "key40": "4g2qnD67cXsV1ab81KUHnqTybSP5ZduzzyKswbWJBUj2p926vS1mcX5PDasQBEXzMRKvKKcqmQciwtJPPiEDjgsN",
  "key41": "q8oYj2XrD7X4sVZnvkTwsdz4TA1uVUBSVrzwetnb71S9BenB2HfnQfKt7JfxifTyeG6QNaVt1Km9nYQwmbWop8o",
  "key42": "4w9uxBFcR77R9hm4Ci7FVuSTDJZuefgZkU4uGV2EfvhCUmt1QdoWFr1frSs3dvgPPn6Y4Btmo4h8FcNGR7pnZqsa"
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
