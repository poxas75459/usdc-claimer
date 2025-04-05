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
    "2vkq1rCHPnDV44Svowz5ZeyuHWACqstcPV4eAtULAH72eUpxuDUoAz8maKGERE6gbGsQxadvtDftb1UiDEETUscS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpgkThPSTYjbR2zSqN7fuaxNZ9J49GWysy9ByUdPJ4W4sqPLcuoDYBULTwkjz7kp4hegEjfoqmU2A5QeGDMr9oM",
  "key1": "2xYNNKkPhuYUeaphzXE8WjbQKF6ctYhn1sNabQ5sNeSVYJtGactXh5KgcMrhtb8mUTiNFqkFiKfrHuKvc4apVMtQ",
  "key2": "soSAXKLKTkHStk9YKg12aCQVj7B7goL7bNFdykY6NUGpFGA8cGEpDWSCRjNXn3EJJqHaax1WX5zVkDZxjKQ8thE",
  "key3": "3XgX7QeNGnZzwKqsr8aQYEvjookn2A6veF43isnnVuTb9ChJqt1SciAwBujg2SXkqt3RgKUncnMoH4SkfgH9djsK",
  "key4": "UV3dz86LXWJyKpCmPUwkDUV5FWX8RHnKyZE42z5m9vLr9hkj1pkzLDEVq4xxV1Je8hVyc5Aj5ipaHeaGeEDeq4j",
  "key5": "zVnfCDZLcJMEQo6PJcG8m4eaCt8H7qDQt7v43VtzyrN1w3ZN1cqMmfjHX6gECuNxB7BfGoW5p9hPhBzRSn4c3s7",
  "key6": "5221CzeA1oke8VtfqPKAUBYoCyGXjjYVr7f5hiVWi5c3fqLnMtwSVuajkSu5ka567cNgoFqXFRQhdztiikxEs6kW",
  "key7": "2xmr39YL2YdfytrAuUNFSvAtCvbRvVyhzBQm54iquxBG1THG534YQMUcxYNnowGt2Pa8XzHu7WyUvBHhQNXZU9oC",
  "key8": "5WeyAXQ6fRtChvB3ne39mjq1QEsiAqFubQKh5Ym8aAWKCzwoWihsm2yhdDsYFdtqhsZhLKeHzmSMTKvNWsRXBuT4",
  "key9": "2jGAWkh9jbsnyFBR8aWdE4mPDdFfWsSdweAc5zJWDyoZHS61gXHoSeWaL76ZewRcpvuZ3Kp1K7FLutRCvwzc5XWe",
  "key10": "2AGAYDChaK1mmDjGeACtHQoBMDMhqL5NXeX5tBWYbpBAJBdU9QRi1ssM59YJmZogiZ1zWYznGKJ19WwQpGvYpULk",
  "key11": "2EU3PDG9QcKyWgYquRJjCoojmRs6FnqCvoDFskEg5ZQwcvwdDhdnomptgi4vMgAnVrgyMP3ZsDmNM7VSUmC5t3sB",
  "key12": "2DfsvAYAHWGbJay5CEVfeYmrKbBBo4jQC1FTFGoK96TPaUk1bFY5vzgDjBiCK3EmyJQm2Xv1XrCRozeoznbXHMc9",
  "key13": "de1VJ1Wwt67tpZxv8ZiZ9CTVfBPvMTVJjorFUAXU9b86QnnuVb7yaNLkAs7MpN7FxngV8VeeGci8tYMKyJ9NzSX",
  "key14": "vPikBHd6PofYfT9ao7TX6t66vAB5qLH1mHeB7vabm99ngvYtio96PvcNTpSojciHez4w46CjpYTySw6kdrcTj1D",
  "key15": "Y1wAkkVW9vZCca4eEueYRBAcYBgi2jBtq3sWQvonUJB45gKCaQtn2ZxapRctqpQf4cRHiaWz5rvj3ENmkwR4XfT",
  "key16": "5z58mBRYV3eesGK4TPnKhVcQpWNtg8NmKRRD5A7JGrunZXN15L4BNKNGxpQT2yPEToGUeFPHQ7Zjo9Ga1C1rmAsr",
  "key17": "2YMy7ayTnBxe6YAEJG5pQTJpQai1cgfzARs6HRKm3cmSLz7ZsyLtBB1TAo6oZn1nYK6x8VehnRe8JLYhmpv1ZwAi",
  "key18": "5NhKBKZNSGgfL4jrQg3PMpVoKtqFZXHZuqHi6dELn8HHKjYced2jZnQ76yupm46D9AN3KaRdShYE6x5nYHShsSoc",
  "key19": "PWASGpjgMTUARB4Q8Gd9hppxV6vsLxsfcoUsGwp6bxxqMtFW25fKyxx3BVHCzdRBvB2npFNNBtTUiG2133VTf8V",
  "key20": "4NzShYuhrfzke1LGWPFV2nWZ7LRiwzW6utUvCqKW65CJAoGzXhssww2ocmef7sjBPNncTgNCwDekciVWfiZEt69k",
  "key21": "Bf4LW7uZdvyiDMgzc4zzfAjw7mhJ2kTRHZafjZr1uYD4fejBkJPtPUowY7g61E13zwuABJ76V2wydHXuzwSs7nr",
  "key22": "3MqMjQQVL2iBb1hCC7LA4N1EayXU6amVwGU2YdSUDQohrZDptcREYMkCzP2eZHHeanGjmYdpUeQNnXf5YQU75trW",
  "key23": "4yBPMQ4jpvnaYs9kSeo6i52yQTUMMXpcnqzTJvDYCtrjxjEaEqCWDhtVtdc5yDoH5bFLWfuC9JkF2BnfoEk7Rk5q",
  "key24": "4sKiyQ1G8KrQxehuQw1YXNmggfFCTkQHdXNHDQyw1d4qVmWBdne2Yp6cWxYut1ZEtMi424mWNjCHo2qGgpr57XrE",
  "key25": "2fgkRkTYQSMHykwZQBkEUxGaAaBoBfeY4WzQmByymdEFEgDTPLWMggXbU7HK4wC5oxfEn2SZDvFoZR1kMjmQ5Xqd",
  "key26": "3Jsh2eLNr3njCJUh1TUoxYPDPHA4qBmH54rFQpKcuPpo3ezUBxhGmPHJ6LaEiXmp3Jp1dCy5jr6898tUK8KW8riW",
  "key27": "Ch2R7QqH4dTTo3vduTdAvaj76Ls8Ax6U5X8GrC1HGyJT4rShKZfEFCm4xDahTxtYACSXztWampwCqiRkBrgde2a",
  "key28": "ZspSCnekjEjX8kyC4YyKiRw5otKmfxK1tca7RqGaWbooS9SZiwwWqAi1rcyfPVq5YfcD86NrQemQ5nabxHRRDjY",
  "key29": "668NFZF2UpF4BsjcjqdDs7CQwJxKPJBoV65voQxSNqA9ssSUb48PjGCt54j12XEAna9T4YWxikVAVvQYtpaN3k4h",
  "key30": "4PWeziX4a6C8NYKWkVVPoUWRrP5dwYsoHCT6DGtVLkfD96SvTJYEC3zYRkHeZuBUJGPe9wsTQVwzz8QwLxruvnMV"
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
