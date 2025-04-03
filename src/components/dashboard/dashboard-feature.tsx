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
    "AbRw3Ne4Ch5FTvjLnL3BVz5iXarvjVaidURbsff7gj69cZX8GrKcMnPU4UwH6Kx9dE7eFzQFGaZHTkWJc5d9jtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3ydeLExrMk1u3Hmk6hCUpnys9rbZ9bgKAKU4bWQP97mWYS2kScBCPhMfvVsEmjjUQ9UCL69r9fVcsu7PyontHY",
  "key1": "2YHKXwFDJ5NfqpcZctu4Crbk3yobyqXUbYR3fxP7DMuZtCD4hKuwi6UZZPWBsJmHWLceWBfLeYeyVNT9efRVog7c",
  "key2": "5UVWuBfUEGrGuEVVAWYJHknK3XFcyLrUcPee2YHUoYfZRao1YJrfDojwYiFnsKJPw2FCVJiKzAqzupfdvEaeraCa",
  "key3": "4d3RQrXPnxsW54PYaXdJqLDcwiTJ8QbgbBu88Rq2Thsg5ZFzv4JVctoXBf9y57xzrJK24e2JvjZ1X8rV2AtRUq8y",
  "key4": "4jumGwxyBFa5uKLL2LzBdod8jpVSYAQfLqgvyvacdeBFuuqzGRUPbXftgtyy96Fvb3pLizuGntnM9qMhVeqfP6Jp",
  "key5": "2uFhXqhG9wnzY9uLWhsEWeovRguk1FTr4Fb2eAKpS4XzL9H75bbfqirnHDVXPjoQR44yKogrDEaSekrcc9NDMVv6",
  "key6": "3M4iFmQMs7pocoSMW54vunF3EovEKk9DS2rNQnktyNnXbKREdqots8eSUBAymb68Z5LeXHYuhaPSdiV6jbYGuv3J",
  "key7": "Wp2LoPQfpDBEyycaRVixiPhQ4xrqvHo3aS137A3T9CPuEX6S8qAH7pRJLQAR6nRx4FbfCWuAsX3UduHpo1bBDPa",
  "key8": "3SE1GUW2L97n8aK8FHcsZPB6JsexDwAmJEEPTC213ngFBYbgKu4m8TJTz3Cy5N7KG1RBGNHpbCzjmoqqKmAvg27F",
  "key9": "5GSLdjiTdrZfw75vV8863dAuxj6AKrchDUFicEkeNUG1vX9W2HfxX2ENLfkWE3h4JV8Et3vo2WfqAfzUQV4L5Rx7",
  "key10": "2GAEkG2JzsSdW3vij5v7Q7Y3CAU2THF5AbTsWANHLsBfBWAoXTBPx3aiN9vmHnAQG8aaJ5YaTLuDst32aaK4e3iF",
  "key11": "4A6YvGyGtQ454pcBekNB2qZaKoK3D65StHVWyNyMVZiYY5hzc6YySpb4H7wi6JZdmnexNEQyrWwQEzryfNhyR6hk",
  "key12": "K6UkxsBSyYzZsCgonq3xX5ezTW1teyEXZrvd12u8psfWDfRpcA97hB1BHrUqFWPifBTWgxz59DjAoNuALQAqa6u",
  "key13": "5KJyu2XN58CGqq5MVJa4TX7PmCjCSZwubChAtXLnNAm1KoxfK7Sha18qDTFJkZSTXDoUbTkyBGb67NFzKjcQBUbx",
  "key14": "56dGUESNHi5fi8dUf9nndAVMTN2RX8yUHEuupBHRcGuxbnJzpPSmT5eaNKFHqdyfGr5X2FYLagsGx6Wif2sJ8sJn",
  "key15": "62kCFVP6WRdvCXUjugxT3FWJx1RPwjcAUSJZ2PdZpRLcUd4YJp5C6ddWbQHCVGsHAp1Pw2sNmtGAAHkkjLsxR6fU",
  "key16": "NHYn13nns8RHTV2pyeQHX53xJRYN7v2eJWrD3KAAQ3SNYG63JjcY4ZH3PBLXNYCykYtesZ4mkVtxTwpHmk7A4nH",
  "key17": "54qSV53tZC8zDYRYYwmYmE2LfJFGrWcYaALWxhjRZQMDhpskK7gWwVbohzEvLSk2gv8QUfrhq361giimRCvrapVL",
  "key18": "3KRZj4xuNEhLoUo9eAHgNLcZVkdJAQndkxqzJJXMuQdEzFDY3d5Po4c6sofAMMg1WR8KjAGfy2mUkGjQinAxVj8y",
  "key19": "2eRxmbqeDAnZHqq7ApjLJuyVmkxTx2X5DmSahU3m9KLhWnZR37cWjhk2J1etngedKavVBX4f19MEwa3WFkjWq1km",
  "key20": "4DMKDW5rVyimon7h6dfgQy7jJ8wwspJe3WksdCmUUiBrHTTcRu7siLbob1yfVQN34fcJkzdEx5gemNoFr6mba2wj",
  "key21": "4F1nmibob5EQoF3dfegJtUz2k8zuPkrbV3UFZVPFpYa2JZNF7bmdxenv9hsMphJPjWgR8tvahv32BZbBy4TEeTCL",
  "key22": "4ckCCNHrr3oji3NXjghv4ieR6b1xEjeVmmXJCXd1DCCkdU4P9iZRHaDwM9foRQsXfFf1ZWnckPAzsCysSD1AfPDw",
  "key23": "3xYJUUTVGNqRpBjFZyJ433CTvP3FefWai43bfBQSVnp5GZwgQ2XW1kqeLUhupNU8hamRPa6tjD8emXaisA65xjEm",
  "key24": "3AtZfxyVq32wERVHPJqkLsoqePQETsxsUHFrdEAfVqgJ9Dc5cJqRsgsBAsNjdUdEaTMSWHTaNuB2dWv8697S9KdN",
  "key25": "4jMEAPcraPmXgbitwK6mbEwvfXTsms2QvJjwhxVVGK16tp9tDbGHH7HJ9vGFatEGUwNiYdfH7F3rM5G78tFARB2V",
  "key26": "3LUgnTu7ag8CrdLuNDhqNfk68EsaLf1ox8u4dhks1DLxdTYy8pLPyAiuahZDijBmVx8rFVAgSiFpJrQwPNHCX2RQ",
  "key27": "5K9HSPHss9US7bgVoDZRNLhNvwaWPXAY2RKWu8KZUR4QXfTwhuwNa1fx4ukqbaVP5nPCCe6Sqry34YYdnECrx6yB",
  "key28": "3QQdDaFMxfFnjTit5khUqzv3Vvx1Vd4TXx5dSrv8FcxCfhnN4GQvb9sGRkBBB1GSTnBicQuVdtdtgGrDEfte5TvL",
  "key29": "zmfLELiVawg3HHPGMrd6qB247ixkZe9s3oAhf7f4tEX9q4Xbzj5sWadfwzgyGoDVzTH6fCJQhyyCAyokGSkgGsZ"
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
