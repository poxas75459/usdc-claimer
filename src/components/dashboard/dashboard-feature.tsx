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
    "2uoLEYdLP9YxQmEwhGT53uFxD2KaqV7x1xWRFVvYm4Zp1aR53MWvm9dnkF1AjwpMr7VueCLnfYk5ExisWzvwfYRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJD3wSqgEFKTnSPo2AQVN8zRChf9gfABv1zoCjTYgu83CRkYxtpE5bwRGNc3VzMSkDnFncFd1oBeWHdaTcRm3Ck",
  "key1": "36gu1y5gNvYF78AhSrMMA3KuXDEz44Poppo7uYEvZWBACUGRttjyXzj99vzZY6ws9QSjg8cAzfZohWwWSgCNtFyU",
  "key2": "3QkyqYBwyaDwDTvkSTdJLtjMPjiSwY9CLyXndVKu5AYZXvyNbc3LshhBNESJtFvJGBcRUqunqJSnvyzvWTx8Hbss",
  "key3": "2U92v5ARv6Z5oTgX2vJMky2VScnWthd9uejeua1rvRaqASFufigabDbzd5LM8knJSjv4RgNriT54raR61mjEkCxR",
  "key4": "NjBqc4DZFAuPYYSrWgGvmB19FJQJRwofc52FhhoWhZJP8sahceefENqZzS4uQqdawtkBSGJvx3aAnbBvUz6D4a7",
  "key5": "42XAQayfUiPkfqgKyZKJvNA6bpLnr7SnJ3jdroVLygMPUCFACZt6PBPaxg8BhVgYTjMPK2jYd5zRYTKJdcdTU2UG",
  "key6": "5x7p4TwVwGC9Peu618CkqwLGCjQcyzTmL4jFPvwm8EYJwu5gbKevQRKLYw4VAZxoUREVrCfEoLxfdofSZvEShS7v",
  "key7": "4GdL8CvjRGmRWiH56HPRkTDCxW73NT7gHCpCJTaaJyL7VqsUdTgzjFJvwfFqwyo62dnwp5hCbNVcTav3x7FyLCWn",
  "key8": "1iv8sNeLR2EXLFCPy3ExAyo9FDtrcZ2XZqxk2btVKfEBgYnVn7ySTnW1MVxNteTFKPh4v5aAidcFgpCLPqEuEBX",
  "key9": "4N3y57HiC9VzZYA8aUG7zK14JxPyiRQLSLnFLk7odWZtFpDn7h2RfMnoKT4BcMkw3fAyUbQXzVenQqxy9TQGdZdH",
  "key10": "3b43MqYLdA7kkA7Bq63umDnaEkdfRh3Hkpx2KaaL3sXfEMWLG1BUC1fVjN13E8kW6EkasM2hJBLzLK5N469FZLEB",
  "key11": "4TecPbc6PXcNcctoXguhf7j5RrSUpCk232JjpfnXNnCmheS9xn9p2ZofBFG9X6EKpqErEERsnrcQUB43Mbzj24nC",
  "key12": "3i4sTYrSuUmHJrX8TqtyrrQczUjoEPhxz1EEqx5Hjew7GViaxryrFjXRspMnDKA7z7QyfTaoVgVvgwG9frG8z4GG",
  "key13": "2uKsZ7Rq9W1WbcCLcNgffq3Kus7i1zqUiV3XJGNnoBvk4RuwXXU7TTuQt7rhuoxeQwUBa3cCb8XMWS4HZXXjD2RK",
  "key14": "59W6Z9rUURMybG7cesASiL1meBXpZoqxayhKAxhb6esKxMtRYvhp9iJscWpodNG36fFxhza9L7sJyTyCF6F62ekz",
  "key15": "3yfWHZwwuXW1Q4ajaJNVCewB3foRNKMhu34TqMj1ozbsnis6taimxuLoCfJt4LFf4R9Lv4FBB5JN7N3KpMyjgZRH",
  "key16": "51oKCgRrdTpfkk84tcth2D2vPsUPmHougkinEPuGtqZwhtz8T8fz2nYDMBu83twRioNiQCRgZpGensm44zVgTpdU",
  "key17": "4jESdXNT6assrsu3QxP7dr6otwjd34aFSXxHqg9LnvxeyhixsQCY4mYVYjUfKgorSeRd54ZkqKGCmVdr6gNYZncX",
  "key18": "KNGFkh7xckT2SSiDcJ192QBgPTzjYaQ7EgsT2TkAz8Fsg4DeW5BrnxyieEghzzT4k4CWUf5QYMamsARxxaefu8v",
  "key19": "4C7jZLFVdg5KY88mNa1q3d5GTac9pKtQJNCXEp625gzcRbr6KVKtyDdRhgLHnLms8at7rTM8fi5LAZ88ZA4gJ5MY",
  "key20": "2j4kcHpy9o6W1G81pyZtgR5mJp2YJbLXfqMeeWWHANLcqCSq6GNomBgSGPkQv4wtucHep54sAaxpaa1dxhBnTJyT",
  "key21": "LjD18PrxKKpZvjF7kTY93xCEQuKv859yDSa9rPrFquzHan3iXLuPPDVubC4wYGm6tK2nGkYtYNVJH9Lbap7T9oL",
  "key22": "3ztVtqssqJjpjRBRG5ZhCzacKpZyUMEmZd8hHiEXYA5YyKdaDFT8mLjfyCdeygY4epHXS4CAxMrmMP4fPNP2V1LW",
  "key23": "2xd1kz2XcKqFBP3QRrt8Ha2NoWYMuztNsVGkZpD1PSZY9d8oYvR7Uv3JaVdGP65qHeoa1iCK8uU1U6RZJA5vtB71",
  "key24": "5eY6tTARBWeAiM4auD4uzW5Xxd6HCFxwvedytxLtUBNAbvosJXqWAtimEs9x2bkb2LLbm8UvkmYV45e6sSaSQcSK",
  "key25": "22bL3HNG7kun2P2aUthTPbHXw259unMjX6W67C4skajWFGHZpEfeAbs2UhY6GTCiSYrWES46wfRQT66Gvqd6dtjk",
  "key26": "5s5U1w46DtaUGuKUgeLoJnrJq3yDhysGLPvqRLSLkyZiCcsuZcMNqquRo9nsBrznze6dbxdeYxpN85CgfGmwX9zz",
  "key27": "4JuFfR5ZFxzdPtbnypffHApQcptBufcyo8CWWtRVazL6nbsZwJmcHHEZxJA3P7UFW3fqpyrxoXPcLC3s68Ke2SX8",
  "key28": "4PEfMxmN4ZYGaUMhF9QJ9Y9LRqFxXU6SA7X1NHsM1BiXSuXGHvBnVXiD19Vp6GTEzaUeL7V1Vh3QEisrAS3rjmph",
  "key29": "4GxEV3NDQ2C3nut2jtcLDK4v4pXQsdBKPLtc2wCXeTYvkbMXtHH39B3ujjmJHNEiU2MncKmVbNrskxXPkqSDDgXU",
  "key30": "4H9JqZar9pJ33q3do2Fiy3PV8LhH1uhcX5pTNsnYV79aYm4mMba2rQh1bkkj7PNTANUTdcpp1BSX7m7mFesdqMNJ",
  "key31": "ii17NTz4tk5LrFBP3Ux3zJDVrh1aNpSJKtYLTPvd9MV5peZZ9A3EjbzU61yrim45vwLuaN8fBYNaMW3wsvP8cPu",
  "key32": "Qm2j4PouvFxTyQT1uXeb42DzxcPgXEv9DuJdqCm5G8gShqDqtXJrJEbhRM1MRpdEybnNkvW7VUi5dKWFsLDTG39",
  "key33": "4VTKLSAmRFe1AcTvxrSYP7oCpkrsEd3ZCmU2tw7C6PUP1gs4taBMyBxwWbSrd4b3shAgw6XrpsNDP7VkTk6nXPxU",
  "key34": "Qgh1MLCWGeLNjLnvuRcGRLGKvsG1CnbA8NQSxJUhZk85FhPdXZswFtz8TVR5o5niajaepVXkZFE2n7sNzNZdGp3",
  "key35": "52dLTA3GpPDEvAUYSEpMtEjhzFVn3R5eTAKjJgPPNay8HMjiMgk58ZDaZospDRHWd5N8ArQDF1reg4GGS2m5J4KA",
  "key36": "2N3Bv5tgU9NY2DFXzYkcQQcuQYEqLhan32GbNmrvhf7pTCx6WQY283z2NP1KD2coPPLHHcQwnwRaD6TUSQwByGkS",
  "key37": "2BmVGnNa8UjSkaJs7uxxfrpwYDxEZqgGsSYq4DPhiKEnUMrAk8feq7tpe1U3yxqu4WaW3gQzXTG3dqs3SyZszJPh",
  "key38": "5qXPwbqU1NC2SeM631tVUvoJEsYBXwktQahoDTqpb8kDbwD5PQTG9DYSzFXSetRPNn5SjgF6Thrhh6GMug5ubzfj",
  "key39": "3haM4x77NCDBX7W4gKpSQ89XvWm8F9YFRy6TuZ9Fx9NDZd1wHb5YQWN6ajXvpXhLaPpRErxr4aPa2hJwBve52ze4",
  "key40": "4spNpXJVCP55pBRLiDCCdfS69dooLNy86GuQLaA1xvvcAQrb7CLugCSgwat42ZUfmVpBqCZkXHZ1kvGFxXFFyndg",
  "key41": "nVjsSp9bqEpNRJhBJfi7Kc9vsJcB4kFmbFWEJ2BxnpJwXMgM1KXsPBtV1Bvipf7aebU5Mfwdn7ujRX7JzYcgUNt",
  "key42": "2qV27bVNccPJZaAaG8BNSRKYczGGSpfDb6MqT1VVmdUqL2PAvBgn151L86RLGFqyX3w9p5wqcMGags8to3XivkmP",
  "key43": "2oNaRPhatrHKKSVp1peLZNFwWToaUhcNGpzdmzvZwHwNjRPLgL4Fnt28NtMabLWGqJTtx47NzUcgY6igq7ViQj8b",
  "key44": "2NGKGiDkvMaHRGvPLNLmyBt8rvGXBPsyP3nAbfZEamHbNP8EbaNJnKXhLkEa7eK2fAFqV5LKEuzM8ii6g8p1SoAr"
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
