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
    "5wMtAP1GieXcY8p69FYS2EWJknSBYneS96r8cWfpee39BSMiTRsyXvzaDLw7xQo7Evk6V25xv49Mv5dTzSpzF5S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1AH82oxuLDoSzCKQTUY9cwWbhsDzgz9JBsui84JNHE9h7b6r8mwkJgc8SP1m9Kf21hDABsuP41BFv2PK3RCGF6",
  "key1": "3GFcrJF2RjnxCPBYLx7tjDj4pJzaxfgKgKKtBJhhfR8AcUfcwrNQX6adRMpUsxTZ3PH1iRyPAVWcu2niPi1NEVtR",
  "key2": "4wPAosfMaWtXvqhZQkLy9vjVkfUT6mfnao5R61kNKB7LXpnBUUgBKGqFPqsLWLWCmbGExtE6oNrRHoSu2gjZcYbh",
  "key3": "55mT2kqYKHqMYY42XSfNZPLjfiWHdyRUfoXRhxrNBEp5oSnhPBo1NDh6LrU9M1rozW14MJUvj3djFw4ae4TR9PqG",
  "key4": "3HudJUfhMbirYiBLxSfucoP7wDm9WXYT9kZFraV4uNSxPpQhr4aLX7GsH6nJsdWMhtq1zDrSo51xrak87qJu67o7",
  "key5": "4JgArDD5CJaPDwNaa6cZuWa3iwSbFqwL7PUYheVnXMSjUYMBvdNHuK8ngEKnMaudi7UnFiBfgXz77ykJmoQUQtdP",
  "key6": "7pQeET2GsaZS6ZMr5kgmoreVRDw5EG4n3dFqedpgtrVHqGJRPeWB2Qqhz9RyXB7LsRiECQStS4XGidp8LMVxgvw",
  "key7": "4tf8eHBknahquT1j6WxvNQNcxU2gcL8z9mFHdge6uTsY7SqKtfdLto7Lvu5QZP5ckQAZhkHYyVysqDmVZ5yvQzn6",
  "key8": "3gf7WdJbkDYfJfFqRBBokPLszCLjnBHF7ExZbqAwd97z4ndhL5jcoFKxPLGtPNQYPLuxLp43LUbSVYtqaNnCo9kQ",
  "key9": "3DmR9eV4C2EyqKhGkzZ3SUPvGg8z25jP9tV8J1DTAYt6toGSkYoEzitpC4MwfKaid8LwhF9yv87YndzHTLzQNhxA",
  "key10": "5Y7nNReGUDFLkuANPcBAdyoNsfh8b4UaYjmZ3e3EWRWzYKDzeJmBCRBUAN6PBV9AgmtHxKYAhKJFHgUMdBn76fEq",
  "key11": "2WVn6bqvQfd5vxifCMMjYxF913hd5b4iKDMR1nzoUDmDmL318r93qeQAMAxNusszaD986dW1ByoU1w38FufqBXdg",
  "key12": "32NWb2pcsUs9Vm2gjttQFqvokuNmDSePjRYrztoB9BE3xkZLRRKh7Kdmczx2paooV2aVvQr5mfBDUjU3nf8e3xQB",
  "key13": "34Zs5NfJH9t3VgLJZTrefzBZcw1HnUFeqQdaDjtW8YRJyjQYdbhALF2mrnX7DN9sSU8gn3MFSY6eyRXLs5GLjCvr",
  "key14": "5yqdw8DBmod121hnX1o3NDEdGKeUg2LZ1PYUkgNKa8o4kXotQk4vuYf43qVd9sGxqsNH3X2kSuNQbrdu9bhDdL9C",
  "key15": "5PUzt1ZRM1Hb8Bk2wraRDDgiNZZQnWUgddQL7ZGeEefbAMJ6B6hmzuWXko9Pdu3SjA7AbHZM8wV9p8vPxezcfQ5K",
  "key16": "S6sbQkPhcC4v2f4ZSoo9axxV4wgSPXXjg6gxaywGv5QFCTPbWNVDHp6LwTerEgAvSEcoacmefgJ9oTW8oFHRJXh",
  "key17": "4mdb6ZWLbuoarZRy4rx4Hov26A9Z99yZYywuwCMCdcnoiQxLHRRYmSUw2BtxX5GH5fivc7fCWt5m3tjtdFtXKRoY",
  "key18": "oeugZJ9uKmRsmVjzZnM93ixas5kPJpPsFFdw3RKm7j7ipGD9Xd1FueP6ZZYJLnRaBZPAonkB7iffMGxioBGHfU1",
  "key19": "644yuQUSw9UzbnBNC8VgDDVgrVCvkPjLv4jw1UEGGFJ9A5cphStMLxswN9VJdn27UBxKWoCRpSw7nPX8fpR1EkNo",
  "key20": "3XJcWyhjrkrPjN5vVcBBNd3sHjY4WhS6zb1vwJimpH6SQ3pkFqosrJybaG3evPyB8xizsdAKvMWEVHVp96rrrkPw",
  "key21": "3dM2Nm7kw7nMZTmsKRKxfGGFHSszbNYjoktCmEGZfG31bmt1w9VsXRfRAQSAywSU2972rwG8D9PFSEhEhRAkLkS3",
  "key22": "4i7NSLSAqiVKFQbQ11AkPKg11jGadnRrNfvxAdZgqigrpcvtW8SX5513MSEh8dTZqPAdBWsU954MThsGag1uRVbF",
  "key23": "61ensehztK1ZKDLBiz2RdoKSDC4T5e36cMT6BMZoLSFUCT36ThGK7BFwWJqK7GrY5eHzcoqYSXqfACD6DkVNAuoK",
  "key24": "26oSgStb9Cw7AqN4eCMp2jHpGk3Y5P5VCtg5C7FvjAa69w2bT7WFUMmDPNJoZyYR8uv1nRdGiCoMHZSFfQ2jbtmw",
  "key25": "uroXg2cguc3R5SA4QDimChdPK3q86JxofFugMUP1pJNoYFWgexh2DvffuexNzaYZ1zkZdLAcMdzuy1iKS6vjBDP",
  "key26": "34NVkbPixGtdTxBe7FxUL4YwZR234N7UeVPdHwqinHpH4dpx2pXff4KTr9uXGVcPgufvCb9Nykzmf7wLGyfEE1K7",
  "key27": "mJ8ks45mR75rSpkNUoJg6uApdpNb6mdfkeeaQHFyPwmp7WV9cEiK68RtMrma67wAJJHmiqnejQ3XEUbqygQNVh6",
  "key28": "4Q6uvzz1DxdP79dpUkgDJ3h1NsXk5E6WPqAXvk7A3na2pxH865toZEhwzbAJVEXtkjfE5LZ3fLTRZopQVxvGLw7w",
  "key29": "4Y24xb3vnoRvVfayqriEqYyJeehgi9E4bSRKBX7yHCgeoPYuJV4xyLtEq8dDPXfRg5udKqRg3EAWEf2pBPmSgj18",
  "key30": "5Lg6HG1VRRgw77BdQMaeE9NjqumxyqQmNcK9ya8g1saZgMgFgNnU8GuPfHLdzk6Qw5Xswx3KaxyPvJ86zXTRJpJh",
  "key31": "4uVdLVhwkJArtdJzgtsaeKf37XsAcChCFHF8ThWxTjVc17cYzdH2GMRQ4PE2NfTfJ8DuLb8CcwcXPyZ5sLMSdwhn",
  "key32": "4AQkv5Mx77hv7y3bDqS8SRjaWyNnPwuAfPPnfZ5LiX5u7sU9DoDmbbntxSQXiMoeEo9JpbVwfdKe5JCQ8XzAHrTa",
  "key33": "2F26ZMmF6raPVhayqtkr623TbZuK5NS159sMUnaG2T6SYHfzYdepBwD7hAizVms7g8NBYJhTasko7DooxiLpxVHt",
  "key34": "5WfaYNiJxn3VYRaSEaGx8tV88QzAU3mutmk5CzvYK1dhxLFvQGw2uiQeoJKnXq9wtCCi6WjWEyWXAM7d2wtUMzAC",
  "key35": "3vxys9Kq9wGjj3nzZDdx4f4RqZwUjD3aCJRNHayUVpn38q22cH9dSPsQumaQ91nuixSr1aH82u6gUVurBV2X1SLN",
  "key36": "47XtqoK5bRZ2Q57kqjjTdQdqMegL3FdaHMoFoLorJbagbfG15PwW9FUY11j3Bykxq7nDfLJNrTbsSfq1phiBK3Tv",
  "key37": "4zJhKunejRV9nogR6xW7zWZqWVySj4fgvXfT6sBifXDBbVNTR81qviRZVtcbWpzhRfxWkmPCr8B77uvkLz1TavRp",
  "key38": "25pA2j7m9uas8n6rGWQ4fpCNV36cB9eF8CcmGg9ihRYJ3wCXf3HHRHKLecfZMS7AzvaqWsJDNyTNMW8UkgDkXMaD"
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
