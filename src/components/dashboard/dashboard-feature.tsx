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
    "chefEJ1BNLXYJZgkoFEcYu3t8AYS3MrMMNmkN2f34rzwvF9mCr7QmZLtwf4Lv1QB8PPdjqSMBmTmwgJdPme1A7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44e45vNkxBpRufJJUU3QEfxfZJy1ZvaMDh8KpgLEjJ5peFtD9k57CLUSmTWM76zD4TWjKy36BLz2qEUjZ14dW1Jz",
  "key1": "3PkgTXo8wx1BhQpE7iXjizyBUvR4KsWSd4L33Spt8y9sLpSGgD73s6fDwYAemzj1fgdSoh6rZZRAW6EGH6nPmkEP",
  "key2": "3HVnhs59CV8craJ3bB3vWW1SZ9pmnCprDVSq8jLgqdGMS7FRnGgTRc5TVruCJ8jzhkESNdDYLSyibCL4VsneZ8Bb",
  "key3": "4RnG8Yym5TiJh9bqov18Y81MNzHz4qY5oQ8T2aAbb5yoQsLot4TMvRCAwf6z5oCPPjGaou4iLgxeWArFt1rhcp5b",
  "key4": "5htaT8fUdTKuJigL8C7BoXRM2zJMh3z7oxdBpqMXJvHtuCS2gNC6Uas9921uomMAHSNLLTXfXMSu3rmdmv8L2vJ7",
  "key5": "2Te2SwEbsreZQH7QWSjHWFLf54rBuEKEfmkjLkMaRmfuZ2kDRmikBeiQh1id6eMWTKSzcysuYpqNf2VfHHAen2tW",
  "key6": "5tc1oKP6sb8BRr7FYwtWaAYGPT4f7xcTF92Z7K55zHcCoxtYLhx3dkdzHaAfX9gPXVqhR2BjEKZwuWGLnqPVpC4p",
  "key7": "2JjenhHxwE8PqCKGx73EVifUD62NM1KgTEzspCT4cUBgHkrvQ5BDCFb3DDZfLDjSwi65bz5dspn98xHmizFYqV3o",
  "key8": "3c2d6rudUByqzcPRFc61fZPmNYJ3TqN55cLsRJonrYUJsNxqp2X6u5x8kzopLGhegyWrBAL8Bz2xqDHidB9VF7pW",
  "key9": "2kkMG5KDvgMJr31ggSEGvFzsKk7vpPWQVLiC1byJXs1ag3fhtewyB1HmSiaSRPdm5TEQ1hzawnc6UHwZ2ZgTMemP",
  "key10": "4Wc1MgVPNBJzLKDwzo4ncYeKowAyzTgGHRPktM4W2vHgsMdanCysR8LvL51YmDCook8EbZBYWbfCWbn4w6CNsivf",
  "key11": "5p9zUjwKFavN51UqE6BGg68QGYS4qUJE5Mg8iEqZvez5QFJvqehLdTMJRTyG5jfVVVCfk1vzGecViCxuwNw7yfa1",
  "key12": "WqFF48DxaBq1L3thn6dce1hqwiXWj77Kc9sRsSfiMW3jwNAbH6MMNpRNMRr6iq87kQGTtvVwgKQLRNJnGxjb3dn",
  "key13": "CMBosCyR4hvNq1urAG76U2voUmr3KSTJq4RXcTKCiqY3qmhJAZnn7pdK8CTdMhW1AanY6f5aGbvkiXhoePkGPVD",
  "key14": "5ksyJg8sS2AAnjUzUZxHdYCgqMN7oSBbQrr5MZhzxj4CN46p25kjHaC4PQdLb3vnYWfLXMp7fX8dmZYczYNK91a5",
  "key15": "4Grn2kfCgGkW7CB4Mj4NPJfiNHBF3dZtgqmyF3SME8qaytTkPnf8D3azzjEJ5WWxGfmG157ZcnwSzY6DCXGq5acu",
  "key16": "2FGk19iSsfBWJ8ipLLiGLCrAELYSujCv3msvkMYhW8CNHcPryY5ubwT2quaZdPsH59BzRHWX9F4jo9CFdJrjiaSU",
  "key17": "3CPdpsArHsciqJYJyJjDJHpJCVeJKM7gxCLYRbwkyBoTrGzMrdmEnE42mzvxvbHqgnA5Xj1FNMgWt76HGTLu1yM2",
  "key18": "6VTuuKPKJ2ghgCMyHQ3dJY3VLvK62vWhAJq8KDnfq5GuZKF1q6BTvjALNGYWxhAdGfpwvsb2Mcrq2LKwLvoxSMY",
  "key19": "3eMJtG7d1Yaw5LbRKEjdruukPB6G1K8qHzpfNky2QYC85sT59KUhCJPooEQDkMZ8gYgsFUVNH1iSMkNmYoU5ZuF7",
  "key20": "48GEwfkJikdPdgej3QujLZcuWjkwofvFWmScdugBCpvSH9oR779ZWsYjrv8vGmUT2kVgJYXk9AZg34fypajFX7it",
  "key21": "3f7uHapxogt1RN3K9WL6srjtnnMgLSpYmdctadXfDkCcLejWqwNQ9LNMKrLaiknTjoCVxRqYB4AwPw71GnQznpLf",
  "key22": "iUfKmmfcgmZhgm45xHWVjYNGsaMdekpGiruVKZSLB9dwboLx4zLGypNfgiFXzhyDve8fR2Ntux2KfJRJ3NCCaxr",
  "key23": "5cNwWwmPpnjLQtdmeednDkt1t9up4ssHszkUPWNeZRL7VeE7gpBcbTTCwDvWEBq68NUzkZRh6pGQMWrZrHxWnA2X",
  "key24": "2WA6cwtBfGbCp4ir846CCuEbcK9FQRCQ9oAW7EHmhUo1hUEdZPB2Kx6sFgK332YeRDKHJYpR6Uc3yhLzDebH6Son",
  "key25": "24Y1fUm1XCG87KyyEjjKTDDQBuB7ZRBpaEX2aL83USgFpXPsazzYwYC7jXS6UsSWHvQEgoS3Q6Qgkbx4FUmmRN1K",
  "key26": "3L8K5mUqPvA4jY6JSji2QrRjCaLyMLUKeQmzW5arnJT4qAPwd4UDj7DKmk57WdD4Ex4VjuppUd2EY25LxnwGzFeM",
  "key27": "2BZHDxsGFgKzq1bqA6uXq8tf9pWQbcefxn3GaCBPDoypXVjT5YVYMUsKrWcJb8zmJKfP4Kze1DbRfvYRwUmjukM8",
  "key28": "2cS424uNmLFj3WWuCXjcTpUcxGg5bnM8GgXPegW4oMqnLRECinuq1LrVokLyoqVjkWDagGcktszCzeVnd2B7tUTZ",
  "key29": "2xEUDykhFyZVins1QRHTSxqkdivWQn1X72BMCyah9anJ5v12yU52EbErv8bCG9gersYcFh2SfavEMQrR8kRnDg13",
  "key30": "rH1FMtzrSbGuQ5qsqM9zQtQUNoDZ3DimoZfUUyXKEidNZw2gCT2qmxqp6jghGt1K14wNo5mYUpi1Dmbb3KZAC4H",
  "key31": "575yPQYr79igYmneyS87gqoowmm6fk3kv6UPrmmKzp4b1ygMasxDPK3xJoiFBJg1jwiVXoxiH5uj6mngMBf5E8qZ",
  "key32": "YVhAKXdTv95D4LhPRVEHFFjV671Bsvwuhc5hfhyGzeHF5st7jcvqHhWqvkAHo2ttXSmgvyiRyTb7aahi7fSwquA",
  "key33": "49yAMT8ETyTi4QbWR2dM8rkHduMwaSecoimL9z29kEjQAH5wvWBd2JB4UkgZJ1gJy5TZ6LeSLyze37hAzg1Cwi91",
  "key34": "69TC4V4HAEkeM1ocUEBEa2gWf9RruMtvwW2aoRQZBYvi6q4JGHc67p4V7D5p3TiMDDKkeByzeuAdmruePr7zASP",
  "key35": "5GXMWKK2AqBxyNajmvYUYooJ2ED1eSD2fyXvrgAt78QnE3Gh8N7y1kRHQNnU11arZDhWxfU3biHG1oB3jyRSD7Vs",
  "key36": "XrrRnozn2kyYVts7rhK1H65hc2uyZk3roYZoAnLp1kMo2v5EdTmxoEhxSdga7aoU6ozcgftYDmwuT1PgX2FhLfk",
  "key37": "4QMEJwj3Ek7t4wufat4dZYiYcf3EkWoEtxZ7qTjKxEVaGZZHM1oVki19CEWvBfag2CfcaQX5HwTe2HCm6kp5QqHM",
  "key38": "2qqKzJCyrNnyGkRdoQ9tJP2fg7SB3Ni7ztd5Qwcr1RWLDtovMU8Br8rAmYD9z9Et6PYVJBuCaWHnqxvsL3TpAFUY",
  "key39": "EQDBtRvJdvrPLxP17LWS7bN1GAVRVTT7EUD4qAicEX4gdaE3gKFGUFtARvGtQaPMHGF3p8kbir4vQyitrnwuvGy",
  "key40": "a3hp8r8P9AMgZS2CuGGDQD1PcMLZCuQUT3K6x72QsMZHUdSm8DreHXJdm9VXmWtYQBFfny31WxHsNu9gh9s9x1Y",
  "key41": "oQTCpHESK8jp4bHttG2TrmDo5Zz1E745PXwDPHnX6D4CTo8YdHMrDd7cChkjRbvpwEpPzDkWriFvwPJLVbUJ8bM",
  "key42": "4wWzh9eUKGNrBbnbHGU2Axpd4oQYSsC4LTQkcjPssQdd8mNu6jfJ7sA4iRsmeu6GXQg1Uw8vhmGMQCKb5dBavz5r",
  "key43": "4ihdPESeqCgHsHZx2ZSWMksnN1ZQunr5N2n9CNrTvcxFToqosn3QaBwE63Usv2fc79iPJ96nyDyyi6AvdhEbTuyb",
  "key44": "3hfaJ3zg3XZYfzPibTZKWSpTDZXWzTDKQqLswEzNyeDb1aZzAJ9hD82iDct2RKYUPuGbFHCjuXuXeppEA74ahnBF",
  "key45": "2YXpDxfqKmHR93sGBtnME997C1PL2TWCLU8Us1CPifT7FTru4mqP1N1MzsJwYzi4pHXuAhwy61jWBT9KXdg7g1vM"
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
