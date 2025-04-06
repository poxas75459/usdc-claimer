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
    "5hDhMdLMjccwauq3nUx6SMPJpjuoKTdq2cz2Wosa8vDnp73Fz6TPxy4yx59NQYNJXVCUzhB8o9MCoYeutYfjnMpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tvM6tytNKdcy7Q2VhrbJGiuTjdPvaBd72KPHYy6Xw3AdDXuRZAGwLFRUofVJZC9Cy2aCjvEn8RYmT2n5JKTP4M7",
  "key1": "4S1qRj6v8xQhweHckpgvMhjKqk8WLEhCfkZnxSGVvVPKBbjTC4VNTTB1zhUzt48WHcFRTwmBJSj425xty3v99uRF",
  "key2": "5snqBe8e1rRGTgsu4PtCoEmHNDCKMvkWiwP1HxpDepyaVbpm4FAbmj5fTWR4AxmfTiY4Ack9PtJ8X86B9syqpXRQ",
  "key3": "3LPsuyc2XCVbybHdTxiEK8wZBiqE4w6edYnEoubbgWjYmcam6Uut6nLLvTbm2FQzTZngEbVtQbrXvygysEyJEjag",
  "key4": "2sVDf8TxDuKVaSpRTK8bkapJ7Y9tJLovSX63Qhudd5tktqudiHz7fehVv5W1giH93Rw668pN1v8tdrMfpiZALyTs",
  "key5": "3ACB5CViA4gj4of3ywVNh1fwtoQwnqA9da7TPJAMgtDUGepZgX8VDErTwzMAVpkGNcvic5pAxdkMJHQB9Pega88L",
  "key6": "V4R7rqkGjkgSFvZSfB4Yt2MQfrYGTQJT38PjAqNmST2Z2D7DdwZgSQ3oRoQAZTkxy1EfzxWZEVRZTVGztx6qZ8T",
  "key7": "RbKrU9AedvopgCjSVTQANPYTHibdETyJhHFzLpCYTK8EytSnvY8UGc1eZMJn4XpLT6VTnoeoKZPwt2XPfSfX7dg",
  "key8": "3tEWJEVijMykFsJf5dLHq9W4oC8eZEVKosTfcr5pFqvuNpGYfhBM6qnrDLmmN4UWsw734J2HXN5x19DhzRgHwuiW",
  "key9": "5HLWv3ZyxrQwMUuyJuYkpkb7hj3QRMo2G9Cp6trdJVtTPZ94R5p43soP3jNUhdSQNjAeyTiwXXDFoKKcResDBygW",
  "key10": "3P42mrUkP8Pwti2diKsBoPG9Sa93TgyUDJpW4R5CDEczuaeeXnEEWLugiWHb15XAvGuyzerw6C16AaLNDmvhMnHZ",
  "key11": "4smU5sWmZPthv1T4hWhbExQrfXWcNNTQzZMi5QkCFGVZ9ob57LE3B8Rx78vuYpnWvnM2Gt6tfy2pFPAaXXGaFY1P",
  "key12": "31hzwVvJZFnhfJfoWecaDyKKzR3GMwa7ZwvxhpTmWm1DkHSXtVyg1iESnEiBeqXyG7P3QyoapyoitQZLWJEhNjiy",
  "key13": "2Nject4xqvCyFJC6nXviM3KG9Zge1aFJUCYAkVGmHb4CTBxqt71q5me4M5MchgA2cRB5NQpvPs4CY9uTcyHkrPj3",
  "key14": "ArKU3oyBTc1tmo2AzdSqXG2NRWYq2zRpX8V9vSth22BmXdhw3AKXNktLvenxUZxE6qXYW75TTyoPv8khSNWpoDF",
  "key15": "t4NQzfTeMxQjR6MKKwG3EPhTutLLcoP6HQoFDMwY8KZCsZtSsaajWJabhxoHEE5GCA6ecn8LxjE3GLkbpqVgVU9",
  "key16": "5idbFoxCNcTSBREvXiwE6BCzJ69P82dpKivcFqe5QNBmNum1f9tHh1CEz9vNtHsqXYxLJHFfjqVB7cyp9rw5Sgs3",
  "key17": "4sZoUEkUdYJ6uDv8M9tTqH1B9azqXCtTqyzjnRenYvU9ECcwC3VaCRfdkTmE6HUgCxkmuarPwYydsx1utn6ftt4T",
  "key18": "Eiui5Fa6CwLjqde8jRGqghian1EEK72LHfdGm9EUqjJpRNh9LQV6XvMY1YYPaGqnLKVH9BtPq48bGiLwaWjUYo5",
  "key19": "4s8gBq7MjYFzBuVCTrfsjRsroXNqpNSpNzMPHdMQaRCSefrj44x2vhBhuEE8qYhp3rLUpgWxjV5gEMJFVNKq4sL",
  "key20": "2LtrVGvZHN8XfgMy9eXS84qNEBPf8hq4EzbYgbQWqJViAu4rVkJccdiKdfoZwaEAYVn5X4sa67k2cHkFLP5b91N4",
  "key21": "sHZWz4QGc3fu4NgB34Ghsd4Wgg7zU8q1g4mBU3HZLV5pEwCWumpz1a39D2PhUX16T9wckuxB27ggTCaMjZqAtVh",
  "key22": "4npiVz8AczMGBD3RzRbd3KedDAAALiX2GDT6phEX12CKvtFBx1GoPkaZp3gKYKn2TFdNbB2vspEMW8kkjM4kd7x8",
  "key23": "tKbBcWH8h4Ux7LUptAD6SiFJYfSMAww4yYbzvHot1xgL4JSw5i2MPndSDnkioB5NYnNh2RtWHKM7iz7Jq6hEo4w",
  "key24": "3Hf8fnEP4EttS6bKvf9o8vzahLVF9a4gVKWh5V4XwG1gGM82cs5aK5w2sKicVyFxYu3RwQeDQJBUgKfvbcGsVw9t",
  "key25": "3iVW2Xpz3FgeW4BVFySndyLc2cfksXSkqPVC6Qvwy8g82V4xg257pHyQCWiN611inAqm72Ehxa2SkSCByXCfsxdh",
  "key26": "haDjDbqsK4mi9957VHAzB3ixR2AJ3kvLVhxu1KWeymERVQNP5agKXr6dqXy3HT6WJ5YLLzc1iuvQ6pDtvwi59Y2",
  "key27": "GWJganNUdrgv7ARftYSXpgiAm1tYjZZfoYAkRWiKiGNGdbU9dXRbPhGztgDsXccnZSCEKPMvHBwzbDFehPBN4At",
  "key28": "4NneZSqxyz83jJMC2J3KdGRqZY5ULnh16Xgjezfj71wZxrDcNJt7HTq7y174VggGkoiUBYzHkJEmMnaUZ2u6r4so",
  "key29": "yVR5WTL49hyssrCpFVzAr12tLSqEfKqTRpm6xzmEwm5BCJwxnn4CGJ3PrjsNBMfHBfJ8toYMYN8JHi3BinCqSa9",
  "key30": "UHFHypJs1AjVT1oEoKFgzhpF9r91xwz1Yj9vJQfM8WzdfsBpf8gH9vvA5Q9Vwy3yJ7FQ1VutfjhdvYMjfS95Tvp",
  "key31": "2yozXmMbPMxDJ2Mnvqzcdaqyp2J2CwJaBYCYKUydjBa5mo6HnUL6UZ1bB1yQunkxuJ9tMT6Y86T2Tdm71U7ovsHn",
  "key32": "2Q9aXoWQojRw6MrQvFaUaVrEB7U3V3bQt2ibnaVjCZhfvgMX719J6tnEd2ks9oRNjsSZbFbBj8gMr7qNCWJ9osqw"
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
