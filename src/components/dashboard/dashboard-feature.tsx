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
    "rWcBKWu2QyQSGrPWSBT1pAaQMecj9JnTgVWCB9z8YwhuCoS2n8VzxNfG4zUerm98MWaj69NQrQTjnpYTR58sjnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqNnkgStBrjsd4x59A8YxgSeAfHZuHv6WFcNhtRpvdfJa15yeysATT4MrzhPhswFdWCvJs392HydFvzS5u3sbm1",
  "key1": "322aBJxAfrExTWWMojuDV4QGxLG2fV1v69xKTS2sp8B9e4piv2Aoe8QnqHSTmjedawYjJyPPTDVVZ1cobDeFz2Zp",
  "key2": "3vSoSBN9uYLdtWYU7WdiY9R3UajGeUtXbaQcRW4oMUH3zyvu76Cd6QgQWFCpX2EugLuJheBFFM6CLbvLWAbHaG9C",
  "key3": "4E9fauSMxidEBgQVx7pLM6YdmypPzpHxsrYruHbvt2ZXkGEFpYxqMEkM7t9XkDsTHitkDW4yjfw3vN6F8sg69GL9",
  "key4": "e7GmwNitjJB2k7NBa3D5bjStdtYT2j917CvDYKYRihQ6DhxYi67juCKbfPh3oQcMLKPPbwtupUVroYiRUfMvXHK",
  "key5": "36rPQ5pSgcJRDDj4h8S6kucHoMVhNnii9CeVmWhuEquoUa7mwdnmubPygLAjt8jQScKLs6Sxnr65Jegmwr7DyGPZ",
  "key6": "31mW6QNP7DnF9WVwmfrSiNTJgdHqcT8mbzqJ8X8yQLuGk4aYkDFn2bdvWxhBpaQRQiEeQtZhS1WeBKRyKpYGpPVe",
  "key7": "r6pssLkDwjV5yJ4ahZ6wbkL9G2vdW53B8LDBJWP2oGDSGuVGpbwMLNN7V1BXe5D4YQbZcaXhgJfscZXXs7256fk",
  "key8": "5p7m5vGFei6YrS5XVHHSkFDUu18iZBZB8Yv1fdiJ5mWhVY8rBfqYcrq3beKLPv6bQpoHMzGWzZNfQYmTyp33quhD",
  "key9": "5pjd8DHexr4YVHWmhCS2WjqQK4r75zK3FcmmHbgm8pS1fU2sE28YhXLmyWD8d6eKfDMhjy6Xk4ew3dU67G8jRgtE",
  "key10": "Kf69VWsSdWeZHtD3JErYbG8VCDYuLGuuHAjJgfKN3eZ2pKEVzJZBFVrBi3KCpef9j6xssmSENfg4L3eDYS6mUCR",
  "key11": "29gDbfMJnr2k2H3UCmxdS82Fb5z5kkaq1yzuBj9UbRg26MDpEGS9z5AeQekyPM5KEwJ3xfX9Po7smQKuN9sYDYAf",
  "key12": "5n21KmGD78mA4RBjAtVBBT3Nh3Kzoz8DvevW2a72TmYFCKySLHYj2A8dw2RwimTLrurkMKEHpF9sdd7qFZuUYPrz",
  "key13": "2JPSViQwkVdooEJGjgEh3AmymvQRAsgft9y26BmDYUexqMpAbCK4jyZZPaeBzV5g3CAxb69YNf8iddnqRfmy7ZTy",
  "key14": "rDkGVk2dubAGPM1szdvVmvRtqAS4AZjpK2p5dqdSUquQ5Qgbo4KZheZQGNCFgwNMfNCuejEdxKGDaR9Bp9hApAZ",
  "key15": "53tRhzkGJN2ms8uktqVHc4BDsxSmPES5AUMp8bx7zDsQuKBNusEm1HSsJDatK5k2ZwYG2uMrDFnXECNcvcaRR3Fj",
  "key16": "2MsGeRV9uVdimjp1KwjBznY8snFf2V1XaZB7brb4RWN6CPWVG3TN5EkiY3as8TJfhLixMNpEKm5vgBewDMaFESqi",
  "key17": "3CFr8vpSBT2gr1rRZYntR3GVmekwzvNpUPsWp52wgFJkGoTDH1d3KoSMBxwoHZxy8mexu4PneHoYzU6UvLSdXWw1",
  "key18": "5Ni1CJdTnqyJpAzopdASW5o1dgKfQXGgYHmSxYZiaSNs7RHQqduQ5dE61RRXuH8NECYdsxW3PhjKhZwqX9c1pxhV",
  "key19": "C6Ypo1cLup43xHxzndUJGYDw5iCpSqS9QYpjBrvP3Jzv1gY7JFaHWB1qPeF9GkhJRLtqCuXXJnmrGeScoqwDmx8",
  "key20": "FCEtZGUQ9rqPbsZzRqCjS2Dq5pxBRGkB2Mek41PNpYuciV6a4qK8eNVdw6oNLGa4Luns1dTMg8V2CAgH6Y6ZRnq",
  "key21": "39ZLUEWrGF2DBQ8cEFbrFDD1nxTEKSbnSMB8kdeBAGKdpWT7bj6NespbeJwGwNfaqzynXYVoGoeLooVxmvYhBk8W",
  "key22": "3dVCw1QUrJKa9FNF6PvciuHQVXgwkREwHpetYG2w1c52gqenT55DwBANvcgXHJMdiRt19etjr86HRCV6mvqqAVuc",
  "key23": "5jC3EH2P17Z8oRecQM3qL4HFomrdn4jY9uFdLKEbm1pP6MUWQxcHsGE2AXCwEfGJVWN5xiUt8s3aEbLgKqDDgaU7",
  "key24": "BLQfTGCW12nvUv4pG4GThhCGmUiHnDpEcc59yrHDMYTGzaTJXBb3aii52vzw65t65dZbA8FKfLq7pbdZ1beekm1",
  "key25": "4TSXj4rLAgp3LeBxjEukmkqZSMXb9JDarRRqpHxETQeMQBwYoiBQPEceKgKrVa9A28r7yiquFzFHF4MwZ8rV6K1q",
  "key26": "Ko3qLrz2UygZt31YYh9XqApgAe7wWe66BcuXJmaGP2pGe6LmuhSGSb3SNYhyv6zjwJDr8m5pvJ43r1JErW4MHU3",
  "key27": "2we28v3DHtPwFTGBq8Qj2Pgy9EyX9aHmtaxwsgJrjJdEyLvG3RGy4LjTb9WBkuUXKJRXofoC6iadBeA9pkBunGic",
  "key28": "52NXdopvCHUxUEmk4Y4nfNZfMLaHbuXwpGpDBjnHeFbPNuM7qCruYF2WtuQjy6zgHWBcdVRMKKfna5R4hFdwr86k",
  "key29": "2p9RkpKh5SLxCammgidcbRrSjq8Cd7BsXvQHGeCY78XJJ96QFcthswayWZar8XTrP7AZMdWoeNp4Wb65iUnEg6Gu",
  "key30": "ayRNgkfsFTkD7XYrBrvh2XYDDgKQwupYvksJVcDhBEikBGuLzkJUHgV3aWWrcgaVuVC2UbXYX6c4E7m13CzBgcR",
  "key31": "4XiGB8ssxMHstRw5EPjpg4R9mzfaWAqmHCCw2vfr8ttvSpu22KTV4eGj7c67fqeEahp4s9ZRGQeo5HDkimW5Z3FV",
  "key32": "37LqSX9wyepQFmirKh3qJqP1zdmoxzo9ifTrBudc7ogPMdAGykvu93uidkwnso2TntaeL8RLamcgwmktkhJHRy6h",
  "key33": "3dfvHnnfYmhyL3u9Eu5EihKF3bCykAdCQ9PpNDjByS5dsBxwknGFg9fUjDEn4GF793yk9G7DAFJEctzdb8s2C72r",
  "key34": "2fN9YD5LcjjmDp7U1aPBwm3vm7FsHqMvj9n2APoBXQj9qgXN9bSKQ8BCbSEMKCu3oPmUogqBZPgGCjkMJu9msdMD"
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
