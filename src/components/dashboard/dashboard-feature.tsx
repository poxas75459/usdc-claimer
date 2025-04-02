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
    "bKChqouSwozQZ5AWJjXyATzEPWQVsUFQcd61KrcX2dq1L2j2mqqHvpZJkh3dhXhaeAPnTMauAZdV1foTCCBLtRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PPz8GjTYHcfM677Z7gvzFwcEvQvVMpczA7C8yrLxJFY4sGd9RRsGEUZ597Ki336fqg4GNSQJbdDgseDb1E1WfNe",
  "key1": "3qD8j8RyrvqBrtpvyMfLALnYyMSwtjHeJw2AiLsruYvRmQzLvdwpD41UaZpxhK3wJQ9PQP2vp2h9H3pdbA9LtyyX",
  "key2": "4tmeVt58yYsK1hkUNVxAruEHaEm6AtBfJrbPTu6YnRRPFLGitbKLqWmz9NB3JNSZ196nMV6c1A61nL6W5wXyqd1A",
  "key3": "BuWNj51kbNetdqJ6LyY2BxiVjxKnwYsKYp98deXW6xmDPjUvfHz9GfbMc9Th9ByJmkWjx644uPLKx8chjFSfMnw",
  "key4": "vP8JS8m2VaszoAZXzB3gidZoXq7qG1hqBZ7zAwi4RcskvZPdtPgDBXryC6HrQbJEa6uhVshVxUUbBzyPutCLQir",
  "key5": "4DwqKAYaJ9hzgcL69HmkEoRuyPYdyYtsSw7FV6G2qic2AJT6QjdFYffKCKQfwJTikR2XZXarXNpmRrhbP7VndPta",
  "key6": "3EdS9gRLEqTKWHfh2W28LVcRrvZaQaMJPtjKfFJYYbSxtBvWvYvoXg56t1GzLyHrDC89mMKgKUJ2BbXFKSk9cMfb",
  "key7": "6ULNysyaWwe6XzFMNxa4nWEFNSnU1sK2Ce3MfQ7khcfrhsudFShoRn5Fh7YqzQbifsz83zwJFPzH1QxJds31DL1",
  "key8": "5BCFFp5Z1Fk3GLaYxWSJuqA3ovPE4mjxDQNiyksWED8VfEmMtJqUsMVZEMvy7h8mFDQjYRFfT2KEMSoGffPqHm8V",
  "key9": "gcMMnyZyBR64pcDHitsgoPUWamE5vNN97ZsepdZg1WjbF8F2ru3bk2gXaz9pHgvnCgiq2DaF42ZebsgJ8eaT98h",
  "key10": "4TRTozqMs969fVAyrD6DXeVxyBVhhtZG9Zzhs245oPvi3j8mQ48YrqbCLrLB1Wu9irWoocp9QrXnBZwJWHFBZmxx",
  "key11": "37anGDLRXQwWr7HWeqtyhEHrk2i2h9GPMo6vxzVSC7QsFmADPEAdfRXToEYgj8tCyJeNBBpSPX6Yfo8Gp6HXs124",
  "key12": "WyyMfqzPW6xGKRVxoLqVLbLwVyL3bsySvvba2WusnBcxQH36vnP6p2VBe3CYbuCh5vCPS1QZSiBrJuQvHekYu22",
  "key13": "4h6fPNY8RW1Y1WVGRbXPVQEdmQt51jQWHKAjFjrsKScHM284fL3aortgXqDbZfP4T9myh91C2KjH5jtHLL4LDREA",
  "key14": "2X3cKYpZiu7Ad9NnfBEJonVUPuX5qjpFJsVbAGb3S5i6f5e9jQpcfp285ujbExUjj6jwYKsx198MQNN6Er8gx2Zq",
  "key15": "2i3ceSRZ2BzBezispKNkqsnLC93mHA9QnaRJSKSccB4xMNMWx2FZw5qSY8k4dsSgeiqgFUSpXwJFJyGecWYq7nq6",
  "key16": "5Dgm32KbKGN1PxSH5ZRmdWBxT6GBYoSKyD8ytrWytCCu3GtB4HNd8Bi1DB2m4boM1XEKp9SxQwdGAnam2Aqrvv5L",
  "key17": "47JEqna5UNbHAKZrdRV49ahqUexo5wB6oMNoZXfGcEF1JXaB4KNdPfvB7GLskVwqWTrcKuF323v7ESCoqEHVvZEt",
  "key18": "5SdtSf1aGe1GpWeiGa1oRn8wpKL7Rn6uZPrrThqb2NpRgjDPD1wEyKRoECxAEQv5CcDdRjCE7iXTB2wjXWhq9QCa",
  "key19": "5y35uGGoEHykjDpDc5BDJ2VtnE3tZSwjBta2BHyGdQ46r1PdQfC1yjGsktBoCn8ehtT8diG7fSJcqSGNzM2gMgsd",
  "key20": "8UCVW4YopzARC3c15iJMsH5vGF9uTdPFw1tDbz1bAfnGaBgLVEJ8ugv1f8dc958ZA7RQMDCkqmmeBhmi5P9kYSr",
  "key21": "eSU1u1fKWGAqqkvhB52jd4YGDKUJ31fTaaQjZUQczF7kgoR7RQvjNfYnrtpBJwaXZiQkZw8BUxtSSi2pkNYj8gD",
  "key22": "5cMYJkHpksSt4DTuHcaN982f1a7XCTzs8g2svUqk51jX4YenKhPiC9SHNQ9duQbDLZ8KMqgE8afLKpuy9o5T5zrK",
  "key23": "5K7G2h4LTkK9eVC48fhaZXjJwSAxvYdaCkF8ahoSW6pXKNHvmxE1PQy6SddiwiUizvnMnCrpQZFEMGiPGFigPrFG",
  "key24": "5hrPnDoSDDJFYYt58Zj8qV7hLnE79RVVibDozEUrziHhV6qbToXdnaVkxDupmvuuWaKcuPzs77BpDWH4gWzdGnvs",
  "key25": "4JWDY31eivH88DTK19EGbqy1kvp2YqLZNfhYTWsLqurvGQdNJwkvTA6RzaQmHbSVfpVQGMZnJ4KHtrirXf26xsfZ",
  "key26": "3kcoTCPvZ2pRm1MELUiwvfR1JiYq6DA8vJ4qQqHznWEink16aPywJSxpoK5QwGDCBrYaxnHzy2JVczKqZrob5CYt",
  "key27": "2qEb78f63uCymJE1jZSJm2sjBuYSkBBSci6KU6AAEsaxD1J18HVg6i4sZMR2A6modqoVQYPgxa3zAYvBw3dYFfzU",
  "key28": "4L5ccq78U86f9HpmYMqNVpJuXc8JwvwhWypUXWUPwtH9xsvKhj6nM4zvYoVoqSDq4FpiRVMVPVTpXrCzd81YCxgG",
  "key29": "hcFyY8wBBwTrHt78jA8ic3jjwRYp8D6vzxeaYXaL23QpsJ2cWPkPg6BFiWT5cTK1CFRYyZh6objvN3Y7ryk9JLh",
  "key30": "2xqJRWAUFwaitxUx9uEnzpRayLdL8awxisBsMoJ3o3NzuXLKFkPiA8nV4BPt2QfSjA1CC9RbgwuS5EwWTusH9GzM",
  "key31": "kVH2eEwkJPGYmtzuysBikvc5X1F7agunA14ghoDEzNAgvXjwXKepwCC7xqs6fzKEksEgY5uwS6Y9Gfp75XNfnpy",
  "key32": "2WGTmzgcsodDqi5Y83XnRYQLwCehQ3zPDNf8axhEhNGoJtbGWDfKgeEbNbBqkwAyAHf6KnAExG3UZHFJReLdCrPZ",
  "key33": "4y8HXDDr9hcfDhWUgsHJZreKJTPyXjn8YRUS86mCdNuyWVco8PkbFWg4hpjdgm1CRgxb14N2t7xvkGp6KfXLsoNf",
  "key34": "2GmgCUXMctXvc2Yrk48mUqMLfyERFe5WAkt52ss63dR7mZ55rjaBmLhxbgFEAjRQcCsTnyeYvHf4eDuspa1SUXAM",
  "key35": "4zRKyCXHtJD6YGLeatZta5hwh9NaKpv8ts6udFP6awafNKpfTJVppwjE1nfmFKTRMNEzxbHjQypdqr8dtMGHw63e",
  "key36": "iK4NXmW55coiGAPUm5WAtBidBYd5ExENQo3VLkVd7E4EYR38YpATmAMHf4ZPuLAeFFm1UAc3miU2LiB43ppVEE1",
  "key37": "4FGmkorhqrmvF6PqjMEs6x7hXfVcEpGDp7xDJEJWqiLF5CoWRNMVGQcgDh1DqWba3AbF5byBjAPs7uhsSHjTGeKj"
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
