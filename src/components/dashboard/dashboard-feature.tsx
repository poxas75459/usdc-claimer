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
    "3LVC4ASo3ts3XA1A5Gwk2DcfkiiZ6Hf6HR8AXvNpJBxGjNCSBxt7WFq6i26iK7L5Fe4HpfRG9emvNi2BDmxEhdvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VrB6CGv7bN31GFhrEUGhc5GLDxB89xzj2a8Zt1Qj9VsCbP2aZR3VcpQZn85Eh7P8CEcUk5Vns8hS236Xupv8hdF",
  "key1": "3R8ERygDYpZEtyKqvMU3LAEHHKa4vzfxWgmwiNUWdF4UcUFkVd2zbVvwbgbh5xTNUTxq5nswk3aUErbxDM6B91eh",
  "key2": "5BifSRQyEXoqCKWoe8PJDnWNET7JDYJMkEAgZVV9Bm4pozjp3PCan2XdbivWfDdQb83fzyhYT41ezggmounW9fAJ",
  "key3": "3rZzsm6csGHFFGHJKUoG45ZwaedpVK3FvWGcbgLP7feskPUr9h1R8ksnZDauLaUb1oTvdQvtJ5X7VH2q1kE2upB2",
  "key4": "5byCGAae74tYPiBvQJFAKnGAmaTktPZopQXyzaEtgBDPTGe7NfZkrNgcEUN8mh1d1yDJKwNgmZMMayYtMtE8SNCy",
  "key5": "VH8cWMJxQQ1q1LyqKo7h6T5PDkt5uVw4dkpoN1gVz7EPXGNhWDgh6bDCUyZExN6hK7b9zXqRx1kVg8RA7qNBAjD",
  "key6": "4ixax2ZuYnJFaBsBHjrARfknSwVsQn7k2VWNuEXHBjHxuysCAdrcHa2Ptgg1xzzgnpA5y9Y6BZei7Ew7uMK1aMp3",
  "key7": "4WDZdxajNwANSbPccYgxfT8Yf3dQrDCuJLCJ4rHEuznsM9QxnLj2NN9HVTTYJyd7ZTY8AmnL99aGuUc9npdA16QP",
  "key8": "8Cq3LDbWMmns6f83ocFLvBDMWCjFYughMAziE4fyThoero2LPHT26CjUrxau7RpBQjHjh2pxwbLBhFB1B9jZMTN",
  "key9": "252zfqGfCAHDpQmtX9C75pB3TLYB6ig4J5Zd26YbePqWX6tjZGJhWaJpKvCK5sY3SvuYKbfkhoUtCHzydGtVtK2J",
  "key10": "3mnjBTaM8D3jiq3HmYNrYPEkXyL9mTtgK3RWAQPdNLEqy18PDKXXye6ZaGrC5ZbGUwrMuPWAJDRhs2ZnBeL6sZKU",
  "key11": "3Ki3S1fqCUcWD3Cqw9tCAsfnteeeYYiTAWpGxqRP7VWbbrE3koZHNCvYTCFG4gkeUQpuFDhPqpddWgKyoZxJMQfV",
  "key12": "2eHvF5sED1wbb55xYP34QK217eaYgBc1J9XMGXsbGwjK5gUAVDryox1jciUjFDSRcguLzLTS8hzNQLVDkdXq3Hxe",
  "key13": "Le8Cmop769mqYQVTEQZeQW3ZTnHb7scmXXow8UqXaTvfbxwZLEdoCpoW4q7toXcarcwcEatWcskMZvW29knNkNU",
  "key14": "4ARVKdk39rZ9M7dkRGKsCFAsuChdTuCpnaAac4evQad1U9PKUcNTqtxcfKR14HgDuN9Uvp6U7MqN8ERryujaTume",
  "key15": "WSS3WhaBVv7RJ8zDAF4EhPxMGjk1vAMwG5WS4V2gJeAEjwKiuzsuvBKsur7ySWXzpLN5TFHBLmfVa47qpiDEwuE",
  "key16": "2yEC1FDyjHJ9ZJAEuGe13micxizhhdyrV7QzSzsXZnV91fHMRGK5TuNgSryiyTq9UBW2VoV4HWMW8sRP6k5vU9ZK",
  "key17": "5qobz6yexDwvPiGi56SMyZrxBfJgHKP9SdBdz6QMouY6fJqViLqk6iJVo9qpFS6rL1q2awW8GWoHs2dYjJ4xkzbb",
  "key18": "5tNy5MHbyNZ3xkHr2YyVC4nV6bSGVX6c6RM37WCyePGbxe7bJ37D95Jv152MmGG3cjXLuHyiELAX6dF9wCfB7RiU",
  "key19": "tfXYcpNoypdPgRGjKo3C577rxzbnxMBix3hMnrhKjB89MuiSPYVi621GSg5nyKjQSAYUSfrMWnL8TWMzE2fC5hn",
  "key20": "3ohfbuxoZznaQmcWcJqvKqZTynenFT9JU3Y66bJkpEFZjLaJaWy7Rym2hhXAbudcyD2mK3pfem8AU4CirucaEiqR",
  "key21": "5APR9WYAxk3wQioMPygJeYQSqAvHWstQPSHg3iWAJmcBFszNDqMRvLNzfoefBTqeisVnMYFk8Av1GovncYkcK972",
  "key22": "3AcSKKqhmPkGTsJ6E4BPYEV4rXT43rbTftJ6DRrJyt5zSSVNZEYafJFjAQxbTiGoVkXK2NMPkMhyLbT5H6kcpjxo",
  "key23": "A9mEdihmKNrgbfDrcD1p2qEfps4dxgr316tz2Gm2u6mUWbRyhG59ug3DXFWwxVfzEhMjLb2WKGSwERbhhdy8NtP",
  "key24": "5tV5P53DduG6TCg3peR4Pysswb5GGYtj6uH3C5chpkxZUzdGBpTepCfhCKzwFatG8Maa3Lt4RsS9Hvj5PSgh8q2e",
  "key25": "3xj8NgkzR4fQnmMmCHbJeYbhtYPtJLSu9r2GitRS1wKCQ4zumvoU6N5Kqs722PQsyEpNaDD2Szt7jG16Zx5EBHhE",
  "key26": "3fRwYCgBnKtmqeY2RL1ZwSM78QhUKnkHYVryqvyRj5LktDmbw9UNJSpz1QKr1oUtbUzi3GxrRaSZ7epHbGZzihZp",
  "key27": "286mPCYVv9YsvW8RUU7jgwXiJNS1h3X9CqW2eK4hmaNS32ZwEZgRMFCK4bTi4VVhpfXhTpVpjVH7aXi1XAuEpUhS",
  "key28": "3V7WUbhaYoJoWeUkTzAcpwwEDWnS9SamWBoBz5WpFUcCCdk6drocwwsUc7XgndWGvm7pydVbbuFw9AoC7nHzYUJe",
  "key29": "jdFZEcpegZzuVdtMTmD4n8y7uLhRsJuu8Zasgyz1vWbmGzyRUFqErLipbqSet9zFwcGGGBh82GMH2xNZzE7TFic",
  "key30": "4v6brYekDaDSaJwZVL6Uutio3H5mWSpjvswiSEqY7HPPP1x2iHp9jDgGZF8RwuppCBvLyoYMUsWxoL2pMRHzXskL",
  "key31": "5C3p5NMckqr5c1GGedQdTmK4s8BAR9SLTMudShgghx7KbeXGaiuyknhrRjfZ3fBv7a6tqRUYy5WRnag7p9ZuT2ME"
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
