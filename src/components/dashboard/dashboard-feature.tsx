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
    "28zzUjqBvuo51u4d2RJcwuZc2c1rmsk66LMMdW7872FTPLkocgsWULHp4NRfeDEAeA2moaPKjAogAKDFF4qxJ8A7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGxm1g4jHe69pEbhYGeMpVMkEDAPBfDqLCQ8pMZu9hWb7ZxvPd6quvyDP2dv7JzHwBYb4m6boFVVMeys6oKwwSM",
  "key1": "4uE9hdhBEfCoMrPBatBiRMAPmLzFPD1KiaQAZhcVWGqFax5qaFBRL7RST1BxJeEaNYyjzoDgUosPX4J7TTNimHen",
  "key2": "5WoN584P1gtoFj9FMZHMRGEKPbFHjfc6HsfjRiUS43Uhz31FypQpP7f6jJyCn9gFDrzmVPLEbhuekWubyhAS5wPx",
  "key3": "4QcArswYNbgg7DWYcbregSAdaP7GJ6t7xwvVEipJoEFLvURHhqNvYsnVucS58PqPzc4U4mEmLM9rVY4pWSUgKiaX",
  "key4": "4qoYuuVVYmwxRcBhKiHZmV4JTsX1LxPP9YW9VQMiZ5agtehY7ULp19tM4fagUa8pKqUAZkfqHrwXR1MTczWf6oUh",
  "key5": "2JfJaD5G7vuPzYjbazgfwzwfj3yJvVGgUoYkp3YT7BtgbKNc89t8R4satSXrRAkfMbRtM8MepQarkEKSnEn8yBdi",
  "key6": "4u98tNjDv1xnwRg3Uabr4iSk7kN2rmTN1aB61gdqmE1xh1LzUadhvRc6i2om1v2v1WM99btNJDj9w2iSjnSPzq7H",
  "key7": "2buzBUH1L5Ky72znvTqb3KQ342nEkKCYAyFWrBDdGLVfPDoRnaCJuwtgWCu1Suev1S24BqcYCiGtQmK2MaRHw4j",
  "key8": "4cYoPRcAJ8Yf682X3dYiW7xCajWbMo1adKG7P89j7LbGu68yKa84qo4ino9tBec2NnvUdsTGtwrahebzoeCKESVo",
  "key9": "4PkEyL1z8XvEYM25TSsPDSKvSF7NpL1hKaE1WfM2y4oQAogUF5Avnk6p9x6TuXCd8oMeSWvEyDHeXzv3rt2KBs3S",
  "key10": "2vMbUAB8kwsWA69tmiiofabHU54ycNySEYx5WPwAaW7obCTw8jTrMysPUWbQept3SPBQu8QRspiZG5nqnET1YdRb",
  "key11": "4JCnRMAVk6w2FWwEUQ6DH6AjbYRCGkCTjRBfuqy3D9NsQvqBh2YP8eD3Kmqoqup5zKLZ7b9RD2nKhEw9tUWxULqB",
  "key12": "4sZXhD29DKKvafB8sNBpwFznZX1mkit7YBaPtrMrqKSxZ4cuzVrmAvS1Mv6LHkPXPnBsganBvL8bK4MyZw8UHzt1",
  "key13": "QZsPnRuE7DN76ajVtEWnxztmVANRNhJ1kAJWJrfqJMChWovRMP8Hi8Rw2t2FtMd6NkxB7xS1of3Q7Lecg5aQLvZ",
  "key14": "32ntc99CsTzGM48tu6t7eFxPrNLPm7nrtQ6U9jTG8XGG76BdVwz6T5CZTj79T5C4eQc3Yakv3GxABHyrD94AxD9c",
  "key15": "2Yvwz4ViyWnJt9VMfSo1NaftQgSMiRP1FQVBQLb9TB6jLYjDndLwTeAPkkZXZvrwVjjjwzbJrbKhDMGPVvSoqt3S",
  "key16": "3QkopTBAwLzPfenTzJcSAiQd8RFC7hiuVbYnS12rBSfMw49bAqa6951H4D5GuYimFbSsRWwn5qUB6zWX7ECinKYb",
  "key17": "5xw9GD7z23PFCYcaXWzd7a93TeHscKXcPKE3oyCJRvLXr2vAb74aWPCovW5ekqi9z9Ngf8Ea1Ea8BkJ5cozpy1RF",
  "key18": "3WwsqJS3qHnERfJBkREJcV9ZNjBybi1f7WKVycweuj4ib3hqNBmZBUPKrRgSr2zjjtryS1zBDCuatrq8EfaJkTeB",
  "key19": "ur73UvDDWeezZ94NZUa31NHPGw9mGETcMaTah57xVkqJdAqTFFYruMevzadXN3kyD8eVX3KvMhCa7KztpiPvd2R",
  "key20": "4QRD8Ux8zVf4b9h5B6ZizjrNZQ1e9riMGYbhqst1GkQrHB7QwUiedYegxZQVoTAoCZd1fGYn5dB2jo8nWfdSUaeP",
  "key21": "3BgixEHcd3RQH1i737PNeMNH8GfoLG3EcCFg92acHAEf4ZRsLnKif9uvJKydjD95EBwRVELgGmg9ihgb7fVVUGKf",
  "key22": "51fzqZLgLw65Swiz4G2JA5X9ekkvqqyKazc39bvosjKYW61jUykZzg9J8UGhAtnryUiXST2YZksoA4sdPmtdWGoM",
  "key23": "4wMQamiydipBPsT43CEytUGRUZmwVVfDyEyWYdnX7gBHcPLvCadz7WRLbrYsPyYhWszr4dLxyPAc6qFCsKkwK1Mc",
  "key24": "2PryusiqLVDpi9iMD6HJAArtV8k15B1TgUZAoFv7D9HamonGPuMMzzvfoaPKE1GsUHweVBUYtBSTdjML6m5fTyqi",
  "key25": "3gBriuUDP1vpBVCyAqHWK8kderasYyKqQ7VhZq9fNU6g8YwzPT9tmyCAwW5qsEEs9jLgDkseXwi3G4SNoYUt5Ws2",
  "key26": "47jwyhohfAGgP4WReVF6yHJ2rtqt4WJkWkGZX93qMoN8aPF4SYhz96ZJTW6HadLC7GX9puKdDWG3hu7BWS833QA9",
  "key27": "z8gEzPkvHcb5HpJrw4G6nKDGsZM4pKqsb1vfdTFxUi4snPNJJ3BJhVnUd3bWScZb51CSf6L6f3rgjwf4Fx9b2ka",
  "key28": "349J8tjZJsVqM3g6GwckWo7VnMTG2v2nPYnP3hjW3a1oTzCmaKkzbFwARTcmcFJ2ixbjYssjqhLNjVgqKQ7rABJF",
  "key29": "3S2JwfJruqupVXKvtgRk9Um8KLqi9GdxwQhyZ7AcXStYwzWX5EwGqwFSdSMKPNH3L9hifxn4ktMYbQ8Lw86LVpxt",
  "key30": "3FAy3ff7AzNHwmNoYLMvCStjBgxLvj76mS9Ya7HNwqFQyEew8dipdxZaNhcW4iVz7oA9JedmmuexVmhWN65R74VJ",
  "key31": "c7FjVUPEtVRAbShhXogwi4makCxCczr9WkuagqXhEN4xwWghL8Ce5X9USXAzDD9HqfWCTYCiPzg8TSprrsyjQQz",
  "key32": "5EMjvfLeaQ3w3GsLDC23QA1GzzLSGkHFBumFy7wd6ubdj7ktAdiB2sYB969ER3nbqg2TAURLueMUNQfZahbuLQHD",
  "key33": "2kv5oRC45DXnXarT4PFN9URgKw5XoEn5qver1yPXsrazpYu6TjDCWARqEPk2BW251gFthk3Nv2kcMVfZVuyLCCbe",
  "key34": "5Ld1DpJXc3ssBSxcGNvYDuozF5nvcXwMmnkwbiTT84Jb9CmGaMvQPEGegfGxVbfN8ETBLUvSonUTnQTfX73VaRYy",
  "key35": "2w559wtK8J2veF2GdwjFwaKbWhceBy7jH773x6xYECYXGZRAzBjAjxiJFBmLLvjkofHaxxvYVM3VBumh7JBdDsz6",
  "key36": "2u4ryXGDP6BXiU51ZM9S2AsCjgUvq3D5a84pSTGy5tG6UYEvg6bcEyUKpjdrCEXHimFSwZQiuzkNEC9HzWbmuUF4",
  "key37": "34mbYAFGstCUymK44cMZgX9nAkUiNcE2gSQkYb5XiAA2fBTVEUHXHAtZfax1QaexPrSWDWz53Xfg1bcazVMTK1aY",
  "key38": "2kPwWVD94B7Br4WmkuwYwPdYJCmcVRSZHNScXXV5Uy8pi1hYgtsFCG7tV2kjr4vXPG5RnG1NuYYfGkNNm2vMAEqK"
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
