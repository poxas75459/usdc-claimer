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
    "4rZWd7kKC7Vx5Ti7MePWw2sUvuFR2tzqmFF4TMz8MgVDvSLR9bpKK4Nuejb6YPMgU3cAhVLrXNcGtAZuFSNPLRge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wReFBLiSWHura5hzhnufXHk7irG4g7UMh2N6hg3z1AyNHpmsQy8owyMcU8vEqvhHZTA8xj7iGBzgntS76jvE8C",
  "key1": "8tNADqUCJ9Xmjkw4W6aXs95tRKFqxXjxUm4njkB4sEMg718HRp62tAdAEf99aqSJV7p3xtwV3KZbczFw2hBYkV5",
  "key2": "4J5Jmp8ryYZ8peNmmJNY37YS6ih5Nd1Jm9CVjzTBjkLTE7rsJQX8vxyWfycQvAS8noKTe4H3nWrKySt8Ktu3jKQU",
  "key3": "4NUBiXRWwPUrD6EWGi45v8Uw2Lyk45tqxdUbUcZzcujMwNGYNF3LfMv2qAqY79qwXydF6v6GS4RJfq3P4RVqVp6T",
  "key4": "4ajhygk5yUGVHwdewTGqTJEc1uW1m73hFLnJX3M7HmvXinhWoRx37fnuwMSZjiwMc6H8crVvPAYfsHw44ZPAe2te",
  "key5": "wCUYdgoiBA8UXj2TkM6scKbDnk9DpnQyKbutZasiU2qTzJxdoK8uvC4niabecmp4AkKFd5HSw2P82MoEBetJN3p",
  "key6": "2diDRYQwfNihZfvAfHQFwqJRNkH9xzuP43hZoLWH66C9DG2FKDQBHtDwBiKAWA6FGVfXGSpxXg8bYfvd7VSWRdpL",
  "key7": "2xKnfbvsUeEdaXdCDwMjyvyqgteHtieCihkwsq3B4PfNo2mbK2Tr17YuVM6nCjgSNM7wpRqJPbhDyJxJubkN6vnf",
  "key8": "3ek6vJJpQXz9RLxBJUHQ61e7Qsh9dGZMmeCwhePSjKm6nMehHMLtvjQMhA7gQf11Yfa8mw5TZiunrrgTK2KCcJ5B",
  "key9": "2MfJ9xk1VJQsTdn1GqPGsiMqYBr4KmYXe4L8XfJXymtzGKSBvcyDZWSTkaNtYo6BMrDEeVdskG8RyrVgL3Wy7MYn",
  "key10": "21dioTdCoJwjgEJmn5v4wjjdQDeaph6Nw5e6zGvkWtZWBmXLeAiYzdaDc8ZkMQu7FD892tDMr1emSWjXdmqckWFF",
  "key11": "4nyTZn6oxtWnWxaBxsp9HeMbUS8AbeMYYTN2s5JPsRuJUh5dTvbHWVXtb6su9sJazR8Mp4Pcqby17qFFHf8hW5ie",
  "key12": "5cSu2JYqQbLf4ajFmLThhhFj8jsWP9dq5KQhymcguU3xPUPUsR4PPydA5sLrWXbYdzbdHS8eWZ3hRovC794pGBFP",
  "key13": "tRH6WQmGTCwdzeiRPHgihzBLqYGtPorYg1ahBFQrEgWhyfgDe97v8nMzdvXfA8qgcTJDsRLovZgyY4bSwby297a",
  "key14": "24fArCQigiaKoKeuzH6URhyhVKNkAXL8WUhdH7XFZTnj5aGu6JhMGYLHmC7o6iZCraQCKr4mNbzok8J4gzbeomgR",
  "key15": "b2T1mp4xoWwZ8YipRVSmu2w1aGCRmsZZesXuoxkd4mZyWRz4vLPFGJJx6fGT4EwgEzuU3QSztYQ1n9iz1LV67ZS",
  "key16": "24SK3kKuX8eyPAEQWs5pXFTx6PVoBLdnLK64gkq1pKk1Sxw5cbabt4rqDqL5ThJSzWHKwL9QrduJPiU25pFX1VM3",
  "key17": "366C2xdWoVRKAaoRNBpXR5UvapvAVWGqqRez3PRRb4bY31qphGfcbufBRDuf2y2HJ64x5yQi5SxfAaUht76YnGJj",
  "key18": "5PscEb1uBMEuoCv83Qd2hBERL6zyr8YzVSLiWuwTL21Z8nJVH2qziC6cRHHth5piWjf2hfUoWb35hcoJXQaVGMnN",
  "key19": "67FCxpPF77XHdZ5cwCUuaLy2hzrwv9XmzppBQRCeLnE5NR82a2gFB8ypYRcPkCA5j5TMtGHm8g3ojEVFjWRC9gKd",
  "key20": "4KQqmXL643ruM4AZifZoiASndnwNUwPZvLgYUeGMeKFAL391BAUY93w8z76qBUdqzM8usKhNZ3chngpThi9WYfqw",
  "key21": "2W9vvqAM8HgFzhvGNH6YX5ND8mYq6fnLoc3QKapomgWQtbiCtb7d1qvS7Y2c4pucasP75VXMSaLthyrcgLBuPbXE",
  "key22": "vJp11BHUH74HKR3dzzxBx2F17N3CHcqhn7hFCSLrgnFRvwcPePU6r9YJwikLE36og78BwzMqNpH8u2diwN54yh5",
  "key23": "pC5HDqx5nqc2vDxcTyGEX8XS2vvnKPsySCTm2jPqTNxhdAXQAiUhZhY5Y9Tt2ZyMZcF5JjJqqdHvzV7T5eyiihW",
  "key24": "3Px3p1pun9c5CTJXkDiajwQc1sGCVWJqb72rqaJi2y3MaanYiT8LdKXw1GWjWAChRw7GFcaF8xsMdQ9V8Dnh58MK",
  "key25": "2bSWoHEwCh1YAaVdrP5SnBfiDzFzWLMt86b1XfuEfxWPUS9oSrtjhfCsjDnutbfYjKyYqbja3SdjQzW6rfcNujmG",
  "key26": "2hyXfspVH8mTPSZsGY2tHazQYzCsxNYvLxjwBryUsNWHLTGxpgwWCHgTRCJg1ZuN2TCoZhQeeC4wCVXxT5mjUCz8",
  "key27": "38xbgbpoKczQAJnFDgBV4pwDHVHgKiPf58av2WyQ4xTJ2R5CJGjH3xPMY8dR2gEzZpMQEXwj3YAcPHJH7CdTfidh",
  "key28": "2hF1EhyXTwKb3KiHdLpjbh7zGhWhnV455gMGWKNr73JnpVSwwB38ViUARNQrg1dejE2jEkTkBfrbhg697znVT9JG"
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
