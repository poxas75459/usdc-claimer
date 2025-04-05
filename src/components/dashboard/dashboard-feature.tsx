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
    "59QfAHjks3Lwu4njLotamU8tDz3quxKieViFRsvfR6rwiBMqcPoWJjwTPEdewNCqU4oSYFwVPATebsvLZJS34uuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cAPBQNWqwPAuUnWKBKU1Q96odEESupNTqwFeD1G3DveAaVyvU1j39ht1kcAKeGkTHodtj3ry2zsxLHg1Rzkgm1e",
  "key1": "5w4TaMWdD68kzBknGAA3jpfHcbNF5PKJggmv393H2DUEoXF9qLpHcJ2Z6QfPhXej4aLZNBVAzX8mEZ7WYX9GmoAz",
  "key2": "2qwyyCtAGt2ncuNfqmfc86aeTCWN4w3tdZJsX7bL4eMZ4hTmRkHMiHNSeLDqyTZHWv7bAGmeXZu4L1q8s61aivE9",
  "key3": "5zhApK5zhTYsiJ5RzmH8erXvyAvWZSxxA4dwnDQUCv3Ac2aKxMMHf6rBMykPNBXN3gs92AfRLFQ5aKyQ3dZR6hYX",
  "key4": "4ttFYefftqg8frzeAktCVq1LgVDdxuBAzaWk7nGvUdHTHBHUzSkUJKjJTYertnAVQkAMEQSUFFNAJHZrzHkmNvbo",
  "key5": "3Hy7CbmMS7Q2ZpuRxAsHyW8SzwdpUMr6ReLWHyfEANisTbd4SgrDXhU3fKo3yujzFHR4e5AT9ErASZPZfuZSXezN",
  "key6": "5BHDZ6jJip1WeA6SjmC2mq1Sohb9hH9dpuGVofr2FCAR72C3Me1LzwFvSfKULj12v1eaHSF6So8QmMYw1GS3CfX6",
  "key7": "5vqHmWF2NPMXnpERKbYzD6AM4c4ut2vz4dfTWzy4iD6Z1E537Z9B8EDjyz44Qh8jinfsP9GCjC5eVkfgzg48sWM7",
  "key8": "GpUsYT7KMUXjkn98FGo4jDMC5UXTMqWhCABtNkr9rMgrVcMzqRgiYxuD5gHy2PGCd4BXZUSbMtjiYsBLtLfX2ry",
  "key9": "56BQCEL5BpfSLF4UiBx1jJm7hysaZ1oiLKZvZf46RzBAnLqgccWtPY5xRZCQKGTw9wNCrXwPPxPgi6sHqWGsPVrx",
  "key10": "3tiByah7nu6Mr8Hcu2f4PDdrnk6vRCQRYYN2oEqmLQSAUuHwfUXWmaiTNFFg7H1KuP9CFpoJUSAv3Y9AKwH8QqjC",
  "key11": "4cCyW4nJ542euxLTXP3tC4jULq5GwfXiGoPLpzFFFecHDesbqTgzurP6jSJhKdUbK7n4ahgdN2EqYxvQKvbjxgQG",
  "key12": "RC72pAg3FztYxqzAqq4UovSPk8sNoetA1SrJVhcPVF8DDsK5BbYT52PaxKSefvXEjUUsvyVCEyTY9hS6D4hXrgQ",
  "key13": "3RijPHcdUv9g7aXdAoAKQUsDT95L42b6eEnRYCzTbW4EJKXXbNpqk5RPjxrdQnNRrDfab5ZkfULQ7MsfTQksCwGz",
  "key14": "4GAq1AAXtRqWbm3ThdgPkcFvEKNqHLiynyZ6GfhLotNdMj19EJPFbXdEokfuoUyLYg34xBSExWHbMj5x2Y4ZSzFz",
  "key15": "2Tv9gKmQbQyWDqjspHCfTCXHDjMYep7v9if3rgmJ1tVuwYCqx7iKqUhvgWux3ig6ZjgJGYKMhdZNfsFGC6jdDBER",
  "key16": "32V8q4joBBd1J52avb9D9PG4RooTpSVSzK9wEvrxtdiuBHpbsRcJ3YFGmmonuVRmHY3CTbAMhTtUuf8ZCpJ9RR4W",
  "key17": "42ESfdwSSvQEmrC1bZyfNtcJninoW69veemxvRKnuowygpZfaMsDm8mQxBAd31j1GfDwg41dY8qbWurPHi8FKjzw",
  "key18": "41pgjC6y8LE3sVsgsxqEhChYgjnKZusjepzEsAeuhskvKfD2jHuXKvh9ZSU8jY97uyN4miHCvjaYj3xzK5rcmKiG",
  "key19": "5mwbAQg9DizRZ34MB5i6wp6gwZApFasWtRfzRPGfVaVqKhSDxs5A7SNTVntSENhx2Wntvoj8kAzB2EQgMQLf5xj4",
  "key20": "459cs6qwYhWXB75FfUAxupPv1eDDGnE2mtxbBAeGDeR77f4ta2dBUKh4idatnJkFv4EyHCqbzTkdiHN2CCUzfPWm",
  "key21": "mzmM792fi7uQwRmMLqyb7DTHQSsKkJyWBce4a71bzWuu3kEG4ikzhFUcYF36x7skLvfk8PCNFZPr3XRFASK13TY",
  "key22": "3m8WuzaoZv74RzuwSZsq1ynHo9ihRgHgfWujDL6kf44nacj4x1qpjG1tqSL8NngWrXwjemrMC1RuRbGHaAjpbaze",
  "key23": "4UZUssQhbVmnEUfmtygYb6PXR3QKGFSPF8kBaSEHmMg5cJowyssmiUFaAbbgnEmtpw6j9Hhy6hso7NdBouecLcq2",
  "key24": "3fi4A9XsZ2kQsY3wBypF1V654obUW4fMcfnan45TpCDv5BpPG6GeMYGVrkU5P6a61uhKN94G3qe31dJF8a5Jxwu2",
  "key25": "4ao48BxdAhv4YoRijeXN7gcmXNinho8pE2YaYCbcVtd5WncqUuNDPRM2Gkd48JUnnjh1XMUNBFMQdBu4Hrmx7LEn",
  "key26": "3Dggcsd8k9Mnx7wnwwA8WAMSxJo5k4UafU4MCxLq2HFV1sU3H5owvL3GvLoxfMDtLmaf3HzV2US3GVKiyi1KvmAB",
  "key27": "5aWFejHqu2MUyaJBHS86vhvXYyGN1yG28xUCGGYooVpxNJhiz3HiB8rJ295DnLh1hTuj4dQxUFkJRtYvAGsgUNps",
  "key28": "2bGRkAHfFTaYJv6XAk7wVqd3r2fnUTjrs1RdHSPukJpokUsrj2xcJNCsoYa4odukXD3oJ2ZU827kc5M2z6RLAYz",
  "key29": "4JBhgkwSmBh96WD23F6jjVhkEP8dAAhJ7TkMW4oFs75Zitu749trXHJcmD7h5WTzhzYQHUSMXdhe4GF98xaRm3RH",
  "key30": "bVfqzpGqzvqv92ha3ZzfSCyjk14BiejNMjZtEDevfm8HA5WAujuybmCV3VaNgZxeai5AEVHyYMWq8SZZhnAw5Wd",
  "key31": "4MVXiTt9LzXRyRgN96ngGxdvQ4nBU9auieaxoTPtV4Q2nRZacGHNYMmoJzBP1BFdvh5bVGi5wfiT6PMqGEfVd4VT",
  "key32": "pWsXjyZwNC3efgn96cU1Nw4boPjnaTxLuew3k4zwyceQTTEPztQLjGKbEVBEAtLiACyidtWAQGLHR7XWphTfgdo",
  "key33": "233zWc2acmZCPbxr1JLZthMKUP5nJpT7phs2r6TFJGoEiZWSqSYSiwNPTDvYZgbTgZ11cxuxUZFPz6rU5oxt8xSD",
  "key34": "2UYJcyraAuraeiNt1P1ZCrudCYQHTHuLaAcnwKzQTc8uW3RaqsMhRyMvzBZmGwWRcLVep7FvdAxWyhXNC6JfUDYk",
  "key35": "5q3stct5ByC9AH295RwRH13UMeQWnqn4m6csTYFjBvVErwp6FxbekX9LtkgvWiAmM6TrkAbPb7R4r2MxH5TDSUKs",
  "key36": "BtifVRAMSAfPtZ5ZDxv4UEmkcz1TPWpAAjVrjLRcwPpriihVo8FiGZBTMGTJcC57g3QwNmFXgcB2uTZnbFnpkZe",
  "key37": "4gsA7mtctn9kHM5AugEokqFvojvjzTMsMEyn3Mr62g3CUzmdwc45A8XsNY4PWjWKkdsz1MwiUdxQCvur4Npq5a91",
  "key38": "3aP4Ari6cVmmoDEeibX8EGqpiN1mHkuDpsYwRea1D2wvdaLUMtwa5p8xJXYsnQv45L4EC8naR2MYf2zLERh4qE1P",
  "key39": "5JZq6ZtjQUa5dAyiHNQJcKWEUWL5K8FhSuqxrz7YANWgJm6854xaj8dZr42GFARbmXDqvJfvyA7irmq82jB5C2J5"
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
