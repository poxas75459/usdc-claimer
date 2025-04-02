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
    "4MqqjXnW1woyx9D76p4C4J35w1E5o6eFsEukwSgrnd9BivGPJe9SFQdoSxz1Rzjvvv8yWoxpNge8kELRmVJ2i2s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dge77JQTTmg1JBJSfL8Td3Pz5xpTo3KWNk31fQJBp9k1xoh2qVWKqtt6beHMXftqV1g2ZgBee7sFhBRqZfzqLAp",
  "key1": "2Hx4HPkPbAkg4HJmkwofEy1dPW1zo55rCWiyqSVsUcc7DWzRs9tc5op4wkcRatAzcCovAAwXXrWD1rbGuRfQVgVT",
  "key2": "4xAGGXmo1DBif6xHMPBryJstPAMKnLE8TrdTuY6d8e48qnLVfAy8iRw47MNT1U8PE3y3PBVPRKNQzc62G4PcbbZU",
  "key3": "2XwvRxH1uBjHVrHGhVrMqDr4iSPj2QvP8jUJbqZ2Ydbu7wXrsdmApdVTmFtHSHkX4UCYATLGmjKp8uZaiZLLWRed",
  "key4": "2aprFK7zMS45MywH6LGCvkPfEHUiRUhreUhL6NWWABv57PLjyWPTMLAdZgxtjEkvzHzKQA3Pjf4Vh8VQ1NExd81U",
  "key5": "3Ao6AC535BMTqsxakjnpKzDJgrcNsWnHzyqzXmw6Xq9eASzziRrdAJrL22GXiBwpX5Yy9Y51x8ghCZbsiWYaG5nm",
  "key6": "2s3jd3CTirPELCks3SjDivaGyMeEuoQU89dESzMnxFehoLEcoCbyNBAZS58WmJVJ9Ca1ipqzmEm2ytvBqqzFqtHS",
  "key7": "5om5pEieG9a5k5RGQwzcrUKG8PYumPXSeuZ1hkLmvszXZD2a9qftuPZMDha4spBrjL1ZjvjgkipnMofQzo7AGwLN",
  "key8": "MKmyNkD5AXqsmVMZZkZrwjh4tV3ZzYWE1mWfzR36WQvh4tYCLNocYhb3wC6q4f4GuUFXYgfvbJwxoq4dksfgngS",
  "key9": "4r4JFFXEpMk6DfjvZ8p5oKPxpte4iPvUjELQv9j2ontV9JA1E9HLAHjNNBsRDkiXZ3UJvDawzARAt4QkxJtGcD7X",
  "key10": "64pb5R2Dh4psitecLBkX35yt2Y9wsF5eUjCzjaKSy6gRBFPEYNV3Ezi4azoa6PBwwVAoZWoebaKFwDU5qYrtiT6X",
  "key11": "5zPdEWQ4G2Da5UkJ91K7FturtfE47MN49uUFWfUt36mjvh8ki1c5CbD1bxdygwkUkfKyh8zFoLJgLY7x22QjHHKg",
  "key12": "sUmXptD7YZfBkKuGWv9K5vybWXbMiMyHi3PByc2pfsMhJfdGDkUNmzPF5DLckCfa1CesM38X3fqmP2PLBztQ2cp",
  "key13": "2uXeSeoSGYnKBb6V3vt61M8Vku4zmuPjdvz5ATGPpHRRe7acEygJ8mbt2yyAN8fv5iWUj45NeAD1Je8891WWMKUD",
  "key14": "3iERjtjBrKfJzkNY5Qz2bA8HZVgH4nonChVCf8KwPQMJkgNe2tSpjjFuHuuvFitDAPWjGzooNftfdytr3HLFPXyR",
  "key15": "HXdfHSng9NA1vSmEws2UL96GyuY4Zrnn2uLfKRHN6b51b5FcZjzb7VkSeA3HXAw5xoz4xk2f6kSYNEoienEVSFg",
  "key16": "3fbCMV3xpMtM85yGHsQ5DPMS1Fk8byX4qd5Tjb8JJ1Gr9HCE95ft2swBXnd1QjjErz5xpaLQb3hBEa3kHwW3oXvi",
  "key17": "2xL9avJqYB54mzXQbgrXCRJ2PsHXWoBqb4Sf8skiNuawKpjxT73EaV2psNJZvR95rTdGFvJk2pfRTRhtm8tDbFae",
  "key18": "4X1fy2NQWDK38RarXM9BEDJvxhgPQ6x1p8xVfjbCbZCfSfwAGZUP6EeePru47P64NsEarLg3K5w4ZyjQdELjGiGY",
  "key19": "S8Z39razPcgZABHP48w32Pi8CykJSU2BXi2Kf7zR7LJS2ee53hBeCqSYyoybZ8GP3ToY5hXw42nELhDTwenbbvE",
  "key20": "34xHPAndp9WvrAw2dtxd1SinG7nrSPers5LbUMYSeVAZohxhKr21KDUKPtr49KSsdp8BNM6HR8dahMcCU5mDBCqR",
  "key21": "PC3Row8ZAvLGD5rJWFh6X7PJWczTrdEJzTYApFWj6NFUDBForV7ETRrhhTPUnVqtreCKezkmEbyzuSvxd7p23TP",
  "key22": "bHqDKGf3oVxRD1qPigTLsQn2gDuuqMX5iXGjuodfkBbni4RqukDbJmi5QDSh1R9pGp3AesLREmxzp3SEHABjrMM",
  "key23": "55NTYhHy8jq9mpJ1WFfg9tdFiF2dUq28S2j3MFrnN75bz3iMTY4A2BNFrnrhti73D3esycejq3d6cqCYn75dtwYm",
  "key24": "3MvdxYPopY72LzQekeDoUTsMupzaGy5JBmNkJWKHDz3qCTXe8cCf2pp7bKWpzMYrxZcFyy2bmcRbhrNhjCvVxLVr",
  "key25": "4StLHQjNEyPHwCWthsLG3uA5BA4zaw3Lbdii3WEWPLbEz1n7zbQbDHLyW9QdJBsFfJhXEbSF8nWSQqLT7RCPzhbC",
  "key26": "34QcdQm9JBckVSW7zbXudXLvhgHP4xWqrZrrms61kRAhgRFZsDpZqy85H7yqJrEs327ZGSgeuZfgcE9FQiknkAci",
  "key27": "4duHLuzUZDADjJ4cCoQVptnqe57E6P2BpJSMTwuMH6iB1PM5uUycY1FEu2wMLacnH5pnoLGVcvavmyNyptzU44V9",
  "key28": "5LmadWxWg129N8zroWvfefUCJdrcJdVh7PZhsH77EMQjeN2f7GQWsTB5fBNHFvqHyd5pUUaGQgo3owx1GuEsWEjq",
  "key29": "4Az8kobVvQxUkTdg8BJDDgAzCpxrXodQg564djhXi4MiiFXHzmcAyx9NwwbCYqGbWhkFxNh8mRkQt6LE8YL8we7u",
  "key30": "5mhuMdjt4U6YU5LF9pqqkPvTE9XNNvQbGvmRHi7k1uRGXPqPjiCt9Luc8LxdadAtqAomGBfrAbvKByUo9W7yRMBT",
  "key31": "3mR4bHex5cx5Cap1n5aXgbCf9Mf4ZRAkXwQXtniFMd4MCPrCLqjP2eKUzaWyGkiv3MaeNKkJzsx87CoSuohVgKz6",
  "key32": "4vBa4LRQ5ryae25YnWMNSCLW86ErUE49fVr9ornP1BrjABLx6P6zjoi7yqnrzYAdPbXgo4cXmJc9c9zpnW5RDWNQ",
  "key33": "4FVMVcEV7uETut2NLi3jX9muGtwBUhWpd5G1ypdznNzXUXDfe54TWcoXoSzMtyXt6815xScJAkv3dsuLysQ113wi",
  "key34": "dj6FHV6yKcuUudyG7veqS4ZxTX3cKtpjgGcsJwcywYismYvdWByGaEyQJSQNZn5DKm7KZtdeJgGZvzFtVwCVR3f",
  "key35": "2nZTzS5SuoLzecm7Yq9VXzepFberDRaWySrEHUUfsTdrXeEYi9CtgQeSzBXdjDwxUH9W4fkTp6NL4GwPYyHcgsen",
  "key36": "5MxC17RcWiRHbuhFPmf2k73jtPsqynEUdqi1bduafgUjmfMmEW9tiAR2i7M2B3KkQWT1s5FUxh2VvSKPnb6Sfhmk",
  "key37": "EeSfLMidDzsuAcA5yEwLbRDva7pRDY92aRt3WceX5ExK3CJXWXCxSDdBk9Kfi1V37Y5LKsWCmP8oETiadnrQtEd",
  "key38": "42LWh4mr5BPPPHMDuSq3xSgXzCtYV9cNx5Dz8yhs6dsBmco4p1M4D1V9Z8PSDEw4HVUd4Gyn8jRjaQhE2gf7zfPB",
  "key39": "XA9hn2pfqGLAQbMPYpfqKcPa5uZ7afhJBKMgTnUzdU36YUVmWXQ58yWTEnFECWwrvCmwzPz8wnzx3Dj1g8uivQ3",
  "key40": "3aByoah9dfNCx7xcVFSQ56rNnJLkLVCTqNaUFqPDesrPCnFqxHDVb1ATqTK9x8pq1gC5QxyhCgTsBCa6HYKKxnLu",
  "key41": "5cpj3CbbocndAjQTUWosvU4S3L68eLFHcqjboJoa7ixpD5ZCk4dP1s6Y7BPbDWm4dmUoqc8tQSEaXxuAnovxwKA9",
  "key42": "ETdYc619sugStSeK2Ecrzx4Bbm3nLxHdDRzkwJNsymaTf5VmyhaeoPdc4r4b9GFUuiHaVbq3mQGwLRXyjAQe46V",
  "key43": "2iGHxnzCoYpAXbPWwZ1m5FGLfu3RyL9njqyB8NJUsSfWLnmghVYxLREEVwm2AHpkGxEjHoQyPnQNLy7C7FaNCT6z",
  "key44": "38TS9iFwZAw7zWNDYSsWdhXLpGVSKu3Wz4ZZmuAULzZVaLst3r7QhQ5BC1Uj3WFVYToR35qMrUMrJ2UYdBCcEwDj",
  "key45": "5RADMaoqU2RtF2W9EgvnUzA4yxhcdSnHMqJR6ZTRvFbueWypaPGryfeQfTojDX4kwvFgjwmNTuvSPRNAryuQCa6S",
  "key46": "4d97DvH9nhetyWFY4GidrGhfAfJnu9VpfRRuJSzWe6kRDHLdbziJFifGnFXM7udPtnyPe2eGB3hV5wiP2KzCztci"
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
