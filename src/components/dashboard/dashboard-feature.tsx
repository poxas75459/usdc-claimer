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
    "2UV3WaLzPJkGg7U8Xm9u6JS7XjfBe3ZSoEpsFZDsedGcTuaES9xmjwRBcv6K8PbKSwPay3rEFxbSHQKErxX1K4Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KU8AJRcc3o8vZghQY5xwcQAR35hMftAFnXTDDmfC6vsNrnny1n214CNkydqtHkogYa2BkKqy3WSa6TdJB52H94E",
  "key1": "3qLrBZSc4yxq3Q2g6cHmPQUWJcVpcqnxUDZo3iBC5HNEfbva92FPidwhVAhdUGjbQQApjUzikbNEHnUMQVnjxeGH",
  "key2": "4CCwzWUqHHb4TJr4tBWD4HwBdpQB4YazT61BiXg5nAU7md7TeZJ3WWx26ceRtx6be7BZz91mE6JFxNzhiHHT6j1M",
  "key3": "PgAXdFbyjLEzu77itgGKwMWNRFkxt4UT1JwgGDUT2o681mEjaTWZfV7CaX2wLyKtdPeUCSj2Fcy6ZBayVvKHJxz",
  "key4": "3vKAntfCEHsJvEyHNWmic3aooaKHvgaaqLHXGyde4k3fyJu6G1eeoNYduJ24f5xNaZMkpxry1MsqB7EMyoBMerKo",
  "key5": "NTu6gXpmMW2HjJZC1mie3MdtkkGRRFixEnoDWfdDGcFaYbx6N843gC7cnwNYaS96hTusBgLhGAN4go4K1pQ3zMy",
  "key6": "2Kjafh1mugFDBRGGSP2UtysHAxSJ8CrSsN9hqEdAMtfY2LMbxiYbSH4arkScyZds4ihrZn7vj1KeMCsthDvLC7CU",
  "key7": "omUfweE8GKtvnuGxnCB2WsQoEJGH4GJaLZYFnL59TTnkCGE4d1RxsRWMrnbvbspnapRy7WKc7yC4q1Qd19nqZ4D",
  "key8": "1gL8RJRhwpPmtmuX2A2tBDakuYnc8ovmhXVhKTFYQ519cGzxom8htGqX29WxYfRSat6PuvHLsrfE7GwtKkmNeQA",
  "key9": "3WnUhZWdMJG2hD8xnrM9BuMPHFPTmWZ2erpkJ8rnQ5wBxELkdDovM74cpvfScWDVv9VJw4Kz4QsrkNxVcWFPxinB",
  "key10": "5BxLUEb6EMzaAz8thgFG1EMdpbvfw2opwPQivKzrN9Ygwqd7D7rmfgtK3BzC8d35pqYNUDc4VjTtAuodyUJ5Z76q",
  "key11": "65a7UGefP6NzDEo9uSef8cT54MkU8EHkNVrira4nSoYKipFp1cNpoz7Q1V9ZXs6MAaRTNsBxEEWrKdz5vTwdSYCZ",
  "key12": "4mU7Phv3xhnnqBgm3j87MCqknQx1x4N83iPmeHYDLSyTS5v8FA6AZJopioVYHedQuj2coyQpoiBBBTLRpW6gyk2p",
  "key13": "5ieUj9gmJSm2HokQcratzs2ng8PABnBfieqLBEMwDERSURQueSzWRFV2b3GBfJrfdY96nVUXTsJ8obKVo7HX1yp3",
  "key14": "3cRj53rP9TutP86CjKXWnYy5QkZvEVoDaE3kvYarHjPycBG8eYagXmNHCWzfSUC2Q121QR1VfNPy84SJ9zdCtfEP",
  "key15": "3jm13USa6N3ePehNCvdmjMLFdecLNoNsLPbrfyCgpFqjURcNaBTtG42kxyGt8q2GWX4xK3Lx1tBLN3rXYufq6cUb",
  "key16": "2KeSyNkxnLBnzTEqFA6wjfef877ZHh56V37xBoYHCNHQGD5MZvQ7jZbyX8LM3rqJKcAwNyFbaej4xuNryAyCTwpF",
  "key17": "3sVQxyGRE3RgxnzVGfwHWDmsaZ73vszmBJfGqk45m8RR2AH2wX35eADiSEmai6XWgYYXANpejnjK6ARdPiymeAaQ",
  "key18": "28RgYJXUdB7oCdpQD8dX8hd398zc4RWSyujiFiAK2WLaDWTgKtWrqdCZbF1McCQstBxfCZQ9VDGUhj4V7dEtj8pu",
  "key19": "JodxHM3DRNqs8n19g2gcsmtHkL2pctHRU9Lt96CNYKjrgogyugxYDixpurU9JGnFFKtkZq3MDCXLbVTPrxdfTb7",
  "key20": "5HGmygn1cmXPBvF866YjFgQxjVw92uNgRRQvZpChnctrgKQ6H2ZBqzMpPM36mms6L2XqRYwZhDpeZWDaqsVHFKT5",
  "key21": "5t1ZD939q4xyN5Ex3a8rckh85W2eABqovM5dPmm8RC4G1q9dWBf4QRyALBCM8C62NEcVmBznkp4fDno2HL3xjwvb",
  "key22": "5JQ8L1CpeM7yV3Cgq8eLz6RsqA1tTXRrucpmx9mZY9nuVUg7gc4xgnfogGLHFypDKmEVegEDSYkfrqZXHdYknuaA",
  "key23": "5ncsTVXQPm7ofcBK5So9DNQoX48gDQSRcFDCxVV7AWHuqN5MH5YtrzFv7WGWmoTE59BHmCRnd3bd2ZwpX2DfCU1e",
  "key24": "h3gZy3ATreSkYLGtrMtu1ikyCRzgfNY92HzgiVnG77dG9mgkGFkHoovVdHiU1suS1RBBWXhs2UoeDgbCMVcMgt2",
  "key25": "4kxPMVoT9HciQGFk1rCn7NWSEnvgdXfQeZzWyaQXQDjNwKkkP1FhKZWYFodFS7oyocTu4qE4foQZkhN2L2dgect",
  "key26": "66YH64R7bonwYp5grtJ1LnRT8asHRd4VhFzZRpzN4ykK9LnzsrE6M8RpXcsPEoMGGGALYVzsdnfZV6752eyotfT9",
  "key27": "46gcexgeakKnr2RePv9SLUkjiZ42vaEzVE7Pv73HAwfnFp95UdCmMFBevCzhfnLnFuSTrjbmcXA6rJTeDpa8Fic7",
  "key28": "5Depoe1Kn7oygEcQ2tNQNSd1pKqL9KYby2ExJnWbbNLEiFFE5buwXWi8gZTqPTsyw54Ky7iNtGvUZQ7zxpGcjYg9",
  "key29": "2tNomTukDUWDtkwAkuwyHnHgJ61CcxqNNEBah5TiarkxpjAeRBwYVFysH5zNbNGN3CyF3RRQibyEFvwDk9q5krkH",
  "key30": "3NMuRRfLhnBtyjyxJmFhpY8WD76cjop9P1qjUAH9KUxfvoq1Hkd2wr6nX9UCW4CzRcxYcX84r5r92LMeRY2BLkg7",
  "key31": "rN4WKFTX5zqaUGcQ4nyrkTwTYxrzy7mrEBxSdrNv1PrPVqzQU2nYHjM82WUu4iBrgJDiaCjt68D4mobNAq9r7xt",
  "key32": "23zCRY4uaWjBnU39LNQkaPXAA5zpgsAh12KgLY4ePXu6jVCFkEz3234XNdUrYd2xDNQbYp6rwC55qGrzLo8xYvbs",
  "key33": "4bpUr6TGCYLj9bTikLF7o9mojXDE7pxetnTYyFBc5AER5gzYxhTFiz5LHiJAjHWjAzQEgFTkH58KWdZexAgV3xJz",
  "key34": "4XpqHNvRX6PQRhieSYjPHECKZ2woiNGo568VZfvbYxARQf2t8R8crJyTcsfYrqqx2zvhrdXCJLVvUtEYa59sf6HQ",
  "key35": "3wepDGHdNuToZ6evuUpxC7Xrsw7KZqpgn2AEs2kUenGV5g4LmHKdMKuGe1qDzVLf3BeDYkpUYsPYSRxGr8U73JnZ",
  "key36": "48dGmaTNy6yJEcNx1EP93F1gjGLM8juzUycgHUGp5ig4q5syWXwUdgjaWsFqKYd2zjbrDUnDCZbuvjvgdfzkGLQ6",
  "key37": "2qA2BKU5vv65S9vPbiajmAtu1hJeyoxmKC8ueZcy8m4ssExjTqEf6zSXtfzjC1cggspyYcmhw65QDR72rB52yRjv",
  "key38": "3EVSqCJ78rJyndEYeeSfwR6YVSAnfMXEy5YVfky5BGijcBNKuL7mK5nYY3kAErENyvCM3PCFfoM6GfScCKrCDJoZ",
  "key39": "4dTjGxi8JQhpsZq6ecz7j3vizag9jAmBa1N9f7Z9utfQEpXrNFQPGZWfxPW79KpapEGZku2UHBgfxi9rNCUzsp7X"
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
