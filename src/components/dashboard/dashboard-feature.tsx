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
    "2QLQE91Ajz42kNu5rzDQTXsPzRzVfeuLqPRQn3FYukysdSgR9Mk1F8Pdp2TUG2JKbihSyNLWuSv9TWKSjivZ5qUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCTBvJBmJn2bk6RsXdWskp5Np7yqYjsZUKWAysnHAJrU5d5GdRzKHu1ogSUR8x1dmQ3QNR86yhkhZpxbFupStYN",
  "key1": "4JBep9LBmsRTFunyPXrgkycENDuNhhDbqm48rMoFWQv115fRcgu2h3WwqJLwUMLe6QUq1oeqFWose74c7GS42k1a",
  "key2": "1pXtgq932vs79MeER1TfBpkxPW51KRzFBKT9ogyWwHXBpbqKz2qXLU27MV4pcP6qjGAt9rpJcvWEKY28KmVXcjE",
  "key3": "5ratVGDsxARvt3svR5YS17QZFZdjnJ9w6RDwmLJgvbNbvBWYf96W211jX25RfhftVH4GPLr1eDxWP6VhAbPDyCPT",
  "key4": "45rteWTqe4bRBgWhT53VjEhG6a8wJooRSk4r2fk612eF1BbjsPgTDB8dG5RWaqwwoDFrabrGxr3ZVa4EasqwFTC6",
  "key5": "31uQtPfhVh9JAaiJgduRyJsFL6SCsQ3CRv9Q4LeGPmzJx7C59ALHWySDWzt9gEntD5Vhby2Smq4UPCHEUdJzjkpA",
  "key6": "5JRKhaQSwpVGnRJLjBMWTL7P6B73MjVRe3gdaAL8K9UJgCRexjkNXi8ykbpLK56pA4CkUT4C6BoSt6sQojeinZDT",
  "key7": "46V7vCwq7LibJoKU27CLc5A7QaxRfqFDDTgcba3CPzd516Ms4sBQfr8pGVUnuyLXLeg5bWFi47Yem6Xkx75xBQvQ",
  "key8": "W4E228nHmtyxGn8BUgc58vqDVDuAxDDmxsY7bWBirPAnEeTvrHrMH4cahfX9YA2dtGydnQ2obbWMzTTgzBB2dDt",
  "key9": "2LWyGj1SbhkQ9vio5ts83zMHC275znfcFt8PfWTg6md9uGhhX66EADKURgRfPdAwN7U8hqYEV9nuffsuy97vCM1w",
  "key10": "5LAQ96Zkf6cpKTbwvn5DQ8QFPvNLqpJskDDeLFJJ6Ti9z266kSTBMYdhS6mozsgpUFEf5tsAGzkgvbSESnkUCCjz",
  "key11": "5MPPt8d87oG5b5V3DeeJK9mNaN6xqurQe6umCa49VnAECku3bsdMQ1AP6XMkceUUzfq8Hkdhr7zmGY8F6nbkCEAX",
  "key12": "417gh7tsNoCqiC8emfCN2ZgshCXKKyuYPSLDdEw51LofXpceaH4CYwVyFYa1p8evAn8QgWbu9fcvzUEaekoUHps3",
  "key13": "5FfegZTctVSEAjdmUXp3ADXo1EkTUDXQ9i6SrUKB1VMqpjK1DEU3irZPumGotrLKrheqp7h6MHXx4dk1PuzPaZf8",
  "key14": "2rBnW7C9gc7BCXVMXpBvZWbUn9JViG43FvMeDERVxsFEVMG2iQqhQ3q3EdhT8SMnzhnERtJEPjJRZy9CDp64N5TB",
  "key15": "WyfMNsB1p7auGi611LDMKEFEMGgzrh9yh43P461wVHPxarBJinCFHMigY8GuP2BjzBsiMwiLnpJRXN2SCVZRumL",
  "key16": "4jta3FY9XCy7wfukpBhj73mQXVinXYToYy2vdN3hbUnbJzHkRozvHEMSMaqkqVNt1cn3n5CsucoU28x3Wvw4aDmV",
  "key17": "4jdigAauceJ4RBHGcGWrSDt5tskzmD2sokPhBDcGWKJEo4FAeZy2eBa3iFAUXdCFsRksjYyWAdKnT1JmiWeKY3gb",
  "key18": "25GsTkBo6G9ebvwLHMk4vxVWoxtwA2iEoxkbfHECjbmBhLugoMam8B1Kccj76BmibKm26Kw6e7ag2xQB7voKgjTt",
  "key19": "2aRG8fJ16BLjyo1osVtXy7kf6i38WX1dA4TZxpXfAPXdPAauNyjsXEKNoyQBSDySsU6AZ6pwf9ogcnwDPwBNnunQ",
  "key20": "2GJiJgb9eXYLS4WJm4dvdjZFZzEu3PUNMPpBRF9YYwvuipTTxrKxQoVPRCLX3xwZuLnz5rB7o2ajXG3PgRLiL4Zm",
  "key21": "9vvdXu3PQZvS9tNdQGVsiVUbmbsc7SMdiS9JeffG6geu7tXHvwFxUE6bifujnsdhfHoTxoQVPawgqRUiv2kbFS9",
  "key22": "5PJ7NAZV3vP4T1v2zuAbcVuyMP7mDBaviusttZ2kLzYsmmsS3NuwHSd8ccveFbrZaVbb47BnLniR28jrR661Bm1k",
  "key23": "JZbkm3JYAQA9cnVhwjci4nynzqiTH1BzGsVxwFBvUgGDKHp1Cs8Ycm5GTaZ3Zrp2cDWbU7xzQvhXx52rXDBP63r",
  "key24": "5yeffSH8Q6Sw3Lrdzx7m7nNceysxh56GPfGbEPNgkasWxnowtRAp99oTDriyS8xhf6RUa4rYXiSuYgt8WPHeqh3X",
  "key25": "3CH5jB8aSC9ep7tjUR46ruKf1W1CVpk6GZdNahJ3ejjWLThaDTW7c9zAn7BWSmBU3aK9CY1j6b9AYD3aDRRreKts",
  "key26": "45gawZwrKUpB8SJE5x84poPjxchKhzXvGFij9iGButxdnMTNrJLak6FVEUP3otJdnuvbBcduR2XfLwhXknH5P6No",
  "key27": "45nJayfRmUVVFuhNsWzgkwA397LtpvmDB8p9mebcLjgFmLqVUx2GkaGiSWFWGyBmgHJDY1CjHxduJrb4JTVjFPwR",
  "key28": "4ESmEgvMiscJcwtGsdrysvuWDas5kAneFkJm1vK7a3gw6dtxA4YRrNDbEGcfedavQe3rEucHkMVq9DxnQCQgdD29"
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
