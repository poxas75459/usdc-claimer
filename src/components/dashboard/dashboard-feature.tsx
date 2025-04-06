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
    "BnRujJVw2KYGZejyaroG7CP2JkSanGnYganFCT3A3Hz5FdbUx2SnKTZWCH5PCyLyGj34xz2fJNN687eysBxiURx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDw4JZoog6NyhYGshM2t6P83gXknQPyQKhLxSTJcPJTDtDrPUfB85zXV8NiGPyCMvYK9nJs6akmvh3D3rfdvHid",
  "key1": "osRtZfp71vjprBUxMUcwykAqhQBSCG1Ak5svubHjRZs8m7V1TsW7UTMkd1JXZSBzxWH53k2duydCbkaMqyjcKdN",
  "key2": "5QPa7MbF8m6Pt9dxpQJRWrdGFo2ioqCpdpdMDaYQp4C36m87DsY7cZFsgMZtB9VwcDpKWt11D18UjmguGRzEMA14",
  "key3": "3XvtAJWd1jMxQkieQDbAanzbq3owWfGdR9oryxVt7WETmWrG7szdhwUvCqAya5gbRewqzDn7T3dhJX5qQfV3ggoa",
  "key4": "32VA9GZffay6UfPodUGUEZ5pij9gW64ybEnCvJzFRLS9h6vD6kVYQCKvtyUUsGXPRHs5KeFSAoBTj7WpA6i2bELB",
  "key5": "3upXuiqkLH6p5sZWTyhMPVMSstJbwJuAcM3hUQnwGmVAYvsvrnZAS6qCmhCh2KU5DtQT7S4epTiLCZoa2SH92zbm",
  "key6": "4x3sbCQ4JA1uo6gXJFAop9zbBHCTGZcg1TJ12LpVTkaqE87t6i1SDuGsHssz3YFprihVf5EdJTj93hSmLRmKhQHD",
  "key7": "2jWjer2ZivxzyvocSC8junSAkPYrktC8pfrrdQWp8owMh7iBpPyE5Dm9hFMgF4b7TMrcDezrwAGoVgQzyZHt2aak",
  "key8": "2yktJMDr5A2zJACFn9HkRAR65W2n1WMo4Jmv5GUiUaAWpEUbBVcEEZmw4cxakFcZvBT3Jouv98TYmrNvB8tzmrjq",
  "key9": "3Aeh8YfGoCcorHaDqfF9q5JLELkFtmm9yayeHxj8q9747ByFBTAwKxURYFweXga8gVAj8xWAZEfzBey44BTwoCsR",
  "key10": "53o2iAdopQxLpDc9zUUJyYPvcfk24wUb3vWrogRNKsMntMrbBT6un6BWBjLrgtN5gAm3YWzYmvt8r9BQAb1RgeLJ",
  "key11": "2zcj26YXiCStqVPNgREHRYrdSefiuUiiJnmBU42QSDjUG2wnRbrLnLqPCRUCLztGDHBBs6oZ9Uo9W17cyXwN3yHE",
  "key12": "39TjJNmEKaS9RZ87D9mcAM8C5KczLty7yuoY7heajGHKVBYmFinvMP8SnjuFekacFtEjccCnW2FsEhVR92PCaRnz",
  "key13": "2r259rRo2woHMuJ4ruL2e5dgkmfexHxNnYCtRwN3vrjAQM7VAJEPUKEreXo5Tpf1kVoBm76a1ho62gxWeMq539Hf",
  "key14": "3ej2mjiP3PiCidgq8EYBLeZ5Ynjw7oFxKitGpudTUFiqV8TbQ9yGCK3NjpLNTvQUizMx3uw3rCbkQMyRiK4sUPBZ",
  "key15": "3obpN1PgbrYSgq9Wa7wiLuaRr2t1MLEah734oSthtp3Y1aGJ7r6XZtJu4Gb2y8S7sJ4zqoLbqEDaiUo3uCuZkiTo",
  "key16": "2XxS71DQHD7Pqs9XEC2gPA4V4Tcoi1BzScKRWos2qeY6pWEofC4SB5g7RZUdV26oh8v7s6VeR9Lyf2jeBQEbtBmH",
  "key17": "4rdsPxzKhDPPyXiBKhnGp8xoKTYhUJEEnLDpPN7XFBuif39TuPfjuLKL3u2hSHYzatJTeFMkGwD3JoatvGVaKKK2",
  "key18": "29AQtXpud2VTK8EWDzEEMcncwjYgtLYLA6e5bMXyz7FkzUsQEWMwUQqXtFqhTdvZXAVjQVu3aWLG9HvZQTKzjZS1",
  "key19": "4tYwZkPaJirnVGMBFbmHvy7PxqKJi3ftw4zo5j3QDtfH8EHpbcnec7nPF9RAD2tZxpt2ECAZUpVVqmacMDkGgCnu",
  "key20": "36T8q2DQyLy2mz4oThZcYZkYReTGSdUEHSJ6y3YzodSbWvFxTisfkh1zW1QwShnScHjcxo6hX974qpHVQUhQAhpQ",
  "key21": "3GxPguTuXKojmQVDRRPNeRzwTkACFZqPRUHs15jUC34Y6msD7RN945k9SW6TbbmwxZdL5ZjRFkwMjqcceFHxLCbt",
  "key22": "4EDaEoE2MEbvbff9wKvrzeN8M7i4S9LMgqHmrv7YUiXw2qUN4CSMfREofSkRx8jopaGhVPrqN56SD9bRv4DDWAao",
  "key23": "39yxenmtYn2jSXmNtQQis3hPptTiiedkbh4VaiUdE1tVf7aNC7ALHoNMZoFZhSLn4UxT6ffPa1QmcdMzjLTuo2EB",
  "key24": "2Ekr1KTCscjbfw8WiTibKNsiPp99B8S7aqvzw5AZoamcNYLb6fgqRbEH79MrSdG336E94qSjNViwoiAzMEk2j62H",
  "key25": "CG9x8iVMDn96fcHfjSUcNTfW6gRDbrCPosNEYNSFMrQPVVexkechdXgX9gPmdMEpX8M8k4n71bkY5gYRywfJNxe",
  "key26": "3vVP6YCTga1fWXiFJqPoSQtGAXciiMDpfHsFsR8pFaMBwWMQ5W421iXFod7Kes4ytuo2pT8RJHQgbmfNx3Mghs5",
  "key27": "4S9Gad8XjTcJyjH2BF5Y7idxtZnDEb7LNEWZ3LrrE8ZRcune3pm6KQAceRJpSicShc1bjiDbphTT3zzzgjWmozyY",
  "key28": "oHSasdnjeEPiVcgcmMENEns9totfQQzFnRFDJY7yaiGmcKE3P8R4LvprRkvFkuX9axbqr4X74xPP8GXhgc2ignz",
  "key29": "3kNhPMEZJNSPadBSazmf5AYzZdMhwQ6LRKrLycmkMAjm8oF34q6Yupg2tKJXv85TUmuyG3Swx9VTHXTkUF53okiY",
  "key30": "3KEvnmJSqDpUmxAfvs48Awa9vXPSLHaAGrFH8dBFnzWagmJq8HrqnSu1GHuqNs3rsuZYkFFDHd1YE8z4Bfoc543y",
  "key31": "59vPHPdqF6QsK6GryhZVGccrfnA7ZJFvK8ssRe5HTE4brypM9jJtSJQPEN7FWNyDng57JtQw59YcVUe6MczitE7R",
  "key32": "4TeQNSL8M8xpyAWQqbtCcn942qRtDufqfnF7C1ZTkhMi5HvcGK9Y3rGYkFdxSdjirJrqX75unBWg49yxWhEJQnTH"
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
