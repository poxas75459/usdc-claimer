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
    "3Rj85hYHLNrigA4kZ3vigC2EBTRwW1k8HNaxGimNh7D8tTKv5JuRaXrXdER9mecuhc5AmtUhzvH8qZEhjktLt4QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kdo5AEv7joWXQekySiPVLSHqSeMSXMyPdZ2soaXSKtMxbtCTXXPcGLqek54A4hUsfh8kGdMhTy2rL8XCctCWdj6",
  "key1": "3mpHQcJ6kJcDBnPgfwMynUgDb2ndmd4gMBPnK4XbJ7vBDdpRSv2BWkwGdRAnxZoEHeUAreoTrG4smbJ29Y1B6Myw",
  "key2": "bTexB1zt7M4p6KcmPDF3n8wM5jJVHUzcjjqDHfmwEYHTSLWPZSw6ixdGzjBd4hWciTzBZgBh2StQyyUMjhUwVce",
  "key3": "8GBVWU7kvc9eopQxQvnesU1LAxSJpM6LHUsqUjJyE4ST7GgkxjQBK6s75mBt3M9mtNZrqzFwuFmBEQVEM6qrSAb",
  "key4": "2yDEZWteCUGvsoKfbTNabs2N64VQ6ZEKeUuhQHB75V1v7JY8tZASYtJqJAskvFxuZE1AcCQRNvmpYP5HpRu9QW5x",
  "key5": "5zzdxTMzBfbuZNBDVoPxYxVCS4YuFBvjFHtRXP1EwybsgaHzT4ZnGsfkR2YwBUJtwJSzPZyKdtpjGPt9L5DbWWKH",
  "key6": "3pkMcf7hdQzD1P17U6RYrCSifRtvdYuLHbszMxU5Sb6jcgmsxx6X3CK5Wj3r19G2FwG8RjAyLun7J6gKphhggA9P",
  "key7": "2cQDwEdgWhp6woeTtdi7yQtT5rq19vh819K57qdopbA5LqaMWb2UoatX4ia1kgAmnn1jSbqkkGPu7HhkU42gSYv3",
  "key8": "2mHn8v5HrKRVSkbcJj2TRbNK5CtdC53W67Z3xk9JRZxnt9a5A75XrAZwHzLcdR1u9UsYbQDnBLRkctiAp3GJwsen",
  "key9": "o1RpskX9CSgNv8r822moTst73Wy4oPrjniNqVHEAQheCApCVWxD9fTrcJ5t3xqBVmFZHh3AnTSSjSASRKtdakhp",
  "key10": "4k5pBbucCBBDDXVgePTs2GdjfDjLWnLTQuPxthLw8XqfSzsND6uQFcoWHv84pdogJxinPo7chqQCHbUBSihtM1qi",
  "key11": "VjdrqFFcSEvkogkPEGuNU7rssWRiswJiLdVKMtjsTUZhRX4rtuUiD4f3CHNZwt93ABrW1QSEBA7ipTsQTe8Q1fE",
  "key12": "qZDPhsmPmpKTwacLdPkW44g1jfZXBbPBTPPdU8FXayRZhZVDbj4rLkoAosK9Mf4x6jbihmQFva5ABDbsBmgP81d",
  "key13": "5B25xu7fqVN2UgCLqMe9EfR5NFNZXQ4pePZaVyEer2NJiuV3FeM8Nrn3qEz2cZTN4DoTdKhBWaRN35hFDZAzd886",
  "key14": "4BUx2oSRqkQoeue9sLKvesh521JdnmX1nugHRbX8UiwxT1128VGgphwW9kptHA281CtQ456m5VtEwZYrsTENQzUX",
  "key15": "594bsyQXfkpM5ux3vqw9S7NmfRoiAmUuonGvpPuV9USoJqQhn6Kh1cVZf5CBsAFgWsa6bVaxBhF2wyhcboyuSM9A",
  "key16": "zvfgpBe5Mrg9T9ypfi6obw3ouGUsxgK7Zq6LTpnsqhq3kVBEYuopGsisRsnyR6UhiezQekwh2igqvjjWQb5gPkz",
  "key17": "z1noe9bqip3FENk4T4JnuVA799DoiRJB3ojE5TRs9YK333HkvjenS1fq8qDpBTwzYgKJrvGizGmiHoyrxp75XG7",
  "key18": "2FJ4WsBXVMzZ5kF7yvTrSkogGWAg3NqBgFKB6nWXAABAWJy7MnffbG43D5W9D5epoMRiGVN1ExSBxK5JocpWhnyc",
  "key19": "4WkBWLfe3HDocjJ2SHGBtDYUv1n3LX3e2n2r2DpzsvJHhUzmHQFve3fygHMqAGM9WDAtbL9GNxyZh3537kKZks6R",
  "key20": "5XgvUmzd4hMEtWQFvZHFWK2S8UabhRrkQdxNMJGfrA67dxsqbjywWS3JoawN7XM4cRh2vxQ37yPgdJQ9YF2QcXmN",
  "key21": "d9USWTJY7kA7ZVWZUwLR32ALe6mBqb254jQ2EsigHFbJU6MC39qyxzNxRnDq58dB4VmZxG78fRyLX3wyL3NhyNe",
  "key22": "31KTZZtELVqsHXsfYxjxv5KLaPve5fp5yBoR4aWfMx2hypdjGtzqvg2zUi22uqVi7M72ckusHkuiV1KBcnuMqQ1r",
  "key23": "61aq8qTg8zi8AQYy2UfhVP8mThQc7PY9zgX16A8gfHHmVX7iqcAJxp5t4kEq6Kda39LUY9UC26tzvTCvzN8eMNGs",
  "key24": "4VxHHcX8GWoQi2bj6bXLTzTWYLQyQQvd9tj8fnjZ9wesAszD6z852Dv4PCL73yiU9cSGWCJNvTXVB6kxaTPWLakG",
  "key25": "3VTGvCr6HNXYvpAvbRv1p5ZSdqtRbQp8fPxqBN69kPD4AxkXhiR6esnEaeVVjQTqjpLahRmVS2ttNK3D85rSgs3f",
  "key26": "5k5MXc8pDBrx6zikzoWFTL2aqgRsRjtj8tt7LMnMA1UuFTjAtAMGJCGcBxZZhuA4WopzZQP9DnTwpmHzXRdcxdHB",
  "key27": "3bpxEwYKS1CcAZHVaTRE7VF4Btq57KeZbtXXFk4A4dZ8QMjy3PzsNWUDxhNtro33GtHFGtuxAXM8WBm2ChBWRygV",
  "key28": "2ToMa1abPBKZy7g93tvAqpAhMwEiYGPqMeUsphhYeism61UotJq4V4rudXTMn5dLN4VQvytFzMgpoGmVXTasVj9m",
  "key29": "2GpdjtoJwSUhziemuxUHfeTDfAvNGC3CJ9nDe82CoHVVtpwYiaPAgHTTnW7KmW4KyMRbMzMLRMiYhg1BVyYhW2MK",
  "key30": "4Phhu7jfw4wP4FAWSpPRTgcwnM6QopLGBWjLesvGNH7R1DB8PZRBENwXAjB2CWKmrjzH4uFkaE6gAshxD2z7MGG3",
  "key31": "645R2QhiF1mca1UCbZBgEsktbajiUJqPXfSkvtmxTQ4nFESc5EqsTqV5z3mvw7px28fXoSHEuE2S1n3wNtgBYvfs",
  "key32": "43gShjpxkruMW6UPmT9qjzbqKiydwhvGzHJM8emPJZXtu3Jrs5kUhXUoWjWWX299orrD9E3sAqExUR7oh1Xiwadv",
  "key33": "2VbQM6Rr6mjDHykCUQaB1Pv19T8UphijFuFT7VjYGKBTfBFZKTponCdnHSC7qYazpzwcp8Wphvq9VQsgn7ezDckG",
  "key34": "XTA67C86dvGPsYp4Jkv85akK2b9FhARSqtymgThE12V5fMKzUps9GgxuELCkfZFJk42gvRxZ7Cduqzt9535QdyQ",
  "key35": "39b25JTrqoApNeGcVWsUoTBXdRYBXb8yW5sXezxP2JkuYidVkrX5vdkKV91TTZRQRGGwZCNCLSHzxEJALEb7RNNh",
  "key36": "2uqjNRN7mwTcrwTJQSQ16VGYt5mjMSeoKjcC4smtKtkrcb7iWHAPLBU8NWmRkx5cytgfFNXXukF4LSPsntnovgWw",
  "key37": "2qcf8ET5BvZkvD21xyB5gkqdN1VZ69ueyKgx8FanhN95KfrKzBsioYaBfBtBzXoSHbPGqhrR7wK1PNWcbY6yWrQ5",
  "key38": "5kFQL27PSamh6Nmr7mEZcYsWKaA83ebrgaRCuPiL5LJxtxZBXAhykKb2B7DAAhpWgEBHJkEjCCuqpAyut32pVmRY",
  "key39": "DqALSdnRjt6v3ZVkLVpryRnN4k4rTip5VQ2SCqQSFkGJWpCxno5ghAbJ5jrpDNMeGGDnjBz2n1cgurMi3CJvaBZ",
  "key40": "t1JFbK4nz7xdeSFL3REdoA6nLmfGXTd54X6kqHpT3Sh2Mk7yw2cH5fMMnGmxwm3Fgy2M41a1TKFcGhQgTuTfhxw",
  "key41": "jaDpUrL8oJLryXGzvBJoprjBrjdHxCKcT2gqmmTmKw2KidAhM4mpEXdedFNFsZf1KfRqUFV94AK4T3V8jVMmnJG",
  "key42": "3Zdtc5QmZrMQuz7mA9e6v2gM5XLCtp88Z4tb2SE5nh9uN1uJrePEh1pc8ErPxART3X6XBnu9s6AYDNX79w6pwhxa",
  "key43": "3p1kQRSge5TzY17w8WcZx8rzcoFr541J9QTD21oKg7GNHfq9ihJuJv2pJuCqADXjsUnksXnE65WXVjWgJb8uEvak",
  "key44": "5owAu2esAqUVyAnnVbCeMEnFYZhSLPcUwnTv1Tb8cMVTvx1P7sGztH1wBeyf7NASevyJeydb9rWvpG3jFFpDRxSF",
  "key45": "4ZDro2mVs4QQ2LddiicRnt6cMTDS9F7FYbyMs5RHsXuzJpqDsXCydk5VQEGWU7ENahmBAizWyEsN2E7jejKA2QXG",
  "key46": "3yg1vPSGGpei5aHLyRSZ11PXCy1ehq4BSoggfJdBHXrnYQXXF9sX6FKQu5E4oSxvJqQUF7Rcumk4vu1ukTaSiUPQ"
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
