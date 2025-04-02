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
    "ngETrHJfbw6jjtk5GUrVstmhQ5vPEf4QNbmUtkVi9CWnSJPT1r8dg6XP7ZjPF8dW999af7Rk5eywTUpGZGYLdMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8oYJNM1iQxpvka8zFyNiW8VHzmXizvsbTVrPimT82aPRVSvGybj15vRsMy7zt53JyCd1jgYDANWHYqKV1MW95r",
  "key1": "2ibmPft8nv1R9JVWSsyFqhKbnPBRt1hk8L4bR4eotagEUqammEGu2rusMEeZ1Ru72hqkBFb5Yz5qZxTwCsjP1PvA",
  "key2": "4D7tuL7JRfPGpCoMqgW9Yk6HSZSgdJYxXQH1Y7XSSH4FDSVd1yBMjhWYLjN1NfPawevDynGy8coNGoN7gDjnUigU",
  "key3": "2nAhCvpFakmZFrrNvHSR2Hkrb1H6JV2AdU1EXmuwTa3o3b79JwnscuSbUgKnZYLUZTpNw8Pb9hAYSsg5cGn2TMvy",
  "key4": "3ac4XafMLqybkfsLZhGuRhpxviv8YindXRUbiHC6AFiePSwCHQJEzwtNunYuSavuPPpPTHc8cPJ2CvsPbiLw8DfD",
  "key5": "5tQRXXHw4fbPDKANMSeVJp8pGHcpJpK7Kg22jEoJERegdiJxRSuSkjnWyRTnA28E7ExJe9s4SbrxiihNNePTbd3K",
  "key6": "3KfZFaTgsZQ5ZcJaqsgG8keB7g8WKUSMRd6BiBChK7HxE2vQBKXCFMUyiwEvpHH5fwyZpf9aSfhLDEyeeNwAB9pW",
  "key7": "34Uhh5a5WJkAYrD2DxfWF79BCiarF3v6QHEtRG1PP7cDrmXwm8kf7aMMSmHVffD4fgu5LU4iMHAjN8HURKtLWyx7",
  "key8": "32kqNrsSAiCVfhEt7r5ainUrv7B1h9rgAqJGtZV3HPJhF5mvoALsCAwBHgbTWPDrPuzkzmnw92Hh4TRtb9ckcME9",
  "key9": "3NuMQVw3DGmfNM7xxR4VSYGotM4JAWCK7nAuFW6kyj7HCqTD3WjJe8Qo3MfKj4NgKgVfdmJTYybUdSMtvysFEdoX",
  "key10": "2WY2WSCwUNnsjEgrkpRe1VFkSxNcoGc2LEPE6f1s61eSvLgQftaoha2ENfTNkedCeTcjaHLTNFVBf1hAWyoNQCR1",
  "key11": "2QfBqdLvPUHYbHKqdhpF8JEfAZ35oKJYCS21RLp2HpYoP9qmpTzaYx8yEdZuk5VdNACzaWK9aPDWi2ncatzJpYzA",
  "key12": "2UTsLJtcedCz5yCxVErUSGytTyuhiZLnbDTR8zkM8574dQXdzMnYy4yLLWvx99wgFqnnoRgbkJFACTERNtSjr4TQ",
  "key13": "2hdviNxySadruLTn4K3mL4y6Vs3DZZrYVXnhXBZsuVhQ86Ed73sm6mqXD4YUFDVtEJGh5QLMiazcKM3NViWJb8pZ",
  "key14": "59srHye3cP2Z6umPZoWYAmRJu63n2oHUt5kq3NMNePbaqmC65W7GTR6SLdbVWCbjWVSPZwfu3HUxvPwSBjM57nzo",
  "key15": "3uaL2gau2KPiGrKUnQg1fY7e25Rc1LYrajhAUChpk18nb2xwfkt2WesKHhKRqyh1x5oQ5PyE7SfpTGwwFpRV1RjK",
  "key16": "4VRxRK73NtsAMh84BbqJXyA3hXJduZVVuMkvC2cTFZFgZzBPUY8pU3A8QbGmuCo99g5Q1V8rwmz3fjrkM3sapzGD",
  "key17": "5B5tWbRVkX2Up7G3M4aa6Ew6vhmAPrqYqsg28teeXcdrXiFEPwC1QT1u8oKqCotArNLfogtBpQQMCNhtzDimtD5p",
  "key18": "3ZtzTYUMX11KtnYaZmqJ4ChwcqrHSdGVrygExyVXD7QQCM28PPvzf8uBWBb1JWAQiW8hRmRiGsmyUTDLFkCBM3FH",
  "key19": "3tVrkwivy6ZepbwrrLKmGWrsSAzSuxhFX7RSKytX4Bf481WFq28wiRFNKP5WXHvrGZDPypba1d493uTuX996Pw4c",
  "key20": "3dfs7CnpkThEgkakvXLCs2EcCasHyeBGEtCcihXiybUWYh6dfWzZ1RphG4E1sGNK6LveP2fk7k6wASAyfL3Mj632",
  "key21": "3Hfrm1pxRsCHrqHLq4Ky3WcVQScaF6qYSYpk4rAd9ZWEMdo7KUJkp2VRWha8H9iAGczQS8kpnb8APc58K8N57Dz7",
  "key22": "5UtubmkWbyr69JvKNtL7BkZHbagU87mG2gZRxWJT4Gfkf9DiSL68pZV9Ytmz5RuFnMbnm6XeH1XyfvMY7Z2p8Ppb",
  "key23": "3JAVPxqdsMkgbh9Mcm3mQCsgcAsNKWEy7yj1WzbhzkCpUhtip67p4LrtWHqXQUXxqz1W5UCxkC6wPmcUPfFkjWNQ",
  "key24": "56SpSmsF5Ngag541wRNKU5h5NWwxTtMk3vk8yPux9tcWmYH4ACCjnQXfrb8UWA3CMWod6RwJNmwHATdqdK1bRHvi",
  "key25": "3PY2mPADpTQSM8zwJE8HSwv6j2pSSi9xBM7eopsLEsKfHTHPXWL9tgFPXmZa5xJ4CZ9A2YAX3e1W2nV3DM2ioENr",
  "key26": "2AJrdxUW5Cw4A5CyYHxbzdhXpS6GuXmKA2d5Xk9pZFNmdxx1Rouh9xjP1F7uBZWTjKeu7T8F7jnhZop623iXe14V",
  "key27": "21eUtK6oZFSzcnirRmNTxE7BnLHM1wsdj57mTUz3rt1ybigzDis9sfEt7ACdMNS6DinxDurTwHJiSk1cn9nfPp5W",
  "key28": "4QxDgHob1eMHGdnRHaPzwPXQUnvrbfPPnGaMRJHMjKnvXnvDmJdQzt7q88UUsYX5ARaBkQ3fagveT1BcTRj9k9R",
  "key29": "4pXbv5M5ipu1NUSYHw9CWvMBBtDd5BNGtJMeZs4T2hkNC5FfWy9jU56CupRddMD7MeFNt5DV66Zedmu3M2BUY9kd",
  "key30": "4gfgLiXyGjLPUs17croFuCXUeC4xxcwjbj8p7Djw8GnzhYCHiwiCo36RnP3H7M6Kijbydk1jB1YMiY65XPJ23haS",
  "key31": "3NTNoLpznkcz1SQ5efreggoxA7xrc6mvjDdmvDX7QApTH7GBrHi8UMtTX7Hcxezt9XdyUpVo4JTDPug63xuKrUJh",
  "key32": "4hhmpSg7USTiBwMa1WHHk3VhUiCVu4YJzuwbwiW2g6RJGk1WkiSF8M8zGr2vmNXpk9B9KbthkRzF3Ur2u7C4YCVR"
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
