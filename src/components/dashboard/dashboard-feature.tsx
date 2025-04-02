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
    "5X4P11RQKngUfavs7pK8bq6MasyoWS2LRB7Upn9JRrRDidTnTzGhmFkk7kXF8Rwu4nYd4vbGL7iaTuXgs5TQdKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhxPXnBUkviCKg6gU5rEv61nxExpfm2Uy5vpQthuYuY9jfpTJanEaDQAqrzCq9wfgbNyPG4BS2rrn9bpnFhGy4P",
  "key1": "2eoo8GBKqhKLrqoQaPGjBQtdiCSs5M37dQfY2d3SFk84XWCYzFhykSC8HyZkfCpUGHJ1zPz8qGFeJKwzr45YaVwC",
  "key2": "3TefgF651dTtDxAYU6CVBt7z2FoHmvebGZjf58nJ4nrh5JpXEYWF2ZVkKo1bVuCK9qsPMvsmYU4kHKSXEWWRJZbR",
  "key3": "3aHnB79kSqPnfkugVeoAz6FKQg1MK75DNRg5aPLm7vCf5SZR9w5YjubUhQW1cRuZcUWaqpuUrXBACZCJPtVSJRpZ",
  "key4": "5XynCLmVY27ieL5cFdWbauTUDQhFwNA7u9QeMgzTeTmY8JKDLDvdMUHuvUxhtT9GzYpjRcurnFZwMkLD5thvZuS6",
  "key5": "3xRzoFCN1G5yYCv2gbeum3qVpTwLJtBprA1JJKLqeuXK1AE43pCK9nk3DnFcFqufNJhu8cgWzWoQxqLKn4P9gZoL",
  "key6": "HSWGdRAekiBypjQJStCyTBBsH6qdzicYaPUEXHE6KfpbrZPWHFH4xfvvYBY5Yca5Sdm3PbJQ47KKZ3s5NiT6bQQ",
  "key7": "3m9oLsnq3FRbGafh3pA8Qa5SHKcVdt36a6brXdUAw69ZDtsMnLMP3N589CCH61h4QxS4hdTV2R73E2C92DnKypjd",
  "key8": "2G7qLqahFDWXf7jrGrvkCxFcSTJqhrfshBXDCWcffANQAMQ3C7pcK9Kt4QvNnikYoHXfJrMtJXsoWVwYBTvLJqav",
  "key9": "2QSc7ahTfGZ98rKHRta7Qnhy4uPyu4x2PVhYjqyZJYbZ1FWp3SqrpdJ9y49h1sGrqmqy51sRkSLC3DAzBWWYXZee",
  "key10": "4WjjWfi6KttY1ctq2FCU8nxQ7eF4oxQfAKJYUxV9W7KxGdRL4enpB76Vp7V3NhHDpg7aSBXUu2Ux3nzkzWHKP4A8",
  "key11": "5xMU7rQJReNejF1TD95nDjtNQveBdLVdycFJ4LvC2wjFNJW8BLAvXUt9LdHPNm48uaAf2Avp3RkFyuUMXV7ubSbA",
  "key12": "4uU4XoxE22as8q9kjxS7T66tccFetjQ8Xucg4y9S9VvcYoEB5XvziSWhHVDv39icEW7UcnPXSPb2vrbtwPG6sTmm",
  "key13": "3voqHX9RY1jt1G2uUZWusdjZZgYbZ6GEdXCuHvApZAyRTfKadvqxu1UDDJL3JY4frgZcx1cYrC5xfx1XX3dPLriW",
  "key14": "55J2J4LkYZ3o1v6S31qaTEF6wgqRMgNWC5wY3z1PhDrVf9m3Tz1hEf76Fb35roqZTQoHHbNxXACVGQJk6jn14Z4L",
  "key15": "obwCEW3os9o17hJjPZEbYVwnSdXwefNSQ8UA4ivqS7NKDTKuwE7CkboDDRUiGhLPeKVE7bftstxWUchCeoLhJLB",
  "key16": "2PxGcenHaCoNLJwRfhDPsMimw3S85cL1tbJWXfwxaqVfQxLQNozBKHytbniAHhnFbKvo5D4GLNDeAdBtm5jMbcRN",
  "key17": "3ErpzcC1cUGP6rCbAj1m9TR6pBxQXZT5Z2DSJrP6TxE2gS3mJijmuSvFN8EfkGNrBYAXmsHZATgpuH6Zgcmc1YkM",
  "key18": "CUf7NnKhGNtfF5b8UvhdjC85Yx3rDPGBuHof3gSM2UK49Hj1FP1K8Yeanwota25BCJpEC2epjdc8HXgitA1jcLM",
  "key19": "4NqSvA29zcViRjbj1LAc5A9EThfQtTDgse1REDQ7RwRr4mS7De4z2kSoW2WmvxY1cgwDYGKPh5KWaZc8EE7MEeAh",
  "key20": "3uGRiCwoQJ7XJ91noWJ3c1hdfog6MAfRyUaGvitoLAGYGwYBPN9hMufnDBJEsyVWYJQy2SoZ53y7AcicYPgjCfBe",
  "key21": "3uGbEfzzCJBouVQ2S53fEet6mN3GfTyEwWsRccXi3G9Xi1vtxq1B8yPRBhi5RCaJXqSXRTsEh4FLKGaTyvNEoR64",
  "key22": "5wr6f4sf6Wq8hcJJCEWWzkhxi9h98zVbZbyVWAGLwZtd2viWXNxhoBZFLSKYcqTHJLNGrewq8CLzXNhDft1BKgWh",
  "key23": "33Ls2xCt3FaK3KgGCSFuaPo1zZ7WvrtEaD3azaPrwhncw71UiHUaEsj9Bxzo9hwPqMb1n8RrR2q23ntT2HcRvJy3",
  "key24": "4tuutjvr61zX3cMPhYeE5LTY2JGTXap3PYfVnbnq5yU1hCCisnUqE2pnGmQLqpCfZuaWGydzruXCsL98v3xdPV4y",
  "key25": "fqfMigZq3rdkvZF8E3eoae2JmF5s7QKq7mQEEiRLJG81zt6JR22W9iLpkAjgfShrP1ffVFTe78iwQLv7rbeFKcn",
  "key26": "2AtmkK7p29W29nRvFiN1LzxGbfGrGC7a3YadjxbStZTqZq8txyxivGfaaa3Mq8Zvcco7HsJtxyzy2XwPjfrsCbU8",
  "key27": "5MhPv7vU4j295oZzQNf5xNTCfHXpGWsrdPaMwd9zJGezpRtGt6AZJBMUmKjGNgKnM5sn7n3wtCR7GbMvkaR98t3q",
  "key28": "2CANQHjNfvx9SuEw6wv2kM5wmvyAPezm3aEzHFmTMdPTzTVTnRZdHRuR6n4sL6ZWSpa5FRQf5E7ANLybotrmnouB",
  "key29": "4ygDcYAzhnGS1BpX72fh41d6y1TrHvmfbxmX8GGVSDjCoLpc58KEbtAsjg4rB8zJSjt53iHgomoG9Qs63b4c3D9H"
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
