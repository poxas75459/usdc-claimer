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
    "4WmNcYcApVN8nHgLAfPL6PbZA9TsgMkEVVzXW4AndtKP7nX4XpJXcTAgEKnHav3CALb5w9GizQnH2euTmfRby6qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59WBBmxub2Usib1eRbEXnj8c7AaAn5ELLRcWMqSK2eWYvDHXP44UFeCxo6Y2XrbZZemy1G2TvHqSV4dmgTB9eDKV",
  "key1": "VRYqkjDaa7wgqoQ9DZgL54iQ3hSKgwLQQTX8H4Kbt9VmvUatxKCAgzPvz8yzvu1FFPAa9jMJ1r8ZWiUPKnV2Cxw",
  "key2": "2pEHrniVXraWRMdd1M4pVpKJfS3UDkDLZTUGqu1zexegQPiAYViCd8tHuZjTVDDC8eckUa5bgSYjjiBTkKo9FVBM",
  "key3": "qoAk8itNHmNgggH6YmBKfYrj6ZYgnYdPrgzHgY2QB5Beu5PwYAaYasjAYqHZosHALSDuEVbF7LJbdJUcm6gw1B3",
  "key4": "22bJXSw6vrih4CtLqv2gyXyNXRuWSAHiCqQoGxcNDhNFXVDzbknZvqBaZefuaXfRSkoe2X8u55ds2oJrfJspEEZZ",
  "key5": "4STFXUSKqkvEApgSvV9fHCWQkDTRhjWEi9BeugdzgHL95BWtR2gCiiNd8MHYrahZ3d8uq6NK9rXSUb3jY5J52b5j",
  "key6": "3wdd2WJzEUQAhgm2vgvpV2xjRTTq4xcqAXyaFypwKbWrfaR1T2AmBoP8A6EVdHCGAHDhyCzQJyqfpW6eCDZNYHzz",
  "key7": "5air8oBFpiVCcZBUW1tVmUtkN5zMHUsaKGxCeVCyf6uLrPUCvZreqGFRizVo2rqXNwZuei6iT6KAaoojXK7i78ep",
  "key8": "66n1QFB2c9LLZSJGzChk6soazT7KaR5rk6R5wfkxpaKb5WLkd6ARqJPpTRK1eMA8eeRmLGo9Rn7dfr3qDT5o9Kb",
  "key9": "2nrEgqs87BjZEciSsZdxqhCACbYJ2Cv1fEkMaRALzpHochHQFeqX3N5byhYA6GVpKbpcUfaFuSFwGDsbjGVMmWUB",
  "key10": "2Q8XqCvsLCokqkwUkgTJqY1MN7LFLSWgtGJUzVY8qa7MTSnuP23EXfnt88ha14DY5uWbvDvGJMgLAhzsnMMsPjir",
  "key11": "HubUFFvkgU6YZvtEiyh2Q7d9qBKtPATNDn84YkdExqFXJmQQKSNWURpdiotBAsbiLATBKtGYtJZoQetPaiPWHwV",
  "key12": "18oEDxLGhKagSf1RaZVd6J15B3ygoRWPR5332LvFMTmzMkVPCohfbta9YbdDyiXYMaXcEEZqFiUoULJLqjrjEQu",
  "key13": "gL97v46g97oHfcxJvAU15BSxHowSJq7GkwzFAAwqboWimVxzBXoRDQK4AmjckPz9y63547uCCWtN6LdyvNyWVoT",
  "key14": "SUDuV2HUhSARU5ph3XUa7cc2Yv7SWxj5jWsnzzqf3Prw9VxVeu3id3NCYM4VhU8sPr6znKhtnjPA5wJj6jrufbr",
  "key15": "5nbzp3U2QhsUVuE8ru9Eb1EqVJg7wcA9rf5rkXukyu3pGe1XcSG3kRJaKHYbeJoYN3cpkxVEFbDX9fi49nT7Yowt",
  "key16": "38iY3HpP8rrZ4upAirJmhtjxyyESLcootwkP18FrnQ5XX44giigY6UHN87cVWSp4ZjUycwavSUCyvqiTFk5mTp49",
  "key17": "3psSpkwEderKE99r2xGFeQ5LvHNgDNY63tmGmvE7JAjw4WXqch1GVBSiGTMDJpGMPWUXmR49e4KQsXwMtsjxNDts",
  "key18": "21TQ6moWSNtBRZLBbZ8odLsm4qyNVEvheM57sMAQNWBxAiXVV5PFEWvYMUHVXV2hjgoccivMMTsC44XBvNthxjq5",
  "key19": "49uE6oRmgQFnqjBmafSaGPHhVaT1LRcQd8YH1KfLpj2cy4ZhMHoJU4gLxae4YBFgZQkZyYbcPmMZaiz7TVzvkjFK",
  "key20": "5uieiqmRkPFj68h7WKSwUKTJa72XqqStntrt1vAQLxq3SDw26SbsS2p1mL8Fju3DddSJ8dNtgnkcNHcKcMAQSs2g",
  "key21": "4zFqmDYFbtN2WfzF8QggGYxCViHuf9JTAsf4JxmmbuBCGurpvmtWMHMsBKJuGTwTs1bxYrHxjNZSpvVjy5Ms3Xnu",
  "key22": "67rozrajNdiYNiVPWfDNWDvPkxxXACauyEqjYWPL9PH6fZipWnzeaEvrea91t4WggUJW1rKFw5efNgBzRHtvs8z3",
  "key23": "2S3SmhQ6e6ou3pNDwQTLBN4AVMyTf8JeEDDDbW8Qu8RRUURpm1S8FhvRzFsPBATtCy6DdHEcu2heJiVjhq18epUj",
  "key24": "5GuhocmMHYB7fopbmNA3oqzaWq4JMmfXaPcExeLdZY9ZCc4cYcsfD6ca2tWCvUdTcEAbpEVZhuAbLjFUf37PJGSc",
  "key25": "5BojFA7U6tLboABTgxKsgf1eeXBwBcAm9z2dsdv7Gss9YkqosXutPLiW5EGjcNrSC6ni1nH4NsxAeTwsS89tEULR",
  "key26": "66XgXBLpd2WzbzXtEUcXt54SENFQwij6f2tYqSNyECkxPuHXc2vr94froLYiYwAAYGANe9sPDJ1EqTqQNcf8S95D"
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
