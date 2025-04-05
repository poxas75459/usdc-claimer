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
    "45bi1QSkc1yuXzadVsXzp5FVrTPHcDiHS4EVWbtGmXnP1sBRktpEnoDLyi1DQCdoMdS8Gma8c6UgXw5tAgyRceR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qx9RCEQFnR6L8N3AnyDRREH8i6Bop8bCmh1gZLVjzmxn3DDuwahFJ3JoV9K5SQtZ6ReTRNfFwFC1wFQS1Ajdcbh",
  "key1": "2Rh5VyTna3HAfCyvHSMt5yGdjFW6m7JqCPSGaohoq7cCjBDzR2xxXPgEqx9UhT4E36iADB6deLX63Lyfe9wyFfGE",
  "key2": "4QMyUQ8yWLnJMpTKbtzQyhyi4e2BU78LP3wgSZQthEp733KhXr8j41nM19tQ5yhiyYBjHCCMaBwJQyDC3UHBhuUK",
  "key3": "gXnJKEwxsnz2s1W5N3gJwrie73qV7RDkVMvP5y91VdAYQ1ifrAV5D7Vx2iRngD6w6WrnjcPtvo6bMey9eUMRwFU",
  "key4": "5dj2uRfja9XsjnxE1ChuNUbSeFP5U6Gwv1ciFXU5jmrExTEBxui1Rd2r9CbnWVVYXZaGY31NQSg6yyHtqKbi9PKh",
  "key5": "3boHaxPd9bijrQoHrMeQiuCyMPKiKgWuE4jr9Rojsxdy6du4SQez95VhAarLwLYKSo6sPcW8mtXb6eh8JTjic1c3",
  "key6": "2R3VsYdZQYUQ8rbCZ7gTAJaE4rrtuADCfvBvYnsHqbWkeiugEQ3WETM2PyQUdUBiiGmqN8ELBo7FEJuMgPFMx6eU",
  "key7": "5oGWSgxL4DvNeifgh7mmvK3dT6x6CTEiUQYG2bEL1dUMKvCCixSY8V27oren3pMTW7mM5Hh8KD8CPbqqSPfGMuSM",
  "key8": "2wPi5mprCVPLyFSBqHEQBVqXDJzBRRYYYTgDk8sTBAawAQPwEK3YxfBxbn4qL4Szsu35CWTXkGrojPTkXcFvaebB",
  "key9": "2qrNhmiyMNPuZNDwVfGakaXy99VWnj8dBV8D9hFWXenhcxkaQ4n6v1yqyE7zkSJZRZg69pCgmRfZiyGbcWXZ9w2F",
  "key10": "3XnbWQYBbGeifCzq8DwQMVb33XZqU6yeeT2MPnajJi4KSA6rUhKg7WX1aAuo6T9nSJvMzjYRZS55JcKfjoAwZxD7",
  "key11": "99KLTMDkCef2Kney1m8CiEfydyboEy3YbopMSTbfHJa6ZHPu2NtPDHsW2gxKv8szTa8zqW6jBrcJyn9S7eF6Hvc",
  "key12": "41H44YaR8zHKdpSxG3b3oCHj21FcNhYsswa2Mkt4oWTuYDSn1jSGhN5DSi8SBKAgqe6dBtuvGNckoBJxYNgJDJtY",
  "key13": "7E67EmSk3jytDFNVhNSR7kQb6KTMEj2vbubdNjHpizCBSWq3CDWR4K8rb54TSpPorRffg9gpB9wCurSH8u3BWvQ",
  "key14": "ssKe7DmjpQrbmUQUDGTWdnhwTxmRsVfTqXZxJeZKbWW6yDnkx8YqgsxCbRdqvQeqJ8vqmC1orHZgcWvFeoL9Tuo",
  "key15": "4KFKMmW7r1N8a1KXkrktZSQr2UfMDiZnT3VqXiK5aBNrnErf9f2K4XDpCPstEUgKmgdQZSk6g28rzYpRbFqScixc",
  "key16": "G9HXuYK7r5QrKcY9pTSUnAJJWjzU4EhCMM5KVR5Jr2fT5FfUEG523hhkJBhu4d7LBMvdqU2FQLie9eCPQsMg1wz",
  "key17": "44y9hiT1MWwZgrNz13n1rHoXAQazjjbbkUCu2zA22zbqf1mLMtHpZgmUPeMddfYY6od4pV5i9W2rMs84VkVkJc3Y",
  "key18": "QQ2yucnQuwjgthmuMxc8Nx95nQ2miNHRSA3xPgH6XS5guD5zYz4ZHFTNCNXMhJRZm48gy9FELxkwTdsSUS24oSr",
  "key19": "3xa6ewgCL46zKj8fhCEHoPxecSBs1r73q54NCJ8DeFT92sxGop1pXDFXkF3haS1ri8DW32tAZdKMmAksZfas9FKz",
  "key20": "5ii1QU8GBvq5V6yHH9EasLLUmYuczCuE8cDkYjUf9hGD1MycPp1KCp3zAfoF6K5zfxftW2y2afNgzVwW7oHKfiJn",
  "key21": "5hUSiPTAmCtzHuHdHbmbLTbUspFUfv2KjYKWwFzHFqby86yvtNrpzeVpSfACCs6CYLRhz5LiwAgKdZNDssA3Gn7h",
  "key22": "2MxzV1RPfQhcRX37m5VbvumYcMiTzku8ZpZNJxMmJmXbLvRmX1my3pZGLQqvCEhdcWMyr9kqyGcxpns2rSoNyCTN",
  "key23": "4JEVNq4yZybxzqtx2v9hf1ZZbTqAUiwahqXhx7nGPBxRtZ4UK35CPZWMw5d5D8p6wVc9P9to2ercxoVu82aWpPFb",
  "key24": "m4STJuvWFiJs9kC9ceLMtbFWQDgbZFHLUKPZGqh2GQZwSC2jgvrem9cRptMuAHuZFVcE6SvuBtScLgV7PD86dMb",
  "key25": "XGRzZ8BCpeAc1wtSYUokBxmDRmPnTNXooMLDD1gNoEuosvQnaFmnPcW1T8JxJZbKLGxhtQoAkedgiBGSBR8C9aJ",
  "key26": "oBnGQFCdptiQyTquhdDWUpb4EQktRuT13LynbUBqwZqHMG5zXxKAZfh5ePrs9ztTD4BMotWJa7qWTcLmThquhWF",
  "key27": "3nrnX259SwKiMHLU7bTGPTEwBaySj6FCcMW9RHqP5jUfgamoaWH44YhMJf1Ehjw4jTuGsnv58kBL75xkEfWHwXN2",
  "key28": "26CDuNFpnbjtzSVrMjbYWZ3wrZFrRibQ5mxyRJCeFi7DmMGW8sVdS52cu9n4Zfkf3oYeG8wzbCezwsEjuaJT4bDM",
  "key29": "4sbXLUuaxVyUSUBdcMBD9a4ScchiWV7P5aaAShcCLdkUFTruZpXEL7brn4ESkThq6JcLfKAttBB8o79a5EF2oAD1",
  "key30": "31NiNNyZoDfAKJPfgoWTwjmxQaWBJgEAA427q2ytNW7535nHSQZkp97E2g65wpib3d31ioUcUWbyvwnbJ29T5pou",
  "key31": "2aRL4VZB8JBEc2jJvimjB1RUx9XaqDdmXcQy3DxLk4CZxA8ir3U6rmFrv9Ab5TJZbq2X8GAovPKnuf23EhEV9p19",
  "key32": "4vMStxCKt9giVSqkkfQ5oVNDaCctxePJXQA7uk4Z5ZLpiqQQy1X7oKQsXC1v9Bz3hSUGCHeZssLF94j5uuna2beb",
  "key33": "5tuKsbyPcmUoZPhL3tNNPzzpjyKeWYyeAqg4EKqqc92fJmnrAQxzvGU5uWLhtyuoyzThRZXq9wKHieAouHpKEwDP"
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
