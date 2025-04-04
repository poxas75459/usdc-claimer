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
    "3hJ1nVduE7ebuGjnUBeh8SQ3QfsQ6b9JEYg5Nx3xqpsLTBPeCiHe84yxPtokAJ111SZQo1Fsr6cSogYeV7vkixxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yN7E4fGYdmn8rw1bKJ1MeBzhB9Sn3CgMSPdCfYRQF64tpnQVyiMiZjDAMgM2otCiFhxQnXK2cBJJ9vTXEB9cycN",
  "key1": "5XZbMUgcM9K885draYQP4ZqvDLJkxZKHqH5UtQvV4PZrQnB8kgEatHiPN19krXuyBvCRvshvQPNBuNsGJuUG5PEZ",
  "key2": "4rShhEhr7F6mFVtiyszQb1fW2DWxkqW15bKpyaMnS4DhspTMgVQb28xEJ6dKSdpQMbu3TR4EBqpum45RGZPtSFA5",
  "key3": "568m8HskqbxnofckhkG7yWW5yfK9rhUMea4Dqa2aDGZYKQpP4aM657bmpqJvsi4EEUz5o8GDLYGJ55RPS2N9jeAD",
  "key4": "5WNFtGmAf8cD3esmLDsoCczcERTTfHWtyebTZtC1LxSH1cHdDd9NiyZx6RvZ7BKsQaDgqz35uZr8fuXjRwv2bS1W",
  "key5": "55WZXuZbgqTd8ceP1iohUVJNsiPC1HGF2Lvv4mcdUcML2NDoN124hLzWQFx4X7BJAHiBhmhxHrfdB2Vr9QYYZo1K",
  "key6": "ZKKXHHTN1KEcqmfi7DBocBH3GGBM2uufdhb2mW4vDfp5wYwQBsD5NxeHKPb7UDzevCq2dvPEy9hnkU5vcvSnJZV",
  "key7": "2Y6SnvQKZZLWXV2DnfDMyzgpipjbsi5tkNfb499gARR4PFRfHjzAyvA4t88yQqo2j8thyTjFRKeurPh8Hr4KfwKd",
  "key8": "5UuUdnBW4UCE7NugXTiTaBmFxj8ZFZkogGRFnjWk7NkAnP44bFYzco9pHYmmYJAfvBf5Djz91W45XsjgA2AMYXip",
  "key9": "5tbYJehuAHPb2n62ttxWdfj6zhBPmC4hYvHhkPq6xv4Rqrbevxpdt7yPvsyq53CsoiECBBir5LcVNBBoEWmabFL3",
  "key10": "5vejsZRKrWbSsfATdzA8oz9KDCgBpufxjzuYcfywR9TD4B19KX2ZfCdiNU1icq4t3Nx3vhLC1Fv84rW9hmjwB6Zp",
  "key11": "4DXEDndPCij1C2AgQBhcDACnbakT5T61pSaBsS3W8iuLtYQ6qumNt6my84Chcti9mJ6FpjwgeYfGanRFNPc6z9at",
  "key12": "tb8o1Z1HP5DhL2CyoAjcWhRk8NgHiPzSdaD5cXZMuoUVp5vYPdKB3t7Zk9BxkhpGimdjfuZKBFCMjYh8qXfgAft",
  "key13": "3qWbwVNoudsMiWcA8w12fzKrvTWdJhPCzHwQRtcHX7s5pgDmDANRepvKE32vcG6ExsUzSEadqzurpikQrSRRuLVU",
  "key14": "51ioKhDhsh7wUR5YRWF5zkkJUvvchJ2FpwS955vb1oZwiYQWzYQsmiFSaSbznpxvazkF3PUR2UUvZNvet3PqBfio",
  "key15": "4vspfkt68NYPx8GPHZngAV7pVrDsf4z9NRcVZSPiYgJ8aLmWgpwDwzs11gmccwYhsA7wcuvzqKMKn5Cad2wrtFK",
  "key16": "223q9Mh9UGpUem9GHu74gxWf9JYdz95NbwxXAcHnHbhzeRzo3VRpPfVNBuYpoyesmDKvW4JMb3A6TXChWim2WZ3G",
  "key17": "4Zdm8mQCdMPy6MibAYr5nid4TjBc2ihTNsRbag7yMwygoqr8ooSJAHYfaoDZV1JqF8YYzWnwGiPTC2qsBrKDP6KE",
  "key18": "2Mvf1RJyFDDPsoEnvRrhMEQoKYM7cR6sAsF7TP7LPgmMekHh1KK4MRjRVZ26RsgA2M51iUzC8fg2k9mwJhFwooHY",
  "key19": "2C9DfvJPY8BZkHnLomQnnz8jwty4qhqxo85NaMkSZD9foR1Ko25DReYzDy8fqbMzgPbzAfnJjpLq3m7gPAch34N3",
  "key20": "8iHN1SrRaiXZXX2skzZy1v8SwHSjQwqxGrj3CyjUvev4ovBz5aRTzwb16zjYEBBTHVtrVboWsFr3HyJ4bJuvGTt",
  "key21": "3GydC3LdBsH33uhydZ4YhVeVVuwMMZpKZaWWgXRi1a4YDx22JNRsuKsAcuj9aFNo2pfwV4V6g2nkR99K3h9DHnoh",
  "key22": "2MAVeN8dsUeSXHW7TfpLNi2fUc23NLwcT3J7vwRiK8xvobeAvg9zPmPXas6KC9zhzV921fwQJTMcy2yfdCWmPvV6",
  "key23": "33oKnkHfxZsrWjomc9dMHNRAFKgeKkP6DKdqDqr3vNvg6SzMmD89gLoXFG6HmSkYsim1ZVtRNPDDnKuQKZ5bGxdg",
  "key24": "3qnS8hiatvLkczLxjTD4ToLR62VP14EvZmD2ZL7kVJEK3F4E8UWnWv9XG6ep85VN6vV2auF9gJR9hb6VzLk2doQg",
  "key25": "h5F7QN2zVRBMsJPTS8ep8YkRnEFSGdGQmW1nXVxxpr9iV67abp2UCpB1UztgBakq7M73n3B8vTzCQy1W28apyob",
  "key26": "4Ekp6TFXnacS9szWsJCspXDMhcfrz3Yg2Q1wrDwriGqnAv1xomRj4qBnka8mQYpynfyYcg5ZwkVKKdDxdqDYSZj5"
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
