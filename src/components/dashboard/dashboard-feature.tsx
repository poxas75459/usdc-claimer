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
    "9kUiHyF9h1b279cn8rozaLdMVCGKuMsk7Au5MUVD4jGCvta4D2HAC79VanWdxTqCdtBvknX4gZ5crb3JExXogx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnPh2ovwSRLbaAkTFPDeZSJqgrmhfCTCecqMozHRFK6hx86zKuYM8E3pSbzjercjPbF5bk4GhxdpJTFrmGXa1RQ",
  "key1": "5B4nSXgv4YV37Yr9Q3eBy7XcXDzwa2LhFKqmSNNA5B5zfFYVCuqevPVzsxsxpUL27bN49bh6LPSPqL3wGgEkcGap",
  "key2": "WmSTgZ3mqz6EQ4YfifTwKieRPi7rti8ZKhZv7VeWddMsKNsVjmiK8Wg74fpNzz3B56w8Q3wScWdVypa4MhYCQqQ",
  "key3": "5KqwuLSSkyTFKsS9awDwJ4tdrwM4AKxZ3docsG94WqDG6Eq77psKPLkXdhr7dHvWvtSnpGBzEd2xQkPRxKrnB8D9",
  "key4": "2SHeErRgdeB4hKp2M3YawL1gMDWqUbShsJZUKAasDBv3MU5xb9uKGk9ntF6h5EJ7iAEq4fRSZY41okEbqSZypnMa",
  "key5": "5Kh6WmwYR7K2xih6GoqZADzSHned73ZDwjuJCZfwN9a65mJMAxGEYfjSKKhqLqpvzCbw2erQfJavQ5npEyXsQ4AE",
  "key6": "5fc5eANa3LELWuKKa8jmJNbRiV7Lv1Wc8nkp36ZLrfiySa9Wfs9GYLm7rbUdicrwz83FH1NKnoi8chkBY6iGMZNq",
  "key7": "671yMecVxUrHuCSUkPkoHWMyZM8dd5wBmNbfxjZMavnEn8kdNDk3BUa9CG26twSM9P23b4rKEizggzWz8d7443f4",
  "key8": "bxi78QXzVveKThw9B3WaKZkK2HuC6jz2u5646XgeFpyxrtv31kSJiaChQxgJqXRWZW9uPJiUtgVqUTBSX6ppgjj",
  "key9": "ouGL2rFp1xXTjzJAUxQKb2MNkiHmmew2aN18TYVhNvuGRfrkDWciWd7vUNXTT1BLGFKkBe97fBtmyWyToWnNiDa",
  "key10": "Ysvkfgxzy6fZpdg62fjRrqMETKWpNX3VTfPqmsbf5H7q1kddbYxDfStz9CTnM68qDUQK757M4Q9RviJPv4qTjKR",
  "key11": "4dt96RCRJRt4FLCno1EWjdJKncsJRLnDLb6NuZTBpyiTo9kBTgCzBQTEwf81DfedjxBuT495vRLaX3QYKNG1jgr2",
  "key12": "2Aybhc1sA5MegPnpiGXcoA8hdbCZtG2hz8Jimdu5R1fGZwVMb3M54n3rrJB2RkATBPdw4StSHfsKdWrPNj6gq1i4",
  "key13": "2CtfGh8tkCw5FjsPP2e6GbYiwygUX6V2af5RkMut3aTAAQ8L5rENeEmKNCpmD1wka2DxpGw8iK5bUtC9RMeaWrGM",
  "key14": "2AT46TwJYCfEK4FBbLz41yYLDqTPouKbHvcjnHCoBsyZtGfNrukv2b6MVT6emfskkR51bMzDQ9kyus6Vu46AcTZj",
  "key15": "xyNEBv8V1289yZoqHt6xv685WddbAkmFnmRmzTSR1jz9rdLxeyxXZp4MNu4wfMXEupwBqtzN3Z3j9C8KZ7FYnTY",
  "key16": "5gTV2uEdScCXNLqNBPxPu8ZeoGKiGTZ27cCHYHTQBBNqirhJHL8k8L94QEdUxfG5vFj7sf7GHDX4oV97msZQcnAh",
  "key17": "LX1sZAdmzBd6QCNTZV1qLih8VCGTJx7BCCCifk4KHqvfgpZkWXfHHBme6pBZgUT8nvJiFxc6puxC4GiXLPLbAnu",
  "key18": "2TedeagaMSkaYJy7Nty8TdrG8TuEWmCaZA17twtCMnxzSV9i7faTQAjqKRF9jnWDa6Dcr2S8dbqAgjpoGiqd2xtb",
  "key19": "32swwTRggTqvFEkfpHj3qK84DpRh1rxQ294HZQ8ENAcaMxC1UkKH3mNUZhboXxoCqNLApSh1wF7SYkbtzKqbZvkm",
  "key20": "5mJ87o78CSSjj9gMzPHXd8zEnGKnwjQTSmDe1MnqTvLD9RiSKabGT3da2Ev5yQHkpNmrkCfeDq1c6yPteYwjb15g",
  "key21": "5rpHniLJrcuDXTQUouAXKYMMX33SrbGt629tSWTNw6X81mA97H7nNkpR5vVqrwpe3WRcQs6bpp6u8fbX5H1EhgLV",
  "key22": "55bisugZXHiwvmH9xidHJLvzmzojZbBWwtywcYbyPt3x5x3HigN1jv836L8mJRZMk6QS3a1iu15QWppecxCrANG4",
  "key23": "Yk7yem4HjLdJ1L2HLcyauEw4dHRUd1RGu8NYNkCkDjeCj43Rw2CuJvHJeQjnaidh6vRSC5gEVFJNqFSAy6up3H6",
  "key24": "55K5Q5SQaiFEePfTaTSEuRpTeabHG8XoqdVFx5jZfcaKv7tSFARRt5AqRxafiSfzrgkLRb89TMQtuxvKymakfbot",
  "key25": "3m9dxyyM61djbDGmiQekjJnu1NQW7jLhus7kquTQq2G15L9mkosAjdUtKjRruo4NQjoxPcjki3Kk2HE1nbEEuHDp",
  "key26": "PB8s1UPiXNQ1n3LaLmXs9bkBwAJRHxjGMhUNLPKYiURHRHugnbCrhR93QgXPf82X6rKQPPAFQbuNdJ1Xns5CEFk",
  "key27": "51ofpJ2WWD6aeFQeSF7ELeTatQNFierhdVANLptvy1nc76rwrawijngFjLh9z2GhCVKMhLxSSpd2vtYnp272k3DG",
  "key28": "zJuLUZScP8Xj3MkiiqmGiumW4VuUobweuSXDkpvzQUfeXSgkyEZ1JNC9NjE7wVFnMpivvaAYfmKAYK94cdKEjj5",
  "key29": "4uvuQ9Zw8SnbtcpQou96h37TDT8TPWcyq6UVf69BiWCpRnKfyAfxsCSd47sL5P2dua9A7e4UjXQfWJUeX82ix7ue",
  "key30": "VkVJapRrgtMPMQpFerk1VNKbAuvqyAwSB8B8UbcZJh7VKcjgZ3AeaJtDikP7p3xq9H2VtZEKv1DWLbLx6Mh4Mps",
  "key31": "4aZBZopyeykbWtZRmCrWopuNMgdhQP3bgceSkMfyoaxLSY42DoUdxHVxnKKSr21H1NSVFuTo2Ap9LCyYxC2xCu2q",
  "key32": "5uDGrkEmHvSPrY9GhSV2fiyoCUKAccfNov9C3KyD51xqpWkSvhNBv7A9cVLq4p8wCAcYH561Kr4AGGBo6e4ywqeD",
  "key33": "4P93BHV9L1ud5Bzfqv7MpsYTgUmFa1SgmzZFF3BeK4V2fGhbU2MBsdWaWsmnddNVgFL9ZUnRjm2PwHUMzXRoVTCr"
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
