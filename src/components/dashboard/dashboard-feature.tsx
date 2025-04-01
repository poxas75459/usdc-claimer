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
    "62S1tpRs67sr4ggbLQjzo8xGyz8cgRwnBnrh6ueUsz3W3fuYezEP4RcN9GKmUkb9U8FgWE3ZhGUcJFpauhuEiv6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWcerrA3KqmhA2wfXHF4FrgngoBSDFj1cvhsurY7M9LAAzV5CsiEr9fMAm6wVG2V1vxWek1qp9aakLYY7FTYrz9",
  "key1": "52dLQNcq1DWP3TK19GMHm3ns8H7JJreFvSJBDsVTtUXpAgkW6A3TCPfVV6rekSuoEdgNVv7nj8vPETUqLKyHpiNG",
  "key2": "5R5btSXweiTVEszXF6FGsQc1mBACYGxPjJtprz383bmRZT3t99f2WQo26p5GmujcnTrYhz4DEXe4i3PejPLj4CDz",
  "key3": "2g2z5XZVf2VonfC8rrR2AKnTbYaT2wZA8imhv3sYNFEWTPvS4WZ18QkZHZ47hrdsn46rKXgYfWfAVauLoJbCRGJN",
  "key4": "AagYX5vbYqxiJ5ky7EPWU4fcGb9wpT7FqVEyMMx7Ju1FnvsQx64JxtrwhjX1tFg7mmGHVf668zcmgdkSGjGvr7E",
  "key5": "qra9NRnnvepmh9EM6Cy8HRXY7fUy4qmiMPygwuQCWpXQRMZ9mXLM2kg9JWQxhUDtHAQRWbMyHyQnjYUDp2sfNcw",
  "key6": "Wj7669w15hHjMv8SMweVerDp4QUkcbF1KwpeyJ1SxeR81xLuq2yRnU7fyNrRtw9hoowU937R5xsC4qqnVN2mcxo",
  "key7": "2eDaqh2r65wi7UMbcgrQvHHKRmkqma9zEFFiLHCyEoSamzNp14kEAykeu7A7LG9FzNQfgL9wKQMbDQZc4thr4y3G",
  "key8": "5Ljh1ng7a9wNv8LCdtRmXAJW816JNXrtdchnYjBrZ34ipawNXkWrcCBqDDjEYULLKnSn7UzAJriteRdy47tScDnZ",
  "key9": "9iLiqg1nGPEwz2H1HWdQn6eavYv6KM6sSgRUMkvA6TGVw4SZGniXDPzxvywaoxasaLTnVJDrHjzvqihTqsQ8M2x",
  "key10": "4vm49t8jF7V1gC6Zvmi7zB1G9zNCTFTtZwURTEjydV7413TC2iPPZoRRHvdk6ksccSdbsTgjPQCaAkPVSpHuZEgu",
  "key11": "3MY3B2paChzczTjvbUto3iMw6Kp7zMVkhgsNNffCidBzwzJpbSyBv4bRCCdtCccPykesmLpDweTxwd9z1XBdbbEw",
  "key12": "28HcGaSFmCpvLJGasbrLR3E2ueeyTLWQwDifBRJNUBhoY1BJjXPbzNd3ogvqg7mVPAXQFpr1smuNs4uuMpBMmidD",
  "key13": "23HXWSBMXLkFqxis39TyakW221ZgMZ4JsKJmag4ZXrcniAB4BLuyvcv5BTpaeVnwfp2QMLcQaaDB6psaWCVRC3Bd",
  "key14": "3BdNQX7jDeQSyZRJtGsYCPKPcJyDTRdyJwXBUTa2fbsaKh1j3k8Bh7HkGRfv5HFhkCBuh5w4cM4EuWJLMevp1Qm5",
  "key15": "xbvPAHQTAhFRHukkgURDaozsHvcCki6Zj72jPWjy8ANzNUqvpCP7L3DmtSGsMgb68rNufWRkmxsGKcf5u8KG9VV",
  "key16": "2WjuT3CShfSVSJS9tnBs6exP7kiJoteCmwdnycyGTZ7fATP7etY5etZGeoz88QbZqh5jTrUjbCKTLkZvFgTbYuea",
  "key17": "5MfXu3y1G1CYyexx197XqXQFg5V73c6iUAAgCJpRFo1eFjwDSP1AXtWSjwXQJBjSmsFT1uPmxsEMwmHu787gdUm8",
  "key18": "4NXVwAzUrww4e6qE8GXMLymUmf3sfBAbQW5CeUT235MVs1AMX2xJJ7xm9vQ4U9Tf2FPt6X432tLSMkBHJLtqUZfB",
  "key19": "5sibWFdLNCgQZ7UvdndTQPDc661CNWaPvFzPVuvHxsZqxcwNhvwwasc4ukAK5tvmG3V27gCBiKebPB2ovhBt7TcH",
  "key20": "2yKA62xcSiwo6tncPkbLeWQtJcwEZ3vxKrdLfXg3kTuN8t8aP1hCMBwUxdKA7r5qJbqzHaxuCwAU9UT4UZWsRwHc",
  "key21": "5baemPtEptytcMoRtjYf3zN2TY6uJadAxkfmXbc16GMMXgTdN8JLakjP3V9AqrPBneNM2D5cm7FyrCkuCXsDmFCE",
  "key22": "2t2JDXtP6JuzSisYhyE4DkvkDEP4AACj5UjfKWTXJck9JDa3NzFzYCnLNX6KG9GtQGT1aTqW7eWdQQsLx8kD4QRq",
  "key23": "318Qr24AioFc7MNJeKJBh8CKiq1WC2pQhttUE1aUCQjCjRMGmjMSqD9xDJqboVUx219ZfEniVtbCiWJsevpmQQ9w",
  "key24": "3734uzPu4CrGFcdqbEcPUHgvv59JTVAN6wjz9Mr6faQnzJbzEy1mXmt7sp6PPyD1TBXWkeETNL1TZod3ovnKW2My",
  "key25": "5brJBzSuV57vdhHbTHqvwbVF3kRAQM6ru4j5zYh8A2DU8B2zpuDRrmipdZEWLTWxjZMbDpj826vfFqKyGsKuHpQ4",
  "key26": "4rPyEdmsVNNgcRAr4GaKDC7hqTQKGCPh7A5nJQUb3zuiHeDgsmcYaYHobqnEUKUcCLsFLeeipU1FopP5uzGW8AE2",
  "key27": "4qHiiGk7x6M1pdqv9FUFoEMRSyRUCFJdDK4gCBGB6S8iW4hrh69qRpgfaE7qr9xMNjkSdF1q9iLruf5xbUFVHSQ8",
  "key28": "4EHh9WRKtzmm1bU39kPxCEKpNAFsRqWjrVxNrghVeVeDSSM1fUYf4Wy9a5nHvyw1YJXobWEDhcjL4hiijgndD1oQ"
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
