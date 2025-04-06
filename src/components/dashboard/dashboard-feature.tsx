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
    "484YJa5AQWEXxBvkt8Bg6m8ZZx9wQy2UoEN42GyUAfToB4PifutKZZKCHAhVCtNrzxuTdFsYeJ8RVNNUZtUnL6kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uFLoMV7VXp2R7DC3YfUBhVtLSevemZTnKx62Jei2yehbT2a1iEo5ALSiG5bmqUrFTDpLiMbz4VEuJ1hUGs6tQu",
  "key1": "SYihk81XcGRkoX4zxG9vMryPXg3Ay2Po7sT8WPAcwNU3c1pUMTiAKRLcCWMAdRmZHtLLDAzfKytJYsdZ1t1VJhW",
  "key2": "4FWiQhPZANEchiopUpLBezGrHQjpvv6nGahRrefZBVZKVNkzu5ChXmrDwJce8PLWQh9KDCETDSa96JmY3QZWsjxd",
  "key3": "aE5YXRWX7CTnNSafy2FZSzeXNVaHD8ehhQvVj6DFQfFgKHc9LWfaSRZiCgo8eVRnrTojQ4KiCHz3gUWGH8S3c1f",
  "key4": "5qGLdNjdCqv3ucYNruJBmVoDANTLxyWThSV2CnZYCrxERUsvUKNthiKmALVDC5n5sEDhEvqWtoGrLaRUnCkeZX5f",
  "key5": "JjZEvstLujei3TMZG47Z3tA1P349gs9pwqEdp9yKxdrWAVPwuTFPua9Bs78yWrsgPxxihdhk8PCuXpEAARnJsGS",
  "key6": "3NdQkHRDLM7Zoxyon3hLLW3sV4nSziaVKQDcjQyKi5B6RCRgir6Bycd96QrjGPcsVd2jFg1orr7jPbw9whZx4XV4",
  "key7": "2wgzACPcocxCwSb37MvJsCv7qU4vTQa8KeL6xRomVLXLswn2kbQGhgkFGC7eNhQ58Vxp9gzMovj82JFN35dRHFz3",
  "key8": "4tqV86MbwvEuY3f5J6etFBjsimBuZy56pRUmCujCRVScgXcE3j2sLd9iqCL1ySMuj4udktqjXqWXTphEMhMuX3tU",
  "key9": "2cc2ZpBFdFHvCYptLFxHjSRLMAxz8vXT5hGSjr9eSeA6WGuhi1vEUMaLXA9JpiyYJqmc1WiDDUfcxaSR1joyVj7V",
  "key10": "3VC5KU6GdWdAUCxkygZznBmXpVfZub7RzPHoamSGBq8APiywfz47jtwmNXsJEZtURC9HT47MTuXdA5PdN1En1n16",
  "key11": "3RaiSo71D99ZXw2hU5jokqMirhRkfaBhBigj59LKmokkQiJ5bB7h571FgW6K68xzSSYKywriexvGi5rkvj77oemW",
  "key12": "3FuZLb9sACgZdw71KDtfPj3UavHzuq4LFErKNCzS32gHGGB7QNEcCWRcKaYNFetEmYfHdfq8dno8DTGAqiM2n7r",
  "key13": "3Xw3V7tyaHMcjgCWPoKPn48SjbQ7XfWJTxyUzqWuTeQ7HuQrsaqbB1kafSA8mrvN3ahDDCei78Y2T24RA8Ekd5sA",
  "key14": "5AvYkrUwnoVKuoNCC9u96FkBPVTinMJzxcs11nq5md2wKuSjWXeHEhQZxDejUtEdfkJ7Lemps4ie2zZSx49Hr3zc",
  "key15": "VLzsxitLaH8UiZDAgWHKgQZfXFr6MTRp7ihnCizwfNiL9RsRKjqEGtQrFdDavGyAERavmUqrWgmi5gT9EqGZBtr",
  "key16": "24kczSGcuk77aNsQ3APDQ9qRg3VzCiY6LymsBW1o5rB9pGmjXMTiyqKiH4EPHgSN24skPQGR8XnzuDsVeuiVhasy",
  "key17": "4XKiu9gbfirnLtrB3VxKZS1RiQ8Uwom9hm7WfhCQaW2qY7Ba6BLGJRy2p8EhN4Pe6TaPXzfj79uQt3xTq1KFmF8F",
  "key18": "4YggkksHAdq1JXe3bX3wGn5yF33FmzkxCnoSmddPKryvDm63gkBm3yGjkjhy3KL6sFSkDHje27J7BZdeWQCBzhGL",
  "key19": "2q74r8QLqv1WJz5m1NeqeAZFWaPfD16aY4hyw3HLULrheCNShyLbt2BFxWEgFLrGV9Kk6wWvKou6RfYNt7SXK9MJ",
  "key20": "2dkGK6dF68jcC8pDGyoXoAdRxzaUZEMKEuQrRn7NjejkynXcnjFxzAHVCH6jXf2NSMAP9VM5jyvKPa1bYEA5SjU7",
  "key21": "1QJR1amdKBfPdDhH2jrN39YPN5ZtRHjykgnxPG6qPXBMaYdhbjQWmUUft98fLvBETPPWeTShkMrUAP7hreeqTus",
  "key22": "4aMh7YqmN1NbTzCiEnQacmtScyv4rFhw9obPVC5SHxnkxvcfGfEVuid3LCjHnNxGWUoc7SkEpnGF7QCjxerKGe9v",
  "key23": "4efR6fByY6VA7i4em8GcEubcyzNBgwgNfnorE2w2MrLNaEFC6Q27hscwg3YiGCD1cm6nPshaXtM3z45M2Pw3NnFB",
  "key24": "FeR4FrXkDFNsi7dvRKJyMVZowHVy2eD9psmqqEVxCMRgGDBpuJny7Vbr4tk2CZvNRYjKGidUFVVeFQn8oXGtgBu",
  "key25": "3m9tSVJhw4YWS47D3gB7gCyu9UsApYApzztonsEtpDk2hqtbPNnAvhtGPsZap3YLkKU87FEtBCcuRyrvu26HaKFG"
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
