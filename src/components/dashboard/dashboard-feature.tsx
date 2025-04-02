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
    "3x3SKcWNDxBmkBQzqzrXaWHVs57XaiV5jSKipDVzPYc7DezbMBqrbehqMKpyt2acXjKFBVVVgNsrE3gFZxH5TFZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBGxDDFM7RFjtmEj23GJkR3XyDKqhJagE3JxVHGxxrpU8HFRvQgUDoUYQ7S3VU2bPQBiCwNRKGfTHatV5DMxhe6",
  "key1": "2EQkUqAwzEeZWy1ANKfFCPpn1UUHNSKuLGRVQLdAfX4vaYjCtKhQwjmdGb65KjraYLdZgqrG4z3d59rFS9fkUcH1",
  "key2": "2Eb4vdsRs1jzDGfhBpRjezxn9LE2e5jtpggAmDAoTFBFLTKKPQFoUaBT7SPSkU6BbYPknA7SogNiLs3PHEJbqAG8",
  "key3": "5rcXzD7JWn4gYzQbSioJhL7gquNdRcbq7aQpGnWCW3k1RuB59N8Zch26AcLmMeFBHSMNH5Wr9tfi3MTX1MP5Q15p",
  "key4": "2gip1speAoAMPecFbXiKHSnkvnowBSthHo38yjP4a63fkxjDWcjWGc3Xf2nLhx94ihfnQRkjPup2Xb7KsZoeaWnY",
  "key5": "xRAZ2S8foPm1sJ8Z8768Hg7SNfGjHTYqCoyjvJYeZsnbdk1ghgdR7H3bAgLLxpeiu7jBx9fDoKWKktqJAEq28rp",
  "key6": "55JwThuXqpGJ6aBNuTiqy1xe7Ey3qwGLXW8i1KotYRLwJk9n1A9A7d3mz2zG3sjjmmf3Qrh4oLVSJPR9W2DVQwRU",
  "key7": "3jLEkxykhX6cdjHrspFx2pcDzr8r4SNzVNrpV4cy1gjh8vQRJkdBpuR2i7pGvrhCsbR6tc3ZNCg4SLAV5maC4wDj",
  "key8": "css5WAAwTb2dLaMUDwnXeFDG6i6GUuJYHX9UuEDtR4QXx1m5XaeM77Q8EDAhGQ9aUYDrmZV4vf43qKMmg7y557W",
  "key9": "2j4qsG41eztJPUoYsrwXnfDDV8jhGn5HB86S26Fu2ak4MWvN3FKyKLgwbDDFC8JUgUcn3NfhosMTxNsiip8vRez4",
  "key10": "4BUkm8cTDR89WGKJiji3n1hzyhvhTziGvGRHtpNXxHCXjjJjfMshTY5RXpgtKZwqZ7KfiWggh2c8Gr1PH9mXNjXD",
  "key11": "67NcRJyL5Js2HYMQK5rfunnza3hHfxeG86imcZSHXcW4t6sGSpr8x1vsoc8LMkGxuPmP5VEs872Trs5G7KPsTX7X",
  "key12": "9eUYa6sBkZJcGxBGUoRirJYyw8kmUPHu4xEJ9jDtg2b19jsVv1jv9pqKdXxhj9NNLX45QSvtjb1f2PZYsX6mkTu",
  "key13": "n9cRuSKcj1AYDz9z2f2DWCfPENGx2GoZFqjhWhqEz424doPap1KW2TEQ7tJvfGhnoikuebDKGfrjEwCeYYDjWL2",
  "key14": "4MUfXQzTDr6ViUsG1tQ6EU9xJES7HfQCQuFcEjeBdsAyNGbkF8H6dv3Yk16fuPKhvioMtX3872R8wfEgrCTUnyQ8",
  "key15": "3jNJHixR7Wcs9JzFNw3PcXHSoKZsuVWSWkATNcPoJfFuu91LdiaKecrvqTx2P2jTWB7ghzUkJgUkgQCgLcqGh1ca",
  "key16": "5HXyuNrEq4ek7KfHTNCFiygbU2Qt36qb7R29X1vLshXCBctPcazZZQsBzQyU1tg5rNKEnCmGwYA2MNGzkCy4w6Pd",
  "key17": "4ri3BKAERcHJpYrXdYg6g6MuE5kddUKaweZ8bMe6EpGdazhoMUBvaVV1fAkG777D8m2AudwoYHYNQXck42bAvTkK",
  "key18": "5ovFmn5M2CmKXStfmUDGfW2tDoKgfZ3qTud3wFSGnrXfapCTWFH5Ro3AbA5vYWMCaRuSKmNyuaRnZ5Zn44yYDri8",
  "key19": "4vTFdfVFQKUjTDckWKDvpmbfCdXeLNcSX25XUGx93rHuoSTt9FQEkrNZbzeVsVFwA3GjW12qytGXi1yQ4pNqtUJm",
  "key20": "4tzxX3bFnRQM2X5fRivWR27j16iLhXXEnA4wUtwXFJk2k3z43TqaQqRDCaYAU1niwkgrEefkj13yA1UQBNZxWNVc",
  "key21": "33r25nVLXzdEojFdPsnCpkuisbNX1nfXDkH41hcLDJB2dGTopm54J91pRifpmSCCPfpHCpyeAZbcqNgvrXNnTzZQ",
  "key22": "5NskRzqmLFrvbX3A3U7Up5tsyn2Xt2MDjWL4bq5GRNwoCjpeVnTG1MogfWzneo6gQ3BQv62MJSoFAXgzPYcRs9HU",
  "key23": "2qsMQzV8bHfJNtYV6p1AQttg6A67PDRn8Y3FMM6QKAZS1sDuujZEgoy55GrhL35kUiCZkcMxQYsVz8MX7xXi4sbx",
  "key24": "hWReFRATyZkpSTewdZLUwnEbayMTFXrdzKTHd3vetViVAuREZaSsDaK3TZ2SkXWXMYrZxutayn7Ao9ptrDLHqL7",
  "key25": "x2FHDdN1DNPtpHM2NmGJ2zKHMubJ9RSMapp5MHiSN6ZFyNVPerXZ1BFWTB6GUU8YuFXYYQCJPkZXQW3zzDQvhKJ",
  "key26": "C8X2uKHbNCD1Jiz8xzg3YpZqXnX18KQuT7omRf2CLMwtxKcdobmdnzU8AfCTD2Pb2nA8uqgFo2p2dK1pJoMwFUc",
  "key27": "5ysxkVRx1VvMPtZsYqkRahibrAp7twQNhha2Fetqt2u7UpPqmoPDctYNG6cNAxt8ku3t5pqxaKjvebJxAZteERZh",
  "key28": "3E8kYJb5Ea85UsRqmLshUVodCTABaD4gCz3vCBqShs7U1uAvFziuo22z8GxWcVKP1dNKV9tEbSXtpZQs63JPxKeJ",
  "key29": "4USFoUTiitwiW3BuKsNEHwozYxP8RvE1P6L7mUy6zzt4JnXYLSUtYv9WWePEznu2bniFMwn8NLPArqqGPrCLH1q5",
  "key30": "36tA7L3hT9r73CY5HTsSEMM6GycfWcfxLQuWct8imxFKwpNw9DcS8eLkjamANsy9zCky3C9ZgLALyqMnpbzq875W",
  "key31": "2Vu1uNNTUZHjUa6ak5fMTwDEXSTiYosj6bEt81QkfxLLjFzX3SWHvzd3fGvKehApSPCBVqEq66LMXV8rKbMxFGrS",
  "key32": "48Q35s3z8hWRRhP7wvhrCAVXPY6Xg3e8qcnE1oArJht7GDsDY5QtA4462mDXQkzSBf5C2V8UoCtzzMyiuxDxdaR9",
  "key33": "7r5x17PLjWP5NvnzYb3fKskjgaE2CkknFD4YNAbjwEeH4zy9QkWkznfHpftqrCMg7mYJUaodCTsNgkFkGcFCfpL",
  "key34": "JUPQ9GjNUxxPiyosWSm6rUdw2yF3EExWocajUG2Xz77cdEZoAPYiAUK8U8AwdSSZ1B5Gkg9ReJf6pW5XYvN8bMK",
  "key35": "GTHUAAotMoXHs1SpHFG3gohT8Cd7r3J6gBYdHmfrueqYi9mvBG4rKQm9DBsV3boJEZgaKYdfry4bjxtsF5T7AVZ",
  "key36": "4iYEbjWqumLxHzZGy47kBg1dqZEwmHMhPR4C8AG8TWCGLWcHBu531U64r6YbzLzderros3D5JXbgxhs2cTq5vkGQ",
  "key37": "29JVYz7GeWePqrdGS2trt52gGi4QEFBunbpxyX7W3iPFKHHz5qfSHc9w6wppb6rykXHSjmjxXDZz7QPMwUSWDAEg",
  "key38": "cxuyTJSrc9GKQpNu9bYqSPLNtDm2wsr77RzTa2hPCjwkxJUgwxw53pLERftdt79NAWSgGdRgXWggWLe6ia8fiun",
  "key39": "3KwX1pHQpDwJYR16YYJah3HQSFfULekhENgC9bMMw8hcJCh9LTfzZ9DohJFs4rHGdoKKztNYntqTh1Cry4eBMouf",
  "key40": "hFvADxkYeqa1t5MpEHurpBGCRzdqeRVMVmTH86ZM3LTBrjyicrtLbJvkPfmxYUcHQspB2oy6bSevb5SpqmWtWZq",
  "key41": "nJJ5e1ZYqo9AFpzycvdtYZbCDRB1iN2bbKXAkBYSqEDpK8a5DHBL6AA68K4t3UswtPaePU3nnNauVGuMapXzwWr"
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
