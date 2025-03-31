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
    "33tAyavvRWqnuwYW6eWDDCjsYq4anppA7FzaRexKFaTU75Z6WX1C4jF48Z6qBzdJSrLDzfE7K19MP3tKPZZj37pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nh53GSd6oNeKWBKuckfFYroEyDdQ9T6qe7WzSttngzYhQ8G86WBtpsNyULU5iNb4AWSzPu2uqMNMVcM6iuRzAyH",
  "key1": "3UywcMo8Fw134sMXoWBNb2ZKgPApFuQ7ggHoVFRJ6x1S32j9gpoaWkwwPW1QwiG1M2oct2zJqp16iz2xn2zCARnL",
  "key2": "4K94nneYHcuXVac6hYQntGK52G79FbJVmM4AZagZiBR18s7TtPwZUTGLqdTiqcXTkVqmYK22ZZuRk4Tv4Ewm2knZ",
  "key3": "4bEC9QCBNRomxaHNt9nZm5KA4xFgQ83YHS6ZZi1v7793VmTuPNPNZBsNov5u9q3wn69qs8pV98Yj36kd16pHDkjy",
  "key4": "o7dyL9zf5WNkXty8oLQzdWHc7SpR5GXPegoF4osgX5C5DkW1q6bhxrquYR9sZydaMiaw4xBWpZDnvuXSqyWMCwu",
  "key5": "GqWgKh5Xyh9ywCv19mYrfaq2rPLNj35AtwmsJbVbp84NxJYHXhwUM7iMvRBijqfPA2DhUoaJcnEZYT1ZzuEscTG",
  "key6": "4P9M82zvZGeVba8F61Sb5xdbsYVeYb8Ym6jRp5eGGMUefTPj1L8DMEkSBjwyt7tGDySgW5BFYwm1C7fGpLDUPd1X",
  "key7": "3WWHwvMz1SvqoB7oDuUbQsmNHTNKfVtLXHagwKYzNizidvH1LdTMptyTP8uXVXWZP2jbjjnWsTViaPTdzWdZissZ",
  "key8": "2LkEVKeqC6mP2qL2g45YHrb66imVYn8zAZbHvAR5RizzCfnrbGgUS3VrTjaaGadpNM1PuJxh2h1oUj9mHziJeuSc",
  "key9": "MLJe9KrzWEF1Z94KUju3g5TSSfw3eiUJmfyWCTcqJSYoFqxiRa7WxQYp4hNh8H7XkK83AMLHoVFoEjfJbeFQKmE",
  "key10": "2hVPVbCRWoJydqt82r9ntQccZVvCq755MJmcGuhs1zzu1vwVyBQGoCTht33Brdgo9JsMWS2WziiSMM12ivAz3NK",
  "key11": "3612m6e7MKRZ1gFUvLSebodJnQPLYK8dLhvPMFqf3NzNFWCn39VhrGKepnCC8J38uvQnRnnqCaK2N2b4w6sBjKAK",
  "key12": "4gHBhEuWFgPuQWTAoCE9WtwbHnd9T4G829qK51RPvCQocEK3so9ZDC7gW2FwFqSZpmQeb6wjgpXuRHxwEkLNtpWN",
  "key13": "qo4qpF2cLiRYxuS8qyqQVTYaJoq676HbpjtWGqahH9KebV15uS6HiEnbXxLHKsKa34KBFHUBAyGcseLbi9V2XKL",
  "key14": "2QgTcD5y1AKPdGTQE7HDbfJMYsFqW3fqxjECXDSG1D8EZQv5ZdYz1AAMuc29Wc127qVoTfW2kSs49AJZpGQ8hyQ8",
  "key15": "466wVLEf37qFkMoFbQuGEUya2ypzfs6oDowZQhjtPGnChTmcMJj5YsQpfeZBAahQdyp6SVcn4KCTm3x41TXpMyqr",
  "key16": "3e1aS9gg21igkivSxj1Yibjn8z3McWPnN6mn5TiCD2b5D99m4ceR19GCBJA7r5735XEPrrCGfMKP4iFU2uxNcGhM",
  "key17": "2TdZ7er1j2LqJSqbXA4PeA31EuFRiSeqXaji7XaQapNdbXFr9aMMzB1ztwX4nWDtvdhTQZddFEc3H2s7c5vSCLvh",
  "key18": "4ahjJaVoQopizDBcshtGii6utMMCpaH2AUXJEhf4YxSfezjkY5kKcb2Fs2teYbQjDo4hryAWHPe1nvdWN4UxV3X8",
  "key19": "4y7zggnwCJba8QcaopN4mBfd9vFNDZ5f7AeTcMFyWT9DYkzxa4dWPThtRQPyR8nXPwjFHGDkUVQqzudg5G1NXW8H",
  "key20": "2TGuPstJVqNDXufksecEKgm9aNPgAYWReECF9VYpQAgGANFbfUPb16DNZhnFwqBdT1zTMXfihVvov2C1wu1j5rYz",
  "key21": "41eorsaSFivfXk7wsrJuE7JR3s5yNskPNwd2EiPmYBFkbDmNd1sA5Wf9iu6kFmdtpmYTGHLNVzZNpkbNcnPyxfHN",
  "key22": "2ustU5QZs83EZBquVawjDv9ciyHCbdJJ2p64aV1CsyeqgrNRdJZJiudUWuEfGDfkkwDeZgwb66G3Z7xUga7uJm7Z",
  "key23": "riPhNiyCT7Gy29NtM8RA42W7eNj5ijvyUvCb6QsEnnhH3Jwe9i2cWx8fxq1eJdTfynESKA1Fmg5dTTKDFgMhUCY",
  "key24": "4qU379TWPH9ohf7zAf4VrJz2B43a3cPqf9xTdkAub5mjZsLYSnUoPM8BYEEZ81A44om17nWzYZPRP5ZHpT8vQicr",
  "key25": "5BMYxphp7m11b4cgBfYCpo6KipbdwKh8dDRoxqLa6pAKRYHTXqKfmuqaFzza9m7BCJ3yyxPS8qG5gie6UXLuvNz6",
  "key26": "3oWFrNLr1WLvbXgT6WsS8f3WykLumZ5arDaGWtfGuHaoqmbrEhM2sBWf2eg8wVWMv2Rqcr5i7XHVMzfYetesddP9",
  "key27": "LsSNP74V66RS2jM3DAWeco4Su2RkAuNV9XeUaPNJvtJTQd2vvvggxhzSnbbs67g11MJuCRvxn7obfmqvnFCfBhL",
  "key28": "2sYmE56sC6LYwuVWKBH1mqksQFQsSCnMYAb1a5JMNjqz43NHJhTvKApTbdN7jaPk3kTdKgxPKEFwQqVtUsJMRdSR",
  "key29": "2MfZBHnqtCutqShVKguom6X7t1MUMgzXBCTvNuANSwLVkPpnQBC2VR33sZv1vpKSJ1NdHFM4MKvsDWntpd8zKiJj",
  "key30": "4QtZ6XWVSSRFGdZi7TU2QyLxA3hKExbRLZuv3CZ58ufJEfhFtxQwG2w134TakvKp2cF9dZN5nov3XMJPZpkHW8pz",
  "key31": "4hk2eRTTPrvQrwe2j2uc8a9b6SJEdAKqLqNysTV8dHhk5ZiD9skEhFmfcajbYSNVoa2q8snzS85htZ39bE3hV5YY",
  "key32": "2eX2tzXZYZv4PqNs2S7JDHiD5EsKKRKP9vHiUbd7kDwG8hvzmeraood5oz8MAtWVBDqPPraorCiHsL5WwusnzLqi",
  "key33": "3hcPJCQsJfeaFEVHwPz1haSmy546ux7ZsztHQGzWkmH7M1rY3Rv2Jb4xhxDUsRRWgN53kXJByxSpJNPyMQFKpaeC",
  "key34": "5i6gZYNzf19g2u2miKBSZsSEZ2XPgjjyQ8L2Y5kkPnyMHz4tsQJjzbaxRzxuk185xegW1wrXFbajXsTvzjUm9LWD"
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
