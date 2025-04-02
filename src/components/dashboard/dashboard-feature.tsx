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
    "3B2ewHViz5AAsJuj5pfDFSzc8q7xwobe9AtwNS3nhiAEdqTUimG3JcgbWK1BPaQNtzd6ohffvBbKr5BPGXgt6kKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594MnYKLSpywFP7Zs8hZeuXoQcmeTuUQ8Gm9BxUf6bUCd2ux9KCACiB7ikqbmgsAnXZ4MEFkxnHjvXiruTZ6Zoh9",
  "key1": "Kf93ouTSj9WM7WWd4UCJYztRMk3piAcyrG7WaRTABQ8FFUGMoxVuipxBDGM8oaSQb3bgTVtgUdWYtYBzapssoy1",
  "key2": "2agvgKqPHnhrGpgvsT8RcQ8QEXLDekwr1m3vtUxSZyi9mTfduBC9ziWnscZwQiaXz3oeGoTgD333SgFHyZdz9NsK",
  "key3": "5sbLMhUjJn1dzHKXbWcHvceEtGCgThT2L6HWh9T9D3iELKSMhidcuMCQctJQmxgiQK7En8K9kuTFnE9Zy1xKLg6G",
  "key4": "4oTPUiKtS4KF4scbkL6MJGUmZQVD2dEtfMgk7DifRv8nF5KFoXdHbJ4BHu4y7DYj8fRdyK9aMvEb7zhTUpN8gkDZ",
  "key5": "7h8bUBaRfkGS8Sz3UHoD8XwEigNuGvdqqT9JDtgWVFg2NfmUg9tTnFU2YSza9mANN4jczzKAtGh1MBv6KXxZCFJ",
  "key6": "3DfvGEApwNB8SRpzhWZ3CtC8AR4XPS2znhZTuptum4exw4PEh6tFbTJhzXVU45XJqUdM52QUTWy9txLqEoX35xSE",
  "key7": "21fx2uLeozc8fat1dLbhtCCmdKgi49Gczh5VfPtA5Uvi3GGHxzkimF7a9tWSAzwMNRu4rZyNL4pMdMPtpDwwnaW2",
  "key8": "bue21L9zjue2GYVXjB55JySY2cp8MPxT4jVbq2LZL6VRJSW5wqabpauaN6hoCgKXStNsQUCdoTKoYg3FEjqphGd",
  "key9": "mPRmU1Be8H67gEyfhuB4rZFdX1NdjmuTdBBqVXWUhor4WFVSWgsgJtTQb9KsQcr16XBUBK5jSW3wgZGZeWkBGR5",
  "key10": "3YE4SYqBH34hHM5cDWiGsbgK2VMQatHt8RTSAK4Mdhq9PUAnpGDzPgFkjYenMgxbWKZ7KMhUzD4dU7TtCeoiDzXi",
  "key11": "4HPzPgNFGyAHnS52XdanNyrm12f275vAHE8r7ZeJuxHD6tHHfH3dRJDih3JwjKnNGQCzU4YPVWeDG4xBZFuMVy6K",
  "key12": "5avb6rBXw4QJt6wpuScp8iRwiXZELt9aqKCa49DxGwRfxVApURVLYfzEHikssuvmjpeYDNAm7ek21xtpg6G12YST",
  "key13": "4wvpP7c9G6QWZL9wQmdgcwXEkmMb4EGAZiQNccnfNZZ6A9TWbdeyYVuCGxxzKCeVyKu2aPYSFkKewJREQZvhTryq",
  "key14": "TQMbVAE31tzWrmNsQrDw66cS19cvC2NqkQdxLyh8Jpvozqqhv3ZhxiY1jjhdP2QNcBfWjJ5LCmohpHeAcBCDsby",
  "key15": "3C4WcNWMVQfYTZfqLeUyof9Y6r9JsRbXEtCLwdewwmcDdZ9ssz3jHGQJPNmyUnpr5gCxKJbfQRRHRbErLR5sQXoT",
  "key16": "3e2vHnm6sqxMywKK1VBrbNHPKd6WxVJhY35ADaLkRDBb1otkyFS9uHXNok4fy9ahffPmsr1oGwB57ogcXUZAM71F",
  "key17": "k8bAoYWDMNYLM5CFJDpByrCrZrnhypvYHLxwxTnArtVKJjSyRinQXA457nc3kbhZBN12dAujBKbGuE1R8E8suUh",
  "key18": "4kgT6tVzqbCNkzXyQVmcv8Nze5WrDx5f4NbsZNQ6KHjA7spAWpnewB1udAVttCQGKJnfwhtcL5HXXmk7Ldikdc87",
  "key19": "4CrUGtCdjyjTyccQLmukUjUkH6m6cs92vShm4GDFzV2EqsZXkosBgqvApABPLeZCuP28cR6RA9UHubS8bLBS6d7v",
  "key20": "5TtHjzud4ek6CRiGRTVHEDVU3FaiMHmuPGetE7Wj4EKfk2pbh8uVZkHR27uz55AYicGWSkcC5nHiVHP9JQg2c8Z9",
  "key21": "4KVdEknPg2ngepZJ1pNLwZEKFhgXNS8zsybrfXpyBivPZ9cqw2c2dhzsUWtATRbfhsb4RkaDmLqu86oGAFMNAxwR",
  "key22": "DcyAf4qfkjUJkgHoh1Ru5iXsGHofL3RNJwisixTHaEmTfuTjETdtq13v2ehzytNBk9JCXDVRmnZVrWopSZ8cQAX",
  "key23": "HJJiu34SDydwPyPR6kF8ehGYZiyFa9QMrubLqybQSWWqV6352bncJ32mKFGrzvhP3c9RHLXUpc1dtfjjvE6Ku2p",
  "key24": "4Wznxny5jR1McYeSUVy2Cis14rYeTBvxHAsqXAjKh9FMN6K7EZnL19k7yjV1ugJsJeYKufXNVL5xa9KaaScRZVrz",
  "key25": "2diTepTWP1hJqaNGLzXBLWiogNX4fzzZVr5GZg1Y3YbrD9USq43kWVPsPSgYsDMipFLAWhC2QLYSeGCQnYmKxRx5",
  "key26": "5cKfHV9Pq3WQWcAfGFmuVpAiXk48p3iU3M8gLUKeRS9wgdCUPqLLpbYDnT9mnDBtdTz2VSgoFrGHzjqZRaLk4tan",
  "key27": "2y1b6kGiiXF8B5wi7t3KwhnptcLA5FmRxWz7PEeCNnyCigE9PgntsxYdaSh2Pw81VWqJnSLH11JDx7kDD1moiRFD",
  "key28": "5pqG6amwkZkrrrcUdrwxZgAkNvPLbHgtKp4d9wdzTWgK4Ga5VGM8LiFPt4de88X3vbRPResk7TFzqoCpWSFXLaZq",
  "key29": "S5DuMGKBeym9iL2h1ygY4nG7HYARcn4JP6c5Jbvihp3xmkvt1jMtDo82V4B1SBcEUgFVci8y89QcGVdZix6aw7B",
  "key30": "2gymU4ugcuDP5iE9x5bLzbx8Yi51WcVhLEPC9eaEigJu1ExcPXVSMeJyQWyYh7UHRCN8bSo4qNksVXkvu3y28V58"
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
