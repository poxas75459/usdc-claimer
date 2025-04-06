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
    "3eVNENJFhAgsmUqwK2k9SCFARMHxug87q5FHmTpJj9G9Nuf3pPjSVU12duLVHetHdBSja6VHiGK5mtVq476iPgqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHB1cULHKM6Pv7x8fUs1hkLCBbqyWV4XeVZog3J3r1zUC84JFqHRKe6WCyC5wkBJCdju64aRHFdLnZf3QyaRHv2",
  "key1": "52HnmdFJMENbXwKnM8KBiCDTkuiMxwTHztrjjbcasfmu24RNUGUDm51P4T74MCsxTPXZUttNGE7Rgb57NiweaiKN",
  "key2": "foJVRwBHfR5Zbch4hudV9ympynAX3wCGvEfh2JNSSXiWXSwrTWaV3xtn2i3qGpJbnEWNFXSTxZXW7uZ2QSMuDeG",
  "key3": "4LwBTyZAGQWnvS8rSGxy9a4JMJAyAtFG9HSA4q4KDvpW25XXULqt9nLFgjn99HrCR1SB1qqCz2EXPCWnZrh4qV9A",
  "key4": "5kp9xkwFkULz9vXLM7ZuvNfMnwehbPbJLuxAhUhnKyJ9o3P3HwtkGCrtvA96tj4gLaod98Ej11dPtDRbdrjT5enR",
  "key5": "2NPWgemsT9MisMmHWB41qgTXnSzKUekkdbqGE7544Jbd23LrJBYSm6ug62WJQzFYmyvKf11bFoM9NMyg23ictRfq",
  "key6": "2cTToa5Z6EbgPXQyYCECdR9bWaMoeRR1TmjWwwS3kAGn59dkYMUr7DCJEbYbDHAv4bdAyLbnX6AQqH5Mz2Ks9o1w",
  "key7": "426F2vBssbvQ6iRBz7EhT6FBGNhKT2Rc8GCmYrxxTgfXYsP13zkfsQJjnm41XqZWPuXLYsPRaRNGicAj1uBFEPKP",
  "key8": "2tFDDQ7vCR6DT9iHnwxRBcT4CFYNuNsrxpDvmjjfnQhcd9uji66pWmiDJxPNsbYeGHjTDbAr8JAAHzDSWzea8kRC",
  "key9": "4Da5semigjtxExJ4oNzJuDDawNacEKJAKE5NUnBL1MzZjmPJvFzDDSXw93qxNT7mS1CZWmbiuWPXzRnafaP5BvaY",
  "key10": "34jJ8DQ6An3raXQ2PU3FmhUrNJFzgD36dRLGhK1tmAVMFh6aW4JtRqeWEQhmADjwhPUAdANkc2sjegRz4NNBhLAm",
  "key11": "2hF9S4GurBa7vWdf5L1exfukM9zwEp5ESVJqkbSUusQpuRLj3E3d7ALkT6HkDWoeyHTAhweFWLZcnav9icrmedcr",
  "key12": "5h3bjkccyp3XLBX32ToqiXa2J9hozGeoE4zjKtXCfMwL5juytXvL8w3WXo2BwEPfjkgWvUSrWw8kpRSctTwcY1Ln",
  "key13": "2DVegNSeBXiRQEBzY5qUAf3tD16FDWsiQDfYsTcxiKCtduRM8v8jEMbtFPphB4qHzQtPHe9DwV5tYbu9oZxQn6gg",
  "key14": "qEJ57YZCBwD1cnWgHSiTY5my1K4a1sYCPM4G6EPo7RkifcUxc4xHvFLoFPQ2NtD2fKEKcVtfNzYHwD2uMo5FVnU",
  "key15": "2SxWPk1KCwbUZApwQfcYzNS37jd5BsRPWQ1hh9XstihqoqXgYhmCpNY8m49RTcgKXnJPZ8fdLxju9PT15WkXZ6L7",
  "key16": "47FJeDbCMx29114sSGQc131mXoTp5Xm4qks2oURhjikkCCN7R7egSeSsUZiqWGX9W62LETbsQFtrAEEjnVCYmRnN",
  "key17": "4PmCwBw9MVSU6vBx9k9VidLG9ceWfsbzVUwv2PooLYS4TLKXaqNTbvKGvLWdE2QxRVqhYvUtCed39JhLwYDnyoTg",
  "key18": "125E1WVHYaW8PZtReiiqRnp9uCzQrkmwJAGV2Z1sq92CiKQyVhSdHyfY6hVBhNdRkTY8qjLDCjAkirjJxUPC9Acv",
  "key19": "5LEGhgSGQ2hxRXST6Fzcf4RW34STaUGXfE9aA79cbucVXDjQnzoDnMVVbQmQrsnEHCk8dNkzxjaeb4Li5Jf3JoZd",
  "key20": "2eLzWTiZNMsZDYz72kaXFf2eVHozijzJS1big5LMxMLsP6hJbaVhGqAXg2M3QJzW9yKSch49wKsVDp1wwufUXc6z",
  "key21": "63AdsCnDRjZU9Fa7Ayo9WyDob42EbPo3YwC4XZbshyEMXPqmQ2M4GSG1yFmCu7samYwDXK1CGEQ1TTAMx3KFoUMa",
  "key22": "4KXhBAg8ChJyezFE8Sc99GFvj5ksoiatYV1JdcFBgmKSojwhuecyCXEvft5Cy5sHcb3ZtzkErjjR2zhiaPznmn6J",
  "key23": "5DUxAoye5zBRbnSUUrzxCvjt9EMud8MhSSz8abNZ9j8BDHwHEQtvUgLjYt3iiHUvYpaSSjJruhFZwdNRfLeoZHsq",
  "key24": "3QFjxcUSTiCTD5pmDA2WxjMWi1ibADjmM7dBjBmXSM8C6ybbs5qwGi3QLogeSqTuXFbNuiVo31r1m7WJijLknrPb",
  "key25": "CFKY6P7SEpAKxr64zFe4ZQbbcTqMeM4cLmSnPNSsvpYC5zmyq5mddW7R3mko98CgXV2FAQCP36dBwgynJv1C1KM",
  "key26": "2zBgE47SuNN634Kj6EE6qSdF8LNfrCssPbZCwgxKWYadZpGnNYTLUb7WGmrC4qZeGmzBmLYLdmQXuPPADdg6TFiY",
  "key27": "5GJNWxiwZQvnxnYEv9pg2kdinPEQ2wRrvrDKW3medC5L47sJYXG8q6x1gHx9dvsuV399PCi3VtbfqhMMs3pTkGVi",
  "key28": "3vzxJQXqgfzj2boXM891AtpMTJFs81LD22T7AU6d5d6si6CYtMVnrxeAfYPSBnNRCCDWCtSnretYYC79F4iDdDiy"
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
