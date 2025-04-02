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
    "5V8PD9NbjnUeSX2e5KVg2iyH7n9UTUUj4E1iok2HPLKbupBtDHzVoMa6k5vrjAnFJRbc6VD2kNCbC1QGpAKmmums"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rnh8xcPPuswUEiuvqMABsfgfYmBHHoQRdJkxH1JoiSCczu6Wo2Qfr2cPgKzvCdrhw2fLYm5K5tgz8xqzCUn2o6h",
  "key1": "Xz32v5uq4jEWPhamZgLd6zvad8WS5ZY6HDnJXX6b2zhc6jcNYPwsNuMTpevPhStUyao5HAaiie2aeCU6DW46MJL",
  "key2": "4f2uKXk8w9Ygx7ShgkTZztY3E8CpiuVLGP31F74uaFpp7cBcXK8zJySe2qPKSp8NQuBums8iVAaprqGTnSQjY9Kz",
  "key3": "2i9yMyo6ErB8RwsruNkwNbUSzmhh7skhxg3fzewkZupawAeySdH5QH8pFnASE8uUm9wTaUkrh22GRJ7q19QxEeW3",
  "key4": "5d8FRzEr1UPs8EhHbZoxbr89FbE946f3AnsjowWhQdS4o2Y5WzhSPQRjnGrsrNfXwm2CuWYpJV8giqCNFp4mKGLY",
  "key5": "5NhSPyCr2NBJSk5pWDpFNfuUCihsk76fxLDKJHQfHvE94uj31YhVhDFfHFW9wXfHpNtSAJDV2tkk6UpTKP9rFGYW",
  "key6": "HYwaWTVDWSWneKmB4XsPS2La3U75yxsyu3JQ12kYPdpACEgck39bywAsEB22ocvgtAkTworAcAnQcZdMJ9ux3XK",
  "key7": "5FubgFfsuhHPn6TBZjdQkV5Wbx68HYNqdmyk1hFYgC7H8TKeP8u2SSUnAx4M1nFSqcBojEVToTjVFwEREJbBW25a",
  "key8": "3951d4NsqqCwNzwbLX5BstyPne32tFBdLCSQHqQonXPz2Nt7aiNTsi1dxar8xEB5VR8tQ76DazRHFzMccAU7ZDxq",
  "key9": "YyoPPKNKkxJCPwxpGvad7yb8rZDAR8pwfWvJgcAaaLunchRfbR6ZbbLSZxHKhD74VJSNC3w1sp1cpx28xFN34MN",
  "key10": "36sz1SYT1VymugHk5bvserpnTbBw1VwYKybj7PDFA1sRHsD8oMuzR4DPocgygw3WD5jbTvRgbrm2efW4ESuj1qub",
  "key11": "3kPUVhpKtXu7cg156vssbPsVUjkzYFejzvUAHhgRqieCLyYqZkJhYg9i4YXwqK6LHjK1kCY93RMWa4UhWppzwW7W",
  "key12": "PzERcAU7D6K9XtNqh2rjzw8wV4nfHS38XhGLGFvgdqPkVLhTeqkwkBQTUhrXJBq8p3SeJCv8i9jqmc9Yt7MBnxP",
  "key13": "4YiEoVRpJqBNZnwrxHMTBg24oPKQCAm6edJzG1sgrkd7U3mx72Ar6chnMYFkbZLN9r642tnorRHTvjCk1mQBSmUD",
  "key14": "38nTYUyYpkma79ZEzv4vT7oDYtgsAUL8zBzVbhwv26LqbybNN66Tz3a49n8c8sYybbARP8TKSV1itQvbrUVutjgF",
  "key15": "5oEhjGPqan2PhrUeeZrUmAsEKdS1TikRGcDbtUSsTkNvxXFvo536ty1ucBGKvthCxHApirhDr9Sey7tHhcvfSg4G",
  "key16": "4RJ1vXoT6Tk6SwuKj38hDWDs86jfsnuSowXW8A5vKHs4fNzG4hbPAHUEFL1FSvhbongdEkrxM2WT64BRzLnYFUtJ",
  "key17": "5TatmJ2BSFMs9Rcw2Sq6XJX8C3dVPsr9LkdF8pwPEp6QV5UptFH95G1FfJpgsoCEXNFfCcqzkHpWQECeQxmNx1nX",
  "key18": "2sTXc7cJ7KaStyVtq4HXP4Ad3DWrUNVdJiHr7szfPwPG9fBNFJxmzMkEBrz8KW8bR8DUcioynpu1CDgEHUbeAcxi",
  "key19": "3fLoVzZx6k6j4gmChSCz6i9bf54HwgKGDYhE7seBjKXpxAwyoxk7DXmoHevxuKCQ8WaEn5SB7TmcJDRonmD5XqRw",
  "key20": "5J1QWsCeRBhPU5V4AbiZWx8UscmmCKHExvNcW8AwuYKmvd5uS6G8EdUXuZXKviZukRTgQ7hmQRpRadGosnUKUuT7",
  "key21": "2iJA1rLiNgvE2b4aQmbiYrtE7zj3nt6cPxkRLaHvWjSWCNRaNYDZyJc6aVhiwtFfNneZAEchzUBp9wQyY6vABwXQ",
  "key22": "3ByZXcioBSKpUjXYEnAKKPPmDdAZHu6N79iEKAy5tUzcacKwLynfjBKPPcY1yT9frp1eHpnXEdWpLJ8A6r9NF2hm",
  "key23": "oMwkX5tBT4mHL3WC23az1cZVZcvBTPmeTLft5pSeTu6kiMBsGaoG9GmH7j7aGK1TFcZ22CyfUy3FrseKNP27nrs",
  "key24": "2ceT74U2L75pNS6jdT5dkos5YtAmgyPwytafRkdNu7PAQ31EUQ7ipo8fbr2498PvEn9V57Lw1ee3NKaUxRpgPhSQ",
  "key25": "2AnsXU6FcUq8D7SPRSfLBXEuj1HWkhrYpyB9aKYGwtTJiUQjdLbahLWcqvL7DE5GwX7jYZtc9PUtfptUz2XLYkR3",
  "key26": "2J3jSi6pvRAvzXLxq6tTkZNHeSd7RTrQCDQPTF38SN7LpzgfLVjVUrKKE8aqb6qkEe6astwhx64HPJRLr7kkBkHS",
  "key27": "4m64hrnyaKarSTTPbkXXqL32dW94nM29RuGm5m1cw6wyvr3BHrbJzks1YKn2SDrx8P3qVv5trnfYQpYbMWCEaV8c"
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
