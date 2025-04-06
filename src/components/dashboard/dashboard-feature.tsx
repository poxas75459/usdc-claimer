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
    "3QmRRvkL43jiPP6Ep6RVp6nRzuWNb7uz8nscgxijHTy9mUDwkT7n4okptnB2RssSYKKRAyf8CRGb5XcuCX96PkUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYThEXKhTbJ3pKLi3Ewb4P3Ybyv6sLREnCZHi143UKDdop3TiGagrnh5KqfvaoN6cEabTnDyCBhhxsGMckraMo7",
  "key1": "5SAJtWapZXwmQTWyqZ8yBSyYFmtFLrGDzu88AWoWh3DrpnE61ZEFdpoo5fiRxLnK8UU2Q1faHUPHCNvwmEfntSBb",
  "key2": "2JXM7xWQrT8cu6t9vWkono3fttwKAzLGgTyV4soHFwQ1XwWKzWLQa1XZ5YbjLDVx87cENgzDGeGV2y7EuNdcrY6F",
  "key3": "s2VGaxEjduRjmH7QJJVhnooiy1r1otUA1vU6Vxwrt6W3QtHVZERgwQgzGDv2yTh2vUouYTiEHCYRNcNt99kFT47",
  "key4": "RF5chjeuuBCwzHkWRqBfJQHjqNex9i7cEBcr3pJNq7cm9hyRzG3zbxYYeVxPwBPyfJEJ3Ssd39DuYV2FQwrY3Pa",
  "key5": "2P8BRyCUoWRf7sSMsRbAH4tXU6Wta47D2PUgeSMRPmXbzSu2SQs8BmVPg9i1GjecGYXRvqg9cptqVjXVJPEaTBo1",
  "key6": "3dmXPNvqDWFMnLjVp2KNrxCQpc1BVW6SsFQ2zDCMrSCEc85GAdxMsCCJnFrEA8mHAzErDfoGJMArB7KetKZ4QcP3",
  "key7": "2AjsiyjorDbUjGyFmwb2FZzJKCJ9VMYCminw2zzUex7ZHzZHLkcmYX85sXaejks3QrWw7oxRqdbHwKkgZfuAkusz",
  "key8": "5thFJaeRE8umY8JBJ3sKpkf2mJsF48D84tTtkwakP9yNxJcbtAQ4NHnXNRYzZri9XsZYgHbKXS9ktqu8EzAAYGyp",
  "key9": "2YQHHfmpFuk58MSorWwCnnTAttaZdntbRsZbDcZoMQAyC8wphvCvidiprT4bqoRaC6HGFGL7Q9wWJzrHytf7bjc7",
  "key10": "4w5V6qdb2V69jQwqNhxP3WfdNr9hPkEZasnRDenRugTsiq6GkEEEcVYZX3EQxQXULZXYwsF5X4ttU4BXMQVMCMxt",
  "key11": "43tKVNo9XiiSsMrqAjVursBeMpjkLNHhtC92ojFSw5dQvaH7feKDEgiXqGZZdKFsFYDvC6FzQBjvFpmj2Jm6yTsS",
  "key12": "2uDhsR4HqszwDGW63tMVk6RmanbEotJaPN1FL74WdPqwCHxehkP4KiLAqgZbQ22nkzpa2EQPrdUADnaroQvz8Rav",
  "key13": "2bLJ3ABd5jvrron7VFRvuu5X7kfywA64CwGPz2VUrqUNx5AnFej3nXRHPLBAkjTAZLC4yT4iSUWj4nftSUwXr5ks",
  "key14": "2SmW5qJCpJe9zoGSND7b8DaqsjCmWZmKiWmVHYM9xSvXzQyC54UyA1gGzU6GqLmKZAMYHM3FzFrhgRH9tcftCbUF",
  "key15": "4QbjZyFJxP9gmeEYxvfUPx2SkEBFnkupQoHq3Dch5nwHenp89x4MbkqtB2LYp7ovqxw73yqVmz1YP5YpBFfvMrRu",
  "key16": "5wz6PWs9EFYMvQ2gTiw8V63Gz3ZzMoFApDaxoSJm2NLkTGKpKGawCmtSLYtBPdAcVrZwdZkaRagTKgSiYyFCDptZ",
  "key17": "32YtHWAejzxB296EPTSe5WpEXVQ3qfCWhLXz38i4iwY47fSGA1bmY473DbtJHLnRUg9EiuCiwDh7rn4qUPWeV95a",
  "key18": "3KRDoffnGpttxbgJmtyxMKNtcbGL6Fp4pBb85d42JGnRzr1NGycumfCniT5E5Hena7JiVCcXgf5EUq5Q8rQBiJa1",
  "key19": "5E6GQkuiZyM49UzGRhF1otzoGuw89fU7G1afqkhJoVLopakGT3VGvpe2hLY8PFPhPVdFprYG2nSzoWEk7zfRL7vH",
  "key20": "2PU2VT2t5YcFqVtCu2y4Gtzzz7RPNnohYzwHy1zXkK3wbpeokm4xfRmqsPUs8ep6eT2XNhHTeNV654bQbmyQvST2",
  "key21": "3uwyWkPpHbLkZQNFhrnrQ7NKSotUFvXgRW4RNiBvk9xGbrqpNbMhcMHR58Hhdn6a43iL1zWuvgAdGr9nhHvRW4Wf",
  "key22": "2MGHg1akgLiZaxDhuQye8JzctDqQpU7RDN7bMgsuQqAjQi5DqwMijKGnb5G4odEc8tBzt3NHC5DDBHmpKjmrUQYp",
  "key23": "2p3BQ3ubYiSeqhZVvBjPBPNRXAopA7Ripikpp8W6bWzxXKsRCmhTM3FKceKDSNhk6ZNExyJYpGg77kjMBWsAZiTz",
  "key24": "bqsuRJtq2pmhh7qgDgq6DvM72pRXnKx3nsya939jMV83HhuxM1UxK39N29roH2Vrnj7X65DWoPbJxPM5XoJvcAr",
  "key25": "w95LTPffu2V2WzQx5iRAVR6wJt9uLwNW5gv9tqsyqwZuMEKUw24r69piZf5Regf97y6Auwegy5Bi7qRhgJ3eca1",
  "key26": "67LcZcXCu947wZLHfgMA4yAqg9P7Q5MuxRHMgS6XGM1BAQJN61ztcCSdktDqAt6jfQHfH9N69QZggH6PSVbHWf7c",
  "key27": "5yvueC6GWJqLns7kX3C2q2e4hotwbkoX5wwDs6gWACp2hBnpgX4PXT4MisCxYkgWpNtuYSPwcYAYMgv7cn1Uz6tf",
  "key28": "34CbFzSvPZtAwHYrq9Yffyg6hix3cbMf1FUfkucq7VPn82CB6fgbfjWyAbs229SjK75eCYcBvn8KW1j6D1uGZMno",
  "key29": "34bYPxsRFY9gCPcCg4FQZwF4ivBVVt2HaZwrtVWktW9eGunxujTpjv2F4Z4QMpGXMihKqsTecbmot9ArtJfR8Eq5",
  "key30": "2dXPYuKAtEzNpEhrFU6y5TMbHJTULZQfc2wmtsgYWn5RGh8aggxWL5RMk6q7yu6pdu4A28dbgqF7w3FDQvoNkQVn",
  "key31": "51NgMQx6PwvDM3N8tAWy7pFwqXKgHUKmJMKbCHi2SwUMh54jeQjJuzCtLKceVZZASpgTMoKHuJtLBPJreL8mEskJ",
  "key32": "2dcrYk9G5NE6ZZqyzc8wbFv19Si7JoqyDawr7Cdqkcp6jjywEEha1kX67LdQUKMVkyNAq5wtfiHWNCKXBKd8cey7",
  "key33": "4XEF2KrRRnb8MbG9SP4rQ3vuJ7eyyhKcesdvRJhKrYhfE79t35NzFAguDdxksRVCkbRfL6cVx346PVKQowGfUvVe",
  "key34": "3tmQkKFDRYWw8dLcDGfAeWnp7kXnMQZqiiXmadYRmHoWadmPiCM1VYkVe4RNiYnDA66YVCbRkf4yvSQ5JgXJ6914",
  "key35": "QqLAQnT5theWEeHgUxxHLFbUMMzDedMsm2yFy36daXHX8BBx86ijAbd2HaTwEPY5fVcmQi6cVcNbHcc4zAZmvaw",
  "key36": "4LBZnaXBKUYKPctqmGeyWZJKC9xP4YHkNZNZ7AEhNH55m7FKM95bSwExCjPSi7cLRNtZSZPaRsUEKK3tmdJuWqN8",
  "key37": "4bwHi99hVBcWa5Qgh9qWjq549RVr9XSpZoC1qe8ZxHbBebajM4L1MjRviwVQosrkSCwUrKhLS8Mzg1WpFkWHhwSC",
  "key38": "2pM745dsTspZUskQLa4Qsfi3eg6pVpL2aN4TXaZeRiN5nej9vpfPkXTqfHfQrgndzTk1qhZ5aBTiLmNRAZ5kneUq",
  "key39": "4su35SnPSCMdRMbUWxgvRKaqdphZTZNUCV8n8hLr2nL63at5PsoT25KFrZiNnhsahY3TqQ12S6jd3J5X9jwBT47f",
  "key40": "3WLA4R6Cj4vhd4qC6ZR8uALAVDjmaXF3KuH8Lof7XfnUWWRYHq4H5TMKFzw5XeDY7G5j4ADEHegouQgYLUSa5sT4",
  "key41": "57AFZBmjPpgkSG6DUoChk7ZUpk4DQVhywGLATxejaNyZWqo5ymBPcs8PHp9iqbKzowdpJ9fJsaS3tZpqxjRiz9fq",
  "key42": "4vPRfG4GBjggys44chupwCDZhGw53PTfrL3MuSV6hQRNqGNoFh6eBMEBKSGg82c7ck26HQ1TCkatJJGJ1LdxNGT9",
  "key43": "5daPRS44j5rDJVCaQhYd1G7ZeNQUGUSMBiAYEmgWQhppeczHdECxMGEUp7CvVDbbTLXX5SbkpyEnE8LVMs5CC8C8",
  "key44": "2S4VX1wVDzAD7MvqpYVinVMgFhjDgvEJy45RhpRAHSfFfKP3p3Ro6AL4dKZhnF2Z6VNUTfWTTHWoY9xsLSzSm3i5",
  "key45": "5PWPH3kGH4pJWZzPXNVR98BBKtFtGiJhUPTEsjkYetPMAmaQGiKdAZYL2waqL4HDHofks7bcCMUaaF6n4rLdtuWB",
  "key46": "4iJEtj1Pckr1Kd8AHLL71PfsyC558hNipRJJrnFVzCpRpt9SKCcB1L8jm2Loz9rAWYhgt9VrdXbPcJoS9T8M5QEv"
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
