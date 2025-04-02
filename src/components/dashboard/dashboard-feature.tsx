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
    "3PVK3LQkKeJQvzQMtQFKPmZjL4MLDCx8izRGfrjPXUMyH75DDaPNShuVw4YZTr9hWjcmJeKTVWcaaAN9H9G1e86s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdJNHZkJfgn1ymHZr1PsZrtbveDWrvHiL8Bp7nfBPzJKgHT97H1ASizBeaF6EmokMaGjRseefAcsSwKxZN3GUPG",
  "key1": "2sr163X9gWY8J1UyGosVX9EWAk9ShDBdthJs4fL3EW8ktuaMpaJyWZLivaLpJhstgdjBnpmQvgKNSXjofSi4TCHr",
  "key2": "VEHw2aXWZRSHProjx61T7r7XNF3Mi5gFbNz9qXA6MaAN9BmDULZzCQkCepAseZMvxzgdZZXpaLNGV9qWrp4MXWN",
  "key3": "4qJNzMZwtDzaNyL8CTZVnXVFvvzCzbm5npu8pADqSoFdD8AE3pbAocA6SxLPCvjP9s13G785ySFxZPAdi3Bg8KDL",
  "key4": "3n1dsVXqPW5GN5uDZGrZfdUEg8EQYogpNnT9NX1G6jnvWWowFh99DGauuJXMfdjXeXUbjyv32DLEmjHvTbMoPm4K",
  "key5": "28DFeX5DbvfnNmWCChc5d4QuNdoq7PnA7mzWHUaBcUpbKMXkp9ggZSbmTeoFGJHrZ25tQuLoWwz7q3FixmwKJuNd",
  "key6": "29V6W51kCZCYmwUybaAJE8Td3JMqmbGdch98x23qLmBWQ7rERJ7Wph94KCgmd5JrLamSFjpeUsjnMdpTrDSJqkBd",
  "key7": "4Y2LKJ2j9vV4h1cGHKrwFouMeNSjYxFaDhjGieesYEtUVrSK1JRpEeXLTJMCqV1CFVjJoru51YkhgrW6222cMSqL",
  "key8": "3xHphZ8b8XL67dHeiDqeQZhTqbd7DkXGW2oemG7T4U2CcCHZEQ7nLfNrppMuiprRvgMJqfrphTkYxYQB9uhwk8Ng",
  "key9": "vxtcLYMU6DigNuEwFCUZ2YGm38kv7v59MAWHM5HKSr1eT45Xet1sdRFgG26rH7LhQLBabQoNbGPqH2jRuVc3pwS",
  "key10": "4HLWN3of8cxiQhfKgiJgbkHyyN1aoXQWPdkDKJPaAXobVEeAdmFsevQkLh9eQNV8Q9VVez6oradWVht19w2chTTV",
  "key11": "2eKpTQypFUqZWUde9t3C6N2KsFhzGQ8UzzRRtycN5QGaSErTFbiUAk8zqtJLwATUNNAyFXw9fpe2CZimBvHrYBfa",
  "key12": "3XikD4PqkvsG1kRY9yPgk6GP7woVapetVznKLQN2YWJCJvMQ63hqHVTxAV8fbCHa1ZdGCi5eZL4PKoGJXCuuzGR1",
  "key13": "3nVzbkG4uhMhkLps1GNWTmHQ4s2TUGgWfCRTFfyWLziQLLLn1KLLqkoqFw89NoR7sGTWUTYmsBNPwSe5vGiU8Kox",
  "key14": "3zbnNiMYSCmR6WPowECSKr919jmLhQ4XRojhxxRKJA2khS7MrBjPFQsPkLpbS2KXJdY3NgoLVTg7sJfCih5gCAcp",
  "key15": "3Nxh47A4XzB7xvzRRSpBqrz4Ptoos9PNruCae6PYocuSBUr4nYUJ5Y5n1nDKT3scDbZtR6Uuik4ERdKTwk9RZZsW",
  "key16": "5epQBxSLQFQgC9t4mQs6t2MeSbw4ihPabvwQwY8eJwSUqDHZHb7qATBE3UzH284MdC2ELGmDS3e5gVvCRLVqixES",
  "key17": "DporXLsxPX3LgXx9MHU3AVvjnDokpF7ypzmYgdFy6C6miNUgHZNgMyUeZZkx7Bpv7VekPijhFQp3RU4vTeLhhFT",
  "key18": "4W3qRECDQEApW34bp6X9DgGTSbTCPm3qBriNLtFo2dgfZE1Gqg5CGCEvYufgd3usCnvANyNPk1eUfPhbpCFoijhY",
  "key19": "4xxDhtGkGDbUwMJLs4F1Ppar2m1sWGsxdKTFagbTW9ZP1AGagscHpyxPKvrKS15cZWwUCaGG1g5esXsKV5CayLqK",
  "key20": "3dQ3CXcUfKbGTjudroictBHTFySqy25MvB8c4y5PbKz7ektvvgcxSFvPtodWVgTmbUeqe6bdiCZCt8qiQsbWtGwL",
  "key21": "56rZZhBr7DQ4wZ4jov6uUiQeF4HgbvAY3aWdNEk32rcuuMwMfZT1s28gTbC9zhv1rQCtPUcY4dub2pSswgptVcEC",
  "key22": "67ExMuEwzLFjsJV4KLmDqyFGxv1TVXb519SEKHvwe1LoiZwZayJECMc4Vz9i8KYhix6Utu1SUtS5AcZXxUNT3K2b",
  "key23": "4Loxzu9BZQAqhz35EXXra97MHe1RPwM2cVZMLACTQ3XhuER8ztQQEJj5BWauVC1ZFkVfkMsy3DvrWMzSoVMC96sv",
  "key24": "H6oh3TbnrRaBXEWcB5DaTHNaGZyVn8NSYdHvrumvRnrXbWUAw78fJZXDxRRTjxz845at7AK5Rcw4p2Qs5sUDUXk",
  "key25": "642LTW2v4c65aRNqodyExR4BtKKmY2tDGA9h2qMgg2vcuNA9VFX59VKLrMgGBwbyWEDKRFxUEF3mTvy6vQ238UKA",
  "key26": "wEWxKDJGNC7ZVAmrFka1CqkZxBL2TyaLcicUY4xtBuUmY9EWnt1hQgdavXVZdwL1To4NsLcr4cPJf2wHrX1eGFo"
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
