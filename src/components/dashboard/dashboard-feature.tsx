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
    "5Hsdf2SQMBiEK1XhPWdco29iv7W2uugSpD8J4zDsjUFryxrsnum7uRhuhgh6mS82amXjiWjReG9nnsz8Zs55hDeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pAAerqNTdakQjbZ6sKLLtbJn3FKT8DKRYyxteuX4QADTb2bC76f57cdiYeHZJj97z8Gu9nkN4JEirwwvUnarjQu",
  "key1": "28et5Xnr2E6UvJGcMiUw98Ch23q3GAxN73sdPbzACyL6XUE4riEkD7v7pS7kedQGrhQ7m9N6weZu6MG1d35T3ZMb",
  "key2": "4q3hsodb5Cvub9huD934ttNBqxmQfaT1jXfRRKjjNyBRRrWThEhBcGy6bHUcTddraZ1Nvyq4dxdkwqkN7Dfv3uFR",
  "key3": "28NfGVnkGbJmPtSYzBvaztMsMQYj4UAEtpxEfzvXHs7TZxsng1mcrSMvgsX82Hq9XMcR4GvpXjxgJP5QpGajXtXZ",
  "key4": "4wtoNouwJqd2uKSgmeoNmRvACuno8D38ucsfdbqSSs576FdUgyWXesUETv5p6iWmx9x2AuMufwaN7YWH8zoM9Eok",
  "key5": "5XoWK2Kxz19SGQuQhbUyKZgyUSYzi16pNXJrH9TvWSBrb4AGutXQ8XZxRWxAEsuACh3rFinEwh765KoSy754yAbW",
  "key6": "3Jhay6xzcbVGvN11gVRyDSB8cnaJy8zoemewZe5VXKq1VvFJj1jzs7wj5o88KxZk5oR3NRV5fjokFom555FG1XKs",
  "key7": "2TRMSUv4nFiALsDSBzJKFWGkCzeQ1w9Sj2Q1jd4FwbvRoEJHpgUiY8M2x9iwPQDXy8MuSprFxvYQAsfJSo3nnZ3p",
  "key8": "45y7CoLuN8Qr1Dqpuw3YUuDidTJ3yWAnLaDeWrW53GiEaQ4AnhLP6iEgTP1uC7vcDf4QqpEeVSTkxbkfpcBrcQrj",
  "key9": "pMUnwrJWGtdZJBzGiP4zroSHH77WLHkd9oxwENDfYJsqvYASfNwztniKiJPHf5QyTSoptRNJP1zdcqPP4fMn6Yn",
  "key10": "29dQ1ZFeVi28nB7tVLa1Htn723SfDvfWuDhzxNyQmSicp3eem7NUraJCBHAtP5EWnuqY9ttgQdJh6arDcertMnc1",
  "key11": "4mNav4SD4LQozU1BEB1WcPLWU9mawCExLva2dUFDLcoTeivPN7y9jFokDQghTxzxfqVQUhrHZbj71TXL7AXCvjCm",
  "key12": "cJoEKWxWmmz6E82Em3Y3UqZW2FHfwMoHe3iGgQbzJEPDCPwD6ri4C9h5XSKCLtn8xyD64hgMmcsE1jf8x8NbU6j",
  "key13": "2hBKSy5zpWZGpoA9dSp6hSNZw31cU8hUsARHHprYkN2oCt5wAF9MCPEku1aq3HfMNXkyzLHWNXX1qrr3SRjFBEgM",
  "key14": "4PCRXyqTt3tuPaUFJCSE7GQxgg27Je5EVYqqVNhy7YVG7zXbWbM65MjqnomzW6P2QeazuAjBJcjWTJqWbu6cFm2N",
  "key15": "37asw84b35zcJivePLRP3AePUxSRWwqgLQm5gh6xCDWAui7bGB7uXjUH9eJCZPMwkxLJyYWEqNt3bFpA4p8EjJkC",
  "key16": "3pdVYsVikUAQSv5y5ZsiAcVqphmWc8ZdQ76gXHaMGGCxugdm8vaX1zNsqT9qMd6vfCy8zGPUHVnjmqcEokcodZdC",
  "key17": "4Q3dN943du5yL6VYUBLvd1rz65guLvN38iUcp1V7npEdHyk9Z9gFwSmUjg8Fzxn2QXC1dU2HK9uB9f61JH3QBjAz",
  "key18": "4eAibPHTvyQq6PuHy5Psy2JTsX7yi5Lgj6pnKkJ8XJxycgDEvEPGG4RWsU9nf2jZ6sBHsrpPxqZB3wLPMVmDdUL7",
  "key19": "2qVasugSNNYy7wVhHHPwbfKxQSjZTMW9uKrJ8bjMEswcRWT1hnon8ASSegqbrUAkSRGpziCiP7s3BnvkHHfCPhqq",
  "key20": "4MtNpNcc6Jwsg5PpwSaVvj4uE1iKfFuCR8uFGr1uNsVJSKDwCHaXdwA45UAxy1D7DHNmTec4mBo7meQMc4V8Ap8w",
  "key21": "5dVCezsCgKMgqsmd11D1L2zJ2Mo1FcLujykQVnTtXBSEF8XmEZ58RpWLgTNS5DiDVeLwmfV6MNdBQZg1tQyUu58J",
  "key22": "2JjMphN6ANkVseiW6JVoh8W4Jd4bwoxgJ3vg8EWpNohryecaszC5KMAwivzpCtnSmZVZKRhTMckyrcakEA5Aq3en",
  "key23": "2VCANBBNy4VWwFEhnU6NGB19rwBzJRoZtiXhJWSix2hzQj2J2ZP6jcfE5Es7gdJ6vCrZf7PphadzeTNp8WazbfcQ",
  "key24": "2YR6igFt6mhjEbdobKhFDZMiv8Ffi3xUwNW2q5Tb2o41zJqjt7oP7poGJ3eHeFrjsb37d5m5eNT3e1ojAonR8E3w",
  "key25": "4N6iLaixJzbAMawS2YGkgaYycG4DRDdUGqusok7xUBB5xztSvzGRMAeYEkTcH8GW6stw2r5HRuS8p6TDVrrkyfzM",
  "key26": "4psyDithsWKD7ak9vWQJ526YHY6ogDQwCn9K6w8ZkPaSxAL5aX21DYtKmm6nbwVxbQcbyiVSZZxh26gJwxuBYdbY",
  "key27": "2vRVxhB6kcGysikk8kaLV33h1TrF9JNiVojcucM3ypcKCQuqA4hVA52HNbWvXLNBXE4zUPMcJqYidpkRVhP9ou8E",
  "key28": "2XxHtgbZGHznkqr9zFd1HVAsz5EgDgZkdvUpNiLnCKcvgeEYB2zcecXjnrS2VdfjU6gvyfokkpqVC6XgTb3ZPG7K",
  "key29": "5UdvNvirhfzUwvxESD3Hh2UZWhkmrDbrFaznxQWdzSyzkcNR1a4XTVx9ZScp6gnzrYw9Dy12KmFEdcXg3JBPh2na",
  "key30": "HfjR1o3p2sXLuam74f9SapUZcoow6MLEwDDxw3s32LXvm3gS8Nf5xSYSwD2zittV6yRUm9nL9muZXMeBb2p4rkQ",
  "key31": "2HuBAjkd3Mcak2SEo1e1ibVXtJnXRSG4RDywDUn1Bt82QonPFDpKS2RE4WGx735YJ91TyaGYwVK7CR2QJu8QkSJp",
  "key32": "4pwPigvtFj41hfwYjigPYhWnYXsUFN8g8yDUoffjcT4bhCNL5AfEiP1VzGrxzdzr7cmvVEhy4nMWz9Dj6sbm2g7x",
  "key33": "qmTCWaMAAUPj3ThtGK8kVjAigL3jjQPtyDVaaoGiq8PQEDnf7DPTCsjp9hXiz7YemCBhBejH9rtDBDzsREETuEK",
  "key34": "yzfm9kmFeULWiUdcuVowWxqEAPQJVB65mgUG3i3Gckj4PodGCd6gUpsgsz9E7rkhXZBXdywzhtvGn225VuAjZfL",
  "key35": "YciBu36ktJ95g6s3FMWa9mJHK1orCYqYXBc5zCyKyt4CMVcPxB2XooeMRoa1WNHZkt5xtotTY9AhLcwqAXjb98E"
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
