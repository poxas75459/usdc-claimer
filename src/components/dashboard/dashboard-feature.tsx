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
    "3Q59EQC9aMnWKMTTmR5HL88FPnpi9NjaBuEeKAvnTTz3iucCr5yLqWTZdh1uCPtMMaEhnyUkaERhYU9e68Gro1PZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2Vkcnp92CuyGE2Kti5EYoxuPR4cqEH5rwbNXkEasJ2pKgTxgeS6NyvHVujSWuBAewfX7ksrqH5Zqa6fnof6AxS",
  "key1": "4yiubyiRBR5rwsDRhVdYgMVbvfMwFhE5UXqQnae4fJ9piCRVhu3QxTC8gXc2r7Wb8bERFscTVNYPH3TKqvCYyjh4",
  "key2": "4Pxy8eubYGyZj8Y2gZPC1xPrBpsh4HwfDqpsnsRQSND1UegWLvqRgbY42PmSuw3syQ2MUkyQE76e1ATy43TKoG3e",
  "key3": "3hpJGwuTeEgBJAQT1GFkiz5rhwWYjWriomu2MX8hzTq3QvjW8gCLefdiUxxoQKfJffens9e3e1M5teokY21otE3g",
  "key4": "5rhoeLwXE5PwN9tmzUnmXiV4B3vARBjXT5H3618Nj4Au7xSYTwCshaFs8VWjsAkX3VVQ6UE3yxkUt7hGc5Rsrdcr",
  "key5": "65RDhoGiyy9EpTyobKGqViAfAWWr8NpDH6aR97G9HyhQ1EDDtArJoFe5BS23GFknWCavL17qdVbgJPwvmowBPaYy",
  "key6": "3unyS1x2imGYza9xsghnQ9ZvgX3RVUM3t8xmN86KVZqXbMJgFPmZdr8cAu3GtY4fE3RHqdM9aberEAsTQN3b6EtF",
  "key7": "4Y9WzredCz69Auk4hnnaBbii7o8aeUQDXRzhwr3ioibMY2qR14BTtzmpyuPJxGFbWjXMXtx2akvwHgxzDY4vC7aL",
  "key8": "5swreNy2UpAruPCagA6Qh7nc8uynCNQNVGxju4bVV2PDJzgRX7E1LqsRjAKDNFZKzjNNsCtrbcH57ve5HYJvtDpc",
  "key9": "25mXNDsKm1UqH3oJuKDMkd7ewxsYJSrMiuY4QFRHDAxwqanFKxPGW9QM4TofYJF4vpy3PszpWBHiL6u9o1QBwPsL",
  "key10": "4YgmwvFescBvDgTVj678VpMAkUSdyEvCB26QCnZnbRaRhwGDNqk93Hm8nRD7w5w83icsgPGvrXqPrmjBVg7G9cR3",
  "key11": "3wbpCAtkj2QVPsdtKr3fiCFj8sU58R8roadugEcFs7iNJwJV5z8uoBZEdQHKiZhTPk9CnSjuASHVrD8KeYSjihp1",
  "key12": "LTZHNAuBB6VDwtmD7CVHDD9wPxyuLjBd13Gza7w8tpS7gmDvKUnRCSU9cSeoMcivGhAufJQY9pBhmZ8BvS2bsgj",
  "key13": "5amGdQPLnPpXgQdeyoyBGxTALmGQCYhJXT9NcSWNGDqMj2DjsmqpFjtU7L917ZfFTDup9EECuWaDPg1713gAt9Tu",
  "key14": "QfbgXdeLAMuwoQ9VLdm3RxNhTUxrRVkssjq1Rbo8r7o5w7ZgyGkioXaFxH19LCDUiLLFd1Fei5ZoXtyHR1jzxuW",
  "key15": "5FXukBNn6XmguPV8gQKicYMd7VpW8v1bHQi3qd6DtPSW5nWyc1ZjGaEVSLjk1qK4H9mNguXoc9cRoyK5itL3eDDX",
  "key16": "3jLszuewHmzT27B4KTBtzJ7P3DZacxAd9Re387QyF4pXcTemKAswbVYBXYb2ttzg9HwdYAxSMY1273aY3VRCc98p",
  "key17": "3e1GqhQHaA3Yx4pDwXgK2wx4dG4hhz87Q9YadfoGJAyp4BvcARcVpb2R4xxdKXwp5ktAhCu97yi5JJ47HF7efHJ2",
  "key18": "Q3Dbhq8dge3wbFGYg9f2ra1YCwW2bCiHeKcCdj4d8BoWSKbNVPdRsTW258DQXpcxBvL8gt77dJG6qpVQHj2qXAu",
  "key19": "49pQoRxGjpw78HF3LFbnA29wv7YcxuS718gzKoFrB6zF4bbg8ojKi9JhtXCDmssx2SNHrErXQh4wiE56n3FUBcNt",
  "key20": "2dCDgGXQbDx3YLFdaKpLRvaFKv556BL8ddCXVEnBuDE5HWbkYSVcL6y5aEKQWgjqXXMnqLciQW99rZFfaXVBSyZK",
  "key21": "wDuiYVYZd1H6AfAhzHNCdr4x6vWMeQn9BaAMp4pmq55K8Ag59NhG6414rGAx3FWRUH7Xi9Kc1ZyVmYuuqUQFr2s",
  "key22": "5VxExMUFiLzq8PowJzB2fWxd1H3QebbErWhV7TVufaiQHSo4TEXr2MMyeCXqEwJB6mmyZfeReZFFSTJC1KDByP7b",
  "key23": "4tWpzzBWpLd8amfWPhKLaWbwZ9bahQv3W2yXHugxtFV55WNNE8mMMCh9oHuyQ371ncaGVdzga5HWcoDiABNJ3EzY",
  "key24": "4onFPkAicsKxKZbAw43cQTpfu66rAThEtDxSuPymvyZtovgJQuFxkN7bP6Jtnfmw4yytdtDGKLxjFC1JoJtZa9Y7",
  "key25": "3QQi2Kce52vjcZznQDE6q8SDAuHQU81A7NQgkBaELGLVRBKbW6g1dkHLePqwEnbMHP6LN5K5Ee1NEpQiira34a7",
  "key26": "2SzeDk46B4CnJ7E223UL1LcbnrSjjUARVEe7hBV9pug2HJUSTLXQFhFx6ggz23U6wXLSjZGJe9TNgujSX2a6Ycbr",
  "key27": "2HN9kQndsocsvZJwE3d7ucXQFWu2amaybr37Dpu77SRhm279epswhryN8aJCnUdUXHiQCjrWH6tqDFXTG65nKmXx",
  "key28": "2G9Xb9UcqDRcDVhULbayAKgsZ2ctgVXjj3uPt3L8MsA7Jmf2EtTqDCCam69fWoRTdGBCbDFjS8jRfUzuk8j6VmkJ",
  "key29": "3iBdVkDp5Egf9fywNpjqKbFgcm7XTri5Nps2J29Rvki2AKEP2qW18XHV9RP9wwfptcKXXTj3Xkb21eWikPwLUg2R",
  "key30": "GtJtgqntuTfHHR6EnhRr7Ddmqg8oJ4Fvk5Q8pMt1JaaBTYzDLhSaKty4SVvXNeKcTgjpw49ubWtfwxmx62DkqJk",
  "key31": "4aDdpjS895xRiHwz7oyGuJYBrSAEt2CqMLU2LoCcetJKN6uRNScnCNiC5Yw7exomBHQUc4tL7htCm62rsDi3xK6M",
  "key32": "4cSgj8yiewowAtr16xC2kYVQqksqGt8XVRjogMvBDbCLYtC6rwWCWd6diLj7wekWMiY2oWfb9623f62bJCAPuxkX",
  "key33": "5YiwapMavWuaZAyM3An3QwcbGv17yysPyiH4wYfaabPWhgaUVi2AtLDs6uCqbeLGUGJbRkVekLcBW4FfsNudyJps",
  "key34": "4bN5tjwzcuGkTgbu5pUdX63S8DDPceqJ7CGHgXCGnwPUSBkh6nkJoVjL5WbAYTY1TGjM5UuUeuQrNu1ECcCghiwc",
  "key35": "3qQ4CVgLnBpShk5UPgq8Kbr9ND6AwXXHKQ3XZig2VWarKfRmiyP28ezm9LhTNN4rL91zLLTvdDSg7mdejDRq1d6S",
  "key36": "Tt8fkiTpoy3YgwegbcJDqMvdqDEuHZnsBTxDBs94SnMDWXxyiXMPSwpAPzQzrTmMmZnfTg5BEwFyGbdEPdAounb",
  "key37": "2M74XAeSSiGP6MB1Vhjv4BPudNnAarDsu2Z5uM1MgwEtbSxEfWT4SK5RU9hQkXwJwZBWWpAUBetKAShLLx3197qL",
  "key38": "NxnZPw66pe7PwFjUBzcBU1i3egZYEZUy1UysHdetWbNk8EuvqdaquoCeqCS69guhVCn1VFSqq5Pgpi5jAyp2yhK",
  "key39": "HnVpVMbRFaEPC5QBCfx1XML6mbTgo1izMbMKQoJHuWF7YeAKKXJhq2mG3qx1afAva53vypAjmm2jkMu5nBHzS8q",
  "key40": "53KWwJ3zsSBC7N7dNyYVyqcbEcvTAFe4NaJZcYmx6pV7kC4yEeNcNkwWgR1RWmwx7GqDnzRnwpsQQko9cC66oj7z",
  "key41": "5hdwd3T6EYxkudamyh2WQEAUKhywK2Mzi6TcqS2fuWdfQKK1Yguw2r5n5ntG1wb8h8a91XdTTaXVAhKCbFnn9Gvo",
  "key42": "5M34SbZuMv2ox4iJ4Jy7DK7UN1sKcKgimSLWs69negU47dRU6giohQm8tN1GNH87AMfkhE7bYdvXjdmW27AbLJAa",
  "key43": "58uurY1ACqm9y1zEjNEFj9VEGxVUyZdvyX1MWQFxqGcCUD4s1WBqehJujoLE9utk6UKmXr7cQgRerUYdi9UrJFw1",
  "key44": "5rN4mZqEY7gg3jj3cHnhxjSveXpDuZWCrda1ct73sW82NLYGEc7g3ucmkAePo5CnQvhvkraH9fhTKSpidNMf6n1M",
  "key45": "2973zg4m7t7JBseKRrAk98UDamKnu3kPTHAvBTPpmUgj28n2GLgtNnK6CxAjsnndjTNL1tVcXdvCL4R5U27nUk3a"
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
