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
    "VuueYoyC2frRLCogHSjTe1PznXKPtandEEnVCp3oGk2j8xvp5qH1dV6N85di6N9n9dbWA6pYuBCLgjFUF2T68fT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXCuYcC32YJNeE82r2xon5TCeXG3oVBsKwbycwDosbbhE2cBTtLmsWdfzTmc4qsm3F3Cu7jcQf9bvea7rwoSfXS",
  "key1": "32jqJnEZvZNsTb3rFAbvDC9SyJoPn4UMo1SJmPFfV96rAcpx5XFCTh5mjB34zejuDdN8UG9zJ2zZ8XFg12v2bxub",
  "key2": "K2Y3zmguq9WmApHjYg7amTH2e6mox4nNqvQcbMXuSS7584JGMJLVjDPGr9S3J63dWYgjRBTvQ2e2bix5QJdsBDR",
  "key3": "gQWYsZ92yhCC2n8W7d7YVRM2iN8uTXzBik5LfquKeTCjDxuJYHJCepuReSDY8TdZ4fSYynyZKMvuFHBhuaGHPWr",
  "key4": "2FcRexhpsFanqHhzWjspNCmqFfWTLE8jZb2S2KczU1L8tVW7mQACZ2ijEH5YEQb6XEhavrE2i7vdVyQYHhWHZhDt",
  "key5": "4niFhcSzQeuSHqF7kaX5QQN1oqmVtCXr4iF6QBsp85iD3BXvmFLZWtBTcGbxKaKxpUmcGTEuqhKtdRnyuHiSb5a3",
  "key6": "5iycFE2hSzHDPszZTLTZqmecw3MkTby6vXRzY3vethc3KEbks1bHzezdSVk7pXw84QJWvcQWm1Rs9wL6UtTVKJL9",
  "key7": "5R5dkeG5WM1bMo65Lt1RLM2Zr6UaP6QkPq46Frtw1VHo4RrYcGHVEG6dzDWJ8EtEnZjMLHY8DriHuA9VMq3sEDC7",
  "key8": "2RFCHoAXJzJ6VEB6XNah6RSFmcrPTsCtwR1fFMSWX1HLrC2BMhXNHtfdQ2Dkc7pP4rxyKVyF86L9ytuNhsJQ5yHN",
  "key9": "4SxCvq6YDFU95ywV2Zqo4Ja4XQ46d9YSTZLZrN7Y3eXhkaWzYsnRS8J5oNr9He7xurnr1nqxwTus6DXbq8WkDMYc",
  "key10": "4F9WCsyNFd11SGBnf1Fj7qthoSZycQA4ZNTzhZU8XwhkRQg7iVjhuLHpRrhfRzLKw6mCiBCgKzy1N1EaeT7WWjUo",
  "key11": "4psUoi3RpazNHNZ6KpAJsbLv9YysEDJ9S1mJLUmu7YqoMAXGTBMCdT57tvpkGagJNFmNEJfiLURum7mWP6PkFvic",
  "key12": "4MCyCEmCfHcRiz7BCqAyvtF3vpBYbKrrQFmYCWAzMBVykSccTNh6vQgw56xyQTwu5eK4E4CpKQiECrreguBKmC5c",
  "key13": "2ZxtB3i8aYo8k2LMzRaNKtYVxMgQ3Exz8n3SZNJEAbams7D3Y3WzJD171BCKZcszRRtJJWNtYnaASoyA5S5u3WCa",
  "key14": "4mmbn2bLU8oGhQ3S4scfHuHJ6rZ6tm8cPGU5AtY9LxEbNcmcGPpBmk2tFsR8FZBEioKYGPtQTYXoNxSvmQ5PBvho",
  "key15": "4dKk45yL1Sss2h2UabUoEgYkK6oQg47ebybjtoPWAV3SYtU1j1Yr2sUEvo6abY6scdEVkW1kuuRisbydyyggohg2",
  "key16": "2HfwqNbaNc1DA52QgRcA7F5A1yvenCMtork83x9GcqAog4vwra3R9NszCGZzhshuTN8WSCKaMnH8igvCZyXhmxPo",
  "key17": "3NHYd4oAUj71DKZeMkewxUDwGhDPKBiMvgUHcGfrf792aoAnUc4bxPCxCHbpFGN5a9yD3ZR7embbfMpkWJVDy5dM",
  "key18": "4Ms2joJN3eJoQ9qZ2kpV9t9kVXeZrZbYXQ5dwbC9o4YAUqCzTvaCR21XEsYY39EPbBdY1WtTSDAXZwKAndCgtiTQ",
  "key19": "2hP2119unUUcHL8V2tSCqAsUfYp9Bu5VTF1dR1yroEgC1YdsFis3J8NzAV4qpJaGQfKhribcDahjbf7DUFJNdhCK",
  "key20": "43qR1r8AErZVcfLqYWVLVCzgc71zWFHcfxRAdzcwS67h5nqpQpHm5wLL39AFNVGMxt4aYa3jrPu4LTWMsXdQ2hFB",
  "key21": "4XMAVgFdLZdyF2wAmt2Rwpry8YpcbFZxsgbFp2MvgZnjvBBz8HzH8qonBrVZnF85e73D594UbKb4LnrAeXntQwdY",
  "key22": "4UXvFkWvjVEBAa2t2ZjMQMTypq6Wr8JyJTzym371yYi3CwbKXYdYBNwuTbVcci8tpkdcWCDmiELCTtoFeGqqQv2X",
  "key23": "3TD4CFc1Xx1VFqbhi8QECWU9bHrJAafkKYiv93BkSGQJV44K6x2vuuXqwJgK9RMmBiRnQDqNt2tKcHvMBLRE16t7",
  "key24": "27uueaST4aWabXs2ta2jMRbq4rVwsb8RKY7guJHLX6qPY2J3ZxoBQrpwEKMf32U4ErqTgLG2MJPyZg5pcw9D6kmV",
  "key25": "5DhdzgDMkhXQom8k8sKuSq1W56zazwzPhgp7jutbF82CgEUrVpMWrZFtzSzQ8hkN3DBackzpPLiEZ88myHd9Fevv",
  "key26": "ccFQCukuVGv2zQui6cfGPKkjyfUKQ4APrUsKfv3aHztgVa4SFfXH45BFrkhCfh1Kqk4eqYAmSCKy9JypaphNXGy",
  "key27": "9EmFyiVk9vHRugtfW35gaCEynRU9bk6A8JgTa3y4FQ2WkAkQetRkTvaLFeXYyGKwxXKAbcPDo2m9kg94dc4uqUu",
  "key28": "3Yh8MEYSsv6YHwRr3yJU8NkBy8x1SCujt7gjE3B2PqwaBfmeVNB2mQzkGfkdToFqXLt5RfeopfJNgnYNPmbFgWQg",
  "key29": "66Ufq5ssNBb6TV8Y2LyU8EVXo9TxWjt4aKDBWETmpVca2TmhUJK1JBT3xbjmXsyTo8fo3x77iB9cqfaMm8uQPW3g",
  "key30": "3DZU2V6BZAk5meKEpWZoFG6Yz6Xuq2N1f2X12gcxiW3VQDp41dgWtAEc5fput6beJTsaYkQ5haYRbgFcuAa7dCq3",
  "key31": "2j3o8cmBFQxYh2pSBfhtCryqdjij1o864fFUQqBoCEpGSoiAZy7Jp6ZMEaLFxJX4XJwZRbnJYJ8LgMCHkh7pwntV",
  "key32": "4RJXDuGhGdZQgNGMp3NiF2QvnuxbvjbNVtcgWCKmDLLxgoMV5GFCFfJRiN5RLf4aCSwUecYgfLFFeEbLPtBrrsEW",
  "key33": "tdw9cjYGcgpgwsT2tsJCX4vVE9cVzmWmrZagbUWBTCcvagkXJGrgpnkuMS9ojFZdW7EBaMVuFQDcQu8U4Dx9a4H",
  "key34": "gby3QVfABzBNvv4d34vt4dYdnx21WYg1K3oyC6RCFnY2H1P4P9qY77qfExA5uSY3KkPARwzNvnnUwUWfLMTcWDc",
  "key35": "3gRLT4YrXA6fg8xRCY7UMdKryabtbfkg6scZEzJrA9fPq77iJ6wYs9QLvniBaFC2nCURxDnXYXTfaatSC4bDN8FG",
  "key36": "3rYVLF8MqeTDjuD81MfHxijijwrU5mxQ5X2myGSDHgnGGUrMryKCWH4djFE4T6jtJSS2qBe9zFQ4Asdu3mCUwz22",
  "key37": "2pEuj8j3pUQDZ2fBrA2EH7TB512mAX2TkfyVpumZaChxp2oeNAYEHhTU8gEQRmsYeZ3NQX1NghDKNEV2o8mnMtm4",
  "key38": "YWHbccU47evqpUC26n2ravjq7SXE9QFqjcbWL1F62ZRT5DN5eojQZUU1Mkn7fbyjfdBjjgVqG1ct95MUSKf1uAT",
  "key39": "2WwU2AmmhpFF7uEwmUgEgcJWtq5CyKVD3DbPdi1uVZLZpMx9J7jwvLiGfxU3SRP3ihhYEKubiTzqtqnmj2TUhMo1",
  "key40": "4Pi6H5D3dehhWvVLC6Pr2ToHYZABK47p5CxXgiaoaPavFVpEhvSzJCYsH5YKcfRJKVPcf6ayeDNtMt8Gcd1uQJk9",
  "key41": "4wqB6bsh67MbPHf8vuN3NoxhJ6TBedbva297zn8zbrzBBbfU4RL2Z35VtpJykAHCA14N9udZGKz9nbpd7it1oRbi",
  "key42": "5sdMb2xq9q3PNDv8aW1tdPn7JdWrLoTumh9uCMRkLPxHdtb8QT6CC9vDzTm9UiVWQj46NGWrD2xWJN6mgeTfNrYq",
  "key43": "Gmp9dpstj9dUVugYXWAmSkoGYrk7wbbgHYi1u8Vjhk6KqtF4DR7cizeVkAg6yX2iXw7gfDcwBgfpXueCi9PZqrH"
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
