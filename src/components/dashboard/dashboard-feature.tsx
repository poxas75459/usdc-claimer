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
    "63i2HEcYCmWU9hvu8m6ph1mCB2jGtqRt5DimY2RsNi2UvWBHwxpGyL5MDSr2HE5EiS4BLWBoyB8y3SxBrUKWJnYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MhCVc4P54qkSQYa1nSetegebKi1KMrGKowhAQE1yYneAm6iTTYogxLz2qUsTLJfp6hDusE1y56ys6C1UnnPjCCi",
  "key1": "2EN2UAaJJpFFWUb467rsjQpWXdoFU2FkU5NXgLd7BBTF7R4EfcXQW4DVcU81ChCjvpR9BMdCsY7aWFNrmCDFAusA",
  "key2": "5GxXQ1dh5M9MhgBLCknCHwf7Mi2LMdkCYyfE87FZUiH5w1UejA6xEx2bYxb5DcqubcemDKghuuu6Hj3TL1r1Epik",
  "key3": "ovZeV7srZ528gt7vzBkevTafRf3nND89u7w8yzqH8jJuCbbyodeppdxMbg2G9T9oYpX8HCgVnK7s3pUcgqUtMdP",
  "key4": "3fVxFFVavMKNJ3WVKhaT4MLMfh19gjfpfsrMSxTK5sd6qqzy7gWi4u3WWNNPfg2ifSpP4w4yKHvCeAW9XkLVmkgK",
  "key5": "5Lj8h1yRNAMfVryUQLprgm6CkBn9G3SLt8Apmv1FjfUfFKsjT9jt8bgzDfHCuBiZ7rMqEPDmKnuMwNeBsMk3Ejsz",
  "key6": "JT9gRZyg2T1g2pbCF8b2frsqwjE7AkAHtq1GdidfQntTvbLn44nZ2R8ZfhUMx5YoVTCCCJZTjFpSSD2SiSFFnLv",
  "key7": "3i5qveeLaVp4Womuap2TgmUkpuxEojH4PnzVvhtutBZ2vv376JSRZQxqXMPNQpAEqui83VU5AfUxzyYsr4pbhGYH",
  "key8": "5MejJYYFdGcPToBDHg6Fd8pihJ4rt3dDJJM2YgpBngrUudDCbWb5ZQYPkz8BgQqXY3Qt3fyo1iwHcAoEAZvhqvCG",
  "key9": "56qzetgLxf5rC3u1RzdMd6R73PdvVWv6Jn52yPThco9UTki6FwYDm5Fbx2FTEu6s3aCM6YvWJvMhx2KzpfXPHP9M",
  "key10": "2oQMXwq8X9TGDQjga1j7PDiHpNro8mezBK7aHExb4YtwKfLyesNENybc3DjsY8YEkoK4efpUBFneRxBNZp7EFuNV",
  "key11": "2bVCHGQeD2etoUDmv4Y11pkpQBP6ZHUp88fcrGjtGt78xZKq533YU1dVQqcEE8fnPyLrVVRMu8hyUYzF8KZ1oTA7",
  "key12": "4ArjpsytyjfJUt9RMP9wAteHF6YFxEhJRNk7tRK7b2v46rwrH5hoFTaKhMkftb8LzajkYw6JAs2PKNcTFK4AjGPM",
  "key13": "5UuevJocEkD27hcQAm31eHCmAQ2DQXsPSR33JG1EvuoM4sRt2YmGtL94WijLfCUVL9RcfWdcz78NTmEGhfy8hHaT",
  "key14": "2Z2wwpxSRPyxX3TjCcmHaq8DKBhv5J7qmW3JzwS9Uvb6qy8LMnyrfDFEuiZ9kncRkfahSmPGP27vNbGsfcxxHSW",
  "key15": "2TQgR95Zxsj9me3tDRCAayYkW6GjHKTT9BkK7zSW5htto178gUPGxyQ1gG7wU6NBmniRLQRUMtb8XCDkMd3B8y9C",
  "key16": "5AjnRhqC2eEzub7VTji1be42DwpquPDUTXftEAZGDDUpuYijWhMSWKYAXhAiuVbs9PU7LTjf2G9EMLJrFhdxVHXm",
  "key17": "kv1EWyWgErfW5CZm527M3LoKgPGNk6toSEnWB1o9xZdg4qGFwK9TAanRJtfqVzn2KXQVCZ2FQRpHp84k64dRFso",
  "key18": "3tS79VezFjxDdYeZ1qsZQFhb36uycP6DshqebUksu4oCVbGWdvEy6AxTHgyFY3XeKj6fXCa6rVZoP73MHXPpvKAL",
  "key19": "2EVjtqpiJst2qvCWHBWY1FtVSwQgnh9AQXy1KfFh87UJVCY8htY5SGyH4A8GpPiEYzxTtx6tbfqYa5ZTTLGJcAEp",
  "key20": "DScanAHoaNS8AZbpoNmX5FQM2kQh7pqNvDSBWBzz5He1fF3zH95wVH8DsaAExk4WanseXuy6dfmNX8B7bW73rA2",
  "key21": "2kGbLv2XsKAwpEzPdY8uD8pLKqMmwGFEb63NpxnRGn1sfxeHcKGXXqYtnqA884qp7gLBfrQ8Bz1YYhqWoiHMa2Ko",
  "key22": "AMkciKTNXawMHMno4i2Frf3C9XFCn6uvm61A92aPDbdrABYpufb47FLU2ZYdmfddr8tMwTJJV976LGg3Q3UAFPg",
  "key23": "hVGDGXUAZuNdHfgP8qKWj5v5xiLHaE4aqZEEJuQzs8WhNrPRRuu16YaYbKLKB9ijcndUhSTSkGteoRubD8PSTDW",
  "key24": "3ff2G5n9x5xWWhvdCjrYCfrzZwZjPmk5d2iFwiQqzaT8GkN7huriBbTxgf3nwvfPcuJMbvGG8GYZ7P1ffCm7kqHG",
  "key25": "42iU9nzeVLkvAkhy9u2rGEzX6kxY4matGFyQ1MMRdrkgUQ28szXZhXnqBHyxdPTrymoVG5LS6v1j9BS85wSECZaf",
  "key26": "vB38dMiu9m8jwyjzAW5q1Lyy51nmxCL9yjPuKKAB4nTkKX28KLQtekFSA2FBc9eJVZDXU8KVnh535zsSxi8thyw",
  "key27": "Dn4bj9Dm1RSd562MZTPjPqSoExPKi7hUnkp8ynnBzse9xYqwKb3zskEzGUxxKLqQppSk4ZtNTZHV4vdwKPGM2hv",
  "key28": "27yNaDwk5pWX8UfA4LVSfAAJitbtfttdgkG6Vg9GgeHe8ZaaDUZE7nt6FTnpyNHyAHyiBnoWCuExn1w3yep1tTUy",
  "key29": "2Y27xUNsA8WGtz9CM5NaSGfEPctaKzTVAbkckC8oVWdmktG1P8cfo25fwLbzndqGCNSGYvm3uJfX5TQRMUaPeu7f",
  "key30": "4saN65BoeY7HwqJVbKJXALNsNLFApDRrd7Z3rnWR6tpfD9jf9JCWRLfYCSAyUXtAg3X7go5aCHRHPSCYasfqadtB",
  "key31": "5gQFWQcjmttW7Gz2U3gK2HMaTNvAzF4QwxdjEvWRPeXR5HyXbq4pvgdzwf6gUSkYwEHJkapj8mLuXZSsSdv76Bf1",
  "key32": "3w1CeYo6KLQ9d33ijCafW5kbN5HCGywpPwzAaAh7z53aEQh4HAzbMophnjSr12Uy5H6KBRCq3Aj657XzFXQRmE7b"
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
