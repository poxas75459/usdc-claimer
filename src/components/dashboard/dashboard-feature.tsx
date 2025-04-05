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
    "2dkWp1qyq4Lgfhn5rLuopcZJikubeqJZruWtGsZEZvxk5cDsUKe3zG3QJaKn3YQNy4J3Fu67G5vmKwMevwoWQLjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QbZQUGGH5ogpKyN25AfGcfabUKDwxYjkkr7UNL9fXytZXRPaqvwuZv9dWfPLdFHEHYHynsKi31CTFJz45sgEraP",
  "key1": "5rvByFWmSpYTUZRdknqwvugGm21GwziYC3zPtRXBAjdakJfDYSRJoQkFT1BvYNDrjqFcFp1UFs4vnogxdv1RBEzc",
  "key2": "4h8GQ5vfajzg5ukSB4PehkNPWR6zLLUb8jkNQUwycJ2E5rbqnkDM4GrKckAeU3WkfNoP2R4CiX2NEqJr6NZ1E7pL",
  "key3": "5TSEeu7BcjMbvwMwAnodNbWF3cuDj4GuDBFDmYbG3pdSyNDv8AwJcgFMrz3NL54LNKZt4REJbnK5Mg7czC42iqG2",
  "key4": "3PoqN2bJU6gGmDs2z5c7dtQrvFrfu8yn48Q27SymNVDPK2u68bihBrUQPzEdG8EQhMCKmXfGCodfdXNLD8un6RHK",
  "key5": "3qsYPggsufG7kGJR3QaooryHbJGCcnoWzwBXzELrPN8EEKUJgD59G9jCewLrDLzw7s89X15DofhSCEf856XPG6a8",
  "key6": "4LYeVZWgRovPGvWpPeHQBfV6qPKUh9CAEBFZQCYo2ithEjjv15YxMt57BE5P4FrvUZDXKefomQgCs5LbvyCABUVX",
  "key7": "3PeMtUrMPx1gYnn7vcnmeWnKwRGZt1fMW7zvRR4Y59HqpKHfHp7MtmDnK2HhTZ1vPek8KMq4Pn7owMuSHpGSk7XB",
  "key8": "5Tpg8gNr1RkS3JZLHnPWzbP3Jk8d5LXXC1PNi4hPPnXrhBGHs43TSsq5cxShikyufnRG8nkGXMLzGnw5QpZEmkVE",
  "key9": "4Sk2JDc9DLFzsSost6XsNJc5jwRvdfp9NDBh3uDmjuAY8YTx9w37t3UpaKkaYKQRJBotdNV4Hz19c6QA2otc1pv9",
  "key10": "5PeBLn231XLBAmpbZ6GmyazdXkgkiqUq76VC7edefmSLVpRxoPmb4qV3b83cYTEgv6dEDu81qbS9ieeAPr9stTWp",
  "key11": "52Rq4k5CX5U8KZoC4zoREudoaMGFEdsf5VmSakXb9wVsuoDyhJMfN2yt4SpRT59aY9iA7GqggM4hvsfBC5rX5ZnK",
  "key12": "UJDN2Kfq2CnBeYBE8JvpiV7n9frd37Uu7T2W6c7WK5ez1Jv5Zo1bBdcvphBthEGtGHSxC4UhdRCPh3qYLa4u2XN",
  "key13": "HQ3UD1rakPDgRNpPBdGuPzSTSxwnFYE471R7eofzhcvrwQ9nqsB38VUQ7TyYfx4zu4F1JkmehSAd2qKtGES957u",
  "key14": "3TWA33QPtRSMJGmBPjhj1QmNyJqQjYqFWd4KP1M69KoiVhaD34QMVJ8y2DSsM9HphE6oiMotbTmncJAzBqAnQRXh",
  "key15": "5FkpBeeg5S8HpxvsZkBUQiMTAiiAFcWnC4SfEFtJVn2Uj7ryVzJKgB3t36NRrgcqVwi1xvsevPw3aQyQsa4aVway",
  "key16": "4DNA3AnshfRUtJETE2xMnjWhHt5L7fax1XoUiLvgeUgBBCNU1unqeNJ3tDTEcLxyMSweQVCBb8LsrMziCDRiZwXy",
  "key17": "4DchysX8rFzEZWacg9cG6EB3991uMDWwAVevsXFgowaVBwZZzrojETTTV2txkrVvZkwbmZKA7TvJM1cWfdivLvmM",
  "key18": "5kTk7Euomnyn6f1imzcJYjq5vrKZMX7kAxxiBbmbfsruvSMgPJ2eVjSyEZ2dwfkqnzwohPFhvdb25XFyjeABNPLv",
  "key19": "2qbq8hebcjj6fFHyi9MrmtYwQN1YJveEBGPfTFUcu5x1oDWMeeLBsT6CTaHbVLAjdEw7MK8XyFYHGbhT3tE9cQE8",
  "key20": "61VfJQDbGS7gDPncsbDSi14eLmcicg2fgNFDxWZnQVu1DLiaVPUd3dE2Qz7ZFYywhCJaPBgGwyvxe55VWYkd9rjC",
  "key21": "5BPSF3Voki2VDapnf4Lj2R7QZ9P7sfxQ7nAERDUw8R9NdfL8Jjur8sTSnFa4RCLA5NspHjiETm6iFzD7pg4P4HQP",
  "key22": "38zKQW9H7JcjMKSGGYv36R338229d93gDZRR67DCsJfj2U1JHF1AVv8H6c2SjYTgY4poxnPtVKEB4nsUdd6ERtZa",
  "key23": "3MqBcJ5XcCMeHEvryWNm7jMrGhttzxxomZoDeiNoTdt4aX5cyo1zBZvrRsvRrTNt5RHHtzp2PaFJAhJJoMJ2h7Mi",
  "key24": "3yntGZ7snd4YdmYG1VDWobZEgVVuT6TsCYtM9DWw2PGXFcsQWgFCgcgRancTrjdF8SXouXdJNreFJoCJcRawq6Wx",
  "key25": "4JdZfrgXrp3KJ7Rc4pxj26ypayHNgxceyNHqbb7uJh7W36YMdxqrqjidUjK3CrGdehyRwSTuNM7tPnhdqFXVUmq8",
  "key26": "Lv1rpDNF8g3bmktj47c1im49d3ZU4vXRu27zgSeNKKYdihcP1java82f4FShr4e7fjTKJ8h1XfxvPrFzq8VheiC"
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
