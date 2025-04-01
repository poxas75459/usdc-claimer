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
    "Lhp8AMU97b9ReWHFH6yq6MyfvDFryPrHdZ7rt2hJBoNqW3uxKPK7qNeX22mHxhiGS7k4i5B4U34v2BLisgSZYyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BmGR6xBHS5zkF7hHfosAHHDxn2n1gcD2FUk9mj7CfKf888tQz1CacHN6PT4PqZdyHEytuJXZBLbZNR6wNK8SUBJ",
  "key1": "29kr8PR2iV94GVYittJGcDtC5MxM9NE45o38x4PUzstQaiigDV9W9nTy3RULNpStGQn1huM4YyRUg1QVmwQ9Gqfv",
  "key2": "ftcuxp6r2eDooxorcZy34dFf3uJNFYoCvFvcXymZgRcpmMpKku9XYrBs1bnPEbRXqmgxFmcKCNJPt75iTWFvdnW",
  "key3": "2XEBZRma4dkm4J3n2cWc5QHGmRfgAVZwR9nGkoPSHQtM7WPUK6h4JCquTe34uVMnurLDsmXE4RFRmrryUJtwL87R",
  "key4": "4Rt1drmLQjk4tYtzJQuSUQczjk6V22k2yaPQPhq9fxBU7n3XvzhZKcJNkhdZQtwGwkKyc9RgSDaQMUe3eXFW3Wth",
  "key5": "4SQdahvZoV85d3VCUhrjo32BRjG5B8dChtmDwWHkaECxgEbgErHBwUXrsukrmp7fyvBHRfk5QgMyR8HE2EJDVJP4",
  "key6": "4GMriPmQCF7pDntC4Tc4o4rgs25rPjf22R9tsQmk2KwPHbQYg6NqvSNUyRfoGZ4bH8JU2X3DukHQ1XVHnWRhAtuE",
  "key7": "4XQLLJoCqpMCsnMWbqN1x7cDtkVTktHwMdXaG61QQCoiHaNrSGZXMkDis2PVDQM2rPrzc88SoByzXZeKDmj99VDx",
  "key8": "kBjnHj3jtGsbSmFshATozqC32KsBK8qmHhGfzt1YQ9WCmcBJDfT8zwWZ8XB2XSF9UF1F7SDHpFiuCqf99GQfkg6",
  "key9": "2KL2V2jRB5FeExHwizJ3J3UeGDSP7617KcRMLetPnmFouyidSNjtEYZwufu91UyomzmQBijgGFeeHqWHW26PWG2h",
  "key10": "2baE3ktHQ5TorSv7pW8mDPX4pi64MTf4h3Mc5ekcseMxxx2SemnVfh41sBoxwxfGkDAbSagToYXDC4XxBBfBBt8G",
  "key11": "3v2P1gGCDsVYkE7hGiedkgfnPLJiy59cRuuPZABb7mcdHhmLmLhQZPKjXfP82F3VveKRwbaq9PEUVbmYNfsAPosi",
  "key12": "L6zKTiupzCfGbXBQoSFxtAMmZ9dZgMh6ErksBV7c7GBrGR4agRbSho4uEXNtj6n1yeUcrxcoy5GvLNxkMYjT8vH",
  "key13": "5MgS1sCkNYwVcutJBkH29G5T8oVGRovoWZcML67FfPHeD8ysXQuMMYj9MVoMH79qTSpd22ciZbTwaWnVC6iBMm5i",
  "key14": "LzXP3zVGJCE5D6bt5tEi9ZHzSsKkyYEJAP2H2yEzHx36NK4MxfJB3XKrnGMvTazMes8LwnqEWQkDGusYx3FAz7E",
  "key15": "5QWo9RtbsEAqqrkQ4xeanQareTeVoFB3QXKmx1KEnKS1Z8JteBZFLSzgBdDvoWKM4jtnYFuK41VigtyeonACJAkU",
  "key16": "3NHMXDHgYqagHjsWvti9fiRGGoxZir9nDqyRTX1dAn3bWgtV18pWd2y6j1Xpw1qbpXcdgcMtzxGUmFQTm6zZYhDz",
  "key17": "DqDPVZJ5ejxpNtgeNGmUoWYBiZ1uR6Vabc5UW2ZX2MsnQ7DU8wD2SiZGX9nHEUuvaVuCauL1bioH7mHoAUJySmi",
  "key18": "2Zpp15saRmunMHXAor74UmKS6Tb8524Bpwc7Q7jG2ZVcXbWMw8VnatTbMEQLjYpefJNvwVWt6QFoGcrEgiGHQag4",
  "key19": "3vdhkfWUB7CaksRAgG8wbiSBVZ3c2koG9XczrU3xhC7SJpbtyaoHRSG8dajSKT3SySpyvEuia3oiGnCg6JQRc7CB",
  "key20": "4aAVwvAo42W5WuRaT3H4LvWssSQbt4ErPaKdcJssxaUFqrav4cWDPLQk5PDiU1NcR3FW4fZbMUYDcSTbuLa8aTnH",
  "key21": "VsD9JxtnMACGNiJNrTqVvWdh9nAbkK6Jx2PvjRiB3CWverJ54Q7zq7HLjgtGVkXcL9eMnYW9k5LJxnnxSdPPdUk",
  "key22": "55DfKvb8xGFEWT1ZSxpfx7tpVzwhB4uP8pTGyzSZEfC5M6gVf1a78btgshjqdfLavufn5mzkdd7UqiWHwQkpNJqm",
  "key23": "fUntYzvHJo9EeSoF299ubvVUPNmbwEdHmrx3iFt2jLphEyfiZ8Px72536Fi6e6xN1d9YfgT1mpN6sSSexVzrPZL",
  "key24": "3fGUxFaUVYvh24hjqv7DRXJQE3kDhAKBJqNfdTHw1c7N8KmM1mDius4seMrvdxTdnzq1wBDM86diGsYXtsaP94rv",
  "key25": "3A6iVkuCN3fCM92tveZkiACMDa1yYm3ymV8mR7AN1GZ6Npm7kh3G5CZEs5hjxwFpuRvVUQ31jE5nmspYyLS665Vj",
  "key26": "1xfXRMMysxsrDdpYzaH96hVP7ja9QsjXRdxBwcLhKsfCWjVWytbzyFRXx8df1M4sHGCa1Srp3wzBnhNprBnUwhj",
  "key27": "3a3hQnYqAqnF268zQQpJV5pxhjmNfdNhJ3iinGBWgUHFtNnJBUDp6wt9XRYvLqN3LRvZwq31U5sZVc4HE7A9ms9q",
  "key28": "65RcY82hvxk49nQPP1nxvWSZnKrDYfveViRGHpzHPtgeTwGnZQLo6qW18s1Vz64Lk6wnt1VV6GrUQktWWJm9toLM",
  "key29": "C8wpqbxubQf2MZib8Gvy7ZE6diX4hDWde9YWXnUJzegPt47xpPcFWUrPTK2XK82NdDzKV92YwdGuuKba9CkUH2j",
  "key30": "5ya5RZr8UXq8xXZHzQP2ndCwRqksz6reZp2ZsuB73hJmaLR58buMjUiAc3WWyk7SiH9M1spGfgc3RF5v8rhzWdnD"
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
