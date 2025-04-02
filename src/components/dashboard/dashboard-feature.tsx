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
    "qTg5FhQ6HTk5VrPZMyrbc63qnnYtJeKoekjPP9jQGRgf4AK1v3E9762dAm3f2cBHiKBhYu893fUnNZnBpFi6kK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAGRUH23bigvu9L23ECRSTN6KTzkvJKPo4egMZQ3zUu4dVy7hr5RTgtVqTwWxDq6Yk5ryngzbTaELUUfUXrquLb",
  "key1": "4fLCBzeDJhEbgUHEVWKziGuC6fugXZpKjESk1JrfVhjtno27fGAGtJp1cVKatkKq3mz6Vizapzdm8pBpCV54CuCH",
  "key2": "286j9YQoN2NSrf7K9FmeZ3ocQQ9JuN17Aiuzh7FiJftaVQj2qB4qZh5ezg4Td1frvm8eK2TTrHZNA8DJRXaq8eL8",
  "key3": "2koguDvBQ5AutgbbBxEKucSXQ2dnfvdKNXLieqxh1nfwdEooC1LYJNgdPJhZmEDNmJxpt6UH3XgfypzWMFQBXC5r",
  "key4": "25vEgLvip4L58WeZdb2n1nPWL2FjiGF64Bi9tUyUdbhVAbAqF3ywA6nCAM1G9rZKAkgQLBkfNWEGYBKtrqvGoNBP",
  "key5": "4Uj5tKCDpyTjo3Ym8cesurYbHxpmdTogXWZEYBGdM6f9MhQvgJETB24Pi7WhtYBcuhpKUYBz2CzcN1xKMzNt7hJL",
  "key6": "62QZL1n48o7vu24QxFkKggcr8EKN35GvC2wv1vknKBe8rALjLAAAiNt87LnCEatBC2WZ34WK1BfPMVd8aEchHDJK",
  "key7": "3ai7wvCXsGCKLtvcsP5hronNk5715wBqonK2c8ho91Fqk3AASi7W81eLUXik9XskrgdJ6P63TeAwP41hnM6oGJQt",
  "key8": "5DUxzgmCqgaTthUEVEZ1EjzXmmGaR5JLQLufn9mFCHVnAoM1XRhWoeoRNB2ezKDw7SB4fHipdR99p6ZNvqPcAJPp",
  "key9": "52HRWABtqHZcUvsoiUYxqVNyCfh4LxoP2gbf3iGvqG7A2bZsMvVtjA9DfPxJR4Cc8KPFjKYHHGkRLtVbztMththW",
  "key10": "3fZw5FqjDDt8TVXnPBvQTSi3FYqowVaivyou29sk7z1CKpmihdbgTRsGVjHer4vXwS7394YMptpuncEFqYSgqJ6N",
  "key11": "48tgEV7fTrtKK63RW2WrBrjnoY6QBokbzEzQXFBQZ7sBWpWVozvZvKuGjxVefqB6Use7HQ8pcGyRVJ9NM1iSSxno",
  "key12": "4Qdqnz2pmsuv6ZQWkBvNzS9gVocsUM4YtAF4Sn6Tdi6mmJwHJij3k2TxPAxetpG3YQNbwmPhFDMbPxni75SqNP2X",
  "key13": "5DtYu5SxKZTpq4pHNKmxKJdds2zMttYNAiPnbppB7fxbtp9THKjgvasEtRHtsPHsFGPs3E8T2zCppj79eifG3jXS",
  "key14": "trbG4hUfV1khCE176KjBYQzEv7ufQK39pJeen7WMY8gXn51KZznf9YmjgVTzkttcKfgD7a77fWJyHZ4SzNGwWyi",
  "key15": "21S3Vteo8MDfxe33rFGAPrh2ZdY5Y17tg9uVmJvVfpyBK3BdaitwHjV4CYPdUexCKLSDPdPo2ZKP3jpZrofssHtc",
  "key16": "3NhwqmZRHETw5PPo6Rn79ixmVAHPwU4Ysuap1t8opG4UEwTqp7nWuppcD3jXg8MjkMQrheJWQXBc16AsoLYTFhRn",
  "key17": "4obY1H1uqUF2VLS9g6HR3wCKg4jN7cqtoHjerWGgyDAwbNDWVHVqZn5QQ9yHqUyQvYYfPwCxhSjzgV6pKJyBte31",
  "key18": "p4VYtiBQYvv6SyVZr1sshk1acoTj7v6xT3UsXhjTCNC2BMcujF2dmTJ3SnAaQAMSXhLaQ8Vp1rbnfNyUUpjkP1b",
  "key19": "33x3oczekvgnVHVqbTm7WgskxW5rot36ePDqSo1d7WXNusHhPxNz5roD5opxNEW4xh5vthd8KV4n8cExRcWMUFsV",
  "key20": "5X1M3uqFioqqugh8dM17ofCT4xHZMcKNHV6oxzDswVw5ukDWTG1tHXb9FiC9MK3ripCMGw6L7496krvGFDuW9Chm",
  "key21": "3ny8XNWsBwanxcshPd8rx3ZLoSBpKHH5z4mEG8TiSKCApaJUdwzjaDpo5natWGBUpBNjFNQs2UBT62mMcGrNtsL3",
  "key22": "dmaH2vWNcmEvjAyMR9N7FwMFAstG6rTiG5NXtwLeCgDBsfEGufzTCc2vwULTUUETq3abirtXZYjfSazM8AHap9n",
  "key23": "5QMKZFUncwLDDEQtuGKbmceHtf3nPEXNJHYZcKjDgUqNVuMP3BGSPn4v7uS4MbX8a9v6XUMpTUm2WeWBaZ6ZjzPJ",
  "key24": "3U4nxisGZ8ZetVja2nJcjwapGX2U16i4DkYq4j8CnTjt6osSGHwqzCVnUTSSwBJcqT4sFiL1DrWZdUHQtvk1cNYS",
  "key25": "5Pam1PLvaJtYSpq6qx2xpDvTNCMtfgJnfhYxVxKXmft5DPNhNGGPRwWxG4TL1jsptJgpCxoQ8oHz6g8gY4ijyPUA",
  "key26": "39yuV4UAPHDze1pZbTshXXAZPvPErMCpip4zDPnvfMMc2ce5rywboEWUPJeJZoEEQLEwJTSPY7iAfkxGmBmCtVjt",
  "key27": "5TuvaCoxectCeBaVKaMcqWFBbjsx9iHrcerLmcz4UAYhPtPg4AsuvzabfzYgrv1rLWFXQB8V7ysZdaJets2rxc4c",
  "key28": "2zMuEuU4fY4Cw8VfU3ujykF2gZpB1y9NvAxcy3HbqmWwyrXDzGVmPUQrQnQo7D7dx68nMyoeyEhnVdPgxcqJCsbH",
  "key29": "d9PiVz3ndXQqNoZcKoBkMpZgoY9i4rAMvNWnCpzuEpXd7scj8cWGHbpHHtH4yHWwCPQYXjb9Y1xqG6r1aUVnfjj",
  "key30": "2sE21rN1HrusRq8sPgx2QLkRqGgf3Ezcsr2qPcvYjShtzbmcJp7dtLX4yWjjxaVnrJgqGojh1yGjwrcQXyqMipQc",
  "key31": "BZAwHud3A6tQUJhpPnaoWVP5keBD9PW6j51u8eE8YktqFv34k3YWKuB2KWhwM1Vvkj1ziMFX4RrhSaD7sYB2b3u",
  "key32": "2A8nJVxkbci3cdZw6AazApZ8ypevqVsKrVt297oueTs5BRAkvFFkv4NFR1weVAGJ1myJzRWArY2iUo1tSZUjtX5W",
  "key33": "mndbFLoQgTxowXupFGLLRnR1GhhLgBuL3W5QGpBG6amsSj48rPovrNMAtqsjJ7REdfD7TLo2Egeh7pNTe9GscJN",
  "key34": "3FYdA15m6yLoHkYSYME3bKGY9mZRtoAyau44rEjxteb1igEjiXYewTL6ieV7bma44YXdAuPgopWcg69Ps2BD2qgd"
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
