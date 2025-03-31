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
    "3AhqzyqvMUtnhjQSn1Xxvs1DKLAqeDxtMgjuvJSPC9929Jn6soCyzuhJw7jtQFQ6B3z3vQyCuZymYiRKLYC9835E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Z3xr8Ko2rEatzkDk3a21tMRjFPUSsJvQ2NtPLwUmD7cqnrWq6ZZG4eWR9ywkwvqBAwBK4zyvi1QKEJY5xuR72X",
  "key1": "3N97oD5Ftszga2YSqwMP6PG1E5TA8YdEEwMKZ2vnk1BMMivRBoAd7AX5cFzujymKqMa6JDSJxRwwehVN2gqjii2R",
  "key2": "3VuqJHhpZoTafjsSauVV8bLRA5jaL3n9F9odtZy1JkvCdFbTWAHEEn79E9madAVMLvUZPHW9uv3T5NtjmTvyLZEE",
  "key3": "4QX91ZErfgsbjHpaczLXAtQrALN7KW95Heg2pfdeTvzXFwLc3CEyXU24zCoNgrCk5rmUv5tE8NHXvM1D7hvhK952",
  "key4": "2vCqxnpBWWCQ2cpBRcWq5V34fhv9h1iuHuhjX2ZHNMCy8wMeRY8YCqShEouB9xGcxvNUynEBBw4SX3bMe2Cer7HU",
  "key5": "2gZWydiXRm148XKSoX4sS1oapSzAjmYS1C8aCumjtip4z83tGWwfAo38tQwL9seGQ9DGRkH4zwikzdi3a5ofz2PB",
  "key6": "5KFwSS2NA7uYWQah1uLdfkYmNyajaHrEEMV7U1whWJ4UNWSwMrW8pCftx4WB8gFGeaJ4QLdGrSYm1bdVRfD12cfS",
  "key7": "5GTxh1GxtzHybTzsgVWMDFoUfWqLQjsA98qvmH9YqQ1UEkaNg8DCC95ngNFSpDAvAwhWtsKdwKmc9VJh5UHBx9yE",
  "key8": "341T5YBuoGz8mtnMyJLkZbmV4pnpmVCnMmfKT7uN3JcrcMLgaHiULh6emLd2QknvwXEAKK9aeNSZsNX6NZj3DNyF",
  "key9": "4293t6bDitq1BZkS44xAuC85PRhboBR2bFFyQUVvfvGo5Cze9mU7VewNuZyVzfmF2T1hiBFWJ9KA5xiwNrBKLM3Q",
  "key10": "5a3Pf9Hre18rfQzfF97a139NPZuNjyhUTTSEhdsy4NMB89tEc27ZkZZGFRudCjfuFHpk8XGmqtgfoeR3qBvxRW7m",
  "key11": "3aSQeHaaSZNFydYqnoVirWXX7wuH59VC6mdXpim42ct8bQrZ1xfPaAe7grR7tL2vtPdYKJNXuCLDnCBmK4XKJfJJ",
  "key12": "ECkXcde6dXYy8KedsyDPxw1oGLa8aikMRrFXgsGeadhDUKPLiCkQdzRTE9U4ew9MXa1KMNTuJ1pZEomL19PzYpL",
  "key13": "43a9HUwm6G54B7cU3YhaRUaRcozTLx4rS2qGGSAUF14WLpYXU8SFMoppa4V5vjw9DrfWhJuAQHDDX2GgarzEtisk",
  "key14": "5t5BeeQ6rPZAXtMVRNji4GX2FVxEhwigYrvb2B5XaqqeENVGqSVg7DRPrXKr5R7RvyYmKbwhQVSX8M5ip5oL5p9o",
  "key15": "2wraSjn4SzucdSm5rqEBxEvgffBWwPqV6fqCeHserZwoyrt2YhV8DDfMTfmMDARq7F2ibt2KzW6eEM1kBP2MrPoN",
  "key16": "4Wq7Q1N5k2DwaEpPZ9uRgMAuoZecYYefcrjGoy7JLK1XKqcgkRH9QAcne9YqDshYyVKoNaPCbvDDNQoV4jkLckaC",
  "key17": "4mgJtr9Qa4m8xehK84Moc6K1CotG2pM11GkuRY6fKFQtV4BsdAiAgns5Mtu3VANLoJvGyGwY5CCX4sULWscEVYrV",
  "key18": "2B5F49tNeqyGDwrRam3A5Pqv2qMpB41wB9YF1hMzzgEThg8ZTj9oJ7ii4DYHDgQHdvRpChTqA9fwEhyEhpHJhyJ9",
  "key19": "5ZP85ie2UNEH78NdBxBFENxpJZHuhF4GGheFzxW4uzFjQSzxh9Pxf8cDE5cAREEcei9nEUmgiZrDzVQU14FJCox2",
  "key20": "JADc7pmuDkkTFYfstu6EaUttQzgkpwHuLcMcxEq51bXEP1Lv1CpEY8BMpW1xMpEpVz6qrnvfvZ5CU29RJoTcrkN",
  "key21": "yo3X3ddMX1E5hT3QK1qr1HbUNf96SRauH9MEyJyJMCFzFscwy2CZwWoYPpmhidypheiJHBZUKyaUaE7nZP6uTEb",
  "key22": "65189uukyDQqFTvX436G76VbqBNRAGpsUWPBLwd2brbLSm9yem4YF2RPXasnGPQTYUUwecpsBU1jK6sBhL1s4Tu7",
  "key23": "dnMHzTrMgMsPC5LUsMWzARjfbPk7PELwUpUXf5zojvzzaL4S1eMR6mVShUZff9WgPyrQHyvSRdijVBxVJTTf3G1",
  "key24": "4nCCXj4e9Y4kJPneYDpDGDKQwtXbdLGszdJAb82NzkS1rx16wgeGgBWo3vwLnWd9rS2UWPp6rHhTsFVtk1iwDiBi",
  "key25": "2tsPPa7szoBhMw6qpC4q1YbDBABst7ENEggQPLQdjZHJD77VmgRhvJRrpHFMb7vUcjBX5wh1T4X6JySg6N2MrDzw",
  "key26": "3fCzJwkcbPNtpFs9dWyNTJduRiqxtpKpfj95xGZRhjLTZ21iEGHxaxtHDiGXUAoFPCoJYf2kwu864F7uLkNEK5f7",
  "key27": "5UYKfrFu2y4YAusgbCcciQygY59DnGRJYc9hYFuLA5vyAH6HNuJuuPyAwAAQF8hewuy65zZem2dsCydzbG7URE7P",
  "key28": "5YcEfrLPNDouuq9Uts2rUGQXMxyL13nyQpnHGMVtCxgd3HZPyFNCpFGkeZrtYExv8h5Awn1pwLd2hoeKJYRN1qSx",
  "key29": "3GP7mCx5nE1xeiPGejoiq7gqS8aN7S6v8p5S968tHc65tEKWoZH4CokEmRtipWEZJ9zeZHLdw6tv4vkr9Qkq5RiG",
  "key30": "4ukzniThVNepK7k93aVS33aDy7YQF5wnbicyy2cpTTNRcV7rDGZsys8oJmA4Pw8mfWTZhiwJ2Rv14pwbTMJNDyD9",
  "key31": "5oZBXTNxmc1gJ78Vu92qRx7s76bxLwRnKAEBLiYVRNH6rkecKBPHUFbKZmy9ANRs1Xga77xAiD7Y2ma6uQj5eodT",
  "key32": "3fVEEYMooWEeVTXfihFyDKWSy897K8NrWCUmeW5ESUZmreLKgsyvMBxuTouT3k139jPBDPaPadNEGBZ7Eq1brAHC"
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
