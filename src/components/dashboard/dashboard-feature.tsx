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
    "4oNrG3zmBudMEkKH9pFa9bAX5MjtJizq6EPLEatGfVWc9xUpUDDiYY5cdAgC9pSktRSevqogwNsStAAA87wXU2B7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLAwcCxDR5fzrnwwdX2hKhyupJQ3jwvZnUg8QTWMp6UPYqmj2hk38x3Uh86hksgef8aKCYyBnCjaLEyaC24z9Ab",
  "key1": "3JLaw4fjeEkBu9W13eMG7wcUfBRWQtR3j4CVj6n1vV13Gjc8Dvt4HieUURZTi8XSEuYMFvtDHfdmBfZJRK7qsGad",
  "key2": "2ipvWD2DBR8REdKxWXSxZvhJhnDwszJYvxJg3qUEe5YMhnEkNsyx1iEafAfbCUiooa2YmpP3WGeTsWHXgxuCHJJV",
  "key3": "GS2GyMmRC9qnTS4i9782EbnXz87JAsCXuJG1hVM8Be56NvH3ohvGkft2JTsvuSY1VC1ptgcW2VC7RhksfrkUb3a",
  "key4": "goS5tViDAC627jg3CaVRBYH8kPPLB3nhEB6AFhtzFQMo3ssuyHdKb6bD1VN8idnJJ1wdKBuXBJZ8E7vKtdp6HoT",
  "key5": "58xkJRWo2uAEX7njwDB83nK9kvVbBU6AtofVfEKyiJuxBhu4DwPGTKgMWPtkPbqnRzUfHCs1ofjdL8Vh2tzPqoBn",
  "key6": "2TwQmBov2N2NR7AiPfRWGGGccvor4Z7UNmuYFWsKoxGTPGvN7NHghs1Z5hbdmkETkYdYGFcntbHJSKwcnHCgYBuH",
  "key7": "47bTtnp4CyL2iepsjFt4Wgi6paxv169L3DcwQ2wkQbGaR6CqPz4UPrhho7DVgvsorVDdhiKCq3rUJtfdavwKDFKu",
  "key8": "3PVqjc1Xo6UrgeU32rQZ9wmrxfC1XutDQtF6Xn43UsRDoQKLHprioXEWTxfpmrXedtnRKNgSt2RNAkgkZKNP6i7V",
  "key9": "3keZqe1r7f5HKqJNb8BrdCntSoFGAionUaFND5iCKe5ajMWYWahyJuhNcdK8HY28k55bFN5fTLTYhTogEbEFP543",
  "key10": "czqLbooSio2crJGXij84VR1ZWSyndpeESUT5Rxpj8rWrSzSaTmGDZvzrHRYcFWRGknGz2ECRqN1Z6bpGvbbBo6r",
  "key11": "393erezqkhRrynt18sXmJsRgXkPHDFWxa2fRrsiYsCzBj2cxprD5khrSSBXd1Svt7X2BmuMKxiM53einFomejhmd",
  "key12": "T98CBeXQUYFFHpBQPHc8BcfjU5uBzao3tmwHopiZenszLP5daT6SXSx3DHALw13pCJ9Xt4H2K6wE7AT3awd3dK3",
  "key13": "4NGQcwVXA9AdGUSJPx6NMhrnsDrnx7JSRMJXQKoL4tXJWSNpFZYupvpRP6RJGDu2AL7YLfnvLagc4utzxTDYKjjY",
  "key14": "4nW9wMKuaSgDL7TcttDM6GKyDmvMYFggDeCCs1akBY1oDVE5XCJrbFfigAFYcvg34j3vS7Bhj3uieTHSo6nS3tMQ",
  "key15": "3RmMxuBFL7PrpH4NrsZFdLLnq3j7yjbTHDNRjjywMNEd8XtuV65EeGXKRCQnzpN8vjUohNCmVmA4NbW11sHiXuZM",
  "key16": "15MNJGP9EAyhnLWpLZwwa68BzcUyDszumGaCT8RkjngJ9s85fYSenmrKhtEzUXixRnV2qN1yWkYx1tcTPbsj58Q",
  "key17": "2inRwSKX4EHKhVarQp6VhXpEgosaWfh2Y1CCmge5Ar6q9XfahPnfEedQqtCtDoW69s582qsahJwrbaZB7WeboKGQ",
  "key18": "1VCBF6njrY4cDQTEFSRvcxUft8uiBG997RdgpKX8Q6UU9Dh8wJWCJGsxQPNiRNBfX8jWNqQFLnLFe4rnP9k9ph9",
  "key19": "rTVYH58nh27Tufy4PDjkv5ofFpecfzsC7PPKkkHK1Lh4UjbfhiXGCzL9z8zgfDfUyhSijvt28DEgsZoKo1SuMp5",
  "key20": "49KVFtqBGNqHUDNXfjQBHmjqRG8y43mGjBZsHg6BcZATfKqa4N2sWpawXpXdcMKvvcN3nHbP6jTVESFswQQwLdJg",
  "key21": "4LEb2M3iNHMPLiDjgGi3p6MkY3mc291Xc6LDjcXAj86V5Lc95ck9NPzWgFwgQwjpyCykQ2n7mxFWUzRLELu1XE6g",
  "key22": "5NGyK4FUv2SC7jAVWprmxjPRcY8X8jD7Qj6qg93oRSim24S2XAdwmEErytKWMBBXWua7eQPCWx9knJJb3soiGCLx",
  "key23": "5VgfLzqhBS8CZJfw9ffhhXMztyWCUYMheppKK39tSB8ZLRVtwmM42ioiUZAYPCAdtGMoHcTf78KFrDiRFqguNbHi",
  "key24": "4bJ9SDB9DB2NdpX8WcJJN78qHoJq5Brn973KnLaLjLY6gwYmTcx2p5Q6dUmCHMnqJKs4aTXZjBif9xijVUx464zk",
  "key25": "3A3TudLwrjjWyxHEs6FSx3pM6D7Ezfr9Mi8HeFGWHue4RGGQqwTfhqmhUvAJscGAK2tXyYVZZitbRKdg6CDGciz5",
  "key26": "26bvjdctm5qcBRxY6u3QSisZvCejxaQeBJQ1U74C5EcbiWjttT4dYfunUdPeCHu5egZLiCu7pCZfh1dESSHUGNJa",
  "key27": "e52DZ6LktS7fte3tmmPjnzUCz6wyLtu93UYhWGH6tHSYoaMp3U118eBwkyszYMcrEYdXagRgWV1ZvJQsThnmmf6",
  "key28": "5rvQ91JhnMQtfWPz2e8mn6bHVJevxNLH2QsiGmoKmon9TNp5vfJ67qm7NPMxTg2Ac4jcme5CHqnGG9PxUQDGKVRg",
  "key29": "4QR6bPSPLCazGDj6TqBQYgsxq976FFK8EwfrHdpi29scYA7XEuAZcy55n475px4dyW3F521aGHkdG9ML5U2nfCwT",
  "key30": "2bqn4gqh43gdwVbRDosSHG5mG1FxFcfQn2MoaPb5EPXuosGcbmfA4ovqWuNkikpk63oqTNZx6AvuBaNm92n1EwBo",
  "key31": "62qPdHtt9oCLjhtKvcbpcrrWz9QzGQE7Pq12vLAGuPaQ6DndPTSkFWDF56EiJfBAkwwsxvqHrRkr4RjdLoi4wTXy",
  "key32": "4JJRsyPLJnchbAUmHnwD1yWebRHSNGwPhvb6wDZkpMVEok2UFsea7Gmy5pXWLgCfxYm96q9uGertwzspRS851upc",
  "key33": "361JYwnFcuyR4uetKAxtZAx8c7XiejmHR9KbHjrbu432NFWuc7ruCepsxzNHJvqs8dFXMweXM4aEWF9X9kj1EEjE",
  "key34": "3kod8Fei3bx6jQNHgVAgXhM6WAVE8Qnh4pQQzncuHP2vERuW5eB3QHoN7veCdVBQr535KLTe21N2vga4TmU7w2Qa",
  "key35": "4jzbLSAtJmeA5PEHBt9yQZeZiEBErTDQHsa1rbxstmgRaau1RxL66LZET4my2bx9jJ8XVYzLFQQiF27PwzczKe1x",
  "key36": "5hCTBsKy3wjrrDpkBnmBaYC5rwMvjcK11NtF5mnzPjvGLZN1PTF6RMR4iLNiVE2PBnv97x6ieRF5SaN9Zcfsk7Uk",
  "key37": "3Dt1xL5NZNwyN8c55YNPni4EirB4jrgs4wB1VMHtzRZ625QeYtbAB3LwZi9fmbXi5Za2BgCEQzSoHTAu3ArZvtZn",
  "key38": "4Z7vWHNNJjEzQNWUDaNmoH798dN1ccjh5oA7xg5NTENxLgtLwXKVeTdeH4VLpdLLmxUAwBTzvbYKKyBNHevD2sun",
  "key39": "3aq2jzPWx21JVVhDm6u6sBLc69VUacudVWkgzkCLyXiazi2juuRxdaub2cvQfQowJAGDtjVkLAjDGXQ5rpBAsz1C",
  "key40": "3prjv5TdjsYxgUitueCrA1KeomG6P5iUUKDYUkuRhkDuva8xrRGY9p2rvvogGKhL8Up7KDCwEfJiYENr6UVrQpcH",
  "key41": "oDEtuLkkxGeEAuDbP4yheLin4fGf4b6HviHebQbcUXVEEtcxP3r2ZigjGwNGTNNRCBQvT5mCc4RrGHhLcYgShRV",
  "key42": "2cLdS8BQ5AuGKXoz1QKqPCKpJdV4vwy8mYFVA9jQwSzs751Kmg8Rxv46fjgvPnQT8xBLjYC7dVhWmrRLE9obUsg9",
  "key43": "4zFFBpAVmqBrF1mi3N7izDw1PzD1K5FvgzSyxwR25zEPEZwA5TmGPYMZyjCctA8fMvC8sxLvPegX5KiJ3cZvsRGx",
  "key44": "4KomA38w574BiZbyh3rKexVgLcYCvZC7d8tMDRW2g8Y6yjMLWMXHx9SCTGKw4aX31XcbDwqomoHa4Td9hwWSXVAX",
  "key45": "67Vz5QswBYFo6qE2EKvuNVQ6aiqxtivjHwao2moF6yY33xj37b5BJsRB2Rt5FbntXhH9GA5wYFByPjtT6XuyJDJe",
  "key46": "3WAJwpK3kp77Kk4jfgyQ4T8vtX2jZJ1Fr24kUJW8xynsEkNUy7gHsKeHX221mA6aF2JPLRQpGzxrRXXzjttBBELQ",
  "key47": "39auCJz79HJNuWMTpEhrCfDxa4jwdqhucR7HSq6DsL6MeRj6H7QXkHE7ZQcRXxjPeZcUo8yNANebse6D3Uo3ofEk",
  "key48": "2mTTC5Dt1jPnc8m4pRgmWBoUUZsTyNbbyCGs7tau3Ct9Lj7CPrxt8VgZC5QMqFCGUt5ig8iUSoyiq4B3fyLuAHGv"
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
