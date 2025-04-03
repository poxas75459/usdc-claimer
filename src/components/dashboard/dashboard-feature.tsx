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
    "66FV4RX15GuBqhTssRhiNL6wp2xi9yWbqWBusSh1gu5RfYriR7SJHP3Wckomwiqh4e4ePuGxn4oPVCdst19DKJUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AvieF9PuDecAgr7Ca56qeD4wF69Q4jfpg5Hi5BseExK4cS97pTXjniaYjFPKEBq5xWeURQuX62Y8gPqDBciA3r",
  "key1": "4VGbpMsZQbxYptDpAxyr15xBfM9srPWP9gtyG4jRvtew4KHK1vdmz36j4Pe5tXgXCXtx5piq3nQz1tUEs75jA19f",
  "key2": "5hrjWLAsGcE2gJrY6dYhPEUe6URch7SqT3NqKaYQu1zWL8Qf9SBQQdWNt3ZWUxEprr8oqJ1svpB6zQLgXGv5DRqv",
  "key3": "29BBZGFToy2oLAL58GECvoNEjRHmxTc753PjXuMRWYJESxgUtRW8JQG6h29ZKSNPeZ8AwME4TjEsnjb4rrYERNd2",
  "key4": "5tnPzUZHdkLxkJKYc3ahk9JFGtpKVyRBiYf6hECq2YfqQthPjsawQxSHNedi9H6dBnHhpyhNZfDU4FR4MEiXsrRS",
  "key5": "2mTGUv81gqqLswwaaqCnm4Lm7agWLjPJvTLAyWNdHWfp5WtYU1quAQjGLa1PVDc922kjEPmCLMeuH3FsDDQHVBCJ",
  "key6": "3wTYtMfCdtSpXtBt9ezfqBXNaBwaQW7Wvfgmak4dXU59EWpwaJZR97wAFYVV3J7G7rCu9ZEdaQs9ZU7XCcbbYepz",
  "key7": "81YHpH6zodjDzWtBr3hWBShra95vaepgZSu1kkXGd5VoG3Adt1PeVoz2Gt64rojwfCotSP4zTgo2Ho8Wm3FoFwq",
  "key8": "26quruw9io5UiqV7cHpzEud7HKnedcqSpyKJCEZc6HYnRszdE7kouAWPXp9Y293pTJzFqYiBedAZPQ1LK49uG9DH",
  "key9": "Ry8rqGEhb61KrkHfxew33fNSS6HSP6cq5KZebYXTV2YCAis7d6U5AdoQ4Ynwf1HBmoVBXBZbLYsZgbobVjMUQaV",
  "key10": "2yUSs7rYVsJautydzYLGmQNXLyDbaz5sYMDN9hCviw6EDyj4vfeHCUavQ1bEzsAwLWUP39GWzTL2z55bJ7pfVdWd",
  "key11": "3H1BQXSPXQzT3XA8NuukxnGULU6NK9dXq9o27UhEoRKqQPD5St2ZK8JFuKd2T8zcezbUJxzX8DJca787PhUXXM4P",
  "key12": "3DfWNjEVKH2ccDX5ttiytuUVFfCZxk5DBCNAVacrLAFvvPMKjntxPswnDiY8HuVW19tzJfyLWjgvY3rcpMyxKkBi",
  "key13": "3w2KDwZHHkCCDQ8y5QMTezh49eP61sqAaZmTzDeewmvqMv8BAwJRYrBT1wzAZY17uCAfeCXLt9G7akmMss5tSo4q",
  "key14": "4msVYortTcvatJ37meYpKHYnmHVTE2v1ccsa1i79hWpgEuJuBAefXpdS6EBmruc4Nz6W39f4WsBtwAmhigyQQB5r",
  "key15": "rzEFNZWwPWbHLN2i17jzinabH3xW2gB2KpV7bZPZPUhxxj8s4VVi1FZsy1tzg4BrppvDMbFjhUEEvrFyicLCPEA",
  "key16": "3pGpEGVr5RmR7FkFHvimQpzLfnk676Hw5Z9645dDHxVx9s2YaRwpWsGRTjhcxdAFnguTXUHvsZbhRb7WcVZsnubX",
  "key17": "4LVywMv9WXmgoPC2ZN3e3Ur6KooU1y5dUVzq3XQ5JzCHcMsPM9TmkLeUfjkXnDTZHgGigqrCR8WgpqkYL35rgMt3",
  "key18": "5U6WrNFphSGHgk6MiTTgA6w7o3XurNWdujofEPhTNGVU7UEd1fKNjqGLQfKUcykd9GX2BJYGnZWJsSxr5PaZ5aU3",
  "key19": "2y8fWp3eFHRyE3dXgqm2eRLTwZcKmQrWT1LTqmn4puY8RCDF5rFUD6uvQAMnGZBmuJju7u1UCjdVBEGPXB89wG6",
  "key20": "t9betsSdzSMkM3SfSipTzg7zaoqS4N4kT7NWFy2DcSfdA3cMg8sLx5sXddyh8E6e7WfpDFSNaWZPSpq3AZCFEVf",
  "key21": "Se6inK5ooS6ge1r7Lg9w6zoxSYx3noczNdHaWXufs5D6dHRzEvbc6SNoawK4jJxa8nDLErkAknA2S6fPB6AqKsL",
  "key22": "4vgSfbL9S2piqb2usyPvbK6Ryxrs1dyonXYNSkoQfhmDdRsqQ8BedJm2b48rvCuD6SpFV8Httx34iFP5YWtCbcqq",
  "key23": "3J8Jem5fzvrJU2qJX2xbo3hyF3jemx6rCMm6SfZLNLwzndVn3gNLbL12aPPBSqfwCzwErqiKb2mNUBxkBfNB9Nxr",
  "key24": "FnoAzUVWeP47EpqhZ8zQ6GryovfAV9rYLDq8Ft7G99AhPqMKCbY7EFu5a2cJNz6qpAFGJ4HreudEfam86WPLpjj",
  "key25": "5bmJDbTjS9zxq9ocG3kfaTLYsHazJqhr1dtr7mYJHaqZ1CDrAFVNq3hAim1LfyuzacGG9ATYYQe6rbSEFP7TRXks",
  "key26": "5nRSUaSWW5SVK7PJxceNbSQH4bnb99EaibtE5HRY74Kke7CnfrdvYpc9d1FUUVWY7DsEzJcaTsvUJ5EJNsfALjYG",
  "key27": "2aqByTmp57xF2cCAiiGPxjPSktuWzXtcbJjLWhGBD1AM9JaMuwbJcKH8E4cgNyba9HPe8osS2FWguDMzjAs6hMXb",
  "key28": "3BBaiFdqGRyDHarHTtiRf5nAtqvB5qhuWBdBDUgRTkaVhxfNJTp72p63PRraqx1WMdKGW86LwpNJqQe7bAz1RwMG",
  "key29": "3X2u4eiJd5LZJMfHGeAjgE8W5W65xnmiJaAAGKXbZAZkZqzaRvAUt1r1fwMWB3PvTddqjCKz7etruPxTr5c4F1sV",
  "key30": "66bFLmBuyydrMfVVwYQrJuSrCY5unKsNFDZSwztqLu8T7hJq38Q93ANnjF4ySKJkigfshWwD2CzbmiauUd85YqbS",
  "key31": "1cRPiCePvLT8amwCqiEeLBXLJZBJMFQNfyuchXrac6uftQSd5Yodu2gPKfcwRf4wcd3Yqe6H9hpoveHfy4gDA98",
  "key32": "3YmtazDUy4VpPdQrtq1CETGxCDZXoZtkoZvDVhr29MTDWLpWoUmDHpC1gN1QPdhMxKJ1s6eU9nMSBhUXBEEgDRxe",
  "key33": "5do8Z8w5Mjgy5j68Nx3764iEBCoGi32UhrW1w2xEzoNWXSZk2hFXxdreY4pYrNKy8Sdd2EtyAW8XcnykKh6NEaa3",
  "key34": "5UMC9E6aJibnynU9nD1d6o55Ho4zbL4iUQSZGEprZjrEDP2ehx56nFmkAvsFhAKx1z97r81UD2YqakXbT6tzZb2Q",
  "key35": "5L9ZpahY5gUeotmsBTRjhVnh81pafqvYz26npv6vmwsoNWwdYB1U1yzK4PHek6T44XPgkEVshPsN85qj437Lnp31",
  "key36": "4BbH4VEjJZUEzLpnEmxXcL6ZpLDMGWjZwCQLmDrTeNP4A8sKyjmbSZpsfXQHBk8ESf7kwoYw2PLPMm9mt9BZeLwm",
  "key37": "5m85xCdcMbfxtK8uFW87PF2ejrgbK7tDWsAZkfdDWLmPZ8A2pZamGw14zuEseoMgVCpWoxXTHc97Ty7GMsuXmmeS"
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
