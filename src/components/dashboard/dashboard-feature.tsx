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
    "mTmHyrjCJoK2Y48AsuYXNedLdRoNegwKTY53BrapQ9f4igsA4fm93Qc7PLJBf9jxXJivY5ai8rzY2vEhts8peqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqLLaYn85pU51chhT8SFPKhsJ8nw6UdQWrhY7T62eoayAtGnZvA1t3iGd2G8HpuxQWpRAFrPq1wV1mEjZcP4TLY",
  "key1": "eZuZVurZyQfiyvEDuSNXqmnsGCKqPNMHzWsbdfuFckv4RkmPDCTRUqbWZaCjA8BcbQ6rCzSzPwVNbnpS6fP5xfz",
  "key2": "54CY6UiumHMFvnjVTvoAYGTm4UnZwKra7oBXumynXP4JHCwQ1cR8ttukxNktHeZmtnM8yQusfrsGCPry1dc2n66Y",
  "key3": "57ihgV6fkVhGqohRanyGsnRt1tjuEYKEpEKH11B28oBPi7XwMDSisKYB7mS1xqmir1KjX3j1s3z6bqDenfRigbtZ",
  "key4": "27XMismKQ9Ljv3tWxZq8XQer2vtbuL52Af2AVQAr3cyuhnovBsPsKAt8qA2Dd7G4eQnagGEYm4BTAGFp37N7EeBz",
  "key5": "29XPEULoqmDWEMoHbUrLWsUxeQ24NSMGGmKNUQUmSHywuoX8oFqgt3yCWyXrk9eEwSU6FXPMFkUJiZyDc7eNZNn7",
  "key6": "3XuZNrX2FtNLpNTShJjgvuqhgx94n94SNLkP9R6tCjW8EvY5xexGMVpnnabyJL6hWMr8477wWwuyWXpyvdzRB3d1",
  "key7": "5xe51MBZWA4oP6edvsN86ptDHyEjhNkx2iTedDakGbbg9n3ar92ptyFuvQRpsNoLfRjiRqBPXRdNWSZXzJGcPPG4",
  "key8": "5nwLXx1HjGTfJ51Q79fbs9i66qhCQj1hHziMrKkvZjGuRNVFZywhGkb36a8WgmnXxy3rD9bSShaZK2DnZmt5yXxu",
  "key9": "3fSRsz9AeA3Kp2iTgCddeesExWGcb7wNCrxQDYWfB72jnvf5JgX1KVYthKjA1mNvXrk1ABqH8Cev2ntsw3H2WAVD",
  "key10": "3RmKjHwatMMH1BYyvLqe8AgVQkzhhjbAg7UPie1sEEjiDme1uLpn9kRDYaq1LtH2dSwBX8BRfLPsPChDUmQrnpLL",
  "key11": "5rVv8S9ogdB4AEhSThPibECraQpwM2wRbX3DJy7aB2gSuZSMAdxthdYZa2VtsDXDEKBoHEnvFf7gBwNegKGZzoyU",
  "key12": "3S5m2UDq3datrBx8yT8XPdnAsyba1KoeputprN8wQc1Q5uHXSTcCZnoYcNdZgkK1RjCZT2LCmUNCKXfWk7J1mwd",
  "key13": "VCNk561UbaE3Vascjfiz9JWgPniRqMihKvwo3epCa5rfi8BeALBkj8voq4quBRXmZZqmrTpV2xxjegASM9frCq1",
  "key14": "3PWaaDtThvW8ts7dogaLaeLUQ7BcQQ1HKihYA8TnDaW327TSM91GdbQP2MuZT8fFgYXwSvAEGMcQKN2jQSqnyn7h",
  "key15": "3CRRpoTFMvVetBRF5zQKPKPvYcinC45jPwMbH3wN6FuTQgAqJtXZSCeM2WVMs3paBQFVoe3wHmL9w5CTKdKUzvvG",
  "key16": "3VSRot1YGKAcpDHxGEKveiRKzuzuzrGM553JsYRR851GKPASqXHDkcYQ237eVY2sCmJ3E64GqjqHEivXAuSxZqdG",
  "key17": "4MMjH42WG6PCNiwmNpYjDXoSnP2NsGYYuekyQQ59msofQoPcuheoX9nCKjpfzhCA1DvfKAqELAhbWwvEksHqJq5k",
  "key18": "2CPewbWNy9TEQTU16U4sox3QCio3aNNr1VTr2obwGqZb1c1kT1o6JABRqtGnFRHecvRzLSexvAgmNvU4FsPLBSjD",
  "key19": "7ncMKVcCqHc8qLHt6La7aKe968VbBwXuYZt4dheNB2rQLn4cvFSwaX7czyTV7i9kLTnbm7Axy6VzP7fWc1M4xM2",
  "key20": "2JHkKyKnYPcqRi3WKWBeArt6tftKfaGk8uo1PR2PEXByoti2QnLxzYvjL7PSC9LhyUQKYs5r5LeCkzA5n1v3Fcj5",
  "key21": "4Y83G1nbmZjRtme4EbUSPhnp76VvvmLtjuiFv7JQzyWmMRHSLYfNSGQtkdgS3WVxfr4eXeMwnDZimb7Z4ATYwTjW",
  "key22": "4sByNknxEtwDyiWT7y7dVBjPfAwfyszxvevfXVtGeCFt38Fngc4x8YHFrh9P58TTNn4w57WaCkEg6WksHXKkzs2P",
  "key23": "PXc3kRJ5bRRD481TVLfonkg6z6wzKjdJKvEZENKNaWCt67F8KLcUkDsfuR6SJuTahozdzTNieRB1sjbr7j3myBu",
  "key24": "3pcDwSCcJ2EMa7iELpY1UVf7YjyB61vunLmPuSoQMddTc5zXc9GfT9SUazz5dQntjufdubq7YRS7fVhwxHTtqCFR",
  "key25": "3aFodzFyQ1rF9nSbQYDjxK675Si28WCQKRYec7g8qnARYvz6N9vSuabMBJzYiMBGB9FrHdvgQBgpHqVEQeQfkr63",
  "key26": "2m66MzbE1PBYCVL1rQyuKypne18hvfmX8J3zZChfzbAH3c8RcUsfPiENkrYhEKVoVNVAJUpszhRvGe7gvvAucw9T"
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
