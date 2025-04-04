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
    "2u6EgE9f2RNsVYUvptCVBzNsvKprRvSwMUiH7D562Vs1oTNfCUokC3BqeNe5dfdPZvAUdPzgr3LgjY3r5FN6Si3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p94bM1zr1BAUbABhYezrYuF7RPe5begX33Ls77BzH5dTmLFefeWYXqfje8rYSogHPDG1UDrN74JgZZkQ2XSCLdm",
  "key1": "pSagqCa4gioYkFjRDA36md5fbVuR4nQPv4XP99gBw6gp2GQfnF8cLx9LN2AaWAPmhC6v2ARyXdizSaBs9cNVZKw",
  "key2": "3PDubkWhYKJhdbPeYqFASfRSkzFMX8BwToNSosZ5zZmw4b6aWpbFyaYB258dGQnZr7gsj87CZFT24FjkHPTJ1iPP",
  "key3": "3faQDjWhtLSqZV2QKfPk8Exn69tDY2dAfWNKMy1K9VhYDVNBKvqLUz5fcCTodpf9GvD5axxWiXXT7jnMNxhUQSnh",
  "key4": "5fCnD3GXPKvZLSnGXXkDpzbgcfSJeN5thHisoLt7E39yjUTrdL9HE4WuH3yggn91qXCHwPK3tmvGeWdWLjg936CY",
  "key5": "H9DN3zBG4M5BgaqVosHGBXn1m5QfwzFnJJX6WcqtfqHG9fymacnPJEkCqaGnLKFhinjN8qrkNnrRNTFsepM6nNc",
  "key6": "4H2fN9hZ8VzBtUQoaLzWRHtbW5tcsYjYm5xdeLpeTarnUb6FgUNzwSjtkM7pEGKeFz24nhE2ogP5eVKpYdpbdtG4",
  "key7": "1BpE6aFdaMLwdNXZkFLcqw4KRDNugH1hioLcP49Y3gFtQnfEeo7uF3CopSJLuHP7VR2bmHoDvzM5wDsVNu9UA4j",
  "key8": "FzYL3nE6KDHoSQPJh4PYkapAbUhArwTcMR2uJt84LwTU2q1Htk6iujKWmyvyTVByo9FkFPiCFfN3fXmnerHBTyw",
  "key9": "3ikPKLWSJCPu1uPsD262ewomCLbgo3cutnKihmoPKo1dxuZZHeHBumQFohymrJ3W2nTESvjgSDUB2imHhjTC5VmE",
  "key10": "3eMKiT4Ua4NLnr3u7cciiibEii44bvsieSww1SgbAAe12qjvcH7tFmpRQZ4X9J5bd6RjM4QMkuwDHnUY59Lsjp5F",
  "key11": "3Ryk9XW4UyAZph9Bw15hKHAL8FhRPtRW3mKGkkExiv39VCkxAhUzQmuFusLDSei5Znc89f65AD2qpAHiFUbMDM24",
  "key12": "4yQ1R47dr9iGFyZrNba3xCvQu3hMcK8JzkrwxaQn5JhhN4ci6JXditpyVYbFSBut6ubqSWPKQPSDEEqnS9TagGgo",
  "key13": "5KXDRwvxZv1U5YRgg85cbZgNErvr9PWDWPrHGMFxy3qhD8dYoArYGbC7TEThCKFeQyocJdsAzyYvmjTeygmCThoY",
  "key14": "4jXnhE1JDmZbMJsrRcj6ptLWadKxpANww1NXGrd9By4SDBDvDg3bJdbPqWbkxvsXtyGTr8zMjHkiswfphyqZ1tsE",
  "key15": "3pkrskNiGNzG66jfuug4i8q1791T44cbyJfX9h3exMULgRqSdcXgFj2Ktx12ycFRNAwXTWW3EdBnb3DvJBKozjkA",
  "key16": "5BBiac9dYLCWSiRjBkr5yTK7kFzrnusi1Exc4sYmC1Ln8uWgNSFkiwbULzpaQytn2X6YR9W2CSx1M6ASZapL6o8t",
  "key17": "2u8CsdB8mK95aTHJdnBP6foXhpvg9s6LiS36bwcUNuCheyg8xffM8yXUsJov7TPpfS228neRmZM6VyfzxSdRMqz8",
  "key18": "5G7MtWNDhvMdTePV8SBvtZUcAwqkE4XcRsLarePSA9mwGJnFVj9gR71ZDTkXNomCE25WkKMWCavi5CbgPRuFhfkM",
  "key19": "fVUGucRx93yEiFP5SV3ZDhkbXgK5XmX7xRKvkAaK1a25nfzhQsa7Afdh1GFX23zPanWZSY2rd4PxvuVz7dNC53P",
  "key20": "3Q22bpk2fyKECYWiP7t3zhCFJd1hRVEpknoiqN47niguxDTctWkyRsqKHJaLC5PF637VmTuDSz57pHt6NiekTNg5",
  "key21": "3xhNnkbZhmGqx9gtBPjiYL6K58Mt8iNyWGDKypzNDaZTzCXubBBbSGmQEK7Mxx6jtTmT9av89awk4SzYPxmHtcZz",
  "key22": "4DZ8wPJSyfcQwnEWKHF3RCBWBQyd1E6R2uiV5ijqCK91sNuZgYGJYxjYiDnMepUp2t5iSudsJp4rfzkKWg3Fgke5",
  "key23": "62ABXXTfdcRKVBcMnReXSjh3E7gDmgzUVYSfgUmbgsMv9rvRAru1Uu4HzZm1oGMZwnZuMzoA6VEK4RY5347PQb1Z",
  "key24": "2qQVMHqtPxzxsNA2jFLwP91ecy6xx4a5eNHXfDX2WR9FXzTpDKNeH3vUFE56zPtLcMtdmbq13yihenWkj1VDAa6Z",
  "key25": "2UaaKFzNc9n58Lz6PGAapG7xaUn3iGUjvLanGoyJ95XzbiUG9Gp73nHciKpebo6a8vguJUXmsvacjbMn4CpmXJsj",
  "key26": "4QavvMCSbu7pZsGUgLh4CMNUu566RN8Sk3khs1FCeotf3YjriKtGph33Zf7Ma9xChCLo2M9abjh2vsUbmBqHehwD",
  "key27": "22qxd52sKKvtr2oUEbmEafz7oL7rHELb2315YcGazTwJv3f8kfu2DWHtGqpr8ZxVoTvYoH7UkFF9ApVTH8wtBcRW",
  "key28": "2F8J36dPTrPvwLRWrN6c8hQ4KxgENHYRvXMsLGDPnXks4Ba8uHRprKueJUgqWg4eVwVLwwyWpaGd7iwtJYGF2yPj",
  "key29": "523uNGqjx4LLgSKvPJWK4RxZvLdPCBMkaZHQjRaFYKuUZUZPbfVMcYRdR3Jra6CmPzgBQyjtFA1Bno7yqezuoRT1",
  "key30": "2YRke6YQsNtVGbfiFfwK2VmNLLmYs8tKwwhu3eJTsjxZN9v8NnWoniDmpVh6EJ2R4Pk7kLZ1wKM2NXDejWfbZwB",
  "key31": "3ssjvp1QTkZxtHz9h8ab6hsAJzrmesjrsQSVAqk84RTsMP1DmKG5ZU93Swk9ToyNMjb4svKKhkawa9nY76t4dVkW"
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
