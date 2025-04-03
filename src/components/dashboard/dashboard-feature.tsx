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
    "5iPg9He1ZpfLprwvkDVVR8SMB2KunbrWMkY5RSz2d2fa5jBXSe2aQAxBewyYe2CQZinGQyNV5oDTVMmARV4Yrd8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TifNYweWPMdZLeYcXrndtzmXHCAnHxuZRJuWsCbibDXMkqhPUoCBe9XFjLCx2tguvpknJfxkTREUH8nmxAXefVc",
  "key1": "3k1GeQHtWGFg8fERxJVvyYs1wHrHG4VD1qm1758SbEpCgrA9cGHwXaVxdhNnpCzn1nACoaXPUz1gFKdTQRdpjEvx",
  "key2": "5JDuAJsrqT9shD8zTecPdoZYQDpV2JWJ9ah4oskdnZetLQ9nwh9UTQxGbsX37AHCq4irzRUvtScDK32HAUzx8Ses",
  "key3": "2VrVWFtD2wjtQhcMHHttomKbbwPzMSAN7RAuiEPfqJE56GevXvQr47DjpDNv1uCiXCdhwnkUn92Ct25okAbZGmKX",
  "key4": "tR6RQS7pp2vqCddivjKVTPwknDjvnzi7doZAu238vxaPwoNdFcoYEdzQTatQ7iu5N2SdrY8jFQf8ThTwJFKdym3",
  "key5": "XNs3ox1HgCQ9qMcvJaUQxy8pwiJjnc1cK4vPDAitjNd4Ac1v5gPHwxtZDCV8egAshuCVCqoJVegm9JtLXGsPeTq",
  "key6": "4dhp1iZTmML6rwoXmQ5Pacxei5PQYiLMQ1xpRQnZWsiTnsuv615noMskedQwKvYuyj1wD5LnkmAvZW8JvVW8srL3",
  "key7": "R5zDNMN3ikALg5Hv6oyxjqLbqy4HruPfyARsqVxAXPieDSqq3yYrhhv5DXysf7itdJQbtg4vvmueaPFPao6wKU8",
  "key8": "2NHn2WToQA9jPtTdFig7fJ9b3Vs8BVvFnj9D9hz4H8tb2rLoDC7SmGmDfXZMMJi4n4PqCDn3WJfDfG32oDCimqHB",
  "key9": "FifA9m4eQMznFTCBJxnUV3sD6UURPz3XvhHhWRTjQVfvDKP42WdVt9SdBdGuzFgr9dzyqbCCRjhtct3WehfarEC",
  "key10": "2dtrzEnfjDtgZmz57PPxEbKoZ2saJwCfPDqzU4R7RivbSxqAy8FAkQ54bZkWQueZPy1myGjHuN3TGzMu32m3djt",
  "key11": "4dLgJtZt4qu79pLKuBxAnDyvAPtGZ1G58Xryuv27t6hRKSqdiWXj4qndVnyV7fpejEzhQ5DtP69ydDdSZ6fWx328",
  "key12": "21u5dPWWxDcT1WTtLQ8J9u9CQ49uKT3SafLk4pqgZwyb1g1e3svcwwHPZxTaep8tyXsrUwdjAQGgJwid2vZt96aN",
  "key13": "3j3qJw1qYd166d3uZCzSjdkxPCHNYfmLjoX3FtYsppxnwBLsEhtvLBD3RpymX6MiQa5LHSbT73MXAa2NbsgVVbU8",
  "key14": "2K1rv2Unj4vHHNy821fftqpsbXqhjvi1m9qVMAVQYU8mjHj13Pe2pJRiGyoVDceDhVpfLvUzrAHkBUvq66ys7XsQ",
  "key15": "bQ7ZDCNG3Sp721KzgAY3pS1S8n9Mq4hsYDZYeTwFfNQdGkQJrWhyQYEcWTfMjYGnft5ENKMxtwdb1LX4gpEavDR",
  "key16": "2vrBfnV93Du9wQgeQaSufy8kvyvNByft9yhiy1RNDYoyqqUzgrCf6u5KtteiV8xdHvq2jmoJsZ7t1KbSGHYLkhpi",
  "key17": "3XQStWzGcF4yaxtz5Fuk8WweRNqs6mUD6nf3hYSiUu7KjWEqBeUmXUtLyn1DcSNGRsNc6H1iZNom9vzW6nSrvv2k",
  "key18": "3eWpn6H6sypJS6ok3VdJFjW9CRYFVr1cCaYXPvtAXhcTcbKY1vzFUSqzug6nEmwg5ed2RpdA58fXWh4HYXbQJttb",
  "key19": "2GyyHcBfjsQZPVM1hBPZ1qcm5DJDatPresYGkPde3xf76vsbKrjPWK64E7hCxndPgZ7iJSJFJvpCsXBPMxmKg4AX",
  "key20": "5XRsUo1JTtH1sBwaYSByWv9baScXWRG7EvmHH8hvENsk9sbpCJhKrZeqVuFwWstLmGonbx1QKUMW2kACe7RRSRQG",
  "key21": "4k4vkDtQqYb9f4WAivrErwSHv3X76ZGtxBrbSVifvvm6EusHc2fwg3umWGRGUPReBuz745i3hkfkxuro9b8JwVsj",
  "key22": "33VeUZBnqoyJAUsTnjmtnsvKe1j39KRYdt9QYBqYwuBbzkzDYTozMzYTGN9yeFnJ4EsKSvgZGqD96ALsHqAgRGx2",
  "key23": "5aUdzGz1gXCQKRh6wF3Dv3TdqLYMRyqT9Pk8RELc9ynJmjfzamA37PA1wA8xrmNK9oPk14ktNUPxmjz8djPX24rf",
  "key24": "3y7JzrLSfR2aZ1jfuhj2MXiWypBekxjexHfCHaANooiES3v2GNXfypS2diMFxEbLt6UyT8yThsX4Bcz8xWnVyFvc",
  "key25": "emjtRGAQVszCz3M3wcGZpDqTnYUekA5WuKLmGsDk4dFwc4rjUzNSEbTmfnxdWCm9H1w91YsXaRdsifgaVATLGj1",
  "key26": "4KJxrMGTSEJ8fAmQMQf99jqFa7XFgTMLFf3aiE3KgF2xBaV96NncmTfdYLPphuEzhdYQ3RjKVY8PFiwp9UofocLn",
  "key27": "EDkN7rys1FqCmQMGHUxSWfw8kWxQGygRREbFUXqH56MUknER7hedPf7PzyWZXC4f1Xq2ykjD14CEzgGesrqorvH",
  "key28": "2HTTNRX9QoLGvxPy7rQZBnGUNf1EntHd4AS91vDHn1iTx9yhGwtKGya6PbPkSXKaMCxQdmQFd3fZM2cjz27MMzor",
  "key29": "3VWhrGnXwcmVxogXtv1uYGGmmUVza8eMknnma9cHq8voP5woFzLGPGZqdr9QPE2wW4oNA5y2sQywtUQNp9LXnfGd",
  "key30": "3VmVfWjP7zy6yx2xiJLDnQ6i9DK7GwChpyU5FXzHMPptbH9DzyiLWdzA5SeXy3UgFa5scqXWpuhhZAR9W3roLQNG",
  "key31": "21ezhR4whU4sEyMEkdJuPjaLdJMb4gJtevtBXnJ7iuhUMmTUJwNhmVtUq2vEhpaqemSQ6y1ui3CZjNo52Qy63PdT",
  "key32": "51xsNMw5VgDxwbgPjeZnjnFXvZnc1Mb1tcPFV1zQEZanMF1mo56F2xqLfdwufvAAywbGR1i6fkyUPHtHTwscVSNG"
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
