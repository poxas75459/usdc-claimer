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
    "eCpAXDG2hToUZkyt6VAj4xwPduN1LC1hCTdR3NFEzASW5k3cjo3wdzyiE1NfcNFJYXVJjYQg1jcjBo2cxt4bNDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCMFbK6ArZpBUmaKpJbe5oTvnWw5GSgXkKYvF9MdLQzPH8eYwRwESoY3L1GaFnCnfRt4xr6pMxeNtRsNs8PdB2r",
  "key1": "3JuJULZ3WGDitjMqe913eoa4iiCyhtE4V1sYfJJMmPex2vNComyjNymJwAoNsyfMQds3Nd9MZhaQNZgqUew5qfno",
  "key2": "2JTp5AuzadVMPFhgky883LRscMNKqQkN6A6bcnTEHr7ZaRisk4dDidum5sXLimovonYkwpzw6UJ1B6Noj9tgx8bx",
  "key3": "2V3EkM6yMNWQSALxVJnJpGPQg6NBjjENByExLCKXW43yFUjSjrVb2u2EoUyccdpTvaznPUWCFFYnfEUnaxCAZzth",
  "key4": "3HDHgm2mafKHFVavcCKbiRka2DUbej4dZiTJfm3QDUcoKx5cxDQmwG7ZrajhwdpVmwW27pxpdXBJRX6p5fQPE44Y",
  "key5": "4wWmPuCQULdbEP27ojumH3mcqCvdQyrCA6S2JGXYAQbfiNdryHizqXYKofCdTN5peUu7VNgDQn7WLixArMM49gus",
  "key6": "38f68q4UEy3En5SfendC8afjFNrV7yb6nMebrgWef7QjH3cUvsiQKewaGa9vXoTmCeoDTUH4ATJgb6SPvXmMoKvh",
  "key7": "53G3tMQJHgukA2envgRcYYuHWvzkJsJLwLPARhiCmwuBwABu8Upc8Z85tk2o28gy5Hm45Uyyx5duA3c5CWwrSvAS",
  "key8": "xDWeSvNNwQtfmDDFhDx61cXBSRYfXXobnuqj9kcFZExJdCqqjvTcxQCoYJsA3XE4wKSSZ84nf5e6wYCFjiwWvgh",
  "key9": "42T8EHWRaQeH2gnVuoxRtN1m1SqRxp24UgyKzLQWXhwis3FJAzBuqUwb4gmoPFWwa6mceg74nhqbNsSJCUFBdpMX",
  "key10": "2JNLJxorU2QJZi7bqXixK6Lo5Fs4WEQuk8GmeFPW8a1atVA4Vq5xnaY8qiMVdtDxF43iZi7o3TZpaNx4twZWhpQ2",
  "key11": "44nwQp8j2atpSKycCHGRRbZrrYWzsrBdCdMkbqJc99moB8ZdhmbkqPCMhVVmiqnvMXVdQUFVMQ2qmragzsK9XyZL",
  "key12": "44KX9pMm16FAD1HTwQSqP53c5J9ZgucizsCqhWHkaRsfoqMiJJ5XjpYy1DCmmAZRbiLHx8PLbDi8GUjXxnseKdhw",
  "key13": "5HAoz8MvtAmCFysz8A5qsaAeJPnUCD45FRNq5T4bQEpUzDj9dGmLdJM4NgRAZDDhmCH3ddYvbptV6BzbSX3xJomk",
  "key14": "yzX3AjRNWZuFLyqCUjJX5jy1VunsVJgaEuzozW4LCAtMi8Hj55MD9FAu9WJLmsy8yGzgcNQtgShWRSonyVAfxSJ",
  "key15": "5y3h2ZXWZVauDPzWp1S1YEn1mhYLCyfg8PXAm9Ebexkmvcvn1ikLvEX8tFnYuaen3iNs9zDkC5WiZ6FWZzGCBm5v",
  "key16": "2TTyWZ798BebAe6PiwumawhF1wxfaUKrFpbzst7v1KMrX8k6vYGia9EiKsM5PYLML2cZXsBT2AjFQsF2TaWp9M5C",
  "key17": "5f1Zm7YPDkugb5qBp6QirkXgPUTrGHewCaemPiK2TqUovEBs3HWi6Wf89XbsVkcxffKH6KcJRLCxToRXnwp8Y8AE",
  "key18": "563DHss5c5DxU7Uu4Co8NLHK8SGWZ3SQK6CwfKTRu9xdgG688SeutpBPDvvD1oR5WmRYbU87dhscNkxEnHkmwS88",
  "key19": "3j7tkzCBx8shKRKPsV95fVQyYNChV7euEtTwL6ZgVDRbJMYULc8ydZnV5iEjc3bLMJfQCZUwZHgH3bYoWXPGBDqJ",
  "key20": "3hvkHw3YWXwLhqFoJfUC4Py7FidpWS6fmYSDoim9uMSom5b2rQ7LwHNQPx6QivqYigXV56ymZZqXsHMAgmtcv32E",
  "key21": "jDwz6w5VikwTUHHToatRHuHRz1jwxjLznRpdWTG3QiP7BE6kvJfXFoJiz5hJoubpKzdbjamTfLWLR5uhUDGx7ZE",
  "key22": "43a4gaYEUeh3NXUCTTumA53fRX58zeZ6raqHC51MFsZyDwC7WkVnr6oiyF6gAEtt16VkD9jCFEqWj6rqmpQZDmQM",
  "key23": "2rq23eNcg1mgiaLFhS4CQEVjgTJ976Nf6j3yFoHLYSbPP427ATPbcYhuJ2UfXgT5QusSzptZT324zsqKY49Fsx25",
  "key24": "65j6TJiedEVp8vBtFgyv7vBhuTgDDoxaep2vAQkxfU4ehmLsXc1b3TBJA1zMJpucoGpmRYwhrYhyNw1F1iw8yJc8",
  "key25": "5A3ETfKxUFj2oo5jENyN3Bwj1dPdaV9ja5Rs5Gr3RJBddt7ZZSxa9dsUmnSqG2LGNgar2ZHyeksuiyULVZvwnWjF",
  "key26": "5tf9Bm672JLWV5y9jcxN5Yzj9bxwDviVUoYwhB8u6Y3hXrEQF1AckVSj4u1EzNap6oAmHdNUNYShDpuxEjEMo22J",
  "key27": "Jx8YjXTE6qHMADYqadPoC6hNwe2w5jf4EuXvmaPa8hhmF5Y1bFj2CbZsevWhro7hLKRdFbK8rMAZXeo3XeJz2Hb",
  "key28": "zqfBryjnBdpLzXtZ4Xo169Uk4iyks1arbk2qP3xQ5ErGVUptvr3MntiJy2Tn2Pk1HpgBpkv8L2uq6Kds2Ktvwy5",
  "key29": "3H3ucCJ9MifFnR9bqMQVRACE4nnLpxSh5zPNvwqPkaLEEyCYfAPDkH2N2hnETnekVJygGu9zUp2XHNzu3Nyr3qEv",
  "key30": "5mrgeCWKx7fziXpJpQxbX9sTokRzgjdmoXif3xu721dpq2pTffBpq5ULHa1pnPcvYUEoeabgDKeVf3w4hYvpHjyJ",
  "key31": "5Juu2t5UyPkpWWthKsd2wG99BPhgdcF23XoUSLbjZKw5UhGLuHLjKGZsxrGkgDoBXaCCusvtcitj8m8krjvLnET",
  "key32": "5e9yLbJycREiLeh1X4UVpJcKPkmXuQ8F1hZzk1scJmzAbP5FcmwPWfuD5xBEFTogfKpMoqmdwnApjrt6q2YKNfYR",
  "key33": "i1oz3GxCKfkRCgbXAgMDUR6SKQy91DfsW6iA2wmE7J2hGPyZkrcehY4nFGkxxgGZKw1hEagGTbfACw7ybNngnuF",
  "key34": "32AzyyhCQZTXrpLerdTo4uDTcAT9dTLWQWff8jMpKwvJcUiiNTEqk2RTzrUaPkFpDvHkmGnoaK9GgivnJ2t4Dzef",
  "key35": "2uCiLkfXax7M6HeKZxmMkrkB8XprzwXcpBPSxGR9vBZXAjMPvxmmoNpcDHhvQHXwccuTFVEHUsg2QedovRrP4Jzb",
  "key36": "5vztc6WUh15A71tWiUEzZadHgsKcuLNshZgCtzkNL4NThuEdfa3d2Hsd6V4ux2hSAQCN8QRtqWkmt4HdY7x7AGf6",
  "key37": "5LVfSMno8vY2moqj7vj73vGA16bUZcAPYfXpf8FiRYMGvHdwTUMX62g8SKZLdy1Pni59gDYmu4RX37Rv9tvUPEGD",
  "key38": "4n1Ft4w8D1oNb61FG8xqWxnW7PpM9FfLoARGA9rkATFCgjGCRWexKZTJS9AMHRbco37TFjhRkiQ25WF6Xdi5s7fW",
  "key39": "5qQMgMuVxaGesi5APD3BiaQM6kYHyb6VbDkipa294LDjJj1aeWMuA4tAdVVpkH5pMGHjNPxyfNdJtr2C2YCzpzZK",
  "key40": "4deqFvqzpwwSqU32wi26aXjffqoLviUjpDFJ9DJZJ2AT9jZR68xMSuBJsZarWihQZqENoLtHPr5dpPeePKtckLZC",
  "key41": "52HaNkSNiZRFfZE5hy3htD84Hebjec3Ud5QgMXD1meCuLDjQ9iGgf8KYKMAkaVxyYdvkniBaGGShsY662BfrS88a",
  "key42": "5QY7zbpvonoGhh548wW48C1amqdnEmRcdEb5zjTFybGyZF4vKabV8G6ntsHhwJkpQf1iVeZrx4ZPAqRG3cxVKWnq"
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
