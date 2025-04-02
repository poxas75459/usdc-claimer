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
    "vWWnG8wcV6TTJMAdQzAxKTRkJDTBYkgkpZ29vysmy4ZxkB5NfJNAAN1wfr4midXYP3YNh3spcjsKnGVU1u4TbRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzN5qYRLLM9MWo6GEbyZEaXVFDefVJremVJ1cGhq14U7qnP7EPPY8p2CNbEWhTUBR36xmpCn7QTiJMNXaxebmE6",
  "key1": "2FRmvXSy7akgg3BzMzpgugKmQMk5Liv1NnahaGVTdJRBh2R1PcEzXwHfm8rVpqKhLFvWYpkfNJzy7JMMSUVmCXkE",
  "key2": "2TpYc36knzo2u5Awrx7G8jBNeAD6dpABxLrkSzBB61ZiiSAUMMH8B8XV6kNTytRUxZmpZP2TduUoYZA9KuccmiXT",
  "key3": "3n4uGzPzJBvviq6hcmGqn1KUCbLxcZoYC5snUmMXT2z2rTLgFKEhjaFGPArsxH55tFTXN6B1n3QGAM2eH4nBmw4H",
  "key4": "5QbcHEk2hnmGrxHzjBqFrn4daCxn3rCvZUJYeDksfGyTSSBJLW4nq5zQJDVbv9zzuk8oM6hbviTshqoZ6eYAVwu6",
  "key5": "5ecYw6rK3HYNQ67qHAe2qSAmaUYnsKLDEnCns27n5tx5fB5ahpM7YGi32WpFrogVjExJA7T2E6nqiEUByfU7cYQT",
  "key6": "JyroydLpiXCjKxL9K2ghsT2gGUtzH3rnCcuFm5PXjiBNmJZHsRU4Q11S4QSrpf8JFNuVw7d5Fcj3QnBJ67fagX3",
  "key7": "7E6wwRs9ETnEs1ENaq6mM3x2GvTw7mGMxmoqArNwtiV87qKGfjxCuHVodo2rpRe1ArvuEhH6aPUR4SPN8ywJkCG",
  "key8": "2vcMqMSgAkK3wrqp8nh5KT4DXqSE383mLdRdHiyDJbDeSYR3daExdqbBGzkHSjRTCSkLqE4aRzfY62MJiW7Ai5CD",
  "key9": "wxA6KNQx9FCvXHUmw1K9FNzHNNs8vMZsock1HkSNhdYPwG7fuB6JRtK2vqFf9xzSriEpVCgiY3prXnosEPFRvcY",
  "key10": "547XLra1yV7fQk9eGjTErR5Se73AK6MGoHGBgTegLsQ4xGYSbENQf4uorM8cmGYc9fYH4Sdk5XZnraEo1uii6Z1M",
  "key11": "4taJGPGP2azCeoNXy3b6rifRVqE4RsBv8FBAjwezvWT2KcPQPZNveA7gd5c5LK8wY3cn7hKyoNpzik4wTy5Chyt2",
  "key12": "4nFh4fkihxQ6JDbcmVRjqp1fFZfpWsJJYUnALjMiZh46AfFARypwQTYfZGKJCxr49DwZoeRnJVbDpFyZd6sN34Mq",
  "key13": "2WVMtSEB5usbxAyzWzH4omxKA1p2xZBAko3Tb3hCybPW5e1gzpwHF7V2rv3gZMrger5zAr6dKBcCA2STokR2jyB4",
  "key14": "2v1zzc5wc8uEA9CZMVGuEKzJDfqk4L6vzKxosLcSEDxttTeM3EdhuwfPu73F6fQNEwzau6hoHdY9X6Pihqz3qPfY",
  "key15": "31Uu1fyF9Mp1xHdnCdYdsxutVy87MwYnMgdLd4oxvqmBZ6r9kTuTCDD92X5A1KjU14nDeKvvbZUaaDyUypbPxBVu",
  "key16": "3AZ5CAwVHxfUwcvyBeCqQoWc3tnUcbJyzzqVFPsTWdxR2DuX5fYp9nAfyMEPdgYxQcgCtKgC9rfZqat2GconS7fq",
  "key17": "4sMdheyTYauCmxchWYHX4i6hqzazNZe8hquiUjvgnGzToYhbGDgSTWwWMW168gf1G5fNu4fF5v6rXoJbUZkrSDuy",
  "key18": "5DMkBday1T8PfFXeBWpCqLGvZLH6ygaCdup4msyiZcZeRapKmgzfWPaiCpFcyhUKhn7GycqGV6NJ6kQhcNpgxdfS",
  "key19": "yAZDDcdHxGXhc93gM9vnfDpPZgh3XbfMnzRLJtGcWgic9u2ymDP7W34cKcScwFT63G4GeCz4qCMBkyTgLB7TPgE",
  "key20": "2tnhgekWJvwB76eBXgNUXWbc69pVmV5ZKrjaaretTA9BC5c2Ux6RNaXzfs15LhESnrfFvGYsTU3y746N5djWYghk",
  "key21": "45AZByzsfppSmXwfEY1ugBJAWrWLPhfkVQeTgCMy8ZowcD4DK6YpzwEHZaU2SJUmSViqWKfoWVZBMUUqjQtn26xK",
  "key22": "4x41Nv12X332cx5DtKs9R8P8itLr7aQGQjdPqGUiob86Rt5r825LMsA8HrD45ixQweeL94Wb2fcfBAijn2qbCiPL",
  "key23": "52fdnPr8XKiUHhqGLsyHWis8mPXwX39Vodf1KAgTTZscTsSD7emB5uGENCP5GkFjAJs67hvt7nuDferW5Rag6B4b",
  "key24": "2W6TH867bNzRir8KQjJDu4d3XC3jTzbYwYqkpP5Jhgfq15Ajqt51snJ7iMrVWFoYtyWwFAyHXstiY6ATiyu2xB2G",
  "key25": "JzhTcp2RSJ6UnKVf2RPcc97MVKWnC8gLoyoiEWMrE1UdqXsUf4GoN4oJfRVwSkyYDvyGXjwydpDuhjtonyTDsDt",
  "key26": "5fpYoTEJ8fFYQEBqH4CTXQ5eKE6Uxcfy3ktbh9oitJs1iT7uigFBbYkA85G1u29YEh1AAb1tNVz9arVEQNTdGHPm",
  "key27": "GnDwFpXs3WcpaCxk51zS93oDLcgb6Sj9t2otrdLkaxjn6hA8BmzXtzJFapFLuQWfHJqwrgtHGyRdLbTTQGq9KYd",
  "key28": "4zuPmnDpkzyAjHRWpyyDELhtKTwJ9abJsEQhmj7bMQY8h3JzWxPkyNcXxuQPimKnrwEkmc1NZYdyibTZENDKy2Tx",
  "key29": "51WUBU1yMKExMFgB2jbcAn87u1d2SJgSoNSSLxva944FJYtjxRjFhEirx7xzQEXXZhbUVUxNZ1aBr4rdaxjSP2at",
  "key30": "n1ueeAnHY8W24BwRH3quTSkBcaYs1mT8hUDobAUNt4nwRER5DThXFNVgd7XWh5AFYNFd7tnpJc6ZQ2AaBb7j4Nv",
  "key31": "4Jjn5DV55dpGapgnnVgsV9iSk7TLrGc5EQqjUDL9MLvujrCrz2odLcqDUasR57i9rfj7B4S1RYAZ9qePpJTbfmbq",
  "key32": "2K2F4idhJuTP7ej7uDYhUDfPx2yfPwc3vjJQK72oai6dkB2KJZuvkstJY6pqysBLR6qPa8b9CFR2TPg2Sm9AuLKo",
  "key33": "Xq51wRP6sTQvDZYaTVojrUQVnAc7SX5y22psHV5rqeLkekKBVFFAnDhSXNfpaawHnNQUkSgaHYMZkmpKHfCBRS3"
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
