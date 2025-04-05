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
    "5ZRBYBVSPC8yToM6K7nHWAyd1XD9WXbMz91AnVERJzJG5neGsXsAPvSBuL5HpHMsiE9PTtXsckKxJi8T1tDSKoJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZ6SqpF2oCJ2vnNfFnHcEMa71fZVYpTTqt8ta8va5WXJmwNNZWW8DFZa4uUR5acjXyS2xjFiMxFTeMJXbF4jkMF",
  "key1": "2sPu8XK8dwLg7aPyKTqpMzbLgYD8aChpTcvoGoBxnyUL14m2nUU6U657LuafS16UhaL1rin9WEAhfjcYe2eXjGmi",
  "key2": "5NN7b55C15KMGHyM9vN3YHqBmvw8BxAJgdFxVFYdEx619DNoWfoTPv3Lyc77MoyMGTpKjxxx6gj1Qw4jvGZmSQd8",
  "key3": "4p4Yqp4UsFGQgSy7SWK5hpTKUnt4LJ1LXWpkSPtHWW49kyo2u3nW7MwTRHzPQacZbgPq1wE4Kiu99DJKWSijx2Sf",
  "key4": "4ri6ExPpUZF9WPU4We61PrJPsamYganS7djhqYvkegUw29XPVsBEJgVTEWx39x7cZSCfNCSbnJxTv8CobFaFVASu",
  "key5": "48QFLjWRHpKce2AvhbkjC7t3zEqpqjnRNnjMHMMkTntcBaGoMJLXFaU6T2PD2D3GGyFTTEjv787R4sAELzYWTteh",
  "key6": "2eAaHMBoWw9BsBG1LksDV5JULwFAk1GnkMLEqD8t2kjH6NVkhqNsEo2N43P7kRBqDk8XPqzaJfTAWeYB4AhrgNqj",
  "key7": "2iPXbreJYYaycxXdDJdX1i7892pwviXVJmxZtbAGo7G5ydtKtNp2LgThF8KiZgL1pKVS2qvsdKUMMQm2tBP2Rd26",
  "key8": "1EVhNKuaAXyCiSFezpfvUmqNEFBAVkASQovrXFRTjP7iPTT3YpynbQnF6khTMEFhocAp3PBHPEcavNpaobtRSa2",
  "key9": "5jwaYVZeTGPh4EibHq5wSatJkwLpj8ytEs5acNrHF5pBPGXVN2EQXWrjFjZCWWrdiKD8h9T4N8DruyW9dxjKdzGs",
  "key10": "4ZDajYsLxSV8smfo1LPmdpiN2NGkvR6zaQF7emnvnDaQZXioNjnChmBM7uwU8DNh2fBHa7yGrzeDbE68RjHpisfK",
  "key11": "2LQHgWxCfedKUckkugcrrXh8QH1xkve7fCpaKwdNGySk9pBCyXGVrSbS4as45bBmdEfvnuE8c4MqsSH1wMRCoYeR",
  "key12": "5C9NV3SsZbbxxWZCAF8VKmCppZL8Db1u76cLXVJpswM7Kyn1xRJFv85fh9HSp9YCcfoHYiepw1KcXsDpijPt34sk",
  "key13": "4CSY5XoAPJ1nmmuUR4E73upkMYznC1ZqTVWSBDJtcrUdjN773fvHTUaqJaFN2SBv1mP6ep69MwSuoGYUe4UHYoQy",
  "key14": "54TQ8ySd3Rb8Htuv539Z4nakVbJ9XsMq5ag5c8io89bK3wVGRyyXce4TtcchbTsxz44DW53Ps6G3BDv7WpVA79zg",
  "key15": "272q94UtN3h6EFkzNvpqYFq8TVT14ifM9bH5nrpEb85fwpK72C1vpwp7UT5yXcNBo7gsZU4VAHX3svE5NTKZWZsU",
  "key16": "3PrfbkpBu2YZ1Fz3k1JR9Xufqkpr39SEWwZ6ipkB8ixUArCDNNU3pxV4P6zKNy9KLtSxgadNaPsSL2o41ku5MVP7",
  "key17": "2wjAr1MWkinkheRJdw1xobKUdMSw5PBXT8T5xpHpDSe166GvThnTgTo1X8CU5Lh7dJF14xzPFYY438R8sEVxvw5R",
  "key18": "4A5N9DhyBmiEJcmJKiJUGDUSCWa2bDcSxYvoS1qEkZ2HavDCacigQsggVS6EZWvkZZ32u6oMu7FYwYApaStUSYA8",
  "key19": "3H4hZN8CSLeFM2ruhEYUrXuiHj229gmzRAcp9JHvinjArktc1SthDkf1StPcdXVCDTkpMjm3ktsgosWUMWRiTF9N",
  "key20": "2ypwM8TypCnc9uYFSvTSUViDdQqeHKmtkLWuNfYniaE67q6V1iGBKbhzRNyNVoRN1mNaRtUWn4dBA4qVejfTze5J",
  "key21": "5f9jvCx37R2PngsBjyeAgFVpfq4LWZK8m6aRMs8Bau2muqfHwZ6bhnjVYMZ57TR22s2SnM9tsRN68rskwwaCVpkk",
  "key22": "uTtPt7zzkBUx6fq75ELiWGMijSHkZvqBDemREGS7uWitgEYCT37zXjjWysKL9JjZkndFKxNsdTCfiWt6vcGyhkk",
  "key23": "3MppEBwudvAEYJfgj6xq7WQhDV1tgtegDmjTX6qfobPQH45CtS5EXv3fpJcDzTCwLX2zgw92MSMbiWT3kJrUbkiC",
  "key24": "3LAYBR2H2usTHGPkJ2CCJ7tDMbrmzsAsymvVtJ6x5XFFquDzRjJTYtr4gZKsmyVMMNXg428UbBiYKxCvZUEz67gU",
  "key25": "2T1A38Mhzz88XQF5CMysp4hhwnK9EZqLzxQsmpsBEUqxjfKNqbMek9r7y4dMLrbdMYeKhpagTNt5jeTgu18JAdBP",
  "key26": "5oXNrKVcuDq9yo4gsvanvYkSdJCyzKVV7Y818NcpGxou97nrbinRWZLFpJHy7Wo7wvrPMwnmrBsVxypBanbuTY3g",
  "key27": "7ppbrVuyeEJqF2nY83iSXDNxWaNUr9b3KCuHSFNjcCFBA8SfaXgpueN2Dt7b6PNKWBbfDnbwqB3btzVRrQbBCQH",
  "key28": "soVfDSfNfmVXznT4C41mAjKYKtUSMyv2vrJ2L6dz2HXCwEq6TQdhsiNRJw6BYRHYRraaKd2qwa6yUXYsT9XWBTk",
  "key29": "cxWN2iTKGEerHWdabEKQrrzqf499tDt36Wdw93fguao8mHqD3H8CcsSiiqnHDjpVeJZC1err1MoKk4HwJaXP4Gy"
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
