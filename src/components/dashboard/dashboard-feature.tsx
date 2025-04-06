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
    "39DktTPHrtW3DohiXCwdf3qX3ZDnpJqdp5SuTAdENJnQKapGmmQXssXWDd1B7gqZgtDV4W6XQaRHRRemy4Pyuf9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WAxnh3HXNEjz91Tksvuk7h1ewDuTXhPoedLH7HZsATuBsMqC98xGVEcYm7xxb1k5cj1LNJxJf3KExftcgRZrYcy",
  "key1": "3vH86RaAwiigsDtESaKUVENKBRiFnDeoDqV8wdXUu8BRXpA4KzSs2uq1tLrHLr3kDZaGmCPTmw192SFTmz1eVKot",
  "key2": "T19jceUYkWgZfz7A5CQftZaUVBpzEhgHUnyxNUgSHJX3KTmLSWE9uARYqWaaj4uJGMrur5BHceXz3AkmH8VtSck",
  "key3": "pf7NxEufZ8QCxshST8uWSpaLNEDSvbjdtfT9uDWLPSWzLgu75dVMgr8AZesPSbMV9WZg5QYxzDwjwgmvqQoy3CR",
  "key4": "39P1sNx2kZ2Zp17Y9h2JuRsJmQbghod1u6qWR6C3tfi5YvmnYvxnkeZ9njPzfsafGqywjRUB1LCJNsiECW5VGoKz",
  "key5": "a5ZM6m6yacwaFKj28EBTjB5kFE3Nn3YeQcSa573eBGSaWWHhBCTQfeLcJL3U2erWvZpHfZ1PuwsNNuQfYhNyQ99",
  "key6": "5oUb1zRVSEVLMbL2n2LXKYGFiqHUsSPkTb9miqYVjcQs4mnncGfrMFLoqvLv7tSpdyKtwGuXNWqkc2nGJzZDg9nr",
  "key7": "3cVGm1CxzbTkpFeBbuS8iK4BXpNxKPCHoF2cNJUvy3aioW7TERN2U3qR4q7JUoW3PPA93adLsUKN3W1JFwYTAFMK",
  "key8": "waSWGxdSFGbRH6tFHJDFRTNSFtaRv4Hy382VnM5SmzTVM4kaEJwjy4sHqcT6kDXsxr1h9jGA79jfDgh9FoxbPpS",
  "key9": "3qndUpPq5Binhhfav6WYUmgpezqiq7Dv1RRtTHZg56qnsEnumWFKnHjjNSbjVEbHsfUTvvpjqbQbt9Y5ptTfzKc3",
  "key10": "5Ns5huQH7fHzDNhKLFHemUh3xXExkv6rU6XT7Q1cYDi93q6RB4i8WcUPqhNt6FL76HQLgUx6gFyowZmmFATf5eHE",
  "key11": "3cyTzFq85XA5iFjHdpijCL8SC5yeVKSYzNAp4P3eR2uCQSkTnU6wt9zxsBFXXFmMSS2FtVtbWNc7n3dJ5pxVJqfa",
  "key12": "2o2Q5QRPefuXyNfrCAEwJGT1ZzURM4sMv8YnSDjSpthMsnCKuL9H3MyqMje39HwnUqJYwfEydGfSztYUxkBV6gM9",
  "key13": "3KAdt7n21x9upxd5kKABfwJxGDSuHPaQvQ2Uz6firM6FCqwhnkB2NiXznFSMxyQZCWbk9xUF8ETKfhK5CPmiWQnF",
  "key14": "ThiTtrRMKB3Djpr8qCzjeRnTppGR9KB5JD1W8UUW56YjwtyPXn7Kuhuhr1FmcYidxQqsciX3tnvgJ9icfHiiy7M",
  "key15": "3WzfytUgFDhbz7sNajAVNTd1o5yHW7TewY27YU7KmxVB9iaVRxJ6D1pTC11U9enCZjiHG53AKNsScfxpXLoNuuVf",
  "key16": "5ywc85b1x4Q9pEMjFmFWeywoTXxrEnUdEwXREzpHRrEJRGD2j77h6pTgk9zekLuwTPKn1XwvMNkdwQXkt9L584n",
  "key17": "5Rw8qHb3siB2nS7EdgxyuXaW7E24rLvTK5BKzD5eLofMqjFDLrs6Xb3ifnKsv4tyG5GnNWecjMMqRPfbw5PtsTc6",
  "key18": "4vbm48LhLR2gidEK4wMraffsbBz1PWanSNAg7nDj8M6qzv5HXSv1dc8LPiVUKjshxodTvL6PyzYx7BCtRibKd6Dc",
  "key19": "45E4kQjYaA3eaCKF9GSKeia9NKrUc5w7SpKtgPpoYCgZBrrNXjMhEgapPiFfrNwo6ig6UnmdgggHKwcaFzfCTJBM",
  "key20": "5F1qeC3pRVa1hNgvESenNeyNwqqnFiqUnX6t1j41Hf2dcszdjeASrKt2j9njBLkzGhp7LkM6mpTceqXZwQHPrpaF",
  "key21": "5PfxBDHw4exWrfcJku7FixZcmS2HkSEqcQtq2w7nBGyZmHmrZUyw8rey54BxLKsuXG8QQcPwHMQY9RevpkaiNtHM",
  "key22": "2e6XWxTzoXHQ7fbxb4zieswXwZWqiNhLuW4BCAtWqSJTFrS4a8eqm6XaQtd6RgjXKLSaVM5NftHWXqJgFiCwnQdW",
  "key23": "57sMTroAy4ZWaPHh4kkW1XMGM8wfYj3HjFhiyeKEkDVLRXZXrZ9ckYsuucefZRZHSmEb8s9rztrC7FUhre774LWa",
  "key24": "9Efr3JckmbeJfq1anarhL6amiBaLu7oc4yVkTA7vrNQxUoBBaRHBzKGrdhqnGvQiUXDiJ9f2Ji1oTgxUcpVHbvk",
  "key25": "3AbzvEgQcZmCGKKvLmFHRnkfDUnmNyeMTKwUJLoSA4kLQrnzzc6PLAQEa76cuKpXMLJGr5xUSWxukvWRTJJYBLbv",
  "key26": "2eLR5G7MWv4xR7XgNoTtrbwMeUNzQ5Ysms2S2MAHtEkAz2eRu5L9gDcRezGuDRoyRydfw7oUkbAw9ayeZL7WQNjb",
  "key27": "5BDfaabGoFRWQbt8ssaqafuJDNYmoFbjxcR8TbCxAjBgj3DXkgiDsKagRokDnGMkepqWa4jLK9XSYR2YkYx4oiho"
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
