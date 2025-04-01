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
    "2Epf92jekjQAwcJSGmSGrFU75KjEeWrn5Mib4ZZxnQntem3zMsqXdLmfvLLD3LVEopjhADqtCeNNKtwqdh1TmTAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxQ3iPMVi5UTndc77hHLYWCWGEnEfcWQbVPkaeLm1bCaEX1QdyPEjULNp4YEtnrRdHUxprzHTSYLBogKM5hQ3zZ",
  "key1": "3RKsHnGDArDgtfAcs1zPE4iXCt9bJQDoCJUnWjc63Xr81P6ZB7vgRjjCw5S4RXkQMD6cYcnNU4bcC4Cbmx4T8Wi2",
  "key2": "2oHPwXZdocP5HvNc7cuzfpwgRy8j5iRocdR9KcHXpaSi5XdDEBoeN5iEbzP3KZF4SesQtWhMpLnbFUxxryZybzVt",
  "key3": "5PtY1a3SJ5hXESDrZ1UJVpAP72Q6MDNSSHArRVRcwZuNJupcqCJ4UnWF1g3DLyK8vvAELWn8pR1RrsZqqyRG1JD4",
  "key4": "4zUb7NQcT7ABRWUhBZ4z12fPUUKVmSHhCYfsP2xk9gPAhM5ZTEyd4qNq4T68nxrjfGvw163MypnGMC3wfGFbAAex",
  "key5": "5v3WxL3JrFcSzbV4G3ZS8QevNDX5oD2PJ2gtNSHabcC2zBriHwkxvDaaAbeNzbHBejiRfwny8FdvuPeyicYtF62Q",
  "key6": "zuxxxyzCs5p2ZBMRTkFkf9CvKBM47wsuPZk5SLrBvwddCX8uriYPNe5vWKdRVJqVGqKN8HcRWJUUpQecDmuxXBb",
  "key7": "5gQ5rBaBh7vG1QfXurtsQy6E1NPKpb9RnqYtXYLj9uHBrQRrMZbnGMsrLZEKxCFYCu4ZGFDjubmt29VgfDcNkVLn",
  "key8": "3R1bfuU9HRMYiXvqkJxVkK4uX81nWsVtc7UgEZ1hbTHx7C9prJtExeky2awSS6gAw8MfJeo6nmuLbpPqDTiHR9Hn",
  "key9": "5XHR2HSUxUM4LxqpiW7HLTHxAwdMaLyzMKiUZAX2XicsgJV9SXotG1WamUDmppyofMa7MsLSngyKRwifgSmW3qGn",
  "key10": "3NZDapcnXCg2np7ZFb3HNnNstxnYv5rca3G9n4es5DJkT1bcgRDCe5X2Mt6SQA1uVbFwn8XgPkvK8LPkDYH6apmD",
  "key11": "2ztCnDWaE4p7T7HcfvzDpNab32gz3LNJLoZ5xJWmd15FHK9HMgHNmnu7TDcbyQhKrDeDD1Z4W2jfzb5DHR6BYWAs",
  "key12": "4oiH17hkcxfzjseVFVUEAHtxsKh5CaHonLdq29ZiMnEE7fEV2D7wzwzbDXn4CwDoEHHp8RyiJBD7ks57Vf74wQf7",
  "key13": "42GJayc7PRBrubnfQPpSYi92W2EQwoKfmuKMQyWFXYuPdBVcq59C7keW213ffw58zQUAqbhQ3rjRtQ6A8LKNUUnc",
  "key14": "Nps7BQe35aznoT33CDaoqL639j57r1q5oGUEwKDFCT89cmeXnj8QwbU4uLhxrDefg8n9EbFFKhjmyJmAXKsJWX9",
  "key15": "2BEWgzk2BkwKhx8fmRvfsaUoTyZY9b1LmkwMSwUJ94xWdbpubJoFFNmVeqrCne6GzqznSSctV57pM7urj9PhzBaF",
  "key16": "66dzYYTqzLTsdWAFaB7kQtjLaqdDAuybH51JHbqPdyP8QPXNugZUyKnKZk3hmy4bGJpkZTMiJkPkB4R8k7xN48Ln",
  "key17": "oFXjxy2u1zLkEBTSxiayFJG3DbDwbSwgu1eno5Cgxrhf6ntJue87Di72UzpQQpXVvT3idubnrhxxoz8b8rm6R5E",
  "key18": "2p4oSdZW5spMzRuULnD75pZTaff7KAVvwyrLNaY7X94FfwR8KFSUNPU6T1guEdBZqqdn9KavFk7H4JEGimHbRtAv",
  "key19": "55GzCMBr7MGQBiGLzo2dwDZf8z4nMhTiwFetq35TyvdHHi9cKBtBcG9q3s2zy3CZszv4sb1LWyTSux3x8iKV4mDV",
  "key20": "z2aqVux9xX9ySc2RqVxQNZKus837AaYTkSt6fZpbK6P5xnxw9Fv6CxMG5WJqToREncq1yvRLvjLvE16N2nGwCdb",
  "key21": "3vUd5BSybJFRjmc95tepyz1o6GjnAQ24rTPfzzhyYFVPbhdCcuiFUss5nJfpEP19KmbfYviXtuDSpDHh7ATcDSVR",
  "key22": "3LWg16iLF8ar924gTFP22DGrzpzytoqbpkHCpkhTPoCzAerrMNKdUqEqeHGpoqKrxzMTWaDTRHanvynhnZYwxhKq",
  "key23": "4av8QiNfuNecpthLy3GpCFJHn5tCqvFKMwonCrUzkNS1Ty9Yi46KNfnCcUXKfEGVS7LsfLCKnEibgNnLf8BnPN8h",
  "key24": "Y9kJyATXU6ZAbugaY7cgE6z1BhKJaBQRjVNyDSe2Bbx3StPbXxQyNfmzy7wuDon84RgpbCmPrFm2PYqx9deyoJA",
  "key25": "6xpPqStFmqdQ27GfUS3SnN766jrnmgC7F4orXZ2Xs1MZubeFHiEvwBn7hFHhUQpre6bPiyiUS6pt4btWPvS7UFa",
  "key26": "2VyFPctDMHUj2P5fDof29xCuUTnywJHVqM6mripG3decWdmtMxGskCrf1aVGw49Se2WQucvxiZXuCQAgmZJrrCwa",
  "key27": "3BRaEbzYiD7vQD4PSwJsaC5Jzs8eoU5tcgwAKR67Sh8NM27mv7gLd7MYYMLW4V141UrvuS5upr7yhUbLkThizCYk",
  "key28": "3DWMsaXdV6bTjidhcjrLAnpW4PDVfPLBUD51kiEjD1sw6t4SkDKyrFNHtTyQMuprgL4aoN72AucC2oxPJv5SwVgr",
  "key29": "4wK1YavALj3mNscksYy42ev2u9AvdX2pqHnvJU4soEw32M4U9TcM4y19M2xz47LL17iNBR4hahvvTknR2r2V5X3S",
  "key30": "fgnB3WNi8aBPFvrigf671xvNXchArW2kcjPjZ8Y7dVbZgDnWLUzGYkkL2SEBh8hKEuDpAkk9L1zBpGQzqZwMHvc",
  "key31": "3ftGgXWvre9fMBZLFYSJiGx9EK6soi3BZRPK2wj9sFjBhGEYKXLvaLYx19wypEaTZRDGThvJiD4rjsXrnezDQ5Qt",
  "key32": "5Aq2AKSUKDYiy92DBSPSpsp4jvsTRdNUB3xmjskfNmmbJwn6YcuXNAwJQm9ke8tdAQh18wkmsB3ysoQAkgke4Z3u",
  "key33": "4P1DG4uCRyYA8UHmXdKPERfDhXUPo7GJ2ZoFwbPk1bLyPQwkKv16ujr993SPaUwhcz6K1Ecn47zLq4pA7qZUsAko",
  "key34": "NZhex2dsZs5Uxcb1MyjM945cwk2nCLKNRtK6Jx72LMB9t5nYjes4jqNRVnTyqdtC13ZFKuNFv6Ko7fmGWHtfiBL",
  "key35": "5pxGNDcWRxkJ1J4J13hcbBefLFQ9qXHWxrd2tURXPqazd57r1hpu2oHYYXLtUBLFmAKHeTKiCxoifYeUYCUD21Ba",
  "key36": "2dqDD7nEUE4tQJhbceMpnpEMcMb1ZLw6v7txWjW6vyRmjDtvSERC3X4m15pDfLPijHvoRsRvcZynXUhG1xtw8LzQ",
  "key37": "5omEPmvejNNV7MpFPUyvPMHzRgzEmrHkAuRUTb9tuBzMhMSchkKZxp2LaaU9c8i8v4jDd1Ccmy4aXvdCALpMiHss",
  "key38": "5tw1HiwCqtytPMpxFcz4yybg1iS52bUCyr82E5GLigSUhyxQJ234u1iqguBfAHyjLqeWmEEQvoA7dPSvwthBcw2Y",
  "key39": "B532sqLMXdzrcWhNzniMnyk6rsBQG4hGMSfaBX2gcr3VYPrnSshLGvT1RbfqgqAX62QcGBEDxEBmdx3874ji4VF",
  "key40": "4TphS2GuyYfNuFxcnjH5aNVmJ8N1jS95MdVda4XzC8Jpre1dfwMuv76Rj7172u5kcFd4VnbErvF33keZ3wgBgnhn"
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
