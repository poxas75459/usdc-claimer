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
    "57BAhTzmZanJz5WZ5svz3YjJWAFZ5DfsGHMyNYv7au1dTVZHJEahH2x9tzrZ5MPGwj4Bss1Zk8WyCKz6dp5vYYGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTqDdTkh1PwHCuf2em32KtY3gjoYvdiYLUVFkCMoThkcmdsKoEGMtfGY4YjMw8aiCcsoSjRA8xkXVSwvx6Cum8W",
  "key1": "a4kgNfWwbNNu76zk7727HtLMbvf35jBZs2EsunEGf5kF9W3tavq5zmTVyncKpopVhMhLy1aYK4YaWhTEPw8JphW",
  "key2": "31U5vBurjMTFr5NDi28JbXMWV8EJdFHmZEXNLwMsGQxjWBH62zep3h8xLjwxwKF15BXEJyed6CfXUMyP5NGUb3j9",
  "key3": "2xobsQc9CoZXtEwNpBzThsqGXcs3cScAV1aRAaSVWbWN349jUjHVPprrD2krQmJETy1Q7Qtka8na2xDTmmQXskSY",
  "key4": "3ghpb4N9GFxK4f7vPpa1eUh32vxgJrAKbsi7TqF575dqcTC4mhC4bX81rBGE2auQdz8JsipkEYZYEjaDexEGvPbr",
  "key5": "4gETRZzMHmMVmv4bT1o6BLki42namzjKkD2tAuFkuiMHQjnMNLF4gkTFuf1H5GM1zsJrSzWdtNPwLw8MFHfY89st",
  "key6": "3QCxUcTuARviaZcmCSvBBNnbzCVd9iYnKNaELtmhsDahG22SnBUBq4sXvY9zVoeJGsgAanvUzsaY9B8JuCXthGcH",
  "key7": "4H1UY6gDY1XHzszXUC4q93i1uYMcKC6aqNPWYRpjxQ4ht7hLZdktr3tSFcw1bqLR8MHBgD8HWz8guaxQUXbHWEDB",
  "key8": "yrJt65pjUBh1vCCy7oG19airQ7SU23nXqNfu8WrEk4tUFGUpzSCjY62ghVpYGwPjhHWGQqL66VoT49m3111W66A",
  "key9": "219UwD3pVV85hybF1sTpYrE4LkRToe734Jv6zDCfCZQSVb8mnC4WhNhDE24YLv2TVEexzeUL65He6Y2tuHApn98u",
  "key10": "3S25gB2x7xwa14JERCfAwEshAEXxNK1HM9RBCncBg5bedNjwVyS5Zjn2FwAFm1yzjX3ebkXa6214qTyr5t9ewcFD",
  "key11": "3GuR3iAn6ngcQYF5GXeTT9LHtLArntNA24W63qNJNJ761QDFX8Af68Zr82RMzJ2fqZfVVwgnHJxREWxZNKhKwHfN",
  "key12": "5Ew7NUL3vgvEJ9CSUaqY2ZnrC8qkXfbK3f7wXtgssUxnRs4XYRyhBsd481pFKYACKUByqhUUjscR19ULSXE6vTeB",
  "key13": "3LFZ8ohVn8JmwEtH4W5uLF7vS3fZncuVtcUv69eyCX9ENniNwQg87xPZ2YFgRcDyXBDtMWxLhM3ZtreCpkLhEKMq",
  "key14": "4hcWpKX7g5aLbKbFthAvyc3tRqS9YULsVAkPAdDXauCzYoX69T2yM7kFPpJxVCE6awV1WjisFweAccGSQ4zNY59m",
  "key15": "Qd8eD8HVrUbsUWFJXicUB3qmGhdreh8HgXciUH79FKNx8BVB33PMMM66S9oTSyR71PCHm5MJsqieLfSPfkae5Yk",
  "key16": "5S6nZi4acksEcaMwH63KTWKHaZG3UYgHWJFrCCEbFYaY65s4e7kcXM1wKPVnmzLsV3ziDdDsLvRqsraa3CLy89tH",
  "key17": "SUBrftBPAXF6Rawu8qFo4EYLPSav9JSaF9nzP8f3ypFh1FtkzNxgpY7twqDWfDMRTWabvqdzDrhRzKpqv7c7w5V",
  "key18": "5QK331oGUqAui41eFvL6kUdHdmn2Pr7cfcNuB8zCqScZdgTQLicbaPsQWcfKpJh3PX6euaearq9E7fPjKCMh59TV",
  "key19": "4dRqweFyMPxTwmQspjZXNVp9svqvSfZXEzCV9wfnkoZhTH55ryeEMF3eL5HVXAEunWj4pdmR9EcJUCgHHmXPC7gt",
  "key20": "q6THQQjzwntvf95aSK1dPqp5xN84UPNN4ELpico8tUexaQkanw1wVC5xz9tx2wVhDNgp4SMwf1YNz6rsV7ZWkWy",
  "key21": "4bmDFiYurofpnmUd2B8bW7Vo9MKcm11cxCEFPShqwz52AwBEQMFuNSJokMZvg1maxGL6CJFFTzNjnesr3NZJyBsp",
  "key22": "q6n7nqoLdjW5q82MGfSTAXafkEACA2c8HJ2GVYXUrwyJaUZBwQPFEttj1PgwQ29X9tdyrvE92GfrrsfRGuqvS5N",
  "key23": "2ad2Q27jwfDxno8FDK278XthN2pBFYCLdzMsUS6H4nrANBcKsCjzPMAK7qhKHgd3JwjyC9knBVLGhPVjTPagkddF",
  "key24": "RqMLJeSCJX6HjN5B8nhWXBvmrsPh66LC1KWGtKJ8wgHoSFaEQmba3cDbPsFNTnEK5FLKSLwiFBAMsxZBRMWsVBG",
  "key25": "3i95Rka5fzSrpCUKeuNQV96jq5bAzabENVfaPuMLYZywet4FEGpdJDy3uAQCUv7hsLAsRjNp1o4tUERjddYb5tSA",
  "key26": "3bnwqFY5pc4RV2ArfUy9ZNZdurEtp99XsUj5LNRnjt3WtzqswvciYeckgG51XiNb6NCkKnWhYDokKyP1r2R8ipSN",
  "key27": "4tVN6ucZ1r5yxVsxxJZBMuPck85wvdVHZZYZbf2znbZrNAWV9TjVNcF4H3CYWWkuLU466c2iWr1R9BDzpMF4wRE3",
  "key28": "65gjepEHoLeaqSAvsixcxG1bbrymZkzWE3NgTgPFm5SvdBLDeZEezhbMeGqK5SXC586Rxai6uNVMMUqWehjHs5VF",
  "key29": "YpSFbXSb68S24nnVGfY8JNwTe2xCM97EGLTcuhVsafpXmgegdTkxKqSTz9eQD64HiGwMmsYjLHmEPphUkWpCXJg",
  "key30": "3F4BPZTeFhowFaDkm8WakfN5a3fQ47HXnmKbcCjeceWrnjefCAfnxE9sZYCc8nwTgGTPX3Kbm3AQ79V8QMsSAfth",
  "key31": "DopNfyTAtAr8f42tuYqJjb7tcwa8V8aNdQ3H2btVW49btgzt4nBF7oLz3zbo7Q8wBt9KvAwSC6JjmFhdz3Qw5D5"
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
