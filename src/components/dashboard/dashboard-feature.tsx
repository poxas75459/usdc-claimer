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
    "2XF7scXG9q7v7We2BKfJxqGusFnhVH7s2uzddqccLxuiqetdgRdcZXsEg2Z75mtbYcWqfR2u5tJqHwD3xUXyHjw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BritzdLyq4Tt1p4JPF4DZQMiwS29AUskmWcMH3K6xNosNuBL6hMR8vAizCrzZrvjM9JZ26sgMKk9ALHJhXpZZs",
  "key1": "5E25Z7Q3c8daZFicyXjfTLpWwGZSZKqNeKX4beUowWx8W5jcku9uzJZ7tXmn6HWGref6mjxx6SaN2tqwjTaavYdq",
  "key2": "3wF5TeGopqYDb1AMCJWehUqL5CFuJ16GqVPvwJtYh7w7bhNnyFFRTphBewiH21C9T447FLEn1ZCGmyLFKsaSrvX7",
  "key3": "3BG3RXvNLsNF9zPeiiKiDMQ6uWk6KQngxJJcjp86zDVFZLWdbuuuzrvA1xx4NfJHS8es9XCpueAVGnGTeNzy4ycd",
  "key4": "4grG2daHxzrTrgz7192eY8fimjJE7rvAs1zRtLGUQLj4kWtBLAcULePUPFmmVrZXbztFHYSVJNoafsWiDzmFgNDA",
  "key5": "2jR8hL8R6Smn3JfCiwffCE9i5Vi4hJ4htQTztWHNwzNLk7HikKYC9F6mb8bq8dqfLQXZEbftXU3e6HabxBM5psWz",
  "key6": "2sAx4D7HYUR1E78sakx2n2PPCYDBs3gHgWvcemTtkTy44GeHfi5tM2qA91BAXw2iRyPtc4mawb33KiRyYkEysUh4",
  "key7": "2tWsy21BBZTRAFSYLF38TaZNKyxzxZ5ERBvuoL1PjZYWVm2KXVULpmgLtGoTK69gVZ8wyJcgMsDGuXNZz1Jm8gnw",
  "key8": "5AFutmDVg82kryAoH7iHFwJsfzrswwg2qPzAvUSQdzBhWmuULEUpjopzvDJS84SDfTtdXbGo2fiNdQfbMWuPo6xs",
  "key9": "47y6TcQVU5SWW1ikoHAkTJ6xAbD1x4zkTyK8t3oRAHpikNr1TNkjZusQ5MBPxD87yGD4YHCDRqKfFUr7G2JLfSjx",
  "key10": "2BtHyY6moDfLpCQiTx6MS7e1pKwJ96v1ShUjEQs8zaYhX3J2dUKPVvHUGgH1WuFhGxrTbrAQLQtUMs688yjAXWeP",
  "key11": "5GirKsVrTkdxUZHxdxtjmhADFcRe3eD8gpFbMffWAX4WhziQyzneUzkd3jTfEaC7penrYUdHPFvWj6utirqC1WCx",
  "key12": "2HjswUabnCxXoa4bgKFHZn384uU9vtoJW9pPwK7zRy7ia7rJxB8LksLANrMmcBbn5bd3EcF7NwzaUgNVPj4dycE5",
  "key13": "2awWwB7bRSg755SzCsNhK88YVXuKbnLMPKQWPSG8CKGxdE7nVHDW835KNdRH79hb1miue4FKjdXUPevHsaRYer4U",
  "key14": "4A8zN9sDrh1QSktSjMS3qnx7MwC4QmfSgQAfbeoqSiiQayhQ9WSUoZfkLkL2Efx1xqb1Q73b4y3n9MryHwzMK6Je",
  "key15": "5eJyhBjUoekZmKAYXtpEj5izY1r5i9J2F2kuwfniradaxJpntqhidkvjsVspLEqnbpbgbGWeC6TSigLPXuQqoiNp",
  "key16": "5D5SAfio8sbpJxBGAMfLaUEyu4bNvaNZGELcQnhm7mYZNZKQguyJsHx8K6cfS7FkqeBn1QBdPCCFSYSetbxfsinT",
  "key17": "4rDq9LVwKqRQV4Pnxh5pzsAbGUkaBVQnWbdjBM4vbuCgQKzN3ZvgMkeBSx2K8R1jVs6wSdtTQignMpz2MW91d6p2",
  "key18": "F9LA3F3qp6cXXcwzFPREhS4RatrWbfgFgRxh1kKczH11fPpgS5zot6yn6LPbhqMKeJQ7APUPNB7ugLxqQbVRmgg",
  "key19": "3qigMi5bZrbfrsN1zTCha6D3jRNocg2k6sTJP3uMJDBSmfcbAAUuMyyDJ1mnH4QCbo6YX9oVyYEUdYsSFen1RQ5Y",
  "key20": "MZzpdhsYC7iCseUtJ9oEcStqPtgwYDdCrf6C78C6NRSchNwdte4HXPHuLeFn5d8mBpR1aCtBnb9DGdjzVr7B4cL",
  "key21": "5uHS1uSMF9bAembPLqregkCCmnmGbsVHSLE56iGozbgZ5qnuyrkYwJooYUsGFmHjJgNRjpKXgpib1kvP4E8iNkcP",
  "key22": "4apqJ49S41HVCv4NS3mE6XFHkH3wj2zuQ4EGDt9tkcSQui3Yycvfdw8BEarfDtuPdjGX2C1h4Mw11ZMRiv9bbVxR",
  "key23": "3TuEqUxrGgqnAeqAnJKApgnuFrWuPUqpNTpjdvRBZdNj8YSfpR55mHQf34MjCMDY5ivKc8XBjEv4iNWC2XSCKJe3",
  "key24": "MzxfuNtY5QCaDhmtECyUDUwLSJfUid6FQTBASsCQvQUH8dehNJuCMhQxyF6J9kuawqgwndB4MhaLqVaMp43vmmj",
  "key25": "cyMMNoSAespCT67x7br25RBEnmrxzHEch5rLg7E92PHtdSTQnAij2toyNkqLpMKBg7kqt3NGCrLSS6ViC3NNVZM",
  "key26": "nZkvkNcmuARpos5XsrZPUqbaK4oMUsp8d4ngvMHUWThGeSuVRYx7Eg2tYjuiGJXpFeLfPToXTyPytucaFza46jV",
  "key27": "bf3BwtgnzHCg9D3omYWCXuiSuR8cTsxTHg8qKftLuv9TJaTXoTRbvXfpt2UPf6jPr2GXgaQLRqhZ3NvxFnrykjM",
  "key28": "5q7DAELGMoCmTcRPMt67gR3e8sKd6A1QiJzGgi4LSNvppmb5sYiEtW89zHLskeVLwJvFsGcd4BnftgVso3VN11NZ",
  "key29": "d5cDXmecSVmfE6SfMmvhE1NGJs327VfvET7L2XhrKydidDgGTbca9hVsUgS9eL8neZCjCbtEePjZ62i5QUK185v",
  "key30": "42FmsT2HHvVpojJKRQvj63u4NhLb5rao59inrazj2CE2KqeSBL7PuhF5H8s2PpuXJVXPGieJUHqEGQDSuCCu3jJe",
  "key31": "4uAQAL6uH2r9RaNafD5gSDRpeq8hJwu1AJfNoyvPWZcxATY5mC2K2tjJwtMux2Ujxuc9ZCp5ZDTooTL2N928rHod",
  "key32": "47oCgcYazrAzpZKS8CSQ7UHT4WLcRXuK51LwDJebHHBKoeSTS5tc1NGpiQkQps92ztnAG1DQ6RrUJcWzhDLhKW56",
  "key33": "3L2QVfVm43nSDwe1fc4EYMemBqCha3rME8emq5r3kLBerBpQXR1ZJUhyvmmgk4KaZmchqJuotDf4rvuSZxFtMptr",
  "key34": "1p72iiZZNS1pmSYgSA9BvTv7Rbk3F9JeHN9faMoqM3T2AQh8ZaRsDWqbw1a7FfKLx29iydMTLUtT4ANqNgs2Vwz",
  "key35": "3fxhFopLprYN1yWAck8QJAMsajtcfCAEJgkDbv9es9Zj6TDbU7RXhAsfmCqECbsCbyytzEEb8nMACniryXX18kFs",
  "key36": "2Qg2zUvq8ZnU2ZyHQjRibnCy6n4ZNXQu59fm4k6UNHR5tnzEfaR5nHsCUQi5W3BqWqGxukhZSNvS1rxf6z7UjiGz",
  "key37": "2WNt2GMspZK74GUK4eouocBfALdWYEkSpZGN4Va2vTM1578DxZGDRvqc62WqdeWzn5GkwGaBVVYZvQ9SR1Fknqiz",
  "key38": "2eRqhqpbTXWvvE5ChjcN9aUbJJ1FWnAjop35hweMQpBoypzkq5gmLZHTqecD5NJx7zVW9eYtY3rLrkdd1J296kiV",
  "key39": "4Wqe8WCGbFibsSuhjBppqK2PdyMrEmvLQzTCDvYwQTAqWmVhhdLX1BSKnZ78VaSAkyNuXRsZFwpXp5mtu5sMpGen",
  "key40": "3Xt3dGorfiZSJSzMyV4wGPV56pTZDu4pFGaAivoCzthLmv9b3ZY6162utoQUMYAifp8uxa5wk4sjdJjBYqM48y1H",
  "key41": "4ojt21bAtD5WiS9SChka2PMKW7h28u2nftAfJ98sSfb42iXzGcQUueopajZdniALJoZxdrWMQyV1k5hYqwALwMit",
  "key42": "3BYa1ssc2LZn4EZbL99VQXvj7vFrXyJTmM68d7AKbvZzKu6EEF8Y1cxgxxFxVJQcKDhAM7DmXF4Y9jwEmzjxUmK",
  "key43": "2TcV7WEFXSs5BStErWz9B72wvDzuGsVdchFv8Ms5NtbsJfu9zGcwJGvmDRxzUq1fUaN1EPqwPXAPEqAf3MBNUPzt",
  "key44": "3AKFbRDJpMeNX2Gzfhf8DW3WNDpqrj6A3X1qwDh2aZZdGK7BVNCYWmtf6cG7683uj6x49nAzxkChTnhENaphxMd",
  "key45": "5dFFMw4Yxh2WxLjQvj3zzDpBzR6EsjkF5f4s1rDDkSnE2v1UABR99WqLMQnKJBJGZ8nhZ8TSfsGu3fUdThKmiKwV",
  "key46": "2BSXGoTxPmWkbA16xx7CksuEzaFH8nHkGozuNhp25XL69KvtNhtRFNjDzkh3xQMabduEUqrdGRjZC3Lt7eRzc8Hb",
  "key47": "3zDE8SXip5TiGqLtf2Nhk8sE4WbgxS6UPyZgH9sG1BD3ThFdYwi1mBMTLvU9pPq6M9LYDiLVSKdeKfQjwMU7V3dU"
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
