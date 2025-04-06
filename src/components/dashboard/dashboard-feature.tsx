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
    "5aisVyBPHypHcWiZ43Bzn2LX6JEQo3Gwotd1tAWXXUeU1AagYTYAycq2ZPnVoeKPSecHrXPLVazwhj5QNY2Xp1gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZdUJSPKttKwkqYjbYMbpyFp6n1Y3fo6BxLNPnRna1jLYSMZQUU4W8rYrhAbRkCwfFzvoafgtm6zVMsxjSD1R6L",
  "key1": "4NDuZWYvHXRPsSAZbzA4nm49Ftmh5G61xUzTVJwfPM1H2Ebzn8CMTdgqqJ3e41ffGgVkGfME1E4UxLa7ceeZ42aY",
  "key2": "hFoRKiZrfgFRcLUAg6xDVocaE94zwAwj7DVvegdMe3GY7ghRXTEXp6Y335T3YwWdFMabP2CcZWhAmfwGEHYUmNE",
  "key3": "2Z27Y7d9pGsV13dM51px4AbXtwTjhC2vDx4nt51cmbMyyizA81L1tXj32ndG6EHqsQYb5NAoNqi31AQZUiiwvoaK",
  "key4": "2jz6d9UzSwMRK9RicTcJNrbqnFGy2k9XqA4yShUDYzRjqmDJXBVajZpwHVHiAwMuFiCsbB4Bi8d4Ey4mDhQRp84i",
  "key5": "2JeFZNZAmCTLBcXgxfQsxadEQFHKN5ABCiFyohWFW45DMLamwjSaPzTEXRncfH6fLw5nRi4j99MadxngMMYWsB35",
  "key6": "5HJdQb6hEQTSEBskYuZkFcETGmJL6zsJ58BejwcUSfx5TvYE6SwdCWzC2FfTMFpqeKVm3hVYMFL2y2rN1NsHdD1C",
  "key7": "42pNTKJqFQyH1rsvi74yjqR4zdLgVsh2PJbySU6dfb24uvBrrtbzykwQLtez3GUY53LJkhHZE2Z7kwD8nXpxp8XW",
  "key8": "y6qvDtLiSGoz4MrSfLnHBQ4p5BLyEdKhjbyp3gUxqXcFtTBxu5S3zDMd9JAqN51XdrJqCCDVpcYTM6dJ8s2Aiao",
  "key9": "2TUE2ZsfvyzaReYtZcPW1Zgm5TVwPE2q9AvmB9XJ5jSAsymbWSzrNQgro49M9RMrbQKxanjd7n5u18p7Kwd8oAhx",
  "key10": "3DNWvwpA3grWpradSKMznCPMnxeytN56EkooNDEHRnEbuzLj1K5NCcM7FY9SUEcJZ4e1h38ocaa5WghFGrw1CXmD",
  "key11": "3vtnbAzAgwTEPjKgMw9C821QaSybo47mw9VM1Lk34WJUqfpXdvp1h8jjGKfVmriFvuubLjfr898tSTpibT9CHvYa",
  "key12": "3pMKL5bP7ueJ9dHBau3uxnCNJmfa1Y7PtVKv9WiGEGdnRfRZWgFQ9SiLwx2yFg6kucwjBFavY9kvTp1fJjPgeibH",
  "key13": "66JXPjmNzZU9DY7zF4f1wfcm7tF9gHFgwVWqceronzG3tyzTokC5giQCMu5TRsinQMpfffkekiJKt4D94H7Gwmg4",
  "key14": "2wcsv67TLJb2U8R6YLzA4C4rMAfNAKp9o3aeN2n6mrJxjrgXK3oCKxGbxbuUMMHLBz5odMp1nF7xDsfmiauUjR9c",
  "key15": "5D2KSCH5dc7kWLh3XtgquQce8ipr7RQKxVEq1UHrXCqjUfC2cuTUbGx5hLyhHea2nA57sohgA38iciZTv6ebf2W7",
  "key16": "2D7YihDs41zCWvZZzj4YPGguSRkvdMR5qNz2EKFzXsLVCzndaEe8jo7WThzgqAJeHJ3MoJjhKH3KjP17zp7BiA11",
  "key17": "2ZCvccqhHK9ZLaQdjokYd1Yh4hdNB8Y2MbXxqpifd2mwdmFbebS1wjr755nigg1zW66R2oXmPtc3fVCZjo3us7xP",
  "key18": "4SyUiZbnUy1UsqivMKtHV785gfADkzGcKyUJLAdaEsc3HAC7i2QVGPxPCyrDKCbcywg3xEaHqwAtSv8GSqN5EwTb",
  "key19": "3GhbCruN3VeCBDdA5dXBBSWeGridiLXp7JToTkvgCWBKwZRqnfuQvE4GEDFPS2xRb27oNANYKuSkduz34BhQ1P1J",
  "key20": "27uZwzwhr2cPd9DhyCME9EJyPaDVMDEVShEoizMw76J6qHGxdUr6jQMCQhh8gqMswc9Jnq3hmQCDrGYmbW36gjih",
  "key21": "5qB4uGsPdnfwhoXgvmRhWTsyeN197Gp7rH96SPFDJn6Tn7WyENR2vSqWsmFBmip4jFzNtMgMMrdJS7PgNAybELgi",
  "key22": "4seNo7jAqHqEHMtMK8tTJsCXhfTgqMVYRFVwq5Xedr9tqbNyaNup9hgqrKCnFffPWmb7J4uJ82Ks5yX5nKPpp6k1",
  "key23": "4fr6RFxqHwhL2J1rfvrYqQArNnSh28vpp48yvynDCqGhVcn9vKCL6WUAN9ZRWLT6vXZQqyNrv8kBeWtGuQSUikzj",
  "key24": "2CBwABDcsaDyLmd7u8XPZoy1eGvHyiwJZLJgnjYG31jqLGhk9ECEkBBXNLBd2x8v5ipSJ8WaeLAkJc6rGicM3nYg",
  "key25": "iTJjKT9HLB4kpukb1somVMyeakKVyKSgJCahwe1SFh2d8d7YN8Pv38mHvBoPuFoKnrvGmw85i1LWV89bqJ7VxQN",
  "key26": "TMXQ7ovgdAotjdCebULprGdRT7bv6hWtpZqz87N3DAgEAp4Sv8uFeHCeJH3GYwJZ2HqAWqJnVuZA26LM94EwePN",
  "key27": "5vwoJGn8C5Spo5TYNgpqVmEd8C9mDRVMtoArckA85XPu3EBisLqeYYHAZHJMLa644uU5r8MWUMFNe7mprSaEgAHC",
  "key28": "3UJX4eXog7ht1vVDnxWa6sBpPpVqyWqWFhA7M2TUK1JcPj9kjVcQeT9CTHieAtbiBn2yoNRfp5FiVgDhzcSzMAWA",
  "key29": "3bjuobhg3gHYnzbRaH5R8iEpgCMV6fze3gcdgAKiguB3fMet3BE4h3uUSUwVoLobcoirMGJo17ZqWV5fpGg7LgSW",
  "key30": "4EDJ6QM5CJmw3KAbCYXmYv2DDMGSx1UM1iR3ZRfLZNjYdidHTXp2eYshzkon2CYteM2KQRdsgSLTC4XS48g125U1",
  "key31": "Zk9mjYxRMAeWh1y8knaHM9Aj7gyyZXLfrtZcN6hLyNPFNqKi55Rj4DetSmRp4q4yC1Kwu6fw4qeYT1KoGRVGbPS",
  "key32": "5kcq7Hhjuy8SMdYURwf3F1vV2ATB54PmsPTp2DKLdKcFHPzMYJpHUgnNsZ1722DuwGLj8Tx8ezUzrFwnTgiwjkrj",
  "key33": "3uxnU1wuyq6sRpETpMEDS8pJWWtNeH8WvSPrug7c4weWn8dKnXbzXEQfUaEPaHtmrpPisZeQJjSsmqteNAXVyTAj",
  "key34": "4M5F9yHpFvHYDfFQuadqcdaxubu2mvhjcKsvioSZcsYgLcek1Rt8Sv9PLb8x9XytjXy24NTDiHwPQNtRoNAtxRLC",
  "key35": "4qioEySw4s6ykUer5f1DAg6SnpSp2dVmoExuzBtuotv44WT2mXv3xb5LMZ8NvYtWndKsgqHa1s2Jq1BkKfGpEQbB",
  "key36": "5H6GwkzYnFHAD54axCQSseSELrwCdZaEHJjTtaf9RyQYyLMJB1GzRNvDxrJ6JU2zGqNDY61n2ZJwnQeAC8jVuCuY",
  "key37": "4tJNfF1ibHNuXBdwHTbtcYfn5BEVdK4um2gSX8KN4HUm9DeXUPzGTSGXsPNmdV36S2WaBUNqVsWE95Bm8a7Hr7Yq",
  "key38": "4Gdw8BN5oNGMNGCcT49y9f46ygRNo1rtJFgCJzgNz8K4uS2d9S7pQfHBq2e1MiXfxBPdB7nRQkpqXrsXXkQGFJHa",
  "key39": "4dyfEpz5PtYxfMRENE632DXTZt9L6QvPquzHW5Yf61qki4aW4qsNsrNSEr5bydXSBSqKzNktsjqY4sqw77WrNDMc",
  "key40": "3uB69yqd5m2e1fS9s3r4BEAZiJz3pER28i9ZLviFeuv8noow2Y4Fe7howPkVgEuq8mxr7EWGGHhoaf1r8vhag2m"
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
