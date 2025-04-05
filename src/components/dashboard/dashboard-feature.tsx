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
    "6uFnQZNABtCUhMQVyGSmcXmCtAEaVkwz5sAeR4JTfnAZpkTfNjocSDYVNTJncjJs6LdbNT85vtnNpkDvdvdRuNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzs4eJPktDmeZyDBvu71ZVNpDxNBZ82uuVxHNnoXtbVEjJrBPbcx5MXCv2Vyc9CPqMn4PoTKVJdAGurzUjBCfGD",
  "key1": "47BLuKaN1KvfE1mRyHCSYhLihvxARbgMuq1usBXg8v8vUjNGzLLG5m5EA5UoM1nZbRTqN3V4AKfyFb4WZ1GHdbsW",
  "key2": "4UNEUtGJyq4WYSU92ynTtSAjLzLa3NAJUf8eCU4VqwQZ1hyKEYxbe6g5AjVRvLWG1zRPajs2aYtukHbwM6SsaLWK",
  "key3": "2AdWF1aT6wcttZXwX2pxhSXXCjLf1ag4GW8Erto1CFKEH2W1ySqbx9Au8U51Tux87s7jt1idL2xXrZ8n3dBejW7b",
  "key4": "5NK2JkYLxV6f3YbB2TRS3dfuivvuyHduu38sa7isq2EkWqberwRK2t5fiRcrJJ6uQQQ2FiMMAkdPtcNCxdo2vM1J",
  "key5": "2GDQ7Hpc1vTpLez3kErtkwh5Zxg1Bb1RvQSgDyCusR8dbjdsJc2x8WxcQFbkmHCGVNrpkweK9hMejRaBsn8f6FXr",
  "key6": "RRJ5SmpNRqRbBzg8u416uQjxLsPYVSyKdFLeCAE7Yw8bzyVjXMbkAUKUSApGbtd6ki5c6U3uEjcaazRw5c3dLxn",
  "key7": "3dieRT2rM3JGx85DGcGSfhUAxqbSCA1r8rrdSZfY4WGokWK5nbGtNpbUosMA6nGjPMQQBmpCEcYUrycqFWMvUdyp",
  "key8": "4fXbaqVABkq4tZ3hEQ1GaJfFP1RH3j783WRaMa84Kx7cPM5XwTghaYkoSwE1nG4KGjtK9bUpnnB1MPjtGfSMEUTG",
  "key9": "w1K3tR8PimVxWDiSmBeR8MciYcTNLaWfUtV9j8WuaHCA1Ub365cMDT6c1U36xSnUF6D7thDeett9C8E6i7QrWTT",
  "key10": "4EawxjxuHNHp18iwE5EUNQ4r9XmuyxsBSgKpZ7D49KFZGyqD8RaBX1RCRtzHvxdwh9JKp8VYdUZ2o9cXisGiWx7o",
  "key11": "2mw9h5CEzYTKaH1uA5WMt7TMPy5huFLW4XCFU1pi9TfPy1rE1ZoCScdhCkDgwQ5DiN24sgAPWxNBUYTifyXAzihS",
  "key12": "5AcJw42HstVVTZgD4mcLE16vGn7CsYBJHgS5b9KsdggnopXvQRTSfeJYjMLfU6YMeB4oTV4c9q8HQfeoTdaG4t9p",
  "key13": "5epjh7gMcpZEiShvwGXpK7rQvMQc1KBUAjmLwNdtkmYjNVrgxXfxp4eoj9tGMLurd7S6e5zWH1Ynt14yrpqDLZSF",
  "key14": "4MSRdb18EcR8cVYjdsAbugkCDMwPJBBQJKDfqLANAozuysi5C7hr4zsj9Cmy2iWjG4AbdgXuMReok6W8ToZoMiV6",
  "key15": "5NmbEFZiASbdMUkwRLvMVxjF7zWhkgjScTMJhpRxKyDd6P4NYN4Ab819ffbdkHe86ww3yCiRex3afbyjHrFw58Yy",
  "key16": "3TdRPSpZLaGq9VYxG45oXjh6D4pxkdyUouT7zgiH8iqK53BprorWb1bnS2dmy8xPi5ZhoUiYv11QHRtqy9oGNfEM",
  "key17": "2KtdnqeimAEgQn4RQAKWn9WJXqVkNq5yrofHvMMmFQuNHQko3ra9GNohMLYQ1f5VSmkbyzCYWrGxaBDSL6UPxAzL",
  "key18": "3Eriu7hzdL6Lr5Efa7R73mjajEzgbXzGtF4dvBvX2PQF3nNFH9BH6p2Vsmqg1shBQaxNNX1HM6DdepdykRN8Fhfg",
  "key19": "6HuvFkjAsuFDGZx92WnV9jHcKGhxwvUKvBUF6EiVyjH67DZGPA3L5TjBD7NSj7tYty7GkcE7iPU66a8AAJeqqQg",
  "key20": "4qWQYCxZ6CAcqcXiFW9B9S77FRRPDNcvfuSeVFkfx3F13f1R3amGowS626dXFUQxsy3NuCNJEH9Dgt8ow3ZJbJrx",
  "key21": "29PfaWRQVQ2NyQgeLVPfjheRp2Fnyq8nps9fribo7LxY1zzZLtidR3QVvXjt7BTgitr6dxigznS7RHfdv7QeYGG4",
  "key22": "3UVVEc8kVnbNNs7ZwzCZ3Bh55iFCeZsGZr8C3jeqxRPWaAUpnBkB46gtp2WpQwgaHVXcPrgQCeiiYQMgnupMoqTZ",
  "key23": "2KEGDQkuz4GT7LkhJjYEwFCr1JN2rp7JKpuMXbRVXSHuMCcL92ePrmefsYPThf7h8SMmmvb9tyEnZk7J3o8gNhpo",
  "key24": "5MqaSVzarS9dXCweNNB8TS4ZEiXCC4oJvSztTpcFX5n1DhppEBwbbaJWAxHpk8wBKqcun4Ldk9EcWvGPgm7rELFd",
  "key25": "4djPJbZWBQd9fDAdSswGpWXVpGQeSu1U8bpyem6piJdjRmHwRDKdCgL9VtyECdxp3oxR8qDGFGFcbhr1oV6xLtW2",
  "key26": "2uY1Ns2psSLxMLHoLWPLEVXuPQkhqFyTeyeY4nWRdWnkVWGith2pfqMKkz515GabmbLkkRp6ttDnNz9zPrWyis1j",
  "key27": "aJ685xYopoxjpHqNnaUxz6BNWVQpP41ZE4tPjWvdzxRA6gYhF9HdnTQMXC78r9Sh2k7NqSi8Fd7LZ2r7UFw2u1t",
  "key28": "5dmsM3jZMy2ATmTdZ3EfwufdM7fcivqvE8ue3bYRM2ehPR7QQiknVN8JG2UUp2aokZ9DgtewGU98d3nc4qetoef8",
  "key29": "2Rh2dXv4HmiC3pypWJM4ef4qqqitZNAzPcf33rH1mXPf2GPi2FqcMZ8JnaRokEkThruHQQWjaKSkyscHs6Pven5p",
  "key30": "3MCz6cqNXndtvh1zm7vwYPHEaipzJJxBUwsSRZbtjZDBgnbRbVsMhhf6ga1c7j1NLNXdopvP6GYffuFMa7CNJibf",
  "key31": "8S8LXZKjgAfAwsX9HKueFSayJsjQMiY7WCshNEmeg3C2vRChVyoULsT7bby937ALGpoPU4uEzmhvEKfM9HhVCLT",
  "key32": "5ZF627ehQwdR4gLK2yTyK6sXR6Aq8d91E3CM7pEzZ4jW2aG32qJxdreSo8167uf5K3QXCvP9Q5nyk46cpxypNDC7",
  "key33": "PKuLLHpVJgVUfphQwtDxVmz3oreCop9Q1Gzkc8LqS83gBZzKkzzzk6LeMnoRMFEqeP9P5FAVqxAPcKdR29FffLf"
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
