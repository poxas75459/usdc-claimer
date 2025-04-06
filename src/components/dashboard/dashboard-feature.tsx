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
    "548pEgMzzQfYkMrUGriP44XVQGsPZyYhiqm5KVnV7a7Emgq4kcdJEyYPd8H77oHTDX3xBxvfF7qMCc1tFQe5yRSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYbKffNXkD6RgJJi2S7BPofi71ABZxhWcNxbDjFtHTFWuWEZQ9ZBWZF4odVbn46iFc5GX9U4re5dpHGMdYVMpne",
  "key1": "3jhhAJjDEjcBhTGQ5MiFjTaKSJyjmFCrSDyPDG6BoXBn7M18rEGUgm5Qg6JwoAgrBKwj5otXcTfEdJGZ5cFBeZdi",
  "key2": "iXzPVmeNrWEVDxFyob3wWppgj7pi9oUoJc2FpGdwABRaXY845YpgRabBLnTpfUnXFtLe2ufcgRiytjTKVAcUUZ6",
  "key3": "3scB2QhgXkGRF4XVn7BEpsXapaByQVSBP4QhYSDnexEuZfV5JFVav7mc7eELSSDoiaiPLtYMmeR2bpoR62kZ1xw2",
  "key4": "4M9YVxyCD3fCjGMbU5vuqGNM2rcL7JJ5Q37Ra43f3yvRcJMFdZsdXV9oPkN5AciwguTvJNAGby9TxhVEfWT7mBMk",
  "key5": "4ao1KGsWjFbvwXkzuoK5Uf6JRNvdfXSMvJCu9qCbxN4crkqdy5YK6WWbncDqSw3EKgtdBTyon7QdYNUKtsfn15rD",
  "key6": "5LtHSRbmTdRpHVQdRqBuJrjn1SaA4BU1j3arQpGpHMs1PCProZX5MBYDokBLVVKfA8sM5mCQzA1CwDG572M2Ujes",
  "key7": "5DXoDGbzPqJf7L7HvTMxEUAshs31xwbELvhc381746wgoGNhZNiJwBcnvX1jRmuEf9V3Z1RZeQEQCSeBx522qBQv",
  "key8": "4SKC88isyRG3BGhDoeE5ax1E3fnKCzDP9tiBTVHBgALy4UwxyC3oAFQfBZYpMjJuVtUQL71auTXpStbL1qhW6KaK",
  "key9": "4AMGxwMV99aQs5HapWU3Je3CfJq9A9hxrbvDBCUFaGDT8bApEJBgxhjbm4myYREb53Y46y35tYLHWK6Y52YMVsjV",
  "key10": "58CMRwWruBfqorJFNEZiEAsLStUoER1YmkEeYGz6C9vzDMFmUA9JC8PNGSeM5Rx7Bj6tM6EtCpbRZF9QxPGggPno",
  "key11": "27BStpuXTRKMtfWUgozKBVdxwbrgYPnbqD9am9DEXKYMqUEEzDrtWcrj18mkxBBPYCepmepJByE5MnwhUkQeUa3m",
  "key12": "CPKhuDZj6QAqCoJVPzCAFJNUFGSxpjVQtcrawy5FyjDwFnjwBGnDxc4MXH42XcT1kwq5inXmf41uJwMzLxces6P",
  "key13": "4dHy5VEuPy7Vfv5UQU93TQ1SSpzBZeNoPBJqxsQR6y978TBbzPVEYU7qUBzeMu5Sq2v5fzPyYesE9GwVGJESEec3",
  "key14": "5Cp7zn7yj1aqGhFZArt8DzKmgwNMhUm65Pcfqd4cPYiW3VXfR6b8R3vgPmZ6VqrQVNy8LPzVgRLtf1GUVYTfMvPG",
  "key15": "5VV3gNFzgBkKBe21Dno4xcYdNhFjjToakLjDi94n3nZ1oBQ6YwKTiRzXs2aD2edS67htCeqffE51aNADDDYnYyrY",
  "key16": "3cVbANMdMXQUNQvFboVNvGYMBGVdhKratjmA5ZQcGVvHvLckgjPAFst6GxF66b1aLf4eZcGxe5otbz3YAxFNCs1n",
  "key17": "3WVNkRtGerniTxVhKh4TFkHWvMMCGd6di2fnwYqkcdwf6SteefKrXQ86x1WA5qsE37UvTgo9WizEsc5sy5EaGT5M",
  "key18": "4ETJLQ8XyfbMJY4sDFomy8eiH2G6hVDBAeqMJpi4i2E2BjCMFw2k5CPTG9KzRqCZZPaeaqGpaAVoVjCJ1LVsJ1k9",
  "key19": "2k8hSGVpGqVatkQpYaK2yREq2qAjVQLwvcDNUokSqTvmzxu5qqaVMEAefU7J3bH8iVyPk69h4pWTzLLiJt8KSfkr",
  "key20": "3r5fre5zCwbXtgCDv4LYCjFRBZEYKNcVzindKytNFgqd2vNo5fAi2wLtACcKoQXuB1y7X6kTrKiyosLe2cbTSGcQ",
  "key21": "4QEN2huHmXepXvGdygVEmVHmVUXNnVXLUhNpMUcXpL2Kqop7tkx1dvC6vYHapEvndJGzJA374KbzQbqqgLrZ73wi",
  "key22": "2hNYsXQi8iS6KAob2PVRUB8c7vzvDjCPJwNPDDVtdsVBhJQKUT7xK682j1S5vZV7b6UFUe488sUB7sGGcb7sbiky",
  "key23": "4Mmt6g1iF8JsqpWkvoBedsoU2VEMtG2Meg9Na2sTCfJmJGFqYDBmaYoyKJxu8QQmXCpGxwzdkEgPM4XseGE84NQ7",
  "key24": "3bToJTBv55rNzNbQWQzCJcUR9w1crCGijTo7Lu84tkwo81m1f4vQuKnR8XuuuhcgMtN8WomkaPjuvMqmP9qaMVpG",
  "key25": "5WCqE4pkpacjzDVqsupVLz84kS4DVVDzm7TYH51H3JYAQu38w2VKfmwnJkggdcp4fEZLrkjbLQtCSDCfzJp5V4fw",
  "key26": "4uQ8dx1xGhVc4Lv96MuKodZJjmRaYcHJqx5sNCoAQCYLGq1r46uLhrGjVU98V1hAXqnL3Gg3uUPKn7AvEhiNoP98",
  "key27": "5hamxX2GUKoM3rdZsRNsobvvJLigPp7sGizD9YxWtQcQ6Y13keQ9XyiC4aB82ziKu2jG6QZWQFDwVHsgcWJKFPEM",
  "key28": "2moRKyza5QqaDnNAXEo5VqRGZDHQ5oaEKywNeQh6QwsH1poqNcSp5gCqFH4CLRuZnR779XkH7gFEWpaZpxgMkQ6t",
  "key29": "5aY6FR25DXsX5cRKBDvqYtcia45dGLWYHmXLEvibDwSRCCk71LedAUKG3dSwsCeu8GVwuZhFg7Ea38HD4YK6K6XG",
  "key30": "3fKkCtjAp43K8u6ScaoHxKEmwbu2bcVgLfA9ehW3WZC7icPXSqiLnLoPoQUBpSe7UQv7iMiPSajpjAX2zpFFbj1F",
  "key31": "7RHxed9FRy473VyEbCR4x3njHEeistgiBvoxTttxokW4R5KgqibVbzAzYSML6f9EDjhU8uMCpz5KiojCLBSJk6g",
  "key32": "5uA21DVfJsXF39iFzfDzNwCTm9Wy9MFSVZCwjcmpwnFDyDqJAweTiXGLsxPW2NtzthYrJCPJcHSzZ9jGXnrvDEdv",
  "key33": "tee8xiSpPCTUxTuvEH2rnpsu2oUYskjQoUNmvLpgDdzzKZZdamUkgXXJmFfd1aPf7SPsVND9MGM4qfrwHSYmkCz",
  "key34": "5voF1cUf7oAB3bsyrrsTyLwgzi1zw9kxcA3bL43NX8BFwEUdVKxor1KfYJSbXVQF48njAwC7YaExpkZezd9Vh2cD",
  "key35": "z44KVgoR3cCsiqgBFXm1YdznKcBcgWLNEvcZhur4qN7DYeiqxR2say4beuD4wGMgZGmkqCJZCLcUeia4psm1xcC",
  "key36": "24km45oTsdKLKYJfadCFM86XZQ6FeFhz59xqFdn6oPXrHtiHokTj69zw9FqrUSfHBj5VBhbtccEfYEiu9RQ6fLAb",
  "key37": "3KBSq83mJGqwB1NcXq2QCg8szgUgfcLZt55vdjNjvGYm3d98m31tm79TVjVK98C4bHNXTdH1iWYDXUPDprFn181B",
  "key38": "2jgDA8u4w3v5ZnDB7gy2LJNvJZUx9iSVeJxAPDS7nUQ94t1rtRDUv7MQcezspCf4JKG3MpS3MEwVn25wnbbJnjnV"
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
