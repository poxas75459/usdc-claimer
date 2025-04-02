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
    "4EGSpLuWzjTVGuQPcuNnUZP4YEA3Rk65ycm5cwd6wf6mjekH6GA4DL8txKEBrm8xv8Wz41o2bpCiZhw7Q1mexD7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unAQSkXjFh3doNzUkmBuyiUqwcUeH7zXesBkW381sLG3hAFyoDQ1xavDrSakyeZ18ghVPvNHyiPtoqFXqprpk7G",
  "key1": "3USEkJu7TZc3cCQe1p8eMPtJTt2PRwYeMHFxVFC2iXM2QkZaFsiP3GF2d1ktNni39329sDjfre8ayTfivfrtQZUY",
  "key2": "2AvZ3RpE2Gg9qwUuo7DVcMgadoHzj4DyyDkpvsnbtYo69SgZ9QUNyEeKeg2GPNkXNGWGpMVCXTHgwibY3bmTMhGE",
  "key3": "4NoRb32Pon6nFy5uEXrKjjT6XMbiDv5ifByPqG4V1opEjfdYDPDxJAkaeYYnSWDKwFBbdU1NdLYfkjMemm9e88d9",
  "key4": "55fxNM9wrawoAuQsSf5yMHCFTgNRebttXhkVhtrrkV2F5nxBEcdd4bXus8mufvcK2ocb1Sg2HtEu1Hqf5n2H86fw",
  "key5": "4YtgaMm6Vo2UMmkEXU9czJ8b7XkZuRpqL1DUo8QbDb5jEhgphJEt1CWPzX1wTRswteTQowf5CfK1V7J1k7yUN5Qe",
  "key6": "5jaJPAdpRGh8Q5Gg6rUnN3yYHfVG7BT8pLTA6fqcwy7p6aXXwQJF4MVZAHMFXnP4BrtcLCbQawRVwcFreFLboNwK",
  "key7": "3DRpFpbyZbURdxBRgiZQV5cQ1Y4GSFTECBhynHSLZ8TgfJqNabXbW6GFqdt2o8bCCJ2c1w1h94mV3N9CeiVgriRa",
  "key8": "5zBMifS3GS29diuBgk2t1DsRkjknZrjorzBLyVoz84XHJBkeHDVgYx1yppuqyFfcA2bKAN7Pnb72XAQiRxEneudD",
  "key9": "5qkUogo3M9qAiB4fwmEc4PuWmYdFEnSPc4cpkFVY14j9irL7rZSvKg9DWHMCRQJk7EYLzREMwAuCpe7FKcc5MWAY",
  "key10": "5iaiJi5mqsTHAvEowBWNhQ68F4kaoHJURaBWg5qbehTDce9Mttf75PyFNpPgPvH3QWnRVvGM8DVmmgSnVeD9SJsT",
  "key11": "2S2rz672jx1scH4DZBeZjYXTxwb627uXw3QDT9LEKGDuoQiZCB27LmQN7a2mWXuDuwKgGEV8sTF1odaYSriSG7EM",
  "key12": "3kQrrzWt9pcyNteGh2ALN1hPeBu7RM5khUGbW2TEt8fbmSHDEuoXET6szQJgvaL9mR8zi3r9dfHF55u1rcWgPp5i",
  "key13": "49seLLjRYTZriK7D3Vq6HLecRnLkNRMBXvMVz4K2qFCMWQiqB4GaK18nCJ7P9EQJYCvNErDXtRXyithp9xUt1PzE",
  "key14": "S6nv4WEauihyLnhJgxRNL9ThdAPehesackjz6yT1LPJtYj3WTgFbsiebtXR5seqrL4SvwojzKWkUiNVgSKD77c3",
  "key15": "yPBNdtioxT5PcmdaAStgnCkF1753WU6RNXNcr7HvpTUwXdocZH2WRLnURMpFrz5XwBGsJE98kMDhJmasxzy3GJA",
  "key16": "Eho2m7j8zUtnzo4HauPQHMDf2ma5fQPiSikBF9KNmqXDt472zvJRRagWCHb6WcnrYkdZTanoNCKPVHc3pHxAzu8",
  "key17": "44q2QnEuFuCe7FB1HCDxRb3ZSossotEqARUbWtsX32pBCxUiDMjCWmrBY12xXdtHrmQywQp7cANq2k5yQpieAzKD",
  "key18": "2MV3wqTX82DufqPgbEAKPbqMF6i8r9wozZoUgD2BtGpZ4m4oxDPAe9uUAxGo4AgWGAU4NWFiZkoUJuHCP3Uy9u5J",
  "key19": "4t2t7fY65JMKhdDYWj3riGTHyEBmHYMXy4rqfdwLQP8evdJxKxkzBFYUhsrC9c31a9R8V2iH6Rbk7VfXTKCBExLF",
  "key20": "tAVHwFTGLCKqChy4Qw8RzyzXw3UsHSeNJXDsQnbLuMsdfK2TBEsQjVbQ1WStaX3sXU5qSNArrBkx764YhvPafhh",
  "key21": "edv1A39aZK48gG7wE1G1aBic7ZyaxtF4inv4K6bRgHyumrGuPExPJvvhEAe7D5Yu63KmrzeUamkDBGJ5KUXYqwz",
  "key22": "4GHZQwptYYqGv1jUnDBKVhZxBU9HYG5rmVnLdkg1Xw8f2GCuqqrtHzFC2TeRaXETZg6RCVtwMCVAS55qFMvaUqUw",
  "key23": "3VE2c3hcEivcbMbWQF12a89zQX4B227BSgCvG7vc8MTt7xY1MgRsQ9MZNXFLy98DQFBcRrC3mnhxk7MXHiWzgfvC",
  "key24": "36P57DrLoNKfnvoehqFwF5NQd6n6mY91DSmQYFP5gsFU2yBnrqaKbQoinoEytt5KF86pa8wyQd54P6cCW35cQJk4",
  "key25": "5LVvZok2dYwgaaq7BhmgaCqkwL58o2nhG2p5EovSXDyqTi4XwjYkiZQkejrMEvsYv4xeKCJYdpgiRoi4iwGys8oL",
  "key26": "5FBvyAE3FjSdJgkSuwh15RouttsSVcfUbbwqFEcFr6Y4RkQArYRTNoa4uo51DdexxGN9FidrjTxjtXm9vG3aL9qG",
  "key27": "nRVeaTuSFawRoFdpoiLbEXK2x4xZXgUS4d81AZGXpHhApmqVfGxdgFepfErdMpujs3VcE7mkjp6Lm5mN3eK581m",
  "key28": "3sGneEe6ecRdRuNNKKhH5KE9a4mea4gneAhBbisfXVuaqToG3U3VYJx2sBLt1SmVZy4FbLJeZNgZ2CDydzjQi5kd",
  "key29": "55ZxD7FuL7DHpFqj1kRPKfgtKvQHu5Vg61t41E5rxn147YZrr4x6LZXQNPzTsBwdsgaUxUjRtzbRL5UxcHKhS9PH",
  "key30": "2ptsLF22KtFRapUoBkj2Jvh2URZh9XgN7esnp6jX89b2Ec48Dc7qVraHsgnkRZD7zLMgotBZKEipu9yHxeeyTJnN",
  "key31": "2JPNrAurQq788MMhmvNaYcc8W49KA2cduQJebAuq3TupTdVrKfTv8HwV3Dvu1ffEoRLHyMPDviZQP1QWbEEHdi56",
  "key32": "5PTe3B4SUth81ogFdEVzFtU8X5yFVfHHC9rC8K8k2jtigX4RkRj9cRqsGJuWqoMrpuVPokw2mqz9teCYZkmgiXXr",
  "key33": "uyUP22wK8A94o89hGZqejjT3QLmKW9si22sf7j97ye5xR2KnwJFryDZ4HpqMDCAH19qMsdv2gkSt8PTKYFhmroV",
  "key34": "37KrBq3fKKJLBTYLAZMMKchwmdP5oocuRWMDa5wkB4h36MUdJahHN3Ry1wUxABEpqTvWWex72PbSv63UNVURFz97",
  "key35": "2KQu7CQCi6oEby3cpb7SyrgFQVctSqQgR6M6AjurLyY4ib7onfNW5RbFK5t5ubwht16mgzRYHaSguMN4M7WcTeTw",
  "key36": "4RZ5rmd4uQ4sdzTdMCQeYj79w4JGfdc5x85jmVoFtHuiHk12qQ2L3Wxb6vcymnPMPCuVEnsGKfcHDxpX7EgxZyiD",
  "key37": "21FyhBS8FMLAjV86fPdYbHxYbrhJbLZv2G3LjMRH8ggyKowog253NfkZUCj22FgEn5gogzGZKzTSpsaGufR4uLSe",
  "key38": "394dSSEZZ9AK2Engo8ghiwRspaETCCz64NXHmo8oCovwZuc1Pojg8vHQVcebXGZUvouAur3357PnMoaRdbtpjjZJ",
  "key39": "63QxpiYcZ4nDvHf5wHMvGgQB5BWotEsnwMDhsSDXL76ruUAWkc6LMBqWm2CTVmc3SiTRwXJf1JeWuyj9ZxuotEhJ",
  "key40": "j2a7Nmm4imvbTFJSBDN2wdqp8Ajf5BfmnR443pKaEBqzBatJwHGfU72hmHV8yyuPrK4GGbBVvcvQWU6x9C6oGdG",
  "key41": "3zdzq27ZBAEuWXL77pP5yVS9RgnMv8i7VSftPXU9a97V63FtCqH4bATwN19kdi7Lx5teU7GRQ84YPix6oWQqkksp",
  "key42": "5kJRxKFThABzLodb2E46rJA8gsbpRxefWdigByG2gzTKUBDxWeuGsJoR2KD1GfMxMBh1P6RKB3ZLRTBuNVHEqg3y",
  "key43": "22JAE9yp9k61kptRir7WZbPaw4166qaXABrRe6DGMyATuqeTv9zgfXjuXQ62ZdZqxUVoegy5BiThAnT3eRPHrvGn",
  "key44": "4d3X3N46HPJKPQcNpGCLL2Lo8BBmVimTMMtKFWRLimSjxPqb5vToP36k4Rj71G9SCaQmJkTQjDNwQBppEEhPB99H",
  "key45": "2XNWEMdrdnjrNp9bStajMNdtrC4Pw6aupFKbMkW77GvoZnMEK69URu4MmD5ryiX5DCapnrRYDJkGTAApdamtgLxV"
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
