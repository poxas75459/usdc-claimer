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
    "5DJqprdLKoHQtKMgC9q7zoGVktqz4UusnAv727FYBWDxL21twx1JZXs7kBMNZYh8Cu8yxPiAtt6oXJKoJLsV62wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368HS9GvuoUjS8EqUGtYWr12vh15DoMNTgasfZxvnD612Mvv6z7xy6QJ3DqcK759cpnSLuL6J2m7U18c2o96js1e",
  "key1": "58SoWW6gegDsdqJHGMJvS8Burkzw4wGn1A1pJtXAcuMJuFRDjKdNFGVihHG54i16NibaB8oPaLTtZHRXxBb53znp",
  "key2": "2sFRSCpvyJAzWp8FRCQ6Gu1AydTg4AfPEVE4THipy6aXThD3v7BpnX3UN4xG5No1TuXMJ94HLAowpdwiwMqXtA2N",
  "key3": "33Uif9KihzwdGnF1abURuHCKDbT4ypkB24YARAG2iKtWc7RbE9kneoNJo8ujCMkRwRTDy2E6rjtQQhB5okD81c8m",
  "key4": "3NpjFeKmAPC4ewYkxb2PoApo7hHtwyYquFrECcMxKEC8UjeU2o4z1VCvxmEU5o4AtSsC7v7UHvEKmPmYcsMUYicx",
  "key5": "5h5S5YLQAAU6c1tz6BdjtyzJ5ofiiYBftMsrFFbQP4m5jvMBkCG5JNMt9EgSvkCtawB8DAvncpxikEDY7qWZzwar",
  "key6": "2QVJxHyAmYC3bWMiBuEBJ47nKgPSExFiw6Rwb8dT1Kj4miCMivwhvnR7eKKD9vwZJ6MKHX7jSJyZ9SejtgrWcFD",
  "key7": "WjTHGZttWuDCHJbuGTLH6znrnGgFZrvQ7NMNjWt8g4B4pah7ypCAjj9yzvXsbWGkygsRWGk26uq1UbeyD2p48rS",
  "key8": "2pw56wjYzgcvQ3queUvzQLjzoydPx13V4w3Zhf5stZXQoL4AWPYbGPCNfkU8Vurp5Q1vHmm4NTeaj2ADDG2sXGpH",
  "key9": "3zM739EioJFZqHRzhdKYLG4TwpwuuodbFFsBSjRSoL6HpXhqgtmYJcqtMQAwnSvjhefhCV1NuYbNmCQrrfcMm6wz",
  "key10": "4kPrmXQwdzsjUD5yMSw8LGuuBgwWF8gu2JK7LG3AQPkCWqEe3FExW3JPgRrXQYke7arD1GwZNYPzdmDTeELBxBHa",
  "key11": "5LTyj2LmzJKrK92zaRaeZ4K5fojM7rL4cLuDqp7agV4EsWSn1nYQMTbMwuo3RUrPkEnkQMh6qmPtV1rNpReG5eZB",
  "key12": "3iiq8J8tjZmcDzFweP9D4uo5u6x24pfqqyLRsuRsw42FdHummbHMNCtwgYp9fGccPYYbX3tHzEkGxiG9ACZs4EwB",
  "key13": "9D4XJA8mpMxktF4FJWQWhV74tDtfdiqkzaHbKkbYWfnZsWn6rsxq2frjB1yj18Xn4KCkPadqdRiqVxDNRTYZ1d6",
  "key14": "g9iVrGCP2wbVPqyxzMtE27oewmjM5kNQCSy42nmCg1Gcwq2QcdvovSk1q9Ayo84DAqkRT6wpCx4XbQkrLSJkHth",
  "key15": "4xizvdxSE1V2bcmEzGn89FZ6pC7bZvGVb895c2B5jzZVFfmBh8nwpFrWaxzdDo719S6s1KzCQyrNhK1TDwk58ZPR",
  "key16": "2A2L1firPVVmQUfcRzSAhu1aWRZeUGXGmzSPAKoGQfvQAqcmJHsdLtpjjgYDdFwPEoqXE1WBr9spBZjFYHszVy2U",
  "key17": "2V8dY4Xy5GWwK2E6cUC4f7yFPu6rcMgEcKBdFTAp7yXYLpWxMZCHVUHHeJbu92ynYeH7yG9aGMb6q19YHno7yHHU",
  "key18": "3XzEQaqySTSparWf2iDb6GtuMjXwpddNEz78m632ZNrwZiGSU6qmxbauW5U5gQDtV3iibP62dK6GzkWaNUao9yYn",
  "key19": "4hEZZHDa3Vp6VJjXU8CPaimDU6zhxH1VWNmsiH3nSTFssm3TgMoZBpFnjfTUjJjjDzew8J1AopZA1v8cbepuC9KR",
  "key20": "5jDkBbjM8Dgp3DbZ2Jfhsz9wiBe55TVdsxey6rtpZMDmo13HknsA7iBTcDrPrL1QAZXKebMudjbqjUkgkgPRvbuz",
  "key21": "4joXGt63gpwxpjxdzADChDynUSw5KhicoZ7DMxeQVdUazDka3UF9QzAGiPMzEuUk4TyJA6ujNWmAGyqs538qkbSG",
  "key22": "4Dos6TcxBMYHfk8rDkg72SXjX2EhRLyMJEfD3JvZUBV2Sb6jWZJtrRrhoTwF6NPSyaCFgkk4iFicW5T6ELZepELc",
  "key23": "YdYnk8YWiRMJrDaCQZCGtmzs7ZC3xPv5E27Tujb9juhJvoizQSdxJUdsw4WSL8hZ95SRgemQnnQxvJQ9Jgk3VTs",
  "key24": "3q9FPcxEGRQRsK3UZWgkdCQx7kaQAoka4Fp12P8LUEnJxy2PTQK5aC4SNYhkNYuJGVxW2TFa8RYTEqE6EnvS8QZp",
  "key25": "46ywu2jm7cCP8mJPkzRHHtTyxhiaLTpSSgng9wYzrf23CSvZ7RCRoai1HAbsHNDGjAXgGDMcCuUjuhfHC2cmwQpj",
  "key26": "3p4EUDZahrVnNRJLEkPMwA8fjhFb1V9j1hYxsvvS7JcYvM24zLQhA8vj8GFA4Xq8M3fNZ64v6LkfvmKda26eXDwM",
  "key27": "4hGuNTFr5HP2KnQZPPxwsDntHrZ7j6D1Mus8MxSBzvqZD2b2FBRY4PxXAHaodkDiJxhABt1qQJRiDHPa3yjYvbqb",
  "key28": "5bE6mY1n1PMhBqA2u4jx1DYtY6eLAWX83iGB8bRVerKNTxj3dL81dSwGf9JGnrsvt8hbQk9UJkuwgLJhqa6QfvYg",
  "key29": "NFR7AuLG2B89ftMmZpM95sdNjMGN58Bup9XsxVrRzDfKJ9mJmnXKATxd1JWkQvt4kbCgE8Ladhu1rZ2bpMw7Aah",
  "key30": "4jWtUrnhFy9UVeaLLnpZ99E6PCLgn2xVzvvBYhbwVMrsoBfgFgXnwvT4icht6WcTCrAQ3Gepdo5ehf45LucRWdyG",
  "key31": "47kyLvfUHweKhwmB653eMAdzRnf11nSYKhngBnnJntyLWSF3An3GQpprmU8bBwCfFCQwkQifPi51myxV8fbhHtjg",
  "key32": "dsHNL5iGRdyJ48UEr2KynbVfnNk7vuPF4XmbWP5uE8GWUUDBQ9wWdskCFqvP7hUWcv5YVQei7cu9Xg7y3XSc9AY",
  "key33": "qzPgF35DM4mvJ1wE25Xoe4ZHJvXqyvuygxdGjccHS2TxbQzQR4hqCD8dRukDsc6dVxVTZFjWMMLdPfBakuhbCrv",
  "key34": "42MWzfdyqKvhZZgMa14Uv2Hb76UHyJgiyomaStnPbdVg4wFUKn8i88EkL2vinD6CEMGD7g59NBMssdZ2ATeLPgzR",
  "key35": "9Ph4AUo9ha4iuMUMmzj4rXy6YxphMMWPinGQRXDva1aH8tGnHBLDRqaQhHUvRGFML4EhpBj9CCHU2qV24aXBFHp",
  "key36": "2tWKwbuPYSVeisr5acsvGjUjHB6omwhART9LcXiSVCq7jB7rFaoDmDfQf9G85GGWfRHPHnQQG5fpcgz62UZ692SZ",
  "key37": "5YjXvRo2pCjFzUFYyFgZffUJDeBBPFtSv8zVMuyuinYK5BwZkuhV87H9nvadpTcpvamT7YCKq3G7Y3YvgsvLav66",
  "key38": "3nEpiX6bL6ezhHE4sZu3ZbtdCFxLaNtZT2XBpoG1QR6NQcwTRGU5ztGiH9DQb55xvwWaQkTb2HCn7D1KPgD5DgLD"
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
