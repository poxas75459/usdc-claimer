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
    "2dfcuD96WGx6hYHnyT5wUnomLhViM7yHqiF4V8EUDQSZCcCJnTY6phm1GvT4ETUaAUYvG9tdEmU2iiWEAnbc9R4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GknmACWe6rpPjCCRxh5kQUSEdzonQMFBSyHoW4BaRTB7WgnQEp7bjLAsYqD5tETUsACaVzVkoutQFoQuurJGLNi",
  "key1": "52hR4PEiU9FhUE23FQnFJc9SRwA3dUXsdUoCLHXR9B54Kqu5FjQTLR5kQsUfJSQmpitpqcQZi5GcK8jwzEad3uJt",
  "key2": "31AmjKw3b7RDbdAFLbyXUs4SfF16KjSj5QkEcGuJArvazkdv87zYaVkbzfBVA8qHvZhPARkDpS3WcuueXSCNBtP4",
  "key3": "2VYrCeJ8fmEbmJmwsNBJorEymCYiryoCgdUttGCnEbCf4gmd32hJB1hbkM45o8kMrGvbj561W32zEvHV6AvzTBdM",
  "key4": "3BygCvAsGF9bxmtEUD1ipMv3hiiknr4YuF3ZKtTZC7EPFo4FevzTyomR5PTxdhARQxqWxbcPc3YfJGeoCn3EBfM",
  "key5": "5EivcgjXk5FeRAmLWbiKesQAvbjSWbik5ZhN8JDJpKwUcADhJAs5dgWWktmP6HDVEcXRwfy6tzABuesPH5UW2L55",
  "key6": "3tWb4kKfWjRVrcTXX9RGh5Vf9RR4ayjvNdLvMRq9VTBhQTy2T1F79t6PUUfcFpMtTQZjMbQDboACP75bdD4La8oY",
  "key7": "2h41D1d4gg1xhUktXQH5w55g6JPXhZUsM8heXNAeYL9viF7PfxqqfCjjKHF87TaizT37E3AtcijwVqtx3WMRH6sx",
  "key8": "2PVLM77NMuzQwQNN79yzZCYb8VeTryxMUsHjzWZunc7CEdDdM8pKkg1CAAXCMpL37eMm3GqMVy84Ff42vQbwrZpm",
  "key9": "3R6LybhC7SSL5MVxgUxJmPJYXFsBgAu4SZa4ihiaDP3PbSMw1QGxmpgHHqU1ejbbyXH34FXmVh3gALMwWTSvvv7g",
  "key10": "4cmLAEGqDLAhVMZusvTMLq3Jhwkk86GeC2FnNnmVa1bbt44B72G9d3poFK1ZYyqwQfeAL7eRhaGzaeV2AUHZsuTu",
  "key11": "4dnixLxVGad8tpoXMNuBoxmUYz6SSAv2FAJJ8LsvHbSFig2BrddFwCViwVRK97kvTBQ5rvrfZjXi6ZHjJD4vKRpS",
  "key12": "3pwCNFjYZig9TehizqF3aoUeysVbyauLavGJJHfDRkULEwtwcqe89Vpq9ySVwqzfcYaSNXnxt2LtaXUGd9mN2x4E",
  "key13": "44UQ4yvaxfUpy57QkTs2ayAztS9wCkyopj8We9bqqRevQ2DcXfCSvZbDrEZc2Hdydx4qvccgNYcywYMnbjG3Xr24",
  "key14": "2SyCdH51HLLYeqMWzxPNt9JmeWvgFGamLAcCUu6qg4RUGYctQppvE5gLpgKoj533tE7rGBiqWSKqoFd648QcrDUZ",
  "key15": "3UkiH5N3AA451mcn2MXQqQF9nfHnLfrNSepyWrwQeDspMWNSBvPtw8JSXPkeStUs1uAhPR1mKk5ci8gkCFVKDUUF",
  "key16": "2zVP8evDzS98mRPZ5ig1VH9EwcEpQ5jrPpVN1x9SWCypst3HRL8Au1jBtVAgJNkCHjvcFZ4WoZqLsWVCR7vkBDto",
  "key17": "5K9jssi6cAs8tjoKMD8oaNgRpaN9i3zEWYKCbNsdkjw7hWFxwpKvz5sN4AJ8NVGp6H8KiHbH47XC8Rq9BPtHx3b9",
  "key18": "28Af89FLzsWpHy1oeK5f66nY8aR95WgJFBSZAVZ9heoErKcgWZwjVRZ5ZA65T213zxGsN53CdfoyifPzzTixgxkM",
  "key19": "5Nsf9jQ9rfb5BL3EUchM2qmyUquTgFXFb2tSaAiynzyypLw3fnsMnJGFzc5oC8XiuYvCf8SLUpa2Ty5uWXceJR5d",
  "key20": "3RwzTTxWWatLtFPmPjC2N6H5ep43SK9hDw53QXW82jPAWKNeQ32aU3joYZxrUDxwXbWRXzd3p1g7o6QBUDkA2EsE",
  "key21": "5xRvpAtrUoqnCUVwf9KTGvZFTvEzjYEvkXomYaBtNAHv8H1dhLm1fu3csaRkM9KY4sqYvfBEDvx3bhsrUqs6ojPW",
  "key22": "36cqwtSHZFJSrTZXPZLW5LEjH264KTYrEVHhnvjmnA7cQSgrBZuijzMFtQ962hezJPq2KfxouZSccrAFz2D8ACT1",
  "key23": "oW2BGPf9U8iEqokdSXfcWidbg8Ns3PbUzoKxnhZF8zWNsYLX8kcuac3MCBcar2ykcthAayFf7gjxDLbcutYC1oj",
  "key24": "3SFMiZ6YKyccP9kiSYjg2t7FET3gbC2uDF3nkVfNN3UvXUqAKpfbyXKuERyCjPx6fvWVUZqvY46DMe8qXpmWGKAz",
  "key25": "5gJ4oHHSb2erd4aGQPxBB3pRdHy7u1qw37t4ymFBSosXWwYobhXUhDy73daLak9PpAm2Atyr7svuUoSmhdLndY5g",
  "key26": "2y2QM6Y3z12xMQerpHnGM1ZeUsyfHgiA8yCXjRksnVrYTwQGGwYJfRVc15fqhL9S9Z77weCZS5JeEqct8BoTNamG",
  "key27": "3jToMs1js7aKU2mYsLXFWeAyQEGL67ASWCjnToaMKLNbhrbRK16HtXTQLwXaKNndB4bXE3pwnjJAfCQqcnrW2y1t",
  "key28": "4FUVMEzXTAV48xTCM2gBg8Z9JqBp3c4BuxMVrnLHU8etdFEu3zMb7UrVvJa3XTgpEsYBxhZ1x2MRMTeV6C8VFaKP",
  "key29": "2TVvwJhSbSCupeuSDxrS5SgGN7DfozB8SF8NNtj4zADVid86nsRqVyb7i8dVmKSiN8GBLY8d5QjtDbWTiKCGh6uf",
  "key30": "3tCpKKnFhs77zRnnyAERrKhZnok52N4LuGRdUjdcERizgwNkArbn9YKzKJmute74R2pDMse37FSWbUj6TKNHTFSN",
  "key31": "5tzWXLxApNBu3bCeFtpZ5u41yEFgNfkkqXTE2Pk92eCeEkYQd5jm5vUyFG1txRWBBG5747eNCWZj4muXavTdUoYb",
  "key32": "S6hoCjnmWx7R2CTZ9YURdDoAncLGzEhmXomTSpof3rHLmRxh9hBDjpFE378tAxotYiksxECQaywyz1tHDBgobYA",
  "key33": "4aoz7AtaHVkLGac5FvwDT5wvdxQ1DMe2S4NEm53C1gX9h1Ltvgxdgw3ifFxrimfahND1oKSgUFNyBHtkfA3bGnTc"
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
