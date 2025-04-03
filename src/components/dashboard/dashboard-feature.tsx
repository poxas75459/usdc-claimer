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
    "32EZBBbKPWHV7eAobbSpSu1Vt29ddEXCrSkJK7mY1B6M5fMJQdLoMjajj4UZCngnoWXgXRgzFCEZ91RwBBvmHwm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kx1H3odpctH8Jh2sgU9jtf66oqK5yXbZMnetZJEboZF7NhJEvAjgn1vbvbhNt9WxjHJznkyYSE42tftjjLKgd1p",
  "key1": "3cj4QYPHH65w6pmVbdaNfNndodvjg1awmdrdUw39CCDaSYchJSw8FJaruGxnrB7qY8cUh6JpEPQY8CDiU2NgryBC",
  "key2": "3njiYeSQoqkJh3rTLbjrFuHZhGGzqVvcTv75mtkhZ3V1e3ip3GbAQDjN2QRGFLzkSZCN7KcU5crEjEmHBpummMuE",
  "key3": "5Dyw1NVQm7bSgqmtdLtGCM4cFvmppKu3GCGo8Drxxvb2CbGEiYuN35eEsYrxfubHhskEiBauJ6QuyufiHCYY9CzL",
  "key4": "4Vy7bawnzgVLARxFwcTrRedswuWnS8r7NMSdGrJEnJwAgvXsfKhvgucP98pgVRffwRMFU5RDwdVCembZ5ym1D8b7",
  "key5": "3M78FijhVcR6HuwDHpPpsvG8JkmNnPMFbZVPNT3X6UcZPFt9qM6g9n1KJipnMz5tNfvS1xRDyS3Eg5WPGTVSTRpU",
  "key6": "SxqVALwFSSvKZqy1PcgHeWxi8APfGPurywNPCHYqbvaZUfMK2Rq8JvQR7jmcQQrMdc5AFqdx6WpZYyEzab7kgoa",
  "key7": "5RZHaboFYCG3SiXU82L1CTU9Mnm2U7dgiMDxZmM69iA8JpvTkqYBuZ4ozxZV1vXkLduxLXDimJvFsocqFLtdCfCz",
  "key8": "2NDjDwUpgS3jxqZ1VUNQHg4nYcs2Um5c3HsfJKgAhfifCsXRJ6pBtzQxhCA49iQXnsb61ShN1xFioARxDVzXWrH6",
  "key9": "3bYNH6hPSK7Lj1VGvh24KQGLFFWSQHMA1CfE8w6CEWbqUa7zaqoukKgWXP4ipxVSHtHJfTvEdK11a58bGY3T5icJ",
  "key10": "5TSVBDkPhytdgv2v4PoXYkLoKXA17pEJicop7wuM759zeCc7rRd22xi2swPLc6zaftznAQLqupXMch91iXha3BVq",
  "key11": "2y9TKoZWYvKRgap5hhsWmy1yogWXsQQzRNT9rGax9f3uZ9KiyuH2fvYqZxvXjPYsVnZ3mGBAY5618CvYDHnTBDDJ",
  "key12": "2Cov5si44Q2WouHFFq1TbryCrKzXcCr8K8Wq8VkBeY93XLLDhVEkgpfS4BYyJXaSoqTtgM869RhpvGUGYNRRt4Kp",
  "key13": "4grQjUgBXyMihuJShKXhopgccD6VfwipyE7F5rRX9pL1ygwKvkED7BtQ7XKHgR3eCB8WneTJurioW27y85GCHzBx",
  "key14": "4a2PKsoL3VRfZt4eW8ae1NP24x9j7BC6Pu8QjjvKA9i8gHDmrgmqqAfpRKEfuxHqQkEmdRyiCqX6ECyJigRFf5tn",
  "key15": "5LLnDDx5bgqZTCAGoLL1ZN3rYGiV6vQ7UW9QSigVDqpzzJRkZrqjxbRqguWAMxEvpNu3JN8rNN5CK74g3FLqZYUH",
  "key16": "55SAJ7L7YBkoUxLcajH2GnqAWGg5UCfx9pQoCcm37cUFaKL9SSGckRr49gbNAmXLXPLqqb391Q7N8aJnmUNuvdhx",
  "key17": "5wUPiyrsfJvcc1pw11ygPiHFLzinDsBe9XT3ALDPHSP9r8Q83xEHRZFKJcCBaqSVdcHwuQgAWAS5sB7wmcznzMU5",
  "key18": "M9p7UuL52zWqHhVGcUsFEwTGmH951An5u3rCkHK8pPgFoBYGqYL5f2hyiRvCgF2UpDjx5XkotjiGTWbQH6Ef7KZ",
  "key19": "oporvxRp71JwPPGQMrUVaoMPisfxuy7hM8nzMQY6ExpfYBLFYUB4RGtpRFaZZRnaidEcgVE5MCTn4Pb8g6SDcJX",
  "key20": "3eYRi6iC1CRZvAukcZaiyssBGkdkzhdcmir5qim8L5MkdoLEywZfDqNkFoX7uTfLEs91eiekBqeAbZ8xAF6gUVxk",
  "key21": "3xEgfG7ymhvyJVHfgtkuBAwqAhuSwgfHgFeav8bBjiubzMGQ1hLQcZDgkwbxt3Au6hKsFYq4DWtFvnWdXvdgGSVP",
  "key22": "5GsaRhDr1iLiEC78egjMX4HUDSecxZSSrWGe542vKVqDMgkLE5M7FfcBuNbsgxBoeMZzkwRurNCepeiXxk31N6jR",
  "key23": "3mrcY22CYRDWsj2FczbQDBE5AJhEMXjeUkHYM4FvbfVioTPWB7bsxQU8HLmyvHkQYdeAQrGeZt1mnpfBwsJERUCd",
  "key24": "2aa57VWCtucPNfeNUmmcfevVoGEEk6ZXLhzj3XzAqRrpNdH94hHPcsfZQpRSSLvEFeHsBuqXVva3oBjrkgPjm4ex",
  "key25": "2cpX5WLzYnoRZ1JwHsrzwzXQnMkBmMBbGj88VraBNwDP7T7wxRhN8nE98LtqMmCCLXKpRUGx6g41koBdvbTqQr7C",
  "key26": "2xEfxfTKj9T6x3hdrVC26ksXSVU7Bjrfy2JdQH5aASTBV9qmrtCH1tRrneri3GHW1C1ByE5v8PBCDmXutkCYgjzK",
  "key27": "5vAKHrqisHvAKNYrmwkw4PuUpVNhamiWgCXLaFEqT5VYoWvXcnzVifpbVU9VSyS7FqSed6Gu9EiTc9DY6NRHESRU",
  "key28": "3XzPJ3mD314SMrQo6gs4ZdLTsKhznr7vaQgRqWVVKe1GFCAd5dLHQW8XUUx2j9VUJWtuUfQW3rt7eqQuZvBWJvAf",
  "key29": "3CuQUbvK7wyvE2M6n1wprSj8rpCLjxkVwQhboMTyEYGzg7nyQh5mJedFzfJmjfMnfivxyhNEujne5XC4BnmYZSki",
  "key30": "52tUbNiTCpMJew33GW2QsRPeZMsmABtkb2pi5Tk2vqfVDZxKGZohrqxck6edidCDPzomU1oidT8D6ajz88PbJ9w2",
  "key31": "cZ2oXSch9HWaLxSPyzBLBgk9XBQouwfRqopKPLoRVTEyAf5ZSyuySgmWAJMaYjYMjjATZAH9bnmYZgjrPkBQVKQ",
  "key32": "2sfcdD2UBzzQeHCV9YivWXb8inuxDCPP2BcaeZgweK2baUcWVySNYh9DVgyVwv2iu2PF8Kfyn5EURbqBDhEtKTvH",
  "key33": "oDR7vSrj9qU5XbQMcSdkzFXNR56pixGUprfmPCyqfGhGJqNAwxk1jPauhPXXGZ5EoSWsiHvpsEhRhksbeQtM5zA",
  "key34": "3K2TLpQQkKdczt78AxUnavRHQ3gr1uQ4jL2kTt5nbrjoc5MbJyDPoPxqp9Tu3HZ9f3sgkrei7FsZnTPbkaeBRY2i",
  "key35": "5GPjT9eVM1KoK23zDy6QkHAUR61GgyfgGSE6YmUVfu3uWfx3PuGhZZBgsKN8b2xriP1DrzJgCtHWyCQTsGf7JFE4",
  "key36": "5VBEJPeoPCa7vq38LT7J4WGxGVFVtytTURYxqigWiCEz69MEUbokxz7UkyTFDYGaQATUFU3B4PEQrzUr8GUKrdm4",
  "key37": "3hn4T4mUs7LerFnpQCGfTwbbaXyRCZ4es1rJFTejBcuNNp7zXSNA3KPRD6737fK8K4dQWKrttJapF1uk8WxPQRF5",
  "key38": "4nBYRKRAG9JyrCB4iLq83G6VeUDG1WQUJYf5xtsdebDhd7CAa5i9Hnvp7BcpK5bzP1zAnnHwz6qSXHh7pngTwAvx"
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
