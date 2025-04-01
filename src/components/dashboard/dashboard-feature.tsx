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
    "2GgR3NoYHj5he52ZY83GJamim45yfgFssbny4SFUuAi7yimxi51NdNtGPfdHgcrrra4ahSbpoVg5PZo9TiwXXruv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z58GHkKSKM4yA6YQy4K2r799UzRWK79zd9643t7E1ntQ3TPXhk85B72BYCHPCtqyjwW5d7Z8Mbzqn3h8C9tbpiq",
  "key1": "3rAykNGibgBMcfE4q93w6QDh1pShDQJ9LHdzJcVnFEZ96uwZFeMLH7yoacd8XjV6LDsvUfJ9FcyHHP4GNJwUmuCj",
  "key2": "45e3Ki1YYavXcT8Y8nd1exW5iE3mYJjAvwe1EyibNEn8EowrCmYkzh47HvwhwhCfQKisKJ8yJjkUnSHpoRf8RmKJ",
  "key3": "3UwLZTv4Qy1EhofyrqcrxoHwcQSYjsH9qMRMnVvg9Nz4c32WNMhqwCJ9BMxbBUZW6RwUy8sbLtfX3TGNtXug695j",
  "key4": "YAmPxo5huYisqssZ7cMLtAXjJNKf7wQ479ionmwDgnTbqZyPqtwhEkDVomP92VXNxEPprhDEPxs3Q1tJL92jsjD",
  "key5": "3QnZLFHpyLVi1sAMvqx3hc9fmM5WWk4LDNXbBD5Z1tQ9gixuoT9QF9EqJSxEG85hQ3pcHrEXZbtej2ijqJJkmMZN",
  "key6": "3DuFxbXruiGBZv18s8dBkGg9wZJKWtmZz2bPTv4uyBXnP2ph3KdTmV3LpTRLvzXJiMWrreC4vPK6EghMBqLUDTNf",
  "key7": "4zgwxwKZbEjTd9YfFTRxADRL9LePZ6v27PdewzNsiMdWp9fToiHKtUjUg8BvEPFjZ7VNGRcviwDkgw5j84byoF8r",
  "key8": "oiixG9j1PHVkyKTqSeWNd2tU5AbTJJNM6wCNJ6RXvfDpCbz2iyididfjUxWbC9ygccuQkZ6gXbN3HvAqHVskY2E",
  "key9": "62zo6BcSRiKg6ZsgASygZ1vJNDST2kakvevkSRWs7BshvT3VuXfmgthfHWW3iqmbjGe2CYfW8Hm1QHomDphuZ8tf",
  "key10": "3xU2Q6bfK7171HKfVrzBqwkDNzcHmBHgvMyvXVTAxxrDh4LqmcpG9NRkv6G8gDuZQ77tvotC7T2ZHc94zFVR1Ayc",
  "key11": "35GgiK3KQi2Nuj5gnSGFiup5we63jyFsXXnjEeRzQAfxsFM8iy9JDLwEFmpP41vDVgZHpMzsU212iyJ87qFFcE4D",
  "key12": "4h8SFpu5dQ4K88dJBPyFdj9Aar2Vqf678RcPsCHKZtua3bNLc2XBur3KYxLRVjp9YCpWoK8gnuhX5ySBFP3YZnqi",
  "key13": "4Mt9hVYznTGxzFtN6M9nvV3tEhoiDdy1m13woEVvWruE4GyUybv6F5gCUvQKGTq1N8FL2wKGdq66oDgZ4kkzmvZB",
  "key14": "5Ys6BakGeowR9X5ECq5t7ZWG7XTvDebVK3UbRpecLG2H3LHQnexPaa5PUGDMucLEtLnLDehp9xwYx9vc2ZquksjW",
  "key15": "5Pnz5uPZegHSYm5MhgcaKi5a1bcDefNg87wJow8WjGBfjrdrtfTkaCZC4bt1mgnkixQKuYU3uGjGhuLqTuPBHuiM",
  "key16": "3sYq75c3w4HehAHhTXJ7CuE18VAZcaMMDgfwD7zdg2oeMF2UEKhRZ16ooJj36qAJvifkz9pR7oVCdmiwNgNbzKo8",
  "key17": "RaE3q9mY8pdJP5bY8wn55dGVNE421WxpTj5DeYEqTmMo8jmurSDz8wi4SFazPCojX6XdKHPjN6P4RGcrVqt5AaM",
  "key18": "1f5XnXbDJc86a2V2jpqCJ5R3bXF8jK8aBZMF5DjgXdeKJUsqzKkXF3SHer7aaxbKmXuLqAUcT6ijaKGh95fsDKL",
  "key19": "2WuHyRMJ3XBtnPQx3a2N4LR1nYLCqZ1FmvwxemX7vH8YDnTte5M5ZHwDFf6WMFVC7ForZPAb1pCqh3UaGJXGRKpw",
  "key20": "4ijfq2bRbZCF6KssqPrBmX53qe9vfcnjtyvMHSxoeKxwXnXudmYJaZP6deruCs5iCK4gdfcQo7voZLUBMC9noWiY",
  "key21": "3hVbsCeDTXqoQiNafvS2k48RGyeg1EEs816CD26DeWdUP1EuGHCaitsg5ngg8zxK5xUJnftuRi4hLAyomUDHfB9s",
  "key22": "3NQ2gEDZna8ogEokzXXeg71dCnmfftYLVREwdcXV2tQCUGwzBnDA8XysnuV5V7e4d5txm6uQhYNiLXs1t9SkHADM",
  "key23": "42fDB4iaxEfjE7EwdZWCzUctWxNanVF4upKFsgKDwZxhSky2oVwQx2WpWZJhy9frWguXvRvaqUDUmD7inBGnfd7w",
  "key24": "2vfHLog1QMoLTHyvEVNoY4sHpVNjtd18t9ATpif4JjRN17K7dEVAuFh6wQpFBvrRreBSBLKTuxL3gu2knWUbvp9P",
  "key25": "4nqQaLFq1cKtPzx1zyon1az1oSuR3sPanyRndxm9ti953YN1knFAFgyaHwyuN1my6VithipNeN9tRM3ZSHk9de9Q",
  "key26": "2dxDj5ssuu7rC1nULmjRDWSWyYseVSFPA9x6Kd9jutduoYAEixouqwaiP74zrAoLk8ZqcTpJKENfHdtM8qJtqJCg",
  "key27": "yY67CYD28U5QffcBab19EYistGcZECiuwH9A1qKLCqZJ8QzihyfVLGMg3LBCdemM2AFJUJ3S77LPkw7UQXqRByZ",
  "key28": "4mWx4cQqDefp89m6MNf5cVMBWhCPwrU3awcVJADZo5foQj1vHSWvknmcn8wNPxrwskT55faSpDcMc4U28WNGHQGf",
  "key29": "4wLUqDNfs5CS5uCeKTvyqMCWU2ViwoSUzKayBomB3QiDdixbFSK6u9CABTjKdhMxT4KUYfLzo2yr4EpePH8of4Qp",
  "key30": "2NvupPMzutXV8te6KED1XjSa7suc2KfH85AwnWKMSxnaYQEXi4BXQXjV8oN3PdCADghuF3DEY8LiKdaGXRqL4fAt",
  "key31": "5fs96RW8FtNDQpqnGjG1j74vibuCDMnSdddfrXbmvo4FMKKDroA7JNvTTCxzTj78XrYE1jPoW6qmNz29WtxNX1vM",
  "key32": "2NvLne4Q5tEVyYtB3weJpMe3GNMkAxJy94R9AwXVANVJJqeSazoxtFrcpM5uPJd4Jk9YmsUg8GRko39thaBAx9VD",
  "key33": "3keTNwh6NpJkC3EToJDB6ZMTPXTEnWRHDtzwVv15cgoB6ftRz6u7W4G2xHRieTDwF2PDnWfFEsqe4uTeFv7HcjVF",
  "key34": "5wFxQw2G4iHDJizqYG6PC2oxSdMbP7ZfdZ3PZM4L1NypwYWr24hZ6YPuVTqaZ1egMWBhxXxw9CzNxY6ce5KcJDL2",
  "key35": "3gLVzRnaaPvRgBofa2tLJ9NewgY52dS44vgPwNMdqeeE8M3J3hR5SAeLS92xh7KohyZ6GVSahFscAsv8NdosiYo9",
  "key36": "4bJEGyydHHHb9z1jDmjLgbSyBfrJfftqFy8WF98BQpS7QhsWmYfv4Xio7N7sHhFLDywDtntzAhA6nbJD8aFCb8dc",
  "key37": "3JZ8uJTDfQfP2gwWqGZbm7bXLo2piQjdTLypJpmADNqeULPLH8B2zQrU1xzreWpQYDHYwxeZzFY5x1pisHmPtC6X",
  "key38": "54M9mGARZEqH4o5DUmPmeiFQVyvYz6mZMAdD5EZgGXQ1cZpEkDVJu7NbhD7RcTkRf5MAV9cHqnTHxjJnmj5AL1ZW",
  "key39": "3W5oUUAu4HzX32mGWChYWhtdUQnNCXgb5XUorYsoAui4nJQkkSzHTqdiEwqXxmPm4G55o1NhH6utyvBuCmFMnzoz",
  "key40": "9kvDJznrLr9A1CRufendppwfaqrX4zQ4pFHNQj2rm5HT3S9WHqJ34AqRVunVzrAz7wrovBGGFctUxvPRJCFXrUH",
  "key41": "2XNouL6ft342XudbUesoG64Q7PidhshgvcAM8T3bkS3AZWJc4cpt21AY8VuogamPX1zXkXKoHNjvF6Nw9Cp2C3gN",
  "key42": "2jDpAfseshJbD1hnhPWVLsbVJURKdVADnt2eRPNtXSDukJ7pHjaQKz2HVgQtVZhcrvu4yZdG9Svnnwc5gRe6WbqZ",
  "key43": "3YyosXi2DkExY3YP8ZB64E8eQ4vQXz7cDjPFVCfzJfTu96EnFSitbvX8MyL9sVdUMrQ2Rzijsf3QZiUYm6jcX41H",
  "key44": "5yGGW9h1fu75HsqgNn8WwMAiNdUmEaBwc3YB82GSm4kpQWbspk1QCsFxyq4rJF1jfutFDiCpkbHaet4cEXPMcBPE",
  "key45": "4ijgAq5KJ7GPTH4CXTRQUJ9RjzSTBRZGE7M1qvne528Jyaq9YYvwct3ALLiTQpub2BpkXsL6SjKSEz4HnmHt6sgv",
  "key46": "2WGLrVYPz7M6VYrcFhkXsfYSTp9FVDuMftyrXEWjrrFrKm8h5N8EfMhvJ6Tnovm4escC1rejjg5gUYaM8Pyfjprv",
  "key47": "22zHbRMfwhh6ioPbsxD7gKmbujzsCd9tr4oxbfetvEQWExY7D8Nvnr3wrWxsUJWpWXJL5HC9xv1gDZePMjcwrJkR",
  "key48": "2ciutuM7DyqcwdqbhJ8KGDWifzLMGAV4B6qDQfMhmmVTbjpqvGihweMwxmz1K3uGwWmCsx65zcjUccjrvfMNio8o",
  "key49": "YsXrTxDDC31yKhLdRKohUT7983V5jEUK5KA4qFUBVesPByqMb63uJKouRY4kbJEek9oGN8y2BmKn1Nh5nHsQzyA"
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
