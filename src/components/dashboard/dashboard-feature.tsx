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
    "3dVYdiYLVHAEQegZMzQJnHZSQgfDESS6qr4dFaFPjjinyFVADRVd8bp8Cgmh9TMzV3VegJ8zgJoPFVbH8edGzP22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUQXaAdpbR8Gt85YUdSUFvESR6g1bSVQkTZVK7GRHzh33oRBX1famCUxgzNWvQ5ULuMamYbo18Vj7oUG11idUG3",
  "key1": "2vxkHLCGbzvwd8GdkmcjycsCeVqfKnMLApvFjK7WxyDtyhU3rjyPYoQGHmDF3CrDfGEjkJPo436UMrYiUw2mu8sJ",
  "key2": "P1dUavc9646Bp7zW5hP7raNeGBy5FjhX5LMhPbvKWT36qVxuxeCQLfXbsd61xJpMr99hX6dtgCGDnje7eXmCC7F",
  "key3": "4YoJ9Nyg37R2rknSb3g6sWorPTGDvcKU2MiT6FeN2PyTzQumGGiUpSnD413kxVX1oXUCGeiB3YjMo4RZnGbkAtnn",
  "key4": "5DuARwB4HRHWjanuo5iLqqvH98uwSe5gKaWdeLibmbFLAkGMxCWh9rPFFx4pPWM8NQUEGfCk8eEKTn7Kf2iCdiKK",
  "key5": "2oxFkjkcv2hAejR2pGxseSQQuccW9KVpvRMCfCvsZvvazSdj57CEMUVyFymJfMw6NQiE3siAXir6MUMCFKawg176",
  "key6": "r7Ur1A14qqJ3i5q9pQpQESdcTziiiMmvSjsZkAsa54RAyGkBzUHd5z7ji7yx47PFuT8yrR58pNWD5HMQcyuemCb",
  "key7": "45wK8q3wjatqG8p1vssha6Eur5UfvW7QdD2NwgFMHoWVSQaqrJupm2trySzvwFgGYwtXBMQsZLzrUXU3Z3VeS9m1",
  "key8": "sp7a2Uy2PCnQuYdTBdzcULoJ75tFzmmURNuDzUcALirhDVYtaL7cbmuv2vSjkSgGFWyDEe7M3MyXpjdEwjJSH5t",
  "key9": "5YbUhrXtDXmZWzFaLULHfucbPREbJTo8GWbVmQ89QF7GX4NgNLTi4RYkdTKB7WebbVQJvjpgHVVURWBiqwZZ9h6d",
  "key10": "3mbYm2aGipu89BUUXZBMrtNuMukwFv8knH5pzdMbrNS2PmSS5UDaCNVaHWMJF9gVsT7cSyNiwNvzbZkPPhHnoGSE",
  "key11": "up7JKRWhm9bnnvPmo3C9X2X88JTYETu4fEj8JQBKmqpvkfoRP64tPsV1YguD8Cx9ccyq1qjHkaPPS3nyHgWxYnV",
  "key12": "4hSA9kmPbuXWL7z1k9dRB7h8g3X8R3MbR5LBFNfd8MiKu4oD3DL5KQZhxYg9AtfGk9pGUTEiBYjgNjwpdsbhjjeK",
  "key13": "4mGuPYQ5AGDrx1oeSbK7H1ozeDq1gCRj8f15yY8ySQMZW9p7A4vQcestV6LCwBDghG1FwWDCAhPYsPEEmjTZdmbg",
  "key14": "bgLukHuprLsD1GWNQeZ4prpBfG7LfBuereCFkQdANvgTvFaWttkCqTMczotis97xJSYZ1UsD3Dz2AgjSPqyRD8s",
  "key15": "4sovwdo8MFztgQNANpQ9tSQ4CWN5aPt4EaJNznQt4pBCM1RePPk6PsRt3N29Ri2g3UyWfmGVxq3qDDEZeT83ECRx",
  "key16": "4D1dut989dqSJmkNXZW6Cta2Tufv3UYE6k618jmCwnR1bx3h2qCa3xnEFWhNVhi7tvc42WshgVcWAsUzCNkL3wVD",
  "key17": "yJPtFKZjGBJM9yryMF7guszart66rEhPX1QexSRiyFspdcUcR2JMaxdGch64o6BXrMS2jcBCW9kQ37AA7hjYkpD",
  "key18": "3yvzqEEBHNKaXJHAZaWVw82NNXEnadpLnP1TQrzFL81BYM424fg4GrHAcvbSgNSHemda5dTvtAfPsSQbVF1ww1AX",
  "key19": "5c3pZKT5zGaB9wLB3rB6YfsZRw41bhGWjbQLSTqCRhwiaEezj1WvDnwzcfwJRSJMvu7sei29XSB9HgHkiTXb4wD7",
  "key20": "5jqDqUk3rjc8fJJx9nJDQq5QjrMHinLSC2em6SLM96gA7jEa2in6TghX93H7wzw93Wqb5ZJ6tap8ib5MEyWT5Fnv",
  "key21": "5FDVyrtd8a9ZTDbNd7ZDFrViMEpyr4U88DgYV5xPLcM2Jtnyp4BdxRPvDDpjYUrFbcQxYYRuffizTyQwrhiFrZvq",
  "key22": "3u3MygpEFpftudF65665Z4ENWBimDyT2dSrUC1CpfzGav1p4rB2BGU7GQhuk7De3WuRBR3AZJqvqvccnkVwxsBvH",
  "key23": "3SeSw9Mxb1rkzyvuGuFbPdL9cdZZKpKdS2HLFE6ej43U7o6Ptky3F826dVxczWbGEWAiGeSunYsygiuVQDc7DtJE",
  "key24": "2R8z7iiEFuNC2QmCUyG7AybP3bvdgjsH6iQemGs5fTRkgsBEWKzNpok56bgo2TxKfpenRKxoVzuKhfMCyoQkwzbS",
  "key25": "NhUTssTaovphu9LAf9LgrqJz5gqeBrbmNMzGGnrKuecyLJfvene42HXz7xyZZDsMpj8ULXPur2AiZdXUYfGb2LN",
  "key26": "4VbjnvuqxVc33PQXKqpQH4KoPLHQGpXmQcULgjXdu21y53tVun13McmJmE45wE3mz1KMqd5PfvuD7exbSaUeUdg7",
  "key27": "5rVQGW9TYQVcmbFwiGnhUUX3j2UjAHiXiS5k1R6atVYX8FiRNp5hHsd3Fe5UibpkQtRWKBFQrUt6boYCVA88359s",
  "key28": "3U41fNfRvXY6JUtVHsnGMHT4kdeZmirfuLwcPFEktZP7oA2NfXDykdYCLy2XK8JJmzT6T9to4ZEMXTCNucyPsvdh",
  "key29": "5o6JWCGJdEMDSBbgRpo4ow3c3qX2tiouR2xxij76bgTvgTh3VkmjqtPGdjwDHmmwTLsoSxeBc75as8FStftSbjeD",
  "key30": "2dxVztfoKZbdg4dqvm5WyAhnTYBT8P57TgHuHAjBG979auwYWaKrXEyeCs2pZGzJrVKbNMXt9xCr8DQwnq91xcPF",
  "key31": "2vuPphEkQ3Uft7UCUcvuEF5SXx5fcAzhsyEPGxtDsGDXNAsKqWWpzQ3FfHLZ3zobE76PXmaUkxoRP8HUp73xrqDg",
  "key32": "5SGva9n78s9g8Zxfm69XFFoMegMSg2wogbgXmFM3eqHtTEDjeiek2tRbHL63fsfnp2m3PxsbG5rCRFQU6WdNNGdy",
  "key33": "2WjL2bDwRadWTiuqFpqvQT3FpM6n9RzFdiUFKX8eDEhRQNPXLLnde8nzyNdCqWGXSPWoBfvXHhyJLbbyewBfKXy8",
  "key34": "5QzkzepYT6XM4C8RJCEFQPBRkNPp1y6tqfqr12ccisPKnkzrFQ2qsZEfBPZK7f574VWjccgmWrhNHZxggtgjy9z7",
  "key35": "4b3zfiAt1xacZsXwRksLHKRD49Y6saV82KHkCzAh32ev6h86YotunLTvHSBkgHACdtM9PTeZfbcPN2J7vKKZ781m",
  "key36": "388gB2UnigoGTdah3xm2SuDYgh12XkqhT3uqcdCz7DSxp3nP7hx8V2Ygf6pStngmuBUaXQm4Ei2igz5jBJYUxbSc",
  "key37": "5CyW6GZqcvU2j5WcZDK8DqgeYveBDDPaZhPevbRsan9KWFHqJdhmEyaDH5HzHLe6DTEchwMsyHQuEiCc9VFLNfZA",
  "key38": "2ScPb8y6B8RBWcdj6Hkv9b9p2U6CJuJhS5c7nGDBfXCxgUVcbYGdShMjUiuU1PYxfedoovweD1Tbu8RJYehQLtLe",
  "key39": "XKppQCXTMU7ZUqb9D6bWhqKywnTnfJkVBkUQuQq7xTTqYVETtg6Z5fVrBorBtuvt3UcFpSXsszGLut3w2QxqtfY",
  "key40": "4JKViEvEbH6SFpMDtFsWK5oxFokiTphYnNeDEnfnYmYiQANUaimk5WmzrAPnwtsejo1GXEiw9PNU8obCRavTVUF8",
  "key41": "aoSWW22ogLUjdLeuHj3AhFDtKZQMKoyGpgcW7wPgpCWndk3DxDgCMBSCWXPq4N5LRPHFQyD1WMXanVKHSGphotP"
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
