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
    "5EymFUT4654v9CfKDhhwAkddMUMwCUEia2W8G7aTxw4VWi2npVstp7vqj6dMCtwJM1mx1ZXqYM2LRzmP5TwVoS17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNCepZCP2jVyaqkprGHnNV3FFAaZdSdVqycf7yquPMShXKwJrckpiWgo6hnEAsEHq1vcTZ7SXF9mqX66kLexcQz",
  "key1": "2BesPxipibu7Kt5oMkmuNscZuWUCDR3mFFr5QBh1dFhTKsVbtxvSfrbBwyQMaBYd6aVkaout63pZMP91Rn9u24hR",
  "key2": "2a46iGGD5xDNGHPaykLeyMwSzzqw6hkwaWtsatjMfgBmHf4rqMmmmTJ9dt6hmBWmHWXgNBSXjjq5FuvmXDDQfXV1",
  "key3": "3ShpKBqWwxPQnnnA963sShT5ubSWPLepH4qtxAjvy7TenGkRYCRtoK9py8ZYWvFkRiznzqsNCKViNbqH4hcDTwrC",
  "key4": "5dk6pQzHfnPbEPcYn8ViTrytQCD4Q1gsNkfspGSfeaL7irYE8FWc6wghcCYk63qwT534WN4F7QsxG3d2qNSzGTB3",
  "key5": "4UN69QYmuyq6kESoLiox99tznvnoBQ9hb5sQ9DE1df6K1NpxBswiCUomme6EagJ2Ss3gzU2KAW2KQnU7LSJ661Ha",
  "key6": "5nKuvVVV972rhxfynAf4XH1V3iR5kioXK1xPdbeTopDBeB8j5YBah7L4rcKqkaVr6s5pqNwNmucKrmWZARYJKp6P",
  "key7": "2fcSjKLGTjCvT7M4Ctti2jukQhTZNNNFtJrAcvQFgum36GiDtAPaJpu8MktTXummEdQKtV8acC5D6rRcKC4oi4dm",
  "key8": "2DyuDcLh75tCx68CaBGgRXjabiyGFztpjWchQYpzKJ88Nx9WswdVw2Q4cD67gryzW383gW9y4uZVbnN4xrnZfZon",
  "key9": "5ETnjhw57AXSG6vDqUPapaBu6amcbcUvtZSZXUPgqDu8WgzZS1dM72B3MjYjmCCCn714DQhbaRZjuoFSi9pbpGcW",
  "key10": "45sxXf9fyiAdQgQpmBu6mnAQ5L5v5YoEhYvp7NcVqHXyZ52MnjfVALQmXUsiJUVnQa4yUFYYPrD3Pq7WqwJ2J6Ni",
  "key11": "4QXXyB9xuLjWf39g2d8bvjQTruY7GcM3mzxVAvQgcRiFsk6F8ZhquZaTPeRttoVsZ2GtnAyP98Whn6fquSDwZzBt",
  "key12": "5ikPgsfinKGTpteevTK3UBAax6pS9ieh3dqT5ikBTxRyX9e39THqvvBHsiBpJmMmCooVrC4UKUTGBXJbh1QvCVe4",
  "key13": "5edKA9iyHR4266CHYiUGBXE9anktDBLxSuoBd6VEvoWTJnW2GX27jHFNjXq5rW4CpYoTDXBhcxr1Br3wWW71kura",
  "key14": "4Wa7YUnsdLQcwj7B9GodJX6qSaENz3woHDyJeGeYrU8Cduk2aRhSVjfuggtQxjcWeFmTLCoiHYCibpK9S4EEZu5K",
  "key15": "4NwWW5nZvFpPBPbHg9eLSwmfgUw3X79WiNEkgcsFycx1ArMgiFMrn5Z3SJjRLQANUd3TQo3Vs2YPPVQ6FRYW7Mt4",
  "key16": "2r22yK89h21vwyZDy7yE6dZRsav1id7Fco2BspDvbTWEsU1pM28vs9KR1AKp2mYrDxvMy4MUZwchA1u9GXBCfv9",
  "key17": "2j162eKruE5PeEsh1YKnfPAmRFje9BpidQkUE9mdrCEe4LyzKtzi9jU1g9SYiA1u24SbYSw2ugNqX35cjNpz9NG1",
  "key18": "4ijRVVKaoD3S311JyFfdxDyx55aw7mVZZLq6SRzZ9bs4yvwDcw1qyDU38a7Y55kRKS3uXvPMzqGBrGs6Pggg4iUG",
  "key19": "35bFaZd9AMsiqpzmYUacHquCVd4EPb6yDkczZehHreA6nBV3daRqdgDdgtt6EyGmosY5rNE3SDMzJUACJjpnDTp7",
  "key20": "3FvZBcffmNokuzoyBpvZs2DtqSms8HNqdWgGU3eS58rionSFMAqPn5FhNttw3HDoxqatRwuNjyWQAX9oTwTmr7Lz",
  "key21": "3WzEv9RhAngPFhDezcsBj5im6fam7ob3UmMJPDBMYamnBwDSrHXYhuAgkcSAbnVq1KpaCYu84Kbrzi9iHHpD6fcx",
  "key22": "34DHVgu6bHUfnjJC7W74NbEFFXjsPN6yZvJjSLZYFwUrpXs8hE9KLuG1pFTeYA7YjDuhDgKdtT6r1DUdMmSSur8N",
  "key23": "53JFD5syi6EkUnYCHqVTXmK6GayhJdfbWtVMAayBvo1VP3jPuLhVhddUgWCGo6b7EMMMLn8THCMYncSB7osb6kof",
  "key24": "2yVSCXArT6S3ey8wnQ49TQYSvmoUhTxDUgTeoFmgzZ774aS1zs6Zrr89vLTwMMUyAhWi2WDfBwCqCJdv8gkWwM3d",
  "key25": "5HLSy5e3oAaRkZy9mB66LEYvJixcsLSL2YZz7jsz11zPPNXwNus4wW8jskxUhkvzaq2yAMzLfo695rhRqtC6udFc",
  "key26": "4wVhw4WNVkpV88NsZab23hVyMJdd9TTz3GJnSDrUGcMe2SXJ9niuL3NACzPQeabKt7LiERY2bEDsCj8awqW4exAK",
  "key27": "3kjHSe24o6zzUdskuyGkD6gtb99UcJETqS8R4hPpV2rmkqy1APR9zj4pWjgPz6s2PRJUCbYNnkaJyyqBXuEqYuRQ",
  "key28": "cRdaQZXD1ypkk7qiSxjincECHfDX7AjHqNCKLiYY2R5yzjFhRyjAiQxEb9vhpYsLrtsCGWV8vwq9ykxGTZgLfyQ",
  "key29": "3rCGSh9RGKeqAM17jEBRRwnitjnZGQSGUAV4r74hoGRYkHu6AfSNsVSYQuythFYgi5JrwL2krYemA7v63P4KKnvP",
  "key30": "2uyJX35dCfpKRjCobn4E6BZufyCX82673fDpeaxcvLpuWVSLHwGEfpVkSaooTCrfLRgEPTqBgVFmaS1wF9FR713j",
  "key31": "wjZ2Qtmwg8cxWXA6pGKS7zdsVHpAsjks4825SB7q5UDkv7tz8DG5b9Bgg8ZbuWR3zrZ4Gno84eFTs5N9f3r4mk3",
  "key32": "23mKiwd3ByxdfFPM3bDd7oeFnJ2PmiVu9xncSnjJPiSznanZW7q82mdfaCanBtYRdCbc3J7BrmfbQ9MMywqtiGA5",
  "key33": "3ApqBm5LrsxkaNXJWKtWLHRQ85FKLzC9VtjyZKKtZGh8SBZWdvCNw7dGvy74PyhTwwvenM9aqXyBJkHKr3VpDeZo",
  "key34": "63qiVTtDmYCfeGwDmxjPi1r3NCvvcRMZzC4KKPKsy8Ehe1kpvCybj27eMYjqT5eV72NwF2B8NB86CnU1cKgdbJ3v",
  "key35": "3YJsXsd2TxfbUohZDQdXQ5B9aW4szZhgHC2KbjRrpnbpmE4cp4NCQhgBAg5rydTy6VbvSPzC1NppEyZKDC7hrfz2",
  "key36": "2KS8TQhqrzFHR6EomKQKJ1AABTYEqxKdawk6zL7h4ov5oLx99rVruNkK4vucvY6Y1KzyYJ3L2puis3f6Ez9YWy8v",
  "key37": "5qU4De9r1hKPDJUM9aUW3di7FP33JJ3tP43FZc9oPdc2FnuP22W3j4h1w2QVDLdsPjg17jB9ngzVotgS49WjJNes",
  "key38": "2msh3XvQeBLuwPzC5pdadZ418R9ngyyBJDsBy3KFbbw3HFTBp1wZYaRBaxm1EVTqZvaK5AJq5CgbmCdcNrKZCYay",
  "key39": "5YY1vGWk1Tndf7qRCjQF8eKR1ba18Mkg9S3Mo1fLjJjAJQZVrAJWgK577sP12jtfPrVHCxBVQvENKUwjZQi7Ykj6",
  "key40": "2gE3KyatJC8at1BjcDsnKHd11bcu4hzPbTTfxVdhCHh4o6PmtCX96i2rPvnh6X6wYoJztZCDxrsEpUeRNXWk2sDL",
  "key41": "39NitAH6adxEGtSR1TP1xV4VHCnmRJSMLX5d19humwEVJzJNwJM3Rs2cyrixaMqtHdj7NUbWF7ytsUmDT8HAS684"
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
