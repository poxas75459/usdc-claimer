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
    "5vYpNLRU5APPSyCymXGTc54d5qwtwnywDBYg3KqNGCZkcytCET7dgqKVcBoxQZqHr3ExvCmYPMz6JrE2Ai92PDrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7czvUhFN2GPWmW5ygcEsnhrD9mr8JzgeDC9CgTgz6N6RbuBp1Gu7PGt7mCaFijdyf8LYjBWw4ZEN9W9PVRoNPo",
  "key1": "5FTGWMGVB9z4of6qFRVBLoFGFj6z3vNoLMNjuJorNyfhbajwFmoVFrN4JTzhLMtSGhwcD2SbWLodn8DDmfvYacV3",
  "key2": "3cP7AmsCXAudYQtk7Me9Ac8tt1mwNptx2sCXMwm8fK3sqeiS8qvubQYhuVU4cUELoZmequTujdqgbWYSB1rmtLmJ",
  "key3": "nJEtCiWtvfhAQhoWf8wz2L8av5nV3EqjqqGAfAU6HLtvZWwwAD9oJeHGzJazWEDJc1Ypfi8F6H1MiqtDKDKesPH",
  "key4": "Nb1Q5TAbzchHkQbtYGZxKq8tbwfaqwAMHRUwJqyBtcFGubWXYqUTvaE7oeN5iPupkf7bDuuTfJaZ2XwhXbPA1r7",
  "key5": "4UgFCPKjgWuh7rZJ6tMCfDTNiaCjuaMJBsJwCcLbwoehmuwsjQB1w8fY3GxZLr3sBZSwJJ4yP7u6VuaVECZSbWbb",
  "key6": "5wjVqsvNawRdPsYQGsxvQWAh2zwJnz2AsjEyuxtyeiQXynA2VhC8grmS9wdSXmcHyxKGpZDnb3cBnPdwWVBkFZ3t",
  "key7": "45WUfc9kMMSYZiN15p1zUoVzXjyJhLDa3n7qguRbKsMZX6E8d3NBp8khwRDoy6hCRapP6ArQDM14AJwWdRz5uXW",
  "key8": "2NzcEhnaUT7xPSC2xzhiHEZkAnddzRtQ1sHAx1hHypgdNGhgPvnYcHbEU8S6o2kLLtiFM4S28PKDv5eN4AwKA2N7",
  "key9": "3d71abhVW3u1HtzTJLsodSSPWVnohcAikkYkLwjkhBN6xNJ8xtepfEEAEajhTMk2gGiwoYLzDJ9xhykLgbqh5DLT",
  "key10": "df8kYVD9Rqyiyf9W6DRNbQJJaQCrct6YgMxHWjKBT2vTRRcsB7QjoD5Az5RMxkvK8TiPWmKojdSphECdp98NTGs",
  "key11": "itqtfGijZPJthgZcxQesDjurJh1WHPiVJA6kYmr8zsKpqyviQfTmVr1mfcRuLB21iybWkU1R22VMhdrMTgXWh6k",
  "key12": "4LCHYKvwQYXSKWic3MKrc9JqZMxotevmLYZChVxj52ncdgZZ44KZxPtku3YjPJWi4w3zzsXxLohWchwuu4SQSMw4",
  "key13": "26QQvTuoLswApEDrxFd9KfyKpjFKqRbwi6cywzaYFiZgbLRPEDyjWUyWC1v2P6xzvFHwZaWAiZWdAKMnsL3fyn7w",
  "key14": "5b84H3sBPNT39gw8ZKv5q2VMU9NWUhzWodjZU4zgvzAupyL3Gx57fq63GxTABfKDFh9Rsf6vm8Bwuk5zAhDQquKL",
  "key15": "3dpYuNgJ6LyQS9Z1z5Nd3CcX6Y59cYoUwh95sN3kNMUSzUTVbLaHA5VbXGLyTcW5Ht49fRRBFL8WYnnwfG1KnJPZ",
  "key16": "5atwtmTrCY8ZzPs4Ee24YYJ5Z3LgLdX7s3nd2ZZsvhQEVSJLMSirQQTMFTnD6amNvb95wJgjdX9pyCS5DmBR3fVC",
  "key17": "5zSxTeJQmkxXN65iCMq1AnSqU71u4moLrPAE7qHjbNLCYYiEfGBHbrzq8DHMjq47xDSXhKdyqTTQLbC7hHq2D4H3",
  "key18": "7LxKNvJ1QsCkmR9HwRFykVTuzm1sX1bggQo5G12rK1EHBxa5vw2uyL4Rg18ZYSXozDGkDG2QhQD3KoxrEYmJ7np",
  "key19": "4qvXHZeSJefLoiFJ3nV16VAfwfGhLGW58SsU3tK5LfiwTKdKar1rHYGUT35ZmRMdk56xEsRbAbwaC87LyMn5eJTm",
  "key20": "5ZieDumEvgoGLARrahFiUpvL9DRX7c6XJxToqBvzKa4LEd6XD7NyCgtyVRrhjmpPwg1ojRKbjXNZauD25WJMaDFq",
  "key21": "jTzcTR656Yo5nKH6Hrqk5hVbWCQ6bKeHpQ3dxPNAgYHTLGdF8njeivLWKHJcLzMoubX5erZVSvAjRzV3yei3ogj",
  "key22": "bQeDc1aSqfFvT5GeJuzQpAgum6xmPATFaFcsk1dQEVWf7Q84cegHEs2mtYp7GPkisC79GFYVXaC2ENmwnuer5b6",
  "key23": "3sABT6y1f3ngdtKFQF7CMQR7qbcL7hw8Pk8kMubH9g2SxgS598S3ysVtJNkeBqZX6yUnpLSq8J7oxDWNqZf57nfm",
  "key24": "28H1jTQesMLEHppxnAcuUqrWKbmtd54TUDx5hc2dDsfU8qiVgm8gfMZ78bqHUbVrrxi1TToTCimrmfNFVT1piqBA"
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
