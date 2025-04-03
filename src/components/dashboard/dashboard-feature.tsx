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
    "65PmSKnNnhNGymgRdewHu359Wy1PQHBEoiADEFnEqhcmkPvsaYfsM44WSihBm9cEP2hynn9SfH8v321Xq9KR9Mtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdDcnGnmbVD9skq1FRgS5MBY8y4DxZJH9p8dihJVUeywqkYL6btpJF3iuYxdeGzgUwqy5G3VMjgK66ySRBqLtvo",
  "key1": "39hqq2CWdk6QFUqm5ATsi2f1hHWqy4XJffG6H16vChoGSvUrZyiU6b3rEFc1iyvtjnQAvYjq6WMjRA6c8qkBSvvK",
  "key2": "3BgFRxaWqbQ8XCC3DUvJjGyABhEHpf2sSRyAJjX3soYvMyXR3yn4U4krjvkvhnMgdnt1aorfWmrE1Rco4EtUjTLn",
  "key3": "2vvfmnKS1ZraWcZ9GSE94T7QbUmDt813Hq45cN957DMBv1HtjBD5Mo7xpGXfrBj2DZyPFq5wYTVBhwWzqCo1XrrK",
  "key4": "3sAVo2MT5JER3yub3w2w5YgvswP55JGFQtw6fKxtHFjCMzFcrRJWD4qjuB1iE7wF1CH9V39SMFyF5yG4jpfzqubu",
  "key5": "otJzbfgacMDJWx3MK8BLRQ82xpj3VcWRtai4SygMhdwehNircrQMKWQanF5bEqBUjzkvrvySP95ZKHyY7DvYtDj",
  "key6": "4RRcrL7dHzLGnpbpPubUzKeSXBAqGjftE8LFdony3rshNeoe4pb8evDu6uDM5Wd1cuPRPBhZm2GfJ2gTYyfxfCqB",
  "key7": "5wgubQHEcaebEvywd5tuPGR3i8gp3DERjq5hsvJZomnR2P1tzeFb1sqYVi1m7HdYvobqnaaDEncxRJPnbfh1m3Wg",
  "key8": "2Cya29VPbKcSvjXQPVLQhMSaB6Ymam9jvP4euFEQcYBWtrfgC6KV9sms2DqvgcYf3A2SuW5ZDUKVop1rM5kiGShB",
  "key9": "2ykbkRxSYy3P9CPtWhghiTEg3aagd4EFduPQrTtHf8uKrGcpDd9xCqYR4FGZWZyvWKavCDmDp82qR1jdfoUy5wAc",
  "key10": "4Jj2kk16APhQ882Atv4cUabXEzMPdKmuhEAdeBzTdan87gCe95RabJBo4rxze1dNEXvq2NN9bCj7qTyoDdBmYZ4b",
  "key11": "76fdFjrvT5p3V2KGAtNQi3YmAJCiHxW6EzrP5bodDhNA4xHuu2TuBzTbD5ieJepY6CNVX6RtaEwxhRx478ket5J",
  "key12": "52gJX9XHrshDbsRWun1NUerB5UMrrEGy639WzDsRMmKUh2Ji8pzdXhun5gaTYm2u286hE3xbWRN6xFS4DhTuULYW",
  "key13": "4PNAsY2PvWwrS5zvbT32TF8jhw4pyzp11D2NtFj9yRn4QoTjV1yhHoNXmd2QSzPZJZDt1MuLD22JXxq6m88VdoDL",
  "key14": "dYRBZukL2woPd97PSsafesMo6u8aK8qP7JkWfURk3n8u6B3MCQfWjPhX2fYUBkbG5aUifvV6sPsT1YGwLomMbZV",
  "key15": "cxYjRYsH1bxZYHfnAXbz7k14zAGYwjihxzfZYxUxSNLLnYLefRybDvXeygebPBhno9g7NZqrn8nEezJdqGKfoHn",
  "key16": "ngWDVD7KrkwvkHNMBLmk8mcBeMHMy71eW77XB1LsrNf9L5jukcrf81TzMX1EeGhSEPbxVZ2W5rvSKd1kiyJcniU",
  "key17": "CqnqMiNg1Yuc6DNn9K2XUwVgwA4abwXxj1tpiL1BkV1p9j4merqfGQJoFMhmUpCacS4Y5AyfsiWoBrTdrbSW3ok",
  "key18": "5tMpmyq4S6Zn8iTkzK9ZnHgFj6vjaJQchNxLjSYgmxpFZz5B5fmSGQy6SyEeXbCF38sn8WxLPqa5JfQiedtk7PZi",
  "key19": "43hEdTE3zPyQJuaDT6KiTnWivSNFDJoyigzudodLULv9iNjL5eT1LgFd5gtMwWvQETV37r6V21Q2hnCHTN6Ja6CF",
  "key20": "zbXxARByMq7RjFowhCgH8zwDhpYmoLsGLqZ9eEyE2i13mmSCpoUS3fDWMJMeVAUDjCcGjBjRdqkicX4nDd3SWzb",
  "key21": "21AwdBwdHr1LAz2cputpNGdb3cssG86HbJM43vEtSacxhVXyurE1jW2A5xidiqtU4g3zaqTn82sRUTaHadFhxwQs",
  "key22": "5pWyAq7M3zdXVbjuHigEvCx2MGJj6qVmsqnbw2dvzgiYWoVAUvwp7Pfg6v192wxGHjA6t6tmQnMCyws8pGbEUamn",
  "key23": "eA9HYKVoqyoGJJYm7moQLSX8ScPYCp2Hu1G6Vex1mN1vuhjTADYTpKJYjEVQfMcFRCcCiEsj4XrYjNw819UKERL",
  "key24": "5xSpL8oiQPqbS7ZA7kMKrhUWv9YugzHwMie8StxfpUAcvMSeAAZ2tfEz2thAHCnTaZeh6tChxMVy9fCb6QrXuXYp"
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
