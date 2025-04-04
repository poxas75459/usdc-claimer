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
    "5RY9nWJjht3mqjnGBunUHXp7nxmgwiZsWdR664Tceihzx7Mxd67gs7w7FkD4UaAzKLPAnr4Y8NEDou3u4tJfMrK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pKk8ZC4fswyt7XACPw7waYmx3jQhNg7pss1XrNB6PZLnK1mjSaRZVYEGWXqMv1s8fRfAEfiSnzXKiXsVksVzr4",
  "key1": "5WuGjmxR8r8RmKRxigKD5u2dgxT98jNrnokkAe2i5dSp6tts5hWNgbrTUdjH39MaFEgPh98oaHivact8jZb78tw1",
  "key2": "YK8VQLpwbeCgDf1MhykvpjnsZf5SV4752Vho9bTUY6XHfWP2mZfocbrKsfpNYnpMCej47cqQueVc1vTjvWqSBD3",
  "key3": "3wJuqNHUbnKKVmYViEPNX8PRsmWdM5ftr4HCr6dG8An2WgfxGw12iqxykVbB3oqw27aMZYUQvYekYk8kSPehSVCp",
  "key4": "2y4gbEFiqsB9xSZG7kDyjDxWrcizHcHe3tGAr3FH4VJBNsUXtS77RTDDmNExaHyp2mURP5uakoxgqbdPD2SBrNsr",
  "key5": "5tva1urFcAQ3JAHVrW5eFHD1QiVDovpHjFEe8DzbPajLUFtnhEDysaG41cv2wT7XX5datz3HMhVfzF5i5jojxF9f",
  "key6": "EGMQBazc6ZQEquwXrUVn7GEcQcQ5sTTb6At39NBNUJqPuD1nRAxyZ6qaYUJ4hffgDf1TRhr7U9kEzAeN6Sf9e1p",
  "key7": "49up7xf32Tt8ef9n1uvCUfDZ36vMErEBrDepDuLacHJHethvJrUeBuH4Mdb46GBPN5WLTRfCN2LfZDFZM2uGspev",
  "key8": "5MQzNi1iYfiwC3bUQ6XGLBvN8gpsfzdUkGs9dCLnfNbpqkr6FLp6vC8ahNDLUZXtmpFpL4y4v3q663bCRSJ5QxAU",
  "key9": "cmecaowTgroJmKF7vqD3yVqkJ6FwcjTE2sHCj38ksxikZPYTPBonWBQQySuMnH6PQGagdVZU3WrK1Ny8QPN3MZD",
  "key10": "6yGaNWq3nt7YDupreh6KDKpq9toUYY8nSDfgzS7YzKV3AGGKccciLAfYGsABaCfZmUd2Uy83GHxgzXZw6TPYFbW",
  "key11": "2Mz9Lm8Uqkkydp7iZu8qaGE2BBXDEvRQkoqJbd6AuQtcxrdMRxxGnb7W3YgbnNGA3WzfLxqM22DVpjSVFubiSMay",
  "key12": "mw6Z1is7mbWye7oGaX9StGjmiVFPLZXPCH2WQ5cXLd4Nm4UzjQYU8xbRWkLekZsRnSxiqB5cjP6RoYnqBDuXNjP",
  "key13": "4AKk3bcbTCVqo27VnbgnMdha2F8xrdjc3ZphdrxobdGBMPhDguy9HMmS9WZZtx5NTVRbgaJA93kKJdZtTvNPaMzM",
  "key14": "5y3A2ZSbTMc5VeGZiHfWc5cVXQc8KVKwQzUf9poirFdMc25hZCZGLaZuBHPsYxFaeRQv9rjC9mQaabumkv6m62V8",
  "key15": "4PUVCuzyx4TCvVXxZgi7Pm7oLUbQuAVVC4PB6RYmGnoxSb9nCEEAfQcM2jjakh2aQvpgpBxHxV535s3w6hHnGDdZ",
  "key16": "2VTq7yN9QijhtjWST67gmETnyiGwCsxKKMTxBJgkC5UzzrhqBNWafUwfJtbaWiD7EBRXmbTAyFjeEUBBRszSNeq3",
  "key17": "25ULSZguA38HHUbUCCDePw1PRP3XEQMwgL8PmeRL6GNVbH7nwUUHLPBEkoHkURH7mawNGPqCC5rCWG8YU3T8QeD6",
  "key18": "3C3XbgHFafEGWtWGg6HR3pJn65j8uU6Dq25dD8Q4q2kK76LTaofeQ7XqZz8stmdc14Z3sJtF4Uw8pMzd9sKqVkpK",
  "key19": "n3t1YGrgKq68dXnC2tKgZYRNnnDoYS56aDVmQVBPtz315yPLnhfKhpRoDt9Y3YAaPARq7kYSxVxBHkojs2ondQp",
  "key20": "2L2Stz3Ft6f3GSoc3CoUSpcRSCQX7vNWdfapUeWmDTBjmYdZp1hmPwuH2CQJapCD8dKNEWZumm3FFcT6U7FahLbM",
  "key21": "33itp5xJFTHKd1eEfMqRPz6bE2JxFrcb1rXMCHSp1WWrSmdJLKgd9dzamJoPoDKMFtecDCtfheStq6xtKJHABsRv",
  "key22": "5FpNxEjSBbvUgNc8NVjs84H8ynVoL5r2V65Bx7RdyebfNsEB7iyocaLLXAD8tzpE8gDkUahbWTwCY5tSihFXRvbi",
  "key23": "2AvC1jRNvBviijZXQXVFYHiuo74KcXJRrDX57fBXG7XN9rQakozFRZAzwmRcuQFDY92h9vPirSVveLjdTHqHYG3F",
  "key24": "59BFnw1aDPAAfz284e4VQEfQh8eMxn1spiJkCnsN3yNnAjmZU7AEq11FcXCFBZLMMRd71HyzkatoXgJ8iuhNERNC",
  "key25": "3jpPuZemEK3kjGnNFtC6pyTjGQsh2h1ffEpUb5UUMrtb3j9impzCh4Qcqu1MRCkjN7YEBewFWkMgCYxxT1Bojgie",
  "key26": "2Dr8VmKFLqUAkkgq6ydXGswBJFTJrdp42r4kSjGMmHEQqMm7T8onxFYdAcuSEJJUCZXPBQHD6RD4CC8sb8tbCvKP",
  "key27": "3Ecqhgd5Ne5urbTA7z3NyZJnK6sXUSUsSww2CeRo3KmqkkqcAWGJ6CXszPvob9rHX4e15QGWFf8AqYFMkfKmY8rj",
  "key28": "2cWTNkcjPfd4kCnghoZjLbTboS33wLbr6xRajWZ3nTwF6d1no5mFJxGRjS7NADX1cVC82F9Zg18Y8AtUoTJnMd17",
  "key29": "4zgXxvfy85eL9qPA1dxBca1Gi2GRXcPppYfetwV6vhxzY9CRhWQJxeTpU71ZRk4TUKozBnViffvDGyiJ8vWnJmf3",
  "key30": "4v1Be9CTZzkYVNKjdqQK5cPC7hVVod35uC2C2uyvHSngXiCDh1XpU4mi96sYJ9gRXXerFxFz7qC2A4Wc9oP76wD7",
  "key31": "4nTSPTJpKcx3dviRquYhzdjxc4F24it6PjBu5r9j4UGzpdDeewvYULBsUbmPvNRhJU6TsDdvTviAy9rJ5qJoBima",
  "key32": "3A1pDydTLbTb95db3szAVpxvaaR7ZYkZ1pc1YGBz98uSnLetoZmCLUZMBJimf4vTXeYy73HnnYPHyGCky6Pjbi8Q",
  "key33": "2DmNKrxHs1jur8qLdQvzJDrPsRZGFzTNhJgao2poSYiHVPhKXL8msgFHQBzZVw342XMZnd3iE9zqPPuyrMKB4xmM",
  "key34": "5oT3GhxoRU6UsuRDmz6Zpa1hqsQH8WVxmgGaajZfrLPMeda94tgbb12nXAEZmHChjEb6pbgexXqJKSx9Qq324doc",
  "key35": "2nGSNVJxrv4MKw739XVnTbB2TQjAKqgx6HCAEsBchF5U8PQAynqPJmtmmj8KitRgRWvDEt849QZJr8Ks9CyardUy",
  "key36": "3cJC23b6znMy429rv7FjgbeULusQUkV4VVDbP6fw5ZZ1m9Zb1rvRGyqY3PPsBas51xH5siDU3f7DdVLQ7jTZ5RQA",
  "key37": "2AprDLzn1bHdDVByFPUz2ZmMoYLRwbBXnThKfcSKoDwN9HDX2aazASPNAeW6bXocsKfYxmrNuRQnawprVJG55e5N",
  "key38": "5CPtafs8hc8UQKVdoYyPJPLVnefbRbDk3cy3mBTLUp64KkmRBp1Lt3GWSe47iqJqF9sVcFAdeM87fLRuvszLNjoD",
  "key39": "LeKvJuaRDHqrMZkBXZ3fTyjdeQspbEqDWe8v1M15BS1WxzB6RqTuvTZuZxvc27W5e8YAfWtyy6boH54bpGK1FBS",
  "key40": "66KbskVaKck76c5SkLdE13WbQW4t9kvB5TLJB5ynhRNqXQ5KkyoTqm5BrFi725VQgaXLQftuMNpaJQvHHRyzsvyf",
  "key41": "5mCGVNLZ1LUrgcYDgpQcyogPgTKakFDhSPJ81A2Qvs2BEQ5vYoEAJeWE5PrDXr2aHnadrJC2y7mz2GxnqSuzaRKL"
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
