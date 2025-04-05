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
    "4vYfK3xMZX7ALnArnE5i6DXVtup7grB3FpHU2nZuSeWJwHuZZ8L6Hy8ufSsRso2rHntZ6DxQ4JugE11iuBZ6Jjoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nb13aAt7Lk1xtKFE6w7yA8agK25oUKasfVJoJYzy4La59hAcVyMBY8VitemKN9vJAYodYPgWoukTdqk96kbPret",
  "key1": "3Xt9x9crXtn2dDvXM9ZW68JS9JcSCYJTVirJeBJh8GQXUpXdza9UmD3Jx8fvHZR8e88BZwDLLbgo99gdJ5Rp6zgi",
  "key2": "2tYBsBZeS9EkWD7nNtgFY274XB1kYw1jShWEoz9uskgBzGvKmSRmJaCkFr6s6GZzMw77x7uCJHkUfaFF2jfeL9tG",
  "key3": "3RaAt6wACyJtC5NEjGXNMq7DjQajDBjNgbmauXmthFsfxFEpU2Dyx77jyQhjpxyWYdZZX1vzUD1DSjMycH2mD6Vq",
  "key4": "4FsZj2ymdfiCs2SxoaKBiqhxNHRaThN5rtDDvn8iWthTLV5dd6rmmgRfAocdk7sxk3BeFCS6Aq7AxsX8vA9uSFkx",
  "key5": "2WEgG2e91rnw7hYE2sdXFXfufhLUS4uCrXpDMk8rf4rgUbWN3m51j9ixcxWiiSDLe9bPkZDcQLoMhL5mtLaRXD8E",
  "key6": "3gdg1kM6JjUPHzwkktDWS3nuHsCnxYkLZonH4vfNhhVd2aboZTnXJGCfLE1xNAWENz7Dwy6TwLai5LmF66E7P6T5",
  "key7": "34Yyzt2udWK7yK2PfMAGhJ3b62QD2TEubpyHADiAWHSzs9qmyjYwpzZSHofvS4VUY3YG4Qi76wckxTB1ENny2Dxh",
  "key8": "3sjXPuGG64yKA9tZAPZFKzGms9ujnKJabf66v7NDD9HY7ZVH1YYPFRADYt9Q4WtPKCuAFLaJVzaDoxBvPVWgkPzu",
  "key9": "3fDDDLAUJgPrNjrmWwaDvQwtPtqYYm35V81j9uRp73usjka62QNCRAYGeQjMew9gnTKCSQ29YBrSf3n44Xn2kusC",
  "key10": "3juZezNphQ5v9WfurXXKzJSUMbMkD8jubS31XrHAsQehAFoNWR34yQLNLZfXAVfT1g5d6QyGMSQw2fFKkKYYS8Hc",
  "key11": "3yPmyQzhQDsRU1VGy2RbvVqaES9MCQyvcJt4CkLHCW8jU7T6jQJQw98Ew7s223QLoURi7xWqRwwJUEgnKsiJMn4m",
  "key12": "48CbwXpys7tw4zfPseRGZZEyzwBvtiMzD1yBLhA7ng4gAfTApqqUz27YZ2oieus1h7LVmWJLBN3FTvrNExu2TU8J",
  "key13": "4fCKyt47rpheVj85NHHRpTbVXQE2KB2cvsGXYGCMxsnbaLsgSdWQFDfWKamDmDH3GZVdpow16t9Xwn5jfDtnQnAP",
  "key14": "5L2naAZZpRa79upHpoeQrgW2NWpaKm6nAuCuhXn5WYxqDSr8iVTpi5X2gnLWYCcNp99bAZXLMAMH9zezuKLqcZmW",
  "key15": "3T47KwaHn8si76S4ze3gdPzZ6aTumT7FU3KjuLMGqrESxFqYqVTAcArM9HcetU534rsXMRRxdG8fvwYJc9hzkrFa",
  "key16": "CeXbewshad6JZPx5AL1cJFUCtsP4LDZJDAKvsi4oTqTemaAEcCDwRuW5vCTZkWusmycQfywXzjHeB2yDjoQcWCb",
  "key17": "4HvUFApThU6T4GTYYJ4FbUrKbbo3dm7PqP11xdAJpgMhhihGymXFoxdrFP1cy5kqzzcWEz2PBueYdhBgwJHy8p29",
  "key18": "346sjxxwbkYF6vuGo9GgfHe4Fcan6wCepNFuoHdThtroztmzqTbGWeeZFiA5oYvjWQZPbYktLvEQaMoDqxotW3ba",
  "key19": "5QLWVoMAxngoD6RUC9mDQdChpQuRLsLnfU47HzBUpUMdAsWia83TMsh8AmB2zMYpGJ63sSwFkGesgoPfSLPEZZXe",
  "key20": "3to1iLkyzgcVLw57XuEJs2u1qQy3j6YCA2YxxULJFWYDQ9T6Gk4A9FvfnNeCJUe4XEcvmkPmdPfxGi9QGWy87CcN",
  "key21": "2B4KCkHKD9vz86aUnpA83Z8aVbd31U5gd4Z1aEpaXpDaRCZ33o7GR5FkPFct96Y8vjUsbUw2ymSvzfpHV1hsfBKv",
  "key22": "2fedBPDdMT9S5i1jjBRwS1Le7F5cCjsMYPeic9Gs9WQ9Cd6ZLMgXSvkbRfRvuke4KGydBpefn16JAaqTvG5LwcCZ",
  "key23": "ixC6M6QX2TLWb4JwtMZrTyeCLgtR6UcSA1RwHjx2kzmbx9uHuBGGmajxYDJGLYmvkCGZam7mHG2edyBTFgoTDLU",
  "key24": "teL6k9Z1enD5t1bST7u6JTYLuFHFEH6FJyJcBMqVNZbCKQh6RzkQASnCiC59RMbfQzZ5bFsC1herukuLBLXYhnF",
  "key25": "4N2P8u9XQTpB6EU2JxumSaerGJzXfPb6jWL3E6ay9mP5RBPtK7sNH6He8jVdgEQghLD3QQw9aSE6bX2p4wnXgY4G",
  "key26": "477T9adNWqA2ttxFyBykghkdByzCZKwLoJsPNNwxuFiJan29vdqdp2aXBv4HcrXxmTcyQ9g5RwJWB3wgnCYkmpui",
  "key27": "es2amDnKCxDPbubhudRDuJ4aoBJx6bgUtyXTyFvUprXQ3xCLCMqFjBBLd4Wmby1z1wDj1tzDSD7qJ5q2vhyoHfz",
  "key28": "2intqYBTaYr5BuNkaoQYsAQupwV5s6zKSb2QP3KdVYaeLYjLmcJfxAvKz686XMaRvH3zvVimHFXrsyZ9Axw4daLQ",
  "key29": "47MGAq3tpWc2fd7geqCc7HEsgE3FLwesZTHGM8ruaFzxXGRrHNnmR4ezzdyywd9VomMDFdchaPUh7Qv8r599qXRi",
  "key30": "3d1aSYCKu1judYogQitkZu1khudYTGiAoKwrpohATPCYDSg1qiqo5DCxs8yMUHiQ4V9hYqsDNVycms69X5UMdsoJ",
  "key31": "4LyRz7NAonxkq2cUKQ4FDCSot3pmhDqxMcSg4E64CigkyLkFbAX3RLQweUbG7SFBNGR9GgHy4iZ2YvMpppVCio3D",
  "key32": "3ChNxoNVenqWCn9QffK9zh32mGRKe4oh4Gfjt9vYj543jfuWS7YcSJaCvFgtvcNJBPyPvDnn8yAiBjMn9thXNew6",
  "key33": "2KSDdo4ULV5htLeBgDFM3Y1R72zcRpXCjTxQTcEeXt4atRKH829Jfp8dNNsgYhQWnV9U7hcCkMMfvJH1kZtrnyPT",
  "key34": "3WUZLYGkcDWcLvQusRh99PYBakC9Lsomrw8zhknSSWLt1RBTnApvNw4y8btaePipj6SXcAMyc74Syzg4CbMrYAkk",
  "key35": "4uLu45B22pTYs7FR3VwJfzmdvXp9YFWEuMPcu7hN6TC497SbjEuSQ1hRnuGj6y23QZesFGYGp5g2CUbx5JiWn9S5",
  "key36": "yYx4uyUrMsHMtirmgaar2ifBojZGov3cEwBLrqkkvNJ49BWw7ERfvX2iAsFoNC8Ngg1oufqPv7n6RgVrxPYUnsX",
  "key37": "1LaoPx3CDaUcvdXvNPkS4FKpDM4MVPgijLX8b4Zs7JBNDJEJYonHpm34srdVDshkfeqLLtio3GT1zAsQ1UFBpu3",
  "key38": "4hTjSNRQC5hCibdcqyo4G2axdoWbhTHu8FfKFwzE9LUJ8pbrpfhyhz8TYhR37qH1FMzyD44jzJS5gmvveaxR8jPe",
  "key39": "WNRpkNPDnr4pU35N8Xxr2DRhCKNCtNSZ1cjuY1do7xfiovn4AVomUuo6RELhzNJH1toLxkj5pMfmCGMQ1EkVTuQ",
  "key40": "2FNLG7dcFtnqyRG3RBx3optwimLhFPAyf5ruAyBTvg1EZaTd1P8PmMtiqE8WHSioZDejqfshQh5ebbYqm2GPjbtC",
  "key41": "2rhNh8wBmgPGL3Y2ng8M7vzN7mkqAbx7919Yp9kgsCA3dJ4yphof2b1gDgYmaACKcyz6dQbPDfgHAhETMZxAbjQn",
  "key42": "67SvXfQSTTzT61LrCtJgACq64HLzAiUxRFaXy5XnCKadFhGyQcKzKgNn9RCFzdtvBds5wPfvYniD5HQy37PMfoNw",
  "key43": "3jS8pAvrxdsCDaP4XGyqXhvzyEq5xDpURjzR2DmyJjYDAWsyTS6LGySNAXpRXywZi52c3He6V9dA3wZpDBpdQVyE",
  "key44": "4QAZgDCtWKtrp3YEW456GVCU4RFj3Sc5L5RM9kNx5pyz1RaRcFTRttBPZwnzEWEqu6dUZa4YFMxnC4HtzzgjenJc"
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
