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
    "3dgcgCXDmC6fM3Z99CWCiYQNrMhPEwvzR2oYnG3vu25byarrUmtRLhff1YAsLhzm56gpGjMaLch7bC3moka5bBNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T37HYaaVtHKARLRpRw1jeZHm9PUzz91MU7D5tBg5F7qSDMrJsqJEvVsGLQ1dUkeefTfKPxcPVp1hUTeKhyWBgL7",
  "key1": "5Ang7G1xJx8fjkLK5AG8ZMXHqiLtutotTYXE3MY3djwUXmDdbzbuXwbiGKUBHP7dwNB7FBS9xa1u5EEaNCoCKjbh",
  "key2": "2LQhAxsJHgtbssehadUB13iFBsbBhS3CV8QguZwdxj38h2YNF6Ahf1djHdPZzN1b3gziFtmkTUDFUsCXLurE77Mn",
  "key3": "WXpF2XwKW8ozi7ABZNXD4EVMTsBGYioP5TUqM6DS7v3VgWZXzDbeX26H2UpwWCWoExsshkA81TqUDuwJbk3wHBo",
  "key4": "345wJLHkpcsJgGDa7eyQFwfQd6RKmVF2NJEMNS6kuiwZYmL9tUP161DWmxVR3ayRKLfZUoayU837ChsbQGa1FVr4",
  "key5": "3k2kqs6WK1LJYNXCHv6pU9LDDyo7H4UDRLggDkY5NwRQM1iCvA3RkyMcdazJwHxZjmUw9bZ135SY15ZuHh4D49qq",
  "key6": "2meC2qeUdNofZ6wcsRXeYc2HXTvREZpgviHgKUzPp6785MCTgEDVeW7eQZRW93irjs3pajP3B5wELri2geyorR4Y",
  "key7": "2bWkr4vBSzbuyS1tX8Xcj5gVsEBuTQN2GVFuc3xSESmYdZwoW3PgWWeQCkGv4BzcdknoKJU9BWPZGqJsBo75F5B8",
  "key8": "2sPnNq9EBayGSVGwxE9MvJ2sRGVMretFBCn1bK2S8C2hnYhP2YeG58Pombf46c25QkJKGLhPAwA5zWyLfhug3vNS",
  "key9": "4QgpQw2ZBoCGR1a8B1W7jLD9Q4mynnqj5N8FzcNUXGp5X6g5B1gW8Mu4RrjhmvxctAtCdzHgyq6WzJZJ5U4vuF8U",
  "key10": "5Z3KMp38ZJ2uaEc1iTdWQyaGf2Cma4fjMXqJsnLatZprSqqzfg4ShpfAc9eVUQ1eVf7pQtL2GFkRpPz6GKs8D6YF",
  "key11": "67r2ugF4mE4LHduoBDpDDvtrr3phvMrh9j94zgAFCzhqC2gaE97FCbvXcsuizZQhg4pVZgXzhxt6VmoN3Rx8rqK4",
  "key12": "2JPQp6GovhhAyQyYjhZ5Wv69sbk95LvBmigVRb5yToJQxtbCAwK7sZQccxsPaUB5PWUBH7NHTcBmjsB6fioMAnGW",
  "key13": "5YCUdMHLVtc9LuHXfiCeyrPUVwenZpDTnT6G3QdkhavpKYih39EqhZqkUhMitdJGoFsZocgfbwPLMQAsFeLHJAkd",
  "key14": "EUMiq89BiXRKoBMpvgq3f7hwJoCu2ntAeyCgAp1jpEEMqMjL2pc5uJYj9QHTpA3MHwdxZydWdusTWLWzuR71M6m",
  "key15": "3xn4c554mCbCnfHm7BDRXuXMPWWBYSZedmTeygLFQf2y4bMBeTAN3nzH9BDkSmiacLuxNBVKXKCbC91kHV1n12Bq",
  "key16": "gjdPcCq8cgSqzvgYNZQr4UaYqL6Rh7Uyniwmz4cw2WzrCjbsu5UWgAdueAV8wjyVkyd8PVJg8Jyqzfk8wNAqabW",
  "key17": "5QJmdKrZHEJQuZAQYJQgJrg1ZyHZR4RAsVrejeK21eiUQ8MN1n1wmhbHoM5mBse4jsSEFpjCMEuEjgUSriG6pq3R",
  "key18": "3bFpKGCpg2n574LBjhCsikqjdNBPZ5ZnweHhQDNjcDZs34t8SYH515iBGQo7yTSBsi8zVMKVsPZscy8cYCrhynQ",
  "key19": "287vfwK7wSd6J757yoQHk7sLwPLwkVThatsA7DKfyWa7J68f4753Ww2iAud7FmoPUekFn6MTUDi9v9xALzEQrFBn",
  "key20": "4NZ1ARHA2tmqQjwZuAzstzjsWpbdRLCrZ3B8rvzdhPDGKzuSRm5UfX2fFKAV2zmn9YxRqeGzcoSWRHiMbGjabfaD",
  "key21": "2oxbwpF47nvpxMarMyfN7qaC5xEVQ54kdEfBQdg4G5mWUtmiKxVZ9XYq3GwYDjict21NYS8ddtXZHnGA6VaNBwmW",
  "key22": "5sEucdDcfBZN86qHKh2xDRiq4YP6B2VVSbLBFjEb5qV1rqQGT9pnNygCen1WiScczELWGMEjSxDUQCBNdbShwd4o",
  "key23": "Qs7skaGrA5Tq76wYb8MneZCQZ6Uor3tQ7YVG8dn1JsHLCFtNgT8Xj1FaD86XJdjZb4grNjTXi41c6wKeEtzP96Z",
  "key24": "54yMpDiVgE3WPGHEsoYWYHuZrCgrqpMKppEn2mw56Hxusph7NJki6aMTdBNMaQ3Pk73VaDzhHJf82qhNEuwCTQaC",
  "key25": "NyAhVdjPW9umZQ69Khnj12FoEgs8ZASEwsDNRcA5hka9UWyz3rztoudKJ1pCKy7iTguKZGNmNzeNGaascFvoU5p",
  "key26": "53oYCrG71oucZXGctXdEhHgJVDVSjtjQZQ3vWJJz8qJJtdNjXRhtUSpJMD2JHR8uQtQPTvjxQ8Amx8XSpQi6j78d",
  "key27": "41p35eNYeFF1zpxn6Z4HJTdR6BTT7aeej89rzHebsAkoXxyUHxtKUG3f3vDQMamPtp6BhQCKH6SkRqtHbhdVd5cP",
  "key28": "4feiNiaNhzvs1FVVpfXoK336bYNEAuUy58aH6NQXmRmi21RpvCpeSQivsVtBMCoUfUyRHv8n3wBt3KwywGCoJPeE",
  "key29": "5MiyyERiKM5Xn8GCZsaFS5ZfLBD1jnw7vmrsUiSQMn7hoCS4oqwAe2WCHgjW7VkuCDACqNJKwgwyozeQY19TjqEn",
  "key30": "4X2G9SA9n2WgwwdmG2tmocv1v19LSzL2TkBRD6fo38tTNYb9og9TQqdsmLcYuwwUQtVEgB4GNNhk6X2EkaD3HugR",
  "key31": "22C29bL7UPxhVUKX44ZG29vMBhqY6cPknAEC3ThbfZQJ6asvn7Li2eEMSMKq4gD8KswSurKa2NvnsccmXKeq48dY"
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
