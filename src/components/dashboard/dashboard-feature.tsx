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
    "4zt3cuskw49X2wXLs2tdzRJPLaB2hUqKymy5nBaZA2fTSo7cD9e6F28FKMu23cgZ8E3V7Ktz1JuFAuV5TxqpgZhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkwEk9wo5mfHT8AzdQBCT73EkKcVaoVf17s4WRy5RVQwHSHnSfeQh1W9Zb9NTsdaFR7sBDbH3Vdpd5hvMpqbdS4",
  "key1": "4KAHY5DQNCT1c6CL1Hj62bAJud7Uy8qpcQX6x3kWqd5mW2N4tqQhdyX9sJrNJbUUMVUxZBGKLa6NGEpH8WR23DUT",
  "key2": "3kbSKKx7VDmjAewaYq8KMZ1nW7XFV6LatDiEf22QBDAaPij8EYN5y8uZUPK1Gg3Ux2JMgq7KxbwyVkYXmCH1nD8A",
  "key3": "RU7koBHPZYsqYJGnHEnEQ4Nro65AjFDhfxuEmpja2FeuLAAjVrAp7sbzhrKEhX79aZhkAMAFRBkrAwD5tqzbHoG",
  "key4": "3ihLP6vPnn5KE1SSBEHepKCRvNRMaZnujYpZj8aDS6yNd2SBJbCobemSxwGz7mt3VHVLc6M2MwxZnn2Lw4XTCHPY",
  "key5": "3GDZgW99BJGVySb5qcZKHTrug7AUxtD8dwSxqnPVAZFSvXAW6xcEZFF6mo9jnVknst5xueLzKPFaGtMxAPdb4nXv",
  "key6": "5qWGaikWEz7FxRd7AY2TxteqZBwzzHGK1qdFbzH7f83VXyy4HEFgryNfvtZTzChqMwAuMMDaHVeXWBuhic7iMKhk",
  "key7": "5QSbiXmnaFmDfwm9xVQLd1o7TrwmzzV9VmUCykxZ7VuAPT8k84w6JaLRCSLA1L7HFUvhQ4ZNS142Z6EGYeYVk1Zc",
  "key8": "VqmHKMnxinXJ2WKVodQJsmwrgDxpCvBKdD1pidV9kmTaRMW6NjcXjULGJXD9dQSqtfPFXKQsPMo6S4biiimYFJi",
  "key9": "5WCbCDsw7GvFki33KxnWU2dDS9ZWUzaBe2cq6WeC1PYbTk5vcFE28mbW6Nk5oNB7JDbCRFJt6B7NM64mQjCp6PU4",
  "key10": "3F2FRSTZRGkj1YvfTMArSAW3exbi7Pj4i3kXqdX7Lcoputj8qWNSwCBWDWg6vEKs2AEboGwVRYfiVs7Xr5qSepP6",
  "key11": "5QoMtePgdDTqcLG4yKNQ6gRJ655EK8nKd6fP5b9vDcfKfJwSEUYJgSHRgW1du11kHZ54ryo1pvxNpX2SXFdq4nCL",
  "key12": "5DwYsvoeQZHwqXmsK9cJgKpLkjAgUFnCqy7viaiYzp58LmzahN8M7TcTodvxBXo3eZT3LsUgrn8Leq8yVBXjh9ab",
  "key13": "2S9Yu3y11bw7cwd84HzhmT1wrb4vPqYHymWHs6iVQsggxTPuURTNDnByQ2fGo5vRy8Xk3F98GCvALFUXcS8BCAAf",
  "key14": "3fFtez3z96FEz9X1daecXtGZuy3E1Btaz485E5mihKjiuqfYuk7q23rmm8HNZkKWzv3uz2rWBFnUocrkRGb175eH",
  "key15": "cgJFYr5TCit5uz1QisXRamLqUQQkxVs8y6JbnyEnWabqazRpnKmMn95jnC9JcLmMywmbUimKS6vGpqsEDctuibr",
  "key16": "4bJ6Kpv7kmSexhx2DDqXVhwvmGLtxkFjt8Tw3fK37iD9uJbAhachLZUiff7SRZdNXknUPtZoQ5joWhJnqrn4aQEK",
  "key17": "2nvFjNQo4odpw8AczGPJMPRxgncbjRPLxqRjyBUBrQjucbqAjhPGcijSYNYW9kANLGyqRZCoPWcPHArKNa6fHy8Z",
  "key18": "87TKCgZJWqnDY8kwPk3njeSLXFdUN4mon39XTaaJG3eTkJX9kT6Gm6uAxBpHH3LppKzTdUcj14Ex9tLLs4i5te6",
  "key19": "A7X1TXZrmi9QysbEpx6Gphr3shPKiVeumwKpmxrW3ESKZoEvN3H98FHt6PnnF9CPpy6KdX5ZtK98eAFnnMQcFcd",
  "key20": "62S1f5XXoSvuMCCahNWQ6SZNoPzLYiuqdQdwNtgYpd3nBHDnfZK1B9QKdi8BXEmkLrPxpudm6hPt9PU82gorC3y",
  "key21": "42pz67uSap89RjEwyAPYDx1Dspyg2Vnw4qSgT4BnMyHgkktX5wn4vZCXTXo4aQZF6Ssr8itBoyAxihg8etK5BV67",
  "key22": "4ueqPkvcji91BTu6bw5YGbJCRzMPCkKoUZuReGV52sWUBFWjmbWcvwCxTbFCTNy9VSLZZi8DYWfdenA3xFySFmmH",
  "key23": "3QcsFsCR2AiEE1kME7FtbSdhwtnvz6HR9bznVv4Kso5BrQ2uA4Qr7XvV9gDGJvVX76VwecDF51uyz9ZK2C5eumVH",
  "key24": "4BryAcWAFn6F8NQrzrRkpqS1m9i8jEevsFvZLFWftfJpRB3MYpgHH847RQWvaBAF2dQQEKpGZsHy5MJt6NZXrZ4o",
  "key25": "63etLkbz3EpXhh78gxWiwd5ajXtMEvpWznsB9gvxqPPD5JrB1TxCGt4Fax73t4HbtmbWHgn2UtPcQvMraZJFJZrH",
  "key26": "5YGUAeQPsGqeqptkjcf2CAGYEYno4JtR3HkxWWUau4jG3h4CBxDTsUtvod9BMhq5qkMXewvXfhUVGW9yzAAUdeZX",
  "key27": "2DTkyW8hUp99ycF7uPAHaVd3wsu6vMWJUfZ37zNX5wwZ4vXTKX7ypeft3AYuC9adLxWKXLjgjSDpbdmTv6sLsCyA",
  "key28": "4Qpj5rr1N4FiYnKgAvDXjpypfCz3n6cBXbN4uPQ83uv5eTTYfx8r1j9xgGfALYSadYpAngsNvpDVPumboViR6Er8",
  "key29": "32Q4wuiQRcP287DW1SKMWDYo8mSC4Bx2DmJQ34vJ61CF7NZaydW25iPu8DspAhu7FvszAuDe3V1mNJ8gencAmQ69"
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
