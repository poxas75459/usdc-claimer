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
    "3Tw9HHLHLsigbKQprtrgksHfRczmW72y7hkqTeATDQqxDbmMmXmAFL5F9h1n3TS3Pi3g4fZ6ysGFiaT5oNwdTksz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiZUrqVDmJapjJngCumMXPsEp7ZR6t9kpnidVZKA9CXvBeqv3qhWvYLTMBV68vsJhXoTofxN5j67o8tLpkZXhfh",
  "key1": "3taD1fWnwrR4YKfVWVrf1Gn4XmzW5aSqKaWYTNj4QtsJw88FcVJYERn3Qnf5npQR4omkr8U2yqiAjqioEJeRwLbs",
  "key2": "42Qcp8ZV9rfxMR46W3tg7TbjxDXhXidzu6fyAKyfBxWC451iXHXSTMgaQ4w9BABet9DSvAY1kf25Y7y1w4yH7N3",
  "key3": "42JaaekBGTyKAXetyXV4TaSmtGg5bUoxuDDazRDGdG5wgkKsQ6StRoMAzbV8sKjvjvaD3hzydwTbBEZLW8mnK87J",
  "key4": "pPpYFEo6qjytBDP9cCLFdDwC3ekXyx8hbopCLbriZky99y9jsF9oEm57hb9p1MFpvi9sWqUDafZ3uY8v4L3KEWX",
  "key5": "33VBr3yemRCwFvNQ4W5pRfhLNVSv7SrGKzPUqMk3TTVSbHpKmGDFkyUKoFRDbHpdc5R3QXgipgoMcrNDtsZ5d4wb",
  "key6": "25vm5ViRb1k5TPvgJJJfDopmYQrWxLgyKpD1rbKvqT4vPahnkXZD2pQZ8e8o2T5xisDR6xbie31fmKqBdq2METCA",
  "key7": "5jYrmT7gxWBJ5ZqhUWBzTbxMEhFfNHA1vBccvrKcENHF5CY4JX6kMEWuZxj5XPm4mbZvisS5B3ezZddzHMV5ZcDk",
  "key8": "3MXjRP78dLrcYmRAZoMk8PHe1WV4o8aLqa8G7SR5s7yTjTwkJY4zjMupPBELYt5win6xXBFzyMyJhDoGfa9HBWqm",
  "key9": "5Nro78RAgfcV3KNBG68NNV2erEUFMvdBjf4gfPvTPVp44JZ8TucEfJjeZRSdVashb9RVcFBKkWcEtFFWaqFgEZ9e",
  "key10": "3trXYTwuoJKbdE1JpGpscfwzkrqwCUFPuTodYbcS6HgNmGXwUkLK4T3h9mBn7HQz1RRwYvMCBMNoj2pTBeJ9dXd",
  "key11": "5fUpHTK1NmbrMUMdmTL7pcjYSbBZ2WvaoJTURWEKZWpsMpNoH19q6aJQvKDGVBKaDVXLdadkNAKMnr4pC8eVdNiF",
  "key12": "5BVgw2NTRvjEU3NjQbJnE5vyuHWA8YV68GXWERhb8TpFpBRMrTfrqNggTneVRGCLCaR3bsmuTpfaeweGAQDVPwCh",
  "key13": "2HxQ1nEgPM15MyQpbHQFZvkBmnYw7GBTvtxX2wnuXsCJXeRHQuxNBMNeoNshsLiM8TrT4wMGTfXCL3J9NqBK8ACX",
  "key14": "5GxKiA7LfyHMjM4zLPqHDL5kHhdCdxRMW3HvxCmVBmsLk2gH5UcfFbDfsUdjX1k5JoNFhdEXPjdqhwgbC7ND8XLn",
  "key15": "4eoFhmTSAPcboxjRyDne94Q66pXyysL2ba7a2XMjmbf9saDDWfCGjrnmJR9MRmUvS5wqnfi4zHrHfmzNB1CrTRpp",
  "key16": "5vimyUfeVywJ6BAMY95rMXP5UYH7MmbktPPTXGQahk8uwjYpvXF6QHwK24B9QBWU3yc8i15D4JH2kMiwrmXcbGhs",
  "key17": "64XgWWnEvSeB7HF3wEmiHZzg3odAiX558SHggfdm7Kf1nGvzX7dr7crWC5vmRptPwccQxauDHitWsRMFzAAGja4A",
  "key18": "4F149JQfs63ipG7Qz22iAyQNsRfmQEz2XMk86rji6DXsvBs1VB1ehoTsFmujifhdnLAqP4W9UjSZzPRaj7ndMgnz",
  "key19": "4SvZaWU5dRWvPzeCyC4fu9wXJ1Ca8w4mvd5LWTB7TqTz5huiYLqaNYD2BMBoun1YDEtU5ca1i9kkxn2WySHjo4HL",
  "key20": "3ov8TUnssaTPdqk5E9KJm5MaMDiJvVJGasmzC35eyqYUdSuEghcXMFVJzhSJ43o59oLPK3SThn82xjWm3ywFj8xx",
  "key21": "49VaiZG68mpjDXdVCCQyyBifTUFiLEYdbC3Bfwapt2Xa7ZG17jzyeQT3pXM4nDB3yYJh79TRJRRzRMcJ6pQbQPms",
  "key22": "2TvJydXfUZN4DkqebvqLBM6RcH6Nr7ErZSyXXj1n1RS5FLu9cTcGN4fh1RKub2PLRRSWApqQohZKqpErhXwYFZPY",
  "key23": "3fj6fru2cbUMcSont7gcxARiaPfBKzeAKWFGuxc67ndLKBqocLohQTyTHF8yD1RvuAeqifZz6VFFmyiVJCGJS6Gn",
  "key24": "2Zfc4bceGfu144MgrWKMbUDMZzwz6gEu4PFPoaSsxykJsBty9kwWDxCZ4j7Qx6y1g2wBegsx1qD8TfQTbEhiEqf6",
  "key25": "4pfGCmBdVTW5EuhXyxK8NvbVv9LzjtPHmwuCh8ThxNKzgXupCpfweYNGm96BsWD2qatMLN2QoSQHdNPH44ffPDFT",
  "key26": "TaKinFopziakUZrvjN567wyJjFb1fTmtNC19NCu5METF8WzLhTbJnPArKz5SSK5EUUqK8evUhC9Z6N9XdasCnw3",
  "key27": "3hJG9EozxSW9Zx5wEftR8oXdkcwPoGkTMv4vssAsBFHK3NBEhYVYxcPwdeoDqwzgStdsJHw331hdEtETVFvR5um5",
  "key28": "3wani9odkHsyJmdB1kF8TRUgcaCwKEbZHat4DDaxX8ySvTnwFMkU4rT9dumMugu9oSsHoDdzcmZXJcbpZympX8Ay",
  "key29": "5yhrfwTaHj8B64o2wDmT8eWReNJmMRWvjDVt8kLvzo7hqde4g3So8vTjSxPGkrd6kbqcxHZZ9ncACg7pcoDnhjpj",
  "key30": "4n3jgKUTLVB117uKSy2NATy1qQ5Bn9Cvz4YyvQdUxTGoUpFE9oGmgCBQL2oMRAjaf8iDV8VAtkANsTy9kcKet2xu",
  "key31": "i7LxT6WDmGboxsXoviccTguneRRueLWVp5ZprtkKqr6LptwNSSCp22SkzNpw3fbV7yP7XKLqvaYrFiFnwiJu4pH",
  "key32": "kcGSUsV1JxaGGqHKPeXnfoEJpCtqQiXHh8waubvqPxvYiKVYA3fHmJAsCitYxPFXvrx9ei8jJdou1mGkEdPWMSn",
  "key33": "48FrZ8ERKgL5shBm9r3vQsYqjdvsymKjRa6AL1FNfE8FadQzfoJdrH5wQefzcaQGBypAPBaUy6Xx72ZMzaDLGHrv",
  "key34": "2syN8Xw8g3b7J78M8tLDnjyZrjTSSje3XeKzccvt3aGrjJiJmcZJNF5QmivqGTWn4GEWLbb19eKXSCXwnHgYwYg1",
  "key35": "4bjB1KEpGU92TfNuEoDAfPuiKJmMcjtDbEBBdhQAh62xGD6mahXTathPNitN1wyHD5BHcwHmscvrdLLWD4euoaFL"
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
