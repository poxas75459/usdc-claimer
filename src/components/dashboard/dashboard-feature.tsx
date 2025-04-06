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
    "2YQYop4Yo9HyZ4DwcHmc88j8hfvhMrCDoiYayoXAVnTBxp43X75V1gehiWBbGzQ5a8hhHofXckfoorG1XPBA5Sx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJdP5zgCZRyCZRvzUMxcVUQ7F7cDawJTw23PCkSGnYafMmcQm95soCSGrgSY3SY5EzS2p3h7M8JvEKfdbMfJLsd",
  "key1": "4z2hGmUkaP35E2Tj1A9AM5EpPuU2J3VRZ1TgpVvnjzpSEXxN8DYFFm2CMunydLemHJQMm7Zh6sSpLLDrzdzQaYJj",
  "key2": "4H16Qx4FGLCgsLejcw3ftGuoBqSVEaAvSK8h8HWG8btqSmc8bkGp2xJA3s1vCRJm6Yd3jvmCKAbvXUqC3BsikNEu",
  "key3": "3KbpJTFyzt5eVrRzBgNZXtiEsCgxFDGUbicNHkN5UypE7UeiY8e7hWoyL8X48vj4WhG8qiZmnGvw476w5GCrMe13",
  "key4": "4z7mviX3dYRnTgY8xeLJeTTLabuyGmEUtyuYX6RvivG4BsBmcYBEzKNPi3ARkyYPHndKEwg8WmbW51QFdW8yiWTx",
  "key5": "3GAavWrxAy9xXwTAQtgkdFt4jDXHH77Rp9AC6qPtpdcKvWn7vFg7eZoXRPYTT6DvPsRSMJ4G6Mz9KxgxnzcbqJ3h",
  "key6": "2MGifRUyZWMrCFLrABb8qp2zhPvQpo8TSY2s86ibd8mL5NpH1XyZvmoJyMEbDqFA5UBHB8VyGJ6vFJJANcGp4pGv",
  "key7": "3iF2fDqzcE5YtDoxEXH2XwPpLF8R2ta9jAb4DXidjLLieoVswEWkxtvQkhZbzzE4uDp5HQk5AsjFDRYFWzTNiqXn",
  "key8": "dC4SdKDr4n9yUpQqJHApJv1ecWmpQGdVn4QwJx9bw4SDaAGvaWdzsprDe4EUSKGzMhuqnFAVpwdU4NUq4jAXFMZ",
  "key9": "535sAmnSEXqSPMySioFa37bFVhdCj8LNwhnuu3u42D52fcZqXzHHhs8Jz6hZg29cYhQ7vhcjoiA7Nvr4carP7stM",
  "key10": "22brz7i6pK4mWSmFhpzFn86RDRhVha6MUbgEVASop9GCPnJKbqcEo2R8qHsvcgPWVVciFsny3RLjydiAYZfptVLk",
  "key11": "2qA95ar2nzSjEkoKPoSHQ6WWPZBZbW5TA14xpbj5iJXdrrE971sABCGyMGkqKrefohAs6Fq8cQVKNBbfCyCtdrpP",
  "key12": "27Lgq9GpJgf3zxWgB42tGamgByeaLnuWEttPNosmNuTTKEULLbBBxFVY5uMjmLDztHBk4kAvJnMkqfPTWByrmxnj",
  "key13": "3zfNPhnJECQgBqwnq3BuQ6W4EQFoC2SN6VVSNo8uvJnNhsoQqJD7R2fu6WCyGhw9dSmSTQjB4dyfZAXk1PLiUMiu",
  "key14": "52ZcHxAQSWKV1Bzajwv6CX9acdFUW3dFZN1gBZjDPteQ2DrrcJEW1v57avw6TE5PPjD8M7bxdTnbVpVuuR8YumcJ",
  "key15": "eqW37CGnKT6u7sWnE75uTun89XVLyQ6iy5pD6PPmGDfpGPYWt2PhJGrc5rSHnCDAWpUtucDRZqS7wi8AEjMh3tt",
  "key16": "kMabMMP8XysQbckzZ6LNRrr41FAjNmLHbBZwjdjjHmYKfSAnWHdsufg2cBMfpEuyPGpFnjidHdjo9dgReDsPECa",
  "key17": "3wVjdrsUEm41jz6V8YqvkJ89WLWuspUL8FBowYP24oHWCtPDcQemJjyJ3v3GWFcnKvtbicAEXGW2uGWDjyt27ERU",
  "key18": "5kLwssacDJ55cpFoLHB1YZyuCvUETymw1NxJsaB7GS6kdeW9UP9HCaRZks2rhZZfnLMvUsnEcq1R3A7DVouosLYa",
  "key19": "i3Hi7fxMJTZfYDURpZRSuhHBxhcDsq1vmvLScBxj5GhkudxoUSgRMxTwesBkkb16hVsxAXxqoL7LKy2VaDcX9qs",
  "key20": "58V58Z8Fgo9UnmtZRFq4krB5hs3BGRpwrXJXqtqGRNYZ2uw4ThEggyZH1iuBNs9nQMS8F1gB6UY1KSdeRdrSbCbh",
  "key21": "3YH3xaChvJiJ58PXF54k5fXfrEy2RyKmAWtmaTTDjYP8sKbmkREWvB5zPvqJqaQGrcgQ1YhmedaX2svykmMwQtd8",
  "key22": "5LRMTKHfEyCpCDeK7QqQZ5QYurZfFD71uUhTCLma44rzzL2fBiMmWowydKxEWMP56drGQCsLoEa8sNjBfRmCjw7r",
  "key23": "47aASf4stjrj7J6qqxEzgqXeoQoC8gmdGy3zbWywuZVwC6AsRxNJX6e4Rd1PzVgLxAjycHewhK4pF8wVpQngZdE1",
  "key24": "3cbTuqLojXpbMFzZHPrHeGrsa97sgMY4Nvu8emTEbFyauKNH8AYtwgQPVEeLBDM4oNEuCk6aY5ADJdE9HK7hJomJ",
  "key25": "26QPWtcxMUZyx9wNTivgQuQ1jJYiWhLs42e9rfZxhCxvaVk4UbcpzgQvMaxgZbauVPjsBz7zXoSBi6VHXJFVdjpr",
  "key26": "55cLmV5zFqB3KwKRHMhhnfJmyYke4V3U2ekDsN2dRvn8tzw1xkWMBGWVWk5j8EJERsrhLdxvnY5DBZBvrDfNHFDf",
  "key27": "32bQWYVoDNgLKFN4EwXXojq9Fq4vQtPDmZEJE3P3K5sggg9aUHKWHPM9aweBcpFfpXTp8ccpQNH2N8xtcRE8CAvU",
  "key28": "3QSHhZNJHq8Pn5pf4YMJq4LbGwFZ4NXr8tDz7yfybTpTusYzyknTtEFsEMgff9g5v2BpU9Ush8R2b8r3NVE7v8qJ",
  "key29": "5YG2CMNYdGF7WHroeNmoUhNAwY15XjdHSbGq9N8ytmUoS6E3tP8rC7ughsxvrszWtVHU2SrNT9Fvhyv6M6CT2Jnc"
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
