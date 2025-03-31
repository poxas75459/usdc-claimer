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
    "3QWMZ9X8KHdkEWaMjBwshpfFNKrL7vVeTQS16em5s4acyPNZuMi4a8Ez3GJ8xhqb5KH9bJE733C69bzPgU1mAm1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDkZadrNP2qjNGGomqdnmgJADDgimzKoKeUmHFMAbQ2zsqxu8gjg8Rxh9WE9Uc78T8CEKp9Eh9k5mDmZva5HDDa",
  "key1": "2A7sZFhLFkqDVyCY2sZLKQ3c94eAh8ZofaUaU1e33QyM4geZhSNXAacVYLAdDpXEQh3XnimWEcsaNL61M72TrD5R",
  "key2": "EuEa6MC374QDZ3ASZU7LsuCue2mxEXgNgud9CKT2micK2UxPWZSC3DEkLpBg7zbuu9hqQWyXa5YE1yYYAfxC943",
  "key3": "BYAdZgS8hW5uFGRzpxaneqE2for6uzf1GfdXhqjTmJnJJm8TkfeueYWZqPDb4emePncxS4wbQj2moNGzW12AuWK",
  "key4": "4EQqrqMeMxNuU1H7vgn8A7LdDku3cpPywhrrdPfxyGHvL53z4cjyjV1XKwvr6pXWjtWHHjZg4pxMifUmJWNoRfY3",
  "key5": "2CyumV9FhbVnfKDuqHF5aopQMKV4h6PPmCLLZRuoAfgywAYAdBqmqzcXHLfrm3uSUcZq2xvTgs4nDi4TSy4HSSHp",
  "key6": "58GJG7ikkhz1k2wkodyyFdV7PRtxrdYFy5RXW62SkkjM7fYRzUYDhRoKZeJ8hWFA4yrdAbaM6g44ED12Yqbi4nDi",
  "key7": "4GZaXoym3piZistyFnKe5jscBisWghHGr99N1wQXMFfPsFiQbqGwTu3swPpaapZkiSjWoteSiht7Wi2j4pWHw6kp",
  "key8": "3jognYbH54E7MKb6LxZGBFErCWwUR3hbNnobbUpsD7E4EN1c9hVZaXk8VH6Gf1D7KjyRLhhQKafbPtTxosHUoANK",
  "key9": "374Z8JNrJpYk7sat9Vr3vRmokaxyQ36ZqfVn5wx4adr1jJ6H4KZW6sVm6vxngWqexu92RALYGMaZhbywoxNvjsF",
  "key10": "3MopAdX2tihfLuYdXNm3Q5MfDMYvkPXkTeWfzM9dorZAucCkbstCWjHyGoafjKfH5ZcoMXrMxjKnBDiUJbzBvBhB",
  "key11": "4xsSaHM1Nb5aNbuULYfPfvN1FzUMEMhdaAQMBnXfpt4rqgUCAALq72iFu1UrNAk2UrREUkYBEG98WGznZhBZhsrs",
  "key12": "61C7aqpSmN9sdxdR7WGRC8WAUkwqD3Cc4QkbVMaMJpEmPiJJGcoEuxZzhjdJuLfiey6ZdaDRmqCNMraYKLc9pY7v",
  "key13": "2TuSK95oA4qjHHxni7QWWFCsgDiGNeEry7ahRBvaHLekVNnNTJeBNeXk7R4JR3bsyvsTudN2J9cMkdUFb3uCfXah",
  "key14": "BjJGaCYTcRr4cZkJegir97t5FgHsHpzkQkixVHNq7UEz4UbJ4DaDWdBRjAtsnVFY1MdCTucjXZzMDHF9wdmKQmK",
  "key15": "35A5GcgV7Mz5Ct6biZKKxFraHe4tusgxGhhXbUQPrVx5svznLv6b8Gk4d7BrDEjsDuHcd4H8rVM2mNL23W3T3RNp",
  "key16": "4772pdDmZqjW1RbxN775FHXkLSTPGQsBtnEv5F754k1y4oj5Q4k6Qs82RXZ4Stx17iBCGY1oin3fSioWaKMW7cnt",
  "key17": "2wrhRyVSuu6QZbD97oazim2CqPwsrnLLcezUksUX5jWRyAYW75JzLhcQ91RZ7bUwEoPMcrCqzL99qdB1rfRyuHGt",
  "key18": "2W1AqHrc4pDW4SCRZ3mZspEG31A6S8mPg3cxGxsr8udykZaBaDtgH77HZGLSagbYNXjj2v2tJu6D7xeX7nEHREzP",
  "key19": "EaKgNKZHbbxLrtohjXAQUm3qzDS94QguGFS4BkvU7PidqtMXeG5fTAxbyjuwXGnf7hTUfuVJ6xQYpXaSiUCk3sL",
  "key20": "BN43PybM7vzG3Fv6FWhkif1gMYrdbwycXftWvJ3M5sVjRf7iQ6qKfWxGsMxEQJbsWhME8xB88qXzzSp2HPF3ZDu",
  "key21": "5RJBv7vcrf1ykXvr4Mm1PsMxrmx6EdfDdMAyMpQmdikiCic47RrWBEb3q83RDGqbVXwwboNYAp4BBTWwJVGvmWhc",
  "key22": "2bwew2j1Tk8nxdqniVpqcjnDE5e8dwk8K66Jr2WF6sbMvTNpA2RzpbR5m33kXuT1G1rnJ8bJj1WHjqsHdAQj63BK",
  "key23": "sw5kyENTPR77ytwungc7ZW5133gDsF6o8BLYNXXTbUMaAQ3nNgbzXvzxq5mKLGykvJaGFnd71t4mEmPZ1pY7fFt",
  "key24": "5kzkznyYLCkCAaSb1KezmFjY7q1wAu1swzP3TwPMDobVJLseUsg715ZSZTHkAATiMYDDS8iWtxRZwW7wwwcDK8q1",
  "key25": "7q2sseHpaX9UzXE8hoSRCWYyQiSoTqtRbcduMkFig4RSikg2ZrenjxzT4VadD3ukT1m7tN6TjFGLmA2YXM791kf",
  "key26": "1682N5YF3dBiuqQ681Kd6ccFAwLZcYqgzPrYE9ptfaaECryyoRYXKvaEoqEQWALEVBYcSZMz5PwBo4cmPSLYt6N",
  "key27": "Yzkb657Zv699PtzLb5RjzGmrMSZ9Hb1k6FhMD5dMB32xrzScEW2T1yKWqbRwA6rcTLz4AD7JoHQrtoRkMhRvGEU",
  "key28": "R9EzxCvDHewauQ994UzqMtNjtqL8Ku4KJTZD81NrL7X6bm5NyiYSMSNtR26KAJb2vMqZdpFfLfXAK9hXmdVrM7W",
  "key29": "2oFuKXMiQ5XdSJsD1V1YP3MMBhjzxnhsNe7iUgSkuZGHy5VTEDN1diVS9ET1rzLr9yd7nrmu1zNLiPfEVV7JEQuN",
  "key30": "5XyC9qwKKSfFhRFLppHG7CnAyvxwLVzf77J47cHhzcAqD1tKE63JeyUJLqEM5zwviqrwCrGAtu8v3HXUTt7rE9pd",
  "key31": "2hrgzVKVWcirXLTdg3AC4bLoAHPgg2G8cH1fpuJnQ5FyNks4CbQgqBqizBKaFuxnA1fZu5JbGk8XPNRYeuzyEs4C",
  "key32": "5mnSifGDon97bNdZr68qxnnRa8m2N4wc54egZMDhtTf28x9WGP8JoQz9yMNwQMUQ99Dw7RtWCneuGwRCm1FMBFxr",
  "key33": "4SDA5zuA5mYziYk5m9XipS8QMB6w1nucReXVvZ9c2Mn25mRoQEdv3UshE3J66JpUkY7NearUrmx9UZDtRhwm5KAc"
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
