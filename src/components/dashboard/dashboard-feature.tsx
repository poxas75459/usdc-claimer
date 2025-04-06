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
    "Sbeum32VgSKQcowFk2xHVKSdV7z14kMiJHE8cyzpSZJToSSxMphoJZAN7zhS5Zka4tBMpqzgPJ8Xn1Cx9Ko8pjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eo7u4Gd6hrDwBf5RKy7xwhGZCo37pg6vLa4i4iSzoEFUqmA7e42RbRusH3vkWgVQPUxddne2qegUJg3XD6GEgFX",
  "key1": "2u9CraJCTFwnQNUyQhNgWgPVYeqPzzzBk6wS69Gqgm4wxckx8iR1gaQQAypVaC9fRJ71G98hdMPb2mxdU9C14yt2",
  "key2": "FrkoZzFekPyCd4M5kgpJzLtpnKepmTpnr6ry7Zkjg6iMAVtME4RPEbtuo6m45dgSkyo2x5tbyAjR4MspaUSLnmj",
  "key3": "5xUeeDn9UazKScj6qzaq2LbjUSEvtp6K8QoattsQ6vwMd8ZeatENkyJTSRYi2S1V9Rnaci85CLjVqZHG8RwHutBJ",
  "key4": "4FQkWxH4XxQbJ69PmzaxNZJCh6XZvfY231G35oPUwMssaKEMG4LhkM7FvRzRErJt3o8N2yKp9SeBT2ZNXqQP9VLk",
  "key5": "2WHLaELqx4ti8cR9CkwsroWbPhJ3RHtDeNmfksRDfUFmjX8WrRFZwg1Xd8xNTHEbtxZBHpcSkYvkZbpgR3KWCv7H",
  "key6": "3WfhM9CSFcSFXkniqSirp1sdpLo9H9Erax67RGjeD4HHY43ybDdwcmwUSgeFGepb7ypAz5VYXDwqk5qVCcivZH4u",
  "key7": "5mAiPcKNHFNRq3FCprL1tT54gyCBBXbfn1dsbY2Rbes3pCvf4ZKATJEfZn8GZtHKCB4UdszZoEPifxNxbkXnF8YF",
  "key8": "35SMAF2orEQK14z8svmgq66dWcoqAkKFp9cYmj6FjVyTaxKsUjHiu2xLSQJN1aaTcjLt5rK3qbnKHUoUWKaJ8tzD",
  "key9": "5p8SFdNRdEQc2baPmEphwYsoEZHgFDRanor3SfMWL9sNHo1Vd7SMhEHoepmf7gEGakSE9XpV72nd7wTmVEHo58e9",
  "key10": "4kjaNyAXLEKgHSZMsUKdsZP8GPA1BRNBki84RYypn52HHer2CBZMbry48AnR1mUHssBHVEQ37Yssqcw6cgaPUEAX",
  "key11": "23mngVcbr6HYdvvFPagWghgRQhS4pXKMXN3cFzNZ7A672eUj2niAJ1nqVwvcuU2v1VoQn9LNyRqeXZmjjrWzhfWP",
  "key12": "5BdJRJxADWrqYEGMkuGFqtjHJeEcjf7x7tWVkqxE6JvubZBpceK6m346ADeppsNEmd98VjxrhwFdLZmd9NdTMttS",
  "key13": "3ebEDNbtvDdrztdf3WF3WghQ5nr7asmwiZ6hskEUcuCgEWd3hxEX9oX1zCkQEPxSg5DLbtmAn6eifm4HDwAUJwXb",
  "key14": "FtnRokbP7maahDiSX8vVcXiS13YmGNxaxe2wYNbLRWmeLCQ3ELj2RoYemqc9Z7yW8vinHvCoanK6E2J5DcZ8Wk2",
  "key15": "43g9v6GNUMXD5s1X8AcrUityPjPC8GLPN6syZXVMH3KGwVEpk4YUsFsNKbrWLvMoy1UtsaZHz2He2gGB148SPqS9",
  "key16": "zUrARw6wTqeaUq7RwwDkoxrWjE2Q16wf4SqMptbWx3nA5VfPpMn2A5XNBfcyfoL3hXsaBHufetokwrHMdfAFUbx",
  "key17": "HtHpnhz5LZ77AqqVbHmZ2BDTMiuJwJ1wViZzZt967ntNBCpjaMTYQmxbb5tRRsggfWmmtGFGyCvzvzokenCtFsF",
  "key18": "3NkPZGLM3snPPRvjM6bq3VQV8N74HCUBAAVSgUdKvTXhhpn2YonaNvuAS1YQdLmkYxJckiXQQYhsA6yh6rQfgaBi",
  "key19": "2wTDbryrM2XEYB9aoCuNgeZUEQAoa64JWJSyK9F5MNWmFK5vwvaAUHELkwWGKvztJGe5UQkFktEh9LyjY8WE7F5R",
  "key20": "3hj3b3jt1imnVeM3dLuf2uNUd88QLScT1T49HKmzL3NuNmwtA7SYftBG4HtCjMq1yWF9hWpicwb9aVPbjDHEG1he",
  "key21": "21Ke5KLYYcz15EQpyVbG7joR9ZQ89DfHaBBVByqq4mgve8kimUTAyiR11cDBDsNBGmzWnS7NnStrrcim9CCa1hry",
  "key22": "2RRVtbK8JnTNNsKuyVNKQq7dRjguNAEmhYrZbf4fRsnUM5YqNGnoznrNeHyEHaGoSqp2mRcJ6EqQAgMcpbYf2aGu",
  "key23": "4MZpajvDJzwLfTcBSY8zevHA8my2ibEjd4ZSWxu5SW1zxkKNNwwCyPv3rPiW6BUwAUuF67V6msyhYbCuGKLuxFiU",
  "key24": "3Ui8vhfTqWZWsoYVCFhFEkbgVh3QmcoTVAFbddEV5RBDqEmM9UTVZ7WMZ7kYJpG6A1YNR84CxeJJPgsZFtFvv3nv",
  "key25": "4kqJ5eNkSx2KcGeJatCtLcCH9JbsRcE5UEAGPfMzD8ELGF2UNQie6Zyy9FBePktnDF5Pc2HqZ2fKi6LoU36Rp65c",
  "key26": "75RFK3X13Gz6jbdoBSEK4Z5w5KYKQTfAqfVA5cMgDLVv9tiyVurPLcNTjBtxRG23Mw2jJeZGXxxhvW5WyybA3Eu",
  "key27": "4YNtxdswyMwofuwgdxfkETAruRsmTmHT6waDrYhQX2uqoqaXhiKKeLRokuw6cyhZhork5PMSWBV9itRaTybbybbo",
  "key28": "61J6VpJLtwCfa1sT9QNz8wbXWKSa6bym6Fo7he3RVnPeczYAGih9KV62UdF46tTtPf2qUL2gKP8bLDXZgirGHXTR",
  "key29": "gmckRYZNAAZtAKWzvFdkRBti4XoiPz2cVefXmF3Gmrnv7ty9puCkXRZj6iRdw98zC3ZNUs41VxtC84CUcj3QT3n",
  "key30": "2RVeDquTK4Bus7R2oBtxRmRmUBybpiwkHYsDximk19kSSohXfyH1bGEPcoWXksqZ3s3Pf9tPCbfDuveFt1bAu63a",
  "key31": "5FGev8uXx3uswe2Boaa6LSPZ5tWw1ZH9u2riybryxqvQGg77zCKQTfj6G9zKDSa31ZjWPDeEUJionghDqkprjwKU",
  "key32": "PSrm8TeXagLkUDnpHmfAC8qmWZsUH52uRy8GqWFUJuGZrMKAiC2135Bu3VKSoDgCFHSTKywQBKLp6WyLcMUMMsR",
  "key33": "5EjuEe9gchgtxNTVacjsfA8jpWQsY59Zok9aqJfyXDhP5NTzbTeockEewkckv4Gmh9rpT6278DoLPLvfdQ1CVr2a",
  "key34": "bdhbmuQSgdGBtwQ4VK9SADGuegpssdAMXAD9sGfSWwcoPT66s45p44akX2DxH9ir6uYX4kcmTbD2uBuvTVKBmD2",
  "key35": "4VKh2y2EK7gEUo8qz8TvRFnNwq3unct6cjixRd2ZC58tg64CDS9L1jmR7zuJG7ffqEG7g5NMco6WNUbR7ekGRRkV",
  "key36": "4sNYdPyBgLHs6vqmeECkoyz8aMaqDNaUuUAzKEdFdE6DntaShHY1WdEKY4f3eMtKX8Z8UgewdcVP6UyU1hdc2k6W",
  "key37": "2BQLAHYDzhyNqCDTRgwkJk5PZFjdQAbVuFKcTeZkgCddDipy5Y4G96zVQAbdHyTXiQFS8Zzz5zF5ANZQKUXnys6C",
  "key38": "3upt4MxZ7qyjoLKLEV6brzs6WL8VY7jumMc2GstkBABzwpMET1XVySktGLd9SSZaNmM2y3MTxs7jN5zmf1WRx9m1",
  "key39": "qtaTo6N84asvvas2jLQJAYnKxuAHBeHFN5cUXcVArPVzUPzaxY3kG2DNPE1y4qdHEXQiCrRm9SujsNtLtNJvV4h",
  "key40": "5tvcUgMVByVjdC9U6F54qkrAG8xH7ML7PTnc5pyep1isbPrzMRrkEFt61UXS2e4fBJKxrE5tyUJqKffoFE1wbBoL",
  "key41": "3aFEnefnNu4ysABbJe5eM5FLwDLAxrFx58M7CDu2aBqGmdM99Xie2SEwv1ft8yxAckBaumNSTZ77V9YXCX77VQ2A",
  "key42": "2wNMPXo2Zk2GwKbuV4mNs8Rxbs4ocJovANPrjm3vqBCk8MmJ3ij3pbjapUctVTyRcvbo6HqxyR4otc8EcVBAQ8Bg"
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
