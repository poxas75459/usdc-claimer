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
    "3aTJ4mJDUCW5yQNb9ojJbNhB4aLGnQrEfZVPvw6nCfr7iFsnuVj9oNCowVcgjooYJqLS9f2LN8gT1fHbDPT5DeRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rGtGVZm2NrXsmCUFJd59dMYQed2BZiSzZV9s4mMSskdy1L4zR1AMrbGkowCsD4PTBmH5jF94ZahU29XeAniNHg",
  "key1": "3Laz8ozbbMnQbeHJF6ZCZ9k7rkFBJHL2J8zsc2aLkkK28cLmrKa5YHWNcoDUg2vQ8ZrdcqB7uzzaFguHBwz6CabR",
  "key2": "2vgDZ6bj1dwZPA6YsPC5ZuViy6UbdRUZtTqXNeRQTbZ5LW2WTuN6kfHf1CDLKZSkBbNTxtCjWW9Qk2RZygHjWM6E",
  "key3": "536YXqy2vZFSBTaXNzpkB3FvmyMuY1YmA61PGiNYX1PgbzVKtdApCcP8MVXCwnhNLZFw1G1emko5NEEjEFa77L1b",
  "key4": "4V3RfUgucr2vMiA8Tzj4Yz6F6xrh5gtH6LDT5oKsHnTmF8GTK5F131fpK72J54iNTUJMKViBbKbpjo7r4X2HvWRt",
  "key5": "32BdXfphfhzgSknASGPdCCDkTd5xA1sH9AW4Eo7ikinSW7RWCV9F5Q1KkCvo4SpDAMJRHUZCrYw81f59UAR3EDBy",
  "key6": "Vfd8x5Z9re91inDvGYvVjwFTnrf3x37zYtB2kwjEPfdJtLenq5pCXnzDhiS2Lv2gjBsc4vunt1c5f1F34xUGRYy",
  "key7": "3Dm9e75xKgwRviNriyE2mxtwiyTc2hMpy1y7BY7eJ52TFhLrkd4GHYdkhE8rfoXxgHGHnWTrCKiZeT57D3Ne5JHj",
  "key8": "j1c8u5vetEAjMrjnw471jmaVRJLV14EK1cFjuB6xwNeQaLMnu1hhLRCVenFppNqcSKuZvdEGbVBnhRvRkU2ZWWN",
  "key9": "61Lw51KuohzYF4mxymFsvpHZnEt67NqUrA4FsthdWCm2YVzaAnaG7ND4dUWMvZs3QHnas4GwKbRUXvqum3obE4d6",
  "key10": "3mGy1VhLekBJj3U5mRVoUYav6WQEvRFjQQrH7Q2ycNwNhQLndzLYaZCy8bPvUyBGPsmMt5ej1zKFS12ou59AtRgG",
  "key11": "3Y5kbpy2sLyqmWvncW8YUXMWy5jWgSdevDnzoDDEPmQBdYcTdPpjeTnaf2NNvvSGUwvypUmpUyWEstAy6ZuJNJVo",
  "key12": "2MiWHHQP6X8AzGANk93hGwAgjZTb8gYWrTkVbctBvbCXY4ftJweaAGbrx74ziZ9admGugjJwgAZ7uUXzHW8a6T5r",
  "key13": "2xTroJXSL6ZuPeGbzdhTtgmJDawK3iBrcFpRM1KUuQHjP3bkQbU9KGo3brs8CxaUR32GpZm3Y51oA3tSZJUz2NMM",
  "key14": "31ZCeQtcrSwTnei4Uz4kY8jiDcRRxxULzRMyzyWvdTZZvAk9WxZpePvgRWegdXdVCoTeSPWdtura6TDMBfh7EUvQ",
  "key15": "63xUEANWStTKTGjdyGJkXm8YNEhrDGBtcQA4CKFufzH6XBZVzfoPcdZmuTDMq3R3cWmeVmm6xDGGHPXJRrjVLoZ8",
  "key16": "56R4odPBVKhFnyh6AZFxao7kDnzijGAu2tGkvRHsVoHBnzYn36QktGjpdmC8owsDSyXYQaJHGnX6ubR5nmEosHUe",
  "key17": "bSPcNSbaVzDePP4p5GznbN2YweCKLKmjvxcSRPs6cJmHNp8ZjdDxiPP3uz6ZnR9tFMpLhKdFsXRLsomHpo6UZhq",
  "key18": "4U6Rx5zFSmBqJPDtRJUTfoJMrbiKRdteFSEwyrziardvJqfJaVVe5fADkX37drrV5EzNdkGGc5n1VZY1KTgawCxe",
  "key19": "43vyEMNrRTg8M662LRmJiwavTHYLZttKt7ULJ61NnztCYC5mJv2UfJPqhtcuMnXyi7aywRUWJREe5QdLXxx1pyov",
  "key20": "7imU42AeK9yHwiTGWZxcyyM1iJZvGMxY9giCakJYqH7dCXRQtChm4qS8dV4xK89q1A9UarDcMxS7HW8t7Ah3h9y",
  "key21": "wb6eMQ4LqyRacYoUPh5LxGGN2tdRMpqApFmYvNzbVyAjV1MpQdy6hjexhpCMzGgcWst4mdmdXkjmy1Un2667fSJ",
  "key22": "3sCCP4pJCBL4a2virJT8SPZ1gsA1Z37SDwm1bPqBuoXytuwa2NZ86o6L2kEfJic13oP6oZBaGpw2vc7orFAPpPfY",
  "key23": "5ggZffNYMxVcRWikvaoX83azrvcjBFTnJ54kxzYjEJfEg1j16LC6jfERUxV5yZW8yNcT9WD9EXQpD7oJqZ4CsfF6",
  "key24": "3Ayx32BAMM3U9AV97h5Qbn3Je5fc2YovmT7fhs3xcUo1D7Ugwtz5YG4zm9SX1WGH4uxT8WvKaW6R8CKvSfcqZtoD",
  "key25": "5956bARoEKhTjjwBHaNcTbdzUoTUE5t42RyBrnZo873AE3kBoPCsERG944cjhFkp1f4ddQQkGBJM3yU4CZ8CoXjD",
  "key26": "66AGbqdqMfcNJZaAbwFcNioWKgwWzhGzAdjQR58xqw7gh2NmyZFMD62udUQbL5NSJjchZ8bzeabN1NzUmUtCseHn",
  "key27": "5uUfbMnXzQrgVqT6F1JkqC4oougj1jXX5y3HnYJf1KfJXMGjmdkgeijqvfewALUhiYJk9mwNRAF3ooL5rRs6J4sK",
  "key28": "5yQMD6Rj4LckoGKviFeBn9uTg3mvKCTzny7tveVe9evMERUG3qcsMz7MTGGwZdK1WWLV8Cqq3hXWuy8zit6DaLYQ",
  "key29": "5ijUC6eG3rAxKvwQ54TcZ5fHYnjzmCFmRAoMj2EundVhvHEvrrkmR9VP5FVExyoPpmyd1TE3HBYpc1qKL5DhHfX2"
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
