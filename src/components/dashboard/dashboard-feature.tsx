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
    "5iittooq2J19UKYcTW4HJb45axmS3Js8KX9M9wX9yoe7ENqB7ZS44RYpCdNLwoF81yhCQDdErzL3or6uJEhccNdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExH67szchSexrNUBdiN2EzxNEqmgfRBCRF7bk2txWkTk5dWo951tGyQmrGoQbnzYJoFCrg3cN1rAzh5wm36YdxQ",
  "key1": "27jnVcpiicg1nKwepxMXak666WqCu4RFqQARTx9MFoCppjRniuksLrcc1BC99iPUBuUEkgEiCZE88oR7auVxS825",
  "key2": "3fuHpJrDouyBwjsZoHUyLMbYR4SkVqRJZDX6nn4AyxZMTbip1hj4LBaAMUoRavzsUj2u1ZDJaXXUXM9uGPbUsBCw",
  "key3": "qUDGVYHkdTxdSQ2CwquaZH6WVLc1B43VeDpwNSGuEcqCwk9wN6kN8QAJDSRJj9FLVEY1DBGrznyK2f4tCG1Dsx6",
  "key4": "2a7WaQNN2ocvkRhRbDvpZDDWbvGC9CApdt2KG4U6rtCqUqqGFrLZfcJaVDxY7WBDBbvuSwVWGPC6n1xcfvq4QZov",
  "key5": "2tp3TiigJkRA9qUu5BXpVnxqAteXjvJWuE2Q4ktakjR4SUy8uCwfyMpJtwRNLdqRQsNFrfFCF43XufVMJswLWLPA",
  "key6": "534pk4dLiJmWtaXHhy9GuD73CzWX1veY5JNunGP9zcGSqZjodwTC7h1H1AvL9B7MM9vZVqVgNaUNXVF6pp4LYGHj",
  "key7": "4i7QW2gBRHuFjbMZ4CdG5xkAfouZBq4zb6GSzUugnXzF1sRht99XmACridV5j1GL4SyUSm61zPMT6j7Nsq6jSJix",
  "key8": "3uSWE8dkx9preBNgkf7h1aFeBUjUU2Aem6gLgMCXu9RTLVetNKhWcKbaB1rvJJuu3zgkYBqtxk3csmkuFkhAbUTY",
  "key9": "4NSQkhPCPhbtymeJ5KSfiuS8rbGgppzSVtvY2svsvw8XN41EeaF5at9Vzt3SY6A9di1dYBrZCRfU8nDbrTNCcTQW",
  "key10": "2JHcaruMPKQD2irWb6FRCJsz2oRtPUsHDmgx5oqbGwbLtQAZkqyFKXcEfPsVYSEJ5SA6sWzXXZSYor9h9z2fFfGc",
  "key11": "42JPbNY72ffoccFTFBg5YXVoPKDuCjuAUzG6PydcUxKemBEJTPxAB4dxmesiWfxYatS1FR35UKn5PMBaHWuKV3eH",
  "key12": "4Rw76LaCipDDxJG7THTnae5utLKLT66gZYksrLaA6U619LoHDKRhbbjotGcaXMabLn2MuMPr5Ak58kcqjYHFYfNC",
  "key13": "4FDcdx1zZZhensN2ReeNmPcBJSK9ndzPjP5qwhW2dRXABYJ2vpYASCjgtrpedgLF3xiBUrWVGuq1BDdqvnDu22em",
  "key14": "oCaPUp9iLmbu1BGLRRsMLpRUUpmvxQ8rpehshNcfpiEV73ZjJcLZdmxJaqVbH5Bb3s1JnNVpVZ6qWGLBGJi2RzZ",
  "key15": "ZHFCt5Dt64diXtPUSruDDMnPibwgP9UeNPPG3J7i6GWLgzBW2gpec2UXPEzJJXRFX5MfacpxwiMu3fxT2nsZ5ah",
  "key16": "21TM6gf7FjpzivaxF3EGL4sE4H5nCtqGMbfg32VgwyJCZgZRjp36bLtmvuiPiw8M4FyZ6uJoG9hRAXqwJKU6bVF1",
  "key17": "5fFJewZDwvL2dwvCi5GErRxriU6jXC4EDhbeKN57UVh9rs8ntyk2HhayDC46fULCouQaJtgMtyq3xepmzDRvEdtu",
  "key18": "4PABeG16m2wPPc9tdC1Q8KLAsu7F45n3RexEsAmECsNzsTCLdHPunaaEfD8yx5hX5G25XhHLYJm8ioxMRpuuHW8e",
  "key19": "5TcVRDJ3xZMKVa3dSUGZBbo3Mb9hbHCBEW65tPpMnXtdzMGRgt84xWx39oCX5zyQcDRXrd2XBTgKct1XXzpMJ7vu",
  "key20": "4f11hhCEt4HR8EmBRZEyW7xXa1irZVMN64UwxXxyYZB2VmW5FusLsy7f1irTBorRBoQ9dEaSs2coY6s5yyzzo3Yc",
  "key21": "5PJdnfBNDC15yTraSDYquUQEHwqyDioeWPxBKf6Fpt67h6bsSxDXsJybTc94gEkLqmTTDzi8xn7tYJMuG9J52ZrX",
  "key22": "52poYcjLxdUBizdB2fjntiTKXnDhKBGN6hc2Z7kixavfuYmczuMgqMP2h2VHwh5nKvrAzyu3UsYQik2oFRJG9zoZ",
  "key23": "5AzcE4C3dcXLQ4CAtD1Qxd6obQ1KaozcMwzF8YDymB5HisuzNikf3YRXatzDVzXWpLeeJTDcaE71PQs14tqE2698",
  "key24": "6E4nmtDcvycPaAXs4SdaxFXMtTRjAf7tPYdzKfMogr3Z8htkpet5jACX9mnAoDLXpVZeKBsC7Tv4R3sVjPBk7hb",
  "key25": "hy4kMjvpxirkx8pJWhuzNgcFqE2t3FYNVWXC5vMPDWxanXpm6eHvnU6fmwtyAhQZYgNfTLvrJT7q4YjFByxjsSA",
  "key26": "rhvwoMbTxJMqpSPVjQv3HMYp2hpeyJwKTZX5nkba17bB1BAX1AGRw8nYph2PyBQoYytEndBJjSSJvDsx4prVjmF",
  "key27": "3vdcgkhwLa9RG3gmWHpwDz5doRb9E59EBmGzFjAjnX1GwYN4LLzSjUGsFgBXciMHryGnbK3wxNjcAukdH4xLDFAc",
  "key28": "cvDRTixLvkhzBNrSwYjTvA7As1HK8KjR9rdRjypVn6p1uTTstkDmP1wKURrWSm64SZvfSd36pGHRj6vir7hGRqe",
  "key29": "2zdVCZRgv2Fs8j7DNF9bZ859YrZ9xuKZpeWVzfK26pDNK4EDzy6Jwg7PnopB54Y3hTRiDd1cYE9y1cqxCRhy8kno",
  "key30": "U3oGiHwjXbhFar23Ai76rrzM4BJv3NkuhkmRboTViTqi11fprJ2edrE4Yee4zSobzgSdj3yXN854qmchqT5HHVg",
  "key31": "37R2BdfedeEGEToQQrAFoAwWpoaoeHeb2VHKkxUzLkLU6coTBiYp1AS1GvHuppTcHSmT5pi6WGiKW4ffQAguUQ4P",
  "key32": "3M1gzXaRVEEJx2u66GLeR8sCD42UXJHZirLuo9VVQ4w6s7VmYMrdPFijaj4R3TzMNkMaFhWarqDhCjmPe6jpZsoq",
  "key33": "5Jwj1msFRfNXWsprjQYMHBYqt8LnShDDDmmKNHJYSdiqXBFP6yEU4zgwQdc2P5qfEEWt4Y5HikTeVK4shbu57dZz",
  "key34": "4mPwrAEpi4J8ev5YrGgsoJntnmTacCt6fHRW1AQyQwoCEqdu3SBRagMFERMJenq8HTm7mHr42ds4PwKJoPyuyDy",
  "key35": "44aAA6ZKb6Rtv5oF2WUBP1nA79JTgViJS3v4Vdvf3q8ZGHD5t8Di51RdVaezDKwDoNmGGbbwDNXxpGbEMCkejCMA",
  "key36": "4kMfzzh3mRcwtpNNBTaajJMbcpBYKdFdBVZ4MxPhGUTotguSCv6j8Fy727kFSA91Q4HMT5eVL5twmZazw4BJnuET",
  "key37": "42M2yJ1G5vNPSi6oB4G9nYnhZdANLZR4tF5pXSA6r5Q6kxXjt234F2UfAtoJpnr3tDNSGFJbCS8dYzUUtwFu14et",
  "key38": "qjoF6PWpgWymF8gt4R8uLpt26ggYZ7vYRUYiYti5CrF9oQCUrzepdv6C5DpVtUHvtJ43DPKP2wU7vPTvNYxKBd5",
  "key39": "3P3BVUnRkBhbYXSXqHx2xgwWtLwmeJPjFL4fqYgyYyc5yXUWrcg9ydJ9yTby6ex3waEaFYbxY3HbLbXkAcXWoZyv",
  "key40": "5bpapHaozYZQBQUVnGS9rcqTrpCpFAUh7Z2m2SLrBbBV3RnGost5DmakJxn6CH5oEMK7pJSifcqZHkcXmiEKTLxk"
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
