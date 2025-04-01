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
    "3ug3c5RackTN7jATLxmCD8dckBiBFthiVM7FnrYosULgf12MFobWT8uovCNVkpzXFe5i2segAJ5Cu6WUbN44CLRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bqh9qYVfMh5Kt6nBmyhu4xeJz6x962SJjz6sqKeoeUDfHhaj9xgc5G7gqimgtEasVY55pvhREbYgnmkD4D7g8Ev",
  "key1": "4FDKQdGnpGr1sZCuM46epkcZhUhwkAx35VRjGXfwcx5v9pM9uXXW2zi6WfrKKLwmUxcwTLgcWca7FYQy5EkivqMr",
  "key2": "2gSawNTZd6i8tBC2SzKMoAtyd7ZH7LjFFxqChEtUmDjbh8JZWBJUq9FJUPdUZkmbDhPSPcj1TDp8G2X98Brv1Wt7",
  "key3": "66pG2Pjf7CzY6xRUyCpw2H7GzUYJ1k94xny6eqKBwqYYX8Uypdxn1MGwuGVPqPJuo8vJbisTrXKx7odcgGxbAtJj",
  "key4": "3w15ScgRFqBQmZVUBjZL1qYvVN59pXyehf8vBJEfD5cPaoP3WxjAe3Zwy3t4tQeiLjHu4EKwyXomXSfvonvsC7ai",
  "key5": "3MbSsh5eu9CB8YBs5VEQCFWAVqkq2do2Pmxy1ssjFcjeXmJ3N5wFkddvQ6a5tC5DNARMPxyfafDWFioTbYDKYUvU",
  "key6": "4BdA9BnMdVAnN3L3rmEsmhJ9rRwn7Gi4U8MdHhdUf49uWUwAsfaBYEBqio6Zs5NFjeFCEkuYC4TjShGiSyykcLy7",
  "key7": "4p5omiGwErnXBMrLqRkSLHibRtoYzogbjUnXkRCj4LAwsm5PCGVarJsa15vq21SHc7FEVDy33m2j6SRmAExtNdzU",
  "key8": "375PNvKUXMq5YbPxsYDyBizSm4g8ZigsTVmxgxxjbCYXzDRCwnkQkideyDwFvgnQBLHNiazrJjPCBupFk9vZk2rg",
  "key9": "22EvovAcjQP4YvNDue3CGR72JopeuX8cVCFDrh8wh5j987rrrnKNWiGgBEMZCoSrNUDGj14vhzM1VskcgbgtYFJC",
  "key10": "5af4qgsrGA8kb3N1rMtA21UmJGyrdw68fN5AzC8n1L6whPTpAK95SqW19qqxY9DnTTwTH8i3v1vkYZdtFsBJmj9d",
  "key11": "3LVADtHGPUdmNM7BBikidAkAbix5YoPGqxTAetKS91eLdGhjnAEY5m4tvZ5D6G3ehgEn4SeDa4Wo4iBB4qEMw6Ga",
  "key12": "4hwCoN6NW6DuPw2oWQkZnSMi1WF6onxSRiPugqspXfGh8HEDDKzqiAsBXqpSvnQrxa16L3826HjuPSb8Gdmj4L2N",
  "key13": "bmZ5zz3HRqLRETCBjhq2gauKKBXMjtNXFVUMYi651YnFpXzTXb5V3rx6VBkL16z4egPsd4EtkvXkzfZYpEuTUCG",
  "key14": "4HJypHHsaMCE8sLqXZv7smNQTZgh3SbFztUhSPcBnNSPXGmugLBQrE3XQ4FaC7n8RG3aed1XwC6CcPxaW9aA6wqS",
  "key15": "2VrtHsbqnffpVDKd2AY69Ukpcm7nfyGKrqTsHssMbCQkYtdrxw4zN1YVS41FKxvQw3J9thXfySfa2vFV1BCWd6He",
  "key16": "3R5699SKdc5tn8aazNbJNihbGHPy2uMu5WeVw7UFmJ4QpK3wnmQqzUUn7iYqyBVr6Mo3spJ26UVj2zAsM3RNpHC",
  "key17": "3tZ4R5o3CFHQgiN5g5LAMQSievQPPX5BQVaRXQurLS1vUthZpRMMhJFJcMpGxtWzQ5kGpcWQ169Z3otTpkMtLEt1",
  "key18": "56k6AS7HAnfqhXBpeoGrghBddCDZ7vr7AUN4KsZAaXz4aaS4kgk1sdhR4KFYhZrQsKbTWJJU31KPwjiyQM5aYnAY",
  "key19": "41TJ8EJGCj9AvJ6QHbZZu7gC97wMm5bU3dytc7JAbHrPAwcQJNvbk1zNtcUxKfAZ3Trh5huP8jYEDPzFGEPT87wm",
  "key20": "3frjdtkrkB6vvxV348gKxtDUEZTzb6Wq45Kq3T2gth5zMNkDYChaw9RG7y2RSy88MaB6BeV2xWpgjneRjeAxWKUX",
  "key21": "4iAQMMs3Jh4B2NmjarXdn91nktjmUrACFT8t5DJsG9zGrowcjikLsVudA3LteUBytrVqutNMsgwJnzroxeyroesR",
  "key22": "5vxhGhEaHzktby4ahS6PkSKTUZiAPt8SZDMp7L9vLmZjp8cwWo1KazTULMZaKrXcgaV9WvzFjr75petHad83y1eA",
  "key23": "eSKxLD9L3jytmAkHMvHBMrKmBMGXFryBvwMBJPfpx6uB2a1Qk8tvieyJXWSAg3KBSXWDuho24S6s6k6m8dXCrEN",
  "key24": "3cNzLohXeQczsK2NMPj3ifeZh7HJfKC5nhHDFm5CoQU8hSwnZSkufwQQknFXSEZCabhoTsMa3P46QNsmDaMH85kn",
  "key25": "5nnhQhY7AbV1HbTbe4c53TkcgCDBBHDhNrEZSx3fvwcLGYG9pXntPDVhHyRyQdfGZNhXVhYrbvFL4pap27AoWT9q",
  "key26": "5v73vdW47DkdgxAwRaZjbBeAmtejMgxbaky5EGC9gcSvN8fmmnd97t9178ztDkdiVAQbzFqzezr1wSjapuPqzYV8",
  "key27": "5SoxWh9UcKdzSyZ95qSg1qTvw8zCNCV82SwACievByp5aeaSAQBZsRa5r4RNRAfgfYkd5aKhckfmSahMvF3oXCX9",
  "key28": "3AK1LZU9jUGNZkH8ajLt19Co188xBd27fstJ7zspG1ztwTD62LCtzhwvjcTS3kR5T7AVZFHgbbuyKirAGtQQBekZ",
  "key29": "2CJMYmfXbTG4F6pZoJQxHC1XpNC4pVsXEMaf4eikGEcsAjZjDnRp7EUdBCK6HtuuBDvnX7jVxCa2XAt6ZZ1PnMhe",
  "key30": "3SpyizhjigkSLZUALDFRyxF7cCqSdXPKBkQXMbubbontoS3xYvGTmsk3wYpQaDQre59MPEtzQVQyLboGV3FhA7rV",
  "key31": "4P9KPyqeNwpoyoEkgjqud8SGGtqYwWH76QYUgWbc4AZGn9BqhjwdT8hfrySvDgjPSmptvhphBozx4qLXq4Wr9gRf",
  "key32": "Ud2agEnbMAXCF83ZKCwSsyMWtFCPK1RFxLuC7RXn3UvofsHrSkx8QBcV99RQhVhnyCF3CbxqtX9kjBhiwLZg792",
  "key33": "4CupNkyeih48Hg66QrYTtx8RBB2ix99WviWaQ6FLCcS1ZcG1uznmSuHnPUCwgUwXw39MJuNqTd6uKW8Cn3ZNrpzA",
  "key34": "2J1Mi6rEeDdCDJpPUenH66BC7xxU2VibxKoD2QksAKidRZQjNheJnDXkbVzfmkXGS8yvaog9JEjR7Kzny5y1X9qo",
  "key35": "61WdxAck4yLy1WXBeSzVnwuKAaaYaje4CdP9TTQkdimSPg7XNHXsD7Lm4M1Wx4QT3eqWfVURmBrARKTsK2KMXVxW",
  "key36": "4GM7M7TQvuVLCbB2tm5kLfgRCyxUZxBhBWuEpt6uoiLwfw4hjhoW24Penv18regd9uSebzWGqwYaX94KApJHwjL2",
  "key37": "3R2tCukfrmKWLiqV6pn8dQ4SeUAaWHzj3giPMXJsq5t1RpQnzquUC8KFXDX3Q864pkj7xcEcxYhiwqe8NDCs6cAZ",
  "key38": "4P1ZfhRVa2SmHdNxd3HgEtKQmAPSJcLrMNdBqtVSfkqvgNPuv36Pp8YdfzFVV5V3AQGvDUCBrCpL5xSz8kJKG9x3",
  "key39": "3c3Nec6B5bNoGsFiRXQUEK37YJKS1EqVihrYZkvzJ8yUmw6r6B1ac9iMNV8P269ptkh2mRbxVFxdS8C7rjUua1zu",
  "key40": "53F2zQJ7Naon6sWUHbJTD18bVGddFWYxno7CogPZmpWdL3L6WANafv9wTTe7LJpGLK3aACZ5qVXCfPLFHCELZYAE",
  "key41": "3RgeiRYk4viWrDn4w9fDJAQUQZ3uezspTaz31xZ6ruAcecwuNFX81oXXroRnYUumK4sBS2aEPTsn5yNq4eGRsMyH",
  "key42": "5vukx5cGUgmXJvtYb4N1rFEtfuE4fMjvRcwgfBEutxhx7hr14Seg7nthW9GYSJkSW3jxJzog9BpaZsxyscy3vpGq",
  "key43": "3gCMsAJCzygsCgyVgZ1FMVfA9NqAs2fzDQTuEGovogWHeNWN83Tz23fYbA9ozAupopgLUqs3w13mqHzuDwrTquDG",
  "key44": "21MDx8T9fSpFWWqa7UEjX4q29y3KBjJKGoE5nwVf9BttCMQRDChF7Z7buQZWXVo6tv7DxXv6AGoL6eNJCeMNGQk1",
  "key45": "23zvGKdfw113xrK4ddTrCCw6LgR45HzeHG3cdM5ZuTp6xB3voTqAEvTqwzLARrhrp65SjVg9iiwJC1Be9tGkyKyy",
  "key46": "2qxFr9bFjRPVdDqyve2MsqZxyKWJDYpdPwx6DWWVWYmxPB7EjUTSRhYoGEvEaWTnv8u3aXzBbf1qSUTi4W5mMJa4",
  "key47": "34CUPLagmb8T1han81ekVLscARsQh2Sirydqws9GM2qwRfUQokDVJAzjaFBtdW99kSnuWJEkc4owGhhLmNHEmUSh",
  "key48": "3a83RRjPExi4GXdjvMjCj93YPxUN7HzayXS7Bzn8LqvVAoWuQvc25zVTxeTRei6S3HMJnonCsAfhf96JTooXLJnb",
  "key49": "23rcpFtUn4BHMSibDFkGipaR28CsVaSokXPw6YzpDULkzk45prJqZozgVWZnvTCfNCKz4X6aZXnNeRPdZqv6Ztft"
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
