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
    "4ZK9at444Xt1YaAU22forv6ZaRF3NNdtxRcRG2SAVCk8mndKxWh1xSRyoFXuai8FKGifw6Nn6RmFSXdJByVnPL9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uy2mBxT28oAF8zyEWfXa9ajaWJ4fY3iGbnkKo5skHMBSagEsqa1E8pEKPtSSyCE83jh9ncgSgoaFmSLdovmom54",
  "key1": "4vbnLft8BbAbV3g1aMxdFf4smA2EwnvMGSgDq8ysAk55yP1LJSF5v3mk3sJ4XYuP6bBXpjqnY3rX3ECYTCfUBpsM",
  "key2": "5a62aKJq3YzPkLEqoBK35stX686721tfGRmftjU6UoNjcPFyJ4JX7kAwdHuCfohp4DttsXVLVcEafzVmBeATDtPg",
  "key3": "4BJxtRydSn7ghV1QgZJqo9z6Fyc2tEQXcLi9pUEXJfjfcfH5BbmbpWMC52FY6AYdVuPWEyoZHjzvLNkzca9T25RK",
  "key4": "fLKonD7Q2KzKbUNs27fbirraPuz88weXFeKYtP5AYz1E7QdH1jgCyGroquGKh7XQZc6XKnMihk4MwhZGFZ8gyEG",
  "key5": "5xzKrjp5jupEaWem5w2PJ66ZcvhAvfwAn8LWBptbNQ42AF6XyBBG8TfmfYT6upASNC1PwLx5Npa953WtWayJEhe7",
  "key6": "2PKqCrggLZJBD4D1WkTVSW4n5kpJ9p1yQDfWhBg6xoGFoNWEGeqcLvUcJyZeaYStAcyYDo8XAzzWBYGTUuKGpeBF",
  "key7": "2wBLa4fZfp5vZViAR4ac8ASLeYiSk435hmip3bx2dQnAAje9dAAeEzxfAoLasLPiRtQCobJHgRKFBpNPuSpTJvh",
  "key8": "2QQkhDH1zq5tg2ou4Yk3bv3pAKtfztWZ8qT4Fdpva2LoQntZWn1HUUxZkk3ZjxkUf3adkAYKyK2uok8fQVHx8Uxi",
  "key9": "j1GA5kp5ddyKw8oAHUEDosbJH7NuEdUEbgvL4N7AFFsHMniQDcVPx2GacoJTYSg6SxMQDQSnBAuDd8p9nB56j2L",
  "key10": "tnnzxA2keqXk4FtFc8S4bEJNC9z5GCQ2RPYo4UDuBFSBAPZVFhdkrfqqsHyAad9PKsDckcqm2ydgPLHiUThcErs",
  "key11": "4oYSnEX6yT2ngoiJrK3nK7iKjbgzWAj6MoZXqazWLybaHhpRq92iwe2ZqHV8MmFeinfmTsUw7Y717zLfeNBaCQfT",
  "key12": "A5vbFgqSxRpLwX966yfUwkS1cyrLD2q4yWNVKrL2SH89oLsSFuSXFGzq9ydnCMFHFL4dRKhAq7mPCiZX9wYSa7e",
  "key13": "5mkzMeXRUMsXSEifCbQuS5qBxDV1EbPQVoZEcgZMukKGRWsqf2BVrP5qDkANrbmSErkkL9pyBsqtEJ5N4WydB4vz",
  "key14": "2p5U3Ab71XS582GTUTVXGic1KM2ViRk8Kd6spcYqAb34Bbydg5J2H5EdL1NUE3xjvqdoBtY6n1rBf54QW7kzTH2Z",
  "key15": "5HCMv6LKTCFNDDXYhChs1Xob6Psgf5XNNxbMHmJaBHp86S95x9XkLawqik5aynPee8qpmDk9NFNonDRmGFZLgiBU",
  "key16": "3ehU7saJ8pswXsMdQ9wNFHkGCZ5KHmGSpSCNB8PhmR4RYEJ8y7PrnuwiSKYJwGvwcQecF2SuzDkoJnc89q6QNJf5",
  "key17": "5idB3EBhKzWj7ouSGSq5NGBpRrgu7YWiRsKWbUkqZRTbxT9YagRq4Jc6vNwBtJrC3G1S9aK5b44WSRqxZoP1ULYz",
  "key18": "dvtbBnHZutEYUU2NiMU33J7Gc9dnUaY17Rk689w1A2FrA2a2GiaSb6RNRzEYGfXRp2i85bmwn1fZRZBaqU6LTJT",
  "key19": "4vL5N9VSSNtm3KjHS2Ndc9e5YKdtjnoBe1C1ZG3VdMngusENWaNdiNWdHezFuTHRmyXY3cd3GNTHrWpBAat4K37c",
  "key20": "rM5E5AccWn4ThE1o4h9v9vAMozD7b96uuS5g1pDQibJA3Svyjv9MESFgQCXB5KWu15Mi5LuXWkkThbBBCTXXd3k",
  "key21": "2cfL7s3o2rN6NYTCSsquR62gygBPLa9ZLNbhgZ7aB1mC2hhHggNg1tu76At7VoCWFjouK6ErjVMajnTUbKCqXDVK",
  "key22": "2iVTiNqgoGDno4AyJa7MoxdmLwXzVeEwdYacHj24Nn2DS6Fr5N9LYZHZxnMXGWDAAF2Fz79Joq5qGYKjDCzFcEyD",
  "key23": "3g218Jkx9Dm8Bvmb6wNNg3X5r7TZdhw9RSb8FryAYBcKcQv4UCVvRtB5xvPT6oXrN8pSNhsfn9Mi9jeiqBNyHJmL",
  "key24": "2XvKoLiZzxGaS6BKd7Ye4A2MyjohLqbQYaLstWvbjVXCGExZfJA18YuhWN9vHsbnyGC92pHR9jwkxhGqbUbbg28X",
  "key25": "2Py9B9c4q1rBjyHQdz7ovBdVxjG9iP64zYNVMPuta1GiqbwA3XUaKoJg7LR9Z9AmZy5tH72Vvh3cqWbo71hkYk2",
  "key26": "4t2Jnyazkah22j42Csor2rXdbdHFNtp3SNH9KaCUJfmrdKaRBEskfkPp6hMnReEZzsF6X9UudDJTBfov51x7VSUz",
  "key27": "5uYQi1BRTHVALVrwuscwsHznQNPjf6T5FtX9o4S1C9yG7MdSQvD7mMN4QZBx9gnL4L9PXPBgwemv9ZwzrEjzdikt",
  "key28": "5Bj5o3vJjSwMvXFiMH2mMAFeyCrCcvnLJFMSs61VYhM7D1FGU58nuNJRcxFNQKv93kv157zouvKkephqudyCUrxr",
  "key29": "2h1kc3itBd8Y29CvnbH8LYc14EvdqXR6uyqNQyqYrg41giwXTNqKaqur1tU6d7cKAo4eyNLsF7GcRJcVCZpDQtdH",
  "key30": "4Pexv7wwHnBK8ti3Bty3Y6PcpoEeiKVU4CYLWCFuUvvadxarpc6KDmB6pHNSSwywu8erQnJqDnf1xaiMffdvxhnr",
  "key31": "2WYjGAcTdS8qzvK7WB1yExf4RdTvJ3kdFDV32hPNZekkWF2Uus4fGS3vrPh72vAqtMpGf5q6vLB7kNSATCArYhj6",
  "key32": "2hGXLjXdrZ1naycVTwrefqYq4B8fHPHvM3Aqf84UfBtqLUKSVPErd1ffX8cA7n1RZEgLvotTytLoCumx5KAa4msd",
  "key33": "4F5W1ZGrtfezdW2ynbvsRH5CoefrjEh4Z2PgMaYZokMWK94bCCBa1zXe362iJ1qrEbZhzWrxrm4GEJ248jfMsxCL",
  "key34": "2XYS5UYxrJWm4Nn8DocCn1pw2ozBexLVhiMKsvec4XRMGVu92WpWaWCFDyJP5cNsfNRZsYQ7qooLzpByq9pp9Fuv",
  "key35": "2sM53uQUDueV2ypDy9vMCEWsAJtx8F9zGQji3fkEkdd9nJWnQGWYkct1KZdNrBKeh1fRqS6MSHJFFYQ4Vnxrmax5",
  "key36": "2LFmvQKSkfHHi3FHZt9P6gEGzpcLyMXmMXrcWWc3ugK89M1PgVYBNw5YMC16dVt1tbZSp4Zkm9tWKeYj3UtrGoER",
  "key37": "2KgorQRCAtgmYU9KQzQ66NFwz55m6qnYxKpEz4LLeMTpyFuAodF5jn3X9EcM6iZv7NdFALhndQV8cGd2ysHsixat",
  "key38": "3hxitQjx7WRpsT8axxhSHSZvQqwPo4w7boYE7LWH2n3mvz3QkwgkJzKB9y9PRgaykVdmdFRRtD4YqDRbhPjAvVYw",
  "key39": "3A8aqpYgbyBSnGpF1MAYhQGySt2ZSYSHeDrfWTKwjxAQEZRsTXrUeokBs7GNJe8kaPqGZyVZfsrs3Ann5UEGShhx",
  "key40": "2JE8wpKZAomfwNbhBBU8iaZnRy7XUTAfzcGSd8AoRQYkiLNwTemkPXgCwwTbtodsGM6AtfjANCW2BnfiNqZbgbcv",
  "key41": "4xrvAfvA8TW1NMithQ35wC7Ey67yvmnf7CnchjMpZZLnDe63hM8p5ydPc3qFnpfXNSL2cBzE8mXSWDVAsR4j6NBR",
  "key42": "4v48D7BM4FWLLgRpUFC8u5YbdpyraJTLmg7umK1dsMQtL8wwbgzqGn4vWVsb3ht79vaSumLNUJhQhJjEyyfeHS7",
  "key43": "5nBVadHsPiJKCyCNbv5f1QS8Vz8MpcaX7UvpW9CtUob4mLhZ8oL6LdqDkJT8SKwRtC2rviea6TY4bcqTpRWpSEnG",
  "key44": "5sXfUMAnNvmPVuybLtz8r4biHX8BthKWMMLheU3QqyJhT3ZutBPaxDBU7TwTBGL18ZKD47KV5XFqed1QPRUBEw2p",
  "key45": "4ArypXssjpLYeZj8Z2jMR96Hi4n1rQnKj7VBajTWn2dLReXSGcATxDMHELqTk95k3MwMaWPz5fjMsfd41buxnFr6",
  "key46": "46Rt4byib3pC5MxP6nd2FSFk2AGadFB52z4t2BZac8Vfwj8rYBv2xTTPqqrgxVNxVYzE4CgpAghJmgjWqF7mdoep",
  "key47": "2GkPa5yke5adum2PK1VvpVEZTQtwJusspU8DV1G5LDydyU6LceePQ6YEXhaDuDFyNnjzQP67SNEsYNT4K93SkRLq",
  "key48": "2qQDJxnRYoJPD17cdXfp8aiP24UE36gchbZJr9BiGR1nYrP28cPNL3cHev8SgmH3XK3j4bRatmzwwgY7abSZLjG"
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
