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
    "49w3GeMUkVDswxZXEyFUJSQiAAnpJrVbtdyaG8EFwbCDbJcaRhMars9Y5BoE2Lvsh1cRKJyghFTn2dNQiKDMNgtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDn5LaA9944Gz6QcyEqxRYKT4mdMp647CPYCph7ZhvFZNv2fxydAfDcRhFFUAUJQcwGf6AyJTr6D8chr4FAk173",
  "key1": "4Ah6e7A1voBysZxAaijXjMMXjHHKvc9pJyokSM83YkWnnbohkTHuF1tJiCURVcMSQ4uFsGM86rxQHidPE9akoM8j",
  "key2": "5QiXGkKie1TFNeeVgxmNmJTGDgWDbvMuqJiA3k8kuwD1gVcEAn597CpVjDsKJW1QX8xgL4nKpoAfR7ru48jeEU3h",
  "key3": "fY99sw36w1J2hYaUAAzdVBonCvFMSz7Mwq1uwjahWwk425weeUKD9qkZgMF7fAcWUQ97GEsfAqSdmJ9w9ae8MEV",
  "key4": "3ibD4LzKQ5AaE6QbTKAaK35gCMTtEszL9MGzmnQHaUirSaFvN6LnNzqJ5VHtt92ioYkLBbvxuPiLSeNZHTwgoYG9",
  "key5": "2deotYRbm7yUiJeQaHamJBugm1byZtjTZoM1c5kZFmE9xqHx9XrSfhmZcxuzFeoUVMut8eYE7AeCu5rnxArwFP2x",
  "key6": "4Qyea52r24uXodEHtkcbp39sGTh1fqkZCCfA94C1NkDv7pE1ENsgcgDdpkZtt1PEbVpPQiAkP8CHM3RrLoW111d6",
  "key7": "3UgdR9mwNHabd33q2tJY2HFcPRHkRZ9YGeoMtNa2SBoZwySnj1D8EmkvgMetvJfMFXFuTdJVWS4agGwmDd6fKL9j",
  "key8": "TDqgpbGPR1bDJqEM1TCvWTTfpK3QUe4mqKvKXzfN2914u9Yk6MEFjX7v4UviNUJifiPrPCPTw7mSQiX2LtVGJPX",
  "key9": "4CQtkcjJw5bsq6Evh3WCmdc7vLc4r38a1w4oFTnzBqUiGxcyYRF8xhbyCKVQ2ckqrro4cxMxXZYQCm517VhtBuzW",
  "key10": "2aCSJ8PBeDiBxXDXrBaLJSuV8y9Y6NPC5E7bVcvTFaSkoWXxFaqRDtevrSix6Qv3P5MmNYQXAZNrSA9FtBD1WMnF",
  "key11": "4EgH8a34SXjrhwsBAtBKzSWSKdgxwPdGDkAH5dtsRRiZvrWogxpY9CXeLrDbGZQ9dtRHqDsb2PXon2NqYx9FhdW5",
  "key12": "4f2vxEaccCx7YycMWdT6sc2c73SUSLqZqQetXZYd9XKRMoC2Zjfn4jvL2oZtLWufs7rx2e6MdG94sehq85Ci1kbR",
  "key13": "pZASn6oXGftFidnXq5gyzQ1nWpNMYkxCpkaxMTWqrSrzThHcsmALRTUJp4jtB6whTdc8vZN9RJvY53UadHAPa8b",
  "key14": "38M3qxgtqFj9dt3aZCCqdau1MVU3iy38TPRt9Avx6foGTa5GkDQ62DPZR2aPiT8QGny6WnjKP6VuXxb1RRzEUQbT",
  "key15": "42YoYhXhLBUBaVfMaFgCLLmzjqtYffZ9na2DPJVMxScKLLArWL5yaHBHZ1WkCyeLa84kYPL5D4Wtz6xze5LrfuvH",
  "key16": "mocsuUNX9U81DyGorwc3hxzNVj3womCaniiQ6oycmVY7LiHkFRoozBfJ54JAtLhWVQcoayZG93QGiFMbQ4puZpE",
  "key17": "5Bv9tmiZ5MR3hjMRmHYbgPJnoi3GjYbuEv5zrJQ57MssWNHvsqtrDrAALde5XK3ePzBUgeKstHoiv25Z5Xb5AntW",
  "key18": "3ursJ88REGibi6fB8JoezMYs8vYGG4xiqp3RhnQqTwAUivCGQd4fiELvAE726eYWbk1ixRjP43kzW4oPdGiTHkUs",
  "key19": "nNtLCcfjqHW642gMF9svNui2U9C3jJ9FfGezhZgkuM15HahUq1Ge3koMJsjmMp4xrSJofsX7a4dryPTnxzsvhum",
  "key20": "3aAaK6ynfDUUuZTpjo5wfyCev4BUQgTHYH1QacL22rwJP5kiJfHDXCvcKEw29RgbkuGEcEPBZE9gq1NHX1yYBGMf",
  "key21": "XCSZsnLUFvuRxFmay1TWX2ZUK156irXTxwc1dzfc687CUcrZczjiAyJCeiPZfb3MYuGLeoh7YdUP95pF6Naw3M9",
  "key22": "3qwRDVKXnHhMUNHwJYWpNMUD1mKz1cSpQMphugQFQvsCjdtjosKUq15vZjfsiZR7qibvSwnKAej3Tu3HResBteJY",
  "key23": "33uknVNGaVn7Ay4rkTTAC2ZYUR4BZypPLSVRYh3qFqPQPooN2ZCSQwhET8xG1m8mPL1KLrdn7UAwtjHB5B4PwRhJ",
  "key24": "4j1x6suhvggfPZ4Bb6nDu8ya8KEpAGPaUQ7HLiVwanEwMsESNV81XTV9CXos2UHbcq6QTTdbgD3CyzJ6F2Mhtm4C",
  "key25": "5zAyt32A7KdsEqrBYmGzQAruYX9gsC9p8Hjx9BXT43P9F37ge6spFgh2cos2ctiTsbpqQ8YZyyKWSfUt316Ks51Y",
  "key26": "5yMw3ZEXQm49K5BkS6bFtuQ6ad7rwZqkKU27pQ4PmyGAFKcN1gkdWzjVWHcjKGhe1rwEAmKDq8hGqg8QfcTZ3ie9",
  "key27": "4o67aBe2pbzFHcHvEmehb1aekPFuoLox4Gtt51jz3dDaDHcjLF69UdpvPLyFf4ZmjnFmtQwRxoKuvhc3DGnKppDk",
  "key28": "sUyy5z8LY97gEYNKRRtbXbXs3qFadCqTc7B9Jb47zoGuXp67RYmPtuvrXmDWwDs2RzE9LPE9eVRKJZ28W8WcgnK",
  "key29": "653jqjqpJBrCpnE9BKwayAn3tbEDiWd73qntYZN3n7o3KcxW6UdXm4nasX8C7YWifNzGWwXKTgf6b7jSScZS9jkH",
  "key30": "5Hr6i97gbBvphuKvZEmWsLwoFRHFT4qEyhbMvaphqtHL3UdX23VX12AB52ZeB8YFpWrmPUfR7PNcgdP193Foj4FA",
  "key31": "42ir3jxJ62RpAthjE5BrxinnZUC2FpEfBJfT8R7vRXjAnioD8izoQYhiozwhoo2fRTRz9gmYBfCyX54BRRGWByqi",
  "key32": "4QvbvrpSXoUYFnWCw7qC3Vi6M4apHpWPLL7EtUgd6BoBNag5mpdtF1SZ4FkUJR3VVDWghCdt18cA4e4omd13bo1n",
  "key33": "5HtPEhDGjfxmUbc7xEuNtwMLsF3nmaG7VGpwh8Nv8N1XLBipeWL7UXkMBUTVZXkkwu859YfZW6VEkszDuCDt5J1w",
  "key34": "4ReY49rJHUGWUiqZjfDBV5sZHcvWpovi3YLvNbcfSd1Ux1NbbbPDYk1BwDLNRDw1hMgm1eMBTzvgLNT9bFKzSLee",
  "key35": "3ULEBTHQ9jjDY3JvPWx5Fa4DvE1KVjH9NfkkxnubqiQxKtpcmQ6xHjcF77dv9zsNxdk8Czt1AfdbcPyZcmF3jxPc",
  "key36": "RnHJ9ZSgdBSKK3vMV3LLkB9Ah6nUvLL1dozvjRBCmtKh9Ctgqagp3Hetu4LyJ72mk9YWFFNt8xf1Nch3F6XAR6q",
  "key37": "5awgQA5SEfzVjtac2LxCr3CfkyDKFxpPXpRuitxF21EzndQ8EBPX2cwqCWA1itqaG9Nw5McamBnZEvpv9qBSs4kC",
  "key38": "4KKdoByqo93udNeVoPFPk5xDbbBQNeSdvrsnSztgnLKA3bzvhVemJnNYAToexJHXHgeeX9YmUfPDpfG88zP8p1YU",
  "key39": "Q8GHyidJvvCWzWDHH7gnStMUVoRhgwBoGBspJZWSc6dx6dNwG9Xjd4PszCzKUz6nX7Fe5yeyKQbGtX6zUAUhzic",
  "key40": "5AX9ZPNdqFwiJibCZ6BsU85Gn32SUPwt4XmMjtJ2SvevKyHCzvvG1Pvky3Y7rvQwnWGGYsX9Tsg1jnkCfeD8FpwV",
  "key41": "2RTbDNipbDBxmGeaHfZWDv61JijZn7BwaPv7GfSsLYZ5W1TTm9m98kKphc595vLMgqGgC6AgCeB34jJs6D9mEWyo",
  "key42": "28qHbwmRyfHiJhBdNRKDUMyisaho4XF9Htzf2QJ1etmrFwNF93YaMqxBB9z5zTEVH4o1PJeWhLqFMRDVrGfd1iD9",
  "key43": "4zB5eu519h5ehWiKCoRUvdYqcirsgsvrymPhKJUUhPtJrqaGLr7GPAmPLq1JNSV5UUYpY5oNcRY5Du9uspqFF3Z4",
  "key44": "2hJniNnYKZp43ZjASWNj6c69JfJ7po9J4TfXpp3F2njeyXKvpsgs5FYtvuxegt42mtdSX3ECHNp2HpDN4PqcZQQD",
  "key45": "4jxXNqK4ew9LuY1pH7C8FsjP7V5SM9b8M6AtEg7d3GLuR4fFGqhWkP32TKbba3TTNVe3Ss8rAjv28bUKcV8KPhPm",
  "key46": "4q9AzzXEczAmMEiy8u3yijLWnUkPencNwRyMBCdjqeZBmfEWMK5HtmEa981RQPgoce5m97AD6wtnh2bx44YVFmXR",
  "key47": "25u2EJWX2YeT5Z5TN7YAd6dExGh5tsac4m9ghBtwK3Ge89wZcoZgDGCnoCAViSvck6J9MGz6fwmYZHpGFmbLT3ZC"
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
