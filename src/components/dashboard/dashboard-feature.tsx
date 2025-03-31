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
    "46UGKX7FPfqKCXDrLLeNMFu2q8CKrU83LEvhP2fenhNjmL7nC23ecw1PjAdDcwoSgSiDFvMBiaB5gE8wrG1oW27h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ovw1M61qvD2h92G9Y7aPfSTCBYBYWPgenRUtJEvJRz7PmTg9kA19MbH9AyGqkSrTWMR8JrzLDujC92oB4Dywu6a",
  "key1": "49m7VwUJPNWnc3MiwAPEr26dLhZ5ZwGZ6JRdU3jj4AKZwCMxMEdCFwYhCrQTmVTwghMZJ6DMhxSTGgFq7m4r1JzP",
  "key2": "5K7gynDWjWcbTCCEQeMKwmcuvZtypRJ9Uy34M74F26kzwRyyKbRfVDZfUiWT8GVmJJsfbKy4roVZRX621Nyi5vJZ",
  "key3": "42yLuG9pvh6gs9NJ1aQkDUmRj4M49hEUgT5XfAKMKU6ymGHa3odPF666tEuZBMuKGeLxDFUs3C8w3DYCueHZdukj",
  "key4": "5N4fct8zZ9Nyv83rbLbaATTDmZVQBcXdGANsfNyXRVjf77ybyZQioh9qBmf5qyrMasSP4obJfJKBQjLQx8RL5PeF",
  "key5": "629bYtJk13Be8WzX6AP3W7psh9KoXiCorkYF2b8bsqzYPxusuYneXeXxNL6EqogMvPhoqjga8reaWEuNMnH8V99f",
  "key6": "2UdacDF8VJjyjf314nVxBJKDfFcLttVG2yoSTb1yEjgr9jPa65X5qAQ5hQpZKAbXhbmUBWMxvrVqPh7zNc3wH6HH",
  "key7": "41USB29tYnEJN2JA7vqUZ1Jpc5ha9Vx4AMkGHDHpbPtWpEt66tkRbfxPNNQXhGVB253aQQHiAk3qQa2pu5SjXTXV",
  "key8": "3aG1EnhtGmH9YcfbKrSgP6KD9dFSk1wvnbyfZ6yvAC7AJd9UCGrQWNhfVF4zrGsa1tpVQRe5KxGjDUXFdzxxWJFN",
  "key9": "4ouVrszKeqioxUXaBQ1PfcenVRrKuMLXgKLAoqiWhGt7hQ67xaaS3mPHiziWq8S8baDhBDSDwqM79bSybh1Rzosj",
  "key10": "3jJLWzVxaYruGXySca3ZfeuSQcJPneCsDmUESANDhpyNkdQYFArMh3hxPdzUKp5JHBso9xBfKbNtrmZxNhQYZYNB",
  "key11": "65YcmwqaCatNrdHqAkmM9fh7zeLNYWFWTLhEyeDQ7s9yWaZxZKuCyT41FHwMS7beirS6EzniMVqdc8HYDWekeQfn",
  "key12": "4ZwpBvFBLiqd7DqR7fQUFWVMa44jLyyBbgWps8iS2f4zHm2xEonkZgyowwasS1tubXRdoxVMawk1ygccs2q8WBxd",
  "key13": "2B54BjXmsw3oYwyQcvP1Cqfk9xb5DhaiTy64kjM4USTb9yzYhRY9dJfSFXL3sfDoRAeMNNrUzmyXYmAsW5zj7s1N",
  "key14": "3eW4AVFG3ZNJ1WXcwDPTVg2tRP1TfvJWo2c3BrbJ76YcfhzCj3CyoEwcaG3NLLq3bfbS76ScUqBLpdGocSNvdju4",
  "key15": "PwJYki6UnHX1qmCvCJRPR1UE5YdDmAXYkCG66TSgtfx233rYVKkaE2ScKkk2qVXX6Uy2cUHYPSyPaegaBhKssHH",
  "key16": "2UQ9x94nzjCR3rvCNUedo9HqoNGXHkVywA6LFMxDSeP5PMiQVieoyMty845DbZ2XGz11kgEF1K4phFe7hLj13Fjk",
  "key17": "oF1LzRQ2Qgkj4q6nn4DNKC4jp5yFANyUX42uVTkw5xAkTALNXiDruw3z4hugBivpnZbkEFog8k91dVPhdgAiLMV",
  "key18": "3pXXoonGSCwJraH3GoiFoZv1NC1b7M4DNV6eaCdXUsboSkzrocbNwVabaJKzyvkLMLPgb4faHdGBdPHN1PZFqVP8",
  "key19": "2W6EZ4QbNF62BzFhdXmeNRoiArMdBgt74vvf7PUD91fDRdJG52R33TthpL29d87XDjbedLwFDMZmEwL77UwicTJC",
  "key20": "2VvQqy4szqtxfvQrv2cNUKiuT3GKSZxUtzUuetJDC6BMjX77Ny27Av9StiZB8r3AJCSajF81H4ECarEMdRtA1U1s",
  "key21": "3hFh9dj4xo5ZXYPoKG3FXwmkGFkEBCnJfPq1r1akLy44TJX2vtJtPMLRzKR1xK58xLcnHLcdYgmwHNKeKvpK9nPv",
  "key22": "yNWU8ntx3c7cSZ85BLvc8Lr72J1h9XD7rRuR7Caa3RUCMk6C1Eh5YuBhZu57EYV7zU9zKMeZEpFjqnpkE6TMTs7",
  "key23": "EhTbhRgMJJ97yEd1QhcaswtHNKEJVcmTHvZHEniM3pmPqUo3nAQisKmAtGY6tY3vqkz7rhi1ZowJq4Bfmj8eDWt",
  "key24": "342UHxbTyK1izYoVa1RoeTptoUhpgXN3rccgcf34WdXu59LaM2xvZVxjxcMasjGjFjMdkEyh5ctkbb2WxjymCtFb",
  "key25": "3kUDGiEGQ7ahRqCfheGUU61Pq6ZSpachLGKaJ2DmxRD3EhUsGKg7ByDwCk8GTSGGNRm12hGh8Ephqdb4hLsxUGwS",
  "key26": "24vcQmyXjPbRNDYAkoBANEcrZT7U4kzw4VcMzuXLHYqM8M8sHMLB1KVkBqCmLWRSMg7heMjzoZaT91cbypTuXNSw",
  "key27": "3QveiADzxsyuCvstxVwWVKSDPniv1V2eTwk4awb8DFXYvFfgN9mLPzMdfaL8Rd15nmhqpXy5x3pbzMKyuYmd8aCL",
  "key28": "3rPFPR5rP927rMhmdbBJkzsXf4ywpnXBby8bPPEQ2PD4wS66Z22V3XqqvuTTxyWEfEa84pTbKC7hzQaufTR3yYtR",
  "key29": "3eFGEkikW7LzGDdf3JkPcmochvqHX8Y8E5V3EWr49bo3MpBAc7t1jRRNESNKLg8cVLyY18JXejoZdayMjfk5uNpT",
  "key30": "5uTGSSBAgXQASrjqYP3iX3RTkjqZkBBhEXdirT8vQj7AfnbdNVeuuVDu3mCV3SUo68cFD45rawaeaanvB14CqY3Q",
  "key31": "q8bR1GjukrgscESpUJi65EGqRAaTn7owo4pqvNNWQTCEkWK2CXVc8SsuGsjStZoa4nL5WLoJnGz5QWxe15fggDQ",
  "key32": "JF3hCUjcmhaPdVo1pztAJpyYGxszbhztoZYihZ4viCri4nK6e2ZbWWjmvWy6ZtVqvsnr3EEKZ7HLBBGPZwp2LpC",
  "key33": "2cN6HKaB7J6Yuno4CDv668dJ51bpyxY3XQ2AeN7ZKiJtZvwKPfxd893vRw5vzNFEK7sTmAyKN5uSt4HMoWg2AMo",
  "key34": "2VTgqvy1DwNJMWCRUe1pNj74mo1psAeFVCTQQRUtHjVadQPMbE4j1r6VequyxoZsBKYwjrDbvkmqUa2HSt17XMC2",
  "key35": "4tjbCRFdRFDTw2uJSzsFPkNfT1cuFpBk81u2NTMWthW1Hw2e9YVL2Jy26AsXZatJdsuX9b1pPBEbgCKMsqNKfeBV",
  "key36": "3w1jidvVmfNdTsYFDQAYBbznJ13A7o7bWUooeZgfBUPf31G6Tv7yZTHvrE4nbwFKmgEGGDdhwo5MwH3D1m5eUqzJ",
  "key37": "3YoL4w6VYGgWBevnCYJZM4Yz7A7h7ry7azHRT753NLJhPjMW4ZZudgJnkNHrSKqDD8TGcz8KPh9nfwDeSYreG3oQ",
  "key38": "3EU9w1GbL31DvHacxw9TEWaXGN4gXK7FTEC12mJ9bKe3uwfTqc5VFh32vfeUqXXZeaTwYz1Yx5QCRrDGM1AVM1Wq",
  "key39": "62fZz7ukWYbRQTWva6yZWGffMcWWbMy4SGXEAXhovN3imDVzDNVhdBH8EULRiCmh9pqEk191GoNLwG2QCY9Eesg9",
  "key40": "3hy8g9XEWZrdhBvLNyBL4U4wnBgbtVDj6it8gKCSGWzBdMoHwgRfJEPpkx7CxFjy3QUH32u3NHAXx2dqH8dh9tCf",
  "key41": "5xLBqLdDmNWZWsSCgKAgVosxRcYaDBdUJ5u7LN1PFfXQHbqQxBmU287tcMncp9jE5dZonyXJr4fjEiF8j15dxDAD",
  "key42": "hhohPJN7yy9EmiFRHvmvCHcGREbSZ8tyxecmW3eAqueeGzub1SM5M3mhnpr5W4tZ35Gub6qS2PwaXGgkDnwvarT",
  "key43": "62BAPKqHu9Em2cqVFeKzW3hQGviEaAJsLZFUC1HkkgMYkAAiCQqE7w8SvFD4k6MPR1XRE7pqXiJJfisgtC8DoR8D",
  "key44": "3p21fku1VjU5xaToAb3H87Zoog9qAHDsMpvy3u7XABWZEa76XbBpc9B4a7TmbHmAS4PVX66KX4ENGgiTgAb8ah8T",
  "key45": "5QShGWag1YcevhoVC2vTjE1Vna36NV2nJzEbgvJVuUuiuEXUzRTLNpdWCwD7GNxnNcQUM3nWciH5tiXEPKXx63om"
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
