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
    "3aRTBgYpV76XXeB5F7iPaf5XmWZUcJ9uEg1whqQ6fe1D5D5MpEJDY7BznYbKM6kB7x3Karojc7BnYkmN8YMALpw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54neWwPyngbtnxpQ9yXjxmP5YCGqEZugMSYRc9ERb8WYFWsSdzvWyxyDJB5F3yoPtEeTPbA92HxwSZ238nXrMHXp",
  "key1": "5cnVeVXtMkSxNM27nJ1zRWEb8mqfQykhHgi2bbuhiFMB82nCGa91gxEdwKQe3isxs6axZG5CHt6gCNH2MXDPpgMV",
  "key2": "4yB61ZLm1sUjLWaxt1EDZP35azfbKPKChLsXJe4kxNy44WWUhY7ywsZ89ZvP3BXZJuBzFxacuqh1pYD5q3dK3j1f",
  "key3": "xDtQeeUE6U46YpAErrAZMaBb9RMhMz2RMkYg9TF4434M1RscwSSP7HS656oVBErqB3KZPfSLv5cDwP8yBK5vz8e",
  "key4": "23oEr3c1NC7gdebScqbQSDkTjdsMXdH5fG2qo552Zd1VDkT3gMQL4Gb5ZQDzYYp3BFGdmQdVxCMXj4sxWBPg6SQh",
  "key5": "3p8dLgA4pDz7pSaHkwkwLo2Z55ya2noc9rUtBwxQZMNUxTtjzYWoAha3VoRNAZLBjz4LaxbKRVPhMvxHs2HC2rY7",
  "key6": "CFSmLVMLPAadAvEhUj1Eh8tFaWXU9P9pqbegGEqgrvSyfqjqy3ZDWvKmoVSMMviAXCYhzKv3mTzH71aKrUWUkAx",
  "key7": "5Cq4GbcQwXEc58kBhTjuLYn8NJqT4An9EUBWheJfQh66TGc1VfZuLwwDjQbi9a2Qx4Apkf5ehua7iePzgiRBiXhb",
  "key8": "29T2gNM4UsnmJtsVSwrHwdnSgvNF3m1rW6y3VjVsrFoRMpRmAmaChQhGNT95GwSx1HtktDTV4GbBpx8NacoGahzg",
  "key9": "4p2Trcr9KC86jFh4RPahdGdvi6oKLNbCGqZ3mXcEHTVgV3cZAfkCX1j2FjDmCmmkrm9SCv6VAdxLQZqR2npaZ1HB",
  "key10": "64kCmrLEciSRUC3TrKA3TsKn3Uxuznm9SdowaUeZhLFdcWbPkDnA2GWmqvADHu7cYodW2kJZLs4vWmfuLH7X2Eqi",
  "key11": "5xovyDJkgxPZmmn6B5784q64EJaHdCRFg56pzEUqWKf2aksUVVXiz35yCaDGKdp644jBpC1Fq6f2CQKaeVQG42to",
  "key12": "2xmBtCLMsvKhvdsLicmhasC2SPD2zgnJ5TcVaraNsDTH9f7dZLG97gwoMGc5kxzpBtQyv3NuSg9EXHz87JpmpMhU",
  "key13": "4rUJ7FjtAYGY84yYfdTQjdiRNFWYr96iirhEtU4DGBMz2fUaWGFrtYLN76FdKksaJRYHjXcvst1j9HZ9XxoFFrsK",
  "key14": "iFkvELWCxmQMUxo3ApNoeoYzksCsWTJCmtVCRXEPdu8wCakwixx8K7sSKcYFvzxyfqUsp2XaU36j1okfuePdZRS",
  "key15": "5urbnJxUig3EGhC4wi1UKXa1PRRCR1wDo5cLmE33uoF7pnPWUYZhJCYuVPQwHHDA1ygTSGS51CEwfnwe7eRVRoRj",
  "key16": "2J4PtKHVHnJGSUuNSeDtznv2ApQwRdw5RwoeX5FTyfz2d72Wuea9MDHPvoF7EZ5Bhmc7WzgiSGEG31gKiHkHvDDw",
  "key17": "2KkuuanCE2qoDEqrJvh23S7Pf9kapAaD9PLXH8QmJqbFQD1RHeMktFRbneY3wzcZKBXY8Sif7yVve7EZ8ye8XdoD",
  "key18": "4B1VK9ZrBw2MJyyPBobUPabpbBKXbBixkPkJBKexEUAQpoJoCnEXDN5DLmEpdXmTyWneFtYQK4muN2M3nMQvhK64",
  "key19": "4LkiDY3enVVMgTibPKzkrskqYZdGrwK3KLwWuBRUL45oESkTJVYpRbnwzZESiFu1NENyBEzBtBoLgNVuUHW29kBn",
  "key20": "3sKF1ud84YmTLsWycqL3jZsP3NEjkuYpFyKXAUtuNF3ewqUbCPH9fDUcs9a5M7zCbWHmC3eV2wAZrBujA1E251ki",
  "key21": "5EsqSDSMUKLabVS5DADh4zuEWT5AgEWzfhXctp9d59GQBGkgUK7hQPqefff1EE384b77gWzDKb6Xm2ouoWry5kNz",
  "key22": "563xQBXkT7EyLZYPb5XG1ghYezmmWQq3nMyuQkU4VYpFtjYZ2HfucadL4VvRJb1dgU6r6JSF7vZjD4zoyT1v7qGx",
  "key23": "4DF5Bcu17GmoC1375otRevStBu4tKax9ty6E722qeU3YdUCcuZ6ULjjQiMD9trRTNKdteyou1542fTG7XqUNaUvp",
  "key24": "4YHupenA5bUi5EgYK2uRD2U2VK14pTcf2PdEvK5JP6ocWeSf5mhvCgDofwFjrtrwNEUC6JPTknkazLyKTU8r3rVd",
  "key25": "2hxYv2iCiiqy6rSHrAhZRK9tJdhZvpVMjBZb6oCjDXMUNeGQuuAfDL6a1imuP4QPgywyqU8QTu6AtLBpCaALonS2",
  "key26": "QHRtRD2D2SjUgxfsQAdWKpWNEE5H8by5LuZ1avGz7YWNABN7yuqt9aUcFBJTps2cjQJtcmGbthoBzGKqNoYevpi",
  "key27": "55QgZuXtJWMr2BjfQXErNxRz7HqXqF3ojdLBso5K5HrPWyP6SACZc8GMB2nTk9D6mTLx6t2PX7sSKo4X3vDMAQXJ",
  "key28": "4GHSqHUqKtdcnq8fqFYjmxcSVkutHnoMD29qpABU2WuxBVtrpi522xQXFfMoZQHEp2aUpMPTmcXJ1f7tAm3w2nTx",
  "key29": "47KJowaTgcz6RVuidn3e1eQXfKw9zgzr2yhA1NCcjVSvvYzWE78yztofgtMfsUzUbVTSNFmfTRfUFmtUqtzMmUwr",
  "key30": "4DCKYLYersv2XS9LWSwLSov11noNGio2FHJXwQn7oH6hzFPNfLYiicPbzUM4GDkjSyHjrMtuicrAqLEcio2Rq9zv",
  "key31": "55F2wv11BBaUVg2bMxBMcEJaPgqjgJxe2cpL66GYKFeNbSZopzjy5bUGs1vzBw9gtRLodTTTmW5x6PUjohihD7xQ",
  "key32": "2npWaHgkaAZjuRjKfuSEgtCcdViEsjSqR8bmagxdFUqSz2mEhq44Tzm5XCR5eg1encjh2uPeLFWqQAdVfBwekWtk",
  "key33": "46wPXguHE5acK61JEspfQyKXEH2kJiDzo5SjhUzoR8g2j7qL1cTriSxhbV9siCCocZKoPDQJ3335YKeShG2rBkQV",
  "key34": "3cXsi8oT5vm8XNqgJfyzeFhtvCndCDFBHtBNfBGEPLNP2Cs1ZvAMLiWyGzsxgEHdky9MtjLAtd2fVkzZkhq9b9L8",
  "key35": "2TpBA17USDnPUxs69uW2rHvZVvrbkD9Qq6quLxbHFyKugMosZuP2KYJprLDBFMPc4FNGR6JsaHr2afmVaPSHykZM",
  "key36": "JBXhcdZLS1yDJVqHKEj498KitavzkhAXXNHWpPyAL3AWbCXtSsUsfZb2qoWS5N8jZN7MMVFpMUg3CRxjcB8eU7t",
  "key37": "5RMJnQ4tkDeemmowTT3hmd8LhPgAhQNN8bebX2j3WbudxDzLxhMVWKiqNmypQrwohsH3Hk8iu8dy4fS9RGtXNPe4",
  "key38": "4kscmjd9VLhTriKBAwYKz8qK9YGZzf7zVga8GJg9CJaHZrQzA71ZPhhnsgEXAWGBhPotS4v7eu9i4ZiPubr9pL7w",
  "key39": "5q4V1jp8aQoXSBVnsZqgu232RbNiX8hna5gG7twJ7VWAx4pNb7VaQSfG94J6JLQSbWhvnAn5x3ZCFMUmrLAWEAEE",
  "key40": "217QMwjcsvGNzhfsmwLdJ9366BAeDSBg4GRhwV6qxf44FmWis7cr2Rat4oBp87ixK7stpAj8sFNbXwiwCTvhmczs",
  "key41": "PmYMeHc6eituZ63Rn9HGaY8jJGbsDPyt28pu245NDBDJKxLeBAVLQwkZRTGrBrZRjK5zYTUK29firdDuMe1QEPd",
  "key42": "4EF4KENMWD8NiU747cNgiTmc7B8CxjA3GDaAD3FME3moeBdRnnwGJp1oTaQqyYhhUvfv8mronS9A5ZA9wYYUo7Nj",
  "key43": "5Q6N2WWqokhuy1AVnyekjzdnmBdu9idfcpfXft5jsRARHZEgzaZyFQuBoRaiyG997ay6Tc7T5rVBRmbAeqmjhmXw"
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
