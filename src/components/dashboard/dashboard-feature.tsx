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
    "4qFtukKKTtqFtPNaZwPCjPpQJWvXghB3YZsy5Lew5b9XSxAmE5ornWT48GrQcJyiteQEFhNL9NdpfixDkrCyu3Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459Rh6tkb3E5JVaAp7ocoKZPGNJ7SAL18DEH1yUiiFTwCq7RfQjedvEgpmwb8Uo6HzQYEBJE5sd3ZBX7mBQkzjvU",
  "key1": "ZjWfeFauQhaAswXCzEcyEqvxEego37BaFSRf72V5r8beZH1eJiGtqtq5tYAMQhEWTADycFgwedCqGgjFvfjWW7m",
  "key2": "43d7JQkboansTXkqU77p7ra4KUoMSfURVvcZhq1tQ9h7VSgaWjn4Nx5r1661XWv4Q4LwEBy9rkCgTBDRXun14KQx",
  "key3": "58znGStU8ExH8rDyVhohn3R5DoRP3Rmr4QuZkagimKoymjsNHQ7VHtzAd3vnk2zzuBKSGeoPzJcPL94oRB7F2Cj8",
  "key4": "4qwB9MEcbTVNTHjViy7sv91QNaRVNmHVvnbyDmkPTpDo8RUTCKsXM8XQM1x8Vex3oRpc65CdGowrCwyGaESjeQyN",
  "key5": "4teeDxpA5mQ7kfcHMKg69a5ims1dK8LDXub6mkXvXn8kGWT5P3gxbzqHhUU2Y3djNeF1SRHY9MZwj1msZQXu3Qyh",
  "key6": "5F3JCFvQTgm2DjBqz2bNvXBeXs5gq2w1sYuNthppcAZyW99m6SCEDixc3uT4YSdZ9xRRRnD97LUr3un1X2WsTXqH",
  "key7": "2XfRewNpKqGm4vwSGpLpjGAmS1wa27uUX2NCqtfRwwUFyCFCG738TUrzuxuirD3SX1FpZUD7jiY9WYW7F7p2WrpG",
  "key8": "E3FbVDUAdYnzty8zWKNKLXLZw6fU7VCVgR3mbZWTp17Cnub7K8aWUQXkwkcoHSfTvp1Kdo6LxMu1sRpKZZAqXhr",
  "key9": "54HVYysUZhWk7ZPKEhMyqytFr2GEVpjGESLdPPCAeLfXiFCroUD5dHFdi3GKAf2z8Fp2zonyddaWH1JB15NFeL74",
  "key10": "3ifuNqdyACTw97dUqvwC8XLYnu87ec85sUGAWpryZoSBz632L7BFzHLReLdbVDmLi1kQwDgvNvU2stmvVaVW6Mf7",
  "key11": "3U8EoZG7WFeAmcWuZvQsuGARonvDmVbeXD7a5L3zCXERCAf1d8R2mfvhQ69NDZJMzFXENDFYDbq3PiBuc2o5MdSR",
  "key12": "AZerXk9aStxnJWvp6YgVVgtkJ6UYk7ZGEuMTC9SCfSwe3qz1V9tHzfTRPhhtUsMf3ikdoUD5Jy3aiJws8oTBqok",
  "key13": "53HRP87a5FooZ25sHRx4n3zZbZhGewZ3F1XejWxAsKCmzxXrNE1TNKAhomz78NCbjsgjH8a3QrtMzW4cDYnQvb5H",
  "key14": "5fLftboxpSG6yvwuNoNt3SNX9tP5FUzegf8ayEfhJsjUKaiRC3NWVowDSRHHPTBwq4V9Hn7k6Lfx9ji1Ehnw6coK",
  "key15": "XG6ccsrVcEio5YPy2oquGCefzAca9VkR312S3C62r3kf9U5GyN5gZSbSP96y3X2Y9BQck8qebB7niunmBfNC6sv",
  "key16": "3kMrmaisVhLT2LecxqVeic5Bpw3aB3dS4EsTuh5mR52tsimXfguAvGQG8eyagWNgWXbf8FX6biDS1AzPi1nYAmEV",
  "key17": "2eorBC536K3W58oMhKN1AZSFEmK1whVF3zWa6Vz5hExU53mzHDXG731cwg5f7junViSG3XQrJweASDgrJWYJNptU",
  "key18": "4NPhiyPHZd2tAgjp3vHUQJWgf1qxruJoCPVaWx2inVqQxTRFThrfTTHa1FaxPSsUXt5DWX6aPQwaWCpqxrN7AEHU",
  "key19": "WE1srgUFK7Luj91D8uHgNj9txEL77AwFwrasphDwBaFXs1dyszLMxhMFYp6MzGe9n8fMt18VK9XExiE38jTSC24",
  "key20": "126SJ1umabteCU2h1S8uiwam5sqQuX2u6qUZzi6AwdNQSCgF4w8q9rdyzFLDZncu6j2Hwb8rXUFo2om7XZ7QkpdL",
  "key21": "1eweVtH6JVsp7iszARv7zvZK1HdFvYaDcgom7S1VE7nDP66HnJC8mcrYiRt6DmH4v98NuAyszR4ySiJsaPr9Xi6",
  "key22": "3mYWJWUsD6Pno6jqdxwKHP66sQpkbc4m2WwFsoJyFbWo6M92T5F3tY65F4cKqE3ia3yjh4NcZZh1kfYhUQ7QXQ13",
  "key23": "3ZgzXUaieLQq9rj8P39FuZ7WbfmEkkUSgSNXFxyB2xrfLey3Z46w7KxotKb5Y5hmeGpYVVfEqp9tCB7vgS29sVcU",
  "key24": "2mSYYFkR5iJYumd7ao6SoyhtbrnSBX1hXrNj9bEHXtZADLDtNcFtKxaaW31qNHhYWM7UHL5ySE3ZQEsH8xNQDm1A",
  "key25": "2XtXeokZtUqhT6SCY6h7damvnUmcUpLm2oZQDTiXQL2ZV8DvAuwcDUG95FSTvwkkNwcHywU5fG5TkgTo5H32Q71f",
  "key26": "41sMN4prjqeVwKghBVBWqn1jeRDG95ZEFERVjqQ1sqYNxyBZWgkRc1bitdw3MJHeqrYFeZwKqCBYvvQoFcELFDuN",
  "key27": "2EB1KBr7ApL2KYWqPrPTnQYcDLAAMYCya2p485HL863r1tSd66KiZWsFCfUoucGgcCVtGcVxY7akEu1HswHH9kYV",
  "key28": "67kgH9NjDvbLMRgMyqwnfVheNGEsvnQFdq3r6rU3McTiQhKCKjQkSFuCZouHLhEdsDobqDZmBvb3i4neyCtfrKgE",
  "key29": "KgdfwacLAPx4ue8X7Xk92QfiBxebCEd4pbg4UWd5NNDfwgpUqzJWoK8Ez2rf66UxCGUBE22MChhJgPN6z69onWh",
  "key30": "2GV3fjrN8xUekxMCKUEqLoKMRP15i6Sn4qixhgJH2xwL232T67h8CmZKarxGEmAafFVWprXJDUWy94k5kXxWJt9X",
  "key31": "2EKcNPUXsvcevcUXRwMJdqwMqUk9MWhrChNbwnzR8xH71dms39VacpW2ua8oycH61C42pAm91eVEiTTRbMBxNxtS",
  "key32": "4zXQ6kMFsG5XdKo2F1aWa786g4X4K5mnNi2oSLzAutv5i2aCDhik2eJnUhsufnqgXxSRHtUkrmri35QNhPPErr66",
  "key33": "54ujTFn7HTsfn7AYJWq9XLLAWKRdVsRm8y4gnad4SQy9axSXoTjC48BQd5ajbpoJs9r8sKMNNi7hAbGykt11Xywq",
  "key34": "3kXc8dq6zU8ynU8SkhP4ViKRZWykMhJwohKKRUKpLFvQSDeSaRkiqPtvsStjSqk2sGpqg3hMrbVVzHJiHr1J3cjs",
  "key35": "WDSC6tFP3LbCXJ99wwm7GkaxVZ3UngvqFGspPcQZUS9BUcUN7eabWcCvR6y5h6ZaWSSRr5jhKA86gaBjCDTov8V",
  "key36": "2zuQWNB3L7qE3KgtvG9jmUV2rWqfkoNqLW2nAB2P2AUPYoMT4xyerW4RpqBdKDg5WLcE7Fx1fym1oWCYABDc1aao",
  "key37": "5nS4xPDiU7ryydHegnF3n9UwMx3EALP7R7AFSrvpXLHu8E32no2CcHhBa6a3oZp7E7hqsgaxzuQ4gtX7tyBjhLpn",
  "key38": "WGNyBbQAeHqbeiHnxMJozKzbyCx7F1KmgFY1GvY5FGo7NqQtRGCTm5KQFbJaNxPrwBekWbTP49Rsvn2U29YPCdi",
  "key39": "4W772xoHuBzK2NXYdTCTgqoEiJFSuYgB5QiqSTCLm9229kRrzEhgZJdnkxyt2Xz3k5zkE3QejFWJJpXBQBbRP2GY",
  "key40": "4o4wz1YZgsJVqThPwqeMky2W2D3QCBakn61eaKtLSXwTCPfutUfRjBsqHry5REikGAvkm5M2jjWJEPWq649Pt4cw",
  "key41": "4QCsHymbDqwp9zs51iYPmjML83iwcHCGjuxDb836LLux8c1BG69YNRaySsDDCrd7nQNUJT9cDSsHFNcdzfxiN4t",
  "key42": "54yYGhsvTqUDNNDzhkVwNMNSDq2FM7oJGMCKiZStzDk8MWdKAd4vM82cHXKUCNJ4s4kz9Nf15ZdmzG2w85fpaUzM",
  "key43": "BDaZSbXangAdibYuiJD8EmbMMtBu6o6B79CUsnN7NLU9n9GXtQYPfzHtfxpwH3Rtk6br3e8tTqNJxJgex6T53NJ",
  "key44": "3g51MVfTR7VhkrkxG23KJCT7E6iisfssgyJoyt1XiS1cNkZ5DyTxH39ZKpF1XJ7VKBERW79rbaaXRvsyzq8eAazU",
  "key45": "5Z8mkeYEYPBoCyLDNBo1d21YebqGzXQXUDpKtVTzyE3KzCunTH5R7Xq4kEbEiPgy6dp3V35hY4BsotAMAJuoMBX7",
  "key46": "GhXh9pMQueeGiDDVUVGTeN7vW6pjs8r2QbPGJLcMnAqLUsCeXZ5vbSZ6rW26Vnh9KcPx5vBTo4yaoTHrY9tprGh",
  "key47": "58LbSUWjVTo7oVtUEQLBmvF9TwjqNg6x6DH84tZ5VtjTt7GLyb43WnWZrcRiVnLXV4RxUyHzbNSWaz935butNVmN",
  "key48": "5L6XkhnVEdyiLjdM9dTWU3QwbE7Lse8VHXPZR3DJNTrZrkVCoDjBPnUfpkipasnFCxuicLSL5rFsjPs5zFACegFb"
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
