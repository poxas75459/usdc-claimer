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
    "2hUwxJLjGM8ZJx7y1zheAbuxG1SkN5NxDpMYwytnyj2St7LeKdHjuDkHFxY5aRtPpVNd9Mgro6PHiZfxJjTeckNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAJofi4S27U6CHmzF2tDA8pCJd9WsRDvHFTSWdtkiAfTPqQunCWAfAngMDsTi2ov1aFCpo5sZBgwQD6rAQK7rNi",
  "key1": "2KbxgWRnxjJP58fq4WUWd31MKziBjesMXSPXjaVPQyNhbkZvt5ogrT4f6TCArPUwBtVDqFTHW68U37p7sv8VPHLi",
  "key2": "GjWLbNiqPapW67rMHxZAvL6N5c6LqTgNuQJc5waxkiPUSxNTAaksoSUgVbBXEkHYtz1Ti4ULs9HyHW6ZErqfZ3b",
  "key3": "uonNYwmZRNxttLwWsYbrs8CbP8JwqhAjCXWm1jbJTN1LNzVKgbVrWiXGLA2pMD6gkPu3mMjvp8rGK7EXWxRQy6Q",
  "key4": "26UP1sGVJis2UGZyX2Vf9Na1WyUTwKu3ZPT2wGPYVshNwuLnSAtPp9BBvBrcPcczorRqC9soKaKs91TCVM3oYNs5",
  "key5": "3unQVXatAUU8v2E6J4g9ikVevtZBAaXU9jDYkeoHHXPqsAAFGPFycUweUNrouq48vPcMSJeXDPP3LdpF1f5hQFXV",
  "key6": "3NugYzkuun4osVAid8feH4hvYbqVBj6H3uQtknc11FN3yR4okUfXDvdWn8MHgun6s3HKBgM15ch8HE2Knre6Z5Wt",
  "key7": "42PSCVEhjSe5zUcXg28GFRcsGWoBKzM8BHFgjd6YsuXLBwxuxx2uds8627x8L7rQWTHSLZfHqTaJMnKteAy1j5Aj",
  "key8": "5uRvLmFELDXc9aAGDAxbQHsgogNJJ8Ny7zm5TZVq9LPJAUHpZZTWvdmSxdij4HqUTSf82gBXkSkVkTJ84nNoToeN",
  "key9": "5FrqDXihtdAovu2EMQ6vKjkxXRJGe7ynKVNKGkwBLnoehHdAwNj88tAoNMebvuf5BkWE1uF6HsmArUFWGeQ2iYeE",
  "key10": "484fwdedYjvBXy85KSsjP3i5seNwxwHKtNtsBEEhbvp9qqVgeTP6pwEnWpMgDe5YZaTYLJymejKjsRYciBFa2qcx",
  "key11": "3GhN8J2negNLHWYgt2S2BPVd29PRxAkpP9RXhrUAjyNBvqCCXuYsMU5Gy3toDEYmCxXUZUodG6cU19mzwCLcoPVu",
  "key12": "3Nes39vCc9BDEEePAna2YmtciUGVT6EhwmDRR2iTowDe69zs7Uvie22UVjRd7hx3mBJktqTA5zDTy5tX1scYuqdv",
  "key13": "3wzE8T47UrpPPbETDZwPEYEKS4atX5JcFSGsMDNymRSfYwG1UvEZRMoRXFGrpw6e1xBuHBmvGqHiLytDcPwNNVBC",
  "key14": "3kvmcyTsufen7zXuunwo4SgdUK9wEhfKeqBkdFrsn8AedDkhuq51uvnSGfJqf48SJao9NFuugz4BQ5VFZX3qm2pv",
  "key15": "5d8EKBhDtUehH81Tw2YGgGBDQRcHof7qZDuswEtihRy9y2zYE3qr1JcdeiwiD1FhtD1Y4utvmrnNwJPNq8UpRPiG",
  "key16": "4eVGmqzg5B9cVSWHUAXtPvrtC6KiNnYy7WMsB2imLAJue9JgucLpgiZpG5zGXWL8bQiTrSTGRn8ifdYyz4uefM6Q",
  "key17": "CLia5TJFhjUBtynpfYJqXdMhqbHsPez1hiVYY4DibV78iSACmupaYjG1zQdjuhRfbxi9j6fGJj6wEdrDYJ9mKhe",
  "key18": "45aB65pDLuM8HUVabNnk3wwdcYeAowsH2XuquDb7eHATExurCnAc7ismfQeQ9FFFxmLaa6NNjdC7TDcK3LrNxy7g",
  "key19": "5QodZZywELNjQNniN5itx7H5yHhgUFi3Z1rNczuAeNJ8vMpsYMzhZu9peKDQuV4nWavDW2vygujbEz3mx33F3zQB",
  "key20": "qmSKJqR7pLmFW4aRKDF8WWM8VYWqv5edBKSAxtpWwFCELZWgejFBpfvPNn6ddCw8Ciap89nZ9FQb4NcD3nHWjKH",
  "key21": "25hMNHVkQheNHtWfsAggR1nAtEUzq6ZFNZXxiAnHbrgzQVnvobqGDb38QnCtAYYBaegidSAK6oNJYSLukoopT7o9",
  "key22": "4N9xsJPGyvBRzcW8heCRRvy5V1VAFFwLL9xRXejDeWmHixUzyXkBNBBocf1zqUwjw42bKDSmPMcCeXiijWT5UugQ",
  "key23": "4Up5DPPXa5LqzMUVoEKPiTewcV2GuBLyh4NiQA7ydrCepTLv1rwun4h5VJZfdvT6VJAGjGDwuTSn63PnJboMFc2d",
  "key24": "UntQ3KaLf4W62VtMLhuenfViwQN8GRzoTtnaHprpwTyxqPUkbTPjBty8om7eVWyLTXEpn8SqYHNc4oKDKVVQGMU",
  "key25": "2NGAQAkWq6iNdgPYwdpYTkyszsyCWn7md1qMKkhRpA71nB7cSS6SBkquFQnB1ht2YzPVG177gj4jGX2mChm1ZBsa",
  "key26": "5i57Ayiggcn3ULyqkYSgpG29FqUMC7FgTJ63hpNJBPif5JTsgb48ymA5k1DgjHi4cMMjsB7E6UwbdTuST7Nsss4k",
  "key27": "2neP1tT9Qc6rqmJRQvJgMjjJtE6ZCXRnmgFRTdenXfso9W6t6i2fUpfBCNT4bpomiYWp7MFLPXmNKaWJ51xDRmmM",
  "key28": "4opAfhqPuzz4swE4786LVq7iat2seSHQXgupm7W8CWFVTCQwA3RuNJJ9oDpPSTYKZHVHyTELbh2vn1Ded478SzwH",
  "key29": "5Fxz7fB5KG2PjwjTZFUXpQwWdSnmFAna74cMzeVCnDTsW61ujgHX1iS6xvqnyjwbLf3kuMFyKRyAfuohqJ3ciyy4"
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
