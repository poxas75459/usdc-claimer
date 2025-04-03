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
    "3U9vNuXJX8e11BQiteHBtNqHPMAFCaD9qCZmtiDKuJWEuA67A9sD5C8AcJTtzuCFzccQ12u4EWZb7ZkktGobB1yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4woYzYrtnJXUqM6CT8GatBcz4UxLc7mTkFdYHXoxvDGFQeDgJpFhbJh6umXMQFoUVAHSRLo4hfhouK9CgYH6tqL",
  "key1": "4uyXTgV5x2gJKGEPnZc4GTk9j1EXhoTrr2rWeHHYRocHeLQSLhsUrQVUJ2JHPMUcaPeHzi3RUCLoWQcM6jWJ15n8",
  "key2": "338Kz6UnVQn5uVM6WosbB17szuiZQ6U18ZPiwDxRH7MzREzSGsWMUVQfhgDgK4gRFRyGBTMySgn4s5Ak1M2r5ARF",
  "key3": "4fNP1vnaPfo8ppMxq2WnH4eTce8DLrAVPwJJJkwfmxjQ1fEo7PJVwPwCaVZjGoGiHKpcTYZEwmsp9Jwi6bYAhC9B",
  "key4": "kYNMLHvYzBLfSPcXKvpLYHCYZHJQjxFduKzHa3cJmxXNARKt8E2YtaRKyRZHooLvXTPXh1vqG6HcUUdC8hkFUs5",
  "key5": "V9WJYenEQi9FHZcWYF7A2H7NzbNBVFAA5cer9pR3brCKEJoN5YfaLWXgmx774A7dS3nBbR2teuZHXEo6nub5L3R",
  "key6": "24K4DWTictiFqtfkUpUrAyAuUn6qoH6XRW9HsfF7qnvPF79oPXRqpUAK3gnr533T7Y8m3kYJAWHAhbMuUK2irAjM",
  "key7": "5qy8ese6MPkJQMCNgAS5fQxAvjw34sDQvquni1y5929udZrxkmjBkqryvFfYRXy7oPmwb3EVASn4p1P8fExQcWhn",
  "key8": "Z6EwPPrfzvMi1A85HMW6AULprAdBCnyDLhA5KV1abG2b2osbrUh75X423NbaoqoHcVmcZCVgh6sqFu7zipmLom6",
  "key9": "4aefVdtGc1DjHGCdvFrQZNhXpsSDV6GhSeg463d4wcsYMv2tJQ16PCARx7Md1VZTPKxaSiko5d61vb4wsJfAoHhn",
  "key10": "cLbAsLNm9ETv9h6Mmudu43F3xZ9KTNpJqFJJSEsDhZWZaJ11onJ53PSjoc6zfvYiYvLZ1ogLVaXXH2SnbBZbC55",
  "key11": "BAyXonM86m8cqYLXgnaQqvT9w7twAuxn8xCkpbm1J58CS1GEKLPWYNVrK2QPNy8T4VURss4LgRVGgaDswidxE47",
  "key12": "7QinskzokUv7bLaX968RYyZUXRzBKh9XuYx7i7PdBEM9W1Uk2hcY52FCMuuLBpjkzeytcUs7Hn1FgjNk5Kx6Uhc",
  "key13": "5CRoFPZmts7AYYVHxyqbHhCDp8vBYhrLebJfnU3cqMVRAGN8gMvBc8xT7RYnwfp9pcZiBasytrpVPxGzMKuJ8k6i",
  "key14": "34Vy9mq9b1hGWYPFMYuujG2CYMx8LBfuZSc7XPrKeyap4Wt5zuSW26F5AutfGkBSDB2f7yoT536LSQwUvxeKUhGy",
  "key15": "EPZpWsQB8CNVG4P3pxggZf7DFQENeA8U5vRK61Wx5GnGyqVEctuoiFzEpTDe42NqgA7vXQPyS4PVPX9cRufhoHa",
  "key16": "5YZjEvsNC8d5Cp5prd4XBp3MMpzzJNg7RRx57K6X9YLUyHvpUs9V6govTUCjBsGZFFzoGxovfe6qCve52L4nhoms",
  "key17": "hecev3RmYtMuVVz1Ey5Lv7etyis1g8mefCPV18LBbmQW4NZK1nbxV3xkxE2peQYzox8Fk5DVZdKYHkbkjb4vg9v",
  "key18": "5f3C3E2dFStoWEt4D3AwUrP85u5tKPPADqvwX42BQfNbr2RiDrXTGvNKnsDEDWwygcUKB5GKJ3JxjKiAyGUuBjWp",
  "key19": "43ZXTmYV7t6Jz5UJC81uoftK3puSRUbMFrs52R21iKSDLipapJi2VUUxE7NkZD2cLZfxcmog1KpK4vmDPwr2eu1W",
  "key20": "9FytRnZfjmSsgGpiekaF9vjVWsAtNMx7HxDw2nYJ8DGcT298U7iuTPFpSrGWoHFqikSA75qroNqLvt7rtFe3wFv",
  "key21": "3EPdCs9kZXcwSovfqLVZsH9N6kJnpX14CVdRwgcoW36C7MHyQDRinCEgykc6aqGiugDWv4pcej99jrTGh86pJ6QD",
  "key22": "awQaqhckxordnb59bNbQUqchYnqC3cA7hT1vKeHiqkrRVpHRvgScUYxyi4a1fYkFRZJuZe44U8Zz9XpkYmAXwMM",
  "key23": "4HLtZDMPDNFeMv9jfGahqgeEeVoHLKpAC8NGpb1FXbH6M3d7s5hhenQ6teSX84gQ8A5pt96SQBiaXzzf19wQ81UF",
  "key24": "3ByuhxvB6bu3ffxjuXMVn7VDzcksvXpCkB3xdrkTtsofTaQJrVPSe27rSJcJWqNKA44AMEdDcGpR34NWJ8S7a5yd",
  "key25": "4Ld2MUxWEKgzCobjCGUuMpi6WfbSWDAo3rB5Y6QX3GXjDYV31kQ5S7FaQqBn7teaqo1ZpXQXuGpFERaLSywE5ob3"
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
