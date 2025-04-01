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
    "3fLrwUrc58Lfvog6Cjavh5ppzEFGnffBBnbPaPn4uKZz1vk5Uo7NCyMVXmW898utK86hz6XrcZU9rqdXqXdpAM9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pHt5W8sx8yWpT9RJXLsqErN4aVnJkw2nFjXqbhXgpRVBZ1WxcpgwnW63298ks1EBzWeNehY1zw6EkztPcy31ARU",
  "key1": "3BdSWfoadN15bpn45Myhq1cxmZ8KWpLPNaLP3FRhTBqYmYgd4FtrogRTTiDTm85Z3aSUPcGKhPpyHHygsEbAfdVC",
  "key2": "4894zMD5cgSSK7wzWEaNXjkR4cgiGc9915hZ6agN8SKFvTBR79e3nBxVJgnmVn288zihe7oGTTvAtBD6aUm1Ln3T",
  "key3": "5WYXRwxL6UCBQcajsK6o2cGWpdguFNmH1khoZpSnP5TJsRwBFd5BoAdNPCRSoUp2kzS8zWqbkkbvZoDCq4tJLVcW",
  "key4": "4jMa3B3qBCdog4QmMDx2zNFaXExmctdDFNxrM3Rd2K9kBosuJHCEUK9cjKHn9hT9eoojW245Hnoe2gr1eLr7cLWJ",
  "key5": "4fYQ1ZsPmPAxszRfcWXQ8SjtXTBegggMwoBREaW95qgqo3g4D4wHhAxkW174YowqfeZCkUVS12B3Vh4oNuPCr5Fj",
  "key6": "nwHurVsSNzN6VhVWMy9Xa6446L9aAHB9wKuXngvzg6XWV87ad3bJUxvWfpVd17hDQmwPMWNf6hu9fpxwA54s3En",
  "key7": "4U64CifonJmRG8YiCW4paUhNjUBMTK4EGT8oXmtYkSL3T13Rfxpe6Q1iCC8tc6De75FPNBXqfg9tFPK1fHShP22z",
  "key8": "zfjj1uuBgDf9dErzeMqR2hXGAGpstbEFEpDKF4hZ9uf9o1HmSGubMs1nNrtzDdfPFDCxhHaqgJo97djXDi476DN",
  "key9": "ML8ySUvuuhDaddEyupNAWboNepm7KwbDFTVaNa7by8mxMFDEQ1s92yG9PjBa5sfi83ZfLQYHApi6y8mKmTBqMLn",
  "key10": "348Nky1Aj61NWhypTDLbwkyqWjMrzMkzCxMyWxnwcGekNP9YP9DkvyhM6ooeXUEyUAtm9P7uA99BhNr3F5C6ZnFn",
  "key11": "YLvkdL2SL8EzC5Hy1FdCWy1YU31iHWqGjDLN452BCgDa3pk2c3fxfxxc9EQmQvwS3zaJwfiqnJPSJnvmaiFZsdq",
  "key12": "2nf1HUUwt1cBEKDqT4YSuismf36kw1jRSKWskpUtHCa8zUXETYtjing3dPfBX6LdreR9UceSfb7zByZKyikgB5gP",
  "key13": "2uSq1xeA583kwa2HYCdAzGjxrHPHbckCPZfzizhqMG5YU9be1UETqATZ9qjet4f8CE86Ab5hbWEeSCByHaGNp9gk",
  "key14": "VW6WQL6nLJYjxSUjJtezGReLTUtduW3MH9Su2TknJAmwdvvG5DwprDoZW17HYBtwy2QpVf7PKL9bvtVm4enCND8",
  "key15": "4evC7uwhcFW4F9TpbzyD1LEKVHY4feNU9d3KnPDLTvKod5jupRacpEVRmGKCBYrXbYhmbarCZf5D95Nie38z8G4A",
  "key16": "HVkCKHgFXq1pw5kusrYfeRpHjYV4151kxyrsHZaGbsqB8v7VVZzjNNwuCpchuY8VqCPHsfeyeD25o3CrhQcTBMZ",
  "key17": "4J5LfwUiR3FRk3Sav22xPvctH2n3JUK6CUZgojdx1p55aAuU4jrNV2nzVWj9YKWfQT5yNDStSJpmSadixJBMZeRp",
  "key18": "3rj96FqhScqPRA5BFv4gyzCWX945BDzrA2kEGwuvprUDCREnD8vqPePv79jNqvqRH2tthcBMWqfN28Dvf8RXTmte",
  "key19": "2giy56sUQCxxBmwnHV4XK96YSRrEJPueTTHLCoUSqg8LE8VN8ojFGgFfZbEWbra77i83ko67SXi6oqpUR6HZoHmD",
  "key20": "5EH42HBmtqGBam8WVRBHeuCrGixaVzaPYccj9JEddyegsyKDK6XdG9tsdV9Byn9atGQqT7rQZaesKgvkn9ez5LTg",
  "key21": "2TLm38MEHxaaSuChw1QeAHGyAs5i9j8WtQY5Uy3L5TvJAwj1FxyJrqJr3QGKa4CcM6ijtnAofHjDTQsaQcUbpw1o",
  "key22": "2RnkxG3LiQaMXbpNw31F7G22Bhw4CEWHusKcfz8MJp8Auh8dPrqJ91Zsdj56zUdp6vmwoPMAWyRvzcdrFzR823Hh",
  "key23": "38evYCRUEx1v4wihipebNfy7Basy3Y88TndBFA6eB1Fb6zA3bKWYUzjm2HtjcnnGswZfZE8TWt3gK4prcbSMLnXe",
  "key24": "5a67e53KM5T4rqkMKXi1xr7gFdjphSXSLseAcm3sWEcSV6h3hQNhfPRUCyBvndF1dcmsDWhaUmZ93Q8Y575BtH1m",
  "key25": "uE8L1EmjcsChgLCcHZu5DPfo8uLKVhUKjgu6yiMF6UNfqZzf3q7oQNjw9tzTsr2iXz4YpXXGpPNRaRihfDndTtd",
  "key26": "3enVmNCR9mKjBgkkAernJTdZ72XYX41ZLcYHsfrhkWumwuc2nfWyonqkMwykaAkoHwMnMBpkX4QWSrc96ui6uWyK",
  "key27": "3dx9bSqACT9zhu9w7S6LsyscpajjxMAhkTT6k1r7ngTsYGzQ16Wy7RuugDQzqNLsx9Y6jpLN89mHCXnBDYhkRVLZ",
  "key28": "5Dsjr94BnAJBQYUMe5GYhtWhHvn1SSxv7gCX1RERwP23c8mX6a4TTy1zBiwFhVip5pF6Saz319cVBdfEQim1ZuZv",
  "key29": "3mpgg2KgHBDD8kVQf7oox6Gntx9FEHFEDp3c6eUUSyUf3dT7eZGDnP9snCow7CaAc6pprHzNYH9sAR2EjQej6MaE",
  "key30": "3nRWn5zSm9LvmFKh7SAbGYFiJUEUBNPfBH1Ddz35q1kSrrQMV8KSMjjFAHZDvJwtammPhBC7iY9pdWCC6XQDgdnr",
  "key31": "4VRrvTQk4dtnCCB7bs8bxbmfZmKMFSoCUBwjut63iSNK4gWzLiDScwerZLeAnYGa9F2t1QU7d3kUiXyoM5bCpM2S",
  "key32": "3VHhmg3dWfS1ZfnPHb73A4hfeM9UB96r919Pr8bj4s62Fe7S5y23y5Yo8mTKKuTymUL3aUD6N77GJZbfwPoioQ75",
  "key33": "3i6EAaS6ZBpnK4NQ2ZkRWakFNG4r8u8fF8keHaMuwe4yUxWddL76pM2mc7eubJdygDFYeuRMaJHNfwRw5VcP7PrD",
  "key34": "qZTvCrnXMQWxoXsHNWRmYc612bYZGUW314pn6T1zRhqgyw7ZnLpQoiGA9kVz4poV2onDEDN1L8VgjA61oxayofS",
  "key35": "441XWNqfeEgEQyofNsUE5HNxZ8fAoPvKcWQ3JcXZeNg4LeXBEEvsij3EQri5RQw6mWwkvzbd9cUbkH4s4rMpvG7z",
  "key36": "2vuwDa2Gbeuq9rriEQyqRgWHRrFMFvjb7TpNWF1rJUB1yYhQJyR6R3wfJdP5zPPPggq2Y93L8H4JitJAdbcypRYF",
  "key37": "3dqXJrzfBKkzpC8itou4XZSi2pCsnBdUKRb4yJCCeFXhHXG7MJgFGyyNXB6o3VKhxFHQpEtUfHg22a4oYRi7p7kB",
  "key38": "nNgFmdUsRJvBhiS4P9o7xRyBbkFE94p49bYgtxoCz2FT7d8WjiQh3eQUxp8rbbVQWzZg1Dev2HmvzFMy2ACDeh3",
  "key39": "5DvXqsL6eVPf5q4rtfbWeDcdEsas6aTxxH2WoDQgQTGGuSX3jDyVW8K9nDDAG23ZBxbfu6HBxa432x16JUNvmpsY",
  "key40": "2Y9a25FTY9UETP2drPT9UeKEbSihrzZjoNHcJfsBxBWaZd43yDWEW3SnZ6u8ng52dD8sjuFGjiBFQ4jybZxbxPZS",
  "key41": "2Upp1auksyboFu7JN7MZJYy9XqmpmiH4wRjCzKxRHLpDWVKCi7rMMvnKJpSkGMX8czH7tefQAc5cMbDgauSKk8gV",
  "key42": "28jQbZFbrTYZqDj6axnXQGt76SuvjYdJ7rK5QVFZjpY2YYkJNsSwUEE5DN6y85pCeBUCd3SmaD7RGQNKopq8NSLH",
  "key43": "k2Gjc5h1srMqa9PW33ryK6Mgi7qUQyKTE9DfB2t4SMjfU7yD39NcRP6SqicD8zU8P5WCp6tUW1BwS3F3vDx9dMr",
  "key44": "59PoazuyT1SQWRmmgqNSbvbbYqmU39PAzCjTbLAbjHhZaxtCCai6ufYzvLRfekgDPF6EPhGkrMpMaGxHnQDNvpUq",
  "key45": "2tD9m7KtQpYhp2Ttc34DrqYZoGLUbM4oH3TGwShTsFYx9zUQme44utq4e7ZqSwGGQX458K8fAC14JgXRiyM2AxV2",
  "key46": "GsN3Jpz5q2HWtzmsfWwiCb6Ea7Pta7oVWuvbRLnRFPHAhm2sbxfgmaUdiJteEpfa8qsP7PZVv7TTrWcNfiv5KjL"
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
