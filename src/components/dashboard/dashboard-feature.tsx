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
    "xkTRSuy3ceD3F3WzUCJ3pp4vxVzFdkpG1vwnJktkWctTbvAhAGwuhZvji2zDgjhtQXceTFHJ838HqcuheEgbCny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333f2TStyiXEfJvChfnBwtbshkr2fR6oF8bdUtRn4E4h9nnhcZHZYvogS2x42rJGqXbcCf2MsGz9zfr4UvxG5UZz",
  "key1": "5pJBkkVAY1Fs1vy8zdpvr8UCmbarjaohKT8yCkwfjrTpNCvhPoaSWpawUGaptw86fY2p4sug175jSVLUi3DwSeCe",
  "key2": "iuHRiSKX1J8o47s6HiHcy3Ucq4gNZGwvYXus8NwGpqEZ7XCz9yXQDBB3XSQepxaCCKu1Tri8kR7HVDAZpFxTs5E",
  "key3": "5Gbiea6xBUVSHBJV6XeXSMRqj79BoU37SHdz5Wv5H9nmdyBjasKrTVSBXLXwcBws9K4C7uX3jcbUbKWkVW6PjWWC",
  "key4": "3Ji4QaN8ShxtThNAtJtQApJhztZQ7d9H2qk5T9zU7YpY5z3wq7oDGABi8kCUh36dxTNefns8MkzCuwqDu2RGzfQb",
  "key5": "2zwoEFx1qrW1UM48FvW6SDzYFc8EiNZoC4vWEyEoZPC2tGJkHYggUez3AeW1xWxiuRngK6rVyS1nKUEbV6VEzw1a",
  "key6": "T6EksjgnaNz6KjSotpFWSU8PCUHU1fWB2sxPs3pQKVmpubcGXd6GrZLqXkZLDGbU4HJxq2nby1GzZ3roe8W8TWm",
  "key7": "5baBSGrq25BjL8ZoMyaB4eXxVbFqausYisSy2vtXGhWbuoMn22WYNA9E3b1BRjem6eaTPUJ21x4xeWggJy9xx6Cb",
  "key8": "8HhkNaEksAB6uqN6PYfCzsE9wW6xmHR6CqZnJrFvu7QDSdMNdspu7NAx4zmj7NseKx7HmBLYkqEazqLt4vVT7Gf",
  "key9": "3VJbx1Mi6wKDN8cezpN3WFXS8rCTfMg6fPPNetjGfmqWYfyrW6XW2euPksFzfkc4hJVWVjsygoSTvoHZyeNHT2vm",
  "key10": "38FkdoEApakXXWcsZpn3TsFPFp4Fb3TsYYEHCByqpTjMTygBaP8ykxSf4w1H14U2AGfwEcBMvueUyxZ6Vqr96KJ1",
  "key11": "HNb5KbJzc7tbNodVH8rrPBCYomBzujsRrv4JxqHndzioB1asjUf6Rpdue58VFBzGyBGMwNqGY6urZHJqFBuSMoJ",
  "key12": "2fqDLbYHmsZgFr7K6AmphhW1Zb3uXGJR5txGFJZo4Mv7QkfVm2kSVmUobfUC3aKwHY1QMT5GAvyMq6NTU6sYhvBK",
  "key13": "5ZWSHUfhp2US6M4cjVJ8SzGNBgLBAkemYw5HtAAka7zFQXCJWznS1ENExo5upCpV9UxAA4yNbkfZvWC6Cr6RjKcT",
  "key14": "2CUBfvWNCfhC4XZnj2xytMD1NtNMkfCTdZTZuMa9uYjDpLb8rQyy9ivnoF11GY5nskW1LsH66TEXhkZMgpHY7Qdf",
  "key15": "4QfaokRSNYvpGVEdXvMgTR4AdVtnQ2motFU51CfgnsYkjPyovVrX6chpnryNgoZkmCQRRyRJKu1yfFmNWgs4zzBm",
  "key16": "3h8noi964HYRnmsVzZcHq123UBiXQXo1xha8dy8ByiTfDuookVwHaNqytjatiuYhxxDP7hxeoUjTNvWWqpfcH793",
  "key17": "Ld4YpmYo3Xg6XeTxrXwNG5YnqJySwxy2qG8VHAax1KqhwtpunSGkzSkCa3kp8bheqgm3Z4juyFKiuXj3i5DiFbt",
  "key18": "2w7qihuJpcsJTPwz6CCMPSyxpfdvRP2eYwLfhgSdW8eYw7trd7iCt5FHmLUtGTRxtEEzQJhk56mjkEPeLmw9cDhd",
  "key19": "2Jj4vHoLfWZKojrGujQ4MnUYmovb1cQxpMiTFiBe52XCwUYHRApsxS1UrvAp8hLSLG6QAKw3Hsucnhr1ViqLjCZZ",
  "key20": "4Cc9NJQcDb3LkMWhrt8FWboJjUX1m3hBCqoc9XFWChqQZjkdGAvodxv1UMLto6XzjP3vSLDKn87zB3KGE2rc8TJL",
  "key21": "4fKsT17jgLEYVKCLChaUJvtfc5qktxReaDqPuRHQQSb3k8E1dE5cJwJDkX815LkbFUzZtyVGLkv3rJXgZBv5Ture",
  "key22": "37yBrDvUdp1UQkzBtZ8pqNgeTvfNVxM6Puz7UQ2FStX3oSVH2fVx5jczcgLsbXXuniaN522JTpbP4Y7qQLonr4Km",
  "key23": "3pfuidAtXmWC8Hpid7bPQaMt2KrQSgS9opdqnVFQ8oRpAnDZnYyZxFPpQr6dNwt2arVjarhibGXtU3owSaAiJSMk",
  "key24": "4d8j69PLBc3kTr8gngut8oWAd4fA7uL6xUbuRjnHRH4xTBSEaUxCEPCW6jRmJNXw1J8vjtpUBvTL8Xnov6eQYpBp"
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
