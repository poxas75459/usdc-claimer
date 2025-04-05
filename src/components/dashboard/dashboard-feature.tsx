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
    "5ecnF6sap6Mt5udBMHscpC6zEdfDoMAS68HAywaS8FVpF3wG6DqCtdjmsGH2aNcLjNjo2mc5nqcVpGxgSACCJpkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTTn8QE2AuHpice8gaDDMbaDk4CZWecEGSwUkHvXyGE4pTJuBHsqpdYZRrq8H5Yzbcb8pQXdy8RDpbNVhk1N7xi",
  "key1": "pAQmeqnGXMoKjKTE1PDmjRGdzfHHhC14bLByeJsgxpj9yoveSRFDVTLaAjBcZwR3JDtRhZNcZ1ynHnXMvUNxkiP",
  "key2": "1NE4TXSqq8Lcg513gWEbqxLHpG69WhrZVfzEb5YVZ7hdK1YRS8h35SdEtV5dSq2gcZL2QNimKdRifWPjguCrJTp",
  "key3": "4FNdpxSuTS5yMgW51YdAxQXU7mNvS3bLhPYB5DJc6jGdVGdJg1CyYrLKL7VSC7mTycvS46d7KfxWxhqwfKKMKMa6",
  "key4": "5LF2BHKgjXnGyohYk66SGBarjJQdMreHRRFH76CiZmxHdSzBmQdD94kAJniJqFJm7sHzUMr2YGmsZNNuhrc3gnhC",
  "key5": "3MbPhmyk4XSohZxEoKtRiogc7YEDhqisiHCeeiuhMAgvZWgBjsNvfmSc77bcRuznqm2GBYFgXc2YieVA5m62tNdE",
  "key6": "5mHKYg4dVrpA4KVPH2rG7nhbfqVUEjhjPjnae31g2BA1hWxuNA5ZovHojKEFHY3UnzALGziExyzjeU9PpTWA51Ng",
  "key7": "2csLSN3JqZ6yJtBBLLyNE15bX4LeQD1DrD3JaW8tJUyRBr7jW1henYj4s9S6ivxx2vb4jo6tCCi2MxXThBBMhbWF",
  "key8": "49Yp52QCqCEFgLjZ2XWBnYtqFTikjQEaEx8JLsCHnkGtzN2JxYP8UpSTdUT8RTBMnKDA6r7NwLDWUZeLaA95nD7P",
  "key9": "4xmaSfVf7Mek5no9c2SRzLNJzDyqhGS2S8eR5uoLzwnMfVapqcCLgG5W6u3fqgnQ4SDGbfZXydp5Xt1AAG5cDMht",
  "key10": "66C298axUgL8wbSwxB4moG8smRvaaG8YzUCcggxFjvgUyERYdWdrNHu77Nh4rncyuVBQGPfFMfn4sZz9akZ6kH9o",
  "key11": "2VjZuU7F6ULFE7qL1fWD9LYJRkTJeuJiV86BJ9wkoZaScEWPYRx9xiQ8yio93xvHMYvLPH3vvaXME9AYJaicpDHz",
  "key12": "3qBiDNR9Z8UQBVpiQQj7YTU1qfsy2yfiBx21RhwibPmgqy5CFMyJqJvPAd5motrWG8NJ5T9kSEjTqxXJAwP5KX4Q",
  "key13": "4hZWvFC8wgW922x1nnFdBoTeG19WMbJAFHPZvpbf4quCXrGqx7WjhLPtNhWj6GWSGmaJAwtnYTWc7zy8QEJAKeJU",
  "key14": "L4stzSFSF5tWXLZ22GSwzdpg7K9ifNgftWC9iuLAtYqqVN3Fm2Jq27kEgjR9dfUJr6GLuGZVdbQwGxV15GEeWgu",
  "key15": "EmoiRaP9TGsPMG2iEyitaf3aVbcsBThMye4McPYtWQMXBv5wDQVtRcrGs7vCZASZcKykxDQHqQQ7CahppwPaYAk",
  "key16": "5gShN4Mztx9d5kHjWt9s8Xf2u5LKythQSKsWs3EhRUUy8vNmaShCTUegAX5YTEEikNh56LXSsvLS5MQgDbZXQF3z",
  "key17": "2EcB2gRGWNead5itq5saiaXt9VzWiseYp5QJk5DifgNBWw8baCMriRmsdcVhey9xJoa83QbWAmUZoVPujw2NNWzV",
  "key18": "2P6fbUqrzVktcZPdSuWyMqRBFWCMsoh2jiKLBncBVkQ7eE1tzFR3kCUMyucSGPWnmh6rgAg58yP2uYcK9agAin2s",
  "key19": "H2vj8i9dcQaPfQ4CL3yY9zWKgSZjPkyZ3ALLQU5qPLZGVCdpqKUr9dzesjvzGxn7c2CfgvpPj1nKJQHhpRG3Wa6",
  "key20": "45jiPtLbGQvW28fdETKP6R6bUiFH8Xh89pxtK8u6ZbPJiDRNJ1BENX4bFD9uwL27JcZv3LKh1J8SSLXvy54Qi5gA",
  "key21": "3B2skLLTzcVPoCE6CF38h3kUujG5VNcN7iucggXQJ1jimthys2zmRV4yzE95cGpjzLcTm2anSMbRTLLBTeMzSmoc",
  "key22": "3AjjVnCuBy2Lwt2ZpSn3Uvfc8joK7fzXVyQ1qLzoQHJ3xpSg2n9TL2ZVEBhhTE8Gehbkapymh7B2mNE2L8siqby7",
  "key23": "4YWR7x6xyubgHJgFGPdGfV7E79W2HsumgsU4vkxcURaxobEXbwxn4VeQ2tiAhTiAA8cn3sKo4am3gQfBgijjy198",
  "key24": "3kwd7Y3i8SJbQ2dA7MwNc4xb4g5ebNVmF86tyBjZGZGqvjAtd5wXGbMFzwDJRAHUnUWqErouMX3wXgbfSR1ecJaC",
  "key25": "3RmzNSPtWMkBJwoCMJ6F6qGTgsAvXHkidaB8Mpm1T5gN9KzVErB235f5oXdaPs9yyYw6gBuGwMdYFm9xjBVdmo1e",
  "key26": "4FznqkFsZwtA5AdzvuDhCK83RPK9Utzxnh2mEHN8qgAEJjj7AZctgWjsGU1CAD9H8pzX15FvMe2gBmL7GYMvbRzD",
  "key27": "2TY2jmHByg5ZJ2ZdsQquuxftAVLFjbFYp6JpWUQh5xVucGqvcPqkiLZquCaHV73MGtKeic8vuqFjdZoL7eHSWHBk",
  "key28": "4LNc7iSWa5gsq3R7TKtSdB4PfZPpFJqk2tvE6RwmJE1roq9QgWx2oGc4xEVE7YLZ3g6kqD5bvg3VaGJBbRH9bcR9",
  "key29": "4WndYZeR2EEhVFttZyBJhx52e1JahCrSz6oSnwNMxB9nE4mWDPkULuMvnTMnYZvJJP2QCcTeisB3MP6Q6YJE8JuT",
  "key30": "4oHah27PKF8aeAZmt9N7owVBNByvFTyE9pWWcReRUiNnRNb9FusViRCfR5t4N3dY8od6VRKQWkSQ5iDyQ2JAdhHr",
  "key31": "4qSYGt8a7FFDFvRoTgPQCDhYmAppCSAU87pEWTpgsHrdqL9w2i8haH2snGxGNo7b7WJX6XX9Jd2KE1HoVhvF9KBo",
  "key32": "FqaDXySWR2EDsUrTGu6MByVE8R3NQ9WBGHddnhdjoxgrB6M1nWPePkMLHAiWLrn5kL7ndRv6quV5jnCu6Wjxumi",
  "key33": "aPNnsUZx4663s428F58m1s5w2C5DTQoYNvmvxD5EBLnKxVe3s2UU5qvMVhcvw7hAfrL4VnGa9rWM3xKqVU1fC3K",
  "key34": "2qqpCo48VpAQ8eYkTR3NVw4gUhb7GgoQ6R4C6xpTwRUVMYN2WdB2hdriG4gzu3hxf4hXWsoS774ZSCsVVPFuR4Jh",
  "key35": "31PhHpb6zK3gNkfMw6E7moMTmGafAZQrDQ5X44m9DcofhDmmdWUaCLuh7BaemM1phKr42wxjHFYE1khkHTBsENyg",
  "key36": "3xNbVE9qPneQNiLjfxerg2cEyuxHWh4UCYtzA1sWh7PPyedRXRjeDPdLcXS5B9sCjaMUZcyFojBcChPn1wNux2un",
  "key37": "2cB9oxm1uRmcng2CAV1QRV7CanmXzfRmmmPwPNZcTzgjNpcGazvAVoW8Yk29uhcwSbyP9uhyeBry9hjCGE8mfZH2"
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
