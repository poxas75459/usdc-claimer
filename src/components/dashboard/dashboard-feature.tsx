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
    "5GVN3ApFFHA5S3Cqr4CsyMB5RvmUVc3Tba9ampP4AMB5BT34w5GmBYLyAsuqi9PfGdFZ54UzqmFXePkpaRzKZoMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zuciqamh4rmFLmYYC45jDzi8WYuA8r8Pg17VNim5eDnFi9TPYtnKu3XS1YmFgr1xF4BVH3W7jGtDdkKi9mKv63o",
  "key1": "2RAa6PEuh8tHkY4gFCQbu7wz5ZaKW3DPFiEpM9gvA8sPHgnn9jJzUWkkrN86vi1Tzi1ExBWgVqHhVBKwdS8KYCzW",
  "key2": "5gi63nRzyVZgopvYufyrBaMqyFtKcnf6UzN7AvDHWY1t4TQfgPVEiborWQ2zeMGmnvdRvfzJzmyZhRRqZ1uCgiXN",
  "key3": "SHx3endbQRxzFm24hSDAFwTbpxjDoDLVui3caVkWcQnML7TzQr1YYcFY42K9TCByR76DpEGoLdZTJejnMmh8Sjk",
  "key4": "5ugQvwg9jVG3tMJuAoh1LKjoSHqD6V1zm6tR4ffAYXEjxxPTpJ43x2dZ1Pb47Fa8SvhAvzT9k7PQytH9gVwoUN9c",
  "key5": "3dMfL98Gb13vnr89zW9AQ5tfkduG7cYHMwEZhwvSESgZsmuqVsurdfDibbyzEYCBywchv5qfA1WSuqxPUsS3hfhK",
  "key6": "335r6WV8wz8knGvkniCyBbhGa7E2spNzPxm4vkyRetsnsycKHSveRAgE4K3MzeLPyzjfxSLPnBPUD21S3KfRssaB",
  "key7": "4cx4Vga1EfAxWpmMEQyAjbjvvjmGgqZx6YhecK1ZsZk9h3zSdyNZHvKa6TCk45UeGLjcDwYwhoG1c75j11h6Y8yy",
  "key8": "4YUiMAyhnY4bc7A2cnWjJDZWuYmkiPZoLjUCUbuhTEPM3ScnrX5d7d6ESDsvFk7XvjhkcU2DdMDeFceZuEFzsWMU",
  "key9": "51463zkmkSoJirX3bDWzQS43ATjju8UDKudk1Sw888AtpgDBwU6CeYYGC5gKxatWEhoESGhEmdfFpB8Q4zKcLwvt",
  "key10": "46frLf9BekRxcGnSPqkqUrNGQr2qBWjqF4mmMZTYNEjYsFM1cU39QQo9VtnqkzLmg1939JPXx4V4VFY7rU4jGyxW",
  "key11": "5Vck8CnciQz9f1C3LEW5ZUdmtzb35tMCKRSEuQuSZYqKXzHmo9B6MCcoL9BempGrs27K3vC49X87E6Uqak1bu6Gk",
  "key12": "4pAdJVgtpULivas8rrNppKBLuKV1fv2HVfe7c2k3p1f8GRoQPQFTznZgWKsitybmpKVfAAQy1pfYTGBRx7U5Qk4n",
  "key13": "3cTbZyiRNM5oakpxp4yNAqDbwXcoS78KE9r83FHSQZdwzVrdwvLY1davsocrRUrp2zSSgcy6vvBv97d5LxWEEz2C",
  "key14": "4ca27ZdWTX4WEkvHp2UKKEXJ11MBV9DWBsgFb3tV1Vj7rx9G4n4XtSYaCP6YVU6UGQfPgMYKRuzoXGcwqPrTXt1i",
  "key15": "28rQ5gqx4bfoWtPhBeoi3SctWmScCQe1NJNndPcKctiWTqoEFUBpShpkicipjzVCWHoZgZQQyZgQnReosX8LnBuT",
  "key16": "5RSd9zgwbGkQtqTmNYXmu8VBDphH8GpWGoU4mDJ2rTRXxW1SSCzNK1ygMkXM2YXKeGZMTTTQiBg1QB8p8AzcMuqU",
  "key17": "5jH8yLGird6RpJY93keSB1b6rynjpxpDcTA5W5kEbaHjDwEUbCGode3gG5AVHkeSNQEQZRTarQAbRJGMEDqQ8Etf",
  "key18": "67mfXsLrZ9dH7znQrXvEB5wQvyD4hJSzUxTPXf7uvx3zkYdBKq8nvK4EdxYUj2FdfErGRWb7HsDPz1MKi9bz9rCy",
  "key19": "426cttRtUgAzwX9WinS9Hi7js65bFE3tXJ2FSFzq4pXdNjBVFAXBEEmBbwrnJbgejoDc9qFLjVnPb368HCXE6rRj",
  "key20": "2yeLkoEAaSNUpe4wSqTmhkFEjquK2Fk5RRxXd7DppVLEtM7uxTazTdS2jvuy3RZAM8wgX3aVa5RdYrkzmnQYxzeB",
  "key21": "2AHAFMhkWgevGyRTVsaisVnecjdBSktB87FiTZEAx3ch8GvTwEqZZjbteovoYj523j8nA2ZqLEtBZn8DNWSYGGZz",
  "key22": "zLPK2cBNzBeadrsYkzWe4RAiNZnfKT83PSB2U8WXDZP1fPfcoCnAbuahthqzWGwdpasMLcCBUYc7gFpvG6fH3oX",
  "key23": "2oasAzHUEQs221caQh3WpiS1Z421V1H6MM8LEEYi8bz1QRYYkwTGCgoEscW81UWr1ECKhsUc1owCAVqRTmVhs1vH",
  "key24": "21NnhqZ9XRy8G2oWmXrGKxmXasu2vVaz7UZt2Jr1nuLpJyumZr5AX9x1tvr44CmyjVq4AZZfGCW6sBigFfrBZCZJ",
  "key25": "4LYE2za2Pj1gMC6gVNVCBvz69LSkfVEvhrHc5EFKptNrXa7yPu3tySvAZtpAPGKyV53vMP37oSvEf5fjMTpcNKZ8",
  "key26": "CQkwMzb3yiDjtVATRCSzybvtp4EFULNNN4oNo7U4hmU6hV8jWB4K9VZsDpVeJgPJx9nnNijDX1KEyMsaTDmbQNt",
  "key27": "3KLC1VG3NRBFqntiU9Ueb4P1ZjqvaBsxCffZXq8jAkfGgdYGqpMa8Byt2ugmDZexDhCN8nceHRpFWaKSfMccNnjs",
  "key28": "5M4bA1AeBwE8L8f87NkJ5xCHVZaA7nMYiztAD5HpMW6bAFoMreukZL2eKYYeyjjVbqbQmSzmN896gwpmZyekZEuD",
  "key29": "28BVAGQRTg6y3nmCfyd41mnMk3b9hxx8bcKVWWuQnH4W4jJtzQ3ABA99v3k2M7UuZgcuxAyoLcChnUpZjKBhrGdN",
  "key30": "3JdojrdNtCdmc9BeD2KixsJnAWNKMdo71LEmjiaXzVeLX2si1x6Wa1FpqbHwm1FE87gSiWsCXLaR42j2ddf8G176",
  "key31": "5A7KE9bd5jvLQZE894FVSLisN3yUZVnMSH6TxH5yYWVpq29YdnvP8m6W2Ru267NiG1uQxTw3RHAsScXCk2fzsAwC",
  "key32": "2NCHfA4ucFkNLpPTCc3SYRgtav7ftc8G7Ryxh6w8NdDYJBgoUkpJ9JbGGrVvPh77cqogetKiyb98VM8qCgRF33go",
  "key33": "3bbyQVnKtCqVaHH8TJHkdgRT5Lmo9T8P12rn6C18ZLWNmpt6wMksqNN6pSr2xhosG3xddfJodhpzLWvgxZM1epHK",
  "key34": "6tyLVmPUaE1XWjD7Hqq9TpqgDvpXWyBX9JGzTtFJ7yF3vNrTNuvJdR5cxZFmE95VyzBxakC2L47SNciGWredouH",
  "key35": "tG25YHkR8NNZNjPSrGUV9y5HzL9S6JekZe2BuSDZwv4Qmny5fVgywzF2dZ9dnvsu9k95n1LsmAjVnMTBvVZQ7cB",
  "key36": "5vGkvc31AFa9TCDkXbnGgTcU15SbBWrJaEPyDkdwf6Jo2vy2x9UxVvPejapyZ5m1WEYaB7RUeR6k2UYmViDw2DqQ",
  "key37": "uEKk6kURNTP3As1rhV6gNrTqzg9u1N3UKDLkkR7WphRoYkpMezkL6uXDGX9fe3quFncwVQasnW4bi61ASc7jHt6",
  "key38": "2r3vEd6L4LvbyXtn7QCmEpPF6PgeLwfiZyAK4H6842XDjsEEXoucxgmaPEo2mMaRHuJpgWR3vd7ByemegnXVX7hA",
  "key39": "4mh4yfk5fJdGuLqwkJJDjk57R8sTgqGsnkTWCB3QMVtwaGVGD5bsAqqdhEUE3AWxArNTNFdAjMAom9RmCGFmmkDx",
  "key40": "5XM6VkfspUwsvibiUpWM4TK79poH8LufJPFXGSQoeXJBwCVunP1ZU9CPb7psA3BopCrXcG9mqk7bkXn62qLruFMY",
  "key41": "2j5eyboYQ1Spkg5KZPwA4wH77k7J9NKj13EpGfiCkskyAJCW6T3Piteb19zJ5z6B9ebVy77rHb99FuSTCAjpPpGU",
  "key42": "2r2oC7Nc58UBXRyL1RvitKKoHLhLSg2oHh19Zz9oMY7izrRQyiWiptWoRRs8Pp1morVxWiDzP5dGBJoZpaUArg74"
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
