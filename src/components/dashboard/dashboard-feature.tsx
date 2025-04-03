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
    "4s7Nsn6ZgxeFVS5GGHFKteKwGTnjWtjxFGeNsEYwsv89creNG4wE3HBogAoq639VPKSyeAFq1rqMZzh4g9HHmUnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPVFhUjEDrVjUvY6x4SnM7yxGazwLGMagR3VNNn3czbgcgHbpHLvFQa2dpy5uJpSuZRYCxVMj6ayaqeiTbbYUbW",
  "key1": "25P5PJUG7df9hQb1szei5QDHPi1kVG25h6wySU5vWqs6yvKK1ZXtr9VFYaa2uv3fmfZa7tbRm42aieo2hfg79jLp",
  "key2": "41HDP8z2HWRqq4FKjCLqTf6UTaD462T4JV1w2DBVYMFKiPRWmKPMw4UfQNkMMPYcG4adFBbCDSxQRaSCDUB2FQwB",
  "key3": "4NvUWG1ZEMVzmiDWwYr9PG4seM6KF1TPehUy4CpL7fmWk7CdLqXWTjB88xeCcjTp3SK8H9dkuXqheLkmRmoXEsDs",
  "key4": "3xPwBCBygEsHtLLf2fhYytHiY6Ko24gmuPUENi6ZZELMTLANzokpH5xhwfURqS293nrYrLN4Yo9MDks31mrMewqH",
  "key5": "39VZ3SUfMzjnE1hhf1NWujStkr28ZPReViLkqDRfjdSgNtEEQ8zqguiBLsEFgaRQpaWeVQsfW8iudTRvh2LG7xgV",
  "key6": "56rHHc1Ub45UNuRba4qEVvUCioNdtULwcAByTzgKv2ZaH4BJXFEK5Y7U8SjJVUUwFA4JzD4UyRR6GFDJCG4XMYJ9",
  "key7": "66x7eVP3nZCybjCexYkffDJbSff6j3GCsVutmgiyBcJkE8k7me8Y2cgCE3Vw2Edrk3Nd7PCQTYRDr2C2SH6X3hmZ",
  "key8": "fttJMGP7GCxAEMFe91yiiPFiJprct569CkTXum1rEZU2yHtqdyPmWoNUfst2WXwuaBTSaRfSjTncEenQUHuBYGK",
  "key9": "xpmWP9q1gKgkJHgNonRaD2UwRMehHxjGh86AvPbgNVjPgsbRCqp2VS1ifw5RJft6iND9UF3JmWopYTH99eYsL35",
  "key10": "8aTLk9s1GM4Vh1iZHP6rp42St72RUwkMeTz1ipYjTYrHY1S8pGwSXvXhorofZiMymx5TiRu9vKXdhEuRdJtLTX6",
  "key11": "MM8f5SqqyGGwKVAhdWMSbfn9t8Tvs7PAA4aXc38oeuqpC1ckNYv3qRUC7uaRKvNbVk53cz4KyRUPU4NwQzRDZTX",
  "key12": "W24mDHumrcNvCancKMC5M8sw3oPwEuNw1Xs7Nyx3KCYkStBoEKrPC9uCL7nq5QFQsdaPmXGDZg5iYskk8r6J77J",
  "key13": "rGECWEKe6vAiF42HdBdChmtzzA5PpBHevpUAFxcCgGTGjb1x5usMKDz2HE7zA9UW7s3g59acRw3RgQxs8pDcpNy",
  "key14": "4Uqni5V8d9Lh6zzg494yjBMCXyZnnorSRucbNGM9tiFYj2zJ5bb4j2T3JgN4tV7GPJtg79Ws2GJxEBQCbRrXfP8D",
  "key15": "nszdyBUuYVHCa1413GBRgmXpLB5RW4apQSzAjoGk9Q1toHhm99nkxPhnf1BQJVXz78ByAKihhWqKtYuFj3S2L8v",
  "key16": "61J4fDnm8tCr3ghQcAd5Yp923R2RTYrrjbvNqsXVSmv4GBvwYVbkfXR8KXRJryyK4Zg4uMoBa3USJCbFJqC9Gsdi",
  "key17": "7kAj71Z1vj91pjLh9uX9uvEW61sTC5K8YaZDXsFucq3kn1f2pGSjsUofZAAu6c3ZbqWCzNhZT8A5EHYmP58Absa",
  "key18": "5RhSo8Zni7APm9RScQLfpem8eqp6eZcXAcH9kaRuxPY5JMT7rWqTtemNkJT1qHdJvNNBgE2sS6Evsqnzj33HNeoF",
  "key19": "39NPcHw6sZHeVfYkz5V5Lc15SRS7JCHwx4ANMJxnoD4aNBTCFqRL5RbsxuSfafzUvts1rwyTM5XerAz9btUFm3h7",
  "key20": "2r3uaFn9EoqSBQ8WgoRcJkz2UCiyhbRy7mx8x6o8v8hsNAD3t8iCi9ZuJizaX8hhJxmfG8vHKK9CQMNHP3ZYbBLg",
  "key21": "2Lpc6vGDnHjz2LzWSMcAwnp8EAHz3Ajqq2C691mCDJAYJm1gef49JEAjuZUFcLmpePCWU6cMviPwRRTaQTD1VQxo",
  "key22": "3NPPmVtqg9j8VARCyUswRQyBbvtdcy2ndZDfmajepZRaSQVhHzQizjMNpQqSs5Fbqaidm3zevH6SBnjjEac1TD4C",
  "key23": "5f4vaAVH5hEyyRkuUvcFaTZZsUmLRvmvKPrtkfMPmBBo5GRGvobRvgZhyqaLniC6bU1XB4vLED13dWTWkdw9NqZZ",
  "key24": "BJV1fCnX9pj1mDHTWtH3y4B92VEAE1dQ6wptVxsYTVFUpTyPwFNJJeHL2UdZkh86voDjvNiNpE29srAsxYv75Np",
  "key25": "MTGW5ArTVbFHAvUskPS4uzyNE3z8VbJ7gnxnpQqrzzVjDyUu1eRGWSvdvqdfDGKgab3Chg15b3eybPEhkhahgw3",
  "key26": "44Hb7yDubmDj11mqf96hoouXcEc2BgCRcd9WwgfLYLx6DpuTqqmkpwzAeTpfVJQ3gTPxZLMet8iQopbgikykT2Rm",
  "key27": "4nC8KJ42a1Tk5ZaQGa2ZmYfpb7kkVafVdkeXZbyKtAyrVrqhNmxYEn6pMEk92dDGTD4n5D3dZyxgJ1WgT8JWHPPU",
  "key28": "3GCp7vkAnJXWkxDN9Zr8kgXaDDnP2MQZDMV53CoN36sfLYGViSn5RScx3EZ54jobD9SDGGCjQcQF7JxKv9H44GGr",
  "key29": "2z8hcpjAcWDCWMY7z5LvcwxZMcU3WBsk6tFPjXftRTsED8qoV1TPDT2SvzKfK87jZzjXFtBBJCmdjwhzfZzQttvC",
  "key30": "49nKSaQ26pCtfeXMZXT2sEW7CFMtzrYM5vvJRTLJiakxyZCVrCDf4p1kQrArFcLNyL4Cq4mLziBrBFf77ZiP6iXm",
  "key31": "kdH1hLFPqbU4vdzDBk5g4kBV3xtXb3TFAKoSXEhHnY52svs8PRuibcc3gZxmiYZzKxEDK7vvCaVADv8fVhZvVWX"
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
