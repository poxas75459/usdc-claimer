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
    "5WsM87iXWmp9Bw6WqjYZKRbErUhyhQ2hmn63ZJbahZKsggVR5MSCYR6SaKudNeXN6h5vZaXygyEuNnwUdV9rZMnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JuSQvDZEaSers8B87MMSCdrBavF5H6JGdHfBzgpidkfia6UyabLDuN6dLhP5roCJevi6BoJGs5kffFEC2oe5krh",
  "key1": "4y4q1oYEkaaxp5Ddx9PbfoK9noWovbkigFXHdq9RUxKtAajDUG2wZc9ZST9kekKF9ib4Ca4UZxgzXAXxvUrfJANB",
  "key2": "4FPGYUMPNS62QSdtiDK2vBYg3shJrYSFukam4jsoUF9XKSGuipy1LSqJ6L69wqDRKmFouV2qQeBJAhqVTsN8ZtyT",
  "key3": "3WmcFRVGyAGVptimzXB9uvESdsYEc1EgJ1N4UVznBKcDCFXZx5kEmri5XuCFgY9kA6t45RUU8jyunYpvUYgRV6wo",
  "key4": "nnSJcpsf92ASbaPFKDYJCEDcF1Ahm9kAyRTGoZABqcx5nTjyccAobcMNTB8RowrBkGySm6Hp3MaKfKvBg4c6u6u",
  "key5": "rCP5Ch28Pe3QTR6mhoJzf67ZGu1hG6kEEVQYuZT4QYxbLaRzuEASyYe2Nc326ATcxNQs8Y1NwA8NAZC7rXsPHSG",
  "key6": "5KVdAH4DC3347rpGQGTu9DCmRVmLkLui5LZgjxXgef5ZpBQRS1rfSzdNLuqSLSezX55LtHcDHH2wAwH414gGmvjC",
  "key7": "5KN1erhNNRNM2T2d4rhbYe69xzzrssbpvCawoeEvjwyD1thzdWa5bTFDnxEqytjawHURfypnRCxoFZX62iCjEBJH",
  "key8": "62tJVtb5k54KCj3vvE8sjcTUtSDQq4UF7XhxQuPTtxLeBMuETZE4ryasU7DzrhFnP4Qj9iEVcpUsAHTr3Y6vxcFj",
  "key9": "2RwUnNPHMeebdR1jJNzGj3M9bZzb3KjbewXCiSstbEEj6mNQsd12CXbfvscuHG815EECnWGpa7sPaDnHjotKH3CQ",
  "key10": "ktpCZ9J79itZ8XB8u9wH5YkqXnN83EHYkUwA3fUk97wvjYycmbKBWeui9caum9Qege6RDNEP1zwAciywvWUZSAY",
  "key11": "2CCMx8R5zBJT6nbGf9ZcCY44kmMK3m1Rjtu4JyurgnPuxAg5RJN2ZrREtG1Sxr3PLrLoBwHrs5S8WZr9GFJqZzJn",
  "key12": "63BvwzT6rqLkk49KTDLCUYgRmfoqRDGs37AVMJmNPokyyJGtdryPYgzpqUGuWDZuN38unKfT1wDWEx11PJkpYUgJ",
  "key13": "2w4QZgY9GVc9BuJ2HPBxDnYNDKgM78dKS4F9rfZ4E8StfkqWnXBojk4dwpP7QUgVb2QtHMb4GKk8yUwc4UEHrYB8",
  "key14": "58XoG9M4qse17mVSxWAZyVkzDdaGJeu5xcRUu8ALzp7qQbDibiQnC4emk3NgkwVTDe2g6xg4yspY5aiiFLGFXQ8F",
  "key15": "wxaSgMWsyYE3KrhjH9DkU8kHTVyaj6URbfH2t6zfFJgP2JtvUTAXwTsq47rQymj3G5epeK1mQBAKHxht6fvEcMd",
  "key16": "2SGC56Q2afiU9gVBgPdtQaP8gtLwoef3LPVQbBtah6kfBXUVKEWJKYbVvxcASJvExLjwV9kY73ErHFg8jFEqFYyq",
  "key17": "PjpJfW6iQqXWfsgD5LuggnDBjaWL9BfvpQMApQynaTWp1PRYnRe3K298FxqyhQkPsUDQ1SB6GErRR5SBWGybEv8",
  "key18": "2RG8nhYTNBqRFZhpZ9E1EwBeuDavYC8t9SmGbDX4Z4hBVyHGyzGQ7WL2wntAYFtajeYDZPA2ABLv4wwYfXhS8Dfv",
  "key19": "6h9XoX1DE2FG5ZGHHihKMMNVeUxaeuzH7tVfWFdMW1bzt59pvhhHAmvFruYkrnB2AiQqKj3dRCGPpFEc56hcJWa",
  "key20": "2NRrpL1oUQZkbhxdbXbDBZiv2XfPe2EffvaGXNLJwFqTy9TM5KkptCaGSdJkbqtcagjc2juHj6occWZxNPubsETn",
  "key21": "67e8v5UYc3i5dgwvCjpod3YkxL8XUzb4vGDVcygpDXuTWRyQ3vXjqTpfdZ6ebcm1MwGoRxLsp9r5bDVZeW1rEaKX",
  "key22": "23VM7WnALr6eMj4W2yDSKMxKd3qPZNvyd8n3QDayLZgnXK5NiYv55xgQ56pkDdc9D2zJFY2vC6b2PU1FFY8hr3rJ",
  "key23": "pFNLFDkiq8yJ8S7X3gWyix8LaQhifcKdpmHystkZtc6tfh95aDqj85cgBbYthyutAFqzPcAUs9RsrdZADy6uMpH",
  "key24": "5v6Va49htYF7P7TqXBGyh7HiiRvPG9P6xUrQ9LDwk9zxrVKqyzYQS2TTa6B9drubzm4sdFtPj48oH5y4z1do8W4p",
  "key25": "4dZzej6teVr3C7BoYzCNDEuhCKvULAfcGYyDJwUnhMBEbVvRiADYA9hGYNvpMFRpowVFzN3PnW15Djn74MLrhAtb",
  "key26": "5Wmb5xbe2G1wYFZiKVbT9VZb7ej85es4mL58zU1uEDue1sjVjLh3E9w4bVuhoCasJmtm2rbvuUMWHkVSPwg7ZzQw",
  "key27": "5SiYPGEY4Doyuva339Tb13b27oawBsgC57ZySyTR9sHjLZoQWLXNET4ZY9St6yi4nN8hmdAwaYPh5o8GEvugGSVq",
  "key28": "4KEzrJThTbXPGz4euHRXfLie5iwxP9f5KLqWT3xH4wetoFC6WbgBDYrvTtnKNdWHMdRhu4YCLeuYgvKrRC6PYNKp",
  "key29": "29dm4s359PCHQzPbjC6vFdJrTth16wGwYiLM4hif5mde1kmNksn6FfbXWv9g4iVbb7mFH8ebt77woFSFQGmfzpzS",
  "key30": "4gHCCfcZeSTNHEvpNokdtsLnXaXf2hQ2yuHrK3dBcBihJ9XMrx1719Lyy1rEPXu6jzhYTu2ZQftmfLioX52P7jpz",
  "key31": "3pkAoLF1QmR6ZYdsBLt4FpkYowhE4PpueojVgb9Qz2P1SccW68xVxMyoZnsaXAjW92v1cCEBKnjoUjnVCww3TuMm",
  "key32": "4dwanP8wCVAgRTG2G8z5s7q56fe7qHz8gTDjtpZ2ARWy4jYje5LtHUJKMrw3Mbo9uM6S32F3WpE5oyNnMYhNXCm",
  "key33": "458VPjd9EPoyFnYTE1zMsCWZRzza8kp85CFW3wAUzmoYXBaPQ1NRzfM7oWVhGN2ueC6kLfRsFbXsXK6cpxrD4Ym6",
  "key34": "2tb4NbpEnETdP7fkXCELL4bToFQNYvemYwGKhM76MsenDna5WBCJYT9zUynkVxMnUViiEMRHwwToe2rurUexrWTV",
  "key35": "2QnZtMP2UFtQBj1LpaU4P7fth3sXdunwTPLJhE7uoNzrsWQZwfegpXWP5ZxRiBEvWhMkgde7k8yifh13zVHw4e6e",
  "key36": "6AnQXMXgshnvkiuReuh4hqoVuPKvW2CpiFsVdW43qqms7nsZZCF46BF5ksdAGLDvUgFk7RVYDBCvyq6oxqJRdu4",
  "key37": "3bMnvicTxBmwJVLJEdyVnJUuKxqhoq6Dx4bErXHceTrdX5G5wd9eNZBFmUAvErv8DSVP8jENG5neuHKX2jgucjSo",
  "key38": "56EP6iWHTAE8mWhW9sv389BakSJcQJvxrs75sBuDy3RNrB3ajBMb3GGzWMGm4GjrorNze73beDRbdWD6BBRAudu",
  "key39": "scLc7J1vbEB8UYC2JcpzmE4ojTDHJxPwSF22hqUUFSDcBGMVS1xNiVwVeRmgMooqxy325Bc2YeZMNvct3YWjTy1",
  "key40": "4CQhYreSGLXQkDaiueADaBRvNchp8qtEs9VUFrxJ75irqLLUzByrPVRpQ6wAB6xQsm1MbbmebVQjf8Av5MQgKQyd",
  "key41": "31uyfvUoji3nRAkLB4nZh3mRnN1joNvPh5823EzrU9rZhZ1RRYe1yAytxBjvsDs4h8HoKXX67gmUkHBqnDdZ9qin",
  "key42": "35tLMazrJ3m6WWr82fkk1VuagtYvNc2ouuZ7KE42AwBjo8UWvYHg3qWirKH9RPrRsumojfmKQJpTMzCK1Jmn1dZS",
  "key43": "5W55S6jHxHS9CjfdwdqyUaokCZBvuDcg4sMXDjBdYoU4RfXnKx1oKcNFUqi38WRs1dy1jrk1rqKNYYUwcNETK5b9",
  "key44": "5z8WeANHsYQgjiQcf9Ye48UvQpzRD5etdV6A5Sc43kFfK8AqgFfLZ93wazwnda7KUeLMnn7kouvqX3S8YaudPMRP",
  "key45": "35qaNVBTWKMv999WB1JEHZSQTUCDFL3V4yDesvgYk7MXA65GryFmX1raeRBaZPcS174tsJsrZHkAsrvL6YeaHENS",
  "key46": "3JKW8SXc7msDYXfJn3xRAJVGQo52v95vV4QNbytWrP7WbucvqQvxSkuKFrQ5o4eEcbS8ABFZuwCqd9usJV3kpAdG",
  "key47": "51hRE6xReGGVhbsa3MJ3sEW4RkRwjS5hcHGsK6kCrQrwrqBDzaYFzTK1p3f3uTMzubxry3dZPpDKtb3PNBaAy6Xn"
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
