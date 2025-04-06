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
    "33FTXk2H6b9kVxuUJcvYWhX8MSNFYztKbYVDWd42MKMwBHxPB6vuhqocZ7hBG8P46fEgB2JgqgnhPaKaSJhdpNMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QzS8XhJcQhmuHhKxYMHo1C2qjubQgL6dghCPnkZ3Y9WJwUHXJq4Vs9VCAADPrafBDsfDdygtSVSdEUJEm1nUE9",
  "key1": "seapdjpvyF55ffkjyHofajZA6wLeQAdXZAbWhx7YQ1mqUWdUuQEaBpKijX6wJeT5hnXRoofLjR1HR1r1vNPwQEv",
  "key2": "ydXsKALSvhjVHNAcP8jfYaKorH1rLDcxVrF7oobnepCjzPsoCqmccGCgrrKhmBLCr4WwUBbfn5bRKy2ZU3kPRPm",
  "key3": "3XS8t8oV45wXUXYN9QzH92YeitjFkuL8D7QMmfkGx45Zzbrt4LULmHZJiNuLKc9cfvjuhyyXQ27RjrNPyBdbFGVu",
  "key4": "5miHZei4LTcA6MRVQW6HvLueAZfTtdFG4mDJGiv2w7vJiHK6kE57xpwdCikWas8AtQeLCqDL9jeH1dfMa8ZDMEck",
  "key5": "5DXtcGcW3x8RBG2XxPgRtkSwvcHsQ49MdE6prHQPnui4246SCz2BZmWFXJCB4gNuUviWwSioooRRhKTnQxcRM96j",
  "key6": "619BBaTcn181cwqFTDkU7sZBrb8VLNLaUsBk6L6skzww91XcbT3c2rSuSgMfioyamcRxabST3kPHKoNwsmEs5KZy",
  "key7": "4LqRsyJdT6yAyfCX38esQj7xRrtyGM4UDixnJyep9SM8CvxNHkJQ2cAq3xG5CQnM6fBwZS2dwQW3W1dpWGGy8b2f",
  "key8": "Cvv44w1NGPA3Uu1bwC9LZRjUQxevuaALh961LJqqZhTn79ucVubLLf5TkQyz1wVvu6c5SDsuNkQvsWc8iFB4Hv3",
  "key9": "25P5bFYfsErmCQWfqd6QNyW3GmbuD7QoKNd3tsG4jADoLdzos6LZM7M9rGLAaSzUQ2jfVLY5ir1cwWG8z4FbepMP",
  "key10": "2wrRfLktrBbUrN3acarneqJpvuyhPizhb6Ts6dCWjKXr1G5sj82Md9Cjr3N6fdXPfuPpoPKq1GjTiwv6HAJASy9j",
  "key11": "4MFYTFkfjMP5fjUE4CpwULkyCTc8mSUJ4Zj46GnKTUzJn3ZuydiikpMQFKXsMQuBugTp4pgRCaDGJQma7ogB4xSE",
  "key12": "4ACfDBxWPp39TmTGTXJza1hWVU2j1cCM2QTty7XGyLKTWRwuYqEXBDwauLsmaKfymhxR5So6Tzbkp8AEtBsCmJUq",
  "key13": "KK8xcJzdnMJbGKtcku72mjbRG3x1eLvd1PvDwaVtFgTg3JzcFCboiWRu4fbfBCN2ErrT6uZwfxjzFKngH3JHTaM",
  "key14": "3scHus36xp8VQGftWU5UbzoqjUmc7qvHfNz4oRBUaGYHKnw55nNo8tPjwTNWSx2U8HAY2uGkCzaNAiJNhe69E5uh",
  "key15": "4jbBbAn7aSVezV5rG1wanHQXd6GbMQoVCgrmbL3q7djiu9GYs1jA68Yi3ewaxjaBpd8ydTQSCqK6KKoiNpfJcgM7",
  "key16": "3dLdwRzqP4KRdBpX3L945pbSpWisfbNnGfVTP91ByTw8KRwG7zDV2bDYtHMYXoUk4SZ5p5MFrgJFLsxBUWdst5EV",
  "key17": "4tt7vzTPods1i4zz7hLAHAWgnwC4vJsFs8MPCN1CAzE39G4q2kfoMAE9KpHmshkLcR3VgYGaWnkK6ifta4mz1ape",
  "key18": "2EiqLDQ1AfZhxiTz2rMcPtXqQfTGg2im18c1QvHcUBcn4rwuVs42HyN11W7jqnKLbKintqjXtXKrapE4dMAKhQyR",
  "key19": "MurbR2FdF96gkAe92848UK4jtQaV8gBbd68815LfTq2DfDmN6e5noaxfCuF1pxNYBG3Nod9Ddscxg8vvYmUoYVL",
  "key20": "2KocT7zEC8Bg9cqkA5z63vz3yBf8r4YqdENECu8fSB4ryZ77JSfY6ejdPgFCKiQULzs9Wcnr5ye6sg1dTrqY2zVN",
  "key21": "2KZedMzMx8ud3wta2WBLLZy5LviqFcieffxJMP8TPEGBJs7Ny4kZ5CutRvzZ6DzYnmkL32K15nHxbretzzaxFB7D",
  "key22": "25fn2Zki9sPQ1HyrFfkKxLP7JuBBjpYvLamEXx6Yte7WR1x3oC5S9kpcffZryfgihhsyzQMC1HAUzjHdMtyiWiqG",
  "key23": "3czeWzd9LS1PTyVte4AqRFQrZG3C74K9s41PiNixx5ipQMAi5qbs8QTJF8b3pES5yJDUZoLrnjQtWHoS3fC6x8LW",
  "key24": "yY5rvSKAvK57VZqcr7Tus1g5y3zg4BJJaZqkjXYDr5SnJTwa3kybj3DT5dMFz72GMKJUxyo37LKZHdBa8YBzcbx",
  "key25": "3Z6u1J3oNHoYxaPcijxiScDeDA2jH5msxR5knh3SZPDJ5H1yMhc5Uxqo99NKHkt4NxRnPrmccSw5ppFKiJi12vm6",
  "key26": "mBhAPG7wTBNGnsUvK7WffPUBQVkLpyELpG1F81fzDCePLstSPC3aEyiLZyfxnEsEocFfdGdc917PszyeqRV7KER",
  "key27": "4babj76MtuRByGwXAr1yQtgVCgqgXWnRrzT1VzQgbh3mJbTMptiyFBqvmeHbRnX2FCcg3cdmscf5jFFFj69eLz2P",
  "key28": "5FacHFK6jzuH6dzJscCYUAEnHbgxVBhTgbzyiTKN43CjjjxEpKqyK9Ydd4nvFxL4b3x9b1jgVJTogjLWHoWGHuAk",
  "key29": "2N1vTEonBoYJZM69onjtEYjCAvzJ3q4F3xgmZEQy7CLx1sCvNEhsGSWvzUBjGqpXMJKnD2wffHwaVuJue4ApY5Uk",
  "key30": "vuTbm6KaibxybWtuC3vMnL4sqNNQEFpCZxBxyLFCPddx7YVAnroyY5wVnKwV8d55AYFK3uhNnQnqVZ6joaLbSqQ",
  "key31": "4RvAmSMhpXEk32BX1evUQSnxyFz49BACM927JaUEvPf9JDXxSq279ZhsCFCPGy4VjVUP4rR7KWPUbeVbpiCKGXy",
  "key32": "2GGMhoinDvyDQbhJJZuhm1QDtiftqf4hWwHarz1ZXQvpMEkHhZXzghv6jvighZcbwVgBK9RS22nJrf8BRNv2goYw",
  "key33": "2g5xJiTNG7kTaJ9r7Apj3m21fEVSwLqAd2rkFsD79EXN5LQAnTGo6ooioowMggrtBFK2uVBLQ3c7M5DnKuzH26e2",
  "key34": "5m11vhfMtRkHBKs9vez9WVwK734cvt1WrFTpttmmZUh2sEmHuHuLX39u1K2FYSP1YeZPheLRdoDAyRSzcjTQV2BV",
  "key35": "3sNYVodtXsF14UwWYCTNoaqzfaEyCTd8vmaj37ccyJDozwokCKdPgp4U6vxRAoPgLTQARM3yuhyoEqZq53AxbE66",
  "key36": "4KYQeZ3WLAvK6kqmERLepT2wc84Q9PXKnhCaf7WEHbruqNpbTaNV9DtmWzgQV786awpKBMx6Su3vVqng6Sf81Qo6",
  "key37": "44ZTkgfA7sEZiaXyJ8RtLzdxruKRqWz7k4PKe9Y6gv6y91Cb1FYwTRZHf1nVpwrqKfEqjWFayEqjt2jKN55fer9q",
  "key38": "3vqbfF3QEuxB8DqDQymQMBmEbZN4wYN7CVRuGiGmuobBYUQBY8tB2iezE84n1CHJ3Yex4bpAU3SUg2pDXxZ61RgH"
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
