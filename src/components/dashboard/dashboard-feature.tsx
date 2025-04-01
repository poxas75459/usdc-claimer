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
    "5VUfsKGBMxRQtQfEXL6ku7Xis9hWP5NREXdXbdFKHWcrSCUtEup1aTQGrKAgGJDePyUx567Y7qzy3dYaHbGVREDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tr8dMBnmioh9JcRu8UxaL16c6rcJhVQvTZnE47VQeJMN4cBRkjDy82pVcKhS4mjyszWTuaeKk6LbdKjBMp1Eun8",
  "key1": "2D8zEdTdaH5a7432ceV2SHpgzXq9xdZrdQaLJt2biPMj3iZshyoceL62eWhMVLfH9BVgbkmJ7SkjE2a92bDG5Z6i",
  "key2": "5hk1WVmZhUbK6WSu9Nf9dftLTRTFLQfscjmoyMfnF4KU4oAjCg6DTydmybPB89dKsx4bzUGdH7ZojyRwJGRB72Nn",
  "key3": "2pg1kLPEYr3bKwtiTgkdXjaXUuiMibwgqnk9wTY4fipMKNb5wWoZ3tGKWsARGbfDSg3d7v8Bqzs1iVkSxm9aDAq4",
  "key4": "3GupvymtnoKUgiavkYuP5zu928CaN4mdMiuxkcRXyq4Hyzw7UjvGE9PD4zCWpQmY1PJQ59Z9SBPWwprfDRm5h95u",
  "key5": "3Sh1YWudu93VKT13vuXt9hgrtqyA4fF7erKYmg4pPqGaMvnGWvnLZ6zPHdPzFYjPrmZ8HygCLB2uRHQUfZ4MqygZ",
  "key6": "x2hSyzw7LdbkEnvkyJ5LqvYPigz54XjJ5RiB2JyJkAn8sbjG6Z8iNMB2n2LcXMoccwDmhZnb5s7SaSt1R1Mq3NE",
  "key7": "28KFgzSucCoucYaXSBh6f9gJabmgzpKUy62NN6yaDMkP1TcjYaGcgkRh2SF5KCg19o5tLaRJfDuPFMWJn8RUBDnX",
  "key8": "4euD5hyPD7G6dgLVQPPXmENnthtsDPp31tg8wDRPPYmCj74gN4pfjs8QdEvX1YcYDhfR2oaQwB5PzjYZLiVmTEyW",
  "key9": "3QE1oiZRRGbmidLhNPD7xzEHJFHeumV1A6bRCbtSxXjtMLL6Gmc6aij3Pck6ChE53svDxtjD9ZEYCMzAmVj84s7w",
  "key10": "3jFRN1XXALLBT3S3Ct4sJspL8RQ5MprLRQJUH1UfZJJG8SzfNuKCwaaFBb7nnAZGyoaVvJqkYfXqdYQDUDYuyD8c",
  "key11": "2ravdEurRN3JLiP1aMjq8RxDQL7Tg1qhs3ADNu7R6fmCFMVbywLGYDHHWGJGki1wBTRWJvoQ44p7eobCUVXUUkgJ",
  "key12": "2h8mc56M6hmhVnHV92yBh9cMBW5uzPF5ycwbpswdDg3wCydtcsvDs6Rhbmb5krzhFBd2kTbQXYAfUmgseDdpmQWT",
  "key13": "3fdViMr3By1HxNK65G1uqbteUvebgYihFg3dgF9UtiBuMvaAKEndknhgiWMJLgJ8HhpUaR8KDYHu38KLd44WMb6Y",
  "key14": "5sBBEdnn3aJizC6AEpoduSNVsa1fAeHZkgw2u3Ur5tjEXwSGksJcrPSNTrgWnaLkkeNyU3Adwk8S5wXT78CjTJXs",
  "key15": "37eUUTtdqnncvCmMSLzKCfdsZrULv5GUHNybo4eM7L9ofPEDqeGzYbhGYHKntzd8qxoRHYMAdvNPqo86u2VZp4Vv",
  "key16": "2g4ipX7zyaLy3KpK7QU2CikrHLv7G8koXXuSWnbpDKhqq5LEuYaDV8bbfxRScsyayNYTErMUmurEZeLbZcQZVREV",
  "key17": "4SFJNuE6kFX6NF52gGSx2N8WKt4JVk5Xkqjyh4Vq3xXWGBPdzuXnMLbsm86Cep89hCes7g55FhdP8bRYJDBT6sNA",
  "key18": "5rj5jm34hQ3XrKpiNmK6tk14EyMvQcmr1BQSG5xHLJmVv9DGPyNJ8JKcNuvP73uUrshAjdrBG8UHcTWDB9oGK2Kn",
  "key19": "4GNPUuutJBLuUdPhTVj9TCZSMBcbHtrfGvmdsnqEMtvjt2QMCqLWqqFvxmAxiybnBhZD2GpmGvV1XKkW79k29rod",
  "key20": "3d4oPbJczEspgn3P8Ypoy7eVJ3Gicsbbx6pny5hr4Q6dVmNM3b7mGMKimUzMMv7TpfqZ9prM43qmT5XUS7DbmvKo",
  "key21": "y6k2jSA1xkDNLWikHja3CimGDiX3FyQ48oTeUrGGq7zcPUoXDGDfgEj8dufZsWAJWfpnmAQd2RNMmKLH51S5zeS",
  "key22": "4mGoWosnsmaLMkNCWxLgai7Kp8cVNGbTU9uXUaGRa3hPeLe9QzHfqGCMnyLooNffWeA6SFCAqTyuXrGQ3vcnMXyn",
  "key23": "2YFQev1FFZ6chkvmuo6Q3uZL6MtY4pfypGPMFdJDLmJk6gH3seiHq4ZFUWUF53Kdc264a1bACN7HgEDnJdBdEGdi",
  "key24": "3qBFgnnKpVXX1pGazTFSPV1GRZ9vB56cC8yE3hii9zyrNqWMW2r2DtTQMRD9CthM3mF4JZgL77d72uHsiKD1LByZ",
  "key25": "3WdkqtScHsTv4mfP6jk9dAAYi9wjnbY3zTdq3LzsvtftsZZ9fPFMn2WKZnCfeR9ekr2BtWqFNkJh9zb6KuRfFoxQ",
  "key26": "gch1jRXEvqwhZB9qxYjM4ZUcodGy8iB11QLyHBxBv5XFCUMVVENVbTLBhXSCPNtHq8MCgaD4q2cgujvM73FUxu8",
  "key27": "3tKyHP6CVuZD4PaQVkPMdSFymTDJCGo2vJwVwf8qJZ9F56e6NNLX2XNpdL769JeeThSmSKhht3FumxECifrbZGF",
  "key28": "5GHXis1s5FKHSfqzB5eme3HtqQM87vohD6HuDnDJyvuNDBGPNY9oDQCJeCsM3gsc5yARdSiqDUL2ej7VqVRqWNAY",
  "key29": "2bH6GNsH9GcZ1Wajgt2bRxLxH1Xj2wsYnXH29iBakbxXtKTuP6FuhERYbPwvbrtx7fjRoTex3NybHkPgZCsutqYQ",
  "key30": "2Cv9gDn87sxExCyNWXM3WpQ3nWAvATEekgq7dApP8a9Sx6FyUbXF2HHvLCNEyd9D6bg1Zuu5YzmspErT71hJZDaR",
  "key31": "42r4FaQf9JPnuqowD6Fp17rPzCmm6Yni3HWiEQzv32tLWahLpzuxk7FTQ67E1RZwDZaVizcrdyv4FxN1jhwsBukD",
  "key32": "56fSo6vJZuMHFZ7j6nb9YBamDbnVr7qBB4pshaEZW1xwoqycrw6urETa5awfytf2naQNfgtA8E811ZvjBVep3yQr",
  "key33": "ZiApNwHVWPKYj2ZZvgWUH1ZLebaZ8Ac6vxn9MJhu3S9HTJYn4cqYq53XkocTc1ZVXYBQzuMozrVTmnRWadenquy",
  "key34": "4TKk8uLXb6torukevF5yWNcF4BCMtiDHUHD8ezafLVmV1Raa1vR6HhKvm9MMjoJyaY27xo4Tnk4KwAdVbPEnfp8R",
  "key35": "3fWwLwChMhL6nVYpP44D7VuJepYU7spxZ8EyvCuzMheieyNx8j6Bwn4PZyF5CzPqTNY8bvNaNuiHZBjP5ZxX1vRp",
  "key36": "5XXQ97wehsabRBjJAWwkDMFe7y3p4SZTcjM3e16bet53Sft4s9xH3MmZ3TmkZ9QDyXsniuWbYv7nbKjiqW4pvCVW",
  "key37": "5bgmLwK8gXb8fDcuBoCiH8Q9jy5pBakcpV7R2yFw6dgz3rQaezVUZkxC7rRAz7ow3YYYM1HksmVhHxMwCnpC7GqZ",
  "key38": "3PLDNarqZdsDE59mtADFrxJejAxCkop46AeYMYCF6vBeJzLNwpNXEEhW5tJdoXvS9kVFJvDyWXwEUipnUTpZJx1r",
  "key39": "4eC8L2UUG9CpgHW4sAXbijRKy35dTEi46Nkrv5UUaH2PPkmu4yWXGxXB1Rt3vDpxYYgNxQGKuwSq8brfmtQT1W5K",
  "key40": "3VSYFAWMxGbdeSsMz9ntTMoD9J4ADgq8R5c6Smy3ZAG9t81FsCSJRY8G17JKVYqwAEubDgGaX2bPmv4CJY6dfMAM",
  "key41": "vdEAoHYkP4CRQaNuThNwtg3SACbZp1kaTMfzfATYnfc5J2gLxHMyLZgbksNSwPNdgqNfkL6BQe2E2AMxeZCovmN",
  "key42": "PiWJrDcCXnZ9FBh5jxbejP5RNYWK9gLonVgq7HBSzxH8SYt9J35dj5tvgsLCR7PzApCMSxqMWYvX2R1atwpqnMp",
  "key43": "PaPRuwgU1L3dHmeYq3qJnMRKdJXD3p7mQC2yXNTh73bqm4jngysXZkfA5iyhwUcJq4CQ2mAHpsucBcoqa97Ffu1"
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
