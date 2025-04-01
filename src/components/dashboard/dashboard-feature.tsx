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
    "5DWPYXXggFFYRXY7d9jk7kVMpDv2SA99X8ZbvRiuJ3s6bRKGm77Ue8K2Zo1ZXP1VwMFZC14eRpfp8M2c7qn5DaK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVeS5Xadrt9Hpfysgq9h2uH341XEUfg7MmntzNovYnjmx559mSedSNJMBqzGwh1FurNqgk8VWexzRG8HoKJV94Y",
  "key1": "2yKmDi4SaRwcRfRtHr5bF3UTAWnRTVy4kycRxEBr8G4LPZLJFkTTWhEw6sKeaCKn1p6Cr1oXsvtupDbFY22rJT1j",
  "key2": "2Xb7yVAfst6Mm2r7vYWS9kc3DrwBvACWU8XdnSFLqmgDTFCFCqNYaFiUHfp9zVH6gfyYeMwW6xgTRffMRSDgbvoL",
  "key3": "RgVx5S83ca5Pa2TEi1ND4JbGQzciX5npNGtrzbEH5D3j3LkVjXpvsPwE8eVbn2sv7kjMmNcqH8j3qDo62LQKrsT",
  "key4": "4ptiTxNnBUU3KQHsWitYxuUBmfw4z63cHkj6TbtMFNsXx3AY3d18rATYtPPRSgd5DCCLHXeWn8hYNNGMQTyhbKMB",
  "key5": "3SAuTdRFX4qmvmcKrWCcjvpYE6MJe7Liyxoj7YcZdvLTHin7Y4mkD5yqPEA6878DnzER2YVuAaPxfTs6r2TfAqCd",
  "key6": "2sJxGJ26zwAKJUwjDrX5vhZndHEsmSuE2jrMMsk7TLhATNeC1kNwxiF5gqEcV9ABVcoo1uizHiyaoRWE7JvKYcUN",
  "key7": "562S7U5XZALhA62mm7h9xgSEqrzxga7bj57vqPMPBVGWMeAdxUEcUjf1HuNQCUq6Y1VccadygCEGYbPo6vAqhdde",
  "key8": "43v9GtR9mgcDxP3G8gxtsJXoRw4NNCk8XzrW9Je2AdpFn5nucnS8bHLvZvbQHET51tzm5jgr56V1uS31nq5HbuhX",
  "key9": "37sAT4MiLdt7iKNynWcnReC3ZpjbyvTyfhmEnsMppdMhh3Me4MwMayczCiEPG9SX87fZq2b7Jdkh45mUikwubLmA",
  "key10": "479cArvY14iLqRb818bWp3ZBK3mmY1HYT3kNxu3i75vzHSKuEA65PgJztiKZEXFaoWHfYdMuRi6EPcX3YjXKP5J5",
  "key11": "9fPVigCGvYWWiECZsCtCtv1FGK9wrZ3H9jTAJB48kP6QcJGSDpGRDAWpgW2jx6ZBAnescQTC6dBbWkqHuYtDmsG",
  "key12": "547JsWeCjxQwrrcQnucCuGkHCVauLMWU2wucQk32GQ9peMh3puxN3WDoj6bdPbVSda6Sreg42zneBUvqFyeqhV9j",
  "key13": "42v4xKoC8FgoZ1ZBSHgQbm9R9NQab9mShpnh8GkjSpNRdZCBTfmQ2ws8FBfUwLZeQYWKu6TWmqA3RTbJxMfBhpaX",
  "key14": "4wP61QHRZfQNWJWihJqa1rM1ymV3941aAS73fng4V5GfhVetFwqCWg3my8ptrXjZPcMg5kXvBtsZ79B3HRMFpS3H",
  "key15": "2QcKgSSGiw2evpc3SLpPFJpwnf7DBuuAGYrU6BNeuUf6AbWzp6pbNETyBNiNgW9RWju1n5s6zdRdcdJUz8GW4Rk1",
  "key16": "2TBAftJwBxwT5yBcBLp4TEtnYG3oYyCBn7zGUA5QfZJZMtmDxdUcNQfBk4Mz144fXfc1kDLgHwuz7QdZNUyFgBnv",
  "key17": "2w8SGsgkvd2rUiAzrt18T73LdQrsifuSd7NDfb9kFXwVa1NaSbyY9VrPXEoZQCJVanzXyoor8SqH3avk74AinGaS",
  "key18": "4ymeyb9bb1tCRLd6QtUhPQk4QkjdoNLYVYNP7cCwwWFiv6RAfyJJqJSKRvuLZSpiMMtxwHYjbSpPeRaEX5VZWvfx",
  "key19": "4h9JFLkJyTfUdZerApVBsKctbQyeVY1WEVbCLVgCZhZsDNGjEYFf2GpdVPZpbjHAWCQodb91hb3eorKX3i2hvhrE",
  "key20": "wjiAgUkBEYC3biwrCE5oBLK1FF4dnWqd346PjvHMQFcWRCwBsgpcLsNj5ykJ3bw1i9qywVg6XvAUJV6fNdBkSCQ",
  "key21": "Yw7gkh9MWTsR6sKgb7PMTmy1AVdtYMjG5NGW4T9NUMa7LPeBz9JX8m6qVi1333ua7bsfkrb1Bs2BRewGHxbM5cZ",
  "key22": "2RYAhzm1BbRsyj46bNvDUBbtxxgdH22xTv35S2vZiEpvhXTXooQSJGd8sxn7pd5AYtzt1EyKsn7HB1j6rqAv63r8",
  "key23": "3pphoGZ4R8Bi9z7FXHFhaM8HChLKfcqoTnXaYkzX7z5xA88Y59qPStfvdxg2QzQvU682WFC1msgrLPJBiGxbWDwA",
  "key24": "FEXbGG9KW74XMDuA8qjJ14uJfycSucB4VdhwDuewLfpogrgfRx3DnAou8uLoq2m3X22CdT6Xw2ErG6jF4PKyzjW",
  "key25": "5h5YCkhpfzYdfoBqnUxJChW8ovqmBCK3bzTcS5vGnBxp1uVwJ3o2FFkm7UgsvtrkYBSiy3g6gi3LgXkVkCeiuh18",
  "key26": "RnaxntvXATvXyuroygVzRqNCBpebizhiiDBHoVhLbDHkbnMrNYwo3qrwPbvaPVWMSy2q8N1iSvSspRP7ZPoCPzA",
  "key27": "2orF8GGKt4omzLCd3HkqknxKRQpXKeXoJCbQ17XDo75wKtC6zT8HtbaXDFvV74Mrz2hRsyp5h1AduLU2qtggRpcn",
  "key28": "2NLaWEwCMiTHCmiJY1j1yKRAwu3h2ug5hRteiWiWsUKMvEAjsZvhx4UBqA9Ssnvm8RtWWCH2vEep8oPx67N51xg4",
  "key29": "5StcesPuzoYPghDX8aJSMdjaKTNQJgEhn8VEFjcG7tUQRaXvv1ghz4dqA5DdYUwhQvYW1vxyqKQFBbJ6mmvHEdFJ",
  "key30": "34dg6ZmcCv8axMGqAf7qRZYFGqbPpwU42hwBRmQkvm9t4fgzCqANKrGboYiJkzMj6W777TDzn7dv4Q2iGgjXHHVk",
  "key31": "32uW9XucXVsfXYWauCSPRmPmpqNCcAe2rNnrbwa8nCdq9dHfseXQzVz7UuK5XXUA1VQeA7pRnukBQVVnfx3NVakE",
  "key32": "3qAVqKas9uiR5pvoCJCZUbPhscBKjwHxpwJSS9pCcwf3TGrDSU2VhPYKiTDp3YAZzVmvzYWpKLG2FkCoRMMXhrfQ",
  "key33": "3bJWoYdAi65c1XH6TWN7GeM1oL74aLMFwhKKmE6AUye4VFHHDdkDQkGkHRAfPnh6E8T23TvDWCYt31K97vWRf818"
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
