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
    "8RqNX3fxW7sH2N4Qw2YoJLnjj8coz4mBAzqBGN9vAedDk5Qx2LNGTJPtFaJeGmSXb726SVzXdhHNakQom5gB42y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPB36mY18NRBqvQ83Wnd8xzT8EfaM4kdGcpkDvfv3ziSrfuketr7Zeq6j2Tp4B4ay6EUim3MivjdtUdkvzr5GnK",
  "key1": "5fS82TAeoYozcT8FQ3je7S8gxygcEvdWj53oEC7QK97xCdJ6Fxa8Mu8DSpLHavhChHufg9PpH8PpKHNVVUSN3sXY",
  "key2": "28FAztmsS6pADKhn24pkHevM1TPq2mywA3yFbjTBWUb7MGMY1ddWHhXwyKBpEKgzuiRHKMRvaj8sZ1uHnUL5FrTM",
  "key3": "5kxZYjAroESLawEmSpHfqVT34ZMbaSTztQg799qmJHzhZeJXjrsKwT6QWpySLDkvmAh3hmQRBckn7TtSoya1Mzv5",
  "key4": "2K16A1PnMWnDwUXEXgzsUnRCnYuZVCdEjsNZaDMtVGK1pRXKb2Y4SgoYm2CFdgqo1uLACKAmYGhS4WM41tNBMWnN",
  "key5": "2TAwz1jN6CgJcMFToxw2quapB6DHhFsA3U51em7jSNZ2X5ZwE4kUXLkhdHu71qVhNySnJVwpGjNWyhk9C4Sy7yox",
  "key6": "5ij8HfaM4T1pbAMmw2Wh67nqKDDZEc2a6JbK8DzKijTKABdW78QmhoDVEddvTXD8iYmgvDhgag81b2Yd2F156uwy",
  "key7": "BMvdFowoj2uCUaZKrWWRQ1HVf4iWwJnTHGF1GHBqfsp56rqhurnkS3iGmBMjFHvigjzidGZBLFBCWYvCR1u1ERH",
  "key8": "4yB65JLXNP48yvZY442TbcHjaHKosBTfPWMwpVjnA3eGaVfPXRxNLuUqoRC6YDidaBjPd7mXomt6RHed6r36RX1y",
  "key9": "2wbMWpzzTp2rzYZpMSBUqyKdzKeEgTFWxQU1vLqCfCrScAGeLHzvzu8vyf36Puz1xfoGMwqp8VDc77SevKea5y73",
  "key10": "2i3Wg7CQzQyunWmvDXd4VpnuLQszcJc2SjhuHZeWrnRQ2cLLhY51LHWSawNYmsczSPQrd1KcoH4BrhJK37QT1HeP",
  "key11": "2ja9QCdcgUTsZm4a6CbsohboGw42dvjGuFViEoGHK2ZMA7jfWFcC2d5yuaMxxsEs7DXoDnphcTR4SAAqSBoiMkXn",
  "key12": "3HT3vR4eHhsFw35ptJGMtr5sTpfdXB4DeXFpB7DPqfssHEunEYp7TJB2StSD1vfrazMEr6jX1hewieMFb6ErFJvr",
  "key13": "21kbKqmvMPZqVP3K1hL9JHjVvzSgBBdq2i4iud4NTiPBb3z3f7Z7fKcNgKLpELNz8RP9uLPXTMNvvH8raYXSWhgR",
  "key14": "5c8SwmV3gZ4FB3bAYR2b9FMzeffrD9Tr9Vs8Cq7JhmpzivHxg2jRX6WCnzW5hCDqzy2tk4FvsHf1pWYdfe2qqajh",
  "key15": "3VT1ZmPfh9YsLLf2KyC2b6FMmB5N1372vpE3vGprJj5SLUvNbbqBFH2BXhcyQWriyTwczsgjS4wT9WrBVfHugA3h",
  "key16": "3CLQTxRHpVkbgqjGhxZFZ3MCJu6QYGYBt3SYBjmmyFkuuZCY8aTrqrpGVeUohmLnM7tm22Gznmi1cNSPg1ng5CHi",
  "key17": "41ebKnZonufEmt7goG98WExa9UCUQv8hHfE6W5vT3jh24D48xMC2iUZVsudtX2nbTvaCSUPTzYeT3uQHMqP8h7yd",
  "key18": "4TBuck992pKW2n6M7CtBEfYPZ4ZQ8VStk1WPQQBEKohTrTnsWEMbLdhqcZRUEmcPvYi5adkBxPPrV65U5r34FYro",
  "key19": "37xpNp7uPB2a9L4428ihkk22xoenQrVRnhZuexfFstVPJdTrdCC7SucKFLmpvRduBHn8Jg8M149ohbANXskWxZXr",
  "key20": "4YT9zCN9yYx93uVvDbix4UJqBGpp9hgk4o7rpS7EVrSHm5hNA82RHY2e1TaG2ksZQoCUTSwtQkbkw7BrCnT2FCoz",
  "key21": "2hs8MUjD4PrtdDLEakesy4zSANd3Wbi5avM3K3wb6pfQbAHgWHxRytQiuaM3KoJggu4kkv4PKzXTuiEfY5LiZ5p8",
  "key22": "5Ye8yahvLWoyiLHCrEpBphYmjF3NdMrvht8jYZ7PsAxMjpZZM5grhQokA8AP99N3s1Qn2Z2FF2KjpYtkDpsjSXBc",
  "key23": "2R9MVLvmAeEKP7NHDBqyvT1keVMMuu8nGuVDsvjS3cz13sbrkjw1bYVY4jNP7rzQbxiNrQFZnWN9pm8XH92QKQCi",
  "key24": "4ACWidEqvhKYo7xxVHUPCxihoYXCQamH28XRLYezb33iN8q1oHW4aEoCdu1Pgy6fio5exHVfxhcLiCMrr4nX96wm",
  "key25": "2CpqmZCQb3PggJWCvoyHyCJ8R8zs8FPynxSe7DGeFkF1csXEYxx1zy8q1PjfJvpEWQ6PHoLrCN9aebfV5YhLmqEU",
  "key26": "4vsPfKhwSuQ5ifJmqyRvJz5VcPavtqUdzF5NM13UmwthN4qNiwa1VX8LwresE3nQYfovHBL7w4yF3vaY693KC4Wb",
  "key27": "WniDecxpJakQPdFrRR7AxSiU87Jyp53yTkpkqBnrWBJaY8E8fAHUvYqm6Bft1yBrH21NzFtBVJ6Lhvd62FCZb6E",
  "key28": "2dZQiBf7SYbdQKYekAYxDNHEb1hWcdfPwz9YrKPHdf4L5W45jhvrwvYdxp5mhMoC1BpafY2khRe4pifnp84Lh5UY",
  "key29": "5cSGaHp9E5Stfs195zWKULHKw8NEXeU8UGQCmgmajDwrUs566vzKpeXVpaR52xL9ageGwvFnXCPR5KhV6HJAZ6Lt",
  "key30": "3zkGTf5hRrCCAWWuzBNyJCkCBTEtXdkLbDYJu9fYZpHGdUf1aVywFuroWEWaPG7535Ym7qFJjrGUTQLgfLdqZ5og",
  "key31": "2fw5zA7VCwU9Ua4CzdCLNzjwjPsdZSTCa58RPYJ3wsvhb54Xu1iiheugHBGqZ5UdVo8W5kLEYX9aTvsQCXeDFeCQ",
  "key32": "53HrxqJD5pEvzQE7joiNEGVrwY8H2KDMd2vWrywt7ZKgDKdxNFDdTSDqDbLX5rm5yeDtfMK1WbLvkUuG5tk4viam"
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
