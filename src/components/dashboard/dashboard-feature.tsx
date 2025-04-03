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
    "1i4rXxZfttchtzK3fuiMYMSsQMexqwwZehpZDa53AkvhNKbYFjJyuoQPY2TJU3PNypDVxRJD6myMJfxua8XRgdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYb9m73mdSo9MPnoNWMmD1hTas7gghtd4tc9g8xHwDXTCGPsM7SmDj6hxrXs8wTmkvAbVnG6J4qGkrcPaKm4GGs",
  "key1": "MLece8FgeGQe31cWoqLHwRKYeTF3vFiptiP34Qji58bCAf4a8omgtPq6hj5biBHhsCL41PzLwdtpTk7wmXLGuSD",
  "key2": "4u4dUUpXETvw77tmYuAM9aXVvSRWysYK81fuor9Zybmsqiqo6TLcucAsRnmjfmHgE39YpVihDaHqrkP4kDF71w6Q",
  "key3": "HpMB95zBizTeLGShUdV3VofEoJDK6zPbXk4T1TgoMmjhqmgQVsw6tzg8MwKhukHWwBsuxicg6FisxVbRiJEGyyK",
  "key4": "5hDe4gvzuyKKjTLGeWGtqnRPEeQp99GWRm3xfVrJyu1B8tJzwDL6L8TVu3UpBwERaa4gtXczDjf2L1YNQgdD1AMG",
  "key5": "45vgb7ZcDjqJmkV6ovXyxQvhLFHuC93wf2fZbETo1Ag1cu7Tkd4aD8fk74EbYRaLSXL9HpyxKgDxJ8QbniUouyv3",
  "key6": "42Kufg5ckFnEwi5k3y1EZEsYNzn1RbYATfQXkobzTv428sLtkn5BwZzy84ZDGwtDoadZo1UwGQsefQDQFox9uDhM",
  "key7": "48hz3pVEYEj6RpuTSxUc3xPw3LXz69HaPEhyLgkt1qt1cuKriw7JpbQEoktFidPk49vh1B1E8JCPrPqBEMEq2opR",
  "key8": "2629CU8snoQTLEjV6UVJbF2it7eESEu6kTUAK7FY16ox48iryWXJNCWtxkurrbfcfm37hw7mHjaa39Ze9T2PzKkA",
  "key9": "2mNoSFq3azK9924aZBdBz6vGtrafq4jDN7KRNNjBo4BAzFMcPVePZn2jgrAgVWXaj4Nt1MCWwvyXzJPRgc4cfAbc",
  "key10": "3DtFc5zeFBieKacXG1LpKssPZFxokDKVXsAHPfdLcvAzgktZTwud8QaKvqSHh97kTAkWu1DgFwtNSadsZabne17k",
  "key11": "2bVgpvM127pYBGkJW8izNKngM5WHGLk9Wu7JMaE3ZGL1hxEYy69mn2MbHc9NMkkz6mm39H7pm5yHCSsM54dk6DTL",
  "key12": "3DaeeT4DyoN8dZd4uTkDLsyX73EJwnb53CU8KGYLQ6xRBbjcN3oGr61eurxPEZyLiLk3zp2TnikyJX924dng1kY8",
  "key13": "3ECth2LSJwDPeThvQkgzLXRxnd2wrBiL8ZyBeF5Nc4CgmCovrRD2yutauivjXjGJZg5W8Pvr96e9hNpEjuKFjhkp",
  "key14": "2ce9RVDV4oAEWX1Jb9hQaqBkofMe8meZvNJqDFLC8KvqCCRgNC6L6JiECF82ThsnsAu4LTfcDyuDjYPKHshgr5SQ",
  "key15": "4u6NVzBxNR5Ba7P4iTZfJ6Yf1ug6WRbd2Vz3iRMMubGS7S9LKmkeui6UaWJYdeNUNw7XDHDwExdN2o9jUufk2LcU",
  "key16": "5wNMCTkPUtmkcY1k5v2VSyM6TqJHu5fF19r69CC7oHqZKBj74MZEHhR5HhSPnZfChDPWKAXATpfKWyGuEo4hyh8L",
  "key17": "sn3TZrqXGbDXM31qAJUeV23JYjaVAsDjVdcis8UUmAysLxxhY2qUNyPv5eLCRwJfMDfVfcZFZbYinZgiFucF4sh",
  "key18": "4R63NaEBWTwPdA8FaH5cF9EaBzB9mdxE4VibDACHipbB6nbP6MtBL45792CbLCuThEa2vzCsLRniFc2RjmZ2gSoF",
  "key19": "2odqrt16Sw1oFmM16KzLyFCyNzUULGPXrU3DSSZHZ9B5keA6Ux1xNsCMDgobDq4wAZeuT7AMGnt3Yx3f4qF3mTrx",
  "key20": "4p4rADf4ni9A54oXQnzP1m2JiyfnE4wAvXbmMLi8UdCTkCjgaW4Af2ar7Mu8JA8CoRjFRuhBCQTZbxxHPhnM37NQ",
  "key21": "471JCZY3hG3esn7ahCZp9QJUnUqKW5crLDHjmQKk9PW5qAuks3WC9UBHP44xDhm6zoCGG1AaWZjosYGJLX6ikf2v",
  "key22": "32s6He1bTLY4gFFKkY3Ksmx88ZaeQWp2z36f4eyQ172ZKJB7BLZx6n2JeTXmEXey6sWqSXTNZP822WGrkiEQfU9u",
  "key23": "3rnLKUPA5ZaDaZXHNfuUdPb2ivc3exDXGLBKjXn5HosdorCn2oEQYXh6MnpTrtiKNqZ1FFrkxRaXbduP87M2wgbk",
  "key24": "Tp7x89uytFUHkdPF6n7vxjAiRdfaG896MoA5zJUNKdDkf8J5jbAm3VoiSPu9xG8mBD52SmA88NZukTeEYcdrf4W",
  "key25": "27hmhRX3Nyk84XtjhBExiJAJMWcaHmiX9ZS85QXmBgZLvsAEKWRnkYjozymhAxWzJ9SpzFhbWkE8jBRm9shrmhiP",
  "key26": "5bs683kQew4hmrpxAuDFNaqMbfgdbbCDDrJPeJjGjKvPnNbmFsryAe9cMhnhzw882FGPhrtA6aNALZhZ6arwSRsU",
  "key27": "4z9xfpq22oMiduJqnwpDSWsFduqVRGxzthuso3RvKvF8r8YAApoVmspeje6adL3Sd7nPNvZKZZNUzTVMV7SYqQuH",
  "key28": "4GLhzk6epA4qkDMRyGoABg8MiiQbaFsYzjQTbu5kpFihEJMFkuZn2pbgY8YwJkXBSwn9r858JAt4EL9Y6K49sBWr",
  "key29": "5Qz3b5n3em9k2Rn1fFXnkPQnwyrY4f7onsyE5FfKLxEZrpSNbTv2NrDNPxgmqfVGWwGczEVixoUm5RfaQ8ydWCBU",
  "key30": "4hjYs28tebPpuBV9VLjPGu4bWfmeN7Mdo2hnTFymqNyHVFmpP88UvhdM8xP4QuTsY6NcfePjzePPh6bgkyLxWahR",
  "key31": "vCCzNxHas2FNpCZBCzAzvGpMX62ccRWQ9Y8HsePXzy63pivRQN2Ly9fkcdtVPiquyT1U17KQQ8eHRDcETWGSoms",
  "key32": "4xqazFiyDvfmnZQb3akaYhtQT1HbfZLHU5kATiQiUqAa2wZYbBa243W18kLzgCYwv8tUa5wBduANrPnFgi6jUgrk",
  "key33": "3G2yZHDNyngSha8pTLrabjHNk6QVmYFVfa6hx55zG98ohh3HJoB6fNz9c6kdmPTfrFwKTWuKcZpi9Awj4jVAyzXq",
  "key34": "44NEoQNFWUdH8RRRYAQoNjT9TkSR5yZzBwqEjCADi7M5v4C237NCATaFvaFyjYGLMv23a9deBKHt6gAF7D635pap",
  "key35": "48ZBpX6foo9MxXPLbbNfrYquJkKoNSz2ac2nWzfX8ViydYU79T76Jw6EBBmwwj6vgYrVHGeQCTQfXJ3G4RdouW68",
  "key36": "3P6PQvqvtx3MBKtuLXfZ1iUtWXYMSYXcDxW3TittbWWsjmyR7DZHD2RLQDcHJW1bQQURd5LFY5KKJRY6P48jneCb",
  "key37": "4ujutc3PtZdLMMNxsrqapS6ogdodrggks4NHES8WhpnkSqQm9vtqUzd6cCgvmdm9qJnzz3vaPwPmRs6LeB5Ly4eM",
  "key38": "5uwYK54qAzyFwhdGi14A6fZfDBKg9G8iGhYWcsNEMhPho55G7HyW2hPRmDhXBpNR9rRcG4mriCubckr7pu7HLTKX",
  "key39": "JRtxHm45jUF9vpqEd37UDN6ovR3fg3wsCrrjW2kcneMQmNYpdTxaABxHr95xHZ3GLpYn86H4L5FzveJPUdPJ3gR",
  "key40": "33DLGRs9dig49SnDYLbQe1VAAsXhpauT3nVjuzMFzSizhRnj8QxYuSqSDE6QQwS3hVMgQdEhP9QCvjSV4PtyzeEH",
  "key41": "zXZgU3wSxoC1QwccD2hMxVTP6yaYo3hBhP5MxQXhCE58rpC91RLLc96mM9uMA6mTeJRrm8DkgzM1hmAFchXYXps",
  "key42": "5427sHiCjMrCuR2KF4cKzrCjaUhpi2r4aQwi5FQpKhxbxvj3iChYtSBXrxLk3As8huQSUZggDHaGbRapnFGEF5JR",
  "key43": "5Xng2d3nbhC5UL6wipB8hQ5cc4TJWjvkLANpBkvWwRdiJaNkfqGRsvCXcEXVmBGs7xRvZubBcmWgnVFBU6wL4jG2"
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
