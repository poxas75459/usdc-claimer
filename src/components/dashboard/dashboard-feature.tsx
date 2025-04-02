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
    "5gyvoT94vBafduJuuDdayybwnmunVvsU85H4myR46PGBqQnEu4yB8tN9GvnVFnwgxFbtgMkdDs2mqf19don8xe8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Y2rYiEZAmogKqjHaDGjwqKaH4EfQEHLX57Ve5dZt6kSbuXbshsCm6VqPitiQs5P4m9v9jWfFtAFzdTTREn5cwu",
  "key1": "45vB4LxbHxEvfEViVFDjhrqcMWEGnmnWDwoCT4pH1UzbNNMEDco3QkK8QM8iPVdSV6EwaD7cAH3dQpe1VhoZ93To",
  "key2": "uCu1SLjAR8uALFGUzXoMseHgVStafEbFGrGC6oSVX143K3A7xxRU2yNZtypVWMDiNMDxYNLAR3o5Ug5Z3iDqVKi",
  "key3": "4yUwFupRhZ6qsG1n3N7fLpSUyW3ZeqVxUZEjJhKsNUtvw8ExkNx2769b1F4W3dNoBy5a71VcfgDPGbvhfX9iAc9E",
  "key4": "5MroF3X9EZqdxnRUEdbMRjkykzoUqWdyAYAUxZjsTRSH6ewUs4DQ2vL38So3wcBgf96SCtyQ2MzxMGPhSQcUCvZX",
  "key5": "5AuXonZXaWP3fcEotyrktYQEyDrA9YdMwjYN3oxV8zKMzGZa5FrM6qTU565iMtEJBecPjiaAAT8AuPpt4R8ARX1o",
  "key6": "5EGU18zLQkfEi7pipayevoXYtKn76TmXZe63i1dFjy87Z5GNQmfH8MWGR2bPUv5K1h4yxC8USMoBcc6pMGmdejdY",
  "key7": "4erZSZAN8msP1CjnTAVWxGdrJjkDZ4KWo87BwpQhCkQnLuS2fCAmHzPPnaseMJnJPkRoYLXiALhsXktD6Y4DqAS3",
  "key8": "4wJc26LjxBwRMdHbvw21LqTJfx2K6Zy8wzbUSZgEL5JJwqnKHmNJXGaEzYrTyu7e6pCHD6V4sWDesZmbjkRafGbT",
  "key9": "2yyxyAjJXjHuJ5hz339cAWHD5spswByEH6KAkSmW2d4FSgGF96Ej1UZgAAhztw7B5dJceoLvttuppSrB9kyRxmef",
  "key10": "y9kALeYdKNzVouEQZ31cB5W3zfVHTSn37e9g96nHBWRk5xrBdR3VVFzaEfMByyen5zcAzeGYtDuKWSqbJ9D26Wn",
  "key11": "5F3SaMoBr4NLzBe1SaHV6GD8SNja3eBbGjhVsNQ3VAPhDwX4rWxzUr8GHSFHtDKkErJBpKgAMTzN6RWUHF2LF9qa",
  "key12": "49bJQdQMrWcom1HoakkmSUtCBsMWAGAK3xZejdPF4QGCQQJkFYvWLjANW9DXAfNwptvGnoB57SbjQFrfVWMkJU56",
  "key13": "3ckDwfTNq7f5FRKuN3EQH5wMJGzaUkhNJD8BP4PNQ4Kp7iy5ufSgFSfUGCob6c5QxwCgGzvK7f6s3hwe3op4UabX",
  "key14": "5sbtNzyFpkuiMYBnRWvakcSg68upwRfxmitVCjt74LRe1atQtWKsH5PeHTpfWypnEYXxVXYeugDtxaR5KbrX6SF3",
  "key15": "56wJ8hSVATE6pSKns6e7S6WYJ4ss65m2gzgF68xdnFaEspDu6gekrLv5rTKjbeBE3wXsbYXrvgVfk7gbhq423aaP",
  "key16": "4ohWFL6LRKsazpkNhvhK7coW7D3dZzzDKSJonKRKT9j5Wzay2ePoqiVsKM1rjdnWPKKRqKW1byavVFfzXzKC514U",
  "key17": "5DAwuxtn2BDUjiYund1WbP2q67ie3G8VjsbV7Uo11rx6ckC1csJWuUHrBn5NK9z9oSdFx4UHR2rEgHUZScL1QDYR",
  "key18": "5qX2haoRn7U5VLTWoF9nGf3a5HYsXamHGHtCTzd1BimwpcgmSwYtu27Sbx3yBGrnPa43VsBAhghVDQAs4HRfwPNC",
  "key19": "Jd82ww8X6APWJ16CeEVUA7uVNCz7aqN3C49xTL74vAnZ4sAvcmeDzL7nKvqCp4WCnSFYqwt1tzi8sb7hov6qY1q",
  "key20": "5KaQbXZxMtWXmVNekuwsqBn616KFrfoH7Kzno2sk1HGieKPysvm9XCK3MAxhQuhru848TrHDkGy5a4BLC4S2grap",
  "key21": "3okLdx8cmQabrpUsXQCa1Xi7Zqskp9pcZTR4vZ83XsLRqDA4QPfhsLWXurSziTjB54R1gRTTtzur9Y6Uyzwe6eGB",
  "key22": "2MZ9rkQRySPonFarwESH5f77jJ8JuAhv655cP7hm5ka7DM1rruuusijiR7YwGg3Ur34LN5qNQCjqfGDdCDhUBHr1",
  "key23": "2JUdphVmfywWynaiBb1JgJ12mbLYiL4sJWLAto8fQdgzwNDFZzYZwPMs7No3Df5Jxqy5tHEuX7QCLD33EU7MmRap",
  "key24": "nMjWaHbFVFn33rvBN5SsCfRBrawfEsQW257oXRrBtwMXEisMYoyxYnNhNLSbsff1dPrusKfTpRgY1gh9iDETh67",
  "key25": "3Htei36cqPSw8uGw4xGPH881FYYAjeXxxW8D3Pfn7UNQ4ybf5J8o5GyUU8rQzK916Q8LkeDkkAWaMFqYL9jjTWGJ"
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
