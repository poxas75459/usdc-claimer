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
    "SVi3nmyihrqb1rFqTC9fd1fJQMqL4XdmXKnzRTHYNrBik6mCXfcitWmGMMWCubqzwGgrKFp2BidFyGxgf7nXJ3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMj8QsKkatRaosW7J4EffFPsqbceKNm4yY4JJYwGBtVFfc4Jo4Mfch3WLXHSFMpDqN5iXNaf6dhQVUdEdgmVEcQ",
  "key1": "4fKc9hmhgE98MGzVngvxCE26P4RxVz6yNijjBMcvhpquQFUgzvoCS7pPdVvFNP99oZSBZSmjsRbkAuhXC2CNQAP9",
  "key2": "2wZJH1YZT6Dhsuhg2CXhEcRVZhrAbGfVzSKPVUGtXPu2KRy5bKmTeqcKRMu5s5L76r1VvumEwHdFhBL4pSo7REjX",
  "key3": "4XZXyRs568ciCMHzWzV7zwaNUe6wZZ88o3HFGJkimt6pLAYfbXaE3XsNKaivBJb7ELuRBcqgske86FPPp8nE89d9",
  "key4": "3ER9pd4RTMMAjyba2bnMLKVSN6DURP5dw36RrvfwSK545JpDdQDiCdDxeMRiAvv4c1cvy9r57cez6mcAcg9Gqx7Z",
  "key5": "5yUFbrbsDHdZqaPwJnPQLZ7txaLWSLuawbhKpknGtWqdCHRqiM4nW9yuk8KkFi5PjkxfuZ2tVmwjmgRYh1JfWqMa",
  "key6": "1z75fEdrdQ6LF1D4K9bxuRohsdhrMx1nJdKtJLX9vEVNfHcf2qK4phzrsFXQbiLREVtAHxEasrCRVsTPos4nQPa",
  "key7": "3ucqEQSDQ64cUD5cVceBxCG78Pk4WMNbHvQt1NZV8HHwSa59hbn2ASqVug6KhpWNMR95ZXPdktvjF9S9DDr1K2P3",
  "key8": "2ungjEAfArRDPxLuL2fMJpaJKGNg6UfQFbyQUZcNKW2FKbTxYu1ZckMyYC62H2j688ftWsdimt8C7XWprcuZGyfE",
  "key9": "53FoouVwsXmg9QE37BMqtXcNByqKtszTd9Yk6FS4P6zk6N8Ei1KQYDQPeoxSgyTpsd2XUevsQDftVXLJMxg8za1j",
  "key10": "2gss6LQZjX81si1byr5dqZqMg6HBgJRoV1bSHkYmuhE9X6da6Py37p3ui6VjNN7pvCgd5cakGwDpL2EMx1WWRZnS",
  "key11": "41ggSpJm183wurKDiA2iEnSxpBi2CMSfeeXUJKrrcHN5UNZw3gbo75LvyF2LMRvVxhTWfTWiAkbcfGuPbzmtysdT",
  "key12": "2PgksC8LTa9fsFgzXaRrDT4LWquM5oc4MkqyXReGXaLYdQCzhqHy2Bh8rFvgQ4ZQ2SzZn6fjmX58z888YQEk9DJ6",
  "key13": "3qPvwPuHpsENuSuspEjpDb9D9i6hhg3tTzAKYiZudSRk42ZnTzFeBrUaich6Fs1e5jEkFFi1GN7sVpTFnhJxVPiA",
  "key14": "e9KpMijpkfgVjGMBKYttVzo6qpkk7tJBjfxwFbrwbasWW7JfE1NQKyULDHgU7kKhNWYWiuTJ79bZN8UHvun6a1t",
  "key15": "4YTHyczkT3c6XJB6vHMJCtWaTZtTFoUxJrceEFNzgKij1WEcn4KwYE5JHimC5GhRZbZZfBM75wTTyB4AsFo9BV8b",
  "key16": "5QbCnTT8bwfjn7UEKjbAq5LARmeav1E7try9BXfGT4b4WW4eHXmNKE96dGzUvvtbtTfXmQjqXv9Ug4DrxLiMuLYY",
  "key17": "2uwng9hBK7jPCaRW9vyDvadLf9nxgvQn9WkGGNqm58wmP6MEwX6mqoSJuorBMxZ9e1YyGbVvNRQA7Dwk2hKvntee",
  "key18": "oibCwotPUmJqLmfMhtp5n6iPt3d2hAVigUdnEscriQiByg43Ki6nHBix9pVyvGCTsio6vbUrpHaPVigKWTv2W7X",
  "key19": "3a9njWnVEtMNFt93o4s3My3XYvMx1wf8PmbthcNGV2WAvRRD8PFv1yuWBZFTiRSuXaxdRmEJkPTXHtyebyjdPbMG",
  "key20": "skqTBdLa5sU7YsEDzD1rG7NrZRNEzTFxNL13hWinn9ySESFKD5b27qXYjR5c69SL79ukKTeVShv1bxNUdD3Z7vD",
  "key21": "26MQyBoyNoi5ThT2P3ZKp2gN91QBR25FaAQupxhTs27YgTQVFingvhaimDkTMoCWFSwv3xXPTUocAEc54HVo3Soh",
  "key22": "5hQXspeksuLwoeZSJSEej5X6CzKj218wThzk8uU7UnCdBVUsgrEoFVaUqP7n1eFaUMHDSJXFLBd5DzNpo6sgNmFs",
  "key23": "NdhkZFdBo5bRkVNardamax4dpiVKDw9UWRJmpuJaaByno1g9x2Td1AoTenRurbyuwsTWZivxVTLPjLNBJ7bCHhu",
  "key24": "2Bj9i6RFkL6iWv6rqSYnST6kCmyYyMpjxSQ3Jk8PkGBQF2e76bw1vxhnZwxJBNX5botB8u8wzJZZGWRpCGsymqvg",
  "key25": "5Bw1TAy5JE8UZKy1XKtAQyc9D8HFXKQnSn8RQoYDbSKBJwZqBAV8x7k6CYYTJzsP3Js33mFnThdrRMboc9LADQhU",
  "key26": "4FE4vCK3PWXRXpwRWAoCqKa96ZRnPr1ZfENGphuf2ADtc27YDkBx7SoBhCYgMUrRQHFwEMc8X452oCaNsFahWta5",
  "key27": "5AsKvwGqyRYL3AM8KRFAs82HhNtkLpEdqobZweFwRkc14bnx2oxVJrxowmyRLSYxU4zQuxsNmCPqwm7gakta8pSD",
  "key28": "3VcmZ35M246X4PaEhJPMEPNLgUJjgPRdiv46Upxr3VgbDhhD15iVo79zGzmwqPMYS3bJPFFjnhRq992WUyFjJjvM",
  "key29": "4GPJDjauAA71J8ykx3BHRxgtz2dUQRW3iNbKMck4jyBe7TQFT4VY4Wa1759BeD3tn1TK3k6wFfyLmj4mm5rLbHH4",
  "key30": "4C9q3mKuSM7vz353zJDYugK7SpPZSSSg3BmDah5WmtKbEn2BSG7hGCr89aCxzH6WYCbVyKjEuXYhUKjv6gQzUsJ4",
  "key31": "WCaepDYw8XTYuSYftvKCRUCETaUMjEaqwmFDpaUhk5nfhWbTmoaHxFMc74LTmNoTsMkQjrF6eWmFtszbZ3gkMTp",
  "key32": "5uXBAFZDCWAV7csUvKRRmirs7tm4ckJ3quc6HpHaDhvfC2EbE2ssnXi4xGDG9bKPxvDJbz7zhGrpMYkLwJ3tfvXq",
  "key33": "5XaXFhfvNgvJz6D3cX1xiWp2v4E7CZXyjq7FHM1qXqrcAK4DboRyxRVSeRJfnpuchbMUa3oqaiKLh7Nme8ocLqLY",
  "key34": "2KstLPmTuX6avrGJTBMPz75ra795P4dsw5uRiYhmjPRA69ub2bXSoA4fxZUEQZLFCNELpDs7UJYn1qc6L2BNq3xZ",
  "key35": "4dbb6bcAbkvY5uSVKZNRE3B7Bs8yQx3zpo65539o5UWSRVXMtVqUv72jPdMvJmuEzEzLLxGYr6HhutkpQhpBMGt8",
  "key36": "5qtpQibpp7mRdsoKfmRUAqgDNeqvLDh3XWtm3Zqa4FAmxD2mhpC1zsmSjFuYqWjXCoxH3t9aT63YJXQwzqDyN1QV",
  "key37": "T3DxMXc4BD864vMmvfxfQuQ43tsTfVzwTRdeitdbeMa8iX7B4NgaA1a8Jr2DLLnnizvVDErQQEenRA7wTGhq38e"
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
