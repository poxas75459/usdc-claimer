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
    "278eCoVibUn3rBtPJiYvF9yMHC9qn37ZNBfuw8mN1JfbDmBgusYxzaSs5PZ191TA6BwBvXtHg66SYNVdHppLQBAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFFgpWv9nW4AArp4YhWxPGASuGKctFHQEMdtr8cvq4U1ST7meoPW54f4LvPWQsF5hLhAWSuKtwTGhmksARNMbLj",
  "key1": "4YBn2yKrxYS8uEQGj5spFGSrhB4T2HnLHh71owMjShxQJCzHDhtDoW795XZ6yqz9Fnw9dBSSSKFzvySFjtQnqmm",
  "key2": "4uHtH5qKUkwrAy4bRafJKZfTdNP62AbMseS1ECrz6LsBkdoZrVSfUJKfkMgxir1bbE7TJJT17JsETrcP1o7Hezoy",
  "key3": "kGfoGFjp6cR7D84NhCi24N4rjbmXpkQXETa2ZCE3M3CBcXzDAFmzAaHYkgpvPBFbfWKmVno445m5HdTNzcDy4mq",
  "key4": "3y7WzuJiPDQMFBJXHdBd9PkY5PSY9XtiS2h5amhtY2hnQqQY5CFax7Kc6vLxGNxSfvnRUWPJSLEqASTA5eo7xwz5",
  "key5": "fWapgoXBJiiypvpwtYkADjsGjUfp2Td3tMXGEcHTv7PksWedRp8Bn8xNSZ6yybspZeCiBF7Hzz4N2mwexpKkNAF",
  "key6": "2H1prUmRbosUXW9HTGkcfvtDCZvqwNgFU1pJRBYTt2g5YEcF4VNK118PZbQXwdr4ENWHfmXVPxSeLYDZqGYSVzQ4",
  "key7": "2FkMQeArZPsZspKeHUzEe92T1RNobKv5XUnvog9ULMdw4KhcCdiUkeuSJGFcvAFoxWQQfQb8b22pZ2SEhqUxr3Lc",
  "key8": "3dADrJkFPzqYRnCi8XpoVSbAvq5TdPaaTmD2Q2PLvHGvWAjVs58ggXXeHDUoF84UhQJtzshFK1WsoGyEAiPYhmC4",
  "key9": "3h5iLxrd9ByG1zZvrQWy9WUkrS44qQJJqR8F2358pbDjytgDisVBcAMWvop4uNU3NKdkvqXrAZFBL7K8FxT7AMDh",
  "key10": "5JwHGtTbXqaCthvqkmdhb2q9ZWiUydqQ127VezXMg1bDiwUcMnVGkShhKugFCzjPih9qQ56kAHvudEZRTd8KLnCW",
  "key11": "vfHpFXFYiRX93p68hU2q4qZaTrSDSf43wXQnuRTzsMtFkh6mbbfo7eKKeGrgszXa3Cvg7ewszWQGV5ZEbxGn9t7",
  "key12": "5QfgV1osngVj4NsBFQpRRnceERLZqEziwd5hzfBwCaTff9DDqu3aMk5FcCF5KenQfA4hWrzwtKEZ2xLNDqMYL8sx",
  "key13": "5Kt1Dx278G6aLpqkxpKmhkmQzgYS4xUGvcWQiTKXANHPdpJ7W5dSX9ogES8GGtv6hhbZ2XJjsZERLozH7SZEmp5j",
  "key14": "34RZELT79115mXayRGyuVEX5ku97SGQBVcUWYuMf7zhF9FgazJ8QhCzGzyr25eZsLxTZ3wodh4KEAkFHLRAMUaTH",
  "key15": "4ZtAiSZMH8ak81ZK4RcWrt1dhA6nWJvcCqeRRtcsTjmG5M6BfgfHaX2BCAXUYx72cpEAKzGiuC21fQR4S9Fzypzt",
  "key16": "5yEKoXbAzrm2EG6rkQyaAeVgo4irakWxi5w4YvXH8D987kvvF8AsxtbcpQhKzNa9QgxQnYWu7dvrtxpuKMCLt3ji",
  "key17": "exfrPovvYFzwnyPhdtHBc8Ngx3sPACuRjCCDC2672WrpbmKMHvNPpBq6eE4SemiYvtrqRgauRoDPS7SbrDagFQ4",
  "key18": "3Ju4zHLYhAsER3GFnL7gH4KvKycWSj7uV1MWCmZ232yGNqoVryBudu62dZF2UW88zdAHhrScLDo8AsF6qDdTV9by",
  "key19": "bUXSe7PsH4CuNHGPWFwpWJioeMV8FUH5bZxG6zpy9rQ7cfsy7rJCd5S9HNifpioA5MfJ3vbfcC1R1nmAQf6astq",
  "key20": "3rburABNe6sf56jm7kwhV19oRDSUmSFwZpjA8Du2JxpdAY7YdcrFPtxzijKvLnf8HqSPtXBQYYfZKzFj9MvrUHMu",
  "key21": "5LtX71Z1Eh46QykmJDq4LnAV15N9uA4bjEm6jmauMHtUpLvhKo1WxKZks3FpLhRwFru8btKcpBfVMEw1QigmrEzp",
  "key22": "2VAJzKJzxHPsG1X7uerpouXpsB9A6bhpTLQjvJiR5yzv6YPex2vSjsXvDeEKA2PQioPtaGnEewytdFqpkWTr8394",
  "key23": "2EWKiE7gcodfDJit3dn1pj1cyMT4BF7zeYZoprbWc8ockyNn2FRS8X9JLBhJPbAb7MVkXcJ11HfjHyahq2oZ7SH4",
  "key24": "3marZLDLuABBiT5RHdgjJLMCTH69K3Updp7hCYLZKL9Mpyc6DYnV8hTZ25TMUcXxgS28pdL4ddFMxuCtfFznahVQ",
  "key25": "3cWWx5FMy9DhhAN1qLfjrsNS1LxsMeTXBhzJtcrsMWvBCWtDBpHgbg5aUBrYtQUf4cpRHMovNa1oTauPhtHfLMCP",
  "key26": "3srmq8fcr9cqHH34ftg94NPzDJqqFYKzh4eD6ArSM8m4Xiuhh1Ec5SvyW9EGhaP7a4Hw68MKHrAtZFejRb44QWrj"
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
