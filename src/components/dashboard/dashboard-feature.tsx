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
    "3EGWzjQkzuzRPy8Q5i7UuL8rAcnpmSkEdbZ4FQ7sdhf6GTEFy26kvS5N9i9z1fwTd15o4DoSCvMHAir6uFtwvX6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MdZuntU3dYapoxrjphgWMcWVfN2VEGUcXv46y1oLFbZZQdyWA5GkSYxNNup9oWsXaRRqkteCfnHfN2qQvTHXcRL",
  "key1": "2vUnfc6rntqDR7wi3nDfLL4XCVDsrFGWfogQZpkU8USvKV7EvYc5srgQJhEr4oj1G1gXhGd8XmExgeyuKD5dtdf1",
  "key2": "2jSuLHAbREw5z9D64rujNr6WCTuxa3xrRZ1GzcPNTQCz8wTgvzc6QQSDZXoMU1zy4m565vrShn2syKdYyEBTMLGV",
  "key3": "2SWCLdzZFQ7e9dMcLoX6ABXq1FPyxKrmzeQ2Y9hBjZkjth6MKbdGZ49g3mpY2Ro7YMsDcWzg8DaaPHAoK8EVQfxY",
  "key4": "4bJoS4TQQo9Tk9k3oKLNH2vToCEWYKXJpPWQThkqaQnpicpXL5gP8vcQHPVu66QBXAq1Zwfj65UucFNNDJpLiSi7",
  "key5": "2rceSwqEyP3w2AoaLX1VgUa5vySvPWUgbQ77XZ943e9ovWM92XKThrt6ZHtmUHdHkKA4z9aB1ZdVoiKuMUZ1E2pn",
  "key6": "5TFrEvFG9Zm9JuyaRGLiR92KGUjMRh4sqELfkVkgdc9phn26ZX1PcXiwLrdv31aFEaDiGftyFvptngr6VL9CwxLH",
  "key7": "613d6Gwayp7xv9Ust7gt2HTQckLWbevNSXomD8jkyxUrzmAygTdToCBpLEEs8qPU4vqiYbwZGNesCjRsqLUQ7M39",
  "key8": "5Eg35xNTuCucwaRpx4nt11nvtmvHZweE9nqEGCcrcVfSwh3na14ehmEZ9wfKGCNBekQ6CfsC7Q49TugkZoqeFCTN",
  "key9": "2DK5YPkwnA7pfEB2MnNtchhQKRwPvBmPnhHksW4qf5kQEbWYzNBcLQysYa5uRoidm297Aq3qPtGq2fyuHkReYN2X",
  "key10": "aYbuYJsoGNXmu9EZTNbnUZgTRKNR4kju7RUvSDfNa5MZro8WmdNtuv235MnBrdqFuo2RfrvHcgTHeLEnhrjLi7X",
  "key11": "3ja1He5rb7jR2Bya8JFKHoqCEZpSoUXZLmuCWcYqg2MCzgFSGEYkvRpzkoD35Nsx5uzScZpHs1SdbJpXSYWhrNg8",
  "key12": "2A7ePw2gj6fpx3rXUPaMmMg7iWCEwSi26D1qQTc5w8RYFnqZrLETddeZ95prps6sidfQTXcyinGmPGiboA1cEfvc",
  "key13": "5DPfdjmVeTpFGJrW9ERdCMdHbeCqyunQoTtKZWuj9Ho5PjWUy7NKz3FV7zCn44bT8vKUwbkSCJi4iLk2AsZiooQc",
  "key14": "5ScJQ4kYqxfnpQUfzr5BFH8iDyEPFsGXGmbx3SDjAcag2dNTZewPQjHEcxCg7ALUxsRyZvu57nXRT6SXEy5pbvYK",
  "key15": "3dHAqdj5FEgp9a1i8fHJfm9wnTnxjHvA3SVNiS2HXnLETKzWagJTfH1AmrTyqmtd6C7m9FujMgipo4uasH3hRmP9",
  "key16": "zL77yFATKWcjXriM6AcmG5xPuA8UVJqp4PuzA6GrwPwucFRSSEfSXc6h38C1LbBnJywZHzzMwZaWeNxEes3nD73",
  "key17": "4yKREyH1yqi6473EvrLc9DtG2meGsZUTuqYNMbMS3D86krkXLqdxW4vzxt32oHuv1qXLLvrAeZR8NgoNnzngpCkJ",
  "key18": "4wsuuUCoNgxNjHt9MEkbAsDDyuz4XVVoCqfCEAEVLy58Ywh7dRvAQdEYGzuYpeB796bXZSrgMBPKiFs1AZo6JoJf",
  "key19": "4udC4i9NM6EpGF5aUKWdL6GKxgJHMzyN6TQCLTrYTULGsp6LBbJ2MGBBahEDgjbEN1oBAdYWj1fUx7i4rd6Dz7hR",
  "key20": "3wkE6M1RoEyxYmHZg99j7Yc5HRvoqEWL7TMftAVtaxZw5BUfggR617WnViYg3LcvAZFBFfXu5mqTSYmymzbnFWwH",
  "key21": "5pTnnFX9x41Unord7a3iNjco1WnaruYQde1Sdhp1jnmzBFLcyL9icNkVRbPmLmN9iLgU832kdkLymEAXu8Ay7vio",
  "key22": "46UdYkk6y67DXnYoXGANpyLkZSPUmk4KjWhKuKPpcWEqSEA2apfpo6u1ck8YYNk2XYjHgDUsE4hrXg5AzusKTN7Z",
  "key23": "3Pa8e78LwCJjyYrsTmrvGQzCep3Msimbb8p3NdNjHuEvNTynhh4FFsZ9NDk2Sch1YigZxhUsvQNVbrKCUWYDYpEp",
  "key24": "44vBku4CnfdXCyA4bkNM2UgrL9phLvgBFnASf36LiHGarmyb3KrE92hzfZ7XkveqLNCcicjnkgTvm2rCiHUSJfNd",
  "key25": "5cyF9y9rrSkyHzXdJs8834JdFXAM4f43351kae3kpGDWsrX3GPjgGaUBKcFtMWQRHsT8cqhKfpPTLo3GBj2PpCvT",
  "key26": "nz9jQHi7mUTFapAVcEHg91kJQ3MXrZqQaW6AfMLdcJvZUAshkjr7DEtXRDd4XBqrDdhdPGzVAxLwJjkjKpSLMzt",
  "key27": "499PW5zJSEL9cvVZP61Bg491P7RXAfksuQSzsspyr9ouPLoaNGtJYgoBFfTFYJEkRhT59ZKTPm6pLLvBNGWtrU4P",
  "key28": "53pdCJ7JpRaFrUdiAPq85pgaBaURJ4XdSQLSo2EhzDkmeNSWa2Lb4ZtHFbMqXDCMQ3AzEunLUKSYPZcvbsJFnXWH",
  "key29": "2SoQxkd3hv4VypMmpx1tbcN8wNqsXeBQBT1G1xaerruqRokmFuEtf7b6w7gVYAGfikMiTeT2Dt875L32MTFefFW1",
  "key30": "4oxhwf5fBaek8ApAKEdamiEnDNAoY1kDLMDSUSXrigteGersjh1PFenUczMwmxaq6V3nybk1JwbhnA22UmPC5QDi",
  "key31": "2YZ7kLYzYtgNqtsHWe6qxWcxxu4DFtpEsVyK5cz56atgXstHiPDeYAjCYyW1dWZHCGcBEGEeDKCExFGSV4Pefj1H",
  "key32": "WMkq1WZ8PCt42VH2V9SiDQXCTv6H4MYxwmX1geCVtfR9sK4iQGaE2F4d6UTa8Kaj8PUYbBXPJcME9ZfcCm563ZQ",
  "key33": "24gCgfBCFA2RNgTZq3LSHefmc6NoKFC2WqMAA4FQsEg4rN6wq95ANcohtSDMnrrJmofgMSN7PGdE9hwQfBo7Ea5k",
  "key34": "52VoCnzzmtcnCMdqS3PEGe6oPu5AvHdF7BrmNCorJhEmKWNK7rh44GLbEpi7NA4NZiqRiNFP2Ywg1GLWn34rAy2j",
  "key35": "AB9qNtLJBXtqGNBrFtRKWJsVx99fboGEBNcjNcNzrNAfx3t1rKx1rcmM8bzGoy8Q1Xq88z1tbFGTHFQizoWNq5s",
  "key36": "5n4Sh2yNHWp1euNbuFtbGupBX8qf5FUsbSRiXkvSE9Z8sxUPnrWdBnFTHFaegibWyw1aGfGQ5xYz7DGcCTJFUnA7",
  "key37": "42nMXRYxdFvDaEbkqP2E3N14HftQRJ5ARSt85uY7NKNUcE78V7v3eKnYhW5yyzQXhcnsTzPmTVX3vBx5KySkrJG5",
  "key38": "BLDoaF1R9qCjMsBFkRDMYAEvgTCprumUSAUBueL2ndMe8hHxuBp9zWW2qV1tLh92C2ZH3S7Gfjzxo9hAwR5pjmZ",
  "key39": "4U8YLppJCaVvJnqzEiQmEPvPyBP6fvThXydqzB8E1UxoroYiR7ZnuuHk4VZ6Rx6E7AhXwuGAFi8ZBZKokZoKvxco",
  "key40": "Uue2hZzvaWGBWLtUaPa1tyDuknkPy42eFhP4ec9EXv6AYCx7JEb5G96GHXCtQXEjJnvNsnc1SgQRHe5NomRvaG9",
  "key41": "3iBcJ87hqtQKVWcon91869mrnrrqH1QBjNQiqWxC9gnjKkpF4fqxspyhzRM8AQyMHEDpz4oJVuTszjwyj8bQNnEJ",
  "key42": "nQQ2oShBQHHL6FJtToYePeBCiRfv7t3F5NhMUNnh6CUgNW8mFDJ9ZXCfKiC67dKZJo95f2fs7bpUBkhEaW9YQtR",
  "key43": "4uTEVswNwq65CRAYBjbpN11oQb4hAb13j522EHpZ8r2wuy3qASXwPxm34VinzzvAcQXsEiYkHiJPNHyJW72cCjof",
  "key44": "3Mmkqvj4YmmcbyV1PAUXnpsqVB2ooi5Jyuc7JYn1UFYrvBeDfi5hTLSK4i1Cgn6G3sLbRueSQ29dTjWntdbQ4jBU",
  "key45": "3ZBQttpFacGJEA3MEyjXDBQpH7K3Pumi26fncwEBvMdJ2TUsuWgrsKkztYRUdVN4gS2TbT73eW6fWAhbTxZckDjH"
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
