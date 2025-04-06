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
    "3LWpm5ebxc42ELPSLTg2TTxhWdHY946wFTuorh5sF2VcqybCDV2jgn79ofhJxnRWRmHixTeQEAcEtSfZHEQVzEtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXHpVoABGuK7M3saEyU1iSi5eYNKUdx4JABH9QYyuh8Jbme3PM5Nt7fjVdwyZd5JGqJht1cXZByCiJbsSkev1VX",
  "key1": "2E5KRuMrzsk4d82LVbMQAVbWuN49gawSnmWTMAgyhJR7pveEA5qbiwa7huNJPNeALPM9ixTGypmRKMomtsELkYZW",
  "key2": "4NULH72mk6SVMsnuDmH7MgT2FgSzTwd7ZGYYi12nT27RwCVzRrwAwpgdR1mavFDCHGLcDUKwcDs2zrYT5efraPnj",
  "key3": "4cVMhy9jBQ9afGgRQkxGA7kYhNFm9ZsbT5oUwKchkfXeW951m2trfAWWwB9ogSKcsyK1x8c4Q4Rdx3KX37pj4jmr",
  "key4": "4AkbqxHhKsGmqGJd7aV4DkaFb1Cru1JD2T8XjMfqSua8DQRnaeWNwAzzE2d3xkzMWMDGPaZyKDTBvtELtR5M6jHx",
  "key5": "6NjVW8FQU6gZDyCSBxLRcZo8zUkLqYX2394p97p9oLND96gSRyWsY8fGgghChK63Qh1BawnvQQWc8DCG4GhvFZR",
  "key6": "3oynFc572y18KAxYycA2LF3TezDrbKDpbXdH8er81zFehEypwDqPx6RBNH6wPfz255YcY8XvWTYzWceM9ojunWyw",
  "key7": "3xg27vxc6fHwXMRK7dR1FuLHtmVCmnNXwFJJiEC343sz5uehwC1vX6AAf4Uoen7mEdxvno7XRrB8T5je4uStRC8F",
  "key8": "5DDw7xYVSRWFjksBQ7YH3E5vUAwnKkbAAH1p1Rx8A93zgfJS6yKd1dr837xFazsGLYmxcVLfPC5ZoKDCSusww4w",
  "key9": "4s7XkzscjXCi2KU6H2qsSA5LUzigdCBwAoo7PMWpZQ4cd2srQijmrS3N3smo27hPP1SqkF5WfaThQnoh7YF2noWb",
  "key10": "3WysREFpwAZp3TojmDkozWvK3KMFMCXGAooWzzhHLEknmCkuGnNLWY2a85o8TkLgAgHgM56ToBUrf6d5Nxx7MRKt",
  "key11": "3Di1GQk8VGeBhLMpe7JcYAbbKYUNbBYqpm32Eh8jbtZby7oNYh94KGjeLRi47yzLWedSvC1BZLxqihebAnB7JiyM",
  "key12": "2XSHtA6xdZpStGUgHbJsADWpaPBjfMGFbS2Jgi4zgR6j6oXLnv1DDoqtqJdoBcqLaXLJqRdbakvA9PqW1yNGon6R",
  "key13": "2kyiangu6nbErKz88tqfoLLXrJ1uqt93tKfPhYE1QYikeQjFRR5mj4fhp3n7eY3b8hcUsUx12k32kSEpUixtmvng",
  "key14": "3ih6Rh1tnQJyWN8y7bJQ58UYCAkjgyZhPpu1NBTsnUFUrZ4yDsD7gNDhghibysEFn232TUK8ypDc72qpoHezv9XF",
  "key15": "3Zf5kULLwGEEAAdLqebmLyFtHtqRsE5r7uz3mN4rG94BhbaPE4Hk8YU7XxGzVrzZxmo3amN4GUYabKuYqgi6AeSt",
  "key16": "4zD72EcFFKDrSDgWJdcftxb4d1uWNJL9qccNJqS7H84Ka1nHGXsxpFjr96UNLrWr6LuWzq2mv2Boms63Qs8AGrm4",
  "key17": "tmQqCLgYMRdJto6x7nSdUEjJ99gAcjUdmwHSntafHHATFKLaPCeUTpYHTq69bPZC3z8yhuN7kA6A44M2FoPaHtT",
  "key18": "126rz1JDyDewrKDiCRxsWAra4fWQWjNXRc2T34ENSqThqTwRk2pBedfttiZq5keXKXRaihbUL5iLyYPRNQFVCzMx",
  "key19": "32Rwca7agbXSwEHGvcaTgB8Mw9zkU4iuW37Kvx2rEoUQ1JBJQENwHK8Hgep7GCcFqGauVRXA9WeuSCMq74gKTJwB",
  "key20": "3ted1cwkXjEnX5jfemZVpubULcX77b6EjnWN86WspGJDtnAU1xLSyBmY66LNVeQbdQ7Us527MExqUhWe2JDgTxZg",
  "key21": "4cru2SQtqHM2PEfdRbDRWLrx8FVHx39dehKAi1xVu9LrQwHTYFMDTtnrQRzGn3WcBXBL9eFSjR4dGghKoSkzdjuN",
  "key22": "4tbSVCKgCdw6WiCW65N93Rn6VKXo2ifgFhQyUEMfzPL7ak7nbEkG97zN2vtwBaD7kHFoxsizSyKRSFd768XTBQSG",
  "key23": "2Anjaj957VRMB6twDsD63vhGB7QReFBKpe656XFDQefmmL18Uhoryhu8ffBaU5djJa9VZtQXPFkCMLxNbLf4ahhN",
  "key24": "35V8KHQU47ZXjrc3aMdzqZP9jeJgNBqDZwzM6MfmgGqWFe82b7eCmWMFTpvEAmB2ajHBm4QPbRyW9PfKKKK9h9EG",
  "key25": "3WB74wdMbfhFcVUj662BMXzigybNeDjxvmHs5w2zEfATE1xap3sMefC6G1evKbnRrF6qoAkcWLS9XsuryWAwHxNy",
  "key26": "2oNA4pznYtmsgBRSWYK1oLGpHrxVMV711qLUknNY9ox8LC98uWdigmittDMys7dA3FhCLctDrbD15ir1Y1gQ9HVi",
  "key27": "4JNcAhy7vvrikGFFzxDBXF2QwPRZtvrDSgdNLQjAqmkwpvZH9JzxdCgDx9K4RLC8ccGUGugY4yiN8puFMS5P7pxP",
  "key28": "28PFi8YLBtQYLX7zA1MzFvb9CHKrsFE2KkETfYhsV1CmYoWQ8wSj6iSVrkdSgGLweoJHZHh9AdS7wVdBwp5GseYs",
  "key29": "4rYManPNxYwEg41JtVaGKd132JWmEu3GZGbLkCW9BB8iuY7dKCsG5iey5CxJWV6CvbwU39FFgUtQxGgvuXwU7Cec",
  "key30": "5sJcm2b2wB5hfTRR8FcKE9XS8LXuz1Lt7o5LHfduoFuCuv9F69aBT9gJJRiugAQegzz4tgWYg47N5aSY1bCbVo4B",
  "key31": "3EGCGR1qjGS9RCGoENPxm8dUjvGAqAaTmV4pbfhojpau1dHdgxGgtU6uZuVJNBDQwZPa6XZ3NsnBPsXz5thGvZE3",
  "key32": "4KfFc7pRtkcDvGxkTHEFcpUnF7ryKSshUBFTwSt9Pbin9rReKgwyBAg7ByCx8MJNHE4PFzE9k6xqJpBaR3vM6XS3",
  "key33": "2ZGzkNmHDRrNFWY6392kFamQkdHDUJ9iTVmd4gqFrGUuoWXffbgFWdepfVwafHQRWuNjeUTdAFz1opGxsRHM44ZY",
  "key34": "5aAZTas98aotrpucE1dTvgwcyikaVQCdcq1KRWj8Y47dPHpGD3p5woCUcnn6uebzTmBvRLpU1rT8gR3AXvt7xCp8",
  "key35": "3TBYXmw4kz1hUtWRyMcDJZ9Bf3zJPiCNQLiqi6XbzrgHPuqX3jeeFxnszTS34K84casCkzPcLkMnFFuB5u7Tp6Dx",
  "key36": "3vgr9RnVveh15VyuF5TZGinGn2eXDv2o2qDP66CC4LgGKLxpwWQ5NEMsmpWgm3PWqVJNmptvz3noY1Yp6UyuRJdo",
  "key37": "5nAmyJTd1MGFH5SZSsnUXttcE7pRPxASodZG4AqjebtSnGnoncZ7bHE71NaBYwutjhLQ9mH2HNUp7g27SivGFqZS",
  "key38": "5B8HkTth9FHrAfUgdvpjTUR1nyJsg32XqyTT4L2AFjihsd4GpAkJCsg9MdW5LUhYyxPA1DWpZRczFuWhdAzfDtzq",
  "key39": "2ELG7iEX8VTqozreYK6u3deHuRxfEBApkRMnP9wcGWtnfZEnbpc18Z4dtW4RDazXDmRJXPu3xMmsYN1BaWLy1yYe",
  "key40": "z61ZQT5iVtLdbo2mCiEYjMPwTzd1pcf4NncfSfk9fDGNFMSTky4KAaWdSqbEpLPQ9yEnDhxNyftKJ2aPhpw72xd",
  "key41": "3dkvnJRqAqUpq5L8bLHRLW7dxnwThqBTkRA17eezoAJdWTdaL5mEP1aeC3Fa1rWykPU321F627n6J7g9GHvcFfMY",
  "key42": "4zyZPEfVvoqoPD5kXA5jRfHeuqmCAyNcatb4RsJypcEPizyN5xNarmoRzqFvRAc2rMD9SPz82v6wQjxcQYnvBZ2q",
  "key43": "4DBNmucsmMgzsPLHCNdeHM2Fj1tkH73AAZy2Byr4VguvgoXXbh8xx8AePWgArEQKqR8tpo2Ad52Zow37f6tk1hRf",
  "key44": "3afV9DMnxyrzQRfPYMj4bAWpMBYYdsstT9oN6p8WMwJyTCxzND8jtiGW12rRiEoyW5P6xLkAJ6cr7DJVQSdnxaGJ",
  "key45": "4DSJwD2sLx7V46oUGpDASVpvFRFWhpfSRzr24dEN4CNu2pRae6xCVTHzJ1zdxGB3mkirNww6xQ2m6uR3NZgwmrqG",
  "key46": "LyeEvxevVg1rdNP6zZwy2SZohWrtT4VDkxPXu4AoUSdRNe5E4XtDx4mbwSrh23X7YEvANBnjBxgCADgcRu3cWQ4",
  "key47": "62oomdf6ppmpqKEgW7njAsLnQPtsbTuQMfzz3sCfFTTvFRziFWmcW2zE97z6JKhhEhH35opPE1m57p6Ni9jbqo51"
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
