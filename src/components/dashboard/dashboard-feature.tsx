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
    "2zMXu7gyi6uy9atPkR8FG38CRmDFgonCV8DFxPTaYsaENDQQtfAWzEEDipKis7o4W2ZNP6mwZEdXPuhQReTNDhkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goa4mrcwHv5qxpjvr3Svzzw1hiL1z49YbKUb36ndwo9tTtU3sWqrVL35TEo8RcxqEfhReN1ueizP4R6C6kjKeFn",
  "key1": "3ufkrnLdwyGuXLHNrgGPgEA5HtzHFcRzY5pQfrsj7i4zi8kuMLa3LSyUXhAVGaeLqVgWmEA3Fw4ApcQiWSZipMgT",
  "key2": "NbTR4w2gCiRQ8X8BTucE37xvKioQabSTo8je9beCRsQs3ZuLGThkt4NHoPFAC3Mb9DQCZsxUjZYzK6YhQ1dS4dq",
  "key3": "3uXpyxc3MN7Spcfbg8cdneWWmorW2eE2zXBnY7tLmdvnLTe9CBys7V8EVp8UGVJDCHJyN7tNkm3CLV6gP7Nn77nL",
  "key4": "5u4RRaufhYy8Tz8sxbogDMZ2r1P6nQYMCszwjEs1xWzUUhkhCJmRYYNNcCURiPZ2S6Jxvc31EvavqqwWQn8uwLd",
  "key5": "2MhD2Na6iq9YuuAdWiwos6ckGCgyhHmb5HVZYH7vxuDC5V9PdRV1MhHZdMdCzLy5D8wUHDMAumSAcUgtRTJ19r3J",
  "key6": "8Mp63TLcHvmGddu84hWUhV5KoieZLdXCuWhubx5TrZUqT3p8dcL5u9D8mPQb9qd3kj2cQZdwcnceVESnxjH2UQ6",
  "key7": "3txsXbtm9FC67Yhm8Le9qnP6o81JVizAxLAJrW57pw38hsVzdQ9N5rjCJquRyccf4z8e9c2rsrSuMY87pnjDnNXK",
  "key8": "2kbfmUx7y9Gg5HCx9Yia65MGwVCnHzQ6iYpqqF28fEhyhEo2weSaktRFBWSLs7z1XY5GLpte6eRrrnyY5ED3ocuc",
  "key9": "3TjR4bTVDcQxud1xS15UCT4JN8Z5Zh24V9jMUnJgRoGRY4Kuvib8Q79qPvgMgjAfN5DpGcT6LAeA8msgfnmiquCn",
  "key10": "2mgimJNkCeyvKnBNRbdtBrjcdfuHsdCdySqfSoJCX8rJm9dtXP62TD1TAfRjujj2iz24LnTwLLcYvZUuRKhSM8Xs",
  "key11": "5QB7jvWdvLbJPjdUTmh6zemQAXiUPdMgLhbFEaKctcAaF7xUdvnnVTwS6fpCAantod35ub5FYREWsbxJAABRhe8N",
  "key12": "51CnQhaemKca5DPMJ11uc65Lgsrvo3ceh23yf83gSKPHMayrkgyAdPURCwyiJK3zRvqzUhu8kBQYZQ5U1nPd9xXd",
  "key13": "5uzDoiv9UUbLtvmYAaRan9SHnYdGTQkSh7GZ6JYVjDWgnMrejmbg4meo7gBx16jquJTz4nWUMfn5LhLHW6p191kq",
  "key14": "xjxHbF5b6ajHzF85BoYLfBPQrQgDsNmWqZqaCUCbmyRPKwEBEbiZMkjTbK7MTywj8ZdX5Mn1xvYq6FEre9UUysT",
  "key15": "2kJu4y3bajyYCFz6ZNUmXSv3Jez1AP4ESz4LEww5trgiHkGdmhf6XyXwtLfWkAAhr5nEYb16oDNbKjgLBeZ8FDgT",
  "key16": "5Kb1LSDpxRM8AhMZNuAF9yGKHkuTKf2DtsRFgvSrwuwALqNadnobzXUqqrkpSXK7dyaWD1UXwGMrqEkXTbpLrdsS",
  "key17": "2WnK9rT9j2c9CbgYFUqNebJdMz8EpYDFFndHkb7ZmAi2mpgQ3cpbLZCPPTH63YCtVgnjGa3PwHt8B9QHj7wtB7K9",
  "key18": "3ffg4pmaHdtEcnbiXgxwWpxSNhpU6XcTTM7MjbrF7XCYXsXjZzENndeRQyfPNaBv5mRToBsyAHo5GXNv727BFrdc",
  "key19": "3uQ9z9qj5bVCcng3aAuXtvAxjnVPZrGLisxqcaqsWG1uUmge4WUD57UyP6BZE39swnmeev2SkfguSKkQKAYbdwaA",
  "key20": "3dj7x28xMzeCqB3q7sneo3hupWzdhQws9KvfkCgBnv8wK3LR9U13DdRpzqczGpzsikvgjsMc4NrhMnKns8B3Qud5",
  "key21": "2bX9DXGJWo8G9TH6hEd8Wc3VaTPQrvfxYcm7ahScyQTtXPooYiLooLX8GeeJR42SifKsPnvhGFH4nvDLRzTFppDN",
  "key22": "pYF5gquVjykfG7xCn2NmPcRK7fQU4XJFvQQn2Kpmku2Kmnss2BpBK9QpyyHnWfJAk6Lsm9TA1m1Wrqa11tc4YwP",
  "key23": "3jwq85U5ugZi1azwzcafRw5sgR5xoeY8iJdYPdxGHTBAw2dbXNvubEMzZ6Vn17GWRHBK8vxu9hrh4KtH81WBLXv8",
  "key24": "67bMSLC43NYRu23RcHuz6qdhAWDB26iH1uFQCVPsN9pXNdzGBaYFx3ruw5BtRc69HEx5cNbzNhKzouXXPFixeu4p",
  "key25": "3Axz3LoBqqXd7GrEDhYewsMQh6jCfGRqKyJ1J9wNAupK82n5THCjruJgyctzZKgNak4sFzoT5oQdBqnwusgr7ZJG",
  "key26": "JpYkGuRYSAEydf6gkYCnRXNMBJmS2zg3iaSwreDRYZBi8kXhTnPjAoG6DHRPsqmwRcPvSnHH3nqoJGskJaSCcMp",
  "key27": "4pmjN3N1LMEGFPahVTSHcrxTRLKzbnfX5YhxVna9CHNSiP9GMvQw2Nd5RMUHMUnk7oa5f1BoEAcmzUwopnGC28qL",
  "key28": "QF9xEFwdPgjucH2cguZHXbJQJ4zRUHm1mTwj9bBx9n6B3qym7o8QJX3Zb6jHG6duLJ3f8AwrZ6xHaEAPv3cSf9w",
  "key29": "3kqR9qkPv7UTktK6FRzBtQwJtqVXpDJnehXk6B2SyTSeDxvTEQDhf39AMwThqbKVrXzn8U18oQDgmNix7TMZS1ds",
  "key30": "xDKtTKJ8ZzcEACxWScuXXwodMZxZ2BoKr3ro7vKAR5GVumw5NR87PA3KscS4UffZ3HgK8X9ikrNvG2vJ7KaH2je",
  "key31": "rQbvvqLaL6s9GRv8xjif4i9HejRk6h1NZ1Ga3zCoiNnsFvUrMrt3V4pPAmYnKYzorSJnJt7xs3XjKmDwBFC5TZZ",
  "key32": "4tjwNccViE9ZR2V35CPApaUc7BFeam3Rf5ADvigZ63Y3WxuQE7CCoYwZn3rqtMbVSTEKrRZn8Yb693dAPkNWuUPJ"
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
