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
    "3JbT9mG7eJ4Wx3TgQ4VGV2WRSPc26esfQBSas7bx78uLR6Z3gn6Q986MJYGSg2TwqASucqk4T4rjD4XFjcm2SwrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVKBLTa5uaKm8b7k6S6PGhX2nj5Mtu1TUzVRu9jc4w94kuRYxrDx1w3RwNVXnarmZFFMqzeDsrMrMa9Un63Pcee",
  "key1": "53gDxxUg59UjWQzfvJSYsPWTGLRtxetYNnpazuVkQbPUSHrmh7nDh8KATDvhFc8Daxe2jrBuvXdDfHNza7khuqkY",
  "key2": "3gGWz7NbCCEXJXDKqau3N9KQ6pTj8qkPFnqzBo8tbZCDNXXAnUW6emBTo2f3n3eKdL4bZutqNjsvczCoqgzB5DzZ",
  "key3": "tr4H6LVwTwaZCKjuZ98U8Uh7NR2nbAgUCXg88h4DnR93oRR7hKRcgkzKoiFVykUoEqcwxUkSNaH72YS9DhK2Kub",
  "key4": "29LNFWcUsapjSMeuHyFpWnoZV5vW514h1fg5uM2V8fhm6LRtQYQ6Uoo6GzfpLFMCt3h5Hr3Pi5aymALTR7jZGzc3",
  "key5": "4YYXTiAm3gXdEWAeJJ5z4Lvo8cdfcyX31i2LVyUqc9pmTr6DgcL4eu3vZs12Nd1vTVVyUqki3kjiW1Su8gm7bXCg",
  "key6": "4SF39WsHvp5Gs4fu6X5d3owhMMbv3SoQLdu3KF7ZYdMqQqFA4c6JYwQvBtuRhpDrPtbX4wiaNNpovUWzfxWDjHs9",
  "key7": "5skAzsYRu8KkRTb6uhi4HDt2AQ4C5vdHAeCjAZegxQSkNHx3nrNQ8X9zwfP2UY7ikjYXLGzT8FrUq53jPcByW5eM",
  "key8": "Lw6STWQN6tNvWkLiF9C3M8ZgPMwWd6vWDbQbpGzmBnFyAZVAyn7w88N2TP12S51UEqmDb6HSswrmpeieriyqi6y",
  "key9": "2fF54ksHMeedrL94qABu1GBB41x5QYi9dKGzHDwaB8wnvgkxDRyCADsvhkjTHunBaaaQzj7Y2CGb9wDEQCYVFGTW",
  "key10": "3Mnzmo4VPAMZCYqzygG1hXkUTpb46k6G5NgojqRMJ1CVhXyFBJTNFMGxwGzmXPiNpJWDz6sYPMLrQHHYG2pXeMM",
  "key11": "saqU9u5q5Dn1EnWoMc8J7WNd1gFRn9XUrqWMmVeTWRsPVNLv6ZS7KTVMnRFnrNR8QwzaoTN8QviUg4GMZ9csUiV",
  "key12": "4LAxT7N1XK9wLY738xc5C1zRucS8u6QGfdk49envrNrnLwgtMEhC29Qd5dAVdyaikcVPuWDVVcYZDrgk3F6aUGyp",
  "key13": "3EhU5Aw6WavfCc5bQsR7X57rwCctSepXVBXNuyQQxmDjZCTcQqYtkd2gHF9K4v3xB1Wiy3bLPMJ8cytDfSrmmqqu",
  "key14": "4PEDWeAAAksK9xq6PLToWnJ9n3BhVYj8JWraoNovKoANZ4Du9SNb64iB3QyYTmrwbggvTJiASowrncMHWYKieu2U",
  "key15": "TNhX16jf3gdMfz8UCiqpZnsroHiUXZeuNz7jJMuj6ATP3cEEn3acFtoBev3Ld1WjY64sT2MkBiGH18quP2W2k4M",
  "key16": "3zztbjf4vS5Wy3zDDnRVSAtw7wyCteytgvUJLVs9P15uyRJcawabcMz1bbPk9TvK1Nt7cSaHQ7mutXTmYyusT5Er",
  "key17": "64j6my19JUyQjfrjRLqtYVzpu46g7XnUaUrRSJAjqjjYC7wYgwcnUaJUX7amT2nRMav1oQ6UYDdsoFHpQDcsHADu",
  "key18": "5GN8Erkxy8j8rgi3wBfYDnoGdC2rByrsWMwVG4WThghbijqdDVuPbtwhGinfhrwjdNwAGfAN8ragV9qLREc7XBtM",
  "key19": "5BC7pWX5eMLxXiBHtZNFWooAeYMeoWwJhLoDHxaUTo3EKJ51XpykmNZKtpM2qCQRALuuD9f8ZKvxFPrbTVsReBW8",
  "key20": "5ikjNES7bMVHPsjdcK2Exfoe2mdNNBydnFTQJ6zUAYhj63dL46tE6XERSazjfx4N8jHn8R3ZJorh4ZQHFZfi3Zjj",
  "key21": "2sxXQzULdrHqYC9Hg6zRjpbjQPzU4LkkV3LumBJ6KhAt34jWc6CHLVo7u71S99BPUCtmkHTpFFkoRjEGpDzboeU1",
  "key22": "3FZeweg1KeBZ3dRmzDzEZzmymvfX4SvFw7eqsmuYvTdRw9jpxMgRGKpV4n2Eo8hzay72xpAtvEmz2hBGVWxKtAw9",
  "key23": "UBXGxHT78gdrJje1gXqkxXKLDR92u8cYB8L8qs49Nr9nAoBHng1AmXcfnREuKnLe8sXJp1Vgpdbv4rQLRUMRS7v",
  "key24": "4SMNHGdcSGJBb3NnDh212fjvyDjMEsi6kk4qb7m7JDYaLhXSHA52jHMXDKF1CMQ22sK2jQwVUGJsPjk4KpvEh1PA",
  "key25": "5rgCVH2T7a7rBtDa19idygNfbq3T86m2ZzRgrH3zi9QjrTgLZfWeCEFGyQr4uK9cGy5sM3Tv3BSnnG2bpy4qKA3T",
  "key26": "52117S1uWW1wbj64rF4X92XP3J2vinkZuakteXbtypf6oSyrffDWtkogT2wVSc1stKi1h3Pe7n3eJnXphj6CDQ6V",
  "key27": "3pkUc8WnNMWsDVrmeYYAZ7Q2L41UARey5Tm57y173Sp3XasHQ1buaHQQGU5tppPRDc7WQ35PuPrBr5nt74YwTbwH",
  "key28": "3ewDbuTfwrRw1xExWd8kQd13BcSSbXfbrLc8kcXi9KXq4d7i1ufqf8vmBNukCLzNjEcouSCWrbvARW7bYXkrhh8Z",
  "key29": "4qcTLxpmbdydWSU8MmUHZPdgkvWM1Uw8r1ZAJSk127N75nyViWpiPjQdtLsufryxtyX7mmrwPvi6Cd1Rqnp8xE5Y",
  "key30": "5Eke4TMTSHAUHqMhZvbQmipg4BUAVAQkNi6oq97rQdBZvmYD1UbVi7NSfkgDGnemUdHNYYZ5x675enhPfY2YGFAz",
  "key31": "2xrALxLCVFRmeV5B2ejZP9nAiMf6ABRYKFfBjuakwSmEASZ6rFGGpqRpenwtjjWUzt1o6q59k9xK67QWPQac5nvh",
  "key32": "UgqU1LNzDHyJWsJtTp3V63NdxtqKBye2X4TnGhJ9bpNh61TzbYdu3NxoSRSoXjNno9Nn8Wab9bZHE9KUtRjwikB",
  "key33": "41HhRSqn19114HdGRaD3onrjSbdte9e23x43kgUKV2vApB8RWB2Gcz61PPy64DuFF5Mwevx16B8LsSkAbrE7Lgu",
  "key34": "sfAq3Yza3nRBSDQDoCNKcqSqE4vPe7Jv4cyiFXAFB88godMM8MLALYGBdhLdtCkebFZmStz5UwnDHUBgQoRnjag",
  "key35": "65yrQo9uHU5LziVqEtTx3MnVWSGUfCoWthph5e5U3RxH6h2YXwBVSHwTabJRa5ZYG37M7avqwdrFhGRpCUxf2mfJ",
  "key36": "54GgKbbK5gn29jwQqJ1NcjWnfJRKkrNU3q3N1ojUAqAS9HJ4Wzn2Hp4Efu1yFSJzfZwm3mXAS3Gaos1wjae2AuAX",
  "key37": "3kR3r3pzwiZcHczz8JnFpnaghMWC9WgzhcoJiwXeN863MBWFXtV3bLSqZRDC5DxUHqFgStBte25zCcYXmxrF4fks",
  "key38": "44K8s9zTtJbJjKvTr5pV3iFygpF9bwvnv7r1f8QFMJPnxuR6PaD6FKDBLTw8rkFx9qzhcGdgg7PU8GHXfTZjmTfm",
  "key39": "4N2DsiVBkqi6KZgT787DuyJ1dJswMCdeLNe7Z7SXB2SQ7rSwYMgBwQcGE82oqLvcg9NGkyjQN1MQoVYQyAdxYypj",
  "key40": "49r6iJ6ipZtPjETiRffEaUBUBJKk5moMjiy2E6wAGS7sxzVZaUubWef55mrPSmVDe3jCq9mHVFm1zb1RdmqmH68s",
  "key41": "4CiXfdk67BaWjQtZUJ6KWxFaoF9hYex4WGqGWrw46aN4YHThgcHU8opu7SH2iVQDmBUgPCn8hB7g8w9CF8kdxWv1",
  "key42": "2VhXhWPwQ1k2iLUkGELADh6nKXWkVEPnVhXQED4FbEsmesNNtnp3cX3HmzA6r2F9ZjrBHtPs4Jq5ij37YrnsjRR6",
  "key43": "3oq635Wpm2aUqZN7SoAfbcDLHWHjwMFv2Woc9qjrCFSgDu3Hba8xY5BziG4TYDYF8v3HqeHKVrvT3i26ZZanxGg6",
  "key44": "2gZQvCSvwmQBS8wKNbgZoa1gRgxa3qLZCYZxKcLGQwCAGJRkbNtFzv52eq3RPM39LKGNrGRembjwKRB391SE6nPn"
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
