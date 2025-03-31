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
    "2Hz3kf6HY2cMbh9ASUa2WnEatQH875VB5wGvKh4KgeyTGHq6BByAsqJBGctnki97KWrGG48fyTHxfzjcK1QkHWqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FX8zq12zKsk2sjyUCB915XAzssvD2a77EcSaQhsX4okd7SKJCib9oAWLarsbDGhD7PbJVQc3FzbymFFth4mA7A9",
  "key1": "139eRGqRSoXVCCqoauaC6Tg8PdnLVCAiLGsNcu5U5HgmdhVsehBppwDaSCUAAPMeCJhit1PqGxNMerdX85KefTG",
  "key2": "4fqPouydvC6utRUYbdAu39ezqm5TWm5EgzYHBnCvD75EevZzWDAQJMoeYbjPbhKWyidxStpp2h3ziENybp82U9bJ",
  "key3": "5TSWMYCqkxr3uSdxXjoEQdYtFb2ryTf5VQBQvKjFgWKRWYVUQdmF8mFuZaYhdm2uvDBQTubmHDwUTGMdV2haRdud",
  "key4": "5WUhMmVpGYgQwXm4YNR3URqbTfGqQykm4W33GQctSkzwjGD4nxDeh7ywtu6SGBPecByKt8UBqdpzWZ3ro6UPtYk9",
  "key5": "4ky7Uau3Uhd8RvQihuQx4QnENvmsq59gNrYcTAzxWKHQX5EzRnbTQQY71B6YXbJY7orx7vfb3x3AhGhHBxBYpfKB",
  "key6": "2w3BocK8iM1CW84dXDAgU7q3jUStmrT4obChydqXnU8mPmjrmVN1YgXjS7mr63tufbngu2HCq1MyTARYGVmnicG3",
  "key7": "n9E416KneTfBcMuV5XhaK7fB9mtR6HSJ7kgX3uwEBcPjYtUEYfrz59e7eo7QofKcNXZN2KEmS9oKJvU5zwe1Kmj",
  "key8": "2hCT4t4agWxJMjKMq9AukaHj6VCy4c12vXZiwFQVwPskmFcsHgMSs4CBn7UMyJp2oSm22aVLtgVGUT3atXXbVvuM",
  "key9": "e4CcoKxN5cubVzvZ6x9v3YvQz5zBrWXpusTd3fD53bZkahsx731Fc5pgfnEfa7afT3uZfkn2uohVbQ5x5XvQhj9",
  "key10": "54C7tw7gb6RT5yQJtP39xEvg5RQKWjbvyhwyRYcnDG3MvrwoVo1Hvtsj1fpt4PTFNM5x2WDn5PWKggWZWQcYKjsW",
  "key11": "4WBZL6qDjxrhUWEfKEu37oGFvhzE9EaTKsmUX2fG3j6yX4Y1tJ8hA91acDVPphnaZAAdaWZMiTorwd1gu8HwyU2i",
  "key12": "4Ds3zgY6nLKZEufF4C7WXieKsGnYCg8JFmd8gLSMEnPF3VMBQCYddQzA2dea7QB1oiTqN9SDj87eV3kd2C8qsrz6",
  "key13": "3e6d4w95vVw45CVVTYBL5q9JWALbGzcrnjDhFXEvopfZZr14YeZub4ai6ij3p9zSBgpScjQZFVXU1AqjBrG5ZvDS",
  "key14": "33MbB2W9f1wSThHocASu7Jp7WibaaViYFtan61Sj9UzRJdqNohiiRQGw6k3k6VH2Pc9orvisof6R3MDdoEqCBUyz",
  "key15": "3sZjuqL2wH9yE3EMGyMuLHHMRwNkEqZXy79MxURVsBMDKwgX4itVMvm58TQzpAt6LHFWVvepsDmHz7S1XJfJUPpW",
  "key16": "3SPd5Axy5ajSD33ppS2J1VJNpNcN9XGasEVn8eCNfSgiagxiLDmPt9GMkaj3cgjNg834Z4xQrcYWXRVDcacKakMT",
  "key17": "5YKEFeZp3rsVjTJQtXpnngECsWpP66Hwaxsmr8D66zkYxnRqJiZP5nwKoFo6CeMUECUXrMj2gybCFS59iCV8eXSB",
  "key18": "4FpASVBPxgjVYXycWEQDLFN85MAbxBxTMSrubs4iFGpWZq8w48Ds3nXbje2fyUYGwtjD86nbvn1Sc5zYrV7jwSL6",
  "key19": "4hanpGTc4Cpy8Gnp6LfWdjCgMX5P1JEG9ZWPPTnYNjcieS76TNMeFfdvJ9adosYivjVSCYnqGjAzPyxCVv5St72Z",
  "key20": "2LrzALS2Q6zCa1kdhSx92Yfc5bMoPXyEQW9xkPvEbnyb7Ri6h3mCJeTUNkAdUqvXkCHikzmVb8AJ2gZiCUFNhDGT",
  "key21": "3NJK2jG2EEeeMoxNgqaV7jYh6fpdH3zzMdATC9n2Bw2dz61zdKhBjrMZijbWxyq3LureWXzVCjLEHaiv6stnFVT1",
  "key22": "46DyCQR9GkNdCrR65T354CfU9N4VzYSMvCgHv4SJKrkd2pLD4rBYnxRh42ggu6H37sVPDPNRMqVNqJeDxX6i7iZt",
  "key23": "5RiCJ5QVoiqiLonux1U2musaJGmpugY3ukcQo2Kr3BNVq6MTxT96f3MGghc5ZXXusncMe7FAN1GW2fgRaxVe1L3n",
  "key24": "5PHKh7uvre5WGqnviydw3oXEsrduVQMKNMJkyNb8udwYiDen6M226vG3nqih1JmMkh5TPLogvUkAaKRa3pgswmih",
  "key25": "66eumgiHpUdRTMPBRBVjLKaJHso1ZqohXfbXZrdQXwgpSegW1G695XnAu1eMTVaFAQLT9sxdjkK7bRPSpaJZmfxx",
  "key26": "3fCzTugD2Dxdn5y97zKH2AYEZunB1oQHoaTjMsgAkb4zkVCJ2zVSwexQ8Ddg4vvXxowe6ciyfb6JxA8eiyUxTkw8",
  "key27": "5hqFg8eqZsx22KVtH2P9sjbQJTVdJVDowWTNvG264fpMJiWztwaePau8N6YLAi7f1Xa6RdKbHTnQas3DgNfW5ant",
  "key28": "3w19XAsncjbR3ncJ6VZS3K7ss8tWGaf2hnXSt5wvYGTiHEiUvmEH6AWG2gD96PAvX585t5PjSYMHEfFQ48XH87QB",
  "key29": "5rbAiUks8XieNybmbwd3wURXLb1oFVw4gdss2JHmceJFs8MFGLMi5Np7qANFbjou5YjrPhoTVddzT53Mv1jGBhzj",
  "key30": "BosgtAcG89nADYukupwQwscEMPkj7mekxPdojyZ15qpSy9ScxQwq7GZEgPkQUz1WHMry1u6y8M7b6UdMy1rXB8P",
  "key31": "2T2DcCJWHE6kbmhAesuT3YXt25CuYRp7erJN5jvaDdcsNQVyZf31xeiJkng8zePwGBs4M31fuBPodV8CzC2kvNw7",
  "key32": "244iwVuLTSKSU47pFQgcZL9tGd5uyeeo2176V2Re7nG3qdyUvpAJUhSymd8mpeBfgyvNeVWucYemSixarXFBsLcf",
  "key33": "4fpJqjruuGrbdZsg58QMmSSRKTr6BCAnezQVJj72YZKcLnnxUu3idj1mRLYL99MNdpySA2qdnPngyEWqaTS88UAN",
  "key34": "2CHyXYLxBsi2kLduK52jQZRXjQFWSVUtPpGScXQEHrjUoizxsANgso9Ye5m8akuPJQgxegGbhHYUtVjWDDzH7M5A",
  "key35": "3vEJVN7yjBhesyEKKoXbQ8amCrASf2mm7NH5TNB96mGiFrhyabidCuekScRfG9BYiUXSWzvgnpz2dgNdo5YUAhBF",
  "key36": "5t7ZH95QXZCo1EHVBUWBzi3rCDYz7LfxLyTRxrq3fr3dUxr4EUrWdnJA6gwjFG4GPUmUA33KFh7dpbxZdRAESMAr",
  "key37": "5N4XQ6WGwUpUDVperWe52zZZFuwto4neroSzd6FnXRNb5yDDEK2ei5TN9sRax7rW4jCsL6dPXHf1zfrWwN7F6RZS",
  "key38": "5z8DtPMneYQSmoGGtrRerVLaCgBpNoYR1oNgmHo9Ed38L4r511N2zA9GyfunqTzKxZqB6sqVDyX6gRVkuGN8gSeJ",
  "key39": "P5VcpdtQTUf2AtNznQdf9mr1WEfZYt9xWDFnYZbfAXJ6z7kHMhPtsSkrCLU7LFMG8Giq7d1wztBPAo31e2MqdKY",
  "key40": "345UspYTJLtJA1JJjUVDAGLMLapnEoC7D13uETkm81EFXC5r1zqjXHoKcDR6DEVMv4Had4zjPWMfK2744XG2JRTA",
  "key41": "47kKtZCZXRU52DFkoa1KiJLw1YaLbeVARJnpXfTYR4casLZYUQcwXDEJVu8RWuehsTBFPBAtmrdSeS5BveB3qPst",
  "key42": "2XdiZECRSQmw5ACBsQHcB9cceqQdVECXLfjg2qREjpy3PArJHT2b8Kv2r4sNPx9X5YWNtEQa6jRe1fXWozi4Q7Kz",
  "key43": "3HY8N6eN9ERmbD9xv3UFRxSMzK5z2Xw3t3DutuNWWfzZWvCc744qsUAncaEeJ1ZexjhriNsskoNvZeqpz5J3XMZK",
  "key44": "3zMHWWrZt53chzrYukdzjU5atkZKM9mhpB6SY5QfQSU56CcmMRNVcKBjWQE1MdSDEgBYsjqNNadk4hQLoihHxWgz",
  "key45": "2Mx1Ja71vXeev4h4QrM6taZWykJ2qapfDfAEuTpooApLtkYeZqFXZC99QtE2rJkA2HYL3ynVsWAceAdzCvuBjxvN",
  "key46": "NUELjsqE5oDxr1s4zJeXECo2eqx1oCfdF2SGUCmSNfHs9qFVAMvEprkB5uPiDmdor3ZJPC2utBGKfG3QeXVFH93",
  "key47": "R277wLZXQDKF9DWiLYyFzCYnTZALKJhD8Jp99oBxEuf3EKZ87CtJzUuduUKHZupt8XQ3AavrZ5GV3wq5rXZEkif"
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
