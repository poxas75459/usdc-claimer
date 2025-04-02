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
    "3GQefWt7c7tufXpCB6NFpPCzpTa2YGGg457Ri7fcKXmfGoLEHxvJw84ezTPKHLQKd7LNHW1JMy6eyHGWraxeaudp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bb6szoaC1hbNiM6Gpgf19p5pWeZQgjMi1VUwfHFPzYGF5KT1ZHe7ZG8X4176nzFv1QgqFVAxNdipgJ9QNefUhCp",
  "key1": "5XGxDeNjDrMDwpd1S8GSa7UFUVMrytA22odQxmNRe2QmuzwUKo1EeYFdmndMYjYR7YC3yicRTSVu5Xh4agjQXz1D",
  "key2": "5JWNxQrGCoSfFe7Wt8zVLk7qyvdbSBFbsQvth5qMxtxv8NPRC7oVRwWdwmRPRSUsTzstKM3nFcDcxhu1KU7VF4GF",
  "key3": "5zuMuJynDGnWix6bYaUXmL8Dz1Pr76Vjr5F28MiSUPNzbvKMtEKNXWb47Kk4ebHQ8nonSTPuW12Got4M8mAS61a4",
  "key4": "4uK4js94cZifXCLuDZGxxRXNunjmyu2wBFbbiioPLih9yM2g59vUvyCvGavYtASfDnPrg7X21nfAyLGjPkGe7Mqu",
  "key5": "5Q4wqdbWNAYbHe5xiiKeSA2pqHfFU7TYErARgCy3AvBveJwiMSFvg2AfZ1H4go3ztYFr6nnHsU4cTcKJAHWftnVU",
  "key6": "42vVLj1rcE7736SwWnnj35ZYkPWbcJhzSKGw8NR5EmJ9UAFsf5P75B5ab38z1g6CRwD5zx9535d12bfmg5qcpue3",
  "key7": "4ATpQkqbtwcnViqFs3x3dcHqzaHnJVptzZypjmo7FE5CmBakWYHVL9nCVPNG7AkAoSEVTufFfnfc4GAZE3D58wqA",
  "key8": "4w5Ey61zk9AyoTYcC5TFCohiQocv7UZXQQieHRtzH3jK5ej5gwh3xuhz4nSq9E1i5cXCYosUQ4oPsiDqywJtvEp4",
  "key9": "2js6cZJVGijZE4GXFvsfSwhBZNHdfBvEvSEktE5F2q2LNjTK5v3cgpM8vcNBgMPGEwDoskGuFMH4PW2uoVeJeP6o",
  "key10": "4bRJCt5TYz7S6XeXfsFVzcGbYcL9tRUqwGENGd8Kxhk4Lujroj7ZgFmq5htZgJaZXFPMzPrpF6JvfJ6Cf3KWbFrC",
  "key11": "2Turx6RBaXruWrd2GYGmJmb7Aw8NTkYW9LHcWee3NDKxvMA2mFg6Qafyry1Eqs3CFokmZU2yF9wxMPh7RXXfJrmF",
  "key12": "8uzAEHQJsxb8FDzrhLuLKqjzUGVRtsnY8maKdhXZGocwd2PB7AQVVo5o9SvBfGutokqFiM8NirtFVcMNiL7NxA5",
  "key13": "3PRiBvLw5jVKtvtXx1EPAZMi2mdax1wWdYLwtdmymAfWEFmZvY6iFQtZmYK16naxzSXJUbhi5rPcmViPekWFFTTR",
  "key14": "65CNm2FumDHHLAwUBR7agp7CzvVuGFWMvnXc4D4VbW9Pf8iZXj9RTDSEHXk8RrfuLVYJX4LzjRyMnKYQmUnbY4fd",
  "key15": "47nQwu3iT9e7aczENH62vTx82dPdiZ7wgxiAcGQgAaQt5RumuLNvbsHgf6Ydmk1YyuJ6GdpER84bjadz2V3F7Fqf",
  "key16": "dZJq48bDosr3XwTrryYrPUoFuDbY554BxWzxxzz6Qb9bQ3QMe9eeAcXepBzT8ZjU1UqpdZZbigxPNQrCCEBsmcm",
  "key17": "4RhKf6jbp5nGGQAbYYvzkpJuoCcsMeR3H7C3bYXp598xGAnpqcaBb6ieBY2mm6St9tTwAufrYjPUNwpvLFeTiQCH",
  "key18": "48bzW7tpD8NNni4Eh98tmFAHQ46B1z6pLEeVxkFkNYhpfka59tv9VUpM8Fik6ASMhMMT2tUKaMjCwUb2KKQnMrWE",
  "key19": "rn9T4vZ9iwidgLn39FGTYJNvtQgKBFkNeJT2BQHbdXhBaZcBd8vdaHMef93C2UPuvP5beLqEp6CWAk7Mu7Ghsxx",
  "key20": "59VAndHe4RBLHQYBDaAAuxRf9qG8Xg1DW6h1XS394mPuMtKDRnH85z2KGWJoNhmK9TJnT1i66AGAB1nyDtsmvYSs",
  "key21": "2bGvPFdyYAZZQNkG6jqsTeWQiKxADBRtLTXvtkkmrNKpGVNcza1FtRnoL8XXV5YC32GDwzWMQajieMkjeb6B7tjT",
  "key22": "n7yGjW3K2TvT3fhXtTeY8H3JMUWhWykZ99PscWQz2HKcx2eCuRHRJbKgk4FHo1s9Zo2Z96JHG4P2iteMjLHQD87",
  "key23": "p1sWcu8Zxp6jxKZWRDomCgMH2uRudUMnxUBh42pGL9zBTbDUJ48P9RvHHBodyUubbe3fJ8My6AP5pkuvwNHbNop",
  "key24": "4DCHnXqrigVdRShGHmsrkpEBgXGy7E6tYp9CarqKzUBPh2Vq9yevJFusqJL9qyY79V4EYHcuV8PphA1N5wX1UNDm",
  "key25": "2Vab1bJJe9mCAYu7RcfM31iBRFk5efWbU2MipuicvcqSiYHKRn4hXkgUjWV78HUdwS8J9roKj4F6SkvP2YbPNAn1",
  "key26": "5KGbqNofdtwTGqyB4RjgentsVRqkQ4mCwZPWeRt89K4R5U9WP4quKu5ujSSim3CZNbxCbJkHUQVZ5W7KAE9hc7mi",
  "key27": "2Dt3LZyZfMSjyj5d6i4apeo7mZio8qxUEe7Vakkw3Bg3soDNtV9SDYrL716TTHVNWKDFUiwyD7PzsbWNibTt8b4P",
  "key28": "2w6fKtRCLniMHVWCjyXMBYQJCpD8z7HP3ZzK22WJv6MkJaTxaaui55pSamR8Fj87u8ctSpv1GGkZSPE4BgnHyhag",
  "key29": "KoEPbJMH4D5CcE53JEhtcaXYXNEBdoVYWxnXqw19zDfRvBUqJFxUWRCvXUskQsExNy5CnekSLSKSX9gzUyJaWXP",
  "key30": "3Wywr9gEpSxqH3DkUcTh61Ha4eSMNqzjoWef4gEqg9QDtM449HH1wHP1rHVnLW7a9sHnHhEHzGTVkqKZhSgBNh43",
  "key31": "5R4PuACcMGXFkusEo2bkhUfQSBeeqNYio7kjBhHSzWZb7oJNbzfXDdZ2RKJmdM4nsvBMh5XL522nXbhSva65wMGf",
  "key32": "3y2335UChWL8hahQxBwa6ST6k5enmLb7WfgMED8m4mkvp7BEY6bc4k9TvrFLggXBQSMAoVj58DWVWBiqZiA4aiKP",
  "key33": "2hprsijZNgDhULkAVpxsRxvBh1Uu4hPs5wKnJT24VvNGuptBi3MJDuQr8vnmhHrpYiipPbEuKPsBbKd9yHsey8W6",
  "key34": "5cUKYFhBFpFSnnsPrDkwy37puGCeKBHgmiv63MQshvRPXPn6jNVbYtGD3iTcwkHSV8MgkL4c7Wdh9FxvQuxQMgFx"
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
