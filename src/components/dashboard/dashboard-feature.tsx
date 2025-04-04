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
    "56UbUhu97Bt5zFSjFUdKyGaxiVen1fRcx9EGktq46qTgLSPR8pdy1SsSqCxNJyptJBbdqpcutoh3TRsoXzQ9ftJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZJgPJFoxnbioDsd4Fsfd4MVoXAmkvABMbcVZgjFyU7pAVvwo2BzmbQaLeXAUHGRnWmVQqvd5tThCewQiwJv2eR",
  "key1": "2fmGKvH4PRrR5WHEGnWF188h3K1vjGyDQZAGYC8NeePDqx4WmeyHxSk9ebptYNqb81E56tsASBmJdmJ6EsgvvQUi",
  "key2": "3CFaBv1h3ktMnNnVez4QxR3Y8CGtTfv65JgJNhUMK3zSccDShXEESFrXPs84uwNsoRoPp5V5GKX8WrMPuqgv5kqo",
  "key3": "4bhK4cM9kyC9LZc5Jnk4eCSKDRyivUBxadJC67ESBoHedAxUw7Hy5a9VtGH28agNLymksLudGgF1E7Xo7XJXbBug",
  "key4": "3wsDxdEPwww8oVjPkg7YVAa2uTpvFxFwPrCoz92xMsm5x1MBymCot7DcxPju4oPaxY8PdjdwDcVqXmBeDjMNAtt8",
  "key5": "3KHaNknjtPisRyiFs4XnEWJSArpScw8CPXCWyoanjHQEgYz2Wq1mCcWftB5VyQ369jrUL7YToyMjfLw1VWpE6mzD",
  "key6": "32aN8o1oZBq6gKf8AjyU8qcAhSbPxg81VwqF3dGkqLDHjTjsQaaFR3NYhiZARAhT1bA4aJburC71gxeMhHDKXX1d",
  "key7": "4ZZJCUMbvgMvy3v6DK8LQLnvDuKMYMbjaEcpmjKUPEaPEghYMQNCr7Ep7nKwwZ3qCGxmHi2AjZYjSY8pefDqaKmL",
  "key8": "ddPqmXrvsU1L6WTH2rpGNrJTryzqYCL4SzrSAK8diwjSsRXQQmaBZhEHSkqZYjbsB2mUCL2g7PpC9PRUT2aKzeF",
  "key9": "3wpL7GgzuopHdcQD8c5bS18gRu29MyNeBuZ4p9G35ccUAsZadYFn6adGteqT31tVHcB7gG3JgDDAsseieP472BMa",
  "key10": "5NTg2spQLcT4N4Hrq7jqzji63ZLhQZFRqWu9pogsrQhn9PtPQo1fhgjjmzGGXdkD7WAwsmmduzBVXscPLbpwKV4F",
  "key11": "41oFDCL5wWxZurXdJKcxQ1GBUF5SdEtkh4mSxxvM355eF2Uqc284bzHjPc3mMNBDSNW9pDzT5gxDQRwhXRmrBNUL",
  "key12": "5PFdti1nsQTcQNeRe8moNFCqsTrFB6GpfESC7YCeE3tSQTz7ZqP8U9Ax4CV4ZKG2x58NDn52kmR1jnsjEfaYDdGU",
  "key13": "48PDBANFKvr2cn6c84wwRCe71ChxH9B67Zt9sxpqSLLGx9eR4mwAuntGaxVtJbtP7PyFwPTG65upBN3H7eTyc53a",
  "key14": "63Y5giiV5nmvZykKTYnhiwHVXhFD5jP3Y4wzhSxcoYUGVv5hpkmz3WKDViB23ESzLqAevHzNW8YEezXxZF1kHBn9",
  "key15": "3DagjYFhjJ7g69Cm1jAzUC6V3m8b9QWmNqs3yR3GAMTQqfZfo68f4RzUhCQxjTZFfkW1qSbr5K17W3cWhGU3UKGM",
  "key16": "55bnKNkdkX1bQ2zCKctWP43kFw42gjooXTfGCP8WTvww14UY1dqRnCPujhNkahqRPk8pkG9zxhxNn3Sp9d1ZdNPu",
  "key17": "2S2EhWSUoH2VDMYdGcLGq2A9ZRCV8ofD9tPHjd69sVfVvfHUWG7PxYZMvKtyN8EKUZEruqnWHAZNZKLKxLrpuThL",
  "key18": "3wqF3L5NKzjwz8x7n5LkuUDZVD8B7v2RkAatikee1H8dz2vUQ88HwcCTmHjGcqRZJPAEe1iQbcjxS9s35pRQjSwU",
  "key19": "5c8kDyUCnBc5MBeoFg48gNsWCm4DoJp7cgWPfPaM5nRGFadzNoAKRBXyNtgVH72EoDLGnF9bVC4dRvoAmfrrf1Pi",
  "key20": "61uEPNzwaEggQPMXVw3YBUXGuiE9S3WKNgLeC3L63Drcp1CnMvCoH7Lo7poaPgHQFg6RMuSXK7pimcWSfzK3LYe7",
  "key21": "5v15v16ng7FM9w3yVT8UntcwFR4wVzzyb8uUap5sfNXLNoBvUWaenbCHesvLERuti91XpwzReHxU7eQbJS3JSeFB",
  "key22": "5URJRa1u84uTPqvvDXdfmnDdPCZZVymupjcAhvfw6uTCijhuc81deVZ33PUXuPgQdobZRJT8BVPGy5CgJWfC3yCC",
  "key23": "2cAwSqkAegQbuStkBjEABH5Jjb4GpjoXRK87ZvxabEihtzp72zMq7vpMW6NvFi7uQX1Lcsc3PQFn3iLC8DxEGY9V",
  "key24": "FLfgXo6AB2PpFyqH8CmWoyakf6nuS3xd5VuqdN4QLeSnA4Hq5GoAKizMf3wpTVM9E3xuPSSYyziFRMWojVt99kf",
  "key25": "2gofBcEhLyj7qQtjcm2K79FE9C7unW95FZeTpzc9um555bn4NBG58cKGCTy39xPyjFZgz4RsnLsRz62SmGSQTSLm",
  "key26": "A3D8rfcHKvkQbgBZmfozbV7SfyAb9SSwkf5t81wE4Bp7pYUb1KTphdJJuL2ZmLLckc5kYucL5SqNMr4NPppESMn",
  "key27": "441agpp2a44fo1ePC6XH8QRpg8EBKzXe4EcjLnqB63NYuXNUNBED6TT6qe4gqUDPm6gAMhFwsGp4JU6BkVs9rWKi",
  "key28": "2sJzUoYEJDxQ2AgTAsMeVrahuQDt2kocTthLhW4jNKPXYZJ6GYeRThTfpEQg2wjmVG1no5MnDwntCizNeje6S8EG",
  "key29": "ttdjv6WNn8LqzwHkw1Whzbg5bCUzw335fxQ63PTKCZYsXZH47v8aWEvonwh4zewopkzUHTRTuR5E7ssUgL4uVJe",
  "key30": "4mndvjCBedBov2aPWjeYY6BENBLoURkVmDXG2p637nZNuPJSFUBbJJ62c2HtPiLNw2STQ2VPqaKFHHF1JdS1DHbH",
  "key31": "2RdMFw7mJ8tB4d6vr2HmzCHWNAkrPYP665hPgsXEVNSsfs8kgkwT6kQmv5xbxm1HvDGwcyGobfN1FnKkpcuDbsiy",
  "key32": "3z3ZG9qw8Qttkguh2yZP7mwjkQXtgkafqj6H2qGBeaaQ48yoYGCV9Xxkr8fmxBbsWCShifQiGKvbSdg3Ee9jDTcX",
  "key33": "48RVH2wVtr4R73CTxi3wuQMdxS4VcTuNHTtAQysAywjGBgzDNjaUCDgqn3UtRYBFYQ24teV4qiXYYWnHzbDdvuBp",
  "key34": "2aN6MnzKbwp1fimzJW3JJvxZJdMpuidJLhxtdqvmgtKce2v6hN31HvdJ5wKno1vRnnqWHvHZo8j6gHdz1roLBcNv",
  "key35": "4jkjb125CGHQGDPqSNXBJQHodBoFR9tMj6V3VYTaUTP2mk3sj5ijYiJPMsxMVCYkKpRi85f7mgNMVFbhoy8Thy5J",
  "key36": "422sBS2BVLmxbMuSwKkmFHQSsgf3d5yXrYDM1paobEHUcscZ6ZZaRyXuTTxQm3Gry2Unu4derDbt6iUfaw4BSB1D",
  "key37": "4Dyz2XbbboRcF52vk4GprvAyBUDABGmqQJWrUrtttvoiedF6NvhcyC1rXWmvkFe9WA5SKc9eJySzmJJnJPpvGR3n",
  "key38": "5Nznpe4SumPfJY6yJ3f89dzqkuYqBQ1jWSnxgPgTSQPNsuxWnHVzJ7JWtekSbnLENR2QZkpuCHEezTqxZWDZuX1K",
  "key39": "rPxP89gzUB8wrXxE7QPrGvwg64AHXxHDxt4qSLY5CcFHwaLm4mYG632Qc9oXDAiCH3fYufz2DkQsizHgbq2Gwtc"
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
