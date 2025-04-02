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
    "3qQdTwqeTVokEGBWccufL94QxWiBmV3brRffFjxPZgrhheXzqLPCB8jqiTn2XK8Nxjyy4kc3f3wCiySTia8N7s98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWm7gjWVFRm9EJ3bHYxrveVmwTwFPcrb4mUyQDzC1cXrGW1JUav1LwsiAkhpaj8VPyqZtKWnq1JyXkGujSoVkVP",
  "key1": "472cYc8FPWzTuxnTwgVV8Dn5HsJmFCZvp2wr3tiYY1cJPMFj7nTXK6YABgLDXe71vPdVNBrkDbs35Tyiq1ff3YoQ",
  "key2": "iUzMCuKfg91yqmQrJMtVXWtEaxzhxPfVhK6jAuwrQDZmuUj7ovcmx52Kw7DJDtHYMrVYvv4TPtDBkAxYfR6Jy2F",
  "key3": "3uT8XzZUfsfPjhKGNo9pyXXBYvFwGrceC9ifdYFBJYvZp4zzme2YEWh65ya8QR8JmN2PbABJaipjPqnDH7DTxs9f",
  "key4": "5J9KHhd76qZiv8Zme8XHgQ4DbbSMW5xTvgEaPYCWb6C4zfr5BCCa3BxzqeigMZSDYWttiyXw8poNCEJX9aXXQPJQ",
  "key5": "3qq8Jbtn7VizPK4pYsAY28BVe17A1ABk4TToSETt5geA1K2ZrzLxUQmZ1bN1iR4b5vDZ4i4RNhfEBcK5TyTsp66i",
  "key6": "4aiidRthTKk3LGve1DJ5iXRu4JozTkC7nV3cUuuVqv5zarWmzhwNzmMEJKyX1qTK8UukKL2ywgTpiQRZ59BG2pnq",
  "key7": "4Sr7z2upwXiKThtX7EGVNWJr3wirDv81esbXsLx9i26z5W1J1oLTyxNVfZa8ifESaDzMyswu4LFib6kZwnsfYyKD",
  "key8": "2boqt1s6xx1XZ6jHr9HWjRgNt6DbAg1WzXFPpZep94oZN8sK2U9kFLdSh5WtjYv3mwhgaxiCjfkzuU8PR48mo5Ye",
  "key9": "4dkFhXLAg4JZnnibP2Fz5QhuQUhnNoKdwmD3zmQgzWPp2aSAeFJEuZjtThDv4cFvqo7tUhEunNCgKAKhPoWdgaiN",
  "key10": "5gGizPECJur4zwiu7CpsnmzFr3wov6TnRmdxb9hkzJuyP2LjVBZ4pVZjeBGFQY1DVBKnaGKJEMfFpzM5wVFYWZNm",
  "key11": "56T6zhShnQZ2y1X45FaJJiSLWrqdZx1tEM3u43mb1RDvE15Lgxo2r1cqjMDjVceSGBDzab7SSjyN9URmqYJHN2Sm",
  "key12": "3vmAZPPnsAKwxEbHEVmJSWFwf1UdH4YHu4EntBPLL6LVAtZ5pSfaFdt8zQAUmxqNmk49AUzPmZuYnsZ6YYkUb8aq",
  "key13": "4cf5ZmEphJWx6HKNxzeBsstdJYMwqxdWvk7F5jzZofG7XGUecyv1tB4TFh7UnsPAKMjHs283j8sGk5UD7LJmyf1m",
  "key14": "U9scBwnXv6Zd3ofbD6sb44yZvcoqrpGbmoLeGB3wSVspUy4PnmuNtLH2GF2kN3SxYpfTa2hhV9J1bzJQv1t7t7N",
  "key15": "31cxMeW7rxDXydfkJG6on2dHD5UhR9yYnd1nAi9dPz2KtNbcbykzGXLGWhZHy8rMxVxW2kWSKWCKTeUYJhrY2bwq",
  "key16": "4YUSpcMmaFqB1CEHT2s6PcXjZn3x7tSiVZvcr7U7CRKmkpTJVjkxWCAgc1oVwoXUC2GyUAyK6BsbcRwPLhjGMXJA",
  "key17": "5TZPMwhvAyMTedGqwffJgMML58U8qCv8cnrrHjPV1Z51v4pT6ZiGs6TzsiX2rpLsee2qYzSDkksDHoorU2gzGRuu",
  "key18": "evmD23qWMD39iHFbyMdLcCA6h7pFDCq3C4xfVg4VCcEDusMaYDvdx577oMWi3S8PXFTaqfLrHN49kDHE2nSnVEA",
  "key19": "5RbKjN21naiyh3dTRwjiDrFXUysJBSpAZpahyk3shvcGbmg8f4cMwBML5mubobGfh59CXQD6Lzacw5N93kB7KHB7",
  "key20": "4RgtCe563vKcs3Q3PBsSZXuvZdKq9vt7KeLnQrp8jHpe9qYTfiqQWzeeTpdz3byasaH8Y8ZZJVd8wrgiWWdWMRLt",
  "key21": "5phnTCHFc9KwahDABNmeHxpBYHExKD7oBVQZV8y45GJypqLL6aWAsZTYbXAXA21WGicm2CikLhM77TT3qvy5fLUU",
  "key22": "5XuDwVnSzorDVdpy4swdpZ2pdW9PeKcqCAjmTCj4DxGaZzz463pJQ1JGyULLdPHN5MmGwm4igkbgn5b1p2RYAUnV",
  "key23": "47FDsVBEvhZXurHX86ze7ePsekxTDgKwEDGY4k9JTD2mN8TqE9sfcNgF3GYjcyPwm2aTSjiwrmVjMnWuW8dLU6h6",
  "key24": "2AV9WJ2t9pKvoL5VKvrhnks4UkndhKwRCBAKd2ciXikgE98RtvHjTBxWGdphChthNix1c1czhwfCf18aN2Rz3YFf",
  "key25": "uymaKAi3sKpKciB1cq3P76CizTKBzJYE6n5wsqVQgwCfny1XR1tURzEpieW45hdHuPXpVBhUCGr9xUXKr9GHCqy",
  "key26": "2zkgDTj3TfjGxCbJMt7T8Mv5eojQbSFJbJhuTPJevvbTyzNeNdRgSXypRfGcseerNYzQv9VvBSSTgYhNXAiPbiYd",
  "key27": "61wVWWvhYFWsnZo3jo6kRSinBFXUXM1unyt3rTs4phfgSCf2mn2CBxmRFuKiwV4LvKR4kQEcNMYKFfbtCtTWRknc",
  "key28": "3LcBeXwVjFtU5NdjUsVjQo4U1enMgoifpZV9v64CGjmJmCLev985p48ePKBRKT29DzjynN4AhMWi7K4oRdH195CU",
  "key29": "2ev84vTQaRdpEwHuHGHYWXfwcF9YU4aJZKmhFpQtASLJfEXabSpmQXLDVMcAD61hoV9NQhwN3SuTH1TLSXMVeS7H",
  "key30": "3rzWwDnjmfMLGE9tdkuaQJaET4CKT9j1nBhtHrrF5UR9nwWDVABN3jRTuL6Tx81Z6rWGeES2RxehT4bgi7DoLwGD",
  "key31": "nyELgB71nX3pQdLFmAh8DPPtdZWkiXxngQtojA5aVRLxR9o6Ce4LUYr5XZLZ45deV6fnxpoqvNJAp9P5PMihp1R",
  "key32": "5Wj6GE5wdvqYjPcANafvgfou6UKtV8S7ek5jcSRogfUY6FvHmm3KBJHtJMGGdUdUNhdbf2yE9YncuLqzuSeHuxqE",
  "key33": "5u5VYAWea8cvBfUyVWqMSN2Ym1zvi9m1he72A7EnHi8UEivFB3TVENZkiUUDPkkcV2EMSrsUeiaCNrihzD6AEx3S",
  "key34": "4yTYtTrZ8LkRhTXdUHNRZ6pZmL5YdCbnwMntqvdS5eJxNG6Bzkf1sgBL9D2yYY6aL41cPvWuCW5YizNYRiuv31rB",
  "key35": "cCR75CRStTjEJY4Qqzmm9AFz51LrmgMZ7VtwMLH7Mn5gVXpBnzkrzrJUTuMK5EDMmN1DbrHfuAQVbLDo55R5C1o",
  "key36": "4cvbKJYx5JmYUTrWHUJbVsinzJAq7mtwNwcksFJEgm3kPa93didbxKg4upj9KZJH6SWyRyAMhwPPs8hBEPEZLFxC",
  "key37": "3JAAUMg8aS5zDgx2TZ8akJPHTnhisssAMJ84LpEFswhfMPHu5v4p8JwQCanM9xhHUjC9arxKfiq67phgrCy7UtVj",
  "key38": "27v1TGjceNKpybBmkLnxrRrTYnM2911YBF8JmWCmFNKZBf4pmgpUa5tK23UnKxcz5FD2FY5uehBZkDMWcfxkZxhZ",
  "key39": "3mu9UM7uGCr6GRT9kfamrneLHS1WEu4ZzPDiMHVqfRkPDbViQyNPhq2PPjLw1SKAreNLBwpJ3ktYW3WHE3M95x9Q"
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
