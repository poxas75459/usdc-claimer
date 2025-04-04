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
    "2Y5aAMLT9GXZwp7fSp9XyEeEkqawfg2zN3dgtboKAr7HF5YgULUBdvLWbxrjLpWz9PeE7G7U7SXAtbh5FLubXeSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxMK92Zkk1yoxeJUHgU9M5mviPBxbv7gYJmaXZH8QJZGis27yzFku7wzoB6YKuqK7WAw5r4eTpRrQJv4appNXtu",
  "key1": "5Ubc5TecPUi1e7kLqwDfK9Ww2NjYf5oP4QSmzkK7e2qcQGapH9cmR6WQ224yTxbJXq8AEf5mX1wnENXmgevma57H",
  "key2": "3hFjXZwSLD4crKubpgLRL2RBgJwjVVfzmS5MU6thsKCy1pJx9v99iYcYFnqjD3jkv7nuuTgvqSau79gKZECkNWkt",
  "key3": "vu7aWmU6FVhnmJ2sxJaAFt1tLqaPpcHoBodULvWqMWCQaGu3a3KXh1xHibeN3iZwAEw2aJ7eDH9P8kuQoyDpU9B",
  "key4": "5eDAeKFCL6raBGAzmmuC47HSx7MMDiCh6qo3dvE5JaETpgH6jJtY7hKHysd1uqr8HiDHR7W1WXGLtK5dYMwFK5Bj",
  "key5": "3b6BGur75GLkfytBhVgTkaxhGLGgBRLN8T5E9bVn3qbiNyMNKP9p6PfcnMD8fz2DTMPC696nZZeyiCdJ58WgRnkc",
  "key6": "4Krb5BsZU7PaEV3nF1gPaV344siZEPJ2m1Ffsw37Aa62XAKH2sFfeDVyLMQSATyEoU7eGNrXCq6RVrtvNdyh2dr4",
  "key7": "4WkVbi1skNwBj3ik9CeDz4kvPBB8Uf82oQGDhCf8WToMPg7wAExvpGXX4A8QiqxnFSGHfz2kYPjQ2yg1jf4qjA1H",
  "key8": "x3zEWZWDN4RNM6NJwbBV9w6bhLDjff12iKcX8KsRLMdFzk7nNFSYR8tdtqZbpzpbE23CBGBv7heECzhvi1upMPY",
  "key9": "KksrAniMW8vqeEfC6jP5nKPdFGUWEuJLToA5ptKZAP6AKLvH2ZsfatdXYLa9Zq6bWuD1tDNiefEUATn7S2GH1n6",
  "key10": "3vgy29PwGqmkVWQAmTc9b26nQwEn4NgAVB1QEfpKB6HMGtdh2VKT6joZuACmwpauhp7wcWosPYtBvug2tyYqM4n",
  "key11": "5aWUYQCPBguuuPqyQR9dJzyj213Tqsh9qg2SVqvaFLnnS6jJqAGsp2Vdse9CXECvdZwaUThLRZuWN7rGu14RZWDu",
  "key12": "ymv4qZmgWQ17P3L23QzeYoHcyshwKZN33c7mvqJeyn8MBWvMLBHVpi37pGW49vaGUnhGbzg5sMgffh29KAnrcBe",
  "key13": "5NJvWTo6rtJr2XpgV3L2YSnwZsXj58NFbJgXjbajcDHgAqgyqEoXfegbwj9jFAyzUqrrMiR8WyhbG1se8kY844oR",
  "key14": "3tiQJEAqaL7U4gVG26fsw4NEFhSUnDL8PDVuobuES5ZpVzjxH9NkEc6hot2GQNYT834adiNT2YS31YBg9NVSr7mM",
  "key15": "2wMRsH3fPG31xLCkP9qGKrd7B58ubPLMimT4k2RZptCQomJrzz4w2sMEgXYTEhs3UiHPS61HrkdGpKhKtKGQGxRQ",
  "key16": "4K4QH8uZyq2j2UpjUhcdpvbMVWxwUZkkFHwTjUPuTwMW75udCUW1p4JVrVWB1Mc6hTQYmKRuTkjYx13c46NaWG8H",
  "key17": "5nfBynyLWva2xCzXbcLuCGjMZKQWhmhR71A3PTNeHxXS17W5p1CWewdDzMGWCgvzYe7fAPiePFDCewiiQkWdC9sE",
  "key18": "57eTzuRxp9WMuQUdGSfbSAsEZCRSgffdmGmVVNAh6jZQoasTxMr63EW8NhKsL5qnrQzsXg6inW3Jse6Jt94mervC",
  "key19": "23aSGNS9nSN2KBiL4mLE7YaH6xP54M78vPvj67c6ALBTPTaMtxb9bQvNYqVCu8UtXUiACFHbdM6oEoqK4qq7j6Bo",
  "key20": "3zkFpR2x4YxmJSJoRi8tFHHfgsRM6DneSr6Rtvxpb5Lsn6h58fUA9ioQnDVpkrht5NKgE2zLo965qHdwuyTgZtP9",
  "key21": "gYiuPTeGEeJTUnSbhRVkURJn5yWQy9pzuE2YfUQ4gJ25eD3KHhiuXovgv2ojjHtCDc2Kq4ZkFpDKyR1DfTQjSYq",
  "key22": "2biYCiDYy5QHg85JVMs6emtj4BhWcXtADz3CudzvukSQaJMbzr3oEsPfUS1XaZwv8V1hY9ejwyFdXu25DPjXFmch",
  "key23": "3Srakuk77bAAnVZvqXgWco14f5mCM2C1hUjL8ZE19Eqk3eAAmhcdDuzcMeTcF4JTrCrRK58CrKwyoGBWAqWGghnT",
  "key24": "4FLWQT16dPsXBVKm7hE7yVmUzvFMGUseyCvTXBCys4rez1owP9u83kryB241ioNueabR39JoNbikxs3rVPSvJJ8M",
  "key25": "3f9GB3bgwgK7Tkdn5LjqyP1doFp4kHfnRa5s5E3zRKP91Uu1LxaZKbSKxPxA7XaESqhgyqrfxbFoC3tHHbZmKukD",
  "key26": "L6wnhH2tBsN393KcMA2BnivuhEvudJ4azyGZpjbMZeDjESLcuVkuqSffYaAW7PsYonBimZrnLtYyBuByWpBza5u",
  "key27": "VoVpxqpLkLDJX4ThqDf3d4S8gBY9ASwDyBc5BQYkN9m92Gbu18QyfrHFdcEFKpytFPqFazmRKZSbcKaSNss18SC",
  "key28": "34YUKd9Jij5JcrCFvhDqouADpsn6ZWjEX59TpQaHPc3NdTUXTwXnsDLu8cRiMudTqxuRnvAoBkpoDyHftd7aPMHR",
  "key29": "5MfJAE5ugqjSbc2KCTgM3kzztwnLFFFY2LVUnD3Te442Nco5QugxG241ynR6MYonLLvuQPsZuRbBMopCupHLcJoo",
  "key30": "3zFWF7h9AoiFowzaM4yGn1W5PDwCgNSjWzdV6jD2vQpJazFd2UfSQhH1nM5X1F9rZixriyfkaqJf3kvS3K1iUVpr",
  "key31": "54fHbcF12dB4NirHPQiMNSLXJCL6a2MS3j9yxEDQTSNYiNuu4ymK2f73dr4iChz2XHCyeKx2sJwJkyspu1xjztyp",
  "key32": "NUcLvxk1PX6QagL8yv3exTbB6c36AyyMSwArWfibYA8RCWZ9nC8yjtWUmRthao229GBoJuVp6y9huqN4DRcwJAa",
  "key33": "414pxEEugAa9dYFTRJCNbjpeezBNphFSk2zWdcDKq3nrSo28szDwpETyeq51pFVECSr6kAToRnnFhM46LD7VRC5w",
  "key34": "56Vjfsz93va79fTfFVNwittrK1F9ra75c1YcnVPPrRQQc6Bcj3MBXWFMA3kR714ssVPWoRoWVZ1EepaGard2gkKi",
  "key35": "4vtmrzoiALKgcwpv4AjRRuic9YYpxiAmxKYuyTZ3g6HDfPpztj2QHKaAbLR6XBXvTzrfVfKxWAA3SuddeAqkfKmu",
  "key36": "EhygHAKFaexNnqz6ATeR3SuCBNKJ24ShQ9VRcpYEw9h3FVCgXndsrjLHHYchAmRFgjKH4o798rh762ci42Df34y",
  "key37": "5QLfzh2GVChg6dd2htvK1DDDKjoVN9akeAGthez9jCi6madBxN7eud6V6jPcxN25ZJ9vfiHKzPS391BfD7hG8kNZ",
  "key38": "54SAMdP1M3HUfoAdk91yKstbsc2xLG65iEjWdDwmxRyAiyFYXQbcdrHENW332nJnfisV6cg2TeqAwAqXN3QW5pQ1"
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
