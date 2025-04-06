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
    "pX8VU8yhnYMrS694Nbg1wDNghXnmurHFT6nCnxikfSLsRCpid2AkwqyMkqkdMEQF5UQC2dBpiDjbHTnbGM5zATT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWr6rFduojrYTQD7yS5XE5UGLqnWpJK2ed8whD7mr3sY7QVtGkSqC74dDVhxH23r1EusybFKrbZsDuAM9pLcQrP",
  "key1": "62h9urdLAsswX8yTx251eaorKrKwW8SmJsg2hMNbdYMwFLw9dp4G4cjMMPKaAGRZ1ybckqQvoP71ZBDeNUQ1Wiin",
  "key2": "4LWXuAaXT9RfqoBo2CQh7GYSjvuasz4wN292K4D9UVz8JUzHsefyz68oBK5ciLEjqApCndsnzxJ499s44GdjGj5t",
  "key3": "5dD3ssV1FZM2AE8YpjAFuGonJmX7Qoxm1KpS7y3U8NCU58hjanXkPGRjdsYVWy2LTmed1MSkbhgx7f8xGRwUhQfR",
  "key4": "5Y3WJxGXnWFLusHRCutakFd9ks67iSTGEnDDm6jD3TqFPgdHKBJFkyT1TXqeFh85Eg3bKis1uz2zQxBjAhoM1N38",
  "key5": "4mFa38CGMejEA3gAenqtc5FeftaLoUnJvn7W4NguzKiqK7WdYv95BVoVvEkmxwxs89u2roodBxcM4G7Rk5G9j95j",
  "key6": "3oQgKvsC4hBdSnWyNFDz3aMnCYwpG9nqSvhn8rw7hFEHrhAC3Mq7kGcarn8PBhet8WZs7F4xyZ9uyS8ZmMQEMsfX",
  "key7": "5wPxbyyW7rDytuB2XhtoYPc2xKPAdijNcQXtcTKXtqFxuU6K35AeXp3pKVR8LpvAFsmqUyM9ybJu4Y3jAEiFV3x6",
  "key8": "4GrMZACmae52yFoYqfC7crnX9vHoRWqVzp5jMk5HG731qFQoWjfse6QVyv1PncYUmY8Pc7TsqZwoHYmJ4YuZ9Hty",
  "key9": "4aGcEa6DWC8RARN51vFyzi4FW6WBcJHDMu6coM4MgoLtHcUQrw5uHQiqmi9xa4J2ZhZmFHFZEtUPuHV2FqR8pUfJ",
  "key10": "5DYBwVP3K3GAAKuhHDu2t6gREa7jbqAKFAbqBmgAmW2XkmSxsXxKFs32p8BH4BRaE5fnCBrXUHwkLBLpkGHer2Bu",
  "key11": "ePXEooNSveKQYS3ijdFQCRVqdf9TCDs2Lj7ePDiSfTaShk4GGBUayYHZL22stnMighJgSYq8u7UeSLkCHfgujwL",
  "key12": "4tsxGCaWJF2pg4MzKKwQBmN1HuufXcCnGGpWqRrufNzSo6qkqg4LiFzbV8P6iXmDzJk9ji9JsmBVK93r1BebVUo9",
  "key13": "5AvGJWExfwVCv57XqLVwySehw9iQDq1BgSDanFDZnd5SoezhQwR1DYTRnrcPrzG1L74vA5jp5NGCqzzynoLrtu4",
  "key14": "5GnfryYu7eCnPkSi7VEqHxWeXPFhcYLnRNxjpdeqEigwY4a7MeZ7oKeeSFng8UtmnBM9Fsn4gmJx55kvcY3ro2Fn",
  "key15": "4GxoJUmSfykNrtzsp4CHrUP6cDVKYfUDfGVmmnG1yqLha6TJ5FxfEHCcmaymFQbiZDUjo6tR1dLxejbBX3BreiZa",
  "key16": "3eq1Rj93jkQvPmC7tJzhP22YNXGgTvmmvE3ASLi7RJXEtZxvdLH5xY1Wqr9bA8P93W422q2iGGjN66rhS4NxbN7Z",
  "key17": "3wa2ZukRQxA2wdLfY9GKnw4uKgu9Cg4CNRmwfWofGbPFBfRMgX4UdR89G2sx1JoM7d6aTThK5hiEnfDqBhZtucqD",
  "key18": "2RcvrQ7LW2okuc3frA3zEXS4QD8DnNQ85BN8f7kYRuKfkg5ykEFTW2fLPy9BMWxzXD8F9KrD2616CZuV9NEFhJEk",
  "key19": "wwTt9n3AuekKjxndCB3nhFzxVtULU59qspZN2j1xBMorKexjXNDnKZW4JiYd7VKvL5UhzMQ2RPM9aX9Merb447w",
  "key20": "3hj2qNojftRg3YYgTggeAV8ZirKWf3bpQW5NHePqpFWc45QjqoJLkCKzodbFePVrh4GWYggoKaiF9PmcvLV3NRo8",
  "key21": "uiF4UKmGpDKENmvrgi8PqUPhqan2Ti9qG4cN1omA3Jy2SW9WLswUCmaNrM5UfDWFH3pzJvtEGpmLmn3jjXJ53M4",
  "key22": "5LpYdRPsD4kPPKYbMUcGBaYgFw6JscDg5qM833mjdqPSkaC9GK4shLPUc3s6UnvK38UTckGHyrXAQR32yLwAzSwp",
  "key23": "4vYnAvVekBoURLCNkybqN24G9Wa9ygiUP86R9PAXHbviVeRT3wzGUqZMu7aZiWKigKa3hEDJi4bJcxGkXZGcbz5e",
  "key24": "5Y5PN4Tw18BTVSYTVVb1KDR8EDVChuSy3967qQ2fYmJVT4NRT6hAiRoLW198y9VE7rKfeyX2XLqhtRh8TtgXqTmd",
  "key25": "2JLoGy6LNDCPaocKdWVXgp41J6NRbJKZgDkMCPdcf4Ge74myGiPEar2C2uWXauhySMUD8MhZ7wCanGaSHfMeTha4",
  "key26": "jbgF4Vituw7hN3BWMKAsQqqCMruQMc8A9zn1w7PSNQ6BKfoGk6E4UQg8Ycxy6qZsQU1xQYmSXqG7C5EZXiiA2nB",
  "key27": "2xjVBYa5Xk3qqGj4ig2czPtRtTK5Zfn4dsARvjuWFs59DZpG8Q1EBtfsqcK3cwYssu2yRaWDxhtGVNiVKSbMCs5M",
  "key28": "5BLVr1rA8jBiWAy6W5VjSVqeu9K3eWXjt2JcyZtHaJoWTCYMuWscNX4ZCDr15F36qS4i4UjyB8BB7U1sZG3LFfzJ",
  "key29": "ssQoryD3hLwC9mkb4h6MaNkoQbbiyP7goB1xX2wvstqs9dzTpMpVP1iXtcZjtmkQqLBMKG9KhY1SaNPtmK7rAFf",
  "key30": "A3VY7UNQpjwFLdjFDvjeo736pR3GC6c6f31awDLWF1i6xAvcCanTvFjKR9DXe9cAAMgnWrkXUSmJ8WNtMWvCu3k",
  "key31": "49DaVZaCzXXhu1gCSiMQxo2bZiqBA2o3ZZrZH2GjP2qTvYV8eDmrHYJnaz5Yqs1qoRxEU9kXkZpSBCMYJc3Dg1kb",
  "key32": "3D2ZJjjD9GsTUzhCZeQFyVXhC7daUhWkBJZLHZpJNrQDsDSxGJLsfgZWX4QLcS8kUJbSLRdLLJbC7PvA6xEx4zRs"
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
