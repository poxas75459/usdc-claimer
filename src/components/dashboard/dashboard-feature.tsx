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
    "4crywGCT7Q8WqkeWX9HcdhP7CfUYKduEqzUQD8HjzFCQ6qpPiXzqkEnr9DsqGCK7R2SGFqufx3bmomTeLaLbRTrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKTLWuyCotWzVi8NKqFbCrJ5tYgqUcuYzyFGTXqGbcC8FADMArJAfYUBSUoecuGK2rR7pbfiFpXPzSXYMhMGMqn",
  "key1": "3kyaKHsH2R6iYhYRUx8GvCVrCpTa1oVGjozGEKFEApkGcaG52J14513G8QVCW4EHhqNy92ExjMSxNU1BTji8sxdc",
  "key2": "3B79FRndHGPhe3RrVoLDM8zqvbjLDi5CzsRYJcisCBjFSNKwAkS8QPtTRQtiQ7wTM6mz7fwRY3H4NuFDgACaJzSS",
  "key3": "31e48vHkqgLm1jVWmDPcU6m4mVSKkea81cuuvAaWdCdC7Lv2xQuDjGCn8H5KVZVaDmfsD65ck6jMVc69vQsZ85Cv",
  "key4": "3wJh982tu9HLdjuvv23VGMcscxzcYWjciA5kFj7uxg1UsPw2zd8BGNMpXX7iaxyStqFQWgarUCJ4LdDropuvx8S8",
  "key5": "25HX57yqHijDxxEU8iMRFR73zArXksgurqNojns4oy1yupPD2CEpuBBuNqkMzQz95Chz8VxZWUTjPRDYNELbr5uh",
  "key6": "48rr9oBmVMtJgxs9qmYGkNNuwqCsZAKxcqVv2619RpSfdwLdwWa3e65Ph6ZK9XAF6sftZis34RemzHNTsqP8n6dz",
  "key7": "3EnoGRjUBvsWunpKoMzQTNoEoKu66KN7Fr9UJam3A4dxSLZU6cPrjz2k7kZQaWbNPXJ2pbGwND2yqVPu9owXZrAN",
  "key8": "3V4D9NiP6U3fPGEJQkGZJ6BUFG4HNhmzMcZw2uUzygKjYhSxA3JGQEYaGU2mCnBak3eHWYDNuph7KFDJbHsWbMPK",
  "key9": "4dsSHnj2RKyRpPiLVSB2EL1VeoVKJQ8mgPiyZGeREGfgwHpLtCUdeaQSxaG8LE2vfYwdkhRnfHx5MojaZvwvaaE3",
  "key10": "3JXbks25WbDirHQXH1UFZkwRVq6UcSTSaCbNbCYu3sbgZVjyjGQhWgXGZRxE8wzJtQSJ6wEemYg1JBxCm6FhEyo2",
  "key11": "3oiSxHZsxSDe3HwEhpRpUeQCnAynhgFyjnGY148aHirTEAtrwJhbMKcGa836vjyVXjCaeWcmJ8mX9SA7by2wbQMX",
  "key12": "4wTduiPj4oicpj7RHGDLfpreFyLuUzsGVwLopCLUC6HdZn1Fq6N7rg8bZNK7hccM7m7DvQLXrEAVRSEUwFNS32nF",
  "key13": "39rsWbgmLrmAhcBiMt7AaUXZh8py5eN95c6XUnEZZNcTWD3FjF9D2Eou95o2irTMTJ81AomHoy1HtDtfNYbprvGv",
  "key14": "5RycTkjw2pc9xzoDdVDyyDBytdJP3tszJ22XZV4QJKKHjHhnNFHbaY8KuPVaQRqAMZjjySNCXEykds6mKsyowAPY",
  "key15": "4eb3ptw5CmrcDhqx5VVcvt24HCH3WFHy6UcxUa7JkXQs195WmsHyzfQdxshE29J9GEXYkyaEd8TWqquSgoqrbcb",
  "key16": "63wNJ8X6iBwhSC1RNJtCT5JaqAgMHzoiMgSFA5tFRKwLWVhL6HZ4vfH57TM1sM25QUKA7vPMtQUxv6zwgVkNb5wv",
  "key17": "45RS1xapDHUfssLTTtzNhFWcFe1u5h2orG7kd6Yu2S92ELrgTpWsgV2g38Rqrp3jD42hjptm1VicmhQwbpXbvXvT",
  "key18": "3pk1cowXstFyVakmFvPLKsgsdTRZNmDTdjt3vJtP3LVdMrcw466x9ipYgqwSDqSynpi7XXBCStaR4fLD8D9CDVFo",
  "key19": "3Z4Fgz9W2SywoTh2qWw6DvgHhaKRSuMBxDFrF3fQksGxtMCgyw9Q75iiNze2otepeN4FbXB2UuUJqqDtaYDd5ZwL",
  "key20": "3ynPDK3sKtUntpZ2gKVWG6We2LXjR6woMZgK7jhAhsNQbazkRHv2Gt9cYUdPqJXLVG3wzopybWSkP7S9nvsiM6aU",
  "key21": "48V6nzm5SuM5TVRUvCpXZQYp9tzod6eUWPq6t8gxmRAWFEsQJACR21RUHwSbrJmsRaus1HrtTrJBmA13Q7jwJB3z",
  "key22": "2LjR1TUUuL7mcZzLr18LkyEtDrh8Ke7dnavzNKHKrixPwKQCKpeKKWCc8J1VEubsWS7gKnbrw9uYwRLnFAqLPpML",
  "key23": "5Rj1Uf1WM31HU9co2mEHKDycsBA2qKbWB3mYtwgHP8ZR1AWxVKWjQwtZjZo8cToNUHRXmyHuyNHiFPLTwdZmkV1T",
  "key24": "2WLjNCxCXvtKveRtY8nuUnCWhoD4tP85vsXRtKwZ7mARUsorRdsF7Laxy6pD3yaDiRuWeDqdBFjKzdiGSDjSPY26",
  "key25": "3sNshGGUjkiNSS6RQGso4TZqGnGuBpmtvjHc5CcH1igwxe6g3HrCgZf1J9i1TysGEqMejFm4v7oL1akSzJvKs4fq",
  "key26": "2cKxsV9kKQadpVyJs13AgcJVSXDqgeXzUDyMqzymWNjXSwWHmCb1nPiy3XhML3xQ6Ak6bcvfTvw2jFWhigbEucdw",
  "key27": "2VU5FJWhwuJ2LENWLezLkEtRY9yZJev1QY97ApiTpq5S6mKKepmn1KkYAbix4wuUdXRRzjWPEGRGzc7VzukjBJ6",
  "key28": "2Quj4hi7JGBXer9AySa26uQueGZNkSA5bXRUJerT9T4BD7veKqzne6B6wS9Zu5MQUFTGFEhQCwNcuREdV7qyZnuF",
  "key29": "ctY77LHsZaUYp1UEAxYr1qbdTTo7BZFr5cg4ZT4LT5vw6nNP1DcJYWpjJkTymRC7RRJUDACiEaWKbguCtwwdRFk",
  "key30": "K2Z4kVBgjUak7rg3iCmDuec1TTsXS3Ey44c9LmZWDxs6mNtLNk333csjH6ttwiG94Rsq8M7A5BCtx1p1LCntGJD",
  "key31": "2A2AUXFDXX7exbqkjAjaXovD7kW9wi8jf82WfJ8DZxc4ZYuf58UW7Ezm3TgbfPVW1iHK7ULBEoNyFHVM93XNcz29"
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
