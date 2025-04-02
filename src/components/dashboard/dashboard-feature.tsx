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
    "66bTq3aRHRq3jG1r2bU4pew2UdmZ5oPZBfKuVRiAoa46xcDT7KxXc7LS9NuQm8n34Zz3bavZvBNnvsP6BWwvsrSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLXHQQ7jsXUvuevv6DxzWBpUwyeMhnnahPdg2hkXZ93wCbMDEfWoRbDDbpXAx49ivYd4RGFyX4uWvAhV8Tvj68u",
  "key1": "2RFUuheTdfFAazWJiwmjxjbBuQC2u6WTmAH2sXtX9pERX7ajtBErrMtuDoFkics4Hbjnnr3y6LobpjaRF2Rsfg77",
  "key2": "4RPT93wGUR789hpgnPePb895ze5PukiqdNihgE9K2dbqY52C5YKZFEyhNZLLrWMnzci1ESbWhE7KiGr9RTCKH9i4",
  "key3": "224WW2tj4rWuUw5ZPbcADKveh6QwZUUq6wGNUEZSi4FVViJpxbEJwSVkM5c2bA7N97RsUkHLd1d1hpXariYCUjCw",
  "key4": "4Jpm7AZnNKwBvwPJmkmSmf93moMWX8LHVZhsMWkt2pzgxi2D97weeoScnxgQUAboax3h4MvV8wz89ag1PrCASqR8",
  "key5": "5kUZV1XQn1PNoVaciWwNhtriLsVgUK8izcWxfSxUBT1h5jZ619Aw3Q4M24nj6JzwRHZyEZoht1nsuwDa439zVu8N",
  "key6": "LGEuJJCKmYqg1YA3j8QUyfdVb1zaN7X9Gn1d4GoaYEaiHYMh4DVGVQ9yV2NcbDNgVVWoE94KQgg18DZDTwqYq6A",
  "key7": "kF1FJVRnAQREJ1jSZFz942rtvYDYqxm9JK1kJawy9rMeHM6gfBU1U72KSXCTGpbQAZYeS6yMHCNvMGRhXpZymiH",
  "key8": "3zZeWZAXMpfxumBaez8UUP8QVKnfgu3kr3je9gAi5dXiWQtVXZY2kFGWRPNX94QRx85cNXxUbxB3jQ7BVMahKRfW",
  "key9": "2Gs4m7U9vuv3hfo6bVgSDEZZv8NbHtZUNkyMhXW4XSjH8Tb77UvN6wcNsfy8WaV1aT6ziCBuq1wCutv819ckN2Q3",
  "key10": "3YtoN2FNHZtMR4pF6mWKtL23s5Ky21qyAbc8Ngo5fJKJYC4NSnPiNwP6tk9875aJPc1xBuSpfN9saKZs7S1A4Ycp",
  "key11": "3Eyaw7r2FD9UhvTPj4trSrMHKBKd8ExnV7NyrAaQAtPyysx4unyF7pybXJwCuiRnfdBkji2ph27KrnEWkTwkwfmZ",
  "key12": "3wiUKARTvdVjAWhe8UpHMTG6WjiyH4kNLMETycggrYH2ehH3iKwKoWCc1Nd5ScwxyxJLJ6LsrBQuJ2EvzntGqgF4",
  "key13": "crN4sXWotb5athPPZbSqDea9x1jWX9SG36ZhxHSh1Bv3gyTeMXvSYhGJahmwLrACrwBikmTAXWgjUh2BMfMsQ7z",
  "key14": "39xw4qZ2NdTrkiWXLqZF2Ta8Sq5aKX7ALfCkecoZrPk4QoyiqxFJBA5bQP73v2WtQUXUqcAhgpjqcQGwJJMjgALy",
  "key15": "4T5iA51PFvJzwedgH1YMTXM59MYY5f6jRZBn6QJ9mg9aqiPGPVcMLmz1kFqvfds6LfLG24V64TKtB9NSEZouyhkG",
  "key16": "3BLUBruQ7ARFS7cu36pE9aiox8J8x9NkjKSbdKmwE3eiKYGu33MzQN1PJ9F3m5vodaiNmGYqA9BLtsLdqWDpwk8g",
  "key17": "5j9k3FXjmmprguDQ38A4y7itKXDiJrdYV5gmj2x1gEAp55duKYMKs1TvjY3WcV3qLXLsvYDwcQWVpT22k3cBaRvp",
  "key18": "2MzaUjj5msTuuMfSXp4C3RshwT9SKcczsWkgVzKK8jAeYfMNaXBWHHTs5H6tZGmSS3hPdcmZeVUTCdRFJNcqmEua",
  "key19": "3hDrCjqH4BQqw1zHnJQ4tPHdZSjJQavtV6L7fMHNojbdq27FoaRm3KsPxVZAQz2xife1YAyJCN2jVmcJsFJkgwc2",
  "key20": "3HNT6UV4TfeJstxWbKpsJBCuFznkZC9uP664gGj7JHt5kco2N74s2BfAAdKnpqLAcjZC8WQNjnQZU4Zx4RHnjNE8",
  "key21": "62tzJdzkC4SiH92TxMSRYHyfSymUGViKgKCx5nK46Dw2qXVs1ArFtCht33L6A8EMHYwevDfhHAC7FebmAa3qvwks",
  "key22": "2rdnPhcTDW9ANvVZeZ12gMyku3NgegSeD3oGEs7zAeCaAYS4bVhgBEjvyntHAjiq58e4huEGaaWFxjKA21hVAwDd",
  "key23": "2jEowzuvTrsTBuTzwiTvE55o6Hh87kA242yuqvu4gv7G6JrPz8g5txWqsZg4EjYEo8AQBTCBRNhQ7q25hUVa4rtp",
  "key24": "2we9B2cEZcQ1QZZZ3y6B9gjUYSwXKiiNwu4DwuMdqoxr3xMp9Tbi8KbgXYJiy6Dfv1FcpZLMdcBonL98EB8tgrDz",
  "key25": "2WD9jdK9vCzTNoJ3Lt8LSXzrZ2dv33SgQh9wrKGLen7rrmH74Sc1rS9SxeKeR4bSMVqXKiobba2mFdUdANrU8Za5",
  "key26": "4NPha75F93793JVVPcmdUob3o36eZuR3ATLRrUdZyZ5YiKiZMfkGnxeSjfDhpySKppJRGMwbLDKRzsCU96iydNQp",
  "key27": "4GBR9mBL3vRkTfZbyftFtPDmk5Wvq26rmrNCkmVtJUJ77hFREjjDkYrCFW6r7Nd44wmiDsuCjcTPphFEWHAYTsuA",
  "key28": "3BstxKHvnP1QK8HyG1nm2CLn2rZYsy5i2kavH8VLhntTtH7JZY6ZzRxyavyTH3raXyB2vBfAY5bCRmpVdedJkNxa",
  "key29": "46Kzh774w2CcwzPcPYZCUDTJ66KXeW48Dn4ZR4bdxT24dXVrgYRJ8LoUnJJE4jmDTP68iYsimftFdsiLtfpU8aqo",
  "key30": "HM2N12WeVBgUURTHRoPmzCyco9E92Jf94upHrfWU723g8u3zBjUspjR8Xh12CQ73gN3sMdDSNAZGfnHZuJnspHz",
  "key31": "3mFx3o7uXbgCXYM8JWVHhtEng2oPmB7UBP3yoxyxVFansPb1RZB6qs5a1WPsPyCfu7WpUUXJv5vzDxUbNC8viSvS",
  "key32": "5BxirmJn7BMUtDDEDmDgCc4dj1Us4HaiQBkvCDxk34qTeKdVt3C3dqLfCP2eWF2uDwhZWADF3fnp4GpVtGJV2EzW",
  "key33": "3fdRaHA7nCbb2zwEtEq4UuzFihtGPmstR5icrrjiVUFBPdNAbGCyD5o339J5UgAQcERt7mhnTmBogLWrU9JnASfK",
  "key34": "2xpi1Z3tfw2k9vspnq8tpS6sjFHKNqURMqGtP7butHAcyA8cffXnsnBWWJhzo1pDZTnCpEtshKj2U79EjEFcEJ4o",
  "key35": "TboDZHSvA2Hh3iwp9sQmTim1ro4NhzeHC8UV3KTb32x7KyqcbmaBLvPFHgv12nC3brmeMyLAa7z9DPeEvv4wN3F",
  "key36": "GZdtRV9ZHWPzyCYUjPqUcSRLqo4rSoJNB64qFoe843LzUnjNNmG9mX5vqBLJ2KGxQ22NJB1p9NJfF3zUqJMC731",
  "key37": "2BiEHBDqM4zGUijTR2MwRhGLqToE9QjFeiBcYAeZgM5K7kaEnXEHhuz7iR29uprs4r3SSq93w9bJPmtoC9TMd2xH",
  "key38": "4Y7EEgNhE2rxx3DkjeBjyQVsihkBGnfCTJQv6fTVxGkfVdngtuMRRzkWNdKTqBus6C4MWPg9KzXWUaT1KUic6Cr8",
  "key39": "248VVRgJ191NfP9bxQ6veuwBspT2Xc64r9mTX9FWDdMYrJbtFX58CEiHYqygLmwrQgBQjFPodfygB6DTiX5MH37Z",
  "key40": "4S2wPDFoGD7L7HBbeUxyZisLfa6eSTwroovBYM549WHPGHnr38znqDnf5wU4jqHAkpFiFRC7NAvUP23AnBg26Qix",
  "key41": "QF3s2rRPQXx3gQiAc9ZDWo4dbdtvVJUfajkenEk1raKx4wnMVBFFRFqp7H9pu1YoPYeg8Bv6MS4eWdg5afW5wGn",
  "key42": "3xKeZ41ZSTez3kboyP9KqroVhL7e4sqfJ5tzkSyRzg5RH1Fpu3oahNptqYwbG6an9uhBRxzaEwpo6d2pNaTLkLUn",
  "key43": "Hyc7mzHk8X1PAPaBDUph14KDh2fF7n9jCAQiV37zwYVfhiUunqfsXBaBUCs2wdCoC8wrC85LxuZydWwkNt38PB5",
  "key44": "2Nsad8a7UGJBkxCpiyukBXQw12VREAEhymTjNnD1RvLmLQzepaRw9YSsBBVCTKkDo9fTZW5coYSRyYzgqyTxreVf",
  "key45": "5FPQX7mFR5G2yMfbZiSCNfSwDXL9vzVeDFQfShXugAWDXhKDgFBM7oR7N3zUGfJPmPrzGwgaTPTeyvBbzv1f9khc",
  "key46": "4ZJr7P5JvYJFT19RE1cMGoQ2iWBfQkoxuwVE4MoapKtk8ZcSr6zALZWqb1xVA5BPF91vnXMUW4ibYFiP9wfq53vT",
  "key47": "47waptFFRMXckuLZpmn8T6zYpsCBnBhEB3rgE8KFanNoZk2YbbmbAuEPBKhVEte42RewyHdSi2w9WX8i5DAGNqQr",
  "key48": "2u9qNMjVe5G3iA8E5c13ztmnKDeGKytpnXTKb9QLkZe7DQLwksnRkKozokpCgkMJBu93X3Aog7EbnCooGwXk9YK4",
  "key49": "4iFn27aGkMmcu63qUhPriA5qmMdx7x6187i8qsJsVdXhUgCr5eJpofFvqKXHztwUADNydowQHkP49fy2HZBSU71i"
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
