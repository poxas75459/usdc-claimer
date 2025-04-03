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
    "HBDsuawjLQq7qGX33s1o88bBLfTcfqXYRVuwvKfkAS28o1mTrJjr1Wg4qXVeoEL3jomfuuptwwHjv7DL5CyB9Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S8wpnAM883ivJ6NYTD6WDCLVSeNrpPz8RSCN42xF5rinz5AtTFeNhE3WeDxCDTvTH29222yBffsVgaaxDWmEtjZ",
  "key1": "4j3dgLtaPMVPu4KEGFyvRnHEt4BzKWdQGVmvsBhjVUVZ1NoQWGPQLF795rfuyPCHuNsW97Vi8R9P5Xc3PZHNPFkN",
  "key2": "3BR4VpFjAxCmAQPWPNWrZm5zggq8hefJdi6KHD11Wfta7pqDFLhpqk52C36aLEP8Dw9777PhX5jVhUYK9WzWwfPo",
  "key3": "rhafLrkpyY7WAtjeSwVYgENBjzvwLqALJ2KKEctxMKTK5v6iZQxX7eghdFeNY4CNodsCxDKa3F7TnwUJD2L7T3c",
  "key4": "BzLFMjJLLftQ6EMVKjeKow8gwMVdUfgnMGo2jWyBh2rf4mKHjBHNR4uKZ6pSyKnNhPak1Lz4bJBv5zz2fgZXtqX",
  "key5": "63mTYxQFWgaTTufJ86LQNzFb5VsVnke8yZNhAz2eDeUx4tsx85XuGDZYx61eQg5ppxMxZra3HaZFh8m1LT2z74Uq",
  "key6": "w7uV8QE3eVEYcH5FVgi2PxNRcw5nvPjqXZZjqrcTD6XC1y7ZUNZdWqrAQ2eJ7dWEw6hKyuCTXqakz9K2xV3RGt9",
  "key7": "2ZAzai53BHAQPpUK3UbWe3ibEbfqecJTGPKeZZ9yNRiEGqK9g9LhikyeTuEvJAopy5ch2hq7tSqQQkWC5sPnTFGd",
  "key8": "1nR5a1X4mdFFDEqeGSUSSAMFUgtGQu4ZgJaRWgakHdTKiaWMz2PiFJeUDgpmMJ4aKYsMM3zBzy1hEKQzcNuVb8L",
  "key9": "y9dggjCs8uxYkYcLCiWR2s5CWfwLk7hgtbhcNRz89EWSfFDu4RzU8KjRWAG9qKEm4jC6cKfqXY3p6YKK3ugMUbT",
  "key10": "22yR6DPk59y465MzfzkEgoUisgSoH7T1yhcUbKsGv4sbEUPKWRu2AZZAbTV3DVpi19bbGARHUiixbNurfHfKEikf",
  "key11": "4tAqjDP2qsvCZqH8SLq4W6YHyGfsMV9TjoHdJjLtnRYRuxY6V3ejsgUzEQEjb8fJyKiXGjJ77zTskpRCVS7DFxkW",
  "key12": "CyhJGqcgqsd6GUiXwHHge613rKm4rT7oztzhfk7HwRnxz7WH4PRw5RSUBVbauiMhV3bXumyxsxuKFuQLQnD6gUX",
  "key13": "5aUAHxikVp2C3Ewvh3hyGdFoM7pSh1z7iQyKk5375q2u18oQiXpBuReYYM2FyALD1XBFqRzGBXSTs3eY21FoNRDi",
  "key14": "MjFurbBbGBrZ5TZ3kh3hzJp2TGHSDS9wPLuwf8mLWNzLKSkMbT8bRrjadcJHXggqaFVSHdR5fwizhwcYjPCxJBf",
  "key15": "3vSe9S9mKiaZBijPKuw4LjGKJoSADCMnTyYRHDJfAZLkLcytdbz1igx7Yszq5gRVTQbgzGDXGj5tAWUChLGDiYgf",
  "key16": "CZXveR32LdZL2FAxWbMBHT2o3EWksMkFtTyodrshWrRLwR1Tj8x3iYxbrBnjJQsD3QSu4hFxGC1ES6PpAqeXVnj",
  "key17": "4Ex51fqfE18N44r1K2YMoKBtyWAzSr6z9SdUY4eCrDLLuvm5qk9GyhZ2vQPXBwpxofT4wdWVHU9VuuxRk4BnQjYS",
  "key18": "52MPTyabP4ALhENCGiiWMsUR2Kro5NKUzU94i4MEKrWiWTDoKQDLVpuiN3L1Dxhn2PuXkPfbfSVSzMrFcjvUvZsq",
  "key19": "2fH1QJjNiHHjmUTpEzJaC4WSkKn4dRJvwPuqdMym76T8AnTUwD9oCWbU5Pfk5jrhuqatuZDTKbb5yQadYiqWp8LN",
  "key20": "4HQDMCVo24ZhKko6m4x5TVjDj9K5Sn9D5hy752CaUGRGYKLFTZsUwPyxrFVcYQcMjrTRYfHv64LVSWiC1FxrsuJg",
  "key21": "5mRbq17RdNCvyVfG3edYqE2bXQdCwij8hMtspv9MqSsrMGn9JhMRcYATUND2ftaKvMr9mtPWGd7EoBzUTrB3yJAh",
  "key22": "SvED1N775xrgxy3MK4rE2YNpZz3oCLkGqZkPQNUB3hLZ42zTiFQn8yJ6WkESre46tj2EfF9ba9jrEbv9V9U5wAt",
  "key23": "vS1WZQZzNNUJTgff6PVwmbmC8qyc5jdJBiXX7yEvZGFjo8ceJyoyv7QNCJHQT6ddXxbqAhBwYvQrBZWC2taEqCR",
  "key24": "4huwrxu9LjZvPBeF2egWqnDXUKfaduFqFWXk9uM1mYigCGrevNot1grjGp9zAvZRqFTdYnV79YhZCWwKKXTKUi6",
  "key25": "4TT3Be5p4Va36KD5RgecydSuRvnRyQPVWmySR8CdVinTUrxBDGuffGh5GUCRV6gfFhjaSq7PZuUixfBbLxkg8eLo",
  "key26": "SRk9ECtKharLLeoMc5vxxCjapecZBXEGMm7RPTsPpgCZsJhPYj7XaynviE3zkw2RbSuuPehmPUv4skjj7VHcBNV",
  "key27": "3RkLMgkZ1NRqfaqte5FW8nENZjnh55TvaqE4F7PMNjW93hJCcrr2JRWdoMYjguKg1x8CYUD6XftLGV4RAzcFuuQq",
  "key28": "4auMLo2DH1DZyg4tTWxv31DyKRo6dm29sGxjymK4SCzzJ4zaxwRrGa3GJoKu9xP4EmJPL9ZSheLwgb1VmvsPGexG",
  "key29": "6u589fbkBQcaQewRwrcdswDzmzfuiB8qYp2W5Qc9FtzBeZRDJ1Gtg1E4csgTmVpiesayN6hP6qptaFw919kqiN7",
  "key30": "4C6HWKPKnrqwZgrGnX33hxZgr2x3vuyYAayhTxGuHuPdf576YLN3VPcvg46imLTJwrG6i9gTdSmgZRiraDi2hAVE",
  "key31": "58B1RtqJ1aqa5UEEKSWz5VBZQrUZ4jonvgCHR94UZpE4Zgc3JcrQmCFCH2zaNGvntfDTRZftnfbGZoBKt1Yq7r5W",
  "key32": "4zZ6Hy4qtm9vNiJ5P8AdXyBP2oQsBYZbK2NzShzq3nAMr1xYdh3WHMWoHARnaxNMZxFnipExCw2sxHy21B6fQt3m",
  "key33": "4FzmkVhAPLWhKwFG1sbWCjJC1cb2miFc2tTPT9r9eWaJfh4ckEdwoNWBX4SGwzdJETpx3xdtBVv7eEqVLkwKippU",
  "key34": "4oUkkbSKfQzaC4jr7v2EGqA28xqSt4hnQ1HvvfGyL7rugwjJLdz5Usfq41cJMgLcAbeBZ5nYauGDCYzQ7BhcDWkZ",
  "key35": "tPZBbFCVjSCfKn4RDhmkgR1b1EeocN4idiGRCuEvEcdTAENYVe8hXAiWsemGNSWuaVrSMVYHF4GPQ9jQV6fP3tM",
  "key36": "8M7ssGLus9CBFsv7DAytqf6fa3nNpuxxDnSe1zrK1QtuwgWWZPqhsym1RjJkm1qRXZegMrMoSncJc6C59CMyYH1",
  "key37": "5QJRMZ3cqoAbva1VBVsnA6LpyWencdzkLJDSe8nyfSjkEW1jKGwmq9WZR2yR2VMPJkpU5jZN6XZ1KofqnwBpnwoc",
  "key38": "3AFtraUaahfMSP67iKmKykB19Nxp9rcB2PQiJC2dTtd2zCGFVXAf9UA2PErYzwH2SaFC3JPLw9iKe1XG2XerGVJ6",
  "key39": "3RwBizmeGp26ncjS5vWEyJibaqMrSqywgykN75MbniDC1vXEBPMF2gfarHqJfjb9kzstYnaPpdLPL1L16Go7tdBd",
  "key40": "5MXj2YakjWxjRzXn288JHGWDtyS2eHBLDdybfGwnN8bigYbwqvmpKR4X71M9RsER4qtHFvd39wAczLbVhwLyN2Ex",
  "key41": "3bfCVHVewC88KNuWSqRyEf5Xyugt4YWkT8zuh3h1DJZ3Hr2tPnWKMiTa7rpWNrdwCPqsmqjxui9TgDdeX2ayRPHv",
  "key42": "4mYP8ULuRDJ64uT17dpXFmFN5vYNTUXw7gg14y7sFGHY5J3ZUF5H6oucM5GSC1o9GaZPq6JCNXdWS87ggS98sjr4",
  "key43": "5m8kRiPMeTsXtBvqiexHPJaZ7FBKFJTZaVnyFeqzkTeKLhgs6G1JsuGEBYxK1pkA3fYZ6WipCeSNo1MqoQt4kGXM",
  "key44": "5ixtk9N6NYKb6sAJQt3ThA5ERL6ZVFP7RJXkQDExyg2xCV1gs3dvxzUX1VTNxNKypNuWdgWJxSwmALCCW37jYYKe",
  "key45": "d67hCWHb9SUs8M7qEP4t95uuQAMHsYNz4RoNpZ7v9JiYMgCfhd9yaUn7Xn36hViS5QXmKyQF9yi6Na6v2vRqki3",
  "key46": "zEH3pqGt4ixLhoZdUUurjLYvN2sRbNWYPjKKvNYoH24paVy4iwjWrdJx9LTiKt4GEv4tJvjXwV4pRKxMe4R6A9t",
  "key47": "4CNqgFCRpqgwMzKEtFbq7jc5EZy89VE4PxeAS8ojfnC2DEYCaBRHpgTtEdAzf937mNbqmG16UEvcHS2VpQQ7u1wS"
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
