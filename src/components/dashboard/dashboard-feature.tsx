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
    "2i12b6TN8vqYdDJgLqptbNHwK48y1Ls7uruuQAVyXxBfWXUF53PkxmazLEVzfpQYANejPmAtcBUYtEnbzv2WJ99A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HWPYrmXEkdc78JCuiXpmhyEQHqKac6NStYq58ypUezGPjVpnMsMnEmPaUmzycvkLTtubHJPioKXfn2zep3MZ11",
  "key1": "3r61hLRQJAdtLbvQWFVjDu1MyZemFMrUzbi9mh8WwjZqXBnBJ17d95kYFkq5BCQki84hrr1sTc1XKpnG7u7Kggie",
  "key2": "YuzyNQ5BrrGi8LUmedEXYE7dm3YK1zEGRRe8YVogSaS9TeKTeS6w5wcp6zw1xTgeC7GDTcrqf5CwFtE6wxpvW4Z",
  "key3": "5rKHkt4Mi6Qrizf4RXPnuwpHKz5gn3MjAyxFRqujpT1N6KAH7DQafqVyFGnXMQwoiy9E2KwKVhn9FYw4UrxPopGf",
  "key4": "4b5aVagvkdkwEWhuQFUPrg9PjSaeiPkA4FWLszwqawJbruBerSxo4N9o4AjauPP8BjT55YeSK77yZ1DMroyepEgQ",
  "key5": "bB29eE5HrDVvrNNfj6roxGzGToC65uYKjvvUGc3SGmaBGfRuiWJbmyYDJWEs23RUjtSte5JUoiuJzhM5XhWUCJA",
  "key6": "5tKjXArvmURui6mEYF9Gd6XcDozcNj8behWrXT9qeeRsJ5VRfQU1tPZG7PtFjYs322RQ9nRc1DUA2pPU9Czn4WFN",
  "key7": "CjxUGVw5zWuLfjNPE7eNgxQkS5tQdopoemSMiLUa97Jb2otj93RmcxnPdNkpHQi3LDHdHiy53yenhCaKBYxqbZv",
  "key8": "5oJkMHPe8ZeLKmshrhfBi11C7kMKjsphW2TmaQbzuchRS1nZifpDrtqh7QeCt4MdAFAoueNbSo1fjNNcJRxh7D7j",
  "key9": "g7LVT1w9aYa8kQjtMQtnJ61z8aFMDManJnYEpfuWHdD2TgYyivrP5Hav5BJRj3fgAgSkwQmoZRTqk2yPNiwtcMK",
  "key10": "5ovkVud8F2YvTh7tMxbZLjdhmySxobEAHUovz18Y2aPkKd78y9qtQNDHeyh2mLnfWb2S72zaoZYNzRopsPSLFiWv",
  "key11": "2XaXDj8g6uHAvzLtB35TyhRSAnuBfR12AEKpb3Jk8kkW374JrMbM3orzVk8tC8d9eA53wEMLKAeiocx2oJFUsXHe",
  "key12": "374HDN6HN2fGAFb1xFNsTtSC3G8S81KqrvG5iqC1yPz8vG9XHqxDLjZSZbjDT7Daq4TaS7xzKpTcGUbjvd5pcB1g",
  "key13": "129byu8tJGvjAtSw69MpRSBqHwcroUADAQK2WkbDpb1T4pjh9YnXVfrPHXS93kkTgDWwbRQ66ueRLvZSRpg1yXUt",
  "key14": "3X1i2AnejhaiS7bK5rECyiqriwk48GmXfgRxWRevzHUnkZAc3a9fgYmje6AKgnmcRonTT57PA1RS4Kz6hYL83WGv",
  "key15": "2Rxh9BsUVfHX9nxyrLwkv3rDzaWz13AZPVPTyVm7faNfjdwxFaHE77WMa1v4eYmh23GFrqYboxJcMpGVXcMZkMvs",
  "key16": "39rVpSiSnhBegi4hoqhyBeNhq1zf92xrhv3HFJeFTDi8a7c4XfTqk46yWnRU7pzzVXKERRaiqy47uZA43EHUWBkZ",
  "key17": "3NyA4iskFnp66E5egrCzdZAWSiot6Rxae9akKW2JcvzdGgJ6uhvtzp3xBV4b5WBuGMnMtxFKGWt9dvB9zBYniBgN",
  "key18": "4XMzStNAvNc94GVdZdvEpaKAJCU5LmR246geqrGRbsHAf2QTDdm13KVHN6jfw6FFK43Zsqxxak7fauZfDmUKqcu",
  "key19": "7YEmhDRmmJ3JA3ULvSVMXJPm5rq3tAyxhe96o37dgwBsSsK22o5L3pVNCe3ynb6qPvWqmnR98R2KAET1tLZJK5Y",
  "key20": "2Q1BKtZmViKyYBrsTLpiWgUMcDodHiCeWwkbLULABpAo6Co7EBu4X5ivBTW4JM54B82Xorw5k3JbFSBKR6TnnaVM",
  "key21": "4o6ApzJN93McSH8TwHwkonMnBDAAf5QAT6CtV293XbnV9wKq3Uxykab8PinNL2ZTWxD8VfckVJM8q4o2Fv9iea7e",
  "key22": "3vFRViMs4yVfshEzR9HjF54kGR1zXFtWev6ska4HBwZNZKoSdELc6AfaodW3DrFpvD5V4dUuJqKHhyBEx8Y66oKw",
  "key23": "3QMv6NtZrCgD55iupUP7e6XARThRfVAehrbDXjeJ9YDBTQLeiGSJ9GdqBGSZfaTJQw8X6jLHEMStvJsFHNAd2vfn",
  "key24": "27hycD6t2UkvWfm3xgCJq7Vng5CnZAfpBe1Dtv6CoxTbFaTWT2d9qGqfFJpA1U2J7Wc4fedJHMq3eHqLrWWhYUyd",
  "key25": "GGtdkBcTcUgvWYgusxgDBYgEg4uKHTBPWcCdViQBCjdDnwtBdNmv9h27xDzFtvbjKw9RkkbXLodokj32TwB3dWr",
  "key26": "2mrsPnawNrSXjovdMhCbPEvmPQki71fGiL4uX7KZgTXUbuPSdYfdxEXDqRCq99WNihjjFKipApfu8DLhrnMCKRhP",
  "key27": "2y8AEZDSbRtKm6Q2vhpy8SzoB7sSY9yB8ao5e6SVAhcfqXuoF1bDoPrbz8sF7spsCHtj17AtTo793MGxBZLZRQTj",
  "key28": "3rpthDMsF9Qyt6efcvF5oa6aAXAMEtY2NpXmy5672KU7sVkzfobtqchqnaX7PkzmHdGRBwSf3SH4x5yCPQ5SfmcL",
  "key29": "5sS5YuFBFJRABrJwBHtP1zfqfssnsbyXTVmmcKNNcedCzpqsYvCPdTcPdhtSUTKrKFEg3iuQBPs8U2Ac3oz8H9QX",
  "key30": "4o9nYiouTveAtRjsqtaFMhiUB5fypHAowSxzaoHAUj5ymCYNKouCQzGk2bWM1hLN2V7u2X2vuFtGkFbjoeaYJKrn",
  "key31": "4o9gBLxSx5EW6u9P3ccNzRMctk3FGMC6Gfsdq3E8Kqr68B3usLuspcfRyRUH4UF2NwCo553ttdJeKPfWNeDXxh1H",
  "key32": "3msyx678zqvsodha5g3FTVHiQrK8gMPivD1eRKKeDHNwy9kYeh3DDdoxTct6URyZNebZjY6VQT4u5wZLjqSHu9Ff",
  "key33": "Ddb8pNRxbmCwYNq5xG8ohpBEPz2TqfNcSTZXJh7AUJUrXywYgY6mGvFHqRT4jAq2nUrVP5ZcPCVaz1MPcKGFUch",
  "key34": "48x81jsm6KcvomsHP9bizDKNEL5zn7xQJJndngwe2LtM3uBvuRzpe1HrhN3jLaLJbSCSEgFoYgiaULtR2AVTY1Tu",
  "key35": "2ZWYFxqmCgU2A3DcdiXo8vem5LdiQGnsBD2iAZKGaYcz2fXwdPnsSeFksF2B7irNWcuQjf6DGb1eE2DghYfuahjG"
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
