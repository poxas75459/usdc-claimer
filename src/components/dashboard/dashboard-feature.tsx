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
    "2dhb98e2BH9B17isM9Ap9AdGXPuG3euTBpv9srGSNe54wGG24UWjBQbpnX8tk2aqTiBKgBdyWbAGpjZ6mCJjxDNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KgqhXfqqJz6poqY1n92PffM939noTYwcHJB8ASmXLtLiM8WWh6VXoPsDPik96Dpk8ejC6dkrgnQMxqimjTxdUD",
  "key1": "1bcGwRJiNEe4RkXspwgqXVJPWxfwqGYnwLKCdqFneVeNdRKF5SXMbrmUJPCsa6AKfmcn9vLaXPncG7cJK6s73Fg",
  "key2": "4NrdqwVsqSGTjjaFLFFaNKr6qizAjHQAuSFnpBZiY1bunAUFyskmA4P1s1Rg5DKg9AgP5eHNQQHXH3UFKWomhSJB",
  "key3": "2GFRg8D1i1Pd9J2PYipUyBYQifkudyhuYBTGZxfRYtLwhLUL8v3srUd2sMP8KaiY1933pRwqdvNLMvxzKNxDg794",
  "key4": "3mHyF1VPZ4L1E1hv6coG9UgrrRY7ntjKdA1BEp2d4jFEPoZ9wKaHPeVtWz6f3HnK9QEKcE5i9L2oE3sm8VWrpNnV",
  "key5": "VVwjSYCDXoVH3F4LYtjv5qHEgJyXDWn4aah64HtdsiEp7QwRwqQFoykciTpDUuuMjPSXXP53auFbptK3wTjeegy",
  "key6": "3Tyts3etJTNQgZp3PRAbY4QKdqULyTacdUNAkdkj3XHDNBC6UKzFHrhSsUTcxz7wXSWKRm1TBK4hadSTEtGSxkch",
  "key7": "5hMtQkx1aCRdjs4BgRaJwk7APufMHqqAAbv3zpMZiCLzAPSYdrY9pNUMG4o2MgNuPS114ZxSFVbpCjFMsYUJp2ck",
  "key8": "5pPpNW9GWD7PM7yEEH5sc8paX1SZh2NekCQDbZPuf1V7niBLpjSdFH5Xzr3sCynPpZbBsL8EqafQ3V6cDJEtR3H4",
  "key9": "EXWrcMK3BdZww5cCdj3fAu5SEHV3KCgm3reg4SrWMpfWGNF3DEH3zEA8ZNQowxT1cp9rSBdCbszoYWk8qLfJTea",
  "key10": "xH7mxhdNdou1M3rvxYCNDtkQRnFZwqkZAVZqWaErcqhGjGKnwgPDiMD3exo3MZFR7NSDUUE1T2AvPUeqQqkWx1S",
  "key11": "o7Ri2WGaK6GbAhZELbyC4k4KJCVp6k2XFVxRrKRAREdwcv475miLcWrcPUkBndA9bmERyA3YypiwpiEhQUYPyZV",
  "key12": "5myFWEPass7rY2aJ8wYHoc8x7Hd2Ums6k5oKqKpFmjgniWfsBZHTYNokrAsbzAuuFk54wST2H1N52RrYfQ3wKdF8",
  "key13": "4e69SwbrmXyqMLxW3nVR8CG82XkvfyZFgRMvRW8UxGBwYu5qRPnC11tq35VtCZ1y7VDaAcBJMdF8VFHkRm2PJvvm",
  "key14": "WH18Vy5n4SL2gF5Y1iMo1Z43ukwMCgd7D4PLgDFK9oPiLyZ9BfqdPeJEHu5erfiJAweKH9J2dj3JUKGRoBW2byU",
  "key15": "26EwhnW1MpbikdYZQ6Fzt33LVuWS8ERygfmEztTJFNxeNhZc5ydnC4CLQHpNiQZUPEvWh9h4RjvWeKCukjie2t5x",
  "key16": "41gkj8oGUkBY1DooAUe7evxZrdrQAFvJvhXHKZgAsSBqkJGaeosTuxbdRvRvCJab154SMS8oMJuE634x4PuteEh6",
  "key17": "3k4XbayLF69jHJFmWwe89uQ1qWcRNDDPqdpH3FtWXQtc4oFvJRYSVi8aw21LhyYB8jFa7uzkWTrrLSdjVK1hef2n",
  "key18": "bvGGxE9eCKzkoZYZY79VucMkZ4hdwudA2SUkyECZhmuJjCvFdqTidtUVnmRLd2YWVTmNWrR9UysoV15Ktm3bQuz",
  "key19": "9sZYJtxpuDTH4brLtEA5KGzhaPG2Ca9xDfntts3buQZv3QEyNdh8PkrYv4W1kFoGJp4ATcT6RuNfgtP8YqVZKMm",
  "key20": "5RxYwPcSVCrTYR8dVRjtyqtdj3YWFzvxzaQjkPu5nssT5mTwYxLcKhaKpcHFadX4g6ZwvtUBCLGpeXd8PQ7yY7mk",
  "key21": "3JxwzDYfC253Q17aJkjvrfCFhCgz6D5pUdQdHityowrz4a1pRx2LamdN6HscmnHiYHBURVdo6TPV5bNAY3rhQT7Q",
  "key22": "3koKtDbj6ouBwTxNBL66zsVy1MZHHdSsuRcHhfbpT5PY99Vpg2MzVR56KxGjY5ginqvGq4ezXN2cQ5ALQN9QCNtY",
  "key23": "5BRzvqs6NxPKYwz6VyAU4PcK4eCATgqzzAFsRRTavfj9wN5N3vqVC3kyN7tt32i2kn4tYVpHBHooDDVmNACATwA9",
  "key24": "eNMmpq9G9KFAgKiwCCK23EEo4bFVq7VBR2JtUW6WQLBtKcGMpEpfbgRQYMknUV9tLNbTbqm76GabtReF1q2DYbM",
  "key25": "3KxQ2UUeGWnKssqZK8zMfhnTSP97JvtgdHyPe79bG7xWTbJeMgxURz85MRzLzdaJ2yiwSF2FCKH73VAuxG7gxMf4",
  "key26": "6Kn8Do2JGkv9WVeATnEtX9ArDDiHeYMPgmsnprH82kdasaboTw28ZkeZHxSbtbZ9T7ZxRfQDUFi36DZDDNSMvLF",
  "key27": "vtTUHKVnmmCTXhVDNQU3EHbEKbTYuGAFyWbtEgb5Jh1urKe33U4C3iRm5C1KbDebt1ujZUSe783HTu8VDgQ4tzz",
  "key28": "3L6efmijEZVbjnD9z1aTZsjp8kb57WntjbST8QLoxXDXDAM1gFtRz91bzDgerNcSWxoaiXxySU37KX8Niev6NsaJ",
  "key29": "2fBX5TLfnGh3zB5vYmW4gLthsCrp7rzk49YunatvGnFVPr9epvUKhMP7LYF9GDBi8ZQbDro7JsfRMD4Kv16jXfeY",
  "key30": "5GY29vmeJ6Te3Pb8QeDcW3cNY9uURMgYmtFu5x3MztJqSJjmMSrxBrK6hTvRY8AtCnpmF8gtNNukniBDSKkRE9uf",
  "key31": "4igB5pC3n3rH7jeBofwJFUr1Ah15i194oZYNNFCaEqQ8BbczBahLUG8WmvTtbr1YHnUnMhq1HxMGTP3ykc8mHoes",
  "key32": "QmFs9gA2LGKJbKxFiiuy4nGigsAY8RhncD7P57NEgAWVDfs4KjSMeps5USfF6EkSfVMQkgtRvs6VUM5syrHzfXG",
  "key33": "du9EXCnNSpfhktZuNMLX54StUPC94o815gDn8ybJW3rm1trVRTSjmUvaf9vRjHpq1w2uyMe1d1D8suj2et8gUqV",
  "key34": "oS8GgBjkQ87CqnQDz8arA8ePXHM8UND5NpPCEJ6sN5XW45C7LVSepT9hLQJL56yioyAvVkKoBcerJcnTfYgYeii"
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
