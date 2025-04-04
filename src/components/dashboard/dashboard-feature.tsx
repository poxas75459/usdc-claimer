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
    "2Cntkf8z8XCdHEbMYxBoHYvHhPMiVKbEtFFz6Ar8A2iMxR64S1rtk45EAAciXiNp9ppFMUhD1KxksNnyoUGFeDKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5keYUb7WwNtfGEJDFQJEaSwsL4MjHXbBQiE7v3woUU1KP1jh5tZeVWUsZVb3FLDJeCSB6w1oGHePiehF8pGf4Zod",
  "key1": "3cGBfwMHEhh8WpFfxgaKB61ojFC3ds2KbwDgdN7ipCnz7G2ZRZa8kYtbZWZfPs2LSytLL3dR4AnYzZtY6fNdJjVi",
  "key2": "67qCQDVVj5ynAa4CKXnjNYkxnT64C4qzpEZy6cDmw22N1rGCWgMVjPhzLJRFoam6YyuFMM7mJrkxUVZUHBJFo6cd",
  "key3": "VrUNTUBg3FJSQGGuZp3UvGw7ppU4D39fHgbKnauAHCrvif3Cq7YGohiz29bdCaTSjHncQL5iVTYmUbu8z5BREwL",
  "key4": "2iNHVdVu14KVn7ho2Xr4kEo7hkXc5Wq8z8g6dSnW3PU9q5pupiqnqt1hG6aHrEvQi3mnWCWDrrUx9JXyZqhqRBUB",
  "key5": "mYB3nztYXCfwnV1fMTvoH9DfPcKAfsR19fW2JitaaNPk2vJh6oFKuhhxQw7wPcKTFGzKX2UBQQ34vRu2S5Nvs3p",
  "key6": "8PCBbEsEDywxKWCAWyKiWyH59A77MSxwRdr8LQsGcBYAfuq3g2C3NkCi4M6VtANC5dvD8fvRGBdmw58Xkrdhg3C",
  "key7": "4bJHHVnkjwbUmXVMGQECwagZjKeQv1EJGShTS9Cw5be4rSHuM2niQAAHDvUTSQUbznz1VKEa65Du2vwanG6wVTt3",
  "key8": "2nJgBKrobJo7xSUphQpyaTqXH7o5JUm8HgXdNNhEWao3juiGrazS6MojSzuBWRn8bS9cV5m2cCqKHAk8cJEnoC6i",
  "key9": "4egueWbcKQGHqsBgssns2kc3rfsHuMohdQ61q68onN9cUrtMha3fEHJR7AEN3sbupvyJQJ8atsUpgj8mWf3dvGB3",
  "key10": "LiqM5EYy4Y3m5YcMSodERtZSeUaRXUxUawekXWjmCxvDdiSvCNKnkxpa1SZ4hzgNMedgW3b6KD9VDL6hnQyEC4G",
  "key11": "3snio6i2FdLjQ5jp4E6xBxqtKKUfkbE4tMiwN6vJAS7dDWFK6dpFFT2wUQz8q7vzjE5J1kbQJdGK34fMaFbjxd8m",
  "key12": "616KAhGzAro5A7RNtrT9Vpf5earusHT2kfj7ggWQyKQXY6aMcVBjzGxbMMxhZp9ZB7fn6eRtzXnMcH8jbJVDBTjw",
  "key13": "3pwnpqNWURq7rcU8195nBPBAh2cC4AkDxZMPt72jq2VEPi7Dei3tpngLZ3fdvJ7MY2A9bu3yjMLicFQYG7XAHjDy",
  "key14": "4BjBc9rthE1zVrkTbJZHb1eEhimumib7GzquxdGGf3AS1AKrJdoUeGVHMRDsAsNp6srCJmhKp8kNwP5QAUz54MVR",
  "key15": "3AqqNcA62bosft7qQN76UjEnaTEqyJpnqyFnqAKazSnipV6YmtVXKJuDk7nY58ppUQxYckP4XiaMvd7q2bCDzxKr",
  "key16": "3MyVT763grbc5JkskkK2XAndXpRkXf7d5PVPYrGU2ZLeotx377NnU8i8VZXWTaNKxfYqssztjqk5pgo13FizkQRC",
  "key17": "3DithD6weyWWMUq1D7gJvGKCpBZ9s6TNG667LdNdgPQ1SKJHKAsG9ZZdEw5dmvVMKYArKfkoXue2TCvVmXhyX65T",
  "key18": "zGGMhUkV4Ev86TAFHGo6jtvzNsMGVSvnBmLEFM6BCTwtVV7wrNH1wdicqLy18gNqR6oFWjDUdYMsc3XtwPY6HRh",
  "key19": "UMDmZS5UUWGLEEGxbypcv7JiLx8gr3kgHNW1CJWuncW9GEUnnyJzhneGoKp5QW1ZAqPxbjq3nju8oiD1sn68x56",
  "key20": "4Jy9moabFg1K71Mxwe1qPd97MDXBM1uMGfHSocs8QFvtCyArN2TgueQ4q6ppx8NTBLkHXD2Q6U7rU6tLbmvtSuFa",
  "key21": "2VmCh4aaxKj39ApJQs51jqoo9mtzQ4T4qPNEyhEQ33awC9kmcyuw8EWVFRFUu4eRKRTGKvaQLFjwmaqpCZPQdDzZ",
  "key22": "5tC66NGY3KVgGEUcHK3Mo32MbTz95fkpgjdhx2tc9MLN7YwiCLoQw7iqN8G9CuvF5P9LxQfuqMhDTgB47sWbDd2s",
  "key23": "2cHTQqPyPCryVtu5DqVMgqkVtQjarMBEMESRqkudPaMmUQsFMg6EZ1ADWxpGC1B5bcSnwqHhy56a1DJPCGPApETC",
  "key24": "3GyYpSWwwRMmBUkHAfwWMAGAKTJUKjcA1HSji1GqQRBuHuGjqv6cGJzVTWABrrUrTs7edpW7KkR6gdkrgo77nNbK",
  "key25": "5DVeeBpLtkas1s2DWbWzR8zA3yNpa7u58hRecCP6EXYDmufAdddsazBWA48y49A8G97T2cchgSM1XUxLWZUFTcqs",
  "key26": "3XQ4hvsjW4MYt6E6SG8YX3q3UMjV9uba7P5HTe4B96m1qvyBwS4GQy2D8TFR3yvSqafKQCawGYpLoS45EA3fkjgd",
  "key27": "4bEuMBDTTiYkns78MfwzqK3Pz4ujk6gwnhPqRd7xnwFvBYJc7KBRsSsrkdeD7bMkUhgfbtXZNVQBv9AQ3s7UctRs"
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
