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
    "39YTHGKPN436vpJMoxkFDZcoN7g8XTeVuyRFVA89jR7D1Gj2gDqLBEd7Goyb5hW1scsert5k3EqJM7Fnr1DhwXKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAnKLvmwtYwjgN2ypwxsuBUJ4GHm8M3LkfXCrTehVK6y32K47U21omBrh1MCFVDHsELCFw8tDwYpbXMUzpyVs8C",
  "key1": "2njtV5GUhopQ3c4MSN2zdWSZkNNjHn2ieR4nQpAwaxwdYxur16oKTa99aMaxQyPK2XHB85NgouaGKktwgRXRqGDp",
  "key2": "5pjFeBbK4mvZ1zDg6fmQu19Td8uW5s91YGVRVMyLzvkq2YxzUn7EAkPZ4WTYV7sS39S4XBA3osBAg2bf3AH4snHS",
  "key3": "4kMMvyibCTrFUsh9dQZNzJ3HaMHFEc8S8PJJq2wukUd4F3jSzSpdR1wHBbqPYyKsvYZ5F6H1HurAy4S9erLyGU4p",
  "key4": "5JSb4k52BGLPNy4BHMroLhmGv9TrwJoZv3JUzcGkm1VexWuMDC7LXH466teeG8bVmPoFCi8RXK6nvfyD3HzzfBcK",
  "key5": "5oBzSV8jyepbtqFKis3M6gV9akgHx89juLMkVGqoVBSRbEPDcmfVX1EZrgcsthigEfrJ1RFYg1B8MTe1yskNwGxs",
  "key6": "5k25JSjJZbRxNbpSiDXYgCTftf7cz21caroZDPbyu7KsAGXD9M3tgMsZUA4T6NCDc6orJtWvbEaMUzBbBVyqgppJ",
  "key7": "3qdHsp5AdFrbDNpyiQgKYAovLAR66XUcXdg1WeA3rSk893ZzU9knqc2nwhpLyMJuj94WAeoJP2iTjwMBP5HJNXYV",
  "key8": "676N9AnzaUjczkYCPBjopZAY7rkpQ4z6QKbuefnBeSs3m5ykFegJVvjZk3w4kthSP4Po1G4MGn7kibzY9iaivHVy",
  "key9": "2nPQr4mATzbi3sG93bpCUcs9kE8UEsA3GJHYBrDcw273AHCaSqr6ZBugJuoxcPFXe6WkWHSyLZF6od7JjVa7V6ZB",
  "key10": "4cSm75TAnVy5p6jXw55BkALLbEFw485ksn5QSs3754XJ64cEP2QcoeZwWsaoXj3xtMp5W9yPgtuQ7yNFZZd2uwnk",
  "key11": "3rA3vngVMZza6ZJEgUsVE4NTcMrAQ2J6PYVsQqGerq5bHCAfWNXdxryycjUMaVkVznnS547Dzro2zCfdNtfeoPmF",
  "key12": "3dChgNNCm8aFJQ3eAgK53jpoEthbPvqons3ioTKpignGjUgqXQm66HbNPSUoW2HEhWG3sQb5Nwb7b5R2yKSGNofG",
  "key13": "4VPQQPw7cGBFU7hdMuJagFDK6saRxbqbSqFySPWnCEJEKhLmfmaqQveFcDeY3zZnWSaVUnHYR32xnjvgvt95tx7Z",
  "key14": "2VXBmbD9aUx33uUrN4NbUPLBGYUzxdxGECYRtHgTKxQREiATdMVY5e767c1JhqXGXfmpRseiJxLyJZNM4ACtrEKu",
  "key15": "2sGhXB34sxc3WiEjp2q7Fk9w5RzCaMUKEUddeNyKv5gCAVPD5Et92jE6DYpW3Zs8gftnxxVg2PXgBLu2HcjUSgQp",
  "key16": "2fUMNMCs6t7QCKi6nzfsVzLuv7VJYznGsw5p9efNiZdhHDsJSBN2yGPVP2vNTFmkTPyfCR7wpirMVLzPcisTCznP",
  "key17": "3sncEtgyXHSFMKXunwHz9kA1jvFV5zWPFPFBcbWuCAvHcN6vREzBBPmTsF8ucc2wnwxx7XX9wVafWDudRMVS4xg2",
  "key18": "KbEhEyUf1fsbS1ttWCiMxpp7U6cVYyvK9P1BiYjm2eD8TcebSnbDpgQ3RcuPXZcXZBe4X4aiS3QeC1UE7MUksBb",
  "key19": "5rn5QVdk5uLskgjhXWjzYUbFyCGy3vM5aYUmydpvvHirroSUYRFLjVAzmhrpCi5wtVEuXRuUKaAH1Wi7qgkyEMWf",
  "key20": "5PBRegqcHfnK8z5GFvwqdR5ey4gXNxJhFBtwZG6WeFdREon85GunFuqNonqZVJsXfYDURoRmoEnK4q49jhcWYySX",
  "key21": "5PUMy7ehjaEiNGrLuzNEHgF7o8GNWnVWkdByjezVFSqtMG9V5SWUjtaxRKxXWcz2WxsgUp8ppTxheEfRq5yRak9v",
  "key22": "5p2RSarEN2DEvfjBjbHcPEQensVk8uNj4D3n2R9tLAL982KuvYxPnm9DhcRahv622VuA6gAbM1d5SD1o6J6G1e22",
  "key23": "4dKoHuCpCsnA1QbqE6CyqGvvEDj8rt6DbtD6SNGnr4zgAcoKT9DCJsJmycxniP77GKt1CL7xgCJyWnfcDzhYdUeZ",
  "key24": "3Dpyzs4XmL6KapddFithWkNdFb3zpAQRNTFdTgSKXnGi6NCx8CkR924Cc6GRKEWcPyZR6PJ7sPsUP4BSAHyPDA21",
  "key25": "4fop8tT1K9qH6qzF7Wus3VQpLHZnddrc4fsEpnHybyt3G4sM8bWdo7ekFvsUPf3MQH97Xr7gA3tyFpcL6h9k8dyy",
  "key26": "5uFHRULrSKh56mQb9QjNrX7vXXjA4Pi4NAN3ztPSJhCfhRTCTcPzFwnyKKn8bfCbqD6tLjDn9VT3e3QQSpZ9dFif",
  "key27": "4Xe5otTYSNeEtHcCoeyA8TXpJb5mtToGFc6BmXWR2F4P3sBWkrCxE8ahrDq3EegSzCDhmJjAVHK8J11Xz3Z3B4RX",
  "key28": "4nhqHmrC8DhAME8eUTQj4dwCX59tEMTqBY9ss4zdz5Y15XXCm83kYRnwdKKKe82smA2WTGXaoy8nkaLDDCRJ5Y8T",
  "key29": "5dLizm85fUeYVe9DXKoK3MEGXhKbL5GSrwKYJhHoaUtdhXZaDjLGxTqoWAMN1Q8J8daxYCqR8cqFdKmcxm6kp9YW",
  "key30": "TzQ1YMR4tnLkqqPiPNvGxJtPcju4pc7WQie9MdjghvAt7jYGTHeU8bJPyzgAHfchd3tk34cnDPAhTmG5gZRdnVH",
  "key31": "xUxrJbQYxrn7DyhNPBFcRmcEFp6qxDjn1TFWvcQhvwS8snpyzCrdohc9KrS1iaXLBRdYkEiamQ26zGZYsBHKXim",
  "key32": "3u6qVXnP1mYwL3d5PpYe9PGdEMZGdHjTsr9Wgbxant2S8v4ESxKipJ3GQMwgUnQyvPHBirBir3RQfNZYZ441VjtX"
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
