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
    "37JUJa66zNq24WC3fDkcoQwrQaFd7XNSyFoB8qEoGGed7g37e71JWY9hgDmv6Z7RwkXdDYGcznWjAvcQKFyg9Qv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgUSrXBbFGEn8E3kZsPuLbVUEgbYX3279FhpdtV6dFszxiKMvrzzGDtak9feALEfbfSTs946bGV3EfQS2HXLV8Q",
  "key1": "2HQbYQn3wsg8uXADDTpK2chcgZCioGv9SKYUEwnWZZQCw9xPFH8uVsdjWAgvyEbceLkazu4wmcAt2MdEPfNmHyzg",
  "key2": "2tbSR9qGkSLc2VQvg3Sng6dRFgRz6GJk2dHAHHqJjSUJm5tYsCRRkaq79zi5EsXpr7GVdyupwPf9kqDuiNozWfZs",
  "key3": "2MYZSApJFMN4RwByiErez6M7Yt7gHdTHpeo8Ft9Ea6GZ6b6rYNJAHeMExCCJoiVpkNHsgdzkBuj3UK665biDAx9B",
  "key4": "DrnGvGTtZVp4app4XeLfuY4ePDsUSrkLMvYMJ6FVfZbNBXyAVoHjazAmUWo8KdpjQmN8GrA8pCstwiWuFA5aeZf",
  "key5": "42JzUWi4Ay34iEcYRPTq78avE4umywzT35JJBASxLmd87QiUFwSMxTtbXQAxubBKM9yU2aDm9ofqnUjRt9ZgwvgP",
  "key6": "FWGU1cRjzM3DTrAPJDZNxriwnXNx4SEdg59gWQ5PRcXj7QmwEy2bM7RahtwYJpqVkGwcBBkVM9t3fZG8j5QVF1r",
  "key7": "2CW9UmcJXC6B6NgjcjXzPYTbTDcaE5go2pcdBf5Q8EgcEKkHHMnHdWS3TPxLbvq8ozJL2PEMrZTdAu99Uk71jqCP",
  "key8": "GqxXN6idTGxLRbvPBrpZ38hBc1MnQz6LjdwciBboQM55CGDSrbPw4vbCDk9k8RqZHrpuZcgbodgm76dne3HQSZv",
  "key9": "3hyx4rCG1H4vJdDj1G2SJgHpNFziz8zmkmpWGRH79K8RRUjSKqWPnKX7M2YowXT7EgNb3QMCcS3mBAU3XvYDn8Ef",
  "key10": "4wmwAHtrE2QaPpTvYVvHuRuwi55cLGzr1n1gYR1fQbJ9u1tUsqrMe3jVgQAC7X3L9ExKSJBKsZvJnNy991KLbfT7",
  "key11": "41UpTzffwq5Ex2RmjxdMBEdyWw7Co7E16mCjNKkHMaLxypk6Nskar8c1RBB4SpsJwdo1z63GAbD4jdds6jqpMA4p",
  "key12": "Ka2iM3HCwKp9d1C6ANbvNaphhHLoUXwcyeTCoCjnqsc5TSkjsRp3AcCiWzpsiVpxsbSiyEcuFDjyy7nohEWXXmT",
  "key13": "3vkEJ6PDZ5dA7ZsWxRr6hrm7AG3jkc8TbPEVdyhMoG3e3bZ4egdEkaFagMFgS4Qgixj6oPSa7SNxwCn1CgPp6o6w",
  "key14": "2eZ9RmjmKni4fzMbshPNEiVa6zeuAhjLEtJUiNd8RXNZdvJUiy3dcfxD4ZmxttRKWTeGCsDtew8LPQsZPwxdMCaM",
  "key15": "g6sYtep2rcLkAFPTaK6KVHAdRkzShB6KXPAByVgP5yuttCX8hy293zPZNtuEDYbP3aSQeP2VaBK1Tdims5ZDurX",
  "key16": "4SxdwhCmLwXA62VPLUwoHcDv6tmKnyHmbYHVGgQquJXEhUq1NAheRErM1bQG3Dajptr2DmFREgoZDC65oKEKzMD4",
  "key17": "5X85rzhauRdocAaT8CgnuoKqHFTtW46iAzQASFGGUjMdWHHwFR8tBToXbdjcs12icBK3DDD796TwQ233yY5wejak",
  "key18": "51qQu8qRVWGcaQBqCS73YUZiVDTsNbrE5sVtLDDZfZXPUbg3bFwJKkLSxd9uVwMnGBBoYbQTMEn5TDJvUXksBFcG",
  "key19": "5vdk8oABiV3bMJ3Jmzjevo3UyWafxf9m9YyfMrj2TJCDM2mFLis3X7Ce6VCVwd8vAMSno6uhv4aH5yQC8RyZERLe",
  "key20": "D6EMxx4JMn3NRr9j1DmKCqWpnQGUskM8YuCvZb6Hui95S3pZtLW9hT5T4cgavdYaohpVf4LMLmyPBAk4xDzJ6Kh",
  "key21": "4mc3zZYwvv8jipv1gX8LbxPdYpmgXgG7j57qed3PUQpmWCXngWRsMGeaTuhbEqzQWBiLhMXPcNgHTZN6xfkQ1NEC",
  "key22": "4suKvUNbpqyFvBrLAt81TfmkeMKpDXQCPbwwZbaQ9udxXBKBsya6oSo8atUG4g4HmPTpyRrWyCcVKnXcmqCwrq1G",
  "key23": "41HFEikZmzvp1p4ZSUVW5LA4V4JktjU6goNVhddZvySW6oqcXnjuyhobfa8jm7ersAgtKZtfPbtE4bqDtFs7baEk",
  "key24": "2vY33UWju5Xke4B7MX5jBjNatCNtxhEuWp3YW7yXJokhAJGwXQ2KuHqJUHvHiUjvRJRC8RHJZ9hZVuDtTp4CgWvG",
  "key25": "5ttWXpCN8CHGSzE9PGja74xSy14QRGF6qLXS3qXgM8YZwC7Ed8rVzbHQfgYzs6qnQuJk8Yd15JQiqKBxUXJm7P9H",
  "key26": "1GeZV9Toaj1cuRoD4yNwHwok8s498j8RiDWMuhpD6Edd5rGmkX2bnFRcorj91rWvf6qbj2tDbFz3EbWNgk5m7NR",
  "key27": "5LMBxprZZjgHERbWWrvHbECxyH6KnPPiLUio4ZpXY82pRpfncN1QreJZnR31oPUQKSB4vHAso5C11KwWdDZvWmGP",
  "key28": "F8639pJBPUywEZ5bZGfz26ayNR5eDd86eJt2UWdh77S4JkwhovNXhF5cSyheed4kZkAdvBi2QsFaBLjXhRcm3UR",
  "key29": "4dRy65JTNRBxwDBc4wRK6rESNgAYLUZdbncfG9ypGjnodnTPkpNGbKRSD2Y3MT3HL7PcEemr3CpUR2ZFaj23UZtA",
  "key30": "61hwVvuzR3dnq6HuECDRfmCaRoaH8pbZGSneP5nQT12BdiTRQeSepA7YkdUYoY45WY1K94WJe7Pkjg9ZDsfmYzLb",
  "key31": "pt2RuHq284DxdwWjKYsWgWGLn3ZwP9GkzSJJx9sw1nWJgxF6peBW9o5f2ZYrYm1ubcTBTzZU9tsRfx93beKTyDx",
  "key32": "5Z11Lnyu7VpyUUyjFz9ct8jtfieYrWK5oKFatpbmbRGctmTGaztbQMb95EzJnEq5uHNVwvjqb6cPDvdyyFWWQDng",
  "key33": "4cB6EVDmWzaCapDau9fE7giZqzscyYjsbRDKF5CBzMW2kbN62QidorHfzjMqiN5SPYXBWuqbMPUWum3F8DbXZ5yD",
  "key34": "3Pva7UVtZwNj8atfrv7GiFoAE6STTA1ZZorLHqCKTw55iWtMnm7r9qm6fJZSsH7Ctz84GbeXi2GruLquniDrhmTq",
  "key35": "4feQ75VX68wpN3zmDxpWGr5vdndG5TgoC3hdYPozgY9DkoNKNPuhtN7BHMTo8AFjDVn4r2h9jzuTGoEeuPA3ya6v",
  "key36": "5YdpcNTMmQxfhYwR7qQeCLS94amV2ZKGw9nTetGWjmn1QKFoNK5864RHAEMYojW2onjtej6CjkYFTnC8qEhThCfW"
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
