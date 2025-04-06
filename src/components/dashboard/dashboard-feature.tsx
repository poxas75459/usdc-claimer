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
    "2qA4Q2Auf3DudKp8B128C8nTeFbeuSd3yVNE7RQ2gM3Rp7egZ9vNeg3KKatAdFkumBAPcTkMRjzRsKtnUE8dfqCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3PhJu976SHJFMuZT7dc3Cfiqy85A8Hg2N3kxDFvsga8zw98J4Tvv1o3b7tiNqRtYbKxgWySZk25D8iWuMMrizH",
  "key1": "ezgPtykxTCuKu74gPevNY4LyKetkU6k7gRmpCFLQqchEJjgyseNd4CtQSFptSuhgaXydJewqs7Tt3PymAtez8Mm",
  "key2": "48Hk13PKg5dRi7aHzgkUnCQtPJ14RgRm5xt3pjp5FyigPTJMTLJGWBEdZy2hKikJT93HYpa5hSwtBE7LY2AYXHWN",
  "key3": "5JxhncSkyJJCUZywxvyzxKP99RWcDThKoNYBmpgk43Fo9zBreTq5Z3ki4oF3DySBYD2AT45ZMJFQSqmYL9dbTxiU",
  "key4": "2bXwYLPMybGkUJq9U9hrVgcSr53bY86s9hFdazU2snVP4xuE4jmn5C8EasSUAnjgX8jbq4z4MaKWPJcU7roTQkqU",
  "key5": "3UtHC273UY4JStujMqefuWTBC3VRuRUPRcrWojim4JdgdEs6aLNE98aniprdLD3wiitewrZWdk94AkZ2f88ztUZ9",
  "key6": "5RiUddn1gA515evZikmkQH9vWTRpuPsysYLSsLVRrrR6EsEWXCm4UVNFyirYKxx91xkJCUZ3s6WtZGvSnLP5KKGt",
  "key7": "5wWf9cwCdii13FG6aPhTyR6SgE9CBWG2cT8Dxx7KeR6KFuwrJApUk8Ps4hKrFXZcNx25fKfsmEmcVWvWhxTA85fp",
  "key8": "43WXRXbhiRtrB2KsJrPbieituhGnw6GUucZcxxN1AQ3EYPWZ2E92tJPKUmZWtDb8hKqyz4Mxs3U8PRYmNXvJLRcp",
  "key9": "TDwGgnLpX8GnroxEXuqXBnZF8EhQ5ujiBLU18AkoXP3ZLr6Bc5SMiqEnJEQr7a3ApYTC3UAuDw5NZ3YWrouMac4",
  "key10": "3LBoDXUTvCLP3MkYAgeVz5hYvhGBrrHaDPwsgT88naWQQNBqgmCEq9mMcPrVnLaShzCoUPQNGFNWPMorK9egZf2X",
  "key11": "5TRrbGA9PWtNYgu5tqm3bwsYAFBpX1oi2KpjMrapbBtWsVtjqfXaa8kcfdAVvP1v9NSmtsdYno1MEJgRAQQtN2sM",
  "key12": "3BbnabzG7bEYjDr8YKV9b1iefuanEaH1618tVohaWJC9KgN6zqRavcYHCC9C3X6tJUcwv14uD15eeRaVJcEv7woM",
  "key13": "5cZasG8GrABczcWGiXH6RLmqLTnKRkCxYmDET5BGVqFD4B1cx95kxPnyBVGFZhTpVmtKoETSFF7umkbp7vL4zzKT",
  "key14": "4xzBhfz3aWvzwqL3UvdgF2udBSHHcHUJ3DszLUmqWzVE1EsBWa3xaT2xtvvsBuu46Gt2xUe9MdTgQCkTtMwgoXbR",
  "key15": "2b3eksK1KnvzzT2zg7DBW1YFmCMkQQjTYLeyuGwmBkf6ohnwz6ALzAGpHuJxEy1rBFA1Q23k4FLWEbrcSHjM2XaU",
  "key16": "HbFGCM64v7iZoZABwnBa8MoFvVXWiZ9jD3nVCHWEWp7b3QwYsvMyPKLY9WWGeSyU4hhXDsKCEBKKVDWrYSnpS48",
  "key17": "5JiZk783PRTJD5zXHgVX6TTrMZa37PCbfHfFKRMoatepq3vmsns9X2KLzzygtZTt8aMtU19P747esak35XLCFkwf",
  "key18": "21cQdP6is5qZiwgoj4KBv78zM4HFgMMvTxKkNZhTG2LaZSoSP8tpbjiyxgN6KreF9XcDnAWutRbUe2VBmuq24JEx",
  "key19": "eKyiPNbQvaoBmwZqpQncKECuD6HSfDCpb7QkxUMEcbGyXwaiPiNehg7sgtQoQtwH99c3GfCGsjfYgajTSnqite5",
  "key20": "67AW1d6926N3dCJjp5LWgyQut8BE5Y2Ffu8bW9XzquoZc1fbQrG4w2Rh1XidVKbZfrBbJ9A9uBGqDabs1ezRSiRr",
  "key21": "4riv3izAAgGon8kxzc7by5RVFtktA5Zr3TNqn7o4zptGJziedsDAWS5LqjXWpno5U6cE6u4Jepkiwk3Uqq13GLij",
  "key22": "3ZDX52SJ9NHLjaUFkfYtx1XkAmUhAkVQjeAKz7UaQfx48KRdSLxWVBauhMZPd5kJbzBtXif2RaBf6CpLn5qtvduG",
  "key23": "2zDrpVLwVfGiuw5aYPdkDUdEgT4WbcNDe3AUBDzyKViHyH6RypGP4Q5ZPtEuVbH6eXHU8o9xuLirKHZhZptgvxkT",
  "key24": "miKy3qHMZJA337Yzh8PhcZVMqhEW9Btr7LLBgthbRZtXi82gWHUAPp5eKdnqCrkGAGwas4aML2kmac6JEZsSYXD",
  "key25": "4vjvzyXSYwc5tUEP4Hm5ugULUYEteLrMnrnTveeRmJEvWaes3tHai4JCQKvQna8h5F7M99FQVW8PNA1LiBqCL9qh",
  "key26": "4kdrQtRF2L2Qy1rCNQrBiCdWx2Nid75TDP5hd5Wp5qaBSaAkUiMJgM1PrKrQCwQLuJXtMXN2KLwK1eAB1bwcUr2x",
  "key27": "d8cWAYgHmnFSN9a5AMTBteFaBgJdk4ZznyiQ69rTxkAyWmtJDU5LritDCxbyQkT1Mv8bZ8u4J5Rc4MtNY7bS8Ph",
  "key28": "4xh5ydaBzy4adz9E6TfPSU8C1ZDvc55M8uUuZ8CGEZyuiD2PwJNCKo5G8GAry8q5MWvXuUCrQfjM2gp1m8PCDeau",
  "key29": "2t7DAJVdDi8vg8z8xnPvABKdbqXaFtUQHaWpha8JGWuH4mAMY2kvZp8R9jHxDDz6rJL6QYq1sXjziFgitjdbpYMa",
  "key30": "px1nFnj6ApRfDsEuAdStUEp9TsEuERszpgaf5Y9eDGwLCCqcdY4UszoeztS8eJw9PfL4V7WbGyvAmTc5TcVMHoP",
  "key31": "65JCsuLA3jYs6mmLir4qBqZr7iB5eav1x5WmTaY7BBXxuJcffk7zDvvvjvvayUuwGNTcBqZ79ZXheJGJkFx8xxf7",
  "key32": "4Ta6h4jj2zzmc78yLx3SSxYEHmCnpZEBNhiV5gz4qxjqYAwQrgw9e98rqVmBV3NbR9qv9Y9fEVPm6VVo34nFAiDT",
  "key33": "3akq58y4pCVxmWJHKAaHhNmJFv1uGkPATKsP8Zv9fJTha4CTC47FfwFjuTqH94LwrASZVLiRzpzPi6LYndtXsX5t",
  "key34": "5fgjnZnRif9nmPTZyKUu5yJG1RV3eP16CE13zP2XRLUBQ6krgYVmT557hBHc9ki9gipS8aE2H6xBGyUogxuBcnP5",
  "key35": "2qZyMpTXAgun9LBGQXGoUQeaCQT6ooM9VbQ71M6W7rrBBjeT7fKZ5dP3ELZgLkikDFxmhEeXKsiFG9smR1achPQR",
  "key36": "5AHTEvcudM8ziTbWXupWjTDPmGknWgpDvHUvFEGEbifXdJi81MWDxvrAjcqrox66qXnbYHtjGutKZyFEJZmxWJjm",
  "key37": "2cYodGg32KYwybbEyDoiVMsw6T9SVVQiWUCWHJnU3bDeRnFYKyQvULp38n6FN7uW8DVjn9AsSa2M19o4J27TpDG3",
  "key38": "LdUKAj22VTDascpjZhJRwYnwLGDa635xYaT8tUC6TcoReBZqkyB5P4iKcirpGJNpdJqG6gyGrx4JiWxm9HWFsE5",
  "key39": "56mSpkpngDX4dnWw5JkY8KevEdJ7wim1o6vHWhSA7S1LT54w3UBNqDqA8Vw3VTjGFaaRY5uH1ZyGL9GqZhga8Khx",
  "key40": "58U95MMmTb4MfHdHUEx7eBoXNPtbDRXkbKVkpkNhkQZKKYWJye7u7zWsV84Pixi5MFCt7tWLrNyhMLdCdhGvUn1J",
  "key41": "KN11LBs6VB3KfTAo16iGDoceiXf8H6SYnAshLXJg2Upn1m3mSF7zYkEK7kpyLY9CqvhtqWfmYZ6YdASRPwTf4Yg",
  "key42": "5HFQhrhE6otBJjVjQ9rHQX1ahY8gqpuZuk256wtVE5i4MTG2daQ1ovHMnbwNroboFET29PtjBRVm4JWxM97tgUpQ"
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
