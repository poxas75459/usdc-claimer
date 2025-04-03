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
    "3CsnaKDrWefuMAequRm3KVrLqobBaTxvZLbq29pjiukWYGQitwiJkt5Sp6zpj14mYRsosvWgLfqk8CkGGwhrUMQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pp3RkcpUKHSGY1M1C7yqPBy9rzoowTqVKmU2c4XWQfDM7jEed5QpH5busDrGK7wnM1Z1nrFA35PLBfW1prAMEig",
  "key1": "2AVNTPc2M4FuMbnpNE9EKVmUYS7LR52Mkb7wkq2SBytpYznkbAx8iZiWX9oGRQkTtAuUCYY1QrhgDyrK2uYnVAuN",
  "key2": "4gvcfXLuzPJumMZWRCvTTSaLSoW3SrjFxVyZ353YdZV4uAMnbEp5LFLZvcv5Yvax2LZp8mz15fjQ1zwMQtStdrKK",
  "key3": "5jRPZb7RpDpZxFqaypakKXZLhMudnPDSVrF6FFHuZgoKrDeVRJZGTAAJGw7QDfjNEf3tWSA3GVMfLfqFWXXprunK",
  "key4": "3q6UA1KjrvDWZMCXEmtBJJYwDnSQr9mm8ozpCVC9eXL4CB1isXr8rbXXQnbdwyS6G7vsR8uinZSimSPzakfgjGp3",
  "key5": "q2MahyGp95ZZdzAniP1kAoHVEkmU9gcZEf5H2P8oGutX6CiSFXweuSDHZty9yPxqcsGwsS6sfHKf8PE9vM6dPPn",
  "key6": "3pvPmdAp5ifEE9humfBbvCbfDGFikiMDNygLZ9P6CV8W2MNPoqPwSf2bR2eUd1ZgwzdAXkoLBpw5SsmdnkqiycxW",
  "key7": "3Q8nFvx268KAezaksZ5Ce4sFipwpmr2oDbFANK6LGBBDUE9xG34xNb9SmQqDCnBwvHGdNvjkQkjb8pVQGtem5AxP",
  "key8": "23jnZmkpwK4d5N3Kn2937AcNi5J6qhhD9oN3tZb5KNq8GYTPZy3HuB8qBMLmncbSAaMRL3mj7VHsw2MiT5AG8U7q",
  "key9": "2F5pAUp98UDajnN3J2nRXQeRr7H4bh3Zegx31xNazChGwREWYXdKCkUjwnNHKtJNEL3KziAhwN7EnGSJSD9qpsEp",
  "key10": "4myvt9WzknbBNix52bt2o8DEi8bDqCXt7346sCHZBGEpcuu8MLnBifHcFCGowSBNsrzZbaryw33j8iXtQALz9dKv",
  "key11": "3fNVcaC5B8z3fxZqjLFbY42H45EZKy33FpqyHCEP3NFBfmv1f3btTrXrG4gQ6GjNRbkbzV76GQ1vwYPHwa3uz3PD",
  "key12": "4ifbQDz4H4q58ei2uofyZ1617wz1y7DgsjC81dFFCJa5zZVRb45AtNEfrgfW9BxnyHvQLh4gxCSZzfJqBV2u6kcU",
  "key13": "2aGkbad6Eoiy56fwzFAafXhJbpr6rxw8YeLsrfsq4YncjwpCdyhCC4ScAx8ZLooKiVtXR9e7QiJ46bamqZu6vYaG",
  "key14": "2NJsutda2STHF7jtULYtQXhV3n29a5YyYP2sVLkz3hm5yfwZeJo2FHYB2ATmdUkiJGXWeQgK98kMHpmosXDynxAW",
  "key15": "25PaiGKtc4UvxNX8b9CaXRFRnPKizKnruQSRSkDQMUsstna2PBWZ2iYvqynPfxhQFTZeuRs7PGj3YYva78HTCrTF",
  "key16": "3a5f4CEsnuqVPfQzQGEthpd2HpsnpXrLXghmVxxHX1P4Pu6BZPgzMa1FTbrgCCNuLjk1kfcxEfhicaYF8yut2xsd",
  "key17": "5fHPsQG7V8ja6yD8n5sxkT4Sv9uH3JeSm7BtVPSe6Co9Mv7RkxYEQiSMEtnswRtrBmFpLdXdj3PZSPwBX9CxEwYz",
  "key18": "33fXyf8fkcCXc2TQR6tCYp32FBw17hkY8FToewkK4mBzMFmSvikmUJHrpyt2F2xfCS1os4JaKtgYYhpbD9FWD58E",
  "key19": "CAAw2AxFis9aZyT7Fp2oaqDhEu1D8d1WShNqapJ1obh4p4844EAzJ6P4QhPyQgfUrvazycEXe69ao8EKDJyZaD2",
  "key20": "64jYFk9X8UT54SDiGK63bbr9E8i7y8qdoYHEVuAH6LRfw68czc94JvUV4beMtsgxCzbECHj42KCgHom2s6znwmSG",
  "key21": "5YzmmtjocrYNUGSv2ZCyK2HrtSxCEi6QrFM5nLaGQ3WSJf434nWo3q7bn2DCExCMUm767TwMpM7crQTNjeRKm1i",
  "key22": "3Svq78tJE2aCehBh63apP2r9d766ioKVtKSXh1RUNuxXL5ghJANfYbQcnTgc7Qg4FysnhRKvZxMWNnkDQhihG8Ge",
  "key23": "qjkLMaQdxyu6YFeGrY5zmxMBZrwLCUFo1AmbxFf197KCEmEAoLGtXumrhKzVQzfXxqCv3d1xdcrbgiDztzVMY2M",
  "key24": "P7XBrjnTa8iEA33VvWRGNbm2dHU53J4gZw1mdGbdtYXMfAgj2cdgJjpH7J7wA4og3jieq4sv77P16JLii9sPrjW",
  "key25": "5vDaNz9QsMJADU4GkrJK9aszRPEHBD88rJz5YXfzLcabGaeoMbWtVKDCXKtywGCC9aBuKnhFopYgZnNHDQqMiyNw",
  "key26": "22rDe4ci7oraWPWyRhErgewcW61DDsVchynAvVV788zfpS97BboUqKW3umaGiNQ8VKGrQaUUSrMTobdSthyveQvW",
  "key27": "2gzNkLTt2cYwR6no15cS4veLhtgn8gW8aHSfaHxaPB7Z3qN725dRvhG7FS4dMkmVLqGU29md8vVvVGvjTw2gJF66",
  "key28": "5ba7tWoNuWmReMpMTATNm96ZERtVB9JaDnHW6YCtkwKxhNfAvWKMkgB3dkmSxjjMGUWDiAQu65C2vYwyuQqoDxUg",
  "key29": "iDgYboPWipHXfr7dUPCo8u25UE1PndWUPC74BUbssBx9zL3TuWpfJbNEfuZtvMrNEMpxHusYHP5mNAihDfoLxTv",
  "key30": "4Pimc94d1xjZHWLA1EGA9QSRquXz9M34wCmRMa5ELYeXczFUyZHbmZHQS57aCmeHSovA38V1VVSj9zytmZYxmDAs",
  "key31": "59ABUTA15KFJDRbf7i491t82RDprRUcJQdEYjF3sVHsLG4r397YQFn5vpXbVKbiSHZD1G2pVxH6iGXwsVvnJexxK",
  "key32": "LUk3eSucrt7BaPLxUWScAs6HJWBFGqw3fJqx6QzEX8H59fPzP5StwpUJpW1wYXuwf1awUUHb3zprxUQeSBUrnpZ",
  "key33": "536DbuHUWFnHpFgmbafDAyNdReAJ29xdE3oZXDNgh9ogmRVRUGJYVZLPU8121XUXAaFHVNtWhNFTUkAejx6Wwket",
  "key34": "21PvRpbSUxvABCNnBTSbEvFggxy84FsC9Xw7LMpy6N1fA9HWqiNwyGKztebDyW6cnhVpX6nVbA1vcQwaC2mpAXrD",
  "key35": "VZDbqK3rEuQD2LMJqf2JUEjvjEtfpbcJfZH2VBF33YLbj33GPH1fsrmoD4uTfsQoEVhzuYTwcoisCjcjagmUvRA",
  "key36": "2X1jb98ssxKm43WNCMtJxfFNybLXR8Sw5dNTXimtXFFZBzLpY9VcwnxKCYLiDxrAe8Rs3yHfXEXeXso7yyvMtXLp",
  "key37": "3cU6HCR6eCxKX5p6tdmw3Q9sBCyagyqfKr9FVku32XfiBQqkBFJqup2GUp98nmoVBCpeode4UGidkhoHWSZFioEu",
  "key38": "4c7LEDivawhLdiTnxkniyMMeGRbv9nT8JSUazwmCLBFSxJc6CBo5j7AzWYt24qNbCW2ct6865gzVkhHdApnWP7Hm",
  "key39": "3rXaBwRRfuDYG6QfnTTQveFJoa1G4wkhcaNoqEEXdrqdjwrFtE7rJyA8hbNUQdYH1sjMkFvheJGk57zwqAcpjEKx",
  "key40": "5rBqFkJZWfd8Y3qm8rf8P8XRGWUeHuhfSTRfDQ5FQfiLMG13Stv3UGFxkWZ5fsLzvAWcauR5QQDanYsANQip5JZc",
  "key41": "VwVt7u9orM6GYnBYda3NMuM3tJH91VMSUFe6KaPAFTBfTYD3tyaM1Eqop4rudddvvgWr2U8jsWvKKvWyDejYq4e",
  "key42": "3BwedEJe1hspatEbn5ufTTTE3pgjKAkZMKeZkmrQ63u297iwn21ngibmyFDHxFgU6FwnGwNTg3AJ4WZGvSG6DUFn",
  "key43": "677EJhEMmgzs2DJPWP9XQdrf7spsgmeHs758QCGZJAY9dLiGDiiGbiqacMPoxu6Z23kXEShiYtrouBQnZMRxJ91j",
  "key44": "2gXkDhKTkmyhcoz7M9v24qHARShLvDCmmj6iisZA4eWTw3a1Qmg4JG8C8wDtwuQp31N9tqfChBd9QbQDU1QuiStk",
  "key45": "3pey9XKpHK3bqumnpHWTHZ4jUD88ANEH22tt23gApfK4Wqba63rMEgLbe2KLqnFHPXT66VPrN62tS9dLLjGmi8y"
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
