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
    "4SuYxZntP692v2a9UWE8MVujMm5cEHF5jxHyXS89DuKaiymTgSf8DJ6xpSxM4g6xodCBCWqHcPNeb3KaaC2FkYQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WavUs6jinNwf1GfVDLzQc7EcSK9xbboQHJeVZ8Z7M3kKZuXE3ECFrRjvpGwfgqEczCdXa7J84v4bi29dnTkRTLi",
  "key1": "4tCUcx7dA9E2W5Dhbjc5tnVe1UNDpzkjubV1wJtcY7EY1DcmHkWoz7vMyEtfGbegxreWksPw8ShSUstc6oxVeKKk",
  "key2": "5XvPRJKfLC1uQMh6jQEJwejz229eEAH2PFkZAXmFgeG4dP6NRNGUBX8NSiHpVrfaKsTpKjSNUi4MtzmECrDFJsp2",
  "key3": "2xtn5isttrbgpzj1T5UZfP43eArvp3zQNGELmxQsak7NBRpsyQEnw8jLPrjmCXao8uuK8zrm7PMs2FhiBuS1vmCL",
  "key4": "Efs8FXXRAAqBY7nvT7jQCP2aVHgRS34e7HvLU7s7cKQwzr5diAqbZ7hh7a7bE7bTeT8cy936k7ioyrAQENHBd3N",
  "key5": "42KVcJXDokfUXDETKq4k1PVG8VzeYZKifPMWWbeFGVjAJ8uaXhs2spFTV15Yzn6kqTGGRjttSQhp8qcg3ccD8C6A",
  "key6": "EZ4y3eSJG65k86As5Df3z2yb2d9y1euxqPoYJ1JKeosN135Dw9ipkuYEQqq152zZvoE2Da5CvvQvWWXdVr1APsA",
  "key7": "34n2jgNK9fzFK4Phr48Hm2YczzJv7x9wHjZCzJCm1yXfJu6NSTWQjHCoKCZ3yNzSAkD3LUzKuWNW4iRA9MADhPBt",
  "key8": "Hs4KQYhVFnSbpgJtALxMc2x16xvB7NmwmmBEn1YKo9oPbGHENK8ENNUQTFoVd85njpLNhtz6VW9kLGyRvsWjyBe",
  "key9": "5eZEvxoTRUx98zBSVB3jHhDnb1hNHBKSHEyuiSNmr2LCEt8VtAzgQUAe3UJtxFiTJh5UDt7oRFqwgfW1mFofCQtL",
  "key10": "4X9vJZZPUzBJiATa2UXtnqdLjQLyFqcXwCdBGk2NrERZgq5CfmNp22BY7hRVWMQDsj3UNByFwzzNBmqva8aEqpdv",
  "key11": "38guzZqNxun1RNBdY5J36cNbSFrnVZGuTP2JyXkaMeNFzcfK5NhFrh8jfwEpP62Pg4zz2wCF1zNFr5QQejux2f2u",
  "key12": "4s6Awmi2bamw4Wb8DQCSCNnfBM3hi1U2gurGBizeFXbUgXBVABUCyUyVPGXwQLQkTG9JhwJbDDL56nSxt8ZXqNtV",
  "key13": "649Nvz8bER3VkbXBaYSbGfcZxyKcwCcazcTcHHhUBmeGXW7jRYEJmBsAKAvTQ7L36jgdiaYKhKWSRnTDFCQLTGK7",
  "key14": "2FpbET28edkEHLbmsS2fCucu32BQL8wGUate21sQ4xV5PPEJn3E3gLC9XoAJJ3seESAmU4vsFCnPWpxo1VdW3JDG",
  "key15": "4TMgwyBxo3zE1K5pWp7rXbcTAKdhMoxjpeoSxNTudsEoJ5qecLjCTkmsnp8Ab2p9a5PWWzMzxJiRk7bwjM1ACzpR",
  "key16": "2L1i7mJs59RAyRWuQ8TL87BN6z6xUo6RhThUhGjhcxz6XFkGKovgBSi5y1KyJrrHum4iEbdZUfh4AR4KQfVu7DS6",
  "key17": "2qMCrXF35CdaPVSe6veaZhK1QrzuacC3cgfmDZLgRNUejELcoyrG1aXV1z3YUznXxY1dKHJJxxcx2bPQBT5Rcx7o",
  "key18": "MZZ2h4Q1bVnca8cer28qhwUtcC5rRfp27eaFKBQKipk1ZMw5cJHVwQ9wPMAFnfmpPhqwDZ8BsBRSm68hXk7LMjC",
  "key19": "2Bhk5rbTjm2ymmyuyeszfbbeR984cbNL639JVpa9eL67Gz8vGJvPDkPGPYe4GtQ6GdFsWzNJ8a43a4Tk3zrSiLpx",
  "key20": "2M1uiUCLYMTapdtYwuNqj8hxnVgSBicQJbMipfcrmsundEVNdKHgKFqEHMv6TYYzVnxTJctmRAT3hNudc8Y5ELsZ",
  "key21": "4bxkhisaX95n66NCHMbxW8DMMosY6ro4spV5jjo6ygRfjK1LQxvo4BZL8PA6XEctE4kRBwDuSPgur2zGfJbjnhBy",
  "key22": "3Juf97cZFj7cPWpG25qi1joDCPBtVpjcBrkkJ7Vw3aMNqYAY4LLiD3jvstGYEvuXcoU2mRAxeWyyhNxteUnpcU3Y",
  "key23": "4NsTsDc4BLh43dWfD59i9dHjMHH6Pssx4pRkZUWrP1p7CXiaLFmoz8BuMRzxKm7yjbBJKyQP3wDgqBUDzr3mVB8",
  "key24": "TMWQZAfRyuw7neM3hjFqnv6GwRYHPSjWtF9M4gkGw2CxcVRpZNX565cWHGWvk7pjqKhysCFpuJuiZwRPcWGKhZT"
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
