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
    "5VPDxoW6rUuHs8tWFfNnKF5gDebCdKdopGfRE9ri6s1c5tdodpM92hkV49YZBZRBgZKhCGgZCC6KoDSRDAoHLRmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55JwnGnLVGZ6UPyRvNTaTsDDCw97C2kaduoKRAuM741UEczfsQ53wy9nGJHHoCWTJsUc5ChTShfiA3XCCuALMpwP",
  "key1": "3dyPTszEb7MiG1yWH7YM2KKR5BgbY4ErqdZpWrvyB2KQGmugLzAtpYcETBsRiyTkzeSGw7ETVGAoh4Gq1HRxtPZT",
  "key2": "QkRiJ2MvfiJtixjepN6wCw8AG9W4dy4LdUZcR438pF4uB1dqyPg6oTPoEyMMKJmAk4usiuDyqH2EcWug4xmEgsX",
  "key3": "4TEawLtCyC9JxfX2xCw1uCMCyCvMUorVCgJ4hEuoPictZydt3DNUaR82phkrVaZcccv43BdKsLtjC1MhH8yBnZFx",
  "key4": "4No1EYo1UtZGDztCkJe5FDtQHGKX6sxV1sccDDP7FMVnmKaeznW4DSGchXvD3pVhuyfdZ7hmmvBSdnoDGPtooywG",
  "key5": "jSY6Ty5jJuqJ74HvFQc3mGGL3BNUZqTVgyhU2m4pWebYjzjLJiiUx2XeNthzZMDVsv81HhVtNh7sqqxLvczbU4K",
  "key6": "3NBfRBMoJCjDRXiPb4RmJsXWBJbALSA7jzjB8okE57uCnCM5tABQ1TpznLA3F5MJBgm4AD3Zko6yUSJSqKRit2wF",
  "key7": "4VhgEhrY79mL6zY2HA6i3GiwaaTMyc3TpVyvBaEMih6oxQ94SGFrL2HavzYZ1QHcHipfFEZTv6qHQ3kiui2R7oP4",
  "key8": "3DYgrTg3kcBoa7s63PZ3pxg3N2BvykPJZVyJs6E7oDRaVmRsepzCU5z1BTsFF4nJiomtF64PhM6Hij7b6LSFWErh",
  "key9": "NuTbvA9veSsyk1GyskypJU95rGAQLbE46cNb72dWL3XfNwvk6GErrffm6nrkvrM1Tu1v5PFb4XiVmXHNwYqyMNV",
  "key10": "5DDFomQWSZMaK4N4QFGaMgern1AmX37PqeTbN6sMk3T71DWNpCeeY4EWyBLgsFJVwRfZN86CYBeKd18SuAeBbCbp",
  "key11": "49gkSzHrN8hx3raQBkQKXBqx9VRZ7Z8QwKrgMf67RVVvC7fzibFhNm25vcc8ZZb9vQqRSi7AvmKFbuyNhoN5fm1C",
  "key12": "67LRKLSaGqvmhN4CMk75Kri5ZV9UMyCGfQg1gyKrmhyCKcoFcHAbhngwXHhhF1xXMFfdeXUYqWiub5zn6cyfwk4D",
  "key13": "224zZtDzkW1N7ou1a2hqUBoddQGxv6RDsMoH7e3Shf841PYFiUt6ioRw1jeKZVn458g7Sn75ohHuPeLKh1zo3X3K",
  "key14": "XjWuMNSEiCxh1YoFc8LvjwDRYCATqKTBSBkQMuCLfC9x6KsWUFetKBW5iUURTQiKmFP5mHLJAf1ayRmJWBxMFAz",
  "key15": "ueX4rxEafFbuQhn5GjnvPnmMHAAQwcccFkcLkYTexAKTPiAFVHZiwXtvyjAveTFYXLoT7bMDejwkMmfxW4QsmC2",
  "key16": "2NjskmWJVZ8FnckNZTs6TFV7gb87D2a5wSo81cHutJR2ZmB2eVuPsN1omQq5biFG9dFm8eDDr7rt5HstRukcijoH",
  "key17": "5KwqUtTET8kdUPkkL71J6QjwRqy8YRxG6Z2AHsbFCh4BiHA4xoYj7gSCAhDbTnYizsP9KsUgmwAsMhGs6KXpYNJp",
  "key18": "de9muQNnACPbgVX9ZFPTSCxTSR4CyXfzhPtgFQV2kZpjkoZdWihEaK1anUU4qnmiw9aXYxFjmDhWfXkSS1tJ9Qf",
  "key19": "3LAjPEu5ApfgA27ySr6FNwxxxwLea9CE9bYP9mueFUaSZPYnyRocBFdfTqMmJBL2Bfq5qEvVAyWWzpRSs2WfU6rP",
  "key20": "Bbspzd2VnyzJ4xsdxnBA3dHVRwHnYrnwLzgnb83d6hLS7uDULnjkBZ9hYpmNcZntgn6Kxs3qCKQUdEGrwGSfK5G",
  "key21": "4fPt8EE7tepoSSHPgM3EH6ninyNChF2LTaa5dnUEX2GAUKJxngswR3mYovdhu9YaSaY97NUgCC4Z1ysh76dChrTb",
  "key22": "4dvd3Awk9spzpBUqegYqM5kPuH9WteALfi2jEUw28VdRMuj4gqRM5PuCiV223fzwW3N4nNaAywQ4uRHutKyeBG4H",
  "key23": "541UADErH2L4KesUFVDAyc1uh6fXYUUgsHJ9dLUJCf6eBZxEfLBoMfhxvKavJobWsY9LuScawjgQ4RXpJVejkBRD",
  "key24": "FNsAG2CsTEusd2SikRnASqXGVW5mqg9WUu6DKe2xTKWJ51LwGaQeuhufJXK7jj4Gv7M22pujzvMLJei1oLDCd1x",
  "key25": "5q1qe4z4yVw8omxaSHtyDeTf4aiUN9bU2uZuEmQeVNp7BS71WW4JpRUc2jmYqtyJ6MpPnkHdb16Ekvf9AJbFFLZY",
  "key26": "2ndKBLDDF4kdDjmkjfjrHgL2MPGaVRgR9ywiH77QCiANMShDHpmjDKCVRxkwAKzfzZzU3Xyeq7nmRmbiFT8NpVGy",
  "key27": "3Gk8kFZPLqbXpG2wUHvh7nKYyUp8KZwxNbggkpGsYNKSCzSs3Dh4NouwD6UypipDXJaWhQHGXrK4aA462mHT2qKv",
  "key28": "55er1eT3HhVHxqveMNgaWzQKGxFR4355MLghpp5SjEkkrCh9mr75b1MCJp1ciGDwdMcwc3cUGRrtT5HqCMvCJQZF",
  "key29": "3fNG1Vvaa2sW9LCttXDjPYsdJLvVsxaexQkwrDYb16D6tDB2eFivJA4MLydgP2WnxYJGwLQ8VfZnm3jmHLBqnPLX",
  "key30": "3dHScK8bBj41zHLWdbXLiXhSdPkEgsAqAE9b3h6unhbTvbAd3XS7TEdRRAAbhGKTPPqRvFjKgNueovTypMf1Pxnd",
  "key31": "4ssQBW6vBArUw9xdgcPGMmJnRcJjE1A2FBYC6k7u4VZUM85s7fo8TnNwxUcSUsT9W9E7PWHjyyyiL97dd6Ni1Qvf",
  "key32": "45Vx7j8aqehZEaLKXG1WDoh1VRFGUsH8k8fxGVKpAC4Do55QNKN6PJvEvGBDfnoDRkudj9NimHrDhZjF2FdHwHL6",
  "key33": "4PyMBDAWCaxh4Dyyyy43rfr66848Xyn4PxgRxNy8mtQTFd2RCvicenQsFymusU3cGFPT3PNWQ4mYMcHuGZBfGRMe",
  "key34": "3aVTiFgwXFZDw5DnHgLiXaqWTQdQhnEw11fsHiy6Pfem31QZvp6EjHbuqwJTea29Yeu2EzuLRwqik8YsKGAiwb7X",
  "key35": "4x9LACPKzkn1cAGJjoMGyRVr4Xz4ZEj2tJjGh6mfxdWTZoc5Vtg7qCjhp7ND1b8EkvreYEVEW9UsCGQWkbMYJWb2",
  "key36": "4BKqkK1V5LDQ2GHrUfGpNFUetcGfmw7Rf1xwcMWqUJGaYdoZzyXnCe5hQueychhtqgJnJpUHGfzKBmEC3CHS87GP",
  "key37": "jSajZJ9CHHV8VFB5jwn9bhzUouKJUaCTypjfmSukNUGF4e6opuz3suF9AbS29Gk5k1RPuLLjhsPxwKQcBqw1fZF",
  "key38": "5Wrodh7sm8wvPwYccvJGkXAPjVjiA8VbLZcZUQcSAJgne3YM2MBpnM1j96KKVq37yZscXVrmX2mPhtuXpv8hsWZa",
  "key39": "5z1cStQ9UuhDzzNQ1DEPA5LzM1YTTdiV37LKs3USEzKD7epPbmmAdphPJn1EZp2Mu1ehu9UgzdAwXAJwjoWgu3CQ",
  "key40": "ZyMx4xHbvtGf5LSettEmKGZdhyxun1LNcFvQ7JbvT8YzPFbgGLkrcpLnyJ9cnpQSYJiM4BLGdYTo8k1JnBLZRhh",
  "key41": "3UzZ18sYU9dPP57V8DSThoR6oAZRfptiaTwgruZMmJVyYhnttY1NXfsUD8ZAyQTJafWirRLKtp9eaN2z3nZNDY5o",
  "key42": "3pVfM8fZebrtAAcVmapu5mEVYXdnmkifpLwLqcerGKTzeZu8wjdwPMtXu8TbYXzkBHczvDGDvexyK9dfPP83DuU",
  "key43": "3hUANxRHhhJ9HgipAXuBtYzHj8a5KoYRPMho7r4qxLmjqkXTaxHXoiLaE8DGfffAXeqFaBht3KHit4PRBrEREXUB",
  "key44": "5sxMEERoQ9QwGLkakr6opXHMTzJswTnM9igSAioyFnUqLHeX25zfYdd6q5Q2b2LPxW3apR47rnSNnU4Hbd13EQbG",
  "key45": "9v3mQiPZ3AMKfXzUNVQviEhUriWSKZ57Wmwvibuc4GBtmvMomuMfzqCfqhmVSa1FVNMXpTTpoe9cnYWjTMkVaEf"
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
