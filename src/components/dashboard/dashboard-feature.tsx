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
    "5gxkSoS6zzbC2xGk1GnWdTuepgAP1fui2HVdMsz7WQeFeBTYahBryABLGdM7mKwoLQNRktNVG9k6iEpjDUv3DhPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4oLzMV4yW6ADM2KjmQbZcE6rD9AXzxvpWi1rafKfqEEqFBho4DEeYYfjTY9WQf3LBrxpvPzT9n9AiWvioU98u7",
  "key1": "51R44d1gAM6Hda78mQace55VKBogeF8fZwk1UV3f7t6sKtrGePMvodbRxyvbpSFEa6JRR2cmR2FoUkFejsMJDxFS",
  "key2": "4mWXkZbwici4gPaD1L5FpmDfrm2KAoJxUqcX277UuVu3zPUn4LvZdbjDRQUq15dWR4taiQdSivRNEZeQTASGz8DD",
  "key3": "4nvyeyTMTu7URzFP9jTBS8oRcmQG7z4bdQciKR9eCoHU6bF3jBF9eVqUyJpdsTTV2PjP4eJQMcrY5fkyvs7J3GPV",
  "key4": "5VNgyyHZc9cTGMfTZSnrxPyhmFscK29uVsbA28sGqGtaNzzZynG1AMoHst58hLG5WQmH3J1snNEyPMd2KV2C4J4C",
  "key5": "4Am4fnx7JAtGcA994XqCxttft3MCwWHFvDx9FgXDRSsGdqMyYdN4qFpPF1kDNg6fL9xtcQXfhr2K1wEnJK5XZdmq",
  "key6": "5Mbt8smfGMcx9xhGMSdxVvQfEa4LWMR2cwoqauRkGZtsMDW6ERU1Gq5m2SqUZoSU4VFJhcopVSTZGZRKDoyUCySK",
  "key7": "2xvCxqGL9Gebf5C3wanveVtsbLdhwEow642Nu8RjcsAr4C9KREH2d3Moqv6yGWGc8KsgBYvJrwGN3hArB36EmXnW",
  "key8": "3pyfPoesqX1Z6J1ek6RtYmYRH7NbduvHfF2mshPXjUw19sKUWFwDzCtcgUZUFHkmPTePhb2dbCJ19zkSSGvAGnzY",
  "key9": "qP2QTuSbJDmtvQzp1gFSySBYTWU2Yip6NjBAs8fzgs9Ebqf5gPzHqm5NaPgtjgN7dq7KVfUkSqmrWK5mmnAijrM",
  "key10": "jAbnjTKS8HPioWeBcftGezRN2HQfyUM95W1R3uz5XhRii9sYPhALZRzYSDYtFD46vhhTrVLrDhGGVTugQkPSHVV",
  "key11": "41omXqEEmaaMfzDvXptL894Fivj5AUWFa3S3YLtqV88c2qcHUe97h7qvWYsCzBUJWKANMqT4FfuUjtafuPmox2Cd",
  "key12": "2YDEwnAnn2uwXdbuQqNjwvNs3R9vGVwnPWhZiuFr3Cx79CpzQz9GLs7EsJEebXhp517bcDXQZ6kS1122pXiABEbh",
  "key13": "5rdGqmLiCjGEiL6xhSr6v8Qp6oiFC6h9khxTmizJzknJXotZkPZuSBLCwhCYjc2rzWsjvhj4doijWp7Dqm8BJ1CZ",
  "key14": "2wjTkBzW4gY3iSL9zR1f2F4mAsJR7GAzPoo5ksKBsRcTPttpLAnGXLG3Fv5pYZVXqdW5vFPvUNH6SrSzgDrdoQfk",
  "key15": "xTYKZZyAUF2Y14RA3saPDmo9ZPbHFubCB5WwPmcPqy9NZTeEu4nnt7T7pSPxqV2jTRsDZWuhU2z2L4UcTMsohYz",
  "key16": "5XioiBXUMD7SgRTQ8KdcmZGAuCt6q22vvQvFSyKFa1weLM9eGjrQEbg1LL1Q8WGXTcBH87N3QwfH8UxdZX7ht9ew",
  "key17": "4bSc9ykPPbqrWTdPv5gt9gympSeV2WdVTsCXu3963QSvL8ckG15YyzC9AHea3pBARQmkTWsK3ftAGwmUUuJWj35n",
  "key18": "2uTqXpUbBUdgGNnuwsGPe3BLn5ZadR3Ecm9kVivK8563h7Vrdtuj93EUzw7aybXVC2zie2sUrLLAxDSYrzxuAfrC",
  "key19": "5QVh9sGBvgCCJzUN1rqygcBsyhecXgrEyVGPAyy1yvdHgqm8s3UBKkRFtFFG2sVU31YeTS4k7naDxQfisshLDgJ1",
  "key20": "PbicV7TwoZAq5sQ5tHcjetqaxsetSsnRsHABdadu3S6woVJE7ebULYCWDwrE4CfXVSbRB7iCbE71t8jwxGnk3yo",
  "key21": "3QnLTfs95eHKUtdb9SYGi2UiH3Fvi5X8TqNfv9uJTSKrQcvW8gHGmbWGoqYv4rr2tEZLHXjNfa3CapH1tbgFCb7L",
  "key22": "3JWKsE8s334dfiCR68ibbwyUVRNTxkxHRY6DfG3UnMtaNWkpV8G3rFGxhr5fMyeut6DK2tWQEcaCZos4qyAZsVN9",
  "key23": "5de6R4uQguHkWYy4kDKXb3Hm2wGCP8hWZXiw5u3kaWHUGsLYPUMbQj5Nsf6j4UCJmGpPpKfBoJqNvE2GWq1Hw4vs",
  "key24": "cD4MjUN6bwGEQ6HZaFMW1oPwzzfukxNPNBA1jRkkGyFtrLFEVeZfnZ2mYjRy9cuPTAFgCbbQzCQxqomyDurwgnY"
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
