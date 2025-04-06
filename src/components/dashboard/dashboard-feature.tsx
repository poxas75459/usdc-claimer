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
    "5sKBbsqGgAB1iFphMyTjN3rbystaNYMNyeKiPt3mqoXTCxkJza8EtjxQYuSssqBwFmRrhuUDU9j4QTW11j8nbuS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lckw197YicM9QNbasiCgXutzbSRxwQrwgTSdbJr1QtgLKxSCTWdBJkS1RvMnCVVktZxAPP7vmKwJpJFAFfkxCiy",
  "key1": "4UVXng9dLBb8CDXhgVaAwjViCrZsp3DUpTEEpPAWNtnydnN6xcw3xnUYeg7R1cinqzAubCwt2qvioDXUPTGF9xLj",
  "key2": "HpSffE1n9Rc9RNPG4SpuusBU9PDNZpLgaxi3WSUVt2nDpw3oHrP97VRpY4tJ25buGVTxWU3ote2WW1jKVRzWWjo",
  "key3": "4VUwBnZF2kSBauoBfLQN2UkTaU8Wq1WxANUbDMK1WLm1NYPPexF5wkGd4GiZAokdkkxo5Yx8mAz5a2aeEuatiJs5",
  "key4": "2aeY8hqxk8Va5DGvAcq2uXzdyJP9TxtT7B9TsKMVVrX4w45PZFYUttGJhpxhhfLJ1hL5rJ6pMFF3otNmongwDPWm",
  "key5": "26wvAovgTHDJeXwAsc44P2dJ2Nf5qFawGv8w3MCSpv8XoFhKVghfwJtaphgxxR9uc1tGz1iyVEckhkpkETBqqacx",
  "key6": "3kJpGLbLVuWC2giYGTNRz1k69k76NqD2nYxMDN6Htpux9PBH6TtA1QZYR4WGv3jsiVfpEEUsCz19cq5DbEJdsyuv",
  "key7": "2fLMnPkfgdEjTWEiNHsJFTC9BC4ChbJTA7xNhM7CTcouzC482cd6rgauJbhL71hsmtyCGEdYCPTdCqBhW64uiS4b",
  "key8": "gHjBZwUZKdQMysCnxe2xUTKRSNMgMvPXhtb9Aj6o4gCYsS2ATsZT7jbXdAxT2ZTb23Lc77V2Rt3KsWMCm3v3MYu",
  "key9": "28gN64wy1AE3bUkKiK3zaCJfLoSirGgoV185paTWp8BKaswvwqYqgFsKLDYrFutoVxWP2CtucHZkSGcokwER7KWV",
  "key10": "4ofNPzhJfe977y5KwHAhenvWY11rhka75UiGJvTmiNuJM2YNfZBQxadAM9sAMEWrF91Ke5ik4wYuDa3V6JL5yZds",
  "key11": "2sW8cVgPWGFzxhZhMeNrE4MpThWb6rpkqdkgWTaJAzuaMvPvCrG2iG3tS4HMzpNxKEs6RDQpKV2FyvczFdNuKDgi",
  "key12": "66AqNBfJVewFbqiH7heosXefZyUSh3kMWC5LSrbE7M1V9ASUtuAGEmj4HqxXNXhniSmkkg5yMYH5o8pLXUitn27b",
  "key13": "4eAUoscAtjMrLRUhmUu3jcDCNzrKyXJEKydG7r8ihiRJNq88Q1iykD3PrtJ1ZRQrv5jk2toa1Xb4zXCniZCbTEXA",
  "key14": "46ioerCDrEpoVwRpcoc3q3jo5BER94Z5HWBzaLw4iFYEiS1ZC68Ra6Kz2wcx5w7Qasa9FQkGrxqSDnQZKX7MLqLp",
  "key15": "3BZpZenVBArcKRKRLGxn4CEozqmvUXm1BGHexjKACGNQFNPPgfr5vK5YDKqcxy4AdeF7TJjs81k1aspaF4a1eH1h",
  "key16": "4gdKxGNBxWtF51o7xzCnWBFPKQogzoAZ2cPmhimLofqPH9y9QU8injD3hvrhZbk2WEppKzK3HkfemmcM6y4jjBH5",
  "key17": "2MFVeG28KxzRDhGg5zcRSBZgrUhDcMPAMkeZgPwLpYr8KnrwU2HE43RcTNLzaBdK432DdH4KYmR5fVB9NnAvuutH",
  "key18": "4pZn2oZ2WzhKQNyRhMUXbDBYEF88GvNFCa8iGWLMT9HZCwN6hVU5TFrGpogXpykpP6vfEXpnWEn6JRpZwKakpcif",
  "key19": "zpVChwX5sPCm1idgL9WfzP3827t1SNfrgz2FLubuG6dut8ghm19jxZfTRuf8NNLPQG7G13r42ryZeaady2T5YFL",
  "key20": "5Jov19c8MrJ6syE3jMFj6VvYjEq8viFT33NB6H5dJo92ocoaw2cfZysUGJUGih6vboRA8Gsi8v3E8ji9U961h5nK",
  "key21": "21SbWGKfS2PCxB3pDfgixK5b9tFDip41uz3PyL2kXQtJf2HHnDZUzzjnQS2jRCg5qdWNMEsLyQvuf8KbMrvQTW6u",
  "key22": "5jakkBHSP42eybd3fkumZiyirsEPSkaSbZoRkSGG2p8mWGUPMgCgJpwzeWHs3cqKWpVCGDmkhu2vH3Bh3nCNeyAn",
  "key23": "3hy2AQJA5NG4Pft6cg4htie6AbnD35njpoL1BUvdbZLsKGKtan38Lr7G8k7NkcsRvDe4KxEhC72L8MU1WGfMLkFr",
  "key24": "2RcLgduk2gZqmg4c397cW8RpLCKKzM9qYS3GSWbQCL1o5HdR9sjqqDBkszWJsW47v3QcULnRYCpW87wXSmBWkDS1",
  "key25": "3F8BFu2sCQbR3SaxqSsAJTeK8CSjod5KERi66Pfox52MDZHeDwCiPdShGPjN6dhugYAtwA53wyDD2a88RMcByqYn",
  "key26": "2nYGb7gMouTraSXLWmjyG9JEwE794wtZKddpfLX4M6ruUfKnn5mMkjrDa4D1bzSeLSJUTbyKiLW9FtAozJ7xaQ3B",
  "key27": "rSLVTyx9888xnrm13x4pCwXyUUsSQriyRpEDzoKiQMZcy7WqacgCbGCjYaB7hDUpgk3h2QtRoLW11cf65eJCsPh",
  "key28": "2ywHZ3sb5gGyZD8iTygvhG5xbD8noKCcNq1w4crbHoQWw2s3SMGKPvo3KSy9ZS38fC2piBavoKRdwpB9T8MRqA67",
  "key29": "3sSMdXAnyYyDFd8MpKi4ueFLDqzs3GSEmvvy2CTo6zkvw8x913H7u2VNq1gCRZWHVCQR9zfpZp5mrEEJep3WDch5",
  "key30": "XUgXmB2r5W4DiidXxLAsznn9j3BMKaX3zhMJ4XXZ1M7otAuRqt44rYhXXAgbDG4AYPyH7mdAm2U79jzfcwQo8Bu",
  "key31": "4Ec8HhQ6Hh1uc3GkFyRSJj7pvx1pTYpUijjWuwwbXw12TpJ2CgCPwDjToHtcacERjAG8KTXAwWYby3NTFzSQRtNB",
  "key32": "V9636fZVRsNzkVTFJKhkGGjGRDdggawXAFvAnX2Xqa3frHjBYCCwWcKjQ2vReL7UgeUpriAmwVUJjqnsCt8QES6",
  "key33": "2N9ZB2sZeSsw8e7dxDSBX6VtLhf8AkD8JqsXMz1RbCGQ8SW7Qi2KQHVVVsJviRF3rjrHzG6pMZYBkJij6ifSxaWN",
  "key34": "2f2NzrnCznj4cPN8wsaqvbekABFryva2c5K9xLYHRxhDPSYJcTwWVcqNeVWwMgZtiW7C5pTTHmDAmUNVcUCjHe3c",
  "key35": "2usTNtQcvtEWR3Jw9pBjV5TXWNK4XPgyrK7M1hYr79LWSY6k49GNABa1V86oeC8nrj2N6UQPLdPN1ZSWA2rpQyUF",
  "key36": "3cbzpFp6xZS49W4aFhj5P9VxNYggA7WiEev19hvqQm5bafgXVJxSJJFVvVhB1hptDoq94h4cAjNYRM2srF9nP1nd",
  "key37": "3dDnA6u34gB9UKW8vxgKH73xoWCBJWytiQW5SmvyujSuqmTETEgAs5h3i4PTo6MsW29bbmf5mLfF18uETKXF2Fks",
  "key38": "vox9p1R166aGG42EuUv44d3opW4L8TdKFPSKjRcjycMgoY77c23QSDrYDEp9XYa7M3x19C1pceR2kvhL3zHE1VS",
  "key39": "5YW82WsQtrX4CiackJiDf88dBMiaRXvJdfr7frnSsXC8Cyf9BvU7Eit2FPRZM5joXbyzdcJueiqiHp5Li2ZRb3uP",
  "key40": "3LUApgZNr6yYHVCzifAudeYwP3FSfPzJhYG1Xz24okbv4XhtUAGVY42k7JL654WqAWM8vpXr3D5w4bKmefr64DAc",
  "key41": "5bGyELaXK8roDY6AbtMkGYQ1AESiRQbig2jHhYzVdkHcYNuYpzDe7rWoVtBNFR9Z6ebADRtfWU2wKFdVDvq72FQv",
  "key42": "44FCrhc4j2Q9s52pQubEaJUGzvGs7PQNaYA7i1cqizebStP3SY1B7nECod9JZbGLf85nWX31sF795f69H2nDqv3v",
  "key43": "34QnArx7VgJm1s8v4AnoFWnGv3qZX9LPARYe1y7eREx7Tqsz9rnDb1Jd9kM4VcmPsoieJVQEsmYisr6JmDGipRSw",
  "key44": "3PDZfJp8hSEWaLzHUMy6rwZ7HMszEYSeBUENreyUuPLFpGjouFK2oqymbakzKFYUwTWUQ5xuGrDnkJVcihLb1PmG",
  "key45": "4mQd4ZTxd6KAUveSJ2C9W1tXoCgFmTHnceJv7gtF3ohyxGzRtr4To4ywynDNYP4yyc4sbkYmfhBum7wcbroxTx5a",
  "key46": "t8Akg3aLDvPi7k61tXp6eua9EqmpjY7ePV2XC6fRNxbZhpufXLGmfcxW4ZgdXzkUdYFeWSJ6V3Et5Ryw2RBDMVA"
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
