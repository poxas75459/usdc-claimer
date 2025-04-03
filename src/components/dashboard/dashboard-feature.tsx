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
    "3rPNmWkDreKs1jyAxAkhd7V4TkrYMZWbF6At47vbxq1fSVb5vYvMu85yszYHBAAsY8ftPbhC2Dij19UB5jGa1Htj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6q4MReFxjxhiU1F9Ha3xNFxGCp1kkTTXZDxJ5ZLo3q61XjbKWkjb6vizA9injHB1bbB5nEaDkQrxdjGRRFJ9PA",
  "key1": "2UxqEErAZVbKLeRAdeGroyxPdeAgYwsGSEF15kNZQawVvaVSMVfaVFTJFiyo6i33DFajdaAVQLWxWynRBw1CFSVz",
  "key2": "4RfmTLuZU6HSG1SnXzWXbZ3Uh4uX5M8b6cJfgwjybeiJUp5drqDuBXQGHgdE9WjBS7VbGr9WT656egWEJzkuDBCd",
  "key3": "c6LXfoGJTNYLskHXgPbkCfynTPRrrZA6ksJwYXEcdC81ShgpwEj8ZyXV2PpTm7wU1VC2uVRSdPFn7eC6LbYDuhq",
  "key4": "55frK8L6etBQTE9GLgDxKEbV3JZgRibYoz8RHgcvLUFpFrL9omusEYTMyVz35i9SRjTm6AmkPggcguNASTfA4aCp",
  "key5": "5oZyACqkzE7KJYXBV4NAkLrur5BbQZr89j24im7ioKbKPWjwP13bEsDsS7iYihfAKNGwDtdDZza11tHdonLJLhWe",
  "key6": "8ebEgrZ5Ls12MNkwUWULNp7wfeFMyDA5w1zN8SDbMKwrzqnAPEzPKsWXTbNXffE1JMEFH3bAGMpMn8uVvC42v4g",
  "key7": "2aB1j6zJzPAsPtH9BgrQprsLYKKkNvi9UCvhmsJuH9WybAffqbpPBThzzwKQNVm7CZSkC6iMQDE89UTeXjhUeRaw",
  "key8": "5PxxPtL6Y2BAatcrYdnsg8FGeq2BvkxQjsNfQJU4Q4W3yi9gA1zzemU3UZ6cW5Rn8sVRsUXzECMgU9ku8kiYYd2Q",
  "key9": "4hnakmx1NGTWsRG4Q1PmD8iUrwSZfQqgJxQTpwx2ypb4MdTi4HZKGqvVBNLQoG598jhYx16Et3d8aNHtKXW3ommX",
  "key10": "nXFYpcsKi5rZsqKJPzvXSvBiRgoREYXANbiHNejL4KR5roXgAJeiV9uXe9HBZ4YRzQm7FTYrEzWfFsKkUVFwgQ7",
  "key11": "8eSaaG47znyhyPbbSHNX77gqiiHTuALWkZdsT1Dr6SZ4tRaseeRHC818j5rcRhyMXZB8H74C8xeFJgM88eQgvd7",
  "key12": "4V2i5m1gCZtZW1VEj2jWvwCKxodkZYsgfJpKtiAUbeVwP3EUf4Q9B3qGdES7HbMS2mzu4YA2ECvNbx5c4ypUZKVV",
  "key13": "2bZBXnefBDro1DMaqoCb79wgLfr7q9TccbY1EaVqM79ovjJe7eZ4SHFJCZoeQZAP9EbY1gKwhcbf82Jc8UMuVRcP",
  "key14": "cYhghEsDhU2rdVNicicb6Zj7dbNKznNHGTEWcF7b7k5M6rimgiCCXpw9cc9ZtWLEGuVg7AtMf82kwF45T9sS7UC",
  "key15": "5od8YE1Q38sTp5NKx111iTiT4DZeiVtesaJD1AoBzebzy5sCGfDLut2wZ9K94NNs4j7o5W3L3d2QLD6iUBWbzAP9",
  "key16": "4JCoVfTLdQxzm9em1CBWimQbdV69sUQGCiZRCA752vV5672T45Vrkx6e5BMB54fr2an8KXNGKy2FZgvcRbdVPTNC",
  "key17": "59BxQXwunpQvSVhkhx3jymzz8dgb1MXhjXUcPAQiJh83GxqFuK3Sjf54yKpyQfyonvZefBNgLJajtETmMEMBgk3B",
  "key18": "49M66UT1tJVjk4d8zFhtPn7x3hQH4Qg16TMSYaYYeAX7BS2yKf5XrZnLdT81pcnKhDZbgswwPFtLsrAiquddKMAC",
  "key19": "s9hC7TMEjgBeLmYF9XxyuLGZifgghULnqKvftkPyn86YCX6SLcMPWEz44S9qnyAFuHxWp77AYTvN7jkkoT4HbWt",
  "key20": "28wHVdvsAsrWQi7677xwAkkw7heyPRD9HrngtTo9qNdaczsKhcibwz6igx8ZZ1LrStG52xCud3ckXZCJwAVZwv9r",
  "key21": "55e5KwyzwYuFUKNwP1BMcZdxqq5tgPCRSpSLCzdpRu4UGtNyzMSnzKK6isjhjoPacZRYx7yQyNue4ggwF9zJHvQJ",
  "key22": "aoxuREuqQjBAkqcemKY85bW5s5SQjQoYSHXXpyUWNpPTQD6vUxtJA5r3upqHARHbqnCVVZLgjjaiUKb4KTFgt1p",
  "key23": "3zUyqbB9RPhr6QxbVn72sjeEixrSQ3Azkp3ZBxARUVZwYYrroFoh48eksJU146HfVAeaUGKHNKeb52YEjsEjuHda",
  "key24": "5KxVdYvra5WEJkCyCARDg1b2PDUxCxJEMtyEv83ToJHSE7gpbpMvqyCW4j4j1oK7jXPQgZL9GVwUcy9LRRGnCWqJ",
  "key25": "5Jw8a6BfYHwibq4QaFK1GaDoSaQrAibVbyGF1c7W84qxdFXXXdEso9NZwsLv1vmhGTN4gJ344FRgR2dfsGahDaAG",
  "key26": "RmczqWihQn26SfdUeU1dAzw7BtCd8Trig7MRnychw7vdMHmp5i9hFoQzSKfvFNYh6b5Dwz9iyX5jpknPPwDTsG8",
  "key27": "3y1gJ75HBRu4NmNFjwkngMNeSFrRXqwqQQasonmpgBwT6ApurCTkThNcEzq215GiSmsNESpdgwWpMzGKqPWyaFz1",
  "key28": "bk1NEjNjPqY7oneRpfw4yawwZeuMHu36mjr712V6Ewf3Mk4UQJYT77wuKVZbQMdg2MYfQdDA5HZXNR4DPPfD1wy",
  "key29": "5oetnvYSTaMbZ95pL1kMuaMshrgFdCKjrJWWjcTh5oLtBCfcQJA8vstKKrXc1yUWvBTkCqwKzJ2dHXWUVAU9BYv7",
  "key30": "3Cg5Ccxr8MudztcpTcSyxoRSbB1itWBeDEoqwt1xFvJD2tVuK8RqMkR6iVmZBdqriBrhZXFBjXfwGJXXKgBNoZC4",
  "key31": "4aXsurHwNmmvUQWciRzjuuUKuQGvCfkYAHFw9Fk2QoJRjeUKZXXfKXNKPit4UiucJDooWgkyJWLcPmLrvEKiq4jo",
  "key32": "3vUyEP2GCKwUcF3N3DpM4VE7vjHKcLMKHtErC6p8nqMC99xK96QPL4vcvHSMoXiTHq85MUhSybajqNKK4xRZD3cu",
  "key33": "23b56GXa8RaY59Jy71YrV2FE39Pcesd7RC8BGx7CQ8JTuN5bLAcnouBSDLDrL1cjjuyBspj8m1QrEiP2iWeuyae5",
  "key34": "4grHbvSHAknzxEDN5d3qmC5NgAKHZKRkNy9CXrP5YD9mEyHRg5VjzRRy5GSfiKG3mHmckkz4wY7oKqqBaSreM9hW",
  "key35": "33W8YWRouV7HwByNkCxM9FkokUfh9eBVmYFC6WeSyb3w7rw7mdEM8aXP9q3gnJ8Ro1CSnUe3ARneRARHYYZXVFU",
  "key36": "q3TwKaXhmuYGxdL9QMbnetxkhrh6PzCyBRndPxh6VDwZrwyBCzTyxLikpw9Q9zs2G7oU6LyMckWxBvrT7s9rb5j",
  "key37": "65ofqNw7f5Jh81AitBzoJY8MEUABgo54N9dBsPAU5L7opW7RX8W4MYMu7aeyZ9hRJWWtesvHPRUpmEuu2yRBr3mv",
  "key38": "5SM2AjWLCdnM1SEkugC5SFZsy8QZ4MWDf8bsQ2TB463pyJ45siKVS5zmuYg5fyX95QuqkNMNEVsyJ5Y39xbv3Qiu",
  "key39": "2RP1VZEdFWJvqhPeR2Cyi26gDuC9zNZJHZtZjEvRh7qaowkug2WpSnuiHcWSsnoAqxfpwfvaLVsgBBdHdzGuJgvB",
  "key40": "4Rptf672c7wiM7k9CKwAZyD23wux549RgyYNpapqeUgADGbCXdKZW9mZKTnxUYsGrpFEYABbWP4UiHPNF8jQ2jxj",
  "key41": "2nG8d6bPs2uJEfP6aaD3GSvW2u8smiHdxZWLmvVnYfKXi1AjUB68oFKEYeiArA8fgvp1WC6SPeprpMSh9toavpW1",
  "key42": "3dJhkDFUAcGEg6Z9NQpnZ35rqJfWVSv8hD72U1kR1C9Cb8r8he82jAcXubDboUSwEbx8E1u2AwxTfjHtx93uzdzh",
  "key43": "5u3ohxWkbrkD94De2aHc4nQPRuGJfVUTd2xrVngkfGJg2pALB7jW2LjKHRESYKKLd14ZBkPvs42G7ETbeszqcfXJ",
  "key44": "4qHgbBfBZ5eFrhk6dbtALwKoLzCvhJQFoDSBPf8DC1JtudAB7UFdYAE6B9UkqaHJ1PR7tmK7u1v8BL1RgT8UxuwF"
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
