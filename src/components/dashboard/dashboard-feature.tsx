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
    "3cvp4bhPr967dwwwcsqeoipmDGbn5hcFw4tPj7VHBBoh54J4FAHdiQp6dwC8HY3dgsa8bXZUs9YTaxjgCtKWaR4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d7bPXmRhr1LJDnwmMTnCfxXjAvZsBsGM5EHn31vn2CCqGf7y9vYmwF5MKdCbm3VXBCkxXvs5iKiR5vTeJMCBPuX",
  "key1": "2MzK239ufygxNFJ2YjxXxTJntWS4crm7DKhpCTc4VvcGsUqP37gvgDozvoMruKoZ2WQ4EGtdK3gHtWrqdv77QtFv",
  "key2": "37RyEYZNu2hGPNZrMGFTHkKKNDmPDV6fyDzdSVBXthch2gkt72f8LkS9qe5q1xtGJmKiizyH41xtMJDbEkYkPHnD",
  "key3": "29Xn3VL66J4UJETixBa1fWijR4bE8RCszjQGfVpn6LryrLo3U1sN6YubiRRLLXBvF4NH2gJdM1aTwziZQ2xwXCFS",
  "key4": "W98NGqtcPNFh7Q7M851kqFixRf1kabrHQSjRB2RJuh2JoDxsmwhgmW5rz4KJwGcoPRP4gE3vVYY5Zyz7jYjDGc9",
  "key5": "58hf5uYKk3XU6qYpjEFhejNoJcLXasidY7QPXDSjxCMDu3UddS6rp5o5nk7zFGWmWWcuDyJYQ96nA8CahodMJ1UM",
  "key6": "5FbxpJTWefdsogh4hafVKiyDpFEBegPtHBs5QekiGbk17TWSzMoLWY4BPTT3qSv8QUWfgnqLcctTSSr9NwEgX6Ao",
  "key7": "3637KXiGH6XMfKJaRaeRZZArVCiMvoXGrJBYRmoffxi1qqgo14hopFVZvr99hSNkqmjo9cM1tgV4n9WtrmBMd2h7",
  "key8": "4EK9LRTU4Ta5o29rcR2VxZPSmkFeqrTdFNrvZttSniKDExpT85TmyeVCjBhgoCV6J1r8hBBjfvQbswVHr7yKAXKP",
  "key9": "4Zz4BL83yfuTWN9fRPFwAGRhCa4ZqMCw9c27i2CCf714tcggWVVJUnhfqLFULgrzybwSYG8hBA1zstdPV2xt5y9h",
  "key10": "5ZhGc3rGibgnw9o3oNTBqf7jTgUYzXdfRE5BZNw1xm9puXKop57A1QtcimmbnU633RiNZY6v7UUQpjsViSjGqYQr",
  "key11": "4Si3drVBzDtaWY4Yeq5Vj5ofLsUFUxUHH7XtxdVSU5sKfD4UvEE37emAZ3mg1nn9S3ZQ62BpP81xDHx8Tbjfb788",
  "key12": "SknQD2DeKhDStDgz3tj4GkpTjyaoJtyJV4hudaE46DKzbNAuTXc28nBTDbesRKhqfGMrNRhvKmQrNpmGtEydTwN",
  "key13": "36vcwna5n4WMtt39ETjhKTeqwhHVQWgToLkiQCqnQeJMm4fbNH2n6DX1cS8ojc7MfUcftRUQE9YJbWPP3dLhQ5sC",
  "key14": "61cYRdMvEBd6JsyLTKohjhw8t3KzQRZKPtstiWErbWAkYtCRmqNCF6KVRCgJnSirH46eCUWe4aTu8kX7sEJAwexS",
  "key15": "4BMK1pMEohNNeMPSsDyE71drm3e1qr4ceEKVZB6FueeYdq2bbrNg33NfwyJJ92XcSfMswVbzPwKogtbz1ZvyGUv9",
  "key16": "3JZst4V5p6KqXVxu3QChvJGyUERDGhY7hhT3bRJTZYkUMbDA8435iRp5XrGhsEpYvjd7DbnoLGLRK1LHzR7pD4yq",
  "key17": "2BtU6LrSNz2R34u9Wc8oMwcL24sK59uUaTxKif3GGENduL5p5X1ffvgERwQzMBcj3pa77LiKD1uYrpwx3vktA2Nq",
  "key18": "36k1jyKwuR5R4scVh65uPBHfYsPnn21HYYKXy42bdRp8osFagtbZn5JnQnjqGvQv5bd7VSUyB7qqUEcmCVdJvxqn",
  "key19": "2LKJ9vuapxPvZj3aXkKdBURbV6kG73qaiHcMEKVURho2u9bhsZAaaKX4swuRWMKnjzvbsLqSuAh4oXJ9xNNGH9Hg",
  "key20": "4uFZGZwsd3NgDPyN5ZVHLpUyTmG1n3CuKJ1raEcXpNJ3DEn3h5RKQAbDYVWivAPXibQC2J4UUwY132N8YpBKdD5a",
  "key21": "5qnEJF4JRXJFhKMA8uws8JVr3aERwvz5ud6843DSFUVV7cBYwf2Q365NPTajERTamhjG2ttt4eHNSzFEhYyyq7zU",
  "key22": "45rx6dTUf6smp6nUYygjFXSXCLdx7mDqiZ2fhJhvRmKWSWPzDJdqFzpnGcsvEJbpNFpi1BGXT4JLvyQjmDUn3m9R",
  "key23": "4CTvTyL4AAwdn4pQy5qDaVAK3NcsA1BhAYswP2spNjFffveJt7HHLrySE5ZkmHvnF888m8WsjNLeUWdnj7Wofyzc",
  "key24": "5NzzRBM1wswbPQzdyGdamxA1Yb7BaMBxAb9JiZxtQyUmCoHXxHXeuo5cawPFjGnogTxZJKdiHFNxJ9vbY4FDR9XL",
  "key25": "5LPnxj3mxMHEDdKpb7tmmeJ8oCuY1NSeCAMr2uTT8pDeoG5KoTH74kns1x9FSwx73G8tNKBtR32mYPYXnjWpKFxr",
  "key26": "4V1tZBB6JAMD79BvGysJYWjWdunesWLxFKQsc8J2YMPAC4hZRp8BdnZ1BEBuP2YUZiockK6hA4gC77mMRdtquxyt",
  "key27": "3TphUEkZsvuXHZgb5sQYg8tpmsCmb2LxU1SYekWS5QjxbFVTDLgLtnq4MRmovn8BznRhmuVkhLZxCTM1ohNGP6kf",
  "key28": "3RZ2MmzakR8GDVSwa228hcPDTJ2EUzxsr1ja2EarWceZvFCeN5VA9QekHbMeyuQejw1d4PdFyA1Ph1gk6RFYdt9k",
  "key29": "48ydCHXGCnTSwoGsr99CTwqSR6rzUBhgc7PQMAxe1trHHYkAPrKuQXmF9CPWoAwgS8ePoSTX1Yjs4ze46kom9kto",
  "key30": "3ocLmUvCchoPakqgEkPoMXXVAfkaamSFeeXw4SWDdMDGhiXUeua2tujyX253hwNAN7aLKBJosgJAxT3UVkopM1hE",
  "key31": "2f118ghxwv4b7RyzPyBMn4LT2PUdaZf74p4p5bfPhWiBTMaZq6c2t1DJfhBQkXGvg8UBzJPzzrqhfDoEATiaH5gP",
  "key32": "rU69iynGsXm9DnxJE8UTDWbRHLdrwi4apzeGhJnosDRcx21HZvhFUtm9VTJKvkhMtrDLNvwbgjAMbiE7zr3eeuS",
  "key33": "4n1MSmbUCaefLurfqq2o8j1pjku5UCAtynk9QhnL9PHfbczfq4S9Urxz9Q2pqqmbbcQNkfnMn2TgBP77vYxnHAKw",
  "key34": "5VRx6REjj4fU4vatnkFtbM3KWXyT7xET8Z1B2EXmge4mT7pzFYjpw9kNhRGBkZ97kTZZpuG5t3Fp8jpi8YWST3XP",
  "key35": "G7sjkx7NPd6844hZSrHqZbW5Ces6Ew7C2Tqm5Qbw8C8hrpqV4QZBqvUso3sAMkPaCc4EJHr7Lk3SuCtkSkKzwLd",
  "key36": "3Va7BX8ucV19D8Km4Fp7UaEYzveWj2Fk8GBHRMZLmPsSCmyWYy8exgLMcDc9WMQvFweACWa9tkaAhs3UK16rHsH7",
  "key37": "kSX2BYuZMXm3ydncepJKgM7yjH52ywfW6iS6VCfLbkxmpFfQBMre5s7wPWMVUKwV1xYE4iL7fJjejkUwVBk1ZhA",
  "key38": "61Wto8LMzUR2eJCUa8DnrWwh3P5yGrnTrpdG8xmxtxtnLbCgMrnpJGTzcamQtrf2rseHs56EfDdKuYnwP4AxadB1",
  "key39": "3XjBvYJVbGxu1pJ6Z5ivorF9YakGRLxric1qcNy51KNR7XY3XXfytPdR5kuh6g1Hv31daSHenQowpfmkz29V7yw7",
  "key40": "D3A1ZD8T5rU4nxpY2SxVC5HUfg7NAazx5xRbnAK38ynGkjwX5MKamrjDVUKvYtBi26nUbSC9kru8P14LZj1YpxB",
  "key41": "2jUgrpvYftui4gsgUK7sSQzW4agu1yEYBoQqDRn2UJE4WL1sukBBkDss7V4vYFefmXTm1JGCva127FRdxzNKQNkU",
  "key42": "4wuKytFBS8M25bDPC8wbyFfgAxTfkVtJoeVv9Fs9pxhvQSUhFjppCzMcS6bL3zzG7q2XWZLSoCMMdZkEFxr7jGzz",
  "key43": "2H7xGwXUAreZqH2dAKpQKBPEaPAB4xHU3mUyVzwiXQdQgPpuVLmAnxdHixSaYgbZ152zjNADSVVbMzXPcztiKmyf",
  "key44": "312HZaDw3mv98KJ5c38vMaX5Wk7iK5gSCqsJW2dHZjtnsRK2UQuv6jHqqRLjZ868iiPDLWXHWbUQ257smWDFMh9D",
  "key45": "2YsGrriZuD4qkiuneaQK9RwEpgdXCB1EntmuvNx7wUmbDPvFVNx4tdSMsD3s4pQnw8Xrx6wfCk28wmb4QbZYAsVN",
  "key46": "31jbNWks64W9dWetxpGL5QGaXKUpwFDS6PDYh8R2NtEKdQ4yY73ueTcpxREs88TzcEsR1LehALFnv7jxvWE3GRk2"
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
