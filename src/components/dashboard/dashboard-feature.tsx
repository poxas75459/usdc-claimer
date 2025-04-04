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
    "nPUsbh9mz1j2gJG1UFiAEN9peQVD1SxqskS1kqDBo4zwawXFYm1EgbiuZ1Vmo1eixbAb4Bzg2XfUVTejy1H5tmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkvK5xwM5v1RphBzsvNDqGk6scuXhtyoULtfihxaZ6iHrVFt9oYq3mBHdv6tUG6SGE98uDTfuPJAnxes1BF32ND",
  "key1": "uQPJGXkWmGiPmJ1XBSavd3gN55DWXQzerr36d1ANu5LdHFeZjQ1FU9TaytgbD3AFtWLgnJZRyJGhHYAfFXmc3jL",
  "key2": "2SKqVCM4BdEYiqRAceHgvSX3QGmA7c1ERr7D4f8XgZjio7jY9dwpQnqJ9v5CtwfgSZKypgP5MwwULmgLpTnkHehA",
  "key3": "2FGkZ9Mw3bB7LkXWDfXgepcFum84uc34vYQHmgULqSrXzC84gGW4f5DEnjmy3aPrpVBEyMz6ZqkbWr6rAHpaVT9T",
  "key4": "2sok4Up1Yazf6ncBnB24cZTDdXVsEdR28q2G9YE1yWWdodaCwJHff5proJTN2cUzVthyAEpGp8Rg7MgABKxViWdG",
  "key5": "2EnAV4e5yMYBQtpMC237aPu8E9Ckhrb9hpGLsqRfh9DnGJAQccA4CaJBDW3f2JG56kbwA3EHWX3xzcrnw59quUXm",
  "key6": "2gECXugVB8HC8ubrnQbfXMoen3Foe9rrzmn76k1W4U6JYduNMSu58WazFk3auFUKLVUE3ri2HTfTh3D6cBdjfFoX",
  "key7": "2udsGXU9UVGu1z8a2Q87LYdQtPc67mr65PZjwJAKnTi9n1hYhbosoziFYoYb4k4cWu7Yn9upjDKGcuGVwkm8rEtH",
  "key8": "KWTd1sVHQdpjBvkMbHgpWXoD98sC6vGTxDKr7W8iNhPmoCHZd7p1vnJtHCLXwZfbqTX83to33GzJvDJVdjhadFH",
  "key9": "3G73rjV11PXAiJgp2ESyeHsTKz2B1XZZX6sp6nEc3xf4oB4oiM5HmXUBhSCz34aVDZwB9vwJK1KdQUrYWtdykh2Y",
  "key10": "2tRnbooR8FYC7SWMqwRsPnmFSV8CNiJxaYmuDEPXvJcYToEYHgD9aTpepgDebUC6vzj97XwSB46dFuRnWApeqBHb",
  "key11": "2zYArwWAtUMvMVzLsKuni1eCNDqR57gsyjdZbZQW4iLyhhowtkjv2hiVrpJUvQbA24FEy8vnVHF6h2zN5Wx5rmBY",
  "key12": "Qma7JXUjpqG4y2bidJnTUifZFVyX6Y8SaNQHgKRecKHhAwjPRMfVNkjJccKZpPR6PfaKgujr4NTbTEqSVr4AyVM",
  "key13": "64fC6fuZe44WpDncLEJfAGETpitUW2UicuDnEwgsmDDHpYk7jBndr8TYXyQfDFeimdbc7euSzyJ6kraygV2jJc8B",
  "key14": "5rpttdXPfD5rfZCBoNGVMF56EoyZCRgXMXPHxEfFBsZYsF7bnMvrTQvx5SVQGpgQSBiEeVWqxJFeRd62h5YpdeHC",
  "key15": "5dxxKUMHDvmcJ9n6ctk7DtkPrAwwn8uqLwtcHzAqe2WqNcUCgMrXfUHLdH4pvMWXf1MqvtZsdZQQEREe91djcQJh",
  "key16": "5w8ryNFU7rULEhUAnKKZmk4t9XSPqbPDR94HixE9nvWi1SM6i11Km7rj8r9Kw8VYRMUtsKin92kdZ2qSYSbTZ2Z",
  "key17": "4TSxqET5nPCVte2neoycM29ZsXReRsdx9rJmwifN1M8swyACfuUjV4bCm882t8g5hMdSYvEoLXqw1XNtJbtsptHh",
  "key18": "5qU4gj3frJS7x3CPkUyCyR4EwYUpisodX6hnhxwgCrm5mj4JzaHX9zvGEUNTvbHvMRbvfBsZ8o9gpGQkaRbLrGYj",
  "key19": "56Z5KWDfAw1vPcMr3Mpwdg3rr3hdUPFWWuWBYQSVjw2hdZ9KUHZqGnMnMoDE44EXDaHZgePo8ApUDzoiGVJRvMfz",
  "key20": "5fqePkwp36Dx1NcodsbdHiZPXBHvUyYH6P4vnDWHhqgobWouqzanJyNzbxrjyztfFeAC4NPt1M2hwuacvnZ47vL4",
  "key21": "3DCRvmrBbFyLLfdoHJdbWGJ731wQgjtHd5Xp8YrbHEmmi5iM7Yo1hmESH613AeXea7wBnMfn2aG3UnpkWQPMm6Gb",
  "key22": "UHp9499B7czPVcJGhZXsh91ina1oZSsamZ3oF9Bw6J5SQX5s8dunLwed4E6fS2uV88oKfSB22BGXAkK8zxzRqf7",
  "key23": "3gTsrwXmYTbBt7WtTMwEBWH37YiJqoEdBby2stNVX17abkb1Tm7ixPPNYBXug4Fyy1j9HtK1w6eTsQZ5WUJJbNGM",
  "key24": "2xpxozLqNkjyJjT9TTVYujcXTfeJdsBoBfYReekkEMWMW2afDKYuqupeETKHEPRFFrr7QmEkeAXaVYW5Zt1cvxeb",
  "key25": "2bvwULXFgNobvRqc5TGDQBr5sTXbkNhc2aBC323Vc2gSF7h3uv7XWfuQqYv3z5xgcVwRtVLjnRcSQtGEFKSoNJs8",
  "key26": "4p5f3FyvP9BqQTJPzzY4mUJXh6LxMpSrgpv4c6Kzv8mFBRkpgjBABxNBYFhVj3ygcXzEDytrm8b92syCM9ULzsJ9",
  "key27": "3RTmq87sFGNZzVddAnon7cdmX2ePW2iDrtpfNmWwUtDQ2SvUbRmVVc9GDPtbkrUmjgnFJWzagNKeWNvteoF7joBe",
  "key28": "3QTF3vMECqKqs4GeuMNmdnpdk2LNzRDziNXEs6QepdXUASrqMmgPnF2NoZPduWK98wfyxeBYVW9ZidHzr2gmwu1i",
  "key29": "22hGkzJDWphjeqzWjuce2Tjhn64ZoAL7nRaeUXRFZYTko46gh2Uwj8bncaErHDF7dPsbn6MkvuFq1Pv6xH7uERjg",
  "key30": "4V7q9VZ1Fkts3K951G1KGhWz5WrWVoourhWPZoLxxW3vgNEMzPEDGr8KxqURnycmBroCVQTq9XwEuyv9YRrmnbkR",
  "key31": "2VXvQJDE2gJU3gas3g1zj9CTujSZk9JWd7M8KjXiuVKP8bQGzDB8ZBA3Cc81SaRn3VnwwmjeXhiWJM9NWickVhtN",
  "key32": "2LL9mCYhqA9rxqrAx85rhyYmTEQocgJsSFBJsRPu3X5xyMwaPPhjqZMCBBAR3rGreEBXkyyJR9q2myFwph1aRC2H",
  "key33": "2wfw2cs1UKQ6PrjXvMSyXMf4zjntydgFERAT9D4nKmWknVkvsr2BKbKhsez3WJLhoiSC48HFhxiQ3Lp2bVAaMfMG",
  "key34": "YuD6svgM5x3dN5vb43Bn4z9sAuMUmTiyMT9UCkKyjcBMDsJUh9Bg9vPJdJnywkwHPYhwyxiYmJg9sXXZUuugLbm",
  "key35": "4devEkxcP9F7KHb6YEfeE5cEcYoXgLTtzxXEEHUFngQtcqsBxxwU6ZNPEFEap1FECcF2955L6L1BNjqLU6vEd3FX",
  "key36": "4acGBwx4GZgrzmNMX4vV4ni5YKcQXXENVU7rYyAo5v62nmpUuRn3iDwJurz2cqHjxX5pNXJKagf7qH5TBrXfYSS",
  "key37": "55zYwGp8TiJxauPsYwKY6pgV2jg13qjjTgjeCiRoRGmNASfAQA2ozNWNbrH2eSZWiwa6yFTAAQjg4txpWhiQeJJq",
  "key38": "2L4HzdGeqoXeodgYVnq4xgxRe63A4hpMroyYwUxocnDZmYaMMDooEDzMWsLNBhnPV1tEiGDSuH42sXaa4Cg74wQZ",
  "key39": "2CS6Jsky2ENR3YSL6kFN1smc5r9J6X8JV5Zs3bpRPXyLBVGfhHbzaJjkExdtzg6rerGdVWvSsPcjvhK8FSJNQjxb",
  "key40": "2Kb3vUKuudJq4nd8qz2FRoTmk7oVEKbu58TBnh3o4TSDiPhW5RwgR9ehaWbdTMHZPdBVLDSXuSD3TuUXFVwgS2VQ",
  "key41": "CW3uasgXuwDFS2yhm75HptDFNY3STZi4CVCxW4zGij5w1ZEwZdPN64LWdAQSQf6CqJTx8euP1xWvzNP9kwr1Xea",
  "key42": "4QMeB3ELage7HLTKQpUWAaKJSdsWbRvLjSzwEk251W1hEEzQoSSKqeKLCSSZmvTDABsFJEpcgPBmyvwSdjUrt5qN",
  "key43": "5aCi47vhH3KrrWZbxnfu4hEJgjc2QSkiNutk19tyUyLEoaCQf23bsM7Ud3dPuWfQgpZkMe5ELXBeLnMBwL3gxsiv",
  "key44": "k11xmkBrV6kAkKbiD8GXmCxeJkzDrbpN1BcfFuG4Sk9rvk4Zawivg549PSzB2iXXBGq5fctQBpaSqaRRL8AMuG4",
  "key45": "2SnKQ1SeiSYLrqkXB8QmP8eMQnzVYDrVxBQFQYsEUMH2cmhwy2SAQEU1c3EbNGDPr2ybsWCowYDMxKZkpCMbt2kn"
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
