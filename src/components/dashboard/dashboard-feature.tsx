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
    "2Eo7KninkE9wk1BzS4gBiRXDSSSrNnLn94AfeVJp9VgbhXbvgx4pc3Svj6CNxLGU1kaU5LpuKWWu8uTGdBFKYffG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGGVfdwnuRoam44WtQc9gePcxmNPPA9NySXsdfZQevmhAwGd6997FCuz7Aqnx9T7afer6bJFmnHEddmXQgE3EHR",
  "key1": "4Lh5SYmg5Mz64mTsp4tNCyvrm7yR1p32HFFPvZSgxDEzCMjyEvW7XhmJemDLvCqxpW9ZcGy2HKaghbYK5waHqhk7",
  "key2": "2KCbY9cgN4MbdtBfkwUB6URAYgvkTcwkqvDFVMJeTY1x8tSgpvHCxqwLiT7S9XyPoAYBQwN3gLFjs2MVKUrcaSZR",
  "key3": "2C2Nsan5vAyn8tXw7SszEFwh8Vh6hke8rqyCYVRVzJjwX9VgyyXrpKBCegKbmbdqBTXHKMqL5TBABKS95Q83M8bv",
  "key4": "4P6A3yB5Gk6f8yuTrSttdu6h8R9pDdNfAJt1xCj3HgqVTBApT6oS2P5FV7u2jZd8hsFYZyZrB7xm1mEk6TE3xpQd",
  "key5": "3yzNwZyT475w8vPa4VSqjDjoTS23kyKBWHcVWkUDeBTdogbw64JuzkbgCfsxorCpFJUpwr95N14Xw1LpgypBD3Wt",
  "key6": "598kmGCrCyqqHRJJT8HNxBoi9SfX17b4UsVzmsvk5zDa7dzjSjqM4JCQFDBeBEtpEP186wiTA5pMnsssLgJgPYFm",
  "key7": "438JcyNYzjRtp75TefoW4NGrfjxvG9W58h7y49wWPuHrfnP3CqqR1f4XnqMJyS7y9jXLdidxtxCPiLnBCDizeFmd",
  "key8": "5dnEX22yXx6qnNExKMH5sTm3NG2q3u8MDmuTJT8CztDrxtBaJPEA3rXc46nwxaiVdfpfEH6SUBrLXwfzsNQshtNV",
  "key9": "35A42CkPBpR5wRQ7CsF6cQTmPb9S2qa4dHuHGNFcfUBtE8dF3tzDswPrvRVbUjVfQaQE24T7pBNtjkiFpsGcNrMd",
  "key10": "36QGXTBCqxjKKzGYzpm9Ycv6DmSiYn91coXbaWrazPDHb1HnPyHdXbZidDPFisWhxj3sdkGh1Jp2XZjukT5hQkfF",
  "key11": "5TUJzg29mTCjsu6iaEK5oBdKSGHX4DC1wHKvsCkLJvKBN2pNJ4woBKwdzWeFU6nATtUEC5ELERDTmopJ6kv9tG88",
  "key12": "vWD4y6PviJjSvpeVXKNw82eVAFDFzqbkEsFV9wW4dtABSA1jihbA9qqzA9EBNZKPj61CabtMLGivrEjTcRLxtdd",
  "key13": "26ckA5H9xR8z8f5kvoTFuvZGVzmsvcNMcbqy4pfva8m9bBZxBfUJDd9wSpQPB8au7nBCi8bRZuJ2NxiYZgkxSfqL",
  "key14": "98VE9X7ejbhMnA5WGMdyMnVLuAzmJP7nCVowU9k4BAbtJZRH1ieMkPPqH9ZGDtK9ZLq1JqZsw55z2hyjfE5uy2S",
  "key15": "63a9ipF3JGtm4ngbW42jpnSmFLoLc4ctpiGooL5y9ATE9ZE5ub4noCg2cwgA5xMYi3qwgwAt6Ag3fjZZtUgmJQb7",
  "key16": "2DPD6VXUx4BXUeHXMnjRrhuJT8SPasDC7sD1XW2kJH6oUc8b4EEAPEv3h7meUMspRSBuNcKTmkTp4WuQAfatT6C4",
  "key17": "3Sn3kuiMUNfArT9jZT94QtzPXrd7ek8ftVmxARizxUr3s7e5aCnqoHqeEMtbWwoC48mGLDEZSzig2t9GR1QFmqjo",
  "key18": "661jN5XeizxfVGhEmeV2S7TgmY4xMMDARkeCSkFxphpDyF6jVgbhVNJvi7Rk8kSPXSJ2E25Cs6QEb9RwPrMavLJG",
  "key19": "Z1Tf8gEhcbMpRu9ZqhFBFC1cw2F6TMdQ8crsZLesLVYuD5DGN1UHx8RW4oemPNDLHRfqr13oVcbPLvew9DEboxb",
  "key20": "4DdTNPZzH2vp9GZrUMbCfhQ1MwfcW8Aq2YBsnQ2Sw7maWCnbtE3zdiN6hEXfw4FtvwVP49611jC9H8hzRbHPQ8L2",
  "key21": "2Xa2mAyLHZggGka6U4VcGW6yyqLFbfmsRSpesnUwbtWUSAAQGRt9dzWybqvfp1SQGJAmSL97WibmC7tzg4NeaHLk",
  "key22": "5bXPtYwa9fi1LDTDgJSmWvpRCL7xndWoK2i6id4aYMjtVYyduH4r4dUbFmNN9kBzWw1y4PyB44ebQPBi9i17owLq",
  "key23": "21yFT3yqudRTgznU2RQwutHRNjeGoCVnewDWEig7Q7KSqRBLBdnDFPuvHPdkVAyXxuXhDFQYxwfVyFhNGbnS4GMc",
  "key24": "382xAHu3D6ebBnTmKhZ4CxMiZVdnzCL4snWLgnuMZBn1cNQBjjxUeU2d7QBsbro5tM9b2w8XHFmVANgaFnJht33P",
  "key25": "Qr3qSuVC3VVyh95Hk3z4ZP2cgjdwcRnhgkUk9N7bndybkH6x4sCw5m9i7Vw81sG1rnBUUoyM4STY6WbmHAdxeQV",
  "key26": "1FSLk7uYk7RQo3j5w8LHfsTjjVb8St4JPKvoiVTR1uuE6DdLrps2YERmCWv27NQYzShp85qb8xn3UTLWtPaUsmD",
  "key27": "2T5qzdUJjv4szsUv94hdg1JwF7NXuYucZQY5GFSPyW35Nongu49WXvNq4UH8abxTV4FUo3GTuajc2HDoiWnMw4g5",
  "key28": "4xm44vmQLMyJUUcG3oJ3Ay77Gnt35Qf779weo1PoFMpaKfQUBaQ9AVcuj4FXARmPqexmTdudV2UdPoPzzHFkC5f2"
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
