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
    "2UHuLBqAhd7esMSGVXN9WyfEsAM3JpJFYWKRJ9triyZXUN8RxT7ZPh21YeWskL4a8oEQJLafgiLhWgoyXNz5i1Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHZrtqrXhnCvhK2viw4fW3fEkPEnLtCw2k7UhPgMReQR2gg37WmGrRVGM3Ax4GDBAZqjaSrDX7roAaJ7pU1G6Gp",
  "key1": "5oJj2zNy6SeGmb5J9HcksigzE4GN9ic1MgK8W1gz98ptdJ4T7EU6ZJmiJXMfSfaxbg75FHumA6kc2BbkdJLwQmav",
  "key2": "HZBquVphF8BeJaWiNnfH9XY1zhFjupSpggeLQxbP7sYpVhSB9YUa1BYAnkmBisFm7JK5ez91PDEfLuNKgRvoTXw",
  "key3": "5WUTBtHBvijJJYAXCXhi7dneUwzxKHmgyqEjYtBiGJZ4JcAZamJPiKCzbBSP5C5bNi9c1VZa5kfnFiUMraCfULzG",
  "key4": "5WAmtreQEDmXMp7nkFANo2wW1V4nhttz6UjV6YCFapxr5yU3ZUfEicFisU16D4iSBjEPndWptn6BxgbXcEvXb8eS",
  "key5": "3FwtZe51BeUJ34k4srr4ErRX5znjrHzK6ih9MpVBREiHnkLYUCVWHbjmCdEcV5RUrEesRY4WLDPG2hfqYTbfTWyr",
  "key6": "39WYUwG6hY8tG4HWboxWea5NHC6FXNT9xcyoby4qz7gP4rQNy4Ji7CbJKa8eHrHpuwE7tUE2qY9VoXgSB8Aa9pSe",
  "key7": "SyQRgJ8kbxCvYcinRaN4nxY4qsQAZa9WqrqHneftbgccNpBxWV7nTE1HxR8Xhx3gqgE69jUYbxAdbpyY8wjRVG4",
  "key8": "5Y4Q5GQm8KioxrsdMUweYZh7vKXq7K2pDn5kFddWnRpnM5DFao82ajhwRDNgwVfPZqBh8Rs4LZ9kxjfYWSd4LGy5",
  "key9": "6iJgCzrzJwFkX5C8MfEHSHAJfegBZBwLL6i1iTDwMAbqVu99Hp3JC24Avuw5YvRtt3q3FjwPYKaWpGLSZUceiy6",
  "key10": "gSASuoCkHqTccbYLbnYhUAuNQgmb1Cd56A1BjcFVHv4saVnX8Ud98UeAw8kN3XP9XTBLKoAxRGHaSxSuP2C9q36",
  "key11": "2fqNZLneLmmUMDP64sykh9Sx22dodVBfnoEwSoj39qWoYUZuNjzZWMZJcwC4LvbcWSJUA7RaqGhHuVonuReMPJ4s",
  "key12": "4sRE4qsKrQWyc692yFDAL8h6U9vqk1AEyhNbiWZ1ce1xUUxwE3AnFXM2UquPAv7dL7Z3CqH9p9BvV8Vpnz5hRhFS",
  "key13": "2e3fKtejnCmFxwpFdFs9Ao7gxA7RWnYEcWM81AW4tbeZGWzXGS9qEa2kmVptM95QimyHnkvtbdrAjysCTauUUJkX",
  "key14": "24ejShHLnkDDiAL3apaFEeu7YW1mn5tCH82juUFuSkFNnXxo7gb7JF15eAkHtKHJi9ebHUsKmqQk9eNYCXXAHuS1",
  "key15": "2bD1EAdeASv1VgFpM5xEA1abJkmDHjic3GyDqXDw47pKgibELKa9Ko6811Ht4fpmST2uJTE1sV2USyBnjB7tagyt",
  "key16": "XNcAJVvMoajsayv3csBYhrCg2PkAYrb7kVuKxgye6hvU5QMNdLFrNgq9rD57fUjc37Y4LvpmbX8iGhNe5chePgT",
  "key17": "5qTtGuhPSTW5FvCDhsVc33C6bwj1VqZMNk2qMJJgbzMvUk8dd2xsrYs4GyeC8tDthFh6MaBdFCj6qwqxvVFDRu5d",
  "key18": "nRCDdfwuZMk71GCHxSHs97VuXm17AjWSkz9pkQazbw7TBcCxAG75P3aaNwRTJwhDULG3RUwk5hZwvWHNaVDDiSw",
  "key19": "2MYMmz8SQNVqXbjH11pWkKKRADjaxLgNdoY6AKxzUho4gatXkB82P2hjjMN7wFoC7nCT85g49UUsJQJoT2mavUF9",
  "key20": "3rgwi3gG1oK9VpRmzj74zCaBfacifB4aNkuF6wuwSaFxJErSQCEyKiDrVRNTHH82QB17UovGtsbMz84NUdFFPhLG",
  "key21": "z4DfDbv4ELFasQqnhdasGa4akm1picBQb8T9ogKcEBmtZQ64NWBPuH9KdzJXzPHdDgY5hPEXsi7wa7GNkh6MW94",
  "key22": "4nHF1Tc77gnLp3E2B5QmdEDmBHDxnSMsRy5hSwe6T5toso3mEPxnhHXJAXrhELkFiDUT4KLqyKMTTsXatpVAoo1y",
  "key23": "CDjDKMyiaBYbznzheyrSUfXuX85jBfTCwU3JEKAcGZvMX8v8D5C4ZFdDVkFSaCGV8jVVziuGvhV8VHBPsuqTTUS",
  "key24": "ZhLhr3hoCsLW2eVrhd1e41oBVMDcrdKMnkhxNvB2Vc4P2saCVCrUD4cftFkPsDjiCBwY7Nx9BQ3BBvC2pduaYSS",
  "key25": "CfZD9LZazCNq32RWSB87CfqsXFbvenVurUTmgoKznfjk67kXGTEJHdvGa2eJDwmqZfzcSX2xTZJhjYXBxL84AC3",
  "key26": "2fHLrbf1drQNsXeUhuaxjtgoRdv6CD9AN3ihp8vYwxkh41k8TM8j3zPDkKLyvA2DJekv3e6WW3huhnMqnNU4ER9N",
  "key27": "5Kndc19zuvSYsNqn13pJY4VNJ5kW7G95X7K41BpfYB2nQzNhxHunAqqeCzPrBSgPE9qbtgjbFq4xHBfCHDkX7rh9",
  "key28": "4Z8Mt1NEoDMuwCFGxN1L9KwEenngkCJy1JAu8tq79p4PQGFWcRMDYvCq49QE92NuCVJdbJ1EXNCx4suAray5Bzo9",
  "key29": "3fA5GM9uMig5FEVrEttDx82K4Yo8CkBp8eM4iTYJYyB4MdjMF9E3Guoa3SmY4LRSryWbGX3LueR83Kt2tgJ5WwsC",
  "key30": "4bL53FArio2exnHT1cYa6b9ytcXPehbpdGUa4FroRqWFRU82ZNoxu5AAmoPdByQQntcVjBZgsrSWhL8C7iPqfGCL",
  "key31": "4xLtEYvPiAqLTEjW48n9uWW4SvTozpK2vbynV1yGT5vXtjX1wMT52srkpLvSnAWHP7XtvZDQxAczu24FjhFA2BK3",
  "key32": "fSCAUVaYUJ4eKKUwHRCEZj6wSmB5eZ52F7A4jyJw1GuyeEAmrWiQLppx1Vnw6Ccs46BbUvGGwaBkJMMTr1JbTv3",
  "key33": "arcrPCZZzCESQpS7bSKz3ovzM8o37suV4DkFLcKTk3Z1ZeDGHTPybsyLNxQNjW34evpxbs14qJKArqYzHKAMsAR",
  "key34": "3vBDdFn1iKP44ZnRosxFPqdZ5EHsuNyszSCZhuBGXJUyjaFp7tsgafLTkmmGuGddK1WkC6wZdjSptYjnSFgMzMWD",
  "key35": "66tW7jpaSpBgqscfmQYKCam4gkpgxVMAJSiLGGt4Axq9kc4TWwCYbqU7huSYqENbhbnvyjy9Z5BawNUFcKY3vq9w",
  "key36": "9qzKT1wrnXugEyaWd7QLwprnx782G4LwWCUnvwsMmkb9YtyD64GsrZHdv8UP2bdXBJmyZ7J7RL2TWMbVEifovSZ",
  "key37": "5qAp16pDHjYDLbWuUn5NHpAzCMcEAM59MBhWYhDuEmU5qMrmffygeTawYM4mmGq8Axm88VkjhnfmGAk5Bw2Hpo8p",
  "key38": "2tw5WgUpeUVzU4T8966xZkx4un9pJ9AwcTGKrjkKXSQDxEZZk1HvnLr4e3dXULBcvmEzzLoLkDM8dNVeQeg9iGkm",
  "key39": "3e9bsxtmMXwAcAx3cv9YR4GvipkwyqY2mKraP3C6Jrt8Y7Sx6E3hx5SS6whEwf7zmpRKDxu5RVkvgQjvM1jPhbFP",
  "key40": "4oTHJStGE8mK2hMA774CCUXHrxWk29w1UH26oQjh1gctzrwpzpAi8RskFjDmJQH9c39HnHj1BpsifEDVQcgjXykU",
  "key41": "5r4zUCyff2x4hK7Gmn7avDrYfWMe7S9RJzA6Wqr8an4tqqt6g6fmhmrtipLkFVfGYWjCPuvKPqaiDPNK1yicVfik",
  "key42": "b2H7QfK5dynyvVvWPLqhnB5civ2UFsBMztx3R2M2MZEZunacgBogTZRuGeJACHoEoQT3LigLGqeh6PW257Hyig1"
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
