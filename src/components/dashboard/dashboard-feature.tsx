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
    "62d1LAxjL4Ms6sXGCRtsW4GqGqxESFRHuZ6BTxHD4weWA8XxqmCvm4vnUDcRm3bbqPDFtyZT3BBaKzveWzCKfgdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AHHxn3LywtxpAKGBrC4dMqvnytDYfePcr6MgLU9tcian5Zx6kzRZg1yJgxjHmTc3o7w5iTMCkqbj5NkupD5dEf",
  "key1": "3k9TiHjjN9uUBoMkB1BLDDYvjUKH6seUHsuhcvYuYMkXdYTSSKh5ViTj6gdAfrtSfTat17gvExqoqiZd2jTKsvYT",
  "key2": "aSk95qUPPQGepxjuvpvfVvnSCLQD1SCyJB61wGdnQYBwwi1ozLEWUdeBu5LsysqRk5iAshcHjzaMLYWkBGpTc8d",
  "key3": "xWg6zqVQDnk9bwbM2XyrZT1kd4xUii8J9E12XK7LoZppoFk68Dn8a4R7RjpqtoNS9EgLKGHZqhKdGe1pjM7KPA7",
  "key4": "2udHwWoow6Y2tp2J8thB6aXt3XuLyzxPTp8hb6L9aPV1Mgr4jh53QuaqwB55FCeiDCqeJCebr68NBiudLy1rV2qT",
  "key5": "3beKJRDQna6Z9rgnCewLCDainaoiHcktQwDPeixN7ro7eX2hrUUi1oUu4T6N6mfeCtUphLZnphVEFDE5X3LPo28A",
  "key6": "TZMjpwJg52qYF5fuxSeqwVdxkuD4kqLycQ7EqY5TJKN8Vrv5aQWxNbGT1GYwRC7CyxoZrSAKbDBVLiQcJo64MGK",
  "key7": "2ucMNRnwPGbzCnWiUWh5LGHvwhoCTVRBptdR81Nc37bwkUYY1YijuRjt9PkRxMnBEJ7zoMkyB45BeJC6bZsCzgds",
  "key8": "5mQz9B9Q8QCLh8mwDuRx9Lxf6bEUhboXrPbkone94VNusyrNDkZCVCtNz9h5NMGcLaUvHF5DpY5GbWnUF7txUoef",
  "key9": "5eCTkLb4fbzBWH6xUSYozjesTgaPpmmroDB4PC15zFCWviFTAh8V8qrYm6xZ7zNdhVstakG4chu2yTGQ4tMki2Cb",
  "key10": "5eMFJQ3f3stGX6ZBqcMME3WYGamQudEVRcWmVYsokGEor4doHycqhXAjc9sda461AFYFfXXsvhnxvRXVnykDRM1P",
  "key11": "49Uht2voDWAWRyrmSodjFcPfoEVx7nMY9DszT5RbaPoSHEnFUGZ1ANHkGfxCkEo3ntYgsRCrPgWeEm1yeNcse4sY",
  "key12": "46qYMfiE2t8ANJqWWv3YSe3fBj1azUguuasMhqD76XMFhTpvKBrP7622E1mcrGoQs4FNx2LDqW4yayxdXM8hCy6U",
  "key13": "nXA86sE9Tgk2dwzx7k3yZRenQyRLYvpYgiED84kwu8mGSwRckuVR4UUVgHCtVcuV2LKENir767E3m9VPS2ve41Y",
  "key14": "5eTQU4Qn1FYycHvaxUgWNwk9QgmFQXbBBnRx2CGQLGrjha3zcQtgz2qV3t6skjUwK4vMgeTNrq4L8qWjc16GjR2t",
  "key15": "3Hc4gkdASN7gX2buiMnnuY65riE9PDTJfnd5rYanUsXCwyVnL95CYVMLceU9549V5AVzdiTkREfmbcepEMwYtxyM",
  "key16": "5DXvwYWXMU1QngvfzFDWhM5N4usvMAgyw9qd73K1udhT9DJ6LyT9qs5DenM5bjArSzmSWVXG8wGCJnuW7mgBAZC1",
  "key17": "2har8SvB1e1FUf1uvGHwk8oQNMidpK3g3jozNM8BBJ6qVAd8HM8ycBLq4q717TB8s6ci5M7raJ3xQMeN7AVz9Av",
  "key18": "4qKApiaKu5jNG1BULK8s6CA4qvtRx2teJDLEjHhUiB3HVvZTjhafh4MMrtGns95yHUUnWwojz2f8488uPmroPQNd",
  "key19": "LNHCxDiqnXwjZWHLZcGtj8oGFk64evkKsyZtztbq1yikMgcz9qFtmLUZKPDDPCxLGpoZRGMmgFkQ2etBrhY6z1s",
  "key20": "4NdnAndwViFJSdaYVmP2Ra4JXQxNzP1Tgw6eivgixBPt8cX2DLcXxfxAesVv4zQ6gvwNPFFAbzdCCVzQDdBZSLXY",
  "key21": "4S82mjjJ47d7NJ3KkX3bVJx9XHzsdH4yiQuPGrNc2ktvKGxHigJFqZtGjQ2rxpahR8mGnT7D3NMNkDvYiNyhcCmy",
  "key22": "3MgLNF4ZCRcgxibptwzAvjhgLPmbgdWmbqAsDjvFxPyEPBUUg3uGQ1VSZxoQCFNBVzSyYmncwnBVMrGBWC6gawcG",
  "key23": "4MEww6AwKZwGCvCvsXLc873VWa49zEWgrMaJmWhmyxmzkdkznqwJUqUEmktgQJddQ92WAp1uP4K5EH3PE41Wcb9r",
  "key24": "2XrcutqHjnX8afUzVVJ3pGEKvQzgFz2VzUaYPDQxsyFaSdhyD7h4Lnfo49cGxMAShmJ59uqs1ZoQiykDHtma9Yah",
  "key25": "7HGPzkqNzgcJp3YxaVNKvEahrd6npmxKkgUbKVU2CXmFyBfmz9kYQEvkgHm9hEv2S9BDpQiKGaCsvVVMt5TqDsM",
  "key26": "fADScKNzvxrywjPeoq8Ja3rrtazvByx5fTnTuEUSHGg1pwxy6dpmcEfxTSaxmjECKZF2EC5xUAU3z6dPbDPNuTG",
  "key27": "3XcXdNtXw8WffRSYtNvRr57AX4krfZDhhUoy524dHTAQXuVfYxbfcptJLg8MAFpTDwNm8riRvKB9E3mRXJArPUSi",
  "key28": "5fGumKgSUdsFJxCU3cPaWYBtZpE7VCgRW8zyXetZ7sqFvQhUQYrWbxzf81mHjfMKNNj4L2J8CGpWEXkxFYskVmeo",
  "key29": "fFSDxcNcnf9wiP1wJL9ZojRpcPfjUmMKdr1X9zniLTtn8wUzfBKrYSot1uQPJ12wghrvFueaTY41msBM2Xu8FT7",
  "key30": "4Hr7PBUezfskw8dtD6EdUwE5tsiJkkWZbuZufYcsQBekXdre4ZvbHJHJMBPkB2NpTQ3sCvqEE5TiaNXYhGhLCsEN",
  "key31": "SQCGa5ePQrh3UjaFhudJHSuxYLvSySCycEHHCJvjC3xWp8BAxKyBS8m5DoqmZBTHeG7fCX4QQuwajfvyvewEE1f",
  "key32": "3bnLs6vK5yRN2dgU6ozsuTBCMks1Zn1xdgtxfzBmwQAv3JzroKxCE518h9WVEkiFc1Fb1FNzgMAH1GLBA39Qop9Z",
  "key33": "42GpEQTKsCTzWUDrY3tLpYherfFga9MF9awtnRGFixuDRfVMduFdhL2VtAYQvyYxXwMHsfhgBQQ3ZWx6KLdFMjYt",
  "key34": "2a8tVWr14RnZ3ZT6sMK7VuYiVYthcE6Eh7tfQbHrSPrk3K1EXFT7ne3pbjrn3WL68Je63qG55jSgMhLcSURXDqMk",
  "key35": "5mtqtod9KRTQmgo15jhzJfaG4YC12FEb5dgqSP5TeFN4m9ke4vZAkhw3NVuRxenz2DVtqn6xQp1R9T8wcKd9BnxE",
  "key36": "4NkhV2VEke4ESsNGPzXenygg13ABxDfNmKSPXPftYDMAke5DiB9d5DMkuoYvWY7xYp6gK5VKQC3CcKTK93LRndAS"
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
