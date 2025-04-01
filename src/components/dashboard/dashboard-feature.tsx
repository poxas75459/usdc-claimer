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
    "63epvn1YwztKYiMzdTqQL9hWNZ3KkPkcLW1Spj3uPZXDHZNQZSdNmeXFnX2GAScLoAyf2rRfdroZzu6vfJstLhUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7NkwZqNPkwSKRNJhxU4MVXWTYGmTSBH4arEtVt7ynPrNiRGqzLVikeQ7g5Gwehh321juFRDNFwEaMxDMJmavtY",
  "key1": "55yxhXCLJdgozcHhNsCgM7eSWBst6FbWjBMuhuD2GB9cRNJsDRenCSodLcHC7f4LKwqsL7D7Lcm3B9zQk5M6NL6V",
  "key2": "ETAvo6tMpio9PkthJxoFpKRAUytVKGU6175DU4R4rthm9CqQDTBfhoupD8ke4aUfzY9gALjeLGw6JCveaRGrRaf",
  "key3": "5hu1EmGc3FSEjAwQZk8Hy1CFn8Qp9kiVff5p4rT1CKU2baLpTrjEo5XqoFkQfPfunxX1V1ekRwJJuSTn3saLEwBV",
  "key4": "66Zbmr1oQuDcaLtuTy2Qs4Df8bd1PYnxq374Y3Ztkc9cJKiAc8rNB8RxvLVEn8qs3Hj7BEZmCv2LhucrCBSvkbEy",
  "key5": "kPrwwBV37qBCtwhCcVfT1jEMa5epTCSt3fYP7g1Rs1EG2XKhLgkrFb97jEWWVNGoBfT7KD1NjnXbgZerBj3Dj1y",
  "key6": "3MduLx9kLoCEPBjvR2PthGpVLcmqpdnfw1MCUxMc2WSyA6jtupRKHZwngJVZ1AiTDFDNTpvaR2cbgNXAQzcpDd9u",
  "key7": "4cQLF7MdoPrRwWvenGgWwZ4cJv6eNj4W5JH3L1mYhduenDQwLY6sawZN2VM2uRUqJfM1xFW2YuU4oqCGSkuwDy6m",
  "key8": "5J8skZctgvDtCbzCm6pvyFpTa2aVuMdcnPyY4H8GJ2iymbmvsp2f2p7yVE5Wo9MRivY7tmSLSdWnVLqn7mA6T9ZF",
  "key9": "3iZQXMPeerjWSLmAPBvJS4M1c1xEH6KX2GMt231rh11DAdKdRW8J6sAyVHTcMRPBXSdyArKrYs34SNtw2bp3Jg5u",
  "key10": "d89MKyGyk98vSdugpRrd4vYuxEmCMvzPLa4dc8oNSxqJYqr8R5GnAdCUntWEhwEXQ3nmpFB3Zkgc5cnADgubXXe",
  "key11": "39oPrn7zgMmRkf6K88Zck9aZ8qHHZgTX4ggK7yjH6Xb64CxedHtuFayjZ6n7wonV1g7Qto2krm7trDy7WzRisytq",
  "key12": "5pJkCtYLLfJaZ5WyeuufTvjpmDSiheFqby8YUUVTLoc7Yaq3R69rGC2WKfHGo3DGXpSzVu1doq8WrL6FyDt8sMd4",
  "key13": "24Zx1TEnhFDd6RbCaWkJgr7a6efQbJGAa7yo7wFa8MFnqxb1qciuWeF5oobtrfuWys8fC5Mkc6YWVtRMA7JMVxNd",
  "key14": "5EMYtoS96ikC82HSw3mWoLZPzAx3dAFbzMKfXxK6H5q2Lb83thRaPiQDJtefWZ26Z5fNhLeMtAQi5kVPNVXRQzfE",
  "key15": "2Sfn37LEDkqCe8gRteq9Z3MnzPTSZPRpc5fgBaxvqzeH5UPSu1fs6Lr4iCHpK3EebajgryKRurM4CmGnA1L4aDGi",
  "key16": "2LeFZHXxij2AZooBsqp3ENBwAevHAsSDun1JMy1kiy1pJFt69NrYuLnwZfpDTabV2wFSz6GCx41fTDTEC7poSg4r",
  "key17": "5ir3CEm51V2mFTA5HjKnvJGh8B8MvfimpMCwrSDdxVsiBS6xUaychRBANA1YgELFXqGG3BurTMoE6bkdaUDtephH",
  "key18": "5HGBXQ5JjxfvmtE7rMrqE6VUtNNtzcZw8VUXJWRfxr2KdUeti63VLvs19QrU76MDDgHUS8KScABvXF2xHqpeyYvm",
  "key19": "53Q7byXBYdG3183WXtEGbATqY6dhkJ6mVfdjs1AKosvsb5RkCWwea5vbrBrNwNfrPtCgPaFHx7texm62nkkmuvF",
  "key20": "2LoeKpAYhghYw2EJjif3cTD8buVEaozyqYFGC3vhDmH65Fev9wmyakzHtvfXKXWNex9oaRJyETmGqTri6fNGUYBf",
  "key21": "5tDnTgeCHmJRP1G61Zs6pgnTNnhPkGRCymx7CaEz823ZnNC2Y51GWbNzUuqUZChbnQSuiwzGAjBiGec5317pP9f5",
  "key22": "3bguBkP4CiaQJNGxYRzBrKBHtymFsrFfJDF6ioufx4nyMeDHmk5QhztUVeAdvtDGqq9oinEE51AvM7fFWztL7adW",
  "key23": "3bgh8nX1BKWjtVtby8dFNyf76fJWpdmHpScm4WpmHdG4iXND7BPYw4XkoNQEXN3cHBuMir5g2FfxakVE2rfHuC2Y",
  "key24": "2VeJPh6iqakd9wJVtvnbXSLrFXFw9ajPwAjQfzdLkrmhUQVMvHTaC4kmdaY7RJYK466rXowbbVFaBkHvfsm11aJQ",
  "key25": "5UNm3Tm6nGNk35sEbi4DneYL7XzdEDwMSAQ55LgMpjvhYjeMSeu8NajyCkMxXdXpbN2gJ5Ktae2E5PkEZoUYSSpA"
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
