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
    "4qhtgj95jZGKSAYtFnY3JQkVDRoHEchmBnUnwLnpqcoiN7XSPHyBajZGkBiTmNhdt2NMf7UkfBTiDMhLeyzqzcw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5iReVk7QpBWzAJBZ4BDe3gJ5ivCQyJUvLsqayxjbjuzoPZi61kvWaaMNFEvVuW9fDApaoYg7GqSThLKKK9G5h8",
  "key1": "59A9i8w44kv8orjvJJ4ihxt5E6Pi5oGjRhSXi5VCGHtFkcUYyjiVyg6K3jnhYnzu7TxwpcaMNhgUBNoc4WLY4S4M",
  "key2": "4LLwQzPkNcf4iEN7Q3KAfDg3PA3dVESeaPLGGXyf4KyVkMHipCE1jS3NTsNQ9aN2pTZ3uvnq39n3BGSPSaMSfmXv",
  "key3": "23fty32uFXHfhqU5bMpvZGSkLvmbkrTM7Xyaw4DjW5DeA9xSD4mRrJqZgYvuoYmRuemNUgYzLEyiXGi5xj2eZLVF",
  "key4": "3713DH9VDu73GszPDkSU5oReBnqN36jev9befkSKgcyHtHXhaYgx5SDPKUrjrQwAekAG44zPttNZ1ANiQyaeu4JD",
  "key5": "4B7cFNgeRjp52gP87VRfCJN7nTh4AoZBmB3J5oihD4BbQ3ktzoxzcywGPwKRC8RAciwTgv38JTBvBPhYTWg4kufk",
  "key6": "2tDDZo8ospvkx4TnQmVNvFP4ZahnS3Jx5rf1kJnxnCwXP1Und7yMy6JRf225JVGVKuwh6w7GqYMQMqxs6iZfGd8",
  "key7": "idktSA7YL97Lkk2VGRuvXi9hSYrwoUr1jQBN5YY9qAeamJU8HS4UEsvcSqbHfftEBmmNSrWFnWhy7SUP1grArLf",
  "key8": "wqruCuhuoaxYthXp3b2nVzk8a6HwMsyBv4Kv5Ggrkv1SzFga1yxAwki47f9LT6hQJ9MmEDWdDUS81qV8TG2qhgV",
  "key9": "9iysU9K2iGcbBmixB6LBj6rP7xpF8h6FDMYK68PXGmUqHHaXK9bGE4CnhGGT83ir2w96WqDXRRt8FGmEjMPeT7m",
  "key10": "3o5TUiRoJC4RuBsZ4QQA7JJyhp8G2NRvLTPT82Nn422ZnnrCGFTg5vLWX96Vwegp3ZWKyhUxNkXkZKB3MQDzDcnt",
  "key11": "2weUjZRwjLw5mBsxAZC7FkVNeh6w9MtNKQ4EmGgcsjM31buBDyq3C6UvTRyCLz3gb8jXtqBRE3xVefPegCXNPxUe",
  "key12": "2HnnqntYFvGXbuvZbm3QswhJp5858vT5ZvLUaaZeDf44MvUiu58d5FGDmUWDVABGumgG9LKwEgwS1N8XY67HKi1u",
  "key13": "5WMXAxHVmunhb4ihJgAxfR3GFEZx1Esf1cerzgY3EdPrY7k8PNa87aatz6ZmZEJWUJCrGQBBncFRq1x1YsBSJHYk",
  "key14": "3DqSKUutWchgXV85NjbAKuPJKN2PJLKo6PPuadRArQ911LmgujqcMqAxbRJ6vatFwECZg97TXDEp5M7viQmqs29h",
  "key15": "GCuNQZhLhNqFY6DTiyqK9FK2yyam1tqbUznQuomvcKLKPMq2vBGweZMu86XThtvq3Da1ufbqdXuV39rDDi8c3kc",
  "key16": "67z9hp2ApkLQawo36TZUhB6ECeeR17pMSq4j6VmxvT1gRH3poD8GyQAEQzjJkPDkxwXYpnwqA1PWtQyUxVHvrbN",
  "key17": "3gA2oT7RCdsFDxhFCF7eYmXiA3AsBqCGP6ULJvMH1ZdGsySJQMm9ooXquESsqLvwJkHVoktnZyNFTsSuhq3gzpBQ",
  "key18": "3dTHYZHW2ZqVS2fwVRHvEw3jAQBKAZSPWWPEjatEVdUL9VEf4DD3DLxYeaWp1M3cn2VeWJNz443Xjs4NzqVot7QA",
  "key19": "3HCUDST1zkuSj31AyG7xiDHNGUooyRMw18U6UfFuwUFp6JeEvUoqacHByMSNX4m6u3PidJG7UtBk6xaJS9garng",
  "key20": "5pLqPhjNBaF7jGQrxPbsM68LnxyayRNWepMetkLvZ7gqkRuRnFtAxLkUCrDQyacvFne1L8XC8KGYSDQKMaNptFNb",
  "key21": "5uxHUzBgGZwe9QmLRnwmX6g9uw364Gc4a1uJ3T8wZKWciwaH6d9K4PpV8Z5FMpUz6CJ8PykvkZYDr69RCmBSZax5",
  "key22": "2C2m6NuX6Zj5AruQKFAjK8G9K3MCjgjp1QQ9CPs32ghdoZyiNCjSgRwWUDfu23ZfDTFKJURWCoPNJbvJJyUXP66u",
  "key23": "28gZgcfQaqXt3Cysncow4VzRkQjZWAWnCJMdBiUnpkvGisYNMrG5g4iXTQYURjusdmG3S6FL271MJviGTuz4Z9jo",
  "key24": "njZcNFe8suUqdKQEP2sf13ME6C22pyvQw1vNLXcRCWXiV28fvMdXUZRLf69QHfBZQrP98BrX5Ku9XrC2rWziix3",
  "key25": "qoV8cPr3ViE9qgniosnaYHkuKbSJjAudjU73uWvSK1BPfM4HvpJSSbckny1XmyedebQkR5wzYTbMziR9n14Tmun",
  "key26": "NXji8uYciUz9hpLxxCUU5t5MBEsvHDLDy6GSCf8RT1NKNCT2W83hQxByfPR4C7PdaBUGo2wSSCsPHZea4y1Mn6u",
  "key27": "q5hAzpopfuPaZfB3ctquxX7nBqLDZu2Hdz3y8wCzax62LVTXG1RV5T2ohpNSo96kcpX6ZJhEAazNphswcAEyAUh",
  "key28": "53PVk1ehQzp1JyXUAMN9z6hPzzgzKMfFyxfZSx7YoY5pvkFf8VGnTDp4WaH1KMW9ETHk9LTasZbvv5QxB8hMmL6w",
  "key29": "64gwmraTKShLPEtEZAhNmqPb9MWdvJeba1C5z1nyxC6qP6ZzuJSD48SgUGGNoBBRtcLKoTwuzjAdvQE7LQacE25H",
  "key30": "JTosSK4yLKykp7LXLtyDE2vzvEC54udWoAeWXmRf1VcSy25wteufGRkosYMr6EocPrzb8iCjnPMHdPmysvRiKeD",
  "key31": "5xnxbzHKC9WBf6Jc1Y2zY8D8cAA438sdSvMVvXB9rvuVLypWTrEyzE1dyPupmzJvzNtn4AdFSxB4y9GJUTSD73RY",
  "key32": "fuK7YG8MvVMACrpbhpPBLiZrKFrxfkVUmhG6PtQZiGj2WS8AL7dkhTXc2D6WJ4tRaMNXQK1F73AM9Q9ysFmWqFm",
  "key33": "CJpFRPb4XWZuHJEFqKmsPVE86C2WNxrfbcWbnLpGP95NE2K85ebVwAt469b9jwjbuk37qLqWKexRrprLjXgfqBR",
  "key34": "2Y9KjZGuYknNvzfxoefapDT2c28JGjaam5irVXPSA9rrnfMGoHHoueSQ2UJwscE5wZc62beduedE2EUWZv26MtzV",
  "key35": "4m4BEytj42XuXPradXGiK9VLu6EhzsT3eDruaGwFwyzbqMKJafMoNt4wbaNG5Swd7THa6D1u6qK9bcYmdNPMmzXD",
  "key36": "3i1dJTzikrR4PyMZvCvju1cXK872r8zVkyomNvurtQgQEkyfGx5PnFsJLChipFT16BLpSHanYPBELxhBsoRxCvRa",
  "key37": "4KuCyH32CDr1HWvm64n1CB65XUjfNH6iRVZG7wfeEWXkXd2BgrtRBBzCntw8BdxqWepn7Kr81dLLXm1UUEK1ucWf",
  "key38": "32Zxy78mUT5UskJr4sN6hkaYu72MWeSRzZeBqrJK5SuKukdR37sdf5waM9ZreyXWv7AMnrXwweBVxxJzarf1KtVh",
  "key39": "39RQeSddMXMp91EWNBVv6fon87nEKiUnHEdmdHWuaSwryXzA6K5HLeHvspQ5sarb2LbPiEVDFHoGGqth7viqRnEH",
  "key40": "3ZTKocKDxVHP3YqPHyfDJhtjdirXma3bNxe8xfdxu7NLcL5xmFLFhXYfqwn4GcEW8VaMGeecP4MMYUhPqjkq67Az",
  "key41": "4UVactkPxdNUFpoyLAwA6di5FbNVeUSkFgdCNhDw6xeqe12Wz89RVwkv9ppUU1dRCwkRKmETR9s7E5Yyn1b6skuq",
  "key42": "2ctLCMGrAtUiEn5qi3vmDNma8m64rGLDoMVZNFc8CkQs9d8Uc7GzZ539yZPcVd52YwiUFhKPzacZU2XvvdgM5KDr"
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
