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
    "3MWdvEKpdHwBg4yoofhUazrrGtW4AT3JFtnwq4uvZ7kFsHYZjqhuDuSXqN3CZv8Fhqb58HnHKvscj2y12ZRZhmsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmqBjd5vcbNfRGfXMZAC7VwhCitSTZpYduEEvRAfYC1bYRNMbKdLE2hs68gNRfKdTehQERZmTdzR4K2csDXtS4f",
  "key1": "3mRPpTnm52pWUe6pfvcNdm6qHFfc99syhaBvs7cB2mireZebFJHesp2Ydzapityjr99Ww4XJDtjPDyGvgmMJADoA",
  "key2": "51TWEyRL8tpHQKAmSHPcjPpezx6JP5a4XifLfSez6nvjiWGKMsWqMQQsCL9TeGSVFnNgkCGAdbdy6wdCXkn7dNvr",
  "key3": "5XtYoMnH3dFPegvXEK4UiJYYgwDgj6ACWHafjRaD2Gn2n9K3TzA9jtgWQHBtPPUJgk6RW783Rc5cDSgAB4B5FEAs",
  "key4": "4RhFxBATBSzunT38SaQ7vEGnXXKZ5QX47i84VQVdj3jmMEVKgi1t5Ufq9gee86TNWH82k5EE5pzx4BivURbySkAy",
  "key5": "4CvYmp37YkivuudFmd3qVrKypNtowWA2E8xkJVb53xX96iiku44ooGWjsU5wTe9hsffrqmZMVKrQXCup5EzjF3LJ",
  "key6": "5fce1ZbZcuPXGNAb3ypJskxeJgEPbdtrf4B4pgrmZJQF4oYEWsn1XmJG4UPUFAAPrqzxDg629DLVcTpQWZ6nLYQr",
  "key7": "2XCbvLtyiNYEqBd7ieNSKpbzL7at4LKpNYQsotH8szLSUmwumUarYHux4wTbGeW1g7oQEtrjZUZ6yLb8EvPseKoc",
  "key8": "4wbx717bmzXoqAdqH1AHK7ASK5DN3WdRouneB1puiDvdvV7va3rUKMqfvqjHyhR6qhD2XNW2MRRqxDZiiMt55aQR",
  "key9": "5UAZeuBwNLbjo5LQCLwx9jrcmTtDhub6MRjh11veHhfARuZMANCNFuutPBvwN6p8HxyMMUjbx7vGXa7qNY6VdAQ8",
  "key10": "4JcsjhZPTo1hmgvDWayt17GFbsDpuSNooQxensn66ezWT4ZsrcSVo7NN2ahSGpsxZXZAe2gmWA1pbmppYvQyKF3d",
  "key11": "BaQUVjcvMns5fEnLAqB8fqfekEHveY4uL1NEUAC4XaY8MaVyXWgMDrZJhSFKhRGwsoGGFGA7qKmurn22MKRWkJu",
  "key12": "3VCSHEqEC5pu7nSkPk44Tpme1QXgC2fG15oMButosog3uNDVgrpmbewzbfX8SP6PDwJCNkL3V6Z35RaC7finmE1D",
  "key13": "4uS7VC2cw6fpuDBiNbJeDJ2Rm9C8nuuNjQwBVYHUpaH7Pj7nrAEkTtFbjaYbZk2NPmyavsAgaToRSLE6wAU2vPkh",
  "key14": "4N3SEr9VER7vX5JrwA82tY8j2A5TTzi1yxsMhrSUGLQbLthvevfQN4mJb8kKRjyq2onYhVg1ySgMFxSoXZFesrQm",
  "key15": "23Q7QK2pLf5AUNonNnzgtTFVyc28GJABtz5Mgnvp5eVRr3V8Ni9t1hjfXEKfaPpimMHpCaWZZZgPauCtVsLczKZk",
  "key16": "5ZP9KTQEzFVziZGKEwuRvTKfyFydUso8Sz3w4iCWbxwFG4WJsWUhx4BccFj3v1FTWKfeC8cVFdh6krMg9gps5aYo",
  "key17": "32M53Rc1b2JwyAU1MVSZh6om3bCLizqJTZMPMyUFj5ykb5uJ2BJLMW2njQKFr9urYj8nfuEVuCdx9kYPNnyrKwRc",
  "key18": "5mfNy9KUAoqic42hK4Q94UU3HGqXs9sJS88hk1PvLTgyHLZKi5ddKbRd9mCYULDfmQtkN4eXvcYvpwrTrMMXYMZ5",
  "key19": "29qpsBnG3Kow87nfsi6giwqm5yA69EkREgkRb8Edn5UBshkKmLbtakvCP8smUS86CNNUpghCxPa1GUzk2SvtBhFB",
  "key20": "dWdJgwYnaQBEg3WJjBzA8a6MQMqSDopTMjNG1bdZJGB9xaPBF5ujuqoQ7BtSpdjqmmsSdwdZ3AcPrKjm1pG93rf",
  "key21": "NT8LBMN6t52Vs4zTcGmPfdZa6W7JZr4HP2fGyTgTwFCpzzCfZZDgAjbZr8kJUHvRTGG5h74HB3qXkY3GguNUxoR",
  "key22": "bLVQ7KDJDihhSB5dBxN89xXFTH7EyYFdpDB1pNXWnyTL5drBJwbbv3e79v9asfabQHVa7g6ayvAhLHpMi8im4Fp",
  "key23": "5DT6paR8tihKtNx2qYom662JfNDzSLhUY76w6miXir7i5bw9KB6MYNmW3zdDPJ5btfQTjdA7qbg8GzcdiXpE3PfU",
  "key24": "3MiGdRKj62UDXExz9WH2s1DSGUpf8APqxK7qhS5peGjBQxH7BiHYB7yaLofUpYUteLSixTKEk443qC2Yh6c35G8C",
  "key25": "5LFZREms43wimjTP8E5DfSDisUisZaaWK4s1zUXsv2HDju8GDoW6yuP7NpSu6bt7UZSn9yQwspZvADqJaKBcp2ny",
  "key26": "5FLRje944UkT7UoUECmHZeMm2oYxsXQkoEAwNf1LHN1NHXnxkgmyVqMKaAjwrayBqSXy891HW1SuRiJa8GichJ1n",
  "key27": "4Yd9aSkfTdQL3Wooynf7Xe4QJ85Fj2Au3AdCe8GkUnAfcj2ggeB17YcMjJtA5jps8bxXDXd2x3Xxd8jRZrsxa9M9",
  "key28": "2QGNzzpFrLNUQ2kMbcKKut8u96qiZ5qYKshqZ1Ka8EUBTWPWvowUGYtD6N1hy3sXRGbAPCZBrbyj5UBN1QNiQ7cn",
  "key29": "ii2YcuEWkQ9xSbEWLADqrN2besrhxT6iHvWvqVGhpLDjttYExH3nVdbMFD5QVgEaXAHT3Djhxi5H45MjCiShnvo",
  "key30": "5Wwr9gZG3dEViKAXL7EguuZCZjr6BxdYFHtL8XymKCXrnJJEVVA53N84NgiKGRSuHbjLyxJYbVW6m8RqVYSf7wfM",
  "key31": "4gz8s5yJD3Y1VYpp48AzUaiewqHYdx7irMeLMmdk8wjPWFsVk16jvKjqpcHy8o8mGPTSMYXsHdryCWHZTwm2ne27",
  "key32": "3N1eaZ7Ye3krSyGJzEzkBRvaU6n4EvVSnKv5HXpZBSYupPfNmqoGyf16LUrMvKWm62k5vR9G6X1pwFpJb1qJ2aps",
  "key33": "29yRKnz3JSvdCxzJMc841kMvgNWUQDcH6Qx2cJz4Qg7EKf2vbTn535bLqEeHMPgSP9TeDBATvuujgehASteEhfcQ",
  "key34": "2Cpq8aei73b7nQsV1ACJasbhAq3q1xgN7xUVD7XP5CbUqXFFTJF9VMTZ7eQi6yCYvFrRLoaMwn4bnTvNMAsiPUoQ",
  "key35": "5WTtzC1zGboz9MBHnu6Yw32V4dMfEUvajHRLteJwQsBz7VHymUufokRpvaq5gP7iZSq3YHZCev7WXHfsKAbJuQWa",
  "key36": "4dRpNG5hTtfrtQaPb87hTaXGTbm2tJaPKKbznJCy5CgMvtUyMRHhApiW13A22vsdByrLL4wrf6A3J4M62UMZYN9N",
  "key37": "62aYE9QeUaLYqTQ2dvnbbsfLnxBdoGwkZbdeZ1DsVU5oZT6xWbGMaRzjNjc5vXBWcGU7ZnpTFfkwC5PsewhyRv7C",
  "key38": "3YGHaNVn7rWA54YNzQjrNWL94SmJqDf7TigrYzRKGWmj2QbuGVtzzAcuMTn3zevTZVdqFbsqqjdMB2wV2hjrpUE9"
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
