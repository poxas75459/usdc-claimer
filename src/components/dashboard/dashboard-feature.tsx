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
    "5Yptq9f5fKH6UaEA2rN6MDmPRrpGwhdb8vuWGozawQ9qgzofTLNjhE3ymAkWiGxsaajUT45Y9ZHpv4E67PRwCdPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQ3aXC69NCVBcr6UAnBhrKfqLNYn7ofVeRYNzFrqTvRsoo2qkKMUYgq1RrZQTHU4DpGy7DvkTqgpJ2ks4krq5m6",
  "key1": "4v74h3qJPHUhwErwphAr62GbUHwpdQpaAbofe6jowrv3eixjDkSszJEPuRxk9wDvh8rRUjS1pqFMrkahFkeTpBmZ",
  "key2": "33MLbnD5hL42g36nnYLjRTmwdjRjjGNiRRhkg4jp4xXsy9AwKvadVAP7vLtkW246A5kb4R6nNbRscpjRj2ySwuGC",
  "key3": "4ZTTdWA41pDdmKn6gELauFNkJTESew2vkpTPi8fKShVE7mVDf5QSmJz5FAGRuxiXjFWyUyWZzqaVi722k8FKNBYM",
  "key4": "3EPKDBcY1N59nen9cirQmNHYGUjADW9XmFSmaaeRKbs2Xz5sEUNqwaNfsBvBE5oZuFZcJfeYKFyk5wEVTYVxbhB8",
  "key5": "3RzAECHhmG8tiYrva1B3DRsmm8Lz7uDgqBWnzDi4rGcqgedezor8SyTnmpKbsMqPv94q7FGUj7p1mjsT1dWukGGx",
  "key6": "26iLv5NYpSYhfAkkMfaVndSemGJXapwnBf22KXwBuqgewVEuSQzQrq7hEVyFXoVFCUfRpuzSKHvWDccHfe8GGf45",
  "key7": "2FsuMqaruskWcKvG2GHL3bCph5DWuQHeRkopWTDiZghzLhXgoJb83sgbvzRtLu4G56MRLWg9L9q8sCLqotkxrryr",
  "key8": "5Cz63ZraacmLy4HuEg812yoSDLV5wiNP7F6EbywhB4Z8pyhhDiQZVTB74EfJJ92uTrobXWrBpjPgQ12Wt5qX2UJL",
  "key9": "2cjhPfrzdGepM1z2xyALD2KnV3tZKkcKsbhLaas9okgapdZAV9b3QHx58Pje57pcYyupDb9VW7n4yDSVcBiSKHSV",
  "key10": "58cY2X36JVSPnM6rcBbGr8rUmhtjXm3AsZvGRJmatojY2ndJvaNi291ffTiKDXNFFeChwotXu15SWUTcK4WFJUVa",
  "key11": "2G8aJ2BekXZj84z9d1QTue13bf3FTEf1PcD6ZAJtB121THzRT8HEYXyQSA6jkPJeE9qE5aurJsxEybv3L1BS7Z9d",
  "key12": "Q1xH8UkWveJntc7ehH1fVPh961hdGgRtrShhtsjcDLdpoVgUe5DSzAe2S9DWcZ1UnddCJZx8sXjtpUC723ieurh",
  "key13": "baN3Gf31J5GxRUcvPfUVip3Xogkh5ZNNqWmgR5pFVSvKZamemjwonNjRq5BMjknzQUqHc6ahVqPxSAALkFFE1nV",
  "key14": "rF8yNV9bNLixA86fAU36iNEbR3bP9jkCYR8pJyGtnWwnhGaZpCBWcFEHDfftfpZi4ygfQnsjsznK59Fb3sZvFNj",
  "key15": "4KdiDoDQsxYFUVihzWjAnQsfDSTcW8MGLJNCYUsaH4T6panpT9FyFsyD9VTr2JyLozpz5ETVQXZ2JPa3STd4ah8s",
  "key16": "31HnnZWK2P1YXzRn5k1H1fwnH9LpLPcW4mk7YHauYXLVFj9qXcLBoDLuLj3PCZ1jJmhdeBSUsX9JrwvbDG6vujF8",
  "key17": "2kLauL7rtnZaLKxf3nbQJ7gkkZiY7yXaYXzQqRCtHcyGsp7vZD6CKB2LNTbpnQ7rEggtfbZ987J4cmYybZaFyVZu",
  "key18": "3mQvqaq4qBBw339UMpiz6cCgJtx1h8X66Pjfw3V6bNdyRyiGnnjNT5KxAEpwZKJDdhGCFjyVXiSCWxyK2ZUPqqN",
  "key19": "cCSQAbd6E4y5x3bvmpPJuSW3kd6e47zf89V1ahKQY2K2gM861S1352yAv3j8ii1t1FQaiLA4o1ZuHc9VQsm1auN",
  "key20": "Pnp9C13aLN31cjrTDJPs92KeLffWJHvFpbqePqeDS96RNx6uWRvmiUvTFGhKWcCyuu8ZTg1cxQUqQxcyFHVjJ55",
  "key21": "2ydk1pMN7uYVTUFv9GFrmJPA7h8xbiUpz2A6haVsu2hR6iV6VKJbDHFdhuHEVPFmnfhM7N85nSeyboxRquphp4YD",
  "key22": "2KSnmaSQdRMmPK7byYLYe3douvttonyD3aW4p4y7HaoAGe2NVEG4J1qWj3KWWsNKRqe7i8sgC8azaBE4mrC5UxkV",
  "key23": "4sF4ydbDfsxNuBZN871y4ELvGvAzeHsUQ9trTQxf2cnJPLenhCgW94iBU6YaYGrh4NgyFeqWmzDdYvGnwg4ZLyBr",
  "key24": "51ePtCL8kH8dhEjBPPr7Bn8ejAmWTdsqoSKcRw5jdkYDJadVQkK2sBc44wfMAnTtLcPLyRPC5UUQZkZmYDbQbxf7"
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
