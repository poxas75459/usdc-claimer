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
    "3nyG6KLaSzKoLXJkCxE6on1g1Gc9zR5XevVeDQdQHPV3B8vBRHSo8WJdRGPJkQsqHBu5CUXix8CSpR7FMTfBpvvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWG7D4E7VCxLbuqKUEjFRQmwMNz4HVy1Q3k6RwkPTpnWzJX33xWPkm7rGYN14mqB5j7KJxQLH2kJb9HmsQPL3Z5",
  "key1": "tTTWGYvVbbBP5h3mo7odcDswceDfBxucojmH71XytDvdF9mrZXRKo99r3McBNDz71eRqJnTAMc1PtczCsDea499",
  "key2": "2QF3y64L3jMNjp1Cuj8cPW8jNkVWSD8aRrW5hQnWFhhvm44Y2KqLkzM43ihsEx5442ooBkZ1GnZ9WJrTMNmumfep",
  "key3": "2Tud9Fe3c229ejd35A6VjS5JTTEDQ9AwiH6SpPtxXoVorffz6t9Zv2EB2BrTPXfvABuHjrL791hmgiwhpzMp1awE",
  "key4": "3moQDh4SQKUNKFJ6vWKG8i1GL52HPxJhwXtPpWwK2JzKdCQmxAikzJyhfi3ijEpGLfF6e6fGvEdpKr6URZHZ7q9r",
  "key5": "5CfybNfXkBSSbFzxpKuEReVcJGykSJu8xBPkBjxTLR7WawFQsDDnQUNPZ7LJgUxZataJcbLYhzhxQp6RBnHcfhxg",
  "key6": "3xRK8ZuHXYWih8pFZsxHgN1561e4AJUdAkjg8cVEAsJw6AHukjbHBHuv5f5SW5pkjYZSepP7CVNVEiVwM8SbsBwR",
  "key7": "5DqJC5K4PXwkJmURiHGL2TW8yGiCYajLTbRYX6V9ALhkkMhrhx7Af9v6iuv6P373fmxmw9RBDc12FNGbJ3A68AJy",
  "key8": "5hp9SPzqh4kWQNA7iGSFTZqAhhbeqen8PmTvTxyLs8wZeTCDBB22BD9HW7TY3Ugi7RxtDiiUdk1P9G77Hinpk1Mq",
  "key9": "cnTFEuQdwr8Bi3PVrijATf9yT9gtc4QxLpkZTAqyZ1gmPszJtwkQn2RMj1P1CCWu4kkD7UvPQAmj9gjHZpnLiPc",
  "key10": "59Zmt8WqrFVCSP6zfwJ2oArA18NEDMTy3iGrGav9DwrhaEnyyANLHKo7WRF1GTBfM7UHKWGPYivFxHgGiNaYBABP",
  "key11": "4y5frHSaQ3jeK7NLD11ghKWYdFHr7e1bpNUmnGyQRoRzBcLVgcaBz9aAU44n34kW6CURREy2JZSQZcgvF1KDeCwq",
  "key12": "265swjtyvDSAC5eh1v54c1XTRQvfb4FdXZ9Y3xsrRsMFsJF1Jz4i65h8S8PYsiUYqPjmT9zMgxkmDWmr6Lr8YEgn",
  "key13": "41qfFqBUCJJJUydskfsDcXQvUkyKetZqGARDpJX9YZVeePQg2DBhqiJKuyr3xD38CkjHVsMEKXGX8DFwY9of4Dt6",
  "key14": "2p4XPAYjtJbwYCH8XnXdyQ7NAqLHNNLRZAn7BkuJDgR3xDsNspHsmi4BvQiQCHVKtdp16bFytN6HJJBFfLgRiP9M",
  "key15": "5qNF6qTchPGQsBN4xj99adYpjq8nevnZzjJGWo6srAiEqMV3z5T582S4YfcgJZBRFgoBedwqGYW81RjFt3Ak2rQD",
  "key16": "2FUtqTZQVBztFn4CyYDnJebPeAAhMwWUjAyvZvyz7gVhWyBM5xRwHEYos6iVJAJZHEGCPJy1dQ3bFKRQNaccXZEX",
  "key17": "3jCF7bPUZ2s4aupoZB12uDuGMFKypTNQNcGpjyrhkt1jxvraK4EvxY1Mw3ju16XNQ8zfHDgWThShDHL7545XXCDU",
  "key18": "42BpRjS4z83GkXHH7f7hfTheU4Vg3K2ghYqMn9J4sxm9nBEdnMk4ay1sBdhdX46TUZABBq3LxJRKjVNqVwbdUv27",
  "key19": "5wUs2oftkqUmsdvciEtfTpnKfaAE7QJJMTJhxiMYPo5YhCYcGBjSHBGpwA6ybMhZZkeu2C3g54uybqRbUzpLVrzV",
  "key20": "4A7nJbwsYeEHGiquME3k5mhkeDi24FnnS3pi9fUv7mrKAJwjj2PNY99wX43FxGUtZuqx6tzyYt7duHJ97dxHkqfC",
  "key21": "TsFHYzVtYBTVLvrQi6vKMLcnS1hS8FvYeNHJAzpwn4ofsh245FC8niQ1AsVeoagGkmABhgbfq6b2wENLYZ4bJiA",
  "key22": "5BvagrsLFW2RLgoamdjSAzpsqyBEAFPcmMq7XhiXsYb1T3QT3tp4ZsU3z4FmJ3WLZa3a7nmKdWjPh1dQjjP1jCQJ",
  "key23": "5yvTEJWMWdnEZXna9HFdMG7nPWiJMML4RMchr2CeYayC9ZndkhSCNZEnGYdK9vhpBFQJeEgpfmhnr3Pv9kwf8yfA",
  "key24": "5V79LcafCKtDMz56idyEvi387t7T16zdTSKf9Gbk13nNZt8kRSp9q7hK9XBgTtCePiVT2f7KHG1f9wiXRHJLWzKa",
  "key25": "4UmPwFeXBfVZCF44tHjWBKmLGm2Dw8djuu1p7B4r1m7GaKudYRFCwV2K7eZRmio79nzWaXp6mroJ4btt8rxrymWb",
  "key26": "3x3yiaMBBKLBoACXNeGCb4z5VcX1nJqX6kmwuFvRvTjPUJptRnXQFWsf1nXpTCkA1LqugJB17geEEa3sie1UoamE",
  "key27": "3kUzzWFBEAuM3aZ8QLowi3L3xQfMj6HRzcJ3fnVEjozyW9D5V2iTafLp6DDZhSwxL4fb7kMgiS9HtPXhFFsvf2w3",
  "key28": "5SMre4Qj2n3Lnh6WerRiqLWiChSeJhjHv7wnV85krMsypiQ3tdwTiBuFeEFianEJZaHd87N6maJtum8pyRqdNFZ8",
  "key29": "2hMRWpKv9G66vLmVsTqU6gW6i6g7R4nyUHhdpiCMZ1Cy7druA2phgXL2Z6hfpYbMMc75hfKVdKw4ocCNPKzJHsEv"
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
