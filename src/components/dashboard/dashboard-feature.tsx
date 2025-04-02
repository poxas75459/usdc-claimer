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
    "6662FgoFvUmLtTPVscB5vqrEjmS1VWUVqgdpSe349NrZynta7QM8frJ8opXm7gTmzYGHr1DW8jBQ5zkA8s5AZSSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RpSBhLe6YAvMXGzb5DcDZfy7rd3tVA7G82DsEkEZcC1r8f3Yg58TDQvvqgTJPuQxb17BiPBpg2HUeTghWf3gDLp",
  "key1": "4KoMGU29nhEtzqQ9hVa39ePF1wydsLrwns3Cg7M7hoxXMp37TNRj2DJhBbrLm3LKWKZhjLM8Vpco8nNtFb3MNNX8",
  "key2": "5kV517D1d7uRKCYd2G3w17t6BuMp1Ur2LWxbTiz6wihSEzwudoB585NLZxMfszgVfo3GBxgKdHpnaajECcaRQWCi",
  "key3": "5qQmHbFqtBCfKwUgdE7aZP37WkvpCFKpy72mWRJZduUa9SQx61uSMudkDfMerFu3t6DW7ZdZGd4MjwMYcxYKRC1K",
  "key4": "24YdAArmCC96WXRQnUDakiwpw19vMNFBSkFZ1jA3n9dFxFbUb3iHEEJ7TP5QZKjN6VEb3SubCAqdgcCytLsU8hjs",
  "key5": "4j6UxQ186684mYzFNaHQH56hYCMJ75eVveznoPcW6QJt8Z4PR5B4uKp7V5Bc14tr1Lk1N2WEvBXRquz2T63omcUP",
  "key6": "3Xe1FKnX61Xy6FTPavYhTgAaPVPQar6yKpZNL2rJMgFv8HiU4h5BgGisR1xbCh37Kaa69Kavis3K77Je2dF1NsyJ",
  "key7": "4XmgG2MRE7tE8CvG6wueiZXtmy4EBZ5cEpbyUvCxKAMEbX7rknTmdvqbLVsKLtQxdfYsF1iiCD7SqQtZYW2doQkp",
  "key8": "2Vcc7sfwaM1MM2T1xQZYSjTGNYWMieZYGpvaw35kFXYnspoZy2CdWReW2HbLtWguKsNZiLWqmN36dBbMe7ptYt5e",
  "key9": "46YwWHNkFDnrADQKenk9iPu2m6BXgYaSQnKyMQHuFPhZefnSFpHrJoVphptj8eppqyDFoZJykmRoTx4weK3mpjVH",
  "key10": "3zFq3wXzaRKACAmc86ierto7xwHUwXE74fWqa3PxbZLSbeLVXXidJbTJLdTPwKeivV1RgrXT2Udc12NLfR1VQ9gH",
  "key11": "2LPpVmnYKWnw91AtLVVzifVcm6qmmPNvMbkkJUGcCz58T6NjF1HzhCcpHevgDpXr6VAEzs4WLMGNa9QzDkrKPoiL",
  "key12": "UGBdhZrNaiEUSmTQyiiCZb41V5mGJrfF7yRra4wEUsUVALAK5Bbdruq8RVX3dLdi9DgaARq23vZZauVCmPxBjiT",
  "key13": "273CFXgCGJ5zK5hVoyA2ua4XjaF2eKXjmWWxceXvdNHLFFZ8jF9aRpyZ7Dtbh7AM3SdDk2hXfdzpvkwfr2bjQXrJ",
  "key14": "4DzkQHd2ms7eBZqH1fMEdpC4prk6tMpjFTjW5VH7SNejJfw8EwdPD4Li9EbKQZue44V5JfbbDBAtczyFGopFTfhz",
  "key15": "vyDUAejkJ6BxBAajzovySeHBaJwXERqnQ5BGBGjwCxGMkVuY4SsTMSQWKYHqbJ5QcMh55n6duB4ScLXppWrhGGq",
  "key16": "2Rvs5mkvVbqkWgcMMJMVwfkmLmCWc4R7RTdc92jR6zV6kFsqbSxPk3qCvRXonKs1C8Nwj57dhaosQrUfbzD61G6",
  "key17": "4pDkK1cjtN3zKXYhmYcvF3ZrCxY9L8TVEhtMGrBLvtKEK8ZBRrD64qvG4ct7255Mw9bGxaNHXPqEAPhcWwewtPE2",
  "key18": "59HvPnt7g3vFhJke2FeWMQ9sWk5SxZrhrE9ejjXNkQRAY4gLYH1Lh5XqQWvyW1gCUPg8C2W1UUfXfH1AFWHsBBQV",
  "key19": "3qWeNaXxMK7JDb2xA4Ch73zbwgqyP9oWHwuT3fEP3BeTJ8tJDn3vZUjJpNVcJAQCpGwEGmAoADVJXTN5Hdme2FGg",
  "key20": "5wMF416VH4mr7M1fpHJQ7zwZMNtLkggt4bq7hz2QgbMvUkkxJYdMWRc8mBKTcyKqACZuoZwoQvFycsmJYTDtmLHJ",
  "key21": "2wMtSsKt8iKcFBATdxTjrJswpSvdwGuCLhTQTSDKCSTy2PeX9R3Wyenjh3phEkKCzE6zwJP4Mg4hwGFLTF2878Yt",
  "key22": "4tmkSB2cxRXunK767Ns5z3CoNDvC9upuiRc85bk7MSq6GwYJraBxQNX47Sdizo3zHqsMYCxBBsnHLeMfFW7tvu4N",
  "key23": "7agj9NXE6Gk8jarTyw3b3DpJGt9cCf4JvUfwJT4Y3tWVorcU6z1M4himF81F48n536NSQpNZJasRCnkURRYnVQ3",
  "key24": "3akHgW1zDG8syaj3jpJU6nbLLYe31bHbEf9frFXYDNu3yphANi3fc2r3FJEcfjXthkCqH3BjF9eHo8fuXe26Hq8T",
  "key25": "ayQHoGTHXiRszLL49dJmbwRqALvJU3ayjf3wZQYeArk7S7gdoSMSLkL7KMWUyDedZ1XRoWwx1mSY6tLzXxwFgL9",
  "key26": "55Ri1n38dgwRX42XZYBmzSMiqJ8xcKorBEMs8biAP9iyGuwiBQ7wB2eHGN5quPnq19SQuvH17RbJmkdTt8buEonH",
  "key27": "2dS6HYWvxRJDKnnHo9x7XSAEtCqx2xKt8e9mqpmvbSM5zv3ffHbyJp2s4Xo37RMVTxhfHRJawnh4g54qiMA3FRk1",
  "key28": "2kDJSk3MpwcpBcvgx6TrX82cgqDZv8D14GxLtjT1Hgun5995HTxJCw5i8mfFRkG2zq5AMPHDdYzDyH9zaUowUYMw",
  "key29": "3Dzx4BGZSarAfaSSbr1j1AaB9r9AB7L5BN9d85BGQ9v9VrjmT1tBLMWViPd6LpASHQ5yXcvj5FDbTXtB8tjHDUUB",
  "key30": "ZYS4Hp1mEQNs7SkBickdBZYAwtsqFSYFXdv44Ps6XFuuoNWrFjKXYD31y5HE81YcPnXXPKgaS8S25XQK1TeQRtk",
  "key31": "23i8HE4SEJZkKEtVAzUMeEeLY6GzfBo8VnMug7QovESx2KU5Z2jBAMc6CGBuicJ99dTzqbszbteFKWSKwuYNDC8t",
  "key32": "Qj2DUnPkAXAnVLzyhJYYLuHkApkAg963utRDJ44HQbuLJsnqisjUNPMu9yhfjVpKZrAqQYBpGt8FoipMSC6wVFA",
  "key33": "24KByGdnEZ3g8YU8prHgwGFFZjseqH5SMgurCguZgtYsxRYZS5qtjZRK9GAQKh8vGDCnpP1G3awNbAJyGY5YbEPQ",
  "key34": "2wwqfDVvjPUqnuJuWN5iyiKZhXaz1xKTvH7XAMSawwa1WcEjRn7sBRj2BJjnvJDJf5X6oSwLe18qTwLfxVP1tUgz",
  "key35": "615hWgGR6juVaTkq8xch4jrbpxj7LLU2a7HFs2v8F3b3itDoTCAkxLP4zbJiGyFhWt3AxmhCZBF6GRnFFzaaDq6W",
  "key36": "3PeW44RwjcgQZMi3n3Z935SYe5EV3z69vGPp23aCJZXCfYGJ6z3NXbqZ7g3qcHzJ9qVBKijfnwsxD5iWpipA9aHz",
  "key37": "mmL3CxqK1fxKHJthPMVADDd7u5WoXtsWWM4m8YVBzDDGN4R8Q5sweFXcpj23yVNC6RbzcETwAGfoyEwFxiCuzH6"
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
