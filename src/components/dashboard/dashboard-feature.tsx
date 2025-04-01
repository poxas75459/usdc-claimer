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
    "5sHCRk6NwCTq6NXSak2UyBK1jAjdqgixdPHrwqQvwXASTiqFxvgb2mNGktXuRxVRW4tQUxLa9vAE8c34vMVXRGTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXdQQLTEmN8tfV1fCCiyoz3geHCJJ57WMENyxSddvCKMFMNeUhW4dX6xJjWNmBcMKaXTrAKqbRNMxNs5KfzD8fm",
  "key1": "56EVKsXhGS4h5SzcMb1ZDfdhcPM2Mqpd2gLrWwZPXojqK6T8ie74bKh5ReXiBJBD857vnjoSSF4bJe5pLb4sT3Wc",
  "key2": "2fb6keSJ4ymhn5yM4LvNcXseyf9Z3PFPEnf6ReWX3xpYwZMWLEu11rbrK5Qr4iXxZSg8WESPwvXdDg8vRzai7ZP8",
  "key3": "5wRPrcK9WkVEHtZKNhSioSCGaZyMLcjCJojpXtnDth7iUBfooDxagaSCcfmUCfj5sJ86Z8CBaBU8xp5qZ93MC8rz",
  "key4": "34MZqNa7en4pkwzq8aaV7XwfGam2pBpJVhHivPZj95WL3HGy4MyppnctKjR41USzWgwvtWyntKNG4XzYDjQBkaxv",
  "key5": "5AbDmUbittxaqavYLhRt8Xjize5voYNoo3tWLP3phobe1S9TfKgHN5b57YfCZ5CfmjbSkvdUDeydCnnfhgTCoEDM",
  "key6": "4mBbTSFe9DMajq1L9Vcatwkxtbxf6uJDyfY42cmWyW8gxwQzYyPPhbHivX46dZRRFRR5zhk6z7PKJvCE9nyMEhQZ",
  "key7": "52KY54tTEEQtAFi7xtfHtHjCiv1g7cBqh6Ncwu6tLpG61Nwbk3gxMPQLf836puXPbchYtccEv4azie3JqKHJwhcT",
  "key8": "3gdzFhkuD38tuT6NXpD3VUsXCiZZeYZq5SHP2jJPsHBbV8wu9mtGRBss3Hf17rtoXqjY3Qeq5cRdy6Jsuiha8TXd",
  "key9": "5vjphD2ZArgRtLGEeV22gG1TotHNJNvu8jKeSqZR5UrEy1nDAFowfi35H9cLbMhgVeQ3SVPdk1CzVAtJhDM8rZfg",
  "key10": "2psxx52ifpe2be2W98payAq3aDrMy4ktYHjUMkfwb7hFga9jqsrjoyVGfhy7qqy1fjvRGyxuVhVXNVCDhKeF2msb",
  "key11": "3tQvEfWu6ndykt4r3PG85YEKmayKWhU3bo3W36Xj8TWhw7trEEkWxV8vwKTKgm9WAo7LmpYq77Y5XqW5w9gPedqh",
  "key12": "2c5V1UUcCGL2CGZZSXFUURZVYnqNZ9op15UpSt43FGt3QXaRE2zk5i9RoPABHY1f5Y8MLZWWb3os6gG1c8aL3SKo",
  "key13": "5fH9CR7ji7KVqakTeY8AjWucbWfeHASdvnxmuirPV8e2ivDx6ySKnRELbfFd7YqAvE7BXcSivviEkxtRURKFqUA7",
  "key14": "srJHhYg4vrjVwY1ktKMJosVftk1T1X61jjJ5wgZj65TBtfGoL6v13qZBK4QnExju9WsDknNyVEfjuzGHaqq6LhE",
  "key15": "2W1BsuvFQpxsj7sXjLmAYDCbuHVDnyRPGgX9myFS1pDk8WFL4HX9fCdCy86dqfQd1kR7mzipSoMW7pXa3ZfC5i2c",
  "key16": "qjiSU4w42NoM7pqoVttzqY89NqV3abvEfGA2ShRunC1chXsQA6sriJU9Sd72NzXHNB4DcuATjTQ6NmXc59VJKkw",
  "key17": "2fHeEDqkwGGueGcKi9SgURUNNY55wobH3qRNXYJyTPS2xGydjYnv1tUafWnVaosj9c6qwRKtUgUvLjt9hPXYe3Ei",
  "key18": "5FavMCNPKUYg5QseHh3mwRyGfhb8PiGgL4P777RBKPyfFWJSRGbPnfR9tUqBek2iAiYoK8iji3eUSNhp8xuhcq8p",
  "key19": "5ecTdunEDHHtFEpw7Xt2MTa3jRqY7kJcvuAYtESHPs3xwjLLuqqZekFwMJJW4zKbEQDUQ3aX4XegfFi3ZEcEcMVA",
  "key20": "5Q4kKqVuV7Ftf5HAzL1mSfAEo3hzey8BwbcRBU6ivxQSKZhFJzznys8S9QDqLqZhGxcdnXGxRVw9CT1Vm83h9Bg7",
  "key21": "4LxeLC2gs97mPUhx6sqtQPp5h3ESK5ovdYqajpwgwpN7XCAwDnWGd7iUF9eAtswN7Ez8S6C13zcdeWJdyuVjCANR",
  "key22": "2wtgQP8brFoHHx6rnSBZQXSyx4t8DLNgMGXdUGZ4BcasrcYc8fv9pvgf2WKD7QkLhEMc3Axq35k3zJYqaYSPbXwM",
  "key23": "LrTZdBA8LnC5doUpQ9sfQqKxSyRH5EvhWkCpLTn1rH7ch5vWfxMvbXoyZqFgSJNSLFnCJLqFzJeohe1CqDJ4Bry",
  "key24": "5Qbn3MU8C3inBBQrhEGKwBohgbcTsP2dFjq9EXdNtynrcgiJ35cRAPCLFz9oG7pMMb9Jup2zuoD8ea8ZTnnouLDg",
  "key25": "2Yc7VjhWoFMV5EtYGEE7MgFDiaumSJjNJjkGhpLeYTCxjwxuEDqtxyni2gK4LCSr5SWVkJ6emXfYX1j3dhoznTvF",
  "key26": "3fuYUtF8EKrCaajUK25CTrovtaqnUJJ7Z3CYjQMiJQuGrDdXxsoQU8t8QaCRNYRSkyZ8qd2Vf1NqxnwSCaXRrvjU",
  "key27": "C2myzv7Jg8BbV25BdMrCe4kiq8wVo28AD1QVAno5Q7mYxDCt5Y5wRYY21CCAD6LTZCTNf2sq4puNNtVYtt8DhWu",
  "key28": "5taivBUk9rnS3Gdnbv3wwxhPqYL6kQKhKPFnEMVPhiuvxo1GWpwBSZFFNEKVmyLT1cnz72qS8i9yweAxTJ6QCd6T",
  "key29": "5vZNgrEL8yyf8vrBpgfsK2KKZh1kJyxZAMEQeCDHRAem3aTYQJi7AdL1q9JSeNifJ1cJdWpWzPSqwp7CkhMyc7rs",
  "key30": "65hUihEdR6Ysd2gnLPcaij6BdDo7uSH9JyKwhZhJyXnM5ErhcamgwX62PQMq9dXMBgscgU8va3Wnfei9pUs2qqTK",
  "key31": "4jdKN668xNoVGYdBYTYQu13W1WGRjSshiPXHaWdK7H7qy5SyoTFDpasSyjHZqhsneZjF9T3vauRVyY35rzYSXmQZ",
  "key32": "65BWXBABP9TETYTHCnZWTv7CcpbkrE1bDyZF2M2C1Y25fMRAhpAhzBBSDhscxygpzD9kbLLakJT6hVvVzExje3TM",
  "key33": "25C5UezgDQ5hsrjH7YpQCd6psyTNUHsoJBpV2zPvtps9pRUQkzW78WpKbSXFGjS6XEcLtVzrn6YcYDoBL5TagSxg",
  "key34": "4qkx5DhyZWi39akG1RDR4Y4C9LpZPg524c3c1Y3jfhTqHfABozwLDFZkk7hG4HSuVg7nRsyqgfUA2SFkwGBtAUsz",
  "key35": "2fiGV7LTePoJufQ6a28ZxfBWLdYM5nhkzjPABXPK51esH7pb8PwqtiQYWyznigZzHKBhs2Nu4fucLRk7t83AN8uP",
  "key36": "3q4uzsB4dQNG18iX9mGFazzvWTV6An4UoMF1AoV5EDoekSuErTZz8fvL11bP7B14DQatitzKtmomH4DKbdFimyBr",
  "key37": "4ETyJpXqqUaaRcRDgMZGRbkfcgZskvZT3QQVPBDZpD7yVAJDhpHZSyyVdLhDLz8iMXzUHN5cgGsHYnBjtBcjSFSr",
  "key38": "pHJ1qGtMDie54rVhqne4BbccCwbqnpToyLtgFhnHBoCi7XmTSWnqgrG8vfCGJ4DHZ1ga1FqD9tN7chTTyAjp3xh",
  "key39": "5w9YjFVMLtocGsJ9HEqCUYLzCasN4v6iqXostvLPFBfs7AEaANyBoVQPzimTcYhpPZ5A2JxAYfuqDWWstdUHV6Gu",
  "key40": "2qSTteHa73aiwSLGLdoJ8RMXGn4UzdRNmFhZ1BZPukSx9wG2EgNGTRAcsT48rpuFH8J62wsVLuKruht436pZXGBY",
  "key41": "2nT7xECytGXGEE6HYVfRTQuWDMaCMnvujSSeEQh93MbnUp6NiKm2jx2TdZ7LTGXhtZYgwG6NbStmFK8qeo3srM5Z",
  "key42": "22sc2bqpmP2xtxnznPnnd8Y7PXzryPvcMt5zHyZ9p6LL4Kj83vNjbe7kxV867Yn63VAFssm8yi3taQGp5dgWo4gc",
  "key43": "3uK33so765eZopLuEw788D7GikCH2JGTRhaNN2yTRBbUyUQYASQ62tM1kcyxykZ5VuLVuqkKMV1KTR6cxu3dxEWE",
  "key44": "5wnEozU7BZwr6vi2rVcgWgAPoaDctHerLT3R8G5UxWgvCBuMaf3e4wYUgaUdtEwU61N1UnmgvkBw7mc9wLwNcqou",
  "key45": "5eqW1eLsuWQ6fXT1jqHxW6gZFJ3wc7GJrFh9xe8nSpYtKzaWV8PrJ2WX84gn1zYj2n344wxaXcX6sUrzLmsMCj4G",
  "key46": "3Y3miQ9u3RaBdMz5tRyXoQ3nieavXVEa3cWzWtFFn3xCRaabguvCpjVixQfr2vjJNnbWf7ymt6RgKsqVEtWBf1Qm"
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
