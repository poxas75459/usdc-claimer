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
    "3GhpNs6JHGYTQ3Up7FjQMKAnHPyQ1x9LqcsX1HJxi5MG43FBYchgE84MEHiebeSmJJVYZr6Si21k57eSYXThynM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkphaSDSoPbGJB5ax2iqx6nEwoGCFGEbv1jZHtF4QpiSCPew1iMUWcLoDgnTdsDn2WfQrNCcLoPtGS88JmQ4gwP",
  "key1": "4HAmQjqoo3UPh1bZ1f68tfrnFybTuHFvsSVLixeo1SBY6GcP2ZRLgYiEVhcjLZU2yCfCzTKo3pM2pJnPqZRF3opz",
  "key2": "2E6BspNFnzQXV5fmoetmzwXot4Jmcm5aZFmgBCxD6Z9YEcRSbUo6uuLUuFwurDHH4RVsifi7Z5UakPavpHkHAJFb",
  "key3": "qgTdGyg8xAT5itpJ3bf6aEmMDpHGAWbSLtuyboWH746fV9da3ATdghTAxsquS2XFuA8u83jdZtzRmJQGp7Efon8",
  "key4": "bqCYb9GwvtwqQrGbuYYp1h8cHqZw744cpCVfH5XKkujTLefbKtk14M8pDrCGUdxHuWd8yJviAUdTKp4L366eUvK",
  "key5": "2vmRQ83uUg8hZAMC2TpBqAy6egmSs2ckuBUromUN2gmFf2WoenbRsGJiMzAhDsQsZkHkTfv3q46Bpdgn7et2FuxG",
  "key6": "4GW3U8rVcTcDcgE9i9dTc7vrQ5r3fBywaYLGhj5sJKJUJJXymUFdLK8niCfFteEg2rJ5vDfNoZ3BqcSatY7zGhZr",
  "key7": "32iKH5VgK7fXR6FSr6fsBpy3EiuaTZcgmmsULhrRGffT67yaXHedfECdk882s1widUjP9vizhGENUdaf9r6Uuedj",
  "key8": "3Jj87NxGwRZpfi1JjLZpodA2XFXeSQrdRGtt5NdcfwAxQ9jt1o9CFCJ9sWLrTJjvjNcMRsYrHEm8VFngEmNYfEzB",
  "key9": "M5p5jmeeHyzuzwCnc3xbaWZss6nQrtVoWmoH9Q3XjwHgcARczQsE2g2Gnxr9ZbZFw7Pybb7qDxDEFF8uCarK5FC",
  "key10": "2ven47qAHWeRbGh1ZLwnyjbcZWcpFtaKz4yWJegvigrTcHvdj2VJmDQWfZknAn7NnJA7uq437pfZZNjohRm3NUTp",
  "key11": "21H2mKCm3Bi5gfWZWEBLpUaTcauZ6WDWJdpLUY4yfWFvVcFeqgJjiksgJ4gGB7So4siztTZqSRwouKGDwuvGAvpj",
  "key12": "64AjhuUi1e4EdMWdGXNTTmmVi6UekQUsnZkSDMt6nCDfrdMm7oT3nhNjfAdE94FH8vH1X2FD2GeAGMPoVP3YAVpa",
  "key13": "4GubczWgnGenmacSvtNp8DaWvvME32uLxTgpUTKzmvuaHN8vWWy2L3MRWjtTVdAm7EFTkXdihED24GbuSQ17xXTo",
  "key14": "48bCQUBWFeZNgo7CBco3wdBVAGNwqH2wSD6KXrhoLxYmLN1yjgC1FMFno5ojvuRMQwo6hjeyFLk4oSeAX4euGE7r",
  "key15": "gkwFR684FHtzmEmAdgRGzFN4vgpZxGpUTP783YcsJ9o61CPKtK9AbzXiswiP7tVzhuwExwjxTPuWTCWQXJPnsMr",
  "key16": "58711X5G52nG2HUwJc4cVG4WUuPRUAxguHm88zFScGzA3xvRpQn5RK4dyX41DHUgNNt9nMH8cZdpR8TrCLvhbGuh",
  "key17": "2tFXgwTkrmCSJ3HUgEGktNiCEh8a3AA9KAomfeJmQqvbv7w4sjcNvcQ5qPSUcu3THx5J5H9voyknoLcKC2UKoKgH",
  "key18": "5MGov6zP2eMUVriizem3dBk2UKDLnh3a1iJnRMsYTx16JPVNDtTuoNX8DAiNtS2n7wkyUHScnGX5nAfcRz3ZbnGB",
  "key19": "28vd1woEmtRwUsN28sfNWgkLFz57L4UwD54FD6tZSc7QFt1Psq2GFDqwYchgRfBvP4WA9V11RM1zFPSLqihnq72R",
  "key20": "3vBBm3owakULR4gvGU9EvXRbNQZ16vXcqRcm95ZptsUJBoEhyUKS5kz483CBAKaGGqvu2m3NDL1ZboxbCBnvUqWg",
  "key21": "2HducsbaBmqerQx2p6ExYMgry9JTm7QS8id7B27JXSHRf3EyetzyUTbaLCvf1khFFoqAQjaNCjFYYZPkqgwdogX8",
  "key22": "3D7QvEgiKXEREZgwTyLSoixSYrYQwmzFJY1BZVuCxmFBsorgM1dwUoM7mHu7N6AhsGfa2VXoxp2YP93wWLeYb3qZ",
  "key23": "4y2HLh1Vquue2qn3qBv9FE6kU7m99DXSop3kcD4GwtARm3wYimGJk8ZespgiagmS4QmPmJVudZdFD1kL7asWFRo3",
  "key24": "24Wkrrz8sF6ZEmnr4dF4fj7mNnzNTT3gFdfFjkvCHev3RC4Hx8sK8EV48aEqugHf4Cgbjzbx4mGXF4C8RYqQxT3D",
  "key25": "25VeZLKt5NVkxd71R9wKjvhukmK77EyGwfVrCd6kSjrPBLXG7Nbo4CAS2dkyYonUb44mnNLb9KwZaC621AfiZLbW",
  "key26": "ys3zKQbdLzRbdJS63XxMVXVNa3wAGjSVj9czV3QtFAxG1vtVKzUMaAXfj6zkrcEaZ2dnu3TAtmc2fgYDUY7C2yA",
  "key27": "VTouE7ysg35vUXqiCh6r83Zas7fuLbJSmV6ynLsb1sP2UGyM3oDbjQxN9nZr5vtrTFsDumr2BBDy6Jm3htsDpwZ",
  "key28": "39hDVsrsSaRgegFLN3WGfbQnFpW7JQLWorsphFc2w51Rid9TtsuR7QcrSd8PocdShY3MzgAD3zhCF7e51Gm3CNyS"
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
