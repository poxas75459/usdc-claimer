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
    "3zEK2pLBvGquiSwiKzdsD5cLv3RHASz3tYvQWfmvmDjbLGUA6VN48jmwJmKefXp8FyCzBrf5FLuF19pRzy5teXao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PR87KtJYFKfwQCnNqnqVFBcVodnrn7wBUHNEZViRVfTfsnLLVsQkx1dLYanndKy2t1fMLfvEkjmN6emZQPCvvZY",
  "key1": "5XUfpSmYayWin6opwkHYeFSc1erHYB6cHuhkmiBS62Jfb8mDbxqWJgkrcvWHzFQEJ3BCuBXeKPwQiCsjbsduptVN",
  "key2": "KtcfFyFquBsPNjtT9wjAWHxbdgVAFsvju5gvLyn4QH5hR9P9qpgn4q5aiFDhwkszD4ZDukKiJjezMRyQZNvCdJE",
  "key3": "3xY1rtkFabdW9CdQXMDZ7gnMKPPRQqurbUNRcjYKj4e2yBzEYEVmtzGhfokG9cayVSYw81XbMfrmNEkcdRzrQyek",
  "key4": "NdGpLwcKrYZVr2jK5w27RcM3JLN8pYUNPvfRx6wVfaBP7oyJ76cFCoHhpSh4Rs9m8YZGpFwApzQ52cxwT2yZjfR",
  "key5": "32ecEcwpK6eE1LcD1d9We2E2q3WwFMNvU5mypNQ7uQ7JuQJQtoMoEGuz3Kayio5VAQ8NadrRcSonVvb7BSLfmXHx",
  "key6": "64BqbNHhLakFFSAsg4M4TrnB2z2SeeESFQBgDPH3JBZxq6SuAzDQJ4dLS1G75q87iYYfWkwqVudjntz5fuZ52bRT",
  "key7": "JraraDNCdETv2AxSuqHTd3GAEWjwAVb7xUKtGYp3MpgQ46iUPnynraCHSKSbFQUv9bBhaop6q3rhqrs2kmMdoUS",
  "key8": "LnKZF1s43pxQb8hVSCWXGnGD9SxdwxiGKRQUSYLDAGidAUtCHoM5HokRUG1wrMLzak92nJPKUEVtLkdaHFnLGDX",
  "key9": "bibQDyhyi6ptKSQyW5CQ8SudvPM5f4ACuFfMEvtE74ooYYR7EeJVNgkmqSqpUovQfypn5hfPvRkscrgvb9ptKop",
  "key10": "2ZTnvwr5bDFKYjsLwA7hB4SuddN15B6bkzLp7q7EGopvC4bsRz9zcoJYzfspUUE5tAn7yKjMFuxTZZze7i9fxrzy",
  "key11": "5iGqPHAa5sr3xunVyBS12xzH2zE3cmQ53gYQCQ5bmvnW9tPJ45mUQQB8PSn6ZDuhYBCWWs4FmvZLtFMFworkDmwy",
  "key12": "5hti9AoSC75iGkm4yBdFQ5wojhuYmgnz1CgtX8vBck35SuMqLoCDkDBcjSZZ92bqG9zqErM4rYnmAuqZYS2naUft",
  "key13": "3tusSJqzZ1ecMioa4N6FFnSa6ubWXsAtY8Pe5sRHRJtNdmaTNwGtD9UsZYcmi9JFP5pic5Gz4fPERfPVf6CybMvE",
  "key14": "5MeJWUcmYE1CAj4tiGwwJcyKxpZDCUKoTvRcxPyaEPdPQq1TT7CouAefEsofc1KW81wat6WFYgHpWALCNxvGCG5o",
  "key15": "4Xyg1sLpo43GEwursTEm2bhpvvFapenja9c9gAydAwENZVapPJHqNPiNiCsZDc4yoSoVJi44nSAzMqDRtB6av8KX",
  "key16": "Vun7rjfzkyPbiM4yD3WnmDe1VmYEU6eqGfmbYghUC64vCzFd8RLXWnyiNHhXnkiXmrtZUaUNN3GuApuidz4F9ma",
  "key17": "KLccSqWi3Arz2AHgCrNVCAvyNZkNbiouaPpNJpiTrn989yXmbtFPPzkRMP4AQu3iCbqLYJpXoeqFsZTo3zR6hRi",
  "key18": "2ac7C446gLY6bHrcCUD358hBdKBnExC2ezaVFB5gmn4M6fjSsk9WrWe4M3oKdLZNx5Fzi8qs1WB7uvJQVLvvCkMT",
  "key19": "5b4hMeqrrYyhfcpeXyKknHWKU3cD5GdWc5kfcGUENSDu1ZKigXvqJ1He7K3PnhFHnUHPzMPmeJbZCqpjEb6mZR9U",
  "key20": "3NQ3m7qJB9TpM5Ec5iJvsNUxTcUucDtAnpj6BQPVq58FKEEHyqSitvJixXvDJLXHReGdYEw31tThe8tJor3fXgbQ",
  "key21": "ARj7deEMw21kFHaBe6ssPn3keLoBCPkA9mS4ttAXGpjtTRVzxS3ce8vMMUQ4c9LoMpLN5fupQMpY5YDpAFsKFEh",
  "key22": "Ybb95d2ZoKWZUH8hnpwXT69rgGkoWUFCZSP8fi7izgGutuoxwXSMB6v4U6bsmmtdcTBjA6KKx5p8yi4cswHdsBH",
  "key23": "36fWmLmv88kSokEa4ztTL4QWTfNZuL5qs4RFMiX3iszhpy8nm65yijsiX4Tu6hswBc4t9qtBwWgfZWdSiXZuaswp",
  "key24": "3WjsR7eRtf2QBt39fxseGMdnEMLmwkk7Jy5usrBcXBuogvGnehfoS3XAVQS9gnUE6omrY3iWLFknqYhPzDprGr7y",
  "key25": "5aLrSZZD4boGMxne4jhvdaPYpmQADJ682gVeuwfArQNinJ6EwQgPcfXEnfTWWHxyHBFkpGrGECdKm6ycG7NGBGMQ",
  "key26": "3t6dLSqPM1J5jn2SVpyqsKXZAqkgRHw631nQCjUa73FiDZd4cvpueYkKKwsK65B6j59p2Q226kNvLVMXUSDQunXM",
  "key27": "mwP113kXJ9SxBaPSQ5271WvVGFZ15JmCjswRCU9xRLV7HTzvhexkYEibGSbHjPxC2yGZj6cdEpSQWFonssCVA6u",
  "key28": "2A5HRnAwkUej93Nt9nM3LLZdVXUVbNQgVRnZuKQkToAXJp6czPyNH2K8VADrfhe2HCC5q6ru8v5kzYuEZQZrDEJ6",
  "key29": "4jxgmXTuP56AFJ148FDS469UcMWiKeBqNJKa7CftcihqojLFtMfDLFrctVjSQNpiTbhXhyCkPgNLrWNkGTrdhH1b",
  "key30": "5VQvLguv8pM2EN82y9ausg5a6R2XNdZ43CvLNkKMkPJdQU2JAZfYVRCmZRZWnV9nspZueTw93VhtFteeiET7ncCc",
  "key31": "36HTiKM9rft3Z7c5zVHd5jED2rVhKN5wy8DkssPwLAgi4V1navN3Eh2jSYdsFHCL9TFFUKmdNpYSiPAdSDPL99qZ",
  "key32": "47hWdVBgicmxWu9fUm5soTCRN1dw8yUYPRGGYio5D6W44eQgsXjP4hWxL5UKSzTQrL1iZ9RFbfCG3p5wSS7iXx8d",
  "key33": "KFEhvTqvedfCe3b9RqPjrEjzq1WysQyvZ2ixse4mLdNqN2oBmoc1o1Fkb8qfiHfVhSKDEDG5x1WKD2kwTnVCm3m",
  "key34": "5SiXf47EEbjtjEGoXXFsDRvCmQ5v8TQgAW38esRe5HeVXvA8sPboVRyKr4NXmhhNCKhKSgemPjDbLsVw4XG6QqVo",
  "key35": "5fgi2erAzHXE26XiRtkm6DBYhq7bE25KZQ4uNj9453fN2bvR72oDUneKe9PH8SrBmBnsTouNP5uNvJBeafp8sads",
  "key36": "fpKzVqubCoWovdhwkdkat6hbA5QEKyfzBDvgG5PhgM79XumrEp2TxgKNqvCnGjFYvoGQ6cGttmTouDhscetnZAU",
  "key37": "3nd43TMhvTpYnWayacpHYaKvqCfFYfrzCpjhvHEisyWzP6XHz4SRKJK9Mxh37JoqwdLM4BVSXBzfX2grKvtANERu",
  "key38": "jzCy8DELUo6QUE9CbprtxrKhrV1UYBTvsQZdxJhESi3g7gdytx9Xrk5k7J3Q7EMApAvzwL5AcwrXrLkAoELrqGj",
  "key39": "3dDGbhYvPjPCmhpDE3fSNXRd4WCWDXefCQNkQpvZ3p2Cy67mUnwAYLneP7dFfMqEaEAVULS7N2ARafm1vJkDttau",
  "key40": "2CTzF7ufFgf6e7PJuiLgYQR8TrAohS3BspiSc29S4ZVSb8WY4WHZ55M2tEo5KpgXZKDmEkDvLkshVMGeqmM5ziNC",
  "key41": "12mLsnV5HAWDnPXx5N6AE5Q4oktfxaFGEYZVmBeWQxp1Gsag7eVmFzCiMMimtgDAU9jsQASSeWD9tiNbAhHNDV9",
  "key42": "2pppmwcyetT58WEQtKCvxmp5iZjkc4eUGkQ75b1i1DsVyV6AhcRU1boy7k75RKGsxvNE9EA3T9kfMoT1dgqw67pK",
  "key43": "5XDtMVJhZQv5vBaAyd4aYsWpA6XBZcYWwY995NFU5EJhh8dCPQ5f3Fjs5mC4JMZLNzLfvhkc5c87RoDSzWi2PdWy",
  "key44": "4LUo7SVNyGFtzZ3FZ2ktGXpeb69kqxdrw3wnv4DrRa8vTmhAunawVkVMk5EadBZaiwnxeN4sShqbLcejpPAYwaoC",
  "key45": "5Mtm7x7d6XmkLtDHGPGBSHfgY1SRuGmXP3n5kQrVbnu3wqQwVHvuY1AJ4KxdNFMye3zmDTwJFP3Dss1m3mDuLe5S",
  "key46": "2ka7yWxRgG7Dy8HfBwhp5KyXKug8wHMxJusJa8u9gCZVfa6e4USiGqrBGLfoTGfYvW4GG7p4xcYSpCZJruj9X9Zk",
  "key47": "2DhwW2G7VoiMvgN87TLVksuTSU3aJNLBz9iddwKenybv9yRfqWii8g95J6Mg9GvGnvgYVnwjJkeHm6gK9vZiRes2",
  "key48": "4jm7mA1q2AHZJH7qUKCmDW19m9oot3whBbnXinygYhYrtfiTaKdk3N1itnQhH8VR4NqAZzEQ6185iiuuJ85adZPU"
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
