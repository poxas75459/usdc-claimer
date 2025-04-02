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
    "4G98QRpSG7hMDjyykrqJUoAAjgvYnBiW6MmF2rLzPDUxT42CLEXiPYqd33iqB1NfDmmKotniwb6kJUHwkKpRJZ8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWenLCcqZZ1BpRwQLc3Jg3vxAXrXAvPgjfriEVkSvscKwm53ndYYxuzhNixLa2BWgbZg9AMkQuPfsRTDweiSrT",
  "key1": "Rt3cGuQTRiiWDyyrHp6eEVhjqEUkpB7q7VC1Fup2LFQhMZeydxtNg5Cxs5Je3XWsn7QjzcUEmZrp6YUoxmyjnjD",
  "key2": "2aDbCGoS1GrrMRrgc38REPWnPJsvoj3UyCtnPfwzef6LTCPicSpWSKiwuqyYs1T1emLA6ggQNqozqjgA7Sjsk5b9",
  "key3": "23imxAUX6Bnt6cu7CV2jctLZhvUBENtvo2HMVJuVu2tdUYGgdz5bjEq8VCjx412EqwUS52qCuCKvD83SX9bAnzRV",
  "key4": "ArLERUBaDFd82sBVaE9umnbDMgxcUeHSVKRBWEfHC7HEp7i7Ycv24UMH8weSmsGgTqwEGBQGwVXiPyTi5fajUS6",
  "key5": "36y3DEoLtCyNALDosmvLGcoshkuZU3seLtbz7oGjURE4Xt5jay6H5T7eYEQm8JrcRB4E7uWSjpzy47rsfy2Dv4Fe",
  "key6": "2QAg966ZsFNdTZbFUpmt5h7HQ8rEA13aXpnCMQomtdKEsowmjemsaCwyBknqcKq1GiS4oHWAqd87EBegFSccENS3",
  "key7": "5Hz8BfYhHcL1Az9NPQwW8jnACANfJpuSCJsPB3bCC8Hh2ybFqrJAFKYh7Mk29tqXyw3Bsef1cgTVLXo2gHzMnDhd",
  "key8": "5MWvNVx4d7Yg11sPatWa1kpD1zjCWeRgQnxGwwPbcG25P4kx4KAfF9ozuqmqvmxx8dA5UfdizyqgSfS12KUTTjWL",
  "key9": "9U57SVvJcFDjaTyxPbUAjzQpcpguiB3k7atSUPoXozGy6vp56B4eRdtVhKp4Tj1ZRea2CKEUQAK5HqjyxAB6R1f",
  "key10": "3kmapgTnDuykzx9Jsgc6gfGsQXj7uYKovFKsSPet3Nx8D65zqV58qih4cTju2YCXAF8Aa6WfwrtceAZGvLAHMyuh",
  "key11": "eY28DU6fQ1gau99PD6ar8N8cbjumAyhyvXDMirpwqp2YCn1sraqB6vtaeSrtgorUFucfnCkZpi5gttaVweeLPtG",
  "key12": "3FzQdgjLRgZSwrNVdpc5tN1TGXsBLHYsfzBxJtvNqxYDaLnJBZS8bov8iAj7afx8dxG1mqDC2PQPBWskKxX7z7R9",
  "key13": "2o1Cd3xXLUH5VCReixbnV7fgu8sVjw6B8a5upJugk4JvAzvAkTtoXAeikJfZQr7PozhPL1dxLRyiQ5iV1NtVMkcq",
  "key14": "431F9wuaPie7S3cnrteEqnGeySZQi9rstPGHn7zrUgN9VUH7w9EWZEQnVD8R8kHARGnmv4AycNn5fE5VTGRcKBF7",
  "key15": "3Vm64jzCjpFtpKs2MJjgCcGgCGKz5MvxnAGWPYnqeeHt652DBUnJs3bdJiDm8KnERvWYnQqPAuRZCPwo6zPCLj3z",
  "key16": "4trwJn3vybkgcFuRJX2TZhfyt6sdvDLTRihdAHVNWJWVPJe6P8TU7g4WwRoJqjn5i52pdUNCLbfi4ibUTvMMk7gT",
  "key17": "5au1Xk1EURMjqLjPT5RvhPMP2HAWSgGp5pvhgjAbgLoSuuU7GYPB3RkUxVtNx8B6Ujqyu85N2pTSPrfSBzGQxuLN",
  "key18": "2g1khBsT2DVnvxwHbmv5eCJtaitkLHd2Sv1DwdeoSVDYaGG3jQrzHj2pzH3Gj9gZmiZKF1V25wQDE2woW5bduwi5",
  "key19": "3mBTvYqoX1bo1bdJZw7BqL2ZcNHpLguvhSGVbnha7jML9fm6VALR4MjNynn9W9GxFFjQ5JrfxZhFyDWVaSPpGhcx",
  "key20": "3E8NHWTDngtLZN8EgPDT2M2cQinyxgKG7B2DJLH3PsMQZ3y1yttPMg2w4GnbkfAQoSHYDQsiriHi1zfb3jSobqEV",
  "key21": "3nWpfT3rKnKCc8rKo4vqZbdnBvrb2xCkhdZncHMa91uvtMqXbEM4KbWTwLqXxdkkH6rLbmUEB89NjiTb2xuG593k",
  "key22": "2JGejRy4cRYyJzLvSouXGHYxZhNXsGro8Jc9sEkMFFb7KyHSi6cHBNChT4h35c4vWJqMKyFDKpD1dt6K9zH9KyQJ",
  "key23": "42GkGGWZ23R9h5iRq9kcmLsx3SPLh2QArFubPwFSCMUnG4WJXr3heGzQGp4JvFaEDzhwotJznghXLUNEbeN1z62j",
  "key24": "4uGm4x9kD3mLWkQ3PjoBd7UrVTq1S67JhnpoBTJTXoeRoHJetg6rTm4VMJ3KHv12DzpmMBPFL7SM64Nrr62gbymR",
  "key25": "3zvTidYgnYZuu8aegunhv7WyrNDxy2KuPvEQ9DSk3aRzGe7L3AejkJwc1HoTecojEFDsAcUZh1GfehTS3zFnSTkd",
  "key26": "2SCFHBqiZavFwhRhFAp82byMAb4j5qpKt4EePBT4aAE9NYz3vxnzqqzV3KD8S2zrbhvNhr5DwEjGyw3spdTafQ7w",
  "key27": "ncHwmmwDkrEEdwsYS2rKmyzfu6xHLfPkzysenWgfLBdLztGoFohS65EmZH67ZN7umxBXcEydM29ELbwx9ev9Nhk",
  "key28": "iUfbHUN4dgEVsCqJmq16spgkwmuX174vXVQ5XsVSiy4YFecycUJFQFxFH4zbutqSKbjGVpSMUGeWgGcqB8riGfK",
  "key29": "2oDSBnyJ61U4nY2oX2u7jrhaN2ZzhRybWGkHbk7ABCsRSrBMU3kxiCZ6rSyF3SR7gWAjrFg88qA6LwExN4K5fGZu",
  "key30": "2QdQNdbYXSsik1DCRkBFZqHVBANrWXHrJdqfmha2xfjuqqL3ZQ53oqrco4HRo3SEFJ2xmbk6Ks23cZ3rbvJr1UME",
  "key31": "3dr3xrYS5YMJVEhTSCtofUvytXS3f6V4ZvdSmjqaMBpYPMfDEsrG5pgnCVtE1Jpp2SQxv1DKqf864zrbKgKVev8Z",
  "key32": "5PonqAemaghRQRaySqdPTLgWktm4ooJBJc5rTTzZgFYmEjBzDEwgc3WbMmZBbqtEm1ugqZaX3cizc7tL31iHRiz2",
  "key33": "mbGQTCJhLYCVPeWKD1HLnJm8h9V3Bc9zzs7Poh2UczKUNm6p3tTjXdrVr2SBKGogvsntm75Fy2S6hVTYZnh1srM"
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
