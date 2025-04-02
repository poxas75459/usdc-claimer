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
    "5w54kMZ3ggxBhbtyLq6vWTFXmn2VxUhivqnBmxaZXyxWFbthgThQpSjSeRScSLu4yQtByJHoK9hXYEnse7UmagbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yz6TfhQk9ju1qYaRYT5wvk33jdPr4SgLCuUQak3cjseTjt8KxjAnZsfYZnJGHTB5HuERUrTw9yquEqdztp7GG8a",
  "key1": "dhbyRJNUWR69ZBmLrLVbvzj5tBkNEVKEaQvaxu3LsrGZUCimyMqMwciXFrKZA2VRqcSBgDXChxu3zpNMqk8s3Jo",
  "key2": "3MTrrGN1DKMoUNkvycVSg1jS7PJFrGwFWBuz4H1AaJQDA4LXj1GE3KzC35Mx6jACtnmoiuge5GAkvh8Ju1BZjvbJ",
  "key3": "2wr4i79CW4mtDDCDWnCn3tKYKRMatnUeQmjai96puNVp6NJNTBa5TbH416EHXDKokGNRycFGbug9mXbLMA5VPgAa",
  "key4": "2MTSZGXsCKawgvaF5Hpjg8t9afG7NCG9FgAMqtTBod834jRgMpdtw7XhBdxK6GuNRSREd5f2Mxmn8DxV3kimS14X",
  "key5": "28zcZGpsZrZDU6y26SrKhJi9ZtTqw9sNS1QAjb31jx7EBrSvxyUCNz3Bf75XqTtJp784n869NNwN2ko6iAYwTvuH",
  "key6": "2CucNrzXYyxRRYxeY1D9B8TQz7xJuTYyxXH6DmWEAqJqSnbbqEXUhTSVC29hdd8ce9GtFW49GPfHVFcmqTK1YTVX",
  "key7": "2MhL4FnquYnpLnQ9yLipLbrQ4oeFxp5EvV1ZRQa5jfDQDYAfGJf9fR3qE4hvbMoCbDQ97ZnJSvyJiMCpKZMGhqVZ",
  "key8": "4CbsMYqknVpGatyVYn7yrmdtQHLX3bJFzHk2atqxEhWp5WdSzPg8VwKXJm2kivxesi3QtMhnKpXSjp1oCPWRVrtN",
  "key9": "59c4qU7Jj427k48z1iNstjSWkFc7MwhpWfkcBKcLdbxiQLd7dZMrqhM7vbWEXL5NXgGkqC8AqX83g6BZDk7jRunE",
  "key10": "4QjzHiUqregSuZkVZdH1m9TWbWcErRvP7kVrmrDDh3aEGkAy51pV5EtYoQkd44mLsyzDLLQou2FcsvWNXrrzDRg4",
  "key11": "4Hjkiy3YThKbUgDG1orQzsS7j2BxZVdsAfghWHLSb2hL47P2K4ynoAeVydCmDwx6PFSW7KZaWirz7kVkxxpNiVKC",
  "key12": "4mxacPA4SaNVoFEXJ3DdetvpmcAYYrYP3CFNpWRttDvV9yHKWFXWSeR2kAfsVg7K8Fn7fTnPw1gaSGt8mZ5MtYCE",
  "key13": "3Ph4G6G3Dyu7ULsqv1MaU71YBw9i1MXSBnioBFMLASY1xp51HYZAYditPi6x1hkALxPvYaAdndUjSh1ezrZttVq8",
  "key14": "5uuLozWFidhyMo2zBfNLBnyVTq6rq1kiAy4e4WxVAK6aan6JZTA96VYXajxkBRPWYZreJ4mja4pnpnEMaGh4DGt4",
  "key15": "558od66WcPHs8urKrKL2rBpheaH23sGGgR6NxeWTMP9wijFwEA8miuQdmqqZW4MTKfpi2TjyKVUex1BDRfBLdYAb",
  "key16": "337LSYpsSxiBwqrWRGDSqqUqP7YWXQ9JKEg6rNp9QmVWz5hhQFVHa1UEJAjzq3zmekk3tZkxiPGxhCSxucUZ2uuQ",
  "key17": "5meC9aH9twgbmmA84KiZuEM3aJxHBETyya6ukJFWgg5m4rf5XqP4zPs1jBS5wHw2zeYHkQdupu7fGpqwqwwKy8Qt",
  "key18": "4CxRQbXet4CwzhL4mbosPbYByHD75A6N7MzSmtJr8cfhxg7VsosBcR2YKBuK4UcSFKLzsoVNtUArWmang8WXYaCP",
  "key19": "4c6dgCJFeydUoyYD8zEPBv9rBADDW2xSVWeJ6FDUQwkSZEPppuH9kbnGPsC6yhu3gQt2w1cSGRRdVXEkEsZMuSzu",
  "key20": "2vj4m7eAjfFSRHzh1VDyQqqxmLBRo9qb1iuVzR27VBTsnNMFY9BBEMmk8eUpXiV39xXHs2fxXKHZ5YWbJXDJpWHX",
  "key21": "5QmMBhhjC6frFk3JtKCdHtBLJNpm7eLRoVMFKAsM9wCTreQpVMXBWXBdDMhJKyPnfjYNxqpGiiZYZzXfGao1bNX6",
  "key22": "2f4QcUAtfV2oeov6qwswNGEdppFQcnH7Fk5Ge5Hq3Nzh2oScTUHNjteM7PJQAHHZc7gLpNNYJrEdUZXc1u989yBv",
  "key23": "jBDinr6tojQB3ErNNr5ngMTNEReXz7PBgcNxARpLD9HnNjAsB9fAX7gJ8TSFXQN6VfmkJHSbWTxs6L9o8YvnYBZ",
  "key24": "4LZaBM3aZSMS5JDpYwuCejcN8aPfxNXctZVAtsi6471BPd78RVn86mdWUMV2BuuxUmSnGmoAPjxfB6QGCdMivcmj",
  "key25": "57XmxUZDdVB2h6bjw2y8p6miv5HEBTpGbCNwfdj9Rrvr4aFd7E5YTr9NUjAmwCCoFTkYB3DcmLi9Y7Hw6FubzfWq"
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
