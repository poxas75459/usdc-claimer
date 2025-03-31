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
    "4q4Mw7fo6ikJhHLKnhMad8xDanP4Vr4D1YYqAasbgoHgyUhbvfoGXt5Wizx2XqbJDDbZs7b3H3Uded1Ef157Br5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViDyUA6cLh1MtfhRac8JpbNZqd6wDk2XsHBBaZWzyHJrZgR4C54epzkxJHpCxDZEkf6ziLUTfjPp4T91GxWF5kw",
  "key1": "35mtRXtHtnWCbme8febzCAtsb1Pqbc6Gzcg5FKHVmhPyexWaWFszRF4YeCd513XHZkVe3gUQVtEGrcbNMmbS64E4",
  "key2": "3cPZrzwVqf8xoyUbxd3BZwWYuuXgF9S53CL1sh25QPhUrdc2bEA39iPRBHQeazrNHRoCz4fz8RcGw7w87KnbnspK",
  "key3": "4vjsPkQLheo3NUL4ko4xpMmc1XjNH1oJZPv1SQDfyVQU9du8HdoB1hMSosoyAARrpr1R7Drg1Srg7LEdeaBSRNk9",
  "key4": "3Nm6c8Sd2u9MxRabmctmDibwZwgGBa8KekRKLMxeTZjSij7a5wxLgkF91F2NLzf6bK1go5focUpnCiH3jZfWmoZs",
  "key5": "5emTuctdjWqF7MgQcDc9wDyZhNy9naS6zSVKaW64LM8yfnoeyTrJJASVQJMxiXxmsZscf5LKHey3dMtVayQTpT7A",
  "key6": "3Y8GGbPKRCQwdRjVRo4tAEDS1D5KsWZVYkfJeNAho4W1EDApJxBMR6ShXVrkYmZ1w51dE6xmnDoS79Vce1jYHAE2",
  "key7": "2yG7bEUMKDpAbHetkxFaLZNu4ZkJ6hR8YcbL7Eec2YWqwDR6ZRNURVkQUgt28QZ1T5WhDR7KxNJ3f25wenfAyyM2",
  "key8": "5NTJ62nnu4Pno9Vpr2YT4aGsJ6qaYN56H48rrWXobNMEBDnwhR1CPd3xK7UTt9xrLy1ZXGDi5TPw7E1p1xNpUkFM",
  "key9": "2qvoPFukGE8aGRVgAbzLRjEzSCLBpF55qAxJ8McocRZc7UWWninmqCroHwSyxirCKqtNTe32xthJSMVTcSagVZy8",
  "key10": "4ZqHxc741DqXjwYd5AfWNXLRhhHSGjHLfDVj1EXSKkBqehyCUFCSQ9u4NZBsq9VYUzJL1FhZAPtoJDPyfXNnVgt9",
  "key11": "4sxWpxr9zH4bZjKkm5XhKVSQXR29XyjJGUHNPYCNJYtzk5MQKjNcPLFuAoBxKxmWayGGbpb33QbaRhEXLiiiz2Em",
  "key12": "5zwVEFAz5o8Wvuft2DSYx9BFd3kEWM16qLd3Mi2pn9mAnv7yc5bg6R3bw56BkWxjCFAA3dHhzNpfLMVopUWnJJhK",
  "key13": "2perFFyBtW2jdr7VcMMDXRbfUi35so4G1afCfCjKw8jq3tioa4j2G6EwMMSLZ1hvUbragBiR42wnKDmJtqZu5ZcK",
  "key14": "5avSwGcG2yXsf4s3xjkGHDUQ4vSgrfRsfhLQ8B3cpM1AAY65bnU7pnWFPtEegdekAFDuN4pDdyPSoELx6Uo6hM3p",
  "key15": "3YJe4MuDm8DGBvXour9LnNQxGJRXSDGWsoHyUoLkUFptn6b7MQTYb1KKKYTb6nbYLFvWuUGfFJnx7R8mcmCAZvi1",
  "key16": "647R8YJJ8yLN2dtiKA5zvTy4VD1PCboJ8evyxVgqnexriNJEySYdmoLVTGDbM4tLZoixbr9gWcQ4JD8jd4AMN2K1",
  "key17": "5EFHfza2Z3nuVeweBFoWdSUhSDewAQ1Nf6Kis5LWFp7MVRXMddicJCbG2jonxHPbjtkZXcABRMRchqVr3SJPR4yf",
  "key18": "2hiYj8ecHWywyTVXddQCXs9FnJ3tCzUkW4XRNdURpyCbtSL5KCP3QgYbeYjyyjpB7SD7rf9RydutzRij5kAP41LN",
  "key19": "49RM55RKWsoMTDNb153TQqG9UE7jW36MJ2Le869bminM1Q2Y54KiMgLDgrP4NpEoqTBZErCwbo7CWRW78cwmQWBE",
  "key20": "5bvoDH3SrT6P2dvuw4RPG4UknDYdPPqwJ9jxrhtULWt65QBMdBxUuC2tXbuEQC8BryzX8jhNiB3FBhWufXP2KTsH",
  "key21": "4xy7cAkvKLawzpb9eNqJGGh2GcBCQrMKmGd92zPTMcnaA47R7zRAsbsNSVASJSGLvdYxKkCN5Bo2Lx44J5HW9g4k",
  "key22": "4n8rhs61AEsupAMHLQChunTKDZMXEiR3qExpfaPy4A3oYLCqf6o6zUHPXErcT1DzMN15meW9f4BR54PbE1xGBroQ",
  "key23": "546guHxYFYbeudii79e9W6zWNmFrweMu2guLykSfsN2PHQ8aqLurcMpGfGCYYYMYhHCUj65vYu7r5YAfXGbspo6t",
  "key24": "2dueVzkadGEcEcoiFKSGnsGidyPEeAFYEnxsGK2jQiq85jPWf8rXUW6qdzb8H2oia9ui1Qabrr4fc6Kjr8QtLU2M",
  "key25": "2Txcd3NrZyKijssRMpmiYZ2bAaDriYGqdFVGvz1RkrGLaGAwnGRNc3ieKKf3jNZAh5568crPvPU12CQ4nkPZxfaC",
  "key26": "3wANmG74zuXKoymeFAS98uELLjJ6NxTWat3WH3rB7me41FY2on1yhPLn4rb2Wi19E3bXLdWJQAYyokaXyWW1aTJn",
  "key27": "4GHyauW675t1iQm8hnx9U8pyvVfwnPgfkjnELYCNudzbUmkRdjjVUd3F4HYZNKFnJ7zUkwswyPuMcB6sDo5veVJv",
  "key28": "4JZL59gUd5vFsZtjeh6thP9mVqj9ueUfULkSVoniUq8V2d9zNJbb23w9dp1MghmKy2QukiYgNG3uwdDnGgSx7ahC"
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
