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
    "2fe3EAdBXMLS3uoNW1xvq6R9U8qKH19QDtCMWALGvncrBdrFxd2K1yYBRaudywPjZr1uvnKzczXVzc7UwfFoKtjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EG2WoKZg884qHHC6kmsfx3c8cX5rGBwxgv1j3qgj9YdH2BmzAz8MEknAbXjhnbGAVg5zcJPSLXaztvg1AtbyjAH",
  "key1": "yvhgQv72FX98i1mJhE6CYD8BJVymUBkkETN5dYxzFUTXAMccvaBCpfhcx4bhAmByhgJAviz5HBL9bZ7dEP5Bn3D",
  "key2": "3HHpWGT1YLSakNFzcfkzxWC2zCGp8fCcHYEQjM6KyRYykyRb4q6zVTRuxqfSZ946dAjs3M3KKTnNHVRRAAihMLmJ",
  "key3": "2fSYyHFrHwHUJSKDYkLibigjSVyHjuScB6qJWBt7kLWYNmfL41btwfkgEYd3jZqBUKk8yddX5YKY8j8WxaqgC5cX",
  "key4": "4UeC8GAhQb7HKzXysaN2DtToAzVAx4ie678dFr4BfMJZtbXeFuND549QonGQkGkq4DbTt6DNRVkuyQcgLFWrARgZ",
  "key5": "eLrZ1aiUihBj9YuT5sFouhbybmzxAWCmDXWdLxBJBsBPiC8VzY2DK1tBpbKaJ8JQ6UA1gPoybYtP6fJXVxPgVfT",
  "key6": "2N5b7pwEjJ5axYCYZnoACXYa4p3xaYUfkheTM15hfUpvAdFggCDTjmo7pWEZmP6nYcwHE28uw3sgWSPrJLA2xDgQ",
  "key7": "61qqcUkjFAtTHWEuVTviiSSWa7UgC5z3uQPxPnNgUPMbBF2yXX2XvKEj1yGuJj3XUWwmBYcKn7DUAdkAjZ6vQCoT",
  "key8": "3XExYkzvY3j9SPfZQY1vxXAQWqYfsvu5yPweAEMDHC8Bcb7D4guxC8JFe9ZngYEe3qfoYqj3Mt5g9dcuRMzDb9dz",
  "key9": "4bG2RadXPfPjNkV9M2qjPai3VBjswq1VEref4hsLt4jp2qPWkTK6u7G8s4gyNFwJ47RYn7UzBjMKKmKapZBZUtbs",
  "key10": "KzJE9Z599tYYXLQCQMnV1pQpAwCXhsyTVxwPf4UwYebmFNZVDSP6uR5773u2ek74AytF9Rfb4YLSvVRrk8pgPcF",
  "key11": "5vH7e5uwGkgsmr3SLc4FJAwDvihfjCh9Cf9FYS8K8DiVbDfQTyTadBHF7a1i6zft12E26w8cLeui1bhXB9XSH18e",
  "key12": "34cdPb6UqwR7jb2uL6kYpARGANFCZArphRbp1Scqxi78RKyKc7dBihfMW2AohrSeQDJEYg2GwWRaUw5AHtpkncxH",
  "key13": "21fNvmRkaoXkPi2tftCgot9S9Dy2DckLssSBipTUw4KBUvqNM6jiTtWcTiqKFc8QZakiwti1jtYnF1okBRpVwQrr",
  "key14": "5TC924gmMy2RSPqSXZKoFu3LbCNdBiWNFeoLksDd7KJVKbdsTL2RHmjykeJAR7ui3ARcEuy7p5sacMK3ZnZ7ETgh",
  "key15": "3taQwEB3BYADZ7PkhzzYkv1cedXRKC74jm3SgP3quEcChFBwwCZFKY9TdqbyjJ7mY7SprUu7rWV1CpxVFQum3z46",
  "key16": "39YsU5zUL82dgc3ZLz3v5dkaTte5VKt4VE3y8yYRvFcsiGVpECjcs5fET5iyrTLL6VbzVXYiDKngeRv8TMhwP7Mv",
  "key17": "3qyd1goZ7zfiqicq9iLkRVkkaSiEP1jHpQFxan75DpdoCLLZFhvkMz55C1JiywUZ9ocy6zCFUvcX8dgCQq9wGzeD",
  "key18": "4m7hfeG7CRf8x58XpjnCooq9Qc6CqU57EmqwsVhgsFq2wS4gbUkUKTmXt4rT8H8AbWGz3yJZ2ap1dXU8ZPfeUwZp",
  "key19": "3fUavkJG7J3FLXzVN8brGs285TtZ2qChVkkabwkfU9JvTjEfn8UbfBWXoGXA7rGWcEA3DBwcvPK6JzDZ4nSh45dK",
  "key20": "3r1WA5Fzr8Z7T9mz2FZJcjcMNNSHhSxRa3DzNbVXxRfMJLfYvFGFQopZeYHfHfR5LqqgrmUCR9FjTdMxEuk6b2Cg",
  "key21": "2whnmSaQ8FXhYx4qahHwo7vUGM1n4Fzf2Q3uAtpw9BaoFH54cpt42emj8x7hcD2xRcCg61j1Ld24eyWN1cJUB5p1",
  "key22": "pCQyQmpsnnivAAbNQveViZmeQJZ9u7BaKx5TUkPEYMkGZTTyuzj4tFYCS5nXHNHc3ssb3MmoBtSi3MGrtwcsYGf",
  "key23": "TtHaTUvXadwyS4DoDHjw1NYcsnXtKC23WTZ4gVipPJHbF7imhpn9wnCyEZfaF79pcSDUxFqsMfv4QKYQaYZiUPK",
  "key24": "2fmTr84VhP7J3LevmPRQfKDovZucAgGQhCPL5gQFtqoa2mcrP4ZULm3L3bBNNCSK1jmp6U2gX2TLbQifEkgCksU4",
  "key25": "2yow5TnTQcUs5sjYRp7pLb6MR7e3D2xs3UG46sVUxaq2DvWAVVvv1cGQ6t6NAZhDfvH8d6HX9EWinQcyXXNcdP38",
  "key26": "2qcyzNzYfLFvGwJCx2BxeYAN6CgUebuncQXEvGDtxw7JP1GqamGVLjHC3VsGSbLF5gvW95qga3SNbvTUtFZAyJxf",
  "key27": "3Bf1VNiZbJoXuY3bzuKfjEDSsLbF4g2gjgc65tfWbmboDKXG76J9mP3xy2iSXyPBUFMG8S5eFEpfuYRYZxgh3hGR",
  "key28": "4VKxGLWTUnQSvjiJaQrFwGpJXDMLYA95LDm1VaSYWBL68KaHAS9geL6KGf7sLSP4nxoJE8hpAGkwLKPRAWz525mX",
  "key29": "2gYy2mSLfDrHMtDVp8otYEu11PZyrCiZBgVwadE2RNTiDxKmg94nr13ijWMrEBUKjLHzpeHSYTE4ciHWV3THfRXM",
  "key30": "3Mb9F5jAQ5LLvP51Cxdg2VtuV6wDP377Lr7R87QcUKft5CcRGjcC1H67KAqcA9yLYrpB1uRTbhhrTVpH2EVF9qsw",
  "key31": "42aVGZCHVDmBSC3gpNheCyUBXLQZ45qvq2DapYYLQ1FTNjxrf1v4Z9yKMTbec4Cx4Q5foLFq9yCdjDHd6EKg2UYP",
  "key32": "2a6Kn5EVdMPuYUcWwL7by9V5rWxEHvLuGBWWMyMLMpJFgexaTminoHCdUNfK1LscDpZYSYKeT3pQnZ2LKPyUkxpH"
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
