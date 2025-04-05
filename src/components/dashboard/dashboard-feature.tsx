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
    "2sk6QtcbE9NaCWvUzpfGVHbpBLHzvWUezU48E41vEBJVpBZXFS2zCzrbaiH5GrSzKK3nb7DcaYDxWRCM29MLgAqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLoJySLs2ex7vPHjh67i2nqGV85zvuLXbPZaeB915q7Ti5e6HWiezHdrxVnkXRYgLXGEhkyZHvGsxqnyb7d7zqp",
  "key1": "HEar8CCRYNu1enajLPVw5WRtSSJqGqyYcqT2Ba55gZ4rajnV7aMXEjcMymgczHZsArJ6xusPhAftX7VNeKSVctJ",
  "key2": "1dzUqzffEDah7bCTHHpAUNNJ1vScZpFNneKLH14MwuZdC2AmeHQpRv4w6ovevdj6WTaUNWkq9s3FhP7iD7Kwe3W",
  "key3": "2TZEbxewt23R3K73wtTPAndqMAqjGiC5eCVG6d1PUjtT2WiaMhfihgqFT1uupx5EP7xkhRdfoyntsNQhETL4Lfa3",
  "key4": "5adi66DusC1PWz9Z76Yu2jLNe2LZGEupmscLhjr8oqVs79VYA7k5XekFaeZaupAsM59MiSc2hnLnHMVEFe1DAEHD",
  "key5": "4B4jbDNpaZtuwjSW5prNhpTWD9T2znyAPYDo6Xzqrd4sFcZPdeGFneytinid2vzWkQnyvu6tt3P81ocGxPkgp4ng",
  "key6": "268in16iFhs5spoidWW55RfyPyKGn6eXVCDtXFhnzsT416mCVtvJ98XhWvdLL3aVKx5VHh8ssvaN59zAjxiT2arP",
  "key7": "4MC7KdxWF2TCLwakeWMtzQA43tAo9Jw8waLvazjmNSrLqvdV1EHtPPF6j4WuRoWkHfHbh62VxuYUpKoHfPdkC12k",
  "key8": "4JTzwHd5ryfdyjFq5D1WrKc2GHVeBfAVx1gbGFJMiRpE8KPg5mW5ucZLE8V3vdVtLNKwHFu9NA9MDt5tU9aAHChp",
  "key9": "ZgTFX3t9kkSixzkC4JcscFghe9pBp89pwWPUZiq6o12wJbiVtS7LZnPEW8KfQHdzDEmrWpTbGF6nuVFA8PPfZ1i",
  "key10": "j125cpioxKWXjcKFEpwv2PdKtxixziDW8v41KJfsHpTkgrmLbEb4ATxtHLrnPSiP2p8djwiZQ59VPDUwSdNVQUm",
  "key11": "5DggazpXDXAaeCh9J24HuhFUnmNs9bzUz5EHqRim1Bwg3Gqz5FeNgo39TS4GDqG67Vf8FBfkihMcCxXEX1yR7jYQ",
  "key12": "1BJQdAYWfxhTw2kLT6wQu2Z1TkSCsk8B8odjxDzCwhA4yo2iSpmT2P42aXnjUpA3L5N5kBtprTdkbEMtDBCcrh6",
  "key13": "ATaTe3oaAHYWKtSyhRq6jUxX3C6JrFLrz6fuTWjv3DydAtF485Enwq7GK6RRScGoexBCkjLbDJdofixyDbgNB3d",
  "key14": "3exM89GeoC7qoGSxKXTNApPAJrhcTLyTR7pqDtT6wyUjJDNkieJ27PusPEhmHNY2qSAP9zG7D7jmh1aCugDpGMzk",
  "key15": "t1DMWtYcsGDGh7D7M3xZohV9AKPt5D1JJjGpKRCMNQpHSVXkWbmCio6EGzPtEU9257DzdmGTrtmvodWKzdVVXok",
  "key16": "tpoQk1TCRtX1DTinNc15Konp1r5JQUkguHD1RjkBniCGkEh6NuPeXmPNfFNRvHBurpdGcURmYqfazuo31cVMcy1",
  "key17": "32n1gYkMAYyYbcYnDLjw6fzuQVj6RtP71bPzMk8Tf4fARU2XGZXYqZVSpMYqDpTsFzSmmjNmWwXqqA1tRWFU4YD7",
  "key18": "49voWNTQKAMEYnQ5Di4T1ofC6hFZb5Dfu14fP9yBLD2KS2XjUfZvy3UT13G2kXjv2bCSnDcFCvXcWxoPa1VXuWGV",
  "key19": "2Z7qg6gVvNcr8CmtVDJRLqwVBfJUJtcRDzKUMS7hqCbefFkKgUEwj7G7CAR2ziKR6p1bqx8Ho3dVHhZSmRrfSpJK",
  "key20": "3W5nmoE52X5S9SkNwZMfRWDhQUQt8t89kxuVp8hgbB1dWVuwtEFkEh3SkfNVNKdos2Z91HitRBQobLe6umtG5qVR",
  "key21": "5TFix4bkYwysYwy2YmPkUJhNWcbpbisphTYfmd14HRMFy5SjjStcrf6o258QSzK6dhdT6PxGVGzQKEk7AQgkDVmY",
  "key22": "5UAqbb2X5wGrpKKGkLrnNFxvdfEvgUVfyCrYBdJAMPMvXnnbZ4SAwJWc7jxiRgt2qeCGnnrVz1oE8CwadBtZVBYa",
  "key23": "junroY9fnw5fDgsMx6rc3A2YLUnnbFRVB1bq2zw1ATKgcU9Mqm71amuy6P67LLC2xbYU4QzXoyhob2SSJq5szzJ",
  "key24": "2wBdEbmkYQZitpdLSEGMMjkWL5xZGgqJuB6ZJsYb8jajwDqLZcPkTtwG9vmWb5QF5fBwmeuVsnxUfrU4AYtk6DE5",
  "key25": "4ycBSqAUzU6Zp31dYskT4ZS1KkR5Jz1G3kFBpHxu4Vjg36hDhBwofrTvHmkdm2Ur6ZPQC9XxAtVi7X6winau8TxZ",
  "key26": "4neoa3NomnSV1FqSp7qgvAcgYXLdm4QnR3uVoZmGoBmH1oRMeMvfLseJSYhrZb3pXtBNzZQL95dm5Bi5LfGecd65",
  "key27": "PRueZFbVMJ1UC1ARZBFXZ1LPRCu3Z8AiqAKa3XXG936PvXxQLhES8zoUUD78sFboR1UK6xXrLGwaXSduEebsd3L",
  "key28": "5BpEteW9tmD9kfp8FqjQMoGdT9tzi4733Mnu7oS5Gnc3vzZjozKiv1FX3d4mZxEGsUrJgmtBrwCcdbxcKmwDswzk",
  "key29": "582VWw5YitSfxzg7kzv3JUUqzvhEaF8a77KVCYjoQ3Fg7wjWbAHQGfg4Rz31YvVwadM1b37T9x8ougAGSAYfbeKW",
  "key30": "5NKLUTpqFzfU2USvSZYSCraVsYUjKQ46PxDVuF6Y4CeyaZJd8XV46TgHB9zmUXJt2bcXvhVZRcjHK1WnTL46xBrr",
  "key31": "5rHxhS1shh58Exmkj5wHnqqgHwAgfJhEGWYWty3HveZ4dSXQtDUDEo63tP3q652ggFcJAM19Ef5ziMp59qYLU9WK",
  "key32": "36weTYQZRS3iHY1kWqQwG47raKRsHzh1Tnmp18QWz46ArEaD18vrBL2wfa7Q2Up4bz8MjfS7gu7aJzRZRRfX7mND",
  "key33": "WKM4UZ9aGM7a83PdtiJsFQsJ1rw3EdwumKCzXc12kaVmerXJRN5KLCSTx64PYZsDCZVLZ1box6Qc7KhBxQFChfC",
  "key34": "3NZZ3exgmFH3jAvCa1nqTjfiYWKiwnngKyZb1jUbbeLgLBhvTvgfQ4MWj7MJgLPG1PU73AKZhHiumWhMhC5hhQRu",
  "key35": "2BUC2kjx5NxDFKmUPutGyedvhxhRYvY7psvWh3GHiSBXMBH3HqN7TzfYnRWbEu15QhVXzosEpZJ3Wm5qQKaP5iQZ",
  "key36": "3gHo5YJpVHHQNn1nC7JwcHyTYHkEDq2QSYG3UEKgkT9tBog8Var573JvXaX5fKyin2pfyVatcMTSRVxoj9ir9hwj",
  "key37": "2d21vS29L7QM5eXHdtniLnc9juWoqikg6pq7NjVerXczrhrQdHw4M7wAYghwQt2r88cxgTC5hXQwNGwRvEhUF6hc",
  "key38": "5ytgqiV1QmsrnKAZL4AX6F7aHii3s5hfUfJiUfch6VTKzTN8z3g8cyVbSWyjvRzUBaLkDYg6ehCX95U2NvxuXN6H",
  "key39": "urGnMp7LXBZWF6GohpFY6Y7y6KbJTTJTcdtNTbY4d2PKAsmriSdSbZGR5zaZrsMWzN5C3jGCXKkLCcT7Le52tuh",
  "key40": "2PNV1NpZvbtwi34ARTFi4bq4RHvR7ht5moUhGKqXWgtXtwCowDHBzYMPe8mQMYpY8DeiDPHtK9uAwTo2GG7igqGh",
  "key41": "5unQT7TrQ8u6SmAmTALT1SwpGXCgbEsbaE4sLdwi5iTocXGXwcuqhBeKfEkQRV7nep1MoLqfgn1QAToZzZsCTVFT"
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
