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
    "3Rt7hW7zW6K76cx1vtkgHGe29RSF4hGY5STuPAJ5mxkz8pNxZCeWdYUg8WkGbMNpg5SDXevn44qXu3asaSitoMzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41YEFVw5WZANCEXQ11b8AEQXMnbNLS95MtdaN1Qf5b4WMdmjbrcsjGvmtcDNKwGn3cJVDN3M4B3aWnKn6UkKpFZk",
  "key1": "D8NcJcCmhRsB9WmyeYjC7CTLYBdnZVtNYzGvoqJndzUtQyqsoZxxFEZ2t33f8u3YHnoEEhHWdHHioEk9EudCm56",
  "key2": "3hQ4imnGa2YmuxFgwk5zusvHjRvuCR4FBJMPr3C6BaGFrAuiv9uCNGdC8HbJ44mfn6iCtu9E5z8iautiMEvetoS",
  "key3": "c2dhVC9215UMCdGGWUKW1ZCm4eouQHQcA4Yrg3pRdnzegk5JdLx9vYhGNgn6qTb2x5VijUfKA9wKrAWukjfBs2w",
  "key4": "3bx3mHAXsZb13bj6rpwbHKFgGcDGfQHyh8se89KDmqW1DkNgkD6oMEt4UrTNngjEy8uW84J4quiufvzJoj9oHGHP",
  "key5": "2jEBvw73t6ZUyAJeM4aikUAcoLcNQPUEbE24CmQRUufprpdMj7h8v5j8T77bQfw1jSDksiZ6tqdnRr4M81h2DZAh",
  "key6": "2sq4V17vGRSjMz7c2hyreGYxnN2eEb9Cz82uhLdf958quwaMGWGwVKeyw3p25bCQZ4gV5P9vMhf3x5coRgfyiHuC",
  "key7": "38CcZJwBLZNSsKYrbWT1jdgMPRzPVLMbFbWQNsCWeqqz1KNji9ahoN8BPJfhdnRxmGU1YBijEsP1XaA7eVn5aCi2",
  "key8": "6xsu3AW6CE9hkmbvM3R7hLy2Dv4GnfSHKQobPCGKQ4qNUDvP5kBXUm8kmCjyMmtyh7CC2Cq7GcCYLHuPmcmZuX7",
  "key9": "4Vuz7Mn9ifXFhNCUhoxtrALswggr3E7Tcusqo9asudYhJm2k24V6wtU5FbctxCebCpv8r8kHmEKbHZfJc7SrMCwq",
  "key10": "TUJr2oix3HWkeBfwD1pvoyZ6zzfUZ9BxsFB1Q3FjRVzdEuHRCcgx8sQ7nAgG3nus7xtfT9XJnvVYD7eVPtwAwro",
  "key11": "P8pRKSMRXrjF2NrffxGqqZyRx1Dd8VrBSRwG5KmvkrKQK2xr1wCkjxDPTBaqemminZ9P6fBNy75hdAFAqzpW3SZ",
  "key12": "47m3DqkSkjL7A2FyEXqhAZcYrkoPzh1PjJ3ghmbgQXxozwu58F6bYGVvcEmn2Niwu3Dx3D9Kw2XLQ2ebkShW6hE7",
  "key13": "3b7WkDRDJ1JDqjRjWKabyZJTEJfwg4TEdrkLm8Rtf4C1YJ1v7mafJM5TijHXMQsUPLKm7ukjEvWXDqAK7iJNbRX9",
  "key14": "pbQf9e2YzGcuGUa6cU6bUWvPTAGd233nXrDr3j2v2B2NKJYkDDYukaKkie7ppyz2GGufiet8wNtJrHxuGjz69E3",
  "key15": "4upjy2P7DwQiMFZAqVexuzmSdai59vVh8YUcExn7HKyLW624vzwiLvnMXdT5gYd7oBqP297BSpwyxrUP424QrnqX",
  "key16": "4ULVAgHiXich7NWtK5AWPqfvzxnFiUQG49iFqpJw8Y7Ma8cp662DJNVQgA2EAdRufANGv6ndusJRT9oE9Nrxqsn2",
  "key17": "6xhZMbMAHjWBB7gNjPxfQ5Z32aYXwaMCSDUMA6fQPJqtZRpiS5b9QHdBzc26odmp8e4351u69fc5j4vBUWhE4nj",
  "key18": "5PxGKkfHpd9sfVwTBuQW2grVbt1tRzkW5j2zG18QabJhcXbxgdznJcJSSAK6ETnCHXb6JENCJkAYLKSzLzzRsmrT",
  "key19": "4ijau4FWXjoH554Ew86E2CsR4oiXh2ZDCQiHHW44LD4aB3KnTLsRQUx27PFHfLiSAbZURCu2M2ChbiwEEitBwedH",
  "key20": "4rNzmbwKHmfRocbZcW8xijfMps9oWfTXfVdVzJvmqn4xQ6cvwum35GMkBiUgSDw3xhHorXtgNfD61RY7n9YdMnEf",
  "key21": "3QVMcFpbjGwEKz7g5VXuUaqiCNvvx7cz19ermmE4un1Day6stGUdyUx5T9dKmhZ5ZvnuycJ35DBQwsym3xjyNyij",
  "key22": "4m4fsqdVAEq8b5z5abim2xhxRxipddfzjR3DEy5PYCG7x22VxaSorcXDzDMgDa2rh29Ltkvw54n6RjHigJDmSGUi",
  "key23": "3e1SWv4xD42LcXApAwTqmrUqbqh44WYV9QUagUHnQVuK14yy8Ci6NKNPAZy93oXBNX7hpE8K7LGezzJobHjYaD1B",
  "key24": "5UimobHCFpR7DrenCSTFy3PHKXEfSKR7RJRVHpNq1WmDmNu2UivF7hwEdeYD2cxqZKxgohSPBGXfPzTzhjCyiw7X",
  "key25": "asaCWa3GQgSXDN1Ynro7pBJeHY3Z7LshyohaWm5dy3biRULo3D3CrFQ8WZYai3cWqzQQ21BhBZHeqrge6EvK3ho",
  "key26": "5QaDp54mwmVV3gQsdFfTdm1ynqTKhtwHGSRQLrKf4s1HbZ2WHLY9RpARNmpb6eE5KsZRAXy11d68UJTFEDxE4DVV",
  "key27": "5LCyPyQNyKvCG7FJ28yvsMKrjaCUdkXKXXuLp1yi3HGenqfSLaXNFviVMM7uJhk8L4kUu5Kk3euKEG6U2TkxBXHg",
  "key28": "2Cjxae2zJ8a5R7jJwWGDW8Z3HXeJJgSsHp52fCRjqmLi9Q24cP4X7PVoxRHmbmfeP2ViHVS7bWsjrHXDoVCDBgjA",
  "key29": "38TtjCec55tXgvR7hQjNjv9AwEMCco2GbqfAXZzzY3xnuk11dNToa17FWDnUFSyEYi49mBKuXxAFP4vuPtCUnAeB",
  "key30": "4jYiALBiRVwMdZY3uaJwz7sTAqpc9pTipBBAaaM2GRpnVXhqiF2L54DG4rNg4eqUwjL9qYrVKiDu2h73kFCCsfn9"
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
