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
    "4Ezcb1kzfCT1rSvKpcboQ3xwc74ZRYpSxLbLpAknLSpmSaxyWtPXErgMbtTKx69ymrjChfVx2tUR3cUnaGNML9jD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYXFs7tqKWHMzUf8Ff3k6gRyJNGEooxH6uow8xgSYzLgs8yqyTBbLR72VCANTr4W9NitdtGy2Zy6GZptXSQMKPx",
  "key1": "3aTh2cWkAB5GB9cCt9hVNkF565bwUhtEJxXjbKDFuoGcjEMoLWfJgKZE1uASG522ZzLQqqtR91geHVidmfQnQ94n",
  "key2": "3mjEYroVBQuxCg4Whb9kjfjFi2D1bC7avz1T71owZzYvVjdcJmQUygGmtkiYuFVc4zcVVFxP18Kprof9WGazZRK7",
  "key3": "2MgCBzQCt2PyPAjHg8GkN7bYguyzGfKtwmgpyVcmsWT9uPWSPEKjT7XxyDMmWqmn4WNuoNueaDkxSpk95j1g69NX",
  "key4": "3dLpwThvPb9eBJagtjFckFwHCBncYEHEhSAA9KR7bKoAN18fhuVCBTEjzUCGwkrtn82wSQNerYsVWNqFt6NJPaZK",
  "key5": "5hpxC154oGHWrARCk3t7EFbZaXhjA35ZzjUZBWVYiJtrvWjPVpq1zENhkamvdHZteReqCrrrs59TuGueuPo6xwxF",
  "key6": "4zk27AvMyedFgPSA4PvK8XZE4ADdF2Kqqiri28ffCaCPhw5tXU6Y1rbkKKgP1Yv9qVmZwvwMExpEnEWXmnAoAWvG",
  "key7": "3GypDzgGTu99xLYV78JBYppNx5rc8L43oBHQcn8A1Fqq6RFgxbKPWVav5PJpWdvspSn6HfC61BYMNXT72yq11mRL",
  "key8": "4jjBF6z2kJYsMQEiSGJPuK2aDymVjZ3FzJ6fbdk8fdkqpxGJBTZJ3XowNYEabFzsrybRmZ84JvQMzZQ3rC1QNBaL",
  "key9": "MG7jU3KMWKZUqiQQ3sRkFvJ8ewSH9ykHKvYxof8ynxuLDCEecVALXg1B3Gv7AZ7YEVazqVo22RQKChPuwRttmp1",
  "key10": "3jt4TmXzYkvVkyjsqa9TtQRty1pF67agjQ32YaUx9xgnszmHZBWyWkPJr3S876ZyRFsmcoaq4A6GqHw9WpG6uTmw",
  "key11": "3rBLZMVAccWp5CobheEH2EApwqmEWHyZ3Gy8oTSbXB9LPs219LQRZ5aFi3dK8BdXENib4CiZ3UFGW2R2NJ2xtBxf",
  "key12": "4YCjBoZrR42TcM1MvDJxfQSEpSjxaRJfWqSxGnxLzKnc3KJCpinnxcJGtacKPWQkWu8aWVCQSWvy7DTikCAEBnN9",
  "key13": "383oFjUaWNkyQVidRzBaPvp5prJr7DVBRN7p8SP9r8aFXZfsC3KPUEDQG7MxbLEDDKtJoE1EgyormFvHhu9ZiCfG",
  "key14": "4HNZvRcUXjnWtDjhDoDBu3Hzvy6ToohMPgg2BmZ1oBqzE3V5GXnbHaKgGRnhkMNQDdgU4zHHnTuVBFHC7CuMEYoe",
  "key15": "2f9zQzfYjvWm6Zuwrddw4XvbH7upnETVcdugCsNqUZH6RfR6xyfFoYzAfrGnjhtzn2M9br9dPWvNDE4mxkC31knN",
  "key16": "3fy6ZLA4qaf9nhTaWbW4eb8pZW8y7pp9R1pNqUhzSNhjnDTJYPkkwHpqxJ3PGEYTVFTHPgnXfVoHxtK21CpsAfQS",
  "key17": "2xFuiojpXBXjgabsF1scccUfsUVunwiJ8D9pkwAmGABsuEpPSenz5xzevVWz6b1uX3GZ4BA9DcUNVc6KYarxigb9",
  "key18": "3oecfoKZQED1qhrvrXrbe34zekEGqqpzSM5kkxv2wgmesjmX6zKUcafzUWqfpfGWGyXbAdGFFRvu3KMh8Tx6d6Ff",
  "key19": "4LdHyU8QGjYjGGpdUEutinAHEURpFjYdqz9z8REa5bbGafgCVjcReUAsrNEffUi2oP8g2oLVo3edDgM6CYFp3D6o",
  "key20": "52rQp6n7mMtsWVHbM4fALvDF1qNrtSzRn11E6bAJwYX8ELaHMtJQ2FzksWtnR82A1wkajZE9hNkB6wAUrdNrLd38",
  "key21": "5qj7kW6VFosAwZb3Re6HeyghaStGeFyRWtG4Mb8R5cfrFAbHF3qQsTQ5F4SUm42aGscon5czWVYHLA3ZszMKNM2W",
  "key22": "3M4V6MkkKe5NkeoMrw5WssvdDWmBQBG86hre93SwF1FCrBhZt4D9qmiBXGAMs8hDiaWZ22yQ3utKSWdDadYHJ7tE",
  "key23": "4HXe3LGNJ7HnusMrzTQ3kw3Z5Dy3DAqbpUyismZwWaGp9QgMsa5it99GRLPFXCRCWpJV8bd9vLWHjLjSZkJJecYx",
  "key24": "5xF3dhrntVT9FRRKqcK9fYCS8SHL3brvNz5h7zJrM82ZJaxg3jnXM8u79qVxbTyZtSgZsDGMJJGM2oyKGTnjGwpy",
  "key25": "4Wf7X6b1GfJGhz4APuempDiU23A928A7minTnGMqtxYvoXNVVXUtJwokqCdx5vWJh3SzdLxiPpECLDdqyTJs11Ny",
  "key26": "34Gg817WJD48LEDRvFRsApP433L5HBHWPzie4kKvfJ3y8ChJKisEYgZAzeSQUBiAsoUsAfQnCCfBUqFvsr2gYm55",
  "key27": "4Ca1Uq6dGLsTmxkV5UmU813EKhputEgj16ky7J9HNDza2d1t6gxqHgA3TNgFZQtGVCNQrPcjGb5HytzW879yWsTC",
  "key28": "4CVrzfwvSL4wGQJXCfSLcBT5cmT9Y6TbNQT61R9kYgWEBAb6QR777UYweurW3KbBpRhL933s4YtNuQgrkKLFHMXU",
  "key29": "5SAasmZWjegnbD6zxASRKBfng5qWPSdzWQJ5395PQh4gPNtFDtgLU19dPdSmH1z4zT1AXPcrSbF5XaxsPi6J8EsN",
  "key30": "2kkMcpAtnyst2DWNtYJkVrQTB5Y9fQWrPw8kHfM8P9B5xXPmqbxVc1421uYB9QLXXXuJNW1kBBv6evN5hzPoAMpZ",
  "key31": "Ey3hf8Z6PozvpBSYu95n8cxu9KyxSkjrxJag5Sd5kWsrfBJweDyLgFXbCxWHEDk1ArMSf3BVh4MCxwthJKKPStn",
  "key32": "4AqcKR17ooBXMaPXzk8B3dWhLZNHWRKQPJZNot8MUxyAykfEK8RbLk7DySwpLVj6awvibqDmeE3y1DG8ZZekAzdi",
  "key33": "gceM9o53RYgvGFfyA6np7sZ6TRKx235qSvbMdTtBtF3FSXEWFWbNur1yRkTLP7bwk2JmkSX58K7NZrAppwd2Tm4"
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
