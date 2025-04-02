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
    "kCX4Mra59kPyk72WUXHn9qMkKyxiwpfVbw7kS9xduE9xTbADfiGRXsiXJuFn2xjsF1P9NGeJ49eBbGYfs7aup4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfLavqTowndiARKG3qfEtfWKNaLjnc5oD5xFtjASvjwqCycXErXWUyKSqqtSVTZ1Abd9TJbigade6jAvxN7NZVG",
  "key1": "4pzpnDEtoE7UDvqVvhetYct8cM4uJ4RpKEWurFQUnLXykftuVdj3jPnn7vvye547HdPkiPztRfG2kNnLzLccVmUt",
  "key2": "5NvH5PWCnq4VGsw2ybagR7TaCcMUyVQAEKs9EUYkZKj4gzSAqk6WqkEDPVvqoz7wF8vNaiViMF6p71zEwBB9H5T6",
  "key3": "hqDY3cFwrdnqED9EagA9hgyKi3EbuwP6DomkgUVfYsz3E9nsvNEKQcPA2vqXfxYsU8q1qE5r9k1H2CuTToe3Msn",
  "key4": "1tKp4GyyQUZAQxHqWMrXPZjxuhELisXQgyhTsqStMjyku96Dbgx5SYKdiKkXa6VULd3n4oqVCUK8eFwn6XtK5cZ",
  "key5": "2HdSfCbTsx9jyzaA9QynnM2KAQWiuN75zMhQuhAMmAjfMyxrKjgtozrUHAoayfMNn8pnQkNh7bcUFa2yaKQ4BWna",
  "key6": "3k1jtAnqfydHBFid4MZXG8Mt3fvN1xcXYNDBKfBLyTAV37Sv1qEsMUSEt6KFV597p5UkRaW65NYmCcVDWYuYT3AN",
  "key7": "5HMYjufP5XUca6caCDrijSWkUpzB9NbpxXEwK1vzdCwrJtc2ifq1314ooTUZpdSkX94ASB7B5t2haEmz8rUgQmVz",
  "key8": "3cJJTbuxj9L7hWqQmNm2G5erpXVLKpahAMF95yq7EUrHhWPnvRmt3AQgvKtxM1ZgmcWk7SMMW5GJkRRhd4Nz1Km7",
  "key9": "3qa5Sgz4bDvdEJWgsHSVtNttV7aUJrPgmLaAkQYgxATC1ipZgiNNjEu1wGYMPmKiZfzRjfBBSJMSHUsKPaaURMt",
  "key10": "PGykTpihUthHciQcuFbmNjvfwau1GUHLxiDLRF4cr5BAzNFW7Gm5h4nZM1NdsHac3uaEqF4UvX3EtuJX68XHPdW",
  "key11": "3DM3UdfgvvBxGdficU2Y6wgLDkLGY9fBrfdFcwJwceixnGfr5sdrQoqaTcfaa9DRGBX9qFi9eb6gkncmYkRBZV5n",
  "key12": "4x7m2SheuAqSArmKhzxpj24jrGAWhayti5cKo8RAzJGAxBKWQHc76g7C7JWgCYLbtwnfkDZCb97Um3okES7EvEFt",
  "key13": "5aaTSPXpBPMLbPmkCWyjTVPUe3oRX56pGrQWcyMsanwZoJeTy44pCvAzwYR9hLVoQqDwC1GAnJ5zpm11nfHcLMhb",
  "key14": "26TXhHPW9yYH6oeVkjxVJER3gVPyoQ2NTpL474z33Y5nZLNkbysujWS5DokUSUimGTcYUkZgZBPHAmKoqx84xXqy",
  "key15": "4aTgjKZtHS1dGPDtW7xtHEH48ayM6UrkLS9yqHnpAgsYUns1SpoREbTzLa12ZqEm3JVTFfn92kNrjWw46Rgtu3Qw",
  "key16": "2n8BZ7m2pRqE3JtZokGtYfrYavsYjtLWVZAFToCeT84q2xmA36Y3Mp1L9f8uMXzMQYudFagHoHejibWHow1Gf5Qg",
  "key17": "ZcF2pmLLZEBUiHMKDa58NSW9FCW3RdwyCUarNfsFT8gjejjiKVWr6AfQQjKpW23kw4HWhL3bUCnJBqudD2oHsoc",
  "key18": "5p9aA81UJiFoHrPLsKQxwVkJipDo3VX8NbapkrMeFjy1trhuYRDJbcfeBFes5EFzpiahicuvJFT6tsnKqmynNC8x",
  "key19": "RDjQGMMXZwR4LpbHWyw2m7Yw2juu8FFEzthkXiWTVvFrYZdpK7GQbHmPYdifkyQC478fsfJFA6hNn58zx9ihiKW",
  "key20": "P1NT8w4t3JVc5cZhKu9tDyxFED8p2QCFBGNWTBqeaoBxvMkPqPv3Srz2VyVL7fuZ3AnNNLNx3ftJjW1D6m3htqt",
  "key21": "3cLZmuNxP558xx9XFudQWMA4ExABqiHMiGPEfdbbBF3iBmxH5dursEbwcdK4GZBR2De3gBwCe7G9TzwrmGBh2AdS",
  "key22": "R3zFkvVbgh8Vwg1gmig5ExW5rLVmMo3pXTTbDPWowiwWWF3QX63zMPgtdobvKQZ58TJgdAzJeZidZP4LPdp6qKi",
  "key23": "2ZFpcoBCWhRDrh14tV1BCqDgZPremzmJxp2n9Tw3iM79jK11qTEHrr4oG9U8i2DCxQhvA1x1NobuCCaE2dTuXGsh",
  "key24": "5VhvcLoa38mzGvmep2v8AGffHL4PuqkbZdPdvEyFuffxD4s7o7RjKWHYxa6fDHi2oSVVXUpbdea13WwMpfkwy7Gw",
  "key25": "5o2U94b8nHjsBruqmUyBTkwaBY71CWuGVxPyzUtP7hAH8oXQhvMasgJHnmUYqjTRUWoxqEsZGWBpRbAotTyp5vzh",
  "key26": "42VGqfiJhg71vSTLxt6EpYFvM1YDXm57sa68RHPTQmH6sBM8q8oLHsnbQRGRW1FmM5VCgjq5s4L5bPjqJ7Wqtb4n",
  "key27": "37MPoxXAyjjFExZerXZTrXHtsgU3PzDqMsDmm6xV8cd4G38biRk2kZazZQ27XNZwDj1NmPNXGU6JGGCf3etFvmm6",
  "key28": "XUtG7V8qVt7fFVsF1Gy7Ffp12ZeRWv98s6Q1NrYVcK6hLyaFJtyTJBuRZcqxfhWRFzu6MK7bXxYKeEqB4NPNFPe",
  "key29": "2dsea4YmTdF7LkxoMttPDrF2XmYiezJ3oLrAsxE2xEoQKVTcFSz1tnrjoURFnsaLQDKXrT19eo4LKhfitZNd7GKc",
  "key30": "5zVHaxhZFT4GQw4FffjANGXcewUiBM2i4h4TyYHEhMHRJTthpcRHk2LZEVftCcegTbEjhbE2okW6yUJj9sTK35Xu",
  "key31": "4TZ1wYt7LuPM8yZiUdT8TkxaQ7x9mcHMWZmF3ppG6be4feMxh6akEDQq1w1JuNeKLLfisGXX1uS7KFZs6nveC5Lz",
  "key32": "3TrVyHJXEsBnPc8e6q5qhP8YsrCxXW4S1U9svjNrPeaAcoute6QVSQQXuDrJsDvLV5aGGm6zRhZHoxZbcHQRaCRo",
  "key33": "5SjMdEdYQucLFBNc52vs4kzp1tvRshrQGeS4JBYCehdsKN8x4cZsSwtmQH9G9wBPsuV4g4nYikaTk55VePzSYAMm",
  "key34": "32YFD7bNsosmEnCbH9TxaGZ4hWHoM24bkWnShEVrLqCH9wLq3FTyLtWn9iP9uqUJ61nY7ivQYzVQ1XewPinv6pJ3",
  "key35": "2KLNCHhZGDD28rsWsksoo2N4247Mz313b53H9aytGHQ6QAiqh66uYGtx3DdUBhdcCR41Y2ubWu7pKgMNXBsCk9aS",
  "key36": "3SHRk7xB7PzWQ4S7YgvtJdbPvsC3BKcrkzCDLgtHMcqsTexiE1ic5AHT8qN6oJdcJCFNzULjdyxmr644gfQkdakj",
  "key37": "3qxkBnoqAzHDoWYJeVvw1Dcgp2FLMwYjVSPRhdwqUDHEWpnfrNcKVAEv69Lqg2GtVNMJ8LFm1KmiAdobYbbmcJ5Y"
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
