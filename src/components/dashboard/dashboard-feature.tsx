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
    "2CFzi23moYi5tSwoD2Vn1oALndht4gNfm2zwbZGeDdQsshEvfU7rwUC7oLMtLeMWgCxTWLMPDdg53CjBJozYEhg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cT6YLpMoLA6NMJvcojyAcNpQ6JQadY2iU497AawStM3EWFPqGbCMy37W78wPhZLSWm1pdWPhiH85w2jGzhq4Mrd",
  "key1": "5T1UjxgiMvzzkWuDbYDQr4M7HE3CAfaePQTMFLiJYRmsPc7WERVAUFHeRqVHuWUCJ2jbkcBGGdWvjKNraNdv6eZA",
  "key2": "2yMdhgGKu8caE1Ad1xeZwCFwBDg6PxRRtQoUDcUVmSujuJpFGqkxNBhZmVDeNAbdJxncf6HkccXHXCVuZTDG9duR",
  "key3": "5CzBDHqd15SvUfxqnj3Sa9F8uD9VYFD3htn91yyVSs4LKcQdrb3v14Jg38yHkc1ESYrEnFTYAod39zuSkihkfBM7",
  "key4": "2Do2A2c4iEos6XnX5q7St4yM68kQQesAKkMgTmnH5oxKC3hp5cEPhgtgCdfifkjUduMwNEv45v7D3L1vPhNxuW5R",
  "key5": "8DiHjJKwdqywmCogyDenb2C8vTnmVXkFZcrUHVgSudUVs6siXqYxNWicEJMPJzi4n9Ua7sE5H4j3SRxWcocKn26",
  "key6": "zF5CWsA4DrSRgUTCZuKEDpcQsvQ4giw1yPAd5cNjDjHoR6cDKzK1c95DGj4nDHfrdNPWtY7hTZpeVLusCTBGcQt",
  "key7": "5RkLGVSuQFoExrQvNQ4dZ7RiukBigRts6BiSgXbEW3KriTBvhB9Es9oBzi6FEP6ghmZiWxE7qWHJUTnzHGj7MXTY",
  "key8": "51ngRUpp2HtgUPdpViqb5Upxunn3XrHcR4qLxvFDP6BfGkU7AbuSTLo53LubAzu8qbepokDEfFqTA3Fc5B3RznSp",
  "key9": "3BuU4sR6AxP1LCQgsyUqR2fZVv3RREsmpofgcy4pxD6AgQ9mK3nfK8TD4Rn8Wu5dhoixLq3tn2GpQNtHVKugqouV",
  "key10": "aZvuKUjGkEw8KyQjGWUAHZ8rLQTVf6FbEJrLa4LYqbyDCNAXZmwSczeCVoxT8RsZSZPeZbaGiHZCvxD5VwHs6Hg",
  "key11": "3wNAe9PQGRBija49df9fiM5qH74pxYAu8j94QkneRX7bBEEzHdxppMmYu3yJMkkUqgyNUspkVQQ6jb69cmsyWkGY",
  "key12": "5W4asm3hEZ1tC2evUkpzEijFLFkjbpE9VR5ZjUbqbxfRt4h8br9LJqtRNNnVHKdAm4nD6NNnUDmj3Di3EX8f6hzP",
  "key13": "4Gdxm1LuyYNnNfZjKVB2EAmxyDDjfGri7UwNobjWKDXfTjk3zhgUv6pyz2ZaeCy7QvqCdCoZsu5EMkcJHFsqofya",
  "key14": "TmxFDziAmfnK8ekY3bsUii3ve1Ye4exbTwiUEyGBqyZVeYTq8WDm8RPbToe6KDfLGekK3V6Q1T8wUsX7Mv7qzcG",
  "key15": "4vD8AsL4EpskspX7mYJcrMR7WgzePzjEMopV4tN3UWkNM7Hu8pjx1jGN2fNtejgjBy24XdRWjBmytnQ9MTZyMX1j",
  "key16": "3MpKq96HDNb8Jfdn7sVnUZRVPZvDXXUcesXT6kseA68AKXCFuJRGTg5ZLg5Yp3YfnYKc4NwcLU8uELiHQtjuy1RQ",
  "key17": "qdV1GsXm7Zyy1sBLyS5M2RDyJD7dUw7kvB8ayh8FFVb1ZHm2vt6DXaRbB5KSadcbqFLYkyf1uAuLHJiPYhQ1vtJ",
  "key18": "2orVd8fhnc4gRXWRFpNyCLyGzZPUbWPQVmgxnaWcoK16yL2D2NQ4BQrKMtBhfz1kiWZpz5hzPJoyuCYcTsf6aXVJ",
  "key19": "4ikJ7eS36ytz5p78fN6g82a5G4sZ3o9unvZQ5KZFm2ATP7TL6W9mfPCqquM4Novj9CwCx2WXE2YxqEmuHaYgi55w",
  "key20": "2EZBueYwmaudejsWt5bciGKaLgswbse4cUdDWzm2JyLeDx8DxXevyVZJhEbuaS93GKSD6X5JK9TXzc4MtGNs5RYr",
  "key21": "4vBVGArBp5nCHh7hUryqeDBtHKhExiPHKLp48FtkFcF6Dk1V9YtkaAPrqkpchtwnKyi35G5HLsKH2JDNXM5YznYj",
  "key22": "3q7TKzns6n4RFTah3jMxTqFwEYtvm87GJzjiietfDTJScaF5EYtjcCFJmh4hcKnTyE4E5rcArXgtyAbUKn5gDDgZ",
  "key23": "2Q8Sax2PmTmYPWzBqckJMYnnUVBtV5zaBzuZAMYsYRKJ9KZGhFL7Vvn6ZLkMYPEB85LxiT1hq91aHuGbToaqbu3F",
  "key24": "4cYijNNiUbCeM7toQmztPtMdP7H41PAkt3TffMfU38TTNacCS17qzfndSSGtBX18hoqLVKWKcGcCUUW6BGc6gpaj",
  "key25": "w6orQ6in9BzQpPHiuftECA2YEWJrJxi5fVZkwFRiReabHSrk23xhbZEVSjgibk6ZVjG8wGCokxRbBCPrr2wu3WM",
  "key26": "4wexUrjWkhv7561GqhxZ1zUKuLSbnMtsYzhrUeJ8ANByTGDc3GEpELGyGNNNtiHWb3mzEwp6o764yP9mX8kqx28t",
  "key27": "59DD9yzkYhSDWxR7HeK1vPZvbixnfKZb2NvEc2qcPeQWoXgycxcLw31BQ7zTXZhKArvSZfG8ToUNMStx7hQ58G1Z",
  "key28": "2w2d8uUobihZk3CK83xzH4iivNvovZhe9JW5n8Wp2r7RxqgXyjFRzwaSs7TQVLvLrFRBfE8DpxyWs4Rew2yiSWDg",
  "key29": "4qYKaFG5Hyx94BxKzCmKagzbjdhcsC1cHCQLQYJMktvyXPGLRMX772EH3kiKEmskBAgvQ1C5jGSTVy5UwU2EUDEw",
  "key30": "5saQnfEdZAkUQRQZXsUx15S4kBYHezovMLqtgnB1wPMitFyAru2JrPcziiuCSxDHV38jCCTB5pwcbUS91Ud8b6LM",
  "key31": "5wC9nSXLaUoduNW6wbEg285g2arEKDsL4YzU435b94pjhZpZz2a7rscgv9PqRFcUqMczqijVpDqHtxs5EPgb5Zu6",
  "key32": "4AjSCTyDCof4ofWzZ8uNmxbcz2p7cfYUH8skazXVX9Qz9PneqWGcobmLU7utsr5jVSnabbRgVN6KzcR6b2d6WgFS",
  "key33": "3Be1sqQ7ypd1Vr1RCSDf44Z6kMGXSbSrWJu3KnSTdE9bTktvBW9XEYknhuwBcYyUQJiVWeYz1CZk3SRpueYiSuZw",
  "key34": "eGpGWUNvMCTYBVHPHUmEi5DzadGpmKkFJqdJ5xW4W6F5uFA3YvdNJHfJryP1foP8yL6JdzG8r1n9Xy2uXSecGNU",
  "key35": "2EqE8cqP7PFQ5fd9L9wzyPqpHwcN2P4XGF6WVTqgHhmU4K2uv8E6TjCwYdk3TMt9GkqGZFe7obVVm272hoiy6tqd",
  "key36": "5nP3oerF1tKZJvLgik5DEG2LoLzSzWGHiE9Xs6TyhweEWC5YSUiK6bsx9EFpFnkR5zcezFFiXTastLy9iihkmVRh",
  "key37": "64rZvRJTbW5RsvitbHqQ3SoSzwuTzqSWVtqfcekPMD5vpNGtgPYJaafyRTq5ucgdFdbsPtGqsssoS46y3x84xxbF",
  "key38": "kKBidFCpKKqWH5HLCUa4DLKTx3dEXdoNTmhijvx9uE8LUasytCej3QyEehf1h8rXjdXwJfkRJois6wPs1wk1rtw"
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
