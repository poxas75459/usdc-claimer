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
    "9GpPsDtezjh4zMYi67aMKQRhUxKssZQyxyHhuBMB3Ja5mwo7hEW9t88pqMBJTgHpycaAvwD8WfSVLu1SskpFZmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26tYe4Kg68pve4jphVWWFgqK7D4JiTjbyoHBQTqj9jciLwwutwCP3yo6N11aB1ha1pqT2aayXo5BtvtL2nGApzUv",
  "key1": "4y2v25LSd1cvi1YhiHnbHVdYPWXUqm14C72oDACv9FcUJx8mgRtqexwBE2nPpgDtyT6zXnSvHa5sHBWr2X18VNyu",
  "key2": "kwAmjv2SgSK5qwwfdcx8grdMm4wrM2YbGG2RuGkaco4F3FQmxnzJ5Gui235CSpQndtLKT4M8qFDNB9hnaceXwxP",
  "key3": "3kK96NGiWWpvGbVt8J629RCgxhDAbp2bpFyTHpfCXmumDaxtiPsdhfCgbK47sfbhWCHi6WBDdgspDsHnwtyLB25J",
  "key4": "3Uu3NbRdJLEqG6FBWJyK86jhFrofCE4AjKYjs2VQ9wyzqWmpHdHcQyPe6JASrZCWnjtuNVt8iuKxJzdgfXEneLou",
  "key5": "3JvkVYWtx5EnVDAG3aeCePfnz3dzUYDjr2LLvLCQU9BvwFEW4tsrnUL83B675fUSru7CYx9MRSizgDF4X1EFd7tJ",
  "key6": "3nCLPBbr5iRA96LVxo74gsCY7koP7RA3Lvj4Guo8oN4HeNPpPWG8Qa8QhfuPEyLAmjYNLdt4yketshKeWizEroHo",
  "key7": "3CkG7FcACGPec5RanKUSuwVPoutTgUaWSSUnLx3N9ZAkZW34HyZQhFD24QTHopW9WQhWkBAQAavkjsV1k4iLXxJL",
  "key8": "5V3XQKp2u2LjEAhAomkSEkumwz31aWXnEUWXc5JzAwPTyfU3Qo4VH8LbHuvaAVU76bucyW2bKkP7iBmv1zQGXRuA",
  "key9": "4zHfKFUSTnZfeMRYnpkpWigJrGBgwz9vL9gGfNCDt6vVXWAB8hzBpHS4AXbb2DjEuEkAJFJAnVib3HQ8JfdyhLLx",
  "key10": "5LVLxw38L8sot74ibaSeEymddKKcCG3Dabvzza3VAe8Um474FBgi6HH7tsGig4kTzXQJv4tMDWKMyGfRifYRUJQn",
  "key11": "2DNHJkEokJfEkFiTkL49xMrL9kJzzq64KcCW4QYko1vzUQijHefJeoaX2PyWzvG4GqvSXaNbJRujTkCd8RzSAVd2",
  "key12": "4getF5xh5gRskoeK1ayCg1DMUjBiRR9K5t3cKbSwyh49grUXBPYfbcxgWuKW9oVVCqSpRzMPQK26nknFAwHi69BY",
  "key13": "3ijmCnmpnikKffarh9HPziwdZCh3RcHLnCKPFu8FYVNv425YJHjL6qj9UNBGLTLqNwPV3AYu57SQ6PpWABAWex8f",
  "key14": "28FUsNYxPPZY3wQinW9mUw4zk5okgg4LpRyGaiyhEh2cVAFM8vsSvMh1JYeEGf7xVA7AtUMabM5iUSFgh9zhQc6G",
  "key15": "4BFzgPpmHy8pB18C8ymmYeA8ZqmPwb22YGfByBmk9T3JBBxDx81B9p46yajc8v8X1DpgWwagDSEbLJBDTSAXTuFQ",
  "key16": "5ysZRopFQWHLP2BbtDUsGvMVqXTyei1ySMtKwAAoMSSnaH4daAwmQCLGfgBCVVkUxWa6zY8Mp1CB2sZMVmWFsTSw",
  "key17": "2ttaLLtejr46j2WTLMWKiVAumhFWr1VBdiAyc538PRHkN4qY7kpiUncmkZQ9mbzgnUhimZEKFxNK2KrSHKpNuAQd",
  "key18": "5S6suYQWsCH4uQNaU61GJw8e1RkMpemMWKi1M27vcrAhRz2mVdE5e1z2W1n3MWqbsqm41EPu1hLcjmUMALf7vL7T",
  "key19": "3YcKqD2gBRiriNAV7sWCNN9taMgg6uZkXjqVPTkauuJxb7C7EDwz7sMRkXGL2yBf4DZpFA7fjQfVvePty4E5F3pD",
  "key20": "atuUQmsBSEUgQD96AAt86tUUv5gESUM1Ua41phh7PY8mEaVtCvC4y67Ca143RGo8j2rnZ2ty18BQKq6JKAJUBB2",
  "key21": "3DirqCDoq3R6UM9hHPXn4wjYgzuxqJhbvbDvZdNkt3AYbBFgyzKUs3CmeuLSQKX4HXU2ttUyT7EPM4D3NKS6kwUe",
  "key22": "3AcAEq3rtP2SxVecgnaq4dU1iwEA1NBiJMyECCjSTbQirhuZgRjiK8x85M3nKfcTD6rNbDpyhUoJYMToPFpNrg1g",
  "key23": "65oRSvBiTbZzCBjghNMo1RNCE8uBcC8keDdQicG9zYTzgbZVBWrLJ1M8vkDNb7UyEoPaP7g4HLNvptPXfx2W9Bu2",
  "key24": "4ni6EB97YL4UAKLK37oee5H2tccjvpicPwET9QKMxgS8MRbEwHARK5uaTXga2MA5J5qG3WVQGgKt19zzDiyodXxS",
  "key25": "xdrN3BAELshSwpT3iB5nrCrakGjrGem85kGAb6aAqvWKLF6EiiUgqffaYG7eYeNPZJiqjcvstbSottcybPL16Pt",
  "key26": "4SVoPw7EL27B1S1iHcn3gPHGzDX1ugeLHunZvjG2VebubYCdf2zADamy1D8G8hsNRWZaUK5R1UgHBwMRfxyW8Z6o",
  "key27": "5VQ1GVwuvW8n6Edw8FnZYgSFR9egSEd62HQ3PXc8w3stvzZTbiPT4ExifBQ1BBWEDzFJNp2X5wPtMscy6Rexm65p",
  "key28": "4S8UL5CNYjdUbmKmxnRm3AzSXZm2asFKaAewugFkpsqPpWZrw8VA3trNkvt2ya4Pb1Dbm46sbkM6RmK7YMbv6RTr",
  "key29": "5bQN8R8ShZiomYWeJgGxTeAb2SgnqzPho5CtgCrWs4dddFyvcWcTK3PmyiEFVvbeNJpCBQPtrvV7J8UXL3VdMhj6",
  "key30": "4dP4jkWMAMxSCfNH7zb575jRdQ1Hkmc9jcpi1g1qPxT7i9cR17NcUuz5FAGQPovqYHfkpMzLasrSceN4Eufj4dSM",
  "key31": "5jzhREPCa9YD44iMmRthJwoZ1ZRPikzxa2vzfunbJxvSAgtkiATU3kJNHnrk4TT4i8hcGhJkyU7LJaNzdo9HRkBH",
  "key32": "WUJXC7FZRTmWsNh4fxpiwuwt953zB2Yp1yFMY5BLYFNVMrbjn47PUbU8fxahyAWKesS1LDknFqbTALhCkk4Se2i",
  "key33": "67YJUwBCgRMH6zTNXbL21etcsozUhXSK2vymSVxvEhqd91QbvYPqS5t1unkTK6hpnqHkRMANyMBbTeTn88J2ufVe",
  "key34": "3G1zpWDpJNfVRMQaPQ8LfBttE1CEF1eSynYGJLp2HGPHxN9ZZBWEsa8YbjBC4xZXUrCqU14kZ3wMeGKbRLMh1hmj",
  "key35": "4nks1PkHpbj6ENwBnwh4mxmpL925ttcrCjtVFv3Ntg4WCBYJpAR7szQmBqMzmuUP8u3sk7huJRMFW34npQELxpkN",
  "key36": "MxJXnv3cwU8TzA69NQTyt1bF7rSEUxDeS5YykDW4AwWRYMHHLFZPCNo9i3nEMQhJZEbHTV825XXdpnhYQG6yKyF",
  "key37": "4jagwJtYpjPEuNXfFVMki4Acz1Vzh3b3AMqsWoKXb83DBiicD5ATHJPQzTqFC7PyJ7NwJx4KkqpjacUXe5V7CNQE",
  "key38": "Yq5UZEiLAhvEGk5fHZRqka6Uic71p734zjC2MbJsnnLnTMYe1a5Jc2hXMCJE91JSuiTpkWhWRVeaxUPUhXKkeia",
  "key39": "5q9qJwrKPrRLdNh6YKLV9bKhBN5aWsxK1wrj3rSYyxwbh1ZF4ZEm95H78paLNjmusWHP1d5otWgxzC1aAa52gkiJ",
  "key40": "5gDSRCDJJg79GdGEbxgwugojGiLfoCCUaojQgEdb6ZzQLhZj1yaWuxgb3cxnmmm14kmuuWb1LEi71cGFtKpsz9Ge",
  "key41": "4DSpykLLQv3FhvZGnpcAGq6By4miSskh9kEgdpkC2mqSqfjLn8SUMLRRw1XsNszdaj8N5uwP2U6hArY6bnHi4jji",
  "key42": "4D1PBmuuqc88jR6gTBnfKVRHp45qGN4dNX3YHnSfrDYJzWW3oBuN5RK5QicpHw5Qe1AWVcAhP2uZpHaPNCcQnHw6",
  "key43": "5ewY8VxiWyvSFcqUZgQvC8CfmCXyKGWvFG1uUdm6t5meTZMJxErc3Pw7unrS7JCn5RnPAMdEWoZQdm7dQVFgESkB"
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
