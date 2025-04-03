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
    "2AU1tRjU4Vk9BF3fsDgMxnALkA3289xnRRE66nMHGq5Kj6BFv6HtJ6H6s11oBWBWQWnfKrVVDeEcHTtJY8McocPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1CQVuqni82uJPUFQartUcmZmUdzZuoccEkybLKmq3BAFwvZKbEqzv7y7XRa3FE6sr6iRQMr4BDQJjQshEksfNh",
  "key1": "4jUWUt7mt1rhX8xdqnHoToAUHPU8qyNoLA47zSaxrphU4Ms7bwcgywdjvxWYMXBYQyXJtEJ3MPjTDQv8JC4f3nCm",
  "key2": "4y5V1w5ynzsjCvpqdxNwAQkzx5X9YQwrj5JrTYwNyJjqAUXTnfgVEtJTt6QFmxbbeW4zB35S1ZJwbcmi1SFNxjuK",
  "key3": "P39BTuuwutRwRyYLg15ja18CnU1XVjaMNqGWWa9Sfwu2TrHf36HCA6zH3h29eSLfxebhCEPJoRgdTLgKGVbXA7R",
  "key4": "toFLGtrCNGZn5AVswRRiwnxQnaKnZmmCLtrq7GGkwfgrmx7Fn9oN3c6C9GfJGUJNCd6545da5xWdsW5yDcTSMU3",
  "key5": "3Jqa8haXi5r4BXKKRNkEnCDWBnaRkdPapdXy6omcAm3dopyvFXoiarhGCSxWRqjQeiPPfzGeJxLYTiqt6NMgLWyN",
  "key6": "4FxMMbtxvmuoT9ujXF9PtVNzpR8d4Y9yZa4zuwm4sMMbsWo1Pc5WbFLzJ7cWDhM2vwBewWXFZSFQPqMQiSqUSjvt",
  "key7": "3vFMVqd6yXjA17zD5ciJvzCts3M93KEF8fD9GnwU5sLjrvQC69Q2BhQJSTmAzAARpvkQECdkQsEwYduVPfAbyPVL",
  "key8": "5kbW3rwqUWjrgRTWoG33AymgJFw4fGAdrDcZpnsqoeipSaFAsEMA7wXNNq8Y9n6L5T7n51ALqyg2X2f56qAwpWBX",
  "key9": "3tL8GQqyq9bzDF9JXATbxvynz4VvcqHUnyuLo5H6JacoCYQret4ZfNESBuRWPj4SCUEvCZCyxAaJsvNTjzuW7oHN",
  "key10": "5QyahwC1NkVLLtEJ1GRhx4aBjVdGAsaqNGzp2k7L5KWNznJgPeinEe44Jk3urjTFeahwU6BEQCDyA91wjXuS6b4k",
  "key11": "591zNDHuQHor48iJGejdbexmbigbNiMYvzLDLNM49Ti8N7mPfs6q5TcVvYVWS4WiBHcbhj6rAJjr5vfUhubH78Zs",
  "key12": "acX1PYUfvw5D1FVyVnunuUf4uwT8rQDTMSyEU6sxggUB5po3HvBxytrs6ENE2KU5njEtVEx7DJrtoyaDEWF1mAw",
  "key13": "2zZrjUfqMwEbEPbxkoVnvMtpUxNkofMgVdoqd6V9KoeNL6Sii3KYHzqRawC9jUhtrEe4jb9qe19vTTpiSEKgoMkR",
  "key14": "2XgxSiXFTnz73cgYALfg6m6yGhWKMq8mtAapwDaa3G5PiAZc5CpM6tA9x7xmjEMPDwuStsUuCVHy35SjEQZdcieS",
  "key15": "5WEhEARkaWrPmov3qP9asdLLPyVNTRtoCJpm4LW1rfriZPGA19LWp1b3BUioEXrYhLT49vTYoN8ef76Beh2UFqgE",
  "key16": "4M979AKBWPsdVo8sifAWuF8E9jV7r3f9tfedA1eAizzrx6xbi4tctP66gGhmCyg5rLiNH5HVNtc85F2A1thKENsD",
  "key17": "3SG8DAgqvf8PyYdtG1dSZpW5q1YP7pdwGrXAQLBzumiW6Kw8V6GntLnkQa3vnX5XyTiRLsDczH4vLGcqHpVtwvJH",
  "key18": "2TeMCFkS6e3qNGBc7iSn83bJP1x557N2gE1NCC4bpsKppQxfdCJovig3uy1iyVs6HPV42m42SPc7GhziRYG91jym",
  "key19": "Ze6Yi6tdeixQuRvjuSuWWMZEZrkkRiPjipQyA8sYYkD23LCc8VqZWrdSf4SBmbEWq8g418L2yuwq6eb9pLKoFYs",
  "key20": "21zifepTcGeyKfVkL4dkFatdcSVQ9ZM5HsAZYd7EE7giznugMqWygEvqHjsmKZRchZQESa55vH4MATvbvdCnJ7kJ",
  "key21": "49J9v7SJm5yXpK4TKTNi15Ur2hK1N7a8UB5vQmws2vCu2j3FwmGrNBCPzzWfn75uSLEZhEKW6rQUXmQUXQVxW3oV",
  "key22": "5CXiUaYVZA1HMMyktnciW9n9T5qkhfXGXJNgtTecvpp9kNhChsTY2KnF63sVj4mGFMtLAbK81SKjUgaryHATEqke",
  "key23": "2d8yhHk9AbQmhfuT4hd1DU2so5aJmf8YDeKa7gvLvUj6kqZPzyTQ6znXozwPtAKdqHQG27Xx6ZUAmzrfHrGiqWXX",
  "key24": "4UTCbTxFVLj9RYKiGJi32jX8GQPHr3Kae5H92gMbzsRrV3GrfdfV1Pw5fRVSBTCrgVmZFPgAjQz4ZaFUvAC8Fe93",
  "key25": "2QGGcga7jRNEvL3LTzapqpn7gmr3APdA1ur4cy58trfpFxBhFx7n1xU7Si1vdw819zY4G73hc8EQ9TgcHZaiFjR",
  "key26": "5NNGX9w2qqxSBgC48NHKjdM6HRsDrExwBWQLY6k1C2Utt1QiNBo1QYF8JjTZDPmP5YKaAafGem8U1SmiGEKDx1K4",
  "key27": "26GWZ25XfVubidRKGjs2YdnRabAmFDcGSnUk79vaMmDU9Vum2xm65EzpdFZAqgdhVbQ1yM7LaJF68zz7yDEabKZ7",
  "key28": "nSQNFtJ3TjTfwqkjVojhFYQV6h5TqyBFZL6EHnNZghqJK9JsP6sc4ADtb5cmP996KVWxJYqMZQLNwuHNk4t4YBc",
  "key29": "28wLLmF3mCkJccprgNnBgwuT6Yc6JZ9vySnQADGUQYEuBggPv2PnbvzDAQxdBktSwocWYxLto5XjxmekMwbjN5Tj",
  "key30": "S897HN86NwcEraFFt3UHhCQhhBxkfFH2HcRRTLt8wUu5WRXyLjdvtb78gyqYRA5KMAGY21NJYMRTibDh8R2oMdT",
  "key31": "2L5aV14Bis9M5JTcqcHmshwS6ENf1JGKPH299T6LATbZe2oLAemDpm6gnLRNUraUE8kaMptLiGwK1EWb3PfjiGfD",
  "key32": "2DtUjQtastLkjMPy6BU6rVXJ3VDj87avPqNfLYDUwzzSCc5XTgwi5tr1ZqrGiRpcqPiHMeMGBJv8bnAsY57p7f7x",
  "key33": "5HrmmqqYiU9pWJXvKGfxyZttoG2RLKU4nw4uk9HRMNVgE4JU4qHdSbDzq6fbBFxDtCYYSGdvGbxTwZSLWpUJmUaD",
  "key34": "pLSTRMmDRCbbZpNvGrEQZ5pDru8pqEPYtNUYb9Ttfapr1SKpLyHT7kjRF2GJWskze8bKX1xkQDVEvaZQPuCGBcB"
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
