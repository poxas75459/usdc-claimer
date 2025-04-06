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
    "41qbj1rcdkar5btNge7atvAotXFxuXMxoAvjw6a9U1oNxXmjngruKDc8wXnjYY2Kdzo5dYJ3X2kL1nyjD6vXkzcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EF4ebQueTkavAYL8mY1Qg3FhYZ4iYPitbZrrdCas5kfbrpSPDbj3c6RtJrSJ1jGjug5DPzWFW4CMm1Xso5zcRtp",
  "key1": "eg5Re8Hj98QxHbopaFT8oxK5rJPJzhhvB6ud2f3CwcLr7FHv1i6sERRLiwYTEHg8yc3cM9w31kYy9P7kyJt8zrT",
  "key2": "WPEpP8u6HBpCj7XV658Z7stYync3RywFwJBhJRrFatmchdd8T4fjbtUPEV1ZSVobGFcYz6UtKfBxGApZKUbB81h",
  "key3": "UEgVxfj8AfpujJhSmGoBZriNvzHQyxoAM4vkrZvE9hZv1H1aYfBEiC2kdY2wH1skUzvKXSsij8L3a4ZxvENcMQe",
  "key4": "4e586QN5zGgbh4gFmUuYq15v8uYgUbdorH5cvob9ZPA8jTXwxXYSCDUzdPpRHAwbS3QDhdeJ5kQp8ETmJAfJJyri",
  "key5": "4cuq4uBv9Ybvkfgt9FJkafoAPYbdYEkvCnhY4txvs2DvTbzLQ8UXBTnFkDQibGkWPnU914CW91GkswtqWLDSxa3W",
  "key6": "izUuxqkz71b6Z1rg4qzf8DWJozXiFpmLFtyjSNAAdM33rWvMQBqv69x7AoEW8LFzHajcUPB4nQX8u6jfbyaTHKs",
  "key7": "4YkY5k2HUwZb7bT272oMDXJKysEt8BaQcEGs9u2E4Z9T1GHnK7B8e3r9oJEx15hZgBaDBQvCfHAZhNGLJ4kKhMJe",
  "key8": "3gndzBZPWyVnkVbgoknffZX8fhwa8yjPnMgdtZuzCsvpsnAzMcB7zWwBMsNUgvGbJjaY7jmz6GosLKs1t2ok1ZKB",
  "key9": "76j2aG48eREHNV1XDmfHY12oA2CCEtePkU8QNAKmwcn7C6YhdL9JSXCTqP63mk6BTCWeVhQHUNnuL41YPcrHzZJ",
  "key10": "49gupc2c7jzS6qyPCNthUADiQSo4FXKtPt2oK9Sk8npMRUPyiFKXJDncijRZiUp16rv8YifPubR5fovzZbxeZrT4",
  "key11": "5yhnB6gqP5QCcbWpnGvFauzPqAMkGVLRwyU8A9kdgJkwFNYs1BYpy9yPoTafi2gnnMvnqxExVAZtpsmffEKQSTpk",
  "key12": "4zUa3LNwyj1Ezj82u7PhCvAddJzbnT4RMsS1HC3KgbnAupyeRagkkrCsyU11rAvAjuDq5FDnHMSM8SxYBRzHgDSH",
  "key13": "nr2tpR3cPEPMo46Ct7swx8H4nc2r6XiE2yeyaxwrzSZJndHJFRvwHCsoX72pzvNSjTtJ8mmZ2XQSA8UQtJZfJpp",
  "key14": "526giTWmv1hRP85xAGdV62tBHqa8c5E6r9sjCFeGsbvHsHXDcwNGq8vA7wiJALLTNP8jZXBDuUrxkRysvCVorUdk",
  "key15": "VTuTQcK86PBxK1aBjkW4uzhvxpfe8tGop5rGUJB2mnNSYHm5igKpG7TmKtPmy3dVU5Eisc91oVyhf6p1syegChV",
  "key16": "4hhyLtaVGdY5rFiMjAET5UsrAoW1MQTp227Ni8YybYZ3TTLfcyE7CDnGrkvzd3SiBFc5ZDK26nB9wnhS29RFmxXY",
  "key17": "2cHFEkvrC8NWzjaMcSdQFNzdSGbZskWq6XsxXKRk3kinfPYwWn3n9b4uyJnWFV4MiH9LotviHcp8BnbApBgveqiL",
  "key18": "5f4t9svKxRKVxdEdyj25rLqCq6cvvsrzvDxENnS1XRc8aF9RwmbQZGpFhJ6SkvBdWookAcV9F1YNqC6f6kudS6pg",
  "key19": "2t3XAoywUg9YDVcS2XmeEgx5M4i4a33VtrXLAqDRFmPkTwH8FWtkzvWTif6Pazg6SbiyGot8eKF2H7jsRc2KV5jz",
  "key20": "64tpim8zWHHEZ173fK4aVyQb1KSWcXNpGZaVtbyFNCxkzZYFEdEEuzwsSGsTPcrg8XzYpGZLo7ihQgd1AwJdVoLk",
  "key21": "HTm5Xf3pkHgFBFtq9SiRSv23QZQkvS2947AUt2DehgqARvEsoNmikizMq5vQoWu9A3e3Hdhr9axYE9VptHfUVXJ",
  "key22": "3atVQt242gbNiyzwECMCJtyRcQoNjGESkdBcrmVyzxBvcCtSFPzT5485mH1c654G4YLwLFPFTd6dxvJ7XUmYXVGs",
  "key23": "64Yhm3cYN5kgEoBq9pLBAbsm5DwhAe4dE4His18jMFLcvTgXf5NS6hp75fpSZ9boMfdpsD4fj9WXUJxHw3X1RUKj",
  "key24": "2pFdd15ktuwMrtsvxa9gUJWBjXNPAF1eEhnFuruZY66bb2nx4b3LHMyUUzu29YeRxabN2LtPJ2y9igTtX5qfj6u3",
  "key25": "545BE6M3o4HtLF1d1nKoazkKP2BTp15c1gRyY5pbqavPU4g7tZKiGDHjTrP9mdfgwAHty9DZ2KREVWGTCUgCykUE",
  "key26": "3CTLs51aAJKwxj98khqipBEbFKFyU7189jzro1uW94dEdy7CYiSho9af2paQYqT6zMTxEqchzYmcJvxSciD3JchA",
  "key27": "2PETVLfhFaGaL2uv1QqhmnuztweXSPgNQGtwY9TQbU3ABv6vbFC7dATuNPdG6qfvXu265jXkprSdJbBEHsujmfTK",
  "key28": "n664SkBwdQF4TNsbXB8GhRt8WTPxi35wmpo6ZE3XymSFApnNXnoCh4YCT5vh9TLyp3rMy1hNuNmtmSSFnoeZjyd",
  "key29": "3awcWXXHVnv4hk9cy88VP5Yy3LGSFhmebd2oZ2QMUrDeJfch9JFmQjErSWzTRmJKtp49rKBNyF6YmQCvYx4wQpXj"
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
