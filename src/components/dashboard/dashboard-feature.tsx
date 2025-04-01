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
    "57PBCzjAdtdRvcyPsUJR4tRE4fG1rtNMP9SCbhrQinU3NqJpLvTB7JJTb8dRU16inZNf3QdEQwf1JDxNhu59GuzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GDZ5my1CJ67Nn9T2VKav67scW1mQ8M88CNnTgEszCKDYEHhH7jpsTjrjmVKXUcrsZaDJTy7n7qexwwPHQGfXXjk",
  "key1": "5sVNhJjfaPRxDhdbA7Q19JCpzjhFd4eZNcHud5r29vyityvDDMkyZWLEVLWXsupvvF8YBCas4zbw4oehZJnQufcZ",
  "key2": "2m3sa2BJc4MJ6jToiwgXjPXnwqoU97w2eqVYX28jKYcmu7ukwJp5y9GVymxYoRPkGppG8TYSAPKWYuqBhLm6Cmi6",
  "key3": "5bZJUXPVbYV6dqpSXQpSxpTwM7aodJ1qCY4YTgRAJckFkPH7YiWPPdMHFRa2NTohzQEKk8TaRqiRuxKFHuEq8y5G",
  "key4": "4Es7h2S9U9w4YUW4ursEyzRyVKBq5bmqWBfgEywLuXHAgA5Bbsu9aWqzWCKcjkiqAikDViXwukq2QowkWNzFoZvL",
  "key5": "5YpDLAveZGEXv2qMYWzF1Q3VLw9wDLEahMJDUJftXLoBYnUmQer6EwvMPTW3dkbFHnbeCv4dbJdsNGLxmf3TZB3e",
  "key6": "5qr7uPq63chQTLMZDMDDhu55K9kriVhzXJtTEspBZoNFQVPzzoCn7wBu55tiyhUFcYkHJBos2BnBscvShjoThdcp",
  "key7": "3nBgWWrKLLkQHRgDyf2bYbpcE6dDN9aFoExqWPTri3dCjZsxGN5pk45HFQn1mLGNSWFPnQTu4jJp5hyoi1Krafp7",
  "key8": "4HzzsJu6Lc2FSEBPgxgpd4YrVGuNNtc1DhSUFX8fFmnMzxkdmAoC3xztT4QZVjzTZvtuEGSZzpjHC27BSqjQduYd",
  "key9": "2zDstaetxr66cbBvD4Cn8sHso38mUKEwqwJLfLnpkFzz3nDrwnnteAvzzGcGCT8tgBBdZbWhLtkKdrBcWNK9MX9R",
  "key10": "66qiZgieH8xeYwUj9FTfMH3RWGgkyPZmszhGcm46aUm5QSk9aLaQRiVEYPgvAeoPxwWNobrc9ZTrASCmJxFcMs6X",
  "key11": "1Hv5brZUT6nBdCq884XqdYev1H2S7YauyGryL2uW8UNFK1rkWQvUoeyxdq3kMqk9aQcd1jhjfcTrmw2TCpHd3uv",
  "key12": "4Gpup5AEXRdpQz7Q2AhA88GoEYYxZs4oqpBaRwEH95EuxQv9v61dxUpJT72uo7yfy3fcRubymSFxdWRELE7GNdSJ",
  "key13": "3vDcmTpowF46cS2zPuNfvd9ELGx4gao9QWakQGUbnAPAjjkdRjgYSRKs1eQz69c4xzeSww9tUgmyb8qJ3V7yzNYj",
  "key14": "5KNGabtEk5UkRAUDBDuT2RMLhHUHJ8ed9X4avv5zMDXFv57rw4BEqJU2kb4nzEswtT4yo4czRjbpPEekLoQVac9L",
  "key15": "Z1qt3mCHbDfdTgmuUu1NUGT5VUGB8PUX2feV915a5tDTvYmorRxjKzRU4PLvNUbCdLoPgZEANPjApz3myLYWGdX",
  "key16": "3uibxzA9qCy77grvChqs4CJx9fXAQEXmv2Z8PYnGsstUpa3nTgVBPd24EfLUUwr9wHrZiaLPwkzGtnQDsyHYy5bJ",
  "key17": "4jo1WmyBD3StRXHeKZkgpfk83Ye55KYbLY21ZS6HfbvEixxeNstMiEj7HeKMC88FZVL8PXcZGhNeh6zNjZ6DCfyz",
  "key18": "5GzBRKeoSmeXzkZ7Wx9zaeFFVKyiRpdCS56wHkBGu6kaXYM8FqcGgXMCs14xvg82S2bhJZmpDMrDcnAeQj2wsTS7",
  "key19": "3zgNKbeUmec4cYUuwkKsW5MUJvAvTWBSLjvFkCSeu7mQNy2TuVH9f99VHwPUbXNYSE17ByzHNExhyrJPckLFvcqy",
  "key20": "2M2iMEDYQaG8jjTD2NUgPzGG5oJ2BoD52pDQjLNbJB8XPMeVGjGtTpR5EZnpTnZGVgp3S1njqRkzB84U6oAY6Shy",
  "key21": "3nNaz7ti4PKGSDd1EeX6uZtcQCaC3V4jGsnXrNaaqUthrJ3r1SBqhwktFsutFRQNG5QR1SexwFwdXa66uPWq4Wh7",
  "key22": "3hWd5B7voZmEqx4JRadjQ1tJxgHtoNVwrGo2rcwe8U5peDoVRCR9msDq76qnNT9ASfXVEbFsVce4G7wuc6CMCjws",
  "key23": "2UXmEtdupr24CfEjXtGx548UBcURRpRNbKou8CFqeBJAFZ2wU1StUooBRuDHGiqG5yTKcVbYDLJsmugjQogVu7mV",
  "key24": "cSyWxdPH66eNPeiZUdtg1diYDB7a5HQVy856ed9hYJqbdhoMz16kSfQQHvLw5Sjp9aKg3H1dtScBw4GxBEYUBx1",
  "key25": "2zP8TxWDcZm6sZN1mKFrZn7mfkCLUW3HxJBHFedP3MKAQ3N4mmTQfzz4vF5yyRVsWX1hHXzDyLK67NLFg7s24i7G",
  "key26": "3NkAyiHcMfD9VrSD7XHkiF1SxwJ5n13fMusfiNpeJBwgjuehbeaF8s93G7r4secUvuKRnoUJ2osa4wueQFX5UemA",
  "key27": "64egwKFHWQUVMkagouayndVjyaefLnjZLkVnHFvn892bDpyopZvgDgSHAFXv7yYskHUytPmWm68AZj66tBE63F6j",
  "key28": "4Vxm8mKKdWAB4CUf2ekeAUTbUmMkQaDYFXF6YdPo8RPD6YyQHBL9Sfa4HPZFru75NybVeZuc2gfZAbyUAhUCM1ik",
  "key29": "5R2PZyFvbX1jQyYg5obvWrfszpx3Wxt1Nqv5aqyiFAqa7H5NF7zAZrWjJJsCch2k43QRxZGDGH2R8fm3Fn493sy4",
  "key30": "5Y3dvHtaxHKqpEqXZyDiwDp8xwjMWeRiwnPNmvensHm67z51vfXK4Vg8gm9UZrtym5poh9nstDoyaERfw4oFmorB",
  "key31": "5Vtm5dAdVruGco2y925vNsgEAY5DGnwB9pSfEDMdowJCfyj3exXwTYpx4VSpNsf5Fi1CdAzDCdb2QgEaTctLd6PR",
  "key32": "2Z9tz7kqzdmWcQ4NvQ3o1dqwVn7EBWrpud9zWeXLq8fuNdHtvaKrYPP46DhoGhpmvK6U7wLN77TjvATT7Bcv5Ba7",
  "key33": "3Y8xnYLhzpfZHL3q29JP8gMzLz2e7XZCBfj1ytAd7fAS34A6iJiwxiZ2geu8j4FsZLd1WWf49vEBdjbria9NLgM8",
  "key34": "3DpijXJ8NLhZdMKCGFUqq3gjUCnwqPTCEwNjgr9HSVhsCRe8XW7SxTVRxVUDn4Zx5u1YnbGHzbE5rdz1EuoH3CP8",
  "key35": "KfFsiCDwBY6mhtgT8qVoV7TQ4xTWk4WhvLMbPPE8yxSNDcL4VqCDS9s5s6bZkiYXVt8ytJD7YagYUsAJPoczHVT",
  "key36": "27AUB5kvYKanhK67c4D2DFkUKPhHSEqgxu8GKEoT7ZtAPxFxT725cA3ofQ2jki49Cwv31NutLirBC2nNMxy5Wkgt",
  "key37": "gzeYkkieUZrfnXLhrLEm9hSAAoc4oSpDaEhp1bhixc4ev6gRhK7Rx1mLhdBRodnt5GViXfV25pytgoVULxEgoPo"
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
