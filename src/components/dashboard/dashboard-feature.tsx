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
    "msA2g7qA8kokgBiYPGfKVkQwwGBtckHoDkigPAvpkiApDuDZWMZiBWv8rYWxng472hEBFLoNJxguToYAiuv4wsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbkQ9B5QzgQyjaToPZaX4pQ2cGjnzhktPxx2keZNekjBT8mzKmehCaSWxiSSP2i4iArSJzaZNiG2mw7p8AjNkLN",
  "key1": "NGX2n94u3naSZwV3HFuAdbTd8CZvR1MZC4bugkRLmpAcqcSaoGJen1741oHj2FvzzUQm97YbtXGTfHNhJkrmpNK",
  "key2": "aUeJzQUJqXRR6HbyWQ6WyWZChfVsj7E4UgAxAM1VxRoxbwAWd1hAj36fdthXGQV6ZmZsBjTcozpqhEFjNWCrZSM",
  "key3": "3bJCkJfcphhoPXXCs7Bz7VdXXuTXfSDJCEDLesbz3HH3XYkpA86SLWTAoUk1gbMXoBxvwHEdMxw9zU9MxKY4PRkG",
  "key4": "2RuJsQGJEjFtBWSpaYpDNcP5je9buhpY7YC8qAS99wXp8eFXVz1rypmWtZsMrmBML1NeXjL1cvxbJsADtSrUmYvo",
  "key5": "5uSEyKeqTHSFeHaehXhsT7dpY4Xgk4QqfPpRZuYkmHEX2mmnQU8M48tmk5SypMT2UWZsUzcTYX3BjnpVNCDtmfsF",
  "key6": "SQumsQ7oVxrjsmmxfRtuXpAPpBfofPsr6Xycb96YGwdpfW7gGXeiE9tdN25S7ZYVXpjy7se4T2N6LSL4GJcCLai",
  "key7": "5wFaF6gGJS2QyEnkxsLCwav1xPMsbLf3RRaBuTLCTbvmCvU4VMKT5S1JFimCVJCNmAKcJJuKMFfoeFpugL89mfod",
  "key8": "3ckWuAbtyzDZXnJcewaL7DyVj8CTUEoFhLGk4qLN6VGopRLkv9KeUKVZyHNXtxagGCLaF1epX2MVFCpWSEjhEQ7F",
  "key9": "5ouiHRrpsvY9mHVogKMkDU5iYH7679i4wr9RH2XRPYJvU7aAm57Yrao1VnucD4bKfHztJowYTd9kca2xjVYU2asG",
  "key10": "2GDeUWa2FHwW1LnzunQG9452rxnbp88g8hMnyxCZcPNjVZRLoMCYrFXd2qiyR93kcvPdd7FCbGNWhRYVL5K2czNH",
  "key11": "TnUu6HMJMi3WvQoS8AXP8Mb5sawmHLDfyWVwSAc6KmKvevsSTpwvmThvVBXDmCDpmYJVuFTbqZaAgV6SEPrEk2f",
  "key12": "NFEaqvMqGWEJ1kLmDwzwHFTDD1ezy2UmNcyGVhzojKJSUrEtQJuVJwn2Xwom5F2rWGSKrwZdra8Qct9yD1o783m",
  "key13": "5on2iz7DfBtEmvVyiYknUwG8vSaAvwfDecphrfUqUbGD2jU1dx8PzYzRYbHxsNtfagsuyH2qXNBwECc4FwFyUkf9",
  "key14": "4potEsZEe1SCUHdEoP7wFrFPVxfWgNwzyzmEyPSiRuNtQUWYx3AuZ9pdJ73UKeymJCTzaCEtPTvnqGNsW66LbWPE",
  "key15": "4TWRGWR9dQdVjM9aNwzuRN1DJYGZeMe2BHLfzMUzV7NQzPG6cnxXY5PKWXwsYai9ZRcED2pqumdnEQhbCZpSoUF",
  "key16": "4mjyqN7xJeD9eC2wv7ZMcxYo1UyQcznkPsFJB4uHemUzN4uBuScscsSAx5fcBG8twkmBVjAdmausuaGiXU3ErEug",
  "key17": "2S9hdxBTTt9KA815XGjRogfUap8HcbrXVYGqvpRex5JDR538C9GJtDK3i1tCENPxhedWJEDyqocis8DH6dY6E1Nv",
  "key18": "7fWkowmCGgZQV2WZUJAuabe11NkPesU1kooHoXGHpmc1bXJUzjVRYFcZk6njLpsksbMKJgDH7xCAGLMb2p5rrMc",
  "key19": "5sc2KU9tekxtZLTZzCByBSDWP2zLwchk3Rn37StBxKPSbcW8fiY2m23QbHbaoDPDkpEmETwMzAabss6HCw9KKdQJ",
  "key20": "a3YptqPFyJFj4LKKceuWB6YA9wTECU48JEW15agtBdkvVArPtvSQUCizxYCLwNqF6D85pSzmRbmvuXsg8xpXfxY",
  "key21": "2aYxjT2m9ETgnfbZviojM5uGrAZVyBzHQqt1UGxyuNo17WTPX9rGgJ19RSZitwsWHiwZNqamk1tB9t46P3E7fNao",
  "key22": "3aXU2L28wR6sSxNNmDNAuTHdZdp3pensnTTRdxFJuYYd7p2r7GUAaZzccubkeNhatdFC8xEa4DAr28Tc9nm653SJ",
  "key23": "63CBQaeQy1bW4iVJbh2ws25Ue3d3diSYGsUCeEFTH9swTdCLQdrQkbGvAxWtqRrm4NA7EkWfUFbswVxS6cBqj4Ei",
  "key24": "5BJDqV2zkBZmpoHcwYvFCUt631i4sbpUhrDg1masAgKaeksDYhtpfJRTGGinwUQVsHABXFipM9NEm7sNk4yq63ZH",
  "key25": "3QRjdLM8ZFVAv5Ds8ULaF7CH2WDiebH4LgbVTNVQ57QccxJvGwZ3B7qYwmAD8uZmJYbDn5M3uBaRUeR7bUEY4sid",
  "key26": "41yTexth8fhd8axnHFw3q4ZdULiHQJWMehZvZSBPXjGfKfDvQf6Bw46jNxPqi4UMgTzDhENhucijyy4gE9KczpEP",
  "key27": "3m1iMkj6pZnnuHn4suxSn4G51jxCSGjbT6xXNYs99evWBMhahrXK8bLfLBYUKvG1DG8aryBEpHShVREi3xWRqgvy",
  "key28": "3LK57Av8XH2GU42kUxcF84N4qxkp3u8yvxg46YbvLkoRh4CfvfuiaFLwf49n41vDtU4qR91yf2ryP95jckAasgYp",
  "key29": "61HZ9gp4DbLa1iv9AP8fYrdYbBBqvqmw9LXjtt27rxDUweLRTgsMeKPCScs3A5w7QxGfBfC4YC53XwjNjAzsaPJw",
  "key30": "4BZPvCL9XyYXVdT8b8yc7G37G96dp7NeWxTwP83ULJ1Qv97ezbHB9EXyLtSbzTnanMhcLXpfbs5ayU1fSffURR7p",
  "key31": "5ktTdVrC4goW1V5NvY139GSH5xF1GiJFsmXpPeWp3x7bmxqkgh5RxEiqFeuLxyoJHLPSGD5U8d8MfhfoNSaAkB5J",
  "key32": "5ytppdyDcp5mkMYNGkpgapsmrfEDDfquF2P9Zitd1SaMAeDCx6ER8GYGuQsV6n3QmvaYiUteDvHZ8Q19stPBLJ9N",
  "key33": "5RamnGfn4UwEkosYiarjUmE6zX2nJvNTAuJX3RsLCubwpQcjaZPzM4J46UytuXd7uHwE5J9aq55m11Fwkcukc6E",
  "key34": "4hSHB6NjGhgEcANfx23uwboiJB7c1ByLZrGxVMrYeKXqrQ1urs9utpdBYK1H8jpb8bZGZzP6oPDSPfaKHFQxJF1i",
  "key35": "ic3Yfc49rANNLjsqs6WyZoLrgVD5QJzdWpUy3MuNuSmzCrPbwmE9w2msuEFipE1A7EfZPfnMfmiEWW13seVaqBS",
  "key36": "5tnP1VRXJWPm1M3x11vKX4VF9pbJGUpSNSngVhRFyrCbCTxwZrhS6iYYrQcRmmvHBLdoctFJ1ULynH9iromT7MET",
  "key37": "MyzBJof1WUrrXbAuVhKPRTERLmh6aJoFfrAvKpaMioqK4D1chKMeegaPFSDZnhiiu1SbsppES5p35imo6DxK67S",
  "key38": "4t4TQfj5met9C4umdEi5RNTzmK69YpobPbX6B3TyfTqo6DDvK9GbA5PyDK8dbgRuSChgK9bzErNZN27Y3ipx3dwG",
  "key39": "4xhG9c5MP2psiXfBC2xmbT5UGncw3PD2DoiRaHehKXM4WCbFcKJcbWk9hSjCByfmd4yd9sPW4FAEwYqeKtsXErLy",
  "key40": "4XppJ39U8Ta1J4BdgHKqp4vLDj3JkdEbirhVkj72gdozRfpbg69NR8XMdDrs9SAfgLSwdSFhbJkJMEFd23evHmwB",
  "key41": "4abaDEi8EDJpm2cExcW8zdZZYaKScYtRYDcGruN2oVo8bW5SrS7V2ED11YnomzApnt1fYFm4YcmvKBWhct3XFoxm",
  "key42": "3KrDfYAw62cUcuQGwNKSbv5KFPDcVeepdTxxKZMBUHHom4a2ZkH1onLTH7iC6unoDgJ56cKmgh8FhM8oyzFLy7eS",
  "key43": "2AP78TFarLhrD5DnSS4HDEkEQf61cDiFq8dcYXz6i3tQPeM61dP8nZ181fLgavtteMbrs372jTAzTorRsExzKs8J"
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
