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
    "EukT3jq4XdabWCeH8gxxA7x8g4Y2zmhiugXmaD2d3zbKbEDpLhgeZDFi5apiEtCPbZhHeU3eiUfV7aufqReYfhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SP2pT1ezn4VM75dTX5iXTPv1VPW8DqQFwZ3hnqCej7V4rMUjpQXF6ZpJrs8EF9PUvMvVRZGgwf4YTU5aYB9zY1C",
  "key1": "4cbAsq2hjwfPRvhDQgGqJm1PYGodXHmy6NWPo2qmVaZdc6tqvuxq9qW3jgEJrQKnn5eTqnKN2afupCgqAVUB1RWJ",
  "key2": "HfXkjbrW3bWpvysBH1iNSwtNTEsp4CyS54SkD6nSTHbdfJUkkxWNoyK2yioW8qsRRmSfx4sbksSyy56kd7xkWo9",
  "key3": "3TXzKCYTLVSuw1pPudj3yndZzGCDvPZ2oj6GNYL6xd4tFrQuXMo3H2g3Uv4CBL71B8se4E5pbN5HU94dVcgsmzQq",
  "key4": "2PN9yASouubPiBDVTx1rKjzb2cmL8c54Lxg6sjNLJuy8Us6xQFKtf2bBcY2GLEin5pf2yovX3yeczcr1MAoZrcT7",
  "key5": "5LHGtLxgWZ81Botn9snUoiKLbkG1Gw4UauPD9B4pqmiyHiDP3bJDB9DzFbFZS93CALJWXdiiaFCLTrH998xe8CZe",
  "key6": "3ivR95HcTvwArZrd8Pgj2mLWXrGSViW5PUJbh9HHjbfnycfWUSr9f9LTErroA1LmzGRvZ7WqYmPz7AFKSnb1jfJ",
  "key7": "2VB7URHfprHxhMAsy8xgyQrBWgN8sPsCN8fxmxmC5PFkEeotVbrpfZUMDq23WuuN3EzuZpgKDLRkGTgGVEvnJLK1",
  "key8": "4X1v6jQ85npsFdsEgLeTbEoM7PSPRN4seoXSqhWEUaFCiVPw4oXrTRGzwFk8oMbcTWKbr9DGuEZPhnC4C3bwpWn7",
  "key9": "25F3H1SaKQxt7gtSvqhmqtPnBFPyM6F8Yfzt56ASUC1qsdV8mTgRCbv1Euhubsi1XkXNnkVoCa4GqvP7oV889h9J",
  "key10": "4C3yPWzfECTSPCdAt2fWoF2aFqA6jPUrBEhe9eEJhnCLqoN6rVj3z41XKEVFM5Zh9EAMyGz1Y3cZAAu3xzagnPj8",
  "key11": "4Mcep8RAoWqCVbBh72EYxe3TQxJPiDcjrBCeCjdPuk3ZPLpNaTcapjxWYfJuKKLLqT2LprZvv1NJuue73xRkKpv3",
  "key12": "5KESEtJjFayGUKiZT1ttqUGMLskuD87XcnS5K18jSo6js5awFk9GauZrGK7fpnyMmDHVnfgKHftAr1yVazkVcnjE",
  "key13": "64kzLTJhwaaV9fpeKaaLN6Tzwe329DLze29PERkFR8gW9qTLBK57pZT3F4RRF2s3FyzSRoJJXBbBBnQQpiCwR4Bi",
  "key14": "4MY7u1a8NY7EPuQodc7RApmMxSdTsWgoqrMAWRR91SD7SqmS4MUswU1k7hcaqTbUyRJzXSW8uP4R2BnfeygbjnFG",
  "key15": "2ydweEfnE1ScTyZF3HYyuoUXxMHCgqoMhgVH29cQcGMbsKXDReEVvCcN8rbk1iR3VV4tfoBbbtt8LPc9nanw9pfo",
  "key16": "4nrdYpZbM8hvR9zwGSHpYWwYfP76vwnE7xzNZ1BkxUU4Boj9YtKfbG6X4yFWiwn4wq3H27Y1g7GPES3eRNtK2Jv1",
  "key17": "3XRBBebZC6Jakca6L1GsRbwUD2MMgTt1z2udz2h47pfzKEbHg7Uvmx43unedSfCmf8HBWnHSVYTQTJN76h2yuXKv",
  "key18": "NEa3eTpuU5XgPDFNTiucYoCRzakHVpp528XntCcA8uC4LfNxvsZxGFEbsQSdnQZYKckaCi816zQhNPDTJSy6iBi",
  "key19": "PhEN8xnF118JkWEFZ39UwYr7Ynn7ncMTtAfC43XqWdNf3mqpWUKhrvMyRrsX5spEfChwjtSaGiMKxpoNpQP2pTm",
  "key20": "54QcYszan88sjzKqavYNUYCqag31TxeKQZiq3Y3TzNUZidomvVgAQSr76ZMSEunjoq3YMQpDFmpkpbfn9e5NPZiF",
  "key21": "2A4aCVdvAXdHfhrrBbCc4FiNjoaKzqssm88QSX2c8kSo2noCQBoGaBydG6bVLbwxfrCMoJyTnsywEqQwJtedAHEQ",
  "key22": "4tnpqGns3aMfbBYArk4p1uDXHd9FGTcqf4qMzXJF2Tpdmbe7Uir6qoUfiMixEeMVaybCrPgkVCze7ceFDFBRs54U",
  "key23": "3fm8L9W7QGrGoRur6n1xKhpbkLCTo5QNhQmrn2hEecKsxzaeVqQDAgdkNQ2RL7P9p1oSdMuWp5WsFa5qeURZunYj",
  "key24": "2K5z26qx9Eag28mKc4WhTF5RcSAQsALvD7DvFbSyC86n6wr3vHeogT8J3JfkzEFbXssAFEzq8aSRfrp5LX9jvWDr",
  "key25": "21SBfs18mffgYCKDjun16SwrC8kbYyf86qyXAYisaTZ8zcpYGJEjy8Aq1Tz44AP449cWQmXy49GwZeqUkawmrsQc",
  "key26": "3DbbRV94WMTh5bwnRretm6dMRTqMg1xEbqXvP2ZhNo1CJd5LvZHqDPJ94HSAPa13usy6Vvx4RTT6FH7uDyrf6YUq",
  "key27": "s6LWVqca9ZcNwHjwv8sNa4kANJ1Cqnxy69djtrhmX1bQTETJ7S6Dx3ZDHRkgKE7FFc9twNmjQgiAzFfUoGEHBYY",
  "key28": "239DU3tfYj9FMiWaj57zXcB6Fx6rBvR1QRu57B9Q9CALankm73xgtUTmWFkXnpSGqRHS9TSxjYirimoygBpCPi6N",
  "key29": "3Frvu34yxdVFLg3ak935sCBghAEea2yNE9bLVVqR17MZW7Ep7rcFrAzrnoeW6HzYihNKbzPKVaUmZx23yT8Ey4d8",
  "key30": "3wD3ZMd9cAdCfiGNVBPXChMLWTQFjoXSwUv9Z7DTsJztsf7waYXL4x4oEx6NWvkcbu4x2CM7yrJZ9wJ2vJunNJSg",
  "key31": "mnMEtaNFem64BjitM6NsUXKEcEZK8z9sqn44E167f8zSpCYcAxmXyQ9brxF79CsTdyyUofEL7rG7LJgaiatbYL3",
  "key32": "5LnBZEtztsryaSptruzBiwMTVC5ScbKMWpKCaJ1qWMmnge3k7L38isU5vLSLt1Pk23tmn1Tm28FDjecipmuotpwN",
  "key33": "3EbAU6L1JCTs2MxjZHamRgr8vddtEV11Go6hC6xH3fxh385idR2o7hH3f15fupPLCNGjKH8pbcj2dDdP5DjeM3jv",
  "key34": "5CTbCppiKFhsMc8PtRWGkhmAdHc9nzLi2UT7sUAMaMNG3wSEatfSaw859drqaCqLaQzCDThuMPBy5vL2Jg3G6kpa",
  "key35": "4XHrAvYAYzzvUcbAFjnmjEruVHznPw8wYJoMPco37TgAVmdmFLfXkozxAF8DctBGfRbLGc2dapFB9qrwrHmCjT12",
  "key36": "56Cb6Sc5z2EoehUt6117zZHyuGzcHzBWXetRG5uufFonAVRGCG68riA3NgKBgrRLMiqAnDcXjVwFTJEBadwffp71",
  "key37": "3ugFqDtwyybnJjMX4Rq8qegYHXQt98hLstPhXsQvC6aQUekiEF76zL3pDfMqHbSRAoixhDhTwLVYgGmTP9FH874G",
  "key38": "45xm7TKBznW3wzKqESAJ3JWDAPVC1g318KQGNJMFRLveePTwxwm1FtYoDhEVgDoJK45V8FzkA1QJzYDRoMyDdTqs",
  "key39": "2pi4jTokYqsBgtoS3isFR8R6nEcU9y92T4GBgaoUoRqq92FAj1eXoGLM3wsSGpadai3rNALRBiMUMvdy7teeKXR2",
  "key40": "31KHdHpNCJ4Cg9BqnYfgRCW2wy6KPZtDNrMLwCHr7DNAbd6uyvRmz7MoiMEYm4UkqbKw6N3N9Vnio5H4Zoanxj3R",
  "key41": "LA5GNitXBzhuR76iKuqY12E2bJrMP9QgFfuzYiMxG1ZFAbqNtZ3yp5TLNvRnDeBa4GWdvyx5tUfCjDAhxB5sW8h",
  "key42": "246CuH3diRbmH4EQWPsQvsFE5gRFmR198qiZaKNVUthtEmdvKsSQQVHE8F5Aio8HxkMkdaZLCfY8Z3Vom1VCGiwF"
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
