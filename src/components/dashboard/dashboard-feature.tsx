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
    "awKvTZLVq27MjT6qzhTZA2ERUUzD7LU4mXCt3dRZvEACzve7uu1fgPgQt6eKCZnC87NwsVqeHP6cnkW8JCVFZkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uiCfxkKMFb7cN5E8c5SR4PjQSyp7Dhx3SMt7bV2Poope1sPab12d4zj6jDyMNFm9NLPP5zHwVayc2aGBbkue6Sz",
  "key1": "2BuAeNtCc554CmLg23nGgULp3tsQnhKaakVscrr7P77auWF8xynjdthSc7C8hZ8RKhn2VeUeGevAicuey6WfKEbR",
  "key2": "2qFZYZttac5wXguk2CZ8GVvbyxpKmqFGufLFJXMb9W4tqKiHkhNTk6V4QvryeN1YS63pFKUnMX9B5yg5MbHRCfe1",
  "key3": "2ZEuMZPksoJFkfdTHFQ34tnYJLWikAVov84pxuCWXNpgQkFQ395cvTsR89A4YBWK6Dt6EDCe4Qgf3Pf5nm8gRLsg",
  "key4": "4A1aj62mhAes2JPBk9PKRt3pQSWQy2DxcvCkQieA3w6i6dYEpTTdPtTekHS2dDHt3TTXqPmDAieRiaMLsR5auMvQ",
  "key5": "4FMYUmftsfYxAkSifhhxhqpmYSd28gri6W1ha2A7aoqpyVfKB8xySxkKqZhDhFeETDJS4ksQjT8FFQEuuvr1zQAU",
  "key6": "3JJLjAVtoELzYEf6UaFba1Dk6FRqrRDVgxKEmJjbuQWgVHvUpoHMWsXV3KH2gDm9KqZdvTWjQwFsvW5wF6M9xqcJ",
  "key7": "2ByAsknwJgf4LY6VniBKxz8PzYqamRBj7ghxfA4ZKsUXvKPYDVXXHSLqE7dZ4ktRnwVfLqT98xCGVrEycHETvh9M",
  "key8": "4XP3cdZKKc8EkghBtdky8C72PEY35jxdxiExsPcCZk4Ux5rCGjxjMnw3JnJeh46oPj8FyyoqXpvBLtvgetwpcGU1",
  "key9": "aLXtBvKuUUvVX6acn2pDg88g5yepaX8LNEWmjGtGYivQdtxvrynt7e6vbuoxaKTCVwRg6F5Lt5XHQENWyJumK2k",
  "key10": "5BCuh5LaeifcCyjSQ9HjA2L3V668AXWfTzkGGXGn3vGSPQuoNFqYKWqckP1xqSKh6JnUoJKveviTh2tgK9GegaEs",
  "key11": "4a5jntk7CRNxZfRDgBK2UDd6wgAA4r5v6FHZJz2CkX5uwSFKdyMGqYhx6H6cLhpFpSUtCdDhT2RRs1K6jLT8tCp8",
  "key12": "yeXApAcDFtvsK2bdPuwbRjRJMuHxFrWAhfBeyVcZ9HhTBv8u6BFwNY9mBa8RJv6rMkhXTWLuJejaCv9kkQ1rAw1",
  "key13": "5Gbsd3zwWMqqSVJG1JLEsmcp64AdmQP4YSm4ywT65Y8W9ZHomE11UVBWSnwkVQJKGer7UnGzRxF3osyNL5eLTUJ",
  "key14": "46ZgRfYB9Y6dJ39PXMuDpYxcvft9qDy3B1FVRP84XdFVJsGFX4h7Sqwtt7Z68JTfrZee7f79b5h386NX9zXKG2te",
  "key15": "TbL6dEEvqFQf6LfNoDMU1jSQwqLXb3NGUm9ouTUd6aNJ526nRARLjVH2mnb2cU2CTfpWm2A5YuZVB9eMpAMv8ss",
  "key16": "54oUZAvurC273AmDxP5NYSrozCaaL2AemFmM7XgQfVPgfzVsMaW5mjLpFjLWVFMUFQjuatZHusDjAFoUFiKkvj1b",
  "key17": "4oU2QVTaA3p3muEBUDL5MRStw9ycRL4KDwTV6Zfdw6kMVi2xPFz7BGZinrerkeUFCztkGJPCsU9fCnhEWHYR3hMK",
  "key18": "5jEPoWG6HHnhKP3jLzmEcTyxshgfMjajjDrsd4jpPgb14mUbSRkbTULyZ95ztVnivpGAEwomVvMMT19amE2XpcjC",
  "key19": "3cRp6mQFhYzvVhfY98fn2qdY3W8UHDATPs2RsdXQ21XZFcMKZNkDqAuoU739P7b35VonfBYgWkjhsBA2FwJS16mU",
  "key20": "2NVf2f8KhPPrvEnihZJd645pEuY2j47gefwYGcqwXUHfvC9vdScyi3cAmhKaKmNZZXNyEeAvn7x2MpcLsRWFc3zN",
  "key21": "3gAcEe1M3nDbiVwnGSZkW99Mpue7cTsRjDqiNQmaiptv9nweUuk5cnxZrWL1gdYaxnHskwGoYvfMU7Q4Wpuf8KnB",
  "key22": "48AmiBu1kmrfE2QPdcUQE1tgkbfdVZXMEmsq8ee1MFaukZG5FECau6ThYegALf5cXu9LBUjbEkoRYtm5q5g2tGjf",
  "key23": "5EZcKoBLv3TtSouiCSWJzoT9VF9fyh2V9cAbLErcQnWYCEQPxS64b6wZdEMPQk5ff68J92BsPXR6oFj3nmf7R9m6",
  "key24": "3geukGnnsuUmh1j5YWzJLHLAigXLRmh1hNCppG3PynfcqXwVHuJTQFnx3WyLTmqNnY1xmwmKvAhSvqQKWwtpswo3",
  "key25": "52Z2ZR4E957LL1q8DutCV8cgZT3bAAGZV8id6imHr72MRffReQHNfcRWVqQRxU3Yfbyo2r3iaxLryA8ky4vbqvsU",
  "key26": "5sH6kCLawM9h4B6Stao5JFKESS9WzDtw5M2gHJV1SKHbESY28ngzDYqcd9QtdkA5ETVuN213C4GWUBCfjk7LgfEj",
  "key27": "483suYzQfuTnDEQvdWRm85TEsxEbNwvwKQ5Q7otXkoUWQ3xzqthKBaiEvRyPwiLd4dZBKsCwbBoMtZnKCVqkPx7g"
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
