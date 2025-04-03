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
    "51WChjSvmDJJdsWySBWgMJW7V9ZXLCtLJu8oJ8tf1kw4KrQTMR52zpAKWJNs8TbRjR7Jq3CDKKnrrR151RqUxN3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cp8G8huBK6suWo2ra3xzmm7SAdbZrJaVG4rJeq7fRwQwUujEsp7daREC82FxboCSYfmUNGdb68UutdsPveqYzU",
  "key1": "3wcKNpbD2T3Kqw3gsZrri4JHshaBDf4MKyJ5mRk84tbntxgD7umhb7wbGdmwiSG1NbmXEeNDSdgHvvjkseD6hV4p",
  "key2": "jp6VXZNusQJE8UqFnxoXm8ooFwSWud6yKmEUgEPYg6btJfyQQ4TWQae4r2weyJXErfvtpP9cqVYxitjkwKSWBN5",
  "key3": "5cTmg1HcrPTVKUoRSFoy7F9uzkYyjxysTdNxLw91agUGH6MKcbzhDR6wjSvduA5B1sw25bGh4bgwoZqs4oUYUhw7",
  "key4": "ZPzjtS2s6eEVHu2omMYpa4odRZHnZ2BkTLidwB4Ktodhr3tQcANtPgVa8pYxmsxAs3PvDhkvtFgYEY5qmHvuUuV",
  "key5": "3k46WgXbh7CTjR3RyUVdDv1J8nJGwFn6wjTup1rfZegWequ5FNJA75b3u41m83PCp8BhoXUQ7mqc1jkwfevyQ948",
  "key6": "eNunHjF5MiFQ7wHcUm5Cm6w1exLtCVpwvRGSq9bMiP6isRvm8zCDoy5gfWGUqzwphP1U1LNFiWEbTsTKSmCLbHc",
  "key7": "3fRy1V2giTawSFdP7qhnw7A912sW8ozxT5TccmUjjrp5mBnNSSiVrftvmoujg2ZN37ig5c2ws3sBAWk1Lk6LxS3W",
  "key8": "4q9ESb22JxCwk4acMgsy9nZWqSujqE77n461bCwEDUCJXx3mVqdRAFXnnoAtwEuJykQ6zKRUPnC342uswvk3KjC8",
  "key9": "3dLBaX9RbSYuHonFNRESLW8TjezkofQ48qfvXBWUGkjqyR9GsKkn7CrhXufqiuWdZRoBVyG4nt3QiyWwEcSZr7XX",
  "key10": "gAEqe5Q4KUWxDrHAqQKLnggNoRWQtXrwb4MHpipBrrxGzFGfz4W6BUHQckdpZ1ugHbE4wgL1GBGvhomyYpKXp9W",
  "key11": "2DTr7kK41t3o7bBSNjjKM5KVTAhWYuRBgeP4RUoTFp8U2S4pogY8ytTEPkgN6xaa5bhxe4z6rRpYNabdtDNi8Aby",
  "key12": "2h8NyTBVddJiFXD3b9CYxsbQMN3wE6PJBSWCaKj3TVjq7r6jr1cfwWmV79fhyEQmqXNk6wvauYgy5Rbqs3bk9mp7",
  "key13": "DKKwPex8ymZpdEZy2tudsmL8NxwpB4Vpd6s6mUFAukCAVKyghNZFnd5mtnpaH5Ueki74Hxo32n9NHxNYWduHr2y",
  "key14": "2CLswgRuu5ZqKw5sgpFPUT3PLU4tiXSy4BX9ZcghRQfoyyMjqn1kA26inoNjHM8qQxn4BtF3wYcLU1iybsstUjJ4",
  "key15": "48EbYYYz4S256C6Hv7TpSdWjRZpCWYp7jxNNnJv8ZSBJQroz3nzFR1w8jdC9qx5pkmrYvEZf8Ju2WPAHSKauLcWT",
  "key16": "3v2pviprTgYgSooUE6mCBNqvgfy2TUqcfE4fGvHyZk4H4xEosySjB8hBmJggBWmk29Pd1fXoTyGYLy57w6CAiYRQ",
  "key17": "2Gby2p4go4kcnzfX2dBSe1Cmbc1VhnfM9RMkHkGNJibqWN26cforJjUUvwdr4gDJ5FrFhjvU8Zne8msd9tnmVtzy",
  "key18": "4CURKQv4qfKmRYE1mk5kKfWJt26q5vbpdvnLYxtfty266FLughuE8uZJPpsWEbGCJdS5VQgTck7p1hVfF1gLmjun",
  "key19": "3h9LFFCqbLHXqyKDhuNhPT9tSUTCXQn1vb2XnhPz5BMWqLKDdZQ9eSaZYrZzT1gpeNtC2HVrKzCqQHPewLCsCkRo",
  "key20": "2s4jjjbt3kD1sem8bw7GGs2QLBKPxfx6VcK1DRb5L9NabxXK7V79QtrbBdhVEZvRe2jJPWbsCfXgdwjmDQtUvDKq",
  "key21": "5thnnJ7hYZMCTwmfYJ8jYRhjYgw8QThTzXSMWt1EWjL918bHJjj8NceE28gS8RNPqJFutfkPZ5E6B5yZUp5XvS1k",
  "key22": "9SyqNgovJp4bUYJ5jCoZPiaLfd35wqLodbpYEZwiBNVd7WSGisnNXdzfjsVXm4nbMsybCc6bxtUhW2q3px3EmJT",
  "key23": "2BZbU4d8hqGUiYt33caeACjbehPWLpkK3JxLQoZGPRveGFEXm5cq7qyEkNNwiHKHFjXmbsV6djLgXqxxLDaRDFFq",
  "key24": "5ZmzaopBj4aLN25s5KLNkEPJBQBVbFJ9KBpUVqrU291cSJC4ayN5rwoWbWFijKq2S8AnahuHT5BJNWsET9uA966q",
  "key25": "5NtwECAuK4wEEFPdgRzJVtwmeRzfr9fr8EDpL7wYVmVFd1eEy6C7AgqUTjfNw3ayz5dUpg55PCwVv3QvwD6vjVNM",
  "key26": "3TKtgNLEf2A1cDjTtvby1egcehVZowSg7daD68kFgcc5U98CE2fHJm5gDSyz6ePMoE2zv6KGpVdkfHzTwT271Wxc",
  "key27": "2wDYAsbRxbZbNyFC42jFdYNyshbCj53nTVEmAEem58htnPgJFtVLbGWAhzZYjCxxu73j9Sq9TprBJK8TGe6QfQof",
  "key28": "3GjkcqKpfwCC8K4fW3ZLNfNTu2RtHYhgk8y2bhpzhxEp4yv4KGwG5fRaeqTgTYCsfkU5PBLiNs66mTxDhZU9Ruv2",
  "key29": "3nRYgKLhQ6pp4PJw7sF5GcNrTkyfKx6qGML26kB1i1GCtDyVwAnv7sgJmGsHg585QtGbyaNM5G8RytqGQEmKgSn4",
  "key30": "5FS7ya96gXT8duBPsWi6qJzGWULWpz7aaRweNC5uNmzjRDJdErQcVSkioUVJcbzrToa8v2wf4VKwbQQEbG3MgrLn",
  "key31": "5QYytx9TH7GYhzxVBjQoZWF8SLyiAmBWunomjTUQzHzxAsT9pTruym8QLHZLitp2iK5xeXbEv8V76E89KhhrkhML",
  "key32": "4TLNLEhpTgpYXLwb7YpWBEhEFtqXPGxsKevLtpKohEh5sHfgwGxrSFPa8jwGYjvwbYeypZCU6cUuRRZbKSCNcLuU",
  "key33": "9sesqWtgvdPPwEgq4uBhVdoZGhuFoTbt5YYZCyvib7h2w3DWmaft3iEYK39MoCSsf7vvyKPWSkVcLUioGP7sBDY",
  "key34": "5ogEp5S2f85zTGjYYxkt634sAYvm4q2QYHaiAXgvwa49g37Ff5DFqpUyCKHUG9BnhzEfN6x7UJL6CXKetXFCgdok",
  "key35": "3XWzGw59YjhVPAP9K7ixTPGHZCenGjW5Q7ghEoZmXyz1RnKzP4P4SDufZpsNDrvAs5fRJbTuf3wSKLdVNREsbZyd",
  "key36": "5uVQvLsicJ3QkhpqHWgRfhWWaAm3PmVwRjBm6xVWuSbQBtPhprbNRnhoHRxRWWJjvWjAhaPN2jWRJSevsYzLZoTi",
  "key37": "2zrGUaYnWRxjJCoozaHVPCXFHvEVttA3nQJsUxeB6yBXAj5u3MvvfRurw1eMLCuobcdgMSW58UwaXk2WJbPA8jBo",
  "key38": "57iYz6kS4dJRSUUowKmsNcyafmQZn4HoyJ6pJxx3r5ZruhiJjKq2cDv1r56bbiXncmhc3DVk7wjAnCSTf5R6uFQt",
  "key39": "2ttZ9ennFBr3GS9snTr4sPg31shgXCdKrG4bSKc64NtZQSiHP5y4nENhsceodv365dgkawNEAZbH5fxh6XNbug95",
  "key40": "5cFM8nqd5WFWRYJZrgGJ59QWwKNn7u1g2SLiRJVCwHtNrbtLLJ9detSTUvzNzU1uqvavYuRVFHtrmUk1rpoRyCet",
  "key41": "5oh4Pz67jXbXD6tK5LJbWP9qMrMbuFHPrCu7oML8FUUk4b3uzu7ET3giEg99XyEhPSJUbRiNeio1mL23HDftsbu2",
  "key42": "6baNCyd1nQAJDTrKFgMog2MPW2kNUAH49DnFxnM88xbfkhq76xJN24u45gfHgEDfVBPjezgJrkpxctzjWpfyzdL",
  "key43": "34DG9hi6g54rKJjfwJey3dRpjTs7xhYxU79KXKucdqfmN1JjZaJ7Nsa5U6fQHgFmvL4FYm5pi448wHTko2LTuHVa",
  "key44": "4Eb4n7jU2Je85HDhj574r5ddBAuVqoYerQrdfzmipyAxnBbNm9xbzbgaLLmV5B2nJpQfZ1sCBs9EH4yT8hz5FDXT",
  "key45": "5hhjboJSp4t8DB3j3ymjhcFP6uGj6BW66KSvV5i35zT7EGHLCBgqtzt5UzHnXvRbvfF2p53APRhvBYN45QKQ3aEF",
  "key46": "2TmVP9r7GJmsGmNhP2fsNGCDbBmXm827Zn7Xrm9ktAJL2h38weYuugNX3dzqBwtjKptbSUsKqjThnMrrvHfC7PKN",
  "key47": "q64yqRYvU4HfMsKj9ebWWp2Rkj1tu5LxHpDwBy3zPZ4oSLtbjVi2pJjhtVAv6Z7Teb1dLpG8YEGsyUcLnm3L8Nn"
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
