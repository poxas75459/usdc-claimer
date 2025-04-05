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
    "5ZCFBPMwfkYXRpJkrtVRiu2oFpXbtGgBD2FWdnnSVWMNZWk2CBGcqCN3uCvc2qBPfcFpiNhVQKYjH5WqwPDuZ8WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBMySNutDsfeBzcgfp3Jb1abGhR4gPhqowy2jnFRqVfwKUfkyuEb4aBpf6SbSRvQAJKWaJFDoCwiuPs9a4f6HAk",
  "key1": "pMnRo5srifWDCMuxxkkMXjaZdcgdYuUKPinAzmnLA2nm6wv8ggWQgpBTgqZn8uvXrkXu1bCP6qJKChZYXTbMK4p",
  "key2": "oi5QNtaybY79EmQkqG5crfz9bmoqcNkB9iKovNy7zK5jC4FoGwj9AR5eyeRoTXg5YBt1MZL2gPKw3hQjm9RsBN7",
  "key3": "51WaqCzRvTmMX4ybV1kvCvtEib8kGyNKR1Z67TKgFrA8TcsUn6TT3AYpR4oXBSthULdUBzyqDVxsmx1qAQ4vAv5m",
  "key4": "5fX6cyCdxUqVWZzw9Vpq1pnPUbNcUrvLDtspnq6oem3ANzStb7o1c5qCANnVhxAgCLQwFExi7csAGCmfWHoc8gaw",
  "key5": "3SNoQF2iVcVwsxRwDhEbXnSE1AjiVsH4gpHQkH6gp9EqtMGPgQqckpQHZscM9eQpg5dohdTPfjVkV8wX1ncFbPkn",
  "key6": "3Yr7DkkRKgW3G2FcLY5xVuqayTEfSFEQ4yVW5sj9oxicwfxbH3toJByiyF6cwuEZECjCJfGFrBeNjA4aaFzk7d4E",
  "key7": "5dPdGoFL3psyuBvNsKLxRcYAWSaS2BAWN5kQVJn9YxxoU4Ro23a4Xqa3BjifmBTRJTBLQ3h27GF3z4u9574ej6z3",
  "key8": "2oHtcbatqMoe1HNp5wjExfhwMdxZKrqhMjkaUvTi6EkEAv9cZRseY3UodS8yrkPnWbJ1vTyrTqvjp46qRMsDuDcM",
  "key9": "2B9WfwqXNjLErTXsRdT6Y6pPegzaEHxVMqjbNaHUmtBM8tNRH9mbheMdQBPZHLbzYSP58t2NMCKyF6uVCuuw8GbV",
  "key10": "4D4Mou8jiDiVDGZEj8DBAZRcGyF5fuoScXJAYf7MBYjtF8YnRLVsh5dRWzJAy5Smfs71yTPW8nUauuyR4Y4d3we7",
  "key11": "2cYHih3vp1FbBKvDtPkdmDVWXb1gZPQNbvTLg5igb82s1rc6npGX2XqQsSM3pWjwq5HtPXTjcd7f7o8NzbbXwb5C",
  "key12": "27fdmKGaB7akoFMXsjoTMRQsA7KNJxrkBKnWkeKBZPk8g7pxpqxztG52MJWFWNLnJpp91eQscRmcsqrppGHBKk5H",
  "key13": "3cPnfdfJciwtmiqbQrb1pKZ9PsomTnM9hE2ztduZQppv2vqn1PmRuJdm5JpRFSHBxfz42GT2xgWr1pPARHWk5D32",
  "key14": "4mY4S5XEsAZfdSS27dqPzbHyoybh9qpbhv1mZyxedAr9fBDxYfqhePNwr4EzXz8Ri2ENMPRNaVEAahKq2Jx7ptUz",
  "key15": "5KauLHfRqrCoCDaxwtBkvjjimFBQDtVaM2xxLpjRqGRtH6BcXfwPFCX2VLasm58EW6FQMcgn3768wkAdHdjqAU1f",
  "key16": "42z3pAMWdZZi7uJf4i8JQxHiJKJEe1xaWetXk6z9UhtREEdZGy4YC3hhHoF7ftXbTuvVbBKzpJvccx6kTdNQxmXq",
  "key17": "TuWRmLUX7FEsooyK4No5qJH9rSyQLuTAEK41SNasudMvscSHqmEi74G3frQxrRGDQH5vwk2VqSWDVNTRN627faj",
  "key18": "3ks9vy9PfGL9xdyAM6xgvibVRRPYN3ekVAiWq9bj5ynRyz9FkRCmc2ofAQf946fK9cX4UN8TdmVwo9tqB1Vt9vi3",
  "key19": "3rZ4UUkTwtJ6wbueASjAbK8v2SiztBFpSYKKVPD68ZJZtfJt7NydPeyoCHBWS3inBHsbpPDmaCPkqrV4ZG4QV1Aw",
  "key20": "24ZpHdZWmPsA9x7S5r4WwwjwwLWaWVtDZSs71rJDcLLYmQ1CsUD98Pf5xdoLjdRmGkBLpWhGPptoCfqxvfEzt63r",
  "key21": "5G81eYC3JRbVoBxDS8quUMAQfx8V41S16JXQk35q6m4mVFwxNFYgioJ7V5HkPDhtADFS9hE7oSbyn8T9qvcH7ALs",
  "key22": "23jSwuzyxjeif3bZPhWchh12TyHi3ESGxNvF1R7uccygrSL4rv81UvRQiVX2W6zcyq47gs4eEDe2iB6YaGjwXVqp",
  "key23": "5oZVdrDCE6F9XgtqgXRyLWYmRUwCPPkFLqhwa2UPexywEqZm4hqY8TchVoStZ1ABT15Lmd7MYg2fX8pfZQFEvYbt",
  "key24": "5zJyANuMF7wJqMZFTphwx89PCF3SV5Fe5zKtKgoB2xfNWHg9qgeHoX5DMgfSn75j5b64M3w9PDY7YRRoNH43NYf3",
  "key25": "62FD4E1xxgitzPf4jEtXcbCEc121H6TJ3SYSTFqVqHJmj6bVq9W4j8Zy6yYCeHV967axX1jCUoyKUh7bbkpPKSqB",
  "key26": "2R29Ra3zDoPqPGoG7wtXb7pEgvexeR3xQpBpq9qYcfsku4ooFkTmYhEnyjGzjjqqutHLTN6RiBT16152u2UpV5Ga",
  "key27": "1LJ6N9jyd44AscQuHTyEx4GbuiPhK5PvTiTYt65pntmKoAK2KD8YPbQ3LQ9iaXVn85YftsenKNSKyyEEJepXHxS",
  "key28": "4P2i8hTJSneshK2PsVYe1B2p6LnDwgKgRwXQ8krwPgozAcmFNJGSqtTuTSsiz66qiKtvYAt2nE777df1eDbiYb1Z",
  "key29": "2nVpNZv8AumhQXuHayXcvGxaZKZK7G8yZQ5dLavLWfuHnb3SYYy4bzHFwctAeYGkgZJ1K5Ws8uCkKGzKqYU5tuqF",
  "key30": "5EAXHU116YNaM5ewXKiFqFVeZmKHJ1RWkykQq6R3YjzVndB3C4R1jo8UkxeSRyi79v6Wy2W8q7iEMcFHo7JcpZdZ",
  "key31": "3X6ETsuTd6fRus3cU1hFJW9MmKVZdzDwbeP8wByY3UPerNDqWrMvroEJFcpg6XMC4WZh2rNGQJ44gHZUiHcjHFzF",
  "key32": "3dps2L2mDNckR6VtaahHvhRjULohvAm58FiKM4UKE4Lwn1UrjJpKp66ze3PH8rbpADcEec1UPwLDA4Cu1RKacYb3",
  "key33": "5iqQpQ7QHanmVg7VCw75iJJKadXEcT4PnHxpQypDyk6bV6dZxavALL1x8ZCUaRoa73bm8Q9HBJQpWeBueU1X1WAN",
  "key34": "2XsALwJZve55MFLCaWLouZ93TvM2ZDS8xMU3nrUdws4dQdr8cGyG1DiAnW9GQ7d4Lbc1aRwhxUCH3M5uFxLNvdES",
  "key35": "5xepkENPKdt9BPQbUQA5HTJaBFU4ZSeKTZxU6UqBPQ33qbsR4irk3g6i68CdJMAt8StvQcN71eCWxhVyZbENkJhc",
  "key36": "22ziEai3WxSeNwxzWMoeJpsCD5ZCqEoLexmbSYaAUZgnztmk31n7GizBXbN3vyK4zEPB8HqHAqZ5irh9JLeKp7PZ",
  "key37": "4i4C48wfXPj4cAW2XLEpdhXooMjtCVW4FEv6L8G8gW5aySEajfCnrdDgddjoF8bQCL8sHQUJp22qNSeYf7dcSQyp",
  "key38": "QdeA8bBZRZZSfRzCHqg3aQw4gMFsUaq1x8S9ik4EkQK2KpYNcEaEiG76AGmb6iPmAsYi3mvrXVtFKmaCsEyiTm7",
  "key39": "4kVZWkuAt15W22GvxCq8fmU1RH7A8A4SKfVQaUsjzHSRws7h1tTQ4Ae8t2dbAeR3v8BF39389j9kpYBR3WoEnsqm",
  "key40": "BM28DHmMCxyJNxPtspAmuY6vEZ8HRsSgNMrtGFKwRaC3X4twa6RYRWufUJYxRBBvYYJThxi6MLE1KpvJPRrFV62",
  "key41": "5iLx78U5gUxQP8FvDd9VcbcLkgCr18k1wezvMZ4456opR3eXsPLenZFJUwWtm5nUs5BZzwu9fTNPQ32ibRpbDU1S",
  "key42": "nJGfYfCp1STW5rH6mNqD5Rs1XN8FDt3zA1TyxWe9GXWMeWGiuLgYTaoSGYYYUp4WyHb1mctPigFcW1keJPwB2s1",
  "key43": "5XPSCSDoxYFawmaPb3qVjpgH6Zbht3wM8zEr98F6zEorAjnYQQtgR3Giqma9QoQUcGWwrKoSwmSh94EttPVNfezH",
  "key44": "5vzS5BRkxAGecuNDdfeur6ycprVPouL8sjy6jS72sPzf7BKf9pYeJUsUkaDK82fSRcHUezvRyxxXJ5kTpD1xQqdY",
  "key45": "4tQn8hKYztZkwmqpUCqvBDTs7M1bH12kopRzbjoLn4WY2CfESHnf7fPXHFuasVhRPgenkR1G1Gkf6ud3fSXEX6fe",
  "key46": "3ncYajH8u7viT3EUnw5npQtY95b6hhKgDBGapXKDAU5YdweYagindMbZj8v9dQi8SpN99t4T9EjYQXvrN4iRzS82",
  "key47": "1QvUpSAhFUtBwbpXWmZMoMLrCnpL4VdE8Qer4JANHvQaCGT2ftvrukmA9SfbjB1Wxzg3hTMf7Ad13gdvv7Kas8L",
  "key48": "57nfmkt7i8T9iedxDsHUqfnPjKLUnSg9XMoEwzJEXRp97eGFys9dDiKej2XgHahRK78M2jaRh5KEXqXmnpr4WzmQ",
  "key49": "2ZGoVQzPuybYGHvWguaJQXWUXt7zkcU3Szm5u6N2An6boZ6BSTmgLsu3bRfQMBZpfZs2Pg1is1vYWkadV1PBVNFN"
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
