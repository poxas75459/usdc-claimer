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
    "4sBcMpsZ29wPAfnZE3rjADctkzfQGehupNrJem2zSuB4TKUvYawGenHmpTRS6dAux4RADrSyWMbEpQkrL6DS2LE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27W7g79z33JiE6GsLFsQAv7vZP6JmK6X4Zy4wA3b6cyFe1jz5w6RHSNCvU4ESWW4zWhiZUqTt1FN3QSCgUHnNPNn",
  "key1": "2iswKSED4WaHim7ix7o9e3qYiygTBk7vShTYVCJRagdyQcHU5LRxRKXHaNYVaJeiPwsgtCkZwWjU5vpg7epdohWZ",
  "key2": "3EiRcb8iyt6A4ZeBwvXNydB6DzPycWiE9H9sWFAmfrzdzkj4t6oLi8TSWeqbS8QzKKGqzk3xR6P4HHu9WF4BVHm9",
  "key3": "4yFdhJmjm3UWcrKWjmKAVY3Vz8qqqBAD62eqA9cRrnR1YHHi94FjnaQBezpDhFmVdDVdGr2NewG6DXsYSPCEFTBc",
  "key4": "2nEUjFW6s2s9BdfjZfBqPLyr3Ab9hRm92sqRYzgcJCWAQeXoRo1Bedq8ot8DXj7TGcXJPyhN1RxLTmLXwP9e47EN",
  "key5": "2cnfjymqaKzF8bkceibdLMRf6anC97NC9pP52ZMHxkB7E8yhb8HadjTrsrhCd6t5GcmiCw8skPDc7uKLpmLJkAhp",
  "key6": "4Eh5gjh4ARHAU6N2wdPYhbGqZadbVQoAyzdShWuVPibWvjn4o2yRC96P3ynnGcWpBmXXNYW1h7WWWPCPXqUvfJ7n",
  "key7": "4qBeH1mFhrKVhg3824KTvosmsV53gbWr1bihw1a9D8jNX3QSUDVDDN7czj8FEG3pg5TGDwNoj5qEDmL6NatcKZh9",
  "key8": "5YrSTw3dff4Mtf5dHnN5ezMBHgK7zfwzyr6XazP5kJoHRdMDwq43hXrBP2tcNUoVR2fxsVjGTMF3Ja38kowVyoUn",
  "key9": "3qqnWvxheAYgvuKDJe7fWBUsKd4VwdoDUSNLSvYmhGnsZ1BWGJuymwhExJntye6ecJknJTBZX9VDHtb95ZZMqCDo",
  "key10": "2ytHmQWgYLhd25k4FquiacrZcddQdRgnZ5NtrJR3MUXvBe9unUgGtWZ1FQ4c4zmHjGBckDhC4B84xYFN2Dg4mz62",
  "key11": "2HsdghuYy4up6Zd7TuWLMo8wL21okP4TfKmoyCzXpCiXLxTJppHjyxFffpErXQVNbSiM7qbxoEDmUmXSyem1MrWM",
  "key12": "25vDi6Xc58XzpN5PzUvaQgKUG5Rv9HJcgkKPiKVLWhNZSLbTSbFybXcfnVtP7JQ8v3PhZVtAqPC78EW7ja1EpRkk",
  "key13": "38SSVM5tkZoAsyxjrjtiVaieQAVQBJtg7D9o6FbqC5NHKS5f5L51TKAZ8CbnfRCm3zwaHDk9xnnhP7dkpNhVMRbf",
  "key14": "2dQjw38vDYhhxL8kZs35HPjoNDcFseDPLU6FdibE4QeYvV3V1pogsMkSeXMHxrW7aR7HRrK1gSjNzQj2kjaf2w4y",
  "key15": "k7n5ZqT1Dnru7rdzbKaL96q5FKBT8JMzF9etJsxvsgpNTiqtvCpsDGgWNZd1tjf8GYkkq5yWHURA2zBH3iTtJvH",
  "key16": "3rZ3DH7JRQJ4ACrjy81QbfHtw3dCyKzsFETEYJCpiSyKuReWfBHHNzszKZmc94rSMdwXvd1DUbcufs8ANpZBcWdL",
  "key17": "5PiuuiW5yNMqQdwqemdz1kbtAGefor2ioNjHk4oaXPLMvNadzwssFegnS794J7GeYbxsWtb45xhwjyjjRN96gGYu",
  "key18": "42GMiFss3SAepqRCgqktSZ5spcHP3Hv2u6QUdz6tecNvaf3ByVSaBb2Bhc4cBGmAXA4Bd2xcbtQxnX6Vi4NMvpxK",
  "key19": "VDzAs3v1ms1XWNYQtv9df9KRyXw1CxxowA3RjQHjgaMN7nmdyYGdqez73V2S1ZbAw8nxCeSZyvCn45G5GMGMhn6",
  "key20": "5K94VvuY1UBhAfp3Fp2dpjjRwN28PwrwGAwPpLyNLpmUqTUNWYpLy9pkqBxAFVXNWmtC9t4MxuYQoArP6ddY6dqE",
  "key21": "3Rrzpew2PSb2Ch74dr5i8JUk3aYVLSMRA1vvRreghtUH7Vv3jBA3aJiQJv54xVQzJnZ62cHHVRTXFgNQTFCfiwc3",
  "key22": "F3nZ3pTbF477RxDT1DzKK77NraAPWdENGeVkW9yvrERtpd2A3MvWA4iiCgKTWkz45R6kaTeqZZFyQ1jKgt6bs42",
  "key23": "5psf3tNErCByn7S2WkKXEWyZwMseHpzYnQtiZf3CFgaoQqcU6f7hmq97DKuhpStMs151iQE7NWpWke5yDFbc2WZU",
  "key24": "4eXE7X9Db8i1wK6adMk6RrmQKan6tYJSnc5mjisS27FYQDcgpLYbkqy5RHZgNzZMQsdgbTWkHNtf9Uv8CRCLYm3n",
  "key25": "5qc7THn3PD4VmNtmTVA7z62QcLPcKcpogaE8fp28Y7K7cKuge4sYqskrWL9HSqdopMey9AFjwr5NvkAK6FnKSyHK",
  "key26": "2RPZe2aaoCWUY84EsLe4Qg5CwAdWdWQ81nGRWrfoDhtLZgmisXKhsPAaL9k8JYL38G9u4JmD4NaytDJzkbczWFJT",
  "key27": "62x6Lzm1FYD5vz8TLiCLFMcJAMLpLiwThEYgtAyyY8NTgQssUfwKfzuWQJsif9Daud1TMzJWtAiAgqfbKebubmmv",
  "key28": "cZkem45Ff3eAVPns4nA6VAGqNEDEEYsyGxc1RPdhSNS66uWH2jfopKzSmGygya4mado3DNdvdnr1BnjtW8Gctwu",
  "key29": "NQ5gjPkev9Jzbr8yCzb2jTr81RfMW1ek7ZnUf8NW19Ddcqz22NFi7g4jtPqWVv2FWbFpp5kFKaGTzNfyjvTQcPg",
  "key30": "5eCotHKa5hQz3yzfVFjDQHXEgityajF3U4tFLonh7GUV7g4AXya3WYK7czVJ6PAM36KehoFqPMb6PVawtUUkmXGk"
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
