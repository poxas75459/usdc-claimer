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
    "5GLXTXWoFakiCAwyKwCMqTxcbWDPkNQkmg3hv6iJGZaExUwp2geVPrX1H1ApGEiaDGrqigR9C7SRD7YN2atyFcZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmWhnC7zpGPdMQwgMZJK12F6WkCtmCXgJbhxULM49qK7V83LxSHtfnf77YCLySanqDeZbYJxng4ZvdpNq4fWBZM",
  "key1": "2k3uYYo5qczMk5n545b8YQ3QguMRfay3dZsHxrzwnUf2Tmpg8JVyFnFtLc98f3wstzrS6yBu4QNM2HXsV6csoRUQ",
  "key2": "2FT9eN2dXk7sY1rQcDocG9wezcRsMgKKWU2f59iusnQTjgpk1GqpMarT8RuNajJ5kLtuKvHTpLu7cwyYZqXQEvb",
  "key3": "24ceRQ2GDu3VERcxzM49J8yqcFfmD4X6AWEgYynkwBDdMF3GmmPYv6cXwnpe34wbGZYKCqHDJ3Cmw3Rbj9RvADmK",
  "key4": "2J8z7BBPadLVoWjtDWebKFuitoV2PXQnmW2pieQ5NJHtHRzb23QU67GSGQs1NmAHtB9NxRMcsYFWEK1bYC3fJqLD",
  "key5": "drasUywfjkzpkGGFnh79dRTDqDa4yzjzc77vEJ696Wv6h7Bd5WpZZ22rfRGsXA8bWxxNbAdPrxNxNRBy5BUPKkZ",
  "key6": "3CKTZbyBxHgqMfpKoTMjr9pdP42pA44ctfABpFBwtD7G5oy81WJhUwByXXPVCQ3y1yDWybDA5BHRJrckA8EsNCg5",
  "key7": "55BxYM3Z3HFJLr4ZgykLfHSovrNAFKauiARzURfq98Bie8oVoSVrSsLyUnH4y47qJKCVeKcCYXWk11bGMD7zTT8j",
  "key8": "zyJZtCr49L2RSqj5Ls3cVRpYYgAYoAmEta6amYDa2YC3xZ7oV8Gv7aAFyS9SpjqBHQEWAUgYqi1rgxf7RC6eNYC",
  "key9": "3ivChKEH4sduPZ14Nq7Y66155eviLuwPvkyK6F6KDmyXYzjCnbCJPSGQuqPaXFtGTbicCjXpJCH3fzGTEjVaKHkc",
  "key10": "wZJ6KZxdRh5zU6zpvWBHxetewMRL5wfmrREKrCJS3s6irjqFKQgt5jtwY9MQUTpVwaNvZpptu8BD3F3HxWTVUp4",
  "key11": "5gV1DazRjpyis3ZM2mnnUSDpg9TQAuaawDbJHfLmf4cMwQwggRLnZ8ykcBjFdJhwtNgDzecEz3hsKn6q6fBv2KhL",
  "key12": "5oCggukc2drfjpfqXJe3X9EyLzCmeVn3rn1QcvMkZd4BQRSyA3K8b7vxfaGQpWT9jaehr4ipyBMgV7ciS9E4gJbj",
  "key13": "5q9w7ag8hQahApFyxyjyctG9dM8gBojauGWpGs7WWQLZy6eUBNuAeddYr16o9sdBatSvMMb6goXvLbCXRB4zk5Ab",
  "key14": "5VandSw9nn9EGp93jKKsP1f4oQgEnbyjykdvx8HUz96wkpdHzyAyvTnjz4TMtkZBy5qUBd8rjo7Xf8Xzj1jZMvMr",
  "key15": "2yB67rXtbhkT57yTvtdRbHrpHycve5jRyBtrZck6RDj1Lg6wfeoMGzk77GB2sbfzRYSQaXFNh5UCFi6oP2TUNcSZ",
  "key16": "2gr9Ux3aNYedLxCjj2fk7Tu1BR6HKu7m1LsKoBFRxTCaNYW6bbBZm1yZWNkTHZXojfWuB2GPd1b8cDzsTUkoXNdV",
  "key17": "rTE3Qo8pRsXpmZ1hrrm5N6C7UFtMqCYkzdkoC62bEgsDX6hQnpMZTVFV3Y2ePqJYAJxuZVwqNMgySfZZmgYAaBN",
  "key18": "4irytZhoqkxUFKEu4b1ZNA9Bm7x6E6AG5NhieYN42DsgQS67LmfPDHnBFm1wWQr399YDT9GGFWUeyEgKU1weC8aD",
  "key19": "5k6wYhKpMybsk8HJAbaowyEhqmuL5Lu6aZFsyGs5yWrEywzX458AXUzoZkmTeSRr4qqcCsCsxvezGtXXmwroTm8x",
  "key20": "2FCzgZSztN6ja8vovXod2DUM2u5yMnoUHdvVBxM2sV1SjSacVT8wgT1R3P4VR56TUYZbtfK6Wwn8cqiTzM4GedDV",
  "key21": "4SSocgWTaCrgn9eoqD2CPJ47bQjvLRxzWM7KbYYqHGfKTDsMBxaKHvJTEBPQDXb7oKuTgS2pqWUvxJVM6LzYAtva",
  "key22": "3rwMBUDVFN2dP48BAVTPgEyKLc9XD923wfc9pZ9HbGsT63Z3LRKUPRHNzDAyeiuzwKLYeWdAtstG2W89SnN63f4n",
  "key23": "4J3TRtgTyBjL6KNk4UqeUrdsRouGUZJ5QEMVU8fdcyVB7hhDZTXEAHAv98ti3dDPmdQQiSL5HUhrkQfTuExQhSJa",
  "key24": "3pHJkrkfxTgVoYSDJWcr2F8wruZjH4MyBXXpfnmrN7L3QnCdEk6jyohqhCNbQQweYMZPXGsUVhaeHS2vT8p4Jrzs",
  "key25": "357KXCX6ss9YRyjbgNm6mvtmSG4WJLWTBSwA8hApafekjCpgucDtXjBX3S58h7aBq72A3JpX2jq2hUG5NpaBFKE8",
  "key26": "4Ku5tfgmo1117WKcrFxX1bXVGoFS47sUB2vWZAeeAgEBQ6FcTRJzLbpmYgiXZieFzabKkvBbWYTesebgGKSukYZn",
  "key27": "4eUMuTgpB9NsYzU6word6n29Ck8BovgMUEy37RUfj7FizRPZGrg2hoysZ28D2NrXDARnVgh5HuBQyGoxnezZZ3Qe",
  "key28": "stpaxLKVmMbS6HG4PTtFVJrFaixQfWtsYCGvcmHJiQoBsLvXFPNxLSneQGNh9TbipdDcxHADzDrVE3e8trhwBnY",
  "key29": "5ChNah6525cXNs1J9x6fg6TyY2CpcVoJoJQKuuAyBEPi8RDvpKZcD2KTPaju9mkmsv819PWi5v8ML1vVQwKvBMFX",
  "key30": "5FxDP15pPz6EUmGMvB7rLo356TReFFBwSgnBP1zDtQZT9wir91KUaDmqzvCGJxZWaWAurPJPcsDH9YVEeGkFZ2jX",
  "key31": "47HNi4BBT4jncTjYShT5FkN3UcFG3v9YG4nj3NmzXVYQ2sHeVcJoswHSetswRCHX3WBWWx4Q312aZNWqdGD5J6gd"
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
