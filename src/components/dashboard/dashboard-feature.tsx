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
    "24L3LNXYwig9UbWx4Cgu4Hf2uQ7L4qVA6SJfuJp916Kw81ukyQzPsoLN6ccasKeaorgXukGemtmmjvviJSTEojfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmKiLqcjFYdrLD6bD8J289FWp29V5P2MKgk8t7xBQnbTVQz2jtA7VwN6yEgvcwH8xt5t9U53dxkZ1Drnfaek4Ct",
  "key1": "4X2xiUxwnVDaMBRTSwD1fnxm7HVYe6SF7vm2xVBckyyrh7urrbkSjTfkZUuN5QEZ9x9nJfZxNaqMLpn4R4yVFizR",
  "key2": "3FASkDuf4PVJdpphyo1gg2rKKrhi3M6depbXChN5yReTQ1BN34wk5y1oABaznCURfi81bFBbpa2gWtDpxDYM5RCV",
  "key3": "58iabhgQGT3BUCMZWYzNmLsYDEhatrfVwN3gig9zkL7PVVnCVdkKuggmvH69XodQfRjNmuUch4vPE8YRqKZirhjz",
  "key4": "2eP8dxtfnGRvMuZgNRz3cuPfcB8eQZDsWu6AqRSx9QYxV9ELg9tf4SjmxBjLQNfjSTvnWQrD1z6vBkCk1H44Qd1X",
  "key5": "3GTXcJJLKT5KeD3JK3yq2tzfi8xbcZ31apXFZH8YmqN3bTiree3wt4X1E6ztTwUsfbidQwM6wnjfWFWx24ECtiUc",
  "key6": "r6h3dAfME92fnAqH4q2yJz9YRyH8rW66invZc2zKg3viM6veR3PYdwXWzYDbPjFp5kL1c1PH8hWjbhCg4MR2Xy5",
  "key7": "3ANPGNon2jnxiL6AFqG3PRcYhRXpiXSz1veAKABZ6djrwZosPGvYzHt9vxYZaLPUUotGcaGc1ze4yMuXsotwP81D",
  "key8": "2HLKYQE7GmoxRHwT3qGHVf8KT9N8ydPGC7YowTPZMDYBH7S79PGQV5dr8SdcCVZQLUc4EBPyAbgjk2PcT2xY7J3i",
  "key9": "64qzMj4oVDA6PexSKikHbffcTQUD6gfZC5Yoou4kqoqvCdfRVijq4QkzyoQ549Hyncm1e8Aw5rJhiKnw5BFDnaGw",
  "key10": "4q2pC2Qp1wPgVgiDiygkprnBJBSiXbxUEWajAmH7Ag1kKbqNpzKNXUiiAbVeEL4gnLvvU9NQPMoZCzU2xMJZT1Kk",
  "key11": "3T5dh4pAV2HefWJmjQMLvs6cYFjAECoxSxVqqgCrFgqNPypDHPMKYrTLaLf2U3Sdm8QTPyaE2VYpzQNsHihN4B32",
  "key12": "39eDiRAVM4eeNs5Y2bjeGfmzKfyTVwVAp6mhwnCCDKgmhoVCGQZBDKmyEMX7QXhQYgNJT7TWopqFPShPRtWfb5an",
  "key13": "p3iyo23R8gaGFaQWTdAPnMB8t6sTzQGk7pUvmtq5kJFvtHLgjeT5Cu8WLcM7KEKJ1NATSoBnWvcqe2ruBaE2L8b",
  "key14": "44dv2tZ5V2KZi2wfVPm3nVFLAn8n2f9ZgFAwDo2qYDoyhc1EW92cKspghKJCWdk89NkVv44LWLLNuLpUkCr6y5qv",
  "key15": "2Nsy2gJ9RVKKE6DauygvMqtt2sDm22aiooxA9LXyJDTqx6tP9tf8T8Sq3JR5WXa15v2xKQzjDggJWPzGR1tsNmi1",
  "key16": "2PfAy8r1DhWPt2hFtSbkLFS6Sodnm6XVD4tW8SYW9DK23qecCdnKpvNTYdmhDJijWoz6A5cq3rMfmG9STTM18CUz",
  "key17": "26RojCQ57Kxp4v7t39Mr1PWm14jtG9fMdM53dFunhzqpYs5yhoWFuLVLzDEs4kEGPyMn7CfAPmzBEca8iBsyH8RL",
  "key18": "5TXLHJzGfFkYvXgYYKkLz4YDH9BDgreJcYQcwXGya5UQ6reXjqBprEeCAM4toJ48ihnTv3dLSYt7FnkKwQ8JuWqT",
  "key19": "2jsnKFaWRgZBa1iSrq9ynqwKDANwPSwozUh2xDS5wG1TUV2wHQdVdtV4r1ve255BYXrTBqo5gsGkpnE1xCqPQsG4",
  "key20": "3sMX4Tkun3vhXLmLoupzqjPGBKeZCM3YBX499BhL2Qozd93GT6DLouf64tNy7LsunfwzwKGT9VZc1wg3orT8jCMr",
  "key21": "4ztKsGdDreGEvNbJZcks17GGiW4aKkoSU3k1T1vAVuCrmTwaccH14p5yH3AHy5316jPF36GdW92uznUPvQQJytnH",
  "key22": "3cHvc1gevFXWdBAwjnms9qP49q9BGYnNEPHvgufc87zt3ZvTHs78CQkLyCNCZPHZ3DeNNd64zUsMtAKbPkix13gP",
  "key23": "2cmSpGwXCW67SkNdmwcVYUw9Axtvb5PLUJLnHhtvudfWwy87L4ht12gQhDh3DcMe3vrsUNaZFQZphvaWgY1CFctW",
  "key24": "27CyGhNxkVrTr2BbMudaYmRsit9YWoMRnaoHTF5ZrGAZSrwvy6AhGjMt2GfMQUsTekhxr45P3ksFPD7LUe3vXVzc",
  "key25": "2b4Fr1KD2L827AArjBx374ar1JrcAkNijrWgy2osruUbppv5Wnn1ZxQ7Qj6FZZf1Chhtv45rKLz5T8reMzNFz9bg",
  "key26": "4bKgB2RcDTQCBHMEdQZjRZ5YJgrEsFzm3wHZbJN1Y2CUvztqexhkBY8hcdp18GL77cem2mTchZfdG9EdwpkQsJZ3",
  "key27": "3qD6Yi9WHeAUuPrUhAAcjKi8ZvhZ8ufZWhz4YR3gCDMtPmx2ZXUC4nbdmF17L9TdGDWAtDfwxdCdwaax4zb1KwaW",
  "key28": "2oG6n4sbcBnJPRJWMwzLpMbDvfLHgmqV6HpTUzrATyLnSSyqvnbjoe1msvQqhULEiKprsovpWyVhzGpkiX6z5o3m",
  "key29": "2wiixRJwDzPK1mDd75nGyJ2WwGqD7jEwaKq3cRnNtvhQ9vv3xMSTCqgFsHZhjk1hYohynBRYkM6wJWDcNVxMLxtL",
  "key30": "5KsxZcavzk91pb3fjxHugvDqwcFHXZxV6c738DnMdWveCHNbvfkd8gFTRqYdit4sLDE6SBjbjj8PpPuG9z74DW4t",
  "key31": "4t6ExcHQwwrQGzgbEKHSSWRK1scM7Yvn2oyX53gBriPeHxe89ammCUz2So6nSRG2ddmbnmgQeJf2tFCnjSNpS9qm",
  "key32": "SNKyVaLVY2LJ9cQA4J5jGcGhyt176ekzkUnC6zjtgAhYhADJ8VBYMic9XsJ7ijA8415zjLZfJ3qvD3triN26Hpe",
  "key33": "2N2g4tQ8o54ubYD2Qxx14RhzMknsUeGVLUsTFiJ6jeQhJWQKC8TEku1CRRUCN1Bk3cnxAReJvB93x3QhnQV4MLc3",
  "key34": "tjus8UVhBa1cbbjc6kxW82yxSyhrwhi9Mn8KLJPc8us3JzSDtgt52aRmEF1gbfdEa9r3P4DVj31wfYfZoLB9LzQ"
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
