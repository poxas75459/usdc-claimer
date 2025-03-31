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
    "UgXq6GmVjrz94jkoDhfk7tRbSYuCG6tkFwB1SzoWQaEay9ui4RH172dBa9bX91otbFnQwfWdXpRpg2z6hYFiKJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YtkCkYx4qHPoDNhgqVjJ5o5EExkyWJh1VZ1hzB7o1xLqFjBUBKZdkSxTLXN6aQLnFoKLLqKj7Qvu6MbMU94aLb",
  "key1": "2xzNNNZ1fStzRuhmGNxsSAUf5ybgLGbRXzJAUxRfVbYDPSeN2phEimEJDciXxsYxNUt7X9YpcsXPvA4dSAwnWJpH",
  "key2": "9RA26zw7PbJ3RJavNBDXUVRiX5ij5jbCxYtY46kfdXyGcoqFRa5Xt5QxdsetWqAUuSzJewAA4TW23FeBRdZRtpb",
  "key3": "RQdj3YsGFthEXVURWEQKVekPaYg6RvMft5CrmbAsZczFKsgxBHvV4KkshxUzYWbL95jko9qwTrndCg4gvoYiNGV",
  "key4": "3KD9fzQWZvuVo1fxakTBJtbqzVsHmFXbJz7sxBLs1XdFmfpSQvWkGMYUVkBYxPPxCLYcbZk2bRKSfFisSpsLDUW3",
  "key5": "5m39DQRzeAMCkyJBpAVeTGEDHMRhCW9bBsgwt6wytd9nWNeL7QR5rgxs9xHsECKsBhAaBSYkoMGnvPJXYKnzxdxw",
  "key6": "Xaut4JRhwPDXA7A9gCtJQBrMcWrNqqhDQUiDJZtNA73NpmF3RjHSgGkv9kTRfq2oGrCR6MLKdH2eJR7V75YUNEF",
  "key7": "4SZA9cgqRwkuAZPTMCbeobD9FmybQuMtXNeynMbDNyc1wxELbd2381AFNSYqXQNWHsfRZKwbKWxz711a676L5ij5",
  "key8": "dvaCdKU8s5mYHNr7jmwXB3rVH3TVeEZTPZL4HQ4LQfBacHXMEoQhEZPWi6wQ74Vd5ij6TuL8EV6guUxqugnr6Bf",
  "key9": "2RobnpWX2LkXeD98ep3XMsDzr6F61dp9HXDL5jC6pQYNfoHmnDoxMUbA3HXwpj1ZXfLFLb2cKmNcWCJrVSFGCcNL",
  "key10": "4xCtMZVP5EpqMMUo11wspKhNcnsQBfYdhfSfZ27jiUPPAyeiAkiVsZK8n8b4pKN75aEa6SGmVkbGU3pTrzHcpVyR",
  "key11": "5vFMZijJbHQwNsGEK8wKNAy742wa1yMVcwgwYN6ma8jAB4RKijRyQdhPLZauXtTMkd7wBs81fmkbK5BhMjyvzGRz",
  "key12": "3oWZZpujBK5bu6qW5cCETRiLm8Wrbk5Gu1vRURXK2tGKfeDe57ogqpV8ojT7dWqY3LEPofHtvRZBhXS5nTGjBVUa",
  "key13": "in1tnaKoGdVmDBG4HijcKnB3Tn64HEiP4CX1cYA3T75KCqaZkFYLyVz92AwSc2Zfk55RFwYEwhtfwAJe2umRQY1",
  "key14": "3JLv4UN5fA1E3bubywwToSGu6HvCTPp1CttwQiFbvgA9Yc4E2PQF55hCi9y4LmZhizgAgweyqFiRwH65586LFDjQ",
  "key15": "3zQrf4XTHGSkxAQFjJCa4zrW1thwUwiwSgKFxvgZZagSimeSW45dRctDMffqoCosvaZZSq3FrQFAUaMCnztk2imZ",
  "key16": "5fb9QGLCTy47jG1VU8ZHUGARx4NsvxNsPCcJtTS5oU1rnn5QLnjN8DCgcFfRnJ1ZDV9LJ1v7o1ecMpx6EdQbyEjT",
  "key17": "4xUV2gUXEMNrr2y9asSmxDosM62PmaW4XXVkcjy1X3qnanXhf9g6RveMJ4FsGbDJLYWLayX9HVfMvMLG4XchyL42",
  "key18": "5qTVCA4vsBTuRoLckzkzEmRkBFBECXVqQffddqSPHyHFrp6ufZeVpXsmsrY9AimAVfEYrQHmzf8QUqBB7sTPeFA2",
  "key19": "29SKgnxRBDDn3X7dWCJ2h9QnqP79Mm6iRiHpqYcu3c1ggibS5V6e4NAkA5t8pQMdCYKAn8Qqg9z1WSENNXNpJCbJ",
  "key20": "3zVG63KbLJqU1AbdfD4GAx24siYNT4pXJUjm6GqW8rZcvF8u7hRV4mmck4r4mbdWQPZNHtBBctYY6jxx9CZBovn9",
  "key21": "4qFNfRw9CCuAWLWSzRetwABoJ2hEMbGVnNkyt6Du512vseHZg8CeN4sTR6TmDiQyNBEkHxT37v3dxPgMfr5Yvhk7",
  "key22": "27UvYSEYxN1m1HkbzqjUYMtJxxtwmnpiw5Exacia1YL5iUJweAL5CH4SmVNUWdmYdgaeTbZVr7eNG6TkXfsiU9dk",
  "key23": "23bGoqrPvkdiJVb1TJyas9eWPMVyejPJUZKAToyoCQE3aAFkBtvDvpkQgfA7Tv4NG5ePM9H6Xs8oVTHnzrUbGHLG",
  "key24": "2bfvYKbbQ6HU5ePA3zZnL8rB8PBNSgepVNbhFTPUu4heW9hVtXdkzUiYtergo9TyHYYuw2fHQayeodpDGDN19WMB",
  "key25": "4SfJ4bKmiQqYt2uVNgsvUvi1yA697gv1HeFhHsZLadVG5VXNY4MASyzMVtcp2wDJS8h6jpSnY3VwUjXnyWxjvS4H",
  "key26": "SjMpZdoKMBRPSKgaQxxCG2Mmt2brd4vcUMjFhmaNJz9R92xKYSEe9g4okvDa7yzt4BUJnxkgURsqAU9ZjqqDV4W",
  "key27": "613zG9B4VQZLijNzr7oPLcdPPHhmcvoe6aJRJEix7VyELn3HSVj7Yp92SRy3tSJtkTerqE2Md1HW68LSDQnefVBM",
  "key28": "5W3KE6wp9zi2Bputkfmm6roG4mapgEUd5AUj35reG5gup5HBWBtNbAkGnGGJnddMtokfuTHSi18WxtvX1X3Qsyv5",
  "key29": "4gMkQ4q4W3fGFiiWgwp7Fn5mm2BrdHCswzfwYsSvhdMexZGa5fdjwQWjSTAM3HvX48WAPvU1zyeUeWAMTmLpqmp2",
  "key30": "4xNr6XPUHpUPTi1c8xDwLtu1E8rDQt2oCf3nW3xcaxt6LR4bSHF3XPAs2w2JKgsyH65PxjVAwPb5hgvsxEtTnJsS",
  "key31": "w28L52YqcChsEtPYkoq7qNbRM9XaPAeuUkjEb81WG3KrWqFKxYDtBUjBNnFY3dHbFGb5VQuzPnuPcudRKvSseSA",
  "key32": "3gpYLQF5WXyRCx8F4d4x5PRbUzfNtVVpe4p3shBuMXykYonCzujE37hzpPpp1cxi8uhQhtgrqgDPDZ97uPWYPym",
  "key33": "SDJyCDQG2EVf6KWNTM64WphTKMRADcj94mwsyd8d37FeVqYbbEMkC6kT36y26iRp9dTittc9QtWZxK6eKaDBkSF",
  "key34": "5Ti2ferJUhq85sneGWBDdKagp94Wa19RafEdowpiR5g1psmyXZKFB3GW3otfCkSfRqTcvGgvGAJBGHoL1EQu5Ghm"
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
