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
    "66JxJRy5Ld27hrT7KSJj1CFRjQ1h7xwXLex8BEAP1WUoXFATnhwy9Hbdx8btBS29i5wwiQr3hz5ggb4BdT3VSAcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTGcwJegTufhBB8FYBEokfvR5Yp4vQAAKfWr1TXUp6wxyUNMuMESGN4YV8u5NRzbkdupJLkJWrqrovcZeucCDgn",
  "key1": "4P7Vpka1xxcNLb59iZjxWdnaPmVn4CstuWX5aADT8nJTbBNLoYppPyJN2raowuViMmz4Z4gCDCqMQNAEa7wtGtZJ",
  "key2": "2mD1hCNcZ2MdGHdzxgFz7jARwKoraPqCErBFhNbX2tuUEnuY2n3YZdp4pkJ7Q8hUaWQ1fXUfJTg7aY6xAwpzCXP2",
  "key3": "527G8UiWtkQEro7M8vpnajS5Krrr9afvzahs4ETpUH4UAE9VzkxuH5ZN8Hp9F4D7FYEYtQ3WCoxU4SfD1WSJjCC7",
  "key4": "2wWPC2YQVW27bCP8JKCLVpZEcRPEndbxmAqGcJWh71Mwvq27TB55LcLXYpz32hrxf61YNs833x8wTrufxKYemdHE",
  "key5": "3gPte188CZSAtRBoLN9HpJpxePw1GKo5dZaYpmfDsEQFyYCAg5GgGk8ttqZ8pt3EJsYoMmuQCp1awPuXhULesmLP",
  "key6": "5TgqWkurHf3yA9SBNMgwrnAgE5wcPirC6eaAt5tKkdyqHyega2i8RX6L2NSMsaCPdS4TqU2ChTs6x6Z2Uba1dbn7",
  "key7": "33cgVT8ihBis54ViHwMRcpoHjsnf9uPWVNiS64qb5hQ6Tib9rQu5TymP9ddzN6uv1B79zjwz2iJN8iXM4YZiDsaM",
  "key8": "2UuPvUqiMPfBsV4dHwGS2fyus4yXCVr88MRFnbbjjVpGPdHGYNwc9YpJMZ1XqwECCkE9nWdojW36w3HhbqV9Pup4",
  "key9": "4ADDgqVANBsR6J91iQzjyet3ohLAgR76fQsELuv9iKzmHgKJqd3kVeq7WWCsHuHfdtgKrKN9F6myng2dDRVCeyVZ",
  "key10": "4QEmxaEHmMPYK3tF6CAfxJLNnncwTgqKp29v8WuzZSompxo2GKaqiviJtH8MFHQNjH6xdAo7gGERHkUBuZxEzhVe",
  "key11": "3V1te9tAWFuJnBWn1xyUSeyCTtDuJbAKt8rwkzBRo8vQU54uMFKfnNUDbk4sp7jra2LHm8yno3h4MatbbiZjQFeA",
  "key12": "2jKPwzwarCoe8APwfydesdFpsWHMxCN9fyt2NejajBjgBNt1ftHpeHeGUtNbc219DykB65Ctqf5q43JTwSR2qEKh",
  "key13": "2R2uBrAPqf7W469jTF6wxjGoBZPzLoiTGuGCMaGJqsBtrNf8ZHiDSCffdEipPobF3GrTS7wvJUmVEVwccmsA11qQ",
  "key14": "3S7eb8WAPR3NLrQi7XSyxNGQkxdx9zmD67dehMQZCZYH3qKuQ6uRCsXLLbZDQWPc4UMVdSNZn5STMLNNK5KEtsnt",
  "key15": "4LqchmthtXsjJuzcDoGq8bc1WoB24pqnzdR9mPtFjYYGkosynq5tVBT7Nrg9Tr5XjBpi66te1SNg6DRFdpNkQmfS",
  "key16": "3L8L96jD6uxaMt3zW7on65g2ANrKwJjArLLjFnDMcdmQvbnt1rH6jp3jfemd3ktFGVUpDtN2QRBka2Qs8dc8SGM3",
  "key17": "3xecpHkQKGDr169K3An7s8CJA3y5oURR6U1f1Wr6jGqpLGcM5mgyzsa9k7Uhss9MZWdWRBgYmMBFUpYX2EfXjgFr",
  "key18": "qZLE44VYKWvMGCY2kvgcWK4powKMTNuXwVpG8zS6f5fNbFz1YT4dLjDCVKdydp1JQDbgMiKC145d4KbthgAveW2",
  "key19": "2rpjXDpeFWEfUm7dhgxChD7zHST9731ZmHtBBEHiryznHxNnv24hPyhytzzzabE7pKfaUSkLe6PM1oDSHB6ro7KH",
  "key20": "5QHLodcXQ9jrKKsoydMswtcvPbE3jYbXKNR2nekzV6qbEH7YGY6Qskz5yxJZVuchDqFUkpD6PdbRirnPPtmXcBVE",
  "key21": "3mkd67fUfxFQdJnN4hxidC4YYsjsU3YS6vghtMRKZrtq1MTSybMM8Xr1BpNvEKJFMgdMWWm6eEFFAb3VmiApNS8X",
  "key22": "4uRPJgcpwCNiajKR2ACzgeFqFhHVKZ4fjbw5DBCQM3fW1fxFTS7MBndnBAFcR7TdLLRv6JhcDPAHuyzZGHKBq8US",
  "key23": "5b5mbS2FoBpQyyQ3w9ABwrQj7iNRzp41waGTpGxiRasP1m9QuRYy2rT6XFzNJVmXyhEGTKtAWbuXn6ktCnirmWkM",
  "key24": "5nFrq5t9NJ1tEgTQAmVgSmdDWbKb26yUt5mgxkYCixHEnz5o9T8DFjVdd2mLSJ9csVUK6FLY54uNh8yhJuMSE6GX",
  "key25": "5RpYMaXp4iHuA2cDJdPoM5ZEZzQKuvTNV9vVNvvgQQ5g8AcAGJzbwqCsTGecHBsWXCtGWh5wdFZW4eo3uMG8FiFH"
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
