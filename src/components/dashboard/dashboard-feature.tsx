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
    "3WtBgREdxFnnig3eatsUdXxGvDGQwfXdA1mUcvqohB5vG2wZaE2EgRTeXVqxH2wm541UfQVcF1N5kmQSBYifyrsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44dfodUNsNSVYrYHevW7kuBeqtAvYyXYDxSHK4f97Kq67HFbraUUaDPzLPe17UgeWgCbNptj2FoNpG2UcuKjtJHQ",
  "key1": "2phRU6GL5ofL3Tf8BVvZFZrM9Makvw2Gq97W1jNwVF9goVNLUQqoRyG5damavipkWZF5yURcML9QaqHoQJwdArx6",
  "key2": "625vG7sUY4NWBYbU5mgQZFuJHyDxfqS363PDKZsjSqzqtGqoiZn8hEX9xkn4K9bpALY5LVbrZ6wZ9WVNfaegJRfJ",
  "key3": "5E8Dc8dz6GWbnPDeAfMBrh7BeP1jiMehVRXto54aagWEpaT15SBq4rdQXq4mVSRRn4w7UeR5PNKqmeRCMoMMzGCb",
  "key4": "Vs4A6sGBXFKJtGKLRuWmBPS7usjB2XWQBJMN4tt2Xr1yAuAmtuEUpUJzVHYqhp74HVv1fCvKJv37RXLy3ZZVJ3u",
  "key5": "32i1F5EGcEvGeQMHuhTtft41w53Rn7HoM4jTPuswAToq1984yq8uabxuewb81Lv6FMfRghCkZQhLts9EnrPeNsLh",
  "key6": "Cj6M441YbQRT7zFeh6aoAk7T3Gz6HLF9JJwxJPWmqwEUhFdq7PryEVpCCSPU36nukLrDdhLbzJL2nNLH23MKt3U",
  "key7": "25QDzaGZV7c87eCcMW5xzRrfPJFZfyg9dgkrrmaLx19dMbjUgpvKfqdiNZBCy8PimdySSEnTGzyzRP58NYUjtgat",
  "key8": "63VwFtHYCDiePryEofasGdb1HjqHodsigP8ReVWdXxjasp6Lr6MsZVVZH1LvUim6xnbBXh8wH4z6W9ETv4HK72G2",
  "key9": "2PM4SGgrayt9KqBMVSkfi2Nk75hpSGrSLbhjXdbAwzVML5KSxddH7F9SQqFbpB4mcvizSUm5Byr9mjzp34Gw88gv",
  "key10": "64KLVrrM76dKunGPhQeTkqNcJNMDe3WkyAGjUcdJwaju46E61McNFmJD8LMSpZKC6qsyrrFRunde9KCRuT5bEdsX",
  "key11": "4rX821WnD5bmt8JNqaL6SrvSsq5fW62FtcJVwcimChfJ4BS3kRvtU85FE33r4L3Z5oXvh2tnHEzbEHFY7KJyu5X7",
  "key12": "5BervNsZBUbyvgkhHZg4T4KjdjHqezPwWJ71ZnSLY6nt7okGqeRHiiUuXKiJxUXobMvbh6YGUgDt377AAGsKaMsf",
  "key13": "2DV8Jfi2KuC1B9ZNddGA2NAeg5bZFzSiee8X77SBUfG8SRHnhivbLekb6QCAs5hrhZbEkbWHPwQgCgfki5B2H9Ay",
  "key14": "36igBbq3VBbbVNBDnR3ceZu1pbkzJ9dDkoapRs4EDLpVpHeKNjQvrmGDQT7rSn645TJcRjUt4GWi4kSwRNLx8jPJ",
  "key15": "2F7M1MMLGaT27YnZq9aoC32Aix5rFNyH6N8bAJF3w6USHirRaTYpaiR8sudzBNZpAe2GafpTFFnhL6zaREEiNufe",
  "key16": "2fHUguLwrRFd1eKY2P8t5SRjXoTpkDGZcujq2NLXQBSy17y3m5pG2fkZKUgusxiQ7KMsLeokKbCuJYFfMDgDcGZW",
  "key17": "3UxHCd1p5vuTH7DWC94oLequ2g6AyVECdnnXfEyhA3kuJM3eK3LgiTg745sp3F8HKnXHbKHH4z6HCfQ6k9BP1wZx",
  "key18": "4phku6ATjXynEC4KDiDfCdCeuqfa9VCBNaFmCefHcYBXNiD5QN2AvaKuBgz4qHF1mTgdbggE5GkQUj1dhPB3wvN2",
  "key19": "5xPA2pEGDxoRg2NarHBAfBGNej4uj7vdy835VoiiEzUWdATZr1VYkU3RFxnQ1fZjCccv13sqwXn52X7CdTXUJThL",
  "key20": "4qhcSMrHs1QyUD64rqerPes2RK4PW4Jevw2xwB9yL7HSCw1pZM34aWyh7EFcuUQFyrZ9YoNJYQUXMvuw152vQVp8",
  "key21": "56NYbWKkeR6Z7xmrEefc4NuegPNLM8ThaP98PWPJyd7Dm9MDth8P1hyzcQE1oNLE36E8dU3ZEw99mXFBfhsRoVnP",
  "key22": "675QhMuBcuAbUUdu35XhZfUAsPBNu5pkmg44gCuMYDgsDw8QbMs5kxtjpo5yWAXouTm5j75YzY4MDLmX1MP51bhv",
  "key23": "453ManDytG3FJHhyQ9X8yTdzHX9kK7Wh5TAQo1SaXrBj5dZRTHY663AsWfsPATDenmLxSwzW5gaxkbuKjCghNWz5",
  "key24": "9mkidf1nm139KdKJKNVf9ioLS2jMdH8YRuPLQ7HX367Z5PwsNiWmWJmMgJYwqrEsq66ryARa9jKqJKFhszBuzBr",
  "key25": "3dPxFSnPfWLMmLaRicc2S65XsWzEg3ztkQndBLS9cogXLJXSnbFVyxWjj55M7RmqNpGnuZJreLWY11Wy9yjVg5jw",
  "key26": "4GGTKb2qAyR3NdKbvFqfCChfUTheFgm4dQwdrsvwtfaCwv4xTpmwnjvtrRzFDxMBDgS9c9E6fyyhvdwMyCMBJms1",
  "key27": "2j1RL8k9FpXoicmmGBLbpynVFvGtz8MY7L14MWG9sWV1z6E8UPWgP4vpAtJqza6QfTtKXHbo95rYc9WEqcTCAEYj",
  "key28": "KVsxhugDXccEsvF6a9rN8KCMt3M9Hi3umYxBDtExeRw8T935wXTj2ghkJ2o91yEHGA9SNQxkqYZe6CBnVGCXAg2",
  "key29": "4L7g4TdGagBoAWmzi8X8PpZQDYVxpe4cqt9kcVC2A4krMQWv5xoCNbiJ45ip8zWJorfXSUtURogAkWBX136aSCGG",
  "key30": "5P9cjSAAADhUbGmYbhNLGn1vhWkrDsYmQbVD3gwgKkXh48gNijNmRUfBizWyzMVzoEy6vE4V3EtUZjGgacZ4nqa",
  "key31": "2AA3VU8GBey4VrVg2pMCHmiz3iN9DgHVAauPBBapKw38yRas2UU7WNDhBda8iAErwyGtdQppNoV4JL89RGtzqthj",
  "key32": "eYsmEXafM85CFQKSN12A5hPA8nV8RWPNbdTp7FxtH4jpGoCpjRzhJFJKPUGYPVgMJoZMUnQ7hpxnCs6Q5sgiEK7",
  "key33": "3XBbVXMo3YaNwdxknD9YaS19NFMMP2XrrzU9tNXZdfsBWu6w4HMGCGahef56acN1pUejQQjHp39te1QYLXtqCTzp",
  "key34": "2PFpasQKQdUZvL8LHoGShqsFPcdsv2yNDo6Q2rccZArr7o2eRfgt9uUv1qPsSqPhVGkkyMTZH9LhSL3b44axkNTh",
  "key35": "2UtW17SBFd63i258KtZkBXrZQgm6Gf2qwA6BJ2LxL3PZGobVgUoZbQDLtsujhA5wffS5GSwswnkmWR2PjqfbiAXE",
  "key36": "4vtbEWDhJsmjyQJqHdP4G8Fwe1ar2eBkQLT7R3z8gbUDQydqS9aRTBcmoW1XSBeFAKckbL53DW3tamTbCPjFEsya",
  "key37": "4kW8K8oP7beRs7CkAtUcNMAjsyxbBE8KoxTUo8a5rZFQgpBCkRea17wUXaDAcXtGbEddSXTJPo5wUMsasNVqnAUA",
  "key38": "4oAuB8cMna6yv4kFyXbXBvaH6CDRz3vGxUwRkWhXSL75BjqqUBpdEQbxh6K39Y4QCm49NfRrgEsEm1abykSYdQf8",
  "key39": "3BB2eCMjtpT7qeVE7Pa2EQ6HCdag5ioAPaSUB7Usvv8512CeFcMKkWy347JZzPk7XcMYVMnLBtAamn5UT8t42iGM",
  "key40": "RcN2RkmCwDN5fLApJiHtSHqg6fTA53q7A2TA94dfV5cBYuaze2EbCP4LDdHYErDKvuH1SQC7cLFyfn1DcSroJoz",
  "key41": "4LXfVWDVe7ipzepc8gHwyNKjWMD5UapDrkuF2Mk1zkfsvUkSPFTp6w3YTdX9tSpb4veojv1nm7VenAZ3m4KDJszb",
  "key42": "A8tPaa68FJur6ExsFknz6WMaou7EsMMBbCZ5cJidpHRxiqSsJXdcE9e4EXvDqyZ66aMGeGG3BNhrfFYpJxECSdG",
  "key43": "2ep26RBANnH7McPRqu3odriK7XbeNShq3eyahxpwBdqEnL3xh7yZ4GUtSWHUXB3nGcNJ6X6oUsepsBVqKikroGw9",
  "key44": "4cW28158zkpH6xZXtdXibZGcp5B49HvkVWRu6VPEDYVbc1vx1JkKVwT2k4LqdWrsWGSyXdgxkdWUon8CapRAzDM2",
  "key45": "3ek8jw2af7wLVRvoVzDf5NQExb4B82mUD2zmEvGHYSyn4MMejEZDhNafLJB7iFBTPTQt3sPAQUD7hd32qnQThS3J",
  "key46": "4LQqVkaKVKuckuU4XDGC89JtrqsNDjqfaMbGs7mkPB1dXSaFYQSQFJfk776UYsPwEvQtUYYDQrn9qWFo4624hxb6",
  "key47": "5VAu84aDV4tA5TGUrktR5S4bxykQzErPFBoN6aiQu2WZRkQc6aN2b8hkXAU16K5qEjrGtXCJPiNaC5WnY1csbpUy"
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
