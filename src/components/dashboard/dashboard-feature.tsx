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
    "36AXK8QUbpWYXQCUmZhU1BocdBPdu97q7QZRNbhUr2M82sAWoDr2NXNdYVFrgoBH816mQZds9uZdMkr3Q3Ax9xbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XiUFzjsGqXWDXZH32qor1DnF7rZRwgQG5Rok8qZSpodY5AJyCQytqFfcrs8aVh9jBCCXcbGW5mNVWiMU5XQDDxm",
  "key1": "2Dnddgio5sMzrjBEfgrm9RxYojBmp4ks38AiPg4V659unLW8qjen1qYJ9KQhJt1UUZgZSSawfo7v9vHbBM7yuvCo",
  "key2": "5JCLTdSEhLNpUG4nibbUUuVVVLfnR1rSUaH49tve6yKA6zvpNgL6DY55H2b9PQNzYZRPDBAYVgpTJfVR2ijxa8rz",
  "key3": "2ZRHatdvzMvWBML9jQuE5jRgJa9wo5po9vA1bzQR2RAbvPpkpMfuoRCewPaXpE9LWtSgA9StywhDT5CUkExZasDh",
  "key4": "2Z2AoNbLa2zPgtdAJUU7pfx9fuUSmAV6e2szyTY59AeZBoMYihMPFwzP947nxz1XFMHG6WsZUAM1eHVrBTj9yfgp",
  "key5": "2KzMq77o4WRKWp9oBUT997Vo6cV7QFQzodES1WZQsQCgDraMjGqFpgqEXpzj9gG9zcSSDVntSmn6NWvM2tJypTSF",
  "key6": "4bYEpgfgtgrNMLu7WnoQTpURdpYPX5GQMReKugtYWD5CAfuvpzMei4eGcMQHNPcXKcvRS8bhJy48bDayNvnKQUxU",
  "key7": "kP3fEcZV4JQuaMFyi1Mt5wAoUqQhborC8hNbzzZ9vZSNigfCU5spv4fHmve1EEeeGbuJYKY246EdTw46Fud71R8",
  "key8": "266rNg5vk3wW2eJv8BnY4byV1AsgGRmWKBarM8PnwNrnphU29iqH16njY4yF3U8LLt1dPS15Be1764JCWS7JC1bf",
  "key9": "2nKMMNVkcadtsrzyPrcMDyWvugqxkCuXd1YfSeL5SYCdWQ3up5Bk4vCgfQQmByVVFtHMk58ZWPoWeJbBYZmGrVMA",
  "key10": "4L1n26g3Tq4ae6fDRYse9THNgJajgcmEZhkfmmGUbkG5L4NKHVJXJgfodqgFynozSd8KU3uqqafnmkSJmbnsRoPh",
  "key11": "3XB2hsit7rUdMYdUwTqDbvNNLQTEEBc558YUbtsnqGzqWrPK2JxRQpKjWhXEkGXTRoK9PzdjrtNppVTuE9oDyhB1",
  "key12": "5R1vTvhqA7frZUV3CvaFFPbMYiaG3tcWt2Y2LZ1irPcFj8RtQsaiJGoEWbmb6fxwYorJ8y887VuXd8roWPuC9BpM",
  "key13": "2ceareub7B7XHbigZFSAhySNWLVciJfhTffz7rMdK7MsiF77k7VEsbQu534zvnKpFytzun9p8ZkmMBxYE5wackYz",
  "key14": "3kiSTxutx9A8LHVHJUw3cDseh1h8q9psbFvc1jmyPdmbEpSKdnjuWS41cps7oZZd5ZqyQDEeF22v2tCV8b42gz6P",
  "key15": "2ero5qnfaj6mdqTwHaXGGuSJjZYEotWXisZqvNchYUbk2TKhrQ3g288GSnJSydk4dE81CDdfzswgpXbuLn9wfyYF",
  "key16": "4gyRHCWUMq8xJj32rm7X6Ms2vWe8g4UTuutjMTKCKm2vakn8WacfAR8iakEYmUB1ipmWantszTkUAXKuyF4xC2KS",
  "key17": "419SzvGE2bpiGaPi5b1caxBGC35CLjPWofyJj72PfbUHSyVYqFhywWcBqJBC6msBrwnmJg8tjDtLubaQV7GzxuQz",
  "key18": "3jaB8EmWYigjdmAPuU5nZoDu1BvoeQ9fzEWPnPbnLe5FVQDTYRANcwD5F89ubCEsZXTRJWA7w6JLpkwQCHptGkxG",
  "key19": "2BA9AMTanNwNwPc3xnkZqrwgTyy1oRaWAeXjSWSd2uKZjCKbpSzxSfUG5zxSZRrbVFbsT2k37251RBdWa3hsgpKp",
  "key20": "3ajTo8aVSQVwZArFXhPjhguSfPVQZ4fNA2QhgL3my1aYCpejBorvZc5tSCeYmZD6egZdtWQGNr8y7KtQ63UJueTq",
  "key21": "3aQxVLUbeG8pYXRgSfLhb1Df9zVmn6rJF5tQps5t8BVTvPL9hEwZKeYDLfWQFVLWqiCkZwbme4Mbw4SyoprEHwNn",
  "key22": "36D4RDK4LgFcGkmeARfqiBC1Kxb7LvTDTGkmgjSbwQw8io5F5k4689LQEL1kSWJp7cJPQedDgEW4o1uBqSoB3FCw",
  "key23": "pHezdGRX48AAddrBPggu4WezucU35DUSTriRxF5ZYsUnTXj6RmykvPtYECRX1bwtDqUQCy65KvMMREnKoL3dMwY",
  "key24": "48jG1dNiuQeArBeTxdXa8c2rusx1qjU9xCtyXEhXTNehyyMuanre8UMWJDDE43xJKBaveUPgJqPz4qDabzK1ijLa",
  "key25": "55gbBo5Rg7krPyv8i15Q2WX1tDac4J3buN44A8Nmx2nGUCd633y4jryPTiyUSaCEMPEtYCEn2TevH684Ke4hctbE",
  "key26": "22zE4RGxVfQmdRWg1iJUNbwZ2wiuWVQFGihGkKWLJxybPd2vb5oLMrFEfmbhKN77XWMxrdTZjyYWfXLU5nnwFGTN",
  "key27": "2zxVBZvZXkvJdFc3FtyN1HXj5G5so9KteQR4YhM5DoJj8BWcgy21pbqhn71vb7VyjLPQYiLBxazt6GbG2MXAkwus",
  "key28": "NidiyiLRN5uBypME6wEPo8JR9FPiq1FJGD8CkxrmqKqedqNzxoM2Zv6tTGzanRnevob3G6Qwd2fBxr5KtmRWpPR",
  "key29": "2fxqesvR4ersx9DFWiu9YcSaPpuh7xpZjKSQfMoGAX4r8uV9jdeguwezoodhgsXo8ngF42PNeQrcBzPNbFG8njtW"
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
