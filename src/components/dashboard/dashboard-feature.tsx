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
    "2KxeH6VoG8gNMMN3kaCDYPkyZNrxJSySji5z4odR5ovGbx71YBf6YpcGpqwCNGzBiW5nP3W1cqzjf7k6daBFhpKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pE3KuPM226n64rPRPg8pgngFRPookFFveEhPPgaTMNhreDy5pWYKMqb9tejF6syDsJQKZ7YUoYWAZA77uoy85sn",
  "key1": "RM28VMEqjWs4jPhG6ZsBNcc173KFhwALQfxhiDt17BPczWCJQs4kJ7crPCtZHaaj4AyjN6aPYXaaXNQVzRWV2o8",
  "key2": "35Vb9P9k1q3G9MXSxfXQ952DKibttsFNUa7sWJm9E1Smzpu5M3nd1qaQKG2WycryCAQQLUACEdSK8ptKKZjStUzD",
  "key3": "45AdFX9jzbzZdjk9Jvin8J9YbwSWWRC4LcqMbToffaQhrTRkihem2TL98y8K9RRWRNVq2Ufk83twRYJVmerxHvoK",
  "key4": "2KrnrYmTHuYKNVgkuhKNQxUnJLZhmn3yzVbiwPkGZ2UXANNvqVqfQvXeVWqi5TZpCaKpNmaZ7Q25uo81YbkxGw3U",
  "key5": "3piNGKkm7kpxUrmVv1Q1bmDZZrBvWSB9enNivh2psydvLw85N3WRvNiRV6VSyfCXqNsgtXdsFFWuVKGhrN6TeUxb",
  "key6": "3PnJqZ2snuBeTjSmtnPYzSR8GQabVTfXFByD53k5vrAg9bVTrh22arqdxukDkp895wD5xgf8kbomsrgYFJChSZCA",
  "key7": "4UvAWmU6vqkKMgRaXGa6wK16TwXqLKgwQQccdQVmesWUQ5muVEoDW6ktzkztsUh3mZsWgdX6r1Ub485XCr8SVdg4",
  "key8": "2t1dmHojNb4K1DcC29uEaG5dMHHq9VL7hUAF52YC2hig8CcLWMqg72oq1XZNyMD2EQR4saXbBpdskmjVqKUGZsxU",
  "key9": "3EnAsnEUkpe5kph8xD3MSff3NfHVa2muoLpdBEeejT7MaHe5jDejA2eepjgkf91FBdoPDF2uipUe4j2oB8gxqHWr",
  "key10": "tbB4RMDjRry7DvD3bQZARiXLPnVUjx5iUpAjfnBybxMVEEzcPaiTrKmdUhRBzBaxdQj9hTDycUK3m8wuavYRqD5",
  "key11": "5jLPLjY6Uy35CbDSV67pJyBzBuAYNzzKVc1SxSSZxwj3Rfycc5VU95TFzany3WHhciH4pMyjxNm9y9UDB4ssUHy6",
  "key12": "2R6LkqUhoReYwkQmQFv6vU35C9oMgkrqaLt5qAfe1i6gBJK3hJiFYKqPuzjDXcfm4wgCCEDqmSL18cWiyjR5edsv",
  "key13": "8LV5FdQKziPzAN7WUJMYQzpAFWBnVBZKrzA5i4t1otCU5mjcQ8RDwCBsEXEWC4wgAofKZJh2Y6YJhaYdqypwmmK",
  "key14": "5Ltz9R3SHAAjEP8JgndUfVLNDzon81kjcaTCMdMgbA7bLTZ8zv1t6SdX1KrgJwLYibhTJbfKuHMyvNXHbPV3nSSF",
  "key15": "3uV1x9BbdoVYbQ151UyQQZbyHQ2ao618xsacoh4UBVpexazgXfShAJqDg9siqfGKxH8LHzXxh2T1T3rzoHcJ8S1S",
  "key16": "3NHYdBSvjqyLXaD2CPiS45Dm33sn2TRZ9igDHvphPcry8FuN3C9bTiEcYDXStcXBWxxmHxD5mVkMknYgjnrvHWcV",
  "key17": "2N6qyTN7zuZmUJo9dqzEGqEHSmpWDHrJDXUxRGAHEFBikYqaFqBUXsYBsrCQ6Spz62EuQ5jPsHYVLPRJtvcCTGTA",
  "key18": "AiH9CcqqQFspZx9yqDChoSZjPUCoefDpNtsrrHyKj9P2CAwqB7mXNgETFv65pnk8sB68AGUGk9Vw3LatyLi6qmS",
  "key19": "2VvZsGupVNWzoxZhfxAxGcq676iNxLn1EpQ2EmSNxNgHe52scQ7GP5Htfmy3ZX1dwki1XjefcMoJkCsmB89bh4sh",
  "key20": "4KdUzb9Z4FTKY981MqaLb48pTZCDawzDdhpywqS47gXwaqDWarHtupvvMqBbkcmAmidMqX91XpjN6sJMgvnB24h7",
  "key21": "4ZAAa9xG1o2C9JotgFC2Bqc3tbvFMaW7xWgFNggdFNu1FCogHRW9pmuSR1CTHmJJUGMQoBvYtJq6fwK5gffF1Cab",
  "key22": "4PtSBCQjEawA3JozRfBLZkjAWppxDrETcndhkFn76q6ZBCCuWDifPtbV3L1xjwxqCLv1jM6U8E9UVxTJCw86ANmP",
  "key23": "5uzvYXVWhgzGvdhuzJkjPMdo75RxQv4XGXLXHXPVMFhZRcVtm2uQuA8yPgyDiqFc84qvHmAC6y4AePeBzBqQjTdT",
  "key24": "3tTkTXPR4Yx6SZAwbQoV6JhENaja18bgRh273GPZwsxrNoF9MPDjWgNF3zk8XXYU59qvdmnK7UXQZsUPTbGnHAiT",
  "key25": "4HTXgAWRNi1wJPRqj4omZv2eRDGpwy6dd8ca3mgYaDmThdZNwk6jV36qbhE9UaTYb9pFqBCpwq8N34T7T5NDbkN5",
  "key26": "52JZqBRx7Z4J2HNYS1u6fYSD6xcDAcxCNqp2RGgSpzYDzWt1EfwmuSqM2bCZtKqh2B87uzrSa8t3zdtoGrT9BoLL",
  "key27": "KTzvPEG9UkFA4bcNntLA3dmZfsRChhZTbfobXWvPeScoycFPndLr6Gr5oFHZzjGS4wF3dp9DUUk2mo27jAbdv5k",
  "key28": "Sn6k2aiXg1kMQ65pet5Dy27UrFAhPu3oNqppvEykdoEiZZeq4Vh4BeaoBBFm2MATWUrqjpk1UmvPVLj1BoQGEBi",
  "key29": "xbESLDDroj9AxAbYz5Mw4M6rnMaJ7srenJM5zHgzVexMM3ChLusc1CopJ29BysaxzzQjsLbvESJhn6esHcLpNa8",
  "key30": "mVo1E9kCjtLSxQdiwXuS6Rv3ektX772ZCa7BN7jYsXRtZCL6Y4h2QJ2cwvXiz7uvUSxuxFGhaJ8QtM9B3unssRx",
  "key31": "3P3sKVR75TSgXmfsvcHinMMRD5cspXzye9wocALjK6Kp4vpnhBLc4QPmWMUYgYF45W8hyUtqyn1aG2tUg932FRMR",
  "key32": "5nDftMDNmVKXZ96snHpi3ZihhfKpxLidsYYFTNMzvQNfgZ9EE7WHdMdXagXMX9E729bXqt3wXdtws3HyHs12mQ6u",
  "key33": "2v26RXzXi6bC27vsxR8bZrryAJHn3Cn6KgxrcFXLKxCXbivgETx6LYW2xD3gfPTAwf25qjq5u8mVm36WstEGufSd",
  "key34": "5LPNKg8fPewx1g9RW9GjQmnDdVUnkPEjNBRGQJ6SCiAF4vWKwF67JiW8cS2BihWE9yCcaS2SwBVFhKudt68isL2a",
  "key35": "3KfY1LGk68CRVS9SGNqoRNQRWzwv8SdXMXNCzPzbojx9dW3ZVKTBDsikFTDhLBnkRiLVLHHbEUsdyHgg54gEEsXK",
  "key36": "2r153QNsPxQVKuPwmnfrTx4E2fMAY5Gjzhu3xMyF6zTL3UmkgTPCVYBCfaS8FogznMfDc9fCTuaLZyRZhTZVS5wz",
  "key37": "3XTJkk96yqRqFfoj2gJAiSYmtDMLPbhnuN6rVZfR9R4Nufv42aaK4LtCxTWYsF1Z2tVDrCuuVmQZDKVXtk6yiBUC",
  "key38": "5nxGdfDqPsXV1xwapP3ryt49iLm8yEicUE9bERNcegNEL3Cs2iSwgZaMCSr5KsX5k2uBVyAjHGVpjkuFJUiDk4zg",
  "key39": "U1Up3gcBWaFP8HbVkJYREAkfLbeRyHAivzhoMA78tN2g6rqDwTXaB7YVQ94agqZktYgfUs9ae4YAxjToBAh9o6E",
  "key40": "3oCafzGn5mEzHYow4Lr1Yfr1QWssE5666DdkuA9LMGgNBG5nKdPC6tPRuQcW3giB4FCR69iQXtmAqJp2NK2kbKpH",
  "key41": "2xv8woKdZvqFda3CyuHWjVfKe2ZbJgDSZLLBVj8pGeN1XqDpsy7nuzqQGwCg35DPxG7kfE3VaKbgGnF9D6LnkbKm",
  "key42": "4trpjoiLmdtGEi5zEpQgPNGNJ6Moi6B7t8agb9jwxtwMzyPZYLU75BdQmyRASwXmkfdreQ8KZfxsC5UeU8vBPj1A",
  "key43": "Fc39JArAsdm7vWkwUbchyXEaverTgdTkdTaEzV4hbdkMfkpdu6SdycCdSQ4YE6L6HhEsd6fTgJMFZz4L9o1nQ3E",
  "key44": "39dgpacVNpsGunC1cPigFfrprHysrgL2JHiDxjW7Gh7MLpcxV3XiUa5NXgHytnBmBD1WqqbvFZYKm1gzeG1QzGz3",
  "key45": "2bu6LTCH7NCBHHhBRbU8eFLJFwXPJcCt1iSy2osFMoYb2TY3xB1VFLSu55gktajHVAVr7sBzU7sQnhEUVY4dZXgZ",
  "key46": "3dYvwkLKb7zvAweYeh7WcKv6ysvmgTRkPZGQvY88hXbWYNS1ZZgzJNB2EE8fJ1Jq58J8NuZfen9EmsDcboHVxi19"
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
