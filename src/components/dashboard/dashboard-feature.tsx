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
    "bf2qqeV2qrBcEnnzngE5vNhE2QSNWJvd3ZFyzT6HGgRLeF9HKMNBXjso3Tv9DnhsQwET8wuyF6ySz66mGxGMipP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G1pDrzEVCMFnTFfM7izb8NH6HMdDvU7mgdUd573UkvVYbo8pFnrZ9gLHyUWttGqJuo991FFxA6YyoYSn8ctzJQt",
  "key1": "2xRgqXXQEEKoaM7NjiKmJzVcwdUSNtVuA1sAmnFXjbNuuwfbN11NyZ6yKa3574LDdnbzPrSNjALCAi6jNLbeKfmH",
  "key2": "4x2EyLJRasU9Q9eR1DhgPTKuFpWrMir2RVuQ5zuAXzJUDTCvjzvfQZj6eeR3iznGLhmsPrpe7pRxdT9T17D7a5ab",
  "key3": "3ACebZ9BGTsCbHZnuXnTDAKDqZS87tNLJm3Tze1TKJAE8SC1WRviQccpvZEoBRpAUwfVFvGTc2Ami35w7SycUEZ5",
  "key4": "563DV5SeFgGJ5Zj4HNvJ8y2TQsm6uULKCDpCUveY3YtJzhxffDXqdwiuQJMVHcp9nrxZEBUQ2dKmSSHckBGJGPqd",
  "key5": "2De2JZvaRXC5vJyBzzcPJS1Hizw5JRzNrdpPmJ3AQv2MNcmBCFXvdH5pL1sNSkyJxqx4iQGksivbkz6H9xubJKf9",
  "key6": "LuvULm5KN7YnMVwrTckjZQ6wjicjfigGr4FuFaWYj2sixgMkrZVZUi35XVA3djfXrychE4cS539EqstFj5GngDE",
  "key7": "3QC9FyxZdDL6sxknTbmLRj7XJWXjYggb2yCoJc6NupqdUyhAw6MvWVi1uYVQnMFRkTAKboFG7k5GHT3TNLGYcAMX",
  "key8": "2v3HLAcC2Yny4jXhpmUEg9cf6ChyGMpodHw9xmJzqg497g6WJx8BgPSqfDaCgzsar3n7VWvpNbUjVHCUjkAeNCPq",
  "key9": "2HuLuJUzP1QdeRiB8ekFNmNRBUKvRfySvSrWbuGZcqq9j4LgKGyzx4XMKLVRyABd1AqrXui5jrLnA2JUrNxpE45P",
  "key10": "2J8ZtZqHT1qmNENQuw7X4thnvFFXgfEsrboXbXTN5aSvRVXXXJ9DhHrHeRAm5fUMoPXP6Y4NyP9DxrkyF4Y129Z7",
  "key11": "4sNocTwq11B4JkgEzkt4m6zq2CEMvZM4qvJRDRfwbh2Zzdr1QaJBojUXSDE9xRatNpaYY3M79pqE3rxKGkXBXXNJ",
  "key12": "3JXHkUAemkH9g6dbiddNkdruzz6ZSQoE9oJhumS6DTRP8LvHQSqbyASTjzNFi1vBi4PsRUd1xYTQeaaja3SyGW2K",
  "key13": "432UtFhid1wjU1XgDjHwHGWzNYhxPacqMj646wsFCg4KM9ucBC31k3tHy5qVzGJ7FgBCdwBkLfkE3wCbS1ecrZ2u",
  "key14": "2MbYTt3VbNT7aiZuYPwiurv9jHgrqU2YuaSVWXBUAh13AonvjX9EwCgJ6aEq2t196WQwHxYUCYp5coPZj2Nfss2",
  "key15": "5Ky1WfLB2nJzmNigz8uB5bQyKtKcdggfn3zfwttxHmzcUbLx5UwMBKRoT7St1oxZLNicjGXJ75hgWYNygAkZU4FG",
  "key16": "3MaVsMfCoQWhYBeTbJ2nCTsR2XHdVthHhgNvw3225m326m61uLdWFRws3sg1XZ249gKmtfmSzcUZy4hpLjYfaS2g",
  "key17": "4A5HDjwEvh97qbEtqjD5o3K4F4GudpYee2k8vETauNmktWsg2A8gGCdM9qUeSeKxoZX2h4zStM36jj3Qeqjx8gYw",
  "key18": "kkVJkp74o5kGMBeAzAPYZBnx1AoTemC8ApmcyHbMRL1zn8Fm8bJgqXnMqoKRsVUkRY5Ne19ZMr3gdSeB7cc8siz",
  "key19": "oCSa4RHkKMWVb1bS6BAcxSZXso6aY2KhU8ZJBgec9vswUVupzLcRGqxGHENrJ3r2RXRdkfx9EhXZV8TLSzLNyNM",
  "key20": "49ghqZgFLwoWatgMmQb3wFDLL67mpkwB4y9j6HnT6RUer5sc946xExBAD1i5qHpGUZm9dufEi9M1rYZJVr9Z2xgU",
  "key21": "bZQFeCscmCnsGhQ9KRYSxnjZHdmMxuRpBSwkbioZiD1AKuV7VQMMos3EoneogMCmHhS7E4ihCXEhHxVRQ64Vdgw",
  "key22": "kkfBZzLCZMQqGDs2LRVJ8MzLGwyvYUPNuJCER7WzaVW6MpvbzUGha9JiVCPBHmALwSrrk9pWDmkQhiwUhWdrYeD",
  "key23": "39SEjnC5LyksYZaiwSyQC8RNyEDcRntnuMVXPMU3mUWPzM3QfVVqgsWM7afXXHYoT5F2BvzLwCfKDRJX9hCKwfb5",
  "key24": "3FNo7xri3Tk84jwVxKfSZBiRVGcQQQUC9uw49bheSPKEcBufbCWkKYszewRkpJ5Qm7Pav6wzasXtSPhb4AVJHgD4",
  "key25": "2dywuZ4FwR1Ehxjv5VaqDmooU4uov8qDbB9jnHm1VS7Dxnomtenff38NUseaWmHhmkKsDkFQuBqJa9R2GZG2Ypq8",
  "key26": "3iLFH8sfoZ2nHwGQe54pBCgXTcpwB9mLC5rLyUY1WA13GtJ4qgCbZBymz5qwJzQNQkQ2WEzr4Dn8wZ7XyXN5iyF1",
  "key27": "c7buy4XMqDCVfDW6U4n4NANsgD2wco8JfXhZYviMoU34bEFnTDNAcQAXAMd4hAAQJshp5w6u9Mp87M1RhzfbQyX",
  "key28": "4ZJ4d1z7w3HzGCf2dEAxcxBpMuGuPsCGXt7enRJ1o1VufHd4FKukq26DAeaqKtmmkVZtLdnJ535ZfRqPvvbRCyMN",
  "key29": "33n6obW4KDVsby7xLKVMKna1MVc6SyBHcwXSVLSm9tZV72oC524qgsLCCnLRVoXYkeQ2A5ZhY3ow8WPJuzUTXGL9",
  "key30": "DhYLu67WDLGj9KsHDqXZz1DBoFrZ7b8rKmZ5aqVyvuyqJC1de56h4LLT36JLftfatq2JSacNgbna9HSYaDLSBLS",
  "key31": "2kE1ZggEf5e4uzYXxy4jT3UJw9Laf1jZJRqPv6oWfmp1GY3vqDuhA88m4hEV23VPS3VYCgHmgkEPrcAC1eTPZk6c",
  "key32": "t2o5AQPLh4HicafBXjrovobkgGSeB1zGePvmBYBSsYTDBZFDx6FnXZqNJq2Q5ctiq6CvhEqKjtQvadnzrxuiKQM",
  "key33": "2DangJVkQGo1GDizMhCZydiHa1rbg5EDfSkWtERCT4ydgaM9vtHND5GEyJyzsQ5RT1MCbA5c7r8a7rmQ3AsmoBSd",
  "key34": "5S49e6iwZoN9imfvQCotXZjt2ZtmKh4uGJG63SCBAJ6FytmTvTcZyXK1DhNe2rq8z6JJxmXhT3psrRbsso3fw4mt",
  "key35": "3jcYT3ibBcrfMFDBtAAUao9QRzQNKcSeCLs8zLX6QAt7DZVq4kVtL5puthBVvLJaqxfXKmjjr527p9RzKUjdZy9r",
  "key36": "28eyuozhfxiGZow3aKNdspKGpozEQqKLd7gYoNPSjiRGhTFQfcpNTxizYA6tcPHetUDTeeSXyspz23XVZgLfYnit",
  "key37": "5mM5iAYWq9BLY6ae23WoSLe9X7jrNwFauNrLrmczcFNCMWQqHoeT9tncoSEda8AUffBSesReqTGHNBNPXtfUjjs3",
  "key38": "2f3F44aHnfXr45XgHFiJMJ44XuJERiJouGPe52vzNwaq9iMdYgQ83VowusQXNZskZGgUuZeEfG7csiz7zZNpKCg7",
  "key39": "3JWU7RLP8DWRh5YQ4T3KD3ByHX1e9EfAWi5iq1U63KxBb5NydjoCDbsJbVagFgn9R4by7V6pkvZxLzGVz7aUY4D2",
  "key40": "MsfCeB2KCNxaEZSbEsMaS162KfekwTzUvphU14bnCxTKFnXfYZGTrFQR2vwZaPbzxpFFMmWajHc8DvWbaD2EzwX",
  "key41": "K8Up7uNfd4gnq27rrS8W6RMSEpvjK8oLkGaBGMVQzox7RSK24pHPjg3aN7XdrHniz542nYJCUp877hKFvffVrps",
  "key42": "3cgtVjif5GrwsTS3E94cdRNY4QgfY5Ht6hSfZPxRv7uqyvaPCWYRUZXcryhiNJZmSepMpVi4a1antpcWQ4XXf9Ls",
  "key43": "3Lv7Z7u3Wh3LPqNtk61RymmmiiYeTDCh1k5Ef54F5o83Kvz22uZR1mgb7wum71yooN333VYA4Rh7yu6WhEB7QHNu",
  "key44": "56mTEWDb8aGCqsmaqG5Psw9V3RuYuenFTqw25GmRpqwcxzda6thaYQhHWk2ybNCyygU1pT1n1n6pMtqv8d25aGVi",
  "key45": "huZXGHSZREEV1F7k52L3dqSqtQkBjvEZ5Rx7eBy3YfaBofE5pW8KqK5BBTgHAu5J69HLWnjgSpw2KUgopnZy6qv",
  "key46": "tM8bU4N5wFJcoL42CRvGLufv17UuFgQp9jAcXBGQ9eEk85kHbAQC9SFueCqimuQpkjUtVh5ZCtbCeXBzFHfQPrp",
  "key47": "36hx2hBgcEwcuhJoNdakTDFoJu6QWFXCXv3Eq5oGeWnQiXhESNNscGoHeiqMwnYU7sUBAx2N7D7dnJyFXSeKjafV"
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
