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
    "2YCB3RDFmqe56a1mFU5bwJY7UHWpPGYjMQWPcQ7XMWpCGWMYeVNBUjTLtHVDDN1MdtV2oQYPa6NsidejY91M3eda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sapZw7NvbDrJdtd2MqjvGmntJfWC7Uv8Gf3v7ZAN2hjuJpZsdzSpU6PbTTm5NKNqcmYEfFHYL8ZRJM1At3141sP",
  "key1": "3QSS9AEH84GsnLwvhD2MU6szogUWzB9mbSKw7C5kQV9YQbyNwr9WDMaRZCcR235nsFuGBBreUzftzZEE1UeYW4Ed",
  "key2": "jq34NzQFcEzJhm7mimkeCdpCvUWcosoH5m71T2UYUbEYQhTusKkuwnpcymk1mVbKrh6rChHQjQ7VmtNdbynX5uf",
  "key3": "58fxAPX45rtfPkHDyDiNg9BFvuvoHPj1twcgmV2TXpcFb5YTycQdtKnjYfMy1V1QMWsfCdkZMq5MtTKqtBPR7GQX",
  "key4": "5T1Z7vjNudGVidbKGLnReXcRY3uKmPg3XdeaR7Z77a4EMC3uMFtjsQtaySz66pw1yPDWbEgD5eCvbkYqrpbaCv5c",
  "key5": "vsU6w2D6i6YJRHgHAub1ZcUf8ky4YN1fAyEaXf5Qsr8maY3uPpXrogTGmNurdpFGuEAWLXxBKxucLk97xe5vNnL",
  "key6": "WAaaJXhcdSxYsYNDX2TK3EYy9L2y91DvW3L3LXc9TBp2Hkoi9gQTFDNtVpjT3tGTqPXu8VFn6gWFVh67FBv3Eu7",
  "key7": "UTKF9aPGCDTnMweyrKSCwEWairchmB5GmVzyyJWM9fBQHNKEMG1zjEASHoDHdBPTUpuTNaPaY1gR146nCHxAs5g",
  "key8": "5rz3eqkvKW1X29CDoou44xkhsBRPvktHMR9ewZRcRf8v3TBJVM5bbuy3gsTYtgph6KxkJcqfGZLxhQ9fQWRscEk",
  "key9": "264qyUFmSqNw1r4SbFvUmxdWW6WmhE8PjT6efEYUNqPoKfdFF7butPkuvvUmVwXMVi482nBRWiAR7BzC27QqPj41",
  "key10": "4vqY8wbnjhN8LCKnBykN966EBp7niUyJ8iQSaFzpWi5nLuRCjsGuRoqWZVNVKYFKQmCQCVndwdS7xQkMaQzSmLjr",
  "key11": "3xthBbfp3YrGohRgDdjLMSo9eNVRbuNiwRJm2yg6eiH4xJFirGG8bA4FSMGeXqAkDByXJ6ZrPhca6adY73VDV5N3",
  "key12": "24TZnucsiYNxJzVzizmsyBftdohu88NKJHNAqecU75x3bmUzJdceqjBBJ5c8H1aBStHTFXvNeStWD443JG8hec9C",
  "key13": "5UKUKi5j5HBBXoz9gBHjXfmWmbevQPTGCMBR61jZVGAVVxH53gWg5rgs4dS4eksqCx8927DZVWVy6rM1ebx8PMao",
  "key14": "Z5NSRkAD4NLd1yTr7U9doSe84r33eu768wgcnEWEm7cr6r6mPDMW6Fkz7hTBF7Y5GGsvk6nbmFuvUPFn8xu5cVP",
  "key15": "49sVhukY6RPxA2U5YJcPjarKxLR2K9iRySe3ZKtphtnH64Fvrajkgi1LyViR3hWxMsskvLyJrBCrjRqc7EHMb7x1",
  "key16": "4HjhvzzB98MbfNf1YS78MuVQvjQcW73A3h9YgyMVYuM16DnGBhJoWD1biMgvEqn4DfQiRBLdBj8dS9api4Z6fcmq",
  "key17": "3RLxv4hzer8UrTxJ4sMePFomDEww3K9YzMaznEeHKbXregTgngsktrG1nL9uSyesz2uimJps3qr191YrGXqeN9B7",
  "key18": "5mCn7AQKsXtwnVtF8UKW2NidedQxRe2tWEy48oSVMDJ39Bj12NRqGYJeA2yYyZu12c29YcWSReVzug5e6BkdqdAy",
  "key19": "Xip7eBiaoF2bviTrk9a74Y7JH7b2VvhujMoxrBsPJbKdokVTC3zpTR8NmB9UvRgekfedBVMkFmqgJdp8L28kJCa",
  "key20": "3YTZnTRPu6br3JESDxbRka2oxJ7WBwwdrR6jfD5RNWgdWRv55peYKdFybpXWi63dv8KCQhB6NVQy7tRAaCSSpCEi",
  "key21": "4qLp1kFcvwM9q1WNS4hb6TdU5WQuwQWgiWUbYU55W3o8riwKnBGMEQ6B7bm3m223o7R3GJcvjBac38JXKsqb82tn",
  "key22": "XCE7SEP3TcZAGLB5gZ1t96VFJepqQYh8tJz1Fiu7mKghYa217fzQYYndXAneSNkAnW3vKJoFrhpdLzSVzwEDAuw",
  "key23": "2rDxtuXEhQEpVJJDHUwXeHKByd1f5QnkBTcDUH8ee4iABjwtpmffdL8CtfBo8PTp3hPgsqbWzGbqYqoCP6b7XRPQ",
  "key24": "3EySCoiCHiCXEaLmJLXbrvQbZBbXbYfmbUpd3PY6na1qKNA374f9QgjPjRtKndJBpy9KaW9uZicXkWBV28CKkQzL",
  "key25": "x7zMBMvMrhTyHTtkiTicPVCybzPFvG2vbPPR35twu1h9CHx4ec3JWoFQVWmLXv9GYDWmxAbSyQ8co6yuF616xP9",
  "key26": "4YfYHKtaeaWcwU5wu6CZ89XpLuetQchKKpjoL2f2tXo9VSrVBhTmJhh7z6en7xwewmc9UKYCDFfwt28Niakx3jgp",
  "key27": "2wgc1eX35niPJMQ9VQEoKsUxyKxTgxqFKNaoL6qf1xtmQsrqijWvfi7Bbjf2hv6wGUGe8c25M7qcqCNSNc4TYGxU",
  "key28": "5afPemy1qqptwtyNw4GQGMWreLzgEFekDwiHcApcrHxb7dgpScgAPLmDxzEExjurFbFVJAPEGjaZEZfuhn5qEQgv",
  "key29": "4kX8fjJh6RZaj5zLPrgZjTut8CCmfypRgEaGQJLGod1ZzHwYHsifCvKUGsqDDJsZX7pJwd4HwwyyWPtV7gy3QyQL",
  "key30": "52ahKSSWwPDC5NMkzQDLS6bYbNYxkX7ZTgYjyJFMGj5xRCn15xy6Qek1dxammr83ysiAhWbc2gCC9PGWVooaJpAW",
  "key31": "2CYSufwi8ePuZNt8phChusZQRUtQB3k95Y2WfLsC6K3whD8WoXjQxjYwbTJhKMpHLQQ7iG6nJhoqSdEUdnuNQJiQ",
  "key32": "5yEMN9bjJhaCoVpz4LjMo8xi5HDLBbyV9qyyFPMuDzT4xAe8p8XUhFrheKiSDooCCXdcN7tp7AQJY1pscf6YCdYr",
  "key33": "k6siQq7VsngbmHwCwM7qEX82NwbK6XS2V9GWvx9Mmx9gswCy7NkofCvBtYndwZY5FhfG8DU1qKc23JrfkjWF9fW",
  "key34": "4mmFbfsGNJWSyxTmo978UzDjuEthJExAvjR6hWGXAybUZwFfvzgNXqNQvWUX9zNFT7ZE6TExt1xv38sW5zQYRpup",
  "key35": "5cgDjUbfZpKzUgjPLRCpT1LFGmk3ufGjix3QJs6TUXJWHqVbqKTaY8ZZMozpn3DjbEMg261pkh8pjAX8NtGqcKh",
  "key36": "3yudsTK7sMJPyR2nFCVPMHfztvjAnEYMLiWaf2CsXL55wwpZFE2XnWNNSTbu8dWppauyX2roP7dtp5ngqYCt7heQ",
  "key37": "MGtxKJ2Ec8kw8QZP3r5yNNk4mBmbd1r1iVDKJRBhwxLNZLdKQ4UuM13Je1Kbr8a49dTFH2X5EeXiWHTs1WLvX53",
  "key38": "3tobQy7gF7LH62b5hjeYMyWqyMtFUxJ1HnD3L5rdvgHnTLd9PH5om1PUxamf59HteDhMphfFwAPviqKA6sruiW9b",
  "key39": "4wasPN6ERzXfTayLdmeiifs6ZZrSrGN7aCymy5Q8CGX3VGVq6ZY3mrdWUHwv6yWHvfwFBFaDsfFFFzK3MDVndzJT",
  "key40": "3RsM4YWCk15W3DeUDnKR8smSBAkTeRUnJHvrqk67WRbc26rEroweHmSKUy3NMoaL8gBGpwUxD152huHyMcteTy3o",
  "key41": "2Vde6QR13YB2cDexWR3caFzKTBzSFgfvbSbcrVV94mxGfKJAVPkj2FM7BngfU3mMMN5EeQF9hTvEeDmhMc7Dt2uu",
  "key42": "2ERAV1Ai9uw6RCWsnQ11TCZKwHAwiYpFtSBB3JiyM1HvPrzWTRpoCT4tHdQxPxKHGug3sq8o9AWUMwksxgX9R9eR"
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
