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
    "HFDUHw9YxgwCBrPcBPTabxBqvvGhbxVaViMA384hxtuRMjNXsyLVpAic4DxKWxn3qemmTQk5ZfFMmhvGLJuGhZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BJTqKQBJhVViJQchMwvkVWyoGyL7EMw8UmR4neGVq7vXVVqdzJgaeii7pD1rGFuzt5bSKgq3Xoi1toUPyTzVa9",
  "key1": "4rckSCmdWiXordcvRjHjuQ5y5ej7q7MpkBNUJHvsAntx6P3HuhyPnMjXdAbXuhpWe3hdyG2yHM4dKUtc1hwpAcSL",
  "key2": "32Do5bgb3LUVCEHm29e5JtqyZL5uGurc2FbNcqAiPEkuhXp4Xb5Fmv1BKAA6eJdU1DCwDCikxsgEr5dRCfAfPdzq",
  "key3": "4SurtFrjAMoUwYJZ8cjAaePZqv2zGhaC6orXuk2BAVCFMu7uB6EX1buyFxtbNgeYetkzWoSaRs754tnBgtGK27QB",
  "key4": "MPPJ7xkgBoJ1sxweDRxkCK9RgirwGLj5pFwBGQZWQYD5x1Uo5hTWd9UYVZxajskdUxDrvgrmCArZDXUqtHyPcok",
  "key5": "4tAAuXhgjgjDFLg2hAcgbidfavRn3iYRKDriudVJu4mtSatdAKZy3HtqhuhGbEdzpFW4kKUdAPQ4cuNi5hNhVqU3",
  "key6": "5Ndaqcr8JQwsiyfiJvQu4m2ynbCWyTnycstisKp8ocsjpHzTheTFQaW2ZGx3HtyPxepNJk5BG4vqxYDQN5ZgeSR7",
  "key7": "5DqFJjA1UanXZy6mzvJbACzzxra3YFCwMkqifA9vSE6GiRPz2A8bkhmT9ZiFRJmAvakE8EmSSWtLnyhqYrLxJvqh",
  "key8": "4M2vzU1BF587YWTvugK4fV2CZLhuYZhbUekdrrunwSBXD5PhgXcbqj8i4ZCDTrCEZpVSqVBpTK1K2STq61ze8LBh",
  "key9": "64ctMxxem3UD3CPazG7vgBjAi66eND1hvZTDYJZT9V6G1EcmHpqv6ciciy4sZWE5naLFy5WuhyKDTfA7SbjiE2Ti",
  "key10": "5VaewzY95N6MXpTrrqwV4TDWart1SU7US8wddWR2YuQ5oqanyJkQAcaraPHcAB4stmgJFu9QjcAf8mSRQbfiJKQg",
  "key11": "4v79H3RDi8b8ywa6FHAe8JJSKYoXWD3qyynKdqJdVndyvjkSUBD9SCqeFppsSYP67xrpoJxpXZxXpRnX3WYrgX75",
  "key12": "4jXQQtNZdd61xbGPAyWbV7smrFe8EKcj59qc4VNcnPpS2rxizgyMbLuZgd2wFUwdDqHKEFUA47LPx4qr1rsFiZNi",
  "key13": "3jBALfgVEfNjQD9L9WFhDX8fWv4PvuKSNnjJpHvEBsDr2u41NXv7ctpH6zW72dUnpCvFAkWEft5ffUBhyt7gqcVV",
  "key14": "haSeT391G6cPmUL3vqMwfnektq4Rjr1SyxjqhyYM9BdnNHxHHHYiqcDWrUCRwQPZHThJRuinbRAtm1v3p1deRQN",
  "key15": "4km3WV1EgphZ6R4r57i4PdGEHr2XEKqFoDZGj5f1xYVp7YLKKHRDq3vadA5MsDLuewBfeikVrqr5fy1PMsVmfZg8",
  "key16": "33FwKjuohV5oKjf2WZAS7y5jLzktBfZKrn9PmucxiVvWhvvYUFzNbx8Z85f8aAQr7HmgdXqS14bsurdDMCHF8mbY",
  "key17": "3jD3G9YWVSoEtMbdSJHRnDgVMAyDU58FGFwsspNBa4S6tgoe1LZLum2KFi3mheJVsjHxGYVDVM8d76XVYwdV6dYq",
  "key18": "5FaPaD99QqQfitiPACdnPNHRPR1uzNqBcLyKdiStwY7Y2WgdQNdNJ4exT3aW1wKaLhETeNs4ivp7uuhY6RfsV3rn",
  "key19": "21sFcx2GqzguuHHHHVKB1db3EbRJz28CjkFYoxvDN6X2bZvQ4mRjPbHQ87JRZM5nyFhBTySRWcLncH1BSSuJSfja",
  "key20": "eCKoFP2mV5W1WqkW6VsxnrPppGqjSnZfaMj9tY4trAUZh1DiqMkRdWhnzLcx4e9T1R5diuXndUoZXdHysmtXBMp",
  "key21": "3dL9e2vaFbZ7RZAXP5q4QMsGkU1hRwoBQexwdTc4g8a5dvyu7RLupM3w8V2y5jR8ruaJY7ZNf6nMxQi3bWVUM8PJ",
  "key22": "vnwD2bhChNMpM1h3dnRRwAhrKVB47jbK5T6ghdAMyX4ecDL9coJz5rSMziGgPvV8knS57H8V9Bzf8Z7iV69e1oK",
  "key23": "5zqwf1Sov2picuenQPNsEuefU9CugV8TSNzk9NKLWHg8QifJcswxaWo7krLi9jpSZeJVZmgq7v9NEB18nVUo2cpP",
  "key24": "5PzPyWqrfySigD5kiu4Q2q5dXGfmaDzojnpi9bRtvowTJmuAiJoT31nLX7GbnNnGrArn5CdP7LZm1AynNxjXTnJr",
  "key25": "2J8abU2AjibkoeafysJd2Co4g5PWSiudgD82FGsM5JEg8QyMw387cHB99NhfL6z2uMtGutACPRU4ndhQ1F9vhsmy",
  "key26": "44tgHPjtt6T6yiGppVRCMnA6LQaY2HnGSNnUWyQSUD2Vy5Y3rjfjwtW97dJS5n1PhhvbwSWBiSx8Sq87k3W1mfHz",
  "key27": "4q5Jbfkyn8C4ibvaD7WsCMDboid5BzdJc1jQogn7LGye8NHLCWcAuHqwyPYDJ6Ldi4HfPHg7QuLXyNRjQWcmmwPe",
  "key28": "2wYS4CiXzNok513fwmtrzDb9ywzQQoPBTmHNHwLKFRmzXG7y16XNhgGYR4sFQ63Gu7MPEja1YH1E7CnuQKVWTGzb",
  "key29": "5KWWj9S5HTPDQwsv8ypGR1Y9MdZQtbpqZizwfFPAfUvKR9NkQhfGR9mFYFQuCF7uK7Gr25cHNa4kaGALGJWWJ2a5",
  "key30": "wyG1atEE1NqjSeCd6qaZi9FGbevtbwfm4GEfp4hr92DikixKYwSgx3vaY5TWjYkyF4gWEtqcfENV2FbZAi6WMRh",
  "key31": "5znA9NNd4BkuGvv3RXsdCoNb4nvBU6qYJDKAoUqVoinrcWwPduQ3NwYtHRJ5fNm269Cs4BWQbehujxSCAt13hT58",
  "key32": "3PTLgM6t1yKQMHVaAbWCXny2C5EttQthn3RfvArthJxAv5o9uHn2CLhr49jPp9qiba7WYQQQfmZRsXv6v4iXmj76",
  "key33": "pW2MpKo5exuHX2kFWR5uPfxKSb3zKDMKdmko4gMTP2gjJ8mHcSCr7HddE5RTaZmuA7ijdC3LYiRYKnpiMPaj9xB",
  "key34": "3U72WdgFpXsrCz4khbXUNkKuRxz9BcxPttczMVn1kVECk6UbxQVgXDX5GzUpe1FGeN1jP11sxNkn5M8G4K7WF616"
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
