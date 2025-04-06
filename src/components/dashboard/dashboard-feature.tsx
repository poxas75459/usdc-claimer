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
    "3zYXg6skDgTP7DTKCUZbb67kUxuL4eUvBBnSR7fgFUeYtTphrAuvSx5EpFzzAsrYZN23ub3aWACrAZDvcZCpKMAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCr6NKruvrLQtdJDw3kYNj8YHLnhcNaHpq3x4CJkFUPmc4L25uKLq7eG3LRFwHCDUMtrzAcA1k5ra2NQExnR2T4",
  "key1": "2EWee6wqWaQfS8fEg1XJWPiiejBXhxz83jy9MKpDrqNz5b7TebMZuC4b2FjbHt4dVhjp2Uc2F49QbausaG4p5knJ",
  "key2": "519J65P6R4jPjJXQXZS9ASb7PbXY6UrzAXxQDCUWGApumxPpdZuUaviRWVgzdYeZqn1V2h5uEHpRaBiTkeHe4T4j",
  "key3": "5vwXK3KV2nmNHTincDyZdueCQAz6ZiPQjfCeCGVxkZvYYTUpqLArPvjDpYrFRJWb5qvAmLkSgKTVn7ZtFAs6mbVB",
  "key4": "5vfv9a7w2KGNsLtyxCwSSDW6PxQajkkezdv9LNKJ6Hg69gmmjHQBXwVx2nT5pb1GieiD5CBBn9H5zuMjgrXac7N",
  "key5": "5vt5UrdzFaotY1t4pU7as3NRtgVj8W7Kze3baRyt5Ge4csshUamGXG6JC7MGjMUBSZwWw4fcJM53pkj984KpCPLn",
  "key6": "4zXvYUCpfmjrUgH8G7YGeLbFPe4emiFBQrUmBvaY9VXdQFwCcYPE6oi9qgQZRfP2XsM24ZH5kna1vEW2RrKBUzfb",
  "key7": "4A2VnkGKUmsgxte9fV5BvouUZCSzWgXWhHbYXxqi8yHyDMcHVmqLfFGmSkUFnxMc1GoTKYjDpUzF1EEgAhbe7Lkn",
  "key8": "4CMJHfLX7Q5oKqku65duiPEapySPTcpmzeZkot5BEqvRryCw8FjbvUhgcG72zS6Hu9wWFebcU6FFe4bc9Zp1HSsB",
  "key9": "4xZB7D1QyPU35NdtWJd5HdyxzeYBctvqnC4w9AJdwG1vMdjrxFoKN4jVy9Nes6ava6Z6qMtFPPeehkaVc1V2nDqZ",
  "key10": "4Wi7578ToUyWg9iDNYTGUVCp89yYQABapvz93svjrCSTtnhbp8VTwm7TQyuuootE1pCsi5E53hHipvt5nYZV3qj8",
  "key11": "3zxdeBtpuHnYFcT7Q3XrqEc5atYCFZ3ravFvq2BczMrdrR857AQUq3k2zejGhVUwN9e6avLbRU4B9FaUAuAcS8Ww",
  "key12": "3TEzdse2YNb6FRbeRP8jbv8568cwgWGsZTFZ7Qkfqvke1MgM4VtPWscjaP8CMQMsYivJsPKbEbo97nPyzEkUWr52",
  "key13": "4KKkDmgMvFPuJeNs39u1Ehw93Zv6KhgWWjPcijxVWYjDnTbFypyb5ADMkv74WbhRLkrVf5GCg9nfo65quqErHdTj",
  "key14": "2xgZdvVZW9ywTQh5DFE3wyh9uAZrsNgT1PS78i34a8aouexDENNTYTHs6KbfBK3LGLPiisWxNfbdoEVnVpoNra4E",
  "key15": "2UXTc1Mu67gbUpruhUctuJBDfBMZ3igCaynEW5fsrSbf7xmPRTaYvPgk6BW6TfBYhiPWNDHEg7jw9VY63i8JexzD",
  "key16": "2tHBZV1dPAdxYqQA7q17aXXkoJF2KYBivPrHNJZz1uU2wC9jjG176aYahB1G5rzQGThy3rttvWbqYSYLTiiT9rcc",
  "key17": "n9adTXyFKwe5DNdTKRCTbp7JLS6eDBNMCXXn7t6V7kTys1nagdi2f5rZYXwKhaFX1jyc1E4WmNutLrhDUuQPyUt",
  "key18": "54KwpAsXhmngLWZ6G7Uxq1sTMYxnejJMZJhac8Gaj6ZM1j2SVGgvrd9hKdcSBbESAK45uWpjNxZCfSb2RhW2h6NG",
  "key19": "LYrHUH1UXVLBYsidzAR3aB3i8QjCU3TNzDpiYcWQEXwxFYWpkw3LVJByutPhNuy6v6hnWbqGayJUyyDj7Z7GTwD",
  "key20": "5zsUkER4BUz5LoDmBa9CvcknX1MymBADwzJSbiUkbmaKQBcQJ7K8PW3novQKRZQM9jCndLRwtmAFmZLR9tKHFkr6",
  "key21": "3FYYcWH3qLpbd9GJoDFYt8qrZEWQs9SsANybTW7XvnbbvhEcKcfK1WFttD5uYLGX8rFEEsPwp5d7CB1Jdx3cQ6nn",
  "key22": "3ST4mdyAbM57mHxh8JqNmkrQYuD6cBQ1PDrZT9CiBoRijDNKRoMus75x3gTeeUD89pL1mTPaJpoxhfe28Q4CtfZS",
  "key23": "WiuAkhnN3rQbQodSN4XqdnQXANEaZ7ESbumt4EPXFmQuNkouVvNNryBn51giZaLdZr5ptXsLWHuer3ev4uSony7",
  "key24": "3qj6FTq7rhvMGiFnizqSb3eztFZkqGDyN9BJp9hADHGs9RWFk7WCFudw2nhoDZJ8TLxzSdxCf8g58uvWiBzpqjsZ",
  "key25": "7gE9B64NhhHdJaXHcJkJgSoP1W3F48YNwz5z2KZAFtfD3qvNDhYyvFytEpVPmRV4nxu5usrxieHCPcBo9m73BaL",
  "key26": "5ss3a13MiK9KR3uAtqwXHKFhsu8p7NRoH8kqsm9if92X6sjutaKV2TgphZxVjy25uBLf4kT1yq9X3wV3D5p7wPdP",
  "key27": "5mEupXsuzoE2NAcPzcfLttFPZaAsuscbeGUbuzVezHPbjzz7tWebtwGphy5DSYxwvQLZnGmezKsoqc9wCHf4k8L"
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
