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
    "2SyCmH7WxrtF3pTrNVAUseFh6g2YbL9P4FTDXVFQLtQriYrtYAYmrvKwdRnLYESLaC9yVTf76q6iKQp2YnbtP9bR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SazuxA85zcKRnZ1p9sHPZSXCiv5gibv93CmXs4LRTSNwvxGg28xynPbeSKx7wy1TFQJSV8mtyhPQXh6DBifHPCG",
  "key1": "2V8SnYUGKzt7mtxfserGzGi9NHsdJR1LSDh6C8APLKPmN1ecjsqtJSuYfLXEBdxQYWH8GhNq91L1SSWKTf1BN6J6",
  "key2": "5ECxcif2tGtDp26K8tLbxmvWd56eEGgCK6udgrXkncAyicy4Qqyfg9SdhohdHDMY4W98KHRcHxXjQ2RqkMmGJrcz",
  "key3": "5e2J5jscJ1sao5aVZsCU4MpuMQArPDW2eAbiBKUgVN68XLiNuuCzGWyUkhJXj8FkJK41idcH81v7Xv8FixehtJo",
  "key4": "5EvaVS64fKdGTLuScPhGxni6VWfJRTW1cpMLNNZbd7Aggj6yxvC52Vyw22gCuJcuAzwk3bJep41xQotJw6vUNd9Z",
  "key5": "582zkowq5wvjsPKW37G15fd86ysgdUMMMKQuMkrft2b79vxMgF852EoW6uWbQY7p93468xbFTKTHa481rQ4ub3Zp",
  "key6": "22rhhbYmvAMaY9q5rvx46WxdReaR6bbi14FHEs6fSKqhoRe66RZTZdQkXGg72FAD9UFQ4k9KrwaJPJZAwp3s55Sj",
  "key7": "xUAW6Yqz9MumsjoyBcHuvqE3aKspaZME2AmRtUo3SNQvd9aYGT3ExgojNbEcwtSTrndZJuEimyxvvZwBsWhnf5w",
  "key8": "47UPDzBRZ6NqU8mxudKGATKQ3Eacqm7b3WWDGzgMMz6nnoS2sQQvfKss9PoLSLbskt5FLoaReF8kDvuemCh9LNdT",
  "key9": "4csNqLciTHtGHbAxYSpJ78daPfGj2Mc7SLP9Bpzi8PKq5P23HcRMcLWF3rHEqevZRN7CxQKzmdm3W8cnYUjJVco7",
  "key10": "S3d2zoQUovGXrVqGdboGULBzELPDqu991Ejf2R9a6fba5FjszeSqXFHhhFy5s3k5A85CV7nB29eACFozhxJQfSV",
  "key11": "2AVUEFE2qDQf8egN8wHX3V4kPsa74ritUGnFFDAad6cogUmnpPnkGyBP64qVgBGUgxQHbBp6bctCcvHvcPz9mKKh",
  "key12": "45Cx7cNpWEVVkzTBPETYRDxNNsZ4kCVaJMW3KZbiUiKaDCDKJCiD7RDgYt5dt4YVPV4Qm2sDQkr2DhpcLruyQqUj",
  "key13": "4y8R6Q8itgmCsUvabdhbFVG7m1NEUdBUCZeapyRcWF8d5vugR6EcW7J5NbyqobVbEhkExY1uGVaUZZk7kRSehqDD",
  "key14": "1yv6zZeV4ZZudFoVYRKx4WhsbLYAzbM43i89iMADpyE93KcNQnE3bzuvtqGmhan8zX84NCAjtrgAVADa2vhHeoK",
  "key15": "5hyfZqdVszb2cjJWF46VmhXTBbM1Y5ky6oFburqajpKNJk4Hx4PsRcuExm3L15RzAtjeT6XCAae339Hrx9N5gWNg",
  "key16": "4whX9HNB9oXp36uGVVFAz2CFHq28bMwTEy6knvnc4i7miZ2MmAP16Ui5RzqfWormEAvoXUvYhnS6r1haBzFXdFKe",
  "key17": "oMfRpc6MhuguBCrWiXjMUPr2im2LogRnm7SVfQVNcSnYmHEGQV6sK9Fw2jXtJ5AtqnsbHzt7aTNkCyG6AqFUNhm",
  "key18": "58B1APGYVgs9L8HunXV4uZPpGhMm8tg2cUNkTcGXAyzpZaKYsCfCVkwVqPaFEECutY9fjnmEJdBM1Aa3x7ehxFeB",
  "key19": "AMmnMUMqEx4LuZdQ9UdQst5TTG2XnSnaws4Q9yoTunBVmDGu7gJ7a17AJiFQ6AcGABnX5VWSMkNPYc24dRw5yyK",
  "key20": "KipcYnHt1mhFQ4ZJztLXxvaHhzxUQa5WmAjfrt4PiG4UwR85EuCWyKbky9cbhAPhg84bwJF1xSYvFSQBEv7jhLw",
  "key21": "XKadAJvVH8zr3ydE8NYcH5zYUv578cxDTiBnrLvSybPyDw6Mn2XhdgAK1R7dhWrtWA3qFDkwhTYmpUvzjPnFxbH",
  "key22": "3apSxuVih5tEgRis1Lz7h9g4q7jJ6NJ4tj1HFgFTjzfpEc1P5z1yiidM2SNLSBSKbrjLDzczQmYJtc8xPCGNz6Tv",
  "key23": "5on66anNqXnGLUYjbMmW6VUwDJSnYjKk8Agd1654qqJBXv8FCR4cRBHWpPUdqiALv8EodmzJtwLGLo91DbzCZqrk",
  "key24": "4JpeKe6rhxXAU4chsCvJcLwgZszb3hrVeHwetnpaejwdAc1EYZBYd58TKnz7JTvo4GA6xCiNLbN4gr6h8mhy9wdA",
  "key25": "3nuNxwZGAfd8KmQXy4yfCCm4GQaPzoyDsWuJQp6G3fNkeAi2S6Yp2Y2M1RzhtKSo4DpnFgi4v3cgDFnAfw1WKMJF",
  "key26": "2C8wHzw6QS1EK5dFNHavXa3wQerVPDxPkMUjTGZNYoHyUz1P2zKvHd9Rxi29TQgjJnsGmac7ccURKzRZXtKAsEf1",
  "key27": "47fkXd7eswibAwgtT4MNBiatwityC1cEnn6tiT3tuVSRzKAc2zUwknxwGVaajkdqwJ5nhgdnZCXsSEmxS8DvvD1j",
  "key28": "58bBttweT8WkxJvtrHMSnhjvhR83SpSG5oy3bJ5XocdaHQfHitbFvSxwLSRHAYf84xNgGeorKRx4xVzHKsJUtcFz",
  "key29": "kP3Gy7KuF7kDfvtdhTRBVygdFUdHqVikZ3G4xJpwctMbbLQWUJQ9B1HzgfbYaGrZXm5qtCtn5hNg4qc3gAvkakM",
  "key30": "5FppiyqWUpDLdKLebcHmTLVyPGwYbHRPApnihF2EhYBY3oiNhV1DDFbd5WvEu4L17Mh8nszN5aP1HS7rgvo5KKCV",
  "key31": "2ZGHQhxz4BFDATeG4QNSFBu4AYh9JDDEVFvdcxjrjdFhzUv5uzkTjq2mnZhFQRWGFYt4yKM9SuNLJyg2u2NVfUi8",
  "key32": "2192h76CHYbpW5cFHMR78oFb2d4D28qjfTXhYxiHrh9RDis9U42oPVP7DusbiFQZZ38Etv2UzmpzZj1dJg6DUBU5",
  "key33": "5Z1yefQqwAS5EqhDf1SytXwhcavzc9pUfmgMoxFFMeJR2Mv2PUt1xVyfUfFJjcDR8WDcjpekzACZ5VdVa1eGcVVw",
  "key34": "5wRy1hGifTNExxoeffqVnGVMJs11vNJBZyYBh6HD6oXnPL822oNCx2yjptvVk4z3asYvNCWav7NGNK9eA7sANhjj",
  "key35": "2j1k24YJJEVK2Qga2w9GJL8NmghTcmqJJRnP7tsPmToMi87VXzkBqUbDwaQhvE7xub4YGeKoMmyDR5dyJX4v16p6",
  "key36": "4CpTMYT3jjiDSXY4zuArAgj4PRwz8vMbTFUXzgr7sPZ5bgpZQyRLKn9JQLWGx21NungGxyjKAJ6MEgytQ55vnL5U",
  "key37": "25nygN7V6LeqSASM3DNuWkdh1nq3zkRLCgssu5seZwfbcrNimBFjMDLeWSNjcAsbT2nkbdmeqhzNb551Ns5WbbSV",
  "key38": "2SxYC7rNUAtHQXTo5vuesRpKKQjnEMT7dTfxyWXuMCMrDg9GFMk5U6T2RF3GhDzTT3pnvcQbWyBRVzuqhzJTvN4F",
  "key39": "UfPKJGkAEv16umUHgPKsmmLzhE89VZAyLCXGxHYLuzZXjuHj419fHUbnnj4qE7j2bQJMfmb1QuFkT2XcbrN8a9X",
  "key40": "4sSkuwiJFCHkEem4SsYqYVkK6pkq2FxXpPbnos1JqXffLJmdjxoZupWJM6bcXbdjxfa2iuw5zapWZ6rHrpTWhxc7",
  "key41": "5tRP9nHY2tixEYDjEiGGPtmeX4kCQaviRbRjWFo7LAhfEtkfn2Cbjox3fwKhgDPXP7WcRWcRx5uxvzAcP4nAVgqx",
  "key42": "2kKSiMT2KFVTGATfmEq5TT6LLTduu6JpGRTwyqq4wr6tXVWp97QXSuKNN4GabzVuHTBpKwXSHxLL79gGG8E1EtxG",
  "key43": "3oNbA2Lq4aih3j3SHnwYwwPJVKqQnqyQieQpagct7z6fCDgAfvd5JmsuCKjEw8nXX9XPyVPCdU43db6hhLtUwkvn",
  "key44": "3YreXHaj6iTs74sPxxuTFuu5pzQsNScc6DZeL7BTLpaVVc18sL5TDbHgfs1eY45jiJAm4htfPXcSXDroNbodqBAP",
  "key45": "5JBymqr2qmMNdTj5b6vEWWtf85xLZsLen5XszHDZ5SmacSk3wsPR2qSvxiVGNqtVKKn14wXj6j7PqfGXfuTPoja1",
  "key46": "34DUErSV72FVZhmxMTwhNqHPdiTQTfv8gPozpd95dDk4sYuzaYsPeZD2aXRFTb7EGNn5CYU4Da5ndryZXj64zBWf",
  "key47": "4oJh5W7VkjDCqQiuRS4hMAh7HjQCjxMKFJjXuocGVwNzggV3NSBh6VXUmncc8U2VtbKDDAafRT4FjWnLkjCTMBfh",
  "key48": "qv17CmZ18ahyDQhdBv5s8zV6s7CV9UJ2tWcwT9Mn9ZZsXvg5hxwnmzGFs2iHij4GWtZivCf2VnhpnFJTfpBFrcr"
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
