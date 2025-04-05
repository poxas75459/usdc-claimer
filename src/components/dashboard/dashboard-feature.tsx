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
    "4Y1PmQWXcqpPvrzL18b2wBDthmS6UdhXzS253Rdc4tLdUXW8pGJrUzANoNq1H8UbqYCnTeBT1LW6R4Lm7zSpYgVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55AKG3J1qCxMSs6vfoYF9C88ZUdN9SftoVVQBqjwZZaVw2ZGbBDCNjGM1h5nz72QQmAaUzf3evmCjmtQraFZZnjH",
  "key1": "2qW7xmTM6k8S7ERYmUcffgU34ZGfrTkbEou3MW47v8g2j4wxi9Q31FEukCx3Ebqn4YVhLFhijt7Ry52bKQrK3tUL",
  "key2": "a8Tw7Zr2rv4omS8VoYbV7t8K1ixxPnKcSq5oBCvdrhjZkBfSQZLoLuikWB7rXjBzCAyLPMTs2c2pTaPwVdYpVT5",
  "key3": "4JCfxp9R8Jp2U2vNWrnhP416TuHp14wCne4jGvdXhyPW7SXK8fxQBueCZ8XSMgma6ZkiDWc7g43LGA2PU3ymM7hd",
  "key4": "72Vy1pfpNMG793uKKQmfYc1cW4Tg8iPKNeETPoqYA9V8LM6T2U3YNkBWkCfyHjKTb86sPAeSHNZZVbTkwxopfDB",
  "key5": "3EyL4e7vgquhZSveELBzW4vE2YjFSoRqr1cbhtsx3YE8Ug1ztP6QZXuVdhvLgs2Ea2sjJyApcjXXY2u45CUpmJiZ",
  "key6": "5J6oCs95cER3kXeJFfgEwiGhwKMdqb7doTVpt7aAqbxEFeqaxJqQkNHAXFAXFTUvgRpeijqd8D3rB2gDiKsNAedj",
  "key7": "4xVrxy2fDmXfwy75qBYyYQxT9ibFPqdVRzQJrKuny2isLzWj2TF21yocpjbLBPr82AhKGvuTKrt1uz3dfGgVADWj",
  "key8": "3jPpzurgPnAZ5m1GiUojxBsqXksKghKKS5PrtjZ52WnDGeTGcx2k3U48XZFWwo2aG4Sqi4fWfiYUMQfz7axo92XF",
  "key9": "4HrEbAa3d6ZreM6sXV7pj119tvFUpiVhSFJ9hTF8Y7XHWQmRFkauRyUCMcs5KBQ8B3WbkTCRiqL9JLraFT5oT3oE",
  "key10": "2DfB612sVsTTHgJEaZkd3v7xHESxfJBP6XDJ1M2iwQxHgpWqBUUZSs1nCCxVCLx7w37wJeeYJpj96pyhSPfAxZMf",
  "key11": "3rrhYAq9mVZfbiVaRGK1wrjbx9vWxi4gx1LgxZfXLAwWgE8CU7L3tMnCMSh3YCJjjksfHVYtu7A9oWfW9uxxbgs3",
  "key12": "3KKNALTSEv31N8nxUj9HXWYCD1GhgLswDpaKYyGUHvQC1ie1ZY7exWyQy6rzmEmCmuAqkB74yEjHgK1AdxDMhxe1",
  "key13": "aMhjcDbcuEXP1AdhvoevRicZ22hAG3zWAAwn3hoyiy4QpUxtfgoJ7nNVkWwfBc127G3uVYwJnLWPAtoT28jgwJS",
  "key14": "3hmqv8Wu8dagA2VZd1qUq4Gozo6RZW997har47fE3fEwpLYdbCvWtk2geKY4FBuHbhK9ym8JzN1HB1pmQZmKxqY9",
  "key15": "sdZaNfhPCHaJLRnFmKs4oK5V9s9Zb8pTBi9fvR1dJkzJpRHNs88tRLCrgC4eCqMKctvubK16NwxrqDbSZWEcFgt",
  "key16": "kiJw8JzF8ykggEU6mQ6rJpfd7CTreihu4aRj537Ma2uuf2VDSvWLP9X1qMW5PEZAdc9ywYUVGsQgVqnzAimWavF",
  "key17": "4X2PtCqwU1GBrGWWiQsKg66YAzY6qtxZ28Z7o1U7zCaY4yWF6jYqA8Wij3oNj2zocMvBa6aumxhMveyeMG7dzocy",
  "key18": "2hARGRQUjToVp6TgvV3oBJ7jcfoQ8HuQTE77JmEhCoaHpgiBWTpEbrq9ETQd2Svy4gDt8bfr1oWJMCFtXMmKPoBJ",
  "key19": "3ezuzCF3tYvZfz2ttNAk8jzBwtGLZ3pJ73kQeAgCjeFHFsK5vMbfVZEiE9e4crDg7buZcbvpm8wVDmNkNGA5T1hu",
  "key20": "5ym7WFVTnmjJgfUPSJjpmZoCi1pGvsvrhjLymMmT93jFRLVKh4sMqQGfs1TzFGfpxVnWALDeScPUP8B6kpRW2hdE",
  "key21": "pXsurSKJ58jVcYNMvEYepiexpi79419Hq1r2jHeBWACYTm3Aj67zhpoTYs7r2udNkYLEV1iY7YH43A3WskKuDkK",
  "key22": "3ddZqQFUcBGNrS7VBwBHhjC2sffbfYALb9Ee1iSVUwyWEKDiGMpx8r4rzQGzDXGwHsDE4sZv1WADVgmzMcucpVE5",
  "key23": "2HxZPGxdCJgaScmRiP3D2DDF967NMEkodYNC4QdTPHNzGJnY7MrKhhfWGd6tK8SwT6mQt14tgPVsZrcf5JSbFYbh",
  "key24": "4W7QJ2KBqpHehZwEjyXVCvRExvjV1bR7e2gn2BTT7HWsB4zwfwJnbLEjVAw8eKKZVWgv2V4M8MM1aR44B8WS5gJS",
  "key25": "5emVei64X116BXym77kKrj7xq7FNE6SvKYUjjQxbSvYXG2PQpmHcL6YLA3xLmuMQ7ogjKMrpLpi8gtnyjLQjZgqu",
  "key26": "2wCheZCXhKpqEVJZodVyEbtGH1dnjAbE7PiBCK7zC7EhQQxnSx7i1wZsTpizyNg8o5mzyzsTt5FW8qzp6zuSsRXW",
  "key27": "ce4hUai6dqZz8Y86jvDx76zYu2V6FFAqc4mHfJyf2Kvr1i2jm5CZHZrktNMWhM9GxSUKWiZkWLX8K6zogVnt6o2",
  "key28": "5oom2HAMtQVuwRyEM6wG4YtqTJvBK7cXzPUrDsB1F2UyCrQC9XXftxfeVAf7fvJaKD8yExnaTc5N6noooueD5fZU",
  "key29": "SHf1uCw1He4vmN3P3uu5HF37CDHcbDjkQmRggx9gnSWq9Kob2DwEve32QSmFAQZiErViPJ7W9uBxKQPLsgjqwRD",
  "key30": "2beQpPBTo9HpsQrqEHwxJFKvfUcy51bESpXhDDNmikY3R35BbFrokmhTBL7ZY2P2jevbQTWXgLPciW57ycioBPTS",
  "key31": "49yqhDqv1PHDapNjywu4ta1RYy8ZUF9LY3kVQNbtGSi24uTQBkKyd48p8kmCknyrm25z15rBXqCznHXbgoM3nadB",
  "key32": "32DmguvjvbT8fLsCbYXg1JicdhSbmCpEVTY6dGV1W2WXXkFH9jW4y7gpkhDNvxyVGC8R6MhZg8cqAmf7S2eDC7bC",
  "key33": "5uCzFeLiLJ5MVNJoqzMfm25BN1djDuZRuniovTQQDNgG2P8Nxwut2W6vsrbBDHgMEdQLNdwGEEZye7BVaijhNm6H",
  "key34": "4Pi78xCL4CLJCZDuE5eyzGTN2t7CvVdwNA1ZPiezDr77QUjsjkCAuu2oRc77uPKP3PsMYsc8qMWqSBXcL65Mc5Qx",
  "key35": "26GXz2FSAuvp7KoRvH5wfMCQD3Fz9iHisiPfuSwJ4cx9nY54kCB8xod2ym4fyofVx97ttTF8WDHKCkX7vU7o4rXu",
  "key36": "5ptF4dn46A7mWKFDANmWnEEfJTMth3omfHYMqMXXoACvUCPD37EoD7fV88wpRtaFh7JemCdugKJT4dk5CVvpkK8Y",
  "key37": "QzMMJZz9Mgrktf7iLrRmBmzVd4P8NEWTkV6cFiiXgfGSLkBmTLD8BGMjT8qUGqT5nTLB1uFK7xBC9g27dVMFgyr",
  "key38": "5TLTPTHPBpMyPEnucNN43YmKLDwwuafgB2tNvszKZHq59xQnRjMHQr1DBcXEgtnBCutNXzPdjAiNQjN7eaRvn8VA",
  "key39": "2ruYXaa2oq7iCYZ3TxzM3kAA5t9wTgAemjX4M8AupWDCuLDXRpmyqe45XRm8Q7suU87Ziy25mnFeH8hU3uME22t4"
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
