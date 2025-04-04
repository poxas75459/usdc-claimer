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
    "NqTffrewutSmo9kEuvcWZnh15sBJbaNASLTuMGjEanorvtmqJL3Tinz7UtboYHKQWAaDtoskBCv3R1MMee771VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HzyvSdngzmxcNNC3bCRyQGiEisrg1ijXgKeKcRCxuMvULRDHqR3b6TKFbXtovQKTEWf1LMwHM7JCG6nP2b81Fdi",
  "key1": "5G5izDRvVKXjfPoFWJBqe3rkrXbMKwmpMLkvH1ATpcRQgeo8uVRiUdEvU7iCQxGyDiQFXCfiMVcFem3jL4ctWDvv",
  "key2": "5DdTGMMkqdRgaB5qEGzzaKjrQzFZ4pcmEy8UeTWYAnsDGaUMHXG6mYL6VWCXnR6o7n1Fs81xGQNwUiMjRmANzs4r",
  "key3": "wMbJb9m8Pw7PR6H6RR4pGCuUBTHKCByBPMD5N13n2vqUx1GvUmH95nRGhTf1tbVNxYVFx6RwpfogK738Esr4oJ9",
  "key4": "4XZvigiqy17X3NnLVXRixpes2NJt9mvbJQUhQYz2BYJNMeF1JsmXT3eiJb1qiScFJoS37aN5qbKJybTA8xGYnH86",
  "key5": "3nWw9NfpwwpJxVGyeFuRzAzsoHina6qRYa7Gh6WXRnRUS6mZorBNxBbn1N7BRjHbh29JvNiwSisnXNpjkGi9Lmsr",
  "key6": "2GEC33GTG7u1NbBX7BnnAhKJhctNrE1Ks3Bu4hi2koBoQb9osLToPHoRCfhMC8SNfvt7Epi9Xn9SBR6a6nRWLyk8",
  "key7": "4jqLU4AqTpNH2316yL2avKPAAGeheLUHKPrBLocDaUJZJUY8jHdxuzNWujxqo77bc1VCyeRodDUoNqBRxG96YAqh",
  "key8": "5VfREmiPEup5ZMKkvLKDe4ZVC9diq9jfjcJRXfsA4eXBURhCxBYeZgPBBhtMgXQhY17L35XaRbqeVvfs9stuiY45",
  "key9": "3if28AzpHgq5xXuwKdr1p6yqAhWK2VVvdgY7D4QFb3t9vWPt1zCujRs3wSSZGATB6qjHGQkFSkZRD5HugBbYHocx",
  "key10": "vJzmV7DYh911j8DuheDwQr46JSV9nXonK227k3QUBdELq1aETb9He4c5AoTG4oNtVmcEbg3YKhKJ2hX6YUZUwA6",
  "key11": "iUQvtaLvJAANtLbnBFqKhKWDBqxwiWSXemnGSn5PYdAgimyLzgavH7QS6x7953Cg3EowP1ccWRp192th6NvJExP",
  "key12": "29pZnKwh5qneUS1reV7xszLPGaExrZRUraxszau7Vi1i7ix5pSk4tMJdT3isuiUN5uoKM9vL9JGATy9qPSMev5bb",
  "key13": "2e6xpufSERXxXgu1fHNhLezpMZnVFN3amEjNDQd4NwoB6gNqJsjBzQtxhMVGhab4jd7phmSy6VUWHm5Z2ewDborn",
  "key14": "3hAhvtLmLr8Whe2orC11ASKJaT4NDBCWsAmGCyYjqztUoZNpMyf2hBBZPLFGrtbEM87u8vTK5XF4bE4NXmDqJQ37",
  "key15": "9WtTpzqpZZxphhKXBsDFL6aHdt63xrUQDn1hFiajfHL6YaibscEKJKFMDRYTsh9ANdr1cU3prXvsL3pgGfWpFin",
  "key16": "4Kq8PURn52HZSQGoSR8yu5mazw9qQSKZz9sy4c2oCmZmYJnxJcmGfcM9HnuGYpPeAoVegteURChJtgixp1fawMXy",
  "key17": "3R8h5YnoFJPZN6a4SwvKvfmfoSzK6qLHTqRbS6ZwXDNCahs3n28yiDBUGqBxYVyPqX2JdmXbPJFJ6V4ouRpaCUex",
  "key18": "417ZH5MeRjLT1NP62GtzaSjJmsc1LnARDFr69fVoWKe4aJdfeGhPdUMTvAGu7YTi88CwESDVQYxhHVDPyo3kdvKD",
  "key19": "2L6pfwYs7aT1ddhU8WdwfVGNL39vEpR15UpSkV6fgqMrzWHn76gGTTp1DdxqgtRi7FznGpm6fc2riFzhDjvqBAxt",
  "key20": "25x4YTNf5AjfqjjjREterqfaBxWGKZ7yX3mNGjuctArN6KjgCw9fM92PmKAEkMv1voA3bEbtwLhuvX6nZ7qLQkgR",
  "key21": "22duWxjkUni5PaVbo5P1RzKwGEYBsjxMeLg4G5YQV1P2ZgqCopeSLzZgMao6gqhWArqBws5wuT5G5488CpG66kgK",
  "key22": "5oodq81dykwXbabqJ8dzbtWa4kNCKptqdB5UqzVaQzVbnVJ1PvTyagygMNAuPnnfNvRpKxXEHm46FsPomRURH7Ah",
  "key23": "4Aqo9njQhKUGw15fAMDhFrBR1vUFSRQwLv5AyKTjjCBWGWnMfjs6QtfWqG65W2VRm3qfm7QLHc8PpQ5dkK4TSD72",
  "key24": "5Kuz9s6pc3ZAuh1ZvU3h6vr9wohjVxQs1Tys6V6xpggttfCFSyyxzJvK6G97RNqD5dwTvtmVajCQRaRBj3yxqVLz",
  "key25": "3UnyR1qtHXcFKZQwqWbevVmgV3MSN4FUaXBgjyabqsajMTnPEbbi6s6tsA4qc7aqbv4xcaNoC28f3dWNzVYcZJ1P",
  "key26": "2CXoHFutXGLXKcoqf8b9inYjptBJv4yXvBJLiBwUhV8gPRb9CmYwY7kjFRxyrTfDMcRrsbYibBoWP1qKNHXNmwo",
  "key27": "3FCCJeWzUR8Q6y462zu8eaGAEJQa2vz5jyuYXy8eDK6dzvEwpmwfGnkw9vpY1HzQmG46RNYorpxJzKcB4zYY34nj",
  "key28": "3KbruGqeNp5dozMX8LW4YuLxkV4WeiRG7x4RzsofRps9y9nkCMNoJfttp33kGheJR4S4R4Lvi3KeHYvWffGne7aE",
  "key29": "2VGmGL18DeUzy24hMho8MPbFczcRKe65rhE5nMdhJJjJ9Y67mSQ2q3UtMjbcprjhXrUB7ujLaRrcdc2TuYFne3x9",
  "key30": "2p7J9rfjwzysi9FUaVhzobd4BFoiGuW6AWaWegUA2xfDue5U1qvoVG1iv92NZ9gdw5PCwQuSzPSSXzLSCaGvHrR4",
  "key31": "4ecU5wgipW8qPAsrwSFKT2CyKW4tw6VmC2q2L8BDrjTJNgFh3KPeFLzkPGCmWV5EMsd2WCcgzm5aGFEKKyqVvsmp",
  "key32": "4mg6vmAjVwJoPxgtgGfikBXimzJ7ug4Xc31sjYodm4x5keA1ERpSg3MSea8paRMWt3q1NjpQQj7tRziGKQJRie3E",
  "key33": "3XD9yt6UwZuiNeicNxtyd1Xtd8GBQU2HphPbcdcVaHU4quZXwK6Ddnpfg5DFh3RScuABHTQJVAP33bkK9jiMTPYJ",
  "key34": "p9au97ntGfPyLrUdQxuNgYrTRszUdHZMoMgKNrRfLMVp6CJCHGkMitEhHAtK3udBBtcXtbtVvCHAgSZcpSPXg1y",
  "key35": "3SsWDXQZep2kNigtZDAYmDogWmEeHh52hTSgbnguLpukq67gZrXmAB3qrVvRZ3QyHiHykUw93amB4tPnUDHru5jY",
  "key36": "5sXjV9N9Ls8SnAhwNP3HxBgdNi4yxnogTHvmxxeAj1meqdGuGg9y6XNkkDmfibxvqxxt1dgYxLMwNNfbrDLwseqT",
  "key37": "HrdW6on1RPwNY6TrxxiojcuRP6Mt4hULp5SVDYmTW7wWQ2KCEPr4LsCvPHrruZgynsBdJYxS3CPyJWcJNoM83JP",
  "key38": "5d2qGt2mfN6PCmnnDXnLd3HjHYTjpTnZfFMKiiBx7p8PejumnzMirjNHuQLYQX4guVVRF3ML1YC1w47qJhpGHo1m",
  "key39": "2CmzrRfhcNeRevRJvom98mCDqyRvNCZx4CyGLrvbNqsdaYNdwdaPnrSGCcHmGmJ9bP2WuQtE9S67uk2AS8D4kfGF",
  "key40": "2wUQZ7d69qqvdLV5rDetYMgoEgYKQneGtGLvodcE4gcE24YMJjjpc5GCwyo4b1xE2P8tmgYfonZ4H3BhvrX5LFh3",
  "key41": "SZTb922dQJdAurcWx9ztajsgwRUbb9cWwvYpbDz7qiNKijMaUvnfGdzGjtWtMBrFuoC8naqRkLxYpQc7yaNv1M3",
  "key42": "4ULbC5jt4qWkSNB8Goow9ku22x7bSCT3rHM1hmhKuvxKEESAdH7XjrE12rm5n571d5wLxmbmEhkEgEYhpcBcATTp",
  "key43": "3vzEBxXcSnsfXhR5Y1DJ1J3ECSssY28pQgo2Dy5uXtRFvXN7AEDmD9nT6XHwefV2YPvbbBqeY6FFw9YSFJuASjMJ",
  "key44": "2den6Fj8DEcFmGwR5W43ZhTDTRTNFGr9c8aj71mVJnxBmvyxtR9tus59DX3toHQxcK9MRob257S5ELvBiTaLhBEW",
  "key45": "49Y9DvW41r5odPZVy27SFCLuCr3bu5vF8Cuu8Q1N7q22kJXYezmDujAdgFXhi8jK3qGnAjuXMjywwvNo6Jpq9YWS",
  "key46": "3we83dhpKKvP6df1opPTNM5NeQh34zRCYLrQoto2y6i8dYsitG93P6bikXkUsoZqgcSjwsXjfYtY7jnroSMSssjy"
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
