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
    "49HtuXXGoSTHaaUacYY51AYwDdc5EyVtyDeQ8nNPVCcw5JWMN78UhuQz1hs9qx5m6MnJqtfHowLtuygDJYiLHuCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Fk4XWNpFGNJJxiQBH2cQinbJDVnpEjWcVDuLh7EgFBX7ffNypCqnzoo4Bcg5QnRC6bRvN1XCW239qFBNzAJ2vF",
  "key1": "ufKkyk588yMobRAdFLPXnHfisrjNQJv8mQz5Ueqj36a2wfvyM51dByEPKJHgWS9zG11esBi4JGernyJDbMBUEuq",
  "key2": "2ywebLUEhBtyp5z6vyZCbKH3ekWg4fCPfYDLPnNgucKPXew8Eq42wbtSo18TrFZAXBBxumk9nkJhfMfExqSoPobk",
  "key3": "xT2iByFQsXqr1LmAmz9gvGK2wxfYHafzycKLgzrgojJ3EHFiCk1DpRQb1sueWaZfAqc5Z54oab1suGMj2Y6j29h",
  "key4": "2LqXaDLrg5TnmzoJMjmhvU8LFQmzKT5TkvwcDw366VWmAEhBDx3Bm8aCNMt1vXWJw2L5tLh22QcbZ5486AsRC4Cb",
  "key5": "5jKhXFuMWMbDfkswpUWjdQw7mDz84sANS9U3i37oAsT6eVf8XxL5YNgpCRTuwA8xNLs67G3szQjYik2reaVZpwiN",
  "key6": "3WY2eRTP7PGXbfh7A7xYuTZziw9Z4g9QmrNFFbbtSGSqRqUuCEvDAbyKXyX5FgVmEmKq7tCzNhsndiLoYGe6ymFX",
  "key7": "2XnvUtmPQMoeciLGA33JjNwNR6P3UUKCe5yyxvUJW24RgZJCaSuon41nPd4C6XxHri4njPagQF2RXYk68PtxNska",
  "key8": "3jTaiioYQBzdHBVNMYC9EHtNFziH1WWKf9nQZiFFpnK6XURXh5tU751shFuakyVMLjh2zsmdDUvL2TJN1AuG4af1",
  "key9": "24uT6GTraToE49iKvjT1ERqQPuY2wpR1Scprjiy8XB7mMKAtTTpqYRPYw7VUWotDGUwVPWeiduPq495bN3eGMYJL",
  "key10": "4ri7tdDQb7tfY2QUUs7Z7pYYFiaf6BUiBS2445cvaasZ62mGtmHdErUhSLre2QQRi3dF6WWNdupARysvSmV8AAt7",
  "key11": "Ze96HQzWfToat2JaQaJ231jQZUnrppuyd9FsXkoXUHdAyt1KbZ34fpCgsaFe5tNrTftCeGPC24bJ769twnkk9ME",
  "key12": "4pchd2jshffiu94pLJnfcpM7zjj8DrctgRmdgAnnKkUhdZp3U55YccicHfRdGG3NT2zfJamSYhVJZxM7pSS7HuQY",
  "key13": "5fGcBp3TQyeyTDqzfSJQWjUaAZuvJ5BJWE6x1b49tM7TeA4fainVaitNstbFDavqwVGge4MPSqSCLkXEAGSdvR7s",
  "key14": "2sC4GLYvgrtaV28gzJq69tzwykpbifuFPWK2j3TbqRrvASgYjzPn39otkhMNkg4ZsMgMLLee77bYucaHQKkpS5Yu",
  "key15": "ty1eEiCNeUBTeibibzsdFJU17tYyW3zqwrM14sYfWkSad1pvRd99LxVYkbgA78UckZ7qc3tYxsK9K6hnSf6JGMs",
  "key16": "4PRWg8iuadHeVxKMT8iAagYEwwztEbbKBcMRvWKYHjAAZZpQUE3aXJD34notnxZ6ndX4YevAwhRv7cnYgEHx4sDd",
  "key17": "3CYrRp8Xhp2vGekG4QFriG8QLFxdB7VNdYotjdvmyHUDqeNU128vJYm83EKq4yxZBg5ea41dirCAXpKxquv5g1cB",
  "key18": "y9on8gsif15T9maKshnE27XSWZark7R1fkdNyAGQynTDQzyN2A6wvxSKggxaBkz1Hc5o6xhgabWLHTU3RWr6e7A",
  "key19": "4zBNnj2u49PX6JMzBCHWHfmPEkUGZjY2drHW7FrsyPPy9dPnyGwddytQEEFbQhisbJq8CGikfaqvEgDiStYGAxvK",
  "key20": "BWFkFNh5wrxJxGELNXfcsg9XmJpvXzrVTRZrz3wxWyxxLt2XCfHRK4hgoJEzsiJLCPfVqfyUqtNsdSXCDZyHkbg",
  "key21": "5jekHTUh4nPdwCZgbMWYUHXmkcaWJjKzebcrQiSdg6dEgEqB5YF65ymWW6EuBh3bxE3MMDnVziVhxEiorQgkY2SP",
  "key22": "2MMUPpLnGSVE6oGpanHPXZzgpkfcpdDRKXqhi1nomuaTkNfs7cUftZZJHexdKvYM8WrinUjGpJoB8rtATK8hTDK5",
  "key23": "484qcW4mvaX94pYCK1od56UXvjKtYruFDaTEmVKYsXypMQpjcP43tvtcGNss7TH2e9QHKHsM1ykwyBwWAKcJfizR",
  "key24": "3bPehU37J9efcnSswLuvaMma8LmrNmtw96n2HdqX4MTwC2vZJxyCUMZNi5wHyKmFJbZ62vq1VtkPPFkxVXM4eD7q",
  "key25": "64SzZatgwy71vF1hzjSwBVYmgcrJq94mVtY2aFFTBZXhBab6Pnf178RYB2zzULswZHZ5nHZcjZZBWtND3jntkALp",
  "key26": "3hrMAAiUkB4EiASByJkpX5SsoSnBqohivtv5Ee9ZJ2c5Bhhz9jKPqbymdRQsBrsFEfuBeFwg9bbx6LhmXMgZua5f",
  "key27": "Q37bWEwHFJgtJu4d7KFpauDVRLb4toYTBbSpQdxNw949pkXmKiN6GUW9K1Wv32BHtrsF1KGiW2XVXAEgbXKB4nE",
  "key28": "2VHwMfa6cf1Uk9GKVYMND77yfMJQx6sVWdiVJRTjMv5AWK1p8eZQmWJU8NkPTn1uV1F991CNPca7SMkh7E59AgF9",
  "key29": "5B8oatYr7nErvRrx77mUwb2DoJ1LTd2veZ5NjoiCAMkyNXy3xoJLa2tgfheLowDK2vAWk9qFgHWGqSbb4SLyMhsx",
  "key30": "5LBGaHjrJEuUoi8Ntm9K7ivCasQNYo9AsqdErDVeUaA1oNvVZCMfdEKZAppo2PZd17BqZ71SzE26nKbPfQKGyX92",
  "key31": "5UeY5tDWhmrs37xyPFtKBPs9VLvEPqc2rCK2eDdPWjEkzhhFrqJefJGFc5pPk44e939XxPe5UJE6zyvUDnEkWYdS",
  "key32": "21LQztF83UQBbuRgwGHB3cPFpeXT9Th2VXnmAyMoPbNSRKN5qFFxo8bxZUUGvjiSfSoNhYgcpm6iknxBAbAQ64tv",
  "key33": "4Cx5AoyC9sUsK5ptpNWYVKW6UDkm8zy877r9H5GswkXnHLkxwrMfoayt8owXQUEFZWVxEGYN68WVQcZpsNXmttJM",
  "key34": "64nEibrMDyeyBKGNV364M7GeFtjfuRNGPNx7FnNzwT2DNZYn3o2ZXfRbFc6qSrMry4cZ6mCGs44bzWzFWJc6jvcn",
  "key35": "2PbBrLBdpq2ARcALFUfvnvBfyfejXqTqkDnifYxXFNsZWj92WabVixFgANLJ6V3cukTjMSvkQoNqgHpDqtpS8XhE",
  "key36": "2d8Lt4JFPbK4DmgTGDwvXfVcDzfBQ6fAQyAhjFAFY5K7mSdm3XQMNdwYDpusVWxJxqddhwaANVBoZ7PzN6jMdpUf",
  "key37": "4BpTERv4EFHJmVZ5EJN13jR8FFkxQVJqMDEFyYMckDUJRVMBDJuGN7Kz3Lc1J4QP1tfMeCBWqpBmJyuXJqhbbYEY",
  "key38": "3PPVRmBrgTfBimAJk5p3C1HHuP9pcXdnUVBed8hjFj6Jgg5DKST1qqi6bbXShkmc5YyUkAoooEWi4kRyejf98cVB",
  "key39": "AvRRcubxF9nNjFr5XX5UspBH7pr4rFr5YNTtBAQFKN2LaAKkF6YPQwYvU1YwxYWqjjuJgTpAL93tE6fCScisbHo",
  "key40": "9KBVqqEAg7opgc2EoopjURLYeH5kNinG6YNjTENhUpuAFVEKrKUrg1GGRTNNaPSNHfNbGH98enCdedfZnzo7L5N",
  "key41": "31BBGdY879vNzr1DiCUr7dn5heS55JHCFdLXvqCA7wQbMRp7wCD1FVoQnFRve6Phi6YtbXGCjkcT2SbDcDpJ66ZP",
  "key42": "5HzHGUyaWSfPc6Mrwng6Xyo9doVJr4RkGxAKZpFfqcp2HfUHMzGoGHuRTL8visrv4Q4CrwfZoUXuxHNVonYc4ayS",
  "key43": "yLhVyLbvzPGKdFMhQWmTVQP5Fq87e6dj1PxLHMoNeVf9smbaopTVmKrVdbrigqR6ZuNCv6SfeCGy6XJj65w334c",
  "key44": "4Y9NhZTuWdLksnGMJgS6JDkpoEkX2JGSNrVVTjq2FDkx88dFxLbTjPVCyvPybcMRncCVkCf2p1z3RXDCyTcRW5Aa",
  "key45": "3gQ4iK8iunfBmaJ91Yanx83Mu7od17NFi8BbmYg2anRVH6dAQAu9pg1GoETMH9yqbEedXkg1447yf3ZkZJMzyRbY",
  "key46": "3RRGFDngnxRbBsniVLAyKW5pememX6R8rLkoMQuqSny9DuLgWveCDJ1ksSnemUP4eg7yaWdAXw34kpo3XcVSm5vt"
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
