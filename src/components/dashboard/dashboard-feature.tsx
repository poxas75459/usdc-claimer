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
    "4teaaqc5T42aMeM4wxG4FANfBEbnKGcCpTa5GYP27iiyh3MtB1XVNpDfKK2zjKr28ypbCjdcaywLLAjtqi3g7zq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QZucVhscfkpD6RycEgaK5UYZnPya5LazxzShKvP3xDTGvbG8LNwpRnwDMZEdxUS1VTeaFvMhTGRiLQcWxY3xSL",
  "key1": "5XEQANY2bTF6B3Vtf7v4Ag65bx3eVH5kUEfeqVQQaVi8FgkweYKGmxAfCKQ8cF81KZMsyuSYQBkvtAjszdjrM7PA",
  "key2": "2gsDT5HyRsjmpps3Ss14UEfJP5n3Q3tfwTVrHrrcMBec8jnBHd9aDNxQE4h4EeDddmtx4U2K446exfek5krqkTRt",
  "key3": "5d13sZsFcboquoa2CQBRiYwBsJ2jNNR4tE9HSHtr95cpQG73Ep8mbiRi83c3nFx91T2bLijC9ZuCNUoW2UmyCakq",
  "key4": "5skiH42bVcF5o1tnyiKa9fZTcB8LndnGXggfTKDSqn2ZAZMS66T6iBG5y99vqxTsTZ8aPYmFJmXouhAivSDiSjXj",
  "key5": "5cJccYeJcHcHt9zfA7k9ETCSEsk4UQGGF65uJktKyDHNoRwLgwGNjXxsGuSaca7BECBnDbndKqK5yGXpqdiG7tU9",
  "key6": "45pHoWesAKfmtvA8ZxM1sRRcAAuXLWS3f5jwSnvKkHtq5X8mgcrLeV7Dc1SqYFhFj9JjvjgfBV3gm2gzz5beWcoj",
  "key7": "78gH8SyawZLTmng5zx3F67LeJ6SCaMdP3HVjPfwrMS7Vor2QN7W33zeE5XVnkfmeA3KyqbRoaDRE3nk2zqzyZWA",
  "key8": "2UiFoPFky3zLrjeJwbpefLUVcsBbcgcK3yuYEKqT7q7xaaEFmdUCoVpuYBEbbR2CXNKYgMutzXWt1fsMTmMYPtaH",
  "key9": "4puVMCYz8jepem29uX7b2FjGtCcCHYYkNPx6X7Vu8nZ8NUQsdbhVnnenvavgArNUwLBYsnsDBQYKo7Zbnohm2hct",
  "key10": "36rzcCbpavrWcoopj2XVdoLZKVXkzUYDyrfKmg8u7wyEgUM3i9zt7PcZVVbSTscagHyKW9egkhYVZg73E6pfD34d",
  "key11": "54Uhn7FrcsXqB5V64giwPfhNtbk48cqusfoJ5gVW34ZR9fnuTCTBMUHh6RCJaKXM7qNU77VLn8GXUG63iLWXRoUF",
  "key12": "4hg48CbRWJ6JQh9z8cLMziNYMPwBn1YgtsWHyR71tqJYhr5wcZsvSTgyPSjv5wtn8oY7aWjs8fXqxMuLYywWK5Ei",
  "key13": "3tjV2p7vNoJtsdykEJHA2YJquijETbjXCAkALuv1LNmoCUVkkUd76rb7ec38erEQShAnntChhmLVskHKfCX5SyyG",
  "key14": "5kqmWQUNgi3a6ZBJS4KPRnkJeST6DYhenmTrB5j3SRePXxFBmFMRtLGUgizQfBimx8mRDr2q49K2xmwB1MSNQvBG",
  "key15": "pYqB8aUXEUztyGnZwHEMoQNwePoxCwJwCj7iDwAnGhC7SVBubrkwKPtdrJ4WkayktP7v481d7d2Wov2LAz9NNqX",
  "key16": "5AFrNXh11NrUFso5DimRtsHHfa9JD5DLV61HVLN8p1mzZCXRWD4y1eeewBWWZ5VYtmghNX4jmvysBumyXLekREkK",
  "key17": "TS3FNNDLFosxFXZoFvm4du4HN2uxL2QuRNe6mtauUTQqQtDMXBK1irHZe7yAmEM1Bns9wjGSgeqnXBfx45H4Cun",
  "key18": "5pP2pBG3tcew5FZgwbssBiVXDrN76QPBmS32j5EM9DdcrGPo9EznUXP634n1GuhQmesbV2ML7XMVS7UUWysBUyxQ",
  "key19": "5q5VRGfskB42e8mRqoZ1YMAW1VH85b5CcNNev8AzTpJSqMURMEW8zGg7hB5UqeMHwmX6evtfaAwVBktqY5nzKMnr",
  "key20": "3dZXBa5R4GBQK5y3LNEdsDX1vPQ9juoDMmaVenDFX5qT3DPhtrsrgoFqXT3bqMLbuNKwsaUSTVxaGQf5FxJnyUSw",
  "key21": "TSn1FH1kxZna7pXtZXNrVShXmxjW9sRPzLgZkt5yi4CNJp59fKQqKQtcFpQ8jZmmirDbi2jMNURfUjoBRHh5Vc3",
  "key22": "4e5u6hsn67J6CVBQA54KTF6F7BkiW1CtmGykwCRy232V88T3pUiLwnWtnyqekQaebD6qDfEvFGptDkSXRY4eUApX",
  "key23": "2UGbwKq9UFBXDgSJvgfjBsFB63cxHou1iBjbpQBWKwqN8z9Ua5hwZP74X8TKqWz7weUFvMMFHDCTCyVQEgHZSexc",
  "key24": "5a4oxT33gjAdTyaGNbFeWAsfMZfTQ5NAcKJEiPHrK7sFVzQ8EVKeMpbW97HM3wZKfHXG3i3joxW5ZwTSpWJM5xD3",
  "key25": "3MbYQPKYiF9U6N3H2uBu995FyRMexAfzYLHaGkMMaicy9W6VGJGUnXuKA3cxVhV4gTRjQ8UrvdHrBS2e4rkseMh",
  "key26": "ie1UP57t9CVEmpm1kFeTEkrV6xUbRkKCMPfsyDEAmUUpDgh6tnjaBHAe6YxbiWAri32udnXSwbA54JsAAWhzMpH",
  "key27": "5xXm8SzJevsCpbExguaGagHCPBV1vmRzWm18ekd598tVfd7hipm6BgWpJF8P9AyLTNMHXY3QDGnJiRoUjh5ZZgBK",
  "key28": "4kYc94khqvtDijUjcr2Ztt8CMPb5eXHVP1nDeHgrE1zoKKL2nuCb69k2v1rnLkDSGMH8MRoLcdUNFXRyXoE9EVw8",
  "key29": "3fai5dKRecSxmfr3hmbapdoPvT4n12zzN3Yjmpnn5j4b4x8er3Jcaf1x39gVNU55gwEupc33LbbE1eMoDyFsbrso",
  "key30": "2FWutmDUQMZ276eUUVu2ziucBFYazYsogoKb78J8HWZmATqZZ8RUKFTxLugddBX4omyq1ZqWAyR1hHQpKKNbEtCF",
  "key31": "2LZrjx61NUen5D6Yqw7RMDhE2nbD6JhAZ5bBhTEocufo3nb8frSW9ZQ8utTxhxrNuVtV6UUTAe97uqLLZTyBeMad",
  "key32": "2HtNX2BnnitNR2kkSx3dCpHPsJMB3FVkyTy361VDjvdC6dnfJC32dFtY8S9tkJi3fR6FKYePpdoDzTNbd6maWaB2",
  "key33": "D3HyQx8HjTo8XEFE6Tx4rjmjJdsc5DKmYBo4QeKtFACTHsNducctzqxgtSDYuXwWrrfBJiu83aFJDyACjUjqjvJ",
  "key34": "5hZe6Ug5jijVzavsYjnLN4C1xobhpZjgdKSDdpcL1DpZXCrkfQ35rtucVmNNQRiAGcDrtnhwCgvN656pAm1Nh4br",
  "key35": "2ZtSGFjjsPSP5zrwy3zM8Nbz5kgKkS8MfGbQ1bdHXZKVfYAnwiFgnoxV1rZwQuujYQcYriBjTCsRNb5q83BN9Hsn",
  "key36": "4YtNr15P1QHcSVxCMBWNFUxatKwESUvUXSm6ALov8ZLzd3JvgmDd7rXUb6waDrxMLPhKKpUyj6f5Pc96HVZsPZAc",
  "key37": "KpCTgKGxyVc1VZjA3nVdcNEDSmHKbn7Zb5GuhpdbX694CEmmFmGSCYHaEpX3YayPEtHPZgHhWhVxakPy43K3XZT",
  "key38": "62xmnjPmdnZ3DSJg92eKuSGEd9su2Fu2tXWrW7qfCPhHEzMLqMJmf8tFYWYMkBYuCFSscbVzQuZDPMMtAC7mVN3w",
  "key39": "pWK62P6vsfUuATvgVJL3EpBuemXWBiEZbVjiFaRpzfeMcrQixYSybQyDD9hfUFrDKrhdWqAUiTXktpZ4dFzy3ue",
  "key40": "45avorioAnZNtcSJto6byFWEV52dd1fLW93zMMqm7HcSDvig6n64ProStKBbq3rNFrXzneqe7mg3aM2ENxui7NJQ",
  "key41": "398PCQx1kymDA2PddP5Bn6nke3CbamuBDzZxynSLrbmShTivYMzbDTyMkiEmhPNYmrHhg8ne8y9RpPTD1mBgvesV",
  "key42": "ZpdQo5dCvKKfPVDBPauKcdcpXANyR543eTyDfayBkLKGMAYGMkGBVzzBMa5uSVtncyWdotgE3E4DNkp9iWS1eAr",
  "key43": "2WE8Syaq7PXx4Qv4QafdA8MJb37rnGQrmeRT5dj8fC7bdAWzHGiXHz6zucYhd3ydZCA4HR4U2UWtzgywzjhYv4Jk",
  "key44": "57kFmBMXUBw8VM8yAgTHMScNa1W4sppKcrLYM3VG5NAAobewxXaouTDiM2eKe3mRD1vG9VMi4XaLU6UhS4B58uWF",
  "key45": "4ReFaWwrdMajBJ3cPqEtTb6E9Cw6rPyeQsWSeBqz1bAzVSYPD3fya8dq474ERpNx184szWpXmPs7zWNVv3A87BLT",
  "key46": "7Atee7Ks9ugX17FTf6K1XkbyBu3Zt7eJYmmozbxfJk4Q96oCScTFdAwog1zsu34skrSndjsSYRPnE8FktabTd2k"
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
