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
    "4gJmBdhx1yMQdDeLKrpytd3Qb8grpa2N2TXQcGByULqrVmwNdDuoZnREmQNZ7nfBMQt65V6KngUAbzKsYCLj8uzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ar9pDEt3iLgCNbjqeY758cgFbW19eQ2pzqFBbPkiLcJa1i7yeSqhcg2L23eYXfBGPjF9DBfcmwxhS1Rz6hRAbso",
  "key1": "5orafgNdS4gRm8xuckT2jyzQVhVh991S6GVtqj6ioZhMDSGvY1ZDm8PDHe9e3Fh4Ck2QE4fu629HkUPPC9YNwRLc",
  "key2": "5PdQFCcRFLXznTdfkVwXRSzBXRPdFn7xg7GWF4wJmov7btzinCiiE54pysuJ9rD3WhF67LArqtTkD8TLQnDupMN7",
  "key3": "2ftc2sXZj79pWmvSKvzgHgU9zJ7mVA8gGDf7oYXo4LEDwWrkrAJkxUh6ZtcX7ygv71hRGaknz3UdY3sTgy7q7CSV",
  "key4": "2CyTtCybWewTAjhte3fP8zNZVrmXqBqb6PHKZhURFY6BS5xDcV8nWN7PjTjtLc6r6zi14uSA8JZqarkPqekh1F3q",
  "key5": "3iCfjit4zvEePEt8h2c1v67YGN1QGNiFbUqR86M3WUonvYXUvczYqEKMRMegEB85hQeF5RtKwW5NDei9u2VK1xCm",
  "key6": "5Vt5eEMoUebcocoCuGzwxyLtiTjrM6GWam4z12h33CkWvMkMDTn6TqeQtgWVj1zBNyYTv6cmdoCU8xQGbeKTM9hx",
  "key7": "6DqCaT2XTu5aWXgNyBgZHX8BFYeR4L7CudRuveojnN9vwTKC34cQnCrc8j8hdCpLRdo9mKVEkQV45x7EuwhPeb7",
  "key8": "3913VK6kWZesiiBo64BXW1ET1FPhGtcq9zDAA1QnBzAUcKwDbUmr14uVXCbmNaPBAK1JTBPGheNkEiKYtg8VVgcZ",
  "key9": "4h4PG5FgkcoqqWow3YFxVFQpejHsBTzn4CuBvDNfp4W3MdRN4zvjeeSWP9YLEB8fU68npbdiJT7ruEQ6K4ioUc3",
  "key10": "2TY9EunTCkgrfoYwLFZCoa16qjyERorh6naFBzWNMGnkgUyQkRCk19DKEwzrevsSqbt3iZtGuCBjcaSsmW29kT7x",
  "key11": "4xDqCkRf1SXNkjtaBcTQTY6vGkrm74NYyQMPWHTXWoFNarAEJGHQFuHAxkYrxerpdSYfL7kTCRuMZWVTYh88weob",
  "key12": "8knaVhHjhoN8TcyrTmfG25ZhwSRtFNi4cAh5BVz1USwR9j1TphpWRZ4ExbTMa67s2gyqBvZvptsA8Lihaf61j8p",
  "key13": "2psHcdeB4Fb4jNTbjEXTgvkEaHUviNLWzASJFmAuerXAVMVLX14sUSC1SWJCiza4sVUpgUPu7CuiAAamS3UvJsf8",
  "key14": "5fsfdYmLL5dkWZ98ddfJgEepz2L2B6EXKFLtcpsCh95TvhXVwe3knSHCdEkeDQhqkzJAXa9KD9QrWwUpj9WvJnzQ",
  "key15": "4TytbgXzdidwLtxF6eZeLNp3nqZhLv2mFjK5FitnswQhDTdNAa4EVdZAkfneezkiBhUWEpGVdhLSmwjbXNpVaXvk",
  "key16": "45DzfkP1EtgfdmcQe9jCD8edeDBv3b9jPwjAgGtucpHPYVRdS8QokgGG8nrMkgCyJbWxodeJ8v8GNiB4nAmavBCD",
  "key17": "4oqCqDtQz4GHrZtBnMSi5wR2N1VwvwFjgHj3okUYdx4s49iHJMrQbQPpK3cHNyUHyTDpgrRP43f1ymQRYcanjrbg",
  "key18": "azrpBo34aPUnS1NiykMXJn4YQHRHdXyjrKvmmttR7Ncc5XyX16ANZnB5uVEWx8MEH394iaLu3ASs5hrYVQYD5mP",
  "key19": "4dEcNemRvRRYyUFDJyHAFc7QSVj8XbgnT6iszH1U7Bmx63fTEiy1z4Rhpo6iBn37j2Ac5cEg2fKTvsi6JFJ8mJeS",
  "key20": "4p8bZn6FMda1bkn134YwMahR6nnDsCzxomZCCgBZPkDaMy2enQavCqjQHcPbkeebz14WwT3enYPcEVnTEzrLTDPZ",
  "key21": "2dRaaCV2AQKqCm67RcML2RA1qAnMRjma5sbd23K7gqR4afouzFdbHQE5ZrmcfFCYz1zYUkGGXPgLjT2cTWgtdahW",
  "key22": "2o8cVJDxEV8GAqb2FvVVWndyjJvFkn2umAgTiUzRjTyMoVH4CVBVK81SNeUZWM138LhUoUJkxhuXVyHWBTNQ4a6m",
  "key23": "MD6tVJLDSuxgn8dZ91yf5d8ge7SDaPP8JKqToso4NJZRcnNJsaGn9a8GS2k2PhJCn3itvbJiPUwDTDpbd73rzie",
  "key24": "XJK53JQNwBbzwHFc7xob3T23pBcNTrp8UFsJddtkHakymTzb8fhcf3174BAqGpbsbyaKVLNdxjcUBwCdGfETPSY",
  "key25": "5ew1NhTP86Y1MPSg9CA1wEcVmou5QiGs1SeKnt898FSit7fPX37z1cwbEiwKb5fJGG5akj1kWs3E1CRtU5dd2Hjw",
  "key26": "3ArhUgjRZgrAwvndRTT6Sq3HyXGHvTRJ2k7y5njuh92mmsNeLk4Jky3Zz2fjwJmd915qjuVs39ocj6PDcYQCpZrs",
  "key27": "Kxyo8hgwxetUuVBnAjS4qgdMHjTxKsvbx1oM6p1WZiyJw8ow3HzMnEAXrvqb6UvuKwBTVGGfJZJwB9GihS2BmBn",
  "key28": "4QJaf4hmZGzudSDaKykxcEq9VPUTXF7uhwTAiNxx1GwBkUGN5JAssMP1Gt6sCy5kifFD7woVJX6tMzHyTrr23qBP",
  "key29": "3RxdFX1S5FgLUogx3JU4tEvzjjy1P4eK3jzCgMeCvTHYLzqeUPzMwzEPKhH2hDaoCzufQtZLeeT88MQbmTdbskoe",
  "key30": "4ZBnzdZJPDVNY7XZizKon1XMk7aAC7VmUEQVGbDdPJ8xJkY9DDVawGR2oaXmrN3uSAbue6tdp3ix2VF2bjhhv4aE",
  "key31": "5Xw9e4Cib4ykL8bJ1ppypZRJcF7HHL2vr7NyFx81UDuiPRwVSuf8Acrc71nRMJcwBwZ4rHnqbE35rMtinDe8hjrN",
  "key32": "4wjF8EdzdFq9QVrmBC7nrLJc4z4khBsEKKaEo3gP1ShYbmiNpBDju7QNLCj9ArSeBuzeBNAwctuhwvz9fwWjMJg8",
  "key33": "3ph8ipsbSW9RQuXKEB3QKyUHt6FoSxzdYaQ2zPVdeqFeYPHi46VmX6NLKsYnbCwW4YJt1B3UN6ftfgLmxEjGAA7x",
  "key34": "41m9SEk2GuSc7UQ1Spm7FiNjXbBoTmNH5K467iLffRagdsZfBobjHK8mhtRhhoEQmMXhND7ciexy9W7gs9dHmREn",
  "key35": "xXoE5vQuaTYnFJ6R4HnDQXQBRw2eWR6o947vbXYKsu6WqXNhbjgo7MN7qiSVRjrZQMdTtLJbhNtoYZXg9ReqJYy",
  "key36": "3Twb6YE8GAjVR5tiqmDUzgLywf1vfbzmTokkH3ywEaBTFKfv8oHmLzRaTuuwDwKuxaQLeoaqEdSmP1gtQQ41xUEf",
  "key37": "5KfnMUaUW6j582BzqvcTXDka5C1hxN3vdD9Px67AZKgK8vJYgZxE1C2H9TREyxo7PdWZKtoqfEToU3x99cpxR55k",
  "key38": "3XBf6N5mt8P8Gqe7N9NGt6TfkmdzFAr4zjxxJwA57Ex3noXt8NHo96dk1vFsKAA9BAS3NifLZW1d8dQAXoGjG2JT",
  "key39": "4TmcBWJ3iCRpWs9EqTAVEiaXbHC3qCaPwxNBP2ginDkSA6F9wE5aih6PJMt7t1EBRDXhLbXnAYLjfDi9s57cAKZy",
  "key40": "5j7aqVr4KcHP4eHwzYsApZx2ijvXwA5Za4muo8aKp1MxrEEpvn5k8vtq2dX4DsAHxLeE6yrNQAfF4XuXodJnS2e9",
  "key41": "4sokKr91wnsPnBxKCez1bRFXFDJUNVPVLweB96gqFVEFdge5kABUsSSTVSd5y8kYoxUsWhNM851SNVXj8pC9aCRN",
  "key42": "5vyHTvhBjXnupqcVMUbi7nxFBWnGpbLGEKZNE5mPJTujVzuwC2uLSArYvr3FXDf3UQu4vKYwyYm2Bb1y2VXN6Qk1",
  "key43": "4Q7gNr9v6T4B4bX1AkDd5tqxoN86VVuib3JJcnHTythVMCWV9TpHpVieekqhYUopur4q5rz6RwU3RKszzFR2KjzR"
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
