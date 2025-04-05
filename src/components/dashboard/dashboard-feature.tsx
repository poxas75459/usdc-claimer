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
    "4dyPPJVSAj9NqgXpF81cZ3nenhCGUrvBQVGdmLMWt1wFKW8iPWskqKAAoXvQ2VqeHncTY6F8TkKbWL9w4AjRBJVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiHCwa7uhEU8JuxLY8HG5YQbUwQsj64JZV4451yNS7ojbQMhVHBryNYFQKHjvCea9kufKezx5XfbhEVnPJkgG1",
  "key1": "3SnDoK1yXnV3p72mKXXaA82rp8t9iA3DQv16jkpZgUacLz1GGc9xUMAdZGrjxHDfY36kaNRTFYaBqz4ssJaGJRHD",
  "key2": "4N1rvxmgFhtPsxGjJLYajSqny7BdQb3WE1NTXTWHXLhVrXswmBhpjdEC6YgcBTtYwmiv4yUqs1rEU1wqmgevsTho",
  "key3": "TbZKomhEs5yzuEXKMEjD2ZVAMEFWhLuwTV3cTJW35bLkBQuxb6w2Y8LyoeRhLr9XVC38jTfN7E261pDh6Ask3St",
  "key4": "5iMkPZZuGncpedk3kbRggDoqDWjNs8htA6dDfYo2HdSucRBRK4nuy9Cc8w2wqST8XG49gyipCgeCTXv3S3kfsLsh",
  "key5": "ckytwiiR25NB2Uj5PG9NoAQ2BBDc4xaW3DGSnpwcEjNYJ6EJfEkJ7UuPNJaeZ24qKi6r8HfSGMrPjcjvgbJKoRR",
  "key6": "kP2PSoC6SKRoEkD17HBxZ4yK8Lx7cRvokwLeAbn2RS6hY1QbwrdA6wpUPY59q3muRXZfHTdBLXB5U7cqioW79GT",
  "key7": "32FwaKYNbLYMfrnQiSvbmZjRHWLwJC6TGq67QLv2epNyiZZj8zqF7qAk4AaVgyytvp3icpY64LhXXDhbQ3FcU8Ne",
  "key8": "2DFHRQ8SspdzDmonEcYLDXyjoekzLQya8Hw9bLfdFxemjpkgJzPWesgU6FwSQnxCqvxTZrWz7jcQ3Thc6kQvVzaf",
  "key9": "2uZvwmUU24WPSoLSYqSZvjD1xgSYAm9SMACdCQ7uosu3JpG3jnv7rzd3JCCH543JZkJnZMvdvFjVPTA6uTk36skH",
  "key10": "4Rc1pyV1AuKQWWAbY1X19h68MfiMH1ndoxGjz3dCMe1sVmqcKq6mhZ4pXNRsDrWvmaTBzgiEEjp92hKpjNBSc27s",
  "key11": "5eHRtqDjGoMw5q5FCFnL1gWzqr7gqtQ7ULfgfEpw8JBiPACt3UtH88NG26h5MhNoJGUaj4agGHoMuvwdcJ4a7pnz",
  "key12": "FDqncvyYTttGzChBrUB31dWiHrw2XBErLvcR75gaDc5CCBcmXnagQMy5ps15XgJXoNFVKKSiWiMZmktfGZmwakX",
  "key13": "3hsPCWedFiG7sKqJgQF7hFhq3yYHHYe86NwqvRmBiFgPqgcsdxTAnwX3YXyNsZ7mep2GShKgG7sEopY7ZxffVHCy",
  "key14": "3BMtchMh8mojoKuLYPgo2ZosTdbMo54wcAD9x6z1NjzhBTqmFWiDoGgyfqBpS1iptPPQ425KBLMBREnJK5KJ4goh",
  "key15": "5JeavbApw2D39s1C7VWmbM3VdnwU8ELCRiyBFF3wKy7abu772eqJGKLYJWCHjRiZ3cp1tJ28j4VuscxNVqTuyw25",
  "key16": "67Ya4GYjR97VPAFF5yvD2dAXZTzMeYeQyAi3Up3TePDfvmgAqCNy2Uo2yXjy8hvHdGnr2aYVFXjyhMJowN6crJZQ",
  "key17": "5eTTcDLkWaztLivQfps2SrHjoKM4TeVsMrxixRCXZWx2k7v5WKvtWQ73ujJ6G2QnwaKoQfXvnQcBF1ZbcBkfWB57",
  "key18": "5iNbijrFuzdKX5uFqowcQkkQRuRf7cQD3x7UKSLUFA3xK8oxW9BJPZCtFF9Yb2pqc4XrdtUFY19iiqrVcUYCziq6",
  "key19": "4n8NZ1skX7LJk87kyKquFsQgzqa8mjEY4XmvJpuyEzNbtoXkacBzGqrJ4KZ61oRxcXRuxwaCPEhvBt1j4h7V4GqV",
  "key20": "BAUSS215nyiWyCvJTQCYkYeLvvnwP5LWKXat3pqZEu7RNhNoLmGR8tWJryVphHKVQYwRB4hSp6GaZgpvnms3Js3",
  "key21": "64GjNk9BAyM42ERMhxeVdSqCzuMuvxVt3sipgsnPxCnEpny7JesvD2tqLauTzTwveSkSeNHDkVbdjYs5JeUZNVPX",
  "key22": "41tncppJhjNdMUHfYq3oynwKLyFCZYAfdptz4E88iM2L9kZc9BChLzD6yVESi6vS2qQccADQyPydb7dCVPADRfWE",
  "key23": "2VdwphSh2Doy7yuU7KKH9Eo37UnMo9YGANQmgWxN2fmZj2BRLZyjNrgZxgqqXRmuKyPfzKo8sVyjEGMyRdqtkdfP",
  "key24": "2APbJhnC95sv3H9FWoUiRA7mdsUipEYTCdHLy2t3gcVGPnnoz8e3a22Jjc8pfYEf26vziGJHCbZ44SUvaNK7BDHf",
  "key25": "45wb2RpkbGwUR79M4YdLWvNXj9LfBcrXDfsRdNvYEFJoym1j7VWgT1B6rmwaagDcFhDPV4j7fs7ZrQ983ZczBbcf",
  "key26": "5DAhX1TT1VoZ8QtPATiCNGPuGcW13wxEDxEoEXDeWrGohG6sE52GERhw8ZMwBhjE4ZJDjqM83afPwNNLPhAXzkxv",
  "key27": "3rrr5ukWpPHMgYtxSWPKfNKZv64ZBCxv2jRZpP4gUwSFrphmK2uwFcJZXVRYCGKPAEMCCnHPFVbbcuKL2WRiV3M2",
  "key28": "4SqsVvn85vxEeztba96TGH7GrwKHMjnBattToRTPPzeuF2LbH1pFDus2DHysQsph5q3UrsFuqJ96BV3o7jHARPVz"
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
