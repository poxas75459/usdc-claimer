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
    "5cEUc7Xpva4ckzVQkG34tw1PkJjf9uwmnqpkqMxLUdvtzjxrmgcuawHRLRUtrbuYzCwUvRjzTnJBidBgkTsrEPib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zm7hzjHSEKfa3t3Bx4VcGtgdqFkCAPmb53TVntWaZD76BsJAGmraVcPZZS7RojoYJybfXELMTLCk58XA9a5tz2",
  "key1": "Zg46ZkXohRQN4bSoubXSzvpnMB5e86KuUkNyGJJtDtK1rVrGVPxdYuE9zFkBNq7UoB1E6vfbyXibirs4mRgDzUc",
  "key2": "3Qf7ZTjcBpzhw8qWCukGju9DCVYUErF5MFnkk9q46gMQCUXchhP1SVikyuwHtD3PdhfX6Z8Xnwt7vbbpEuvBZK6S",
  "key3": "4kopdZgKFcfwHfp5yWuiAGzVuaHqSxRGh6rx7xLd7s34LsznoMwox6yHsuYeWq5b4h4HM14DbEnNFLPQ6U2Goo6r",
  "key4": "4zfLFhENh68oQ3FeB5dQ9itvEcjuQxEEbADCNSiTuXKYrE6Rsa9gxDk9pZkJtmS2dKiFqX1WGk1eueM2skzpuQZH",
  "key5": "5AEGkv1HjbiUe16WbEqGi4DkLvQwdMuUQcE63HVo8861YE2zzAtJ1JvwieqYZa74X1zsDFUuiHBagTKgwYQbPJmE",
  "key6": "5XVReHy8bPyX7KrhmT7ygtpPA5XMvVji5peyNYYuiEJZZnEnRKZGvMsk6q5DqW8KKchneVDABY3n3k2NmE5n2vC9",
  "key7": "5rh2ZZ4DXggznUbrukwCzguCpDF55TX1rQhzMXwGy7yijwjYwoCpAAuuz7rP9FRrdtY7mQEqRhx1CkaNVPqWK8jT",
  "key8": "gb4E8vi9eKDeejaL4zwkM76LzVep6p1UZvFsFM34HYL4cdH8baThcWf8oYhQKDqLCqtm6fTCLwkU8bF5LA5BgQP",
  "key9": "58egiGNFcc9uMdYhhCPVPWv3MWYEA6B4yqaRrD9cii99hRFoJwrNAT67h46514P3Mojqpd2H4t1wi52BcNfWD5AJ",
  "key10": "3nVJfga9fUxxyDWMZsfu6DJ9PjYREVL6i1p9ZkoZpdUZk5KTuSvPx8HXDJYA8vAVxKBxgWiL5MvcJLvPrGUo5U2K",
  "key11": "212ur5fpbkPeKJnxcA9yS94Yn8nFRgU13rBPqYUwzdp678G8n52mQ8QUHywCxVoZ7XD52Xkny4oC9KN47Qbjweyp",
  "key12": "5LKyRRtAabkJKkW2jZri4ApoTXYj8rKLHXvRAneVcYYXNGjX92gK7P4r51PdWKRFSuXC8awgLRFGbFE6MzLdPUu9",
  "key13": "2QuQqNSqxXGMmE139jGVzn4HKUCgQjHSzkgkBWar4FZ5wouYyiKpoA2midCVEY9qj7Vt8cRfCqApoBYH52rcdqTg",
  "key14": "4wzUpZ9QHHLaWiXGdgVNxjYNBEhvXFfD2i2YftgA5STsvLKGk9Z7VxRryRhEFXm7AFmCC1undwLgTECFGrgdpxuf",
  "key15": "4w27STNEYcCnbuHL575CW3kAWKr4Ur4qEURyzJAdhWJECWt7viWdH5G4PUZMX6yDPfRGDWwbTxfHkix4NmJeEigy",
  "key16": "2Ft9cb2EaTbKNrHDT63UnTLTxGuDCE2LGtvaFCauZkYXCs8mPvdGJwYEPiaCS5hGG397K6R8Zm3zE5AMe3CuADSB",
  "key17": "2oCVXxA9yeuwT9XDQvPPYrw9pkAC7DZr89VJpvLSPJ5tyNqQt5x672D9jxk7vK7qcM26WwGGpcGZ1nSGufgRFRPJ",
  "key18": "4p6rjptDHWAHDyC2bc8mEiuHMGto61tLh7TUN8Nz3zn1JdynKuNbbbUummKDNrBFvUA4X8N7CPBU7R49KxWpcxTp",
  "key19": "fo9VENsvugo8s2VsaWxXLcrc8TLLx9AMAhvpNWS5bNz69PQgL4y8KaGujbzGDxieRF1DfutnuHJgD48tSphz5YK",
  "key20": "3B2pLYiLUvrLmo98f93yAu6tQHuryYx8wBUVPAjYAVbH2VrqrmU1BQD2fKEQRofJWuphTFggjKMnPPgXwVNAcBx2",
  "key21": "JTcMCSzXP9XfnHEHbgTJoNb6NkDBxAdYWfpPva9HStJC9YVWvgSM7HgCABnLxvVMrKjamLafYvU5P4jUd7M9K2P",
  "key22": "54L9rHhUiwvjYU3p9VTZL1BcJvHD41mZMdd5yy5T4wFActw9oACDybzzPAEqPdhgx4H3w2HetGF4HqUM2HEgWYyu",
  "key23": "2FTqMN1jhV9ZVwHhzLxE2ZP6N67bQ82VYJhdtraNrFM95qHzR3UokdWK7KAaRQt3cENFUtvd25RBnQCbJ9gGFUdR",
  "key24": "3VBTL9GrnKn37U1tKAhmMB3fSY8Ku53pufQLaFhxZ8M4uwasMhigTkUBEiH8jvULDxqtsseytkYCrxLzoQJo1KTZ",
  "key25": "2W9a7qhcp8shmYuQd6QVeY5bcWQrjNUhSL7hhC8wwhJesj2Dn6f4i8oyd7cu4UrJXQ7qnWnV2HDkHsTQUb3LR4GM",
  "key26": "sB743zrq2M16uuJAD3UeuoeY2oqwfqp6Sp4TYHiPVnxFjTP6t1jrZRasV3rcr8xmmgW1MVaWRjk7B6cCgjXnkcZ",
  "key27": "2UFq6HRZQLnXWJcbtXf71io6QiWVaTeSjsbcsm9ixK9ceVsL4dGAC628TqfFHBYHuc3YombyUXMETLq17Dfi4g1b",
  "key28": "PVDwjXDrK5fqq3rz6efu5yNUxCmYazYqPK1MRUCFc6TjHXdjhbct3bucDThNhRupfM5M3Q7jFKn4WdaMgZaXceR",
  "key29": "4S5oaRBskxLkQV155thpr9VtXkC6XKPUPwV7V5KXP7GFnzVsosW1fPRfjrEqQxGPr89gNXWyiYETsfnpQyL5qzzZ",
  "key30": "N99c4bP15ue7QTgehmbGph2Pm3QZ6bWFpqJiNs4qppjbdq5eCsptnNgQpYnqQtTAD45ars8SPDFAeubSkjd3xGo",
  "key31": "5YYjd3zEybwMtwVWsM1YQgnJReqD2o18Q1dDd5eHtSiBvXZZ7TvwBYf2xEc2ziyLHfa3SCmut6UHkY1vq4VdSEL4",
  "key32": "4K6MrtmfaAmZhoXBK2mjvUyLtA4n9GtEfA4U5LomZF4YKiwUjvGUvgNGUDPtbwXVKKs1oaAX9E9ez2S17K1vioAd",
  "key33": "ycsvEAB5HP7GG64dpBmcBo8nGArfzNRJ11ZVnTv1e68sSGBMxxvyWCnK7vqDfJ34BttfAU7fJUrSAvKrnSC3qDd",
  "key34": "3TQKzEKKhEpo9an3UJzgsqBC6MnR27pg92RjD9C6fmzv9peb7RZNmagnsmpG3Wb6C1UwkQiyZDsJW7Jb41TQnt97",
  "key35": "g18MNke4zadE6P6M5ixUDZpXTHbMn75pQgiW8HE7UgkXk2VMaEyMjYpCffrNN2dtNUsjmRTdE1iyZhTVw6RUehJ",
  "key36": "4evuECKZZho1ZwWtgUDQgaph349g9ERCXEtYhcHJSKzE3CxSb74x5hiNsr7g3EP1sdfD97tX6YBD7Rogm1Nwnubw",
  "key37": "23fw7fuJ1cCkrMgBoCzrJ3pwC7wSqnqdZ6pJMnpEN9b7tWW3dS3SVPUe1sptBmsnasUGQK61T9YwxhQHbXgMKSLg",
  "key38": "5MSvY5idCH8s4ZmRkRy7juwkexQKqhzZity1NoamMbu4dG94ZWPV6JbUEi76Pbkp552HcVbjZvHK55Gn1CEsZ3S6",
  "key39": "3FQoRvgvdeN34wbddAYvbjot35Tkc2PYNdaG8daWGcfV2DVjPPm8ef5W7QrFkRN4EuRszkZsjf4rFSQcb3RjAxxk"
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
