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
    "3bCshbSwx7HqUm2xybCsCAj4UzDuG6NxuQSWDmzf4i6XEejcktuw2nG5JGzqXNeuaoM2HEfoKC5mDnJ7VuFDWZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fz76f6PiN7V1nvmAhkaR76v6jcYVRCXmb7T7KhRctr9ffD13SY9PBbViW4GzqoToBpQs6gbvbCve5YTRjKCPGaR",
  "key1": "2KtMpUmCHbWHQJ8ikqTX2snAcV4rpUJRQYv9Q5CYMKuC5oHrtTr3cBWjz9TNEqsHd8CRtZZaiyCPWzMb5uLoAq8b",
  "key2": "39hmPiCWq24WtgeheQXhA6ivdvmNRBaPU7aWMYfMyHcjv1QUf9miz5V5LxmMVDwpxvjrCNGTboNQopSL7YAs6pit",
  "key3": "55hQXzJ1hCrsxTfUdMSwMktGFh78knMgg8KjCMYcYPEvn8jkphpDFYTRiXvvLTEuTxQBBwL1yok3oARBWx8JXYHe",
  "key4": "3a5qcH6Pfw7tQEcMpUaSFSKv4kf8xrYcXxELv2d1rCCps5qe1kGLrFHCBgVGs3Q4Jz1KVPXA7Z5ButhSCR46rFqw",
  "key5": "4WHMSVK6w5eSxMNGRRmv7fZDkFLyGVTb6q2tEqJCLaFrwesrYvPUtagEc9jVLq7QMFDm8RkosNmD1xbWnyvuy75x",
  "key6": "56AGhHiq66dEqUQpKYh3RBhyYyBnAWXque92B3v6vBiVpzy7Qfe8DdRe8NnRqsyyydKhrM9gXYXpVM2CSWQfHGsC",
  "key7": "47pQyQe14o2CeCfa1o5s43BugyfBVrkVjFZ8LotbQSM7rzw3eMeBaV5i7RDWfuDL41RvCebeAodKVNpE4rzgX7zk",
  "key8": "vU7kTe38h921DePQ6fS7mCaNYuFU74Ki5VnTB9hHHUARTb5cQ7pRFN1Cng8bFAHcziC6VfA4csJqoEWMQkU7rqX",
  "key9": "ZzekyBjtBeB2pJic5oyDyp51nk1tzzXwopGARYahpFGbUVH7VEULCVvoDdMHL6ahWT272izkAyuFm3dYUsQk4DN",
  "key10": "5s2ecgu5tmwSfVDG1zgdsYk6jBBCHVobTbbZEPRLQit9AXEUzgozoJavNFzGiC1yreJEDSAbFuwNkAQrtscKhqLC",
  "key11": "5H44NMzfBTN8fP1wFMdx2HK1tt8gYyub8zcM3ArTSLgcv2XYYqexZJmSta2r2ctzTrSTjxJvBDMLmzxKrNGNxzL7",
  "key12": "sy1zwVzHL9WJgXgaSjpUffNscHjkus6hfkqWXJDCAhN7ZcoVPKcqQEYxWvTmjJSGFpfXABNK6BYQsRRWPQ7y6A8",
  "key13": "3QrRroT66ku4L3Q4uGViMkd3iPqD3yNdN57ffkphXjmL6ZEBR51yBYHZN5x4TjSyRiSG7qfFQNPMPsN4DdFaVzyg",
  "key14": "2rPFExQRcDncpnrDW7GiWoLUGXTAD4inPmq4D41wx4ai1XriWXx9TGnsCfUiJxLYWH6vhv39ZdMiJytgCcaGL7Ly",
  "key15": "45utAjFEGwEJQ7ELsWsGka4kvrzVJR3TbovqKwP1NjLNHTWFFB1fBqU3sEmLFbbAwiGYA2LduixfDdhSKtiwCkPe",
  "key16": "3nmu46zSscN2LKFFujWg1hUNGHqwmzZgSNBzzQf5so96PfPrrm42tvkUoabuxUUWs2cH6hFsP74orQg58Fqcr1mp",
  "key17": "2QQi6rjMKen9Bec7jnSWMQBkDRZrEHrEWYYVJbpvh3bJHFF7WibrCjxLRZkSidNcMkGNPCnaxuPLYabHPN6WCHTt",
  "key18": "2arh3Y7QjP9Gn9hub6yNHwDrqy5LpJLCQWGsuDt8cb9xCmz4vYFeMMWopDFGb79eQCwfJmYRtCpfgcBfMS8cnQqH",
  "key19": "2xJXhCrxNFRjBXpdviHL6iiY5qhAZX8jzSKcVN2XZqFVwp2wHT3K9gzKeX86kLLjcwGs9rdmAbmGXvLFzjXRFq6Y",
  "key20": "661g5kmRejzpmZQZAXofkeW1hDn4C31eFtnwfzvy386kqbXnEHy3mr43awaSK9o35TZ2B4dc3VaFm4b3YN9hqGYZ",
  "key21": "5goc2p8LVAC8puojiRx4WkSMtGh8LR1CXeXYJAMtb3DoeuseW7Ek5s1djvWH3gdGep3C6CcSKWTarr1ciPStuyKA",
  "key22": "2KuCLMuYdH9HpaDZpXZZXYkkxXkQSMrjoQaZDcfbD9sqqTB5vGaB8pH1qX3B1ENGpch5xiKUbxDTw2CR8oMqCf1N",
  "key23": "5LBzd3zKhe783rFB3h2jmEWDRuSaV4YcdfQPLBSCsd5YTQXrmtvkgjjhtThBSrNxMbvAT51AxXLUPNiZmaxu2ogG",
  "key24": "3UJCU18retjf1jkfmvbcecinJ7AtjkALWvoxfuxkHhJzrXtau774WKJZHjqyEtCu4ZJ46Y1pCZi1ZS4h8PpxQuMy",
  "key25": "5idJGRycT2C4YB2U52Rb9PeSxdbVnMoLcBWkRGfVkQBQVxhNj7SDxtMU26k1KpEAiEetHZXZg8AaFBBsfquc1353",
  "key26": "JQhoAKoNRD4hBBKJebJFMmfJsoaJCoDTsGtbVwNMnLkeAvQXNtDivS2dEXDava4ex3Ljd2VpXEMi5EQxtjx2v27",
  "key27": "583dtfFhRGP8h1U6jSrVwCNjQHkPP1PGCJq8J2hspTRsMx7vagT6ii8xvgLds57NPyXxavkjwCE4ZRTdRKkjNsbZ",
  "key28": "49ZmrRiJ22EXAGQV9E21a2spD6Lcg7kWap6zMtSRiu5mbfH4VYzTy8vJ6QXFHm1S5zDEy93kBoiUqugZjt84PM3K",
  "key29": "2MpeNxPm8qur1BmZZMvogPt3c8iN3Ghm4Ge8WkJ9Mm764epGmtNGbRPvuqpmXeCjtavwFTeyVydvAuCwKvCps6T",
  "key30": "62x2rtw51LR8b6t64yyvZqux1EKoJwMPVXGR8zDY7KQXdA89EsZ4riFYV6SrRAXTmKjNY9MJTy9SgdooUPzzn82o",
  "key31": "44ya7JMPKQWv2T2XycWVmRcxfPpbtHz4VwbNsEuwjKUUPMWrgnGySBQLxtAoNaSp7XxEH7fysJBgiZJpRywA1d8e",
  "key32": "5Rn2gzFQH6tgAxkrPQAxXK8C8pBbxjRQvuRCopaisJ63cw7KyFphE28Rv9VM7njsYeEFrjNToCuFkFCdg8ofFLuf",
  "key33": "NQCDE8aQKUsnoKH3cEaK4DNTi1Rs4AjoMYo68WkCF4kHQVFTMpLxSitvX9onv32NstnFuNheBpYadEMzZJvv84L",
  "key34": "3XQc2WqWG8tCuZ23EmDbnT5mKTvF5XbpSHLYPpGTVkgCFqPWKndRRntVeJ8yYk14KmUrhytqLD96wqFZ7rVogihP",
  "key35": "5ZWMrnGpxK3AfYF7RDwU6Lz8cFpvopZkoybhjtcSobwtpw2Yb3GcyisnWt7senV668LnoUUiRfv9X8QBwf8MFzYU",
  "key36": "4efTpeuo5AHY6HVLTRz3iQsZMLzR9pHu8RTCzDmLbW4Gz1MikaVQfpMYag3GvCYsEDeTyz4FJCNSZvDcoAnCnkm5",
  "key37": "MQK1drze4XncsEvLvU38BNRXbRiun8LMMK3Nzy4jhPfdyB2jR8w6nbzo9BPQExHoCScKTbKq1TyiJkB8UckoaNK",
  "key38": "5n5ZiPUoVtzKkR2RiW4e6UgN421kozaVoe5mKtWNmMcWWQh78fV8UNKf9uSgpyCB287xSF4s8u4jcMKHLw5R8NHK",
  "key39": "2j1v9RVYrjeMHaLv2iCYypo78X48MStcDZHJga3EEEJEfPv8ZGC2cJph5YYYY2UBZYaddTYo2TDwr2dy52MCWUeb",
  "key40": "4Y3oA2YjVg9VqkRcKAKWbwzs62CC3JbkxkHi7MxVoxfnXMjqrRe5mza6L8ju7xXzVLAq325RuwLK83nBvwzvbbBx",
  "key41": "2TKXjpxRTqKHVYrDTiEAsoBDqUCNDbBbfgyHwMwx8iAFnEvqtdX8MAivibKTJ7Wjfh7pZGN4qfXvmrvoBh5tcGjm",
  "key42": "pSXysC7m8DaysMXrGMmts2XSjmpKqcnSySHbE5hPNFkamXBxA66XLwF6fD3mdcHu4C658ggXC8cHA2y3Ew7ZUJU"
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
