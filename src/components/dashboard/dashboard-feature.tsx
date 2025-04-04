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
    "27S311p12VH8C9ninAh2gpsMnrSMLK4sy9c8S6pb7wTcTSctUPEcErnNwoeRdRGhSX1q9n52v9f56TgDZLQneBio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6JwEFGikNthh9eNKeyMoV5uh56dx451nBXKo9NeA4uUej8qmVA9EM2KZyU3irP4CVNF8ECWpqiN3nbSD9ri7kM",
  "key1": "Ea1eRCh9SUceghwA4FrWcq7cTG2YSGAhLsciFYnopjM3Gc8fD8CMETj3twH6KYRnW4g7dVaBXkSXEwhPq2HCEMq",
  "key2": "ub3vBe4JrFSvknnEbzK3jiGi7AJoigqs2g2E5EGktFWWNi36nRpx4BQxcQpSEHN4q1z6bxcGRgGDdHnZciPReLH",
  "key3": "3eqrCHwx5gaG7Grda3dtiMg8FeDPju7JyJ7U188EMfcKM3dTwBzFLU61AHDUemCHacXXfXPpQjFUxZPTMPgovuEo",
  "key4": "5ApJeZBxXuPUXbDVJVHMoFMiB9ZB3PPyNBkz9nKonk2AGBRuA2s4xhoBaR7VnY5hrCx2m5NRGvHvDKYJnaELCuwj",
  "key5": "3ucS2UVv8bUy6rcc3kRig3JWv3rraWFRyUkWyKsD1VXPmJr73QLMDZSeaBevqNGgosP6a8pyNtsoKJTiV91ajv8w",
  "key6": "4z94FNGmLFy6XqaVot3QJ6bAHjYdq1W1eUjesE6xFGN3sJrXvSUy6ypXCWZ3KHgy6GxwYXcnGk9Aqwe3RrBKfrmQ",
  "key7": "3oQJPKmeTQqa2zRyeny2XEQxRvxmVMJ1atXygxq9qcSYUFSx1udia66n82uqWKXTrRpNcDrHtohvYMy7B1r8nRhi",
  "key8": "4MtVWXBBx4kJY4sU2yf3x5hqC5WcQwUL47iwHZdCcRa54p73WBqtjDPvVdRf4YAkLEUdhrUrEG8JGu4PFz94VwEb",
  "key9": "StFFGnQmgdn18Jv2AojuvdXipDuWs4wWCRB9yNNenQrANerarjXm2t8bbcbwJaVxyavygpgEnE5Dd5KXsyaMaEP",
  "key10": "5RSGb9AdPkT2aNDSdGFAY7Yq3TZAHqm9zWAuyHkWdiVZns9jq2YVhL2uaSoC5u5JL5Y36XzAjik7RwJy1QMqSEXj",
  "key11": "4CZKzE2kreW5ZHY6hz8h7KsCRUnXyrUrb7YnQ6f1JBGYjJVLZFeCpzBHc5cHd5TShJVzL86xX7DSZgtQFXoq8Syc",
  "key12": "5ymspX87UCL5WC9htDuVibsSyXpBAonKB2HsiiHedAtv9djFn1t3F4k6ytgzabBsEPb2a98pEs7e6XgnQuVWZrus",
  "key13": "2Fjh4NssZmg8Xtsc8sgLupR2wHi5n4P5GNstDH7VeVLCfzFqutQZmA65tyKkvpGVjAkEVVdoi1t37JvHiGivYojE",
  "key14": "2CVAE7qRTqvLoEHNTV5kWS47Vu8CuR5BFFySJy8HhXc5gryeY8BAtpYvQZZ5tK51tuZeAct4NjvjbGKi4trYtRxc",
  "key15": "szkXEYy5NjEGqHuJsbHacn3qnVmggPASoWBXU29LZiFGziC5LF9JwS8CVdVxRoWJzvvr6H5cAGbayMehWjT6sGy",
  "key16": "h6spmXVjcLV8MtzpULUhqHWde93X5QKrntKFmj9a6mSoCjXNwis59zYVgHAEtbvEwZ7ySLvcFERwUejyBSMrBz9",
  "key17": "4cRNkdpHx2CWoKew5GWFVDPsBoo7NdGjhWASUrNCXXbkTastuujuGgGByAMPVtHLvGd9ESdjM4zb5DAKcTDmDSao",
  "key18": "2dAc8mqU95rmWJaU4J5BbETTJ1qV47qdac8bytTPi3RQYUGy3B9SnoC9hDUKQUxMZaNEpn4Y5fY7UeYzhEiTr4Dg",
  "key19": "PcBZSnr89uRkaVwCzgNTRcS4DDUmvdMbwn7fvBALSBc8QAoPasb8Wso7NFDoCe58Uf7i7XTj5x5XRbEbjxR7wXi",
  "key20": "xtcx7Za15TR8ssZALsn6o5LNeQWqYFVsib81dRP8jDeZWG5dxN29ZSAyQgtZYAcEaRGxpnjy6RoP53BupgfoRuj",
  "key21": "3osHBMHV6oBdgNZJLLn7cC44hTFivfSJqxcrpDppJ4R5Kr89AM99sBzSPNzX79qfLMUMjtaocWsZL6cPW2VbW2Ez",
  "key22": "3j6xyhs75KZwKt633b3z8fS2xfKvdE2mFw4JBxcmYoGB1mdsm1FJqMpCtRE1iyoPU3E37PjyHZXxmEubK1pBLot6",
  "key23": "28CPRUP5QndkkMxmXGcmSBhuyoDuyK3Rbg8iieGGwMcWmTZiKxkqFHagCxLMjwWt2z9qSqcAKZX4VFy2hhE7NeQX",
  "key24": "5vNgyYoJiuY2T5Bphywwj8vhyJViW4VJWkpaAfJJteC6M8DeTEoZNdwAnk3Mf7YGdyteEUh86jN1MW6GNdzgHk5n",
  "key25": "KkEWTVi23ehBRPF9NjtT8NrnaZTa5uYETRhSLcaxgbsbJZBdwaLU2KrCWJQsbErz1qnsAR2p2W8T6zzVuDMXh2r",
  "key26": "2gpRFaQMLkL1K9d5NSAbKieC8yR3uZpprdyzPhLXW1Ta3NK6wRRiHs84RPMhrLCH4DBEwEAKusLXjyk2NPrNcjmq",
  "key27": "cTCMyYppZguWAmQ8KoifGpeZMgruDqaRBu1Ud5uCApfoaQggNKuQ4jDKJ5g1i5cxLkA9nkCoCMZFNVhJoeDuqcS",
  "key28": "3wUtxgAHi3tW3FixgcLF3MF7J3dhaymqkiYVDpWcquBxfGZgSL9x7CVwQxeaxJCQjwvqSGAn5fWgsikwY97wxnSg",
  "key29": "3DGFSEXVXhhaff8wkeobwGKdxQGq5AcLXGj325oA2Yui2s3kRjrJKj44PjZKWmbwEjpdGUJmCPY6mx3NHzGM8XCB",
  "key30": "5Ttrukzch7Z8opow9hj8sUJM6QMBPFJeqXgyKcnTxrqdTrk19XHSAownXXPjmGpVSu3QrVcHNTaCFj26nnDUuVq9",
  "key31": "5W6FwkdSs3fmPUh23kaZzc6hSmHsj8ojP4fzW8gaYe2x4pgTVreXrB78W9m2Dj5z2PWksHYtbfLCWh5DESJhd4tJ",
  "key32": "4guAooB2SQRaR5nrikULFpW6G6YZasoS5r1ZDtNcpXBnfjdDZc4N2RTmhm6kAGXa9finhDQaA4jt7myveA2KapfD",
  "key33": "3G9SLqvc5QDYJuvKg1crrhLEZa91612RzbU3zQrFSRUsErVJWhebcYEDLU9CkpDQsyGuB9bXnJQHMJ25cxMAokis",
  "key34": "53uFihM7ufS37DdRkAy6a7BrY1imFaTgEPcfK8vNuvxPwomF9PtZQtpkAXetp3BYaQXXM1PXs7PQXWaurDXbfTCm",
  "key35": "321b7zWiWgs1Zcqkn6CRPaoeDMiLamT3DUXCEvjw2A6fMDjRXxWnJiPwn93LoBy7nisWPs81VEHHYgFF66MqxDAE",
  "key36": "3sDmxx2J8SvDxvhz94CZ98m9izs3f2Hgb65hYD7XtavXX3yhUcg851L4rsc36QoXmZjYLJ2SpJDqE3GYpG9M9qn4",
  "key37": "4rkzFG7YwxFZ7YEge9ByoRV7Z5j17DPBQfuWHoGZgLKsqfW5yfM53G8ytbQXcQ31nMb4Xy7do1qLWDXTqpFLfZWG",
  "key38": "5a3SkJW3D5ccpPUupEDZNNLmbMWuipg8ErzryLc1UCpcuYpqVBV8Nt2SppHANx21punKVTc8UmPWJHCkFWwdq6Sk",
  "key39": "3ypUJaxerLaQaJrv11pvQiQBy7JGYQiXW5VTrxqnpjB3hcKEb1U2m2rsVPzpvFNePqQEt4xBUWyqfeaX1LrVK7qt",
  "key40": "3tEvELXsvRepGKwPYUR3siVBEhC5A4YypHFGKHtMfZiTzTR5oC9oSLDkuGsty14NMXoxvVBw8MfPPG2zQAvPhdbF",
  "key41": "3p1wjqbRMQBtK2HwK9fTJiRYR6JFU1GoiS2WuCXoXzzQjLqTT3r86mbXLUkia7sAM6mhMxzJDLazdWgcTii5x62C",
  "key42": "3JZUqZHhSQw38xM7xCskLe9Cx6fHm2Vh6tZtJjMHS9N7d8SC1quYbcQodpv3kqvDoVFSmWH2km8zdDmXQXBjAejC",
  "key43": "4Lyr1j8haDNrXva6b7xQoFobjtVdyVAnVLWDzpMV9siXRq9xyNb9fSdvCFTtPATERAQPPvh7QwkePrkLFkGE4G6T",
  "key44": "3TMntFdSpfzmL5jKewkSZMGxNALihCKrqVh2WwAZqqt8BDJGMCxnh7Gd6H5Lt34PQD3V8wc5S351A4pk6a4b72WB",
  "key45": "2VUPYA6tAV4XePaVjuk9LySfQB5a5pwnEdLwrcvEYzQxiAoVhvdBvVwbsHmGyYXWac7voDoPfV7yNfREj3CmiP3d"
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
