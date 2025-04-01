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
    "5LdUqdNcbacpaks6sot9fhovMhxmXXFaB8a5ZWT5yEaqT8EDqWHWWietyBgN3r68UkBc6xxLYVonD62uK6U7idEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2tPw9UtJVqE76BDZ4u2iiak636HkvA9XmK3HwdKHoHGouYaQZ2hEuLyc1QXJ7ppPrmTePiRSMoW1BiN5VX9JhY",
  "key1": "53qWpFJVomP62ufBzeTWdEQ3H7iXrKsF7KY2WJSfkZSR3cs7qHp4fMQqgb7iW53Bx2ietekFH2EU8DJJWjBVGG3g",
  "key2": "4nHGsmA8y2FA4JyAaMxk9YSrGxxdK5UnS3AswXtWuAK1eFNWkLpNYw7CLAjnZGAFQdVZzGKGFLek2jmwKjHWsNb8",
  "key3": "q1ERHCrqV8vYQ1JcKtL6RUCByH2Rx4xEpsuPox6JVW4ktvEEoSTGkUiU5ekwMg3bFWNG9xvRpiARvimrGnsamc5",
  "key4": "2kqSsUToo3eteRxw6GRGXzcLJkePvE2NX8NLpT3Nnwgt2T6QdiGLKsTiQfcGGMSpSfDtCKPGYSdjVVqqbBSqcktN",
  "key5": "2PEodoWgtJ3JUa3wewUdMcMmBPFCYf47pPXD8KGXUHirMLsexJhmaxsQX8gqMMDtqUBdvWZ4q3QZfX5DBvTcyDTK",
  "key6": "2FC24C96FgtzjsLwHD8e5zffBSwTPSXhodxiwBkUjEs6yM9r7JJb58P2YUCb8rj1gJQpsHkbtVPa36qGZLhrQCW6",
  "key7": "3WdTdii8q95btnduGESnzJ161AKF1tgXZ9RW58fQ7s4cgrKsSSj2245KNNPNLBJMoDA5ukw9f9RBsbRp5YqkxBRB",
  "key8": "PuRwVq7MLZZXorUYvGVVZh2LL6Kf1ViN6pfbXUiEz211B8QkMdXh3V3SaK3XvqJBN7KreAsmZ55DkHh4DKcPXpu",
  "key9": "5GHgNXmPioNJDxuY9qQwRZJUMYUuz8mzzh3LmCjScvESdp7s918jK4p9U6ucs9TYaH6xRbWvjiQspHwbzii5F9jx",
  "key10": "F3WsJUqfZ1d4bZwEZ4vuUJm5PfFtCugrgYevbpkzc2ZLYnjtS1ic6pDcrRVyxk8XD9H5wsfvCGdu2o6L9bhdSSH",
  "key11": "3hr1VVyZRabcphHRyp1VeGjrHoWEE3UJrTHLgjbBZBDwEUY9fzS5B4kFLgDE5NtzaUpawjEEYoyZ38LhDhbearm6",
  "key12": "5L4HMaiwAgF6JRkySW8hyQm2XmgHjtveocgLfygQAaLYgCv6tTbeSixX4ndnxd5oyUbxEedUUuoaneM53xxbbuYR",
  "key13": "5D43E7pbbSpPJCGKFCWKxvvdZxhAPheqk8AAoXpdXdSHsZUyLbUDWAsNhZ4NgRbJ8MWNZrg3sgUGFh2a4YyMBi5A",
  "key14": "327kLw7hRVenMoLVc66WXhxxDrjjpjunaVzaiEyGF7m27beiatAvMjXkUdNVWL25zrxMRWzPh3eGCoiLDqkENhtK",
  "key15": "2RnJvADhHU8VQ8GwiQhYupzrQ5x7SxNzFf8Xfddue6ENV9egLVAkL8ZAwJJf5HWC4Mgx2D2QBTwir2jcGSdPAsXe",
  "key16": "4io7HCWg9C4tx7YumJzmDpHdsDrGCm8JHbtgxjePShq5bR4nRRU3CoFriZKt5MfAo7CvucAsRytVJsrPFXpc6Gpf",
  "key17": "2edLjMRSMdnhmTNkqk4FjZQUZU9gPe4z5wXFRTVoYLJ9v153MkB8TdwegYVPB94RVtaFjS152Z2eEjeKJfN1FpZ7",
  "key18": "5HFnUS1VJATGT2kYJRrhEkKfxsBgWKxVMtyKAnS2RXmdVxvk9srmyqkJ36aLDc5orDkTkanQmmmL4FSwJZCxUD5W",
  "key19": "2bTyMAi9tRbbmFif8Tk39NBUWPBwKYTueE3fiE4JV3Ks4DVLJjptU4MLdVPebpATwoHmFYDpXN1fAq28UrvTrDo1",
  "key20": "5X5V9VfxePMr7zTqy193iKKhvzt46zHPUHVcZk5RLBpzH8miD9h49BySbNHQZt2fiL7bmRFvMz3EP1SqrGkd7Evk",
  "key21": "4JkuVhTxUtMS6j46AeSMUS8DRopH1MwQJWBHBKzrfdtiBY6YG1anhiNbtruvRinvcNfcw1yUt8uGZYKVnpfQ7CXp",
  "key22": "543gBDpUd97wkpRHCnUV2z5dCT5ictBfvWt1V9rwVUR81ysLEkWmXrcpEz9LromLAW4xZCZ29wPx3iq9mSQ1JrFu",
  "key23": "TTy3PstRJvGnUKdvrdNqECN6HYc5KksjcV6gJSvFBcEL5E7eVsioqtYY9GBiV4Vq6gkWgT9SypiDvhSta3W5d1A",
  "key24": "3Ja1sqZcYQUh1d3mkZsk52rTYR7HTeHohN3yx4aT9jYZLaPkhxW4BEUUPYrS7ZjzzHg1V1S4kkXXBnhkUdAvekfy",
  "key25": "5VMmrp5kqhL45nTZo5pUuiaXZkZXo7UiCWo5SK7FsCUn4kdKi74uxmKUD9KesxNd4B2aDKCF2whENTLrLqqjQqcs",
  "key26": "4gqMRXmqhpANYW5boyjbX9JJK9SW9kxiXbMG7QGte4aEMAnbBmqFqrUbj38wVJJD4wq3pN6mP2DLC3LkjXBfKqDn",
  "key27": "5zUcDqUDWhAQpTH2syhPZmtay8Dbie6znhB7efFz7jEEnP2yVarDaKFRSazTV8afgXmpg2CfAUE6FMajUj8wWo98",
  "key28": "vyq27ht5ypwaxxJCf1rJtpQeWrXorvUKYLsnbERugavyCQD5FcRcY5bKR1rzV6nvcpfjZ2kfKTugvBJkihb2m7Q",
  "key29": "4bfHybDwTvDyGawhyZWbwA36U8FehUMjCfnJW5wXYdGiH3HF8WmeaYNN2zVNRv2hvSez9R7uQA6fX1dLAv9PKj3p",
  "key30": "3PdgHXDnzotxrPFzvfAKRpzC73HAjzxNRp1uD9mtXXFQ9utdPJLLmjbxjSxN5Sq69VHeXKDLNUNZmGjZGTuSMk8x",
  "key31": "5MJ1uZXMp3Wo3n2M3EmUvxURDjZogLHL7RxHa4ufU167ECXwLR3pzHwprgwdpRDD1Dv9XptvfswUTa5oBKT795Xx",
  "key32": "2jz9y4q1MQxtask1S8TYeCoqrNwkaA9TajGL7rgg4ThxWjaTAz5B7FW9wpJDJNdYjqH25sxGaHpFi3anFUmvsuLs",
  "key33": "FdpDE3s54Qez2X6vQ2eM14qWJWWe1VEdgXz5YtEbbLH8b6VFnMXD7XzXWMgpvmbt8e1FTByGSKpfHacc43dKRyM",
  "key34": "3DDekfEbHckdEpAiVDvgPgG6UmP1FFLyJxWq2XLWhGyVj2pRJ9XcQB92kVXx3DSRkkQoU9KSCvzrmDWu7rrUgnub",
  "key35": "3Rh1jRRqQb9NKMd87rMS1K6fxk1HsXGPiTMdg9W8BHu8YBsV5GyRvbjpXhWcdGrYyocM2kVA7vjUbEB2e3fPXyGq",
  "key36": "4ym4GkLDSTVQxnYd74QvNNLaBbfaWqD2mWPNjAxor1YknSfuXVtMNEvFqq4KkFKRtefPAHEX5dv6XwXMmFMX7oVN",
  "key37": "26Uy6oPpZMk8c6TvoEXsu5caHs4RLzPme7snmwEvdvETpkwoU9mkaJcnxnRdSwmtbVqECz4hJPCMy21u4uFJQ33G",
  "key38": "3iWajqEyXPpjNzLVLqi8bAo7s2dYKAhQBmFTWCzranW117hzg8KtUMjZ5m9Dnc5ccerw5sMW4F4TWhZiZuM5N4dT",
  "key39": "Jo5twcjkbg4advDU2SpiZFfqVvQ8nmToakKCuacX72wJ69vSRueMsVSBWtq9WweXktzbeVukTr4T64CFLGs2DhF",
  "key40": "4gCQyGhYEXyGGX6VH4ZATXZAZhKg3WQcBD1CuQ378jNJZAgq94AtAUiYS9iVD3K8NiCCYyfQ4Jg8LtLNPVcQptAm",
  "key41": "2rWbvXAt9unk5Uq17QMS8WvxfKrP7RRm6XcaiY3bVXVA7oehMvieERakLaHUc3aNzgviCDezscwMDnCKgvMvUSvs",
  "key42": "2J2viWv4Dqxp4w4h63RiwtQkhh235yjgUeUv7JZHzdw6vCjwB21eF46C3yXTzggLErHqWMXAueemH3JzrHxrRabY",
  "key43": "4WvWu97wWtH1wARgUWxC9G7pkMwYhSj16v1ro9Mp8YdUdJtKrAHdk1fizhYYmSq7Twc7G9esE2wSXXJWJ79opJNF",
  "key44": "P8gfaCNKXbC8yEfHtNVAtg9LJn3effuecpQpXb4XBKuNBn3doJaw5Uwqqibdh6STVAxPYDARzQNwZWJrsFNpYxA",
  "key45": "oytzugE5fudDziNPfr8QghJQpgwYSWx2T4Zwq6TRpTo75cxngjXw1JS9EwxhnVu2c8uyMNWboXLu8U3CZqJHKaZ",
  "key46": "5sVTSxpEFG2xoQonUHaW7eFtKZHpdKN5kA3uRBkbe1YFFJiYfLAocZdzjEEPafgZg9TXD7KpZhnAd5GGmc1cqXfM",
  "key47": "47YboNtPTUXQvVgb2Rka4yT3S11Nu7XxksRzDWbv48cAK1La8mhnRr5LpSk8yXYCkScX7eAchaWf9BzBKrFAERez",
  "key48": "5QjzpuM38My7iTKosvXSm2WYNDKe5Xqvy7gAuN1ug3pNetKnzE8zT8DxrVHsEL45JtF7ePKGQAKKJH3LSFNNSVmu",
  "key49": "4N8JN9r1aAJcpPko3VZQHuvK46G1scjM1Nz7tRKLUohTmHQnVdEGzRaDDCuNbmK1sfKbuAsFbm4MUoswQkQoSfvf"
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
