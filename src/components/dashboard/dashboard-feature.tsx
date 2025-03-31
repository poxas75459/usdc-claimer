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
    "2Lrx62Bt8FCGUB3FZrVzQPNPnjynthtoBbiieSDJQzcMHyzfDWYJeqMoPr4brGrMVjd6tEPQ7Pkoxgb6dFVHPmZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMy3nW9YuU9fA2GemQE9Gz9LXqUou4rUciC16yV8kznzN3cct5WTHYFRjoL1CWU88yKfavu417RxVd6bWbb3e6C",
  "key1": "2yHe3xv4CqTbiG3HBhYpy3Xkko3W1AvrtYypnAyuzXb5UQi8V4foBe2QUwPhxTDTiiWea77ihwrfAvYF2CJcReGq",
  "key2": "2Ca3E7p3f6mufH2Dc1LLCGcrtfhoHrJg9rs9ymSihRyiNE6pkAo3Pp5Y7HqBththuykEonh7EggCkuqWawfyUo2Q",
  "key3": "4qxMxU5iBJ5BuEzf3jc64iK6BAzgAgnwBqviUYWr3mkNQt6wr3TYmWADk4EP6yMcjuaiZXfLXGw16FYYD9znMGMx",
  "key4": "3yTAGpWutvMPit9uCHGAbjFrZZ4DNrgtYmzGCHvu37JMR29pkRhrYJy3qqmG3ycsSfPR2EUjsku6UQgnLNqeDUxD",
  "key5": "5x31tjahkGQok4jPCNnfbnGiha3hLyukQ7pTeUBK2Pih1w7vsr2pbzQfXzYrpMpmxndxb8EoUfLG8HfWN5mAsB5L",
  "key6": "55Zyuxtis9iCy51hSaLYkKALCBFutF9U9SNuErSd9kXbqFf5LWkFSiiFaQXtRTMevWJGp2BLzSvuqqTK6gvrydUC",
  "key7": "2e45RAqZBMTSQAecRYWkWeB7uRstfcLeeaHqTtf7EZRk6gQDbrzVsmmtWEmwSXUVTaMG3fyeXM94LweXsWCdnbG8",
  "key8": "2nKhvK86DWLSWArruKeuhq6oKHBMX5DNmvg5otcxS2oNPt1RVoBtqr92VRXJA77XBUKzFmfaFxoJrpEh2TQ5USDy",
  "key9": "5ibrssTpo94jhhv6NqSpb28bxgWQvZHQG7W9MCyMUxFSpeZXkVv4xRyFBry2gnDt8Wb87vN2Rw8xx94KZ1Mr7GPx",
  "key10": "2WDqAQZR8objEpekRuUpa5oRztR1ZCsNB9ELEMJaNXM78qche184VRFqX4JJWaTRjT4VzrtrqYjatMUbcgNHXLTK",
  "key11": "1E6w6VWKB93n287WkMMrk4hBgeVJj9WaAE6PossfLvqG8uU9ddQPLiAXpzwUaF5mYz7AmuLJiviEwezkQGd3qjq",
  "key12": "2qX4Mqox3hkFKJdE34mjhMv7Da8iY26Q16oDfGKGFx9bMXc6yfGPC1ksiEqUV3M3HPRsFcj9UAgzr62S7BPAGHsU",
  "key13": "64AzMCyFYU9LjkzRpEtNwpuNecZBVonav13YovcTcspBp3APTfR2Af7U9oP5mkZYUEoTdPNL9dgYChem4Kisz7dg",
  "key14": "4rFkUMiZztty2HhkkVreWvrNvoTTM8aQ3mtKdpogS3H8ize4hZ4UN52fTmecsvocdSq8Wd8LX3K3UZwQD3Rq3YMn",
  "key15": "3PJh6KB2RSYZPcx5hoTAbau6ShK2u7KXxqhkkCdXDsj9opHaiEj76BUaFN5eRt4TiYMfcrggS7i4GUFf1Dk5DDsy",
  "key16": "2T2hmcstFFvyXVKWNF9isBceEyM3tjuMcSoeKaSJwJy3eW4bqLyG8GSpaMv4MHZi6vEm9RBW9bkWMJJ6QSHvc1w1",
  "key17": "MDwmyMeDNSsp94hr8XuuZR43JhbRR3TPpi5eMW98kYAUXeMX9mfz9HGsQ2E61S2NgQtcME4FtpNc78ZknGTisoR",
  "key18": "5EL35fp4XXrx6aT6irJ7U75tu3BbLLz8xoxMtkFVs4dpkBaCyDVkGHCc77DnwfW1HiYphkPk6wpM4JN9XihsGuW2",
  "key19": "24kdgwxHmY4wxkTKNRvfkARZUBpUBcCNcp9eBN3eeD9XPWMm9fz5ZbdDPcJF9mX4HbTcAGDQ54T7ypEJsqSPvgeH",
  "key20": "4SupcF8H1pJXofKBnPfhoqCWEK6fpRH1X18nxDPf2tdH2dU7YWxfJNpJyfM5f8EpNBpzMvb5CgfkpUmKz8TndrnS",
  "key21": "2f6e7wmkFiTvbALYWJAVK7vidBK2nofsVWm4x9cyrvapEmtgTjGVuzFCYFyov3Srt4RFj8mGcFtn7hHH31f1ptAn",
  "key22": "iBtSnykA3eyLgpDAvVLq5WtCiVz4Yd6oQuzhZWPFAQyUHswmsqFJG3hdNbjf9HH8uNvxVTQ7mpsmAyxZPdm2eza",
  "key23": "47agEamo1xdCBqpLDW28BbHBmDBCxAVuB8qGFfKJKgTVWv6ss2A7q2m8LNpetoJGzEBVy55ceMcBWnZ46MXdnZHD",
  "key24": "eDKVPJv9ZZoYNq7HsHEqHT8mBSNX49pUpzjsuqyGjVkjp6eqWeobsqe51HFTLPrGMVEXzPU3idYdxhQ3aMNmzM1",
  "key25": "3vSeXZ6M9oqdBb3BH4eA8iKParjA92yFf2JJmLRF1Dsn6qYFsegfDntL8Qn5bQoVgw6h6oWVYPsQeR2yE56Mzfth",
  "key26": "ji8emuLVmWgbTnSJSj6jakzew4B2ThkmGsfPAqMxexw2Gj8fvUTQw4cNoK5g4LXq2uVFLeS8NJR1e6onUbHEwHJ",
  "key27": "tP6omuq4ndJSvL7Pwrdv8uHd5qkXbTDWb4p8gwfCdbBdNxp23DVDPmnhnAn3YmQ1AM1SMKxDUBJ1f7a2viVvRvx",
  "key28": "W83s979vmk5HcoxP7zd7cRMzECgGUVp4LnRY8jf2MNLnKYDr83wh8kEEYM6tJ1ZXTsaGyuemHPCR1Wj9krx5wDg",
  "key29": "3m2ijxkeDx7beYU3NWRzxf14Eo55DwKFY8Xkp9sQx52kSmnigtbPT4PV3RotDJ4fwhsEnTGv7n1TBNBJaHvuWfS2",
  "key30": "5TWvMasBS4xhNwHtUfwgA8c5mPBPAWmA4JXexvx7jjSWgau4fGf3Rbta3uMS4b3pFvT7B1i7wYKvh98e4296jjno",
  "key31": "2u2Mf2NY97gNQTincoqweDjn7URsMdrjrYBh4uqjjFwvz9JdQu2FsuPoGCKntzgz3MPSn5dJv8KBZ8hXNfxcQQW6",
  "key32": "4bc8ngd5pyPiwVLfezPhLfQ2qqbt5BGo71jp7YiWUCqs1ZYu2KzWxqkB6YJckbLMgrws4P3XuRTYkNJ3Ajmp5Qsp",
  "key33": "3m8vdLZm56TSFkpPMHRaA4tfsYvGfo7K54meswjEFd5HJx8CwqsGH7tL2u9iBKxoQyTdVxnfj28V9UpPtoKbzjhZ",
  "key34": "2ccrQhyBQkbVjRMkkiyJwax99eWkS9VaaoLdqWKQppuS82Sc4dJknBGEZdL5KpnXfkYfHK3VgWN8FU72LaBoHw5r",
  "key35": "32CA7D5pFSrTEig8dENmLSDPozSdQTarZPhCGJoaU921W2eukbFkt3G62ngDSaK8neDswMTshpToEhZLC9QP3p8W",
  "key36": "24vTx97r8kJeu1XFmrhaCz6YtdW8umuu3Z7UHcT1hHbdwqxkzBRpiUwqLvkFFZwzXnkBz51SCRviMjwwrjr6CaTJ"
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
