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
    "3Fx4Xscu8X4x7f6BCmYoPcpg3XaXBo7VUyfQ838Q8mbZRByYJitJafABmv2pxBFwBSb8kjzGw7aLe4JFBDg8WRp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AaKy57qQTFHXRTS1H6UrwP7uBNawi71JcK5K226SLaoRUoxtBfjDvfTNmZxoc8XDDkLxJTSHTW9ZK2NSjgWgYbQ",
  "key1": "3g796zZwneZDc8Mv9SCqfcHMDHLbAxgx3FSe5JsWb3hSAHMLCUvFhLZmGWtLYLDExQfh3MCmjEr8HMt5nrLwryBE",
  "key2": "eMo2ryGCX65ea454ixLK9kWHfW9o2vMpa75qjx1F5Jm2wB3wPy67UndA7xuEcTWwARdjw97gH4Xigrij9wbRKmF",
  "key3": "548z8i5GNUQ3u6gTgnGyG3Er2CGSRqoKBz7n9nVG3oJ9jTesdGw7MKPoT9h2xxjz4gA3BArFEnSgsPBvRiQvNr9A",
  "key4": "4k31Gdkgxd5ZMCQG9AYjAd99yLL6nkbHQuA9T8e1AdcHahJmySymJMrZm6JcnDtgLWHBLareYt3XFxM2ELZKysC6",
  "key5": "3ZZpc7VY4WLbGfrrvDUX6xK5L2bxoozsno1vdJLCpxAX3Po5YvaT9aFP1jhLS4XRgVrf3ovo9kos8QpxLnTszVwA",
  "key6": "3jD69qgS78hxYbaF3xb4gB1pWqTBmSsPfbfLcBVjpM2nQR13xFEDrt7o1QwgFhi59hug6cjqhuBGmVGwXxekMELh",
  "key7": "tD8Xo7SheQXbpbHBcHqsYo9zPeb7Z8YcD3YAcKfkbRFZ3Z6bM7vD2FWz1BKDA67GfbX4vuXaGWz9yF5WKQPdoGK",
  "key8": "2wKyc5PNSmLfJPH9etQMw1Rjw1FZpUjwdxESScvv1mcVfMzbT7ieaKnPpnmPxAgMZhZ7N8giactC4fMgRMHjqxy4",
  "key9": "4yS2H2V43Muh9ZAej1JxCKxRqsxU8mahbWa1aoRRWXFMa2B5V8rtAnTPwYXL5NQ1tygxFV5fzTvc6T5PgnVQ29Ak",
  "key10": "2nw8iea3ubXNCxeBtiNohoTVnEd2BQV4SHnea7MDrsStAiU9DduGCdXyNG9x8DT8Xh2XNQ4t9mN1DceSymwAGEgs",
  "key11": "3EwCqSak1djZUoJw6hk1YQTuaJpmPsCL3FoY2mMXMuPHSuiXu6B15VtbQCJZw8TE8KMaQsyJXvhVggLNc1LwWsYt",
  "key12": "4HfBeBppY7KQmUMwuWoZcNEEyQgTnHiAQ2db9Xr93wXyWhu2WsBXJ2tqKXMM5nPHY2gpbfpXqBg3Upv1WR7UaSwQ",
  "key13": "3PLhGa9u6dW9sA4LBXKGmGZU6dDYwFtPq8zREDFtyBdBfU7ZEpkgDXv7asz4X5Ct8AETADqjCoVaB3Cgi82Eugh5",
  "key14": "wGewASQJjjS68DLVq6nmrzMXmngBkkdNGccyoozxaTjspM8MpvVzRL2nKD53JJaoRiVxFU4WLjuSsWQvwXT7451",
  "key15": "3zsvG2nUUjqho1fj5RzY6mDdNtsR6gm8K9hAji2BbXb15nnV32aMd4H7UZNSF3JAWkARudVmUPX1LwFyKCGcgnxw",
  "key16": "4DVfBdfGCz83FbWypQxAvfskshdP3UMgSK1cRPYY1WLnFCfJwFmYvrZ8MKzegCtAYyw6EekQiQBEQDXqkhixKhz7",
  "key17": "4xniYK3RQ3K6w54DDSEJagShG9xxYLWq3FY1b3WHGnKDW9v7Ay2WM7xs7aLJwHmfwoys17ynMw98MXdvv516w122",
  "key18": "3rMTCZPMeCkstvvacDyP6YAjsiF95pXNc9VEBd99yekngfeDRXY2ChJH161jHCfzqfyFmL6qZHTX1LHfVemfLHw1",
  "key19": "MDjw4K7B5oRZSUyChZ6aTXLZrNSXmo3Zmw9dzFyZ6F1WhzEcfzPmKWi8ccdMMbq3DJ1XJChEy48svoiSkVDXTY4",
  "key20": "DMQmxPkzV6CfdoUUi4zmw7VMVKM45TFXV5YQ8G4Zpg6uDD38zcVXVjud9Q5tdDiBaNQxgEJvUbCPYo1Hah6uRou",
  "key21": "39GAAXsAE76CqMrAmd98xbEQauBtPBxjZEBj4PMdaXMvBdYgY9WQAcLX1VFyyaFg1RDxRVb424LxSZCyYKi7JMXK",
  "key22": "453cvM72fhX8tWiZXwoGfAdXmsup65bGgLSEpEqfe3rDpkDWHg9CqmmPXpkjEduhkdGDmp2VKCQoBBnR5kGuCgjn",
  "key23": "4AwcH9io7kwHKqTJUKpCXG4MDo5td1DyL3Hai8cgkQz4p9Uy6w6DWHVpzyNmzewiRcgQXmTQzZFLdo6YhYnDLGfE",
  "key24": "2Hqei1kS61qDTX4bG8Se9KbxrUT1GYwZ2SaYby5hqDHomQVAdMbypRsPZaoA5t5LSbN1MtjPuotaJ89uciqJmM3y",
  "key25": "3N774NUGp8oDYkgTzd5QVkRnyHrqMjH1rBJiXEt1WocGa9kr4Gxec6pWE4rBXjcqyErV6USgNTVqEYhJVQFqdHyk",
  "key26": "235RUpcJ7VbVtXEG2A2wko1XcnfiAgLrrf9SVypqUzk4Z8TucmG9V45PzXJZ3wVseU7jUGCiMzfLm3ExLeySRZjy",
  "key27": "z8NJ4yvMLxUir1EQowAwk7WfCraCJs3tZWj6tJxupPTwQRLxGnrbTftafpvC5s8pzqVJcrm2MTcCEXjRe1FMeZC",
  "key28": "3Tz8Au2Qjj8XeHnPkAg4aEo9HhWSrMgqPC9T6NqaHCn96SrTzWhpXU1cgSVVNrC1xEoiHuGTrNvxNndE44d2VA3z",
  "key29": "2Pc597pT54vSwpvcRXdVee3E2gbCLUuEdFHP2cfLYTJt7kWBTybvExFmt3UaNH55pEgFXTnfgrezZTP99iWFeWa5",
  "key30": "31HWWkkijbwETonPifXkZJBBD9sRRXG4X9Qw5n3FmmyuseaE2GmRekrZtmtsHvjL8y7KcL7tivqQKwGDbESY85mf",
  "key31": "NXUbc6MzxFwZcGynz51XmHugYpTwaPFFcZc69SXpcYjHHWZawBXQTtvz6Ed5WM6LUcbggXpD8xcXsd6BMtvxGey",
  "key32": "3poUCD2WL3JFdFHtjnMN26bQJ79qv1hpp12RG6v6XUta9iXMydkFmZTrXjPxDiaiyxEjpuW7z3AFPtZk6pRxPcxu",
  "key33": "42pEsL2nexLXboi6DEweqmLqPTddyLjHnVAhfVDABkeKpmgRpJcnzfPmY2vuUKSZPoAUZgW1SZzaVXfRoi9pEKGc",
  "key34": "25dKodUBPv154AMr9usezDRCvusuBY5sN4iJfgeB4CEzvNzpXGPTkRDdbXKZEyaPHKFhCcLwdFGj9ViSHNAezESL",
  "key35": "2z5E8hHFHyuJvHtR7FdMXRGhUxhdBEMwRYo5N26vPH78uy6pbpEE33q2T9yd1Nq6y4DdTpY2sk6zCqZmCV54AM1a",
  "key36": "4p4YgKM9zmGnPw5hNMPHxMtgRccNVvJjWoRMqAVYPtswxBPFZiWtWUSnqZDwUu95oHiYc5UemeF4Tiog9MktwYjC",
  "key37": "57x1bat3gzNSPi9bGsBoxnKM77QGz6E88vFDJqvRZKJLZzn74YACU28z8gcG4ASsyVvj38YBas5ds8CcBWhxGkeC",
  "key38": "dbxBzrSsbbukDcGuy1Dn2yQKYjUC4fQYujVSCpVjEMCWCKjtgRrJwB3v24eDwrX4UetTGjBj9zhrQGfnDijvbV8",
  "key39": "twvWKujg3wbNp5JdXFsWwjjyHxQHpzdHuboJ3K8bpSYGvjZUxrP1RLRJgytf2Xy3LEKjrmATeURT28b5xMZ2jKE",
  "key40": "2TNJiREEBS4hJmg94R9MyM9ShY8zRirqK3DrSFCtNBmqmvCyStu6gPgDV7VsJES3CPpvVws7gex5NqaVcENK54oR"
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
