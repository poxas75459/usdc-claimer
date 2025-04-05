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
    "3qQqUNNcS338rWzHoeFHFPep5tyuJuLej5XopyQLHZUbNJTk7jGacoQsT7qbeP1CD7F7WyWdfgm6qHFaQFGzXukP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ak1MSnKBcQynAP2kEWmYJjYpmKMpHpKk95kCYPC6Jz48yu6GTKV1w8RrRLy4LAQbfjfvo3eWH1zbdv29YxLuuZG",
  "key1": "5K1ha2xEk9omha97QPamthv7RGBGnqiPY4ogfWUJQTSSEFQJBqEUY3xJmFrA8YjLGKCvf4wUohxCweYLBqGKx8FX",
  "key2": "2ZL9rrN4UVQp7c5QieenmyecJpDU3Ekxi7rdTNs9oPX31knpq845XNSFAJE4CTzi4EEX7rG2bsQoiG5kQ94UkEc7",
  "key3": "3EiNPgY24ncDHYriuLHNtjFytUe2yswS5sM55323Amhgj1UzSg4NN3bAq6n97xFv7X1apyjy9WMqbcCj5qRbfYFw",
  "key4": "37b9ymBDvJkP469CohZ2vzBEANBMN94jrgvuFKRhv9yQX3zfkdgtsFhnewnBGMoF4iSoixtv2GTMfANcFMGf5fZw",
  "key5": "65pn5fM48nRtNQBvgiUfD9mta3G7eStYM69CXUxmEW122XZSBXrot9nCz45WjojRQpPqqj3eyhxUd1YfHfTpqT6U",
  "key6": "5KKv6yQX1jg73DZUPo1UdVFoFXqT1RcuFFtHNvFkpkNbKY9sbdNrVufmsctDwVFinhGkWSzPrgTVDqvzPmF3qJPG",
  "key7": "3nKXqjMCJ1sN2xEgvNsMdaxwAvA2eZP8m3Gy8mFKJkkAQcC4WunfjbYDCCgVFoXeQpeZYntYGU4YB6NEcpKSwheC",
  "key8": "2pwxg2xjc9bCE7b8rn8Qd1j83XM8R14iUmLe5XCvaF4VF4bi3rjUFszggsSnbMAPbQjcm4fhZQpHoGd5ppxeKXyJ",
  "key9": "i5v7jzjYLsnjheZSSTZaeGnE3aGvz5rysfhjSpiE2j5QPaZTqGyzgC5n83fDiTnVvbbBS7kCjX1B2LjHMwsrsDa",
  "key10": "4GrotnTnNxP1YX4oDahDuQCbv6BVE8q3GrnVZFnuNXNwebQC4VJtmLFyUJ13zZnn5W3yQx8abZwEyuT7tLXYJYZs",
  "key11": "M1XpSA7PHpp8RNNsLF5EW7DEbgs6QjgLNPhnZnkXSSeVwsAXiESQxow9EfkcAJy87aZ4PqBeQPYDtUJcS9K6Wjy",
  "key12": "58x1iqtYq6Rcub3KnY7NCmqAggB22XNwGwz83awNvgPrDPVuT6kyG2nfuFdXX2gYag8AKL6BLxjExawEDDLDYMkv",
  "key13": "3pderWxLppo2yBbgWovWfExVGyG6a7VSgUVWYemcBuguyLkPocLfsygM8GvnYZT8f7iuoxRJG52c4KT6ckKkG1j1",
  "key14": "3kgmtpe4XaTKkvYh2ckM15gB21B5Ez3RTyGLYuWUA3Q19KWwTKzVHEX89XtoxMLUE3CxE633wDymxVsZqoHRdsZ3",
  "key15": "beZbnW1BkLkqyawgSgReXUNj3hL9w7rfzkaqBqFaAJMYpRFY48DnNUAST493kHkkLCs4cdCVnBfkMhiX2hqwLhy",
  "key16": "3Hpwgu35RXurugXEfMaUcRS7oKEBVhyBx3JPvUwNj84rurxw5NuA5npZK1Ez1nxXmPujzJwvxEKEtC713PrqWRjf",
  "key17": "3DYTFBFMY9BVgchaTUc4c4yqvMTYMR97GvhqeX35akZpLmoDBcJVsZFsPM6WXzG6GeuQ7G1U9kZtcVJCsnW5E3ti",
  "key18": "4pr12QcYsqMnyEUJURmhxbRbLtwFuds5Fc1XrgaqAYZ45CEuzfkPx9DYvtUtnTWTcN9bb28LcbdBjnVY1sJpCWtR",
  "key19": "fYT6dTsSnSVCJfwYr4zhiib8wduedcoARqCNDsr89fQFR1DH7wjUiXXzx8BEtXMarEwiDCEXrAQchk6W8k8gST9",
  "key20": "4vu4khARC7RESug4KDuRepbrHg6bYWTt2mTe8pk6rd7vYPzRKKrwYQdtMyGAxGtZ9YoNaSP91nAURJLqCjRDLR3i",
  "key21": "5SLAo412rakcCUcJRJWcwNGX1e4ij1pSVwQZX7Po1Mf8U9pcmyhgJ2oDEofnn2PXhC3wYsByZD7TPGcc1x5d77R",
  "key22": "cFPFgSkw6TE4S5b22cHWncpqURQBpo131AzanskSvduYLKDow9ojaDZJfLsUSn1Y73Gg4rvtshKBNfrvA7CLJQ6",
  "key23": "5ib1FbqU994TPq3dsp1cRayxkSBJXi3rvNx9fnsgrXmvV9uqzuQj15G6BjDCfeNmvvBnXKQA2MCWZEASbinfAqDH",
  "key24": "3uoJj82Nnnz6MRbdYj8U6scFjk3CaudVVnYN5ZKLSEFRywEHnJZxGwKyDqn2vFPP6R9AFbbxoYN4J9tJYFtmgsso",
  "key25": "4V2toSqcEVhR7oCdjkYsPAhrJLr6eZWrFted7coUrjchHHkKMSPvejXB9nrvunBjwJjhyN6ync1fgrGKnjEQfHbK",
  "key26": "4pGHYcu1meXmCyvhTeckoz2VuPF1WqFWFHb2kzbUDDKCLp5rAaqbXfQZNNRW3Z5BBKbPNTyJYm5w8PfQrNzXGJM3"
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
