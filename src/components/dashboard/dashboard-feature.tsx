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
    "4N7ZFsi4ZGmh3cH4Emxwa7zpHMaNShaynGBs2QgyFU7oUX6FJn7Rn7kuGV1QdGyumJYxsiUHixzG5g7rF6tE195S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41tQzkgmzjvWjx5JhH56D5cxohf9X2dDUZCSgzmrSusZAD97bEMz4hv9xUR5W1T96P3gKCV5ZWGMenFghYs4fw7r",
  "key1": "mk5vSiXs2jsGrknb3xW9Vu656y2DG79gScLVJu26xEK8Q6a7EAmHk2D7fRuFh1sSuoUxFWUHz5TtyMY23L8P5bM",
  "key2": "5f1EPzUhtyPiFxgV9iSV5LeWaNyM9bCvx7eqi1GzGiWikg2XeiGUtnsAZoXgTLjTk7qUx1MvMF18oXV5WURtzhUZ",
  "key3": "HSEqRnyEXeHCsQfLRQjHcmb6viTA4WUhGHM9JpfRosJDJZWmXRnzvwFcZy25SK9kqwgnu8NB1zYpG1PT9nQs1To",
  "key4": "2EtSegAUGZ4aMTvceDdibxWcuYkLwKU1sK4BC7zsaHFCnHtk463VX8NdjqC9AkzvenfLPFqWxqJ8qMwkm1Ebhg1V",
  "key5": "5fA8J5bqMA6TKhrTMkQjLv8D2mNgRfh2pUsrXNXkdjyVhJ5iYTWpFFJTrsV4DPtVAYnAKjFNMdc5ZYq8XvMVbKKW",
  "key6": "43muukdGYsc84L5KbyXeKLJSDdu4TL9wcqn1WGZsv2QoQTmnu6XfV9EdTyBMJHLXxBtQfLenjwjf7UtcunaQSuPM",
  "key7": "4aEVVGSFgREYk1G2e7B5fXYqgaxMk96hoHZa32wUx63tLEXnjqhM3g3dL2d64Trbp8gNqst9zqqCoEmViHoz4rw",
  "key8": "3yFVZ2DN2zFuFyPNrkhGpFxoavkjwzr9ni9uwQ41mqSdGWLNtvCJ8RyFxX45tPeEZEYYUiYS2whcZvA5Gyw6ZyE5",
  "key9": "5tZbbERnUM6mxnTnrV83ZRzv54Kq5iXhfY4vJM45vGJ6oNJ2PeoGwauQ4SmG1jn26FCZYTi3AsFLPBGseJTWijNv",
  "key10": "4R6WHRXPitLGHN9BjdtmRUT6r2XyijkysEfCebGWbTa2Yca8pSYnxh6Ld6pZ4kFSkPUuFWLkdBjPaLmuKPBTNJo7",
  "key11": "3d4u8HKYcu4RK3CoaNXkCrHWzGCWaJi6SKZeEs5agCcfzjEAx8hJCecXkkZoj1YryH7ybfGZq8MaSUrgC73CFVHU",
  "key12": "2br1cEEUMz5CExy8NhAqXgMUswtqY1XfJMcX9FxSWaADJ53c15pRBuJVLvSeXhmG7ZMy5x2Spub9gUjitavk8AiN",
  "key13": "4CecYt7XZ7wR1wdCVhWsBob2NwqMKNZBF3t2FKAWmt3k1pkWRr9WdEahGTjDmHEUueCEF6ZRmxt7TKZmdGUmDBak",
  "key14": "2R1oYg3Urk7iA9s6ndURoj2GpDGiTgGALFXyh6dJuyzdZHH1NyRT1Bsjt1iH5JNYaW38F3tEczVnkoSMqDbNXYSj",
  "key15": "2vVoBmdzWpNjW6NC2uAX7YhMCM55bEP9jYghYGmpFSMrKkGQSf5Zodx1mqwU8N4qH26XprPBTV1YuWdNyMi8E4Xs",
  "key16": "38Cnu9cJ57vBKmRxUpYYxasxziGN5bfmyunzrcFAd8JwjQ2cDJpHECVdx9T9koKdTDqyYeJiR8UYnJHMBS2muAzQ",
  "key17": "3bMA1ibNdxoGZwTGHZMqacDTz9T6ARLd46DvPr5TMsnd73KRrrKjZpKS7nMU5QjoDd9EWQ14jAFtWHLkvBrs3bEF",
  "key18": "3pnUMnfxrmq2BnPQ384kni7k3MW5kPt8wYGoLxx8umjTmCsjcZSoytExCcgG317WsWQGJvtt6QB5M75XoicjApxP",
  "key19": "5pT56V18UzmLMDGyVLLCTYVvpZpVunMsCvGcBJUDGHotnQPEtuTiE1Rb353Vm1KLepMLcqobpFTj6LMGgGWX26yD",
  "key20": "4y1hN7stYr2zkc2PeT8VpPoYz3BDa3L2h9WQgrQvYC4KL5PjPmmraobCUpQYUWPzNEMEST9ybrbRWiiHzgLwiyk6",
  "key21": "5c9U4Bix4u1epF7LXwvAFBCWTxpHhCeNBSSK3HQJYh8VXkvzo4X2p5AT5RdqJsqQLi6ZTf8nGEHM1a7c22FU5cyp",
  "key22": "5h56GzedkRgATfFS2izYVx9zDBHLsznETkRhvM9uS5nvM1ZinG9U38Likq7m1qg84MKeegimN3qqUMHuMJM1zn6N",
  "key23": "5gP9m1rZ9tjkcbv1FMU1NJs9w62v6AbYfFrD6jYhYEjPeBWA5f6QeWL2Qf9hgTUUUgaSYHfyz597CtiL4F6STtCa",
  "key24": "uNuekZxiKkB7ifBew67yf6HTw3V4fiGXccvSvWx6oE5b6nE3ozWNDuC4nrVquvkokZcGyfSfC7HykBqYevATrJe",
  "key25": "R99Md4RXp5eXNEiikAJv4MouVrQ4iWJKnMgWdfZBXBMe7V5vPPAzCpJpwPMJP4SVY3BxqN7j4mMtyUkmHpMpHLm",
  "key26": "2dzjh6x6hpWtSHUh9uVZahADpdF6A2SimG3NPFHQvNiS6qABZZ7kistFKdSVW421eWS618wrumywmteFrVmPczat",
  "key27": "mJu98VE8smV9iJqFV57fwtogtG8pWb5oS9GzsUWNCCFB2uG1gzSmA4DbH2UWr94eiNGzpTir4xiYMZ2cuaoTSCH",
  "key28": "4EdBR3PwgXKMchz8oYe4PQK7pRtbQHs7Q697Tu72joy6kQZcRPKv49VsRvwknw49fHsURRnK5ADvtMmmn3sSPxsg",
  "key29": "36JDxx9xxq8YgDJ6fyk1squpWT9iUTq7EZGURk8Rb8ijRycUGmNxHPG9LYwbAiLuUG853mWykgNwhB3fiMk6cpnA",
  "key30": "9DXe1qFrfYShfJHKMKGcYH9Y1vKbWpdkuDeWUwMvmMWPHTH1T9amk5yLbLozx4qixXJnBDJh5XMLaP7A7o898Cp",
  "key31": "3Sw22y6xFgQ9kvaFofvKmgh7LdPS8dq5D1wNfZrHaPkc4C3Dm7ZQN31cUfyaxSH7gRbRoeD5NT6imeKaytXUjFyj",
  "key32": "3sAGYz5QwGi8nUAh7MPH56Wcp22oZNmgsAiBZouCxRh4qUHpd61d9dTSp2ERPgcvFt1rUq5sa9h1BmQTf8Xqp2uu",
  "key33": "5kCCXL2dvjmMgovvj3nz3QGMRCoXfAEP5b56odTxamJhc8ZwCWdeQiZxoxRFFkvKQpVQtSaL2RmEiZHu13qKZeUz",
  "key34": "53BgBhe3FEMnhg3HurLGRiJDKCvq8LuPrd3pKJVbukxjou1hdSvE5RpqmnwNuF5X3zM935hgKkKsiQUFDhPcorE3",
  "key35": "63F72yxzvN51ZVYiLvNgU9SZsHgoNS2dR63WtzJ4sYSF4msiUFf98hixzj5pt2qoDdBGZUA3CxaaM1bw81U51GiN",
  "key36": "4bcDD8z945F67b6Rreqxgstj9GFRPsTvMc6qRCEQn8gP9aJq9jx1p9q5yEKUKz9BnG9wgdAyXVqkpxmK7pXQLcn1",
  "key37": "5uLEmVornDweUN8aC1XRVv52Z1kdMmfApkbyrA9S8ugcsn4nPQmw5Gp6JXcQHQRdDCCoNeZQQmNftLc1TJN8s5ta",
  "key38": "27muM15eyXxQXQ7stSkrtSEBk74wU34jRu3v7BgjdmvgCExyu9nDorCtXduGnXDVfqQFL3LxeAMYsc89dAUENvyD",
  "key39": "33X4FbPQMZ12HgkHDsyFbvysBA7mXn5LjZStABSWeSu4151MJMkJEkZ8b8ZmWYMb3G5ZK2efZ7iBrdSrdf7jdATG",
  "key40": "5Lh4fUWnmrpLG4rjjPPFdi47BNNDXxqLdfRuDzyGUgz6W7Nj7FBisEsbnui5hxSViturhYX4yFiipgJ1vxsXmAGV",
  "key41": "2c5Kh7fWaoKRxdoLatZvN59Vwpcx4heiV69G3TDQsJ5feTRL95hZVSF3dxrhtEshJQrAJxniuq8WogRcP5TA9B7R",
  "key42": "2KYKgbURDcQB2ZgzNJof3JVXa7myDk1bsorkTJXA2VyzmcS4WAzQKxMt6FeWhd1LrLGoxiwFBoPBZEErcRu28b7i"
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
