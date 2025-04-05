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
    "3CrN2RamG8bwL3WvkBGjq3KWryAzkfzT4W7DzkLQeeoNpky7gNhKiBbd5kpz5ggDef1bGmtpZBmHTdh9sqsApJCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsZqpjXsSVRcSXiqFgEfRUTLM6aca8MU2yChjd6TmmVesRzfotJxkfptfftsqNMYksq7JisLkne8XR7Lzh3fhiE",
  "key1": "bUZEuaTpT61wn4XvSj99CukMmLyM1XrHFbxo8tFjQGfr9md1Sb6dtmNEcPsZDaJdxGRNHzNtzmkj1WzrGHQMUmr",
  "key2": "5tDKRkK8NiwCCi7t2L3mHU4iaySHkkhWFBpPhDwDZZ5pZU3QkjMYRTxbBs9iU1ckiRYsiorhUyedYfvX5V6AJrMn",
  "key3": "x1kk95ysfJ8pmvTAsiJQJeZrgvvxatzCBddVnGDgHHKrnMYtMhTu5jaqhf9DAToNw9CJ4rWBGEquXPpLWC2Fh1g",
  "key4": "4GqQ2AQir6GRzUh7pVkCE3okRnbGX1oSYyDJFs9NLDukiyVMoVJ9bLAQSXXHz28zMCCSKBgaKwKJZm9YShof9q3b",
  "key5": "4AvkbWNZydf9wsBJRwZf9YZJYNTJgiS5ALMWPEAoJbkkBXGZNoDEmVSvs4QbFxBTRL1Eznq5rfJXdukzPW6jcUrd",
  "key6": "3FAdNeeFaFjQN7a3dHBuGMHEnwCmvfpayrnVvFxnpUN2TNJ9KMFiLL1BnBPeviS7rZNdfxLaqrBUkRGSnMgaTjAu",
  "key7": "5gZWK6LDn53d7kMvLhHot5Rvm2FVZwA9Pu8cWKbeiMSsPX8C52K6a2SHMh2b654b2a5W5tSQx8FFoUDPghr3aad2",
  "key8": "4FMgUpWy8x7LBTd4BuUNN3aXzjXP7P6dqo9mnov1RDYECYoiwrHeaQ6jnnEPg1Vs26rSkVPrEcmdyzkYtHA9QXZf",
  "key9": "5Bd8BwonH4YtQ6TKbV9pDmfmobFtT2xq3jst1F5xLTcCitnN2rNR8ade4euuz5EGGUE7gW1MA9utKZiTUvowM1c9",
  "key10": "4hWg4cffnd7dHVcEjAhDcnVvYsynTxmJihUVhLoByDiEuMkSCxV4RSxvQVJpmzbxSHrVqL7piLaVSKD3sZrEkACW",
  "key11": "3Rxk9HiigLBr2JGFGFHbUjxPiFsT1dwBygQLYo9kcbxTXCZDUTT6NFQQJLLx4QSrXoT4f53R7Z4ZJyLgQz8Eieuc",
  "key12": "3pvh9jdjikzdu8YDeN9VGLo245iz63sJKYJCwz2jvMW5PyE7cuVqJWm8dPD9wGUPvNXdyKt3CdNdUwJzhw1BHSaC",
  "key13": "3Rz8hehiKT9pxrecBpmRdQndkUubDui72gRMejTELncPAkBsXqExbdQ1guY1abH223nXpmy6qTyyRoc23xphxwJj",
  "key14": "2WBNJUX926WHpaaF5ovRvgxNyT53DrSVTdTdwEzf2PeTomz4LWc9eQzdrqXgNZ9rJAyAiTdZJY2pmjgb3sLBUM7g",
  "key15": "4y87eN2uzDfpb9pHShJz3y985HDuHVxS89dWsqhUL9AJyybYGASMSwevG7RYVL5LcH2UHvDJbdr7h2ztSxonUUsz",
  "key16": "3ACuJQuZ3x13uvYS9UgyeUEyzB8VhPSvwPfRj87kT2fFShcPaqx7sHF2ppMAYfeEPAPZrHM468c5AhmE4Vaw9cSB",
  "key17": "3NMsJ8mZjwGi9ZYqV4UbK74DDVxiMEaKDAxEQUcN58xsKkApWkCXMj3NfktkPawosJsbQnsNA3jFnBUVjdyPo8aa",
  "key18": "5bgY6qm3mVBWxNfGDb4TMQEsQzvYyKJRq5AjQsVV4TD2jFTEyJc976kCN7wPGtEPDunzdnZkfERW6d6CFjRBKmMt",
  "key19": "RybZVjMgktvshvnQ4ZbSwpNoq4zGVa7BAzk22JUVjJCTK5PtX1sDpd5yHXjT4n5c6zu9GDLwqob2fSUp5a4rasL",
  "key20": "AjEiyU85jnfkFXpZYweQq4mUTkScNywsqa5EWy6eqYgvruVsMqXjHmd2Gp6JsPqTPwy8Acpmhf5j8L3Qdugj1K3",
  "key21": "DKFmrkF93MHkhuWNuQaJBGreu54FsaG88d9CJHyePg46BvoyY2fRjtGzoLZwyp9ZA7DJSq46VJM6aiGsRidX8bB",
  "key22": "cJank7Wbt2TT4ocsX3E3GnbAkc17s7VtQiyP1DSj7fHMwm9Y6NpfUKKVduGDCo1ukxx5MvSUWX6ryEYiWb5prYU",
  "key23": "4wwm3tKXG7wpiKrJWREjLoKrcsb4LLhNCmCzxnTCT7SoeMkBsobW6UbyftVTAUt7DMM9ZJsv6G8v1jhSHygzxiCc",
  "key24": "Z31zGenjgDSK53oHpQpPUeHaUTEBiuQaShpah9DWWAFRqeW5veBFJn6yJmo75jbxGjtZTs4EoAdrmygVmgRJW1S",
  "key25": "4z2FtzG53JVhXoDJgvYE2tpPmPMiJh9T5iMLCy4zJDDc9JA47smL8XrnvUb3UpcsfuoZBudzDYQJDziXsz5Gv3KU",
  "key26": "4JRg1fFRfR68bZLvha9z44Qcke2Xt4V7kJE84rDvE1bxbKEwhcn4XBbbuZrXnStUTDKYkbFtRUEDYwHF2BQ6WyBH",
  "key27": "wHeSrXdgnzyDXMat7TYecEvLHRxFHr2M5ZuAngT2oFyuqDmyA4sdpJRTTwmtuYbdtjKcYVXzJ5vUtowHo2Kzgnf",
  "key28": "2pVKd1ooNNedDfFa3t7UjhzeKkaBtwQEyg5D2Cxta7CFLiDxN1T7JZigSv9ppSCCpu7ktCateYc4SJBrkCgYP6X",
  "key29": "JGzePTEp5kcNN5D2zVBked7bpZWd5jBzeSA1riEA8VyEQoWH5Tnan62Y5ortvNzedgpFc5BFuJw1HGKr7aTS1Hw",
  "key30": "ZEa748X5WCX5UMHnPovtEBheuN3Bu8bMCRp9CjrGtkeWv3HBEVtRLnZEqs4vbPVcuaXxxP88wMnsgiY1i5D6fMA",
  "key31": "4RpXk4c9RLaUX8aEgHuzJACaNP88RwVBwLDuAwMrGexiMBT11anA2wwzFjBrb1tsF8bAcG8esHQNAt86rGT5xYeQ",
  "key32": "3tr77UhP1rfgosWmfN8yRJ9kzoGoWPgxcqTXiZrHW7pZBt8THhEp67Jz3wPPgKku8FxpvKjCWSWRFXNLW87edfZz",
  "key33": "vnExkhrrcrrd6d29pmCy7U9yWEtDPQ9PGkc5i3ho5gmmGA8g6y2AwVWmgP4sgwz2axHnUazz3PonykYaADdqwa4"
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
