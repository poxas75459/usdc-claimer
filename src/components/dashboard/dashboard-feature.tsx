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
    "18b3eE3mVMtDNwUY9B1ng5mkEsAWjRFUrHcPkwBXZzF42UTDxTE9f9Hd5xYb3No7XmmXS5HLqQH71Cm11LWwzti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3oTw1u8Kh7DnK2xs3uzoqbBHSU6U3QF7qe4vsnKFticgticfkGGCbUvBfhZBZmF8kH9reqbvM51PGjKvBTpupK",
  "key1": "5iVB6xfPUJhFma6BCoJt1subYtxYw7Sn3XJvSiVCGwrJjtswvddiN9SCBHmpPupkom4kjdcLn9vq3QS6572zscxz",
  "key2": "2vPYNdjLzg259TCEAPQ6DqWcEKDeWmUdCqtKJFqfEBKcdH4b3NML338rSEqdndpM4CpD4aqTQ8xvE2FgYAEMBPMS",
  "key3": "E7RKBSnRib6fQKPNR5GrjEu2r75XmgkpznU2bskt4FgG4h2mdtTkqFqkkQ5tm3ExTUwRt5c98FRaprXLFh78c2L",
  "key4": "4z2TPEExahCfzHSGuLxZb1xH8woRBJwhNBrTXLiPi6nAhGP1Z1E7ohSzkWYYkKYhvMiFtnyyoDcWezypNga5eivj",
  "key5": "2pAxUnCcNCyYu6qU8zqCD78gVck7PLsA37NUnH8xNWWyDdtMLppj7D2UmoJwLkGJASQkdz2LdPVXkJGqhsK9xDmp",
  "key6": "62sDuet8YxHfCTJPpN2ZAXBPhsdh3fY5KAPSADncoiYJvEnb1Mp1rizr7iLjiFyd4WzoVxTP49hdiRhgxGiNmi8U",
  "key7": "27ko9e7FiipnRcsjonTQiaZ2DU9vXvitohkCus23tKNCDAg4WGbs6LmofLHsjncMfhYAwXqvGvofBY2H4HcxGz88",
  "key8": "361r89vVVGjFC5C1vRrr6p7GzKCv2ngYLYVr6PdLz9THytkMSUVJ9SqD5kQqLZfuHP1GpUTghw5YUa3VG5zHFZsf",
  "key9": "2bpiavMdaZFymxuGtSdmy9isPFEEmAvrhC1mgXgZeCpWauFYg1pnxNdahCqEd7AM1aMa6BY1FnHu61MxGSkfbkCU",
  "key10": "3hn3phJdA3tqRrUdW6CcoFMZ2g6F2Wx3AaywzCE3etD1r6M1dSwxHVxiTp3nZKiFV5ymvV4ibKFxY2Lnb6F6pyJM",
  "key11": "XGDQxco4wi6uT2G5SxrrMZbjxEXmbfgsq5F8G3NDB1BGpr6SPAoU8yHcopESGg8zNesxoLveUZmZzJzJTqTUZ8m",
  "key12": "3ZMdygZ1Li5aythVHr7w6MtL6CBeBcrjZL656fzdJVHH4eiLeUcJfSYbnNbzb9yDVBu2Yd6AwZmif2ue9DaaHU98",
  "key13": "1Mx9skdCAu345qQXKB4C63eRrb8U7GL8Q153KYehuDcGfFwu6VB3nKxp4irbD38sPsv7QPUUN2voBbx9fLFmJsR",
  "key14": "3wMngvLrd9kN4dHJ4LisACNSQgTyLbV93vHy3hgyTnmVJL1AMcEM6TfQjfqDsPAqLBgTtLedzGWtFK8YraJu23AV",
  "key15": "4KLVihaocXxc4JH8t9NVvxqVJKRwqs6U9usfW22h6XD4WDP1rArCQVMrDD8g93YdAT1X8PaFcJpk48nXdGvgxD4C",
  "key16": "4xJD6RkJfj7Tu5Tam46ELneJbC9t8YumNfcHL6xu5NFvjYSSoQXGsNUVq6mtLUwySDRDW11qpi5N9GQV1ibs4XeJ",
  "key17": "3R63WUq2aHYv2iAjikBFaenNx9iJa4BjTpsJcLqWsva2BYuy9kCj8GRP4QUJ4LeEDqcANDDZUxpriyTPakYDoTka",
  "key18": "3e55NqysGmfsUvN6MBvvtYBv4v916wYrvovnR7tmNPLYVzCnrjamgHKAAsP8kN45EGPexZh9CPg1ZnrrgdxhiET6",
  "key19": "fCFQK7i9kdJHsyK9s3wbRQt4qy2eHRsDVqhfAxysNKGwWVAQEFcMZw9QZ5MSsMCvQXdpuyndvQHb51SquYNhUBc",
  "key20": "EsH6Bj6pyc7WeTJpSVcrKdt3wWg9tnN7Pkuzs4rzbuRC5A1JkVvyBAKzPZ15yWESgEh1qUjbiZqrhoFnqqkpGDL",
  "key21": "2X8KqKrJU3GajF9yRXdKS3LJT89v381ggrdSnRoqr6LsYcmao4JNiBEJuZucMuisvTSWAS44XW8JdqskY4ZgmPFa",
  "key22": "4cRm1YTQ2cYn7pcZRpTfpkyL1Q97mqtkTWux1GMjrSQsXL2RbXbtoBbUGdpTvNLu8AqV6V1gqiRD6XTC6D7RWrGP",
  "key23": "4jDtDXuf9H8rHA4qcWR8oDGer4KubC8oMDGne5HKqN8figjwU4C4ZrnbtX4fAduZ715FNJVUKKAkWCQtQEwjq3nk",
  "key24": "46BuubW8mw4B4WfunmpitChdL9jiPTo2irBsjc99BsM9a4CPCs23bQn3QdBGMg3uqLrySteS29bTXxQ3JshsHtD1",
  "key25": "2foCcJXANCxrTPzFagGfPqz9yH5ShyXPc4C3pDYX3ykcEddX3z4AmQbQMh2QiVBKVNWukkf85zPQVDvfKphZjrjA",
  "key26": "1t2FuEETV6eU6ASHHUhZNFKv32zCiG57ipw52afDCq5ZTAYNJkGoX8CHnNw8JheumBRxdncTuVeNTxuFaeNgpoM",
  "key27": "4Y69x2zKhXYarrAUiMHMJWoFpV9iVExRVj6DSbmu1837HZgvJJaNTpYoLVyYcWct3ftyP1yVXuyYH6XUv728cSWT",
  "key28": "5T8hmxcoibbpdJgjsqVBctkjxPqK4DY57vbc73u3AMdns38rrEtJGTkiPLHzLgC6utTAgkaUMWMZLAxaaJ38Z8VV",
  "key29": "MQkxfkfyMXoYZzQrH5FUqLNGz1PN1XdBHxgZjfNeXhEeaLVWEkiebhuUCdsWViWH6UruTkQbpodrW6gvYN6weoP",
  "key30": "2Wnu3NECG8rhtwCKQP9SgJug9pdv7QtrVYEMf7WTR4By9EyvemrVfDdfP56bFCXYLwP6GcCx7Dthk7CXXRVi9Cog",
  "key31": "4fUDogY5rp1okaSZtdJAWhoLQV5TyfZumSs7smepSWVXjTrz26CdJ6xNLSL8NReNaWS7sUvzXxykD5JTmUwAqGfU",
  "key32": "sVBZXu4d1a1LUzTKNUFv9cFDu6ygUpoo5pH9og89uwmoBrPs6PQiYLpaWEy4DZhoEhqCTzDormvpSRqMtrGDCbY",
  "key33": "3WnbhQi7yecddD9tGYvxdxDSL6smEAaLsQRzqsaBKUTjDac2g3Pv48H3Sr8wHeQZQrsRGwbGpFp6sHFas7WGPnEU",
  "key34": "2zxhA26JUBZNw9ybF7ntbBAxaQUXmYp1Kx78j46xgsRgEzmzKHGxg4Mii18JeZrnpUXwNTzxR49Cu5WZmPekkFNN",
  "key35": "2YFF8Aua3A5tApTaMVhKCaxCA8y4ksonbdC4UnPKd9AuaXNtRg5UZ9hLWfqkK2KkXzxDkezBGy9zhkrez4GM178C",
  "key36": "3FStgPwaTwogvLFRpEdVkDhQ6xT79zaN5iohWwpEemSTXnUnN424REDyLj8YTH4JKcx4VfMzebL8XV4dJmtVUm2v",
  "key37": "4xmqQzbKJ4pA8djC7nEhoD1pX4azn3t3PQUT47qsjFfaZvzjQ3AW63vNCsSt1xM8kzuEKVQtyw3aZMMomWuaV58N",
  "key38": "62MBLYmJk6tCZgkZU3NZgur29DM6iEiphDaotzzxA6n8xNyBcPPpLiktcETaWQFwccUtqUdeQhvS5cDVSMNGRxfM",
  "key39": "LZZWmJSXY2BcsSnAY1qbkNrtqkDQxgLPm6vBcGFUY4oLAmGPHdnDqZS7x6khpLgbhhQwuYpkbq3hjSdEBL1uce9",
  "key40": "SFNS9GSgnaL47Cc2SXNysGNKZ8KSNFGqSpDXhcKu9yosLi42idb7SXzQ3159PUZ696vaXDfzPUhdT7WageGUGXa",
  "key41": "5qQqr3L4HnN2MjDeuhpVB2HopwdPv5FyYFNzu8UWgA7BBMwps82s3dw7e4T1Rhn2ARYYsSmWWU9bp3twJS6a7BWp",
  "key42": "2FohP7N7JBGfvdm9iomDeAJVdzRhJm3XjxbutR7fV6SZayPTwbNpoAxscCnibAqFWiiRRpneENBbKh54P2gtbix6",
  "key43": "4vp1ihYZo8U36Yd2gvhY6VLdAt1WR2JBx3JjW9hR6EWWyNbuLUVsKjGrZ9ACVN3zgeovTKRAJFUMhXcgt5je4D93",
  "key44": "5AhXQPz3DFNWCphcxPwSvFELEibX2PvynL1npkdzbbqE4G5VA2Ltaw7Qo6pp1Fw8Pt5ZkGKKD2tZTF3Rn7Syaxcq",
  "key45": "Py5wdgc1dKfRoxTPi2hmwgvw9RwaaNmPCEzw49n3utdg2mVX3LTuwkDi7bq4mtxCJyD9WuGgKE6vhK8DGbFQfD6",
  "key46": "2f9uqXJMJUZJjugEbeoG7vfcpCne2PfNUgEsTUtCeFVPd1LchmnEa3xegcYefUdZjDjq4mQ9SBpR5P4LUbTFaBoB",
  "key47": "3AdGmHSKBqusLr7xT7Nkc159YEWWBDPamqWPmbN7p8KHuWpAPWewZdzkorhBevvJtN8p6YXdeVewTZbvQEz47MR6",
  "key48": "4w3TrCKPyewL5jmeBKXomu5EADMGoCWkGmTBQ7z3tteeth7jVoezHYkQKTAbNfbKkSh8So7EYRX3uM949dwKuDwH",
  "key49": "2uV4RSFpRovxwvme7RvNctjovhc1ApcMDAHSx2m7Vph1m7mKs5rNw9pX2DAkhueoC2a8kaSNhpzLWy9LBFKhniup"
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
