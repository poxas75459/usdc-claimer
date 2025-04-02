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
    "29Fi7GWWgGphsiY5B8hPic11XNJ5xVC8H9zqP46sLnhyGg3zLs3h4otjteDkDZ4VL6AdKv8SvELafn9FoN44uf5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HUqHjdSp7U8QbQeCRJCX7qFN3ozQBTLGiRFxbLLYnTAUGuKEJJ8uLtnYweqJfWRXGEAADGF6GUqnw93MUqVDTK",
  "key1": "5PbTFtsf5pVixtjmjiNZ63QrU7ou5GtdKLp9FNrk9mXuqBFpWyiWrXQVJ33Kx9tzH3DsAFCkjx7RMY5GW5DDkCHo",
  "key2": "hoPaeDuxZPL11y4cEmK2uHmLzsk9wfP1iDSvcCWVLHHZYrVKVqMVzGMJtZzkGLcQ1MmXqaUBV9NiBCooCoJhvYZ",
  "key3": "MCjEP6nvrKBd6Ro293Vu2iBJ2oWbM1K4m1jnL5dkt4hmxAdYS36UocuGk5ojwKXmfeywMyv1to4GBTMEydMSrri",
  "key4": "3TvGaSaGhJYHUBtgEGqn6W56rvbkFM4yf3rHmjBqgZZjke9btHqp3cnT8QQmMS4UEkMfBovZXg1pYLdwmLCLH2kH",
  "key5": "bCdZMM3UfzpBgaxQULiaUPYUafMqGZqaKo5Ue2CUP52hPsWzmCdUKXTQXUpmJknGx1KgRmTHLd4GEB7vKGM8q5h",
  "key6": "56Lqs84UtiyFiNhJcJXtRtFE34AHEt3CJApu8xVPWQm7LQrv4XWnHaoCxV19eVUnvscbCqdGm8ARGuR1mpWMX3Mg",
  "key7": "25ttCZMHfGCo9DCSYQ7qn3JBUnXR3ZWo9Ncn9geSFtHTgG38J3stGpgcKYBwcDDwSxoSmQXURrFikGnJv76WhfQn",
  "key8": "3zBQGSh3fjt6L7TTitKxj3miYAXXojJiKdo1A3EoxuerKc5pkigVYGET5KneWMgXaLhHuwocRiMLsuops1FQ8BP8",
  "key9": "J1Gfa84sBPd98NyRGBA8M7qxEP5xTdzJpvwumMqNoAT3VHv9afXyYTzGxx9RiKZxSYqrvp95drUKAqxVDqieExF",
  "key10": "5hwP8Pf7jLEKo2HZqNhrFCrn2bJtYrEj24gvdADVMJPUSs5XTLb9yPFC27JLpzWiKQgXLb1XdX93HSyZe7sgNj4e",
  "key11": "4hqJNWfPKCGQJevu6ZziJHu4sbSucmZaNZir2aiw3W9G5MJt1vM7h6RC6DtcijfTj7u43ykncGLiN7bTYbHm2Yzo",
  "key12": "4EPauTAL19oducNAZHXYYSJfkSEgskqNLg4aLZ3hoYBhvJpi4WeF84QsXW9uu2sUT8ypbDW9X2y6s9N8smey3GK",
  "key13": "3Y2amLJQ1Q2UNXFeuNKmx87F7UtaQKMSdWEC2LzaGiDmkAdAZ22F28FQDJ7wPGQ4Ck981hcBLoW9rug6U3L7pZPX",
  "key14": "3wTvx9hd6EYvLaPxWL8JCb3X84rHPHV8LL5ZD2hSnsVUBwKH5uaiGeiAAee955z4MKe7v2JEzgd7qWdgURSZUQa6",
  "key15": "2zvKVwaNP1Z2ApasdQhG5eMGNpvcfV64iarcLngFZo7dBVgqKvPbma7qevaq9jbs9xcQTdGUG1Hez1e4Mt2SMxGK",
  "key16": "3DpU7pyuKZeJ4qzd53juLaMw2166NkhG3qiUPbcRpsHpnBHFJbpa4j6r1fs89iGwER1zYrCGPQ2V1rPcMiQfSE7g",
  "key17": "38ePb52sZwp9KuUjDeQLmuLnNBHxMpKtHFCmpkzytXavuesB3mnrNPvoPYxk51UMNCykUdLa1p4enpfg73B5XzNk",
  "key18": "2nuDU8DEyr8vSYehMKFUsRKL1RLdPQokGDGVDkoZhkmeHr66U3Dw2LCC6vdrbiqBXS5A5sHGnhY4ZUAwNw4XhmS7",
  "key19": "24EMktVUcPSFz76Dmw646a95BsinmE4HmAdj6aSBcVJL99tUWREHfuLLuR6LdBre2MErqqMHVK2zHXDLTYC5PK7e",
  "key20": "2NReUGvsgZ21zQBFU4FkmeBnwaj4k8WxLTzbjA6GWcRgnJmmQManEwr9UvtwUq2yuuJVFozscLjES4B8qpcdikJt",
  "key21": "54jcKEgGjjkBf7EpKJiXDudisQ18uJj8NEhtRuihvXjqXT5dpuCMfqwTAp57XHmuam6NVuJqXDK58rPjekdiJaDv",
  "key22": "5PnjHoc7eDq77hKoBAxAkBUP22Bm9to2yhF8Z8RZRmnmTvDPzMAMokhY1GSPuMXLCsM5hZBgqrr4JBuibkPdoJ4u",
  "key23": "3HYsPUKpawAdBitvvfFQbpDoUJeQfG24ZwuDvegxQGx3Ro5ZpSEqDW4gbV8EL3NdfTkQUFHSc9ebv3HW1vAxG8nC",
  "key24": "242rXEytMQUynmbj15GVzPhV2g52v7afXBDtJ8QP4kgde4ATmXgoaiY4syVp4GqkF4eq5vPV3VNTPTtkusXUcZjW",
  "key25": "w3ikrbNitKyLE4WekMES2kTM3KgwRTkrY9fH3JQ3FeeDXBmcintBzixm3J4cze8skkPGkHm38i33kc4QByiBW96",
  "key26": "yRxk85aFYv6dnnN6MoJGNDAshB2sRXcRiBMr6zjjxvQ7fzfKmFeaee7x6nuugn3M4EwxLRzTDNLNLpqNxFhcec4",
  "key27": "5BxPWj3GC2W8RDkGWcZYjLNG3toGTstAaUpascqy16bBn2E1go347Zg7gRRe1DNgjUeRsSzZojfxMCRRHvuotRau",
  "key28": "5uB6K5YNkNR6hKeUj7HhAnGEywGuG4aFsuRrc5natq9WjwNM6CqS3h6Vgf6swandHacc7VWoHGkgFyBg331jhVjy",
  "key29": "56Np9476JV7tm7szyD5KSRa2CVPEJnFDEA8ZhHzUB7Dx5wjhHoSCrxv6BXHTZLMCCnj3KEnnrxX6ZE6BPis6JbdC",
  "key30": "1xgbXsu6r4Pbmd9kwL4Mz5L58mDUyDJyUW9xm7y7L5VvwYHHJv1sot7mas5bceKAZzC7cRjqBkRhA1Wdi93Vd4b",
  "key31": "3aiwdfZSKB1gXD71bjgwih5nSXSfAoLX2ux2cQMX52nC1dZbiKvwhTA3W93FUbNYWjPU6D1Vz1E2TZsqJfcWJd1R",
  "key32": "5KWrTHUBMmXnHrczhrNFxVTV5nbnRVJhEgGKryg1ur4iLYpxAf6dZpvNDFug7pVi2VPbRGUdyUvsqKneS1jUBP4N",
  "key33": "oXZfxAi8iY5hddYqBMqkjUzRwep8uPn9Z3FktU9gpTcvGsGqqMmPHjPmr5TJYmt9FQ3JCNBaaLtWV4CVvHJrBMt",
  "key34": "28D3dkLAzjVSYpzUxsrTpbj5TATQgsuy7EUaB1csfW54iD2bsfWd3ER5g73x8Xk4pvyiGaSekwkGmFMeKND2HiHb",
  "key35": "RwUVKbSGC23BHxnp7gmLqyS5rUk5JaEJQbbDG52w7G7pTEAtkwsT41nseFup4V9WCpveSxaMPyPefCpeecbmBzi",
  "key36": "2aGyin6Ygix5PwyCtUvYKXXo17nRNs4Qex9y5i19L9b9hY1PK81nAU8xKAfLG2wCkh1HbyK3EgCk17V7FPkA5BSF",
  "key37": "66EKherNqnyYYyWYyEtDFQEeq7AqSsmVEXbxVS47eHGL6qQM6BVmVSGmCekC3pbkuGpjeKW8Uu56QzHZRQfJMypz",
  "key38": "Y4CLRaemvaBQbrpQM5qtetMhsmxUFGYnjGBSEFMvQ5tDCLtBgbPZ2137ubYp1kNusH7wWFPnp6sUprib2sFc74o",
  "key39": "4TMx7NwvBXDtnLdangPBUKBueVHR3XvhyAomVQC4ZLNTFovgLicgzyddfM7nPhU9t36aCvEqpDjCVmwVSdXaqCSB"
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
