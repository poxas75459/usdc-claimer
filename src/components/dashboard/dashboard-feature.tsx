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
    "2Uo8Sha4YkBF2HShW4JGgSWx4469TNzqvC5CTz8WHAWSb5Vqgpr5iTE6tCC6GutdbU6vX732rsNhaP1dM5wyvFyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJqBAm9SgCXACLeDjGuhGC1CvBt3DUZP3e4pyTKyQEh9cp4trfemmD9oUpemPpHT6s3vKuV8wghQPfWtAWLosAH",
  "key1": "2q6YiBLuHEA9KFNxmdUC428BoLJ9VGPsPjLgFEfDG6xwn8YN7S7ti57ejyaQHmkkcJRpuwZyYxVncHq3xnnpk65M",
  "key2": "2jEWcDZd57kUEf53pRKS1zrBLTebt4GLsuwhNyHccuBTe6sqsSD2a5aMuWoS9a9HhQNcy9u6176UQHxQvKbemz2y",
  "key3": "67WKPYZ98HPVJPufxKbdMrvQH3vcohXuQegBBGSYzBQyL3bDAa5zBSQZDCUpUTu9TWyJ2nq9iNm3hGqgk8ksNRg8",
  "key4": "3ERYQEfHaQz7eix49C6BSQUxng8GU4QVRGJoz2pyexsgPusU14Uq9tbMnVThJod6497xtFD2Evm3jkek6FPsF7Pt",
  "key5": "MM364mWAFsnKuui9SpidS76b8DQMAmuRTA8JrExzqZXMmrymrg8XXbawupSymEH6medQK2xcP5NzA6iFpb6UaBr",
  "key6": "47JmzsJbi9mk4QgsDEDEqTdD7DiR2eKNEFJKw5tcqpKFscHbuUACj5jkYnm6hiXe2Ewws3YT3riWoseUdiBSMTEH",
  "key7": "5mP5M2KYY84bpNiuxhU46BKffRhi8zyQ8x4w6oFafr7DaVvWLgv5p3TcKaVeFPTtUJn6X9asLnX3BKQuL65A3Zzb",
  "key8": "MyU656zAWbFYoLXswrptjqQPuPkLCV1DMkM3uTKpQu31rpqMHyo55hCrwR1e5WWUhSFQAj5GyUYjRzmvmA27MiL",
  "key9": "4aceVWwztGZELJ1BUSwHVnWWT7w6hnNSMYSrFDaNnSauLpWmaGMvz9sEwfk8h2FfH6Nsiy1ctFUdWXmJk9N2oSkw",
  "key10": "2mN2eXzxUv35uaDHo4JdBcGFLimcfqRfjoQ39hLRcrRZovuM94AD1KJtSr16aFJrEHZHCHe9cNe1fveSYUGfenRC",
  "key11": "21iSYSewDMYFLMk8JQRyFuV8G1cwd8rMfWHBfamggRmWT8rPGy76BKBqZVcPxwcLYYCyJGQS85GwmKLdQiNCgzzF",
  "key12": "4g5A99WYLboxP585fuVUJU3jVpeBr1BLseSGDyQNftTayk8V49oP3ZAmdvfmV4UWZycvcHvJPgyfoGFi9KJfAYw3",
  "key13": "ig7r9zoPdMfb8CfEfKw2Xrd5ejMTrWkP1Jwk5y2sivAVFNX68UGPoVBisNNGCXMxfjizEMjTk7yNrpniz6ZuWm9",
  "key14": "34kXbDCxPQVfxJVHoTPSmj6Gb66U2Th4qFFWXgsrUQdTtnyWnsLtkWroYs6RwEjxt7TmsSux9KSAeVvoPKfKqvtB",
  "key15": "4QVgAWE1DjprcrVRseJdSCs7VuWjeNBbCHZFbKDa85ZEVhs1xfKQgzCUDZM5dcqD2YGA31DqiDi7X7CoBvAEpb8T",
  "key16": "628Zj2cz6yNJjXWUa42feuXBh97waLSoBRFH9B2xUPG8UekwBd6oYZkCaFhdXTXLKe813BmcoFvgLf3JsbsyAV7f",
  "key17": "5FHaUhJ3WgyD6k4rfx6jGADfTqqh7xYywUxeKdDDG29zgt7XWPs8NXfwGcaFohEy2dbGVGayXXK1BdCsymSbdkAH",
  "key18": "5eB51HktSdaaDmoRwb2WPNuFWwq4NZWC2tF2sv28XyBkQsx9fNEs3JdvKXzqeyBdwZQdh3s4fqVMyC1AdHeoGEYS",
  "key19": "mGA3FU8YXSTpvaFd11wCuMiQBZCUzCDcaFtM8en4R3Df6H5Ze74Lm1vhKBkQ9juBzhDVSBZnGZZQn9ciqyZTBJx",
  "key20": "qAbQzCagV8yQ28vTyj5DK8NswEhiQMnHNNaEESgwR1h2skYnGki659qnUfqm4UP43wXSCqzkX63UWwQVu9t7MjQ",
  "key21": "xzgAXn6fHGfaShYEPMs1Bc1rYtbjHNXwmYA61jaqVdQbLamqMKGwcNvUYe26QG7GWwTyXPBYoPkRSNhQvkbUhwe",
  "key22": "3h5BmyAboqbGTDyLhZBCX3NzzYHcGGHSuzHZAj2aSiv4eSeRqpjkfz61TgpowgaQv8L4CWhAZTH3M1eqUaqpvqYi",
  "key23": "2r6ZDMa1W59ExWbckWo8REPvQR6SghKhY7cxtZGaHS3dQGmBdHyT3wy8qWTkifUC1rVmrTpFZn9dmpPcR5SQGF3m",
  "key24": "5UiAKFoAU6n2NSgcaHXeLDc1Q93Mcd4hH7D9y9KTzqaDfaxWPw8Ma4W9tsBcQaPPgbmWQRewroEN7pp7f8nJJBJF",
  "key25": "4SCxKVunZ2pKf7w2JpYiA1PdWLPJR5d8rasZGYkYbJ7L74JvgzPyqp85RoBomcNo9rU66XArEwojCMn2H9pPF2Jw",
  "key26": "376LELGqsLKVFo8QrLTuPmBmr2QWdjtByYLLVzm8fL57hNs8eTvdrU6w5eM1eZ6SJKLiKX1DjX7f1f7FfBGNpFoA",
  "key27": "YogDKxHbY7DHXabTg51sGx3H4h59HKRZGZwWjCicNrxWoa2CuzJ7MtSGwJnFiqckfRLqdGzzAnF7eHTvVXyHEEi"
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
