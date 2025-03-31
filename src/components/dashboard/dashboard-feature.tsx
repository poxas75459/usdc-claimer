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
    "5zCWuAD8mptkL2AUDriVGzLxYPTGRSdMmicbdhJ2jpMvo4cTb5u6CUEZgY5BmXqgrZ19mmVEkXhS3tNVsA2mpsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ga8cfQGnAxeniR72ogUXQMRs41a6gUJJtMJqcd5prWNdcsrGSnu2zhrRrT6UbUxq7Fj374ajBXbx2FBPbaGJ2Qa",
  "key1": "5j8ZcA8CycZ3ktG8uQRBwW1xCBFjPFek1V47WGwdgQ5dHC3s8nPWG4fr3LwoHZVyvLUo9i9GxyS5i3TQVL41y5B1",
  "key2": "3egr7BsW3jKHvaBSHSBqNqmSqtGuAKgGPVM6xtg5GjkEkqanzdm2PJHLH2MuWA7fNHn3pWW9DZ1LvovW2oMuoQdq",
  "key3": "4He94dP6pUdPhm9K4ZqHqqgmXkXtnT7XfLvxMt2hKG6iWp6bfD6Pa5TbEaqaW9snhxQ4z6tcEa1PqXTDPgDz7XLK",
  "key4": "2PAEukdT7rBWZ2zo9h1o2fwgiU4gdNeiiPrZsZv8US3HCN9qGR7q4jaDdbSbfdBKNjLWoBuFoa7omDgbxwdTXsJ6",
  "key5": "5eDUmjphTgBHQ59y6C9y2PzZhxJ87SdV9u2DNxgLaFCTFb3ypgHU9YLCpFrbCakXUkocefHUJRMHXc72X29V7YyJ",
  "key6": "irqg2uYwTFfSDSN1ZoYBwv4Hxs1PKeEMbgJUmKVFWDPAtyPY6htYkB3yFZAwjvZnW6yZW5QRncwfpQjDvH6Nrb5",
  "key7": "rtkTykcfmMA9on91ovGA2y5A2aifcn8dWPahL5M4DRd8gsw6hMwZytrANgxnYjGRuigfCebiwUPqspzt7tTU9Uo",
  "key8": "4aqPyWVTXXH8i9mmwqbZVYATeUGJMYV1fN7rnHjJqPMAw6ThVNnztK9Z8awyS3BsG3ULpkyhXdKJV82zv1XBu8fs",
  "key9": "3ih92NuxkC8awQsmdW3AkD2HytYHMzirogYBeqp1V7z6HZLVK7Kg6GhN39PC19cEVeDX9siqEqCPRxYUSiucGKJc",
  "key10": "3NWeffVyKXjv2Lg5KbgAR8d46KUXXMystLGPywk5dSSbveuwV796LgoU5vu7csoyT2ZVzM1wHaXnyeZPHgsQ2uWt",
  "key11": "2P3wgSkM3gRcys4Y7kNLhdXEYz6ZKdGAgQr7MjpVVf3AzWXwfeRPY8k5ZYw5r5YiKrN1UCP4UTZz5EhkEKCgYMp8",
  "key12": "3fXQ1LhZsGQagDgM9MZgFD7grVLdkpn9CNd3Ay6VCWNZhMx69HVXQe75QmC67vzvfKAhrM8SwDBpiowxc2Typg1g",
  "key13": "wa4Htzi7Wyvp9CqySc9FjerrhcpPdVLHbqL2Z6zQ7EXs5bvQ9keudmNLuzWtsq1ZQp15PjeA8gSgpMtp1VX1pb1",
  "key14": "4KMmvBiRhhsXLGXmX4jvHSCGCL3RYLVJePKnSiY7dE9c4zrA26ko8Dm66PD4hEVDRQV1Q6TkSXFZW9hzgKAvUsHt",
  "key15": "241ziDUgiFSG8BguaUERmCnypwAg9jpoaxV9HzLH43SD69eDMAXDCEB9nXXeAfrTyBB653E7mQU4HKDU3gnptspn",
  "key16": "4paMrUySYCHtMsoWx7859wdoWq4Y3VQm6y5MB4Z8Dp2etRyVj5QbKWnw2jTQ1fPqXmwYfBVULhq6daLsPsQNharm",
  "key17": "47kE9Ln3up6TpiysrpuBbthaMktaUBzwM6MYiJ4yMvtZHiDqKZ3P5CGbdERjn9DMSPgQyvyDCjZCZ49NHJ16RGVj",
  "key18": "3xhrmNL4AZ61h62Wu3CBxBAcSxPtKHCuuM7byrKWWHVH7eqEx1ZzZ1UXp5FpcTp5sMRjYexBW4ndTjTnKkJdeKG3",
  "key19": "5VWCNG1eZf8k72HeP4sGD6wZE4MdafuKYoZxXhb3UD8qbCGyaP7MDBQ7jmNEU2FzuoP1rCKCoMrB3B4KYJW6MkXK",
  "key20": "yr8h8PbAELETPv3Twf9tRShLFXY2R9ZTF7bYxNLUVMctZTAegTi7DS8nX8oECxP2akPECqMxazom2cpuH8Km8tk",
  "key21": "5JHQpGCHYLhaRWSMPE3NEkNZHbaAF7p3GLpumhdgGKvGhNK7pbE7oDXCeWaPyFapwxJM3aJ2rW7ctZW2JQYCih2z",
  "key22": "2fYZMFk9wgTWbpYDaX8HDa9eXBwkqNUree5x3Svb1Xt4vw9BMJMWw4W8gyXHY9j9aZYV6MRQYAxPdb9MGas2PqZ9",
  "key23": "bfAHt63mrMpnnkFpG5PWKRsNeNycvsbXp9ir96WZJ9gaX31jxaMpfBx7TCryF55VYZmgc6T9JeH9yX4NpXhmhgY",
  "key24": "4S9S8GkKpK5Y7xDdupzmGhZ5fPH2krSKKVHJnxAcNpMWRk8pPmiNhh9j8irfxj4HsTKxhWM863FsXPcDzouyJK4P",
  "key25": "5mz9nc5vpwcXyStKa4JWBHWatcY1w74A4dd55BWED3p43qNT5vy5Fx1xowuzrKSb7ffszm15jz2mtinMP9xmj2vy",
  "key26": "29EyA7nzk43KbGDkbfB4nwECRZif3fUmETMhKwhZPoJNCQNrkvzZXGXrAMSznK1aWNqXuGxcaWb7QxuXRjN8jan1",
  "key27": "47BSgFVSpeeV5xb3AtoUvssiVnDmCbGVoANdkCAbk6Kbp6pRnujMMDhh2p8XRZe2N7cgFterLY9udehSuAHv88DV",
  "key28": "3v44Yrt5nStzE5LcMGzRiEvHfE53XoNXN8YYeDqrsPw6b6RvwkkEf5uVVRxUArz47G61PBhAtjb72b6LsAgeFAZS",
  "key29": "TwBza4bF17ABBwFQucuA7kAr7vVMToX7sLcsfR5GzDRJaJPrCuyk7cKKFNTvsaV33zu2wgJ9v4JNUb3qVPNvSRV",
  "key30": "4sT6Z7BAb9YTrwpaDTWr1U8UTrEAnX1wNUPatz2fXkK6LyCbTWjsF6vK7NT97p3DX7RSuQTktJkdqLtbLXRSnmUR",
  "key31": "35S81j9AjrZreAs8Qb6zNun18KQS6iyRKt2913N87AbHYSYh9C6LSPDrvzc5NGX3VRgkgH6g1B7AYqYy8nXDAHz4",
  "key32": "2JJhDXpEwu8QcyHvh9ypvAfenCFNJfhwJ46MfBQXuwchuEatGZwHtuvFpnurwGQXAeSf6suh8YDqRJwpFZC5uCBk",
  "key33": "3KiiUfbdGUyi9C52GHkXeRgnopWf4VW5xAwFjx8rHPSLLYnYJHV9TK8mM7twhpuuxMvxdrNi3VWigrwbGaLzScXW",
  "key34": "xyHfmKaBTxHDyaqidJpzUUnXmbGTai2mKvDn7hEUrCLNMg5Xx7U3iqPmSy981nV1UMw3kwAUJdN6iUJVRqoujB7",
  "key35": "3pmUoC9KFd64mBP6TpepjiX2FB62u6JYh73JPBqz8qFhpajW3PA6BvxTghQ33qk7wDP3fh6RjimqaHFSDj4wgzbV",
  "key36": "47YBp9dsagpKMQemmfws9GSypSQELK9dWeHRueiSAG9Hseej9XJUAXXSwm4Xump7QCsGegSpBruCbHb4Eq2FbZxP",
  "key37": "31ZzHczoqqXVmrerLkkQKS9dBUKTNAdabM7KBUtc6SWeHbh85BAT8FadBoM3CKkyc4MNSxFQAXsbNPnzpL4REcNw",
  "key38": "3rQ6wiyL3RzWKUnCAPCP9SroEDfEQzSwd7cxyHo6ZWH1ch9edyYdWfEtkoXxGY1gE7t7U3By5bdk4aXw8tAGAgiT"
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
