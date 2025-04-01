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
    "4RDdutz6n43YL2HKQxmkaDTtLSdEEoNFKvD95WRoJq8XbQRPqEUitho9JaeMToZfJ8EBusED4ZWQoG7YVuGudWna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJ46EDhcFchyQReuq5bBNg4k9iJ3izQgtt1pxbq8gRGhr25zvJ6dXpFUJJTpg8zMb6DEFdynujfe4UoMohMHNkU",
  "key1": "42eYk55e4xt2B4wywb99LQMmNVZitdQ4oTaH2HT7ARMMZYge29ZwukEeiZRDrx4PitZvmpxebVNsZ278hqQyHNE5",
  "key2": "2bfhQrqSKj5FC2MJWCzGNpVs49op8jNkjEQMKkqMGEXRdkxuxZwpQZvF1FDB4ZzP5ActX2YJ9HK5b4CdSDobfMun",
  "key3": "tbvKYJSZsdmqnQAopgzUZep8RMR9NDp3YWpJP1Y7j6PVfTn16rNWtyX5QNu9viT19D1tWcLpAAxVEd4shq8UFZY",
  "key4": "4DGWj6KTWXzBUGE5UHob8JESJzn13B4WzPxxdrBdE8uVrNqTukmhodzM4aQnShHFsC5uFk2AWD3QXXF3v95CPGvL",
  "key5": "5agaYLQsvVysgeNfJSrWZertpxWTjnMnfSD9Ds1ePSV9ruLsX4VG9VMGDK2utz52jWY8b1NBdnSYbwtGiveQ1gGD",
  "key6": "4MTeDKBXeK2dgr4KFZMo1YJMBXDpHpLpimyACKYqb23o5U5fevwz6Vn6hykzdK7zcD6LGQLw6EB16c4x4Cxt8iu2",
  "key7": "4qpaSiV34TVdRxk733PxK3Fig7rqiT1bwFAcCo2CUF2Noxr6DbmnW4zHzRazLLxijgCBBjEWbdrYg4LNAAdXHfRj",
  "key8": "2ktsqE71ZDmNnVyKz2bKZ4T4Pc8JVarVUHELjLgppmXMpM4E8LnWVCpyimkeWVWzKENTRJFL9vrtcJh3mBkusgJ5",
  "key9": "4U4dpeoirfz27ciJCjkWFQE2nAeB5mPpPrXkL2kk71BENw4TYf1kiD7cfFgu1Kra7fdgoYEfGp3puuLKpwLCF2HK",
  "key10": "9kn45GoHTvdTwWkYSomzaUCDfDUDowjwT4BTPtdQvm647i25K1QSmAUqm6m3R3qb9ayDnPLuWtzqg6Sehry2gvw",
  "key11": "cWUBbLepYEWfyDYZ2THDXFqKSZYYLDwVN6fTya6i7TVmA5BSTiAuZFfmw5ebuw1fJB8hox96vfSrAaM61EYCV1r",
  "key12": "3BjzHDsqDvsSCqtrewimamKoHxfmLob4fxtCb47cq6F577f8fwhSUwhEGrivgdvrDjo3aDxcSqpaAAK9phk13y9x",
  "key13": "4sgF7cj7PjCBsyeymNVXuFZQHcTXgaPiYky6r9FgFPm7KMM3LojDLdvEnNPzbxxjGfWqvZrTWDHbAPeVWP2W2zKW",
  "key14": "4qwytN2ZSnnd8g3cekKs4QneGU59kAgPSAwcTPPWeagSAopqBzFBkKP8vFyenLMgoq2iHrvwfEm3jow4ZjqD4cAW",
  "key15": "SCBqcQWPR3SVXzwt1AeyXjB6jpXfh71qFq7gxZt2Rh814J4bKhXys62iupCnhX7BtVKCio9cogajbDQwfTSivoJ",
  "key16": "553qwtNe2NSVPvT8rxjXz38sJ6JXwxvGV2NPWtFV1ewhmRBNAZTjkzBH46wBaDnhKoV9NFMsJbSj2rf4gvjFXkLa",
  "key17": "5n3a2292qbB7iCD7XX6uHP5mmLbrtdLTjegKy8Dnxmvk3nuF8pf8Wb3Qik96ojXUjCDgaA3jXHsuYX1eDz1FPWtn",
  "key18": "XNCiRCYzjjB9bpkjmUQPvDAaPgUPC51DZ3xHXHerADnN9DoePJdAPTheFB2jFHbgnDdmQe4Y5QE83eSrFByRkS5",
  "key19": "2yf7ojh8TAjUsW9RLKa9XfQmZ8muuy9gGBYARXeySdQoZ2ujiEYu3qGprbtC5H9UbzmieNGA6vdQnoPCXGPy3prj",
  "key20": "3f1Eufj93yJ4V5ERu6fwD8F6ZQppKDaq5ZPYGco1jWvUTTE1v8YJwkrHFzPk1G5jDqHTkW1QbYjRUdMzqtmEonfL",
  "key21": "5njQK16MAA6BAMVDp8s8Q1Z7tC3VVvgH1ALYfzZvQdkyW6r7kxvZzs2VCn8nnjSePwCZjAag2BsQhttQ7qYiM5Fn",
  "key22": "4wV23vF7ea1fHkYdywBz1e5raPXsUMvFkBP9YyHEBnaZ2vDrC1BJsJKcL8vq9LMpTerdgFZ5T2tyu5Q6oHer89h3",
  "key23": "4Ar1AbNSJZQqi9p4Y4XvvoBukLofRVBeJJa4419gf4Zky2VyqY6x2PbDYvSqTeqD2yMAsE5qfn57AxnzM4U2K868",
  "key24": "t9qDxMvfsngzgFLHpY15uGuR27QJD1AbcqZWNWQYPtryKBR7Yp2cj7MKobkv5pp8Uc4zqDNbH374qSVPvHN89R3",
  "key25": "9QuybKyWWteAK7EdtQNDbkonNB5merweK6zFUStDeMhD9a1C63MLFU5bsq9tT2zDZKwtDmi5kP9Pz6nJH2pSToA",
  "key26": "63hnntPtinSkehZARtykqvQ4r3bKRauZ36FDFofFgw6QkrHFUhxrSS3AqVQ8q3K8itkLC269SC2CiLDKuroBKQM8",
  "key27": "55FXi8HDrBDMWP6RPPYSLfKq7JfnVXtMVvkveqdVH6RHALTfgfi7JcVfUN4zLZ5dmgntrPAouvxvZWuy9YxruDqU",
  "key28": "NAWH5ApYSy1ALF1YfXQY7gwrjCQyUEpAVaoemnP4G8DeCVM5uJEfCsp2XtBE6ETGRkurFwWKtqJKkXeJa61NnuU",
  "key29": "4D5dLHPpHMjHMu5W9mpuixj5kj8vmACo6cRCR5LsKBx99r66r5jx5wUVav3duJpLSkXcCSU8X3SEGiv5KSf525yg",
  "key30": "4g774ELUzwsbZ8HYVdaTmfFwY78w5Bxd4wijUZzf3czd6eCiLAxpybeCd4T8MkHRctizkFFXsAtassqWvGBsZMkD",
  "key31": "4wwVvARSMsto3qp7FVaHzssjyfmqrDShDubEECV3EADLMNxyytQghxRRuyCxhQgZwr8t8KXRheABBetJWMp99Vy4",
  "key32": "46MZJxWMAwU75YSYE5zbjEVqequSMxU6JtegEwNBNUUCgEAs7CkEwnCrFFDYuQWvtvpWwiEx6tXYQxRuaRiTBqyj",
  "key33": "5oT9gbzWXD5h5i7jN8n9wNBzrQDvJsg5tGHhEPzHQcTBG8LE5RMaTnADzD6ii8SYDNJG2Rvp62RJhf1gFYS6mVeq",
  "key34": "mc22pVjQvEpGhmgESFXrhYKBdTa982NCJoCTiLqNWpoQpR5H4HLbHQKyzqPFm9A26Nq3M5rCpt3Fj3uzPM5WqJU",
  "key35": "3fiK7161hF9E8n5tMdWpXitRt7AzYuwF4ZMzcQXpYNj3yfSPcLfrTxLoJ3mdPdk5b4hjtnk2Qe181rUWSWRYttW4",
  "key36": "4BVEq4nnEX851B7ep8BkbAfzp5tdDypS2kvmu9zKnaSi8MytdxdtMy1vJixSt7yJRqPAXQLsFJpU5exFJ5S2bZE4"
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
