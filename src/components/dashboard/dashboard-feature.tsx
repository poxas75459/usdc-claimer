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
    "2ydMyjrH9DkcMDsYGeLnPF985QwtFbjn7CYvdbPyVHKGFe98ygdZNPVJPx8re4aEEbSbdWMsHsLue6kMjkQiE3kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phsxMAMgM8b2eLKLXncZFZKz7XmDpEgpJc12CaHe4cxG2gZVrN6tAebuof5FCgA5xNPRzbGAaYmnMeiXhGXm92s",
  "key1": "4yD2V8XMyUcA66NZGrwrwvaPYhbrmxVKKV8JS7i3bYqKhB3qeJ2X76DCQpE9kVdQyPShiqZcEoDqb69WgxRX8AYb",
  "key2": "4U38JNYusMp16EZGibFgq2ate8Wtx2JAHEkPr7fhRG2YAd513FNxpf4yfqKL4HbiRTnYDt7T91MeqWweCULRbcyA",
  "key3": "2gUWoafx1aC14cY2882ePEDrKK9Qt8RsQ3KXLtptc8Vgrdw6uJMjRYAgfX9KUTTV4WmeP6DNviZHBFYfr9eFJqQV",
  "key4": "2WiVQUKFRSA6bxu9j7qHHhMBSKSu5DYgXXuBwiJCiv5xQTYjhZyrx5gCYjaeLmbPCYaMWCwK5hSXxNaL4dA2chE",
  "key5": "5voY8cvc4538V2boVu59fY9YjawfbiDEVWbEPD5Q3k9tkCQSTmrMNokCYpEyUZjqnnqftCcsGgcXK5PabW6vt5pm",
  "key6": "NnPGenKvddk7wjsJ2QGuL5w3oRzXi9TuKa5CDC3irGu61AWRsgoyTVvmKV1E4oTiNuhfJLoZSv5BVdZJZVBhiqH",
  "key7": "2DS5817tshKFMpRLinBLro1HKUdoCVzLAstWmfW4Zh2PdXwRM8H29bnsXWfBPmos4eJ1zNxyDVmDvzsaStuxX5z4",
  "key8": "3jS2Zak5fWsTJuZ3T3DVTUrAYdMTJURqEpPhrJ1S4DwMmfqQMcGULn2jN8QRZH6kBHxHEz256hkBd1bK2PUnKeqR",
  "key9": "5WtwioDVDsNhWn9LKzwU28XaL8W2sGMtJX9Uc6etCK6nL6je9CLCswqZnfvjfRrsRzJML5RUgirNUGzAsD2oR8gY",
  "key10": "3cgog9nmcsnxoyijgp651BREdJEYoDWd7ZvL9SXwqix9ohxxCEoW4Bp16nw4KHZa3NDi8eh1jeTEheVpMCK2ACDw",
  "key11": "5H5RUBTRuFiQDfUPDwCvi5sUzD2WwrZodWY5sW1Vbk8T5mSnMj4LNKKs9iYGi2ym646pTzHXB5yb3it2146gqNy6",
  "key12": "5RbA56KyaeUsk9P8eHHui6jqth25AvZU23U2V4j4HKvgowsnCLNpYrGaouKqyAhAo1xw3SMCan5JTKEU9eadmD6k",
  "key13": "5gfbaPXVgLM4Z926KF9mLcsibAZSvuZKFCSpAJVsPhayg7uRj2ERw5EG2hhoBQuPo6NoGKQfYgXDeMZD5HuuP7v4",
  "key14": "4PUu3AeaoUrBdnGd8BqXkG81TR7n1NhR7CErPoPzCWKHov2nz8rCi9eL9FM8h3Gxb2k4iVnc1cuU3uVh3Q1zXksT",
  "key15": "4gtaiRR1VQpXXa5gdb8Gg7SDAYFrRRp5yYMaCx3VmhyLwtK6YMS89fZms8FPzzqGPzpsFYtUuQ6hwTErTywdptMa",
  "key16": "4iQpSDigwkwZKnf5Wfc6fbUcPbwzuu1aHG6s3yzQrkAxbNoFFP6jTwuG2ubasuwfR31HrP9GLaT36DAaN8Ps3W57",
  "key17": "2abcRdZJ39UKijY3oGkWXhFzXnXMv7jWFRfHReRtwPm4r4C56B4sjM3x84srKPsz1UpS8JTzqNjYwcd5xCLP6mVv",
  "key18": "Zozzw6Bg3T6iRaAP3ArD7VSqnCfUpcj3WEX3mBpfwren4d7c6tUPQhpULNH4WDbUgdQCpQ5RSWazzNiLfDGrq4K",
  "key19": "5uAv8fz9dr3fhCaX1L65BP9WmgXoLSx3teQzRbgmv6qpr3AEqgtdH9JsacKfoNUCb9oDpb869UqNBL37esvpytfP",
  "key20": "bs8u8KGpZTfS8h4Mffrsj1NQdXssvMLCcJ5zfGSoFCnfddHrpcJWmzuTNYvftuBCTJi4hhPPfqXmq4a68F4nsGB",
  "key21": "47ueJsuMivjoj2Mr87qGwMk1X7Wd8d492E9Nku9dLLhWZvBioch7wfR2FdpH9zgCu8jCHKTSZP3WFsGe9b4GpLCA",
  "key22": "39zy5voCEPZcck4Vh4TWdWzY2CpTzem6HryrrbTmQAds6BgWfnAg7r3qEPyrfgpabq5KqKe7sPoWMUgp1PE9bCez",
  "key23": "4jr4S2EtEPCTmoB1BPBTDxWWQpNAY5sU3FasARwA6srxw6cw6NPXGWkrWW8WNfhdAu4udMVZ7DD55VtrE72YJjRZ",
  "key24": "4xzkweJfDLuXEJjTzWZY9MUAbwWMFm2UuBwfqu5ibSUx1vX4VFG8uHLZptmH5UgtRtnxugktJm931ARdf2pjbaVe",
  "key25": "E3tQiSbj3fsruM7gEpA8WmyvSvo6cuS44nQ9Wbm4JE6nGwDJ8ekhEAepU5wPCmPxGA45fVEypAXzjisaUcmDRAq",
  "key26": "WrwzcjiK4JqPtZ4tZgnsbxCTQ38jM3GWFQ119yKC8c4TMeEyR4Pw7xgmbTnGuUuv29PAVPwMUXh2Mtk8m6PDizG",
  "key27": "5mvgCQ4S3uKg6QbRjJgyVTqgDxv7Ej6bfBhTmSmgitA8HJiZgUV7gF9VaTjiS8AsdABQfXs5KDqDasDY81VBotcK",
  "key28": "dFPVYNNx2mPhqQF2evQ8oY7jsZoNCF77KqPtZpaCWtUU2oMJnwoAbSQtVD7tTqT5fR7osLswHX4kyu4qtkgKoTG",
  "key29": "42AzFpW5JWPdjrHPvkZjXUgKwKomoGTBwmGbJKKAJk2M46Yu8GatXPcLBGy6UNG8WBeZ2XCSXbqjWaM2JWz9ncjA",
  "key30": "5V2g73VVbe57wZiXf1vKwvnuWv3ADoK2wcTGpGd5JV47PkUaDp8Vr64MGPwj8PbdkoPN9WH7hBQoVU7AKbqy9pMP",
  "key31": "4sd9nttS81DeRb9DRzjwACD7GKP9JHvoiQEmVTGXEmEZVd4FK3MdnFdBwfi6yj1zR78kHv4Jrsuq5Gvx2XWKZCyb",
  "key32": "3fzqYreunzE5aKo1qhXS63EyQ5LJvj1V1HZk7j6MovsmCY7t9k2j1xGqrWqvsaapGZ2Ena4RaCXDCMHzUFLzZXvL",
  "key33": "bGkiqbUQDbLz2HWcFiPLh2jmqbcM36bzHuDMij6FBGu2uo5mBCTEZZh7XH17opBzRKhT7QwasQp8MuucMgfrs4o",
  "key34": "3LYnJnjWdUJpuVsfadvtTzsTahKdpBw7JSFh9LDqikdWeFXBUccN2hkCzbUBnrkzEYHpAkNavDqTPPnTaNHXBZvv",
  "key35": "2MR7c6Wcio8ABbVAxEMaUAfs1ibwaWrWRN1SUmTzWfkQHWLdpFxoR5JrJeuk8Hr5xPqYfvEfdN1XEWasyPs7Pv2d",
  "key36": "33WBFFeBGEXWKpgKw9HWQ2hHQo8G5QRq3k3oxjFNVaVm9ELa7mFmgXoZhSFjPJJhkdjDc443vvHRCMah1YiP7bKg",
  "key37": "2HhWGRtpNZEzFrqLNCLTdE8c6Zs3KTn32vXWRpS45bvGKAd7rM6uNRTYgp6tYYvW28A1RWHsJut658jK1BJnKxPf",
  "key38": "3hdbsCi8wzUJtKj1QGp7E9S3utHRdhmRuRAHaKAYJbY2LCGahqPfjZetDAzoQ2gEwyNwvQjkRY3kdwoXLyP1uXiQ",
  "key39": "2Bkp2eFUYhY9iYpvcFF41M6zZQf8W92sUJNn83P2Q7QjggF8xDvpwCLm3R15zcu3KwgaSEHJSgDyUAEbqWzp74ri",
  "key40": "4YRFpbkw6TVn3RFK5RsBCdofcJqm2JFaFuFBUUnGTJKdcbpCKiz2pvMYWh9qNGo2cHVyVXnPgcQQsVp134wALjk9",
  "key41": "3zSj5VRnXv1R6ApWKCpK4TdPUjAiS9Dd4BZiiYfu1Ey6ntsGbzPBJCBFYVWjEwT23MxVPTCq9hTn3q8cmnDniNHo",
  "key42": "4ZbAE2suwVnUgM9CeA918DWQyALK4R2qhYZJEbF2P7C6e4D2gyAMV7DvZuVRhFGVkqv11x5pmeqWCukbeEeqgDXx",
  "key43": "2Ehxqp8S3gpPhtdNhHZ1uzuAZKd6kaTxBVBzSkzM2cQBbSQijNhnHWr5Kez2q8HcfEt4ddHs9MkpyKikXXU6LsD4",
  "key44": "5AiCK9Wibi7pE2tDwAq6H4XtcoQhkTp9j4ecV1tSbhP25MbKqGXykckoeU5GWS8R7u3jiLFruY9Jy7zEF4Yzg89W",
  "key45": "5nJFqTzNeQXV99WcVF3dxgUoRNvzG2au46Hpi4hBisdh2Xq9E6RNARp8rFyC5J37EGcw51FgEUpTJrVfey5Miotx"
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
