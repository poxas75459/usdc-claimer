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
    "5g1qSWJGjeEvPYPQUB7SPGFyJ6WsLdiA9f1dRhfdZCGEyujLoRQ6N5Tm7fJEysQwuaHeB5fZYbrhuE79TGJuRhPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psF3zw4gSMNRjBQY31dWax2adypPXGwNiMphbbBNZpyrgKPekqi93gX2zbzrXALCztZGfwBwTW9Eq643JRNCRYM",
  "key1": "325f1ywNDHnUMt9g3U48GXg6yr5LiNLjoFLxxkpuSXXyBDNweLNu1jRpgESQfmNYZkAcvTg2nnrVsQo2JBDmgUMz",
  "key2": "Mi4SjxX3ooftMsZC3XzyeMSVhg7Bs8qKtgxFFL9UbV3inngZ33zByJ3yGaaUNRPU2VVdJmYXt5ZZaznKQJFEKcB",
  "key3": "3Gx1zKXJ8zbLMUv4RJLK4iP2FDkRZku9n59fWCBYQ11ZkZtJhBWSK1nChcH6puxBnu7H4qqBcBWmoeXyc4dGQFdn",
  "key4": "2sQvi3NhKsVmpcoHEHM9ze8HsmnRJqWnFLHUmQFha5aKFWXijzAQgVg9a2xuYy7pZrNffMbzB9cWeTHpbHGxS6LN",
  "key5": "2hvks6MVzRAseELwaMUmEQGaJdArupQxbVjaxqAp5Xj6EAXysFURvnu8UVPekqhdhRpXfY9RPPwvwE4QhDNN7EAF",
  "key6": "4urk4UBWWfKuBwRntSojJLrWpowRM6dUML1fJSFxSbAiCAAHqHugJbnFAP4gW7vD8mwMXH81NDt5Rb3kP6gMfFx5",
  "key7": "5MycZRXzB5kSAwCdqwH1Y4tKNLU4hqk8CvzkLUfC9tfjRwkGqtrmaePVDSP1EVKLqGLEUh56BRBMa9UwEmm6TTZn",
  "key8": "3KqpbdM79QVyPv3iaTPsw2sDRudRddScJgegYFTsZSiiYQtfDhRFzR8DCZGf8BTtM2NZFxaXJHr6pwEuS4vbtRTH",
  "key9": "WrjZ2WJBbwLnGEnfMZC98GmdZFaEzF3X4aTAkjJ6UsWngnH8ybfBhEoZhxoCafsJXCrDFSt2kSkk8q2onVYZbDi",
  "key10": "2rzSuoxQ5cqd2FY5N86tZCe2j6J4DB9hG6e4BqWzyLhKCv1JfmkB1v7Q9zGZonTq3Ko55E4hZexvWtwoVErbmhbB",
  "key11": "2XP5oGxsX3fp5Gug3Da1CwYM3JTZUqiyh8dZKw5uUMuFD12tymmpPAWvAyKopzzwUMvxLJW5NCTGjLNscPpxDesr",
  "key12": "4RB7eD8Zy698HsseVpZ77ah5PvtzSa4kXaePoUTmQuM9yR7qBAZ5w91N6Qke9TQiCu6Dy9gcS7Gke73SNo899L9b",
  "key13": "3EJ6TDz4ej2zKTnr6N8ggu8fEmNJsvcBX9JvEBxbN7otTYYezPgz3jzFYg7JuGhmCRECD7K6vLeoJ335K7HMKN5Q",
  "key14": "22wjnbhkvcuqG5j4BcprKkyEZn15ChyZuSHUc8mnkHkeqF2cGoSzZ87iGe3H9AevEo8956QGqsNWJ39ySKR8W4Wb",
  "key15": "3zTKuQWQU5JD2oE5CUYKfAByReAycVhtLEyjdLbKVG7kVZMNKi23zvjy4XK8e6bGMiDxf55s9J8BQqVbs3J7BA1y",
  "key16": "SYoreB1Wbyshwa1x132LE8VKYrPoEQ1Z4DiTpE3pbJV9nJ5eMgmWpyveHsPFssVzEbENP32PRycyUQfA4DW18Sd",
  "key17": "2Ua12nhKkXZzZmTXv9cVHxCuhszsoXthU8bgZJXkV3m651Nagbx3H3RzdMwRr2zS4Un9JycDukGRF2MaWs8KiGJt",
  "key18": "3Ebfmydz43UeitRHBD6b3maYc92YsQDidQtNYh8zrwgvzFwpjviw38Ui1iaMwdUdZjWcpFn3UfX5N2bZG4qKFJ9f",
  "key19": "3pMVhPifTupvof8E9AHEMK7Ei4LwLUpEt6AKfAiGQZn2Hx9ZzVjfSw9daaEXRG1YYudCxVfJC2ScXfp64m1RSRUR",
  "key20": "3bHrKx5zm3aNXRpVoDHyTTwswVAT2U8iNDHkzMLYpL2Ca4C63qvGfh1oFFz49YLJADm17XVNvpidtEj3ELe8jHjL",
  "key21": "YRmNfFg9qwNeToiE42izSoSDAgRgX4HgiZGs3gzvS76hqgy4TYp1ZPiAkxsCsNiPj94cNA22y853MoWyzU4NQnd",
  "key22": "AxNSPfM37RvUDJW3rk8N2LQQqWMiNXUvJuVufrpN16VuXpCXYuCCFco2QXYvszV84UZQXk7CdhfzkTgP848fwyX",
  "key23": "2Wi5KKdToXCDgdm9VjmGTCnZArgCSoFTzxLSwDTtdKG9f1gLK9ZrZ2gT7Zpg7HR6przBD3raCBd8yM1Sg59VpmWt",
  "key24": "pvm2SEpuRhMUWiQZse2HjcN4Rpgy9qG31Nkr9ENQ9QeQ9SNTWaaGumXnB38MeWx1u2dMamQHavWYR6tvoN6yNE5",
  "key25": "2iNjnK8PxEu97MsYUYX3kXRrZDWBndbUnB9whxkRhB84ZtBeoSYXuzudBGqTq6sziQbZAKJ7w7uF3YUUAkMNX3sG",
  "key26": "5K9J4yzGFsBridECCHEvoM5VLfP3CoG4x5aYw4KwA1DdKW5Xu5pHay66kwezWPyV1sTwDc58FkqHr4nzCARkRypJ"
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
