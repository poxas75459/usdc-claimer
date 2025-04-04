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
    "21xQMamFUVSP4YMMbbJRUrqxkGM83cy1s6vjYCaKnKoTeDKKvGDUcUhAp9YVxsChHnPr5n2AYn5Gw4CjH7Ff5vVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6gjQBAEmUjYxAT8QuHMh4adZcUCroprnbJM5DdUFcWXk8wHLY91d7TULBDJEgDtPvGbmxSAS6SkW1TYcFmj9D8",
  "key1": "65ojUwfBHZpdq7zkVySgScNkX8RqhBLqHaFo51sQ9NJsUe7ahzHCtdGP2JRTyYz72f6yNB4r32Sp1C5J4FW9FEEM",
  "key2": "4WPo9U7hvdtwyNh8pcpwyQdPM58eyCQ6rcqRxyupKggM71dksTLJPtyARGpN2brGmndMfarh1wn3fuJPQM817mVk",
  "key3": "46rrYFFE1Egdh1PW5HtjmyE8ErfHxaGijMNSZo4EsM6JxEaosbdy6JNpn8ksefQgZdfXf3wNeEJDWvdeePP7Zs8t",
  "key4": "55Rd3YmzUdeNtDXcXDyq8Hpv7YEBYu16r1MojAwa98s9qWswosP3fxwKkgBBf4v9xaLWnv9wNqjgCLFoEfjtphpS",
  "key5": "HjYZYLaKpEtLcHqUNuxG6PF9isHXi9nq5XiJQUbU1SVkSjSy1Jzuy1pwPCMGugeE8dys4FBu8WnXxTg4R23BzVb",
  "key6": "5s89VphkSDzkVyrUQW5dTk1Witfn5Z3itqUm1W9vU7KWry9T4Y7VEZ4UwNc27fYksoTgXe8N1tZiunRgr8cRfdMP",
  "key7": "26giwWELZ6btM9Mx6pmdhjRJYaSLq4BugGPiK16xBTaUT7E4RZxP1reCGcyN8w5rV4GcWoHT7YQNUroiSF6REZyA",
  "key8": "3ehuKXKym2T4V8dARhp21AzF3DvSq6EjvafV3bVRAmcPVRWdcxWnztf8Pt69zMy4f1vcT4sY9oCg2HBNCiP2DAfQ",
  "key9": "5B2WFwWDjauZeSpaZYawTWb2Yz5USVP2ErD1qq86np1EAUUcw6Pozjj44yKbmirnjBsvyjvPZGxo2SY7LrSszL7W",
  "key10": "42namCEAK6fgvjVBoBrCZA4xQcQLkrJwonSwS4288etETrLscmdXaXgMuaXNiPzj3T68MZHjVZupNXAPxSYYYYYV",
  "key11": "3BqKoAvYy9apKK8MPzYGYyKFbo9aTJ5W7Hkp2SANqJLENsawtEvr2zxn28yaVddykd1rfCKCwFaXJBG1bAc1ur9t",
  "key12": "4uFS5FGhXg58ZJk34U2jKN8N84KZxx4oVak3GCQHiAwE9UMTma5uHWY9JqwwbBqucVbCPqtnikcHdFWkM3SRmVQs",
  "key13": "5NeK3X5c368J91FHgp6Cf3M5x6T2cTJ38fi2j85BxhUSFYiVL5CDZVBBAH3j13MA45KWUWohooQcXZLFsNNZAfZ4",
  "key14": "3rZKvbbEaoBYpX5SDewKHoYUz7YWDyeiKjEpoV3reoujriL5wkVoAUi63okRkWQjUsWPcxxqDgiVyATCJgQ2gbi6",
  "key15": "5ATuce8JAcf9D4rqQ3Yz9fkjire6qMB7qQL9UtdY2iqe6YGxz9B68SzL8xoUJdgg7TPkp42oiQx5P7nvgRZ7dLBc",
  "key16": "2JWXkDfHouKeM7zAN4Pkr5asA9BgFeY4z1QJC9qqD7PK2cMTNrNod4R4cbYr9nUnu94qsJsFRYJdbm9BhDuuwyDq",
  "key17": "4wbvmgGfTaq2JBVFMjJFGQ6qGpvqvxJaWWqAEkBF7omAShzzx8MSuYo9LkhUeS8Qhb1Pz1vgNZ2sXk6ob5QZ2y7T",
  "key18": "4vNgYNuVZJ3pdwZXa4T1cdmSvrQrfzRK1e5SQeYa8GFxFoqkhmH7eEZkDgfZDEw6agFdLP1spy8A8vFMR1r3zVXi",
  "key19": "3XfU8EtvBpbbY7NNNSH8KBfCXj7ANrsq9F82TsPhX3PWKPGZ3Knx9rfPQY58FYHdXhwcTt4E2RiMj952qmD12DJW",
  "key20": "5XAxRSW7ZcPEnXrN3tC3bDHTgoWW8X3d73C2udsgHJ2oBWxRJjJipu7Lbz6SUCqi9Dah8LHGAgdJByipBSk8ApuT",
  "key21": "7hzCzuaLye4wVxmURPXFv7nbZfRFnFPY3fVFFgQ2rk1Y5oJyJeWjF24CBM55LvNjznwvKbABgHnryCkenHwX9eT",
  "key22": "2NdN3NddDPEGNtPKHmwJ2FWxCvTbG8d79veKemF91Ak8btDWCgEmQPsKjY5PCjmbzM4NGbdY8X7zd5RZpTucoZQb",
  "key23": "2kgj28gh2WzcRdTz2FYPgS5Re9neiWzGawufskhcUFnr5hZeT49xoxvgV6DUe87p8CfnLHCXCgr4ByfoBNyGLedi",
  "key24": "rUZFe7yKQ17Qws2Wsc6RfUzg3PSdJD9BMbdJrWBu2uhszhJyNL7r13pnRWULMWXy7ErrHyxY4CzuTyaV4dahcnz",
  "key25": "2GDL81WCrz759CpaoiGSQPSK95rjwv8vJrSjaqakS6rfPsm7UEKs9JbobuHSphv6hDsdm7HjpkHNzthvvfVwPiNw",
  "key26": "2ys8ggmueNPrsVoZDpWsEkHppsWztmsZHT2FbfkDUxPYDuyejFWgT1gV8u8UyNu7dE2q36vDosens7BgRNr4Mebr",
  "key27": "4BwqKewksJDATVTJJqQ298FK7uq4tGynPQmMpxcRZGjX2zYnqMdZKKPrL8kSYXdU3Ex2L7krJ8vf8V8SpF721EZ8",
  "key28": "MuohQSZyWuRcGJ2XaniwfPwUrBo4BTmffiMNrDnDVTgmBpNw9pcEL4aszbZ2zaooyYokuRhEvU9J6qy3qQLz9Jv",
  "key29": "FSGesHeTjska9mKdDVvP6cJ2K2xHfyR6z1u23Y1g7Hf1od85Yp559PrubfMQyV1jjPsuHHzHV7hi27Jt6bthirJ",
  "key30": "5rC4yo8rNSPiym1DAbP9qKVpnZA15hTyS3v9xNn2VexAJA4WYfDn9kJRJNCoMqnddDc4rBCucQjgjzJsC9h59Ds",
  "key31": "b4Z3azvVB4p55afX2oGTuYnskFTzohebpE5PDzU48xg5bmXFHCVTXQdBxSVdy1GAc34RZKmDjaRtKL3J48eQX4e",
  "key32": "3t7SRVUd5nDaqhjcmx4xxfueF5wZxdH5A5pq3GXH2HRCsv7u16WufDwaoEpXNZjeoMxucsHz8xt6GP5hsPTrn2HL",
  "key33": "u4H3uo2FNtvjQ2rGADwSBiq657U7v4gkibW72Cbeg3zvfVxZaed7XdDhy5ZB5yF6xYWXXn57KcVcMsC5b8CVzqA",
  "key34": "3UmVE7KXft2MTzC848n2UsCjyRV3MPfJeqVgVJBox7tjdkiRWvmhwbtVseyjmHL1WcJHzzDnTdq9Rf7UnaGwcfFF",
  "key35": "5owgUyypUVkJPeSi2Ur1V4UjkbzcPy1Ff8n8xxwQrzG3hYHzcvSBWyYkm9bUFQCVMqpANnpbT9ynhaSdeWxPxyLU",
  "key36": "34TyCQpC8vBQ3WurFKxJUiLdGyrc9PdRxHGTH4rvCv6MHKpsEb845uNpjy8xctGWt46PY55ZmTTvi65sQUPVWWML",
  "key37": "4XodoCarwkXHJzT1BV3Gk1Fqbt3UimUybyvCqVxRnmunp8PH1QXDqJKvWcoCVSbx9XrTghu8AgKbpXwmTWAyR2Fk",
  "key38": "48dmJhaUciFP2QJtjrrBiaQq82GNwzChyJatn3xUyNBrtj8ASB1WTGzA1zRCg988K5PGQd5rfPsTKKRViY7fsvK4",
  "key39": "3yuiXVgCLTu8dmKWRCNDWBTJmpuyKZqYs33wCoYydhqcScy1yiaF29jBuEhm8g78eyMzxrkSQMe2K521cvMRU1zQ",
  "key40": "5qRmmTHgn7HJqpKBnK5nXZg7GQhcHgpxYAf163P5FTgZBj9wDSKWyutni1YkMJJgYCCvXohHxCGfqG5b3cahshy3",
  "key41": "5vYvxLcsEvm1ozQ593DxZP1rL9eHJtHmJBLyc7s5J61yNQx8qAkKPbNrs9282NHzMZhAnYD6cQtGUTsUqsQGma7n",
  "key42": "4krDkHQNe9vgBzgpAkMjNv38LgudGQkzBxPQp5i3MdMEYh27mmBW3F7Cr3jKEuZgg9WU8EgMeXUihSxNZuNz9pFm",
  "key43": "3bBv5CWe9Lw9D2DgYS16ZZPik11j2G1ACMkaVS4DEq9HJSUQAdW795p1W8kz5bTPjNK1wnf7fhQuwZQWSpvkrvNh",
  "key44": "5cXLHhx5DxGWFyTxYt57Hifz4jzWrWYhegCAu81W8bKc4jF1qP7kDnVtjDdWgrxGCewcTuryvb3Pt8nbmPB6pdMk",
  "key45": "123KskywmFZKx9PQaSm4g32VaMLDQ8kWn4RWijTEYkkqcNVYBY3agLcaJGuQHQY6PYwo64Hax6enyrNH3mH64Kih",
  "key46": "4CeVZMGGKjJXJ3PvTCuigvaBvvudUtXV7A6v6jLAKMZqpbzSCHXPSjnyZyVFstSgMHLj4LkMunwCusiT24QLGy9N",
  "key47": "2Ar3XWQFjmMJniKcaysj3GLCdotrezWPPFvRUtrRgr24CXvYgYWksE4TRMNXWo2sH2teLQyT3zLsymQnzacZzqX",
  "key48": "2pG9vuorr5m1rNnY4UUTUyEMLVYSuU6fWXZMbjVFzhJn7CaT64KXow4mZxLfRx5V4KZ6D7aRD4Y3yUzqwhTuwhjb",
  "key49": "5ugFpDLCuWtHqmbNSK82CH4r7ECS61nqX63crPke7tFj9budLzTzavYNQF4h58WHZuoaQ3gYDHcXFGkf8VB5hftr"
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
