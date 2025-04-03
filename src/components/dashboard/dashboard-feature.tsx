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
    "47G5eudwSn1ZdLmUzeSHv6ozUv1DCEnLfybpLfSpY2p8LF9qH2LAHnaHC1zFaJaUiYaqvr6E6frPYsmXsd5PvxCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ri7RbzbVFu5HC3piPrieBHz6dPKGT75QiJbGh69PLwAEbAoiX51WKa7zBWNoPUxEfP9Gg2968kRDUvVJH7D9BdN",
  "key1": "67XJrVPkq5HnuhRV6ecYf7C7AHX7ki1Q2yHqS2ChxBFkBZRLUMDD5fCYwZh1kZ9xmxwZYr9oSaqBcxuf3uPBU4K4",
  "key2": "vUXjpUoHkafEwMzffa1a74HavSG8up9fRjGWwnuHBg9qvCibXGBAJwPht32ke6FPS2Vm9BP4wRHdZHBAtYSeger",
  "key3": "28FZX61rNzKsGXhe6CLtXgUKh66Enrwz4nohgLA3bTf74UJFtxpihNbPkqkUyVFyRaQ5rHxPx5S6iD6xqcmbnhZ7",
  "key4": "291S9VobdbBGVzx6m4bcsSrk6BDSWdLm84Y3RPEMVWjNnFbcqvBFtyzV2C6rsQ8WBvnB6AALmSWte1PnzMvAjmN5",
  "key5": "meCYLG9SQDf9xPqgSVGsLUCn9J6EVuUerBR4hBfgzJffGLt5HBsnc4Mna5kgfK4e8JcfbLypR4AUDNkGmRrXPwP",
  "key6": "4SmVRLqdiRZZ5Up6HzQPbKwXJpTTCBDhjDMdUU6nEb3HZaRSBvsU78MNamwgTCY6jjDGDLdr8eLaFk5TNJLDTGX3",
  "key7": "5SXUi3o3dbopqHUA2YgtgXqQdHYYcVgmDcw5QMNmN5QFQriwdAouEkxLvckZEWLy83ScdyNmqmoY4dz8mVzwKGTS",
  "key8": "4h4PVLkffaveJnoRicJ6W1q78NMAfgf17hbvNgzPbE5Y6DVEvAKHUQ9sMnq65AWSHyQ1X9WP16wiWJ5gpkFDmx12",
  "key9": "2v8sEh8776ik4fgDoABScxhoTcQ6ZswKH6NcS9PyHGpc4Nah3VSjSbPAZRvVfSaMzpzknpUr31ieBWx1pSaXgvyn",
  "key10": "5pdGf7vDnXtGX4LEKL762hw3FubXPg3K2oL7ZqviKa66XsrC1toAH9bHM7JWbuao7iqaz1gGVhkWDuN5VvRnNK8Y",
  "key11": "3XXTEAXQkU2RGDSG4hxFU9n7k1m7923Uihjvj8meSFG9K2RN47QNRQu6cnAw8WEYwAgRFdUaWmCuYw3fWW7VmgAb",
  "key12": "4YbDZm1uZinc42bDtVm23tM7K2gYSEYDi4n3Z8dn6nFkbs1K8B2tw344QipinnxGUYsd2wBhKeo4mDdtPQkh8Dt9",
  "key13": "2UrYK8sSY3SHKsLB2xagqWEGKr5hS53DvQzR8A2aPeY3EULRnshXpot2WvMs3SMY8gtaKAALDGJ9oqXKZE7Sgx7A",
  "key14": "2eox6rbukyazgi5qXGr3Gymdg8gDAvitNK47VhesoBsAmZTyktKYqroAC5ykZTYpsJWbYHZrCQ7NNSLZhSKKi2i5",
  "key15": "5iGQJoYzWJEe437p4FabCvqzn2nXHmzpRP7FgGBjJhTxhpKP37MRyooG4RVctX6Ffz73QkcG4ALbSCPvs8XrLxRC",
  "key16": "26acQwNJbRD8z2aRE5RSsg9xckHPy563gLBcXYPncMrZe93xNSoUNk81papbPtmuFHGZFsp56qCuHwKuYJ6RwvKy",
  "key17": "2JWqzXEtyR45K9xeiNp5fEG68rdQtvoMx6DeCmRtVdCnA44vicgL7GRkx6YzR5koBsNaBRAy3XWVJ3BkXysgJMVv",
  "key18": "4ZdShK7tonqQVXPbPWi9ocFSuReUCCTiJAYdDyzbYAaDEhAgUE4H4CwyBKTUEAketQFh4X3ij9A3eQ9yEZMxSabs",
  "key19": "5gZ48GF4r2J3PaymGJHcdAqvKLYZ2FCqPLF7q36gHFPqTecYRZiy5B9r3s5jPp4bAas1pPHkXgYN2NNULY3ePKCt",
  "key20": "44HWNLBTjz9CQ8e3bUGV3TK32KqK5KFhUUtt6HxiQs9cH6YDTPEdMoyXRmJLBkk8CqC1ZXKiSH2qHGBEt8zBQzdc",
  "key21": "4NXk5zFnL5FK3P7P5qkVFWy9YjNfXBdpFRqiefuMzHGtH2o4veEgrvJFCLGu3jwUhstQYWeMYhQwxeJ8EEWLkPC1",
  "key22": "3bh73cqmxAz1qk668t9XapxpUBmvZkHhS9wKpeVq2KV18XHfmLEsXXFru4uQWXjMThrRjQi6TeVdiXNYC26kNyPw",
  "key23": "PSkMTsmXBdRmZzeWJWGhqVvs32RPcQp1AmtMAxBaeY69ZYsUSTcHzSfwPuzyrLKEpSdeC5vnBBoHtXyHcNJaD6k",
  "key24": "JqDDiq8BVBU491fgJKXG8idG8GDQWwbyEfYYzB85VakhfjjxEDgLQNcwFkBF7hVhzCDFnDWoPcSkKZNingTvnvj"
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
