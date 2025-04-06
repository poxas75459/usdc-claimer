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
    "3sJYCDiyRWTE4JQLFZ8DNARK6xfWcmPsxRfWhVK6zVdzXRBjzDtwiMv3kkV2ctXjNpJDMF6sPy9NcDntBfSx6coe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "udx9Gf3swvaQmVPFuaStMa5xzAPQYCMy6uAGtBWtvxakEcj19Vsttg63VWN95PGLTxecdkQ6vmA6j4FCxe8wTBo",
  "key1": "3WuTgp9z2YjwVQ9jaFfR2ojQZDJzfz7bJMqFtnL74NCNtQbPsG7uHjUREX7itrC9SEuz9Uws4FHwUFBhv1mXpn9R",
  "key2": "2Nomk5gEHPR2fgjWYt9Dt1WdvfbR5a8LX7K9Cp7zhbebqM7y8g5f4ELmsq7JqkxfEXe9dxjTvyQYts5jP1zncPd2",
  "key3": "CKWPex7mTWPDvanuP6HwBqGj7NBitqBuJrssRLBUHyKVUnpRMkg5DLy4vohbTnrmXEJVrP5Db7XpBTUvLnrDyg8",
  "key4": "3f2H9jY6YACFrZFKzrEUJhZ9u595LQNYAxYA4biSy1qgQ3wejSyJPw72HpB8qyideobfYTYMEfpEUFBAp3V5oXxD",
  "key5": "2aDW8iBv9piNDENnrk88XZyU3R7EToYDVcQb5RLWNe7oXzo7RxauMahyME9gRt9iS6UV6PobFPaL1AfSzPQKQPTG",
  "key6": "4WbzRAXKznswrLyfWij9xPbQdnumj4Mb7kS7tBehRsoZVFfDAwaby79PGRBPRoZrqLw9i6W68hqs6ERK3yBdddTo",
  "key7": "2bnGNiAtki3uNBoSTNTDTuNT6pisWCa5BubwpU4w5Phrv8JbaqDK4cmFGdUUEnrgr4VGaafXHEab1x3nn1QRV1k9",
  "key8": "5oZQHRJdSgUhESk5BRGdTLTwKkdGrLF8UGGsWcenu2gPvxnaNAkwz9jZVUiUREmpxM18fVvyaz8ktwPHgnfovoR3",
  "key9": "5fHy6xQPqadV53oJCtC7UkxKoCJLrXa7Jru9AjaVnEvU29DjRvGFreowBE5tjgXYw4yTZ5iHv5u2QVXGvSARsdn9",
  "key10": "4QGxM1ToGdVKKsaooWaVhSEL7uwmqkQaGcJzJKw7UVGjWfY1fMT6h2rxdPUEtEirLBGyvzJZi5eTnoN8q4PBDA9J",
  "key11": "3o9Yg8Ns7nqcRnZRTG6maFSJ97eQksEfRbpjKA93zcWrvNpSQwGawyoMinUDZKh5gXuTsVRg6pGp37c4bksP2TPD",
  "key12": "2QdrMfCPQZryqhMvpqdvyzYV3gqfQs3t8BeTptSVEYZJtGW1AoPmRdAdxt5Bpri7WRTzm38XerchApSotAQQo7DQ",
  "key13": "2NUxcYByzq92F3UZLwhbyNdwnZBiELpMRRwoXawc3JtjrDTEDF197bpuzsmW5bjfzCb4Uecx5jhUyWwxXN2TZzJX",
  "key14": "4UZoJcUuuwFRKEHnAyb8NagQYWHo3vzqxaefQyZa1iaLW9UFTK7EAkURe6tU1dSJE5ch94x3frxvhPg3BrZmi4mT",
  "key15": "2C6gjo6iWEjWVFdZ2J5BkmCjkyBfkzx1F2oSAVh28Lk2YsnKQyMVZE4GxfRA6F4MyWoUhkfEJ1Rg11arYHGKsYja",
  "key16": "5Ka7hU9A4Pb7cBWYSEA2Ch2Pc6FGUhusf5UuL1GsDM1hsbDSrLtGc4cDMTs7PpcsubmvwTAK61KC31pa4Rs2Rfbc",
  "key17": "2G8k4xKRht4SVBkXvfrx46gyAueeVjUGz1bMH87TeUnHtVZFdMujo5TgU1pWZHYEjVEE22TSieKeaSS9yf6QpMMM",
  "key18": "4QveovA3VSLC4LnY9vj9VTVFmvcSftxKGqPbnFhgNwpZRGnT1FHjscxUVBj4YKGgW3dWoD7xwhvQpMQ83pmrHtBJ",
  "key19": "4Q88Bg7Hdd6jPtyrMvDEixnjbYoXEXCDfCDAvu6P8B5kYc6WQghMg3yf7g3RBTHrdskoRBrhXUbf9eGAv5Wim6TR",
  "key20": "38FWq9fdB8X8hWGtqAiQZu6q12TVErLyfSYwSLd7y36gdRGTUTxMTG1s9JPxsNn8LE7vNFE631c4AuZTnKfd2kcZ",
  "key21": "4Euz9v7E8VcqFYpVPxSDjwL8HvkDFGzVowchUAGsk6VetXJhGyaiuNfYMZVLnt8WpHH8v7a9YFiJvacHay1KM2U4",
  "key22": "3QwSRZfHWLBVW1WTzQDWtBsvJciNbE1hhX635WmM1R5QxEXNN9fWH9TPerVy3Zs9w6hG5jcd8kWKPujg73GmxjA2",
  "key23": "3p2DB6bAponnJsqb2pkZe2vhW87yd7cxpZaHwMnkayR3tJf5Ha3MCR7hddm2gUq6RxCh9YWZSw1pLNr5uuKiWxGS",
  "key24": "PJg3xj55uZHiAbEEiAahgDo4AB6p3ZJU3FMt6d1wNTb94JB4hx5D8MNfXCfkBtshzi15Lz1gE9EQd5cA9Y3RVuv",
  "key25": "5Tigu2wpfoXYKFT5PZ2WjPkN7u2Fk65ytnrx33XTG3ammP2jEscCuuRXp2SkgA23jABH8c67R2uRSva6gzoNAuzf",
  "key26": "fLrQzCEo7wviVSjbH7jxknYjPtKaaTuefwAoAsxqs6ZuHm4R92yy2wBFMsU8t8DxFaxdNkNdGfbebtN3cbomyng",
  "key27": "RT7DgX1jKJBACRwYSud9nyUTf6caZzMxxBsqjPciqAUuBS259juHSf886xDPqVFrABCRJ5RaKaa43WJhwEY77Ha",
  "key28": "44HwqgNp3BRdN9NtWxVcjMoAjBEL6psLZQ8tww6UKqkMd9Y8exo9EAGyrfGzgUK1yQ59xtNbEGJkeYhECGgb6kaE",
  "key29": "5APPKXxjeuqXWYZefYTJx9k5GVwksueMDF7RMeAhoa4tqoFLRYCES9PTymtFRXAUpPZn5CCpSroHdp7DpbGqRmHh",
  "key30": "NbAv88SXSyeXJXKnhvtDkvLqYnVrD1jG2rcJuQFK68uvg6tYPFTE32KTTmkLAESrzCqA9C8votk3QRnbifY7hFw",
  "key31": "4XCjMEUTGfdosYjyrFQXTMN9Msm6fZyBD2QhRUkoHYcyDJffc1cwjA6TcL9KsNPnviUFARZ8vpT6apadZUmG1RmH",
  "key32": "4drNUPjaYUYPwSE1DNSAZjvDC8LmYKTTfzh3ZNi3kZd64Tm4nCDzZy4tY3gXiddio71bNrwJ6Zx11Pgc7f7uUaqB",
  "key33": "4BypHc4kWNzZiTdo8RjSCM6ZkPoCUTXmhB9YA2X4MgHUVwNDLfb77hq77Z65XeDwszC8F8LkANdRwUBLBM4PvoJK",
  "key34": "2n2tuzgq7wCanhiGB4i5EZgjJbfaqp9b8s2mqANVwVtjZ8Mn2q53zYxX3uTKC6qK8gftA4FsZqz6PMte38n8KnVs",
  "key35": "5vpQc8XJKeUA8H7YR8knx9EozHRps7hPpwqpC1QhXDTsUk33VD61U2EjQ7nbSqSYVV8A4ZxV9ZEntRM3B5QSUn9Q",
  "key36": "2HPyuSaA7CLEpgjNtwCcdhfkHtLmjrNgLTVgGy8ahkccy5NjZbEPmgb4YpFwYFkDfLXPDLo3ypocPH4Sv4yQaQaK",
  "key37": "L1T8sSvQY9LmvTzqxVJExSsKnqNtXKQVe7y6961NjEDRno1U8vv9h8ZapN1NKaLT9kp6fBF7WRQVZYMhLJHNFjh",
  "key38": "3ZBY87Qk7jUKdn5cQj88zRZvAXWVKxx1sA7xKwZQZafWfHFdvDaUwHBdPGdTnDheF45sN8zufevX7jbw7M1oauie",
  "key39": "5xTjjUdDzMMov813UjcGcwGNFq11kjn2rTEp6kAz2SYKUJ7ziVmRB6pfuyMX3CdbjgT1jeLgdkVavLRzr3ZaApEv",
  "key40": "4gSJCoSyTygux6e3T7YyhEcvFoVWyjpXptCrtsvSoWFXtT8sk9W5v6gTzpisk6mY6VedHakBHamRGPb99NETdwsb",
  "key41": "4sUrCb8Y36GPaZoHhEVFqj67EWkmR6kBG9ZQbgU6CjrJhm4WSAsao3mVw2DuHDoZv7emjAqpHzHM9oXVK3LSgX5H"
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
