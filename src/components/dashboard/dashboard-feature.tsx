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
    "3uppgirgYZuNP68a9H93c3t2xLnM6YEPQr5cJkVQuwSkw72gN4mj9XrpFpjMm3c7Cm2j28mJ8xu1Bs1szEXaNbzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndZYDZ8vJ1KXCTu7wPGCzt31PvsCL6jtbPQxcRPGP1BdhTf75TBWoxJi2vVf2LyQrDa7Dh9MpmfgTkHhjC6cDnQ",
  "key1": "3RNRuqn9MLAoikmZqZQo4cRWJTcZaciemVpFw4UJFApXwJ2f565wt9REVp7wnbTQ7WKmQz1bmofeqpccW4bcpG4M",
  "key2": "BTvraEisnPxVVcLfv2EG8gbtK2fbJGJeaFaF8tG1eCcQmZmZF9yvL3fq992MnbYqsAFwoyXUWgjNpcuiFqwvJPg",
  "key3": "3wL2P2n9jqwMdvCqyMVxac7uiuXKGrGxqghtCtwHRe39sf97oKrBdRe6kdzWNxrJU11gK6UMbcxCMzgWhgryaVxk",
  "key4": "3nUEnwg1NwqN79nkwPdgwRjcJ2TF9zWAMkXReamkNDuQQ8ENnibHcuB147Kvf3TkVn8bgm6F293noFrJ2W5otfFw",
  "key5": "2ecgT9Uumdz7PtzAyjAj4pZDbijc27Hi9yTawcBNEp34FGGDAbxt1VWYCXQnWBUTfozP9umE5BKy5oLm25DZv1qc",
  "key6": "2gbMey1FLBRWu6CkDfkuC2s8Cz3AG3fpm9nPoEZvbanRQjhjxbEwP6Rd4qtjr1Sk3YptcLNQPpXrN6QErT9n8BGQ",
  "key7": "9Tb9iz3o2CPa8j6jJ8MEPPdn4CUGvQMiQ16GKaXyjETticBfno3VaLrDSKf5JA92fjmh5fpXjUCzJqf64ReVRwg",
  "key8": "2ETSfmnCUmD9LSb5FLMotamQd7qXRnsZzXjQ3xhD1WPWxt93oR8skxG2Mj3WUkXZtiJnDriyAj5NRd9x9J79AsmW",
  "key9": "3Ze9sVjSw4AYWRph8aNDc9s6PHxsftjHFxKqeWycLmXVM15Sk7EuKNwnEeZu8oai1tEHe8pceuWWLdMDsfEgW62B",
  "key10": "2iB9Pev11WdFKnB5L11i76dQVNW4kthP4SothctdJgMkzJnzoefEkKwr7XRi3vCtoGG4x9CaVqxQasA5xf1Cp1dh",
  "key11": "31uxagBkmtg6Jch8X8Ghu3GNgif4qB3Um8w5pb6zAH4p1iqNDPDb7jYR5Fm7AWvq6QE5ApbN1fx5coEVqeuJ6LyX",
  "key12": "4HrEcEUkLGGWZxbRedQGc61eUJMvFhmE58Ja2HRaK4dvnvwE6Rfx1wrETsUuRLuaKmdpg1EiS2L9RCAYjzanJc7W",
  "key13": "2M4SJSGycU2hf6PvQnubf7dskCsY5GsRU8yxejhZgNGXYHsAegijHz3sBJbmdPfSTSVHFvqZ45ChWkeyhyeXS8St",
  "key14": "ZEsFtm3B2D9bqNcdGCjzpidYz37QXmYYW7vp98qsGSndDnvGpD4gtg78J6tjiGp5ZKHPZCENXMhY7RsMvzhHnW4",
  "key15": "3J1P8fkHVhkwm1Xjff316P2CqWcjygS6HypeXbJuPZUf3CU1m3e2X7oihrkBs576UWKSfF1fTkmkZHy244ejnMpv",
  "key16": "2GV18fENeQDQ2iwTiWiHHPXarY6Lux4vvVuJaFfJTY9e48rZSVD8Xe7jqe5DJuAUFopxcoDuzQ5unNnZF1GktDic",
  "key17": "zZfCedPM7qVF1PZ7MGgaKU8iBePFbUKqav8NVaPAwNXn2rGfBp2rm5UZxQ1SxkmcAG6dHCvmZN16aNSHCmdBGi5",
  "key18": "5Vfr6WbBhSDR9w8WLwhZYd7f77QYWK7j1JKjz2n5MRTEDt6nTFt7tWfQ9Hs4FVQXurtNh2EMBXLEpHYaVWquYLtC",
  "key19": "2ASBhTY1xC6bgjyAz6k2yi9xtuKvV5QX7cd17XTiqPDKybDhQDjMzjGyuVaAvJEGc7KDhTqr8AGviUyZx2xT849r",
  "key20": "2HYPJuvWUyaSJibBdHUobPn2w8KGZiVJSKuDBgX3Y6yqSYFFjwk4BuyodgiJEnQwAm2ozWUtV88fJ5YoP5ebPsrN",
  "key21": "3w72RxmWhQyrUGfLKVrL2e3JNo2aYXZmYagcHdkHa4tbJMwoat4De5w1tXjfnnXDaX4axnqvHisaKKWGWEmdb7tt",
  "key22": "4ASW8xyLyifrC67giwvQdSaEvZDRd6baiRx6GkWawmMrUrvbPa1vCdfJNhJnJYReQBVz5swd5zR2WZoSYD4u6ygN",
  "key23": "36p8afMsoTxWCpfmFhMewmPH97toCmtnYczL4uYrJ9vMuDutQApMQcDHBnB19LSPvtM8gnCPLN8abEGyaxCngzNp",
  "key24": "4LEW9P2B4tAneQZctYNwhPnjMFf7uVacujm3s55YhQqAy8phZhR8uSKHrEf2MZqVPyd1BDvQ88RrXcna8LDw4Hv2",
  "key25": "48JRzFGeDC9tkYHpEstaio2LhDQJMSqPuscqZ9RieJnfspA4m3WCeCyotmCnTzueKUji6ESfmjJ6YRje6a4Gw8zs"
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
