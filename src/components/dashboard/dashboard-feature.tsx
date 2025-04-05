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
    "5S2UnzTi6EsKU2UAgc4vNWzig4uUHcPNfRHCyvhaJhsVMTW3NfPxYKY2MtZVjn1qQT7Ax4vrBya4TWHzQyRpW1G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGT6JfZ1dL7MCinm5N2fsv8m4hd9v6HfzqcE3d6BLtN3Vu2uPxTFSBo3Rw6go3cNcHwW6rrRaNqEwkcgUf1D2aS",
  "key1": "66RGxzFXFfxTF5RqQWLzhJa8RGt85zLYyyfgEmRa84m6a7xyh1hxpXooE3rBJV6hJKxY6967W9tRT1omka4SkFgg",
  "key2": "4njv5T21XNhVQZWg5BqPmxSYQbQo9Z3v38zgWMFbdNMZ4hpreDF6b5pmzZ9uFD6hodv3Sut8ruE2oWpdHueaCTKf",
  "key3": "mwf6MHGe6u1UPMxizU2KyHFRg6uGFE4M19DGa1yJgcM9iSZdYk6ovnwiTb3EtnLrxv4Lcds2yTaRv3bgm1rYyPD",
  "key4": "vF9GZzVeHkry6fdS8a8X5aTWLwa5iF8SVtz29hFTR2HLfV799TJukCt6Mj51Kfk8W6AWWFoc4zB5ysS9r63MJRs",
  "key5": "4VNLhKAVo5cWkU9HJ4qXs7nyRiN8t2rjY6qwdgsybaT1HdDLVeyfAweLy4gjm2mbydyGWsWapjjBXrDyWEY63tcY",
  "key6": "3yuFnx7WwqPAxPbCJcqjq8PdMrimQrj49agVEPhPZEP73tHwEivSoNmqVFGwBnppQTg7if6nAAZ7TGt39zCzsY4S",
  "key7": "5iyGbfqbyyV2BtysWzHcLE1PA5DuDvC7y4y2fmUSxRosDuZLVyhrEsVTWQE8NuSmmr4QQcUjg23t4dUq22qdRciJ",
  "key8": "3Ump9WdoVfoUNiG4VzeNgSVgmeuan5Aqm8B3zAgWjDWyjfvJjxj2TuUXpFnVUKfikGpHdgwtBaV5e5qodPCksx6t",
  "key9": "5qwVwWJrBjsHotn3yraJG1zU584griKpc83tZZ2XeFCE78vfsWqHXNx2vun9JzyGgAiZW5N8xNyHHRG7tzw7pSUV",
  "key10": "29YJtQ5kJao6zgwtnJFPywoMrhGp5D6N99rZdRnisUARVGGEgLEfhc58LRwzDCMG1b7fi2RWfYd6pPmZjRYLndaG",
  "key11": "32EUhRNMnRN7ciaJWy4pwEEuZjK7dqzUYcFt9FtnFT7enSVrxhKy11koQqXnroz5eGu7uhtwh5Roz9bfVzbxzG4s",
  "key12": "J1buwH7VfTPJ2qSFhVuhuQ8c3poArsgw8LgUHHk7og6DSFFvhT6k2wU2CwMi3vWAR4fYqQ66xiw6em9Li3Kvxsj",
  "key13": "4yQk6G73gXN1ASVf4NhNJ5sLT6AXQAdPfrxWC9aBHr9qfSRv9rXTm2TaFbctDX1LCwaZ7LQ6zz9nHCBL8M7cEGke",
  "key14": "jAdiFqzZUq7yiuEMX9X9UZWpPXcxjvXTb56FXZzRm8BG9kQkarEt9t8JhkBDaJFY4894312ggHj8Adhjz1cfJJZ",
  "key15": "5CETkF2152rRMQC237D6Su2DqYxvvY3QrSsieArB7nTNtCHUvf6HkiMWEm2oxf1DiqL8nKwDYNY1Z5t8no5KJPC1",
  "key16": "M1dTzBjWEKEHhNkqqqczHyDBwwaNPtbrpdwKTF8WriAMNTJjw2rYD17rvJa45XRzFestpctHc3XRqrXqXVQZGTm",
  "key17": "3h5AKQfRaRn7APuvZ2mfSp6CE51be3QPV4EAiPLsb3RSKHTuzpcEq6MqHkqTR57RGQwAuxuzcxcxNLsWYik22Y1V",
  "key18": "2t5nAJBAFmYftpG3T5jmraLrMLtka7A9brQXV9BhomRNoCZqRPXpwQ7B2YYwUNC8mwnnmJC1uM1iAnftUwCu5H7Z",
  "key19": "3ACwAmJXzqsRNQqcmK3N186voNTwM1FmgNXZ4QmbpDvyTPrADSBqfqt6jqa9KbmYPYsHo3eHEEvjYBrhfGTiz5JP",
  "key20": "3j7RJBpQLNvX9TNL3XfNcn9ThTto6suJdHQQw85kUXn6xswXexwyfGBafNwQwtHuq3KSyKX2rozqYdHHaSLe4pbx",
  "key21": "4PUk1WgkwZaUy96jECBKSChAunLQyrGCo17TrXCFDBYdLvLpPU4BLsYaHMQBeipKNkzpbNbfeW1tzov27nPE3t8T",
  "key22": "53Nv4rPnh56TehSE7F8yFMrAtKdKYh6vUyrdYXRPYRC1csLrEwB3DLgGP6assYENATxyhaJWcVFSHLuNanrnhVUD",
  "key23": "5PZBt7AfohBYsh2HmvW53vzF9xN9oU9PSxoVNkB9maAWt676oc92z7TKckmMePRC6ZfZJa53rJQdAK83BAAv6nRU",
  "key24": "47AtAfbF2UyTh1UKH7ZJ4xsYmFYNwFcmBmsyGJuLELB44FQFjfC95XP3SSWStBU8LvJBcT3YuTCbP3nfYYV9eqjw",
  "key25": "4adH83JsW8q7yLWSkitRNL5zjFxqho4AE2jhzoHsH6ZtUsmbzKQa3BN3sSCTPobMN7SJw1cJ3aj3WpqM9ZAkUP5J"
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
