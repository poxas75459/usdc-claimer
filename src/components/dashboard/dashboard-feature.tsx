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
    "3KMHwE53byoKz6Edg5abYrwvauMbS8FL47u6Xk9AR6ucxiWfVKJ3nseqfznwjKGuCyPB2ZVo2sfPYtk5bEJdx4z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yBLqMPjD8nEwBDLWavxQBMKDD9LiMojjuMvrX9WJxPrLsXbpjkARRBkfSz7EJUEzbuq19zfoGAENz4xV7ciXik",
  "key1": "5Ziq34a6YdTWDKBj3dC8nPj3RPNhdLh61a68CR9e4Zop8VetDkLwNUnDf855fZnMgjKhvX5uZ7H2bkDy6rRjhmXi",
  "key2": "5CEb9aPquccrHxiwTone9cBNegWdhmAjmcX9oWWQx4KKaP5tKE2cwVkyxPJPLV6RA4EScGAHAJTNCA8udE3biH11",
  "key3": "3tC9vp5yPthYwM2tx535GG9AKdFSm6YGGBBYA3VDEUZjJfes3xb2AoaXEFjjCgVd6zPXswaT2DP4LcJAdQH9a2Jq",
  "key4": "4cSUyRuSacxjxfZZKzx94ERqjB7KZX4JvYnp79xxaKZrRv5TfgQNBJBgf9ddtqz1ixWcte78UJNiHhoFc9iybbP4",
  "key5": "46gCf1UZgAmutPZWoBJt5J6i8zxkSVMKZMhAH7sCMCDReGZVFay4pMFdJMeDV74Ljfx8kbwDZXbQ7L8LwR9T5ZDU",
  "key6": "4vFZ39FEahzvcW8Dq1TjYfNUc4qYn99zN1AWKiedLTXzFFoAnZiyqpvPbPt2fiyR56pctoWGCHHswHkvWEJEWKTp",
  "key7": "4KDEoDbCcg4zScBXQzMkNsCi5Q37TALZgj62w2bPiCsbJT4xjHevATqP3242djwtKucaADUJ23YzmVEC6E9M17Lk",
  "key8": "368tybiLP8qgCFNz6crgFvsypPyHe97fiNFGvG6sCmyf6h9YDHSSXjhJPbNbFWdv2Ly5k7xEL9iWELjD8neX2HXB",
  "key9": "2S6vEegrx7WCqZjnk81cmzQs2ZehFT4ZqBh73dYy2i8QWJTnGWWknhndPxaXg1Yv8Ve58hgYbB2z5mHFmnx5xQsQ",
  "key10": "qpKk2dAMP7cb1Wk8C1VPbgzBx5vs78nZcdXHXs4Fy3TR8JYpFgEMhD2ZqqWVq9FsZiyQqtgvUKUdVyxXeUt8Dm5",
  "key11": "3QioynHpfhsaVn8Ef9xJfdMDEskqnUx5T1x1rFzjzatM4bevRGYjARf27YBsEZ7LJ49ThbZfvLktRL4TMWqkPakZ",
  "key12": "2L72x9vbqxbkNSD3gKv4GvSKGwtyg8yied42ELhE8jkfkzczoEVdbmdvFCmuksCfgEtjKcYZeKqrRLzeji2dpff",
  "key13": "5fa1hSEhvufzxd2DcsCrhb7QJpf3BZzFdXdY43JuvVSur3CZ1xycycaT2wL6NsmVY5mQgvTasV4hALhNF2NbZpr2",
  "key14": "41UYgS7KYMkDYzwr2yKZEKWWDzPzpepQ7NM2pHNU6rGbyktS1432icYgqDRaijjCTMeqH3YzHh4GAbWmRSSCKXCD",
  "key15": "bUBhtuqA77o1vgDgdYgcgdxQuvbTNiHBHSSxUEcy7w4XGDBxGEjtMN7ikUba32BYMtqmTjreM97DqJZpJvLw6mP",
  "key16": "jGthCvWx9Wo9bKbW378pUTwVfESbGA2cpSegZ8RSgtcTyUaoMfXmpjZeJM3m9YeMpoLVF6HdHTHbSsjxyiCDxxY",
  "key17": "ZKgkTYhsT4ezpgACoHLMpsKtaJbGnz1gu5PvFdLUctLZG38g8j9kCPehqoHBAeUHJXaquardqR2MCwDdrxMNYrK",
  "key18": "3T9xcmfFV2kgi5wb2E7d1XcoE8iT1WmEiU3Qx7ecTTxWDueCjWwY7eCdrdmSv541tTDqZiE8ZqMk1ehWaVFcdCTf",
  "key19": "4oFe6Jwr85QwR2AwTS7KukWJNKRrrNpawE38dEcjckMf2FkrXDZ6sStYCHBxW7jDwM39ckm9EwQABSFRoTz3x1Y7",
  "key20": "3BoNDZaj89yLXKdZHTfG8GL4jSf7Qn1hVSstbQoM7djQgsPCWR5D5gKsXXdrASRvLiTSRjDVQM3WXn4QN1cjvXsc",
  "key21": "4xS7NtPppARcLEKLhaCdAXPQnZ2pui2uXAFbwn9hC6kKeRcHkUK4yi19EoNs4W2xmSsMatKZ7XgmQYNUwsdtS2Yb",
  "key22": "3xz52c4uCGYjijsbNnHmtA8QbSVWSRdsDkNUaydaiK9WixEwzE5e8TsUizAvFc3nYYt9CucmW8JLdA25jioy8xJY",
  "key23": "5s9n7CZ788fNtETua2ipujukfdV6W3kvrv3qrdkL8AusD5T3CrWohHCR3zSmHsnvtnEARivkPARpsaRc9Thkdt3q",
  "key24": "4NKTBadaEp6KHSGH65Kdagn5i3xxLRJ11iNmShfDZBmCiWUjGctTR5Mt63A5M7hjzHqNZGpm59yPZDwAQdKdpfQg",
  "key25": "4zoBALN7DKkiYuBasV9qRWZLA83dNnXtv7bnkXQBfMoJa9uchBrmUBSma2zA2JomjqjVhKRuCBxKMQTjRGUj1gpQ"
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
