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
    "5NVAvpd7tnDhGd7St3pPMatNgR22LQhwT3mRz9Z11JraeZ2FNfRwKXGy9jDdcERbj2z9bcqG6R5ivJxDVoJ3QErC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wu9PDkNt8SHETQ6dchKSS6U4pV2VSDTpaZV4Phddau9St8XaQcLsZBGJxmgBQxesQMDtq2S87yySFL9X25orPEc",
  "key1": "35JjmMGjE2YoLW8F1xeRLre7m1WDTxP6yviwFTFgVEAd5SHGbyu6ytLqdjJL4pNLVc28BrjxQsWbqdncKA8Sz1U6",
  "key2": "FpyjJLDcXxE9nHyW7Z9YzBWqY4i1MHXfWBYGqRneXQShAZAuVnpKa6zcZjWPefW9VZJik6JgmBb7F2MxtWLMxNu",
  "key3": "4fVYkWgqj3YhUUWHsdP3UVsbU2t7QvLpvWrZQDpiSfVMSAtqCAUPm8QYg3HTdv5RT254McWyqriZ4omFkWdNHmGf",
  "key4": "2e8e1yScmn1jc2Cmn46GJMNSnkJ1hiTQmvi37cRG4RkZBXGn3q5VvKyRwAUKhwc3hvzN6GXe99bEU1LPedyB1QyB",
  "key5": "bu1F5TtQTrtjL4sL71Mvjr91yL6rRLL7NT8RQcB6wy99vCwrz7sM1ym7nS7fPDTNpFcq6PnP357Hh6NDJMZbWse",
  "key6": "2nTyZY7a9xJLegsDYxqR3DYnQfZ5eCsGyaNhXmzeuSAH6xiJu7at7NKGaCZHmYE2amFmpFVzN2w6ohhTnDqjzDGz",
  "key7": "33XBbQqdSemTts57UxjB9okG1CbVom5VLQtBXbMGGHra1GBLYKkXkscw4TjUAMAixCTLVCx2NrAvNronMD5PHcpi",
  "key8": "T4GBkyit6iC4sYpWDsrKFwbXhHWtJWFeTHt6AGWNYoWuv12EULZYjzJuj6iHWCGRKjvZoYwSMkocRvUwoQTH31a",
  "key9": "ZMxfZyxQRZs7CVA2GdaeGz1H9UP3mfJym7yKSqaaNKSZUmH3stH9XpxEzCHWgiRAHWzjDxZNMMM1qtAYihXkbgC",
  "key10": "3GZNds7pa3eJ2uTGpte7yaYupUx5YZRm5uaKxFP1o3ECyj2zjePH9SiBMa9VefAATA7zivsAALpsipvBkHJDSngM",
  "key11": "yuWkhKpNmhtvDyovFJnmfzwuBQhWtX8rKoeGHWbQar8F4kDAz9vVzP3EXNrKVB2GmszN6vfCJnLJKrQzbz5Gc3W",
  "key12": "4yd3CPYV1S7i2XFVS7mvgZEyRRi66Ui9NGYgE6YHPiFoYuYZc99TgdjMgqLmSkfn5amnSgBs2cSuWfxHecshSDNu",
  "key13": "k7bTSVkZodsoUQw6kF4qj3d1uzknnFtYv6odayjMsdktJTbvTCqcrXowAsiPosHnMvwh3hdW83JfmaxS5UnPzJe",
  "key14": "5eB2STL8EsD92jFoEGZLscMz9E9cJw5fCUcMY4jJtha9MGaLM7w3VyWUJunkr2LpzMr2Z9ThApitSDssDksr9MK2",
  "key15": "3kFoP1ftuXYny7Ck5Nz4VnQprq2kiNYJcpTmAtG43xcaYVi694w97PmFxL4duSZi2dMgHkeX43DKx9hJSf5wGq93",
  "key16": "fjx4vSkmx4JrsaXXYGjFuCYnZzUygjhWiGcNTcvJcsnM4ymfLCeWB3i4ZfeLfpfBgJKDHNX9zLCWrVS1UiJAvMm",
  "key17": "4oH7Mmsjfte2Js7xtivm7yRXHsw9fNPE97GKw16Fq3Rw666rUJraN88iuvjizqFkqHgg7pco4x8EzUG9hEd1vYC5",
  "key18": "4xkVwaEXtotYj5S2NkXC1f3vMX4edQ2U5xfU15mPe2SzMk2xy5KuTr1enGCT7SbbVTKBE1WazbSTa9js7Ke4hkUB",
  "key19": "4aGeTymMGGJLfQXQVXBspXMbvmxMEDQP3YH2cZM8ndjC4chwFipAsyUgYuqY7dchuiCdv34ygj7VBA9tANKHLsHv",
  "key20": "3Ni3ZbM8RdTJu3grUjfMBzjngzXSKGSwjBeCT7ebeouL2sy8ZiZHXQw7s3z6hqvpznGwhouUWcTjFiJcPyjyisVN",
  "key21": "3zXeFdzRFqgNMaH3gJqbVYrWcxPzr4JWcZ7zeqpFWNwUFPd6inEwcgBCH6cpJgfVVyn9o564FMmniAPnSKtJ7SyY",
  "key22": "5gaw7yzHZUjLvL443xJ1fvj3CNGzszbxYZefyQ6QhcNnDU6tkmBmxeCr6DdCpUCvrUqHhkYcxMjtv3HViihPqXCi",
  "key23": "jxUmu562o4mSAoEZSziHTHHoKWqkpVF9iTnP3dVkNPM3Yy9p9Tpcdy4ErxFX3vfn6AzWA2TxMdmJ9sJrrhq952N",
  "key24": "5nUaMenLD5sirYuVc1peHLREYY54RQn77xWovCMNHLfnz6sufiMq99G8scy1MMkLQLKuz9UZH4VG3ydeFFtzNmRw",
  "key25": "4uQF2hZrwEdXmJS2WJ57MwESGxJ8sCGZrbPsK8PzQsduqMqgHT8pKRVTGmVNX8MswhxqYx5foz3tPXM1y1aLdHq4",
  "key26": "2LSy4uzT4Uh2WNhpR8NFZcrGfiAAAddGpa9Chzo1G8jcoULjtSSCM9RbDLBUzWX1irqdKBpcRL1cECDDiXYpCxJ9",
  "key27": "4vHM1dPzxYu2Eqydq7jQMfLFML89Y6SH77ZBUQhEJnvzh4JLffkyV5gG7wvU6DQDQc7KYMACsCGyDcJonyKksX1v"
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
