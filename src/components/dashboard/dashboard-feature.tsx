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
    "5Y1a1go5dk5N1r5mSGVu82ofL8CAgNS6XVqqGMdDaejfCLyzf7X4RCvWH1rCh3cFKquHHLk7KNddy81kQgJwq1nZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c3PVKxfSMZGM4F5CTNNXDQ2DJHUviMs4TaxzZnyTmbY5muGb3foTaQ7u89hHS4p7Hht4A6AnJKd7QZCAnFpj5yJ",
  "key1": "4BSvbFSeHwCBT5djSLgmXakdtZ4q7PKttwpFhJv6aybC24VKj4EezH9bKrHZgL8vg5gk6B3vHHqbiwBXFSBzpMzy",
  "key2": "5iYFcrLpDoFqvEbbcYH5r1uc2mA4R2bQ6kcZkKRJBq1f8GyMdPfJHe681xbHsrYZzS6a1KhxZf1RDwUTqKRYJ5EQ",
  "key3": "2fzhtpnMj98Y8auqpCsAZZXxrbBunmQ4YKEijQiHFFf8mWeAdx6A5S9a51ERoT79gAGUUUchEY95vg2CwjCn883B",
  "key4": "56WnTimQ8xBjRVgtZkvHPrSHtxmnTn5kW88BJeVgyDCxcK3FE5PeXDU8vM7eSTYM24MkWHa1cy5L3xqz95rEzQA1",
  "key5": "4YLynufvPY7Rcq8KuSQX4qDK385sACpq8MsM7oX1pBBoaL6jCb989HnoeLyPiXci9QhMSWNnBESC4CsyRQPTCzBi",
  "key6": "59bGA71ZQHpC6T6nTZrAotNzEZhz2uwVJKMNNZ62Ex2g34vQpQ79HsWfH7BGpficK2TAe9WaaTAHhzeiAb5b4QLc",
  "key7": "3BaDXMoiNKB9sEfxLeMYRFMN4ik2LbT9BeWhorMiZPVoHibqeAP3onqjEtPGEjzRGtWzaFR6vmkVjUtcoM9EPkoK",
  "key8": "59ty2bW58LKLaUaDJubXH5Yg8y6b7KM847aqJgjtQBHtCSVCckFRHmejjfZtkiXHhZtewWMgPPaPd8Q3taFo5PWU",
  "key9": "5y1nHFXNdSfXpjNtnaFLYmtES9bpdoQQiBSMEqo3gdLv5SN24JTuQv2o639ibLirqWQbTf6bcnKW9DwbLEphANif",
  "key10": "4HH5YAi2sRpHscUQ1C7dkYo4LqGFeiybxF3fzy5Cpg6pjtaR3hvjqBRekMZ1eMdezatyWrKG9MrZTtysVaEFEeug",
  "key11": "2WsEvNS78hxurPSJEh7tbfB7g7NBLVeTQ8G13piARZPUUSjZv6vK3WnpwPybrFwLjsjqCxecUjaKw4ktCLo7GL4i",
  "key12": "3GEJ4xXhzgUP1BYkzY6xNDdfj4tj5Uh5hSY55iHVYU1mRuTmBow51mVaiSAsVDwjNshDgg97Exsknf7xRhuAHwWK",
  "key13": "4xSygzJYDikZXngBvsVaQdZomccgGFXoNDym6KBaWYVn8Di9KUVy37mdfuBHoXvRoopAMHkeLr4R2dm3kfyjytdV",
  "key14": "45znmvB4UMuASSpLQEJxgXeogfKGECpJLBLAxHLPC52F7kJsJ7YyS8DzeujYhXttnZvW9CSRbxCZzToR8w1SoW28",
  "key15": "4XtziSuzxvYdXQV3dqzkxz3y4Cse4b5ZxxRxogyCtJsJL1u5wCgh2ByVWjZ3Mgro5ToZbd5QRRnrNkcujxEVj8jh",
  "key16": "ddAEoDCYUu6jQQQMDJstsf2YrtZK5EoAhFNompYm6g6bFm8NrvbVLsdGuPU1JpodShZFyPuP2voSsH9Yukqtcuz",
  "key17": "32unYdgaQohQEFcbWsHkkb3xM9vUdzVuRJSRvRxTVBpcMs55eAkeZVMAZnC5KaQi7ZZeYP5pHQBRDbSffLfEosQy",
  "key18": "5YQ2X94HqbQuKwBDKiuLx71fGbo5wsE8rQpjvLgru4yDHhYSrXCScSYEN8WprfrxEWssn9SqAdwgfb6rwxVLcikL",
  "key19": "5LE27pN42wZZA9tbXX3qT9Do7BoBPv8PhBgrkaio6soUSY6gEFT23dYStq7QXurVfoarcJVxF3WZgJkVAHJGK5dE",
  "key20": "56PW2J1Rh98qTehiJ4ZSrKbUdvcXn5DsK1w4u3jJKPDRKkSkD58eQVRkZyTouG3f2S3h2qj4VzBDDcXi4PNiHBTx",
  "key21": "2BLTseWgBExKBbDEUUUGBvgW649rytRXaMDNuaJixus5g2YMEBZycFRAm8f7WTt6dY6mw4KgRpPy8WcEC4PDQ417",
  "key22": "4Vymz5WLT5oJVn9Qq9Xpoh3vFNq3TxiNJyRpDkhsy5bdAv6e5FHypb3Cbzeie8YynohBDvTsZf3rvuHp4yXRood2",
  "key23": "si7oYwc85LzUXj7eF44eNfUU6GmsmCM3NBKHsCZUQjxLD97okjwavX5WkUGNTKoJ5Q4chBMwDseYJ89njpUxEkR",
  "key24": "66hy2JzXhdkTpFvRwbN1ythVNL3Ts6Axsh2gpetkbhWT8mqmCZynudvex5PFUNbWiELc7APrfMmdxJAARpSAbvCh",
  "key25": "2pumPDDfmmSEJnXeNoksyKPrLkPontVFF9CyCKZF6oFH9osxCRUPK4tRnJW3Vo18ZNjKpdWymgNFpRMBxagNdksv",
  "key26": "5rPiYGRHn2YyjbUWhSCh4RbuMsYGnWAtL7TGQgufHHDe3DxFdAWo2ia5hNqHGfGTZEyDovBzbfiPxKG9m1siYrbe",
  "key27": "5dH5kupb24MN6thpvixQggPbP8Ta6qUWeWjy3oeGFPSDrKSrTz75wYdgeGVnNtZDzi1DQA8FKtwsFqiXWYw3TJ8j",
  "key28": "4H5tRFUJHbNQAtYqNasxpsX7kyL5YBJLvjYVKyxEfJSwpXpGw2CVodnwiRUBPxS9nXpw2YnFqMwzNhAhLTS1hVQv",
  "key29": "3cj6FKdWF97G9YREbijAuvPEjpNB9wNMJN1YQfosnXvsY6gPEJETsNN9JQcDNNWjejpX4uXA391op2uMsjyBXfCA",
  "key30": "DECWtss1BrXK3RT4G3WL3S9CiDtYKWri4gHwpRAhHBXpEkgsiiGbwPuqjjdVktqXy2s8PzZtJVek7ydXq1Z8son",
  "key31": "2hTZ6dFB22kGvgeFgKbUanqmf1iQkeszsqSdpwPKyo4vpBCC1Fuz4aCKHEWNbzVsTTGwjRWxqqnQkuStwKkApqb7"
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
