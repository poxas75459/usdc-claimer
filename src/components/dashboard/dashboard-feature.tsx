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
    "475qpxNvfPLtgBv283Zd39qVdDfU3p15zwCeDNE34GPAQmTdoaBpDz3h9FE4xNCrVCBuvmxPWtRi7BM9XFmk4zPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54r4DQsudkyGmXc5DQo9tzQgreMf7wuoGVb3TSgvHdqXmLZvRHqm9n4Hp8dze5D9ACZM8XQzSgQ7qEjeKFgzyc21",
  "key1": "2uxWNKScBd8tXxzWaWANdkMqvuNVYWfecGVcMyh2AzjPzDVi8Edd7rnUy1dSYJtsjGLVuas5fS6HjdhiHmkrshyb",
  "key2": "42UjUq6YG7dzd8n5hVtMMDUFnp3d1iDggaagxUtnhxdwcuX9L2ZNypVSTRxWWzbyXKM5ariAa6mryCVN6QJoNt3v",
  "key3": "23VBt7Z7jevCAaqcpVnkuP4uiAvzZd5tK5Ekgis4vA2ceCW5Buy68zLZU8qcrTbGYDn2j4MvHGAJuLrWNuNDXCok",
  "key4": "2LgcooxDuK22T8fZuxYpmP1qZWjkGZp5dqA1e9R2GS6Hme1sPiGmfMie3nX9h8QLz5UizBjq3DTyMpSi4soXh7ye",
  "key5": "2nJkT3qGd9HabravoiPiT6pjMb6kWKeWpSpfMMHtFkVM4bniRqQw62xtQJYYNu3cueM6kyov2KRXsM8H5XCwnZkR",
  "key6": "26KJFxuR3y771S667KTLpRUJ5CSKM31uhWEQ1qE6rcMjqeJTCLb8PGSKwxxmPB4ThzSuj9m2nWdvv1mQY63HGJxD",
  "key7": "525dPBwFHCdGAA2Sno3czR8kuC54mcMFWqDUS4GZCGN9ASs7DeQ8TAdwa5ZpDPW83k3Zbsy7R5pz3LNuyUADcr2d",
  "key8": "3DnRNH7CyHm4bMfJHjwVTJwDgnjADoTnyML1tjn4k4GvNAHN3wmthbMScV6Qc8AxScxyjjkVFrwwRwaqUsdoWVjC",
  "key9": "56MoKRByRYs5tBiNfrdoJoY4KU6BSofjXeXBhRAj4m3NnEZnxT9DKPbqGKSYXS8mH2Z7348JuY8uLymTusVXDpRv",
  "key10": "3wZRZgNrGUEEg3Ra1XowFaDUKjYjq1hfCr2ZRaEiDbvK66pSHzMcjpWcivxNo6UdaX5mbtscwfCBU9MRyuLv27h6",
  "key11": "3DiX8p5KDHMUnu5M1E8ZC8NFigod9fid98aC5QF3aF42dk3JfLfQZGDcLR8GmgzyyDWWGxrxQMszf2Ako331C1kP",
  "key12": "3ouBRKFuoeq3yTxNymprHLSnZT62DnCKMvGrZpxhGCksssHSpfMAELfwydEHp8MXk3qPVan5G9yQxHofqHhTuJVm",
  "key13": "HzQfCYhUbr7A8KYC1YD5moRY2pRprbp2A79rzSLZMUoQuPUiHcHTN245aHGSM8D7erT2Z1mDjXmTM8uZmsVSs9C",
  "key14": "2wj3uXTeKuZv9MEV9a4C4EBg49NHiw5fmGAmnTxUq2PomqTWUX5yL4iK9JPYXtY1mYq8n5AKSfcJ8LDpyrCaJf2X",
  "key15": "4CvUn81KyenCtn5qA81Tv4tyLydoQAo5wAy8csBUh3zUjdKNu6hKhyz3gNyZLGDpH2jkG9qMMXkE8FZnW99A7rZE",
  "key16": "bVsWwfYcfUrx9kwjafkfVTnvb9XRbJ1EB8x9PF3a2aoj5CYS9sZtn4rwTNdi5MjtKehiYcF8h4WDm4uaCKDLEPG",
  "key17": "3JPP81D9rQKHcACFpxzCPXnRBTxVX1fTF2gUAQfaEhx9pSMQRLcTbxPZtk6ytoYekTiGmCRZnDQ9oA9N3ZL1mAtA",
  "key18": "iYyxEBNe6oMArkf6sjU9hcrQiFNHCfrNftYca8gUzLevawPnobtek9vzknKA5XP9PQBSRc7cEZtkYXAKtzQMpD3",
  "key19": "5Mge6HKYVSjhDJyKYRLVExioR6AU5B6irStcSxatfoCp1jP2R2dkVmMCJSDeLXH87i3DMLpgamNTD4rHDAsdxQ3T",
  "key20": "2JWkK7mxmJo27HkrQxmKmcztGEmrVZXXYdW6BizgR2X7Bbe2f3hzBUTqh1BMbjuAi3iKytGTCewuaSTEaec1Wxq2",
  "key21": "34EZRUHBmCW6KV8eyPMvYA37UmjVJNMoRdgiUsfPJYCHVrLYmhscRPfaWjJ9bbxyd8qAAziKBWrX4Bk4sFEEFBFe",
  "key22": "efnZiY1ci1H95EfC61VaP7JxFp61DLqQARZ6sCLW7XDFgZDRi2C9TJuSS7gMq2zrot1WVqyLsjYNxAN96Q6kJfw",
  "key23": "3NLguRRqHkbsSaoFBRinxQwm7m1eWBHjeQzG2PQepoH5bs4wWpYDHittc3L2TQxd31dvpZi8WE6nPfqKVNwdC8zY",
  "key24": "4tQmm2dLoAEw586K95nBfdZAuKf1zXEex4qtjvfTstWbzQf5j5Ga5PMKuUCssgtArLdZNVdSWvayHddmJaYPzYdh",
  "key25": "59t9xYgVBRpuWT9Ncf6UptpZttpgm5CUVgjvjzGq469dErbLzsgohRMdSQF9vmLPgEQEyvRbn5UfmAYNyvus9Qyc",
  "key26": "3uRMn6MQ5uvpwtax69KMoYJMGy9V1tvgEqATY5pHkNHMWhFcPAFefjjrscg6v85qe9VXtWy5rVBgY3L5rKJQ4vMa",
  "key27": "5fHZpNuM8Q5rifTeHd282XVR347ML3uT7eq6PxQEe5FVcBW5haLN6vy6sDpxM9WwxcKrZztkMnxvMCqCU5pL3paR",
  "key28": "2ZkBasCY6PuG3d6Jx9tVTKapyhXaPuncfpcCrsg4Nd7mf425u72BgERx6MfTq16qgjJkFpGKkbbChipw5BkRGBrJ",
  "key29": "4fqoPmDZd5VVpAHyLNmU32VgMS68KASQ5sncwEhFs9sLsMmgitPr782wtoaF4hWH6k5hJizafbvBQPXcwJb1V7gS",
  "key30": "4HBqpPa24rcKdcsCS1t11NvffQTciYDDungxudFbBU4KRRqc3efbpV77QjCN8QxNGMmykMSZuqAGoCmYdngPmPKz",
  "key31": "4jqm2RZFdY3mkikSBLSQNGbcR82dPWuCjJLQ72uMFWzyUJEsAL6AbdTMjzXKTFdfwfdMXM1oqQCK5R7apSFYhrf",
  "key32": "3MD4s4ffCJzGqw3PEcQUDUy4VWEeKmF2tCYfwf7SBWRYAoYuxNQypEhRANSwawLSDuhGsd6W6uxdXiqcMnxpMwzv",
  "key33": "4wJtvxY53cyMcbyKp89ZGN4TuXHuz84TTRsNMgTYSqEtF96k7YPRVG2zEYbrmGCtjiMkGAspC1R44aUBRwKsie6u",
  "key34": "2JbUpeAXjy7tas827UvPr6sACYjmZRuEKbA9vKVLNxyyvAamCTBv58GGCt2CTU87k5w1yXjmaNBwRkT28FcMbSeq",
  "key35": "5V2mEN2cBezQBU5y85gyhDmdKLEQe4fq5JBVvf77TZMT8xUkqfB1s5kucuCh7wnJjcggMN7D7G2esMjKWmU4DBvR",
  "key36": "3hNiZUuAJfBVA6ZQEunVtW6cxeyQPB875gQzb2Q1nwA5FrfrHU15g46PZn78bS6cAQghbxqxgza6zNaKBzUPvPnm",
  "key37": "2imuKDLP2Bu9cV5FCpKz5asCsWByaf5ztEDmxowRWKCiiyNfcBttYFnnBPJy7aPMUAbCnCSAcgmmVEAoewV7zdp5",
  "key38": "bSFsAgXmVukMT3KadcVAi7MisyQxvXGjk1edcyx6VVyC9c4WXpfahiAVoukfGw3X86X5AMXmoTi9ks2R5CEDC8Y",
  "key39": "24C1mL7cnJDYPW3P6FGLHNYS9YMRvkF8VbD8AzJRumWsdAYXJkMQcoHs1fXaTevrZL3ayoaKzdbDAs9zdVmq88mw",
  "key40": "4uw7E11Ect5Zm9BTocCSAJe5n2v9eEFPj3SCKEeyJBmtrNJvCCojHzpbXSL3kCBfgrMpnMW8hWNMVxseG1CEzyqT",
  "key41": "3BGEx7Utxwb5ujbVgNezR6f4QZCJgCSSxpUDYKbJ61Wt4M5RSN2vykWqtQNpvmLgyux5KD6btbxQEhrTXRMCbgdR",
  "key42": "2CpchjtSLemLybaeQvQrFgD1v52vvBcKPJXk4jausUQibQGJiMXTtr3vEjXoDT3yWxUEr4pGEm482DAWHviDAQmJ",
  "key43": "2Btamv1QFzJxU6DPeLcExPYEgvAjTnqp3C2nkdHsKC437zLUTe2nTnb61578fdycab3TNu9pMPGfZ351U1YMyX6a"
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
