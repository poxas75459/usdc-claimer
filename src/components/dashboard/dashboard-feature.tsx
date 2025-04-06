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
    "ysXTZjhokVFCLguyDCCVfBGa4qDaTLbjiaoxdrv1bQMqFswzPaWviiAVeTR8zENyCeK22ov5Rb4RuxSmzWcVvRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZhtNzkSKLYqE9DYzEgN1QdMDuXNiirPA7zkPZfDeLGrNVXoXUEYypGqLZVSxdv8XaNys84XRbs2jECqGFA7rU1G",
  "key1": "2p3y2zKeo7W1zNanoP9FA5RbhxQqorLjfWtCbszFj93aiWqMAnGCUwi435raHm8SYgwN9d1wE5cK1jmypgNRh4yp",
  "key2": "pDdtToXuLWGDBBMC2vEYAXVu3r8UF1auorsE5btvFyH9RZcHVuLWatmAbn39LhJAjxcXRd1iXHuiEq4oaXtJpyP",
  "key3": "3datG5TGzYxFHek8iykX7rD7gJMwrytEVW4Y2oH5sB7sSMUFy5zmzXcvbZH8R3XNQNCrBXsTH6wmVKmwHBVnGYhU",
  "key4": "4QKhTjHk9x8V4RgAG1KwmqCzbB7VjgQGwMsqht1NexLpWR1TPNb7KLshjqLcyJKcRAT9wLSdYUzmAsAbKMtFRjKV",
  "key5": "4Nx52PCyTvw1ZRmfAn21PYQ9FhygTE2pwBRs12xPBXia58KP1kv4WezPw8nuYTFR1vVjPUfD1FuVFJhA7xg4TpKF",
  "key6": "2UFeLNkMGLm2N2zf86KT6fUFr4Stss4NSPf52VuvJE6eDwmqbKkzTioPUN2g7F7tYLzCaX8geiQhupNZ8kcKG1iU",
  "key7": "2u7WWD4sz3obidSZtN6sNcdnRkCitMTroX6fEZKkSiHaGXfCkgozR6ZjYn7fioU7DSaKcyvY9wZZUGkMv45985cY",
  "key8": "3gEWPSv6dLLbqpY4pxTVQXxny2MX3U2ib3N1HJFsyMUVFGgEyHnJQ7GWKwYZFtusFa6JRtc9Fhdoevqy28xsvUCU",
  "key9": "29GRW2kA7fav8xRkF2F67nnoQ1BRrpxvGFUSTZyjy9QjCqtd8TCDLG67awa3YNmnS7i58Sg2RjQ5kHuhiZuy2d7p",
  "key10": "2sigSv4NQQDrByDSEMEShQekTmKrj2SLF2T7XdQYUwenpgTTEXcENY1YQoV4FrXc2929CHAWMoapu37PvcDx4XaY",
  "key11": "2fqHsPenJbFj6yjoACMZMmr5gyDKwNf7PE5eAuUeVM61Tbk7MyzNvGHMZMxUFGdzWF5yXy4abRErxMtprkagoo3A",
  "key12": "52iREs7KH76cTCqFMhqYADU76qCnVL8buLmV2yRWivjyBLgVY7rb4KknT7ASDYeox6co24GNwngRXdsiusXXuYJ6",
  "key13": "4mSYtfjAS1cfj6tgk9xWtK4gqokKz55D62DtHiANPPEYd3ssb7rvAAz8bWFeSRYHBhtu3kxiUPBo9vxA2bbvKDhf",
  "key14": "2D1oJgFr14vNTYRzYZLvSeWGciVEAxnTC1emLRVxXWvtDNzudWSUs9Jpyrdg7vcuwq1VESjGgXraYPX5f41tt6DV",
  "key15": "52nYYYAdCruwh1qPabonLjHw1G6iNzWPJFHokKXHk6KtCVLEaAmsnqkuwSQzPwkCbyjDUCdiyMcEWhHCZUvUYCrc",
  "key16": "674aQRkxe9gvbNvWh3F9c38fjwFtk9JNg39C1MdACwh8Pf5SF75a6quxoWPpSCXkMiPvsTEaQ5Sfe43358bJ9AEg",
  "key17": "524xf1w2UJCN97qmDxFevQcsfdsijD55Es9EXLtgbiRZED2z4HFnpuc6y3C4w8f5CNxtP4RzfVkFwwykkEmHtSRR",
  "key18": "2uFcbDNxfdHgJgLyD5nSh29Js4NBx73eVUPD7eS79QujXzcrTmzvtcniwsRzzkSiTBPDL5vefaNwEKN5LxaWiz6p",
  "key19": "2K6GpcgR9PPovnx6CUruKSgmoLA5gy6C4k4Pm4k2APES2URDaBQmaFrmd6GE2cYMHBHzy4hD6QBZoW7ssxVCUJAg",
  "key20": "4uFAT17pACRR4RG3g5HK1jo6AyLZPRvJDePsWkdLKG1o5dc3bKWn4ojgYz6XyNr2gTkc2phv7TL6ADddSTU4653S",
  "key21": "2zUjPDkkghbELW1Ja8nKJcCcpKTrC3PG2FWYL5kzALz2rzRWB2khNzEoQJGKZ1MUbByQya955vzRg9tPaSEsr4XF",
  "key22": "5JAgqCLB5faDZbk5Nh3Sdgz7KaqzA6qnwwEz4otoDnpCJrn5ZDjFFoBNtkAdcs6eaL3t9JDWSEizdvSz6qrkBsNg",
  "key23": "4wFfssWssdRru8852bi2quAx5DGXswW8rJa8dAbBXFd6sQHnoWWkh2839wJtmQMjUqcruSi94dcHboHCCR3d5SkE",
  "key24": "56Zcu4adaYL6cr8XL8Y49DaGw6wjmNr8MQcfD3UbVCXfqDyCTEsKqeGmKEXqVoGxmV2dghnbPE4PjKXZc5ibPqot",
  "key25": "5dwVfQLMBv7JyzCmUs5LVhCAy9byGQriUvtZtpUi2X6Ho9Th9FiRevBEMmRksRw4RJ3pGyowCGxCm63G7MaMJ6g1",
  "key26": "2qLH3EUTwFX2vrTJSkXquNyJAv6cqnQLdBWcFM6UH5hVyaJbL6AxWAvuMBhLcPup14qgUbZqzzDvPqoPxZthtiz9",
  "key27": "3BQYNLvw4o12UARmMrynMMTx9XBN6wmvgkuXKxMqpJAYHW9pAePGK7A3XowQivtBNqzV5HLhyNpv7zD4taxnRo3z",
  "key28": "2UvSBdmMDKyqkBNFnrdCysWVMwL2zHvdZwz7LYgAvYwiPNkLbhUczhUss4PbH4arz4zKauWnQpY1e5bkuWg35ELB",
  "key29": "45Yk27LzrzYpuicyGnSMBDps4VKqJi5qaBqt2tCeGd1eKSvZWkw62yVsZ3MKpu45N5EZZuiUtGaac2HDgBgYNbKK",
  "key30": "gyc1emLD5H11Z1MvtcgSchgaJoXgncRbweU5RkWvSwkd5h7d2sJD9Yuvjco3HsCvMRsr9j5geP4UPacm3SDZaiE",
  "key31": "2R2sU9SmQPWj6GcnSSFXkGAH7U5CV5uARmSMVTkhpH3pACv8fiX2hTfvYDbrR5Uf5Vt2KR8hvFmEkR7hSkmnjBJR",
  "key32": "1Q5taNAKvohNiGTSEdP5Ps7hYWMY3PTBqHcfD3DhMXHPaSMivFTP5Q3cdVHdzmM9Yzep1YzxWXYmGEESQCKRzMq",
  "key33": "3h43k4riNL4tgaJQmyUacoxDSXSJcrCRQR1nqJZE4FC4uUju2YFA5Mr3SrhQWndeBrJNHmMQoQbSPTWmwgmDCqiJ",
  "key34": "2rNBXkt1z88U28uDinQUjWU9tQtbbFYCW1KkKt21ZFqgvQVgMR1XFgGp9o2PQQ99ZQKngfqWT5LwhSDkTGfB5NXs",
  "key35": "5MN98gjQJCqS1hRc4YSe3nphMU3gvojvq1zkzzfa54DGMm5PRtHjWwYEP2cU2EqPyvqkwTM5V5h5gsgBHWNLiZst",
  "key36": "2YMMDcxwHRhw7zepW1yKtkUpDnLLFQgyLLMjiZNdtxYH7V5rP3pjZcxvSRzUMmyTwTHNXGAqShDgKYjqKxNDhxEQ",
  "key37": "38cvFSDwhRYFbdqTRAxc2DnRqfTwfnhipaMhzxhU26eC8dtydpJfbe5Crh1z9uiKEgPkJmFtNziKA2wdQhznFBwU",
  "key38": "27bw4bANLjpLi7976vm3MbDFf9wjmAWm3XgBiDQQtugNev5VsQH8yuoZceJLAdBXc7Lsr4cchaA7jgcDDEGL99UN",
  "key39": "26Mf3geNSFhFRBLoM8RCQD8TG1N7KvA9yw8tGoh9EocGyyp5jsWnPe7fwVFo5n9ecxSCBX8bXawrbnGLxZHV8fVT"
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
