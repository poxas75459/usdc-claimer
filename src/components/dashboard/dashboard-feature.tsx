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
    "5e913SqYEKXcuNKqJoTd2qjZHem6n4FF9qx7T8iauxvqX7Mp7pW8cETS2LmQxDXRvR51GaEYmhUxxpDBstMzhwpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSetnrFc79CVVrwSZS1NmpGhEtG99QkrG86cSU4zTc1t7NfQ345Ljnjwy3Lsjjy3dvtN5XmoAwwqz7ss8ADAC8r",
  "key1": "5qdtRW3cnbVeMX7p98PzfZrsTrjrvqjDgEP48FcbEEgbUro2Wt53fygp1TSkgxqXDQNaJcgeUDkMoPC7YwLn5och",
  "key2": "5EehD6fFD18UFQkVawaHMV14FKTZWK7pjybhXpTmF8xqu6cwAeD3HomiXvmhFfDZkvcSvY3WD2DL5UmcbBdvuRT3",
  "key3": "LUsAhfbcyef3NX3AkDBkDed4GgmZbkz7f68Jht4k36JwyJ6hY2FhTrGgfLf2Hxg994uiu2NY3sBz92KArTn2r7P",
  "key4": "66VuGYBLkKqd3HkPggKF14tYxeTvtoAmk81W4m4XdrpmF6pXkDfeQTLR2tmhHMrjuq5FmEtYvK6G66BrNgTR9w1X",
  "key5": "5qbhT8sYmNhXXhJpYZEVFjiYLttpBBF986uN5zPGoeCNhSqLddp5AaHGLuQY4KU9pkSP45DQ2doiEY3TKToNqzi9",
  "key6": "2WZUWymHVJnGqYxEtBoiFhbVDDwrP8U6zFkuUnz6qaovoyKZRZfjkoiRBeA9ut9pSJsQDx3QiSeUkGtTXfTTwjr9",
  "key7": "2dxUBBZTkk1wJBe3xLPH5zK4hBYFL79qDCr56bPHHHLsKvZwm3nvr3ZdeT8Jpv9A1FBc857DakG81mg2Qi2GvD5c",
  "key8": "LqML9Y9FmbY5JmSq8ZToE1N878rPfVpkRrbzc3FGxrjUvTYhq3QkzHMuNLZE3xQM3KaRgmShJP8TQ66GTUxVKFB",
  "key9": "4VyETjXa7v9nFxrLJCbtVAGvJz2LMF6JbYJMXm4tgRSyJdUTVRv5avSqMDRCiNxfYEoQqqzykgQfXwGHbho8fF3J",
  "key10": "2VbFeUsDwE39eAZZVCuDD1gxeRv1KrZk1FmYZCRGEuiXLeRormkmp4Z6QUwN64q3aEZM7pmUGeSAFrpKxdD6Ukie",
  "key11": "2poFyVWiAZ7RpDGwJ7W7DuqfGLXqHpgc8YzS6rvbjZgWikgcnuXHNYkXwHY6tFFATRVor4r91wir8Jo5m5fvwtAR",
  "key12": "4KVGfZBXCTzQFvX8dMdf4Z5UUVzBey47gJYNMhX1ikGpsL3D6tHTTZeEKA1dV32cG9kv1p6NJrPtuYyB1t91LbSc",
  "key13": "2GVR35dC3uaHzPqf4Z9QxNyfNN4JCGHtrmGA7cVvmf6hgt2XrJp7ai7hF6R27sHX9edWRkquKqhewGkdFCYs3oTs",
  "key14": "4JADXH4iztDMSUqXQGc1v4uHAepWRg2eMLLKEitX7tCRc8iWN1bBHJXkv9XzGrJpzMzPmyt288Bqng2sBR2GoUuE",
  "key15": "uyW28hfNoCiQfAwByf1sxNRKCxTYr4bxmCrKWJgg7B4avFjERvE7b9gb5HSzNgfVwGkkgjHe7q5xSC7b3VgNnYW",
  "key16": "5owBvBoHh6CaALoF6WLMXf1M1sErCvZBs5dgaoMhmPNjHeymokuLJ3waTK75zcbefuCMhUFpqPoGjW71qhxxfaXG",
  "key17": "42ft9XoaZyVuJFrUcBaFouUucwzJMeGDytsEBh9reRPCirqYtRU6muDpep6U7pxUxsPm7cUyZRaQZt28Rhs2xkxo",
  "key18": "5bRege9bKSUfA9mutR6LNxvwGcjzJN3W2PEogsGKBa1cFCPyyt5jPMrLTZWu7JpsVQZLsgiBpQ1xzmvS7CgtbsfQ",
  "key19": "25uafCZoUVKc3F6VfwZjeKHJ8xzzxViDrEdNG5cJyfPUkdNJEUUYbBg8uxBiH78qS5kDJwC3L6SrMwUGkwrGnCFt",
  "key20": "5pqEEyZakbjcVsx8ENYqkVogcpTzQDe3CGLq1S1v2ysaaGydVJzM4tCKemyL6c3n4AHGRY5mxPFu9YmgwduondWA",
  "key21": "5DScpzKKwCTMxC2herDDQMWdnJLna5RbamnGDkY733RVqEKtD9Xwq8cVjK5N7FAsweRTYoztRPxg6cSJASt8DNsA",
  "key22": "3jPrByftQxT7kj1vi7MqbHShoJWK6rMkxAT9Togfu7F1UcPCN3cWSXgBzcUM53kSvrdys9gH5Z9zdKhRfYhCLimJ",
  "key23": "55YvUajpkwMVUomkHSNC2c7FSrNGSixchjzNWskuXJ8Ls7VC6d6R1Ao7K5mPN2ABnfN8pjeXy8Knx6SMhyZSsJyf",
  "key24": "XdoYKH8dmzR2QcEJLZjeSN5QR8m3az3jf9VNXnAuAMjwAs4kKNLsFpt1AqNhququb4eAWg8LdtDv5n32riEsbD7",
  "key25": "4V8MU1CiM6bLA1nxB6fuW7cVVoxSpB9kmT2ABseETLbdydJ6xLAi4JxHQ9UbeQMkbwzhEPVzSSHDxuyYgs8JWRmz"
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
