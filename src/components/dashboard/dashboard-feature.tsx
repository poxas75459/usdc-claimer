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
    "NAdxDDhzguDCvd1LnJcnbJz9Keeqs3aDKvauotTpRP2PTWiAUtx2VbkpRnR9umGHjz18qcov1Xk5zV9Ntp8zW7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CsZqZdaD5yN1FtWi15wznBE3ub7fc5ZpcWpqovCTTcAkodQ5ndmPT8bbeHzWky8EcezmA2pXNyqsAQC8nKcuvEU",
  "key1": "2HsHyWrvgPAKQu3aJm3gAqp9H8UgpQGaaU6URTNfTQwex76GXhzJ3LBV3c8sCKqmPZAo3JBTZqmvuK3m8JhNJ7uU",
  "key2": "4HhCFnMDhSqRrpK2scBbwjMjuT8MrWs1VVhye9szQyPh7RQ6xfyRUKWFHbaqa1biaeZ7dz92HNBCdkPLUyJoAXAH",
  "key3": "5usaAfx4zMrbtjJto77d1kPqibQm5mcBvs7edfUJaBpJ7rKWyHr9BC5bpQFbZ6hRvsqU8GboToEh9D44VmyKh5K1",
  "key4": "29j8Ld5nTm6SkTkxroruZt7CdVTrryHmF2yWtZnYJFVZGv7WsJNmHKgB6app199WAKoqehYzPx6RpiMdNNEcpdQN",
  "key5": "yqdHijiF2jWAbq8LoGbvN7n2USmZmZRWgcnwzgoxJmhCsEeea2hQPi7NUXR9pdpuWGeUWjTVGDbS3nTMU83CNAy",
  "key6": "3hxweASBZbkbQhnWrYon5ttzvw6tDmHAprwZqMd6fCBr5SuCzvnhd37tUrrd1YZRy3r6btn7nBxE6r3ZtuUSbTev",
  "key7": "4JnjvXNb6wGXuTvMmgcmKQ2wBEkZ7nQV37W4wJ5J2YpyECxbLQBajKhLPpWRPpEKeGsmiKqb9QLxyMa3246k3SD5",
  "key8": "295BTffNMr5fFzmnceB6JXEsh8FQPPK3KeMotRkT4qoEKHQrdCbRq7DXDLNG3BRuAQ7jqAEhEXSprv5fMFpffUja",
  "key9": "42BENtnFkfAk7zZJESQRYzULjNSvKjAhzjKdmxtD11Gyo4aBJRnLvm7yHhdouwQsYDbYN24iKXXgJsRQAoGt2zKJ",
  "key10": "4tW5UDmnqh4ECasxzmA3dwVs7qJMB35UZFg6n1syXS2c7uV95QdyJkaYKMjdFEe3vY65GniEvd7PHCxGPju6p2MY",
  "key11": "2oSPDE4Q6aoZU3CzeURZKCpaa7WAoQNuaaVPGNZXbxXAp2owXvBboZraYzmhBTWaRV7uzm3xEnkE9iZhUB4zFhPi",
  "key12": "55Rj1DrZ7u6cCRDajNEMn4vHnHwpFLxKxRwPapG2z9Vz7Z6UJ7nJNPLxjiKwHaXEDR6JQp33yVEb87msUT3pkPex",
  "key13": "2jpe8kenpJBXqrkoiYcemX8DAdvDn7jVdphFiYntsEe2NGSq8X2q6bQ4J7QpZVHWARDgq2hzEksXFkuBgHgtdveQ",
  "key14": "2NBzn6M9pKuhmhb8538ibEWPvjZ2EutDhyAPRGRJLoUeaxzfVhdj5dCnF8R5Nev9MYBUccHUkfKLzRrZ81f3wc33",
  "key15": "4y2nt98s6uAnKEZo2dT2kjG7HHavS1Nby2wtR57aHVQ4oNpPCiTNkk6vrWkSWfyfyjqRPuaAbtxpRavEibkzzVv9",
  "key16": "kAYHJLXMFPxsZJTTmNFqJqti1QmviH9eJCB1VRX3MnMnP8jUNXx7bAJd1wV18LSMap5XqbWyuf3fi2BjXy2x6vj",
  "key17": "2R1NQWYBndfnBfb5QMV25o37f49ZVLPMb6nWzTdVSiMEhGS1SqMNcLa9Juer281gNaVJyQg6Ri17fya7Y4D1wYK2",
  "key18": "3Pnj48LxujTv8DU99XNbx72FyeFL9yYEamdHVRGyFxd4LJ2iCDDpeA7dzFaXd6v1asRT8XqoZA2fmX8ZTyW3TLou",
  "key19": "2jBhrbQhCCMryXwJZS821wtBYWgKLodBjFVSBUkgaUQeeUDpeGPxYtX1apzPwghmuTL6juZBBYwzRiYvK7pwWcEM",
  "key20": "34XmP3npeH3oxCVnsG4ZU43knRavuyeQTbPANGmVvdnQSWubM7zSem3r2caU8E7FNxhddmPqvnV3BkEsxoNBCBrz",
  "key21": "5UYPR4quZ8fCSuQhwAZZ6oe69fexWYujsBszGiaduomTWgCEcJmC4UokJsLtUys9FfaWk857CXms4EZfdzkYSB6U",
  "key22": "5bzMnzpMzmNXguTPXsXSkYcVUcm6yeGjYoVQAmV88KMpzs2T7AKW6BkLo4DSHs537YKrZhFzd25Pj9XZfR4RWQQ2",
  "key23": "3cLFMxjLJ6hz3tKbQ66txxtq983rjR3zHFFmvcGBZsbaPdv1rTtYXWugE9zNBSJYAGpY9D4Png9zPHzWH8Uc5j5X",
  "key24": "2nvCgNkKPtaafnMgRfoaGXfxwkj8D3SEJkDM3EAUY1qZNjHAMAV8Ax2JeD3FNaaYAHJTDYvdfgsYJPcDjmfVFffM",
  "key25": "2xHxedR4PWkBq1MgBPs2eLMszqFFvfyyM4SshMsjthJ1NAs3U4BVotvMLE3HXb1FrEJpTStE7CYnwZ9JLCrw9cxi",
  "key26": "3vMciDznfVQ8oFrykjPPcDystcxqPh8b12xSTNDVczQnhdoNoWxJ3FWUHN9THScDMsbA6byrTjb2eXAycKGfHaZ6",
  "key27": "5e75r9uaCS3E5rw4wF3m2uWpVpTt59rrTrErVV3zWLurqGyuLtn1B9NsykRAbrgCxL7tr73vsK9BjqpTEmxfDtsD",
  "key28": "4PhUBgDKhKraDzGcpmYoPLSkM2P7kSBprsXbAJyKnNqg4RSRFimkpcUAzguS2DHShZD9vzdFEDUEf1kmGjgxTdW8",
  "key29": "2KcaHQeFQnWXGbPwDUZZLEkWGxUc28PXwuCpgDqbHG8tvidzdsLysCLcXDo1iSopFx3SXhEzWHC87NVyNFMCzcY9",
  "key30": "5abVghGUkiixEUNgEunjnJ46cveVuoFjfVfn8PjMdARYVqwWtxNe6ECJHBvJiK6x5cTKReEeHZdXkkifkNT297jf",
  "key31": "zwhKcJ8Tz3fhKWGs2uZccsW7zvbucasj6tZnhxVCuz54fTQPyGk8xk8DxgDwuPHq6wuXZKhxCKUrvCHiDaLt7rc",
  "key32": "5yFzBeG47zH437RbipuuuaXRGepiSaHMgKjuLfw8D73mdJV29mStZHdDmrnzE1ePsTpWj5EJ8xLJMyxsq1dz9vL5",
  "key33": "47BUrPsM6NmRG7CaC9ASxpqVLxr1kXB92rRY6Ba9ERHzuoxZFgLmgDxyDDLJuwyipAGo8XcAygYomPFFMDRBJztd",
  "key34": "2V3Eu26vwhWsdAWfTPDgnh9qUHRjuXuvzvzXWKRDLgZzAUPBJsJRsuEeErQGwxmfqcJEfRLCu2xbJ4jXraMZRgVM",
  "key35": "53DK5Np8m8EpcW94bvt5ZrdqDTaBVUsErjP7WvEFcDXqpAbjd36fK9D2F5Nhmth8QVfyY5QtFiTfhPtkePk4tLmd",
  "key36": "5nyCoEUA3xGMw7kzPFaZKj1id3cZKLP5SchBxPjXSVeEMgBJMUPbuZum2BUvrDRh2pyxAZpkPzTRcKHMhKoC791k",
  "key37": "JE5j8j64HD4BU87HWQypx2qqpeauvqWY7dTu54fxNdMMEWTjA2HwhFPpSSSWpSbnXCtUDa3fsbpviAcgu7LKtkB",
  "key38": "5grjcsn54Q9fr5hnks9wui3p7QuB31Pq3T1VzwxKreeVAEZa5ee6LAeVG5qeu7pWJUoUgGpvCNHvFmcjSwdypnhv"
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
