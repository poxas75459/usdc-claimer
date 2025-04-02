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
    "4bV4ryLjcNRJDJkiV19JqvYJEoRLZZESXsCofnBDUoqjqaS83puDPxutkgC2YvzSiY1MpCmVYxVTVDY2KSaBGuKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6k2DFq8NV6gWJzAMMF1sXvRWD9YyxRYqfarYqyBYNT5hKS6VCoFivaiCJSJF1vVXP3nPVXsnmgNdcsHT8rU3sU",
  "key1": "3xXtyKs1zWG9BSwkDDtv6YLe6FkB85UdwJzwy4BAjrJDtSRXq3a6LYHk9EB9xBzMQksogYkbDuWizwp7X2ff3zAH",
  "key2": "3J3w2syK62q3obG436NfvJm756ZQqBMpKm1FgEH7dza4cwXsWbFWZV2zKJ7SD5NjMpb6EGd61FxnVEVS16cw8Dwn",
  "key3": "5WTPhGQpvYw8b8RZbPpf5VCVLdBJPdREwxPvRkVfxu1kTiCF3pXfaLo1Lui9Uym52HZoZYDerwTp2z1Uy4bkZctX",
  "key4": "3eR9Ed1ffJp6jxkFXJu3hecxZNa2z1keAGZLRAUPACUpSVuv8ot5aEvTbficQHPxRiAga6EaVgQ53JZqpAKVBE5K",
  "key5": "2Dk23rNR1V2XGAQR7gQyRLCzcJDYbYEXiSRL9D7nqPFnppuLkJkjPQ7tujGye2aVoRQwYhYw3s3deptNyss5Le9X",
  "key6": "6NRtAwpeDWfWfQbZy2KuTrdC65KBPUuGqv1xGT52x64qp1v2A2GCH7cdYacRzhXaZDBxDuEAdjw9ApDvpMAxtwx",
  "key7": "5aUWpJgoRARSdr3jJJMeNBLcDih967yVhkFdJd9t1u7SDQVphZQJ8oNTimYsNW8oy8gz7rLcNi3mABP5MiEtckcv",
  "key8": "367MC2eChHNaVTUbmtjuEtcSGqXYrqDjp25n4EK6xqWyyZSfyMcnacUmvEHXuc4Lx5QuArZeGnH38fVQf5tkfGPq",
  "key9": "5PUHKSsvP5phz22be4KdTbg1GswPY2iikx9YEgN6zLfnuRZJR9wqDVyDbgnK5y1aAufrGQpuCSCBwinLQ2C5L1UB",
  "key10": "idjjNFc6f8Dt4UQvHopfQrM1d6doB2qqnwqgdDbAJdwLdhk5F2gM2qgYYoGd7q1GYYxP4feRJ1zZANydtTM5zgk",
  "key11": "4iWXJjr6AcRDs1BxRTdEtvWjnppr8FQYoBuWFGw68gzDqhKCGM4urhAnrYxz2Qh4Nf8cc4YZrPEnbjnCzzwcZTSD",
  "key12": "1nKxquAxrHM2LDW2DGYpdjvWY4QdybGpmQYcZfnxS1yPbWXpnki6AbpWJLiYipm2mWX3DFbmr753ht9L4cFWp9x",
  "key13": "2pBbatu24Un81sP2mRUJyn4GiEP4C7BA57x44UVibpfhx8f5dXyA7M4gwTbfqn9Fe8zG78Y3QFLK2BthU3ghcRfn",
  "key14": "2ujVC4y3R4pmhYF1GMcx36W4BzHypkUT8Zn6UC3oUGoy21mBw9AVE6NSsGzyUUd8hQJPNGFbRsKXcVYFmrg7n59G",
  "key15": "4z1id8Jhtif4wxdB4oPLjoQ2vvDpBpSjuJ7KApUAbG3U5c8tXGJcKYu4PdYMrU2kxVq3y8jtpQBnjgkihkPZu23b",
  "key16": "5TkJwqiEWZ6Yd1FoazgcMifjeZutKhx9CYiBtFqNdMAu8QR8Keguz24eMj9eLe854xs8F5zpc4yD3VPi39J7xdMN",
  "key17": "2CXbQ12UqTuzGgaui275uv96Ja1wAieRKf5GrB28nJVzAXvUiYT3wHzbeezVs7C6D1svyNnopRagJv9NKgJFZC4T",
  "key18": "34MMrm5pMa149NmuDcR29UFTiZTM8LsdjUEXjAbfv3coAG9fDLBYoqdWG4Dv4pLQ8DZAagRbipfkcoPfT1r9aUKJ",
  "key19": "ML1BFFFGeuEQUsqUjq8C7bgMHnsQA217DHT1H3YDDAKA2qgVxB2DqrmWCcrbX4DZS2zuMD7DgCSx1Fdw7hgG2uQ",
  "key20": "5mBxgjQbHARw6FnHs9vcEbUjRaFZNYAB1naWuydu5Ut7UMLYvKGMT9MYhHjN8vT2hERD9wYTjyWyCSGCr1T97Xdy",
  "key21": "2udrUdRqCGJDQSKe7XUaW7rusvwd13E3RjQez5zPTAPQFeDbw4hgdcz5sojW66AHNa1eNxeiXLxrQP2PaPKaufGo",
  "key22": "4nZHrXwjCtFGVTsNDfXYfS9jeZE1HXyYtTSboX4TLiVPMyry8PapKmizHrJVde1RLxRgXkuuukd9RmeQ9PQ1JQ6a",
  "key23": "33cV9ZhawBFgxZTyaaDS92w8Eds4newQyi8F3TchVSD8Tu9hMM7PWzBSsXpmK24XE8fYWxNgX5Dz9dVDtJSCgZ5C",
  "key24": "48tPBPshVSHoLvqWDGEmm9wXxZRVtHFyS8vUpGomaqT7syrPeHx7J3Uvse1XEQLRLvRxbYh8aL8jbuFzmUwqbk4E",
  "key25": "5LNeqKDJPh1Tnquf3ZGe9AJBfgExSvgnKjTYx3rj9x3S2jc3dLVRXaVC8CdRcGNDsaA7RH1kBK2AXdbS83Ee4YeC",
  "key26": "4Rqusv8Fzqo4d7oXMDphXPuq6ccQGzwqEZQQCG6kUxXHeDTrxise3uP4WcsNzgpjaJZyVxgRyvW1DChjKbRzx9DF",
  "key27": "5MZaqkvXFRU65jPYcqMzgf8xX5A9Qz2WpymCic4w1BdT5HcKi5eyxsmLNBujwcTFqmd4xq6o9rNxQCaWaPywm4c8",
  "key28": "2Ham8DN8Z7285CXZbkUWMLDUBC3Wvd2pHNYVxQKatUZkUGqFYSEHgGYmV5Xc5c5UwxeGELVLU1DToXgRxUN5TLkV",
  "key29": "25zMwFAvQdMGu1wbG5yJpMWAVmFRdXmHqUJ5bzXUfzsqvVtY6PX1dZZtYz5Pn3uFHxpJvajkshXsQ3c6KVVp9unJ",
  "key30": "JHookyMrPFSePKmx85xo3riphadQn2SAUdqww9pPLwywuEYTP645sEo78FuzFpaL2R58Buf83tmffwMUrrMgp7s",
  "key31": "2LbT6nkfq1hMahmSAGw7b8Nv11d6Gk7MByPQ1Hf48kMyw8cmshckQ6i1LfaenMrCxyjPwjLBe3DLGVVes45d19p1",
  "key32": "2S8fGrNhSHRZQYBwb8UH9eXaLbiZyGAcbDLHeZ2ieg1fiDdesi7tbeGEWKS6oppHPWJEuA4CHYJ5x8rGU89mW1L9",
  "key33": "4Bx1W9T3eLUYmnhJRqkWvbWFSdMNhGg4s4ubRCKbpg8WfV8t4gf8ob2jpqtYY2X9s6JNhBUihFbnu7Wq65PSadAP",
  "key34": "4WUDP46uqYWfpzBiKm5DaZAuxyUjDc7FNt118nRCJiwtksSBxaQLV6FUYwbUzv1PKWJ7HjUahv8j5Zh9MBwwQrGt",
  "key35": "3mRsXwcySXSNDpniM5GqfjiZeJdqcEZ3yUBmKfpr7tLU3zRR7gcLUbG4HyyA8vgcUc6qBrkruCj1ae3UBpe4CHRr",
  "key36": "2mSS8L4obHERajUtKfj57GnTF88NHMTcqPNmmCjeM7EVC9UphvQth7tKBZCEbmW8KptEDNEa96Z8v2brGnfDyYR4",
  "key37": "3vpsAJVgUUQW9rCDd9VMzRm769DM9mBVXeCszuMDmGorFGU2nZ4weYGq3Ei8hZi4m7DrcJAtJqF13bP3E8EcCWfZ",
  "key38": "4gSJKYEaieQiFMFXwh3iDtHUcaZeDPS9TkAsL4HBj1D2fDfK21Nfper7EUU4eXd9fVfuk4BQLE4g8sRVyPJNbDxD",
  "key39": "64z9MPNoeP6d67ufWqJWy2iGGesyKqr2CDEv1xZLUqqX3NeW8SVJAHJgV5Mkwi7sBUb4AJwSf788nzS1SS684zp",
  "key40": "3MYmmhGhcbd186jHELdss91JqPbKVwKrCxanDXPBdxM1MzdYYjnKotnULCfDcZ78xbSMAXBL87KX3DU5C414x5ta",
  "key41": "2j1oyGjBPjWwQ17yS71qCn3QwD85BtYac4N9sTE7G9nEwWcak9GszbfJ2jx7KKJeVQnzDt1N3HCNWiYwBdxh6Gzd",
  "key42": "3N8iukkvT4bNgKGK9BeP9MTnYpu9TAyobFZDs4cGfi9tHUGEURvff41A3vLpLYqcsnvjz4JDVLgDwiG5FbDq4RiB"
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
