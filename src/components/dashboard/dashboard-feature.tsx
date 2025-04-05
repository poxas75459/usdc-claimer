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
    "2wjUhRpvomJCdHgPTg7qLGAKzkH6Ys61Jtcvd1sju3eTCito6kYDdDwzieEaXeiytw7GPnwdXr7FSfL6sJnK4vXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPpQX1x4hjFHnyBhPS78pfkQDXC87XSa42n5uBhZLimDCu6fKwTHWcASKFhov9tndzgZYBwjA4gKVHC6h8inyJc",
  "key1": "3ktRztJ2yv3vtMv33hJdKxXBreMTDj2kitk18BaaBZtTRCQ763WNUBrgBi9xRXWjBeodNRpnKWGgxHrvC1Fk7eEQ",
  "key2": "ePwirXW2N51MwNGXQrg5apUKRxjeeHYipxJjSKo1vFJJ4uFHUgKvkGjK1VF7z9AKGjEMMdpoDxwWmw2QVqyB6kG",
  "key3": "ihs82sxwRgD4aS62kAxvfDxEZESJ7gRhKKVdyc2m7kyFzPNPmH8EXnWoxifqPbxNzewMeu8EhgPdaDdf1mkWzwp",
  "key4": "2GkcQpJFC59UESNttJdEMW27k8iouruR2fcG6ucgWvtytGPdNDGgSixYUxCzbQo7FSbjigXnX6Qy2cEwmSBrabSo",
  "key5": "65XHtcdTR4xSBUdAzMZ4CrEnPyVdM2zrofBUrwkPYNZEe3oevkevnKci4DkGvANCuVQwVTBfqMVPEoW7uvJsguxv",
  "key6": "5tLQZHHQiVp9oAGNFfE12tcQRFxTqVgHgjqxopTwqMh4ADUtg4bc1S3CxzK3PdbmF4FszJD1HTE3zk6qJViZVqDJ",
  "key7": "k3beDpWtVnDD3bCHNs6DiP4gDhqPDhhVatG2b5sV22Hoz17NrVrW8hKC8RRonScs4CKHzpmRAt5JHvgj1A5bbUK",
  "key8": "RbDAUkhfainEziPKaQJip7X6ngFcMqQ4cCCakJrSrFTaK6CG2UuTPuWHyQuBwjfuoEUP9wwmfaTweYZSVcszyo5",
  "key9": "5D9Cqwe2WyGPguxsZqkEF4GSZgebHBYFTx5VyA2BrMuorTZajEYGww5N2U9RLYkanWivBsMRyugo4ZJVNtGc5MVf",
  "key10": "5fRxZCpR95UFMnEgXNp9aXdMmoVyqDCpVSCvHnQD94NFVjcqJ9R7BPbjzMDb8zjrEKSuCUVCvCpe1TTh7xtHmffK",
  "key11": "3cPKZzCffA1NZnN6bHeVwNNUuuyicZ3CxFyH7Y4QprnxAG24ChcHzzHqK7U683kxVoLtNE2RTfKY7cmg4Yj81Thh",
  "key12": "29xADhX9p6qUxwSRPJ3Wuqqjzjk28QZHBsKovTyTFiVQWcU5wPACY2279pQst6HvnqxX7VdCcZo1Mw4mxsZeBFYB",
  "key13": "H7copzVV9KiM6ng2PaHkg7HcMRQUn6m9EZEHdZ47mu5jt9D4ZMZqJfKpZoR6fHJJFobGEtjTYaPPTDCC6nm7AsG",
  "key14": "5BoStAWf5nYurk2qHSeYNLcznp271AijmSRoB1XVpHQQK2VGw6zr4D5XDskjQGxNS8UgMRQ4iVyMyyYjJ5RRGEon",
  "key15": "B1HPtjCFZyZLXJFeT2uv6qhUfnBcNrGjj3jh6CPhMWTXRcgBZ1bWncQ9mFvgqsUyAtCZRs55LT8Gn8qcNtK7hUt",
  "key16": "29ffm4VyRJ4mVKkirbeo774hsjeDbeYFUTcd2QJzutqjK1CgBibEFzRbnSgtyHKSsMocda13cDbyEhTVpVVdSPYi",
  "key17": "3VWk4fnUb2w5FW3LcnV4EdUxaJXsCykJ5cPfcQPRgQE6RwE8YKPvZHA8fSeoztx5vSLBuMmDH8pLP3F5cMDtMZX7",
  "key18": "4WUTji43UaxVd7N4TMTQNJrVEPHR5XDfQKCt3uoMgGKrVsj7DB4e1ynw99M6pNb2DUGn4Nr2L8793f7aobDPuYGo",
  "key19": "65AvXpakLkJqUfDvJsrVRgZu9j2dfbzKGinnxnmTTouMPJQvD9yPp6NxYZMhHQ6W8JUwkjtvqBcZL9s218FCe6sv",
  "key20": "4LfYsH3uLMa2kwmupBFHEXQqkXFgnDMDRc8Qr3GSDuNe2upi8Ldb8D9rM7eBiD8AD9ScQkj2boz7Ac38jT5pMYeE",
  "key21": "5GHP53fi4cLr7ihuj3iVFrQ5DrZZPF7m1ipvmPJTpUSVYDswAgMX9zE3jLggm3VxhQBtf1eauLv5GcZxFVcneqmD",
  "key22": "MFLepuPS6KnFevydLQSDzcP1vXhhfnJLnS4BEA4TwadikkYdpiSQzJFeR5mXE48vdar4uMY7PprnwvcHf4NuR5T",
  "key23": "5qLatLsR2pM3yAL9vJvsY1VJbnTX4HiR52JFjhdNpfLqRzdqdvSg2hRinCAWkcj4AUGcLFYMWabGo9XeGgiy2XcX",
  "key24": "z4tj1rSKfnZ98VTAhoCn4hwfA4qKn1RcGQELfXNQnwdPtqAAcsRQG2ffL6YnbSEimHQjn7Gm4fURrFb94jtYQLG",
  "key25": "26XEEj8QxJnR4N3HkJ35vTNFbC67dQPycRpV4b9tcGVcRpwA6Z69iiUMf37fYtk97ESzHh2rKXTXXFfznRXG8MZv",
  "key26": "2gEpLA8mki3DmupbdfAuq3t3LZa8pcGseb7ovyrapv2NLQmW3EhMMjgiM5TdgMiwYcVjLLbsmmmEyMCSwN4arwaT",
  "key27": "btuhPwD9LFHLnxHxoKmYG6x7zcyLvXrjhR6SYi8xS54Qw4F1ihU1zWgLmxSshUUoPryfm7GSL75iFhtHrmaUuRH",
  "key28": "KFhX9hZsvUxiB1BoXgRkAgEuQB3eTSD7dAkKZrGd6MxCex35CBjwD9P4WXMoUpEj9G98zq4tE2fxCTFEwZd1D3c",
  "key29": "34pWaqqgbK2CQS2wMC94FrEckRhZRvFbUeJTuAE1AuVhRtQqKqrq5pe5qdy8gC7fHsdgwvdNTFrkGSCw6GAaCE1C",
  "key30": "RZcvn8Nr1Lvp2HVjzpXVUDTw2jsSoabxKAtjADamGFWuAXyLJPVjnY7C6K1pPbh9m1NS1v8ZJ5wcywfNrsJP9F1",
  "key31": "pcUk2we4z5Bcd1qd4XQeUBo4Jqey2Vp1Rqfgy2bhiNCJYMnUJoxWYxnCg7JETpBeeuYnpGmayymogVM1d19HNGV",
  "key32": "3SA3gNhH9TrU267M72HhuGNWFv26hVpwRGk7mbPGhSM8JVN6ri2FskDgxECqa6ViT1WCQxdb6pwY6c7L9UDhg3hL",
  "key33": "5iqGMdMRuNTpriNZzhA6QpRx8TY3Ca3N8WDqPWG33mQwfDnBCW5zMdGMDRZNPkx2xauPUvAb9aAyEv9fsrFq2QGj",
  "key34": "2MxJYbUUhwh2PQuTZj733QfDo7kdMM2HxEaFJCXjhcSM3AgrmUFEhPDBvg2FzxnsUeM6Mtgcpr4qCUWAvFtsdQZc",
  "key35": "q7JywYSDreu6qsuJkAoyvwucRumTKuGThcLTYVCWNFUkGZ5H8W5ZWxvvDVjeos2YBCXnYu1K9KTZnL2yduCuJa9",
  "key36": "2upVb229FtY5xGmq7Q89FXzydrBmMj9nmNGS241BQaFwwxigo6Suq9zwfZin7ZddY8cJPvSRaJmkT195w28GBiMS",
  "key37": "4NHwzKrt2vE4fgGHBRCyEbb2GxUqK6eiKwVZhYrKMSf63ddzmAns9gNdJnUsK4jAh9Kzj2JGU3ckZp8M7ywnp7Vv",
  "key38": "2kx8M3eAHdifefZ3bV86PSLJYsethGBg1yiE3C496kBuE6MuvkdQGetrZXAYMrzoYx5UnoXqJB5M2GPdbR8xBTtK",
  "key39": "4LXoLzhBgSBL5289FvuvxJEbZ4TZMepkBCWSh9fPWnfgBuu95MjuJ2J7A8nUeBctBdVLESaaZMce8mKf4CxQnyeh",
  "key40": "5tW5QdrTSsEEAh9Qxhv3htjVkyw5Aq84R3dQho4ipBmhom9b7dRZFwGH1kULHNUDEEJuNi3jEKqcrvZT3gzjBzA9",
  "key41": "4CSTo9JSEfywtZc54ZScQb39aa2edS1dWWy7QGA83GsBs6HXtwwb4vjoUtgdPFU1VRHdiKSfx235z8TYQNmua9AQ",
  "key42": "4vasund2q42jU7BugtfLNKQi5n4TvijcCc28yVWhbxffC2NHNt8UjmGiBoRbsM1ZSFL9aC6Wy6BsdBKnfbNzCaGW",
  "key43": "3hjody5gCqsZYWGU9KVsAPJnnxEfFUobjqkAHRB6nKnkTiMukAtp1Yxpu1QDLkYt9jD4Nk1M1q6EWhvbhaUF5ZX2",
  "key44": "4oemJkUZhDR2zsjoA1MSsDB6y7eH2bVS85m5oESih5qL1Nrr8JhHbTs6wjnDryL7Z47bsnst34u7AJtrUBQ48VPg",
  "key45": "2jP7wYCazjv1hvxujVJSLBhE8QpqGc6i1bSEXMRKoUCYNxPKJyGoM6iHP3MREBZdqm4X8A4LxbP4pB3iHY2PHRcA",
  "key46": "4hiRv3Dj1sjd1UYsFQegzqZvj9VxprFqxvaqwSe58kjwyC649gVDEsRDkUEu3JSqbeMadS93gykGgSjUDMUdaLvx",
  "key47": "2fceT4iSVaG5Cy4JA5x2GVgmrJfUBPWWXVMc3NvCDHdgxW4QALqLFozaD5KDcMDAFgXYZVq5ia3e6UhgVDmZDf9B",
  "key48": "4NUvQjp2B5rtHu3mPcN58koHMHPdLAeT8ftJpygWPkWd82NkLY3Yp27pEZuucyiAVosreEYsP4YUxGdY3gEmLHie",
  "key49": "4iSMWyepsQKEPkdkFfeX68cK3cmEbacaXXa3H6r3x4emVDUjexGiRPEXNbKeHSLSoTFu4xYpUsSZnArt5qPsk3nS"
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
