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
    "KjP8Lxe6su4CpaXkZz4QupzACVnTbiy8E1LFRLDxwcdS75xJv2ae72rM8RN83ukabqGAE3C1a1fXxe2dn2xhrf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igUE9TMZtSDwXRKpq5C2C7zaHLSLBX6gXnZvuktR8Xet3RJdZHq1G9KZo2RuzTgsZt8BrArEVG5cWmuqQWmrG99",
  "key1": "fUDv3bQ7bzAV2FUbiZhjLqr2zaF8JcFJNoy6jxg34gPmY6RZFet4fhQJBhJE8bQyCKNqUL1YBwL4ZykTCJdLFaw",
  "key2": "2ccSeCLTF923KWB7uF3vykXqdpU1CVQADH8Jt6DQ23LxvVA44zSiJRfbHicexvR9ZsCRUnUy75tHQnkQjxaxqVca",
  "key3": "S64g5BnuK75UAx3ginoPTu1u2MpVtcqMgJaRvJBK2na9rwwpB163QTouhVZxiZSesPtZp3QnpBAXiTWHXdrbUxH",
  "key4": "DUvFLCvQTrU7iKQDUqzwzj24rJTJ7PLaFvnzk3sTqJUEBvHsJeMhvNDLqCYNSvMygFZkJsA2PxBn9JKZT9NLwAg",
  "key5": "4FQ4Gr4u7ad4XSj6eA8pdxUhVB6JDJ13ADsXy1wmBr8yDsHgqQwpY8KjxxH4xxrLaGcR7rauqeHPVYfcx2Zumoe",
  "key6": "2GcotrAGTiErrnyvUWTqabt6UaoHHnMJfB2foJeXMWMpgyVjfgmt8BfyQoR3VHLAkB6nBVnZpcy7BUMQxQHaoF7S",
  "key7": "pXpHoGSQgAbhh2gCgk99Gm5pioGs3sCw4dBviJEYyfhDkpHkac6VQmJzCLgF8n4tPYk6BA7KbxFJRFgwtLQ8n3Z",
  "key8": "2djMyFBaEhsGyV7PKtx5kHpuEAQJ5fVcCKdUQ2pEv5RUQi7N1KhMv9eoSuhgBHQYcqE2y3EGedJeMiRXvLQ1hXxF",
  "key9": "2G4oHi8ALDjPzBV2QtE5aBxCysjzQVtvsANsQzgGts5T5a77wTgjNjAUTBQzsfnFv5a6g6SACFtT1W1qtoyt1ZLq",
  "key10": "4A3waGxkm22rt4w8SisNhCmLAysFeF2dTY8Z74RKotCZimGUtK84Ros9oHquSpDHEpEZakAaNcgDdwEGk3JJ1evL",
  "key11": "67jPe9M2WBEg3VvmNFGLJLKRTFSeaRihTf4uq8JmHfGtJnhjDD9ZAVfqSLV6fDqZ5nKZW2jZcu7jet62CkDXRRcj",
  "key12": "4EEqbHMokXWs4Sotcv3hZGez1MPCedctbLGh275TmfgCoCwWV4fCeK6Ur5LTa4UZxuuCFNbRYJweph2TPG6R97pd",
  "key13": "4Gw6pLBBBsiqwF4pPzy1eQ7pXKJ6V7pUi3Bmq3z1idQWBUmdJk9QJGhztZz8cAgh6o1W2vUVHMKdkyULX5g1udn7",
  "key14": "56jy6veLZmRV95f6Ymzhor57WDeKELze77eBPAkaCEEqFsMi1nLsDkeZpxYbeNc2UGBwU2kCiauPsd6Crx7w9vUR",
  "key15": "4L1aVVnyDC8F5uUnBaot3xZtPpP3nbPQq7x3TQ7FRyY4XM3EyiP9GiPkrMAuUGRMx1wRE332ATNkqwMCGVPgLsqP",
  "key16": "4rMc6cZSviZKMgx6UnpGvxzAeeBptWD1M3xrTQ94WPCMMRiDtgcshNgCkeS4RVJGHYFa487KsgNEXYyuPHQ135Md",
  "key17": "3gr7CSZtdgBDEGcnvp9Dtku6vRnftzWHRrPrKQpJJLZHBj8pMeBZks4GRkzwpirvFkHYny42NqbLMquXyzpjMkwi",
  "key18": "4bBioF3FjM5c4Lf8cHPyJmN4EEFdfFZyTGbXujy6SxkwqcE4cSudURbrv7jKRqkHTU8gjZSvc6ep1H6k7S5pyN7W",
  "key19": "2nJJkrHrDbrM8oiX6gz3TPce1uTRHFM6WKseHVy1p34DkhhJzsttFrFQ2wbKtit3RmrTNvLYoRaVufva4P65DmG9",
  "key20": "43adPABYAAQNMvc8zWVv4DTAm9hXBFvfz5RirrT21w65ZCSKaNwWosuqrQ6BpZxhhPNHtxAS9XMdFsv2FuAEMVNG",
  "key21": "5XDnYSi4o4qc9hC5qzkCp2uJEuFwVnJDA9VhfNyH9893SCmDezk4v88WPu2MpgummZdMrzv7PUgsRoojiZCvsFYV",
  "key22": "3ihq8qRrQFndriQpLMKY727FfreDns6JhwARUYhXWHbZjnr3Mpymvs5H6TVU93VygcynJvuCqsgMRhyEDw1rBBwA",
  "key23": "8fp4eT8AJn42ycCVwo7YUZi4GYneDxkbZYdyXiY2NDrZehXXhtfA54ZEAcBj32YvvzzjJnS1mj4zJeAX5QNaH1j",
  "key24": "5hUFycY5iVi5GRKwGp9rDy7pFK3LjU12974gYfEbtq312NSrCKJN35bZvVmzBxqhbYyDnj4gjgMG182RZWeh2zpT",
  "key25": "DGmQZyBFF5BTPjneL5LpcSSae7hPC8R6rxoVc5GYj4fz3wDDkeS5zM1KcWzZ37gjxyZPtMh77kx44z7KLUtDQ1R",
  "key26": "282y2M8BidL9KN9cnJ8qY4UfHdZFqRuHZ3TdCoSrr483zMpa8HgKCMVWAF3emiD2jbDM1AdZE1uihcZaQdbEkaBb",
  "key27": "5GVPNJA9Ab2g1wBdW5G61Pg65ErqGDQ4gEEihYzigZXPeAtPtBY9VxpP9X6SjDyoE7HcNGAWxdkfiYxTGUPxWSVz"
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
