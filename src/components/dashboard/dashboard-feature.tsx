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
    "5C1tjA5FEfhsiSn19RVasetR7sAtJMSU2ihEhFDMVDqJHitQ8TAPi4qShnyvUd12CWgi4MqvwrdrNhxoYX95i6Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q1LNPiwfkmQeoCeMGBPaFD2QUyVrKKyxUC1TkHNFEMH9LpUXkP5BwPSyGdc7cqpK5833q3A6HpSNq2hhh41k2RK",
  "key1": "4J5pvsghpYtA9qMu17zQ1VdjZGDxhfUafhxWG8fHMR1AJz3JEPy1pZheMtRwkTpefKSudw4ERZRz4AGKqpVQDAqS",
  "key2": "3yFsD8sFSxMyxtqjWXMmDX3rS9R1s1Abup1cc4tdJe7KgkGUBb41Vzk8Wv73gK1Zq2xx2uetyTgvuW8GnaTMmHXo",
  "key3": "4wvip4SqsFucSXtuKGeuJxWTCLaqBGedpo7Cm9WwDWLCDtAnM2hh2UNfNdj4UHoGYHuKTRydWYE6v8XoS5yU3CKu",
  "key4": "24tg5qH7wnLDYkFiTVGam9V6x5cCYjiecMVNvfqJQ6kzHGTxVagLWZZHuborcv6GeYzhwDjq3DtpPGw4vxZhgaCU",
  "key5": "EHa5pNbR4o5TKoBzkVmzowJmakxcBBW5Ucvy5c7eMnaMEckUWB9RfwxtS5XiKwJxHFdhQQJr2UMtT7TD9jTTGi2",
  "key6": "2A3KCsZXiKHTP2w1mDe2sYReKuE7nARSdsFuxFCZ6Z1xmydNA9QCCEhypi2FmtthyFqpFqiE48v5XKXcCgs3t6zZ",
  "key7": "5i9p4RLyCQv42fND1QxVyh8cuBq9cTQxGkqjZCDWQaDTQgU6CN7GmhNZ8uezuJ76X3tZBqj9QKShht9fUghw5ZPG",
  "key8": "5b1fcd7C7NLZ5K2u8TyqhfHjKnQmavpSoCgU9sAFAftucmDkKtuDyNVTWs5ZonQsR7jz7z1vhh2jYFNUtaekVzWN",
  "key9": "5mJL2BLBM3MeZRM5ta41fdCMLMKLtFxVLRWgaW2FBinAYNoM2VNKedfGQQJnbjaR17Zj1LNgrGrjADD4MRgwSUfx",
  "key10": "5A5fy37EFyM5UTzutd8tmL8cDik6NYdekUAeKmniFpi5HNrYQQSMfRMi9zg92eFdXDpuLViNwVQKjABo9DR5zHrZ",
  "key11": "2rZSRo4v8tSErtjyAqokpELmg8Wa6qmDKTQJSRxzqG9NQyjH2thN2oJHzshwtzqMyLz1i73bMkm49DGxfBi3Qfc3",
  "key12": "5ASuJK3FvJhmMKLmMLAu922KiEUxeWL2GYydGnmEFRRfPnDJQr8rhoYDAxS8tq1pPk3wTesejxSxyoaihR6Cx2Wr",
  "key13": "4ZJPfAV2BC8Qhru7LFmRPiaLAaBChcFPem1jZnGjrPZvsnjdrbYtc2QsKfAdvsVZmJ7bi4fWyy3hF5kwRzDgZ5uo",
  "key14": "53iabKLDZ9HC8jdXevLEgiUZtxXuWGy5uA1K8V7ZMyXnotMG47UCs19unqjh5PXLQPEAheG8arSTjHYQBVmmn2LD",
  "key15": "3jjNRnFdGFHvcBa6M2nWEeTYVeduAbHvsznHUK7wDNmiPodAxBnYZKgnCWAnotJ7TvjBSpVYpvUFo2iexFCCDn5J",
  "key16": "4qJJm9NmpPt8GPJBby6CuPUw3AgsRPihb4QARmN4V1DtPkHMWwrhUtsCPLobeqQwVYJJHGcYNELywNjJeKbb4J44",
  "key17": "41UKKhXUuZopvRzaUJm3Yr84NjiMmvgdetxAA8LLGWYyUASiSqDAMVxTZffL6x1BLU9vHZCSsGvZrRPhdtCTFerb",
  "key18": "aTgAoyJ3TGVTRD1tAhbKkmgdksfFWHFi3prfjvFcqkv24H1pyKrRrsoiXmDfGMzYSHeKCZjTDL6KoY8t2Ybb65W",
  "key19": "3FvFzb62xXXfG3nj5E5BEQExGtFf2kA7tNoR3mS4QytdWEBGsUPAHBSpwwCkGD33sRfZp2u18ZugbiQyE4EuC4fr",
  "key20": "53ruv1gyMHTpoj9sXjbthxvp1G5kJchWAbCPA61Cz5fWyhW3DJoa3ALYUGJeS2M9fojUtJT6rCiodcLXqrorfouL",
  "key21": "4nzRRo4WUgQR8brGd4B1imNWwXsMHLG8N6CERXUFgAZ81hJ2U7cUTH5G9zSd8ekw6UejYY9UGszhPahfq1E98bgf",
  "key22": "2ox1aBFDs9VyWj6C1LdBXG4RWGPkKbV52ELZHYqdt7UEs4JCbSRWPwKMkhxwNxt7RfqeboLpzbiKen29Lp5uticM",
  "key23": "vcutquo91B7iLUzbAj1mKAgP9LZfvGMAe2Px9ikXVr29YQvhkcSzodMAFoFekHiYk9fsLke5Cihsh4g7Wjj1jLc",
  "key24": "MF5CpkCEFS97rRH7gbMbmvQDE87gKuWyhZv3hf61KHj1Dz4wxjQX5dbfw1XKsd3822W2AN6raSUFjEkYufLnabf",
  "key25": "28VUAGcCyQAPPKTLYM3xistdZbUhYDDCAAJdhJjtWG2hm8egWsKAdAnUEAxt8tvXv7GcYNt3uy55qFtF4WpuwqpF",
  "key26": "4z8qHWqk8pqfLtutzY62pEfJwnora7dVrA62kbdu9TPyyCnryJi7zobeZT6PPqmVeKHm8RZKZe2sYMKQWWwgePSG"
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
