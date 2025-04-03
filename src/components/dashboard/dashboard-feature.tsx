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
    "5z1tty9QwB4NGffcj5Rv5WdhZXEswKPjn2n1SqGwP1TqbjBRQq16xizJMKt1SYiqRY8TVGLykAqTEmpAuH6Q16jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFe3xuVSkp2qktWPmNTaVAQQ6Ei31NqXFZgpxza4V1QeAwbwKb912ewpumeGyQQEEyk5iPPbW4xVerF9n8FVo5v",
  "key1": "35ojma15cgtEDDAVsCoPvMDxR4cVrU2M3sr2bCzSrtoVRiG9QnQnzJ72YxwDtS2MiKTE4dXJLWKCJyDX3rKjK9zd",
  "key2": "2ZVcrbc5s4dUpPsuS2aBLW8ChY8wDL2qDHGY9NZMzk4BFeTSSN1QHsbxnsLPCt8bZv7mYrgyjmjXy9tihQ4Wy5Ch",
  "key3": "4rckW9rc2ejdvQqrq3Mzj2enuLQKApqz7W6JtPoAf5bXmnCmWqAiJrBFm2EJ7uWaMsjnK6MMZKXVK5TsgMz9FBMa",
  "key4": "4gokchW3s82DK92ehMhec4dtPyLDGAhS6LZWftQsh3pCDQ8j39xmJE7U8Cb4Ko81koLC4W77fKT7sPptQWrGegmP",
  "key5": "2ugMnVJHi5hyTGhBbSgcbCpD95gFuBWjqTXDh41aE26kZYX9ksGK11QbxXkGKGEjaYaAZBftGHKT4H9jxRnN6Yr8",
  "key6": "4ZVhKoikLYfYC5nB73CZLL9bnd3SqUgRu3b6WcBJnAHnTiNkbxHiHpoLNRUPzFUeRLya6QuUuupjVLfvE9E7vzwe",
  "key7": "z1k26n4Yz61PmDeDtdWpPnnC4wRo9taHSLHf5FWNnYBPbM5MacW8QFjuRu1eQJCjZXNZ74RDtKBvePkVARfCfok",
  "key8": "wiEv2jcC5ZQZoJo14AW1p7ScfvjMvh5CSmDKwPjwNdUdwJQzXD5GPRqy2g3obk7QUvY4SVbwzKBttDrn5DzwLsD",
  "key9": "2Qy7PMhjtPEBJB8mAV11daVffbXmqNfFYqKYbtCSrcMWK8AoiVKRHRJqwLPsJRnExyNdVCev1zLzGvdh4PSpBJXo",
  "key10": "2AF9TpGbyrEKBsw3GoUi7X5pM6rCGm1AkyW1G341L5QawypjKqvuZBYogdm8DfJgCxcxRvHvd7ryJpTB46MoFFCd",
  "key11": "5AiyqHcvC2SRwMEFhjr3HFo1o1caZv6dtq4yhgsp4Wbxfb6Ctb5E5NBuPHoMB4xgpfQPnRLXtdBzTHxqhScuwBaA",
  "key12": "5i15a8BZzf4bKhqv8J7htRXTopCXcaYs2jqsE5uirr5inLTaQtJZCpyiCE6b5tpcfHb23sBtWKRZHuuoyiYTxrUU",
  "key13": "2g8Rg1AfYPtZ5datyXJy5KEZ3828XMEZikFhNnZDCYTPrYPuHfCnop6W9zZeNmJ16wp6W6VMYuDbT135TwJ9fvEL",
  "key14": "V4oQNg8FDQd7wHNP4UF4umuBnyT3Eu3NzGhnsL8ghBjVGXoV9HUgZaJF2uegDQFCxw8EAuHTqsT65DKdjBhMZiZ",
  "key15": "5CxQZFQ6soPCn4qUJpT4ozKwWABmMLiXd9reEvvjqw7VrhkNeauuoZN6Agb9t3ybprLr2rNUGjvyq9u7gJusBfdj",
  "key16": "392eAoZQkS9PnR3QZ1EvJjaAWVcLWDFjJhifc8kB6ZbGJK7dHgRW9A1MqSLU8sBej58wGjRYTw9CjTisDEhbu8Yv",
  "key17": "5HgrAKtVaHvuQtJsALhT2Ra3X1GVWxa1ResvnrnaPq1sLe71KDugEt7b3tSCS8cAbtqByh9HDaRYSWAFLSBFD915",
  "key18": "5ggzpNP1QrjbvdY3wL5vLzVu1zDCzZQP8CPgyRFii773zhXL9Vqsvd9cRHhKS7fZrPaDmiuQNP6SDSVi8qHzunvp",
  "key19": "WjaQfr4x3ZWet8ubKTLa4RKZc62dZtQyLLxWWRG1RkMobi9WRLbaVg6HSp46jX2xtaAn2aZnss1g7xAoV9JxSQL",
  "key20": "5wC3VyjwKiNabdbyibDtAdcHJPaiKmQxaVJAGQLqyYkeWwNZb5kzAQgTKBsZf1r7j53WtTHoi6eJkVLqcswotTZw",
  "key21": "4QMGG9yQayqarECGbnHwgWH5agrAN8jPDYVjGEHxgbAf1ecqsL6crgp6JTRWtgjoVkf6ghaHBmoQUR2VJjHBLnbg",
  "key22": "24X9UsJpuqQrZFxmLpc6F4L5xiWGHnNFTuAmzZV9dzkX4Lqec93qhWrrfkTSMnfLLz2ZwsVvUCaoWidMLv7sdeZi",
  "key23": "5ZWibLUu1VFxsJ9wq4JciCQuc5X8rCLwHrpBLwNNmoaSLEM92d5SDZjnUtWQZDPe552uFjYuuWYebxKQzYLqFUfA",
  "key24": "2LxMK8naU3ig4KAQvs5pDHrdRKvo12qgbWVjbCiq7nHXNM6SHi6q6hSp7aXYaHzkEBci7XM8n2Ecba9c4m2xe5um",
  "key25": "5XcBxec6BAj3vaCARzLoiUEGVM3rhpB6m7KcAjyWitCwK79agzCXkZu2VTep5qDJqs4phXmomgjrABgAgoG3yRLr",
  "key26": "2GJtiQyoSffvp93QfgyhDeiLeq2B5hGxcejTdmrmBjMWeVEAfX4ahg3NE38Zvyrucj1octM2Zwojry8iKfcbejYt",
  "key27": "4EPXxhboTDsUTAKfc6wDke2PL5xPx6gQfxdJq3cVMqxx21UWcMttukviQ953JQR2GH8SLZbpguMEX4AwMqFXZHjY",
  "key28": "3eVqxCtR1k3yBvH9PgwHuTt3WMAXQLSw9ZLwhmpQn7NjpxTZ69kXNQGZuRe1Dp34q6qpQvjD332BdgmChRyACz8w",
  "key29": "5jHA8RHNMst5QqJoLnegLPmqwsZ6kZcEiKuhqP5p4TWz7Fuqj1RMSj9RLgtx3ycNbqJ7c6srrqvTViNMPWfFDo77",
  "key30": "5atvjARPRAqbAqZwAscCo1Jf9GXMPZtCoozDXwZ4vmj7MGCef7njn3EGa2h1RZe5zjksDhP2DnStfD3tTCAEDskf",
  "key31": "4Ty9wap4ELfUAtazFBQdxRcZiZVrjj27mjXkqB783BY9dSCMracRSDdDSvYEnQKhXwf2JA7ztEbtCHjcuKcWGt9x"
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
