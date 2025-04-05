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
    "2Neg4e1wFfVRt3NpG9QgyGtmnwGv2KbkhWy8PLmvgFSHjhn3wsqqC8amxrJKMzp9D8jy3bDoevi23Qg1eZZnLRfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cah9rrdBRuhgVHUiLU3nQYt3WjbZmfUzRwSTESoSrVGGJj2shUyCP8NU7TYXD1Fy288NVftrDueA4kg8nPLyiu9",
  "key1": "3tTWokZri1vnFHHGmcNEw3ie9kPktW9KEb4voAr1Bei8HXp7VRDyrXyQXzj8v2EkJB44rfqh6M2YpGHwUwmw1czN",
  "key2": "5Mbeb95gxFfXMjtuxEQH9akDjrqezmNcretWAewDAis52Q8md9sUc51LEADd6r1eBQiqdznBhfC87XCdWkaY9j1R",
  "key3": "XbqGVJQDPTz1zT6RJCeLdfkxzGEDLq7iifgm93YkjPaRHBuw3rarhfaEqYkxgGxyG2EbG548RGZuUsmZ5SK4A7s",
  "key4": "4NsNTfsWG7wgGCXpqW8CCE8w2nSLqLQFgBZQ1k7tyuZYQebZPQLMyAG5YCQDJDQf89Q2Le7aCEx3CDownuTu9cY5",
  "key5": "537cKWPGQsQxJRLeGHdmFv8cy2BpwF75RAgpHBg9WnKRUeznBUsQeoJ2GRgsNLJ6U6p52xmeUFcqwAH7m9bZQJTT",
  "key6": "5ssvJmZ5EohSuG6ZfBnDCzZfwfSNupp9P3VJyLWDdD1A2Ff3WFjTTDJiBT6FaYcjwcrHAfPFxMniPogVYG4yoE1T",
  "key7": "4QUHRV9o611FUFQXf6rivcii4iwcPwjxRpLnZ2UZoRqXtmu4csb1onfmiadzKSNdU7UPh2KBMYvJy5hRTQdhXYqG",
  "key8": "2uNJpnE5pxiHbtAGsJtrwGGcFvqYCXWmGitenBRqcNiceB1Km3oSfKjTcqzzj4Xvq1AewntHCddpjCzkKYVMcUG2",
  "key9": "Zud1evQTKUAmWeavD1mUabwnGaaer65NUZ4ivPcRRcmcZfBEhqnoqh8YjjBjm4dHixXWBMYmHZbRmrkz8fnHxa3",
  "key10": "26Jx5hqM7GxaD6zg7nEDVJQDtfFDi4D4AK92VNXbAEjbNPSXQphtngaCrnLct1w5GPcQ8U7trbynQb9zG3F8fMbc",
  "key11": "39AqMQbHc9x6gpDTYFnZWQemFnKtz9tDRWpBtT3T6uuUs5u5UGxXqa9fXyhe3vuH72mFk7AHzNwzuBEw94rBqW3k",
  "key12": "5kbDK489kWTtQKHE4HLrHxbosVBrTWoyP5KVKER6UYx4Mnqm3fKkdVZU4xnx2QRnpFEKCwvni7gSw8rVremb9esp",
  "key13": "3e8j3kstZauwpMjTANbEbobxANoiYPbRffWg3UKh5J17LMei8Qt96KzuufMUSHFaFTY4wJZHVv5vpuPVEbs46YNq",
  "key14": "2AQ81Vbq4rWKTg1MT55ZUqCVnAQLYTKvSSspuwZYLgUAEjhMypnAHioquu7WwMy3K5K8mKZguQxyqBLkfyKE4hUv",
  "key15": "5DG3ijk2NkuAFC139bCj8zJwE4R8CxsAY7Zh2mSBoXda2G5S7cFyYCymvNC2HmSjgywiGqFf7UsiZX7sQT2ACqck",
  "key16": "5xq21bMAxKt2hosz91pHTK7C8wrzmtn9tZMjEggEyn6JiTep5V1bNGUpNrGjLgHsQ4DrbEqnnVdrri4rysT1hWJ6",
  "key17": "2aDbpwtS6Eq4cqkC9CqmsMXhj5XosWb6HHsJkKSkok7BzNDbqo5pdzh6AUsCCWP52ac1gbkUKF9vSpepxCc68tds",
  "key18": "2cdC1PRmEFhDEKwNTe5BbwnVzzsuE7XeTtQrwPm5TYSJXuAKyoemYJLf33gLsTEEcJqC8UbYmvoRnqjipJrMjzhU",
  "key19": "2gPSuQhecyAMSUb4cK7ba5tLCp62PhW7421ddwYtovAEY8JXYE4Nhg8MQPD3Yc7KrkVJnF9N6Uzen5wXFGbZRsSt",
  "key20": "2NLAAzkTJC2BYwPN5hjEszKWd6UkimfZMCKKLXZwMuWjsgV9a1GxAoj37ChTP5WUpPkWQ6qThULQNHPiWMXPn1CF",
  "key21": "32SSFUojHGSWsyjDfHBFXDphrNAtMrPK6CyHCSDQUVyzvdQkfnxiPEzybuuKe3iddhtPCG2c8Aq7hTsK9yjdW1So",
  "key22": "3U2yq66gkkpJNsdR9yyDDDAEYf8PSPjNrf9DhXh81787r4LefKrbdW6fDDtiLoVbmNFwwencdqZJ3V7Q8XzkjPM1",
  "key23": "4Sw9co72ocw3AVov6uULbrJot54gqVXjsXSkjesTeebruPYJCsF8jAPfmuPPQkV1JW9FR9dYrQKMV9R7chJmQfi3",
  "key24": "3BaymQSEMPcuPAhMopzfCB1kUeBU19oJ3i3dPxmrh1dMrXpWPuHW8TXWhPRnq6Pu6bEyKJL1pHKt8yrgRPEz474D",
  "key25": "5uN14dnbEcHr2RSzWWKdKCzPfpeNvvVPCHwPQCppbn7FBjyvbyNpHJGbz5YLTksB1JVeNjGzCd6YA3Z8qjctGuDr",
  "key26": "65uvW9dWpgr9S6GubWaD1C5ygojNDMvzPJVvdPHKEAsxUdMQBwFtjwuLrmja1GmAsyKDGMn6gSfjsaWrKLGMGYa8",
  "key27": "281VnLF66cb6yzm4wLGEnwksoiQzG2mXBfu8YmALJB6Gvdgham6v4pttwRddwN7iaLNvBGU1krghHT2HtTVCZs13",
  "key28": "5Hr2kLDJ9rhHSr7SYwKgD59Q9yFfqdT3w6Fg3MJ2v1RjZ1RvUxiCJjXr46RZfmTrwBjgEvvhQf1656UKhknaVXXb",
  "key29": "3pcF74ZDckg32WMi4RnTcRAj5ZWzNH4WbT6mpfGT357VoMfcPP39r8uJiGK1jFD1HWFdMpjGYwwA3PotMQDMxhYH",
  "key30": "4BThUhNtbcNjJ37j6n9ZGDeMv19sKc5ELwh1GxfQc3whPrtdpL4fpPusFRR4SkwrLZW3ccsJVat4F9YoxJv2GGoZ",
  "key31": "6WteMdTXRZAYMWpnrAwKD2Fscze6tuNibKFfYwUYx9nDV6DeunGFX43eoS1z9xmyyywEZUyQoA67Le6UzrfDjUD",
  "key32": "y4HsaqopACtp9mehH6hhGi3Yd7WyLT962y18AHp3N29duQrC1FkaStrw3moDSTsmN6suWz3JvnH5p9pkdQUL3YG",
  "key33": "5hCJFYZGqeyrxKqiCbp8qgjWj73uQPH9mAVNKSvkgneZZbYu6enPug5vifYUVPTJjV41nUrA4FsWXjGXj4AktdSi",
  "key34": "62ixfUrjQNd4NyQZS6qpNvkXPnQKDp8DdrpznbJmw76PwsApPVSbmozja7ij5AoEPmj8scFVpsDMWC7cZUbZv4DV",
  "key35": "36p59ui7LgmbB5vxcdHacb8wQo5aqh5v8tK83gJUHGYTH8XMLcJdVWAGPVPbjhK8ijFZ9EAGLNqwtFfy1adPhYxr",
  "key36": "CLzZcVDUrVX8HUDGtf1eKZ4HhUvGakqDVLxuj3Ldjxu5uvRViS1dy2p4QSUMioZdGaPUfEs376spGgWzwpdJieY",
  "key37": "3h4vZLkwmztJC5a6aNF1GKdaSZKaVwfSPnKTjpvsVx8rc3heQPm7oLgY3AdTag5QFRW7Meh4VgG8Mm2M7MW1xAcp"
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
