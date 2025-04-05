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
    "5KirSrAukejnu74EtW3qf5dYLwZEneoHCns4ozzuMynKA23V4QxYELuuz8fS92nc5FKiW1Q5XofLndu87qkdGrNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYT847WzwDbxFEA3C2BCzBaNJnX5BUE3icnDprHhxNJS9RTUWC1DjMk6263CYaVsa9MKpW5nPidwPjG7dBvJHcU",
  "key1": "3D88tSSkfr9dYivgdNzcx68ZMfmvXjJk1CVXeYj7LCyjq6evj5u2utW2AX7YdPwEYTCjiJx6WEUyFT2KgUr4Y17Z",
  "key2": "62RwL6DMvMcm3ksuHEpfhkzGVfWL6eVn51XkWL4SMGjqrB66TiVF1yhJv8WiDkETgKTW4rzxZFJcTenjw752SnTy",
  "key3": "2JQicBjEPMH3u6atbSp5GJdbTqa1hRucGJXCjhD7EpH4Ssw6AHbgR1zFyCnyXW6UqWvFBgNdYf2JNDiUqASNTpmB",
  "key4": "3LS9bKg3vjbKd2Hq1GYbtYGEndmpPUff7pcUs9GZJ5CK6Fybthe7hGBNgyrABe416UPoGmvsNbxk83cd38APk4wb",
  "key5": "661zzoqo7sf4dqfd8MsTJoYvbVnuLMKaFry4GLkEWmm3iKs3R4NwrWc2KiJ9pM3rtmo372mQFTMdLBuYCE9g7w1a",
  "key6": "38oG4QEveSCDg4bDjDtrmy2zt2AYC41U9D1NU2DApYXtscVsZWjFDmZTTwbVZUYfR5jBsWztypc9JFH8o4D3j13S",
  "key7": "2SbPSegDuamAiUFnWybtiyjsrQ7Sg1Ea2hyvisKgLsp3VZUNr1J8DPQTdUtTY4P4KQuc7rhZo2AtLX6yMgAGw5vW",
  "key8": "3etLJ3sk31fRSiocaCsDYQ9C6ZuAARJ4du6HHcPvtRqdc7nd3Yewn13AWoQY3eDnNywuwypdEh1GxxAxWhyADjxk",
  "key9": "4hy9ZC6L5j8hdS2DeZy76tMLtddf9eAeofHB1uWt6TjZS6rHvGba3HTkKfmmMzomqfTVJokdx3sziNqLws2boXN2",
  "key10": "36N4WMf9sh2UeypRCpNCRom4Fv6CvVPt3nvxS826hpd4B1sVUFos529RKTWzeEYbbM95M27oSEnq9UMGUCCXsBN1",
  "key11": "4sFY8sjiWFYdTgQaub59FoiHMfTmF57sHcD8yVP5kcL4D5zfeS8raghtVMUbu8Eb1EiGShpDvFxkWbidGAjY6ReA",
  "key12": "5DgmrAVca8kwX3GU6MCrfUvmwhG37fnpwBfoo4Rqyp64nh2HsUFELMP11xjUB6GkzLPkEuVU9JvRb2oHMoEuiCC3",
  "key13": "3SBZYuAp5mjr9sVYQmMSrQgXjXP4b1WUTbN5TXrVrKL1oVMeRL8ZPsV71ki5QukQ2QV7gmp1KaL5qxk6Kt38VaoE",
  "key14": "5DDefeVXQ21kkWtN3nQpf2jgNhbWrJMsJohpqB8Me9UWzQf5fXfXEuS8iaJm5bAzmzJXByXN9yyxr9MCqG8WznkJ",
  "key15": "2ZS3SSaHELFhvQhz1AhHr3ACTMQHkbXYQS9KT7TAF26FyxqanZKymkGFe3goo1ABVDotuynvgNQEho7QD74CnCNT",
  "key16": "4v3thnsV8gNNUjjJhAn4wrrXnYWipo5c37KPQdDZ7AfKZpUozveNUBy17BMttkdZ9KHaJrcn89anU5z5gKchvwKC",
  "key17": "4v1U1ZD5Z4PMQpTQyzm1HaqQmLn8snaJA3ST75cwti6xUvh2K7fY3bv3WZQD2kk338SYX59yja64YX87ZsYYk38P",
  "key18": "3ZLRvEt1HsbcTw2FCYaMLjvpwE5x53DMAyJeD5Wycp5F1Fwo1ECFwPB5re1Sqs7dZAYG6jvRpB9dJycGUyVDCCHG",
  "key19": "3izWR9BkYvS1Ukk2cLQ9QR68uDn9khrDVdrTwobzqK4oWPiQchUdULog8A8T3kNvv6ZUtvCEQZ2up8qVS4LUDW4j",
  "key20": "xeQEGszocE4Dimq84UFoKndaowh3w9dChtLP8q3TbjWYQ8tHppU69cHRNNvW4VLmbw1VH39123JwBNRzk9M4LVL",
  "key21": "5MaDHw1YhifDpeWhKv13ZfnTkfXsSo7kYLXHSvhZjeYxfTa2MzyxAztcfdbuom7y6ktNCucn5uCDBaayRV68GJM4",
  "key22": "22XcoMRfTWRuXzFarABGd81BmXc18KrdpHgFuXM8YH7DBuqDwvFYSNFy313C6huEEv6Dg6FnqDPQThvjM2KVJ7bH",
  "key23": "5i5WFcLYZibQFL3Pu3SM3a8AvN5Jsr8kdAUzJUvfwrDreN38K9fyDza9wZj4wZr5H18xXSUr7nVn6o4GwKaW7YK9",
  "key24": "31QYSTzckyjUUgtFt7aeR82EBXE8wEhtbCPQfKhprWvUFo8RnWxN7pGGav61ZeFyppyhVyGsR4E5u9YFSRL7pfVH",
  "key25": "2wmL6RiEhsDvLPNdgddwonxgZywwtRBMGRN1b4b9LsFZUpVZm83oQeXUwGs2avJymUDGt1CGVSEFDFEKbt9aZP3n",
  "key26": "4H8a3kV4YFA5pj1Dr8gri1UY17s31Rv6ZoLLTMpY7TnuHHVc8vGtwCLKmSSYxAwDWdi7Tsk4uVTJWfr8WrCLebiN",
  "key27": "2FsrJpPxjCCQwehScofEG6UasNGuimP1UHVBzYi47L57EyJKwN82LYRjtrPbD5tXL2gHB3r9iHiF43geVeZMS9Rs",
  "key28": "32daBXvbJYLsBjNJmqHPf41A7Bekrg9PA2ijkNexPLsZoyqb2dfVJ7kEf5dRqVnGMv6qmDsaYfo9aPZMc7mjBNAB",
  "key29": "3XY284pca1JHuhuwk2obqrkeWTmj3HpkrC2jtUAq8bxrNRVyhZcaPBp4RsaJ8Kx7GAkNhGSQ94mUQNxjLwuoB9zR",
  "key30": "4gSZyC2QtHougua9uoSwKtzktd33vzYeGUMDpeDpVdEz1X6AVpDfPR2GogxpJi1478PqGdeCsvHZ4X47WRbBxPN5",
  "key31": "5EbauokYGDFpSmBSv1qRrAX3ZQP46KCpcsc6TtowXofBaYR9C7QSAiSNfrMwtqFEQtnrXbDc6YiSX3eBBCGJTzLx",
  "key32": "39fqWjAcfbFVyi1MR22zaLbCbwbHH7oeWdAAfmZgYYh5aK1sbbtkTS8T7NPyJiGKp2zmXZRZiDj7TYqLicgT4BNJ",
  "key33": "5VX15aFJRcDjTDAfSrfxgK29ijkep12GeDJ3YF1jAg4oXXUmRebTS59fkE5mkJ6dNQYuNvg8zG8zgTWDGb9a21oA",
  "key34": "3Px1r3ikQsfLwhFuXx9Z2mGf2NSo8ZLQRAgdXNa8LeUFrMWiXnhVwNBMyBsEsVQjoo913aYVsnAd89r92kNtxjZj",
  "key35": "2F4omeqY7QhtFtQ2wn8H7HspMsFCbke92bQ68kN5QzutXCiP8phQgGreLcbaD7SxVgKggY1n2UdLP9RsKqn4m3Ju",
  "key36": "4oBCPrdcYhqtLnvpckKRJ4dztXhqJtK927qYvJHqPsqajKVJ2rj4UkHp979YZoStJBNkYboip7F3eJMdhYnJMzRe",
  "key37": "5MDDXUeLDa4U5nEU4R5f71mzunoQjTbrcRXJdxwdhjiaNZUhRiGfPabtM264LxWVNYyBsCrprNF2Qcu6C5HbxKLN",
  "key38": "Nq7nrdcR9r1FFk3Q2v9NRQ7XXjZKxrdq5hTU3z2dMWekWyG4ssyJJEw9Ed391gRhhiBkk92bfDSrLXADYdTXwiw",
  "key39": "wgqVcU65VUxgsr7HFYYaVFch8WzxnfwV2KwdTsmxYKaEeTtTWQoiKhqgUWgAVBSzDBVJZ6nuvka4qLZWyCpRQRG",
  "key40": "3T6WXf1K5ZNhTfuNXEUTjVYSA7x8LGq95TA1zrVhrGYqje8zEtNz5BddRQfqjkN5eie8T42yAUaDV1yow5JtoepN",
  "key41": "C8DQZnUVfBReJzAF572qJT25zuPJEJHmqvwbrwBTZ7f3phgd5JkU5ETgwV8hLd52iEppt3zepXCk5cUEyXLpDvC",
  "key42": "32MTW8x2jkJbKmJHpJkV2tPCJGnyBsatWcJ9JhuLgR23QenUE3KsU3MYZaeXVG6CcWSAXuA6Bjwzv9kGFe8gvd1",
  "key43": "3DVNWbYTYRf7HpJHgqniQmK1KhHL1snaMnVqw6JzHVwvoqB2xWrB9SDM5mscYRBoErF49oRwobPxfSetCik5mFjs",
  "key44": "42UK29nQMu2b3wY4BdbRRQ8zQwpk2DCiFh2QXdNSt7zoTVyo3iANEEi7zDZkZSFTjhRUYwyxxKPDM3askFJqTzN9",
  "key45": "554i6LUfZNuMtbhw12V97FNEkFFNGCdFw2g3sJKs23oL1JaqzA7t2Pvtw9LJQArtxr2idpJAh689Bk99bcVUB5YD"
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
