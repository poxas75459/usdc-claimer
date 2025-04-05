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
    "79UMCZEWv1P29NpecqZ5RNGgfWvgPTnQ3gmein7TuZ29VB9jrPnAQsK83fpPbDSNhWGhjWbzERtXJ9CuSe4qxae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVx5sM5izkmTHTVbY3Q65WPrEbZTXzw6VW49KQhnjBXdtg9owvtNE7jv79FfJWYzp3QKgWfQyzL3Fp9LuxWtzzA",
  "key1": "2BsLrJ2tXGBFARK2MHaJe2HzLSouqv4dpbJtpaUG7ctkuid3sW9YNSpEKx7QsLCNwbE7T5oczpTLEKeoGixF1Lfi",
  "key2": "2Ew7aKuSpDXvS6LEGgoVbwVnoAZ4NqRDtNrXBPiomzcMbgtdBAKChAQnLPNpNVL385CCJ4Fm5tr6wMzgwTGjdzom",
  "key3": "2ZeECgPE4PLrmf35BynKxMhP361miJqf2yGQDVhJFF8hEVcwqDgFpzq1LqU3ynkTJLMmVKNATjp2Sv6iokDs8wMp",
  "key4": "op31u9LodUUMLxBZipycUGz5YHxgWueXFsVsG58Af6pn82E3M6Kv2yoctetjkgtANvj2rhXYFQC8uVFqHp2nrLH",
  "key5": "63mXSvYxEQ2auHgQ8pGjfKV69dxNgwuC5hE7eeYxhUvjG6tuhdPxKdcAbtLfq8QGaZzfeAZfYJA6PEF4MvqGqX3w",
  "key6": "5KQEYQsfTz8QKvmpt3Hrc5iuzVQcprG5X8BhrTVX1BYtqjwqSEEoTxPywpmYPrmQp2eqoJGnpJwoY4JTDX26pLtP",
  "key7": "349jYpPTrbWDgbUfu2PCVyJHMHgJLfCcwdpv8K8jmU24K1drezzxwLzrU2VTQ9UmK2oFDmmnVktbMTUCrasfGQ9",
  "key8": "4qd5FaPDrAHaeJEufLQhum9m5YmrJR9MD2zgJwDhwXY9BK72vfNHebjR8gsbjKxfgbRZi3DkDhhSbWMzsns1z9QU",
  "key9": "5o13jwvixnssLH1sRricwgC1ZFftprXxA9vvo6FPwHVNq4odZTqyV7EfZNGGFcNjBjxX8m1oA2PYsczVdJCffYRV",
  "key10": "QXJoPsqs7BrYCfDKkE1tJzWxDyzdJHZv7zzbZCxHR87CaCa9KyvG7czph6R24FphrT2kZ2FPheevFBufrHbDhyV",
  "key11": "58femVzq9fLSiRdsm5jxPZNtQBtgaZGWcJUunbD5w1qxQng3CpZGPyzPGmuKFw9BwBjcsDytMG1xEvMRVoV7iHz8",
  "key12": "45WLbp7K7mKQVJ8S2Fnk9M6XgFodmd3uMFzKk3rkzxaiqFHhHNDJasi4QPzF7Dhu7EeFupkuYCJgyn4bX4cEtpPs",
  "key13": "sx3vbjYQ7FgxQ4GhL4WzxpBVZQkSTPC263NSx4fgMUvGkcJorM3Pwjz1deoU2iRefTj4yhswXu4ZJYK6448Yz88",
  "key14": "4TqfqrChkXvpWPuhcYA88XpCBd7EiwLudjpB1K1Umh8TheKqV8dSJarBspJ9NNToYjMGqHvfd9cirSYy4wHHjJ4q",
  "key15": "3eo3tgA2LfzaeBiGTEqL3ENxooxmYkS27e1Qf1ag1juWSy6FTfvYBEvsXjV2xrvakUh4YjsMBt8GaPdsQu4WP3Qy",
  "key16": "te51fMvBEkwiGybbB95YLFDxpo43jd49zsHY1qRnGNmjnbHnRssBjSLXL3tcwqU84EZB9JcK9eXjyJzyAKAKx5f",
  "key17": "5nMNzb5G5bkxpvPPoR1TZHdgoHKf1pN6VmLaTt3j7M3HYoUQFdsiidBexBHi5btycGCaa9V3oiXdLh1o3kEEJMas",
  "key18": "51ppsBj2TBzb8FPphnTUbErZmoyHAokBAgFGhtQ7DoavS44w4cSbEbbo1N2gpSoaXh2CN3WCJEwQcmgR1MbFedBf",
  "key19": "3zBgufvr4gjmHCk9TVKHYbw1V92mSgx2Mvk5YfsBKdzTrGK5ApPTk6nF1NEjqySN3jnvP2iLhDByb7L7syha9ehS",
  "key20": "qqhwciNECceqWiAT6gzmby33N8mqrxozU6BNNLJ7KTd8NCHokgf6tySsfAqEZet9w8XpgC1FBaVfer1K8JM5oqy",
  "key21": "4PUueUvfX4StKEMtANTHqz5ahbDzu6f7zeGB3xwgjwqmMJE4JCgB9D4x5grJswqpwvbrnoR3WNkR2ZgXY7rBcqkA",
  "key22": "3kgvdfWAREXYgfHpa94vGoWBqeVomggZp7R9gBqr28eJr1Q3k1MPsipxed9mMTTz7gMswy2rcdZHxaXdxy78DZ9b",
  "key23": "5NeED1QtGWiq1FcZatxok7NMT6FskdY6v5rfBVZsN2wXvimA6ddaRm1sskeCFrgAQWtFkmkGMVmpyJi8NuwHDtX2",
  "key24": "2anL8oHomnPMYpGoC1LpC2rupX7sBnBWAjxBPBQdfj7iKHut4e1TjcX8yfgAW5s3CwCa1kYQFXU5TTJkov1cTC9f",
  "key25": "3D8uxNakjBqrE2rRTfzJDdff8svYNpfEgbP7JTnoeXeWtR8CyMD7toNrBcDL8us7npzrJugT1s4MfHerqPUmGCNc",
  "key26": "2AZpcix9o8auVr8SvYpY37wQBTFc5L61DDaQUWUnr6ZFVD88aLvGk1NgNwYuadRCBuQAwchHkDvfmBKWz1r8XYip",
  "key27": "64wbMUtoTo7W9ouWYNtcGqpe3KgGq9tMkh4Yf5cFQCGsWf8VTErNe2x1DwVFft5Lv1YoP8ayzN7F5JfVZ35yPfVz",
  "key28": "2SPAr1XZsoigiWpChNecnFXquPMMFsGbuLNK5vMhCgvFi3WutSscAUu2Gdy1R2WGYf6m5p7SaGYGmXkcFV5KmAjv",
  "key29": "4TFqdMLoRXBQC7e41rkT9dJtxtX7ZMRVXerpJcZhYm7SnVovoU4zwBnVzKNqxyU4tMSAAenJJJWsUQYAT2ot2Nss",
  "key30": "jHPVx3LFaZ2n8mHXrmpYH2x2KfTxu6bAsndA2PY5ncje85Zi3jkpdCKDMPnJ4WUg3LcvdReXWKD6UUWJcC7KhMz",
  "key31": "3uPtrD5GzqqFEaVXhqM66s13pVqu1wYx2QTZYyeCVg8khEKr2pSXHMAoRohS19qgKYbdPjcssuoBdJovkmkmfxHV",
  "key32": "5PuGgdwn15j71a7n5YFaXPddKqfGjDyrmGjoc8uZjKGYfDWtdK5YiSpY42jrj9FoLeCu4izTjzp8xLNjqW5HZ67r",
  "key33": "5YrXxihdJw6hoBHqF3xcr1w1RRpZiLpCkqKqbP7rwXhCPGLSjsHbJZZ9r6azMKo6F4djcZSqdpquz863t4eWxdmE",
  "key34": "5s1DfbFCQDT4ZvUyw44TzvYTYwioTNoh39nGu17AWRFqAZwf7zHftMa2HFg8mKLq36ptoQ1hEWsDhWR7VsDLMakf",
  "key35": "WHmRw6EwuZkuWDw9CcYGYd3eStUW1jQ8bzi3gLBDc8WYaGUpz2DXanWatMU9h7sCGNCSXwqWYwcrjrtqrJcKFhA",
  "key36": "2wJMDX3doPfCKJeJrKqwYCoBjVsUTR6CtQ6oH8DGrEcjsJwN8uWvDHKKuGQFiikQUyYcCFdiqmnz3s8pd2ypDbs",
  "key37": "31PsEHqLVhFBp5iEGp1XWfdCUrivDEJECEiobA96rVz3Bk6HNmmxx16Gtx3wVWcq8g3cgKpi8Kx65HxBks9kbZRb",
  "key38": "tGW9NAh6zVs9vqonfsncW3tJcXYETP2UKtGYArRBQemeCqJPAWY1pecd52QRuSahnFzRLuwZJ7U2zfVRQm8EiGP",
  "key39": "5aqVvm6i2DtfrpoAwmCMgLuXLwFxdcVccyRc4gdRgLPRyf67jEeoMxuNipqTmWSiRncdGBerUbntHWcogjawMt1q"
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
