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
    "2qh8sv8BHDMo6vc5wrtRaPRdhhDWoX9WTfBXmoyREfEavZ5WWHN8XV8Txj2fx4nuMrn5wpn7ngTdR8ovjZuAL1Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHUQY2LHPMf5ZgPYmyUrnXVaj18QebtZn8HGJwXJfDhjcN4CfL2zuN9YxTBviSoNu1UqiNR6hvndEuGzQB2Ehmr",
  "key1": "5rS3dCjFq7d4ckEHTM8WMyHdirK5obnTJWmCttenBMU66huizmVkZcEEnuDGEGGXL7fRS6CpZJgL5qt4um6fT2zP",
  "key2": "2vKVYDgXyjKFNaq5u6GKKnEiJjqJqmbuyfvBXLqbX1dRLbq76msdYr58Ahn4u1EZHks6AZSZ9os7p535fruGA35n",
  "key3": "4Ut9rGBszhgGHoWK2TsabYfHgg6XJzL7SsGQQtp65FhepECer3VhBhSfF575JfketMVp3Q5sK5QYdRe3vPiXwTQ2",
  "key4": "MJ2QVCLSYRkvwW59L75Qu3idtRuta2UmKcfL6g6tWiqQ3pb7rwzdq5byPHbZCnSkRRDwzvDTEVjKvQ7LtRztHEM",
  "key5": "A2v67tU45t8LVsv5pmCbCnf9sDfn4VFqgUn8hS9EXbpXJRThBACyEGcDXyT17qB6of5QUi1xpiudtnvpZvFsCK2",
  "key6": "3dJikPVGXsp3m3A2Ph6W5QE3LKwzBEirvMaq9rHY2sg7a4d3jZaM9PMgdQLgWjb8tupZFWveq4YbHTYszamVe9G1",
  "key7": "4U5WJ5VNyRehANYaYhBah1CJD6ec1QmUrE52w8LZRBtfXZ4ZGnVnj8b96eqvdY3JVeBSRnawtHRhfUSkFnvVLPGw",
  "key8": "3MYVxcLtZitVH8AtV4f9XxY9uSKC3M6iBbkM1YB6QiVB7B2d3dtSF8f4kzFcF3Bi5FS7NHgu2789AqGa59JzRjA5",
  "key9": "5GaoPZA8q7GG32DFtCNFfNqQY6Pg9wz2tZyFxBVJCkkcQfRS12L1eHv3NRtC2w7fBZJPBx6TUeJVpM5CbUKnw5t5",
  "key10": "5ZfeVKEJHQYibak2ArqQd2sRWENqE9nQCWeWREEPMJBsArmhYyWXp4b2n1od2Q2bRwKUVJCmxBe8XXiENb3VWf8x",
  "key11": "4FBqGQoi3ptALM6Ftm51u1SHQ51ffnSZggPz9cyBcAC8ecBLLrmQa4pzREgahgTSBAjupnRmPmk15nLn6v3kzWjv",
  "key12": "4rY3H4noJY9HHh5FrPFzGqCunz2ey3Wb2Kz9H9hY2rc4X9LDnbuY1KJeaBqRKUAGQj88eAzed1FBWiwbYbtK5Pzk",
  "key13": "4W4PbBJRbsPjuznq1kSk3WqNG8ZeoLfQyof2R8GKK3YkgM32Nqz5FBVQrYtVSNa8ByDfijUfpDKUDfHp2fzm36ro",
  "key14": "41opxMiAbuqVchMpLHWVGR7bF8fvG2fEGAWvZ5MSZ3LkaWugCiw1ucH9aVH2r1NAZJJDiLrh4QMrvDz1g3LJSscn",
  "key15": "3AMkH2m1oj9g43Cj4BLAeqhCm2HVbFRm9L2ypsbqVA7qcqPGMEJxZaSpnGGrFXFtMJbTpdcx3nSbHX1W4gHyhnA1",
  "key16": "3eZ5eCFymSVjsRnFuuDpjupwgxnCzyBDqJVjBiLcYgG5ubi2VJWUgRjKTofQwkgSt4kpWWy6N9N7S79ZurHBjUyx",
  "key17": "2AFYWqE9Dq7yFBFrf1UkzWGAFsXS7idNqoNkAuGRyrgByrpBdXajLBowX1TPZQJpRXZX4bDu2T4unkKsVPC47e6W",
  "key18": "XKzEYw2aDMZ67wwTJtHQePh5axYrVmGbPJBysWNpBcaDAFJadQ7ywXQSnzAS8Ns3TyDmykBBkR98GRigmTjfG4E",
  "key19": "3jimt9zuk5Vnc737hwrZC6RcPNcrsHpQtSBb1H4Q4vfw6syABCZNy4NWobjPt6wHRMX3Uti3oDLLVZDgpTtzwwU6",
  "key20": "5vxPK8hotwxujXus17RSLNKKmPviC1Qg7hc2RnpJAZDKyLPvMkKJLWdwgZ3WysLMdyV1umuMK7bqrP3v8qXUnpNG",
  "key21": "GENxM1n8UXqLj62Pr5uAXZ5v8VXg4nKwXD11Jr4MMdpsX6Gq6gFiNWTUYPYGHgLPib6FiDrHkJVv6r3TNPy642Q",
  "key22": "5qKayy8W3oCHTrqymTTFbeRkAoLjX1vyjjP6gpsyf21WNDAmmBGnMvMdjjYFEUrLV6op5Tek9woVhQPMHghbTjbN",
  "key23": "2oFP6mLLoKtDC6eyspNHjyztfKvm987sUgRv35M9JxgNWBWziEdsWJX2p76yhHDpcuLuZ5ar8gHLhXhY9fBktiqk",
  "key24": "5mkMzQJY9UnvE5qbaJPFUGXaoBZ6R1NsoEHk7sEeiFYr3uoSwUtBwFsJiY5zY2AbfYdt3qyi33f8guCbmJrXDzxm",
  "key25": "5CGAGd7z3SZEjqgTFAYbjRBScT3M8pMXy6qUYCdchanmHBjpzJqiMnkgz2ahh5p6pAH6WjiLVcYuUNF6eg2R224Q"
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
