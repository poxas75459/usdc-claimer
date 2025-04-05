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
    "25YmPgbmDanYdhcBCZi1scy8QbL18sPzpw3TR64KD1unqQA5jXtbV4GPavfkdsmGqdqF1hdT55CNskdmthuGKUvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWLmtxadw1VCX3dsvYEx8HGC6KoEgfJ52e8LtuqiVkYusQcTy3h8kAjdZPKyevRXCkWW5TDwQy3ApSqw7AydcLG",
  "key1": "3YTjmzo3og9omhUKr27KsJcTi87bNRa56adHMtjXSnmZndUEibvMxPaXArGUEE4v7P8777uSHVBMCLJwgR5L64C",
  "key2": "5gRahyU5JZpKJ8qaqJ2zZpZvpaUDaFwSiRLEnzoxRR3BdTi5Qqifdv7UY4uv1EXd1pw5VRSKCH3m1buzQNdSMUGG",
  "key3": "31BZtDQpQxfhUoJLq2oiKZjqrxkoRmFo8kjH6v4Av4x7AuyWo5h4zUe8sT8rqT8gDbYvtAnpAjvqGz9dqihWwMDE",
  "key4": "3DVgaDbyRCsFzcMhH8B4iun7pYvF7K8ZYCEJczjPvAaHkdSb8px7yptKDFamS7kMzhEka72DFP9hWmkDWccsH21s",
  "key5": "4ebeVrctKBpSV3ACyGMhkvjjoPZrjU2TLEu3CsphRGgN3PLMgFm7zLcEFTY9E4tUBfcEinRV7cLL7VXQiqZpB9T8",
  "key6": "2o1dxVzoaFpUhxc2ZC9rQZZMVG8uydjbPfyahbSYN5GUCf23VsNLFyWecZZT9Tr7AKinb8TKSDkUV5isVoKQtXvy",
  "key7": "3wqri4Uj79EaXmF7oKm1JCRTxX1eTSLuazVDuKuX2tdXcpmZiWcfMahHiu8Qpi9RErHuk6zr1wdkM5ykKPW1Trku",
  "key8": "7aHjzL4fUcaUZFDa75MnWt9e9WGoS1ynwcGbXSBbpP5Rnuh2snUkxpPKhSB6qFH2eU9ZgUZD4cH8o5xBoSEsc9W",
  "key9": "2qeKvymxBnS8jRHzkLjKDUGWo9HWAAugdmCBFEskqniyUEDVgmXW7E56msJMr1GGeW9G6FNRCshqjmsMfF7utMWa",
  "key10": "5hxk6VLAjuY8FWPMG87beZkbxZH7GJaNaLnPh3uxQ4RkK4PvnUBpntTKAZWozRY8hu5yuEtaEPKcXCgNZpHnGbae",
  "key11": "5aHyeYuDKQB6ZDWXzfDF9ruTJ3xWR46dhc1vPJdSjwb1pbVtCsKGHmW3ppMG7zvSvTaiRtPMYAbM7BjCeX7xGPHh",
  "key12": "XxiZf5d7cMf6EWjzZo2rxD4ETJjR1T2wrbbH628pvdu83NmBysgT5CHXdtEe8aLhPqAvxZZJnsxiN9rg9cqF2x1",
  "key13": "PizLt3Zci2pe8e2o3Z6g7qX8RrrVvxTwsKfRdpyKq1Da2q7wZHN9zFDHE8pzNKMmu84wAm9ha9T5ibACCrD3sMv",
  "key14": "3oMrjNbzzqqzCmuDeCXrrjxGpb4ZZVxKv3gFk5G2noHUhDMUmscJKjUBvA4sQTryWSfvZ3Hxv2stDxixeoDuPN1u",
  "key15": "3dBQnD2SFwwEbaW2DJB1diFrVhvP3B6fLSpynBqCSKDrfR4rJZKyMoG82MQ6XNQb4JRGPKSFf3i5mSwCoY7YpABg",
  "key16": "5jP1m77VFTHz253MyaGgLgrQGSwbTfDg8nc6MtBmMmaQANan3ZjkkSTe3Abyh4jYZEtDbJVmdmKtpC1B8JZJYBwb",
  "key17": "46LxAAL8JNS6Jkw94vzLAnsiXTYuHGrvhPpDmtCmMD1i3guHg4tDtqAifAhAFmZpdXP19wHU9exJKFLGobLtKxur",
  "key18": "4MWg7b3M8p7EWWJcewLwmqC2Q7AkLdF45g4cVwiu4e5YR66qvghzgtQUurKTmhv76KsnRZJv1ZGHbsAuPmdrmMzW",
  "key19": "4Fs3K3ZghWYNhtEUoSt9UBVcrBeajmVM5hYwnDw1i4PcGgufKGhc7pmyPB4vc26hfyKfej6t8RQB3zL8PsmSdiFs",
  "key20": "L8aZNj1KgFpQC93NwjF3SC5mkKBQf4HpKk7UaSDqikLtR9SauAanE9U8BgpngTUM1iAH8FRzcCYrNgiEhAgErgG",
  "key21": "4EFn4639fPMaUpybs8nAWjZ5csfDj9vHQYfNTtsqwHmvs7hHvAL3zCpe63HyC9qzqHnNPAf5Z3q2FFPSmUTPW3rN",
  "key22": "2cYYFJaeRXuStQXXoQ87Cuow9dnfoh4C2c9dyAXCczvUYWuoULU4q1K3mhhPPYhAMV4wJz4egqSP1SwXsKpUCtRT",
  "key23": "5B1xbeuCPsBL3Y7sBTeY9hSFHFqsCvNzisFhzqEBDVMGtRygjWHxsCSWF1zypFVYUsTPn4KFQXh9Ch8Q8vjUF7WV",
  "key24": "3jMvJ8tZoV7oSheV8yXC8VV4Q8xNHyRBx2igXWwqr8ZpRBMFjm4mcpPvKq3hPmGb8ZEcVkfdT2o2hFc9Hhjf6tCN",
  "key25": "4HhQ3kqRAaxFPxagic5UBRkg5Jh69Bt4wg52qbRro9fREaUx7QnqhJCUsLj2QuB5Y1zhKjVDLWhtAqSMjNp1Z6hT",
  "key26": "2G2idTbrTeAhhWyK9DRjynrmq5FnF81p9EfFN7Tc8gFncbXCcyWAUpuS3cakVwf2U9fVesueWibHcu43io5r6W9Z",
  "key27": "5bBakFxnegbUe5SmUow6hCHSEaJ3WYbwxGpi9Bi4QjinciTZv8no9UVpeqVHkD6mMdZgto9nx7L1xdDmECKXT59h",
  "key28": "5ecy1NrSTYauzCcFm89bNK7itxz8pk8DMopiL3KPuPpnLeoFQ1XNvj41UwxkkQGqZjgUSHeguCeVTMuJSAghJrLA",
  "key29": "R4BN1cZbnmRREzFYvate1b4UeCJ9fsHgS8irXU1JRHGvcQtXmbiPpi3eXBkDi9LdizQcmTPjpiZZkpEheDAkWKy",
  "key30": "Yc6ozBMUW925a6VHP3xXCq1LUhjCyqjj8URcktrNL4f7DCmF3Q5cw1Xc7WjuAs3sH84oeiJsorrnmZsnrprCe3Q",
  "key31": "43qxbXDuitrTcBty5TJeyorttUzBdoodxg1Y2wG7wjVfcB8msizegJdMGaVUnyaxkN3eXRK2tzQQj619Ay47JEYv",
  "key32": "48VDXRCwbmxvCQ7C4ka2vaUiuHFanuo7HNPwsDcZG6vwoNqiygwfky6tEbA25Bc6gkgWVxy9PegGU3q5CKccCf7T",
  "key33": "3u2qzei9jijwEG7VM5K7jEpGk4vhUmy8LjAGTRNjArDCdRisrjSMG3NoNxcNtL8Vbto73mikRmFF7e5pB7udyEy",
  "key34": "3w8dLUEQTT1rTiCPEUbGhrpUeCu8LTzWWBBF36Tt8gdLfggLvLQixhFDJpV5V8xdN8GF9gmJDNpLRPqqFEZQx7cL"
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
