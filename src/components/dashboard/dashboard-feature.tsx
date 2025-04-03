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
    "33MMJkHkpCVkcJV62BfzFJ6JDDPU4DQL8evAUeV2iPnN1GHzxPrW1xoZWZhfejUfMhahsyse2PSsJrRmC5VAXxLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdGSB28vFeC22cMWLNFKtQQB1yWB7TSn3yBgrZf69KpmzUtY26A3pwFXeLZJmHdLnyYX7euxREpKTS7hmrS3zTD",
  "key1": "3fSEFcCDuXnA1ZHxcR2t16zfcPBCf5BSLCrZtsxd1cRebottNuDWKikQjp76xSR2pBmSujjAa6oMbSugNFthvn11",
  "key2": "2LJDJAECqmpgSwobAr2YgytAwG2XXP69MwsftTr8gk51EMAidi2cTYnawPASWrcu2spYF95cXvaAoooFwPGfQaYG",
  "key3": "5LZWWpS6EW8iXmQe4kG4HAtQxnimcbfaL1doiMZMmzsSALHXHqJqxZj2SztZgPwQVJmj9hgr5Gr6kCgSngu1VzEu",
  "key4": "4VrpV8WH5bTQHxXXkjsMhgXabKM629u6v5jeVoEqQDbtTgyGqAXQJDzggjNfTC3YNBizerszJhCHg5VcaYkZKKzy",
  "key5": "2LUzhUt72nnpPwjvibdZFuoLxmyqG5nwjwATiCMeHrkb7zvEKQ5yqq2mPZLk8CWbCMJRXWdUra13x7vCnsy72KoJ",
  "key6": "3qm8Zw4xKWn1rED8YL37En1VbBHFQz17mNLUzVBTjsdW9YwJgM7dSXX9EVSRoUF9xqJTgc5T89V78KiuTsr7f7YW",
  "key7": "4r5SiS7x952jf7Rx75YWxMA8nVWjyZ1Ag2B7duqaZLZV8k7pVfgev8pFVaLc6HpHD38hMK7YzJBwvJvd7cU3K1pi",
  "key8": "32SzCLS8Uxot22HThVrkLFYGbcqrPzHdPk72fFM29KTeEMEaXRoE8mopgNswAWLd1iRk8CwZb4Rq6YjMdQzZKMxD",
  "key9": "5QVrWJvNCGW7zNbj1QXrmyEreTDodNFXQEChieS9knYeeskDmifJ4uQGvujD8LbNXb3TUP4bqLU9cwKX2VDsTeqz",
  "key10": "4W4TaYYHUZZYwvuWhZmvPwRDxEF2SupR2sYb8mvi9C31mWMru2oJpuF7TmaG6DT28wvrhqPxxywFaGViKTtQi2FP",
  "key11": "4LnuVwNEQTjShDqTbA1A1j6k649zebC4sCjFhYyea8EAh8koymWYN2EK1Dos1kpC9o1nQFaFYSbFTYn9eKkxjwYy",
  "key12": "4K3UioWhGkynqJsDB7CfvTcH3N4tpjnPHB5iMz4jAxos41ibFn8LjBEtWPoYnT54nyCpQNUEL5wba5hEQE8yH2bv",
  "key13": "4EM27Q6dutgiRh4EJi6g26XFRsr8eRMcrHxxCiac7bU2AxwTkwdZZvE6ppCPy24NiARjg2bvcMQzLw9r9qrMTmHp",
  "key14": "2gBdsYa9v2FfATSYV2QRNDfcebHguPUawSKxoVd6x6h2x1FmveFfMrFi5eH7LAodzP25CZRpRjsnsiZv34Wizj2w",
  "key15": "4jc4BUwk8V8EbM29pKLoYfLSWYbp982BjaqVHqAcxCP6NZADoojy2ddFTQLV2QJAEsyeZhomtUkEcMDL2f7hPeBN",
  "key16": "3Bi3prJ3Mg3fm4dhauiGvmDJjoxRjfhrvr4R9vV85wesBdsuN5MND3XVJWqWWkd15pVBytftmU7KpqieESWMbzts",
  "key17": "4fyzX5fFxr89JRLtWryxZAN3h2VBKHHcs2A3p5DK62Sn5MG77LgJzf7qmUb2DiyfP3VTKdnAT9pDftdp41YaBBga",
  "key18": "NTHSZZArc8Ydy8MqBaA5uFoMVmUVDfRZh6TRj3DVqEHdUerH5cKLwFiLTCVcnYnwmhNsob7yTb93ha3NQ2SXYHS",
  "key19": "4CdMkc5r7AtQewtc19iYrRWYPsqaUpV2qmGWt2jfxM8eWUK5QQijGT87YkdPUmrY9H2kRLtwTYHfPng3aAD3iq8X",
  "key20": "5zx7NrNNJyB3NqZqUwc16Av4gx29NjaEdQEVpk28y7tCcBPWhTWJVhntUJLPK2P8dhz3LaJmoSSSL1QzYGmEWAc3",
  "key21": "46iEF6qUqbGaZ4sSLJZ4SmwYc4Goq3gT78gkW2WHXSxYFQmmt4zf6C7RfGMSw1PwUwfaeqCtGRxw8VbqddtXBopF",
  "key22": "391DpuxsBM9RR4KhTTPnnBnGQ6oY1BXyReKg55cwC5QJpyMJ495rfL9wTz1NzAiN3UpQ7VJJdAzMdXNpPBCnYLKA",
  "key23": "4UjdR2yqerAVYqY2R8j2EN272jkf2FUmFopyVx3p1XyXZDhqv3RvqJeZUPBs5aBqAEVp8GCygScu86iGWMY628yJ",
  "key24": "42oVvW1fjZwoDCt6UAvmjAgoZv4tW1kS9HxpUiBeWCdoPyWNLqJ5b4rGtbUcbi4LqGJ7tACfPzRFsETvxvKmNKKJ",
  "key25": "4ePu7NL5JfVXkPRRrCf7SdNAbhvkDfCmSCN4Krd5SwrdekUk6QUwLLA3BHCkhNyLSFR45fN79WPapbiSqgQSo3Ti",
  "key26": "2S8HBQURZTUw3Fk6885FBa4t5gZgymHnR9hcn5YTj1EvvxfPpGhYxV1fAYdsMnDP7xmqp6x5B9WZtDMGESEuqPtG",
  "key27": "5jS12ruoEwHAbkiFHD1HurTizhiiQd5zSCBfkPjKNDbkDReQ4t27frhGDKoXVYbHdSU2F3rvasqcPbFWkWNdrMYe",
  "key28": "mgeHBBdUUJ3qEqT86FzosJD522E71DyvxQoYgZWdzPPC9GxHaF1iaUMgU2wtUfbhPetYoSjCepmE4DC9HwtTtRL",
  "key29": "36zH1uPdQck5LtRZBdGpa4eLr9BwEaMLHoD5WhwAhgSDAxL3sDLEi4zpWYKCwJgW94HvSVBvHTiGWTu5dUNytnCh",
  "key30": "2JTvDzzWWkyKBo2BKY7fRCKpbqfWVbpLbF4enS6Q6Lh2NuyothFPi3mJxqHqWGVd5M36SxsKkdWLfrbPF8Garg2J",
  "key31": "3nrhkoxy84gZjszjZjByzg8Vd43RVVC1ste8bdMqEShoRiFQ5oWCCboSjbnRDj374rizqYWVvzFdHWjF65oYdzYA",
  "key32": "SYPuv8pmQ5oNxkej3gd57zTiCFaMUZ1A4wHDxT4gCempPbn4nhSphqRtvrMkffBBckykVKt1n4bHshZKe52zczT",
  "key33": "5e35eTY4Dm71yBgmYKSs7VPfsr4pHGzzTqVT8XncLhoBezEX2JSy963vMKga5ZR2Y2bz7JWeeBqduPqRcRVHtkuW",
  "key34": "Ut9TEV4PpT8v5TDEVTnUWG8fmjQ2gXRXi6NErqWg32gPAsPmceuwehCTuxz35ySmxdc6GYbrTkNYu8An1CtMBWT",
  "key35": "Pf7UyZTpSZXEc7iDGeoS9QDwiHfxs4zKZHDzcQCf8HYyn1gWauaAFmmLPemkgoDmwZQSkE3tbhKdKdG4ikhFgn8",
  "key36": "5NULS6dpEEjX5FqsFrdurfY2wpYECps7NaqHVEPiVyNoynWn6DVbFWi9QhTb2PYuri1rNqHGV7sHmCJiRhiXbgbh",
  "key37": "5qvakyMkBKJ2RHckf5TDej6Q22V9Nzm5q42D4PbCf578PfwH6AisPVCF7Dky1ogAeKs6BhYCGWieb2FqXZkYkzC",
  "key38": "32tHzZjHmhSzBvzPhTiTJcW8foEf9dgBn15PWgRKkkWRAKNm86j8cqtwjLPWQrJ2VFUff2sBZazyQJJRMRcrfT1T",
  "key39": "5h43Ww52LRKJoszd9bQy74ZHjvuBNt9XZ6414JtZFmVZdDE42qLVYmrNdfxXFRugpojKV5pd1gDAYP4HtSBJniwF",
  "key40": "3fc677X74Hveko7E2ii6xyqLwMAsYfqUndjKnm5w1erYz4xnqRKBzH4CEsxWmimghjcoKwnNtDDDXAhiZA4ufP5Z",
  "key41": "53JWCPxZAyqMoF3UeSxnpPBrKUSRoUoaR7Gswikw7TpTYUwtXm2r8QYeQjTwoCnVx5PE5hvW2PvEfQK1vckJerJf",
  "key42": "5fDS7fThVe89Xin5F3jaM4EZySEjc8HfC6PfuFBVnyyCqhEXzm6JeNLAYUrFxBwdqrDkPiWk9jVadhMdC9CsFSoH",
  "key43": "TEYsCoX9Gjag6Z41tRRvWXBLVfgAMD9WH2SD3Zi5d2QGYsi7p9oFiMo65uCq4YG3m1CF3n5ruHJqmwK6oKNwnNP",
  "key44": "2JNrJNgDZseTiH9v9TAfcHJZS3jtdPJxCDr3oqASpR2DjzQUWZd3p8vkbHqdX6QR9aT5tPxuNCUqtHYktVqGEA9v",
  "key45": "63QHEyLTsrnpp12iJDpJ2MxqGEZSELX4NTftGGs7Khv1oLWghAN35Ea35nbuCUUBYkjSFUK2LTL3LTsatyMaztkd",
  "key46": "2LxVmkVAhBtHkrFsFKDCSioYDG7F53h7jbyYSRq453izk2TDUHocazuvaBsseXEpbJtWZbdTRyDhiZfKtnwgwmFv"
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
