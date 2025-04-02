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
    "8vVdw3JUGJwCkK3q4VGK5yoP887zywBToJHCQabrszWQzY6ZG6FE7QHbZfSWRLmZYz28J1eL32k4aoAiSGejSv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhGxCotD8oXkxxKFN62JFiq7MfkAE4DrZTrJdDvoNN4aVGroL8ofyeVp2nn9u3djWyMw1xjmX1acSJs29wpGcnJ",
  "key1": "4GJGtbgn7R6AG5f7DpGK74uieGTtB23jRcRLmQBpVyXPWEmEF84UUGnp5x65aA8Ez1uJRPki8fZJSBsCfgLFDK1P",
  "key2": "2KW3u9EYj3HgrhKWPQoNr5a48JSTuf8VQbm7TGrbb1hBNx5KxzwQLKnQrbqniRgXFoheJXEdPiJRcgE5gRv3ytvo",
  "key3": "4f44TVwWj2jYtTEsHzWnhBW6cg8AggTNAm4RigLpHh2LchPGDYFZkXpvETe7AoCdmwMGobVQ2byNN3w8VjfYqHUY",
  "key4": "rZWxLBykxcnL4KH1heuRYxNSyCbZHcYLJrwjtohCwxjTxGsd39PntNJqyYdxyMTby1tNJcEo39X4JtcjyQtxDcx",
  "key5": "yt6d5k1bVWRhEnf2B2XimrdjFm6oKHbxo7KazJzXkRWqJkUWwfKh4QtXrnNjiSoay3wtmyts8MWEbwnStMhKuz7",
  "key6": "4yRMbGvKjjzyX9jQ6NfUi5HPLZNh4JvJ29bKioybthP4WbbpjG1tnDFtekWBwCDBi72Eu7J8PSoK8xnSS1MYs7Vr",
  "key7": "5se9RRTcBLScuaZcyG7vEx8bMsy9LE8UbBXxbakvwdGVDnk9Wfcnr8RA8Y5q5jhApCS8HPPnCtiyfx4eSmRS1TNC",
  "key8": "4A25dYzyhSXLvqW82fy62aiXAxdent9EXDMS63iVJJq8z6snWtkXfhtuwmDXx7hzTasYCKLoGeQ8HZ7eaY4F4Hfd",
  "key9": "5WFnSDyWzzPDzTPpJEXekMQDxkPf8zfibW9srubF9u1U94b3h8phnrGTjiTC4EtAQAuh5zbyyAp6BGkrErVzdtyx",
  "key10": "WQa7mdsxGw8GYnJeAmvpcAktUwN3Mhic58CUPn1CdPu27fzmJF9R4rQJLWCQBLH2H2pr3DhvEbzkntBcym8n12S",
  "key11": "552xYabEf4N7CfZdpgH29aNDT5qwAeXSh2BbHn4Uzwg23wWxSFQNozBHGgkNxPBY73WLmaPzxY6rVi7uA9rWZhA",
  "key12": "31zFNURfJypycvJ9skyEBxtocrDKYth9FZaNyxTKpBZd7tV4L7MP7sN5wfjBDFYy6aYhPvDtxtvrg7WKJUdkG4pB",
  "key13": "33XB4tkuNGM1bNh4RT467XKsgeW23vsp9VpJpREPwJWnAfhATDzzANhwZREYwgaSkN9c5ZkFSdvNA3AoYLUC4UYG",
  "key14": "3xNTpUP66AHuvBvSetBBaxcKDp3ahsHxYQC4wYRCSDM3tPZdE1cHv5nUCRewPcjgKTCV8GtvyyhJ5TAb1AP8Na7v",
  "key15": "4M9trCPPKQHSd2EyKxRZuxq6Pe3SzZizx21w2GHa34K8MEWMRGKyGpZ5dYPrbPRZ3xCrGTJUbkmSoRRuoo2iKfxh",
  "key16": "62TieiUWp4qmjch3vjDxvhirhswHmJqdSXMTnzByhGJo1KfeyJn6u9WEDyJanDaNA5MHAKgyQ7j43p8gxa7NUSTd",
  "key17": "3JwS8iVvDH7eUvBRBAFfPnuKHTJThCGsA6A3H3NkS7gzuK4zk3u1PHCY9eLFAHJ57a5Mbx8HicASRK6ePR9oBVQW",
  "key18": "5cJWBfQLmssAWDY6NSXcVYGWphn6ag36N9dhkkAB1bSVDHmvWoidSKqsFg18osyPcwevYru3Dd8nHY26QUQCNk2Q",
  "key19": "ipvkKQdYWMzuJ8GwcWMaWTbbPxiBuButDiWPRpKXTTYddNpvn1XN99WhDUKETyzFQKwuqaa8t31xVoi8UXALeSq",
  "key20": "5BxrQEtF7axZxHqt6SrwyGpuRLCG7AfEi9CY9PE8eFeyxqeuzMvBm5MBenMkj76SkqRdMmEVcepMaDSVq2qkBhMh",
  "key21": "36fYwkBVyc76pFWNNWietaaXveVu451R21zD9MgmsRaBXpwSKfACCzaDshCUzSPWPKtZaEee2epK2PxWVKgBUSzw",
  "key22": "5oubWCsTbG4NZQ2HvnubjTbRxCADAyqVki9yCraK46sE8ooMPd4YsNnMouWVwTcg8NKfaWCdVZtm6K9syk1xm8SZ",
  "key23": "3yTbhcbnoJssVWHufLivFzGCYLNj2jq6fuUme2HGyrv5GzLUEsp3exNV7Edof3Lqc8RHJkJ6wWx1ZQQPb47urJrq",
  "key24": "5mBna9rTpQPfraL1NuLs3WBpKVgAnAahLktetBw1yWsb3VZHosnR8qqeASaLPSkaevHySDV99NBMMaxFRzJyChaL",
  "key25": "5LJLePbRhwqKdnbqHfpoUfyL2CJfj7YMdHPt4Bn4Fe4RycxS86nnnz61Q3pKdt7YRwJQPeQyAp33RckZcFVYu4Lt",
  "key26": "3D5tN64ni4G68sLb5hrrN7QvRjd2hJxj29tqdNwhSZRzaC6iucu9BMTju6ky3hTvteBGE9tT9ATKBSfBBxdrYTtA",
  "key27": "26NgFPUg55C6UvPWhXWNwp1u5Ar3P3fhpZwFXqYkDwRfSWfAYUYCj9byQMNPrY1Ybhk68G3tnYK7qZktnf47HR7C",
  "key28": "3rTfiGFPPwbW1JW3UYvymuk9qKgqfwUKsxbg7XPdv3D6i9m55sQ8pHhZVio2XS9K1539UJ7pQLoNQLscqgD7MqAV",
  "key29": "3fPWVY8MWZGc4oR4L6u66JBTLh3mJyMZVi7WtSJPf3TRMC2i5xZQtrqTP4XB9FZbNV7cHfkEPxtGf5kmoVcpjtru",
  "key30": "3pAJuR6xFv1NHVPrJtMHaBob5o7WXqAZjipx6z42Zx58mPyiiPtHe3T2ZdzwLbMbPjwGJSv5eJ2oHG7Gah32RBhu",
  "key31": "2D7Xu6WXPaw89z9PULDBAvH5Tniwi6GG7PiwAKTkuFy1913nfMkEhnhJhCnmpyuwDMAcXmqbwX13jfAvUQZ4ZtBJ",
  "key32": "b9Y5V95fnTJ6e8ozqNzkXu8Vno5mgFXXCSupzatgLRLjsHPMMhQKWW9Yujo69wkTcDhDGkLNcZRfG9neLKn35m2",
  "key33": "76WVKTkW4EZuaLFQXtgiXyQohP3X71yjUEGjNXBNhvEbmWx5U9bqAhSaCVUpN5cZikf4sz1sTNrYgABPqqVDMf1",
  "key34": "5EDs1VbqnywSm8C6gWFdaYYEW4u7iHMtztA6AMZACjDRgnRxLDUSERGve3dRmn3mF5wVPPryfMpHG8RdCm4jDnti",
  "key35": "5UkR5VEYgLPEirMwseSPeqxSX9rfrPbXdopbVxBHqE2Kd7G9Eta2XtzsivZ5qzdCsLHqbfGVo9HD9GoNurBKK555",
  "key36": "5V69EQxq9CqPfUiCufxqxVoNAYVk8NBGhg1zgV3ZdaYhqL1VvYtJSaEka7bmLWen7FXS5WP5cF2fjvcNetnAd2n7",
  "key37": "bfrGRTxXxKUYpJeBqCkmDV5L1cwYqD5wxKoSZYnLozJ8A2sZiZegRwyeZcT4pN6YZcTYUPeQBmKRZSctQ8FmDe8",
  "key38": "5vHB1etWtFSxfjMGGZ6pbuZjnAxa7fo3buR7NkMGurpqSw1fBx4nG4VccbDKL2PP8NKgP27HqZbLXkxjK6aExHMQ",
  "key39": "3jfDAqbHazinZz2GSw2o3BMe4CMioAhBDJzPCCbgEND8NJ6VprhpiQDu2cQr2LUyYfnLoMvtMrATMyFjrcfqKNnA",
  "key40": "4cSUBuSDKwCCXFnE914dPzcVcjjM7Mh4SUihdbyLgQjLis7nK76vVh7bWhoHjmhrgDYQWrp4ESQhHsLdjrgcBaQn",
  "key41": "4761FjEt385bhv7DGEnhFeLFaNN2xNLytaQQtQr4RG8MaphZEpqXb4WBzU3A1MwkPstQYhc5wysuTiWfpPT7sUJT",
  "key42": "41gEqMk56KQGhFepKRrRaqAwKSZ3H6Fj1RawLBgF1nVKgwtf6zYbyLjqimgCjCx4dMZipjXw6YVF3a3dhULxsDR9",
  "key43": "4cAbvwyMWQ4ekW5B8JMpUrnW53YKvQL4nXY3vTHjsPf16tCdeQjbPWrFYaA3UhA716nqwUuRkqjgqPgsq7LMAdam",
  "key44": "55BSZCNp2dNRpUAD9Ge8B7C35zNnDzworF6w8qaLNcwAx5zTKDLWXxyQ3ioKx8pgGxV1xQpu2HFA1HD41Gx4UBCj",
  "key45": "3cnAVmye1vnLu9y9PxF3RSsSNUy11G4egeya316iYWaACQh4gQv7arfThUqn24dAfvpkagfskLAKj766RmBiqU3",
  "key46": "5keEzQPwBwk9mMAsRA2CUBbt1ChUHNrEM7R1D46q6Yc5bUSTNe7n8euPuXWCgMofhXXig8NK9YqGTs2e9ZeZrenL",
  "key47": "65FUdvXcRy5g1jqa9NwQ4HSgLMQsLmckKTNizZQxk3CgzcTL2iD3Jder3JT5pznj6D9RTrukFAmsM7LFtzqXB33e",
  "key48": "3h8cwMXzmGLx92PuQmMWSgDFaBkSU79d66CGAdqjK72PaFSgpwspCshwJDNhwfKVpccQwmZ7jPftrUjweVmcqDAm",
  "key49": "4Fv1wLrGyRoEyxXuBSmpQipNTdjNqmZQwiFXRgcnxYSQWzchFLNQg8p9Pc3xZ1ziqRJkDRzxqyE5Pgf6fprKLdEi"
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
