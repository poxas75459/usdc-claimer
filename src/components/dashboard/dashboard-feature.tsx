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
    "eESQtic7FpCdYRUm2vqBXxwxqEuSbCu8WuXMi3buxrdnHRXBTB6RCiV8vXXJWd2uXGj658NDjRnyNeP8axQw72B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dopK424ZZWmL7Jpmx9LMg7eN6bTv8n3UstSoRf3m4aUVacBtKNzojiJws7VCACk7BxeYjRgsqxPdfrYk2M6ut3U",
  "key1": "5D5BsdgufPc3AEW9sqtYP7D8uG1582cNpnscDpqQLstQyRrLz1yTcmmt7VN4QhteZhSZ13EMVuR7E95QwZNmzbz6",
  "key2": "2qwdSxSsqCNq2zEpLyn63PieRTwt8jDcgNPHJsT9xuXyV8ZBcm7WMX7uPL2ygD3aetZytEakH5KuEjF3VKwBC2or",
  "key3": "53REg8QXT7UNTTRFqJuy5EudRGDzGe3s3W2ZdoiU18geGT2bXiwBq9vBFsrx4RrvEfHpzZUEeDNJHvCB48FKUaaW",
  "key4": "3pF6JfGRmV9UU32HQsFNGMHkbnaSvKjKxVm28rmuD5sgDw2raEJPktqrbK8mMpdDUh5H5Pi5vTpCZTP5AjhUJzRc",
  "key5": "sE441jrn6zhrBN8JfRsVjSDJfQUpF1DDhWmjJBtj9RV7xn35EdzSLfwwY8oCCLq3tFGPNMFM3TDn1pT1TyJtH9m",
  "key6": "2BzRMeLamnHSyfcbfgHuqmxN4wACFQT1QNEpk26o6ud2iK57XQ8YnTVd7T7wWiV8dwk9KAW3yD1X8XS83aSdV47d",
  "key7": "2PfPU8WwdMcXMSdsokd8cbgHNpr2eiEsuEHJQ6XKzbYmvxNfoH3CyheD4DpJZ2hp4unHHvY1R5Ax2C7j4ftNEJjk",
  "key8": "5q4WKp7hV3zJDRivE63V9WPr2R5FdrULRYAefxWXy5Xw7weX2tKM48M5g9hGo5sDfECLFmtrSDjoFTBP5MsnKsV7",
  "key9": "5YrfhJU4pPVbf31unWC8yGa2ferjuUYZ8WHKipJWkowX1Zyv9d6HHHqhopjKF2Gp7BGCW4dW99ti9JfoFDkryomb",
  "key10": "5UwxKyKRYmrfH1xRyLW5wuVPWjyY2KiAe8p3uNq1d9yBHSJXwuQBLBPQUQUrPgYebbNsKkDqxo8u6EB79E7ggb6w",
  "key11": "3W9ZztdUHGnxrerzRCyYad5WGgKzdLrYc8VumSshnfhH2pUFaTth1sZ6ciJK51vZc6V1UyCYGbZuEdNQU3Vwtafe",
  "key12": "2HausuRvGyf6Mw2ngw6FM7UB1Da7qnsTLGiurwt4ekatAPeP4eKmbh3RyFtRJQ79o2PbLiS9SUmochuVL3XdARyo",
  "key13": "5YLjmxXhrnnnGeNiXhXoXSv49xJ2VLkFMTE5zpJuEtpdcGW1146btswRV6VFKUcdNgSFRj5AcpZux7Rq4z5UkSd",
  "key14": "4vPUtJ7munaZ5JHeCCH4LVhcbcFBpUWtChVdx6pyrN74THiWDEaKYS4nj348rMEEsnVcsQa86jpQxs5soFS5r2nT",
  "key15": "5HoWeVLYJufZQWm21wiZa1Zx2B3KRjdYckY85ueVc1pUJexv7859nEUaykk5XzBqfNNREb76Q1VUxWBQwqhTJG8h",
  "key16": "5c8Kds4Ra3Dy6QpeF8ajrH1fgFVjsPxWKZAStsF1dB5Jta62CamnXa9oPcLKHdXkjPNGMZPbt4pDquzMLye1JC1c",
  "key17": "5RY7jJX5x5JBySjYCWmo26YfRd4X4Dn2nY39TQjDzzghW5bSBHvbpdAkEnhzYoPsVK6jkHSai2y3djUUDaUiQrUg",
  "key18": "4wMkQfRwD6Q835XfoLmtgAkHNrJJas6zV9PkDYXPz6Q74ei23LEX3o69pHpZ1a2ZZfFCFMysQLGc1FhbZxnCt5G1",
  "key19": "vNWaAocFgWUVei5MdawNGrAfrmYiaxk9XeEGG9dLPhrDviXX4dTizfM6qBEk453mFGfGNHVUP5DxAa6DaQusbbb",
  "key20": "gAGuHGjmYBMeXmGMAGu6jFGWuTwjrFNhDXLTXJyXvKCYAg9E8Uew81TXbrtxV865k5QGHEnbVVnWkephxJ5WDdq",
  "key21": "4n1RryxQ3xcDnQQnjEt9whTKH5ZV14e7W5SVKyPLgu5U3uxTxa52EiVotSkjVQqAk21BiHzDqQpG4E9eUY8hvu5N",
  "key22": "3PXRoGujXBU223C7jpYt1pzAkehoibzD11JTXLVrjbhJNkxC8tMnVRb6GF3Q3JAYiq8X2aaku4JCdqV4YY8Nzgke",
  "key23": "22zjMhocCuyUnUpq6RXNmA8L22NPG4ygeFUZivmjPGzPRyk6rijHwiaTBxiKWUACLHjkyrxjrBYQwJMvuHvMKXCq",
  "key24": "42WKQnXPixQ6gc65Nb6MnocTjSkJJWktb51tEhv22yA75qnbJEhzyzpyJg9xXTnBzUqocT2wNFw2sxoEvSCinW8",
  "key25": "547FcMMW4tWY9KmQo5oE6FsE6iD3DV6xc9Dk4rXJyV5Lj4u8RL852TENSaYmXBVLfWPuKzm6NT3nC1wPesqqHpdU",
  "key26": "22iAsijhw2PVKwKsExTG2JZE5fBokWMd8DjtwDHUUve9wz8Wd9z6j2RFY5MX5ZDzDKC121KfscqUVUyxVNkFUjFc",
  "key27": "5oE3FZCHRivtiabh2RWxe7AT3KXH62gYhpGPaMKeVfar5j6eBabKs3mvky3JVYgpBzexf1uLvPMUBpeyfETeikm3",
  "key28": "4oAmaYAymGsZFwjZRKPGUSwzySHjN3HRNAwMocd1SnbD646UbAZZAMwReunQQyqrir9BhLjrBGQ1kgDhmNXY3ddt",
  "key29": "4wmH9jQu9dwnrZTT83Ra2PK6yoHG5po6Jq98SZSPB3gN2cibRhkuZCmS1ZKb98wYiocR7WdY85V3h8pQUZojLjRw",
  "key30": "5otzMKRDXAinUMXKVHouYcJyAnqknTzdu27bMZuPdEgaTN5SpLCrTmbgKYei7UkK6KbjfdYHizMgoudY8N1Zbnpt",
  "key31": "4gF793kmqY3gtAwikGfJ11rBMVSWYSqb6vKBZkLQMH1DFkp2zYgb6xYCmzHhvBW7wr7PTKSje6e43fCqYwEx5ZHS",
  "key32": "44gKVeJvtaGUJSkjhuv2KQ6QLuwmYCZaKXkmf332bkC2KedCCERuPTnzbbxS5Goms6AnA1oCD2KV8AdMngWFbFTx",
  "key33": "3EWhUEUJzQtteRwo4DKTAMtxVpV1bRECvm69M6goW8JSAvzYpqPkCM4DyU9mfhRZ9MWGbf8m1VxDjAQKkd6keATu",
  "key34": "3LJGzqCDseEB1SAjBvniDxVKPz7u8Exj4CEro9VoZ6DhMD8nX8tx3WG7PQoCVPNKJh3pVidxzYfy6Sn1TUJMtF1C",
  "key35": "46TdkzraGpjgNuDCx49rfREpquU6z1uW6aRbeiaLMikSwAEyJGZtRfcnJXNeanfyA66pKvZ2WomGzKyLpyXKPh5M",
  "key36": "3gVQ6CZp551xznJ6KrqiHnpuoiRLd9u28VQ2XPzLroLkEqZVnkqjJthcGP4Yo6QAjcoz2fqFFVn5CkvXMbMYnaUE"
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
