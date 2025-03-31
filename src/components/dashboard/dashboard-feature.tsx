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
    "5rEAdnogbTGG1nhf2m12WKcAAjWf7Au2QUMvnMCjQKrfQYiRfpabMRddMYGGnXPpd51v4LgfFy2CjYu8ZzqiQFRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBpxavW7mxZsEe73Yn7AaDah3eQV44vrePYrz7LtdmZsgKAaMzWkkY1gSGeW7muvgB8wGGXYAmhBJ8oEm8wKpPX",
  "key1": "5CtPF1dTRWBzRiEpHy1WmiiKf7pAg8mRPWrnkNsQByHQ6SCdJ5RWaKDpehXuYqpbJkoFsbniouvtCiEp8298owDX",
  "key2": "2xqtaHjPiMMSpH6WGoxpDiqvB9bT4W6QPSfZp76CYB8ifp5D4ThbrhReH7rg17gP9AjM6Lr8hxwhQJ3vLRLHSZFj",
  "key3": "3eLqYkzXX96GmBrdxHnEoV4U7HNZ9x9myLWzDeDGoKfKmt7pJsPxm3NMNrLdWxjcZR4jwBvbLAFFCrFszVeUZEvR",
  "key4": "3ZkoQga8YD7hXKUUw25Qn8VeUEa3HWLQhVtFDziuCby9BsFnWo4emxay1cyLBtsC5S5ECZQ2anxciFX1LoVJWxxS",
  "key5": "5MJDXS4AocgzrY4kM3JTxZ7xT3aEfPJQnLigB2xh6taGm1CFgTAkKMsP64W5RWz6UibzFTktdj5oJ4Ct3PXrqWQ1",
  "key6": "4StKMpf5w532ncdkk4A1nw8kXXui6QHwkcM8f1Fn5ek8nWA5M7Bmu8RPygKETnmAXbMDvg6RqziRTDNeUofXVGJN",
  "key7": "2mQGbPZ2kPF7qf9XNUnpfJJbWExzAzPy1vaF9y6yB3BEiCmjcgjk6B9R9HPxBgSnYSmW6CSkLqyQPdWGNKjePeYP",
  "key8": "WCgnfgk3jJ7nezsyB7Rz9suNNbXDUPERQCtMUzfA7zthVi9J3FsciVFzjrpS6zCf3nMvGejBHquAmBR5wj8iuub",
  "key9": "4mGCZD3F5Qwk21MsSJK5sE2wUJwPQnYVoxpuxiMWxfkmnccNT57Dw5TGu4JLgGNYNcQ75ZnBwxPSL2L2Y6DkCfft",
  "key10": "5Pg2Keg4G2nBKajs7otuz2XLzKuYZa63uPV3AiCofEoYcieNmejXVp1EUS185jHuPE86r6K4VRBGxWn6Vus11JYg",
  "key11": "24V6DgdU5RSqzUCqidBGaGxMxjMER68juJJQSMve7vLcKec2TkMwr7PPUti32zcUK3XaqYPFEt2AbcuL6DdqmUNk",
  "key12": "ScBXzv6fzubhXs3phpKT2ysmvZQQ4G9api97T8kuqrURL2j8zVYyo5erJ2XU5e8LcJtAfN19bmLJ5HyvCYaWXa4",
  "key13": "32nZhaeFp9Qt68XAUY9gFXKWQREmGSVPeqbsXXRXSZCoTQJGUHX2H1pHpF7KyVyS9TZscjfvFgcJgMXooDVdL7j",
  "key14": "nkCmpH7jHuDvtyKzuemUH78n69hoQPA7mFWaWz5dXFMt5YwFqzGxaXKogSs2SUms3PQsyir4iDBUz4j5Wn2wUsY",
  "key15": "5aTcyQHuYNrkakuszcxuyVDr3oW2hEpGxdjZRgp3oVpBVhJRbW9cthRF6RCKL6B9JYxmG7YNybHkEReBppQp3mjw",
  "key16": "5XC2sKkFBcT4Gfvz8fHzg4cni1eb4GLjK5b1bjttSmhUwXLNPDVqFGi8b1WgkU9zxjyYTbW8BSzFhkW1tAJE86NN",
  "key17": "2EHDUvpxVDduFkhF3qCPmkkLDbx4LtrB6KZmeRiBqMnWT4ufkAP7yZsHkz9awLKuRVnrkRkc4FmNUG5LJsVRTrZd",
  "key18": "2TcacKzJp5JwN2ng3V6VxrgeafLCVwJW8FwXrKx5ciwQqZX9GsQhix4s51rSZ4dUvcmNwT9VHA7cfFU8dqZM9why",
  "key19": "2dUKjcHaFEwUGBkN37AED2HTWYAKGEXE5eUt23Xz1waY1K4fGZApUnHNhwdt5EkVTsmUbKKfM48RVfpzhJL3D3JM",
  "key20": "4GWeWsucgMRdHd8iPbaeLbR9y1xq2DQFe3bJCPF3KXL4FmH4AbHNJEHRhJZsQrMpymsytJUJyZZ6JMpYot7bvLDK",
  "key21": "3LLoqhhbVjdHGjxt8P7neUs51WMWVcJX9nHgp4kGqvEUxcqfUArJDAwVDgTtgz9LxPYx1vZ5f2Q2Pk6KKhvhR9LZ",
  "key22": "4gPuwhk46au5z8god5CAaTHDDX1E9tWeziHtihYE1yh6hANWA5UKfKb3Kno84acAVCJhEEGwXn7BWN3A5Vd164NA",
  "key23": "2MK3e6DHqGQ9CJKA8b7ak54jPP7FUS8xB1sJKynNStYQx9LE2BsEUxPJs9WLwBfxe5LgCnyqoHinWxtj9Q6gsw6y",
  "key24": "5pDuCEsW9hHvJfw6ZGbT185sgV3wTYr7sAmJA3n5VKG1Aiwurda9KgNJjKuUedZr9zDjAit6VaJcaeDGUR4UKJUS",
  "key25": "3qeMtQTFx65jaf4m4MWtJVcNCpXK3EkbtwcP89YCC5tQSs43DeLUuMNR5YjQ4ui65tfStuaJPvc39zPGVZj7qyuq",
  "key26": "54QM3h2MEDEQwVUWWR6SbrKciKjUxgbcWwDi5hPg7sP5TmQbnq4m5tozSPmUS2EqXdoX6DNjU1RtizpPHTZb7W8H",
  "key27": "NFieNUJH4jm7M89vUdpEFm3ioCyUETi8HV18USfC8waQVjJAc6dy4wnhD4bc4n2hjYmoHexsQbCdmmaasavBXvo",
  "key28": "4Hay1PPqJG4trQPE7Wz21fQkGvskFuSXSYYeNW6gQxx7WLscVW2aYjXi4tvuDXqayAQNb8DZk2cyrv2TR1H61vj9",
  "key29": "2XwGkLrz9JCgGx5wyaPMsgRSQ9nKu9yn8iesm25mPCqibAc47x8s3xZ8H4uRENZzrFZhQcMvvkMf6D99GKispzZ7",
  "key30": "3kVUwUSmK3c3JaqqwCcCoiiKXebnjNCMXdAXRTh7wpnPX21VGaJmFbxEgq3Bg9EgFej6pHyopHrZGcP5xrsZ2y5N",
  "key31": "59s2dQC47wAnu3SrMaccc3uTFYkAaPk8KYWhj89GMbEwgXfWEjj79ABbxVfNLC2KQQ46W1bJB4bkBsMuoKVtGfDj",
  "key32": "3VR36kg4WHYH8jMARrkdumpK63koFdXbWLbWBBZWyeXh9H9gyLS3GC46cpnZjAJU23PeoXd5r4LJzxFQYiwQxbWw",
  "key33": "2xsn5VthMoyx5ePAsJCF5uBzR7GgzpyzwzBWqRG26gPXwqRNJSpD41puQy1qxinC6bzSnGwjw1TEEMLUfQcHDvrB",
  "key34": "5im35ZV9KDD8JogncD16qAwJCNXiYfVXvzgWrdfR4ytZRErWcNtfpLkVC28g4SjR9iXDfhWamecwSHGbxtUZtmYh",
  "key35": "2GY7N9RvPgcWr5z8xH2eF1HBvme5QKzmgfzN5T3mUks4fD16m4Pp64tKVdscWQQxoJRfhsacTohjXLksPoffT3e6",
  "key36": "525wDvb11HFnGwvTES6D3eE6nBtkZMHFZYrAkt1ZZfnRgmCGghNRanASz1cmJDJ5oVnYcjMx9qa3U6MXdSCLENYm",
  "key37": "5jhSMA5jhLbwvyTSGGNKwaz3gdJCqyzPGNbLGbsCUnEx3UbVP1AyVEJKyHaJhSQx6o95UrFTPZBtjmvAVwpXGeRL",
  "key38": "4KsxotHH67GqYMt1a7Kr7pqwTKVHcRo8J7ppxHERBqs1wQhcQhVQV2inyUCZSqLLQ5A32boFbVm8ibv4v823EzEp"
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
