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
    "4gBDrK3dpwNrwdZ5eSyRUWJ9hzGEQkYUZvYbahM6Eco44ynVyVQvbRkVmJzRVkAHRp5quVfyrSdrACc31urE2nPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pREASKd6yxQJcDmmafZAk68z19oQgNzTjsejB6SvM91poZ29Z4inVFs5m8mJ8egSFdpmyLyHW1bKwZKwXKPYagd",
  "key1": "4YekMn4TDspXApyveNEexsbVBsDAVgGCQoEiuSfg4YvYoDoQjPg6KkU1u4CjjcVYgTYhwdYbMh5MNdkVY2AmDheR",
  "key2": "2V4d4DPkUJupEzZAHPpSxqELLbxhHwie3o2VcgSbtXWauwiPgBKb1TQgsYbQUm54kVA8v8D5TUwTQBTQib3CyGcp",
  "key3": "4x6yVBEHoTFUEMRMkPLoGMzNLYzGvV7QDc6tYzzay25kAbmskGA2mHerofZY4kys41TPJfvyPrvvCzLL3gP4ZEvt",
  "key4": "4geignqSt5cVfagy7opRcs5huQzvpKpTqYvFM62vhqfbh3qwQLErS6Fte6uoM2uaiDM1yXduuYmgW8owJTPWE3K8",
  "key5": "4P3aApTrbfsusyeCujWCLeYkgdSBLhzefatucmnvBorBvwGmLrCJJseQktcCY4tfxsrpzgUUTvSz4msT83qdFhQB",
  "key6": "2aZBUfyTzECK7jHXXVwGnEwbT8o58TQeWxHz1Hn84qcr67AA9pxLSw5TJ8TZSnJuJFUSxF4KDhEduZnWtMNmVm8i",
  "key7": "SU46PtxRBVW7XuUM7AxGPC9tMsUkQqWnMqnVgDwAbVcmTW9KPzFWgyWDXAg4hSpnyQ4KC1kfLbJhLP1Y6TDW791",
  "key8": "3ax89wFhx17kmYpvLzsrPxamkkKXT84n61mnxo2PhHbRqSG7JCLNByzv88sgBu2bw5yMCFGQVb8f2FWfGDWjd3q6",
  "key9": "4YxkSM8tXok7BfPZvP1nZ1EBpHFn8zMyrdsY9EjerB6KtmZAp31LiF4YhYJrviroRJFtXSAkVv8NZgmYvUA9u35v",
  "key10": "5jiW8od56xBMgwqcu9fLgzyGob4AMdBZvqQPhHeFXPAXignyd6T9WU1Ft7yCa77amPnP8WHqGSRKRJLiWegKmBaR",
  "key11": "43vea3CC5eNehsW7ECMnHnvXarqXgcQENjBdDG57xQC7noQ4n4evT8YHC7YAm1KBDKwqkrNtp7NNjBb45VzExGDc",
  "key12": "EPXhzewQXvKzrATshpps2vYigH1kKs5hMHfh1eUUXbskV1QVLNup1KePpbig39feQYyLV4aiKP3Y13V9JradgtH",
  "key13": "5kvKw1aFH9pzTmgcZWWRmdufdWp4XeoAGPXohHkqQkoJuBFq2TGPeutCSMrh1yn9dnZYuaYTvFzFzvdHCZViskfC",
  "key14": "3mb348ZV94yJBgyFpSLCBzsDtsA1zKCxR96g3MawK1b1bTaNYZ5YmYf5xTscCRx2LuTFUgt7Y27hyPojthQAfCnt",
  "key15": "kohgAgzmFzt7T5WeWXHKQhiyP6jXT2exMYDPxnHuvRuT2GagoWFM6bdiza46sXB7mQVQmh8KohK9NJWvQAWbh8F",
  "key16": "fyrDAJnZXfM7iKZsw3WAqF3Km7cfJFePttmCG4NDjsazpGEFhW383idx1zATvY7k66LYD8Huu8FWG1mhtgp1p61",
  "key17": "5dFvYgvG1CXuU2ueY9RFgfBiiP7PgbDf77HTpLqoZkCCX9aHd2a2WByBXQU6r2B3fuY6G9XHS2tRvuZjtnQLa8Se",
  "key18": "4hivrkxq8opnVXuAYC44GEX9JCeEAgSVFwBoKnYM6Vbfy4o378YqH9FaUx2nDcYQwXas3eWHqoJGUv65Y4MUygP2",
  "key19": "4WSUZitZYoxmi2VWpJD3tNv6WGDgxv6Ni22oMV2xKNEqnFpsrQgNduoLTERVCTJ1UPGkHV2ehoRpoTG1Qg9FrBwN",
  "key20": "2MYc3wG3HCJabCcUdsvKy99jbMVnbJx33xikJ4TF9BhmmQsse4XnQmaQ4iwSjsYPFfjPrgXxpNE7YAtFWgEbaj4z",
  "key21": "5Po1UyBQjo2u2GcqqfRjpXaFUxU29RaLuF8hVx7yAXRXS9JsDo2MuWwWrmC9tDfhN7ifx8s4HkUZmkpYH8kLUXEG",
  "key22": "2aSkNpVPGZ7XvsUE1GL596Cs5nR28Ux6ydJtMw2BcxhSKmA84gbvtCDfzfuS8JPGbPrQFXedSKSHi6EyDoB7b5co",
  "key23": "3WzS5nDPynsADbLi77jhp3Zvm3MsJeUKb22mrEGhP7RpFrr4wP87Lsi7Y2rgiAXxXLop8K2Yw9RGDgmwTVkewXgv",
  "key24": "55eUtgyjSVpyBwWLoCNC3EzPJ8URuQ5NUdZezF6sx33HHHPZSFbpy3CrBonA5e8e8qurCpqmqCLwMQQ8aE8Lt2Se",
  "key25": "64tGAMA5ggfzFBk99ffhvtSm6gX1Ska3tKNFWFfBkQuXdRMFpFxpLg4ntXSGraduELM6gD4SBzPHsBE38dSaHhbi",
  "key26": "2ysopoMLk3z8VKsgA7j71ymqZSetUUBkQBUHZgZ4cvY6jbtiFKAmLbzb1qNpyR7W27HaAnTw75FgNzeUapaevsHK",
  "key27": "4DD4Rypgp8obJf3zLjzWiahQsmUErhbGfmj2xVXUbrVPLgXhAUh9gvtwuagaAyWTfhpKV6YvcQpSJssBcVtRA1KC",
  "key28": "xBkH6m6woxezxTh7WzCRP8cZZkzHU7RnDJ1BxBMjNQ9m86SRuoFW3NPFKWAh8zAZWVfhqSRZsk4FrgJTRDx4rZK",
  "key29": "5smvniDdHXFnteqdBosY2QG4FMjA5NqBjUFzqg2L5Psi9mvSFzFqiCgckhwjuTdypRFSTDj1nLRqhCRSdZYp5hQj",
  "key30": "eVZx9Y4x5FAbBYWg5D5w4uSN66ZqMSveBqq4tiy4fDwD9Zqo5etLkKkEos9RsWtMmMxDwtJLcdi2YCQjTctrbGe",
  "key31": "3sEBRNWCQxkDCt9VJowjuRhQZ5bMS2zaZp2PfpbTMoqCnwSoN1HmU8rZDSJ2pR54RgAbPgX9B6oE9zm2pxtRy8TB"
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
