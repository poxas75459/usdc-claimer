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
    "5MW3pGsukB9YKhaCza1YDxi2gTJdMDMCY2Twe6n7wS5NHaTUVMAsrYbFpcq1k8iHsbn7gw6M6nVzye9iycHZXvGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PhDsh9Tv3ZnvSKN7q28URgkCHX3L86if1vNzE8ZnP66dHCJQbWYrZjQ5vRHfh62PUXznZRhfcQVzHKyBfE7AZmR",
  "key1": "4pm2tpo2w2DJwrqD3ySrm5pfrwW2CFhwATLVbP4H3rA53MYzeGCEREzG2a5ib24X7TU6iFWT7jpk5PjgnzheCBSc",
  "key2": "5drP2sq8m3QHivxJu7DzffFf6cxm9mFo3eKTsnjf4A2b9AXSeGYabbV4VE3uXkr7bUZuAjPfzFQHWm2PVxNtAmXg",
  "key3": "2zAhr7X18H5fqK9VNoxCmaJ4D49RYDeUnCQkoa1GRbyYBRrE9BhgZMzGs8eAxb4Mapua7fZwWrXmmkoGoXg5qC1X",
  "key4": "5sDDL7ZDN5mU4bQQBnrPEGCDCax3eS2Xj141ZDexgbUC5YAcL2ATJqvzk5wViWotkSCRMRFLA1GbxEALjgRE6Mqw",
  "key5": "2W6REG2tWJDykXHFCnEVnaiDECMYMw5MMx7GxqxVuDimUA1baGUJ74AMPLCkPx1GSDkuSYFBGp5FcSughDV17Hw8",
  "key6": "4sbDy9z7jCZ1quUMZVSyWBByh1PFsZpwGvch2fjpqB1AHodCHn5bw3PGD4SmdYU9Fsp263crMHP69ArxYMZ33eZv",
  "key7": "3yPqxkSJ8TjuNGfVS2y6c57JJ359W2jEzgR199EQ3wtP8LajuZLaT1mvtCEEcNki5eEAcMBSWRq5WnKWsN4yrLAG",
  "key8": "vgxRzw3nJa5m1Ants4sf5NSFXHGjprvLnvjhJ6818AcX44wCgDBvoLverQx3Kb16MhhfEpLBt4qtbdnQr9MoTNy",
  "key9": "2KrEbLNEVp6cFRN4kgLqQGsixpCfhiZ2X7QHKU77bEaU9x9GLMNTMQgfUqjqvLTC9pXkMDxZES2YuGUJUaBmbXao",
  "key10": "5qZYjvj1zbPvmS7EWSzTPV8dXbLDF6np9Nyp2Zoa3gA8UzKapmW4rUcsUEPCennAhKcGR1SmP8QBddUYoGJQV536",
  "key11": "5JeMvihRiot819UdcBLNw7c1tHmgztpuMYYjShBxURWksXVPsZiVCaSckmYiUDHYyJowKcjhgynqLaauHMYPursS",
  "key12": "4iVzV2xMLchMhpuYEyCRuFB3HAJ4Pb5rvb1cNZhZAc9yQ3Gtqi4kvGteXnEEZPjyFx7yZMnoj9BXMnTQMLwDsEM2",
  "key13": "63shru37gPapWUi5xXLdbsM6P5j5YJXzRdxfyCYuuPmk3SznTeLttFjee9pqGEMs3sEa1SMQG1oJcUC3WGm8yUUc",
  "key14": "3FU6DPktxwLy35dtNVQLsyJW55QRt6MAFgw3j4Z97cDKjQJ2m4KWDs8TuYExLZGG33ovVMc4QAfPU5AAANwcSyRr",
  "key15": "3yXHtyj882Df937DtHHcfvN37b2ZxKRM94Q7zbHaYgpWWSmCstveYGyxN4RKuDfeWvqnjdPi6LKSbqhJTTZgovSg",
  "key16": "5PoYLVxn5C1NMiq3uAqNhSZG4q6gEMKyZ2joRm36xJp3JygQx7scDdLiipGVVaz5nCDWZ9Dp7KvKPbbmfEoGhDMN",
  "key17": "3wsgoqrYzfDDtnqNxMgFfXP97XLaqSzxEsztZYmJ2AvWUpQts5X5ben5wLDXVfW2mpXcFYS8kDkaHRUzNagA1ECa",
  "key18": "5xErw2Bb8DH8VtfNc1KWdpMzMXzRYosS4MFfJPFgTaTLTa7UVeuhf1w5nUK44RBuTYSXVHq9GyWvkg2jqbk5CeKs",
  "key19": "2ywyaX2E7aJHuWjjv53h2rHFEf5FyRDN6i32CYNUbv3PAyebjT4gcPD32xzCEZV5aCEQmpS5mruKkHEuCCjLe4ef",
  "key20": "5v2XEWuqWy9pYotC4vbA4rxsff2Qt1dtszNM6sa4KgKXyUbykACfAwgtAyGmhdoCBGyLah5gGLysEJFMY6yT6GHX",
  "key21": "Z3ymBERFnnA4ekymbxDavqxdsLc65PAebty67HN2VGwqgKKGARdiWMXwynC3DFDemuZTfs3qd598Gv4DR4DWshy",
  "key22": "4HABxFXsiEuBYhw71w1xetzmtQgrQ2GtHY5rawUPtdoM2PtzgpAjwA14Nnek61pmgcdxGVDXrdabEuR3pKGUt8Dx",
  "key23": "5iZokwRTt8X1KxTPmgBhf2toG2U4xYDzZ1m9vfdLAyjrz7KPoSjixdidWnEQa6QaX88YSWPm6ZjHfqxAs2EHFjEr",
  "key24": "23b3KPdLaqcFJX3wuYwHRNAUkzLQa1bKgv7oALbj6bxyPhxeFHcWz6vRXM7Ap4CvMK8p4PRkz8AKq4qiP6LFwsbc",
  "key25": "2wNAdJwHdxn8qb1K2dZdgFkNoLCrrpACYyCATjrAWSJbzHkC2HL2nXHURDhrr4JVE7aQc4RBrKpH9WAHadBKNqJZ",
  "key26": "59EdtxPEiAaj1AJCxVgo5m2Yq2GYRrFTCEqegyZBh5hiQBQTWbRoSbqaQMai6EddTk9Seadbgk5ZycaRsfCfmwuy",
  "key27": "4YZcBVhHvaFST5dNbmKss8y3M21ab3DwFjJze8Y8xAf93mWZFdezNNFwGaH5UoHF4VLjJAQTSsnGwRNQjeESQ3rG",
  "key28": "5G52Yg6u6nCLxuobGfN3dYa8L8nkDCcWonz2vY8ztQuHP8yoevkefWoMt9qhF6Y3upWNjbnpKqnYJdZQPkszysAa",
  "key29": "3t9MWUTchgwXhE1Pb28Qaa74aeMyjy7yurNJT82w5BeWggg7u3HTRC2dyHckQPyDGMENaxmh3eCzDJkch5bn13Zk",
  "key30": "3Mz6sJPhxnzCmCCU2YtRPDDweuobrY8Ao8frMBHDpokXErcggSPtAw85bw659abxRyXtMpBXU11cXn7VxiWGBfBB",
  "key31": "5ahsDH5edwUJZ3GjgPm1F872zW5s6drSmS846Dsjg3SX95pnXxcvX1ACXj5UtyKfGox5vFPG5pMZQQkkmQ3Fwvja",
  "key32": "3BmDwD2YhgUjwbLMTkF3EQDJ3ZMa8bsAeRwD3ykxMwfgvTS6krhVmUDP8DYHRaEwkiBwcvHeYMv6R2JRE9HVj655",
  "key33": "4f3eayRh4mHTMWjaiweXBAFUX81v1txSV4fJTPpmSrTKHDsNUoynFimLhW1bLBWXyZUHcEKok9THpY5ZuSWvrvhC",
  "key34": "4qkuDGSGqmyjPS7MhtB4fvhEE7P2Qk3oXA7GmsQp3n1ApAuTVWBEQGc7AJMvwdcVQZcS7cGHQ7drGRRnw8muL5CC",
  "key35": "2VFKPQfT5mAD2xffYyQ8H55AcybqQ7aLGsVbL1W22AewsPPTtz8NzJZNSHfUK86DMDCX47Rot3dSxusW3zQyEZnC",
  "key36": "4Y7BfDUMrGGjUGx41Rvz4y9pLZGYVkYvjUyzmv5rg3B8TuFVX1EW4S7ShAL9B9XLDCAtEnZcs58Fz64S6z6MrZYE",
  "key37": "59eZQSJMH4ij9NXXNdBPkaMBFmdvVTCbFCsn26KgmWwsY5UkE5m9cPBJVFrKodZEyHJKeUEp6KJRQUZ92aCF6HkS",
  "key38": "H964pemPrqzrfjV1C2nH49CnbftY2CyN1NNHx9yQ3tkQuNbkZobgPb4bSkScLnLCKZCaPrxDSCKQvVAug2SmUuL",
  "key39": "h3mLSWSZAAUVapnQV813Nsvh95jeDFdZFAfMrxMppnnUZJFVtkFz3Xkm5BjSHhuEKWq6xznwFxvNBLFdtw6Prda",
  "key40": "4FkVQzTBChXRcpwJTMkmer5BRpBJQ2QgdMG3nhaceEkCxovUdZx2BmzijUGFNBwR1MLujBnm8fDdDXv9ktFQeErA",
  "key41": "45woCfraNghKXS9gb89j634n93CWUEpcyt1qspRmct3TRgSEvByp8gyoppYTmUxgVNYFDUn1CcTcaqysypwHHGbS",
  "key42": "TRWpRgmMQn1hKE7air3jMLVF7Kz7tUwX1mutAscsYKH1UvpzTbYeP48P4cQyz3oYtuj6J8WcPXk3UsBQ3iEm7Zm",
  "key43": "3U3NsK4kjXXzZyDUSXjuzfZ8ne21YQmrgxpAzUULpBWHrCmstzSVcTtnFR63Bjzx5ywBNXCuAA92kYTnznfs5XJw",
  "key44": "2sLyZXPmMCbgrTwN6scKPWaJ3Fik3fLYh8YVTC1rvkod3NprksbBLEA61UX43S8kTVxABDtYEw32Kbkd5eK3Km3W",
  "key45": "2mvcW49qyvjReEDvL8tPSX4ooh6mqSyLLk3QYhoFqHKaNkvRcmFQSSeLswx23Qj4woXZZxdwLa8R5mdt4yZPzHzK",
  "key46": "2X5sCfYSeMS2GHejYhwMGEb6VFEg1PJLUeeugNV4qDHD36K9Bcx9NnwLCBXPHeRsM5BEnqtrjVkfW3iuCKjmGDYd",
  "key47": "5WSzMtwegZwDK1STyrF9jozzFdotrMzhjXTapBgn3qPhfftryweKHGtgHLqNCvkiVndt8A4HtRF5XWvW8YgAc6en",
  "key48": "44Kr6YTPStB4zv49WLfdmuRshdTHmdXvXMT9uPpApJnNp8dTC4xpPnnXUkmpaTqmgyPbAyfUvnb8N76LAazyxjtw"
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
