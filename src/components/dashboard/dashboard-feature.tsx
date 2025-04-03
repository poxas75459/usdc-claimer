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
    "2ZyZjB9oqjhMHeZ5PXwHrEsmknoUUfy5S2wPCaMjuYi4h5ZaTpoNazouuqUQFePqdStqf3TbSFDXC4QX9XEfQiqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwH2Hy89KTnRbqAV43w5EFELuciYtE5cUZjsCnkF2y74LFWDcxPaVRMdCy6ajhpQBqH2gaZKvHfgYSyu2RhYygp",
  "key1": "38SPdum26dceSXcGwgX3WM9J4dnewPmz7SoHe5wkKdqrAKea8GRbaRvf5VqtgKoX9VTq4KQytLd6P3pzJLVtELc2",
  "key2": "2DUzfTzJokGsKL5pxVqpJnv7bgA2pcPsQraRB677CKytdQZhebb4Vhm4LVoPRWrAsdQnntEwPj2DSHiWMSzk3vhg",
  "key3": "4sJiqvvhdXdFb3QV9AAN6cg9CiDxq2wLxNyS51Bfag3JWh4ZDMrjnGmZKF1oaNGfRB6HXke4f9ZTFpwgZXTnnRPU",
  "key4": "2wV4oDCaGyDydbMHm7tM5cTbX3wTxcGrgRQcBS9eRDQijfRTTfSEgZnh4gBrNKanMWpcDfXYknKdFQoxb87oRjy9",
  "key5": "36HoVhcLnCgbcSAKmZWDKMEvmezcddUtK6EWQ4zheC7piJW9kFUrQYcJuSrs2pUrPrBqS8K9jPgeCz57KuGnQyCT",
  "key6": "5YEdaeYvuZc5paA8tL18PJ31Uaq5dbYscbwVUhH8E4anwssTssNq63Ft6w4HTF1CKre4CEe9m6oLHs2eT1ir6Gtm",
  "key7": "3Jx6qW7GtAHRekBEVkGfctSnWTxCVw56hRBLHBBXq7kt7BTznpxc1meGpJZZpAVTxJWkfmgSNcRMMivm4yPt5stf",
  "key8": "3fFWLPbPeYCjxCrEGAz5y4hJ2oL3USthQ5hMFMBvBBXVNiGWxQueXjEkBdv3wgdKpJJpcLN8j71bkrSprDCzpwsJ",
  "key9": "TkZJK9CNST6WKXmYRX9tdYUFopxNmpLX6bs5skVCNTjUjqiHTgC57d86KwZmBwmZ8uGTFv7rKTiFJjXYKvCgKb5",
  "key10": "3cnZdp7E3hEqzPXvhdK5UfiKjkaN43CxNGvWzRNYfuFjWLdj9dibUFBCVdFzjwmVYYes5xGQyQdcuwTmddsiKL7g",
  "key11": "2BAq5NaeDbimNDePBPv1g28DxfmWzLLDAzrs6VX89gK7Qgj6F5HJbaAsVE4ZyzbAkoTWgzX2MsMqV9BWDtb23fPc",
  "key12": "255CBcSadyZ3BmK3uP21zSEqzgHZubcwa69fkCpiW7C2MMz2oEXBY4n633MCGHPYJeyNRM1mcGdegP7JdmSZQkpQ",
  "key13": "3397JZMa3gspTfGZwbr44M4eY44srkJ7n7jvpSLDEjUL2ftx8sqHJBuUVo4WzduspneFuEjbVPjdFsyADkxNfQhk",
  "key14": "wcHubRAs8v3qbqEKagqwvMi5B7zeHFkQEZpdg7viKieWTXso127qXGujbLsbabMeNQtnueLrUZ6puH64YqcgctQ",
  "key15": "2mNi4prjiv2Zm61mTfzJJ4rFByJpss3zi5NvXSvvpth7nJS2Xq3ZAqtVfPxHxiDz6uyvcASuzBMkrh7quwq1pbVU",
  "key16": "5Th8dT3rWaqwKMEef5c1PHkqy5UzJwZzZJxGfykVbikqWfPxmgksZ1w6H8S8o8UAcJrz2tMaRJPifJndEzH6JXLM",
  "key17": "SRcRMXo4dKuuwxKdVJmYcuEmGeSmAQfHesZbMTaiEyWmsginWcGFhMUbtJk2sLGWBi91ZkZVRjdZ5pGZJ2XvH7C",
  "key18": "4YmhiY6759N9n3WVtnP8Kp8pMkacVb7UXhkRhEeQACMtQ3uty8F8UqBnm56xejCDfMajhbWgmS3KXFi9wY63pQMG",
  "key19": "RLifEggPX3t5sB4YqZBPkAFSs69dGB9QEBie33zc1ekWrae7NiDDoLhRUuLwcX2wvnpYvGYn161qSr69R3ENU2j",
  "key20": "24fid3GnQZbgirVwAqp3j8uJ25M5AMnn1p5KYieCiUaDYaL6erprNF6RSRAmaV51mqYuNMG7vfGJbpHCC8ufK6UD",
  "key21": "57jdPEGBY51T7PEzYG1CyiF1aDPMQ9KkUE4LYdzjcNEUAsbSjEQZwJRs92roMFV1XVK2qNEtfPvRaakx9n87LJ1a",
  "key22": "QJF1rJYDUgrTdvbwuezmKdRQDTLJeGwbHXmnwAP2JgWMFt9fYQpJKvu93fP3xBRLSFeyK1rcbGpRXf6kzAFhwLb",
  "key23": "51q7tXh4gM6ghvpz3xEu9yE9cKPrW8o5ohDAvMf7j36gW6gceZ3ttzkSz6duxsRjaJ6esZkp6RUwDiRqFHjLKQRx",
  "key24": "4Ks81wpZeMCxbS4QRSxxgXEK68QrwxY1E33qmHFoc6mz7ibrhCeoTZ1XyqE7P5jokn56trhDM43khS5xbK6UyKPM",
  "key25": "hY8pbr55HMY1sTWuWmY9jNZjWchMmBSG6cYUQDu1zQa7ucsXGoLNhkcQCYeZgabnNJmmGJCh1Pi4EeeoYAZBXcp",
  "key26": "2wXP4hpUtwhNLTZUCQn9w2PFVcens5YMTdFgetMC4NxLjxG3dx9ZfLWFZAfmz1cxF2DYWApqt5bUwwKimNJafwPN",
  "key27": "4vx6UifykxgrZ1s3w7jqYpsqy1EkSiZLGgyqJpHvx52xuVoFPUdBviuA1qhopQMQ3Q5ssXA75VXsDy7g6HDiDPMW",
  "key28": "5aezncEt22GxoMo7UWwTbMjfCHycshjrNenFs8PkiW39pAtKfjSAgknyGzFVTKhQXQybKcu47RqCdhrskZH7xTaW",
  "key29": "4dx3jbnPyj7DrFeN4TzxdY3QeCUSXthAu1LDbJuXwKDLLbW3BFvb51h5au5LtvD2N4NJy9YaDPCbgoiN3gQE66R7",
  "key30": "2KWgJpqyKLopLs75VYugAong9A8pLFXjhxt7mB2as8A8saY15X9jJS64y7pvkYiovbvCS7RqPG14acv35Uga7z2d"
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
