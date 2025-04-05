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
    "4YbJXUwN2QsmGrEv138kNbXN8pkjxXpedncF8FSfy85VHuS8iBHtWzCrFC4DPQ4VrdzMowfeii5b2VnkFCGGjaRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tBwKwaLVViJMdm2r44tbseLrdg1iL7hVdgbNT9JaJAWHaLcX7oBMMLGG3vH5EZQXrB85j8sG9VuUUmQKHit2tr",
  "key1": "22nhZvYHgmK2z5nZPonMbNKpYpGRSmPmnDXaNCXq6Ec44mA8mV2oxty8zAgoToXE4gP5Mm6jH3LWSoEC14aQEy6E",
  "key2": "4AVZhYoRVFoRTPMXQiLiFYEKo1d9TA8xaB5RpoWGXQgcMHasoWAj8uY5cyZTugg87LdG2osF7o38WGQbPfiVBtPw",
  "key3": "4cb7QSBVvvGT5gtvVXhp5HPZig28CvfxYf3N9GTbJktGSFFJwtrADdDhVj3DjEj588Fo1oT9pY2H7f55mtq9ktQt",
  "key4": "5LJ6CGLtJUS1wxG8K9MzT8DqaF8x7zgzqYtz8MVdQ5CXegnWPMyhY3h44ConDYe5nw7YPPfi46DsyUkYRMDxqxqW",
  "key5": "4XyRxhYND5MPtTs6EAtexeGe4d232dUatg9LuDUYW2GVHfpSkFfTFX68NYNzXi6fGerwTvDrt9AdYZXE8hKdWkNF",
  "key6": "2RnHqsxMtcp1yDeCnQeNVC5KKsBrfnJ1L1Ngxc5mJ6gsytmmVh2LRFfargt3iEdfKFP7i7FkVYaeT8YJXAqugRTD",
  "key7": "5R3FADomqp17agzAUeWeD2FA2rbcaYQe2MRcsBBqedwDJDdtCAiVyFcybYTCbo1E7Z4aLRG57ti8EGYEHzxBKxqX",
  "key8": "m8WkPRQA6vyj2abp63wC2eTtqJ8G1TJ6sdWdi23GKZSpatr9FGyscZCK5GNb3JsD3GXhEkhEfeEtiwH8vi8W8Z2",
  "key9": "5sJdz3vDxVrur9KBiFuDUTjvrXRgt9zkwx52Dk6hdQseXLrhnbVkgWM1mTXpuroCbZ3tod1dZ81BLjeiTLarQmUN",
  "key10": "2UkVgj5AY4qbSopXZmfsGFe716hcVkRDZ7fJRBKgZmZEtvVaSKSpCyPjuKPm3Scv6PRR38t7HmgSWbA3RfB36s4U",
  "key11": "54XzQD4tDRbbios6hQR4wefMUPtqGwF7KmpjaGxNizTmkzvnQVxfuitJpXq17g8YNQDZJ8uZWbczzJyodQFHn2HR",
  "key12": "3BCWXF7M3QvqFbZ6sMka9TmzVkus6xYfidxpbHBfdwfvRqb3B2P6o4hKXtdC9w5yvRSXkSx767XFWvkPANv9gXEz",
  "key13": "2V7WBKtBVnF8s2kZnbxC7nfVraKKkJAjJf1CibgrNQqkMTtMtKME6CL4wrRoorS7hgBUJnPfUQdGWK5iKoixat7s",
  "key14": "26GANH5FPALBT4MYm27RdsSWWitBveRJGeoxe7mmQHKkJ85nofwuVjLvZAyPtSpBGFZRfZNbeZNFJJxTEMTYkWpT",
  "key15": "3K4g26cFC2wYeUfLhXNW5Xc3ewtYgGJMb26o9BzBAxt5iEr5uwWzmFuZmA4k7aqLRFDkQtLkjFNtRQDU2L9YjagP",
  "key16": "4t9NEA3NQBbU13mpQYFFEPjkvLEwQWAUcyNi7kpMqH9t2ehWHDC19SQLGvsqjzuKj5sEMC6Xb3v8GzVEHyoxbxjv",
  "key17": "4hXs8RFuJ9gyNXL4JhD7FmyGNTYG6zVcUDgJfxfW1E7TqH5Wqt3J26Lpf5T3j3pz499K5bycMUEqyTSCnRVm5Dza",
  "key18": "4cbLFT6vtLGp8jbbXqLLdzV7hHU5HYm3otRAe3eD3BFaxS1fUzxW6g8TkHYeFm3ApLp7ZMYSj9LbKVLf8wjDwBec",
  "key19": "2u8qDZQ3uRb8fmQoZQqN1C4XicixBmNCYBF28aEgjJEoLM3qfgtbVY7eJZpzDsU9xuxpvEW4DyTBjpTUwHXg7tNj",
  "key20": "5cDHWPXCGqdFtB5Mx5fmkogT7VdPEcVRuawj6eXf2whSnC9MHYoABcQqQXVn2eCvjAFw8qBXKBhnioMkLpKJuFZG",
  "key21": "uxFcCLQbJv6EvVNykeQPRZ49yzFWUNKDdekacRZatBYjHzdnpo57jZnbbqhFKbV88izWqD5cojgNsTbPuNThFJJ",
  "key22": "5L9WhWduDMLvBHnf3m2Z4R5un1z7k23ssdzJJR2ewCAjoYDoszbKJ3AqpHxfneP5STNKWVEC8R8fFhn9tqrjjbC9",
  "key23": "43HpFAbnTFKRf2FmFXon71QRMkstHtFLctXgjJgjSuwZkv7XSmNMvWTSq7TXgt4fwxS4BkwEs7JJMT34YyYEqVdy",
  "key24": "4KPYX5PhHEwV7uRU2FqHAmZw5cjj7Y1zZc3RVrhbwXgxQVn7SCP1k3Yj9KLjEARzEQEoojeJzNHtatDWhc2NFfGG",
  "key25": "3Lh9Nj3BP4XmD2gGZA9pF2SCLzj8DRPZ6rxtrcFTm74EV1B23EHsL9YbrZXuFSTqsh6QtrpJaXjSjgQnw9kahDXu",
  "key26": "24fE3mn6nPuXcSjaPmwNcKabtSeNJ7A1Jthq4E1KMz92dk9yHGh1JcVeyZuRQoznSxt1qh1jCqQXpjPRvXkY2dhu",
  "key27": "w5Q8jQ1HUUb8q7N4Z9WvDHHqgwDw794iRqVosYecHaumCzcSqUHzqJS9ijetW8VoJ8ALTZ4yVmjCVTKN3kaQr37",
  "key28": "5fx2qCsdeVKH3qNcNb2CvUL9bNfoXMF4FgJjsbitsxRZyESyHrCXjCm23Yc2TkywyBhYDELA1HMfxABbarTVqrYB"
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
