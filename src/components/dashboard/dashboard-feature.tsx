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
    "5W4M9GAD2wpgrW1FUK9RjXvA64xn8oTRUSTySB81fu3Y3RBP96KfPo6a6AAsoG1mKS9kA3gBAcrjXNVgdUzMRk1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QZCtLJX5Rm4VEygjkLEqbEjmt4hSFDXAJTBWnwD6FaYoD4i3rBPojeLDxuGpMbDtocMaiRaQejm67z68nD3P73U",
  "key1": "4UTvkvCsNYfv7CMCDmJA53UoUk4HZah3hao7Jo6LZyCthnCgWkCPhBeSsuPPw54ASsQqXed1sZ9id4aN98AtTaEy",
  "key2": "21ijpmWNFBCWTDmDnEfpFeuhUBmHSnRKENwkgMJ617F42R4p99n2F9rar27DZCFhAQC2Exnuq5pgjkKhAUtRdhUA",
  "key3": "5Cp4fCP7YpZMByLASCzXqqdksJGqSnLNiqbBmjneQLcREcazYCqQFFtBkVb4C7vb1rXeyCfzTW31p4eP4HtcvTkE",
  "key4": "3XPbdFaTdJzKDMHcmLGYFzNHYiWiWFq6UF5Ak3uvLAsGCusHs8krhdmvFtUcF7aY2fbE4ZUf93hhDAEkfKKjhrby",
  "key5": "32BXco8mizv6hiVkjHaz3DLmRqvVjY8ad7pLiXk7kShQEoo3nvjM9kG31vJHFh9n3M97FPeb6yuENzNeJjurkMuW",
  "key6": "3S3J1tQkSpAXpN6sDAohTpp2oj44CpqMzaf5jqggtbKmLgV2g29HLERSkpYpaU7vnr38zgmqWrTud6YnXUT4CW3B",
  "key7": "3nbdNP7pekXhTgMnTwMefbyeXkuH2277A9CrvgkE3Qcan6sDV14oKkCtRifRoVDDXcvWbxzZjF2t4yc3iBYudL5r",
  "key8": "5G6ZojAvsnGpe37FjEtkXkbS41QF1V9vvvZyEkgCvs2oqZvozxZAisS6zzr8FvZEPyjn8bJUPr8JQJcsk37REQCK",
  "key9": "4bmzgrkNbkNr6SUweTa439Peefuv9Ja11Gbx8CpVeWe9eNTtDUqZY8RNQg1LXY7itUSYcjW84QGkwwfCXago6k3G",
  "key10": "WShJuFErWPrjXJpNLmscCFszB5oWfvtGAXnsqeEjemmSDaoUgjQ8ZEFgtaX49uKEP2UrtTmzzYeEJQkye7NZF5q",
  "key11": "5kouq7CYrshKPxxhwARbBjeUBBSsMQmKJa4RvGwPN6QMqvUioRS3MgLVN3PdP9vFyrFaBzwVNCrTdDSFiq54rH4S",
  "key12": "4Ymp6BgyEAdg3b4ZVmrS6uiuWzc8vSzG6X7yqmFM6oJqS1BxaMghSgqay2DLCQ2ZQoqER4PhwMPydN9gBWaravQN",
  "key13": "RdjA3HJRq7pDAavow2vDjn3mf8Bew7WHto848brKH7NnxE2jqMdHpvwyyEQfr5VgRQKfchrWvdPF4uSKmpEL3DF",
  "key14": "5FkWa6qEFt7sjyUSM57LPZpu8aZZaanSfyrunYQtJgYRQg4V4QKGuNRXVApHhNkJfspmditAnS4sZ4vd5ECXowDn",
  "key15": "3qyW3aXipr9gr4ztoPWY2zeDQ5NupjeD54hJECfZyaqRnUfcwPPupXjm9rWGYfdoWUgT8GHkQJRUb1QVh1YxUDdf",
  "key16": "38x4aCdZWjX12GC2KXA7u6eVtikNkpgGZx8o2YW1sQoMuq2sRsvFDpvHgg4VDdhkcc3HKqb77vRCPzTaKYnR1Bao",
  "key17": "5L5tbCwUWFJAXBSPeZWSpzf7fHVqVxTjq4NzACq3XcBRt7wJZYmLdQ6rvPx2aSEKYGE1zWVdHocCqwigmiiWxusD",
  "key18": "2sHNe7szNd6oGwtQamRyHNDSvFLn8EJERnwPRwbBWL6eoi2MDc1AQ5UEN8hbmn84HNM5kLvFT7ckvvZyZhCR2VXT",
  "key19": "2WVYKEm1SN3Lufp4Br7P2efpHLtrxZmfTS4MwYeLQ7VDUGWKhZZG2ed9HRjJa2Znj2wk5ncARz2MuW5DSo9C69dF",
  "key20": "3qi7k9fJDeehEtYX3skv8EKSYuytHNU8sfoQ8ZuUgAv7RvJ7sSMmww3EuZxGqUu6sePdcyYvt6s9VoZgvq4dYPXy",
  "key21": "5VHJ9ekqo5yGDbzD8PyS2bsKdLx9qQfwA7fdoQCYBPbn5XF7vD94XLx9kcKF9R8VX6CyVU4pnnBQPNVQJiFVsLaZ",
  "key22": "7JD6hFccWzncSDy5S9KS9q2YfwJMQKS4LWFqqqKmqBq9XxsiYkdbR1yA5YTdon9KTozy2dYFVogCMzqHBW6KHkZ",
  "key23": "5brzikByq6qc3qVXuMLaeiCCmxzMtr26EcsmJP3SHkw4bS8HYFUHVFRXNSXQAuV22RcfWARnkuPMEDX1yd2UrN4P",
  "key24": "5NQwobURpDvE2iAUeEfSdiChfCoBUPJSzkRY1Q5xyg9VbfSWu8z84narxUfUnmXWzTPeh5e6HWZcjQieMAvQ3h3a",
  "key25": "61Kxvp5zLs7Kt9uHHNkFrsVHK9PqY6zU6LxG78JvywB8rHW6xVf8BneG4XFjtCkNw2SSQiWdLuK4R8YgVYvGVAEo",
  "key26": "3qRyUt7jWtH87nNLJa4Xanioxyze2uNBFAengXZGhR2gUte6zUPk1dMpreRQAxxF5aHPTcNKBeFCTuWsgpxbk5A9",
  "key27": "41UuWGvGc8SJbZf8SLktAz3wuAPMCb56BshKuQR5dEoVBYJ6aDDgPvk9UCTgB6QWdYhcoJH8BvSYTRtWbprHAGNq",
  "key28": "4kPEeAZ8fj12QDSaS3bnX8UmKDdSwwgbrhENFMpPULJvkqrUE6X9vvutt73e5UqFPokKJUBxiuJWm1XKmiJ8VLx6",
  "key29": "3nnkKM6HfEhXkz4hVPG2DE9i3mFz2EVZT5uTBiKtwYbEWFJnjEoVuAAd4AFRn78TpNTbHfQJPBtKzDnaCkEN6EyC",
  "key30": "3LZrYo1xfC2LgXniPH1aKFvUsESstbPkhNqrFD9Wpogvty1dETwpkUiSu9qMs9DUch7voq1heFJXXNqmk4RxpDUU",
  "key31": "4gogDuWbEMc2DVGJRFfdMU8sYELna7PSJzkhagSBU2cHCx2kbho5gCM8oKrbtkL7MShXysVHza8aZzeZnjahRQgo",
  "key32": "3Vfhq1x9hqQYCGtpd21L22jftvctFRk7yw5Yo4aREjNNXX8jhYzg3gDTPfjRuChEtoSyN4K8fMtNXFJU7AyHMXC9",
  "key33": "iq9GHcbAxUudcQbDNZ6YBacjbiwttzKwZ7UgWHPJxJfhfXGpobJaZjumrNzi1SEZaxw5dWyQPrGyrfbufzQyM6E",
  "key34": "4suUwXLLyics2w1Z98WEFCKPP1wko55bo5JWwhUQ9XQM1BhdXQ4AZzuV36WRFWp8iiKazXUJWrnn8z9qEMMumbvB",
  "key35": "5aMSFoCz8SgLZoC2tuSnf9jhyArVCr3PKc4AvXDkGbsCdf5HxTRev9rtLcmdApAo8qq3VrJyV2tMVW5DbTNUS4Fs",
  "key36": "NXzwV6BPuPsaHhDdXKeJUHvMN9dfPjUafnrLX7YKU7f6bnxY9bNSEqZqkvRVXNogDR4xxVMnfcBVU2f32kq6baW",
  "key37": "57sbcmFsBrueqgbc3dSzPY4ozMZojXfTE52aKnMy7NevQkvawyoSssmfgTZ6S8bhGwfXzKek1yEPMxHWMWxc4bpp",
  "key38": "5GGiYvhpRrrBhwWgt1cPhqHCZ94zwJU9zoGQV2kca3y4Mps6C4J1BrCYTSxAzeyUoKrwiTs1rnda1a4FDsA4gGbJ",
  "key39": "2zT9hhcfEkhTdPuZyvW9zDzsF6LnTzfpvACwgWbggPwYB4SUwTYA3jEKPJQpQf8z31fvU8yVaTU5sg6Fj35ANsKy",
  "key40": "5UUBAS7jXWHFvD5uXRhrrwGSnjPxgL27hNNSTLUyRBseeiSxhrqpk8oPNU6keWySn3ttG1wSvduM1QTRcmiUCwwY",
  "key41": "4ySZommsq1R4mSCdcBRb2873vJ2g3JP69gTMWsCA8jAPQfESsgenKYcpdheTAxdy2KuGADq2kjsUHfsnoa9E8RmY",
  "key42": "4x2Brsb9MRNBk2RWc35cXUXWHJUyx5FRxMtPgdzh3GyC3BWm1HMnACDBP9U7uWpqRNfgCkrSKPgwYwqQMamx8tnB",
  "key43": "43KFEpzPHKT7mu58K6vqj9nPacrd5R2iN8uxnwKdsoFoqkuVXtX6XXww3QSyscCx1f7v91huTGQaBXcV1uph7B85"
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
