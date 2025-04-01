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
    "3fWRPUE2uNxyQbixfgY3Xgo2f91wwVqMjqzd89thgnaVhpoZ9UFHGyCM9ZQzZnheeyrnW5JcYcnaWGss9D4LNciN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUCeWaDXoKnSddotjrszy1mYUdMdx5gQtKyPVVus7XnANpABHzQdkanU4SGkpCsFbLuaQv5XXeHHW75S31Ua2Cx",
  "key1": "d8Mg3QJKcRXpVqtN7DT1Jb3Fywtpqso1jjo8dvoZFi3VUE8VHvqrbMsjeHUj3nKs9oeZuxtY97JzhfPpJTbjuYj",
  "key2": "2AtP7Yqsfn7JiWCQ2MULnqC98496cCCLULzzVojPGSX8ueyyVFFgPpkag3pTNB7dNzgrL4UqpvER7JS5XczsbsnZ",
  "key3": "2CQ7UHVVjmxr2Axm1s5HfPQgTh2c2cwmNdsHsecX2d2dxCGawFsGpmDxa5VD2BPdFBK6vc1e3Gv5vntNFvrb4LaT",
  "key4": "3GPsKktCBLNcNpGNi8vJG25KoapJ3qc3VUhKx6cvHPW678vYwHgbLA2syZ7U6PfjsedhzrrsGKxfGB1182R8Jrkm",
  "key5": "4A5DKbLkMgK1bgfyjUXvSREAd2jtDAcosm66DiHxKhc4724qC248wRxqCRRvMWDG5ANQeb1vsY4tsBJKxgbFTstn",
  "key6": "4ndLvAyTVnPbBpE5qH7prCS68gCfpRWMy9oErZssPA3v1rkJiKuAn9VaT21ACmNWKh4ewjshEYLgvY3DBSkmLpGi",
  "key7": "sZ8QUPb5knM93NQCPEvmidxHjy2oVvyVGsbqpR3HZZJvvz8FSaXPvXBt7PSME4iTt5PbpBZiPd3EgesjMqVwXZz",
  "key8": "3y8WTcsXM7gsPkUb7XGJxVSb7D2kCzL8LFhrHs5VYavESSD4Cmxsp2sGiHNm69ada385yUV8nfKLefsiXG4ULzdN",
  "key9": "atX5v8KXT4Hf1oP7Wwd7Lz3G9yQvH1hMJEe9X6L4MNBcJA5J2y9ByUfsCGBH1LcyDNgmoh6vhuWZMTCacNVWGv1",
  "key10": "2SJen26choZjdRaxdDBK6Fhr1CxGu5p1vNc6UVxm3rW5SabVq7dkqLX9ZbdZcAru8ZSVEPhH5EEcCoun6deJt1V8",
  "key11": "4M9yjdtEv8TtxB5YkdEdtsR2jtzpgNyEES8rxLC5wwteAoVyj529Bf2sTeUawNFMEYs2KngSPVqEKMKzvkvWRLMu",
  "key12": "HotCzFqT6W2h2JsarMyxbWjsV7nrL5vD8KFBSpzM2XnNfwcZVQVNYqTw1RkVLiMbFzzpH2jR3NfrT2UgJyWJi6C",
  "key13": "4axUjnVmpHPJo2J3XiJhw6Bpx5UqQU26p9Z9gzUSbrPmvDyGa43y7641HvNiHN5bwN7Ft2caskdAiuH1xjHx2EAV",
  "key14": "32vVa6GzdkyaW9CR5JEdUtPm3Zi54C3XwEDojpyEPxUN4s96kXmWy1HqNuEKjyjkaM9XQCU5v3Bfn1bY6rtutZzx",
  "key15": "334WnNFGEQY37oQbb1qWoWTkqaRVaAUicSFKRKi9iQgRH94DNp5QEe3G68m9SQALBYDfWkHxgkDXyTdJKXEuGCuA",
  "key16": "57Jv3D7tAqhHo5mR9H2s1VdbCofiNqY1Y9ro2VQBG81YuN9vDSs3TECQxZ9SyPt3i1FSuSATConsdLmVSWz6E9is",
  "key17": "2JV2xWou9FKoGoYJvoLfHHMWSfbgigTf6Heuc8XCthvLY5X6YnedL2FuByhsAc2UoZf77QKRg3THhpRFt3tN9nQ2",
  "key18": "4cG2EYrjMMNZST6sia5Jxi6SNe5GB76vzwvRknod4mT6Cwb4VfnEguTqss19uyfWx8AFiTNyYb1Z9AQ6yRJcP6Zy",
  "key19": "6QXYuE3CbwaUuP9hMDKmhm4pMCcc1U9jgGDeEsQAJ8ANZd8GmBQ9hMcwKC7LuCNeUFvLxchKyqtkiMDNxTR1ceb",
  "key20": "3P5MdeKvgudjC31UuK54jcVzjpAVqqyGDiCMfBy2oqoAV4srmzZrQdv165B9TxuykWBq3zVZLpvW5ieBebcJ3HhZ",
  "key21": "4wVZrSxWqGgNhvvFagauSxhpfH7XPNKkCG7cjpWvB61aS1vd8SG979DHtd8E7kVXzh4vAVeQ2bFXDYFfcwKNkm9e",
  "key22": "37j8ZX4g76Mx5xc5vULU9WnTgVYqEVN7sXy53qtRMwuDSEEwidSP447PXR5V3NnLgJ4BReP6qyXT5whanimoSv5J",
  "key23": "29jhphs1S4WqpdDiMe8yJs2uwE66CXFpNT7bcfCN2NVh8d9M4hgEhCpPtbeBqgQEogU2cMWW82M2w773ki1kw7A1",
  "key24": "at6svDwHsDexdeNr8utknfYfXoURCgP4oraEx6udfWe9DDGqnyZZdvqkNQiUSWC3uhp5EZmc8HqVksAEr9nXizx"
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
