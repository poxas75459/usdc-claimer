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
    "LqbuaXaHm8J57JEsCzF2CHpmvUBCpSSs9MBV5gFMjjW14LpD46heh2Q1KbbrMxDYkVzw6KmvZMXw4s98dw6DsRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3LpeiGyvKkMeLcxRcBxVq4mdTJn4USMUzrBZQqJvP5WyHEjCFia8SVJwAgnzLdYnYDGoXWub1TGKiT9eTKzRJn",
  "key1": "3AjcSRptHdQfTaA5rjFX7JsBNPD3jA9gRywtXM6uCae8sG3fcpJH4x3k2Q99vuPRFbaR3BwBpeUL8vSF95xKWdy1",
  "key2": "SfaAojF3wv4titiH9skPEoFq848Kt6bDuzJMpwxaZGK9B6hqonkWbvkLeAMddDjKWhFEAGvkv22siYi6T61ZGZ1",
  "key3": "3YDhhGt9v97Cvp53zNfieuo7e87Q7KCKo3BK9wTRHik79QDbDK7VY5Pn5MLZYg2U2RGJJer427z3vp8BZ4T8addZ",
  "key4": "55AEBSvS6ByVLjjanUccSEegRMXyGQFYD782Hbcx8RhwLiK4VXk4LGXBgQ41XJkaHCsXcYedym3jN9n3ZxU9njLk",
  "key5": "5w1aeowCfJVCYhXPZieVnPakeXJjH5xDKtPFXNaULXkix16P6wYvyFxxpF9ZcQHfj1mmSA3kc9FxbwCUNmh9jnss",
  "key6": "5t9CHMLmdMySiYR7bSYHFvJb9irK6CzXdkLcQ7QqXuoFDAqLHoMUE4hic9PdoLzxcqkPpyorDdJrrPA28PrHZZLj",
  "key7": "5zpE7UVz6AXfcQ3iLUrFD1jWH6LAFazxrYA8JKQknam1R9eeKxvj4p2tnztuUVCV64j6BZUxFxPKWCq9Tw7Nxmvw",
  "key8": "2kCBCNuwCGMPFFB7wNGf5HM7vNdZzXSyMZttAQdNVyXJrukVHhN1YiVg199tmohLa6Kp5ASdoeaRY1NSePQno78m",
  "key9": "4DTXnSmpcCfmGYxJsEAiD94rF6CtAqx71rrvAQG49kqzk3WvZcYszKSu6PTqdwGZiwj8xe9fCwEE6j6Nkb8JobXy",
  "key10": "2jzDkRbe1k7p6hxhXatMDUyk5RZqgYmCjdy1dAgGT6GK82ExnuKzu24dVGmkDRg9VgZMR9rzZxWjnWL7grAJ4ktm",
  "key11": "5xHLyEh4LVgZbKFtRHYjMSMHa4jVQX6iSM8cLpiBA73RsihfJU1P3GJwTtH6PoFQEiEuHDmPLx3G91ZaTw4YMYNS",
  "key12": "uhzbX9LcUqiVfC5xv5hxX92KZpGt45fZvYN8BcFAk9xTb24FnaPZvH3eRPomUL1GnnVcxf1Bssbf6gZLhgZbtft",
  "key13": "Le7p3EjZMRpwAzxnefqRx1Znbaqm4K4gTGCfP1fkaz6hfyMgjsW3JjgkksKJw4cysFTSpaKkrSqgpE33A7NKVKg",
  "key14": "5mGscEX2ig8cvs9qu7xutA5ecT6PSic6TDck8Nsx4ATA9BPdmrSd5qfg2teqUGJRCrniuck3XGJ7gnYEANmfswhc",
  "key15": "2N4rXhxnhp2hnQCjhYPrtwB8e43wn6xjBcWzmawWCE96C3aw43dX15CvS3vbqQcJqtBV9DJUnnTmStRLLJkTG4W9",
  "key16": "3K3JLk1vBX1VXk4maVWFKEsrrJtgpzUo3zLMx5zShxEgPED69VHHy7WbjEfvBMGisTxSrtT7MbtewW1StdgR1C5U",
  "key17": "uSgjnCyhpijiHWZNLNNvBLpbF7snRGvvpTWt6uqWVrrEwUpcGTXBnsqHHXgopn8VjM9C9UGwxUPDq7bbHwSyhqf",
  "key18": "2ZHcaXvEJeiJMnt5JwJPpKjs6oJMjMHzzfskPALPnpAFDmAVsPT78DCZrG82Nc7AWm8fp3EDKT7ZymbotFDRocVd",
  "key19": "3amLXZS3v9jYCaWjnmXCY8hhFeBwCQhvPFJ8h8qY5h5LKdxz46EciUViZRuqfFNCys4x8zM41ZsN3x3TpSYzvewn",
  "key20": "2WwLBcQ43FGehjdsq1iznTedMLxo6hKaW8QF6fC4GqmWjqzvyd57zBMsriTJmoeMW4VqLZzWT9KMk5HLXo8HMHdZ",
  "key21": "34T5RW4YNU8oC3cP78V4c3sWM5wQZ6KS5FF1eaiEneWzqWAJh9rGDRAFarbFVJuujAm7g5sHedPRFfqm8KyEkxEL",
  "key22": "56HVMjMfEvqbXUWH5tdEXHvgyGunZXtyCoc4BxkFc3y4kcXQixYWeh9pwWJwE28ev1fFncuk8Vq9SR5J93tYESs8",
  "key23": "5mhURLk9ugtG1YwLJY4gP2u1ZXcspeAxkmKrf1vYe3r5w36iQSJVUkL8BJ3NJckJxyky2YABEMXDNDtgBqjDscWh",
  "key24": "fScnaorBLHeQCSfMQ5pgC4V9XPbfwX9ymZqQGvBnopowNH9w7EWajx4BZh9s3fVodKFC6kX8J9Y5Siise9FwQP1",
  "key25": "3JanptUTeGbk1giDbbxo2RLxYvfF4GmQ56b7miNHZsw28nxV4CVUAV9CwJnRi3CFzzY4vDkfj2CCqdQfC5WNLrvG",
  "key26": "eehgNXQFC2KSxw1YbX5zwv2xTg4JCTSd8oh19AvKsx2xQJJgpyyV7CiH15c8EHAgpeRSx2gECT5nXXkcAcV73Jv",
  "key27": "2kfs26UuBomiKAuYHJziE4qpJf5ka93EBNJyDSCqK92oLoxKTJ5WWqHHUnxFqy4sDEJQ2cG8wwCMmxy66uu8dVXt",
  "key28": "R4rpAdVTbQ8KRngQbUtHPFwkHDw7Kf1W7Gb7xr4nq4Q32dVjerDrYX9BjAyQRGQnNfaX4r9GYw4sDrma6z8ZxFh",
  "key29": "5HP7Y9HJkZn3BhRxyjhKvFTuC4F4yU7n3wtGnJHkHPe5cZbWp3KACLcU8VFy9q5K3Ta7Y9MtDTN92fQYoLx6qoNE",
  "key30": "3fHw2B7hnPbomPbijEocsjjLVSZsUNYmDfuDXhVAyUSp1naq6Li2kdmuaJd5MCHJHfDdk7QE75BJHxTc3WgjtfW3",
  "key31": "2UHATCB1LEUt12CjVTjCCzvoLHPDpUqYb5d4terNJmejP6cW83b9LuJ5KtcAxi5L76Z1FnDH8VRzZoDvQYixSH8a",
  "key32": "4eybvtMViA8axk8NwANv153fgiNGY5Lua89ZP5BuXoP8N2S2F9hAoaM9bwDAHzqie7qX2iMTry4u1mYS6aUCLk4L",
  "key33": "5fwKZbWZTkSVXsER4xgTBwcS81xwWRtQCQibDXdKEj2E3kxduxYsxyUrwpCk4MiMiM6LC1hxw2ipZeggxH3nrxon",
  "key34": "64rWsPbWkLz94bgLKvJ1c5b8z5jAiwaquAt6L1P9EyEo38zAeGgeZM3Add5FTErD5uyKVEnkbta6SoHZNz5fepTq",
  "key35": "4RFwNcrDRDMrqDWL4usUAcZKSzcC5GhQKmB34JU7iCHZnZfgvq7iHPVAQQEDLtPon6Qy6Br4EbAVaDUbPBRMhh1v",
  "key36": "2WJpfJ7UQfyKPBDdJRJcpjsYP6wLYRpe2hMLi4BKk3JbsdVxuqYC5gzuMCJ66b4NdR5q8bBYKX8eQboTup1y6bcb",
  "key37": "3eePWFkpDJZQJrmxxnLpKLRQg5xJQVbAs31uY8cmWSfr2ZEgK6fG1XUj3K1XEYxEphgU1snnTYgZP8rxm1XdETAc",
  "key38": "3LKGFb54sytEt2TSYPmpfdY7r4AYYCJGRStSF8cjcZTJfF3p3yVTbXpUoxHF5L3VFukYHPE6e2XBh7kwyx3AeSez",
  "key39": "5eYBZFR3nSQHyredjstvqikhUyprZGGiF3sJZAF19UGYTFAPDGDwnVxMDEMWq9sG2ebHh9P52VMZx21cQSBQGCeX",
  "key40": "3ABW8pePQjBTm4tGLqBeZ72FKGQV2ymBG89qA7QSuUYsKWJKmeEtuUUGqXR6vwzqKUckMsvXPio1MXT5d95B6KW3",
  "key41": "2JaBuGmxjv7mMufKdSR7inE4B4NUj1ZEaYLxXWfruQkZujuh5qDvbGtwYWf3dBp7tbzDVUXbF1guFETBd64Z8iM",
  "key42": "5pgk9J2UK3atpk2jbiwmD2Pa4HVydfWbvQXSZrYmXgCSurDovWkmVqxs5hTikhewDr84VnnbQAmvXHstPryjgCr5"
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
