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
    "4RHctFG2neHYBsC3wE2gAZMG9TCoqPczsG4zazRVKowbicZKNQMDkwWQEZQZRo3QUTB9KXygyAb2W1dTt8nFwWP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23txcR3NSBcfACvMwtASGi1ou5kj1diRHEgkoicfPBhpfYj1E2CNGwRsK7CNKBrFACejaNDG3zDRuSWCVtaxSgba",
  "key1": "63VmCDd35YsPPUao78Ws17L7YT67T4kkeDtef2H7b85XPPQfSdSbjPJnhmisz5B1Fb6qcocUcDKPK3m4ypj62qNB",
  "key2": "5fuxi7nDfpMDY92tic583FHxcRvjKnusfF971MMqwxv5AdgHQSBXEEWpfTcyLHceqcEz6yfiNVvTKNjU54MtudDg",
  "key3": "2rmaiX5b7pQm3twcScCqkmWKwYU5ToqxRk27W5bo4yVsi9vxkpeuyHA4aa9Y9tEokzgEpwcu7STyo7VAQUKvvB5i",
  "key4": "2gCRZwMLscJ8SmYxnTFmg5WDzbaxfeS1bDmzEufqXBkZ7pDuDhwVVDPch2WpWCKBjGFyiA6yJxRpiJzKZwwasAL3",
  "key5": "uFk5gHo374b275VbGPQNAvb7iKKihEKyU87MthuY6GfTwPPE8nZcZns9X3eSALC63JFSjmwiMZfx5DiP41PujZo",
  "key6": "4Twx7mvPR1d7PqT3KnpdA9RJcdaKzYj7icZSbU2yHCRoskFUEPFZHVndDCqacYsnNP7AND3JihEXUaGopKkBSaw8",
  "key7": "3fvEgxscgCjWsijbEA5HeAD6ym627Ce16mEh6boV5kiLSoeYyAMoBf1jBXR4pnkn2TAhZHRCAt7PpHfh9tyMF6hA",
  "key8": "3ET6t9keJaxiGBiboMpspGsdXpF7ahzBcpgBqNBFy58CPewZwzY9Ujb2Sqm2rfmsioHSNDbGJFU1koNJdJqkCzTf",
  "key9": "5wB8FP9g4K5SmXJNncwZ6xkd4Pd33XMUjK6n8N3eGU7Yc7sCfaD4HsDEfG9gNYyBh87XCAh4NerZCLUN6YYHyNZL",
  "key10": "4gxUGt1LJBt11SLGnfe5h9NuCRgtdQsAwPVqMfRfRbqS5Lz7qutJdsq5yEa9dLuFYcBvpACcCaf4N2UTvDiJJtRT",
  "key11": "GappRd8c5GvUmA7KUJxZFBtPZ7kjB2ewejFbix5HJGceG4VXjX7y4WPoH6VYrWA7WgxCXWQ25nWQKhwzmcy6K7V",
  "key12": "2gpKnw2gWBgAENZcvZyHDb7Hkrj8dXTyBEkkUmBKzBCVhbF1zr89n8qpxx52iRNufgTviZxNyLcA2b4TTUNCE9uv",
  "key13": "sXLF1dK3aQ8dZ1P1bNogfDjTGhQo92XTE9jkLLq2v4JMKxpNruxiXkiTJCcZR3JxaEGcXjBpxzxZjNcgGJykVBi",
  "key14": "3uP27K1xaZhzw79Zq5WSB61SR1RZRBaPntCfFvB8o9zU3Mpeo1etwqmbbuR4r6A3hbxarUWpUWy7mZEt2fRw3MTS",
  "key15": "3QeSKfLnWXp4CW2q4JD2aXiGWyjis2fkJA73qKbPFJAB1hVtcCC2a2MANVfZsRzR6JZFwCApd81GuyKzrXaWnkt4",
  "key16": "2j4PYTAhjVxZVYr4caQe5eFjcSL7x8LTveUhc1rUjhY752YXq6AwnTW3qBWdj4QHHPKbxM7XSq877YAw6VrAtxw",
  "key17": "7iqSC3yoVetpCVnxptCZKp5cxB2NmFKi5kv6TBoWagkBUjhjuDz4fXfrc6UNgco7BsuWK1PD23wen1qoVAs7ef2",
  "key18": "5P4dp4bfFRzSrzWFsT8PcmPZAWDg3Z5kCDPwW5UPy7K3XVMfEaZ5SXghXa1pmSqQZEv7pTifxKiyxgPHyJAwjbPk",
  "key19": "aYVKk2juADHmCj5xWNXPaewiZMSxeSpptdDUAM6nnT6NYMJn1zqLQBrQdUeVce4ms3vgefzosgKWDsVnZCsN3cY",
  "key20": "3KyQ951LSrXMTKmUK9udBvFRGp6dHYYJk7Mu3dFya9iYzma5gsZj4PxqSre1nCgtpvrksBc5SoYqiKd4pLZwaRSY",
  "key21": "5y9Zh5HS665tXzQZzsa29yb15yPtNMsgSM32jwS7pjp4n7YEFmJEgfmD2QWGARrJUqX3oc5GfqX8TUjYKt3G62Lc",
  "key22": "5C1Y2D1mq4jwepeEZwocVV3mu6k7LaVcHRuksuFnszfacBkafoDs6ZC4FYmmWmf52YQwvWT4i44oJKYVRqojdFKf",
  "key23": "2RWPHVgJupdaf76NgmM3oZnvThCS2gBKR1hxJ9QDivXxThqo1RK91DZfPN68h8chePRAYeZuKtWUnnXZSnDP5ERS",
  "key24": "5sW297jzK2i9S88DhQwJFahX4qMLxSoMwzyQJXuKJWDQdBShnc7VAEtTojrv2HDrHK6FUoMgsjykxRhuopDrwsU6",
  "key25": "4iQGoUZNd9wDN5xbpAFnag8MjgFw1rfZPxK44BGk5DS2k7rZGY38p1yUgiCrFyHCgDKSmURg2QVVcSX9qCNjAZSt",
  "key26": "CmCm51YkamA6rUck3GXpAQ5bdqHB2bGtqc2jPSCKnBaiysaDu3yJuHTco594wZmH9s5SQ8xdCZ5cQ53poST7CxU",
  "key27": "4MdnLe5woqYGFX1k5dGu4nKLD6enrR47z72HobTMJsZaLW8346E1WeuhGBZFvLXsYGkuXvLS7GQchdw9ZNZwwDVe",
  "key28": "584caxoDwkSpK5JhRUz7YFJcLepUhFTZHBgRJvJ1RiUDxo9bakWZUF7dESrVWX5DRq4Ex4DwgGtFYhLi57hLHauw",
  "key29": "2rY3JeZB5iK3roQqbZnbtXDCB4PL8L2MWpDTtCUmwJLV1M1BzX9tnmPtQ6wK793xd2KiCNgNLrTCrxErXrBHpbw5"
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
