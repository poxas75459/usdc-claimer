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
    "tyvethCUmqJo21L6uWezkv29FqwX6nnYTdaFTErLxHnAENHzafQYNup4yZ6APMExbFPbrWh7uZYbNZuwrFpVxeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4toaZqWeNSHSeHB6KXJzuwoYQRRPT8YezaBoaMidPhtTurYbWQA4XfYrBUrnubs9QpqdurKBmHse4AGYpF4RVBef",
  "key1": "3M5emaNenXSSn61tadgnsng7pETLf4RcKoNJZRfVedMLYfQxULZjznhPLXT8BptSAXmxLY1bBiprTatBadW864xg",
  "key2": "UnaL2vj5S2JVAxtPMRALFktjUrq3fFGbyshqstXaynakXEPAfSq7U7MnTewYLTKKQQPrqsXXE6S8YpuxX8NFDhT",
  "key3": "3bXmGbLieoxYRCh3nXnH4SePqfbdV59VAApfdenXNCs5xEnjh7SiFKBaAGUweSQkjr4sBzTdeN1WjXwweauJV5eL",
  "key4": "5mCR9MrrRt3qSGQBeMY9REg35dUHTfTfpsTnyu8j4iL5Xdw73AHncxxiDMvWaGRovAL7j1cyh2CcTT7u2C2Z5wrb",
  "key5": "3XezqYvLZWkr2qRyYadYa814ViGWebdXpqZwFikqNzxA64NziN73W7RWNRkfQpLdp72wF77rfW1XKxPrMUPr54BC",
  "key6": "63xAMHB6DqCEGWDKRJqmQGt4XA4hm91eAamBXeuzmxXPiubJ2UfWDcXgsCfMVLuwXU5knZJHd8GFte5ZLTgGzCxp",
  "key7": "4NevJuAXgd3he2wPBSLwj9vLxiVNqcGsRobCK8YhRSZ3WdXSfn16D2ZFHtyHddxx6QT7fijTRtuzpvLkiC2h53v9",
  "key8": "53wuwvfWBMKACaS5foV4x12jQQGiYobmi8W5W7zDui6AKYxFah37HHiPDXPj58q2dcjVfTFPrNNEBGmezkoUK3fv",
  "key9": "4Us7z9itV3c5aPpYzDDDk2BqN1iQZjyYPWx981aTjHJggf9WFS8wGkfTh5QADwmsgYv6PH96Qba8EQcsGt7LgNjF",
  "key10": "63jf17jCpHFfEhqUwHMp9i8tbrDJ6Fus3xgv8g6vtNUJ1t2QNgjhUBatF31yZ8wEsVHxz3rkvL59wndnn8o5QMpU",
  "key11": "dd5qNBo8VfY19zhu9TnmS9Sq7BU8XzSizdmFvUzmJQJDNqi1uTojroQeqjvnbQ6J9RPeNmCuXZX9gd6xfLGFopx",
  "key12": "3Z9iqg4eT3b8FcpeJniUchqbrukYC4U59YL48CTECiNHNPP37UoiF2BmmFL95eX7gN5ydYFChaYi7KYj3R2WnaDC",
  "key13": "2kG1HWsgSdrSkVoxnuzhndmxxxMXunfAGeUAbKZRKDL1EayzHxp4NqkLWWVtFtQ16hoyDkFfyzxqHa3B4Y7gZQrR",
  "key14": "2pYwj6rw7Nt5FWRDmzR4L7UF7RUdtwvKdoVqjNqFePVreQFyZb7AmAAn64LUUUaMfUGaeXZr1XDUQ8HeqLAgZMqN",
  "key15": "5pNbEafg4hMTtxVPm2zxM9AeJPyksaNHWJ4FFp2UAVEgehzxjfJTHvxwn8NgFWLhq4yCk5nBYzHYZ1AfHP546s1r",
  "key16": "42RUCegLqiXsi1KPinti7Adt7WCEzV98hAj1KYFU9ffEV9F3ADLisc5r4pNjW2zoktZG9vVU2kyevxohyVvZDN8w",
  "key17": "3LZ5oXdhgEEHXMJNYWoRyfQW9g5L5dD5txgHfMuD7on33RTfRFM8RJyqVbb79eM11qSoDR3VovNEX4c6QikZ5BEc",
  "key18": "5MwxQgmdNVB3kghAhpgLDAdbb24UucU3h8ks9RKywZthCrZyv5kgSsvsSsSMR3CD3YpZj9QBq929qRjHw5ARj6kx",
  "key19": "4MXCmPHKBNtNK9wHP88ZNN2A4G7btTF4vBrdXkqscs2exaR5BEXxidprdAwf9JUzd81jQLW3JnCH4Jpnea69aDBA",
  "key20": "43AMG9UEjnP1pMAVm5zPXgQAbEFZrgZvLfYc2GCjbCkeuvaeQ6RtpB3ic3rYPw57tFjhmUWMk4N8thRkimyKynrd",
  "key21": "DWRDB8bxtAzzjbf6vL557yoiNTLw3yzq3W88e1gC981zYDh3FhpHbeJcwKVfvMXgNqxX8u2YZqABN1QE7hEAuaY",
  "key22": "2k8CyHzQDMXhW6v2EsQAeuRviWV4b2Q4J9w99TR5fnJw7A5kMmUHJcqWHtRwxuTZVK8cGCmpBNkpB19xeonASSaf",
  "key23": "2rLzJLWWgNmNGVbvrhQ8S865eXung5z7r8LHqVtz7iDRoqcKbNLEDrVVWrKtABZHJxk4QYP1aXnWECPhS3JGSwjk",
  "key24": "2HDzMTbjEYJLSw6S9YBAMUSsQVyWmBuXDn2sHemyq3shz3UXxmscxmZjuGrPMLqgeFPxFzh1bpYygzrM1HaXU8y6",
  "key25": "5f6j2sVs1TxbLNur9rpRTpUsVjruS38ZiqvhuRKs9mmdc8iBoD8QxvGveisR6Rtg4kihjbprnEPYRwavrCwkGdF9",
  "key26": "5Ha3o1XPxvQFvmpUHC7Cp9j6x6wHDYWyCemgdKz5PNgNffaDrxSk9unGBy1scZBMHpmzMYG5fVUcn3XF8H5sKVLL",
  "key27": "5YLmtYF7wNayXhAhW1L1VQ6boMeiVyuvr7Vo3RvreQuevLen9QCKxvKubo7nzFrtCzxaFmAMF7NBfQFfhAV1w3qa",
  "key28": "A4mhTR1d2RgxHptvPSdNvxdyoYZawsG4DUF7FrCoeXAJcm2Y6XVpVhHBtFfVQHDjMnsBCNL4ybE9cfsUXtadYax",
  "key29": "5Ap9YkvpLNg5trkkERNWuwBC88x5KnhUUTS286d8ezn9uSwAp3b6T2BT36nhHjVMmCXJv1NgwhLMccpHKJFxqwbQ",
  "key30": "5xoxzU8cjNptHFFot3AJJgFXq3xN6PjLHnUawx4L5GztPUenGH9PoyL2gj7bFFZioDQxEZSGpo9Cc4TH4T9jPYms",
  "key31": "23XkahsvrHcN5kH2nwRCuLBLsxfJjqFgzqLDBBMW1TswnULFg5S8HE443J1p6oCmFSYNtRn4E8HX4E4y1usGtNdf",
  "key32": "39DgaEmxH9G5NhUjoQSAkn5zKoYm76CNhTDvCXG39EtRatznssXBQVm1eZvTnjtSZQzw4FCt2phgr6jbL9QghZtD",
  "key33": "48Y7wEzfzTYQ4q759NcVxHkx8QaJ1JYvFcqoXYgy98VABpA7CxqNHCXBTtv85eYC3PSi71DKdC6PCoBSSR4bxsMa",
  "key34": "2BVUiQsKjmVnxSEwp2T35MQheXw99D1K1NQSMvKnzU5LFvAEJZ8g2seNFDf8FcH9SwmH81NBLGpqJnDntwvRdApS",
  "key35": "CHaQhK3ngbFua4ff1mSbZqTno3LPvR4FPYYaYRusNcD4P4mBW5Vh6Fuqaqnqocqy6W98FBhsyz89Xm9iUuUe8Ju",
  "key36": "44vbXRdVhTgzi3UT7LacKESSGuKC1v22fykmMFpiuyr5q7nJ3J6XsZEyP4nm9mm9v8dtQK8KnfJBN5z7HgHS1Bpj",
  "key37": "5xwpCYYzVC4er8d62ivB2Go8Z87LSV7ebiHuQZMw2NGMgdsB5r5j8Eqoc4YBsuWUVeTi4Rvubs5boQYVvSX4avRo",
  "key38": "3xuprfHSZeigtdjN8bnAB9295Fw72yo8MRMRZsSrgSW9eJma3fLchXBWodhNgmfybCkWTP2nHCK5YvUDuJ6aizf3",
  "key39": "4ZCARxX47UiVuFMsa4CZ4W5MFv9YzBbvhVapmUcYSvc4QVUTCq6LEbsQn5A8KErXsHGHA6GPfzaRc4uUrSQfd7rN",
  "key40": "3ASehaoQAvNw4VjLFF8c7wZb9GFaG2kMH4t8UHW2LWPz7ohnkfWM9e1ufRzLmxiwGsYiGhiQF1qdFNFmQsPbodEf",
  "key41": "wUDp7gsWuuWznUA37JqKFPywPR3Nhm91TeJHMwtoGQi2CEQ5xV5HaE8mZJ6ZCufLif4wNWwxpcu5i1LNfAJapZq"
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
