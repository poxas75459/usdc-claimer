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
    "ngbTLk3ZnDNdVVTuTWUmYpn2B7TUkc7HXChvHiJ9o7pTa9WCQbtnP4fPo3AXv3dYSsXJd1R1hfhWzzQX2WFScGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yh3Aetig7DR5vXLcnUVaKFQsHEutwAXJ8LNUbDs33rdZv2AtLfzGM8JwWTo4vmg1SzMD4Zjgq38jRMSHJUfzWrP",
  "key1": "oT2RLcns8VminWXM2D7VaC1wRK61XbQfjBv1AHNADzdB5QxpNnJ1M3e3E9bSmeYB9GDTGQQYVvtbph43BiF6j69",
  "key2": "b3iUSASAdsB8sQ1rUAkTWaYAAgaGg8KSctfWDadJ8x41yLCSumhpvwh2i2WXepYJ2qfSjxaWXEg7LUCpKW7avGA",
  "key3": "4bHA5UJ5JCYzBy8GAj49n7Hiq4d9JxhGcY4t3c53joASZQWWdzeuARChZm5E1jCXPohzSu4XJGjGrncD1arBF9bN",
  "key4": "4mGh4yDCqaQpskpiE4xj76ps1oorm23BaxyXtTSh6eT5aCqpo4PnBH5i44hwngQCj6zCv897YEeHrRLM51Sr37Gb",
  "key5": "4QaPwhksKpjuGXdGzRN8dZMxq91Rgi7ToTxSPFc3KPWSBoF1iyW2cAxDgPoG8cw2ncD53hmQQrk24AHYvFuYzPyQ",
  "key6": "2CGhv496emWa9RpMJimGWWoeKWNRASBwhEsDTjrvxsPQe8PA9NueHtY8SxdvNxQivvmH6WV44q1AdTkHdHV5UT4K",
  "key7": "Dw2nfar2JbEWodxEBXb7w4favA4YTpkE8DqW2V6bjC6G89DhrUaLoyfEVLUXQ9f5X85g3aAmBkvgaUPuaNqD8N3",
  "key8": "a8i3dLBmsVzGz7cJf8E6jbq8BLwdJkP2rvxMLzYzh4aQmq1CJqaR9QP7bMjjhAbm6LSKQN92nV4r3s2iqaNwUMH",
  "key9": "3sjNw2FG9jLp9fs3gFRii8xfAeVsYzdLj6CDeWfKD9xfmTvArw9R5unKLyT2EAhQSuFuUTbpd3ePcDnxNxJRBfHG",
  "key10": "29VNMY3m3LSaHhoBZkYH2bDnBhJm3YAAkAdP2BhvyQF8Mag1kda4RGB1dWSqYpp5EjiAekxTpaSh2NXufUrwxHcr",
  "key11": "3oRc8UDmCEj1656igZjz6DdGHPaKD4bmL9Fc6uxHZegUH6G4AB5YUAAJWPaoyCT8SCAyGhy1xQK2eeTjhm4jffdN",
  "key12": "2NzAstrnVkVuUtAZGNDCJubBigHTA2ZiJ8NiyQcbQ8cGdtgAF9UKF2QKaQ5VwG7GK5fG2SyDttXQo4A65vmM4DK2",
  "key13": "25HdS4D2vxa5qnyC7QCfxBq9nbRmYC3djD9N5GnWNYK6Sa3zTsqtcXtTGTyYNwgPeRTqfvKH73jHBmok4z5SxWNh",
  "key14": "2gEd3EJprPL9f3ba34F3Ft2Cd514aMzPwZSJ8J3DDTn8Ek9gtyyppWkRF9P5QxoYtFvTh4JrgjtyRitxpeaTUwks",
  "key15": "3DSTAWAmzC92rEmnMxnMchLtYiuk61JE1oMPUyKTMXcETpBCvQRvqmoadT3wiVFQk2hUBTiPCqczyxA9Lg9FbVoV",
  "key16": "25BDaxrp4vDzjaCfmfZ52FuxqbPpvnJneG2QYo11PunQ89QscSoforFtLzdm3CAX66os9iLKDKig8Yd6rPTCJt3m",
  "key17": "4pQL8Uw12g4VkmA49NCcVz55gbxnvnQfymndhYFw9QmukcsTbKTzebLBW8hVbYUmZquDW2yGcNB465F47joGY77m",
  "key18": "2xpTJdKk7YBZXxHLPRSZwmvVUYmK25SCtns6JNFZQpTbxTr2yh8F9qw6Suk83BkybFdMMY3wCJ1Ym5Hv7eD8Txrc",
  "key19": "obfQb28e7aLT2rm5BKbgEPQH8pYz54HYZAYF2jhC3qTCPDVXTHSrQbipgs9FBdS4uWDQ8ry8ekNiS2EEt6XZKuj",
  "key20": "5efFXDh6xoqXMtCESA6rT3myXMQV472NbyVUQMNFtx3Fssc9dGciLRuuabVoLtu1GnNUwqLgd274gwhp4y8GsrUK",
  "key21": "2umoiP6jAoeDJb36oSUuEGJ6Gc7bcKSBj4957Fst6fi19ribqFPcZMquuJYSQK8F6kx2aJrZZAwyn4YaE4mNvRAq",
  "key22": "5UEJXuCfF2swgcX4zg9kVrALSqNY6TsUZiNFKo7eTkf5zxivntAiY8ZyiJDccKHpQ1ctRqnRTQGfmp9UcDKFrs4b",
  "key23": "ga5ekbVgT2DYx1LoXVRBF7ZBeo4ysrYPmLE86mGfdUiMYBF2dNVSSEiBFD8SgpSSdwC8kkbA96MpPRuiexgi2HW",
  "key24": "3obYjMfAwC3o8hUeuNQ5j5v4EibGg2SwVoURaTz7nzXSJNsaCk2DS7tdHeqKdCpjgBC7uX9KYuVMyGWVhqYPBGbd",
  "key25": "2XJ3SwgMJFMHRm7TRuB6cvL3ktQ89TDoRoKGbj1RdH6DnWSTRM6ucXt92FTPcor8qrkuuC5CyFHCjYLtU285VgQk",
  "key26": "5K3jV24LPiWKeHkwt8vzCfNacC7zdkX8CoUf4JwkZiguSLmhmRFh12ahcPMQ1R7uDDVfLuB3MPKYNLhsLZMvsBCt",
  "key27": "2gsTFefYWKu1nh6BPooqV8ddccNHh43Bk748wntdmnYTKLJ19ES3RNPmESQJKy4cCP8JrGR76V4jTaPnmRqxLVH8",
  "key28": "3fyH7Q26zRP48giULNoyQYfbccXbeL4uVGZ9cGpqytafdTTipu1g2Ay9wmRWLTHQiSqmYBQXCpwm7nz3V1tEPGpt",
  "key29": "3oTc8Rgo4buj8x6TiVw3oZxBMwUmf1a8ruB5f3C2nqSJANVPvPYpA7hHJHn3fAq8GkVv5B7Gjy4ETVSgZ1Mfrvgv",
  "key30": "2RyYL5kwGmGnCmHvCmbe3jjuqZaXJ77jrRmfzEZ2tf2jbc6ctxBUP4gQsoqTKXycKZxNuuS45K57SXVBxCc8x8oj",
  "key31": "5oWwzS7XaGYJLMV5pzCBHpyh69jvpeCGELt3vnHEmqtWqVfjpoFn46mAVGmjSNVE6RQD2crhwA2VfTxab4qhyF7f",
  "key32": "JvT9hX1mGrXWndvNWoQVCj2r6R8siDaLpT1yKtnG5bm4h99ekqnkXCqxGagEkoAVS42UQQwSmwJY7QN7khKCRUQ",
  "key33": "TQSxaijSenRtJabnYGZqfEThUazSqhVUbZD8SbK27LrmdZT2b9pLZxejtfXcSYW8QSnu2VMBMa1UmXqNoxvDBef",
  "key34": "5g1wz1oJWuaQFTjtCeLvLFpV5HQCpS87ethrE6KbXrwN7e1Z3RmwW8WEYnxfs6bxqZ6idvFHnAZhXg3U2ddAFG6i",
  "key35": "5pwjyKPecRFnyciVngmu7L9ymyRqWBwMvZ84CZ79sGsnKHninYToYS6hLAEZRSxhihhpBzRaZQUxHG7JtQGfbzVH",
  "key36": "5MDEVhuKD78qEU7k8SHBfs1XDbj5uqx4h3qYQ7bHKPtTaEkvBqbEtiPB7A2vWA9x2ECPdpoJ2pTL4Ra4hhXcbAYD",
  "key37": "pPSty61K5PwaRMUJ7Yc4ULg6nionA9eQUnhgcDZ95coB9Ze21xgp73ZzQXvmKpNwPLA2vYEdDfvsGVRN9naoVJp",
  "key38": "3FP73hakK7Ecg5UUUxFfdrrKQRgZ2bvqJ682ATKmuNqb2bJRn8DbGfJZiCU9xYYHD8WjsFpipPbN6t8rrww7Cr1C",
  "key39": "3n5FcoeLH35sshYCtUwFUdudrn6LNH2WstxcHd8QPH2DwKSM8sSXQUQW4ttjarhKZBNwyBzjSFsTCMCwre5pnsXS",
  "key40": "2ew9oK7piLxzjjGBW9HwwQYQJX2SwsyH77VQc2Qi3rJ5tJ8AeH888YprowbWBbmBUnrEJKtrvqu5LyFJLcijdPnZ"
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
