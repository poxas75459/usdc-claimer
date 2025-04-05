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
    "2eqrQjXpKiVeKmuPhAyb3aXgC1ERsK4o5UrHLC7kyScJsvntkvZKiUEK9xBmu11MgtkZn6hZWqARFbPEFfhZsWMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVkFXSyQjkngv2GGZ4YuNJHCdPZBe85qt9sDngoqqxEWvnUtSsZ1a4YxLtxaABzLs2WoozVCqcyVzmJiJQFMUCz",
  "key1": "458MooXG1npkTcpurbRWoYzuatmwC1e1EEydheAXEt2WYDJVkz9d6D2LXLg3H5diQw5iqgjDYSvTYZzEAiPFzch3",
  "key2": "xvfwApSnWQcDG21uA2zTccJFDb498ddbNfUy1HEK4cPGm73pXWCuoy44nh6fBvqh6ZjPpq6z8RGUoz3YhPyjnVS",
  "key3": "39dETSWKENNnQ7JpBNr2QHksNZBwGrUVxHErAM7f95pwtHYbCWUHq4GzHCHsAzgJRPw2UUVfgmpXYb2TeGaVKUh8",
  "key4": "3Uz7T9n4ppkHmEDmhLN6rvXQyxsRxyh9VKeVVPbGkDpe6WUbEp2APwKhKLF6ZscCPuP3PzBDZUszSe9LGxwZDRYH",
  "key5": "3tEbhdsXhG8weMoSMtcZWXjbijzR61xv5kjKEfPaPaREDrEQYUd3DhFWKePsGLAjW3zbBVmbMoMnctvpPHyEsdvr",
  "key6": "4uZbcg8BWsLZmHx1m93fj7DbaZCZwt6GapCyaRV1ggTBEgiHX8qYfHdQkXex6xV32HVKRFq1zwPhJHSvtKWSTugo",
  "key7": "uPq6n3SgTxqeyd8jr7gyPvR2DgHqxbWNJqZWKmHxhszweKCS2dTVEXVxhRZYZ9P1eSiAntwSbMMMbL2tM63aUc6",
  "key8": "4vUQ7zCZJYve9nfpWKYvVZzaptpYFRMGCZ3211yW3xr2FZdz3uGtdMGzd77oMiTLjqXh585sw4VAs8fC2GA1tkjT",
  "key9": "5k9mceTVq641aK8RQoSSJwSM5GBDw1qkGR4xsUESbfP7fTmFDKM3uNdcZtvP9uVe52H2KoG9duucqU2zJHAwKwL5",
  "key10": "iyVMHiuBNE11PqF9aV1fw2Bg4z5cVDsChjTkc8utsbr5m2bevbuuHajAH65fFCsWC7EjKoqBQyT3orxC9k8KzLH",
  "key11": "5Z9socjNyw7Rtp1VRfHYMFqzh9bdCKxpvGuivJiU6MARq82xr3jR8dGGR8go9WsqezpAv6XBmxQob4K5bdUevmX3",
  "key12": "2QwufYKWWZPBwDZdcbdGomhCwLHyLss95xiT2GP6KcgB3fdbpDDCvjCPwCm3n1Sz8dxZH1diBUSVh6CF5yBnPFBc",
  "key13": "2CHcytAJ94YT5S5T5ZiScFcEA7uS1VZWNnuey67rV3boUvVryHGSivRE7d1XStznYyYfeSPH69cYUurTUxQFk7XX",
  "key14": "3i9sw8kCZ3XRzpyZe7mSKvd6XKLCC7xqxEiPUZw3GGnLsmg9fFs2Dy1LnbNSvcCkab5W4PiK4jM4BDjAx8pP3pPv",
  "key15": "3gQAyErwnVa7QUB1zNki7eaV1ZzF5CyzU9qvq2apkv7pxbbeMDr3Dw6qX62zrcaViJiduuKBCY7TySvGFG8bPujX",
  "key16": "5bXLSNVDk6bgEjyrQkeaFp8xMqPWxAA91JVFtoz6Yu3hA5buJRFDGbrsq3XSESULZ9Cx3R15aJUR2SSV4yKd7x9U",
  "key17": "2h4CfEoJPLYjwmpw9e26zAUcRuaLDNRTTUYAMuHawv34Uj4mxdJC8qkJ56tJrrTiCo28xGKgNq36vNLLF9uECrvc",
  "key18": "3AHENoisMKA64PwpHFpxBGkzgEGmJL92VSVEQv4MtoV2y3uWutuCPzzQUxgnmaMF8G4gan7wByqZsaGSPZRuaAUq",
  "key19": "3GEXZDFoxUwUcRudt9EuF2qAUhnTPGj9YnZnmrxE2mruCMwJTfj4tTqGDsP2ziHWmKSiCFCms2GoV5ZRVA7C6hqB",
  "key20": "3AGrCVa4oZbcQktAobBy7LZ4gRrkGiWnSP9DTBF9ZY3QBP8NCDtVTtw3nD43YcVmSDcA8zEYMR3gkGZhM1STWbsU",
  "key21": "4pxxa9aenhrPMzvJCevcRLTVdX6Q7S63UGexCSP2S1XmDscyyYhXmAcpmAY2owRc19pp1LT6gaKJadRwyzbqvtbQ",
  "key22": "4P1Be1p9fcJByRU87eTr6vvvPyyhWZSX2cWMx1rgS7KJBjHSLS214cc22sQR3t8GeeyvVm5jhqEmsSYnUtzmXxbK",
  "key23": "5uPtT5p62rfD2UuHwvamTBJi2qPPHWohD8NpuJstE4AcYyrp1g7SettrFcBmXTK2iFfffFjKZKmptifAPLquGHBW",
  "key24": "3zBEhDCxtQp9BVMSSLAUQdH5zMjy1XrsAdCwWmApd5QujkAPR8fhqXUAHvUctJPw8FhZkjJRUWJszM6iVdKRYKtP",
  "key25": "5QqsGw7HgsHb5RZdNkj6nPwT4rPGFkqBBnq3STnhQFc7SCNSmp9jKwDJhGhtEGoLj2VHHxUfhpbyPiVPy3CVsmrq",
  "key26": "k4KqCgRsA6g6phodU4ukbU1TE1oXBFx83BqRKsuqieWkt42eCQYuMGBCWnmbchj6CgS8eb3b14ADSpuj84iXMD6",
  "key27": "2X6vmLHxkUhpYq7amGeaAmxT9GUDfbN8DY4A5cPGRUPrvrzY64ALcynHZycddefNB7TuBU4PrAiTmY6T9szCRkQS",
  "key28": "23HcsC4nWSqfk2AUZTFdn7DZcUDeHQ9irCKfd9VUJHWGGxa7hBwE4U2ysHErZspGUtCSPRZaQrmgTmyGv2TeCTq3",
  "key29": "erKSn6wtHAFCAoUfJPjRGcqX23YWZL45u7URqczKxNQKByNj33EsLEjcboehS8EL6DgU7YBPHs5QDSxR5LYNR5s",
  "key30": "2YGccEUSqvL8AuZYiFU8HM4Dbw2D9AQRb19TorggyWvRDPtMJkt4xUrNxJQQ6Gjqw6CK5RENoERDrpn5CKSKWxeZ",
  "key31": "XJmPPBAFb95EVDBvek7gjcRQ1PS4B3zFKEMtvQca1B6VsWT4aSo7r985umrJ8tiDSXg4ekAFhf475U76eNpu69Q",
  "key32": "7yZUkokBR5hizDZXryK8Wu3Xd8jVvwQd9WYzsaSx8FCn5T2wFLzLM2paKUgJeqvsjdfwvfyEew91SKbj3nctDR5",
  "key33": "4D7mVZ57szQVCCRE4RGYj1rRitDfsj6awNJBkf5VXSi33E1hMkFXKPH4jnE3HoDywMkswNdA5oca9g4UD3UmxNg1",
  "key34": "S7UZ2UxVjyTdPGBBqHR25vg12izTTW1srBeurZNxDhynpXY7kNPchDtYpjxRwxs7tTxYtDb3eRynqv81nctVzoj",
  "key35": "3fpP52Sm2gYyjY6YYk8ZW9dopdWTuW4x8x9YUVL52xcJJ7yf5EC27nvVFtNjGdE7Sv774ebnD2FaAQazABpp6w3c",
  "key36": "RXn3uSUfvrw4Y8cRp9obkNYjBt7NpzrS4f6VVTYGLEc17Deka5oriAADhbvrJgSKWkk4obkRRAwGVDywvcjMUPp",
  "key37": "4ER5jnhPtdztQ4Pt9xWuAE6s6UgcdNUWYA3b6QLu5381wusF6Z8QdtzPt6mgxtVjwP2sAux2tj6HMHosYpcX9nnW",
  "key38": "2nhNeWz4quHLUwhyW5HKTjJKGQc1p5hNdYJvQWY3Mo1LXxRQD4rSQmpYK6hmyVSNcW4JHLN2u1ksK71y786s2HCe",
  "key39": "5GPNpTVsUadcztEr2d9khFSm7QZXNSfkad7P4YMtHuREtzjxPYNW5JULCNBqXh8k2rtKMNFwL9Zhgz5mLjFEBCKE",
  "key40": "4hdk2pQk4pJwn7uHsYFzCVsnzZ6ezKHG2HgKBhgZ4hEgSNMwenyiTit5WKjBkeeHbXX3q1hxHNi6paTgHE5iMFPc",
  "key41": "XBF9THZmEe6CLJ94AnfNVPHDFUfVKTivLJPu9sP9svsYMyvo8jkFWLX9sqFmANKFMhuFkZQVn6dxGutXknLT9P9",
  "key42": "5rZ4WT2bHNywbFSqfSmhjEF9b2AsuRAhvQSbfhty9iPc7p4ePTegY9ar9Com7uNVwwLRLkuHFgRQAN7aBwQ3mkZF",
  "key43": "mBQacqw3Ywqc2odtcGEMVV7ToV8VGpsPT4nG6SM6EJBHFxF9U42ekjC36mvt7k1bA5hbxfh8DkMqcikoPdD9nY7",
  "key44": "3zkShZ7d9SLTpUL1i3QYHBPnVhPC4uUQEaqso9tY67TXdLFCNcXgV67x7ShdX8MJfJsgJZik7Syk1P3F8AmFA7kC",
  "key45": "2VGzN6v22UTVf3anuawNW5LNEkEbZu9P47aTseTwdv4CCc4dwQQeSYmZHpoAcxjnx3eGAuerMQSZ2fuyKU2UjW8P",
  "key46": "4CeJaoy51azgyRVRfvuE8Tss8BvDWppqqfGqdbV6i3Y8R3Wjney3TsNzrxvEaHkwHnjcfWuGDDiqxkqW5iSqVHbE",
  "key47": "67EziHBd6euRdjPNY9oHDktWTV5WPk8J1pcdCsCiUXmD8Bqmf91Vg6tHpX2A25uejbpH4shAKCEWyegkHZyQpKpG",
  "key48": "2ci97Uz9dqqM23hjkHkTewQqjPSeEzPJYTSsCtY2KVC8UgDxTupnfQ5MDFsAQukuvsbT9ieizhmZ92AE89Kfg3i4"
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
