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
    "3u2jx5vLjsVSjtfa5DwVM8LV7k4axQHSkf9N3RWY3BSPCUTXuvzTfc7JDeJnRqae8HXWK1Sr3gD7YLJR1p7JvfKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TF9QiiRd2CiKpXvgxqVese9x3e87VurWGMV68JpCqihkFeBPM1rNeGCWZEgwUpiLByqcWvzaX7jSGqbGpE3i1TW",
  "key1": "5WoxXuTQ36vxd3thiDqYYuTqSrzd7qZJyCpbr3NT2MsUnZLhfhjwkDK588V4eRjsKuCQ6smBposnAWC5bMksWjZB",
  "key2": "Sy49JE34UeHmvXY4XRV9FhUvXugwBTMUqLihjBkvghvddK8y4dmB2VYmAzEq7fga2rDEHiP1MqNtWSUqwczjXGE",
  "key3": "489Y3qRv7EXHAxP2m8rQco1wzAJEK1XUSc1XhGNy7CFHHtXPr1pL78Zvq7jhsf1KtS8xQLi5VELWmd1UrWoeqcph",
  "key4": "59bt7ovyVBV6mNfxHvy3RqUk5rsnnT8VJoBfNyed7C5R5tDED525CN9ep21Z8zpmzVPTjciHRREZqRdAaVVTBKJy",
  "key5": "2ZuU4ubGo828jJ9D81LJAfWrNK42cd8WQiFLW7P8a2F2wVESvE4oGN5yve9Bo9CpBRvWrxhFr6STEV2CWAMAbhDW",
  "key6": "2fJcCMkJuYP5AV8uBg1DXmUGKN4uy7R2PDeqGFp2YjbjJ55MQudRB5W7HdDoawWXBmhwXt5ocfmjttZbJbJg3tXn",
  "key7": "2PswPDyX9gSHfAR9rEwCmzze6sEFWrM6PjYZoKccDPEoL2AeBHBYPpNhZ3G81BSY9ngP3ycxzWLxGGSRJThLa1Hm",
  "key8": "29aTMniaWC63qA5BEu9aPoUhipRhjqQ52J4wYfF7qg9rxbYpewroBQ1DmwVydty986qWtRsTgxbBno9dTTTCNNUa",
  "key9": "2NzkhCZgEeuMD827BrmkQMbttRWCcFVfLp7Yd6ABsfKVJ3aHuqWadYfeG5as3yE9dcSWDGKzrz93kWS74LhWugcf",
  "key10": "5N9EaDdwVFEy9bq9LpWtXoShj5SCbCEuQNEJsY2fabUZD9Bc7GcZFySsB3NomJyqhVeH1Lphio43urNyr5KQnZxv",
  "key11": "5X4EjsNV4gGBc5HU9vcdFseAvra1wfGp1UVqmbe18oWhniv4SSedRZ1DrncbRbFAjfqkJaM5XXxzZzf6tcUbFGBU",
  "key12": "1q1PYN8kCvmxQturxTP5GW5AjBrdLWrPDcxVKnX9rGa2fcnUksksPJFoSjEd5LaRjpCxL8PZqhTDb2TDstKWMWr",
  "key13": "htgJfXpyvNt9rsJnrmKuVS4nP4Z6gALSp4tZ3SBZ8ojakXygaJgbZX9K4f2iCNXy7iSganUMgeqetrEUdrUAL2B",
  "key14": "5HXWGAhxsjM55fkkV553FvofLUzWVEMaZh4iNW8QDvYiqCzmVDEALTn9XmcTZ9s3gaBhngPyg1eD2RTR4f3STiPR",
  "key15": "4R2aqkx86fTrhKtyPxorGME7iUcmfCjHYDDNZrxcw8Q4MBJ2gvyTHbfzfjCs3Sb8bBp7TNYUabj4s9L4DvMLRTBy",
  "key16": "2TfDdfTNAJq7Ut1mVbS39DapVbpdipMxxYaWuSL1jT7tyfZsA4bBENyCRCYeZkavNuBFmZVG4VrshaUWSrhLn2fw",
  "key17": "62Y1NYFPYFS8VGBYFC6U7ScgNdfvrYHqrvP7Ua94D8JSCCmVhVLfswJe1ohKNFgiXphaqGrPS1CqLc31CN24cMm2",
  "key18": "455qakywbysPjbo6zXiwLV3iKw53Z4NKnTZyyWeAJzYzD3rPdA5nsimWrKT59khLeWNCAb9wB7ywh5wMgbHMV4Qq",
  "key19": "W4WF1qUjvag8HLaQ12pjCf9N4Emky9KGXYREKJ39FwResN41ctkoFnoo1Mk2nsnsvzPzRaRBLBx4wQ9RzRKw3ee",
  "key20": "3g9PNsKwSxovsiS9pZntPNB1p8HKY7QgjXXe6nRfCGgo41spagKhLF1SeJb3vVfiGnBo9Nh156B3MYRLqdpHekwa",
  "key21": "3MLk46HcauGCCiRDUdDsdtNjUmhHGsCurLdajmJAuWCDW4cjFsviuAUokNfQYcD89j8m4UVgmsznjSiuyaRzZqHh",
  "key22": "24STDb7FriwSH6JY1z1P3B1pz5ESfESdF3aAejQ5PUA3Snd4P72WT7Q91k4zbx7xK5XxH3zqtbzk4uNS3dHPmALr",
  "key23": "FUzWP8TiZRf6gujAZiuXHNcVfJairrv2u92RLexjSks4JUDNC6mXcQBzTp67DsvntE51FnPsR4pbo7vDiao9ywa",
  "key24": "5bYGaQ7F7Bnf6B3UFZKrW8Ejj8vuLPsdUaz5MMw5PiLLSJGvHGibP9VXn1vZsyV1Hqv7UJBt9nbdeNTSKmGjcdiE",
  "key25": "5otJ6VgFumgHcBpKV7uvvFPxReJRT7veuv3FMrZ8j7pg1Up3ULRz3sJoUap9ao87v8fDHycRb6iXNFyMamWF3BLD",
  "key26": "3cnUQNL4wWitaBkHoVvGEiWJJP6wNRvmDSTvqv7MCvF1XEnwJHqirvAqpWBQCMZmaFoY5cJ77oifLEse6SB12pDK",
  "key27": "5zX1F2CQivHb7eUBsqw7TNuAHm2bReXem8D4Tg2HBLSRpbB7zS8EVRWXP83ZtaxRTEWqAFXoMh9r3qiXF7PYxjTU",
  "key28": "25MvvaDor8VHXoUwubQpFSsP5Lf5GkBq6SDhFovJxnBmys4s5De8jZJxQTAW5xiqKmmWx9X9fRxnxaaYS7RBHEvV",
  "key29": "4dqCKSaDNbPAYdVh9HdYt7pwxfPJHiPBeB8H31cgCP4qKeu5CB4HczH6v9EKB7dgXmynnT2tuc4DsiwAGbC5V5SE",
  "key30": "tZs2QF4pcYSGe9iqp7AMUQ3LBxwum2NWo1GpoqSFBVBjK5rcsPNoWeCqtVVkbftRbadPVqejf2DYshp6qkGX9Fm",
  "key31": "52Ykf4X4ZkGVQMGMZL33JQjURWvCdrTpPTiAjvqZdTfVNuySMbFbBTt9367LVN8XRAiJDyrNxo2twMxHDAx4zD7j"
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
