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
    "2dJkBUa3gQo1eCDzGYcU3M7pqyKYgwdoYq1ff9dc8QozFApYhaxVyGrsRddc4kQ25bWaZ2FmmBfotgNd1qUKGgsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59w9migzS6pDcfJjrMz2rzGU3UeUbgN7E6dXyxufQvKTvxgnUH3LstPMnH51gT87G5fiQY4MzBJabz2i4S1iXfPF",
  "key1": "3NhsDcHBXNaUhN9THtsphjdZJwWS8khAa62LfdKARABt3tTArZv56eADxgz7TRngCwDSQJtaaM4CGfPvi37o2CP1",
  "key2": "59pau4jLZktcsyH29qq3JXT8V8SP2M4rj6rcTLvAHsiaDKiSRjaCSLZoV6BFx7ZS5qCAkeq19Y9zqE7BSeHcjP3W",
  "key3": "4DpjQsTAHK9h9ocy7GtbGBsTfmPt8e1NrjxpHsdHEwKiHqKgPMQzie515kEsHf7GmpokAB92P4j71M4WVZKYia8v",
  "key4": "5RDn8DYG7GakhQgPbcQU9sKpoFYvA8kmGPwRxuuRC7ohAduDpzF2gLXxNLtYGbPu8A8N3m9BE9tCf3NvY7e6tTFQ",
  "key5": "4kXvPwRUXPZfbj5gxVcWzzrjd7tmTb31VXwWRFDeY43F2LNPN5SxrQJ9nJLS5dZg5H7R1CGGLXeFsiqpczkdihDD",
  "key6": "534HcwusCHv8v5T36gHYLgdxJHXp9MSAzNMaM9MDPxFjLeMA5JY9PbPrcrUuR7npfjTT6M1NGwfUNHkXGSSVu5XS",
  "key7": "5pLnBFPh3mq1Vp8wEzkqg8foRyqdWLFF8Dyp78cA6gWkSrRjo5Yng82UnSzuQ74X3Z7sNR3ZEpXSJzg5MC8QRtJ1",
  "key8": "125HbtWoQae9XcYEeis6dKpHgcjA76oZYXwLdRef1mxDNA3YEoNaXnPa8JvYcpbYN7hvqtCqwLqP7jLsoxNjEuwM",
  "key9": "4fAg1sgB3Nm6T5MUwCCnRZ7J32Mun5iUZ1xGnZeyFyjw7XpZubkE1Eksx1nyk2EHizUsLSPPgPnjFJy4XmrDwtok",
  "key10": "3Lxgpz9aQ4nxpg7piTtpTa5QHiZ2b37AV4226oXzNkCuC71XM9nyT3BYiCRgL5PNQn9CUGtk3fZSk3Tc11fYWTUZ",
  "key11": "2F37Y5Z6piZL9i76eokVgRiemL8SviMBgWoujtBNAiWETQr48aMRdvEKamLhv17PT1vM7AW8KUwcLhdTqoHMpZMC",
  "key12": "4PaGyLky3RKVxtmEYxxZJbdw5Z9uXJv6SaySC4Efde3TCXFc7SRSGNTHVJo8Je5E3edRm2TU3nZNCBQRKBTpSyKQ",
  "key13": "snWB3bJFeDjrbDVTKg59FEGHrQm2pVR1LTU2jNeHFMbB1K5rttDyscn1kxBLfeMzfLV4iF9iLzatz35QQLTNhYf",
  "key14": "2byNSL2AkLUJvdjAFKYVQc1QsSdHiH1JY5UMGzaUe3HufCF2nmTFSPx4R3sKboug4nkzqu1rM8mMJvZmCy8Y6B5Q",
  "key15": "vP77Td8ifKyFWzFAe2pKQZBfq57HriDNDcZ7uYSMMxUeNA9im1F5WBNpNS2whFGjEyhNsRJR9wx4FRzegHPSbx5",
  "key16": "4GGC4ZB4P7TSGyd3PPvurcYuBzTdt3SjdPck9teFbgyjHZoFra238kcrQtB8f6NVXBCZY31pdyD7bKKA6cU1yEUn",
  "key17": "63fQcnACc48M1WotmgJsATxm1KTEcnnbDjWSS8EwmsVcRwGjED9Fqcng4bXpVp2PxVcq1bMhV3BQuFP52RcwkjtF",
  "key18": "4ACjiKEqYhR8KvdzditkyMW2GqFnW5jbmFifocRvTAYDpsmLWnmfSp4JfiR81Nwk4hsevygugGT5XB4ZJVwhgusG",
  "key19": "4xhWdSEgikU6Tjjw9LDbeRUqxkGGkmx43JiwHdVETjHRt2DLk126N7bHpiFaviMYdTKVb1PUyvXmhKzms7QGyPZG",
  "key20": "3r6cfdpvPic8KQ8Ey3DCf8zEdbz8zTuw2fs7cEkWQ1WV6RrVvvkGixegHCGNci9A9MqvEtLhoUbeDv57wpwqtNt9",
  "key21": "475nKVaPyX6bAAk37KoteMrQVCKkWeVN6SgfMBttdHhZ66t1P8yC5PWABqeZbHd3LMPh5ZMXvT14d7HKQn3wFddq",
  "key22": "27X5nFp3DGvtUW5128skP82wwdtUF7uVwT2sQHghJRjKuvKDA7AnXT72d9xRe2NscgwKCM4NKLyhUtFugtJZSijZ",
  "key23": "2VoyLdX952xL5W9cxhGnMvFDMVAsJJnwZHusTpcFkFfoJYnup1tkyAbLCt43DLeePAAfE4rRsL42jDNhswis4RWX",
  "key24": "pop6dgfpReaQfZYvDzLF5J1qcc1pwqQYJyGK7UZwKDNJ3edYLpw5ZGyBTZBJQwGSKEidjg9yPi44xU359eY8U1n",
  "key25": "2v7jyBCVwBpYXm6RZkAqffwuD7DSjPPf1sXKSHqRpQivAFN52YGmRE8GjHm49mdNreSacdPoGdyXrVFcGEncdNUh"
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
