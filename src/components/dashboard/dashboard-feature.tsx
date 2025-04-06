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
    "3isHLL8otug8NCstViigzPQsS4krxthnhNN3zQw4r91nB4BjPv4qzjMeJ5TkT6DdHRgooWWzzi1ExG9Ur4c82NUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dJw7cdQCrhPWLPrveDyKGDaV4DxW9KNfVHta1FhHL9TkkG9SJmcTfEb2mzsqYYjNfsSDRhV1TwVMw636QKQs8s",
  "key1": "vBYmQ3QKJ9a8Bu4KKaX6H9eNTqvzeFEdDASH7gvE5cxCGDLnBBRj3nyhSr6mDAzJkucy29CaCR4UFYoD7sXzW3o",
  "key2": "2973xm5JeKUCPWJLHYJAiT5VBHuMgs7oawpbWnQ1LCyDK1BuTDuDt4p3i6y68zpHNyH6ztDE9dPqxyqx3Uw9Ee7z",
  "key3": "ryVixLxqd1m1cKZ5iCWxDoVkeD2q1jiqNuLb4VN7q7PFAGagGR79ggWL6cmfAZEJbMmDmD95a87JY1Q3a7sRfDn",
  "key4": "5ZYdffxak1StZLgMcdhybrTipVbdAG3CdZUA1XNtWPxbQwPrVGeWhMgZ5RCm2VeuRmg5YNhZpv9Lktki1AhHbWb5",
  "key5": "4pJvmgBwz4XTasXoYDupY1Jr7YQ2MFEb81fkHfniRhLBy3JMzQWTRe8XVpjqAUMSXPUwRzd5kTwHfAAKYdhdULYV",
  "key6": "DBiAZbJm7pvB8CwmBta3psgtMd2LjYKCSzdxJpUS164gjgH22WvayUqYYCvHWwkquLcrgNPrSxEDx3PiH98feD5",
  "key7": "znyQs1tVYLL95oeRqMYs77JyH5F8oUGmH5wVcPjcJbxb3YtCcQtFTFpiL879UWjVthCjmsi4z9MuAB5pvWP1dc8",
  "key8": "5eKQcJBab3zDHCeZAEguFWbUpXTW2gM7BDJU74GovLos5Geo5VqzZzZqhXuQSQrubpsWtwdj71bHJENXQnSNwxBV",
  "key9": "2c6ptcrpF4DvGx3A3ddYp7MwSbXxD8tFQfEaneebvSrpUFvckiYUw3GbABivrPJve6yxbNb1EcR5Fucgpak6p7Xf",
  "key10": "4FxZoQ5WzwSz65pKE19dd6nkicDaAqWBMjZ7UTW4LxSAP62qcz2NcmhRPVifJL8hK8L36diE2DEgy34TaVF39RWK",
  "key11": "BVxLTAJ71Ncjupdf2Bc1dvWgb5a6R5nndyFRYyNv3HRq96uVjjMNoUMAXaBTMyXsfCQ2SHCxRPbLCc3Yy53VHnK",
  "key12": "5FRQxXYnhciC9r4GMZqwFXSashoLfn4scC2NLek4zEhmq3Xehj4THB4QYGDVPG7bmyUd3AMqUD8M2yAwdKdvDzaz",
  "key13": "4Tvd7EcvffDhbK4xbwKG1cMF5vruW8F23S5fFARKmygZEf85GMYSeHcvXN1cdFuhhUnq8YvgCstLGfJbLrBnt23K",
  "key14": "43YB56HvNs3n9s3AMK5JQTSuGsj2u7JaQKEkDKJzocrd97Yn8PWJvxpuDCFH7FQX4UZngXirs7m3Zg5tdn91A991",
  "key15": "97iADezJsUypuYFywnk8AQnzAwQDFZh9xhuf4BH73tNQSXdcrQkZYUuT3jHAheDVmpi6tfF6MMd2KDHeexnT63K",
  "key16": "iMw4cseJk9FJDy9tpLVUY5LfYdmHM6eEoHZLrkjfM8TuDRFtkRih1i83ixaV1zvpnotRoS4mbBXWkR8eLjXGAC4",
  "key17": "658URx6kuCCkZZE5rksbCsapEfW6wFcAQVzM5tM6qhwPz5itTxqqi7wRG9L6DjEjwEYuV7QfZemWTLKzcuGyjVUq",
  "key18": "8Mms7JbCvyxP7SSmJMz8qSRwQ2YGf8nagTqmFwbzFVALebYaRsum7v96aoLBjuCizgLSAidDKkFrveT54Fx1Pas",
  "key19": "3cciPEAU8wnj4rEh4V1AF7dm9fd521LBrpqz6z7rPyUKBwxwvfi7mE8TktkxG7fTfLimvvFmfxeU6ndG83BVvvz3",
  "key20": "2w3Xum3sYmKrFRnPyH9rdwBkr5fTZU83LS1vVkPiSxo3ohubPUvCytoGTQxskMSsubJCYUJAkBZqNPGb9fEGi2NL",
  "key21": "5Yn6SLxxWEnA7gayuxTuSuCYz2jP4R5XLf6ZQToDtuNJtH81g9zZZa2QJSEGrzkhNKVewuqtVj7gQpc2zkJH1DKT",
  "key22": "42NUPWvzaWgJsQzNazvDfuUAJctNkNasRj58crYNfenivBjLXT4yXQivJ7SubYrKVEYPu85TupcjoiPSQLeJFwB",
  "key23": "3crn64SfANmV6Qpi3td4oGYncmd4uBBWNu2DhPsoguHSVGUbCVtYV8NtbDFUAXnz3CQTqFoFMpDzpjHYDv4GzA8k",
  "key24": "3VWBAKrP5F4rARvgpcLR6AGkn1WQXadKGbJevtKcBPgWGMYkZQDHd3VHsVSca3YFbGhBgNbt33umMoD1xMZjMmWq",
  "key25": "5xo4Yn9LmKmN6mEouQ3DxQ1LqzaCXBoXDmhc1vjMDjrwe7RsETnEHogPPbqY7xp1AhKy9waAridK5KMQKwXk4U3E",
  "key26": "2wX5W6qYhEsde7ypEFWpDz5f7ztbpcgCUqEGJt8jtvYULSE6dSrja68vUfe2VJvVr9gwvM7zTr5AJKq74NAPuqHk",
  "key27": "2LZKA8oWrjEWXvL1qPbexDUKbQMDoPcz7PW1UjzVD7JkRf2ugbaUXNh2NJYB5o9RhcZgFcaY6LnrbhCnkgMU3Js8",
  "key28": "25Vjpi1MrFYyXiFssX82hukxXN3WvTCZuqX5PDnzvKPkNSGN7eTF2tMC7EtaQhXrtdsZgX8NXK1m48L8CWezdE1X",
  "key29": "5easgfUMvfuQoGDJnDyb4hH92S2kgfB8Urfbt8FSEx2vNj6LmsahVdNFVfJu2yQKSm3EJVMtf4mdBWZRyikQuTTB",
  "key30": "5Bo3qB1PWoeaRxtCpC6BZNo6dpbNquozrcnxK6p65FegGknfTJDpE29DkB5DLB7PUUQGDNgZDvXmPNtgsLtmV2ju",
  "key31": "3u4jihHPMXCjv9FHxMRF4e4XLeVX123AHg9tZZmeKMWvEQBuq2w52SoqSwwMcsRamQcbidwbUto56M6vz6spasHi",
  "key32": "5DyBJFBUxYvXRHzYPjjpb95AeautnBY7M1z8bNYZZ9eBmaYbdGKqfr4xLvYXZ9zALQYWyBeRTzqtt2uyMtCPBEDU",
  "key33": "rC2z5fwTmVPRDyvGQLFapaqSym8NVtMJnT94nb2qSHbnhDeQimHvTVzKvKeGNpYc7fTmPhq7oUvJvKpbp4eBAmG",
  "key34": "9fYfcsYJHcAaN8DSuyfXmBzwJcWTj1h7Kh6rSZWL5YQTtM964DgbNLRLzwuJcSQoP5hFny7i3n8oRVWU7JHCVaw",
  "key35": "3sHM4BN9wKqeNVUy4zzH1r89jHYkpvDjWtESzxU7nsoxYaUYv3FVnFMCtaDNtz4pxiYEzUE3WDzNinDq3pDgBSDn",
  "key36": "4155Xp96hM4coauyzowfgBQa62CJxuTD2zo82GLGMEJU2ikiqoHGdyJWTXSBx8Hh4Tb6vaRiEEhrhiqhNjP3Pjz5",
  "key37": "3qDTp5L1AteytBnA8X5Ew1Ev5cpDn4hrAYKNTowZx2bt54muxzByGNNNMCKAygD3K1T7uUaxHooVWvTwjGvkky35",
  "key38": "5m9YV9HFWPHAS8ut3cSeGa1kprNFGARhEpGeRNNu4aD9tcJh41FPpWy4p8G1pbRX4yp72HrLxPQbK4ZowJhs4Yei",
  "key39": "Fy1QspiqGdTjFbnXvEHVZsFjj69Ptb8yZMxetr2rZyPaCkHg4mDDG4j9ZBT12KwtLqxvmgcWtAKt1xf5ndgrz2t"
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
