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
    "3qSWWRuT9abyZ1Yfz4BaGchcbncgYh1ZQfaKaB25dFdhx9cUwSPzMWhvSP7PCC5uDk3aJoPy857UJ9gyHFApuVyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9p6i61GQiLy3uNrZAvj2PY9bWPf51wGZyKKLBLQNwDJoVG9J7aoVUDJLqzmxAr32zJjRrLJKNqs6Eaoae1TPNr",
  "key1": "5WAFWTHtGiCHBWnAyCQaZV1VAMisNCVZQQFMEPsgZXes2YXgJWc91hRmgAfHx1awFaMSjGjEPPzjhGhkpVYTNjWY",
  "key2": "5CssXBGqEgbCwFxNGf5fde1g2cRCGA9hRsukkWtqK34q3F7zb9rujugj6miHNVB3gahPTyQPgDzPXMksDsxN4nLA",
  "key3": "385zTEuaBQLJ4EfJnSxMYKGsq7oPt2MQdvPCMjuV4ixfGzasyVZ5ejj6YPXfjXWHZbbzvuQ8DLmnsMMGe8wuJdkG",
  "key4": "3Fo4vcbwQ9bAVXwSpkxXqffJBusm4EUUPYGGWVSWmCTEd2Rwp2cRDS9UyDLWNtyvNQ7gorQbhgZHBioq9GmtyDLt",
  "key5": "62ZAzkDL1VFBJ18tG8qCwen1TxpTxfyMtuQ5FMrcgiyg1Fghvs712W53G4Pb6vLWvvDptzyCbV8PDEKFjsDkPfRZ",
  "key6": "5Ky1YYHavp9Q5YgTWBL3BBSVawsjE17V4qB3dcDaCA4GKnwAG79Ga2LMjMsvZEXPFBgZTg7WX8d3brYiFTVymJew",
  "key7": "4L78Z1z4vGLBsJEqKiM4cpgQosgdd1tikKatvdPTcfhq3XbgjWiHwBsb58ubkKAgxWfzNEqzn2gH5gUktfkmUU8K",
  "key8": "2cXgnVDh87y6F6S1y9kmW69GXC4MQFsLScvufZm2JdGuqP1omS1aLqrvyN2ok7Bdc6DMniXPVf5kSruLjXowVrR3",
  "key9": "5XrzFJu4Te72PTyRnRv2thXPdJatwXcbZbWqJtYCWUHH3bQBsw3vVuBxqznNcJEzEJfMVgUoCkyxpAXxfbEkFs95",
  "key10": "A5xe2CcuHpxtuKixj8xh2GxASvcBDuhEU585Trfn86XUoHg9qbVeJbqwDMaFijrcjdfoh8neJBFfgVErhJdfSEV",
  "key11": "3i5JZfyCs2pGsvasQweaLZ5azWSgdgCFXqxTEvJm7gJWJ4NF1sgduryFMiRxxdQcxya18P8NrcXopPQSnggm2xiY",
  "key12": "3RUCsTZudH9oKGVLHCx9ehmvFG8wGMEmA8vbx4kb43cAEArW7h8h9JngH2nASfXSHuW3AEr7FGMYSWA3JSPyoEgf",
  "key13": "3eSq5JxiAh4D8FNrnLLpEg6JukNsbLjpopBny4UL51tPZUE7CQ6p8j1f4uqXf5bmhPGYWY3ursnftsFUogcUxtKQ",
  "key14": "3WquPgsnkoULgT1NqN8tJkwdW61ksk1oNJXFFWf9Dp8AAJSChSYpkF1iBwvwxVqvvNCUbpUsnQ2jqgH4ngEmUCym",
  "key15": "2t16NRtUrnMts5hv2vgtzUEShGmtjXse983ESPNGhAHHkEDv6bj2euhWFMWpeEaogsfVH6454WRrGzXXtT85U3rn",
  "key16": "ggFr3uR9hbgvr18PGw67tpMFx598nUbdP42V5r7ves9kTBieiZJyiZArTp7gZCDtVwEyPWQeEA4GD7vBPfGpriq",
  "key17": "3o3PYa55HAEyfFu5WYTqUTJmU5Ck665n9Q8Sh9XCrNmfUAhVdURkBNWYYGmZTNcn694xtgcvT332ZoY7jsk2CrPz",
  "key18": "DuEBJcWuBxQdnPqtYhK6ygPzejXtYSGuiQCf7BEgBd3ZLR76Uc4tQfUq7bCGp9XBBu9GBXGuCyZcrMHtrbPHr3K",
  "key19": "s7f9vx5cN4ms36WoQtSfKAcH4KoPHpqZyrXuzUNUbMzZjTA6gd6TUxA6LuWk4JX6sdZYDRtMREuWpsmU1tHr1tt",
  "key20": "3oEi4p6MHHkbuPw8y3cZSgu86S7MnMHnCH3VAaD5yB7JTGtT6gbkp4c6Cgh1pxynw2PBvVb1BtSNHqxJocx82h4W",
  "key21": "a162NJGYgPidaC7qH5ZHRRmmEHiorJJAUsfgDA79gXdXTv3PmZL3o9oFmSZU3aSuujb1zsKS5DXha6osBXZ3oji",
  "key22": "XGgvNTrd1wn8T8uUWXrbCkuFSqTrj1GtfzX9yvuRGX8PpsCfJvbnvRG8WTUVbhnqDib9neNWnFnArgt4ANWTRn4",
  "key23": "3EhnMMgXhnH171Ztu9fh6WfQG4AzyT9m8HpWziE5PqFmNrRjTu6jjtMWbxhRyJ3aEuEBqDw8ijumjeu6WRxwWTKj",
  "key24": "4DhNhrxGzgbzWEmxwNU8UzFS26xhQZcqCWSXmbuQ9dK5FZEBB8n4iH2oDPrPnYZHQS8B16sXDE1i5H8BhQhxbjiC",
  "key25": "636kFMmNySNdANrNpcbpA1MzWJE8mFJDFFvJLfDuYRpuSvayM1hZ2gMSfQWJcy43uPqBCsALa19NbpUNxxnbSb9r",
  "key26": "3ztFwtmuptcZA5yw6LZNGrfGpSw4S1aaiKGBEKuS8XY58LQxstz1rRMKdgAkGEnRHAxDWXNRZ1spsBLhneATT8g9",
  "key27": "gysKaYGwCQfLGH5ds3Z5fZMTkKhxuK4g68JgDuMcJNyJWbfsf2962aiFfrBHFNVf18CLoibbyGxKH3thzCCUyYj",
  "key28": "5gsV3KhZA1U935zd9AjAXkH2ha6yWdqnCP9JBgNaLEHBrjQkzvxse2tQxKbSpJfns31jsGZ65nZbcgUVhjdf93Bb",
  "key29": "2AvWhvLa6Y89H529TU3GBQqVrgQroUmVHxDW553Rd5HR7x6vx6cs8C6qvatZnEwP7uVDVcXeAxvd92eEmCi4Dg6t",
  "key30": "3h1DXgzbcZXuM33iomKNL4yhnaFTMJ1fxEZtUJhGrrKEZN1keQr3o4T8JqdN5Wu1U2dd5W6gQ75Ae8DT8B7Kwq2Z",
  "key31": "646hDeaLEPPw9hUvHhdLbc96zoFTcvuuPpCatm377xX2X7TZKd6TPsbeBjzienDvThv5oC2KvzRgfDX27Utw6Z3S",
  "key32": "5uSBqo1HAuoN31BNJw1JLSUeFh5PKwfB5E67mwiEkivTfMtsKtuTZy1GDnDCcYQiovaGjfZzzN4mDs2oE17c1ZeU",
  "key33": "3xPzxtMHgKhbEvhRYbdmc6G9JDDFf9qkM4KJgvUJ468zepUN8PnC9rsRPXxhbxM1LtqcHHHSfeUYErWHRXX5ayDL",
  "key34": "3pmqDaCu2nF8ugrBTcKcCAbF6fitXiAdYF4SbT7ooKMAw3CvysGeiNkPumE685GNQmwPc6M3MWCSWt33hJT8zpyh",
  "key35": "wavv7qSBRq7eUYg79f9STQGbQTv3G3SH1hrbxGwccKphfEegWq86LdTGYGg95U75xduzvwX8hm1YZAguzoe4wYj"
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
