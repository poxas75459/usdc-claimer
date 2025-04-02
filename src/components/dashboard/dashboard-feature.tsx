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
    "GB5m2e23Q3c3KuJjVrQZPkWBcwyJFbTRj1LpnnppVmeX9qGHfapjvHPAz4F7WdVm8bXm6TvVPBvPehQQC25HoYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMCTFsRH4EjhokevpA9ySQA6MUi3dorduYXexBHzG8AKTtMXTAwiU88RUz6FxwTFbe3VGeiYBKVxbWaGMLfk3wG",
  "key1": "5Un6FKBwdmSJcGeccEHQebVDx9KwMrhM5bydDZ8Lq5ac2yBeMa5CvNtH9fVpsnLFrAMMqHx5kTqdMuxe1EvBz3E1",
  "key2": "3EqsK5Dh6n7565odkdLwaLx4w7rpVQXAdun7qf1NCDTpXe7zg8zBdxquF75bFqhnRsDPBLAFDEtDjyeHMuRJSoXy",
  "key3": "qnUojJYhGfU9h8Cof6oygxbUeiDFGSiduwafX6qgVaiPetK2wnbP1j8F7UrhfP5qoZH4EnaMSpkfL7iJgk8N3c7",
  "key4": "RWSRFzs6SE9TdLKL5RU7edD7xt2gXfxERJKWpJs16i7BAXV1i1GvJWBDDYe2VbYJyJ7kVBcLit4Wwbc6BczPixd",
  "key5": "4HEy7eFwDooXGUHPMfurCVxVnfgS7nAfCeVArXrFdW4ZrjBTHJRZzzcHRPpggPcRsSyAivsGjtAFBRDUGagr9GxN",
  "key6": "au5dYfjaUb4FDxX9XPirjr5k5sKgpPWP8cPrvxUuKFb4DyCPu2ZqsFatyYvWkcNPaR8Mxn3Ft54sdmvEd83aVV3",
  "key7": "34Z2QDUijUvZgvswYK5xPNSisnMKW49R8Ep5CiaNBsFDHTLDX5oXBMDfPLZGuRZbt9xFiHL4RcUMBVsyGoJQqNsq",
  "key8": "33bc9zmRjDk4dMqAx5Hsza96728hiAVuVYvgBtQaQARvSWEkMss32CbdMkRu3eatcr8wRhKfwAHsZSJmftvCoUcn",
  "key9": "eMKLeSynDU2zVqTfBFQddiX7E7JJvs75zUHVJ63wNKuAtEV1z58AzkHvgRPPXMsDwwHWNzmS88CQ2pVGu9uhjm3",
  "key10": "4c4KWK6fwHW3UwmNfcoG58MGVzuF5N1ud3mZoNmZE7DgbznaDPx3aEGuvrNGhFbdpqaP2w7fFqn152BN3oydyZAH",
  "key11": "55AzK7fpAxWrLuciBN5dwgeW3rK3xV7keRZaeqD7JB8rGLrfrnF594UwS2vzw8URfYNAgBDmnSJzNsH1xPGe8L3a",
  "key12": "2PkG7nZUG69Nn9ZAgh5rMJbHJzb8Nfzn2PGkffdqMZVt2ekwtJoy61KbsrTvDa9Aov5mQNFzZ8aGoQmD996SysfM",
  "key13": "dXAkVznDGwMvfGUuLis5Jfev5wiLKF6B79UR6YPfWn6dznpsXkFAHNVsVWsGuARMfRp8aVd4YxzBDQvSDZNV2bf",
  "key14": "pCYSes9KjUN7WMM5ASYHqa5Eca9zUSssR8D37Zk1H7wvXwskJNDnPsnZV46hdnx68nG5qWMNhEGqugT9djAaPd6",
  "key15": "4VbJgE2QeiS5NgBEu7tEsNe1h5GCnrvGBwtzLoi7sG74KJLTu6MVgNNzeMvUoeoc41b8sUeaNnyzZbgyCzdJaoUw",
  "key16": "2jxc29Cx5WhPC82UNGRk8wcN3x4dJDcRVYci1z1jiRqv4wG4gYBQuk59Joy4SVJ79i1vH1HKJg2fF1cpfcW9oKSG",
  "key17": "2j84NT6YxrLtsxrFuHveKiydYTgdjkuWRMtSCSXEur3L49w8812SKZUMRBYBaTMD1bnXWed2CKHoVaakgLeWxW3c",
  "key18": "WEqhuyPaKt2zMDi7bDgnYYE2AymaA59TtD82Yb7AkicUn6EWQvRK6iY76Kr8DQJb7LC7iRKj98o7gkm3DqgdHiy",
  "key19": "41YLE3vqrRSYzLJsme693RujKXmCsxSDXh6Wnmq75aehuA5aLWAWRsrWpZgjgb9gkrZDzUmnu2eKVdopwESAgLSn",
  "key20": "2kyKV4U6XEcFYi5vkVz6k4ezJw91gcHYDY5Z97KgsgViuFdG7sPrWRCR5wnpbr6wQMErExHReWgYaFFrSh1CGqVn",
  "key21": "3eforbBwsie7wJ8usnLqSQfUnoNUfvaYFD5qppbzXNXQhHY5Q14JbbZDeFy19ccqiQNfUVUcaL8eq3RcRY51ojxN",
  "key22": "3xa5VJzv9R8rhizvmPHJR6RikMk7A7AECrWwjfKDGJPfRKRqdSiFtQ7eCtCNdxJqZsENXYd6KoPMLzAK2M2fzEij",
  "key23": "3HFmcWVjVbfzxEVnLFGQNdy7gmpwyH7o8Xw3MuZ1JN3m8isDSCujZuX5tQCJeUAGHDc5YSvkZLD8bT2yZJjE79uT",
  "key24": "2H6QpfgmFerCNHxU9GAAkW9VLkPs6z9Uaxp3Kd5p6NhdgVWqMAYnppLEQhC5Y3aUq6M8t2H3V4Gx2HxroqTxhmYE",
  "key25": "2GNtLR2gmBKec17wgNC39g1ToC97MCz83AUSUfPiPrawY9J3Ko7W7j46QaDZGFAM2RD3boDtDDqrSA9TnyevLFPM",
  "key26": "5jMEYhcFkTaw17wf4cnELRAuzs7RT5ZcLkApd3HPFbp9Ezhmhy29h4WtqiUc527iBYBGoZFR2NeriWGerLoUm25Q",
  "key27": "42aakEnebY66WbdUKtVsyS72u2ja1YE2vXonDhGehF8cJsJoGsVJcv4hLoemJF9cTsBgfAWzwAZQEyUq2MvPWGev",
  "key28": "569wMaQJdE57kUUxwf99WTGMgGX8cJsvipV7Co8xW3U8rodSr8XeZ6HQNJ4YKCDWjAn69QE4LFr1FZHqygjZyX3v",
  "key29": "3tx9hFQLLgWsFMJDpM1uztc3gGus4GaxcrSZ5c8QFZgDzEyomx28DFbFAedbSMKcvYoJHGyNZ67YeBhbxKhQLFyp",
  "key30": "1BTKwHg6tCKPZiJReWo8ZnoBrj59cwa2qPCTE3RYkN65MYCbp1L5anBi4ezzgj7EfLLyV1sFq9ZaRovqKseR4Fq",
  "key31": "H4hE5YSeoTXYe19dP5oDaywbXwxJzBV9K7zo7emVVo41Cgu1kRviXiiLfxzz9yk2fRsy4VvqQ32hNoPzMCPo3PK",
  "key32": "4RMEPZQcyHvh2xWuudFYS6eQVz6XqhpvCawueQnNJSsjfox1X6JNxCaCVKjfA2bEnnkLUPDkDAC3Hhudz2UF7QXr",
  "key33": "5VENpFmdE7fMnsjGMmWJWaxvpw1aktZ3caLHj2ZL8Dnd1vRakF5iDDmmLaerpUqP6Gxtz9G4h6ozAwdJpB37oy4j",
  "key34": "2qyrtmhK7a9zAPpiYb5kQVQZWrARhFHPTBQch5SFMpnHU1akuQxG3foJF39xSDwyFMbiWT7cUS64JFXKo6BaqcYY",
  "key35": "5gHNc7AFv3CMa1CLUZHxYYQdExqcSERfQ44mkcmXf4yjuwfVNGUUejMFAsmGbrMYTEtewWnTw8yc9vkqiQsiRwSz",
  "key36": "3ALmrYVAPfRePhMSihNgpcuPg7cUBxpst3mvk1vzQ8ncbkRbKtdF1mrk5iz9kGKJqqQuQ3PFmxbswMxp6A23Mso4",
  "key37": "5qjy4XVt6RtEwuaJ2P43sVng9cND4qqPt4HbEnKMUU1EFGhkkNBkimqh3kgtf81KsgNrm6tW8XVJ5mCCuCX7RHwy",
  "key38": "3ttfuKVwB4uQupuxA5Z7rjocGacRdYFKDEU99s3SUTuyjDZLceZcuviv74yS6s95ALCexpnFkuYXFwnU6VMgA39x",
  "key39": "53Ghf4pRcYiQGhvgZtP7wekrMHaRtHJ3yHW3pBcjZqFD7cVUUt1iA9oB2nDTYP4dBWiB9rTWvTs9YZRaVrjksmyU",
  "key40": "4uUcMX23tLgnBdEiHsY3sfkMUKePMwJzXKjSz8XGoB3Mx5oKVV7m4yVwfNGg78jcSuZpHzcNXRom6ACi3wmx6tqB"
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
