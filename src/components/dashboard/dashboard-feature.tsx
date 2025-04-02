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
    "XwcVcuqAkfXyVk8VctswCC2h5LjPt4zpRsbptpUysqwuRQXY5Sg7HJEJxpZaHzAdKknV2JhFsxnSntbWKyB1tpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ray6n3PjkNFEJY6NGxtzLrWBakJTs8FvJYUgW8UHWNFefyR4sLJg8kcoRyMakGdqP8t6qgpGc79FZzNNeuCSzjh",
  "key1": "5Xz8mGUVF6GrFdMzW2QzqZhNHdURRDz7s8keNV8sXA7damZTeKft8ekSamY2LuFKPLm31KQPte9vGSDPaB3gXHqQ",
  "key2": "3nxd4yJaBDGHs6V8k5u5Jh5FKViYtYS2KzrUcB34Tvdzh26ERCNnMv5hsRgS6UXGsFsjTo3DbQGTssAHzMjXon4q",
  "key3": "4xkwnpKMf2pFHiDyeh1TWrP6zSkzYYYY28WU9tLXaecAzZGV6C6ANiY2JL6FWJ1YgVEizWGyLziUZk7ZS6JJUdtN",
  "key4": "2EazZS77PjxXV8RMSaz7B4W91G5oRkjEtiWKodwSYgMbLZNF1YMKQpc1YrJvGYwkUGDWArTXKAhk368QRhsZQLqQ",
  "key5": "2tyGSWbXJawhQyoBNJ9sgGJ72g839mBu5u7N6KEBZD9gawX2QD91yTaiu7yjhmK86nFjgzsQNb7NZHdTxvJwm32i",
  "key6": "2TLCVUnuqk4Bg5amVVwMF1UAi6Wk6XM9J2gBchJc7v5hgkqVNGKe1AHzYAjopXdQepecmdz9LDuAJFLXKx2dTd4Y",
  "key7": "4fyCHUg946UKKKuaHT4eELKdExgh1ZURNdTwC5yhCaFrEruNSqRuX7hXxaWti3zvV4CN3MZj4rQpjGgC8CNY1jLV",
  "key8": "3z9aMx6rumyJwe5Vh9D6Dr2LLSQNw15y6wUsiXSAi8JrfMiNHaJhA1LFjLN2L2UonqGw1VwHa5zrbP6QZsYh7Di8",
  "key9": "3fNk4qNPxxEVXZRwNVrDfuPLofycghPHqTgdwFTrtgrR39E1iH8WJSLZdVezen5gKsn9Bjia6W8cviKYnkVFw6gA",
  "key10": "snZHfDpDgopHAp9xZyh5v5TGFxSkawyvU5BayAtr9Gxpj1QbnXerPuwmRjFxzSve6jVc1et2HLWKqUZkckspbwY",
  "key11": "38WtoeiFfHdNuZJxGotZVCHBSgj4TmVKvB2v79ZpyEySy4xUq4mAsn8s9nC1LS9Ym1Z4Xm9ZqHSXq7otKNdpDBXY",
  "key12": "4UTLUVhCroAC2aM4WQJWpo1cjbbGKg33iBYJMZLBtZJeWgSmm5sMutq6X9uW9K3aVLS7zTvRJrSzGJRDBpWQoLp2",
  "key13": "2PVULFcuRCvLP1QJcZ4j44PFzA7A2EV5R63az8bKwvsmbcQdwUedSJjxMQwbhm9hSFjNvriBDoCt34FazKtaLow7",
  "key14": "5F8ecJci1ciom3GXAJqtJmb4TzstHawvGHBihY5cCKF3aptq8wmUJNdGSrxNyvpg2pYVmw3xmhcz9Y7GHPsntSRx",
  "key15": "3LT7C4Kggv1Hkpj6EKFxAh5eWez3DkZVzHRecbQvVqhnHhsLjq44SJCL4bc1iVgdQSUrRHanypTewiKnzNXrdYiH",
  "key16": "3nStnVyHMuJFm9vdDVnjjtfV7zddSYHVpNoy9pbM1UQ5B3EdVD9JbfjHGWTHU1KCj3bCmH4t8QrDKmwDVQET74eZ",
  "key17": "4bWkzEjyykaySnM5huCujBUwwnfjREes4xR773r4x7aEH3rNTHGCm85o7bxiS5ogFeszUFVMNiaAi3ynuEqqwD8G",
  "key18": "3s7Xr7WLf2dVbFEd5tvCfgVMMhk78bX7mDDwhvJZDwyZFTe46ESR5RMi3zvVuFNwW7zXX4A2wYUhQP4esrkXsnzt",
  "key19": "63YVmXDwBjVhqbZ3jfSqzTbmV2SdjCReTk9UCnmxxPVJ2pLgsWmanYQtwc4Q8mHWvQV92TC2npTbURdQThTPDo3r",
  "key20": "3T1vriLk5Qm5wWK6R8Lw6oY4vA2dTifLUpDoCjfRhFwMV1pBfHp4y6YQcMNkS22XhbAGyJ8eMRKxJY3e1UDyy4PA",
  "key21": "67MAzDkrkq8J3wGKJR4Cvkfdo7DFMi9iXwss8AWwezWaaapetyKHBiHZKvD3eKLyfFoWv1j2QXMCmyYhSjSiqMwD",
  "key22": "jtAmMfwVUyxXGFNbNPPabRCce9FogJprhroswtwwvCM9JxDdtv9VjmpHPCgeStNrftNtSUYTRVFBbcm3teZgVcD",
  "key23": "5fLHBRRAAuwnfkbXMJAuKhPTBgi7Ahsic9Z6WG1pHsVQmPLnd1cSaBNvFLRArqZYHzoQcMrKMN5CUJacqFPL4CyH",
  "key24": "49XaKFvxTfELCWEiy3vgaLgfZ5uWoz5j6kbzWM4ikVdFRRetxPAGi6o66fzQULvprVSynR4J1xLppZQzmmCsU5ud",
  "key25": "Jat7BVHBBouSpferTEJomhtMJo8tUmTGqc7VBA1M7Gto1Einb3V5Nfxgz9VPwrx3PCck8eKeeoxeVggozNrGApH",
  "key26": "5VBEpBVCqAiVkGeS8HFtAjgndxLeH9dHyajjDfbqG3F7i86wBx5uxpXaX2hbX4JCxcVEA43BrN2ZHCYJrvHxieyW",
  "key27": "2u5ZU9T87QogT1j19GqpXb5HzX6Q1o5CKtgpX1n958zyrbP3xh7hGLVb34K2ACS4JodkSkzzXXTMxgaNayYhfoLT",
  "key28": "4S4pR7AXNVgi5xndWo8WPbkQwyXFe3CRYA1FQkHRWashczA2Fmh7TSiiixyytWoug5UXVQ752bFq9PgR2Q2W5rEf",
  "key29": "e8bkkcxMqsrNo8fNYAs8aFKTyzteKb82XR6npKAQqMMVgS6mU1YnufgGtZdtre34Axn9qee29vcmKxsicicJuSJ",
  "key30": "5Q2NYvm1X344fSCyriYTh8o8w73BrLotq75dccVMG1J4LFgBWTQ8qQ4dhwVcWsM7cW7QrP9wP9JAeii1w7UfvuSi",
  "key31": "nCNuJJ4tMBjhNNUvnG3RnxrX7JfWfreqNwExYBv1FwE1555y8uUwSvmRmgZZMPXSNgBJ2avadYqskehzmuze7At",
  "key32": "oLQJBrdyqe8msNTKfQxphZKD8tzfXFsZXewzEy9e6gi3zAbTZGyhyFTQxKDaDVfjGisQxoc4LovcC79foBAyfST"
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
