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
    "2AKwczKstDwTvcuZGJqhmRKbiLBbpgkKoYV2a9Nt77o4BaoFdhU7XF1DGaY1MGyuwSapzWuruWn4mVwqFiHtJdUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NM19SLxfCRnaAGPXCt74aYWpkKEEdNkhksN4r4vHZfp4t3qHCcZ2UMtKWK2UGmojBWDCmweJySWGGYtwXD5nDy3",
  "key1": "XCPoeRDZRokT73US79Pvr9gQE9W32v5YWr8AfxJ6DugJHXGxdask4YkRhKaQMbq9Ga5Ze7ag6v6sdACs18Hrdti",
  "key2": "2A2B3tXX8ATWSZPuL3jd24x1SsyTN6pnBALr9Dtx8RMZP5PuWw27aMk1Ge4WYgJc5MuQFTjBEs33K42ryA8Wd1jm",
  "key3": "3Pdxc5XczZZmTHX21R76CtEK1LGWVZdQTBvpytVXfYJ7PsSw6R8NRY7rgytbb8F8WD9w7HKepSKzLMY4WHKQJ2Md",
  "key4": "RTJfKShMmJDeRAZwoh1A5wpFpWKqjbiw5wTeg2iVVUxMkok8XNJmW3zffZ3oSAc2JkRaEPLWQi3QBZqpMV7yocR",
  "key5": "5PEvttq9wLzULEwofsn924o2Z8Gco3peZ6WursLr1oWj6iuYdsemUh6YdSzJEwsuSn1bA19dMrtatdQYS32hv7yd",
  "key6": "62TAKJuXesp5M3RizEdbvgUb5YRyuu9vw6j9Xx74jdmsXW8DRjs8PucwU9E3RWgobBL6o4kq8xFouDn6X2Qs1Nha",
  "key7": "2qbqaZ9KGTTCeSWCDMQgzbDqXgRdrBA24yTGQQUzKFXDyMabG9uzQNc5dy8aKQGtQireDaXj56RRbhiqmVuHV5eZ",
  "key8": "2c7LdCNnEN1v47kf5Q2BJ2ccLHsfL1KQPeo81YfuFL5xHFzxxq7HBXvJuCXcRdHfS9vG1goFZKhdZMNR5FTje3e2",
  "key9": "66V6YZ2EBaEtwUnT8mePX5mWRpmUjeUHiG87zeWopYj4G6GupkQxUeZxXVks9323KNLnkNJKycPUA6pvs9c2bh2R",
  "key10": "3F3o189zBsLKJqGkgEhXUzrQ46foQpBswmfZ7ei7V8dfPnwyqiCVrNVVmaCoWx8LYhuEs6y6FNKxeMXD6tawPaS8",
  "key11": "3yDs67we7eEaMy2C9wFV4PdudegEiNJtpv7g7Nx7hNNKzgnnouDVkJUtRb2Ak2jGZSWXGbZLcdZb4BGvaYtLbqPQ",
  "key12": "25T5Awna3qcUCqS9Mmnt4nrBcswxY5M5GnK5JQxfj8JW3bscVMAKMvvp7GpcbhxLNcybp3jL3X9KDVqN6hRVBVKu",
  "key13": "4WijKbHUEhFKScTqoZgr36ny4ALjghFFGery9RYbvBxfKaCERDsaB29WHY6w8VcSUMJMh61eAPnLgdAogrMBceFr",
  "key14": "45nVZZuKHysQWxRJGyJdaf98T7qtwwP3tVrM3d6jVDwViuMMa1aScu9Xa3KhAa76Wqp76sh6C7sTADKZJuDDLnze",
  "key15": "3mNEm3Dw8prw7g3XiUAErqKHNUCvcSzmZSPheuEfzFfYawNAVBgAdKKTU81iH9KztxsqcTw47M9ixwbZKW9f4ZXu",
  "key16": "4g4uEN4dhuBANq9r2frKcy7HHAeH71WpJ647Nd8uUvWjQtS3e98L2Gyh8hJsauVetiCATiaDWrmjioCuDeHZbdg9",
  "key17": "5LAfyH27c7kYMQEaBDZeCFT4gTLxF68M5MAMU8WecZwSrE4seSjPKBrRudfVRmNPhqYfY3CP9tYhe6o9JCUp85US",
  "key18": "2b612NFMBZSLQsytawP8m3nbKfqBXgwjSnMwQTki78WiqiW5aPSvBvZNKZrz1FQ1i8HTJVEssKUGExXCc1X7C5nX",
  "key19": "58ptt2NT6RrHorSoafA8H3oXAra75Da9NbSmQEvFA6edr8E9ueGceRQxPTsgSf3ZqnTcTxAoKoJjwHGyCpUCG6A",
  "key20": "3UnVnog3ku1yJU4rcXRJaLwLQwqkHUEU5myaPdPi9Nsyzfb8RPEG8nsShJrN4H4U9UjKnvkAAZvFoCEqnxdSuthn",
  "key21": "kuutGXaYHeBrE8PZN67YFK7F1JSWpnraAsQF3cJNz7yGQabfshsokN9yLneZgVRy2aqJ4sgexnajkSuospBikR3",
  "key22": "2oPmYhK97pwWyE8B5w7JVFS1naJaHxaArSkMpK9JqL4sd4X3XN5DEAeHHxHt7ymdZUyXy49xcQ8THRpmZzmmA5Hk",
  "key23": "wtq4SgSvNvL2Dqg55EUMyhbGZH5Giv7rueSdnXKChkc4xhpmTszZDE2M9GnttqZLxrDvVCBydj26gKGhj3WiykL",
  "key24": "3J9XLXKNjyi2PwTXsWx3GpFsebt6R6Np3rQ1FYb7ZAhQ6gKcSrW2oCqBRJgL8Nxpb8Ft5s6amdo8x6dSr7PzL2Jq",
  "key25": "h4q7pfLtPTzaWhqBhQGCi36UDX6FBSUSRJKCyQdABG6awM5xfuMRLY7MKnqKxbQsRUyCvAnSSpVWbpFHKXS1not",
  "key26": "45XMgn54JMsX6Gp3DWa8fk4HiHQKVLw7BshmSaU9AJW4hCaQDLWSJ7S7TjTQ7RsqYMueDqG8uxonhz8jfa1xySm1",
  "key27": "2pSPraDhckQohD4uFiB49Nt9DbLiKtHbZ9M1xH68B9X4Bqn3vrn7xE7wwG5JtzsCdDTGcyT4GF3bAficHb7Aupja",
  "key28": "38oBntQVfoEGUK58QhALtqZeBDdraUeMtbTcFzjuRmcPKcskbECXr2K3r9NFcWN3PhCbi1v5Qie95FEu62jU2Y2y",
  "key29": "4W79pUNpuQTaEfUAXeusU3yFLNozkqKgT9L1V6pxDaC1hXhu8XMt29UjDcJGRQCmTL22sT99GUKt9umWioDW58rf",
  "key30": "XaNC4xfaBZ2xJBr1QSgGGEu25VXennyovxtUpxLzinFvpd3RHjuXytgTUqmuMfLF6j5JXPw14zDUEBQsxEGK4uV",
  "key31": "3MkM32jaif1tRDiBEk2q88Jmq6X3uSgqx6YyRdKZ2mtRgTP1TUcqvNC3FRLCUkNSsfQXULWteKLtuMXQHz7uabEa",
  "key32": "5S4yWst9tUpmaxWAQtFHfECDELSE55xB5kJdhuEohJWo8SAeiCvMKY4MsWmLP3iX7GFjzdVbc3vYMyRdwUURMq8o",
  "key33": "4Y8dx8zb4AwGn6gKQr7bB1ajmzyytReCPW9ejs5gxjYt1TQxkFK4ju2oxGZ3PNipvJZuJrxzVppuT8XcVCGzzF3b",
  "key34": "NdazayQaBHtm2K1WrZNy7DzGPpgphEeE7ryFxviRPhs21exzv14c9RXCEdxq1W9PDZxNCP61cusifixpbhACDoS",
  "key35": "2jG8Tnw8yhqVGobFHnyo6qfXj3dJoJrpnAXAq6kPohXVhugkV6a6oabh2ntwKpEL7mZV7onhyWRMFJyZ6QBbTBQn",
  "key36": "FPoJvmvcdsAUMotFR1JwF4dqRCCbK3Y68XTr5kG6od1ouQqW3JTWgGCv9d4LYULaFfXJu3KLUDHFaFCTD5L97P8",
  "key37": "3Zg759UW22wi7oYF19y9BciHeykXXbQfRQvLVjAoE75bYRRJUmB2Q2bcjb55w45yRFxGNUrFCY4KUTuz4EddRGMs",
  "key38": "2oXQ2M5efnFWh7jTVj6QtAT1L8Q5uLTNRn3in2uRUJoRquVva4cVSBbFKaAqaUyNzBRUBNAJDydTqaWizcVEyAb4",
  "key39": "3RFuPeDYiSxcSCqxjvi5anBypopzXmX6YmkbRcn37n5ggCaZRPFTmRPSGpQDcBnN1fQ7Cs1KnwvhJ47MVNhr68aU",
  "key40": "3ZpXDmBuSA5RmHR5AYLpZk1cd8zrapqX4EVDAwoyaDraLqP8B1UPrtBhkezeaq83wrpEyzQ4vSTqbLFfYRWq1nQP",
  "key41": "3VWeygyTLtYoqruyJexRv4dbxSnEEPRR3nVa4qBWDJQFh78GNAB4HVz4wGmBv8DeKKJtx1RrMWeybReyyDzPUfZ",
  "key42": "52k7Ff3AcMbv1ZzStngKjgJC9gZfj9yXwfSppshsxE38PH6Y5o6ouCVeEGKvkac7Tc4m2Cz4W5vh57HZqAVwGSuk",
  "key43": "5msx6teWzdJXoy5WGW6Q4s7nyjip5ZLiKB1NFCHYnRxDgFis8T45AooFHX8wPi8W6s84CFAHwGvskCk7DisXTYa",
  "key44": "5FZvdnTaA4ohAAnret8NUnk5YgdfXtC2DXGryR4qrqomeaR9gbi5QzAsMdLvy4KboGvueanfJt9p1y4JUndJYe1B",
  "key45": "3dgBV6UsdJXo38BJxAhJyBiniyfi9qU9boieN8Xv59yoUGjK98e6mgSZyCjvy9JsMJpBddV9qM5EXK1w1NUAKAsA"
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
