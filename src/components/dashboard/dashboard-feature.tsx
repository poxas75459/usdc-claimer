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
    "d113YqwQNZynsnnRTJLPucYaFYimXXuSETARrMQHTexfvjHYrNfsQEX82Crg2TpiBpFz9hCtUS4Xabkg9gvDTQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2GBiFxz2m7rAAsDzhQL55isbrXqW814HahF6BApSbZLm5QfX7CUWvt9cMJMqDfnuGVw2k2DpNECufEQVusW9Bx",
  "key1": "3XVWStuLxycW3ScPVNJarnpEXGHuonUGzDNmQtrewGWBVtNcHQsDEthUr4TZeVfQTA2XDv8jbYUS7n9uetcGnpsF",
  "key2": "retsPx9NsSSUc7rT4EBWHHnvQK3GhdwiJXYMdhAFumqwXH4NXsZDEb6fUAiHusZs9AtduCwAqcDiBWkK2nkbGiy",
  "key3": "KTbuo7rDjpgLCDPmSjjxKzxJVhpykoLNzPdAHrPzWrP3XPkWLQc8YKQ861zAAXchND72VUnPkJvbwcBrSmV3ywf",
  "key4": "63BdoXiXrEnoyk1WjiVtQdgbGbeNjZoykhMAy5XVD19rw5y9T3zKCknNHT714Wc7n1i2VtcvaYyom8dUArRFZ9KB",
  "key5": "uUgsnYXyLeHFrdkSVLrVBsUxzJq33j5mLuMiF3sPDAXDPrj428xMsnzqGWEutJT9okJ8Fn2qmVDZWaBSvj5N1ub",
  "key6": "4hrrEnVjGp9s2jT2mndVhq4wsdZh7Mmf1esv7ehDaBY36LnGKL4AqnvAqCatghp2K7nW4R4BFe2nYPf8dZ5eU4Av",
  "key7": "3AFeWnBKKSuTbj7WNaYY2zsfyJwMvkodyGBxzkC1Dw4u3CCcJHZ96z6pHSGemrcsFfNk3F6QTWBexZ4aqf9fYMv8",
  "key8": "4CrU1ZpXkr9smE9TSctfYB8wy9aLc6NLJpbSCChPELFqu8nGiqWdusyxhK7SnTKJzGWx6KNTwSwR8w7jpXMxxbyy",
  "key9": "57zbee2CZCbUCLnBjKPgtx4CYrMxihLSnhJnhhWRG8u7cbnsex3c8QRJp2YGrpM9PtGSzEMvteyMgHBdwWXimR2W",
  "key10": "2V6oHpdgARG1tSaRLpZncFGJFivxkY78DrAqtDuT1iR6ZvkkrxdtnpL6tv5CEgridVQ85AZGExQLrWVaCrJ8PomK",
  "key11": "5kcHSUGpcCjWu7rYmhkkmDzE1xocfHWvfEkKdHdr419bgVzm5nTTVwZ9YB8ygpYta2qVUqW4jBv9tVMwNwk8UaZ6",
  "key12": "31Sj8mEA3dkRDmGWYyWrCN9uEf2UuNQk3unxcYsbGb1FLATXVzaCeTQCfL6scqnkvB83LG1Rzzb2RQVXcJvc49vk",
  "key13": "NNWS8ELvJeMm2YawzkTz1K63TFbs72DnFLfFdkK4SJA87VgUxrb7CPCt9ax1XAq1nLaX9GUeBVc4ttk4F6G86qK",
  "key14": "5S5FHiK8sodsWghsJXzCrhPbfWDEN9HRFEs519seYJiuK6ooj8CM4EuUpArfCdhM39uAaXXoYAG52kHUmPXVViEv",
  "key15": "2s5He4zpyRHgx6Btwn1BsVM1vwFd98ipUCAcoQbg18GhueSePxcaWc2DMr6RN6eLsETvFGb1GrSgJhtVXXf2XNT1",
  "key16": "2pqbN1xaYgGFue6HARL35fnV5RKpRyefqpVVoyiXqE9YTqQhCaAwe4yQ8Z8Az1Wqb1FSKZ2EmGugdQ6wQAnyovuZ",
  "key17": "4wQirUKX3y8JTyPngxd5zmEBHj9LqtNpaKuTV2Q3otoqqSeebMyhiHSVoQKqWouXAFiujeRSdPPufrDzgnAT1uHm",
  "key18": "3o7dstANM1ab9WzYuJ596MM2K78uGqCHP3tGwprwdoNFJcU196RWantW5EYWhaP1oQ18dZ3K5mWd3GREnHezVSUX",
  "key19": "4Veu9RS6cWWnp5sFWQ8Cw7GiqyUYHeH558TsndeH4oZEX5rKvoZHVSimKg6Nmfx5fn1XPspEgJTbacKiKRAvSXRL",
  "key20": "5BQD8bEauTpSe5jA2TZ3GVor13P8tFFNAuEWeTgqD5ZsMCXqVuNCWivwnaoZb61fQYZtaK42PhgLYRya9hNZeMjR",
  "key21": "5a45Az7qj8tYjnxsbfKUx3DLZRgRTFzVmPb2Vft5UwZ2TKXtgdNhSKfur7c7Z2JZMhqVyoehZdeGibkoRaCzZhXo",
  "key22": "4pQUAEfR9JmUgH8MyTMMgWxLpbny4bZfQYWBBa5R9y9ndfnRtxUSpSx3eaimPvMCGcQCRW9UqDro6KT2mfryi5Y6",
  "key23": "2ZaNKJP8sBDj73ZdJwgQ6G3wFUE5eVTERXor9ntyyQZJtU5YSmyHjF4JZEWkaK9SAif1nuPaTv8bmDqG6FkszLAU",
  "key24": "5XLrZfQFwYmfix7BYutkKG2ZA4TPSy5iB47tBedFnAgtM6z5hrUUk3zJWGeUssFd8ChiMoMwqvewq6iiyQtWxm8m",
  "key25": "aN2bEMabLyGh7tFgshe5La9gizpXnDM3xBZidvSDr6S3TWwgwLA2C1Mz5moSQycTLAWFnzhHwwZX9hnhq94B7RW",
  "key26": "3SRhSWmfQcrhBn3qDavAtNCJqDXTC2CZB2BTac19K2VBFKEom53G3FgecL6bAL9XmdgWMJT14gbnVgg19w6PGV9J",
  "key27": "2eJDBLPeksiJi12e6xQ98tqHUVsYHnSZUUZEUP3EyFcFhetJMbLNJPngja9Aaexksbr9rStT1TpNLpD1yUrDLN8H",
  "key28": "3YfPcXEUe9uqyHvvtSrt4cu75xiaKDDxa9GQMuJy5q51qhGjU4Y8CAN8ucjJeisArK1KM7CWkWdqNWrvjK2RAT2W",
  "key29": "4MRyL2nDdjaj9ssBfkzeM4ksBspQi4LBikXwYRkeZp7wEN5gcQwuKtywMDnu65sJkjcYu6Dv4yF9HTLbHo2DTTk3",
  "key30": "3ABZVuXhwJL25NZravQVH8Sc55Ax8pGCkvnavX7pnwPD9ACSnb9NXJ3MGVWaJs7HdDAe4F6mPKqt7ZTm3cZtCzNm",
  "key31": "3gmJfUW5aBZsAo3cb1nPcQ8ppmGmxnpBewN1baHKKmNjhbCDByeo8FEaeU9VXKt4TSKwXGiakzmU8poadnPpRbgw",
  "key32": "4J1nZPN9JLEVvToFEz5qdtH7FMYgydcSaxxKRKEJemWApuymBqeCBdL6oWnyYZqngKYsnFX6H5k8oC7HRZFKXEXj",
  "key33": "zKxWABpTKmMCVbDs1TteQxuGj5yvXXyicRSYX5BSaxQ9yps17svr5crHkqpdQKejHYv9at2noVFDxwWqGehxSoj",
  "key34": "3MTEhaxvu8siGrWgf8uE7yM8XwXCn9g1WZsgF5Qe6Yj6Qmybgzdc9dmHPC9HZ749N7xf6jiFVaf76bveDjiwHhh8",
  "key35": "3BawUbPN9E1XuhxqAuYvvKee1eZHv2ZK2ZXYHVaXk8hSdrFpt2f4CX1D1hjJt8gBeRTfGh96o9GT7YGKLidkreCN",
  "key36": "dAnizrw11PWVtey6Cn4UW5jcgCHQLghmyW13ghZjkRw2cndCKCMa9CcnthhnjwFFQWJoUnNCLFMgL7a6WgCKcF1",
  "key37": "RLKB1GrYXX1p4rKfGpG8aKWF4zcCYDZozceViPbeQFe5kFvLqpv92id9YHuPPoM2p9qF6n3eKgNMeubtLgQ4ey1",
  "key38": "ok7yiDAhbWuT4HAkFLg37xfQhooJzwb2uWUqJeoc8ckooh73edzgA3qk3CBcFVcqVV14E6f5Nc47hGFKukDD8j7",
  "key39": "5PxLiVpaCsAVKL5by7Qavtizh1qkNo98MyeyEzqBMnUowg152yC3aTKoqCtFFEYYGTVURExr1a7pS6SSDkFxab9d",
  "key40": "3eqEsfqCZqvQ1CFnNY1PPX1HGA8iDJHqUNCMQR7REDmAewwHULvcXV6z9j5yfphPjiXJFKb4aKr7bXK3ihySJUgk",
  "key41": "55bpP72brUQVDUkowHXacKPwS3QhnRbPxCmD6PCkVbWpDx2dtsChN4ZCVvayBiojLZD8oCzhGbpaZmrQc2wd7aix"
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
