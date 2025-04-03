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
    "4kcagTjZmuPu2339N1YGMGTjeBWk6dXHtzb9cYVy3wuA5Lg8bB6PzZ3NQ3PVsWnHqnRemDCwFp7Xhs8WwBVvaAsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qLRcLG2gwUc2XoK2PcF6rcwdXMaUEsTWgxE8Z7DPG6jcKZwTX7HoQBW5Fi72GY6aXjcz2WrnbvGL44X5ugPQDN",
  "key1": "2vLYbXqt3fmycjrWRLXP61J8ADAGsg71T7WJ6KLuAHFgJVu6XL38HPBHAf2wQWWL3RMPhFUs9RinC4bdR9u7AQTc",
  "key2": "KJNkDxks556VU4c8Px4MrRnjEaUgQ3CxSU4XvGazWCHccdoFrvvVfNy2DUyvrdXE36yx2J5dX2w4oz4NjHTnRnf",
  "key3": "5VF3EUtg7za5Dh4YuqqSkyNE7BBchzPtyPJmW4tEBWd3ibrqSW8QcFpBsNWMfuZmsrvHiL9MBspPDgtwCcaFWVi9",
  "key4": "3Eqti3F2fp3F8i1jsWiwbGFEnjw2ZstRAD5sBEwskHMDq6ui1wqXJ6mdeYy1F2CzppXD7ygx51hiYcjBmqfAmYgq",
  "key5": "YxfzZUqypEBYVFRoZhQCN5YXZqskRyDgM5akBpd1RzUEttvbe7aPdUKw3iLnCG17ooZghZbi4CQPwAuvscNJtZV",
  "key6": "4Ne5z3ZwLYpFenqsKdgbFC4pKwdM3DSxt6Mk5oYWpcQegVfCMWqim52nZPMCYFMjEeE3ZNP3vFSJ96kLU5NQas3R",
  "key7": "2xvXEXG3JACC7cRrnRnc8hBLSSaj7eApRdsAB7W1VDX337tLnccmnu65KwqXvqZbzg8ozZXzPUoJi1i5uaGkGhX5",
  "key8": "sDZur7T1ZirDYSk2EwpdxhpEdVsVRUy8Fuh7jeErzVYMbeBR9VPJRSoD6nxerjHfacJatrw51CFr4B3GBVW2cCF",
  "key9": "TjosBGFazDyc5Em5DghEfm7LpPx3CGZNo8LGWQZ3FrRr6nXc5mxc7QeUoJ3BCeaWixkDYXKXi9m9mqqCK8WJAJ1",
  "key10": "3FQ8Rf5kt1odwxs1etf2F3iRjCjjvpu2ctCAsboPoSvB7Jp14tKn76AAT6JRe4korerBYf2vuYiUrb3HUtk6Mymf",
  "key11": "sF2yJgMunctav5uSw56JkVRzeJ8SsLkuD1ZNnEjLdz8FcF5Lxxdobpc3TTBV6NBsy8diBP7AXbtLHkrRdnH23JR",
  "key12": "2fWFiojazDWNNZ5VQwy6R1XVojnoXSuD1BfFWCSMeQrYcv5wVay5nUorbVPQ1jjBw9z8kq93wndRRW4QK2FGpjYb",
  "key13": "cm6h72tGU44bAwa3gDAMvncZq9L75cijULw4Y1WXVnkbYyGG3roi6RMH21sy6svE9dKLKRYqPVN6JKY7AD4Tubm",
  "key14": "5rLvRRr4owCxA8i6zMAnYALjWLyrQyWhV1DSotgQmtzc61g1oaJeQVc12FKX9LSWonWGiiZKhsy3tDNYF2r9GqfC",
  "key15": "4QjonL1ZH2rTWin9QKq9NJKWmpKTGfkN5wmnqTd6kvPcg5qucHjM4nMVzNS56XGC9a5DuNzX9tZf8BCQo1eSdh8w",
  "key16": "1cQ7ieH2ktQQY1Ge1ejKPFnRf5YuENzYq1Pcuh1VvrnusPHgySt57yU4z5is5x2n4xKZrCG4j5EZXr2Hg58JqQU",
  "key17": "4RXZYFCZX5WuuP317CL3zgMTWWdSeYyCf1DtXEtmtcz5DQNV2WPLtdpUqTYfrpgP4YBx3w6zRmrzkXCf36rdeaKx",
  "key18": "3FKy8yha8eh7n6UqGtkmXBmE7WnBcAGpKsB98SyzJBBPHXd3PfLeBtavkYqZ7Acrzhnks48pASgVpG1tQ3Si6y6o",
  "key19": "2Tr1HcNZnroyAKu725hUMJhXFjgTjwph7MbWuQMJne87kj4p5HM1cDz4oPZr1PP74GzrWy9p6pazSsQY2U2QmNGg",
  "key20": "2cbZwvL75LeXUfEsf3okDcn9nGHwGP9iAVbvCsXV5bGwixDUn6jWc8VbzCvF4W47DxM5Kv7iYmS3T9Nsgb28RdhP",
  "key21": "3DugqKGjZFQXFh2kNCCrwJJmnujNaarfs7joUwsDWG1YbTx8juAGZ39hZdZv9aUMqevWoL2c8grfm1J3fdHqMfgr",
  "key22": "2L4Bp8TW6NAzRL9YRTLeZmh4Fj285Co8ffx41k21i5m9nbUrzC9FLzwcK9HBBd1LxCc4VzuzvqmLGPHMFWZzGB9J",
  "key23": "3bku2JpaEoAHybNSdQHajn51BSsMizDihM1oa5DB2Po59KmSbgQ6qoJmF16cnko3PBCmug4D78aLeubqdnj38Jms",
  "key24": "3PC5hH85cmSXeRMhQCuAgKtx9BUwzGxLuMToyY6WwN4kM2bou4sfMUFFyJDpJeVm8GaArS8qWyfpdJMNMEKW8WNb",
  "key25": "5sVFCLgXFAv8c7mERs8D7HwvjG69k6NTmywARd3knVQqLVuDCR5hFmzgKMtpTKtarq9AAajs3qjYBoTtkkDHi8eZ",
  "key26": "xaBh7ry9pGR7SGchrAC67t6Teb4y8tQrWvtdcfeTsne3YAyJ4qjuTeeXnJoSUsSEG8yxLHrMM9NkpZzJ5B46AE9",
  "key27": "2WBbEeeC6EXvURA69RaukskaKVNvCESTsqgyS2Z5BSME2LTTwcroGmzMFNxFRb7ipnVMFgqbtU6k2RJkA3tt8Rmr"
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
