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
    "2CyAdG1Bqc4Udpkmi7UiUqze5emcUD2rfSmuDe7ywDkaZFLYG7Dkr4xj83Uu3w1j8RP8ZcjQeGeYGPmQQeo4J2jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pPTaexsNRhq8NrsjCpM84QjnnZE4twi9vAJm8mpmRBCmq3vMzYG6Yu8agfNdye4o5dZneLi544km9PJMBQjN2ho",
  "key1": "4CGqqCiduTzzUkbTbGXZygumysYfnwFn91hpEVkProhnx35Z4kXQSkqHDUicgyGio6asYEV2mA9C9tdmgkzjwkjU",
  "key2": "5q3N4AnhjXoipKhrASvd6CK387MFtbbzDovTyQbhsimadwvaigNaZ99cZE4ncBuvfJRScYzEAz9TtBCYCR7EFNSo",
  "key3": "AYEwo2gEBpyhUeb6FuGyh6vnLXho4TBVc6qzuiyF1DYEYbepstFiMkHSQoHQQrTcAF1EDAqh9vMMhD6f68VEw8b",
  "key4": "4msK8aEPpLYmtUzo4pgVU3U4krBZu85jwM55PBmncxc8BHARFu16VrkqV2S7ayJpqFU5TLTWsrAbBdVfLR97Tt1q",
  "key5": "4HwKAdoEWjTdFcdKfQzaJXBTnow6bCFpHRB7yzkzWpncD9H7v4CtQWpFJYnrvrghk7EEbF6oUUbGqW6EiSnDP1tE",
  "key6": "3dgtH6rdneeWTm2xshbyZa2nqu1CLzdK2eBN8cqBTCpbZn1D1BJ8Rm29ZJw9z1CTuBjxAAzMxHZtnjJtLYyV313n",
  "key7": "62bbDYs9WXnNxztLXXJDo9pADQ2MmZ1xkmqBXLKpDY9KSMV4Fz1EwXwPnsF9zCCExG2Kd14x6SDuyYJmkz2gxuiR",
  "key8": "2bzf6a1bz6jmVZxTjV49BTgQW5pXhd1w1Jk2zLDArQNu6HhpBTQoWM52Sj8BoCjqFVFM9PZSQUNToYtfeb2oD2P3",
  "key9": "3Tyu9PDMNk7x3R4JWe5aqLS3gMxk4gNqYu6BCC7RtHAgnQ8Xf14Ppthp5r6LttzzgZrFYGv2ry6KJCHcE9RvhhVa",
  "key10": "HKLJDrFVjRbUFokijtZU3ujBVJVQky8qgd4HmnafsWjvsoXVXgx1MA6h9drG11S8uFcHbMo5boLoCnmfWTdiVcW",
  "key11": "5LBK7nbFb2dcP7juiPt3CBBmJaxoYVrcWqAJ7M4x54fhFKMwDJgkMKUrQGkUyhPda2D9tAQJ1cZ5mhzQqx4mT14Z",
  "key12": "3uFzxxu84NNTZb8t8WSGoa5DPCwJgHWM1hYJsG8bqoeZmJW1TmPKJAnPnrqi1sCPwLeAPEtyXZJKs3TJzhgMNFUw",
  "key13": "4ySh3Yf93EPMB8j9KSxtM5oUtssdARp3tCRCZcCje2NVgpWGaY5coTvCRF75GEpW8tZoSPyL3Q2e8nzTk4D435cc",
  "key14": "3SCeDSUasB6tzdAaGekZAF6bSsmvmyFicbQTpa15Z3QhPvFuTMY4mqNt8ZxF5S9JU8B6HaS5KPQbLSKgkpxNftKG",
  "key15": "3kGJ5FmZcog1H7qWC83qdeCqsV3TTwcuD6qh7kAizGCVR33cETLz8YyzJtCj9NWPVnY8zfQGrCBB2Cri3n4bDoRU",
  "key16": "4ZCJSQdvwemiv14SaSnQvkvJ9rqBWxvGHd8nVigSTU72p1cGJrzA6iZDtnd8QU2TtBFYgj6attu1EacFgfv6oN4R",
  "key17": "y8GnJNALdS8kmtbt5ZBbaAT8bwSx8Y2zypBRBeLyE6w98V9UB82rVuZfUsKPDnPJvBxBA7WrVSdRn8Qoz9WUb3u",
  "key18": "5xwWdj1K7PuqRGt6SQxHayALbGjbYy1TmQ36EbferxEYWX6uSUH2rnubw5choHgVAKbiKB8sKoV2vgUwRBSHANsT",
  "key19": "43oERFd9EtiMvBXdPHXCBttJkRJsHqrzonoGrP22D8M6TDySRRFRjuBhnow6qjKUtdmpsF7Ztjo3wS9vBHUxUmGo",
  "key20": "3FtFXuDzJJ2Pz1fS8YsCtvZgUomzk2mSrWrpZqA9ztvy7X21sHhdqUTuTZutnMsYYbtegHPTKeDnHANvE64qkc93",
  "key21": "utvzdspis6z17wzRhU3RhZpjdWxnYeGzrEfjKoSCZxEp39uSuvw1pLCJ2tNAEyuSXvzUe5YeSm3UEcu7hiJnzkj",
  "key22": "2RTAoihf4RQ9dJPgCSPNu6tHakr3VwUJ51Bi5zMkBKR3nBQE4FAbCdgCE7MFC3HQ5BELCrvvCpxUZxknZsFFy5MU",
  "key23": "3Lh3heKVThAuaL7MWxS8Ki68vTeShkJpFFRrJdJtjHdWMDAS6URQneYy73vf7DYEt7xPM4ePgTYCqs9p4yQpYuTt",
  "key24": "2NWMjiLC5cHMzzqH7En1E7hov5NyFgUfbyWNBDxrxYNdetRuPmB6em82wDq946jDJFve5bPFcaLVv2nE9Y7C5VUX",
  "key25": "4Z49Zeqo7r4Za4iCMWUPCYhNzUwfgavzi1EtExjyQjpQkrXFnzTDJdn1VU5AiR59Le6BdBN8ceyYNGePjTJNixXp",
  "key26": "5caiRSr2wvBgwutckhmUSG28kPjLFVEGbU8Gc4B6b8xigzkWFYs37TW7iDferakTXBsCYK6FNgvbMdXmQAvhSn46",
  "key27": "2dE3LyWGB5hg4UixMhkW3BxvbdzdDk8FQ7LJWN8cHGCuMRvYTcBPyt5wrtuU8QW96HLF7ZZ836tusd6Zgg35n6sD",
  "key28": "42SQDgTrDmK2kQ3XZ41QteAKkByyaCquChQb3HcN2g7zZyLs3pMwEa3qUvz5Yxdhy1EN3ugRM3tWZ8GYksrt6Gnp",
  "key29": "2k26XiqZp3N4aRf6LkG1V4daQ7PpVgA7ADHesS3kPehj7RzQmYfZY5mGYwLxDgywZewwXvwWWoz32PGn5bjE4JTu",
  "key30": "dee7x3sxRVcX326QHGRAPxkZqQU36H7sZvYkJeF5ckTTTAhpp9Btpd23gGEN7NxS9RMxjKcQB6beu9VYDaBMV52"
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
