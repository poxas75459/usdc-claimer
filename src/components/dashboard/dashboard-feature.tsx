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
    "4Rx7a3jnbf8CoKD7sTfyQatrtHboAj5kEWA3EbfiN5eCy3puipWEYyu37PyQmCRRFyEtr7wpRaydW17Jwae65daL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJgxW3NSEmpUn2pR86xnURN9BpKD6hiicYm3xpFzJfeCAqphQnxfAgy5exEaDqXuCwinX5EuHFPLXa2V3f4zK4K",
  "key1": "2kzJy4TVxmLSrYneHbUHhZufxRNoqkKJEjNonhWtmmbQWbkUTj79ZEqeZsbCDAjbupV23U7mdxtUimhwTpto1jft",
  "key2": "5J9xngMW5Gxr2MZ7hqh3QhdfgJundsbw2kJxzPuQqu1FrxKDMxJVwD9VbKvQ7zBYFi2QSqFsjTUhKVTWsJfbgUdS",
  "key3": "3M9usmNpk5awSQxoU97aFcb76WoQ3M46y3D3r13F8BiEuM4D1L22zN5nXTm3sHEFqUa2afQnQRqBrEm5jCf1Z3qD",
  "key4": "3SE2jNgGoowa68GDoixUohS1HPsafHdWu147Wnjt42z9DBgfkyBQLjdbW2UubPeU8qcyChYdeApK6C2k5WL98rY4",
  "key5": "2SQMj6XWDr1Rx6AwUXPNYzv1fyJNpHStRXLVi6Mm3P4XRgrw714EZMeGSPxXwy2vj8EkemCbCYb4CGzi2Tt8vNTw",
  "key6": "2SUvw53ekHe99eEpggXcVHyKUHu5Er2to2JUTEtS1B3HMFubE3xJGo8pqA7cxCASawauqFk3U5gydsLzkgzNjiTf",
  "key7": "3ELzHQJ6Gb3TtsgVy8fZVHHHr4XqTbeehwoBepbBnTfBUBmqK7VcFVkwfnusekcMNHSwyYdikfWzCqFUMTa962BH",
  "key8": "2gXEYsySncg4qBKmsaH7hWjtKim1EfAH5fhkJw33JTjdJNSu7bM66etw64UqPDEz94FhUovmaSqdNvTakEVsvpDs",
  "key9": "492c26mP1Js8hDiMAhn3Sz1FzCSZnVeoLc1bQCxHgUi3SkzHjM8PB9m7sPMW9MmbToDaALzdhj3TD8EPBs4CTnt5",
  "key10": "22EmYJhJzqRUvzwJngqwuFn7RWg7VBs8oJNfn4PTZXPHhivUXP6nTX9LjQ4LJhNcFM1CFrEWTNtPkKYZLkKHx72T",
  "key11": "4q3psypsXQYDGy6gZkEF4YMtA9ktKV38gHnFFEnhpDzEggpJKyjzqgxAkPRM6Qa6a4jjTEH1RgV1fKoA82npAxXD",
  "key12": "4WQaGuXqggQoNpypPVbt69wgyreHZf2fzpa6Yz2n2ApYN63WL7BhUVDC5rw9mP5dtuUuwUVvoBhkYcF18npUBLy8",
  "key13": "35UpwVefq182k5rqqW4cLnynWxTK4pNiMRELkN6hP2kwtSNs6EdAaomxnpepUubENncWMa2PLtfztYmwhxzPHAuF",
  "key14": "uKL1KhWaWG4wL2hG4QvCA4YCeymzvwnzG2i474ivn3eupBBZa6oZ768kDG3yKqKrdabJzv6icMAyxDzB7tDBuaW",
  "key15": "5RwJYfuQoDSg4TFS39YYrrBYHiAMGbWCp2YPEY3omYkGnNrQkQNmnrD4nM759eX82AmKth59LWviAEVQcJiWqDPn",
  "key16": "5B9SXXSjVGX17kPhUD6t1UKgs9WhyAa3S6xE7Sergeq9BZCLrwVFBEZY6spfZy3ZVrznB1pEjawBR2BZraK4kKBF",
  "key17": "4TXqLcJzNQaCpGSyNbXctnCLZFwEG29AA3iMcWzhXbvcSdQG8GPxN7U7oqingUKJgLhjQphykGPZrXfCQTWSRJsv",
  "key18": "yhPRbZAv6VckZkA9WExS4ayVfHtxszT14cJNqJWKeUdUpirwudQC3SEaY2AKdTt1pojkMfxwcGukP83q1Y1J2St",
  "key19": "2u5Xx7QwvWEBJvSg8sYSw2njqrb8iLppNwQmb1EPospikovEatgs96zua8Vv3rcbSCDSvsdLHBe5R9SzoozPwDHo",
  "key20": "4Xgp1YixfqLn9gZLkxpGrGtopNRcgnvezN8CX5yLZ6oj3BzrfDrBSyP8h1LCFamc9i7W84EzKEK4XXc1psXZnmAc",
  "key21": "3N32eSaLyikcVCLeYnTVYmz3eSPTXA3oKxL6WHwRw1Wp8ojWQVv6GoHCGPeqAAgVqo6Vhii7g9haV68nj882Ln7M",
  "key22": "4db9rD3i5UGkaxvpjAL9xQKvem1JM1Cr7gXrMj4GLuGRU1QihvuXYGLkDumgndy7ZkuZ84pKFGzj7VugRhTb3iBF",
  "key23": "5MCz16eSNypgQYrqpmWK4W5hdGh3qGEq8TqziDaEvKyM9p9hE6Z7Liuh7muLw9M6jeqmmwVoZmrzuQ4wW1SzdjxG",
  "key24": "2BQqpvA9rSr5AiRLixqhr3vs7oZsgd1WTdxxd5m2jPAXExvV2kW5HX6SAfXT7c8pGKhDwqL9F3y2SNTtuqNo3QY8",
  "key25": "26jJ3a7sf2pW9iZ3FJWktGFQBsverUvJzSjBvYXixg6sFvsjUCVJx4M9NiHZnW89W3o8BLtG7C16tmddufmRL1Wy"
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
