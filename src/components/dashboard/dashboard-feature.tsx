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
    "3Qped5ZkbPN8Qu1ngqaRpsJurwhyrC2RXa6v8yJta1Qd232yXzaMRyWS1SDzZEtx7omnj7DXz4PjZkDLb5uS9NjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KESLD3iVpkuveL32HkibPqUDjAUrMWvauKD2DLYJULePqJ5wCLj7DqnhNT7yBpTVgEhijf3ZhaTUQxmnqvUESpt",
  "key1": "2cz81FBZVjJZazfgfo4xTMTnGf9HYpiBCMCP4grAUbTiuTx75Yi1UoqAt2bDdqNtKUHq3u5ZFJTsGZuHTd9LZhyJ",
  "key2": "5bGCb7CaMyYQx6jw9syqTJ2qyqLQnk1CMV9NG1iHYHkfiwh95epp6WVzg1fq5cW6RWaDKYzD1s3QCniMqCemYqWZ",
  "key3": "3Whnay28j3VouFNumioqsUxN7CrUSHpSScvZekAFbC6xDExE4djSMgBjSHr6TyY6xyPHoonao3qHBJifsngKxorJ",
  "key4": "4vgkNtmatavE5rrXfP7U5kMKHsDH6sXoVbWBcyAXLocdd1zf4F6mzJHW8YwzvmsJsqinNwLaE8HohGWvF4z9DH6t",
  "key5": "5GMH9fr5ADLw6Wf6hc4sE4T3Lxr5UjkdjpQxpkGdbsZ3aC9S3FD7fKqrZXf25Bs7GTTDhV2M6otE68SYarE3HUYh",
  "key6": "2yvXu8PKc3uYqnGBFhSbkopf6qU5vdi382vCR9zjUdCi5269SmH1r8AtQWgpdpkstdMxwjVjCSkf5iciFFXNWz37",
  "key7": "2pMWcSqx4TaSPn9mZaRXdMytoCq4YhS1AZFNmkkY3kfEsC1CtgMvb6seJ73WWLhApKrmJ2Uzx5gWz64UQq42iirv",
  "key8": "3bMrfRNGUfytuQMJF721FQkysFkjgwSuLfUbof1LdyXcpv2fmd7aUyDyjeYpAKSyJdHYUAktCPZMF8ZLCPracWQv",
  "key9": "3EGQ9TRNMdpmvcJ32giCF7NptZZPKerVRQaWes9q9QaS8mrwgJGtWZoKxsL2oz4oeZhYD4eb5kBkT4reUMGwkEZc",
  "key10": "4Hx5JRReqDGnerKADwfuhKM89Y347fDL39VJjcTmxT6NyfGZL5k1qGcrL55THjoh2zyrYRAwFAb9d6BMgWKLjTNA",
  "key11": "2wBKgmBUFV1ETvk5K4gTYvW4Mms47UEjPCv35Nu2CWgvDoThn39cTe33ng8w8SL1TYDkihCTwNvq4QUSa3Sbc1W8",
  "key12": "5aR8bptaDeKr3Gx3NcsUFG6Efox5GvJ35ujRBHpALorcHJwNZ5nqYBvtkYrMx3CPbhMxUo4jBA2ofvgLSMZb9GZs",
  "key13": "3kD3jRixpbcbFiyccd7bBLZUoiNoK16jnxdD9Upgidsuqis7YL8tFU2TpqY5htKxwZv1X56oeJ4BNYRUAMJftVy9",
  "key14": "3W6XL2r5rH37vQ7M9ZZPjzP2ojQ4Z4JPgj8bQYXYDEu1QcVFVjo2yjApYbXh1pVZ5rvmmJWWVnVk3gwB6oWPfWTj",
  "key15": "2smFn5SwWvr5L9HK7qLWjF8uaoLJF8F2zG7AAs3acvrnRwoRndcmcJaB7rYmJqDVpTNB3SgMxw4rm8i99kqEAHYL",
  "key16": "2R2QKe1nbW1kH73qVePdh9g4QehwbB4ehi8P2pAWJ5ryvUSGkw28NgcSPeYmPkxRa3Hn13X9CYEpjpMZshKzoiPH",
  "key17": "CFnMVhoqC9hDXJhkKofJkeJuL8bdcfepVbUke9ScYz3qvMLeD8h39odGSCVvcAfCTqBZgE3WhX9HkSDPtuWHs86",
  "key18": "5TxFjkc1W3qp81BMQtdJaf4DNVYZeQyeYUdyQNoxWbd8FkjbLPmC54b3a91trFCjiH3u18AmiQqUaxYUPBBhCpgB",
  "key19": "52hxnp5V1GgQWm62jho5BfGeeBNZQVpCEL6nKuLPN3tTy12qCCBueQitaEqSLbZ5GMRcNNsBXPd21PWUPxS6EKUL",
  "key20": "2xZb1aFAhqL8vBQQ7C2c32vHEJB2Get2vFG1pwfX53KKCKbNjX7fyLDMY1iAV9RLHYjf7mzV5iNozpW4vC7SAJRv",
  "key21": "54SueBkW7Q7QMByYx3Jnvv6VWq7sGWeiDdWx1k9kNqSKJkPc3gCYAHD6nci4QXDgQXcTdPT2gmBHYeNH6t23UMri",
  "key22": "4iqb3jmFFKWGUQzmbjbrPWpFXtHWgMtLnbayNbNADhGb26WfjAg6vkNn99g88SkppZFxNpHVEXcqb52NdfEeRZxr",
  "key23": "49PQmC7UzGNY4tXnwiGTCNZ2UUHXDuUJjVj7NGUNGhsgwDa4VisugBoAdDZ1pipvLKeULA4YcSUvJmS4LpNMgVTs",
  "key24": "5q7y4kq4PzLjcP3taLhuhornxN1CxcKFH3kEAEpdpw3oarzqa3dxzFzA3J3U7PLFjBnXhfU8yzNJsqmSnzkXDMib",
  "key25": "tdiQF3wSbJhyZWHVjxzc786qBfcEh8LpuwLxab1GGg2A2ccMikeKh1zDCzRmCixaFbebrGq4ZeTVaEewXYSiys8"
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
