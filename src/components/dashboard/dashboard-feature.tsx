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
    "SW7mvmiZcMkmHMPM1op22ySHbo6CRq884C3u3KhARPjmnihZ5mh3QMp6SM4mgK1w87tLZdLwre3BdMY4UVTgya1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yjp5HF2bVAqTbtoXnadKX31ZeMfd6fs7cYr4tuBehYuGXeU998CSvHNf1g3uxoKPhiTBYVGTrBzQhgsMUtWUMVn",
  "key1": "3t9SkqXxGaCnWeu4J2tvLa6SpHhSbxZ1ZrUpsGHMHDy1T5TWBY1xWiiew4ce68BB7fgfvCm6if69bLoyi64VUh3R",
  "key2": "2d2BnvbRGREJ8mnn27LondVcNyp74wxtuWS5gxRaGiGtopdBXZUCQkF768M16hLzzC5BqrQ8Bn8nL24SXMtu1Ha5",
  "key3": "MGzBTX83KHBzn6SwsmSsdFV3J8VXAFuSZ8a8Zd2yjvtfxz7Y34RLf2Gxf5NJ8Hgy3rFDwuGoYjDNQVroj1YirVq",
  "key4": "5B7c36bjb7EkW9YFrorU6ULua26UHLS9VzU86aiAaRWL5x2yNrJp51FxHZgpVB6gN56cXGdj56UbPRuq9o9WyLB6",
  "key5": "d7HaM2USf2CNVcwqmPpk3W64qC89uQPTbMdC3YkqjhTXxyfm64eqsxhSGNVVtRyHRjTJovCdL2cUqASCqNCMPKo",
  "key6": "35eAVhsEVwMeH2nzNcp2cesSxjHmmWbhbWUmQny6CdLKhJYT3cJte8bcba15SrUA1y5QHiJ9GkmbCpiCtU2YKvSo",
  "key7": "39nnoKiiwskkcqo1ZNwZr68UeX5g8yFqBmx8aMWrcrD5AZmcEuqBbxsQztVGib3MsTmy1c72Mgrtk98EH5qhdLFj",
  "key8": "49xLqLSNeun99haaAGgqTpHBjbi97hyaTXkbEnRGjfii2dfquH9qJmHjL49twb2dmXKJFzmoUVbJussdBz1dTEqc",
  "key9": "4icZvfTXXMEKfzghyBc7C6n9SHxvwewJ7VRns1UNscLsuAiXMGMJQFfJ9kCkj6TbqJhbzJoegYYPFDqJfKRWa2T5",
  "key10": "4EfnUoJMvEMAFDfKXR3puczKvLvi8EvGYnBAkVzReLbMyUFZRpQJhL1zdbmG9uAjjZCVpZy5DtmE9oiGz7g45UHj",
  "key11": "VN3u9Jwd8Tf92TSTaKQk3rk41v9yTkpX732gF5nzBjwXu3Ea8nggqzrZtYvqqpABSydEgfgHAbMbRUckoedvbkB",
  "key12": "34ngfRoFrDRhinzhDb6YAQEpA3vKFNSTiY38sKaN8u7tkZDdXyS2GwM8nhiiwAYp1RwaKe7df1nBBBcgtkTaX7gF",
  "key13": "33UNAVQLpMqYtBWPm1fFgiWHQN1AHfB1mcf8HXwqioms5KuimyySWq9PaZ9PLu4RKKvNuxdePqMzEGnJ26gRQKms",
  "key14": "5vF942EVxrg3KZewazLE5Kmr9RvmmVBWTiDLeug7KPAp67L9s2N9gmGfnbT4e7ZJEsyehFsj6Nj2G5vP3uDkxTY9",
  "key15": "AZuToaWnwpacKDe9AAax9ig3Mp1VEpQzq5QTozY933L7DhAJ6whYgEfN8osamV6zft5KzB1UZvfccXHDYwMgF8H",
  "key16": "3RBeTXRqQjVQN7LBviww3WgEopBaqDKu3SUCFXKVY5hRmdynnPxyJktbo7akbsMiD7BcpkjyquKuXxPZZLE2UE2V",
  "key17": "RQvrdaC3oevkztauxEaB3kgWq27TzotniyjTKVtMuBwAxbX6nWr4sV74qTpTV6UMtkoNdw96ukGo5BvLmLd9nZE",
  "key18": "3bc3jwq89N9dFhWjZAEPy28ANNoAG8DVDqG9v6HvLQeUri5c25rDqzMfuMbQJNDvZrQc59xfUL8Mwfsc4fyQU6cY",
  "key19": "3zGPPAUUNA5C6zZTNNY9StLvChXtVBnmSLLwujJWErzYV7S9aukgzX22YocU9wQHF55Hpv6Hi8dg1zZwzwhPMtvs",
  "key20": "3fo9iZXkQsvCWuNfy8dV5FqurA3i58J5JwVcQCRD9bNZbk5obNtcMN7tknUkvWsFTyhudv5BpSMu2ADrXvt14gox",
  "key21": "nW5vg5Gpd9WqyvWz5osQFhaWBtoMAhw2BQ6HpHtD7SssNRFd1DXEsPEYs5G17KMGWtjX7zt9bexrz82KhR1Tvga",
  "key22": "3iiun98nUf4qt357iXUmzkyTNpkp4a6gEqJZ4DsN4JU4FGhsMpNLboxw5XffsqhRQS35D76SsbtRH7vWzFbUo8RF",
  "key23": "2aG7mFEdHHEtSSvNSR2tYKCUpwsdt9ifKoozAWu4kG5r3DVAVmT2VkDGbs7xFox7ggMG3VP2Uqyafx77EPDcwy5C",
  "key24": "sdQ4N7sXCe6wErWNTgmYoRY7CbxofjRL5aL5dBX5zS6xB7TmDfVAGHYM7Nnc5ZntYGd4M6RWpT88js8yefkJNM9",
  "key25": "5B7jHUut9rw8tR91jaK4y8wbsMgL1qP8oqmct4t4yf7S6U9iyxETz9Nd6aZwcXY6Xx5V4q929BYLYgMwuCcxTHsa",
  "key26": "4Ez6BC1TiZ7VxzQk2NqvNJ8yyDa6VY61Zdu2zetVagjNqHDCXNBCVc7Xvhmg9mgyoGo3LqpdPNhWKMESPqeZxaj9",
  "key27": "61MZgYyDVQsk23VkgnCVnYNJx41fTmyd1sohnrYKrXBZ1arKPc4UnVCpG6wkFeRwFEPVaDSVea5bjQb7cwab7xaf",
  "key28": "4gMPM66oVNTDvk7yx47SN8cEV668HJtmYPjaXws8D772SEqDeJ9WvrKvbNcWzKweug9VuSuYdSHvoV1c1eRJfj2k",
  "key29": "4u3yxKo93xtc5UxuNEy5hXSHUAZfck5grBsK9JGdnrNAmv5PAvfmWMk6PzruqupLLdWWxdzpkiYHdn9iKKUTAoUF",
  "key30": "4zX1hSXr2keDB7x8Ld6vNKLbtT6WUNF6NuA9qEi2qrYmCNzVaxM7mNgpEAniQ9bbowZwWVeRbj14Xib1dwi6Rm41",
  "key31": "42a3717cxab4Le1WZXYixEvZ35wgTBw9TDtSBA7rqQkSVYyx7Ny1bAa6X3qAdzfTGVGqpzsQjLVm1iR455bN2ETu",
  "key32": "4ZBnTtDHBuqqqRXZvSJq5eXeGqYh1cVVqsrkw7zAjVJ6DR7G4EBrtYuCxUxm5dYvigj9rv7wpyGv2k7KDgyJpnRL",
  "key33": "2fBU9zrguX3Av4uNpwUXpouTvwg159V4XMPQGd3JJNuC79Q8HJgfbYkd9SDnQtgAYCkafovzT5C3kvT7DhyjQVwm",
  "key34": "2XqMncNuLg1QHswhmUoM1wRHZ5W7Medbmzg5ypGuvDoVEBmY1RvW2xqJ5tYYZPvauVMHZgzckyYT6JwBirA8wiQX",
  "key35": "22X9CLQgEPbkzV1bQ6GtjWoko1evvUneJTmKxvLADyfoHMNG38fgPUWdihmXKfDxqRE1zdpt9AX5uGYUXRqoF6jZ",
  "key36": "3kENS2UrVyoPdaewA8kon1X1a2gYj4hZUNHPS4EnYDfoqwrYea72uiTJvN4DYxBbCSmucmKKbtAvm8T9WAWDTn2f",
  "key37": "48hgA1835jTWNfJA17uXynzPciPxgYxFxbVgTFXL1F2nZ7mZk7xWnD3Zow8x88fhmefsArKFhfWZdwEukDv5TcgQ",
  "key38": "43XJZwMUa8qNJghogTPamFAochypSoraY7iDG6ep8CvzVv38XNSdi5HjpQXVwFi8dV4Knq1V6EZygP7qsy8dbmuT",
  "key39": "3hpVj66GEfaVXJgzU7EifR5PPUZPQ6aVdVihhT5FAb4QZ1VghRs12mKpoy9xkKMc2Kyu8YGG2EbfgWmdY2hZTLk9",
  "key40": "2KRPzr2bKuohiav2qusQjXjAtH1tUf6NLgDrR97dhhMqTFKN9p3Q3ET1WK4gjhThhgaNfQkrZBFr6hn6Sx6VTRPs",
  "key41": "5NjvLuUJ5k6ccwiy2J5VgJ6ntvMZfP6zLbkhLKcnuFzFFJDBbqwHWLegejoo8Kxd4D2YEJJkfZ3RSY5ZXE7fafBc",
  "key42": "5eEbosaSvDwg4BVUA5kbY3PGhcx4Z1K1fYXZBqgasjoHuxsrWpKKDZQDjsRVTnnY4Scfj7oBTWAuJaGgSvBC78SY"
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
