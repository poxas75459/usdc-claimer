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
    "aYNZfhBegfuq2HWttDiJ9MRrGHAavio9ydQrXA98kW1zYjw5WbTEhpkp4KR9z2pcy1ByNTnyeFxmVMKvVNDegpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmXFu8Tp8j4P2KHRFb2P8Aa6Ga6zFaxgu1S7spw8wM2CSJDhkc7ZJKms7y77P5W3y4ELTBbuDUishnt6QGmg7Qi",
  "key1": "33pPvcQpuKPztHjGCgmpPixCNT9ceuRAWqNUfooZ6GU35ZAw3nJ2QtFQD64WtmbbSAkfkHW8cbrmhwn4XtKqfMjf",
  "key2": "5xPDECTixBtnTWfT9mNpkDGMYdEk9BrQTbMCGFVqibEfzVPMEC5PJ6W6PPKDBM6AdqXDi9Dj12auE1KjTxKBsGed",
  "key3": "4HzDZXRCxDsBB14JZ7112x4xHQeBvHKFGkj2z7U5jjQWT3XmMfMun43ebz8aWBm7JnKwqga9BESGzZzd7dDMapHQ",
  "key4": "5rcokjrjiLix8jxXLde1Q5MNkuXXMMyxjrhTBfC9ddKT3krhvPufBkGctt7GxgGEkvY4FrTMccoxF8Wrz9BMun9V",
  "key5": "1n2mnc3wJSqh4EooYtvtvsYLLSr7JoUioarwkPhFTtH38TqPKN9yEaa2bCUvDuEMEvSDrDSEc85CMkn6FTc6AvB",
  "key6": "62dCC6tFAQb8KoD43JtiVMJTDqwqQtoNzEKyHxSFouaMybfN19wmjUdc4ptxvVgoxVTubVatmNwJUvDJZ3GMfciq",
  "key7": "RFrDFZPDfjcZcmDMRcUfX4e9JQvQPf7hY3bfimVsDqyWQaydR3WUy4Ty5JzySUUxK4EaVAcovxbCLUw6K634sXo",
  "key8": "3WnH8WN4BSSj7znuP2SYcjGpZoj6MdyuJb2qBjcGVKB56hNLJB1zQKZZYa9EH5uWfmrTDagKiZZoSdGdTh6izrw5",
  "key9": "5sdkd82f4FUoibbTUdmv16kdqLy2KYgMTna8KzfP6UtgXGnD68TaHHcoFpPhw935j7RJuYoS2PAzuS7Fy2ybsvrz",
  "key10": "5gzbVKirEGyNe359ACJZMmn1oWLSie8YPxYqrNYo2bGN6aCjJQQa9eGyCypyHuywRA3xVkJ9Qo857ExnX57tknYX",
  "key11": "4dJiMM3c78SSbGyRnF6GkctEtAbM6uEdMhxRMpfWbYCiRuzQ624moUqidgZLgiieEHKXbm268jUQMN6gT5QEa4Y1",
  "key12": "3JPrPjYbRVtkmH12ZNAfszp3CD8mxDofxXcmQPqpb32q4aQBypp8BQLMmYhrBGo2yYtG1ULb2Yb1AgsgKjfQvNq8",
  "key13": "2Gr79MD4wBnLLmoHKCw1q9vFWjAnvGUF97PQ9eurtFBZQbj2odvXoxExvows9WoFuvCB6otfm57iyfY5Gq6AMh9g",
  "key14": "4yJS8kUVg37BC6tSMNtf1izNYGN8oEEFTifehHcirkZ81fTyeeEvoP14rqvVRAxyU38DBNzJmr4AAuuXmn2k7Ars",
  "key15": "4gjTeWxkUSDBDMqTDfb82d5eEUe3nqHiqZqZgzshm79JK2RQbkEwqoWsEKyWwdKa9p7Q38pVxhFfinX6K1QcTCNY",
  "key16": "5M3acV1udLQGSLd2Hz8nYsckkzctsoHZHpBNgT7B3DPTr6jTvd5aHHZmpHc4DSfc7KMBzDbKsQBwVigAEq229JSa",
  "key17": "21uwkadDtfRPHeU7Zknherhx62rhpRVdXYNBGULsuQ8tjJ7mVrzbS1AQfYccJZj2ic4x9dZpwLiyc9QbZnVXuvjY",
  "key18": "32vyEB83mVSsof2k3NaGzR8ZvhNGcQhjuXmDYsCeoNGEgD1inAV5qq8zTtPqJs5m6CWS2DBbzswQXTWDn4AJ5N9e",
  "key19": "65zr5QQDw6xKWFhnhMWLgmbPWZYHJMwgwzaM5aF1v2dfLHRdzvKZyYfSLueGK6hrdPeqms9utDJ4Tm4fFCMaY6vP",
  "key20": "4sqFWxWG7S8NNrbr1t2aPbiRt2pdB78APh5qBRBdCwePhvZpKzTTGPJYQ47JY2S7UpqAGvUgdZ78qqbaeToW4DvG",
  "key21": "4ekdoHgLWScmvkKe5wzcQqrYbn1ketrJeFbfi5mWCz6dUVeKbP1xRbnheh7Jd4boJQpRUxoG4tARifHvJcPbtiMM",
  "key22": "51967gBkpA3GKXuxvhWntVDXN5gTKbB6wwUUB9eFk5Pk2kXRWYnCn5LT1XRGQA93erD3keMGAuzCnxiFz15ousfy",
  "key23": "5J5TLyNqaGwpCLATkWHpM7hKP144GEwKVRvfgccgVkPVWBaTNPEE6uATiJC1uUn5y4LNTUz6ocVVKYv21ZdeK7Cv",
  "key24": "28yMfENi7rWvY4jxNGUxtb4Rjaz1MpjKqE7tGx7siaQe5FGzZ8coSfEC5Ay7TR7wc7SJxcEn6g9PYzriCVBpMK4j",
  "key25": "rfrNxGGyUcbsAf6v5YQer7GBMspfKzTn8b4CchyREC4Fw7ZgfQ2ua6Mm37mFh7rryHV2hfS3NLpcfZ1Z5u5tUhH",
  "key26": "ayLWqSe19SZsQtfj2FfgaC9sdbqWBLcZT8Qo9GNhD5cYEQFTqeu8cMx4x8u7B5Fw4pYHvpcuEeP7SN7tVv3SFJ3",
  "key27": "4DmUkpj9cpbBChZN85CkQrNuAi9xDMKSfru3usX1GGsNC9kzDzon1tW6xqcKApmhaYvUChbiMHp4fdvYfiRcf1Gf",
  "key28": "3fGUbYaoGmQdDeruwXshirtd98BMZHy5Z3CPznarzcYm4yD3UmeBWHAWLnRtterwE1W3HwxKgUPEYRNcWHdWLUjN",
  "key29": "5Rv1934d1FfMxcSBYxEQbvw9YU9CALu2hmrSkUjSREAKa5q2YUC5o1BTa3fUemLy13yjkNzrvEP2RFifjufubs1",
  "key30": "56y7sugSEgh3oWaXBXHVwunjZW9dYszodHHTw4YWSBfyYsXKyTiLf2bBwpfP4XHWokZWjyqKLubqyYbQQQw31Xm9",
  "key31": "H2BFHmXizn43iRVeaas4nDAdT73r2axWiPVFgXcsXsC4jh8kzzTUyFMRnNScj6wFpxBNaYoGeSqiE7tWqp8WNkV",
  "key32": "58SgcTc7QWfpzFXHzw3eXBKy6EcHfiN2C71vC5yH3C5rJKMJGCGSUrxFfMsWDyH2q7bcwc41ogtTk96XhqGeVpaH",
  "key33": "26rxHNmcwPrbbu1deFAyGxmUxT17omYGbCVjrdDMdEikJs91FmM1F71HuJmxG2ojHvTPrUvtG4edVXvna3bZSB4u",
  "key34": "hvznQTUNr2oXZY6E69SFHsM1SHU2B9SPCtxX5RyyQRZqGiKWw9yn2cLUqDCKtdHek1XST1sYKuoWbCH6tKtapub",
  "key35": "3ZTNr423KhayK4KioFE2b62TPaEAsnpRwhcSF9GPZGNKV69aiKXoAQndDNbcub6a39AJCKdQWr7nsV9UvYmrCbtV",
  "key36": "45XErembzQh7mcoe5SFYsf38wT2AaD4A4V2qg53XY8NTeR5c4ecC8KYaHUo1ounG9n18bZJt4gCbxR197sTD95Vb",
  "key37": "QYsmPadJj6SCqYkGjYUUK4gkyW6ujTxd29iBLNLHpS7grMsz1WXdPH54tA24nf9wG2aErFYT7jjSyoUm7Fro7pv"
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
