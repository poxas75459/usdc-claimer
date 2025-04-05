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
    "3vXP8eCMTpkZ4218UUbuekuECAfWxiTieEuEU2yJ7JUv15HmfKiGbPHiLDWHkdVXQQVpybxUSGHm55mUfcvFaYqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VAPZ6wv6jNb32DkzmujC7xh4Tk8uVdZauzkVBEhRpA4s3ENPSoyfsAmnTpn34G6dSr3KMj3HEc2G2mKFSABmBt",
  "key1": "647eLMg3qeQNvc5adu2rU9cwZHQw54J58j4yqvH7nfsLXiAmsPRCyjGFbKvKU5knK35VvgUvg8wFtftJe9hGSGFh",
  "key2": "5ux2SBTh7ksdprvM7L18QoRKao3iKueFLsz38MAQJMYHNdL6Kgr7M11z9eg3NHv3vouGoNrKKmxHgW7s4RFfSR4X",
  "key3": "64rGd2yCLYYP8JJpmy4x6aaUz142LgkcLCMGcHKmi37zedovB5HgY7RFH8ndXwBvX82sjsr29HmQucVXiK1bRBLA",
  "key4": "4amUguR3gvcUAvrzzcoPdKuunLeHA61DgU2eKHfnKBLAxgrNpKqruyCvb8CaGZJkwAVKpqyXR7Ju3oeVZgA23mik",
  "key5": "5kBHyKjoF2T3z1oSYwFsD6EV3xPVSsq4BXpbQDwPNMiyG2gPXoWkMYPAwaurP4csPNBbjFVoSMuGPB3SEL1HipGo",
  "key6": "jTFsfZqU1tPbdbQmRkFGzykwTHzD6q8zX34wLWgFpAtaBMR7an9qi96XjhQFweQfuYJp1wjcmPhJR6PMXquPSU9",
  "key7": "4cSWQBXgEiqZyy65tt9bXiX3mhGhzDfPoQ1jyM31qjUrauYCoFkEJmxQogSvR6ezMbQuaN4KFSP3SD2GaXX6mbk9",
  "key8": "5s7TyyT3MibozegH68xdhFtQ4ynDsehA4XJSPvkyQonGYk9txq1LH66uGBiL5cyLLBWbEwMtMif8kvdE4o8uzzAm",
  "key9": "2S9U8pBQEUctkc84W5XX6izikw2dF5uAC2xi27fgMdFCEEyM9ie8ad76EfQrJ4dG5s5Zeqe5SWRAkiTAvWefHKfq",
  "key10": "2WU2RNZNrZdF3EKpMSvPcQ8he77BNoB6VYPjUB9WsgRvZorx7nfakEmGBifdqR29edNyBHmt494h32KK95XPyD1V",
  "key11": "2eC59jMCqMEgUR2RjMNNVhhA2EyT2WywjnMwxfn8Qv1BuTEWsFZiaqemYGQRjdd6GW9M1rRn4R1Lvmh7iUxSQbFR",
  "key12": "4tR9BMqn9AXQW7gmdcMwbXNdL3wxNbJeqmNVhbovUUgBgw2pNb3WnNVszsAgcyL3tE5JfPntRjp1ETDkeZ4SrPFk",
  "key13": "Rt2dNDEFK4ZRfqpMqcuJHzkKL4S4EuoZNVyqqJ9h1nPoQj1CiPoXkVB2Fq5EEj85iaYj7eBc8bjicsNRrTiPShR",
  "key14": "5Q2oacHyFJEnwLhATjWsJU3MpQ7KG73NcDgo7oMSynRCorim2gxmRcNoMqnMupSc3yPeszy86xivADssVcCmAFVW",
  "key15": "2wzPCRFo9fjU6MJ3s8rCKiSsk5hHLqpmMLbGogDC5h2pUG4okptmj6XdpBQiV68rkRRT2QFZbKZX6mSsdFZ6pWtR",
  "key16": "2qW3XswbvakSiWPRsn4EDNKTqqLZ9SuWbPUSafD9m6HoXYqjNDAzrjogsDtngTNKbF4e7ZDaGDFcpzZ6VeTv2dBL",
  "key17": "4Rngjr3baE46i9MS65yLF9eLKMCW3AQqQno5FbPWFFu74ESpjHUTXXESn47uEyXGxiV3qz1p8s8dRjMQUnE5DsJs",
  "key18": "hD2vWVVdBGS4yfbEcPHL6syu9bpuj98NVYhr2EAuL2Ld6cESujyKPfP2hARRWJUwCJyqD54kfyigBD9EvoYQ5y9",
  "key19": "3tYB5QFTcDAE613SypJ3ZvYWERbxkQo57MgUU5UKDb3GfRCyu6XGZm829Q2ehYYKudT4ESA2rdLkhVnccpKcezVd",
  "key20": "3YYd1nc8r5aH9NcHTR4e5YaWWfaPNHYKj3WM4LKhwDG3vVFeA4n6PXnmunzwYA4PfaBGc3dPvUCX7QWczgvn36RW",
  "key21": "4hQxEu3xTCPvWUPs9n8MXRcmErHncx1EkqoXkit2gZetAcqXgUFQPucRCgS4FFoso9G5jXzoQNVdSku4nmYtW5Z4",
  "key22": "4gbHTsREGAUJKXgf8kCFG9z6mwgvSsxsjabk9GUTGa9cNES7L8MeNkDx5n7BVi8t88dcxWyBuTrZCSDm62Nh3G86",
  "key23": "4rmaBe4jYggBJ7LYxC8Vpq6azMxedHi288cWVQ4nFgHNMAcRjDH9VJzfCkQnvp1RrF4MJynJhXmWKtzrgHHVazRZ",
  "key24": "2LZTei4DfD3ARaKm2vBPrDwABi6ooW7m7d7sehVvvovjL3bkeP1pNYYbCwDaGdFp8EgpYLvGsVQBJQT1v1Nkx4wD",
  "key25": "2Ve79K2XFdrgnA6cFrVpvvHwDCw7sDVHHff5CGbtboKGuNz62mtuoavFyrjah58mdF5sRcDAaTEvJvfqwiuCNSBm",
  "key26": "36zuk87Sv6iS7rc5VvsqNXqGqMyNgs98dT9dy6GGEr5bY1KsqjVYBPZq5A7BH4Mm4DRd631PVkvokhXg7LKPEqg8",
  "key27": "TKdxa4LCxxfgzZKVtV6qApuQqNDBxHfy7rQXJhcZBWHy5FZ1EVuKvw6U9r5Mbi7YGkJBwt7pvfajLVDjaHg6iwB",
  "key28": "hY1WTu8iFZSC2Zn5msArYxSiczg43rfWTCr2StPVUZRsafyyyhcmg6bDgMwAmpd1HMaZTrpiyayxAvYEKLNBeta",
  "key29": "N4uDJ5mFWX6eS4ekDsHuN1mCDFYk6UQTs3dk5RiTpxbYVXACQBbac8ez7Mk5MdVeKpcmT65EpP4BMYQSSNeQ6tj",
  "key30": "2scBWAja3m2n72tCfiT7G7WpPJneQMMaZiqpkxMDkC1uk1fBoBFX1dq6vaDUAZWpbSqcMLGSJgJX8GLGevqD59MX",
  "key31": "4qNG9YuNCAa8ugS3C2q46Y3P5cJdarVX6AFEvURjbbNifECy3hNHYgwfegBNhvMJ8uaRaoaU5xX94PvvQ3Pifgqq",
  "key32": "3UGBGUCnoBv4PxDANpqk3vcrFBp5rJEeEdnNQJC33AdVik1mpcCsrP3WKBmaiT27Bq4vbe8K5isTFhVauGQtGbeR",
  "key33": "6RLzVAFsemVFzL2v5JwEY6PbZ6xD9sLBRf6Dsa1LQR8uiMTZNCksM67psFcoiuCgamQVqurc3cFoBtbg8bHy3Wd",
  "key34": "2bhjHgLF7voSivz5SXRfeoj8DNkVFXy3eMf1sd7xyNV8HiPgw1JXJPRhLtvjdUurLM11DYp3Ew8ucZrbFCL5DFPs"
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
