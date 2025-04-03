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
    "4ZS5VcLaRQhHRzjVFA2UfGiY5HhbCKPQgAzrM6jEFCVNtfcxCRkYqjkKbXjQNZvtWMhuLgafcC815gYQJKCwfgz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5GrYiN9QP8ueZUkEir55RrxFJHKV4rW5szT5LWT2Av58PshVuVNQhXit7MNxoU3roh6P4JkLJJ6KWXTpVdnrUb",
  "key1": "2FjQVnNnpU1tD2bebK6qsL6ha973VEcb4PmyhWMh6AjUN38JcTjUTAQLW3397Wgu5P1J1bPNa1BY9nkjvRRMq97S",
  "key2": "4UKDJiHfqS2FNn9hihVm6SMTC2iM89tNzpznD2WdonmPz6xr8CoXR3RZ58BGKxY7VqUvf2MHAbZD1UqPQwiZyjSZ",
  "key3": "ucYJ7TKvpMhikQC4TTQMYgSfUnN8rLX4XxaK5Ni4XXzUvxWZS5JF2jDEXa843LhATJBfBr7McaNJWmmQLbtofqv",
  "key4": "22ALoTmGipEc2g1zmCqmYcrsPEwrddPZpFW4YEMYT5HUbdSQoRFnx8B8ZXaJ4bE6d2u8ZMgiWfzwxeRUDGsGJ1kd",
  "key5": "61oY6zLzJHFDfsU4gJWtvtg891nt9b4a49hC5NsNTjyL4x5PQzAhLQGQ6fZ1VLsKoAXxW894RpKpUUuxcz3GENg9",
  "key6": "3pdLjWLThygZhbgqBJQA462CbDTJZj6pJyXtm4c6ma8M88jTL68wQXyNvhCS1HzS7kvP7oayeiYCsDUfrkNWmxzE",
  "key7": "uVu8DuKsYSLGRuStgaaFiTtfRqMAVoNY6nSCxwtEU1YLpUrd4iC69xUiiSieRHfzsG92CwSA3pxq3wqEVDoYahM",
  "key8": "3QuWkARPyBjS8CxQLcS4QhvJoAxZSTnPo3vioiofyRzghwrRxtRbvCNV7PsASMTRM42kF2tfgBhuNizRmwo9QVSf",
  "key9": "Fn5ivX97zgLbdM3cwY1JtwaFXmax6v4MZuvsmwYiHt4oDeC5aoJfppmWayuZpymPyh4acZzQr6y7Zfhm7jv6BwJ",
  "key10": "5rJMG9VNnuRc233FiDtZCPvKk5QUPiyvir5FoVbdJa7buJAt6fcSLojSSZA5JdYidQsbLnzp6YwTohnG19ZwwZBh",
  "key11": "2gCE67WfAod9ax9g17M6RKK8J7RGsujGQhbWsb8ub1t59rAbsKxi6teAbAkG86HxSwBtfFUR5WDUp55BPbPwrEC4",
  "key12": "2GAtd4HkQic7CfRiL7PrWAh9FzEFmvtEstaafamLwMJGX71ZbNMLhLvm5aoYH5JU7ncWLHkRYurqRbJgvv8fh81s",
  "key13": "YhaXeKeRC9jbJxTuKwxhgRv3D4qGF4L5KeiswBJmHzx3jDJg1K6kek4MHebKjEkbkKUXWLWzSKNwBiqqgiKTmw9",
  "key14": "2fjAHSSvQmpWSKVpkFAwvtNoBJHp6SV3BSJWewNUHPzUeLxgYc1fgtivmLep7dwqWJS9Q6eqx4s2y6VqoiBWdFA8",
  "key15": "2jNKWzh3ftov5rYHk4KE2XSca2wgGqmBr4jPiyQErFcRGGfpGUTbVotdhDRMEXBcP59qWMSLG6AHoa3vS4XKtTAD",
  "key16": "4R2D7CkmnCqkFX962SWhS59MhPtD7NZgJgSFHyr7FBJDe29fqnadeqrdJFQQpiZRb6CavXZRVhcWaZVrrhuEQbYx",
  "key17": "NH6fEExQnxXCLfA8eYjXZn7PAgb3vC9Z3Cqky6NJm3P6pmmuMtMBSSrz7nh9hBnNXm3EUTH7QTQCUPChD3o6R3S",
  "key18": "4E82c4ARo9FMztMpqAXEzn2Jj1ELDUsej8W2wCn41MUwvApSxXYznNeHgiHFdUufs6jmXz4Z3NjEpkbi1tnTnhpq",
  "key19": "3mtzHEgTQBb2u54chhHmtN7rokaD3nttUpNnGntSq5M4g486JyoXvDoiUrrYpj6vBJfMfQ52u6bEaZXfoKntCFRW",
  "key20": "3QWL5nhuoysfGcRActGigwRAzombJE5BipxdQN25GfNXc82hRF61SUGehY9ayYXMwzVsAY1UiJGFDrsQwhRZuUFG",
  "key21": "3nVsKdWwugYQt3h3HMeBiEvDBR1WtwHWiNRM6tZhYgBtb5tEVoJUg1JLNHu2HRMLrPgWqSLiAYMF5qmLLFftoKJF",
  "key22": "3mFopXbCaK87rLTjhexV23ThtJjrpUe9xtH7eowovDiXJ51zW2pzHUfnqo4SPUGfcyKJsahiFmQVf6u2sucQMNxB",
  "key23": "cNcmz6PKwA9obYN8LycAEr7oS3oek5MjC5172z3wZc1Q7UCLpV6W1fyzngDTBF7hwa5HpjLV4XBJdAoSfAvrB1K",
  "key24": "23krkHpj1TkbCzKoaLFgWRA1L1LJJBUUE8WdYztLgPSihWFmtc5Jm5hue7M2cDdnvtNAz7YXmguRRySm7kqZUwih",
  "key25": "5bBpYFf2QjwPBqvdQmGDPsdZXdjNUqpgi2kmmuWvbPpmDLHNEMDsVoar1YA762uozvJLzuA2EYBCE3Hr53AinZKJ"
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
