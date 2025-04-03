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
    "5vFehE8afuKAjA32mZUJkLQptjDyHRoQvBkQugCz9X3sUxTnvo43DJsuGokmaM1b1tKFCxVQKYHiHNSuYHj6qikz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAecUwNAwBqHjxexxcRTjJfyTz6oLD6tiXJ45V4UtM9ioiuBJWtdb5KJS9W7R3KHfN1qTVEh7m8tjhu43BPz6Xf",
  "key1": "4tVC8NqGUtviDqdPJJSijL31igt8eMKAwdcbegmzGEMuxotp2gPAJXeE8AExxZkFqdmsvUcQvJxDc8gUswS7VfHE",
  "key2": "68eKsS9VaozFtZVuZQQ7m7Xs5VYzxUjtZGceVNDjLVWmQitZ9qWaAJc15PN7AknVUUpi8WXy5ApK3Pt9LBzL2Pt",
  "key3": "62EcFoua2HhjAvVh9FRqGxraZ6mqa1jELd8e1CsF6LGtwffzoW4PdiuJ1bEUfpNrJvQBtdiBquDsaqZHp4TvJdTx",
  "key4": "7YeMbnJnm9cmqa9JhseiwsmMCVhAAVLSNJXokPBJtMhB64wpQiEmc5h3LHCnZGFYwLcoKq9XnY7zayw4jNeQEtn",
  "key5": "5cmFwNwXyUfuPPYM5C4yrCYBUynGYEYLsctDHSxyXEu9eK1uHX75nzZrYfqCLBKSJ5KFG6YG3dKKPt4QrF78jHLV",
  "key6": "3ZsQ1r28jfVvSAHi3cNNTDxC4wx8E1L5hceneU9XAy5YFWcGiKLTMT8PrmXCCisa31fjX9kommTBwRXX2WsiiZu2",
  "key7": "2Qb9jbXgxN8fezudiWFfDj9fnqUaWbvFz61xcqk9t3hKFbbjsai2Pi7k89ebZWrLTgCNtZDQ8MUoUrXT6L7yBHxa",
  "key8": "36iDpMtb5DoFw6MDrE6r1NRSdcUT3MUXrUqUYYJ8xPpREZq2WaVEeC6BXZ3yyGtEYd2GZb35AN8U4o1C5Ny6eEqn",
  "key9": "h4tEo5tYrpq2jGuoBQuezFWupUaDmw6HUqUMia3tUeU7smdQhKC9VkjLhP1QC9vGn4YUupNqUg32LjZF9gkoGzQ",
  "key10": "4F2TLshqm9fVawzk2W1xGDyazp6nkwrDBLkWeJ3MPDYX8NkLqLVRL1zJEv9bexXrinCeyPcgwupZAJdxD1NRPM7M",
  "key11": "2tjr3mqXQnv3eRgY76uiZGCx63RoGEnjbcNnCL73Ahq5JQ96RrtRBu88a5ogJB7mrRDzB22s3Jzs7cwHgQUZ8jGA",
  "key12": "2BpXH8nK1zVaRoLFocK2Qocyr3jmVe9xSbKtYPDBb6v81k8XDD8Vq8aKZms3oGGRXs4EV4Xp4owGWvZNR2yz9MaH",
  "key13": "5R4X8SJKoNwyuMc2g8pqsXFsPmr9FveoiRb2Uhh6Xa9fMv4ktBjmGpZF4n5QcqVF5fUzhi78GLwZX6ESe3gBtzc3",
  "key14": "nuWRqRU4SFNVPM3SqqE8oxpRzTMGhg3brbDPVLRtgVw2ZCPCDoUXwCn8wNmpELoKUGLbTmGsZrTfFw8mvX7anye",
  "key15": "bUbGvGq9CQ1AcpYHdYMucGAqGkEmvxec5Y7F4gJeQGnuc9r68ha1ABc4MNo7FZZ9fuT34vkqvNd7gCVtmRhCLEc",
  "key16": "2Vwy7U3VyV7t89WynesobvTNxCTKRMtKMNXrL1VGutYvxjadvtRMC1BTmVobe6LDL4zatPp6qU2JVxXEjMTgrP1Z",
  "key17": "3duSA3h5abL42E5Ayc2trMoTAq7jkNiYqit5exAst9qL8n1oYRCE5wJ8ZjmS6QqtkW9XRSb6oRNfJfW1tPAoGBzE",
  "key18": "Hb43cZRiSdr8L2uBK8LvdBeMkpR5WEzRfynrK22UFN2RKbZ8YQW5zvkXWFgmnY72Nz9yXdyQGq2CKAyhSMUink3",
  "key19": "44ktpPWb6MRJNPR5VVvrEGB7B93iS1zYoV2QDMcFVHNTHWEmG3vEusjDHyHqP2qesh2AfnC4XJV944UsAjjdzBh4",
  "key20": "49pvb78qNZTj22ggPxyXCTuC8gh9VXeV2CieKFSVe8fPrfrtGvT1eno3vzp5LZwAPqtk2WJsL3XqnhEuSLqmsa42",
  "key21": "QvMcxchMgkZiQy8f4rK2egzBCuwvb3hw79NTh8D5ZomQjAwVxox7bt5goQZT921VnR5te21MHWFyUCCg2gyeYf4",
  "key22": "2KZH5WS9mMqiRF8FDdkqWvJvqR8924tUpVsr6SYHrcPhv9AbshqVbLAgqRKSwGHsAEoin4iFtqMjrVU3Ywd7BsyA",
  "key23": "5A1KSH6qK8aLRRxmgCuh6FbWy6UuECpfYnKjWTjbep4CHM9kyxT2isq8NbudnHigicjcmRv1v2gDVHvkG7WwdYwq",
  "key24": "48RQQHZy4ehtxAQrkYRk9Lrxc3YUh3Bt1GyNhohfMstHhNVjEDcgj3VAYQxDBgFp4ejbDYxGC5yAZEjGXrdk1Pei",
  "key25": "5mGwtUB9W5Vo4AG1mUWbNqTnLiRckyPiuxwqcukmLJuEcouvAC3ZfSiiXsnjdWyYJ7y7KDojP44KG9pR9jx7NQd2",
  "key26": "3zPsyvHZb72ytgmsGxajQ9nDU5peZAQSNtp5WwHraCXrtcgg5GVa46i5yhL3HHsu9PF6vdvSi4Qv1UdXs3fHKyRq",
  "key27": "3BRb59MxpBJ6tc3LzmwXGCBjajRbNpYWxHC9cfhVnxMkTfdPJfxs1CYXE7ArnZ3CwgoLz3EoejTafJyg98JU9ReL",
  "key28": "5vkei9KfQzQheu5tUf8rruiamTyoyh4m73jPJ7HM6z76Tsni7n9a5phqCKmLU2WtM8otwfqqc8rLXnKgM8kbxrxA",
  "key29": "5S4ortCp2MSpPEJ16fnwf9nVF6EjZuoc8v6FchcxfZ5Fmm8RpoE5w4izx6RBnZ58Qzduz3KhPww2xGZYR2iRG6UW",
  "key30": "4kvzyHn9HdzibUjZkWznyXiotHTJViZyiuMbkwboavSRoPJgkSYLaLaT9tkgSeaVay1pVGLfbd8Dn8rxHpKhx4Uy",
  "key31": "4X6kFvEhs8eL5yCPgNkSeN69sHPWXMVTLs18nNe5mv2qhuhwaM3mc623ggSPgCqovdLn4ZefARoTCLvSXYhmXSY3",
  "key32": "3WEBVBpcH7wXyrF7RR5xqRynGXmZvJrdQXkzavYo7b7qTdo7Mq8nUiix7uVUbtUBzZM1iJ8s4EYd8Lg3CGQtLcfC",
  "key33": "339VkCinxTsTicKVDWWpktFs7XGs8hSLzGfQskbpW9GMsUY2XrqN1YpnERRQowAwpuCf414knBPQagToH4s7z22W",
  "key34": "AH7asPp8zXb4GjvHxPiJZZP7Pcc8XA169BB3iguvWTF151oDCyFJngxfa6FripHvJo7gaA4d1agYwH58beqpwUp",
  "key35": "hdtuP1pDM1GnWKJqVjEfwEacSyBbWHGesu1Ai2R2uLfg7GPJSVoJMjHgLjrv3YbCzukd9ePPcAyCJRNCssLf5xv",
  "key36": "rv94X99ySm8QthAJF71SYq1JJb2XphQywtB6vKXxiSqUCtbDBsyfqRZjsmWmUfG1ajNajpSYxws4Jabjop7Smja",
  "key37": "51chHTCLfuRDtYsUPA8aPZY6DWB3kmQp5ih4Efgor7iTYYs3jE7TmgQ8PrJZu2dA75gA5SqmYcv9UTXWPx2K2AmZ",
  "key38": "b83YEUyLMu7GXLnXvVTkXrgAtvicQjXzAFPQ6q85akpSarCzcf2k1cC8swudPW6ZzoWGfUL2z24DiVrPdbhX6Cb",
  "key39": "4AiCc2vqoNZJ9CZnpMkvAKKVLNwVQuxetX6RCPSzYGEQYCJBZKDCgGuZyejn8xsLVTh72QBTwGXEVNv7rpUpCLDq",
  "key40": "gi8mEWquCgoBuCjE7wfzengT8jUJj9WoehKtQTWeB2WZZ8ax3xnigtgs2bbWERY5VWgZAVL31BYkXwLhgboY162",
  "key41": "548Xw1qcJttr4Wek7eGMEvBashSLZq1jdtEcRfmRMbvgNe8reo2vBzAJkUdBuo7bf9ZsSmf7RJMnPRZnzcB9SKgK",
  "key42": "4E4DWqm9L45zVFHWhiZdV5pGuGJ7GroPxZEWXQcUdeQXqiJtHUPdVTWD47GhuG3oeXdkYHN3ewzWpGrkBKVZgM94"
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
