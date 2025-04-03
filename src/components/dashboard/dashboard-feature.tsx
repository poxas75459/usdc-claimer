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
    "5fca5QmcWPAUSFJmTugnVU2gHjJqoY2T3dEbVPSeH6j1BDfTx6P4vhLs2XdSuPJXFjDreDD7k6exLRkwoSKZo4Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBtG7Z5WzgxKxRnyjByXvNKeXUFwnfmi5WehjEvJ6VGUCpMFmCcKRhcLmFwi3Xgx9FpjQsjiST24wxwvgq31hwr",
  "key1": "kn1kKNJmbZkby7FD5JYybxAe9WvNGdbKK1Nmp61vNtjEKqNMj2UjVsMP19PmBSHmgLALzWo3G1nxM3h7ptjFurh",
  "key2": "xNXe5KaQdVLvEu6zPNWVVcWDK8AC3oKHkkJXVpaemyDXAnaCqkcvcPjrRGHDumEF9HuJYCQvczbHvJk1LGZjsuT",
  "key3": "dJk2Jr9mt1oSZFT19E6ijGZbn8wHREuhYcWgwK95HgedRourGip4TJKmAz9iwPgrLkKAXmy3XMuEDhBSuTVgwW2",
  "key4": "4j7kQvzfEkVAxkJBEGDLZAbCcq8WCeiA2vZYVmWP5YQXgx9VwuapHMPHqPQL5kA9Tv1fZf5NctJy17RTg7fWSYPU",
  "key5": "5TquFmvsN4eB9LWrFoJAXwRsfuwNzfBXU7tHAvWcvogYygg5Nn2Xw2bK6WPhtzBwTyt4ftmj7aYgNzbcgPfEikum",
  "key6": "29gTjEYgbfpCdPKaJcmGrbn6iWxnSsVkAaezc1455fhWNjhHraDc4G8j5S3Bn2TxYT3jzBMdPMA2cpT5oWLDNVev",
  "key7": "3HZLKWqhzwnKewcHoMy9ynu2BU6x1ByJoJxsp9CcTotQTzaDCUjNcRtgbPanJuznRk8SCfXifCbszpssvU5gajRx",
  "key8": "3ypHyKMTXLcMWfgxVpbEdGSNjedg5JbLfwaR2izgVKgPdBJmAFbz8mYuwPP1AEax2Dui4tiGnP9Ms9GFrZE3tLZU",
  "key9": "NMmRSR6GWi7TuFjpmnsaGzPdkrCBkbMAp8bTiXBUgGMfGKv5a5137r7sfETV68BArbKKtqoJpF36P62YdpANoyx",
  "key10": "2XYSny89Sp7anFtJat4K5R9Yyya6cJep26pvTLSefrdH5FBuU39jQRPCSEzS3AjF3W5Pz9Lh6wG9W8egJ8EJyNn2",
  "key11": "52rQTjBV4bVxx6dyvwDTDkt9WrpnkQN2T1NXBh3qZsg9QwWo7ge7KTDUv9cuSnYaS1EZezQSN9vnBRKKoNUZARCN",
  "key12": "2gKgwZ9FVfrjTaQRRY3yHWLZDPok7tiNUbz7BCJznjdQ1FfY1L29JPxPwH5WetAg1XNhzWwrxRs9xj5XjbPUJNSi",
  "key13": "4RyJgJayPm43fCXEV7wrjczFbKJgwH9Yh6zzf8NCEzFq14LK4rgJSMJJzYvPv8CHyGdCWJqTHxHi6eQNKdBvYirz",
  "key14": "5KWXXPkJNvHRg7yVStcfC3iQx9QqZvZNRXEFqStKHLWNRiTCS4jGuEigqZsvqVwXyEhCBjEgpKtMzxo334JzvUxr",
  "key15": "3TQ86FraWZgEuFWS4AshbAF6msbvdYCaEpzfz9BwdgMQ6EVm5BjTjjUnQ9cw7nfAJ7bS7qCFT1MXgrTj9Fr2av9m",
  "key16": "Bcu9mkNaeuo3espAA9TGG3VfvNbAykaxByijAyWG5jDQNAAbqFkehwyfDQaKUwTcqRAynghzXcnoX49fZnHfYhL",
  "key17": "XXm9N3umxts5PNrn6BkPqnsLRMwbkwXQr9XVswGGDJ8RK1Uq8GK5AsYn6Cm9jUn3DYcXJmXLLMmcfpXnjgs7PsU",
  "key18": "nf3ELfC7XCjkqZmkvw84U8X1sLbs31uNidVdkw5VJrE3pK8A6qLRULKukiGH6nDRW7Ej4fqAjXDWgeCeVq1K49f",
  "key19": "4RoekVBRFRmMNPqBfHC9wyzj1S2JVEK468NvbQg3vqttkJ1UY5HwKHPh9xhgNYvLh3Edpy2NAuQF7LL3Vnj4YKpH",
  "key20": "3FAcDfZJBKMdbc8mYQJPC4ofxER8MW5gr4uVdsUx5JJZsJ5uQG5gH5hjBaJW1qeXq62L8h1QdQnibB3FgxJri31m",
  "key21": "5edwUgve3o9rdukkqy2xpGMV3d8UZRbtiJLDh99Z1rELSktkDSbs1ucHQpdMLARp6893WteEvv55U18tbcqRmbKh",
  "key22": "QHjRZhQrtv4dUXb1zdosKaCBsgFdAmKkht3WxUqAzETSfVCjoYNhwou334kKmnM3qPGMr5wBecsHMky8N6EzK1J",
  "key23": "5C45KQW6y894XVYZgxVnKcjx9WLzt55pmicm57mJKfWRop1RXv4FV8XJy3eJ2is9QzcUmYYNuBg1wS9DcF13LEwK",
  "key24": "5CAB2ttv8yS9MjE1VUnThcEnYRWLogvASWNYS6m24LGPH6Q3xzC5E5oztGWbqNsBkH8zR1H1M1KyWr8b8nCegX6w",
  "key25": "Hd5XfsAYFqLRvbH46LmQbM6tVHij9cjbN3pHgebyqG4thPSP7GdY7R8z2fMdMfnHYJxtnARXnAFR8qBWFDLdzDD",
  "key26": "PB4CNrV6vCnfqg88VAqvwUAceNZbdtCPCMUi53rineRHnr69D3KDxnKsekDeePyjFzNjkntLkGc1HLopMijRmSK",
  "key27": "A6YijmaA5fL8D568CmiKtpSFk1MQTX5u9vVhrVbC8SAFuV8eUitG6yK6SccMQZ6boBDbwqW9DvK19HSnACVnNb5",
  "key28": "32XnTf5mstmn2AL3D1PKgJ9XAXa2QJHziqB7iTDVVuZB9B4noYhcQt8LZw89JSnuynyLRVhtUyMxQ76aEq8G8915"
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
