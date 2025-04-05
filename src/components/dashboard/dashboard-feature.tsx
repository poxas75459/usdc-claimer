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
    "3eRrdHztKvzseKsMzyzZtQ2b1fkrW6hfQDAynwenGPfsgfJmQRw8VArLyQhHMPdCkWgnayNhunRuXZLzGHD1bm5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zgH4c3d9nZmLK8GMLHbDDVxvzZN9UEfjpJfVStPUMS2R7atkvdvmYLfcqVqwcNFC83CoUtsgw3MWohCnmMpwTA",
  "key1": "2UAwG47MGVWRUzsuL1FPNg3z6XAC7x5xtLLatiFLHkszzYdzTZGBnNXomGsUEKwUtjzz8yPpyZaZE8gNy3HoS8eP",
  "key2": "1gYrY39NidE6rxKGrYQvwEYnkA5jQXnAQ9Bc7WVRRJRUXVi5AZxARsYLkZfZRjCp56tPrHxBy9NFEfC5tYLti8v",
  "key3": "2x5aqxTPNroAeExqkksnjK4V7q3EpsnpGY2YQ52irABUCLJG8Dod42BgPHc5p3Ft5NaRqyeicvPSJFiHBMjDsA3V",
  "key4": "5jqjkWD1aRayXZVHsCtdjKbHfk7geUVob1dasU8nikNPTZiP7WCV1u9d1PgaPpVAKGyKjYHQN8hCYNPm7DihVhny",
  "key5": "3voysoQhLj29XozLzMj8XKARUWoXXyic7wpjXA4hiGF4b3X7PViNVmdPTnknNmDRz9r5hJr68UeJxGYosa736PRt",
  "key6": "25g9mofFe9zkNoxcfb2M6APrZ91snzCVd2HCiJpeVsj4BxzVv4ARiDHipqD5MUGaC2HnTQsVW7sGuWrtE8LSPWt9",
  "key7": "4WEEajKE79s24HpVeSNrdfcbhtXoca9jRu62wDBU1MHeXLhWKfD5KyZYqkNoqZCgHZ2uPUqiwZP8reKm97nYJz9s",
  "key8": "2isJXxjE4cmLutSaUszXjZdWXYiVXWyS6RevZ5rFtJRsZpN3rRx2UWMaPDxQ1EBGSdZvS72BgMhrBxdQZmdYuDnS",
  "key9": "2FFmaJCYC8LTgdtQnjWtrWjRCCrKdpEVcvsdsAJwV4H3qRWNNuTZeCRXiFaE92hKfCC8gwnde8DfeGjfmUDRhDtE",
  "key10": "QxiHHfYRSYqMnXNW2RwnF1KPtjYRLgxcSrvsoKC7LjnJoXDFKiyVSXxp7RJ2wNZFCdCEXGnUqsv8Gj4SYYH6FBC",
  "key11": "37jibRbCw9jHFAGaucbSXC3PT8HTo3ubUVoefJeu5A2JCQ5cELLJdoBgqgMsWJgG13smeDYS6SPheTwkoLA9n2nW",
  "key12": "3LAgB35U5QU1cYoXedG7egxvsTRwfVmjpnBsV3SygTHKhJhY8HaSmLkZdvhoyoE7E3LX7oVnMkXJJ7uTCrNsZDkN",
  "key13": "2CHHV1yMMtcHfqfm4RHbicTEYbuu7CFCXv1qoZMMryUuEtnfXCHxrEB6kC5jGgA3HH2JgmoMUbhVpJGDPFv61Arh",
  "key14": "4SXPPUJ68roY1qAJd2gSiomRcGtn8nSvCy42M8E6chWLQpJ7XNWdTLZEWpMKf7RvZygjrvHL26nXRVpzt7RobKjM",
  "key15": "3dsTcjZqoL2LuJv7dYTiSY1Qvd1pBA6YnYzqhYte5xc5Hz93FtshsRaBZ47hr2HGBeqyd6t4b2f2T3ijAHC3Em8T",
  "key16": "HhUYdEkXjizbTxoJk336BurFNVMN4HKiKinSSihTe25xQkYLatGUtw4yQhaN4PyKByp2TtXS7CkVpztGy8LGE3c",
  "key17": "21xxNyjV5WU2TkdNofm2rLNkUxYEc2XbnhniG4LejLwxXNMtrpkgwZu3gkNCmPDVC48WACi75KFw1BVU9bQQmb49",
  "key18": "4xAptruURBFTZ9QHytabP3EuobaoPE8C7j4FZZ3xv1Tcf171CHhsVLVVbUbjQsr86HTQJT9gWuy1U9r1aST3Xwum",
  "key19": "22sxn5WCv1Z8jb6Sa6hRAJ2updxWkAuHPKVnwUYrwRX995uWoBoaeN4HFz8v9PnzT93Q37XyM1GUjqhwxXHQ3jQd",
  "key20": "2PV9cbwcmDyndkvy4RLu1pFWAViemtpash7JFvPPpNdvwSMcTcT4HjnmpQRfb7S6S8cYt1Li5TkW9wrU3VQ5f1gy",
  "key21": "5TcVrLv7MsossLAoezJ6YdgGxphWtzb21RS1U7VVqAS6P65CvmscsaHwvfifPnTQnr1yFtXiuABV3AnKhE7bi6nG",
  "key22": "2j2MZ7NMjeTMJ3ySSmDbWXnQ2d5bcjGAjQmEzJXcpjLQmGEVEntE6WzRMRwTEs1Krhv3hVJmJ7uYLgnxGQf3JGsc",
  "key23": "2k3NdJkSqMFSiii97FDgpWF78fpsJ33h5DBr7SHY5JHuUsSweRQd18PdW1gJ9WK4xaLT2r66qShfRbvortB3KzsC",
  "key24": "3mtsXAnwmyT6RXVwvVbCpUFDxk9CnRQhwUJte5vYHjn64BxRdhbiF8Km9Bp9KUxvPLEnHMCRireFsKe2WG3q5Vi2",
  "key25": "5rEvcwMj95qvbfZCBejUKks5wQL2gaN2NSicD7vUw6r9tmu1P7kN2YtGfvua6z1jQJTq4iBWWQTWE3Hv6JPbtvRi",
  "key26": "FfLJqn13oDQDDuPgDQkbqjLj7sHxX2K9m3MEBS2v8ftKDPdsF72LGXTz1Li5oTjRWASnrFMbvrUii3xZQXkvUpa",
  "key27": "4hFUeYYgy5nNKfHf7fRo15GW3yZkcpwyLCjztfdF5LqeiqJEcYdT2xCGXsTJ7G9Vpb1EBkJNXiykKkMJNiprcBXb",
  "key28": "3C78wyELJzJZHgkQC4t9f5gcmLp5PRrbMUvTgdKL7RA4mcxHdxrYBcq2kcyFkBKBnRaT1RBcMSB8fXSzefq7STxC",
  "key29": "W3ut11zMgzeoU2x7Sa8ntGDA91SQVvdp3W3YDkJAB5UmRF89NrFcRPDqcTkjQg41ZQj3ngi4XsDjnkomMdBcBqG",
  "key30": "2PYT3wmAYNmYE4V2wTYCnvQuLRY7FVzoBQZC4wcx4LRe7Zv6zdHrjgyqFBJRU6abWNEY7V25YtBzUywepRxiLsFa",
  "key31": "2ybTWDbAEnYc5aQj1hdVSYmHhE21PyAWKtdJEgEC8u3kzHxLPh4P9u6HjytSrG19qG6hJAx6RsX5xe9nd9T7bK3r",
  "key32": "CGm2YTisdREgEDiVj3MwejUaH2qVAYLgGQ5g6QQmyBhzXeXNuMbMopjRNMvnKUHrSszuthgNSunxocabhtkD7LD",
  "key33": "66RvvyZMMHU2vCNGASjafGMC2D2k6fRxLfybk31NKiZVx8bWqwHVj81ARFgXA262GjbeAAhnt39PdoRiqn44cRQ6",
  "key34": "5kkN9kgurubHkJvCCTrbU7rBnEq5tM1a8EyW391pRjJ2oWgUTafBTzY3Q8sXwza8xMNXChJcREVn3i6sXr5MFRfu",
  "key35": "V5nSyVARYVJQztE3Fe2LMDUwKwisjPMgYiWgbPRhhYTZuz7KYc7dNvTGFEM25u8VCQuEz8Wt6JwB6z1QgcdWC7W",
  "key36": "5jo81aWGkQm9R7vtm1VbMoRB4FzzVA9iAmztCgkF9syqFeLjwvkVpca3apUnS8NsqEffeXVetiv7zP3U6hYDmyKq",
  "key37": "3xCihHZH6UQipkPHgCYJCdJf4aG6xAHkZmnPCtUs7xGvCDhRfFmHWvpGHT4MStTFpDQ6YPQPsg5ZiVnvB5rxRZF",
  "key38": "2GdrsAb8y6FuyLZc4H54JnLvJr3Papa1NTcrGyJpdomUYBxpw6DMibLJY4dKhBfUwuk8ojw7nzaBokFuY8HufXeq",
  "key39": "3u7J2GChsUvUDZNHaC5f5P23ZzxVXcySPiiU4XtNhDy1A6Pbd57wbo8skjsusX9v3WdZ6KsPp6cD9q5TZzJSnZkz",
  "key40": "3CcPqJmhnVZ2QSCH5iQubS4QTvpVGAZi3J4TYF7pkKzoaLkP2UkohPsnrwzZNBhY3hnLaKonzqwkCd3RbNQ3jVkq",
  "key41": "34VXBkEyT9QaQqpLvjmo2AbTEzvXm7QXkkpnP3We2m5GU8e3XTYugFhdHxuxqkuoaDc6FDQiFF1u18cFNWsfUcND",
  "key42": "5XYbVngFDrpUswjXhi6EXQSYvnuJuLN1PfTT95HrE9CbkVC7ciFdpYZxunaSQbBd4pEJDEmEi21Yt1HAWnkVtQHC",
  "key43": "3NmwUVoy7q2yM5VuKazDuvafz7wj61vzpt4qxu2tfUua3tGp4ARxvNKEV8yCz99mU8327EchPMh24Bk2zREP3orF",
  "key44": "3BQQHLT1f4o7AhogDY7quUkwnG6Z41TiqH2dYwFL4zEjdMFfhbPHNPgNJ3ai8uQUKmSFmtmBMsUiQhR92XgKHv3Z",
  "key45": "T27nXQCt9pLXHdVhMWbHVY99wVEVofgzGr8ByTYVja51scTSRkeSfsDTByupdLGSDuW6VqK4dsuuzqS5XEavTDN"
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
