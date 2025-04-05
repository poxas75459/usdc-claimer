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
    "3nPMv73EnBErRdEiP9hkfmJbs1QKNHt6d5M5NEbsreeVMLXdGJ5qdgH3ASj24cjFRTzAWH4Qr8ez1jN72pYyqCFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtDN3VYHyyJQZrwYcNN8CEEVmjgu9tYiaBJssNbeksFioUEcqYTTrtwkpUhboJ28yzmXsZB7pp7c9Ax2WpwSDck",
  "key1": "4ZhGVL4D4zrmH4KWFtCm25KHtrA2LtRQEgZFSSEmJL59ovfZuP16yR3nF22kAiexCgWwTBoouBS89q7L8pphfJbf",
  "key2": "NSNg4Nc6MJNUjgBRL658ynS58pnVLHqdn1Rxa5NXuwtVmwnhhdPYRLbdVNW6X2s1UE68J3rxgmP4Y2KTqx7gK8t",
  "key3": "37PnnFsPPQajBXroZJJxQKuWxPpudzNmQ4tNjHMkbejPdWRzW7THFSpnQGabAqHYLrFLn9D7Edd1RjEZH2hMpLTF",
  "key4": "5HkZbaRR1SzoeWHC58w66n9Srm9tsruBzZqnFejzDpgWjA4YzFj7jNKJVMJDxgz4KFs9JZwDipkrrXDA6Vrco3tU",
  "key5": "GyCGKG9XRQnsZnmZTQMep1kbrGytrUw8GX4LphShSyj7kh23sy3ER96r32Q6zHMaKR1wjjTjFU3JqAE6ehuTLoN",
  "key6": "3cDmByiEmq2pfXFhVqc41SHEpXwhAoQCLZE96TNCnjLKQKdz2QZSewky8fbkc4bmYHQYjF4zo5yMuy9KaWJtNrz1",
  "key7": "3ZRuRLkFah6fkMnb6QpoePvJENc9RWumv5dvndankCZYcWp6Qc87XKc8dE2ZELLMHqVJY2aSAJNLKBLKPQ9ZWGki",
  "key8": "3j4TNQzMabNGHgAVdKUnUs3DpiHuZfg8N5KWR23GiuYM6vXY8msPuhtRaWr8aLXAHhGfCppSAWvnPDRZg1i1FZ2q",
  "key9": "2QVUbUPRWfGf7jjXUVfgPQVb3MknUGJQ47VV74qZJwGtTFX9q9njkz6Uq1xx7TGafMG7pq8rswGJuePu6oicP8nd",
  "key10": "3KNv42cAAMmnzTPvwVWAaiDwaAVfpGTsncvhjoCwkvxMrGFCcizfF9LafA5EvYSoHGdk61jtkj2uhXCiazUEgwuu",
  "key11": "5u5xjvRib8CmcuoifsLutf48vLBpJ85xMQu1stGLJT4KSWTsEso1x6hb3BvtPNZVLgSQKR9Nqhb72ARUm9PNfb74",
  "key12": "2isangJuz65eCHTMBHDJhQvkbRHC7bvDdaMshsb5GdKinjb4yhoBZUvEV6nz7PbB5PK2F6BWvmC78eMEnBWrzwFF",
  "key13": "55Hmpw3FHkYmDUZFRfvXreXnTq8j4Wr2UmwEkAN2JeAc2iXEJYSVfzp8dGJdQFnyMcQfiAVfKeUS9aZuNC6vifep",
  "key14": "jYsHhq93RqSbVSzPazxSB2gXFXqciimuDgWjUAMsMF3XZTjHSGp3xJp4xiffC27VgJ9VoVni8jt5cH6Ge6oUzHL",
  "key15": "5AuQY4GW4KQ6aYE1RZ2F55ufpQtZfvRLLyLC9HLEZxtK48hJwvHnx1xL3rH4cJAgNXaznJGkMgfzydZ23nr6fq22",
  "key16": "4PW1qzQnTP1RbFQpVN8HeFrGqADsi1dXoJ9o8jNCLDEgmVtcxYYZ1Q1Zyxia8yCsXEzAQDgz8fPTMLJJ5SmiBug",
  "key17": "2YkZkyf8RnQ1d2t5zDdHo7AzTtbKhd6ac8uXiCMqdDL1TLJt8vG5MM3DqCHuiG65jkeQ4rZRhTacwhwj94zViddx",
  "key18": "37H3Wy8jmk8ZL5PXYXkTamB25J1PHbd55WioAEyU4QeB3bcqwdSZffd25btrXEvmNw9yMtrnXTLib4JUqrpLgC2y",
  "key19": "5kjtDu1HboHTu6v6knX4J2EtjHU3tPBmonBGrH4U4AZ6RkQ5uvP6gHnZuMUWduGPBNWSq3kU5FtZzFfhA3QDE3hf",
  "key20": "2nthM9wdSD5rRiJ17zwZbJ2aYgmMbJwS2CUg3F9ZPkUaXnHZ3yTpgHVcnPHPrHNnzJrUiw6mYA9R3mMGN1QoXxYr",
  "key21": "4dgCWLYDjo8VJPtVVwttmyYr3ksScHBhiFY3uAnqusbZCs5y3RjZpE24Bq4UfH5bNz1UDC49eWEra4W2XWaPumbX",
  "key22": "4uDfSe2zHbnKwim75FT4nHLfb9CpZ1BS8ast2iZSKiBLJqJVKUoBe7ipscoXVndtEDqQiMddqFq97YZdj4G6cV9z",
  "key23": "3WCMF2Svx9jACLr3bQkAM8q9RZeskFNF8C3ZhrznZyVkFVcF2WseciLAeBBFYCrZVwt9L9swd1eixGopg66Wemmg",
  "key24": "2XSeiRTEBuXk52tJhRyEH6WGTn848m2JrmZ1MRwmCxFZko3oMFtUasYCYmS7mzrhjx6VL67wv3Pvkbs2q69iVepm",
  "key25": "3cKK9w1FP5y2evbkRzYPzWgRSafJPRGuWW5wBykGbAPbTosPqsnrvjTb4wuXvivyRzjBBk4CMvAkKU87TxkDHXd",
  "key26": "4B1NVU44m2HBTGWPssuseb9tmmyLxFAU9JmeHqV8rArt77T3NLUifc4iZ8EmdXqqj5UJNqTTz9HQbGbk7sDvfqHN",
  "key27": "5MQEeoqz9zes1SNSDx6HzkHSfn9stEe5APvyLkCZUnqjuY5HvWZhmYHFY6STysxArjV2TkpDS8MxGqZUhaL3kXPK",
  "key28": "32bwi4LdS3gLG2ukdo4Djdy4Lj6F2Bgd2nujKuvwvdFs5jxnZPYTqi3ieuVMR4BJacgPUqUA85FhetPMNxpTL9Ek",
  "key29": "kFu7KbsF9MYC9cHwa4hNAc8MVWedaYTWJjQ64p5RS1evcxg91Ghi8TWs8Yp7JTSpZDprGSaWH88UQzStXod48dq",
  "key30": "3cAnq8WiFxtDP4HisZAqNFDq2dKVCFGg1q8HKUetcLidV9iEaD9psgb4LF5QoVroDLm4zU6jqNUgXZsmTRgB683d",
  "key31": "2urkmBe2j6Dz9AWifQbGPqNcU8hMknLALFmkrHMxmxzybpNvRfnUQvyxXzfQvMbe1emyUgzsaVEFUwpWFw2ED146",
  "key32": "4baXvjnXHsdMQA5BoF4S5MYRwLSZY7WCMbP43HUTp79KCdxnNw3P84XxZEC6iHVaYkke4BA1UibKcUP9MsAsUxRN",
  "key33": "4pbJRrrjdxC9wzYz7V1coQtigMCsKgmhVP9zn7oHSgrWArDHejJuHGPs6U9g3zXDnfBPtXQbeK1YUrJYSS1kJhTj",
  "key34": "4bAeBvidEegyULajY1HBZpdF19VAuTFDTr7CC9tV6ZnMcoipeubTHsRG7JzdqHbqgsCoHSWdZ5KmcfMXSbT1ZFev",
  "key35": "2ESKkfXyPFvMnJnnKQmgqNmyTBWBsvzm1VHisER81QhmrdvDdBnggH7cT1BPmtLMoRic4P6mxcASDKVocd1jPhKu",
  "key36": "3mR5omMdYvi7NQREK8PGh5wiNL5BqKQCGz9VFkRAQLqH6vDPHeJhfWf8jBzUXM9C7ecfc8eXP2CRKyaC9dmTntZp",
  "key37": "22CBtNQrbr2CVHLnAM16CTPAXHszPJTTCfxCpETt5fYCWBN6aADYw3dWRa1X154EAqYiA52jNjYTbQahs4gPAx63",
  "key38": "2UoEmrk7oYKK17qnDb7VtC2r3dE4rygK4eEtzx8tAt6UV1tCUSvKUh7XNNuwBJsS1QhEkqCGfvh36ASwXssg2Hv5",
  "key39": "3Pa5g3X1pHwQVvnT5kSnJwSsu9Na5VrG1jqCVN6xa6NYayYEsn4ntPubJo5qDWa5BQ2BY9UzqMp6YdycANuo2D6W",
  "key40": "3RebgaFmptP2WAHdjB911MhTFcdVe5hJh77AL4B7jomMmVR5CV1qKFJtNZJ2p9YiVcwnKz93i2xkws4qDy4GbpaA",
  "key41": "2NCWqPgggbAxDeytmYGo1Ch8gwJjvGVe2noKExFADdo8dadH14dSzuf9eFiHU8ybB9FRjpAu6hqrMLmwjEKKkB47",
  "key42": "3CTm8zxkmRQSemCNU5YE5Kz5bDYmBXykgNWZ37tEnMvYw4rExBD4LMWqKT7CAqanL9PRSSdD5C1Fh3SrL8hc5uvd",
  "key43": "5s7Wyv9puDs7TsPb2Gq8FwZjgfoxnfAdHWrtmR7ukJV78LCQWPDJUustQ1arNzsSB8Wn33txuwzzYg3bGYAj82oD",
  "key44": "dtui66wuKFiqUQdc1zJ3uhph7bpSHkuxf4AwcDb3oMQncRn99vpmpd261BgBD5MBYqPr2wgDoBuzgutcosyBTFC",
  "key45": "355rMFUCSDSXvmW11rUJUtqqAjRVZ8dz5nvmD46LEz46UJJfFTUPF684KTLZtX6pk11aXEoLD5fMHZVQPV9tmcbc",
  "key46": "2gEbzAqfbjDTxy5yx6fS9CwwanzVHdAZXSv1VMgbcai4fR4Hhzie7gV71Hrg9Tu1Bsg1tSPSDVvTgGfj4HH1fvA1",
  "key47": "3VAoJcx84WS4tBXpJD3tqv8hypWabkejUfbJVuFVXL4HRxqU21RtH9ycQhQSf5J6br5fucEPWyCqREamndX327W6",
  "key48": "3Xb2Pczf1TSuJi7wPfhJ65Q7wFUyGZ8RRASrXhhxVtBA8DhjeAcwr1LRiVU2kjWh5HkKFqb7Xv3UjHxXT7uXxTit"
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
