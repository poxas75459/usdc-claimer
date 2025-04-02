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
    "4USzd3U4RuqVDd96GY8JR2MSyCocbTK2NLEUsMRnCEH5Jgn5JSaR6DdsrhpWczfTFbZgnGqRiskyaavmyEbvQdz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "322vRFjoYJWqAsm9wVnCHbbgXhenjBgYJjRLUc9mZyTk3CTqVJchMqBDN8sMmocVwNiZmU1MNfd1BCziszWBTT5h",
  "key1": "5GiEpKcawFzqhmtnb78Rw6VwsWxdvFTYVnvrM1bxBeWdegmJJyUAnCZiVwt7dNo8BuEKctdWSvUYwQgAq2upNKmb",
  "key2": "21amsrmZqeK2P83M8bPyDj8wat3eCS8x6pV6ziVFeouRQXQnfLj4eHFzbJnr5B2gy7QMTMrt3dC8CNC7VKTd8ALJ",
  "key3": "7zsrJ7UbpymSafhptSfXfwW2BE6vhDbiFwpzvjLcRf826pNdWkamXcC5MdnLTiTSSGTWok4mZQhUq8NA2UBLQKz",
  "key4": "EvWeBznG1uz5vVsV8FHDpRa3Nf8KTtVVd7o6gbeEebtxocoKoELZDa9YTrkjCuvitXKHEHG5joxtx2VgAcNsoLN",
  "key5": "5xKJogPP5yb6YmnvX3k26VEY5sixXBmqK9tPSAQupqS15WKemQaJ37JRbYLihwfT2xcsKfdBGbYqyoUD4S82gF8h",
  "key6": "3VnPjaRTgxf1mE5Tj21ShfmyLj1hmkqmM9sxkxuCAoA5Ag2qy9xRFKiXHDrMJEbS2ZpHy9RtdwwW7TYjYSoJ3JmE",
  "key7": "5jmmLAC2XZSo7h8frM8WjT5KCg9VPuWzTwXdHd2KVTwdZeQFcamBuCGv7joikqGNkCPAz4aV4SsSHsPH4LTAdBhJ",
  "key8": "P2vYsfAYR5UgQskGRLRNsGugR6dAGJ2yn4cQQ1x6zxkoNV24tLv76SLSCtzwFUDwWCyrdb2h4w8gUXM69qy8r4B",
  "key9": "5JoVXexe1VgjpRcpHoWmbcz1BnPFDTfMy1nxaR15LCgiumMDqy3mc12xEjQRSjRkqPXXcdcW6JZGWSiWaB4Wg4xH",
  "key10": "5L7LrM8aTeTsVx9mK6LkAJnmPDFxPVHGfe4yBPfXjzwSrDzV4XW9B7DA9omZEH5rvKWSp3fiJo2vfrfvWHwK2zHz",
  "key11": "36CysLaUBNcGZuo6VwQvRs8YnFfvFV46YEWfZymPT7LwzCsEJJR7APUAypxtXJRSz5RYinFDW2jzFWozV8KU22qq",
  "key12": "3tLS4Xd835c1KFR6NDPo14HxT4rFRseL1M1gSY8yDFEb4si1TpbGB75teuyboRrvqfb6jn6Ewut4YSwX4uci3v6J",
  "key13": "3Eq5Rgt8pGujsX5yyb4VYksXMcLnbfJPomS44a3N4QN9vxZ3tZzB2bMxyxaA6LUtJmsWSQida4sT7xfpZ5t9kbds",
  "key14": "2BW5QSrHvnvBvZi3KmSxfJoaHm5jmMQqsV6bSweN8z1E33qjwZ6gUPyTTMSg8h52afowZsTV1YD9DDQ6N1CGCAoa",
  "key15": "5RizKvmYCh676uCCoWMt2ZJhcpda3A3tw5kKsffyGMekdUsWRETmPWUFZQgHGVckhbmwdjGT8KozZSNVpGXXHjJ9",
  "key16": "27fWhCszG7sqA5Mihmy1Wecm7pt53RS8jDC2ZpZhiXZ2rp9Ue2aMzykKVr8oBhhk4i243C4N3k9WbzHm3jEzxyX8",
  "key17": "5PFSYSTTH1xku98QDepvaxVF8fWNjVgMr2RZue9X9CqTFRz14LQZkB7bRoyQhQAxpb4jujhXjZPogGr2rkLxFpoH",
  "key18": "3WTQFmRG2pQYfc1JhtV9YoUvwxDAZYJ4c9y2jB1Qtorsp9UT7e5edoGUwtdeQBVk7YAH1HtT8AB7uR73y7Zsg3HH",
  "key19": "2hWwdDHpsy5haJFQySKVSEF5X2i73kVUaw2U7pnBJ5T1HmdSrxoMUafQ4KWWBMTxDCU6nfMwCK2kpuXFzWND2SkB",
  "key20": "43XRaaKG73VwM5CT7rUt7xE4Vr2rN4DCGsfhnFnsBx5FqgPF7Uyqshb6XKR3M4dykYUxGWmVGyLGhTN7cvSbnLYt",
  "key21": "5aZctGyyesJmNUWzFvFEmPrrqHcGUKMn7xjn7FofRneozov3hRGcNtVFpwLciA4RJJimACNA19zbHaY7Fs9Cc4sy",
  "key22": "3YtSogUXdY2WbfpTn9nViMjZTSsWay36CSHXqMv2hXyo6Cqsk5R1xCPV6CxxwGdCpvk1o5QYxTrV8Ydth7FjXriX",
  "key23": "2Ce5gPfSgu2UY9jLLNHDCeJXGyxEifcp351hE9H1oH3UGqnbBfVvG1FZ7icvV4EHzvVeFdbymsvKkXhvVVuxefxm",
  "key24": "42YSdGDaZqaoA4WDNaPdahyrpHLpfoKsmTcXLgPPNsCinu5z6CdYG22aoDJpSazuvT1iwviDusysYRok2G3zVmRJ",
  "key25": "4Ak6mCuojzfSL5p2gAJNEuUPTRp2Y4jAwaSHSUyNTiGyxk7f7PhyQzCBt82vRB8y6zaQKjy3rv4WnWZy4YiL6vMT",
  "key26": "4nUiSs5sU9nVFUzjvYGx8422scSXzV2maqcuRJD64bUtQ9RaNEn7HJ4igtghGYvyjHMLFWTrn6obVBar3wab625Y",
  "key27": "4VcdPRNk92XcpxxZvhgYkAgzPLyE22vk9PnEJedrfpg8enGXQAXNKw4Wetty9mroZVe3KPmGkPD4b4iF2nzcHcHc",
  "key28": "4BDut8ub4FEbVoQ4HJe6omYHT14sbuKFVrk1jxCXBThK8toSbW3DDSBRpGqdse2B9p3nhnktc2ShYMQt3fqGZtbv",
  "key29": "5i1bWQz3xPP1qV23q3KdAqPtj8EutJAVgtbCDZW3g8CWrEm4WC7qcxkp13XNLnrTx3Pk4ghAjmWUM7SsQaT8CpPz",
  "key30": "4vty3WXFtUy3RvkeukKF7jBB2hvqGKhYTeoage8FMZd4krhjX1XHLJhGopEenJ5aj3LKo3P3WxhYG2g6hhQRthf2",
  "key31": "2PRhcMUBdsp7JWoq7eyf3bwzTpDY8D4h9ct3H1aecFMovQGiyw46Hviwim5syzRziZZfF8N3dutr6C2GHyY1nrcM",
  "key32": "4xBzC3m82jnccLpjHx3Pc2J55jyRARSrG4SX2pGNaJmR8RNA34QrNRhC6vd7hwd6pXiTbwmggPgPcFz5WNdXCgh4",
  "key33": "5NGLAuML2kyMxPGDF2tAagjomrg9jH2ocFZx4HtQbrTL1oW8iR3VD7D9zsr9Txcgn2oWAVDYHdrDxg6SGgyY1VaU"
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
