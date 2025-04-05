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
    "5eVD86stA8WCYbPKgzBqEawBrXKMzQhZokRy2YxKxE99Hc7sv3fwsaMEs7HRh4U5drQ8WnjKiffHQ8zwvn7iX87t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4myEXTrf3nFwbfN1HudB1Su4i2hgoqttoqws3b5V7vmSHcRmaNfT31Rt7LjLy9ZXNHNiKg1TCVsfs1WgCMWAuZB4",
  "key1": "uL3UUrfTchpks9x2GH4dqakkCZdJp6LTyWW95YYf7GPJkwVsZnxhCxpArEA21DaZmBBqSqc6oFwN2ESksapghbE",
  "key2": "4gBfVigg6kHYUVveaGhhXptsG7mqs4wtfFeGaeB3TZjDuU4dLtuMmN3xFea88EbtB5hdchZ2oFDK1M9DnrRovR1G",
  "key3": "5LB59t5p5ugCfXb8EtUEdDRjiasPUygQRYQqg99WiA4DkGvLDHVKxEQfPKT8unTamaf6dToAXAUR7JYwrnTrEPHw",
  "key4": "45WmqMM5nPWuRD7NKek8GHgNB5LNWnu8M6vdGgnukvja1YQFF4jnjsVaE4vKwJLU5zWWTQy9Dtf77rhJacrKkbUU",
  "key5": "RXHpRpwiqvdddCUTFMS2Mpm4tsvUNH1ZXr1gJK7ooBETrRPdZZ2sCfNQop43UzExXZbidNbc7zBV3mwrCmW9DvN",
  "key6": "5XGDbzMgqqX9KxpU6YAEgDocfpdKFYhFv1DNkQzMgFx5xKFxH9cB9Sc2Pv6CKiCuo2DSy9xyB9PP2FP2Ar432VpN",
  "key7": "3vbJwZUvTUBxVBuosYyQETb9uAnAKS1BUoQXnZVZ2GXLzySAkHYdERHhbm5oETiVhnkb8AUxmUMhaSXmnP9t5JDp",
  "key8": "4Fq4aUUNHyaX35wRy21xKp4CJ9b9qSDkn17xQJF53YNjrw2LsShXaetLuiFNFL4z7dmv5ckgPFC8MhVPW9u3c69p",
  "key9": "4jrEC6mWBPMJuaA3DbSJ4RvEMZy4xLC2ErTNVKbYb4vFHceAifwJj2jtYPUaMKxWC7d6SDz5yA4srazv6VwDhM8M",
  "key10": "4HRa1do3zEWYd5mxLWUe8HK8qYdpvhk7DJrYKGa9GYtqDXybjstBVfhE6fwrbHz9BzFaESSXv1iSpWrhfwsoxmsA",
  "key11": "5AvXvBgvQSgUUrYhMYYuVuBGgaEbELMCWeFRrM48eia4qfjqr1CMd1TGrTm8SSQXhCq6fQ77rKpGrQpkZYTWPaKR",
  "key12": "3f1iae9j3GQe7Zsxexztj1ub3nh1YmsvqobNLB7sRjJYwaStFHVbfPG4v7jQGGpo8ujR8oAcVvn7XgZSFSfY62Td",
  "key13": "496KDAiAdihLRFe8bDr1eZiUUVdArpq7UZHvZmaMTaWhyfEze5kpWcu6Sk8Uzr2PTiieHshuQFd5hhzTMoYkgoX1",
  "key14": "4TCqWzm89pbyUiCUVy2paC5t3FbEcsVXBnZXZJC3KCs36Q21HwHCjApwDRdvCdgMPPHvALmx58xj5NUSeUf2wKhG",
  "key15": "2iiQKQr86HpeaAQwxDRPNmpFDGK526jM3SAxLbxJZHjPpSUkcR5btL3yHoXxsXcWDKds3MMohxcLuNfXT8gTm4KZ",
  "key16": "4dasfQn2tfn9uFVTDFwtAp8Z8Tuuwq46MvzqCa55J71FiHohRazb4iL6qF4ze5ybjWpoh5YTeFaAfbbcDu2nzZXk",
  "key17": "56m7yNVFpxCBJP4NAmZFhcYwKJovkFPeXvg8ErAphcSzpRJRixTX4J9eB4GhwSLZWB5P5gd3iAQR1pt5stPzPwkJ",
  "key18": "5wH8znqXddR4E3sd2xijjZsNsfb7n2nGx52gRLcLV7MXojyXzkqznprtbZS7a5my9KYZrzkPjbxdxhqSgYfndUdS",
  "key19": "X413agfkBaG1DWrQeMyYsVaNTTYx4CxqqLp7eoVQfByHUtcsG8Mt3VyYuxjRtfjWgu18kPV1iLkMPHfv9wzigvz",
  "key20": "2gdyRc458N3ENHvCLvSDBqdUi7STN2zpktRS4SJYBonJzvCpvYabtuJxXpPhvK4f72bxnAehZTg9WmEmtUduZjzD",
  "key21": "3FDiQd2V6kVEa5Po1smCSwQDduuJYkYuYonPG1gXLV65MLXa2pdUWfF9hMGhNJ6cvLAxKvKYKAiwZct7n2xNFjfS",
  "key22": "5PpAHmi4wLF6AicwFrKUDJfDXUMPYAXK4Pxfma3qGyYcSzj2t3twgmr5kAUASuEMBEpRjf9Z5e53GT7mnHLUnsmZ",
  "key23": "4XnPXzFKs2njVHupJCgkJVeSWUCHuq27XpYekg7KoNNvPEuNcvmWSXZNMbkzkVQE7vtQW5kf8Srxdvo8WTx3Esdt",
  "key24": "4hFtymxEqLvn9mczf2PyoTDz1d1fqXyd2FforvtNAw4igXomqkC1dSoCLhneKWCafmfaXhVdnesgYYf6qDCYzBre",
  "key25": "fGdGdskCKzThiYnqfuEctT2SNQK81MHXUhUip2EAckYYv1ryxBcfvhDHDVoaotJ9XvBkFNC7QmrduCaxhmh9GbA",
  "key26": "LweVHB7hJ1ypWK9MP1VbuuAnuWFCRNyK5TQNnSfjCWo9QDLM2ruaEEUZUotUsnD6dxJRf2Z5sSQFBeVwh71fyoZ",
  "key27": "5H7zdr14FaFnTdSJRuQTT42Cb5EXyEtHgJoqfXrthQ7pRRmcZv5HR6rMBgFWWvWyDHqZYVoaA8TfmzCdohqFZrHe",
  "key28": "4XubHtPVwJQkaFtUBGCWDdpbzVXVqiMHVSsKKzYoV3chMomAxQ64PemCpohaJzbBEQNYJKB7NkRNHKYpRVTJDuMj",
  "key29": "9MFMevL2SqnMuRobJqR41uPeVNREEjgVRE5ZgWKwxACkWEKj9BCkC6VqsAaN4BrgiSwBHYLqQZV8UqPFrzKF8xY",
  "key30": "3HE58Rozj3vL6hBgzTBnxR7VMRV7B2rYSaqBcbQsbpymVHsfWCsx5Tk64YwhcNTNjmkQcYMpkDy8qMDupYSvvTts",
  "key31": "3WZGLdGsd7241BfbN6kS3EFhv86LwcX86JBe3Gx4nCx8hSG9wFoT2ukJCeTkpvsjd1QVfjUqrHj4DK2dmSCYFMuZ",
  "key32": "2jdsW7wTozU6D8qsB55KHRqmfWxCzWWQ9W87zDicYaQ7dqD7ebEKbRBP9J4kDQSKUaK8agPrf8ToKfXwiv8P5Uga",
  "key33": "5NvXNjyra7kSErmCUiNHhGGQ98K4DmCBYTrY2aeRgh4f1hDizTA7JnjXm4UiEDYtdKCQJNEpxQX5n6pjUW7p2TuV",
  "key34": "32CqSSBVzPTA3egYfikE3LhQmgyXsBYHbiiC9kL4EfMK7sxLqZrqhuY5p3kbBhZPrtnmMbSTbku5VNZKyjbq7E62",
  "key35": "5uHrRQf6CU4eYjdRHbnZ4Y9F1sUhvRWFEAyUQdt5cWiPqAVHUJqgitZmkvQbWZvutENUExPq6ciq4g13hDZP2Kr4",
  "key36": "mPj67fidRjjD8tDQ2iaYe6za3YmAPuGDMRMFQaHYwwkTuxRe1snUkvARzjZZCHdreZy9RLXxGb2REGQAWvPmKeE",
  "key37": "2jXsFVG2D4yXpaQHqhPhxPWQx49RYy1ENXDFuqqQGAYrN4T6R6qUjNXkcRq5SZmgRwCNcJhjXF4xkMSLvpbVDZyv",
  "key38": "2cA2CeDNHvFQa65bbF5yDFHjBUEA9oJx8C46zVLwRwQ7XSNUAELc1gzbJpMKBAo16otG67RxzQQzYu6jJLHu4StN",
  "key39": "4Kejpi2hmeTuZ5Tgejk1FX3D3nFWvjHxXmFWg9UDQPYPCfyHtPiLGwyfFH7g9wtDGxeQCT3mhpHJXxp1pqC3sB37",
  "key40": "4gAae2njxdQuZqdVWYpWtAqjixHXYnmqmNdsqS8wpzKhn3wSaTASpRqJ8vxG5WBpkT1VZmL7UuSJFQ2nqSLNnuBY",
  "key41": "2sM4yLHXkqE4gH9BAes6QexbofdSQLvP6dRhaZsGnobAPUbq9BDjxvs91ENBrGNvfzaUTpxSTfriq22AcwwWemjQ",
  "key42": "5hGQjfDUHbWWSP5kep5kwuHSYT4ga9P1TCoN7iwqC3SABQQ4UNmQC863f8bKKTQu2pDK8EuPHbjgqAED7dDcRhTT",
  "key43": "5Zy2C4RcKaRBpNCFSAg8HjCaKq7NyBBf8ryZp5AmBpNr83Y9fd4nKzeK3iAQgPEqJ4Q3pMpFCWQFWDhfSrZHHkRs",
  "key44": "3tK6wxM8CLtdTmd3Nmx3dc3eeC1nNNqTbFQpdjMp22AhaBt4eMyqdrkxuujDnLZC86wgbMCqS7AHJhouHyb7xLS",
  "key45": "3Qr6hVnYQGX6bGg5HhAge29ZkN3pGNbMSkXobafrTQF7NPyZHNid32DfWf5h8xFfq4u4hwi7f4uXkvLc8Lt4UjLY"
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
