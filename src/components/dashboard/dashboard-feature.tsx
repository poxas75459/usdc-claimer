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
    "3QVNTKqoPHpG3qEAfNzrKmpkPij2puVH5zGFMrHajXPVrPgp2wiXN78XPanyLWGhKBqVX5FGeLrPK9oUscimkUXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LXZxNcVvpBd8PQHw5ZaovvDuuuBfZgwJ1Gdcri989e2YJD4HnYeh47YH14jssST6t6EnbSQJ3Wvfcr1974Mtyb",
  "key1": "5jpZvtXLcYYGGNHqAFCsSN6fzJHECNrDXsnrQQLvTSkwR8bqD3m1GVGEWJAcDimzv3UCxu631FhXGVyLXeWsFWAU",
  "key2": "heywEdSxb4ffAGrE8GZdh6PKsmAy4mGVehP5TRyW5wqyDEw4mdSrngUYUbeSbvNXzoWwKvgZFfLsZSnZHKyxXTb",
  "key3": "4CApR7tjvZGc3ZaGcSNE8o4m9NMhFaSE45kkFz31m7Ppp2r48y298n9D9rto1QQFC85eUmbQQg4szqq2TqQQ8r6R",
  "key4": "5eSBH9WgJQraLHUggcVxM3UR1eM5DZAJV9JG1WYxDoFBsNRdSkfhoEyWq1SdkPyJJSysjKctVVES8xwMqrFb7SNF",
  "key5": "4GW5e8VVgnfdKQhM4MhLCQXioA6hRw9crkoj1U64z6yM9Nt64ioonKUqDn1NrvmszNKE7STxEVQsdqAmQZ3qnwuY",
  "key6": "2JMFFDTggbN83iDRZWtGSXQ1mK2LGYmqrSrtr5RRtVnAtwBLoEH9tgwsj3N7eMZqmgV1uG2vBtt3FqNiGfrhzBfT",
  "key7": "b3nMkvjEDP6HTtzQyDKMqVH7CME866hTcTciX4LumwMjhbsGSeLjX9ekFfcqTSsLWRHLYQXJVPTmutAdPuQj2t6",
  "key8": "3sYty2YWyiVURJeV2KAyFGJcP6sh3NpMyVDu7mVt5bYiHxFRseHHPA5XbhYU5QWv4F4E8o5w8uzkP5m8DDaoLjSp",
  "key9": "54KaUQPzZiWqwtDLCq4fGYYjhnNZWk7VeyrhVENCqmy5SWrdx1dLsTA2S6j4tjyGcTRSBKJt4pWQEVuzmVbyiQBt",
  "key10": "UFNikcqEuF7UKSjYiSbfxgAJEQJKbLYiEF1F58HmvBTHp5PSL7vZrwWTCWwwCkdSBHXm1b5kDVksyj7JuLfVJQX",
  "key11": "5suRRphRqaNiV1pEBmriwtXwqy5nNSwZqD2PhwQtvtnjzxrNw9SytbtVdE3wXzPqmR46WJ1JNH9huXFCKcStRGEY",
  "key12": "2Y5sdE2fg9FGUuiY1pZSAEPmRm4oDAGUd6NtVv7FiCGGG1tHwJF5xrHnn3VXBDHSj91yYpmKmoKmDubggmnF6uo4",
  "key13": "3Kmw7d84a96JWBbK7FWVgxThzrfqbZS7vLFxChVMGxjcUPiDsDcttz7gibamCmZVKfMRtfD733rEzgZ6kFy42vkP",
  "key14": "4EpL5syfSGYuYNHn382EFyLqv99uBUbsLpctziW4XzQN1SnirD85eGispUmzxyQJmVdbTL6rAtdUgy9f2Y6eW2hd",
  "key15": "3AedNsbUgbPnWQgfFwZckGX17DsagG35hKLJjqNvhd5xBsKKg4c5HpXAmsuaDWYheYHeNrDsuhVuKjy9iSLmQJVr",
  "key16": "4yy1asiKAAqHJKCXmreHA1SbzVLYxMcbnsmtNFxWvJmrQsFWu7Ae39Zoh4choHrcFFLkwMjuuAbt4KrgVQod3xno",
  "key17": "2n6Biwkk89wtWk3ZLDX2rqxWUDrJ9hZuvDQ7AGhkYq6FGxuZB2ccrMyVy6q7Fu6zUuPpXFxPLzyK1NcHwhvpEFLp",
  "key18": "4x7Ga1EAxXrTHzbU2MhNRwuY5gnS2eztLkupDVMkVcVpACw512naEpvWuKxBY379Gu9esLMYxKbMHbK44JFLuNWu",
  "key19": "8g8TjPdck5Z6pKnMsbU5fk94DwWPwwVMBXEhQYKghoDWVSvYwWzveGo18D3x2nFqP1UUYpnXDixCrN1Y2ophYXF",
  "key20": "2nWcyKqoDaazc2wBSy3scJZ7yRQhdxWZXGdkacKyWAC1wTkVwPnTaY2C9HVVpSefmEjyjhQTNS68ZdWxr7YnfQb3",
  "key21": "5gDDensFBpncSRV9pBhKKJzcJDn3RnZK8ZMZ6QRxvvFGsw7NFV2mTN2SabMedhaaN8w1faT4TyczVYysQKHkCHWH",
  "key22": "2yMmXr662DWhJ4fue3B2NuBB8cLLvhoFxtuVcvVVADWKahFXPeT9E2ahGpWDZZjEMKuvJ5vruMaWZVaMr8sNNZVV",
  "key23": "3ecwreH2cowyaG3hMR9QnFRAcN54iPJ2V4rLS6uzX8HQ35t5xe11kHfSXXhCHJS3A41VBExu9sbVwuh9Jd2yCacD",
  "key24": "SkgKqtE9Gutj5WJKdFdZun3bKmPQ5AiTQoNsDm9n9vDa74qhvxP8qnHPeF6sgun8EfxGkfNKJrQ57fCeYPfyAn8",
  "key25": "49NRQdWfSMuZSFMrke159mYELdofrEAAYs9zMinW3TuKvPQETQs7EP8gyDdwXRr8BwwFdqem5kqg21oev5249FhW",
  "key26": "5M7HaxZkWniF1BwQTYmDss7Hb8A1daKK5wQuBBirsnfmvAA4Xfa917GuRfEhWm55QPLkV4qm8xhtRK7Lujn4MTDt",
  "key27": "5ddWb9Nc7ULGkEuyoXCvpkGWp71qRWrivpgjdBqgKYSNKJPdQ4bzpFYD5VotQrBYcrJeXSMxwwSVDEhWi2DPsejc",
  "key28": "3RsW3BPmXEtkp9Tf8BrSUxUc5yRNBcWKjPAWzjZiKyWBSaPxpr2pw8hh4i9moY2tbqr9DuVmsyYVZovVjc3ziGWC",
  "key29": "2aP73oWyJhtZ4s7Uhn3Lr12pQoWAHLLiE3o6jZpUFNN9St59tcJHPEWomzmex8EBMKWWZnPJiUm5y1rDjERB8N3A",
  "key30": "5VCPz8hZxWUGsBx533yXdGC1XHhGY2MV1evMymugMs9rG2BynBeTVaJe51v2hLJ3x9RZypQZj6VhnYGiUFUzr2Cz",
  "key31": "3nZcja18CCiQZZRtvTHpg8r6MPGRzu9M3KnXSyEpKURdFQSnYDf3tEobCmxGzE4QBHtzW6Tw6eWmUZTCtgSBF3ME",
  "key32": "2zc5iUFioLzmBtpp4qJJv8dq9VzDfaJuFmgQWJh9MUVc1WoWHSe95uiwgHo1fhKKMsYB6KHsgMs4UAFY3dMgVsCg",
  "key33": "5kjKXhDE3atDJVnsKNHUEwkcSKtsnFvjz9ZnCjRvWxcnpjQ3zXRC2GNcQLPtq4nopcvpk7mt8tJcaxT9ZTMmXegD",
  "key34": "3zcQkKC1Npbn2UXdeuc8StTqo1tQ2ogRmq2bEtwm6xXhZL4SLRVkaj49pERbStAt4BDMowvV1ddLNGre3fJCXWNp",
  "key35": "2HSNkbJi5uMAGx1UGkfyNHLxnCihxFgKi4i3wQRMLUaWMYbzPf648gXRwZbZc389LB1x8JLnNn1Zjvvers2aqpxz",
  "key36": "DJMqiNuJj94J56cbvL4o9H9jRXQV2YhmzDrNjMiDtkYHy4gyLArnsWWBwrxKrz8AAkTrvFdZw33wqwGgM5YKXqU",
  "key37": "2o8ppyWkoeiNeRgehWu1MYxCcSqmJKejDcFfJwnpvdVZu8RT9zVtvHkCh6xE73YLz7y6ejAuxFEnn6K4UiBPuwUN",
  "key38": "5tyLcnayhbKVdH5hqfEbLLbeqKEUYf2DpT1ZGpxLLREgE27t8KVSgDJBznAVLFjqYX2oim4FCgfvUrPt8KcmE7T1",
  "key39": "5HJXgXXfdkgwh7BiqMBS2ecQibzHp59YJQNNsDpoLkJxMc5M5D7yfXYGM95CvmnfuRYkgYosLfPWnCY9T42owXY2",
  "key40": "2MsTaPgpZwRvEUB5sF2ht423ZuFRKhSoiHxfJMprCp9UwKAphwhtSKDUepHLnhofGHg3PdgoicKGsPya58di9UAX",
  "key41": "31WpPJhw848hw3V2nSLMdSqegoQWXSMMMNpRi57iWFN9fzJLQR6bwqV8VszZtThf8Z7z45TkNgurPVbJ2tZY4w7R",
  "key42": "4xJz56zp3tYLDTSufJySdWe5JGegnNmLHTfhmxaoi9yYQnmMKF5AnkLtkpDscpQ1RjamThy3goGWcXoJwFoxBoD4",
  "key43": "3DcBkEsWUUKRkz347Nh9fGEcR78dvUjfRsy5YMq8G8DeYLCCyzm5misbSSAQJJTXx76TL1sfn86eqrrqpFBGAcCe",
  "key44": "5ARm3SreL33z99tR8uB2byKM8XT12yPXiiDpiHigzDg3bVbLft4d57mWP4hcx8zkVnSJhAUatpVY28phuX9tmidi",
  "key45": "2SN7SDUs2vSKWKJ1CsYa26Wpd3JJKPyTsrzGRqvmpaiVAEWnbcGTVRjTSP42dSN1opm3ox25jFKraoCM4VaaRst3"
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
