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
    "4aeSCvcHqCtJcDKNANf3zZpTKAP8oEBTXDbVgGEBWmA8UnkZCHJAfzgcvoJwi8whSMDLJtWxf1fvbni9G7Qu2UTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EskjuiY5VWEXxc3w5q8tiavdyvX6XUGj2UUJaVNW8vnvqaeaMyDxk6AadGVqcLY6xB5LhYjzCFasppsgDXSAgiX",
  "key1": "5Dw7PUD6xDjZ5QUC4hmey2XbeetVH44SxLHGp3HB7W8nnyP8WWkHSnpYU5M2dLBosY1RSBMJCgnu6pTCJKWxNmmE",
  "key2": "48fY8JhK87kzwU4uo2gHNimz2HCyQGDHXUSKMjgsPpUJSLprwkDdMqPXceeBB8zWnMrt5ybdUPVJEwCZe2MuvLYc",
  "key3": "3t7VShbMFrBLN8dAUguTNC4fCsoo95q1tSMc8Kr88WVxVntKnhenDvagDGaCeFQG6T4Cs7bxZh1yLVZTeij73VvC",
  "key4": "7Tmx7Rkw95Bb3XWAF1qSZmsVQ8h5e2AeH8TSCmUQtRtiVKEgfarKvWG5QmVv2nSEMdZpzwEuez1y5wuBvVGKHqE",
  "key5": "5jLce8hbvQu4ApbXaDuk8KwBXiqr9tTt1vLjfBuwQBTkJK5Jdmp7N5FtccerGT8bYQmR5XZmV3QGYSq5HU9TX2Xo",
  "key6": "3ahkbULwUfM4x4BFbhGLyY7sDQUigMH2qE3cqQWEW8pokup3peQg6qseUNQWxrpYZUpeg4oP9FBzmgzrmtQWppfU",
  "key7": "4zxHbmVrYaNykU2WM41jMhL6qCFEokA7tgS1CSNXXJXEgY49rCC71jwdF1zyeaQxeKwhbLdtbxHyk3zL6Ti5vqb3",
  "key8": "49siQPovYDeULpy5KrJUGHULSVaCC6jFzCaYUYMiHQsFKt6v8i5MFMb86sU9L6gozwxJ6VmL7EgoeKBqV2mZfdrU",
  "key9": "2oeZz9Kz7Ja9GeNWXq61M5UfxsEVcaeowG2A6EB8FLDM54nFGgVx3wPizHW2SSkm8PXRdbGVQeVXKNvroU4StE7K",
  "key10": "3gWELpxA6RsQx7np4h6WGcgsT5b6kg9Sztcf141kxJ6tgv3G1NAyRQBpnPWY1MLHDWJofvi3RMmZRoNSkqS4wMJ9",
  "key11": "2gxPRQeVdkcbXRC1JRM2jhguMnQcBh3XnNdCJsbvgpZTtmyYY69XTbe7FMpPiXrVHtU1XZkshdzFDZXuHCSTF4Mw",
  "key12": "ygFebQKNURe8xFBein11v2RLYtLdrXDuUsLjbpExY2Wr4GQ1LAPMxiosReuLuDLy3zUAr4ab7in5w6k252BjK7C",
  "key13": "4Zaqsp2YJipxczAQhWKjvgUjj5TJdSqzqWkUH72rJ9BczofNGdwpopHhfx1EZCYeg6wxUFAtzR7zeu1RH7KmqKLD",
  "key14": "fLBbtex9b3XzSQFyNDGRrkzEGWFbBZSeGq2MiFMvYoW9VPXf1h4RuzwcpdBs61eUA6TriEuMS3jGJLa6ktTiw2Y",
  "key15": "5Ywys6u8iqqmPTTkfwYMGEqk3v3TqkwFMtbFULAPfWyTitGufmg96nQY3ZiVjFMvjb9Egs837sq6mN5iSkLuSXsR",
  "key16": "4CQYiN9HBCbUdNeEb3QawGBpyxBdTXzNpSBr4ANtywzACF2q3sbkFeJ55Pt8Ez1WmANZsAVub3ZvSYLQB6oNgCSF",
  "key17": "4ofGC14CHRDEzP3DZVumYkgfYmFubpDspEh32BNwWa55stbjCtGL69eHknvHZxhVcoxMRmvxyMyjEy1bRUueSMM1",
  "key18": "3iiqT17yHhLcFTREpYfAgA1b4AtEvJa4wVDRKyZRBpHLbnyj8jmff5RYa4z7uF6gu8cxybMd711Zv2ogJqoeoSoM",
  "key19": "yu118GBY5nLdyuMWKJrFyY8d9WbjQgxYemkYenVzyeaBPJrZmwBguh4oyExzwvyrVGRFrqpzWXuUxzQgnaJzMom",
  "key20": "hMGhfP8W637MMupJnQBfoT3H6YBsd2PSYSxtb9yufS7XFP9Tb5xTJVSzgjhUd9GwLoAuPKPF4uFnBn7yzmefokD",
  "key21": "CwT5maUPijwyDi3iQj7j5bDv7fpEwMxEsrfRt39AL9g8BvDW6e1JqqwoYzfusPHBtePNxeWZL4tAapRUZ5zCXaG",
  "key22": "4ZvSEE3mLBgCRs591656ubKocXswgoU6Eeoz1tLLCAN59iWK9X55B7Hr5nWvwwpH6zFqyG6MdevGsyUDH5sNCr9L",
  "key23": "4FnghkuxeXXcgnuZpkEy3Ffm2DtAbEJ2wsuDHLEo9rE4qj1ktMEMJs9AtajoeWTVYyBeU7ARvX9UrCndiGKR1Udq",
  "key24": "5k5qcbdZFM6UGo2tbZ7omCgcGTDEz4cYbhjBWoxxXJ6XbXvo2M7mWtwWGqGp3KRotwwvneoUj7oQ4vBYQkqLRW1P",
  "key25": "3TMTsf12rEB1zxNezaQbu11s7YEmA6Yrstm9QHxtsruRYEKuo4mQXUAX871T2gVcgPDu54FFxGTxWidatUVzkeYu",
  "key26": "56qrNsSXFmRoprRjCLZ3Hs2U292pwGtnyLVxDLgv2n9PXfp991Th3jmBJWzu4d8PpVZsNtWyYeqY4kBMyAcBZDg",
  "key27": "63KiXjZmrHgnJc7GPoicW2gt18jEUKEjmCpm9bho7oK7MmidVnY8XSbioK4wLjC2sK86aRxctodbKkPDBdzC96n5",
  "key28": "5Y4Q8ZTP3oMkZPHsd8pei4AWeEKNAxKKU1oBPthy7SgiBs1HqbxUPkafnguXwSVwrk4dtZiQTpqf7DWTTz3zudvF",
  "key29": "2Nb3WBJSvZr89Nv6EiQwMLbqZZrp1UnDGXGzEH4kS2ojcdeJ1VhdiKMw4bLbQvE4v1YseMNvi1DexWWJpW1seavS",
  "key30": "3wm9S1vtXxev34WmhKok3GknV1JuXfF4jejXSbBcGxhG5mkQ14N6ng5uAh92WDYC4oamkioueqdvJLQQ1HzQakyJ",
  "key31": "2UNDCx7zxT5hBRri4YGT1abxr9gPE6nDXawhNw3AMYTTqqdRYWwfRmnUZdTLFypD9zrgV4egz28XhEZxHzPNp9jJ",
  "key32": "Ry1K4cNftZUvrBBAboMuzDiC7afnbuvpabo9VdyVRW1VzDVYJvwEcatnf4JuxJ5C1MRwYtK1YjzEebzo1z3NnQ2"
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
