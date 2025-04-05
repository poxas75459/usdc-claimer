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
    "2jy1nKCz3evxkh5ixCkK6HwR1Hu3qukHoBUSUoD5sq1RgnCoRFnUnYU3LQ8EvDJTuxebS8L8ku6iqXg5aFSxrUVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WWp2FzU9FzAXfw61YttuXk4ZMQEeMXqusmZUY93JjyvShB2t7Kw5yNEQGAa1k45B6Y62eDE3K1Sv7QbTuZQPupG",
  "key1": "5s35pK2s66qt9TfeXBE7dpHNqV1EeS1HQNeGXLfe5oPNUNvBrPvC3rJ4DsViNiEKGsmE5okhbQFDS6FfxAki6GBw",
  "key2": "2QpKqCsob5zYPWUUxnsVwZYh8xnJz1Jd1y3ggvcSK2LQZspziEmaqHfoDQkzUGXLZ4YRfq9zYbgUL88h4pdnmSvo",
  "key3": "3ZrHQfB95Js2nu7ckVxRkciEeHzmvSh8KBPfjKbt7d2QrXZFjtpkzNMYwvdJkbhPbQKaQfSZTkE3FmU27QaxN1Yo",
  "key4": "2g9XYcAZDYpki8pWLtRBmBBMELYkiXrMVVYaDmZm3j7sq4PByBBcqNoL7UzK86NXCAc39JT73AVfLPHJiVHwaJF4",
  "key5": "49XpBxNoGbR4C9Xi3DQDBTb1z9HA5kGfSn6bj9Wp96UfpPazfwmNhAF4LSRm8a7uunkj5C3sdDxw1vRCxpTALxZa",
  "key6": "23Bb4d4tQhsuKvmDYsD8URVPaRivvNQK3opsPbNafWV1YcAm2tiCoj9yYsxkbzRfs83NCBFqg1DqC9NYwp7amLvJ",
  "key7": "q9L2qRcM7jYfs33XoPjR4oAQsdB5rhnZvHsgVh9Rv2Jyq18fLAuRkkTvw3hx4zw4WgSX15cL4XiJaSbKwfUiLrW",
  "key8": "3fbbW3dueotD9pxyJNQJ4X4QGpXniN4JQGcm9oGp1VmdCHiPZZikh4jgtFgA69pa3YQaXzbsbPG3AkGe98dfgZbv",
  "key9": "yuaft44Mnm4f4z3x45zubjdZdguwVNFzPy1H5UP2BxinEYTxJmvDif7sisjvWnEcHZQPw7jskKwc5jhTuqUhFGm",
  "key10": "4tkc9zohMYARRRJmPnE8GzTicUnufn15MtVt3pRiDU2RAWrAtP9G3PCDM3cmpxiBaeQS9QmmAUCd73M2ZZEeNUmX",
  "key11": "4tVkb8isF6A9uTGzebYKYkVxDbyGNuvmozKMEoqLmhbEhHZ7yM8SnqQkx6fsrnppgYc6w2g3EvbhTHMURBuM9mZy",
  "key12": "2fWE4aFU9Lodvf8peaw2t5hNTHtdxQcL2TZsi4r6vsWLcLxA1SrveN3NxD3QUpLy9xQu6qDWuSAjmMPFc1Eifn4P",
  "key13": "5wEMTe3QsyFKpt29cBWxZ4ftGh7WgRdGsk2w1cJ3nPpU2WTzzuphQ9aZfvracQzgMQY2fQEzGvvW88LjwgUVoRHP",
  "key14": "28SDvSRnPT7FYVrSo6saZy8zREseQw72aGMr93tFcHvdPqKNtRV3FQS7NiemjnNxftyM1VxpPNmfRcs1f7GgehWo",
  "key15": "31nNkeataP3vx3mheR2SCbNDLbk9Qa5hUP76nTp94YSxVQiUsiUbUfjsHvYyMHf7pd22AcFMrUxn29yYCdN3TZLi",
  "key16": "5DUW7jjUn3sV6khk3HP1Qmm7FxmQ3FMuqxLWzD1X2A5G3ZLERu7gtoRZutf3KGjErhaqFjGA9QwJxHvJzWWSfQ5n",
  "key17": "5E9z6CJarcHxXXbL4ka4MFTLmN3BbESTavET1VX69W6NRUB1T2kLAiwGDL7dboPnnJstPM8TfqbHiLsx8fTufxKM",
  "key18": "6LBZCQXhsL17TpvSiN1eeFULWDranzcik3xvbs47tgWDTYM84geZuLNenRRkt2d25a88DSC3ZhFRhkBEYNx6GPT",
  "key19": "497q4J32gY1mgnP3zUEwwRhM3AQKFMrFog3V2CKQ98aputZ3QLPpYPPAdsfMPdDo5rpJK5ycAFfQYRCLuFa6JdQJ",
  "key20": "5QbRvBaSkfFtV3DYTciFSpkXvtZikxfFNK6XXHaCc5STcScFbP7qa41qwtPjxMbZKefCuzxdPJ31bkpr4odARmKE",
  "key21": "4XXpTgkMdgmi4pLNBZq8ey9C35ptoduguzhtwifuPehVax3mmMvvDBps2nxC9n3cdujZhd2QxDfcsyLgCSPfzrwx",
  "key22": "2VZgrVjMAmfHw7xUJSgp9uica57Vvf6ynCFdkwRJNstZXVhRGtf8ZZbwaPpjRYn431vPNMUvuNX7PwsCuRos7eS",
  "key23": "2nyHCGJTkgwXLdGUqGw9eYjSxtAyct2Bbd4zTAey1R86pWNLCQTAzr3BjNExhbu7dPeEDitvxzmGiheDUvT5tGvS",
  "key24": "ahk52orp1kGP2UZugmei2hJqmYF1VQHVB8JXA2UY1KFJPqsTiMtyjVKWhEqKg3enuSxdKLdHGdshqHDFqt9m3zP",
  "key25": "2djZSJ1wuiCVGUun1PPARbFVhjZ7juVXvXGHgB1vv14fJxx6Sd5TtrHbbiQbMUtVxar5BTn2XbYJjtQrLGJQZSHW",
  "key26": "4SjXevTNmghokav1W4ST5WpkWhnoH2aU8eEH3JGGQpbPz3jprD3tJnJhmygJ8EeRMqBpK4qqJjfAtBYN6sQrdjwg",
  "key27": "39jho3P4kyEtKJAD7SRJyfmkKTv8gYYTfxRwF4NYGR3XjiFdaoVvaV67ePyU4NmAdcqfHwXbv3grTS64DuPEiw5u",
  "key28": "5F8kZVHh692aSm7cfTHatNbbJzribiiS3fomxR1C9v8Dc3RhCYFh9pCohpwvv535Yr6q3teQXiteVwdB7bjRNuv1",
  "key29": "KV9ifByFrwtEgZGRN8FkNTJwHtDBJzEkzAzAPyUNoQZPCD9B9ccqd7tENUgBFPSLV3TKjWjw8d4HLf6hBk3u1rH",
  "key30": "cv2HXBmx8xcn5CgcuHU5AbBirchM9BG4oVacMvtRv8a8b9kaunPnUmiBNJWggRee5TtkAD8QAEAGsK9xzj8SWbR"
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
