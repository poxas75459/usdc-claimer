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
    "3n3JKa3FymtrJ9np89EJgD8X9gE6SquL7TW7wDYHgFsdCX7Xr7WUCZ49rQg6SoySwH3qBwp262Ha5YWHkJu6UFB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwZtdjT9jtJM3RjmjfoZAS88g7otTshD91B3sCB7uLxRxFp2tW2EgAjjNDh4BouSuD9Qta6BTzAQ65yFNz1uGp4",
  "key1": "7636g3Sa7FBfykwZdoBtq8ZYL6d7AmWviqbHs58SbBaFe9bQt1ihGUxHknjU1QTUqQhVk7zvDey9Gn3Qorta1BU",
  "key2": "2kWARDwbwyMwDVzNX2oTEL5ueMWV1KuAFCLas7tqxSPBBQJp9tZC4zbhzVFb3ibbPccRYZ7F7vGto2PbCxG76wro",
  "key3": "2r2JF6XqPgGn1wpShYBju6Nrsx3hRNnvHedHXZ347N9KRu7TiRwbUQsR54N83CtZT8XpLKDEJRMfs2fPUp16kXT1",
  "key4": "2LtNBwByb3pZPcwJbSRbq12L4DpJNww6cheW9w9fgPR2N2JDruGeDmDk25qcmPtVBq1KnsL178LuYTv9CP2crtj7",
  "key5": "4svSv6wyLe4hu4xsbCBCUH9iiYQuJQCb4S2me8spDN4sWFwLLpn5DLtgUiJ8zU4r35xmmPMvYCwwMQSDRA8zbXoX",
  "key6": "334xAyHP7tKvYmD5peBecgHJhheqSm8dECdgPZNP1wkj3A8E8GMsT2kouJCVyJV6Ynrc8M2aH1HvBhVyHS5Mtjx2",
  "key7": "51f2YWexwMJ6yiZLRkUzrKAynCxBecsKJpsZ3cVQDVePbgQoAzxMC58ksgfHGysSxR8u93imp6wtvcc7CsA3eZbF",
  "key8": "2jn36Ed67YEjgnvWpDJKCkAo4CNBzZ6is3KqNGVNGaH2tYjz2dPgTCZyTV477FLJHTMhxfCAS2S38uzVBfLhtN5p",
  "key9": "2vAzGWnMtz7EF8fRiGvEaUZyPaGdmYBPNtxsfHxyAaf3eav8NnM2PZ7j9rc6udAcDvW933D7Nnrn3VyHQDQ8gnx9",
  "key10": "62ZLjSfVoheThj5kWpk8xxcQTshqL9fLfRqvbG5fKsc5YoSWUv84N397Rhv2fYL27y5aQzhnZa11Sofww5vohD4v",
  "key11": "G4wjC5Pk8ZdBSxtbf4nNWL7UekUU4MuVZysyutVqjvPUzdLCKajKZ8AZzjUh8rP5tZDnkKKskRdVxcP9652Myh1",
  "key12": "5oG1Z7newVMLK6fHSFucfHQsuct2NRi7kQQiofgfjVMoGakamGpv8DTS338UwoZfYr5uSLn3GHQAemoMWxEihfBP",
  "key13": "3PosnkFFdmS1QjaNYbbpRW6uiwBqPK1Mp1p6ZsRTB5uLUxjrdg4Gk4cU76RFZueU73roiYEt1gZDK8NrwAKz8ToJ",
  "key14": "gGnWPZuR5DQ98MmRNeQTNo3EuZtCK7HspG2rXbqjd6bCqiRbLhK9kJRdwbsdnayB2XP86Uhafwh61q9ZxhMEv3D",
  "key15": "21daFbV9h2dmrkimn3bRSRgwngATSdUa8Lb3uKqaYM6j6MLxLVmdJXAeMAyLnuKwkr4sfnFFLty9SCEWw1HUpNqN",
  "key16": "2fTQjqck2cyiztZQ7H4goJAkFS8iXW94sgpwQS3HwsonrTSA4kTtGVDNKyQeTwb9PMFtj9qWJgitozHPx9ToozSp",
  "key17": "4pWWmot1SiadnmCdHQGWEzESEXRuxp3FVx6iq41fd3WQXLWtMSv64ucLFeu4ZF835Fz9ztF2XeKHgZwqHyedPHYz",
  "key18": "6539XXo2cmdMeGV6nA2DLzsrXJ1atP2HNh7scSNCaDR7gEtUas8Lkfzs6wyZGnsccD4rK5QS78SCjgHphqHJGsNV",
  "key19": "3ZoxLZeqzxkGFKmi4wRGfjs5mVYJAtrQCkedYc7b4ttiUEjW4kNxw2Sx8QitfkqFopUfLW4ny9RNo8PzZG3KCx8m",
  "key20": "2SRodBPpkynBPjU1K5oZ3MAYJh6Tn2DNzTsXe1vqi7WqnaZxVKckcpyEh1Ao3L3XLH6YQTyNzoEFw3jassjADiuY",
  "key21": "3TkqWaNkydvq1PQKBhk4D6qtLAc8ZDvLQJeL2P1Su1jcs1r47FMzg4cMv9mHvkenUYUUnjWER7aUp5QWiGYpuLBQ",
  "key22": "2gVodeJ2Equys5zRkB3QtWGhNRoNxUo1mfKcpxVKzmBec2ABjtvo1ozAwxMJxGLcasimn38dgeE3HxY25amY5Zwr",
  "key23": "2exTwmvWJxeKCD1ZqrdkXyGR7QTKrFygiXmr3rCbmoL3GF4KZNXa2ahwNtz2XrTav9SC8jnS2U3qh7wKyyPKArgW",
  "key24": "5KEjGC6XfoTRWeEz6SnR3CX1kQFd5Fu581ypQH7J7FuVpywyjjxTGbeVoQAWfdWHkQCXDZDwuBHv8UH9svGD44P5",
  "key25": "2kTGwS9u7J4TQmN9bxJ3Cc8WUZBB8fmC1NuVhXuUPA9fqRT1yq6ppS3eF42qzGSyU2XQLvqjxWqDAJFaX9KFzFM8",
  "key26": "3eBp191DCYub5ieJLWdZBkx4iHw5ZssqMX4dXbQfGEToC7ZupoMQcH3CymhJVCPmeXTGw8m9XCZp8dYebU5bQe7y",
  "key27": "4Rzm2wQyc9meMFd1KqE6RoqeZNtypoXApzG9qgAgSpdQ7MWneKuEWsQwKRFbKSanXPM2m3egQis8oP5DBVqCmdGa",
  "key28": "2c1BbvFQnssVi6hDDEw6K4WcgT6sDKLtGHQy9jBe3PHDmNqtLbt5PhgXr3y7UYePqaru7AEDdQgpYybRwszJfhxW",
  "key29": "4kx21RnF9xV6vxRLgtGMF8kVySnsLkTZmcLtVnqd9Amfho1XrLAjeaRLWPX9xvUTgSdLF7YFzr4pUfqhUBGoYi4m",
  "key30": "4DNBXWZow8bnDZeaDgTsf2R3RzV3vXQD12H4K8Nr4oG5vFeRshYGzeAEqTfJLkaXgum7Ta1wPFyFUdN2jFroh4V2",
  "key31": "5RXhNXeHUqshNHtnHCgaT1EPJ4VejFiS34qMn3doczhemz8rpGGdr2c2z7bAYg6h6v8pqzY3VMM1fGHtfyBaSDei",
  "key32": "SConFaNYBXw6bmxSsYxuQEY5uTeyu5GRHgoKNfGL32ds7t8RFDkwD3iQowyK8Xuk7wZsHwb5i6TvrrAukKP3DPw",
  "key33": "2Ba6jmosSxGt5EJvS8T2Fg6YseAx7bfT7m4s4zfZnZaQ5DomocHY3aoXqAycyN78C1kv4vYXdgjqxzbaBJ8gnSbD",
  "key34": "3vpFuJ8HrEzPcHv5EcaaYQpRggsdQ3thrwt14YnUNSk4MrTWZXWNWfEsrCH9ALZoSUyDv3kdaenFEb7UFtu5FQvJ",
  "key35": "3wHr6mzrUGyBAURubJczqycdk7DiuLwkYgz2mo2pvAP3s6s5wkbt1dFNHFstJbtFYs5WYtvRJoPUwe8nJVhoJFoz"
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
