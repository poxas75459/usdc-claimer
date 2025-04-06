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
    "41GqbRYhr3PwJr79J1HmYGU22NsbMvR37sMv3HVbQXf2HWdbHDFrXHcFxsxjDdv5TfjfTWpkiMK4CFk7LZ5yf2FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPDqxPT5Sy5idyNXiScPXWfVZqrHqAaDZuN3DjCoPgPLncxCDsMkzY3xrAs27VBaS7VZkEyfk6BKLvScgc4Voj5",
  "key1": "4d8RtkGNfS92Y4G95KZK8EANEewKhRLcMgwLor2AbaEWP9ZPoh7PP1ZUnHXyfJ4arzqiUYNtZkpNJGFe5fTBim4S",
  "key2": "29KW7DRL4gfnVnAfCqw2Ehur5hMgHKLLHRooHrbz1DusUXuox2Y8MveF5FStR7UmVHjiR3gkwDF2c36twtjQkrhU",
  "key3": "5dKXvFYMrmnJz9aygEBqT5JELeQ4stbCBJr5ajLTP6EBniwX67zcVZ4qk7HnMQMAF3644DN492A1WB979SsytHiF",
  "key4": "Wtq9CkywbiZ6SjAKwgswV4ahVKWx6nBKbjhsAifbrg6X7dkxwPureJRxKBQBDkiL3upBbWtPWBuJkANDz6vkdA5",
  "key5": "3ykUyg7LzGqf3kDH2fiXW5jr2Ja8AQFqREiqiXuHuLoFzLNDuCHkx2Qmxxr1be7NyxyDoCDRqQU2uYYAWTmTN8Qw",
  "key6": "5EvtoJjmNFDQ34vGmoV6aiXnYu14ZsdYzHGCG14QjBwVK7e6wDcwjdDshi1gBTtHWVTXYr5W4K4Yig9y63h8ThQx",
  "key7": "5chLu1R33JkTa6pXVVSpmUinyFt4rJk5FZyr1Zx79i2Efc6Jn59Z1AM5oBHgEMLQfsBoyPM1Pfxnu2RnFvgrhWQy",
  "key8": "2BfnkjuppAhFJQH7ZcpaEfu21HoAx8AKLDQ6CYV1D3KyM2HEwW75pb7rcwgZFhyNdXmhfhTPdoZ9YASG81xdZVKW",
  "key9": "2SxCJQPX99T9gADuZo8CmBjCr24eP1ZcrqbyLLJn5P7Now73VqwMuQBYkmRak4ryirGB16qvrLy9r65a1kmhAivs",
  "key10": "stPtk3PLgamHBBKReeP22ksavRZnAdTV3Wiio5j52Kb8hiyniLvgaEMjff6pven3d8x4YaWWpdVJ14L6MWXTwYW",
  "key11": "5q57qk6uAqr7UFUEunRAvuhZamH2YwjfFt4WWej3TBd2AwCG8QyabW27ersJ6m8SnydgW4HsLbN2iYKdNCc2wsLD",
  "key12": "3uWZ1YfuuFxwgZpnZfRVSPtf6a7zBCQo3n9JnTpUuhvgZRG1RpaNi5tndZ4f1fk4mY6GthFB4am8hLfK4qVp6dsZ",
  "key13": "4nKtvh2ZwPY9b6Nf8fWF7yCA9vKWSTp6MtDtaouM43D9x7MEP26V6GAWEe6wFpurFD5h3QEQ8FicjkBaVBsyuk6R",
  "key14": "3gkTzaNtawNm4NoDTNABJdN67qwX9Svv4dhW51GVyUeMBHwzvj8MyTBpnU8oorRUpYJxjZsYBvMjFJMeB8ipV5aH",
  "key15": "7CYGfoxEgTsG65jYKZCpVyyoRSP8ZUzH9bG4CtTP4SgydvUVB6FrpNHMqpTjYESy8yJGYuxVjNdub2kvkwuoDow",
  "key16": "4TS19mx398ciDTidThRmgyzRhH8eR8RiJxzdRP2qeJZ4n7SncAJSCzrH4t35e732rvqnpq3cSMypcNECpLJwn5DQ",
  "key17": "2MSiFLSGoQ8FUQmR8nmBh79mggn32zW3qoof4PnPCRof3K9MZoSoT2pXU5ruEZQdp1Kaf8NNmc9CKakX3MmAnQuM",
  "key18": "4XP48yDjETwNmLYenM8rXAnpo7aUCjFAZBXMUUY2wiBJmBEMRhQn4wUg6MpkNhzzu9Zo4XCmFn51FH3R5iTC3ycF",
  "key19": "2GYdEFfvcZ2Ag8QSi9UH7Kuj4RfHDhZHW5dtTDbmBJizVfGVKYZiKp2ScGvkBAxwYghXu19j4nbqxjVq1XAbTg71",
  "key20": "3R3bM1aLSPxiyf6LaZsLtGsCbuEN3vk4Zw3raKHGyCXwS3ZvRMBEtfpmMmfsQ5ykCQiEcDc5RNuGGRYJEBtcGqsC",
  "key21": "397Y4wzQdCCJqrUoQnh8jJH5MdsjqhmK6miHrJCMsUZR7zf85bVxJQ3J5odtv7qWXxh7Zwys6uMjkf2NCp9a2hyt",
  "key22": "5hdJyQ5uDURPT3T2en6QjdsPZvFJaScVgcKRUvGNttHk8zr29FoAbprbwQnXhYwTU2g4thYXLHUQHQrFHstuK9W",
  "key23": "2eu4R4ag976x7MNiVTQhHJejVcA8obPzxFbz5ypvAnwKDZKocpWGQs5kvErH6SWtogG4BVups12mzUKZXepZgoCu",
  "key24": "HBURVmWPCiByiS4ac3Xuf6LeMUgaj7iNhtZeZTnnVPR4r5KrTTkwWrVzvKGqaMiY4HuDk7WrL1wkxmKYgfKiZkF",
  "key25": "2sHLKZS6HWEHydq2BNm83gMXzj1V7LDqV7CcPxcNXHxtZESQ7jovNgpMCeTcBpNs72MfrG8qXKoazMZXskHKjXya",
  "key26": "aYoLBEF5LZ7b2Bjrm6NMXkcZfJLD7WSsjk8d3cAbKzRzrK6JQwPvzVeMeDtBXhh3o6FLZGkg6kJXPD6ywnLTZmx",
  "key27": "5NBVyXWNZ2akTRQJUGHZu58Pv9zCW6B8hDHZccKmPqf3fJeKsPBnVN25ysNXemw2i6rkXru5Hc4VZHNt7pi4DtkQ",
  "key28": "CjTD3V16uUHsxG6j2ih4o5F7f2YnGQhXkCSzV1QuyPJMA1spRRvHmmqG7xMAw7VC3jTJr6UeUqs22J6SeBfscUz",
  "key29": "35ycjkBRJRz84izesEsAG8Z3DoY2XPg43Sp2zVBSASwq8ARmvT7dNjLfVbykHcXHR6kTp3jkGNWfA9C4KYjKetiU",
  "key30": "3NhehQMozy6PxMLyKH1HGJqUyhuEst1VaTVMxFjwYY9z7nD7EQzNPUr9GLQPPxpJtB99iUQb9uMk5fsVUxP8zoGw",
  "key31": "2QVpPpqTHEkwus1LfpeCCgSNZeED2Sv7ypjjrVQ1iGkMRqwTWGPWiaLSU5L2rrHYyBWpEdbFquC5YviGay8vh5Ji",
  "key32": "2dCN5eMEMF6LsHVBJdARkFpzWbVxEcsznGtc9S8zxefATPR4NEguWehnxrg8TkLGfchsMhY9oj2yzwQX2u84ipAP",
  "key33": "2332fVnxGMioxzWnaJnzCGMa42gCQRhRkmHcJvVHhZpKP1y9Jc2SCAQMWb9N4sKbEBH1J8ZD68BnqVQXDMUiapiN",
  "key34": "5sipQbTu1HVA2uYK97CkgNnBpHWePE3CzvS5ZF3WBx6t1U6f6nRBm3ohdozbG9Y7c2BqkXPisVoU6Y7ZDJ6UThZS",
  "key35": "4tyq4WMGTPfF3bpiBo8rQvUon99fL5Gvo4hQ3b5jvqH8bcyLU8EfVuM4DfMb2SSLkaEDnZkqqTSk27G49nmeAujz",
  "key36": "4v88hM6rokRGR9C82TarnAirbJ27Hn3aVnNiud66TuDZNjCT3edByW1yWGs4MDSUpCqDk1nDUejLLF13QUQB15gb"
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
