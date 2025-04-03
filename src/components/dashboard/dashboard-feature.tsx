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
    "3Z8GyspNWBSVqeKxQbupc45qiuLDCMJGY9UQYiXUR6Tqdy1fFjtS8ftJKaBfVss34tTrAhHMr2WeLXTcG9zPAW27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iuEiQxR1cKFGSuUtvMJ5EzviQFp3hqmRm1W9tgZqHbuJSAq7zDvTs1QiKGCAaJFGCqxjNkDWsH5XxRT1NDzSWC9",
  "key1": "2vNZErrbedzaHgejCzZQKE45H2fskiyhCi6SaMBTqWvSjDJCW3P6YWr4Mio45sqMAinH7kgXqNqAWD3P5ZeG212q",
  "key2": "4rr4N3XjJJYo4EuawCik5mQnxzJj2TsoC86d8reSJqfAHFkZYvNPxdtWVqjmxPYTZ6BZSMAqHB6qQpk5NgeHv2Hg",
  "key3": "37p53gkBzbvW1vjbX79WoRJTvKGeiP4ywv69WMxSTjtJoTMntLHn197m4J79nqrMvAJ2xmkqQVR1FWsG137MHHdj",
  "key4": "5rnraT3Jt97h4KYE1YEKDJW2tGWKSoj3TWRx2aJ1LEo6qDWQCLrXQYot8ma7TE9Pwm4r8sy535RDw1miLrjAs5xE",
  "key5": "sWL2fE5c1V3P2JWVn5KCfBX8VZD2FHbS1n7gGW7DjFLspuZqwQtMY9d6riJiuj1ZfX1LjtpbxPq1qZC5DM4xrrP",
  "key6": "4X7S3qbrthm9dUR2RYZTjcm6epGsUN5TASk1PUjcyuKk4N5R4KXfpGVLLzC1sNsLs7s4ievm3CYNF4e3cwvjzHNj",
  "key7": "MyDYe3QZhHPZpVJU8JDDQurAAaeK7wYHgVL3Ngbhw6D8AXMhdRw6hVHK8eWaAo24XbnCSPyibm1A2aV8oPK56w9",
  "key8": "59hg2zvhtast2MG49MD8kkgfiXbfJZM3K2HLs7C6xgr1QC5rTkf5H9RJjePGjYzKHKmUVvqMRThdLMrR3bHqYKKn",
  "key9": "4UtYzq9z7uttVwHfN32Cp2ui7q4r7WoL7o6TfaPHjCNFrC8hS2dg8baSh5GKsBfCmmb4dYPvZogk6f3kwQutNRkk",
  "key10": "zY9WKtcVhVpt5GiQxY3orpzrYg9jvXGTXhV7Q9XTGVaYNcKqixmfmD2SQ1dEEXGjGqzRoCiN3cmZLdztZGbVVzd",
  "key11": "3cKNtWme8zxh9x1Pd76iBZLMxBehN6Dwcs2EPPBQDqm51AFMRunk3KKX9oeje6Wb2YMGREmnyPMssVX6Wpq2Cyrj",
  "key12": "2XEbMC9aCxTanjXREKSoFFWpnpjxBZn3ne8PbmbWuQWsukXNgtLnoYPbPXTS2Edp9gzFtiVtMpLFMxmrFSmvAXgH",
  "key13": "5EeVLiWojAJwpWADu2cQVRka5nnucfstnXGW372Z6QmjyJRyZKVFgdqVEf78JR9FWmr4NAPoAXBQLGFvskJExLho",
  "key14": "4MtN3CTnYMADprGabaVTiU3trvY2cfXRRSA4g7iTgYZZEuXxATdn9xs3CBQ5i1o2ZJWcHUi3owwsmKKjogSBcwqn",
  "key15": "5tLTqRhJd3J8GSa4N3K833ZQBDi24VXj1ne3RxeqEwdeSwAeeqXdC7ztxQyinXN8Jv7KrTi4NMrZKtmCwsbS92Jd",
  "key16": "RZnZanremmoSkE2PZBLH59hPR6wKKRLb326s7gW461KLYyY37JLpWd7YueMBfWpCyRc11JNHAPufWsxdZiUtFTs",
  "key17": "5JVNcWxgE2kwmKZX2nKCgCRGrSADRH76XGprscAASeynwt1dGSbnLHXgxnnHjVLkfae2i5cWujsvzyZiNjZ5RGg6",
  "key18": "618jxHrvprgg5jX6KBxKTsemc536BknYn3WppHAENyvBom51N3mdUXhZXRY3TcsNA5ALnv3yNbgvxvVhTxdRheDQ",
  "key19": "3AFyN8B62gy8iRMSxmNSdkQPunnaxy1LTVdCtSjbNmKDY8f5DSZzmoFk38cov9Me3y9ZTvvaKadM4fD8A9LzgHEw",
  "key20": "2VWpLoxg3HsvTVaYkoVuHG9zFu5pZNHwwu9TUeYnFCgs4Vfk1Q7X7GKWdpopbWUGB1RRSV4iK5jc1HuU385Ku9hb",
  "key21": "54tGnMnbXPbEG9J8SYLiLjf56Q49kkc5UEhaZrMkXP42ERsUEc2kKtDedKv8WSan7Z2mk5TWnrBDdAWTHyJN8JTv",
  "key22": "5Y96XjtZ5d3wTiAhP5szBYs8iJvXvuhKZhGs4KsPFz9YsQfpcuMxcXx5ywVPtXPo9C7PoMYnWhxe5TXj2K93UzxZ",
  "key23": "3qvUxGFeCeAYFNsGu385aApKAzcmiZAjaxLetSUNebD2sCMUvVGshi2uwyqRifFopRWe5soFpuRKzvMc3PhichEZ",
  "key24": "FBDeCpq59mzGL3Ms2qgJrBh4GePZHgDHy96iKsRxY6fVpQxC2UM71fSNDkCfYRSsHCD877CKHDCSrTkvmcYzMZD",
  "key25": "HbRXicqTJKusciUdkVpKKD94tDsLZ3y3Jmu4xrwqFumQrwMHMwg29L6hrau1zDDAFSeg3yFMBQxPw3JyL5HCUck",
  "key26": "2MjhvhGVjETg6HYyXw3mXPk1jBeZ1bdHrBdW9FEWcCDZ9EiCb3UvGdyKDqyCgXxfovH8neU3GG1PwRMhy8LQ2rxt"
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
