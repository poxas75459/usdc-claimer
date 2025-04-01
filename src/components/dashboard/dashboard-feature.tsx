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
    "39S1pTzQc1EhYV6HNDmuj3mkK7YStcWKEoh6pGKYScmrx5XEAigKS49Eqw85N5fAJRAe2kmfXj1kwTPJC3QKJwWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtPJh2HoLYwNUbwArpPZtgBjgCA2zJdKUwrD6tDSU9LLobn4YrCkHoZ8B5Ftvt6XVgeH6fYgSUSoE31o2mqAk85",
  "key1": "2bc13nd6x6vQUL4KvwAwVHwoHkPF6PUx1FXvXxRWbEwq8p1Vh8drm6gRjqGxiG9RCbi449EoJaufzkFmXYnkfSgS",
  "key2": "3y631jvkB7G8h6rVaHnXBSy2kbvsHdCreQj3jFK87tseCevp9iRVcivzHaNiiDJczbXRhw7s9LnA8uedce5a7yyz",
  "key3": "2Eopesqv1FwJEdG54PjCnQNMRGFV6aNzZ2bXerpFJFKgzeoyEF2irN56nVbtE15KSnCZYcsHRBHUSaFU1BmFWc84",
  "key4": "4xxGisz1AR8xHx3RzBrTA7QYtmCTRinw4LT6H71K2J1KfQ2pWEB8DmwjJu7HqZAkCmH51eQPzgkoQVydqSasbskT",
  "key5": "5uCzcUapnd1gCmLmiexzcgip3xfsDxw9d6bKaBYovbQmZccfXDwPHrnL3BzTncqK58Pu8cKqqWo24J4xfuYzPwgU",
  "key6": "2LAvxCBBHXwMn38i6Vio8cVcV8ixQ1hkMpdMXcB3fL9GemchKfggesb1goTqgCpyRWEACmG52FvGagm7rX4T26SQ",
  "key7": "3BckvCZobW4w9u9U7kVmoWYZM75jMnYqMsqe6aFkjKs2ZnwahVmRVFXTsgupkLSKpkM7VpPC9u2CruG7nqsEw1o5",
  "key8": "5Patzzfu1XhzRuLTNip4XpkK5McTrebcjuQTK7RsGk4uUFLMSr8ANd6LF4QjnyEBbPwXxccz2WMxLDMnKkMsiyn7",
  "key9": "67ewZ6Yah5Lnwtzux6LuRSzYBUiGJWJqK3Pk3LuooKnP3EVvEdhReKTQnDXMs5istdbd52zwin9zQnQKSc3ftEJt",
  "key10": "2xVVZTpNQCD4ufwpPdsbTkkyqYj5Q2mjwYBLuEtZ8fgzcsLvmVmWktJRNcgdYPJTPxkxjXnYAdH6CieARKHDov9n",
  "key11": "2m4KwbExS7Q8Pm1VUC75VdoP8tenus7x2vL9xxfTA3LqvfsvWe36KA8Ts3nTbTysJ5p4ShMETxJU54j5jJKFzSwP",
  "key12": "2xvNEXAkVXjHvBUC4qRNyaNks8d1Yi97afKSax2By1nigrwzvLZ2iey933WVMoPNfYSDfVEG29XtTQ3PvJDdV2wG",
  "key13": "5pxpwvk4AY7ULaReqYZd6mbpdFu2a8yCscigNra2Nsba2rGGLTetrnKY8V5afJt5Yk47xe8ooot38zM2RUqCVZVY",
  "key14": "4JAMgXzPTiVg4kGBnZJ8Q4YjYMrJV1dSghFdF48C4FJXXrW2di2MBtUMuW1YRawbwpzZb4VH4oMLHkkv5NBrwxxK",
  "key15": "1qZzxUoxfpq7vn79k6DuDXwmF81EybhcpKveWq5QnRx6BiTfVV9R2d1FkuVsFwcL2TjV3XBc7ZQJAR6AQ7cW7ht",
  "key16": "3SZn9kKKiE1PFHUw5znuh4LTmuPki8jG5hRJm1jxtK89FEnq2qKCTSmQZnzZqxHGSiMiUqQ43U8ckLXFrGSDxCzp",
  "key17": "2Ru63w9GfFRUsw26E3eC7si58KoVCWJ9Ap5RQD7K4qKNwenVq38A25ScKvQa6g9xFp6XAc9JbKrJhKQZGmqonRnB",
  "key18": "2fHeuvApsAhygggFGq7pL5vTP1g2EMd4WeYRAVFqetbrtsYcuzU5UMLe9RP97PMWHkW4yjW86B1RDs2R6ahtH7oi",
  "key19": "5Xv7NiF3hm8VCYZLxsJ5iKKLSAhLVsXQvBuBAvk7nbh1AK2BscqZMc7LadNtDuZBXq4ug6urkVVcG9ujWpefUTDS",
  "key20": "ibeAi33Qku77ktx2DbXgg5S2GNQYYabZTF8ErYVSoezdTVvRRSHiNBZ1yPREiuKmsehBjmYL9HkdGz3WRTozUMr",
  "key21": "2WVAFN14RAW1kkVwS3fdguhPgecYu2Ug2HFw7GjNQDkomFV9Gb9TP8RgSbrfoe7XpadQ9za9GZgvSwzFzpncLTtB",
  "key22": "2XurJvKTpsjojfPSNR9KmDPPUXuQGAAv9JRnUGPNjZxdMnMGVmAAShy4usvAZCjktmskV8GyVpQSCSiigFupc29e",
  "key23": "5yTrEcz3LjuVL6wpZWT6zZuZQeZNCuC1RXtiqdAFAkwPAQaLPFVoovwULSH2nTWRggeHNsi3dTfYcQ3bijoxFMwB",
  "key24": "25Ud6fNog1A7r6RDpBP6GMSkTnasM42WroWFHBYuesEFPv3hD2woNuVgzThrAvPtStUkZ7kuFukPeMEgzQq9xwkg",
  "key25": "ATrNnhhnG1a5yUa8psq9kdaSYXeJhsp8Q3exPmEE8Ry82sqAr9zH6fKw4jYSF8PAYYSpB87s6R43TNwokm4U8Jb",
  "key26": "ePbh4djdfAqxVr4M2e5hKY7Fn3kfB72HLayoZDhU2ZpdR99Nv7LUERzmqtEyhTRzSymmRbCEoHjk6HVhpG4eofd",
  "key27": "3nU2X3pzAUXSv1P7WbcPMjw1iDzcdHizJLEWSZWgVbMYuX8SnF4FsKUh781FjJHHxsd5SH5jSE6T8npWFmuqmwYv",
  "key28": "4yJnSrQnRhS3asctzwt3hURzFLHD95KJJeYz58NWK9UfQSgXUcgN7Qu4Pgkvh2NxmQakSfuKSabd9YBQT5nQCeyj",
  "key29": "eyWVQ7pYShYSZevgocvKiKV6a2cKsQrQ2VhV6GpKxEhnXBW4yeTd7LEDuf3aBzr3XKY4SEjnkjfpHeJUgXgWY7c"
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
