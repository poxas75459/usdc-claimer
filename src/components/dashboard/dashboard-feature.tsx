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
    "4ygGhXbHDoMoeA4qXEJkqX5RychSS8u2PwzmGHQXMhU9TaVjrzcHPH3zGTvLUtSjgdhQNJZHX3CHArg7JCDgLWVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xMYmtNxQhx8o5d4rNVb3348VuiBAtkv5sDMwyENY4LV9RdVmJrANExZtPBTkQGsBiQLmRYW6PMXHmmkcqAHaxS1",
  "key1": "3T5bFY5zUX1VbduEd4rPL43moJx5D7hzKSXi3ZK6JZdxqwkWErjQuMzzZUoCDU18VPUuCDjZoktZzN6KgSFZ4uaD",
  "key2": "3hhDgFd8XcmiRQVjHp2NJyWUe5XBkZqyjeDNihFTeVwCNxY1RJ9cccUwTtX93MYKu9611n4pAszZJjnmhV8wtu3p",
  "key3": "QAKro4ubATVMaXJhZKCaK1NKbnLLFaVPcg3dHXvMhTrJY9mUmUkVtE9H7scw9PQVSYEha39qQ9mcwdAW9yZFacF",
  "key4": "d73AVeXzkq5aes2wtJYuVebmCX35Tqf6mkD8gEYbiZsudKjNcJumCkpaHPboW3ScMvVrBz9Mm1jRv63Zexf9SP3",
  "key5": "5Au6qc6wFckMvHG51ToDTzpLSY8aZU3twkJP1Av4baXniRqH4MJMWWN2RrDRkMjQ7DB2sP6xh7GvP8BPJAqMnxmQ",
  "key6": "2aGXZ6mQsweM5fyLePz3bBvLazG9JAsgR6GgxShcnZRcqRiTgBV32btLkKApg7SZyZBty1hAWS8mAZCQx5EU98HJ",
  "key7": "mSLBKKpqu86QpdKwmPwuPVrxjwowrz2DhimfPwXuGrYUggEquFkgt68YmEDgEVyGRXMUuSf96Z3GjRvyYyfXjjL",
  "key8": "3uV1XgJtNn2v3F81dizVAuTbRNdA6a5178CU7vugQc5yeioNFeSTy5ft7bcvqC4owWdup9hXXbDWrA8Yp2ZHubbx",
  "key9": "2zVmYg368MEzE8FjRPmS1HNkaEML2718Q88dGG5wT47q8srG5EccqBwCZWLGoLHysCGsPuqWsHbKW38thGcM314E",
  "key10": "3j6Xw63FDNeK6pzMrrghmJorEnE3GAUXWk3X34iK6N2Tam9qbaVn4Tm9PT4yYaHQbFUfQz7HCGvvpvdpYb63KCkL",
  "key11": "5dGsgriLwTLpugiv3R4WEPngaPAGLmdXRSR2MXYWzmUjDTnfAtwXqrqjSH7oVKMA6GFxWcbHvNNmudR2pwBq9DGa",
  "key12": "3b9qxhkJhDjsusyD9TTy8m5E8KSirwMpoPjKKAkdBRmK9b4j5mtJpFk6SAgZnTDqz2v7bUZBDqtQ3bW8X8ZGQkjB",
  "key13": "3XhDZyPoojKcrZ7ce2AaD8GfcWyWucE6uoFT6TkeohbUdZeBqzxfcAcTBc4CD34qrANnuz5yDoYXzvXaNYv3YvrM",
  "key14": "2dd5TSxbbx1Cb6884VjxoGQysxtHMLLTgPc2srwDymMcLje1ituD4yZDyPQZ3XbcvzR44Ebk5EJmwoBsECMfcCwK",
  "key15": "UWz1vph7wQheTfLNPx5RCqtwFvcAsqAYSR8ujt8BHqw6UZunrTc2ubj8aRLBnQv1FuvkHxJa5j4HqUAbCsTudwb",
  "key16": "3xPVpDTninabX41o9QDcftDEKeAbG7YxNkmnTdAd8Au1v8eCe6HWxZqqCmefbRJWbbM7cHf3Cf1eYAWcP9Hkeyn3",
  "key17": "TNcKrhpRAoCKGSztJxTrNHhCV6DjJqZykfnz62YQ3weWudcyLDBF1jEj7unUiZRSEC7U7FQTBrvDXvAy2RUCrWa",
  "key18": "5NN3g5BMF2p5bNhNKXY7GB8ZWwjDXuuVTH26wdSvkRfjMdJX5jMyYzEdwTVBzhCfDXpsQQFw4dnRsHjTCPwkoSaz",
  "key19": "zgWmRbcVcE68mhJVC3ZKaNb3zgsc245y4BoDekWY3LuBV4j6MDBb8RXHdHwXwHAsrQhR1agpMCkC7bxiqkDssEm",
  "key20": "66TmVP7D92fgLZRwGAMSGjbwaQY4LtNgdjXZ55GjReRBwTftfgP7kEqw6ga4rtQokPf6uBfyhP4dnH8d28LgqR7z",
  "key21": "44VSEM6fAsf9wxEb7Dnkm99HSAijp7zFNV6VCPAWUddWyosQvVCrx8kufHBLMEATqFLuk6rbaRSrLsBs3a3ukpUP",
  "key22": "xm11rJkyoQjoXaF2CwW8yQjzP76EMmQpy7U4VM6cyffh67DvicKkMYkNRH3yVabS2j65PEpDB9gWtG55tiQumTX",
  "key23": "2QfQzmmWFRBBBh6wbfUxgCEocAeUvggFP1Dfrvrf2JkLjRLAq1ei1CcEYAjwp7E73ohvhKLBva3v7bN34MXztpYY",
  "key24": "4VtWTiu1wGXeKN9wfRycxxS5mqmqYsxbVMcmFtpTc78yvTStPgbvTmVLcRb9fM49zAsV2HLamBLmaKK7KSfdZ6DW",
  "key25": "5Kq68ay1tsrfeXuvmpQEFbpiTHpEB32TBB7m1GNCwsEtkM53ri92EDF1TNd6oLiisEYBH39cuPmrL426TLCWNH5H",
  "key26": "5isDdYzFvnqwXn4Z3LfkcRRWk9wzAf1F8vk7ZrEC9N882BL6ktiTBuG8Ljx956v5Tq6UimmvrbhE5snAqHhey3fZ",
  "key27": "2zh2ubevTss1Aa8f4BJd9REBSswEXyJZJMFk939A8StJL773oE4kvxb4m1o68HSZJbHgbZJt3kaTqvrMFesC68FQ",
  "key28": "3Bs3AdEzutekvgzdbMGbM8UUbTmzp3z9Hy3rqGr6GgDFLT7ER4ErhrBzWwAPWKxwD7e2JnT1xNoDjF5A7SXubdmS",
  "key29": "4RT5FgY9nmFj6271UoP8zj7CimiJ927VbB64AiBUDPCYqVY1FDUqk4orbiU5v9orWPJQqddVdAdfd7pjNbbe4mZ",
  "key30": "55vd4Jvimty6T1jZ4TZu8k8nqWJ47quWEdhUPncKXKohsWHuSYf7MTG8SJqLx8ZMs3oUJs95xTB8miq9gTZCj7ic",
  "key31": "2Jb6ynpfBiFMxvNoW7s9tHcvpXG79N6iorunzxv22XUDstJ8HzxCX96SaNYA37s448uFizCEA5f9bxQqfCg8UVgK",
  "key32": "LLw9utze1pobuYaqEukHCAxiKH29R45ymHdknUWsxYN6kCUmcLDr39v2WeHofqz6WB7x8WEmSjuymovUtegcAJM",
  "key33": "4LCaV4d5UuwBMq5kuYwEeoBjyiKTEU4mwJLt7ibvctZpMc5LdQCvgPJa2pBtBWQrz1Ke2w8JY17aqq22KKFNivoK",
  "key34": "4BsWaEQyQTDtWsUKgqkMJarzCA9BPeB3j8GFRZsLdpHyBSwMGZH26p3AhiPsUN7SHo8VBhvmqEW1SPMTjwPe5RKH",
  "key35": "NBCNzzLi8yXJs7XaxM9kidhSBwi39cvQbhwD8jvrmbRm5P4CRrsi8TjMcarZVmMUWPieBhspEvZaZhzqaUs6bCF",
  "key36": "4exY4EQZe1r9Lmb2cF2ri8JkWUGMWaS8GGrkDPbRCbur9WfFcDP47SgXDsy5RQzH2ZG2t2Eco91gzHZS8gywHiTD",
  "key37": "tSLg2hMUwVHmzyRi8h4ps7VJqDUrLbPjDTDYcAa5hMQDmvR3cN4ZH4jiH2REEfeA9KTj3odYvEHe3n7Ev7YZTSK",
  "key38": "bJyUSinrZJbSH1GdZ3pjonzREpQaBGsYkojLUX2RJFgYe99tFPqvGEq1cDWC2sQKCFUz7yL6ah9g7AqvNMd3WjE",
  "key39": "48zWW9VAnAUgk47okXg6NA7icjoVgzKbbvkxhmFHVavyz8zg2esAwX5YRPZXDzqgzBSAGJ57tM2JVBtmQ4V7m2d4",
  "key40": "2mMMmViKAMN9T8uCtLAA5QYx5g3v2qSsJvfAuDo2t9XekSW5QsDAfoNiCdTEbrspa2jzH9FjPQdKg4JeRfs8ggzp",
  "key41": "3cEiXQqXHjQ3hmA2fA17ZQaQp6yv9QFtw66cTkmZd8tr7Tgz9Rps2Devue2UfDAsXYueZD2CpTMFFQ2CC2XWLzjN",
  "key42": "4RZFQPPxDDRfrBUV4obWNoQ2DTM9qd3uWrtb4WvFR6rUEZn61vf95Ni5sHBu6CwFxgGYN4Jk3qmL1KpmPyeZyDTp",
  "key43": "2fSBF2PSAYg1jTDsktycSCqomqazhTouJ6dr5yL3Rnth2xYUveXXWoCDTpECJThgpNyNnDtFMTa3U65GPMgjAN9p",
  "key44": "5NdpAFjzQV7R5H6LYkmy2jo5VhAzPhBJ5yRcxssehdstDL3iTHs2Yq2yMetvgMJLvmf4KZUqgaAhLWZRskLbTSxY",
  "key45": "bp7wkLQUSv22nbrAGMMSbK2cMVXAMG73trojAjiryBH6RgzhiwE36XkWB883W7qh4qgGzY5BySEWbMoESp58ExN",
  "key46": "52hn5y9ujuBAFc3TZTm6MXsiK1d33whSibttRF9CGqGAwCFdPu9QSHNQ2sz4yeUG6mKSx9bd6vWYXwVjVcSnuMVg",
  "key47": "4ykpzrFGw65aVePcfY5TS7veqMbDLnEyAxnLUR52Mpeciff2u9ES81YYU6Gy7mGazMQHyG34iAHoxHBwwYwDNGr9",
  "key48": "54jYwQJgJPvVvrVKZCgGytgTVEbPFC4rBAgF5AdidxPm72oaQ6dY2hTqK412tb33bx8SrAFPHFrfgEyFXPkqU1bd"
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
