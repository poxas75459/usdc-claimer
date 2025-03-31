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
    "2t72atLLTMQTpaG698Rvjk1uQuPzDREmbwfJx4pRoVABwhYiaERUFkzeZaQrATftMpQwB8Cet82QPu8dWgieDzBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UpHpbXHsGKRAtVmWbGhkyrFr7e1EMpNeXKCNJQ7eRkATQejux7zQMTxV3oWazCYX3M2ZHz6KrsvBAy1UtvhPJ89",
  "key1": "5re52QCAJFQ9G7jLZj4v2QVrirK9awxL6c6SewZpe9DXp4DfGw59D7WivVirgfsMBAZ4QqDRWtA9xTHkXej7ZR2u",
  "key2": "4zqcpZHQBNWczuAKwXamrGaWAJzabmr3CTE3zHsFQ9bmTsazs1ugbAyVsg6YTdsXHn5aMEJ7DX4FEEr19hiaCxsj",
  "key3": "658bvWEaUyMuU981cj57vGCXHEiMmxrav6Aj1H9jT8RkM1M6k2Q2GqhciWq1xmd9XPjZZYRkXnf1KuxASwPGUbmg",
  "key4": "4dxrVKpvxTVMVDfCj28t1xavAM9RKBSJgAHcrUcQSXKUqdJqb2KMLVm45Bo9QBEviR8CRAj4rQbsNZtjMDf1wqPn",
  "key5": "WTfFBB64xkmmcELKDkqJW2VNtdbaiQP9KYZuSsZTJJFSaeVg7KVk8QbnaWEgeWeVMGALGwM48rJRNAUVepFYcJW",
  "key6": "3avpx44i2M3JwmCHCBD1GTbx7P9ab4zBJ4mwJtC7vvXuVP44C8qaR1bE4nMGY5yGvmM29vN2ZThhA2QxEAV91YM7",
  "key7": "4RFcVEfgdarGHTQ5SSiov4dGvT4fQKp4iT2ANeWsBNB1GD5aCwH2ttbdm6MZZ5L43V2wqAUa4Px8eqFeJeSQattV",
  "key8": "4LJKdhjZDQd3HWP1jx8C7c3fScciMQT1MsLK7cxFwkBhJjJcxT1CoYbB7CQKXa3LuQKoXHdQNkrJqowa6h1RiCME",
  "key9": "5GLCNLxJq4JFCFRHq8aKwpDkYDPB4rrvJL82DyWfhQsDNhaqzykZRoK7SsJRUzXT6VUwa31oErowinjpgqrZyq5B",
  "key10": "31rx7RxGfB4LFsJVVzthSMzZE9hTHaRn5gLrG3m9zhDskVDGydxgD7ZPmCvGucpcb6xrWP4yJL7sxgBgw7aMyr8c",
  "key11": "4PpLYUakpCCAAJByeScqYg8oUh87iPJbScYC44Jyy56eryZM9XMgSRBAaCtJ5je3gQWZqM5ZzoEkJa6t8TdPRNAk",
  "key12": "3X7ghaiaFwbTnbgrg7htSCbGKJnPZBkXkwZpYkEitYkSqvXFnJJhE1kK2jckRftSUTBC6xavFyhaJKyzxuYgU7vU",
  "key13": "3TRsu3VK65N3ZuHBXV8rrky1qT3YUg5NU6JudwP6FjxEBFmVMVC86FTHMZnSWpfQ6a8AsRQrQfMXak3txnVhwhVE",
  "key14": "45jAnLfnjxobeiH1B2fmNgTnMWSjqwYPBzQctaAGFdSjfyshteAQU5tyUreoJSwQAwHrmhL54W2KSJUNr73nsn9P",
  "key15": "2Y2xa6ni65h7HRdqtkGrESMb6ANetmEKhh57nsJHkPQPDZ5YBYrHxCbJvmgytVprFLkFQmGrd8ecGXhQrbDEyZ6e",
  "key16": "5BieGAiegzLQEmrLusRQPbrtYBJ9ibwFBnEtZeb1ZCUW6H4RFFVqE4ezS9S8kS8qfiWdAVj3cQSKfryqRnVTPqjL",
  "key17": "4ZmGKoM1Pag2tWmCHZdvHpb3jC18GNC99k88uLD4Cv6QhX8JQnqRn8NyDVLwHWNtNfXijWuSBjPUEYtv3eNjQLZ5",
  "key18": "4L1WkqazoT32B9yL4RyZGwJz4aRqphGzs97g3fwBh6iLiRa1hBEM3DAWga8AW1jRTA9oAqWC1M9aGAmH6zKKMxFc",
  "key19": "49dEWRGgJtwJa1W2xiXm2TL1vZp9qH7uUYnag5cAgRZsBfzRYwxBtrMWFPXWM4JoctzvkjWatTkjmTGdqwrwpQzv",
  "key20": "3VuH82DdF8ZfbCdF1ZSCDFhskPDGJr9mrsGejLcqqUS6DGmUhKpPyG9KBtVU6GXGDmCXg7U82aVjErxM8UVn8bY4",
  "key21": "5dLuLrkBvdinPKciMzCBdQDFibQi46qDZVFGNgpiK7n9N3NRbGk77MAdbvDBvGev2PTJqCNtUD7tBjF2rWS6Dhkz",
  "key22": "5x7xyUUi98FF65dg59vV6d4SboZb6e1JZrAj6h78D1oaFD9osamMDi1YRpxSWEwGL6yRDFT8iptKSpMdCGo8QjAV",
  "key23": "63cjVKxqABbPagxbHueAqspsRgY5jhzRHJMTNPx75Gb1DUwbWRNQEusmdUD3o8VYJTuYKLtos2HVajRiwabNiN2w",
  "key24": "4JicDJyQQeUukxoztD6ay4oF76iEDZRti5wh1GybNEsywgYZvjSFXoyhzGLTDraqN2GNbY1mPTiW98v433e2B49L",
  "key25": "49NaztT4Jhq8gxzF66wzqqq5HSRAVLakTv7AP3evxCeD8AL8UokY2ip6Jvh83YofeMPKeC3fyXyc1nVgTXPSV94Z",
  "key26": "3uxjjWTBMNNkHaER9sCLhF1nBkJD2z8vSwq4NYtu7b54Hzhu3RJCCnnX315q9N9mfiwTSvUJQL6FdVSXNYRqoMTD",
  "key27": "9RxNdkQw8TJvUdydpUU6vEcvgtpdsvrygS7WHXWz84NoCQwh51bRqeU5L9KfgAG7QgopiXufXG8vz4oso2f3j3H",
  "key28": "ixGiXMFHCEXaVZmkUvLvMuAnDkvMKog4JdZCWDHPrabayjypr7T3beKhycdhnD6qMcMtLa6B5hRT2Wp3nUHL6ht",
  "key29": "5iamEmRbanPdRveAGWiVYv6G8bQYMathjKeF34DKyXXDq1a76Y6NZwsymmZSEf9cc3txuDrSzU7r5QCNjdDRUhER",
  "key30": "5otfvEnmw4J5eq1tXmfZ3ddNFscRCHoVGJKEZ2o6SUjeSPavpyy1J13tZgxoHCkkasFxLhEQGFhhsgpZAFkDqgeN",
  "key31": "2sRbt7q8C4QgwDJMQ3RhdpsPPHHChFsrucxCGxDttZMsdFsBkvUC2JC8T3VDp7EBieGJpx5FCKowg5YbEYmet4kT"
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
