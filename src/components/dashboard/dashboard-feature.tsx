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
    "4h12itDA4xNpJxD7DPJ8mXQsivK9jCo3P4oGTQvs4BKyfvLpBvj7iL1iws8JATUr8RW7yEEEmV2MTjLbTp6EDFS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E83PEADiuNcDdsbXkmwrB26RND69UcXRGULdLReEX357mQtxPNn1pYt5atp42wXtN82uxhaNNUNKLpfgbLh4D5f",
  "key1": "4xb4Dx9XFMQpn4WtWfLiiXwJwksxBni1UsPFrHcrkbv3mBiyw4HjWDe8ybntnDKQ5GpT6ffaEAyuz27HmpH6gNPV",
  "key2": "5x5YsdxCMjfRNWWS676G3SFTh4ZyRBoFtw9FcJGUVvE8yv1TQG1nDktSXDMaLgMehwdiPVrpz9qiULiDJaocYPo2",
  "key3": "nE79tscYhsWmB1jPkRLua2kgAVBoR3uTr6xicKa47hYxqb74bVm2xg6DUFG4CXxDSknbmiFZvLYuKPDKbYmpzf7",
  "key4": "28zqLuUrY3EgBAqRMECFRxwGm8kAoqvjh2di9Srigg4Nma9mS6gSVXviEwttaVhSN8U8xCDLUsjbf9bkCxpthmJd",
  "key5": "3JN8Q7j1TDuEfkhMBEGEfrtA2eh5xrwf282CRDupXp18PumC1F2kd71GvHJLpx1V42dnayY5MzeEPho4P2zKBsyC",
  "key6": "5etJBJYQkNgtEM9N1tJSFacF3YzMLqq5vEfMSJp8cThmEFhFLRGLRdo6n9rUY4GSvgVycVNr2miL2rr6R7r3anCT",
  "key7": "LUdvcgaH77ka4UuyPjJqw25jJtJPFhD4HLTRhN7hKhtpa2MVqdbgqaDt4ZPYEDr9GMDXZRWGCMf5CZSQJvmpupX",
  "key8": "2cfrqmfoSSBJ1L6aACSeEdRPVMP24uwR36rB7soBWc2bBAaB3p768xNY1ueCcFb119DiS3U4XRe12bmmkARGKZNu",
  "key9": "3mT6iyh7eS34JBfPJfF6PSp3wxPu6JxxP8EPKQyhnt3Cwmm5kxr6KMq54iCvnYzYKsDmD7Q6Ymt6sxYBAepeoSTF",
  "key10": "4TpwJyqw3Su91SYw8B1CgVBYfzKp62ZkdAG2qj142A3u7kxjtZN6UJP3ZnWLpqcVD4rqoWui9t5koUtJQ2sHkhJr",
  "key11": "49kT4KsxbanMCMyQ227ngoQCvxN8xx5QrRDJY4KjuVw7ZSzxe2f5VWosCMuq8rWTwX8zys1LCrekwCE6NaHhUQru",
  "key12": "5Wqc1bAEsuWEozG6XgAsr37pmmmM8zqvWGUfbAtvBF3KpsnrDrJRbuuNreRD31ZQFrXRQboahRsrrr15dWoLn7kK",
  "key13": "5pyVBWjecHYXWeMaZjo4YeuX667t9M4iwtvAtXSD7sjcGm8vqAuGicuQytLbWzXbNcznDn4vZLzfRQoRZY6RzrZh",
  "key14": "4WYVMaNU1GRT3oMeC6kXQyzj96pMC9qn1PomH4CAhm3awXKgVbwwenHSARBYGEWgXtjjFQfbWRWtV58Yv8TEvF2k",
  "key15": "4qJj73jryhDihUFY58yPNFnShwkPNhabZhrRF9F4NHvJkM9wLe7bgB6EHg85jX1HXN1YoGAqUpFhJZktMixsfCEF",
  "key16": "2Kq6FQMEfGwmbm6jtzPTuaQHi3S7Sp4Hw9w7GDyMEviucmoSsBrpYQ16NoJr9NQ9N5o4adZxTssirmMaGp532HJE",
  "key17": "CcMMjmchL8Auq9iPW8ju7op1j22R2Y7kJjsCLpLaB3ZUdK8pT4ZcsNMnKF2nDDDaVAH4grz6b7RWpQKXVSeDHFQ",
  "key18": "3u2kDmxSUAbnEdFvSnPktFfhLkdUWQ1FcXkpqncv4ikE1MY51YotmiZxzxbdxUMFs2fc8RMLsSmT7wQrjCWP3B4H",
  "key19": "3n8cWc6jKP48WBMhhdBnVT9s4mhC9jpYGQrbZfXt5rqB2tNjpUNKmfuXPmMafzjCE6DLTWML2XxHW4GFUdRecpjX",
  "key20": "5KF9TVzCdWTbxYC9EshhTDq2FSeR1kMrqTd6yyMD6q11NTPJb74s34jn1hfCQpXaypRaX7Rtkaj8wWBPMyfpE6hd",
  "key21": "DVwfvYYwDKHujtJCEhQBpf4KAQ5tWQDBXk9MKZoWbHHnogd4pnKtfz4nFdqsdL31ag4s364KTvSUxDdg1t87G56",
  "key22": "2csdaWFWJJA8k248bz3cS9DRrDGE9LxY4bw6Lv18uuoV6sApBnUkGgUgoNt64dbt4cti8ptpXo7iUsTCS59UV4MM",
  "key23": "4tfQhFktYsQVMKrNad8ZeW4bpx9Lr6fbprGkG8NwWwy4i1Aruugubv4egC6sHif92CBtKsamee3gTa5nJ12FwypX",
  "key24": "2iqh3swm1jXJSBxJZikLtXXAGHy5cTGH1udhkfPqa9TjGSxMprREMmPUYCtKsbRGS4JP5EY43b1bKYCk5LznALzv",
  "key25": "3ZtGcyfMTXUjapJfLL6yXSiCP2X5B5wQawAcAEj45oQ5fCWs6Sk1DQYCyxHHJHwKSPxvdBENEurLYFR3uGwAdf2r",
  "key26": "VmnjhumBLWWZP1gyTHxZkttoU6G3XH6HfusNk8fp2t1C2kD6DRHWuiTaaxUs9214HmTD9PeJ1WyddmGb538GA6K",
  "key27": "21LueM7U159ZTE8m7dZePxruw2FRFV5EHbLe9oWznRcvgU4RgUtePMXBWg4qKokUhxtqH6YDwU2EFFY6DufKXhb4",
  "key28": "3BykEt32Ltgkn4oWicYoUpQNkz2uZhXAbTeq66pk6quKdd4y4DbKnLpjfPBj1YHT5UyAvRXEandNBsyJqQiewv2C",
  "key29": "4CaStPnmnad7knjNJWpz4GdRvttRHQ4sbr92dHVoYnp2RzfgSRVLcHDw8w3zKV8rPYnaAwLEeVVRHJbR12bTF8z6",
  "key30": "2mkhYRp53EhQrRwzhWG8vKFEUt1TmfYK84VYACPCv43bLuVkbkpz7NFkuooGErqd1gf2UGq9nC5rpWVFNnv4h3de",
  "key31": "2sZkf1HCWE6mTAvP81erxwa9oZvPjmZ45WZMaUP3CJbVfJAv5yyvgECqPCVonNZC4qwrc5f4nBqrr3onUQMZNhrp",
  "key32": "LDHBu1BUNMmUWU3wJRHY1CcUMiQ6TdfsUGkvsPQrjvr4jZ6ZoJYKNgEgNJ5VUoH7SuGTJrTJQbUqYznanVpwvCv",
  "key33": "2SPcoGpNRq2jBeb5ZbMPGMTTQMUdHpJ8pRfpuCZkFoHbc9WRfy51oEQDs1381GQnAUr14G9SspRcywezN6ZjsXxo",
  "key34": "2WXg9Dr7tjaddWSeAwtBrWoWsGPEx2mHhe1a73NhXzejTcN3Cn8pWPrL1dF9kM5GoW6W2PFsk1s7rpftCjTWL8bn",
  "key35": "2sKo6uGZ7RZsHxP3URthggvWiD3Tb8xXVj2rXSyin5azk8YtCDLyhEBZ4Cgh7YtR9srfVGTpojmge5FpZkNApDft",
  "key36": "5suP4VUUfxFmSNck3SSkRrtD6nVGcE7eqvWZUwesGbYA7V4D6h2zks97htS2fR1M6M2gJC1pCbL46NqrCQyfBfm2",
  "key37": "2sTXyYUoegwqLtFCwcEtjy5D5xZ5XktMHWnJGFBcQhobcgqLhn4bkoRt6AwHTBvixk4AryN3swzPonxHp7LbJdQu",
  "key38": "492mrYAQ2Cnq14B2b3tqqSgP7ew8Fo4Ms4nUmKYfxrYJoKsg4sbYaToHq5CkWqLkeiCUK4m2riJRxCcSsHgV2CBJ",
  "key39": "4GKnxriYrJ4o9JHQpbPazu1Se9WDMLGZL276eYKjNk2DscNYRiQSYvBiaANQ81qJdyiR4wb58rf7j7FSLCa2cJiU"
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
