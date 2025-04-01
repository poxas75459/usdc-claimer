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
    "2tpVWKrd9vUm3PkTCN9TYYp1FSxqsQsWRWCcqFyFz9MLoJXUNgzxTPNjrbWgbBs4ucooqN3HsDkFrUCvnJi57D5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Zv8WTqRkmrb4X7NfRfgNvCHe8Y996oj6SsWJbN2yb1r4quAYfSnVUTDGTUdaRp4D2WFfmUbrHEaiAaayLihBDM",
  "key1": "2B1qQ6YaZEAUitVfMtL9qSfX3ZHv1u4yQG9JAVBTtMQr8ShmrBXvPFn2WTeDXHJw1NFevuQfwGKjCRwWH7VoyeRJ",
  "key2": "2Qt4JaRgqgHzgvcfE6JMh8UwQpEuKGxYoZaLH6JxXqYZLbkeAABVQzmYtBK9mGbxh38HVNLLLH87i3VfH2kFhbc6",
  "key3": "2i4mF9prSGUKGuhskqKaiuN5x52fh2LyNeU6k46My6pzqCZd4zAjzE9XKGnY2NyaDx1RAMJTNjgQ6jQWEtpnEz7z",
  "key4": "5zmCLe6jrdVzTRK3NerXTAwFJLtLrkyAGQMbtMkQSA4S8CpCkbiUJ8SWyNS1j1EyRYAvkhTnFrGQ4NUkrUKR1UQN",
  "key5": "378iEfFnEiNut8EAwCeFoNrJpaRcrrcKBtajxy3S9ENKXDrV8TAyzQzMnV4axKDLKKCV836gdiEoRp61LEDRDE4Q",
  "key6": "3rUgF6EJCuTjyS2fXKoqe2pfTbZfRsiohHX22DjqySXScqgnJVCUANACSpHpzXt5XBvapZL2gj4CveY52HiEzWwY",
  "key7": "2ifqjqV2353xXu1AbLXsu6JxFyGCYyDY2KJnEA7k7biVfeDwvmkNMf3cc8Gasd2wUg2C8bAFnwS9w9jbJmN4vX5H",
  "key8": "37eTc6XVpZboLxAV2S9i75VvYdAM7kq1vfuS1wnyQG3W6mDLmPPQTmtfPBg52MxJQZee3Z11e1T9Z3rvwaXrrWLL",
  "key9": "EcWcPQFdkzxBV5ZmyPXBH9idzyDUxHMFKeFExnqcyfR3jCrvjZC5fyq4QJCZerYuETZ8jnjTucBrStgRKMARSaE",
  "key10": "573MrgLGTPrfV6zPCuLrsfGeRG25FUw7njLfr5abXugZVfESp14stBVdYLaX5gyKPmc743XkFKCf5WJdU6UeK6Zu",
  "key11": "5Eov3LiMHhJoT6xEEn7xyoym33zwsWaXBP728uKEXSnLH7MW6J6bejscGfzr6kLfijUAMYoYHqtR9JEQBJYR5qq",
  "key12": "2AyxgWKGbRJGcf85WKaWXU9TgFEBvEDzzw63vkF1mvWcp3XgCDjEkN4zFSvQGrpuoThYnDTgnD2YjAzu2JH7Ea7K",
  "key13": "6651vaQ2ppt3ADyCLyvmi2ZTezP6AJ9bVddMVgxyptWJMbiNZPEwRHi1iiNwg4PHsQutUmFfigGp3bvidpVWBSUE",
  "key14": "G1apUUa74jCGGz9ykCBRvsgEpd4EpBinK5o7Z6k9JyuhEcrK7ZvTMfwYZ8KKKaGV4D9tqQWPSd5p9w4SoEm3YZK",
  "key15": "25eR6NgJ9Be12QRhEa8Mg2Z11Fmr33zDGkGrjoWhZtSxZDFfN5hpkemnmKEQGrTXfezDFEQycmEDWTBVo2c4CVpz",
  "key16": "5VLPq2kBBFudDd2Litr5yaHw9Q8NEMtu5XqLDWv1hyZthoL7Q7WY1ABXecuSfAvwNRoefv5cZD5mAdpAtwUz6LdE",
  "key17": "HoHgRo9UYjQz6T3LzmEkxF62ntEYE5zvUxzaEYUhGbahfgWN1TdHgUxjygxSEKS3L2nwQj3z5kaaUjL4MqMdx4k",
  "key18": "2zYSVAEgbBaDLYVc9Ed4jo5XoRboc2sMMNmtfGoP3qYw8njsYVUyUQk3B8BmVVA4JcypxfjJvEC4fz2wAhjJpMCF",
  "key19": "f72kbuycKEZmmgSD35nK5exV8QVrwD8VBZrJxKmk98qdQ4LDbr4DVyJnpMJ6QBeR4X2ZDkEmQ26WZMQLuxA52pA",
  "key20": "mbJWVsaneESNXBkUMdGZPtsg2STwfD5hKvrDiNyb6hYdSs9xmjfsNztUx7V7cX14UAsoqgUxmrqZFLuGzizq8xa",
  "key21": "4rrUopBsYS7Nqvp5Usb9YxDXCqDWMgD3iFX2pWtXSgFiwmCA4NKPi1n8C4oeyHrj6rT1h1xtA3zqBfs5Q9UbtiRL",
  "key22": "ZdCF1ez8rCeMoiDqDun4aDEiRPKmLEmZJeAF6si7Ngmnq6ESAMuwTmKxQ4F2mWHvNrkvPeHHHx4yw6zb7gEH2LN",
  "key23": "4mPKDY2tu8UXUFEnfW3iuhDq4NHWGTvpgUM4YxRndoK5AasjKnfT7k5vrNbEW5feP2pcCFThBDbWTJFfXZ9v8FJc",
  "key24": "3bRogpz4LrJTpNpxPwDTrEgtoDwEa5gAzT3Awwug3tGD1xF7CsLoG2fKQF373a6nc3fF6tm79tnLqE27dy4c4ras",
  "key25": "5xsYVTz9Ad6Hjga3SQWXxwLqt2Yenq7KBvLNmWhwp3KM2oXZCavtziJoS9Lr1nhfHsw3voPPZnWUr7VsnS9KMjJ8",
  "key26": "5FMDq62ozMGNUkNmU6gaUdcHjWvBJ3g5JCKQncJ7GCoPWjscKpqrdKFoNqmgmrVuoEwofsZdzEz8x3bBe1pNQ1CL",
  "key27": "5TsR21SEBNLziLV2PpFaw53pQRTdEetCWvanDTZMHgkrw4ydDByP1LwTPqDPHzNsNqWoQrJSBv7XTLYApu6dxchp",
  "key28": "3pLzNAkuWdKesFstEXFFNKiwsvVjL3icQNrtJ5tuF8oJegbuqXyuJ5xSkVc4hZS5qX7DMWpKFMo7zDFtQ6ug85sV",
  "key29": "imwbFoZgAUXSRRKiRQ18GZNpDuES9eRthUxKUP5tyYgLGJtVeUFFz5wqvCJSesCMKWmetFMqAapAya3GwV8KYCN",
  "key30": "2R2nLiRQqjdZVZ6vhBWvbkhKanJaVqo7niEKnpjKKZL3PyVZFckEst871UMKAJ1DiV2qMMe54mbMziSrCbMLr57V",
  "key31": "5L897VSCWqfU9ykVEVPa6WmQVoc5UfZs8Ev9gWS1XbTEAiWYmRyy2VVBUxXRBy86nm7a574SDUeZvc2HDynWrxjG",
  "key32": "XwLvVv3JZNks19kovx3AhSxRcciX7Tfwd59tnTHSMS2pSSjoJnhHRjoKDKDf1vWBy4WAfY3NFGD7g2V6imRTg9L",
  "key33": "4DV7HxQbmHWAYM4EycNPfKSggApLPJx1NJmGreC33okecxrpfpab1LPniFP6Ayhi8cN15hsaKt5M1z1Zo5vhq1og",
  "key34": "3vEP279HJxE6x4s6uiWmBqq8s591UJteoPhGrAbrhSJzfxgv4wSGG3yvJUBt2gix5aKKUZL9imaYtBhVjoU1xHKS",
  "key35": "3HFxV1qPMUPxbgk94yQQGT9exqvsNuKBsbrHWk4aiJ3kDTnPMhAWxjha4TFrckfZXwbt2fhGcgjiaqASc8qGo9dP",
  "key36": "3oZiU8PqDTheFWAyqgQtskG3J9wbH7kLXBVvbMqumX8R86X62AWcZ5K3XQKH1G4TcYe7QVMM7Ej1szD7vJ3TXAZs",
  "key37": "2qQ4DKXTQ5Ty2fDnk3yeSQBnhVa9jCWQFLmdG7Y91Bj2qNkCx9cdd3wDQNMSc4WV3vTfr5Jtbwj5rRdASdTcAA8D",
  "key38": "5nbC1KV2E2HKNcqgTRpuucQH9vwxdRJRfu7fxtsTpaxeYqqxQH9EE18E4RheSjsiKjjtZ7sVhVYkT8BmtqZbDJxS",
  "key39": "47GdjLe8nsqoVqPH7HQSirgwBL4o9WvXA1YGzTotWyCoEEjCF9YN3eWkFGD32UEhw22QJNaCtJZqndYDEw3cEdsS"
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
