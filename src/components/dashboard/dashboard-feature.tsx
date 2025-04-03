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
    "RqX82xpiK1wgupKcaC3ogfFLpXsceeGQafPX9W5PXPZU4oCjFs6UUQycAzv4CbWSyUP8fLSb14BZUterqrWFeLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JguxUuW5zRNCAPpRSJNzbsdmJLeLJbtWp1iRKWhqYX7MP3WLFfBErYkvRjSLMPT3Cfsy57sYbxfDCJgFCqZeuaQ",
  "key1": "3182nR76XceD6dEsPvh3GbcjZZwoc9mN5uRXrPJZjWtMH1y6FaqwyR39gEDFAdC22caaaXiNHRsjwnT6Mf6y7ehw",
  "key2": "rFoEKqYVr28wzQFXfxBwtsPEAA7DErewZE8GYTmFZwwJMv3nrc8x4az7bYqbN3NQEP1dRcPFAsbMFUcDWK4bgbQ",
  "key3": "2EZUB7FqMaYV4VBPegiHbhqa2HdJiMVDd6Ad5v3eYTww2Eag57fLsqCS5kRy52mF58wxZQ5ZqompevoksDq597EU",
  "key4": "2XvvA8TnV16ZdK6bjddQsAunTg7yY7U4FsUKXyaumQpHTDB5cPmRsgGYxGssKicbJFVKmfogNjaahr5tAf3ZDKJC",
  "key5": "4hPtmXeRnUgKpseUM4XjUX3ckuwNy3TjcecEChSL5SqKZLcXhDnP9CKy6dYR1xT4daLnP4h8gE4miJ4U1T8d26Lq",
  "key6": "62USiknwWenmetLi6zeWZ72c7fWxfJcPRYggrBpu5X3nTDvnoFokYQpWqGzvMmyfZfkHkxwEp8d7WhK12rf9DLe7",
  "key7": "5xAseM76gsAQChGS3JoCcxUWvE4uriKActRMj22rHTdbNUWKMWKM3mLrhhAu7zHJZvbsQi4cV7PoTNRUzm3zn9HZ",
  "key8": "5vK2DfcFwtzYBsr6dt8TFyac61aDsQNQ1bYqQvS9AW58C8RuNVyAmXuK3gTodiuK6UtpVasmt3Td6DVBhmHQWqN",
  "key9": "3cji411yZVUGTjxtChAeY3EYU5dKhMWyztsa7JRVAmyxbcADWNsZr8TKEzV3W9ae3F1vgiguC3Gf54gFeRMH21ZC",
  "key10": "47C7WpYiWkUWu7617a3B2VhSbrJdWCP1aT7MyzaX1nNzfuMgModdLACe4r1macAV87rSKBtiDRoaDaTdAnhLea1Y",
  "key11": "4TBcZQJCfjq8zVDfXgc1XYja5x4YYs42zsw322WGfh4ZYngjbDsrfyuuwzdoP1RDjhWDxdTmCUT5H47t3SUJMhmu",
  "key12": "4Y6ygZAEc7ryTMJZh1DwJfxZzEvQDdk4o4Mq3DuXASm11KJVQEwHwY1Xym8diGeX3PF7EmcSTgFEomiNgfWvWvPF",
  "key13": "mVJKFWKXS5gxw24ob5eHXEX1rGxfGjtt4XhNHovHBjg8uKG6XYBrgs9HvE95TQfBMrnbNLE6Zuxd1kYHnwo6VPJ",
  "key14": "Xgh35DF5G61J3qYvJ5PYit4B5EeJ9xJ5ZAT4DwLK9RkiwNTuCH5vNBtEV2ZEyHS22MFhprPBH3bmSgoixKdbgFR",
  "key15": "5aW4CJ2pccquQicdCcNpzocgSLdijb4E9CeGXCcBdDuBCw8sWyBtMcobdmmJFYpZXmwyUyXAbVi4oFxGmEMCmvmG",
  "key16": "3ZEvtgxXBpA8tskp5RAbxHankreLPnnwddenkjhZYCCD3n14LEm8gm1rt22LYhDy72DbtQn1AyxRJgWgnUnaF1EQ",
  "key17": "66JiTAn5cMowMQpzxHRS8MdAZ7ajMfBtN4SAr2UvGfT9cc5qzSuQcsiWG9LZE58vEtxsGvzxznuRhqxupDjDxcKm",
  "key18": "y5zH3FGXpy8ZGympnHJxLWF8KJv5NykhKVijLbgjSvJ6vNDmWuHzuAvqgTMVXj3Y9zSXbPrkdgQivJNrk7k2TmY",
  "key19": "4sWSfQYCEBiKxcNJDYu3frxKowpdi9DmKktJ8ZLcnzDd7B81b4zaHDk2iiqrnmqqWQmF3CRWpEp4unMbKa2wu1Sv",
  "key20": "2dDCfJRDTZUEQpVnHxqUsSQv2deewni8hugadvMTWooGAgU3RCxk3nFZQozZqNubynGAgu9ou3CJV1NZMiCZoWfi",
  "key21": "5bEzvpojgTisCg97fwqBCQaC7zQqYRSdvKT4mo2GSUppgFDbgMZY74dvKLM7Brb6vYjJ3uCMLiW4ETRYU4HhUn79",
  "key22": "kPDWuP5qnoSepBH66CN4rKS1hXsvDtPWpmC73vWjtLrs7c3UHxDU7GDD496L8FJEZNtSCB5cUoMbYx1dRgiagvq",
  "key23": "42NXGwynSUdi6K8HRcZhLdjRjAePQhiqoxcgeJEP5YB8ec8d6GPmPogCkSh6awQrRqBEZc8HHcesSHu8ASjB7JaR",
  "key24": "3LiGKgrTdaGbkeDwRXU7YGGKaqpG2qpiNRpWszigDJSg92hAXHDBqXyopPUWcgai481pfDsRfTc2JJPj4UvpeLkp",
  "key25": "43LauB18eTrEgQtr6hp85tZjdN2AoD2aKtuUyYRxfh6h7R5tEeDVPKU47KTo9g6RNja4WFgb4h5DrY7aeQmTtag2",
  "key26": "3QUNZg17fTabzwmzqNFj7oMNmx3UXJwkK8EJknub5sPzWLsPCxPYmswuCVkGDHj1bBm2aRXSPf85X5RTzcX7d6ye",
  "key27": "52ZFDPYtUsYGxqCPGJefKoGVunp3ou6ptVd43YXfnHCi3URKjpTqcPKGubWzfaHt8SgSV9Vw88qwDKeUsbKp7oBg",
  "key28": "WeRfshP3T2LGmzqiMaCqPvutZC2UYKTQMrnRyUbXo62v6ANRt95RAmbGefU58ow1dy6y7Qdw8M6CXWwaRfHLvpz",
  "key29": "2ooT1c9ybxGkhsRaUJDwXewsM2eAqVEBk9sz8QSMMKMQpUi84GU1c2xvWp2nd6tXd25YaBVbgmxiFNWmssAdqVxe",
  "key30": "41v28fYbREVsZknYemq9aQmwnZ4L8uEeGGjMF7C3J4syahU3Vd42jnMoGEKwhLghbNLurySKYEJKJxTjS8uBFy8w",
  "key31": "28rVE5qVW5B1obMzvLCjMbir1wrLyr75xu6rMQZ7Da91WiJ8jqzfDKQy5tZ6pMcBxNRwhACRjHSFFtEZsXwkSNxs",
  "key32": "3dzPapmV6VvQuhbTVcrECgwdHUAz21TaYDsScsj5nNYXH9Z3YeB6Gfs9LrTT4gbFTT8XFyx6udbUGLPsbvje3mip",
  "key33": "5EacQLmB19qcz3W2hHp8uJV45LLT8X6Zdjy5S7R1zrUsnvVJnUdqzQVc1pU3mi6uLVrcFd6mgoKWPLF1pX6jnDFQ",
  "key34": "2npnyABRPJDEa9cK2FCUxBHMi1ye2orjkwgMrUreT3LMx3wQjVDtw6VSjTnB521wR56eo7f5ZcZtr2AR4jYFM2QZ",
  "key35": "4B9Qh8n91KatcCdEPFKfu1LQ4hfgeMUKWnEdv5n1FbwFE6LJd2xxxq7QiRiZ1Hni6McsF8BqNtxMwua8xaU2KHFK",
  "key36": "sf4u1u87ftbeCCFcHpsiRPMXsx97B4GhNU8D1uq6VWC3ReiWPzMY19cRUvdbjb5nZYJq55pgX9rALqiWtNeG7Qv",
  "key37": "5Dkmx5YFRysQuiC8gp4fcZVjQkkHF8Z9LqS8pvdG8sqqLwR3hfVvqVm93p8u3U7RZzryfkaGg4x46QbZJarnasXU",
  "key38": "5nxZyYMXPsuyendAo1auH2V8zjKNLzvbaA4e9QfHTkx743pLLRHpBBey4rrFPn2D1No8ycaT6qF4U1NcqsCCAaF2"
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
