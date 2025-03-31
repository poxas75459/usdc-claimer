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
    "5GuVgrfMdkRh1bVE5NB2YswkuCJxBiuctDPRmJcuANzCNvJTMcdtyF6vafVg4QkqRoJsGqCMATo17y4U2Ege38j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56eSzzXqjSdfAJH825EuY3WfyVR6Gd5yY9vKQ9gC7HUEHYjcgdBzuqik9ACdWTm5REb7A8MrT4SBxSyYPiXKunYX",
  "key1": "vsv98yzhxttdto3x5fXjc2QaXaiCcCLDHQoetFErm8Cnn6eqRcHWHdNKt2qsQg1QkhFEmf5hGPPecksuGom6rzK",
  "key2": "3Wvs9AK4ZrctkwrYGjkp1nWAh4R2myfJzYdSm5kPQA6FGWCSQ6y1wRML4KQJFgE6NSjx2istamxfUTATsndMWiCU",
  "key3": "2r2RziJTgxJiVB6JkneCJFGU34XgAPWHLgtKQhRyaMarRn3trkGS77pCtvUjE1ojyHgaX8FR1FNGxaGBVz8kUE9",
  "key4": "2VNJnMDwmafuVRxwA9KJrfn1cD53CcjCpgZTa5Kz5dnzvGvoGQ1UfVFU5URJv9fa2uZTbicYtgqcq51nXrZTZfau",
  "key5": "46ETDC6pxf1xLk7DZorabBfjubckHzoxRv7hQDKZzwyPxk7z9gzpBh2vZSSN9YbyRQSX2ekgt3432BgUPFFeMMim",
  "key6": "mCsk3fVXW3xHxXCAsHN6VuYZfVBxQyXzj8S928FP3MwveZRKkLSUiBcdt26mR4QTSWcxpiDLMLgGNwfJjxkdoHb",
  "key7": "4NK3SFL6c78YPb3LrbGgkp3jgr4UJyH5o2F4Jo9UbAS92YxtJ4RxuSxkiowdU9zVh8GpWKbLD6CTYnRw38KX1jeg",
  "key8": "5gk6TdgNRgWFrCXvsM97fP6STwjZc2ZdK99FRgHz4LrnRzN1iNv8V3PesAv2HnuDGSUxK8a4FuxA9mnN4sVcNmFT",
  "key9": "3VZbTs1ebw6H7nx2MRdx2ixCgMvckJQFJZiDAEvyxo7sMTHtAmp84hLcU9cvbvjfXTYC7sj5LWfUGNgyB1wALbdZ",
  "key10": "2BEVRc3m5fXDdU5JGgcSo7rrNSF54FVPpfrA6XV9d5pNhBV77qaX5stbrwFf3KPco84AhmJRmpM4GyN4nGUpNCkh",
  "key11": "2Uq9eKgcydNXKukA426VpCKcPEuuB4wkj9c6qAYXH7MsLah1nC6FkcjGgSrH7jCsqGmwMyLMCKSAHyjHBZw872mU",
  "key12": "3vT92qaivhVJHgm9amfEYFrfPYxo5eEG3SYaJ3R9FiQakvnySD7rEXdNAwitiBvGqKftgguDivmu3ciDudRS8UHi",
  "key13": "2QGaeum83QXV7cFJNHKVUjTuC91CzzLzQ55mgseEJawY2Fe4tGu9rT5CzAvduXQzVWx67ZJg9TYcT87eACP6hNtG",
  "key14": "VDfqMwV5r7d51FiN5dHepTyaAg7u5HQeKTPpSZNgjLq8upoAb2rwG1iG6i2SCMFbheW4aLFVN4vDBVkVRtEoj4d",
  "key15": "3MicV585CK9FPdacv8Bqi4YzDAMkP62wFn2XHHE1i1mE3Gf4gyBZPEXATzJqJgqbpziqQVkQDPAV8GZ2KPnismgr",
  "key16": "3egFa4QQWUXFhYMdPQDQc3uYmAWWzfxPQFpDJBP2aZ9K1b4CNNv6GmMyQztp46i4JrDtKXCHqnjHeN3PTncWQrdJ",
  "key17": "2FEt9WajEQrKG5XdCXz9gobQT6JWRZxFZHwyUVdsvFg6Sm5kMfHiyUJ5Mz6X898BvLCsMKfWA1rNxZFk7g8CwH8X",
  "key18": "2if3pSUK9kYkv6LMfxo8XskTzgwd7cyjgJ22zBr1bvsYpDHnrSc5LPBFdE8hZQb8rwJdFNMX2JPLW4CnzFRWD9Sr",
  "key19": "AtjSqJNwdUnyJLNSqfNpTf891aujE5xf91UtqiHmMbqhdTUdbci92U3sNBd7nJXAof8KR2ReL53XNRY535NdHtD",
  "key20": "2r1f84pzrSyVPB8eobxUoHsYiaELEL8V39fVG4W6hmnM7jLdKizGyPoDLSK4nXvjbGgzvDdKkhA4t5ZLFbaNyNaH",
  "key21": "2Ks1ybmdPoEq4pJqahYPUyQHqAcey7LLeNxZK5PAd1HCgh665V2CsViNj6zWzeLKzMjJdwGb6D3nzH25ahU57dRh",
  "key22": "2ASBnreJxaL2P8Yfef2bkPADMbQ45BSABasfJhEDGm97dbs8etp9TtaoCY3E1rS6164pW2M3yCiRy995MxueNvF2",
  "key23": "2w1Eovtm3gNhyUBSFxf1wFnBTTr2jTPaHUrzwNuaLxmEXjLwVnS2hGgvVzwFqEPaSXx2uWvAL2Axf25EpzrnGAST",
  "key24": "wPzWC2Z78itpweBAsjvTZjy8yPFvdwt2ho8JNQSY4eUuPR7VukyAJE9pyxDfYE4jP55x1q89dfyqJ3Fgpr3xQHm",
  "key25": "56GjjpNBL9sZ21c5UGsZcxiJs1zYaSWL3CoJ7yV4632Yam1b8u1L2rzE8aW3cKC3cLJYmnA2JPtNaUZpFDcGFNZH",
  "key26": "TjWaS2M21Arnzq3kscxFzqjK9HyfWCp8m1DRsLvtFnvDficCUq4dEanX8RCBEr34J6YjiP2ac5JCqJDHww8Xmx7",
  "key27": "2H5asx5dHtiLjvoLvham9aNWQznePsjooXu2QA99qs1n4ucARvmjJ1yHADgrAQWufgJS56UrVDDrPXvgRpzwcmC",
  "key28": "5WMBbtQzsmu5LQrK8MeLRueMnUMJLDVpbVk3Gr1TetPDMW1GefoN7J2U6TZEmvhv6HvFAsPaPCmiDqsCq6hjwrft",
  "key29": "5mJYNLNQwT7tunVu5QxtUxwbM5Xn9f5nTYDmMaeAkfjfDWBDCbh2CNAdTFu3hrf26wdezZgXmbbpZq1qrnG9Cxm5",
  "key30": "5W3gQcfZ17XfiyhQf1bEEuA7sdU2EXEuLX75d5opEvZB9x7Lm7R3uo5qD9M8C2K4wgMWGdMDtLtWJYw6vVf2JuTh",
  "key31": "39GXfjp54UsSYKzHWJ3gaFSx8sRTF1fBVmZuFVfUn8W5dR27KKZMRmLacCLadEzu6MFUUBA6UHMKWy5654N1FQov",
  "key32": "5JN4G7yg3E1LEwYwuDsYwga7BKDh6acUFN7Y5XqA9M9z2Z9tdN6AkF7ent55z75tqhbe5mDo4GByJMJrFcuJ7ghD",
  "key33": "wTr2EMRuf6Hs8g1zHvMN68UuJ7uUakD5MBpCDsooMySriAXVaujfFonnVfTLLYJ6VeoA8DJxWR5YKwYiDeQip7S"
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
