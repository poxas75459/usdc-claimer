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
    "5GqCDWA3waVBQJoQTLe5kyiWco7tL1Ece6hzQF2j2YXRcRVmrndGR5ecoBkhms7KjfLF2YzL1ppv8jzGULFqfveE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGj6Q6TqP5NtbEa6SnQgsdDey6wkD6DAk5xhGQfPKe6unAt6H6uhsHBREWVabUM8YoEhi5QAV6nuvWbQDMF8eyA",
  "key1": "3MX1JtDrgjZykkeMkhaB9Q1iWR6PyYuasjTwJY3E52on1mhQHUNuVrEQPQt4P7wKKrVUCmnvpRui5fcB8VY6U6as",
  "key2": "3AgEdsdjrxVW9MTxtxnEqiLtYPBraUaig2Mnd7hboJFuK4Evorzm4Q2di7CYVWpi6bRh356ekTQEudxyLxcFPwu1",
  "key3": "QNZbyWycpDMFBatGoZfKmpQSn3fzQTrWu1CG2sYiP1TKuG9RdS1RDmwiGtYme96RMHVVL4FJZyNLDRoPGdSHM3N",
  "key4": "6Dgwxdfaa79wNmCrEzWRTKQwpgm8WkVk3z3e2tao2PPG4sfZxD1f8yWYhWwh4vvXsJsjxKnRYXrKQQFMouYfs5k",
  "key5": "5rw4VmeKVuLScu2ouH4ucmFUbPVAjQHCuQnoJLugraRTgFJw2999RbFNvo4MJBaBGZa5dw9GaEX8z1jB5m8ziceM",
  "key6": "33NT3dZC3tQJQ6X4FiB5seZmnHvMBUU5fF7vGh3ct3Jmb6zsLnENELqnD3fqjkSS3fgqGPHcbXCurwN4Kw984c3S",
  "key7": "2iifrL2Z3kQH4RMzeyR7J5sWLTKLaNWZp2pkmKYbGMeAo8t7p124sq3e52nM7DNp8ns147wLxcNMQhqNimeLMygj",
  "key8": "2cjCbqYkeZ7nxprvNyiXzY8KZ1L3X9BGFHuMxEsAkAfJSPGe1nBNfjSLQDkgUjHMNUHpaQAySWtAxDx5ye3n21Ly",
  "key9": "5B8i9JzR6nXbKjufS3EqnFYeRLU1u5Rvc7LWFsPyNsLypC1hYzaR16GM6xJo9yWdrofH7k8SqqbjVH4UbQiGReUN",
  "key10": "33pYqaDV7jz8yL7bSRSRpiYfk6BuRQqNqeUozmbF3y5yvQ39VaUSzF1HVj4yxvU6UaHyZLcr1TbFQKCDN3bvJJY8",
  "key11": "4nSQzzYA1YJHkySB4i7xchHvUewmAEBXzVdXTcZdCSuV3jR3ZZzLuaDFvKGok38Ygbk5NtP4VwQbpw7joS2bYQPe",
  "key12": "ux9HgzQGRigCahTAxvYEvsWxpteF2Cjw1GJGKC9YSYS4p2VK4c88F6nxDxas43PboLzFJPfWqjauSMKHr49w5zk",
  "key13": "48grFHrKVprmTaj7qyGuui3jQDqwQ6NnhDVEacR5qs4m7JE66KK7SgZDJeENeyRxiQBZRNMNWvSSL1VKetv2DQv8",
  "key14": "EXdmFGgmRdeaT8p9cvQqA91mVHdy1CENLyb1sVosUfC8S4MmTsUYs4hLMACwvF61Fmscyj2m9QDdeFX43242nqc",
  "key15": "2mizvVD9aAb1wBHTNuAcB6viYaGAdfvDpEJHo7XjXSw9e3G7QmzN4kwNwC5Zbqb5p2eAVnHKqsMRjXvGxqG6Awk1",
  "key16": "4dCDG7mVsxcvUNZAvnSpoGH1g7vbab5YguMRGEuy62EdtvaQGJetWRErNAa9PmeVhHNGsLsUPXFazyFNra3ZPScW",
  "key17": "2vWcdkHhq6QRcARsvx9AN65G7rmMxNzoRUb8KsH8FSXKGjNJkQaErmkGX8JzpbCUVqAx5hLQzbJxQCtTJSk1yR4n",
  "key18": "48ZSMoiHWA1Cx8qUp8ZFB8hjV46hW1n1UamC9r4Raro7VKGk7ajUDiRxbQtGhurprpsEwiH38ni46X7N8ubic7ky",
  "key19": "38BftK5dnroTyHNssLfJZaRoR1YPnxXHyqNiMFJSmcnHJ1NrQUejUTJ3AGQk3Y1YuV5HjN6Y8cAuicM2toiR6KHh",
  "key20": "3VzPMbK96UrzbmASW2jYJ8Nn3VbJ2eM6TMGRuYDr4QPX7kPk3tvAGjNSxdTmzugM5Y4BbgGPkDioBENoVwBX8PBG",
  "key21": "2LQzZShSFfKEcoaYdU1J9GZfBgHbQngSZb9PbwsC5wsKsNq4JW2qAuCtDARH5N2xtQiio9QzdQeFREtXWETBNpMS",
  "key22": "3JwBEsEtoT1t27PP1gFEmekkJrr2ieDBB4J4FviQdUXNLDrMiJy4N1Z6BpeUb42wRPPnMUdeqEP4wGq4bT6HcrVN",
  "key23": "4e6eLndRyjsHzhWGLA8DKKmfF7SnUZwTb9J5vmHbUcUrgUZBtFTPsyzi4JT23393SkiFLmNpvPG5dFADxrq4yKEb",
  "key24": "2RJ2xQdofJcZHozXQbMFu92y1ineDm7QEP17e1aM8sNbeynuLEoA2NbByCSaVYCv4oJCgVNf63HETtgiASvR4fw8",
  "key25": "5h9EaiPGMK2v83tz4t6qcFHsP11gEiWJuHnQv4WgUGNJybXrSE13rLPTfBfQzcX27fXvJgVyj4pY8K1fozDD3UfG",
  "key26": "yxzG8R2kg6K5UhfxCWXYuYqr4bk5eTDBsMsqdsmpg8t6cMhKX5eroNJGsRNHRRV418BJaszsR8zjt2zxm9EuYqA",
  "key27": "jPcBvTrcTatW5AhqRGc2sdtQhr61WumnjcsG3v4L7JpZeFqL4xs8RSww33smHRjLwtaoBrh5q2xJkk3iXw7rK4N",
  "key28": "z136V5ZD7DwTc63LbHLkZgwH8S6VAchiYksY9aHq98MrF7VMmm45UnLJnTiKhQ5GEbjUC3Vw8Z6H7cVGxr6et1K",
  "key29": "3D4ska63XbpJ3eFhgytDvjHoFYTSsDUGciWyUtVKfG2hBMra5QkSmnuXnSDR6skMsZ3u9fr7WpdztzRRjWAYTDCK",
  "key30": "2CuUdS11uz7KEZsHfNZPERmwgktCpaS7qhp7kqEMfgwmSba5jJhbJ9xSLjWr9iYAHJwFoWTYpnFKtKvf9CfjYWzi",
  "key31": "KPKNJPRDosKkXNRFHGpzshTJQVoYgTkhVXhADJMQjqyuUaU2FLAzitGfWtWTdUwi5FTqPLF41bpAkwgAGivGGtS",
  "key32": "34oS9tXNdLWjPStw4HFHA8n4Rxdoxf3GwPrurAaSh9rikH28kGcxLz4JP4p2XjgYaiW5YVhWQiQo82T4rePjMUxg",
  "key33": "3yyL5AN8esCeeAw4MKCWSinJQD3RKt9PgDqtSioqqfdeJRed3CMopGSuYpGzsUMVxbqB7qeA1mp3kf5Z5mCviwhf",
  "key34": "cas4Usner14NRWuiqJcU5wpsHmFG88a6qBWnMC7SYByUjE97oVZ6Lw41kgbyqHr7FUW9oDH5v5Y3V8XCrbcix2E",
  "key35": "57ckLFPzwxNyiU4E3faZ2V4wr6nJahtYAxh5vSD1MjumYsCwE3fT1Tc7QqTzeNNzPwr7FQPEKiXwawhjngqgmD8r",
  "key36": "2jPn2iDqU9SFvJ15mU3etLfwJ2uoBLw76VAHJfBdiswrjT9SbkPztQ2y6MB9WQvqW74kqrAbbiJqKCM8bHB1SmdX",
  "key37": "3YEywTpAneBYaPXC5r6aPE1MjX9saQeLb3sPANdoS4ekQRejC45BJbq1VzZzyT9ZnWXh4eXPeNMdwALWkrrKmEdK",
  "key38": "5qk2QiqQTqTPLNwUEZwqttJ7n5eveZgSaQZJFPmUNKPxdqq472JV952tHrMSeGAL9nPE9NB6qQQxsJLwQDsPs8Cv",
  "key39": "7n5fobGcnduyR4DohJaaEExLrFNrh2jWfoZzJGazCgdx8CTD62QLSV3fehNk5NW38mbxJoxtMjYbKDp3a1Y2w73"
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
