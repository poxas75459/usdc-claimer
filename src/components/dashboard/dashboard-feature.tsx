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
    "2Eh3JFFE9QL1wVYLz6sk9gxZhbWgcAUhAqrvRzuaFic2UEfA1uWm7aWmMywa8M7eP2a7LyEMhmyjzgdM9VRmaTPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJMJe93JS56u6zxz3hBKZnYmPK4QS3iZUagmqDhSvkXoSJUW9fRQznXwuq6xmbmg8unfYZSivEbfeLPRDbgeUgF",
  "key1": "2ez3x7h1umJ1zqmRst388ejGb2EeXvJB75R8DebL2zu5ZtdJER21R2T1oTT5qh3scZQfMtWzGJQpGARndW3wDLLg",
  "key2": "4vqNK8AT3jgjTAptnP8MzKWU3njBczq8BgDCTXdACFAXaVsb1JyemzLdPCsYJDaDyasEkZcaw1LVLXASwVuDZne8",
  "key3": "44wAkEpS1A79AEBt76EmYYkfao22gVscgWyND6kL3j7SjCMabuAmWm84cjatNEvbE5KMLd11GRkbSJwVEQnMNpj4",
  "key4": "5s6LcPY7vwMEwyJQw1E3UjiA2BArovKoKoUkyzPzh1k7nLVHZjcsaVxMHrVSKi4YycfC8m2B52FUMRixozE8nM4s",
  "key5": "36ChTRwVnkue51AGcqWziJXccWh6iQB6ysDTZ62NHUc3TjqM95JY5s9nFnv7BNzwPmrq9BFpPhBqt6Qn3FMYRx6b",
  "key6": "24Vw3qcXBcJzQfitvAzzoqYaw1jKJa3wDy4pjZCnfbJpT4tug7vrjpHfLgbzNfDjPTbpSFw6udi9aHGfbkN6otW2",
  "key7": "d7SBNnCxHKozGq8Tuox4q1UUHEE86cSm3dASzr9J9bgSVp67xQx1PDPXtUqJ12CD18ZnMs9oTkcZDeQW3YZMxDg",
  "key8": "3pHGkq6BZ2NqkvoigjtEw1o3QFqwEuptcYGmp3pXkqMSMDaPGEHK4Xph6F5YZ2H7W7Z3MrPz7pegCisGkj5LE9U9",
  "key9": "bn7zrEKNKFZ9RgbNJMX6sMKWSSDfkhhNXCMyyceg9ZoZ5mDtGQ2j1iNEARPJUELr4KM7uRgSG3W5tmRV5BJSBa5",
  "key10": "2ejjsyFtqDhzkvFKHMEu1w2zgpoWCyws6EWZZd4ptFcqxspuDxKuzvX4M8QHwDm2id4QMbXcFsQV8QkdyyP4rff2",
  "key11": "4DvWLnaSkanCbXPvN17oBatLSSJyH3R4YtHC58zZJ27amLVsY9t7dbnzpKKQY2MqaqzRGgyBBeQcMbdR3Azna2SR",
  "key12": "3hrQs21pUvVLah2CXrcf685SBocKjGEB1yQKBhCFXPQ6Gzun8pDGMtmHsPN6qgsXvxXqNCbpLSHW7Cjz6xNW1Xjj",
  "key13": "21E3tavuhtUjYn2QgXWgXiUzoPL6oGebgUeG9PAtFL3TcBV4x6gqRrceGhERg5akjcTJWw69jVds9Pm3dSy7GoC4",
  "key14": "28LbLmSbGZr3zdZuxAKqkFsTV1Vi9oaSsZJvEwK8HwAobpLYyzdRBtAhW8ud2A1tmTmQCLjJo4TDTY54xqnZKDBA",
  "key15": "52Nx1U1PxcfiXL2aiHUVPDf98MhCu4Zh97pBnT4e2rz19pkchWAaRppjHNNByyZkWCykkDKmAZvaQNu3KuwQb9zj",
  "key16": "3WYFQHykLYAWT42esGvTY4T6EGe4wHbrJZCVo5mAKWEamFXNbySaMGqwPVnbGdRqEPAV31FNDxk3m6cZzMZ2cMAH",
  "key17": "fyQCjvpycMT2CQsVqbuBeWtqetkdMJ9shBZBJzyGQkGGVXcoVGZU4oY3c5RVr32QxomteVwZN23cawSRWYgzMo4",
  "key18": "4Bu23ZVGHkfpMTi5wadeLn6EyFiVSn1T1wy5YgEqaqiNSgHig5yUpYUeL1ib8ggRshwLiAkx8LqPyZPctPZQxsD6",
  "key19": "zmtEwZLbwVvdczDcLXN63Y6FPUfJR2AQksKWMqCnDBVfdmvmLK6H2r3UPXQkwwtcFiET2qgF6qtauXTNgthMvdY",
  "key20": "66gX6UMEGmN1fRoDZVpYWoLVZDabXj4v8DwyoqhD7uDSQGMJWBD9L9Hbh1UDAmpLYBcB2wEYcoh4Xys6siKzFBUK",
  "key21": "3xmfYkgX9APDHDPteWr6u42okmj2no8RajEhWzDVQdghDkQj9kvPY2FrXp1TTtgVXfLFQruFnXHHHENBDwgXmf6m",
  "key22": "QNdVCM3U7XuLVvSF9CnjbXqGprP5q4MvCUMtVxgSvFkhxPcGTbLGbPy6sSDfzDZRyBjEuXgnf6qWAo8DVygqUnz",
  "key23": "2VSQvjLDTsKYrJeitoM3xDN2eZWhU9qnyAdAszeYWbgM6c4YhoC9aT1qFjoe6pNDxZkUFk5iTEFmtTpGfryHJESf",
  "key24": "5sCyrr9x8bv8AfLSRjcfaF7XaRcDv148m7m8AnsMTYTUhxWtK5mX8At9ivmpjZqALL1eoADyhbaqjnv3ectKGo62",
  "key25": "2fKHceZwyLryzwh7VQjEWXBYe8b6tjfKyvrWwibFBVbtV1Xe7UeTjksqFBuCEf14vxQqeZyCHVpw6iJxapwHxGXr",
  "key26": "4hntaCWYhgtAkfL1CDh1MXe29EYwkj3iqjW4owzpRR5vpKoytsZbDx9jk9dJ9CSCzdeZL9d9DJ2RqjEVpZ6zBhux",
  "key27": "5rCPAhP74tnKz6rytvFTEs7qBacihNBNHF7NRoNUfYPRLzXUs9yARxTUeQMQxAtM7MBeHLrNdxqxE44NgdG5hUnH",
  "key28": "5c121nnnKNKfDzzupaUr7sVopJPQZJc5k1zpArfSHqyGFGy7EUUwMQRj5BnN3rjJyaGs9LJF6gxaD1wXuV1CsjEM",
  "key29": "2ZjybFVqnTz7isDTkMFYqaVg9gZi7k19eSvcuipiGYaWR4gyUgksqvUQkmjGMGqfAJJTUTdVFDJRUP5PCTtyhjLY",
  "key30": "BMnanuXdKPJ25WGNxYhTTkXVERHb8q6JsSpeMwPafGH1GUjL3nwMPPLz2iyPA6UJ1qtQBYXoxcNf2Z2XFWKEqAE",
  "key31": "4H2fUjdYotLdnFZGeiczgw5eP6j5jk4nf7L3e7JbEh4sbaXdJ52kM8yPDoMiT3WL33faWQQ2ukMCpPs4nxQSMebE",
  "key32": "38qyXHqvSEtfCj54Jzk18LUEbiZguLE7xhgDHX5mxSiGViq3ykqadgXj1ietmnoRKNRCa8EyRUZerNk4Mixgr5x9",
  "key33": "2WKEMSmoyWYwA1ZUT4n9Gju8gyRDkQsVNytKhWE5Void6BeC8EZ1yNZtA2AmNxBiZEUb1xpcgUX5ULHbUepTtYiX",
  "key34": "5edwVJWmafQ13Gbut9n9FwtAwfkszEqMZdVY7X3LumYKENP8NSYGtgYPpQvHWYHsLMD5L5b9wcFshJHfuFADfBZn",
  "key35": "5xsv2J7PrRYHmVob3FN2ZXx85dCMNsjY8oCdCz4vCs9mwM8YX7PxjwcCD5sDcDSJZZaSVd1tPx8JQtbbgDBBtg9r",
  "key36": "4jTsWruf5U64PBrgckS2byAFKR3QYeoaERpD39QBuEzarZr56rn7DaV52UQw4Df29ZnHeHSWye7RvxQuvJbJHK38"
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
