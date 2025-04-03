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
    "EpSYTG34sQC9BSgpfCswu58uQR6fUHwkxGjbqUyZh6zGp8vx4SnRH6ENEnXtLvUBiER3un4vajXaY5VBSH1htcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Zu7tyZoEP9hrfjyt71JbrCp6JtySnyj5hvgEcX88jixEVNDQZNoPCMwtM3tTFiGhf9yybvLWwTkxdjcLB7rrZu",
  "key1": "2goo99XiXXFXMr7VbUVYSw9cprSMSNvh9vBs9SfRom3u9uAEctWjashUBQ6joW2ooM1AqHE1qV9ymyXmFLcZaSg",
  "key2": "3Q87RPDZzqK3JLYVa7YKMdnEbnM3Q5mfe89jes7kZiLLeTDC3hQf1C92NXrdASYtCEv7Y1fP3QYrr9kqEJwzQfmL",
  "key3": "3GiuzQQYgXKeeP6CdS4hM48TV8X89aGeesn29csiGfKZmLjTbVF9CdmxxgmRR33j4KBHBC5aAvAUzYkDze4Sv4bj",
  "key4": "4rVKe8sv3nR5bfPa2dYhuTXrvHZ9xC82MJaNcxGg8sgdXHM36ftbcKGVUMsDVDRJEkHg2oB37Qvn6Y7N8QKmmh4n",
  "key5": "4LnutifhXYD5hU2pvkDvdzhcVKiNQC5qME5mcmKDK3Z4UBCP1NwCwFKMCPEnBEnrAk2iEPizA7U68uPEFVNXK7b2",
  "key6": "4TdVnqasF93MVaNT6qhJw4i53DYgEBrxKwRej24djnYXEYRuJtUe5jCMLsWCh287aY55oHstLiiSZhK8bCdMXoQn",
  "key7": "WFWYgh1gZPjBzY1HMYvJkSSdwp77ehbbcqYP8ozMgaN8wwj8WmM7LTkr7HSGpzGqSvKLK3SAVqMZ6rhk5A7mK2U",
  "key8": "26B6g8Af31xpa9vyZAUdFYJHstXgKjdYa4KF9XBxKA63HZ5ZzgEpj3hFR6L64EGgLvCdhR4brd3WNWjfF7EZfnNV",
  "key9": "4h4vRZWJrv8evrax8kAS2KXYycPCVQtijr6XPYBtADDegwz8sJijbGydjP43WvBoyuEPdUef7aBhtxEgnSayYdEM",
  "key10": "RxcS5RJRAKEoixGzouavyG3wh9777YtpcDWV4rpHL2fgcGSGWLVDNF65yeqzqb6XejWNx5ittJu92JyWA67A6Gr",
  "key11": "8j9GuHDs4ocxQ56uZaJpHXW8MDxP7BdQAWMXcFs3QMi2vsTJUtQER4Us4e7PRD68HSA7DddMWiumG4xmkfcUm7m",
  "key12": "3GEKawmqf4kxLFYnzvsNoVz8gmaaBCpCfaR9qJKD1GABvsHK5t2ejRC7Dki7GE8WMeyaK7Da6gvzEexxZnZPo7PM",
  "key13": "4GohDsazr4RJeAz2kCzDEADipdAQB9K9USbQZsR3UKBGcuB2E5mKbhebVe75L1SE33DjGGrmaa35QKj7o3t5dJgc",
  "key14": "2KL25dFjBd2m2bVUo8iRDS3fUmzS55AhmbimkD68HMA3iKeWhmiMYUHuuu4ZLKjEjn5rXFeacd6agrzZukBPNysm",
  "key15": "39PXydDXogcq4F97rGGbrkWNi38mimPzSK4w1SHrxBvZxtMtuucC8dbUfqScPTsjPFgRULgs9cvoBiJLDLBzRYfr",
  "key16": "7TkNsSUkdnqLqocBmKN2HWmc9fhoN3Q15ByEhEix3NGFN8HAm9TzDqwWLnDr4VcTZbMiDjbrjFnWXwjt4r9cnmC",
  "key17": "31r4nwmAMW3vq2dhZR3FAEKvNsQTHeie1VPwykKEctBuziBP5sB7AP7xmvViqwNKdHHh4P6RRXriLRgPKaEko5sZ",
  "key18": "5yHtG8rp4k9c72vCym6MVuuZ4zkFFJXvvgnGkQkpe95Pb11WXWRkUWY8jSy338x6ZTpFxNNcDWEpfBDe8EccUT55",
  "key19": "MAFumzFUbMj5oBegDWQDLjYDXFnznNtmTirpTVDU7tyHzfmJcxc5YRB9hRH2bVv2J2ed8VxmukfYh9vRvCmRbuG",
  "key20": "5h2DaK5MjSuNEeZtNoCLJPBippW1XmgdLVQaauYwf3pVsxyHEe9fp8VHMGg92WpazxDfpQyioC2MMrvStaEkeX1m",
  "key21": "5YHPozfHRAZSnC9vUhNV7imm32aBEhCgvr8YjZozDoDJquJBhB8fodppocrc9Re7w4Pntux129oHRm2JNjamB7Ts",
  "key22": "3rRYQ4u1QRzonrYyeGthqkLG2NypX1eAxKQCRB8NvcfkyyqWFUBSoA3Jd5cAraFiaHRpgYV9VsvEH9Qrr1AuePQg",
  "key23": "4Pus3KSowMvyeHd5TRejDNpFJMEaZ9yiHg6kaK8cGjJ97cH31fNMszFCpYsrgUifhWCvLaBtXe5YCkJsvXoHQyw",
  "key24": "4EMHexHsarcf9RapCuPoVbd3Riz2X6o1zqLW7LD4oWywy2cMQtogVTgEkymBcAQxFG9BYVHP7TsAkk5xkSJdBry2",
  "key25": "5Csdos17ZdBnMYQX384gctAsaUQ5RsKbTGQCmYu98vhG76TnZteoL21c4QdsVV9fQhYH7sv6U8kESnmmqLWPabrg",
  "key26": "4e4THWkF46rzDfJ9mcQRLuSRA4gc2FhJv8NcqqxJRebUkhEpULZ3zNtKjsVwpYgCFEEEoQ2oZRzE4Z15pba78GF3",
  "key27": "5DwMQkoPMb9aNJUUyh2XMtofzqGhcjFffFdKyGf9iSSJeNx9XErG2uW9t82Yna51m8DZiHqPX27oTsEMSMagqKem",
  "key28": "3qFhEkoYYtDUDHnxxCvdv1fcA5Hxjv9PZxjhRyLKeg9dm1omZx6pkZfnznkffWJkNLcY8hA7b3EhWoE2yqhP5fN8",
  "key29": "3xRR2z46cXMbCnwuPD38fZfAVeexqL3RJmUpxEBP1G7pZcTbVXVBJLP5k1jzwzxe2pj8P1697WnpLCsRXbN1V7Jo",
  "key30": "4RWiwzFdfdhdeo4VKBKPZ2VvKPXFXjrx2iL2oX4WmVia3CjytEUEWXTmVfqWcmWpFK8kFgZDBERYnVtnksmDuEWq",
  "key31": "TagcBTJwUkkY57hQMH7bUCq6q8bMq6R2ZixS6ioEdAx1nhbWR3LLsf65SmUMsBReRtyb2Esckr56pnZBo8uVpsK",
  "key32": "25cfWpgLKqKAnRvU59a1a4EBLAgfgeVJV3nf2qBoMF4FzzsagnmJagQNRc7PuhFkTei5ucdaTfFdYRsXhhbCj5uy",
  "key33": "59gLFWdnojNnS6Jqs69ixiCEkWo6uNK5NSw9YTTyZt6tcb4ZokK2aL5iVDfdeQhLv5XyQmCdvSR6hmkriyjSCXzX",
  "key34": "oYvd94fJNnW7AVE7y2dKkqAYoLeNKag3Qc8uPS4DRcp7ZGgU7BmEia3Up8nxNiCFfSJv5F9f1U9sM1Ecr8ZiwDy",
  "key35": "3SiG8E5drGEz2u1rbBFd3WikN8gB4nmVhTVhZpKfjNSJyourogWBvWX2FL3TWTNkGkjCYjFyomBTVoqLTdP2PmpG",
  "key36": "5f8X849UKYkDSb5ZMaAzC7NZnDb9cgE95i8AKFmzgP8aqqmvFP3eUtSHMw8qDoTvtYBJo7NJXKkgmUXmxut1QYQU",
  "key37": "FJZqKBMazLVd8t24573CBhPi1qu1SKP8XE9iWdHJHDN14m2Pp7YymuPE2awmEjdATs6bNSHYE8jrMJEfnbK295C",
  "key38": "5Epcj6zqpkpLcTuqHykGmsJCN2CMC3niPcxLQshBo4f6tj5eWZhAj236LCGHbLCzNzgmtpm3RapkdXhsJRc8p4wY",
  "key39": "5oCKrCa2wymPKoZkwBAPwbMC1weRfHCTwfnWbz1ds9mGhwxCJzksJY5xgNiyzKRmvq9jsXuJHjEof2mYXs6X8UK1",
  "key40": "pHAhie5oKiCLKG8p1rb7YF49Ci43o949MESkSqHyQ2sEh3Xe1ERq4RnNWoXn4AqtWrvxyEHRiSj6WqZzEN7F2Fm",
  "key41": "2R6oEGXQuUNQ3SNEY2zpsj6334spRjgcsvNLfpXRuMoLxStDsHhpB2S1enhGoeEEhgmJ8V9KuUydWFrfTTefNDJb",
  "key42": "3rknpRUtdanoU6UAyhgaFZMqjtjmXrEoAAWn7Tr9R6Zj5MqgHkW8aRBuTpbQNcdwfT6NPEUXHbFNq73NhrqoAYA",
  "key43": "3tYCy3p7wEaqB44kpc1HcF37NzxGunmkCqP4UHSMyWxWDc5XUk8mCnVHnyqKNJj2Gtgybhpp26Jb5YNuZ4NmeS99",
  "key44": "DDm7kvPrkCX6R2HHNXijZfbeJUBKZVtdXJy4JsvtiDn7M3Dv9DPuUfmD5E1x4fogC5Miz1p893XfQTTwFRtpMe2",
  "key45": "35k89JRc7NixVUoya32G9S4K9gjU1zyX6ivrtGUbkQCiXEf1NtbHp7iqhU674m9QT4tVxAdmthp9ekroj8kGfXML"
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
