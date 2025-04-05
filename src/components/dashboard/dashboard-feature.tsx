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
    "5hmJKwcRow8Q6KPpE1JArbDUHmDmr9GnWzaenD6vgNP6tq5eUz4g1cwo3dqp1VLjJ89MEg7nQEitsNQtDyKZ3v6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YsAUt7ikrUfKE5ULLBn9gvjJaPMw4qJ6QJai2EqBbScBRp4r5KGAKPiM1dChiTiDmG1qxXYmwkEaMonpJidTKMK",
  "key1": "665UWAQPDjF463Rj1P2J7XzGbFoxg7f5fWVoNQrS5svy7XnR5ZfioQ551TAHrg45n9GYjDGU1YqH5cL6RxsAZPNz",
  "key2": "2eR15hwgMx5TDeRjrKShtDYp2MZnGSixHGb5Txh96UvU6byUpKry6VY51NDszQHdPo7fg468gyUYn5FVLjWyMfkd",
  "key3": "sT8oSwuh7pH35hp9fUMQXzfZSJm3p8qZC5VnJT1UWVTDwEr31pFAYRcQDv2zu5UEWsqeKH76hE2umn1w6nDczxy",
  "key4": "3AAV8RFHyD7iX34qDhyTZaPGbRaL1TMkSahySLcf4CtWtPAqNRxjmjyG7gfVGfsXCvNrzNCb1LiLjUxmSQ8smTH8",
  "key5": "2crxXBQoF3gyrNZzphz4znei4ggGJDGi55RyeuZ1NwYKZAeFg4Sjw4cMcBoPAtJBrLroobTix21ewGx5HFzA7V88",
  "key6": "3nX2wt1eGj9pR9ZzLtRNwNPEn4uELFKZ6ZgroiPewoDZZQNc2bZCJ3jgPjecSd7KdaiPM1U2DbESabSVveDbH9qY",
  "key7": "5UztTUTsEMnAqtzfhrZHLzKgANgmrhYpwNetjRk7hU5kA38p9deaDXgCQxp3DNujLQe3oSzCRyLqNwx7twHMdbN",
  "key8": "2n12ZsGF5qFi9q3eSNL9QZyShE5cMuSpgjJRRpMEjofxWp78HmpeDMs8FGcQdZJ4t2SiT13rtyiXPy4UnC7jB99g",
  "key9": "23YEoYb9K5NGxpEqaReRLofffXEcGnBxY2sVn5suC7bFVQ8rW7Busfh15XBYfriWZVVmGorNH6zoQoA74TAr2RZE",
  "key10": "3RhJ31Vpg5JwmVPBYUPCQnmE3cavuwa4LhXbw7GBJDUeYXRSjicuPbhCVwkf8ccC8NvLLY26CqZC9ZJnH8gKp4z5",
  "key11": "62pgQ1SJNAxWFTk3PBqtVKtfHfX7mtQCPCUWKE3ZBAiK6mHBHwDjUzN6yUmFDQJaAsgnb66hTm4omCeQpgEs16t7",
  "key12": "2MBiMaJt6quFYe71eoXVu1avAa7PSYUvG8kVUep3Gob6mSVd8pvyTsrf2ASr8ZGvLH9G8HQbbvaZZDNEXTvezoqQ",
  "key13": "3x2YwPCnaZzQ4uvZzpQ5GkGEjEYZ1Hdoebeuhzn6EX7spnD8NoMa3nnHwR3jBnnU8M2jP6LhM8j1kHtgarWNKfgc",
  "key14": "3HtwApjVDTda5XL4APyMhL7Z4m2aHebcybySiebKf4B5NXbNMD3CeJeLXfDDAPnPQfYDKQnrnK2A8JwjbYewr3zA",
  "key15": "5qaAGH1qAS9c6ftNerJuZgA5JRKLtdgvL1sDbaD3mKNrDtdnJ5B5vSQLZHbzHbWpzAPhAp7Z6pzpWCL3f7R931xv",
  "key16": "3mkmzn4GrTMWrw5bmgAfg48UGHJyZjecK8Exy352UyCVFJYVDL1ByPEf1jcWSDpGHHKjJAYG7XSZBQfprLH4K672",
  "key17": "2jYEqou5gyRW7KxGeBCAeiU5GaHD38kdunVoVokAeXSqKpKBVGjWgji2wwicXWDMFfnVJBkqXCRe9q59omEJEZNK",
  "key18": "5S69JpqDNfWuCZk8gL7barfa1Hcuqfehf6RDZRYKZrS99eKGofX27RGqhFHSdxeqoedvwr2mnzFyTdLywvkKCc2q",
  "key19": "NceyqZmevuuhs5amegXtPBthQ7kwtQz7J7r41FY1EH96zu4zVVZJMgFHizTh11v8awFEqLRoWEGnPMGGMDT7nzv",
  "key20": "43k9UYsQf8VK8o1LJueuHJSAnPxBu5Xpvi3wkRgMoB5VWF8U7t1MmVuVTL2cVDGuDkmxdKUv2AZGD1muptcwpUsx",
  "key21": "2KdrsNnDEfjNNk2HdmGhxMdYem5vhGuWCPRat5y2gpXBPpYJSmQy3Tc38AtYWoH9ESX61JhW7eBEduBp9MFNqkHo",
  "key22": "3XpvZsKaJ77qfZXPg8MPgzLLpAH57d3Sa9A7YkcbSUKEch5aXjU28NKdtJXSdzXhWwJ1ZDh3hTf4eV1N6urAbgv",
  "key23": "4mcDEyPiKG8RrEi3pb1TwWzTedZA6dkvcAf3BA7ocaX4F3C79Jb95j9XPtcbJDPcQGY664eXAwHM3a52q4nXYC8M",
  "key24": "5k3DxwpXJyKPAt6BWjdeDHpVgeVrBwBr1UGL2RzBCLs4P4yR16KPqERJzihkzPsff372bWpKHdbtf1aYTM62jG5x",
  "key25": "JApYYfE6GjtWvdoKEPPfnDBCHCgDJ6RiPo17EFybPGsxxYkeNHuYwcWeLTqsxM9TQQE1X5C4irZmYFX8e5Hmjnh",
  "key26": "25qygePW7uPDJ8gauCATRZZjupiWASUeVUnAuXoHVHiQigW6WgvfLDYgvCmtP3LKdJi2bb7fvdyN4HYKKo6Gx9dV",
  "key27": "4wxJBvoXZzfNkbd12XzHpAg2jVsHXqMMb48rWDntkqULkwXC5Z2MBk2fx29qPHBzCwqNbt9dK818oJkLQcMynczG",
  "key28": "5foootxtkA5CbHF5K2debSwaAg2bF5DJauJoAUr1hJcV9pNCd8TDpJ53QKvfeiGu2vYtAwsnqL95t8MABeKYD1V9",
  "key29": "2ZmUoUzoKUZxhvUX4X5o2Hbc8uKPTFd3HpeaFdNC6XJGbThn9RCXmUac8N3CawD14HdzoD4oNZWbrBcDeKvKprgQ"
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
