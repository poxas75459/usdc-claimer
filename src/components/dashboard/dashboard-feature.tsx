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
    "5HEHYfWPwUbSejazDmWUXjc6WbJzuxSXVRS1QdeTDZVnWQ6M2XPArF88BFkNdDvxTPCBFTQrwp66f1mPxURzNvyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTvH4kCep8THaXASybJ4qX9S8sh8YdbYTpcdrrVcnd5MTM8srTfs5SUzynkARUmwYAJ1jQGfGBpojkUy6nSiHx1",
  "key1": "2NSJvYNAC6eyJ3P4k9iiNexihkH4A4xogSdGUnwfZehbdnFSd8cE2nWrnQbzQzWFQYYRZZVPMswoVd75gZr2bYs7",
  "key2": "5xkHnFFnnLYnJDQPY33P6dSq9KzbtQnhf5aWvKGxtXjPBTpkC1VD6jEzyggEzRKA5CTo1utkk84YtHEAuY25GUJV",
  "key3": "44t4andsYDRCE6efps1EYaDaBZfknPtYnhBbAQFyJEYAioXTkMKA1CX19Bdto4hN8TVZaocq748Xu3g89rmVksmB",
  "key4": "3Q1UPpevd1jPWigsh4KSkTQb2FNgGv1DtK3zEraCHrNyhD54MxRnngDLL34R9i3Vmjbjv7E4hwFqhHF8fLYmzTxY",
  "key5": "5Se8YWn21mK6jgzkM1oUM8GcrTBoqRKKrip68JAaGqVhV7AmkbHAUcAgU1Bjfmy8YqB27qLHwt24E6tS289xy8DV",
  "key6": "rZS2ER2zfnzxBBNbSzed4CJ4xECDRELQ28WFXGHUtYTc3GxyKUi6KaggK9fi1q4u1S6pKJVj7b1sA6oibk8Lfd5",
  "key7": "cGtMAafHHqBEbPVtuyWFpPUHjkqFGc3qJSvLv2yfaFpprAXsGHVz25728QKBcJ8xB9uVx1niQMqhHkkXsC1Lw93",
  "key8": "4t1c4n67BeDTchQztD4TxrNcnSLA4bQdu6cjiCgdphtKYYETUfg37pvSBBpmjB6KnHu8f4sNaE6QuXB4gDJXje3P",
  "key9": "LtmcEJtMod18VkBk8ytFBFt2RG4UdtrYDuxRezoCqh8uSU2cLY7yrv9X689mfk7NaY7HmKq83f61pNVxa48cs6V",
  "key10": "5ru5APmuPao5GKZqxu3eynJWnGBsXA8AdRHaQULX4g35xFrRsBuE2ANFANgpR62q2wX5fYhe75jhzxiVGnnEMec3",
  "key11": "3QdwZu9rtg9ZuQ32oyPaCRGFckXMQrnZ2Tc3rWZbcYMnRxe8A2Jdgm5Ds6An56EjVEnuEJgS7nxZCvEWqcwZvZbR",
  "key12": "59hQPfDVee6uuMJJ5Qp4zXoVkiYsUMdWN8YRv4TRxLZeSbo3uYVXYCkPfrU57NPRLgTAwqPaLHjtJRQHim8AnVhP",
  "key13": "5xCqkcH3X6MKTMZFSEuzafE1WAM4CcY6thaskLfUVGcCDSgsnjpHPvtSLPpQqGASVTdPiX35pseUvBNBbZsmdukK",
  "key14": "4QqSqAdH7Yj9QtpsJhFpSfz5Ui5jeUiDVf3by5UjchhowyjzofBdidMHeBuZYWLNYyZRXP6Z3WNHWAvjauA9LCbX",
  "key15": "2vkiJctWXR9jtW7bn97ca8AB6PMZnXidtiGUSjfproKwPp1Ptbe7ff3BtRK2rGjjsNt6aUAL3Mjpt1xqVCF9csJu",
  "key16": "2YKzrfLXCyU7MXzGreXbsh1KXV6h7RKdLrxK76N8niFiEjBSocdRGzjYa4sbt7pBTjmnsey4chJSPHj6W9H2ZAuh",
  "key17": "2uFt4LCv9fPifbxjb8cgXCdDz2HG76VNAgGSNrPfTZnDSztyySC5Ptv68t7kNfBrWjkSM29vActbVACiCLrgDPpP",
  "key18": "2mZYy7obTyBTJunkFPSZfLiMcxiW5bLFD97CAYJuthMwPYY9JiTv1hiyiE5s1wyq6J2YqsLYE2u635sheDidJq1V",
  "key19": "22r9LyAYPLHZg59sKgbYuGqH3w3HvNMQF2PJ2N5U6kqUDnFhexxw65H9PMxc4Rmt12JbndADzeS8vSzT7p7SXeqT",
  "key20": "5ChQpUtLHWTSCMz5kMkWDAUJdUntb7C4NLHEcok4xjx5uSFL5En7aUy1kJavQpr414ss1ZAezKBCw2bemmBSsAjT",
  "key21": "PaaYRPVTdi9JvYajFZtnsfPdmhXLqppJbzEgAaJLLpRRo67gEA7E8W3PvZxWmR4Dek1qStqmrxvhAdpNYNYc3uu",
  "key22": "49zkxeP6RwtXhLS3GLfiBazgc41QrMoRAAiXKavRnuRhT8pQQjQ4CLivJt297TLyjrQi5nddB8MdYnvnXMYsHCLk",
  "key23": "3FiwA5YFSeejQrz3AWtGJgQBzFMcHrwNtjWyXJMFBBUKn7bznymk6MzzuDeaiZdKxnMWNV3JyKGoE7MDnY3YbQeN",
  "key24": "2XsMsAkjoeGiq8Jhgxw8U34VrMeFKEa1Ka6gB88ksxKqGmKczGB6DcMp1RUXRRbj4XgbtvJEafJX8wVLtBQwYhQV",
  "key25": "3DzWAnD2P4ZVjUbYZSes4YzzqRKx3MpgsAg3LNENk1Bo3uLSnvQzVojqy5KZnJneaamUTdMLP1E4ydBe3xWNpbuS",
  "key26": "3UcLRYqCcfs8dwHocwmaoYHnqT5vyhQWG7VVLxQ7LHthhh5L8Yr9N2VMHQ3c78KufxJssWfAuss63yj326s3u6DV",
  "key27": "3qs6qke8PetFWp1hkZ7KKNU9gYF4TJpBbLYyKKzWmM2rTGQpbQ6yxuzgp6CTU1NttVCzi7GH4Szkmk8khgn5T3SN",
  "key28": "5DMVoqGcSwPdDEW8SASBaA1viYGptn337MBEaSd3B5pK95GPAzT8Keto5TTxWutVNgYVmYknbiQqm7rhCHrFDwt6"
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
