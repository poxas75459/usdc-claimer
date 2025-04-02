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
    "5AbBi2vUSn3HaqGryR3KcQgkoMyMQDFTpUVDwBo9TNPNivtw9CuquS1E3tqHnqacfUZbRSobrMaLKN15CkkJmkrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zc8pFHEGZUCXtPXcDLsGhJw8gqbei1jQvVkR38CiXoW7gpauSkj8t5q2BjHQ5ryMG6JJ5SYbx9sbFosS1mkeu5w",
  "key1": "3oxvSu8C13dLC9oqcTxV74zysG4SDBKL1w1wPzyxbRLncasv2byPWT7EqX49mHRPyA6sXWvq5demVXu1ct14kzzg",
  "key2": "4JnqfeFrHC9JD6QjDLVDWpmS1VsWTBs7bgfucP9gZGSXrzia2SHYzjERoFVY4b2j2mmrfm3ZmVZW8EJhku36qkQG",
  "key3": "UY98atVp2oqru3wQ7B5S8C1VvWf7LnM5h2jeFjKyLQTdvYo2azsXeZQLHW1iFziAyz4ABi81yqTAhsY5wgbfsn8",
  "key4": "5hTnm1zohAFzDVsZGPTCqaBRUNsst7oKVCLfqAVRNEQDpKdnNYk93CvwTN36xHqhKhuZZu4raoN1o6hwgfUrPYPt",
  "key5": "pfVLugHdBmuoQUZA5TJm45tH33xhy8HeFripNXWqYDcxjBqvQrPeUua3p7rTF7qEuKMVFZHGSLrU46TGTQLW2Tn",
  "key6": "gizVJrnDgCiaqas1co7GHv8s2e6oFSZoqdqnh3Xognx4fW96rjao4xMYxKcR334Vt17iExG7eqbBshst8zqK8AA",
  "key7": "F8PYQdeyMZL9TufZMyRY6K55KGc73vZv92y3e6tafiU7FZptS93iZc6vK9W5W8LGDP826VwCSXDZLy355VX1dAF",
  "key8": "451vNYhrwVFXAbwfutFCKAFhoZJzf35kHNHXJD7KzDeYrpKvzt1quJur5B2UVJc2RyCh29a9DchcDWGmd63D8xoq",
  "key9": "u596bPJFpYm8tkQupBZrRmg4z1VdkGuH4tUyut4KgukKAS2Rw4PwPZ2GyFBEznJusaJEB3SuNtmXeB7nMpcEoad",
  "key10": "3mEYXDEUjpaTXpf6sv2NSdbEVPDAS3Q86EaSH3tcpUJfrKSxufC87s9F3ZPPbSXdKvPoeLHsvZaHC53rPfADo5Pz",
  "key11": "Ge3tqaTPBj83s3btKVTt9xAFvCcmDEidk1JN9vMFfSuRtFeDTojJYihtTCVmArUHhka8PQnQ7C95hNR67ozcSk8",
  "key12": "4hMegZVQrPVau9yL64CQn5ubUkeDhT6iJjKZhDwHZoAam3QSMuaEkKyfoUksXd3uyedRqeMjQiS2TLcgF3YVkeDi",
  "key13": "4bpgUgzprpZEE5vLrBJ3aYBkS1z6cjda5Xs7Q1r1pHtBZDjWFU8R8dRGhYvjCiuq5fVDWCwXutEXps6atZqNdMyv",
  "key14": "3Txff53nyhukKeCNUhE1hZ7cv8KBV4jPNUbc4SPnHF8McDkP7Rsadz7bK6rwGdeix6YCCHMC2Agh8pGh6VzKns3W",
  "key15": "2MrNADRqWqDDiYAy6jnEHb4WMs4GxcR2KjM6cS7zQAEzZ62tsX9aDbiuBWhJEEx1JqDhcP9eaW26G9LNjyEqrYhv",
  "key16": "566uFG3YTJDvA91ahkzdBVj3PeEDGJQoUUvJv1fyaXkUfk4DMphhavhsPzL82X8H1NeNSrHq7PDN2TLfCR1AoYRY",
  "key17": "33MTbbLd3GQREQHQuVsn2wx9tFGunu5CrtbNSPHbFSMNboZru3KXQfZ8c2kWymi8KKvMpVJ59E7hsWx5WsDie4L1",
  "key18": "44ot59ji2z1tpiWj4FPSqW3jhn2DDy4PxJaD4qE7GJEa4ACMSffSdtpmcaCBUwKXuhhLvYchrYfZ2t6uxAsJKhQR",
  "key19": "4ExFKX1xSDFpU6TKkueMCRZgBbb5pMtLEBXUz4PZnLUhBsTJU6TZRJBXLjwrcgYVkUh2TRXHkYfZXQfUiUMJqK2z",
  "key20": "4yiupLj4AKq3BNocFd8aLp1VqRynLWyUQe19hXHsykP7ZHcxZCjCLEjAzKZqgWkUEQVVfSg2yV7iamCppJHTNZSB",
  "key21": "3JfAG5FRM9ZwCnwe2FKD2bWqxbRhowJaBa8kN4MzWNV2VdzwbTD3GrMKexC51vL4HCthxAXKLmDDMyJuZfGuXJrM",
  "key22": "56tW5ZggGEWfUCDG3JC9RW3cA1jA5iHfMyvbkg4aVfxBpNAipUAmhwAaS1YGi1ortBdj884ZYCxYR336HAuf4DsR",
  "key23": "5hABVJRah6UAQVy8oQ67aae9TDCZAeaR1DZW1fiZVdeci67MhzQwMvnyfC5S74eKCazb3gMnQAbykM7pmphDz3eg",
  "key24": "52BiGy9zeQdgvZ8xb6wYFdkgS2NQPNpTCJR34cBdeREfcMfjN8ayEqgVRX6JyGzgjTPftD9XpzshG6NY1hHUNqvU",
  "key25": "3tfB8nVNLq4xRCeo98ccvPzFbKgCHWgheyBAb53oayvXqdcwJVnZCDwhEM7goKonkBsJZvk3shLpk1v6jq3x5575",
  "key26": "5Eh8PPdZhWzh7gMeyqwGi8Zi2YzgPYbH6qGvCQXs7YCv2vfh3Hm7U4oLZaHvUGtDztVjgptT2ZjxdXWdqE721U4z"
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
