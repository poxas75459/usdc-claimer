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
    "1neeSTucjxzvAUSeJWn29N8jPkJ1GWifBb6Pqd5XBRwB2AtyTDd4W8PCj61HX1mFM5xmAUckBtbafdueX8EJxuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZkmZRK93rUUYY4YdoXCKgK27M9GctiR6B8PhyzdBc7ETDey5NexsDGgFCeWdNyPAuitYUAHjSSGRsvhiEyZ4Cy",
  "key1": "2Jqe5QbXU8xcVNSpBcueyVewqwqbHgPvZ86U2JUHxJ2fPcbm8FhvdguPWB4RiZ1u4egFDw8X7k46YdMFY8sqCfhX",
  "key2": "2LdGdMUNZJ3U6UQcrnW4z2vTigPkLHEiBW28TEogTKerdpMBsvozAKUuVVRJWRUfGdQphfz9CdFgLqyUqdb1NxKB",
  "key3": "2wUbn8Qb6tAJMSU137kM7eCdzqkAdkzZFHHWx4UxRQad4iY1vAvQkafsPr7NcwiNeWywCn1nc2Hzv65o2s3DT9vE",
  "key4": "3WkHHExEsJc1Yo5u8uUCbBMm38zkRvapgdw7MNhYfEvQekHD2opeD1UEXSdi2H9C8KjFiFCEmr66234J9S1Lpquv",
  "key5": "3jbkjJirispP2gtPVpxX22AdNUWiYK7ATJ7Wz2xHvZAxi3dFggoR4S2Tn2NtVpTeY9YugfTNYSoqUrLpccZiGDn5",
  "key6": "3e5Sev9YZry73jDMiC6ybbmoEfhdYimm12hLa8PsxPGh4kwxEhVtjaFLGV3N7ZHQvUjnMBjakhBfJfqBJjdoACTL",
  "key7": "5acbyk2rjPghQpYTptquYedCumzLXnUob9gvfMXw5Vd71FATga1wz2gU5e5SgVFFGTDGi2KxxmCXWSCxq1u4oe6t",
  "key8": "2fWeE41dRLzhjQcfsLrspZdoe9CJceHc9Tkjyq336oYPu46NDjiuibhuR9G5nsiCMoTQkwSPocPNAUd29ZXtG82r",
  "key9": "3B9X854bicrfxkyp22mXkkftPv12GkA5qxqUyBh9fx9U3qe8N6SbB2KHFKxTrBJztYASwXLR5CmxKsSKeU5enxSd",
  "key10": "3b5Hi67X1LyyrVwDRbD53WHSvzaAatqNNkcKodoz4BvBDrs8bm8QX1ztgxa1qKwZoQN8D1GmF52kNkkWpNq621QG",
  "key11": "39iVbAo981sse5u3Hagc7CcVvt1sgQnpyBzeHBxz36fqbs1JgW7AkfT5wNnqq26k9XREmxaZMFtqSVfrQRtBebQi",
  "key12": "28XWUgoS3FHd8NXD3B81V9MGSzw53L2udTBYnvY9iM9yzAGEWU5U7GMwkvhnp4WJAg1z2KH2d23UgpUtXSK445DE",
  "key13": "47Umxy826mHwZRoVn3Nha6EiwqfSvcYNh5YPo7rAaRNfzsujyCJiuN6bczfLbkpoEVwMtQyWr26zujHduLCGdmfi",
  "key14": "2CQepQPPL2vVpFXVK3oCEmm4PynwuAEkXPcdL69D9cabjnfN9dTRrzGa7EoVs83G1kpbom6VgN3ADTM95APyaqby",
  "key15": "5fE88TmPSMJbkitLY94apfnYdiih7oRFMJjSgoeaChgGpTCQRPCgtvEDFGo4H91v1CwGTDiDC1apHPKkSbNRTQHn",
  "key16": "4WJbFNEoGeNJ2rQDZyntd8zpTYGxSEa65pf382xrS94YAM87P4wJF3p8aHpVasKHvViYgYDLcyjjr683wXQm82Zb",
  "key17": "43VYNfy9KBKAqGuUkfxqjQQeqCYwdMTm2RPcaDf3BRgdpG3LpyntPJ8qhL9hYXn2tADaE7G8fXodr3mHGMp68pCY",
  "key18": "3Jjq3veWL2UcgBKXckgHZ9o7RaypWb68YBAaKRqwrHRn8N8jKSZYuK88VgHX62RHr22zidTpZedZPhHVWmiTefDz",
  "key19": "3wYTnUVYkan4z3m94sJUbiCs1U1Bvk9pR7LFfpSK51Y9x3WwtpUGTcF8QUyxyaR51FugLX5euqP6FzG8hqh9zzMe",
  "key20": "4fhQoYUXGrwKJA2bQ7s5FFNFkvqE8Gmhrv7ZZdgjZLyoBDkUSGTWSm3Yy3Nsaph1BGPcAJYsJZStGuXRQ7EvxZDY",
  "key21": "5h7gzb5991Ac6bx5pw5gH5ffeJpiJHQz1LzkMxqY4jiqpwCWyn8AkXEc6Ttx5Fv4QLDMyAmYQSxzDwQM7yFyQU2E",
  "key22": "44FvvAGrFEvjN7prGVsKw4dFMchjzbTnzW7vTJtHHUcsbuS8SDQzywkmQJ7CRMTqRyLo8CgA3gVGk2FST3wiAyaK",
  "key23": "5pdFN8a6LvwSnjnZs6WxHSWoQUX2rD39ke9pmxbdE73z7Zbk1G5BtKhxDT51X1iZxjeQ7ZzodXcnAdAcaFFJfd6",
  "key24": "BBjjcE9HYDJzJWsuz7SPcJ6fWMTi5cySkeK21VFeKgWcThUjrZicWQ4kVtYxhuaUTfjzmt3tE2cL1okX8pYRBrX",
  "key25": "5LR2KWGgQtvN43MitR4MuC8qaC3cUgYwxNkwgLoAG6YkqehNxJSB8mNYpgVnXFBWdMBayHdGxiEUpi78XpQ6g8wE",
  "key26": "3zxcHsjZgXyjDNZvLqZgk6SEbG3P1VyQWxu1it6fZfgzr26kK1ED5CvERhbpi5gY2BhxapnmzDDZC9MGcz5t7u9t",
  "key27": "54iqnvN1jdpuEKgTzRvKqsjfk5aFmndLj8vK9gRpdf38CD7ZBAXNRvV7w3rJYKYsQEBeUtQd7ftkaVtx2wQgLviq",
  "key28": "2HWXivEb3F4KUsq36R1E2rx1DsJTZiQxafgyokAraKSz9ptVitWLdfhNHAv88LYcpGRA9n1ZjUnUr5Yp9A1oGpQd",
  "key29": "L9mL6wEVS52UJkkVKzRen4cPBBvrvn2bBfEaA21b4CZXiEzPZQFVjWvdEdF6i35FVi6pJwqdXvmmhiuNjyD73v9",
  "key30": "5yUerFpj4HwwoLSxaFXuDUQyenvNP2e39gXkXX37wCoETVimqM49eKgnxyhJBmwEQuriyJqRqm835UMY9q5xyDbk",
  "key31": "PSmBFAnxtuZNH6vtVGB42XVgA9oSkzy9mDkfn64urAA79yeUrQVCKrNsUMo4zE2fPGREL77i5jYtDy1iWXYN95A",
  "key32": "2tLG5v9s4dFz5xJUuFrCM4DprtVV5dQKsVunxrdjkKkwsPGnZLdjHCjLPdj6GrHqzVtH8ZDVjowAXQxGgAuxEJji",
  "key33": "466X2AiJfv2t36oY26eYseRpxzGKakEq89Ej1GYychESQuG4xGmUooThug6EPVzuYeppqdGJiJti5wncZjutuTZg",
  "key34": "2VMj6K6a9ovvCgZR3pnJoRuQ3KScSpHho3mBqZyMN11yyveBr8YhHGFTZi8a9vieqimUi5Qdfp2HbvDMxsfKndxy",
  "key35": "4K2v6HzQNmes525LB9JnPrJ3mUJ7NxFMUkhB1BwhGdrkyyoCJBwrQ7r8KCaLKexo1qtLqmmhcvjMP6G5b42uNJet",
  "key36": "4zeZWP9vRnPF32qpdU9ma3LFjxdDF8dymWtwc9ExcxPqaZwN1zqStpL4mGC6Z3fkqSciDHTGWwikjM43Kff4P6ZJ",
  "key37": "3cQw3e1P96EJ2aruWUnTYNWLLhsBX9KhoCL1fPYqpdtbrZUbT5iBt3CrDtYibk3XaTGT1MtZUWstbS5bdi7ahnhS",
  "key38": "3TkxYXw1aUHVUvzvayaPqnvgxNUpo6BmJyW8qJVRwuMLNE1F9ar7Yq6Kxj6hdn2Z4E9whyUJRNXNjkvcicqW2ypi",
  "key39": "329yhrPSdWHGTg12eDaJecoqmKj5UN2y5bEfkmMvyUYf1sGaABL29BXdKE3Te4JzokkXQWEvtQnhYB31CbmLVain",
  "key40": "2k4PkPvTtAShhdJ8H29sVhpy569zQjqWKMP9BX7uc2F3EC5UAzGsR59EHVarrFP68KL1JMgy9ag25XK3PV7hCxnL",
  "key41": "BiwwSMtb19CoovvobwM9gHJaY7iQwwbVZ8qucwzjDpMVwfPca4wgTtP9MonjmKMs6UizLK6YjLXW6nVZDhWuJU5",
  "key42": "5kaZjq7teLELtof63YmRHzoFSQdVzAN5mBZZPUZM14Mt3A4sNDUa6U87fmSBaWYXamEaqui3KWVL8QEo6HTiPaC5",
  "key43": "4hC9Q35mjkmNWCtdhpu4v6kPWgLJvCtinJiZJoQCQfvF56uuUdV3KmHFvCEtztD82de3rLPuDAF1GMuQVZCoTM5B",
  "key44": "674DQZvNPHEsqvbGJsnpnLjXNKCxR6BL7JjYwRcmVUubxsKC75cXd7QN3pmepNhm4s7BtLaaxniVfpi5GuRroAHz",
  "key45": "3ypSWqr7UNU12AtQE32R3xfZmKAZe7s1XkbEn3pubsRN3LphR7gBsdmiYnVN75njbKJahwtdatWnVMZjvPFoqtXf",
  "key46": "6ssuH7MDRF1sM7oQeYMCLTFd9uRrMkijzpz3CMrhz4z2WgCEmsqCh3aTWVxjTdkA2P21u6FNHED2FkSGaoimgYa"
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
