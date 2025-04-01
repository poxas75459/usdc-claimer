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
    "2QANtPDMjh5t35Vnr1Yeiafsxsfbm4jPQonKrqeUM8R66d4246hbVpQ4Na6uMZgeoZANbr9hdXb5CFekppfyRwga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEsCoEg8ypGZf9Wox4WG9RxXtM9oZ5BRiLwsLJwUhW8MPqKzbfVGdu4m47arefPxvvzRGAXJeXzmTcKbnQWnpFS",
  "key1": "61sgeKnmqEyiZAiVXAPB7GaQ64waHP2Lq4xrcJCwu9ysPoexhyZTx6T8coYBMpWEnyKnXdYf5xvaxxrkHEmnTCoC",
  "key2": "3N8gLTtd2c9e41ct5NXAcMR4VvpPuwycWuoZwsAuyrHGfXRDkcmCuyZi7vLjZ7HX8vSTdiBk8NfBd2mQnfhpLHVn",
  "key3": "3KnvrkQAFuPkdFjtS6LuL6HLpRzJTmtrNfVwj8LoxEE8XwiHVifRjyZf7xmn7dJa4ynPJiPdpqh4nXVfYnpKaWuS",
  "key4": "59Fy1qHWrkbMbedA9qrbHc84V64oWnyAMVJcRkwX5R8azr9tX7Jypwds3zk7AUrmjfEZhM4nVKPszMEnYzp3NM7n",
  "key5": "2gFf4QyFK9FwKfcSndxEqkyWhckA4E65imqyptQ8JppUXJeHcqHSG3Azq2w6wNcf6kTeebVDhA5pQtMw5t1cNbUC",
  "key6": "5PPeWfBMF9Am8cHAtVrDTygMNruVSfKPCyDvaFgq1bDoZFXPsXpLiC3NYrYF1wegzHZm7DvbE1Yjtv1qt2i29Rtz",
  "key7": "5JWbtPEhaahUGdU2CtU2TfspPKoYrUXh5NVocUsuhhRGYHdg4n2fXs4aoYRSb5duUzEt1pLa3UqZT47fxv59y5ks",
  "key8": "6SydrscHs1hJUnUBGk3fPqfcq8UbxEoe3Ezkw7SoLBHSTYM1QAz3Smf7e7RD7EP3j5fzaWdi7qNUJkGUqJnvThq",
  "key9": "63vvtT41TWp3y7PzxfHNXgi6tnvzkqt2NRd6XWKAnbfNxQFhaniZAz7MXzGGDbCEkoQAvMENuaCWRjoM3Q2rF6fx",
  "key10": "2gagSPDBxBUGzLm1B1ecAz7W8KvxzrFpq79r4bhJAxbqC1cvvxBp6CzyoS32WdX2jjHqxmZ7ue1b4167wrx9Ug1K",
  "key11": "39PZ2bC7p9kWfn5Jo82eCdNp4RZ9gGmbzqRcUTe2JP7BzW7rdVyo5bgQ3Z1sx3cLA9FnknZW2pMwAxHLXgaLUFcq",
  "key12": "34cqZZYFDFCYWRXGYdCeacMXJjfSei3tY3opfHuJZBupDuDg6767xVFbobfYXLUN2jJwcBuQ4bzJo75o8wE82CH2",
  "key13": "3rCYmj1t8cnqt4CPLjWU87u86T9TVCbvF5jZJMQ11hFQn2T8dfuRrRcmfjKHuTowwg6zokyoSPbDCQnAa4GB8LCb",
  "key14": "eXRArB4B3CSAzNigKDYDyVgktuU3h6NdowZjfAhDU8Qoq39df1HnaY2Bi9BrEt7UaDtSLLAME7cykMYgrKHbiiu",
  "key15": "2ScFThUCpgyTJySZhYmxESPDafoXXcLuynucKmcLB4gSjNLpAKhLepWZsgaCrhd1LndRW41KAXUEEk8rW9CSNAos",
  "key16": "YPSjY4HJedkRrqPAMwuEwiPLTaM2LNRKd3xEViCwRScLFfFSDqoum5Nbhk7mZFJFeFzkDAWoij4DbZ85yU8AyuH",
  "key17": "5JYKwPVJqHrrvsBtYtStUXTMnwF2UvNmKiShHF2eN9b1TtzvzovCayeYJva9fJFHV5NfSN26DA6hXPafPr7d2kSY",
  "key18": "3ttptcSue2w1xpHVvafCy1RSVGCAVmHgAB8dYJa7XZSyc8XwMik3EMXjGdu28RfrfkvbxcRJLwvsVsjdxDmjA2oN",
  "key19": "4dvG6qMwuowFXBTyz29okCoXJ6ywsDps7Vb6JeiYHDxXjJtLJ9qXsVBg94p64dy3tWNBzZsapmLDDs5f2kfD1rNx",
  "key20": "aLNZgBknk5htpU7s1AdPvKMxpPFVCfrUnYZSjxpabMcKvUN8VCzoQeR9n9FULfHe2UyUtzyxmhdn7rFYHPrbFwx",
  "key21": "3GXAyVqjiNyyqvr6UqujtJRFGWR3tMDEVTPpWGkA4m61uSwA9J5EwqkosDTMmu9UbGVBETfQEkgyt1BNNPzNAA4U",
  "key22": "5vU5nWuZnp3XR1NttRWHjGQvvVj7MyS5wnFzy81FuHUnBQ7UYJpX6h14aGJrLYUM1Hru6C6AWcwnfPNBEqC6faSj",
  "key23": "5kKx3Yx9fh668R3CzHnzKhajBLNmoPM72EXv55ZwTZWMb94TxqMmfzjcWJtUYx4iUiW4dWKo1qQYDX6A74REVyG4",
  "key24": "3dppy5SKa8EixxjHNud6GnronRhFSKXR6HUVRoeRSYWCYG2ET4LuUhbo6pDohM5y2V5g8ienNxCaVNSFNo5wpek2",
  "key25": "2x1w5gvKJMM26n94NS46LWYg61KeqhDoveYJ5VhaEmrptPxwSouzfB4rfU4NV4X17kyChabHLkbewVkMayJvJPyP",
  "key26": "44u7ubmkkfwu7cwGdsdFvgzmz1qSy1uQcHHDMnQNwytbG2KsCnP96VeMjZhnzXSk5CxMVwAxPruR1WAWELVD1USW",
  "key27": "42L35oJf8mY3RU4JYmpN4Hk7M56j5ncEoAJVnmRPC8sy3FmRYfpq8kYeTp6FA2Wkd5y1rgYm9S6N1ogATdVtxyz",
  "key28": "vDunbuFSn38epM8JiggoDmDpeKLLRgTbTrG6B6fHaUiHv1BKyTf1o1kr9xGMmYgLXagTwGenWTDQgnXCaY7zY2m",
  "key29": "2S4vYMk2S1JuSNM9RweWVnKa86RXbR1NHDWxWmE51r9Z27AEWkySoxdEK2pQbzGPTBvgxk8YhHq5AZpFYGcUXnV2",
  "key30": "4tA68mUQAsK61K25Js5wY2JzKZt7BMi6cyfqKqZuVyjRtXengpMw3iVns7ZKRP11Wy893fcrYTALUwdQCPsggZ5X",
  "key31": "2ooRK1wdHwTsu6VcH7A7rhNf5CQ9qKHumkzWrALXm7JPJnJ441r8peYN72z27ySCXCspuo9dkwuZfBZBKfqUKfrs",
  "key32": "2k8cAai8swUoEtaSvwW1L1M9urzDdp2FYNyJmt2Pg9R2hAE9qA8Uxtu8Lgh1ee2P28bVctA9PMkRoxgWDiGv8V4T",
  "key33": "5ZMvozqhNT9x96VNp2Sb73AcjFzhTKSXGQTWRyJmfohkVbY3cdJZtxALFnAYh3smUn4FHtbcy7iyzisfjKS4rzEd",
  "key34": "4n643x3afSEddK85mhdkfLqcWQG35BHhmJbVos8aRr3Y5bpNp8JRUW99xF4vXkdmXhJFNeSFUJjt88n4wrWKgC87",
  "key35": "5ry1ExQprtAsoojoLt9juuA23D6XrUtYUfMLUSGD2eEPuYTrzbC6G6aC5mETsAAVSMh2UuUBhqC1CTbE5A9eKWff",
  "key36": "4ub4uNnf5coiR4h3Mqds8nR7omQb7yos4ZtQanDtLTeyzJDVQBuXpA1hVzadZhSNHE74rAHrJftntSj2FTcctFty",
  "key37": "41ULmkkW9WxDjoRrMFgVk7FTPro7CrRY7CvTs1d7zUoDnLicqCKFgXjt4MzWck5JCch9U61wPNH6WwkujygqUBtm",
  "key38": "3cwDEAyRuEE41SWbFxM8c2vsa9tB57wMf1EZq9ngCu9UUpiiSeBbsiWvsUdBTMq3HQhRRdSwYkhCHYcj8iAUJH8Z",
  "key39": "2iAwTWwg4kBRG1cFTRDht8i3PK95miXoSux5imRH5BrVLL4cAK5x1o18ccM86WFhfiNNLTSM89bDYzZSpBnZWQPH",
  "key40": "5vfmLsBascTJKg7ZHYqfMapoUUVYGyrMsqB5hLhk7SdUZKq9LjXQmt85SH9GvKQLV1bweqL1fxw9PrJ5WqNPDrts",
  "key41": "3PyA9rgHBwe877sC8UHgYjrXQfPPMp4Nwj3Gg7sr7ndZz8FkS5LbAqt8Pj73kozNqruM4oE9f5EcUrgZKeSX88fi",
  "key42": "5c77aNNpo6YXcqfy56ByZ9XCDdHa5fKvtTaFybdLiwfDotJdrzhyMMcCdFGikpgA3QXGCGMKxkpE8Y8tGXgasrms",
  "key43": "5aaSeEpLGoY5gRqrrJqE1xuYjzbzmvRUHUwMKFisdrHaUyxwr3pjSmeUniQevASvVKNboDpsEHYSUZucA1kcobwz"
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
