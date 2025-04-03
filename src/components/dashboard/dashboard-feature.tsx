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
    "3nMX53k4DkjuWJeqdUviXUmrnoDDu7qL22CRcMu7kKUkJMLdaVMhgb9y3QeX4gMhGnLVbUeTeu164YrqkrrGwrt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAnForCQbVhL5SxZioTF5tHDPPbCepKRUH4gsVt1f464uXH2G6nZNUFCcUZ5j6DEKfnFgwzrjPHTeh88yxTGvne",
  "key1": "2D2J1bQtkLg9nzcVQ4QF85Lh4TK2PopkZ8EiPK6uxdrvXsPdPyWVfHQnpFJKuxbyVfWTvo9XCQ6epko4nADNyShy",
  "key2": "4QKu2tqHwGUucGtF1wkYYkuER139RN4VJZxUKLo4cTWKkZeeXXsJ4niYmchqGBWmjDK2VkNKUc42zj25HAUNkPPB",
  "key3": "5SRZdN4hm8pb1ujJGhxQs4VwMDpBPxTzAJ67np7Df7cqYKYNWSs1SsyUqbJbXTvWDRQvwwcuoizdUQs8pZThXXaL",
  "key4": "4SdNCm3gD8y5NUEbe36i4isch6pmdWPceZpQix9vTjtLZQrvPQuUkkz5CA3ESyMBoS7C1kKwGZKU5hexbpUU7Up2",
  "key5": "3UfFzYs2JRGgQ4zmRwmMjtVLRzRoqtE6atnMX6y3bBVT3XFEkC8z4KiFUVBChGAdDP9oMt4pEeoU14AdzHf6cPDN",
  "key6": "HrvPW5rYLPUCqthx35ULT7FV6NsGgRNjW5uK4WycVHRS2kJ7ieQpv9nWeN33tuwDZHRGPSCcg5e52k8dQ1bJwSs",
  "key7": "4LgAFuGL2qVDiyMn2Nmm6UQTFr62ym6if8GbzeHe95pQ9tqhrbtDJo8NivwheVVMxvtMj5AW6Q7BHVE7PfsPPse",
  "key8": "2scymcLxHSDGTzJ6EqoDMWu8R63MBazsh1Jjv7HALt6F2NVQCjpM3S94nNfC94KkDdjmTrMKHvNm9uMivw3tZisX",
  "key9": "3c6bjQ6Dr8upGsZG8WU1JhZGa9HpUXNVVEuLFBtrhTonvnuYc7PabgfiWsD6LHd5br4vLoqSdPm4byuhgk4UkJnc",
  "key10": "4PcW9Ca4FFsiFE9yewvtUNwDWomsqKV75tznhoC9ygLtpZUxipC3TcUiTnuaZMjBSJxtkr73EkR8dHGGWBwckVTE",
  "key11": "56WydAjTDYjvFmL5R1EVcc7MfQfemEPTyc8EYXnpAWGP7LzRc6t5x4ScQRUnsMzMhN1rjpBVeM8MNC3Qnbx2yGbo",
  "key12": "4uLiLkzELN5MCo631AKY1UMBrdpkkuddjp3Lh1wdzCCAC5aaRz8uYnnCPDfRqNnWKQN9Gx8XZfkDKsUNL93npNN5",
  "key13": "3AyB39C58mQpxMVkGo1mabwkVfK4vB635UGVRZsWKJwppDzrzTGxLD4La4jUhuE3HNrJWJeDUUHKRHaUgfmbADzt",
  "key14": "zDEx2NEaqgqK4JTPGdeB2FZmgLoBvYyjSQEJ4sgHwW4UAdnPEJKWD56iAoU1TXjRhrvEd4hsMBmcKQkeVwcGgV2",
  "key15": "5Cmk9QphryBP2JqxJQx323rYW5CvV54AAwLmTP5zeh5v2VfGLAR3Y9TAqHVPJGy9ahSChPAmqhVVLnQEPUxrJATQ",
  "key16": "L8cC9F79AFm9QfL3AHDdQmkHv8tKCg4aQWA4yfi3jW5sskXuWQD2PY6gt6AXNNF3rPCcxed6ZKNsgMij1eW3Vqh",
  "key17": "gF3Ur4fRJYTrVk2ajpvWpKDzFhgm6RqdvAfCNarsFvgDWQ6yeMrTbWNPWV1nB2idt9Bce7J4JjCW6BAdygqLMP4",
  "key18": "3VkEVkWjJ4duzcQahus7a9JVrAT2fJ2M7DHzARoMB29VTphNkXrMNi9aY9G2KLD33957sEt5xVfLhZ6vXFRRihUy",
  "key19": "vuNZgd9EVEMy8zF4dD2Yj842sSnMiPNcEn2Za2fkvRGVXJYnoBpUFvzmMy2dae2fm5afbTVLLBseYa5gHceeeLN",
  "key20": "4EMMwjRyWTnihv33YAddjpcvznA7yLXtmzngkmJ5e4en4RWF5J5xZocEPpwpBT9we3dWSPt1mCAJiZY4hJGuv43Z",
  "key21": "4oGDtJmoQfBmDBBQVm1a6nzKDjrozAahiiXDFrPPVKAM8zV8UNTLQ7aAyP12zCZ2eRhNhE2eDNeKKm2twLcuuMCZ",
  "key22": "McWeuy3X6dwfYhy6Z2X4KN6FKegampTjZ2QsS6yoKPDtQJccENqbSmwdzMWajS667f5hzJfNZ7tMFBxFSdsY2jA",
  "key23": "2qKZ93hFn3qisrpagranuTAC22MrAVmqWiR7LUCHmoVaZxL1sHyStYjfYd9mTUNLkNdpjJDyDBCB6AgWMcSPbdaX",
  "key24": "nEndRQ9QheA1y2Uh3NenCEFCfxScrRAgf25vsmxmDeZHrteVUSy5KDvk7TjHCA2WsjTowveEnBJUU9NLN7saDNk",
  "key25": "38U7dm9cj7Tqwz5We4Ycvs8pLWgTMuSGVbPg4bRpxLgUQHrNScE4HGLwmDT3qn34kmm9vWJYsRr2jnAXJ6q1533Y",
  "key26": "525H5Ht3RqNseuHSkBqL2uXAdadJstJeNm6djwLSbXwxZBB6MvYZSed77hZZWHLeWsWDktJH99xxVA9J1G83muz3",
  "key27": "2UaPzHLYnSuj33ugYFYxnwDj7NMwjtDH6SEeShtXZsxhFjJvHxA5pa3FhWEt4zA1qDzbtDqLARN1b8DSakzWrhDf",
  "key28": "2ftnhGwqjJSEkPhaGejzJkpHSN9j6E2xYMuvBgap471FJV1dDvNTs1WTEJsjKazdcF4M6FmBmWWSsxyHUgUxgXrr"
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
