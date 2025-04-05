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
    "xDvecfUumfjofLnja569hiqD5Bs4njtegaqjWCC3UeFNm5EjMsX7hCdnM9UKYbpWP4tdEimateK6AnTUR7e15M2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RZrctvAy944jdc2zEKmihtPg7msXxeA1MqVXXf5h4qVu11mvpeCZTr2nH2BJX95uSoV7Zu6CXuCVephEC2krY7",
  "key1": "4wu7kVfBorr6wG55DB3W3SKDMZq3VZ8z2BSHAJc6Rds9DZ69TeZkJYRA5qUcG9bsqC9Yy7rWGCZifLsJ2N3CRGmW",
  "key2": "5EsxrxGDKHZtLa75Lt2LR4ZfcjsFryjnWFW5LXSsmN227VT8Z6kE9q28DHhbJvknxa9ZZuJxi695UG75yB3Akx8W",
  "key3": "3m6DaLDcdxkxRX7qNJ9j9foWqk2kuUp2vHS4eeVSmtVrNxj9dPVDYS7Whkyc6Lrievot1Wa7UrcPcjU3giYei1KJ",
  "key4": "4mVohiC4eUXjM5jbitht9kLarsP1skReA5N9FF3NGcGXuqzfGhkqgB5Lx4QGJbZti1enNFQszG65JJhyF65PhDVS",
  "key5": "EkNSy7h7X8BrXpAaqVuggMFWwnrqLcCFaYCKzY791JFpEVfeX32HdD5etMPSYotQNLkS8hh3MkgN6E4URMkDjxg",
  "key6": "CppYRLypoGa29TNYmEB5N4ayrfp16YjPPWgTJfhphQATwvLWnUcEBQsKL9oH2fqfUmzDL3Sw9CZBvqH8RmeM3Fs",
  "key7": "2szU6Arw5cBfTUvb5XsQE7M6WdbWShVJsS59FA46L28iKqyT1yfVo9zM2SFv6JbNb2fUYT8dv14voZk4MFbQjECF",
  "key8": "3EQzK72uPxbxs5NK1C7RtNoGCJfBjCByJsGJWHc38AeZ3QDy4BtHx1TfD4s1agX8oKMG65Qj3G2cGPm16zjUADfR",
  "key9": "PmN6efkxQQmEXRdNxaRcn57uih4AcWPsYKFDr2ncFg4gg92hXq7NYYRgU5GNdCECumdV4M8ga3EzpDiAgXhq2A2",
  "key10": "5X5phxhqAa5tgEdYGoKh5K9EWspmev7C9DfCgD6vGjeHDUhq6V4UwPdDvezqZUg74T6zzgiU7oWBaracmKuoBZ3F",
  "key11": "5w2GNbha6ooEsqKMKkVzG5UmD9PktumBQJVjsKNE7CJbgM4X16XQuswnzvZserRnGujvKMpa9P7YtsFNNPtzEr6Q",
  "key12": "3MLSGLxo9Jn65TMEbEqSVyQCs8KUVPt2n7DKRwYt6uZffJooX8gETPQ6Uqp5bj1DnYV2mog7pB5iNVfb9wDfBLBN",
  "key13": "49gvA4fYV9hCnTSQcnGDm1uCNH67HNCh9o2c95FiGVYPwNdKd24my4gaCTTfZYyTt5YBG3Hn9wYVrJwZqmJ86Qr8",
  "key14": "349QkuFoXpxbXY5h3pCykY4G1uMFW7cyqDucXGQnzDYBUFLN8vWs26ipRGWewBNTAp8PM8bWK8hdHJjVSbTTq61W",
  "key15": "CjQzQCC62wJ3dPj8tWeNamD917iuy8BA7aS9tkjELCMx7p8SKqDofSCXs5y83KdVbgaqoN1bfHffo3YDfsTYj97",
  "key16": "2xbhbJjxKuFyNgmaKXLQtV4tt2qBDq8zTZCLTtpyf72d2H4yrEAmkdrV3ZP9Eyn3jmMn2quA9MWFxs22v1jLJ8wr",
  "key17": "4tk9sNF5J446RePviCFQ9KX1AtnN9bwwNSm2Jek4wJuyLD4CqzuCHVNYpZzQKKn57zcxbwepZzAaSaJJLZRyjMgH",
  "key18": "2jHDPXiVSCdHcKWm5vEMWQLL6eCSSHFV5Las6FBiUQpqVapKGQz5NfzEooYgFm5dN7zs3oTRLcezQAyQhWntx5sP",
  "key19": "2hcUUn3rm3oQCV5rBkU5oPKerFUy7xQL2WQMWcJjLCoiedJ3KPaFwc1M2UyFeNXFt1fYQQHGBREzAceMikD1uaDA",
  "key20": "3kDLifmhx4wSGfB7aMP5ddyrcb4wbfghsRXGN5RDMQwv21KvBbVP569cYVk9NvsYDkFLNNBQPQ4DiXmkQp45bM9i",
  "key21": "2oxbR31XnCe8g2YPEo5YvZkwSAsCjXLhBSZtRHVbfDSGFn1tZVaJ8DprbAxvc58afLgk5e7LcgQYnXJXFTMnHABP",
  "key22": "5v8JYCM51Apr378zeqJgurDxdCXASAS2TRrw5igteNHpZc3YeydinT9AdtaC7RSYJbWCuavGWzpKfs9Rc9gaz1Sw",
  "key23": "4Ti159DN67aVDCgFnXEaJvL78bZGTNaryqWn49VqbT7ixgXMgxvWCMRs4X88R4k1tX5kGpkFopVz4kjKwft9UpM4",
  "key24": "3euva5w63FjAVuFzgHHgCzq32LdE9bjrsReMvAFkdD5Rp8w1Xp3fNUCE2nLbxBRVqebjVMNmiziL4DnHSyA3mDAd",
  "key25": "or79MXdVhAmsxipaWcqCtuS8bddS66Q6d4FTST8CH9oX2Pdx1LGf1doorYT5jbxd8V9pZQ7jjVXjsUaktuNVF59",
  "key26": "3nrMad3eUmhzzcprNEBc88H5pMnGWW2QpnzeJagURKw3f4hs4a351R7StXAaGYBt3ffzSgbPcbgN4eBi3wZ965xT",
  "key27": "5qmh24B7Ktz3XA4HNdjQjEKuNfcs1BdW8oPgmiB1DMYxs61TyyDNTTenRE9RxqgGC2GJsJSWBE5L6RdiSGiWgqD",
  "key28": "5JSFutH61YRT3S4zn867bcNeWKermDFoPSXjQZMVqT5Ug8NBFruRCpHxxzSu4tHz7kD9ntJuxZbDH8z3EC7NNA38",
  "key29": "2TtvQAzF4ggJzX13JexmrmXTLf62z2sxJ1EdGxTjVifoZ9NJxSoWiMmanRDaPvQgHGE8JeCxh8DREAHpozdTXgcJ",
  "key30": "4kvaybnr5bh45JmwQVrHGj8WSCLBXmXVcnmjNBwmVKjqNAHBhvMcMmNL77pTmMD9oExS5PyJ9QcTm6QSMjQo9FwJ",
  "key31": "43xtjjbneN83xEN9jLk9LSbgAbQmtivV2CvwsALCXvrpfWMRWmetxiCxkzGhcCoHhrWn56WspjbZ3AZaKqXM5YnE",
  "key32": "4Xq3VJ2gPuj7ywo2ho39fNSZg1EizsQftzpcqSVPf6S9Ccw1P4bXBBUX7HntWMb1MWtThnjKTw1XmKFCYLmca6Pe",
  "key33": "66JpAKhmBmBvrmaQXvdiXjBFYLAFpA2e6kXbn3FGHkjjxER5suDGNC4XGUN55JVT6dC3wxsrZKRNsxMSvL2jDAR1",
  "key34": "2vMFVVKTurEs5VhnsF5GXutFa2yLmT13BzqygvJSBPQeAZDJ9xXXimp3PnWT2XfDd3PYne3vtBS6seXKsFZ13cRg",
  "key35": "2U6CosWHuhdWef2w1L8jk7MvxDYeQEdT6emuVcGBzLg4JLKGFGaJApBEjrbqyX56x8r1FGY9ubRDUUUzairrA5NT",
  "key36": "2msonavAxLWQmB8aZUhrCKp4FfDfYCJLAJT5mHaag4TyVVyw3mhYohmNRNx7TcnfhDVBFiJ5GkQN88YynzsfZ2RF",
  "key37": "54Cgqxxo91MNGZTy9P7WcPDJ1PHYhxZWj4GqT7k7yTYb6DiX5JryXqS98sgwpVxytmy9hC8MMEs4CmVYWLxv2756",
  "key38": "61UDo6YspGW5erQzp4mfopFEB89QcSxipSjhyPritGP6svdNtuE6hZDJBm1Ep9nfiKkPXoebng1LYSBUBiJiSB4d",
  "key39": "62JCARVKUGHPffHPjm9CfayPr2ZuykY4xKhaSiTp5iCXTYvmnpiXkUBsrfLyDvR7FTpNnFyZWtvpfBhRy8RunosA",
  "key40": "25EVxQ8C8dfjmc4TjX7bYkkpevDLGXhKNSz8W598SruAJysi4Hw45xv3AZDFY9vTcu8TTfhGnorRSSkwKnDEWTcS",
  "key41": "4frNhWsiNzR6tHyX5NtDvcdncX7VhxdHVkqigzcTyn2i4p4DaajCvPH9QWvtDs5JryBhd6tqXKGwnF6WS7cha8q",
  "key42": "2SLYeWJmCaLVUo1LTLn7HUmK4NBQtszBWR5595SM9JNb14kc8PC1PZ9djKAZU2en5uNCzCUritodKtjA83z26AZa",
  "key43": "SB4rcsiAKPs53MbWbSFy3TmMorjc3GuJFMKiQkPRHyLQzBfEyUNH5PDaFZtzgfw2DRsZ1ng7fr4tRQPU5oeLcGc",
  "key44": "2WzgefYGvuaTT2nFM2YSuiwZX58oTKpbosuZyWE5UE6T1GVr6t4KMzB7fxQuuxiZuDN2KMcuHxdWrzjrj5UuJNsD",
  "key45": "Ba94Jg7sQNgzTWUJbi1F34CZx2HbzpqFdVxMgDdEiPLqqMmXujVPNePxi6snarkDCYzoWaTs8pznypGqdk53j57"
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
