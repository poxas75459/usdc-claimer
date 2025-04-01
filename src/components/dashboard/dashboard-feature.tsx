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
    "4hHL7n6LsxsuX4WP8UUvjUtu4bgie1rFmUPTf8Zx7VneDPUGqdJ7ctRu9KTMpXSfudvp9BupMNrFTknrn79QvtgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "653Dd7TxKrcYp22v9ZB1kYJfMSeTSgZqkiXs3oSgYF1AWxpDqgwdTrWPHbPQHcZwUSZ6CmyPTxUCL5reVtbkZMs1",
  "key1": "3H2JZHXFYgzoFx4YpNSMn5jyqnNKHfZDXoW2WzaqobCwKfZH5ECa9R8EUrXVhjWdRR6SrQfVYoSrjRGGiBr7T83J",
  "key2": "4y3bVo12aKmVSgt4MKzKX6XxxeRPtWgwuGqEzgv6Sd98JcWTEPVoTnqnyG9spQWsFCty92vonrZRWmxepJYGdSNd",
  "key3": "NNtZ9Qo1BLkY6SnErdhqwRNxBVvnbRLyUqKSXnx7sn7iUQX1tCZxJuejm4MmYxyrd3JKbRJyxcVU4tLTGXDa29W",
  "key4": "31rUZgDH5HqQMv2U3Jr5ZXd66VHWehigsTLMdgb2SeKC9NcrgbkJjoKxVdDjdTyp3ngxqSA93WEM1fohud2rc4xG",
  "key5": "5GsYedLAnssjDnS9SSGC2drV7LG7uwZZCeFUCg4pyDxRNZ9DzdPJ1WuyV5jkgcQdrsj7TkNArbHnoArcUvN8Nwtg",
  "key6": "2JbzcYoBdQVciExFxTjfER2HX2BvSzL6VL66JzpufzYModbW3EoH5W3PXehyTNhF5niwfk8bnmvZZ5LSZ1D5qShm",
  "key7": "4JBFbCw3MGYnGeZ54B2CSkrR2uV8f8ht5i8XtcPtZFJDxJPPx2DxrhQoUNajhab7yXpiVPpH9HUH82WuWQogQcSQ",
  "key8": "3DtZTffASNFB6rU3uYCy3rdc6HvyjByV7sbQoDiw2PnoBaaNVQ2Sywg1kfFGp2UJmWknHu2WMpsHc6aNWiqj9fv6",
  "key9": "R58sgs2Rw3HVSLxvCha1LKfYpfSrjQdUd4YNxvddUKhqoRKd9iwJFbdz9icEa82yur6eqn4LYTL2UdTmk2X9yyu",
  "key10": "5Qm3TwNgq8E5DSpK1EfdBc7AKGXMnwA3CA8UZwHJSTkBq3S4upR5Ww79uCzEQ1oCCTtnWTobT22hegCsEpYKABhm",
  "key11": "nmJCWd4sjJ9PcrDPFqtuLyeQ4BYFVoT9dVMasdw6F6hctVckYDqtfHQ19DojK8iAL1PM8WA6gUCbnV4wBJGZh5k",
  "key12": "3HzyFu8zVdcvtquenAPCKaFAf2FiceUeMCkjLQDBb8bELazJz2BDfazohsMDTvZDX3buxf2JMjqi8AYUCXxRJyV4",
  "key13": "4wnDQ3rWSjc6B4iowo7AyXReA2KoTNdmsN6ZkHWtrDvJRuxRKhCvVDYNJYvKe9mmUAPGgCqh8yUTkNZr8kyVeDFc",
  "key14": "52aZsSzWtkfpGG29CHfjAesptSY9EiMjLEqDi88jFmKxNVN8qH4FoDizcAd3eTy2Yg6NipP9kXyrG4ERPZTykFj3",
  "key15": "2qavXRaB3vhw1XMj1wKndE2yB9ugFe2PCdWBxxLPvCvtX7eEnZFDGPFAHYerfhs9kzZ8DEEH4TpTuBEX4aniTGky",
  "key16": "4H5ELKCYiGzwxy6gKPiGCJxvUHdpePYgnNrtYCPNBsQkBAMcRQgo6zfatxvGMM4MpMcQin2BJnW4vgxHdRHbTns4",
  "key17": "33MF5SWxsJJsJN6HCLd24F8Zv3FAvFFyz7pv5WLobyByUwu7iP9ubbKweAeTojYKgiRs2ZgZNR5AktSp6kVq5jDT",
  "key18": "241EwPEStMMVMEi1jmf98TPt4hhf5Fmrj4iwXKTA4HaVRRKVXy2PXSY63BcMETQMHG5BtdXv3GfeANdGVumhXC5Z",
  "key19": "2tjrrxBoJKzJxG9LFfFVU3NGdUc5yEbmjFmUdJSakJTRm7rxzATtndcdAyitQemYjbNgYfHXeoAu7Kazp8Bnv6kf",
  "key20": "3Fo6tMmX5nnTFmkRjjrUVSZpYfDtSM5KhkGodxV98fa9sCK5oh1tdEX6Zu2Wy3CTVo4Yw7qVsXuzgNaGj5su9jxn",
  "key21": "5CmzQZW9Sca9iPAhkXHjFsLmvCFyjtfefVTV7GDyi7DKi8KCBuQYcZ3dCycFeffbYNeV6DEaBijTZcdzHWoRX12J",
  "key22": "61v84CC8k2cjACjkNS4omGTHKhhq77r9ic6eWaJKSTYFcTTyFbbYQjJbjxmXAGrKo7o2KM1aDueZLzRoUaqqpv2b",
  "key23": "3k2XGR23RLH6DJewdDikRjBSoQNWzkMVa37JwLHk5jaBPWpU9cGNfer757YJVWDefNhKM9Kd2BJLWVp8G31SoFp9",
  "key24": "5UjL2eQucVSkjmnD5prVuUDWTDab8a53mUanV36sEG4RNr1zLFHqpZ9Kj34AcXSaxn4MiDJMcwzgYSB77TP7whQY",
  "key25": "4FWewZujhUYTKQTDrs1vYRfzy8CTwaeaEUP8ziKNnDdqBoauowqC57KPuD8bY4wCm67X26nDXFA2KET5DRqgiaHa",
  "key26": "2FRnkV59oTqtzrRR4cZe3HjgfQb22A63A7UyFP2aADqpDCEBNoo9hXiGwZ3hhhCyb3kiwH1UMuFPrsZ922g5H65n",
  "key27": "4opt4Y4PEVt58gzLiMpQ41YRyk6ZMFfKGu5m4aVR3t5ZjyYFk6m6XMn3SLGyoTVbvWVz7oYbaKT1yUDEXZRSmScb",
  "key28": "5EE39dEc2dp2qawofY3WkPXg8Wb24Wmsidpu5TiuWw573NuAB2BLXcYmDkGaFRqq7Vd3BXHGDGvKBiibbFVe1V58",
  "key29": "3RRkduRbFqA71SDBmE67YosHYCPFvVubYgUspp89W1439Wi1Seze3NrUhMHfsbHrrN8XQu8WNnMotciyRfR1N1uR",
  "key30": "5BHVPrXtNkgHgcQsRZmMkLZvXuaPoJ4xN1zevDLywELwH7Med7j714SJRG7qvWu5wV93jo1D8cUa2csosUAsJ33",
  "key31": "2AUPm3ebhKHqYTMsqdZQLQkLXxtMdqRu37K9Nf1cWXVk2xkknqRYPgoBz4tX96LUuVBuRKGYsRnJS4SEqxeo4CKj",
  "key32": "5myPnTQPoSqU26J2UiJ4SujsSdrCdKa1ra6JjTMEML9tsxQGaxsniCxs86qsw4WtbFmgbEb6iv6kJgzzp8pubvxq",
  "key33": "43pMFfMWQy8VH2oQk6dvcVB1cpomq6SLgNxfrmod2YDdFD2CXFBigL5EKuyJxVbcvPhjBmNnVM2FQWsKwCHtYyiD",
  "key34": "2UbrGMKAbkLF1GRpRqXfDdY2q9quKwr96QUHMwsJchsHsaHtvVWCrGFQpYRMiGuVVDGMeS8GLvK7t5NWw7pLrAQX",
  "key35": "4BFvdAp1J9gK6cqBC5yJiwAiqQoN4nPpfW7nMZViKn9MNup15r6sPCqasTZEDxdqUUd5ohb15JsqhPnbV8rRT5Ca",
  "key36": "56UcZPg4sQy35wVGP5GP935q14C8wJfdpbtNrKCA6TAV5PqVS568ogpAYfLoqJUCE5sKTkrhLPwNjCTjE2phNyDs",
  "key37": "2EQraWubNXEeubGkp8BqSPmNANPY3gPxH3JtJPoD9f43duDxg7ks5jBSfaRwNV4uzZwRthV1XJMst3rajcaQWfg5",
  "key38": "5ZkPq5XfQnvEJSGDK3vfMRc4A8oQbo5swtP4JYpNA5pBybumRFkg32AJswmzKvJrM97MAPqJYXM2vXkG5R2En6Qn",
  "key39": "3YTnYZQ5rwbkdjt5hNZ6VkoUTrVmZeEmTCaEw2BuJ5BWBSrJYfHFycn2JJugiMyKno2CMHz9Eq1mqx5XEp25Mmaf",
  "key40": "5or5x1PpziTK6M37nYrpdFweu4qHmFJ3Nx7sTCbA6CZdmSEL4GbqAmHaf7yCcKcsDwGm5fjYM79h6ZXAsLPg3ztd",
  "key41": "5opZbJHdAnaTbpDaySKKmgrv2DXnmpbJqrgaYNhc6NoTzaPVfA5gsZP8dGV2XcD3ii388xNykP4dUU1ZPtMic4C5",
  "key42": "2rjQ87xXkuBhTfcnfjoe9HWLbRwvRyeec52sZzGcjD1AHXVs3M4M9Rprc32aNPvkxBFgV85A74N9fxqQPxWCQtgK"
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
