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
    "2Q1b5dZuMiLX6URkW53NzurUYfCTQYW5h3faSkJYDjsPmffvGKEEc3nXan6TtCyw3yQaMgnqk38bb8XzDotfYYKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WY4E93z5UNdWk4aBz3NSZxwTLe6pyyeWLqWHjgdfwpRLAsQD6dJTumJ9N7tfvHf62sJM542G6wLUx1547Dcu86n",
  "key1": "3CBDTq15KTTwEFiQLDkoTt4tZV8qhd7HGtWJi1fpM36wYfZ3XMAHeY79TDdLf1LyGihEjfR8nEWoPbP8Ng5bJikA",
  "key2": "4nLBNpbdoWC85kVidwmrA7vN72qsChxTbA29SrUvpUC6pyVZbeZDLodFiMmNj7BPaFDYSeViFJ9LP8giiDBXryG1",
  "key3": "4QV78FJkpAJJEfXTDmTrretCYgVdJftC3zU5WquvnSv39cd9f1JMkcrBFonD3V9o1bQ797P6vDBZeoczRPP8wTXF",
  "key4": "4TqjCn7GuKn183g9RMsbKKFCW2XFnr9d8SYLyPSBF3B8pYkLoUHqragsmsZFGGYn7u8RJqT1ASQX5YwdXUWXuLWh",
  "key5": "5s9bsR7fyefJmb3pFJLcb2LypsXFpQ7y3NtoqTgNRYyAsshA6Cf7FPF6CcVtD3uhASx5AYAcJpL3z2vJoUU5rZw4",
  "key6": "Zt2K5VKgNJx2bD3uYRdEfEft42gFFDTV5HBreKgzfTFigQMvyZcZMZA4TTNidXcj3hpJ8WSoxrD7C11SMaJZoiC",
  "key7": "59LuSeF21wWfPnj8fNDczrfxSVPjDfZryDEVrBt9k6R4xf2qZByCBBk8SoaHqJV1HdXA2dmeAA2NE5iEStuHtzX9",
  "key8": "2CQyQm1RjBUKSSxi1rpRWu4yzqkPWDF8yGG9XTXPwLoKFrgPXH8Yd4VrtZdT2zGsM4hnNJdC7WBCCTGAfwZyb4Gi",
  "key9": "wjS9c4vwCYf6bLCac41thqXj2FXuXWaBmGTLNDsdwCYqe3ZhiYd89dWRGYVZXWU1rNXeaxeLzqjYZSRJ1vMgYAG",
  "key10": "29kg6nB3wt1NUefZyYSGzoiHASj5auSERc2FdnRxZGTZz6KwA58iWjEEbSV6d8xcVTCgWSSDo3SwVY754bgSNtGR",
  "key11": "4ZC195KwPTJJP5haDgJY5GGpcfEHvkyfnn2tJ6Hviya8pmsVLPasHdZYgqsniatB7CVmbQCcxU7J3tTUo9c7nF34",
  "key12": "4xJY6g2NkqzjUy1KSdfW3ks51Qdp88ndf54kjYd3ZU4fHJ3VLJdSVNNbceaNpmDwdp3FD79yNipo2AUehBEajpSF",
  "key13": "5xchErTynSMEQWuNCzFMcUrEQGa5GWTTwRBN2a6M6e7nGXwsbpuviJonqVAq2Jo9WAevM74wZgHvysLpBgvHQEYM",
  "key14": "3UJ1EgTP8ktwjT7ZyNSZZqv7HYBeH7KB5oKrzPrRfPCT3M2DVz6LieTnWhxdviVhqojhtTsCaNhNEWiro3KCRgNP",
  "key15": "442ToYMqh3tSXso3ejZmvYStEVeV3EdBWD1KxWC2DAhZDmrs8Nmwp4wSQUuovUiAXzR6skwvPaHxDdLvPuRNnSRi",
  "key16": "2875sq22H8NmPnhsewu7JT83Ft2UN9BUCKBwiZjLSEi3pBziW5Hzv6P5DaJDMZ7waAv5fLM2otKnM6j92zNGWR9U",
  "key17": "HKQABv9HPQgJudicSjpUD2DC2UDNeaYr1ByJFZ876TMnwtoJHNocSt4ojq2cMryxVmwdnqoaENomfKENqYXjvqk",
  "key18": "2AJNvbPzc17uXDQKZVNYYyFhFwa6QVmXBF3eWw66AYAu6FTD7SoH3r1LDKQXD4dxqGRQ95XXhZQyQma2xsSMari8",
  "key19": "MAjNAezUuysSLbW86mfmXAcuACid9N9BxykBSqpBiVd3BdYzNv6vGmMCzVSwYqzAxTWet1U4HnDBYypgYU69Vf6",
  "key20": "48LoVCk4mid3tniTgHRuBnAf7gKbAfeupcLaUpaKztPjHaHNr3U3i4s34ATPSRXGRnVtjUYxS7Gxo3GeKcA3Fykz",
  "key21": "4PVkbMPNQqF6ARgPBEWNTC5z2dFiRfJMqufF4yDAzLcpBkyj9psZFZ5TPnZ2ncwJAM6zBB1s2vRuws25jAm8DTjm",
  "key22": "5xAuKzuyVg2bd2T9dba33DV3pcFV4etdoEcaz4VSeA6YwKn8RgBvTySsK3nCLuBo3rPJ2TtZvWaPL28UL6HMbcq3",
  "key23": "4GB1SZJ4w1Cz6yVCKCdCyK38UKt3fqURJ3f8Wm3Eb1VbTsPGD61ccT59JpfCCk5gnWReMk5ToT9krbVzuJAJCdAn",
  "key24": "5Z1eg625oW4PCjZnrPXarFfkCtayMRNNW3hseGD87yJEc2KimYinmduEBmoqjfEZQ22HHmyXoBtsespwdRrMNV97",
  "key25": "4XDaZggyu1jtSHxtQBJvci4bv3j8UNhUxmY8KPdxwgjLnJWD2QEx7ted64FeQpUoCoYECs5UywF3yZcDeBwnoD8y",
  "key26": "5TGQoiwiQcKHxRuUc2DAk5CH2f2uD1rPiHW5dAn8z8ify3r4ciyoJvP4rWtk8iHtjHGk7BAWCYFSzg65RG9g7brU",
  "key27": "4XKM32EoLLfibBNN5f3ZXdUYTCRAS4MJTLpsJURYYCnKo2nT4zbhkqruSmfpp6WqdogiJurubffHq4cdCZni1Q6g",
  "key28": "2M8S8UfK7PmSubuHANRNTFWUVpHbU8ZDty9QjHeqg7atHnE5o1cP9pafyhmEnZFYEHAQ7LeeRQh4VbfQb11JkWqU",
  "key29": "38XHvKep6quy3FV7Dv6pGnKJWP9BtGVDwaU4hmKT5W2ZCB89AgThPuepkLka4GqFpYExWHGBg6QY2ai5GCX7TZk5",
  "key30": "4pMNDZGAoBLfVYbKPn1kWiv4ZZANgzJzTk9RE2fugn9CaPswmGeKMWx3412Nj2GbnUGKJ4vaPacBPstq2bM8KVmi",
  "key31": "4Y1jBQv7AZ8nny8vXQkUr1286GvbQCnDZ3KES2oF76GtiPsqFRW5uJR3KBFGRM8rHodMnT3zJb2VhUkB9n8hdQLG",
  "key32": "912eUa66RqjcfUxXW5Kvs2YDrohyt1FqXwVx95PSpbqhCyuTBTXinFXTJ6C4NmkdrykRX5176oqvKPcWw22Dqu8"
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
