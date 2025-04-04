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
    "44qpAHePSzJXh6KfM7SVGSRGJGYRCWxyzFcN33ku7Z9L7sYvHUtSGJE3hpKtxj1ypeaTnYAj93uzoKJjDDVcJmW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCvbvQAiZx3G82uyEzRdj5KQW3X69wqLeSs63LkDDgQVeBZwXaA7mpENDMCD27ZeoTaMq47Lf11XJV8KB2a8X9B",
  "key1": "368fsPHkRzMGLBkeKLCzhrWqX6RF1Tjv2mZWFE77NRVsNdJMAjdf37xXWtyh6cfxWoVZzwDWVvr8UEC9rE1DUmhp",
  "key2": "3r9NpXSBF9dkfhrKJeA4qurLZJTGtZbzFTuvkqNxdPZrsxd4zJhfiGLjhzVYd8Tp1JgFSom1izGZ87XJSoAzkqvk",
  "key3": "3G6nF72AEXrxV1gGcUt6B2vdNaHXkeiQK1tpmYgNtudS4W6T18LpMzxDhMYkRgrrFPq9oDHDCmYZaaY2o6sv19T9",
  "key4": "3zosXPQpzqsD6oBGyhHBWWXvtaEeUcxrBEVrWY4t3YNhveowfQ1HAwDQVSnRUBy5cwUDerrP7eTFMDoUVtcF5io9",
  "key5": "3i54qAveLG4zSBGiBnE4zY46KcMJXguvbTBnKYAZP8nvUjcgLXz4TSzjcPJozk3SSWx7bVEoA9hnmfVaxMus5VP6",
  "key6": "5nPM9EjBXgqUmX1eabecugVsKh4fGqFuxkxr9HMj1K6SXASgfKshSgs3HWNTPphah5Hqz3Fqe9MY4wSVitvqN2D5",
  "key7": "4RYMWuqTCJV6grGRqqMT2u2ndhJrzb88vWCCfHMNxSeGXScmi7c1wX39okBFNQ4vZdnvEFFqrjCc6qLJ8gmQYksM",
  "key8": "5cJzPeCvz284p3GwdBBXED8mXHXEmu2WBSj8vLRVoxMbMz19AAVy93bg3Md2Hgzu3Dvb923UfqiNNBrQkbsQT1rj",
  "key9": "5TTHwt8JcigXgassi9CVYWKnTTj5Up5iZkepYGxWFKaxK65N1XHr1ZuwWVX6ZsNdtYYAFfjw5k56UBiUiYwHuiij",
  "key10": "k6DioJ3PjiZv1XmZLaxTFxRH6HsSjVneENT2q2SyacdE6bar8mpkMCEffBX6eiQSukkxRpS8kwEYZ3Pd9advzkm",
  "key11": "3oUAVEY6rPcXEJToyiNiEUKUtiSUPQDd97hKMGRGGnm5fnbPuwwnnTft6jnjGhbLKipfCoArtvvDBUZzJdNfTAVy",
  "key12": "5sYKzAzQd6Rnbd5MRvahkxhJsFH3pqdEKBK43QcDtJWJjYC9BabZAumWYu5DNXnHnJ1AbKhE2XKQbrUTGJST9hcR",
  "key13": "4HWTHTjiwnUmdHYv5cTdjTZCT7rB33XXxCH5g7qj2KrAviiNhGzedYcLGEwuQQvaDdk5GLj5xytPWPVK7j7G2TP4",
  "key14": "4raG2g12auSwwXdd7zKQGWA8Vh9xzFbUvEimFbrsWYDnrjySRB1cKHX6CX62mAe567Dr1TD6qyZHsP6J9Eq5Z7HQ",
  "key15": "64mA2SJLnsQfu8KbZQbnuHevGVv52tLhYe6RuqYBR6stkCPmPphNyZe1mo5TtLqrJ5gRFfdAYSzvcvVq7HDgeGfu",
  "key16": "2SBrNhAsdKEydthWSnNqg2iVPJZgf7CidzDpgXRCrcJs1zQoYDS9qbxaHDUagivhoy93faW9W4oKDmradvZsQZkz",
  "key17": "3dm2aFtAH8DLYSCm37LRkKo5Jws7qSdQUBFgjiSRjh1hzD6rt268JTXGpTHxnQHSwn2bTN4ZSxRJaxDSoBvsaCiA",
  "key18": "5aa2znCFwftP9ygEbhW8nkgDphNtH2S9eHW2P53X91vEeLkbrofBr4dNPrSomLb1QXhHt7q5gSK6ju8uVEetfwZ5",
  "key19": "3RkwL9uvFqKq5jFnrANDQR875pDBPXweeuJNgkTAnqPKevYkKqUhLwRM6d7tthPFVZm9VYKHmjfFUEKc4prh7pYp",
  "key20": "XHDMFHrxq77ujMg7hL63k1y2HpJCF6bLJJwXdhtkEEY3TBkd7Xp1J9mJKYj7So5RZWbihXzutdnRKpMGWNkGtkn",
  "key21": "31K2hgb8tY4ernqYWK5GF9agw2SQAmq46cFVjnpwe7Y5fix3efJJkoGFTHx2prqJUQYfaf2oFpSBFx4gspc1AQ6p",
  "key22": "3aeGUmEcjfJPriXAvaAkfRdRhMvATH9imyJXSpseBn6q1zbmgozY6FLGLrBauhtg6FCtoCf8xivQw5PfaDDRhVYy",
  "key23": "Y9AVb4isYL6t51k4FHtXAEpanXRQZTm4hHxJWznuzqdJTsy5AwJN73MdJgF6uXva9hatHa8wbpELmCXUZKvuJUp",
  "key24": "4fdGdshQHstmZouVgBRe9hwNuBqKQ9qweBMYqAebxjaY1hU69c17NYjeiDtWdXhNGfdK3YYcTjxkNPUDSobRKg4E",
  "key25": "5b8ymG5ghNrbZvbnNZ6ftDtFmhefWFsoFx5E7PShJQFVLzAD6kSe3J5tKWr51MtSuZ2u7G8NTA4zHdoXEwJ7r13y",
  "key26": "37FpjcV2DYPjTWxu9ihPM32AduFiLoJFb3HB8SJydF34BXXZhcPBmKCo11RpGAzczyZJDAityce6Cnkdiis1Q4Ft"
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
