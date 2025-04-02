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
    "45fh18L1GAFrvBHA1KLqssUkshoLGRjCPhP5iYoExaYVaTF1FhBXxwnVxr3MJ8XtuLwaDXeZsbKhzN1uMh2cmS98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pPbGwrb5b23zdg6HD1Le1qp3CeMqmwa44TiR55bAu3zVP8oNV2XvihEauDxtv7W9Jmyinm66JzUgs8UCbftuiz",
  "key1": "5bwtE5VvGQypz8h3bpnXEhw1TAMtZb5BRxdDbN9sTv5kamwB2KETqsN83zwfFAqDNWvLkij8oa7D7K3tK7YN2qiP",
  "key2": "jnKwL8BTsuLHaLXKgPS4fdB6Wf6SXSZkCCnkx7DzzbsHn6noPXkhj3vqRGu6Ts5PW41du9ssF1ZMFvcXJQ4Pic2",
  "key3": "ZRE1qss3fPxYtm48SVYBB628JY51SczQBMEFEQn7ixF1FMXoAzt75tL7FW1CruYgyuUY5FD9rw3QL6Lnhxz91Uw",
  "key4": "5pq5LwGQg4YKgiaDiJgF9t4A1LT9v5Zjmti3upCFfsfgUDGuSbdfRgQcbv2miwLMKdd4szzo3xtxya8Juf285JRp",
  "key5": "4MStZScp9egRpDNNou8RafcZGpWsG6xXRHk5J1Q5DPyLxXUc3MY5KPUsrXwo3u64J4wkYfCiXoky5gq6mtNeWnLP",
  "key6": "3QdADRsa8iDi66Fw7qMDZeqAZyNzVEN1YuG58uGCcetYxMcMV8BiXXTJrqy2mgYf3tcyFMhXvU98vR5iRQmjhfbT",
  "key7": "5JZ9Y9geLU3vJa6qVNTqt94ESguaoagsymYkAxEorVoV1c35exSyEPgb22X75RTPLCL3K7cJhG9w82kywetTDKG4",
  "key8": "2M5bao2yFH2tCMe9JeKYGtRhTccvZfqWWsXt8NSfzxcWm2jpDm4YoiuoSLaw3fHN7CcPLiXspJH7rhfuQ8CrJKHw",
  "key9": "2EHNhwU8Gw5cxg6WRLbZEGZoZEJvpFtzs6ShLwW3RkEhnGLGz5ieRrieygPGKwZ6r8XigUTQZUX8U4htraGHHAbH",
  "key10": "4ZroNKpz5KHntGHVG9Dk3MEsGAQAoLgXAbLCG38ugw6qPqtSWQkKJVAYXBQABiWNwVQVRzZkpf7zTeLZk28sfWLf",
  "key11": "d3Ae9KxZirjjVoHEvkUSQrdLz6W9MjjBizx1qso2v3nhWv6MGAQ6rSxUweKTzM2F5uxcnHs4JhGLLxMrTbeW1CR",
  "key12": "5PcDofWj3Yuh6RfK5cKCfr6kQsPPGFiyw9uigPoRM2qfKoWmiv8uBdZckMzXvtVT9Es5RqdJzuPNDQMJdUmQxTFL",
  "key13": "4nbcpdBcAKwvTgfh2bUzTRuFK5CNyajwBorauWjR2476TfyPCgtBAGq6g4aom4D2yAxg8U72i56iBngmbkxjRhFv",
  "key14": "2LdDmWRjfGRbMFz2etm5eo6EjMi8Zmj22o1ii9dMaC7R1MtLPRd53Btp5MaZv2Q6dQQB2uYBJ6sEvpiEkjDhSMSg",
  "key15": "2s9vPVyiqnhVEfWTASvF4gZLfRR8zaE5snTHCZZynhvKKvKbDYVJjCMESpjWjDDK4avk5bpC9HxzG4enEXrepSgi",
  "key16": "59CSYvc3FWbuBPbZkxfCyH7u8oKhNTFdRL9dEukcPTViyKPw7j9wn8zcU2bo26sGb6zFMsFToSyKFJjzpj6PDKH6",
  "key17": "34RX1NWpf5XvC4H5jjRS1vSx5PZ5ojee63JRJMKXrCEMM6HwGgvp2idsfiqu9TDcSDWnxysz3ATd5S4Q3u8nWee4",
  "key18": "457EjbnMWfzLkfxRLESEVud8WH9TkXUvkfU9JmvP7Ke19jniJiEfpMh4b5J9ugu9dMTwLpZRSaXTWQ3e9GrH4g4d",
  "key19": "4oKvLWYdAzkMmCBv5ZwVzfkVucH3vBbLiCW2wNZGUKrMroRPfgDCyusiK5TFimbbVLSabJPpywq6L3sciZjVjfJL",
  "key20": "4TBNGgwPbXs1iHya8qFSL6xKjfPHaa7ozknRLXUgkzEKHK5sGgv8f48Zm14v2vU1vqeMPeyZUSCtJ66X2jep2YCn",
  "key21": "4Uti9yiHci3B97tNyDBBPTD2xneexFy15mPhEBo8syunCqNV9DdjJm8C2pofjjRDoQ8LwGAJAJ6t6j6yhT2CHqtP",
  "key22": "5QWJX2A269hhfpF2PdCfWcRwKxQnDnLmtBmAxyRLzuo74BbUmPWjTtNFg4qDxas6zb5uhvh3256nprFEM9tRzB5T",
  "key23": "3rfpBXLszxDzqCijLCrdtBAabLj8VwkHFnQWkrF6NeNVyndpyxwS3F8ouw849GKr69DYj6VuJmf9ky9CWLzGJppt",
  "key24": "2fK9e3xB87YuGUwypNNKRprD68fKZbrdYjBm1XjvgB1Kg2N8JwbnMQSjF4WZbRXPw6Ta1LYWvqZKEFHCYAPqzBSU",
  "key25": "5QCNhKW9gfgyNFDfddhcrAyN7K6oypvyigUNmb3SZnuK8ogf8mZfoRWts8VSJpBQxN4QpSWxrokPkWv1jZg6Jyxz",
  "key26": "Wsa246Yh6UvXX7WMvWiM3R7dQFnAvoCUmKAvpJpusS4oSHMrGpPLJMQqXpcyT9ArADfuRkSCRWJwmMuC34D93cX",
  "key27": "5SzgQq9jwrAbyZJSLHKQNTJyvEogBCFiYjihk2HP1LMbAzWNFRodgDiooZK4GKuY4QUxdzaSXcQY9q973FSEuDtM",
  "key28": "4wfphX6kXcjjgA8FFwBt6HVz4nFEe7rg3hn55tKN9i2eWNUiEjFTJWvv5W4hVabsNjnk46TYiV5G83AFydpNHEEt",
  "key29": "4SF4DnMJ7itf3aPE5rvAy8TUKVmB1qjfG7BgDSuupT1pWxr1YExBGYxTip6m6VPf4Lhv24cP1YQmgtvnBgKf9JsQ",
  "key30": "45Qpqtab4p7Tt35QHpQVQtf2XbhuQRbuDuY4pWN3bYmsdd32HaSM1fMPdkvE5kpSpv614hgTsnMgPYYimDLGDTr6",
  "key31": "2aERQB3XALsFxX7SL6daXFtoNvF9c4AaxB1YKs8MT21wY9bg58C3Hu7puToY1DBMiBqwtbLKqjsaR41KdfWvvMGA",
  "key32": "3itZN6FixwNEhvZkY1vcyjFPHhaRedzNb9psPxAo14GmN5JBsBacYgawrHjvi23Dwy6faagFzMd6aNohvRqLxYLy",
  "key33": "2USjcAvEuCWhygBcYgmYJA8w1ZAsZG6pWFvXuzcqcCzPeYrZar8NGMyoj9LTkqFCN41VD1QRd2mrXgJyRqZPGTzP",
  "key34": "37cZeFApTEBeMVMjrSxGZRgTKyuvJKQz1mMtzJJ6GuB9bPMg9UJKwwDvKqnfau35z33mzGxDS91uRD3xn6hGDugp",
  "key35": "4FkdxXb81hviEqMySB57zpcELwfn5JM7292XRYAkH9jaFGKQ7ru2wJvcfSio223hja525BbLWZfMiA6ZdHANUBHM"
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
