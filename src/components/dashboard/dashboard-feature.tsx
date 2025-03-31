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
    "4fQW1a13sVLxDQ5wWaDFzSybHLCB5sWv29Xd2W2xhNXXYvW68touEinRLC2bZF4iK15tkpKYFEqAwSAUkNbLHMzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28m8JC5y1wbF1byiBL2BzuV7a5NPRvGi5rXtJwNyB7S4Jd55oSB1BHronQjazaFTDmfuBPWE3YzVnYJfjPqNWDQU",
  "key1": "53ZAHBsTs7DKXxQtXL7ZZWgG722Mo3ZrVyXQWxwRRhyoCExGo3HSnp4VdZiKKNboyNgr6wRXygGvtu6TAnfQFwnq",
  "key2": "2mtkWbWMy3L8EPYhYzzaEdQV5e69NXC4EbC8UyDxoe1Asx59Ud4S5CFciqfqUGb6FymTzYoYY7D16B9khyrerxFm",
  "key3": "4MKbheCmEbHGz1ihfHZmm4LRgmvgCKMUbt2za8aGZCzzGjc2ccbqS7Vu6mwtYYhKKupSjG3JT6NJn8F3ueW7nJRH",
  "key4": "5XX793ZymvKZj3EZJRgpENzWrj66JR4YtX4RuQg7BL8zBaM9UyU4jJQ3ysvJfQTgCLT4sfNM37ngy8ZWX455fks6",
  "key5": "57sP4YKWkBDK8EqFydCSH5ePMn7f1EMo3hgyq3Eo9e4Jw12QYFBaV4xeXJMXWjeGPC2NY8wfwhCNqA3nDCQmUfLD",
  "key6": "2rsiQboa4PG69uUC5wRsrq9o3Sxuqcadex4MuhQ6EUwYgsVSJfR3hDsMnybAttXuq2Q3WviaXr1pB5ZztamZtZKW",
  "key7": "5qertSuXKg784173LDo69muw8rRFQQjf5QEjtvG84mfsAPGPq3aeNGEvEF6Vic4yNfhpNgHzXBMHuzAFvc57BBzQ",
  "key8": "2pzMN1Jd9ZpprnWYSqN9D3NV6V4GHzrKJWBbFPD5bNGkNByktibzYf4yrmE8r6E7dzVW2SeFVkvTkad9hg7m2bEv",
  "key9": "5tnpcFWyBf4N8NNeWybKwZHj9Hygh61Dwr75FpySBsRjUM5HvqP9EJNgRAZjTiMcmmZtvfRLLZaRDxuhUvHjAukN",
  "key10": "2gNiBq3JGQguVfHUwe6y1MM5aa3fQjykPNtSuyeghnBdhzNetb5s3i3QMX9x2yDe9FbgaJ4wC4HGhKb9WuECJ6G6",
  "key11": "36bQoBExrtMRmu4XM6NhD64PJ4mowgjem3GcB7t8faTeZUHqWkBaVPmYk4Qi2oif3mxQib5UnRvpGCbokgPTk47G",
  "key12": "23KJKeBNgVuxuzfKF86qo4oc2VMfmWsgyxBdmAYq5SBid7a6hLqCGDCwP3sfciS221Sn1pmu8C3EybmS2YJtaaRz",
  "key13": "2TKGeqJ13pzLQpTX5X71EXc1iAqcDE1SPLYT4MxBgdxqKnRpjWzEsrizZVaEXKvRVZa9vmsH9vjBnieomhYsjxgQ",
  "key14": "2VDLfFK5Ejnc4TUUNzjt3WVUpM2zF2TG8asg4B8n3EKqpAud6iRQQz7PXoyqGh8UDbkEN6vkCrQy1zTupq6fwB6F",
  "key15": "4qCWmBbEtAxqySAkE2C4AA5m9GBTFVEpQsWGBNrQiRbq41xXbLbHKsiDVoqbjtq27Hsqgcp14rfjZzV9RHaXmTaM",
  "key16": "2sWXGzaEg6HCVmtow89v1HGCHxrdpeKzhcaixiHf36DmoJqXJiCsbzbPr1pk8AB5FDs5udcLDfEjXKsnG3UnbXNa",
  "key17": "2fp3xbvNqYYxATeYgqadDxFgChdRmusP4NL8f9mMru1iTFc3VU6JPpHbrXbSMA4UjNkwu7cBjmXJikTerPscHywn",
  "key18": "2sZXT95RHLBiu1gMbaerQhT6shcMfB9pmdedCPJvNBcySxEFwYVgtfTCX8tpAZ6xnwAHGQvP32ksLaKA7okqLXVr",
  "key19": "5tkssfB1Ec2n8LLKNdSoi86WfwsF98w9eGS3JcNsPdTBhJrZLBjQicNbsXTtYwUwvosE4Uj7UgQJDrn8UQ62123i",
  "key20": "5DzkF4v6QK74pWcxbApVZzgSUJrcpHK4UKiNBhLkrMj3Ao8wthHxjgrhqcPBpaVxa626cJy4JVj7Dx1VzebNkbZM",
  "key21": "LUJLxoBaCVDDKS74XAfCDcvdoxwUgv3GHshajNsBRMj2yTgZK46ptBVzGFWNhohbs85BhRYvU1ZqDXYqaAUi4Aa",
  "key22": "5Y5oJZhsFwE8iF5RXjA5t6dtwQpmyooPaq3gPRkGNPWzYaaxAi3mxgsyamoyy4uYx4nnkk3NZb4bVcnQTiUMzqKr",
  "key23": "2tCPWHN8uHwVdwSMGzNiQmQwuw7LqEWWqBUaVY7rBoCx1tGgVnvjyRtA48JTnew2gTrQpBCXqTzgB99UZbJraTub",
  "key24": "3pmAGTJnctZxf3T6BarXDEtXAQk9kjnAWWRfjMhN9v3q6D6r8s3hwZG22y2QpD5tQuSRXzRjmQsMnH1HeX3TDTK9",
  "key25": "2gxkyMndvcJTerxQFhnGL1e26ZxVBgShog2rGfpRfEjSF71EnwTvjnfuxb4QfwvVb1pFEvUFGXeNxejHcufnutAB",
  "key26": "3yTJTCZc5xnXcaxHKA83CizG7W2u5HrGyeUVwcrABf79WFiKCFjtezdzJxFMj8xERMcyywVaxNoYX9heBWppJLCq",
  "key27": "3qcRCoHxUjg2FZnANuXReXxLhrPsXJuCccnJfx5E78EF4t8iSxwh9zCYJJ7iLiQa3jXBFJzyg6N4bZ7bN37j2pr9",
  "key28": "63TCpGEMDEQ5qpEcU8FGYQbbbUeRM3PLqoAVLMwmM9TxX4Vj2pvnpYqFAmikdEJMRzAr8cTHN576wA7byudxB5Wu",
  "key29": "2ciuz4xUvqG5QXD5Cj2PjGns4Qqb3ha77fhGN3vX1u51Yp9VSR29igFUYo5HNQETnLPnt1ArS8tCwfREZZh5STiu",
  "key30": "YmsLZu7stb3F9Xo3wQJYhpJGBFemX565dRG7ExrHzhMdT71cDjM4wNMJzuDiZRh3GY7gCMHyGfPM4R735bTjS8h",
  "key31": "4RfByojagpmY5gneGvfJEGKvcmEtwrHxJUKJfwpGZfjcteMVtr67mBbQEjg424f3FUdR1NcsuLzBGeSd3G1G2VsH",
  "key32": "4yvT1gJtcnswTMgAZbo2QWx92rRA2FBiMC4fCnhqo7K2UVhJwPfNeuDzbYohLpHwDqmdxYectMaG3xEfGHwpvoS",
  "key33": "aKav9t2rRP2PGSbDuFT2iRCLabmxn8M5n7atsUuzYUbqom8bGX8pq9PKdX98j3oNasMEUnmFF9ppzgbv7eFTb8G",
  "key34": "5dCWX662hNifMWoTwMpuehchWVWdu9Vev84dt7J8A4UKP2ChKJF3TVGmk3wscyH1W9UqoaKiMbpEGxvSbjoFGr6c",
  "key35": "4hFaRKerxPLcqM3GYu7qRqwqbwLUM6TPLopSTXWTEM7sSG8HKymCc6KJGhdmVBrL4yfv59i5AQv7GgyMZJUPVK4g",
  "key36": "59Qp7BthupQHFHJXwkNY1JjxZ8CFjigeGekC1nkrALN64pxAntJbCBpuwoVv5GJtKqedTG7JU5a9rV9m9MW4v526",
  "key37": "4nCxUL9Nvfzd5uja9wE7a7UbvMSQH1Bw58xQyBHSqzwCwK5snTriebFALDR5XSS7z2rPA9mv4yAFhDgPpLEFMkRp",
  "key38": "5rLpX5Ba7SCVvsxaiFm8JEBVYfLu7DGE5DCbUx5wCFaoR86zHuPMMS4Q7n12B5kea5w3t6KQzmJH1ZLGnm4mvuCy",
  "key39": "47Svh2whmpNoPa3shATUPvNG5eChKoFWVxwTQTYiU7v8ztGt6USmV3MhvDeDbmm7iQcnPweWwwL6DrukfPBEGStY",
  "key40": "EtQysyVuw8wvabGM5tFhvVb1MkfgR9oDuYGE9XPSEJh8LtEhShUkC3HRgLUqHeCcZ34o4Pmk9mcpLm6cXA9gkES",
  "key41": "124RHCaJxAGpoPoEyoU9w81pbeGZYWMT6YrdX6SuJV1bRHiewcPdLdoD8HkZ6YNY86MTDW3y8bRLmv89Pkxkjop4",
  "key42": "3UPqQmqhq8HatC4gFgf5LgabXYnJFQCtXgzd49T6hiBeKXKDStAonyne5HRH7tTs7Y5uDcvxYThhdpMmDvasDRHw",
  "key43": "4aiViYooRSgfSD5ApxTwJcYZM5vBu7Uhf2tX5ZPnUCzHmQzYp6ZPnMTqFQfqiiqcoYCtENemUCcgatmLw4wUk2oM",
  "key44": "5Wk6EnGpD49x9AgJAVSdNyELL9KJVdpjTBGQhGZgQJaVXYA16TfJXeoM4AB4EEW96dhiGdN3f85UJgLC8zedhCd1",
  "key45": "5AoReTMbtFFdDBs6z3Bjrv85iXjRS3F5chWdWdFeeGodgmYNbNnHF1ZasXCaakRf9LSot259Fi3j8DiAc6cKAcrx",
  "key46": "2upSgvZbbu54DMAP1VZcyyeTboMDs3PGMcmDTcEHjJhxR9z9ipo1HeCHMi7UXD43hDQYbqY84vn9iNENFaEpVDXj"
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
