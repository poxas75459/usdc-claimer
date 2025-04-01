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
    "5g52vFo4ZE1yUSsZnnnesQNij64kEsUhFWZRpZP6gi33yt8SP3MLFnDMmo6DwbyuQQGbLG13vEyu5cio7tiuVd9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rPzUnzij9YBv7wvWECkJYxweP8Qi3TXCLjvg3h6w6pGLzMCyZGkh8AVe1iiArh95iHfbM67zdkZEz2NEgs9Jq24",
  "key1": "5SDNcdzw4mRN4L9XFWBHmg98EGVUKKdbEAnWA8RQHQe2XGKot64JhbRj9W98JCXrzgJdEwiYqujZyZkBDFcHxN4M",
  "key2": "58MqryceRQp4pTtcRZhvdjdWFeJ9182JaEuN2bftxdh6tu15Dz7cLX9TF4ckcGYEkG7A8KbDEezRk3tmgqphXk4D",
  "key3": "bvcLKgyLj2YBqLfME8ckRHT5fQqiALU6N163f7C8nYVCVG61TzR2VQ2HYZf6RGFRjyJcCtiePUEiyt1SbNqXBEY",
  "key4": "38eaEUb9hzh329vdPBcsdZ3ygr3EBHv2zU7LRP1rqyNBzsa4WhEYSWiMHDmer8UJtgwsacTnxeLKuGHK5enVpo1X",
  "key5": "5352yKf16mAaWH98PZrfwJ7dZaMTYhiEhgbgCp1ydt6GHNR9DS4KdLJJyA1yZ4cFJPbAogTh4dF58kCQVmHhW5Fe",
  "key6": "51K5CqQwjvDYcdRkXKnu5p4Q5w1ziy1AEKiK1dSDDFmrchfupbwprtpL634AHC1p4VkBfvtBbafEWFrGwjVTLs4c",
  "key7": "25cAXFCSPxeQVkY8M3EFUTpCo2d1myCvzbiJ4fuGAyDmjPqY6VLARho95std5yDkY26sWvYCBXPGsWvrhvKq93YZ",
  "key8": "4MXqo7XEQGX6gQFQAUSk7EsJzjzzeXr52wz6nwJiqa4dqyKUUZAMd7RRqpAKmyHsZxunAFhVkXLPRPTbGJBfSPFD",
  "key9": "21RRtkSxNjPfUhK4aNmU4iw4ZxpfiuS1Wvj7TCNkxgow1gKDY3bN1yRNPwUwyGaK718RTKJB2QLsKoGr5G5Fht79",
  "key10": "54DKZwZ2nju6HTfsZ5LyTdPVfibQJSjvq1Dfn33g7AQhEMpCbMFxY9aowAqhygGhqPrdE7mAUcVVsUqcgLpdBr8x",
  "key11": "3ngU8C7hGFYTsBCKYrdqAWECYyeTkpu7opV68uDi66eukHgs5q8KfUtCDr3bRVoRP3v7TAC61KfnvuQEJj8kHYrb",
  "key12": "2eWr3QYpF6P3q1H9fab6azKjPaeqLTR1gP6r3YsmXDZwoCCBgc3ryXQLU1tcJnWADBMMszC52rk1Av7HiD98jC9N",
  "key13": "4SYeLZ5JTAL45f8MWeUzPdTSTPZyaL7tpYNjtbWK3s4F4bpJNbf4WY1ui8uFqtLf4b4enXSa5wD7ASv5qJFJin5W",
  "key14": "4ZR9VriDeYuRKMojhSBBBmYv3bLFjQYCigbayoHa6zPo73hrrtK3oVnFpcYDWqqmFw54A5cU9b9bvsCcgJnfRrzB",
  "key15": "53EsRGnp18E4WL96xftAxeFZfnRrgD8G7fbnEKzua3cm63b5i84Kc7Jg4B7bYd2KKvAkZUCLDwCKmudMTKwU2sfS",
  "key16": "5rVEwNi4DnDiERKKv4d4wjTSuAGd3BQGHiwKj1n412hU38HKPhu7mpSbqXhiGkW6oLGNhhWas9oAqXZA1XTDtbMM",
  "key17": "5LMhgejLh1u9sabp5EFuND3WK2HoUzwqWjb7YpWH1L2r3TkGYVJZV4bE7EyvJx92LAn3v8WYU9wfXC5ott6YNDMh",
  "key18": "52gBPtUixtdATMeswfHJF3HPwFo54u24K6LDJ69LmX54CWxU6Uwk9c1HxWXdUv4bkdf6JbM5yxTYxbP3EDTdrE6z",
  "key19": "5w9yzx3xkfTh1KcC9UqpakXXidqCdPgryvQhNq4Rt7DokEGB14JsjN1VtZxAdPTyFU6ejmqyPSKCLaUEXu1VdGia",
  "key20": "Pq1JGMAKrg3UiqMcCSv22JDc4iMumLcdZiFFRnT9QCWGGGb2wKapbCpXaUBxeN18PuTkifP1ooYbcv2bnJGhivN",
  "key21": "5VegxFQgSqLaEwt7x66apYVgeLT2eSHaYyDrLfQHHutFzgz6QLLSQGDSDCgq52f1yu81eHjCNpCynisWTRpm4gSJ",
  "key22": "2QD8vivVYndS7SFcBsyevgzMcFrYe4Av79LouhdhK2v1HoUmzPLUeDBwYcpXaZfajqgYZJe6PDKzjqywucD8sj1D",
  "key23": "uZWah3nbufnTV2dmcQQbEFK4afWeTUsPb2uRiGiC35FTHVCUnssSNJ1Q1HKvsdnTh1JhttDP2PMzUPigy1fn4wM",
  "key24": "3gF4z4MzWMi2dpceukhSmNUiqjsbEyE5Uxw5t4EW7ioH6cTe7V6ndcBDVyKJYaow85Q7pUkqLMZt5PrQmujpekoK",
  "key25": "2zNmpefx53ZCHptYK8boPu5EjKgcmZqVP8EhgFi8ykqh1vBNHE7Zi1eGqcfCmm3w5gh9t5apKd654bPTDmNrMbRt",
  "key26": "46yPybsvPpK9mknuTMGjEnvuRwQkEKQmX2T99uJAvU3ntx3fLAHTMWMWSiaJvneEkox3zyRGX4H51JFHmbmKait3",
  "key27": "5KTvnoAZfYCEz67cNmq2bm2rW1kgXSKhuUCxwDNzoXiWopNvecfSoZrZbJGAcN99w9XD6qGtMDrsHkJDRkq63sv6",
  "key28": "2RXHdFL6agefm4UBnVixh3EKAovLaeuZxm5jhnjdBxaZbdgCq2MFX8XBD5DFgKwRLgR5V3qdU4bygHZhVYeky5qG",
  "key29": "znsameMSc8RRvwzux8pm8DA2ZFoQsExmJGCi2XASCEhQ21M5PTiSkRuDY3MfR5YHtjzkpiSXevZkoQgznnnS5HA",
  "key30": "erRCZ45danqMWA5XzipdqTqef6hh4Raxkb6bStqEQcPP9Fvsgbp591oMiDYt6FJ4Lnh1Ak649b8gcDtQq8xXKii",
  "key31": "5mXj4zwSu1UH6pBPaKzTy7P3aj4s5YdcppP8ihMNiEPs9DGx1XpUFqkgHqAF8QsVAtCY1bAyhMHEe4cEsAJPQPno",
  "key32": "3YNvMKBHbFpSHUL65Mcm1LMHt3cXwj3P5ksWWD6grbjb6CMYQTW4RReHn31v2RW8dJnoMgULGtaB3nkoT6Gx198Q",
  "key33": "5Upmpw5Pc1L25bPEVqFN8g2JngennVASW5ePNjRyC1NxYn3YhNWxSK94uFFcQKdYEpHe8b78mFUHTbeJ6JonLkmP",
  "key34": "4GWsmrZbEqKYoqo2r4VZa4TB233YBTdhYzscHPipHGuDiDbJu5T7xjPPJunqfBE9VoWPdVuvGdx6z5FzZvNF21mM",
  "key35": "2YwtTVWGrHzzUSj83LFQs4EeSNdcyAS2XJPphJiTG31Zypwhu9fa6R4n9qUmGSBs2ttDF6jdH3MgSZcDBknVr7Wu",
  "key36": "22zzAgWTGE1kUzLYTq5Sah5RHiEQxCeaMNpb6SY6CvYUMSfjNzmvWFrDqhDjUU2neh3qjVPAh7nEcgnQ9q6uCPp3"
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
