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
    "QyGUb88ZGBDcLrTEFQwaUGCDGheNGAGWqfzawZF3qYTd5uSVRiURWCxK6XfUYJ7esQx3sVpAWXnwGYsgdQGtwYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6yjDUt4sbcQEjbw5vHTY1PxD9JNZC1MNZhdJ3cmvaSPW9xbo9gVaVtC1NZnhErtkV57fbvYgjp6fa5JLDWyemV",
  "key1": "2KQ6pPhijLYJhgRUhq6YCwhQE1jta8f4K9vzzCa75k99pvhEFsw4PRiY6bhkeJEWjAxL2QnKbg7G3YRvYLHvRcEC",
  "key2": "59q618tqWgDJEP7A5QJTARdesWDW4FQKRAgvjLXC27v5LkJWbN6m3MPXrRFQGJyxfaVe95pFAGX7qVj6wnRiqhuP",
  "key3": "4Cn3WwpAhhoubsdcouRHE3Ewp6X2EwmPwzwFjWKin3rbGN9Tq7NZLAYUC2hMZF2sPPexLMbRwjV2cmDGZDA7NYPA",
  "key4": "63Qq4Y3LB2HQMDgrqCtYLqNjsD1jy9YwZYYjj3pSht8C3xpmKveogzUtwpXRgJFnCaZ7aMowHDSVY8ZB43pX7k8a",
  "key5": "2qSdhXgj1QXNSddRxJ9XDgsnv2YttEVrZot7bNbsBdrYTG9TFrqA7rBGqvPh3MQKnWZVuUfEZrbxbeVMupxGH2o3",
  "key6": "uLiFVpn1s29wEtaz77Qa1nDYgXXBcZPRoTMZbEw4Y4Gr78iPYwWaMcbGrLGyj9JanwjpYzbv7eRYEsfUuBuwNP4",
  "key7": "3k71bK9NpvCiDp9BacUSr3rZ5qkhWE6R5SCAA4Mp3GNNsrXzEdHUtf3JrQgTukL1eFfJKUMk7UNBMu7NtwGEnvaU",
  "key8": "4kSNfXh5m2ytzAkvaEUngFeCtNBh85JmFDCQCkZPnTqiSfKYZD7DNUjGJExpRKvQakyhzeanSwKdAXnsRRghVPjz",
  "key9": "D8RzQNbxYYNniTK9aHV4VZaNEvasanRL3Y2WaQRcTokx4512VR1FH1yexJB2uYS7fSHjAWbozL9eL2Th1AP97Db",
  "key10": "5349zUF76LC22kJSw6RdUHbLF9otioGzzQa3bEEew7yYng4nhvGSRu12T1M8mdwmf3szUuLGhjEYdTY1ZbzqGgY7",
  "key11": "4etyDdNYAvnzF4uL8vAHJeZCaBndaEbrBWesc7taujJgPH4yGM7ARALXLxcKHkw4rZocMB2g9zmUkZfQxaDnm8bj",
  "key12": "2hqC3Cip8zmAWi6L8At2x5Xarc2RTRvVBgtfViQRtrvjr5Jmw5gzhDcCAoRAicRtzKzQy3dMPxjdzJVfRL5vErxh",
  "key13": "3nkPpfuLUeryRUCqkdBX9PaXpeGX6rMUQp7p93twMEzkwiRmk59sR2bqoXNMhGnTXCQYzen1ZHjcjDVHv5qYbRip",
  "key14": "3s5ErW9BWKSqgWAy3KhbCrkmZ7kqd2TPkxyBjx726TjS1ttEMMXxsnZAkeUB5Lwx4v8CjqMnVytPdfXhshMLXwh2",
  "key15": "5EgC6HpAXrzWxyT7tGfuFnV5CLpzR8nuVVkGtQ4jyZ2nZtxHVYZkCJKwypUrvqjZ77C4KH5DakvhWgCyhzsKkkRT",
  "key16": "23PdWSBxiZrxUc5UiNQ3K75bnr6DRmBVK3H6HS5898Dvr7acCHsFxm9CuE8whSjdAbKCEVBT8TSQL221szGVa6ak",
  "key17": "Xwy2pSGEdUS7dzNr2f1mnjFxw6tSQpW54eGGRriMZx95yhA62TCrnMhD5Y3PQdizT1u1t4q67rJuYNsQeU1HZAZ",
  "key18": "28wfBTGVVaRjD9NhDyV6ieCmvZEBvgyitxq18zYNtanntt3FvmPuYoLnH52gReeM7hzLc9RyhabPjvXQEtyVHvG1",
  "key19": "31Bcy1rAYQRFm3Lvr8nLAQ3KVNq6atSZ9jr1a91VwQsysjnZTejGvv9a29r38XKZ2bjnZY8vPnWuwvP8yNRAi1Y6",
  "key20": "4yos8rE8kDW3Tfi1MVD3swhJXD7cQjKskSTvybTF6mPqYati8Ugby4Bm6sWhamR9uUEcjRRPtoChbU7B2j2WsVqE",
  "key21": "4z3cz2NPLqv9ftwii4JdV4KEytt8KXGLVxwYwFPMa4R2sGSvxV6MtsMZ1YuZfvLJRBbMTWFhuxwcxGLSewoAKAQy",
  "key22": "2nYr2tCfR1vkrgtdb9d9zZZrsYoqgsGBBUqNMtqaXJEy4HtGUnaM2h4itgv9PyQo7EeVdKGbZx7cxbG6spSDNeRr",
  "key23": "5PSuqtcQQVQEYVPaYAZTP1etZdAkFhd3Z8uXRPhjTUXMvKJxd2Bk2LyFiekNsVozHCJCERRKJqusfzf8mwQFccNk",
  "key24": "4Kz1Ye6DbnucXr3DgqxM1njQhrCapgnh3k1bP95MRrM51qG4xD9YeNQR3ynF37gPX98juSGKTVmjwgjQhygS3U72",
  "key25": "5VGW5WuBaggxVXVir35JmLjbKXrSu7XTh2SDAT8CEYyKdaTZFqTiMAFm6Ufic7f15U9pgPSUbEnU7mbq1Fhr93oF",
  "key26": "wvtkbwtYCDArNcxZu4uU1DGd8EDxW6RZXijFFVq65iNXXH3NTHWxoGzb57NYysccMG5X84NxmsSM2Zoef8cEzsj",
  "key27": "2dmr44iGNokKQ546wjMkjBAHm1jMRnyUV3zMjjoGzSWpbpUTihkCniCUkDDtLZStKBKGL4oeHGX8gJgdjdED4M1A",
  "key28": "37YpTPnuNom7ZnLiV85iVB3jnzqQJeg4n42WZyFJuA2aH2fHyKjNXF953qHVxBLkyx9WgDA1zXswZ7krtPM67MRB",
  "key29": "2YQhP6qHvMJKSnNXTtmC8xUwpX8W17mZDHskTeJ1hwdHB58hn36DeaudMkTRLDkbgjx5nPCeTzikeTewh2oq9zzE",
  "key30": "44K4qf4hUBmhcL7ogQmZmFJarNaGZzQvQPb923oVA7zdiLegK6qiZaLgsNe52CjFk5AzSNiDc3LVsS6etB298SjA",
  "key31": "3Yzi79LHZW8ohGwKPGEP21Vz4TnsxDA8LEv3EtUdRrbyqPda9G5wfrP2zotpb2BDzZiUaHZNA9C7DDBwpmvb1YM",
  "key32": "3UBqWvzVRDbfbL5mr4wasBQUhsJiXn7CideeMJojPDn52Lz5FDBXdScoQbBSXpxUcBZZe7KZ6AEtisD42K1SahN3",
  "key33": "LDiBfdNnNVgZTBC9F41TCMs84W2YCTKhXV23wvX3vRMLtTS1gx3oab6TvWXkk9i8FAaCZG27FtPtoubgPwj638w",
  "key34": "FsmpnvpJ6onHc8WSEVdTaCcB27NzEPMgq5CoTnUXBk4pUZaRSp1oeE6yozi2G4DN3smaq6wtyZ9uwADfvFH7sPX"
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
