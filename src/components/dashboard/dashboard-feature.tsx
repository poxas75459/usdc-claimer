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
    "33aafP27Ph1ujvD4c6JdF3a357HMyEWqZXD38kF7QTsdTentzGL3XThbQNFpmYEXgqozr11hWDXZ9mid61FJQdTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z5WZ28n1ipNRhFiDVB5xYL2RPuNQGcmvapkGTF6qhzYqbsd54oJHXbBWjt181uCXrKnrcmLdSr7BXjPMZveUEDy",
  "key1": "yKNj17MJn6fsS6zz2oEPRkXBUbcdUjJdUi5cfNBKUMsmwUWGqnsAxxR9wXCNACD6xF6sYJVC1ZBqfFAAHKo9iPv",
  "key2": "4LXnSPbJDk1fwU8fqFsKBwFD9qzU8qxNRz8MnPRa1C8dayqfWi7euBKuYPpJRnYgftTqmVoNCfdaj45qyiQ48XfG",
  "key3": "3AFVypCnG65WyJF6ds15RBbgYDjYcZ2LuCLQ8JnXonYGyqXN3a1vGpMgdaG9Syyob3irGYFXnbwffbguUWHNqzhC",
  "key4": "37FNSEfHpmHKZjQWHESidJugX7z1vdp7uPqwXPc2aPcYtDMr6rfbAuNtrSKjJgxY4cBfxkPKdbomCw6gGEkmUQnC",
  "key5": "Hrupy4XZnVoyUMRu6CfJX7FMD9vJQywEsvtYuA1MxfprWGDKryCs3mSh1vCfyVK2qHNmZrjUgxpBTF2C6Kaf57N",
  "key6": "21MHx3qzX86CFKtnXJvXKoTyMPJEsrbWNLybqomHk3aR1j32BbEBZTejLhs4mkw399rLUdBX66zEfw7hw14gVVoE",
  "key7": "3j746zgxn3wxUtkthebHtroRUSDHGPyyW76tRKPjws44qHeWKeQjy4m1ha8AktrCpRCaw7LNAw7DTFPR8W6i6BgQ",
  "key8": "2kyPdcZidLcAg2Lvrj5oPDLb4m9DcjRvaKqhbpMx86wP8fCYVkx2r5qCTnX4QY8TRG5Qnb7Xnr6guouNmZbacymn",
  "key9": "26XaZESG2M1vTt3b6u3WWCaWKoddBE3AjjbhyQzky4MbLbPZQ43Tnf9gu3Qj5V3zWS1JZLoifxDitimnBE4iPARz",
  "key10": "4nGAD9AMXGEYyyUq9C52MXnisHFDYwibzaZg3NHXxvLJP3hb8dEu1g4DxMy2Ai56FF4QofVfm9DomjAp5k93WRaD",
  "key11": "pSq9iBJUo63onwiZfedfipFXkAYYZ7n4H7oYcP2CjLv3HARHesbdgg9TD4d2HX8pi6ZJtxpwFsH8wkttJNT4jEG",
  "key12": "4o7eJ91DBD9gxCFniVvVLaGTh9QqE8B13inLFAj9JeqsqTRvatjKBEyAib1HpkVrEUUU71Bhw4VguZ4CWWyRfBWA",
  "key13": "3cBLV9Nr2V11rjKhRvibGb62FHFeaHDjLMfv4Cjht7xHh8X8jArULQcJ7Ptr6zPHkLTfeACz5LBf2xm3eiYUCNTE",
  "key14": "4ByN26BdWcnBM97dTnXXZi1obq7iSLZ2ewyHc58VAvnp3LqMSEzzHvhYvfp2eBvm2BDvUXntsjcBSgPZLCqBgo96",
  "key15": "63jk6c9A82hFRUGuVup5VbetzXkMZBntwQVqL8UbjXfdhNSBMkPAqPzcWBDRvckpLWDq6WLLL1r7Sgz9JJfL9BDv",
  "key16": "cUoTWBL6Hm24ucaM5GuZp1WqK9hXo7Yz5s9qq6UjutAxkhJetNdtvzJE9YAgMxzYv6Xor3Wj5Sw8MtubVtrEPPs",
  "key17": "4rmyebeJ2McHYL9Xf6iqLMuDr8TQhheGnAK6iBQjuSdeYc43Wt25Y4vMdCXo1AJL77Y66H2sBFDLaBGfY3VX9Eu6",
  "key18": "5eQAwUUXYkGMUEJxNbFozBoHwX6w2wPamXY4dZoqVbeRgZYJbNZDByS7dkjvaSjKMF8Xo7d16q2DYaQoZiqYgFkW",
  "key19": "4bGkWouvC8TfzvBdT8uGTjW7nTHu9prL7EsR5s8ajU71d1bufXNGvtziDZtSaibLvBoBb4yXPJBwrxowokKQ3GX7",
  "key20": "2AiJPLuToyMAAPG5ijpWGj8QCDwaDBZvuJQQrkKcaRgJBY6Ywc7dPzvnV2p72A6Txb3kymVUCTdAdqUZLYwY6n8T",
  "key21": "sgR6j55KAsFdkHWuycnGL68r7C2gppyLrHWUBhjATjLMwVn2cxnGSgzW3b3GnWBbxDov8eN7NU1CRKVnmzcxJie",
  "key22": "5bSJcWQxZc2JMiZGA5cr8sBzFozFfRRS5BSQMYCkkseMJLbUtqQ3ehPVRW1RY1TV8vpeCeFnFTuatp664bNCYPxw",
  "key23": "5vwHABxKmdvr8zQfviusGRYjhrFctVKptYsVKz8rVNRmR3ajeC4ywGZ3BUDbdHZZquNBRbScfPD3BuB38XhWRLBW",
  "key24": "1mR62DzmKZNM9CH1dPRktw8hHmYpYRD8gzk3q9hzguexhd2hA9ykZxHqchcgDm7FicqH75f2LBKumih1Vt18Wq3",
  "key25": "dUydqDCySxLTWgwSXvfBUobmxvXN68Ro6hSWpnLQSZxWP6GRp6cZB8mnScDpjXp4ap8obwSjddqiRewhdw6ySq2",
  "key26": "4zYf5robYGh5ifVJcWiERJBYCAKxMecs2EX7XxeBqgsTV5nrZEBu6shScFYgZgePvDv7twu65bgLbK2Pdszq6gC5",
  "key27": "413ZmLEdwnuBMkommwd18sePNnpZ6L1cNov9ievcsdKBw8NEyWTMYVyhonY5eWfxzZ1SDgRXF3KE1CCwUFvUG4gg",
  "key28": "66ru2yAqytSvo5CpcRZwxuuTSJJG5KWHToTYqckbrMTh1DUk8htYn9HuMWw4UT3znGzdZLHAbJ7oqHZ23r1wJTL5",
  "key29": "ZS4uyQRBKNY8dQtpJdaNZtSn1pZT8rRUkuZHWvtJPXjxh6YkDRgcdfoKHWbhQVJn2wM5FwBsX4rdF6NXkYMacEA"
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
