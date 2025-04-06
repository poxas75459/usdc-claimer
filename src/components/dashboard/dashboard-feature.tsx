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
    "4nPAHhR49jxwiGEuKc5H4YWocL29RDgCEHLvocss2F2fb6pjhXevA54eaE61dGVfYZXAG4hPSHgFU44WCE2pZKT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61PyKSqhe43SS8yAHRdjVBZ6VStGU4bCPpPNyAWPca82c75nbmkySkqatJfW5nFn5tuL4Y6jQQpNhrSoGJb5G6wt",
  "key1": "3Zp8g1SPcyZ8agtVuJD22bWte5jGVcQ9x7bq8Msr9YBsR1PFbxUm9PSbxd9eou41dfYEMJy2RnEyRyEWhXW9cr31",
  "key2": "StfmFz8bhxKrm4q6LpwAMwNvWojPAjzf2Q1AzxBJG7RM2cfsf6zJQ74MFtDq9PCS2xXH9QqF7Jp6WFr9jG9a9pJ",
  "key3": "Fp4XGY4vVw2rzQ5Ss6o6Qg5cPTLtDS9jQaScFxZag47xasyxAyrUu7HUKdMyoqLNeFuGq4JKmy9Zbr1BBVhJDzc",
  "key4": "5eB8mHbURRFMLjvzu3Qj7z4EYfkdJhUrzDh7pDEVqWppu65TuqkNLyoLUSQaGsLeJA9bEo4RzJxfDSZjFavYkJwD",
  "key5": "2r7D6mAQXXxPuVDrtK89ng2VWBxhCGupLrgGwYGhMZB7D4U3sHY4jSb6S3rsmividTjVzfNF5SBZythL5zvZ6UCv",
  "key6": "2KfFdFszVFBytmpFHLYq4My142MDfhBmgeNQ6F4FabVR8iAbk69hTF2icdPMeVzt6UtxYFkck2xps8yYe3JhwCQK",
  "key7": "5faV3ysFh9nAzSppDq9L7PHh2nFkUoxHA1miVCxbppx2xngurn5uYKTq3KiBtKkegdm67N8izdWi3ejy5RNhKQ72",
  "key8": "2KXGJWuqvcFXSY8eM6oyh7cHsrfLKHYJUrPpinojn5eSwuzG2RS8FoVkW7qESxi8pVm1ZKwzn9qLkuAHj3X1sn98",
  "key9": "5SATDWh5nnJTfihg8NTnx2SP8Ax79We8JqZsxnpdUZtqRLR6inVmSNTMxKPHAdz6DyyTAAp8LEKXxuJ3xChL3f76",
  "key10": "536P1ucNKhB9WhifwNkjTAswMouztE94f1EMD3DhHqmzQmy8WmBsBTZgbaZyazne3KsP1AnbzedX7442cJ3Z7pSK",
  "key11": "33ZiGxrz1up3ibQTBnynWsqUb9JydZNncTu1vGHrs7Eov8ZxekQxiUK4SDFX8tSGZjAL2zjYgxdLYdaUQhMd16nh",
  "key12": "2v1pyZWMj7YvbqJYbYMEVsAfaQKLP9ZfsaNn2dnvTWRQpc83n99uSwX8SzP2xqchZUET3n1w7PyeYnzJAVAp6fvu",
  "key13": "4B2nBtbeKnDJCyvWZrZoPuwLnriGtNjWLAR2hBicmEThpG41Txtpc1ZzFkBYYp9sWr6NhNKRseGPrEibWUcpu2us",
  "key14": "5md8xvWfm6WW9skFyPaerPa18v1KycbsiUkyAWdKWe3vKfb6o4unjLGb5ytC7UX6yXbyuacejMru25ohZj5rEpUN",
  "key15": "67ohpYmxd6EQo77MkN5GioX22emDhCymU6bioSZw2cubj7TqcgUsin1id1qna5gZFs4M1AwrLM8RRAha4U68R6HE",
  "key16": "53JkAV2TttT1HnEUgZkhaEaUyuByrMNHM4wTrdpfNMXVUvcXoaXcCGnWcuo3cLGhd7cbcEAeThVa4jv6R5Tf4D1h",
  "key17": "2sg8nbW5ibjbV5XMa4YLTxahvtMguFN5taeViKsxiZxqo1WZmg7mJgBnKJ9bDYM7TLpsDHZstdTZjRQ91hrHtA6M",
  "key18": "65FdBhhVEEvwbRioKh6Vg3ujYZ874P2hsK1jnnmktyodzKGVhb3ZM8DjeuQ9w47BgevRuHCUo6eVMmPVEwhGNunf",
  "key19": "58PqtxQAohcd7MQVWTr3gsUcrdcMGhqctpLwkqtZ3HFLGiWjzHtnorHmtGQE12GqZhR4ubztdGPowewmcKnV8LND",
  "key20": "8bx53PNvFBoAugMZdXMwmFLfJiDGumHEWc6o6zLzWL8aTDbAziC6tpgp12TNDzPD7shk1ko7vcjV6pstb2nMSrT",
  "key21": "3RXTeV1dY1tG1LPvd8RBPf7VEsnKKUQt4hSkr72P5Qqd2ELeYMQHE4qPnJUgsJfJQTdW2ghpS1Y3VuaZKnzbnMmC",
  "key22": "q7ELUbUgCwVZDQrrQceokfkvjX7T2efnsMCntVaWbB9v58JWHqdc9fih5s9vyACgz6FHEESj8X2iyJXtABpGs9v",
  "key23": "hxqCkUTUQwUof28pLojsvsSKSJhgAgAHekrwwbS6iZECz1DbJYEcXixW3HPz99RLcjWG3BSwwruMM6hPX3YY1DH",
  "key24": "63FhVu7e3KGKBU5bpc42iMo1TSNGPA55fM3YdxQPmbRYWw1zcwbZ5yaDREPk6mwHkxYy177diQpTJAiFJ7KsmBRn",
  "key25": "URymsVNJxRUgynZqy5CfGYpvN1pYHp2GJg28qaANo62uzejLK7fuad8MqmETTLuUSmNoGvJwJ4uLYNwagjxZ4Do",
  "key26": "nAhw6B5SpwALqxTWeM49M4WjGq7JA4asSdfx3FpLPGGGgo2FZJmsYxwpc9yPffXKMUwggUVDdMH133oTEwtSdUS",
  "key27": "24ogw2fkCrJNvpN8TNCMr87hxeZ2gWurC4wB1yHrkdJtQcGuiGF4PbZkh4spTphE91kGMEnsx8kGeai59y84F3aP",
  "key28": "2B86kQRyLRDewKSM72eQGonbCUSM68JcYUT5MXo2PeMv76fccNnKUYpyRC2E35FQHMTSWCkTvQf3GPBsyrqmvMmD",
  "key29": "xhEDepNN4NjYXimYuyKDEam4Ebn9sXMkXN8h1iWghJA1kyjuP3o3XmNLEMeijrNaKvKHMMja9ug7ZNMNpioEJVq",
  "key30": "nc5YVXADeoPm6rXGjbNgtPF1gbh46TL71YvcB2aLvJWhE25ifsj4Yeysa51gRL2czckv4rqKqeiNUFAikoMwS37",
  "key31": "5RCTFeD7qwi3ZSaX44cnNCHJ4usG49b2SSzjRhqKJdXMK5Xjv33TKqSbKAwjj6mfdHmvQBiyNNq1VupkrvUWhWQ1"
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
