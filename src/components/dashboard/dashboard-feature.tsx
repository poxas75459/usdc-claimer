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
    "28GTW24TBk34pqSaPAqdm8ey9AdH5jzDLqzQy542NeLMckjtVyRdbFR1XCqGfQaJr6eXgkfLVTLnQZgQXHEfKuiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JAgGPTVpH9Wf8KouheiFZJ33wieLvsfqe7YQvpv9AGMan5dY5anX51KPbfYf8nzLLBPYAFst4atwH5AJoQKq3ZZ",
  "key1": "5X7mU8ozZCyxrtZemJtZ8k2R3KozVGZieNvsPqF9EzQkUF9YUNfkLeQb43P4xtw74Vxw9nKsuweMVQCVGD2MEs4p",
  "key2": "431csDaJj3PdBxfudePUwzz6ULeuMqLrFMtFvX8b5AbMJoFdgvmeXWD6mNw5FwLMX2rCWHN4rzr7Uz86KFuN5BJn",
  "key3": "2n9D7CpQ7hktGtm4RWUMVrHnvwDvT9NCVBB2hn95aA6CQBp2rUXQYvkMsP6Z3XXoQsvGRuGS9MeWXcq3czj9ojn8",
  "key4": "2CrGACrWC6YpahFBaTXzXPY7bAJhrtsdLGfyjTKMZzrqxELdF1pqyGNnakVVJ4CjRLd4DpyzWvLbNtkfxxCpwZXr",
  "key5": "Yy22E2Evud6jM8zrLm2DoUDBo7z4r7zGCHt1v5xDqtssh9BPNtbsFhEDa2GXgxnyHHqdznqrUAVzmXz6iYAURRh",
  "key6": "4DWsUjPtNeWTQzeB6kWJvUAZ6Wyp4K5VQeS8VTUrZzxGV3swkB3zHNrkboqxLRBgAgj5aKU1ULh5JSztwEHbAKAs",
  "key7": "2sP5KA5oc3S7qh44xrs5TWk9ugQaZefNy6nowbMDJxgFqBnUFR5T5gupCCWe7i3QwBg7yJNh9rBvXYxZhfsLosaF",
  "key8": "53AbjA3CgFE2phGcrnSyfPoigGXKXwaMUrSHXvShH5sXDLtRNZ6rg55JJKdZu5CvDr7hX8iHVXQ2ZPdTYwf7jxvq",
  "key9": "53egFURnSuSmYaWAZXs9CnrA8oyEBPip8NMozPKHVkuFS2PjEW3JhKQoCF1aSg8RhujTUoPoTCQjY36zwTPWSEg6",
  "key10": "25qE4tD6PAMBJGqTd1NnZF8ESRHfcWHut2Yo4sptKed7EZyjgHfiM7GhkRKLNxb78mh3uSx9cuN39MyPZaXgYTuZ",
  "key11": "5CdTpYQW5vF84n4Lfq1qFod6GgrzvRENomuJj3mDRyhELGJUtS2vjXe2XFtM1m7M1yLs4vzG7uPNbqVtrK3KKrpi",
  "key12": "24mVC31erY6yKY2E5y2crPZkW2x14LthvsTjey4k38GW7pwHaj6aE1w9gynrT452PDYCPQBCD5b7LMdxH5jCtZvP",
  "key13": "4f8wKP5RNhbywpQKk9wGir2hsr6irqMix8Qx29u8RsKMkEFaCfa69xFMfwh8YMooanaSNwJHgDYzWnyRg7pkfTp7",
  "key14": "5uvWAoafnZ8D42K91iRUU74J3BDTRRcmwppemGBwW8QL1E5WT5BbbNydccSztk3sfrLSofTPNw2pZLBwkhefQpac",
  "key15": "YpSk1BstuPsf8btiu1cWuGYaxWX1cAmpPW2MEeUZRj9LSyap6tWNmJdkkHsbHwVC7nn89c4xK2Y43YxZVigMC1c",
  "key16": "3Zs9mKunetsz1qPMcwqPMJVkxXXiCG9VKXqgSAuPD3G2wus9So99NczBC5gdDmfWhHSea1Q6hb7Nr9A4H8ApidXt",
  "key17": "5we7YnaF6nHunuM4QqVPu77Tb4Yxnxike84byssgsHDmwzmwMNjjFtAQP3z2Tezk8cGwsrCNyqqVSAtyxQCL2Twx",
  "key18": "2Wk47yB7ZytGpPfwtr3o1DkwpYhMqhB3qS7HHFzy3WTvnHXe24NUV8it71YxjHLuhySiDiN3q3P8RDvJACd3XjeU",
  "key19": "ftzoo7Dy9ZjoNX4E256ewkNJ1MTQi3r23EbJNSaDdEHaEkVQKV2Mqmy8nq7a1juxcsWyTwDpZgTvUBNwAjtisoK",
  "key20": "5KRhzoSRQXhvhhRFeuSeTmHs4zRoYrbkRLcvqcSzS74aMTt7BDBMnPpCqhe8Tkt9czvK3z4JTtaGSzU7mHDSKRhb",
  "key21": "afp3qFEbvzGhBjK23yWUGMaXssHiExe5FC6wJUGj91ffrMDi92xg5HNuWJRje7ptYcBuDhkjBgiXRPw3XkHrjNZ",
  "key22": "618MQxMuxh6eFztcsiwLUFPp9MVdAKkuh6KvV8FXMXV97QmZztFw4qUohimeyNRV7wVb7rWbVEYdqLsGgKPzX66Q",
  "key23": "hReMGv5UjBfF85FPVyZiTzjKmPNH8hpej9HXXsigHuPWa8hdogDiMys1YUH4hf7ZDzpk3Twctuwk5ngAmsowwbg",
  "key24": "NAVBZjWD2mrrnJEoZjsEhuphuKPRv4HSxAAViFR6N3rJG54Wd8icwJVgfpKzgS9A9AuVTfHQ7ymX3VTAjsGowTY",
  "key25": "5vRojcjZiyrzLSSTk8s95PP655jVEF7opoCTSxik3a9zFQF2bPeAfjoiDdK48kxShnNFZ39iGiBd1ES4xh2DmWSr",
  "key26": "5gMvUbAVuBkstZYDXFgtp3HTRqy6nKbDWSBhELgYwRVcuTfv4WDf6uHeL87q5rEA2xiUpBLrKRXGpiqngdu7Zp4M",
  "key27": "3SQug5EEeAvRVFaN4noU24S2xmaWorDJkttE7nAh1C3uCXtNxE42tNoCXg3JtVBQkd6FV2H7wtRzABBE18bc1hJJ",
  "key28": "4VmKKAXojmAVXQXfLttmYhPBj4qxxX1GJKyRPvFaJcQcPcxAUGZv4C8ymQro5Ju7ayiA78q96rfUjGZiu3L7z8qY",
  "key29": "K3HLnKE6gU4U3gZdEdgLbeRJvkaQCDLTijqBAoGtxaAWkFfGjx11P1c1sLcoMiBqATNEgfhaHkBqtw8xa8EjfYE",
  "key30": "g1AMd2a78YwtvqnTxvQrWftLNRMx3S1GsixKutArwmLfvz6KKt8mD2m4bVDSgGGwAj2VxGLnf3wvLiGjProwqST",
  "key31": "4jcMdTTbbC7K8dsS72QACNXiZPpQDafogCh6zGKEo3gwMJqMoidP3f9rnneBd9GwZdfxsDU9gskw2wLbC6fHP59H",
  "key32": "3i4zFnXA1bn5E5JNUtL2yqqukBJh9KTgG3GWLAjC1FPeAJJmDdDPQiamc4fcSgq257is7N6h1qNxFwDUzv5yv37q",
  "key33": "4f8HwiKaabugMvC9k4YuK7ZcDMPcWCtVsvYdiB4QEkgBbgBZz161KK8x7jMkenDpYXt6Hcc7p7QTMXu5n6e2Q7WX",
  "key34": "3LAhMQW4NPyUb9FXmxjaXdgyNeqR2nkeywo9BLjbr5ZUwuPbZw9dt61azecxfQ72cTLEFgNd6mMfVyDv9hVHSEgi",
  "key35": "3rbP8vE5aN5Kj5XKvNV3v5CA8rrdj5Zv9wY3a8neHk8gjtbFqa9XqCmgtwzJsdFB6Mq87iT3ygVSh1gDRUasLsV2",
  "key36": "59e3m8CrByZneAJaaUGPLvRiMog5pMumhC79wZ13BbCQJLwqgczfzhUCrx2RcMiuLAxp3ZWxovC2zQWguhtSgBF",
  "key37": "4HdtFDiQkLmHmzeF98TREdwbCECBokR9ESP5PxNmV1GTtjW3H6vkNnjVkLUnAwFMKaCwKReQz3pnzA6uQGGknaGN",
  "key38": "4zFL4oVBxLK8dAWHnUNYqqYu9ma3UfU5LjeZWFDqvHhFagMTacCjPeJ22ChYRB9Muh6FLDLWbPEd5MhEYNnTVNwG",
  "key39": "5RiK1JNVRFVLjBEcb28z5q9SCTjLh87rNspSfJXfmtz4uWV4YUkM2mtLbUmUpuFmkppBWqLzSZeM7fyW4kroRNZU",
  "key40": "2XngfeyNXnXjMohPdYwQQct6repySFWq5d1ErF3fqoJDAjbyognY9nwx5PEhbT2XCJbCEBZCfBdxGvzUT3Abiwrd",
  "key41": "3zUMJLNmQaxi8APRSbCaSTHERJtp9ZTXiAS4XvpfyChJVNfWC6RPFQgSyBkfSvWVUMUB6GkjegrWeNz5y6p1En5T",
  "key42": "5JMc1LRBK3HW64DSkJ35gdtpHQZ1qee5yeKCZ7n1j4oDGbbeDVenUGhzLSjJAfsKFHBaLLqUmo713FjTkgeC2asD",
  "key43": "5tQKVp3XSTT87XMW46bycjQZeNAqjjxVtNjkcB198zihTYoUHMZvXw6TvnQSxXPvyHKpPXUurcn2nqgs7JfboiTD",
  "key44": "54XikJ34KmfTma3vw86RZgsrFCQWTJGddohhgJiYRWQoPv6veycFaBDpb8JWgu8ynjLxCqRKneT2c7bgVkYMSGcu",
  "key45": "4pFy4quwj7PqUJZchm5Em6HkxrGbHwtMiHsYHY1HUjxwjW5LkPwterpRAvBqbu3mqDsKJBzcYD4wdLVtH6uHLHTm",
  "key46": "2Fzahrgn7TVNQa9yRw7YqVivxkm79svxCH6vLk9KKLSaBdrjcM3ycGDDokRjyzq9KKsLEPe5FudCvaW6fmkTdy2B",
  "key47": "66499GY5MwzvakCNB9XQXEt16Qi582bsfiAZwgsW538GMTBA9oDG7Yhbn4CDSu1zdB4D3BF2LgwFpmfbQGuqyYdQ"
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
