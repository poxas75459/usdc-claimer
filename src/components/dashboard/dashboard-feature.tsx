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
    "4V959pQGLkeQKY9TEmAAeRyf1fPgXKBs8USY5sB3Cm1FhPsLCFPNU2MEeqCvL31nxCSvz792cMHsmxyCjSL4FWYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iiAQ4Ef2KSkFdnwgcPq9zDqrPuXSLLhhNUsByV4PdJPKp2rqkBRbXiWckk2WjWRyFCUVo1zf5raFadZfnKxzByS",
  "key1": "wTXp19DRRyUuQnL8dXuxBtDHni1mzaQm1oWMBh7rLGVZpcRXMc4uVWANV726Kpm2nnxV7Lq3WRyzJXD2JgH6Uzn",
  "key2": "2eD4Dh1pWPEKDbguQZawJkhtWVYC5c9cbEcDt2RfJMeVu3VitqLbrd6TCpMNES9h9N9GMFdTYCw4nQxBAXEmZi57",
  "key3": "3xQFhWLC3id3kQxvGDHzfCtoUJAqMXMBTUY3CYuGsYmdYgSHgigoSffKpnR8W6cWjPRG6XVUUSsm9iPQStEKhSzb",
  "key4": "5o4JfNafDKn2r575zwcmYxNpEpVa6zMWY6aAEn8i96d9eriBPv4C2chwQpnFpkaBFFwYf1J2NtD3Jtk9NXbARnYM",
  "key5": "3nJEGFBkkjhcQGXgkisnT3Zcbwzjk9UtgvfqFxuXLjogG5M23x8SQbiLpgVejBN5ypZJ29mjxWhqh7Hrp1UEKjuP",
  "key6": "QtSYX1TeZ5MbPhmwT9EXxnt6VCejxYcGRbHpEsjcKd7GZya6dk1y7YZyxqKDcqCpVuRZurgPt6puRfy9mCdmNo5",
  "key7": "5Q7y5DHscwSwQ95QS19caVoJGS39vyyeGhtDNuGzdgZmFLYButXZA9N58MZYhqkHvDLXd9j7vTPj1zoLwRUNgnXA",
  "key8": "3wYR22BXhxipDzKt8tEBCnKvHL93KhZr19yNks9dazFTSD8YuDAsQBexmEQ9ucsJPK33Lrkj4HFeTFj1RccSfJuF",
  "key9": "2LfMaFBjNrBnQT8fVZ6VXJZzNkJchJjstsiJnprrA1pfdz5qeDutVpjuQpubfjevmj6S6N36qfTScxEZ8N7YQpEH",
  "key10": "37wD6ArYLjBJBPYFARs54wxnbcM8bNG1e2hDFyQY1KTT8iN9gUtr5VVTPQEsYsSue9NQQRK9Ca82Xz8BLb5sxyQw",
  "key11": "8sdgixkWgdDCSPKCm1h4Rs2rnCadQQfJDvz12M3GD1G54CQLN37oJg3qUqnhGhjA5GdFhrbZiJqz7inRkzsLjR8",
  "key12": "3mu5Ha1tKdBW9BSf1JqWDMnoaDkEWg63GAg4mx7vwaAv8qvLnxbojaT1FnCzE9k6LUQX7kk5gQ2W3mLzDrp6Qkyv",
  "key13": "umcbhz72k8ArEPMffbhmSwMWMb4sBRJZ4eTKZHq23UiWaoAfEi81keXMEC8baviEGwcT96K2Nxy3f4KsjvSmLsh",
  "key14": "56CULroxvS9yhiPgDrCFSY6CuPeiLvaN9YVuF2y5eUhjF6QJmGrUYrdcDhTCoE6e9pYKEf9rZpqYLtAybvHpavV8",
  "key15": "4kzgKLR1MQggKju3rPLGjMEQkDq4BDpTSNjbncgiRNZLqqykVfenVyooxT5qssTMV93cJcRzURjqUwtYhqskKFpx",
  "key16": "3toSoQh4yCXXpFV6WEcGXgFXVMAqpBrQaC452A7tjLfAPihhmZG9bVqJWxVbiaXpYLvTKxHMQHUCRDwhvywshDky",
  "key17": "4Wf8xfkuNmQBhUXjNNyxEi393KzKNzsBLHVNe1K2pf3sjLfUQVeJQcQKq69NckxmxX8uVKGyJNPccbmPai1cjpdc",
  "key18": "3QQxJswWbGruLW8X8Us5pcr3pEHmDUL7QRsFAoxTUcGf1mJEVU6g3Fxes5p9xo7cTmCFcbvom1i6EhQtjy8pfJyo",
  "key19": "3R4P1wSesP1LvqPdRsuwSPZTQ4FkQ6j8Wsu3vFAMErbguNhdWu5CKpJePtmnTkU8WxEoCsgprkQbqKa2Qhr5DAcK",
  "key20": "36HVo6skBCHV9PW59yhVmhH1b5EkteFjoceSFmVo5JejWkP8tai2awzUAeddGqShHg2GLyyvdPNZ2wHL1dpWsckj",
  "key21": "4utRjryM2GAQqmsyb6QMq39TN2yAQFj6jvRkcd2WoR49MYVj84ruSh67y18rSHuFAKPDWj2pqoKmHYmsaG4FtqVB",
  "key22": "Ws2mHqAkx6tsTABkszZj8KJY7icvNjRcCoDn7GZB9u5UhUXrr1pLCz4GG73HYE4EtjzYt6ghRbqqtwX1mp4w31f",
  "key23": "2SSCk8uN2ZJoHQdcufejvMuoVRxHKNuj2GK6HFSNZQUwf64coFDu9JpcmxLUdTwsibwXjnpkUAhCLsDfNWQrfHVT",
  "key24": "2VsrJKEJg57ZYQvknHsPKW4ou3jkYWmdSjh8MKsHidBnVJjQVThVtmbpJ4fkgd2jiQX1tku2MwhpyDVJopKBou6e",
  "key25": "26ehMtkrWPCUVLNbWSzqe2UcFDuCFwoguqajoRtCNFFspU2oaEB8A92q2u5X8iFrJPH7vJPPm8afkqorCeperYW8",
  "key26": "Q8onyTX51qZepPh5Xg9UeoY4NHCSFMqRFAUB6Fg69bcLB46MEbqEu5A5oes4QA83vTQFTk8zWt9hw9NdA11UyrC",
  "key27": "3k85kEDR7CED5yDAcMg3btc211xWKHcAeg9bJLCBGk8YyXBW33kNvoEn5fXr9MPL3EZYRRqZy4HVD16H7138RABp",
  "key28": "5gcWg3R5BMAevH9VJe87jEoUyA8YQ3dvmmFWrmy5Fqf133iFW666XBnJyYHRW7Ss1HFQ9yfShGo441RfYagLhEnN",
  "key29": "5fFsPDyzisZTZooZUTnUmxwqP24BWi6WZCqn5dDy3eLcVaQpuzD6uXCxq2wgaFV6we3ou8hKLW1NzJUuk3kjxLe1",
  "key30": "3AbJat6KAVNAym8Z5RpqZktLt6YnGQFkS8QnhqxfnXFU3Eaqr5SsJ4m8AcbqAGZ5ou7iPLbVzPYbMjpvmSSMPMb2",
  "key31": "3NxSK1Ty5L6NySgbo3MKroKW5FYbrdM45MJkq1kVK5h4FAYzuAn5Bcc77VvcDHFAAGmjQZnpNVcqjJMJMVJE2pQm",
  "key32": "4Rf4t2skeEJCxQHvpqois7GFZTNzFTFLak1bzFAMg8Mr1izRB6TE15hYFhS3PdA3TYHmdRLrP5dKEBtSm6nH5Pko",
  "key33": "49heDHiN5Kqd4y2jQ3WgHJmdgVsCHM1W5mGpRhYUfbU3G2NPWfvPTjzcjwCrJyfFnRmJhKavmoKCbZt6Ya1c5Lga",
  "key34": "4LURPBQA9YRQcLAkYqF9DGX7ypHfUPdSWN8hLQhyhpAPfzNSY6sxq6xvxocetumL6JE3k7yQzzofvCnbk27j8YoJ",
  "key35": "5Pcf1nLEX9RXK7TusDmwraf6YhPWvyQ7yLBBpWMxZTH4NuypHyFf213usEx4KSR2P2eH9rmJzTjEXxiog6HS5SaB",
  "key36": "5XBeXQQ2PqYgohC8DdWAwvRfw6K5z7PiFy9WKX6FPfezRGCdAuspK1U2T1Z9dEfwHhfqx6fviKe4WnndEiMFZnD",
  "key37": "5cnzDpAxWx5R3vGUZ1zFzb47bD2RbGWLUYrtbdEfbgeSKifSJwr5bz6CgP4VVkbCinZXdqT9ibREQhUHKnaNjsu9"
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
