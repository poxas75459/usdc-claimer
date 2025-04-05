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
    "2U6HTduTyWWeAWtPChbQntdLbLB5JdWBzYXV5GDNiz6VNFkjGhk8xCVtxAkE63t2dqhSpju9eGb9yeX2d1S3Z9ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiE9TpKjWW8E5WcQJaE6CRFCnZ4Rv4Svg96YNtF7L2g3WQA5mV3u5p744AUdM8Gk3yH32yBvLg5JY5cdt7pvaC3",
  "key1": "2ThYn72g279CLA2Q55eihfTDtVbGk3hTKhvRz3DQo2amJcusSXUx6Hsukviw1uwusqfkoY56sA57GALXP5i2j8fx",
  "key2": "4eam2CaJ7q988snHrUhQYYWTws5NEqvcfm9PzjtW1wqqh1CKrxShPgTU4FFntrdBmJY1fewfXPqxd1aZtBj91sMV",
  "key3": "YD1qmDRcVGvyqgcs4aac8rK7ErpTwRGr86JSrD96hxb6Y5t7znXw4uWeE8gTrLWmFycSBqBbqwtJU8oN3zyqyvf",
  "key4": "5ygNNr5jKzLK44mL3MeK1L8k7fCGRKgK6Mrp9MDhHY9uSYvMNykpRxv2dL6YqWqNniA7YxtMKTi1qK5C6ou4Lsnu",
  "key5": "5c85rCy1AMpBdzpSyzoSbixzBpgeCpxmmUY2mFZGcKjmqX1ukze3CdvKQFBq1iL34YnC5jzmH6T9XvxVEnoaY3Kd",
  "key6": "5NvF91JWBWV3t6tRMaJqXy2iHD2exPms5eMs73xz5Z1k9tS1GQ1taUGN1qrovGvmcJ5mZfvF6sHPWbmV6uAAMPv9",
  "key7": "48Lt6EAeA8VmvRsCjE6nCeNJja98XJwMi7ZnHsErA9uMN8HsYLQ829auRbsMpAa87aWbc17XWj9LQzVJJdcaxoX8",
  "key8": "2TYLivm9Em7JeviRtDbhhsmsw57eCjVFBmDhVAxD9dhHTkZZF2nM4VTAfzy6tScF6XDFDxcXSny3Ya5aufzoij3g",
  "key9": "2Si8ozjdKrBTPA2uqkY9wnPNPUoV4mmaazSAYdyug3BgB4tzA6vjWEa9svjZSnfScp7U3zJ4W3cAYfyxjVFm7LSm",
  "key10": "4599HkQTv11Eznr1wdMterAAQRsLXAvMCx9yCJZZU86PwitRS4R35GdDGUFhvkjQchymeS27PaMt2M9gX3yfRZTr",
  "key11": "s2KAHEYbP3xJYZWP68RxjjXVJw5QALB6Mr4PEWxaigzG7n7VnXBd2RkGmm1k8k5XtW6REPbzfao1VajoJR3ybci",
  "key12": "2brrWMNZZGE7ZoHZhTunKSST9r7XzVycSqTRZR2odqEoFWUiUTSvct43aCQrAApCkcF9AmeSGu1aAdc8dqqiiCQw",
  "key13": "3zJ3zK4PoVT6iEg7N9kpmud4PDzyQ8xX6EDeCYMXjXDysEVtXy9qGPe1M3Fdi3gEPErxChgjqwiVfByGVVwgH8By",
  "key14": "4gQDYaW8iq5zFfSm1fNL9bdPWweSrwFfTsvXia7aodcLY7ntRfB4L1D27nghUVgEmj2dTCXfJ31ELzVDmqLdAxDg",
  "key15": "2UWN9c5sVG7WcrNvEnvL7oytutptpaLrVrPeauojMe5WneBbT8H7H6BoZRfJiWUTBNLAY4xHwaNYS4m5P7DhdHEg",
  "key16": "2eVHVUfBo1Lyz8v5iMMYAEWjce7kMomjj837g7GbcCaLUbQsHJAVgGnjpG3RLKuS7EkUzp5N2zer7tpfuPx6A5NC",
  "key17": "2Ya3exoYU3akFdKMeHNu8ebuZznaLPY6NDeQZ3esryH6yuKkLGLjcotH8vmUM7NcJqwan4WEE2Dk8xzap95YZ8mf",
  "key18": "2Hs91Gzv6SXpjsaSbaVHiiaDkZwsBbgk6Y1bA18T7rhpUYcdFPQrLHDu67ukprAbFb4B4PtKrMjWWw99sTKqwLUN",
  "key19": "5bg2TKRkSvDi2rXocEibWb6e6tsV1SFTaw38yPSe8UQ6gSyuJxjhD9647Xjibs5wXzgawcLuGeEv9fewR5CyukBC",
  "key20": "5qZPeE7GR6zh8869qgvVVc4o77ctYq4UdpumEFd4AtNkhBVnN2gAev3BuwrLDqrKWq5RjznC2Pv9j6EqLZgg1HSy",
  "key21": "4QqgVNBTB1qAv9pTV9Ubw7CRz1f2aEDoFJ9AhJ98R5YnAxV7Znp2M1oDok1QUggAwbRLJa71TKxqs2g4qG31CPLT",
  "key22": "2mfERgKmtSnSbYJoLGier2eyLE7YMU2ugS19DxksVF55JGLbza2oj6tXxz1L2NaPebPEnFwimnQgrbJ9hKeiUfFr",
  "key23": "2Y91oMNNuW1nqkeMfwK9uraCYCnJSNRCNzWiuoS5bTsTMkDBZrUWmELLzro2fvUrdjauoEguPWii2JmGZN2hv35Y",
  "key24": "5pdLUr94Vct71F2ZsEvUKTAvPnuMohKpvkqiMaciTtQBARRAYVVttqvqVG77Ro6oT5msE9wNzcQn77CdwdKEUgqY",
  "key25": "5H1xrDLpsHEKdbEjfAYNrw3MHjFbMackk2fFRA1rkLsE4E3z4fmgW39jWiPQeJ3psgWkYtYckgkJLxDWzQdcsouF",
  "key26": "5CKRWAMgwH2r1qRRd3oXLT5rbxFqKK1XZELn5ipdmnENH4tUjWakyCS9t5BpSn9KektKgB6NqV4UX9HHH2ZAdZAx",
  "key27": "5vq7mjHguWj2FduJkR7emFr9hnd2qKmCM7RFgiYtmTwEAe25PaDc3mktaQBrbfxS11DoEUhZqrqmcPsQryLTwBN8",
  "key28": "67Sv3ifdcsdpPD87bcyoBTBr82DjEdKERez4UC5cuhyXPpokt89kjm6XGzcgibawTLadEbJZh6f1RoS3bwV13azV",
  "key29": "61mrZ97jtf6dYPHid5fr2DP22JW7GvzqUyvpzKwhoptTsrb7Xdk8d4ZykBTR1xGS4eGxkgNwFkVVZAShDiawSTA1",
  "key30": "4rptviaJSiypHQNRTprBex4AQpzMjX3LGEGUqpVWm33xNy1BGMG8nEwZLQfcbSbWob83SDCgN2f934E9ezQk7SzT",
  "key31": "5F6JkEaKAMHGWZMeq63hNYCaF2PLfS8QXwGiG35jNBb2g36upXkeuVbLcWw2zUSAyty1sB9G4JL5ruYjFeqcdZZQ",
  "key32": "4ACtpiFLGgegteANcmAaWGvXdjGdVy4HbwULsiEG7TNUXSDzY8ep778THMVZQMWPwpmh8LyTzXp4pbx1xjJexwhz",
  "key33": "2GRe6XctJa8ND1mC6Z3qVLs9igWPk1Qx7yj3MfPCQNZQtXDMAJpYyu3jubeGjj9kAokaCz2xhbpB4jZkqfbdf1uy",
  "key34": "PqRqEKqmSVWE1GYjP3JvAsxdiC4CuSj5moBqE7FaoG7SerE6h3uUhKtL8feqkhPC7oLQeR1iHjwB8vbfxYGscBX",
  "key35": "2Yc1hbZYGoZDMa9DMF3Cvbx431oL8NpJkPS98LdnogDuJWFmvbDHM9ZwtaeKmh1aLCiRgozEkf7nGE5mtUJHu85B",
  "key36": "2gfon2QjrjTJ9wsTXTHhNYDt87mFBVQAcCDp8WpfdvpcuqDBFZMcgrK4S1Sf4D4wqA9jLNrWGwetu41be1PbmgHi",
  "key37": "2YxqFNi1CWEFJVxVpgTxeszGuecZNxY8hst9xpwQX9orp9RamsyHQeSX5Xv4vcEyyd9X3rNsGT3Buo9wjxuLZ4oC",
  "key38": "4PirGFSpGdfTS5f4LYR6MgcyoVMRbc6MJ2oqHFoASFRvkMmLC72nSs7xgu269R186PE6WBXsxEkgY7vNVwPJ9m79",
  "key39": "58a2JVSRVfJk69mZapqW1aYHWLd2tH7Jx6WQ2cqYiM9WmC6oPhF71P8vMTy2wBWj7XT9HRrrCbK2wLLJpvcgys1C",
  "key40": "27jZhmjbwGuykcMYxUS85QYyTZCbFqpUjnzf7Pb4iwm3enLRfkkzJKcnDMNHB2pUcNDzxMUo5NjM3pTGEaZieW4d",
  "key41": "5WSB4RVEnEisc5QdetTQ7p5TKWQ1C3neQJNNE4dkQkFgzUBPRWPWBedRjABdeds7GU52TXaUHRu4bg3GGcGq9qNE",
  "key42": "4hH2oWAcNF4sVzkQpjmZk9514c43uCq6dr24aghQALLDU8KsJhH4yKhZ7sCJdSdHBKvuh9KuN1dgcgDd54Yv1Rgc"
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
