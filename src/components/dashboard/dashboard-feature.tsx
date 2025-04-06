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
    "4Zxw1NHyccv67NX24j8zBEdm41cf2bgCWPWwNFMTmM2tB1FB5yRdZmRPF4P2dtcFpQ4wxd5J4kVnZZkyRyL4c9B7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nkjQtVx3efutjfJq9XiabRygq4iADWXRLVjedcnigprnMeUjK812Q2Lnb7NJaUpghvCnMAp8ijB3PoHbrHp3CGW",
  "key1": "4QrNU3FTNYLKZ1qXJZ2URReg1rZxThFWsgEpUnDXhr1ZARcwxYc4w2UNh868X1iv2Z3RBHucFMCHYoKtB3U16qMQ",
  "key2": "w6doSbm7x6UvEfteP2G4ALiWgVFcAwKHq2EewpnHU7se56uezNzQWMy1wXnUFAxrzuLrMY8haabDgRrmMR5TWyU",
  "key3": "4vUawPG2pmG9tRnkmG7gg641ABKniribTgC9niQg5U3ntwPLqvUNcK9VP1jzCUgCLLy37XdHZboVC5UUtQF29Zto",
  "key4": "3VySw7gZxajEtMchTTUUNwUEmwGSS8X9Qt4Jau6yVk5wopZ2ekXcNLshjdK4fKKDgk5S6XZ6qauMzs2FqYxfesvQ",
  "key5": "5vAPUVAijo3RqAQvPp3wtcXx6H5Rnw9dnmBj11X9GWeqTD8vnt6fkQmBuFskABrxVb8QCvYCESPjWzHBJcxjc2Bj",
  "key6": "4cTQDDSRmqFTPGDMbqiSvS3o1Ydg2dwK1LMcyAowDTRk7GMxxHZsfDea4RuVh58iZMCWLb6Je7Rbht4E74Tn66uF",
  "key7": "TztHDjJY24U93oGXsFA9nnwwtnNHLCXw86BB6cmHCYojjmpYFnFBHsCHKN3YRntqcLTtDMoBCzQXVCF6rRCXs3T",
  "key8": "395qVPY95vJQw3mLJVCvNW5Lxzoj89dQv8ZB7fcBv2JATsVAqs4xdENDXst1WUxkABkmVXxamCqdnBEcYWgEwqaW",
  "key9": "3y56y57uDpUGLtSs9aUccsoxuk2deHKQdxzwiYancyXEs9vRatvo1WpZTKkPDjYmr2fLFCC3NBWa9St3EJJ5Ywtg",
  "key10": "4bR8Zt3NBuiRfrD7NFbxJsfLmknqovcFESCnt7LNyxhhYWK5w1kuNNyAXDZCWuWTUAgHM1nSMqcqgwytMsVuyLPn",
  "key11": "yexdfitWYYtjzCvDyL2pktFkfTi3vNqCf6N164F66AhfxsEWe92PVkJmDn1HPHQ5vpUiy4nJDCgekHXybtvqHTf",
  "key12": "3WaqQoCozgoBmCPmL4ekexPzxqG9V28RKF53SQSKCEV7fZPe7mebTD1ozgMCGdAMayZZhVbtQ3tDhQVqoFNp5Sia",
  "key13": "2AvuvLdAftzkdxkUkNDPz9bopJNSzHXN2M5dyqs4eb9feVdxB5xWtVAAXrF7wF9V4xUZxPGzwFH3uTZxg2jgGrj7",
  "key14": "T6JnfvD1wUvmRvaBpSGTgfNBKEkPo3RaHB1PYWHwZafCVfQLRcJB7UDoNQz6yTRVxgNjt6YsZosRumRd6cumQA6",
  "key15": "62dP3HP9Mep3r9UJ7ZCuskPng3aGtKwDZ5vr4g3rBfJAj4ouHht7PmE6wUNwX2KfH1Yqry16C46jwYEBoEvPnYUA",
  "key16": "2gTudzKEsYuGFa2Vou3mpGkc2hPpCxzkstMHkWwAApZwswALeGJnDXSPF7M1cnPVcu4Xobgu9LFmT8ioNSvrpV6P",
  "key17": "5qMtDVHGJUgCBhKEJkt8EL7JrjfKZRNhpsYpiyFjaBMeDUSxzZeg6xX2YtvwaCtSiSL5YmJXFHEQgrCWvRDqbtyG",
  "key18": "UMxAhtWPM9rTsd2Pe55gviD9tha5TwyUR3R3UzkMmEUeVr6krNFTPA2quffoB9XihJp2MbnRZCf2ept2Ao2eRjD",
  "key19": "26CBHA9aqEAFziuM8YDYFDHS3Uj2w9av5eWtS69pmgBEEG5tDp3XtnFdu8FrBqv8pBjDxXnCaknjgKg1QXvQVRZE",
  "key20": "4yXuUsmZkd4aRrGaAKKMtz6F4R5fxnGCwRFVUPw8wyAaVi6zBScdRgVsobAzCmpaxygVSxuqD7VURVVDiT1H6F2H",
  "key21": "4Mj1T2gyW3C2VjMRpVsBD74piUezwbXUvnmhzMmVs7Xw529E5BFr8AGkDHsYTPYrtAab8rvxjZN319eSuqrrBQUY",
  "key22": "41FM1tTPCxab6vWPkUhptQsg1g79Rd4ffijqmCSYD1ydyuJqtLqsX9S2SB3ic8QRc7zjRyPzztfC2P8RyHSCSWt4",
  "key23": "63Y2gUTY8YuBxSF2AGx69nXCgey1aZ5AyfUvNWNyXDKBsQ6EaaZp5fLSze7HxrMDnbdpXDwW7v2HQ5ZfCTQoJoN1",
  "key24": "2BJEr6ztmoXobaR1MEc61YFpcD25jt156dZ3kWbFPLziDZgZ1pfhvzgooQSDsUNbsvvybmYatjeNXnNRdga1MCde",
  "key25": "2qa93tFuRj7vMhHW8e7PmBcsTA8aTgKM7aPWVhiTCCoLLLoHXtX599V8P24GcGJ9sYTydFps4PeJUhRPxD4iEo86",
  "key26": "3XRnebyw7AgnpVEZwkuWeLTG2qwcmfhY6kSbReAfqwRRho4ZUBqQ2uLBwmoYfMAAQUVCVq7TzzxvBbgmxFBwGoqm",
  "key27": "Sh7uG9PrBvs5SRE9RJdY8dyYis32s1u22tJFMuj5R8Ku7c5v8iRejM37uxBPvErqecmMAcNZPYKHdt7fVyNXRCT",
  "key28": "2SDZ7RqTuea55zuivWgwmr7ohPn4X9mWAc4wsFqSwg7Y6sQXbQPM9kEZuwrACKhoMHdvcdB6TdDrG7zP7rqajMtU",
  "key29": "3gKNqeec3bv1RrS169kfTXduNA2Fxq1w7pCkJD5148gJ9fJjNxrRkQhuRp3PsUe3GpjUF7cBYQ4m2qsEVwyVq6S8",
  "key30": "3sT66APqPYAFfDPoiEjSWdNtSBsLCvvYoiEo8FeiDydakbc8yHDUQfTubXQjL2RF6hTCovJNDRHSAqRoxHRQxQcR",
  "key31": "V8KMZGV5WFjc95ud2VEhPxRrhTxgmQHGhPMbTgxVpCpp2AMx5MAd5gHh32FxiWAcEbFbooj7jRMiLqHAw7wrzEf",
  "key32": "3gGk9P87kMf3ZLik6pabuDuEB7uyvfM563b3ZDXufTAfxeCtsjdDRPxdFtY2RVLWbukDsXdi7ArGv158CHdCGDVU",
  "key33": "2VkwN6kPUPr9zp8qWFEkQazXWyTwtN1SZq8NjAm3RLWQ3VZMZ3Qdm5pF3vJXXs5bADTBLGcae1ty2qtLoi6outdE",
  "key34": "4F7xSGWFQ8Yx5Z7UqH3ELoZ2ztK9jaWfHJsnDNjzqyLpMocfJo91sVufh97zUguVVpMnftkqq4Ly6X67o1wgwHta",
  "key35": "J3AWZ2TNwujXsg91KoZPcuZnBvD8RrqY1k5GiXmspuE8rddRaj4i3qmzpZNQB4rQmjVqR3hSVzMdaZivywMeFWB",
  "key36": "57YcEZcpwMt6NcEN2gHbJrLqiqd5BptHawr4vUv3Qfma5eQPJy2FfcXvRNmyBSHBFqJbAeLT1DVkEPX4tSZzLAgC",
  "key37": "2GywZaB1omzeK8JMCvmRuFxXbpnE4LfBVzC3mEkhCXSgM7GJPqHcPHssMzZLBuktenbJsVhxgxjnUc8TJaBPKa3d",
  "key38": "2NUsPP14cwvwvm1pNr195DidexxSa8SqHTpVLccnUzKY62fxcjZtox9UjYgxnBTsnJJ9r1qbjqa2bwsoYRuMn1TS"
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
