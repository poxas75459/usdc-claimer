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
    "2F8DBYX9V54hQfCduggiYLBeNVnsRfBcRbRXhYTa6T6qRKWJnkktG26bZjfBrn4YWmD95zMWL2MqkY3XSnyPkENs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZfpJQrTXYyznSXhsrjfsSmod2DjE1PoxfEaAt3Xmne1KnojqJ2KQCWfP5JVebpofYmGi9qNEwMB2VTfqwG36Sx",
  "key1": "DXUcgux1JZqUbxxLGbbKVutNYRebMVTu2QdjTVaB7fZ5ZMR7yvAGEm36ew6cVPRau7oPQ6PQFKsuKjphNM85XCD",
  "key2": "4bYgG3eDum3ShKbTBMnn3B7NdCZyJfTrSnCjzT7yoM2ojZK8sEG981gSJ7ej43RL46YFw3rpjGec6iS2JgmrW7Kf",
  "key3": "5o464h3F7tGCW8wmgsZKB63HmqLQkfzjuemZJ1WwQfquBgqwk33rMwLM7wYryoGHDpbhJfrAEsdU98yPngfGJ1JT",
  "key4": "3QPiCft1K9nMEjLTKVD3F1h1dEJU8x9bfDMgcWCnAqrbS88wWDCkHLTj7X7hJmxwHPohVXFg3PcKfPgsBvA8jQpG",
  "key5": "3nKoVGNeuuSgT1A3e98hSvdMMG1DT5vVNBhq93JB8wQCwopVrH2ggMJq3TwDb99LND2k65L8C4RSNQWUi8RHf1a",
  "key6": "31jZiyZVZGmBvbYoMRKXUjB6FMuEXFDwPR7HDhKTNNBWjqt4jDe4xqo2aULmfagxtMRoiwNvgfzKysbmacb6Grow",
  "key7": "4eQC794FS4EhPmx2BGQx3d1yEKcCLoLf6v7RjYrCf7fxfi7ZJSYCgMx5FN8zLd6XyhpfnS7cs2d3kzBhUWXP8CUf",
  "key8": "5fWi2wem9GSG5bqsZ6cUMRrn1PhuEBVW2YujSt7JY4ZTiGycPu2WbGPoZnmoHozJYPDuZBJiEEbjXdU2AoP2hZ9D",
  "key9": "n3sBTXwU8GrnsRau5p11G25AKWkdAW9cfSSoHQ7kteyxM6XZ8phKXscPGfcA6iuWLzqJBEiwF94LkdAxBYHr6VL",
  "key10": "4ktVVeaEfnocjExMdExJdoPQDRWgPEZ1BeeNZK1xcwrB5ZcvwBXVyjw7yQweLJCutZVmQ9XpXTEYnAnz2jZ2hgsR",
  "key11": "628hSVGLCM5KsfUPGDDZgCv43N2dLpsztNJRbPua97W7DbKszirzo3M8ydAGNa3sVXnctyr6yGD5WYAbSay9VxtU",
  "key12": "2PWo9dHPWB2fbP78fUH1ZChyMDzg73X2FnuAW8zy9WBsSMT8BCedzGQVz9HoEHNWE3ivwWhCPYus5Q6x5wgAK5D1",
  "key13": "UERpuoy7oozhLtvToSJTjdoWWLkVA3Z7g8vPzyGM9ojP1oEhU2Nfhb7ESvkfoGfWSmG3TnFeo5L1EhUNvcATEpM",
  "key14": "Jy95y8C2mZGiB4fpHbbnbQjD8A2r2CCryLyhSScSrtQ3ipfto7BExK3mszVxBEWnikpiNNyCDDa9NiU7F26kZRw",
  "key15": "3xANrYXiKFKJiieCrdkgC28tmb2QYpkWMGmXJ7gJzkimZbfMHkKF8rSz65edQ9eGXvocBkQAVBpgbK3xioamoAr4",
  "key16": "cB573va8qQMqFz9Tr4khS7s4ZB7bUGiLC3Re92sbyvqLvSNVzVUDegHke3b3ceZBgERiYLX7XhdkDHK6MmHpzwZ",
  "key17": "389e5hGb3dBN1QBHBMXBqesDCJ7JEpV41WpHKj678zZwdFzgKiPLdW9ZRMtWR6wY7zgHybJJWRe8GKo3tVme1W5J",
  "key18": "663LXxJhUgkXUGDK7fmfnihahsN3CUHGkLXPdz4sMtEPcPZQi2QDM5Gze8SYkdGiXN7D2SJWvNktSTUq3dPQMsps",
  "key19": "3eJ9QZZkKjnKXFhkDUjccsvJMSQBNAiXfWMoR8Ly2o6wKk2NFkVZRJBYP9u3Bv9keTC9tumcF9zoEhoGKVpwrS8Y",
  "key20": "3RjV5Pvdy7Me3zfqNFs18jtpSkG3LJ6aqyqrzUhv8X5azKq9CTCThAAFk5iVoCTGMnfg4ebgQnJ7fmQVR3o7jj4V",
  "key21": "4xNyCGGWrPT6ydghCFrj43bkmV8QctMGMxLt8y5tX9ve2PtPNhbTpcg4HNjm9HosDxB62jegb69tkQ1YwSAGkFto",
  "key22": "2zYN8EzbRrux2BCjTXwr7edUFjyrzk6XDn3wXY67nkmcvjDqST5ks3RmYPT9JL4voiSBCxiD8GeJtaZ1kQoh7aWW",
  "key23": "3u1f58DPwusCiEsgURVePQqKeYSkqzfg9Z2kAsm2935tZFkKmp7pBFKKP9HwPPowP8r2Gwuc7Nsoy4VYqFLqGMty",
  "key24": "3YtsAoaS8oLrndeW4GwCjutsC9GKqGeYpUbBz8QkuFnhcuCgB9UUUpp3aumEs41YdgEC2jfYkbu5Rz7vAi2AawsV",
  "key25": "2YG3Bpf7gne6xLqSY9YLQKNwBQzQNgNjjZKMDeucaQvdfDBLD3vZZJQP4vYm5YbuWCRuaWuYZg1nbeJmHAtFQcAM",
  "key26": "3gEAGh7M8px7FAPwbqWzX3LaNivp4uza1PCe6nBWJBD3UkdTRayTdMWBTn5brsMqnt5MgBSrQsj64zxXyZoiz4Rt"
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
