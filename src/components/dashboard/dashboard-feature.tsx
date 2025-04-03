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
    "5yvk3hZtxUUKh626CJkkQw48herPuhoJPwACjF7pMZwYrMZCxoykx9zWDhha3JLNTjbvbkhzZZhqpdqiu3YZGM1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nisuVb7UU4zZb8HXbaJWoaokGRhTtwL22vA1VjLjKFC6ANNxSfC5WU65eBAKyMTRKKRqrc5954LSS3MAFLLntTP",
  "key1": "5bUXs1R1xx5mDp8NS3wn3K8ijvBug7k1Wjiv6u2WNqRD1hSnizk5y2WwLVLnhprEtDs7oZynarhycFaQYuxjszwH",
  "key2": "4ixDhLXcNykBQagU2rWBy2MLbpwcQ9HaxP6FMLrvrYG3hJv7eWSeZAqAasCPVFrjQ9p93pmMFNFRDweeu4RZMEfV",
  "key3": "4341v3BZqbC4Hy2mTg7Xpmq8jraSsSBGc5oHRWwmpps6mWGsFF4uqMnX96fYTJpsoBBfmHv8HvqMRmeQNtTozBZU",
  "key4": "3aNGASyFZZnVEarKy3oxcTVfSR6B2GkbZVe3qio2htA3sYrzJtXXBPZP2nZ6APW7ZD9FvLiwJDV62Lco2zxe8w55",
  "key5": "w2kixeAV9VZca1r3WQbH1TTnC6wVTNkcf7HB2PZrkHse3ybu1vhtaDHuFLrGk2EVbcPFEhmr5ib3BiiZvWzRUmP",
  "key6": "2NiDTaKa21gLWZ9SXqNPNBCnzugfgBgjEeERk3arL8bwzdeTgxpU7jfqXBqng6wjUR8nLC346xtuXX4Wt1rmnU55",
  "key7": "3NuwyJyD9qAgSarH9tqZVMVUmok8xUN8AZ634xp7Vm4dhoJLPdx8sqXmMAHA26Ka49ukMwkK68i6Qsg4mYAq7Ryo",
  "key8": "4SnCeCkJ11jJsM6YkhDiHQdA571m3uF7ZfEacVzLYKx97vtJDCS9dW2YVzbH1XznD3wwtKM1yH1g3SeCB3Aw7r4U",
  "key9": "3XPnJdm2qx3ZiV4xiSz49vtnZQxqFwQEfKe8RiUZToSuwQFE2BVbhLtbaeVfniGKHaz8d9r4f3ZBMeLZVwqVRPNU",
  "key10": "uCRnewbN8piokH2hbUAHv68hFSzbAzy8JSfrkNRnkrH9sSwkHa63xsED7ZbgmCj51PwVtxeq5a6bmJLQUx1Szhp",
  "key11": "MG38L2J7L4FaiviAwvyWS2bykcDm4zfa7vuSYqfYxiNF5qE21KdnxWp8hvKdrGBddCQoipKNWRBjwVCnkGhVq3G",
  "key12": "5mh4h3F4uuxhpeS6HcxraoHdxTTpWZgFUWvkxuC749KD6RKc1xUeAmrgv6NrQPQRF2m9c9bTw1rQQdCn7Sz1DMe3",
  "key13": "piA1cKu3teM5jj8vaJjhFkfoDDVNWp42V9nZH6KW8DitmaYUdkNigiP89QDLG7px3LeozVscCvHWJbhEqK4itvy",
  "key14": "5hcDv4y4xETjni7p7XT2GHgvHJqY6YpQNxe6P5kKpiErTst7aZeSoxM7BRwkeGattkXZZHDvWajFE9oXug1ppzeT",
  "key15": "54CNCgdY5Xqr4EL8Lz4giLrT4saYzQNXvTXRe877aKugSCcfWmBtSjU8McDQfCf7mVPDbToGQXweruTHKe6btsZQ",
  "key16": "37cw9UWfTYvkDt6adbbRKfAuB3jhSTi7qAVw8s6GGTeTLriHD3QVrbwcNEeT6KCtkUb5fUzQF9PEf4a7q8yBJZe7",
  "key17": "4Rw2jrNgVEUkWBW94B2SDKMKm6qBjuhQNYVf4Bix6iW2gdcdb2Cfw72GNwfVrq6CrujL6j7YyiQ2gHD8twQsh5dT",
  "key18": "4kHB7zD8GnJNgGJEUbiC3YWJfXw4q5YVgYx7dtEWXnLb4aAyMxCbLjuzarixtFjYArNjb2Nr7UThnc8qG2hR5srN",
  "key19": "3BfKTh2bZ32hYxhiubjccefppJM9dGmDRbrG9gvEwgoRf353xvtS47fQeXT5dCiM67ZKg8QyXDkvHiu3pRwmSC3",
  "key20": "bF5Gwkj4SKKp6siuGnipRhCU9sQB7tF1tk38WehfWAwGGfaMCe8BMPG3wVfddgygsJNAoVxUhfitfkwisk3Jui4",
  "key21": "4C9NqtJ3m8UX5VF2K6FMJRPb1kcUz5rRgTbo5hEGgwT8qaXVdtm2ytQgDfnAb5e78U47TptEASKzVJYXtvd31uYh",
  "key22": "5EscbZMTQESg7ZchGqe7iteFLbHX1tE4Pr6FCcWtRnaucDTmTedYChckH2hExijde3PqnFKuLkxMiBDn6Qbk6afu",
  "key23": "2g8fCN65TqJiurR7nwRQsWBXm4KfbkXfeSG5v7zZVCJCYRwnb2LryxRNy64Xd5bAyuuuxyDqvVsDmSf9ExNzf3jp",
  "key24": "3ENLkTKehGxVxoT112NfWcQFKhKasoZ3RaJEbrCimXZZiPir7QJM11TEWawqbPTaPc1QZLsALE7YNVMpARCDfeAj",
  "key25": "t1qccxmhzG5953ExkQsG9FJ8RiEkh9Em1zQQqoRsojYrBFwPUX2JVv3qTMhSCfRiHUGDj23zzg5UKL2evCdWT6E",
  "key26": "3gsefmonLSMYomEucGjgnwDBHJq5HRUzoCtyv6Y6xNSkRMhSwKELAzJxsbxxUKtnV4ZYG8oTqQoEkx1xCUxn4aRN",
  "key27": "32NqYpPKffUpLYZ42Eh2SbvkfUwvMCTBeco9NL7VwU8FHRAUvQF1hD7ncDU36yh2NZ946wSkQPuH8mSmdotqdeJS",
  "key28": "GrJs1mEM63SFSKgSXaVfedx5jitZH6pgNsLswdNUuwJheyAZrmQoK18qVCRsneZASVn3ciAv7qnDW2NXGfkYKK7",
  "key29": "UHH4Y44Bd4ogTPDkjnFGA89oB5ohdLhM2mQnq2sjPhqi6dbFUt3YxyNnHfWVok5S8GMPBHKjDDkjrTz3armJLiP",
  "key30": "4eMZ5PYjN5LfYAeyWXHFPAvg3vyHam4i6UbSPVyxvxWbz36VZXgg1CiZvCV68GP1rNU6ochfM7KBnCYLWwUpdqhk",
  "key31": "3EXSEL2q1utdzvSG7EXLkLCtF53nLw1fdKxppk7QoDHjTPQYRjwqqk1TBUzc3yg19qTbBKpYncSgBG6pxppyZj4A",
  "key32": "4YTjjsFgSFrauesTAgZKAw6MGEeuCAirD4BUkTyvajo5u6YEoPithViYLtp6SjE3xvgkT9vPcRe8shN4PB5r5CMU",
  "key33": "3TDSQnDdKDXU2wvjGc37iW28BmLaEE2kEmHuKRCfeKVTYdEEgVNRWPrsF82ipePX1ULXE1Zejz7chTLSXzaLwdU4",
  "key34": "5J4qmWcN22UDLoo5rsjvGQrb1yuS6popeM9vz2Tq6RPkcmy88BkibpygKegZPWT8dwrFVWd2CfcwNap5m4YMmUGu",
  "key35": "4GxmygtFDxE4SuJBctTxytzifUTehoKXtdbsygpMh7nwwwmxfAjjZ6dGHuom7gGjJx2FtXerNttCQgqH4iVyLAWX"
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
