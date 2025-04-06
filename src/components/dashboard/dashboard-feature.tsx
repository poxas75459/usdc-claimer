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
    "5bzjCM5ALsB18SHdLfv63m12BHQ1p6oRyF9FTkDCgU1rURtTCttj2xFKt5dEutDbygTKKLxvmfqXPqPoFsuNKWEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgH3XuhghnM7VX9EPKqXRBCKQdRZSNbeWW92hrMreuErDrCTwszuuXqhewqgZwqHySSWSS278XR5F5MiMAFGJXg",
  "key1": "3qX8GAb8PE7e5pPePkXxNwL2n1fQQxoXpJEcsRZsJEKZG79BttBLpybPBQ1jLx3tKKPr98hRQy1C96CY524HDLNB",
  "key2": "2BF4uqfVgQZGtmnZswDJRkYs8owC2z5ujisu1Nb99TPEH5ojzGogJPjc8yPxpKLTHymAZYEpMe5QUu8VKuXh7KW",
  "key3": "3USL63c6NNyCYSxvFzDB6UyB9y23Epha9MVWMgwuDd5su56Gmf32pxeNmJocL9fkzYUrHi5GSso4o8V7SSfkLcp7",
  "key4": "25RpVDwHViqcaJukfhwRgjZkV6iFchBZtP4Scct7kNwKfaH35NncS2fRT5sT9NstweFmY2radE1kU2PAxxu4miru",
  "key5": "31ZCMemyNqKyBvVngpHDiL62LcQVUAkwusYCD2HWMmVQCAbMcEm1ZxeyB5Ktbr3sQDuArYnCAK4hPGdtuCiR41Sc",
  "key6": "2FKdviJkc6oMg9HyM7oauSZ5MiphJN2LFjYKwq9dLir8AzeiY3cfHangSntCqVZrNQwB9Uspbw4fv1HeRaJGKS9w",
  "key7": "2WtccVGQBfy6CcpmDXQgKGsFopuhciwUNYykT4RjqCqfK3v6MreoCfz3hieDY11hXvaBNyvNseonAH2QZUUxAMKL",
  "key8": "5oDxoreAQQaL8oAYp1YD3uSTEKpD1oqjnuDZBrGq1uQGN9wUxhXC8yjCk9VzaJDNPTdFqgm6afCqMFhqurQ28Mqj",
  "key9": "2DeUq34d9hnFzMFip8E54wDajF3ubDp5qTSmMoc7a7Eup828aDsAqtgwvU5odzvH2j54Nb9AF8wJoL7y5t5B2JR7",
  "key10": "2Ygmr4Cjz2bWytACN32czSTiQk9vCzDmwn1HPohEKbmnFhSHRqHmAtBCbLXu3KSDbbhgwkVRZQ35wWPJJMxR8d3U",
  "key11": "3KjJkVwTQ29YWBkevK7e3A2GwiPuvy2b7JCq3M9NgZ9CFVSHfGPGnpqwYPqShu41UKafgtfcbmuqsdZYWeBKG6wq",
  "key12": "66Vxd22d6SPcD7GSQ97bZX6FiFKxCchpZnxGFP5SANphoZEtuWMPPnMY8Zn5Ckt9V9593PeojSqCzSupsjQFUsDR",
  "key13": "5B9PEuSEKo5q2NYuKdYAfq5JkPsnsxgcVooYg8CZ7yvdVv79npqUAcpWPnAr57TijUgczXLbT8bU8gYkcyd1KfBM",
  "key14": "3TtST9Yp3qMYURGqxk9GN3kRC7Tshy5BtxNmdZ4pVFkWYjU8axfZLK5f3d3pvtKaFxhm4gcJN5DLfK2TeJJHgPA5",
  "key15": "4zbAnt3rrhSTQoY9Ebuh93SbL7RfZ5gCjZnnCi7McccYwTqzMuRB91RDzbeFhxCJLnxs4BprQaCL7mGedNpAnsdf",
  "key16": "66zPaQR3smAQkV26rMhfCs1AguuRpxWvzdw1HJvNRky2ho9kqUfQGoBprpUSQfbJFJeqKKQL5rsfiKP9Uwg4dm4n",
  "key17": "29nkTJ2ZeRnnRtHexUPnhXTLStxekU87jrwBqUmW7SxRtqu431K6669oEH6mbmtRdDJjEgGx3bdWNS1cxaaWmS2K",
  "key18": "4HCTx553gBURpJJVg5Q4GHrMMSLNsXkcZp99j1Lynu8YFY8MioPoYDbzxrknTVLa4BTFVkZXgRodcUpFatxXGzC",
  "key19": "2DcBZ1sf1fLkkuZQUUS39v17fjsYxYqTcms2kexNfPkyDDSHVJQcFrYizQdCXMEUmcxheRVE8Awdzu1cs3ywLSsx",
  "key20": "4uq634fjkwWFJjb4Yv47muMRsc5qQVrGUeSQveqMsDw9ojgjMiSenb6MzHRwWdAY8CRKwgvmHMoHbTRC6xkb9sYE",
  "key21": "65MFjxwN7kFcuRPx2X1CWMbiX7d4uL3EgqEWLKYYccW3bzZLNc2eCxipX9ny5dj9pVRFykp7V2FPvUwrch6uXJzC",
  "key22": "3q7r3DsxuB74KWmnHTxExUMUi6LXuGQuDGCsuKSauTAbBcNHeoNTagyK4qANQzakBaMHf5NJQ2xqDbLpzJAiziUv",
  "key23": "3SogyzjSwHRgoz9bwowFgtSUVDLshtgZn7k3Z8AKjZGbPg5HW5oQt24zddxSCJNtTMfTaukT3dJGNQ6RCmqAzqbm",
  "key24": "3zHMt1j6iyDy6DuLHnvZ1CkG1naEc2vYXRN5db9bgM6EF3xsZa3koxeecHDFiH7TDab3kxi14Fsjp71UrSsdPDwA",
  "key25": "Tscp6PnK4NMKFQQbnRo11GUwGUQhjNH6c6SWs8SoYyT6dR4cTKjpasLUkwWPwbzKUYzrM3X9yMxRvt2at2gk8og",
  "key26": "4MhucrFEG4mLsHyasJ3PEjW7TqFN7uJCGZJtRV9MYtjrDKwWTthu61P4RiFC64wZZDgwQh1D9B31ec8f3ksTubVm",
  "key27": "5n8w3o5sJYQTUt46Git2gquGtdGBCWutsSq4HGSjtLbz8qYiCsXBtAF3rTa3EciptrzpVdS29TRNXnbULSBthzzy",
  "key28": "3ygqaMSXYDWsZRVDEtURq89iobLeDXKzvxgt5AKwJcXSjCKcsBb8knjygNGqTgRNZAD598Us1oC8PqiaDojhTozD",
  "key29": "2qDJP1As4dxfrg174sYLhx6HR3yCvGfBHPRcfqTaE9DBnHJBwDRUEDhjShqrf8TpYkeDquTFC4hs3KdNMDG3iCRb",
  "key30": "39t3Fg55MPDxceM2HefLp2Ub4fJVbqD1r7NAnz8hFxkMtRm6tXwhVynCZRzhQJ5JXXjhEfrvVkEM3Z2Nu2SFdvEf",
  "key31": "3WR3FmeNmfhmDAvPZUjjB16599vjr5R9mKZEzPxBS9K4tSKDRH6S41z3VxopzMxaSAuJ1UJQUuMoYFWJAFHfLsJy",
  "key32": "3t6owRiMEvbZx3WNTXj7x11mDjA6X6VWMkXWFogAiV9wr9qZGHm7mUBbVK5kPAjTG9iDdk88hdKAH2wKy7AyfrZe",
  "key33": "3NQ1VSfqioQiaWidLyA2rf1sESrg8PLkapD2RM8maNrzD6eVMrbTx82vN7YmtSdmE5T9brwrp3KWojeoSFyZB65h",
  "key34": "53neQf9YNjR4ZiDjBMkhV73T2s74JzZo3AyXkKQibsXw2hREyBLk2Ff6kcKDdfwk6pDNx3PKMcE6UskH4hDFsyWr",
  "key35": "5ioNBe7sWKGrEu47B6JCaD7Mnqa6EKKBiSiytKwfTG3vJ6UQm6CizSNFqdHUhS5S873Wt5Ftkaw66NK6vogFh8H",
  "key36": "3pBKu8gcdfMxfx82ik4jcYP9N3dujcYGbuhCFrttZ2tWVQYzgJmhGjUDo1ZrJtQACNdUE2zS9vRn5mmfjJchQV37",
  "key37": "3ikceC3RB8QdnLZvk3uATeNrnqhTDGZHdUYGDboCmcdXig5Vr8ytYeMYuopPXW2mv3BEf4DRt2FHJKYbtL2LHy2R",
  "key38": "5HYzmippa1yvM4cJc44euSmXcWEKqvPsAHb4hSRrunL9F4Jcu4M8NkeUtdpfvwJWiobAugvezXbi856F7RaVNvvq",
  "key39": "2DYGM4tG6VtqjxH4zKKPKVKfY4GLPikGjJYqaxshe7cWhu6u3fYrmj8caXtiUrVFZYBFJFna3MPDWUtDyVcSo9va",
  "key40": "62dPtGk7zPrcXFwZV4Dy3pjtAqgJrPaD9bspmeAzLAwf5DZjPs4yGWTTPXzFPuWUsNnDtpFXkfDQts8zay7e5NWL",
  "key41": "FVJ8WLuaarRHf9dRXWHUKAYmUK1MZ1DYiD3eDddd4UKkKbuqpSWcL5FJsAQ6v2UpgkqLTVcR111x1hvmhy8AG7d",
  "key42": "5EnQtkyg1aLKwepp1FXMr1KeqSY4spN9adf8c7HBLriMtG9f2WyxCQiLH12tPmFyoSfAVatZz5FZ943Qmpp5F2Pj",
  "key43": "3LNuWYpRaRwbaPnk2f6TV5RB4gtEV3NtH2gJrt5mpzjzqbRsttYCRHg1f2SQfM5EE9U94Ww2bjWdYbGdxJsLBwWa",
  "key44": "5E5uYDkyXnmcms9yV5Qjk93yvvaVYLGZx8n2DMZD2pEFXEtVRY4P3gHt49U3bsBiETRukf2AwU1n4kTLTKhNfmMb",
  "key45": "63trXtMMUxymFZL8zxzujQ2fLSV84aNsBLS4QzoYG1QRX8Lgnf5u5ob1yiv3yGFLYNyuNmLJgFkXbCU9HwVVHRrn",
  "key46": "4t4qRFy6CdCwb9FpRmcKYve7FTpiiXa9ar1tnuvLZyeCoT5a2i7B11CDA5A3atbEeP9RyxJLZK38XseDCJ6LSYtu",
  "key47": "3j9nkFD7hNKDTMcUhdGfvjiHgQnG6ScHM2pr9Ee57dy2oGWuyRA6uK6j57PnRjJr5pza6dGk68tuv35KcdmsGJx7",
  "key48": "4eHivdzTCRef6tafwGoGVDVkBDbn33a3GQMEuMzPJLbrkqNkh3a3yxUXm4KDLJxiNZ9pq7BrWdvfgbrT4zA9UTuy"
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
