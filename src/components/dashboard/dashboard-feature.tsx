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
    "4jghMBKi3SgvBwfCx9itK5HZbnQ747Jcokdo2jduRh3feGNN6WneGfMP3JYqanHSiCJstKYdq74H72Nm5pStR6TB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4rcAyvpPKQRMrsaYgFogbRcPt2DUEMn4gdfAb9feoztZE1bnNVCoQwxzuHUvAZM33aLRNRPPDc3rAW9TmYsNHX",
  "key1": "RazUmWPpqvD8aVhkhnSqGiQtkqPsAYPtiAFobAcbbsA5ZEHoyXXBitqu3Uc1Bhu3hpycXRxrU6oUH2gs4vnxdv8",
  "key2": "oWqpqL5HWB48LaNH7W3r2R6GA7xXsdPKeP9RtfabUXHqH4SeSJ9MFLxyfRPDTv1HGKnag8W1zLTeMNxArHBgeRR",
  "key3": "57iNceJqL1oZ9DH9PvxQn2ainPoaoP8ZdUUbLzDMwdPNcyYkywDQAPRzGRhBDwKGub827wQuyp7VE9kekrbCdqMc",
  "key4": "AqqVzAbUrrmau2jq7oW2JY1hMThnyCQq2ZL7sBx5Bhjx6WpyBcbiuvbqMCCpkeN1E4eoDLq1LQnqGQQyjsczRB4",
  "key5": "qKP88jhDAHUjaA5t9WDwRYEv4tazDg1vN642Pemq4Ei1LGbCdtXhU98avFFUSpmiJyZtNAFWXMAFmkPuFh3fxsv",
  "key6": "3SUhtFfoHF6GAUmgbDEN6gi6etuMatpkZ6Vgr9U7hAiWdggyS8cDrSCtTNhNcgpUK6D4wjPBQ22jRFPfqcAUiEDB",
  "key7": "3od1hW3qaLw4PXpEHwU7U4BUp94ZhQD94H8Ar3D3cJmdgMJfzsWEdwM7G71tsXhWnMzhFWmsYKPTz5j5eTB3V7pc",
  "key8": "4GBNRZJ5fVKYnhWwYx9z6BsqzMzWQ5uRUxYExg4u9ARkDWaP9STRfdgSEK7PeZKQmbF2MdYnGZaEY2nvrqfhmUAx",
  "key9": "51rv489RRoHztCZ6zdnoBLh47HBMZuv3HM3xYfagPRaDXmpyrE1wJSJmz6gcEnp5C1j2bgCAtatzjSv6sgMo9nKX",
  "key10": "2TCrG48zV5twCGwuLMUioQ9rRgDQqC5uM5TeowHEmpBSEWQbwtL7YtMYrFHPG6i6ccPG4hxc54iKybJ3eeP3kbnF",
  "key11": "5BZY3ZKigqqMAZDfuCkRwfbV4UHQUYUjViu6RrncrxwEJ3Qa4NbP4KPR8FQm6dq3ZCkbR2fccTfcgLmNYvJDvtit",
  "key12": "9xpYgHosMN8nhCojqkD7dG4RsMbC2Xh2RAGwYvamhHjnE6gpsxftHQKbYpzfqUd3hNZ9t3fuDuGRt14BZGB5tAY",
  "key13": "33BKcLj8hLet92bSh6Y1H58zbngR1u5HqLYHBJW14KZxAgS14HWVpzv8J4H1hxUcXYYtjLUaPZtZogbuaWTkskzJ",
  "key14": "5XtfSTF59qMLAExr75MFyypaSGRkqNjKCKZaLFB4yX82G4meTL2bpcWUfUjPLHbnctXCpXY4bFaHhopoM5Fc2LcH",
  "key15": "2pjtqdZxnF8n1sgAPr5pEuytRf6GmAFktBFxfqNPCnXpFeM8p4BKcrLTyN97JrejJ3ZnaWCEBepQ5GK37ybbMaVU",
  "key16": "5Y9hDfWvYN4Pg3tpQKW52TX8XU75haw7jDxeKPjDfWwSWyGdBCxzJkQbN9sPyYPugk5XV1oguuw4Hz4317RAvgLT",
  "key17": "3TipJHSppbdU89NajUb8aoBgNFkutsS3jgoeqQCguzQVedHm8hoLJCXzz1kZB2sZQQCWFJyiWAF36ECGGVM2Crv8",
  "key18": "J4am5bsGDokQQZmcQePFbmbCqiZgpNbqMAganmhHpYFGBWRGo2Ms3VgJZqzR4TcoYoqt5t1NBhorH86nm79GGrf",
  "key19": "4sY3Z3LtipLjUys5C3uFXZBHSiMN6jcL7MaYbkUsjrodkfpUZF61nrVfdZhrmuV4X8ispRm7shGo8FYDpgzQQ5PP",
  "key20": "3SEbjKMZhj2kTV8BVbQbyAwfT8ZroYF2TPRaKpgsuKxVzDjbamjUfJXsM4XeKYYJJwGN44noSrWiSFaS4EibjWaf",
  "key21": "5njqiH9wYCwJzZkQU4nY5t2VVuZzxUrmMFYNg339dkWRaopbRgqHZm8qhrb7jsts77SYa6oAT9FHh8P6tZ3HR2D6",
  "key22": "3LkrTgE36MTEsiAsmiMne8fDqjxSi6PJEEuSNeA1ou8DQJu5hv6zK2eedmYGdnCzApy6Ngab2U3Vcw1AJTumLBa6",
  "key23": "49c8Lc6zxtSAgY9M6VdzNWFF5WrJT8CaYhj5XxUucCEs9ZoaR4SG3SHPfXQJgrKomBBxRY31qRynEk4AGwDuwuYr",
  "key24": "3Yz84ZBvTwXjvxc8nL4R3Wy7Hnm5ipihNcP2YPFNoiM1hSGYi9TH3NYnGyVTPbmaz5ZBYGDaXqyZiq7KadV9Th3k",
  "key25": "kFTo5crtGDArbGowBkaRCUGJqbcLRt6kzMFBn6fBs1kX1Z4MiFfV9Bh9w4awSZKFvjtQ7SoeP3RwLVJuic2av2U",
  "key26": "5Ujhce88KU7NREi3ofhDrq1bKTXMpAPKHJD4iyDiMTEJ8Ehxc8Y1qnqY3Ce8BXexNMJvm6v4yjt4KxMttkrbAzWs",
  "key27": "5ochs3qywz3ziNAQ8iUE6862N6mWtWUrA5McmnSC9wfFTFAK5RfeR99TbyonuRDMnHzhuyxJyGBAAEkRJNXEKePG",
  "key28": "DwYT4RZBYmYvC7msAhL6Wk5xfxy2bBgN8ifTUryxfu1AJe8q2Dvfk9WVKBXAKwn5Fbe81aD3ixmjwxmuZwXk7zu",
  "key29": "5hhiMH2wPht7Z2Tx1YuDKGRkJbj8QJg1TbwxXcLhWQ8tgV8KYwJiJMNLivo3uT4Uy5Sj1VmmSEVch28SyCeAnAGW",
  "key30": "4D7gmW8u64Nz5Bz6XvzaH1wvnyeLYSYjaJBshmbmhGioCFgrdPB6Ba7HQDiYMauW9PMYHrDwY2jCRWYh8PbfmjCc",
  "key31": "58KcGGQRNFKjiDKAoesu5JqufesoEkR9c9sgqRx5UAkDjxHHvVXDqGLntTBpMGs2gqm554mzeGNYn3PKhDXkJVYL",
  "key32": "2YFoBhG9JiQLZd3YrEF5K5Enc5LJYGKkvHEkGQEWiamHc2aLveGb8v2WkgK6YP8cWWGUHLJXCxD2fErfXAHmfc1w",
  "key33": "2enkGPLVNQ17oueurC1o3S4iGV8NVGs2pXmqcpQyeNpz8vGrygBcwuZ7CEVJNmjF8iKcDGQLZPektVmgrZf3NFb2",
  "key34": "4C46JtGKEawGM1MaTnWqPcnfcgzUKYo3UF5urZkK44PsRnUSmS6R38rXWtx41g64RGsH2AWdRM4Kj2pgyqn4FmeK",
  "key35": "5ZDuRwegiThums5CFGzfveVhYx7qoNyer7G6brNmCDPSowMR1NWY3joTbs6a7iwUMe3nCcJbkcCCe8NiAEGwW9uA",
  "key36": "4tLALFURDh9MDZZhEbrKqCem2Bk67r1uuPVXj1nsxoPJFcmyzp7UopukGbR1ouHg9MTPDy6WE4cw1EMCKaMBfzbg",
  "key37": "gx21by5Q4Jd2SfsvKEaBACe8QivciVPvamDWbEDhoramn4qS8ouyAthL7VyaWzPkFLTYAMAGDNjT3uHhFZbvV3j",
  "key38": "4pzGgTJmikRaiEM15VDu8Vxz83vQqQbF8etKntsKgZ84qTyuG4bJibpVCRnUxQzX1AUNpYxQZCevjZnE6WBE8F9c",
  "key39": "3B4N595fUb2fQXLsZj9pDuLAW15KcWzxuWjSWvxjwoTWZ8M1YqCUn1bRW1tdTk92oijHchj7J9dVfi8tjUMmK5Vr"
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
