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
    "4rAssDZkrCJZRW1WWkeoCF1BbE4KUW9KoGPWq63j4PgsjdFWnqQHrVeigTRZnbJHu2fd4e3jV4YGozxYCBQeRezh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubdEtxK4wpF9RUT9XKAkbSEkKf81KE8rD3o4B2xNtj4z2R2RkzbzfdyePuXEWkYGNxZCwfKUoe2nPVtPm5tevCK",
  "key1": "3XfWUzSJxAjhvwQT45M5BmQo3hkpyjdzzHyi4jwK6NmiBfWu8Tc8UZyoCN95yQ8eQV5UAyczRwBC2wbwRwkw74Dd",
  "key2": "5kqYmNomtKV4n3rRikeooijwMgAwySW2YK7VgRY7LHfbQ9ARxfJK5Z9xmmM8m2z6iHHhuXvdhPvefyiMcyGGMvhZ",
  "key3": "3HsK7aWWUUmQMUBtLcEjTQkcMntAqEoHsXe36x1nshcn4Kc9EmSkQvm3UEZgY58tV5GH5Uznw4FUnjAV99GUCZVM",
  "key4": "ow9LoTnYifEPRf8yWangoZHazXxYufQj2TQmBFhfVLNZWbfNtU4Lq8Rg1wZRH4VqT36wcQp5EkQBoi2qB8Qb7au",
  "key5": "45gUMGvCjmbGp56d81j7bR1V6JKCeGDwaVRvXmBSKoFEU1MfrQ7z6WLqnrzMf8W93Wt9o1vcpGsukYK9mZpzPJNm",
  "key6": "26mtVtpLmx3mvJQ9bGP5moq21zJPj3Fbkv6M83M9HPaBMdKkjkdAEr48e8SXSyTb5TnpapbmT9pAvVtMmAH9Ueu5",
  "key7": "37ArWJmBC2FaojES8MdKYgDbW24fS2APmr8PQvKeWjjF9ekGgLxeEiof3DawENGEA82MR56TnBGpuVho9kZeajFv",
  "key8": "3rg2qGfH2nHwU45sg8vMaWmKNpPRyxfwnU1FUHT45E4etbTNc7fM6gmLmVJGcSP2h9ZEzVZ2iDYwPEZHbNqTtZ8R",
  "key9": "3B8mCNXNYgYjjT1riJh4xQHCZ7X4bfvDgmyB4ecZCu2tF3K5Xpx4XHq1JHSy9YRN3oTkc1JT45ELcTPPEvgkBkvv",
  "key10": "5MAS5j6gMtnJhA2Ugx1G4hAGkNnxEy7Re7UhTBs1hHYnjm1dDdmjuotffTgXi2eXKJwiwomDDYPMgHLbFTHaZX8R",
  "key11": "yJthHeSAztCGJW9pbKLpTeqwCnsXDMWynfAToLXj7wNhRmkz2Loy7bBzWMPEyjtHhod6CfYQMjNhKNDiPz589Ru",
  "key12": "2RgN3LXycfDNeP2a7rNGRb4xocUhZzYUYVFVEXvkgvaaep9pogeJMSgneP1xpAnut69ehU26cn5kVPVR5oqwzLVs",
  "key13": "429zT99QY4j7SAskm2kppNSvGTUTcCxyPLgiZ48rWQHS6iLFczhUAECUShnZ6E7AHCMQsZZ4J2A4QRmasvtkKTA4",
  "key14": "4pFnpWyxfeAgiTJwRYKjuAkUWkmns8Vkp8Y8QM6TinzLpzE43QmQHKhvTAjg7GWhYaK8scGw7wh1bh877K385RQS",
  "key15": "4xdJgB2Wk1XCUiAMnM9753Qy6H1NvD7KPz6UhZuKxcVeVPb3BNr7MbrxPvNse48wHWsSr5HWabWik9v8yyjcfHvj",
  "key16": "4kNorBMfwWGnnXFazmTSQY5Pmtdq1Zoumtszt2YjiZ3Xwi2PbySge16sWTK7dgKNDygoGvnTcLer8mVCYgQmNycn",
  "key17": "55wR3bCSqfdcjaBNWA2bBHBeQ9fyPx5s46UGsr5uKLRBJRiHpehuXMz6VRKjYG4c1v8tgaYGKEVt77VJ93A1GhS3",
  "key18": "5PwQrMUh1ZLiGiFwW5cGouq5Ln8912hpSn9FusxFTR9c2TPuj7t4cjuA5DmmCcg8rnKNCuxkWEJmQ8smK42P2hVz",
  "key19": "4UKrVzvbsNXNF3QWVXnXrMPQdjZT4AA42dJi1W39q422Ls7GQegWbzmEeB6yh7RHrj8oRD1GGTcw4vkhP2RZkxfH",
  "key20": "XSuvYFSdSvJ4j7G3srUyWF5ujpcTs5zAyEyWMSgicyzMhRo5k2J4kksmKt9zM24A81VcoP1TxVEntSdTLzaXedR",
  "key21": "5X6pcLr9qMuh11cf5HHaULtR31mpyytPTTHMXVj6diKdJuyK9RZ9TzyMe6P6CwsvFcCriVNRVTiXgLoijGK1XZS8",
  "key22": "2XG1hjumxGghGobhjS3mBkfMFqFdwAoNrmGMoi6PEFt5bHyewtYC6QfXTacoVXd5kELcBayNEjwYeKHvqEG29gwh",
  "key23": "4hQ443YNDogiLFwPZu6y3KNzJTiSWUTAh8vDFc8KgzqB3mR3NMPS5WYjajRBukd91LLR1YtTyTgt75BrHEv8fYp8",
  "key24": "WgySEqKfxiS4avVGMsHNCUnx6CT59Wh8AvE4jqGRsEoJioTrJs7vHpU23VH2mEoWMKUqJRuCWgJGjk1VBd7XfG5",
  "key25": "2XvBWETUGkuT56R2gXRxpkTsqdq5Vfeo8ZUwM4twDqWRRQBfdrrrbSnE43nGG5b9NV3n1HNJyLEz3RycSPq6rUxU",
  "key26": "2VVd4fMGqF6t2GDr9DEc4zAPjoRy31H3sLunLwFrPrCkNzF6ddpdE1GGdks7jE7VT5wZmCvAv5bZCeqxdFgTF5k",
  "key27": "2zZqbWzZ4jX7miFAZyeyYUFxMi6LWMbDsDdRZXWSDXtSM4jtev8nEM3KqZ4dXc3SNWeM7oZxe7P8DzETgGhtks2G",
  "key28": "3zv1F5XM5kTFq9txet43Ktv3UiSRnY1ax7QeNc9qagYD3jzdHq8XRBYVnjEhkuGgZKs4BRte68SX731iSFBcjYYt",
  "key29": "2RJzoALsCiND6dnuRmyttJhVy9dAyoi5Q2ffVLbRG8GndqKhmrp7sS8RkbqDkUHjycGpQMcyFrswhE5EZZWTdViy",
  "key30": "4LofYJQKqNWb93WnUt432pP9cxMLUYXioKDvxCxjAH5rtNvvmqPnfeC2BZ5cX99T8VYBGnEaeYgqFfyYETtZwbuM",
  "key31": "32uBjA7h2JRB7sqHSRudF65SrZYvqWeada8UFazQaKnQ68rnfrAUR8tuhLHS23Q2zhWcGydRPLxQTyj6Vm1QFnqt",
  "key32": "4smjXdt1VSTkSNkGMPYRGiDZ7MUAYR1KhjS8VJUYuC6yKLghTMdSSXSarg6dCY46aBinzTmGnA7r23Rp93Df9Pt2",
  "key33": "5b6kmaC7gqxkuctKc8EMc3VvuCaHSBvXhnboeoFYqVoF1QCHqNykjCjyzkTVPzH91UNwwfADd6V7XPjakGrj5D81",
  "key34": "4GPasw956N1cewJ26vAWEUjmazrAQn8jUUpLrq4jt9cC4ZHXbdkaF49aDSw73sasbAbYKyAU7SwebmkvPSAiRQWx",
  "key35": "65NVe1tWEN8KRv1Z5UkvgRbqVAqUd3AWJZLYLG2LnWH1YQWycDjimwD4a7XAjR9esFpbhQMXCN19zcCQqJpfhuEz",
  "key36": "3fFF2SsbtUJ59JLdfzYFvu1kCdz6oLZY2tEDZJnVf8Hcsrsnq59ZftXHYSfHSKjHfoEdYd7yLdYRewLGMN3ei3VY",
  "key37": "YvpVYmjsC3BDAcM5GaPQWShguDTEwvLPz1ZX5zw89Vda9FEhPYyFrUWBwoh1pZic7tJWvSbegsV5esuSLznBj7W",
  "key38": "5bc6uzvH2ugKecTLV86XAYpBFPYLqHsX14Tn8QQAuBrHJXrUuXip7kv7tgMSkRk6Mu9xabaap7SmvA3xYgwtGso3",
  "key39": "4CFXk5dtHnWb8fPiHy3neAC5AvgXhYfvoahWKBdunoRbDMYA8ZrpNDarMArBC4egyagkZiYkAMXHH15TPRakh8Yr",
  "key40": "24bFJUzDkBaTaYPnSux6uB1QFikSMfFb75hf25f2uzCjKrdXZHiuJMW8YC7YEasFCHpTNgzDbKrnVTE5tWZUaqfu",
  "key41": "VQYFs7fUiEwfgoBL5at411tLk7sseveqoN89MD8iZxZmMrkwQyNoMBonKmAtLbtptxWNXR1AmxweoeoAQ6heUST",
  "key42": "4ieuanXJio9ErEJhc4ZP6SNs9tWpn7y37XULbbForcVWD8iVdSJ35WoJVq47wT9DEMAHeH9KT4tiuqtiotPofPst",
  "key43": "2sKskLUvAsP6GfyvxanQu7wYUr8GjL2CUAZhP8Rzre4WxxMKJanEuVJhho6QjobPNT3q6SM4dUJtv7qyXh4fXEg1",
  "key44": "4Wotq3eAmmppYriz9ckV4pVjdsTB3op9srGoT5CG8DhoSrgZL5epDBFnSwJDN5qu2ZEdHJZNUL6zW5J33eqACbFb",
  "key45": "3hcNsfLvFCHkZUnUAajq2D1fVYcANe8m6QcuKXNviTEoQsCKUvgKqSGLrGSUCNJp6XZoV7JZ123Xb642SjYVUmWa",
  "key46": "3bEaibmSbVJsFxqU24sJRk3EjzF1GBgC9EuGzc7novuXGnec5e78WsBpu4ruAWxbzqF2gH4WesQptwBnGYuFu3RZ",
  "key47": "5Ej3mZuMX4VHHabVvRA2hRZGj6F3o395wq6EvNPXMrVy8a5SCnTfM5vumvLGAy5Vfv5RWw7RbzobGpPqZbPaCH3Q"
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
