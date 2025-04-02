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
    "tKdtFiBKv2bu9MdrLW74NHpcWR6TkPZKnmdqaUhqa63UPendoodx22YD1n81cS1ibgyfatCMNHENhMoRdicu122"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y7WPZbopgvP1NFtkemtKHHPotnwpEpibm77MXZNbWLJkkh4iPPSNYpBccvMQU96gEAGstv7c8sp3fos3KqKHZqL",
  "key1": "4Pge5VG3L87XRdYNgp3GbNtF2enoraSnYw24XsZXwT9N5BtnkmNNRXNeCnFQsSDki18uF7d7zzdzMmVfRpf2jmKN",
  "key2": "cRDVDEhcs8bVQVAKGbz29noa9GA7LCEaqhpbuq52BoUKA5dQkUWMBPspb8djHcs6cXSFwD68ScKqafC1rQSWieB",
  "key3": "42s9Mziaf5yetRDVJDXvcj7mVSxcKd2F4nR72UPJZZXAhqNxVnxsmQfkfuMYzyn2s3Sw5hVax1uQnjQm5v9TuD13",
  "key4": "5LANUE7y7176wzFNgenbRVGdHT9jnHVBDWN1GR6Uzej4wkZkL2wFP8k2Rya1jqKJpqfqGeMYQfhMRvA3AJdmrC2e",
  "key5": "2bsMAnLCFfsYu7UAJTiZu8tkAwS6YHkkD2JWwriQM3L5cho2S2S7Getg8xKvMSvt9pTezBtXvg7jJVajYLZkwN2H",
  "key6": "4t6iahn4E2LoZ3B8fMyNB79RxgXpm1edL3742sy4oovnap2U3bJqTijenMYWR26QaEgttY3jvHqxjo98WaXEE473",
  "key7": "2QmYmSogFiGUoYxRmY771CKBXDEVdjW4X28JhQSNrFB5EQfLt32pGzu1Ac6huLKppGuyGn6yBfbAiPwdPPrJAyTh",
  "key8": "44cBHt7qLdGi97j1D1xyNPg5qeAEPGUrZwe7HDtkeGc6Fs4KctsCV3sVW9YhqNNK66LonqFyRPF3E5kkH94xLtZE",
  "key9": "5zsXAt9fzh2jGrFTgLsAVApcAgsA4XUH5GFLfw2uL1zzLEipw3aoa9YN2EEfjJER9zCLYpgQpsG8xYWhKiiyevfJ",
  "key10": "2A4sKycekvuDzRsZXYhmzzVZbFqZNj88w1iTK4Q6vQXL6jomuyL5gCHqt8sok2XFhLHS1AJJ3u7SLdGZjGDJmc8C",
  "key11": "pQqxi9N5nhvTjkrZ7SfouT98u9QuCKRgicFu9N7Qd98n2pP6vK5EsCRjKkNqkssCxZhkp7TgkCpZmUVnBVxWftz",
  "key12": "5sVLgieUJQxVvrMxhWR8dG6A75JBwqZfN4fWBxNWkGELf45ExjrQwCEc91AXgSnpE9vSBauvvfR1hbUPsXeN9iDs",
  "key13": "2YpobZnmQf5E7rBaJfNzPp1x8JviGoXuus5aQKNXjNvYK2GTCMMUW36nqqoapQS6dtcX26wH1KvBjxV44HrsBB64",
  "key14": "5FAYMk7iJMPbDvjy7urTV1Zih95gon8kDn4DyouxEgQ7fjNRniANGoGisG9nzRroE8RBaCHZnpBs3jNjDduPkufk",
  "key15": "4HZgZK7nYNsaYjVA6wurgfzkgSU9prFWedpJGp4cQNoPfPfXFdLajd7waauXPE942jkPy8AGmsfGViV5EaBxKRv7",
  "key16": "5dBUBcpu7LuUTnD3npC9g4Fa1rcoGUpLYz8iD8upCL3dZRoYGetJ82gp7aWwc9yKJ2AxpAy1arTVzUvSEwgSh9ye",
  "key17": "2YfhaAN42DjH7LanktpFnYaYaLnN3skt6w8KiRXDaB4aRhrWDETdXNkxqCjjAdNo1YdoUXoGS7c1Sa3GzrpTEEDz",
  "key18": "3xhNvgQvKTJ8mJh858hPmBzHvBpYra2jRKRUMhCJ7xe7sQy5SgVWvoaBbDDEjtTUU2zhHFejoPLY8nqrDU5EoDdH",
  "key19": "54upabg91u33S7NEidTZSME5WU3uTu13FZDd8Pqj5yhVFzb1csp7myds5FKDqM674Ha2pj4J3oVpb1UDipwKyTsj",
  "key20": "3HaAQrbAD4JLhDvkz9RJeunTnDV9qcYaPSdXNJGe9ipZ2ABcLzk97262JhVov6hmf6j5dpqdXdM9bzmLGVWNCEYL",
  "key21": "25gdYEzhh1QCVS2HPvvKSBkAiwDDzATyQf8SM1jyyd64Z9tGmNfNpYMbxuRNdZt7ezeZCuoNuBh8LJ41FTqusaL1",
  "key22": "5tYgjUMrRq6eE9q4mpmCKQ1DVRnfWssqc8RzmtXP8UyGq3gzeLiyTvvqTq2FSn6pBTWRrTyQzDzsbHRQazDZdrMo",
  "key23": "5UuMjnauUhr3CguNSmCUYKX2Vxo6B9zQchhz9oQiY3MmG2kgBfwmFDzCSFeLAfgLxnZf6xKF23GrHwrm9PyyfmGt",
  "key24": "3tgi2dSJZHYJxD83YsdUf3aHnNwbMiR6CSsA2tkBjDB2DiYvBaWSPGTBFqR7ufigmJPYZo3gZjuiFdJRAvv4X7Mg",
  "key25": "3tMtSmC5YAMEbnsTa9TcL9L1K8SJ2EZ28SSxN7WmSTWEba3vAMDAHpdvhFQrDGnqombVotdbEsJHtcHqW7YgDkFg"
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
