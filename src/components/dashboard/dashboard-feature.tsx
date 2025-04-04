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
    "27Ry8go8SZ8xVXf57fcqYcZNCmxgJiNNchpPi4EGGxVuLwrdidpcTPBo7rhp5NewonAzTWbE867bmF7FojYq7Zfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Rx7NejRrQnxWJ9JkARgvyUTCADVhn8diMaN8Hue7dQ7pTD1TCkrNSdbvRGcDU9f18pTm3dYhrPqMQVZbjPaptR",
  "key1": "5iGrX5j475RxsiS1eLUBmNuzsxA6vStTF6k7duBqLbuvjyfLRNR9shqZZbuJVraKkE1JsCUHoAjhSdm7BosMutU7",
  "key2": "4McjkqRXqcCmSAVcBJ9PiWfEaAgG49HKA82yEHqW7SrhgWJJvJiT4gF5KaF388XjRknvbvf9tqbLaqeubw9UqtNC",
  "key3": "3j7FLDv8UNVbb9sHFVxeNFuV9jxKZJJv3A4j5c1J4Z4a7mzPpTcPHywg3wcNTH7jVB3ki9vnRXyMbhD8UHH2mC5b",
  "key4": "n6TbX6C6tqnjqFpykxP9cjWiB8xmP7jMZ6hw5Aaf16tLgJbJQAKmNg2nU1UKcPZ7cNzTwyc7UR9gQ48vSyGJYuH",
  "key5": "2koPeBAgV81dJveXbkncffK3sGGbgffnu9dkQG7JvEaUtjE3QPhqZb7meqR9LoUQT9rkhPzLz8EWScQGrTAWVSfp",
  "key6": "3Tzqh3r5PJmXNmY2JNh8F7SQ5j2QimoTipRsEnkJpKcGjL8H8K5LQmWsMYEXAaUfaMRkXY93UkMbvte7bhUL61QY",
  "key7": "41fCVdXf5DjouoJcrPdibuSpW9qFbmCibezd1yNibiWh7NzPk6Y3yXDAeDDr2eSQZvrmHpgNxkXb57pNutzSZfpp",
  "key8": "3fe9QNSx2AkpfmA3rHjLvvPuYBsFXz1HShd39ywr8bUPQYKLHKH3KMa38qd8xExRChcPETcuBwj7F3EtjjotmczV",
  "key9": "T1pFtcn7aFhYfoPX1HprUExe18AL9on6BFZ27xFcvMtqkXtBfSzsGD7sUPXWitRebku36hfrjVMcc8fdcVVsvwK",
  "key10": "5bYMxihLC281PNnAaobHcfJ9r5jgC5rryqn9v38RQvW4fUqm4gAcMFBywbyusHrX48HxYZJGRPc8ZoXWbEJjbJTo",
  "key11": "3pDBeprJ84R9CMcn66fgGBKTdx4qrKPjThAKNywBjJPr7zshkoFgkokDEsN98rDjCbqj4sFCG1WXazPXaoKqca7M",
  "key12": "2Egnuz647qiJB8onaFbzjBfSLuH5pUXxFKziEKnNWeXDAaNS5sZBo4jNntV9SQfrKSebay95HBpJhYyRALeDX9aw",
  "key13": "4ttp5rBAzUT6sGmZZa7f6wsXwcinX9Q3V1HuRwoKjb7GGng8M82jxPDS1CqbUneSpP71pGJFPxrGzJhGyUUaJ3HK",
  "key14": "4pvuNDb5kTwvKveJ28zVM7W8HETwFwnhEBRtci1Tguy9oh4f9PpAk3qSUJcBedW9S44cP1U3wLFkoQ1BiBLFftj3",
  "key15": "djetZDZVeJ6jWAeQDAx3cHNazWk9GgQ3m2nLGhaBc5rgTsruH79HrfqRnuTuTmYYYQYdpC9ZzPD3fxftJjygKA8",
  "key16": "3GZaG7ikd57knVmsVZZu4NV2Xsf4aKNKUVsB5YZPVwcVtud1orFZmmuDT4cKDtt5KJDCSsiLskrDhEtCTdbLR1Uw",
  "key17": "4iZAW2j4RGwfsfc5aJikb2tHrYY4HiYY4BJvzwug9DKYLin6xi3FLe7acqmhg2wMTj5DUyvL6mzZWSftGqozTyRw",
  "key18": "2LnzrZiuEegvXUKJx2jy9ypMFNTxVUYhyTr6SQr3hscZ2C9ykh5MVtw8Bttmi6pAfB1u5vxPesJ72Ri4mYhGH1uh",
  "key19": "4avUZFYezjZfvqZ8ffuS4XLMxczdBPKMp4xnkaTqZyg8P9Zn7idv5f46y689JWfnF5Tu7cynceYmayNc9rVL5Xfd",
  "key20": "wTVyaHQsxAfoTofNgDgSp8HJHRau4mhhDsFonsXShvWvoZNA33bULDuDj2H6D4P6QV2fsi7abi5EgFfEHTFQLux",
  "key21": "4g15pis9pKnXyzirRffgThJGFMtMr6PBqfSxuyMC6vfjnUG53CPAveeZVKq5B6QKVCm61MkKr298t5jfhTxbY9D2",
  "key22": "2Bwu9PpY3efACAnbfQXD54KALhJHo7BUMRoe7nkwGoWxanL1JuTVrEjjFrK5B3fxU6Y2gsT41DrCWhPzb3P7qtqF",
  "key23": "PAkHcz4tMAJZRRb3efXQfZLdCy2UdgadejqyzE3bUuixq7ADsvYftgPGtkvL6SxvNgatsruXxBz98u5zJowqwyK",
  "key24": "3Yb5oR7kCAJuFqg493nbmAJTySrtHm9BTmkNSfdyaphHd2eVCydD54ceyPyqMaqMadkgjm3T9fxutdunsf2uLSVK",
  "key25": "HNawNDLgdVhGpj8iteVvAkU9Vd4pTdjAUvwea9kTEvZgHgfMgHfVrQzKsaEY9yPoSrd2d4j5UMvxcTPJ3gYHgLJ",
  "key26": "4fxEywXYzg7XVW1fvcEE8pGRFfmbcWGiBrkj5UvN6m79KMUX4PPUwQwZNr4QLb1U1ETqtDVazHHFv9VUf9n6a3di",
  "key27": "FuUURGEmYthAwF5aeb5sJAYMorFjkCuKBkxFXH9JhkBttwa8cgaYc5mBcuHhctTwTkLQXGXkfdpAkREW3bnt99y",
  "key28": "5omdYvMAMhFYANNqE3bKDZcskK7sNJDKzpT9qvTck4kKAyr3xXbErguMK4A8hP33sybnvT5NHGf9hUHzAGsVAhmU",
  "key29": "3aeFtEBm6XoZ6Sg9paDagnik51aaf87ooRGdsAx6kRM5P4KJf59mywvj6bWDP99kwpwTjs6ovE8zmAYQmj9DHHVD",
  "key30": "5cGJbJxz6uALfsXD56gLgq8bMrnLJmgmwneXA9URQNJQ5uzh1NAfUGgcsvSKAUjWGNinaMaLMxbJbEYuaLL9zFM1",
  "key31": "7kjLsNFMhwsQdpnb9a3jgweeNBTDpCzRkgkyhtAQXKmDfbEqHkJbJSLf6cNXug4RGjmeX45YR21cMxXZqB16PWC",
  "key32": "5NcaakTaNdwJYHUVrVA28LfK6sMYVfVwyYJed3pJsu63j14ta1qiGmTcMU97JsAT4Qkm5wXzubRB8nm2dz3ewDmF"
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
