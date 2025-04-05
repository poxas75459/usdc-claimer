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
    "55xZWKNMrd221xcPEVCbdgjCx62orPTYsVrYBLDsaP4Lhdr6b2k3AeDFDST1WMDEgTWVe426wxktrcRgpzzCHupQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGGujAyKp6Kj7BcFBnjnrqgGBRPUoTMbuu6MbCkcdqzR6NAcv7o4Z8KFSUE9Megg8VngHXFbfukFXFHD4zyT2Wf",
  "key1": "29dpbFKFvttAzaVxFivcZAmrBuNGmuAGJtSzcYuNBH2bac4GoYicdqfzAzdHQxYnocqYuDHjwADeFjkZqTzEa6ix",
  "key2": "QT98izrcdeXw5iMbeKgpd81ax4XTZMTqhGmrixZUpdhgm1sN3jrQ3YhJJVt9NAwKdfPxrvJ5AFBr5R8ziUfospn",
  "key3": "2E2mGH8rU7ywdLkkpsDaLVLLzLYFjkqC4Q9qgAVSEBPuQHPbyJgPvBE27x2bJ313yxqSES7KZmQm61AQ2LyWjNsJ",
  "key4": "27y1trKWAXEUQMu14b1TMMXfQR3oABtMTSQF4KSr8KSj2EHXxj6uVySNhEGL2hZ92pKCmEcA4GWLusH4yQiaSxKL",
  "key5": "cxp53sd8WS4gXP17v81mtNyn7wfZQ4BUzBKQCirz4GNskdTH3wAnwyDomhwfLL9AuJDCiMfR5svoLRQfaNuiEcb",
  "key6": "5iAXxxSHz2SMzoEAgwFLWT5S88W8F4XpznJ4axJDbCNoRYffBkYkxFweN5eFEUkPQ27LJfh6FajTk7CDj5QoQjwS",
  "key7": "5DNEJvSaUjHWyyKV8z4ENBhSRvXGWXPUHVKTS99DXPRXq8ch48F9C9Rk6MLBCbCKxFCoBLy98AACuSX34PdFXvGT",
  "key8": "cyYpSavM8hUnJXDCVx4HUZUMjVbuCvTkeJeM7vqsP2QxkCLr4SbB3ACw5P1ht31ZNEwajVDENJfLn1hgYHdY8e8",
  "key9": "3RPoRmQsZmNUUUUpkMspUcgvi64MZRQuFF4xhN6rnTuM15iyi3b3DcE3e8sA3ZbQLcJyjMnCh1jb9i3dKDP8eujp",
  "key10": "3fffCsKsCwGHfP4QsVgEBAUCKghsa5uogCsLjcoTUr8GWMK8xhTmY97dGDRBEXAK3rTttWvHhKivUxMMDS1qXrBX",
  "key11": "2ChVcX79U3yLomp2ATur7XZP9miujMAYn9fKZp84vW5ABhjxet8JVQQSnccsttJzLxy6LPDkb2UKG53GjBrVyGsN",
  "key12": "2asY5Q6Gej56A6JSrKxb9zPMvZ2D7qfTmq6DrXjQ61ccwp4hBQZYdBdw7jnmohmxXaaqoM7DAViiehW4ht8yUuQ4",
  "key13": "41Bkk3oGio5HXtJhxEyiwh4KGP9kcrVtgGyuHktfG2J8J7KcNrMwGNtsRC56QN2qc7xGRWuQmh5DhAJ36ujtouN7",
  "key14": "YBJWZXmcpEQk91U7FVtYbXRfVgWe3CYzCLZvYaEVmCCnAGFdNuRbT71GqNyPaGYVk7RzPAW9qLsqiTqs6eycA1h",
  "key15": "5B3NevbxxbZAxYCBoYYcPgibxyKe9wtiG8sNs1zNwc6hb6F6Q2yHG6htV7nqqCrbjRBU2Lz4i1rcBA7hEwYaakeC",
  "key16": "5V2J6PMSJmFjHTmZjKKj37vM9b5WaLEKKP1nnk9GYNHLkgDRW6DFuhFJrqVpjRTbTxDuU4Zzj6ZcSBUsKuyekvTQ",
  "key17": "3unV4tpg4ZKfozLj8TcUwkoqaj26S5Ho3dwCeBGFN3rjLbaUPNMmUmS6J5BJbBBnVnfecHajgU4pWmHy5Tz1UsrF",
  "key18": "2Zj5DsJS1e8cGWMMFMC6hyZ6tLN7sJXXBCk2915iYtiJ9BUQe22FBRM3D4He15WcWuohVUo9h4v84FYA4pFfjGxQ",
  "key19": "4yVLCEVfEvm7UAffp6WTUtgvMQHF9QmJgp4RxrfBoQfW3c7zd1b5Q1NbLsRuoet9TPpEbeWKTSgkHyFZvpi2vhBB",
  "key20": "2i2Tgz3BfwBNvabtQT2p1ZF7fU8iU8Zwfw27eBthhq89vcG6bvH3GjRCY5YqP3uXoyutUXTC4btaSbw7CdPmtPiT",
  "key21": "2gDY9qMkH6kTivBapfwzSSaGJbebgAAne8KxYA9JabU2dTgEHkHWEBRKnm2YdofSCBkAkgsLocQa2ewrD4ioxeFQ",
  "key22": "25hXMv6oMsgw9YpLwQHUuEoDvjk9ywPEt1tqr8zMAdkVYQPguQYg3BGjwXprNsaSZ65VsTgdS5LrPEWLLU6mbNkk",
  "key23": "5j1NoBi9YEqfPsiNMs6e6b4UvimahgKb1aSVtVQvS9J23VuqAtaAHDRA9a59YTd84e9rcbWeygwoaMgAhDbPtKw",
  "key24": "4orSUDsFprj2rPBqvtvyCMRW7ChS2xiGHZnGQCiiwiVVxsgzcJ7QJQLi1ZCEoaUAKMsqT8Pbwt18hft2QVA1nHPs",
  "key25": "5ytvwkkKsuoFRTCghfF68mP6fTnVXsqykYBaSYdcztQpKzH4iVDYJHfgRYQx5H4uZtLkE6LbL5RiCpmCngvXDcAm",
  "key26": "pJB3oB17F5uoKJMM8ef48ys1namZAevCo4a9CNtHcQRAATwURzis6Qjmm9CZR9DzbjrUQNwGthmTii7J5GWrfDz",
  "key27": "2EStdgFTuRt6Fzy6AnNeBNvzX3oubr1DHymxK79Vt1hvHwX4UHAe1eTd7uWCHzwP3Ju19Nc2mmRDqo6WbDHfVvH1"
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
