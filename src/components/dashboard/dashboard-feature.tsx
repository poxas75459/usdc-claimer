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
    "2Xchso9fgBFCjeEnHtbzuuBNRQAZW5zuSzjZRvLpgDTR1HLTPV7oqgm9QmPPkJQV6MY6kSmo6k35fk5LiEr16buR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FgrB7XgL2uMyg5MGLbLdhFVwL1zyq9BuxFeBuHx17SHz17XzG5bQ3hpTe1EJi9tjWC5FEwQjKRNXxBUyh8t93zV",
  "key1": "2vComzNjdr5mXuHTV4QqKiAmFZxLrjbn8iN139WnEQC66mPZDt8L7pb3iY61VevXd2CjtoAzXUE4zCLdRN9EXPCN",
  "key2": "4LPX7nSUYGUmn2XhvpjJyyTSL4Lov8v56DJ4z7p3nJtW5JPRCtr2C1H69axndWfhp9VP7wU4cJYdzkXd8GwG1fPX",
  "key3": "2UQjrqfcLPJGbxF8venAoqGWhXNASiJKJx6WCRNwDdB9U8Zh3ZMNAtgLhkuECJA8PNLouvUQuXrWLUQpbMuGUfc2",
  "key4": "3BGgm3Un7WVba2sLaseGQh68v1x97JtbBREpmksrHvVqVQcFpHiBWFKcRyspZutMFVavmKM4houUm7b4Tt5qrHbg",
  "key5": "3Gv9xX13S8UFkB5bo7ycUnNRSD94pVGbwZYgcCZccdp2SEt53c7GhunFTuLJ5fXjLBupFH2wKVmoPbbrMctDUVJ7",
  "key6": "65aRJ5hUGtyJTCJ5C4kuQuFGAFWAeTXtsGs6Bjx2u348F96ybjRCkwLJsSncyrEgs48nE87NaWPVwktSKkoMzp4",
  "key7": "5mgNPrpCmC34BwcjogRu15rn6ArujS5eVXiGqaYA1pjBXeHxgGHKBVYpj17Wb3vkVMgdbvJDj8TFj12Kg8VMZ5XV",
  "key8": "4wN8ahMgQXKFhdNRERSwJjqtXUDksBnLFLvVC3aYYMaVcomNoqD4Xv4KfhfopKixKeQ6b2aPQVN2FraVgJ5LzCB7",
  "key9": "2wVm2qTphfh5c93Nuho9bzrruQL6vZJT2bWqt5jqxqo7jFoie6ocxz3j1XWEvhLecGhCeatfNKgYefrzsAe9V3Th",
  "key10": "3YYB3WDRLKNJqc4gqx9kRiArd61qNyEv8bi7d97KbH3T5ZEedHny6gvn8VTmpdxKTiny7p4EEDhYLSq8grQk5Naf",
  "key11": "2oYNsydzyM1gwv4baDPFFtsao9A79GpehWe6Cfu3u34dyBTqeGhMzhkSbd6ued7b2METD3RDgmVXVG1CoDtmQ23n",
  "key12": "5PTPZ7zNWBTcYWM8zq3pA2QGX4LAER56S6dUNSwVmQ5oa1eJvUjvzTgPddG8o8TvsbEnqZ8gs888RoQqzgKDto8r",
  "key13": "2AkcscX3KUDDxndfhwNpSHcU3JQVUxnKytZxDfB8AN1Vyevm65H38ximvGHKq2SJ8zqZukfHddSRrecFAvJUxyQy",
  "key14": "4m57xEXvkLYysQHfq7i4pV2DEauoByuH3BRqM26hpSWFrrtC3a7LHqHprrkj3XYoT5hE4Tyv7akpYwmcwH7R9bkc",
  "key15": "4Ax7NZftAtZYyNx2L1HDf9yzZixw8ZCexnU9YfwDFd4zo2sbxNfmGvCk7TbpYG2qS9UZmr4soAxMjudJXSyXL1Ws",
  "key16": "5JoqgtmCzcsDsSTmGQqcmc1x6e7eu7gzDGeMVBXnoPMkwAB6jDj2dyeganBRSPq9zp4zF4EscmvMogS4LuuUkPzB",
  "key17": "bWPvPFrhY77DaEdcDoFj5ERwUi9ZTM89ru9mqZiPnj3CUmdXbsTutEMGEoEQrsGjSctq8fBwX5tnWJn5VX9LyC6",
  "key18": "2Zcw8XYW5jWonEH5xCfWgzmkv7yvXhzCdZwc8zUWKjoABB1bJjqhseTNaSFCQuCL9BzBjSqucNKLXJ8oSrrKtfGf",
  "key19": "2g1Gy513mBnrcVUpo2cLEab2TpUKHqDJL4aypTDLe91VmrA599EPur4aKzMKA9W3xiWWuRktz9kxNpePt3FLB2Hk",
  "key20": "3KuCL9rEUpPLT2cmp2WG89pKZhaTMqRi4pUXvaCN1oZLnPX8pScnEEtn2QYZRSR8ZraBBESvRXvAhvEzDLH7n1Py",
  "key21": "2DV1SfVLYohiEkP3Ty2pkYD3EUUmPphaVEWrriKnqoHQMLU254WBB2pQRvJtCGioTotY6NwhixpyRWu6iSW9zm5g",
  "key22": "673HMVDcQ2NDSXJNtNu3bK4crUeg7nhxsCZ82NtucieAAxyHnJPReUN3Nvs2hPeJS817WnpqRCVtEqcgyk9cQz9W",
  "key23": "4LHMeTMZehhkvbQsEbxopbp31Sz654ABi1ZBSU3AdiFzqnh9J3b5A9LywmUnzD2sqeTsGCDUwenXnV16LLSmLv8V",
  "key24": "2u8ptMdhB9gsGDQVqyxHAuxCFcbfWNGsLhWtZPkyaE5o3h28F6HWxZwyUZu8aK83p7g28EaDwwBrWybGxFsix5MD",
  "key25": "5kErsE2XtA3GSUp6QHbW3AfAVNKCHUdMennXv2bYqRw6ytRcQ7kbGXeBqzjW11P2foXFpenmrmzTBKG2wC1pWeUf",
  "key26": "4CvvawyFiuwqzW3RA5iuepvtdwnDCb9cR8s8zhuZqLLuubNNwcafEPES4pnqZEFSNjNTeNdGdmTXpWrjXC1Sds25",
  "key27": "swqEyc25PnEPnN7eCC9957qmstcZekWSYSBvct8WuJsSydtwdnc2G4ozGLXmJGEkzVkYq1toEwVZ1s9iW5oyd58",
  "key28": "5JmcLfcbZ7YtzSagBZAVBkS1HFJyv9aHahk31iwSnfWQ8CdjU78JDiKYKW9ZLD1yBSrvvsDtZ4sp6q1JWZuav6xi",
  "key29": "2YcNFHBVpw9E4As5f3xpJVQPG7F5BosHCmBtgeWBVk6BozdWQ1xRWDdPXiwJw147JEoh7rZq5NPu8b7fwWd6qZg3",
  "key30": "3KnRsbtNxMYCp4Y6BaYiT9fjLUM7nEahTcsWz7D61XAuwwBVwCRttXPH962dcA3hKW5D73DMcpXELRT3e9oDuwGS",
  "key31": "5ssEdr1SSdxN6eF8WZNqJ52nHaGo8akScBzuNVJsmykf2jF6pyMPMEBcrBMfPeeXar4nNzXxh9DWMmGRtHKqurRj",
  "key32": "sf4nkjUhLY5QT28KjWgfNsq959qA5isnJZbsrZLXa53EwmFT8Ymm3Vkq8xnXjQPosCMK4ZSxm7nwyo6BDMTrGPX",
  "key33": "2YT2DqDb53tRNAEMqtHmN4UqA46UjNdiybr4P4wuJMSx9QMxsyV94VevNRg6gmP2G4ZG2Drim7vnSsxsjV8f994s",
  "key34": "2qEV1igtFsmvumXgvv8vC9wFA8QLX9hgB3LrQzP4pC2ELdtbf1aBAPciXXAEdeM7xXAjphfDW3BXj4AfnEcp2sim",
  "key35": "EUwQY2PRDn5U7JGwhpeXinCS3Cq7aWoCNTf5dccpM2Vpf941KXS2LT3TixcvQCHhgBsuunSVYPavkWQku6WakXi",
  "key36": "2K5utfBLa9MT1zjDPfiDyqweejSKdMGxJK89MwrwqKJymQ5DU4qLykV38QhkhzJo2SYUuwUui8rxzX7o2ShkVn7F"
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
