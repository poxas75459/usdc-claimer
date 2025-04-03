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
    "YC9P71Z3hknHVrpgqjfTyronmhZCaDfL8ZNq7U1u5MNVe4vT88BgtHxR7uwGj67J1UaP6p9LNkpRju3pVDDfgDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3po6xKj5Rm6WBq7g9m2DzGRbpmtTFBmExu3UFDAvkd12rcF6fDiHN8g48zYgSUTiutfSmmrQ2FZhBgDJH7PfuJch",
  "key1": "4NHDwtnsKbtugT2odh7W2FtpZUCvoqnvQL71kjx2Y3CDLwfREujEPFDe6VyuJZfrpo2C5SC5kPxz8gRi2YMYrCSR",
  "key2": "5hsMA2oU98RfeoHRqX36D1SrCPg7bTWEgkVx3NUZ86JQVFi2c4skD62KP6MMSFnMM7z3NRGS8vkFFZ9xnzz1j9z",
  "key3": "3UsJGHAhqUUyUSzRwXSk6KmnuL8hCabcH9QfcUUbAUghP2Kygw8r3SaEqN17g1zAfnFET1dMVyWQ5WvsxLc2F3eT",
  "key4": "4uc1n3YpVzyTZVkY77sayDSTS883aYe1fRBpTATUJaaoenLfy4yEhwfVYLDpyAcjQ8vZDz5CWEzCiEiw9AVGeEY5",
  "key5": "353o4owQxewiXduEPnfRFNzgvo1hC9x5gKik7L7XdKxsf6ptZ4d9kb3XXTrREUpR2LDJDT1t2jjN5EkUQEQ9mH3e",
  "key6": "3BoRs6G4zxCVUFW6DH6uts7XRLo98v9GRjGC1tCaB7QK2MmyreSiHpdmo6sJVH1QdSPR911zcbamVAcgzrSQpGXw",
  "key7": "57XWSzqSMGp18mpu5F85zAxHR2er1mNEaUqiGrMrZkUVRxZwk8hzVTmhLFxrn6KZkcyYzqGkaKznSRJTHs1a1zqD",
  "key8": "5juua8KbTohpfoqWxTKe6squ1d9T1oqeLpSNEdf4UgZwEvQQp1faLUFtmPF84u5gAezjRNUHAKA6GiBAM64WzMim",
  "key9": "58JxEtrYVbN8R3ACHQEeMNGKra4FYWzu1ihd3Ze67uknjveNK6TqeaNLUNmswXPsBaJMZ3YzWDv2t4mH78AfuhgW",
  "key10": "26uByJCxFUUvxvDeojzfYgNgQ1f1ejybr2vDd9pYvizppmD9jcEephCGBEWnLFEsMcaprEBmWSH2Lm9713L43BnL",
  "key11": "5qacXSs9nm7Mdc53y3yrQcoSfJViBNmv3o2mDtq7HPekzH3Mh9zngLmfQqrbi3qLhd2Z2z4WUhdr6joU5Dap33z8",
  "key12": "4xyeKXsiAHYV7nAXR5NmPb7mcWU4Ndzs8DzSGaNUWNDuwzLjCFC7HZTa2KMVR5sQf7eTz8vn1rFYh3TSkmUKPvDH",
  "key13": "2QhF3rJ3v6w7xyWccFPjE9Gftq2ZLhKPUGRJMZFszEjGo51oa9wnnEZMQjundqo5seu8xSxMehJKWFWDt91GUHay",
  "key14": "4RBRPRaosRGzE9h9J2Zq3cByMvRPHDmvTwyeV9m1BX28nCHaUb8vsqKopw5rrU4i6M5KQpC4qHyVGk9FQkZvFK7p",
  "key15": "39btLhkUdWm4TGiXHBJtNVYKPjiXiyS4aBboKoyYf6dkt9AmryYiPNZA9wKj5E7d9k6NdQGxJqYitq7KDBEQEiCJ",
  "key16": "3ouNhJjTPakTTGiqoM6mYTTL1gqvghQgck5nSd19zqpE92hsJmDesbkvSJZjQ2zkjSa4MCEn4eoTETXLzQ7Uozks",
  "key17": "23QnTdSmf9WVCS9YkoW8BPGkKC9MG9P7jx4ygfoxQ3f6rfJ4TmCG8Vjf7GPLYDFJuXftfj91KyKD3oWnATVsfVc5",
  "key18": "4dvCvUJhkiLdB4AHXRCXEx3fdHipJDJHoDHzjoyGDGmkqFdCYScWkLfoF6aVeauxTDdEB7qygSDcqSERDGLuVq3d",
  "key19": "2jDpgZ1MDwPbhBEtNc5ZY8MsevkBTHPRgwfKHvw3STdzunRLA3LsMvrm6BrHiUHHsYatXqPy2osDuLrR7F9M8Njt",
  "key20": "XsnrL5gK3yQgxm5pNLLAyZ9d8bWmXeD9YTCUS1cYXL6ijAiRes5uoebouwxvkwEcAL7RnCkCFK9axn2CXQHcMN4",
  "key21": "3UoFZUP7qhmFWTR96hcw8zpucCrdQ8bAzSdc1g3yRpNT676nrFbxe8Y8yC4o27ySRZwEze9PD6vu9mNAQwcqr3iZ",
  "key22": "D71Y8Hyiy2iEYDix3VYCEgFXD7yvmAfRjbr4boe7AkuVowdVmUdGsvwpea6w545fqLb6RPjSi9WrV2GS353yGnE",
  "key23": "5WoKNoNQjvXUtW7M1UdwnLYCKdaTneCuRRFyyt1eTZeqp2gSDpU7kRnYuahtxn8pSWnEFh8fyEPmSSF8XWptp2xJ",
  "key24": "YKnJz9mvRKEeKZPFz892X9ycXg7M3xkj3hQqhjRycyE8JAX2UWSkcKy6mUG6QDK6fzphYtRAZy477VG6D3uUjFh",
  "key25": "2KwzprXXdnkm2uEMGQJYvy8ERgJLLXdme9KK7TqshXtVnzFDkeZK4GRoTvt8p6CyZE5hxFbzXZUCw8PG6xjuc7Gc",
  "key26": "4wYwXDYbycAnxcZC8NzeeLcgAtQUjrXfNdqbARWidmcLGb5vicTuV8iHLUJmRi3GEHf2AGT211xByUYUXvR6oh3z",
  "key27": "2oyi2mAKVz4UKtz2HMyExzA37haPyYQYgBRMPxNs2dntjNcVedK7L7f3QVNBeX7yZBLRat8aExUamKg4R9mnCPyW",
  "key28": "3hrvVbWBkZzQp6mseRAAL2AGvrPw3SWAkKTBZ93eRpgKtzFvdFrqSuKonW82DENWVKyW23RVwiRUo9ZniDhABMkX",
  "key29": "hnusxikYX5Zbn7QAWjqGvZUoBjayrfccDxrzzj5n7muheSsoeCqrwrhakmHRH7SerUSoJpQo7ZWUyNdUk6ZEMaa"
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
