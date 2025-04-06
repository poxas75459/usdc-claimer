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
    "5SbG6FWYWHaWEK91mZDyEAxL4d2g5v6ks7QJrz51iMRHTg8MBu6c1LZPDYNd87rhGAodbC5EbRyasK2XqeVqhVep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51NUPT8H9kBRNoKH95baTa5aXxA1CMG4Cj6turcp8CHw2rnk1n4kLjuRxVzp9SbR5VScJRSSSKdAEfzrChB2xYmi",
  "key1": "i1zhE75nE3AqXo1ENNqPcDMiVacRzZe6juKdCZUvpNhQqg66xEaGQtXDiCRFEyyTDvLyczUZhAyodvXk8Fam9AH",
  "key2": "4sjr3VaHyzGkSDu5T16cDK8NrBA26m3FJCQvfzXxxHVKNDK33cfBkV84aq8bAfo6Mi8KhTGvbra4j5W8M5W5raC4",
  "key3": "598jkjKvyiWr2XGoWvuqs9cGfgK581tjH7npTBje7yK9dLZ6RBUpgjgsRwP3QXQucKENDHd4B7nYQ5izwtaX1YF3",
  "key4": "48SJCLAnZr5msSaknTvhGWRNHdp38tJU99c5vawtoB4fRT1DSUqgaUBX3ZP6RoPYrCQGHNcBjBXrtiBz7RYtkUP3",
  "key5": "5erE2RP8vcSCHjiFqnUWKkT85amNjvh81BFur9Km33LUEDK6MXynXbVvGHYgS7qijqaUGUrZNWYUQ9AtEinn9Lxq",
  "key6": "5cEGFekvRZ2PyfcVWQVDeAxRJYkFowPWufYucuH8AuVnKZCSYYvertRZmesnL3G2EUkgLUReQiMCJj5wpWGK2NVW",
  "key7": "tUdkX9mJaWffoq9FUYr4P4jzrkrWnsBF8fg8T7JupaXdVyz3vL9xHma9HrRMECrD6pqZATGH9gNzXGdikstdqhE",
  "key8": "GVVBq8fTbTQKFpcH9fsHfwMg2dPKjbvPaACnh9Foa3bxjSvhnU87xqmpLYijiueSVw3LHpc8nh81C7ckYUCYuhS",
  "key9": "3WFqKPHFjLa793qGBCmXD7tmCbr1GJBqaySsgFmDYPafyxJoBx2AV2yXcDLtwzLzevuEqRdEKCTXvsCtkfmRhX8H",
  "key10": "3iNi6EVc6gKifGagxueuaWstA1Yrt9twQ46BzoP66xKA99q6PtZWuxJdFsL5bzEmj7XqNAzMdUQy9o2opFthtVAd",
  "key11": "tghnPi5QbYTwRbXF5JenaQR3Fbg2bE3rCNs2Crwc1quguCBidSRjgZ3TcwM1iXqF4uMbw6BbQyAQVmAxR8XLanD",
  "key12": "uWyujNexbDhi9pqau4KqdyVrXWFDrjpU1pVPtnFFJLGVZ5V1dRd6UHwjHxHW5K7cYzqtY2Znh88hF82aX85V47i",
  "key13": "58fy5aR7u93gWkvE7TaF34C3Sw6mhPipvs6dsTNZyr8FntJXvZyyv43hmQRAbggFgAWmMT9Rj7XKDKeQVkXKug6t",
  "key14": "3B7HDdXfwiKoB95sPemopFjJF3ieVGF7QGRaMt8hHu1sXPhRZV11mnVXGvCi5fdrfqbsLhxDE3oJRZMLx1sZTiw2",
  "key15": "4jGiRxRciwKzJrxzGjUYDezLjrUALaRHx9wdGhKrM2oR2Wx6KrsfZbUfzBAy4H3em5fNc9NjNDeCSTMd5THBtqbp",
  "key16": "3USrM39k3CiWFmFqLHeXncRV68UpisapnEoecK4E3rxmBH2krDViWZ56MaZADs8KrnxF7ePfKqejfSmRoyMMmRR",
  "key17": "5tZ41fJuXq22WSGz6yDWjcXkV7VEqr7t59TFRkjvwqnZ4mhfAzy4hRhGwexdZyiquw7eN1gEByL3sVzDmviUmrnL",
  "key18": "CFwXT9uH9Ao7hiJbByL7HEnNNsLyqghaDucMTsuLV2ZRV6gGsN4HPBhstgUg7rCMaQ615eUmCR989VVkV9rbR9g",
  "key19": "5rQ2hy1dTHsjMdT1Qsoo8nejjJA5t15rPUyXCsx5CTUo4xnLkTQNzGPC8hoZ735krAXz8uxhDtujrHsax4xRx7WN",
  "key20": "2MbbYyzkpgJcLjheabvhzopBovDiob4AsZSXYjtci7enf3naeK5SgiqisGAUeXrjdp1VcLivCXh3jvGs569HQX9u",
  "key21": "5ea2Ero8JAJZPFHGrzbAZekXSvenMgZ8Dq2sMig2SmX9XSFik2bMqcjLX2r32vu9BSov2ZLin7Zw9L5FRSAWL8au",
  "key22": "AiAWFPEtHgE5yPd2JqoYtWpYZ6cUHnzRq5TEiFZS7rWuJCCTpKSVfApTFBhj5LgaZjiHBtc1fWBV4Ts9mPft8aG",
  "key23": "4y7eZygpyARu7tDtnNH9mMCsLCkgKXwRGP3Z6pbXC7YVJTXFUrAFYoPxPRcAzZjSWqEuMRtY5nmwwA53GDGSkHw8",
  "key24": "43RX78YuxABppKzddSKPH5hFSk6SSpGVB8HfPo6D3dqtiEa6mtJvp6buTvCwxqRdAYKzZ32WZ2JEwK6UQy5LJJsU",
  "key25": "3m743biLCYvSdPaznxcuNvHoVvWxwBdKrnJZWySa4umi2H6V2uXdRGSQ16yW3f99mdx3QVGA78i23agHtmksuRn6",
  "key26": "5cM1kz6omiGhd4uM5ix4YAzvahr7gV8hmvZNmAbVBL3222SsMhRkMnsdWSqa4bHQbfU2mjW4Fr2ZWT3xWt8KKiCz",
  "key27": "3F9LukBi8ZnhtDwc4gUJTDHv2zQLKXjaCCHScfZ8dxFg9VdcoETA8qsRz4peBKD6z3yxAhYSj9NuRWmnTWWys94Y",
  "key28": "26uzsbd4KvJNkBQ8NcMiwegYA5tNNvBybAZjqdH6rArWo1wbrX44h2TEoJJE8QuJdQqKUNNED3kzVfL15QDrp7Bg",
  "key29": "3XDXq5nL9iRQPWbe5wKsgCmWtjLZP72dCFDnJb5M5c8BSpwRwvyviewJH6VFuMsgjR4pp1yhHTCz8afBVQb6bzNf",
  "key30": "5Tc3wdPuotC5AWbGcLo4WEDpAxcLjix68VLD3V7vT8DP4tqSpmeQ2Q6R4SbbLbmzcXq65h1tQYgcnLMiqw84WuSL"
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
