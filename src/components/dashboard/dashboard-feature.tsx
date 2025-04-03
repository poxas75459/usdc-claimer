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
    "3iqp9a5oB8RfLhQzVpjsLASQMp2nRqBqmnmP7NqAUiqQtbC9emtpehoYKab6TtMu4SpjmKjHKhCNiHNMXqYUmArL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QCQ6nLNHUFweQvd18x5LbNycpT3qoctV4BK24AHVdPt2TKWzgJdeuYAbegYzkTWEFqQJAz1zTMzFok3LfZAskK",
  "key1": "5xXYEaHgWvSXjvMhhrKPnw7U8EAH9W2Mntf2KkuUrg1cGKUuzrsoEy71hcYDPjXwXhHhQVQwXTY5fFryuDC8W5zX",
  "key2": "61m5651bsQFvkU3eNshqPEkrBHTTKPuPrQYLnaFKCpppbSrvc6YtVsSEuoYRSuQHCbyyAerTJ7XTm48rpR6SFVoW",
  "key3": "4aYQTvXbHeWGbJB7eD8sxJLFCDSNHRu5vdwwgkw5CJSx2bT9KDzPBQQcrQjKmpfU7oTJAvZQc961pmb8QJuyCpcv",
  "key4": "ndJ8hdpnWdi8VskRrc7E5UxSZn6qzCV8AQ4aRToSS9y7N7udAB7AcneYVwNPYFxu3cRcRAYxcfibunzpLd1nMiH",
  "key5": "49h1opm8mJFB2XxWMp7YN7thZhZMstRVYJbTw29GDYtJkGE8ZnU6nRrGCyTWkkpgRNA6EER1f2GRKbgY9fdiMo8z",
  "key6": "2msMajwTmRfZsWVfid9Rh43DTXUanDEBNq6EQGPBBeXKv275VVmpTqfsfbMnQTACUutdTPQwB75zzLkS41m6ohpU",
  "key7": "5pZHzbmpNnTbq47oNUG6sJVtYx95hMJzcP21qUcwvSk2Ud5AshKBd5zx6qVCnaktYYevuUpphTc9BmefHBABNLfg",
  "key8": "2RXpEWQMNQ1rv7LzeztJkNF98QCPb2Z62t9ot5CzeXrutyVgUdC6pXkozFvk2AM7eDTmPyovqNAVw76TSX9u2YrP",
  "key9": "4rd6fgSRaLyMPDEvhroATFgEJhY8yrbYPSQ9Rnq3ekEnVXMKgP8fyY6vbvmrxKfhcrKrgwcXbXh1sUxtUp7oN8Ni",
  "key10": "2dKsZnPEY9nCbaKUmHy4FPNhbFKXp9fMbox3bUQjSzBpbXW7LpQz4XJRHZa5mVrTyYEscLYwLFmSoyHZsWuBTyGT",
  "key11": "ky1WyqgskHVHEWrXKdm2nibvTni5Avfq8MepurQnYQSDLmfsdqmgHPgAYrFccveDStq4n4cAMkqii5HJw5mPzND",
  "key12": "25WWG5vhhRQssQPGoMSxoVqKDFHa4ScN5MXkYZwa3a2rZgYoYZTugRDDjdeNtCPtifh9YgbbEBvLqS1AXUW6QCcn",
  "key13": "5ZAtRF4VUzDtKu6phNpFTR8ZrfrrbAitbioZNLPbVE1r9p83LvtiqtJsvHyVJoUGwbqyHSvXhSxF5Xz28aMcPaDS",
  "key14": "3eAUMHqD7rX4HHEyNFmvyb7YFwVCZ1njVu6HbMtu4jPXhNzny7PWh1fbo4maPZwxqL7FyhUdWFstZcFYBADp8Gg1",
  "key15": "2ncWkP6HYMnarEhpvn2vRkWWGNp8Qv4H9n3VoS8hmeVapXGKeipfLhY3Vn8UuwtwfbpN2pMRKqSGLt7ckCV7LbRZ",
  "key16": "2g1R38n6kaSQ9KSExasBbWMNbVYKU9eiw89z3ezRhHdPqwh3rsW7jJCFfd9RVeTXvdWLFk4mSFP5x44n8bavkyw3",
  "key17": "2xKjru1kb58Qwp2iM4wz1SuzzC6BHHtPuEjYau3u4zXJy7Kkb6orFHMf3xLGLUBhuMxuU2bsSDp3Hv9XUyb252T7",
  "key18": "5ZPBDMcgGrt6njoWbHkHK4kqqd2WAoCQCC5fbdob2pG4uDS4xSfd19FFvFNeYCztC3jj7uZTAG8AnHyUExumscJZ",
  "key19": "64NEhVMsNkSapHG7woX3XfCAJCEpMokWtVKze6By641kGSU2ppWhhjLiNuZ9uynVQCfm53C4a9nAXAcSmrtzonAq",
  "key20": "512Yvj632xDUZYxaEJB5dgxqwv3J7cwBJWhAL6ewnEjuir3tzHrw7SbmgZPi2pnnQrkAWhvFpBoRRTp3chpcHo6b",
  "key21": "5wateVmQYqjXApJtdxqFZYFhF7T3pUqrgkb9j5K3T3aL6ToJvWb8G8MKAXra6YyBu3GZMBSVArX6bz9M4KFXtAQF",
  "key22": "56DJhNB6vVtNMmFhAyd43ipaoMDztVcN7fAKMGuwx2Ndb4U6YHktA896MxrnbkqoCkzTVWR441jpRw8F3BfwZsvv",
  "key23": "BArTpCSPPZzWNokRCaboyhcgXC56MaXzVqwncTWHP7DzGtJqzKBKDQ9ngEREu2SdZm4rqFNV7ttiBbNMqcqx7Vu",
  "key24": "3ZWuB3PE6xyiwjtpZiiqmeSZ25sSnrhdC7XjBeDuzvBiPsTuLPV9vGKKuVnGQXzFiENV5uNUrjLukk6PLUnC7jQx",
  "key25": "2MosWhkhdYmFLRKw3ca17c9PQgScV5SVfMFdd1qkvbokqWGUaUChWztU2JL3vi2mqDCXNZX1aUt7dzqAyeYy8GUH",
  "key26": "5EiZFHZURZe5wjqCZPdtTy51owozrsVSqZ1tsZFXJ5uoDHKKtNcDMyq1KGXwgG2HoPtBJUNCkE7uEpct357AngFb",
  "key27": "5DsQSnJpa5jaKkq4g3GG5rnWHBv343sHAkQG8uYhSjNbct1bW55KBi1i18Lr4Ep4Vqt8eCRVG9cV8g4E3Ab1PYm6",
  "key28": "5d8Fjqqi2374cPGdTHYZi4pFMb54CipzBweBRGJpfozfmZu2a94RYb1W7kHmTtCDQgxC4baQKmQsEY99m2MLarxX",
  "key29": "43qPBJURy9U7bZ51bkXpuBDwXQW6iF9a1sm5XxYfUaAMZcYiJXgLWGfWMat94bxJhpSeeKFPZi4upfZZzwwn15fa",
  "key30": "5exeTPUEZQ5wtzxFAEQyNQJhudEVCt8oJFVHkCzoU5GgCauNBRATC8QfjirQdr5qxrf86v4NUtwsL1YRHr3QNgNi",
  "key31": "4opYpjJ6JHWDa6YMctQGvHxVWhxnKLvnDoy9cAymhtjXJGnf2KDCBxvDPRmsBWxUtybPSmhTdPnmwctRc74uRNvq",
  "key32": "3jcd83VYzpKhp77Qx8BVK7VkNL3NQLbHSptRxo7hrkPv5BXoLojcwBG2a25kiC8fZSgi6VLYumCaw8udmuwV6Xdz",
  "key33": "9rfyXRc3cZBrr81CL1ZJDzA1G2rLPxoivFg25E5SiBCZssLrkiaSCd5zGPZBE8h7wkVhhnAh6nQgwZZxCoM1Ax6",
  "key34": "52E4kH9EFbnyuKVhNLmbBgWdAhw6Y52GwUqsCrZiKkc5rDBNfbbnFrr8A4kF9pptTYW7no3MRcW6pekVcPEhSPHM",
  "key35": "Fjd2m6iNEYZf5qbwZUvKLVNKJxsSsXXnQ1rACYP9QfoD5wvXgAc5jd8QxNt7JFAtUFUGk2CTC1YaNrBiuUzA4Ts",
  "key36": "4obNEKois7Xx1W6djkSGzzCaTah7oz5PJBeVyQKuxoSgLQHo4snHdgqw8ch7MEKhUzmPHJnVpUeBJSc9WQ8CVQ6Y",
  "key37": "3YRsxkNfhsdxarZYufVV2oUzhsJMZEXLhhvTnxVccZBeVtNA7aX38U62AuRBcLmoe1PfybPsZDRat1cXxwowCyhj",
  "key38": "2pRJUqdfbSSztJTi28G7aAt5cm2rf9Dn5rHiQoGcW9BhVW7dZ9FBCYyMYZzi7BbgWyDY9G2aZQ1jhF6MXxrnhDtq",
  "key39": "XKr32h77TznzRgKMo23WV7wcci8CiCb3zEozmJRHh6avE7LmRwyh4r9CBG1t7wE1zinVuASYKTzLx4jcgbWLr6w",
  "key40": "3gLKCw1auQWyWRyf38jhhqG5Uy5UR12WRjZpdurSwZRPHvRQHHELXDSYMab5wnS4DtuK6HSa39bMgVi1J4TpEWCM",
  "key41": "3nJtvCwgLUEdeEL32JkCKzUnV3b8xWbxtmUAypvygNCKs2z7BvRpXnMb4eYKXBpxFYyygDdsgrkWgsrDoG6V8jFG",
  "key42": "55pCQWTCiTQGXovRR4jDHMHe4MvN8qtVZdRY7ZytpWW1C1uwzMR4sMJRZuN3EfxwDX8fqB73d2aXSQxjhHddUdzc",
  "key43": "4KsHMMvVZ6ZpbC7oL3fpjUxSsznaNgbVUd5GA7FiSP8mxoyHYUbjAaUPQMQUXVYKURZYEJfPo5fdED2Qmhcw2Zsb",
  "key44": "5zKyXzYSwvWYViWwCq74moFwnGSD2YqyJeHZ83svQcccspwDZi5XT52pqoKZmpwdY7DhhP7xKZBu4vYNbRMw29Ly",
  "key45": "4Ungc1Qcjdeb35xJwXSrmunPZdDUdXPStwypRDr9fVqGfwfCtDYrnBLRioJ8mx2ZVMYtMqSqx3P94CgSWcFi43XY"
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
