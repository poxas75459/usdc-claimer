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
    "4WdTE3PftGin2Refeo9uumn8sj3vp7PujgqUZSbx7inEEBLToZdPAakruhtJP8ehT3f3UForPZqiqSjmd7U7eFNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXCwaYBckxvWRtcGiooZDjaFJuwEq4mxn3bdCHhQ4TZFCU274uy4ajWPFMPKZKgLmoCYbMzwKc5tQttWWLaounn",
  "key1": "3pPcRUwAX1pLMt41dNo3rQoDAPqS8KLe2dZeaSthDmquRTFoVxM5Gq7hgNQQRUXM84Q4z2BCcgeAw6o9o5QiovWw",
  "key2": "2TV7di318JLJSuQDtFJMaNywAVvKvbmihScZigQNM2Yx9u3RcpnTVoZY1zcfHuJ2Fn5W6WiC4ohKK7ncY94W2yZP",
  "key3": "3Gcat7R9JGjKRCqAHUkVKWuv2QZg4V2k4EmpykMCcp2kF7XFAERvbNX3P8HDWL75ThVhfkzJjwgEQU2G7UUc8cCu",
  "key4": "P8xgdLSN9U1FUpd3HPiTF4GWr5Rb8xaw5EHvjLvccs87jKbtDEsyxm91AjfKbVs3qCS5F5ik3pnUgtbGNReBn56",
  "key5": "bbK6zV1TcNR5R9uYWbgZ2mZg6BBcsK7CZnyXNqjfaepRJCjVXJeEyWGciQJN3pq2Lt9g1RBuUR7jH5PccAiRcBm",
  "key6": "daxk7W7dntRF7i663PjcbHQswugRgLhwTSPyQV7wYAsj29gAreXq7PJMJynkDjBQmErqHov1vc9BL5XHvFD5B79",
  "key7": "614kcgkjbLkMEwSo41C4KcYFD9C1B6Q36XCPivaLhuVpEh6nJsrcEECmovSSrXH5NMqzwiA1SGWwpqcKjN7Qkc73",
  "key8": "64uCXrFKiUmZqFZdoYXdRYMkm7g93e8d7Vt6yGztAAMp53Vt4x655bs5SMSZviz7hXQqdbXRvWJ21Zs3cRiu9uqk",
  "key9": "5KhjpbHfsgg6zU2Y5abvCzn67CHBjBJNZpBheYXs8miz3TNfr7FpeZr8AWJWqGcB5H4uUJJrvZgmfMZoNfxyuQnC",
  "key10": "5WQmazNQVSoAqPCXC7cahbCrWzCaWcsxfweNKe9FjHfvhg5R2njrBNeX9kDCWtrhZadQvUQKMe96S7PSWAaagaNc",
  "key11": "3sZV5rp4qaHTqGoFMoMRYY4zfmYz3hBN13QcssK9P1FJjmCpRRid7H1gKutNarHAcM4H2fDjehDpzH66Dv4CTFao",
  "key12": "5EgnESaSEt9p9TcCfhALWnqSYYc1GCwNLrgzLxCq5rZqmR8BsgYproYMjSgm929XQDuvh7FxYPJvB7it8bPNecKC",
  "key13": "63a1f4gfxrvRMV5Cu6SM21xdHW2aV5Gwx56byop2eE87JEjrPiodzXU5kDgtS4nqvnk5H2xpTZMYXT52iAwUUSTk",
  "key14": "5qJKfJVRNy8EE37dRZxvihgKU2tAS7JfXj9zd25jEFny7QdURtoar6qPn9K46Px4UB32Sgy6ty5u6cF71tr6TRYW",
  "key15": "Wopd1YjFRuWqs4LvPkLqPQMnSUoeSv9DmcScDLbGg6fZSi1TpBriwNFhK8zCxxBaEaCBRN4X3ZFjLevzvqDDYAr",
  "key16": "fswYUUpm4NctFFjjrmNvbMso9MFMa6R8cdc6i3gHbD4MDLy31N92e7Ppr8NsKsEodsHskzJLc2af4FD6eSFRakV",
  "key17": "63craS6vN261tLvggE37f68w5JpzSUvVeAjLG1G896F2BDqMW4W6syJGoMBY9fHe6wPqYv7JYXyjTjJWzJk4exH1",
  "key18": "4UxhPmYQFHTadxzEwDGANWcH1zK95v8DXiQx153J5LP34Ymn4Snuh6ocot8mgoLcqqu8CnPfC9HkmqAUeY39dpaV",
  "key19": "5K8JxqJJbnge2wxCiyLuPxDJKPSAfKZcraiga8BAXYBcLd6tFqzSWy6Pv5H6fU74iV2hWftexrLG6USeZvbKJr5Q",
  "key20": "3gtrCqSbwXzdBFx7ksHWvh5ztfeFMYZGeP22j8ZTKNCx1pYSzmEnrJutotzevjyKtRd7ARwf5jQ8kjucv6Nm3uha",
  "key21": "2KHv8tk3edoM1VwmKKuWvb8AyLtJvNZrgW5xEJzpqocJZdLcQYosKfEhjVLJkGpscLrr2X2WeGNVw4421a7Mzqru",
  "key22": "26hnLnDJ4RffuAAQwwmm3KYZdt3uLNMe3rkwziWER6afjYPwbPe1973VDUtjCQX3LmZ1YyYTdubbaba8iy3Sz9kH",
  "key23": "2FfGtmiaBWzwuRfusXiUhdyKJSUGmMQBz9nkg6181qvqeQXa54QaSW4oEbiiGGxVy8ap5EAwx2hXQM8FUGsnC9bP",
  "key24": "65ApxiYbaEBFfaxmX35bQz86FZmjVMuEcViCDXJ23G6BxK5skWfm4nKFrvRTzr57qmzUeSoHxKaXt9WXU5i5zgBk",
  "key25": "65b68ps2c8xXKCNwM3mf4Y42dUzSX8wKF2qqktr7MWPtC1GtCo2PdSmKN1KhN8CaustH5XzLEh9MUH5MWPxcuXyF",
  "key26": "2sYieX7E6cNaRX4ns2ZkpL4V9Re6CtjQM4FZrQNfMHQ9aBwMCwMswZnLc8fwPQkbu477AGLvd4exhJrGymrmyC15",
  "key27": "4zWYmXDBSRLkiQgpW9CcbjbXF6DGKtyM7JbjN4Hq9ERA1vEQGdREKoe5FiCmNs7aULmeKsuEJtocFUtnnKKmKvkA",
  "key28": "GxAYwm7o1rvzJwWXKDv7oCycX8SQFRwmHW8NW9M1akttzMSWnuunVCUhcgRkULU9gAz4ughtqWKXxDK4z3t3VNH",
  "key29": "2AeFDXUzhHXkj6yM9QT6GWeoetCrTYFzFeyCsYioGeb7aH1t44R7DUvXPnwv6YCRzF7ZxQpzMaZxDujDPKa3mUxD",
  "key30": "28DTYPQp5yV7pUYzggBJqUHfLFYpxCoY2Y3MpYK4ihCeyDmprovvALF31gq9XALHGRtYwbVuxzq1s2gMc13u2Zdh",
  "key31": "3BS7GiLzf4ATUKoTDrRnyvPeWTno35k5zi7ADn2JaXrzayTfy3PzUVyjLygfeLZ1JN2MsczVtnEfLVXryCvpTAA8",
  "key32": "2DLCVKxTbBVZTqcipBuDqvz5YyAbwknh8un3ByghKcgXy1pFTeqCD564smCfUvxrc75i2HsNJX8m9pYFoHKN91Th",
  "key33": "yy4xqhb5YcYDXExMY7aXPbyuvHdW1VhdEdTvgwKWs9XMLeaaa5noRjoBMi24sQ8jEjdE8JTV4UpgmMahQorSgaY",
  "key34": "5wZRdNoqJvYPufmPhqgEd6Qi2Me6XFwTP4qioVoxpiYCNBoPQXWe7nS1ZRBYqpkXvUBegtJ1atTy7aZwfNRRuWr1",
  "key35": "xWxFbtAmRcT8ybv8b22eTfttwXzKUK7eXDoiG2pibm94gB31KaxwmqbUD4Q7QXD3pavneAEfpGKWPYjHnVVREp8",
  "key36": "bMVRXxCtoAqNjXfwhwAaWdDsYvvFf7FAg8m2gPTXLMZ2vSY3CTnk6qvseXc4ynz9PXAJSg5ikV9VXFbozcPCxgn",
  "key37": "5byn9FBu9ZBM5RzEgBfa6YAvymwpzgabYYusdU436Ub1s327mAE2A2yFG85umzvVjumuSs6kvxmv8yevFQnyhJVv",
  "key38": "iFzXNM1TD35fwVvy8kZJt4FyGfYR2YNVtF6EWQbHFevAjFF8dBjfu228XUrxGNyhfDb9FkgxA5jgg7JesfqSHZc",
  "key39": "tDqvyiHSs9smay1cPNJ77e3uLFJRZL7W3NCpGG8wtf6oVYPgQiMrqnipgjpWDL7pcpxmsQMnoJM9E8hSU8HjCss",
  "key40": "3PU5EVuaSRWKM9SVhPJzdDWBdAgYboCwQ32GXgLjSziFh6mBfCFET2oL9p9P7VFSWems3Gc8zqKwDqPLDdczJysg"
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
