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
    "4m3TFR3q95MayA1xghLYBLKwXQTXu5tUtt3Jmq3CnWjENbzTUPTL56gDMKfTKQKbJCmSpVfj4kY8VcpXTox9UyKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EC8hZbhFqbecG3pMzaxshLV8AaxKSysF8bR56AfT37rYG7jwPzboqCRPgMx8wMYQ1S9zWoZLCFguQoNJtFe7GfX",
  "key1": "4bTApHD5PGPXer2KyqMW3xudnLecCGSY4wzFe83zjm65CVAfik2wGjCXvFdQ3gWHccQa1JDoBFwXggcbwNafYTMA",
  "key2": "XnxwWf2vfXFFvw29y3LvWM2Curo5Pyd5KNNJAe85JrRpfpLNbdd28bYMJTe8Lf9aUfVFjswRdqCBsup4f81kFfw",
  "key3": "3rjVapaqq76AzHD1t7LQZuXyqmyTRrEActCGmbjoEHWQEARysiyrBi8JAcaRrxdspsbPuS2eKTc1bxJBeReTD77r",
  "key4": "4seEJk8HWvyV8BkgjCLFBJThb1VuYFqcpNYao8gyRKCKwqpUd1VZX9wruV5xfUFCoz9fAMdZDNKbns9MrPdfXH4P",
  "key5": "3TGxVPvfcy8qSxSS56sm773a5ErJEc6MJ1zzhqA3uQQbyS4RTqjjmmN9nsS1TLrnYhgEpAykz4vM8yp9GDo5b133",
  "key6": "4WjwgxHix73cJtebp5ynDVL994MqFR6gZjHNLke1oNMY9ELA16jQVRiL6NJ8Qhx9hiQY8NNvARJ7SyBNPSbJiGMY",
  "key7": "2vEheVSHjVTPvCTMiC68QjCWaCkv2RLftq9zfDBLazp8gErwC99dzPLnp4MxzYpV2n4g7dd2mUyP82fFpR5HEAWC",
  "key8": "47Bb6D2nC8C5V5PPANvzFxeM4JhUfN7uWTr9QcrfK9kyoxJQ7pr1Nz4qRAwqGHxd2bZPDmpT31qQyAGxMojdv3hz",
  "key9": "3NUKfJiaRWTFUsJQjrNy2Sjnbqw1Zi86Ak1w8zapQQk8bU6i3f9p2vr4HkBNVCdQ8LvgL3K79UcAMmgYFq4q8rEA",
  "key10": "4yVNhUKYFZ8SFjCtAznFhE6NEYqTRhmWfZBcwr9buSbxJWAdoht1kertvtuxKnXXzoaE8cdtVtxBdUMHUTWpYPEU",
  "key11": "2BbEBauP8Rs8cdUYh7oS5vfb5nLFaDvxhR74zUTz6pxq7ZqzXFivu5KpwaZgK2n55JrnZ2FQf9BBGG5rt7bxZ3jJ",
  "key12": "Kidrmx3Xr4jNUuiRmwuweS3fZkXvxKLUKXy6yaCG9bASVNKXvex7wWacY4sUmFyYBZe9cKToGoyg6N1b6ghi9Wu",
  "key13": "4ZyH4imQAdebxLJLMbN5oM9JTmZLioZKyPVpYo2M4AeG7eTQstSkwYZPTDSxeLxqyx6eJzg6zB5V99QRxszQ1dq5",
  "key14": "289mDVGNgQuv6UYqpX5QyaBzZJBUsw155Dno8rrXLq9dQfejgBckdocUamEaWC2g6zETFvRjbG66ugaGH4KkTzLb",
  "key15": "35cHtkj5uGh2gqAMh6qcvy3TpAdoHhoLmxr27h4m259rGRE7XBSxcUzkKgBVSoHA5jGRez2J2o54Um9qpMAqUbWa",
  "key16": "454ihLjma4EUEFuqm43FMHgsx5zNmbxMbxGY8GDH1arSLFrux6eTrLB5mvwT4sSfdSuFYnNu7mVApktehPuUKSLN",
  "key17": "3mCAuByuYDweCFWUu6FwyQSxRfmSSHkZMyzY3MfjdUYHmggar2C6wyiVPdkLyACUarmTSFteahQggxfJPoZF7VK9",
  "key18": "2qR18NA5tNN6JiwwuiPpQbdwjTQ4FrW29ZQNNbHoXu9RfsiApgii9Gr7ASeDa9Qsj9sBeaT72aLQARBSjoWi3MAq",
  "key19": "4r6WUsSCY1BWAqojr627AJnaJDPacreqMUL49cFB9UE1BuHiqT5QbMi9RVn5AuPh1k2fn3xU2mcchKiGZutvH8eB",
  "key20": "4X1JGKouUqcrot4hh7UDQx8nwySgmRybancj3Lab8QpyEsq8xKGXUPRPjjcNZFqR2WsDKpFKvJ7z6VbJKFxExoZh",
  "key21": "2dWLxj5bRQ7ADk65KrdBR2Cg9FNuhynp5uAHgtvb2v3aNiXQPj9qUieJ4UaTf4XnW6TZjxgUPQZfqAuXUJzp4VnL",
  "key22": "5C37nyMV1ddxJyuPwboTGJ6oeTVtP9KKcDS8fsryGSygdfEcyqteQ4hGV3WhsucBvzcmPydjcPV8a96PaHJ9LBQB",
  "key23": "5WeMosHNhZQ1VaEd67M6DU8hEVzLD4wF3PVKXYyRkxYhZ5fnXZLW5hFHZeZXs86CAh1ZSUzmiJiXwi9uKHa6YaVb",
  "key24": "2b5Zx1zA7FSzNZd9NLoU8YyCk9VdGjFWouwcesvoiAGQrb3jsAFHe2LqAsf2rkGXesPj5ixdHYXVqKNwZ7PKXgba",
  "key25": "3gnduH9ewMKzJAFkwB7x8VVuyfnxvFBc58JNBHGZtfooCzYyhKbA5tXeVtcEbgNvCTsBc93vC1o54VfzZjpwYsKX",
  "key26": "54BEYXon45LHyFSeSJUYDmr86ebt8wgqts5pyNxXQwLusmLGKpxw6R1E8ywadLiMEZqW1WSQXpPtUh1msQQ4q4Qf",
  "key27": "4kPCngPAq7ei6iVF29x2rhrYf6TcTtZuoL3Z98MFjEwffiFNmfpjhACnJNdTpbRUcMQy5AiYWomDF4KriMRySP37",
  "key28": "PWMECvGx7KtDN7HHYFHSob8EYTDTs6jeEYMocadcGPY6VCurnKJuv9ifsJtwqa6xneMACQYsmuKwWNF9ce4GYeb",
  "key29": "5J8yZHHJCg18sXfVWLJgoWi4y3gTYi2sKvLVu5k72j4XNL1vzUqc9fYz2xqUesoNQ6BDsB1hqoVHQfYYHuwWAddX",
  "key30": "4WBBPBkwUcNSbCHgMzuF1a2LpM4WDt9AGB2ifdpgSadJmBcPEF2vHch9k16B5yCWWRorUHtAqKQXRtCQT3DR8dws",
  "key31": "37nqAb3ToZcjVAyhnwoAT4AXf281npk3r6XpJx7RFHXUa7Hcb7njr5TyPehdbd66DwugsrTCwCRtWowKeHXUy7Vb",
  "key32": "4HdnmLGtYKD7Ehk7PSFZjVRrqYZjkvEn7DFcc6TKzdousQU9967FmAgCsfHn6mUMLbPvKBYQ6BPLSkVqBtSSGW42",
  "key33": "28oErvM1Vy1pBsJMQMDper9LmxtUfueXcukXGn7tkDkJDhREhxB43HNoWmQSiyhQg9ayGkBYRj1DrbMEdh1F1Did",
  "key34": "3FvtEAg8Xnpcw3sdKaDFdHKvPF9XWCKKAVFoTrKqv2Fc6fwGttH3r2oUzPKRA1Wev9MfXdsMXuz7g1ic9inw2uAd",
  "key35": "4dH91WPVz4o1RiiKJfNLHrqk3JjjmrmND5VhZaJjFBaePSJGJRZzCA4zhzSVfcMkttBdTbFcrfggo7z7aqueri6K",
  "key36": "4hwCvZpR72ePaeBYvh2RJPvtxWNAzndkz8Xm5zD236wrLVkBzBiJAVCnvUBkfyVNsYYqT3znH4GySGYYdCTxxadz",
  "key37": "4FbWUbbq3vPkoRUn4wYD51b4UcB17WsQLSgREPFRHD1NLWpa4QsUMD2ep7vnxSpWa7v8NYqVk4j8rHjrsJLFVmPg",
  "key38": "c96vPRsahCZGVsiBN3Hz3DLkFG4Wpvrjp6UhF3YNgby1i1mqoU9wmteSQ4Z6YuaVLedRtwbxwJ9soqTh6hkkJyg",
  "key39": "2L6p11nQvCp937sfXqaXfUeYJDQ79Rb3sZreGbXV2ND8MJmSvZqhB7VrkeEvdTXYgw41EFCx5AEUnHE8nAVc46dC"
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
