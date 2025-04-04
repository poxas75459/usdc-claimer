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
    "5gzsfjKifwR1VURJtd2UAzmKUFBDyTYuMwGf6zyxEax2d1xbJdLQi7ougzPGBRvhGk9fALH36LNhB2K5GJ7Gffo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594y4TQsP5qyhh3d4ejNNz25Gs7owEgzxASDUtvAryKYXCPPjbE94T7uKWBGk1EX3GbH9CRJP8EFtXpEaygGzmLa",
  "key1": "3ZnMEY4CJUvEuLtgU74UGEB6egRZCNUycr7wDryAHMrir17SgCvkHT3tCkm1afwSiWg8yKAeBuvK7hzx4woTHnaW",
  "key2": "5xA2r2ZWCo3AoYGVM9h1trQwYGY7jE14jFL6z4QZeueUajbcD8thCQGYPY9vVJfD89ibjayBxBBp8dqwGHmQXeGw",
  "key3": "5db7EPJ7egayFaBtm6BLPpujmEvA8ygnB5yRuZMY2zzaFCyB8oZNwkRAPqDdeyiAvZT8F6PFwSZv3UC82aWy1H97",
  "key4": "5TnrA9YoNj4qSTsgr2FhLcnyhF6uuPHxJmTWL5eVY3PRTzSX1yLW5oLDddKPDyxJeC5HVCod8EcjAaSPsDNus79",
  "key5": "2NtqYxWjkXcrGGtGNbm8uBbLvGTQtZavFHv81joDvqNherTPLejcBuJAw1tb8Gz3Dd69rjETeF3PizByjy46gDNQ",
  "key6": "2zNDyzKaXyHYxcLbAap5YiMWzFcUS5N2pYnvcNzHpN999AAF5qm2kREEUR1b3T3SE6HPrbpjAaMrxiQAz67CfkNr",
  "key7": "4neJCynqHBkTc9JVnZJJY3BkRDitAv9CYMYswZdraJCnTYLaMyRYJ9HMAnxYTadBUkYNkuCzFggJ9SpyKQ328bzD",
  "key8": "eBQini6Jy5RA5kUPHybzuaZwBTgUY2ZcVJMNheJgDs8FkKBiwomK3ceUY5VQGZMccGcgRGzJT6uiSov8r31yjdN",
  "key9": "65h1oDG4tCkpdrW9CKNtHvduPmVM7VSDTRUFtewJAuw6EsyMjdE2QSUj1oWwnxUAEwDyPUK5be5W5yMCaUUHt7eE",
  "key10": "3CaQRctyAhxB1PqXWABSfoodwdB6Hsij4opZi5wdG8AResd97sF1DrfXLZEkRVF8RsDKbDrkZZzacUqRjvF6yPH3",
  "key11": "v2TQN17uo4cwTYk3o4AJAhH1FnTRHZY1MdPTmZYSCe8fqDBWrk8WHWiDvk47ecyazj8QcVbZuyAL47PvhPBxBXn",
  "key12": "5FhitB2zxPskW94vUvxtokdiJBBvSq5LaPskkCFTQ5hVNPoVCEo9LRhzNER9HAGACkMB72xonsW96kfXjiyXMaYF",
  "key13": "5Ufx2C5egsa5BjMSCmcmRz6dfdmgEeuAtBBPM9G8ihaWFBTiWnbhdwbciqR5m3tWYs4QBxuNTKCNBoimttfNUoEP",
  "key14": "MujwxfSEGunYd6NVBPz77qC4CdjunLTagE2YS1WSTSSpuLvQ6M4MBtW4PpNrNcYDfZFg4e8x21iXe87Q833stw1",
  "key15": "4e28JqXiVhTgVWtdPfwTFvDMZNLM2V3dH86FzGPNeY54XHd5amy3vPN8SghjCDRhbLpBHJZjbTUDMnp3GNeMcxS",
  "key16": "2eCPVfHW1ZbGUcH5c5y6mDBW3EA5D7sZ4jykW1afqRDBkBWZyyxcKCn4fuAUzvoyPW8xzpHi23BxxCfR5aqPi32E",
  "key17": "5m7vyR3njiUkwVBWyi4zZLnJxxdGa88WMSMmhjbYmF1N7CACeLW6g8HGq4uQmodA476wtjyGZZKfwraeQfyga4Uc",
  "key18": "2TNTYdSC4E6v8VRGwraYzxtzyHh7thWURCdd3QoybhiniTJoKiRLLXEeAvVk23TB2EwDLzo2wDaBsBAB5hqiT7CV",
  "key19": "62nnhnUaq5Xwc1X4V85FN3J2o4XUSyRvpW5DctKBDDndfG8W3LtHFGLyPVZwKM5TtwBrjQVm7HP8JWajfL6Am3J3",
  "key20": "2wzgUKeyg7bd49chK2TEZM1jWbM49pwTyKmRM4hDaUNmMM2HvTQC1JhZxfWqWLE32BpXNmsuzWpVKEuM6PZzmcrS",
  "key21": "4JBwgqeuB99RRsNeCs7fMCWtTJ6b4oz3jVM3R14QoLjeAxXni9YeAZfCcKp91Vnb8jnGD4CAJBa1EnfBx1WYvcTa",
  "key22": "3zZDUD9SuPgnLzYYukW6fzMBryk95j3LGTPCejQLQcPHf5jpne2q5w2557DPWKnPMAgAr6Eb67gDgdKYz89c7xyd",
  "key23": "4c1W5nTHdKzFfndEojzUQKFikaPnEhW7YSus7DDn3KmEebhMhUHYL2HBY7eQVqM15SxpUoA4sVvYANQwsRNVY7u2",
  "key24": "5xUa9v88esUrMCeXLLqQjeEdz87BKQ5J5Z7tY6xogc6k3ddcjSy5aWKqLbvNaAN5a9DPvmvrXq9WHp494quNSnUK",
  "key25": "3NmejJsoBX5N3v4nvvuTvB7969P4m47zFnWHJpo8JY1QRJohD2HvJtzytiktpv5SbdQKyktRCyA7DBVnjnt3bui",
  "key26": "5xvkAUd9jX6mhaiEQ4LubuNzZd5HeFQGocLQ44GL9g2HJ6sRGpr9jn3NAydWP1mtozEKwcqzPJ4xjktfm6KMVk8G",
  "key27": "Eteqeo1D4Z8koSCWveKe1bHu4pc97DAkqdNjdcdWZPCBhuqvxm4UC6b3mfbUPH1kFBjo7iGtsf6YY1H3kEgSVWg",
  "key28": "VhVKB7CaKddVsuB7pZUFW3cqGEgN5kYfkE7umpLRMNSooo3Y3XQ9NsanDYVMCevaP4hyEpenML1EYKTHjYmVKdg",
  "key29": "4SdTLu22Kd898JCXK8HjzAgA7Cvut9mDtXy21ddfRLSLctNwCWdE4cak3SwTuTXz1MnYVWLNbwS2XWgx1rLfuPra",
  "key30": "RfA6L4bzduWM8XxvqkSR6bGEwJ2qy4qbSXJYT1WeBgJxQiZthbpZQNwcNaMVjSwvVqsZ35fgmtoTpV91kYLUF8w",
  "key31": "5du6Tez1Rxzbp5eAtW1ofJmzfvhwYGz7MkyJ1stEKiGK79zsbjoWXbAv7AXBy5td6TAU7xT1vTX1MVhmMUuEBJYa",
  "key32": "2UEu5gfA7E7fuNUgbAzzfSuu8TvJ7UhjUY16GxXiakW6W1zYbWKokuxJiEpBBERBuoAbHfhikyniTKBiMRqPrQfn",
  "key33": "5bwcUXDWp6d8eFic6pKT1aNmraFtWkpeneFfgSrv4oon1GjMwQaCeSLnpg5YepMb1HFpMi36aWoX8Ck2g81aHk4y"
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
