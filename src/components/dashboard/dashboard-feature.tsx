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
    "5y5DmP7d5BNymnGcKTUEyTj3iXn8Jzn7hn5cHvxWpdvwzkGmHS75aeJcUDWUFVSXDCNDd7bkeEkWJKxZxoTcU9pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTsgwj3WuPFxHNZci39SRHb3U9iV2sBpZLnWnnbpfULZyx5fq8Ye9RGv2hksksJuQmjdeTYir4AzEWXjMpmQYHz",
  "key1": "3HsXX5jQh7P1DSmKWz4hRgJEjsYH4Fg7WbwsBuLCWAxxmVnKHoiRTqCvvdnHFdb8HL7UZvYCtBaLspbVSzTGSRQR",
  "key2": "4VKGBonSD3J211SK1JW6vbA3KZtq8DGSkYNquHJY3YgLcofXfBiyfrmkZAQBiKQ7p14q11ug7WA9CLqgXTFLizBn",
  "key3": "uoUKQgRUyC3erZRqaVrfkXjojoRHzUBztVVs2bF2uuNsxDAmXmJPcMMV7xHshYi6zsxK6C8sw78iCCZpGwmaEsM",
  "key4": "4preFKLZcSKCgtbYUpFMuq5hVskAmAJMSWKWU2YKdQtXgmTjQaRa5n3Aeuk2b6RNDPpM897VNqTtu7jdCJta5np6",
  "key5": "62q5fSnbrZFNJUfVeLmCTKC8Re9AT5n494va4LPZ5LhdieNkK9jihYPJf5T6S5QtxLCNHr5m5HUHkts5rTc3epos",
  "key6": "HbmHWxhqzkKdpHrZ3u8mqwXm19mP1RZv4iBeiLjtz61XH9iM2TASs3yNEKPXyi93cFF9kGtBXob9E4VmqKfqSCm",
  "key7": "48PNzXnbJxND2FUWoUe4X8aPCsewgxehYovWwNXtjB9Y4AMponX6EY2CRfJ2dwuDvkAUR95AgQySpMFVdJHiXVir",
  "key8": "5oRESWmoWuAEfJGigne66dTAYzEL4a6XQbgwR4ikYCP9r1KbDFNULsCL9f5edT3oQ4sdrKCjUguJe38PQsH4RoWR",
  "key9": "3uwGARJDiqcvVkeEa59PXKjCQquXGAobrfyxPw3YuAP8is5kYGWqQ6X3uSgsXMA3JqNab3x1puJ6NsLzpZdqs9ZY",
  "key10": "56EvJeSNCWAWNHbE4MLEnu6HS7FKwhQue2vxLEgWaxPAsmu4o4imdXxmsStDP3SwGj1yYX6K2X7QFYoB5fieLwQw",
  "key11": "3GPhM3FTkjf5QcYP7XCb1AYpzz2M7irkRBqvAmNhM1njc32nCjkHo14fbK8oq5tA2WFJEd7oLNg6S5wzZMg6BXqi",
  "key12": "4V9gQjvt9Sd3Xd3VyDwusd1kMp4N9MHHXha3brLjFVFDv5hyhG23krkF7GWpwgK9xbbZtRTravfXHo3K7erN5Zm6",
  "key13": "54ffzxXKDd6iULKNrHjp76EctTGN7SQbjATm3nayY5BfnG5jsY5pvT7J7LJ3GVp3CNF2cXhsaMM2ZKnAFydydFYf",
  "key14": "5EnkiyzDhiSjbkwcjF4JxUDDzpDe7AKH3VrsK19Hx59cgCv6yu88Sz841kXpuEhQo4No16h3rViyFbv9b399k2oV",
  "key15": "57zzUz8Dw5jeJpr76LMR4z2MkoedLHhL6rD76GnSYTGGz3pgEQdpBtP3bBByXxVWuTMeitV13BmN6TUwDaJxbkWW",
  "key16": "te2x1a683euSpKjMR4Drj1L6ibJr2nyZLfotWyygoaoxDYkn7kLfDZXshdPsDgn6weUdhebRxbRqSxAR9EWRNbF",
  "key17": "2Tw4B3TGGujJxKJWNCPt9TnbzwCGjfoLq1wKZBGoPJF3M579XF1g8GxLWcamLN8AzwSDMgLUmhuVwspjLmADt7k6",
  "key18": "3HVRT8GEFnqG2Tuu2CTbYtfFmMYB2P2YwaVG8P3dXJmTbDXJM5qk8Rw4dTMxQZADtN4cRiBuyiv9XfUd4vVNLgUN",
  "key19": "5y8KJC8ALfFtmBDkka8cfJcp57N5PVswqVGskeMVsTBepe9L27APesCBewLxay3YNuvaL9wEeAhrWts7uJPkZLG5",
  "key20": "45wbuiYtaSf8EEuncg56F8oejwLyBR71GWcvqTuoiBMsXeTYXFsmK8RwkQ6XHD3P4WE1xtisPaC32eSggBq9FQ7",
  "key21": "5S7k9Agdmi2afpEmwMVJbxPSZsQJKEiskSmWfemcT38cUqMNerqpcuesMJ6qGyYG9U7FsLuECPag9ZyWwXL8HZTq",
  "key22": "2kQF1oat8zyfrukUrB11zTcyk3pusZNbApJVHHrFeBACpwon6q7hwydCSdVrwQGfanDgHHEBLhm5GtSTAdYL39Rw",
  "key23": "5s8HCpxpY29QH58dmzVTyMU6dJBNUNs6xJAG2Wt9reidYbLcn5UmAp9sLjWuMQG6K6SP35ydSfqYv5xayrSyVrkD",
  "key24": "27BXQmVbPU47vEqHgp6G3AUpz6qk12mt1STmPKLcwHXcKciwVB3cYeET7TedV5w5fBc6hFTxnsmFzWgcX6vXw31a",
  "key25": "5tPZnJ9vPgkUs9yQHSwTLKYF5pcSHYPDtna39dSsa6mP68X5opWnnZ68QADDSzZtDxSPt4XJv7r6NnA1rxa1AyqY",
  "key26": "5bk7CG8N5FDdycKrH1XTWPzzdXNrYzPod5P4f7Agc4YEe3UeGqVom6ZEnKtJKXjXZoteD3DBuKXSNpLaVQJishPX",
  "key27": "2TQ6DmTRdsLKtexhKd6cat2VY3eqsYWhwhed1zkvRrwpmTnLqX3mfvbVhxA2JxFaqyNfHaTYEheDhhLJWcGs6Riw",
  "key28": "4YG1TfArj8KVXGEVP8xytG96uZEr1Kag8264oTSYeSsWmYR7AcKJAr7uGFdN3PBWsepxSeVqVYBfkSj8aPDMKma7"
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
