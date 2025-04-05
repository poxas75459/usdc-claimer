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
    "4eCQQYidvu5CWBAPsirwSziu3T3xEKoAmNcPV5sTHX35gYsbVKoXfgp9DSurFgupZob8gS9LqhSNdTSYoVKWNRhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5xCEd8k6nc1ZqunbxiqAKksdtcdL3BUEKYBdTMVwGRnoVYevKd3nm6goryb8zUc1J29WKoYTQL6ughfuN6zqTt",
  "key1": "X5cP16nNT3CqGxkQAxTx7LdLFUfW5STWrBwdfJwXCCkeqxh14rvG9sm8dkutKQzmF4T9AgQ1Me9DrSuVVhzrTQW",
  "key2": "3S7xrTT5oj2wbXkJuqEMw127r21Rhcy74ocpfV8CpbvxnDoox1qGBqiBuP84EHYE1TfZnQxiRJWGKcggKe8DLEVX",
  "key3": "4fvx5xNRdoKzDERrqvCvMbXP3pRzHPFRitH3b4JCNJHLhjaZRBaQHczsTetLxXz4eD7ihPf6Q4NvH3q94DTqGL1G",
  "key4": "5NbGvUQpVetaaGnVETVNg8wvoQagsiYKWzduxKQyM8hmxfqowWMf1fmTgNcWgYN5R4inbUWZYDkiL5LHuMPoxgk4",
  "key5": "4VwTriLqW3Bbh2G35vJsq7hcfxsjJUb2hHcyq1fqpe2kQ5FVHawJMTPCkN2SDD1DqQR18yMyXsRD8FcuxRucVqWu",
  "key6": "2GkwCEYnYtWDr4NF76mG5G8PM3PZrDG3hpc4TNqJuVcYjQmS6WNu4t9VyMLmfQWvHVChewdHtaQuU34J4q6ctbrZ",
  "key7": "2JJAxHb5f2iFfkrz3A3HNaKu57vZzFkpzW4GgtSNCitPNdKdo1heDrF3VWhHc3Z4v5QZmRH1TsVj528oQ5fwaDHk",
  "key8": "2GyjPjBfEVr8k5HxmxWdTcnCWjijL2kM8Erb1qw97VbMKXdVKcBsYnzCzrj5rbxRYyNmknfxTtLxenhuh8q5DYsR",
  "key9": "37mkfGNHxTPehCRFSQejZayYPtMyqwoujvRgLCpCqzvUGa1uS4n2BGA9vxUrsksFDsc6xGgELdNmJ6X5egsKgqEb",
  "key10": "TqQZuwK9f5DBUtyQ9ro4ejPyZcWFiyn79TC2QeyZ6Ygqkc5Bbsb2i6esUPRPoGedgL91ho8N69128X9fTyJkhmN",
  "key11": "5hLgTFkKqj2Z2CpftXdMzXry1SZ8GcBx23uVTNBKMsarjgcPZRqvRY98tPnttaUeiiHNkPNaMe5QhCiZ1AX93jat",
  "key12": "3u4J4s7UasWgzWQE2xadQhXZoLKWNTbFKQFtDir5mnJeyXRWtnivRKryetXpgkLRVYdUUaCT3tzU3BZS1L553XPy",
  "key13": "2BXtpAFqNWejiYZaBdEx3MYdeMPfS7HRQ7gbikwvSw592GaJbu9fHuGWWW9LiXEccGSGmWcVGj3xJqiE5aWxm8Tj",
  "key14": "24nXipN6tZS87qVm1VxBcpBJ599H1YAQJCz5qPnc4id67pPxq1sjCta5KMpmcHv9Y5oi5Nm3ewDAyraG4cwoULgn",
  "key15": "6t41sn1cECtr3ePhxftRBRoJZaQbKffn5JFAreeyKpWVWuqi5rUzjgyZCJjnhQTHQycPcJkTQUmKtqxWRmQdXLb",
  "key16": "4sXm2vEZEV5tXsyP3xK4UbvzL6NEk5AyVjeNTPuuNcUyqRigrhXGYgNXKFVToZG6BfcnHRevFqshfxeivpEF6tHG",
  "key17": "7aWy2NBqmQ6AbJ5JnwSqWQTNQysTLohWvoUi2M9RqAQN5STmQQdFjuh64wpnkPnCY4fg9DjXMMT3Zk1NpCweQT2",
  "key18": "4rXwCMM1yu75eNsqPvfbCTe1zMSYREsR77af9Uhcn3yML2aXCa7gr4dLX46dWPBvLvGvg65VFskofydErBznC425",
  "key19": "2oWyiKt8Cqz6KP1KTSBYWCNCCWHNYG6kABCgCJhPUSuCaZQDAXov3RCbBiZMaG9yJoK93VYjT4wfQC4ef7G27Lyx",
  "key20": "KHZ3qpWEnb9sg7Y6qDvv3X8pkVnBfBDB2HfBu77XFcFomsRhGYNA8zD1h4c3yNQhrgkHKEbtigsjCna8P6HYjng",
  "key21": "2SUqAEvmKFXegzjmjFN9EeY3NysWSAwUGQh19ECogFXZHDb24vRaby717fXwVfXpVgpNJ4sqiHS8Byhv8AefyKrB",
  "key22": "5agfuvuGQQCuS5NcTPexFPuvuNJWZQEMQc2b5v2GtEz45YZnmG6C7qf4HReC6LfdQqyxaMU4DvS4Trsk9vaUzFHe",
  "key23": "5g9NR1G6onHuXSdRyvj6wKVS67XchnwkgWSYkaB6qcrguiaeqQBvcJnNzvYtVej7oHLB9wmvFm1FG1ZV4uyi2kPk",
  "key24": "4Yb4LnzbiX3M6CM9CqaoJc2hJF55K6cZGktf7gqu6qN3cgsZ3mQAafgJGMGJ36PiTTVhB6PwJyTsUfh7P6sQLnmX",
  "key25": "5MExdnj2xr2WLjVVD7aGAq2E92U7JvJ8QgLv3CZg1RJynNLvHzfQ1pBFSG14HYehbm6wdUysaLXbayZNEtnieV9m",
  "key26": "4UjQqD59SWqBmkBATVTfhR9dPhYgQLYV98Ak7fEbRvaSqPMEpLr6vvN9AMCukNU5usko5CepnrUqpXfSfnMAfXbT",
  "key27": "22jNLiw9aACL6GGSfmZHoFvPD2fev9sM3iktLbb9A4FbDeX3YJRpch1kF7iwu3NVZYX834EjAvdoraZ9UiqWXxJa"
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
