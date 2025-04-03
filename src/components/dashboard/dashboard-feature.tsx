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
    "3oiZHF1LKZjfDDjAt15MR1xkMdgddzryGGJZHTCHfXyyUTYQitxCgHDhqcEq48KapTYropHdx2fk7Cucdnujq7vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5sNWnecaCkCYzkQ8vMpDjYNz5wWRL9NULXaEmwBajbsbXdr61ubFz6iwD27axNWRjjVJbpyKMeQH8YYJw4ofNn",
  "key1": "2m6DUt1c7yQzHj8uGJrT1WYuhNTSwt4ZB5eseAXYbEdHQUWDXDXivF4itxiTpFM4jZLejyZ7pR3Mc33toQr66KxU",
  "key2": "aMtpcTgLjaRVLiNqBtrmtJbAHq69Pb2zV9gJtvuSJCzCvQh74kZ16ZwD9JCMm73UuoaFPMSdpmvXBu57eo9Rtj6",
  "key3": "5vbJL5SyimGYRuNRLysC4u6i7kHRWuYTsfbirhwauxsCPGsuLMfM664qtAQ6fdg3cLftzELYps6SoSGrr92Vfh2y",
  "key4": "nvfyKS8wtbt9sAtLfsKD4t4NYL2eJ4KfVd98woD7aN5pVbDKedVLGhTzWHQKDeaChs86o5dhWFQqSRnBRKV9v4d",
  "key5": "3YwhXTfYuPMd7V6CxBbYEFXP8GsxrG4BxhqqrC3wh88KUEmg6jV46zLaLSiTdB286JfkzJmHxUfVku2XjYeZgnia",
  "key6": "54VsWLr54o5vph4ZAdLZkxVJ4p2XGxsDy2Y6yNk3dgf16mcgBkz4PRsC5ReztNqnKF6sBcxjk59xdF7uZgKmquPt",
  "key7": "24DCAyL6jXs99oCw5WDSsLoaWJkUXrb2oLESCYg7TKztrb2WCGC9GmdLonkC55WjHaakehGwaRf5CBccsMxMMcC2",
  "key8": "5bjSnmYGFXcUTcxFS4zHNyKiqFetCthsLWfRQFmoDbKS6SXroCNji1tgXZiNevQWL6PrGgWE7Q1RPmk1LWmhsCs2",
  "key9": "21HM54wnXd52hxMis2FQY1JmsiTMt5GNdz7mcrexmi4wqU9nDy5UaUc75guURfXFkmDfU5tHERPWxiKanGTepR7b",
  "key10": "4k7W6eY3JvxxRwvFiBabmJXhuKuVVyfCAgmRXCm287yt4s75vtwB4SHidUqq7aMYF6f6J7NFgjmbv75UL974xVSG",
  "key11": "2nPMCpGLPgtdEEec8YDPa2QBefMgtnsYhyN4vmCxHrrU2GadYc46z5VWq6ScoQPMW8Sid7eKvft1vcq2Xf3CrvBZ",
  "key12": "izX5VYovUjNxzURWCqgEVbeSAcxJEy9jeQRDEW1b59U6ebffPXrPNRaDiMVXu2ez2JTJPMafCnvcyw9LMwcfCfZ",
  "key13": "5PBFMK2Qau4brVXd7F7Nn5iD6iUpzVFdHEhitr2PLk917r5eY91taPCn7oUd8GV3sn7UFbfX4GmVx4qRqSgSeH2N",
  "key14": "3eM5HeJUbMggS9pfujHMY1EHsM7kiug8DsXBdQ7XTomrKqAu2LHj7JaYLaJdLVMrnp3CpfRKE2AEDZzKiJKBNaTo",
  "key15": "4vdtR38cgEpEFynMN464aPxBUGcXGsHwa6JNkowqqQ96c9fztjGrM3cLVgge9yLcJXn7F3JEUFp2benWsU3rtxcH",
  "key16": "2cogYudnERopBUVyWJEwUvCQaz33SpPh5qHECD4ievRuh3JeJhC2zgALV9eK3KkEVj4RZ6zmizcq5vVQckAwgmrP",
  "key17": "2MhRFKrbwUDLQ6S2SVRin98rbezZBBy5MUQYGGutQvprL9pYfNtA8ZnnoyySDop6DkRRCBbh8pjyesfTXGy6pfns",
  "key18": "5oEp68k5sk3mQZ1y7cM12iKdmt61m16DVFWq6a8Eov4HBpTSSXeWe2VrCrGKD84xx8u3xnMG5UERprY57ri9aw9T",
  "key19": "7QnHwVMe4CBPBWCcFBgt4FR2T754UFK1e21JDrihyCdHPK2E4vMPW2E4qsFvoKUrggJYSz2aMRum91eY19UhXCV",
  "key20": "4u57eKVtZX6TehUufvdymbQeyufWb5Wt7XugMSowPbkdgTeXLoDsCVwhHUSWHZpfWP3nDPYvq9fQfYuQS8WwjBPp",
  "key21": "2spaCH2C6PhY4Z6WbdGVgfzxhVwVf96kmV8XNDVS37rn2rJDikQrpK97HbSsQSgNiHbEpmJ44BHjpuuo1oRia8rQ",
  "key22": "282gKTf1eKLRPVfgKYxgHYtdBkED1i9SeQcjBjdeTiXpNxkYERGiWHNDJxqizM7EqVHp4d4UxJ6a9SMEAFPoNJxB",
  "key23": "2opLcbdqCRGuR3qwc46WKofGrQb74oLuH9oerzegtEvyb1LSvqcmRa9bBZRxFSgRqbQYyh1sjWRMjjZAbL5h1nFq",
  "key24": "32BNphLwCrevjrWUV2i6CfA5q2sCxjzgU6udYYRP91mHRPzDN2kSs4B9xr5YaLRPpM8e3coWVgnw4NZoKQuM6UKU",
  "key25": "3wotnUXrgsN9GosRrmXJ79g5roiaa466yAh9vveNFfNG95f3rYR9ULtqvxuEzRRBAT162tyNeAUq2kjz6wDdgtrk",
  "key26": "3yv4P7yRaXJxnVwUbEPxi62wkLXRsqRVQrEqPMTcj8WwguTGmPc9a1TX6RzFmK3VTzSuaaWt9r9SZuffxypd4QBz",
  "key27": "dpo2nh2LwSmqwrzoSKFvyAxntwZF7ebLYhYJSdH2nGh8aSqd21M82hMhRutZGwrGunfWR75s25ucQDskpVGYsNQ",
  "key28": "5pAn3jbGZz8gjzcZEzGahmo3rTRB2FYZwqQpw7KCAiHD9VpjbZc8i7wHe7HhPnLyvozw46KJU9HPcYVEYUG8mnAo",
  "key29": "3Lbqsc3sKctQ2REEvUfJo1yFUGW9ddBUXxYbjW6jgeVZXNb9aRTqfjf84z225Z2F17vPMTd7y3HcacNSeTVP4R4w",
  "key30": "GiX7APtNt9gegjpumvWk6NfGDEsXM6TohMuoNXmegMxWqbeN8pXqD6wkTJL3S8cJjCzCPyrJDQHzqYEAoxCF6oi"
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
