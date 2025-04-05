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
    "3MYPY68qUDeZJK9cfrFbjB77tf1PpSYVm68L9iffrN9h3f73v9htH3BN5xafHEYgeTudEnG3J3R17oYny2ww5WYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYffv4AGiwoi6gRehY3k2pux1sVCVbfb2Jz1HCnFJ51dPHi5j7vqdwRCSBzGyCDuAnC7yF1HyvWFc6DS2Qpem4B",
  "key1": "3Eun1nJgN3xLBeofFJHxvKDSfwLxu6eb8D8q6FGnbAuczcSLHCdHtWYDpsJTNuobQgia1jxcQtkBkTvhDkbBdN8X",
  "key2": "18afsCpv5AXTzhpBRz7fdbZbZJQdQhvPnAKtKsojDEYdK1kgsp7Zyoc5XsuWiNpN4TgBsnNdDHLeN3MJnJzNUbs",
  "key3": "SXNhTr6GkobWEU9mJJpd9FrmeycAs3cZqeGoFA2AHW3DSZJknVKnzRxtHfwK5auwDVANAWc1EqvkXJ92BbE3qi3",
  "key4": "3wLiaxZJb4KEU8v9Z81MDauC1aGsCmW62SBaMcKD4zDqY7z5CVmddSXauee74x6QeeZYEQTfh12tZKuEBRAH7zpn",
  "key5": "4L7sh63pfZUyUc8R9eDmPvbgE2Mif4uHGu8e6BRqsC9t1f95SV8ctrgSKcUQZj9sihPSRohK1zSZpv3cftCBxpbd",
  "key6": "4esDH8aHnzpA2XcHGUrSxnCz619e6rEL7MQnyrQtbzH5CEjNJdrTa1ugD61JutP2jqcjmNt7L5PRtk5SnpWvrWAa",
  "key7": "jJYd51w4zHwp14tzTMUxnL1MW9LHAdJY7PiHRdgXe6JeGCnHSWnVgjpyDK6A9f2W3QYHVisupwGzaViA3yEkXP2",
  "key8": "48RqDe6Uuvm9rTxkV6V9deAsCWyF5mSa8rLA8WTwJTtkMusrmHhXaYmSbN6hHHWyL1J6PdQ5imqNiXkjeA2vkfYd",
  "key9": "2VPxVQGhLWQFGwYdXvmsXakgsmLf1icdhEQ8VqjSXUdCfw5feYDtQjS88gCZ8G676DDdy4REySugUrbJZATUt3mp",
  "key10": "2F4DmzVBXgetnJJCbxHWyCLAcXgGemVMa75E6vAFH7qe5tJTNKnHEqsquWJySDcoS4CRvF27rTqcbH4z9T69yQta",
  "key11": "2MKDWEi16SFEsQ4sf3pfUedYevMCygHV5B1vKgGHFvTgJfyu1bja9mReda5wFs9EUqZzDSrdf6tP1P1an342CuKp",
  "key12": "2sAwPhdAutFziCnYcQvL8pXtxEZX1JU1pw3u1QZQepcb2iDw4qBgLdYWeAEPTHyQqCDcf7Uyxph1z15LMJjJ1PP1",
  "key13": "2iTsxdB8wi4AL3NCNXGz3q29X6yFR67qj7JQ9cBRZJmhY6W61cxFoFvxXZeFuaCmzqYn3YTv9gABSdRgsfdUXfNq",
  "key14": "54QJdeFHT5869v1kL7hdRdGCKGW4R2LHFZBqsSvtnrRfLatuDKwFU36mpePZBkDgxSV1NToo3zKCU5xQHvy6f5tP",
  "key15": "2bfprK5UACz9jvqxp9ESoVbU6MQDtcpvGynDwhRSWW1Mo8DJqQqMm4UosHshCb2UrQCUvb1NBJxLJxQJZng6Gwv3",
  "key16": "5RBKaeyi1XvKhZxmLzd4xT3Fyp67TsZQkNRufSPrgrcKHeTQm51EYdYkizEXEzPXeNLMwSfB8oLxNUXrR5UcZ37J",
  "key17": "8GpjDfuTtjVFmjM3Bnjp2F8sR3rtXEgNCE45PDoftujMhed7b2avtLE4oXyMnbBUFZsWi5DTSXRvNtaLRvhzufe",
  "key18": "5QdDnmGpJCGopo2Cvba5QLghL92fGHnsSDm1yzuif4fXdjUYwibCeS6NSBdtt5JQ8mPmZsQD98Frws8uCBNvfvci",
  "key19": "3vypn1dSoHzu6MHtP772K1sjmkB7Z4DeAYgXvVPDPHhrzeFthzKYm7oo2WCefU66Kd8RHzbTpCYavdVvSZyhnH13",
  "key20": "3k3Sf3jCMthzAtc81t1Yn5Ay2s74VqENJxkfk3AKADbNmX4eqnDdpQLrf5ocqB1foYci4nBCFtQchiofUZNbVkzw",
  "key21": "3oZUWbmaxo75FqeuqhvC3CK7svc7MJUU2NDfMANZtWbx8xh13AvWw2jRUVhWYmLknjp2HoTAmFVeh8is6vyuN6kR",
  "key22": "2iYFjVtx1CYT9eSwHQ9z4gY98xRTTfYLXfaC5E2YtHpVqaekWHVRudoyxaM4vn83beVBgnzcjseJx61uv2CZZwXd",
  "key23": "pAbHVMcfTrYmBdpBS1ZiDkpPW8revXUmwDv4mzDogyySSq9VFZvXzPzY9YkTabgWbLkL8DTo6R5PcTC5booreKz",
  "key24": "43SNaVLnoMAMRyyCN6Tmpz7zDaeczFZR8X26rCy3PfoVSV4kufDUNGnL9Kxn4ci9HeVaemH1iPzF6HQ3rm2hRck1",
  "key25": "5DQGFfUvcJj3PX3zTFE6uvTJPyYkw3WwhoqrnUBEaDHpSupLGHX6sB1DgY2R1hCw11Q2yLwfGHwhqAqQrh4Ly4tk",
  "key26": "4zZnvLg6uRK4u9gYkBVWKN3q6deUckCHGtLSj9K3cH5nZ8ALP76qhG4w1neV24Qn4rBtBHKHMVYfiPiHqFtDe7yd",
  "key27": "2tJzDD4bMs8v216SxUAGtjMsTZ84QTuZ2qXNunqSnhGbvXQtLaUov49kYB8kBeFAd7gQo2aFvgAAQeFHPpnfS4z2",
  "key28": "3qyV8uphcPNXgZyFpiDPWjJ3XUpKFAfN2jjhxTy4g1SEMHKmhtsGF9JBWLu34X6ZGbJzSGgkkRPtezH7bcCaEQ3v",
  "key29": "5XHp9jDz59ZhDgnU3w8gmjcQxtZHgrrwyfXvrAe5BtRBpribw6bhJM8fkqbRSo8yzCuFHQy9MzxTZo7dbXTgZH6F",
  "key30": "3Ed23EzM2oS6GRhbKnns457qzE8Y7fXVRuhop3fQpEftgus6YWYGKwh7SjKsshSvp3y26haY5St2TTYQmM19Jb2h",
  "key31": "Zdx2UAqBQrLvyFUc5Trq1gMdZv8KrhXvfa8bMwCSocjP3hQhea2X9KfcaPFEjCxtnsD5fgtyADCvCSXjUBnsTUZ",
  "key32": "3585qSvkhxDuWboTY9J7koUxreLz7gK2mGQrf59VC3Z8d764XwroN44hDbcmTHsKSRqZjbKxqtMruhwmCDemwnk4"
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
