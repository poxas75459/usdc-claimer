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
    "5juEPavanYnkuNFR8QEUAJmC4Lduiu1cVtfx8yuchQWvJJ7pvd4KwJTkMAZ8fHSsfBbGstkuBnMzBkoyXKPjSE2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7SxTb3XxFTXap7TcyXqvdmy9gpjKyh5jXG78g2ySh2MYjSEv1LdE3GhAm23Cj9oLS4FYVGy3WiC9TrCcTAt6FE",
  "key1": "4A8ShfwsD8DWYP76MdSxBPwJxn8HvneXY25jB9UVBPs8QpSrbMNmpGTGRsAWEfcKsE6ERPCHp6QnERrubrD3htQY",
  "key2": "5EsXGuXVgR22h33Hwax4Ta4Pk8Av4ewoJG7ANydU9EFJUCQL2oyhPtBSPUq8o46BV1vftTx7Pyg5h6zbGUFKncrs",
  "key3": "5uS6NTYpNS2jP9CcMVca6J9oTvAjKBNkwRVuZnPJUZVrKS3NbKNtfHF1CBSvmy2TQfNwH9ZawBojckDS71mME4fN",
  "key4": "5GvwkkS9dFusEhyoN4WPsKMFtJqVcPMW3vcsSoEr6AjZmJxtXaL1cNtpQt17AFc3rvjJWk5yXEur4fUpoVh9PTfg",
  "key5": "2qfFzexAK5XcoeuM363QDTEFVH8tFK6BVFyA22TsihiKsznciT5HcWxbtN6rvFnhHwHAZxozBgjqHPV3RXRKXJR5",
  "key6": "55fyVckrVgPy27V28aefZmYiheMc21Kf4ZJsvCeCy47G18N3GtFosYGYrCshyZXzjeMYxj4NaXMmgVouqHkRj6Hx",
  "key7": "2JPsnLaoZhyXFxm3eKEN61VLWPWzvwJKBqwentPKGCiiUiT941cqnSUYtwYqh1799yFJgdD92yKmNC1gSgZ8jiXV",
  "key8": "QGKsxEijHcC6bjnZnmnhdfDAW4HcGtHZvbkUVhwVnwARxTo3XthegGPZtBUMSttWzkTVD7PNpS6QRJx39MDXLND",
  "key9": "3B7H9jfictwFsVxxZhcYkPqDhSZ6XgE2rCwiw8PRgJkHHM5y4w5i8JonQeihiq7Dhqn9FAxNHFDTcoJbmMWP1XhQ",
  "key10": "Jn8jTgZ7cWMkiro2GWqEKotXxM2xA9N5JKHuXHTqb42TiViG27KKyj7VhmSjWMu3oQuX3TMLLa1k9UTYj9Hh4j8",
  "key11": "5rgCeq3eijySB6R45e4fsGCFHm1gjQyFBfkoKDarhkbouFgyasMsZ6LeK6ZCokk7LHEeWbUNXmQAibeGrd4F3T4p",
  "key12": "34373be6zbeEpYhaQoEvpMmtqTxUg3f5kAbJYpA8bLj4CnAv83EH8s9wi3zSWSf2drpZihhYU8HTZfoAHbMFMeB4",
  "key13": "tqF5PS4wjRwqDuWwzjYvgMwSgm4JvE36U99dihzpNEWGnKigf54D6F9Vfz6e9Y1HF5AKkrVfCqR1WmfGqi69nJg",
  "key14": "3JmGDVkfLdGidiMdDXYrabwRdvfDWF6ogxxz5XbLxLN62WWnwBCXzkC6c6afHA25Vm1UEtkKJR6qxQgYkhwqTLd7",
  "key15": "5q3H1mJSeHa6nDj5vHsZG4XDGBhJwquWcPZp9MPyiV9Wxvrx9Hh7eVz7hZoFQkfahRBAnMo77E6TSTbgErEvevEk",
  "key16": "skQmZx28SDv1xNKoZr4tU4atASJK3LytKcLhwJtLEwGBPVYYKy1MrzQbqgE3PcMagZaXoxNiB49hX6Mo91KTcj6",
  "key17": "3NUbC6tn9i9G81hmRfH5rYtR8Q1KjCerf6hW1GzVDVsremrwg2mvMngBDTD4FR37dj5yVPXPcsPNghPVVrTZDCbn",
  "key18": "y472Wv1zF9m8Fv3WvkfNs7Jv9gx8oM1JcC7bEdFx1EvyewBP8zKuB2iBQJhkbDQaP6TfoWj45rThXWBW8rWEpLa",
  "key19": "5PMQwJJRrJyfBnDpvmbjPGuyr5xhreRhurnaKiEZKrQvbZHJuYEubyFAZGEVE1rfVwmpiwXkKbkiPxzB3nGorizV",
  "key20": "2SSS4hUXTqRw3M4xiszCU1KT2JwrbPMEYo5drhkwmUXsM7nHuBqCBeHVkaazi8fZ19WPm2EjdLurQvvEP89PzCpa",
  "key21": "2NHrBuyKqUcQydpG3Ajvf6Wu7JEJDykiZC3DA9ByPxwgX62hGJugf6117pCNvQgXE1128TdgT97sLwhGN7rj3ikw",
  "key22": "Ug5J9pRaWhavBK4nx7BpfniUitYJTB7X2pe78N1ZXwK725wg7h26iD5F3BZeYJXUzjWQx5TS8NmBLqiKPZFkhcc",
  "key23": "4iFMiRZM4NfmejpfKdTZdMCuprFZfztTs9PszT9daE8owTK2J4sfjP62FdoGcPJ3STyGa4NHX2fqBvCCZHYmez1",
  "key24": "3WQVQdj5rNZXvYcKdgtsJ6dPBWaScH9q246UBCBJmJALD2AMiMiTm83VbV9TuqvKamtHffmYaaaApXUgoAgc3smr",
  "key25": "5uXeL8Xf1Vr8KbaQhqrsGfG3E9b6R3WWhwzP6ekVqKB4H4gQjH4qLSdqb8mGS8SKxDgu8Y4fbDygzUXqw8DUuMTr",
  "key26": "2wKgv9MbjzZ4WTuBUXUva6tRyS3CMdzfnjignPqrPwLj4rqTdXaiNnwCpTPHxHfvZ8SKKUCgx7ioJ3kPL4GdSG2V",
  "key27": "2ipyi4KMK75CS1UK5dGPsuCV5LaHAyFckfBFtZ22265XxSaQwPAb3c3VQVZwPG61WY6SpjL7bdbWw8qU7BbSrPy4",
  "key28": "5w9gPQHJ6nUpWYUMv4nioYy4uAZEpMM7mKgSREaVzdxSMCK2E4X4qvH2bb82wHMWz4eUwuBjjXUqNgojLKeq2J6Y",
  "key29": "2RHzaubatd7UjyNEpKZKF6hBQA3Qxfgf8Y1qew2hc24EnnHCDLpPxwFeUtxdwAdSMxkh1NXMSDLPWy4XQzBk7mKQ",
  "key30": "65zzdxZUkwSWsquqKTybaM2y62tQK24hmfhQSCTGeLdfpxh5x2opcSfurBif5KQfAsTjMni1m2JJ9p7c7ej1vMeE",
  "key31": "2ATg9gSQ4SU7EchBZX9UWzuGkttxszF1xvLreyJoVqwTCehYLsSWmaf2fUjVcC2hHz4MstwVQzPanxRg82cm7P9p",
  "key32": "bubutFwuvT46BeAWcq6McZkmkydXEUkU1arNAGYR3Fivdp2V6dm1tvvsZJBi8bSLC7EhRefBYcdijjKjgjNKNzy",
  "key33": "5fWHhWKT2vsNYaZUXLsjtYEGWL6QA8XgShk6ccBeNNoLUn67WrHdmAwe1By2kMkH9ECHBR41HpVkmtErTpsdfMzs",
  "key34": "22HjXSMJ1KsjrC9x5goZNC3c936MBiPsDmMyAXNRLB4fhprN5hk17swDBp5xJbyhcjHj8JxiRxbMxRRFce5c1jVF",
  "key35": "8SHB4ZJWMzWTg9B57beW6v8iy1AwoatQCVR73nQKMwVL7eXkGDcpX2CqFYjbZsbd4BknVCL9xjRQwST2BPgGpLF",
  "key36": "3yczLDMse5djyEzerAeJr28PzP8VV9LvqbVRSRSTFz8WGYF7z3NCyXRdrHea5NniCZHw2Xfh5CEqi5tTDCB7CYib",
  "key37": "yB8PCvg7dnGE1m2BKAp6mKVJfpm7H7esWDSbgFLERXusLVYrixuSC1Lmd7eFxnzoBwPcxiisUmfTE2sEuAg4Z5X",
  "key38": "3G17n7ntMQtHdYiEHMVdEjydkd95LQdhdq5SUt6KeNBjddVBUb3uAFqqzBbBmsNcM2yxxEEq4vszkfwstUcvwQCr",
  "key39": "3uhDwhxew5Nk1W2tT2Ne8pYW97VeGEGDn1ma5ydx9RVoHFSHoCbiy94znECNCBS8YKXV2ryDREkQGxkhHLG39CxN",
  "key40": "2gYuKaCeFgPgHKiJC9Ut7JNWf1XKBG2yaepRsqzyijDZikKoo5MXHNXviHPcLrZxdYQYyp6Zb4SvAmnycwFvRY4B",
  "key41": "r2JptiW1kseVSbMbJzTYddZC3vQEG1JQuhZXwkZ9ddRAkVV64LWn9se7op5DqjKMTn2FZg8yFrU2TePfPxrkcUt",
  "key42": "51Q75ewCgWfNyoxSLfvVvUc1U9bT3yU9kdwpH7odGQLtRf1moRy9kLUF7M85dCNzGerXZ4NM3BHgpWZ1yB4gR6DP"
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
