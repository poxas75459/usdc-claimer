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
    "4b9Pw2BdHmNN84ruqn3eaAwdJpmfE9YbZqSkuGyUqKJpmBCCjCmCdBfdmnoVHhtM9bFEjNsxQnXVcArrRjYiRZZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Evsa2sTWuucvMWzD6g3URFZFMZBjeneDc7ytXBGe9HhfwzZpZ9SS7pyg1tkXSURoG2MDaL91Sqn2XaPsCxKcCpq",
  "key1": "DPJSq6KkmNAQQEpudjWKt9AM4LE8siMA7xcvYjD6RbtEdWeEaFNg9e1Ab5Y4JdL7pKhWcRg3FHDWwGUPKT8Uh2S",
  "key2": "3wJngvp8ZUF7XXhjSHhswJbz5KFqT6F1jzdN9HhPAxaWtayp2sC5bGENQEfe958tvD31c7NCk94VrMSYeP2ieMve",
  "key3": "4vfCNfwg8ufCTSZJicsraszKeYWLWPfgkS3mh9qypxKDHQj4oRrYHPsjifNMHHcJhkbxbgiTXNszZ1B9xdMfgneb",
  "key4": "42o1HBjE16n71mkDDns3zQV51x1cWgjSqmb2nHeQtoezpzUi6iXncimJENo2dU8NYC8RMbiZAod7SaHTP97urPew",
  "key5": "1WDiQr6VHJsNKdyZiKxNTPPeNufetNVSixMMzMQ6VkoCYitWU7UpX6ka6TXmo3eQ3cpmcw8Swbm1eohHB1HDt3R",
  "key6": "3WbXxn3Hv2BEuyyZaqXLyWbxrcTYnDcZTYZXL5oBdUCVDgX1aGtEZHDTXcNmuyUuDT5AKCDx3tR2WWZiqiusmxyJ",
  "key7": "2v1h8D8Pes2ooQeTVber63vbmDRsB9Tqcm1EbeeMAReL49EYBPsJisvT5sAXAL8TQdb1WbeWobyKN6dNMhhkMM2A",
  "key8": "2MVknKH9WrbN6AxVat8daYtXpDsecHcYQEbVaZFiZ8JAs4Ez8mKsNiDjtWbVD1xMjKaof196hFhtH9YfBU7WDnyp",
  "key9": "ZnDMPJSLMM4RurMzZzRKhPhsjjpLfdybWoyHVQFytXCqmH5Jq9P8sTHjz57TTcdUPZtBWRBZdPsSbA31EpCRdWQ",
  "key10": "4Gh7ixE57C7kxrZACBZrKisBuNAdmJXa6hJmQ41hnKf3teNzsEvXRe1qf5bQvDNUFmF64Ro3PudiCGbPk2DaJ4NN",
  "key11": "4DPLsqeM6sFTw89i6zbYReaLSv2C3f7D7FsPYVKRkQCoSMcCWXRAhT5xPoeqpU4sSenvEVZjTB1ky9MSRBDa3m6y",
  "key12": "7T1quxXuy5WA6Fxk8dDUKeqVacDMCb94RcAYzbqu2MzougtqSKSBsbUvVvmcmgd7D1pLJ12NQwxAm91a8paYR9q",
  "key13": "2P1hAxQv8U9N66fuMGBmxutTGvWAQK35AA55J8ggi94u8UdTWAXbYiEyyNyBgYMWJx4KyHa3rGFFEvTRa4V4sCeb",
  "key14": "3xmNUzLMHXudf3Vrxjbs1UnZ25wC9V49axDQabiURs5XiZYqGCV3BYZ1tw7stEyhq1vwMLvXZCwgNvosseCbiw9F",
  "key15": "3ohGcPAFZhwN1YBnX7ab7PSc3WH5hHMhUbYvRuFGDjs62dkv1bZyVFkhvkNfJeGd6ebBuTnBqjcLwY2J4N36s7uB",
  "key16": "4uuAxJuNKHxroVRo5ACDdAQvzZTL2urPPw6zTM9fdMAFgeBtXznydg6RcgZLpQQsoiFLDKna8RdpgPh2GUbMwBkv",
  "key17": "5KDj1rLxRF98Cf8gwkEFtoePgMXqBuJUit6tSkN2afj6AU77KSCRXmEA8CNAhBQeZvDA6GpF3NPr7e8XyEZYJRrD",
  "key18": "4wpjgXm6CVHX1PdyfaFjnJnXQs4yC4FGb7gv2jnSJdz7Dy3m8dCWqjd8AFTg56bZyrCCbV9UAv18BEWkpjUMerTW",
  "key19": "u5Jep3ksM6TWURhcyQ8CT8dMJBpYbHyFREzraicRgn44GTUtjwpYjMB76nn7mjBuxKayyv7vsJhtkiRHGmkyyNh",
  "key20": "2dHL9EWaoJb5iy4ykC6eZ1SdNQncPxksGkEKU1tYmo374Uk5MgSabB5jPNRqAFQdHXBM2PVPiVGghXr3vqsF8G25",
  "key21": "2Ca1mqknVNNN6gVGKBG98joM4EvP3xdP5tm6yTArdpSmAsBA1wTRtuy9t554YpgneRMz1DQ1hahSdY8YT8tgMa2s",
  "key22": "2jpDknqGKyFrbCCLnJRGC4LfxNQyaRG16EL86GbXCPCJGETp18h6BSN2ohgPPX4TibTMgwAFQ9hw7vzt1mE3zLWE",
  "key23": "2868rAVMqzZz5KVkSjpht9Fz7UZFycVgMYPtbbLWAbxGxSuCmTuBUbmPg3jZ4hAWDRscsaze5hNpFBXEQXQGSX3W",
  "key24": "w7QhrGYo2pWRAdi8iasbvTxD2yyHhK2CnwH13cBEQcoVbK27qaaeXrmGu8eAsj2fbivcVi4LZiamvEsovfyyRnL",
  "key25": "4raCjEFe8QPasFYAahxZPYJpRJGBqeBSeAzi23LZD48Nn5nLKxzZ2ZjdjdGeu7Ww4qSWbmDKMt36u8411Cv5iHnZ",
  "key26": "5tr8ygHmusnFsf9dQEgztD94E5LN4uqsYi9f3ivTkvSf7Qkho6EFuw2SV2yyNdCZLeMtiZPuR6ZCdB13XcD757kg",
  "key27": "3TeEGu2cxoAn6yXiqLgN1gPzs3pmvpJiCGxr7Y9Hbrd3Ssvc6xwobRh4CAhBiZJjHLY7rj9QJC56KPf3g78L3Kt7",
  "key28": "47ffXPJB1hMxo1JSerRvmMxrxPRYxLRgSc8P2LE2KrCsfkVZcdPAU2ByuVvLcCiLfMuBVFcDcMpRrwxbF8H7YvYt",
  "key29": "2HGbCviCoVP3dGGaAb53Khc51AmU9d8wffdVebCkr4EEuHb3BzK6v1aEQhWzT3z2oNrLqyFzaXU965k3w8gY3xh9",
  "key30": "4rt1chu1VPQmnC8ekZwmsKLKc57Fh9436ZUg8R7ctGJmujMpX2rhcEsSyZuW4EdbzCxtpwM5sPBaKCZxaukcxsi1",
  "key31": "2hR6unLbeEc3mMpxyqb9xhRqdc22C746HfAs6Ke7AKRgSNpxQNMBcvjm8pLWrCYokgdPpKyTZdbonpxb1YK2JMmK",
  "key32": "3DqnezyQT5aYp3fKr72NkaRi7yGgEy9vBj5vLTuh1YD7jGSUUtGcP8k9fLQwsuA7J7qPywGioLfLiKYPGpzDrK7i",
  "key33": "3bn1c6skPzi4wZsfVnvum7MhykEnwMhPWQcWktCZj8KB1PPhh6DEZXvMMg8uoavFRWAvDR74ZDCzv1YJHfEwpvrT",
  "key34": "4jG3zTxxNuKfgX5ch2k4iB57rpyBLSTPZa7ioEep9Me8ac7yuV4ZC1TgcadoqQZfxEQhXMPCxW8V6ZgR3rjBcHjg",
  "key35": "XfRyCAuUMHg4gEVReYDik1N6MpVT328MXpiLTbiwTbDHpJGYsb8aZQncp4PAZRdmfy3TYcVByEXbxzCWMit1DUG",
  "key36": "64Sm3ZWM95aB8jVFfjXPR3qERD5PYAtZVpqfu9E4QaYkYSEiTdSrRW6VpqeAfGzYnQGn4vrznVjA6Z3Soxtg64v9",
  "key37": "2HgLKUtW8ckTL4VEMRsoa4EvHV6m7hrVkuVqpSS5Lv5ceggktuWiAxvFDn9jizJUFEzC9TWth9hoZSeHh7767b5p",
  "key38": "66DpUakKZDS65qKu9u2gxvxGhnw2CEBihWQn3YgKaxo7cGPPBfLPMeV2NoL9wuJdhqWUgHryqE4YnpEzpLdXaXUH",
  "key39": "4Ccb7eMkmMmHqyGnXmb4y7bNoMym6nZyyoz33DHthcYgbXMCBjZgQP57BMw7VBAyv5zrevs82FPECgPg4VmqV9Ss",
  "key40": "4wSXbMKaUDX3Vq2Bzy1YnwUcxFDGFc68ypQrsYyMFdqfy2shAZWidFgntQ4sgtxYWhUsa8RNr4k2bi45UE4gueEq",
  "key41": "5XHe7Z38az6x9Dgx5hbRxfAyvc1Y5w5Dcb6i9oHLjThERXPBWFwMDrW2UQs8RiTz9BB7a83ywjpnSFDfi5Q5wU2V",
  "key42": "52qABdvbL334V8osCiYsT6cEWMCXYFe2C57Y8Sx6qjqWc369vWUMXgXfin1oXpTZm6Bs61cWbhyZHJktZRBuMz4J",
  "key43": "3XBi71RW8sPS9wkCyQNb3cRAZsbbePKcGcNTfCV6fTNf9N41TvCZrbtfGAAa7RCPK8HV1vGK2x41gvwJVnWrvQJt",
  "key44": "3TKBSPw1gVhabW76jMDrpK5F5fTCKxftPiUjcKNzozRQ6LDsQEs97HoYMgqotcTsnKoCEAvf2wBwhhDjqPYbnC83"
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
