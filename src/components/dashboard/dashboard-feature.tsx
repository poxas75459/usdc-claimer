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
    "54dYuC1zpMC3PVQ283ZvFiaroyWfgNgVXKUW9QbhAKafAnd5G5gBVaaW8AvTrP29Zvk6mgECRAcEEhbeQW5fW3dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q97hWq9dZCK55m7Hmwbgei6MBFcK3KqQJ7uqSpCNfrrN4HXKPzAucrTfgLNMvbcdoSNXZM19j5B6zncPNe17fV1",
  "key1": "2CVb4J9LN71Um2bmDsahn7aMQp3qGEA5EWbnxbKJ2i2KWE2jpa5Eve6szo8oAjHV47U3TQyKN9Hj4z61BnH8o4nW",
  "key2": "5L52cVtTCPFMGB5mwRtcxsiQiMSvG62Z6kHTLRvxCoXDSWkGpiTecqjKJSRv3gEXnpZQ7mVxeTHHxHcWMwGP4QBE",
  "key3": "4njEnA4qeGVbtKhB1UpHqRCkRB4HcCpNNuWDayVe5WQwkpd4r5WKL5QpwE2gRYj1DE7XvLSMQEg1KaNM2LoASouc",
  "key4": "23ayJf2oEbo3GDdSQKLbVJbmyWNX2jb8RLyqQ5Yq5NoocLykRGTckK4doqRQwA722c6N37CPQhDZCESYKX611LWG",
  "key5": "5sUgLsrqECu9p15j7dgrnU5hXLMPTQc6ihsKq3xTJHJVGgaHz6F4CBZwK8tB986J9GyHe1mbyVUpJUxPhMGj6fhP",
  "key6": "2GnapXzmD8GZG8bGd9UmnmQsYQ4yxMR1ye6cSL9s77dToJcdomTHgn6CjkQby8p7GvbJzWkottaNFvhFUjSbzBB1",
  "key7": "zJCTFciYny72FHS1kJLVC2SXeHaMeAM4oK2ATrCD1nMdaxcTjt57mBf7jP5uHkJ5YHywyyq7SkqoEcYfQqD9h9V",
  "key8": "3dBnSw3qwQ8zytXvevxhqUByjBaTrX9QZMdtScUoFVqRA2Sh8578cx8uHTaoru9W3nBy8tqEMeDfAPYh8hYuoNgs",
  "key9": "2equGTFR4VQfKLza9UUQhtjZLka7ZFNH3GFsLznsMmgFkPKoFQzgMLq5zDRRchmFUKLYk9jFkyuT757V3gf3adf8",
  "key10": "4MDhTMg8Hm279QSCKtByTYM9PhxLd1NXxggfepy5m3ysfFWf7JyxmvKXHS9MDQVLTrxtGSbaodwnPfXV2tr2grYm",
  "key11": "657R4fqYn6u6ASqY5Y53Ex4qK4FRs7cxNbhQL5RDJhUjjVvU897NGiLD9vBKYHuj16UmQ1pfZsxPqTRYKnxNCDxu",
  "key12": "67JcsbgFZK4PyvuFwozbC3jVQawRSUwquXFjJqgdsC1B3CvkfNtc4LZEvLEUJKeQY8BsJRHsYufQgzYj2XX7Corq",
  "key13": "3TzFeQpnN1FVTyGkdWiuWT8nj5h94xNyrE7D8u1ywjTJ6bMq8vLHu4qufvVaDJvEicbqhkt6yu3HLi4R6QVUi9zF",
  "key14": "3sRV2N1cMyVMFK7sGHt4YjJNTMxYWq3umqHHaALeE7aadtqodjGAEMubRoSFuzG7miFNouwwvaVXF5oWcXm6Coqn",
  "key15": "3CCc4v7KJvDCvjJGQjTULvQKp5tGJ3Yp3CfPnkWYYqforsJJwYLuKtYCv739TQVKJjv42UjQkuoL9ZxpJMTtwkZa",
  "key16": "5ryshTJb5qXCneDnMRNY5ixJys2ZPPMMMmAeeteXWDY5pXu6m1kWk7BYEYvLfip9dSeverkUqyFrWTwyKuV57qpF",
  "key17": "44NeBygMDdEwNhPGbkY4vPTTKWuwFtx7mGk53iWwkSZsTyF5SpJH3vvByzwbCzd2SwUsFPoE6bGgihtd1kQKwVYi",
  "key18": "53rNhJuy9Dvv1NpRasjaC6KtHGLZ79cPfqteVfuvukf13rEvpWgE8sbRZKQHpNfmMqMSVkooTVoWjtP5RewPPEMW",
  "key19": "2CBkJ27ahgF7mUche8qqzFAtWmpbrMA5kniAMBjXBioEWsR2RZXx7KwEzdXqEtF1BVSdwScTru3iDf7qnjkYxFPQ",
  "key20": "47c67KJLfbjevqcPCmqWDC5irF9LCaDzY6ZA4Pc12BdUgvR5USLEmApxbd8fwYv898zLnnB1rnecbTQ3UZBmAYpV",
  "key21": "39kfVyNCL36CG6bmqgkPxk67s4rVZDa38NZHSVh5AXvMCwDzV64TypQTWQo9gH9u948ASbnB2nEN3ezvhh7FkRfq",
  "key22": "2xmyLTpMxKV7BmHM9bqs3cfk39bjJU8XMxCLtZ3d9AqnyiHj2wmu6Rt5YYmFP8DLVtVwhMKCrL6PtSL4w7u4uPp6",
  "key23": "GJmCwM1Bf77VZQQHJLTac85Aqn6CovmD2Ksaspjnf8rRs1zu91suuCYBNRyQ7osD3fzYoWcmpkx5EepKL7Rb2UN",
  "key24": "5vU6at8mhNCBaAZCiVuddiEUM2x9fGDCat6PATSWbvpvVdqEN41TvZ7TCYpGdPChnysC8C2LqbudLXKY6KhePqL3",
  "key25": "4nrkHpRynEQ4wfzWW4rjbUenuMstbkhZdh61uV7cBmavf7QWeXkXBRb1N6Gibvpss8KfN6M45xTuCSa62TWTLcAG",
  "key26": "tPt2BdMBTR5pEZo3MeiKM4ctug3pWQ23fK1sD1pT73EJGVrbF61Ce6hEibjtdG5LNqdaGBYR1PBog9mcDwzB7bc",
  "key27": "3wdguYZX7hDh37EwduC4v2BuVycaJzHmcLZGiLVikvnhE69MENkMFLa5biAu2BVndKQd2JmXznkkV1spG9Wm82ib",
  "key28": "Uq1joMHwP5dFcEFdmzdwKgz124yjjRKKAtpAY6Sxn76QsDPtnLj8REds6zQRa5vuGQL3gb5abikv58hvrTqEuDq",
  "key29": "3dHYUFR8Si7vvjEECgyt8StsHr1ScWRzpgqn17WFmkL2WcrF3EtpXHLiHEz3oo291gJEuCNwxjxDdnc92vnqVHdt",
  "key30": "5QzZrDSotT9726JtmEASVPzAP5f3Tu5nnaARw2SodWt1dz4VDvKeyMaRRhJq6cfRYjFtKi9Kw8baPa2nX8UzhgL7",
  "key31": "2K5tAcbHbE62LQcc3GiqRMLLx9kZyJUH2RqWEmhoT7Rv4wpCqWfqpwaxJ3ZYj6LMCCY4F1kPJMwnEqaJQ86dghra",
  "key32": "5KnPzqZwsZEhYZNW9bJVpR5VvBi4sDW6QrSK4ey6p6xqkTF219d6bGSgSUZ1D2svBPdCL7RktxLgor577oaTebRP",
  "key33": "5LBN1UUQV6iNjjrfdF5jhDL6WUfP767d4XKwKmqWo9rAusZriGwYoKsvpdGzSHZdZm8UcivVdab6eJDDJRM6Q72u",
  "key34": "eZ67gsUs7m7nNum5XP6kZKt9JXj7qeGe1gwDp6Pjsap29THkV4eStn2Evkv468VoWQr3rpkUFMxHnbXBNbP2Bfz",
  "key35": "3VV7VZAewLwzM7hpDndstmfuzgpU63SbjRubWi7XgoQ2ngge8VVkeE91jm71tzuFBfctDYkpbGMJpwZXo6ag3gsj",
  "key36": "4Z5r9EV5Ntba6sRDvsADSRT87oJxd5ThhqppvFLLvaJtmz7iiS35thycHYuTZykg5K49pnMRezCDkGZ53TFfA69X",
  "key37": "2SEon7K2Wd3GxAgP91H9mxWv8esuxAYG8BurHbr3HoBBzNKzqqLiKtMDdd23dpmeWrDPGxDu6svBkLp1vBd2LLD7",
  "key38": "55haPJRJrTA4LJtZYJGPyZ2ChbD8V66GYaQgh39PSkRAbuVHHCGRc1Uf2NiT8TRf3qBkuFD48jARkKR4pPwtALu7",
  "key39": "bX3JAYxyX6TNzVTLZmdMUJLcUP1S2uLmuxVJTF25stcbAFfj5n5xmwe6sK5NKgadFkzgnyZGpT4cYERDo5Upo3p"
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
