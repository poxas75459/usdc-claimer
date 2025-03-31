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
    "2uPJ3zgU3NtGuAUAJdqyr3GEZRjwDqpkt5hRJhRtWJJFFY1Ufy55iLakL5nH6vdQVS2DXhPaKpfAe9ad9oPRw4NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJjxLXdLunjotxAxJXD5YnLAuB9yMqrrhvjAmwf3MKzEBNQ3bcRPSG8dQs8rFV4bMPhsFQheLPzdF4c4Ku9FnPh",
  "key1": "zQTXjmUY5BdW1yzcoJ28jHsJP1XFzk4wkfqyF1UceZvSQSEP2V9n2zseFgHzihMzz1e9xFvTQLzVRN6yUubYVKV",
  "key2": "4oSYv2EBGrLRbeqqAH9CqTFZjWTwc34T9eYYrx1BafCc2XD4ZoY6eFZUgmin1seC9CRm1dvEoux6zPniKiWPkhkw",
  "key3": "3LDhbfhBFPdYs2Lgigvuo11D6NB52c123Q9qsnyCBruRBeymMMSZdXrT7781Dx4gMfY1SNataAmfGah9XfwhmXDn",
  "key4": "27Av1wM1PJrM4j3BpxyvUB5GupzLT2mPz1wt3iSdfGB5uTxRxSZHfkNq3EWLM4GWUXDGAzw5T6seLqwBzgLv2vYs",
  "key5": "gb7btcBZWCWzLrwr9buPwSVX9cELDZQ5thxxqi5nRjsu1jyNPbG54n756ih7LxwwSmi14GibPyxdgvEE4UCg9kE",
  "key6": "2tsAwhjypXaKFRstZaVWE7mQcfapX8yv9o494j6ZDWLomWtuFYcuoFjGjr2VqLUPtzLxS4bMKwJhLB4KF7pyVdFv",
  "key7": "4rfzXmyPQdUqKP8VGFyTpAbTjL6MaLUnVjU6mVdKeKhh4FfG2cyfUR9Ai9sE7UxEKiKsmiCiZoTNWQo3N59DTgW4",
  "key8": "2uZikJbm3D2SqnTcAuTPg85vvq8Q5Nra9uPq8bcqKKJyTPU2mE4ZfpTjuh2mfbnVJzjxaDFPBx54qGr9LLPXDchq",
  "key9": "5LfYHNW3YgYkPwWK4mFNunkMVuYeoAmMA7za2qgWQB7hGXCencQgHXV4x4jhgPbP3SxwESJSGJ3XjLgzHQdcreu5",
  "key10": "2cyENXi75QaQ8jhSZ944ssTPmXywpaDRAPKCXdnpN7aCwuFmioUDUPg6sXA1D7TJYHYbtmGCEs85ERmy8nPBBBR4",
  "key11": "4yTqDUgM4mNjjohr2dgAQhDMKswU8c2gXZzFYvCusQYVEc1zGwYMXMa4n7wtPeQ8kXafHsAUuLwf23KsRTPfGiuD",
  "key12": "3w7h6RMJMAUsvwmeaJCGhVxw41tWc2H2f3Bjdf1dxeogTjSPw2a3ruzxQisWgBvUkKDMLv4x83tpyDP6uffRN2bi",
  "key13": "3LsGeGUxzpjnE4o52mFEidTzjdXm5sAVq5FSubZk73XN8dhABwoCHRPxA8qvXnBh27ow3RbVQDS4yuasvdLh9Xz7",
  "key14": "3TC71MxcESDfS9GhXZjBYTzu9U6XKQWJ6KSgQtkGdvkhBGRdCjF24roP2mGdrnPe2VnX8cmgS2tct42iwr3TpqNE",
  "key15": "2zX5T5gEJxeeRgn1LCw6cxWftG1QiD3ey8VFTKukdYnhKD1oYGx1iuWSes3CV5D7LhndEz968JX2ABYRv7E4g5E2",
  "key16": "4RmSmzQx7wvWn1k5VRRbpjNG3FSwTiLHLt8QWNtMMZzzH1NWfCziq3ZTgZLgChEpfa17pJx8pyP8yVwamf3VdKg5",
  "key17": "4iaLALQt158TdHrwjsh5uaVPVMkbEiMrMY9EJxWm3qxeNRcudncRNV2B6SKx7GiLz6oSsEoYFrHKkG3Pyg2wdUQ4",
  "key18": "CZFAxrSP4sHD3ZrbpnAJW87nEaqo3745uZxa7obVQTUeDmgxiirv9dW6awz4scoRCh7f3B4aF3UvyuW7etj6RuE",
  "key19": "5uUMz3arTaM4f9WZeN6mSSSXAAdsNgUsmy5SLkQP8h5V1AUVTyfwoeMwzR6FqGhyg96ED1TSmB82UcJTCxhfiQ1a",
  "key20": "9qHKT7cRzjqqxodAjGhrik1UcpYkzT2BFNnY89i1PwAhnwUkYTXB3zFWfJcjXe9PpAWB1gVZTXkasuRuzbBoGYj",
  "key21": "2GqQMkrpLpyk8eHEU6P9RjnQKKhrUnMxFgoe1oApi3b1FXtGFedKV4nCajr8pBDuUZpfv9zeDDa7XHR6vtViVYsK",
  "key22": "3XimLoaKKrXffEdWNacfP1VbHExB6WkyS6k3vBcUmUHn7vF7pGfGTHUzFCYmNw33nxjbVPrPPWJMs6GXAMticvp8",
  "key23": "9p22mS44sxyCbmTsoaS3BkXcBkataNF3Q8zR1CA6zkCw8Rz9KF133hNcno96zdhfrKHaeNnim9KZBpmdgsb6Qvm",
  "key24": "5zR7omDsWhAU84fe5WcJALDWW43XtQU8ehD9yKxPv6oXWh6nwa6wR3ciLsnCeFwt3st2BFg2WEAnGTvxieGSf32c",
  "key25": "5v1So86rAAXRPC1ky3MjP9iEkj9o69oyLg9f4CEgBfh7RAy9JADjw9XUnuSiEbezDZSz7GHarC76SWXVDabBbN6j",
  "key26": "2SvWfctVwTCJi54h4YofyTdpKWqaDhZdF3UhXiN4ogBTWVWQweL4phfNeBxCCctD9347ghEZJQM3oJKpgmmVbp5d",
  "key27": "62DWhHYgKVZhdgjFUnw6H35QhMAzBSAz45NhTN7mJBtTf1WG7VWENsyoiWDtA16cmegSdUNYA4SChjyk89GXHoUz",
  "key28": "3YU9qLk8YyphQVZre2sicJgJR8W2QWqE18KdESXhMG14dy47dd18UrxnGP5CJrzZ3BHUs6WSfx59TkngCSGt5ZVH",
  "key29": "3RjxHZ7BJHjVt2rGsnJTHbXwxz8jhtfNCw2yDFZig5Ms27wnaHqzgBfGsV9txZUrd8Dos1ZhTG5TCnCvUzHsjNsL",
  "key30": "32YsQzDVqPX7zdXrB8d94UUuFFQLZ9CJVbNZWkEs891YyaSqovzzZyUjGBZCfeXYjUxk1ER1WSxM8SeNp9k7yT46"
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
