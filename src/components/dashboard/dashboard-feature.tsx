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
    "4nri1fA48bG6qVVzsKeBF3aHhtxWvHnzL3kq42XDraEpSpu89HGKrvKd5Nb8FYzdVjyHoYpERMQ1XfgcQDdge5XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DpAb1jqg1m7NR53cueicDzKjepBZqGKFEQuQRoU1zYq5MP4aiJkqRbNSDXfw6gqGrfn7pyT2FqN7VHDryJVSAjx",
  "key1": "3F8fxgDSLzbVy2mSuJqXyZXJG2PT5THGn8sb21piKx19o25KK7UQ7fcQB3nmjtBtcSpVcMwHTXLZW3As94yfZuz1",
  "key2": "X7UjTXZPxd1PRWXSboU7sqot1kKVocSGUMUwtjRKBcBPRYCb4GS17krsBBMNoLzJZ3cHpk8UC5eBYrj9GNbZRiW",
  "key3": "2VSVShAzJYqAdai6MokMzMmqijQVJwsRJSx8gAiQ2BhcDU4TYiocZQdEm71YCCQoRHNBuToBWpRE5taEVopf8tpu",
  "key4": "4XCFG13TRixCkGsu5qcYHhbikNkV1eyryRPC5eh1xL7hT3p2UcqzD5dNMS1SFS12G8YtqGD8GicikuAGMyQXCEkG",
  "key5": "63fFfTcEKxcWMws7VFsy32NC5Tp5Hh7N2DTmB4a6krLXgQwbSwpMa7deed7VLxfx38eFrviG8BKbkDhEmwLWeh25",
  "key6": "TTHPs8M9gcFZpuTcQ2vkQcmdtbrPmR5qPuQaY336yqD2TWhqoKqovyjoUGYY3tRrcbf5kQBgwUWuHxznLJCA58D",
  "key7": "2V33GEUoV3RPp3EnhcVPYPt73eFAa5Mr6bRgD7KRYfryzrcSTMsCTyX3gQ6bRjkhSNDjY2v6vZDAs2NJTW3iqeMo",
  "key8": "5yY28M5A7LBRZMTuE6K1dFq92ZjMjPvwZhqdVkfjumDTEwUHUTznHqsXR6nhAhzdoKrWXZYhLtz9B1jL6YG5WSa2",
  "key9": "32aoYGKDsc1ZwUHZjMmJfz8DtQWhcSd16JxrNd7SqRchziJ5FcD9q2GgiWPMHseKcSiLSEdEsPt5yw5FeSdrguFU",
  "key10": "56kRfZn1MUBBgkokTQfz4mdiHsP72QNcrgyPoQVezdLjtWHRa4VyJmxwjCQw4bGcqjs7tQeQnFYsUKKrsHG7BXMa",
  "key11": "3n8ssUYpuqdQ2xNd8GcUxjPrqEoZXMwy5Z5YusijR1CNr6dEG6zhiFwMS8nYE7HQ8n4PkKBst6DuQppsEtS64GGs",
  "key12": "2boazLpdLzSm8xDpq3X9mu5P1jiFzyaycbioc46Av8PPDFxveKu3TxaJPZimFujMi4aPvf1h6RkrTCQVeMi5MfPN",
  "key13": "5xa1gLLheQr6mgutcMji3c9avR14LaecA4ZCUbXm2njmB1sjVUdsZCBuYCELgzTDpizhbNGG3gVdn9HfJsMcfDqf",
  "key14": "5psQjpSL23rVxVmAVDeNtWFhEcqgGmrdhLEQyJkwTe2o2UbTsNQbtkyWCfNTGSfeLDhMZfjYKe5BzJNpuArxYLnY",
  "key15": "5B98LCJdWp52WptTLFAfFYZLy1WsFDUrhnosKExjPUUJf4FndTbiF5sAEmVZo7hC5BgQXZkbmgbnMoxDTkaHqCbN",
  "key16": "3aDz8XwJpKKDMJjs65u2GQyd9nKmBDp8qtDecEiT7D8hR9ZUNMnqfGm1nE1EmQaHikMLJ7opiwadPkoPsd17jyDE",
  "key17": "23KowTwuQkhZCJC7R6yk3ikJ6GFvntwUTZKNmLkV1MtcW394B8FVxu8g5faEJ6F5RzvyHdCicmwbt4T2X1Lixr34",
  "key18": "2RVBctS3hN9xpE3NGy4Afge1LR5fMRTtJ4WFpDwp24cFKjokafpme3WVBFQkuAjz6ejLgN9mfiXRqqgfP9vqcERJ",
  "key19": "5z1n53f696HHihbsUB8QwRsMLX7rcaAJom48LhouMzdf7BvefrfQfJa5BhT6cjszMbXDheMktqFTqwDJgM6cVfYs",
  "key20": "2VyY7ZQfqsnAkDtbRDuuM3VtFuPyw2DXZYGrEnHwJB3cMtRg38bLQPoQCDnxDzgXcMQKdtScAV2uBLwmaMdxutRb",
  "key21": "3CZMCn1rofVpsHa52EycwXXqdbvFKRHjaGjjQV45BUjuB4Q3wrYEwmFfpmNcgSHZVgJV1ay4bwrSNEq5CMGCxRPo",
  "key22": "4STMzhK6YKc1E9HmQf7BSjh99gsrCpmxHBV3vF7go6PngspcDaX3grf9mxraNYuB9tjMcMamQ17FKHsoqJcRQ3L2",
  "key23": "kYvuKgjF4buR8wQBvPA9gKGepHmpRABkJg4MWY5V25KzCnJSCTLZM7EjYKyqyi771gqtf8VeoGiBroAKBgz2Ygs",
  "key24": "5hQMfvvTWyVsh66HnN1oMiJE4vdzy4gUJedUSYQepAWSV13kQAE8Ut4vmrXecBZSms4pyWHWvm8h6BkGqPSLLQMf",
  "key25": "KMiCf1rtgGnXDxS1U23G1sQ8xgYgRyFmwNeniERnxaUTz4wBEnTAoouuTrq274Ln9genikztdBUvrqDD6C1GoSu",
  "key26": "3np4CAm4nGtvDSXHVbszKc87RcCepiXSAyK3XCQhFomPDzRuqVfwkpPiRf5RrvKJbBt84Ch7ESXafPsUq5wrGmk5",
  "key27": "2VTXnWkTJz4TVF2s6ZHifSkr1Lf9UhQuQ3opfd9mXLYRyGe6887PoyHRarCknmFJ6cHKte384UNfqdWueRhLXfG4"
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
