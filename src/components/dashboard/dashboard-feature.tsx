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
    "5dXBjt7YZ6tLKHDvH55UUy6Vh9VDgRq8FJAJ3asJbuvJvGbPBsBcdeenuUPx43bk5YTFuVCRhiGcwdBqudwo5qem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEWbd9UybAxYm6EZZL3jruTFVvFdtrNJrTYCDG4prbYADhWKbPqP5Ad2ZAb1fZDbyrLbRe6yysbKKburkDcJzCi",
  "key1": "3a68NELoLJm67dsAVRodY7ExXBHmfQ8v9pmmNBAZS33yZ9u1EsHHfFmZjg8cFUqYZSeK6HZjancsPEQB1RZBtEHY",
  "key2": "2c4bdonG5Z4VWmjmtDxNLVM5Hgt85jaX396gVjyuinWN968m7rtmdNWTSGEXTLaE6croKq5vCrMSdZqywrkRVxzd",
  "key3": "moLqm32n3gBmbjgW8gRkTLU33c1x3iR2iR3PDfH8ebxeCPWE6CReg8J92e9LJZJuP7FpeGvubsdnoBqdXg3sbGB",
  "key4": "61fRteL6guEPHCP9Kxk49kt2zoQFPPTB7Yz6LETTArhZKd4rDw9rG6LtPBuiYQ4MhCiJG9fnCs1XbhQP7jFx2en9",
  "key5": "2CBzm2ieiq8L2gzvLXqWDMXLChHFzjC3AwmaEE3vUw3pnTBUkwYvyD4NcD2mcgp1U2GFkZosA98YjCE7Cje9aHKP",
  "key6": "4rHK9PT5376jse61mPhzZDatr1qW2C9MzJW9CpX1vswrXpq4jUDoZSKcBRPdWoiKKcXB26HWUEqjkw7Z5RsdRoJc",
  "key7": "533g1zfqQmGuw8f84u9Lu2fhPHxiNZJCfJaaToiSc2hi6sWZqii7CGhCX2Jp91e7hhjgcnz7EVuWcDKHcAEAMDET",
  "key8": "4CNkD5WMzVLfjaNDF7PbbcuPCgmSyUrVdFYp1r3pa32Smj33qLLKq9zL5VV5e9X5yd1LAA8md4mfsRsYNm5k9a84",
  "key9": "DTafMbfPbp5JvxA1GhH6Zs2GTRBSNwpYYSgHidMMhTxdZstcZQfVdWigh3ABZxfkH6DMtyfjLmSn9jrUMioc5aZ",
  "key10": "2uTnh96RADS8skuVHGP9FhAB4LTafXLgRa91W8ksnKmLQwiAxPdanejKLz7RN4CTUfUZUnPTdLEZ4oh2nGDN9YMC",
  "key11": "8iNivHS39j2vDE9gvVS9gckj1RGYFMku7vqjaLStapsqPh2WSnU4zkoi4Jo7gddgpfamN7SLjknQGKYvbqoVU5D",
  "key12": "SeWZKAwbFrakf35QtdMqBJC3PVyhDD51SpseCFkjo7ctaLkJnMPNc77oXj4gFhYQfDBfumMuGT6yiZXCpeMuQ8W",
  "key13": "VJLXvbXuZJFkHC9jnU2bpxRtXfqFriqxwDURQ5QXzKLxoaeJypuG4DFpKPL81Vx5VGaGh1NscZh827nnxSnSTYS",
  "key14": "32vfgaci3R9Pmh59LQUVFQ6e62X58gbTF9RnT282zD34nCXru1FFWJA9hewQSoSJVj3zFpEgUJ6SeY7cMwP9gXj8",
  "key15": "37fYhg25H7jcFxWntCa4wiFoav5VQuTnaUzG2nstGoyJ5UmvvwnsHrsLShckh1GEot86jThxZH6S7TEL4qFrpqVN",
  "key16": "55Q3voaR8ZxVvQoUe6ygesA4diyuGMBEXpHbNmPNWtF4KyJRce1m5HuqGb3tRENLC5E6Ejp29Mwaow1YJAcxKQh3",
  "key17": "SmkMP5u8MPa3N3Ne5hwU5TLUKivb6gUJXMcvmii5SfuyyJzPS5QkAr8cpYq43C3S2QWiMjPiu63vpLHe5g8VPus",
  "key18": "5eVo2zeQJco244NQ9Cg1CXsbjxNXb7JkDjejdD8TkzJmGLX8zhBxdTneSDC43QGg2UZK97HXEcSNUA79PdW1G3Eb",
  "key19": "3vpawCdwaFNQVQiauNCTos3jwXe66Pu5dbUQJ5WFXer55iDWdtXvNr6SDqji1LehjWsYDQMoFfGkh3dbcd5aqB7F",
  "key20": "BiBvY1y5qBLA9xH91EzymEsE2QrBkEf1perWQK4PqWrsNAfLUHdMU7gMJ8AxWFjkdWJm23cMBsLL84Ufq4Ek1Dz",
  "key21": "wRECJgjWq4yV36qTZBsR6fgeryZVeMGfrr7829xgUmWYs3HHhG8HUyTpacdxjtwML2sYfo6M39FNLYM31qjMirU",
  "key22": "495nguz2fQteShvkHYJBK2CNsgtyiKBAv2yPHUHAu1XhSWyaj5kf1a9tdmDJ8hGpn9eQczn4aKEYPWh2F98WgX5y",
  "key23": "51hmsSDPyy6DaG6NEF3kooGosSPPADV21NQwVrXzhKjGWbT4x1EN9yr6p6QqMoCXfyhw9Ua4XvDKmjU3rFHAd7gL",
  "key24": "4ipAU4aszSoSVpQDP1iSgWLg3yMGkGBXfv7hZaQYcg6xUpUQu4qVNdhgUhJkX5Vq1NDz1s9bjSXmDTfGdgJ9U2b9",
  "key25": "4qW6Ru4DLFbBhUqNhegEXx71fu8cG2uzC1y5JMbxnZpZuYS46qoAPFCoxddAmKwYeNLRQdjRYKJ3ZbjfUiM1HB17",
  "key26": "58zop1vy2bB8qSLYXyodKRd5Yd7f5VpFeS3AHDPRH3vcSoQGJd8FqVFeF359oQcB5CbXV9e7vRksqomDph6jZ6Wn",
  "key27": "3G6NajDueE43Wy1hDALtWT6C4mzopW8WH7zsbrkvckxjEGvgcNCvGXfvA2SVztXfbrnNup6rv4gmmeaEAxAUWXVV",
  "key28": "4P6H2gDAU1qfxBnfJgPtmUGrAWeqFhkMXZqM8U6ajc4wJgFC7ebg3gDba7Nr86oFoDi435XXTKvwBfwFCkyPUArz",
  "key29": "4d2Zj5pAyheZTJgfgz62W1LMyTgqbpRawQc6EXtx1154zyu6JE4Lqdzcxc1LobAWiDHtcprY4FmEtSgiDwjVwiwz",
  "key30": "45Gg4sGuuWeLWnfTBkLjasVEzxY5kNLvmF5F8beMmnDCKyuBgzAkNy2EJCxCEE9CbDYByiroDdWybbYBad6qUooH",
  "key31": "2wzPwaetXS8bPZRViDvUU4zP8Y72jmU5sQvk6UMJy5a64C3h8ZnKGB96AxNp3cbBgrTunwzHz8KL2ncJygZPWDxn",
  "key32": "4RdKGrDWNGA4W3DBJT3n4wyUBKeRDeditV5ymqhyxoHfaFUf1sof9jdkSeN15GbKzJurAtULJ2TJD1mvzpUKcd2u",
  "key33": "2rfwtt6neb6LfKS3m9T2Loqia8D56dMdo5UW9Qg3JgTx5C69JfDuURLbW7vNdfMYm8jMvtnn6yPLwyrLyrPdQ88g",
  "key34": "5nHhTaftRRVEpcnLqLkN4PzpGAmbieA3EFbhy7Fsq6RMCwTZMSPJzsDHdSDJR1SBh93YwfM8HfjeKodpGjh1oBAe",
  "key35": "3UANxnfbMwALnATamQ14V1YZAvUBBq4AwUoiHY8ufKiEuctJFE64gWNw4nfkWWWutQ7GXqebjvTEsToyCTBkypJ",
  "key36": "LMExFfKQTNkA4qQeGv42P14gSexugxEuJNJG5DKwmB745kfSVHswjYon9LDNBG8WpbfPVqNRwDLaYT3HofvXqPx",
  "key37": "2WxqeYCkFEHovhJmxHxRfNhcXXt1pALVB8xSwPuUPuBT4mbmb1FEVUYmKQNk1Y6VQ76f1152dfyEc4hPnyFNkXj1",
  "key38": "2MJseR2N8W2nbj6vzFuZVfxwyQwRu77NZZGqPuz6Dtk855MgEo4VUkssDyv8q9jerMtR4kVWqHvmfcf73DUbbxz5",
  "key39": "2eZ19QDHz96VRgPfMcmu9F4268AFHzWguVsxHbcXELrKtz82yJgnUMgEdAuGwD1GnW9Y6AetVm27VSJyLdmySHpx",
  "key40": "4ybvRS7Hs9DJefVWnXGpcXk6fU4qTUcH9knmxH7Po3KnxkXmBzkgwiDGcP5dTD4rSxqWrnEZcBTzXnsMVFBUb4SM",
  "key41": "hVMag6M5vz3nkQj9zyiMqASe6vvXV5ShbxNt388WypbeQvasLU3meh2Kq2c1tg9GPUzFi6AfPzNdBwtn5xN7h82",
  "key42": "4QkMWDx82breBbCWRtpjX1W1sGGu7skVMN4RAatVZsFaNoCdjh4X7wxZShLn1hXWDwtR6CX9sQjEorhGixRQ4VRm",
  "key43": "3RKv7pwBpFtbKrGLxJtKDuk5HmUz2zRH1uaG6HxqoexfLhhNjG4XLwxenfNKt2vTQBRiCXVhvLk9KGcZNbNhF16e",
  "key44": "7R7qcSMN5TyzmWfBScYvfjpnkTW3gpjeHfWMNphYDcr588bZtsaDPBZyW1KckXmkmx9LgC7qRiAW6eVWLnm45Sq",
  "key45": "4yjBnCrCt8HdSzcnftjKwYWBJcbuk3SxxeVdmMyJ8eEGtGtYtC8iEjyUxba8DbzzXKFLy8Uusps249FQXn4jBhhk"
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
