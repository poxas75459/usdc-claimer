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
    "3RU8jvKEJz8kep5JdmNfbtjiD1VCjLqwC7tXVPCiPGXh2RGzNcMdGnGnWYsakDQb92Ha4J8h5ktvWrwcMDnA5tZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46WTaiFnWusJSedHxk3CwGTeg5dNTGNsHUgZSxT52STuWx4kcHxKS8ku8jpmEgQbV2SMpaUY97gQx21CWosuzyQo",
  "key1": "3GicwX8sJawx1tkJQ715ckjbo3NPHFf13Lnq2Q4C9L4CUMmqg5HwiKjyGVxUMuzpmt8ggtRBLm6mcG2QPMA4KN7R",
  "key2": "5Butaqr6b3UAbj9G1ebSswcHj72ZVnsHGkvWN9CqvrXr7fdnkCisSP5i3VKesfA2VxqQRPxoYe7VTuoyWTch3Kbx",
  "key3": "qKLKJLdHsVg7SpnmMn9qHwEAk13tW9tzg6tJqaz3xrJJhNqb8awR5WMMt6qHW2C2rBRtAbPPHM2m7hUS34nFhQP",
  "key4": "2sbCehXSyQkW5pSNSh83QJ5GhXEvh5ES8oBpPB8Z5izyyi1tSSPkuZit3LKGoufrkE4SYQyKNJ8q5ovweCYYYZMB",
  "key5": "5Fhncj3s3BBLAyFEdgzqbQUppXMgH6TLfQx7YM6rMjN6MX7QbzF1bqWQZJjk3R3oLoFzNUh3pp6P6wDpgKBQmari",
  "key6": "4gohYY98u9aeW6kSKMQSTC85QPPo1eg3XU5TFjLcEtSnn8bSve7vanE4Gkik3oEC2w6faWmj5mMqCfxSywrnYQjS",
  "key7": "4BJVpvt1J4a8G8JqHrQ4TbQZLHiyoacpvTtoUpyTCDku37JRfDo4WUa9WHPpAqQqT8D11q25yshmYo4Bzuc8uNFM",
  "key8": "5jiospWgJhquQyvVcux1Vyd5XTxPXTg9ywM8M7yWALqhn9GoDX2Nu2bsHxP2Tiova9Le7j3gtT1LFe7JDtiRP916",
  "key9": "2TmAv6AnYpbQKteyp5pcGvCUSKDM2TzvJu2HvEdPxPCr1ABc4LbVDJuuup8CWNEQR3kb4SzTQjbVR7v7z4jhhrgq",
  "key10": "Y75kegCvRgHg4u3HstFPHj82mt38tCeb1GZZbpWXLTKFDQ5vVZKHbb4AfHNP9ca3DsGGTbzS4F3UZT6CpRyEz57",
  "key11": "9NEKHCdjsXgZDNQGBYrUbe5FkWkzAPmbjZ4VFzzXdM87L4wd5eyC7mazsAbQEPVQJWLctbVCD6HnWAa17SKQYor",
  "key12": "3BTPTJo8it1xJ9RUshCjroigZEkgbNhH2Ho3qkmVA8CsPAaWZGaewAx4reHE4jNQco9meugf24uJAiAL9KET9VL3",
  "key13": "5UfamRJSLrQVBU9m42r8wQh5NUFeTBgH3RZjJaDnysH68RG6SrpawXhBi1qzNGYk66qwmEBzsxq7wb63CmtTnFW8",
  "key14": "ZmRTu59ikKyhBnnHRpdX79Tm7NqXKzQZYy2VdLTXwvQQk4RCWaPyRrbeb7KrDJcn3ZUMBM85WYREij5Z2SHPYn2",
  "key15": "3ybrwMHWdSyeCJnoj2aK3YeGjrnBG1pwrRxB2rEsb5cm9SHfrDr7ztFSQ3DXc9fXjiSY4h7A19naAFMA4419HHzG",
  "key16": "5n8DZgkGXz1eTXQPRSK8Uo3ypamTCfvYLtGsZzU9H4qU5qSf3p1QBs5eeV3sWbjtHiE66ASwExFGcqHdJchz8nBU",
  "key17": "5iinUVQmYrijxR8N9W72QREW3wZLK15MoptCcYoirbYagDBDcnBrQ8hDBPzJuUmMr9EA3MurYC2n69BE9Yiciac6",
  "key18": "38fY1Q8g4tjLSX29ZoLb9h7tJNxq5kzCL1MVWwcp1PwptduANwPk2chVsF5SAmz99cziP6F3QfdYzBRSAiaToe7G",
  "key19": "65xx1rhCrpjBKTdfAK4VD6h2xBrEsYWRefQn5ik7GQfUM7R3dHDthrfXA6ePnUyLR5YwgEEdtrTeTmLCKz2iyBXR",
  "key20": "43jb8K2ty47GTv66akZEdfekzgN5gRk6KQoMbcCSyYZjmpgbBATUHXXyppCNwLY7YTwKu2bRfHVT3CjaKN17JZRP",
  "key21": "4WK883ZxozccKDGNbYxnP2UfZ82ZRYkVsNc1rpWx6my6QhXUf4gN4ntHe2FaSRBNju4SDvTTZZMwZ3F7zz9Lp7YP",
  "key22": "4JeaSDg2qrTKznkLGzxzZxV3sohr4jYerzdux51onBfBp2jgUpTBRvzguT4fVFXxMVFjkFuyRrzqnJfPaqNkvHoL",
  "key23": "4hYWSDtY4vPy6ZcCqaSAdb5fvaBtRN4iUUWnH3kTzAbNSmL8EuW4SPMLXdqj55qFrzcQ2fuygsmV9yCFM7KbVVE8",
  "key24": "49R7ZNctYW6m3DxaVWRVrgWr2GkU2odgBbAdpVodpk3ofz3D6XVuZBbebZY41JcKdGBArj16chQzKAag7PvFx246",
  "key25": "24CcR2Yzq5v96UuCgezcweso1RSgUG4UFoVQKTSX5DXiLNB8qrqSKYWYLgJczwcwdgNFnCrDWVoNtsK7fUuhqz1y",
  "key26": "2Q4PskHWKDPCEoF8WZdCjirvRXroVCfPyeAuLmLwBn2zqktBFrijPkRAn3DKbCpkLok8W6ox9MSWsca3mTvigUsx",
  "key27": "xMgmredrcYRycXSvuzKF6KQ9VkQHh28AGMry8dZFmaM9xYQhHkHwBYiUdjkHW1qub3oCfME1s1k1wnSJ2uZugHv",
  "key28": "2Mt3JouC9ZiFNXDi6rjXPX47mawkqheco9s8hkgdLBesxJBGz41kLQS9HzY5JFfA9Wip4f1soTKUiUMe15oS9F6n",
  "key29": "mjm2XJDMifD1Sn9GxycBcFck4a8W8RBjYWsgW41vBnMTbKxAQiAWez8n9Bnp7psPd4vYqkoXGsYzSCPvcELug5F",
  "key30": "3edD6bziwXpdfUgbVcopPZ4krZiBgFMuoo1XyKqB93eteTgQj2GL5emnYyidm4jDZTUcoFQSZ2LYNkYj67Qq9TZc",
  "key31": "u7wDZA4soPoz2Uz8yr7JypjiEtPdCtnr1iBNQ3XeJJYomHYBrDqqPjGEXCTMeqUiyteeoenigm8sa68FVE1UuNG",
  "key32": "VF1pK4Cb8WiMRWdvV5iwjAC7V5iCDCQo1eTx76xJrZx55KQUUfGbjHDQwJm5WgTqTsYVuvsx2a62QPLDB89A5Dr",
  "key33": "5mwQ3hhUmeTeSwdME68ZcwfNJZuaTgLm2p3i5HBU4GQwREi9ootw51x67svmzd3Pkhtbg3XW9CKsNTpvz2Khxvow",
  "key34": "5ZMdaB2XtE56g8n713tGpf4ecCnU6SQJ69X943niDGmanjnvk76Moo73cC5nGfqBERNaFzEU2U7tsJRmu2jVAPdS"
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
