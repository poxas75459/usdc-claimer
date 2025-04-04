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
    "5deDHHgFRSuXSUhUoHbNpX7phsSLPTmiASQj86vrN6uJsAHsqVz4CbD9TJGzAouySPfqUmb1Y8KYw2kWwgqna497"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TeA52GPw3BzT52fdGYXBSMWL6yeBfQifG3S4RTTauhWWsneEFkqT8PxWFCPqwXEkt6e8oh7sm7yApsKSTB55TMn",
  "key1": "3AjRn4SoXtJYUsW7dJYZW8FjHCWe9Laj3cAXAyson6FU3UnAngps9r5iAK67HGmgHRsoKnengN6kp5LUFNRQ8rGr",
  "key2": "3DkrRJfrWChycHdBhg8Sc79mbt8pw2UTyzJgZsQLqLXYGRuVywTFPAHup3KhEmMGXgN5Rvo65y39o21hpEe3DGBH",
  "key3": "4UG9FqcNtm9w3ud7FN9wtb3XBKWf67zxowDiYyLMyzEhhvsWgpoxCPLjHbebZZxdzPubX9VYy9Fq93eNTpN4Vsau",
  "key4": "3JrxZs7wQCCQVsGh2dg3bHswiZSSoFKxjH6JwJzJsUKDHhKCukspJozsXHAQLF1nSUEWvqW1qxiA5b5hMiDgXRwW",
  "key5": "5ixRZ3P2dmj3NUPZCPwPzByB44kNrPvGzQVb5jftmUP7e5T8qpapPZCouqWFPy4Rogi89wTcwbapZMRUDewKSx1f",
  "key6": "3WCaQwh1dcKDNB3qmGco5b5DHc2ugg3HNE96SqwiHEz3toFyp598hXuPjZsiPte9M3fM7hexNBFvpSZc9BYv6ndj",
  "key7": "5tA1hYGmkE1JuYQLrxMQxbKpoC1TXMVhF6rJdotcchTzF7FJnKCs2xYrC9BRifkAmSBu7PYAWkwFdepZToTLDhER",
  "key8": "66R1w5ugVhDEjBEPyXTeW8GN8SWVmpV9CPNgDmaWFhnhA5UGKSworY4z3hN9EdmEq9Z7pm6wXTs48K2kdYWv2M9s",
  "key9": "3EMYnS5VmfePLXnrGmAPUYWjHKUmp9HCT4k6DKe84jDPq4dWpnvt6awV6NzxosJsVpn5SVWDLnjiHt7csLJ9V1zQ",
  "key10": "3wGfw5fc5FV2xnhw2Qv2vFaE5YoVfmN7pThJMFX9n7Np3D5djsm56hEBNUVBSxcbFNeAFCzNP85VMTu98oA2D6L5",
  "key11": "3CrYTtowuemSD6um2vanR1SGBSKsDKaBAj9MzvZmcSUpCUeUgkGzK1GgM36uTufh78QhQ5rHbDuS4tFNFWQSX2xT",
  "key12": "4gngC9JYr38wmJoSFaCYkLNioVsB6bCobtEfQM8yeS8Zq29yTaKVc3KTZqv5JfvN4L7BoHwC2TD6iP9XT34N9GPG",
  "key13": "42GoXNe9kpWjiv2Hdd4cejaZ7Kcrr3suaVkadM1ifDfyP89AF1EjsXkwR1Tta4BQAsLRAKhkKZMbPes2j9xeku1o",
  "key14": "4APhmjqnccKfx5ECzAu2ohEnWLEbQiMjBay5CSyXhvRyrTet9WUXTP8V1maY6jtgYL38um71xv1MvXrunRUCX9eR",
  "key15": "36HLBuSsZ2fnguLLhYt137r6yCDxR3UNeTutmXkWkS46n7sophbnBteksRmjgyz2rAMKRzNgAmABNE3tCENZAVkG",
  "key16": "25Req132LGC5TUjTsFACo52RviMAfWru591LzxQSG2cK2vZF8M7keFjtQoNXCduDMaahqHvy43UD2wE4taZrMDLc",
  "key17": "BqKq3ZWHSSLdnYDAtHfFcifhak2xcThRGqYm8dPnsrzwsTCgHukpG2LUjwMb821wqdAUiHn5nbptqBG82d4JiPT",
  "key18": "rDXZVNXo8Bmti3PhfxXZ5W9uHgM1PawpbYB5ZVhEHC6TSWHVbxzmeay1E2sxqQNPkirJjMKhHcfy7ppZmKUiLQm",
  "key19": "Y1iTn2GYY3nS3wro8mbSzcnTZ9b5UFKSDrJHxtTcnLwK2GutvzJehJtuoTvn2gtpGH4u9tvhHTB9JSKHG9QaEc3",
  "key20": "jE86cAB5ztgyqwaHGuesJMUWxfbigiy8pLupofSst6jsPHv3N5VrPwWQuvKcA6d7aXCTeCw2ftDD3abUZkSY7BD",
  "key21": "B6xd9nPVUG9L91eaSmjkowqZ3AD7nVYN2EHEqPnyuCKWqkracF7VKSA8ckxt522eJAiDvTwwPoCmZbDR96etGCQ",
  "key22": "SzY28cnd1qKFrrL21GJMm9zsNLfN6cqJAkiSxfqpMRcGJYrUWsGqGspU57yHWsUSC9z3RNmvARfQyvcve9U6E4a",
  "key23": "y3TpevDmT733f2RVNz9hoctJrEjsZXzos5VQzJfe5jwbg43iT4QqCnH8ra5FeDBueTxzWtbFkNa6vwgG3tyY6xQ",
  "key24": "2m2hJamoGSUzCk19ibj3pMfJQJkKxiepdGixY7Wmd8kp38f4dF3m7Z8iAq7o4yBsDA44ThAbKTEHFXuYA7UJHSag",
  "key25": "5GNrVxfAbQnsnxfkYVtUHpm18zfTG1ZkHUq4L9haL3XFvnTH1HNN8v5AYvLE56gXvBG5a3bZBnvgqscnSDTXEQ9q",
  "key26": "1rSi5hYtvFgHKi19LYpgdacEZzFG8KhyB6ZrRiMBXYNUaQ33phqtbHJeg7FU8B8PaKuvTiXeARpWhcoczHuXEng",
  "key27": "253PzSZaM8rfSVA4oeFpjBERxYPJwWPwLZ118MxGeLayAfdh8Wg2RcxpwsPGhUsR6N5SGj2afTo6qDjxbAqEDLrC",
  "key28": "4qLq7TrwKZDdH8jvvFwehsFnjGAYbzQAeYJFF1oP9g36pEA81akR9K3PGetAMxVHRj4R3ykUwy4KsfocArb7HGe2",
  "key29": "5agm4QMXfWNuz35dvX3U6uqcQS4U4WCDDd5UAYSf5a82kNMGZ7q3LsWdZnYGNwbTdUJaVZLmdsdUELGBFDiB86AW",
  "key30": "4aAax4cz221fFYiRybuYVbRUBTNp9gyEiPNSdd3n9H88cpg6hELtRbKp55Qi63iqHaUoMoYQs5aVoBkNae4cCmBP",
  "key31": "3Gbj3J3eTiidmYWXQyLsZ8jJGH9rYUE7JqyWMB5Uod2XGzJCWcXvfQAPCiEeHs2C9SjxZQtaVXwY8EUrinMhXqbd",
  "key32": "5yJC9TfhGS3yoRmTQj38j5bPRjXjLs5toRSzMmQwcPsE2yPn7gcsCNGzN1fU11AAmXBHCjJnrXxhVVAWhW8GS1GV",
  "key33": "5XfEot5hHvLui76r9PUa174gLN6uxLpzHRUKjKqD5dHypyLQd8SQp1dCRUbDCeNhjiheV72DoThutoj9dt68oag",
  "key34": "igdEUfeMeB232ZynCDHqmvNmAfam8pZRoKn3wteyDLk99WU2Fwtsgz6gDxgSj3wEQ8BHRHsdRUpr27fNdGNozAA",
  "key35": "5xZSexo22u2Bgchfu8s6TQWkpKirJdcji2H5doT3c1Sqv6daJHfLfcMQBs6YBH1nzUTE5war93FUAEXTpEFFgy13",
  "key36": "3o7jCHpvSzYXh5E5nCDiHENhYRNWhx8ugVrFbESXLCWcjWs72SGXNchLgopbhRdR9Gfs9ewTiMqwy6WeREwvfAWz",
  "key37": "2uzEsuFQAWzJ2hLicD5LJXLFnyfjHmKpvbHWSkN44DYkB4Ga7xDtJHbAzC8KT3dAWowSEx3A4w7PbG1xPcohVivQ",
  "key38": "4y7QZH7NCxhMg8zroQDnBi6aeDytNr7P3hDhu8F1REg1VAwTPzDxv9R9c3AjjwwquBMnogkzK3DTenWFJjZQoiuV",
  "key39": "2EKi5etp7G4XZcGsVWujCJJRNKqYx2YyEfQuAq7cSFj1FqE1VgPSZmTJ2L5LbrzZqW2HMRHE3uxftSkbaW7oP58a",
  "key40": "QQ8adGDmtnfGQHBPJnvLAcag6R5j9wRz6wxxsALikGtxZxC5xsrcYDwaZeiz8uQ6v1eVgstKwxSWasRJzpjGNsK",
  "key41": "4ob91UXguJsnqswRoSBc4uU4Zab8rVaLu355RJD6hkzQMcEwvdvKWW6HqRQLuoyvt5PHcPx1JTF3BYi2aph3tV5h",
  "key42": "5mqDRcecLMC59ue2NRVrg7DyfkMfhHwXGHozna8wEMiFCfZPSur7xrRRftq33Ls8F7P7wtLZQg4MTk5e7RZ4tQ5w",
  "key43": "2LQhvWfJCViLk71wUioSzPVbPG4RahPfaKgHnAic1DJh2JoBD1m5tTieceXGocBAzkunJiE6gDaJmrpH3gVCa6ow",
  "key44": "2dsSbZ6Ade3mBTjeAKqM8vQ8iGH2GaGDvus8xjnLiJd1aWm38yf35joBD2DDEq91YQnAAhabJquFfHP8q3mzMpeH",
  "key45": "2HiH5E6DuzfqMfG3rGzB6BHFa9QAtnbgqnYMGKFAK9smom9fjjwbGhG8criYwdy9fZbuj131qeEM4sqJ34zozPMR",
  "key46": "48Zad6NZFgzX7FS2Vmn49EwdQ6Rp2bSfjxkfju1XYrMk5JTtDBonwivHo7xp2X4FVTvMwKsQxQWXCybEVyozWhFs",
  "key47": "4h7oWGQnuG7Qo1wkRaQ1W31oRuHVu2RM6G1L357ht6gtNRZKw7B1SZvbuoUHxP57TGy2wdPPYY7w8FnZj635sAUT",
  "key48": "4EzrYuiLTg9mgCACg5yX81AExngK676V9ZwtswKNhUwiq1r4J3ZWTey3D2o7tYDGAmkKPTSUgNcVBMbebBgL3LrQ",
  "key49": "44ZEydyQhUoifpv1FRSLkyLUEzktk2xJ2PXNhXVDjnC3Wnjek1W3xVT37p8tP5B6N5xMi4TYyAhLfPQVjZQzr7yS"
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
