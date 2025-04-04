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
    "Jg4xQvcXSHTWUcfQ88dXJBgPki3EUHEkYUTSKNsMpCyocoavTJN5MdMF7EML9sV65BRvbvvDzceC2gipvELyZvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ReEomDTVMKxVitoTXGARpcG68pLS3ygriMoyFMrwxU7M9LnZFsmQJ5LTdzZCubcK9n2Repg4Fym4REDGaDXJKZe",
  "key1": "7BwscoWzu2A3gkysN4PERm75TqUWrvTDXgQRh3FmubHpsW55aKc1X6A5Q4E3buvaZo4pZBN23jtVtETu29E5yuP",
  "key2": "39PqXz3uMyN3tBSLBqpcfgwXRLzEP1RheKQrxN5yKxoAza3GQu1nYa49aT3P6a5JymsiDqHYSyhb7ofaoPS1j1GD",
  "key3": "5X5iDixTotf1AoBCbzCwGEUj4LJRe3LHrx7CYX9pEHdq42ygpEXFzAwPXtL6V9CDuCqaMQvzQmnNsqHXURLXKKbu",
  "key4": "2R1aLUTLdoiNSLtFTwpa7ZGwt7sCjpuM6fE9aHNgVVosmZkDF6EuB3BUGpqrqASWTPVUdEf4kq5T64DKFWVjMp5s",
  "key5": "5vxfXgcoWgQL2buPWUWQ2PFFrNz5bLxhzr9ihfnq3o9tgjZfrxPPY7QMMxnS4NMoBnGthuTg15fdFwYLkWjmDNdW",
  "key6": "4YjWeKtrpg1ybvDKBAobtnj6jVVDbUxmJBcEuoTUrRx1H4WCt831tfbBiGKcU5CqR4aBxvRtUyLFMVd9wE9x9E7h",
  "key7": "3pm2o2qF7DaYNUGf3X5KTdSKUZLAKJTEHcadiSQbaqjPi952aaQRKLvh8AtfdP1QDnA3TSg8311XXPogqdkd2nte",
  "key8": "4uinUU5T15442HZhFcidFeRp3h5Dkd8rJpDSoQHrGF8Sdv3DtSpPfCYXziqZ5JAxJU5DcZtGddJ1GntNwMUzFRCy",
  "key9": "59AwzaHaK5ruwWhfydM1fZEj9W9MwdLdaqE8q7Xnh8M2Tz4nDrmnD2J84xgHWUEXxenMzmnpuki67Uc7csk6Yzny",
  "key10": "5PgxGFy4pGi5vjZNKp6j8gJwPkG6MrTcxxnQJ8uacXetAukCNK7N6KHrMtibiA9USQwFdQykqNuEeC3yFFNbUH4T",
  "key11": "4qsEBjFc7bpYrfrmAKm9iLAupE8xZzaws7Hj9ajkkdPGFwKMk7XBsai6vykUHoRh7LhRLnVpFpfmK3oCQx1yRta6",
  "key12": "2wg8fGndF6KYKRtFGoUa6RGfLThJKEg7fbX9JRAeHrRGvrmk9CDcHjQMfLm56DE8uuwki2FvN7o8qUSkVYCGovHR",
  "key13": "GNqDoC6mVRrE39cWbGibis6npnmkgH8rCuCqbsbqP4aqwcsv9SqHDwRFzRjUCjsdNxe32EhqmASvcgSSEL2duU5",
  "key14": "42MBrrH32Ru5KdM9rxAvcyNfo3pvRApxtP3tomfGXvhtx5Tkp3z7RzZmrhfVQDDHwa6VBBWFfah9eYDi3xhV6u84",
  "key15": "5wSND7Zc92bu7L83zn1P6ScZVgSMcs1QKGhzk9GLKcoNiP8C3K4pdSH64UWSxGtQC4CfVck14Nv5TVWMrzDE6LNF",
  "key16": "2899ebGhVTWFRtcFNphjjn662Au3n5pqJ26DYVWNeK4xDMieDdMJWijW7prRQtSjAcrcSHz1HvH8tAEKzdbwdHi3",
  "key17": "4j83Qp4v9ibs6yidyeN2FNE6vWe6UTw6Y6c1ULPCSf9XSMXMXu7CdAppVAAUajDasvUewPQn1Q98L5H7LbjLq6ZZ",
  "key18": "4h51ASewQoUt3RmGrdaQFgz3BHvsa8U4VJx7DYsvk6v26Te53gixmyaFB59XhQchQquZeX1kVAgKwi1GqmZyXPxY",
  "key19": "35SC3NdLiYNszbs3hpJsq29MjuouzoJCj6XFWBTs3R3sD9JpSnBs89YhXPgKkmxpvEbS9kRdiQXpSDq5bH5ENf9w",
  "key20": "3qcJsLmNDErwvW6Yu9Sg1XyGtZxAkesGbWJXLomzCVjamHRytYF7h32fu2VFBppPEnNrP2ZyTr9yuRuCqLiHsZBo",
  "key21": "3axhYgSGBA6jKPTHQfkn9TrnjFyaaHp7EZBux1oHifGpZLToBxqDA8rogGyN7PJw9shm9YNi66jJUXZLn3XPCZEq",
  "key22": "5GL2wgJunpuso1iqQwjDcNFmNKcpD5QQGBHaDVEXyoJrbWx1FBgBKEvjGhG6wcCQ556BhCTVRCbGeEeXB1BXzgU8",
  "key23": "2tdsbV4P7ahcp3f2pxpqckZC9Z3Ln6xzVLaFCdQX6tTPJ48Vx2dF7vCnkrYdcTkvx2Qx1VwXCNjUZtGp2X3JZjom",
  "key24": "3LzW3feR2XB6voTjSFNDkgeVyp2HXQo22L68irhKtm7qGc7gN11F4QPZbwbshZ237iemD1f6DkugVNViywoAoDKc",
  "key25": "2Rxq4qopQMXvLnY7kUMKCwg66vVqkpYguHR35SpeY7rGEv8pxWR6U92T7oDTq77vroWPSnJBEa7QSn2D8nU2hBsr",
  "key26": "2fK7jAp6TK6oAPeAjFPkF9DJCDLwr2o9cqRYhUaGyhzW97jriurPatA4eJgd3Kr4j7edEHGzJj55trtcT4yiyBNi",
  "key27": "3ZVNQ4RMizBKsPEVj6eVBFq9oxW9D9iuvWpjDyF82CsrDKT53vP8bUbJe65452QEdTRd88QrBe5JPYFwGhhymTu",
  "key28": "22kHmLqn7iaPVXe3bSX7zhYNk9nnSzGJ4ox6hD5AKkCq6FPhsRuhq4EdFMc99htUb9PzbJ8puGzmPDtwCBXcsyQc",
  "key29": "2pJikM1Dfq2eTTWrwnniTTQhWGx1MaCNBKkNj1uT9WhcKDxvP5jto2N9PjGCi9cWjy4s1JdVd9zPp3X6GSrEdz3y",
  "key30": "3wxcJt8KffXrE6DiQCbpPmffrhQQUkDtDFXuTzTpUBij5nfM8Mg9E9cwL4sPZwiQDA7omnz4QvoQU4vfzgmankvz",
  "key31": "4TtyJig3vkAjEBSUWYv6MtpkJibeSet2LvfLzRkWr6ddCK2LhaesW3DeQnRkzyjs1MTuXnPxj4ZCCyEUre9KQdxJ",
  "key32": "4W1ebdTDwsAVbeNYb81sVkCFMg9qpScCbVvdM66zfDPzdXJ2YnxT3rgnc4y2bPMPnfNbwa5pgcbq9gWHMvZ64EKT",
  "key33": "9ssCVbS7AemKD1TrSw2zFgaEmN6nr3j1rrKqdSAHHovvSRcfcVQDM1VeCTcPa5r1nXZQMNtibqkLJCMdncFUVWU",
  "key34": "BZBHYk5raRu2iqgN35srG6by1QCLSYf3NBieDpTRrRRHCxoWGT6cZLqAdU4LntfQA6MkMXXDo96vg9dShrjmNrY",
  "key35": "3AYdwXFjRCnekU4zqmS2TLGhdiLS2wxzzG9Vf8UhDjHUE1wUDwvNHL7R2gxB4LZUeTKdqJGTcVD1yJoU8g2sHGko",
  "key36": "46DsB1ZQoymoPzFQMypoHRMPs8rMMvepGp1YAc97pa18ppwRGMZxiM2dvpuMQuQwPkqwvECtV1KJywj1hnNNY1w9",
  "key37": "335pCL9x8pEYz3k8rkCriH6kf97qaA1m6Fd7WVujBbmAvCJJXCAkHFpC7qCLHaKNLQEDHG6CAhLig3MHaiks7YzN",
  "key38": "3CvQUjgHcdy4Wp3v8EXN97oi5dPDnEMKB4Mbc8q1F6tCCYfNynKPQqUtdjRBd3KqKMoiYQ76FhTKscHZDqrEiecL"
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
