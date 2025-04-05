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
    "MhUeuVLfgFZENwuo8y6M3Wam7EXtcjNaDHLZN8DwxSXfLmtA3HLFEsPiFuWWNc3krumo2P5yRtdpv1fCm6ar6hR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdyNK3hfJ4An7X167ssBCwtvE9HVTFDBH1VyDu8JzvdWKCypwr1yyyzcXa7jB65J7QvpuYuhNoZFV8WC6iZuiiH",
  "key1": "kbnquQx2vCkCrYUrd3a8bHF4BwGXwuJ7T4Qob22aHEbYNEDhyywrjopj6uVHi9uKLLuKnUqGfDTYTpR4dAzPTLN",
  "key2": "3iwaYzVWeLLiBJyozpnmC28CBFdrUTBjxqrK7z4gSWxNsHRsvrNJeDFPL2E6rKxMHR5bw2FAcK7WdSqWcxnBs6DE",
  "key3": "2wno4uMGoLBzuoQrDcq7VigS5yYqqpvg4gWEqTUNjuQ5XCrGzYbKpToho1AUzyVweP6onQgFuDWjyxsnHyLBqhY2",
  "key4": "5CiUT3293vLWzCMe4WixtQPEEVVyHQ2Tm6Ect43JejJ45fnmFqwe1XVJ1SDs8jVCE1zPtxiuatkMfpEu2HKoFTW8",
  "key5": "4dpcKszLbsUy6FqFwqkREFJhVpL8jiCJ4bV1v5WqfRs18a1Z65ZsQy9A4mbKTN5NJeAWeXty8gUkH5PZjqkY1jEc",
  "key6": "VN573FrGXqehBCWjmf87ikcikAjGpgwX3AJuDHsco9DyLesR4fFeLgN43PojHzqLhkhTYhR5Lqj5tPF4ULCEeA1",
  "key7": "4p1LUEvvEw3Tinxzs2gXQLrCnQTYTTymnsy3QNbJXkujBhA6C8MXJwbrgaYoTWe6poPV8oc3BCJ8pZ7gBkXfCSss",
  "key8": "2UdUT3bpaJu4GY5iGRWVrhbjtqCTTq18aRpfxMAB7RYPRBQLiAbpD4NnE7ZWoQ1qUcJA5tb1dZJkkn6RP5q4KAhP",
  "key9": "8UvonfB9J1Wt9SZuZQdNKuauQUJpVwpeWage2oGadL6N48zZFGSPVQEKK3SKz5LyZicVDfce3gyNw2v3E9s89D6",
  "key10": "3KxhiexUBMiGrT6UY3CaUpmmHE8CKCnYH5rJg6sdZPqNjDnVzoFFGDggv1oVuAoXeQ1HChL4HUESKeDjmy8GH8jE",
  "key11": "3AgS6r4yNVvE4SSFp1hqhXYsDhdG2dK5JFqy8EW4mxegy6M8t1XRMCNTKSq4VSm3GG5uzozpn7EgKzBTWHnuvsnv",
  "key12": "57emRh3FHUtiR5xq3Bf5V7Gtj2TDAR1TJNf4iwfT7o5owL93c6a4eS5pcs4W6XfB2nmiTCPCaWdFyvy2D3iSAerD",
  "key13": "3xCD6suuDVAWLXxcUxnhZkAmfXWKaPqEdASYdKP5FzdEkH2T11ZHsWZPvjVgePyFJ8rukVjNJ9khqHuwEKhzwMtw",
  "key14": "22xhVkA8D7WPiU172J5kfzeeK4cuqkMV4F5ybVFQHWvvhkkF7jxgA6To5oQvPL1LFQLP9MLCXBe1ywDmAraJuRb1",
  "key15": "4bgbV61jzcVAjMtgx2r4z3z7tWpHZCnT74nBbtbHXaX9Y959ttnyy4xEdzCG7PXDMjHGXYtD7NGygMwoBuDekC9k",
  "key16": "66wRejH9LEaoD17xzthGUsPvUsi6KoWK8yraQEtimJTA9Hup7QeX1GGQA6uM8VtfSjEqDdajUFPiKVoujQNLyQs1",
  "key17": "4GMYRFBJ8QAmWSJgk9Zc6MMxZeeR78B8wn2ELbYpx186LxMbcihiuxM35YXXPZDRp9Z1zkQf2CeMcMtZ5QqUiK6u",
  "key18": "2S968PMuRn2FxZt2eE8tyYGpzLgx49bkVrj5un2CLtJBJYwRGwvf5yxjMxGbWehuTF7B9h1ru9X4LGUB9PyqQCnP",
  "key19": "2A2oN7eCMAg7HJpGXF47qPWHcGxrFxY3HgkfExq5yTo3D1rWGWvyjfQQVtAMcKNWC6FacBNaHkeDLLgfTBM3mgGi",
  "key20": "659WFmQXBYkSwdvgvw76daFGhi5w36CF6BWxgskT1ZgLA1RikpPYTLzcH7PECmQZSAgWgkXhkwA3xP9GRnauqkiK",
  "key21": "35s38dP9za4gbncRG5HcTY9gTYmxLaFj7kCyAbHK2PFmCmcBKipHSjFRmNaQ3Q6UMeKnZnAgy95rjNxoAw6pSy5t",
  "key22": "2PB3Po2iiAaSPYv7uup7rd5rvkfWP6UZnFBJrbAh74293jXW99ZqmC1inGXrTASWvBAayCMxAGcd2CBFmAJRjGqH",
  "key23": "3Fc39UCQ4Mi6TuryPNsLoTLqGqbUCu8QErUMdB1zJukHUhpm73iLri7bm94km79PEJJxeP1fXGBnzB6hXBwT1MPf",
  "key24": "34UUsxZT4Ppvd2cAJLf1sUMcRwY9SSzZcMiTc1tWJxrGFhXSD6ZGb7YQ9PEkX1qcx8HpexEGGXhdfmXQcdJmdSdK",
  "key25": "4nHCEkRqbxaMpnuxH6YwW7ozk3jQTpYPHuSvhvzXXG34RBDwYqEsThv8HWigpZfuceYEDhmMhxYwMCg8mkXrxj81",
  "key26": "5nHhx7krQwSym3o5Ca27mqxs6QqsXcrhrxEwfuwW2Jt3Ar2qZpwycHY82crQr2QXNLyNGEZSxrNJAhZ22hNdvKBA",
  "key27": "9yuJQh9Mm9M5buSnUywiuZdwemtVK3En3NaJ2yBXfpav8ZPER6WPrKF6Y4CUz3ybFMtYsvRLbvD9EQhBXd2AddQ",
  "key28": "4FXYsVRTDHVNqmSiyawekkJqfqbR6wTGkmcbAMXEoHBP3MZqQt1CvE2J1CCofiSzsBap3NfvFRm8gGgoyX8N9VP5",
  "key29": "n2WJLbiUSwct5SLf1AEtfi9ZXyzk6p2Ue3VbQBSeJC9W48dycTeUxanvfCaBeUFHNZkzTpAgxUKGqqmZgKsZKCk",
  "key30": "61HJUNd7rtnatdz5usdVabLkhtSm9EYeByPVJzoLn55Hw7zRw3emmThdvGDJGX2vrsnGmXPyXGHRPNHWexc4YE7b",
  "key31": "2AUQ1oker7VK7kfnvmueL9yk56FwV1gnCWGS2BbHSnXeLkpbQbarMCN8fSwTrhCYQGMWaD5ZKLkSKyGGsR3zGw3v",
  "key32": "41KcD3cxUhFFZc91njq3uv74eNZhrpxtWAsWm6FXrR65CVRBrYU5Uyh5oTZnJVPc8TVbrk3ayemkzQMtD3K6zFS4",
  "key33": "3zWuKVhhqy7HXQH83L62AnXpsXDh1hYCvi75KdhB6f9WiV1DKyBwEKS7zs689XY7jnZupnpue4JjVFVeDDbSc9Zp",
  "key34": "j8kTwTed4bbTnNDToNYBrvPy6YUqZfA5UXnkRbCQfZxadP3ZggMJPbK4z72skq6ZxVBUTfks5QE8BumQSgPsp1K",
  "key35": "3aiP7n5WYSEm4BiyPrBNik5YkzpW8bmTAkp93uQEoFL1CSqFfBPLLk3LWsH1aLYSrHtDSCaSrtaihuWwCuMqnSrV",
  "key36": "3FS73EkQxQCxmwc6Z7EozkdNRj7oJKq8gFnjvY55yJVPYH2muAKNsZFAQrK1WaB96x4hKWyGxkwC7Rm8hmeQzgWg",
  "key37": "RCY5qLKfF5A4FSisvuScaWRQEPkxFx4fZ9HBTxHzhDfDCb6GjkBuSVXi2B5q148j8LgXta2KXrFhXP8da5xw4WF",
  "key38": "61Uie8QVK124sVWAToHKsZChU6HtoyNofuHk6hYFnUSw1Cq94RVhZHeEgi7BbUKzK5yPodUuaJPhuQaptFDpSjDG",
  "key39": "25cEQQ95wYY1fib4R7AmR4wWGtXkeQ5f4apLZ5oBAkT9yeVstaiD2eWEUX1fjuzrv2Q3sTMjSPGpqA8b41UKxtqL",
  "key40": "2Loim6L9D91eYr9s5bcxrqWqVeQx9eMeYiC83iPgXQXuJr6x2vhEidFHgfyGHPb6EARTBfVAMbiUwmkjXMgPom1v",
  "key41": "4JmkDaQgbQxWn7vGx61sc6p7BN4iTgYFZZHVKFC2S52yLqqsJMc34ekbHYA16tcukfsvpGM2WHHQxkJoDT27BuBg",
  "key42": "4DWGRPxyVbp7RG7AHhdLzgGYEgD8hBumhTrr4sQjtzecHQx6zgTB2Z2xMTJXQTBKoHKTqnwCgxgzaiK2HUr3Lfj",
  "key43": "EpmmPMZ9Z9whGNLir21VJEB3q6df2WzYaYrFqm7JHH8AJVKKY6qpzXMMCcHTRDHRYGWu23iW9y846AvrNE5G7gF",
  "key44": "WkF2DMhAGAnPRr1zpWcYFekvWzzZaq37XtLNB7tgv2npphbeG6gGGHnNxK3kEd4jPv9HES2XorHAZpxstp1BLEm",
  "key45": "2VY6rPkB8GLwj4u53LcyAq6V3mztRoYq9yGSicH3LQqYbBy82cWAJccAQ6Wmjfm2w7vLvZS5rYkRhxRNCuQE1nPd",
  "key46": "5nePBQgHBGkgh4ZjkYZcrnsd6K3CbNQmrZuAHDa7YovQjioD19CCzSB2tDRnk8E6QJc8aftjdTusv52XYGih8prq",
  "key47": "2G6uk9a4hQFFXzCj1TuXUqAkXqBQTCGyrCdpufdEcmoMBDcex32wCxiJn5PnT6y41vbTrN4W5hxqFbsVKik3J853"
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
