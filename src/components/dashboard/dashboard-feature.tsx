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
    "5WQ4NjxpT8ixTqCQuYnyNsXbHVBpzRGi4KykQTxZAQ4BL4mKmbAbbhN5BGKV7RQKfuem4wGYqvsZz2coGaivVStf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDfWpxToBtRoxDwJNGidFLymEtBqVUhVU7Ew2g3rJxQ5Q5nfLHvW1S2eUXQyW778PMKBAQ2GsoyhhhziSMvERV6",
  "key1": "3brSD6oTnvZn2zQ4v7gMYsB2q8hK1GcKdxD3WUKP7QE1FpmC7NEHy2ak4KmDGr2bT3ERDvDVYiigQ1WASZ3THSFr",
  "key2": "ZxmoKqcmfnWy8shhbTSFbwEePMaNAh9zErbYTBySdLUkhY8bXdCVQkXQtcGuxUDBzkPejraCTMNJpgJyZphUS9n",
  "key3": "2NTeyz9UZirKMjs3mEgdKVPB8kUdKh1Qhd5bHwpiggCzHffmSPdDBUZVz7d7ttzoxpSLBLTYombQ9Shqu5cCa4J3",
  "key4": "4nuJa8tQ4hxgjiUrTHFsdjFzpHnhGjjByr7BoxdkZ8cnmVFkAnnXkL2WcPrpQgJpZNCAxHoMWo67krF4pLwWford",
  "key5": "Gc15KcesEHiigP8rZBP9hgTrZwae8kSGgbi7WuDLfTSKxuftBtTkx4EeLFrSwABVnVw9xReGs6S2Nvk3gVjTEy5",
  "key6": "2crD9jE6Kmu6aTzN2Y978JXPQA6RyVb9jkBdrHcsJTmu57pTa4rMysN5up6sEj9mPXFWE2rgb7RpRbfckMYVcc7L",
  "key7": "UokqMhPajYtPyEwbXwd4MHo2bXJLSgqVsTKinmbmwJgwj8hq8NM96BWxQPHSgfZMA9jBwDmhZCG5XQ8DedvLLPu",
  "key8": "66Vixta7JoUKhu6PdjFwAwJwz9c2qK64GjsU7VsGYbm8hf17HPpVSPHSJAu2GkzSBYWzxNVNmXxc3UeWB5g3RzVZ",
  "key9": "3xEZGERnqqs59CQCXzWfqudNFWFk2o6q1UtuwX2pZB8WVhyPVHGPgJRoqouCi92uviJFVMtoefRPSokmFVzMtcdY",
  "key10": "fVpvPmXa2S8TCTU3zqB7JaZPwZwdL6HFh3eW2Gkhc8XUMe3rTjAdz9hJt7Kg8vSjycvbvLX5J4JDEs5HGfMaybv",
  "key11": "LHYD3ynDXnZQMfrW8SpMZHn4C75YAhMPTHRPM2VLrEvGW1ifPvrwG4bFZk1DkCEhb5nnYU6G6nhvhhpzJSpJicY",
  "key12": "5pmLcVxBzPmEvBc7uDeAKTcCe5zB6JjFCJ6BDc3nkjX6yWLTao1Z7QAgcGGyu6BcoKiamNZvNmF6EjQqsWZaR8Y9",
  "key13": "63VQCMXKHxf3pnGoNWpV37eWihRsZn47V2KrSE48FZgCKU27Qf6fGXdoPzDuz8pA56w2hPSta2aTa84vGcRmyKhc",
  "key14": "62bYnVTT55QCmnTjmQ39VduxgYRcK3HrWKBANzEPoCnKbMLVxuyMec3izjhYbx3rmEN9WWaijmemiMQuUCEnR9VW",
  "key15": "fKDhjNBM7MXNDZ2JsAnX7TBERVVtVRczfo9N49JHqGE39FG9Vh2J1r7Ee3tJwbDqBezHxX5XraxXJCwbTHumG8a",
  "key16": "cviuCupdyYQByXnLTDDd9wfwQVjhC5CPxcVQUTXcqFaGYDtVe1gFNu3Dd3snzJojF79hoSmwWR5iSPYFdXZm9f3",
  "key17": "4KNGDzSMXnYqK4RGYXR8B8viYwVG5LNrFeWCUfGk2mATDgs1EK3vjFjS58zgewAnM2na7TxQXWyJznTYqMcPaE8w",
  "key18": "arPHK9EpN8eA7xEgmLkWMGreBHJiy5bmqvK68ZyG794mB1KCNnPTipn5x1Lf41N5ZdAkDCsZgBa5xrywhCddVWH",
  "key19": "13MaFxj9Kpu1Ra3EQtEGREEVCYEGRmvy78G23Uomvv1YfuxWHASdVrK2dXgEqkwKuxim1fpymuC9VbcE88zjQdF",
  "key20": "YGUhA5wiP8KZi3fuo5cQQJGpKbfAQCxTxV4DsJbRokYNWkQynz4XsFps2acndUrMmw6CybksRbuZV2MKFe5jGFb",
  "key21": "3Uzz3pB6VMM1mSmwBPTN4XRmqUNodtDuHYNWmzKRxnN2Rfe9C4eJFUSKWYu2CN4n62UDfziZXqLi7AASU7iXy6rW",
  "key22": "5HfJtQxLgUrCZpRtznG3mJePUWF9xJhE5kmeGCoJ2JHcuc3DruW9DM4gCEdXV6JX4vHr49PdaGdR3mnTE1Min2SP",
  "key23": "2usDvSUsogDGLSDE5mr4WTFvi4qAsTqeYpjRU8K4JnFf6j2QiYuRkTyxq7nSRi4L7FPGx4KiYb9Sr8cSzWF8V6tb",
  "key24": "2ftXLroH2YV678tufcGDq4TX6YxRdm99RE9mBfd588t4ntyaJvcGRuyeoPHRQuTghwSRoxK4w4C8G8U2uNZmfprh",
  "key25": "3uCaDtr3pnqS98gLmv1gbBqAnTaUQ8csFNvWpYD4WJB8NhdEbi5b1taxk1gRbPGrKwwdceUqbMEUfrkJDKbRytJd",
  "key26": "36qRVgWybuo88MYjE2ZKS5wmBK9Wmh9BuE1p3bRobbxTL7v4jjXYo5VE6euzQGvfFLRnBYPCNPdQrnFKPrM7xUbD",
  "key27": "2oveXLzb2gcAbP2TXkb8so9hn41SkCroTKqyuzYh5KNzRv5aaU6bBQgFd7B8ooL3hFm6EBTHGpCVE2UbRenSdqWJ",
  "key28": "nqWKGhNG3PBcVUqgByFATERhC8Q59xRvwcFZSXpBkkj1Rpr9754pdTHbG4XfbkHyVx8ndQ7SWYcRZ8BNtC4SQrA",
  "key29": "23PMpsW6ovwmtGFgGrMSmRQ3KGXmpyBEJ8JGkrPxZavzQifA4ZQmrobXfq4CAoz7xwn6LR4hkPTWDmYd1X7k1pTP",
  "key30": "4KNepG4XatgD4HuFjfXEZexheoGeuNhTFm3CWvwCHAUZ2FChJMw6vBZB3VeizhN4jemBYxmHSsKLgMDmHVGesne5",
  "key31": "4L2AZ6CskR44Sjz9BwgiNxTB1qRSyLijHu2hAWyrKcPYheKdy59VrJmFjyz24MGL8ADmtfTmaNwFqazUCfR7FoET",
  "key32": "ymg9ZTP6xMawjJ1KsjED3WwvKPEmM4KTwQs5pVYPkP9zmUoR5UWkBCugAWhyAn5J9QQhD4FdTH31FpWMbHZ1ejS",
  "key33": "5GYHT9zCsQHGtdDSaG6z8aKxiMCGFU8YsNRqJjR8o5MMwDfDWdUfvri36T473T6d5i8WtpHuamRabB9cLf3GJ63p",
  "key34": "5toCSBPNfiYVDmvwjrHTkvFW7RnaG2ZE2CPNnbPb9nfnvasqvUrZNu7pLsKkgo3NNeQLjQW7rRdy96eM3TNUpAkX",
  "key35": "2KJHiBLCARSAEyxNWi5PaKuk8vryrJAgxqcXf9LXnu6VWq3BxXqktdjFk2az394zs2U5EpHXkp7MC4mAsXaDgvM9",
  "key36": "3n2nuceudBeWmXWQB5NHzabWKSvvutXePZSbjzNhB4stJd1y2g3T7NgE363UzXUQq5RqXfqsysor7KghsFaHc28M",
  "key37": "51x5k6vF2Le5j8xcoyqPcC1fVamj9DpMcqF4aDJsogP29DYgFWDdSYTaYb3xggGJWutWu4eMxYtxTtQvyUUZNBGA",
  "key38": "3XRVoUnFFtS4grJgXufSJkNi78JSkCYsADrTXQRh19X8iS8XE7cvTt9wvo7zVDrbvjLvjZUG21FMahafgd74E7u5",
  "key39": "63eNgaMrN346ZuhPVERRMKn5Fv12LBfpKJj8qBdL41qEQGU5R6QbNYt6gE9kD7UBBVw9qzXZcM3VZgknmE28vT4h",
  "key40": "314qr544kfpeGKtspvE5XLnHvwrUzHkskQWtt3gcPL4sX1gmyC4nEint3vaMBGxC42P6TUzQPVvtJVmZCXyUtpc5",
  "key41": "5ZjWKvBzTG5XUdPLd3ARoiihn5AFxkK2bzxZbMjJa3bJTActB2rHGhWJcfEoGcRZr74Tv9KUJmvBtDF6nTi7A5c5",
  "key42": "3gJzfDygwNF6Ydfr9Srwx1cCqoFwe7Rh7MSti8AoFTM5HxM1qRiveUjb8Xv4CsPuP5WC2NQW6uc7cZ7hFXUg5Hvo"
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
