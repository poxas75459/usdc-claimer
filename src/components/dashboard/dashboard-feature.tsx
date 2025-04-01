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
    "57tALzGbpaQi27w8R3nbzVK5Wd7f2ntiCDpHYQy2dJHkEeSQVmdhiyN5hWGFiU3wmG7o7rgoJ6t58HvZYGwM5iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMDdksNQRz7GiGHuSsvhpPjKweZ1udvxwqpxgiH2UPhfBX1MkZfK5TpHBhPRPS8NfQTwhaEKpgka2qkkbh1cwfg",
  "key1": "3MHUgmXTTipCWPsnBKzhV6rZ4me34oGwKeiPZydRStKzCUAhxhY1fUtrod8DwU8XGo1VzL8EiitxErbsPriFHq3F",
  "key2": "2jkgVtq4tzWMMo5dxjAy3Cnkf8tounKGpnJov3S1LwuH89CinR8FsefKn1s4upSpDAPkgPtK9uuZLpUiQ6RSdkn3",
  "key3": "u1mzaUpLmdvW89vUFRw7hR7GYVfuTU66euZCJkAaxa4fePppmqvAh8sUMRnaodaXrngEFZ8YfT884nU4UcRboB3",
  "key4": "5psEHw2P8aNfuqqBmdtRd4hLg7WZxtRzDhSVgDoSHbbQ62EL91XighEvn2vGumcqrPDF24e3djZTLhfD5JfaEMXu",
  "key5": "3AyxkG7TxYvdWjpfLWhDgaiFqVq9e2bKkTW7DdGQfw2sV4BzGarwWMAp3vUpmo4n7FkQnYAYMnhetJeBLeQuNX8L",
  "key6": "WiiuinMeoBUnFQRQ7LqVa7Kdm3zaxTFNvknRuZGxsQf3bzBY5APEFES7NgeBrXUmPrr6dr9pxm3zXXQmSWQB13m",
  "key7": "5TbPDd6Gbwmq5hTayefdPci47TJteVHW9ByG9vV5x1XnU3EmeMYA3wxJApKVC2jAMMkQdUejT3eyd2Q7qfQdSMXa",
  "key8": "XKYVtVwz7ZXMwYkpY9vB84yprTUZfRL7iJK8vdgP59zt7VTEiGLEM3JjwXypRJA6Vn9Ny42ULaVTHZnttjmNzSa",
  "key9": "3AkeyWEgdtwwHs8swjTm1nbJcTEqjMGtzPCVqc2LQV83pTYoRXCGAsrtd7JP4Z3oxyPVLpC548Trfjjgoqj3ERMN",
  "key10": "2rjL4EHvH8ZGwWXwTDk5EQ9fbees67XnYAu3CBZkwhfqbGLyUSBr263mDLM2gAnbqiBmBUDmPcgiBcaH4hWczNmh",
  "key11": "3ZBfxn2WrZnxW81e5Eyw6DsyarL4kaGMdSTNJCEutqJ9h1ynKbayWmo5BHGrz4dpFTDtH9rtptGheREuHuTWhwdm",
  "key12": "4zJ5i6ZPeq69vLSTwbtiBnUWGW8gm8ZBrzxs7qJN4ecfVBU3gdu1AeFNUyAb2qigAV2dCvf5tdEMSuHiq5v3kq5Z",
  "key13": "A6mYpAPfY7x7xmpBzAuSNvsrNZcPiZ9N5RCaXaUyKM21u875PRRwTuyfwbpLEqcUhFCYL56gFa2MYSY16N97Yom",
  "key14": "5S2St5voxQamiNibgbcFsydXwMeY3Xkg2unBEfuxU5Beh87zCvLbipN8ZMzMMbSdFpcYqnapAP5JwurzdQXapXyd",
  "key15": "4r1EU534RDEakrDdWRPWhHRektmukFCMfvV98foGGcQQR1vZa5Yiwj2m1cB4G8WXpXmFtRxksHNugkhp2G6TF7Ne",
  "key16": "2d2N3SS6ay2j2PCkfbwHxTpjFeeAkXD2zESH2ytG3HHeguAM5tUhS3tyRyGtc6REYGrCLU981qS6y6o4wZ4ioaJn",
  "key17": "2BP232KfJHQqyPde8ycnkXc9aoLYUeNjwRH7i9t9udmiDrxpmRKGz5RkGNpHQiDw6JukWU2BFvtwec2Krd37vwu6",
  "key18": "2vPLrSqHpubQgaA6tNJsX2mZ6xRenzQbMFMnirM7XYUiPzRiMxMYm7SAenTsthk9uLbnmbuKivtAXtVhqccR7c5u",
  "key19": "57CiLW5KaaG9kqnqKCPXstN4bQVd2N9mh2Fnx9BKTh7bdREWNdB1ABBGFveGi5ccaJVEqNqU3hWvQtJPn48UQ2Xp",
  "key20": "4gc4xXaq3QEGvxYkDCS7ddZCGqCUNT1d4BehXgrh4EMF3ytaEmpDZQA7MbCVpAkvDSYiS21L2RVMbajBtKQiEaeF",
  "key21": "4sjY3zDs8sp69gYenF9JJak8LvPfJw6TdVQELjdLNAjmGE9TuNB2zMm9ZeJ7XzaZm4zfP5nuNhgrXXQzXCUJy6bn",
  "key22": "3W3rW6cY46P7A17m7C3mRt6wkUW7QD9Qn9Vng7SNiuDLFdQSHNBVwAKofuLyXLRqZeDis6q13WNDW5uRv2BporMC",
  "key23": "43w2avrd4haZJm1oSiUTMCT1bc3ppgNAD8Z2z1mxKVoHLLswxsdgHrYCaHBUD3jaGFE8JDThZQcRWRYvF7NWUkiL",
  "key24": "12663QV3H6VSpQgh7JBp8gBe1CnMtptpireChLXB9jrHGLdT4UsMearRiwUQD36J6KuYshYJjyz5KefCfgj32Nei",
  "key25": "3QVo3wdjJyLkMtHrkqA5TrNurZCPoXqPjXQaXdbh8gqRbG64hT8AemiTbU7kBz9E8PwR7LjdXEwp26assK49Vdpm",
  "key26": "5MCBk5mNLkkrrq8cgY5kYEmhmYd9ENahvJdHodWx1Tu795zs1eQXGKwdMhKkAYnD6F77ULn2M6wevLkL714vmquf",
  "key27": "5NGvf9Lg9EkFvRahJcC2aiTvTggTW7gJGS1FbiNoAU2pEcsp4rcB4uBdmy17x4NA4veZXY6GY6eCHWKQiLPU9R8E",
  "key28": "464BWgixifUZjyLANiNf3JWFFbvKHWVsbykYoUSehuZETvueb5DeP6qwCqNRniagysY6PpNC9S4yBmP1Q4LzMmLc",
  "key29": "3simVkyB5aKR2AagZvjPojANd4dbAsGz9uakzSypCX29n4EexcN4HrKnV6WbzpXfAdPM6nzCM7ZBjdLVwHZYFVak",
  "key30": "55BkYCX7UrPUU7CxsZWPErSFwRae4GbSgaPVL6TPh8eYTb2Nqgp4G5nDZcJLPHcG9HrH2qSyKACXqtbtrQCGYqvh",
  "key31": "4mwLk73thxpPPmwwm5eBtPwYyMUtpx1dahVmFexsZnBcsqLwkZbtoZxAbmab1UP3XiyRBurKBMAQBd38rQUHNzPJ",
  "key32": "5CAxz4Kp67k6d7fjchPjh9kJAHQtkMNRqq7rPTXqVHYhorPfUvX4DYoX7zH7DftFiR7dxc4ESqA4N8Lo2EbEvDjt",
  "key33": "3SXRBBFrmCDCH5DVuGs52oZGgxUtGERy8o7Rq2vh5YrVoAN39osJfkgPa2a7NRBv5hJnJAYgwsAPpSmDqD9EQL23",
  "key34": "4QEnSRVBmQAabhgXLQSJc9hTJU1erx4k4fBGuwzN5VPNFVuCTgVNUuFDNsfRui8CRBkH27Gp4jqgZjcrsnJa4Lzh",
  "key35": "5Sj58JfvXpB3mUj9Kn7KZGhXBso3CnALxy8Q2hhszTAvydyZBXsDwraXiioHdu3jfr1jigvT4XJpMj3SFRqXVV3A",
  "key36": "3ZPRnGfKKE55kiUKfzg5GHyPq9um4NFFQTGgTqvHozxg7yBQGMf5EGwHuJSFtsigkYbSHLhtQEwcjkVPJ6HK4VAC",
  "key37": "3uropaiBHimf4mM2UUY49z7TEnnECLtRLzjMNLPCUFMicn2oNT5Hqu1tiZzq6H5osKGgcqjGJpVcfS3c2DrurHpL",
  "key38": "3RT5KisUbcMGa8Ggg3zrarb8xs78uXeUwvykWiBuE9G2VSQq2mr3BJuk2ZmNs31Lh4RKKMxrzSAXBcvv4ALxyj2G",
  "key39": "3Zw9AmhYb5Hh8dZETaJmvNYQ3EG2LZEvcdvEn3qg9K9ERLqLrPZP8sxmwdZ2HRUfbc4bwB3uMuVtyxu7vMQJeEXP",
  "key40": "4xb5GL16LWPSR1ob7qcpfQchaZYm1tn4o98qWdUxncUijFaWS2e8xps4CCewgekivutv6ewzpcRXd6xCMUMkEpGq",
  "key41": "4JSjqEdbwFFvx2nWq1rVfbp9FPQNFACCLPfhatBsjgfNFS5erofe2zBdiPXbEC5AScfbMzsJgWJbwte7SdAeeT7w",
  "key42": "Eu5jvhsMcdoG7rp8GWVAHNKva4cEbTiqJSMSnozUFg85mNGYBssg8pzEkvotwnrcBdwjrRyhvZY4q1aLbFziktK",
  "key43": "rXjMvurkn6iXbgwxcg6zoWwX2JNX2LbjbgaExavnU5nCu6qtJTdV94nB1bR85wMXNkZ2hkUvsaNQDgeTyZui6tP",
  "key44": "5qd9XsBgPAVwhpY7uRdK1R7qZMnfjwjCPUd58b6fH94CqeVT7Cq464ayLZSERnsXsBrwG3gvVbiFk9ucUpDV9hom",
  "key45": "BbbhZZPMaTvzcEfjV78zD9AKQrxMzR96LgeRiC4BM1k8Pd4N4vfSEY7yZZCfBL7iNazfgy3jzTh2jVKYPjQf3su",
  "key46": "3xxFXoR5tAkpCJZKkkrH31EgYdwawVWeudrfmNpcJbjnh2w57fnQtXLBSm9ZzxvRnhpe7bXi7CUDWRAmsWALmbgN",
  "key47": "4FBHX134hvMZcE2DQNkSYetJGAnaTsdBYdvgJg7AS3LLZELmvK7CBvPcu3rvHnovh34pFu5GnLmPYeEx8AYRMosi",
  "key48": "UBAqYpqkPgsJ6oN1r4HZTtCVDo2ACm15vF3hufjpnY5P2z72qCGDxnex643YosW9g1GtZdmpQQ9vz5oQZN61zcm",
  "key49": "4EQqQTAda7gLzJkMi8aB8STVLHgdX6bu1nDoaQF5svgsGbttAEbyJSqirCv8GgQL5oVUEAg8bFZ3fBtuxHLmxXHb"
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
