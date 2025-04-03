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
    "4y71JN7uoCRNYpDhd9T3Z7T6iLyVdevL5fG9azxTwYpB7xEqVTiCfTy18BRC85NdSbUTYyAx2TeHwPdb2SJtUiBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nchiJ1PWR2TkFZgno7vDNYwd92yVxoQrgDvpxiL79ZwdWLj6RA7P4Xvym1LdefQP82ioNvhtRBwjGPgi6C7Ly7i",
  "key1": "3bUuwEetjcxzQfkxbfZauhxoS9mK6dpuM1NaYfCaJrmqn1q9QSeA7oKqTq2AVfCVCxNGcgt26c8eC83JLFakG1zb",
  "key2": "XvwzgAtb5yu63c2zW1ooF1doKMYRaW2z6mEf2auCz7Fkj2HB1Td381gichX8DpgRicYLZL4Sw9TRqM94WRuYWNU",
  "key3": "Zdkk46v2EC8qFVGMv89bkzmNWmnt5rzmQGXcqN769Wy7mdzGRMUC2Ro3vGdekE9EgsJXR7mnZpBP7Ythqe7559p",
  "key4": "3vfgM3hbv7ScUpQQCXjt1FFJNswQAvmDS6ahNVkbpz24YWHGgS7R58vSuiVQYahpRk7JCcdJb5mzUdB9ABaspvk3",
  "key5": "1adfiiqMCg8u4yxmX8gVb9ZbLmWMxcPKPxnH2DJxU6BRemnM1s3qWwvAXfksfduyYe39omYjFZWPtiDrbjTq21w",
  "key6": "5AQCGuEMBHcHZUr8jLTApduj2EHXAi85ftJu5vs6Vw3UUirZGccsPdicviU9VdaxUMnJDXXdSmvMtHFPLJK2DTtc",
  "key7": "3rBY2iuCmF5wFYuWdreBEnuRHgjXbJGpLpde1GBew6KFVKHhAZ1souSheCpfABypVwKXN4U32iqwXAhSFHXiyJCr",
  "key8": "vdf8BtTvobUcFtJ6YgyonafoZvRfaqq52iJgjKgqYYvZCVbBj6SGQASsA3JSHYaqGXDZ1YmitB46kMq7SefUyHf",
  "key9": "4FMx6rqAwy2VSqCJgoSJf3HSGeWsUKaGYeS7SeDNEoXLtpKi4jq2CbEeLPQGtKqohN7YPoqeS6ndcCdc7j1JikS8",
  "key10": "4qVmBAKUSGEHHYv3oHkgbWsNk4U6FnvfaTKFoVCHKZthcaQY5sarZJX5SNkcuWdtD9GfMKKuXWn9rCgeJbQzx1X9",
  "key11": "3CYCWUmxbrFZTb9X11TUtLxHcAXegWvDqZiex8EhR9rGXVARB3f2U6EbLANL2P9KPAXMdVEmXLXcU4hv6CvVpxx6",
  "key12": "2fzbXWNpX1yiqPC4YBPyFbmgz3fRXntDXQ2Sm2aRmE5Di4NJrbnCdDmhJA4EvsucpzPCyBTRfr5vzy7SM7pgmwpu",
  "key13": "5bPWv1wRBdkKAaXAXHipxCzQcjPpdyEeLzWcYYuJCsAD3uvGR9pLy8U9tJ6C4snR6J45WpZwYmMk4E5T4ibpjQ4C",
  "key14": "4V7YfCUYYDxbwwjXtBQn3yxmFCwqV5d1daDAa95k7FJTEUs8d9yfUnQyEi6RLqfuTxwa97B1bj2mjkeVV63RYqTx",
  "key15": "5v4LN2hK8BkAMPYM4jw5GxgNLh5kx1F5Vvi3zvuA7SiZ6XJg4f5mKZEuBZ3E97C89Gav4XbbuEm71nNbfT8GVdjV",
  "key16": "219crxR5a5SdhGpVsSeyiio7udUooQYrQgMQ2cYai3UKBaDHHRF72CjpFxCN42e1Dxb9KfMbauQDPxGMnYy7CxJ4",
  "key17": "3N1Dt6e2fjjNzCStb3hDqr18ATL4kvTchgTQ2iuF9mv3YFtXoyXKPCyLpJcDyQeZCNw3fJccVpwb2hM2RXuwxxay",
  "key18": "63yYCT95qDnEHR3kbw2qdi4rCiJjUR1SehUt9DEPhGs9onWhQZ2JSAJ3qocWi3w9DctVYobusto26evZFoH7nWT5",
  "key19": "U99p62qWVtttQGpLPuug7JhPogNG3F97CJvpq24hkqZfwdfvPJEUaxAjyxAh8auDdvmbnEo3imKnLbqK2NJCPcw",
  "key20": "3eN2HAo5zJKXgP5UyAw8rmqb3NKUuXVNuTxHxK457GfWqYVBC6EMBb7sDsrBYjPmjjQRWnT41BKzhekRrvvRTcnd",
  "key21": "3E7yHvjPbrNiFcHfzYX2VW1r123ks7iod93Sz4jqrb3jUU8TTV7bEeb7bkcKG9TEWpTmaqqccmNBjQX2MpN6b9Wg",
  "key22": "2FB9dhCE76BQE5K2KQaQZputoTMDLGDTHJGQ6MMzwdtc9CwPgrnDfCtfVSJAfd6M489ePKkvc8kZApY4RVKuDpCK",
  "key23": "5unvbVuoJPszyGs5xXQ9tbY13QWZQDbKy4tv7i5zZDfQjepMy9Xc1xKwEwdmskYKzVKiqoDdAuzqFrxjpnkZ9hdD",
  "key24": "5frMLxvyGV553wATLY1Kd5bQu9Rs5jtoLwbFX9sRtL69JtuambsQ3tTZiCByMSi66z32v44XJhKYbyneKr2N9Ls8",
  "key25": "5YD1uVZUExzZNJosHJVXbPDk74fMNV2Hz8gZNjX7DQif1Vi6qveT151ohKqXcm5wPSTcDnUSiHieq4KHsuD2dsPu",
  "key26": "4nRLb7pa8N6xX1mUFkpJQc7XTaPtcKNpe1Xr3reNax4or9WtHenXwmdChV2ZksMiipUQotzgn2aNLVRvPJdYMENm",
  "key27": "4niYno6DbAvYtUx6eLG57LM76rEei6rBZBsVMbR7e312LnceDu4ZSM1ncfH4Ga5ZweH881FzAyXSbZAtpyDAR4i3",
  "key28": "4EjMSUQUULqWicGwFdxUTSzFMQtbPcJzojnjQNowfAMuxx3xonShi5NFj1b7Gp9JKDHwq4qh91kY72GEnBCB3fDi",
  "key29": "3pQ4nEJGdgsYSr1trr8oGj8cUV9Mm1xJLSBFEGgNFSubTfcbfqWhKr6muKa3LpSRdWZvyZ58t1ZPvTx7KZa4Bnp4",
  "key30": "5jQG4cPyxjWZD6C4jSCdLH5z4cf2JV7bTW8casG7Lax7T56mEDBKdkUNXvFt4LiFUG9hSN6NTGbiobUCUQ37K8s6",
  "key31": "28CgkjbxyVTVcYcKprYafcKp8EM6i24WDTr4h1pX6MzUa6tDKr2xerAxNtigbbxTpX2uDNhbDssZwtM3zwtXkVpc",
  "key32": "mZjzPXPhVN6bTKBQ1TfYnG5VsT2E3PpEsLFoFaBNmNCn7QHDLkZQC813196sRTtBHz8PrGFnxV48vjDuswoimsh",
  "key33": "2mBFVhWrveK3X7sv6q1dVyMawqVFbwJdfgiUfMF3UdtpHK7434yGXHY1FLY6cvKdUvAGr617Vo1MbQgJ6s2nR6xh",
  "key34": "2XTPFRLiLANDaGWDueCGJNa77gP3zvPer8v9h2Ns6p83fkm45xUn2ac1JQuiHuCTcWWFYcDvAzTryyWaRosG5o2M",
  "key35": "4kEkDTtKdc8THb6SdK1kyh784bXBGcf8kpTwypPNDFSMtk6cqeThLGNoVBcbUrkuYcxEpcmp4RoxtSkWGNmDaYvt",
  "key36": "4vBDVvjBd4AKardJM7GVHhBiUkQjHZM7NjEW3MccGP29zprfnVgELy8LZMirT7yhSwyrNLq8Z1x9aaDSFYw42jHU",
  "key37": "59tjU3otzuJ6pXzjj5R6UEUe4f5jxUBX7etE6oKfjNXD31UQN4aA4PDKSswcn6C8z38mQJ36HgrLMHNMRnbR1EzE",
  "key38": "2NMSQpyBDsFC7Vv6rbCjJ3jwSpXbJoPiq2bYwVAj8D9Wn81RGQ9nxQjQwUo256S6b9R1vtpzEtUvxoydqSpzuy1T",
  "key39": "3GnM8iEYJtg3ziP5v6AgDim2BQtu5NALkSQtXFpvM1JnXiukwdmb5nztHmepnJ8QXLqE356WWdFDpf1k2hqhpBFc",
  "key40": "4PAiLuH7ERdVoK29mZQqWo5VRLYuz5Gvcm1AuojxTVKirE5dC9hd9SRkoM5CoDnn7ubWH7NJUY11sdLPKE1HeXYn",
  "key41": "5cc87kjvXLD1os4AWcQeLNjf9Qzeg3q7cCksduQsWqffCYyoqkZmCE2rwqM6egB4JwvB8NJgLqCfQMSBYS92m2oq",
  "key42": "4bhwhEV1V6C94qGPSPa6xg56SBSB4iPEccfCKRESHBW5UKqmhPWRYesq1o5stWuzTbJKvM6bG2sUfW3o4X77odiG",
  "key43": "2EDAUXijz9m9re68HYGGiwa6gyUYKb5mAJiu53yMC2MHw97xSpiHPwNALPcM19Bj4aLhMy88q4EpAHZeFbB8mGd4"
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
