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
    "2n7AWPZmtE5upmDJS5zCiyRDPP1ZJikvXiomFhqcsjfHAawmRuXnC6sP6NkpUtMuu3beqSPHDeaxSRgtDH5xyFhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pTMrm1dm1hSfJvCsf3VsfHBmPzGmsx7uMnoRGfAY56K6ArgWbR69ppWvswNpgrWzzAimcaFxUpribVtb4o9Vt6d",
  "key1": "4oYDnNc6iWvfY5jTSXdSA9BgRGc7ER8eyEdAVZAWcN87PdGaNaKXTRxoBvPaS98vu7ZNFHizBEL3u4EeLkY4yis3",
  "key2": "4TcoAEmSysgQhbmZzhCCxs1cJL75yYVhiSmJ7tW7hejrBbMAg1oj2CckHxvUdTHr74NbPUpbJbNadPhNP5fTi9DL",
  "key3": "2ts9j1Nd6MyoLeX2zyf9SYSHp9P5q1VEz6iSWFBUgA9ydx46anwpD7NJmTKC6h2uuyycGnqTzHkmZFsWP2Dw7CJR",
  "key4": "2CmudjFEyXc4WNVa74F8D7k43iENDMUH3ZKUzRz9drAL5gUZHccqVVz8MJqGZAU2WZJMDZ2Xr8NCykK6DjCocYDs",
  "key5": "4ke3V3yP4Qoh6wh78SdyV8BMByMjHzxxb8QEJfnPHcLJdv7GnHWk2ZbxeuoT2c3gw4EaL4f63jbGpcEDWg5qpuci",
  "key6": "3deeurLG6zetgHvusG61pzbeai9gDr1QUSGLfuYWD3G1axqit17CD19NFY29ZGAaC1Y6u61fLKL5MLjewCPasQFz",
  "key7": "2aFhZUTXVhmTWULddxGwFLR7GWv85DDYUU26LNX7XHZLvgnhqtXAPCHKWBiAwi7igprfxFJwaGPUWRmiQEbfitca",
  "key8": "eN53iSExLwtwfcDNagCTmMVuYekznmgknGP8uotbHHxZqKXC5SjgEAB9wEynqdT7wCdYWNuvAnAWHv5yqsLSnxo",
  "key9": "4BgHZWkH8Ckz8VMXE6tGfGApc363tT8aF678o2JZJrF5kH1PttweCMtAxyh6LDgh65WCu5rpNgEMvGhyUmpS1m8Q",
  "key10": "3jJgM8FCeNyEi5MhR2sFttnTW8jZ6HQsvDYUafNSRNFF9hp9dxZe7RkEjnnX54A47n4WE2i4fRQRATXE1PZWJk83",
  "key11": "LL6UWp8k9PkQMGFHznbzRhdG2vmesia771fbPugTtq1JgVtDZVtxH4YmRYS6ccVjZXfujb5MDRgKiDvxcA5WeZk",
  "key12": "2M5LBHuKkqGgYWpoSozLcDwkBff19jyM5DWuAvy8ogwcC9b2NdfNkt61rFwUCJYhMG5qf7bWRSvAaFMYrSyCrvBZ",
  "key13": "zegciqLDhUK3CryZPF3nTZS1hNQn1xSLQFVmyYp8QbtiKAsmba9qkbSLq179ukDpqF6Vkyp4o97vxDEMhsn9sHG",
  "key14": "5Ftf275p51FPUET1RzNhHMCfWu9hsXjv2D5uN7QcfLQ6YZxuHsAZffNZxq9atChmFMX5AB8TkXHzHpLK2eTiambq",
  "key15": "5camgzioV27Fur61tsdyC8j29YtcKQQ3A45YmhU4cC6r51kftCMZSk1YLMLwTJRxce9Wj1XZshXSzi4WX8zRNYFJ",
  "key16": "EM2SfLMCDZNGuAiMKsjtDjPUm9kQFijNz7zaPEHsBgjSGcTkiSzJPhqbrXsHH55ZcLhwcSHCQzKEpGSepSyNDaS",
  "key17": "3AwrW28fJpZEkx9kkt9fxUbSGBMo7drDCj1NmZHCkGtqTnV1uALUT7UMnA5LQBHRXkXS98T9EmZhKUrPu5912A4x",
  "key18": "3okeixitVee2LjLVojiLkfpYyuyyoPGrwtjepatnd5ViTVbGZaoUfasCQfFZy3VP8CgDhH1qkK9d1gHJsvequaY6",
  "key19": "4S1g2fTkVgHH3neqCJqrBde5avGwQkfjt7wnTpxTxqWGmD6pWN15Q6GwykRbYp1xuGfnbgQDy2ZAhnMcMXgKjXpL",
  "key20": "5UybLVSrcCFcBxrGpVPd9nFvksJkvHsT1ZAQWnLvTKqoX7x5warUM5Gk6DfopM5R7YbGEpMnQmkhdi3ak1h7tQAr",
  "key21": "z4b57YeiwfDXUqMrSUBi38GUH3Mzo38oJJKoSW6pJHmZxibWkfqPGxUzyjehYwHH2MG3LPeXRaG9P4bThQd57qc",
  "key22": "2zhxyX5W7LwgcfUh8JCsojW1wYaD9UJeyNX18TJJvZc1JEDweL3g33xVGmn4DWqhkwkyMuqKUmeAFUr1vZdirt5y",
  "key23": "3eydGCDRqjc6F9jW5orNZnAcjoeLFepYJZU1sbBQT77XG8hP5TYDuduTse8b28Rq7tVEQVBVErvpvzKJvs3gDGDV",
  "key24": "4RcKLRYjinsEdsRiGf6bKiiv76bjTFuxfYjgmmYxfW8JbYpbwe2PZ5chyZCE7Nt7G2VGgf4dVzmMGvEfUNSgBuZk",
  "key25": "5HNqkLrRfhvTPiq74JV2tQWPkeHRnYhCP3WbvJqirR7afMx3ZwJhNx77GCJnbaVvjG7xtbr3ekpo2mYdXaWtc3ev",
  "key26": "YGihqYkwPAsujnWbKTFh3tNKHuf3UzNsHMqxEdjGgNda6Xe4fY4Efwk9u3JHYn4AyGh2n4Lfb38MapYf88KZdRy",
  "key27": "pUVCSYKC388mb1vZwPyMUoTzQ5vKNLGuJhVudvyr5bzbP8vVBmrbP5h3pLYjS4HX4NTecHyL7fomcyz2dvtEBHK",
  "key28": "4x2SBWdv5p4T5qsXVhBgSUTpXSqdhYWbTpXyiyWUfqeEoUHnXbki5cZEv5Bpas6HwimECgqYWVshyKirdm81iLFU",
  "key29": "vYaKP97b2YkNSEKrppjh5w5ZLsjoUq7w7xAdRUyCunsJ3ynwfZ3zbrPpEFJ6zTuPEfcXTCwH7akEQoNtqQhjLvN",
  "key30": "fJLtvqLgwG5dC3yJcyrbewVh5Rv8NNhn6HWBqWnC4NZ69x1CdR6djzCw5RGyxnWMGEnXwJbTopjFP15NsEJMtjU",
  "key31": "xA1JoZnL8Db9N5VcabWhnxD2xzwZdZDRPtoEYyWmjRAvBFeeSb4puL8wHZCrftbq7SGaBWEPPS9hz3m6jGCvfri",
  "key32": "2ypN2JxYrTJ75MFxoe3rAQrWDD69t4BSfX5L9GBgRwgQ2v6Ckx6LAATyApTAoCrq2aSi83a8vraveXtAMoJz3vwc",
  "key33": "48uyeEHQJnLcKy8JEoDaX5ofPGNSwfkGMuwxxwfZQGVQvnxVK6HJhBNxHdEBRBfEzDqy5Vt9KK5qj9WbsTdaXnGT",
  "key34": "5zx6MXjTB41kRNXCeiUi3QG2j9F62nozq9fPEDjBBGNmT4vvDDeyjXTBYFPkEmjSerSPTsXtdbW6MbQb1LqVpP8L",
  "key35": "2hJ5mEMVFobh5WC5dMXniFd35z31zozcEmApCU1fjV2X8DjPGQysUKEPdJNHWoonTgPUs2j9s38J33ZCGKzmCsGQ",
  "key36": "4qf4L1CeQzXYv9y3T2UVQ97Lp21mQewwGDMDZk16vaCErd6i9hWmh1TuCf9JSihEBQkE41by5uPFSBQ7Md8E5csz"
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
