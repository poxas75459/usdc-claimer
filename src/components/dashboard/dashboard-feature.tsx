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
    "2ZpGF8MaJqPfvCuqKnwnLtZSAv4kRPmMiCVDWNn5mNVhJ3Zv8iyzJgjMxn9xx73jxwobbHeT6N5EAadwvBHUdG3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGNopsySqA4yKAtzNuA8yPvLWMDrMZCEFEbFk6Lp3iraz1wmyNgmAidYUMKqrEuNvC3dgGTS94uErsRPUsMBcTd",
  "key1": "2JqTaxLRaSU8A1aNZiuKeBbYmSsvXfGp39bLAMR1BVG8DYQQjWNCmPzhS9r6u426vjKBMAJRVUkVNVjWzQYGZ2Kj",
  "key2": "4ia7VhQzgwv4ixHAJtXGi5vnMN3Q3j61ZbGXgKvJ8gm6gVju54wWtnGDaBgPb8DymQoQJaGYtrr8pFDN7m8AXr3C",
  "key3": "5soQ8sDuPpEUBmbDCav8GySPcFU9nV3eGFVuT9WGRaLkFsWASFEgZX8cNaG3pEt3v6G39p5qYpgMB9qrUdy41ixU",
  "key4": "2DoLwnwifWU5f54FEC1jeokRYSaY9oYJn2ZT4eodkoxBJAkuJmJgnnKa2qPrTrofSBFBZQEhERXiBN4DmaqT8Dzh",
  "key5": "65itVnHZXYCosqwdEwoyosQGt6epUd4rwEQ8NVdxmJvxxz65zEjr5XHb1TBNA4X6ccuMgrxDBQusGKiCqkLddT9b",
  "key6": "3CMgvF1a4vYRcLcvkB7pVCUBX1hzTJf7ngJqRyXDnGVCgtR8nVNyWdyxLFv6t2VnaZ6R9paix1YKnTvt8dQTRdoU",
  "key7": "36CzGAzzqSnPM4L3YeVpeNjbrJCLQJaXm5YLhZuLoAfiKv7YjQFZgF1fNZ8nf8JaWeZ1jzFU5Cp9tUX9CpHUDoja",
  "key8": "55Epk2TCKutUwMZ8FAtX5sTrkKa3tDRhYdqaSs8Kj9PHF5EzZPxEpMrGnakYvGasrivmRJkyXNwLr3dGUzfeeFbJ",
  "key9": "36iFk2JtwuYXphkqSFNZ8QhYDnTE99M5C57hJx3Wp9hggeM3rnBZPwmZffuLwmrBTjUwvkJWDZ49pamgpK4kxUg",
  "key10": "K7X4NUoHMQc2Wb46BdUH6eQVN3mxtEyM43zq8BYtLvddqqgrQXeeZ2xjxdUECmYeD5u1AAv7poTA1kmjk6CMHfe",
  "key11": "5aj5rRbbLnf2xF4ADRNYVva92z2mR7dNwjWkMJxfcSeyBhuP1ocFDzrQCdBz1DL5pMEdncJgPp2fJ2FnmaQBUn3V",
  "key12": "LXJAnFGU9MYsUGVpnKBoumJav8W6MLf3JKpkFrbJk26VSzo9LK7YKB2xnHfuhKRk9F3ydvZ8o8yvUQC198D7Qmp",
  "key13": "54omDm9pPwfo3JkrfHjqqGyLmeZJaMEu8XsJ3EygnrPngehLKajn1HJKhMnBsfA2aCUMap5NtwLnHDDn51R5VCYs",
  "key14": "5qSiE2RZFw6tRjnNfiJ27rerqg28bBSXZGAcc4KmXSPzcW1YKBep44Gjfi9ureENEQ5UTaQXMJpdr3rNg8Phnoym",
  "key15": "38it8azK4nyVv2ZMrJxdacDGRGF9CJMXnxaWtfshpfNrs6av1xKozbg33TPKB73djmZSYH6Qpt2sQXi6gEYhYDm",
  "key16": "3bj6odVKwgMNzkyVa3VoEQ8cG6Kf1VfRbKPdu1AtuZHtEDTxLPvm2KbQqzpY26J1TcNageuWVvyQFqH46nVbhP8r",
  "key17": "5LAEWnhY6sAdD2htxFvzwSoHeFHAxLeDWWsQ8cLp2MsNxPkwB7xqQWke2s1R8pM9RjZSc9c16588XKDatydTjEa4",
  "key18": "5WqsuSRxivcWXVaojZsHC5zxHRCBaWN5UBKhWe1FaFo4xMKRGZpuVaYSmJgPyuGSwXrk7Nk23FLQHMvF9bCpVk3M",
  "key19": "4dkYbStXbW3aAPPyaS6dK1cAqEiBKMV7JQG6eevZ9gpb1X5ZR7AQonFgx9hfYaZ13SHNm64wLhUuUVfM7gFmMnMS",
  "key20": "5yYnJwsuF7V7Kx9bc7fQBPmhyYidBE1KmaJMcgEBdtu6oaUYa4EpoBQuM9MhbsAnr4caGbNZWZWxe3p7Hb2GppGS",
  "key21": "5inrG3We5em78xEiBkrAXiYc94TgQSciLMyjDPcF1N2zZDYVcSA9eA4rRF2hbvA3GRrvQ3Bj1As62Uhm1R21NGvd",
  "key22": "2U6WRso7iV1qjLRvUxKAoYpd1Zx5ag5vkC8RMbxhAMq23DKXcCJrSeKJRKWWyN59JrNjjjW5roZChxj7zZ8YkKsZ",
  "key23": "4NiwAHtsxsKWUL7BFDzC8ZwGWzTX2n1v6wTTma7NTGAbeqjt5yD3mG7mFjkoXXXtE8rka3hR1y7C54t7DT2Dc1TC",
  "key24": "5aDiFty2FBsGPVba746cTsicecYNDzneHJ4fq8CdCVGWYHQmgcuAnmoh7gmo2YY7CzrFChC56Y7VkUdX5JkX5zss",
  "key25": "2qMidgsBuQ9dSzmszUh4jdihUM1WvfPxWrwmeYmhXBLDfY6uyr5fXD5kdZMSQDveheNWMCBTHdzcu69jArR8DdDH",
  "key26": "5npsf2BczeJRGXzW5cHLDpHXbNtvgBrHcpiKZVEjaW2H8xPz7zbXZQ42ja1udqdXR4DiF7vkyhn3QPPyKX7r1Cn6",
  "key27": "4myGV9idhVvHEsQmZmt6KnuZNNipupKoo5TwtniBFqvykxLBN8Ky2458AKkons8SKZ25ssEbgq9mvtykFz3r4Udp",
  "key28": "37QiQnjKWoRv1KxX3uXujuhSaDgiWhe3CYgg15dTRAjnMDP8mTMxx2Gupjvd3aMKHgnFfzdoiN16tiNDzG8yvsSD",
  "key29": "5GvfmfMtUcoESoiPkYa5HNAdouS1zqzWiNVm6FR4CEqigBT1ALGAmBzjJV27M4PD16Bfw1QfQodP6cgPais26xw6",
  "key30": "stgM73iH3B9G5pEpM3GuYzYPPmJ16qfRZXav3M3Q5uUVh1btsmKVUy9vEFq9McuEE7cBUoE8oyK8t1ehndd1o1C",
  "key31": "GkFkyJFmivWtfFAr23tipkR5yMFSmi3DVDDLGyfnnqQRRWQqiz4e4Wxk8Wr9J3QEWDfZsUfj4X6E2cuTG5fxh7N",
  "key32": "GUWsZKzRwdJqBq8Ndqg8GtiAidYHRtV8aogHBvtoAW7USpzUPrjNPXqwJ84d3PwkKYzcbSv28Q3NGWWHZBxUVoX",
  "key33": "3yf4HaFJFcRZJgHfzqDtdG7eVpejRp3DhtWzR4geoqVZUBUggcxnz82Av266n8JbboF58HzqM5rg38J4c2y7BSa1",
  "key34": "2VZwSUVN6LSn6rxL9u44hdZyVwP6Jnmo5NP3C2o3DL2WChBHSHYFfQiShLL68YsAxvtpSDDdDjJDuAN1vXZ9ZFsM",
  "key35": "3kdz2cPnqv4rWgHBWVBDzzsrsUCAU9dQDwZLqQHJPyDwGgABnRZMYJ6BJV4Yd8Gt3bXRPRye8vFLwExN5kSAx5hP",
  "key36": "g3ec7jUL2d5ykBL1wdTBDChctjjE2xTb28w7Wn3kqvcgzE6CfpHKmzzTMm97dD2NPqjanh5TGc5pibMArZQPYoT"
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
