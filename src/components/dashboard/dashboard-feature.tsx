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
    "5cJWCQdBsQsstR2FnqDyrfv3oVN6Syyp8EjTpBdJsSh77XU3jn81nUSXa4vRTUqivRthJ7wrx8VibU4KMp3d8BVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YmjNYACYQ1rU4SW9DwZ7cx6ZuwbQWiFYY4KiYxZXRDzM81qpg2J7ZJtrwK5C3cH3wjMw3nWtFGX32CUmN3Rd9zQ",
  "key1": "39WHqMJ5rY4rHf9jpi7Z7TXmzqK8KZm2G2eCPwRKsCgTHTpPfYc5vgFkmj5A6XwfuMjrH7JJCPFmuF3g5yFa9e8K",
  "key2": "5DGcQ83Rdgz7sfHPQaqJwcznvRranEtKUpizrTj7wqizVZirYcxqRTQaCDvqSANJq9jEAgfjkDWijnrFE56B2i1s",
  "key3": "Emh1dVPw1u3FA1UMUPebR9eoKNuGY2jea4pFTXmfEKuLPdoAPDiCMfyksPRM9rc6K16eZSAXck1xEQba84yzV19",
  "key4": "4rHJKYxLnLggqvwesDNco8Pdr3eJN65yqhJBpWkAKUAEunL5NVnb55kftLotcxuuDWVw5bGYBzqVHLiHs7W5HTnV",
  "key5": "5y9PfaVczRSzBLVhPVLrcpVMd5arQAJhReSLJgSjhJyDpJ6FXNJjqBosGgu2VMhrZLp7ysLvhezUSpU8JdKkwWao",
  "key6": "3axz5pwJUaNCmqYaFdLTTaXELHCnfnpHi4mrG3un3awwZmnC3wAjCqdxkJ2k63rTf2vJmz9Q8FtLt2yoBVRGdzJQ",
  "key7": "LP38HJ2akERKouaJmEhQCi2um6VvGuUPgHGVbSbQVDx9Sk6JNQxe4t7ZkDmwqSv3LRFhzVKaL9bUB99KAqwTnRd",
  "key8": "3QwHnH33Jc6CEgUopbqbQzDaBVwuuvw8miZX5NeABKmSf54DarBG2RLteYtADX8F2eLWfotvYvKctBx6rh8Urp2W",
  "key9": "3nnu8eQBk18Fkt8YBpAkSBnGoFVtS7Ed8YXjcge5VXKD53JccUChdxw9FSRaJtPQnkJhiTf6Dm6GZb7c2TZrwKhW",
  "key10": "X2qWhi3DDz86vLTSXMeA4o91GdzqciwJBN37dLZTNC172AwqsUaXB6Pzq2qw8yJtEZRvTUVoEU5mpjWjzWuETSZ",
  "key11": "3vsUbd6rY65LEQp5r96hGcx5S77nmuRjGyDrjUVyd7VEiCDkEjffUA6A1xThRtY9QryWnBVhXdUaum24bXHkNzNy",
  "key12": "2kfM6N8hkNn5yCsS19w7FawLkA71brTDcZBGmhyk21coxEfXfQogM4Cuv4eSAVhnRhQJnWY6qbEos2wbZGGVim4S",
  "key13": "2FgLpruT3oCmyQzuviune6uStJVX4Tm2aY5tzSQbKacwApb8qG1gBcoQGegPg4NVAyMosmCRVx6QBhnGAz2nkQmp",
  "key14": "4cCVFPkJC2QS74dYPTDn9sZKSFunuZGkrxTUzeCCdUudEQ9PSd95hsLrc5CDY177KJfA99aPAxTzzDPrxf1Mcq3x",
  "key15": "2wx6tiDiYsTpPfYtDpzCQ6jRRdnU8gRmiGVLeDiMQb7GyjLgsvqMUPv8Fpg92c3LXEf2c8tEYR3f9L4D8NFPq4Ma",
  "key16": "2TUPv2e7Uhh3uDoEoUu71aEVrmLzwjycCvjPeesyFbzu5fMHWZchFvuZH7LfUYKicQJYB6hvP5UJqGfQJ4gf5mSR",
  "key17": "5dFAvg5PvL1SRkNqfsUZivH4rrf1bAo4Ch7g7RLDQjxZaZKKPJeoF56c8oFBAywj5j1dZCEha7azCyF55RpUwRH8",
  "key18": "w1ToZGJCZ7GZZymWup1dpXp97REUdK9VKP6GpoWkjCYztS4CCAK4Fi7sHZNbwByjHj3wg3wWRgdtrQGiiRWwMN8",
  "key19": "37ShRQ1NGLhSYcEZrzDvNiCfRNwyEFRuAU1J8S5TuEdkkBtoSbtTA3DoeqSGhGRRATc8dAGXXyPvu63NfGDn3Jwj",
  "key20": "31mdbJiCKe5LiHMuSKun5RGUXXcy3Pz5T9VUyS6HVwWab4K1TTEiZmbRyYbECfLx8TLUhQDw371QPfwPjKVyBPt3",
  "key21": "4ZDLAGUVjoHz9rCGxa3nt8RvZUrDyDynfajNy8H5dD71JhrrdhV3zuxvqFyVeT3r3qoKYY7BMGuTAbV7qPjeg3Vu",
  "key22": "37KX5uubiu9RtTw5DUTec5mgHBXzWmnnRRRsdtE9cAFDh63ANjLqUVhGTv6trn4ZUoVJ5hpZoCF9nSqeQAcTZMbr",
  "key23": "2MHrtrskybV3TpmCUdJQtfft7umy2CBegHCJuZhzDjX2UP5JVCpMUuHZLG7nqdfxbrXx5D6s69oCPVWvDvnnaL8o",
  "key24": "2xcYdGtEFb6cuAyB1EYAVfQXpXqiahVqhr4JwGaLTxThb3RfQdgQazA7iaRzdD2CLgKhGbCzy8XFiH2diRBcvsnx",
  "key25": "2HQ5CDFuekBK3P9mvksWovkwHjLqWhyx43uaHSwjmuxbomAkKGNeiSFfdWeiQbUyK3DRVEToq6gx77AK1ZQ16vwu",
  "key26": "53AvDPk4qFCFhvECpXT3JeCzbQHWqorpdMVU7CTXmf9JAxzV3ZJYXrDsrLxbh4WSUo5prnVfZXD2eKeYaombWYf2",
  "key27": "7xfNNiiTyn4gQE2UAai1MY3kK1fbNtSQNd4mBNDXdyVxp8WhZrnTaUPbUBydhnJW17XwxCgtj5cXiGKKBULix7g",
  "key28": "5x2a9PgaKWFQtoD4ddLegABw6iatKsVWNnyJBUF8fDcavagbLWK6hKidCyJ7DEkS1CCZTySAdy2Zh3qBdGjBJQ8E",
  "key29": "4NiQKqUBJ19D2mBPkUfkhANWyLtoyKo7ni5pRBpEcuLqSQQdF5yXP3YJeS3W1NLNAJuYqHYCTjfCgXK4KbgQsAW8",
  "key30": "4WoZZTqM2aScQMaALNQFRHbmwB34MbqKBVPweWB1yQ4CTznLSGt8GBDGsrJVf7Coj13BvS7oo16xinpB17Yah9yF",
  "key31": "3hEj3c8sXRLAnS2hrCMFVSCnwk7oi2r6x4AKwdiRxf15CdPmMrAjMzXEAbMXvmWbGjN6BGbtY5XVdhShUXKTA4e7",
  "key32": "5xFBMyu8UpG4tHeEaKgEeda8wDGG8mCbbkNKAe3US1MVDaZrvhX81afDsauT9iigw3bGiFjyNSoFAxpQT67sXC1Z",
  "key33": "YJWjvcnS52QTZK4sqDPU5mx7ELMmMZHmnvUiM956yKKkBf3PNRJ74gsFFc9ZzETEmP64SJrdXj5NGmHQBAUk145",
  "key34": "3Es7n63J5n2KDkRf1mrgn5GjBxTnCfpUwEr3MbAnk7eYSAvA6bLfh58Qv6iaKvNhK5ZfgJQvPJC93WHZQXxYRZJr",
  "key35": "2QG9YNAULtc2J9HqwhjeEvfkU29cKg4fHrzPLauA2kQ4EijJ6LCVKj2iJx9yDTbgGJ21nBKzUj7oZeEEVGAqSD7g",
  "key36": "4LdnxobUGm5Vopw2HkBHCzV4AmtoT6GBLecuAn6KykEAmkg95JCzjDG8N7Teannv6fnqtqzW6AWecpRZyAPZa8Tt",
  "key37": "4vGJJSjJ3uSac5at8h4DkhxYaxtrGGQrsm88ngeLvVuSa3VXXRTyvEzRBwf3zpv8c3yRDbXmHKoDENoCkaHfWiGm",
  "key38": "3cBdYcvJuyPvrcNJ6dSQUdN5pfgwfimUqPuLpifeZ3NBpQuaqdQxAnfdZkibPVC1zKti6Wn8g7pwfF5vMkPZgNNF",
  "key39": "FuEEqH6ZKca64agAwm66vfjJ2m9ozAxeoQw9yuGnNdn6hZoCQANQ9UQdDfETsQY6RzTA4hC1o14FkLaKAJGyzWt",
  "key40": "2JkARSpttTN1HqkpYuCDWNaSWv5SSDBEa1Juf7T1pLQsi7vxwbjjLoSfjvgx8Bb1w4Dmy32zZEwD3nBWA4KoPvNu",
  "key41": "2LdqEHokcmRT7HzDLcG9UwLGgbtBj7QdJY2uTwx173meNXD18fA9enGNKF4CSBfkAEJ84mqH6rxiPDkas4m7hmMw",
  "key42": "5nPNox79eCVHTMJRx8kAjfkFpSq4ocBuTRm5r1yTnpPZaWedFyFhaCdWAf9VJUFXVL5kpNxM6Frb8yxNBzhdqQew",
  "key43": "5Gk6cvuw2ZiMLoDcW971Dhy2xkxZSAm7fniuVjZ6HrFcRgwxgJPdDjZMre8a4sDWLTszpzvTRJbMe2RvhAQsRL1g",
  "key44": "4PMNutUEbF7bwVE8ULzPcWozWYQagjp5gmetgMQoVBNFjzeza5TxqUw34gPc3s5NiAQ94Cv81TQ1ww2gcJhm8WRH"
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
