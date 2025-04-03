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
    "4yruUet8M7FsRbLyLoQk7WwKS7MCstMfFkq5ndQFNUrxff4jPHW7CbkPMhcp7MMRbwTh1gSKqDzY5J3GEy6nSLZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mourUY2JrfvveyNd3RWDkz47bzQdmheX7kJ9Fv78C3PPP4gC3Gp5cT2ZtVDs1u3ERsyUMZ7eCtvYx19rzLz5D",
  "key1": "532kKqgaZwQN9Z2YrMuhT3GZXFRkqRqjsxfkcT2YobQKv3WHZEtKTzkq4RFdy3NLANtYnSmC3JSqRiKmLraWW9B5",
  "key2": "3MpcLRcTkypeVMJ62Jz3BfGdVkha1dDZteZwXKMY9KcnrjccjP6qDeS4uxsRfgcFZ7X2S1hh8KXsbFQN3QMJiMes",
  "key3": "5MpcFTxEdCtRZaYUQMZt22jrCxP1QeZbFz2DW584ZJjbufQKqVc8wN3BrYXCAm6DW8TzTV6gNL5hJVEeKuLCEqfR",
  "key4": "Mho9M75zkiuZBQa5ZJM2gpDY8y7gfuEkWjUcnayhqVNUfg17pWgYzRyrJ1zd3yYaciqvzjeEXGWRttbmtBfZskZ",
  "key5": "5gw3V3PjENw6GPX9uK1wZ3VYdrqGLLfoCJdJuwX48YpSVrLVHP93KpZGvF5YTo5SixFmwouQmRAd5Nj2HAmL1Dby",
  "key6": "3mzGSRZMeR8PdDTDoC57hdMdJYTbAkhsSgj5yz2f9Drs5Zq3M7jxrznBbqzQT77w15N9vXcGDtFUHYaCmAeAAEoX",
  "key7": "3pWNps1TkLk4MACjmcpU1Jk6nQr4DRhC9hf7X6UJZ5MFBPmfso1HiYMWDEFTjMfrZtTJcANt7D641kMUTxME1oRf",
  "key8": "3PwyvjF7Qo5MPxCd5RdyvgNWpjTQCLRWFstAEVQDvfWdSEwXtCPHkTSi5Db7KFudFBucTK42UpZREn8zRsLwwWtY",
  "key9": "3Wpqkkm97UTHHF545TDPX1NTT1uKB8bQQ9tvpCTym1AbHHUDiP4daBvEbH9vb1UAcys4LMsw9uo7j6QuntopmvpN",
  "key10": "4Tm8rNhxXYbDEcA8oDRJ8zGF3JTSvu9LUmQonLu7PB9GvXJzGiyhRpHimcBNPqJhGF2Ggw8qsPweudTNRgQrzbbp",
  "key11": "3u6FXd97Se8PuNPCSDJ9QBywhAU2UQ5XXSzMhvZtv9psSWVAiG5QhbQCiWKUCnm7djhfhtZ8VGhFcSxGw1iFW7Aa",
  "key12": "DeLhjpwcGMdmX46XZcxpYDksEXabKkj84Hx6d8gMPwZBZMfJgAJBqqALAzmZwFajvRfLuh4BR5eGo8V77NAirQX",
  "key13": "YdKVsm7PqFGvXhtjx2X9vkfgKCjaXQgaqB4TVetiqVymkg9Bbx5zm6bftewHqmNikJGnTuC6phRw2H16K333Teg",
  "key14": "36CbQTZFEjoXiATG6rYcMuzix1qtmFrtpodN9bA5zXftwNJ5R5hrSx7SY2qW1PSvB9y9zPpDBoX9YuzWCm4psrJX",
  "key15": "3kNC9445yFbzX4xDMAm2ifpNm4faMHNMqmT83aUY3VwiWSbEYQ2McbS73Cx4nGcVEnP8Bu7WwowoWiw491xd3pcy",
  "key16": "A62jXAy3Ai4jzwof6UeEGjmja7eMX9QdA6PRsj3x7s7BnNf2D9C2v1BfgBCebfk76rsuoRXXfk9qUjWQpdgXpJz",
  "key17": "pudSsy9mgABNLd541Hbii74KHgM2wXJhcWyCHDBuHGX59jobBPyyRaMrtyGvHvrxBWUtVCt8zDavW8uredpyTAX",
  "key18": "3Ry3vQKJPU5M7UUTohFJvU7PHhYApdjU6Ts2hFUmx1Se61mTBYCSTXEXwbDdqF8y4bn1upF11A4hBndYF4Xp7xAZ",
  "key19": "3zaUUzorRauNxATVnWu1dLsUsGm1FQyiChRyTXjs4jP3eVkct74iHNTEZcYtyV5npFhhAeq6HubSFWkLEvqXQtQL",
  "key20": "5bJjqFXudUmaVX6Q5HA8Nt2UVpTJhDEX9si4i5VvpGA4Pm8G5rDLitERA2XsBap6zkJhcwaq6WRwYD7XmxyQ7wjA",
  "key21": "4QVKwpwKxeZwh6T3QThNgzWpAW85zFq8oNkkDW3m4viD3ZgYG9CX3jatchKQdzE1E5GUqDGn3aCTiLhycXf3ZY9o",
  "key22": "3uu8BWY8EA86UC2fXXPk16nDxiMjyRPHSaKwHNZ9L9kcTZMtv1U6ZppSHzwKxG525pUzUT1gfamAwPmWg4esmYEW",
  "key23": "2w3Ph3GuxAM241aoHKeBxRMxbXfn5C9WM5X2GB5oJ18yVCGKzgp69c8S4GzuJyFL2xHYHyubbUSWbXwND3axErci",
  "key24": "2PrAkwusCP16Xnj2PxfwnfkqW3UDPzX7WkjJoQFQwFbkjMmVyikjXrjaJ3fN6ZhAwxLPsgMVhmNrZyDdxTwrTcbC",
  "key25": "2BVB1nnvrHsx9MeLNALuL6oKo3CgiWGLNv7TSjPwbX9oV5eVadbRxhadp9aErGoUAuzdWjAkZDnZZy1KexasQs14",
  "key26": "4MLk85jTKzeERuzGi8jV9vjxGnXQrjN6KX1ZkR1nAMpPK27aJgCwmgGL15L8HRFkUA7AcUdiuEQjPBFv6BwNzrQd",
  "key27": "g3jHSH3LtuZff77DY5wpS1CZXRRdFTr7fsoUzbzXwdf5f9DAFsrQkdjqqMGh5Ynzw6bKyb87gogXjzitgw57F1d",
  "key28": "5eWTu3hBGehHXwcNpmRHBvZ8GtyChfDHJr8K1Us8FXgcVzi8b5QMotiZEfG3oab7CNmRDQm4NmnahbAvLcHrY9Uu",
  "key29": "3vSbDQZZhrPnT4W3fGWahu4vCp1DY3v9355gwGDCbZr1vKkgQ7Xbwj5mxXzyuyyDFe74SGbbfbxxjRWS41XMyytX"
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
