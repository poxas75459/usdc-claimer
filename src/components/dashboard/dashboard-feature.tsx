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
    "Sd3MRdG8DnRXwvvtvyoM9ZHTcYDTY25ZcGLBPkwKDmFH7tP5A9s7GxXYbujn62gcLik534pobwRyT3qCHXCChGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNb1QE8KQWFD6Giof4FxDAeJQeZSYpb98ieraxFT2xLcMaePQ6uzqCUmpKec8ZNuckPEkUvZZFkmXq86uLBQ43c",
  "key1": "T2AfhgGBaJL6qMtv9M1NJEzPPGrPdRDjekJ3N3PdkrbuYoCKNdvVDCbjwP6r4NpU5m1wrTnunNooX8Qzv6NC4ci",
  "key2": "4S9n1BhT79qRyTwPosf3bUTCNNAD4kJiemhroxsazmg4Gq6XBp1pqu9qt4TtKLDEXqfywbsKf5PVwdmaoXjaCsGu",
  "key3": "313MzdwfDVNYFwRJygpJ8oapQhqXh1JHns1ejfPdxpDkZaUxn422vtPAVbchsXsRQyaQVR3vHkNt63vMAEMosvMP",
  "key4": "5RTyT6C9v58tF8Px7EoooYPBqb5RSEhHiLxJtYTbM3qU3rmTUsGRHpEqn9WmGuzHy3r5fpnZuDYfHawK12VS3EGk",
  "key5": "2SYKgNRgrEXgLT9wMzM1ei8xdZZiT4hDSU7T1E223j11aPDHvtJk8UqxXDoaFcujV44pG6NcMd6vvmtPQNEfBmLw",
  "key6": "32AUc1b1NDhSZpMJZwiaGVoJNuKHB9Dh2JUdD37o6hFhkZEvuVw832inCxbDHXXStRwnEZkQysZh4LcB83eu8naQ",
  "key7": "46DahrqQv4moLHoG9cW8x9VTueppaEDjy8dq4LYuBdVih27VcJMx3dRRQBTz4xpHCKwQVR8T4P2TPRWJPeF1UY7",
  "key8": "2ap8RvoWzBJy5jBBUdAMfYJv4aWoetcAZ836a7XmPNtp623eae7nt8cTfdCa2kHkh9bdybTvHGmvHE8UjV6bXEcR",
  "key9": "3BmdopLhRDtTxQh5oaa5yd7uri2wMd6r3JjrkeDPYVgfKuqUYcUMT4KTFgurynPn2nrrSiHnjJ3r41BmYzq543H9",
  "key10": "5NWyyhD4JqS3W3Vd2pNhxgqhfTTNDVb5ZvCNknMqPDM8Rfda18gdPwMy3ngTaBkeGeTr5syc6JPpGMB9rgwZdkQH",
  "key11": "3QjP5kwuY96c2ZNLbtupfXFk1EX4SjecXE8jMJ1or7wJxDJThqh3bB3w2BVNfiRZaT7tA2zKHqLhZ7ogUoR5WEa2",
  "key12": "aVau8Et4ddbBKk3RYJhb9twQDdWD1GhaveetfRhiBwiUQt8wXQpLpJfALN8mXY7ywEWRbadiZKihhFn2EqygCB8",
  "key13": "3bCXELe3874jGZPJqHUnUcQJpnWCokzozPWpgANoMcPP8mcfFr4F5sovGLpaNeKJCPYQZYawga6kAJUNhbBaA2be",
  "key14": "248KejY1XwpTqyLhwYixRiaHoBowJLCChG2RjeB317oFDEsVCExPEe6tM6fLALtMENy4z6fedRVu2s5CiWp3u2Jo",
  "key15": "4fe4jk3uiB2km7yVKGotJrmZDZjkFoZk5esyK9nXCJo2PtwHC5FMi6e82yQgwHCnugtYihNKPavjpoqu2QkXk9uK",
  "key16": "5HcdUCRBVGpqUzRAdTTczvqeNFByHmV4JMxBL8E9jw7jAc9CCryryeabLuEVW72yyWFaKsGZVHp9pFZGL1kAdATH",
  "key17": "ptf9WCcGT1GdH5BEmj8Ut19tHgxs9jao4XytiAybWVB67qwbbzASu5sNLrpsieRyghcFk2oqh51EPhUQ4x1dQCY",
  "key18": "2fnKrm1enehTqLvTVmHmjoJ2p4uCnniXLUa1JxHQBJeWztxEJLhJtprnHUqRLqqyJj8yCrMuSZknfwGM1DZv4t18",
  "key19": "2eDoEW27haPytkNSbwzmqYjLRtoV5jAVRwGdEsJrTWHsGJRT2vkp2AGmxVsBLQaPbfAAQLuzbR5Dpgr9VBkCbJRn",
  "key20": "aoFcH8FeCt6fa6f3YrpfcQZCoxYDW2gK5ygoxfqSK7GP99eqRVrZfC8pEhrpsySbbgtjuybiWLTDWXhX2uNLqi7",
  "key21": "47HAEB17s5asdatT8AkU6zEpoVcMzYbsRi1sb4hLyQ6FkM46H19rRSHFGJ8ubBSXVTQLgLhwLRYD4qhbPT7c16A6",
  "key22": "2dX2A6FSoVjTxmPdkjVLJAYas8RMteCSwqNe51ER6NqDM9PWij2V1fPoMSjDdxzUfnsBHDG5AkFar3MbNiGE1vYa",
  "key23": "nWFrTpNXYBx94bV2UrMte4yQEhxUtjzhYuVmRhxe4V9gifNHk9bjhE2hnAyzzYBg7JiLzFNueQAo8Tez7dG6rAV",
  "key24": "5JLSmJ5XUZz2hhZbLkUfk98MpFQ9wHxtz3kQcbZjY1buDcyCPBAvUnCrBX3rNKdG1vARjot7YdSccv9r9EmZQ4Es",
  "key25": "55R9TtC1rkR1ic9JEfnZmah41aEDjR86CBCAaKBgzcX4x2DiEn1gQMJjnsEnVhc2VoeZcHKHz35iLPdHrgQYKBy3",
  "key26": "3YLKut8WYfQVWK9Yk7vnJTUzvTAk25HPGiBjYayLRLpUeEg5jQsPMH4icaeoYdWYt5Fa2FboWoQp7Bhk6LBL6CwN",
  "key27": "A7ka4uCTKkjJCfi6Ki8vmwZqxGbJ9Twdn4GKXM8T874YnJ4L8rnfg1vRUchfBX67NHikiQ2rZcF1ZqczRkYHqFF",
  "key28": "2TZi6JbnHT9k5UL83RLaZsQJQSLPD3y21VLsbS4XWXxR8gV2Ay7ZwZ5VtJGpejx5w9buMDJYHREtgQsvUwb7VxK2",
  "key29": "4ZNzzggZejBPSeL2py5AH5XQSBkMpzPy98fcL8AZLcpNUe2FkezqASmrex18D3KgZSCXmyfmgSNos1WGL8PsEpTg",
  "key30": "gDUZqMZGdPtRtYJogAhPSpJBQtP6yGL4veqhGVaL7GUJexoecJU58YSBDFh6tTb4NpYLb8d5xNaVfhm5KPqG3Mf",
  "key31": "2YCN96krARfu4cEHwXjsy55gp8Lc8pTmDavkpQCBzN92dLNFRPQXLmFDAUJkfT5m72XTENGi2DsRDA8XZwHtzMyu",
  "key32": "4vcy4ZTWszMamFqGJG1wRiNZMj34tfe3MJsgSowQFRFHKg6GkS6jYPca8r4c5yRskiHVk7t2bUApyYPDtCcUP5wE"
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
