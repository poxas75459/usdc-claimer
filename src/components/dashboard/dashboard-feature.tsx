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
    "7nNQSn9kqFRe2MCa6XAY2PHkoV9MHp9bgCkRL8jF8EoYfWF4LYPek2Zou7Q2Pz8ND2fjeRdaSAuAHbm3cmDKXMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnUSY2CCUivKmjAsxyaFNUZZTsSD56qjcVEi5Usm74YaimYCNTTNALHDova5fhDyG9mv3YQpiGM42P4BMZEDxyJ",
  "key1": "4E9qYhKJh92XEY1Npk2K3Ly6wWUH3xZLZGtZNrwQHssGpAFDwHo58gKeRmYWSmnW7KAKjpWmTdnmgHSwhLm1Q8qv",
  "key2": "3cmvtrLziWto4f8BMmUiyRbHLEKk72gAd1hbjcenHLJbMyW7h3tgaHN25N3nvEjaXBa1gfuSAxdJWJR19EGj4QYF",
  "key3": "36DrVYsJgqujd7ReB49VqLrzGA4pM3Prb4tdo2Gr9EtCmhySAEmwtKhDipCVRc86DwMyMDVcjpWSoegf86E1JBkC",
  "key4": "5RqjbWTqZo9kG5XCLkHBmr2atxYRWYNLbaLhunuYF4vDnFkLMM7q3zuKSTh8aBuKLQQ7fgDYG6zygh9TX5czPZPJ",
  "key5": "3njvb7b3ApfEy7Wyp6fA7seusn1fjQTJ5e25tpfXh59DxTmE1AvhhXeQKpYVz6nQuY5zjVKh4mc1Q4VuL1VxB5AL",
  "key6": "559VKyoei3BJoPGzoFmM1rAHn2MnAZHZ48vGHFayqfqYdqrR91W6g6ZUCFqT6HN7yAo5YPUSBtY5B7c2YNj9RkC1",
  "key7": "2ag2BvVSYFJqMaTJaEHq3uazFU2PTGZDnPqinktWTKHMAfwWqcehVRM8RMyYNu7qkJdpy35EvLqneAMigQPKgu6Y",
  "key8": "5V2kJm5eqp2iBoTE6HjqGVc1yvrSobu8hjq2fYmBaSZFp3PDztNLzq179orZmXFxdq2HWqFpBoQLzUG1pj49YHsL",
  "key9": "2W4brNT3aVoCTD16NjmzE1n1pv71Ygp1KTfbqrEihwFrwHPTdCFGZ2K94KRsdHnanDTjgwuCrpzQ8KH5PS3oGXwT",
  "key10": "3u8krr8Non7W46AjAA5CRXeTberTeNzDcXtSsBe4335Coe32t6ET3awu7RN3gAtDA2dU2ZBzejRhndtoLt4NFDUC",
  "key11": "5D5dffSciEMLv8JXav6LZcuCMKg9UhcPJziMk8B3jAdxhLdPyurbgqa8CUyBA19CarXESH99szxVzsUNghYvsyS3",
  "key12": "2pq8Vr1uyba3sMh62YKokC6eHeJ6Ckr3d7FYJZsQWYShyTUDLwmzi19mYssMA2g3WexxZZPEcYFfDXueyKtLqTYN",
  "key13": "5ai4frhgjV3b6FRFbnhuLccZnsBDZT8UfETeuaz1JjfPunvCr4P8d8PuHoa7PtLVscfztU54BeWmr9TJETjY6haY",
  "key14": "8s1CMtdEsHb6ZD4gj4cktvNv1VZsxx7LPPC49YRKSEes3kA1GEBk8JQLpsBEwMpdPVqKuW9Kv72A8FNexR6k43X",
  "key15": "3yKA3xyig5phWpELsQCKgRph5m6wnqH3TYFnyTfHixD2gPn6LE8SEjYMzW4eAhCJ5LeR3wf8M2oqDv2Cs2iThxYw",
  "key16": "2uhzBsqSVfutFnMEtEnwEE9zjuPYGXHUQCC7nTWXu5NL7rBf1PE8RVNrLj98RZrSmPQhK16ZmAvBQ5VZHq89M9Fp",
  "key17": "5sn8kshPpWPcadZFAeYnJKE6MfoQRdTLnH4YRTz91PuT51jxM4skfKH3RDCUxaUcmR6zD9vcCwqoYiEv6i6RMyc5",
  "key18": "2rSZRM63dveX98Cdry66t9NTvmhi73pmVRB4AmYZwRAfhiMnuq1KU8c9CpTZuzC7iYjdKv5jgBvQWhBuGucAan5W",
  "key19": "3284hUMET5gW9DoAZFM5hVjstzm5ep3q6AyJuMCNgRzmAdjNsnDfGKdfiw2Xeh3Sd5aCpLEoXRq78naFJ2jgkK3e",
  "key20": "52kRxUiPW3Wb97SmEtqBAK4jWwpyjFiXYJbCHNZdqUHpRQ6XgtWvaKBSonbkj4SBYs71zUr6mqTu4ZoFi4SZ2mUV",
  "key21": "2c6bFLvg26mevPpqaon7q7wNs2vT9TATPUeuktdheE1zsNFPT565HeevCoLQm5mYMt8QkWfWhaSWdRp4y52sqVvn",
  "key22": "2cJ3QcA6X4Kyfo6siWv8EjjMMZnvraUhDXAQjc56x7y8evh3NmcQXCu3CS2Nq45CKvD6nnxGp6wvb1qDDTRNzpzV",
  "key23": "kZtMXDGUDAsucQKHhsPiTfYwNZaams5vBW3Bjz1FT3Uneu2woqx9AD6pZ5SR8oNCxQoyXNe6S1WzfLi2S3dBf7R",
  "key24": "tyZszrocTA3J156XZ1QRaDjB1wN9voXSUQDEqSn2HqjbSbRYffDmiuV8okz5wJno1sCq9ZVxsWGH5n53nGpq2qa"
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
