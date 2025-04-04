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
    "4K5TfiKBRDGHKcSrvMnNwFb5D4b9M891cMHuymyU52KcLYi1j9QRGXrrDh2UQ5FReGXH8A9MJxrsobuCczGAdX5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxKxCohNFTSk4ZxdGm8DmDoXBWueGT7HDQxUhi6zWWFkp4zBzam9G1RymsNru3Efm2o7t3bh2NjmeHbKhUutWAm",
  "key1": "3ngN2PG9RboatWKZ9BBnzGiUa6kDNWpzBkRvpN6VpeU4uyMwUA2oTeneXwjcHeCrt8m1g8BKRENzXJTdAYr96MDZ",
  "key2": "59a997cuwDp7j5VBT2K8LqoQxdPMgcSmRUBCj6aXtPQLs8BCWBADbuuh1kV6qkP3MziVonkGRPLLH62WKauCBCZi",
  "key3": "4jtfP2xRLzSrt7N32CumotfQMwPubEXwyDpL4jZ3ZkSxsZj6vfhGHPhXfvHqxTb25MzAzzBFXbmhdEzxGTrKfgnt",
  "key4": "59uY9nyB5JEZdqQFm38cGHWKxRPuiyfMH1SGJbAuQuw41KXJL39cumaU6sKFnqv8rXXNi5tdwqfTY4d72Hij7JGM",
  "key5": "3btot3harFwXAUG7E72XBjo2YWZbRLKSgLAYcZABUBvRKJjUw57n5zPfV59Me5wR2ci4inh3saHBoXyyg7x94moC",
  "key6": "26j5XofbrngrVdTANo4QdLxXj3MfWvvMRysUKRb7Se74eEmdvunKE78VdizgDdYhsjpFComJGjrCCxzESc4n7nrf",
  "key7": "3Ljh9ne9oU1xYXokhHhZJxQdMETrw9CWrbi4PWd9oz3YXbuRofn3pxtpLNAJc9csa3SN5rQTZhX9pL59nRoUFNC9",
  "key8": "5ngkzxYQkr6JYE8j2a4eoJp4mRHxDXVhtAGqmpuK5GeeHoQw9BSazPoD14KPXvtFG5XR1Dxua2B2dQjryRpNeyz1",
  "key9": "2SwZxSZYCxYpv4ji4At2D9ovn3G6xwTMGyDUMwWe68LZMgKsxYfZCiwRch9eDtkUM9dMywhYtNTKKsaFDCxayUad",
  "key10": "4zQiNGYkQcmztsJQAFkVHu4XHugsrWyBheqqcpisHqgEgp5F1tH3Jw6tgFDbJoJsqdWEFNfvPZmYUAyM9spSV2uN",
  "key11": "3TZbwCGYS5ziXfMoSkwaxUsGiU7GDCMCyYcxN5bRP5ovKUoQ6yPYfureDccBD3LjK5ZJj3fU4GL86RnLAoLNxdEf",
  "key12": "4K91nPYBGJcrRvqBEQEfW7aT3XJXfH6biuC2CG2tpVubXKiW3g1X5kVwr7w8SjoBbAJgCmLs4BSm5uh7P72tFzTj",
  "key13": "2UFZD5ifMLaGoKdDXeQmaZMs3vDd3s1NbFdY2p2rJsYw1brFR95AuLbKbQgtuP5kaBB4LvqVtnmteTeXTEbWuRVH",
  "key14": "4gpJ6fLiqSJNmZHD7uUYAbAxK6tasgMnTSuVusAKwWW9MGfrZHCv5CzVeo3sjS7JUGyMLnrCKs1PLGAG7V3EFmz4",
  "key15": "3Qgk68QpyrwEwK7RyrjTq6LUyRfeg8zmMo83PLZeSCPP1RzJyvtNDMJCtQkoAbDcU7z9vBgPkCTEoB2xJwrSY5rL",
  "key16": "2SmUJDBdA1yyC2U1fHw6rebACo9mEcLC625s8v88SfNAsvdTbA5AdiktkXqNfzf1UAKMc9XMbaUYKYFcKcvrsHLq",
  "key17": "316m1R9MkMaqsoW86dwHFV1GUWdwVysCi9hZQCYebquhEhjpoEDnZp4wFjc37yUtuSvBc413G8NxiksKBw87xZRV",
  "key18": "294ACp7iDf1t5xWxtgsoKBxAapyvL8ETatZSCMrg8rpq2wfMYfkoTjNMtDGGwru3oUSFT1dzaYty89Vja3AxtC5Y",
  "key19": "4xeEqcgxqRUKKM8Y58BAwEGfYS3oYP8B8C51a8Pr7ezpwqYgY1PaGUbD2C2cNcU1ii9krTmNLtNX42bjA9kjmgxi",
  "key20": "5Vr5MaS2DCWHo8KqF91kaJV5SrBrMCrL5NnL82hLcuv1KwFLBzTmz4FHtyNG6guAPfyePrThKcUDDnjuJMbZwaxY",
  "key21": "3bo35iAnPLMkR9ZSVPfG2VKK9VjDikxEpPKyJzBnHMAWAMvqS8atPJV1ZMCUspnWmAnQx5h1UvZxKZyh8fzJYJyW",
  "key22": "5bBwYDVvmM6jmZ5poFdCy3EXguF7kfxY9QPfFnRHNAgLKmhV6ENvoqrVRjhySrZLhcKXc92NRh3iiDGHEsvPdzZH",
  "key23": "57cBhBvoXM5zvrV5CjCLt4XKgTUgTstjWDZkQArbbCeeBM6WcXKY6JFk28d3tZ6AYCkXAQDAk4pZLvgoqU5X2xe7",
  "key24": "k8cgaoxtmxByuy8xmHtxhRqMsYRE542QqUy7NrEN5Yp6DNeu3wyNRjAWvyabt6XgUVaSWt63bJhpbv3RMQG9pkL",
  "key25": "2ZgBBD2ZEbUm1ToquJ3v4tPQTbLxd62tr31jrwmWyrCyyZrJv6aZJMUQrsUATbAUvUwQJvXsMyv8op3RLApPuaiJ",
  "key26": "xnioonaQ4387mS58HWTHPYpRMd6mrxp5gsbSfAE1xiYZMwFNYSp3QdHXajwTHSaM7LoNiwDGPsHSTTaypq6qYyu",
  "key27": "7NksuTYVNRxExy6LWoepBr9qq1YBXUmURqrf4Y3LK7XGv2tJmyRBqid5uSdeS26rV5GKEzuaPHTc2xysmj9NP6v"
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
