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
    "5NuDBDeQzszVRNdqCFJhLtaqPaxKAfmwvFypBkGiyjzHU68gD6pcCkmA5825dfmEA17a6x24A7Bc3z15wQvi9WqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GeUPwdkBVLDUbMFTo8LSCPwQBpssHDtgYCJSHHvVfRT3SrGADJwz9TEp7qMesRg5voDsEoa195mupHUmwm9WB6W",
  "key1": "5q9QhdkZ7cLSJ1G3Cpb41JmhCuwxEqVHqHW17bS5mzrU6eNqRJYkjDmnci9iRDdiqFGkoiG7jxngK661BUhyGfMk",
  "key2": "3zY5wJH8HRfCHw53ZRfy58NUS5GdtxD6pEEe5x1se16kUd24EfWeGbmfwHSRoCUNspTZHn1taH7Bkb2FthQYnDgb",
  "key3": "43cSXQXfKZfMXVx5vUbdbFvT9DNdRmL6EGXnbwGMjcKnXQdPasMZ86nhCz5Hx9ksfAFT3q8ScxkiUiMfvWMnjYrF",
  "key4": "2tYMgbXDt1aAmexLcRmgXMJDHEPPhgTwQBpEyD2Y8Za9DMFsLzCm9N1dDpzprQActjMu9Z9Wn1SPfVrJ4bcUp5h7",
  "key5": "3kdPrAh7JEwbKMe7Ro3tZNKgjbjuZaYbmfJsoxwYMpmv3Ycg1nQzucKma95hBEAxxqH5cw9fzKUUqMVNoG5bMfSB",
  "key6": "2W7i68XhaQBr6Qc6oBFaZ2d6qKSqHznye5QR4gn9DcSME2hz5qAbpmXUFrXLNdSGQfaq79kGdmY4mP4vjSzmymtK",
  "key7": "4imFXYSEdY558cK5ZR7Wm9hP74e3KUfqgFUaArgQfUBQ4vRKSua72gyLEhtQCet7DbtjvLhbYkLXQoJt4fJeL6PV",
  "key8": "3j8TT9NFBHPj5aTWNrRWfWCugmHGWsCrw4yZd2P6p5PutXc39a9xGHRR8ocAnTGiA7QCY1hC674NPVK8hYaL8wRf",
  "key9": "4yoXZqpKrZ6Wf69xLah1z3NiDNcQJU98mhWdtrJGSfJfTwAs1QQfEXR5WgWXyzxFaBDTFYtUij1vdEi6Xkv4rhGK",
  "key10": "5dm41NzfZMSL9gGfoV25SDEGwri4Ka5MiZ43XoLWMEGNJ8vfRJubLvc3WiVRaEb3NCoYPMgFrobfwLHrDzYpz6Lj",
  "key11": "2ULjMWiZeU9tckdT1jTwFwejXAg5wt1ayFWTwpffcfWhfUUhHk44N6V5TuQNeeb8RBfjcp7A29gwGpqfbi8Ka1yc",
  "key12": "Y3iPnvtm9ESc8YWcQnaAaHr2jDkdjzU4gg5NxWx2172Yjif1dxG8MhANXjdmEZH3KgLweXzu4JwLdQ6NwJFPYji",
  "key13": "5Gov1aYueM3KTb93oZnQ3cmjerUECpn3Lk2gh5NzmX8HuJB444bBE6KXB5cCgLxWsMaDRGb99Ef8WrvZ9WEByC2D",
  "key14": "D3Vx6jbPoCaqXYBEfbxMStsVegVdRDAsuEjGYb7BBY5zE8p98W2MJYk81f9KvsVRv3sQtaZPgWunTVJgdBgw9C2",
  "key15": "3Mw7EzJJsc6fnLyhh7p46WFBeC2hbyV7y5gDKUk8r7fo5Dkc7SLivPp3ynWPYFee7nMCBMgEpHkasxfa9weDxNrL",
  "key16": "3KXtttjqv9uQ2UVLCNPWh7t5eJWfSqi4hWbenqYU23xHNrZNZnPsXR6eeoCPZjxaa2zt3yDbp1aCJ8wnzKPGapQA",
  "key17": "iDW1oejVZfgob1z5s9EWd2e6wHeUMsk1kyEMQpLQfxXFA95G8sPgfvGnWiSQhCL8XMWz9VUD4fZKMLL28eLp28g",
  "key18": "5ZwYhsaLReXAuwyFpDfrWohE14Vx88TVpQZknenTGZc6HqMHKehbANHPSPLhn3f846ZQhw4meDR1eQ8RWykg2iRy",
  "key19": "2REtbj55zE1YBQYevxJxDFByLjnVvRHKvbMgBoPziKvx5YLnLTGP8HY9NAPpoTFWkR5y4Pv9dZu8au4MwARvov9e",
  "key20": "FxxUsKUiUkxQwBz1zmR8maaRiiAwkpkBD4WsDXrDXWzf8EZpB8qLxU7FzMsEj1nquhEqEZhv7jrfLABbWKHxzQt",
  "key21": "2SDrzBJs4qMbaUdBQUjnombbPYGSTzZ3fSCZzHVubRuRAYAcvBLf1WSTRyNnSkTwthvWpzhkGQkKEXjhDYadRwV6",
  "key22": "4ADYnX3jSLRe3DnaQ9GjPZFJLEEpySvUg8NAQJx5fEnABBYkNJLB4f3bs1JQ869SoPAQxRAD7uUue1k4Y5BSMUjt",
  "key23": "2UUgtT6eoLZ8VT3zkfrf2ZGDc6eFWUfBfFyj2wjzd3e6BqGHf2v94FX7hGS1w8a18HMJTcfY9BycLpMFQsszPtx6",
  "key24": "2Wz6ZqStR7RH6dT4bGZDqNjdEMqY3dAFbRiJGpLpQjo3XW4mNpur3V2jsEjSM3PohWYixeC4z7ySPusBjYSiYuNC",
  "key25": "3FU1wUbSAz8bSKS4hAXD6PYDa626p6nGujcf2kMVQhkBQ9aHc44eHGfknTUezXibiqy23x3t7gFSuErBxM8nd4CS",
  "key26": "42pq3bTvLPHXxuzY9cfLkL3pmyP2C5gFsm26YxmC2tQ6DxYGzjQwZHhusM2WiMdD5KxibfwUc7yptgcWH5L3EmkZ",
  "key27": "bgwMiJRpmfSCMpkKT2KLJUdANmyBPqQDutvDgQR9USL94PAzyHesjyAxpTmg4keh7AWkDnCThQeGnx7iumna9h1",
  "key28": "oGFK1azshGASBFcfnYoj995zkE5DtcRCZ3qzbRuQ7xW3JkeUjb3ZkFwKQDGZNeaZQT3XnxHJkzTgrpeXRsUyWVb",
  "key29": "61ELsx6uzj3KtRU2zma7SUtv72qgGbKFXUonyp5Ej1b7Fj2N7PUCeKE9Hy6SpCk4UPKxhKWuzrMZqEgyFwmg1Z5",
  "key30": "1eePLU8tNk9GSwHKjeATFn8phhDTU5UQNXH9VzsCpZbYTDoLRB2Pvs4BmpbWoFNdVf7j7jFaC8Kt76vxQoxky8e",
  "key31": "3Nxz6VvUweBJEGAapLUACJPv9Fv32uiXJpQfDoAhSUDDmeswpmqLGBa4pCtuxiXCgkceJmNGCZjupLyxzUNKnugJ",
  "key32": "ZxH1bvveHQef1R78dnM82j4XYQhACoYPQHhxZEgRF9PxWSv9Vr834hwZtjAwZ9VjDXNnCov2154QXHFZabMkoWF",
  "key33": "2J52BBRNpf9Y5dF2fBzHFxJNnn9hu7m4Ewc9LHpNMFmsfm2RHzsu8gd75tAKYDQtC1FEqE4C6GLX6MifbtaNmZKX",
  "key34": "3vLcucrCwqFXPqnDHVa6NAcaoBLuiW4UDVY68muAcdmstw4QJpCDrao6uSU8ceSzFBykh9DmkHbj3FprQKgQ2XkQ",
  "key35": "1YAKpHCYA58Wwdapuw4fsPinUTcsKzLK4daezpH1wD7verbx1TiR1JmxYDWGYwLuT914r98xBs96Qj5wrMiDeNP",
  "key36": "4ZTUbNeptgzVS95mg6vbtDoVpSuWvTukVttat8GsLTkM6fVGVvx6PfPH59S4RcZ66iEuUvHRLEZP1qwfyyFtTjyT",
  "key37": "3d6JXGcuZwAps312KP3ViLjxV8a4nURBk7YcAkDhW968a4QwNj4G5yvUvq3x5hSmYZtoionpoZpc68sa6xz4XuE8",
  "key38": "4KnCr4wMv4nA4aqRGTEw9BdBXs6BCHfqLVyYf8WKEAxG8cSWGjT9ys3pUYJ4gUjRaGJgyaivXQQSZmb1ggWVpRdV",
  "key39": "3qAEqzDoaYvVdCqWvFjRYpa8dJhq1PVEbAYZsAEL9ak7Jumfvyfrw5gsuPqaAz4JTeJaK84QnENT9Lb2dvwU2GZZ"
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
