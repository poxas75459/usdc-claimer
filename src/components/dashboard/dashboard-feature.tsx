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
    "3BBHD3g6RZvRKWnMD2RcDcSXAYG2CjbML9UpNjgVLq8WBDMddduskn567NjTWdro13bmZf5vxqGpRSDGbivy2GHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oC2VBg7R2Etuqn4MPQ5NbBuRSHYoiajzJhqq2tj8PGYnQ41cP7TLJ5YgNgoWeg2Vmsoi1wWAvyBpp1pmfouZJAf",
  "key1": "65tPxQYA1RtCjHao2uJV3ATtrqnuerN3rtrLxYxVK1MzxQZhCBxFBU1DthFvc4C62qaP2iU2QtZZtohKG65TLDDx",
  "key2": "67DPgAuRh8hMZwSkxV6vH13Pabbi6M3xbK8DLjUbT8fC3pdxo175rF8K2zdCsgUWwW6nFrC9Ssa6hea1LUtzuMWQ",
  "key3": "5MX9vM4HScgQhj7DxnfVaFhFwE4KcZdPrmEmFP5CURzcE6vurxr5n9KjH8z4tAoFYyTXN832TdRFkv2iehjJrWAR",
  "key4": "opiczjee3QVtDqBgSEgbDvQdTi8JFTnMooEZEA7hTcd8sspqoXYYhRwxxPY1dxXMJnpD1BKgdQDRsrohNQDCvk9",
  "key5": "2dnJYxgbwczkVSgb2F5fi1TGrY4jQUL6jRfCrR19bemdULPLhPxAm6SeprcvjqgVeyFCEMQpMjbpFdejFpaVsngE",
  "key6": "4mq8jUpcmvF7gUPF4SfMSe3KnKuehm6cQ9NUYJ98mp36xuu2j48gAug1h8Jg4pD49tHFUG63sUySkQzCSJrGsPQY",
  "key7": "5QgCrtFy4sY1hSYcatVjgNMG8ChJrGgjkssoJh8XPq1KXtmXXmr69b5wZxPjgv9zP3yzgWdRs5Z7mdCjwrNnseun",
  "key8": "76BZi4rYWUDoXtheZfjSYG2uqzASigg5PAx4MHEXRApb5oUsbeirGD37oDxBYGvATCDPKpTVkyY7YBLifKkrcBB",
  "key9": "3qVbWiEUAodXsMeRTcNTFoj8TqbeEpTG9vnyYp1rZTAaR2KPBuBf2iHnxPmUjHffJMMgCMNX7bapAZvvcBbTgJdF",
  "key10": "vQey6rxmiGWRWuuKs7dMt8F1mQ3woHJ9HhfFP1VgW4sJHpza2oiL1AVYvS7WN3dt4yUxVAhZkSLK8dm4D3qwz7J",
  "key11": "53YVM2U6DmPXHvu4GxkvNr6hXEqKrCFY2FDYjH5EujKAm4ZWeoyBcuW71xnS5qUxggh71KMJVkjdywTP1hqhHa1X",
  "key12": "2qNpgmdXF2EDUjSeR9hSCxaJyHzcR7iECwmPLtJLQ2F7dv95LqxCneMdhgEZepM5pyiuZEYZDUKKijrfxU9TKoEW",
  "key13": "4o1r2FNc3px7wR1MfydF3vRAVVmoB8NRtmwnCmfff4AEpv3VvVx63mYuqburARLmsUZcSuzdzcx6g2JGZCi5RwBv",
  "key14": "5LCnAd6rQfzvfpifPqW4ZQQ6u4cCS75Cwkb7XmgyL2U4cHpbmCuWH7EN8qHVaQs8w9sstPzrjGDVxio1oTzuBX1r",
  "key15": "4uu17mU6xNTM6GmvjWeerCJsBv6TeMvfpZr48Tez14vnEb8s1zr6aHaF52UhhK6MANFvZhjkgfPEN12LBLkZzyYe",
  "key16": "4zAXF4a5B8vbdsZieBahkhVLf1f36VRMeFzRCd2edNZ9KgwoVWarUiqrjtpJex6tYxCjcirVxM24MkP5VxgXc9We",
  "key17": "27PxCMPpQTgqFYGCXgbo7hGYbf8GaRLDSMpY6uEApPhMgqhLgNJUxTHms8nLiSYutD7zGmj1VVobjjjqcMfG5fFh",
  "key18": "5HgwBjo6YTDDtrgtv2b8M9ddJLreoWmSfMYuxMTQ7GxeqRfrLkYD6Zg4mFWbq6bDxQHyTPAMgxQQssn23jsT5qK9",
  "key19": "41q2xQwQJrSkbzvwX7KaqTUMYW27YGa4qmDc4zFTkmDg9mJjYCFYixxpuz3GgEEu5y5nengyCBnwrZ6wnNAhjDcP",
  "key20": "2ciuvw7ptuwo4Vykyk9WVeNCVgbyVKqeig5AZtP4HyexXXCoDy6Dx8bgviG8e7NBXCz3KG81kwyQYQ5B1ShiqEY9",
  "key21": "54j1RWp6FbBk3jBcUiXM293mB1otCj2WHPTfFeu8ib4JJ7DptJgwnEEfEFySwWHjGoxHqraARHUCkcXAsw3N1NYa",
  "key22": "4MH5Au5KWieJAKe7LRcCkc3b3c3gpVsw2FFr4sWyPpvrMTEMCP7aqQhcLs6otHLnTzFHtWR8TPuRSZxGGZcmbMMc",
  "key23": "2oGokV74WfawzbRve9czmVNh371tF7ivZ4SVmudD2GvPbn9chkPJhu7GoPA2v5z95QXwP4717xr2i6YDJeM2GxAw",
  "key24": "2VQV1W7ng7YSe2MtpBhCz4roewmuHi7E1HGVdo3qE4JuvhFCcYxaUCHywJVHSQVxh1Rn94vsEBLK1xfm6y2ce562",
  "key25": "W3caUTaam9xFDgDw3VVyrDsVsEC1TWogyA7AXNrRPPUgbfjK42nGG8vQVLsUpSkP7zG74vF5MahR4fk8BtQZ3H6",
  "key26": "2un8exVeWas2DHMbJDBhL6hQzsnm74Qx9YKdvj44ZNUEN4vs5i5UzJWWXaosxfeEf6ZRSBf87KGKfVmWLynrXheS",
  "key27": "2e3AP1w73rDLySFtimHZLuYXDfmeFesPhJ91VirFjtdDiQKUVkKkLv8hzNqSiX1KtrjsMLQbkhJH75a6hP7D1QNo",
  "key28": "2pco8Qjh1S73DskV3N8LyeUs1Rm5yHwC5Gpod1mnqm5mLFYNsH4q7Youa1Dk1MH6rziYNiLiSLmgXU3P8QikA8n5",
  "key29": "575GAnLLqfGrZW5nEfzpTrUrkHNkprvaBdZu3UV5U6CGsnE3ARS9nwYy1CC7LDVz5hxzXpiEg7SS3CbqvuG9SvHD",
  "key30": "5GChLvHjKjsrK977LRw2jcSzVJRp5mf5UyuJU7x2mRCKwUa1wXUwf2kaTT2pABPyP2fRc1ZLqPE3wZCeK5xpUveT",
  "key31": "5JL9yGYFffDr4gH7ZspVDt8nTgomNKwmfgK1V915QkycXqd7nNPRo9rCiFK8YGJ5RLmtLVjP5tvFzLVBEhjcVhac",
  "key32": "4nnVnHSzgx5t4qXn2NSnDtGiZLsCz9Tf5352b82G841KDDVtrHsuh4gkPcnjgSa7wVteP8GFBVBE7veX8JuZgnAu",
  "key33": "263871gihegxJt69HtpgoezxWE2hFGWB8bjjdpdpGkdXGQELoNx6Do7FGUxU1sMvhfCGFMUPMcF6x7PHzxXjWBUx",
  "key34": "3P8DE2ujk3cWKv5cKXrnAczCbTufvUywVnmurdtJkqcSTq2S9ZJUPoUR8S3cptespALtfr3CmrJSJsi2b7h3MUqc",
  "key35": "4ij8xxDDusMboaEyaskaEW2wmWTzZrK65LfjqyCkSJ5dk1w29uYpasKUvXzs4dCMrDTVHvVGnawjjTRow9ywrpt3",
  "key36": "35UAR519xxW6Q2CH6uynYTSyMGNyjrKEtJbxtQMhQ9i145AKvNjD1SkX7rR6DBaotFAC56QHnzdQXNBB3oaoeVGE"
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
