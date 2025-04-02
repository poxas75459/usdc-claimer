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
    "2YU2uMjU49abGYMXQxmqyzykFNwrteznrnBE5w6gLF8EwxgLEBYV4jWVPZSzgiLgKVZN6YqK3rmgL1RHHLBqrgJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7fm9uwwKoMtb5GSSiA2CMwQq4YEk6LGFmFYkv9CjWcbEJ8vnZDabe7BVwxuTHzJrbiyohUmk4FVSXupnVNf3oh",
  "key1": "3faoKNCRkzPpZDrHtZRHfLgPKWoNheD6uC7e7L3RJQ87ejcALnU6CSkVHFYfDeHtnBaR5eZZH3vqPUWMGFRmS6s5",
  "key2": "6tU2xZ4FU6uRxJZiRXWnnJwKvsrrDkENYvWQPojzf6ViPGKGbqx4hSs8f3hHYfjTGWcZQkbxTb4wM3XJQFtuVrB",
  "key3": "DZ4ZQt5EbJ5CVsijjiUB1RnoGuykmLqDZCXDHH4jCpkJqkZk9LJCPnd5uDGuwtzAcyRua8n7B9uhLTPt2xxAFv9",
  "key4": "2irAJuRhL6QvmA4yJCkreQuwfzv1GtbR4m92ffzGum4ZGy9iRuV3CSQ8rcoMKpUVoMZLz48qYQmW8aCpgS2ygNpM",
  "key5": "5Am5FTLodSzTfmuNzT4yHnteAPekZG8x5mVMcFKzGn4StSJDwmSdkqFPNV7fx1UZkPDnncDaevPaGMkP7RUCrHZu",
  "key6": "xQsSQyqhLVNCBHFXGK9TffdbYDR3Z6sduGapWMLqYd8ArTGGJQjYw6Eu17Ze4dtTrT8cC6X9rYXayZAcF6kb4cq",
  "key7": "KpTd9a6iCFn195KjfYHcCKFY8GEXhs3BCoPayM1hzrbnAXLS7ZK8r31WpfM38NueqzvwF9d5NFYzrzg54WDjG9b",
  "key8": "5MrUj9RamPFKYL7wZnFvPKou9K53wuhayHmigKyxZDkYEpTKVNnr7BfUZ7f8jvMg8ifLgNcYeCrBkUho9zNNWsMt",
  "key9": "5NnjhCyVZoD1ZoVnq91KP166qXUzPBpdW9b2sxJXvDPnTbEP8X2MtBgKeyG41xNi4wmXRyuYNbrnWPAwMqhKYiTg",
  "key10": "3HQUP8pboZDwBQyCTPt5sufhgUjctG7Ydp9YE9HjYv4UwwBieYLBDCXB7WTTaUg1bfZavYtXvXDcLwCT6o1tM4Qj",
  "key11": "4ivdyCK5wLYWDFLwmP2RmxgVwuVTKLhK7fHSddc8KH9EHJfdDTcW6DrviZzuMkV2amgu61vZrjPDorwAVRHXMiav",
  "key12": "2fL2eRKMR8mhWzgG1MZZoHfBGbo2tHwXie6n1Y5QpQeV5HPmgu5ifomn3twgLqH847zQgQAqj9WH4WErKKjuNn89",
  "key13": "2kCXK41LCw6j2PLM5QaTjazFtK4koUdVKxLEF6W5xL9wuQJ6tDYc2PtWprNyCvs6p3ywkuxzif1M9o2xXBsffigJ",
  "key14": "5aTGefjm4sXyc2TbQbnDbP3FLaHp7B38tCekoLpCNjRheXqGARCSNs9yPUNuDnSMaexMccEoN9udWiB3ghccNyjb",
  "key15": "28jLD1q7Crt3UMz44iW4xDcYKJUW3koW78qWDV3ExbPTf922iQZfrZWbgrxsvSJfaVB7B3dMsK32rMd3FPnka7iH",
  "key16": "HYVZFvxaML6fgHrxH4EDVM8YnCz9cEC6uKpdgvKFDvg7gu1HY1BCYDtyfZ8szozLrRiA9J7DKqwY7WB7EdbExXH",
  "key17": "4QibBHMxzHWFv5RpyPoHLuR14sLv2dTc7HB9E4NkJBjN1BgwrMfRdVzxy862GMMChFVcNnjPkV1VsiXV7DQ69yE7",
  "key18": "2Q5cemL4Mrttin9c1GAEv4na9b5THnxcxVRu7qR1kJfp8vYxaknNR6DrQxW3UWCir1p29DZ9XoHnCJLhBwnVMDj2",
  "key19": "4GuXnsjfjXzaqThHKu4ouaorAKfX3UViYJLqdfBiZN892EoHKQRHGwSukZn4RX1t8L1fdUAXeiMMkMKrsqFjHqdq",
  "key20": "67En3hCP2BFYhgSvjrNKMxoUJbCh1S3E9ihF9R1wGmwBhAVWwG4Sp4o6TrJ69yPG8uchdg1rJxGcSv48TuFgeVjb",
  "key21": "4zS6DDZbr8FzifGGfFG3kkPjwYoqnRgwcViEcNXfYipB5nd4e3Y48k9LGErLUXdW2TWNczbJzR7xpdr2qP2ZNhdg",
  "key22": "64f6hxcBRaQL1ySC19zTQPsURGFDBHVgFWdsKxXWz8ii3xtQwKX5XRaxGQoCaEJQX41Ubs5rZwr6F6pRzsLddwh3",
  "key23": "5nBaW41nJdTPvWyS9euSV1P5gRHKcmJvrnweNQAmn8ijajVhQegfFQZspozbzUBhvYxKqZgzHXDC9XJ6DAxehA1Q",
  "key24": "3AwqMNDDm8z9DAQsTuFyjSp77FDw1fmZ1m1kv3DBGnyUipMKH8CTf91gmAgDTgU5KCsqKGsbmnFpaUSaEbLi6Ej2",
  "key25": "2k3c9QQ3JUuWnPsL7A79KfkWNYfQ8fkuKrvHD7hxD3J9Mj842fjFff37FsWtxJrLdA2itcBG8LcuR2r1Hpr3qXk5",
  "key26": "fxFrdsu3FB8bTbUGYLFqQKdetD69jc8KfKjENhyNYDywLcnPRj8Ngc7CzYmYUdaY4qw8NdXgH7vqavXiDyqmqff",
  "key27": "oZwqwRUqE3BqFJGYZzJWhQmPenSyxCy1E6EMUkzG2yzn1WaNir1PLrPr7SJgfirk7Rq2dAJVYM22zPFRCezikWx"
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
