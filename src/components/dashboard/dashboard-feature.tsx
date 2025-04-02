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
    "2iDHuMe5roNFfkfobLAHdLc8nVFV9T9Jq4tHiAEaq5cFePmDq77RUhDDoVXMP63ock3uXroXs1mJxB8KWS5x1Mzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lw79ZsScdo1uVAJK1rQsFvkw7dPhc67oQcbKxnmBt4ddvn1GSB5QenoMwCGsbksNhVeMdPBW4YTUj9bMsAaDwLq",
  "key1": "4NtAXhPHKWjGLpMHDZzwrje7ruZ8tt9THyBaHwKsu2dR5PP8Bkc9qqrit8GZVG7A9t2ru7XdKZbRomoMa384rMN1",
  "key2": "4TpK5ibDVYG6mWzquQvk63rySi3fSMfDVGz1rQfiBeWNjdKXqfyUsJnNjgKMwZK4CqXBZpLrP2djbT6byxxaEtYv",
  "key3": "3s77rTkXKi19vJVNrc6uJHfd7JcNxwczynY9vEHPQKWMU5kzn8fCBSedwGrttN4iS1H8c1FFFSJp4Krh4YuhHLpp",
  "key4": "4cEUYyiUSwEcwhnwUx9ZV9ao1MMGwD5xitqfHUWexSR3NreAMBJinGmsJYyNJJbuNcxuN6qu4gSpY5bkawpdkM8y",
  "key5": "4eAEjaPSKU3usQrkAh9rj6Xsb6SDAe1UFNjjBSqdGgKZuFX9a5veKrbMRwVhYYj5d8zMdM2hbvuKEqjMCeoSw4JR",
  "key6": "5qrXuHx7uk9pDXM9WDJpB5pGCdD9N37uyswZot9T1yhh7BzWma2cUAKyTaKZ22LPz9WpD2yTH6hhVyhDtPbbbqDS",
  "key7": "26vzP7kHMVMttaGXHT3YHBDB7HoSVytTaBccufFTfDy7DwgFDutkZa3eT4DGPfQ7hM2rye9Xf1dRn6LRSx3tC12U",
  "key8": "3NFins2J9evjGHKcGzz5TpQKdh98S32FgEXRtYEMW9HVb9UoguWiwTFp37SQHfvV2nj56wm4EvKo1A8VpjYehEVj",
  "key9": "3YMDhgDr2JtV2yn6AioFecMfRioAgcCZTfrVLMzJ4L5qRcjpvB8KbeJT9g7Wwx78HLub1ANtjuUFYC4huAVUoob1",
  "key10": "3VL8b9AgnL57DXgG5aK5fa7okAMXhaFjg3YRDaRRA9aSkEoghXK5GuJoURG4fwgwcsyBFPVs8jRagDQrfS1C8K19",
  "key11": "3oEWz5oAfw4PJJhW8W5wgyR4xtWmytQFHwAFvnAuhqaZAENsatLqWEK1zGF8iQJaenznfPD52Jxymh3i3Vpsvhvq",
  "key12": "4MzEMGA2BgTJjwUbE5WSzmmdH7t1wNxUJUYQvCzivwEFFEpZo78xC1q7Nk2LK7ULXrtLME1CZn4ftDbsUjVmSMmf",
  "key13": "AmFoU6hvNWzrfZoV6fYKN12KuZ1SgcZ8dgD9SE1CjnLxcHR4eiks3Ruroayh2etw7fFAR6s3zcbp24YwScK85S4",
  "key14": "nErzS7ZrvNopCSxmKTyE8TxrwfNwkQF4LKNTLVDrDE6pSxiyrfxWvn4rfRDpDnadvXyDfS3NksvWtuNo1Z3YYmW",
  "key15": "3iwHLq6Giqt6QnneLArjbagrD3cPBDyuXbbTksTfgqapmZymZ9NFqNqSSGg2acSkrm2v5sem3HZGcnhcx9yKp5hC",
  "key16": "2vWroQhzUVnrCFAcGcpa1Coz6YXFYV3wfBHjfjfBpDAEvZsbxHA7CpBTG2mBSXZQTWoytyD7fx7qfktpPiiCcadk",
  "key17": "2dAjqKC8NgkssVMGmoGvDtw8wNEidWPoRBMiVZcJazhpz8THH2EfG7dUSJcFZ52BsUhX6uTjmbKXP3dWzxQbNc7Z",
  "key18": "2aTpkQZASPddhmp1DgmC8DYiT2Xwr9Xoy4JqVbgY8Fgd9mjH3WH6P2xx2ujjN62z69pCCXaaNTGdYKoRkn4i3EDT",
  "key19": "5fyhdqziEtNwjZaH6FMVgoNpXQMmC2EA4aDSkeyJ3k1LMB1F2hcap8Ux6dGcP9dc3hT2rWKEQyFX3AysFrVM2Txp",
  "key20": "ujDULWE6obQT3QhEMPQjXfRuMKRuPiEnvdPeDtCm26fw9gBmLfyNpHJTcy3yifHfSsgKjkhwUZKCT2MBPCwfW2w",
  "key21": "4penzuk5Uhn6ZzfZYRH7iXQJk3JBcsa1iqzc8GcTeDKBDKNkhjUkE9DVWWnGWeNgVeCxZfCUWP2BgMoTvJjpJt3c",
  "key22": "5bt2rgotCgP6EgWvmB92WheWbCzgzKtEtRh3o72Eh1ZPZij4NULdY2RsEyVtJdoKJxPifNZHk7tMgsCGRtbjJwdo",
  "key23": "36PuZeuSk1kwGSzrQuQMQEurL23r6a98F1wx4mR6uEnKXqFSARpcbSYKaPC44nBoxcmmbZsnEUcWvkyrGnkMrPwm",
  "key24": "395d4uuv6X2QZ5PUayVpPuxPvVrRWtvCwKyUcRjo96YHZxesZX6t9pp8ghtLb6AMS4vK3iAsaSren964i7tG9L64",
  "key25": "28h8LZCDmbqHKqHTsQxLGjDxCkw57SV5tBKDTweLC8nnDuz3PugwVvExUbGsRZoYZdDJyAZ2U5GN9W4GRcgWq3Cw",
  "key26": "TTqFp5qyw5MWtuUq3uKQLGsVQESYaV2utqsYx7TWmGEQGY12nffgsBaiwofVvU3rTGHsdueG4tKvsiSa8t4Azrm",
  "key27": "eoreEwLAnLXT8PkpG63asFEpTpDeAFHAokDMs6PEJ4Lv9o48A3f5pVfAKuJ1uxFYDRuSL6hmBEdYNcaE58ajYE1",
  "key28": "2YXjB8a8MV5sFzK9Edd55swqEBqXCzap2pngTY8BMLD2zfdiD5riYXMpdJPthrxE19AqFhqQ95aQdTYoJoS5i6WB",
  "key29": "5PqJoocDfVdFgxZDzoFvnYhHQNvZu7Afb2YrDp3g8VwS3v9djvb7ktfNFRFeg6ost1evLSoJZmGqL96nkpLbiu1G",
  "key30": "dLFXoqMHQS8AWyFFCbXbusu8wU6kf4VeqPwNH63Q4rtmCicxYMmKV9rabZY2pPSqRvW5jPFt9TUuE9RwgDgzGME",
  "key31": "9p4TwjZp2N59sfMPyVYzpPkdjhdexV6EjAa3mxrQZf2JdJDCj6mFtkXgBrPjeGN4h2Lp2tF3ZYbQ6nSj4qYK3yD",
  "key32": "5FpqP2gDFiHUpYVhgKRwc5crW9zwB1Q7gwPRLKEgP6T2A7dzB87fDWCWpetxDxE95a9Mtsn9PsPPm6Hd4CS1Qb1Z"
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
