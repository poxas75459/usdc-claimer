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
    "34u8x3uzDBTZMGsKsbRSu214EFbkiSDxf4vAyfx5xo5W6Qs3d6XBFeq7WWrupqv4FysuVFpAt9RJzn97DBc4x8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KP1nY4XRzcptzqKRbJyqjYBaiWRw7mVqr74E67fv5PmRWvgGydwAtZ4Zj4opsdJn6JsMJ8FFm3wuGnQa4YecNdz",
  "key1": "4zfNuuPiamE8Uyixh92DuSuotTY2FdRdLM6tsFPA6DfPquhV2Hq6X59XZV56Smz7h8T1ML5w97PjYsfmHooGTrpr",
  "key2": "3cgVHuKMS1C8SvbnNxh1B48sEriVRj7Dbj4nQNwgWmgVXsfcm46XjBi7koMPWLtb2vjt2WcTsjMVkYucW3pM5BDs",
  "key3": "5AYMVr1WQYrnq8H7LegFAsMbwaHKunrH16Hegd6B4DzBawFEN82VbjTkdXYVREz19pmbFmrKP78xFtnzL3yVqdtT",
  "key4": "371qnrUf1zZZYmCpVj8ee6u6Mh4Y9fJxhGWmJuQ56VXzNivCtPkYsFYFUExoJqErygGyoJPmY3TWNbzfxqJZRfZa",
  "key5": "5fingR8PwXqobZhMqtaYqmBnaHBmimZAJyrXuZaRMHLpExwhPfH7KvgadQpnpWYTA53GZ2UKtYt1FJpkK5owCP9D",
  "key6": "4awseUdXAqfi3wQXUtyjK23JppKBQg6FdodGLJVLpaes1Gp1Czf19JdoUwSQFujiJS8E5veJfVZUSNt3PFeCjvBx",
  "key7": "26s1Gw4NSiy8zsGJE4yMdXqunNPPfvswf57AaSdzCVdyJSEKmjta1JeCzJpkqdFbzeQYnPaLPuUVFuuBinsLjsGN",
  "key8": "5gMUJNJwF9KbPvcH1P3i9LDu7ifLc3SPzT2yt2FqvZTTBpwmTSvraNY6KqVBXaR8qAiR3YJgLXDSDSLSEGReXoJj",
  "key9": "T4LwaSCKWKpj4HQP7Lcrni5zYPVPudXvaq7LAAiENjwPrkDPjYzJiJahvzhmbeuiiRaEtUTJkLZ9QDkbPgXTMgy",
  "key10": "43FsNkbYuu2vKhx12PcqfdkY9CAxDghY5RbuTTnriwc9WNmE6QjfpxbenSNKc4kAZtF2RYDZBWKBhzKhkVMjSkJg",
  "key11": "2LoGRFXVPPgcRTDPMJqfiWcZoq43XDK7BoUxfx4mTc7PBYs36uQV2RxhRGn3anMUq3MriykAkKvK8nEZ4ih9BwNv",
  "key12": "5HrM43Ycmz4R3YRc1ksTrcvB6enPNPoHfLooLfN317WbQiASt3EVAEGFKHHnR75pUCcwpef6RX1NnGbEB4QGbrbb",
  "key13": "4twZHxXRuVsf84xttHnzaidVNcuiLzGZGf3m43rj2sG4dwLxT4A1KWWLq33SvVLZFTxadcYGtTy5uY4SKfuaeQCA",
  "key14": "4xd1zDmzC6xGXXuw87GdnYWyjvTywMmT9xwshQ2RqhUqdrC317FupUEL9h42AMwfamD64JLCPapSJnu2Es3kDqN7",
  "key15": "4zhV7ycBRyi2LkDSYGySdgGwrUqYNm9WjL7hVFFm6ZGgge4Ki3ZADft7QMuZtk7VKMyHRKFHecDkizGs7z4C9wiH",
  "key16": "2tw3hKEjwN54QdEaXwyTqCHcXi5hcPygh8EcaxfAn5jT3GBX4UDZSgNUyzvVoTrW9x9NNMZrgmE86EXJ6GKfR2EY",
  "key17": "5oFz4KE1eXzegVZvBNmfiNMjyn8YvcATpnAgowEnoaBD8dVHrQUz1esZiFAg4k5WwAAqXxU3hv4wY9rFTJSEmap2",
  "key18": "5sq1E8SSdAynXoMzM5xxYNJ83pHAfp48ewSRFjZdn3Uwuv8gCjkCF6iPe8EnhyFHNcNWtBfaGpz5vSj37ioVNYKK",
  "key19": "5atfknjtLDG9TLqtqapZcoVTdaVdwe1JdcYqfHCe6kCcQJZzNpFVdTCuisbJ96fCf9cFw1JMXQArK5rW5YhZsFCA",
  "key20": "5Q4ES94JfNTf5DSGA2oJpxJ4ccbevxeTYRL47K5F2PQGfwB1FAY5LENvHzpQhmLUN4amtu2CoCboV3aEDW5yNyT",
  "key21": "5r5axL6byTiUzUki6aLGfoTBXwa429XxJnT6ffEh9Zq9d6VwUNSuqZsEGwYWEu4Y6LSMd2eWLdHHWTxQLJuK4n4R",
  "key22": "256hpngdZh2dFP5cZeMqKNRa8kNESu331eeXqyRfVoAw9m47P7DmFfguQDikv4i6MdXeWC9f8pxYoZcTjPXCJJgV",
  "key23": "3KQTDqKsNCp4CGsxFyuXU1viN9E6NVbYYSg9C8LV8ug1edV1exdVVpxpnxtD6SJAX2TjghFfpNMns2hgygwZK36h",
  "key24": "PDBuQYpLzdVRKQ4FkPeiFCSvcfZ6pXukqJjbr13r4UfS8bjZRJUwLqCLAE2YNYwNKApySKspEXGqAH5iYjDC6wx",
  "key25": "4XbMo6wJKoL1B3Epk9ts6tDZEBpi7DSU6gkxby7Rcm2WiKdewhZoN3M8PaEYpB8a3zyjyuZPKTDBW51T1wqCwcPM",
  "key26": "2NLEqrmp2U68pRegthEWkxsVMpYx9xWAssi7UDPZLukQJ79EYgtLWCmECgiDG482b5s7zQtn6zcgLtZVB49ig5Cd",
  "key27": "i34dbuhxLib5WKth7HUxWSBTyGaDJX9nN1F7Vv1kVKRoigsaVG3FxCrGYzJaf2JqiqfpGqe4xfaPXfM44qNNEs9",
  "key28": "3b4B9Ti3UQKMUVet5jVhxEdnL6eDLuKkSxywwsQuRxS47zxFtpCb2EGw1AZ5tiaDeJkTz1C9wuWmW5B5KKCUgmJf",
  "key29": "gzGnYyS4TVCL1Zxh1MoSYGuW9CA1K2STVRzhmAkk1tHXw6sM2bMi7C6cidr9jR4iCSQYJytS2nMK2EZ945ozCZy",
  "key30": "46bFeGAVjtDvCKiy92AFHJB3riMz8DAzgPUNpX8BZ6acyUQeEvXF9wB5fhK79pigyFyZHuPsSGvNs84k9U5WNwY2",
  "key31": "2bfyoDcYwZBMqGitfobDknd6KFuDdmszDppf1JjrUi3rFRJwQ7T56hs32Q7a28n3pwBvRA14MgpdsxtKG96d9Yuj",
  "key32": "27drFi4973ZcM36mpxPVYgfmb1Vvktf6fS1p3VbeGjFNMyemjD3GfpPWMaVn8FUtwVmFrLj4ajXhJLSek4ZSRUW8"
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
