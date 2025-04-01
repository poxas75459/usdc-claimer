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
    "5gKdktEnLC3snFYuCouCiiFyxZToQB2fPTaTBwiAimfVyvAhQ45tvraoxZYt3ouwJESgAM2iDtEBxSJwePkrzVfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPeEdQXCcTkTEurLSb9Rn7Pt7CD7bd5tVz7hpouzMW51q2zHhUd3je1RXzJxG9Tv7JecXTen3RaVsG5zCYATvY5",
  "key1": "5TAL9LJ5zPNyQeFL3ZCjZEiBoVJ8DoYS21EhHh1vB6Z6b45zGzG1nwx841KDNdGxfaRgunfHXXamr3gzWzg3ZKSH",
  "key2": "4Cjyj1ceyED71UZ7f5z3uzzCGXsYzMbN2n3RvwLSG8x6kMWzTXXCi1SWk727SWGm1y6Jiqitr1sA2AinmKPpABi1",
  "key3": "3xGy7JJFFUzm76xiFxBRZKi3WLAerpsu9BcfJWQUGwS3RDDA1mpUJeTMHTBqkTXaYLVKF7xU8uYdLLTdJTy96FdQ",
  "key4": "2P4SRiSaMNEXQBXBY4avW5cAuWLGzkB5TyavdPd5hKknoej3qd2aKA7wNgs2KS7NABKz17gQjoWHRbh7EKqxkn93",
  "key5": "31Q4oeSFtj6yZmBit4MKXsntRSNhMmbUi4dvx6oX16fyqFRurmF7AcMi8rW6nHLjn7jvGywBxiaACsk7KTvMjwB2",
  "key6": "YDN4sdzupcBat7DtoMKAwUxw3LnyTq7Ps7uga1gvcnFemcRXHJw1EkNndHPXCME2BMifEW1scxEyLfxm1DyMeb5",
  "key7": "26J6gRaChbBhz7pZ4XqitYV6nxfPTtzrZ6oP2gJAc5AvSsn6v8ze2MEmuWhtHwYr4Ytuun2Bb4J2z9R2W67E7MT5",
  "key8": "4mfTHeTFxPzyboKv8k1t6nphXUYmy3191Qk8AHQVHHosLAGkTgXWcLbBGVh9Ku8e2Sr8wqxEph5HWiqsz1spdQiB",
  "key9": "4DU4exiPUAj3aYqsoVVBtvtiiuyRjyRquTy1m3CDJkLzuiH95xRX58CskJcsShRkcfcmhbbjE88ksajAAditzhvb",
  "key10": "27yWXjEMiWymHkCZXDabajRKRd4NPM8PjnP68EJEbKURKFPXre96f2YpYcYuqryo4pbiE4KqZY63JVBBpzxPDpAM",
  "key11": "5p5otUYR4X6YUohbDRB192Bm8JZebziDSYwK4oyLKF44Q4m3RoMBcz6thhKbs7Z8sadRN7WgoFg3SoRoqBCogDzK",
  "key12": "2M85NhhdFdb9dab8agkCVcJXwr5VbFrHWw9MzWQcXWfwc8zgPRtmhuKQwDHbopQ2K1RKBaEdjrxSwyWL5DrqT8wd",
  "key13": "4ds9XFMkqb5exdBjdqukLHxk4oBsYmAqu2u6eEjfiWRAibFN1bRue3av79s9DP9tAFPrbx9wUCjn6iCZjtMsH4oT",
  "key14": "4qksNzCB1KZKa1pN9EdqwoJjrAWTDRZaMbMQDtAvbv1QqR2UBh6G7gZP4LQvb7LHBiJFJiN4AXoNcQsRrJ4M9Lnf",
  "key15": "2aJbVpHR3WTD45Pnf45WvAp2oEzUXG9E699yHs3bs3P2azHjhhCi5m1uRYaLnxBhjzd2Mqv3owC9VXNQjiziUbh",
  "key16": "5CsZem9N7ugQZLezDc5BtzrhL5YcLV9W1ch3dPPboDfaffEQFEADA9JfSSjgyNf9JsVkgTnzN19xAR1zjLrprqoB",
  "key17": "v3s8sTy269zvp8Y5nbG2kzascvMcjBY9bEkUVZMipjQz7YNapLeSjPww91sgEUdc9LFismDRQjLTuS75n1RLXmp",
  "key18": "2eeyxKSgPiQoW1FnRU5sbUrHU3GzvV3H296Ex3Lmd1Uj1F23tTd5D7obDKoxDwBCA9M8XaSQ3RCmwrNaHVdp45D6",
  "key19": "53QSbgybQiyT1yfaAvtJeA8R1A7PsznXJ6cnRosYEiXj735F2LdTj7yNjHvohgyY71waiwpi7tvd6i3Hk66BLS5z",
  "key20": "4n5dPy68JgDmeZdJnV8hKQNr7JBVhxK8qTW8sJvNrzBEkhtTg6xwcGau4b6bmzj7x86UhZdzMq89SxVF6kFsfXdw",
  "key21": "4NH2irFgaUigW9bk5RDNaYaWNbkNULT7pjcuxifKJEfff2Js3Avpy3VjTnFKNF5k4GDXRWxr7BKSfKg79ueKLkYo",
  "key22": "3VmKLVVp4nRK5UkkWTuHaTBNLFCrgygf48YZR61quZ7YVKM59pue3cWyFUEHctwyKcxG7NtNxP9u4XNuGFMXULo5",
  "key23": "NW6ecnBVNuh5JFs7sjudLLFhMVMY6PXrtd5fSufAN9uk7rP87ZLfxVV5NFNCxaXWff31shAbVsR4Sx1nvefJcKT",
  "key24": "vT1dNtS6gXJNdygw2ChfU2pRPBhzd6F43wQpvskbXR2JBeqgmjCWiNvjkEHSd6iDJBsBUWuZxarn83tYxGgNgwT",
  "key25": "3sBnbAKnSNxPFLCMcGs2U5iVxJgGxZuqnB2tp9UZ19KB9bQtPGTq62vrDotWGuWzWWwLimJH7k7xmLT62EbuEDsU",
  "key26": "2kkv5ZESzD4pTuFW2WXpKsAASi3bLQe6w3SDjfgCzfjTvAdZJ1EJgBYefsMVEcwsHf8KRHBigac72ZLf1Gmc4z4o",
  "key27": "47r4UEA9qSn8kEVJwwU97jXjWSpAQosxQ6RqzGDZ6vhZsgDvjjYkKwZwciLSej5XMDTZeqYGmHsNBTg6vB6Dqv3G",
  "key28": "3vQHF7NXdsd9J6EGXi4dUHLYYG3g1zKDhxgvPMHgeL4QfqkZ1Ujp7CTXb73fcdEH5qtvc8Qvvi3ky7mYbXUnavuv",
  "key29": "574aGFL597LD2pvYo1UijK6Jo77eKqPkPhgL4yF6q453yj3vLZBsPq8oNBnsSWQuTFqiuAMJr5AeU4dcxx4maism",
  "key30": "5RyDrHmWagFb2nFYc6y2pGcGDitoHSeNQZLfo1kY7fh7fpUh28wGebcyfMYSxLmjtkPrKgprnpFa6YTb2vVzcfyq",
  "key31": "7CiJJz19fbiuj8iohjvsWqwLULsXoSgp5gi9Hfdu9GyZ1ESsStEEPXRkvTJe6m9daWseh3GcLpeoJfjwpM8Woqb",
  "key32": "579Xhf4i1RsyifDSND41KUWfiNndBSEJhefxZcLozoYMRXerKs2ALfbg3bJrGFtQFMawyU2FbcStwx8HVz1Mg6Lf",
  "key33": "671zqVaCuzsT18qYiBAmWpPWDnxoH314NEgwzVbbRc7mcwbKhKjJ2wSxqjXgi3WHucH9W71i51dYrp3W5MkX1Hu5",
  "key34": "5vuwNsDaU9KipqyzFrQhfpJVTuaNmkw2ubNztkfwUfCNeggYABvLZffxEKNhHw7TXWoB1KQ4LTeggxdLmKyRfQTa",
  "key35": "346pvnhz9Bj8GF2Qh4WdvYr4EEQS5ahSHbYJMTHxewpAyH4YpjWro3M8vZr6rT9Q3iFtSPo9HdpBqAGS1p3ET5Ee",
  "key36": "nQBiVwqyhAXx8aK1myS57rUpXPhStngbK9waJBaBPR4768WpuYwfb949Nuo3yHRhK4hRVat4h3V63WVbkHTvjpa",
  "key37": "4wHyuVozKGg98RfhDQHaYU2yXmFHpCFVqykLKxeH39ETZ48NDVMzJGwAim664mfFMmXBycr22VkpK93Y5jF4dZjz",
  "key38": "2CkouVSfZCnz5enDMdqsZnxVLq3oRNkUyTkNeYJGsr95BqPJ5pREhDJ5eRRoGbhcTysPHjCHXavFhRs7yzb57sEk",
  "key39": "4Z4HGHE23A7tYXZVVQL9mieCvbUJvsYKtSBXE4Xqbq3RsCn97Rxs8XdXKpuybtw5hprisUVSqGYtR9NLtdczjMRB",
  "key40": "633EsBaetP52N348yZVRFN3Nh9fvf3PoeqNd434egdtLtTwdhNFEEFcnwHqRT8Kqh3mSf5bpmuyBUJZRjzxWvnCY",
  "key41": "5yfhtueeWyckF1sdeuDWYjoLM26bKQCAMTB46WHi4uQw8XV2nt6RYacmChB4T6ChbrTU6koKp97Un9QVUj4CZTHg",
  "key42": "4HNBxsQuKXge75Rb9pfBMjCTNKcRJaoe3nUP1khcEgjqcHSKiNncdTrBMuvXvKNdQJkZibiSU8ScextQo2Kfhkdq",
  "key43": "3tENsH5YZivtzGK28z4XLkzDVNBmtvtDLfnGA7DVFDbLgMSJvoCSViaiM7jowLNPFpsFyFS4T1v951r3dANpHqs9",
  "key44": "3VzyMsZLcAPJ585ENLbNdUzoTFNHsKW3q1TqYPAsyTYJb9X5uyZqNyuRDPdamcRLVt6AJzdz8hzpC9iYEkcvAFsy",
  "key45": "5tpk52baHo9ppef3TmpCGMV6BDNVJhs3arfrwBxWQ2bM86yDMFSMZgJRweUup6MCtyTivpGFXXemBPyMSMEfjXYm",
  "key46": "2pFiCyf2vSa9FEiGmkunZuTkFG6Uu4n79Zijz9UcgcnGJyigo26Z833DfjaoUWLQr4Had2TNujcqVH6ZLDJR751a",
  "key47": "3Ue7NV62yh4KWBUgX6Mpik1QKHPPWXvVEB1uPdBEaTVTYbNYgApvNyXF3kCscZ2Ui82L9MxqEm6kgSP2yjVeA9Pr",
  "key48": "55f7sC81cU2gaLiCqxvhnBMeTE7K5TKyoebBJjWgLMryrjsrAXYGX4YCrNweNUgjogH8649QTxJFSMnjKQ8TngBJ",
  "key49": "3uaCRZpNu3GNFb2BkamRLfP7yaoAH82xMusG3Luc5rwWcGXNJpAsqj9fzuqojSeDdxjktSm6zaJYukzfqE7kQBej"
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
