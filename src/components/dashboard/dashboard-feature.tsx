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
    "x1iknahaizavjaftHbHKzK4Qpip4tHWgFNmJCAtLD3HLCN3CNZkpmpPcrNX24noFufeXkKorD8cTTsVdW816k6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJAnopD3RT1B6VBDa9ZNr9ESuax7DoMudzw3Ynke9U3wBjXFQJpPuLB6MLni1bosQzVWnwc8CgmT4mLATajDit5",
  "key1": "3ZurhZ3DJRJkqjeuUwJYWToeRGkZvXGG3DEuQXt2bf6iTUGHQEneWKuSz7MqhAbDwUPdaNqaGdnEVxLgDxgkmqst",
  "key2": "GsDhRHAPT4uxgrhyebypnuEGJqpXMQeCxk4eWaz8c9wWH56padWTQB63iQ13PWfVsadoitw59sL8sj8GM9fU9pX",
  "key3": "3xu3oY3kqSNcaMFooGdHcGq8Q8SjCyLz7fiHHkao8zEKfuUF6SLtLeBpQ3dqoF4GSDBBWnhbBFe7r6Q27P8t1y7c",
  "key4": "5KBNiJYgjAotfi82E5SAzGMYyyfZtmsZEm4yqmC5S2iegsiY6LLCGrizS41TgqS5t8oXQbmZRsDMi5mEREBWbmAb",
  "key5": "122aLBXUfRwwsD2eJxeoLhmrLTBVnMyEcDrXjyWnLm2s2pELCiU7BtdjgMVbhYb1ZskkhHY82xeMPfDB4szT5SUt",
  "key6": "4HMfxr1pKqNxavMNabfBmX3XSeXQphjbZmMPDHXBXCXVLSej7ikpLSs8g8kRih6hAi6qe5t3uJfNipgqyD7vmxZA",
  "key7": "5J3nU4FvWSepEZRJy2gQ6ZhP2ake3U3GhsuLj2suqzJm5Dx5SmmF3ioqAu2qiS4H6YWduqBFQ23fVbJk1uKsiiGk",
  "key8": "5P2qRbgKPV4zhsS9cDAq83D3LePrvmZ8FTifWNmLVrh2BHSV6SDwWvdYW84N6kjxaVVzhmkSxxoRP3xL4pPauA5",
  "key9": "4JFzFD2jfma7ZdbPjwkS2DzaVxkaEixMvVjmKQmp4qQdgmMvnunGxRsYVnBBxmbu6LAuRxfVo3rrZwRa2hpzaEwZ",
  "key10": "2FptSqMVvsKMPxQNA7SEo91R1CX1jNM5mmG2mgunx9XnAbVpKJMBqzjSwoeeiR6J3ZQZw7BFGbsusn8vUSuq6B31",
  "key11": "3tuCnbW7Ne1B3t1zpd6smaUWkhDzw2UVqZ2syY8Bao5zd8buyZD7TuKnjFbneXpxvGzi1zK7gxmB3NXQoNy1AzBk",
  "key12": "4Y1rJU4A89nnBoAYxPhZ315ZHZb3rS8QPCtJpgytzKFbWbSwBMPZy2co4Enx4uzrUwMTjS4SJH3rZXpZgxFYitXW",
  "key13": "5t7hsoAogPVWcmix9ehehwoBE8vMTsStQspvGCvKb4x6SGYde7cTXB6W8vmSZCr5SZ2FV1qzD2cEeLsA59L25mFu",
  "key14": "4aNHFKRjA9GhYMQjE1QhUEMw14kyYqN4uX2vHpcYhBYLvenCDBiShTgAC8rfRLey9Whtr89QtBKup7ujyeP2Fb3L",
  "key15": "2S9LdRAL6xcJaeBBmgMZPAzGXUs7xJVVok1ZFwh1f8VFcCACSN48Uh7sKXkyJLpHXd99mEy9eijj6f6p1vZmFr4V",
  "key16": "3Z2Uk7regmRZmEuHQGHimXsqySZbD68DLjjvsCjLzP4LVA42wEjHXFr8VPndeMXytythpMzH1mjXZ95ZWxAVuA1X",
  "key17": "us5DXHqrqgWwqDpq66vDHcv1HbRuajetn7nnpuZ3o3Jx9Tq2ZkY3fQQxX38zjy2242g2jprQYT2vyLXSuCQXgqh",
  "key18": "2s4Cctunhxp6SGS3PhWGNMYwipUr4mh5mPqzWPvrnK1C3jLCjxzjsLkxikz6Zv7yPhBT6CHvuVnADDRCCwRYAiVW",
  "key19": "22nUGdj2oZtWCvHVFSvisU2J8BUPhV5MS5i9PmyKgwdxqgqFtGJaFaXtRsqEfpAW9ySVsYE9aFP4WV8qivVQ8YjX",
  "key20": "2pfp4hYu8fMRiXKeHvqxo3JC39T3ZsEC6EdzaVpU22CiRwXanhHpatPgBfop3nnnXFWN6bBSc4uTcyuyFM8GDhgf",
  "key21": "4gHnphoWXhEXLr1Qkp2ynmCS6kZgi7pc9gnXKHbGFqjimLPQKdXVuFfZvVRqciUUULj3ftNAspzFfKL8b3Ty73RJ",
  "key22": "2yWjzXpMAo3ggKddNbr4z17b2er8VgoPAsNQ9YDtB586CobHy9gs5pDkK4QwPbtH97ShBt8rC2GF4ArfyWxiviV7",
  "key23": "5qHpTkm2zTqcxcomvho9Bvhy8hDnCWLGGAoVxZrtHfd7D8BwSFPcFkiuSjcm542PqdeHqSXkFjLUctYvqymdSZpT",
  "key24": "5cpwjwSCimDAKiaRp5bXWLyftsAfBK2AujB7a6GfEWJ6NE1Zbd6S6EzypcXKvEeFxq2f2tE8SBn4ufNeXsKbGKFo",
  "key25": "3sC7YseaJJK4F1qXMj2pv3GHz1BJQeyyfc2pVmkfXdRzqHdRNuT21tWdQXUjg6fsF8amTmTrrvBQrfSKBCqN97wi",
  "key26": "rn6deSpvW8m58dPuQbEAqZptmQwadohpEvB5HL5RZM5r7FtTbCcjGyuA45jLn2cPZPXQAo5mvfaEsk2BSwzUmfu",
  "key27": "5kYrUQD127fTrFxNMk85WTZcq4skuYH1fjLtRvk5UTCV8es8HUov5TR1fbRUggxh5cFppEqXSU9qekS8cjQ9981F",
  "key28": "44k3hNXtZHX4ZbVJGiHYrXNC7L5zhtqnq5wQTk6UB1esF4di9cp31FKHk1wu9eLpMnW2rLu5ztK2AY5nmTBwEKeF",
  "key29": "49uorWgPKBtGfhdwZ1xajEauoHRdraiet1eZtMvmKphUXiE9TFvrX46brXAju7mJyTVz4S7d4JvNm2JEzNknKWxq",
  "key30": "4yYPVg1yhbs8AD3pXHxuoGf1HAsc1xJLR7pFQjtBX8ZUXVfn51mRvuM6hX7ibXim58FsG927pn6vxBVmNkRQuosu",
  "key31": "2LdQVoVhZ7fYqSYd1GWXThsM8MrG25zPoWhSJg1Zcvvxf9sNjPE4pp9nPJoJ6P6iN3xEfzmucbqAXofvV81tMqHm",
  "key32": "5qTfLvGZ9YwXK3N7ERWY8fq9nuoPVVm48V2u2LvuyBvXmXYVhEpFrS4GYQBqZgQ2jwZNHa7GywqgshZHfZA93uua",
  "key33": "3eLbrfn6kTB2MfWKP5h3p58N6N2Ucvpm5rLK9P4SmzJR3K5cxTbJ96RDPw44g6ZZoFNAPPvUyADnMhBKfqxFN2A5",
  "key34": "rGtVhD1miWfiKUeuLWRWngLyf3MtGTwfpU6m1raJzZgr5RxX5U6BiyKeCK8jjp6noCk6acxn54u6naKQwX7vR4Z",
  "key35": "2S3ghmbqrUmCGFp1CwYi1gzDwkmSU5KNdoUHwfpjrpBAioAcbdezwwv98Q3U7DtYrD5BU2upcrWN41CqxWZsxktv",
  "key36": "3j7Mj4BYWxMRQ5UeaGNugt2WAPYcsjVUVE7qRAv2ayXHu1o4pTUecRJH1HqRcW3PvVM87E6J7LPS8P7Z5SHpfm1t",
  "key37": "4wUxhf43YrdJGSubxDDaAeptcB4KSAWtXPCjnaU4AGLPbA6mEvq96zhutmV1niDy9utCfLSPup81wyDdcBhc6SpX",
  "key38": "2S45c4rr9yBSp1gQqM9tq8YpmWau4TrPeCzj8uw4oMYgxHXXhkPgzQMNfzoYEFd1yKnBWPBRBYTQcdoFuZVM8wmr",
  "key39": "4RtkiCke2uxjAwuRAaNVuhmsuaW98iySB85V1PvVPRhfvzp2KoLsDs2ugLDKJAK6KK3T9cHSrGDG3LkvqV9zTyXn"
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
