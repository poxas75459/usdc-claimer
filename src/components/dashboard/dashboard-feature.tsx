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
    "4YpDKCkd2ixowdZhWmCD249vvCaeJq19sGbDrVvawY1DGpwFABEewkVFdui2LJ2tz6Z4oxCTYQqUXpehYTaR5bjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzWkUJGQpadhrEVCqLt8vFxrjuYudJU9vy4iPBidExxn539eX6VDa2uoHpNQXZ3FnrxChaEgkBJgWKgx7DYzmiv",
  "key1": "3DVHtrN7ofA4vruxTK7F4AfGj8aEM3Rcs9syamCr4uxiUjSnpzpqkZ8gGoxkg5JfT6Hb3R8yFESQafVE2UjMWtSc",
  "key2": "2t61FU2h3An6pJ8JE3MLY8FPiSvcQduk6Rbn2PSiqBduRzyuW47JLVvE1XNcyrCyiChn9ToRWNGiBhcm9uQg6BVt",
  "key3": "31UKMfTqUXRKwMyB6w3KQ8sxBCSMLfbE781AYthTk2VeEJshxZjvCheXTXBPHdr81tp19bMKk5Lj9yJr1Lc1trxM",
  "key4": "4vpsE9jzfG3QvGQpfKmBqr98ihgoVZaDYHFtmAF8DYmReqzMvBC8rcPYJXUvmYHbqVo8szU9Y3qzDbbG1pdPnrXG",
  "key5": "3heVFwoJYJcuRZWbuMc1JdiyBL9Gfwh3ZQ4kdFfzj3SsTzLEZQyLT2r8puhiq39MVKZ34zsh1fm81prqcSJBGGSt",
  "key6": "2ZTyj24bEFKJhq9toypJKAdKqGPMjaD7CLebSFAsPUfkNtEjQMitrp4XMqpkeMpx69sUxwW2s9KFY15up8cGDBb",
  "key7": "3r8Vn8Ka6xSrp9ZvrD1Rbn1xuPkz6ZoXKD32GmduGT53iAdfhdRBN13WAWz6uBxpYwBgiDZeTgQGctgoXZ2pVutX",
  "key8": "2jrL2Lc8J9fKmmynYtypXAi3Gu7Gn4SJeVyj2Whwr1tzMSwkJPXDBayp165c2s87WfJEqKsUjxNpnaohq6TcYsSt",
  "key9": "bB2mg9nMzofxwxyt42bjtdAXRKyqPR5YUYw1TMCLTmkHUvsN5jLQM9e5vUsJZTEKQKHguZLtrWw1ewqiq9qJjAB",
  "key10": "4GghMARLkdfpPXtZ4Z37SBE4eg8D23S7N8UrZnNBb9UCj8BjehWjYUGVS51ep9hsbjNiMqS1imcwRhBCDnE11WQM",
  "key11": "2RLarMwF1bMKg59BZTfovNp1yoDtRqy7BxvFS8F2MDbzZqF1HakZisJzpNPe6xof17Bk3JUCtBvaVnP5jZwLeRtX",
  "key12": "keJ1Yq6BuRCx4WmzZcLjJfcVnoSaCvTi5Kb6Ks8MWt79hXkXrwhkyp9Mjd1Dy9x4BA8QQurTpVsR9bUg3y86uUB",
  "key13": "4ZWSYuXgrtPSkfLW6Q39jP4ojUUd2ruaGoVJWPubsuFeqGwsLWdEpzqvmaHdfJ533ea9badpfBX8K97KNYH7SaA6",
  "key14": "4hvKy9rcZ4ajvPayQ7u4Zs3yLJQa18kb4zsuvWbxFN4PkZi8D5nsDYVoC4jGU42Hgw6Ei3Aq8gX5PoorJ3zQKzaj",
  "key15": "3LJtTTUngbVBTnUkArprKRhisSzg7sQKMFpBjce9Y5k8QqrB2WTRDyTA46LakC4haQ1zPSC1iE134s7aQ5mhymSh",
  "key16": "2LvE99fdEAHSKmLAb9FAisNob7nvJDgYtkxTUSndNzfFHmLSs5tvWSuuoUyEHUuZTGXpFFg3YS8b9Dp67ja3P2pR",
  "key17": "25PmmmiqAmNCMTNiMCJWVayVmZ1gpXBbm319WoR9pKeX5dssciJ2cXJGdYSx1YAx3marAVYMRLrn7iAJ8L3ceii5",
  "key18": "46BKWDHtqZAkzKeM4Sh9ZNCabf8f6kSU6FdfZ4nT8zVxJQLjKvFMHBX51AusneSGPtoy8quAbridvRHkhANNRaps",
  "key19": "2rhjYjLrni6YFXBvoWV2bQ4tVbiGU3qHh52Tdc156PEEV9iU1MAa8EmHoCLgP8DAQF75RjrWQzBjiAMDnk8ja8RV",
  "key20": "2aUizTr6UcDNjSfEuExoCTxGpUHC36npm32xxx5gFKX5tT6uSVEPBB3kgG188tCoRJfbTeqoxuJdSjuUzuCKTQA3",
  "key21": "5WrXbTZwBz9TgukuDGGMFjd9szKAnqFp86eQBGjmvFC4rBeKV44vFbaxRPmwzrijh5KDVco3RUURjieBDHYnhLxj",
  "key22": "2TkYY8B24MWiovXrH5YGbTUxmPiRR5TeAyQfeFgM8i2JTgpzw4Y2vfoCD7mJq9C9bEBTZo6VbT7H8uCEJhVNorA1",
  "key23": "5pyPEfeEjJqeBVeaNbAheESgEbSMXhkhUxkR9dY4u2L8Q7hp3yacdBrzbryBNfwUrDhbyAwYp4DSoVJZP1Gr8Nx1",
  "key24": "2V3aDXkTJvfLCbPfvZ3Q8g4ewAjDV4rdai1DSQ7FL6SGogQnXaQavHeiujqTXVLnGRxTDn8AoxTJSJuD6bMBBDek",
  "key25": "5JFTqQ7zhNDvdARJ4SQKLjR8Syzvz4qGMxo2J1rR2ZziPM7Qc5UBkeWR3NHsPQXdhYjUikZbnozYuwyyXJrk3NtC",
  "key26": "3eviHmL9KrKZNkZmKwqNRNFKpEwmv8jcsU2TMMTvZKVJNuKEZ7HePPPGWSHndfnZwhtayyWGZuhGCDjQUHj6F9LU",
  "key27": "4Zk1iNSgpTJRvpt9BEhWN9K9qK2Yi7prxZxSMamEavscEDj3AiXoxaKtdriYkbZYg436bHivpSNAhMNbpZ99vDZf",
  "key28": "2pyUzvKf5eTdYvRHys2UgMp2rkwFQ8FAKpk5LeVwbo2xzTHLBMtTD4MdwzywRMNB9XnG6dYqEgxSEwLNRHfZpBwC"
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
