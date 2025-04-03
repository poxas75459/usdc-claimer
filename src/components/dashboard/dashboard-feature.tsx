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
    "3xuHdgh2fndepnuVRHwsANfUVfY3KJn9SURMhxbkZuPFkryuZ7s5FWMSKT4d2xbjcuG6SynZdQssyQoXUYE1fPro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VDVvmfht1ZP6QKCuWBzh9cLvFsEXpUhhyqvmDKxJaAPkfRc4zwpmeW4vJiu9syUVqgbzoqB3amhkGSjMhBE76P",
  "key1": "7vzCgUvSMhp87t8MjUeSxHbk4NwMT61WmaaquP74EgCJM1NtXnNnQFFmj4d96YKECQzY9qQSbRMCSsQgA7tPgnh",
  "key2": "3DgM8cj51cXfWZDVAwVwT7YLsGNoi927Co1voF7fvveGKyrrekZVSdwZbQyUHHsosjCtjLwZeXNfxq3cpwY19EVS",
  "key3": "XEt9KJZd4vf8gphHJHFxxLofGAsmnfGrMg8KjoHtf3fRRWLzXgKR8Xe7Qp6sz6qhPHfGUpZmDaWZKHKYAKn58HA",
  "key4": "4a46KgtARBMXbxVvzZsMYLVZDiN4ozu8MTZSakUoARftdrS3PSB8h525Pu8uZ4iZXZYA2BD7TK8XhHVNuyhPASWa",
  "key5": "21FKU3FjJ8BRfvpsLqFfMhPmz7PmxNj9TZEHwEdimJ3YzgjpZqNDrR9YnGRmzZ3CxqX4ktacC7KvKaxZxtUKeGEZ",
  "key6": "4JxrGwHrg3dZg8MRAe8pyVs4SrKmtx9SbYzosviiWzaXr9jAVCNoKbtidoxWZSfecRFvGCBCY8iSbzx4dWFReEm6",
  "key7": "5jD9aip8KVYNvs48u8e6d6pPpdEmGciXHMuuuMc4PMZaVed6tidLbqyVQsxjHBQr3cFy9HkTmMN8m54Jon4gXASz",
  "key8": "3Q7NK9JS6ndELGaN1WZKuF1wkMrtZ6ZMa9xmvJnzEX9h19NQ236pshJtHhLXsEmUyvDp1VrQ2gmU9pLW6xeFfgfY",
  "key9": "4qKFWL766WP9sRToPVC27cLYyvuGaWoMy54pUiuiKZQJG5ie7jTRhmHW4US632szdRaTxK2AriN2bF4T7HN3Lu2L",
  "key10": "3EfXBFWGhjXcdBWb3hup2SBG84mQQBxjkFMgTYpExZjNKhJPCLf3QxusGKKLTX2awmSveXrb4peTzumyYXmrN8cp",
  "key11": "3U4ux61M5aNU8VUq9rxhUDAJt9q6srURptBiT6nWUegYY1XNQW9838XAWSQwsi1CPgU6Ks1K7JMfVzMLfoDs6aiS",
  "key12": "4rrW9G5mGYBNNfxxPanogEM4ReKA7UrDpafGswN7Adfg9cPhaZqy2Y9NAt4TmHmnEBCNWSWeX1f5kxENL6TM6pRJ",
  "key13": "Jb8VyCAPvGQEh7zdFA2Lutyr1AAuq8KCMGd6CYtNCALohPUvb9iZoo6ynFoDXU68u9kMatqMZXPeH22RpX9GqFG",
  "key14": "CTFvGc7vJAwGt4buYRYTytZbBeTFixGaaVePng2GWtssumPc9kMcaXUxjbjYZ7A2YjTBZsh9htZwpHBZs5VgVbu",
  "key15": "3D5iv9iVGT2d3Y5gebAdMmBK7U8fQMtVQU9wwgGkmvQZ1Zg4aXEdcNh3jv1LWpjhJR8Vntm4ymxirRDZ21FFcKWD",
  "key16": "DQhaHW3RhQSoyJNdRwCpVfsw9dZUDiQF6R7DsnR3DEz2ViUoFqBp6a1nvcxP4BKkikLMp4zLuBipnjpwMan2vu1",
  "key17": "664QLkVaRV8As7ZZgLeyw2ZcbXcchU9Ytz2WxbvzDF43PAyYeUKD7aXWZPjnhwiEpRbnQFqtyaKbhr7XRYJZAUNq",
  "key18": "shF7YZH1iX47BVWok8DKa7xKCjGCSza4un1EcvYoQBj2hGXMwBueR3yUYAcfek2Z1MKyS9j41oc5n9tSfDfb6wa",
  "key19": "DaDw3tKpKgCZRyY4wmqwWCgeZ7ixuokfkX29DAc7wKH4U8fzHWbU2Rekpm44AL7wEtocFetDYgqQxrXJjF3oLHK",
  "key20": "2AJe58XocbY2wu8vwYNfYQeRrdxGyBZjivYgXHbW93TnQiz7EeAxpKmTvGmWaPD71j8n3RWXmt15T5pydVMK1tzP",
  "key21": "3MdePA93w9LSpQeFhziHzMGb8XQBwV3XP4Ng2DTYjS3ugWxcusFaF5uGEdRU7t2HrZTAFVSDt8XEMyhNPPLkQ9BX",
  "key22": "Nxznkjg178h1MMDWAWjE2rjdWVz4ePAFSqvRg3pA8iioAJ2YAB9BNeipDt3NJzy5n3kGLntbSNW48fUa57XnxLJ",
  "key23": "dZtoWaJKUnVZipuDaf5GczkUFGbSX4LVvwxU5c5xkJonup34DACNdF1LpB4E6HXCfWYBvE2Kon9MGtwrUPimXh9",
  "key24": "2g2DCdV7wyB9y32b3dfKnKzyLVD9j5mzHKLf6DvEXrpQm4p5DKd1VirkDzkTmX9GDtVFdzNRS52AWpncMJg2uv6D",
  "key25": "2GwvVC4BAvZwSWE9L16q16mFTAk8f7ncreMiJjxTYqyD13Vs15uWm3sW2es7SrTjmMEtpLEpCEdyWkDLgNFmRKv5",
  "key26": "SrZSipH4nqhvZ4DeMZuxva35oJeknMVUA9pzcscG2xcWTpDNyiyenWeuqDHDQAK4C3NZc8gQGxRWSGbw9faz9oh",
  "key27": "2Bz55sBpStiQHqPBMdgFRi22NumeHuMq7ab58mvUja2jUfiDUsU74ycFDBN6uNZHjQB961YxNt6WLEfJh9gjLw6b",
  "key28": "4KfwcjRwqFb2AyeoTeNh6nnA869RsEdNw9gK49wRGvZzYUbtjDmT4nGgkN59dMwjmQXeJVQPA89VHQxp22MvC8UM",
  "key29": "25tP1S1aWFSyfmCGE8ctjoRUMqUhJ9aFx4bEHw8BVC23hdeVfkXAckZEPAmVzdChZig7DmEf8S2FbrTu7bWMHdag",
  "key30": "5nCS16ov613fhnXhSTkAVCjoJG4dzYEzGK8uuXfQKVDp2nfn8DMi7Qm2Tei2KUmwS5AVu5u9Rvi5Urs6QufM1a2Q",
  "key31": "59MbFZ7JT7g58dAU13MAQXYnNXeMKCT8Yf7GcN5Rg9gHXBkHFZBXBSaQu28PG2uwe7Cn4czkNbEi1PEqKJDpoSm8",
  "key32": "eMhFvHTryebWh1fac1pbtiTdCuyFBJLQ9zyLujtiFzdb3u5FY8DCu1z6xXsiStgfWvFNDLF28fSWSZug7q9Ff2A",
  "key33": "3CrU6jCMNuDYtvxXWvsNDn4PQF8SFPzJx75jT3KDC8DEE1oyzdibMWQ7foZo7fsCJMfLf6zcy49pahfm6bvad5Ze",
  "key34": "5oZ3yyxuTeUcJL4oEcnKmWg1KT2CUuNgHB5Cyta6LyLFVefR449pgtUQe5aTaNiu9Gj9CMDN1kjnJ1My5JsJrpBX",
  "key35": "4NTQGp4wwcuNKASeJLFXuTmAdjfkY7gNusjD78umCwih7HTKJJFFA36x1HEea4Uah1Fdd2HDqu8sAKPgacHi589B",
  "key36": "3bXmKhKYMxZGJejp74YUJXQNrijqK19kNvHA8C3aV7S1rgaMt3FvHYs5dV67378Jib2KCVMfnQU2MFR9LuS6Mfks",
  "key37": "5jNabJc8kkzvo8DGCKNmc7rHu18CyrgZW1nAWxU4TYWa35HEGo5YtRhchztET7GfJZG92oes9qViThsDQCK5aZM3",
  "key38": "2PHBAF1e9jhtZvuZ6qchU1rVSW8EU1baJbKk1hFSjAFhgJNyWBKFsiVsNGzSiT4fFncG1tMqEHtQ1gfj8hmB2smp"
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
