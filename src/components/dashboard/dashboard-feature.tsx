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
    "5quaJZHTCXJxpdcTtYY2qv3V9tYkiDt744TGwwxAEuK9FE8eLVVi57zoJcNXtRzF5cTo6LH2RibPkWAeHcJheP6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VzXDeWcn6Hsq7Mrc1HcsuF2raU6ZYeQpnchTHr7S8VQzfwkq3WLUvF25VZSonawb7hBvg7JpsQesywYhsom7y61",
  "key1": "4s152pmMkSu8oYrVGjRmKTm7CLxfCrD9Fft1D83qemxfNEkEgG1XTYKgmkboQHh42cXgYAFtV12hxssP1az39683",
  "key2": "5UiFG42rVFEakxF9gJTA1HxnVAXcae3DwLP41c7BJ6WxM8bsj2QsfFiYugqQhFZVcPK7ufopTDj6xuUdL2td1nZN",
  "key3": "4uAkL5XkABoKcbPjwFx2RJg4DNapaDETGKqFZioUiLH8ErCA8jaVtruTo4WsxWocYL4v4UG5eqyy2ux11Q4UZSb7",
  "key4": "2ntU2bXPuFszoTzC16jFJwYtUavTygpd6D62FsAkZhqyBdjwTMcYQXb395DNRsqPvtZB1Wtcz772qUaCCc56mBxx",
  "key5": "4V5iKMocgQRRLbzYPqvmpQ1F8cqiP9Rc2yCu9UG5RAsBVEaL73s8PuLVtLdaLv5Xw1g8TP1VXMDpzaV2LjCNcyWV",
  "key6": "2qhvnu9z6hz2cBLmmjt9VLBvteb2CUYxH7q57fhq4bEQzM8hJz4u1gykULADhMVe2xKG4LZEYyFFh3EP9CEnusiG",
  "key7": "61yY3uoo6xuAwEud4FHixKc9bqd6LFCi1QMqjkHpyNhmb26nyyHAsNLpJZh64EjVFEksMBJYySSViyr7tQiZEmVE",
  "key8": "54LZM7eigQbjgGAG64bFHBrbPNtfhBLB6JZfFknQsBmZS2pPgCQ2Hwso2PypxJY2aBWPdP1Pi8s1oANrF2HJMK4n",
  "key9": "ghfPgEupnHJwjtFyfszrQKwyS42omzPDqf6942FrQDwEfurUS34js3wpWot9FVCrnMsgygNsQQgaXzUhmtBMzEE",
  "key10": "25ghaMe6GT6kHq1V94FiMo6QcEYE6EpfHuSPzdX8kjkyKEThnpB32DuDYnTgNHrHECXFxbj13ZKXAKWX6zVTqDC3",
  "key11": "3YHePuvepCoLYAvTF9XCAHTidxUVoGRmSvFzxEPU13riD13D7U671wijUnaCdAsRKGnmJQqbrob6wwMytnvQT9aM",
  "key12": "4YDuUGjCqBEqZBDnePVvaagEo4tjbUzyvpgbpDjpGUmJPpwgbCmRoSdhRsn3rhYkfysmnUAG7AHbqSuXVVfgkBiV",
  "key13": "2krKkEG6LKyrwLaVxMMhre41p5Vh1hUDRMdSbAVM65fXY87VzANB3L4jiFw8cyYZUTQeuPMfjF8BzCXcia6yFvCP",
  "key14": "4QEbvzdUCpWzuK4yN65NxTMYqrCN85YxHimzwwQHxNE2HXK6SYZPpvhHr8LzS2ru1HsqvZGmKYC7ybQg4mjPoQvD",
  "key15": "QJ4Cobar87q4gJwFT8h8ysFJziNxKZC7hMJbo2JUKfnHx1aP4XyvLQJakLLPmwnPEWLCwd2y1jPAofZCVst7sjG",
  "key16": "3prwJ9XvwZqUP8yX1mQSkYbnNxeoZ3E9uqQMr3RgLPZomVgrbn9AJaw7VKVCyKPifeExDEts9FdCKm9cQQrKa6sU",
  "key17": "3BpdT9ykYC5cAhSqDw3oSwqntujY3zS3EedueU2mngDK8U34Rn4Toh2wiwfUyAWTUy6A7dFDuGFeZSV9u7pStZvx",
  "key18": "5DmsePiJLKRbSV6MwA9PXh8erT5iTRjNPCN9EyGoQjupBMuH7dicX9Aan61fGhFTeM1ErNnHcbi2arAMPthVoSif",
  "key19": "5cJ3mqn9mjjWqQSrV5kVTLBbw8xG2dB2phn4eNjCtMh7kwKHFFFXojCygy1R9wAsxAv6XqrUHbhffvmtNng1i6Vk",
  "key20": "5R1Q5BvVVz997HBsd1K9hQKfPcxjdrKqA3sqiCV34ab4PsbaAcByXxKtBm7yKhcMwXAr2EzqMFKvaenkpvqyN49a",
  "key21": "58De6GWWWKQWHi9Qv5U9D4oPCyZZz1k931meUbATrbRcRiKeDusmBxSamoDfj9XP8isy31wwhH6yZPG5uF24ginW",
  "key22": "2K8i8txHES6Df6yw6JFGbZJ23GYdszfuTYvfSLYTsrwGGaAQ7k3uHV7b8MHM1Vork1iMPGeHRzYfLf5hSUgAJNpa",
  "key23": "2EbP8DHCZKHk9speoJpmjG9xDQLYSUDxwX398pCnobLUpQMsPvM6cjn9kautzCXtRTy3uFfwJrHnRknxtQp3mthw",
  "key24": "5MHZtnjzoGYr5weQcbb7nhsiYmedgWAxFPiMiK5uBZXohr8vddFU31unLrKbojZ9TWD8xpfrv2Ww9LiRLEsZjiAo",
  "key25": "4TM3ify91S5GMgruBvspBFXx2HRpeVKTnEc5JKEornYc4Nf1h4TVKqYtb5q8inGeSymKr64edikyBEVcEKG5sYu8",
  "key26": "5bA2zWHgStuqNRY8o3E67cxuBm9Skc1pZS5kPKpN81AHKqwUn1NjbhQ5ipqdnLpzoprT5YaDdrdkpG9bkY5192eb",
  "key27": "4MASrzwkuwJHhHuWiaz4Pq9bNoMEfLXX8giR7K45HPprKiHkQajmLUWHe3VrypoNcu526sZGCBKJQSMZ8gi2czT1",
  "key28": "5McxVFFSjS4TaMySoPzcT2kv9cnpe56WhBz7ZkWrfgWwwtWaTmmMS9mUxk5WJVTfF38ZK9eUcDY8xH2UNFk32Dss",
  "key29": "4TcV7MSVbfzBuZL4A8shRXBFBkG7TysWz1q9uT7EBzsGqkkpC5X2YQscemAGaCq9ZZCzwHhXDmud2ghNq9drTWP8",
  "key30": "5njqFFhpVduW5wqcctKf68P7JcFPkdWnfj3PK63uvDDp2vufCiXKy9LYHPVVYJXyxEUnWzCEGsZK8K6FJgtGkeQy",
  "key31": "RJteSEiGzg136jdaJGEHvXGxfKQjwivCZdutssMsLsCedoMotqKnjgSFFGQuECowVnQwtikBBMBkQdo1Ei14Q9L",
  "key32": "42xBGLFS2urZkNyMkdTibw3pHuqJFhRxSJv1GArS1UyUzPTT3yQy51WLvcmR2dFBRJScSkVFFREh47nKtcPMD9S1",
  "key33": "5wTsA53Ww65x7FnEPcEuBdGEKNGu8tgc2HSr9fo5hds3VuogytvV112L3oWUVywbRWoYd4sCzaECt5B8CAaAarpn",
  "key34": "25mk7i8ckuLpjyJLgFGtnxuFFtXtZ95Maj1Bgmp27na57wGodSB7E5p2ko53NsVLPerWjp3SCMhbf7zdKeQbNrXB",
  "key35": "5cTY4PeChMLs9go4fa3NsePYNJBcsNJ7DsxHovyf6DmcjnwQZXr5z6GvrMDB3N697BRdSsyX9Ku9irXoPd17fL2R",
  "key36": "2n8AxUMBy4bkBSCAwidaD4Vg1JTZv7971kzBNiCe9wFtuvkeTPrvmya5Dd1EDAb6KKpLwwCQ7KATVjGQrMpXtUXy",
  "key37": "5vqbwUi9xPuL1GcvhAiEt2FS9zc1zEAyxZaXk9LFYzA1kxFiiue1VKP5baEVCQySe4GDtL9uyMAujhuwKhnMSazk",
  "key38": "2r3zJk7PqkTqQdcvZJj16hQWAM7rLX1iftbGAxELLn9a3iapGXdEGAiP5uyTLs1K2BTfyQAM4LAfXV6R8D77agR9",
  "key39": "baTqateuCRgVpQCWQHZx5MD9fJrzwe4Bs9GQtuAyWtXnkhWjtUPhhZrcWBRUnVPr7in5NyF2R4bqmPH2mTmtn2r",
  "key40": "QG6H2sWQ82yhPkgjbkp1NTC5FNAGjxdR32oh7PuLCV244p2CRzE4J9saP8XVbCBjqzXdgK32eU9FjHbHbvuDQgh",
  "key41": "2D8cfFYFVirwuDHL5EiRGi49QeB1mSgBxLuBLPe6HUBviEDtiavXs2XAVSdDzFVq7tGir9ivn91mium9UujGTT8T",
  "key42": "5jHN5eBwwkskLxQDEPuSQ2ffhMq4ZutaBLXyPijZvnKSEKrZfcM7euBXokqVA87mjdSsgiBqXCwodpcV5dpDSaza"
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
