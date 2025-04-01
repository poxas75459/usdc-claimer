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
    "43i1osbg8k1HNSmgTqiUGuz3cmnzR6yvxBZtJiPB4pyj1N24sU8jGePCR8aX7RYTD5fkY7YuxzaXnFH3nkwPVesp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pf2BzkDXCaQWkQ2Qq3niLiBhczs4sxGrFA3kWyeuQxUHKARiMHKhhsXgnE2naLDos9j7gG3CqR3PXGhGUUyUXe",
  "key1": "gKMFbtVRpSTbgYtTVF8WzMVC43YoRa89cQAyGALoA2Fde5xfn3WHwU2moXHfMYgoWkvvMhVdsXoLo7XUQrWmYjC",
  "key2": "29yHvkBGZaEuNNXvSXyGbRZvPYJUdqxSVHgoNWodoDFYNeifXTw6uxdFz2LhRio4iW6RkpewTEsD9BP9UxZCtgt6",
  "key3": "4aqLcmmZpzeQ95okmgksSxE8f1rbRQL43jKhqYnhpoG76Dm2z5GcrzzSsPMy3mnCkhTTwKP5uqf2tDDVeuTBGyKH",
  "key4": "51wQJfWYvJE1heEFURFbr2ntVpvY3X9NmSBekSprT8j3LCM8ZHfAdM56aUyNBSscHoB51ZhA8pWrjczNMrKhQG6t",
  "key5": "5eaAB8CBgRCAxFy44E5QvYnJXmXCo4PvWAULH2f5NbG7QbL58d928LYYUY94rc1xFPvFHGyedQWvwMHcDNTWwBe3",
  "key6": "23UeCGDHsLfBR4M8d1oasH8qAA9nWGCz6AA4vfwEAkLo21uBRbdZze4bPE5JGhX7ejSSqJ4XScXLxHsDaSF1knRT",
  "key7": "uc1Yn1LA3kvWPF1Yt4CV2hm8R91ZPpUiXLGNX9PLUCTJhF5xjqWmo4YkexcxfSLEgH8K9ZjvMu2inZ6NxdZDYz2",
  "key8": "3FVsH2VnEEqwZyU4wLjDCFSDkr31nd6NNW1e9eoTGEh8t49DMuzSipUkgEmBGtdo4THBUPADr3M5EneQutzVCQqQ",
  "key9": "3Ukp3KnGaM1pAkDdxB6wHCej6Yd4ctVjrkGgLhaiTZZ8aZfvoSnyvjdP5TTQeah6whcqjjYkrHTZS9ShiG53KTU7",
  "key10": "2NHak2RvH97xMGc4Sv2NeQ1TCL5MkzsRh9mhs7WiAEyfaXqYBVEcSJNt1qEGbRAPZHS7q5yXGKsQ68DsVhFhssCY",
  "key11": "2FaFipLZz9AuVSxLcGEUxkncxGozYpradw1n21d2wjT8QCPP2bp1L8Lxe8WF3pgDaGgn9Lvm3NpH8iBM6FZ4Hzkj",
  "key12": "3u4GE1c2WtthSYKApMhXWYQzstfELoRFVbAUKHdqvX2rn7PB8ks5Y5uXp7eKwkJdLeie3fVYRY4hJgwZEQDsNbCN",
  "key13": "3iaQwxfyhm8dSwxZjjesmLHdiyfpyRdCAYzcNdpMF7HoBs58sdtaN9xmZC868dWBomVi52CCUTdQK8wvXM3rAexx",
  "key14": "4uD6agzgWqXCrJfUcmJ3cysywsX8yLy5CtviBZa6e1mfFduJcrSEb5ZcxWStMobritq5LBugT8GcJ2knZmgRybJN",
  "key15": "2qzjJKf6pEK7a6QVr9k8d8pEeigVnuywuuGDUvyopJrsKYrW6g7vqdxxrW4s1skFK1b9AKvYiTQoT3N8p3eyQWKA",
  "key16": "4YYNQjiVFWAMnvrXsXjk6y5PX8VEKAv4LCXeRNHG8KxNhG1cbZnicXkyoniJ1TiTHX6t766asTgmRG9pBsm3txZR",
  "key17": "3EMNfWE5Lm6feKyEoZxUFk5vZBtgNsgJU5BQQn1bxTC7q8doJW9Uaxyo1oHovWTbLEz8bo7B4xvxbbTeH7R9cgWR",
  "key18": "2fG8hvDuDS9F3gtfxPpnCkyNbXjtApa3i5B8K4g1muZmwi9k7jCXrMp36B8u4dFkNJW89RXwUM7abFNeL52D4Sbv",
  "key19": "47Ct9eoCnoLJpqJJ1TX9ZNjRbKFnFkqUDwLuNSFjvzFDbyypLwMNagwqnLLjYHe3b1kuRXqB6EtCzCiyuvqF9zSR",
  "key20": "3TDTxziCjSWkVnWjJGAikF1qW6w61D68DTZ54KbfkAPHj1qPCtjhGnVf7647FFJQKyt7Gu1QnNEAZ3zjGvvBDQyN",
  "key21": "5mjsTGozV8wfVRXxcfFHhARN4hgdp7VuSMmZzAutG6aSEJv4Rz6gVbJo2mcJ4n3GJKwRE5eaS91AnKYP7RnV7CYK",
  "key22": "2YpBZVCsUE3p39FCCaJ8idu9kghQKi2oNE1YofJT8FbLEnPvs9BwAkmJ8i6EhhUCrVLwbbsm3KCqpKPK3992KSZS",
  "key23": "sgMQ2UzLSahVJHbxcSqaXc2bywq3dMFCa6XSfstLXFnUVrXyxVqU8K5tpdWSttoM5tarqF7QQnvVnEp7D1JbziU",
  "key24": "45tQVr1vxVWwHPp9obftqfnRJnGboTs2sixgp4ewgtafF5zG6yKTrtD4tMcGeqbboUNLxiAMoFhkcAq5t7xhAwKe"
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
