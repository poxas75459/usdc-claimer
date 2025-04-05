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
    "3BgPSwXGTzMzvL6bg8wVLbXrfekSQ8pdkiNhsJekxkKkhnYqyUKcZHaVukW8Se1UXSyRN5sjrxkF8xuaWkFbPwsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYaZDKPABSDtn7TtvEjfqhtE672iiez2QDquzVdBPxGL37ajs2fAb1TbvXngHa2Uqkj2bi3rpRR1gjrmCJ9r5qe",
  "key1": "4WLchJuCm1xU8A4BFjNNAWQ5vLbriDgJEqr1KruDfA1heULW65oNdBujcsbhVXqjrigXFgUvfzfqp7xH5et5iX82",
  "key2": "emEjM37dJKbxfd4XwrvRi1Muie6uqc7YFHTGYtDmLnXDGrvdKBgrSi5bYmATSfz71AxHiGWrCgbPgUtKBCNXKpj",
  "key3": "26t2QeDJRUm4ho4ytDULsFi9R7zEfGKheEJPz3kLkVvMbtNbg21x6QrpRga9EEPpC5hazkxjMDn4Jm4kymb83pku",
  "key4": "4kYpWwKt7Bk3DVUigvFk8L65xcT7b8pmCuQmzjc79WZJVuZgQMg6A4NuEXput5eJwCrLw1WuDURKBNtroivhh4vn",
  "key5": "pSMVtnUzW1vt1iZsDh4y67esutHzF8WQ4AvXYWZtmWzctpAkY5XMdL5XXu4kKWzKCokXzcSNxbjcNHGSiMkDbjP",
  "key6": "3imUV44Yfn3cPtyj9omL54YXBuLYjuhtznLzQyQJ6RpXBwRbqcxLBb9fiAHxsArr1JjXTZA4ygYxCAkuZpfWzAuG",
  "key7": "4kgoGxv6s57WUSY7bCrfk4SDssAeotNoR5BDLioS8i1uNtTB5pu9mSWBayfiWgbCXyF5grKu1TQqZQwiChFtYh2Z",
  "key8": "48zsXQHgNRvEi49gVmYmgWRSq6tih2z6FKYvJJQLiccoA7VHTDoWoFvVkRcJ2cbrVVcs9in8VmtdNeYV2M5UeEsY",
  "key9": "25emNsyjSNJKWsPsffVvmKxT2kNzRjr5haWpo2cK39reprhgoEuqNQPFYZn9xWCH47oGQDMG5KaatryzNxu8vv5f",
  "key10": "4ESFRn2uvX2Pu3VrM71TStDTMovnRpENzjEGWN3jieXd9Mu4dSaJBeJMhKgRfWUK9znqeDzMPvXtiZf7pGmvb8hV",
  "key11": "5v6djMieCK3zqu66G4CtEapqqNmiSprutHzzLF5BrZPjNzkAY7sVQsWnzzc87hRaV5KGVH6wELAGN3Drwr2mfQdD",
  "key12": "2mBz6D6oERCX9wNDCv4ujC6d4F86xmgFsZqvQ6Hf5xHSVBkvp7QjZqGTYLf32f8PVv2W5uFzqRctiVvSXBrtoy3i",
  "key13": "jYWzu4KSPkydSBj7ZHQnpx1CeifgmpbLob5e3Q6qxn5GtX9DtmU1ArGvuR4kHo4RW4AYH2yphWwKdsxYWHXpsV2",
  "key14": "25nDPRHJcqonesSPBM141wMXHfq4mKwWzan4FmPbi7nG3Jt5y7rEaMtLGpsBqfVqyqBsR3rnDM3uu3Cr8vPFTm7s",
  "key15": "49VoQo5FuN8VBZSs9uorMMXi36cthZ5wwtyhVC63RT6VGhTV5ENUbpzWqJCuPreGpJ593xZ68BGPojHkcYieXvai",
  "key16": "2a7Le6upjrZzfhVVGJ99Qy7x7WZT2N9QRybVgcoDqifFfamAQ9QsYw8gvY5e4WFcA4rjQSTRLzbyDk8PZQJy9pTz",
  "key17": "5CnrKiTEGeFLXWf9CpffhW8C5yobT2GJKCmQy9F9fnyuMiwp4rTjbDeLT7LifWRoTGpkG7126it5xyorMBxgv8q5",
  "key18": "4256RQ9RozpKjL9QAz6TgnGhmDKESXpW2F4N9W5ma7xY97XDfAQ2jwQW4ZtyLVyXcBjM4BsDc3rPh3kMN8nKBU2a",
  "key19": "CVKiyazK8ZvvLctTHiSd77Xtwz3bokfF5bHEj1BWa5jHsGUVkWsT4FwvyT5v4TZfc1Jme8Z5ckPkdZFNNq3foyT",
  "key20": "2hmjBJ3K846eZHqC3T9rvSJ5pR4nEVLh1o9Z3egCvCGJp5SAYwUC5rpABYyCHkS5UBTXUze7324bHnUMLv1viciY",
  "key21": "3XkpqErw4Vq4NbgR4rKPh2XfH2mDo5X2udBRGtmVuArXYLNnwfj7BBuvQfuKEqjsmCctzHYtKVE94PCpWLUeYL4e",
  "key22": "3LvdvQKwJnTFZB1KZx9H3nja2riDivdCyJzLjbbwUj8uEnk3PBjwkde6mEczZ3KxMYaHM8ZveZ2HxAK9pePcEcM7",
  "key23": "37Ww3MBYXRrMvNtTVVLY9TdSbWXDD4mdwn54gSLfM4uVS7kUAMnetUEKjzmF4BFybkbwQPrSiJEojrxLX2ifReaU",
  "key24": "554W1h3CitnPjHJbJ7UsSBP5v6bchSPgASbzjyJcbHKKV8mj38iZjegcFZLtH6jg4hEkxUku5ibxquMaSjEv7eqA",
  "key25": "2X5smqTFh4o7YzvQLqLcdxuDhsVvZmZnKfbrB2bNYCAkCMqN3xeajE7Uk7qUMqWrqw66n5hwekUDkjvyp5jikXHZ",
  "key26": "3ndkj7CtX8KqkH5DsnqMHMmpgQEbJh5UW9FK7CUYhkBBmvig96ro1wxkkyov3gzbFvBcUoikGkThAbXc52qFkgnm",
  "key27": "3BvbpjhP28sQPWqZjDAwWZ4fQGCSSDVkVe2vpqj4HgQDvMwML8AnJGTRYXv88hJ7GLMH4YywgmenSKZmMTDeNQvd",
  "key28": "3BzRgonjRDUSSN7wPJ8by9pNGqrvx6MVd2UGRP8vrEXiZVWPanVPxmcwK9faKXdWfFkxTQRGy4Qe2sZY3mWMwtXm",
  "key29": "4jvXi96BLjcWby3MBK1f8BW7oBNn1JpD9CTqS1jmvriXv9R8CxcLTsU4Q7sCq5g2wtcJNPLk31PDjF6d67BsUPq3",
  "key30": "4aZrmHn2oqsbGm6f5xEqw2f2a7xafdPQpG7g21MpbyHJNuYxADF6Z3VQcS5Cx9ByFQ3sehNsixAhkfWFqwJELF5V",
  "key31": "214xBqde6J92pSk39UxKPH5nkTMEzigRVXzH4SfVfCJXPbmKp7GZWAykAMkPvM2qocd2kMUwt2eu21Q8dcjesNES",
  "key32": "3JBiw3wYojTWfF9hrYu72qX6KwFZR5vLQguF4K3CUK5VGE2VNJzZcET4b1fwkTX1Vi6hHVGuQSkNFMevLncTJowW",
  "key33": "5cuTXkzFEop3SxeSCX4Ht71Uufj4Jetc7TmJmTFUHAm2vKtFMUR74vhk6dLMHorDXSP2pvVEEa7YuYpq9cSLXa1X",
  "key34": "AhbWf687x96eiuyTursRFjYtsxTRQN9zdxBdzu6cTGeAW9W5gzLx34k3AkFuw9E6N1RT5cra8sXUCVACVGz2AG3",
  "key35": "5ncSrNbCedttAe3jcD3L7XUzUEghCmVchfLQ9J8tXgVCKCkrpaZFxwKDfubhD5tT9rgXFGzJMSbybNbf1kjsVQEW",
  "key36": "qLFdQ6M9hrJdU2Nk8tY77AkC3HFsihQ56UX75aMGty8U5BH4yudohN25paCD8GUTHPmmspQGijxVGGC4DvmfcEx",
  "key37": "4bPeXwsgxUVEnadJi4FPi94zgV2AkcNFqPHQVN93YYDeG46hWH4CTrLTJFqwsLLzxud1afpyo8p9xDAZZdduozn7",
  "key38": "iejSa9Y2xUUhh1DLwA6PLQu7r9ijv3mihNLDUbCMf3y2iwD31y8yPKFBbrDRDXN8rdih7WfzWocznpemWMGtkT5",
  "key39": "41R5NnVUo2Cqfqm3VuYveVHSwUaHNfA9tr6kThn2e3Hk1o7vcYX3XrQZjmTmn7DCFAKUfY7ax1yDxYvdgfuhbu7D",
  "key40": "2rFhV4nEr9kxpYYeQbq2ui9hEhUcHBgVz79S6aAY2duij7KD7QHoApUAsRBag6BHFusatFqmFgFKBnBzB7sKW2vw",
  "key41": "4PxobQJieHq7btniBb8Q7QKurD7ns49epEVEb3be4nFdqe2Ft19jN19Yfbb145nhnvQ2f64VXTZkMkEimQg1ndEc",
  "key42": "4YHCpocoLSfvt7nJTJZSLb7RaFexvToSogW3izuVz4nbwcZvb1hPwztiVjC1zJ66PafxycVzKHjLS1WkEh7CbKYy",
  "key43": "3TRC1Y2LfHStkJxECoPepaDfwTHFARZhtT5NYkCHevuUSVGvZLKZRdk3uuhBoxBqddpW1g1eEXq3ZfEuK4H7F2wE",
  "key44": "5iUXA3GWAYXeaWEd9UCeY6mr5cVXHjSczmsaSoGEh4CPzw3b9oXAbzgYonXWQ7CUNy8xiun3ubVA9sueC5mcw9Y8"
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
