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
    "2LeWRoQy26E5DXL3VfCf6FUy17SNZU3vFmUAknbdwBQHHUnsYfXssL3AxFrfEB45NXRWNQheM5D2KdRFT1wxkcKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7B19bss7UDyZcPZkrXfqQb4DiudR9um9vyCzBHCeBqfU1p7WjP3GsrrhihwW7hWLYb2cP166rzqrp3gzV5TYTT",
  "key1": "PD7u7cknACqCPvVuWZWCmgxGoRDLBrHuLMXsQGAsVytiDZEHH5sxf1ZAT7AUh3WRr36uMwTYTJ8fCq9BECSyBS6",
  "key2": "34gfqn9Q2S9JNERWXpvyRWGt6fGnfmwRTCp4BdhNzef77CBYVWBKD9ya1Xj4yKHmRMHfDfpaxiHaUxE3mL3yMtQf",
  "key3": "x9nxd3YdD1223QdvZUUeoVYKbTWmVpMUFaJsKnWAPZJD9DevYEkcqMkhsVTgo3gRepqzjkpLDzbobHmVSGdi1Mc",
  "key4": "2TYnNWxvGeLo6q3W14K75HEeQHQE2AbCKQZ4yWveec4xvAHZ2DQX1Q5w5XTbicpJJ7DPknGon9kvcndDKyJMHC6m",
  "key5": "4kfxghNydJ8thCRQCi1oy1rgDvwGjvUnDsHWnBPPPdVKJ7ap3iULgcNmaoBxTHyRM3zkhinZEh4hbKvME5xM6q9d",
  "key6": "4uhpbBVH8gxSRp6zmAXbEm4Ree3QeGvT6QXwbq7FGESrkqbfGvBGairq8JDk8shxajjKk8TAzpM3UpDkPk3EZ4eD",
  "key7": "5t8bXiaDBm8ebqbomVpAxmmc7qvhu6oPtmvLw8saMuEBY3At58THfDw5Qv2DUz1KWKNusgj9r8B8uHpMESbrbKXw",
  "key8": "2xKUGd73n6tosGMiUDknjQV6ZNvt7Rjuv3YwhZ65QGEMyMCPi1mu7zKZshoerBYYQhHbSfnFNmTaCqNUtYdYTet4",
  "key9": "2AQYe1BZPNb1aouGzYjDDu9uJVBfs2YSshagAakqpudGdH5PsaZmfT7fvzbbEYXSN1h4N3cq1HBiwvke933qix24",
  "key10": "4vcgqAXAhVHUu618DxySpop32dFUQWuK8LhZwXCg9VXRo7QDyYoudP9c4uKgwTSYA5xN4WYmRyijJhk67a4NrWQy",
  "key11": "2vmfDLzGGh9nNKX2fjz8RAqKqA7GbZDFfg8Y7VnvhL9mzcsKo47S8uNUoLdUVF2Bt2Fe1ZbZ3uMSPWLK3RQGr7b7",
  "key12": "4vKU3fMr9nzNTxmBAkcfMNeedimGqBjFaUqCXHp9J7eurMBGipdfhbpohaavVq9PnX1JpiUMZp1DGutpGXzdds5w",
  "key13": "23YmUaafAb9LsnDu4jAKRDvRxoPjRTLvTRMGktDLKKeHqaWXQ6Z485rbw9xtE2VMZgQxcadMRMxWGib8Uv1xDBYU",
  "key14": "417gs9bkcAz5QEwnNLC32Ltsrw4un2HkLeV399jE3ZnmozC641qSndsaCV5BbXQ25bchmQ4eJpq9QrwNpmcSJe41",
  "key15": "4wY7aAj3jSW9eRfNLUk5jruSuPCk3A14aDgbBuBDYxY1QCAikR6vr3tc4EHhpbMU8njLJrXNpJNZvQDZ55s4VbXH",
  "key16": "397LrPaMTc9ymtuXVapDsqjdfFbe99GaDA1PyFpTaUuLvMRVhXTW441LKjLdKkXns1dW5x94zhfKfHPgqkCW8aFL",
  "key17": "4QDCnsRL5DyAcbHNbuoebZZFbad3KHztbfUH3LaNDxFqpab1BrUzeegxLjJFGANpczBdMtmuas8ugpp2WzfY1bwV",
  "key18": "L9EPEY5xgLh7vo54vA1hZ3iohWZVJTW3WHYoi81FntEdcSjS9nkSDxHnAhP7vg2YL4g17GepNT1zjTqBTffdQ5Z",
  "key19": "4iiSzv1UzbcJupMLwQP1DidwS7UVCfLwDKwZAmRYFAizHK76Ge8CgPr5qFerzzdzwvFYmw4n7h8VgxadSxByiYNF",
  "key20": "4ZsB1giyPk88bYPUPcYUyyf7uQqFsMXfXrcYvNjQ7gBABpumfASbaGbnU82UnrSW2vAQc6UaYbDk5YCRKSg6YePn",
  "key21": "26DxZdgDZDiZzWSKLReHDBHyCMALnMPPzTq7yXxtedZz8H4UzhnkCrhXYDba58T1axwhJVQieRYg22qqaVTb3xUS",
  "key22": "2LWzVhUJ6Gg8FhqJPw8bDCKVvCjnnP8Kh4h9YKhstUmC6cD4hsoC1jYz8dNh7SuTvirDxHYSmLEZiEjuWEkDCYrv",
  "key23": "4izENPGDxABkr4NvSSaqv8RwQw4DuaYQkNJuQFUQooDBTNKhJyY1LpWGRZ8DsLhMGbM63Mbm3YPZfy7CBJVBEfdW",
  "key24": "z7F41xjDSNycfZo1inU6VU3aR2UtUVuQ2Xj86jp51ecZLxmpqpmHpVBPvF5VyKfu2S51C63eCjuzpexENRi9icL",
  "key25": "3LrrUrLGzPLTeEh4CDMk8LdTDMU3fpJ8DZKCTh6UcMbG6W2jdRs5MooTsXd1r4N214RGDg2KWFkjwYg6qRzvfPbx",
  "key26": "3jUBieLLkbgMBTa8sdmknn75nFHmG2rMCnQBApfnwMqityY9MD1YSn2pTW3x9SeTkgBgosnEwTTBxJPnhhUx4mrn",
  "key27": "4WMxLgeHauEjLsKbScZZ9FPqZhf2Zr9VAg2yGHFsGdboPBpJs4aDCT99KfeGvJ9xdAkaEsWZiqRFMBhc6zVUdax",
  "key28": "3BgKf7ooxHJe6ZFRSGJhnuLXgCVFQvpYr9BNYLH8LeLaoE84eGRwQEj1Y83rTPuodFo6MGYETfa6L7X2PYp5HgnN",
  "key29": "4CG2t5Q83emGhznU549oZFiWKYLxqyVLQEEbttCART6WdhSN6EcAF8NYVpoUijtEQZuDPcjMzb3UF75o7nLRw583",
  "key30": "2Wx8Dt4enuxjyrLKEMVCkspNHrxkipZLLvErrQhvSaPDd7qMG9bFkb17PTMATtB7EYRnJw5GD4WeLdJXSuCzUZeJ",
  "key31": "4tqYGCJypFNfmLkAhkWHeM9BnZMdfnYWCYJvhHS9NjUfCFXDLKThwTiMxkzhLBeghpUJqrCCFNskcHvdFZ7UY7Dj",
  "key32": "3vmkxx1sVedLbxUVc4S8EmpyJjVj2et4s3Rg5M1U4LZnPAvjQs2NztuBjzzkHqtAQpauTsaV4o3AyjhcxMk27dyz",
  "key33": "5A172PW7YvPF4Lyzx3bho6n6r3vBBBLxq5s1FkggBNe1bVxyiRKvcLPetcUD9gwhUxLLYWy9EUeNzWqcFgLeVZfK",
  "key34": "2uqEonEikuiTWBykGhkkRFsogdg48DXkf9yuYxGQiBJfFQWtQgmC2hTvG1A4GBsRpSuEuKZZK4si21Xa5fyMGnXX",
  "key35": "4ZzRpg5Ht92fXkHCzePEGiv6n2Qp2Sbew1mtut65wtoQdxU49WV7ZYuBaKCvjyq42cWAXrgUf78ZUyuMAuriZE5D",
  "key36": "5dXy3cRuR2Xp7aE6UTkBC5vaeV2ne6MrDHzC8yWqXodbbTba8ZXP2R5vrgju5afxf1a8xgM8YzrhzHyeb2sNwgT8",
  "key37": "2twSNkru5qB2vj2vT7zqQxHNj8RZ6zPXnT3wqzH9MhFkubvd2sVwhcmmestG8ajmn8gLVqMXSco7m32usSgr3cDm",
  "key38": "3BjeXdToF6FWMwpjXV6ArNfgyLMEa8poLPoznDTNwtb6DrrAG7YahKRTPZuYZgYzHxKwqfQSpSQahnmeK5UigFCS",
  "key39": "5z17kPMJRDQ3y9utnB3fRUdNBdHvu9LxexVWSYt7FXCdjc7Jfa4Y2AqfdcMd41FZFtmHBuRSHF5ny56u5UbP4QEP",
  "key40": "2y1z1uqnPEQ4v1BX929PhsHQFYnwLAxKTnzZrE1dkJNMbyNn3SJEkKHMFY2W7P14FkM6J9ebpAHk4LzYhj8EaLh9",
  "key41": "5cjegoAcu4g4kiJvzKocxdj4K3kwM4hhFKJBHZqZayiYpygEPjKRXQb4mzVieq5Mfe3fNxFvWkbk5faSZgqtZBG1",
  "key42": "4xWxfXJUnWBa48Gpdxodkp2Ei2kVKtnULEH6y3hC8hXdRNAkRGXuN84CAvCzrTCGdRs8tX4UQRtmWTbJB3ZvFM57",
  "key43": "3SR7C3VdWsSJ6Hi2cZKpZHtpxbffrC4La2evbfAbCjCJwSwF5JdAJyv6tUbmQy1rGJdbQE5byBDNCh1NEjDHqLqJ"
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
