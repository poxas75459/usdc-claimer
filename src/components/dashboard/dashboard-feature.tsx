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
    "3EZV9XDi8m7ULW1inaX9B8TxMGSWFhDFzgTbusMFkobX2LTFvopGoiYQATAw9YwwuR9fDwp4xBoKFUApoZYKGAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b81eQKsAH7b995kxSD2v8abMQYbH8qPH7qSf6SJDYvPoRuovc13feBe9d12i4g5ZjBjNvEhMWwPa1GBsz2uQFjk",
  "key1": "ykzuVP8sBB9GBRqUrVCBcySTxX2ayPSLiaUi29YMvbs2fH3zPVj4uge6Vhrgwy46yYYgEEAmZ9wSWZ3STtGXky4",
  "key2": "3ThvRJ6RpkUUUoHvxKmjV9Yx85ip94RqU78LpRp6ZpXyNPWNKt2a78TMamZje1uE1tLhonP5M9prjaddymn248KK",
  "key3": "4vYgmmEnSWHtUnVyRNuDYtKXWEfo1S7j95ncqBtXxcttGvvLJpfYSj86U3e1uSfd2ZkrTP3XHHZBQCHRHQVTP29G",
  "key4": "Lr3jawmrQQTWrQhQAva2RDxqodCWJwoDmsYA6YV9rhFkQznbsdJRtb4QrG3jhZ7Hvqwpu63N56M8B7eXjx1AuXz",
  "key5": "4t8By125qGiNekWkuUXJRHgtEEd2GqEuEMCJFcMQJF8H2ekNQqQrgBsKSpJohtyamnKX6crMktFtj8xbwQ1UJXX1",
  "key6": "31dKMLCRBcMZ8CQ1Zh4EdHMqFCraNLUroPcPCT1aPTrpa6apHSV1oMKH26siCmU5s9U7oCQXnQHDjDWAW3D6Fa4K",
  "key7": "zVoKaXbARUhSD6ziVWwyGexvfC6nn3xCQCJfE6Lhh611oJna5WvmrCyjjNx296H4rsx6n8W2riHSzZULB7NghWL",
  "key8": "U6U3CaGxM2yz1U624obJuRu9XSw8PedciNXfH35eyVg1tF4LvtgGepNFcWZbz47MS9Eknj2UQjCyXGADBRXAJrg",
  "key9": "RgGu2zadWW9MqNgwzrqQnoFLCfT1SSjcse1GA9HozkHKmnAeEcBQNrVzWLN5mKcrguafgrgMAzvzQrH2K6RaikJ",
  "key10": "5TzXp3y7rFWJg3Tu4G3xieCxNPN1YFTBD3gMBqoW9TfS4QdKDF4XKqzP1jCgFWEuZvfZzq9dEnEkBUxA9aJ749KR",
  "key11": "hTfTQkxBNurg945oTCEoHTdbJ8qaVPHKZDp2P8vWjbY9KgvsN5TDUL6LUAu1SmkffwjR18fahc4qXJ4NouYsEvE",
  "key12": "5vJYeY9L6CzRX1rTRytZ3RE4cTsAn494GztjR3ae2jBdEuk989PcGDGNgn3dzvdhD9UGEEjuPCjSWkZjzN5Xvp2v",
  "key13": "61tGwHDdiP5jSsdEVxcvAjXoCYXFdQYxFaYoUbZTn7baprnHsQGgcurP88fuQW9Etrd6k8Ghm7ZQvES2M8Qb2xAQ",
  "key14": "3u3VPHin71yAzckKMmdarF9dgTgew6HyN71JE8xYHKcx29T3sUFbZPSE7mBp3Mjp1QuHo29ikJGajT2RTg4kpFHq",
  "key15": "QYXA3BXnh9LxVuCAtr1WJnGH64Qce1txRvr2UR9ARPGTPA5psHNNXkEe8XpZVHUQg4QD4y5nv4dfRLnVuNey2So",
  "key16": "2uv5nmxBePgdRbPktKPpHkxWF68xnXH7q2ffd2oaoK5qmva2dGSKSVADWFs6s1nRMhLJ2stPBBtiVw6gdnVcTaQk",
  "key17": "5BWZCfKeU8U5daUK1uTW6y4PbYbn4o3d5Epwa3F833tegMeUrwAv92KqCTioAa6bCcHKdKTMT41cpPAofsCNundq",
  "key18": "5L9FbiRicbmJvAvozoVnugtUX2XHanYwLwnEGyMRtw2iE8FEDjZEiHGZhXRpko4NuiRyhsZhmQDUJkb9yPxiC9SC",
  "key19": "2XaA2ZrHhusZxppkTEGmjuq96SpqUebfCqYqQVdE7piPupKTFaiUe1UNt91bwGSW59bn3u9wGJr11JYAMzJEGa4x",
  "key20": "rowLrGAgBueRV3ubaXVhEPRCWUW7HMKr4QPgfDQQSQiRthz98AVp5CKWQtjwuKdPhk6fMeUhxtAXTCwHNS3oL9W",
  "key21": "oeVXsJVtEQwddDfQNyofThaon9NNrA5Mhw3feY7mw5Azx27cvF9rsBv5RXuexENTmMmcEBdQSMVqjeuWkHaR62s",
  "key22": "e1wE6Uf7LSM8uS69y4hug3xyipwEy22foJWYZEZGYLgnGdqY26Luw4FbkYNMGSRuA1brdTDHMiry5VtX76cLETL",
  "key23": "4Qj3ixT9F52T4tGR1WnDs3F4xvqcfoASYwQvvz9eUSB1rjNFPT7Rs2aMaSwPLFqr4hgP2bvjnJdi3bB9JCZsBM6g",
  "key24": "4N4QBwsExHm9zVeMntJbyQmSPgAMe7XV33ektLBroAaV2mDu1TUgdKuWRWXe7FtqjqqVK5FbBNkuHB4KT5kb94j2",
  "key25": "qX6tvEKVGR3voeRQqbP1bEAj6xBgAkKvqvSVawhM31mS5ytKCfDwLfhwVuM7CzqSFRZhbXe8NtPQGopBLwpaKgp",
  "key26": "31GaK8MwJHUNStpzTFnyXrmufXPBjqyt5FG2H2MXJwi9wK6uVEwZP7CeBiueJotMxDfXbGmt5S6XC6zZVjcaF8Bi",
  "key27": "4cuQLPbPzNSWoXppZ3SLAwjLR2gSfaqpBXKLNKudFuGUEohFPFd1LWZwVQHontDdfUBrprPvRRD5mRB287z2nLZy",
  "key28": "5jvDeQuwwK1Bpz6ragBYR9yWBFzHiYZaFVyocYynMjGP4eRJdGznGiVeBc486inSGPRjsfMDEhkynnXBhvDrRXSw"
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
