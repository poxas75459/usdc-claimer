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
    "5BssamoXmdjzwwM4gGVNuw6rCaG38QhsepN56USZrxrMybMok5eKYDM7BEWYCGKCnSzYCB2L6QZxDEK4C3QzZwZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AvtMPUcDxqT2h8XxbYiwCFWx5YkfY8rD3KoJZcHnijBZ8rw3SZogty5u8bYAU7q2K8y5qtWWBQsKgwnKevA5cU7",
  "key1": "4485dorBKPp33Qz6EbGrT3LYT4QkYNPFUT8YJnVsoMR6FTF668ND5JhPMwwiaAafkbACx3a79AZsa5DrdUAjDFMw",
  "key2": "4LmnLGB1uY1wSj3sbW9aTmKroFuSKa4FpCZ1t2JSaCZAKUssUAa5GwGLDXLfT49cHtMkytJrpTp6pNHGFCLJHGEY",
  "key3": "5EzCdPriFspBYNCDMmXc3t8G1dZG21mK2EUFsUe6pXWAG5JRjh5vp9mDBcQckQvvR8FmXTsqA3pBt8s23zMpVvsV",
  "key4": "27RSgNBicUMwhoXTTLD1sdpod5JfFHAUwm564nGNUzhbkNndbhAGH3jyVBwcRNYppdvtxTaQKgyYrijqdgwWuiRL",
  "key5": "5wPPeoXAQiBQNXLGuaEwVrSue9gNQUYPAS7zvEhmKn61zD1f1vo4HqZYuyUdkWB9xZ17yYCuRA6ywaGeGCTcCULu",
  "key6": "29kyJVqMtU6edemdJUZ3287bUVqpDsFZKz1CyX1i38tiMskZxgbhzxVtALhQ3FFcXmWbVZfDv13eP56LAb7aQTbn",
  "key7": "5CcCvAVkNJmPmJsG8L5wb4FiETdvjQtH1ijfwWLFMwCe7YZUJ4ZRHEoc7VAHqNvUgvDNMqDDHjFoaaqk3ptpE4q5",
  "key8": "4FJzPaj2kYBujGnEJGrfuA1iKoByBdHSLiqEryLEzhWcQyYBNbQLm5nuvnL5Mx6VFgougN2mfUe35qXLNzg5wMM4",
  "key9": "2EJAVRU6YjYVUZGAjXkovjzwSYdKDAXafSs3xE4w778rEe3nSw7X8XD2G6hWy1Pvmby7ZvPvYmBofLEjrcxWzTWU",
  "key10": "42RF7hi58yB9G7PuVxxeu6JXnAnDtmdDBpjoSY8yuRr7FwVjygM4VvaJG9f4woQsZvgkCcxcV8b8T8nr2dkiLZa5",
  "key11": "4zvRLdjrNbEYDsgVNvmBLvMtXwzucGizDhq9tcV2Us8B3UQEe59nPa3kiAa3Sdw8KGMhBo2JKCmuqPtRp59YBnRS",
  "key12": "5BSetWwFuDAUq5PZ4kWMsywJUDWwMzNGiK9Uu17p7xGM8d5vT5FiFL9UkdgNME1Php2e3AEJtAU4E5ShhWXHburA",
  "key13": "3Avhmf5nAsKMNPwD3Kq8cv7BthgNj6LbbhnStvcz2Z3LNRtyTyhNUV7PWw6bTHaGtyJXwY4T7qiSmWKDy3XUewqe",
  "key14": "5NMUP47rRiatSn4YtFRpY9apNaKiPR958CWqC39DLbQM8QeFwAyd1cwne1ZqwLWTy1va5snyiBZ9KzatCd7XH7mW",
  "key15": "cpPPF5BZVaNULihhsp7CxDZXePcf1DJHMunDjRH2EoFgtrhFrCVB6NEjg6vEGLXX9n3TS7DsVm1dkvZ5sngvZaL",
  "key16": "2ySLBbEnJtwjLvWfsbgyRioy6qATdFyJgP1sjUkKEGbfDYP4QfhN7gFZgvTW41sqseaP2Q9JrHXrntaqhaXzxBLt",
  "key17": "fUqCrveYoP4kBh5kYofMMuCJFEceWwMrjRQG4aH8QAzHk2XDxbEubB2FpXJtyoVybh3VAH9Jgy4Mm5Ne1e425hA",
  "key18": "3PBbDpoMQx8bqaqTLFEdqfJzm31Xk4axVuX4me5UFryS8hq3eNS6b9kEZYTd9QXe55Lu5xpokuX2q5Wn4kAGEh2p",
  "key19": "5U6fqfrkTCYxbb2B1W8KDfYGYRGGvSCxRCAgGMaWLESoVgdQRJ5zEUZgrA1KZcWgmNwSM5gSMU98UYQCwpSYtuRa",
  "key20": "4BK6g8T7gPrBcGM3opSnFVKE9hFbaqD8NzgUtMfv6s9zMFBMRbpPbtJTtzfpQBFqrcmZGRgytqjwYrPzjUNTPReC",
  "key21": "6c891E9FuVYseUJhRxVU6pvu43ZgpZBD4rAJVqr43gfjVWRuELDJzDHAiSRExNjDnfq3cbEcZZebT15i4BGDWK9",
  "key22": "4ggZreud9aw5GLRStAgn3WjnTj23H9hTwt1BJQeZ9VwP1xL4YD9DKxchjG1tuwkmfv8TcERgTE64LswM2n2iEjhC",
  "key23": "2a7i3j7rYd9567og3tZ7R33yrDBo2Vnpp7KqnM7pDT5qe7ghkx94cbYhXnWNSxMPphTojhDRiAz23ocHRYX1p6jF",
  "key24": "gRcJZb21bqFWstSK4NYKZAspUikEF1vbZcagyhGddg58m6ftQpfqqLwZZBMu1c3S98ks384NEYPADSrRxYt98of",
  "key25": "351oFNe6kwT9C6RqFSpep6GYaa1cyKUwJGQv4ACF89ZGDkxs2iizx56QpewmxkfGGpgHQZ5FZ4PWSe2RhYP1fzP5",
  "key26": "4gJ1r8QtXc9vor6BRn6XgdpsodD1vnF2xJjZR8xQ4sWjkqwQvgHFWNA9zt7fnnubht7sSF1L1w12o8pBFqWeoHzm",
  "key27": "WWw6aFLG25KomZTU1EBYyj1wgDNBqYsAJk55z1s6VCCwBYHbcYH75z6LkHG6twv2hqoZDe6kPMzTHoL5XyDwWFx",
  "key28": "2pjAGRCfpZgDZdT3oMFGh697yRiXLGrSLRFCXut3BFuxUn2TgkCU5KeDN9DugHHNaB9VYsKsYUfCtKEXUiKoqcTG",
  "key29": "5gytTFsfkdyT2L72agHHBs4Y4hgauhQHqXB76ZV2T7cJhJrLsEQmvnf9ZHueKJjFqF5voUBVEqnX5nGzS8TFRMyA",
  "key30": "3w3pH1Jj3VMM2w5LtESzLn621hUAzZomshF4d2RgEidiuzzcXF9PnD4HrXf4oyY2e4ZLYQypecBZdKfs495aUgM3",
  "key31": "475SyV5npaFphG11QcWku44bWPhCHmX4R4mN2CZGzAF2HkLo5A6kCkMfk1QNFrYEBZM86U1oSEbbgXNjXBVekxyV",
  "key32": "5eRbAVwq7iFJqKTiBmMaoqtxxDXCiZLqNHV3zTHNb8vi78NmpqLgozMa1AuLxRd76iuS3G4xqDwd6C8bdfZo4sY",
  "key33": "5AYAxq2WdcytYhj1FBNpLthwdpZwUdjHrg8NLGAApfMrf9n9yo4Z91hxoiCdey2iH8mBXqyQiZ3J7yvRCoMLhmcG",
  "key34": "5QRcK3k3jbKnuuZYSUovaYRtYGAeEAo8rzTcHCWCQhFwLS5MjHnyh52nobCR8QvkdeSWRBgsGdBnKegvdaPtpSni",
  "key35": "5QhVFw6DLc2aM7FeeQ4ifzCVxz5AmzDzFzJax5GL9KS76kQo7eRG5yhoRw84XgYjatxVcLb8oF6Q4Wvnv8RDJd5U",
  "key36": "4UvJ9yfizDiNJpr6eViwtUP9NSFrrKryPMix8SGF7RSwyNz1XbhRuxaVCkjdoJ7zZoG9PH1fnWpB92ZUtqYFNVhp",
  "key37": "4R4PXJr8AcJ95SJVfGEu5nS9yaGBefKJRRuwfeXEZ5R7ENkH5eVMoaz4GmAcNGubYD815bWqpu7cbwHYACBWoxdd",
  "key38": "r6MvPQjScXjH6JDAmgts9o6qaKP1R3BfzMRY4zF29VQriejYg5vAqesNnX4cjqUDGpPbsW4Utq5T7RGUwRWazcj",
  "key39": "5zitr36dgQuZ9YUKtp3fzDmnFs8TtCWPWzxD7Rhux9HTkeixtX6kkr3tDbgcZhfx5L4ZM36mjmaYjDnC6djyT7g8",
  "key40": "4aa9ouQZ9yKhYYQryNwPXTFiPbqapH9SoTuSkc2RW5VmfqEmhy3sNcJkWwsstkV2sqGX69ZtFjCxAUQcMa6h4uy7",
  "key41": "4djMctuxidwFAXmx5y98UYcpz3P5BQe7AiS3xDtW7eXBzjM9H9ntmfHZ3jjZngSg4Ah2xmyUdroCnT38oRC69Xee",
  "key42": "22w6yWq41NBdALWzssn8WES8gtrsaEnWRoFYmsnnf7eJn7whz8bLZvCPnZzonH9NszWYtkUdsriAT3eeGjnvqRKz",
  "key43": "oxzaDTGTZeQvkfAyureybkqdm9ePRAFz9N1Nj47GcvQ6sF8NeBzVMJXY1dtmWxDzEzpF2v1sdSStyRBsZMRSN1d",
  "key44": "34Tyts4TtduqRKZHxVXfMBXhDsws1mcdhFpMDeeuXswQC6UYT1Taa7yoFCgpBdxxquknjN7cHsbTnAL4C1kbqkKa",
  "key45": "UkH8JABma5djEkTgBA32vLr3tZ9ZVcLAEe3myayS3hTgm9TvJc1WPWtVmQUrHqjbLMMHD54cWsTyxgQZpkQJdrp",
  "key46": "5uGP31RavwQgUud9Zo51RvrCANqJct1773xuo6vYvWYMP6LCQGHcFaKrBvwdA4nGCiVoH4GB5bkgzh3wc8A7ohVj",
  "key47": "26cozREiBqeNsvnMyFoGtTG7L7JPHBe3vr156aMS9LcftmLbmPkZ7483mwXHzLRbr61SBDGgFd1NCWzSNPG68e6H"
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
