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
    "2n1WSvd7MiK5m8xBfeK2RHMumrHjC8GyrWbRSf6KDop2KdB6bwsr5GPgy32jYSKgK3xF1NJoYeigHjMpJYcHbobY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121T2XJZVGvBFp9cPwuJFdLoLALc4nmFF3LSwp4k6EEWHaxFiara1msdoTd1oACgYiRhHsxdSnqQE82Z1Pi6UMLg",
  "key1": "3uwbhSiZkSYeAeMfDXkdkumm4Sg32ehy8XwqwLw66pvAxBVa4c1s4Kyyrick3kp9i1gLDXxifs3ixgkoZiGP4BtC",
  "key2": "3zWFWh4Tw8mzneKWXWSTNBWwdv9rstiDbjpMBUsHEyAvXK5M6ZASZQRtG78ow8i9AhNquzXpytHEfqvqAFXcm1iT",
  "key3": "5DCJYyQ13ynRSCHk1vm54Smbag7TtJno17tUu49XsqjCNcAtRUDDBim19tBbdozvbAZVnued6PaTJeMGnsM5E6HD",
  "key4": "4HpMPRdQGDYaajTwAb6iFPB7QQT12Znz15nqEjW2P4hyYnQgYLpbEoQtu4EVnPdtoM2beS8adfyBGhQkfd6dokJu",
  "key5": "3BZJF5vr8z6MuZWiqm3MdjDzcfX53mePrRXoqd4eHLfRvVuu1ga4d3fqrLWX3QDybYVd6BsKdVzmQstP4PMVEkJg",
  "key6": "38GGH3qaHAbk96fV9pp3HECa2mUMbXNNXrx5YAWV3hJtLSDPL2VRiF71TdC86Kz9MPMwkuzPxmU3n6P6yJvdcWLh",
  "key7": "4q5yEPLpvQyMsnbR1NXz6uZYkyQizjnfGzUYJXfQhqVn4jAhE9KzXg98HrcwjVrZC9fAwLQGXrWjGh2EaR6Ya1c6",
  "key8": "24Ugu85yHQKaHL7uostfriNW6M72ZQRdEFquDPy5D9ZT2A1NFBE9UzLhKj8smXeoj7RWU4uH9KbByL4QksgXiPCF",
  "key9": "8Z4DCkMGqMHLPT3C57sYmYvXXd5hpvdNFBQ3xwihKcGbd6U1Viuyz8an7z36UBi3KH6192hSmB4CFr7XiC5BGr9",
  "key10": "2okYr2xeUPPvmrTMjjAEHaF6ytmmp1RZZ7d37graUJkuqPK8aCGwTvgvmks743cCuy2wpbAzUS3DhWVxNVDGRoHc",
  "key11": "2uUGkNC6EhPWW7jxs9LogfCjTqFapeuhqzZCcjmDQWUT6W8astZUA2GHo6zoLoD9H5LZSUDZfQ61V1LiFQNrvsd6",
  "key12": "pBwQ9TM2qKT8tbJ4fZy3BD8PzDL7K5aqjVikTdeTUbGwaCjkisrRRfDpNYzRakqfKUrguatGQMJRHAxXf8y6cBk",
  "key13": "ZpMNZW5vLpcw9ELcye2Fh8xqrWq1nb4AAod6bQcU7oJX9iQMTGWRe2iS2TkBg9AweKXjHhJVNAoy874ANj9iYym",
  "key14": "43VBnDszUMU6tA6xGR9ExBPzz9P7wuQJpzSW6fWYMtdfQrXoyQEXULRwbcRWYpVE4XMsR7prdrD6YvGxTXzQjky1",
  "key15": "5wKqEkDekEcsMKBPLs3mBU9nmVMnBHvyQcAyTc8BVNyy16N6LHadcacibmW3bDqjZaTYg5vZUFrcDUeL82owwdB",
  "key16": "2syYJQpscbJNsxjft3kpQ3fnnuXtBquA7A6GGNbENmfTxhcUNXp5pKGSAPSLRL8gx3d1nJK66mEkZA6vQYAQ9bbU",
  "key17": "5ZCDsskyNn5ovEA8HjrbwXHNm5V4sBmCqxHmeYvVnYHr5Xm8yYoaaJpNSxdmupL3qrL91HiYPw66x5D2xzm6cpom",
  "key18": "nwh9kwJRSB3X3htjDhv41nZQhbMbWZPnck2zp2VCvmZenGXh7pz6mVZjBVeufdtsT1cjpN5WUtbo1oaB6PNu2WW",
  "key19": "3rucAi6a8UHEeR4XtMSsxnJAqehR6ixYb9WwM53wrBtnugwN2EA62ygN1aU6EYxQrHwujTs5vBqAn6NEss8ouJdV",
  "key20": "3dcraMCihhwkEz388bRVX8BDj1NLvKpffqgPJJQ8q5wUbJNTXVWW1LYh9Dp4uncVDGwHbkNx6hpRoKJ6a2j2E8hc",
  "key21": "2wF564YfmuUj4Fzv7ws1e34jphyetH5THQpVfu7bNu5vzzTmQraXrat3nNZQePPPmh573Ljcp5VU2LpC6XMy8zQZ",
  "key22": "3bBiCXBFrQ42MGr9h2r7e6R36bduJNcR1DXmmNyvH6RBijxAAooDjF7C6mUnnMZaqX2aQiTqgvd65Jr6MsxxhXjJ",
  "key23": "5gz6no16EV2dPKDh69j1mMgo8t8DDjCwdvLHdekfPCTBQBzWzgNQATUfNWGyJCb8JTzV6UqYwPvgmPUpxgfUa2sT",
  "key24": "5q7ReUyBZk3LpNUMZgRYS2kBctKr3v1P9QaJQwtPWYNSJvHR7pGCeDDkjBEQqwr92kfBoFeXZqM6ydy4cst7AiKK",
  "key25": "sqxwEGiGGxLQDPg873hV4ZQzjkWUMph2P2UEBa47C9Auzas1xhbejzh5MbNdbjBLHbaqj5HqrURkQseq9E1x87y",
  "key26": "3FThpxS1KuDALXiBx5q7RdqeTkiotzaCT3AXoKvgPP8cfGe99CQnqyTbBCPiQd3aKZRn3tRGiZUjNvuRcnYsj23U",
  "key27": "4qyWjeK44X6Mepe1jyFRfe1phqyF8egfMgmmhBi2c1iRkyHtUjRuPvZCXPMyL2ARWUgZUWYVf3PPbMcFbsqiN4Sj",
  "key28": "67iQ8tcRyG6NpBvQ8L8roMyp4o59dppegZsskA1GpPaHty4jZvmezd4q8A4xdtYb2XXBs7RBbnY73BdnZZ1wTPEH",
  "key29": "5cKjubbu9csHeFFzBHHQCcQpLAYjFSxDzcZCBaG5NstZQ9vYYyiC4CoRn3X8bU87CZECzAen9rmMF6G9YzwJpoU7",
  "key30": "41dKzGtZEg1ayAfmAXszQUrXWnzpAQSyxTXNMvRJWnfXa1h91Efud4j653UmqgKQu5g4RGwxmZePb1yh1snNQP2J",
  "key31": "4JrtubjhMxGXfi1jPRnhoEkStLFHJrdgMmARDZEP9gFkp548Q2j2Ur2xcjL6BxwxH9ps8dsBPn3aVJs8d9ccegto",
  "key32": "2dwZbYfybZAAvouzL72nR6P8gaxpYQVhyVB7Zg975dHV31qi8kg5yt28ogcmC2APTRsWzZZqju6FyF24PDqKeuRj",
  "key33": "65A9oTMRPyah2GDVyyiXwa4hXLzWuZQrFBR3vMK14RRYX8kFmC5zLD7xKxpEUuGmBZqJF2M23uxwW9sNxGr8qNme",
  "key34": "3Qr4eaU9cBr7BwLtD5TYjZW7VTf18cTgVSKuNJNnGqjYsAGUYjD2aEZdMCHppmNY4i4LGN39BEVCgBWGzLaH87zs",
  "key35": "ipLCtZHEVsWkgxjeFFrMEr4BskpHoxqiHSWrM9VgKq4Jzz1F5hVnr3ShkSjYD4udyTu2hFKw2xZXomp78wDJEUe",
  "key36": "2ZvgFaQfbMc26c3GW7FVm3pQsp3wLrHTxYLtJ6THXVLdc1n1dGSgrGw2t4uktL6cRcwtuw1ibwFM7M419yZ8Q9no",
  "key37": "32Ktjb5jsx2Pm7p4wnshVu7QMA6nZLg7U5aGhKa28LFbkqK4Z59sLUcn581JJrU65RyDbFFf47WkGqoUXuqayaTo",
  "key38": "4bK64sUXC438hcAnRpSmSaw9HiSNJKTBu8cvVUEidWhEMRByPKuFTLKwrME5BARi5BE1cxgw9wxhT3tDWG3sD3gv",
  "key39": "2h9jFUpLk95e4oA6jKob59V5j6bJKJGEgxHccj66Tc9mCH36TLGb9UbDX2RXHavCnqKCP5rxPDaqzX3Yotw9WX9B",
  "key40": "3TqEYi4MepfQiZopMfTBwGRxrceqiM5niVdFv5c3BwRsb9NAKGnpqUjvw2PJA9uCtt4oMdz9QC4rFbJjsB7WSdEL",
  "key41": "2MYbwiC8eoywyKYoT3annhZKozNimctuoZWmhQLU3CM8r3fefUditCMs2HzLkdbX8PubvQvEMPJzeCT698er7RyU",
  "key42": "3cG3wXxLkywiMn3juKfeL8GpR4k1sSxPrAhfFTo9KuxdUGs1X7cVwyvezhzLEiXFPgkSognTiUGwnKxA3KJpDnv6",
  "key43": "3Zi43Dfu7ofovVSRQHfipJCzRpDoqQaHK8Ljtdpg85BNBwLohwe1Vqtj93V7bJPmqXsGKbRvWTgq7rXM6hRjjV4Q"
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
