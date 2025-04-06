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
    "2b6ba9ACbKnJr9Brp5WckQz7szcaPrxZXxj4x83N9Jpu8NsNifCVpJmohoRug7PgLYNqr2yLjHDDc8KoJ6GhqNw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45sH61HBGfdK9M8JfP3SiznF1hWxikQzP73y5pYj8tXjQ4sroQgqsjUVSqiyy6dNYVcAtKpotj1Q65BRozvNghmR",
  "key1": "5UKUm7PSYiP2rubotYXBk4EGxNNXoBoGNPmAsvzfQAQC4DLtuKJoZY5BbtevuB4aMLUu7dZJwxQEk54D1JQRngfy",
  "key2": "3m3PPn1D9oTC3v6p3p9dLsZds6kstEi7cTLTkD7ujitWrwizXLx8Dga88YNeq1PFUmjrNJwYjZn1L1edJ7e1hzQE",
  "key3": "5ttUwsr8QfPbskHT5rGqjUCRrUvh8LKrhi5bvoErUyGHc2bXzaryVWJRKMNcYFGWHLqxwxfJbHvqMg8aNzrpPMWG",
  "key4": "29egFT9pThqE1US7KAcZbQafjdygWZiXbwXRGS21hmqii45tQQ6SKghthi8tfpog5hXZCT9KNgssT1yoi1tibnzU",
  "key5": "2B3tNrHa1oVP38Wf2seuuotWkgXxzmq4Cxd82psfXSaq8Ytoqw8Xdv9rkMtY9Wg9vy4kZ4Q7vMTaukAAc3YoTnV7",
  "key6": "4siCnjvH4j4wDTBuvmxsNDCk3rFeyzH3XJdhRqmj3vq2Ecg1QBq4A5ZVx3uHW57L3pCLSJ9FNqVuDsQwNeaR6hgF",
  "key7": "53fMxsjCEQrVU5LCL9iAaXEBseQ6VLn1DWGvbJ2dbHkPDSVXJzvE8aczXvEH9JGjGC8LyP1doq9FuGtYZiNd4qSd",
  "key8": "5sHe2eGkddMB75s7tw8vZWsjwJDwMCsWS8Mgj2pisqXZdhfmck14vQtGqS9SCE3QLvFv8FEXGTtkQ6x7xBKwadWD",
  "key9": "3B6t7WDLh4qiYpi8q1VWW1DC7J1r3sMHymiQyNy8cNLUMoqyt3pejoD5XD4jT4epJNgj4m7QSHZv2yESkR2pt8JF",
  "key10": "5XyqUPLm2JmgwdPs8TKZRhwgReAbG6FQop2AFCxP8Mv3H9CqkiLUJtjwDo6yUJWMFBhU1YcKxUm7CzB46YERcf1t",
  "key11": "3DnrByvG9DmJCSJVYeaHyV58iNLXANB5K2jF57bj8Fad8uayQMgt53xd4GSxguLBKpVrCZqhtdn2Qvog5vGPhise",
  "key12": "4z4GqKahwgSwAXDMLpXaNpnkhxbC8U45Rweu5TatwfbJo1f2jeQujDpAjfztn2EgcM6wY6FED3t9HLdnex2Rc8da",
  "key13": "2Sk7cccBXeX6nZvfP9D983vMSxf3T2UXWAbXKQqQCy69EnotkZQ1zAt5oC1SS8C1sM5jsXZGWHP7q3NaZLgNsbiq",
  "key14": "2r5SNMWXfoLDvcggCKDph2h9q4Yp5x29Hc79m1xRk9Q458BMcbdxvLSx4nhF2vhw4RT7tKNkFhkWtrgLPxRrGDbS",
  "key15": "5YPtyv98MP1xMZi1XNnZ65y5dP3ECgY9VLYzJtTo3YUwyTmiRwZDsGgeyWwQwsgjbUNzCGJQ7sX1ZW1HG553YXVg",
  "key16": "654k8LJdKAAb7KDMctK96BfQSVCvNYCbpq7txpdrb6kJxnbAc9th81RjpmNeXqMcR72CZL7fGxG7U7ZwhkAkhbPm",
  "key17": "4tJ3xwwUUSgx27H8VR45Xp95nXDLuahT6nnSN8js7bebweGtuYfQVs5zA6UCjJwrqZFt2BXfvkJ6ZbkPNguZieVm",
  "key18": "DQYAzAhyQtXSDwepeUrXFb52jLoZnTejpnr2yHG2CqEmoMmTEwanw8aCehxgZqe888XooWwgWHg5EexPdYRWnt6",
  "key19": "5nrU79aSZLFcoyQs5MyjfFgEgqPRM3EfPHjTkbbZVVS6cU8qciF8YqiobmMHpVucMvpfNDGjL3VgHnTKU2SutCQe",
  "key20": "2HLGX2aWnJKqDCgsFZt4Chof4bCpuukqh5KNqU7c9KKDKQRmMWib8eQP8ZnqP7HwN6Mncq1Eu4AzfQYQfDAYJygV",
  "key21": "7FrvVRUWxyCAqT595DuQDAYnuNRV8s2rPqMt5tf8SegrQXaM2YcBa2Gz8AWHrA65yiUrr41CknFHPQ82iLozGXc",
  "key22": "4cxjh5V5w7b9QrbRmTyYoAPLKGrvLT39XkWoabWapxxSG5sqT6MJK5EoPp5W3bwAuaFfqWcSriSR7iQebVZs9TNw",
  "key23": "5kkuqQaXwXq8tmyGbo2jKDMj24yZKv9jYAcAUic5fjJgktsKrD3BCkD6arfMcbBtaupUki1sKHwpoCJmDbGbXLcU",
  "key24": "JnEaETDJFnbN6smvKeTe86AniZE69wPHi3witJdecNJbjhfxTBJztQfDSFx2Nui6uEz71zxkT3uNP6Fr6FybP79",
  "key25": "4oXrDNgJGeXpNFgfMrpogPXFGqGPsRzzW1f23C4TMXSmCTxtyn9bEo9qYUT3Vw3MeoxKHZqd7skostsivAmtL12E",
  "key26": "2i8abe5nv9c5batY9NNsfGoQzTwWEVGxQ2XuHQZveNpGh8oQ7VRh8f4y6k81wfx8darkSBLwYX7n6Ej5nXNh874x",
  "key27": "2koVvGaU99eRSNku8Zg4KgKzNqHZfd91in3YJKUM2HvuHDjNMBQ6M7EFoVZn429wWoodPp8MVB1m5EmTH69zQuM4",
  "key28": "5MnMbNV131htjRRais6J2hy5h1pcvDNLW9iNJW73k5gM2DCAcf9m6CXt6qt3m8aEcgAqQ9KqM7cjNieRYGkGTUAY"
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
