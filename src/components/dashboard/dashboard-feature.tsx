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
    "dZp4iLMbXHuLdn2qq32nEfmttxCfyS6BrRpqe67JCKgGed4JCnDhg89a5DDzqFJFpizcojLeEeaHZ3x9jWxuTU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjZ8oQLzwyvrKFwmLUyS79BJcWUnDr3r6d1yVH9kskXB8iQrXWed2RduPxegEqUZrQgg6t2oQtuG34wszBRFvj7",
  "key1": "5trUymbkEARJP3e9hQnUy7RFx87APRdDE9tuMXArMPg5a5gcSGCSUD2cFbAExK4eAj1YHMMohcASsw5Y5617bD1e",
  "key2": "iW9WAkBU9t1kJZ8RWidAYXUhhj6Xjo7yxoMEbxNagxFWoCQ9BAeQjYLKX5CyBjhQ8NoCovu2R6xAVcHWeyUta3p",
  "key3": "5Whc7WjyA3thrb3WofEZRr3eNuT1PNS8KFBemSZ5W7KDaSiLNiMnZiVZ67K2gauYaw2TropviBHfvE7Do136EN7i",
  "key4": "5bDk2tVvbZnDdYm3zfmkgetx3TyDPL3X2tPA1yshjJt1wNpJF8ucyEWGSCnAuRzPLmK7bHNKexyTwLnWXHvZuFaE",
  "key5": "3ws4UTaxKfQyJ1NhhNoc3ttmmdNJkitJqrmbMDWaN8KAjQq8AX2og87e4BDkY3aSPF5C46CfBDLsQXpQ37Lgi7nE",
  "key6": "hkeiSmbGoMEDKPyK3kmBuRsxPogagMR1qCuqbHpJkSNZpWTbuZNUEM3hwFFikf5hLPps6jyVNtKqgAkmazimycE",
  "key7": "3XBEasRgcentefynwi6EGyvcCik3jZcszA2xx2WB4VGGSRn66hdUwVouu2BJgZeSpNFLAv4xMDitLh9xx1RfmDzG",
  "key8": "2ZiJugBRTQnNqmbLxhYYDdsakvsXV6AtwdVL3FsTbjJgkaqZJz9HRSZ7xmucjn8oHKTDk5S6VabWpvQ5SHouVao7",
  "key9": "2GyJNcHkujPUKQHaB77ZwXHv5mGdrStM9Nt5TKSgAmrfxyjNoyCXKttiGe89gwZFxk5eLERUkGAEN9KvP6H4SpWd",
  "key10": "3RfT8uGdKAPxHDdsgQxfndpxcFNMZCnreHvTDZQAy1NiN5FmdrVVYpDs1Ja7iENYyp6A2JEYVVhkPL5LhA7TLEjC",
  "key11": "5kA1DFBp55YVNGMnq8ZiJ6yGAdwynhWLfAVxp6qJQw73JVJDKsEHKJcBcMNDbvkVfDVVxdGZVUEPVLUw7aicDDdV",
  "key12": "wLXwknc6EH4cwP3uvdQ1vTo4MXFj8WNUfoS78hyiwj8mbmag2cPZRURjJ7sRHAhVkicf4YPzNL21XSDmYgVa8rf",
  "key13": "324qYPiUzaE1NuPVEmHfQh9k46dqWU911FDRjU6rYfDf6zv22BbkEbxY9NcRXX89r678HkaQxYhmRuMp8vErToaP",
  "key14": "3s1YmujuRsLheQafEVvpEiGiJM9msDBx3qNkYFQ5VvJN82E7fSsKfig4udSSjdZNb9UmFbL4uNeoyG91WzgdnYbX",
  "key15": "3f8kWmH9nfRu68mbytouG9sPRASYqHPdJwsz9AYCQJWMVbdCHxgqxLjtWA5UsNhYKvQ2LWDX7eHjzqrSkEAUgUZP",
  "key16": "5yCScRuekjQo19xfgZELucdNESak9egJnEBzK1oTNW1YtUVBeGxCgv5ZPwR6LVbnTqyeSDtmeYHEoQ1X7iGDGy2g",
  "key17": "3u4my5d4mEzB581QhCQ68XZbS1pZo5EgdGUBcrUCsARwucqVnfsZqQF2CQGs7DJ4zturxiS2BMQWxoR96UGFWZZ6",
  "key18": "3f3gmUkGEQr2nf5mz49P41Yx8idGFWiLqQt2S74k4XhUfkbe48ChvLAHMJQAJ3DEfs1mmDouJUzEVimXXAaC1eRW",
  "key19": "z5BvWduAHtBBW1rwfqknSS6RtLnR5LVQbBdvR9pCUAP86K4N7TRLPN2DDwRcXFdaCC6NdjkS3ZTtN5ED9sR2pKs",
  "key20": "3hzMH8GGcmeL4XawFLuUBiZZZEFL8r1Rzd8gbH7NG2CF1maCfiGRuWMiUQLCNqxUmQbtPH3BkQx7Tzfcgir27RCt",
  "key21": "3S2ojDUQF9CXNRxsnNbgmYSYhcVExvGVVup5Bm7i9Xu7FKofBbyr2NjQ1R3cYRQS1tkFCkssEPUbSFime8J8eSNH",
  "key22": "AKL4MVyJe9hoYUGAgZ7vY5w7CLMSfNKhxHauyvfLZSfB9nmYFn6L27htRXV56B7fYCywwGBpmQJR2F6bSXmH7bN",
  "key23": "2eT5gJM9H6cMh31XnAi97dy6CRYNHxYbnZKABofQAtVQGPAAWGkZHYp1vwX4UN6TgBEGJVASjW8SPmB2cGfKNSYN",
  "key24": "5d9qMkKjVKQpXC31QRTuDNm7uBxWCG3YWi9eAvvMFn8BBYAHrc2XMFcjMe1ndyniVNwgCARNAbwxD6P4TdUerCQ",
  "key25": "5mYaTuQPjuaSAdjAoEhdiAjhrS4qvARR2gXgeWjRYuTySni5xw2qeGeJeV2zSgAPMQ4WR53KRqG2Pqgh74CwRQP1",
  "key26": "3tB14YoewajAuTyLPi4JHdhJxFhRjN5dT3Fp7XTZURWR8UDG68smXxEKRWbbvn66AmR9ZnPCy3b1gDBmFYC5uvgR",
  "key27": "tgaNziEYSem3cnKV1NJ9K7FZu7K8R4ba7prYeNpnckTRNZSPkNA31sd1X3v58d5qGTqwsNXR62qXKVk3h7M8L8q",
  "key28": "Kzwe6BTPjgXfnWxSXEuJk7vSFRZjFpSSLxYm8SnMrzErr9NuFpCiYGjZ1StBYGCFBYtWr2hUeBE7bkntDNmaTBE",
  "key29": "5uvkrNexcCfcSUwhmKVUr9aMpaLAstMEsZZ6CRuXhd4AvUo5Vqij47ZZQmAEPRH9fjRnQoLHMb2jwmZL8GyPTCnE",
  "key30": "5F9R1my8hkRRuEjCzX3CgervdTijkNTEJpCx7AWeNueNJxZpVfoaFeSqVkauJmJsNmqbwUuHpzEbu7o7cmw6Zh8P",
  "key31": "5fxqHc1wTtzbbmeqATVVkqoUrB5vYt4auyoJqeQojB3T5FagvuqMp2Bv3kBHzz9odmst6mdLE1vSZy2r16CD9ZnP",
  "key32": "3E1W4suAyryQdUYF6xAJ1CPxr5hs9Qt6vtnCPopbRymxkivuwX6uELr9yU1GxoSd4wyCApD7JbpU12DDxPTesui2",
  "key33": "2tnUB3toZ4SC1KnYuqTiWgL2YZSkn4b2NPdgfzF56fugodFAutLk4bSy1GJmQuFKRwdpXd3vvg1amwuLYTPJKK9m",
  "key34": "bCAtCG6ihV1DhR2FhvxBtThvtfiu2d4zjQowD9zgPLMKy83dhmuSrpyHEGbVfhw9ZwnxggqfDiwxB59MP1R6P7o",
  "key35": "3NB5LXmYodrsvsBpSGCo1PYEd7DGHtpdnA4zhdfBkuAsbrVAoM5pbHKG5CCXoAVRPhEoA72NLw8QdB2n6tJovu18",
  "key36": "wSxU39DmqX5ZT5esJMR6iZTAAjbaZHw7AkYYyBUnHSffPpVPvRtS5XmYH4WW2bEoz9Un3iUJ92U7tG5S33Ne4eM",
  "key37": "oFvGZpwYx1FvDFVbKmc5hQ1E6XzWvjD2kJWHChGTpikQgc41dTrf929BtohYJ6AUQRbvS33f2a33AjTTREFW1AC",
  "key38": "43xBx4wHhJhoVt8NsKpKinzNWsDKSoQHCFtrkg2XYjAWgSNJRpft3kVoWVkaRR9kWSqaMeY2deFmgHNa1RDwY8hL",
  "key39": "9W6UfFsft7BezALdwSYJcxPySkK1rRtZitStxg1gKPZunvTPnkdivDhUobihvEno4F87tdjzLWraqFd5ebRYjFq"
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
