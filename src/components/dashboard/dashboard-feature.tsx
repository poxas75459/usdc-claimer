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
    "4xwAwfks7WhUc7i5brA6jQWvwfbcVDJiYqKPzmSMSsPuHGw7Hq5RrmhgzGYgDL2EV5ZmMhYLxPMVTJcR4gWaSSd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qcrxECc2Yk165TKHGFE2g77YbEXgrFFhK5HzQHSkpdiUBooGEyp6WJgHMpTcdNXJ6RbfW4VEjZ7SjKBj2KcWnXu",
  "key1": "659Q6ErcxKVMu98brPPfGiTyf84JSQS2jicH5JR9PUVVAyR932vCA8AzpmFEPok2tPPb7UnjEif42TzdFkwMsVan",
  "key2": "2K7Zsja1hwC6aEqKXj3kmWJpGsANBMSswNaxesxbPA2QwB8hWzGJf9ipxE48Yjriudy1hH3dk5AvV245gz8ZSU4c",
  "key3": "5QBpRzxFaSa5TekHrxgYe26k3nFmKDT7MS6RBvsBGAKSzURRt61UnuFZhRSYnecFPoDAUJPM6YeV3CnmV4CA5arZ",
  "key4": "5uVVHJsobMUZvZ8ooQUdJ8ZvtQDHuVioRZjMuUDJJBNL4CAa8VaZoN8EGsHo7djZawo9ExxRJUQ2ut4Ag4cVYhZA",
  "key5": "4p7f2neLS5Ecuj4tj9wqA5pBK9TvjUyFdLLiYWjhksr92aEt3t73equPwuDusgUEWdxFRqxnEej6b1t6HNndMnGa",
  "key6": "2kQqrFDV1g8zwnAEn7nqTeTL9ksVFzH1EQVdmHpBtYJQBH9wYa1w2sCS3TLnd4qkujszMx1QKrHfCziyXVnHStRj",
  "key7": "wjNFBSakZ5iaJEy481TfGFEc4o1gMUhwNZtu537eTEdBxLLqo3kKQERM3vg51YbASC4gF7uwD4VAXTy3w6cRJt9",
  "key8": "2vZuKN9tbUfKk3skaqgqwD6Ufj9dE6Juo4oCtgDFhnfNicbdWDf2LZxo81iuwiG3hoqwxV3By5bPjrJhHeCQ9ory",
  "key9": "S7mNU1qaiJk6PyS48bJxpjcAgGQ388f2KEsMcyhCqtpPD7nD12XF45U1BRU2Q52yGLhYBznKw8zTAx4WspsxBet",
  "key10": "4vAo6dfPU54kHF7MnkuqrH4axSMU1d789uXCMfjpZCNZUTarvvQf8NHWpdwdzP84QNpDJv7odTQ1teLAp38sMCE5",
  "key11": "XR2Kip1WrkKPrG4Mpk9DCQoxNXXVFhKCzeVLCGbDWuQ2X5MGBbAURnYCC6LbCMckKgcMugmz3SSjz2NAMtUYNJ8",
  "key12": "5WeZmXFyv2KdXrzB6FcrK4SGYJMAqFHr1rf6duQWPaYXHHfAGwEpTwgvGCAoYNzq8sk6krgTjF3Jc257QMy78XjM",
  "key13": "VF6UjjQJJshSgtL5md7c7D3pk3pV1KDAodpQSL7TvgD3dbFBsG887oKf5qs78QCqQ4y67ZzACtdHnBuTmSreaVr",
  "key14": "21RRxfwttdoCeFEEZntuDFNS36uaEo42VVnPbDcpewnBDMkhbgYpKXPCr5skVdcNu22zu3Y8DGBGbC2vquTzw212",
  "key15": "26ZmtDEX4DXTA6wk41uyW4gcKt3NfnvzTt3J637zQN91qc2uk3VAiJETtHgALBhzmH88wScRCCskZ3HgyF6ahR22",
  "key16": "oV4LKwdbZhZHsjctasYqSVefxr5g3P5TTsnv2eyJZ9y4aVsKDYFj2ZMN3janG3HuZEiFRBvCJMsZqq9KEsmxQEv",
  "key17": "2s7T1gnjWEtPEjgh2ETCGdKqgv4ouNxotqEecwyrQNtPkvLdweYYVTRXrHNkRBhfiRqbN4UDzbi7Ekb7LFFQLLmk",
  "key18": "4wjaEZZFHHpHG2oiXQJVi9N8YiaktKWMGGhJAx2pHkMuxPncvvDFW9wZ9SA7Z97vmDtj9Q2sMFnE4cttrcSKVoV4",
  "key19": "5ooG7WzqTutds3Hh8VFQ8TdwNXaBMoYddyeG1HiLbWYSdKuwS6qThF9WBjnodQYFWwx3XrhywcNbMrkRfoDA5b2R",
  "key20": "3bCXn4xmEMY7yPZrnt1Uj4sbKVuzjfvNn9obeMdVq7mmHqt8Gr6ExnTg13RtWr3hv2Qty4JVNu7SqCScHHiCpstv",
  "key21": "4f8TUK9dZ8CRTUNz1gzDPDV47WmNUJceLLsZLMbnAewnm1K3thVMq56ZgtccmNvjpc9ouKRJ651jjQfCdbx9SfDs",
  "key22": "4j3YehoLnp8iAWeGoJB9yPVhq21R5vequXm94ks2biN9dwWLnuHPugsXCUB78PvBA6xDtKnLHLHGiMc2qtLgYcQy",
  "key23": "42JnaHhiWsuK8dmbnCtMvqRQ2YXTqxa6XCoTkYoNEdiphA4svYTq3Zetq8PsLJE2KMaDrv6B3gkCsCFvwnBuu5Dp",
  "key24": "5B4YXKra4P95CAYKe2PhMuGySPUNrvKWtpqPzKK3QiBZzpsZzpqNbv8KMYs9ZtGrx34ZYsqZ5CF8QmXysb1akRd1",
  "key25": "28pKtpMxpZg5oZksLKzucPwC7yJvPfCkTusFTEaZhpkrvDMphkB6kWTbsNW1gGPSSJ5awEL94fDsZzEp2Phccbx7",
  "key26": "4waXCuzFCC56ExLUNKRXbbNoQXbbMpCRBGU65ASzGRi1hAw5wfM63bzy7vAtdEDFEWibznVufaPE8bQRpn2QLFTL",
  "key27": "4gYYQaUnJQc5c7tGXRdY4RVAcxuEDTnHmLKiKZCZY4VVe1jCGgHvZ4LXEQWQQJyTVDVeUusrQj9RnT2Bqvd65DXy",
  "key28": "L8g1tMMrzjuJ39M2xw2zr5qHM7ozuPtqnWSwBLxorxSS3XFDb8p9ekYnGjSmKjYE2sz9mSPxB5eSa84G3gJWQgA",
  "key29": "2DQ6tBNi56P9tfPKNSMCJRDTy6ov6A84bvSda9FdmQbpfxThiKTm2aQEzZWtfNAGjokFyLQpMkSjXDQrxsxCc44D",
  "key30": "3sUWESoNjoj24MjN5BwP7eGYYyXM42iZ4vDSttjkjBjHhX75EpMjhRCfrc8pqweTyGo2Meru7eHcVpvWwGPeVD9q",
  "key31": "67qLuiEJJWteVj1x3jXSzv9JaE5R1orDgswK14CrRSnoHDtQ53a5SQQUwqv5iW9zV5vpbEUc6B2RQcwweNXd6VUR",
  "key32": "3kpgMko1vYDE3rMM3jvCDcKStnuTct6SxsFFSVNcoaQqjBtd8jaDyFJMPu4MBwHXAba73eGtekEZSi6R2yXnMJuV",
  "key33": "3QBbKoCnMebxTarnhkvUmDKAfV8KJqqU67YK7e5NmsEmjkixPAsM4LcJwPkMLo9wNR7rrSvCkJWXCwndsAytR9w7",
  "key34": "252E4CSNrGPFUZT6kQQrDE8f3aku9xsy1sHV6AmthcsC8A6mmHJLjoRZisRFfFuLwUTnnYD6YNhiUwWoDHudMGJT",
  "key35": "2GyQqoovqYZKuCHppJxpc3Ge7jRE5JHyDeHnSJ9EAmZpnDS37dkC6EwH8yQywHbjcuApMC5Nh3Lqbdmzsegc2uTU",
  "key36": "43Tdmaoytw4JMmnY6sTF35h2Dp1xBeF2t33kmmFC2jyiByZoY35JqkCmpj7ugGjCzuQyhxzNLQdvzDF867BidQve"
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
