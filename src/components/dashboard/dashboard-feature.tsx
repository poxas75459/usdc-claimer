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
    "5QCa18jnARzgEHHsAmraV2vU8Wa1b5ggRuqYxhtwrQ7V6ottTujqN2Bao6pegUsMnrijnVqYe7exeNjraV56L9si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yvDQC4UPAouMU7DD4zbDxS392AYJb9eiaxnQLbbuHUhZuQnfsqjKQMakpYRGiiTWdajcVjNGB1Hb33aT4H3Sfkz",
  "key1": "4VezP6YRAGdF3eCRmVnFXffNV3xLkiAeePCqrn1svGDvXrrnZEhm47jSb2w7wrMXNgCTMnKS2oC5GVTYCAK3Mt3d",
  "key2": "5s2YhmvjZch7dyVmHdffLpQSMd9C1Mr2bbygWNwsCk9YaTsfNSbFVcvCtgc9L4ySGnW3TAumdGnPYWdGnq4shNGP",
  "key3": "434ybgShiLDBcsQZPkVsCmwTqJNPmMTUsww3XWyDJYYWE4nXuVPMYGbzYbVDC6ii65KCFD9AHVbD9R9xdsHny5bX",
  "key4": "4CbbueGGxTWnsE1Hc94PHFzLzLk3VNdfKVWEHZcHKdBaaXmRKcVeuve1VMghER8zCD6xVh4HiAaQVHBwypHeR8he",
  "key5": "4XqGZU6SUfcjAyy33zGsDun9sEMT6fR4qYdQFtGLKyjUqN1USEcMWj6Q8orqQrfzjHhtMbF6cH7516mYQ148X3WT",
  "key6": "61iWBV4tPifrcqer1UVbDW5uu1gdUtwNQhyzwUBDxBrwTpBSaRxdG87BoAKibtWY6nsnmdaT6bTsFvu5T9u55toT",
  "key7": "4WmZB1FtZDiZYYdg9Kqw3DCPGjaoSkqAwmqvpqLd1MM6H7ki9NHpkT2hNQemcKZnE8QzNEGmjbRjrUoky9dC1r8F",
  "key8": "23hvPiHKCu4xWXrLDRHm8FUqxue3WLL5eSHfaZRUTLEBvrYL21FoAGjjYfb2ZF7ApB92jS9GHmy6Vf6ohbKNn9HS",
  "key9": "FFbo8C1Vp7vFzQH19brc2C8t7vNttHJZ71a3BPGw87c2Dz8dyAc1LSXxMF27g1h3duWs4KH1xjyHVAJcQDe9KJT",
  "key10": "2hrUHoDYDeP1kSWpkeTLnWutg2kLYf17qPnNHMWJLePoLZU9Pjr4waFBRrVNuDzvWyFYFsZH4CPvivnsD9e3edSv",
  "key11": "2bpbQhdi3WZWPe8u5VDWm8Hxts6Euuy5jheLYVftBX8CEBFQvKb4rGpXtR7RCkuGRTi1t8KdJSLtEd9ekLYyDrAr",
  "key12": "2J7rseu17eP5d36yD9L6iFLt9Sp2bnwr3Lv3Bax7vGucAa1iW9jVWDzpZWMbLamgj1148uDif8forsGH1tfKW4VG",
  "key13": "4xCGpLDr657KePzv4wVr2E7L1dx1L8PhSLw1d491uwwBpRNSyNCXzfpaUHS559o1MEJtTXSuzWRfuVGMppa7LXhj",
  "key14": "61sopnCPbPdYXVLeEZFmbPVyfX2evXyjb9GNzvEYAsBdqY1tCbMNvMeZK3utWCLstSEKYBpuA2PvVdU9oQNFxUd5",
  "key15": "252optQUjT7WJ7yPiX2JPGQ1VJb95FM3UCy3f1LDag2C3ATbGW1WLzjYBvt8XjFFHp3CM4udjukZCiAxF5GNCqCD",
  "key16": "2BYJr5uGCcVEcbB5jUDBYQbU6x5LhsfdZ6oQ2RVs2mCGy2gZK7dzhK79mMBjewYZRVHeT4MmfrxDg9qFYgS647Gu",
  "key17": "2F1ytCM2htXDXBdiyHjRTdPMZW4s6iqDEegNKrgX3EZxGW91a6XEo1BRac7rJyxkCFAHDZSgQzMLJsELoySdoZnL",
  "key18": "3xEv8Tpe6hbtumGvqGJp3zGeYSbgvvQ3ZUN4CXaRn25TfaWGDdcE8A3T6gZsxDNxoicY5EQr8ehJCyB6XBmf9xmT",
  "key19": "LKtSNZ6FPm78CZmqubFVuvVUkCgVVfA57zzAJBUfcAy5JHR2R6JhCL2aMZqjud3Vau9escEQ6eHVSnj9ymEYdWG",
  "key20": "ZCZ1QWZFpeM3yrTxFDanidKZ1Trh4pos714T75mojcjrhWuMVBHTj8VxgBVcHUYdrVdicHYqC9R8Ls418pnRNuw",
  "key21": "2CXQkiBwzttHUruXGBAzadK4sGmozA85Jv4SJ5e1yGoHocaW62kEEuYegC26g635Aw2qapzTxTbZyxjKNWkeWL7h",
  "key22": "hjEtnTYwL7Cf9gHWvQXX5t5CuraV9i4GA6stEspAJFjXjnkFkDYFUPp3CnuqpJkyt1uVeuU8Fck3r7nViX87CCj",
  "key23": "3yUqmyNgjGj37DuPuZRSsiZpD5XbF1GCQ9b6TxLv9wBii6cStY76CkvAxjvDBsyxyBd4w5drYS4ms7oS5K75CLY",
  "key24": "2aiy82cuE1vFxP2e8BHMBsEzaxdRPCgKb9ZG8mhfTi68iYftmKeKCwQmxs9HdACufrJZGyyGENvn4SyuaLnbnjhC",
  "key25": "5rzP6hynNLap8qt5Yk4XDkNdJXpKbNLHdSgYcWVCbTFFBxL5JuoJsoxwuVGDE3NcaCvmgHjD4QTg5kfuB7DGp39x",
  "key26": "2zv6ERH4Ty85VZYYgJaNFffsWVNJQgN2hKmY2vyfrSR1nuJpZvC4HTmXxxjTZ5i8xkkYWUzegDp5o4oLVeYnnshQ"
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
