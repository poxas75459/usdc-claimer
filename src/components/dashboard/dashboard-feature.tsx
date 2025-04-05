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
    "3qUfnypzATMvS28XjLZjLe7uA6x6ik8tfyMJS54eAK6y9iaABZsHdRVn58o6WesEDwxPzMP53fJwLzBPzqthVQdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URa6hpgBq6DuXjeH1TwYDPBnGPMtE5Ea362wspuqYV8gxwFsGFZnHtt5rMQAVUKZHguxJr612FJEvKiHUnHmBeP",
  "key1": "5Gf9F12YT4cqc1LyqhSVRmoPoNEuxKYTuNfSieT3hrMwc3PkQLnv41zKHCiE15vAHYnbeUaVpJSRPp8BeDgtZ1tc",
  "key2": "5hxPQB7vLAEYDc8dajNLRDdCNj5STvXLYMQ9hdy1th6HLo2CQZ7EZMRJASK8ixVfMo1wRSHrvoPkSWjySWtnRgL4",
  "key3": "3zVNy5veMkuUU2Aa5vKNcAJPJKA9ML8riocP3uXu4s9r6XqGB4vUsM27cXNL5MPr6X2FjJ3NSewSejP79Q3uKm4p",
  "key4": "R97Dz153Fp2VwMHG5nRW797kR7d5pQiXf8fdG794ZdoqyojpuLJK8dSrZWBST3MhKGHVrA7f12nT5w5u5RACkfs",
  "key5": "4PMiEo1H1wa3Fh26eeULTdsWTLrdTT9cyWC2b42b5WVwZo4hk11TiQzA6k8uMk4BdjSnuiZVbjbgkgBpwiCTZmTT",
  "key6": "3FCoUnsaLCFtEJqhSBCbUt1Xo1Aaq6QWV8BP29SEZErwN4W2AQXNLH1qv7QRDy1PQeMx3SKvufo25Fm4EDpk6qgZ",
  "key7": "5hy6UDMBKoqPReyWUgBpWuD1HJV3ZeqSCd4an73Ey4wkpJpud2x9EsZyUasoCe72caSZcgcn5Badf2e82QmC3fv6",
  "key8": "3xyy4eFTPHvYREHjBB62LWtcK8Mgvq8BzSfjFeJso3WzMq27RmuYba4GJbizuxDv4nRx5hiXt6xPMf5gSWpoMfPn",
  "key9": "23VnpCTjChyeq41nTvFK1ccnVz2LGMrbdYsvaWPB6h1eBnPoWA3ZBcqvjYCZ9gc5Nz1uy3GYu4r6QyuwQY71Bwh1",
  "key10": "5hZLrxWAVWkRDqLHiYQ9qQU8b7teEqtL6hRG3YibnqjzQ1kxTMPHX28EXft3eePfzLeG4LJHo2nFxiTpmBsf4qZP",
  "key11": "5fkMm6WfpWtv2Ng6sbu9aMgmCQRaDTTYJ4NWM9a5x7xTkKWtYMievSTngp8Jbt4psQG6K4ZNS8KqhvFoQaEPu4hq",
  "key12": "2S5bmR94QKvZt5scxAKAkDt8eJE3PqmC7zuMraaw4XhdW6xmDKLqQKrWXYeWbLAywK2asRV1C18w7Cey6X4NtKvz",
  "key13": "Ryp7PzLiMLGeUUk2o9ZQpDbzoHRoGKcvn9NP4tLMudUB4yawW8m4DrukN5cS5qm9h1pdKRnRWuxbhvLAaMFgXuT",
  "key14": "YvtimLJCEw7pVZYoA9stsNSd7UqNZxPDhTHxC3TMp1ZNYqVxpoHu5FPFS6bcZhQJxHMXvQmAgTBm8recjBHxet3",
  "key15": "3yL3VsmgPVWaSYaYZ9pk7osP1XbfRS2FkCCkgMAPhbetxW9omdKy31CKDhcZUsy7gmagDmcSRrZbxsPMV5wR7hYc",
  "key16": "uDLfi1spNLtSooMTFDs6EsFAnMcu9As6SdULk1AKz3ZruBmukyAS1mahW6Fr6ebYpjWJZRq9Lss5MDPrzXM8Eam",
  "key17": "mcBpE3YTVEX1YP1QNZifdk2AVXLL412qhFtUYcQHAbJyccgs8KAf1HJot3PvFQuwXCH9iKgyNjwVrxvC8M12CVR",
  "key18": "4V7QL6KGVkRqRkraw2KxjkyWJJUCdgcZcRWQFkxMkifvTaTVNQqqx5tv6QfoqPg3bWUYUJfbpD4CSBc3vxEJsPzN",
  "key19": "3Zshw69ckKcZ6qnYqibM46f254u8mj37g1r4ffEp6mUYXk8Dsixu2eQa3UgsbMSBWLBCnRqXPLJcQwPb2thw7jDP",
  "key20": "5zJgbBjL45SQD443EEzhgcBZVroyHP6L78FQ9aCGWoz2JFS2thpYnK5o6ZcXsTW8TH9Wry3R8TZPAySdGdsTcKoM",
  "key21": "5LdzL4piwzzuQ8XUnTj72rw47u55cTv7eLmN6mgajZDsysKJs2LaQ8wxHQSFreccJAoXTmDwtAjyEhSc7BnrgMZr",
  "key22": "2n8HxVg4HBXD1tPxcveHAzAmc3EHBQCkcuBuBxt3Nsyv9xTbDfFp2nkjyAaPt9xRvH31xevZus2AP4QbmrK7zYBA",
  "key23": "2EmLwgomLuSJn1qyzFQGA6mZWse6veAHvUvEGeoJBgcn451mnGS42r5r26mun1tGntGHZAkWMptuoFok2RTAntmZ",
  "key24": "2HXKkYQJdgk6aB6qR8bXq2KPqBFced6zXQSZUvjU2zwXs3Rvm7Mxc4gfQ4YkCpeiFAfVkPxPDZXnxo3BhayT5UHC",
  "key25": "3CtLhoCLko694sBof96J3hV82P5AdusXDZLfba24yRgRZ6RCSWak7ZdK8bfP3GaPF84cNTPBXYPHhcWdSejagsqc",
  "key26": "328PsPDWFS2ErkSK46erCUgX6b16SsGZ8zzS2JKtSUSnkZgL4vHwLDGHypXothGWjsSPcb22UzHf2ZmrU8efwvze",
  "key27": "6F85XjtYnwxigaBLJzgwU33aarC4ZUN6vb8EdbkBaxUiJBGWUxV4cXiiZq6rNw6jhAMWNsyuSBbHnde7o4p3Hnu",
  "key28": "5Nq9YQNFHnbYVQEW6p1RaAGMaL2cEGRBiRa7QZySZGz3kDBZ5hawPyvmQ7uCCJro9aT7ZtUE67T5xuwBW4zR4U7u",
  "key29": "3JxZXoy9ehPnrP14JrVdvQNPtam6FSsoR5u45JX3CmS8mHpmDgZSg881tRbrgHcTa1NLhMehCCMWy32M4Uvgmpe3",
  "key30": "2Bo7wfQqjWWEPmqaVriddCnk6tWNdx9TeVR7q3S8wFtso5vq4871F6SvJwfNeUU5wPT8dRS9HQYjdfqKzsyp3NSe",
  "key31": "2ghpjXZvBpyjzBxnEg8QZmoS8bE1xC5syTL2YMCHoNTGxNeRBb3cQ54rkesLia3Xe5myQM5TBgymKif9ytRB28zv",
  "key32": "674WqdG6goR4d8P1psej13p8FLGCdKntXWoWuN1X4qRjjQqunitrV22UyHupfq6BRhw1uWVi2h6vnxGABkVbTC1n",
  "key33": "2juWpPV9unEgz4acv3NWUEqXXXUAWyUc7xJvkv3BrM3gusN6obQjaGU8qtzTZU1CBrBRNp2R321ecgpwnjstix1o",
  "key34": "2iRPt32s1HJq4N4tiBz4Y1UMiz8B4TvhkiBzzhKtzX3mb8sLSyJi3U9R5Gb8BqmiK2qwSyqqBAbL6U7Qrog6crNh",
  "key35": "2NDikfVAu5GJCwEMiuUQMEBCLrZtDJn1DQCQPLx1YMEnUwb5N1pjzCHjmCrKApAM2RyxNnhF2xy2YcXj6yCsYbdH",
  "key36": "3XjVm7UXs1WrVeZUKtaUvrNRdYKs761iu9K75eQFHccCm3xhGpU9khfp3eK54LhKT5zrWyRw5YrME8kVuaVYX1mg",
  "key37": "wfGWkexuBx3oGiJf1vZmHVWAhVbWALWzac3SLf7S5bWC5v97y1mDhsoktC8yBaSSrLxUMk9aVwnADTPcLftQzFd",
  "key38": "2TVfWcwtj37BF4Y4NaGf4dtFN4kZsubAkWfhBk65hwN89eNxfcUBso7w9TmPp8NyBEmFmiDcVodVmRctqGq9XfEd",
  "key39": "2RCHGTKoDHqG5wesBgi9gnFQNnonztvQg1sBdrtyb2VmxwDocSFC4cCZ7gmWqJGmYkv44zEX6t5hrhxnqdvi3SNi",
  "key40": "4X55mMcLXSpScvV6pTYzK9WKjAaUsrbuQVzwyU1yc5QhYy723ip3uehvAW3wGQsNF4k7iGtA863RwhR6ANAyQ8rS"
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
