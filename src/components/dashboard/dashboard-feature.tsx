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
    "J64uKSn3ZUqBQpMonCvsZFLJPTkdPKxejbWgy4xvYbsGgcqdcG4Tbnv5xm1oJ1E4nzcbrap6q9hBrcw5ei83eSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ztjvjEPET5P1JWmFqzBidXTUCy9xGg1VFaCmunvYKvWzCKN2tqLRRnUEvkXnCL7NSi1uJneJafkPTbsLcLbtg1",
  "key1": "5uGeQKCCMVEuh82icFyAz4AU1FUnG1BxfLFxgsu1yCgEJx7AKobEJfPQRRfcZq383eSmkcExeAMHQikXviB2d1xv",
  "key2": "D7MT4PjXDDWrEmFxgLU1AaoM6ACgsHLTVvfEdJQ49aYPKbaJEfjj3M2btU9z8uhxDyetQ6sQQ251ycBqnBrib7T",
  "key3": "2ofR8aFGR5HdsTysB9rDGDMs8ahfAytS9ynEEyZjESck98NcWzU7LPe4WY5WDsfPNJ98D6oYtohMUpGDud9F1EM6",
  "key4": "4cLiav2fj1xbcG3cRXTSyv9C4N6VcKReXjCVkqJiy59wknjBmEu1h2LyaJXxoDbQ1i197vUc1CKp99bTQi3SQPG3",
  "key5": "RegbFGjBN9XHhiE6yngqcxcaS7QdQYUVm72TMEZ1co9byJs42tHUeTjeHc1EeeSj8S2iKt7ZDDMfkWMHD5F6XwN",
  "key6": "4432KseQmy9zRPQYbeoEPbd8AgbwMfHGhXze1qF3LRj72e4vR4yywL463R3d1zzkLi4r88g9VB48fevSNaLLgGKU",
  "key7": "3ee7zX7cL8Vz2VVM5ttkzDDCTMNKnqkR7nWDLVatemdHwy5AAtoLwuDp3rueGvtFNfLDt8vi1bb83MZJEcqp3A4s",
  "key8": "4RkbgCdk6m889Rb5wZZ1pD3R9JPhLuGh7UtqH2BRVUAWKtdess9n2MmHqxWNmbXAJJmpNC81KM71rCE9HgNZAKxj",
  "key9": "2nSbP43ixT6mJg5cHgeHH4c7PGiiwnvQ4Fan8LDU8snwzJZdnNSeHevwoWrSecwgzZXeX7MuiweTZqpdACW2mtUN",
  "key10": "5LVL5gwYiz8xgajRxrhRT7zBUb8jq1nmkcg3dwZP2MJqadkpv67AykoUZ2ePA2qHN2hZovaAAnS7eoYXnNwY2ovu",
  "key11": "2gHxLfe6xPNHKEUVr9rmmRwwXgcDnozrWqNMkwnH9mZ767AsC3eRRkFEed6atbTu1mGyJdLi8XrhGWWygADefWZy",
  "key12": "2MVyesnFb3S76EzUNGT5RKUBc1nJDnMpYggSyQoM845SgTnk6crG9xhez1e5yoMSLneqTBLUr9ckoYGAPXhLJ3qs",
  "key13": "49jSjfTJyGLPwrXzxkHqZxmQSxy2cvWPvnfyStQq8fQXuFJerdtFv4DB2fYc2b57o6AiUwWBcEgwymK5Kyk4aQdz",
  "key14": "4z5w5MptxziVMyZuebKq8SrPJpyi6CdkcgrLLrMeAD5E8uLQ5PTZsgyVtXRTmxxmnBRDH88TirZuwo2sgYkmnv1h",
  "key15": "2P7iGmr4Pr1wMzYab8fjhPfYFeHcRuBWp8KDE2qJQh7TW1MRbq6JVSW9KhRtVpSuzn8FaZiG9DWzNmPXQsmeCmjP",
  "key16": "5miJ8Rcm1T6Rz9nY1JxkFakE8GYbPYFAty8onbDBQq6koEK8YHC7B7x8MPESEdpZTijFZoDoX4YfT2tHQbKu1tBt",
  "key17": "2Nr46dSpSRRaiCkctBDHjiSQacCidxB2zFBmTE2swh37CMtFdzhF47j7nuLaP84Qwoogfk2JzRodpQMZib6frM2e",
  "key18": "5ADiSXkTobLs1uQPMMkpbWcNjrxUyJa3XRAwxoJs2DwsmNWWiKhnLPTfGi2Mxxo5tX2BiFxfZz8L3BAZeRu1MPCV",
  "key19": "3Fqad8Dv9kLvCQF4993B6z2FQbQupKCvSJZDWSoawxZ6K5HAMdDLpiXqQ5F4YF5mhHKkieZbRYg9SnzyauUA8Bsa",
  "key20": "13opKrPe5NNjFCPGm8cxCFMQXSbXuG3eLfvKzFeWdttetbXTkgAo45cJmNfjM35J8J1NLUyEEq3hPGM8Pp1UBni",
  "key21": "2UCrNusArX9Dv482RQTCNFmWERCxFyDzv5neyiFBcvubFQHZ82Sixyau2WKMKceN7RVMh2GLw56eyguC71ZmAEnb",
  "key22": "3t9WXi889JubxPbpo66eBPTxncJFdZTw74eRM89uSDShuaj8MayZdXe3gN2erFcbR2p4SeUFwnRx9ZWrzcua16kk",
  "key23": "xp37ZArhKpPAoozCYS6sHHgZhk4gvdragYw19eeDiP3hmXbMLdX37AU1o6LiD15RpJdgYVt6C9qvSo2GikVEP5S",
  "key24": "4vNrzT6Jxr1UpsTm8oKHCgvXhvohxU6NSoadQ1y6r2R91bcYsTAJBbrxpKvY5212LAVZZGMpdNBMGG3dVvjeonyF",
  "key25": "37BQ3HjZDTtQbeJGKYp7BeoumtRGcjkuy3Fy1Pb959xwffioUmerBio6XqqWS6RpLBMyiVTWqFG7vJRd6KBLM7JX",
  "key26": "2gbwRFvmcmAM2sSSt7XBRDyQtxV9gdTUWpLfK8P5EmJpocUuUW8xyMEwNpAMQBzyMcjm6Vq7miVCEvmYsm8q9RLQ",
  "key27": "2b1ue9VzuqjzHkJSg448WeYo4NqeNiN8SqbHA3CStyftPWfzyxAKr2aeFyBFpqsWjSw7kV3n1Fcd6D4n8ExrUtBy",
  "key28": "2eEGJo585KkSRbJBAqase1QQ8urxKc1ttAL3rGhzup62EEQXmJsKpggYvonUVGS4Cthb82CzjKqsjPoyMvKM47vB",
  "key29": "636rg1baoaJFfT85oHL9z6y5wsFvYe3WC3hC9dRRQqDma6cPLcT8pRc4XPcWoDiH1vLUFkBhkConCK7iT1QfCe1q",
  "key30": "2DQYaP922nnxfgEKgXXRgf2WFLHBb7nohnLm3Fqvj7TqjtwNA229Fx8HPC5go9Ymk2jhxekEWu39XHoP1u2nM2nN",
  "key31": "44BKYmBJjfmkmKofUepvk59RtnjtSfH49DHsBzvcHgQ3BoZpmarDyRaP7Wcu1jX68qrFHHYUCcaVZkhye3W9uSVC",
  "key32": "2eoRwJbJ16AJSKgkrtTW59JXbr5wmxAvi96UVHwGzDn6BjE7ptbKoHjtHfWYptrzPo6mSHpMjqwzDbnj4nd49mrX",
  "key33": "4TFrYk6zsJGE6QaNsv5PsRom1Vg6nSACyP3P3pJajdXtYnHioEtwKywjHRsjHW38T7xySKBZyC81fkAgAZBkVzSK"
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
