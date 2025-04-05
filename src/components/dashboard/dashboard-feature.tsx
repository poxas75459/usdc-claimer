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
    "4kq8AznQDEyNv9wy1Hb4MhyCkaEJUT99pDUyC7MkwZf6i73QzmcbaimGUz5FdkGfzaZeKZ6sWYBjMXEdDMfFgmET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ntfBVi6pJQvG3cQsaviJzXFx7wnrLh35CawmLuxmn2QZp2sUpbm3aPhaJkX9H5j4msbXb3pMuW5GZR9qU7PL4k",
  "key1": "ofHy96Fb1N5jk5vncmuxbLa9P4a46pVg9CYS3Xtu7f3rhgwDAGzHX964kJoyeFzZ18j6QSAnx4FBSUNsnuu1on6",
  "key2": "3UPpdeocMQ3BqerarYXGoLLX3iYfmh1S7GV6Ah7NgJ8mwmiJAkvzF7awJVRtSypThCHS7AABHfMVe8fKXbSvfYJk",
  "key3": "3cbjsuKzk5DK68JQhE3WiEbTFvebMLGBGZcrtbCrT9rLx3mAq2VGkhwpQyUDKXb1opxGenT7bEecAFxrEFDCJGAN",
  "key4": "2xd4NJ5CSWPd4rzGXeQkmymh3aY5FnkxPkDtDriyXMHNBHgsUvDyim4bqaMfg9oGJKzCvjz77gSGZ46runDragYa",
  "key5": "hAgmz5RjienvAEBZqeyZeqmnp4s4wtsA9kj6kJXcdKkJz9ujFGMFKDUTpfsXfEMohHgsymDmmoD1VCKdyRodJdX",
  "key6": "2W8Z9u1jGWrimpxaUMm68AZEbr45rQRx1eE2nbJNFwPYMMW5BhtMoh8Hbo78xWqVnU5JGm1forrTDVsYQFP7C8XY",
  "key7": "4w2XvMababhZ4sahmUPHdGPo1pb8m7eUapL2ECANs1ettC1xuVvHcMRByGAy7ENhbcUtSyVQN7zH22hALdYSgYZz",
  "key8": "3a9DuNQvEvJN11HAWNucZp3UijjGAfUpHACA1NRBDq5pKeHdxMG6DMYBZXeEUyaFGz119dDm3PTC9R26Tic3y4Qe",
  "key9": "62hrEQjKeap57kJMNYrW59YLdYQ4a6mMURqpdGQU9ptuyuKWRJ29j9oteN3723fQ97p44JFLaCojPP93QaY4NJss",
  "key10": "DbcCLdKepA6AS2R7sxjfzMLZMKpWBpVXLhc2QZ8XmrGcTvAJfRZDsLgyPNwcGbpnSFVUnRKuFTPZ4R8CP1MuYRF",
  "key11": "24AZdyBbZ4HoXWCAmxEP8k5LhMZBdxRyF5LUr8fCZknZxJyqZVXHi9Mizbey2W9JMMFGYN87SvzWriWWvmVH8QrG",
  "key12": "5Gp57esUiBZG1oMm8PReqKPRK3dx9DZdD5uPvzLHFHnRhu8R3Gv3Nm9WMnPCR3km3UXQVefwF7ek3xBwmpF2XBDP",
  "key13": "2a47J66z4A9ms3MYP4f9sSGjjk3dvQohBYNG5rWVX1NVwh9ntZUyp4NGgrxriiWWanuDfPL9CmuCCtGKhuee5Dfh",
  "key14": "ki2gFtJDufN6TiL1umME5b6DXDUcz5dMecvegd843HnAFBEuYtPd1fZSdV5N5aoJZFmvGXi7f6vV9VvvDGovz7F",
  "key15": "2ZiFL7eAKQNkxxu2SfUbk4oEMeXkDC1EbPFYe1B1hkaQpTcNceeUdT6fUz8GAhXxSAczR5z9jU6nBdqGNe3vp2zX",
  "key16": "4pM5dU9qKdu4JWuRGqWqSSvPvRhD1bFP2qZ1TfVRFknoHPn3AZKAZmVQ2rTxoLHteCip11Tn6Z8WB3vXCKU4s1dY",
  "key17": "4pcsQnANBBE8agSG4WMzM8Gnd5ufZvmbMC7zFhmwQYoE56iWwxnZA4UyMnr86GdakG2yoa7ND218ru5i4AzaHTju",
  "key18": "5PHB3Q6Z5FBrkQitdTzEtvA2npSWMNuHrEqXe5w4GCq112ng8KfkLkreBoHtdNgt3wcoJzuTBmyFaainSwtzWrdA",
  "key19": "2XbtRW7MtACnvgPi2FjzysbMdGVEJ3tnSWvqzcNyEKZ85FSEaptouGHMYmDcf11WkdUuqKvMfWNhfuDcFb6EXx5t",
  "key20": "2vywKvgq4ysD1uAgFAnpshoa4nbLvaiQrtUoRuu6L111e19o1ZWCGqL2hewpzCt8p5HyLPcSkthMEkHX2TQZJwrV",
  "key21": "2pYwyzw5PxYWoHgnPWqLQ7gGtWV6a8JrbfQSk5CLwwcXYCCmp3ea7ctWXk5WCgbDdF7tXtdLnWnJSh4pxxai4gHy",
  "key22": "4fvddsaFRQmuzqQoJ6o5PEMrXnsYiAuiqXHecv6dyLiEpFUi9YBDW92WcbjgXGRQv44z2rcsm8Q386boGjGVL71R",
  "key23": "aMhhp3Csb4jJkXH2GACV19H9sbDNFaN6uPfQgKgZJdJjeAEk9V2sNX25KpnZMwt2AyyFEvGh5KGSkUfdvzkkS1a",
  "key24": "5RmNEEYuyxTn2Ak15C7XpY57pjobPR32CRyVc9vQUQjeZessiHTxdHZRSsosHn3UpAH8AazukCgiMAUmmWqP5nuF",
  "key25": "5cSDEBYBVtGf6Sm9uP7vxsUHszHoBhmCBMRb7HPAxjSwER4BF33xrqW3gYuj5BakrU8Tq6CuYrEmhoK8afosm4JW",
  "key26": "HypYANQEh5RiPyNvUju839KsqE4tDeBXQ3LDgi4JXMu2HpbhvQgCu8TKwNWVN8srQ92G3CUvT4bkcjfccE7qntJ",
  "key27": "5nMqAQDQRHrURV9RneqWYxm7dTXMEbJsq3RYzSd6jcbdpM9o2qos5RueGhju3siYDDCGZ74i6Z3d5mXzy9f92scp",
  "key28": "49PENwG7jaMXWNBqx9zB84GewB2iEaoPZweYHpnjeJNQ8Gh1BBHeCk4HBPhgfevYS6FiSTjq4YKoQhy2AwWgfktP",
  "key29": "qUMw6Pey14UnsjSxCeSTPYE4LSHGQ1ihpKvRrW3etdpBw4u9qgpvEKfkrtPav66ymaVaSWBASr4qKmHjprn7wbN",
  "key30": "4iyhUU2TLQtrhS6gipopGoAn3Yq8Z8BEAFqwktB1jb1NNqwRDEXW6aKfyaXHMoNuZwgh6CCk7aqmfNBqhtCXrjp1",
  "key31": "5QVRU32DoZmegAHP4ZzCjgeEAoHZPNBVZP7YDZcxGL3r8rtimVf92C1SGjfKhW1MUAB6bVce9DJ6Uzxx2FKcgyV3",
  "key32": "HqETW8i82b9P5TaGkKWY5ukqzzXbsgPkEcYAGTwYQy3W38j4dPDePgEQyatstujvnK7VHfiA6cAHfKyLdLGbngL",
  "key33": "5WE6drUVaSCh3oxwUHs3EbsCJsB5hw8Cia5cZVBbyTks95BjVjzzW6rCmJaUCvoZ5oxVVUqh9k2a6QBatX19hxf7",
  "key34": "2PstPSWAve3wvnoRXJ75AsimdyrYJFsjFTrLn7MgKWgTgBzSAxTaCXkJpoKcNdWE7p3DoQKZ8sbkRBpCotrQdrUj",
  "key35": "L4UXMgykCFaAbBWtQfxqUFqfNsep45pghW4aiPo3WjV5YftmACFca66Ys9Jcu5MSa8Fx4BxrXq7WyQ9WpbpQifh",
  "key36": "3voKSFUtDgKpa281SKdfWGaAWWeSiVKqzqtz2ukBjCj2aAtJfnybs5dLVWH3UVyFFSYX5dH8cZXqne29KF2t2x3y",
  "key37": "4Zt8i6CzgE12JzRaCZj5VCVLn9WHUwscvdR9PXqn3tDKdNZF9HRChzjj6EpGouK5mBbYGbDPSE92t3zfe2sZbcNr",
  "key38": "HqeWxSHhohfeEaxmkMzRdyB3ZeCAJiMGHDTpiVqF8zT6zsSS635WRvyihXECZLuXaYYVCd6xJit86qZPmp73Re1"
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
