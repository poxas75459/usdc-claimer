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
    "2bKeUrS6dLYsbmnGMxnAEtN8SSTgMCdZhvXNZo7a5rveEiQDPKwpRbsGAoL43zEM91DzGmfvZyQUpiyswquLzUVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqHFXaeodLQMuh9ZZVEZxkWjLwBLF7WS6Hq6So7mxKFUL6efsW1cEG4EwpYrUrMrfpBKgWTu2w3wV3efuoj2KzT",
  "key1": "25Xj42rZ9faSQzGpX655CWPfJGkag7UYV3ynv3sr4GGDAJk4mWJZoNGQEbjTfYgCzW5fXRjPKTtVUXDqfK1EE9Xp",
  "key2": "uUcZA76FECXogx7iLSyhdnohrQRDKy7Xcvr1hvWDKVufSBcCdegnvubduadVfRYpuGCjv4XBSKdsAwt2rcnq664",
  "key3": "64Zts7SbNomSqLdxMB6P1EJDsmVhAxMYTdR1eiXoDCMSceRWS8pM7FxgNGGEVLRzgFQXc7CLa6YnuSohr2aafKPa",
  "key4": "2j7FJoRFeXV8wgvuHt93sJTGgKCmfMXWtu5FgYXsxejfhuGbQzWoJgwAPADrPbFgqZvEz5Hg6n4fbWLP5Spn8akm",
  "key5": "2epdxti9eKqk4x6EKEN8pkMVWAnv5r2sV772MgPBVkKz31SfxTazZTxVzrWixyAzP5wNS1PJpmTgoak8bMXcnxJm",
  "key6": "2sHBQ1LWfaLyEi8TpeP6PDFBCUpPR2ihgezLnCZmriqSi9aj9WXdYL1uY92y5Ag5EVDMEyUDvnW9pnRhzXPV3v2X",
  "key7": "5qfXuH2q7Uj4wJkYh6zDNc3imS1R1kY75KeSqXoQekxfL8gKYNgWjPJppWgDKo9UfQCxs5jmPXp6AMvzc2Gokhsn",
  "key8": "5BbUSoZreRE7YoPoD3PMK4FYWvYAhypKibKnxiNC1zeA6KkPjXQYLRqAWapM7xodZHQFEFoTAPrckQM22Kg1pJK9",
  "key9": "5ayAdU3BWiZ18QrLRJ5HpFU1a3amVmt9g4NHUV3NCK1NaV5ASisc4GxC1B1xbiwJZMAX95adetgZNuMMcsAQKmjW",
  "key10": "5M7jKXi8o3tvdQLfLrdJPtbb1EAm5GTveQ5AvkHsbwb4c1JKdXs7awCmMCC3bSPd5pmWhzhCBzJvZqGxhUDWVFuf",
  "key11": "5NbxTrb2Tr46TKoABfMRKYJF8zNXANEiF8wgUVjBLyQozjydSLUkBtiY1q768KGyNkV9AeLxukMWXZqhkaz97WQk",
  "key12": "4VTrR5WsanRvPyBGvNUnfnFuSA3RwxuB4ttXaX5degkqX2rBC5pGon8RTP3dXyLmFaDh5tWxoaz3hGCZgS3r7VTj",
  "key13": "2b67JuMhJo6XtPuNP9rgomw3dzXymt4d6JgHSERA3qGaYtZhG1gFEUYZQGEaGUc43PQCTv1rEou12rHhmnLxgQLD",
  "key14": "46uLtZsHn5xkiJ3EP6AY6f2DfZAsjkxnPaGbmnPGCHJPPQusQobQ7crFGsfmtD1YPn3rGMC1WvHP1MPzhLfRhPy4",
  "key15": "5juLT3m6ndG1GazF34sEuhy7X6SKHbt5Lui6tDinY9SvrJbwCE9JkdxeuMv4Va4jukb5pRHSV1KMj8TLNz61Zbcm",
  "key16": "5gjNvudiTyajgfDvCFWumi86qfoK7swzm6xE13zaoHE9gyzthAj3wfSGC2i2xToBsdko1uF82Bc7B4R5sCFLWMib",
  "key17": "2PaYHohBbcRfJ6DrW4VjhUe5mo4UfqGJFNusvZtQS5AopvUZvLVVZXT9U5ACEkAyfaHA2n8figVkSMpuoGkPtvV1",
  "key18": "3JtyKPqyW5iKysMA3NBXxWKkU9X4wSqvChAcYdY8r3s5QsnGk5RBhYFWH65UB3puw9VWR2yiK8nYZgCH4phga2jq",
  "key19": "48tTPmg72hUF62jjVusNQUB7t1Wa8wpPgfbwsg6sfUQwfNkaUxGz8NVaS2vMhMDdu5ewcLEUYvvC8uHB8po4CmNV",
  "key20": "mUoah7ak7RCeC11Vnga9eR1VLKs62aV1MvGF8ANrqB67nvbBCSCJyQ21XvRMNAoeEBDjznsCPaM1ka4GRbEar4G",
  "key21": "4bGq8WHeBBownKsfY6MRSLy7xNWH2jVtQwpi4afmvFQWPE1BXCWsH2jAjavuo3X7vC54muZGRpCfcUUjGqYuXee7",
  "key22": "3cpxNPBV8fMG4S71s9jHfWvQ338pZqeMXFLz1p3jBfCP8nksx85RuPdugA1Ni63Jzwcg2uZ3CzCRmsamvQApw34t",
  "key23": "MV4Dfvr1fW3c2BGbbbSDjAFk1vg7eWN63dhBjz33CBCqJALwUXXeZfy14T3yMKmFWfbG9fqieCgV8YSoB2oTowg",
  "key24": "2jRTJz8U9GSzypZ2eD21t9P56TdhifQd1C6aqGbfUFfiXj37euXA6CeBRcYiDambiUfFLcmjzfCSu849zrnxw7wg",
  "key25": "5tgb9HKbaQmXzRTcB4XX32q6Uwv885XZX96dNvn965CqwgQofzv23AcwzkaStLrz3we3tQpigrKSmyrhAniLUC6V",
  "key26": "2Q6gvuZpAs7zJYscBuqDhBmYgmkpiwPBLcMUdQsbxAkAGQEqK3LRr6tFooiHZNGXAWJqRbTZyTTQe7nJ5xtvbcj3",
  "key27": "3hPwZoHnD3vLhDZiBcywXVzvahzdfocSvKU4Q5tkzoeTjV2M3a8eKJH9vvoKkeHwS3DRTH975twpBaerXrDUUgQK",
  "key28": "39Ddf7GjY9owcA4tDrCWutcB6z5WEFHX6v8UxvMPZkhuGto9kdf1YT39xUV74vFPzPpa8xpwYsvgw4Cg9VRNVWyg",
  "key29": "3dNR2rrx5oUS5ywYks97DmQFrbBJB9iW67tiXbr4gHb6gk6wfQ1cNEMfxd71PQW36zeCspPn5HSxXMcqNcMfDpNo"
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
