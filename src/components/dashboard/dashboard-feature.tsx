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
    "3s8iqWbNjqvVAvRKMBXmkJ9PLufbUTkaah8UB9Fk684BywuGa7RniU4pxhCT5EjWKwzxXiuVYCG9UBBcrxeXfK8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1kUjBvSzbRHREbwD7nReT4pFcZoW4fayBGCgY3cJmKxcEHNfiphSTP4PRTDj3PBXfeETdDCiaNYYREhB8KetDW",
  "key1": "3z3Qqveb2PmkqoFxj1o4pccbj1XzHFodMfbV34uQtnZF7Bgm1ci3SsTxoQTYvipYbQzqyx4RW6aY28SCZ8NT2UqP",
  "key2": "k46fmMdVBQ8Ek2wvZ5ppQmw97nJceGcbAS62Rmr3T8DcQDQMVFPtbcBd7R4KAisQdhazCB3smr8G1oDYJ9GbdnL",
  "key3": "3VL3uxSdWv2oqSszGnHTDAYXFmyg1ucV9U3BSfwn2prFqXV9z5Ux6HnkNsMfLLBsFwXUXF5nTEJ3GBHR6AC6mQXa",
  "key4": "3m2dSdWRxtrXfK8poHwAkteKHg3rjB5sVv6jjp7B9d9FR38snkifteAi1BDuBHLi78hDsycp9P5PxVPzNM9Q6RET",
  "key5": "53JZiAESB38Vohv8QiZcx2XuvreDdFF5kAwVXWAr95fbDCt2MhizbvgrPCqDs7muFwsK42hyJo3wLV4z6WiuaKaN",
  "key6": "2ome9V6SsAuPoaGmFSANmZx3Tvx6eDfUo7eUPPwHroouTPBpZNvjPVojATvedgAsbUPJqjSs1ryoVPEWwfZjUVDu",
  "key7": "2Ptqa4V19LG4zEYfDHyFNNkRE217KvkQgiRNKZtSzpWJJ8w5wsuz4szaptEPzwvtgPXRggFARYTyHtHQSDuLiHj7",
  "key8": "57P5xpCHSU83vamJzmcYK2A18PeigfMcwEauX84HdLfekdX6CsU76ygSyGX39aHPXMuSJ1cMv62FmUEdC8aJrKFe",
  "key9": "mJwtAENf88NeSUFpAUXrzMQ1QF7UWJvN7DM55vxazLPBXQ2uM9WBvWcmZEnxkh46wZDNvoQQStXWpGpSvPk2M9B",
  "key10": "59ZnrZiwRNGTxJv7aPLzNadeczCYbyyJukxBNU76pmCVFUmRM7cswnyTyLRPobe9roDvJc8FY2B4reJk9BSVc18Q",
  "key11": "4jzUWQj3YMMBu9YMzXofLxLcNh1pGWPSbwvNqqyNo2JEDG2rBS4Cd2rHX5y2X17Tvjw6CBJVAEQsgPC9qCjz5khT",
  "key12": "3etuZKEbiXFtVCvwHStPaZrCv5zHt5y5GhP5ci9R9273mmvJ2ZyVskMfu1M2cR2nkgMkiwE9NJAGgGQqd6cBT3X2",
  "key13": "5YyyRqixmzXXRTm4N6DaQ6SMqBKWYpjGKrR99Gn3zH7KDMn3aP2aXQiZqNbymn54pGq3d3NLCJDrQt1xFDB6darL",
  "key14": "5d5dBXjpbrzzpKVCSGC9HY2mdvkw9u72XJwAtNS18QSLs3wPBiYtb8BMjpxbokxuMtX9EYR2yTbzub4ZV2H4aANK",
  "key15": "4cRcskfbywezEEhLEMSuqcjNqPJgEu6q3WsLDn8uu4xMx8h9iDf95AXUx9uWMSHGYcxjWKUY5PnfWLUUxEacDGwH",
  "key16": "5WqoKp5tgUZUBcMG1z6ovMmDKPJF3EtWEVbkqdi86JuDZ7qwtKwiBZgtZ3Lum8NJBtTgonGwD9MFJKacSvG69kXz",
  "key17": "2fg3nwS7bU9sQLgt9boVtijjL26HYQLjm8VUUDGei2X171bWWRNrCoJBKcTS1BMrHUKAFRyJigMcDpweJDmj4PCq",
  "key18": "2wQoPvvmnjDdwd15xHqPsaA3t6frkBg2QPCFmDxkccVh6sAo7h65RUMf5wa85AEy2XVmmPvPnprR1yYTQpUVxGqa",
  "key19": "5dCVshe56HdqijWHQJsgUQsEPqnshDCBpxtqyxiaCuUB7kj6PWB9YLXcmw2aCVshi6BLkWs9kyNUvXyLo4seCrWU",
  "key20": "46gVfscsK5DEN37c5mkH7JAWRmPrHQkJyWpBJqEygEmBqz5jxpE5fLND5wGvxzGpevyH3GUTiLFhJTTP78yjC3zj",
  "key21": "3bEZ3FnUd9RCcewnzpwWo4vecvt6HpTAMphayaG64s9zhm4eJxNRE9dvEivDJKbk24Hj2SCbv3HChYWepFF4aZo7",
  "key22": "3zbEQ7PNs2b1Htm9ULbNViAS3YEadM46Sr9srDBhaMDcLHtAREKcsUjaCDb3mR17nAQWAm8knJQTk9vtCTZ2hGGS",
  "key23": "5Par4BNi7pTh67Pp5oxDgfR3ySNg84Ad6z9aZ6dydZc5gR87rL129WnW1TQkewgDQtsCBgaD1fcwpMphspeSbbUB",
  "key24": "EHFGM3N9LYamRUcNuxUVGjHYfu2JzdKg5Tdt7wib2jhLSQfkhExJjUxPGZqytW8hdvrAL241R3zfceiGuPDu1Zk",
  "key25": "5iC32XzEdG1bjT3EAyNEbJxPkH3qTYSmK3WWzeT9HXGfbZD8kpqEEEcULQYchFCiCEbLoxiz8w4sEGS14VEcAVtj",
  "key26": "36HaMxhyq5mJYDvYUTNarEH9YZ74aBHtyccdseXtCGfYRvEHZ6ZoSZLKK6FCWJ96bocVtPnuFvxaBiyMewdXfJ6P",
  "key27": "5b4jnkGBRpvLQnZZU6ULJCdfSQkGTZGbaAwg2UeyoxarFgg5jAzkUbuqRMQCvaoFH3jdMkhzg22j7j44HU8DmdoH",
  "key28": "2SRtAjQdF87F8svUMFSJ66SqcD1cuCNyJcj1kCYQqYPrQRptDiiVDtWCncVvyxQueQwGvyk4mNv4xCnAMhLHz2Ni"
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
