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
    "3Pb3RM6dkv7uXsEPcTLHein7v3U1WTNVDBtNqd49Gu1t8KTLrdMn2Ti4sh8DeMbzZ1FyKmaimbBMfF5nXkGkzC2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57itkrjzZrNtQ8vEgVzQhdrfA4QE3Jbijb9QNVgPQ7XGphqAdxdCtXNkKc6sdyecpn2yDyJyW4gd2Gv5XYwWJz3H",
  "key1": "3WU5X3H4MvusufbEqNnfvweExxhSSHxEnxcW2x6jd4RyjCrWKSctjLY2wwMbDNczTrgMkqXaZUw4Pn2FqQFkp8HX",
  "key2": "2WvzYBU56MxkJjq5UYV9wGnRozz3RqKN3K3c5KNB8fzfY6Ddm4zScQQGPvj9fswE5avWvCqmW8svdP8FYXabgaub",
  "key3": "4qpxGR4vtPt9jn5qzm1HD5AkU8dYuSGKPirkioD4iLkoaiTFxoPamdu59UwHyeydjEL2fVF36BabFfcJTR6nQTHL",
  "key4": "2Lmuiu4QTEvuqpjB2szkATzDC3VdurzrnrkL4oRKP4dyUrXQ8n5zLCny5tSBsUQhVP6cdLAVMQTJ3giyn2Yc6LMx",
  "key5": "2vm3xQdWSsuhKwAZjU81YuRTppzREu4rw2GQVoPNVKuasEUXXs4eJh5wwkmywdAUJ5jwPh13mKUPFUozqeAbJzhY",
  "key6": "4WyBh1VxcdCSd5Db7cGk76HuqcPm1NwCtH77sbovhSt58yZ6tECHieuQ6p7xA7QS9xAxfVSLV3DYdKsrcDKwvyMe",
  "key7": "1A9467fCJUT9s2u8ytoiCv1Zf5J8PThG5wmAe9G6nXecA3gn8dxG2SNpm24dQDhV6WFg7wrzmrhgMTTGiQn1oZt",
  "key8": "5xuVjQpekybfZdrLWYr1SQTZJhb7aY5qLXNFzWnY6bvoBx621Rox1N5cXWnSmK2tdYGwqzypJii4Er8KgMimE4ec",
  "key9": "3B1Q2XTb9LsXccSHNxc4VbRsczGBuXUTgaLbVNVvZLJoemZLX9rcRueQt7Ea5KQmtYsYeWqCc54ujwNLtBdjw12q",
  "key10": "3qXRBepJKPpNb3WyGuBR7RV4wigJBCp1XWSPrjWQY3sALKFfRAUQc8QCsRjLdNT3LEpEx4mfEBzEA7hnd7HTqDpa",
  "key11": "3R8Csu1iGZhK1AQfpffB7cbeQrmVXFGno4sgmb8xzJQDWmbEXHWn58iQtnXhPgTsVVVd1gAG12vj1bHLKi6D5dkW",
  "key12": "5cCe1E3h9Pjx4zt2RFuP613VHiMDE9hMfd9kwesmDXNa5Zmx6PJqCDTbMgTjk7hamDMeh1pHHZu93BQRdJfp4n6B",
  "key13": "hVfSfFa2gyHKaay5wBBMf7Azxu7V8PfUSgVbN2wiKhUAGFgtfvAUFYK9snbyUTfNVGz3263rSntfj3cFdr9yaok",
  "key14": "2S1zW8azQkPek1NBefn6vP5YcHG1imLp2VFvyi4NLRv528KT8tfWouSLu1PJbTKaN6UVZUCouSEYYGTQ39Meg4sp",
  "key15": "uSGkADatVUG3bvzDAhLtAMGUhdcuABuiFSaCNW2mqZVBYzfuN74TMJM5jYY2ox3f7vsCEmm6DFQTAsDwujZ4zhB",
  "key16": "zA3GfH1iyyAcqSRvmCN1ur8SCCYFZLrhtsDsJRu86gHvxtyzcsTdQQLuqcdbKfKjEC8jartYatzeCNr3sRKNGTR",
  "key17": "2AiTuLp9HJK6UZD4Nbov8TsbNQGUXiMhV2XzGG2hwNjjT7AkafGJvEXR8LgCP2WU5UUxaJiBoQCiV5tGhhLx98rU",
  "key18": "4AcqcL8dwN7Ae4JTWrUw5nK8FGoQasJncUMJkfnJMrg2Dv41xhEdWu4jU7WgHkEgdPghUP4ssb1SescmBoHu35M1",
  "key19": "3TSKWu1DRjsQWJsUm8qoEzGDQ9K6ah2ShmjMMGoV1c8tvEnVLiNSD6dAfuNsjwnZCWWS1d7VpL73RK9nn3ABvbhT",
  "key20": "4B2BMYkmuShD5CrteFE8KESTo5Z34aigCepBWhd7eueuvt6RipxTdYuqxCwdDEp3QCDXwmPdY7pDebdv9ASms4cF",
  "key21": "4NGYGKV6pMx6sL9RxNsN7tDMXfxov7NiLeU6zAmtC9kRXkhSHDpZjca4F2kxUsF3oCZ5rKT125tFVnmKXksHDLGp",
  "key22": "2ycrQNrkDabE7i9UPe6v7LrYpqJcdg2R5v9j1bhiQuUbq1La7PS2ZemRGTCk5M5ikH4KukTcbVaWaZtJvaenPbvq",
  "key23": "2meqgF6SxHqykFyinuZsDFznWL9y5kcDuPpgqATjpB5xmTXQSffJMSvXcWxmdzS3hsrNRS4Hy3PCeR3wyqoFTbJ5",
  "key24": "3sdNhaRLS7kyx4bDvy9NQRDQ8moAdzaFJoZNwGkcuFrxdXJvwAyPymm699g2eZPEQqjtbZpNr2HVfwFWsFGTSFaK",
  "key25": "2P3UP9YhkNynUyWU7729af5GCENeAwLWEkst72QHhf3XtnmmDT3P36ifke85xoK2BPZk4p9E2bpaK4zG8vq67A95"
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
