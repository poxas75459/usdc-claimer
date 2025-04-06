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
    "5Pu5UkNS4ksoCVNL1mmQwhDxkoCLJRUMgBykXR4BsVJ2sjK2Cbo6wZ1yS8Ki9M34wG9sXt4Q2Fm2fFfMnY1iR796"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4gKnchtsyD65mERQdjCA6eVZMvs1nEUfmw3Hxt8JEqXkq3QCyFwQ5kaZgUkXvvQUrGezvZK9pTYLi7BEfBqND5",
  "key1": "29ZShTqrSP2hcUoSgGmZHuvaQf7UraLBvJrGEU6Pk9ejkFwE6ypeUZfNBeDSEBbdte4xzxt7vTzc6bTBFRCc8Fqv",
  "key2": "5nEeY6NuJCM4ePDBW4tCmvWPYi7LCoeL3rHA1eWeYycpHuBpNUK2jyxHBMhayRc65mCaVuETexa9izQr1MqSeJyy",
  "key3": "5Hzz4pobLCcKuf4qoMHEypZAx4noSDGRCm3czMFJwddiMuivhK42gSwSr6U5fpGtAYRGy3fv2ZVpjnYb9YdekyDM",
  "key4": "23ZMixpf92Gtxygv1WM2spd9Po1RyBV6jYesTxvFYHKaEhykhRK2uLj62TT1HB4Rkua5FDfZjRcSFrLMGF36D2tR",
  "key5": "3KjEnKTyp8cVo3th7rBBDprDFVQWj3wpFRR2dEnY2ad1TXNNrd7tioXMgH1UW6m8UGWvvrZRKSZ1LP5boKAhCjAe",
  "key6": "2y1NujMyzF85dvWzMqHDtWUgpa9RUkdJbPRAZh3SKKYB7DMaW7cGkSzgLaqAMqB2NgbsYHbJVLrKBuNQxWuNRFWZ",
  "key7": "3mwde89jzsgYAwZX5e2KV6G6naAihTSLCW2uzzb3MSpX14TroqAXBKNAsVzi7AjuNL7k5v19B7XqufKCvpyHftu2",
  "key8": "3WBeKusg4XU1BVrXBHzUUDm9jNzGAFxqTaBaVrs1yCptR4Heh3CX64hBwcxSJe1EGzw9m3zKKjeGKLWBqVZJnBLz",
  "key9": "2gXYbjnXU8zNmZSYevUVrTbzvmKam1H2X3PCFe19f2k6RzuWeHsHiaoeiuXmZFKmNT1ZjzhNN9DWcrD6AXvkgXEK",
  "key10": "3TYv4ckGpehhGaE77Mg2LZvB4PvFXsc5YW6CJ68w7CwRj3Vjz9yeH1XGfiAgLnCgYTRtweG9utDadGw6BQaV2KXE",
  "key11": "47LBRja4EGRszKYDkdaRv8zCF4PorLZJpDTUyKB1PwoTXpBNxMwavTpzYtPMk22D3XX796n968HdTFUvZbvFgvMA",
  "key12": "5w3mrGJ1NmxcudPDbHzrwbJSJRVej6N5539XqD1iKcCyHhRaGPD82TdZ2XgVxA8J6zZ1ZQEQW6pp9cc2coYxAjUx",
  "key13": "4Mce7d6uqjYo5jhiMPcx8nQQP7Hdrr5wX8Qum3YzWhfk67WbGxMDnQFWxnoSWK4jBqEmBudf2K8FZAX6sEVvYkxJ",
  "key14": "MWpDNmMXQTT6BTkVBLpveSfrfK217wzvQLogVaezaisDpR9zRHpopKwH4EJq778c5L12uw4SC2KS5m2yVSVRuUa",
  "key15": "3SNqP5SfJ8ki6KrBZ1nxyDxm1xA9hUCnooB6QtieXRwbcu5RSp2niPsVoZPf2bgEgqh2tokDiUmwEyufDrrNQFm1",
  "key16": "YCp7Xh5x5FVbDQYVAtKMa5YH6bXLipj9atqG412MnyJW9jEnxiJwytgLY6wQ5Zie8f8GuHZPpbKBK9NN6W5Yjt4",
  "key17": "4dvtqhMuMjAVG2xdonRQrauJzHF5TETdBB5VpAVFkvESySrTPaZ5bT78QcF7JEHhvCJyEDL25aKHBEucEbXRBiGe",
  "key18": "2bMoz7XkS2puZdQ4S9wcnENYTpHDBR5CCghWA7Z2FM8mbtBrVbhoykgEcbz5LyUTpjZZTa8vqPmsjaLwQbyK9xBB",
  "key19": "4M3uvn6tWxq6vyCdJNCMHZ9gcxWQJgAM7BKrhr5DhDgUBPSn3KxcALpUeEtb3Qi8Sfa6LgPVURJsaGeGQaJfcWEf",
  "key20": "2Pu2sPrGeEYajd5JaD1Xu6sgg6xJ7vwvfitKTZgrU7By13SMivHHJ4bK81z2FrH72okERPcnTxaw7YZ578rCG3dd",
  "key21": "251EtL6v532yqndQnynbU3qfBNJGRafjXXrTdYXpa32mCd9R11A5bHk5TCmWpQgM1zn98dfQLR4AVnTJCwcSgcnX",
  "key22": "4haja6wV7p2seEhohhQbtMGfF5LvV74NYZ6EZgPRaad4ssAxhChbLtm157SZSFzJgKD48XtHvJTvUs2CdgD2fh3C",
  "key23": "2c6NNGaeijD4KWAjJMTUrJFuzavTaGiPBCfnRkFnpkX3actMu4ofPHwW4E76E6Q4igoMi7NDFvsacWyjKdrHWjBF",
  "key24": "4Fs7KNggP5RPfWEjt1R7sNY12vNa4P2CRkB8SWbp8aR8gzyoogCLepohZbTZU4PJCbLy6bHNH57peGqnX7CALBx6",
  "key25": "3MGYyMm8LBr3phaRLqNxGeMvWTt324SF5HdL5sVCKVLXThCURqwKNKNv61enQZc1aVbzqsp7y1yfmVCHtB2VQHGv",
  "key26": "56BEx9dbPXbKEVNtyCspPtVfqxneTEV78znE6UhmdjJE7BP2DvEYjquQ2aPg9XiBY8ESbZJDAhGn2cBjZnEkRP3D",
  "key27": "3LVVp6Qg9nzQH99MkYJgw1GQ8wcQ9DBqkoF4pWJZoEEZMJdJfsRdeT8Zx9SSHsxc67fnDZrgL1NRenhwPe8Hn8SB",
  "key28": "5SvvkbpDTbwQH8ELhdmkVSUhHedCfDniNkEeTMgpFA6YTHvN9EYBwLFJCEJK4La6Y6biNW7DpcBn9uyuVfjL41tu",
  "key29": "36eE3SfnaD3UCsPmKNrysPGDonVknf3MJhq8VL3CCcSd1GuEDhfCrpHeF3uxTCKvxTF1aNKZxb6Zcg3o3xD6hZ2b",
  "key30": "5RPxPCeX9SFfXgrfsYr98YwzqQk85mgVMWFKh9SZBHshgP7hvf3M618Dpu9tkYhroXVZbyxCgPFq1kyrtN7DU1kE",
  "key31": "3gxiWT4PihGFxQ4zDV9TYrNAA9Fw8RcB4392QmyLp6WXFW51Xw7HvtJsbq854mdvV1R2MsR7EUqhqaXFX4BTJjNS",
  "key32": "5sGSVTUdyfjnbJmanknDhMxtjQNVdV4CJiEpt69UiiFCm4YoSs6KehwtHTvTLZHE7fphdovtxJL8WHW556MRUPZm",
  "key33": "2xPScQLRVVeE63VRi2YkdShtHT39iLs3Z4Ppy6KxRJsDdo9dAw2SFsxUpU5wnDPPAyLG6Kxjs1AAYwUbTuaqKs9q",
  "key34": "3J1uaNLApWZiMN12jQaXoM1PZ9qcRLfzzJiYxSqmzpnDo5R6n52bhGNo4WU6fqXrbYbWFEurT9cdpB5oCuX59CcB",
  "key35": "34XCxaLMnAVv8iB9cb2jUhXxAhx55nJiD5Znz5xWxwgytYBjM3ja4db1xxUB9EmQBbzWBmf5ajPVs6tpeUwTCj6r",
  "key36": "5vJd64Cc5TSU2LTP3ZsLdvzWRx73ggfDzRmAEihizVyoZT1VCs4u1koGnUvwYHUf7sriXNFcYfQ6yYCAZnUwWYAa",
  "key37": "597TKNzpZq4VQ6RTWYnR4CHnwwx4ooHiJXmZh2qdTgoUwW9b9ZQkys7fKdB3KV1ysMp3ys2Gk64n92HyVpPifC12",
  "key38": "5G6yXLrsjH1vPuvFn1pFn9qgPYLgxVbojP49o8QMaDQZEw8W3hiQWyWDGB4BbpwmaUXAjBt5pLG7U5ZucugudnDn"
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
