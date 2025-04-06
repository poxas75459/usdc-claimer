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
    "2SzbKwThLJ1z94dxA1LYyeWEBppdvnSi3aAx4B1FxkobU9i28A6RsezxTkFoviFGvdVHMP2JGu1YrfVdmbSn8hDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMRfFHXvZ43az6pcJdQPF58cvS4f57jAorTcw1dRiJ5hdfFLzvpaavn97qnXbdsPMkGurqgpaLydewnhiDn515w",
  "key1": "x9ygaKK3tdobPbn83XsY3c52WdPmsRsWF1x5QmNRf8TUa2QPWpuQvDKs4qdh2TASsp8dXix2EdsxE684D49neKx",
  "key2": "hCYGjrGG4TaDyuiUMx66BjVrumh81djcsf1mmR6vdkXsaTRsQn9yuZrEjQNDo1pJKR5iQrungsvebQMpTzqDkLL",
  "key3": "3tdhMY8bPHbvChwey8N2H7KUf6kPq6AW5q6qt2g2camYKn64XUqRoPGNg7YzRTAwmpRTLpxguvpMyunpfWo1Ti87",
  "key4": "5edzfxxi7aBgS5krWyuLQWkzQ42gFcVokueYHsiBv25r9jzVNK8rAyzeFxDmHTGuekYFmAEj4u5tyRps6F67zFgT",
  "key5": "4xDWkCEXMR1EDxxUXXPhvKj3UtYsYJtPfNBPhkcShSUnJbEs3nf1Bm1aLrAXzTjyWh5RyRNvCbo5CpcoRTg9vW37",
  "key6": "2PCjSFjWngRkquErihbLbEeE56ZAEkX5mHrYScbwYGLyoZ7Sr58iTsT45YCBSsvCsyciQtwheAi5ApVRGeh5rbNK",
  "key7": "5GptwuuxfYbWAdwKxShNPEYzLZFQfSLzby7gcg3EueBXM4723qgQZroEgF44aSvtBK5A2ZWyDd4FVoDkQmSzw4t3",
  "key8": "41Q8wWnLSbVqdkKW5ASFfjEkZku8hLB5uBuy6baMdVj3Sf5PSPfuAZ96K49HbPKAjYtcNCEuhuqZsRaWXCbGPoRv",
  "key9": "4UfdipjA2fSc4ygoEFj4QD6mkssZ2Grm8MkEjVZeb2A7qMc65dfxchsjVAKbXxCuXSPUYmWK7JG7gYwi7TjPvNM1",
  "key10": "4jjBHrGxiQicRcee6FixUfH2TZGJQ39YtitM2cVUFmwn8XU7stG8eJkm2eopiE1UMwKeYYc34QJk4VKK5N71TnnH",
  "key11": "5JM5kN4kXkqzKei3r78y3qntdvmNsY2bUdsq69ceqTYzSiwyqB24p3wY77eAAkTuuR18E3HV4oKZLkMgsG5bZQQD",
  "key12": "4xAGqZxLfgwDsLTKnMSFWvgTFBVAZh9Swsz2o2u4Xgb8UFDCVofudEG3wnNveyCA6rFZcmN85j2U5LQxtCscYC9P",
  "key13": "4xUstnmEhPXzgx8jTP6yFbYUKTS9N72hWvQUGwDH2n4rjskp7k8PbKUuS3LsAKhNDzHtJHSD8M3XsuftzdasbtYf",
  "key14": "2w2MdaPUBHnEJ9rhAz2qv37AE5crAVMofTSaoW7htnJ2syJsDgnjFgcbjrbBfYhSoGxH264MNy8vkyCCF6Yoh17K",
  "key15": "515RihmuCCKMNQSSUQo3NL2xWpX6Jizc6amfEs8M5iKihCg4g2jZ7SBe5wyUbXn2Hc2gJGBAHdm3ia8LhXFr1S7m",
  "key16": "22paxqvpbcqxu2LwWt8f8xGGhqdXzPNbbfdr9hQ5vkkxNoRfFTpZH6YKNpeSRdQjyMnk5JC2u4tSSKyX5WYaCUfC",
  "key17": "3ErVs6uix6M1JNDCkeQpXUzqpMEyVG2Lhq3izQRbdc2dFXGzivoeZ6tWkBeug7eNWt9kSggxM3figC2YV9CvgNr",
  "key18": "4oXr9JMu6efQAcYWTrVVux71MqynvFbKbysorFhNpqTaYh66LBcouTWUpjxpJ7VSCoeCMwYrprqZ7qP9TaRNziih",
  "key19": "3S1a9izQ7o1QQQcMccUfezME52zWoAQScyaCMNgeuWYxLzeDmARMXumhxyWpUMNWDY2fpyh9NEbwaQAKsN6BTxGL",
  "key20": "5vendj9LihXFbHuBiviDmHyxtsBv2iCq6yNnE9G8QZhoH1xsnHHqpwdLyNwU6M1Nf9EFk67Ro6H1iER9tERFdfuw",
  "key21": "3BrRu9uxM9C1pJTbG9dFSCw2cGBaQsWXL7aQQoK8r4YFBJQz7exjp959FZf4R8KSdVxf8BM3inetcS7rN2a72MAo",
  "key22": "2X9Xec5ML18WHMq3fS8AtabavagWWaW39mbpQ4AhGuxrRKzdANDouUhnmsdVpfsXQwBiPyhVPYSQ51J3CXe6e4Gq",
  "key23": "PaQ4T2HDKwmPyH1ZthHrmuT8Y2vj4ng3nexnHdiRZoUPr525YysuQqz78C2TT1AciiU3oGboVs8PxjtDWiAQw6s",
  "key24": "PztbRd5yfXjactGghXqmjCSyGrtYH4yZtVunv4wbnnLRCQQK14qAcjRgZSqLEi9sDfG5KejzDSaGkmE4LVFoQgp",
  "key25": "4e1dbDPcetcKNvLiFjU8wYYSzZ38Db47CP5VhzgRSDx2vb8Qzm81NDWaGiG66FKwx9ppQoQpouSSMpMNG7n3WyVS",
  "key26": "5zbvGe5ePc3YqWTh8Bm534ZnNYeYc23r9nPSrQpddWK14YoCaRc1hjmqZYwWN3Pwq6y7wdv9uwYGMqUyBwyKqGtR",
  "key27": "481jnrpY2XPxZqj28tn6fDEQ8GHicPDr75VjT6U3JkwiRALUynxFRo7RzhpjznoAFFaKd3GED8Boqqtr6RgjL7ej",
  "key28": "44D71eUBExT4qBbYLq9bhwkst8iXEQLPWNq484wDnB7sE4RCAG9SnybCHGb2uvs7UA6EoEfny2ctmt9sFxnBw5gA",
  "key29": "2eiteEfjBjAov38Xj2iYkeFgRvHMeertKJbb8tpDvdwE2FgvpsURhs4ocoFvraphPMUZzyMSZJ5cKSTQvDuYBqft",
  "key30": "2yd9HUx4aYviXv6cURyZiQEsLf1qq7QCWHyefmnANWMm3biqoNeSxi5rpLMTQwcnrxLrdRCnbpzm3X73fppKtTzd",
  "key31": "2pLcwHKvfRHqLVgPS7gJzKQyqp7PXcMuEctcR6Te7V4RbZmAvKrzuivUxPZwFhpCDci7tyv1Urzrp37s1GXZpxAS",
  "key32": "4inKF1z23siWGdiL3Put2ZX3Yj4HXxnLhunmY8XZ3AvH49ie4sjfcsBBSMaF2KrzSMJAfyUmmeJnssQLmy5jFiyC",
  "key33": "4i7GCgeLQ9Ybj9fXuE96vo3p7cCtgHLjC3ghw7i5Xx6w9JrGWmLapPTwRymZZTEhDJVEe2TN6aKpKyWDSgXyvQta",
  "key34": "383Gmr8B23wrMR8mgqs8WVHXcYMwZ8Sw6Jfbk665g6AKUwKVDkwzBvazycsBWfR69cvJBexJcvUXiWxsngSFjFeH",
  "key35": "5uPBzzrQqUbuMJwJ2EqWzgqWfrTjt2vgWfKnnFPycQjqMmM191CVtA2h3r5FsRYRvuiPNQcqoGSaFZsu48gBsbTm",
  "key36": "5thrrVpSJWEynEKTigPtm4jj1HeGCXvVoefgR1XPgBER5qudvrmmEVLPjSjFApTkxdiepPtUwaAh7A6DB2peokSB",
  "key37": "5MXkmroUHXfb4nSVmWZC7N886pZsScfc8XWhSJFrNqbWb8DNBVrvZXwWdHxAnqfndD51rwejqUJjZSigZHGwuoq3",
  "key38": "D8jksZ2usfzZ736X6EtFcG1bcLgrsjxmmZ5P9hrAqoxRNtrLjNi5KUfmBgYmYUQ3JaKjQwmd8gW5V4zvwYkYNLY",
  "key39": "2zHMVbqx3Pb39bCWTHz8zSRba6W6afq7WiBqkoXcEFgNVcMoJUvniTPVCUqdXbqkTPx77Tn4XzQ5kphWJvjc4Ugz",
  "key40": "4kG9gpZMU3UuHVpPAoVtQi1v6zZKwEasSkazJ8H1JK92aBdLtc8XZRbrV8zGY7fmJEdXNhyULHUHTM3PfdXLXBC7",
  "key41": "SCBT81GUyT5wpWjSmALJZgtWgVveAJgyyAYe8H4NX6NfZrjEYoEmSiWvuiYoAoVLQFdrUuaBCXvZ7uLVEka9Zk8",
  "key42": "5WJkfvHCutj9nWHoXCrzViipuWpNca2BE3dtEg2qUqq4CNWW9CpotDf8f6RdxRGwVYqsb1UWHiqLKdowFdgv3kTm",
  "key43": "i4RZwhYaB6rMMEUeBufSnUARAQ9UPVFN5cqQrX1YQ5SfshdJDnqm9VrQfzJpNKQxZCMoeb6Pt3tAer9avVNZe3g",
  "key44": "3oveMoQvNWQ4Q2Pa6DSgmBYXbs2TsSCjFiGkUaTEdT9U2GA7SDj8U5CA6xtirWuGPtNLPyxxbnFVLwJ6tVzNL65T",
  "key45": "3YeerWGgi1yi4FcyhunjA5T1t8eenB7bj8HnhhBSDvSfLQ28bxcoZdpa1iUkA1dGLTbNAQqRrCbXSHC2CboWRrAw"
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
