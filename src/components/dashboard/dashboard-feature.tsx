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
    "7joLWvhC6SiJWFZooGwt821iVTMiduzYsmew6FvHdP6u9zJLi7CKhNMB6nvyBWditR2gKERhqPGdYtpWFbZtMi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TSiAGPFeGU6SYSnbJ7PCH9e4ymoueBU1UYBLPfVdb6k4YDfiHkqtDY8H5QZjwzGTCww7ozSRxpmKs5BWPurPfzJ",
  "key1": "122frBz2f5KwSdTUSFfWyrFwpzAk2v1QoME7fhY5fZbehgeu8uXxPKVqotsDv2fsRmxhMHEQ1A1hyppMzB6xyMA9",
  "key2": "5cRkh8sHgPNiyJZoJg4PiBX1mZ8RQwi8iimGPzpfj8Kcef2oH2TvdpqYfDqvdSRNK2QRYp4Ar5e4HmohHkMLgHjU",
  "key3": "3w5zXNyaLGR9q3ySezDh47SSQTtrkgJGaLTsj5ibowMw6nPDcVeksPYEtqkFn7TNzn35N2pjKhq1LBCnu2AtoesZ",
  "key4": "3RANS8ACAME759gUTuUoWKs69Uh78wC613A2SeTf3QnWqHKsNyzCP1CftMJQebBDeS89yLwHqb3Ryq2wTLmb9Zyg",
  "key5": "2UezKG4fhUdMMupjgvcqKS13QtTYXwkw23QY4XTKGme8UDXsasaCMXbJiVrPxfsy1Wq511LLsgWaE8vScTw5jTTC",
  "key6": "3NAwaXEePWFwZbMQkBYuwASGjKU8NAVvWCpSCxg6uck7kfF8yYCbaj1mpZ1DueUNiC7D9Ad5Ere5QQbJBqgbw9W1",
  "key7": "2vEe4ENbtaRzq3KCyK9DwSTfDG1KaKYsv4VV9ysjDzvGNguXmyVvPHtZatQCmGY4a8QqajDXRvAxNQEnLKdigYnF",
  "key8": "3Ka1n6QG9bmsAPrgUcU84wgHLMFgRezYCmwB9n7WD5iGyFt53GSeAhuPSJezRSr7DZrghBm3mKZJ167YCUGfwo6M",
  "key9": "2D49wWkAyzqd9XANgz4ogF1G7FasAs5re1HNX7YQ9Q6GMAnMPurFmdoLLgQ3gsCeDy9tkemaneyuKdjGP3vWLPN1",
  "key10": "2UiYCsU6AmkNVdTF5JXP8jmJNxASTq6brBfpS94TGJgpvjr4QBsG9EiEdqsnTrwvhrQS5dsAJGwsBhcz4EzZ3sbJ",
  "key11": "5cgd4aPwq1tGDW9k2QrUfL8GuYB2BaxxZZBD5W8v4ALdSnQYfyu1Cw2V9FJUc1e7wTAkoJNcMdHL3i2YmHiBLWnA",
  "key12": "35CFaWt4WPqxfKxSdfYknH5iW29R4MDgTLcpbhg3bZwXXHqueExwmfF7LqN5auHmxkNiNSYZfW4yGiHESN59Mj5i",
  "key13": "4CrhQMPKjq9qwfgfb8uZKqawNSCM1Xex45SginsyQdBcVm1Y9DYygKKU8EfHKoNXMeZEcFvcYK2avJ3ioMkG9ZRN",
  "key14": "42MfXS8W73M789qhD9uM8dEqH6uUGSTiTGEerpBCt71KZoYuqwz4k8MRVFhGNJb8QsbmBY3arDLY4YpzCEGzhH7",
  "key15": "3EKhQ6HHJv6HQTTewBZtxL42UkAPknDf9sy7LkYAbsRYX9RDhK94DFJ2HBZGvfCZhCo9KZWj3U9pvZ8r4wxgqJ6N",
  "key16": "56V6775rn3xLqWawAvsbnQQZS87HXhrmdEe9at8ZEJAL69Qv5HWCtmRwzjsakBz17W3Rfxc2QeWiyW3pdGTSw2Wp",
  "key17": "5LhuF5rYeA9jAwEDF4L7ASUhacLPE4PgA7pUiVrpK11fnnhV1cpSJBhFbiYURUTzynQaadtPiyw8ojY3hBszAz4R",
  "key18": "4A3AYt2rbyaj8uWkmxtMMLRnCrbRw4nq4pM6i8Q2qriCmcCsqvWmBGuzeMXLFPa811PHjQEhjYcYSAbQBzZc8zue",
  "key19": "W9L2VRyzd488sX7veanQLgxPhMLcASo7XXgH6e59uoScZMcDgGcG1gDSFfhGszUssMDdJioKUNKnwPj4VWvHk16",
  "key20": "3CAYQCCv4xvuxeDCVn77GMutEag53hpqk2wGCtS5VsSWSzPAbtKKACtWJsn85EDfauyCJhfoLrkb9xsBEBUVdpzS",
  "key21": "5ZvFDpsh6YbhSMHRt6Qi3W4uF77MusMhtSrQfe7F9VHK6CUWkR6YMgiVDeSmma1FRuUaKCPzJvbnZvLiagrvxFzt",
  "key22": "GHoHa6gsU8V7SvBFJfVuCCQMs9CpQgzL66Unj3XBsAmQVYwiHgKqXVzBkNQ5ZBfKee4TgGcWmDUhwhjcPCWeeaE",
  "key23": "3o14UixSH4rMKBbJw75nu3oawmxZHgM4dMYCEwEweVS6EeSJmvFjPWMBZChNkwBF7ZFvUT9iMbqFot6m2UXcQTG1",
  "key24": "4pj7uNxdmzcNDv8wCqwUaj5nY1N1XhoWnaX29ANsRnGE6uZ8pyKKC1ZweR6Q1GvW3EZnNhWffs2M49JhxhoQvAeV",
  "key25": "46BEzpH9WRAjMWWKZPjFK27WVVs72zXe3tsQivcf7hD4EtBSA5XCes8dAbedddfPHUBi3zFFgTF7sNTmbGPwRN1n",
  "key26": "2duGU6H45knbHSkbXFLTkS3iyKbefPmBUaoXxS5LVxVLS1J5MimuvSDFW4j4UHg6Qcdrb2cVH8ULNsCYAsHvbCuw",
  "key27": "36ZYq8f9ku1oMeQqXX1jnCzG45P3L4cLSACf5iFTXuHPFX5GfBFF7YetTDm769AwBoy4DbrwKLnsVQMgW3t727yj",
  "key28": "5PgviMYxbbgf8JHQ6PuskBZKgahwquWMMirzFXYMHkDFdUSY3x9amKKQ8R8tiCwFukXvHz5Dsx6VuPsXaaEH2Epc",
  "key29": "79tvKFaGQXV1tGQrZUW9TNPsUrqWYvybBKhicmEtS2fETeEHyFjeHjFbwjYZk4NucFEygswhsKi3nDD9M5odNU2"
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
