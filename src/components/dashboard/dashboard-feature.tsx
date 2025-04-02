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
    "27neFUZFaMauqe5sACpqfSZaVU8oU4HiazFvwaqZXXrZK16SuzbfXP6M7DmSF8e69UG1otJjhEDvtEtvsU6LKeVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqbCAzdnuWCfCH1mVBbQdhQPikykkvamnPiMXdM3zLQgyLxQMbZ1aXdRYjMjmKBKCQrtbyP7XgTMLCQHja9a5AC",
  "key1": "R1dspWgQYkLrkUsU95peiMHeBv7zFkEfoHmHt7yXuE4X1jjMgNQfuCw48xu25DigRVo9spC8tuEP1tj2wCpDZqj",
  "key2": "Ft2tSwxXka9ayhU8pPAWMj1u5oUcwHZGo1CrziVNu5ETP1HqhjTYm3Vt4KX577AUMwo2hEawT2HQstszQRsH7bG",
  "key3": "CPV33suA6SuxnZUXWn22XY6HhqSBdVVfSsqfZ8DsGg5GEAuD9NhbgoA985KUiE9VSzgF11DWKW4XzUTQcBN71zV",
  "key4": "3cKpzmgwyZeXxemcqxKiMujZft6XbuZEScqcyzdiEE1G1LJMEodonmJu2txqzQVc159wRVMKDYfz5zSDFhipe8c4",
  "key5": "61189teBs5Q4U69kJgFEkpjqBWp3vatEUwSPsdWd97pDAzqhNhfzwiSkHLpjuLXooPs3Mfy2VKcCeNTxUBa3eo5T",
  "key6": "fPKcu2vQVbVn38D8idQ8HAuqVAZQDtFvf2Dw6B9tAujcJTmk9dBMVDSw6uZXcpNL9UB9LBrGUpZMtJvMZh8ej8h",
  "key7": "59CQnu78YuHZrfwpexE4qUYLaPuorv3bk5ScJU7tkp5jY3XpbgA4JRH8bATXf422YiQKED8tsNtELaHjFjHKozen",
  "key8": "5AC3JKEcvS1NzJ1Qq3yNewEKXNzKgGK5Ew1sbk1Fa4Lsfak6GSkHssz1iPwXcsvRYoGd3CBaG8zWXDfwG4uGtCu8",
  "key9": "2KBgVojh3Pxv3Kqc6U5grbxQXt7H3AabMiH32RBbf7LAW96vfoTK1DQfcmmWvuAyJYHWdKuiiWvxCbpXJRexf84C",
  "key10": "4PPzqBM77kYeRqyfEZFKm6qEK1Yqw1fXxShmga9NivNjuA9XKdMrkNzbNjWJQahgB5fUPrpP1cxGXRpQJzp4Qvk9",
  "key11": "2U2J1bpduwRHxxLYKLywSBuvKTCYh4zTzcCM2MUwwHxVBWMWLKXpJnYMb9BjdKDLKd5EwpwTrcgRynugDt3YrxBv",
  "key12": "3LHFgyYYowv8iU4QKsHvGXRKe3ZmKz9RT693kH6E8koX8vFyBtdHoMmBsjz6GBTGQG2r9kscXzBN16KXwhQa3E6h",
  "key13": "5JZpzvuCbD2PL5DkHv4yFtYVaeUvodhjJRUADAjaHohFjJ1kojx4im791qNfu5uwodgRaq9bAsbAJnYY4DNztgEL",
  "key14": "5YES3CD8AFyFVnQo7vhkg88V1g7eEn8KkY9K7p8rggBuJp1JKTKQRAyGcRpqfzjbDC7uviJ72AigYzBErbUYmV4L",
  "key15": "2w9W99q9hRT38kf32xGvryS2MQZhLPALKZtDiSDWArtWX9EyCzwZbx43x93orZYTCDPj6m4fQk5JVagTxmKKHGDM",
  "key16": "466mEt3DNR3pAcByPXjFrK1ejavxA4oWuAisYCyu9t2fNBZsgrTneTHPBnEbjTkV9aLZ8aL7GDDqvAiU1uArAEJq",
  "key17": "2P59KrsyZtUyGe6TDBgCXEcZUwav4kYNJWZv5spGSrfmiy47jbZwCmswbVcHup63KQJKb2xyjvmj3NzjhFcGq1qG",
  "key18": "2CQ51faLpxEug8jaEUj2tKmY3Dag7HfVL44mFtmzPb8BM4FhjA9aD8pkRjwAiubm9uGgkPuVCJxWUqSbss2Cd3iT",
  "key19": "2wcyQh9SowMspLF3sHgNyqG3LdavcxiTSTntg153ufeUfnBRFzkgUAMc2fUkads7QMQdoTXTph5xmhgnL4m1UaUV",
  "key20": "2DGtDf5xQCvuUvBKQp2irwR3fJL6QM8ZDcrs6vi45rbtgxtgDnLCjJTXLAo5nxGpSnjdnX7RQR2CUdTAJUtCi2sy",
  "key21": "2GsCdLyL7kgvHVKixFd71aRhQKXQ5z9jA1fV3kzKt5NhBPecZ4pniekPdK9ZoKc55tR5XCRQEx4HTaHNBgXK65ZQ",
  "key22": "4FmFRrUmPMR8vHecZMGKGQCShzXtBjPT8Qy38XHiyR6s4LWj45BC7ziiLgFN13Qwv9jxgw1hFuZU5wq8cKeAKVr3",
  "key23": "d3YCACLop4r6zNNrzyWtJFaEKa9hNjZeHegQ5bHaMKuRwfKB5gmWABQrMj55jcVVKYZjXJZG6QF3tFn6JkUwsBh",
  "key24": "NDAybnZsBs4pcvBngTDeL735VD2doD52rJwXmvCQYxQLTqvfFdT3dYw1VMhcVgxXrjffh5m9R16LQPLZikpBPqs",
  "key25": "4wvJ6ykDYR4tsjsMi12krUhdcJBV6ak44T8jSo8gnjAaxmumjA78bGMa3xVhoXzF6itn2vEdynZj5eCg9n6WjK4D",
  "key26": "66Whch3RruKky2UkA1PGpkr3aKVZSwyLLFuytKWWzBs3BTyNtmPTZJdMnUhmBPcT7q1hyRZE6bJujXRCuEsSAuFB",
  "key27": "56Px1BX1NcR1zKwDDTN6DWr7Jtm75oxPrsfcMUxRShE8a2a1ELVKuVUmCfScjzQbbRTVzwQ3CkUM45VpncHyNAw8",
  "key28": "3tMYvE8D8EYHnEcyXq5PJjxqdpcXkCEVp5gM4wbVvGx6TDFPEu12yFUcVidQUtt4b8KVvozFRCa539QSVWjam5WS",
  "key29": "2Z7NLatZP5w4Gue6GDnUdV2bRbbYrZSqGw1ocLgNVaT8Ao2FfnzMuFrEfGiMLrVRzGijFYGbudcg3FvhgthDgLV4",
  "key30": "5JMtBrQQGXLoJTZ5FeXzW3egYgrwYQCcEj2rNL3Q4mKXHEYZ3tHavSgGfCKfEsXwJeywaGTmx1LyLeZWMcaRjUV3",
  "key31": "217JeVHYqAjEQzNdpzmGGrofGJdZVN7McfamYfhCg5pLTi5XLG1fVT1DubhspwW4hjQdEa6kzfhcKb1ee9ZspQqV",
  "key32": "4zeRg4SqHjoc5BaBzD8Hi5MkM7m5Po8sEmfe4xgkorF4VPcdS8Nx5Lr919TddVc2xqY9729zzesWsEBRYAPsDmVd",
  "key33": "3pHjPi9LHf4QSZzxxxcmPbSbhvgmT8geAWg37oGepGy354N7YscJK8dJnDR3JadebepTRR3serHdmMZstbRqBXFz",
  "key34": "39GU3F3yHnMustTxJwC5NoTBaAdmRaPsPyHHYKSQSLqTGBzSddqoZdQWjysH773VqSGUw91NtREw1mYEPPuhvzMy",
  "key35": "4CTJXCdQCUL3Bf95KicLcC8gRmyEZVpBmSJ4UezteHggVgSF9TM5ysP5tZyvRZyAnjd63HSMpKueybHd7UKs4EoU",
  "key36": "3pFJMzkoSWhxdSHTXn7typCMevybr1Y6ir4HwnLaXL9C1L5gEAZ5bkBbPqv38vwrYbdEqeto6AvRUGBdYgMHQ3MA"
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
