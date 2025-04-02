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
    "319opApVhhgwjb9dbUGhTGRdz49No2wn1qnwJbqT3WMbf2k1J6G4NJnxtLPy54APbwCxEPUnDdhfYPTYRRrTqnsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34uePRc9o8ATrUr5AUdLr6j5nKDjG3w7fdACVsXRDwv4pnsXAJDHyUJL92HGCAgeTifWozQ8YngVKUfmEuZT2kRQ",
  "key1": "5dFDqP8G3DksKW8vuVX3x7osKTkDsKdmtrq56t5JNgwsKyUpNEWt2S1RyFdkScdxiXtA5E11m8eBKUViC1uywvV7",
  "key2": "3Y7uTiS7bbAaENtcHoNtMvB6XDz9s9yE3saUGNqerDHeoaVfC6wX7qoY4cVZ6DoD9sminkCRwDkb8JRtnPgthjvs",
  "key3": "T7AQ4PmDLBBPL9YPAxeMx2nZNnjkEhCdGniUHDrxXdBkotrsEqkyjFcg1UoZg9LQYumL3FKJLGW9MJJep1jLuLm",
  "key4": "5HoaGgaFh7aHq932mj4pgmQjHkYSbzGVpqc2aoYZtQJwGSzs5AqTWn1EoyW4yQCaNuF4EVL1ffPu6XJKdsPmKX6y",
  "key5": "5LagLdhmiZLcpgzMeoiv1Mun9EAyYMDgTs73sarTbJ1iZ7GSAewcpD3c6xExtbQg45zQ6j9eq8DkmiTsMNWgANBZ",
  "key6": "374DqmBE3mH3FWFyXbo5RmJcGD4KjoHWr22qX38Dya58wCRxirKHSNVF3kAYxTvRd51Pzexh1dvt7yeRYyPmqLRL",
  "key7": "3f6Jd7LGiuynaQmSTKWY6JRu8BbWb57efEMPxBjay25wCbwqjNBPvTTceUc9Yrok9Kx79DYLWerPFidyejmYxd7Q",
  "key8": "4rBcF2ErQyZxbTDWocKa9aCjFzH2jjynX541qr2Shv6JTSGZooULDEYeM6MxgjePb7ZGmNAn56LxZcRNWTzmz3Ta",
  "key9": "61UNytDpDWzHM1TY5hfM556PvWakZPvosmRuPPqw9yQgwmR7xpJczg3y3VxFPKNSDyare7REJN4q2CSMcczWjaWu",
  "key10": "3uCMyEJzQyepsCHynYxR9AQHhD29EP72rgUqvGgmkdcqqaqRuXAxFgRoW2qQKdfapNLkKJdeZxLBNtQYScxjFu4E",
  "key11": "43hPnu7ZnfQMccdTcpSe7euAYcK8UdhMHSgXVLSdhicjzZfyTAhgqJg4UzCWyKhFKxh26oGDxhuhUdjmQzkQxZtk",
  "key12": "4m5TkbNEXcWSMnZhTMW4x89k7Vgqt5iCwqUxnmeGvb2pDzMbFuNtudoCgiNKhsirNsqWicuNaRvaXCJVrjiCkibY",
  "key13": "fpdtt4gib96kVZFVCD4TwoY6s1bE9PLUeWE4K4uZTPcHuUVVQvcbezPpsQkDNrsophKMwMWmqaP66FG1guyedbZ",
  "key14": "4XUSjfTr3ePo9UGqaimoY6oARna2nfG85jpYdw1fDzqeJNG3EuautN5g2pVLVqozJQwFYvD9Au85DaW3F1Tg1evv",
  "key15": "2NguENyBX1UNg4fFcLUnoSPBFif1BNtHbN9PCzZMmbdaf7fVkGSfVUSqGzRadxVcj8ifL6DHjpLLNtQ2RXRYY5ah",
  "key16": "4dGQ6WXL7T8uxNGk23kFZEymdCagZYVWBP125WUnwRptcMqdr6YAqoyz7kLtNdrgoo3FTY35GRkBMQSXA9zn9Hzb",
  "key17": "5sYUDa9Q6jQ4D5LK1jTBcMQGt5B7AHvVb2ZzfxD79uQVkQyDegVJ5JaDbSyqkHmJPdaG9m7D2cCMCoZGWK3Lc5jb",
  "key18": "3ZPyDz1Q4hdrsyM9mesAZDYRheepLN5XRbrKUTF94hhFQo1R98p9qdETERUX594VwNcnfoPhCpUT8P9cHQNGFoPV",
  "key19": "SKeDJm94wWfrfn6hLeU2YNr3CFiwNnunuLzmZC7b4v4iA2utn9YRiHC49RwmGyZ8ZwDvFbhYFmBPLLqEXRJhu83",
  "key20": "4NwgB2BGXYTBxkVXTaq14mSmUc1ePuJf2tAqN7ZZ9Y963jG9jdYwVTTsLFAX6ZH9Tvn3PAJuBQwDuJUTz8DYfYWp",
  "key21": "5AvvJU9NSjVA6P8gqSy9XBk7tPvJ8F6d2PVYTinFSyk7MXU6SZK1ALjMW2Vt5sSTr3Gf3N3pyeSCW6FCJuz6SMBr",
  "key22": "5qagpXKtKs6zf4LbcZgWP9HgJM47VQGkc15957u94dwLhpjCDgrEeE6CVucR8SzkaH5rax3HxCdVZDXFRaNvzSfF",
  "key23": "4zGQBMmviBKbcv6xAT3f4MELRpb6g7useGxcviB9vVTGp7nJmB4TMgxKn26UWJoJnHgw3jSTZ3YhwmJ78Gyh1qJU",
  "key24": "2cscCR73JFEPEJHBnUoaWzpnPMiDGjLHFZDVNAwYiMQAkD9sDWjAtn2X8wwDY7ZzrKAQyANX1uvvFG63NsUbpS8D",
  "key25": "4MsomZHE4FszGwCbPYWCNFTQf1ZoTindUNKXv6NU8nsK7Yo2rNj9RHLV3oVTJdqxFUZUscPNqo7SrqXUhV4wCSqS",
  "key26": "5gprpJ1UHCPeao6sXLpK2Gq9Wjo3Za891FwaqmZxJk8mCmXfz43MvucApmJNmXy97WzdZn8Ec38oxtGqKePRgdfi",
  "key27": "37F8aDRtezxB93pgndT6CBYESZXVw9sRvbDhgbJfTxjywXQSLhJmoddBdCcQeVRuR5dcSYhfQcwhfqezpQ9HcfTr",
  "key28": "Lz4Kw3mdmmszDHiVaLWbWPqTmsNHBK5m75cypRif6oc1ihNkzW99XY4Vwt16aQnTmonozDJSn8fdTciSP5gSvty",
  "key29": "yFoUaTUPJDMNMJde4cvvGDY6oSjVvmrAhmBofxoSQRNRn8C64YXSZPmZv4a5K6J9veD4eBfhiGMjZ3Q4VX9KbSp",
  "key30": "2hF27j6doAXJ7qRjFWubtfZno9eQDkGi7Pr926BMNdxSyVwdBqeSEy7ddbENch2LBSkURSDFnN8JBYtFGUB1Cn7e",
  "key31": "3CEKzDMCvMT2UkrJdAUUr4gcuqL668edPYWgKj5qPW57ecrNX8s9xeNJUnTG2z9j8JMmM1qVsNAy81XZpZf5hxUq",
  "key32": "5iKxhNiRtqmSPSK6LTtxPqibaXGH8mtB4DQUpgArVqQ8e2MQpRSdGTuEtgJnu3GQvtaJy5QpuftHcDYfZE1H1rtC",
  "key33": "5k5PfCMBsJqJY5yc6Y5Gw1T2sc3EALuhQsVRRELsyLXYricFeKdmd2v2rFjcHp9TjSerZrmB8SPzAUyc4WUtSKG3",
  "key34": "L79M2edvr648hJ2LAKxUuLNP4jnRBinVgqSqzhsxWsKNjNHk2bmkV5U4nUyraFJaPpybKPWUTALD5k4UFxbkJ9M",
  "key35": "64XSWXnw2TMjMiu2PtW6tP9eWGgCRC2wPM7ikpy5ES37Gx5FT7SgwcLVTmMCsKbWsWjwJUMXNgM79GQ3bxrCyBH3",
  "key36": "B8i9z4GdV4MPS6UVuupP8jLTmqdfSmPEHpRgQ3SrJmasHzs3NxL8So48xVEqreyDGgZ4tQ3MYzzEfNDcM8hr6vJ",
  "key37": "hh4PysqUoGuPSE4R646Jzpc7Bm8c1SEV6ToW6112fKhpMDWkd1B2AbTFW3bNSHqEAuECTaUrjmwvBDW2XW5C3um",
  "key38": "5SFXba9t4fgNnRwkuYJanBTUFqYgcq4VuU3jhDc11bACHtUnLQexmGfEM5X6DiZcQEKvouqi8oDeL3sy9XPMrHF9",
  "key39": "5bJrYnMjT2Cm5aTjSoGib83r8Vm5ct9Fc1ihKaM3F7qzCYqUg8UPhEEtNGW4iA2JkYpo2WNvpQ8teZBR3ippJXvL",
  "key40": "3uiZJij63HE99k66ifwzcogy2LwVztiqKp7NDwVcqBnaa43vH8i5Xo4nU5PutFt227Z1LA1EFmTAAhyiB83xsida",
  "key41": "2AZxzG6zTnYoQXC6wCvhfpPmRMVMqc9uZ99oyzMxNoWGjSt7sX3FxzyBpbGkDFQrke5qsMSCPfBD26xH3sCZeZ3F",
  "key42": "Z27AfCu56kxRxDma9qib3uW58Z9QtpvxXHCqAF4EnhjjiQFTMJij4XX4jusHcmt7EYVMvATswSVYaivazn5rJac",
  "key43": "2g4hQRbKpVgDetZZvzitZM4ee65vAH6QEKorLXPxs6ddJ3wCUxQszxGQSd7MDMRUcCYhzhGhdZdrajDf5LMc14gv",
  "key44": "ZPUofhxDmkmieHFVWoNdzwYWDV78Umo6W3ZZ3e5Zdgmq955uq97Rpo9Cx8kKSLwdKvrKxJeeK3dhot5mz5YZF98",
  "key45": "QRjJYyJKrSJGVLw4RpDRV1YxnK7JUwcn2eYtNWxHTVauoqwDTrBangDa5J3YYpdzByGYdQBL1eXU5KNq2YLqYzY"
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
