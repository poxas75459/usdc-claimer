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
    "amRT6xzSW1fnnRoZ8veuAA5hWLpfDZE62AzgxbjrmRbxAWf4TWruKmrVf49BGpMuwMRFrCRewczfdTLtWhGpywj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3355HoS7doziPLVREo6Zm1Hy7cYpRyRq6QDu1Q53RpdgFpcNzKkBHHn6LWdaMJBg4rPsGrbG2cHYzTFxvPiSzrNF",
  "key1": "n7DFv3YGsZr9kBcqm7od8ghcaf6U8bhSwSN2g3Tw1Rm1LGTBXLGyjENny737pdnfzzoBuXcTwtmi2qJBnMv9XJD",
  "key2": "rNmSnirW7eo2LQCB8VxWcczMdobBycLA8c4UGEyfKAdjg7S8toEXgekn8iEabpnScNt7y9FozkQsanhD2gVhpgt",
  "key3": "4wZMwiPgnZdbHtpcSjQhmwyHeBE7dAfr1g1W8hCR7r5CMBZY41VcYLmV31FdeCArKAccSsYRnThdEXu7Mjh8ipoe",
  "key4": "4G7m1zokEyUMXLmXZHMK1ez56jMsNSbMVFTXMkWyoWLJW58wrwhF9gZkfayadLMhxDw8SVjPctKqZb2cEdiXp64y",
  "key5": "54qvQHawfXQG8GHv1o8UCSoCbzAYUWVJPZYx9tKvZWqihyoVrSzzB9rSW9onBHSPf1Sbcj3Y1FywMYmUzHLreKN9",
  "key6": "4JVebbyDuLQBRL8BZ6RnuQAgiPaPinN5iFfafP8QqwQRf172ByTFag9wDydyGu7qNYHD2vrudYvu7FZ1uTU38F2F",
  "key7": "5qv95gwnCtfa1JyRnCz89MXo44KAs3YCtR6SECqWgMrcbMHUdHfgrrQPkHfU644VnrkkssTdFpzgE5cxfEJF1Xa",
  "key8": "5dKePpF6CiJY4btbXhencXkdxB8BZzGRqppd5BuXbNzmvuUE3fKCj2UycKBu9ED88Uoyxy5sz7tYRN6Nn12wgM4k",
  "key9": "5eQAXeNTiDXV1JrRhRvFXCKwkK8FyiCTXqirGKm77N2n4Np1afpvhqwYgZe6XC4wb2B6vhb7TFD9VRR8BgvTz34T",
  "key10": "4SMbVNemL3RBi3ZRmwm7uqoKSQR8NTb83FLA1gvsWopxvF6sa4xosccrpmLRAvNKRUnuymvPziEpcBARak5w5SSQ",
  "key11": "4qUfrHqYqQ5QAEUGTaeYpm1G6172QFktDMCKRqaRiemscQjjsotzxYgxwT3AYmHAqcyQ7QBe7xMN9bKNssJvr35q",
  "key12": "3jjFyC8PE1TSqwNBc1qPcShDnkVVnZCX96jNxcbd7AYoUhtEhctCDDJ2Nw3ysoTSWTyiQxKjd69aLwJgEWjqZK3R",
  "key13": "4Le8uofRcPC5wdj7hZ5pVccuzqDu6mAXALHQQVKYxZ4iJ5irGJ9uyji4rYZrVAzvjCS8CiEzJ4Dys2F2vyDJQuhA",
  "key14": "499VaSsH5WQsHhF6qaVsmTmYA9ewDFeZaprcLQQR2L5r5jXHdUAhU7MVjuv3WUQEqKWr5uCTt2nCnw2EH8k3aZXB",
  "key15": "4UxVncjXZ6A5Rt6Yz9kHU7MrGt7xanXx4tPX95C3nzgKG2czEtW6Ur2V6MJ3qwThbMq8HcDn8RmSem9h6vXCT1sA",
  "key16": "2CrgjxmtRcHS4HsN4q5y6MykuvDpzVTnjvc9FDfdMrMjzZ5McXy1gxBEqTv7zw9bF91bsSixXxjeBdq6nirFspaa",
  "key17": "2PaRUFw3LbtyqMzorbaQu6FWfrki52UgNVcTKMEzgVJRnRo4U4XZyJJqpvRiNS6UjixpW87ieBBGqD3sz5BiGszJ",
  "key18": "26ZvEx9TYHEQmnjJdabcKDGMr4xovh6JomUEf65mVq9pMFLpeACXnxGpTU8wFptCQCvnLAHW1STAGrAtTeySqD79",
  "key19": "3k96jd2jdqzEdz9xTWnYRTzNdpx7czL2G7BG76QMsj4siNrUXEFjvd67Yu5h8DB4P9zbXaXguahy2V2etecfLSA8",
  "key20": "5b7aKiUtDC5DYmXGuh1pz9z2jxutp1zjhtPZNkPQL8Qc3XAsox1zxVCvEL8cBx61FgyUSwsBnMKaHPQD2u4GkZY1",
  "key21": "3TA7o5mhCDA8LZfPSJtZMof7ATG3Z545sHrR8QLsPRFD2H8yyyykZpmNJzZs3jCCp1MKuGe6j2jr4FX3e84i6A2b",
  "key22": "3rPAodP5Tb6fnaUemLneHBR8TYZkKP488qjJ659Dri36T1oD9863Ht6Cm2UwwbViBhEySsGRkv7gULwnTCXzNH85",
  "key23": "5jyTKR91ABhAGJatur7o9BH3ofcaGuxso94nWoMTHKqUtKS8NKSXy8BjrxcZft5DDEFB75TFyGfLj3GUW1SoZdt8",
  "key24": "4gFoEazz6kzYoM7gYsqZgqP8qtraindYx1QbKnGxTc7cJYzSH7nLdHCdqYtvWTwYDhwDUHNrRijUP63ds1g4SYRg",
  "key25": "TuN7XCCvGkSeAu1bz4szPnHuK2bDiKXiwB4yEz3yRczBrGFurxfNywhiddUhdNsKmt8LmqpAHsQRUs3fbCeRrJ8",
  "key26": "5yCxJV4YHBUDJBevmCPb6PbY4Xr7myttCoJKzfNACJdboGmUUHpCvd9Z65os7fJfBoRW1GKwbNQ5mzDwdkSxUEa7",
  "key27": "2hfgcvnmP9HbP529Q9SPSD29M8KRcwtuctFGj16UPntDpUV9JAEDbMPXpNGzpBJDJG9T9RRhESow9M9AdUCZvCoJ",
  "key28": "3Tcyjhu9m7tPjzYYUqaMuMMzhWHSCamyxCmqGGJgChw99P6eP2pZDVQxUkAm6CzgaFoWAJ3Vo5tWkXfWdWjjKkzN",
  "key29": "3WNjpA7zQ4oYzWFjTCPmiaxZBFRq5FEs5AKbdBZYaRcdfKxmbgLKNiqvNb7wFLB12vcgPdFWTBvHsLFeq2woCM6X",
  "key30": "3yVeE6tjYkaMLmDn7qCuJANEJeQCHbThnYtwKLQQNPibf8fQzcY8DAymJyRkcocN9gJs3VxeWpZQ2F4ovxoyVeSF",
  "key31": "2ZEdPWs2boRynrSJW52dGGdBjA7hUtQqiVny8ZFL68eRm4RDxs3WJKNden52vPp5fPTu1jnRezA7vWircZiQxn3b",
  "key32": "54VQLNMK3kMuT5wTPHBt5sNgYxMb1ByTuq7LqzXTfnfxWFE7jmt7jAXwPUQy5zCNy5hkHTTzHJrQYcNVWcafUNEu",
  "key33": "trXQcSQnz5xXsFh2pnN7GX4hEhMBRTx8zPRM1oGbh97WQaJtqMoFybqjR2FLvDT5Q7HbTCLFmLvCwg9GQqu8xqr",
  "key34": "3fLJnMKkUpFdXNhWMfTb5XMy43PpGpLUN6SFKkSe7bimaunukE1AJgtWEjRCQuUv6KW7bt34PHWA3uvxQspYo2Fy",
  "key35": "4L64g9LW1ZyXPbqvdvLT2zg5GV3F5S3nTm12gF1xE4uuQ5mX7yTeKPLCm6HTdoDbWh225dC8EYj3oahorG8w4YyY",
  "key36": "3cRrbwE5Yb7rnuQwDUTd8mDBpbVqKTER4eZvQT8dNcDYZPjdTHJH2VXBGA5tfcteHp6FFRySCMUzha5qEKm4UMXx",
  "key37": "3U7yCZTCzd7ZuHJFz4jkKDjqZ6dNU1HY9asVensQnzH5drVhVLyVUsgbLvasFQs3DmsLHSiX26Mb8qBoeRzuQ4Fv",
  "key38": "3stT1rmNo5Y42p8sEhDUSv76r8HgbhhaxFoB6jSktGE9A1VmY3FF93qobSdLAk5UZ6mXeguxDfrAhLsxs2om6W18",
  "key39": "4LR4BzWgD3rZaRcsUj7sMSUkwwY4umrWJVWRH1dcRzVq8FixEWysoZXQ7b3HtWyd4fq67EZ5qsCp4C9GVK2hYdgN",
  "key40": "4CC2171t1ESxnFAK6Au2pFQQ83f3fQJhE2CUkPrvPGwBWJ8V4iMGaAXtHrsCkno19Fs9LicE85WBMPfxiJwmMT3n",
  "key41": "bK66rmgGGMXYP1usoWryXH9s7g189TzJiK6MWNSY6xi6cJCyMAWKwYZ5DxqMWmXaR2gMxn3A8BVaMTiEEWwD6bB",
  "key42": "4v7YPJ5EmEs52neG6fGwmhEqrdQ8B8iJze5v4UaaCEwYL7m7BxZ5TaRzuMpLejRUinyH3WtKWgCbarD1bcSXzLaq",
  "key43": "47UCVYDYsBjRCfzhvwzWc9JWVrzh4SjKwt2AtY8U18jTPfcp9Y4PSMkwh79GNn8dzVmr3QT8c58BGa6aNtMrd1Ej"
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
