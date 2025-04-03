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
    "4kS31muJNrqJt9JmPgedY9YQxEbX6sCPSridjNsRF9nbWXP9Qh28AmqjhweCvYPPw6vchvJ7HpfcdYokhgq4AyGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64s4aCNNWP6dFmfsLebXJVzgeB8KAVcNwns36swF7SRMJ1QbuKbcbznJWwT6urr8ZhkQYBpQtZwNqzRrb3TSVzrw",
  "key1": "4XRD94wMKSLz3xdgX1zJFVsbp5mZzye1SAN3nNzRdGFTMBuFzBMYpB3ZmBc4gek5Ygnk2iyXN7U7iVNzgwgAuDvP",
  "key2": "3qX7EJjy5mzYuA26cSkyp5KUrCedavwVmo6wiA1aeUmGcLQUo8dD24nWiaXF9tAwmkP2EuKTnUV4gVVeYsjK2Vdu",
  "key3": "4g8a5NKxhKoLE5Czg46NvJhXAFNsdvNueQMxsmzSRwjpFVm9SL2apV7BoChh6kaxnHffCNfKRE6ARatXUaLY1Pkx",
  "key4": "5RCdakWXQhE37fKMCQrXT8w2UhawgQPPM7ZAfb6GL9LNa1hDwWEBtyxuf3skqj3aFd7ixF1aRc9BzhvYcYaLYzD6",
  "key5": "5MJYtsCqPjp9Brhzy7z4NF6GodWvb7qymwitmscTTtQ4JAYnfvmSu6LN8STo6UNrqDm2jYHKbKAweN2iLcPyUbw1",
  "key6": "2MC8yYjkuE4J9Q5qzMMDGwb3U88dKbKJnNmir5ZtpvJb6kppEL5thGZ2YgVTEUU76mK78Vv2LQ2MJ1PkF9CstGBg",
  "key7": "4GJNGmoSSgDDdpkTKKDeKw2bkpKQ6U5EEmJUPe2PhkECr5Qz3953jHQ7siWb9FmcXkx3NT7BWDy5V62zcqM7LvxD",
  "key8": "5ramFce4Yme3Wi8FZ81pVeCQxm2tv4xAktb7T5sCyrCMc4vpMevLHU4PXJqBwgeW5mPitLomfGQt15zGdA9r2zGy",
  "key9": "ZDxR8TnFKmQggW2mxeQHU7L619Sg3HLUztHmY6deKRpDjDuVHmXf4zuBNtoYisYNbiKNicihrt1CBVmn9HA7SBy",
  "key10": "D2i1xTFXmJ87XfT5Ww48VJGJQR258BnJDyokqbVXqDBX14sjM6n6ePZJMR2gyH1RiA5J2326smVtDfykEkdyx6d",
  "key11": "5JzT52b934VfWnrSUgc9BSCGyh2kive2AYi3J59agsbhCDy8hFoBzjW8qdMox2RTkhEGEAi6uouH6rTj7hvoXiRX",
  "key12": "5z2fVfMqGvAxwaUNz3H2NFdx7Xu4vQGFrhXzrwLFTPsActhHMF33z8omRLUvcD4BeLdWXcYepZeqWhYK5LXhAkX2",
  "key13": "3NB1qVNugamSoM39iCFmanAutJ4jn6te93MtVHshBkq3dLcpomnAxs4jsQ98zMyssv1zQhM8Dj2TrzXHVoyazSk",
  "key14": "JYcei4J9d2XF9jzu4Mq5HcpfuiVyFF6BY4gWBVyXeqDNRmUzpYyf8CwThiJ9wPLigx21uDBbXxqhDMVoGykV6N7",
  "key15": "4EjuWWFQUZDZqAGNKVGkuALWUAarbxo324q6rGSyuLL32DA8mVSyscwts9P7TBH4FNfFQTv1f1GD96FmkanVwkJD",
  "key16": "5ArXvPzTvBveyNup8SqzwyRainhnASFSBzD81brXr2QR4ui1oCPj2syfjq8rK3nFRTYBk6DfFHZ1DogE2EDxHx1m",
  "key17": "3JZXPonYU8E3yAkyWoLtq2s7HGzzt2JstFzHL8Edo6WohcVi6Uk54KX15qurv32JJk3ksFKpLU7C5EwMpBJVZNCn",
  "key18": "WUJuK6yLjHk4tDTWxxhSUFiWCAQ14h3wRwQGytgXFJ2w1sTKhKxc856FQdyjA5a3ecUvC18M4C5GegBYS5CcrS6",
  "key19": "4puPqdwWeHBNk2QV6wyY1HXDd1jrP4Umwxn9trhFGRFsKxzgQfwYDHvwEwqaoJJvd8VRNNx2Yroyat6mqT1XZ1p6",
  "key20": "48UAKUasrKcKTBqXptkdguY443axXwC39v3tzJ57HJChZgqkZpRNa8yWAsDcLxDwgsP4Wo1fPUa7DP9NML5pdGZD",
  "key21": "2hTg5Ja4Jcmo8SgzYwHmF1TUNu1GHzEXJfoQ6xUQ4v1JNLN21VojTEFF6ppSfMLNxcGNCAEPRQhuxX1SNuV5SYy6",
  "key22": "4xbioWjWWVWt7rVboQkcLcXb7hkMKSdcEKKPQTX99D49cg9KUQzFKyMaBT1HdKbvNt4QnPtPxTNbvhAZHjx5sR1k",
  "key23": "2KnZoHCXqndiiSGhu2Rk7dPEFsQLH8BEUMuVXpJRW2BrzajhcJtosnELLCgJqjoe1vT4sM9n7b3V247NgmWPDZci",
  "key24": "KaCQTBdckVKCsKXdmmXTP7xFhxkRmeRusReEpQBrQ8NWY2dwqDSFjz5SyqKrDHZy1M3tVo4NQvWpRa6RuWVj4gv",
  "key25": "guvaLHpUwneCu7jVGQpidpNd3gwsnix9ADku7TpkexgxXitDnFZKVYzYBiSqcQ81ougVof7kzUm8fCPdQEFkfgz",
  "key26": "JLzv5Mvck5ryuMmaH3hbmUhzJzBPW4X8tMphn3NrDd1Uin8ucW2YqLZC6KtUPanfUNvJm4mpk1hKiDch44Ef4Hu",
  "key27": "zbWxKGicKY2u1PKZmjg1Gt2cJLaA2jFHzQvfLtQGbKUgN9z27VHzCDK5T7rs1aS5PomSH9vNpbcaJvwDBeWcyc1",
  "key28": "ScT36QbsBkz3TUNT67iLYVXN2aEAqp4arbLmuTFimYGLftteXzoz4kcyfzvyKiBBzVDQbY5gxnsFQdZ62m4gHu9",
  "key29": "2ShCVh81ggRb9ZmiDmXq1yKCohKJDpjbSjRzDJwbErF7HCuVTEZT2y59ajq61dkmnSrQhKzfBfiHyZmvn2KGJ14E",
  "key30": "5x6JKpfuHhwc2XmdVxu99GfxJyu9pMHgDmYW6pDTNjUTtSwpsX5rV95Y1b7vC4twNHYFb9VrmWHhL9LQCjUVyk4A",
  "key31": "UUjNRAcaMjKPK11rCunvvqLMUC6GS1of5upH2c7p24K722yjuTrkdqbjjMFmKbx1tDaXpW7GxuGZ4zk2p99qmFK",
  "key32": "4qgYxHmQddkedJVmSWhSGdNeH6nQ8M8m1wHpnzKCTE8PhVrniF27pRUn4qcHBGMCMgzBsN7Xakb5BXuM699iLsFu",
  "key33": "4CA1kLDtMSKrdmBdBMyiG5VeWbAWg6DadsnSd7Kp27fPQXsUhJ7zR6SyEQKM1UzmXyhU1T1fkxyHSc938F1gGhYY",
  "key34": "LejGd4w9tL8qP7yxoFxevLnzmkiRSWYmqzvHF1uxyHLMP1PkyifQ8S5rtHx4WV16hGvwizP4zs31fnJ1Ci1QtdZ",
  "key35": "23oyuyGGwL9qnUuT44hAp3pJgvN3uWr1hpHXEnoyt9KD71PeJ1uxeyMPWDdcwH3nce12E6Cab9UpfMvqJMiY5Bpq",
  "key36": "5GuHXrYNpm9FKMkS8LqyhCfkNzmgT614WNHe97Xsfk85SPEi6WbHkWPPJp5QuLsFofhHZsF3Sb5gAmzxkZd2GHET",
  "key37": "bP8uw3szr6x34mj9R6VkWaRAm8Xquxf7H76WqaLk8RnWeFPSnBav4gS59jVUVQXFjN2rFeoTWzK74eB4Y6M4cSk",
  "key38": "29gXadbXgnbKEMkHhgmK7sZD3ZDhKomEGPsfvuyaYhThQiU3QtxXr3aEt22vX2mv4BgaGhKUWc9GXSz4DeXszPSW"
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
