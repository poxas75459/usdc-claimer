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
    "PhrTuUXqr3LcfRNjw64V2irSEfbsmgi4ApNe9Wzrq6wPDXHJ3iC2pPpbZBH7oXN7sNMvG3FM23kGzneFo9bAZXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqpezaxWtzfrDCxrUftybbsN12hFVmyhJf7M2uZYaWMQ4XRmGMc73nv3EPikU87CQTgvaMUhQwp4w8tFzhXsi4d",
  "key1": "4L3QmeCaPjKYiLLJn9zPZNAy3tjLr6gZjVNMfxCDgpvtsfzEYt5L2EtwEhkKx4jjAFPp2Q5FCHTU6Wwcp9wzAPjo",
  "key2": "4uqZK53fyJf5SWjXh9Ynn6zFW84UWRxzH16ncei972Gx7BoPoNeACsMkzQrL4ZPuWLzNUyxa7CZkyFPLb3ZhVxVB",
  "key3": "41ZwueJ9TUenWxcs52SLEDpceJx3LwqiXXQw3HoEDddAESoApqT4rUfhCAygHHgVo4k2f83DBk79Vecfw16Yw2KQ",
  "key4": "y28DBCzMrFUWCUhaNYPvGqD6kAH6VVPnrBZSmj6X9SQVFgtfiKFf8UBeX3LNFL94KfVMZJEhXb6uwHmBuxcCZbK",
  "key5": "5rqvfzB9KiRrAmydyScMqYxSfidhmKzmp14q8wdja1bGCfRaT2UWiaMKHcSFSqKubLVbiDotmLFdecWnqC59ez1p",
  "key6": "D7AvFb4r9RWAyCUXidhDGAk4q1ZoJPQyur3cEYm3HAypGmBTT7CFPiQu2A3icAAWDmJpYgetYd6Ccbh3retCGuy",
  "key7": "5Nt5T3WPr9tp2pF7pmeCX5LEVbMR3fmze4CZ3XZnhHP3k8WDinBUL5B5idCux7bSQKQhnTkvXnosioJmNm1RYZD8",
  "key8": "4YQWkNjy4vrNacks9hARPEiHcnbhqEjfNemMxadeDGTyt8C5XputdqDEiBj3sY7D5A2jbT1QjV1Rn4spzEh6HXF1",
  "key9": "3KsXkRrpdvtgyZvE9YYbgGnAWB2ocso4v99hmwwCPgDrJYP1baX4gPAFyMkXsMs8hLKUHEevHdQXhn5Jrc6BZ9te",
  "key10": "3yafaBRwnkauuXCYUt13be9ig4FGVEo52HtSLW46ynUzfrDB9TqsTVLhHh9iJgriDgA1Js64t41kPR2D1RQvKE7Y",
  "key11": "3FYRLiKr9iaVBwBREH5Cr4NJ56bw3q1AtsnsjiPu7HnKt9RJEn1WvE5siXWFCbPBb37zGeCYwGitS93x4Q9gq2HW",
  "key12": "2Qmba6SXnYy4t3YY4zQH63v6vgkENSx4jVBwrXgg3DtG7h5MKd4b2uy3ic4k6EJPq5RGtz9WzUiMoEzrhoK2hT68",
  "key13": "2vUXKFPEUvtTyKGvsxFZEX3A5XJVutv41mRj1zNV2rq9PfYLyMXtLpnyK7KSK1X2QsYvL7etCJZKbyZ1TpjmEU2k",
  "key14": "3vR2d1aVLHicJkY9dNmhjNVdhPnc3hi1HHaQ597aT15muxzWZLvA1PDaAWraX3RH5RjQwKfz6NjQdudh76rAwFVo",
  "key15": "5XDPNH1WfJFPeqqtMMtxeZAyVjMv91HEC9npKWKG2Y1HTfZGKuEuRYYdM99fJn8GkVhKLh8SWLE73MYorNeM46hF",
  "key16": "3e9HrYHrxzhErLw89cujDonmgqheX81DkGCUTv2XXc7JzmSxro8WhHTnsZaf8hcDVsRX6tGtHHpEwPEscG4S8PbL",
  "key17": "2hyzS687dUem84xb2Yc1c9ANQoLpvhGEoteQbeHDweAvhPwhsHcVSe5SXHVAUkdLYiMosjrRfsE9vAFHiQxZHcvM",
  "key18": "WGiToKDWkN4ZxWkjDtR3rM9y2GFTspqsLoC3UxuADu3iKuDVVc3VTawZ4C5pJ8ReP44K5ubEGPLj3bydSCjrnry",
  "key19": "2SceDabqSgNTyFSTeePz8d6dhiRAjeh6jy5YGPkE86tqDMs7ynL5cuy1jz98vnFs27mSPHwhMKWSGdvXYKhggWxM",
  "key20": "31P58hdSu3TCmpF4uysAsmjcVdzXMbfsvU7cdK6jqEfGkfHDT8TeLj2AAjUz9de6PNXoyfbPmCuPK53a6CXHmFH3",
  "key21": "AMgexiA78BmKE28i6PAsgY3NAgQD1LVAW64FnZ5wrKhWBqaqsKtW8Zt1kSjUkFPNH15az5WBVPVQG5chGq6ZV9Q",
  "key22": "3wPvqk3CF7551eHKdgiDcf8anisbGF5kkcdidWJTSNKjy7pnLqjd79QAeBhV1pYyBumwzGyTUW4wGQwQPYW6KSfR",
  "key23": "2WG992D8aSpzfip7AAcCRQZAurJzoRBxtW5tNrmtWYt6sxo3WsYw1uXY7S3FbTBUohWbdT58hRYcBwv7AzPiK2xF",
  "key24": "4jJjYvuNn1mDN218Y4z233agpe4B7yGWhuzxiAEKNBhQgtseSuXPncvNvEE5tJVmY1a7mmE53rFmx7g9E22BCLcY",
  "key25": "3vvksJ2qYyVeMcpwYeRCKhWtwoQqyn1sKHpp3tRVa9krSmP5kTMLqLK5sB516c4sHrTzMW89nf4mu7hBsaV2n8vm",
  "key26": "6742ELUb5gDbseY7d7popZ2DF3zHFJsswYGbDwLTix57NrffpiThvLd4r3YNXo8B7CCxXVksHYKCyuPDMPuUr3uy",
  "key27": "4bb47icLKxKzym16TfJvVu7qBQv5GqzGMqtY432FUYVFaGAdJpYttGDUCrjmbaGRJYHvrJYsDFj2stgBVNcwReuH",
  "key28": "3Gx2WssE47sths7TVwbWTzYsDafkh5phsZRiF2KhADtR8quWoL8yRFqkH6zLMJRufT9pWy8ZMJeapHzs8N4CzmbF",
  "key29": "2e7W1XAUCstauUNYXzno4PZLwUepRzWDRBw2Jf7qsvfFB1Gc8F88gqZ2uQgUYFJsA4Wtzu5KgpqgWA8PbiyA2xf",
  "key30": "4ZXwbUyay4CP7Yg9kwkkBxGwLnmefZ6oZXwPYYqT7hxLpexoATNdLQcJQDPDEUW6KPV3oNuRAjVK2rwdNGsncQAV",
  "key31": "5GJKSKM83j6au3SnFMRWq2mnc36s7HvFTXSs3uBoqgRDCu1gaVTf6oeEccJTz4TqivXjWFFABrAvWusKk7so77hE",
  "key32": "ffokvtRDiJj91VxMX53VbmsKYYA6za3fHLNW8aERaPmgKQFnov4SVw6FvTi3p1T88ttGNoe4yFKWLHP3fcxaJJG",
  "key33": "64o1FSrDcj56WV5kJRGA2siupJeKAfhVkpiQcoiScLca5s5axw2rFaVMFaQBDzgu2iSKwwRZhYsPkU7WpKDDMG72",
  "key34": "2Y3gmRaaoXaizf7cAwKRwP7apkVbbEgfcVq28Fego6sBJcN95wd6U1apQ62eerZRjXFnEz8bDegWFyBTKDkXiKxR",
  "key35": "29bvR3cUCz37yz2ooctaB3G3LGCf9fjBK7yCcsXimuDFWjHDyqRXoBC7RGXnQ8bTFSCh8zuPT8bLMAFN2ynzsJhT"
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
