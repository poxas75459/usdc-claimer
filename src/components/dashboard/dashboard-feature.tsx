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
    "2RexwRVpsUmZGJLQsVNc4cKHCrTafxXL1hJYZCHuyFAVVMK2b4KQxBFqsMpqvZzNxCeE9ZK99DQ2FkRBETqVQFWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkSpqqZMM2KnWq7wsXa1xBTLTQjctPVWrdJsjKTzuuwkGUyNZvyoRwXfdyZj3NBsxz1WK9g7PYL3AiPNbmsNYG6",
  "key1": "43WKm46kTgDwua9LEogfcup97GtMtC6XRqNyUMpFtZWYDEW3ffrhQa6aAFj8JDFq8sU37LC2F3ZkaMbKFyZSMSZY",
  "key2": "2YNtFHxjjNzthU7r2LSHmTWs1XhymkCzAsYKhwuE4g4fPJG54pZgtSHBqTEWaKej3CaMmVZnGL68S77gx7FzXraJ",
  "key3": "4m78DSqAv7mMRGYzWS3HhbpU6RhBcQZuSvugdrrfw5QmYE4LVU3VhjMa2ZGkVptsH5Yg6WswtZN8Pr9ADLXs15sR",
  "key4": "of6A6J6msEgSaCcL5Ax2tEzJphDH9wYJ3tLVvRpz4Lf9LD2C6QrR7nSLXtEVAnxLTgMousVd94ToQXj6KuSUvH7",
  "key5": "457ZWJwVUcBG7V496DBFF8MVoodqUPnixJTRV4FSKMCcA7sJmGY4PP2BrfYGKRSkjvVC62iPjiq5v549Wi5cDibf",
  "key6": "Mo3jfCKx6KfBHsQXtUZeDEa1FGDN1AXGda3kisNdj95ca1tz4QD5pWfBxphjicfKxyXgERjAwxL4iHPzjCWggwX",
  "key7": "4AgJxZGy1Qi8hdbKxzksisw4Fq23Z7UPbnhC8FLbe1KaPDEYScYNdWZMwByc3D5U6S9XKjgengABiiLvEV4DAzVN",
  "key8": "XHBezm4qmgX2s5Didh5BGux7zb6C5QiYv5ojVpdNmbQMyJaUnancHmbn2ycGubQAw9VtuJ2fLKaZh3NAUVKMiLo",
  "key9": "3t2GjV6hujVG3CCkoK199QacoNLR25WVEyA45UrggKxzo6nheQRgD3f59F4F7nxFtnqs4D3i1u9G8AHDLBCSYtcY",
  "key10": "3te8t3ruNTVQ1FnuBFb54RvqixKXydBrt53ZrdpgUTTtvn3ME2atrBri4N2JZGzdHaUGCkCjVtBBaDaerCjHFauE",
  "key11": "2dwFUYviRxXBrcrt83qgn5NJHJpoYQjqreZMk6ZQnxcB2junmfEXkAnS9C9HxH5fpqv5dghPBzj48JumUKMyFg2T",
  "key12": "4kAq1ZT51VrEXndmfaftuD7tFpenTjNJ6ZGuJAvL1ALd8gsXnxSnKQ9hFWnmbWE72k1yfg4jyuY8PgqWt8kM4NLt",
  "key13": "4PS7jKAEmircQkcHzoHheJMCp9fFwU6iLrvBRbygN2uRzxqJPJgtDgesgvRXhB7xrytDCJCazaFcHxD9c7ZgkXBS",
  "key14": "4oLmqBy8qySzMYPSVD2Qmd7BepBuKLyxWLVH9fmMeLxfR8nLvvyobWbFr6JtU4ekAjadJkbuo34SEujneRTDWZ5Z",
  "key15": "23uaCC1xvEM591XehhLv9p96FSuvF9VCjSmJv2p8XyKovXPqYNCJ26r891u5goJJXgSnR4oW8jv4DB9yQ6qngZMm",
  "key16": "4MoNFuWPDPAsPSyWtmKdEncjhxdaybBJSsCLJp89EXAt7sXuUypARpzRcovrzX6btZeHCHkaSi5EM5UsWEEMgyP3",
  "key17": "3DJPVWvb51CRkFBpTCrqwaFZLEkffzSYhFBNDt7pF13vSMCt2t1FAfmVccdmEXSaFsEgK2PEGG4jGZ8bg9B6Xcir",
  "key18": "4igGNfvCCen4aj3xvDM4CLxVShLtRWtM7EaPeQeA7RGcxMbZ9uSvnkB5beeaCBSyF5MjrKjrWB2J8gAC8U9yVrjT",
  "key19": "51qqSeGfFqvpDvmUmp9Lxa5p4wFpYs9WPGQDsGu5wud7qQMghctsnvtGJAPCFB65GRF5Lv7Z2okcwkHw4rbDSBeq",
  "key20": "2r9558Zur23QAc3N7H1nDtnd6Z8uDvEErYBMJv3cMuVE2E4Wz8xtDDwRNGfKK6yCct7TtoBQFZWy4tVBe8F6sMY1",
  "key21": "E1gqH1GMwDvcmCWnmCKFSzVenaXyfrfewC2g6TyY7pk41m1dNhcNZ6c41DPs1XnfC8FYL8qLXLyacB3yAwaPj9f",
  "key22": "27FVEpDHiteHrLKbop59D9CkGundqwPm3ACjgDJxbr9bogwdP54hWQb7sWUwpefUjjGbxmZJQqRH1wtcyaBWxSmt",
  "key23": "23gkEcaxzgJv4BtXZSb9kQcoshaCBdX8uJDcKQ3mNGzmmkLSxJhGwUgEWk3oZWU9DUwvy9HT79BJiWFhFaacocJf",
  "key24": "UccnLB14dBz6V9xqb1NzMh6fQoMpgZApgcMXQ22nwsMqN6DEAZPiw4j7WNBzciiJXmuqoXFzcXCmCmNSUR4vt2S",
  "key25": "3jpgQANPMbr716KhMp6cmmguXP223uw8VMvjYWKm5AGJR7GhQ8g4x6MigsctzyFQvwChV8CQGkCRv5zShyuA6TyP",
  "key26": "21vQ7GeAyKNQmNzDFAznqnf4B74nLVk4L8d3x86X9xEJTa7xpWmMVeh3PQ7hqa59cteayguEffiyciwZMZuUcmp4",
  "key27": "59hee6VPzG9NZLXV5KZ2hoRRre87r8SQ2XREusHyvUftGbe5pjFeNvEi2nEbPCpNWa8GfAtQpgAzjgf6STcmw9uu"
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
