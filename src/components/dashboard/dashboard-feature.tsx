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
    "wpCwXUqXcxhAXyUATztkrXFo4aKoLPTbR22wxFLMceSrqyzsBbYox3jH8FkVYvbHN9m3uohmuhTjhdVNG1zzEYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ofpWUM8B45aroQqZH15XZfcKF6E5r95yDCg6qK1VqYAWbGheod7xui9coBmCkVuAseoPUX1J8DKxhzqo8Xrms5",
  "key1": "26i1ajLZPfACJX9kZEUR4H2QW3aMQtQPKte8CHgkSPrsfno6F7L9TLpPADjiYTW6DwE6SLXBjQnPeNTHk7Xn5ZXm",
  "key2": "3eKeikb5txuxScLTLup6mkjYjUAbNNFfjVxrnnXVpL7jFk1QCseaizXhZ4s3tzZSV3CJhxStdUir9LNQLxosW67V",
  "key3": "duuCQPx41XFhkEmC3rdiXQhitoztigvqGdetfNfzYXwMVwBz4AMqGYDncNAJcYAkTPfxgWtaWFpFAPArGna9i2r",
  "key4": "3AhGWR42C173QpjHe1PjGf37YuEEocqyRPjZYkMxhBMcrBuGND8ctiJx5YcyJDWKbZ5k2UQjgB1HhGMWxPGFdYjf",
  "key5": "66yZy8PBbM8w2CE7TkV5jtAxL8JeWprVdS6UGahHWrQWW5tArNADNko1X7c284wHo17CUHukBjoE5J83hhoPXQ8u",
  "key6": "oErBBickBYDUyk4sHKJbRpbKuQzSpvYjtCgg4B4ZnKM6M6VU5mjLiSR9N5rp8QsdfVpZ3NNnCWuyxa76wbmQCCH",
  "key7": "4hG5ymNiu7dWauN7p7CApx3yYXMpXS729JhAsGBS72HNW9sWifJWBz4qfrVNa2HdfKVrZkKMSJoV9eMxTsWnq5dP",
  "key8": "5nFsVYoumvZiXLcNA6DVyN23kcPkXcZHWDQ6CcVs6XF1BcQWWfkeP74jmm5yVrg4MkDLvNnQKMc9uJMBr2gkCrNr",
  "key9": "3qgD646BNc2qsTHL4Epp4aApSbWCLPmbXYoRcm5ukecTRwMiovM4ampB7rLxJmo2ReMwXvZipHnpmyP1z1rrk3TY",
  "key10": "2DLL77DtkqWqXnQg8hmu2XkrrqDCc2FSwJKZP3xc61dgfNyW28hM1hNx4rcTFijBYdQhKCUh5GxVremh6sJfZPYc",
  "key11": "2wM52bCaSdft28wnfAwWi9MX7sP7kqT1Q9frfU1eGg1rwHv1SBvT3PaGGFDNyA8JamArJc4fLVrAMg7hhJ8nhwhf",
  "key12": "VTLqJRhtAArb5c5mVkpUKQB6j7RCMRLVAm15MyhgxsXjuGzTrXAirsv2Zsyu2Zb5r2A8kad79R9np4vvTUuQkez",
  "key13": "4gmaqxExxMeUeiyvfcvh1yRSuQUhn3iYNjUZfJW8YcxGbr7pn1twFpaUq8N8FM7wPqMTZpfC8pycQQ5moiq4HCty",
  "key14": "3cSP3zX9pgGUG4LkWqFFZAmmaHnXxKdRbEWMPeXA9bSZwo6u5FVvGEsEw99sddepa8DKgTqPDyr93JFeKHsu9nKj",
  "key15": "4phLvrPEa9oxx9WC5GyutFnuz6i7rujpSzEvrgbvmZdv7CV5zhKxoii3RmrDLurNyGnjfNFCdN8ThgUMjHAmboMt",
  "key16": "cviyWrrRcSuWfDrKv6fNWVPTQLMZDG7AjKKtxcpkhKCyrWxMLKtDV5d9h2Kh8M2yj6uQRvfKGXwEZSUAxDHrMiW",
  "key17": "57D6hmsSGY1ZA3QZrNaAaLR9AwX3ZUdctBpdNEUPfnJwjwTqHBSr2jYgHhahQZryBc31N1CV8wAkv1AAUgGLtKNb",
  "key18": "2a78LzayMVUxwamse6R3fBBqjWeLjNUEWBpBJF7wc4d6FB9haMV2JNCY2aBY7pmQhdnhPuWBhwbe7kN3fMGcKZnn",
  "key19": "pywKgcGBUgPrhy2L8sbD77HdAbS4XRtP92QEJmp1PjA6X2oWFpTmCutz9XFL71nJLMxc6kq5NYutNkxk53dfmuv",
  "key20": "hcvRzU33CBRaZhWYHimmcfcfTHqk7mPHHgcvJpYB7xznEhYBDPz5FbibYGmxRHPSP17L2HHWuZP4MzSH3Yio88m",
  "key21": "xrHerp1EzNiPnpwcFdCYszmctJ7CmRh6UoiX5wjUnB5h5sxuYB7JzKuF1CBdWHGKWEgQQThdyGVnzpCFLkUp9Ry",
  "key22": "4peFhCAoxNNxfXrUNMXPWVZxhyM6QyJRwRtZzFvQdWYMPfgVDzdSRyk5AewhCN9gUD1Y2S94XFCGhBVf8ituhtSC",
  "key23": "664QJcJ8JcQxYNZ35ASG9DXmdmeyTJqPSJrFPNTYzYhucaMWLzCN18ety2CFgNrxifTjFhnMuTcQSghhH91qRddA",
  "key24": "49Lsfr8cha51dHxCNpMmYnpqGQh2ruBiN1nYqh4rMjRZU8xEP5JxcLRWB5ULEKtovM6tHZQw4iHJEQnr77md6goE",
  "key25": "29zgcTGv1tZ7N4JVAYCbNfg6iQr2WAtgPjujWuhB2jd8RuCYrAAscwXDRpWYDP5AMbmwALHMHiGyaytZaScMzB75",
  "key26": "BaqQxqfP6xDudB7tzxfqTx1A4skR8QRPZNp7GtZUkN5MWi12Bk8e9JgYWySNHe4dbRyndiWDQk2L1vaYEkVnqSd",
  "key27": "5crRSQoGTRRNmfwqACJNqCXc6qcDLsaaHdia2JtgUgycB9dofuN1qpFVtvnjkGpm7CGKh6mbA9toKeXfQ36NSyqH",
  "key28": "28xspajxw6QugZZwg8LN4BR8YpZ6baz2kL58QBBFyndKoni6HBQicJsNHk6dYTXaSDYRQwHSak5UE3DnRm3kkD5Z",
  "key29": "3KRTBMMgtNgrLYvW9TeX9cY58eYm2CAAdeoHedeNeSTqEN3DTcjrady6kpzZojwoyMZSecEtEhuYqF9UVAGWAeLp"
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
