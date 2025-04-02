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
    "4RaoguaFM3un3hWBfUx8WMq5TUL4QNPNvkvAnudacKJk9pw2pyFPc1Y9FKZtfa1aXNui5bw5LrFeBRCsn6FgZL1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NgK6WnEqUW4VjhpNc51RJRzwefhwTCJktYtB8Pqskvhp5P5CwqtNhqghJ2bP9iqWG8doxCs4H55Wdz82yZkgSW",
  "key1": "55RH6wHKMgwGiFyGkPyUW4uoFgtScA51G2CP9FUviCv9H9vfPAhxNMsY6pmkTcUfQqH15EbmR2FvXGGaCqx74Qj1",
  "key2": "2S76WRbJ7G4opVKfd6phpWe7ZrajWvFd95sYfTbwfkAuu2KxCe3NXQUAJyBYonvW1WQtmtVYtS49KPrNdKHCUxFX",
  "key3": "3bbQoASM5xAVaG7CdF28UtxJUdPhEpai6pWNY7Qg8QHranhfQRhS5pJJoeay42TuDEpjT45mP1T1xHS4tpWqLQgv",
  "key4": "5QiSLEvJD5dasvrxqKYQRAu6zkiUaFuLeANXy44F1dwDA4HPtEnr1e5YtyzKFXh3ZSb62GpsYKkZXf8H2sxdD2m2",
  "key5": "6ZYKHeSVF6pUHvSyk3kGDTLeTR3dj4z4xbvTntzLaPKk2MXbXd8ToaVr5ze9ypMPkp2ZWt1e7KZfw3yNJnuvwwq",
  "key6": "4Rtd2toqt6cxKxqU1cDUrkeF49YscgDQ3uehdHgPEEAbjfGrm7zcEjhxkYwb1fJxNZieyMkYhP6imQgQ7wZNvPxh",
  "key7": "4v5i1Z7v18wtVhvJMKLJXRWzkiBa56rCnrtEm1DrZtp662Wa1ZvHmTxmqdNmgmZKbzz32JJiLuVg6urNvjsdgVmj",
  "key8": "2TgkLa2hKi5fi65rWGHw5rHBrM1F1zBHnswubEcitxz5qCVHzWoT5Qa2Jh8SipVwYqiKhXJ2kDjLmZZQShcGwS9C",
  "key9": "2GGZuzmuso7H7QWsassinNknra1SzaqnZshScwVfodsvPiiKqi4GVZVXEyb63CtXgb5FVR3cxTffxLAjqwibrnxX",
  "key10": "9Ns4Zcv7twzoMXZcNimT8QnNLnd1zkqZTTAf7YHp95QKZRE7UvwikCuFwUDLvbs5MXWwdUCVsWfcdhozVrVdSam",
  "key11": "3DmaESu2SeMNNiGPYxjhRfLFs9BCJ3usu93xjMzaoYwLgLYhCXGPK1GXBDBWwiT5G7FUGRdLpotQBkQH1tpVcuEU",
  "key12": "2dNTgCxipKG4DzoVdYzv9RmKFGFfrwUGDtG6PbPGZiWfJzcD7HyMD6TfNgpAsgMwViJKCF3u7uaAqiAMoyq9ma2v",
  "key13": "57bLs11hTFt1i4FYwMnaUtCZVtWwKqYocT5AxbLoSom34ZWABzzscUxJWQLc552rSePDNKTJgiKKrFjPtJA3GEPr",
  "key14": "3b1Pgd8sMo9PebPtz2V9P1rNQN53vGetSTjGmraUggwAmaum4Y8YvNpbeYuuXQR1vc72A5RVSVhAkbSjKpPf5GSC",
  "key15": "3Bjk5yNju7yPR9vRMjZLszB7XuDC16WBoHvBzQARDS9QVX8Rbzzqd4Div7zjzvFedhb2RWRsftsHJUQ9gwe5Twmi",
  "key16": "38MG8XYYhMkxhwDbxRbUkPU9bg8ugiq283jUXVVicJiKAdzR88RsPwNGgPkYb6akUC22fmrdyGHCMWnJygEbnE5y",
  "key17": "5xRf6kKpF4VkkGhRvdr8HMN76AqyuisPHXX8Ec3gfRiJ1WMqSDppK4C1QXoFHZJmnrBqDNnPp3yytHtLULfr1rqT",
  "key18": "4UDQ67TTAaU24fTzC8cjk5Det71eSSG8hu9tUufSeFqsD6eEihpq1nBsC3xmo4LZ7ve5Qb6vZ2bb83dXtwWrZANu",
  "key19": "4zyjPwYC7x6jwiejFHYuF5sggBMGVvkJFhP6fXG54mgUK3uvxERDBKxZPRdS8eAwvK1pYt8BGoxv18aRH32GfDXF",
  "key20": "5puZ59VYV4a3UzGmkXqrDFQiVfvJPfmZRv8i7qFD1ES1SvbkQnwRbcsBGpZWgAjukMtKyR8wYmKrGaPTuR426Pmr",
  "key21": "39veSYboTQ2MAYBYeYwTER53EoXfYj78PLgAnund6AnTur4RdWuQRDNDywojBxxZn3UwUJVdjU6MMMSRsZWrWFht",
  "key22": "2JasrCB8fYwkspTifkxnZhry2HmAYwcG3mE2iyYXFJJH42wQvrCrWeaKDhVvBqvBpHtC28tuqZ3JJ26xdHfNtUK3",
  "key23": "5QNs5XMx3mbTi6EftdfQUcrymRqJwDz4ZD36buPkXPqS8V2YHeXbdZ3Fv3fHMxXgj2EQR97TRM5jrhCj3Lmd3Gpf",
  "key24": "Jvi9nT2uNU6fYnfdGdzH7CZChSexpc6RimcQPsP1WjSPNe2sr5S2Gos4kKNEQJLAVTVewuXvD7xg7TUSBKFEH2i",
  "key25": "4anG5Kk4fcDnewoCAEfQiiy4PUi9E6DJTzsWNei6ELRpVoWJmwTf5QNV3kP3W1YsQzDgQkHhYBvQmEF6GB1w8gr1",
  "key26": "4v6j6QX6eDkZwuezy22CmQfKtF8sMfvbPA88cNqkng71QZoq8fqRgR9mx9j875zQjj5sLNSnco3AroGehfLiKvkL",
  "key27": "rEhSEDFQ6Ftz3EtbTqYh8aMGSd9HU8dxx1bzR5yi72n3THTiSQ32kQvY3zm3NasNDvJHiiN4axCNzgbiKFiK49U",
  "key28": "2rswp5MxGWknogvQko4S3dNuojc3zZKwSXyo2fgNqDRkbv9jo5KLk8h9kC7Sphv6oM6SCQtRAu12i8aJ6CRGA7xS",
  "key29": "36ziKET3Pc29WvJMW8bwAmaRvAGEcvtmRq3YDyhnCsN9x6oPtuLcK4ZwdfDyXWCyYEogrQEM6GfWZBWo5yvBnoJT",
  "key30": "5Uzw59NY2CS7nrQh3CGwTi9VrpU9A3UmeCzmf6n3fD5m7AgqKrM6gdCBGEgVyRWVJnQz5AcTRbL9yhbjiHX367HU",
  "key31": "C9WrPtKCVodhPAMCeCBAyWaJfxCDuYxdajHzQm1fhzsWAKGbYLkgYCbYQtrxoQddnz5JwePRK4camvtHWzt8sbB",
  "key32": "3ihaNjzEDAMpuicRAD4mEnzUG4ef1bM6tVA7cgzWkzhmQFmaXqsiZtpWZ8NwvGjHCgtnNUCfdbQq6zP8TDLCPD44",
  "key33": "2DJHitVB1aDoZxYey4mizYiFFMQkdbdycvYn1vLdx7ETobC9ZfQSPHHba16YFn2S82WEGQq8AEQHZTNubPJqzmW6",
  "key34": "5mwMLpPdk3VtnMpop5gNopUKbk1V1Xdnzcp3AaTeGyJanyeARXBfHaH1fgpT5L8D8bcfJsxfzpkKPWvVz9t6wJo3",
  "key35": "4LE1T5aPDJDs5DC93fcunKcJuKbJKdMagVy4z2LuWivezgcp6oYtxzi95haonZMVKD5ARWq33VN2mfD631wtfuf8",
  "key36": "4yWCMTeeRk1KCrfFqwLkvKLM5TNUYZyZe4xhHqt6JPESzYNShqYgDVw3wG6S4c1YtscLrR2R1x9nppsE7U5T4KrG",
  "key37": "2hvQFnrkXkPoYine2J3SByHtmqFxw6Yumsr95JYVTkShwK16Bqe7cg3LaFWS7HZyxrxCXChvsB8VtWJ8io9jChbZ",
  "key38": "3u2SMc2YQAiQ9Mp5VNJZbCt2bX8JfjmUzPicmVMKN23r5BfRQDkaiDHm8FnGpZjHGEXYz6yJbqgT3WmX3ausHTwm",
  "key39": "rKF9mkwRyXQCniZH5P1B43jJ5Loaruv7spfvrUWMdRMcHL883GBF252XjMFWFttwHQfcY6ihvKGDVqepRmqxrnp",
  "key40": "2nePqCHjiu18c4U4GEBpPWyZPeWaaVFbk6mW1uQmZZHpQW9MwdzV7MMdWxGENsZU5vNPzAXdDdCDDAg3YZqneeyz",
  "key41": "3nL6MQvAzUCTEzZUt4MA9Fj7QobV8tQY54Nd9NSKE7gwfE4Mm3EStvryV2TYmf4eSpV2AGhrnYqdmcb4bLBJzj81",
  "key42": "27dhxvHe2w1DD7YqBBztd49GjAas1kEA1CZZtYdMtKYw8GFiVSsNRy5dZkbyDnx6ezE44GgaHEY41LQBDhnm3HQo"
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
