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
    "3YQyhbVzuxmGnE9VrobL8H29vEQXETdtfmmJvF2Gx4JzinF7zgfTM447ziVU6ejk3HvievbGLnhM5GaiFiK3jGWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJmRQ2CXYumcG1RJfBHhXhqfqL93ck9t6Xb7iWzQcWEmFBAoFSZKpHxKDHH4ncqfyHAEFDQXmsv9H86K16hpuxQ",
  "key1": "2tJ3cZYFhVaFKUWgR1EDW2MijV69DLdJTGuCcqZB3XFQXPeSrLYxULS2rWS4EwTCew7QgGgXQiqxngP3VDexGtMd",
  "key2": "5KBsudxDM7ZprH5rXnr7E8Fvfkxgahvx4ER6jbJj6Nhmr24qpXLkncvmdf1Qju3TUkgnyXf4PDJWXX3qmALVhDrf",
  "key3": "3ibaV3aNya1BkhLpxSAnhWDvVwQfqUVKPqmGbfWmzEZibWbsSRzbYZRAob3aYEW6dkt1Gnyz9esw4mQBveRW7CbW",
  "key4": "3o5GM7shSJ9HG8LxY9Fr4VA1vmyn9M9zGshSmuFoGMxwy4aBV6VvHo7udTWhBhPEzisdEeTu8rdb4zRPYKgmBReo",
  "key5": "4CeDUcqD2PHSJvJvsiYSFsTMmgV29DqNc8txzeuWeg7i8QkoCKfcT8JQGhcDG3Hf8dCefZAqnfkiRznushLijVzT",
  "key6": "4cMuu65UiaGrgx3tCScVyVy7Mo8FhyP6iGXm7arqrfHf19QALUQmdkutC97p6Zgok8Dm3FYQ72iD6CajCmys4DKQ",
  "key7": "2N8DWdSoGEzqtRxUn3c68iDudGoDgdpEMU2QeGMe21PTJ4D8FqvGNMnUjqS7BQZxRDwE8Y7jRtxDYrD5BAPH4to6",
  "key8": "2RvCuWiC1qKasmqDbuiYEwhRGrqWtUZqTajqJTr3wGfn3rJ2s8nB3q1u3mc3BS3kJ1yJHWDmvcAp64JFVmPo8Rgo",
  "key9": "53hG1PVS9QWnB6NnzfcdypUARoFPHWr5VtGrE1NAaHFKNBVKAVLhycxTRpteFAqTZnC7VxNzDL2aTuXQuu4kJhNR",
  "key10": "yKDrEKCPaELsavGxrnGtVV32ekzQDgiEfqNFsMWRyC1boR2v76KYdEoWaYkm3fc4bD7sZR11WmAx77oRmEPNZRR",
  "key11": "4sXJrZAXZ2qNefVDtjH36GDy7PAGZ61x6ZgqMMFoHFKk3VTgxvcFvgWncahx4jJDfD8Y83uRQ45Ux5mW4FuaVWGq",
  "key12": "2jU94sBfJSmG9dbEovKuoA1u8B39u2tJzsJpu9BE8GPtetpSdn4cohHWwmybjEG42hES6ziN6y1eurReRM4dg3xd",
  "key13": "5sEyzjFUZfnv9gb71dR63DwzjGfeTZZDVvRVPuZfy8kq7v4U7kW9ZTFm6NZy4zojwh9wVuHCxiJRENQQAWbbn1Uw",
  "key14": "z1DCpcaWUm5W7mwavj8De44KEehWshaGw1RkoxR6HVam3iLgis3BJRdRcuxFvBbPoyYUH6djjFhNzEHbsutPZnJ",
  "key15": "YNfE2kwM4Z8v5BwYpcPWZ42hKwcYenTxAj9AveQLYeHhZ3nNKmEdUasAoCyucu91vTZfZaPJGRan2T5H6AoPyUk",
  "key16": "2SskvoZUPwaceP6ztmpsVu5km2pJGqotamyhfUhZpg1WeLvctFUZPFTg6StANGhYKRj1wp4EXh1VTChXvLTSoody",
  "key17": "2nuWhfdN9ad1WZcC34gGNTDTUj1bB5XMMvHQTK1mro2Puhf5btKP8nx3U9AmoT1LmKnjwrKckMTesnswPSbKJKtW",
  "key18": "5GQN2cAdV9NYba3Se64rMqBmKNbsZh49m5JJge8mTdmrk7VHAhrAPhdVfyWYZpKaHhvnodWyf9kjwWS1E4HCoei3",
  "key19": "5NKaWvkkjH3rbNRB3r4dD4d8RwB6FSFi21nKs3zstiwBViD77FMuD9d9TWHKohjRYgjEp5wJ2J7wfC1M2LuTFqLp",
  "key20": "3XDbxUJ9T6EcsDCB3i2UQAcbsmLVeEQaVDSptRzNUE28Hqw4EdC9cfU5aKnc1vfpUEBwQoM8MbjPb6HXFff71g4B",
  "key21": "3MDQ9q4AeiB5o4WUv34hivAmCsidawJdb8DZ7G7SasVHdHZ6q7bcs6siSFyspHHCoyGbR6ZrU6PoadhgooHVrJNq",
  "key22": "3NjLfyTTc5fCAQn8d5DyBGRjEKJmd9CXMRYx96qqKgguYj6Xu7nVkSQPYZKtDeeQaVsFQhE6NhBpEX9Z1o5oxTLL",
  "key23": "5GhVhcB2pyUucbFEQEPmqrwLXg1qzXZ5vRDpkqoaPeDup4b2Si72cpnp8TWogQYgMUwLVBmK5sRwpCwJ28qoWziw",
  "key24": "K1K2Ly9oJBwcTwjWuW23oJCjNC6bqhjDYHrSUv9KsiL2FVmkqvmHcVHN7oBkEj5K7NSa1HP9xpuVrrGmJLpJLP2",
  "key25": "3SdxSSSTifD2sTQhx7iNhU5Z5ijAw5bm9deohNqKLK78chBoPdwE9kAmPJebQu6oMYbaY15QDiEcddWVEcpPvkdw",
  "key26": "2LhehwGP4KFfVKxNczLAo1qFYiwk9s14DnouCeqhToK6BSdoaGzzuHLLDUH4U7Dg2JtnwZ5jStpFXnSJrstoZncg",
  "key27": "5E1nfxrhn7NPXkNwK8EguFHzSMpL4L7HUVkzsoKockGQG1AkJKnQXCkQAgUVLADKkuVfhm7Lg6YQq724jLfLt3Rs",
  "key28": "2eH5KLJgfUthMbh6P2yqfbVNauGC6ixYpoyJj7x3CUUQJsVQJHogN56gdngqUQjagZvHZUD9FLkSkB8TE4fLTPxA",
  "key29": "zJqDRmqN3UMgEoM9UzCwUicek3Srnvg8neCxG6xhtxggnbiR9m1rf4iRFb494xfLjDJ7BvjZSEFneuwB267Wa6Z",
  "key30": "58uxGxAxStaJw6F4oLtwXWvqHfgu6oYHDzPkD2SeHwq4hJyV1KeeC1EUptbKbgnq5xSGsx5gKMKbqUN4KHfrpc4n",
  "key31": "5ZdqPE6zQZvF9PrRnecyHfCrCJWwevZ2LWXZPXA3pR3vUCa4T8L1VjGo4dxBS4fPJZF2uqwrpzeqPXPV5Uazxb7r",
  "key32": "5DQctk4AZRNYXsKL3igCRUKp91rWGaeVk7z2SxT1xfjGWW7s2uHssHeUMe6S6acwFRxcBT3WZPRDMhgJjbqhtcJ6",
  "key33": "4dPCpZDf3CGfd6JJdM6cJf4WKsMf2YvMMmJQEhW4GoR99CVeVnESLTtg3MAyEAsz8jAnjTjJWiWxnyhpeGiggv7V",
  "key34": "3dd8itC88MNVkmFmUvsLHCn5MLBVK85nq3b3nvHbSdiDQyKdFn4WUN8D9RzWD6nzjhftxLy6njogSR2eaW5cyK9S",
  "key35": "4DDxeh8HJ9icahVbwsiTGGPTueTWTcVUq9w6iQDzVRErdRcx5ozAX245RfkwxefGXfDNEeGzDQ3LgXnTebeJgr54",
  "key36": "teegKWUJihKuSSs9GzKJ52RzxZaeSYMG7aLEALn19SDgRW4m2JpAPehcGgtcSpqxWk854PvZBPNQEvcWGd8ugcS",
  "key37": "33U5ouhGuoCPJ8ejzBMBi3tmNkGeTJ61Z8zVZZdn9sLCDEqXsxvRek86CTiKEKtxrE9Umn2qULEFvvVTtVXvBmNw",
  "key38": "kSfQF71Y8ZXRdr7zajJoukNTXN8Z9zuA1Fph8hkpZDJXU8RdhGsCuitXfy8B7gS2gCYV2xtNEwkYms7s8YSc8jN",
  "key39": "3uGdCjcWL21JCFVeFif8iBxwDFSVz94mHQDpwsQQU118Y1Q7BZtZ2wCmtvxQXHyRD7p6SBcGFE6FVwo46eANcE12",
  "key40": "5BAZKZx4utV9Gb6SxrCxJZpC4LaXfrLWHRvE3P19zdoAzboUKWnBiBrApKW77MnyMHvgJYT2iBM8fjUm8ARtFH2A",
  "key41": "2r7kdQ8wyLYqPPDiTh3Tb27SbsRhC52h2sTgnVhixn8JSyUN9mhwcghagybxFtthXbArHzRUCFGJnb2RLGaKNMQF",
  "key42": "2VLyELfKzo7MLaUBbrH7nKjUsSoDw8GBtpQ3kcCTPgP95Arg68B876qjARo6putKEwDKyqCzm9GbUUaYPsEErHGT",
  "key43": "2seCikKiuxLXqTMkHN6BmY2MwvNf1GivE5NRbdiZmP3BtPaEvNbWFoTzNvsDfyYGqhRgqnk8Uy8hCmxrmDpk6C62",
  "key44": "2PJU4k7so4UHL1V8K4GaUBfnZym6QdiWCHKJ7usp6fd9Ez7cCwPiDxbf8AWTfmDBjnfCtimjXLQVfxJwWTKz2yEp",
  "key45": "5cKJHJGzSnFAY2G9AGxP6brokiqq3eYh6Trsk5R9WNoUh9rMMGrfkELGSqc4aAzzwE8j5R466NcCRTmMtw49kw5c",
  "key46": "3NXwLEpPY1Er1UiFA58N2L5GMzff2zyYrDp2TPqKBz7MkfuQL5n2Sza9Q4KT3dnp6UJgDHhRD7jTjKVvRAdsYin9",
  "key47": "ZNURauZSvYpAeGccKg9LeLupbhj1g4JYRXZ8MTvTooibwxwVvQa4CEdE4KZWGkUvEJcUFm49h14kga6Pxz7L72r",
  "key48": "2HC6PDsdtrFMYP2pdBmV7R8SZXcZBMCK1uWB1rtSPPW1yP9EeGQYNS7mS4LUgPKwQy55vQUxLFJzwQhAnnf4rjKg",
  "key49": "2KCTarJ3RnJJkSKZ9WeDjs7pcfZet438HCE3s4tuZEfGiZ8YAi8k5S1rDozLnmzU1acWTqWHZh3Uytj9HK78JZRi"
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
