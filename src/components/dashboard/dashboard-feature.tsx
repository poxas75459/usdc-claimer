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
    "3EFjQvwgdTc1EGRZpoRnYzuZd3R5kuaxZ4LManGEUTpMRJPZssCY53rF8jBD7VZjxJiSPgUzq7HRELXfuVWAhZQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ex3LEMVfbndMHEq3HNEoDhXZGQmiKtLJCqHXVJfpHzHRjLKDx5PKeBQ9obAP4QkzzPvfnz3eqc6imtbxgKrkZW7",
  "key1": "5384ci6BbZ87nLTYr3WtUTcJJ4LMhdwLkWJhE8siKP8U4zMVmsZ7pcda5eCkhWbQBzF9i9e2KoLa3bVgj1NmENdE",
  "key2": "31sLmk6sDdDPQ4Szo3A1phz22dw8odWc7ofJp84sq45ayBXAWRg2scmcWCmdZBc66yXtcTodcR4DL7Tvhx6Ud5V9",
  "key3": "2oG61cu3bHj4bjwhYqire5JkJWorQLYYAetfuPeDyCMEuDL8DBrL9PrszCHvW1fuhiqBbVeZdxnT5PMvjDMb48U5",
  "key4": "53s2VkW5HiyLLQGgQTgH9yib4fQbdXJzLKcPbHmQETKLDqKBvnUgHYmdkADDLyTCsBTG3zMC1w47dpYwkpEJ4bbx",
  "key5": "3XCDZHBypfPapRviJowPW9UNXT7NTRJmDHssmLYgpD5iNm1ExofAwdXcHJZzFbSe3yvfKTLCNmDAKahb6d9JakSh",
  "key6": "5tiBYf7gRdf89heexzVQ3a2EDYForgysWjS6Z11SY4Bf855xasrKo41Ew1K9VT2G83TzNnicyjHEBCTav6eF4JGP",
  "key7": "53oi8pZp2gm681LTckyvQnzVrbCK3TJskcsvyHyDdwu4Eokp6CHf4mMtEXDsQPfiKHUFKernkQHjRsudRNC758ay",
  "key8": "3VKmKGUgX49w64pDHSVCerfZBURgaum3tjvCqvnq7zZQnXrWftyeMFitidZeLXRKuniTP4rt5sS2igFFQoqy7V7E",
  "key9": "5Wy6LaSsD5ow4SJYetaVaoqbxrVcfQHqDCaKGejcKiCEXpmRGRGwtwJX7iqgyWUyzFfnnfdjVdtR6i1LCYmepwjG",
  "key10": "3rVQ43miPdhLLsKw5n3t869fDYwxWth8MWL9bWue7KzAzv8TFx1vQJN7yNT9r3NKEazTan6Rm8PnC9dDvBiCnksQ",
  "key11": "nW2E3uHGGXeJbU2DoctBdSDeDYWVk1LyshtUikHxAQz9TMoqwTcBtS5tNBzvfBcqBnjmzUzPobMcdT51xSwRoAM",
  "key12": "3qwqBzcx9z7iTFYmdkko6xU7ZKWabHsFx5cinfZfg3G76crrtj8k9FyJh2KDY6sC5p2fbKMvDLQEFCh539kAA7qb",
  "key13": "5Xnr6KR994vaFLFHkARxjuMW2JaKHpto2hQYap3FEL8L2zW9xqAHpcf8YJmpvDpLivCrPsJLZLYDyBoMzwzhgJvx",
  "key14": "3dgQhchF7FqNwKA6ZVvq26QiuYrF2GaYGiKeVCcuYtFQc3sHETz6zSQGNHs95AfHief5v3joiZUwuvyewS5mrwq3",
  "key15": "AcvfH3qNqy9c4XtvyLKogtPyw3DhDg46Wo6gUeLZQ1wW5bVAok9xMnSqX93D4g2EtJTtwxaXuTREYeWfXLHL3fe",
  "key16": "5bdgnNwqxVPuf3mDggmf3ox82oFNVJht6pBrTLjVMn3kKoWB36PX1pP5W27uaWMz5Ddkymvun3dVEHqGZk2Fgsr6",
  "key17": "3bWe3JMGvUc35f8VRAtekKCqnMSX3Nqw5Zjyij7tJAVantcdpHtHsNGNe87m8vSD8f4shmKmcg38VZnLBpYh8WyK",
  "key18": "4ELek55S43echo4paKpxCQR7sJtcwFdCyWeAdRrRgSG3TmQMpJ5gu7XJXeS7XTJZb6RUJHAv9iWzC4ZUgyWyx3RN",
  "key19": "Y626oVAR8M9QAeKdVVFC1sngswg8J9qTUpnpNcE4uMctmGXYkmuGDdJ5aJLkTzwJoHUHMrL28JaeuZjanyvbttY",
  "key20": "YLo88uXBBMG9r3LmcxWKVzMxywxnKqXb3FcQjpmrbJvDvpzoSzizPZHAxfLJo7dDa465Ewq76mt7wrUW88kCYj2",
  "key21": "nU87nkHBqej5htQqUarKTWQiZmEBw27n3y5ufKeFewmH7jyWv5zSgTb3g4h6h5HW8tffgBG691b2uwUqttNgVqG",
  "key22": "5y6sfXRcXX2dkoVP6LxhzZQKsbNHfMreMpjLJuPoaN61zU5FFYb5BDLE9UJbyagHPFsfm6EUHMcBx9sR6GeFJyDD",
  "key23": "5L3xZ1R3zwLWeLFFTthUkypd8sszq8Etjz6XGKLMVY9vfwudiwH56ugQaa5hiqzQodW1B6zFC4hykdvoCQTJ3wWW",
  "key24": "3KjRQFRzB9TxeVJMekZ7RPoubsKFtPdRAt8KZnGSvUpFc3rZnLpP5FbSD16o7XQboNKWD7rPnH1XqYC5nBYJhuR9",
  "key25": "2gj56onky9owUG4PRB7EE4PscYAsVEUXfAk6iL9h2bTnH8WLorgsWfXxBfUB3868q2eRezQEBvKA2mHyBMSHtNs2",
  "key26": "2akiYH8Z7ozbzAxbVsNfkt8vEdTdmHs6QBmBeeYoaoMqYfyjt7gRkD1L4smkBYL1qKgoNvnmUGEgZNGDuSXPwo1b"
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
