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
    "3XDEy2gT6yYxkWvmPqKoipbCzqhxHtyPMdWRMFr28nnNQTTo1WYhQ5Z7osEYWiCymr6wCYk7KdQKGhJ9gzPz7kkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuLLAQiKkjvzQ3VQbLBr4yD84SmBL8PNMfRSLbxGWC6xgAqcUFssmdToR7kZXBuyxnQGmBa1NH1KGg2QuSLUc57",
  "key1": "4PXpWdzU4RMQzZG2V5Br6bfFVFFEyj4E7fGeYvqxoR8FayxkG6V7CkEQs7fFvJbPspjdu42r8VQT7QHnPwB8awaz",
  "key2": "4ymnd4FHPWhM2t5WaZUUANkUPYKWTxXeTRRjtJmqPNtWPxGUS6iaNyggKGVTKb35azN7V1fpcVLW65LUgNNJJAdW",
  "key3": "2GWL8YKwfDars75QggznPvpUoJfV7x12Rftkg8LqWe43DA8KpWCGbve1Jz9F2KdnGSFQsueomwEVQEKW3vYswZu7",
  "key4": "51qVnih9DLzbCgyEvci5wr63Dz7o2Lxq1FyFczZxG5FQ4WetqNqQfPsiDu9P1538BK34brhsLUmsG1c86HCrMVFB",
  "key5": "5MFpSfVVyLvoBbXKPSULr9CgVv13Duw4SXNnucFr3JbNz9fydZ1sQdbimqhA5uw3toCAJk1EnhK28gafDaopcPh3",
  "key6": "5q8D3DqMMUvMHwxpXs87hPaSV5p9TRhFqHZ7azkeoFWYEe719mu3i2h7StThg6iNm2PG3P6X1e7Uze2mDQQDyvP9",
  "key7": "3Y6K926jABcuK7rEnFRp2YcN5heTZvSg3tY36Sd5LfpnbmzaAkBUiVjfTSoJh2VGV8xkQ4VTvpwaXL6XDQMdRayt",
  "key8": "3uES6xPtzfjqeJPYkoCUiCsMPEr6dKm2SRcbo5RUmUbgKT5j2iHUsQELwDHhnEoEwRfoxBRw29AA3VqZ4SohkKXj",
  "key9": "3LsgLkgNQTCyUhdvRqbTXzJQT6YbeD225wjuXnuF8tcmqiVa5KpE7oWCFmnS8iEj1zcJzTejictDkKmfw4VHU7X9",
  "key10": "hetwCaLrDPaukWsqsEHze1hDEwPbEKu9vJKhABqfNRPEeNeZoijDcPmQkq51btw4UAtoKttvfEwhzv8JvFTfyh4",
  "key11": "587CFVo1iBviYt3qtYW8CnsXC6gAqfoxsHf3Szi5nHiR88v3sc337WXkeg4YqHd5VG9yHhe7MsBb3rTKujKUrjvQ",
  "key12": "3KSQXMdKMPQTpuTJ7eGGYQrtH5hwGPtZyHzQGg4efJn537WrEVxpJsxMRAZ8uzVwFSoZrff9Ku6cqYrh2Jomxur2",
  "key13": "3nwxbTi1gR9bLqsVYYPRRT4Ktq9hSkEQB7HF9KbrCfpQ79cUEcs8bGmMjXQGVLuWgS3CW6sWys6qdNYjNKXjcHPL",
  "key14": "25UMoRCevmuWBeQGm8TXvqdGWvnwHJxSkUheYqHG9hPXJTgh1TemjiEYWkfD2kDM4xv9vtXfgU3gR6cgMFDnPfVY",
  "key15": "5Fckn3WMzjtccjv14vQQMefAEwZdssK9SLguTQmC2xiTg3KPYvm8LUUBf67Bheux45HrBwo8JC4FWHw1VUiwEUVc",
  "key16": "2ifpStM2zNWTAJaCLKyySJY7QQMxx8B5QYAadftJbqd3t4zjbAUoMeQ8RNnpfKnRDsy6GfWBpy7qo7JkceVR7XCC",
  "key17": "2L1jUs6ANQue8mUyCZakvohGwwnJ2rMSiw9nHN4g1dH4b12VxqgPrHngV273QX998ZUJCrRePevCLypmcHorAPHd",
  "key18": "2u62QiSPcSN8FWfnAqaSBK7xKb2nhsWc9ibFM1mkeN4AsMv7q3FT9cqxFTgZhPFDE13GGeGa5KBhvabALkTNGXLu",
  "key19": "2vLPxP85KFcvS2NH3jdn2meSETVLR9Lmbxj6CBrt3mfAgDx8xgjdasHMhJA6ykfuoUzUKwgiPjbCHnsYctpw9gY6",
  "key20": "5ZZfwdxcoRVufpXeE1qaucWsAecE6yttvWuSzcdvX8PTaPpTzexdCKmJQeGTpaMjekGkV5NxXCX1NedC43987UvA",
  "key21": "3MCDHDyEZ4UQxSzarzgZEAH2d8KsD5DfMA6eMWyDzgfoGba8ZSjR3B3TmEqjw8ahvvkadub88SvxpQLJM2fU66h2",
  "key22": "5mL4SUEXGsKqm69HqF7SQYCvhn7rJ2bH379jvsfBHXs1KMFqrSxbmXgLDr4BJwaigCaRkE9VAdpsegnYg35bdL33",
  "key23": "4baMVxVNqv5wJTxC3SPwtyQ5Ttww4Vw4DAc1GVFDw1PLVJhD3Wax7bwpbabPLjySHzEu2JZktZJfUdWcpeKi9PA7",
  "key24": "2JkD3Ds9EMAw7yhedkVzxD4fcUmaUvZDBU6RXMfW2D6e9f8z9kU6Hvxq8MLPcFVVAMMKTsk74Z857J3XFTM9GVrP",
  "key25": "2cCSYHCkBUmtvB1ae1PFbPoaZ8NHPGsCGszpDuckVxGeq9yJBGfop5qDfUQwfTEwpN9qjv2LwsGwRjm8wYkdAxGS",
  "key26": "4Qh7t42iDnY3hjrZAmotK4wsWr2RLze2oAFt4fobiyBfGCp6KS1pkTXXNjV3Dn3PiMXYcX6pa1MJRtPziie56LvP",
  "key27": "594Eve1eFtwFez62hKhsZ2As8bjC4mWJpsqe9RFf7pfgBiudxdmxHTGdRiKx7wfSMcWi53LLxZw16g9F5p4HgvVF",
  "key28": "594CgMGpoFgGMYJVHCZnA6NdChTSvBq9b7gxAALL9euWbN9YsmT3ZhqbQppiFBq812igqPLLyEzT1mnnz4FAGuZ1",
  "key29": "2Rs62egwScZjX1jrfhFhkW4a28LxJDmT4LhhQXJxahZphzDCpdGes43dnLovHtW3iLPTwNDeBHbSXRWRVK2eD4S8",
  "key30": "4Kr5C4QbBqhZRq6rrnomcgZNuzNDLh3n66NjBHZuP5zmXsej6Dfftp55ZYoNBMVHkYohfvbd9ZeCRFfrCriGcpgE",
  "key31": "3VL5YitLnuHDDKvNqe444qsNDvcAjMUVpZZrGSrJ3wXLNrj95om2X39bz5zXUyTpKkvcXytookzV7UxJY7mPMCRW",
  "key32": "46LgZ9JQN8eqMA4UArLGf3dZnYxZjVS6UKZ8pMaAo9XnKyHN2QVJuspVhr2vb7sYDsmNMhW3Q8qpuU5xeAw6uG4G",
  "key33": "5qGr79SSKmpEZoP6aWA9kE1xmS8Gb4kHe6xy22udEXptWWGkfbKJmENxuvVLa4owzcSwgSaJ7MyGYnoNjJ2uE44p",
  "key34": "5zuyzx7mQVRckAGzPsP8WdBGwBidb5KWq1xZ5bZtmdJTPwCVBbXqcziYs3CMcLCn8WE2ECMzAXM4aeY28NDsLb4T",
  "key35": "2PxHBeGHeYjQYVTum1idGYK8MZWQ6Zvk67FPcF5QgNaYTp5j46kQyWg1xCRQwDreymHS9DwqzgqxAc2Fk87Fos1Z",
  "key36": "5vhjGWampDzuzLxB5F8sceA1Nqd2RmV6yujpfdfL4vGoj6hGZZPgE9CWDUfcnSyrFwrKJieKunJo9pVqcVaXnBuW"
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
