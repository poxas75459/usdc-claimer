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
    "4ABZXkvS8emZay5Yy46nDV5XctWmQm33ayHV7CRyHugucUsvJbRQwoRiA2PVvUHCgPC3WDTXqr2fRjr6TxCh51RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pfeYrckvSBCEzx6x1rLK1Dv2PwfdtUe5UXxcSvghoz3iLmnXzYrLDR3LEt8QwjNv841KBL2Ax4K7oWNwq5hJC",
  "key1": "coN8sTGQqbdKDKxLgg89PQAF1V3SLjpHyD9pg5B6L9FR2vFHmZkTN3VuUnH6jAPnj7aHWJxZBWsZyfwfBaifqLy",
  "key2": "4aKDhg9JsV5dz8hDX6LXyfbPKVHWRoXE6a51Tpq9XXQM3UfKExYLHY7bDjurPsMK6DCBiWty9FuHEih6JvPv9Rmh",
  "key3": "4XJaRZcABcxm28juVXjhPyu3u2SkAe2rTvqNAutgNg9xew7AmLrXcrX3odccRdoKkNptqpPa8yok8abwoQJr7E2x",
  "key4": "5xu7aC1vTfXXstCjBNkbrq269oqRPc5vsavLyduyMQsXgxUr3HjtqQCcmnEQNZnkG81ej3tcA2fwqiyXN5dRA2Be",
  "key5": "2pQbJ7CoHveWpBjGZLS2HnLLXimY1abnQ82cJVKCHXhAg2xEcw9K3nUrAfzqCxwr5wSTc2RucoajNxARweY2QsVP",
  "key6": "5XrX7vYwxHmCK4bn9KZ3694PpEUQgJ9C1s7CFrwv3gzWr4TvZqXrNu7nt2RupKHnMuKzsAFkA8KYCciextWNK5Rf",
  "key7": "623kQThSEVePHMmXj2donoQLR6n5PTQJLj1J7rMfaycB3D5mTZHAQhLRE8VWEwiBxjfyQfbHSsmVcPZwv1aeS83T",
  "key8": "2HGPwWvUch6iEheprLDqSx4PUybxpnAWBaA9AcvqRRi3E4VgzowD4sq9AGXf2CwiuVqUKZqBgu2kxZ5xADrS4LqD",
  "key9": "578QcwbdyD8JykrTZwFDNB4C68rVwzRqSxZNvoEa7vyqqTa3MmeCYrfEiuqnVWrUweUtVVnpvjq6Bn4iDC1LnQBW",
  "key10": "4nLBesZN53Hpm1ioTjq9HpCza8jdxUBtEkyXDQesEQz7uyhSBZnnJEX9UQ5PjQRq12dnajpSWqJT7ULkJyK1gqZz",
  "key11": "3KwQqxgqR6C5UYJbEyT4u7T6Aa7L9nsh5ZdzCeEew15tNmdNq71zSDGpRKbgboHfpKot4BCkPnKDAVbCLkTccT4S",
  "key12": "T9Bi2ivBmWbs1zdFro7ivD6nuyUjE5akLHe2fC8MwtjMqXtdFteYZAgMVo8KvTeCTh3ktxWxfuDZvj8ctSqqyyq",
  "key13": "4hCPkWamzWnLER6MVPdF43kZCwVH3oiSYYU5oXgVHTH9hVhrDiraQCzW8pukSerHvVuy4b4J3rJteeeSdmop7wGG",
  "key14": "iCNCR8Pgf74cGW2eiXThxZ16eYAs5wZcWehtEYPZc6njavo7Y2snCZqDBoS8ny7xDLj8q2CWcKxHzUXwvXqmhqH",
  "key15": "2jog4gzvUPFxLX3C2y75ZnLg6Fa6pHeQ38xiPnRphdPY7MjZrPsdqU8aBGkwND6uFULqaT6s6ZZd5Vo8BqFd7Qo5",
  "key16": "53TUemggJdhtha8FqSzHM5egzcsfEJc1RPZnPkcMJ1nNXaEKachgz9X2HCxjr4HNbWM66KHwXPC8pZxe1zbf9pTV",
  "key17": "6k69fPFEv7z19bc8maLi5YQqv9Gpa8iMm8A98Jor9UR63Ypfj6hwzbTYhfWpVdB4qSZnjSRgtXX4hwAoi5SSib4",
  "key18": "3FMz3B4PKBdTCGbqf6wARqFNnkx2kn9UWTHryiY2FzWoAVcdUjNLpwn1buHJq4J6oL7B5S1cs2FkpVotz2WByBNs",
  "key19": "2YJveDsnSNpKJTWsM2nj1rM9u5fWS5tBV4jwD4ULWtjWEbncusABVWjZhQwHpr71Gbu3PPeAeMy53hFwpKP7p7oF",
  "key20": "4phvU4iXEoYQbt6aXU1ibGhAjoePbrX51PJ9tbjRWBbazNHuz1HEx7gTDsGH9L9mqMcoiKH4Xvb2Nsgsyn1xTkki",
  "key21": "2zhwmw12YhFzTsCJGDCYJQ6W4b6sPpS2Bv82nJhd9sagu7HePK8YD5tQfVpbNFeJ3otuM5ag1Dwb1iSXrXqFM3TH",
  "key22": "2YaeX4kcagti3KiLC5abbm8rYegSHBJ9t4z5CcxfXaF61hzfD2y148PqyXroezREnEvbT9HyKoGBGEcJ2tAQ6awz",
  "key23": "2zd3iGS9eFLnX9Z3cP5Sd2qJGveoJzRuYweEpjhaEGBmRQ8asHDnbud1Bpvy5so4s1VGT6wvtvztU3JxMfWCtR8G",
  "key24": "4N77Jv7uy7Bnocc9GDstXQuV6GPaKWfJkyHnbZjsmMp75PokaRW1tjLCA78SopwqUKQFzZhhiWtcoQWxidEUKXsL",
  "key25": "4RyqBDCEyE9u7zMNZadZFJCP93eEYy7RzcHpsTzzwVQRhmxFbppEYEzPPyPAzPSRbg1PSEntoqBzQcnTLAkoRDLr",
  "key26": "2d8eFWo9Ey3tHmyURwqSM5eg8NKxun3zKYsmXPdqdRpap8JRs3AVQptHvKyyoLq8ZCfhxX7awGgxvt2F862LW8vb",
  "key27": "5gSwoNS2EHCgSH9AEfJH39G9oergcFs8xFfr6N4cobftMJGR2KY3YeAbvkAbWHB47SaTWy1RBLFFzpVyjTJJwWF",
  "key28": "2enozKC2pkyfVw2NavA2Jm1VrZTQNVed1FxaMh2cNzZyVzzMWN6ZWrHi8Wgww2JQQGRiZrArScEHNGGywzmbgW18",
  "key29": "bz5soVGxYKPcceM7L7BXpEz93Zo5DRyhwNjUeKo8MEyt7NPVYhp1FUqHrwcGVYMH2sGuDt1zGXz8PPoJuJwwvhj",
  "key30": "AJnq768KyqrLc1VwaLeNoHf8o2CSWL43PSW2ErgJtCG6F9U6wo1vt9SRS6kTfJvneJwzHwcPJPNUmRNdDRen1wM",
  "key31": "5MvLxLHDuiu5CRKFtmuWyJni8UFZWc4peb68cdjeBLrw9MUVSAqCqe8c8TNcGz5sHWJQ8UpmULTkzPerumrV5n88",
  "key32": "2BATS2szXRgRN9HLniWkcB67s3ciY4LSGCYB8n1TwT4HCYKqAnf8oWjmMuwFq98dYpdeRU9L4KsTZMHAaJby1UAY",
  "key33": "27izKSztp4XpPFLTFWsDaa4uJQiDogN4GkDGGMQ19qTAQtvDtXyK9NGjiYSYZCmMxBsPsUVg5K19kg6cD2bj7xsi",
  "key34": "278qnxTBQj3GyH47ZQp8s34WDVTacnbXK5jguLSyktKhEHwD7HNbUhuzYF8AAqwebETncGbu2Aat8vzrPGmLSSN6",
  "key35": "YG3FoDrFsEVe4Md69h9qWuk3ctwiWMFLahA1uPkoyxnQuj4NukEV958YmkUN7azoPabs9ehjKyDevLLXUu6VCMm",
  "key36": "34LJe2FRVUGdseAmQN9r6pcm57mxzUiKL8EuDbSFX3MkHrN7H1578pqERe4eHoft8hS6tVisttW7Caf3BPCSt46q",
  "key37": "3jVHKCKZjyhZRrm4DKgHbCKAifYFnKBW9hFiCAmRk1JGo5G1jQCpFcZ2dGScp5oTgT8kwK9fWAudxGE4LinmZJ9t",
  "key38": "21FTisX3YcfVukQMTNbGPpdb9KEvcw4ejtzLVRGGtM9jUyAitbRieDKj7xQXiju5WWKTNZ3pyPUGQNkyZvBYJRpk",
  "key39": "2J4vesiUwrm41wWhrK4bpTSaZ92X9qAfHjDEWFCdkHQbjhpBH6qfnswJQVTN6Hn7u3yn8oraW1V3BQyfcEJXJe3z",
  "key40": "5YW22d7W7BErpNBg7zWGGcsbtCsv2pG4vgoNgoAiv3v8XfRLdapWsDKEHbF17zUbyJY6mF96wHMCKf2LyAtSL5KF",
  "key41": "Lfc3JgR9tjTWgJoYUKZppD7NvPaYFvn422ugMiyFDQUhsf6shbXrQJDTTHW9NZLet8cGV25d37fRnGLj6ABPAxu",
  "key42": "34zQhvxnSC5zRM5mNcVwzXVzQnhpnhThWCj79nzfwqF9hzkFjDY4BHnzRFcorRcwaE9fzwoYZ32KtEjf8AejLfXG"
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
