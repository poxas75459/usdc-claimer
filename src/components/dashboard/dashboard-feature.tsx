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
    "3rnFXFAWofvAagCryazQgSBRHStLRp1zHFMkWxT1eRCBFY8oRNEQYZEqesbrL1pkcZ91jp8pBjPDNbJkvLGRw3Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XaE57GFyBPBb7dmU6aSBCuaonAxmyhnpxtkb5AvYvYqYKWMRu8Hhe15Pc4574cAMdFPVEXGBfbrMxAkkDfHVi33",
  "key1": "5YzfREY9avA1kx6tMi3vqUysbwMjhoMff8k2LMnS4meKzCAk8CQnLA3sHFz3CE4D54WsdGJVo4dCfix9SbvLbva4",
  "key2": "2vAR1X9idbRHSBfAWzMuddBKkZCeY6S8EDpZv4wr4vTXkzqv48Bwu1f7WkjftXpHtgFpSrGN6VonxPX4f7EtNW8L",
  "key3": "2Gs2kLbkd28WL2r2P6kAj4sBY7s2zL1suqQKA2ScJjJGcz9BDcokfe9Dc7toyj6kHBMMyGP2UYZwmD6mkmwEWcN6",
  "key4": "nCa3bY9YGA2JxNsnSK1JDknPobqQE2CoLSDGmb9kx8dyKDGv45RGfgMSWiTGt36kK1jeMiEmZMbuzA9DFqdAHoa",
  "key5": "3DavFt4aNiyUi826o1jpaHuxhKvdEsrwWPCxj4DxYx3TjYQbPTKsq3y42MtKqZLHbrt4L5qFzTToakM2KxE9WPpN",
  "key6": "2iSboYmwRsSkMiYvyhLyr82JSigoTUgC2mmnCHwbiAX55hdRkLDbzbZgdBZHBL8xyHWZGPtkBsTCKox3BnbH3eKx",
  "key7": "oB6vMCjym1EMb4AyqNMAnNEwcGPYcfjRytnzbdMMwYaix9iMz219i1eApNXpBQHLNVm9NYm7vUjsUsgvrdfud8r",
  "key8": "MZMxadxnAbc9XHmr21i6q37HgUyaY54i6bZJzNTdggUVMtE3v13QKAht9jrN8cmBCScNW5L1tLkbUqkxwCmXNpE",
  "key9": "4SUHG1zgUuua8qgHxaVeuT9HBpoM8jEnhPrNpW8hfgGytBXG5N9ssdzCXLmFvAfFtyfFZvYh4XoKgkhsgVvtDwo6",
  "key10": "49jNLdNP22hpy5cuwWp2a2bbLYzDGTWqvTka84eDVebQPg9mNYPSpvYvE2swpotKQXeu4Yq26Tf4d3rBhuoCs2fz",
  "key11": "3EcgRQA6BT97AjyUEFg4MHBAB2t2kvkuHvqbiRbQWdGe5bNNKaNtRezZTphAvFKMxzXw2LBFiNvA9kWLFtpuBXwF",
  "key12": "5wHBhyDrHPYinFpAvsj873zxTaHEGznbexDaGF93oHp1eUjpuA5TZiTeSJXnXQ8B87PQj8aZcPdYiGZt6N7LdtGV",
  "key13": "3ZkhBo2xAH4A2u3RdYgehVZLqCrvnJ78KnUT6ssSfFAp6tZLxme1DL9pWM3LNvx9iPqjy6ZQQFhH28ANBeRnucVj",
  "key14": "2GHEw8hDZaNZtCpMGCNKSirBoyWfvpXrmZJPXiMUjXjW8gdqqZp7SKJuakpjZhUWuf9AAqUma3Ug3xMrzHT1jxGr",
  "key15": "4c9EaxjNNaLBXtSwkzuTSpvpmtcUGgG4TjsYxFD4fuBE2N7XiM6t4LDtbT6HCVhocupbBMHm9eYqJVkRVs56wYV4",
  "key16": "5CuzuWFawHkRA43JQd5qX5Sc55mNK585GnPFjxvAZbumgpWCmzrcTwUMUFqp4WvrohCvKwDouTCaJB6JP61LPNfZ",
  "key17": "uVVQPBt6Dv5892UY9wxByMk4qXXfpFwJgUBJ7Eh3Ak9ED5c5YrMYPzWc3h4Q2exfFgAMsRfkrwwexzRqJawAvA1",
  "key18": "BHPwpn7raUBJhtTctFA3iXbUbzQNJHsGFd6YN9a49bs6z5bTEDjSoHwetYAbQ7gBcFEYzWF9LSnmorT2y9LWQAB",
  "key19": "5CtMgjXF1nvCTRBgtRzrJC1SDY1d1AJUVWrw3T569tUSzkYP1aDo8ecBdvpp6YzX7vAvvHg7tkjvci1MTBe7T6xW",
  "key20": "uK2VVBdBbX2apbxVDwnyLPcpYmxScJWHpw2NXM9K8qN9Ub8EJVJiG8QZMPuGVgSXbiFiqy9CFh7AagQwcUQVcZC",
  "key21": "4afP4zsK4czSHJ5GsGmK3faKM3fZXHThTQ4suhJyJctYrhA88mJ33KnYhUpP1Wq4tkxvTPn536nVhmLcEvyFpfGB",
  "key22": "3Dnsem9sGmvtwkgUrS2PNDecGZ3EYRA9RG6w8aC9YQCbSq4xxLLkHBrpaAuEtgHdW4JBtBb76BnBJDZ2qjMSFXas",
  "key23": "2rD86jbVCREA7xEYqMvD7WAqJEw8ZgBUwt9fEDs9c2da6de6xmFEQYKrLgY3QwSwxm2CQ37jvY6Afx1vR6w8zDkL",
  "key24": "2HLH4yhZEELdHfcBUvRSsDuQPm5F2HHhBGzaFkA2TGpGVfZH8uVCBdhd4fTLeCev2KV1nAiMd226iQQGofEubELd"
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
