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
    "2Rke4Wdfr71uTP138xVb4uSPA7NRctDEpAq9HasScuuzhsdbQopXBcViSMjHVKUqWHw26qLDXKhd8LAasavb8nDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWBoExt7PzhDYwChU8NLuKM7YLjf4z9NYYKB3RSdfjhH2P71hCGKajmNX2EmgjPsR2ncMKmjLxsb4kSLJ97fjN",
  "key1": "5KuC7fCPZCS1C1rxLBfKoXoFioVSRqTcuu3QXep7kRJjyme7WWTq835rpZiMszogBhNrQwm1atpPGrH183R5JxAt",
  "key2": "4mx6sYMcWVoR8Fatn5S6RPQp2DMiQip51iFMzdqL4sAZrH4T219iyoaXif9fVNKcCmTWPJHGys7v6r4tfNFaaETy",
  "key3": "Gkk6m1pvXbxoHvBA6CFdVUdkZSzF4HCraXjiceG71Q52khCWdGBpAojCWpkiauxwkLB957VnxedkJPkE6qo2r2a",
  "key4": "527sKyQKTe9w9kQAErqLpTXZRCjmW53x7oy5fY22tPS2WUcws86VHDrUKBt1RRzaLJszYQQX829HW5zRrBjBXJhW",
  "key5": "24doHzgiZJtmxcGpUaf9SPpe5RM3dkVaX4RTpSeGYR7Q6QSsxgJqYYM2L8HAAC2usv9nwnjjdU384ZEqC2C87eW4",
  "key6": "5WskwBPeaTiS2sATa86UWUhqyhu41vL1YxFRCbc6CYKUP5A8svGEp9cpqn9etMofzxFM3taqiAgKWiiFRWFazccU",
  "key7": "5ZMDm5RoNLQZm5Z18HPovv5xsMiJjfrNA1dHDBp5qVASpDiHt96bX4pb2AXzznJZFKPvmKEceQiNzZRkrzx4Fhtu",
  "key8": "3EBBwqYJBKi7VKignqc8jJXwE6HUeHkpTYwioyExdLdCXiCpUiFi8Hu3FsNYB6fNrSiyXaobe9bhKd8buhy8DkJs",
  "key9": "5QcFjyRJb3dcfLosK1NkMgEzP2yjptXswhFo6XkoZ6bbQarfaeHSYxsLHRfaY1S7pqETdW7pNTgFJqMZKCFdZaQ9",
  "key10": "3c7Gb8w6EryF9bdB7TffLFbehS19CKgmxmeUEesTJThTX11vxN8bVArUgyG2Rr2jBBEPYCpByMiTN36H9NCXunAE",
  "key11": "smxoZbPySTPtmqymbhVtwhmYNpR1EzfmWd9qM25MZwg6V2tEoKVp7WVByLQt4uH9392PWh6ZtZRn7A8ayVdPNvf",
  "key12": "4GvuM9BxhNPUExyMTjXxwacQ6EmcbXtGr39iqQ82MFmLdyda5P8i2q5PVbNF526Q16afm98Jnb86BwwN5zPrNNTy",
  "key13": "5xxDL9Niy1ruKUCX3kryhAANw1sSMqFfa4aTkDJZXeq3wk1UosFwWVTqZB2wmPbjezKz7uiVea3KJgoyYJEMN9m1",
  "key14": "3CsKWRsawVTReCLy6DS5oDavH4kL7jsvRFf86vHtAk1GC8bF43cTai43c98nFPgqgFqhBUtNSaaVNtT17NdxBH34",
  "key15": "37UyQQ2VM3bD5vPD2vcfUBa4NePjGL2xeZEQtp9hK41XHwVW6LQXVXgSmtw7GrcKKpugWykfTVtbafQiCzouMWK4",
  "key16": "5mCbUBZpRR9wU3B8CFvdTiBkXnv2ubP4bVphgKtkDE7FmrzZZrFgG5v7DSigB2KuuvmQUiDrJ4YCxn3gDqbrvWJq",
  "key17": "5HEoUgxQE7D7r5npnNZX6tYN8MWnEpJSoKhvnv3iSz86dvFG6ewuBRPHb3qjiFMQaJ3mcqBgXYRM6MQhrMRnx87t",
  "key18": "443hgkFSjj3m9cXDmzJe7TduGQurQkG99JmvPB9AbfbKY6yFPceni6vWdTvxS7mU2X6GrSqSBx3pNCXroQjRP5Ur",
  "key19": "2iQVy95VqG7RiFRtJczH5o28jwbY4Q3oQssDSbDsbJGnEEDvE5q5BUrkc4uyYT68bMBPC86J3WhJVRWgMcfGf8tB",
  "key20": "4Khfy6GkoY1MQECtx4iiHj74AhapTRVNPLzjoqgLhNgre24BaCB3XFqN7UHrYDL3E1qWFpG3zVJ6PS3E3UxpWq6o",
  "key21": "46MyydhswCFYU9ymnR9d7xrRieHzf2xLrmmjTL6mWTmXKNtb6m6WK8GXEptaZACgC58BZxe1Dhxihwx5uDSsWr6",
  "key22": "4WVsPhjGyGUCeqBfbkprxfP6wbN3tZjPESqUTdYjHXvUnHceXrZN6VLsGWrK5BGsMzCuasnccEXcsEEczhoqevPy",
  "key23": "3LQLjPWajdbAtmskkZvkwzT3imXKa2wCa2hMC1g1qs2rEkHtj6EVDRzLjP9nFyDQBvJjbTfpoqez1jNhKMo9cuKj",
  "key24": "22kuye9YbH3pq1pedihg4ivkWuogoH7LZKwYct822FiXpSYLhzUWbZZyWuqGeGShH6T5JYERZgJ7TduxPxNxLLvQ",
  "key25": "nWFN2rpjfSna6np1SUd6AmJiCiD2fxSWtXqaEKjsM2eoRgHQ55WDghDTJJgXkt6yzQ73aDZN2nNeppH2hFARUKc",
  "key26": "61pEbjK4XSCS7mAFzJofzBAyh4dsgw6edA6SgMY7GxFB5DrFG7X2B4dr58QKfsK2N27vjLoMr1rHQRjHJ3d37NMK",
  "key27": "48okTWqqFrwPRmSnF9aG2wS218LEWswwCUo8kA2tBrj34FUneHgbC4nVLPn6jkpwJ6LiGiQyyZVBUJ1XQL3Bufin",
  "key28": "4T7UbW528yY44ySdmWxRSbpjFGekcxzDm5m16MtsEquEzvsJLCS9fruaJP9pmtYjSfXB6nSJHUjsWgGaBDBLGxTc",
  "key29": "5QicLvKjR7WPcfQ3b6D1gU4mG56qLkTmHF9fEnJCYawb2ye7me4xdQVzb7m2XBSjSikZcqtscNrD4wJdcuKNPzja",
  "key30": "5sGew8KDX6DmrkxRpga16DjvtvNzS8byM7o9CbT98XEkDDVCB5L7cPZnKQC84zavA1NYazp4KhBJThGmd3ofupGc",
  "key31": "5454Qv5yjdSa18QX7hWrXuDcaMchw6Q2DiWg1u8wmPxnnZYXT7d44zDgfVBp9cvcz7UjLA3dJ2Qc7hhqQzHgRizy",
  "key32": "3hafwEjtv2MsWFgEDdXnFthpuaXi5BKyMDtWdw3h7LQRYyoF56WtHKJ7Moqceypa5pd3NwYgJqfTZUYtozxV3dmE",
  "key33": "cCQKs8EiPMBH9hn3w5kfYVuUWiyEqMDLKH7uAG4Cdxhut4emBXyJHnQkJ5cXSgTU6DBwghzKHbkFcoNp9fX8S2w",
  "key34": "4KhRXxdaRdniKxZmzMKY8KwewY62wGmAskNLRTcPGm2CqHwYzoXsnsk6ootcspWurku3AFouzhxrSg5oiwPFjREe",
  "key35": "2qxVAwKvZ88KqemiASEw6H9nVM7tjLeu9AGz7pA7hmT12qccGbVkHTfQdSykb3PEhjLkVkzhhNbp6QhK3Nzxxmit"
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
