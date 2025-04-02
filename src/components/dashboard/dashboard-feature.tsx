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
    "2ok39t9f4y9T4ND6jf8H7368PkJQvTWxrXES6WJWfEUskfXq1qQK7YpmoQ17ZDjX85wmx6BTf2S1wUCjQW4vQDf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjkAd7fzxTW82BV28cJVJY4wvifVKgrPNYvDTXmdq1wVLtYXPnz5Z7VA7Aee1zFMiHb6kcCjf1AcmWrk7J6Hw7Z",
  "key1": "2ATYyWPXK3YCSXWQM2RtkYqvQfyEhw5SWiArzMRnzjDmZEGLXADEVrkeQVw4DpkoLgbPekv8fB4QUn7G1NgBgPyy",
  "key2": "4dR4YVXdtYsw4kCvsHFAZi3cdeVMpe3kvZyC8NZYJhTpGUnBRt6x9HCWR7vJSEpEhHh5qvoAmTwydrJQ5q8NBSgF",
  "key3": "4qNLFJMttCWayQC5JxNzf7HPxfDYsEgSWvDGGJpGfckJDnHdU7mEVrCB8TahgxAQAs3qgMVjAeitx8SbmWGhfvVR",
  "key4": "2siWhv9fBhsSYxThpurT6fdxXru1KWSqfo9Ur626RkFLPErTzTLGPkQMSEiTAgusL5yQ6kPQjdQBi7LZrNiMoK1t",
  "key5": "3GSzpcGw6KgC1z5gNJvAYQf9xkoyC6Rkqo3aFv8yqmYyyUQSbZ7xC3dsTsJYLoYrVnc2GtAFRR3RHoYVmit3YfTy",
  "key6": "3GLsvVAUAX6QYcPF2cdeUbum5Fg3XgLwVKGgs5YiA1Thq7sRbCNeXL6hGgZbWgwdZaYjyM9GgGf21RrSWavy7JJ",
  "key7": "4aHaAj2Qw762tmhrv46ibGfXsxkmPUHv4gBf2bqUUsBoaNKEibsFND3qYjF1tYHCW4QmpK2HpX9nh6xi8ZdyrC3m",
  "key8": "5PRZ8svX9v2RCcg3Ftx7GmgFE6jcUqMp6weWdPjCHEaxbhB47KiZkgeHkHhLVa29k1guAMkSFYrWMqtqApYvF2AC",
  "key9": "3bL3UMBdHgL81zGXnQvUykgWhRws4HNDyMhaeDe57SU7BEoWzgJwZM1StwjuUUepppwa6GAqTjmHAtqCFSoGfb5F",
  "key10": "DT6KKNUmmtQdeEjJ9QCSkM4RnMvVtVkjrxU2L3t2JmNbm9dhAEXiwxQLjQ5uxMyshBU4Fs5jPGj2YHwbwNeeTRc",
  "key11": "4b5QVngeb6T8FuevgY8kPrH3CFjEJ7cmJawGqUYEvAAJqNGu2or92ba9Safb9BZvsvU9jgxiFVxwN2DBtb2f2PCR",
  "key12": "6UVRqYYPVQ8n6WctACqzFDaF6KvDcSBSvcMdWYuPdZeZATMCVWxTqc3rwUzr4VfwEECwQDJSyc3ZaWSuDZdx7vN",
  "key13": "5Ew36u3Cc6wHZEYuk46bm9JY4orDZUwBwVoPELNrsB5KPBHZnbzs2YhR5g734PwqnHCW9z5XaEi6XjbKq6zkZ9L3",
  "key14": "3z8x4Bewz1ubqZpbsrtSkwCj1AfHCF4ETAyVkQwwZ6Qqoui4WR14Wt3ZMEwK9kwmXW8SCMaYABcj4kxqdhQfwLKa",
  "key15": "4dQbkMC2hzyuoRKwXwZ4aBsQVgWPW4n7Jm5PHWL8GUdgjkEEHjEumjpnJjGDutjDSCvwMmS2iahNbPC1ypDZ1foD",
  "key16": "4gXy2o5AF5FKFTtZz7QTdnR6UNvjEzZoG7PW6tnXCCTFx5QEUqxws3TKNioADQuEFw7MJugUVBNxqp5qojD5ZyFS",
  "key17": "3XuDjMtjZPTzZeTAywmXGFTmNTFQPuyKjKh4E3GF6YfPafy6jwrsmaB1v45zEfB9AtzAQHHyYTruyAQh4ZZngtuF",
  "key18": "26zFHGayeFxnWBcFKehaZ7A39FPyowWPsiVptUy27kBnTVeJBoBGxzLKd3aNUGv3Y4HZoDDXA2o86aPV6M6TKmhJ",
  "key19": "4C6wsXr2mXpDi7CsxRNsyWecpVVdi2QJbnhzt8U9pmXRuiW9wVVfNtQa4dro7DFQQAQfNgqHBpdNPyi7yepqThRk",
  "key20": "5nRbYyoptEj5r5BHm2oBmujj6ahyvgS17d3AP8s3hWQeZyCqpG7nhRJkS1uN91Mfgqu1d9HcSurN5wLSwQbLZTu5",
  "key21": "4m3wtmRNb2VYHKSnnEdqYqnvRK2dLA8hx5iDMSvhGxmLzoFWAVmf86o6owtQE3vhncr8bqVVpjrPJi7fmZrPLj9b",
  "key22": "3zcvkUEEgyyJogGQyoEfCyZdQoH72oL5L1gddAM3WMFPeWqBj8vjrFiS7ZVbSY6z8fRHYjpwTKXiWpmeUW2iwBbs",
  "key23": "5SswUycjJ9Nx6u7ERQZDbQdAGpRZivVYEm5h1BiTWFRPLBB57Y6iwRLhkPXX5pa8MxbWTBxEMJPUb5V9Lzg5RvqP",
  "key24": "5cnCYZhUBb6CSe4gSh2C5edZdiR6Wg5fpHEqu1t1ioLddHL8QNkpgc4iwJdd6gUbii5K9Wt6WQK3RWJcU9KxJ2R4",
  "key25": "3rhxfk193Ls9oAYciFXPT43NtKEY6AWkRbHFwaBrj4bDBZmKQuumbGHxZ1fXGSkwqtPEWakCbgU6pYZs4tSLk9XH",
  "key26": "2m3XjVq7nJqWzosMppNGHTUZiaJNRHQNkx2dT8dVVQF5pC8zJhtMNzn9pbg8Jsh7fut4jxVxVaza9XJjptF6HHFR",
  "key27": "4SuoaivSspdAhHmrLRj6zyhhVSVbECfVtajarSTy6eQQ4vqYraAoJ3H3XJHrTbLgoj7L3sG2JSUeNcLtRaN1ucd2",
  "key28": "FvtAcQn96wd9EXrXmgrrtKQTsxwtvcsBWgiPzMRRRisv1TaoEvgFH9A21DKFiPMqoFmxbemjvNcjPkufBCrwLMp",
  "key29": "2FdNXT5ZQqFGBbagAf3yUZA6TBpLH1b7PXX47E9J3WgsKcPTwh6DmWbh7tLSCyUpLJ6AqJn7uAtRenwjfpHoG5wN",
  "key30": "2KG5BpminLs9UMDWC1vrMLgRp8Wt2cixR9SsbxDYw3xb8BCCsGjHkmznHMaE6Dba8D4gnQBbWKaj2n8N1oNvY3Cd",
  "key31": "3Gk3LGGPjjUuf5xEA8qXXbh8eMR37d3GMauoJQ5j5q2N8rza3GyDCCk58f6ePZ8eHm7JHvuMZGiVMT5nQ7CKiAgr",
  "key32": "4eCwaRed8aEiEQqAsP45cwXuG9gG9t6xf7xxAxNbE2EFM5CGbVuFrRcsbEpBTdLcShGG2wZtkG8xqi8w6ejSjkwE",
  "key33": "3VNoM333XDRiEh7g2UcCKfoquk2PnWrG7woUNqQDjsCPYTDyXuF4a2ssnLQ7fWMzAnnvJSPiShf54BgBdqRJ71XC",
  "key34": "46uqWLPJhR1GJgdAYcktVnZTjwfL25htDej1cUtimr68246REahPyd2GUQSaA8YALpLiLScLaG2LcQFocLm2iSfd",
  "key35": "pzg7prsAyMKKxeTR8aGHRUZpFB3wqHtGXLV28uvkfksEmWhT3rFqHGYF2LWoS1HqCn4tenF7GYUzpPjAqPcbber",
  "key36": "5knUqbtEJjWBRMZHdubQdZ91V73Fkyf9uaKLQhPDYat6KHyL9yCcjEdYt71FLESyxGPF3m8SYSLi5wziJTtUWHuk",
  "key37": "2N8BrG3AnKPpYdUBYoe7ytFB9sXaXwdzaKsUaR8SfmxwvJihhakZioDwijWtZmGabao3xecaroAAVa8iXbTkLNcs",
  "key38": "2Kd669RBpBK91CCKqHv2tvg9xeYoqHX74DKAsi24AweAsDCb6deLhVzqF52rviS3vtQTmDvQNULsqo6mym5G3xYf",
  "key39": "4kMnviEGrxp9YTskAWbPoYmmSnZUf3gAxYjhMa6jKBz5BGqwREhBQHWzpfkNdzsrCb5cfFcSSUsdSUJ2xenKiXKG",
  "key40": "44yzuAKiguPF3ves3hMjv6HBZfyy8QZwnR92hz6SJZoQmKWsDfHs5VowWdp3DqrLLtgnuJGcx49j7T3gE4cWx7vF",
  "key41": "64aWJ68iMVJdqNecVeHn8EQ9XafhChLsMWMg4kAc2NYwke45Kyg9aSeUaFEDUFqdE5puWAbJdWyxswVQAUVLGPui",
  "key42": "2eaH994eSQ6LrAfqizzqgVGPxTN8977bavf3FmrsD1CixmXssDHxnvCwg8QyF2gVw6qN3ScH4HTsfwVjS2sAm8uL",
  "key43": "4asiqtLzmiexGCLSSEmmFd5926Qe5oxDS5D8YspPGwqQKQEh9kbu5RidKEcsZQBtLjNwyWYJZoLzbLSduvPWTN8m",
  "key44": "4NWJ6Lu6UB7Q1JnU1KBWvB4nJVcuGktqpGwzQFY6XQ7HJofbVM4f1ah4zMSdVWHarG7z1Rcru9tmM56rfyKC8DV",
  "key45": "3hmTkxZYmreApoW3XkAwR2uYphaEdvHM5sUMdRSi6jQKNWJv916aNyG3BDexkBdyyf7sknbeVa94VfxLnNCcxouy",
  "key46": "4v5L9pbxFTERW4aq4f6d7qDK3gPkrkpm84FGNiYAWDxyDL61pUf5jKMmK4BuNbxeJu4DB9HYW9vNdSEDTa6d7thW"
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
