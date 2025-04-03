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
    "3aEYUm6oeE6s52v2AwHxmor1srwzPd8N8AZvxQrtQoCZJdtquhUiij1YofU3zny79fmcaGP7rNyVfCizCGbh4hUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tM4qz9NtSS2RxvZPXz8Z6qaEttJktQiC2122uXujSjRVqwuMKAMcvnzsxbvDWge9QjUmuepTJLvBxC9vxuw1pMg",
  "key1": "5oAK47G47BfR16MJ4sseEL9Bxh9JVX5a5texxHgkngcPavWod57YxFgL2caeaZiMQRFHEs7t4fprVU2Dyo8EAADe",
  "key2": "5RL1oVJmGq9Lo8eiC1wRXJbraNTkfhHZ45zSt6WuJ5h1XpbqFENjm9eMp5THBC77Z88gbRKQv5B2nL43EGCoFAoQ",
  "key3": "28Qxa12UQrfmA8Jaw5A2Cyq41V5VdBQ7y4nANheWkyPtHsyFoRsNdjMhnwJwmXcWbfJJt7EEAdK82AcevJfneYj3",
  "key4": "vjWnXjY2wbNJv8c1Dnyc7zToW3aSmzkd6BxRGFNS9mvFK3BRGHQ54KCDfqJiBckmhc1bhx6CrW7cbZAXQe2hkuB",
  "key5": "4pboQSaJZZBLNQNwVje8QTheRfWUBpP8La7kSoxvW4mdDcMVMKT7UMRhirvuxE9KzYWrT8vd1v4ZGn5svdgBbkwN",
  "key6": "zQcHxURtEfpDgcPKJw7fc8Yfhvz9HReHjv5UMQ1DAD28q9YmEmshrxoa4KMX84J5dfd3NuFQa7snDLm11AtrFzb",
  "key7": "dbUnG98fUHNeiEbrZPZRb8uJNLnbCGasFmeYUfyf7Mgd1tradqRvqb8q8h9GFAXyhtqK7anfEQpNhJ5avuqTYvd",
  "key8": "67DwhEQUi8ynSZ4piN4p5gv3Rht2gbCgomP5Mtqov4RxjzMy2MH6p3bmowQrrxJ8HucR7GfJYkg9YrBqMnLdUfyy",
  "key9": "3Kczs5FxBffvhE2PfK68u2pqdzJGKRoKNitJvwszyM6K8He1AV5oSAa7eiCGAzt7kxoEeugpTWeGJPxz7Uw6b1HK",
  "key10": "4HAfXU9ZKAfZvCGJUhRWGxDwsG6ZUPswqv11Mwyv9C9CaEDProBBmAJT5qkUE9mMrLpNQD4vqwPmNPxXNQSATXmX",
  "key11": "3vNPajy8B9Neo4LWd8yABfebotLshSDVeXLvrjHp1NSgEYU2Wy6DH9DGRmfwuTQmCrGvnmc14vgu26j8fKNuQway",
  "key12": "62qW7rux7iAbekmDBc1E5f1aYBEGvahebqM66rnENg6MwDBXUU96btvjSn6gVtmio8AAUYEuTQFacDESG8KZwymd",
  "key13": "5CQcxeW6AfNfKbP8qtsF1HzuiQbH3GFmqjBtuAyaxdg7srjCqbj5KJkskkyVzj77F5G4D3wbUNnntTqHiucxZMoJ",
  "key14": "BHG56QxUh8w1sqZUTFLimCHART3PJ8zu5KsUGkP3UbpQ2WFLHPquqHz2oYWav1m4SutCxm2YUoposWqY9oE1LWZ",
  "key15": "4hse4Li3pmVg9yjTJo5d1fRVfDUG71RdefkoSniVe6AoKuKJtncH3Az28cxhXpy3wBrrYkzXoZt7XMtHonRG4Pwe",
  "key16": "5kJ7r5AaXWUt6bKJyV3aWtMVsoTvXVugQoV5ve2cUvVgpLdcjVp3yBzYtUu6zMynsBKLXBnLB2cC7LzxjUvw6t31",
  "key17": "5meGfySAMDhynDf4CPsnWQpLcC4FVdKJTZLGrDB7ohMsYTv4R3TSXHVPXZWZmSkaJKxbTipFk9bVfkixxoGzGR7",
  "key18": "3WeSCV9WkktxQ9ZMfSyCXaQ4GXUKx63mfq7rRCkq5h9kfEzacym8gughssPiYzZcba7fCtZqMyT97vU2f98YU2X",
  "key19": "4Lwf7tYkxJrLKm5J8METE2oUSvQGUdyUxKgHhnQLUJBPoyktGa7V9yboowURqHrmuSF3co5TBnZBRTun7ftXA2Wr",
  "key20": "4fVD78ymi96rinQKKjvtt5yvKonhzPFGzeB6nwwRpNeBNchFyVud8dLJJytH7GnTaNBvnofsLvtnMo5EWL7MYkp6",
  "key21": "4cKtxTGqMrHq5woVqgBKbgHo4hMrLuw12JdwVRqUtSYuUjhpTfSSnG4YfhDJeJFp5uiimPjujvnrqHHCuAAU7igf",
  "key22": "3F82E4pJvppTbwf8UJZbyGFk9bigvCYorERWQu6NPjUdMAmC7T9iVjjcm6sDdgZ3XQ7ba55nkTWzwYfqGsHoWsPF",
  "key23": "5W13U1xygVrL8kwrxiDAjPELyGa9Wp3XLAjrr21Yqhh8tGapg4e52dyJspUXonqipCeAVFpBHLakZMNGzmKVmrie",
  "key24": "4KnwVKPkBFAtLt5TQz1HgwQuFy6Cs4m87hFpKwF14Z5UHKPvVbGqfx641RqtD1joWR7XHFaAf5mYDPUo3cG3rVBZ",
  "key25": "4r393XMVqSqZssqxHDQNCGmzMsQX6ReWuUXZb5UmJ7jQTmUVfkfjvqHWjT5AokAnafWi6tf57kCKKne3oAshyA27",
  "key26": "3TYvDtkntYmgCY9U7LQj2EGmiDM8FBd28zGKGGW68Y7k8FbB57JtKJrF8gYPd5yMkzKgSVXWktWDXRCpTcSbgW1R",
  "key27": "5R1NPcPt5sghHNUuoufXVsWZ6wK9UpwUT9WjNUY7ZuVhSLLj74HG9CSCx2xVPPDqd88rsg8WVy4zJFXUfnXrc1fv",
  "key28": "3hve4zUAFS2MRdAu7PTUENSEzZh3me9mtJ2i4Zq75oNfZj3YM2AyCWFLXMrR7jhVkzA6cEeh4XD8WDhxR2S4xfpS",
  "key29": "2dPunvzRzXJ8KzCnf1WteUw7sn3gUti28EKJZt7MCuEF4SLK5La9MtSmQNxGdzbbnrM5YTEo8RhqARUn2RqMrjsw",
  "key30": "2Vig6K9fxvZ8wAnSzTKTvE9LjjganEFXSrBDDiLA9vq9siF9Y9dXeNBRrhX9q41KH6WnN4mJuZ5UJc47iEovMVkj",
  "key31": "3vrcWDDpmNAkSkvZR5VHMQxRtrTDiBbtwp6qhDKng6TKhCp2YXaHgBwV6NGgYBQ5DUEafAg6pAcTyU7qjsTqKdVX",
  "key32": "oa8heBYrYiEPk8kh7tSaMDN9TNEsskaTepZAcQHfhyr9XfwZC4q8YxjbUSDvVsrQbjbnwESdkt2vytxvxWFKXrp",
  "key33": "2K3bYAU9tC1Q9PoNor3644JSFWqtNPZiUYgw98RyqhaS7kW358okSYwddBVnQWsQHxyTdJTTj8TVBLBqRWpP9Qj6",
  "key34": "26GJxq2FibHScmVewUzL15Ec9KbXStpQ9freWmC1jEDH9TfSi56j6N7K16ujTa9UUTtU48yxHkQAmyxKqcu4ukoZ",
  "key35": "2hZXoogsUWvDNdiKkC6vjJLTMWsHZbwZAprmRCFtvULMhjRYmuck8u3QeeSwgePpt8RiyCWuikmzMUk19V6qXLd1",
  "key36": "CxrwmDxLjH2sTKjsguwBhEJBmSzNv8hhH6QWezYn4HrhrQu8abFsEq53BvgyJB3LSQjNeVHrrxdw7vzVT1iJHGE",
  "key37": "5ghYoK2Vz6pMTNwfXMPUgy6DpgiYi6MqMmjJb5GXJjREExQtgYZySdoT8LCPQXo6P75jYnmguaw7h5n4FoeYZZ5c",
  "key38": "bV8MNYgLJZBDn1KywegCPjzgEQdxorhZvmXiNwQcX4vQjTp8D3UmCGbMDXeBRrUNeGRdSaRqpkqPDG9YU6Undrh",
  "key39": "4M7c5yCzCwjxwST3mFc9CJMGJr8S3McSFvP1Msi4vZySUK8ARqWiHT1CjdjV8pTwxdA9b8v3GsEVZccLueUeJGUo",
  "key40": "53msePK1wE42biqQYtc6wCfPrwQ9huWjJ3BZhPEQhPDMGNq41RxtFJipYGjgFbHqJAUr2RkSRhCgTQ37hwZb16Wq",
  "key41": "VQCDY5u9qydk7PE5WyCK2tWoZB4Ve2jZPU5hYZRcuXuBTXoSfTNsaXNDiasjyerq9bVu2s4suzVHZcgYio1c1Kb",
  "key42": "2EKwzpBUR4o9XuxWe1rJrPbCbRz54pCG7XeRuQh9GPzMTz5A86HfiWiZi5CgTJqwY4rxw7XFrBU6dd27CDuter9C",
  "key43": "2SETpLHv4jDNFGpkiu72Y2pFtQDJLCfPU8u6Gv8vLTDjgTrbGcDgC2XwT2NxCpA6sgSgYDuso6vHXGAV9CUx2QAA",
  "key44": "3XgDfQxRNCBt3pmTMhwzvFWxP457v6xJVM7btCe1v8dH3xyXwfZeBcZVWYUB11YNuqs9mXWzcXWW5XkniimcVhfj",
  "key45": "2wo82ppsDa3PL6zdGk4L5maKr1pomksmraweuyjHAYFebu1VFCSBoaF3Lkh2647LszSprZiCMWdKqnVvE5wuc4kc",
  "key46": "5RhvAzDm26t2pfANBhsVz74zV4cKvNNdXAsDg6Q59JPQziesg3QzHDSW14dVf8RDKWSunBV52TuqBMs1ErdhyGnP"
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
