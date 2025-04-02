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
    "5eoQna3gTbw8tKmgpCKKaFeWrL4nA9p4syZsvB8vFmfLtkbWx7JnCdzmUMH4akYtHgqUQQk64x6rseibzB8915nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnFWQYz1Qv4ouLQ2GcPJi4wzHg5CvEc2g4PuAwXpyFb8921j2kJKtY39ajRu8LqkHZtRQp3AC5DUMb5bMK2nYwX",
  "key1": "2oqHt51o7Za3vS4zHuwWXLgfo7re5Cj8t24jr7AhSGsWwhViAdqwePAddutEyM2L2YaamqrRXRNQwrm2STpPF49p",
  "key2": "3uKmJj3YcV75owu57ACvLZ6PmyGXYmW4sr1wivyPYbmgdGATexiSLt5GcZDFxR2JjsZZ5nCs89jt9LMrYYj8XCbP",
  "key3": "43LWHkuvmiSqRFWdd43TgoGfehpuoudJQi4NGM18u7t57eXX6S7Jz9ZvFfYmH3VA9xfdCE4eT4emwJYmtJouKzeh",
  "key4": "5QpwRHdv1aid3JV3s22Mjb9VGWknwRAwRoFMpMPma49hkYijGBGCeMVKXrEGe13PCB4Xw524T8gjJUuHpu1DRULN",
  "key5": "58JjJLWc3obDBooW6AheJkokrpAXwzRhq6BLMrvAMvhQ5eBgHT4SW47SyEyg7feoioX7aZqZi591YdcXwAfMVBuq",
  "key6": "5dewQPE7pwhy9kVBSNy876myTjzjdZqgEa1nwzv5DjJRtd9HG9MzPh1hNQuLTbjrmpdZKfRoWpsXRiqUU5iGyNie",
  "key7": "265BNQhAbuUcU4ARNT3FMcBddcKG2kdDXFQo3jgyvuW9LkRQuiRPBh8ZpGPCdkxh5L3k2fb9zYrRGA8FzfzNKsQk",
  "key8": "2DxozS5BbEZ64XegH8dNn2fiws6DmsLDWD4d3akTJGA7HTbojbqXo3oRATfof5qTQZMYwa6kLwrnkiZ5zjj5Afid",
  "key9": "3PcdqY4v1imYydtrTk56JtNSHT4LuWrL2SW1hnhkXq4VUJct6N8n6CZUMV3Qat8cMQK94nD9ybMoKhAwgZezRjvV",
  "key10": "43C6pRXBikem2VsEUG5w1jXJVUxNuVk6Ca5XhGyFMidSyyW3TnJ1Xp1gQdaSt3Sm4QqHLK4WH1yAGzLkt4DnpDdm",
  "key11": "4XdzRYL9ux17LNzr2v5H3LsfFnjJxsRmfQAJ2zpLPerWqsaAfS31xRriamp29VGCB7uYcmmzawbAArj3gQseaccL",
  "key12": "4o5fidXBkNsqC4AdvZCBTkNy5VzYz9kBJp68vTgG5g5fuMKythT1zkD23e36prhab3dEUxVvQBbLyVyJuo3p41FA",
  "key13": "2UYD7qfTGDCyMLxH13mjp3BEVfQQ7QoArF4JrkjJUgjoCWksg8b9KFCnqdxrKtoEVinTPZBvHkH1cLadRwnQqSJG",
  "key14": "3Bxc3dB2diFnXeVL2b59ahdrobsPB7CHy8sS59HTqpWRDDXnCSCteAG2HSAM8rkgy6oacsuXTeyXpM4Ptw1MghxS",
  "key15": "3hmhaUqZNH5V5SPLgVCpv9xXVDTX7wFGVdASxLq2HaiYuBkexVc631qBjjTKtNCj2yHjgwWuphWbE6B1hSYUQBsM",
  "key16": "4LHmDC2by1NbtmKkVy1bjkbE9LBsjiVZqke1NnSiQExLJgLydjcrhvepaLNGjNKN5Wv9jKppgqE8SKUZNQwX91BL",
  "key17": "5P3MMFqsPHYLBqKMQR9Y7qqAC7dDsSkpVsf69ptF6Qitrm5GyeqR8G7VSb6CjKjEYRJ2FG8gEAsVgntrh2LJjNR8",
  "key18": "2vpVLMRrhAX1cugDr17tnE212WzY5EkkiD1FxvZAGicb4exGzggjx1UUVxvB9wACeVcuRr5nNNbqHfmeuG7Qb2K9",
  "key19": "44iKo7LUJ6jW989mkCstA9Yfxw4ThSjuyCbWSa12w4GDnX6AKizUAZysHNekKzcCSpaLyScFiJPbXL1nWFg7D98r",
  "key20": "3HFiRMZ3oHHLmzSCmv58R8gMbBWD37g8771ZKPa3N76bYLAZdhFFMZEzptyjYPJhzRNMfGfMummZ4SXjqMS9BM14",
  "key21": "2PTociPTjTpWkFyqvbC4fQKxQfg6wEZZF3hDd1qfRZvJme7kXkkWjzrzVPa2Y7p5xFi3mTPDxrDB39r3WWTj35u3",
  "key22": "5HCKnX3S6wrFnji3crNYp5VjZ1vVYPK9uK2144BZRkyEqSPNw933Tmo7YtAuiDChpLqZTUYvh4yKe7RPJr1tPV4X",
  "key23": "2SCjzoo4Q67TUEtytffcFMU2FuuknNFmMYyQpi7g2ZoZXjesttE11cGp6XZp7MhDQ6Dw1WzvMsBzGrmrgSKTnyUV",
  "key24": "kuXp38uNcvuCxZJhCoSA3gRdV5NJ1xjWoL3Uuq1SPUB5VMW8JSaFAc9zYko7oBVtQS198YWyDk22F2u9pJSC7eG",
  "key25": "5pzsg9NXdrRDqdsdWi73hA58NyzXbkamXyNjskY4kUnMDPbKWQgYEx6V89izr5Bw5P4Nc4jtPeUJdFQvayFiDEVE",
  "key26": "2LSYkhFZbhnQ1ZMVYK256NkyCDvgUEcEee3f389NWATaaxGoXbYQ91EqJcPWNJDXvr6H1B33osb67BpkaMEwFBWu",
  "key27": "5UFEvrjsSYyDQCaGdqKbG5qm2jgUtDDL7oJdVvVjpzg9tTSjs8ni1gtkjWgwMyVX9kgqzhnTFxsU95YfSVb59HSZ",
  "key28": "3hq1beZBJjpgEqYJjxkMKPErvnw4PDZE2hiwPsGorFCU1kws42rwFoMyfygRddSgFQwz1bh1R8LKuxe7ggxCYZSt",
  "key29": "2Q9J37SXfp1ssb48VuQ89RnzrGr2uM6fGHnobgB6y7FpofwuJ2NqHkxVgSDB8qZpri4nyGCya6dXjojxfZMPrzpj",
  "key30": "2vD47HDs8m5qnVemQU6VP4DJwLENzazSpcQT3DfcM4ftShurKGuxgUTTAZ7FwVcvoqBtrinp5k1dyQr5fEfRoJTg",
  "key31": "3KbdWMQ1LH9S2qnJ2D15TtVbTT6iG7LtrtCyLPwZ9TkjnonkAG13awmbjhesakXtWk1qFAPBwh88UZdiUbNKDuuD",
  "key32": "4jjXNxxmmrkWqgadhdweBNNAddjmMDgKbqi6NJcGQVkWSLo7jaZGcNasRYCLBGDcKe7tL363mPUwApvZ5Gpoptsk",
  "key33": "s6RaSqiV4MVBasA8BzMCcj3ofe1dxYw31sVUNbaossabtg4mAvsqyoRiLZvwNjTqDxhd5BjHJVSML1WNKbhCY81",
  "key34": "2Xen2ANCG7NneQQvErMdMeMKKNYFb3GLh2Gc52GzidzuAH7PGdCQ7jFHRkWZZiNnkMMTdFcvbKVmjjFN8E6UX3hU",
  "key35": "5Jaqn8TuEbpyhWmnF2L8qKvwfgRUUi3aSjJ2eMudgChRenq47GTc4QuTtnW6McjDhVLy88pfpsPPF4zPh7uXHKCG",
  "key36": "huDNuojYJmdrohYjgAKHkso4dsrJtT6KER6LpDE2MihrrXzFJTnh5zYaKmbnew31puzo95r7nM2scp9SKdDNtCt",
  "key37": "4reBKywMpmTuz9HX8PRperEu9Xi1kh3tyoH7N6esXzaiUML48AFbV9ioG14TukWQEse9eAxyHBg4rZypunFHsZRS",
  "key38": "46bHMWF1Yh7tc7MoFR39aXfCkzeAiYKx7sgqZhyyUF8HvSdQjLiu536cGhsRUjWKRSUhpzKfsUgMkSd6bYT1xekN",
  "key39": "y3wVf6RgiXkwt3mGnhn8tYQbhnGXijo4Udd4zGoc5GUEHpY5Cwi7HwhU1D7CHjY8yLHerM4k3vDeYAAU68xdEo6",
  "key40": "2RaEge27GAy662UaazwQ7TmdA9gn4im3RrJmdfm3KrDWCp84EYnQ9hFxW1iUnAX1v7aziYgYcjo7iHag55xQXcSU",
  "key41": "5PRuM8gWEKnVeKxdHaKm4BDRn7AWZc2K6H7VDJ3rQkiYrMeMYS9x2xTAcHburcr8ANe7gYnHByq2N5nrzBgpvvSF",
  "key42": "5djR8hFDgRyUoxXNJmyzGf7rF3YKA5BLxhwFWqid5HfrGZodDH5B9f7pLtk3sAbsPXeGB2vvXPPCY9hkmKLKpJnX",
  "key43": "2neszdtuDd4J3P6dv8FwEK89YbRW9dPrgbizjk4HD2FDgE5ZMEdVp3RjJX4AH3qusqqrnAGM5J34pVH4CsCXGM62"
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
