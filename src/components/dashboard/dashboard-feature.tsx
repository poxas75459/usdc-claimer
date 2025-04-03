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
    "4mQbUnDbfPe6RGVWm3QHQ6nnbhG8gYwi1cQLvC9PNmNVujD3Y8fiziRr2PwxVPoWdsmsnjb2BXDPXnPPMigyq3uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NnLmxqzSSSoPiyqkDJTcfzJcr4kgm4pSMW4bGY8LiuX7n7YRqYqSphijPjepfpUHohMhAgftXkTHRyuP2UF8BxQ",
  "key1": "44wnThG8JDjGf1WVhvi21gMNXkqAMaAH23AxRUwaZ9sBQuCGQpFo4Gveg6LWAh3pKH7Sx1DxBJHGSDZDndTSNQKM",
  "key2": "5HjY3CoAdszJxf6q7g4YhXq35CV6eRJxyUwrAhDxtFy31Qj75Mu4e2fN5FKAwzFHHV9bZwLBs4bAhAMDAJ4Jj7rt",
  "key3": "35DvWNMN9Yid2J1XafikfC9KPdxcZeA5qwSmcKPeKMthF676RiqgZS9qAiHkT5FLuD8bPgeDhGzQZpMGfSxTzeVE",
  "key4": "5EBtHbMvprtcQrhmE2Tz3ddP7FM8DCbYbzrzpRpyrJJHQ2fdycssSzDK7aS5jsfN4B9EizczHtbLyJqYBAr9UxNH",
  "key5": "4gZB68UXprHQRFr6UhdVq4y4fYrqUQ8p1QhiDYdSAVNsiu3NR3ZwxPHpAvnHko3EQyT4TwKYbYyZvgJreFsBYRz9",
  "key6": "5kYCsos1SewsUY5kMuxUv9dd8jETg7diwc5NUJqg5mUEcVMssGmSgsYawuvjpuJaUAPhiKhRm4Kb5iYaRebNV8Yh",
  "key7": "3S4p1cHK8BQotvMyfQKSPJ5nZy3W8C1A9YkczohXs2E6n5f5nkXT2QGfUop1jTwupZATHFdaXAMuTHRXHaD6NawT",
  "key8": "4gHMRE4gPLJGB6Nq7Eox4WtCGRBqMHsVT3jhWE3rc3K2QkU4oxgrpoa4Tq64tJjRvSnn72oRfcgrhABzx6AtuUCa",
  "key9": "2ffTKez828J6PvWBkumYcE3jUpndzVxUdvPx94My9mgWYsdU6AscpKiYFhiEe7m3j3Pmco1TJNVa46TxvZWThkiD",
  "key10": "2y7M8PEi1mHcvTWp6iHMuvLqfLpxPsWuf75QVrRSbq5sgMvpiwp1gBBBPm5G1tCD8dX22NyXDDhaW9EWw3rGpevG",
  "key11": "5ZSc5A6sqMvTkTbYZSTvcgzY9LmMMjk32KPJUppcRefbfAYmNYTnpxvgP3toFzuxcWixBtYsHykFkAbxhvrfFFNF",
  "key12": "AfbmP4GiqKWC8Zat59sxHRRpCgiccAnjWzNDQ96Zbv6i67Qk7uHS6fSgcb93ucnPRREGGYSuD4SYgo9K8LyGMvY",
  "key13": "3JnEX29M88A2i52SDAaKYmonsDbNmeEyxvDXqmFXEDq4BeHeZENvUu7Py2RbGwdxBKq7ogy9EYvCyHDUQyQbxF6P",
  "key14": "418tZdmGE75Bw7EBfZgJkVYuMrTBn8BX16y8d5XFLA83dEMqA5iHJuVu82hhWmX4qygMULV7bAEBNTzckMZ8GQJe",
  "key15": "5ZZ85sKZDpUXwbroCDN3QFmGxFN6ovqYcoHF9JGwFQGauwFKu6mg2GsZe6MCn3fmJ7sVY6smsXirzXGmikEkgyxq",
  "key16": "5nEzuBxUvZ6bmqpg9oxDwK4ejw7BtHtjrRNqupYef52hnByyU4CJUdgrdcL7RDQLo5qwEFrgnp8TwWGZ8KXLR45a",
  "key17": "22sTccSjfWYZSiGnaS9UJdYeJx7AERZZwMAhJuAUFDEcPQQXgsDaSdHM7nHCn7kxwgHSvf8cayQoBZXmmC5Wa4aa",
  "key18": "4qL8FVgpRr4D4f4Xw7YPR1YjvCPVBNiTxPFfBUKpAHtPgtcry76vRr6gw4hYBiKGCKiTWcEy3bYTQaZpvk18GpWc",
  "key19": "4yrUmH1tBwvhLuqp43DMhTj2qKYFoaFXeXVfArMt7trZpEPzD98fVEySShR2X51CsVwg4Zi1jmk2zGEfhnLGjTPt",
  "key20": "3s8i4MFiy26JbFw2GZ9cSEAuikZ2p4UNaxUNJrXeUPUHtzYZArbc2n5V2m1rcU7qSf3QbRn8AuafQdr26LqKT1M3",
  "key21": "4p34bHtSRsD6cesgCHy9ZWYUyMAyzXWtinRsWpXvAvrKeJ8HxL1xuGFM2RorkDmWe7mpcGuPqEX7guAHQhUKpCJp",
  "key22": "34cRkUChVqK4ocBGrLsuRzxtekbYRrMUntBDSHEMPPs5H1bYDLBKVypufT8EY4tp392vJE1rbrnaCuRBmQ1dJmnR",
  "key23": "3ZoZAcCjonVbBhAUaCUm42ut4BYjMoRPVNN4cNiZayBhb3FyFMXConkamcLCDXTn7T9SYzqxj2wzcXirrtrB42UR",
  "key24": "3jTwCPxh4xZRnjSPhvLUuLHYTDZoG6GJpNk5fFMRU5qtMkingAiDm43YaYiJ6ptbpCXNF7rdsKvwcYERwQ7a9ZDQ",
  "key25": "tLcPU2j2VVikFgXXRS9v4aC3DuMBFT3kLjR8RDkQZ9qAJ6NCUHP4LPd3KEG1wMhiDp2L8Ps4G6yMwB1Q4xKP7Jc",
  "key26": "bK9AxZrgxWjMvYgnyv3X4VEZ6DgKZ6CSDFHKBaP8xaBe7xpQKFyg4WVk1XPr5caCGuZbCmoc6zPdX8R5nmRCzQj",
  "key27": "HRtFBPKdbzMjimgXR4UtBJAJKtewmUG5x2CYY3NJXdKFaACPv59gvG5mBFDk5kmeoDRJgArXxaTqoRSuKCLHSuo",
  "key28": "EEGK7V5Hz4isF5vY6tVUHZDDWTeRdQbVgrxa5ooQ1HcmvevY1z9fySS3pNvbANLVAS4EMTUAu6sNEzA94KjQhJf",
  "key29": "5k2272MV7FUJCQWzj3J2p44R5R1AfXUYrgKMVD1oc3NJs1CWQ3vrad1PAVFq8Kz7meDTK85HF9UjWQhbpZyqn8Vv"
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
