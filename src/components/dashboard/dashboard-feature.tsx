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
    "5oMraAugGZyQKDYDg86pyFLiz4o5RZ3vADr6Bxm33w7E3R3cTnmbFKoQv4Ltdg5thk1XHzBobkTGcNCu3Eo89kDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZBnAc3HhdAfHxado33Rd9ZNVnR48aaJugpVGWLQXYLPUTvVhhwxv1VVPQY7KFjno6UwAcm5VCW2r7A6ZdciRjLy",
  "key1": "5cY8z5W5QQCuT5mn4G3T32gesJhK5JodFDuboyQ3djLc3a6acTgGcooe3GEqxkW9Ko18GfA1Zp6cNSWN3ruYmJY5",
  "key2": "4LbxSvg25mUubae2vjTi43tXfHsHFXZqwk4T34zPUFATyPmuriy6BmB3xvLfmH1j47aemSnxVci22QdcmcMF7b9C",
  "key3": "56SHpmz9ZxDYfPRLYvT8x6PbmXLb4dTV5fTEKuUYsS4NCHA8DTDZp5NyjQ7K1iCjNshewVvZwLYjLbYXCQ6cEghB",
  "key4": "33AymWgraZsTf7GRCAMig7adyZPmLCbVTBVruTgqcuHbo6s6ox8fX7arEmMHeUxzhzpHnaP1gGmg8M5xfAgfnpwY",
  "key5": "5wQqter7ATbXUxG13NAKAZVtquACLUPWirLv5cAj7WfJHoRuLMmkcLeAP9L4XuhQX9p2BKJyxPVHGfbQLMKLeooB",
  "key6": "3LgwKwYiFwW9if4yUy5BDxKkzpQByvYtvN9QbVDU9oxorqrFSQ2ZoUDWnyCEQaw5oktGbFET8oQpNpjubeF9TSVw",
  "key7": "3MYuMmvdY4QFwRjtVecLKYtZnaTh9iWu967CCYr4AMJW3Rxxzq8miPUj3qAsh7qT1hTKLyM7uuPqtEAvfuz86SYm",
  "key8": "5CwEGF2VLmnvJdiCTUQ7ZDX2p3MdCZ7zJsV6uNaWHK1oFEnfcHBx4BnfjGMeWZF71KpZL5tXZuqu23bfJTxx7wF2",
  "key9": "4KWRipVjadBVQDWMfy5QPiqYdWHX6RSXtdcQCN7eFLBF44wnGDFud7ufNGSBf68sYxiAQY3YSVATxfxketweS18",
  "key10": "3zFQo61N6uV1ZTTaBLziuYCoeBc1Dss1KTTqfh5rh78g5Ahqg5b5CNAB7KHEP7AEhwR4pnWmNmf4J2LBiqLxqUp",
  "key11": "3cuYdxeLXuv65sje4Ts1Zi41DKdpbD2Ne1M52zDu83LemA8qmbdyWqhWMXo7gzstTUvQTQaAfpugmY1168CcWv7V",
  "key12": "fGx2qvvXFeL9nHQE7bZ6SGFeFthow2KVRTrBRNE3FFH68WyRzuMLdchSGjWrgbotTWGuW23FJmDac4x8FX9jh2D",
  "key13": "34zUcVFF8yudRyUJE1sv6TbT2ooQgWFaKEtWJh2GAkReMaGFr2GK2yS2Q9E2pkzhwSvp2KKLbBhieDJbCGrn7cPe",
  "key14": "CYzUV1XsV2UZnk8ueYabaZuSxh8yAjSgN7uZXES8nGiZHjE3G7M3LzB6Nb4NBr73MRRnU7ZDsfk3SJm8kiJrdE9",
  "key15": "5yrTJmU2r9U8rGR7GsFppgP1AGTdvVebKMwULmm1goNDnTrVUuoHEtEJ41CdxhC7s6XA5nwPys82BwJbGsasjd9M",
  "key16": "4HSDddkkQLjYZ3ZYsRRt7X8b1QAtwiRhLrWuhGETb8ENtGWrANGEQMwZq5qEY1Ev9GEcFJdQUnr7VJ5TKcymBM1p",
  "key17": "3sSaDAVocebLn468CcCQSaRUDfN7HMP2EivG4oteWLKLkS9P4BVnk7ah6XSuf9uKcmCnz4E3eg6tavczEf6pQoNr",
  "key18": "4D3WKzQfLUsLiBdvSYJyEDHdFpGU3GmnscW2dEQDYekVmDfoF6wqopvHcVbXAR7LCDaWytnLaxCr9Lcvt1eFzh4t",
  "key19": "46CDaWkpYQ6NPvPEoNTnN1GARNDAcMjWnR7f4ZdZ98itfNvEritS7ghdZ7MQKWpk6K4sVMoBs5cWEqAkxSrjDUH1",
  "key20": "3ppa77MuSQPXX3Y5DyQ1AxQvWJcFqjV2o9skMP9QpJHrJ4fdwQEhuTVRQo32682FgX7gxpFCkvgKFcDyavDCPWgW",
  "key21": "2dKTFb6B5Kh33SD4BhmReig1ExReN1EttdFosr1ngsWsqUhZdCXDpVv2gD65TM87XWj23XVuQdNQf8PrftbJLYi9",
  "key22": "bbDucno3EjSuwsPAenDsVzc7C4WSPiDPkgKsenJVY1GRMBKwWgGLYRpseQNxnPVPWMhfm8EZqm3869FziHMzakm",
  "key23": "38jpxNpaKaVy8yg44CQujFwDrL9HNZfrdBNM5fgw86vqFt7YdnJikhVm3UfjiM1oQrPVy2PNbKb9ERrfn7qfZsKv",
  "key24": "5B7L3qA3yLz3cTTT6JJ1JGaJwSfYvKxLHAeKF5dN71ehLhLgLGKJcn4wfVUXxPzTM4tfGy2Wi7kuyxSy65ykQZKw",
  "key25": "5whAExtSaKrBaV9nL4JhgvJnMSSmqbtw3Y8Pb7pvwESCZ2kdouqAe34AHQMhuhLPpW2FMt9ZkVq9YB7hEAYimA3g",
  "key26": "3UAu3sT2k8trXigxhqXyP53QhQ1SYV54LdhywuaWKPduM322fEgzRM6MFnjxbpykVdGf9yKDF6vTLihEpbmLvhMq",
  "key27": "aN3tfagGponcUEK1aPvcF8bj18qbYicDYjod3V3iQHQKAMAwyN6SvGNvq6mTgKVFtsAgtgao7GN21FX479nBSex",
  "key28": "2f4mfRXQpVqDBJVXjDsGMjR5Vn92ZSSorRJTzerqtZ2kPBXcDuHrAncW3pLPMPcdNRwwPyLQnmD7jV8dQ9ApmrHm",
  "key29": "5HCWgmpeBRGtXCrf6CyuNV4BfVTsRYbwStxy2AGLr92SJztPN6EVhYfqPZSA5XohZmrrBvhp8Uj98xeYjx1KLVsD",
  "key30": "61a2YzbfgJ5tzEiwq3B6MdgcvXPNiCU7LEiaCAwUY7ZrDYB5rgK5Eku2RnDgx56YTRtn99H9RctTHk7EXdrFhmYA",
  "key31": "LhbkRY2cokCCF9vWWENtuR6VsDBPiqfet6vyhcEiCkqhx1k61ShrZNnTHwBQ3PcJ9xepM6beV3YJUHzHjNrq1eH",
  "key32": "2am2PTRuwkbKe5giRFY7taKRFkYCnhydtTi6jiDwRM3puCZBPEZcfwUP1xddWVeYkeTsi4evctuqj2SRq18azf3S",
  "key33": "2mDpjCU9rpaHAoYWzF971XVFq41g6WPf5KaBLY2hmJQGHx5r5KF4MjvS1QdGa4kwmD5Wn88n4R8kPHPGu1qN6fUd",
  "key34": "z5rL73caboj8JAMtUgHkwDoRA7whnz5WHffndLLCaKBbTp22Z225SSkLVht6G4SCTHqv9J6RsouRu6gcYHqvinW",
  "key35": "3x6gLMAJaTEnpEgBHXgTJqUhg3Jiyh81cRGEnDxUUqY6A61CyrQANE7iPm5V5ZRnrpWspMpRKd2kwnL8UPDKXyX9",
  "key36": "5rFBTa74uVRryeTJdTHfwx7X2N2cXfd7HfmYBVf1zcVQLMRhUfpSb6QN9BqNRtpUZ9saYVhz4gT2bdGsi7efVvC7"
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
