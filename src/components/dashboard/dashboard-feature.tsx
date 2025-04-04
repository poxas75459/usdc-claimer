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
    "3TxFx5hzpSbgjSsy4JNaWEmZ2gZwB5SxNEcR34LB3UajTeT39pZ9R87jo3AGW9wWXdT5JmMbkwWcohGNVTxd7fN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hksnAhx7RvM2WaKRhH8rroE1t3F2LTPuDCSejaT8Fw7KXRiKSgE7vFy1kXy1eSj2NoUa9EEwoX9bL1Kpipr6HqN",
  "key1": "FjyKEj6q5JXYT3qeBZxxNHTbGusPfqz4Pv4Zd27c94gJhs9vvKyLCjWfLXwbRBBJsSMXBRaqnyQzcMbnZK3H3sj",
  "key2": "2CXL7oSaJj7256ciLBbX7VmcQFe7hAjtoF53UR8mRh7KyYa4iWoaPAXvzPBzLknUGH9oGgpKcWQGPW7K63FtMpnb",
  "key3": "5Nb67cHQLc72FSzUmEpTUpr6Ht5NxsAqEKYKHkehCnrWyxgAPTeFBvfhkeNbZqPr5zJQJSkNniWhMN83hDizRPzx",
  "key4": "4zDnZHyRxFjv4BAwfZD2bENPVztWmjradtZwpRRKws6koKPterf7YA5dr6hbCqVZkSVoJvWymzPFnTnihtHnASFR",
  "key5": "5D7LzDXmvWLa8zdDU7FFwJ8pFjTEEgLFCPo4CkYoZsjYixfETjRJ9ZGTeXQYKrvYokEzmqNgJ1wTKgPnUqotRBat",
  "key6": "2ZG6EB1DCWYdaRj3ZE26Yb8bLGzWQTgSp8zG5VdCvQZgfg1BoFN8YK1Q1LhypRQZW6U9BfbSZzmKn4HEBjQC5ppz",
  "key7": "2vMfyegVf9bTdmcURtdBVcBXx2PFhb5h8E3VMDoUR4c62vW8e3d2FWQxJX1Dhi3VEKGuEJGrDfGAGTVTqYdmWonn",
  "key8": "Ty8fH7NgD2AR4W4UZ7ymsnbSzAegVHbGJE25uE2bGadebbR18XwAHa6f9d8RaaRn33junKRsGxyVgMK2WoDuaP2",
  "key9": "24JStZHWHjwjCk1ZdCGuZkRCvEHrgnJw7LHfUFJXvjAfn7aZ9ZGZ1PU8LkiTsn7192t21KLgCjihreZGYVBm589t",
  "key10": "2op5bHuewRmS5iAHBWNtosGBSgoVyaUNAFzqo6iqDAorr1pGvqKrDyCHaudMY224FhgSUFpc2ceLLpoa2q2Faszk",
  "key11": "5uLfFiQyy5ZVeo74qiQM6TCFyUfpCTkWHDNpDn5nQmFWxUGAv2UERqjBCS9C5fcarNrjnsXfW2n6cXF4ivvrp7rE",
  "key12": "52Zei6HhHooNy6uVRi1y5CUQzsWih2e4gsg3G5MqXVKBVYuqjXf3DCNWbpMcigousitA536MHyXCp3QV2eWuLuoD",
  "key13": "3cgiy5qB23tanNL7r1eHt534HiWqGfQUEaZQesizdCngrdw5sg5Ks3h7R78j95BwhokRhjzCjg6v5su2YeffSXUu",
  "key14": "KHewDr1AbKQmaANnbmdf5RtjZPxtzua5fv3tsb3cLH2axJ3MiN6BBuYtLVqyn9dTJ53dSAJLpiZcdZX6pM1wtwA",
  "key15": "5GdBhUoj2DDcE2zA7rMR4C9ZZPXQwn262ehe2L1vLSHBirdwqW2qWkAxQcUyB2td8uQLVMynZYy3hzJRPrF5sKr6",
  "key16": "51crp6KnR6gc2nfmQaJJMenCMfQ2FgdFQVpc21Dyy3RgBXYJzescnBbX2ebXVwMbg7U1TGwx1LBMcrpp4Fji7jcQ",
  "key17": "bsGUN9fQT2KSBUckanbmonLHrXe2UKAoUg1sVJUs3fCrnEiSgsE3CKpjSLzTcs7b6RhvgTQRGsZwrKryjFvgRx1",
  "key18": "2JzJ9DUvtfAcLYNJDSFMe7gJpVAxLWGgMMWLCrZZGDMfyFqgSHm2KK78ktDXe1dca4zf3zau9EWSVNhcYyLS83Nm",
  "key19": "2GLPQCb93DV2pzntEAk2Z8ayMhqA7hk7mToDvEmhPzTSwJDVeoHHmkiVPKQXUaxWPVWdkVra1C421m72jGTnrYGW",
  "key20": "3Q3ojQFDEKEXHJbs9pVt2XuNEyVEm1qxiWnZGazZdUcZ87diBntBMUzPUYebRFGF8rVH5S3qTuNLe63DrS5BBh9M",
  "key21": "3hoCuffp7H1KPeFSVQYK9vXTgG8EmWDnhrTv1sv1oabQgxPKidzVR3gWK83f6p6AyxCZQY6MjnApMe3V1aYTdipd",
  "key22": "2qJjX53kggoiSHA2xYYiaaYvqxULtagCZhnn4eHS6FMnJJ2wMn7GgLHU3QdQvZcx1EmpLZS6X4WUSB5m3tCJumk3",
  "key23": "4KTBdgJx5QGGAHEhEtnDYDbu7GEVENbLbTUN2pU5MaEaYf8y6XKLh8UTocFN2ZWPXSdjyksnocUVbuFgcAPxXHYQ",
  "key24": "5FiQVwMBJeLNpda7W4yuubcqyXFXKiif3ix1SW5X1X7h57da7t6ryDFD7H1WjkDsfjbDtgnENzGYnaTun43uHF2i",
  "key25": "4jhkcjEM2bUTJiaBRvjJr7aVRaYfTcmHPi169HBuywg9s2fkE1brvHGx6ZGFeYUgxNMxBUNMkacjehQSWfweACfu",
  "key26": "2vgxdQqvSP5cYWTPs51i912TXGZPisWKt3L8dNfXfE7UxkXPNsYskggvomikSCochP7yyjNHu91Aj2mntRkFpY9E",
  "key27": "5oP95ukTgcxqPDfDrCZGpLnkzUyNrKHs66Mm6rT5jrMDhZWdfH84fskztk4eMUqDQjZHPmMTVuxYfU9RwFxDE9x2",
  "key28": "4cgBsD1uyPekGqnij7FtQvmaWJyQ5MmDN9C9YXTXFFzmZRdU2eH8mHfr8MsUqC8HbbgFPg65DzM4zTComWNZ542D",
  "key29": "4xyv7mCZkzB1d3ctsDFGBCa81icYiBRzUinco99Uc22xFgrazSAs8DsiGdgEkyUhCTEC59Bhigs4jG1HqaTof5cN",
  "key30": "4qxB4XsHy82tmMyo74e4swBXxRvkat45cE6GAVGuEjHruHwWMR3t2m9DHqEtpF8oSMacPVBDzbnigj5PAS8KXXiB",
  "key31": "4FnfD2i9xVF1Y3gnxSvPujLmWwnC61McFQfqz2AMCbHQ3yUEbAXy1wUVzJKXf7YoUtcuJfmnwNjKNhyKAuNJbnNg",
  "key32": "4HkPqxLwhJHefpxR8ZaBdYUCQzA5hjFjv5kMh46YNA3rqYEJvXUXGFfvv3H3xo5yzeFzSdH4g59y5Uxvw578172X",
  "key33": "3FNgCiGWneqPn9gsdf1U63EVB7iEKmh38tD1sKzWPXXMmA1wWogd4VE7vhdDqGV485Y2gKNBxNrcACEVeKZVMUMM",
  "key34": "22abhN8z2EdQLr3sc9VNeQgRnEBtWgFX4FChXYBJwHFrb6G8wcTWmTuWgYMNZ15DQGHVwmqVXgHitbLZmNd8Vo3p",
  "key35": "HbFTes3QNSfT6ggXsdHXSeHbPVaHFXPaQrjQFw2UTXpf2ktCgBH8zJDc8dcvQwFg4kz4uRbppBtFE1DbKFzB1ku",
  "key36": "2A8xDvx4NwoEZrShF79Eh5pJi7weXNg6L4QeZ8HEywJQbUW2bVMNhC8nZqjY8X12aRq85uX2cVNeFnUNFHzuiJmJ",
  "key37": "4WX4KcoYywFH1M92rWxzEnpuaJE47k345LFtqDk5yLQgjh67S6RawCVxCWrawPy666VGLh7Be7pQhCn5gm7dKqVQ",
  "key38": "4PJdLUFZf3mbLH5t6R3YAqDH3oeumvncWZHfHnt57Tz34JNZtR2dBzwsc6C6SpKWQzTLe8GUxYyfPfQXwqPcbpyK",
  "key39": "59ZSBZk8JnhCBs2FKsrgA2AGiBxnibA1CVkF8uDYJX5n3dy9aJd7rzXqv4PWeyYQV4MeZ1SeBocGfeSvQpj8LAxm",
  "key40": "4qEgS2KU94qvn78m6Zt8bV266C4X8PKt6aZYeFrW8pVqUnf6f4B37DuzQb8j1gG9rs4qX6Sq3VFn2ugUrVQ8wKou",
  "key41": "3CyVpsyodsf9cgfa8xo5z4dpy6j298az46CrQ9KHoHyz6diTR28vWt547FBwERkCfgkfWY3XjCWpC4y8nZoo89jV"
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
