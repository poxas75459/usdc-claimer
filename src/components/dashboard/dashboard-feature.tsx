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
    "2Wz3EGF9eFXsJ4nu9V6ngigfGVDA2rMnpjNhnPzd269tqa2JyNNVNFQ4yKa7ic4ci6zJRn7g6Dch8on87PgYSFHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QNNmCpbge8WVVfnwd9jbjD6TtKZUm8XUEFPy9aBXDQ3zvvuMkt4ecmTHvBCBxhY9yXzvNyACDUw86XnNZhXT2ww",
  "key1": "2TYdg7EKwbREGg55ZzHioN832MN9QofqaAUKUGbmUYxwzS62rGtET5GTBNfwFpe4yxPnwRUbXRwcbmxfZXKHENfo",
  "key2": "4Fz62PQXwU7B9gMD6AedqdU59VCSXDdrYRihCqZVp6r4edUBRZPUD8h7BkUw8uiMVuf4pioY8AE6tJ3jKUtDo1u5",
  "key3": "2eBAuacPQJhjB6sJzQ7pRFAvMexLp81TVhmigMn97tXD2g66o8PeWewwEBTkXDuhEHx4RcBhVRmzwSgnuz8hrptE",
  "key4": "2rcS1w5dz824VpSDr67QDwWAkBKttLVBTKgWJCQBqHJzDzMi7mNTT2DL8jW4Y1mdUCfWsYVD2869VEsjWjkhrktL",
  "key5": "5sdvtdnvDn2PmuFetkZpZFGpn1egFXx7tuSiN9WmMoyJMNq6VQoJdifjfZUb25Vqe9cVajQoaWh6Z1K4kSLoLcWn",
  "key6": "4eXWRQsHTPkkcdrtm1cKcwiiRZKPZQzxXqXh5kavgmo8CMdAtscX7ef1FXSHnfcEKCcYfAPkaCH89mMhgXTf86Lz",
  "key7": "zyF2gZvnBNbAC4UtNVuRHsdeeAi17ViZJZPGG29jaAT3gpWSyqpZv39tN7mforp79tLU21EPHK7QjP15MofUmhC",
  "key8": "31vsdnsTEjveg6LM6xvfe9PKxaNmWEUx7ta5AA8kJgN4WeJBzg2NoL4Kh72z8AhZDpGPNLG1kSpRV4Pmg5oBkAh4",
  "key9": "2V37HAQ24sAZ68ss1zy4bGqoHfXJMDzQa2RgAeAng2ADERQ1tpatkfJj5d6gbs45yc6GSP2R4Hf3tGjCbTqtmj3j",
  "key10": "4b9gYhhyN7KbTAdNDWr658VPKKJZhC645k1TUgtDcyk4jz46coJPBHDu6yxQxLC37oLCqY1ULXBnjdDEXTgVCzQ3",
  "key11": "EBkRNXsw6wkanZ9Y5zN29hT5ZFChVwaDdMQPRjSn3AhKj6dZYzyibEG48eewHerAvZ8YyLRsJYhZxnGVPsuXsoq",
  "key12": "2mWUzShRbFC8FJXCF8BB7Rg7Nuo27j7xWN367ssmxMFtZTuGpJqNj6oWpEpuo4Cr7RizYZP1AGHh8M1x3Zd2WYc4",
  "key13": "qQJDY2rn4ZWiWBNcUNT8nXVwTQ7NyzgX2WC7ue2nMQqrRbwAMCT4apEjmNd931Ba1hTxH8WZFPZLWGXSyse68Ba",
  "key14": "4qXjqs1VBTc4ZSBGUEXGBqjmJQvUFeKm5GUGuxENPRtCxtfoWoGQ7JFwZRnWRVkqGbtxQidP93Gcc3XVhpS5gsL7",
  "key15": "4mrRy3GUmEPkDiq7PK52d9KHvzmfnxFzwJBqL4gyMC9ahAxJDRWCR2YFmaURw9mYBwo6J4pea2xTXJBTJYXf6Ejf",
  "key16": "4hyfxta9zvMAfAeKWT8uHQDzZV8JmxpwUAFyps248Uui81GZRN3xCMr41NK9UjBStGimpWTJE9LmgmVAVYa57SCA",
  "key17": "3qE1QttTCynsVN5EPBgBnvb3jyLCE7veF3aX6pX7oQQhP6ha8EjcQvgLjvMEGD49bc9M5PvfXRABL6rtDCF1kXyK",
  "key18": "3xenfQRmauyaa2dCEhu4TSnBcQgCeeoss9H6XR1ratP68y69A4MkAdxHHaCsGDRwTWvnKtMmTJa1FJJN1u38QCSz",
  "key19": "5L6rCi8hFGL7zVfmZyrufvEr42cLDsLWmJ9VbDnnHLwNLApeGpnRy2sKeMhDTBfJCvT8JAmbrTDpaSayVNdaPR5v",
  "key20": "4CqUTW3KuDuEBgnRHDZLhnpNqCcNGCLw5DJdr1rmirDMV1DEsfqiEcRgDhdMSJ2Lvf9e6Dbh9r5W4rjdjTfRETxE",
  "key21": "5c2EruJtif1Yh2ktTVAHcmRDTHohzzZQifTiYgfnMQ2UW8HgU8CZHhgtmMaA3Ao9JvDFisCMe2FDcssR7WSeaink",
  "key22": "3D4stCZeUFqvuw7Guy9ZP1YvTMTByYq3PsmvNN7vAogzLQXpuQuCWPxvFhW4vARqTJA51FiB3K1oksnanQ2VGf35",
  "key23": "2DKVqRK3pjb8SK28CpiAkgDJ2sMar59yr1sNFmvE7YRnPQ312P3FHqJsuRPKjtAVGo1vJW5Mw9ACdmGbebngYKZ7",
  "key24": "4ZFATsuGonPynY4K9Wg3hsZF6PiQJWigA85pgQtsvV8ZnA2cCerQATCmQHQNBsH529mJwBAatm5zRG1gqema7Z6s",
  "key25": "2Nsaoz2wmxcpPu6hhU8up1WibQicxQtgYeBMPqkS59RYSYmaULoKXapcX8G5sX2BmtdDpZbbKKUYRYanEWqqp3Ma",
  "key26": "CCFxeQZsTncekhQ3CyiJjFdZwEec1gMxm2evXwxES1pYkku8jueAjkXZPKRbtM6EpytMqx4pe9hpvSTmgoVoZSr",
  "key27": "44Jh3C2CYc6z5NJekshMjRfiojCaEx8dWGYy5xEWHDJveJGeq8kFVkMNpwXqPiVDuMjbcw3n91pYekNZVLW81U8m",
  "key28": "3bym89xp3WqbbHYpkyqG1W6r9QQ8jAVfTEkb1FibgPbrTsitfTQppyaigktXwX4x8Sv8Wi42czLm8b6Gt6rcnEqa",
  "key29": "2iCdzep1vCnQb7kLyhmK2FLu3r8gKPF1ZLDcS1ERhbi4tqTD2sMD7Sack1oGgf8NFt7acJYoF5LvGiPAPBGSKVoD",
  "key30": "5KvR1bE42bysXw8UUUBZ1ms9XKGBz7Vm12DU73ojNG2sQZ4FD6jcNj3EqnxraH3sJUzdnVvXCicC5iXYQRBmcr2c",
  "key31": "333Ew2aCyuihpy6BsW3pWEA4VfJQSpPeTFQbhVNQ126KzMBYJWMxzd3CNmwocPJFAHBmepC1DibmGa9dSRzKzHhv",
  "key32": "4Ttb9X1PcWhe8eR8fSMsqxJRCsdmPfDtzzf8EMx9ubGAHMWjEnjVWfJgo3EmAUj3hd9Pph34dsHMPvTVLtjTxmKs",
  "key33": "61WKw1iDHykSqUy3e9YtrrQwdajXtvXr4VmWVEHq6Nn3aGYQGqwXZTQvYvqw9mVCQn8bvbtAQaqutYkYtMYpumUe",
  "key34": "9dpT2byux8MVKrWh4QJe7NZtTZ13RL2nLTz6a2pLRPYFEpfGNFGzH8MhArgpp4jS64bqwyrt2SkMT8XHYWYBt34",
  "key35": "2i2QxFP1hmPJoXEsKRJ5uGWwaSBYf7WkpBUnBvHauUGD2NutGcmY8WvJGNzX6rLMoLzYPLGQd7ubHyndmSTbcPJD",
  "key36": "5CosbrNQrqKrHhGddsJ2eheBVFjGFgXS9x4qPHjvuprrhKQesYbwhmLb5x17CDaJSma6YQ6hhGEmfqvrKyTVA3Hu",
  "key37": "xV2J2jjePvrVyLwjmRMcDAZUUSnqUJy234d7bHfg23dtd8dxyJPsLwXviRq9Z26XZM3cvkXuBCVpqDkf3YzxECz"
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
