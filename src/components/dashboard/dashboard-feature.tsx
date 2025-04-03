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
    "3kxg8oJAV6JRXLk26r1AxE3KPF7ekFwet9AzLBY4ooqcDZhNmpAyQvrEYcNBPgAPerCEyH2Z5PLh6bLFQgStBToh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zvz4uRaK5voTGACvjexNpmJ2799CbUwWxukkMc1iiKdF1YXmNiiANqxsBQScv6hQCdFQ8vCwUJd7pZxYnTPCuFP",
  "key1": "4e48LgUgaUCyTQqVr2PM4q8o5oV47orPQ7JDcn4Ly9hY4H71DUJg6AR82dzKbNfwtKKo4N6gcVzKUwFK4DgLXzww",
  "key2": "TCdkrDRCPuWTiv1YNAe7sPZLaUamtH3mUH1WZ6dYs51GfzEfum8iEcvmrThWBxffb3pdK2EmnnT7LmmB29BSc9a",
  "key3": "2iooV3ZUBR9mnBJmS6qXFHQ4S3sZvFs7hdNUA6dAQWYC9V78AeesAVqCqNei8G5psK8qQgMuc9emZPwTQjSRGgi3",
  "key4": "2j5sxU8BEvHH1xgMpTCgFiTSWUS8pGgNeQ29sbR6jjU7hytWGM1Y6E8Hex29zLNv1ZykzNgkFX5fFo5KcpfUPHHx",
  "key5": "67idkyYZCmAivPJe6PyyWm8KzH17LZx5eGQbgzdn96J8CUxU4nX9p2bGKgpxky2tbbSrXFHACt7xjFyZAG4FdfNo",
  "key6": "4xHcreeiQdZeWbSr6LkBVd1XUJEnKsd5Z2pXKAwoadzY984Vw2XP3qGueM4KmEaLaWLrUYu8zgGY9k5oGdG9z5si",
  "key7": "3rytebshRdagSo8FHYePMLLqZpik8CR4KYXQEsnwJHr4YEEKkEo8VR1Vy2tN5Dg6txJ9XMoFKGNHDWAYDNqXjDxa",
  "key8": "4r4ivfL4xxoBokHLZkVEmenVZcDeMcZbVm91AEZCLYPpMSA6xaps4kBrEz12g62KrR5YsrmRJyBZVvWUGTodANnH",
  "key9": "4gaHaqouLUrKzTdKLJ5Er5nZTSSPKzdN1FztHwUkErGzAWD9ezj44LSJBGSJq9hHCRfa3GLxqPnMuHF4dhp9s5HC",
  "key10": "3SxV8Y6n5qZjY5CWZ9yfHohPXDEskCTg34YDyUJ4maEx7DNXNCKUB53WJPWhyJnwzqvfB8FKE1MND8kX2KCvtxj",
  "key11": "4NPuP5G8mEbepvsZJkK8g815oCz53CvZbghZtuoc4vfuEJxfDGCaM9zwhKhGWyCm5jAxSSQ3muiZ3FPT1FgouzgM",
  "key12": "5FuQJxwobrt18PUwXTMVNFxvvkH7Z9LYMdD7bkNX2VNRVoQsdYLAorqKVEgiur9oznWLcyV8sPw82uBJzRx4LDb4",
  "key13": "2pzxc6bPGrEZ4WsKLpkSJexY9dafX52Z3tzKNSNAa32j1cnkH9DY1dJ2JWiVL86xYWzHhJd8wTN93xcUBebSDXSu",
  "key14": "41xBLvDPqwi1UZzvVeBmVWTeqZNKdBoPqzHVt77V2HJ5GGd22235CQowFSrnwLjwSGi2DneetrCJP5Ee1tEzkYNY",
  "key15": "4dEjyMqfknvamHxqnKvWq2kHeS4eypDgBscocuJtUHArtStGNQ2NYhtwYuCkXnpdffAteUPWxNdQnTbAU5LyrwNg",
  "key16": "4GEMAWUtVDwx1jUx4mT6Tx58Vctm9fDjaYYDZGWCs2vJpcTjXWBmhkFyQeUvNRHSfmTRSoZKu4evZ9ug8riActw2",
  "key17": "kLe6obNfexMy37N6UM6TTBwuZVjbWRgQDpw7W1Ah4b5zzo76cprjUU2u3wHexsKcLJxqHH17nwEhMpFzUhXs1Ne",
  "key18": "3Qo54QVH4hcwmA2SToMgygWgSFM4pt9aetWjQYzhKrKGMXRiua1aMCAcjJ62a2ZF6uqVnq1s9N8QJRsLxmz1QGRG",
  "key19": "4Dq4ZSPJxmbEYbdjrsQmeb95DhyXz7jgBMCh2dSpNZJnXHdPVij1rjxEtwo2Z8G2cM335Wd5NzXfrVVsgtHWavto",
  "key20": "2t434dJ3NUynpbMF6nvuMSJF119ZMPrzJDti3gpn3uzP5yVeyv33fjxcrrTswh1frNpwsQz3bN8JVtMSAMY11xgA",
  "key21": "5ph9sXoUp3jNcPCe5iqiEbAfXnGrC69wjCh5mcLuqjQ4nfpcxjnuhPY2m85s8qN7Fohf633R1KhUi8V5sAxz4TY8",
  "key22": "5LdhRguEpkroQ4J6t45cN9k6c3yGhYmo4RtcoH8NowDv7N4MzVqjt139RDjpduhA5N1fArja82LY9ZzeXBMBoCUm",
  "key23": "51HM9WUAdRxokDjhJ4y64JA1gfJU3qC3X7NqYbiuegVgpphLCim5PhbitUeYEpYUwkWxzhKAapefLonRKcQKUQTY",
  "key24": "3i9pr46H2xTHTGdRV7DFwbpdx4BKpmTVYWomGKhcmHah6ZxXnAfYcVcVrgTziWqUWoiPuhjXyhebxVQgE39TGfyY",
  "key25": "9EzgTDHKZ4DVoCBTtQS4BPwrqMwnztSkaGaQRaAqwAQj1m62DamMSUy9eYgQ67qz5veoqoMiYguyuu7TydCBMWx",
  "key26": "4p2Fh8g54tSTcNwtEYj3VqAkvd1q6ERsoCNMTWR4xvEjXK3uZry78hAAP6jALLq3sqJEDsMEsvU6dLXg6CssZNKY",
  "key27": "bLvuh5bz3cPP6CyBzK838YnyqZst5ForPkAxay2Nru4S229dGWbDcCHVTfKBR66igaHyRnwGsuidCfR4h4aFf3R",
  "key28": "5QkojP9D1myj8KBTPUfCiPi8FF27Y21g4UhhmaGboiA8b8U1dzzqJaPNEHdzj3fJcJZ8vvo3a57zpacQfcXLHoxP",
  "key29": "5gXng1n9aLCZVXjNLyqikv4zRmDvXA77hotpmGfoERgDjRCEW2maLdY32Qy8ujxoJVnqnCPNGCcBygSB4Jmkikrb",
  "key30": "2Re7PsvjVqWrHVTecMPQbfSaLD1L5M9Vw6tdHm5Ju5EpmX8UjJQQ9ZqKU2phJBX8scxbyHTXKfh5mGBSBnvYkVyS",
  "key31": "4PPh71HNijCxDrEsNTs1V5mkeWdPkZXNwDkCcSpB7JLaELJvFWME5fFLq4cgk2Jt735qGmErtQHhbabpf86RsA77",
  "key32": "45jhDnWX5pgqizLy2TtYb4cZFkxhQZbWcYa7wuvvhbUd9GUMSKwfriddjWDZugqwfovfeqD3b8H6q2qTewvdpU1L",
  "key33": "3bnSuVkLHGa1FS69ESn3ZpEnH4oMW3t5QtVe388zM82gx6gQcnuPYdjxtzRLpW4EDktHHKLZYCQE95HHNNocdKMw",
  "key34": "2bLSTZY3sJ4Kz3ZTMgo49FZMyqXRStBJQU1GVEeosm5nbf8WZWDmPof6pGwx5aE8vWTmTkhM2HGn1GgCGrKsvGSN",
  "key35": "4NPBdBQaC3UtM2JqE5Vhy2rDfpLHJwQ42PwtEi4hJtLgg2XdRHAxj7UAas9K1qRYFzJtbMnbsh7E3M1KSTJyLT1A",
  "key36": "2FWAG7cQBgyLvmM5F2BEXYbjsyrj6Zog1EQ3LyypD1odHQRzKJqxZzHEJp5GqTjrsnkXrN2xUKvtgyzJgL8QNSCs",
  "key37": "4sj9GfqiYKNfd4ZB7PziChV6srp344y6L6Q4HEZvhQr2JgfvYjbCpAUzTpyiDj7KT67uHW8bCun7Hn4HrhaCJaVT",
  "key38": "4vYFvX2fyFwdpt7at6h9nsSkX5ATTmXQ9DDxRtgTRDN6Y5o3XNSBZKsiRLc7hQ4Q2KjTyh3tyb55upfDEK1yFG6G",
  "key39": "6XqNd5dVRgxGtCZCYpoJUM7FKwCFtB2kMLYLQkEHXNe5d1PjzccVbj8Fvn5vWJW4tSTZja8grBx5DGZbEehhDY8",
  "key40": "3E7xeAdykgQaE5B2Amza1UXLKPCHFZCh2En3D1cckykrisScuadQSXhvDiiuj1AaWySErAf82on6kykgUpmkyZAM",
  "key41": "25CtTZ7c2tr5y9ULHuNQB4QUFNad8j9xpUjJe8SpbkRjMhVRTXhYSRzjjYeSmLniR8XNDhChfasevQca5X3yesnY",
  "key42": "3nKvqWHtwSSdEXUTHgcW7WHzDAkYhSDX3CZPxjeBQVwMgjN5SX3RqnuW5eYmo2V9KwTc4Qpy7hrECsNu6U6SrcwE"
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
