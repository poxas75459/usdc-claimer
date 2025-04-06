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
    "4YxVPEbyAmngWEgpH7VXqKX1vpu7jiTHXi9KAwfVc8SQc34nfvQQukM9ifpQs5qwg2YY7YxC5F7cfpVWxEYAuFLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sgqgHpiu2RJ2jJxLsCH5yC7cgXQDtr8CxRn4yWjgoUDodxtTYB7MZqqXKkwYuDM5MdVmaj3mVFzvLE4qrpN4GZ5",
  "key1": "67GfSxrk4W6FAspXHRqB1BVmSN6429pqSZswqMxe8oEj7NZFoaProTySbkZ7VRhceyY7U4d2VvCdyfKj6AU5eHyz",
  "key2": "5wWJeuc5Pu8phHqdBmut82vaorZ6QguxmVAZk5ig8nP87Z5NeVgWLM7J8F5cZd4qCiwFpRSZYgHTLHFc6WJpNYGq",
  "key3": "4ekxZLuF6ybUK6pRVxhr2jA2DfJS8wALYawpcnpW33tM7hKgTtGatbuqmBXVZQGC9rwbWPj3PoyYBjcz2bwNnN81",
  "key4": "3J2a3LWULDPczTkyJeLicgPQV679ENhqqvHYiBHXWab4DGHvJvXZxqDYS3HbVCdzC92t48kCtQukh3KtNLfJq87b",
  "key5": "VCY61TxqtDrPYtMSDiYDdVu2A5zCM3bZCDsyhaZbjGDKt3m5j2ufFT2qFQqjwvDHRzgJ2qhFnsZriWmz63SAayR",
  "key6": "5SKGHsrx88rSJ8mHUNQW2nZ1wp1xMNpnUvjGWzTeDKUpjErEgjHipYXYo5C7nverp2sVUXKzqsmCQRB77y859Pg3",
  "key7": "3zjBhFfiDxrn28t2vbNqoyhY82xaDP9vzU1z39ZFHyp1JaWh9fUUMPJ22EtDNaNL2FyfyZZUHw489QnZNTQGZVwY",
  "key8": "21p6PWuBUSi5Uhq1Lg1kobPaWz1L7W62x58yKy7gcK52atT8sryQvg7MCnW3MNxAauTyMXMAJ6WMf1KJC5h6spTp",
  "key9": "3HXUCHUb9juyyCHa2amQeNwuWJhVEdiW3SBafa3dUkmTrt7fWFJtYGHtRupYpavzVP2d1mysGixq4CBf5u2uRjKZ",
  "key10": "3wHhEtNCrC51YVp8QyYaVR8C6zTiptJeCvmph8trown5bj7khpDqFUnJfjLbLPV4oo4A6QofpgX7G4rFiHyrb982",
  "key11": "ENaqnbem7Dp4BrTMCiotqpNhamsxL8zvPTdUHaKi3dwsWH2Tn4wZEC1RdHFS57N7jpS3F5Kwg2aPp1vusWBRjhe",
  "key12": "4GxxuhPoHn2tyPoaBJMEkv2CQWJ1YyKqbkSnkhPiEGJCRrdoKpAcBxzMjoZz94JpQ8R4fFcJcFw2Z721AM2fnUjx",
  "key13": "2ubsLnTDFX48yKRdQqZhQ2TyZrQGmZ9hyMbB6L15UF8k5U8kauvGZmqoeyojrYpSNdpxL3Bss6Qt8hvudBofmM3d",
  "key14": "4wBFUCzbsbmM3fE9toZ49iY9ypjpYMgcTrbzrAyaz4NVL7c4Mym9GN75QhDC7GkDrFNrvbkLPx4VYv3FLQSvszyp",
  "key15": "3Nd1oheByd5AUwMHy5QzM8DGknDRqbyf2vNEJA4JFuseDB2gFgcuNeKjNVVPc7vLEpKUKE8i9zCRKyYHngq3wrpt",
  "key16": "5VD1Hjtii2Y72Gbivq3eJrf7M4f9EtEFRJoC2JF2e4TpGrBBXxKA2VGTFmFA67oYwpQU3PwCCMMkmvJtskYHAf16",
  "key17": "59yzAScG243Pod69CsTGojCbWXvQtBmZp8goBNoES878M4ShFVQ2awJf3VwMsnPJeBMvKHpwNNCgggArkCeQWjSN",
  "key18": "4HoMMZVH9WVzUnykAYFSrZDkQ2Wp22rcozWE9gohpk3LaTg9Yjegmu28gMbLaL18QucYZ7GipRD14iT6yLXYsVdG",
  "key19": "2P9s7oLyUiT27AfFrQKgVGJ5ebrGUKqP8JCwF6qsSUxYjAnnDUBGKHfP8DPu9z9aKwwNUeK4KkaUgoqzLshtN91j",
  "key20": "4rzqED3eGwufVeE5UaDGyCSBY2SWSB56JEKEjDJbd3VCNY1BnxhT4JxEZJFAhgbTdjJR3BESd53MiR4sZ8eXnP2F",
  "key21": "4VqX7xREndfiRYFmMRqjz9USqJyicNSMK61TVr2EpBA7TbDTGUvAHrJwn9w7iqavSVGbmg9vNkoXgh5mB3jGFYcZ",
  "key22": "4SnYRGzM3eEGV1s7d4UPyFXbzA8cSVhwz8y2PVoVENeUCHPspJDJxcN89JN57WMtAz4YTuXYBgiQz7KxYLjx41eK",
  "key23": "aDF3HRaubjAaCVs8gdQErHWbQM4Lwav8UutQLwmQCgckDSz4RKxbpiY7gizRjBa1t5yTfKKk4btG9YCcJ9kuhpi",
  "key24": "4bfec8hS8ZhRW9XYnye4emxFxvATr6scjjd48TW5dCf2cRQkffYTdb8SDs3scyWkLUqxu7KpDnG4BaF7aVTquhjX",
  "key25": "4Yxh4pVio6kZJrBy8znHHKeseWYmswxF26yhVhw4xjjeXXEJybwhZNhsrpnfYYEPNMtc4owkTdkmQx8kEFdbDzhb",
  "key26": "2pkB154yfSifQpkS19nE356ddpRyFa7KozZK3CZxJL9FLKvp1VnRPFVMFje27WiXqnHAsLhTYiehAChwQYNDwveb",
  "key27": "5K9vFA9t5tSQFPpSghJgGmQrkSjx8pyK7EyagUkJhQyucbALkF7hK3oE8kjjKg4JNinT6pU5CHVP5pZ7R3G1EJrc"
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
