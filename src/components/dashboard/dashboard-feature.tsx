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
    "4UtcUJwtk4Es1kPEMWGcXz38KXz7Pd7LzD2oukb1A66jAYnxpXe6SxB99MGfGhAazLhDawREW8F5sR4DFw7nY7yV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KfvayXtDqxm39Mjn9EyUEYydRMZKXyQN5UdsMYJYRAKVyVJQZhMu5eG33AMSoWTTCfHzd3tQLpFaC3UCyjjPxsP",
  "key1": "3L1PKTuMj1RrprEaSnjAeHFvjASTfTMVh3KJTyYgSsFFMXEkZNKr4VEMeTRW958ar5Q5gE2kzxfxQzaixqkkmZK3",
  "key2": "3HySgdR4F36Hxy4Kne8QiNiNjDd1LEqgTmDRp8Do2bKScoqLeZZaW7E4Nspwcpj78ZcffTif4DhK3oAaG3wDHL5L",
  "key3": "2UJQ9EZSbwcwaE39rJ2g2eDHPFchZFtifsS32ApvZJ72qG8uxzwiH5gFqfr2qUuwLjYkDE7hEYFsRjWY8hcQp93Y",
  "key4": "4e7aZ5dmEfSQHA7HA9MKnvWj2duSXCkP7iu9EYiS3L7TyH3sRhxh7z9FxjYUpKXQt7DdgXikcswX3xo3mddJrNHw",
  "key5": "4NYRYd2vTL6SEPp9qQEF6iBv6AZEVYLLNyjX2DaguuNtKHm2y9FZGG9Mi9oMxiFSS398qQWSxm7gsDLeMzpnwFsZ",
  "key6": "5Pwr87YpNfyXcTUgNTAMUzMBujX1Ec8H1sUd7MAKir83WWVRuT3hqkSeWEdmewuJPxL1NggAxoKCmspY6cJ4zwSJ",
  "key7": "4p7HukN5Wnmzt5KbCZsaP9oS5Fc1cXWG4T119H6D6Ak3gi9qxTgjWmmobXwSNMYdukGt6jsFWyndzrQtesBqwFSP",
  "key8": "3BvbUnZ9pcSzArABMmHmd3JFyHrvGaP462oFnhYkBgLEwiTciqjfATGDmt7qa3ZnnvYB2wM6iwy6S8pTBmNnUERg",
  "key9": "3bVPjv4a3ZxDgLYyhHVZtBZttN6ekwfS2Wi74GWZULDPoheij1BY5UoXx1XXkzuhBMPEQU15N5TKQ5M9djrTv6WN",
  "key10": "5GooQd7eZj9pjMfoYn7P77DYqqxgbT4UHvqLMiwt35epi47Mmy5bbYUmxN58KPcbSPAJqpJGeXFPW5FgRa6yUUJQ",
  "key11": "43Jrvn98JnuC1SCpPXaoArtidCLJjNgHGh2QY2gufXSy1b5iBHACQC6Yh6MDwUJRA85VsmH9cEZQQYdx6PV9HRE7",
  "key12": "5ezj65dixmh9HbFhLPpv9ePSsXyduA2pc7ZxDAAVmQ2d8QsQ65c6FiX3wtYFPhpgQ7KSZf434L49X99q1WKPThxN",
  "key13": "2npRitgMbc4dADNJSzRGKqs8RN8CKV1J7D8JhNDUNqKonH7dMzCuHrs1AKU81n18uWsLrmExo6FYhy6x1hMMHBJe",
  "key14": "27CF4ERjwt27Abz7S4mVRNAoJLw7T33ARcotuGVuF1tF29XM6UFMJAAUcQsJ9Az6BDJ6AEyLx48Rb5yottmEHnwx",
  "key15": "5MiDHQC3HxBxuH5uhmCZKn7bP1V4xibnk4MCiA2n955VXNkH7oZk8W554G1RWGa7Lpm8cTiYCK28RKfdq9g5mUxS",
  "key16": "3P61oK9yx5DEgCJJNoCAMbAZn3RbnvSpEv9gevA9ZFq37aedq3ex7koxgn2PoHK2hG2VmF73ajPRTDD52VrHHbFA",
  "key17": "mVkkkS5dUXjGAvnBdKsRWRkG9RWFYaBEM61kahps41V4fFVJz2FwkRfCcRzBQSwEfhDgtJKnu2QmFKeas5iL6Nv",
  "key18": "37qbdKWFD8XDeUTV1yjjLjJBB2j9ez1VY4Dd3DWx6asJhQ8jk2PRB2nTFDDPW1dJY8QxBGUirECmVYtg1Mu5Ug6R",
  "key19": "2dEyYnjPouL67h7fhGyjJHVkRiwwE28rA7uNYBhStxW2KvgVmwAqJHtwSFRHPAiwcGRMAdkLjCGYEunHM4EiRuSw",
  "key20": "2tkd4fKt2q4jRhChu9TwtdcvLQ3A1TRiFyHcitpASqWJxT35vXgAq2ovKqtTNj4y99NjKuNokRKj8Q2rs6VF9Rt5",
  "key21": "VjrqSjJPthv6pY9t2H6fe226PZp1EEWGdrxN5fxJWKMXz4uXtbV4whWs4Mf6knpnWJ47MABVnbhpUX2P8x2CZwa",
  "key22": "WJkdztwqmaMfJt5acJdp1nDDQs8QdhANnkjxwSgpd5xh9bULiCXPG8xgiQFYWh1UZyzPwXtgYb44PvjFeDFgSBd",
  "key23": "41o7ge5BQT3fpFtWLVqYvGM8eh1vQzmShDTiqQjkYQcLAaRAqRe3ofcUHBjwGHb5Pge9rQU3i3GFXtBPoB9xdcFc",
  "key24": "3284do4tHnQTNeHr1btZ1qvtpozqvdTmSdH7tSUy7uvhtHZAzMc5VS6Rr5M8EzD4D1WNm7cmJYLy8CuZEPK6eSZN",
  "key25": "4YKMvzLkzwQwzkpZLjHZDvBpKaTb3yxvQBC94doc28CZ78KCUTw4vs7Rd5rNSZwDkzPhPLNoZazzewZL5HmVUMaf",
  "key26": "3TgWiP5rvm8kr7pJaRcWU22x7D9pTotNVYhtiNy3ZVrEvKqBMn7iy2BZKH5AHJCDEJ28Y3rPXudKdSDxyJbnjEoi",
  "key27": "4TgErc8GiV6PcoQAcZcBkSkooML55XPqNxhm4yttcgPZ1eXnM1KiCFrS2gqaZFXnYVMbLrt8WYA4uDVSLKcqaJyj",
  "key28": "58yKKdG1ZccmUQ3hAQNvNZGviifhJhQoRfrikMfjus3mvYuQnPWvgn5FtXsJAtwVDk9d11i3qUsBc3Ja5z6od54K",
  "key29": "2rzFch7F3riDP47iWuQZfHftoe2YdjtWsc8kjHCk84BWTezAXbsUBPMpqKrpQdcRudxZwAZtcy8NafVJzLZfiq9S",
  "key30": "2nQyojoYRupAT961ceqaxCrjdGpGXChotctYg6Tr9rWcqdrYH3cwkk7PD81vhgDWyoFwKAa7gNtYCApt2woJxHtQ",
  "key31": "51SnzYCRx99kUXYsZ96BXtLXkBiYZLkEHZGoY3ijM81jAR62x2gYtiaaYSuSqYpoPbNdvVHwsBNTpqX8hiz2NsUj",
  "key32": "4W192NjF4UVWtZenfgs4Gob1amriAmGB82kj3Xs2pvoSmptrKoVkXaA94LQ8vVBCyeRU1rMHd6FEisu3HdA2ixTS",
  "key33": "4HNadWvvdCKBUr27DTGoNVkdpBA9BQ43ktkTPCzJjMx7Db2mYMXRRF6WKNLfiBf33vT1sun8Vxo7zn8u1T6sn8aH",
  "key34": "5Nq4Me1pfY8UgaouH6K5JEwQMe1Wpk881HgbYZcMRFoLc9jqUJGQgGPF1C8XfGKiEvCCpRVEoXZBCyr58MPQNRD6",
  "key35": "3ymaHMk1VDyyky7YAsyT8RC9GnmG8VGYiddnYLs73T6zU6v6NtCDYjEMjxHxueEKCFYa3e4KyUs2r2S2cZj8Rsox",
  "key36": "KVaPqTAznhmRLieiX1aLuPcv2hDS2MGFKYaAmfgxif1pG4XuLYM8zxNKNt8MXkGtu3NTL7ppA6af7dxnih34Su8",
  "key37": "45rdRWgFQgLg8uPHsm3QkukV1FRVjEwvLYd3FJmSDtJxsedCmqxbjf9o6yvJJKjuyHqvTAB8n6m8cAaBVeRrbq29",
  "key38": "2yQwqeYbEvHWenMxR4CWUZFVqym5pEY9aiDnYsm6wcZ62Zn5KXSY8SrmjYgGrcocf4nWGmG8DS1UDUJx6J9UGFDj",
  "key39": "3JyUPxveNuueDeLggYf3Sepm1mj37G6NGZFH7ywieDMnrZ8qwB7QfM6PBswUZUQpnqYJR4r3wWgsH3tiHtwgGChg",
  "key40": "diiAB9KsnqNWXA7opKuKUbFcuZtzVSv2KXVLX9xkpYLweTrwcCmyUp5xfJNpnSTLXbYUGZ5B3m9qPFg4aVCPmHD",
  "key41": "5cF6UEfPvirnRjcNWoFMrp9FVCdFrGRJW8MuMM21N45ogV3WJwJa7RQE5GDsD592prwkrgfrDN3yFhUPpBL5yWwp",
  "key42": "4ZYMxWQgG3NhoRqQNAvibH74w9hF1LJs4ABnsywUdaHfZXzf9xNqhuEaHViDmC1ekR1nXGEV2CoLcK1xVTaAzwtY",
  "key43": "4eym1DaqzrQYZ6dm5Wkhe4J7SCbXQ37RqHu1UFdufknhzQtnbC5uWRmBRLQKT4BgsZorRaLVip25idSKbJERP41S",
  "key44": "4b6Z7hGRqGmexVbYQBSWmtA8fWdi5AST2XcaMSz5ib8ZhJC3Ua5oxgotWhiygNYsdY9htGkY1bhMWwq5NLrh2QmG"
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
