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
    "64BHcsR98rxxfDm2DvKtT6Am2vJExZ2KeNzF2npWu9346w36yBpds5GV8jFnfkRjiK9bVfqXU2QQMUeWFTwPDBaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZnXVw4DgRgbGgjiS8ezz6K4LHtodoV1f8KPgmivGUtmB66iqCmBkqjaymyEQCfyx82QaGteFxuu8KTUy9k62pZp",
  "key1": "56mPMLb1xSh2ntht9h9wFqWcCtofyyuXAQxXLycxaR6syRMZg8D8vpZG9wwvrM19ypdhAQSocXLXt3xsp7PRDyUL",
  "key2": "5VoUobsKhQAnANf7zosLVSMwRDEETuK17U6HeVn1LU8HgfMDKddrZycLMXann8WKVewf29aSeeoFoq8cQB9xXXJf",
  "key3": "S5TbSQGsCyYjpRMvY45GSPbPKiePya1dxMY8Y89Uo2yPA4Grp8qg7ScMJ5SyQv2X75wBwydvb22YydmpLP21MXz",
  "key4": "4fdrNYMm9oWr7TDeeZaDumnKMS6Vjamp6rnkSm5WPrsWov6r7YkdbyySZnWBMfJ6QzgEuHZcfrxB6AWyZ7hKxJmc",
  "key5": "4WogDK8aroPQeA455EzGr5zUvWUy9CEmGbwhsF3Aj7XJJsqMo58xpZo2HtyoZVHZpcmMh3k3GtTELBCN2tfhCAjw",
  "key6": "2bFCgnWpiRJKrfZWhP53HNyW8L9zMfWNeWjqp7HzaaHig9QsbdAhKPkm5eZp2cfJ1ggdwuKb3BAcjUp9J7Fwvegy",
  "key7": "5fNegy6hBsRfikbTYrgQYs2kVMA5Tiq68otQTsRHZc6RZNcMCMWMEBFChsHVBpEVNhBZYymSZFiET8y5TuS8QHbH",
  "key8": "4dt9ENSfWGtUXE4QycEcBiQ1Z3wRS719fVoxbJi43SR8GyWuTTLc2ap7iPqnLhyDbPYmx63QUrxjPfpmZKauRe4A",
  "key9": "22w4jnnxj5S3RZ46fx92UtrVyezYgPYBfa7j3JrQKHxDz4CQVRkwHnLzvNsjHwMJ1riD1SEgtXdy81JYFdkkDDpb",
  "key10": "2WSmUX6o6aHRDhJ5Pgrn4ZsFMSMApmXhWu494Pe5yq4a4WBf2pbqWTQkzCUiuX3yDREkxmibmwTWoFd4WtnYW48e",
  "key11": "4RcAQYwRgjrMHBPws2gnkGGXQQh5AbhVJgPE5ovtWMnT9TtxXGf6hGNJAiARo9dhdG65yc7ZhAXo1uosz1X4hcH1",
  "key12": "4ojWf5VN7Jy8e7MKuT8z815C2skm4BUgwwVZYnAX6vGV1jhE5ZNTuPbfFkD7XSzxNqaVTG8WbEdbYZZtNaHVw5eJ",
  "key13": "3JYuKmMFwscVmw8kkonG7jMFd2fNYzK7SnZbgpRbhGx1AqpBaE3BxrrdutjKVenjwbDdwNke1iBuvPff6f1LC6dj",
  "key14": "3mGxuJp9GPgukcU6x341hkXXydr2tTK7g15gbzHxXBVHZMdQBLVbbQpfmjDwtqEnGC5myvweY1vBxHAujHvqNNZF",
  "key15": "8yPQxXuxsgc6gCoDhSQtFQm8bxvYwFDC3mqhvHsahNjFodjo7s3rkmBoUoz1Qyvyce9jDzhno5PGn1s6aXvMZhG",
  "key16": "8MAdH3DkYHhvEb4dQUuRXw29seZFgLF4Tj31in99322HWfwCtvSNhqeXJa9F4gkizCbNRxDznGdp9FHF87MU6jX",
  "key17": "5f5adumHLNfyV4tCYN7M2V65eh6ejuRNg9YUHdEo8bFFt7SsD3pMiUtD6SFy3yCTsCGTygUK7sMxNLDihJYX3tpX",
  "key18": "2bP3F3LExAY3TgiL4pX2KptiBCfNEG18mqkVW4wqCUuGgAUVTCJY4K64tEuMxjXEW5nanUbSVDTPjqEeMEpDPGSd",
  "key19": "2UuZHJH3ZKiBYV3NXGto9W2mf6KMw6LS7mA5rxmKiqdVr4im7bo7TwpXKZFh6HFZfudzoDzFmsEZeKv1HiuLMq1B",
  "key20": "4mktqi5axwQePmHSNYZC4FthbDuFtdqXTq11fxhfFFRmKawW6novfmSLnNu1Loi4x5yNXqQRkLj7NWcMUiLwy5Hj",
  "key21": "21PdpaPwHEFAEfVcsZHjpsWmfph71CmMn2MZiSzMQQ9eqr5sUdFuJbUPmqpoQdQKUskPE9HACRNqAbDuLT6vi2Ho",
  "key22": "5Cj8mS41CLtFE2BUNG5e3ZgS6VWCXCDiJeqNB5kfYLrLZSDUshXs7mRW2od5PevbgLUxKMz15KFh6Y6gy8tBWRDf",
  "key23": "62brYj82E19xG5Ki6Azsu8Gtv8TwQUJrkF7zHhq4rd864ys3puHUrfTtc64Ro22BpKf9chGewLKdpyKgd2hJWihx",
  "key24": "4WfrRmVPzybQx2hMEGmwgAZ3Zcfof3XP6241JKggSQZEog7ESmiYvqK9fPgFyWJ1TqscSvW6dYyR96TPvppLy31T",
  "key25": "LM2cf1W7PAVJfZoBHvgwx5P9MQRffJBVWW3G61ZMrGWk22VeqhekoTJJg83FhhUTfrKddBSYwAEVtQFVMYGhGh1",
  "key26": "4sRm4dAAiKMEi5XRMtQdLpBWrbsjxfHq9ss8H5iWXDDF4YPT2BfzafmAJr3in7q3YEJm5NhE2Axp8vYN586GWmdw",
  "key27": "2vSynVX3VEVpXTuPcQ2tmz9E9R3cHpL1eozqESgzG1EYKfiJ6JqJARWUGY3qvCkxNWwn9wWHhVkfRXeW1bPX9gFQ",
  "key28": "WKxjXgUmqtaumAHPLqxTnivEvGFd1Be27fj3ZZXwQ9FsSohnJiTFmb4vVLJC16XudWdM1XzdB4NyjoYJ83o9zcm",
  "key29": "36SJfCA9s498wgKgeo62gtWeEAUsEnafy9S2QDUW4JTcP8VzA7QLTuPsxXxtHdv3XiKwYjwpHqF2PRcVFob2CwYy",
  "key30": "5EdbHxH8yQYPwoTGY2ps4SqtbCqWQMK6RzVEB7aiJVHDVG8ktcJRxvUA6fjykJHJFutzboBTWoinDMnMfQvMFq9Z",
  "key31": "5oJUuubaYPXXvCufgVgfBk1Ks74hs5vz6zxhWFRKqVFgAWofnAFTad3Krg9HGgh4qAP9FPAfFZ2eJ3pbVqhrp82a",
  "key32": "HokNsd3aNyUM5rk5UDuMTN4FqGuA4cw39n6n76wZFGxnnbSsaHdeVZ6Br8vbDNJEcYiz15tcJ57NbhP8V5wQfAp",
  "key33": "572e83QChv2H2jonM6hLG7gRktbEYYYnkVoYt75p9MuC11LueJr4oZs9nsPTEFYVAJeWUJ4yQaynKBvbEDrD3mPf",
  "key34": "3c3mQNUeXeXCfs1JTRebSLZXysNNG3d98greqAmaMW8YcRfFYQcEWezR38x4uzumWQoayhSYUQCxDYNJguPrvtii",
  "key35": "JVcAdLa3QnLh8pUgNFqDEum5CpoEzpeN8Ri2RnQZeEWKKbBuJFx7ZqvYn86DhsVvKxXS4tU2keqLZuZwTmtzrnN",
  "key36": "5g5Kg3nb7PhhH1YgokB5dk3mjBUMnxX9GVm9nyjTBZv6t4PbQmNasasAZj7DvTNkaurDZuzs7QohB3y97N54NC6d",
  "key37": "3iEWayhrouBRRLg3asaoEsvn4brBTfJGxLRQxGg4MzNiydWYQKftNb3zpQtTWgdihy9jr3ekcDAhDcLJtC9CAC2N",
  "key38": "5ZhUEDEXNqkPTAkxM3rkyJdX9FK7Uyx1JW62z3dbGrTgqTsU6hvZdMjn9FSSUU4zfDg6HvDgk27PDC2M5QXkpY3x",
  "key39": "3sF6VPqbANhScgbbtvmhvzge4pwHBcQD4kbmwhW1yqNXGmutYEyfKgp9GiAiNc8r72M4RAoiUQsT6SJmiR1bX3Ui",
  "key40": "5eshxwcuBaLYBRURcnGaLRdQYZBydQmSE5duuCeuYYDS3YAtSfPhpoEudKYyQbdAPdy9Q7diw6VkTCGewPwxx1k6",
  "key41": "4c3arnrRYmibGCkyVykWq2oRQDbWToDCoPibqhwSfFiVSjqBsqVQv6z3xwStPKamynSMTzdRc8r2VxArswnDWpj8",
  "key42": "5GnFi5WcKDifVdSnxujTxHobnoexJ2HBU5t8UNtN8XN2XMNPz6ch3Wm2WiwCfAw2261RgYMxRhPMFzyjf6p7axUx",
  "key43": "31zqu5GvNDq9VwHSvdFo7W2cGGrFKpkpWDWXyotXLVXkDL2qFHMqVjvVAonnSCi75siQyu9EQqmYHc4qMEmvJFrW",
  "key44": "5PZVjQWfg16NJ7wyaEs7d3fKZkZKTAR8ee2ZCmLqE2RBUQxfXfp7MLFHVSYdZUYAAFanWmKhZAkZ2vQzfv7bsDTC",
  "key45": "55t3n2jN7zbTYQ8VPbbFosgpGbQM4d5Bvpc5BzhSPjb8bSpZcFBLgfDhZoA4D7tMsZ1CpeMFeVibKmFwQU91uFaR",
  "key46": "F2yFzBQcVoNY3A1UZeoRSQ7qdcQnSRHuzfRchNt7Hxpfev5JsXXFoUwNiNV6CaJDEQ5GeNrhPkvMrQowH7jD7zF",
  "key47": "KUHiGfHL7or6meHdTgrTkb9HPqqEYkZXmLxFJvGANjs9KasiR3vL5Sq7VZAKMk5A7KKPBVy2wGXzfpMSCjSZJzk",
  "key48": "JdU2btN4QenUWBfFqoY4DYXbNa15GudLbscgyk9fRJBJhbY8NdesJNcL7vhgBsfd6xZnZcFMP8iYrSn7Q75FHKZ"
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
