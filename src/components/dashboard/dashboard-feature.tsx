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
    "XSdE9bk255N5gYbpbWihj8X6avYX4zhNKtLTsbaR8KYbYoMou4R8C57HsXRHwXaKWVPmBpT3NrJ1rQct924r2Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LiDmB7tGRtotE8cGy5kbLJnrgoMu6Fx8KnYH9oybxKjg6mqtzq6rsNJA9Fdw1JvriSTnXsStQoXq4yNZ7hHzVVr",
  "key1": "3ZjZtwDpSFv9PtKq7nxpM9h9eAFLtqxUwtM8rqDayZVWtGV6wF1vkV3xzTgwZMLsHi6oJQczFRwWsmmxLqLQWAmp",
  "key2": "3ReJFQ1VGyasoNggLxZSphmMAiRdVGotiW1ZoJGVWpeS6CzyPmNvWxmga9H6BoWnf9tghJpEM36GHUf1K6mX4yti",
  "key3": "2LzQiRvUgameauFSjhyeM6AzvX7wL1sDt3WoEzorazCP2QwtnhSpLo9UXinHbtB6QPe8XHjA56y1VxXnvzLMByqP",
  "key4": "5CkY9QGfHu9Tg5yge2dfVPYqbB2dtPs4Pqh25veMGFCRBGLVS3QPt4UM3VBxZVhXV9wSa7CWEdXb48ciEMVMWcA2",
  "key5": "3XGRTbAwHKNqFjf3JDTrnrRBpKgPTXArEZR7XY92hb1ddogYHgAavxQ1kjKK4GwXmUh5GeMRhy61vPSaMijoZZfR",
  "key6": "5QKssUfCjWLiw79rv5awzsdyKoS1AmbGA7dxrjSxMg32DBceCeQgzp2DQyrMaeJw8JpuH6MGXdxFkobphPJZvdLA",
  "key7": "3NUKUa9JMN63Sfw5dJW8Hr89LfAg16XgiTzp4w48FpBwxNRwn2715dvmnnXHvM9SaHQNPmCLUUALsTuBzatV8wXL",
  "key8": "44cQ8trkZyVzj96eZsjcqDKkP7XZyhrR3YRLbM4EjWLkADCCRxXvZ6FtekW2P8TsRXfo8Zsn5N6DovLqwgRtjmLg",
  "key9": "Bitmm9g1Bz9n9LR3Xo7L7v5XP8hcdhMKpjHXfcNRXfHw8VGX8pAiYxrzUNpD2fUA6bUtfWFxDwmBsj137ox7Xm3",
  "key10": "2D1iJACdrT3AF7k47mtpY66w916BeRKraWdAV6pkii1hTZwad2DxrdQV7GKLQaCRLCuCPQnKnD48nvkahdBN3upf",
  "key11": "6ADFN4VruXPMmtsZznvzByuYKjsvbsohDKC4M6zzUQhiSWBN9e8ZgVVwzToWMCackJkN9ues2htsnGkWnNdHq21",
  "key12": "43GSjPv48oxXX9Xh22XUb7Hwns8ccP4bT9cPNjkjrb7qNehAUKJ15iob1XgFRceqo6U4sAV4bDRR8dko2ChJV5YK",
  "key13": "29nYmUVMbri5JWhtZixkwXSPP5y7UY4By73Gmi6q98JJCc35ismi7aXLgSj2ZaayUCAjiKHapiQJCsttkZquLuMK",
  "key14": "3PwmYCaE4jf4a88axfxGW2iRhV7kXijLMt283UkPNbqXvPzYRLkBJq68hPnQywFAHhDeMdBjFTHSeiBH8hBW2QDq",
  "key15": "26ZgCTEDXTWPDB9zrj11dw1H1yxe5iacd9LoKsqcykC9rfQRbws4pwVnCtrq4C4AMkmeb6WQcHziFzmJjx2zWWBs",
  "key16": "3Ch6UFYZSN52coMhkMBb2Q3JKLJyLwaGKy7rd7eQN8xvT29Ny729uxLxZ5QyCnChkGBWsfhPc9NcyQx1BwEee5WD",
  "key17": "S9K81ppWgmWewnnF55w7oCmF37ic2iYKRSTPuCzGryUk13FUiwB412VpYzzbwmrXuGwYj5k9qWayY9ovJC5pnQ7",
  "key18": "59ZNZYwhKRnXbeksBpfxL4r5KeKQRFGebATBA1F2BwdkMCJmXFL4ZfMbnmvd5kQ41EAEDmqxBZFJMMeANc22s1C1",
  "key19": "5zjrX3pHLpAJKYmL1op2zzM8BNkbBF5NP1BfrrdDzdrtc3iD9NqPZEomST9KzQu8fbt2oSLpTazxAPjA1fYFBQV6",
  "key20": "yzAuKY1gijMSxDSMxhTWcKdtKNemzefPPMyN85EtfxwXboSxFmxSJWufWVyDJU8yyvmACY9eYZDfgwwo6gL8ML2",
  "key21": "4uztJEeEGZBhyem5M7v636nQmRYiuB9WDjADCmC3zSBdEnHMG91yewbehVFCyqmoNubZNTp4ipTZ77An5FamSHqk",
  "key22": "3TNBAs7wqGzte1M8UPqBc8HDs3h4DjNqyTqUnUvajmY5QKBf7A9gY769Da2UU8TPeBKFZgokD7dXNqummtJzDkin",
  "key23": "25KiyPPh3rcFUymras2oZnK19YDsJAU1XC7HhpCudTFEwLYWDLWu5CK7sYSe6KPmixTWKAF4MhsAWYxAvMoc8izu",
  "key24": "4MjJRENSoEDe3xcpP7VKCE8vb1TRx9PfAEHaBqUFd7MS13JBMemGouAXonsNRUv2HAQp3bu9yCYH3TaXDDyJsMFh",
  "key25": "3QhRGHi3w7qWPS8KYUyZyaUk9he87ZX8RTBFMLPNqLVqFps9ecbZHgzChC2bha3fiGYYaEV4vBU8vd2SH3uucyfS",
  "key26": "4aBwPmhS3rwMW6goPcUNZSiYvfnC6icVi2NC2wyTXVK7hez3tt3D6oS4mz8GLNKn8yA8T77cXCvV87DMcz5fqkHs",
  "key27": "UKjSgrYixBHSEFnT2aNtmTxW377HFcyD7piTuDSACP5XcexgUAvoHLA3EfF8kuowGDjnpFPe2m2yGr2oHdSWvno",
  "key28": "5oHVF9BxPHgzjPmsx9P7rKXiRdypp3UkecEgKt1p3YYjpXT66GQ3YqGb7g54ty69DKpUDjyoXnMZbgqsjhWgDvfa",
  "key29": "3McLNEpd2WXNoRf45bB67B3Czom7Htcbd8wfRxiH9SkT3vTbgD9rUWqc6dcgJUQzm5zrPCsCrgQoLCQskTpJDP3A",
  "key30": "3NVXAzggHgwo4FpZ82XbMDwBeQouHxR9VySEqCJeSFV2edfYZL8CPLzJ1n5LACKWwxsGS8LKPQoFfHC9ZU2xxzTK",
  "key31": "26ZNA8r5an9Un3vKfad9XaAaaHrsoARmwoKHjVQ7WgGrVPCEBH5wGgJp8Xa6BG6UTRfafXBXup5n73FUU2qMsXyJ",
  "key32": "3y9vhCVes1mdTfdSiKSkV8cJRrvgf1W7bLoexgD9QqWJp2Tcmt2AKmdBb7AxGjqxmTDAESTZ2vN6XsKou9riMtPh",
  "key33": "613AhcEykL256JaTzUKBCEnacBPxUaJaWWzGZ4U7XL9EQCASSbWhGdsxU1kq7y87MHG6iznsGSZsNWjYKwr3Vtny",
  "key34": "4mazcbanGUM2iHSNDCBWw7AckFW3NAuZDAMbHhc4bjbBhMvxsNZa4Cwr9v85afh2kSmhbFMp13muTYGWgcwZfdwH",
  "key35": "5FGx2c2sB1CP3k8HFfRTPLRFu7Lkx8Vw4ysap27wiyhEkXDiHMN99JYZt6xrmuyg3VMmAgoTESBXMwfeXHSkVysw",
  "key36": "4JYi8pYorC4bBLBbzHHQdcZg6nx2aBwxfBd8NhgbSJRZrKS1tgkCtbmUhYs9Hakat63L6LMXnGVKpzsEVmeL78d3",
  "key37": "ozXBqvpSnWsdE8cPm4eFhsc4euBsUg5p4MdvJio5YE3zLkrU9PnyBYv4p2UK3vp63SFZu44SLk9Hr19x8gjnwsK",
  "key38": "4E334GtxEfSvZCi4oZsmEnHwhWdXvst8BiF2ftn21ao584JKg3NSA5ZSyjsHseR3AJnkx4C15vq4e4YvJrzfQAKf",
  "key39": "5ZUkkgYQd3qM8NkE8JHTSLRDw15ErEM5FX1S5rHMf695TsWD3J4tfhxxnbKvK7rKvhMqQBMkGD3oRoGWLRoeQjoc"
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
