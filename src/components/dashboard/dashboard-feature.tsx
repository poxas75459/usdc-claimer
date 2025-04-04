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
    "62rwnr8NwwXPXmkDpjSLgrnarB3ZHVUt7NNAJmwwnWyro7GKFwXnSe4aZUS2TY41G4mz8zy7Bjz5kDErPaaXfjPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZkZYUvXXrLbRdYJaf39hAJytUFEgcKatAmpMfJcMNZZbRVnoXbhyh2TWbYMpwazVGprhj5HoveULeusK6mSfx18",
  "key1": "3oZPdvGh6AgmiVGn3W5SggMMYxCk85j2Y1S9a21PrAUHVbbGgecZXyZkdE5J4SVVQK8HkFqp8kmP1tejrCrRvNt5",
  "key2": "2BZcX4BFEdokmLdoFqETxHKftrpYEVGo3rAiq8y3JKypRNCpzrqrVjpSYBTtV3tirewG9Si3sinPhfXsHqndb6js",
  "key3": "2RoQyhrfFcCAMNTjrjYp2KU9XcDssV9ZdKp7z4fqJrNJL4BMwG6ZTqU66BjLRgQ5wYbiuJ3pUhZVu3cYyUZtgxP4",
  "key4": "4F2gXAjBBvJvrAcYEhoyvHMXmQNLCKcwhXtvXJ5PSyAywiR3xGL6jjEwEj56djc1Go9oDGpmRdCbmrkJp96AV5cf",
  "key5": "3Ep5UfibHb7ZB99cViCxTMYfVPXWhjuKgKFph8XUd9A9tfURgfdc38ifHaQooK7huvnagdXx6NFt4p6zKgXJNi81",
  "key6": "34W29U8vnoSTbC8AcLqLr6zY83M2UUr1cxwjXgxato7p1UineXdH5N2URhRRzrzGwk95PxZfRVC2BULLxrNwYvW9",
  "key7": "5gZyTFeNFN9TLnoYTBSMdzoNKWHFG9JnfBppSfkcQni7GKeoCeaem52ENMZSHenKJ2yiT3ZqVvXUsUQtopMzHTGr",
  "key8": "2dpuBLqVo3htgwyRoCNXMjFCQWKWTRqPzKJ8G2zrs9n3L4ohf4JspUZDHEHhnECgzCfgHKuJ6MMXT4wFL6gGMYBi",
  "key9": "5Pj1nyu5iTUz37gJhCuGFrT7WXQoaFCGegnjSJiqbKqdmrMv9nk1dncRYmvvCevTQhEH2547WFPyAjoX68ykxa7W",
  "key10": "5ykJ8AuAzGcR3YCGJEeCnYv6wT34EcTTyJmh5DQeQxVd2ZW8QxGXXrvkhyd6mPJyjwvxMfTwk37gwgv9FwXT2WhD",
  "key11": "4EaQzu1PUa2hPSzmtsCbP9gft4YtZtBamkv7pRJxRp6FabFj2RBASeV8e93s6xDYX3XpJ2ZEsot8pLL1gHBa6Yf7",
  "key12": "mJdioYU1uvbB3jv4EPpyGa4ssZR4kgWJp4Wa7pDnZksEuTBLKDbqx4ABL6dDJCuQRVYn2rcbLkchBYJEEcdZd8c",
  "key13": "3zusG5m1ovdt3gUUMJoYbPN4vivtvohmcAK9P1JJZmApsEZFJjHuinDbEf495xs6nbadZhYHpvwGp1E5ZE3xqXbm",
  "key14": "53stuvHHJbq6qHWzuPnSD2NsesLYj7a5k91rDiDKGGkFWedjhsNpPxfYqY8KDUyLH3kUzBLAhxBCj8mun6mkwoWy",
  "key15": "3HLMThcFnu6SVgvLUBKxd5SD9kg6r2WLjb3YUSNvuArMDDSGridFXMZgsC2CSFEWv3KgZfWfnEmGaw4gidoP9gTy",
  "key16": "8LtvtWwAaL3meXMwWHMz3pLtyZaYamtdGWPJjHEvKt1m3QCNkB2iYLLJSbTVYZQXireRhGv7jumCyGQGzMMGAvC",
  "key17": "3aoaAd99BTCkHs44ZUUwR91bEZcSPAebtH1GYNftHchPuTyyBBGojoJASMyw8VYQTqFG4ELrMRZHTMS6rVDy3y5w",
  "key18": "4PHP9b8RUQtiANexuCopL9RTbmH5BK9GxwS3fxRXTa1GaFinggDqAxBC1BXp5a1CK9TnhkyE8kjkVRciwPcdFN58",
  "key19": "2Nq4NbFmBMAweT8Pyz1ZAqd7X1xCA7QgVypELpr8EYeUTTcywNRUgHZGLe7fLS2DHUgRPhM4okc1GDGJkeV3Emav",
  "key20": "2DqnjU1Ce3qyQwynyMMv7Dwq3vVUi8kpU2x1qLh4V5gJcvXhKc2nZREz1FWMmmGhN8n5Hq7Ku9RgcY6j4aojJHnN",
  "key21": "2GRscjRF9DjXTyJizjL8Ke1boGzkPAPZtfkKvUKEvq9hV23DzHu93zn86L7DNLhDhE5N5qhCx2MRSVkJFkAwGkHr",
  "key22": "47YpsosXDXanDecd7wY371ynZg1LsbigcGXPXBn2BhwjSF57YMEkdxG2FYhVFJWsxNcLsb4aizeh7N28v4wwnT2S",
  "key23": "2g6HLpbS54uri66sGmeiPf4znzBgbJFESxdEV7s1XgJ1YafnhyTY8Jbc2pVCupNt8pKhaY1KP5Aytk1vQGKJRcCp",
  "key24": "3f6i19mGSSm76vCnZmu1nyUePeGrSAcssTKhxenRZrQAsCu5FxXYWtKeH6f9bPw97dZNtHh6hrv25dRB2QiHoALw",
  "key25": "2Rm2o79ZpQ1yCnX3hZNTz6kd2U8YkmarYCGokxT1Cw2t7P8qPuSaxMhWTkMnKn64zPwe1ejgcufXz6pP45d4Ftfm",
  "key26": "3oZGenPMi8zTLsv2XwisXL2q8nGSsc3PHjoKsFZurrUgFQtRDpQEw3AR4Y94xrK9iaTp6AX5k9SnF5WogB5sSsWz",
  "key27": "5cgxhPgQsFuwzuW7JWtRUN1BjKWGZwfB3dMubHJrzgHi222i5SZ52use7Qsp2TvtiE68TtebpzHPTVb93puLmrxX"
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
