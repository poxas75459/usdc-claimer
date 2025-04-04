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
    "5otVkWRLpgi9FuGRiZ4iJwi3kd4igEgeUyb5yz3wCkz9HgTNT2nPjSd41Tqa3UdhsJNSgiGWP6dx9QPyiTPSqYkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BT2NP35JrqPV6A2pDHqjEbKgkjwAxVm7vVovxU6A4GKMMsrVhTWUFSezMimUeYvt9aAVzva5iYxNb4vHwCdQaFg",
  "key1": "2JFRfwRFxeSmVE6cWSaGjTY3aXEkvce7UPZeQsjzVKnim3m7xc9x9p6VjFD4ttyxCXK8LqXooSJFySrnFjnZrJzj",
  "key2": "P3PteeG4hL1CRvJNte52tGsYC7xTUVRGFxbNKrtWeHekLgc8A7uYSfbMUzRuepTdoxAuRcTvxpE5uM6pjiboK4U",
  "key3": "484wJTL29h93FXV8L12WxViSps8WHWY5FyRJ6B2EqsjiCDJczohRvqqodbmAHCBZD2aYsaarRTEp1YMFif2872GT",
  "key4": "5a8r7sVirVJGDv33Brsq1Gvcp48itBSZxgkvmELsfoLMum4Cuy5SETY92rFaB5SnVXjnmKgbRQ2YWf3KhgcxKvKr",
  "key5": "c5KCJvtepJVSciM5BfhUKDqvCuk4c9xuR5JaARDpJ3vXCeif3CTrBUU6uE7rg1KTNR1giUPKwwYpLRvdFxgdfTP",
  "key6": "612A3Y7cQTWZqnmUaqmwdXs237X74w8EHSN7RBBdBTau5v7BzLGVB3pavihPM8DdRwwWz6FDRBgse1MWBPSioEny",
  "key7": "26tNRF6u2UXzwv2dPUVZcqARtqsYJ2MJqMYWyr8QfiZGSopJNwakLDyKKNasZBXQUtmk4QELMbBhKt95E1FKaG1V",
  "key8": "L1WRPfjE9AtsfBfrXHC3jWhgvZSy5KxctTwsn313CeRQZiFg7UtofycrJezrKEcFtuJfUxWMEm3PubCkcoWSRZB",
  "key9": "5sxpePcXyWBWw5F6kxuhYWnncyqoYP5g6J9mkqinjpTeuMA6JMXu6fR6d2CuL19ssC8sHKaszNTAJ85EMhJoMJDn",
  "key10": "3ZTGH6gb3qZwjS3hzZXdHkSrMPUqmyfZyddpeJne2Y2ukuqWwgoEupZk7uMJS5HNAcUyuC8fTEyjr1szwadZGQwu",
  "key11": "5Vs9APbPezcgd5etxCuZ9Jh4kMCqxFwXx7RXoMp9BpjBhqEGQ3PVrcRbFBq3WfYiBiPjwZLCZyTYyzBrxLW71Gxu",
  "key12": "oPSdELbYve3hrh3zU2B9SbheS7v1eqA5Zqsoj9MERqFAWmK1EWyqJgDk31UxGAdVG4H5GaLzpuCNcuzKW2NeFSZ",
  "key13": "AbQorXc2QWP8Kg9dZud2AWeUxneqq6o89GFF1wzeMJfon9HFU58LPNkqoid7HXRmCfgKHbPjzwPoXkkcp2AiQqb",
  "key14": "p5QMRziJnepxutG8rit9VnxGL47Dop4oWqgRXU3Pk38BjADx8Qju3gwNoZCFuD1DGxNUpSdNfR9qM3gW11CGL1k",
  "key15": "4mw71hhdzLDFujxximAw8zjDUqQSq1Z6SVsgC6c7SDo74UwLUW4uWxesSnQEkBNWeh5b4hSh8PcZFRL5hsnhkfpX",
  "key16": "EopZRMYU6khpZ1vZzedaprksVJYHp6tYaAV4Mv2SC7i7zQXrDfvV2GARqwMqfpGMBPepa5CUdcmtHRHX1uZH8br",
  "key17": "3pNTNmiDeNNiuyU3igFEagY5KFCNBMpcFxKGbonZEp8iRLCzSKHFknrkPXAY99Jf9F4amjzrp3mNiMoehbeHzG8U",
  "key18": "5PUutehLAAT1GA1yjcMxUh3fDx3d77fub8ejpoYtb3rkPKMTRpivjp3EyDimXxP5UbURUPbLUdzgtfrfuiLJhREa",
  "key19": "ja5HmaYCwy8JkubBMxc4L4gwGnFnGJJoFYhKnbSZpyojNuiGv9MMGdZz4z3XjTUxM6A28KBktXGN5APfAUZTnsV",
  "key20": "5pU9a3FamMHPQqASUCu87xaB6cDmQjypgWvmdnU9bM7ztEwSTeyck5pfosN1RjxVtPvvpnVQ2iQphLmGFuTTPVsn",
  "key21": "4JEJn7WJ3v1A7KabbnFctSBFwDL1yh6RksqWoJx57Eenw61f5AGDecqU4nAoFdmL8NfAXaDA2TCpYjhKxZ4uP46y",
  "key22": "2KjPiohvvyFSxw3VgKgacRYhEMQL25on9DPe5Fr5krhJKw53H2tuAaw8RLpPz2D1SXirNvPdUBtWNMXBxGLaVnHE",
  "key23": "59gq9PYkcd8XbstnEUDFu1T49A1EP2tHKsxSp1Xf2J25iJ41SEm6YhwqJFDG4zsR7szmC8hd3PdNPvYAbfdXAQCK",
  "key24": "4ZSUVXzzT9SwSf7c6BaZqo5zpvkcw212boiBpgumu3uSJ7K8kNo8nmxPzt9ALYwiwSgEmBLwFfxtHzcKu98drXzt",
  "key25": "2RpT2WWtJmgBoEKxDrEZQuavYLwExkAeSy35SBE4VN9GXRRauXCykHvPcyochnXFv64ZrqsdZeKsX11mTaauxjwr",
  "key26": "dNdvaHiXh2HDSRK1xTBVRnuFRA9a9erQNyKJAjb3av2Lr2Ke9euCrw5HpMCjJGhFdHnmDLfeaC22paZaiLkoQFS",
  "key27": "4tQjz5XgnuXnXTTMUNGikTQNuf9AYqMHQn4bQpA7qdYtWEQJU5J2xuuhQNnGXV6XoWrFLvPoC2HeZpyVDKbZaeQD",
  "key28": "5XM3mdcTg3aD9bFjh8BAndNtXfBWcZ2YuGPhtjck9C5RcT6Bipsjbx1oTQ779zd8KEwYc4JtPphWZpXbB1qfwFg6",
  "key29": "52cLrCBVLCro57X6w243rFSbraNaxWeynrGEMWTY5nuXCcx2Z3zV4CaDiZLRroxLNSK5kf716FPewRLWadzYJeP2",
  "key30": "evvPSsWodvB8ojGiyhHPucNrWBRSqnf6zb95yzF5k2tUb33V6YD4pUTw4QgFm9k7MXGJ5fcD8Z833YBhP5B9Exy",
  "key31": "54Um8439BhuS4b2Z4Ju8sxLoLrfkDVKc3aobDFZGFqUVYRWj6YAX8AGSSfEYw6rYaVVcp6CEzrjBJcTsaSS6aWoS",
  "key32": "4qgUyaxMQt83TTw36LZ1mAQfEhfPJzoJNAt4r2FPfm2GdkpkLR5st5qY2izWic4axuvhgnoCBKkwjWYKmXJ1Nx7D",
  "key33": "3v2sCejBKaJnKAWKzSxUKhf1eeL4hvdwyCzH8rhJBpZyBCbYmLZcARx8bi6CtbWQHxitFnZkhEy82mBP3Bc6H354",
  "key34": "2VDSwtLmxkXHoCEGHGHRAx5uAm8CareosB687ct9KZjQYaEPrNgnpiuvC83FiN5VmZLfMm3ryBLLvYnXqD1MxZGR",
  "key35": "4qWDnUNEYcut8XpDr3BknCrngQeMJtSmuRPgTdetG8yqThfFi28oCQWA8KmirJ2JnjszsCbvo9sT37aRrpcdwx7x",
  "key36": "2E7ho4mCXh28BvBp9mqCskJdoNQY39uR5Hs4ogMSzwg5kooop3RrjkpCr7MDZbzT3DrNd9HyansSMDqgLcEJt42b",
  "key37": "5bYDuhgfNpdmbxUsfsA9Hgz345PSYPFieXQun5dfw3SpKL12bEwyRhgdwmn8ha3WaRQmN3ssvKxCEEnXf6zYSvRk",
  "key38": "4ypKW6AhcrabWvQXbj5vf8Z4bZQY3wfffiix8vZxn4Ff7aEiX91nq9113gSdYs68P6gsdwuhFLLH3U6yxQEGFMKh",
  "key39": "vrKE55hzqC9xJB1aW1o7cXAg8zmkSSfVv6pyi5dUqx78HGtozpt1KrJE2xCQaS9eAv6LWSNfsnsL7P3bvk3piQj",
  "key40": "4xhTSvSK8kxuZCJbfmLPNdX4AjP1fv1ezyeWQEuccjsunJ8e93hs3qbz2w3uanRCiUbo7sHyer3dHf7yTyarkgCM",
  "key41": "2D3K5P8YJuKv33VKJD88kGLhVTK1PWvRjqdfAnr8TxvBP4EiYKhJLuqB1MDiFwfGVyFHjXxf5xiMPy1zGpKtsDsS",
  "key42": "3m563k3qH1iBzFfNH87uxe929CGcZLGSP7Ym9Zxm3zwVp1aud52pwfPVnxvZ4kpTNPcg6grfXnGWDnp9sbVNsnf"
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
