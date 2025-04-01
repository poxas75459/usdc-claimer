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
    "2wrnbadghgGfbfBgS27ZsBQeXTLjVzzo87rvanAYdeDmxRCDgq5s9rypKkRaXW2t4q4UoAV97Hu8WmkVWBWZ3rEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vo9EEyvxxvVcJmKbMi9giC3mEzWpqsGacjvYfzX2GZyzEdeVnUhjx6zAJ3ZGmHFNEpycVqDKGjQuu1ZChMNF1eP",
  "key1": "MdpGEttLXfVauAW2qeGrGC8jaT2XzuN8yFBPoAfjZnec9ueTC2GTE7wNyRXAiLwKQhawKdcVkdsLcLDBY88xoyN",
  "key2": "2r6qPsWfRBuPR5VRXuNgzDg1RqVruVWPJB1iiQph15XFwpfCWfeZuVWdoDhUxcYRU5tvkxZ13LJNHbwMgLv2dtGF",
  "key3": "5JaEgDpDm85FDGmd4R6hLDuewEfTPspNdcyiWxEyhJfuwtUa7NXRsySYgwUfre1UQb1UpKhu5bWj5BFiohsbVCzd",
  "key4": "2Wm8TatBcnitbZkvaP2wowKHhTAwyya9EeJDUVHTZWJ91K6LGotWPHY9vCzMzhSpAL7N6znaH2kvQvDnjFPdYzJc",
  "key5": "46cQj3vsGwcMEmxLi6nRCVnUBEpe4QafGqXkgxYZt932iU2SYL13bExGsjojQZiTf5E5QKrUuNneSj3X4HNDEcw2",
  "key6": "4ZztHVUqnuWGg566PujFvN9b4riMzRNFYjVbmm5p2bTBxsjDy8y9QbwpWQPVnxYKGRMyYbkQmmtLiA1Vg3NeMEks",
  "key7": "64EbQR7zMpjpW7D1wrrgfQqeaFXxxYjmWsJq4DJVfc82jAbBF2tModJVWQxMpyDHsGPG6LL9KHBmMgMwaDN2sWY4",
  "key8": "5FqikoX2oESVsf2p8VAadjRnVaF6scKAtKSMKNXE7iQ6kY9huiHJzYZJP9QRy6D8rcCRB9A43czWEVDVGDW3TVPP",
  "key9": "5YFH2uBtG1iY4KMYQz7TRqPBoBgQ6xHmgbHn1aqHbPWetojx7FeVU5v4tcU9idjmLQcmLrrQ4iq2omT6w59EfSaT",
  "key10": "2WtfaqCL9Va16pCTmtfmDKigjLZz1yKnRXb8hzvsPiyrVLgyakMNRGL4YcwUPRA5vPTWHQXMKQr7AcM4xwjqteEB",
  "key11": "29pnHCqnaiRwi9o8JpzoKcWQ24EJfE7G6WwfFA4j9tUWwpNgoxsAmna8kSF8YH9m4dKq6EJ4YUivGvFfbVkqERYk",
  "key12": "2ZrSbfanuzAr36FhxaLFE3Ls9keqtHXxa7EopsypjkGwqQ8wjcciVkW46AGkGXzCd6RpYhr4EtuddHdmLdzwQE4M",
  "key13": "2YD99sMZWhTHv3R1xGgRfy6WZTgYVKHKjnxm9tnVhj4MhTc2aqSv9d4BDKJowbDnXVDF1YZBKcL4xgr4yLvU5vZ8",
  "key14": "3bmmC5HoyySdygPqbh1YX338JuXWVt56pyRmiDKVo15jr2ihawcFqc5BBHoLdKr4jGiJ8osumTrUZPdcyiHN2wBw",
  "key15": "3DNR9kpRYWzCGMWdPFEqbeysbACBEVXeu4dbp98Mqy9KHUb4XmpkuAmLGLb4U3tdTYTSegsER9c7RwBx6o1FNfus",
  "key16": "3MPwf384tJSY9ATt4a92AGm7QhHisG2wGg31JnGBvZqpoWX19YfV5wc8zGgxYJhRcq98pnPyrFt3bLcjcJ5J6gmW",
  "key17": "b8YzvhgUvGdbRs9DLv6DVrKjSU5RyuMGdUuPbDbPDAsvLmg5851ekZHVSToDxicSJJBXv9zXoLsAiv4WoRcqkfy",
  "key18": "4sTPHh5zsNssxr5d3owcDGZQ5tuAcpnJXFy3fCUUAjJVhDcMgJ2Swaub8PadLvbM4BWJ5C57Dstv2tEeXo6H2Are",
  "key19": "3QMbCM4qLWm4VpSd45kEovPAcGDTHb3SsgYmS2dXxrE39RdmfZyk5UQD41R11NwQMbyeNrR4yCa6bRhyGhvmVauN",
  "key20": "4AjynSs1XRBuzTRHbsbVsiMwwq7cjBvCpTwcjFBaNGDDUFejjEznqpoSrG6zockxSqxqPfPkxmVBQWWExfXu7SdA",
  "key21": "26yL3fwkPe9s2Nf8F29ujRBJc4zqs5gximcpaUMpRnJ4ujF9Z3eK5hQLTxJC6ezP3Vf9EQgXatuZs8wvAUwNr2Ct",
  "key22": "5sKe7mYwzAxJKaFBrgtayq3qB48QFir2C67fzNkhR5CwRzUW92rzmf7HYFJusGULUBRFnuycZKuQgAVsw7pqy1bs",
  "key23": "CE4PtyKeeXPKK4tmKvGh5NoB7ziabwTYp7vSk1TP5dgqdyK2D5tqdVufaZLQY9rwFd1na37Xeuon1bWCbx1swvQ",
  "key24": "66nsTo3ZGqhJhchKrSbtYbtwHBw8rMgnyFkHn3m3igvAPE5qmJrnhb4oTEjsgotjtFyXdBK9GEFjUs4nTuQ7PHPT",
  "key25": "5B34MpHHzW9AFgjKtLFVSKPgJRd9Vsp5wfCV5Xhacjyt5Gf2WXVracQnFPddgcViutfnNE5awk32H2DuszT8icA1",
  "key26": "2Rc9hu657NzxchbJAoS7rNjWjPBFLNw9jAMBaXX6GyeaZPuFXQyKN22465uM4Wh2qg91E6gWvL38gNFTZhVaDUWz",
  "key27": "4TU8dakDH5SfV6DBYcpQRAKFNj62G5QYtM874WyHqJSq9xQvGT3eQFHsRcM1HArpSpmpw9GnZ8EnYj5sbF3ts4ns",
  "key28": "33WEL6cVNK4NJMvgv2j6dp73XtZ1neuZBnFLAwjdS1sF22rghv7Qa1GuXobbKM9VSzBnVBU5wqX7bw4zUF8SaeEQ"
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
