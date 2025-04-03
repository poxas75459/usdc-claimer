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
    "hXjbFACEQdQaFEdhwCEDDwjXjJxjPVdTwtMqjmzLqBgp3tS9eikEgfjrBUMy2JBGSxdzBWn2LWYFS9sGRoSJVf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5554Z7tZeMfFHUjY25hohX5r6FEPmDZaULqESy9akcqooiVuf43JCggEWmSsKHJ91nDLqnr69QAv5GV1ijihEyNA",
  "key1": "2gpvUJwNaQT4hEg2SVArz3ihrVvF6jQG3mwXx2dWhryPLhA3bmi1uX9UwB8QjPv4y5m8Ry3rzyr6MbADUPA4yLhz",
  "key2": "4yoW52H7LRajUDX76zfk3Xy4fg2xRTCPnKPR2XcKVbcg7vis4QiYZb3EvjtCVCGgoQGdxqD6wpyGwM2GZWHbFKzE",
  "key3": "pPhE4VgFGCFSJN1CMPSaNnLRbLu7daCmqC5aGFn2Yf9T1dW5TzSpegUumxZE1fEtzraD42BTA3BL4qRdUBjNBWb",
  "key4": "2aKRUuQXMbieHtFiQswhFPdnGKAdv3bfqrFTrJcCyPF37J4Zrr4r2vZMkmDwNfGnj3s8SnrpGS7SGXr5xsRXH1Lo",
  "key5": "2NvX2jiwz2acN5rneT3fpfmdr7F6q74aREZBbsD5oxuvLbKZUwvsF12KZ7cZZtE4bQFJXGQjZCAweqpmrVgrure8",
  "key6": "2WCkhTS4KrJ4fpbDAWs8TKH4rWRyxeUPvuTbeLWqrhd27v9bcRdsB7V3LvSCisN6vyZXm8PX45UJDYwCqiVy5b8t",
  "key7": "5Lqvbbvi1cCbasYhVsqnnmqRQ6mFhg2ohWNHs5ofvovG5dJF3wMTVwCBWtU5VJ58EynwB86kxacbRAYhuvdkCLUL",
  "key8": "2y9cEW1VgNoqbNswaQ5TwEDcV4uqsg8tJTXCZQMRd1hFC897Yj5yw7BjdNvDBN9uzTfrzxgh2Ei1VrdGkt1UKhfG",
  "key9": "5yayzgHkKBAmtwra5etUey6ZPPdgkkzp22LT5Lm2KGZTN9MsQw7aaQmBuFghNdTbpm7um3FJUBo6WjFQtLckugJK",
  "key10": "zE8wPmLBswsjEVbWqCypzNkjV4FBr6ARwAuDRn4qdj3iUCwucxLhVrPBExR19MimN1RCHqKj3tSLeXvsXLKHbXu",
  "key11": "3M4aJxWVYxmH4sWm3EL5ve7jpSz4xx9X71sPxLaDHPKWEoG8BkrQsz9bxLqfcb1pwtME6A6QPSJR7jBiZxYfmQU5",
  "key12": "5rhZZTW2u29G9GJ5Rtjiuo2TmdxMiA9xC8navCSvBeP6e9wrdd5tSbbSGJQ5RTwoKR6SYt1n8ozStZPAYDThvmxL",
  "key13": "3uuGgxskN93Hjzwg5NbyJf7yfBnWSgypHn7A46fAHduvnvYhdxziq9vzdMGyocUjkFCdoiHCYDG2rjpabY4Vy2xe",
  "key14": "WTTexDPiDsTyfS43prmBDr2aHfSJ95gtiQ1C1A1EkxX6m2PMJtyrj3b1f98Tcj8hvTssyNzHeWkWHUXaGPSo1mH",
  "key15": "zZ6FUx7A4fpoYeqHbbPGDGhgE5mAyKVjirWPvsPojdwMhy4SiYm1Z7jovvxYKoGd34LKxrwxemkSHD6h2b7H6gF",
  "key16": "VssDcZw7ftiqjtEwszNZ27gTGYC1jJLRYjrG7E4Su7MXZkfE76iuiMA7NjdZY4CnddP51iaVPsvS519AE8gankf",
  "key17": "2AbWEzvPeNUTbf86BxWRdNjWSUhH6LmAjXZrmpa8oBjAGwnHy9yWjSSfhtdeiEquZa4LyjN7BA29JXfSaGbsWWqQ",
  "key18": "4oKquaVRSHbewxEFRq4o4SSkAsEVTamXh9fmLF5rfNWfm5toDh78NqT9wvCaEUAdRnS7u7AD5N5T5wnwWuyth5AR",
  "key19": "4XtGfwCD8CvPcGoW1PreXwQegsS44rTzLSw5sjPamuQCGVLGU1NrMkCNvAeWxoNt46LBTfNYtyJrwh65LbxRg9eW",
  "key20": "5EHBD8BWUTbnjECyJJ8bE5Zd5hpCGosoxTx9QZPrUore8SsTusYXHDgiQMMWaHY4hndSb1EEQ8JQbLppHAnfHuTB",
  "key21": "4mtNW7XsUHDqKDwGFQLePyKC436rysVZ3FSnNeZqARSvGoMGeQDUx4Tj4uJjcgFfMXNXAgWe7MxXvtEYckMJi7yB",
  "key22": "37rsq9ymGtfudFLmZnt11cdVZgTubJKtrer25VdYKqm6goUNXJci6z2aUJWYkbvKZhvgxpmBsvfU2iTjT7V1443",
  "key23": "2cwe42xrMcJfb4AhGjh4xws4V1TisZsgWugJbRqxxRwEBnvyGSiCY8W1yy1NdsuXvy82LpsV2DfFEKf3iB9QK8nV",
  "key24": "5jXA4Z5QtuuGdojvm47qwBJ1c2oAxmXCNySgb7hDDgmwjEdqaqrYcVhgEmbf5LUEKxfbk7mDcNCLQEJJjHhpMZQF",
  "key25": "4PMcQSKHxyXCBj5yDjjRP1SoYxrgJcJGz8EwBqoj7AVzzFbNNi13XEZrHNLR1pgBboGpE2j6dfxYKzLsYHHiWsXn",
  "key26": "2gZyxq9RKR3XyCe98f4R7YXJLcrTaMKp1EXu6SC8wGzwsJbCu8UuHNqQsJK9W1kt4CU9AZTRmgcpxoJ8PPWRc4Gh",
  "key27": "4KoYYwd1MtiQbv1ZS6pkZL7yGShS46WUGYqHWbHrM4ev5HfE8ggi7dnhYQJYSsnXkRzcknF9WtE23jZFHt77ZFGa",
  "key28": "2F4W9Lx46bDnZzHLB5E4vE944X5wU174JjE4c8Wcj1TP67Vse76W8UAvF9rrxF7TJ1JN18V3ybyWRrLhsWQrJa6Y",
  "key29": "5z2MQHLSRmv6Skn3ByoVEhMBtyYa1Szk2yBjLQ21x5HuWaChxvacuC3A6WfgWiynaDzCf9tvZ7K9afYEkeBiFYE7",
  "key30": "2jLqUfuiwtVwJ6Gupy7vQk8ujXPJ7vtMBUh2qJFeVfsYfqMdrZCVLQdkceizZeQJaDEdJKzrfV8Ta5BxEan8WsR5",
  "key31": "jXonpjLWPzackH69DVJqfHwLjnkPpzwyF88Ya3fsW5hzuBEZfSu6Mep2XRvRE9YnV44tyg5FJKEQJ79zrVnuYqw",
  "key32": "2WAVLE6SekWsdEa8pC1qkeQRRXLXMCXoVmtjD1z58fFcfTmm3LNYPLnThBRjg82qyJoPfQGeXKG8zJ4Q5SVwNKyV"
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
