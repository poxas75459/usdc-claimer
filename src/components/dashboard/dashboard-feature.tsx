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
    "2bsRPCSDa4mQPbRtKJijk7x8GhtdZLnDANdyM2y1vBREKFsbTYouMTBj5Th76xw5Cmx1opvPC3YbpFWTthFnYZog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAXxfNwQTJp3sTpwPePwEPmvg8LJFJ9NAu6e4GkDLRihoEC5LZJUQiWEaV1yeAsCkShcKnY5w6h35QYdA3bDYLE",
  "key1": "3HqpRLf7eidQLvQYLuykVa9oQ9mLW2p834WPRWkJzXs1hxe6MDdcBjtP841d55ATxBGCaQaC9r8c76WHvRbUDJyY",
  "key2": "5B7cWzis82T9KhVte3bt8FyErt7FCnu1jzEweS2KFrakDQMgKkGnB4xP5TZpJs5k84HdNoTpaFv6ighGYUsR1hdk",
  "key3": "4ECW65w8kL5zRSrVqyzghWhe4kppTFUim4aMb4iT7HLptGWA4kYN83Kaue8XvjKiAqd8NVPTRLgiNJWK58VXMVDP",
  "key4": "3SjK7FuRiMi8astH9hM8SG7eCh1r9wsTLjyskhMk8xUvQKBYJbnYjeWo9cHpHB4wQ4LSG3Ar5QWLdFmonu59589w",
  "key5": "2rV1EnWitSjxikKqWtjxw24V1GLhE1A1f2JL2UF5uSLhcDhJQtk7HvmqcRg8wFimVEJTXLSVxeBdicBrjTE85Zby",
  "key6": "5X4TVf3Qbx3hSF6JBwHKEk24LvATLj57KLpWmPnCeUxFS4nGrwbto3jhYmmk2APD4BDtgokJEqLqqQctR7s1Bn4k",
  "key7": "f87JHu4xEbQDgdMZhZSvYDoxj2LEtdUydZCdCEWNDYqJ45mYddnYigdbNBegzR7FCT8ZdB9WT5Ne9pQR79srUfd",
  "key8": "5CLzDTP4AshhtLmz4M9zWvme3abEd1fdyAb4uPN77uQ6Ap992o4SvpK1ncvmeJ8d7haF7it6dUvLEsFJLB3qNqP3",
  "key9": "3cbtng9AGj9ByhUimqErWypvJkci4toaJ7uJc6dVYhMpDaEDKbtpM5yFna39fRejQviwJ3SoqnxhahEAfk7kak4U",
  "key10": "3Xjgi1zDGg3i7v4HkySxAD4xCtphbEv2mCPR7d6S7kWPrE1uzYNRYANvoWhUU4St62YaJ4MoNBDuP1Do6SUpX4Jd",
  "key11": "2PvCMhoJ1WJKY35ebNEFHppQRNnq1VNba9WUuwuPkhjN8dhBXZSpBiYK8xTJwBsb3qNBknhLDzrZyZdjjSsBV4wr",
  "key12": "ssgKzLs1mFTfpz8YtH5qv35q2A8zHB3ZRj94AkrVza6cu3L3RHY8Ws4PCYTW4mqoYeUVXQC5A5uxeF2TJVpCAEg",
  "key13": "2rzSCmvNeofkfBoUYCbfojxVFXMDMMWnfLRigXP6trJWiQUgcaJGvPA88jMC77RVtCAfrEK9ZhE3igbHApZYoNCW",
  "key14": "4JpH4JsnWxGah65Akr68QgPuoXkMynzpz82zKws9Rs7UqbEhhi5XMMZXNbnEJczWH94pRcxjnvuWyMEBXLVoDkVk",
  "key15": "3Y55Mx66wmZzhLbWzxsJCbR25FHof7Tiy6LdiM1u87zjvzPMdh2oCibPQJtjDSkMnBFjCnXsg3WoZsLrDwansHYe",
  "key16": "5ajCks1mqtNo8X1uSkGSrsz8Bm64ZKujJfQahryHW1r7r28KoRqeyL9gKZttDeyb7zAy1dBXm788zJnzbbgYCiWW",
  "key17": "3vvpZR9zKqHTo829vhG6yPJyaji8fpnpzcoyb9KvYnkbqKLzvyVwmjmK9itqptVQ6EH7ZyhYjJW76NriZ3Fbj5qS",
  "key18": "4etsnw9yacbaioaXXJjJHr1ssGiQqQDTKWaV8nNKqdGjiDFexXFfnVz6xDcfFSZ8JDKvsd1hfnGL697S6tPuqBH8",
  "key19": "UUjNBciwYG3UcbhvzVSS2tpcs5mKRmKZ5iL5Ybx7SP25qtYXP3iHrkNrLtJGP9FqgNNxvao8sNSH7MyuqEzaLwZ",
  "key20": "xVNAMYXz4AKvmmTiizP2aSPWpyBRkS2qjN8kytebgD8mPSUjFo6AMyGRwC6cQVMxEycekkLnfKn1VuQ3Axmctr7",
  "key21": "BPMLoScSxAKfpD54gZNMfZvKgRe5trkuw3PeoamnwzDWhnPUpHN6g9Vp9Sjx3nLJCh7HjHRXHGNgvrh1XK9SjZ8",
  "key22": "2Ls8wVKLKz5NKKEpckGacHzbS5ji1sPpTugSrizgS6emGGqfdtFW5aWSj1mo3kHHzRJycJNgj1BNzxnNawzj4gsi",
  "key23": "44Jh8bn5Vo74gYFJLjctEb3UPxx2wwDt38GBzkqjGtUGMi3zQYwrBbhQgV9qz7X1cvi6YExR3QnzyxfMUMSTib9B",
  "key24": "2HExYbTLLRAjM4evzcxXvHWXBtpvwBRQ1xBvb4bBprFBkYPHf1wBmsmwFoXs9nmjbaze18TJ8gEWg5GUbYRwf42T",
  "key25": "4RR51hpSSuzdFuwNyyAmXp97BqP31iejcqRHCk8ct5XV6YKtQbbzQs5EL4Giu2Wmr9MCexVrqrotjmhu17crubqw",
  "key26": "3msMLEy71RKbcJs7DBCno9p3JrMSrmVyav3u6M4mRN9vLGzyAmiuRYUsfmzHFNCAdLNRkLgVaYFuZt2t7PTkxyPw",
  "key27": "uw1m17BmhZaBa9hJbFkvZLWboCpBiatZGMbNsvyAgdJs5URHJvdskv5wYtLHdWeNs3rPs6NceYxWkFYx3Pt19HV",
  "key28": "3LCycJTTQwujsgWsMPFUQYZ1rPj8H6WpjsB6yyikhiA3kpaJe5XQ7ySaUDG7q7nRPuwRJJHVWWDocuuoudRVEmFJ",
  "key29": "3RnfWNdhdQ7h9HgUeg5Dp7Pcn6FGf2xC6dcexRWTsmUNeXYfyZmqgszCnei9AhEhZCtCbq7Ti75WeHwi8a5AVpKj",
  "key30": "3pAbC4d1ErBGAEDLGaF9diBpnwwUeQ4nuzBz2EUpcopZXUihHuiBN2d7L5KVmRchBxYyyHxVLCnTnh7udwHDDn7q",
  "key31": "Ye1STYfiYLhJMmLJBrKzMNQBzoN7q6zwqa49x8hQzssoMMiadf4BUKehUMvbnzQPSdBhYmmyRWda8hToC6HanQF",
  "key32": "5nPZmnM7dYRsS1KhNPSWLHu9A6SFuZQrpW75XidHSHRYjHRyhkgvXbVzHx9TaSEtfTPXQqCREViB7YRWaa3zFaMM",
  "key33": "314ZfUeACjZsDbSW1UQZ5jagL37gHXkYHdg1D1G4SiaSWaMvbPNyFGDuV8AtzKHnTK428JxgW4Jq4x8EEou7Bsdv",
  "key34": "4kmxmTJ846K8JzWQGQuYZ7FVeod2UCgLKTc1kJETWynhVDMjcmcE8w6NGyqX9xsqfb5Pb2PXib1obj16CfPGxw2b",
  "key35": "2QdH3GuPXutoenqPHmMGQiUJkDAsqZhnDe1W1cWWZVDZbfDk3WBbmqnQgyMGiKwwnGUVCVXKwJWBMRGQ6NEAoRNY",
  "key36": "55yHQrbddKafD2M5KZk7E5w8n8yUHb5nWnBsUrW8iCw9qttJwQYdY7suxLG2PiJGHh9k85VbXQfp7UsqDQMN3iwD",
  "key37": "5oo8nDwXmk7V465wXfgrjF4HifioT9FJJRDVUGjo1ErdyjD3Kz2RWfDbBhcWwRh3psNF8y97oxeJ3VjZGtwNvm5T",
  "key38": "2NRkFrDoNo21uUHN7uUvNxmosuVUUs1gFZQV1wy422sgnPdViCBDqjt8tnGWeHy2UJrKAAMBJCg6543hb9jFX3Q1",
  "key39": "5zoFmBiaKGUhJYBJuXvjqc9nDr7HEYNZCepAfnDNwXUN2Z275H4mfKdhwDVXwWfSckpes5T4AQe6z26QewpGYXBR",
  "key40": "2WrzcYe4WDUFgDjYPg3TnozKi56pBSFhB5FEPj9jbzefYwQEJQENVMXbieudsTCASpDgpGMCX4xK1AutrfHTvnEr"
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
