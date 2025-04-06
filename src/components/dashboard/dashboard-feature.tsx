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
    "4c7QzJZ6HVRfi8qscQuiXhuVBCk9k4ESPPTZWaP9Y4ELNmRuJa5JB3nJQAEhtaEvXvFuxyzwjo29ggqpsxb9oRf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFq22hsVmM66LxS3XmQw1QPmMtkSbCkrdjMXQV3oouV9ethfP7j3qJMmUSeh9ixPmyVttMpGHwG162ybLLJnaK9",
  "key1": "34z1oSpJvE1KBPLoynP7tmWsZUw2CTwt3PZkbzBCXK3ob2imAWNM7q3sC77J687hpSjpp33TU1SjvXmmWZqG1THv",
  "key2": "3Z1pBmFgFyrgspCKxSyEyspkCnWPgKJsrJLR7pAbRXp2GfbhRphaUU9a7sXhWWQ4ZEQpG8ZPf85TL1ja8NV9YUyM",
  "key3": "4nPeUc8MLcuWkXpnLSPvm4Rk7AamJ7ooMBpgZ9iG7eJrR5npncjXCScH7WWdG72i23QtV1YChx16NqvDayyQ4nj8",
  "key4": "3JopM38Rnfxqn7GBiXExAg3aPuWHFgXLQFGvp4UyaBXtLNDWPHNMrMeFfjmGZoYzHoqT6jXUYLscN36EJrKjdEF2",
  "key5": "4K72UWmRQSKDsAr7FqMRzbZwFMLqbGAx4BKw9GU9Eyosv629AdXbZTugoEhfwDAv4uPsdeDw18Kq44gizc314QGV",
  "key6": "5BVsu3LHjE51vYmRRd1zde6UzWwiNeyXrJrtdhKjcbgKs1e9Din8M8LWgGeGb2unamiA4JU8JNVCZsFQmLxwTYp6",
  "key7": "5F2U6p7MhcYvwqSBqCCxJxrDBKXQ2puNYT8RdbpU5Y5tcJiV58v3TQfT4pGAVEeBeocmmNmt7pdxBoJYKzRHRagC",
  "key8": "4fRhdKxRqk2Hqse1fJZf7aLFS3yqcjB3oyYAzVhazSZX6sqTa15PB9y5X1G8cw2cezCZsWYNS2Vj4mTCUzDeduzg",
  "key9": "3vrt1MaonfQPBA2DGfZadtzQHeoAqQ1aUmfebx5VYFzXCgMDYwJ4nzFHWbVcbSgXVZC3i7BMZkBTXPF3o1i9aEsc",
  "key10": "629WUqGsbT2R3kZjhPNGUFdYEQY5tURaWSDy7ZqkMpiw7aW5HywFSds1KZ3ebpSF4YapCwSp59X7nLzK9qYQKABf",
  "key11": "2VMmqMSdEE4eUsCLCdegj1sZCjgiqb3BB6fnbBG6i7AnTDyCWKSiMcGLsXSzt2qH5z7WQkJovKj9YLL4RoWqBmB1",
  "key12": "3SjkxE5oLKpkP9xbqxuBCRcYubTDH8oXvB5SWMTEfEVAboCiwZkurhzr2ppFnkUtvauG6tPquHo6rdFLQLScrVFe",
  "key13": "4tSZmstxNW4CEXZU4W3HnkeYUYbXjVAqsRqZ1kmB4zeWmveNsHAc22CSYp2JQnmgYX6D5ZAoEPTRQnWMpAXmYCuJ",
  "key14": "3pxDxsyBPaY1xQcJoseFLNaQaQGZbg2RPiv7bFq3NdgXb6GAAVmGY6MPSAL3SGbkd76ChfF3EdfQ45ozc1GwSoM2",
  "key15": "4eSEoEUrf9QhZwPiAFZBGesUr4fCsvGTXiGHBedf7kzZ6m7xzC8ytYTKPR5wxfMsPbXsAjix4xEkHggXhwgNm82Y",
  "key16": "4aUkksSTETm7Lz7whdi4QjTYE4jJuHiUxGGUuuLF8VsCxvf14ig3CtFDPR5Fqg5geqLvgeV4suy24434Yub8c5iQ",
  "key17": "32WkbUzp9pbiUBjDC3HMmdkeX1Dxf8D3GMDKHA3yV9uGPUS7mww7h1FNTp6VPJSDKX7hfFL5K4r2kmtnf4R6A5S8",
  "key18": "5b7n8EtiztpqQv2W1LrtEZS9cVPnT7YAEhFWgXmsTzWSiKUkrw5yodqfeQAq96F3yJmJjNd8pVBktWyykrdTgrKi",
  "key19": "4QdKy1wvmgappL4XZjqMVzcW9yM2Z2XbLvk5oKxSu1sh3PfoKtgcvZ2DwGVyxpWVCKwqvwamSVrFrAhYSYWaSXdb",
  "key20": "3WsJ6bY4S6vMqpPfqGGp7y5QdmYG5BjTAYpdSCFey4swCSfLEXbbvDYQKLo53L8Lws83Jm1VjjoCptk5R4eNmnmD",
  "key21": "78Eoab3MzmcdiaDso1K3wSRzBXCZW2AcQoa6nhYbDLmLHGA7YhAT3D5q5FT9nosAiGBV7Yijg5BS4KX2dH1fE4n",
  "key22": "51cJQiWmFb9iZcpXPy6rjixhcjGb2EXxuGq2E1gg8JYxpdkE1dJD8ndT3Q8msFTsR7bvUDPdjyvEPFpcuZXTA4Fk",
  "key23": "2aNo88jk2A177DjginjuPmWXX6Snuzr9QMBRTAu3WDP1DcdDgCHSBnFSfXLjT1oxkLMT1vWbVkxkBKu4hKrQwf4w",
  "key24": "3gecU3G2zhqQpMG6mgCQfXoBBMMZWA6KZTcyWEMhoYnnDCPMk7njnktfr3P24gWg46aYSYNobfx4jVtEiL9PCDu4",
  "key25": "GtBbTA5NxvFiSHWbirzrdWi7xdKq1e8WuSCiP65W57z4569kR14Td82r8TtsVBAetTJNkjhneQao9wFzzRbjVh7",
  "key26": "5cNBeLKZsyBo3VxTSuwX5Gs3kAJGygM4UXK9j9zGSzhyDJ5xVhtoCdZDy5LqVTknEX4q7NSjfntgvvXhsQ7g3v3y",
  "key27": "43eEBBU6empTiygTC2HG6gux6kVZaMPKK1LDbTZaeZTaXDUUD8EcYUxSwsdsAzASgGLmi7aFScZKFCHjz3rfeoTE",
  "key28": "4x5uytmLMLekKhf8MHDzePy1ZST4QAXy6nZ11ajaoj85cJygNsSC51eBDTmcNFxomTMb3toumHZNFSjDDPo2kDhA",
  "key29": "44p3317Cgpbx99S9by1ih9zJfUToCFDEX3Vtq4oMhZFrVPcDsEggKdyyKtYxkNWaFpUv9mWiWTVzw5Qf8VVTqQ7k"
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
