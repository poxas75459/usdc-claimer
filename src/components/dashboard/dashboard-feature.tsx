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
    "AXaq3rVT3Hm3o5u88Bo38oJ4toTkCuCaiSUNWo423jXXaChWaWnMmgbTBfHy3tp2ckLGU24Jidh6S1Fxx8nHSRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVCn4ECtmMzrsgDSG6kdwihFCfwhKFDPEArvZsWfm59xhCaowvhwmCHb8GHvW8puSbkgUEoCnZJaoq8CYx2m5jY",
  "key1": "5Lst8SfKn1EuPEpza7xi7haNge45Q1DyBnXkmf5uFpjCXy5PJhHm5GzZuVFgkWa3u7LVfVr6ZAG1Dfg6XMDhgajt",
  "key2": "4Um9EoThUqxsqgBSBoaYFJdGFe5Gh9gT6tYUiQp8fDnHBm1kTCcfHBLhPSKYHUAFLCyHZwN18uB5C2kfM3ySqiDz",
  "key3": "3GC4o9K9iuhiFbkV6UbzeV5uVd3vVNAMzUio4be9whm1S4RYN8Me4JG8pPjCfgiQusHKe8ThfQWAC4bssz2sqT95",
  "key4": "5MT47UPho4tkW4BJZYMgXiaGqXBTcCExTXc811ASVxkWhyUMT9bLJid1PFMhrKtQZmrwN75JRZ8o4aDQXcs6tJDB",
  "key5": "uEMDpGBfgThxvMBzJwqsiVWkcSbPiFXkYQWnViuV61pz5e6y1kWLcsQyFe3eyHRAsAtnCqXQpuQmpbMTNwqNFQq",
  "key6": "43Jy19DRydLK2EkBKCPaoVbfRyWGnhiwJSRx7SJ38XSuRXzGiLVhqwNe254LvxvDWfsAwEHhkbMREcpxCdDYtVF6",
  "key7": "27sULgZUU3unPSXZ7wNvjyq87x7xPKXB84HJybdWoa4Nwbw7YH8veDuffcduPpCywusP8hEZDer37mDFDz1w7KUZ",
  "key8": "2LaiVoAMxxmNyEiQxiY2AaZTrftLhUkTuMoJZKa7PkKXThPVBtTCGkVGKTbbVB7riFGPGnCJg2YEvRDLaXMQhPt6",
  "key9": "3u4oNYs7uqnr2hUqgCNwUPUxGrnWNDrJhf1fMrBaqaVttU5QcxCNHryrYdN1eKGipa2vVtVbfsbYiuefJs3rWqCd",
  "key10": "3pmqgb7AYdHLAsg8T1Xc5bWCr7hkJqHu2H8cAofTzJfbMZ1zRu5te9aVycyPyiPSzoAoKiKJkCsENo4jVdpZB9pB",
  "key11": "3VHi35VdNnjWsG6B9AUrL7NvnwgXqXHcATw2u6XrsdfcihC3NRyCP6aQYeErz7NpymTxQqzqrCmJxNjkwgGhtGd2",
  "key12": "Zx8gSaVH3GpM1BGcs5aT26QqPy1PtzqrR5dgXqQdQskLwJ5NGzvewc4XjF3W3DvuQC6G9CzcXWEuquZjJBa3cEA",
  "key13": "5DhzzYC72snSxBMDq58nG64BWoUnU2tk653EbNnp3xBq1fvTwsZLa4bbz8PPpGKMS4wVxTnY1JL8Zytimf5qsas5",
  "key14": "2YSRy1mChDTDZ6hLmyeSkMMKL6kopM1yPedGqp9nT43SGjKHNCKZeL72BpjoAmN5BanigPG2yiysYYjJRSWueexE",
  "key15": "3MCkDHnTdzRXAo7e11wxL9ePHNT71GtbHxDsVzms19BK9vYW2UrthLkPmjs1ZGShaTzcRECi1SmqBNixLxcmrU5T",
  "key16": "2tQmkBCj7QdwwbzFChHTJiLHbPk4Lnpb98CZGavvu2RFoXm61GVMwZaXmm1b2i6wz7bcvdm4o7tcq1vfDS45AgG9",
  "key17": "4rzqp2bi6Z4REZZzzs1f53d7wZtsdQHb3S5LkEJRNGQ9gteR5dVLvi5J2bJcnEMTswFJoFufvQRNmpkgKg9KL246",
  "key18": "3ufmbmG2nzJsAgFBZEo1GTjKUQbnfEaa4zRYaZH5ExZDcQkNwsqNXaMZ8ChQ3y3d3UCNhurSJxLwEYFYFwynakAY",
  "key19": "dQQqLP3gGiE3PWME8tyKHHW1oNi5ZSqMKgSLENpL8faCcAE226kHDwJ1FtEt3KME1uAR9nxMmJorXSkn7kKq2zp",
  "key20": "N6M5xNF2ChCyHyQaTi5yKrAhctVBfwjiAHt4iWv8KVa5dr7672fosahoFQoWa2e2xVNy9qnTheycYB6ZRQrcCAv",
  "key21": "22SfeDJnEXCdhQ49WPiNEDbxDcgPr1DMmc4UKNEKVmGTxEhRgCQMcX2UpNAM9txQFA6Rt1t2iD4RFW2oPSswWAHq",
  "key22": "21wAEwa6nDb21mfa4timx5r5htSWaH71PaKZPuGbSyQBwsaapswgwmf7z7m3Uypg2pFAiwHoBBJBWUUnBum3PJoV",
  "key23": "3g8GQPX3X45zYhgM679ah2sv3f7PmPG1J3kp4CGLMi7NvcWehPejYJucWW1EUSnQuFVt9ruqePYe421Q1fz3o1Yv",
  "key24": "2icj5vai93rM1jnWoJE2C4bBFpr6wQGVqT67DwX6G33GiBGiHwHf4mGmds4EXsGFVthJpLHHYSk4d3fmkpE3PxEL",
  "key25": "3a6fth9rQDWUBHAVa494Be3nDgx7BSFaeBDkeKTzBGGHZHtpdZ9HGRUufRchdYxHwEnhWwh2w1eZrG9P7dCFB7yW",
  "key26": "3xUFgmFjAqj41JMyDDmXxb7ZubsZEAZLTsmnCVWfrcYMpawSaX5SESfmZ5NWpHUry3YnTjqbidihesBKvv2vZULz",
  "key27": "jb1Jx6Wcyp95XS4ePdhYYEJBmvW4aCQQbxy9odxdbWc4gmpbMMRy9gb8MqebNLbFxZgHNB7fTVcwpcf4kfWceYR",
  "key28": "5HYuowcjak7xdJKdpAfJERpJDR34aPFodXTACmhPRnaut1a6mF75NESe8UYRZh3H1SnSvJyBMcJ5zg5zARsAh6L1",
  "key29": "65taAYK8oKNJEPf6rYznkVBKhtdUS5tieQW9SXqiq571Xm4MYUxZyFvKhsDP8vERsq4hJSvH44HmPWSvVHTChQz6",
  "key30": "5saZxJF9wvuZ46UbDXKMuYy63PqSBiESj1EKHtQZvEXGBJTfNX45WG9mAHs6JofyEhHUbYKTtJLpSftPWujDTy8w",
  "key31": "Hv8oQnb8WtZHuh6TyWHbBeYo4SEqunzvzoJc8u7g7nEZZH7bqKSW3a3YcgpfZmQWsNMfMX5aTzpzUCmS9gLMkJ3",
  "key32": "jKC3AggrYfLnEcZnkWpJCY3CuFw177uj9qxCPkFzwGMdjzXBib51DJG5Wiy5krjUhNmd33Z32eswLYrTHusqtNg",
  "key33": "2bnyHjnzhECm9uzvTZUpJGdCSShNxYqH63LFdLPbsPnLLrLxoAAzDWzpjfgdF43ADwcwCcsCHK9nJZnJ4uu7dvqo",
  "key34": "3xufYnvMS3zLJTM8f2gAcYmJHy1wXWzvYx2vuqFPpKDJ7VtfGnBNhk69AtsLbbj5DQdMwwxcr4Rfjdd43YvNeUsY",
  "key35": "4y624veLDFFG5g3Ba5UGfoXUgWmTajeXUjRhJVCEbdwD18E29fTmYA1V4unnWdLxPSdr18Q59oeXnhGS3cLPNkHm",
  "key36": "2ufyQE783n5btUhdGNvX11QB84M22vKEHrHebAZ2ZUc3qeSUYmeYm7c1wXRfjPLpQfh7erHAZFK6p9nFp3x94ZJC",
  "key37": "QVD8WB17M5wFjc7PcQ2goWAjfoqxn8drXRMFPe3GjQgWVrD8uXfxSmwmGkc6q7jGJVEsL2J8hEhRYAKR8fMQFxi",
  "key38": "3gX5SYsVE2S9JS7MoLEJNQQ742xHoEXDAbWdXhzwLyJb58Jrj7whAG43rJVAwn6qPH7MG3Ludo6zpXV97RkKETSY",
  "key39": "3BzBxecG7xNoJ66NePTi4dhAeXomrP4tpv4wdCWyhGAXufwmPbXJtqcpM9sFvyh5gnv3peGjrkBJBvrWnnTfo52S",
  "key40": "3QRvDxU1cACjGJtteeL3zY2xMjWz6fCA3gPm1YBzGP5K6d6ERWezzkd34Ce8m9jMvfTGxyyHuWdfEW7a8P1uwSxG",
  "key41": "2pYhh7gfvmPSKptoCbKqdzLHCN73MdYZi8mQFzSze7QbffVSTnV85RFTWvWB9n6rtbz7Z24WxinSXvc2s6SvmYtz",
  "key42": "6KqFnfrvPGcmjBpdo6cQLnMfmonjtWjbE9LWvYnqCdeNSwmWc6RiBuB8ViZ5H6FBt8c2t3B6Au2n7maCnfuKddo",
  "key43": "5SSPEih3MP3ZJS7hY3WRM1Nh9CKXD8JhAPrjuHGKdzqEgQuh4y9q2GvvhtQ6xDbZm5NVYLKJ1SvyRs5m6fb8Lkxu",
  "key44": "3dsTqzkzNPRQ9muKzyWfiogEyca8ZApC3LdvD8yrjf39cdt3yNo3rfc42F5CBg197z9UodyrxRL4yFGG1Ao8DJqB",
  "key45": "4io1yxkWAHPkqvZk4kvBu2oUNL3ZwqCPSobPQeBRsM72YoEutypLL7eUeCokJ4G53h8tx5DTT1Zoff7BnduCnmst",
  "key46": "N2tJyhagC9z3hWXYfaDpmdqgFeDXXH3p79Nw9uju8UJyr31q5PEyZ9ADb4ETTbhC6jPHNNrRmWXzFaXPU7Tn2BG"
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
