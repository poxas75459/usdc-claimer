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
    "5BP31H4RE4okuEze8wHDzQ68ysegqB57qSRJAHB2GHNLrS3S8Ueb1abhess6iLmqh6Md4cUwZFPqGqW3kf3TC6uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxSbeowM1Tu2nPEhSWYAsRz2F9i2vrDMRQqWhy3oEbiJuu8fQ2tdo8TtJ6joVbB4QDWrKZZKHemyGnPMsFntAUg",
  "key1": "3tRyKoaAyKGnEArwmJAE5rAnjN4zAgkXHvVMb2YGM15kcRMERsbY54DVy85Rvb1tSGJYNDAdsZ4ATJfghZRAZ6BK",
  "key2": "2aqg5U1rQokuF2v3iczTwvcA3runJMA3GBifnE1mkddrfi4uA695yVMTrS8w2MPg1a4H6V96ZuZaCZZTVWjKonB",
  "key3": "4BG8CnkF6Yv8yVqWn12FHh4LdryY1VzWH1srKHWYMZZmCCfnMjpw6ERqgf8PAQLyoFdj4aiG5TGUiop93sekhCG3",
  "key4": "5B4zaAYF3WFudNHeakpr2WyWxt9bazFiEHzeimVVsqjrEq48PGfDcZ9teeXQhptANPZzqzHdcWcqt5aFUd4yc1Zy",
  "key5": "35HYrmmkw5aGELrNnSkQevn74eWxnReYmcmDp73mHwWzqcThvfiN2N48Wf21gbknYxbTvGQaH1jfAdGfG2HzjAo2",
  "key6": "2nKcUS5L7WeioYPo6Y99kYHL4cC91TV47MAaBY6UznQwXPFAEnQLFKgUW11BmwkVTsyjKG9BA4gGPuN2sQBC3hrb",
  "key7": "4xf1toeBF6aoFh5XGMdDEN6hQbBaUDNMDpazNdQByH5QnKt1Eg4NG74Q3BwJp9mUXhqhXQWXFvZV4wDDARU7M1Sf",
  "key8": "67Vkb9hEupRsJvci9bxxvNR5161WGFQSAduN8ersvjh5Hf4ZkuZSU7DPjBMACQxy6ds9TZFgZCUuVRgsUPYhBWfn",
  "key9": "dQG4mhTe18RCPvykGvfgMxFYPBqozVRKsxR9vLpj2XzrvcExZ4uTAJYyC2XEJjPR1xBQVaBeauvN1sMyBE6QPPQ",
  "key10": "338mm5WfvvAcrQW2yBL6VL68TBnNSt4zjKWAKyVSJYTnoKiFad3TiDgB7qiB1tEFfD6MMim9qQthjuZDYcbnqzVS",
  "key11": "2yQ9fizhNDidCeBtJLQpy4vxzrw4gbMg7JyAePbaoBepZUdMCccv9FV4wyTv7md1d2Z6exGWpNTPeTs6Y691sDFR",
  "key12": "xJWWA3YAfh24YKAXP9CkgPm9cmZTbf1A7dFUCzpAHWEE6gwe4scfSk5EFPv91bPYxs2VawdrtXH5uWiSVCAc5Wj",
  "key13": "3eEdyYJCimDAfWz2bXcqBtr8ooQ45ix9t8eajnfbSVHVRKfWtiJm92kViUA3jtnj8RhPDW11xaPWA6wPZGzk8i7g",
  "key14": "5zDjFb7XSrdukdJCn4C174nggpY5YtwLu2G7NAsNJG8FzSSiRY93G6Fp7Ggew2vad2ntDh3HfMranqAVPEc2Vsq5",
  "key15": "Ph8J5AjSDgQaTqY12QBmWpth6trkVH3KriMGxbc4v5xgZp7zMNqcVQ2tEUS55SeZYxLpoMcDYiLMfy1JfYYk7oB",
  "key16": "5UtAD4M1pJePVuybYx9AdtF9rfAN3re3gaTwYpg2Fady1oJ48fZ6vtpFQgpmw37ETRQefzwLoGgWPr7HRZEB74tN",
  "key17": "3fzzCkmMkT1RviWewe2Nc19GRTfeWqWiesfRR3xox9at6kTBgcMp2Fe1i3BkyaqcLDYodR3rKD3XkSoLbgVKfbJm",
  "key18": "3tWs9VXbaieEeuTbTGqxBNVqEnmGwG2jWrb176qSdWy1CnwSxzMNiTZPdivdq8uGHsWrJ5FCJtgQq4BRRncwuqSu",
  "key19": "5ikS8GmPBLz2dhzp5pP4SwAffrxox8ZR8XPKVxrTEmM8DGUcRu6N4MW3rDTBzxTNte8y7oaUdZUnVbgUmB1xR11S",
  "key20": "5oKJWkUxDcJ6hDvWEuJZYVMUorRtkxFM1DSPoQ2zvH8WC2iqLkXADu2WdewH7wN7yR2PjPrj7rHCs48JRQDmxHqs",
  "key21": "2ummavTqUJBAkYQgC1wyUDS8anEYKaJ8osiVsuHxF9ruvVoqLEGeTN5mky962msSBRTxYV33x6P7jGbo2eHCbsA6",
  "key22": "DSvvKNmTR7f5UnTSuHDuoUGp9TMycEediT8nfiKihJfrx3TLBtvLoPNgNwzEgbUvGHDcABbWvf9A61DT6DGsX6F",
  "key23": "KUVV1DmU4SSwZygiWjdGeJvTFRHSjab1ooYJEYqL1A6od1Ggavcw9zVJDEzL9Ln6XuqaWQtNK2wHhJaZ9vJWGMw",
  "key24": "4Eb414CvjfLQYvbjkyGpacwp3Ec5znMCCvUaPXouiA3rqtKg7ckMAK8gxKaDpnWF1JcLbTN2XiZMXy4kapCdJG9n",
  "key25": "45oakp154DmbhZMUbUB8ixgDeYYXdMawrGVUJRTfW7mZr7SPoWE8fqZr5HwSJ5K8CV7SCvzTMbcUG6aP2wSDynfc",
  "key26": "428d7bYruhSDfNDQmRETsK1Cw26h3CyMwHe4rdENVRC9sQ99Z7GMFThAfjCyVu1rSho1xdgK8qJw2kASzAkasQhA",
  "key27": "N1nfSBaWdDgFoneNJATD7KuPKC7yBmCJ4ez4gKrUmh4F7dowvAHTV9w2o4zYk3Ax7Af1kbB7mML5opSXHYU7bbK",
  "key28": "FWAd3iEfYwjJgZP5dL41it8WojzLc97E8YmNDTmCYTkVZ9Pc6LAckJCYsz8nnv9kqwQzkLGr3XUAfbd9CeJhCST",
  "key29": "2uoAaXZeWUNpM4hdkSfEjhEwbjHueecs1T5TsWEnaYLy2CFRBq2bGM5526LMBNiqzdzgWJeAZHENxvncpr8veSyY",
  "key30": "fSpWNvXNqDn1D9RkM3skWykeVoARVRNe6mhhZFaoTK6i4jH9YhzEjH76HxrQDidAXQRg3aNHZy5W6iWjCNVYGaz",
  "key31": "3NsZr5zHzaUCMeDxEGPkAdKa1Wu7f6yvxKAUZi9FMGTaT36mh3L1J6qGkLcDqMJM4bE5opgW5ugwQRde8YatKr7L",
  "key32": "2984jaUuVGfFaeHyGjDPjfwBVujAaTszo2LjFYL3CNnSxwfzuNNLCrYfLPvaGAQ2GFfVAEJuESycHVjp4L2zkCSA",
  "key33": "oEYEm6Rj4TVRkQqe3uc6RDRoXJdLYkzkyp97qRTD57tBGzod2DvhnxUzWQXjBivYwLBwCrnATYPwNDuiP88JVr8",
  "key34": "4xrSuoJhEt5mbUQeBmXSL5fyUqSLSyZb6Ns1ibc81An22eaH9gJCBFK1Cms4spWA43v6Q3oHqoERBKDUM3iJw18b",
  "key35": "2EtToKsWsDfLUD46spvKcASyvf94g6fbKinTXnzzHDTtzvrxpAbnDBn82jw8TD9f3k72hD9QdrHwwvnPQYZ5HvH4",
  "key36": "3tWmbwDqoQ1TJLv9Cjmj8Dz5XZLXG8d1iKTvKkJx4F9ky6fzbzgMBTQRzunJPXQRz2WRg5RikK4eH7FoGZDeZccv",
  "key37": "54pTvWNMKreWorn4ZPbyYEW6NvmwMfCMFNg3DkpjhekdSmYgr9AqHVZz759awHZqYBPPc2jXmAJBVWBXk3pJ6fgm",
  "key38": "3LrxPnasGYQWNhcPLhFBGPrFaMUeKjqvJzEquDDmGvopifqq82hEtr1fXGq9j4zDDXrhDCXBvdgZjXrxTQtgS5Zz",
  "key39": "4B9iZ25wLGtEqEVF4Q2N4b2eUiNihDa1V8B1uhyymneHK3RAtr4LdJN5seUbsMHJb1uZy2u6pToXdSpXyy1L2jjt",
  "key40": "273eJqcxN4XTvxTGQGsQm2ETtC6CTetzrooXs1EsvyCSvZzp79iovDeLHoVMcPU3Rh1XSdu2RF2aogPN6pHiSR8x",
  "key41": "3HRfjAJVjUBMetNHK6Z4yhUW3poGth1Sp6EmThgBFJh166ki2pFfjXsDvMxtBW6843Hjkxneahjmt2jrmxfupCU",
  "key42": "2oWMVydPjuHB6LcCdrThaGLE8yxbnQ2Zm7zPMsm7pA8TZcMqTdQemrq3oz9UAQANBF2FD51uHz2gtnZ7NEwxFWAs",
  "key43": "5PbmuQQpNbus5trVL3uoTHG1NpRA29zNT2HGHEPXPvi4q6YUF8zFF1GhJySHECjNbnWFT6dB7CZzeQPqvYaF6V3b",
  "key44": "m8wgMxyc19wFK4kzKvY6kyq1KVkg4Ndh3CPKWzeHjoR5gCuAXgSYnpmsGP6qEXN7b5YpArwB6x4JvHsAvxsbFrt",
  "key45": "5EPAJCyuQZJNiwEXnb2VCiqfJqjbn5YE4EAR2TqTKxFMgkTYRv1devqARE9biCQzLHYeLrK5wF6C61ty3wtAVXmz"
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
