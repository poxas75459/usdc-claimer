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
    "3LSrTQpE9aLARTpG7ypnmqx7QRZhkUG29zsFCB1dn2N33JAYbE6iBD4hs8CFLRqz5MXcGcbKuGbSaCp5M39YWhE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVej6wfXoU9tKQ9Hjye3sM5RhF5EqJ98ciZRkKYhrFCeycj893brpfBwddT7dwKL7YdG4D4jbQverbceYYtLxzQ",
  "key1": "3JPNGJ8LVcCZVjTMd4S97omAoMSbtkNU1K8qQudrURgCFt4T2d2nWXnytL7EKbV1dwopVbaEWHxkfPHyXDafAhmz",
  "key2": "4UFZZZDRoxVCmRDThkZVKQmuLnposvqZguJTEYeg611hNsJ6XGm3BR7W8jiuAbE2TKFiMYTqySXR9JYytmoydMqZ",
  "key3": "3wNyyaHwDBa2n8hFpk5FyBZskKjbRJmQGWEp6sdDYENVjxfQq5zbFTfE8UXfrT2DcznkQEJUXw6kdD8LmnWoyACt",
  "key4": "55gg6Zk3KAsJJRN6CzS8yBwtoaDoN1AFT3PfKEu2SD153PvviY7xA4GX1qmRtV61EL3qFriHEuU8HSeqjiZPeLo6",
  "key5": "3U2VstAixKNFBiUJD8kBiJRiXxBWLENKy2J8pt4k3wFM71w4HxhDbPDsG4w6Py9fo365LJB8Jzptf7yzz51Xo8D4",
  "key6": "3aZRsN894VKug3vBaqgAJZwSndgRgbVAwqT9agZjcbrj8yLVjYDwxX7GFZLB6eBSJES249ZWuQKeBb2MFoETiPh3",
  "key7": "5XD5PYG4p6bN5wLosFEz4eMLq799nzKE1QcSW9jejDMZEg7vJ9C1ML92hn1Km5y3kF6hMGhoZXyc3s2EgppWZP4Z",
  "key8": "P4sgR3TfJMt82ndZ5356JcmqvK75EsBGCnxZbPBD5UMWioHWpRKqCYMuW3pqPMf7uAYHjhzoBEes3csNSzYtMtQ",
  "key9": "giXdwv35mcccDcFF29G9KLSFVbqGDPC5i88KwB55DbQiHzdbicGiHjZK8yQmV1S1drqB9dw5DcSgehpgLjtFaQ2",
  "key10": "2bxbNJkS2BYT2iU8btvApThyVJqqXkcjyZeGoPk9yh6gjPrVRo6L57d7DtsvpwhzLMpUREwrgGh822FSCWHLbnGB",
  "key11": "q1dxKcR4NghG5gn9NgRbpvxxM7QbFmU84jt5QS4F9h1u6GCLXGMkaitBR1mGpoEi4qFxDoXGaWkZNVepjTkkknB",
  "key12": "2CsJNy7fJYJosDJZJWPZUspq11gztT4VXT6wDMrcbfcAeqDgq7ToiRp8KfA8HR22Lw3nzTCtMhSfquiaWVmUmJSp",
  "key13": "2UJ8ocmfoc3PUXoxk7BhKPDQEze8FENwB7kjUUj8ReRTbFXA58VwKBZKjpTpy3hocp6NQNtopcp5GRMPYWiFCgdm",
  "key14": "2iG9Un1JLb3EwSNXpTAX7VesbHoi7XXo7vA8CGqYbALKAr5Q55garM3M1cbiv12FnkBrpDqG5mLGb5tfXsETAYe6",
  "key15": "4qYgccB23LAb13FNW2EUq4saj6Sc6UFK1NYJddNM3ugpfxyGwY4CUbAVGKfzevouLsfw71z3354FeJZU2Awgsy6g",
  "key16": "5SyUj2sfvgcWnebHW9isuinz5gKiwisKnjDf8msHqrugVsQL5wWZPaa6ZizNmXMGtk5wnhCNi8NqJKRFjZxFUDbM",
  "key17": "2woEVcRjyc7NvKFtdPzUSyrALvRGHDbEmcHXRThEGLXj1HX1P5zNEhLzoqAwQKV4PMkNatozj1uf2URNCcjtEBr5",
  "key18": "4tzgrDknPJNdcPckot5bL9khYhrKBMXzYTLEQUeqVumuATr19Dq45jEQtdCpU7gkHPnxqWqXjug8MueL3Nc1cNpp",
  "key19": "2rRyKWhtWuqwBYRLLHgtJu3G7aamZj4AHA6R6zM3AbG44kRDcLXeGVnSBwJd5mwLynTPYN14JDjxkWLSG11JkJ6G",
  "key20": "5CUf3NACP9pre79N7HZ11dd8Pczdvv1ntSQsEZSvNjMhYHBcxJbRvcNcPCbF7p6Mmx14ZvDKEgGKxXtvfHgDAgEB",
  "key21": "5fxRCbporamEh7msDxWrQGR4FeTCWCAPr4bcLuUX9RCtemt1up6CviR6B6wDTGj26efvssQUbaStBMVQe1y3eeu7",
  "key22": "2ug9twie1eKbPcXXRPReaKMLXDGeRQchrV8sFQ59rf9g2SXKmNAEc8EV5fJRsnDPBbsAmKxMat73BunbzXPMQyvQ",
  "key23": "2ntnSzMYLuT1psghSuvKqupPNafcAH1W6FUuJjRbZ9sufm4e4Wv5dS1nTvZu9pD8uznoCkzAPL4EimFf5rtrnnRf",
  "key24": "41GS5rxu5z1H9i1BDaaiFXeHLRscvUrmnhXcjtQgoDWd1NbFvGS2SzYXMZxH9qSPX4rYA5NueyVmBWJKsyEA41fA",
  "key25": "4JjVGTbrhCK3Qf3eDvVE35q7JijDvCuE6jZ9J3T87nRuHi9tKxCnUbuSjizJjtc1JZmWMyAkcu5VfSdYM3r6YZSv",
  "key26": "5DSE6a3TfRXfcj9JGArQnH4WVLUp6ZWosZBeHw9ZpvN5x5PP6v44UvAxMhqhjpKxYw75YVLFDxuoGmyrAGoHpBgd",
  "key27": "5KrhYo7c9okisCp12EUuNoE94wq3CNdBkj2FxsvapK9JdedmSCiAGdBdNdLwRWKupA1qakaPRsvTn61taqYDJWkJ",
  "key28": "3kVHo9VA5xU15J5nbnDjGCNUktoJdSnCwV3UvVAz4XzUkSsDWVxN2DEXJHhZERondNXCMTWBVBTdeeoBCiuZ4xE6",
  "key29": "2EgZfuCEq4oVSCyXSNiBBzSGHUugRJBUS2oxpobeaNe6Gbur8JhXz815j3A1mJ8QnDvNPAZhqcFZD8FLUVXaohfm",
  "key30": "4KYDJHRgSZBzusrvHsoHXr4Ay7b6if57pKGdJDZpcq14BaiNaLX2f5WP5Ji1YfUFLDesD4pYEcbHQQNuFYTURbP7",
  "key31": "325xEeHwn17kbU2WTraHfPiArjz1CtVYmgL3yqnhcJd3cFPpJLJL4QQHvfyyiwsTyxPXPwGea1yChcFj2SwAVvEq",
  "key32": "3ayGazfRkBqHME7djEnFQd5mfb8ub5Q9CCDVXficWz3BrSTw7VVcRytEwu9rDjggY4RWjufqeuLZ8CsBLYUrWBTi"
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
