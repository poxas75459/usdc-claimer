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
    "4aGoS9kY62kbK4Hun5agXfojgDhdWswLrqytwonv59QDviKXGEr1bM2wtDVDowMqSJ5mmEkL4m1HZbKqBKQzARVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5936ooHdaURsgJRxgESZ9v5jsEuFyjPS9WCbTiR6ZZw7w1hsJsntdkTnfFxRgRAxUi1qFjenS2xZtobUnNQPGm2P",
  "key1": "XThgen23Csqqm8gohfAY7QrK9m31qngM671UC35PjTWc43Caiazf91zRWFG8RCCUmm17Kf3brt2KFRtH6XgJ8DN",
  "key2": "4KtqeUzZSauX37mhMRYfxD3ZXopMGjcKWZsW17u5C2ydSk8aK5s1TDkX3FarxkRS4a8cMSaAotsD3pubxrbXt3hF",
  "key3": "281cJV71ALv17uhzS2FGEcA8ZdkNrZTJa2Uy6bBMFog86yqykbzNcuWUR3gz7FddQkdTctCGfNKdkpRgGANWsUYV",
  "key4": "2cNysWnXQK2JmjiDrgvwZHf1HwqATwZWc22X7PugUbUXD6gNEAjKmf1YwwDGm9SHRoVYqk1oif1zETNQPUHYbREZ",
  "key5": "3YErih2WrgZr8Rb4oqPuVvVkUppJ585dAUwHoABQHVhQZU77trjmQh6fKPuWSr1DJ8o3XBTcXQPLur8sp5XftoxV",
  "key6": "5Rkmp4r144V9ffvCfBfwJMSamZSHmCn7nkvEZobWRSLktkRkJToHdF14CgQKcbpNbjxp4mnPe3p59SY4xAN67Z84",
  "key7": "1taLEhvVDmDpKYMQXYmEmrw5m1hT3c8WfhBP9WA5W5btgNCJjTs3VrBpYniPaud5Wz7fbYdUnQRz7QSA1UEBo4d",
  "key8": "3mtUJTDeLBJeMkGS37NDXaBA1d7rTnP7GGnMrn4uymQ9fLZd3W74YTtuXRXjg8SWmpV6DxwpqixLfUCnrwjZPLWS",
  "key9": "2uLXQAKZL1cRndLFgmimd3sLWCaAALeHvMvMSaHqA2gXJWVSb2pDE2rQrxJrT6BvNke1ZE693TmDpNTQ1XCfR2mv",
  "key10": "3Y51GHckoaQAjqLe2bt9TcYP98i4xjGQ7RV18bDmKqEKbbJpBFzbN4iQYVhpXHoKiTMGn9LmtMn6GdTE8xA7QCqK",
  "key11": "377Bpe5SiS6cqQ74rc3vsV4NCx4cNpDt5SF85GRDXN8o3i3UbaTcynJ2o5exMnexo1uPnCQrNvcDVCjaKAgT2MDQ",
  "key12": "zFT6Qa6ioHUnkagNPAu17WEKeTC7CCo6Tu2SqHh17HircbmceGgfyryoJKAXutP2RRYAqiQiHHB1cZ2bricotx7",
  "key13": "mNBdcNCY2jRApzrRnf5bFS26T4ALkY13WUYmJ2JAKSQ1APQMe87evYT6n4sLYtA7YGRLT1cnqdkNwSheao3eJ7b",
  "key14": "5AMPLeWYq1zhHZurxuuBLzMRcjfwzbfNfSQLRdaGAJDXMBGPeXBUCTk6Bbba6NjuG4QLaSVMg5BfYyDgkeEu5aGz",
  "key15": "3KfpVisyRHzU1rvv3bdAMgcXykP6CqsH2qnvqGyeXXg3Td4oSQCdbpdbtVUz8tcU1Wfcg94xF2LCc4RfX35pkyao",
  "key16": "3EAbnay2bJoSPSZazcyJyCXwUtLtopPhakZuNsp2MzNQJUiMhVJJrQLtioPLFZNvps7uwnREf9X9MiJprwWGS9iN",
  "key17": "27WtTi193RdKHDuczXhg4pMG5Ppz6Juxxt3X7W8m4s2UkAB8xxo22umtCNQtjgduBLsMNJ6LeYZKTsq9eJHCT38x",
  "key18": "2DPZztVD7Cg45xTWDnYQRQVeGU4Fh11T5LfrV5vBVXA9YURHnB2p2KdXb45apaAVxU3GkoSfwXgsfcK3mFBR7Uep",
  "key19": "4q4JPrh5uazgojQvRrgCpQU76j8XbvWK5kbCMYpwEG9BGeTJRG99Ue9uBi4xxEs3S7oMAhz1AKnQ5xXTogQHhBBj",
  "key20": "5TzKNccvVhnGgLg1sMAQhWvhZMKEdJJ5mZNnfgriiXgfEFo5KtEGGhGL9WeYtZTy9dKMF9Q9Ls55BuqEhaAqbc1Q",
  "key21": "5bGjSZttD73DfvSZXTCdYT9bRBEb5aeFBwEHhtgGzGZf5HBVFSkrbvpwY4JZK8SdzMexAyySncB7EbEpRREDMxjJ",
  "key22": "9nyDYHGbEmBj2KJXYx9BDuRjHzfPLULenHad5NhY6ZAspF6EqRaCZbzVmftRBgLgJ72gUxAR2DdCP2ab2cTyvd6",
  "key23": "3k8payMm1DwHLZqbezhqciUmnBjGs8Un1ZAXHhZKmYBd7hd9EJPji8McajvHQEf7PrR6DFiZ3Cpsr5mvHGzWeMvM",
  "key24": "5GfgNYLRaEgZ8rSGHZy6pDpXz18uqvwPUa3DD5JK3Fi63attZ1YD82dPesWciY58wPqrLEoiAJra8BhGWXULGD3D",
  "key25": "4eurqQRCKn7jgRQPmtB66sF5Qzjx4jh84fXuzh9J6QCWVcv5TgHHq8UskHbvqH77Db4C4JhCEAntgD7emwiqzFoa",
  "key26": "4eNyVAqTkFpNmhQrdgp9VbUakp9wNvVYVfU1wEaieChW51VPohMxfGQt7sHLXyFGQ7fwredTrvknZmS3XGFGwdQp",
  "key27": "2RrXTJfRjwBXjVHCzuL4Y8DiBzfAxnEvYMsT4Y98QGc4YdHUGpWQnEJvwCNxXzV9UfhatFLW1Q28kSZPQTMRKSTC",
  "key28": "5Di9CV794VTZZ73jukbKwHunn7nmURVUjRBz3tXd7SeAqVgiRvowqHeeCus9RNgdAusfL1Ur2BX14zgot7eTTmDn",
  "key29": "2zBMxVDsgVSS3veFSwGdN5vqGRxMBQsf9U3ZwH7fU5DdRxuctC6U9zuwKBtxp8k7euHYi4EdMc9xWv8sSLdCBH3d",
  "key30": "7jh6ztsYLcAX8Zb3dwqYZp3NYLR9ydYhexCLDHcbgCqzPAEc4PmnsYmejSF1a5MiUxssHT2FPombXNRhfauKK85",
  "key31": "58CbVxYsnHUCae5hHTAvGWcHpkuHrK6RUot9Jne22XtqF6PkJ9GH1P6nwcZYXzvT7xLoyLzUacjJJ3rheU1od3Qz",
  "key32": "NnP6nKSoCR7xUxj1V6r6Qbo74j84CJDfrwyG3gs4Ua9Wm2is9hjPNvDedcGRheRuXWwpE9tT5fk5r1fiNGwtajj"
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
