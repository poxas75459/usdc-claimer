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
    "49rDtLfnMgtQyz6mcTGGotPLkhKJWMa8xZD7DYCjMfoy3JzuDSLzBm7WT1nc4xZh4P5Xgob2TFdsztZJG6tuBh4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abbMrfGw4Qyosvb9cNxK8SrgoM5uwk5fg4w3JkydJMLLCKPrWL6CRKRc5gVYJwTAv1VagbifWj7zZLQ4TuRDwe5",
  "key1": "3NUcN3f6jLB7tVJFbRuztUbjtU3uXWcWp8ZbN9e4ZAZtWqVwTZ8kQacNvyXqjb6iJGP3qs3PBkgJSfnWNDWGARv",
  "key2": "syQfTrXwokRk8GPNbsdLJ1E7U9qgfeVW6s8J4LJXJhoTBKhSvKxxNQHKN9BJo4b1SPeCZVvckAiQam1DfQpKeWF",
  "key3": "3TpAHD7JZJBKVDDE9mAydhZCw2dZPUTKZRSf8MBiTc9bGEb7oY82t5KTjsnohxwamTxAuZzYjhh4mLa4e49BuB8D",
  "key4": "41orySgvZP5JqUygxfaYcePTZWRjo4W37kKKw67Nqx4TdDBqa3bzZV1MTo6xvPey77LkUxA6VDemX4iDzf8ThrZ1",
  "key5": "5AcvBvBg6jfNzEmNaDyg8R21mkPJnyfeAUYEwK4DN3EDSTDpZSnwRGVxKzuybVfM4yaabH1GUT9PLPdVrQVBo984",
  "key6": "5q9GXghL4iKireLBhwzJE7w7YFikja61QmFdYeWMduB5pvbjFsLQsk1KxyoJvTUeU283fdhs6NJhu6tx3ww8LVQq",
  "key7": "CzHSBD8sycaSSBF8gM1EtmnkQnv1skA6RR8DV1VZjxrARTD35eLdCxd5TH4sSKqPpxPwo8MULWb8zbuP2VwoLhz",
  "key8": "5vy61vM4nAGDo6n1bpMrKH9aE317fxw8vAdqKPwsnjMpoLUDuCekq4vDxK3hSZ43Ra6GU3DyAFRGSvnvf46Wmdhq",
  "key9": "3nEC9hKojpTBj6E1w6PmQcV3VEXjxqTb4WFpug7V6whGKSVoHgeRLF2RpXJatWKpb2Q7AcvQUPX65uNuv5jugZs1",
  "key10": "2ZhL2mvj3Bjte2wgDcB9ZFLtzBVCkHmm4am3W8qGFyoFiYzc8VoUYp2wTYBjdcjuTGdWCTW52EsfhpphtWDA4r8n",
  "key11": "287es6JW6tsFrjAFmCDVnAyAdqmsyTVTr52bS9NwZh2iQj3D977vGkrfBjrzzLY3zcTX88JZfGLDGJUpmcSbbh63",
  "key12": "28SrQsSUAfFWrGuSKy1D4hnYPkQwRJkDqMX8eFVv5JvNPWDbLGa1qMewZGQcMMuhTuNEUjvDcnBrYA8bcrTsxaue",
  "key13": "3KByEobr2j42HXFuNMqkGfzdYhY8vRfJCE5ecYn4B4Wc8W2bA6LkdMoPB7YV65VCTZSCSg2T75zZ27JAwSDxGqnv",
  "key14": "9Sjv8T2RMNVXibd7upCTX8sgUymcwaoA3RJWyUkW7x41yhMKvRBddzhdkvETnABpfVSdwbR3de6Zvpv5h2V5Eti",
  "key15": "2QaCmXRrJ7nLTjQpkHVRe2pE4fgx2RwUc5JLwcJmRmVdEE2rcy1M1D6uC98msi9hRTW3BkK64WciVWdxK7DSfN6R",
  "key16": "3xsDg3H6uRV3wJcPanFifX2111uaNWqXGsHGaXzQfEaJcBL1RjZpVzhEtArrxWmJjda3WCHc6yckaq63y6MdZM3Z",
  "key17": "4DofyaoQTPyC2AgqyXFVweF1TaJg8Ubm3CMJgCujzHBJX5zJN3tZTWHX4Jjhvge9ajb5ibamWmqu346BppgfzTeC",
  "key18": "3geri9waVMY2hwueeHtzpoxSKiQGW2sj8vP7W24SS8G4vif7igHKdmqgq8WGELreCra1w4y7jrwRvkTWr9ihkYZu",
  "key19": "2scii4YnEWckvMNmy69oAEDuiRWYNpquiEGittjMMsR3tiSxzwnBHrHc88mJXrHJCvvbBT1k4SxxriZ87V7e11QN",
  "key20": "2PY8dR9AbvxyQZKrKJmHp7ynoUFa2UACWneUhCk5nVePhM1denNjRCVjp3bwcSStPhfptWmbHg2XPzSwGbDo2Ems",
  "key21": "4oWRjvHemb3WJ7mjVoBTAjaj1JiJZQJ2euQcdjMh5RDi4196D4Wb8gMdASGn3Lrcoy9cSoJwGmpSPfja1c8YaqMe",
  "key22": "5XahjDCde2bzXJGH74SRUFvepn88DaDenESKxsgNUPHaLQbjqSCFsJVNpEXntUwSzWpDJBrgGxzYATNbkTmPhpWM",
  "key23": "37xVZBtbWp4vL4pvFsuiuRk66YXnps17NiRAJTY6n17DGGiwjYDJ2M7dGtuEKERnBuecJFxYQtP92PRQTBCYr9Hr",
  "key24": "4a8PEzyhdMQ8a39JUrysr9aRrhftzJC4P7RbNF8MpKqpyyFE6c5gaNMBEB2bShNxRJxEK9j9DK5LorLGNzRmV9we",
  "key25": "4EP55u9NQymV5BvTL667t1x9PM3tqPaMVwwynycHUbeD2wySvseZAwszzYdvzruYfDuCG8KxkS1VY7jPRiBHw1c1"
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
