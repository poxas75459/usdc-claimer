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
    "3VoHYCkRKEYebPXgmbijXvC69MXry4ufDGV3hMdDk5x3WWekkYhQFMDmDUNpaEvdfqj4KijAQNsjxWQfKUQYeG9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6riFwfDrD6DW93WnurdMKKhMBdPPaVtbTSLwDCLfKofa1emsLwiy3DkHEnJ6KM9JPhsCRoqPTKMeneA2uBBQeo9",
  "key1": "2mEnrGKhVxpyyS1jMTajzqdjxXkNTZix7UmXxFXy9reMBM3JwSu4XLnRgANDL61Zfqs1cFyaTGayqPjZVoCzqVVE",
  "key2": "22hWXWZdDXzTq4vwk8y4EtiXfyFPqBbpSpUjki7jBR1C4AYHJT5yc8mexdqXCpV6UvmVv497AxGEssHb8F7baM3s",
  "key3": "A4gmF2ePoLpX8jRkZJVsEtd2JzQ13n5yykEVihCspBqRoAkkVY5pPR5Q8DZycuQrmNmbFBTsf1qzfhcHbswNhYT",
  "key4": "3iNcmGEmeePsDHd38VD438BoKqH7XwirnvzNma4yPCpGizwgj7WXPefavuB176W5745yGQEy1MBdpkv4dV7mHrHT",
  "key5": "3Jwnaa3MtN4mdj7DFkPg9NVN5SWuGwZgWZEJZ6vM8U9aoDQuwdjjrJm5wAXaEazeY2osXRFvfygW4f5H5w9jcmEh",
  "key6": "4BqTZt4YpciQkjMVKbiRgmyUf6ox5LAFUvaZhFJvVC7hqiV1qnewUhVn1jrCnegLzSp5nsev5LzfYVtAFByPVe6h",
  "key7": "57v1ejerft4dfJRzYBGHjepzsicj4BR1mPreNhSJ2geYTwsSWBp6FEQPaFvFd96fc7EGuqugq1EaqxykhLgNusp",
  "key8": "342XCHX9apnXLPbSJa9JthRVRyPiS3UJQ4GkrAaZ5jTyAHDFjJfSxQpG57cMSjJZKR2rdYCJrzy9vp2jdZr9v6i7",
  "key9": "2X9DstG2NjyFHWnczY75UKKvawytUJ9vVBvrehHkDbstzohgoW3rczqjAffyYEWBBxpENDzSM66tBaZtnTvejUo9",
  "key10": "5NYnQK4Q26ZCpafN4nFdR4bSLF8sN55ygbeQTpyEzbNjWicW4ERRcrfxgeuQbk9wtcsTLT9jQrgSGPwDgJ76j6LP",
  "key11": "45Q5vUp6HLLdzkuh1ftvZUAdQ1dPRd6pxe5nh8Ayomn2NekZQveRwrq93ccPHN3VTbXurY5jRTuWTxDBnKcbf9T5",
  "key12": "dXB5P5kN9bSSYaBLMCPY4iVvZkuw756nkpYD3WSWkZheSaayPbgrBWGSB3knomU479ggeqxRJUgvLYsTF3oDqsn",
  "key13": "271E5PFXoAYquVx4i7uA1RX517NV7F8oJ9PzhahALZg4qCBvtxFjCYsCC4PE7s842evNXeUD5mjAHBy1HWAZ4qpK",
  "key14": "59SeRhcF5Pzf3ErykwQJ4icAxJBL9hiMA3HD6tKKBBNCkg5QkCkpH15C16AVdHB1yK5Lu6tjkAnpbxgjWWKgZvfd",
  "key15": "4a1xR7iaa7oBSE3yrB95YNZRawgYKcfCcsWVMWrKmywcs7EcKdBttWoc2LoDQgURLtbitj8WZP6GVLyEt5FnLhbc",
  "key16": "4wnu7ooZTg75hmKdBcFSdX18rT2rzdWbnU5aML3LXNByfgHM7zPHxBGDNigbu6pMfDHxDh5sjHjsMrTesAMkGB9U",
  "key17": "2qHTjt6BhBNXsRMfc4yZNRP6vqDXKrRZeLhYZNuwPDmTtkD1PZ2e9FYG3NMfXcBNzRv93ocnwaf1Gu4AYGgHDkEf",
  "key18": "25dQaK5dh1k5PgzvcSQETKUzxWxXSgB3vw2EvGdVdRsWbNofH1sQjLNBqYeCJoiL6jKMUrCAa3VWEXxwaJJB18e3",
  "key19": "2gHFhFSrNmuSDqpd8RjJeSrCLeSxRoKWyQ5x6BCHhp2CtiHEKZjWH31KofapfY6K8jJKfEfHCaCpo3jpcRrqWni1",
  "key20": "EJrVCmjKLNpABXV1P58sq5KDuZw8zgoUfyyNuuMYbY8wZ8rgH9M4wCsPbMjs6TAZorCgdRT39fcFgB4ESFu2usf",
  "key21": "66iA9Uvi4RpcZZW8tFw5111gXkZ9MYziBQX8CSN6c5NrWso9s1V55jemUxbsAvaidZSnuPRXrGGzyLFGinemwWrK",
  "key22": "3VpKnnmDt9f1cDKE8FjKfHo3iGMwTkkYMqMd2TY8GAnnfbEc529hH1Hw8Ej8skAYfsjXGNGmTuKN3as2ieFdzunK",
  "key23": "63BWUdQf58Y5f4Mxwx6zdUuPa99MQNF7rm9qdxgW4ndWtZ1egP29ee3QZDE388grhqRvFor8Ws2f1NaQqWTedRTP",
  "key24": "25DcgA8HMaPapjJ2JZoYtcxCJn2cL9gngHfQmuJxd55UHFDqLZ7koRShZbTnsnLuXNuJwuZJ6zJSticTskNBhaVH",
  "key25": "5nGWU8F9DobnwLpzDcT9h5UUuy3hSWXudpZQD1CD1GxszqkAmypSfbHHqgK5FZRgj172hhFnRbx6EcMXNvCGUZB",
  "key26": "26wyQULRefV4NfKUnMPvirDev1huBAwi5XtHewPWEA2ndwCmUovtCByscAqeA4afjXqWUoKg411tVxCWoKL2GhB3",
  "key27": "2nHypiW8cza4q37kmyEVqnvpSe86GmpG9QhQpsSzsorU2qpbKB466KHTzj279YBSHzLbYRN3RzLVyY1T2cdfZhYG",
  "key28": "2eNNum7JDcGw9XNX1sDPemi7kDckb8tbCUoWgULmfLGZfnhk6hqCjBWH549s1F3PZ4YpdxAC1pDfdtQMjoBTnWgR",
  "key29": "59FPJgnJpfsyqP4wBQ8m5up9PjLT6ahLmWN3heqpdVvztSoMSuBfxAg9h7qYMFaNXu9y3DuLVmL27HYswxfXNyXH",
  "key30": "5RvJ3rerSe9JZjwbFpQHPVi4fibsZeBqEJkbSrJ33TCwMKaeuuWTL56Qy4m2erEkfHDSmvvuC8j18pnu24xuFQcW",
  "key31": "5m7KGk2y96yQzjeRpJDWzBy1ZSMb7qsvABkryuu9aCUKqHfpcW4uiuNuvmzi783DJacsphKpPcL2WoMEP9VQNC3h",
  "key32": "2DJR4EMyB81PJRC2ojMXB1CTxYGGmHoe9EZRWoNzsweMiNE11ByxdUYfKkjbYCp41pm9mS3aqLbSb4BT1UbEMEFE"
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
