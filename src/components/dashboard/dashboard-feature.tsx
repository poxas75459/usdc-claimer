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
    "4eA1EoTbxUirt7QaD5s1rvx4KcYmPuwrHh2Cf4u6jFZVxGi2FH6FAgHAgEuPMTiWNek6ouSEd8rEB6ERwH8u4M5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hr2Jc4GjZXaxN8W3zBvjkY5fPwMwh2n3dcXJs7UmVksyFFAwEBe42gtoahtWx9ijLH4gKWuTdJS2ry8xK9bKzFv",
  "key1": "64wk3QrA77jSQW5qMenmmKrWV9m18aFwNXNF47GmTu62w2vUuS9CUdiDBJdpCjevhDGnSja15W8pTcftzPfaMGAV",
  "key2": "5rqH3uSqa66bGVnoXazBW4WswuyRkrihPciTB3rhEjdz1BfybMn6mV7gm6CQHf1aB4hFh7qunyHaM1ExCBq5Exdk",
  "key3": "Mfvd1FiTJLRLgAE3xhjnzCqXTXZsf34Ca78Nu1YXUz3x5MxX6fwqBpQd6LrjW8c2N3EbfEkFqwDR1z1QYdmdVXx",
  "key4": "oK8rAdeh7o5uDYZFyaUk8zX1szwpgqzJiHYsDtPuFCc55dErgLqbKgJy1CZPeEVWRpPRRo8jHMkDuV2w3s5WTNa",
  "key5": "2hnfH2anzbhFmyNjHQNbLwkvZrLSUCi83oWatv8wNakZmfzHbKT3zXgCnPXsavz3ttU8fw9MoWzcfMzXJRrkmdaP",
  "key6": "5aNDnGwMkk7ofyvYjhH77bgEMgzs3cPkTjQCcDpowfBMw7PMvC9J3PWnLTXvmBkuV3AsFAVW65KjJ5ofwENvM3cS",
  "key7": "5XeK4bPJE17Q5JREcxhCUcsj3VxrCEkbQHvpERDF6Yv5ZSUgffRU7LXgziw1Qj6dNV1oc3usjPsAEtckbHocEtqs",
  "key8": "3nRsq8pGgHj4j6W7HVoMkjvZ6ASU6nF2dHAwTCsRTCaben6hsBJmUUYBZXZ4BH38U1i3vBAC88dJb1akvPYY1URB",
  "key9": "5ptFkU59T2nCSDqVmoeZMJUdVz1vbcLgUx61VUkzeTZX3Pb6yKTBHyrrVpWZihThxggiUcyTgKSCY4YgHkw7LF2",
  "key10": "2zdHpqhnf4Pq5ucKcwDAyoEUgSJaVaz3vfowFtLnjCSDDEszKKTufEEeKnFFu4Np5AvqR3Mw8jBeZZrJD6E4Lwoh",
  "key11": "64LQjoRZi8Ny1SxSYb8SKKfwcGDYZZYYrheUhfPairJuneZC2PpLA3MESFaWnKgLTCtv26WC23ywAJvgJjWd7KWY",
  "key12": "FKCtPKUMAcTMsjGywkXFUctMscgnBWN8mrWgSKecpfer1jnDKJZgMxqG89VVNZ9nFeMiwK4JXZzeEwbo1qxd7EY",
  "key13": "5AL8NzB5QHxLkdi3e8L6A1NNm7STaY9PaPfqYwdW7JNurJSLmvwkXTdkniQD2dHE8kcjNmwNss7sqESMvKbwsbz9",
  "key14": "33iYYrqfKZk5nax98vsrz2DYLRfz1xN8fQLsgSA2mePDwSAPezHUc8oE2tGz4Li22DJiDzqtUCBb1WPEU9ud2H3N",
  "key15": "ZrEA1p38qwCNyCcgFLmWP8UZR7N3avoWU7Hh2JgBmfwuZFRkA8giGWgJ3wyKxsjPTBDYTyw3B9UUyP1z6Tj3via",
  "key16": "5fkdnPmTV9KPG4LZhTvKKNqY9qDRra749e9LpR99S8DWMs6MuEkGo82vEE3SmH9A39hSSW5WpeaZVVa14f9SpsBi",
  "key17": "5i4y8Qi8LHQCCQRhqQJjRD5133WMGRCGJH5m3MNTiSAmsBYipHADMFsa89jj4rzrxiVRijTU8nFWPVhRj7ecnY8F",
  "key18": "3XV1bfUKhzKXgZ1o5wgpeGy3nwq3ZSW9Hd45T6cWF5ofhn2nMEJNSYKL2Xky9xNDUwvYLRQPStsm3KCNn6xpCt89",
  "key19": "3XZkF23TcHBitv2cwiRBaLeMovfNv27QwrSCftPd24GgmbBug35k1qUH4VF679s5dnSLuybXCcm1dm4YZNQTiLAJ",
  "key20": "63mDshzT14QdoWtyuii45qbL4STBReKZMn6BRF4tjvt9dtYKYEASPyAiRV9W18xYPQskVLwKNsTAzPhspU2aVkcn",
  "key21": "4LKrswKdsRkxj5YdqDVz4LmeMGEcfeBVAQCCbNasKSPx8QZ5bAUhma5dpZrXqgLARFCSvxTAWRBsqLFgPKfavSsk",
  "key22": "5ir4cwomVB2G1A96n5qZ1EAyjqGuRk93AinW7x7XfB23Lpu4mWdX9A28SuSzsa7weagGR9NweMkLXw4EkNzH8m3H",
  "key23": "5cbaPNvxAZQd6zebojLawTnTuAGAo1qBXYnWCwocdYA6ECS46hiU4iwt2WAJLM3DWYYoGhL66bzr4BKYSeEe9Fug",
  "key24": "5d4ALG2d9EpJJooY9MkbfabWMKLVdZZiBKiATqJLhf6T3AJDv8ikmeEhSJwGuXHKYTqcKrdS63HVrqJWEirRUX25",
  "key25": "5qcMdAiX4f2bR3bnA7nCWzt1KL9upVsmiAu4cUmrqxjJNz9HurXqqEMBQ7c2J2F2r5kxi1h2TKbamxfqMSegu1M4",
  "key26": "52aWxEZyjMzeThCxuMS8PoCVkKbGbAJRPmg8Dz7UMcVrvvXdZQD69UbaCgDuhEtfMmBpeyNy469Mc2H2ZsBkKUij",
  "key27": "4X8N6gVwdMePRWxyazQJvAwwvmxiXzFrx6eyvvSdeAumzofeYqyVAWmhjtsmyWBEw6YCgQrwkMFCfkdsXdwyBbTa",
  "key28": "sVmqt8MVLFVuWHL6zWKFS9EQGq41WkSc1aNw9NdapxEjbAnqrfvpNbk8FGRZTZsVVa6d3vmT6quK1j9HEU32tcw",
  "key29": "4kZjrwt4W8qBPZwawEBNoZfdbTSNwuTKgxpXtgUMJ4WhyCTr8z8fJqjSZuFGqhUY6wQ34fHx3nT82BxxU4eACtLQ",
  "key30": "67cWtNDkuWx2mfcnXaX8BBJ5toSc9XGUeAVar4PwySu9McpdQmfzeavPx4vYPhWb9KvXdi69yEb859UeuCV5FhAK",
  "key31": "3yrBVdXS4XvpVfxpDKavbBnZCTTczH9a4WiNgqBrYb7GJZQhxzzDxK8QUKT3Q8eygYV766LHsP9xNoRLJAgm3Q6m",
  "key32": "4sFZ1S7cRTEQ3bdqiY8VLJtgzF7BGAX7gqfbpyJpvefAQtt2shiB7Bw4spLpEfC416t2JMmSgjjEwUaM713u2x4N",
  "key33": "jiXjaYYgxcQ6e1mujRS2qG6NNprSC7sXMThySBj4C9bQJbJBMfan5xB6PHCUgg3MxNsQRDcTU5be6Ea6BBrbUFq",
  "key34": "4YK1R29mjMDAndH1GrsxgsNy3jJnCATE99D2LqGXtxjD7CCeYJ1chbsN4mLjSVm4jButMhQVhSGTtV4j57PTnS48",
  "key35": "4iUdEv9nC6dbFLEmKKjLm5QnWp5GK8aMyjVoEsk3D4eykyZBWPJPDaFjvpFgueDAPmz1iV1XZDfqjtoNFxiUv2L3",
  "key36": "2gXYS8gW9ZnKpXQyfMoKQF6fUo3J23XxUjJAsNVpwRRk2viSjcV8W8WvSsytckz2tUCx6zZz4UQfLXzpYaLQbzhH"
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
