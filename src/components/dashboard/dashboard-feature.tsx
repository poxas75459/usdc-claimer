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
    "2E4VmsCSUGuzsBaZxrErumMrLMcP9Mk9jwXHtQfukKNnKt42cCHao2CXqXJi4mL8b2poaMwAwKB7iiVYvvfY9FKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jU6jY3nbSDo6udUsf4VgqUYyKaxLfjQfbx7eBugyKQ3TZC9ei9cbNqU8SFc9KUg6j25jQWSg8SAPTqfKUQiwktm",
  "key1": "4uGGFk4cbhTeehFvaUemJ3Xq1n8sLqcZmzDVVXVEiaAEQR1QBWGiiT9q25NQqwAn9dP47uq1zsioW8NtmCfTP2aW",
  "key2": "3NakRgAnMgNNKSKB2xee87mZ4r9FECFxHcReVvSQM8b3xuqhVUWj6e5VR5YUWQjEWQzM2nCKy6UaMRcAVhTNxhCB",
  "key3": "5Fd3pZYBSGT8gbt6MBLoqSgUABnTKfScmvymztbW8eaugeDYC136f9ZtFz8QZbcqbLS95n3ddr2B83eoq4KUKzEH",
  "key4": "4tA8x4LFt1WUHFnvbeBcuFtq1csfzUHjUmhvfPB3ZGE9Zqj76e1n4sR6q1H5pQ5xhrZrUFpRef74BPNj3N2Jm1Gb",
  "key5": "s5zBGfraxASzCUZ7EJumRNjf3qceUnoWqiShjAvrp5wuSfWQ2Vs4m5CtmGLwudyUS7jsoZ77xQkZeW32JKNxbU2",
  "key6": "4wveBVHAw57om4Tw8eQkRDkWrv6GnP3z1Unw9GnYP2hsVC1Wh82X7UpUPsLt5y6jp8U2wRyJhEaVoJo12oPZxF3T",
  "key7": "5zTf2WcDHX8pdaN6yS2T8cDirvhZzWVXF8qYibiCoLMGRPvYd2eGiBKzkNt9ye3uttAV5hQszDL1f7g5Uh5jeUM4",
  "key8": "2v2Mb2k437H1tj9PGnN8ECJ2ZtkAinJwvy71vTDQgAQ5gCutAHiaDLbJgMfZemHFUwRcythw2KsCsVCVHeWGobUm",
  "key9": "qDjizuYNW3uZCMkqQ4wWLXukhTJReThaubShAnrKBcdMDTVNuxGvD2tS2i7tKwhcsfsWUK5kepNs6JsfDRddZLm",
  "key10": "5uiwfUwiDAhZBU6dpwmBvuSSu9Ax564jyTVxBrJgnHBWfTBLVcDT6JKrfjeQGaBzpMtH9k7udVuyesfpfuEzhTBh",
  "key11": "5vQzF8WaFHYZsXumn97Uau5Q7x4cBr5daxXuX8qzUX6wobSH8buzfBhnjYtdxPJ2UbhavXFMwZ2f56jvbyqCrsvq",
  "key12": "3DY2KprMYvr1QNqHBmeMNabLh9qnvSD5SXzg2pnKXEdUYLDY94BJBuKcdaTyW7tVpjLtotrbo9dp52W5fGgfyMrm",
  "key13": "2w6v51xRgRyoDtwfzgJqhq3y6FZk6A5uBCw1jme9CTAshJvU21jR4L3EPKLXSwTFNGzmUUdsN7gLF1fxoHmvUrTb",
  "key14": "3yrjfw9NiQEKQX6Z8kcXcUuBhXDTRZQBV5yqXBMga3MZ5VeKK4pTh6abMwbCWnTFrTy5DNYBTjhFjyeJhbFWDnbu",
  "key15": "pHjxmjbY4RUZDzNd5obwmL8kHx2M6C9rJV1bbUBQVmhqVo6ENJsrRdvAQnJNV3Eo4DsZMo7HsmZ9wSWkDpNYNc7",
  "key16": "42L26eGJRvyU46rmuE4S663DzpVCj2PPSSjAsVGeXsDWzNdnqzi2rRjdeygoVwED7vx2k5XRbmXpKfkC29h8ewKp",
  "key17": "4zmnueRhD7mKdg81MC6L58DB3wHs2NKy2NjnNCQpoAdu6PQYopRMbKJFW6XrvKCbnfC1Z34sCYJisWYaoC1n3iY2",
  "key18": "5MRTZcMCBdFvHK1piY1dkqBjvppxEhA6hKkwCeN3GyGtwZEE2X9LZT1KGJBfPTxnWV1DXapce9SrKgAdBzwXtneC",
  "key19": "4oWzCGtagpi9iQ7xPPczBHZ43ZdmHk5bnaAw1nvxqDmGtgTXAYzYBz2aSwRkXdKqJKAB9aQiVzjipM84xP7oKnxM",
  "key20": "5zZaTWAAKLCA5CnCXMfZi3ebDc5DvVcRz7R9NL1qaT1h8wk3AouSk174nT2rx7ECMF5KnTbF8CD9CdwuFoY4cHjZ",
  "key21": "29QakCnUtpLUU9JoGyCpkYf3V3uGGhkjnhfVmN9oWesAEfizZXtCejxQ6UrWFoJMp7G4yPvHyjPB19z3siVNsasb",
  "key22": "jnqe5b4zSQUML3AzpcyZAZ1A8doFRUJK1XTkM92Hq9SpeVwwoDXTwRyCRst8hNbtX2pyPxpth8yjZSuLybS4uLu",
  "key23": "4tJhDYrnEHXSYjTN8dwdrbsZn3yFGVGwUfcuj2Vrsm45tRgApKZtH2iPVQgetcRL8KmKLT1SpsZ7sMVQSHMAN1GW",
  "key24": "5tgBFvq74HHPDJRweMHNK7mzYEu7StZbcGFQw27WGGdsDaARxkYsRpsDxtmVmfgLr2Q7BGCRbrB7eqRnneinYkjN",
  "key25": "3BDTmbAEpAf8GQDunYSwqDU6jmsetFmUTAT8oDFZDViT2UGKGPH3RNnCnSSYiZoEETJuBJKJgUYDp3aKRQx1JLwH",
  "key26": "UzVKD43y4ewzdiWVeVFNa8EyKby53HqBPivuuk1rsrZCrQCU2XvqgkVk9EAgdVF2s3VcFvLmKJEoKiGU9CK9sy5",
  "key27": "5jcqpyL53LTiChhpLwf6NozBpJvzAmGH1GJDAYWzitX3gfPe5k8wrYDYz2NYu9mN4vjdbsYGdxBtVziHdWSxsGEM",
  "key28": "5tf56o9e8snZ436q7864JTvQoA1sQ1bpNZem9RT16sRy59Cin9VVMrUVfffUG4bStKhipkuhYCq3UDwCnat9b8Mr",
  "key29": "g6Pap6rp6MnAKzcdmY6twtkVZjSpfxLg6a42uhYugH2dpcQRPdZVf8qEDmoU4hN4hDhQgL1UoV72huttMJDSPen",
  "key30": "2UbXHqkvLcKrj8xuMLyFGTbxd3Ncgt6HQc7wnBbRv5GspafApdJ1bpVp7fjz86EwPoJSzwhBJShMjj1yZdh9RASM",
  "key31": "5ziuEFKdJ2xM1epndVQoU2YFTq4mZCxKW6rtXppzqLkKJA1778iRcysybSp6im5p21s74Cnnn5DSLFVMK6WksC8N",
  "key32": "3eYhxcBsY4rvJhf4QWwNmGcRdRrxkbYkTs7exxqQczYXmFZ1YCWUZCdCAiqTBvPK3vWuTutHWoidhxYwTZFPudco",
  "key33": "4cwP57NBi1Tnk55dqcSrjz1NoPZXPYFc8SgyamjtMeXP7NxiCRNyYr2CGFR7LFBK6X1ANg4qtyNKzLNAHZyd7cSJ",
  "key34": "332uD65LSVBEAihMxezm8kAQ8rpwYPh8k8oxiRU2yB1vMgwukCh7LkxAeFmdmbWfMLKaoDperDVBNGf74hNQWkpE",
  "key35": "2Ku9gKJ3ayxijDoV5fL3MncJu3LZ7ZtzACrKAJTL8vZaRCELBbpPyPyPCBvL1mhut4GfEFeWefipsrTW9CrDr3aL",
  "key36": "21zSNRpYQpSNPTDZcoFDd6Y87Kkys6WnMmpjfFAz16jQquK8Ttf4JXbwYcGQkkymrnfxweC3JxuCCe7JYyTZEryM",
  "key37": "5cSjy5hA58Drf2b3fs6QmEVrzPfKJxUmFb7WiZbK5AYXTQoAaCQSognFD3zgJpxZJJ4EAJohKHjzMDeHBcqRpyz3",
  "key38": "3LVZeG7KaYCiZjt9hwT44EfRmWAQXPusUhNLagbS1krAhdSERMpUaUCGXYWX6aoFWA2QfTwovgxj7TinZ5c1Bhn3",
  "key39": "2rNY68PGiPLEbjpDpucEgzq5yWyyQuUSRCf9zEsyuxtFdpV76RS6eFH9hBabnFQsT1GKDyGD1vjD7nEH9dVW8YzQ",
  "key40": "AfBZ8vq7hqFj7aF63nNum4qY9eNxvygzUdqkwQnu6h4rraZoJyfCrEUihW2egGSN8BTaCaJVS9GjuShubgKpwK9",
  "key41": "4nsHoXDjPw4bxUgn8tw6t9vkqzw2qwMrskU5AjAX5naoH7akY8ehVqziVsuji3KnJT3uLUVac5r5z8B1LchkpSqp",
  "key42": "4azy2zwVKyLya3ewQTwhnTNUCSfaV4QTDjspo5M6XYVGKrs7a3mstUKzbzkW9SbAn2GFfRiMphmw8npZg5bvaoom",
  "key43": "3Mn5d6gPC65z9odAnqjQ3fnaDY3UztbQy9nUVab77tx3tgfVgJZbLNt9FBKy7sNKpJUV2pWun858vAZXE3Gv27Us",
  "key44": "4u9Fh9EFYZdFz6xL5aQsB1GCqziqD8kvCcxFxkBSXGgHtbmUvkVHSAMS82KQSuh8whsfdPkctPsD1dF3yaCnVpx4",
  "key45": "5CfBBzG5axgM46uARry5SAKL52K9Jkg1PoMRcB9cDDVLknBcChHXQC8Y6hUhPbrHymuaL9PGsMNs3ggDPk93xMkx",
  "key46": "22cr7fv9dbuTZK8GP958XcG4c8ZowkCwKWCYExexPfgeH63WHzR3Bju2MUpCcbrp8MCVNjPR9BrTqrSR77mzdKL1",
  "key47": "3ZLz6VE9SWNFyEqHZCHwrzyCb63PrgE7NdK5bsQWC1Yr42jffQFusqyNAhfJSHccpF4HSCJgk4WtxCqi5EkuCnGX",
  "key48": "2YtjnS2aRkQ2p2rQATQaapQnLhPzW7SZLs5XZdxNPz8dLXkQEwkrZFxDG3cWQBE9f7nKmq8UdKkP7jZQdhYo5rVt"
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
