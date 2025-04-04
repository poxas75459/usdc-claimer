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
    "4dVYekVQ1Z466ZNDvK27WKaPdDSZU7TwmvpVu7VNyJKNhY8iUVoqyQ9KRbd7WyiAtwbgUKpfUxfGdCAzVDMAkVwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VNXipQ8h8tNTo5zWnJwXvXBiPJr8HevgFnQuPNX9Sbc2kbdSqsf1X1KQWsLQdL1nQu8SahyHSqEbNU8pZszmQW",
  "key1": "TDJDN5pyhDgKbB27iDRnPyowP2QonkbHeorN3iJRTZwKZksSioWwpXbbgsF2iL3i7c2kjmTq2mnfqEwv4M56Upf",
  "key2": "4ZMt38tkXvzNHexNimYnDNRLbYJygfpXj6e5oBgfg35kKHF3r6pg277PXLikq7h3hsT2uQnJ5nkxYcwj2rEjCtd7",
  "key3": "3NyLx8Qs7W9j4NvrBE4Ba86odncUzqu17K9nUSKGRPPEDZMKZxLrA9aJSxXAM8eZ7W3iEWJriXenW2mt1L2K5X8G",
  "key4": "4eGqGVtQ77FVqhKGzfBFqmzy4qh7CQRUPaYrAcNZkKZjBcnSzDUSTXwQxjfbsstrj8Zmp6wqnv4aVCsT4V2gVsf9",
  "key5": "5UvGG943ppk4ufvW6uUnuP2Ljp5s238is6RaCownFD9jR8zu9WJjtcjSoG4EZscoqEysLx5H1aWhKqNV5BbVroUk",
  "key6": "2EhkPS2PTiKLvYTpKezzPoBPeyhpPH4urudPwKrHwHECfhs53k7dS17xziLyZM1e5uBq414H2TxujcPDb6nKantf",
  "key7": "6EbLdar7WyqecgsVV9eCJ7W7UmcvAPenDLqAyvoghEve5F1Ya8GHt4DNHV8giiLtav4AmiVL9N5uPoEpJQ6D197",
  "key8": "2pQKkkr9Ud3dyLNgXFd4RXvnDyeVQS174M8anbwExjiZZGYft9zSRh8A6MmDc9NVbQxG8NB8jGzpQcxo44i4U3r5",
  "key9": "xRJC8iANCNGza9rG4MsGXd1esk6uyxWeAqSqPAcNZ42TFqiwXo8oyPZzDSqaqd2AFD5oPJMCKfPNZtu1eeAd5Ck",
  "key10": "JSBYp7U7Y4VL6xYbF3eJ9h7adkzzi4PgcAkLY1KTdpghfKmpkw8TFdvG7Fy3tKp3xJy6bqW7KPDMwqyL56j1rUp",
  "key11": "61A2pq6ThY8hxK9SAwpMRwMHxHesULUApzodz6dEy3KqGXMM1WM7wsQnapRFn7LqsDeaLDsaD5sNBo34Hk57Sh4b",
  "key12": "2PYLL5KcZErYJ57XyaehzKUD3UkcVpnZcESBqU4GFkWaqXRigYDkydPDTFtKfDAscCKpdCczod2T7K3bFL6WhA1m",
  "key13": "3QH8WLivytpktKFb1dQd3ekfSwhA2CKw1Xox1Q8BYXZLoYthXPHVU7hdcLbKTch13wqCRRjCAFzrZWJ3K1Nt5mmj",
  "key14": "DR3xPZGizibwFytfui5KECiY1SeMEEgxvFTDgrvYTXamgd7LPtKsqToDKNNumr2nyBdFsCrLSbXsBoQLsz88TNE",
  "key15": "4QNHvvsesFZUyEbMJiZkB7fNqg1tpYmfTbSBSw7sGb7MyujChh6CyCwc4wCcq2FKM7ApTa1K5FV49rCbmBif2Twq",
  "key16": "4KpCaeNWwaK5HJzXkF27H7eb9Kad3r68BEy31oGw6Js8cfyPgL9gqfKatn4r9K83JRhHMqsm243XF4BpNDTVz6C8",
  "key17": "7WyA71M72KRFGRutpyczjQ7FFhuU3GV1fDEBzZP6LTz6no8LSzuWmQULtmkPFihiCnNMipNy6JLccAUL5z1R2RK",
  "key18": "3jPtVB1h3EBZiz794hzyE4UJwDLEwySU6yiL8oYDR85KGgckKaXtikgLvB58Qmtvf6tLu7EwSptTojKqQ3739VXV",
  "key19": "2ZzFEbv8Zx3ht421TfyDoTYGpdwmjQyBWSi1ZMePKv7E2USgPuQ9WHsdrxNx1H8WkcccP9qwyhtZMqrF9iTyELVE",
  "key20": "5Mu2ggxba4rpMTM11aVb3jkpo4CQUV5McVW1h2uqht1EvdN4UAzZLK7h9RKe82nwnwoY4XJ83Syh3WhEH4Y5eESK",
  "key21": "3xLHKkqu8LZdsiDswUbdFEm9LWxhMF7kevLiwqtCEunfX73uwanzjhr2isWYbX8CqvsEePcVFpU7bjycRv6D3Mrr",
  "key22": "5ezrzmPyoq9MPq5Xh4JPqEPTQuxgpDpPpMp2z3y3UM2kkmZeMzvtjjT2Vp63MQS8dvmBJUiUTsG8eX7Yyot1Cc7P",
  "key23": "NmgKTpYm4j4ow2QonJuLFdWn8BwihJEcbBpXBhtbMHqjPtedVkcPtJeK4bjUSbwpKomkZt6J9P9Jk3kEWL4nRFA",
  "key24": "4cVj5GDACnPJ3d6hHmrFBDVtn9UpMXbPnwLbhcVxGEobMMoK2D4jPcDdQXNTUHexn2oBdnBGSJMLT93aBne2xRSX",
  "key25": "37XnSTSuRSAfRVQfgx6ZuD8zrmCEbXwKJ46z4NMtu2318bbN5ekKLzYjJRrFAH1N3C7bYVW3ZYo4pZ42KCx3iQHc",
  "key26": "52PY2n9MUPWVNLKr5nRU3iyrKmCshWAcvkupa5tU6H1DpEXVTPVfmPpxjPoohiugfjgjWwCpcMM9S4gFbs5SnYJN",
  "key27": "2wekdKThp8UXEZFPnQecxhRjdogBZy4noXTxgh8LSPWbCFpKoNrKR2Y36EzcwpzzGRRambRKKWBCLiPp3CVkMf6F",
  "key28": "QjFfYMzmrUFPikrowQvE1WF7eftULvTzLh5bSt1Dn4jhZrRBRh1EnZFBtKbg4jAytJ2RXspXsYzcvP4v2DJiFMc"
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
