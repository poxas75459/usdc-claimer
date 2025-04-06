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
    "qWVqDQQujCHPFfUXhXFDLAtt9GZoksBrs5qwUsvxt826bKA546LPpjzfog9zERbSsCh28rRYCVCZx3FZtJtwfzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sgb6M2WmFZh83MgYtBFbFt8D1eJ2SbN4SJ9jaWYM3Tk1sxMjiTm96rdJsa39YoXU2grpWqUckqoh7D2GfHobon8",
  "key1": "42ngJmffWhXTHbSZdgSNR3JRJmLhQjusQFq9AdPFwtrvPfg2pXdCC3ZTTQBaJisbWvAm2LKLLbKnfTqPzXfAQT5p",
  "key2": "fjqbYFJf62YccwciEcjp9NfhTHdVpTPUD9MytoMQWLXQS3555Qxn8yF1CCmrFKCYi9GpC1oSwa6Hdzadbc9tH4X",
  "key3": "5gT28NC8zkGBJesn6fgRwhUYFii8iJxBYRfW1D28hWdQiYMsYkpV48TgSgfGUjc4gUhHD2WTUjR6roTJr1FFxLa1",
  "key4": "3NUqEw2vNGnGrpsJ7fMdnV6tB3rFK3qGKM9QyzXurBeaLcLmNEqxpekWPvBPWWmUFyz4dUpER4SaanUbybrQJGvq",
  "key5": "2fb8idyBaneMz9yUgL7z4HYSXuxAnD1dMGBExx86VkVqGrqNKkppTPZb6gVh5uzQr2kyLvtFxp6x2deiibRd8jGE",
  "key6": "5RFo7YsvramLjAAGVZ5hHPAohcGBRer4ntdFNgf6697UkpDdk6sKXBu4XkJLboXpNY6ZSREgnVYW5ph5TZEb5hg8",
  "key7": "3t5D2NrvgKP27YRWsFKhzoUx2KzcS8QWZsDjAo65VSBcUySPcc833ZdTwwvdhjdiQN9gS1TG8RxnZ23M4E7rpot3",
  "key8": "iBLZMCocDvFsA1LSXhMLPZGNuoLEFq8gZP1baWjjfNwKTS6GUbHYPz6k67wmRD8qnLy3WsLEYdR2YjyzBHMgvUF",
  "key9": "3LXFfJjc2hF6dh5fy2oK6SpzkE5g6h1AYcap5hMrJyACTCpNMCvvzNRfiPs2CpQ4zMNcSs42H2MeR5yhnqTysiXn",
  "key10": "57uQsLsB95Gcw8FHgytdbFQhCH5NrGH76LzmNPbr7FkbPdg2HcAU94TyxTzih8cWboCyJc2bhUCoqX3NzihVTSpt",
  "key11": "5NajqeHE1Q4PEtak25AVEEqw7DdzppajEPgKC82t48at59g9JFY4TAJSnwZHwz3RiAAZxt6fKiDucJoz6wX1APT3",
  "key12": "3CPTQKDacaj98B19ruQst5m9QuTSEAfkbgxSv3sYLbLUssaZPhxEKQRB9f8gJ5wcc2nhfTraQ8U8fb8jbi79U5uM",
  "key13": "426UQkuTdwAYMoLDHCeDBVmnqFnyLiPsCTf45sEedq5BWE8XKkLosMyYLGwiwDDhRuNs4wCF4iDQaqhrzupGuPkD",
  "key14": "2Lfgi4eRsEWgiSn4yLkZy7LgJwURk7bEaHs9kY6fGfcgo2EFBhkimPaSosU3oyRv8TAhMnvb1ftz1CiNChq1Zh8Y",
  "key15": "4obminQMWUL1M9kgj7BwjxHMQphGBJ5yU7JT4cUqnbxqsH5zxWQNAtsDuq2Vs2YLVnVFjQeo19kYLgXmjURqaavo",
  "key16": "2bjdscimh5AYu7ttXkL9PzVFyChgRAF4BqFjBaQurWGH2irByVxzuhT1tqkzTyt6cttZjc2GHeGH2nZkqfdDb9cT",
  "key17": "k3kB7xmtE9wLYn12jn5DHS7LpFUcFBpMUuzbvBYERz2VTaDuYLpQs44GXNvwvdbz2rUs6PYBKpzwBpeQiqhfS8f",
  "key18": "4UM7dSfqVpyU1p5s4JTZmas4x1CPaLQqpmNyJpQtteuZFX3RK8vg6bw9RkLEGwCdfGwzCnaDxMNh7ni6D7vL7XDu",
  "key19": "4AhTPjsqopNSCB3SrnSoFcT6t9CkErkMMcySKrQaNgL5kYbPn2GdacCzMv7iqRBhJzAWjWq7txH8AmM7SehmVW2g",
  "key20": "5rhbXz7wzKqqQr2c52vCNPELzD5pfer37cdTssgLS8iv8vtPZZumU1zrGpjUZ5WJ844b4so6m1YE4UdmATx4e1uy",
  "key21": "4hfqrWJ45RVfTxHGtw3Xjj66447EQaEe8g1Y4QHfqw1ypevpBREBkWo3CckVkADxKojN9LU3hjSBvNmZUipdbj8p",
  "key22": "5NYbRn37ZkgpNQLZAcyEU1vdkBKXnvufWpJDXq4wXJ9s9AEn1atXeeTNdpGBjNsYvmH6nZSo4udCwV8AYLZ1rMWH",
  "key23": "5GpQw41jvxBBKsJtQaGAFfX7qc3ehdDKyn3wS3dfrfZTTc1bKz6zELAr5VDYhPbhjqxrELQGFvipVMPtp3FCtES1",
  "key24": "2GyGa8p6qEUtKLd4tBmMqkN2hsWAM3sYj27e8uaCedUi1LcEfz6aZSe6FdY9kWRegbWtci6ZyZ8d25q3GwvsBJHH",
  "key25": "4yprYZuSBHKTaUNmuMbeoFC6TXDi9s7F7BiizW6BkC4WCG34YSNckiJKD8LdNSUert3C1YTyCB7ZHus7LWgR8RVJ",
  "key26": "2GbQrQ5tNqccJgA3dm8HiiufmX11GTKJRVm9UNGDUmoG7aNuBDzvFaxF6n1pKDEtrcrU22KLxWrH5SoGbcr8yaNZ",
  "key27": "otPegxmvw9A5S3qUKyiXwbo5AcNkRTWVe3hzDZfXRh4hcAfrEwcae9kAYGe8GjprAdqQFGo45RajnrqVGmEP3FD"
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
