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
    "31RbYFoyrxgJM45dcTHUXbfeycmGfDK3ywXEGYD9zHEmZwWxuZu3BnXjrRtb7JnKyuSZwVgRhS9GSV42F31KQprc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9XqL9n4f3zKUxsAG5VVpEvQdce4sKYvPUpQWBEYz9ZqB483CVvyjWkyQFNvva48p1QhDQbPZDA9BfoE2poVvDT",
  "key1": "5sDtaSKjtqfhTTFZmrdhGjq1dgk11aAABTfzGvKi9kk94XaMUnfx1LJhsmTA8EQGr3kSABgQVjKAywtrg7XPWRcd",
  "key2": "HLbN9jws1cBXWd3bvVDt2g9wteqCArx1EHisdYUmeyoXb3qW4Hgeiq8SmDkmDASQjNXQUtXfj1WucKcw5xdLJh1",
  "key3": "2V8qHVjVnApTr4z9K2iHxatwghLY3u9YXpt8Ae92eaNeD9vE3X8wbq6ACincK1rTN6RvdYPF9ZLFsUin3Wmr3AcS",
  "key4": "5epXdnkvWXZZqeATSTVJ8pjZ9rzTRE2aTFHntCLzFt6yUdjhYESy88qSpFS4mnJnGiJ73SYMKHGnGtXzSnYxiLcV",
  "key5": "45uQMhVav8RMWMuHPwGy34B9BLCNvkgqwtVxyE51bwytj9ERJX7vDHv1k2kMDqcBtspfymu6ghoBeVjSKH5U5rmJ",
  "key6": "65M2XMM6KW9HQZrwuT3KJFezzgqzWYd9mb71TDMn8igYrKMKvt6EUb2SMig8ZyCVLbQf6S7btxtERFz9oFxP1Yev",
  "key7": "3aPLjBrPMFTb3PExmKnLBS4Q5mqF1cPARB24afmij9yPJS6aMcGxWuGS1dXRDYukw3joDVwPDSGFFcfs6Hfxben5",
  "key8": "QMSiv291HtjrQMSYBPmFrHazcQMzpLi6VpGmYtNXeiFSsgCWRxFRj2952uFD3VNMxCeK8DUFVDtBZ1RSw6CCVH6",
  "key9": "4jWeFuq4FURRyfDavAqhSutepaMLa2tkDynmy4rx9ixhTRucx76SWHpWUqogWuahBL4ApzthVRriynCi74tWnD7",
  "key10": "2j9dij9uh5tDcvY3adF432MVt7TxiW8rwq1D5tR6qTFUP6xRQe2LbqDr1Fd3J7MT6PtXSo4G37XbtZgUmfKqJiLN",
  "key11": "3zeXK67LQqpuRNU3F9DS4GgPvN31pERmvLephiGkLH89YEMNG97f4qU4ULTxFQptiAbRwBJRkK13gF4qGeimgPDW",
  "key12": "4i3GFEmDXyWMnNLRx5NUKf7ugqFJwo1UfECVZGK6uLwBEMuGfjfGNHSp5QmzKEHz83hk1H3A4jSW1n9a9pCM3r5G",
  "key13": "5NRFg6LpiPPCVNfiqsJGYYGdjmoi1uBCNJGizcJHSJivZH3Ww7mAFdqqioLJtPLn1pkZBLpd8dVG4cQq4Zjkkm5f",
  "key14": "3gLVBDKiDoufrnWkUQZBSTBTrWv3a2sp6izvyH3E5CRBAoaHcyaSiR9URgXa52rehqwDfLDgJit2QdwH8MXYt7qx",
  "key15": "AptJy6eVeozkjQxNJFQtkUqCQFUNZbASKbUm5nDRYb1mehf8Xu9oypFz4C8t5XA4hkchiZYuyjs7ihiUuFv7S4v",
  "key16": "3VHVP2iJa7QE656xm8ASMw7RAdYyhdCvpsTdzLZdKnKzqygGKrZEkYKigUpsXCVBfW8GT8sLBNvwooDbPLzn5wfh",
  "key17": "2MkVty54dMmP3d9efhAAeMUvbVnkMyCehEfDMJWnDCKfEuBPLF9RMqk998seT35Mt9yB8zErfc8Wduf51EokDDQ9",
  "key18": "7yqum41P1zAA8GFPZG1TsBfeTSdunc2yT56gM1eDf7gN7QwYGhJsQykC8q9MP82YD8LCE5uLJoWA78zKcBGRfrE",
  "key19": "4aHa2rEnbxeMV4NBbFYghxYQypsksJQ9KNVNqifePiuzmXbe5NYQ7RL1BaX7q7aWNKA8yMjUg5Bxztk8y2cis2yH",
  "key20": "zd6GZ6BjgFwxWbAqzfPK69MLDN8b8cGyzvWfTdGqs1uyLc84Yyft5VTSFHsPiMvp8GMuSHxQCb75FX7zmNdZ5xU",
  "key21": "5KierSZgw8WcY6mQ8fZUbhhtjUxG1YkBNmJdoJ4jDu5GRGS13h7hgVSMnJ1LvNDSCemuP7ZZvnSeiF3n7UCCW6oN",
  "key22": "3z7NMvcu4wmvbGi864Vr24kbq224QLU4rfLpkm9dTGgDotyUuhPL2RNjhXHTD21Zj2kKcvCRFnrhCiPWaqBJDjBb",
  "key23": "m5uCuNCuMyDZLRm4gDfXfrZygR6N2MpFeUa29ZhFykAdH5sjsUvByw3B8FgkR6aptQjLsJuhNVSoeaVMuW7i2Fs",
  "key24": "4DR7rGuNqoQfo5Axx3k54iUWvBZ9fmeH8hWPpWMD9HvSXHh532ZNFUB5mrfhVwC3VvUhhCumdEgfNfuUm8v2AzLu",
  "key25": "4oHLsBpTBEjXaPYeiqbBD4MwYgVTGuRVMmk8WNq8YPWhUePQqkG6ZGR9p2BDZPyXLxez3PQQJSCdNxfNzZDPFzQu",
  "key26": "5eepf14QV3Y2gKUWxa5umzZuxSwiabzv2XFznGuSEhvnHKmTssn57kkdf2cEJyEFcvPUmjtqRRWzDp4Z7r21H1N9"
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
