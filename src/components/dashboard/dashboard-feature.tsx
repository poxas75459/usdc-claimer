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
    "5imt1mX2EG5wazgCN71Uhag7CRKa6CAdV6wVBNox2WG8o63Qgs16K3p1YuSZRCa3Pz2uyVDDsV48QSTWnUq4LaDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d67TosCUGwziENGSLpLMYGjYTdaAgEaptMucjDxZD7CyGuS86SYbe2z9uiPCuF1Jy5uSnQhQgAq1p4JtZ3R5Vt2",
  "key1": "4CPVTZ4o4Bj1TUVKM8Rm7AYTDyW77hjL1s8w4FWrUoXayTe7mNk5B4fAcpBUgijU5zdShPc5soajKkJEShzmMKUd",
  "key2": "4SvJUMsfsAnvrdrq3Dh7yFJmRNrao5sE1teRTyMBfew4p5QUxArAXbSdCJ87crQQTXvcgZK11sKBSJCTf1Z4kPkp",
  "key3": "Asriuv6AC5Unw19jJZGoxXhDkZJkawbbmrpHThypHVdWc4Q7eggdN1gPfThB9aXdywocwwBip4KzZLvBPhchtY6",
  "key4": "9dR4FRJG8J8thadnW57e9P4wKXLf1Bm8oVcDuyzuXkPYQnEgyUmu3nqcc92tyXViRjRgrovSaWQaxaEz5B8cREZ",
  "key5": "3QAShDUhjSovZNz6hoRzEQC9faZCK1YGVGKn92dRAoucSi2y7mEW6ZQWd84uTcfcVGsVvLXzdft2rNqvbrUJSE9U",
  "key6": "3EweE6Zvo71Y9KHjTHm9BBEp9Zip2wW1J1dXZc8Fv5eFwJfmL319CehNmE2V7onfakb5eonTMyLZ9dktEoNkShzR",
  "key7": "Zyt3MUdCFawGnWfYDNdXhsz83FgD1MsTmRCEKK1ZPS9rCnA5iitASwcmZeRhjWTGEdC6wTVXgAy8fVH2BtkWvbP",
  "key8": "2gviZ4bhQVKFEgAnFXjeu3DAooL6kXvza6KAf5dQugDkd85yfEZ5eEJGt1zYeoeXcBSZscaM7EAr8wUxULpFPLPY",
  "key9": "57niUoVvAsb8s7R2F4vYd6saMBkxZWNTSjPEjHjqVSDDh5vXoMnbkjZTXYfX4DospQfgNza8eQoRqGQrtv42ktj7",
  "key10": "4rcUEr6L8WX5ph8rJ2cmDBgtnJWZ1sRH2jzfpXgasBb9Bn2WVZCWZZZAiZRkRJsbShoctnZmrMnPQHkLBqUAeA8J",
  "key11": "2N3nkVeFvhD8fMAD82BankqPSwmjZgbcACuwuGjhTKUHYC1FAjbfq8wA5xSfuvy3GDDEqowMcskczVU6EC3c2M7g",
  "key12": "a6xrvnneDXaEkxZfbPrXrfnJ5irtxfZLRRXxZC6uXiYHBdRYbVHxsj87Qhds1Q2sCbSR1Tdu4B7Wfou45Ln1tPy",
  "key13": "3MdkitTW3Ma4vYvEMVtAe9PdL6fDcdYcoFL3QssVXLZBggGH8K31sZrL2hz9CEFfwyxv8X3BDqAmAVpogc3eR9U5",
  "key14": "4PWRcLLY3Lba3KyV9qPMrDvMbz3txhHXFYSZAokoZieVxofYGzSoRpBtfB2KXBScKXNNfidq5CpfqvXCh7h2bBtm",
  "key15": "5urf6wrW6si4gubtfEqGZFybXfwnHtrxvtRXzhHQ9y2w4dgwZMEo7yZ36pB2dJaGa2fFiJdd1zmFCswYGQ7YpnMC",
  "key16": "27oyNBigHaTW3cP8yVApS8Hjtt1x5A7qBuisYkxSzKik4GNohopqWmNo3PwEFosfXJsr5QoBd3t71cRhuQ1Vj3HQ",
  "key17": "3CUxrjD4rBKKMbpguXk43z5NqeNkJ5j1P2GTiKELRFCg2JEzM45V8YcVV5FWGjY66b7JtEoHRgqQZSQL9RHxE1i9",
  "key18": "4eUk9d3isQSHMyfVEvtNCfAy2coEZKzmUc6dmCtdm3se8hUj1wajLgjmEiFBJRRCUnCe4VsXQNtQszP45qHgNn8G",
  "key19": "LqJZfGzJtoR7ufAVhwd9gHB4v26eyn5qcy9yy3xCzmJhjrQUEbcsWkfTeGVSVbdtGKotjwqqse3ZqPSHVHSdp9F",
  "key20": "3yFi3dj3eqekK3LBNRtDKZXfqur45JHSnTDJ66xGoHmnRM4pgKy8PYnR6gQa5YR74KyKPFx3Bn2AQaqNAHREirQt",
  "key21": "dio2NqXYYyxrRU4K9meyVnQkkV4R8neuZDoiy7MrP1FJFfhLAJHhP4d6Afojg4iivcNJJFVtWn9azCA5ZP5fMd5",
  "key22": "3DGzYbky95ixQ4dw6yQHJPoQgr3DeKK3xCMH9ReSdAPE1ouU2bJ5fKZqjDzh5J4Pb6MM6usQiiEwcXsT7MXqGb37",
  "key23": "hNCjeqP5m1MCSUP5QjwongFhtKSq83pditehDSzHroRu28tjjPibsksodWCFWNCR8hNQ1kKVVLhoL2J472FuVuX",
  "key24": "4NPMwqqxLvganEc5EWCg6RNPbtgBe9jREvnMC79BMSNr6DfDGdg1PMY31onCW6Kx41Gb7mJ1ZkzwsXQi6M2Fbma7",
  "key25": "7hUdyWV6dbUwedMzop6L5gKhzSVeRVH4pue3unKPZ9qopZnaAxtGXGtiYnrk7X67nDKYiefLAAmAGNEMQiwpKav",
  "key26": "HugEUZSQyYvomidgLXqYkoFhPnNdYDqyy9bPfzQwZP88D4VvAbwXBXUxrtdsw3cP4a9kJyGs2LuuQiVkWVhawis",
  "key27": "2b8hEoiaNY11ew2RD9HZPe1nDcP5RZRZucjXaDmTdf78jusKKkeHwbsDdoRh2MPY6a5DZ6QibRFK2nc2jWLvEjBW",
  "key28": "3qcN3BoSJVY7PfesRm3ZLcNbMqkrwjvJ1R43RGacLfq3VKVsTnrzvoxUfXCFPYjcd6pSquAP4A1G6Z2qp1gjdjn",
  "key29": "vuTuaXVhYfwqnxWpPr6x7b1GypPTaTfExc3nNzRGwDK6GU5Q3aRmVuoLmQwE4QUFLPDpfG4zjQu6ct8fzyBNho8",
  "key30": "3h6piQoPMZznQkovLCwofmNKjuUVdaffgA15By3KPC9VRfkote49DQEHw5WZ8CTRH6F1E4FuSwK6JY828aRPwcrr",
  "key31": "4Zjh7krvJy4VChNhm5Y5tfm6zbfVEYCzgMfH9RuDCtYj4rtCsE7UYHrZ9Vj4hJHwhHLaNyJLGaAe4hgezndR91kg",
  "key32": "373Q6YhuiFhriqwuLGigm44tRuA8GEp4XnS351WUZxV3AdnXy2YvGibR9hA9nS3o8Q3ob1NkZCV914GRHxy6bo3E",
  "key33": "31sjxjav1NDX7vWKKxAahhyo7mfUMKkDFfi6pUSnwBXmaRY5X76Ty7NafvEWE68BNtCDUFJvyAQqYRHd68Eibhyn",
  "key34": "5Z86Zwim9hpg41JBd3WJWQ4joCHwF8hLTwgn1VBUzgbf5dnmvsDBmCNRa2x5t241f1x1ceLYTHcwctFUC91n3hNv",
  "key35": "3KFBeoVotBdZgET3935GeTmGo23Ccw3U4b5Lu2sS72ekqa2MCKERpimeFUBZLEXbWSbE2G8zBjUPgjQNR8wiQY2M",
  "key36": "4rNH5aZdeP4iBsJrqfKmxiPH7ZE9cPHFHrzzevEFhZ2eSuZqXtdQMDuR7fWaydwGNWm6VWmCbvNhU9VgRwJtky7T",
  "key37": "3ZzTLpePYnVagGJ5fqQpT6QzQD51wwpsGdAgTwrGhpjs7U7yxaQZqThMitxaF1hFBuZEMDB4MaZoJfYaki3hfCh8",
  "key38": "4o2oBfzYkHko2cgFKiU4qZqfxYrwWbhiFvV5qrrGCEwxVTB4iGCnAuPCb8tc3qWmdJ1W4EvNyja6qBcQKmDzhjec",
  "key39": "2UNJKmigMG2spw26uU6u6QEPnQ4mhMVwzv8YzSbVSGqnigawvESGbaV1EJpK71wji9kZm2MbDfbthkikQxNUoock",
  "key40": "5BLxDG6TR4ffTZRRteuVVvmigeMgrYUcCPAjD1eGWyCyeMBPtcNzhdLxyS8XHLX37hPPGRhRh7VcJzd3TwsVfqSD",
  "key41": "2qSM8Z5WQ4pfpxiiRLvY9mP7mRGpHNRdWZsQSd3mL32nsWKUkjwLgcV36jm5s1LoGKszbay7qhiJDWaQvWx7897A",
  "key42": "3iFe8E7QzBVudkvLU7BRhcJ1rTFWKnfizaDjmTKTbq6qqrtkRsnHHdbGt6uvHmsQw2LWk7uES9T3KGg5gjAsE2H5",
  "key43": "3CMwggumZC9i5UacrkStTaM5aDYB68QrbRU9X4KVYvR4J6A6PNNQDajf94rcE4knxF9W7yjhZvDRGHH8mBJLQ6EM",
  "key44": "u3KYod7oh23QDbCnZfAsRauxYQCU4zMh9A3UFWfRMxA2fumGmZv8TkJ69nr6o75qdFeUNVYxVhS8yEYuFZF2AFm",
  "key45": "55WHXqkogDDRXduSMbBTNjZnZjRirtTFWDL9qcZ6aF8BzYqPHVq9hj99xQUNkLy22dLJBSRtozTQE1nLw6T4S2Lh",
  "key46": "DUUq9Mzvwk6Q861RYYEzNo9vnHPaepmp8Fc2vJi9qDwjkZrogbyPMGTZqBqDNdWgjCBKitHRFMqu5ohJKBJdt6v",
  "key47": "4RtgwvWxZh8ptnmdVshEuXo2tE4sFdJ6AjsEikZkajELa6oMjFpxCuLkyubS3LSWQLrLiQaSUN7hJRa9DTahk9hU",
  "key48": "1UiNvwLiP16DLxwuKSgm96mfQvni1emeAjG3T9u9coCKGBL9JDMPPgAsqFmzJUZrSAztnyv9wUv7Dt1TATo9LZ1",
  "key49": "31exU7kzE4DgA32E6gLyexGpjwJbnfDd9tgrc4RDgUyHDp9cjNFUnt9FNKauRv3TsCTvRJZrKwqwyDWNZ4omit6y"
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
