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
    "2SfxdP6ZLBBVDuHwjfdknMQrnvG98hBq1L8cSJkiNmGcqdL72RScQBQLVVWQRKihxhQMX38cJ2mXMgzFMrRq7vfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtkA6Bg64R7BtnMfB48Q9HFerVv6r5LoJGqsaoaqTKLuALT2VnvPUMxTRr6sXB9JfVrvNgDqFSDoMPSexJ58jEY",
  "key1": "4UrbtvBLEbJX7fipzyyza3fMkiyhGZpavLjNGjRxGNLkqhAkrwGf4ymZrrwEkhCnfGR1Lg7Z8QE6cWLSCnih2Cj7",
  "key2": "3w7VuAPX6oNHaPtx7hDSF4AeZX5g6QKvjMsidgWZL5jyg4UVjoSiLHsmg9NYVsdutASHa3vvM7PZ4yMFMtdtSxVP",
  "key3": "2YwvDqYwFNTUUTQYcfw4mfPM7eyNiWT8x8KBUZ9iaKDeaYo4t6dEuNDqLDaj57fQ6Sh2jYCv3jkjyLn6E6nokDjG",
  "key4": "4uZ2s8MVwBme2A2kdAoXoWw7cuD6LGpptPAEFuN79permimvc6XamyUWSwHu1h4nWPjD2EwshSitxe4aKhjsERKy",
  "key5": "uMre46jtkCG1wu21zfgCda9tNuvYYVk8tpvn89QLkG95guZM1es8La7PRiwJH9DMsr89DBBnP4Pt8DnVNhx95Rn",
  "key6": "2AyVq1ZgsuDerhMgE2G5xtxdbjjPHDzqsZYnTMsCRF7jB7RhuPk8mwqp4w1HZ82ed2e8QmHNaDuHC3x5mrxKudvN",
  "key7": "4hEX2gZCCFYQtsihUpsx3zb4zWz9oNsnmBEySuzg2ExxQ2bSzu79NLfpgut97vtCJgoQ3TNX4xBzYUJ9L9efdqU",
  "key8": "64H9Hji2vmbTD3bqP19B4CXVAAtFry17Ahjqww1dj8Bb7nUkTqQAY5pmQr4Ccvod7dWEzV7nPrjdCXFjSowThy11",
  "key9": "6Z7jmx7UvpZPEEgdCTB8iCbBfSCwBnXoW4y4hngkbwp6M5JoKnPP7c6GWwHqV2vS5DhBSLSyfPx3qCtniNUCn5N",
  "key10": "3VbcZNKiDTStgbmtvfSvEX75PZbgnhsreoJqAeZUBc4t2xhUrkZQuvacAAAVFdGnivn33X1efByCrrpw6gE8gt5a",
  "key11": "3F4hbLyUtwpvyWZrc8wpLawmQMcqe4puUtykKPZAtXRnG5qhuy1t6Dk5sXkqFcgdQHRjz4w7An6BhvJ5Nb9C4LrA",
  "key12": "51a1HBqkGyBSZpwH9q2R7bq6qhLMvF3ntusng6VUCK4LpqDxq2Vv8o35ScKPircJ8CfMBomfCnUrTr8cASXYKHD2",
  "key13": "3wjXvbKxAkqsqLAztQ4AqTrkB8u2gYXjBsmgnV6qb3dRyGJoNYzBZqjzEMEzb61prytU6BRy2R74fEVDYBp5x1L6",
  "key14": "4hxC77yeXi6a3CojfNBb9y3UjzrdjFcjmoqiE1w6bBT8ciRCsW7XZZpCxsUXjQrr265xDzQ2NyttaWvacyUeZCT9",
  "key15": "42e6siiNv17PvrCx6socYoPnLD6RxSVPg5fWSh9d6AuST7C4DTkRLzuKeTiXHVYLdMHzTaYzmxiuy2yni3zK9AoL",
  "key16": "DjiUeiEM5idTwg66qRtBax5g98i7c7FjKou8NRmx3iHEo8AYFM8sUbvBZjhyjaHHQychFEYj8ni6774E8Rbiudq",
  "key17": "58NwqcV1kbxKoBdQaJ3jvPoZcRbZiGtK6wzN7sizUe1h7mJe1qRp6aduAbLcZHDuA9TExm6jVjcUbD18nimWhe3z",
  "key18": "33MBPPr2MQwfyd4PjT3dsXpTWQdbNDso7gWtyZAgD1WSwCoQ1wb3z1d5UQnc3TyqyEg6Qv5pXXQpnspVuVidSnVj",
  "key19": "2MEHDKPe5w7oNAg3MkmfezMRuLtDEY1f5xPq2UC9Wb1JMr8PFGHhY9JPYVmTaWNE3m8P396C3yc9RpFv6aoKz7LX",
  "key20": "5qzGnFKn6Ndwqe2fxmdhKaqfVKRFoHRFQRM41kJmFR8V3Npnnhf8a5RzL4aHN92zqTYZpHNQTF2QCfrBon4JCKzi",
  "key21": "5HfjCBXXqDs7VN4UQeVtoF7mqm2jPwinnonN61QUdje55jSgDHdQBwTGH5GJ3QfduHSriT7Ug4a89sqnFneFP3Vh",
  "key22": "tE9LWV24onRo9o8pGCdKzuW2cghEwgcpmvANe5risfvtANZduToZzdkAFB7Q1KMi7q1aja5haTvXPLhybNRmbBa",
  "key23": "4BfrKKcYZeqSxm1upau76Hwkmy9CqbmQuMuQoccnjWPbwzK24Xhn491MiRub6Ed1ca46mB9BYZkjwq3KjiCXYwhC",
  "key24": "srRt2jXerTRaoVXeeGDwAjzzxYQPYLoyPrY2x5UWwQuYE4VWvPhKoUztSTw9JyuLNyrSCit4TbAaHLEswch8VEu",
  "key25": "2XWM7KdioAEbNWawpUYuXwN688mTonMQiqHVcfzFEKfyQcVDtrxDEo5tBENy5dLzZZUePyTRze5Np1q1BCWY3sGM",
  "key26": "4YF7SFr3WYQoTA2kSHPYsmTSUm2kW3GpjeCWFu1nsduegzxFYswk65qooGV5NJyNwesv7Zj6tr9RnzdfijF3Po7Y",
  "key27": "jMhArfdiP1LkCWSgoXBXnCQQcFwgzd2hJtNZmVKxQCgDryeYz2NZan49hQ8LpmEr6McYjVLDsrrQo17Ltbqbtj2",
  "key28": "4HGPXgXQTunmsGp2ybXZSCYJVMkGo5Jj9LkGu3vZkPFjA1LvNUrcwUMsbRSTYSrWQguQTa7t6JJk3hhP45W16zps"
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
