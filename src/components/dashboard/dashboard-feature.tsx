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
    "4KRprmB91YEhuSA9KiDy1xviZEkJ6qsa5fvYa6MfEUYyCqxCkgtz68KgEeYfxRoRUCHm8xZmaF7fM5FeD5H3ZbrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1n2rE3HtNURisLFZ7hvZGcK4TbTwXwxknuWqBCx2FTcUA3pJPTCycGWn6UBx5F1SbKpunK1ZfKHmkHu4ZkwEeFV",
  "key1": "5hxpzBqr9eeLG9WkSjEgDxSesbwcd2G5j7LUTNu57hwUg8LpaqQLnhN8wKgNjEPD3ChVgLnJ3abMvDgpHL6882FQ",
  "key2": "sEPFs7R4wXx5ApJobfYWMUETHSunCYkGwTd2XrvhzpAfBFWBWam8DwQ7QwxQAw58QukNAkWQtpHvByaNaqJUcKa",
  "key3": "3JfGWtG4Ly2vUg94iypkExhMMPbHoLbQD9FPth2vFA69hFi52PEY8KMR2NcMP5efUhnfWQJEM5VZxbCazRSCqimS",
  "key4": "2aHB3wpParQjTKaTZB3othqj2awDiWzd7ckpHy6SC2U5mwKpsiVtkeYZ2LHh2dfkWR6MdkdK1THWWfU8RZoKim3y",
  "key5": "5kURSa6s6RSu7dGhwVueCcsFhgDzLKJzC7tFMoJVcMGG7EJwxfTwdnE7AGyouvxRKMCTpZjfjxZzb42PEudazBuU",
  "key6": "2o6XtcVXEahds7BtWYZ6RWifcZpVV5iN35F4xNWKMiDmF8b2PZ58u7KE6fPm9EA9UbHTTGeycfETRTuuvuhd9yGg",
  "key7": "2GLgCDKmXvmh1kRRvU6YQVPR6P7mTEX6DgHLiJgLDRkzHpUFaCZNFsBxQjiGWnMhAgztxMdxGagLydzv5PQDqtsg",
  "key8": "5bGBeMETqWsdJfXLg1DEqmwQ7PMb5KykGTGsxZKddayM3M5jGjbySe1fCoWiTcPiUMynXMLRBjd4u7zCTgVAuWBt",
  "key9": "3wFC8K3kA4MiRs5u7ib6QrX4uvzPbwGwwZQ5ELjazyFgebLFhzLqWPdao6s2dW21aPEYEmNsi5mbUBvw7fD19SJK",
  "key10": "3CK6hQWmC99pKyqfr7MUa5dArXRAbwLfPoMQmdNaDvP6eKFZAtnKtri3wYK5sfzkfxbzexNLZtSDv2onLByxtm1Z",
  "key11": "2Mt9Avwjh7r9jEJJvVbavda9MVWHYyUJa11Xv1hWVzdq8kRhaRGSGENzC1VE3GnCkvUPV9unUBmurwBN1utqoujg",
  "key12": "2SHtvacdLNhGot6HmVAxcEKbVMirbfDQe4XTEmkufnBs1RjKG39c8Gkpzxq7gT2qPYkCyHwcrfZhzRxuC25Agjwp",
  "key13": "4Wfu2W8x1NFTmAwKTdHQN668N1Ub3KAAcizrABv4JbNi7v61D26238973wP2QcKV7grM9uz16wQuQ1ckLf14W3ZX",
  "key14": "JJ6JDwH1bQH6oeG7zXUN87wJcvkeSSDj94DnAgzGXdbN93XJkwNiR6k1WYk66NzPTFVo27oFYpH434jQ7vEk8ZJ",
  "key15": "3LQe9JvgdYX3tMjWAxDm1YXKEo235i5MC7KRjBuaqRtjw29bNHi9pyoW2PjovuRfP8bc48UWdz9Vny5xkCJpiftA",
  "key16": "JGBWUQ2Wdh6mvXpoE5HeH7D33vHWQaimQmRGJxxHZPvdZmJXwjTvw49xc9Zn19vCqW5911r5FCo84j9iE1CVauL",
  "key17": "2dqeriQSYHXMs8Rwf2B8bSkQzDcawS8WW6xXb9amXZWvr1pxQfs37dpz1eKCKuxbr2JpdyjjmTy39Y9ZornqGbTR",
  "key18": "3gXxu9HH7zPY4Fo7qvHwr82oX9YZdez32LTgmafXBstajqwnQWjQpNzMRGV2pgynegUPm9mYwvcYieZdQ2cUEv7i",
  "key19": "cN9AZkVzrfxnjN4m1HLNshMNM5r4P8Jiyik7Q11w2ETAHGoGBDjz3nEAUWQCiPhfpQgJBrRR38cD8nBMEzbC3Cg",
  "key20": "3up7VXovpCgQrAkCwhZ5BUeW5QFsF9JaphMQeLHUhS5uTG8yZFPcMqxfdPY7HJmismXphGrkJ2gfjadBDGFCzhPC",
  "key21": "5t8SERHfYYAj3XbsnVfJwFGF79H2KDumg3vUu3he1xYiMcxmor1SLMH7yy7fnidVLtkfJ1nqQBzdykyvXovNwXZL",
  "key22": "GZdJnumxM5TC2va8Np2eiFirZuF7njdnuW2x2qaVgWwYVCVceZ5jDuD4g15euJzNgUWDKQpP4H5QgZaj2mBTm3J",
  "key23": "4e3MSsPqvbN3VGgjvGnu91P872fxec1AVJ36LKiSnDhC1EobJohagxaRufU35zVqu3HmhicJP58c3eodG1yuDQ6B",
  "key24": "mVMmGmb1tHRFTaZCacTJt9m3JcWigD8Wa2bk7wuo4u6g4EbrrrHA5fQACfPJ3Tp5TqqFAc979fWrGGacHTfJDnB",
  "key25": "62W3RMfX5JUAaKc1GSJ5LPVr3TQz9Kq5yeupy3k1aPknSoS6SLEb5BZjY9Qis1EGVMPbGwMDFHXcTKU3vM8dqbhC",
  "key26": "5Vf9honBmiofUyK8NsjPy23Tv1rt3BNH4bjRx74P6mUtzkMhjWc8S3msQ5BKnaaTW36nY1L2oSK8BJkiPUV9Vjnc",
  "key27": "3dwxgksSZrxWHtniVwYcwWE9GeAH8Nhra6FHYDfWrU7RvMPqdYwthGSZ35FSQJkN7HhfDrJK7tHuYUjtSnv8UrnK",
  "key28": "C6XLp1TTCF6fZ73y3vuEs3exif8uH3ZS32vA15H1QfCo196ZGiAH5WDvmFYUcLmLwc1pa7Qq46hrmjM3ojmYKGM",
  "key29": "CuAV6FRP5hH5PEGWDXaGdEV584MoHcUHxJCUu4G2xqekMm1AAaH2Bpv7QxzPTF3U6Q3sWv3pQzxeddp31vhcxA1",
  "key30": "32wCMiLBSerLUdR5knnkY2wbn417NhATqyALzYoPGEbfb9H6E6BSnUirDi7U3FS1Tat3NsBCCLYAGPMY9GQoLmS1",
  "key31": "5oF6ZEfLd2s1zHPeG3H46zkzciFoqucsu8oSNsUezhXLW55hSis3w7DF2sJRBcDV9d8WukyS66MP38NLiRJz8u2E",
  "key32": "4i3df9kb8uswPvmzV6MWeGwHv7CXevCDJKC9umK4Fq7MBUytWohobAd19aN3yv6wkG67F86rjDJ9mEvmvTSJ9oxv",
  "key33": "4dAn9MfRcRdqJVVUgDa8EcEhCkFkUyzSJncrTDyo186ySRx65KsK3HFtKEKywerHEXmXYQGbF6jGragQgGq9RQUe",
  "key34": "2mguiezG3bSHagjdFe35Y8hXryJx3Z1EzGDDw6ND8yrEAuDZmpggyhA8kBT8nCW3mGYbX9tHTmcJaZ24V5uVLgrc",
  "key35": "4qmvxLXsU9hSWffCM71KR9uURJScKvNCdXDGwUtFMi9xLywz1VhsFsB3QpRNuudUpegE1pwH78qztrnG5EU5ZqQg",
  "key36": "SNeYJAAVLn7JNwSofneLtDq8NvFgnsW8LdxMfCe4YmcVjocaPtkLTthsG6hcrDecbKzjwsTFftPr6Jv6gGuEcWN",
  "key37": "JfSxDLFFq8BjyMVDtgZd8XazZ2FTdehfuc7CV75kiTJhzpqhkG8chzPdsA1ehrQAiVfuy2sM8szNjtAafFMpYkk",
  "key38": "3TbW29T3H242EpJaEyHvDsPcicJq2F4pUU5CcnyWXgzv7Ys62tUSiN7VRzrvzeEx63g4iwTJ89W36aa9Z9A7Vqnu",
  "key39": "3xZHgVENmbUujDrUbbdJWNEVpPiMEw11UvWDVRmJv8gSrcLqFUChUfLtGBYanWKYQaxh7agLLPvXy1VWnVqP3zrJ",
  "key40": "3X4PEgBVRMyK5k9E5PVX23BQd1vuyCBC4bCUUxydTJwyVa7Av7bf2S67CYDD6yZvj6gyYT52touPBBgkG39zjX9i",
  "key41": "67TuuRiELLR7XTJ3bRbBdp2Dn5ERtTT7zZSwStjyVxnv5WX3JtZNm3Dpb7hbjV81if2nbtzoghnEwmjQCiNPLK5F",
  "key42": "5nB5b11kZoBJ8CUDaW8bQzESJu6RrG2LFUA1NNsNPwdAgziLoRQDuz3kyizwvm6f31Hi5rmQSjFKXUmxwcJSx1au",
  "key43": "26aELrr8hkWS7czPTCRPN41FpTXdKumTykMBAagtTxqqKgyuSfqjh1W6K4LiFXjT7fGNtK4FTby3e9fTtisBZRtj"
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
