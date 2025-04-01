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
    "5XJ1HfGXDL3xq52qDAxKgYLjjkbSQQMbgNpw6mwvUifhbmRoFucNqXoS7wB8qcXUBU1MguwfdFEYw5TSREtkbnFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VmkBRNytzYKNRCQZeKMhHUf3wgiNLj8ZiKih3DJqjUREVP5v36B4uG3FpCcriVQGBgfkvtNz6ged5eUdK8Yod56",
  "key1": "xAzd2YWVkfNvf3MhA35CpYGP3Gs9MFc2SqdRAQjZobf7eiBsdRtgacvuPJmRE9dLCBbC4BjtXAgK86dw3bSEtsr",
  "key2": "3wEVMWvsH6wCoRcF8g1tmRXurkNYxiBzfjaBHxruKrJCu32taD89kKhnqC3wp4WVSUVgvKn8z1MStSbcZcGb2hBX",
  "key3": "3re6EStAvCmy6ZM86SVFjHoMVs5AZdPKpQKs6YXmDC6itySPY5y69CH1VUPWobZ4F6TcNbSzNCFyFUEoJPzkyrRB",
  "key4": "3m2NSfnX8cw3e6xUwXJymvXV8qerEqwGAB26EFSaubbtqry3zpg8vXmCS6F57tTEL6Z1DYxnS8HPF6ueGdH8uVtz",
  "key5": "4vCcdue2MPWjZGacoNL6iZbHyVFZnj6eYFUsusauWJHD3FdcvU1UKkSoeznsnic3QJchdCmzYyNvpPnyYRWoiKCj",
  "key6": "3tbY6YQ6aStfGNQR2yMNUU5cbkxScZwSWmGpBdPj4aPqeB9PBT3doA67c3iHSuC2G52eSFhMRufuPPJCpNTSitvJ",
  "key7": "5aSr6H27s2X7UPTUWic8SAb3jiPNoCAV6zp2vq4sYB4F7tvNQKC9ZjvcXQfUek9w31DuUKQVvM5w66pw96hMJNPq",
  "key8": "xQLuHAZuqACc49uxNGM4LMGxVKawWbXdB8fxmUnyktbnZMwLjA8t8WX6VASvgyuSCTZo8jSeyzTC4gcyn3CTF6E",
  "key9": "5HWdUZPybGcDy9S8WBjFME5mZ4oaBkyqyvMAWgXfGLSDN3MaP6kcFZeQQeWCT7neL1aMGsnmRk9kjnA2cw7vx1yT",
  "key10": "4hf6Zd4ggJsKTmQkm9dxBGqfvZmuR5ZY8AkMCEAMNjuy3bYLbc4L234y846aL6ENaLyYDNmyF3yraPFFSkGbnLY2",
  "key11": "4fsSL5dNMmj56H2URjM5RjHFBJwfXc9zSpweipgc59US9DvztfZqTsUWmyRCJGRxbYBNmQefN83c36TzHZ2KTg1k",
  "key12": "41s4BtVSgUMnpVytYLBGcByFZ928ih5NBjrSbZFQj7txvTbJM7cebffkdAVupDZqtFmRkZ1uD79wEMxUcEvNsvt1",
  "key13": "mN5aEKVmVH2rNLKs5fW2HTxghwEsHCKNUHGh4jn41P348gdv4uHFMY3pfPoTuZ6gpEuf8mp63oopkRzYkKEg2ou",
  "key14": "2LCur8EzAguRcDJdDsyiePdzxK6KUic9VJrAfpAfLCWsxAfAaDU51vkynVMeg7YRML83dJ5MihTRvsL9idFrE1Ei",
  "key15": "3P1B9XgM45zuLdB8Q6SWxaDEctjtDxZ1Qzi5ffwM41xL5XAjVvpzdibVQe6kY33spmp82bzCt6qVjFfe19wTaKTf",
  "key16": "3Ava8xscZAzJS96yctCudRc2ag5fLi1rwEGTErJHL4rvEqaGLGYmrvdcUdBBXpTjVh4XqL1Pa2hAF7pm53fjjXcX",
  "key17": "3oSogGxhtyUSfTncierZjLmTXsMSpKBXxignhimd6cELQYY3TgDuadHLQpsYrcrFfxEf9bNA3A4Gpetk8b5sPZKs",
  "key18": "27QfLBXGxFZ23dTQzidYeT3rVxGkLFrCpPGddReqgih6BH2oy1tJT2feonGSB5afX1ff9q6PmP3Vegr15qs6a2jT",
  "key19": "2CRzRprXFkTLMsJnpQH5DgKB61q2nG7M8ToCEAJFTA8dCBP6SQi9TTNFbznok2oqAeW1x2Wfn3jx1tb34fxej7kC",
  "key20": "3q3YxEXN97z7rav2fLgBipvkbLMDcaVtSnAKAtDx8UzHPTFb4NqFsueKc5auxBgin5vq2UKXdGb854Rdn1a5F8ML",
  "key21": "2rZ4X5EtqM3nGqrhkcMEVhaepZ2GehVb5mPcKwP4fZgypvdyhquUKe7HyqnY7odAf23UAJN19zETUN4Qavv415ob",
  "key22": "2AWnWMf8SgiteiprKR9dScfV1JaJTkPBnFR2tej1vUcqeqi6AUfkpxb3JugRE9RvxTsWUrbGspoUyWRFx3LxAiYe",
  "key23": "NeAq55GyqUAnzbqFUFnJ6TtkDT53yBqYnR2qrH6Pu75eMcTKQtKG6GzhJJhzz9PjA52ShYiFVVVVNbdGZQB1bfh",
  "key24": "2TXfdVvq5WbDoMkAPYLA83iTPkY9kXGtLCetAzDQRe8yULopX83s7DYzTH5oNViv329BF7XYsnDHfxmqDXPfpX6x"
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
