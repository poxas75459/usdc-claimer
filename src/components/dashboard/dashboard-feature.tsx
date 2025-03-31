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
    "2fJ9Rewmvv88jWEH6BCgexXTEMKxy8EzmV7YpM4jjEGm2j38ZtZWVKePWBqx1Z7b1reeCRPJ3PaRf3VMFZ1F79Ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YVpNdGQXrUdy77NHBJty97u4UBQeNkiKEhmbW4MzzmRcMvBoqAYqNdjXQwZJKRZsWgMRNFaYkCCXpsASPduCdWy",
  "key1": "4euzgXJpCmY4DEtkdbxR78oHW6cCn2xQXHDMyMzem6WB7jhRnK4tHkkNVZr5i4JCERsT5wEwhqu45tidz1GXNroX",
  "key2": "4tCFniyzGSAcWeQv1uS7oZRZpfjP711SSQW6sPQ3ArGCzCFYrTnJBGcZdx495VZ3cXD7XukMifRQFMJ9QZmHyBvM",
  "key3": "2rsFUbZ41wHS9ydeEymAUZBTqJc8gLDQPXrJo1E4W5tg2UBqaf6aLKPSZPh2rMm1fgzv5NRhvAxrJA71u2Mw8xhR",
  "key4": "49ZdBPzp2c3xKFZDwWNLezGjNaXRwXG8WxRtJyjazC4qeaDxNTY8DxM73nAvVWTthoFGLTJPWmPrPSQRP6juZZnq",
  "key5": "5YW7hUX57TNvvh6LnpD1kCv89yH8wuNwJW1eqMXPrjGoXQZ4EzAMrYph5YQCJSFLvVhEFkCBaF9GiPkNTK9KTLzH",
  "key6": "3JfggE4zUdQfiwRxc984AdL5eu1G7wBJ5rwDz6fD4TEtvhVVhoMd7DDtTDQTcrGbyV5B9A5ifNeGDSjDGjBatfPF",
  "key7": "T5rQfrdWHLxKrqQqQ7GgEvayK9L8wab5Uc6KhrvznM21hY6HDGkog3GmXaUjBgfKGdLhp7YVHsehimWo3khZ4Lu",
  "key8": "2VLVVgttV1Y6CCup3Fm2ZXAba3UYVALVnpLkDXHS8wuFxVC3Sv9XEJfWgUmvhkUBsCNPhV2PpNEwFouCZXGQEh2R",
  "key9": "JzfCKmmQndbCvFnwigzSsuvm9qRtQam1smoAPnt5k7kSYcdhjbYm5mPWeUHN51xkppJso3jLALoxgA95MPPt1fw",
  "key10": "4ToYiSMoewBexfzsM9um4UWsxREH2GGJt6zzFxKRJMzDyKxEvsFJeSU2hgjkuAzFtnKFG4myb9cwxqNi4ZZ8CAPm",
  "key11": "4XQA9GQxk32dKMVEX2yegCSxnTQWSJAzjzFrE7tiVhUX3PRz25WKuidArAq2x9MachpuJRKyK2j9PZasvtZDtknp",
  "key12": "HSbgGmgthxhjvbCnSajZKnuh5bA1cBM9biAwHqJs9XWzK1QSnWxcCMGPmpiuHEDHp3Yt422zcZGpYXacosoqTfQ",
  "key13": "28Ktp3kjsg877MT7gD6741xPGF1rXhw32D416BDzKFnQPzBfePGZPNmNKX5uncPKg2de2MMEdLj76WUqPbnENcMW",
  "key14": "3kRoaznBN4TPNuD2K4Q2Uqiq1qckxTS79C2RKvygGbJsk6UzbAGu7aVNp3NCBJvQrU91mTGHGcrBv7nPmECmPH3t",
  "key15": "2wGqXLB6LQHGjNZPGmsXQXzE6wrs25sX86ESN2RLSjqxzC6hgizU1ddETbQkrSvsEYtqeFdd5BuzzMWiuCpRf3gL",
  "key16": "CYJvcWzMN9Qz1gXHYVEeniSgWqRKVospixMEoWGCL3UZdj2zRb4Ph6A8wtHkjk1wn67dcnZbd1P7tv52DFC8gtz",
  "key17": "46V1LgiRLuGYnmdSdcketDWUbGxvkoJqibtTvB4fG3RNDJ4gbYK6Uev9Wc4rnBrU17ECZQdHKnW51MDRY5sW9hmV",
  "key18": "3TWTXmz5gRpFsFXkhTbwsUSGeCtQYzvgbJkJ4f1vXEErJh51iGAoCVbmVyKkj9cLeDZ7nRrBg7AHnQ1kiiohyt6o",
  "key19": "XXXiLQGidL45XysTtab1oLVwqJFEDK2CtJCAMWbxMhk45ecdBrqyv5tV1VUefJpmV6h3fRrbvtzu1A6M1Eg6PK1",
  "key20": "5iUr9SHmhRMuNFQryCud1ohJcBCMX3kFknCqW2ez9tKYRRA1vJv6H8k3E6iBxXS5dyNEMP1EkmvN9U8HPSyhbNZB",
  "key21": "3LfngPdJLK3KjwAHj5jpVmQxED39vfGPvjX4vQMG1RzPK3JKoJbVK77EZ5wRCgLgsLtcmo5pBAK65tBvAW3aShpj",
  "key22": "5Brv28eXZELsnqU1Rbeg4pCqybFFmDVcNEHo62EwbA8TSpktZpdCSkYZ8KG8WH14Z5j6BWrNE187QN7SuHbcr4P6",
  "key23": "3hT1Gg7km4P5T8CNr3jVB126S6Y573wVpTLzugN81etv2ErjRQzbtVRZegLXtPebinnjCqqgEJWfw7vHY5MYHKeu",
  "key24": "2o5HXAX5AokEWkJiYz5dTa5uv4MNzpifZCjcngZs3iZRBcF1EyrsuqJU8T7WXSNSyMMRmCm4dMTf7YREvMVVGr4W",
  "key25": "LLziDYtqfH3geTAsxw9YQNehZC14CYhjzFCe7HHuPVGzr1jnVaJo35B5w36ozCWmW6ua7gNeA4bqWsmyQJxToEK",
  "key26": "5nNu8ph9J2kBmgUkqV9nvyahNVpimapUiR94BDwKjaGU81xf56DeyrpeSWJ2G2gkfe3z5MjrKKuNfjq6SYxWtb2F",
  "key27": "8NDeRu3FirW8Xj8LBMH8sv7Cs9n1KZKnFB72nKjQYPFxsiduBGoRQDVwUzwLF6vtmDLoizVCH3qEiA2NZm6Z6JH",
  "key28": "3DLMZb9R1pWNSKkRbpzTd1UtscVe3WgupP1UdddMKtQh5NDWEG3EBEDg5Ao9y3FrasgFhgktDbbG9KAtyaTp7ghF",
  "key29": "5dxsykQqs2iBoCocYE1SczAVXSTAnSD88RQTYGnFhKi9LUnKZNXY1PG7nmCNTAPfWhRgUxj154RY7F55ZB2vY51s",
  "key30": "2LtQd2xcNBQG5x39x3vqgWtNdJSvdi1Ut4DqB2rzf9fzBdeXrR5nBgorGRtzhK3YSPZioRXrEjdmzow18NYm1ShE",
  "key31": "46x1ugbXNpFoxHVFjwb9jRnjdDeEnbRC43j4bcUnQfqU9sLf7fvjhmkx1QHAFcK9796ekEuGthC7cfpmQskAZUsC",
  "key32": "3pZgqJuFzRvWyj7RrHWCS1XDkwTycMFS8Fo4Ki6DxuTnVTbNTu7EFhroUzsXnWNQXmniivV7A98RdKojBqLb6H8p",
  "key33": "59xKGdqcYyjUXTeyPUSLEpKtQUtwZMhcNWSBWgewtCKmtXAUM4cavX7nBbqFjDLSXF95EoWRsMR42Fd35hbyUqKF",
  "key34": "631HU7NqwZxo6P8d1Bp7hGE4ra2uNLYadSNvqNB7Sb9pqEfu5Dwkfnmnyksm74cKxxY6SH1d7afs7fej2khyqhSx",
  "key35": "5R72mr41pT96D2LSLA3yRDqBKnmCP25jtUU8tPPGZDMiEzJ7RKigunGfBa7jD1MczPVRBdZPRP9FxMUTThbgxdAL",
  "key36": "5Hzj94jQ4GBAoGPoxRK5GUuawYomWmnBqiEp2wRreMjWWZxoqe56dHyPPPJV4CruDnNkzYsfZteBFTmidgVkDFUR",
  "key37": "2SwoNkgXKSpUitWNUKnoZbSVzRsqZvNRwSWZJX37tQSSvWZjnwnqVbLvf6JDWt5TtjnW52au7pGY9UeGLNBqXKFs",
  "key38": "47dN1AwNVuV8KxA9ZmiFQ5jn8HkagMUP7dnGShtQWbH53X6CQNuhuiy9MBUhQbHmd9H7znKAVdrBqvHHTDVpbRgf",
  "key39": "dkXniLYARtzUJBcm7khAcTQpt4vyZ479bSQf17rUZhK4Hq8sb78ETFcKHaWQuQrHHfbDxFiHKRczNxd4zqjKqhp"
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
