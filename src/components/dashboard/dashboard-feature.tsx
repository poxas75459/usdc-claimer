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
    "3n8XHbMCpc2PZsbeqbEEzVb3hC3fDEfRYXBn1odzKBufv1iPHujFj6UirqUKsiLPNrGTx7B9HxGwsixSvhqicXHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ejz1GrJe1DK1knoCTebp9JGdYS9ErJsdStYnEjSh1hChZsUniMTNsYWAgRvzQiM8pEvnXZMFrZrXZrZtmzuMW8T",
  "key1": "2twtUeGHjBBW1zAArPWwf6EgAhQWyoqHEdAz8mU8udAPnJTSP9NKwDefk8bU2H8FLZivwzCr7YvS9tPUizsRyPQK",
  "key2": "3TYb53cxqNX1V4MUeYcLvKFYDeeZmAVVZTCXjRigJ3zycnLsN2MxTCRzeVjxri7PZvekLWYbfKXVLgAN5EBUBEHt",
  "key3": "41Qzgt3ddY5bsoDJPsdXDfy3ShFBbYEMoSdnJKPk1sfxLMRWeBhhoAgnrxdaTm3HRsLVWMEs9Tnaf5L4w7kzdCSW",
  "key4": "2qQteBn5sbm9MPUN7Cm4mY8MJW8VrxYS4J5yYj4H3vY8GwuuArpsdhbyTSkKhQdQJVfUXHngBXHR745PdnkWq444",
  "key5": "4UGcmgb5W2QE7u9u6pAZd2YnkEyK44fUMtYhuPg2owQ6QoPQ4P6voF7w7ChAvhNEjVghHmtqYdoX8UBCB4ZoFdin",
  "key6": "2pt9TmqGCcm7zFWQtoBE47KX7uufL9uSzbu8P7jzhDZk5UALsgzjiASozJAbjLB9qLN93BK64H7eeW1cLfXNAcrX",
  "key7": "2ThPkvDkrGiSD6MF5SFDX5H2msmpAKHzpmGuSHqffYNmhqFQjCNYtRKzHDd7fap2de8JFzS2wa7fwDmCbsk68xyw",
  "key8": "2m1Hbg6tWhKYGBn9KWHo63HktT9r4Pmn5yRnbhpeLCXkx2uaeszBBMHXouNc5DzgFV2uMxWDdQpq4ndG5aMfDMXa",
  "key9": "2X1rKfnYM87EUjBSCMcQWBoxENy11peYtW8cmFkcW3qzdH11YyXnemiKQokSA3jJFjvWj2h6PwA3BrsU9L5pUYyb",
  "key10": "483kjM8SCbgtSopvMRULY6CEhzpVPwpD7uxLo61nUisTUK8Ytsb1zHm9iVeKoJQdfLQj8KmKurLkrBHS5VYF62jz",
  "key11": "Pe4FBPjcnxf8f4ZmskToTuEY4gYRmkf6iQq8CYh2GrcBrP23qo6gFuNYohYWqQ5yM2qg35YP6VhJy9GrfQqSmUf",
  "key12": "2xSmCT9c3HcruCL9SgJMjCiHUQC3NVb1C6FwowRHbGoyBME75Fd6DCmjMPpbvUC99DnTpeikBZp3ZGBS6vABUeJK",
  "key13": "5KMWcEzGhkLtsv7zincNd7nk4jKrP4XbhAiV6tLPfan9T32TcqQcnCAQMYKimVTi1NvXfD71XYUGEvMKM3LbQbBT",
  "key14": "3mxqDBaLkgy8gFX4ndBaroefQrs48c9NLgBCj9zfaPEACCciSav7GE8NnUYUDAMMJw9TEL21xfRQNDpPY1dWFD2J",
  "key15": "2CLd6ATsGf3cQbbu9QKbeFMNZRYhT1eXbjahzBFneqRVgweo5rmwwfbWkCBRaPPpodgaYi3WQ8uPjBX2uQ7VfUCM",
  "key16": "2AV5weK2FVK8g2J1zJdSR1w29px9ifrxKwSTYdKDMcAjniJ1CSaexHRi4YZ6KmMPk4Q9Py5iCj8vym23j3UrxARj",
  "key17": "4BiibGq3V978fCWPJFc5Pzjc3iMFkGuzVUALve5By8f2Xit6htCMRnCstd8J8pRx5CdQ17v2YwQ1dVys83bzWJNh",
  "key18": "NeqRD33RT76rkhFWBQngHwV1Y76ppUEWyRU7VGtZZfDpE9cqMVBtoo2SLjyK4WUsH9UA9bg5jiCybL8LA6yKBSY",
  "key19": "Q1tCJ5YsUteM2tUFdMxN2zsgStvFYVpiW2sPyn81dFxUENwkJBaJzQqGNYJedGctyQJ6me9eQjqxPEfPZWWXVrU",
  "key20": "4bv6chSdjD2CqKDnTb1dAnFGzTU986Gq2FUpCNpomUhjbvyaAFc1CTCdQ9zq8gyJsuKGxym815oT37xw7E9DK3Uz",
  "key21": "4bM61BQJuMS22PWCtrDRCabPjAxkqyPXpKw2QEK9F2dD3rTgwAjGhMWDjxukDDRjHdj6e8AvBLi86AynszLGqYKg",
  "key22": "3UpCo1RZwh2gqeTuZw89G97bzUSvL8Xo72juvmBkqwSoQxmTixKigYa58HomUHYvNXwXXsgEgKJTxCei7ANhjMfB",
  "key23": "2VcYcMCdcaopJSz8SxiqtWCM7wUHH33czh4FDgEUjpYEG9qWGBBvTdp8u3TYjj3UkAWftSizHtuF9gjmr8UJ2Z6",
  "key24": "7pUr1XeoxugxtfJ3DPertAYSPVwfFHKzg2tQkFzzwz5LkgcXrjBLpJmNeRbJunPaUoB7dB51CJC7RJmfcYVdwBe",
  "key25": "i1i2GxJARqeKQ4eKY44oDKv5SKti3dWNfNLW9n4GQdXMkFxAi2byrWjXcsAw4tzAigFq5GZyedswdXGFWdm7baB",
  "key26": "2zon9bGGuUqYykKjP5iZPh5UYngicjdWtPN9rtkf4G6kJnYU7QsQMBLVxGZHWZmrS6ensznuJDNbZ76nnezU9hxf",
  "key27": "3zEKjQEwMdSfKC1VsgAcm8YAUoUzoXoWd9NGBkrUNj1qaMXuJth85oETaRZLmjrDosqJW9ZmJsbsSiEVcoqRZ2vX",
  "key28": "3zNu3iu4FhDRL4JtuBYS5gvqARiX8X3teewWLxpr3TPFUMN73aUTeDBVVww15drauaKAqVLJbLeQirbapAHFgwVp",
  "key29": "3g76ifQziAwvyYdQGMhUYmFysA3wTGiE3nBpMGwMTr21XyTfBwNtp9737dsCx9oEURHeeqKsEgkrYgDc2Th8GTsd",
  "key30": "2c9v3HM4Yfz1opCPacNqQuu8ZxjL7fmYQFB4AXTzdHQEtePpZTz2oNfojPRW7z5qMMsWyzB5dCbro9Ff61LSdwYu",
  "key31": "26Y62zfjWB7DGddFQSF6DvotLsccv6PAgBVuaXyxdHc2gg1Sv2q1HTGxqqB28C4B9NuSJExzPCUMEka55ERwsvY6",
  "key32": "3E7ArVxjv9ZHhLY25RDaKQiRzupawiWcVpyrSzFRizZQjGSKLDUEjqH4q7QVpwQe5yRQMiUhjBMGCm9zMaH2kkxf",
  "key33": "4ZKKZ1uapuKD2kvKi627kT5Qx1YXgSBCzzR1Es3W1f2nGBf2GX9d8xtM7VdJT7SqfPtQ5BcPa4qoRssoVJmzXQuQ",
  "key34": "4L3Si8ukPHAuMMWzwTKUZ8zMLrMw2GwoR4fT3HF4q84DFEabWNvyuS4ezUCZ9j4m7yRTDLjtvtZARc3myWqmzNan",
  "key35": "FSr5Y6EvuGmQWT5wZz9RULL8xKqSYBMUxCx7HLXjQou7fm8nYhoBDYaXmjfsaExDefLVmp3bJXkBC5FUR5sJF4f",
  "key36": "28CmVyA6NP9m6nAEuMnwu4zxqDAkd9yyqYN5TAcHvaYaKUvTXeP2hxeiFNg3ejeBWqsN3AWS6fwmrDFKZs36HaEN",
  "key37": "5Jk31KQwoFFZXPRMudWTcc7ecEjrrBWnoUzF9ffUtnvbwvxuGDNbccDtova5BfP3ZCNFiKbahH5RNHG717MzSAAo",
  "key38": "3ZJRL4LxZjAnnPgu24ngobsW45K1HJpbKtvh9a65RiYwfYK6L2J1rmvuqKesfdFqvbDUkR6R5i9a1oofH6fKHmdJ",
  "key39": "3iwdKPt18yeE7ayEPWnuR4iZAeuLnUAvfoiV8nrH2EZNH4smBHJ7RoHemxUX78LxeaBqqusPGZKhDy5BUpv8Bk4K",
  "key40": "3WpPZUrWPkkws5ZhHXWvZuKrwFzDXN7U4Nvyxuohb82DJfCMKv7Zndc8cQQDHjh9ZA9GWk1nZ8JgXwQgcLjHWcV1",
  "key41": "2LQeC6EcRogaTsBJRJ2Ct1ke91i8nJdD9C7xHAWrZek29JuqBzFGLtNmLMmNH76PSBGn7tLSYvKHjcR5vaapxv7u",
  "key42": "VnqebBgtqPdp5NFqWuHUmxH6JqDyuEGDLyBQboJ9jTeVeYES6FCH34suBXSskF7KqhwU5tktDL8ExhNW1eGxN6N",
  "key43": "5frxMHRk45Fpf6vHxzo1eXoPUxSJJraLSbSqfJDaSqEHZSJkafQuREAau7HN3FCeWivTMqTi7vncUVgMmdWKsqMq",
  "key44": "3L1cNTST1gE2tPatznjb7NBj2vvFcLgWgTPa6MEgk93dhnrLrjbu9mmwb2yvXikxpX4hdTYaXkkoSWtdGoxBw8XD"
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
