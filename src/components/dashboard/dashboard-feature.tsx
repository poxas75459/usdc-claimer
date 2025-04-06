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
    "4GXdaNTimNFW3Jf9jmR9FvDE7gdM4pE2y5EN49W8MjjgNTB8L5sV9QdCn1kyT8bG4MKgzwFvAzyCwGrfoRYzR5qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Acp9qaNLmFiQ3JtDamCZkhCbzhXYKd1fknXsw2ZfJn7sjJNxZgsqoq4JhGsbLeXUa9BoYuZ4sL6ucyU6S4QeEr9",
  "key1": "2JP4tR9kSvx1gU652T56UcNaDBdQzyQVrMVqqWiEvh2HZnJRwLCYgDCvP9u3ggD6X4syGWgGhDtCQXVAxvmwBwWJ",
  "key2": "zGBFmjGvELH15Bq8PD6Gs6AS646dGDxXYuP5tmQhYNCMZWBh7xofmxodKKmC63tJsk2Upo43u1aQmhaDz7SW2UA",
  "key3": "5zt5RWEHpwiY22dWsmExb244xc9feuuD86PoJahTuSw7c7bKneKTM2dcvkebm5KhA5J8SM7ENsxTX3LuV4siq1Nj",
  "key4": "3aXK7uj5Nq2mfupAoeEVxqgoWiFD1zU6ea1owBw4zU13BjE84hdibhBG1XBdoNWKJYhvzcGCAVgcbsH89RoypnrS",
  "key5": "52aPdT5cdXPDzJiRLitMPCwnrnT87cJTCUMaN1tEy81v75y6bqsSfPV8HsV1vg79d1QxP5ye7HZBrSUkie9cWAa5",
  "key6": "572KXqN4Do5tcka77t38o7r7YAP2rP8VF3P2fLEt2TBg7Fm9YV2324STfPFfwgRYfK26KGcCz44HioZbLG6PaF4G",
  "key7": "4RYa8wJU2FSH1SaG9BAvs85U5f1mQq8SzgkNUyptPHcY4wFVQQfUgZtk8e2rQ7uiDj6o9JbGHc2xQyrp455wGPFJ",
  "key8": "4Lvwug9NBX4aXuWG4b2cLj39SM3R2FHqvoXCqufReEnizN9eCRigjguq1MuQCiP4hmoVM79BQwMRxSXtioZ4uUq9",
  "key9": "5GZfLcQcsSnMsFJL7tb2dm51Vzqs4jcGptdk8FhZCu3En15D9JvVcqRJqKx77ouLGPP45qhFntdTu353HJfTxA2H",
  "key10": "5vQvrtMcSK6xRTeNiuwewU8v3wzotyFcRYGqVYr5nWKugihQC7aA1SoGB6o4fxN6k1rR9REEaBZk9frnxN98uXKW",
  "key11": "24iYVGsiuynPFfkME4czbSUA9fDZwKCmk9GQrEojSJ8SkMxJkE1UGU5n8ZccBApDn1QoqhYAc45Ac8WddEHp12v5",
  "key12": "2dbayHoxKB27jL6CjwPvTUvbrjh23oPvTPaVsVgo4F15nSp4L8KhHyrwX5h4qaya5tJBGqoKNXDy5xF8EhNQGQx4",
  "key13": "44ZUdWvnHu1bqL2dQvU6Jmgbk3UnENwXvpBGb5G2k1FMPSYWERpgzgwNJBQdtwV97jxMLff6cFJsLVDgDnHdnrPE",
  "key14": "3qHYVgEEnCt4NYJntzL4ED2Zbdm3qMZNDZb2tBeWTNiexZo2QUNMasbGHYitMgS2qJcLTo3jeoukpXUmPVV7HwuF",
  "key15": "4DYZqHFqGm34ZYDKww47Vg3rhVUALScq5MjjzrKYxzcYeyTLwnyGCxFFunZqcFvU7HqJuBPAQ9g2UYXSBDmHBAzf",
  "key16": "2zAkeLxV4GEfQaS299N9Y6D49JaaUGnFoY23LQBJJbiWqifYK8wEabT1X3L8NMEG6y4ymoXdKpN1B4jRYzdVABGB",
  "key17": "62KeospyUMpxN8KrpPaiiRumAeGCi1dsT5WgoiVbxvapKEdinPUAR4KxNkHcLtKjEMs6GcVfHA8e5ENo9wmNyghS",
  "key18": "4DVVX2RSQmJcptfE6hXmAJn4JqDmshP1zDnyj3iHrnBcEYus9zuF4J3Gicd5JaWn2nqDxxFDmsPch9u9uihfhWM1",
  "key19": "2BvGMzQTnqgQsEPe7nNdFoHhSNKJ6mbrpqY65L7SwkTkUorrV2KSTiSkdLWTaAydLUnx27do7h9AEmeH7vBjv1u8",
  "key20": "3cnZd4vRem2yDbmi9CHqvSYztHWAtEwNA4Rtpx1QgKLzhBjycuBmyHEwBgYrNvgmeV1fG3U7sE1q1TP9tPyVNyWP",
  "key21": "5egS5DeE3ge4Lj4spb4KG5i9wBJGfERrn1EQ54UVXZG3psxjSsE2sK5dKpzvpzWkLuxRRYTKizajK1S6TeFmqxzS",
  "key22": "4W6UnQd9qb2AZXLJZL8fackUpvheJR3ZidXp73KqhpZBBHX85Yz9fs8tSt9oXL5JVt3EEBX4uG3aJVvRTaPWmDVQ",
  "key23": "5gEDYdRWL5pP3CEeGbxhY9LDZFhPPBU5Mq8L2X7QUeAzdCozu7jBkzYXV44M3B6csR691sKLudt3TWS8fAc3pKkg",
  "key24": "4S43tDRXpxLULWwHsD9y4iVtb8q1FQdY9j4wSZPfB3yaLSMFxZvJt99fs92g4CSPEEvKko1JZaXEb4nPKmKrmq61",
  "key25": "QNPPBbRF6dBy5kkErNtfaqH8mMHorwEeLrF3BCWExn2ewmjXvcwjomj1voX3jPj1hUvWknW3mNwLw6skGk5vtwb",
  "key26": "2V51XhsoufzApDtbKd6iXFqgX9sNqULqX3BpfkaG9SSrcqmjs8H8gH75VtP6REr5R7Lc1aD7Ubx2xePXFSpXeRtt",
  "key27": "5VDVDFaiRsdnMxth9iTeuhpzJdEJgmZyknaYZ4afAi3pJGVd4u5huBt2AYdYLNnyJ1Tybwf1kE7fwobdasyPNxUH"
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
