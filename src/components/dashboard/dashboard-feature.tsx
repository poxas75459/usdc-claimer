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
    "4DfXKU2LGuYpV74zYBSFw7XAd92X3EnmmYoy1zJHmtNjTyeeA4h5k1LyiELek2uEhGWVJeyGLKgHaFNJGkFAKxBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fuQVPo68VdRq9xGzxV2owwNoKj5NU7QnMNxbsTF4jbGYJ8cy4wCMdAvb5oqpiUXErLsnvQuRxDuEUwo3qy4fUU",
  "key1": "3zZefshXygF9bUP8cmvB8Egg21dEDbqnN8YULSHzB88ddATf1RtTJ5RXyCWyQz3uwoT5p4TedN2kZZMiE5fRPAXF",
  "key2": "3Zst7fFBjaib9L4kYFu9ZPj8pzazczvph5bEB4GQEeM2VZJd1Fpu9TY4xuXqF7zm9bzDgVjH2YndRPBSYrKRhT1k",
  "key3": "5m8UzS7LCC8UMwsfGCt1Lez6avnxkLVhCwwLRXdECdEERoLmQvw8JrZAfKYSmYGcAUUxDFYXCu6R4mAfvh58pg3d",
  "key4": "54Gnf8zGMAA6RyxdoKHNwgwmQMBXazDaB9XnBLhHLoJddVSwqMRuJXD5cXseDM5TuuzEgWfnmg5ASSVgknWuFfMN",
  "key5": "5CvRhYBLDp3cpNSTnYxMKgomkJgEHrb8QjXFEswgdMKbM2aGX6pxBCEtSZ14M7FCKiDzqGjR1BqKrMCMNYvCcZXF",
  "key6": "5nTVwZ4u87Q1kMEKnPBMdeih95QmHckzjreNsfdw1DyAhy6Bo4c1zNqPZHN3XZYJAFmRRzyjDfa42gwFQ6TZPV1b",
  "key7": "xK2AVXVSRYxhvae5uk2Zdzf4xdM7Tb7rXtbc9GZr9C2vgZvCPrCeAkEmVmQPevSfbsRYwF5NdMavBrr2eT3iEpm",
  "key8": "4ftsGeyunMrbNkpmDFvcWQY3mqc8SSmDwxFPmMrwyvn8qU4NBmZLivRkSBua8psEKTmLn5kk7pg5FA48pKSfBxA8",
  "key9": "k312J3uLXw2jVLEJeN2BT8EAUf3Raeg7vPAPB5C7qNG3SvF5PZWVvVcWB97PYmKSkhjz8HXEECiUY5XZmC6JefQ",
  "key10": "3guvNSEnouiamSZJQHSDhZuLLujKDXnf7touxsswo3coMdQC8hME6XnT9QTPA9yvdsXrmm33FY9DMqczWvWuZCFq",
  "key11": "3v7FYHcX7xon7kUeLQD3thq9eVWFB2ypQHzT8rPVBChAnHaguC4WLkeGvV52ZVarLAJtodmrjr2b53xvZugRCunV",
  "key12": "5pSiyTQJmtSuxpJpj8oL4WqshVFDmq3UyNXndyeZ5gEUhVBtNk4535dqJUH8MsjC7fHpy3kSM5Yj33BPUm9QJZxY",
  "key13": "47cdy8VgswNzfKE9xdCHkXszmFWA8an15oeZC9KzdncDJCHtNsiM4yjhkJ8jdQP2oWNMzBo4R7rTBQk829YQ23Gf",
  "key14": "nuGCqgPUxutPWtaTTc9tMVGiktYeXa7DpvDn6h1ymVcXJ9t5LjmD5fVYy5HPfh7dPiriHEU1W69xUWFc9pVmE1Q",
  "key15": "2io5Qc4vHYwLCsNoidpmdYP7UsMNdecShug5XZAZtqzmFPLz1fgzrUneKC1V3dxvhw8nh2WiT3yN9DrSYqNJ4pfF",
  "key16": "5dUNq1QhsLW8TSwfbVAUT9FhGwg1mHDHbPr7p2Cm7K4uameoUvp2hezFFQmahEtVuNB4kkvRk5pxKDak8MkbVNrN",
  "key17": "2ZF8dLvecgb4RiegAg3rak3EiRGTmEJEA3Uqrn5kea419BTkPoeNTZmJt8sSu997wz1tZ1Ck1hHc9ZQU52VAyJ4q",
  "key18": "nrz5okk8gtxxZK7vDgWMhRCD7SqnkDqQUSSnxdJvoY4JmbX5Rx8WsXYjVz2N48XrNTHkTYuQWZzhAnZ9HDLwEiX",
  "key19": "5DiXyvrsVzVzD7cDgqDL1eHEgk6HYVwKxPSJU9Hf4avqVxQgoHe4frFpsHe4yXESBABzTg3NDh2oQK5uFNXBg5G6",
  "key20": "3a7s5WByAoHu7K7JquoM5tJoxDYbPjmaHXquCW6tPaxT7uKRt1S89Gcd9nVYu1DS3iFjYZjPLSnBTyaPtER86ep5",
  "key21": "3t5A3ffNa5A6KGGtE6x4HpYZDF1K1AP7Dk8LGz4BC8vzyNCBBq2hHeDPiGarhWYWGiqoQX52SdTBSn6xMTH9voym",
  "key22": "2d5RnBSjbF46gjD9YkTDgxqq4wFhTP3c11m3Lt4civ9QZArJbCPScFrVaDHmho2mtrEDqFurJNs5DC7ebVGSmuUS",
  "key23": "4Cn2E7N2nbjFYEoL4sXRjYSDDgUKsjrHumHTgKQAbq7u3P1yaCLNM14fwm5xSuEdw8gn1n11e1zxBKakpGf5G9ri",
  "key24": "4fciYjn6oW8b1TJ86dxEhZ3GRFy2t5onkxGyMigLFBi2j4gHhSJ5AG6714BgdDJM3TmChZxDU4HgWvurzWa2RGpe",
  "key25": "2iGjteFSfyY2E3zwaGbFBb5koN7cgzJKDDptfjJHkBsJEZgoca1JMyjB2PjrPX1hEWDxANyKfLa2VKqhEfWzPSHx"
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
