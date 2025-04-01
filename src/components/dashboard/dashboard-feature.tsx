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
    "duPiUvowf4pxLWULWSkgquAEB1pWWLDXXQ4oTr9jQ8q523A1gTBp6XFQUYNP5J6eSZCDzm5yEiiWd34W5XBxmn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gf2xDriBfSejtkk3soaGjZB5LaKaSPTGuJFfBbM4fZ8QGGBTFMLmG4NDxzCsNQz81PkRpZMo26rAcJKetJi8xp",
  "key1": "3QmwLzAcQWBcn1HMCVtr2dSEAJJxYuLAZtrLYd1MfgMJQTJ7oK9qiaQqA6T5GYQfARyJgoEoCP5jpMwFwGNX8A59",
  "key2": "4QSCn6JaBCspNEsMYDgcayg2deAchiQs3MryAEj9tt6BFPn2R1GC548b3hZ41YRwSQwPeti37NPN4hUN5WArnnkH",
  "key3": "5xxXcYqTFhHpGziFK2TJtnp2VkspQ1WfgfwxTLviaZcJ1bx4xLnFouEzan3hpyyhzRoaZqmaknNtNBHsjez63S56",
  "key4": "5VuDy6qHBQQVihywwVAwqLY43hvcFuawUuA9gW6y4y3yxBbbZQDYC5i5YnATs1yFsEhkySgEKAYcMnCFEZmk2v79",
  "key5": "2QATzAWsLARkUG8Gooj1Zh2TqVbYNufrdQ2rHPhwRM6HqMsUeELktABNbQCKG5dKTbgnxuKFRWXTuLnNgn4i8o2w",
  "key6": "2ZK3F8rsVBP3mrrZK44S5P4ckYvZse1vs2nsYc4LLpytCHs8cRhpCMtXhc5fGHa8DroM4jT7qSr9RkHSSijjUKQk",
  "key7": "4BxULxHxVzA9oeoQkhA27AM5bDt8UpgosRK9kD8KDHKZnvKn4yrJ7Mkgtr6TfrMCgh7AXqgpGKEprVnCnqLE9g4K",
  "key8": "37nZQkdXuYdSwGBnxcVbwxz9X1SHcj8EvWp6DW1RrKb4sB7qwWhM1xCHMDHKKZ1TeGxPfDCbDpM6tomZSHpj95ZE",
  "key9": "3aWoWRqfz1ZeyJZdiWYKW5nxTCJwAxL2XtmDM2GwNKTTuHmXoj33hBhcaFMcyLaBm8hvUCBWQNNzut3aasAHpK4q",
  "key10": "5A59QW8F9KhsQ4zxFVLgYG8MdNH9auexEUjFpxfjNDzHVBCdaHACTVKK6eo5PNY9SVWHZ8aFBSb2qjnSrKBc4JLg",
  "key11": "3gsrCrLQvpB2bCHMJnhZhtDGDnEkE3wBrzcgCKhEhWQ5gwCnfMg6vRaYo8qUqRvnsYSBFaZbFm2XVBikcPDxd6JA",
  "key12": "4Y9QdEUppHKChp3X5mjCXYQjEwKWUhUsxJPJpMXACH1QLq58kQo2HgHgFSfUa1gKWGLJ3w4pMaJGfxR5JKvgPSHR",
  "key13": "2omNfmjd9N99FUjAbfrVoZefuVLTXXg38K8FCm7j9KQWABq7VwGyv1ntT5RqqHCyHAy1iH6cDy1YRUcdEv3ciios",
  "key14": "oJp9bxvm2Ucd3dLJugEkoFkPrZULPkzNE67fZ3Eak5PjHesKrSshQyLPQnqGBakTHbQpDW7rPvWocsGbb8NXwDQ",
  "key15": "tEBrVHk7SPjbfJ6T1dSfzCtt5uvbJtsv5hwnwg9Wh7WC75wNb1eXhczWD2J76vt8LPFpxSUX57Dh94DsGB8yjiJ",
  "key16": "4duxriq1xGKksS9xFV37xW2iTru5bs7BNnA4NT8zN8iVfusHzkkb8ZUADZMp7BiSNZwXPCP7so5NmCswR4Kk2BMu",
  "key17": "3DtGwibhxU1YxrzzgLS6piNzMJeLKZRCGBj1f8HMYxK1J8ZuLb9FjB8x3AuZMTCw6PL77Sb58eu4qJWB5r9kktoD",
  "key18": "qCbdJc5nzEfnCXU6ccm9bL3W878ZDjpYKGcANbFeYUUTaUNL2npfw1u7mkwmwEpncJghEGtUShtmT6TFDU97Vuv",
  "key19": "5bAm56tZwygDtcpHHAjmQTMEaKR4CDYtotPH3JyZuSPdVAFUvzz1vK8YtENAmqaHTsbGtZYV97fn7aGMoCXc5Uh4",
  "key20": "4GyUP2UhbCKstZKpHrH9BkhhYGzHqEt7LMW68jz7bbMD1q6a8SE14ixPby1T9WhWVFbb98m6eidV4ZNPSUKptgGb",
  "key21": "WwtN2Y3trSj6kWijgTxbmjjAjsVazLQHqzYGVyZhvHDu6kjndTLQAua4ow2qygdkpSUhPEvUwpPdsYEnKeVYoM7",
  "key22": "3XBEaE9YRXa26CsHUBrdFESFruiGuYqZhSMXTZtUePREEr1hRza4HGrzPTM7FuB6Uko1Y2QhahAA3BmzvnZfeVky",
  "key23": "3nMVvyt4pVyfLwVnFCZZvBE5AVmBHJ2fUKgdqRvWKkxc7YKL1SVh6eAG7TFyX1JSt1SojuVtJNDBs9hTjWAG8R16",
  "key24": "2wBftXCfRfamKi9QqG9nviGFoxz49Xj7QqD71K2RYRPnrRgcrqhW9aBdM4titW8vvzs9EBu889so7hncSo42LvFR",
  "key25": "2j3Mwb18XWCrNMw5PigYdzRRBA1mkJvo3VmxqVR3crNht3dxHr7zyPfsb7XY2g17N3TX8QLCpVDBQCFTzUP55EEs",
  "key26": "3mdnpBhvge3dmLV1qmocUvNrdtbtzwtuZ8g5gARCMikyEimMy8oMLEgzG3aSMQdH7aGU1MRCat6eHqFFPbqa75SS",
  "key27": "2bKv3CXDnaKNewsxpAr6PSgMWeoYKShGd5pooG9dk4zroxNyw3FX55U4VaoXNYFCiosNwyq3Ts9Q4X4LFYb7zC19",
  "key28": "HqkkqdU3W48oZK4WE5RCPTSTSYcqghZRFgbbMb3abLoZeosi2GUqaofGmPNcswQqSMSXcAYELRQjhg7NX6tuG82",
  "key29": "2URCa4jp9UCDEvAoeGrxxfF6rtCgcCw6FwLUkRPEsm6mwtpqnSYf3uKZhdSMCdSpinJLQK89LGpxLFkJEvviX5ti",
  "key30": "3yQU93ZKk2RAaz7B81WWTbGX5Y8CRACbxDKzkNo3V3etGt6sjH6wRiTXKxJibEBxdVyED3npns2b6zj9wna6SxFD",
  "key31": "4GhsS7nawNpmvobRijD4MndmDTpsbdyn9GmqroeVTcz3sf4zZ6cDWpHVJKJfWhFMH8838buWqSeGmfeVJYM6DYnX",
  "key32": "4NtYRq14P7p2xNYn63bZGGG6RobNKGdkCLU3BnDRUzMu2Etf5FyyRWaXzsBtZT81EggSc5D3vS7CpW61aTJ5V3Sx",
  "key33": "q5Ut7zDXQYXdeTp3abuBRY3MnMdTkbzpy7yVsgVhmWu9VhasVZ5eUp1XgDgPWT4KrVy1cGckaT382W38fpy118t",
  "key34": "3iyBfkGajo8c5Bb2utSzD67ubbsYDsAaTtXab5ePQ5QL1jumy6NpjB7Grnuc1regWXwnXrkrgHDdbHYkdVcL6z23",
  "key35": "3DKGbRHHobgnzASpu4EMngkKTTQTuy23jdkp3eyCEieRmSfcK7Vo34dnvS8UhYsurCAyCR6ezjEXdUvhN9ZHBeT9",
  "key36": "x6eTzArLaqE16Pb5bxUAQcVv7QWCMG2WJJCZyAxASChJpsNXYbJpyDsLDJwoTTaRTZVEmbjPfaqyqHEhq1444EG",
  "key37": "5VL8qFTSXJiH4KB4naGX4wo6DaX9FKQtFT5Wrks8eQtjUA5TnFks8St2xBv56LvAxwXDmFSDF9aGdChsm4sHjEYh",
  "key38": "Xreumr1BR2pgqohNH98pTzesSXyT9Mj4P3yGq6SbWhw7XbnTCzLmVA9GERKb3Kv4HoZLq1TTjQkWySAKweKZArV",
  "key39": "3GUpq9AR4mXPGWMpomP7agusEGMWoUX3LacMGdQMDe3iy5DGuAhEALzdApg5tWQXLBCtsYRtmXmELhjQKa4V4SfQ",
  "key40": "Jj8g5gwFPZGJDqVhb5GbmQoDLwvtc8ofs2jbAuQ6K98ZfHZ9BjGXbbfcDstqbyUSiahn1G3AZgAJr2mtRgW6MMC",
  "key41": "5WRXuMh3x96YEuDWVugyfsgU2TmadvWVsqG99nx8XB5Av8Avev9Mzy8jBAjs5Ra8HLRBp13375zQcWbCUCGg4hQ9",
  "key42": "46o1SMPyjcWWQrbUXqq9G5FbRaa5dqy4YTcN97vwReFG75YvNTJErWeAV61eyhzMCCQT7vcubwAko43JnatNTE19",
  "key43": "3ZMpsdf7LLWuFZNamZFJ2AJXTCVjPRgXA9GWMRcGyXAYpBv6G3dmn7Yfk2fNg2uyiHxgYSsSRidNDxN4Ee6WHaF8"
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
