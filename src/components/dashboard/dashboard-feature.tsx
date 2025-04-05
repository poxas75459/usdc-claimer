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
    "29bmGQ5dzDUKns2FeMK4ZgMxbNypp2xnxQwupKpbfzWAykez7ZKC9HLm3QdiPHdsc3ud1B3Y9ZaKnf1Wxzb92T1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZ5km15mByum4Q3yEEjVVfPM9G5or1iy82xATa4VuAmpKyuaRPgibsfHLudYZPHHsi97N3Te8jnQo8kWe2Guxf6",
  "key1": "5QGzmt1Y9EYDnWuKxRF7CQsVRDbdESyh6e2kJRSC2RhUgA1jXqffyFXpu9kgXBvBpcj2FJZecVENpFycNkWmgFiE",
  "key2": "3eiD8QcLPxd3g9ronGZbLMFUU2HTzre2P5cHicwkPBVRn9rpeS6jVq3rBfQhQxTWdtexr6jk4MuuMHwkHZTPbTd2",
  "key3": "4qcMAY3B6X1i7SB3uLcPyJm3nhtHtKujpULLinEwBDuu2Z9tAanyDnkYEvqKnTFd5fMthJpU3tKRp1i2e5bnQhai",
  "key4": "4VWanJ9DDU7jrbp2xkntGmH3typnjfbdXuTRQaFiP2NLuJgP8XiFjb9K21ijLcpdBa85iTKjG2KN8KUxSM4d3m3X",
  "key5": "2XR9Fr5PP3LxT51YgAWap7eqMDM1a1B5FybkfpiP3SkZCF3X3jhQYy2cmqNsdMmCSFNs3S3AyiAShpBMgnVFRDht",
  "key6": "3y7v1eHsev7k2FZWdAdopyDpQShVsUJChi9efBTCaVso2Xw55JKLsiTMhasN8Ly9JhnFWNXksNBtzxSvopet5FCZ",
  "key7": "44HmrPKcuK85GXWx7ZGs8NpEuN1DD1A7oPgSy5fHUNZqQm6vNMBwqS4iyGsGYLzZejxvuaaE85BAiEfAykhG4hU5",
  "key8": "kNK9HVY7Tx1mSQgdk3txHQCAGaGo98Lzoz3mANFXqMtBTigBXF4K3kQH1MjRKvcBUgh73GGeqUabv4QYDE9hXUT",
  "key9": "5tY2idbwZj2jbCwbLX3HSSXqDKhLgjRT1ceVb855Q8ypzKDRHmrg88krH9ejJ3Cg45SdrPA6WtFDfe4eTk947sjh",
  "key10": "5CBFizZc2UMqtgr9L5gnKnoFLN7Cuznv1vg7WeEvtRpyjBdxBENPDT4YCnhkBFd5bMtzdemmNeMQf4cWqF4fezxZ",
  "key11": "3xfWzLLCX9Biv3tgYbuSjKJEfg2RXXB3NtAhj53kMW6UQbBpSSWciXRo32X57LmjkJHnnQjKsMUpkZqUzXys1zRU",
  "key12": "54ZLuLUEA2RZyi3Y3hkExUxTvNdfwGwJMJL9VaztyZdUCzHMj34iSJwuZkdHMJYDZcmYGsWT3Q9N5Um2C6vXd4ub",
  "key13": "67XHsAEwKAzFpXm5R8SDPoSoLpZPa8nVwoMLQYVWVSdizCpC9bPxksNTSwq2Ufmh73yHqdxRhei257bW2gq6ksEf",
  "key14": "5irdQ3g15xdB44by89jxW69ZFPnGj3q4qdHqC9GTktmFxFzRP2LitxK1a3AovBCtt6HzPFPAjkjh7eHwbuU6fzZQ",
  "key15": "g68suxztRXqH5uFANekCv2yUuBHA4zaQr9sMSiwD1Yzycf8TQXJjr5R9o2sQ4M23Twtw7nD2urRyjB1spisX4XY",
  "key16": "3ZkFfWBtjcS88dBMPt4YT9Gf9AHqCx9mVCSJFQdP8WDW3SpLQFtTYBmcDgc54eY5E5DNwsvUXa1L9oy6Q55p8YsV",
  "key17": "4EFUN8xUAcs8GufAKzaJ6hA5bVAGKVBr27TCnp4XJMxzRUFFWrXjVtQa1zLj7c5BrDwGEJSBcoy13qdnAb5iTdzS",
  "key18": "5PLBEtvxaCxT8Uik9sg9Yw8fWViQuPuRRQw1nwr38FKd7k2UwhXrupuHsEGXZET8Jne5aCJsHcpdbQtqYbgjWqow",
  "key19": "2in1op6neuSBCwDzf4nxKT9QqtarZzMkfprYWpPNqWkp8VngxSvhx5Rz1uqW1QtximycToB7c9s12B9xD3kn33mm",
  "key20": "22UxieKnvdEq7T818uuRvTuJFTJQ719RVevb7YajfcycJ7x95ZNHKBM5WCoDPC1WS4bafX6dbMNgx9PBFonA1cH2",
  "key21": "2Wbhs2fyGR1expvpMSRm5PdRYbSGjmweugUsKbvRdb8Pgh3Zh3ghkU3ES1fMmvWt8N2NKL6XcZDc2uw6R96SmPeE",
  "key22": "LpVHL2tUUPkSmiKHZUVsTNXw48LEXT1UeEwCjHTiPvDBprJ6RDc6JFdj1cxBVSWRU7nvQZUMMCNtbTDdBfZYDc9",
  "key23": "a4Tf462GpPdXD3QfwxvwQvXubAkPeteJMwnNV2UUSZxw8nqr3mvsTuSLHwxpgwpCNePj9nMx6F6RvFB6rque1UD",
  "key24": "4NRdFm84V56gPejPQioc7E4nDBxqCd55puCNVGCa6FFgHQnPppjni9ySQCwQsUDNGhS99tc8zdsygXZ7FBVcEZFZ",
  "key25": "4K4LaTpzKukzVtPbLgRpi9AwtdbgPA5r3nLnTaCxFWyo12iXpKpaqoQkdccN9yhgQPNSuBGre3pQGUSo5HMBMRc8",
  "key26": "3FTFRpkExZApcp544DhGsa6nfC5pcurdDjmtjPRZSBNrhtL3Q71MvEzzvyq1YkR7XaJT31yArkL7kroxTayBUtcE",
  "key27": "4B7rc2BSvrjDpz7kuQpMR4Zms42o3z58o6jvqm7y1CRRNB8SvhsZazFkD3yAdvT6NArMGT8Urz2pr3oaJsxFpr5w",
  "key28": "3QksbMNVZhti3ccpp9dEcAjGo2BWviDePyoaVULYcXVD6MwNQDGoQ9t6BbuSMVEcUT8x8xJBsoF9AwTCrPNRjyYj"
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
