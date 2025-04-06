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
    "2vLDmNw2LaA4tUp6HLtz7wYJC2V5jqcKrSvHyACXd4VsFV9FiqE6FMED2Dthhv72ujzTBLSCQk1DtF4fxyXiGS5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtXA4EMjWB4XNfwhaoQ1DgHdA7R5gAkPzCFPLTHdsttCBJPjQZ4fhUGB2q9EfKyV8bRFmjv7U3E3cMUS3ZPXUYa",
  "key1": "5s95unTgye3JbrVoNL7dzr536nQYibvTCH5Q45YRyYhDpRhAQ9L8NBDaT7j1v1aWUB2N4jSzpYRj1nzGXg9YkDjh",
  "key2": "4iKFbeFd2xppBUvzDM7RzV5MZKdjzT5n4bxD1C4mgD3kwEbdSYvLvgGSU8HGukSGmyuu6GRCVVo6euik5yKS1SHf",
  "key3": "5rnuxZXtuBveT1MWLsVu5jHddGHS1WQKjpnjvVQ7E6AmJLoqRrm6vJAguLuQDzeYYsFoQLWYbHuGToMf7LGb8YbV",
  "key4": "2pNS1nLrnoPVrvhgVVpHyeGkJiKhrPDcniBmye2axkkbrN8t2PZmKZP8eRdkrPLosLV91zG8ZG8nXzyGHvTXJRf4",
  "key5": "5ykh3UAYRQM1B28yod13sx3b4JxP6zxLic4QhoMm17bK56JG1uPvqNufzbFwnCBpPepQ6trJudHnwxspEJPztMhs",
  "key6": "384QuxPDFQum24Q5ts7RkrJQn5xo2K8gAs7cKox4por5Gp551sQvWMtpjAdekmrP1hkndmezHjj8APzDCvcpaHKU",
  "key7": "3GxRyB2Zi6gKqYE87rkkKpxSfXLuE3FWdWq65nwzihX6e6nwPWo84scZqeMS1gFqWNEd84N7TbfYRtBtUQjAgz6s",
  "key8": "23E7EbsRkEReWvaSeyLAosZpYwxnQc1WFYkzg82YNSczQYSDyEXtzDfSrjrHUq53gx9MuBRty3R5cyZNAGCmGg8o",
  "key9": "5hzKW7Y9xoJjjMo4q2kYFmfdCpju27WqoSHzYjWWhaqEm4VT2V3h164WwDb3jEDWvJEuwcxNkp8nk3NvY4EQh68q",
  "key10": "63ASLdA37839mg1WUcdwefW88yvpS4uDNA8dckzVxAtUj1cBURjB4BEK77iTHKgnEwW6fHCvWpiTJYtByY6hRUpr",
  "key11": "5AmNfkmV6VwSpqAAwkscwEdD7Xi4dEou4zfW5jE773HZWmbx6a6DAZK1ZURsherUK3mryVQqWy5aDyj6DRHUTXKE",
  "key12": "4J8PmGiwcpABMgB8zzqwCn1a2Tdk1PEokiunz8XTJDZqb6U6yXNnPt9hkxZZYQCoJ7FhbDjFYWnvGTE25hSXhLf8",
  "key13": "5BpXDyxrRg8wcn3YK5S3WfTsBvEAkJsNCuoC9C9ZYRYGjZYDneBoivbo4xBQGiYGD3uCMM9uqbxcbYsDG9Tdnude",
  "key14": "5TkV528DqUP35M2qCG7sKyxA1ryCQRiAJDbuFutymHxV4hndSEPWAX5PFDgBpYS6wuFzngbzeGFLGunEoZyxZxC7",
  "key15": "azBzZqv49dwvUJcGYg2go6eN3JWJHhkMADB8sNfCK7rri4Aq7KtQH2jmRBFjVGShE5EXGostFDmidonCQBiKUsP",
  "key16": "4HxLPYNuuMkxdWV9688u1uu4Fj7BrRETrjLaTcL2G8CcVCEztKDPPYZ4nSqsaK6xNCivKLXGffKV1YKkXsixM4LZ",
  "key17": "5GQtjrCuaYmEPbdd77eP8HKv7YT8woMm6iZE65ZoC7ReeAeUBRZ1kabRfkSwp9BapLGbK52F9UBpGGENU3RCLyWe",
  "key18": "x4mzSA7XQSysMxadURAh2v6btJwNcuJfC159xAqzqaevF5EJLh1w4MDi3d9ZUyURtk2JcKmMpbzc6WHMdN9T8E1",
  "key19": "2fqiD5GqWMJuh9nFw7r3zydAR8kSsnR6trmCvmWXg6r8k5TAczRwdisMfod8KTVSmRzoRYtKepU3Zo8uRmRmyuY8",
  "key20": "4tEermC417ZCCtrPHLjyNajMcVdAkKpTfmySg2S4aozibvpkY2XwV2XPPjQStRjeAWrB6nhnjD5kW5mLLj2yRpRX",
  "key21": "2CUxYjL2VvdwPX9ujuWkGdb7Vv7LRd54bwBSeTtRhYR3QTXorEbkgWzC8iYhu6k1goEfiG4G5SosD8qYphRCJbGt",
  "key22": "4ePhETYZdgAzZ8YgsybZAJkEzxmbMpDFqV5K5p4FgvUtruzc3PWBpHAUGxUq36jByru2kzCSpYLBrG99DpH1Jn1F",
  "key23": "31F9EL1xQKUmvnmTu33NCjgZk7j6nGviGmWi1EJeaedfDsLgPF1kKLNTfsbbB3SEzRVxvKWaMaFB7bzeWCo99Dwi",
  "key24": "3EZqRDFhKkaWMxxJdxJnwKig4BrupUSThkk4TCGfUE1yoS156Jo4gbdBsRvaLQThev2BgiRg34YQhu4ynehCQmyE",
  "key25": "3vJ6JKwk9UtRYekME8hD7TUSVFQDSRrjHj6JWJxJpRfmcU1eUtWwR1RgPjxBfWtCMGn8saLQeV89uMqPAJp6C9QV",
  "key26": "4Zz1r7i2GpuHCTuQZmKxQVTD6VY4A4nXWEqmF1KChY6bXhE4pgpdjxizFyerXnUf7wsW29MDT3zPUrS69qW768Lh"
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
