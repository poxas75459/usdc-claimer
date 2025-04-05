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
    "2wPdtQagQf84NdhjDLJBuibryPszjmkbFuKRsLtXWUy1n2i8WPdG3YdirctmkrijZnyfrNeHprZMWHiegosCVYGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rcka74xvoRC7J2AZMRauh97jXF5xdacyRs8XLgzMhByrS3CCW6v3dWxyWane28G4DSwCpnfXohP6A8YW9SJQhQK",
  "key1": "4HKyyG8P2WE9DpQuJiQGLAdMxt1K4AQt7b4FxAb87FRw5pQoKPyciT8oSmUDsjM37WGCh4HVx8ZYNYY1UgDcMbyx",
  "key2": "2wkN4zVgMn5MZPUkDyFYVYZZYomUFmoKH21MQM9NC9sGhUk8AsoL46WZuFmDH5Znek1n2og4h7gbfwdgcFiGXswA",
  "key3": "3NoBxRnLUJtrXfRcQxWdiKf9YreAXhHKQNxeHeGf6epndNSiXS7Sc8Hwgz2WZVHvRWA2kVZz65bUVwcRZx7c3uAF",
  "key4": "GRaa4MCsBZbDnXfTJQnTzrDRtPgLhBqnWrb8N5nx6NGKD5iZnyCMkk82YoPCkdmsHctNsfK3NGwRKjFMuRbHgtu",
  "key5": "53yiHYL24CqNrBR9GtBuSACH3cDTMLsH8JVQA55UZikoP4rcMVhSHET6mwpTYQM15R6Q1tLgmu2iPL41j6cmkpcR",
  "key6": "3UKMZ8F12nn2yH846AsUuKAvA8pWQqw8xL6UatmmXg1M2r8Ecdu16isPCSJ1X1s5AvSMXyjyse26K13tqdyjbJFd",
  "key7": "62UbphaHwowqPK6W1aTJHLugtXJjMZrufrZaEXHU9F3tWaNuWiuxzJbjDdNCh7KKQwKsbWE4hUA6DimuFyNDjK19",
  "key8": "49tKpTvg4Fd5wEM6fmJZyUWqWKqe9G4vAa2D9ZCPvvgcMtbHr11dKLzwQ7VFzG1m119TbPcPzrjx6P8FwBWJuRon",
  "key9": "2vAsjenp1MoFoguPGRwZf3j4gh9u7DDmidsbrRorbDdFk33TdJMcigjJDQPj2YjFg2esyRELcN3iVEmZ8NUJzqs2",
  "key10": "6hF6H6jjJhq7YMBjB3uS86Bz2dRQNRKmMpv25m2pgf7Qpjsoh1XsooCb7PqpH2w7gSd3Fh2VEUAEH3wuTzhPtS9",
  "key11": "3BBgd3sX1VFT59LuHgM7PMdQspor8efAbQao1EJ1cFFZRfaxF9GbiezZATUTxztBaYSnzumXc3ZNmQNF6ohLeZ99",
  "key12": "2SRFruMH2z2wd8HdTh1472WmV7yVPzRnxqsMD6Upy5UGVE8U9KFyftVQsArtSpjc7nZkZWC4RPRq3sVuv17aU5V7",
  "key13": "3Y9VnS3dkXQs9Ce9ujzJQX9iFUQjrfEJZMLiMmBTKTytvHuZeg3RYzEGLx4JW6ZNh2SNztfJGL2ZTqh4LLPtvCEm",
  "key14": "BpWiN6oG17xFC8fzeQ3YTE52dSAY23icMam7MKhj3MF1ATnjp3jpCUborAKKtUpENPreZ1CH2xXtcyg2S8Ck3i4",
  "key15": "53vdCi6kfqbm2Nuubf2xd8iGQKWMSu8CW4Df1rcEaDpFTmFnLSavVUM3qCKKn1cdAFm5mWz6i8DdXFzxXFMLrBcR",
  "key16": "4Yby2YayiQ2iYVzvGQNzsmomyt3QA7eCp1j5YCTruH6isCtiNpW32RwMeEy9Mjpa7mDUPuLMZqxDUuoEsKDoskrA",
  "key17": "3MaUMEDx4AMk8a23N7FzuEeHdF6ybL9RafyR5ENFCzMcU9sEsoTfwyWeyWXhqPbRCcx7Q1FMeYDoajQY5xo3aLng",
  "key18": "2FkbLSzwyi45koG7YYEq4hHJxTwmTvWqXpyWnRq3GXQBRyZJ8sfcB71YD9o8uXfjR4ToyMyQY9FjDp14BBKVKz8p",
  "key19": "QykxRW6uHJtQc8o6k95wzKi5oyAPYYJgp4t8hvnLHvMB8zHgDwSY4vCWQnHCGx6SG1B5AKtKRrtJycdxVKWf6qL",
  "key20": "21aSHKbrhMuCTL1yxaERjoM7ievi997utTJbLcTN8Qt3JVDCc65uUmYVjWCyURkkjKgy4fqqf1s3S8ZzWEXtYmTp",
  "key21": "5L5RdSYXBv8AmmMkEZfQ3SLP2aMeXz9iY9RNZ1QUZCSKnarx8NUvSYr8ECnFTivHeprVyBu6C2v35RiMBDkg224J",
  "key22": "3UFYi3wKWwTMb9hk25swrMc1Tx3uiBGrwdpVb9YX6xKxwsCnAytmy2tyMBkfQBgUQMwWihQocb7mMMYa9eqXQAWH",
  "key23": "aPrdRDLxZwBATtQPe6TCXs1SGHp8d81BYsBEE81fBSPYPcUMaDaAcx1b1gRfTxf2dddEw2JS9mXjm5ffmnYGye5",
  "key24": "5EDwN27u51egMLzLYf4zghTjR5cnXTmwHSqQjkXjUpK5qQA8uPrWovSdsxxBXku6UjXYSNpvCUKJvuLiS9zyLCPF",
  "key25": "8nsbEqDpqdUWqVUiYv4eV1MNGj9EnGReDdiaxm8XDv8pA16LhS6MmtJfHp9qdSgJ6mTxhzeU7uoMtp5DY6Hn25H",
  "key26": "2DMLJvi9Njgr5x4GLJXSX5XapucNW7bGAnk5Ps6G2UL9FmzX7oSG8pvE5CrfSVsQTiGi48vmsnt3wk3ET9CBQesB",
  "key27": "5ya4DxaCLbdoc2he6ZnoCygXCL2VYWBQzG3EyRZ8pBCTX6TySLuzrQs1Aq5KTWZuDAhwF51aqG17izMhg7MG5MgJ",
  "key28": "33TGhht9cWzJzxftX2Nu9Q8Nz1mnDbwzBrVaQmikcHKnbCXDLDgFkcs3PvjFhWbKk5Y8a3LvYHZG6GGPzvjrGSpC",
  "key29": "uTBh1kZXMoc6QrNF66bmnXhc2Rto2PzVxrQiLJnABn6BZPuV6xYZ9ELNchQigGpQRyB1x4vViSDxwAiH5Q89dwG",
  "key30": "64DdzwXa3SoRFPgzmQypvKB6s1Q2hmDLtBNHMJYiy4LXwSuPDomRXh19ecfpCLKFw21hEprUpfV4931qRHXk9W8s",
  "key31": "24WvHntataCLTYFntt26SZkyiqozBjJWv7UT7Q9FDkQASLtfg9D1o8MQE6ag8fUVS8sb2tt5AKQbbhd7zhqQcXAW",
  "key32": "5jWZZQPBASYoVS7AzB4BTaFJEafEigALX1iYLjj8rdeW5NE5YqhqqtKEHpyakXr8ctPAHxTHrxp2Vb1s7qUbEJeY",
  "key33": "3dJWxPFyyjXeDSWTaHACokeuBr4QN5qKb1pN5Gud1UFBVhB4Ue4smCtPb4zqFNBYhH3APcSGsgHMYT6c7BxgZ2es",
  "key34": "3Sg5KoVb3ZvAeV4MJxEPxKPYLC5Lfuxk7Wjf4GPoiJ2BcZ3XEE6T3nUJ38ye6yoJ2WcFSjd4ptjJSdp3KHgLBnwX",
  "key35": "rgwgrCDe2RQBSoDzT5dGjKMmrsDMrFy46nXWfWs2zYUyrfduCna9EwaE1Giru4jwap1NoUZH77rCCWdGz2UpwHB",
  "key36": "4utvU8faug79SSFknfiJWifC3hksrx8xVht1PqcAKdw3HF8cx71jLXgT3xv7kCh53Hb2SNfTTLYAwakqfS52cWpG",
  "key37": "3xHjJj7rzuCM5vXSfLJCw5osG7mLut98YXD6rPSBAahpj6nmifBKMEUpbtnEBnz8qf3V9voZo24jGK4oei2Kjref",
  "key38": "64gmoTyTStRa3JW8Jpw5UAuJpQpBuPjt3PThv5GAwTYwRRfn6syKeoQTcVYbVDLfhmaCkAmLZ55XGxHzrgiCEWRk",
  "key39": "5cWPXSKkZdQRBR4GLeWVUvvUrQDFPXoQEnPwkvGnhgoDPskNvnVnG8zYXBUi59m6R2gwE2CxvXSbufwMxh3Uofnm",
  "key40": "4Ftq7vyREfnPSpKopMKcR7ZyAndDY4mrxrkQdWnpyQts2iQ39LHUuHPbdPY9AWJa3Sa87Rd8TDbZtpSenjCspTki",
  "key41": "5gBuTJJwAfM3umpGXKfc47YsBfLYiMsKYW2XQtKUXk7JMdvDucXE11Qixkpr4i9QFWVvpmjxfUJUNDQw5q8Ct6kZ",
  "key42": "45Tu49bkF86FY6upoJqbrAMx5vuHchuz6BDXRy1wW1xt6Q557Wk5ziASLJJKkkNrK2TiWoCsCQcVpmgSCqMiNb98",
  "key43": "2fpwAn2BKiNYiVR13xSt7UMeoNJ5fhF4jWZKuk4umUzpydFMPGYJ1CDg1F3T9p1r7RLvMFo87rNnTnByjtw36mwF"
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
