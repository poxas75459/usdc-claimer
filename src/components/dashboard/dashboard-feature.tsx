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
    "51yZvwyoSrTmWdaHZSZdwi8mLW6WuVuh1ZsaWEPi27T9WyHBDzdr53dpSyAwx1EFVtA2UqPJBxr35gYrB1DNxBST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znTmjRrq8Xbx683Vjh7Nkdu7wNBvkrz7eBX2kzKYk14jEuXSfSFqqTPsoG3bcaXTKauPiXRZ1Cgpbrsd5P1VgMt",
  "key1": "3b5pcamybgW7D3RgBqskV4c1D3jHuXMmJVM9B1XgbWdQiPr5qD7BNfyZLBnmHF96JaBo3b4bYwQad4ZozQE1WLd6",
  "key2": "7dj3SaViBL6hZ3ZUn2rDraX98j7fEFmCd7QL5YnzykmtBcBDaCTYhdF6vRF1juXakfNrLkDQyrq2JvRhP7ebyo7",
  "key3": "32XUTiKGDk2qgXko5JkbRfU48xw8GHJrHHi2hSPqWakT4VoaWEVbi2U6g3V4bR1QoCAxofPi9Rd7Mfzv1UEfTMtZ",
  "key4": "33dvAEjVGBdJ6VDQ34NmTA1kjQ1mawX4Dc5WLv6q2fxVPR3rspRsnVyWmk6So5oEpdAbmeSbyEwzzzwjFoMziENA",
  "key5": "4YUmGAXMwuKA7gZQqcKzB654FbktLHQCAJtxcCkMpVay5EcT3inivw5DfpKKFmo5iwAqF3FDzYALZxp3PQWMPsPi",
  "key6": "5tDgsq6aSjHxRU88BmhHsWnFp4eWXD2g7p5gRwx57Va2xn9R7CNGt3vm42YDiD8sHT5PgvRcyWvR2cWmEFALTYRg",
  "key7": "2TCP9tocjMqdbCFgbr37efjLvQay7Jw9coxqRxdoqxnq7L2CvJNtXZW2ihht6aGdKqTN32dXzaS3zjpEqB1HBbKB",
  "key8": "3TnKQtb4sKfpfXAqRy5VKEMUDBcdDxVGghuWWRhK75A43T1dqBpT6Xi5KCeEyzKZG7u6AGVK8R1kHpKDJ4thzQ1A",
  "key9": "2z9czuPkG5rVu28GDrrJrR63vZcp8WUSzxGRv4nc9x1uD5Pop57yVrwo21kDmzJBpo1K17c6jwMWgoLuXSk7YWHD",
  "key10": "LAUNosx7KajHwgwPSCMXVM3rq7J9gvujandFKhUFWwJB2C8yYhV3sYptrSJjGA13XsvduQ1fgWbiVCnKGBkEQed",
  "key11": "2ik3k4exsoLS5So2dXPx5ao2qZCXGFfTPoQptm5FsP9wKiLbP5pLdrSRD4X6FpYQBrJS1bq4KwCHfhiFC82EvoPH",
  "key12": "2QQsmzaFgSroqp5kTqHUCvcJ5wdv3TJo72dEkTsjbQhJvkoBuEkBksxoiHA7wpysDA961oQsjj6wfnoPjApBHVDo",
  "key13": "3Zt5CT9S3mm22icdnP76S3pBh7VJ4huo1wD84ZzFLQGgZueZZHXP5RTbnE856HmoN8BeY1VFBhGnAE5HUT4tr9C3",
  "key14": "2oX7KAYTKWTGnximcdHgmTsQ9gRNriH7c7JoN2DEuQqCLAmrD5327tUu8B8odzzxZK6Dz5pRrJL35Bhtehj8Sw6K",
  "key15": "5oPd3m4yThuxwpvL75DkAesER1Uwttr2u6Fra25HDYw6JYovCRbH5UgmmkHwso2ofPxVqhLsZqajipB9gMnxbZeK",
  "key16": "354wnusdP79Jd6TLbwbB7E2Kz9CNR6qj1qMNHjL5BnHY9txJcNf1j6KQ2ZsmB6LF744U4FgwzLZyunhWsR8YEUDg",
  "key17": "61YLL1ZL5PQLFrf35JhbgxCwSmnXHfuJzaqqsFjTRZh8vgFgShLTp1rHbmDU26zKV1M655wm25gVYCgcFPbaYEKc",
  "key18": "xJZdQBFBooYCfXEmBjpzDZLHRHGE8zY8rj53tArjqKk2xPNGR5kLg28R3CBsFxKtV3W2uc71NVnNz4AamQhm78x",
  "key19": "2wSu9UFBjZkJLSxRpr6SURH8jcPTcxuc14AU6jK2PueiRiDFuqvXdFrh9xmUbYVzwQafR6bC4LMNu27eTiCk2Dso",
  "key20": "5CmsxMKX2KXfZZGDKfCFK8DeD8jFpDeHjnSRz4SSMMwyb7ig8i3Cpzgh9eeeZux4VUgqvMj5n4bsiKCarQHKTzM9",
  "key21": "3cFTeEunpgGjQ7FLFCFR482p8Koci5gokXH895XvEEFQ2XSeXpoQk9u4AsKycSkkGCk5ziBAwb7fN8PX5GfzRAHR",
  "key22": "3Km77uveQJCC8neduc7GrA2TEcqjAKL8g17j4m29afwV74MVWjN9smELQsYpmeRFEMc5mRrHdUhryWRJ9pBnUSeY",
  "key23": "4R1NQwBzJwL3aB2yLZjBVrbCTw4Wm6V4n1oy1AQxLVYvxZKEVg5dt4ryfB6hF1MDYqox8yxu1rejbCpngChZScXw",
  "key24": "4BHwZoYG1NmKLuPeiBRQ95oUhkJVyqXHmyVkyaDRp6hRMheEHXUFDYoyuc7Zsdd4oCrHR5BiERky55sexSrypvtE",
  "key25": "4VU3SHwsauMsiD5kQVhJakkNnAYzjs5kHSQyc22sgcbwDwRdN9d7nNtc9J64nEYkvXFQxeT6EjUiLiskL7Mbunii",
  "key26": "2XYqQTxaC63LAJRjXC8Kg3DHKsLrfFMoYcgJ8eigaDUPusAikaBnXKuv4sfJguHux73pVSbrzrgkM5VCkwdBSf6Q",
  "key27": "56SyiMinsaVbpkBAJZV7g56AfPqTksKFy1NZGpG2xqZXWa98JdFCvyEDYBXKMbPrwzfNhuHs7Qt2PCZNbX6LFpNi",
  "key28": "2tLtmqzhavnbirWAFZ76GUEw59vAQnYWUqbHPb86trZrNzmRuv2K5kQS5yqXdjutu6HaGUpRbJHEJWeR47kbuS7Z",
  "key29": "4dCx5cESHMeXkhWgZXYT358jyMK4wxMN2zCHxW5KzZCKqzykKLGmxf8NVmEGpJjBZfDq9e3HJtY685ugqQehqgZU",
  "key30": "288tRY6HSPZgfwbnznxCr1KGNGC1tyCL9Jv4WUiK5vys9c6sMc1yjJW1tH6154iG73VhShnCLqU5A3tHmJT5QnEq",
  "key31": "4hvpnM7rkLRRTGs4VLPyN9uj8TYmPP83rGcEeWiZeKFGraUxGZpaWYorq714AFgVE1aUZBAcKtYi8TM38cL4PJA5",
  "key32": "2wYYvDntWJa5q811Arj4mNS1YehffXtwZk8jzzFhVsMJBBkgpH9jmG3Azj9BwD5Van95qgFieyCLa2GtG7npv5v5",
  "key33": "5tWAdZ6jiNFGpEK9SYHroP5hgVuqgBM86gSyoFr73gb1gNVWQCkQdiY3wBo7gBNBhSpLLyBopyN9RiwgRmFct9Zu",
  "key34": "5wTg15rw2JET6bFQXpj91LfGEMAnaEBLEmfMzY4kHRrWgMaxPRuAWoz8rE88wvwtbyDu4pc1Kgzj9vy3RtVW3LGg",
  "key35": "4567gCa2BoLQsN2AV8VcsrYYJEpAE49oeCJZ32wJ5mMnHo2nphMBgdeLxao2NUkuTNJ9EJ38CJi8txBzM3X7cnFu",
  "key36": "3Z9xzHsqUiUtr6D1XTM8XujJT4imDcb7Mrb7QUvRxwb2X24S8xsu67NN7R5cVmDhsBC8nQ8hCMhxdWYF8hY8pieo",
  "key37": "FEGdzkVrkfFb9KtnmcpPa5FKXzCnWyqsm9ojzjDK5xXLf7hy145e7FyCHcJ2pR3hGbx4mLcNEincqnJFfmpxJ5H",
  "key38": "4rBtFUapd2hQPRtPtzBXW3BvBLyikcJ8vQvjaLbd6frXW5Wxn324ZuX3MkULdeiXJeLvemPiq13YU74uLAHyf83",
  "key39": "5jVXSzNPfxDV1iZ7ZevH37ssp8wqcaB3HLMhfUGFeyVHu7bQCZErKo3c6KZ23DjeNX2NK7bFvDAeUywd3SQLnmUW",
  "key40": "46kc9BrgtQUxpSDeHiaqL5vmrS3DtRRp5SWELKdW6PKi2eunV9eaesqzvP26iRoWkKX7L8rsKoRWxP1TAjg2YQGV"
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
