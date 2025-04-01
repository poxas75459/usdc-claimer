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
    "22D3zyiRErSwJji89QFGGCVZdFGoi7fDrdA8DsxQ9BvBxDeAZvetRPYFDvJTz1RPunyjarsGPBkPVKK9qumgREZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Av82jdq7Hxzt2fyPc3mthkVEGG2QM9p1csEL2oN5uK1F7GSiNto1qjqva6M4UhW6HsPC883DroQu82YeG6gSJD8",
  "key1": "244pm2fh6s6o16Tn1bYcy4c3sV9voyAnW44vAJMJEoEPrcQmpSK3wT3FZtXd5ETnmRauj9GNMwEFdxkr5a2BYgfi",
  "key2": "5rhjJGYT2ARGRMBqg157BiqWH4ESTZZoTdSsY99pUiYrCBhRgRckqUpEaLoLGY7yztzbq5XLmKsVqjTGF5fSgBQ2",
  "key3": "5Dmx3tfQJqtEBkjoGPAWHnGQn9EASY9iApfUxPEoaEX3t4KPssJh4g9QRaa8udSR8eCbegWRcK1C9t3pcBXpE9BY",
  "key4": "5GApEoctvwPFdSqBufTxQU4PHYWwcMavJTeyUm37982sTW2uLXhLKfFAP24KC8xovqrUAcCT2itW9D9ibo1bmoX9",
  "key5": "5FVEpuTLmUVg8CZDW65DSLwym7Fyq3ubZAEs9ZkWW1eyWWNHueUqqrGHSW3AMnArBqZQJyjbBfWqGehiUt1k7nXV",
  "key6": "63ZPmHDxuoSJzCox8h3ebZdmMtU8b15gUjoLcDYZnaSzzGCf3Ysfy3nf3zfYxFGtYcqvMqn6rMLoy3YDwAiPso6J",
  "key7": "d6Tv69mrdd7xuwcR7B9EWUyWV64ZwYuUD797vc9z7Zf8hUC9kqkVu7Qh5M1SwR9NroR25UuhnbayT561gct2yFh",
  "key8": "5jYv5kKynGyzb2eMTBo1LGsZp6UNWRCm9JjT2MyL7ve7XCotiKNHUhHmJgiAaTW4XH5Fn9yCH21iVDUDSW5U6TTi",
  "key9": "2P4Sx5doqPWkDrybDx9PxRvApcrv8Vt8hXVYLPB4NeMzeX3cBMVdUPFbrEkBJwY1wnhaB8R1UqaV5ygnoC51Z19v",
  "key10": "5AjkR4MYVC8YSpiVnvUwCxttcmADWGKE8DSkmZgWo6dNuDN6H7i6MtELon8j6bpyrsgm2GydWdUbKmkcXnru2AgA",
  "key11": "3ViNMaXXmqRkjUxHhZPcvv926n5aZVksjNY7n5wcSmrVV2TkW1FYR9RwQGkJsPEsAWPZbBP9nLojbXbmkxHtb8Ln",
  "key12": "5fKgZ26ZECzU3VAFzxDosZ1hPKzQmbZDHzB7WLskySTZTHWC5FcDu5W3mWjLba285PBFzY1weo5BY3tbzg2uqTdp",
  "key13": "46nbeN6WQiY4U5dhXuPZE3p7MNNXa6Lojn7RTeWQNF8DJCDhBx6Nijr43B4brLaSYCf1gtG1qfa4qybaTLXmG4b6",
  "key14": "4Ne6GfYYXpnzDjRdqNpRwZuqxyqobzRkJmiV8LYo3g7DfTYLSaMZmrLKN3Jv8r4NSKzuHjmJkX7DnfmzwZYejqZ5",
  "key15": "4C423hapUde5CMQQvEXJfHhAXL2m1GRtH92t9bMXRDtsnR7B68ceTbBuQuTszqCmVBNueFQybsyYJQM3T7nyNuoH",
  "key16": "46TCRiwirWc1mGBmocR3aggxgFibUhnNWGHRyZVJDGHkG34HsWLCKjpHfQ1GZsHxPcBRW5YYFCpytvNyAsx4zNEz",
  "key17": "yYdgaMSD5g5czACmbEDFf23NyTW6mJpXpNPsQHvRs37mQjMuejAt7kij1rpmvn5STRVVnRUwimVpfjo3LZ8kM3U",
  "key18": "5H1CoE39SJ3fWCPpcBKbPV28bPTP39XH3jGEnTC8PRoHiPyn8UfjGSJH7rjBZvEumhX5EM4M7ie9TuVcNZRzPc5o",
  "key19": "2rF3EK7UW2U8Nxma3h6C3UW1T2csCDiPTBGzThEoLuiVWunfjL3uSCqbQgU4KSkGwSieNh88UTr6NtMHbzxzkrsa",
  "key20": "3jxyzPcYLHqGe4txHgUF3qrEqUdubxir8iX3ij3ppLe2Gr5okZJeRGBDN7Pr9pJhxEZ9UtvDYWMSzq44hmvrkeFm",
  "key21": "3JQNdYn9EdqC22grCqfBYq8PTYbci6JmoVWXDapGqu7Chj1s32jPpr38biqiHViiK2yXntqtqyTSiUXWEqbya97s",
  "key22": "5johxPCAxozfrDkH4ar9FMz3KuQMf3HzPA3vdjvDrXSyrFffRkw1BpkJ63qz1ogsaaAEKNcjUqToYFeSYPJwQvyi",
  "key23": "CNtsNNDqwsQApP2F9ghSxU4CCcw7oHWPo7HEcmo8MTpj8UzHw1CsKGGUSKaTXuhWuDkpmYLZqJvhiNZnpkE8KrT",
  "key24": "3n9Q41eqKEwzynxfFHq2LGyn978qF7PRAX6HbwitEPG9hKdFUVXexSL85Rbj52eEWxUixZB9U5WjXqLFtFXNwYm5",
  "key25": "2KdAurkEqWqDXztzy4HFf72vTFjM5ktkQTX5pjKXZBDYwNgUejGsFMqWZpRzJyjkX2c1DmCvWsVafDdeqDTdzLVg",
  "key26": "129rQfnnxviEWjGXSPz892brYpM8LMhsHWKupHpsSj2pz8n9V7wwMzBJ99xUaDgoy837nKc3e8yjW5RedUh9R6nd",
  "key27": "Xv3j5jsHpGNouJzyV1pKRVcqnSh5HtufrpSjN1zt49huVLCRUFu1sTKKV2rZLFoZAa29ZUnuTLgDx6EuQJcURYM",
  "key28": "58kWschCahHUg6awwtJXBBcPZTMaYchDUnBkpiMbAPsgXf4dm3DPJCDeN1jVcVFcHnkUh5tLNL3gPi3BJtoXKpdv",
  "key29": "Kh6TtUddrGWGsATknY4yJsMFTUYUG2ANGnvnWjyLKfgF5kfDJpcSYHwUqV5xRd3icDUmLgK3G5ugFBBUfKpdKBP",
  "key30": "31qU5EUNrPpa9Gxtz9pYfgXbehqsHpxhJaEmyt2VWjWeYs3Dwxc9SJZ5sRTUguTy4xXSQP9nmfrUFAq3fMwuQMj6",
  "key31": "2BBd8NPbE7By7pWwnJJGp8RicxwSEFV6HNnnMYS5Jwc1j8Ao1VRbZ3mge79LXoTFeszfAJ9M1drtKyEMCetAmhvU"
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
