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
    "3owNUr8jbpkK55qS1hirxFwme9Q9gsfnDPMxzw6FhbhiT58xD4p8MrpYb9inwmpg58eQ7jabKk5c47WV1NWN7jx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XftohMNDi5tZkSY4R5mUuEQJE65VLPewSuLzCoD6wTciskiWx6GxKX2hbzAXb16YyvBtias52Loo21DhCtJoK2J",
  "key1": "2175k7V8uchC4Sn78VpRP4KYoLvxxDVa7umG7Ws9PERGok6TpaaE4pFLTGm5ANBoAAYnbJhDAasWkjrpz3d2h3Vj",
  "key2": "4cWhFxESWz8bTuVxoVd2died9XM1z5VRwQvxH2iyMUqyfJXKrs9Zvc4c1SqZMBCuEuzVtV1xjQiR6FapZWGAKWdC",
  "key3": "2DyZwPDyDGEQeDFMXdyn89b3t4hwuFS5bzokE1ydKzJyFDVqfMjEqEHsy6gEoMtZbPXmjLZYHDYw8vc1T9DyyJBv",
  "key4": "63rNCEbgp5W8uUB4kAC3acjibHB2mJW1QLk6CVhPf93rhMBEw8A65a74XKbVhnsN3YgVbkjihPoYSpfvt4rfLuEi",
  "key5": "5VimZU75eDFkSLFE3NH7Uy2RuPN54hY5PgBpR2piK5Pr9W1xFWZa7Vva5RGc8Mo45Xrv74mER775cAtREXH6z7zH",
  "key6": "3F4iXLtic7fpTwXKD8scGDx1brytWU57tu7SXXEXZrKQvqcPm97z6zTKgQYKJBaPAjLS2zRXqe4nt6j7AERn33Db",
  "key7": "4yempzVaidLZ2Vp8EQhJdDdymmaKAj8EkoyFCAgGD68qDG9pQ4VXp7kQQcN7jjBr4LpurjGrtzEN8VTeaBFkg3vp",
  "key8": "2X2qvbnLQduWbJHCNAUTRgeLRM8wTiyu9Tv4aNTY6be4rsgpZRp4XbY7nQk4xLRiKqZgUmipzZaC39ADV3MZdz7N",
  "key9": "5XDMTR9u1h6BCSfH3f569RcQYV9FnFaX1znnhnwPcMpJgLXaHBHqBaii8gmiUVR6aEsttoZkLcmjf5kZtfiE81BE",
  "key10": "Jn8YMjUCdVtZPd8KosnSivfoo8uo717yAkg3AVBwD875FCBq13fatxBJBsQKZcVvt9R8X3ft5KYwPzb8z9wk6At",
  "key11": "3FkSV8yQvT7TJ7RmKR8VCu9JGE9BDcgns8q5cd3PGSxF2NNkntT55xjbBMR59CJGUc5zu2hjtrogwSLrSf9wDqam",
  "key12": "4Jyefope9pPb5GQVbAjT5eTaFbr7BWnicyLuYPDTbduKqhgmydzJHmy8JA7966FTTQH42cyT34EobK8JcahRfAE6",
  "key13": "3YY4wxq8knceovHLP7XhkGihiL4aBTejPF7QT9j8jurPyaMu8S7FuhJZ68RQRCAqBZtN53GsLFBX9daLxMRBMhwP",
  "key14": "4eF6ENDaTnqGMYM5gTcUL5ComCCkiDGfVPzoRnTePzbMnMb9ULaBVoMnDoJAyCABstHSYKY2Rn3ZwTZqnS51pwCR",
  "key15": "5XhzkSY3ttBEaGskYEzZwAsUmECVECBUVP1ZLUiwo1wKAb2TPyka38xWqxS6fEreMyBUjn27JRuYSdeGf4bqj2QW",
  "key16": "2JZjkG2Km7tqJVgTGnm6owAHzZF9PBSuDbtgVbx8cztB51Cj7HTjudY1okKe44LEXSh3RN4jppoPdCsSS3E6cvf4",
  "key17": "4QCbmRp9mKyAsKmCqueE4wL9j4pAwuDonN44DxZTZ6MP17eZ1dKvFwuhxzUePZpA54bAcogH2KzS315RdNz1rRBd",
  "key18": "AQCpinaZhYD5PNaMCjsfoD6cBP1wzBsV8N1cZCCtnEoxP9qYqj1YyLQeEsEQLRgFHVaRPMaVJs9JdsZVSA87RMx",
  "key19": "3sD9VHJtXhFsxbWMDwXLT3yBRn25oRFDjxdLHjxMscifxTopXMTjyKYux5vmeB8Gxzk35oSQbA5nrCz55SW1DhdN",
  "key20": "UjKqTxd17hiUKfbJkt1gfnWkTKCVXWYrUaRY56D2eqvL9DaW5JcANj1qWnrQ69j7CvbkgpAW8P1bAgrd1Nxsm5G",
  "key21": "5kJK8UDz2XK3VvRjtEzJroi11sLBsJsv8EeHjNPz51ZKiLJCL6awfVbQUSfmBSQHDaRUN7Y5AXqGDnEiZzdfdi8j",
  "key22": "5JMBPpS57ANZAuMdYoySdjChTukQYXCY8y53TGfkeQLohgrvUobrtks4rdpKGcw4zVEdVuPtKJto4EtFBpCEsjMJ",
  "key23": "4YGL9NkkqGToZPmfLsuc2E6ANbVfwXfgoQKYkL6twzPfiQcRNYeqsz4PyNcBEAHfGhFXP6FUncDXd21vWR1QQ12e",
  "key24": "2hgvhYFAcdaTymPBVYM1y7h4UD8GB4Bi5AP76KFxH8Nfzf28xwH3VfUQghR8CNnZxhoLFhpb7oEwYsn5bQp2kBSu",
  "key25": "4F3eU9wixycsnWZAVHi1Jf7Z1ai54cVo6htmWDudWa1mkGHutodRAYRKeHb3Yfxvr25y3EX2iWhkaKvCSX2647bG",
  "key26": "52HdWoG4FWsnpwLcxA6BvTmTGTfznN14ApiQKRUts1SK5NtmGY8F7uNyGa11ZN2Q58V2ETn7RWFhPphYjLv7D6Pk",
  "key27": "31hqgcftMB9mqA2zzyM6JcLtm85vVn6JeDZXVgU1KeebuP5dHTzs5ZDG2U3n3DXBtDkYSCGA8BGCynZ8dhCcqyT7",
  "key28": "nEGXyrJNaumkFV3tb1h1Bqzq9xCWYhYN2ifxafkZHvPdxzPkSXHouKb4EynY9ytmFzJJbdrmqRPPq5KM8eraRwo",
  "key29": "4o2wn3GxmQ8qZpdAkn2h7k1MhZjRSa2iQDAAuATYqH2oLMukzqtoD8hwg2aC1sx6Q4DWmSwz3HEzMuZtqYnDePii",
  "key30": "5Pj5WoNttY68J8kn2REFdwRoAC5gy1tS7Hz2zHoAU1ktnM8oJTEia8hxFNQvAs6XLCBYC2qN6MZzGdPMeQ7A64Rb",
  "key31": "5ge8Jbam9MoaJ4RegSmCoTR5YmwFiSpdtXUAE92wCVHhKJsLEDPXuMLoXaC9hSW39x1V6JKQEFefHgJh9m8wXWVb",
  "key32": "28yQxt1yALqR6i7Yodi3hkPDUC7gYkoaxwz12bsVdLtSAJZU4ejuPvpm6ddddaWdgKBwNzrhjefSUZBdd8LwyM6w",
  "key33": "4s7xdW4WcvjYM5JtiSH6VzfaJGQiFF65JSoiuo14Xih92xdyeSrXQsfmqtFV6fEcCAQ3Jp2WxHHzFyxjNL24XCNs",
  "key34": "5FuBQ7x2w23qVEemfeh7kaxadfaz4ZrQqi7bBxdcfXimNtuRRp1iAWSpZ6isNs1K6AhPN4C3kV7qNA2b35eU8CQS",
  "key35": "2k5XoLQLgKbUNGhvHQLAuBgZB5KhvfMpxXk5Aae73HCuk1KEURMi2RqpM7F7tjdufdxvCXR9BEErXruoLTqutmpi",
  "key36": "33U1URQV4ogqLQTawxCyN3draUYUs5WKFy8L4eCNUWfEFSLwi4cGAScMmrNrKz53ptjHsokwJkKGuSxCAL8vpx4",
  "key37": "5j6aE9doDqyyR7zH3vDn1i2AyQH2C7oFizBTuCKtHjCZ7RD2GHYd8WZppaaTMSn9gRmcYuyY46aCPdE8HLtjrvKR",
  "key38": "4udeTyMXp8VrU5ysYxpWAZmdG2kaEW6E5TzwWArf8Ftz5mqHBQfcVg2FZVXfhbbYSjqiHhVKkZPuGffufAx3kqFS",
  "key39": "5uC2mUZ8q8KmurRpvNYKdXj6oApwRXGzVUV2L8993PjELeWfVpCmSa4Bhjn2ds9T9sLG8ntLNfmjMqvQ3yvxNZGP",
  "key40": "51moPSDvoHPUdXdwzBfVeHYHjgx44uqsYojbKSnsGpmxtMKGX4nJPmbCMqttxAt62EKEXEdB9JVaRSESSvn6HhSs",
  "key41": "4VA8nqP4Ky9ML5hL1L5TMEEvg6RVUAs9pA1zRm3PwUWxGHoCuQZTbppV6tr8shkuhg6eKYo2BtNX6YJJeihzVPRL",
  "key42": "N6ctVCtLYGccgxTdE4g41umT5xK32XxsoH5Xp2BBArh8E57dLsL8BKLaBNeiVE5r7MpfeSpAtRSFwb1woYipxyj",
  "key43": "3K4syydhbMuysZYCw94Ms6FqVWDyrQ7nZfV9YaVGwkT7K1bKBvHdg4nzouxEHaMNrU7m3bt17hDQM7zKWCXkPSgx",
  "key44": "5LDA9445tt3CDk5AhM6iYNP75qzVEEyL6UmHCXPL9rU7RGt1vujfmQKCgAPBE9WvfoQq78YwLEFtnxnyQZZapjWi",
  "key45": "3GQW6Jsn8yURqdouN5A1ieNvCWNs8XwVfpA2ndy18rkisyXQSjUQWc32EL6NWWhTEFADpwavuMUNzAP6R23QCmDJ",
  "key46": "5kqvn52ijXsyFC6yZGDkoCBninaK7WDxcd2ivqxmwT99mYFPaSucoVRfDUB2qNSGqrajdDqmkYEhSGkMERGng29f",
  "key47": "5oCjSte2mLDQjsYARfThTvWC7tmiHNFJXFxS6Du72sY9PMBNZ4dfDmMt6daT15DBDAd7wJJ4nFQxLCPKZqhHcMRY",
  "key48": "5Kb1PzCjdWDSLZ1WYRhnQTwMknLGXwF1zjEF5ffaxAxBc5Vrb6qcVGo86gwqmpuosYuY9aZFzV4tgNXVrqPZ7yb7",
  "key49": "t8HZ6DW8wDEjucvRL5xUWnHNtDMLEGqLFaj1ijrBenXiSVgS9CGFyNkrBn1b7kf9TdLjoq9J7XQdvU6qesk97Kq"
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
