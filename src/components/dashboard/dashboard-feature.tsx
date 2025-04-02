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
    "325LffW4PFSreE1KPGWspJba7VAjB1kMV6fYvVmvoRyXp4wJEVvz2Uhe3CXnzQzNb7HRdkTwcrjtgUV3ggeAWhPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YW6gHP1jWoJvjB8KjXm5BNBVySgmdfnXr46oY3a6xaEmHQEuGzCsdhD7BCVh2993gNv3KeiSK6vaKxeRvDhyTym",
  "key1": "3R34HB8eXVdgGt4LTfyU24UYp14etHm55eYztDu5kggdTM6m9mG22BRGAqTp4v8Px6HSTdrC64meM2CKGjefcjj6",
  "key2": "3VgmiGcDDpiVTT7ocUVq3UTahu2wHCZnvfBSoM6Rn5CspZ7D2X8pAmnhpxKUXAuUKENXZ8PtSLcLoVcYYck3jnia",
  "key3": "3r99rjuNRZNanJaymDrCWVBcNtz39phmmL5FUYsvSEFL3JBhMj1LrvpLUJ4gzb15g4YnrXM2RMpPvJt921iiHAc7",
  "key4": "3PBiyaTsNP22P2foY26AHmweWGYxLChMiF7AanpF9mPVherwP37BDgtmwFgNUGnghZ7de4BXoNat1iPgDMY7EHPE",
  "key5": "3GJqDc9CMFnemeGWjuGheZQhDr1CHJM5MPCvetEHhtGEgHT2vZQGJv6rKFf2ZCMS8w1HLwskM1gM3yMyMJ53XmEf",
  "key6": "4t8yBnHkcU2jGVnfRNW4Pa8pwtrPewE2pjaLEu9sPuhJvcGMfgNqtE3oHFonzg33aa55SqwKddmfGbmfe1yk8MV9",
  "key7": "2U8iTDg7KCtQUnqtBM2zuiXMcCT59rWmjFpRKfuec2XT1BAGYWmBL7LGjpVwLgRnzXQiV4zcnCLvBPDfBkXeJLVi",
  "key8": "2xeQis9ZvuRb69ZDkyvpotNo1g1Uj1aSZScd6cd88UwGrpMuGLZfSzZy4586PX6PaV1jomS1q3daJyTDVBHPJMx5",
  "key9": "2zzK1fQeo3uMPdJkRyJvqCMkD4KfbtoRAsY9R6JEW7XXWtGWKAWtWZxinJckrnBVGAbRKYZ9kGV5k1s7LnSLi8VV",
  "key10": "3FGaKJLxSXV13oUmizwFcYgH3ydej2n75BcXPBubq4zPFNH8njvePPhzfbhvTiYybQSANeps2AZr3AvoPnr14FCL",
  "key11": "2mw5N8W2uidvKsydr6JhgqmtBsdvPpoFa4WhQMnURPSJLPQCUP1qbQh8HFpsM4VvUQ6ufuXErPp41SodP2oAL9ut",
  "key12": "5csQ1hsm5YQzEZTXyMDwdF3Na4rtMiK3zmNq4cJoBcNMrRXse294QuH1wofzyHGXwcTJJNxt8xKNtTfoK2BQmdPf",
  "key13": "249AFh8bW4tAwd89fJZ3eDrJZ2gFc96q31yDivJNoEijNDbCEcPZKjKmRo6kHAB6NoJWDSLpZBtbJGsuEm2Djz7q",
  "key14": "3LXn2mzaAbQSg6n2VxaXASreeJYVYZdgrmp9VqVpUn3nQMirkNW8BaqnWLRNSDjXpgS46LPDqjQ6CyiJ6mwMniSJ",
  "key15": "4UBJiusX7aUHcz7gKRCk2AaoE6zfZChGorpR9waJZFB3HeyLSnb7KcPPSHcYGGbwjtS6T9dPXU14Yg3BUx4teN1R",
  "key16": "3zMMDZC58RnNtfCDYtq382bwZUUBpSroD7Mpzbiqu4SNCwfSoJiyHTtMNFtcv2ydizSZQHukxWpYieCERrZmeGYF",
  "key17": "4HVkqzMvEw9MqVcw4EV667MBx8STSbrKr15Hdos1vyEVh5WPKGM836t4MqzcZR2jejGH3vuoN7WEm2cUnD68Yr1P",
  "key18": "31YeDxQfucBQZL5JjgiWD1vtDTboBY2uaKcnnXMDUTpHsoJhbvPsMfWrn8ZXuBZdN5W1Bjncuq2ZNLuxEVT3iQvq",
  "key19": "4tohESEZ5TYb9WXkCQ5PK7hbQX6g5Xo9wCq51vKy2t7FmNz49nqDmfBDTyUGSN67bjrEM9UWmzQKy6yjnLf2FZb1",
  "key20": "3TunT8TZXbLWtz48RiU7JARub2Cj1e7tsAdGny9Utx4w8mbh6k8Sd2VSeAh4YLLdctyy354guDLipCH1frhTyrda",
  "key21": "4V1baxiAGp1nQhRsthXrUDkARFqRHNVeAEFKf5FqK63E4J3Lsqk3w9tVRvACsanq5dfvFiy7WuxSUvqfsawMsJd8",
  "key22": "GtHPpULredHWaLW9HmsZcTvpMEz13A56QNT7x8xxEMs1LXHWMXNLeoLQBZdB73jzcMKQqzqZUxGQLanaKKvKXvT",
  "key23": "5zTupDSeJ9WLyXPZj549TpLnrCEuUMn2zaRagJ7YNACAP4UpwtiRBFnC5fZrTVqbHRSu7hSidJUxME8uw51Dgx7y",
  "key24": "4ZNLRWLNfWJrrHueiEkQt3cD1EMoN7am5VSTXTm6pbE9J3q4AmYrFpQG1mSFMK1xkWYdMz5SxcKYN923RkxeJ4H7",
  "key25": "2FoU1KzicLfM6irJWemq1o9Uuffot1hBzqd1Q17mLyij1VhkhMA9TXwgqu6Foii3noxywR6pderNPBPwu6xAjQ5N",
  "key26": "5QZGGcpCAkrRHV6vgBt1qh1TMYtXNe3qQAw6nzA9GmULh846NyNiAXGfVNVFYg6NtwMgtNBAGKNCdiGpcoNpSu5P",
  "key27": "5MZPPYTAVtDEYKWUueBZm8XnM3SWSkemciU6iXbq1THrZEfN8DWQ1GGa78N2dbjdRNRjeNfh1Cc2EnfHgFtU6pjX",
  "key28": "3Zpy9vWJ7VzvWMAPmm3Zsmp7aMg5QQ8qehzzt4CpnQzWmTPNVveNRM1UH5y7oD3trnmzRDCwoH28itNfmHzUkoxA",
  "key29": "2DAbqvki6ztFVT9zzHgrg3kxYi16aNZv97VHAYLSDaL5dGaN1QZAuXZ9FBKwkHxSjkBvqfZgHweUVLLhNpmZ4hH4",
  "key30": "3Mq3hRp5SE3z2ZqCVSSU87kr3ctbsKgLGL8uAbghWMmUguMiFvV7xAj7GBU38yRtaVXMMqqiWDYnABc3nfYheVct",
  "key31": "4uuLNHvyoHDQyBeL8ZCJJHUHGwBC2uiFTM2t5vv6JhRXTJ5jeDg253hnA5jn1FmfWaDia2PHC3QHPhWc43rj69JE",
  "key32": "5zDUJQzWknia96oEFwhF6MVoAmMAZqTHnDWDSPfueKJDmLP7UMT49AueGnHCquhYMwZp28vacDJc17hYd97iVaGV",
  "key33": "43rpRsBNEzvi458jy8EPeDTZSZqtdx2mQjAkxj8KzWL3x9M6wVicAu12WJ3TMR8c6rKB888W8tuNRn63VFGYQfPT"
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
