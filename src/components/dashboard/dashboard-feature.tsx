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
    "KGPxzC3Yqnq5KkWmCiNWZBvdeTdAgvkri5dC6KivhTJJirSGp2batGfkAXZxkQp8tPqwM1pkVkfswBdXyEjphzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P17NbSSr3Df1mxwVs6ySr4wQNS4Bt9eL7EVq3PPBg6xRqn94pR2ycEaRzb1HGy5HsesDwagvBMcDrNrDsy1DfL9",
  "key1": "3MojxKhFs7RfHCBaBYyz6VsNmRmAbGKLNaniUZT2fW5buaWRWLzBBRjdUv23SuXWauYAqvpnJmGtUBhejnkSWnQF",
  "key2": "5ksMmSsH5ZGQqjLJSJcLHEngsSMwnV22WTuXZhLAX2d3Uw2fKqMDBN1nGDaZcwsVsHzaF8jKPF7kG1RAGdixbCX7",
  "key3": "3TRih65BEkSML74eSAMGUiRjgYZ9icUFFNsFTwcq5PNoKYqP9X9tSirHPCsEs4nPUM52Ruodn1iHDuHNGqdej4ok",
  "key4": "3rBPzaDZpTZxVhqm8LLmN3KFEvrAvYWGkJroU2dPtJuD7V2Ujwa9dDGGmebaRnWp2hLe7CT3SNmQsuk13N8CADbC",
  "key5": "3LywGwJcmiMsEG88Q8migS5LPHCJugRiEJvCQQynTQD11KU2vc5RvXUqNa4R51SMhztxGAyr3hVkBYrJoYVuHiJk",
  "key6": "5ZkJvKk4cowtZgfsFWBK8pH2Avp6c9PHJcXnX8bXGBxdsgXEKSmFqQtZh8M8n5SwA3iM9HsZgFiW8viibnvgbtCL",
  "key7": "2nygL3HGX2w6bU8P3ehuVbGzwiTznnwbZ5VWWVQ8G2wfpW4bmumdzJD7ZMN61bUiXobut79ACMZso1XZSHsZnqgg",
  "key8": "4NjcoZcdqLofvGCHM5b2L6M7G2MuS4gJWsEaj44NLLu8fWuHNpaGu6SVJtWjPxemEZQRnkRY6rg1ztL7TyVaFfoU",
  "key9": "1zx8UeqVXvZZyJvfgkxyg7sQBFy7aKj8UJzfnwgo5dWgkZG7nbEA5PTYBTtYJWnkzjhExQu7RVxUMeBhEBSKPn4",
  "key10": "5eTJQkcakdDKg9REKWvgAibSwMEUtBuoHUhKhQgEwecwqyngfLwHyv9WHHnRsv95JPJgKv7e1tz4txKM9jt5UgLH",
  "key11": "aKWEcBcVthnkjzPWYmisDqFgZ2UvnzPURk1asat5uGf4gMFDCZ8HaD6TPagmBpxzgt5sK2zy9w8xBF5V8vRkv5Y",
  "key12": "5m8JoHFnek8XdSxV21U5DTK5RDSx8u8B9vpNdf9pivivARPji77vam6hPf7C6fkhaKxYFqBuZM846nEee1N6Paem",
  "key13": "4xDwrW38PDSmyUTBzPggxEG9zQsGz1HEQ2hXzioT2KTe64SmC13EEGYqn3SEF7ttQzzxywkzXUGghXyPhzonsRjs",
  "key14": "2iMeTRWNsUJfRrRBjfwssobeuMAstEFKPVhzGxMHMuK6cpPxSo3rVXne6grdUmSYkAVxHiUX2rTp7pBThzCvgRx6",
  "key15": "2yKPymcWEFYxFfpRBBDefL4Q56mARxfmB68muQ1XfVV3mLcJPPvas3M9j8d537rs9nxfRTWbqPSq9fTmLQhNPYEZ",
  "key16": "41qMHNFSk4dww7NBVqvuVLvByW27vSsLRySQS7FbmARWKL5zmk9AypEaZCmSACbZiVLvd8wfHY7FxLyFb6Y3Na9d",
  "key17": "33Mf4qiKpUtzdzJwEiXngn7WwvXQgKdFnsYnf1gJGEETRq4MrtcmgYK7QmsRVHSeWmNCRxG37MMU5hh75gtdEBUM",
  "key18": "25tTGRVDnBmeKKFCVdUH2fCgeHNz59PaH7oucHixdE5PocvoTRewpwE1Fc1aoWd1DAtPeacmsxxxRhKCXLgfjs34",
  "key19": "2i5PCKWB7xi8qqu6iTwYC9da9saEebrufoDr3opo9GLv7YMwAwA1VBFfUbdBJbWMcsPeGspbKneEFFp8aMKzty7V",
  "key20": "5d2xuwvgL2RyLjbu9UaWuG4ZAzRNNkPnvU2C1E1A9XvbEWkRhaSLuDbiiMu7McSPyja4MX2AN7Rnbi7zhuzcc16o",
  "key21": "24Nnn6eJGU2dtTSAJJKizubj5MPRigEsHzfykbb9a1uzz7ond1ym29zpkqhFw6LHot19PMoeSdZmJWRnG5vSVmNm",
  "key22": "2akVxV1F3GCqJ4prbBfmk28k7Vo1bXj7zSdzMoavjsgLTMeJkrSWcfeDt5t3gXf5ZKt7SVFHwZgqJrNvYanHCWTn",
  "key23": "Vz3VqoEeVDfk6RLY6dywogqCPqtjH8Jv4YgJhjswZ4PTx8TMgMcb97iz9nXywnHAMFXYaR5hyD8wCoG8Jj8Phnn",
  "key24": "4gtb2oXGNKQCtpYAQrhMVXLqeWxM4YEDoCqbUbsrrNSv2ajhvetG6RftDyoSjKQguYremmQabZ17vF38jN7djwqg",
  "key25": "5wjn7rMygziZFC3hsHqU3zB4gzkRFKQKgs3Jvg54Np75kS9StH3rA6FLmnZPLT3pProFbhcKYsomBgCgoh27AFQ",
  "key26": "2qo3g79DCeXFr94WSmP9b1j7SbYpnHh7VwatYPshrHjWEQKg4brUsDjAMPaRmzs2XqV4MNAPYiy75eUTRFjBbvG3",
  "key27": "4u5o8MLBpsoRCCEEbm38awRvHHxuL5S9ZvKrLgzuXMqrAjjj62FZ9yynzr2Y857GDwAV7DWkwUkmU8yM2rBsCX2k",
  "key28": "25xZ2vGmwA1fP6cwE3hhDeQDj9iZiPkAA1BHFwPkrwanAuafffUZ86nM1L8X3ziTk8VjjvPutM8GmSbL3tyZLvMh",
  "key29": "51dDLj6rcM4ZXpK3JoD7CzmB4i3Sdsxdma1RU8qkmnKk6xNAEmhREpHzicAE7iyeiMJk1EzxRejDCkiAWRvQ2WtY",
  "key30": "2tg62y4cqVPWnnQkPKn9sP9TxCequkqRa82yvNQsy9ii4c55eiMKsRXUyvhJuD6egBLkd9UQut65krhYwf8oAyTZ",
  "key31": "JQcaktQD7zEuiWkewdAGcHMU7yNaJqZPqG8LfY5pi4NhYZeTL3LPY7GR9DMGSb1zTXKiHVeihwpdDeeHn6LTFw5",
  "key32": "5kxviN3DC3xhqbWhhWkEP6pUcWRpi3tqYoHAAhMvT1hgVbyGzzBZWDcvFTGmvAGGD7cZGuDtL93W8HQEKLfaf42q",
  "key33": "4DVrij9UbZw6fZPAKojPXDsDrxHBCoD5m1dyYKEsvKEgoTbjdJSBrQdSj12XMuddtaSVnPh9jH3gaoF5gDJbdceT"
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
