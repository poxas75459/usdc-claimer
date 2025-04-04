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
    "3JFnPZdSSdWL3qdaK8aEQdTBS2eTJeL2NZc6CfDtfbd7azRQht5DpdPF258CQQPZk8CpG7yMj5JfXU98mjGiV1xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdapJUJ3WWJQREATHx2B1euE3n6tk9oYXqgYRpaeXSrPGCqbtH2TkxZFRXvPiLhmgNRJM1NW9iBnnEC3L3fshYr",
  "key1": "HaLEzhisFwjbDS8zijMREPCD6fALgnfirC3XFv7UajjrS45ssRqmkj1ctFb1jTB1cjQotaVAcMtUMrvDFsgEmza",
  "key2": "52UsfYmQUmySgD2apVPiWEo4yBLxTTWjwwcyZStToViPhPWi1DXRMqheY7Gy2EPLspmibiMsCUDE1Tg7bfXhtd4s",
  "key3": "2ScJA9BjsUzuJc38DCK6RrkmzZuq74CyXkwY55WDhzPsZdJaSyMXSkCS3dcUBTMPTtDEugq6WHWcTM69EZ5oCgyb",
  "key4": "J1GNUwB1u2H96vKTL3Soyeg88eCWm9n3chQmW2rQvv5vxjF3qdu6j2bBQ2MAfS6nMwzjaRWwg1uzd5M2p9rnktQ",
  "key5": "2rTdYTAe75EVHzV9KFZTi8MjNWjbTTkn4tfHiYiKQGL9Pciz3mvhDhiG7NdU2JMbXLos3LBa1kczzmkUv2MYNaSt",
  "key6": "RJmMvxN3MmUSFiB29J7Jf2Xbsds2GGBbX9iXR4tkypWEjo3cfR4Ft62fiCiVifUhzyXuRYEfhtkbHNLa8hhx67o",
  "key7": "2dn969uD1Jzier1GkXhbcfwg7gdRzQHWnxzfUrTcE7esJXZP4qshHyQnW2eu1YjhimUDSJwzvMRE3XYMhAV9XxEW",
  "key8": "2UpfZcVKUzmDBYLYSFxwC7eQGsHKhe1YUU7Tn8KYTxPbRBdkjdQoAScmZVCJbYRx5pcTgZpAcw6JLj3CnrRH1MBz",
  "key9": "3iztU63Fi52Bc1a6S1MZQmp4jkmDM75dSkQZZUYr9378vrKBKYpoKm4ee22WcrBoQeUCLo1LuvJNgQf2aa9VQARj",
  "key10": "4zffJhUuJwiYSkpSnEe7iF7tX5z9jiVTkZZaYatLX7A5QAPurXWaLQVjcpnKAHnhAjCfgfPpt1WrvMpeb2x5pjSR",
  "key11": "31EfWgP9hJQhf3ETKFUPX47J6xm1EHS6ayWa9gGoTi8A3pBQeufqEeXH46UkQDzfL6qWyUMhkGQj6z4ZkdvaHFB6",
  "key12": "3ukQxF3f3jViwsSh2QK3jt5T98MJCAnYLnxhMSATF5dwWBHhwnJ2WLdspFAuerbCjzi5daVCx9Kjmjy6e8ypR9j9",
  "key13": "2RcmJYnX4JgDbxrKzjzLjC67UxHJd6MCqWPBVRVWXGSGmen4tKEorPD5ApECRN3VpGWYrHTemQrGynb3pZhvz32a",
  "key14": "43y2nkKtosH7TWJ9vAFJDbz4rgCZnaSFYkL9WXMN88sQnMEeCJHjK74Qj3NLzDcYiS3qVygH4K9CBkgJdJ7vwwjF",
  "key15": "2Q3i4UhCEcByhTwoxuuUw9nEhTDottKpAW2dduNUAgSLwYumc54hTRkbZCLvhstWKXGdYkkieRfX5iYbSEkNWpLV",
  "key16": "5SyDWTjHXvBh9Z5MW5L9iCo72mAs7xaAVhdKxHj51QnKyHyfQGqpbMnFLbiXdut6b7cpzWan1cdKrRxF5T5cciMd",
  "key17": "3NVAE76HzBBwgFyTShCY9F3YHD7uW4TuhhctRusauio751fQVxakmtC6aUstGxJKp7Sr53o7FcCwvCXYLRBtm1nW",
  "key18": "37mKRGbo4GDqZVAT9gQdtEA2eZomukd7P7mV2QWxyZen21qo53iZRA8wK36fey1trtNiA8t3ZXZqGfrEyAAPjtpQ",
  "key19": "376gzgRFCUGTgCAtCCKtmcVtiuU13KnTeTreEB2NVwjr6MNgweCBz8FQv82sn4km2VAST99qpeknJpFuevdqia1k",
  "key20": "5TLUeAW7V4gUE3ojk64nfo6BiF8AnWycoPTJDyrtZzazLAeE3Rn3Kth5xm9GijVy9r1Qs1YgH2z7YMGDiq4J78UJ",
  "key21": "DoJ3vLFw9cgxxXwjeTWGzLatKKcgtiMKaX9sPaJ1DecxN5Bbdeow9tVtqhaMdZKAM2kEXgJfLxdZZpFaHy8n36B",
  "key22": "5viXVyc8XAvc91eetvzmws4ihkqEDevmFTtEfWK42RreyhwRSaXmYaBkjxJCGNXsFTN1MivZNrf1E8PNeUCZHgQ2",
  "key23": "4Kxp96pHQf4ortkmoQp69QMZcQesS68Xzv2SwN2SEm3WHv6Zc7wfWtPnEhGrYkfNSaB1ABRbHKC46wxM71Pg37SB",
  "key24": "4uAFjkv51qYECUjQDo6qhzSiweRLB4iFRnG2fv528o6HxwLgy1vEhxLYt2vEPStsMR5vjgzXFd3ZGUSKm3U5W3UN",
  "key25": "3h84F1iELeUTmSJEkwQz4UxqfftHt5Z8MQYuM8RTEeUtEAu96D5AtTLpZVEq66zgSA6LDrwpb6mJkip4BC6Rm1ZM",
  "key26": "4GecEr2TJdsuVoFfFXmDASW52a52151F8hkmzzxadwK2WeoDcBfK13XzEg4bPttAWftEvBcshEA74H2LhnDS9Vfv",
  "key27": "2FLtiJKf4JbGB4hCVS7PfZLVm3HrZp2NUfDRxzJB2ETzbm8FTDdTkouXSAMcQ26xcP2TkaUeyR7TwiuWJt4D38Cp",
  "key28": "3suEsZC55zgtVAPGrNS5SrE4GAfBKsiikiuAyBmQjdY58NsgE1oD4w51GJdmYFyPJt4wT3gzptYdqWHvwg5wJR2c",
  "key29": "42qici7haCDcJMwEKcZYrkoDqiMxZYi8t6CRSMrMQxHMPeiA12nwxkqnFtBvevvs2znPhTKWMpLUw6rjvwiteFHg",
  "key30": "t8EmtgHAQJdsusSStoPg4Dmt9JrFN7ZoFd2kwABsDh7DijFg83pw6PnjxutLWAaFv8fNUwtQCaUqkBwS1EFpdvA",
  "key31": "4jZgV6dELrfcrWeuq5TNGNCqMfSZM2NfLHEcyGmVUkeHDdtu8t4LNNRgz8YmCvJ3eM74jmH7eDM3R6fhRkXCFxET",
  "key32": "2znbZi2bCALQ9TJgZL1D5DMZP5DPdoPs5gxh6voVfsjDJpkRz25JmJWsjKSRh4nx12ewBXfnbNCLRR2s1CuCEZWD"
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
