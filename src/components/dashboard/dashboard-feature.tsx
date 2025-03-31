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
    "2B6RzjYBxhLoas5VCCRuvTFFhdoVDPqrmMYw5kjLYCVMT51dfa3357VdseXkpEo2UgaELxwAj5sjchS8ddPZcQAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPCXLZVCpt68A1Up6wGmG58JpgaQjxUA6dWW7EUHEZbtxrzj7VxR2FTW8GKKcmmSPyzrbkGEPrraRuNNGQqjuqm",
  "key1": "66UXAcUKWfQnF7VSjcSUYGjiih5sHuHgQFpXkFiC9GqFP1qrhDJY2WQXXQUq9wkHPX2weuMFjMX93r1SjidkLsJL",
  "key2": "25pQ9EqWgJcc9vdsFQeaLKX1WaoJCrzRGgJ8Q2DkFf2tJ2pnPAmSWgvVoMVH5f8cZoSjeTNyKA3WyuydECWSiBwj",
  "key3": "3zQeEnfpQCY37DuauEKnXbAz3egzBGsccgqij1LhPjfrB66fCrzoVdoMcDRTziqCcdNX7JnQgJswuoHVPadLKFQh",
  "key4": "64bfQD5wYrqawXn5R1SNJWfhdhHFTEfvSnvwC6MTx9aaJocdeirX26Vcyv4TdgQ68XKf2ZZLUsEkqCCn5X42HgXs",
  "key5": "4iYVtiqK94ZZTsZ6gTSW6PJuYnnhtC7bMYKNyQmk1KDdLJR1tjjkFKDkRN9z9cB4CoXH6F1oDXwsTyEzDuw1fGm6",
  "key6": "tynR4ktu37SdHyHn3UrRkzDi7JTRbA3aEvdXR52cuGZvYEeAxtUJsF3a4U3SPMp7VqNoaHHrDUJ6sj75YyqpfzE",
  "key7": "3Q2gE2Rhw6w2CheYz8j6rkrBvtaBjsMbeFQGQBATxDTSpWto4T1FbBrCMSZxEC79cseaVUfboh6FTQpqGETQZ4m6",
  "key8": "4o2djxs7EBhQapQWskj8t3GVanudnzxdwoFH1qA5TNbFnEVz4rSxFwF5PD872CyZBRsaPk2wsnBfxgNtNLyyxDpx",
  "key9": "3N5miHtuAjRqtPfhvatzpfoPewPP7q1bb7GVWFaYM32Vahv1sCX5E1p5m4WxopK51Ce53TdpUFn4UEyuSBxHRYNh",
  "key10": "23bC9fZrqvEmoGYi2fUjZWGi38QtHbs7W9LYfrZxjP79jUV8xoAEZZNCZ6NjmwRhDUCAjF6dkrtnc1GLyLDkGUdW",
  "key11": "3Z9HXjy6cQhJEwoGapgPyDpFwF3h4NG85trCNuRXBfzP5kvr2vu5ExyBNKsFxwrTCnc6oKHrPpgEMiixyM9hQDuX",
  "key12": "4QkeheZbaba6qBXkZPdHJhEbcXtBiGmUjhKjd5VqsPG44L2EuLF2SP6d2ujtpGZZAUuZVjgEPBazZNtmbhz9UNu3",
  "key13": "44yGDiLeutkhZcEggfJN1d95WprBwC3M2fbJ5JCuMgheNxxQTg7dzq9eXFChaojhvfXPbVEErHbNXuTKKm7ET84P",
  "key14": "5LzL3w5Qd5LuNgFpuynscM9nfNWtGn2kkE4VGAyjfEx1a6YxuVZGrndhkgoWER2fCdEsYmtmGkxyUyTz9obPcisD",
  "key15": "2LifzaFiqa8b956yfiTLu7oH1ZFWWmhR1P3XW6XXJYhq1wimmpivCeyd8PBKimqZhxmwFxpu6aQtmFTTo2bvkh59",
  "key16": "cgQV6FuEZ7pt5sQsG6DTF31ty2swjTPkk8i86KiYdgXZqsFEJi3Zv9i6Sr77pLfmbq1JCZi5nTJq9oXKmHZZWKc",
  "key17": "4Bk3cFPVQ6zbDKzEh25dAdCcmbDvUeLFVEFzKTdLbAo6b3XUS9kTmUfsqDi9barjNmV9MeGashjMfq9C1PuNJ7jv",
  "key18": "3YNBUrSLpFJhVjwvDj1mougZ87Xx7RcXQ8SD6W8djw5jvDN2xNHBE4XxWNwdZi6SMWWcvhB1FXffdExqZCjMdsYG",
  "key19": "Bco6JLEdydcSPNt7UJTRAgzDugFEDHnhwM2Chp7ymoZ8JK4gShbxUywMz4QHDnDQprTzzyBjKb6xgPbY3hTfxtJ",
  "key20": "eaauNA3v1JLz7jEoFncW6jEe7Luqn1NHEZMqQZhpfzpcKGjrY9b8XFcyVfMFWX5qnQDzM37nLYNe79SeCqrVFm7",
  "key21": "5wSxhNa98j4bEwbcGR2YTT1c9Xhsnf4aJTPRBZQ9GneQxXz8zKsmMAY9drGF86WRJAoewLZ77XdSXX2TCHfiTBfb",
  "key22": "5aQqWC41QDmHHF2kwMkykovM39MeMQMLtqcGvFJhmkJogHgLUjPmdCSThJB5AUs1CAtrHVw1ftUQ4cKeSFtZUt5z",
  "key23": "2pu1fjgqoEoGhBJYNnp5W2zmSCfP2cJS19MYdTuFGr4vNxLudLMgPtRqTG89WRatAQsCcXNGDoYxM5j2rhgFGnp8",
  "key24": "3mR8k3LrSsoFFcemUADdc3fW5bEcKT4y2pvifU2HzPNNEvwry826xRh9vvGr97YccdddgN8YUKRsN1cQGHLHbx5Q",
  "key25": "5Pnc9bGFLB5J2dhxGJyGoxGLiV4Q5CwPn8ZtYUmDYH57tmrhwUmGgQ57dxVpd2CNEuYs8va4YuNLzGyVYjpQideZ",
  "key26": "2JcNAFXhfYKmfXJ5yiCkhekZrtJMJ1En9QJYrCDFxsDFG44itExPt7XoWbBVB7vyurP43JhSKTz9cE4vf9F888Y5",
  "key27": "iSxkv81izkgN2NUAZNtdeUgHQTZPrxj6VGLaZvGMjCikq5rZNQddLetnRzKDcFjqbKEBXmXsSdCyUXBkdqkMdDf"
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
