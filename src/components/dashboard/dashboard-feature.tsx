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
    "4dYXMjitytVKjeNjeBANptqXuZn4k4HmNF1Nv9y3pNpHXfx47S3w3ek8L7PALFhZ7zLWWGwua581f9rAAuvCcBfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hy6M21Dnp4MYwV3yirG4VvTjPNh1yTkLuTSzEYMsAY3iHjdypU3iZ1whWRGS7DbXLtr35oditBXSKdvBNSNpAyM",
  "key1": "aqHABxKy97LHGaXhQU5AYSoyryAndHhnbyJBq48Vh4vpdNvyaBxCcvnobDZMZ4NTsjMose4BHeSnf5nvd66W31M",
  "key2": "4MjXjhh83J12fKxTcTFuAXwsG4NMVG3f9xC2Y6YFDNKJhmHi3yUX65E3xB7hCUeCEh4ZTgpV4YBWasiNbGRgQRoT",
  "key3": "3E1euNyFX3HdSJQgbs6f7HfpHPHzcExTpQNJPMCqR3E4kas8n5vRb5zM2GVtZ5jwqi3acwMJtvFkH8GWPWiS4F8W",
  "key4": "3kyoPoi8JiQMwWkJLESTXUaZYWTX6cwEa1cAs1RFFEsGmHnWACh75k9vTD5Mt79zLFNVMEqJAZggimyAZx8RHCSr",
  "key5": "5bQ4d949NdnfKjd7B7UuUFxQNwTq16JN7SSG9jxkkcajxicUnoJfvuJoupbUiuDQJtAZGJe6WxyLaivXTRdYgTk1",
  "key6": "2vJHKKZqJP8mM6n4vQ9u5rT2X3z5oS9zLdAbunEDeatPL5sDkPxrXx9vrUkksVrFdV3ApQKbUFrh4xcKA65uu3DS",
  "key7": "54bvKHapESKdhQ3ykekQ1HX7V89zwr6QixAcTQJcVMKeGrtteLEjMkQRfKCjqPPpVypoFfsAuEe1XQKyjvvLJdTi",
  "key8": "4RZhSqJ9QkrSGpKVz2jwVtGo7rRtzfd196cRaaXRNhN8Rr7PYftiwyLx47mKPdySEbM4vVRsSXQMrbbhNXHqJVvz",
  "key9": "2eazMKWjoj3ug8kXGxxBVLm7cvo9gJXUTu2NxaRPgZZBMSHuBJDroPFDMGg5jiBgqy5pZsbrhchvYzChbeMbnX4p",
  "key10": "3WFAo2wnhirnoBjMVQpbf5xsC5yDA3i7tBUdc6zdTrvYCzSqVK8WMuNwifCFSsUE2svKbE1HtbuErXoEkLLwK8Qu",
  "key11": "2291FQ373XJ2RCnia2DrLEdqhjiQxzY8P2KjyZdqMjweB8V4eBDP2fRfNweJMbWRZj4XwvJtGKLGpinAxH9wVPdY",
  "key12": "3pWBe6gWcbQaFR8gB6w6YHoD7pZJfz9Ca3Nwqs58RvkWVJPQyY8mnqoq2KPjXnCvJ6FpUaTLCCE2bAqzQTtwCkph",
  "key13": "5gFs29EMivgTrgyaxxrP2BgTStKy3WDt1ZoRDFpimq6LvBNGJ8BPXorh83wDg8qDNSUwiES3NWpbf2uTtzJc39fn",
  "key14": "31CHPuKzosdWQhkVXXVnNL11sPx3smkDwtMpLCGP8811T5C5fzLqMpCiUjj9vLpqG2fMxDQLoJ1ZA3xBBYVC7ZAg",
  "key15": "aXDdtd34suBkT46MsSJJnoAV9Za1C3Jwq7uyXN2hU9H5M6tDdwP2ejP8CBF5emgLa1QpbfNSBgxc8kSAd18BaNQ",
  "key16": "2rAXj3xRGSNF8aVkNbRDyWjGkgS4DhYm2mRZwNHQNsGm4Xe97iWR6SoP7Zbifk5CGtCPuRyK9brFuH2wPxnt2RbT",
  "key17": "5CJJt7DAYzpdSb5b8xK7zpXULmx4txf4K6gvnzeyGw7nigNffNCf1Q5a3WKqLUvypVPmPHWQ6aMk7uxH5QX2R2Bp",
  "key18": "5mr9dBzJ3vatihYYSdiYyaru5i1JmjxqJhf7EvKFV4FE83Hju73GzT1gKnwSXMM15Z392dL38x8HPfFPbw41vvzK",
  "key19": "QCUFv3fy65A6v8xBbZfxtjy1sYs2pGHnZm7mdgf3Kno3Hcfjb8gGEg2zpxs6nW3aCPG1Xwh3QVFvBspDYXifeBa",
  "key20": "2u96qR4b8hzJbJSQXUrJNBxXhCnZTsxGeMTDTLMEUZx77xNTAVhebsDrmd878Vfzt7pC6fKhSwbxFmunNsBDXjFv",
  "key21": "5Y4My8XRUJDxfvbWKQKquVEpEn5jNJbYghqkLpwx9PSNoegYZQWjHGWGWPzam7NNst6M968Sof6Z5eH6SJLWMogY",
  "key22": "5WZgo8WJBFqvtk2xQZTvcAd61W7dvsjfgKi13Fsr9ArBMJXr9cur2Lm3iVB657AbsVaHk5pqEuSovMR8Gf9mWCTf",
  "key23": "3eX6hBsnjgjES8nqSjLXdhEjnLrKbzd9ukE1wxA3v4f1cuiFrT6uhkiKQrVwBHTzGEBxH5M2TPYEXdpCyTktQG7H",
  "key24": "4WL87Dj6wEFkssVrpHauknFRBWouaFMN7ya11ziqGsoF3yV9BG9zorwu72oEXgWYsaqesMdQgP6tDdZUeGAgmPk",
  "key25": "PDSzJ4Fmcox2XB6rF1Wuh8Bi5qMFda8DVSBpbvBD8ARCBTbQhGdzCRDtK4ZFDuy3qjXrkYR9BRZgpi9ReTBqMUd",
  "key26": "2kNzXKTHPfLoy8eBCBZpBDN4U3ztKACLUAfQ5Pm4RscTpNX1MX7mZDM4Ai8ZJ7Nz6BMpcCLyMBJJCXSF7rR6y62c",
  "key27": "2nzwsqVzqxy4uYNBpPn9PoQohxT6Kb5uFhBcgR53efEex8of68Gocsz2TviSQEgNg1XSfoAFN24oo7asbu53RW9i",
  "key28": "cuijheK5vZQ6up9cZj4Pvowh9tXxN97Tm6ybRJkNKim7PvSRKYBu9Y4GYXKopHko6Qk71JBd7CMjJraQJBYSFDE",
  "key29": "4pTgRcBLNKUsi6vKz2UpsBUFVnEGfq1Hp4g2Yb9rN7qssgJWbeW6zeVj8LoC9nuQeZmgcngtYBrmB2YdaTj83rie",
  "key30": "4HkPXKNQpAojFRtpaDVfcWgUnbyJM9NTHznDzFHLckDM2chWZ6BJSnGiMWPWahhUvTi45DFWd582o8CAkxDooFGj",
  "key31": "3nL1Ltwzc7X4Dvov8VUEQohSU6DFeDDNx9bccHXqryH2bgRxbD38HXK9WdjQLCN8chawiDSrnsS2PmVdWNkbrCab",
  "key32": "2VooXeXbg7NtzY6VEhcm5prXc617gT5ZBqAHjuPJsqz4HEX2EZ1TK8iiuWgYYmk6csf1auioSY5CQdNEyjBudRTU",
  "key33": "5Zq2igMAH9C3MEenjUaHkSMZX1r42kU1kN2XpgbWKCLBNdPv99Qa2xKkKAX7FKqShs1xt9EFkoKdHxaEwkYmCNMJ",
  "key34": "TVhPx4gpMLYmib1CK9h2PvmC7myqagTKnqvr4EiVUZcGedkFso4iEAC2DqGaa4ZyYwy6b4sA33jYmLnXYq12DHg",
  "key35": "2N7eLkXw55DG2XfKsEftY1aUT85V8HwqDi4J4XmW1SKjaowuikU1Wq5gWLHv4u9BFddHseThRkpaf512ZPHuqdx8",
  "key36": "5RsqTzGTdPz51Y7sNpgwJda7Xt2DkGDbSwJm1DYs4PNgxrg8Yybw7F24QQYAXb3ocgTNUqTkKhznYYG5CbMq3A8y",
  "key37": "4KCSUgq6PTnry8vazUoSNfiNBRR3WfGFs1reXGKfgk4Nc1imiEhyAdD9Jy7veeAQEwDutJjThSGVK7p4gMVVE927",
  "key38": "67DzdNMqvBQXZPPWoUswj75ZrcxDACRGCAnuKz7HYPn6rxNsJdLUrxRapLuQhkbFKjd1YEjCoSbQ4jrnCYzveL8f",
  "key39": "41N3qn5h58avM6unhc4RH3QwwfdXoU9PVYW5dprXFzSAqaP4BgSEUSoLXYN17t2oF8faT2KrqEqAB64BzH1H4VVc",
  "key40": "3kE3jDYGZbDZtLB13XQvMAG97M7UxauCkgWSyPUSoUW5Btwa7ZoTcp8H7PFWfketFL8vQ4Tf1GqJjb6TrdVTXPLL",
  "key41": "2NizB5NR7mTyv8Yz9ayLwfvR3jaXRaS3ooFvdq9dh64UaN3beZ9BTqxeApqKyeu1EMUuzFXbFrV1e2cEefjknUhy",
  "key42": "2gDgmpLBWUciP1w6vZw8XzEfgYe8ZKxNDM6FMCh7Q2qz965hRXqDdVpdMmw9hLYnXuZv9QqMV97AHM9ZUAXN7753"
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
