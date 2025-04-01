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
    "3v8ju3ip2brWFoSvN77uYz44tde9NDXsJoi85JqqFqEwhup8yikAxcyn9Jn1CXfZ5nRbCwqtW3YALq2HGbVKtceu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQpLiFHYvhvLJwo9T8aqRra3S9ka12GTBbrDjoPuZxYRzM3wVr6TpMQ59APU9DLw8xbR6qxCxveYSZiHBGcf45B",
  "key1": "51ukRjDCPQPaeLsqRywetTctQDr9wFt2Ydah1vhMbL2mCiRoqhYPB9r5Ds34BQJvuhLp3zmM1wvGC7XsWnGKmapr",
  "key2": "3EeAfTKnnYXZTvRCfupyTcJU4hCVCaV1Pbsuwu7PoHTisHv4C6FVCoRyEZpXwAri16k3uerCG7Kbr73KKSQWrhRw",
  "key3": "5tyoHfhoV5gTHwVtmV9WEh1nMQPb6uLFG4ZtSNGaf8cE3DRsuZ24j5Svq6hGsbx3ZCRrvNJUFUpQW4kE7aBYPP5B",
  "key4": "PR3z6nNcAEP1udqmytoCHnqSY8wGixAA4SFGhZURJSJGkVaAMHVisQTc7fuqHTC2bG6teE4pEmjXiZ5Pa9sAqfc",
  "key5": "4MLpwisEwDcKuQr5uCs3k78RAnywG5SVdntL3yq68QxyJ8NGtX5SyQdHmiB2K6Sgeb2Ytayz73htZZ9ikXEQYzb1",
  "key6": "2rdd86Xd38bkEkG7To25PkbQTj7maoCfW2Js87MMdbx1uQKPwniLHB8LgLymJpu1adAY6yKxbgkMzzQNMfnJpeH4",
  "key7": "5ivFmG8x6ecZVY4tsoinzJKdRcBv9MyYUDsSCYyq7LxgdPopvWKBUnh5pkfTbeR4JE5LoyB7jJrFoiLTt1ZGQQL1",
  "key8": "4YSDL8asoZENG6o9WNgFLjWbTPcVKnVoeQvNFs9yGbNUctYbUGC8FvY9kmBBTNgPZHdLBWCY8tYF8T1RJiN6UMVb",
  "key9": "4Qn9VDxwiNjKfNCaoPa7mbe8b9csPjB7TQ1foVEVaMh9XBEeeXfRyMMRUKAc57vXbjgDi5P8uTC4xfkuVps7TSdg",
  "key10": "5oq7NdBNwybHVtaphFC8k6KFK5wBLfenHxPtm1KYZNbdF8pgm4bLjNaV81T5Sy5gtfphvtniyozBom1fV3aJe9xU",
  "key11": "HfbcpL9Ym3ZCc84sSX1iCDXpCihLcMtJiryPKBppUcDQavSUee1UfJ4uFUZDwxMkdYCLdnqYqfBMfG8KSq6f5fn",
  "key12": "zuxEABfRoTy45yXw2fLT2XdiA11VffRxjCyVrtYTyWdtCQj4migKE9c5ZeA1c2fy1uQFcLa9FUqWegBn1xjRcSX",
  "key13": "5RA7YKhn9itwike87z3gL9UDx1KwVJdeiBdHXxrtNPgcizyQCfCMPyebJzSDF8ZqQcFwjZNxXndjKhHwqWax7hw1",
  "key14": "5qXSuo9BbTM9XhkBk3d7A7BeerydTxVRyq8LcNDaKUYsvjGArfQqnhMH9Tu8pWuexiTDC39M7TNSRjoN5nYzMfhE",
  "key15": "4RaDT2baZfPwHKdbktmzCi3LaGrdMiojU7ksAmmzzWfVyECU9thmjE5tS7w6FSdP3FogrhwwG1WBQ6qCGekRwXrm",
  "key16": "zfM8guuakVG9oYKfCvESZQb1rmWpZQfbPSGnjLGJYdUBo191Vo7ymSQKvMpk8q3nuxwjzaNwShs1bsoRthAteQ1",
  "key17": "2kYDS9gbuRhbzBi5R4inpsuprz4sjfg2LNvjkhBhoPF6rnTTxDwwjA92NM6p8tjMUmSPvfhekms7CTPERwBSebgn",
  "key18": "2ijjvBkuLodSiJBDvG6WbgJkm6vcrGQwyT5Hzsfom1hJJhNEfTLqZKgDE6czHdQyBo9jFHgc1vTj6BGvUJwD1tpC",
  "key19": "3bng62VdMsSSgsYjBcSQvJhooY4gjFCKLsrW8BozkswTGXNwoP9saLuuseNCc9fc3XWws4JMYMhxJhrtL8s2avNq",
  "key20": "44PS1W2nN46HpVjSV9Xk4gJnhXGQSw2eeZMig4E2B81oPPxg3BrRZ32EouSGoRXXQkam65kbirBSeARZTx5sWJDu",
  "key21": "5G5PgEVAjKenWG5WBX1hXY8oGhL24DrTDJ5hKBbqWQs2RkwYGcntw6sByrF1pAwd5kxeYczayWH8MsSv2BwpQgky",
  "key22": "4sv2ah27VF27dV7CmMsjybxJd2fSgvTLuBWQbjVLtFBCQ5nuVX1FhCwL34wZkGLutyfC7pg8Vmd8xtuzQ5t1KLVo",
  "key23": "aV37mWPXQHa9qjFT11sNWm8eqHRe799eqKMuzBoVCdn2LwowsespGbZx4JxyEmEowFuLofLYqj9fmvdJie1cfog",
  "key24": "2zHxFmwLAsZxY9xFapUugd7hcF2WvoyaZG3bkmqdi7tCzQACkiALZmiAEphRVABLAtSuVmvmqJMdANeSTcMFSCCE",
  "key25": "N2scCCD5bLj1GjmUvNErShvVYeY8oBSunCHTGzmLiDQv1JUELVR7jsgZpeYkySZVR2zAX8Q9tg7N6YdZ92jfTYc",
  "key26": "3iQj1bLFnVzxhUpX4ReiPBAMUmunwZamg82S2xuR568DEkH1rS3wTBHoQRnBU48coqyG2x5DmvuKmuzvUPw56wba",
  "key27": "2vvyBmhvun2eErtoZ3QVEEckHEYivqJgk7fBBsSQVfiMTT2qmWR7J9SXJh8DQPrARH99mV1hyksPwSvUYQTop2PT",
  "key28": "4xKhnTZ3EU6aKALSzEkkVMxk5DtPJdFdcPnkp4gPwAKnGAUnzrGPkCLCcGAigg8sXBCEt41zZLfyJkn6Wbarh5g2",
  "key29": "5i3hntsDpW1ZZ51XytpqLYskoQ94CZEABgo1JfQAj5RZLjjPzdH7XMxGCRm6YnGF4ZM82CZ16hTA5rLMcJ2mw7zW",
  "key30": "4XerTByBjJq86xD3atSHwVVWXpxcaLaw4ggm1DDkStLDtyZXi5SaCwkwqdm669RjPH11wVHKpdJpfwgXT28G2ews",
  "key31": "C4uz6gP3YjgyucqK8oZJtEHbVuhFoChJDw7AqDS2k3VZpwMpLpxtX968wXoz64SmKrMdWWZQyxHxSGMEzssjjMe",
  "key32": "juGXffNHsPMDSazWACJtbeFWFibTzb6h39zTNDzbvEphN95uXQnBGW1Pc9UhTE39sQLLTWfkgYeAFPr835PfSA7",
  "key33": "3Wk4Re852ADMJGxDFo2VowxhsiFr4MJ1W4aUXP8CzCemPvJyKjqaDJn5kwRRDazjgrpBfG7Zp3TzvEujWhvUpcd3",
  "key34": "3eVNCYpNfsdJTCQj1QMmmfSi93CTG1cXi9bZYjigUEbQF41XvdhtuXq4zwbne9swZzyAViddWKfPRr3DFi4cQ2A2",
  "key35": "3rgX9m7tobnLY6FRPBBG9wA9UZv1sFmTSYLKvoHuiy1u2pWmPYPNvnCKhKbh6wS4HHrJJD8etNwdk5AoJsty6Quj",
  "key36": "2VF7Uzp6faxFZhdNw7Qy1LnvVznEyP3jVkT9BKJvcr4WzeZ5nSLwxh5o3gFV8QE6buzFvmHEDWdqTNTtKN7p9ALV",
  "key37": "3vC6vhA3iSwaSSvKqVdkP94zYmaNTTRaongXchaoaG416ubzxhTUqDSQ74VokvXtTCGezYzzFFWz8cDHbuF6pxyc",
  "key38": "66Jn4wyqmackNjPGNG473m9hm8hxgy4Vu4zB2i1b5LYMi3TszprFrtUswofju43wPN5dV8YFXNX7xpxWopHxrBds"
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
