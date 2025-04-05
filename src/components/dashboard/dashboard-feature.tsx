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
    "AJVU7tSDgHprBCpiZf8Nz2Z6QQEVJGzH371RYKMeLCTQfsX1syeJWLtrkYBuYBfV6xkYoWBCfCFALVTp2xSHvCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txuna5h7fnWP8kHxaAXcJWhEE2VM1nYpSa4B9jK9SVydShzTeZ2kRftszvtmeZ485UEsfzkS18Pwjz8xz9vKCLf",
  "key1": "4TazKKw3SDEVpbxrvp1bKEK3KGVRLBrRAfDtNJV14L927pMNCwyo1FxU9CMTqP2C1AEUHkL4p4B7Gmhwu7Snntrd",
  "key2": "5NpJ5Y4FBXmfNuECQesJeFjvLQc5sD46bUceusNWNCbDjKZbV8M3WPDUdUAkTKNTvxLND53vuPJyvwFP9D1JmATB",
  "key3": "WzD6D52S6trjL1V1xtkTpuPdiBjexrNo3F2iqT25zkhmX8pAaLQ7Cu6xJdvgiRB244TgfkFzBtUP8QegfkD5nCV",
  "key4": "2RciQpF7nSzmjRyLnCYH6XRu5GFUW6m6GLMchUmQYwwjch1bRyJhyUjMNw9xkUghJBfmZRmdbdGgjdvzVGNnc84W",
  "key5": "3Ns3wQBDuh16Q5W17yNFARjuU68bocg7DNo1fLLmZjNeo8Mmrs7ZdG5HorE66uqGimtR4jVbgZk6kdukCrSE2t9F",
  "key6": "3HGGvFAeEyLLZRBkh8JjvkDwiFKWMwjRmaxhVbsHqvNBKeUfEzUPVyn1YY3qzSDHnbAYEagwVNWTcNdgmLoCMmGJ",
  "key7": "2mRshgftNAZow3Mwm26pr993JLmc7b2YJ555c3mQc233yoGCFsKQ5iPCo1mHxG1hXG3uwGtebY2gmt6ZzfgH5fEL",
  "key8": "4XMLiUCZzNbFnpsTneHY8P2FPfnWBwCT7zHE4h68ya22xCgnrXCj9xEMRmF38EiJan4zPMkHupiX6q2ExUDaZabh",
  "key9": "3rcMtmNGBHsXxPdkw18Ck5CkheJk4coHFgktieTXRnVQG5eCBLBpwYvQCPQrEkYeHH28SeRaR92infdoEui9qvHT",
  "key10": "hfpKDYhwaQX6z3YSVoKYYaTeW3YgUiMERGPNf2nKaGWfiZ1HGB6J1QaCDV31gdeat3hp4E6JMYaSH7yZF7E7q9z",
  "key11": "3byiWw53oafe9uD4TTi83cbAa8x7Pc1qDM7urJB7pycwM4n8JosaqNwe3jHbJbvgb6WWeiVvoAdfaJEgV622eXYP",
  "key12": "4HeKsAtwKts9Qq1Qmjp1cGSpY1o3hXTDhdixd9GL6TDqvZzyfRBvqe4TUuTp5eYDhhKbCGC1xw1L2GtKyiKjbRoA",
  "key13": "nzoGrgzpgAhqoERimv4ppHWWQeLAPfebYTjWfGy9CyyXuLNb8fpoA7khBNxVcvYh56C1NGg1ZDftkcExWo68UqG",
  "key14": "5BvDxSvaVDnkPPgZwcoeAvgTHBAFC8hP8ZK1oq5zaGwqZ8TTKfwPNw1rxGQ5va67FwW6L3UwJzzTcW5GrhycL7ry",
  "key15": "5vtYSSMxwvgojGGCGedtVHDVMGBn64JyMETUXHsyRNSmeajFtj5SrRqKYxxieQNEXnRzekzuC15cxNG5pkyhfg1N",
  "key16": "621fYjcesA2y2Eeq88zhuNDCCzfm79wDqsmMrEZQtNNKBrNFE5obCjKvTTppdT7iSjhdQ6fsoCWSjPnwR4E5mvBC",
  "key17": "4ioyKHxCmxnMhKwn8ANft9ed2FNVxpzEoNiVMhfMwiu4JMUqSVpUzhi8nMALaSbZCKLwcrdBUTAvQg3xoNgky8zP",
  "key18": "3PDxkPeXHSsPtKE161NWPwXKzYmeHeNXCinKEhEA79xHwrubv1rdVQsB8sM65Vmxn6s8Fg13ftTKvzqmcdwastCq",
  "key19": "52TUXRxETctaPZgofGspGLECGtgVgsnUAjsY6oBAzLtjrjGiRkMZweaem8xfj8RKQbp7hsfndSfoCvRQ8TQwJvxx",
  "key20": "2KYoBEqFkMxEr1QpP6t9kqMDATw3DGmHBMzECzoExMrKKXJGfpnyNby6V6x9tP6QxyswSiDPLf7DVPwBZp3JkQNo",
  "key21": "cdFhWY6dwNEsndy3VtML4prs9RkFVKmR7yJ746r5tywsBkaK5Tv3G1AYHLoCmeMtt7VroN71joSNFX7hpy5XDSD",
  "key22": "52eRSCkbTN2tipkyCQCCaCcS9NwmjNPisihZSaJgSxc1aiXVH9ALWcjhGbQy8eKrx95h8oeCh8fzUaAGcRd6ToYG",
  "key23": "2cuSCvpku2toVyBYFzs65b9koqEDh3hYP4WtZP9UyqM8ryXMH8f9igjXJ89W5Gtupsq9fwLhsTJY42PLwCVPSTSN",
  "key24": "2a5STGrUMPxHUVLF9n36Mk3ftkohH5wX37gTZinCunAvv3sb2GkXSqffbWAj2DEUdJos5bWHY6SdHSZGDDTvcWKw",
  "key25": "4efhfPoCCwcKBD6YRqK9J1KSsfu8XuxVUMT6QBfreHXqBmvRc3fNLCb2FdhG7PMmVbh42SqkHkXBLTNZtgDqWAoe",
  "key26": "39pwCGmTgDsaMRh5N1c6ora5oMd4T1g7MGS6MfXCBtHmHjsitiW2eYPEeReqrTc5pQgx5AxmyMVzyEECkqCjBL1c",
  "key27": "5KqTGKeJvCjVDiidrsBm3CzHKK4DnZBQ21aPX8TGEi2rAh74QZ44zyZjq4YmKtBF2xGG9WBaNpB2skWkfGcWEMTc",
  "key28": "DmmboAhGFvbovqd5eop4QrHFHaJmfPGXdWov3V6bXEkveCJFsE37RdB9MRVJ5ZZcijouaFgcamPC69mvkeoA4Nk",
  "key29": "4MMYjMpj6P4S7M7QUcrq42FNsqSYKDtQnMY5YX4RoER6v4jZCrWSu1XxGiYiTnzp1WSzj1QP4cNfQAhaZFAFPfcs",
  "key30": "3DUXnfGZ15Rr5r7GwSVjjNU4o98Gwpp45njaubtUd4T9KJceXfY6ymcLHAJcNR7MVQaN71dpzMDUeoczAhgXwGsA",
  "key31": "4cP4UBtYuycnZsmySmzEFRAcNdk7tEPQAK6KNXRE31Saz4U8XfZJb5hrzA39gUHA9EtHAGbJHHkbaTRzGLK2GY2h"
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
