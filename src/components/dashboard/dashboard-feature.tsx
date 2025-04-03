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
    "2HZj9pHE24qnArH2sQHp7Gi9azTsteuZ2FVk5TvdvqFQTtb6sSwq5Le4YKt15ahhx1UNUhxd7zKXh8pikFLYAuqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1QeFP5kMGpKKzMW2usgwpFXx64Xx6cJJ5cAZFyBH1aNBkDpXw3b4HGjKzf3zxPYT12DrGRtQy9FjUVofYLUr3b",
  "key1": "NmNy3aPgFFhKapajs1LoHHimt4AxBkuZ27uAg6DupSgJsFjG4BqehJsGQHMPJW5arctY1LEyv6GU57h1Y8nZSrU",
  "key2": "secqJzmnA6hXVwNAdinEMfionYtvwop7qHTTDAgAbZ8mxF4AncVTM4tESjqk44fU6Sc97ucTDhefamv8FZSgrjd",
  "key3": "zVwSxByvYSC3ZPe4U4ywiorii3RdMoi1zdkn8kyBnX4TcZ42MnrD15rADaxsUd97xqhgyvZkmndZ5NzUQH9TWpa",
  "key4": "ffGzEE4ygw5ss4B1L87NzqkgHHdeFrqgaarWjbUmykRMyPSXehfQEn2TkLUmSMtCzFbD7oGBCCYw7E7ACQZaNDJ",
  "key5": "UrkP5rKp1xbjMisyMKk9rRRDoPNxdiB6zSVk3HPiYeo6WaN9HmqoBtSPJ4p1jVqM8PukKn1FF5esnzopKL6kwV3",
  "key6": "4MK3ZvgoGNAjhmvTefnXQB966wHBBiHPuiVpiG3V2wX7K6khrdpEzt2EPmqqh7qGHNhxvy9LjhxZkeFTaJADQL96",
  "key7": "46cZAuenjYqJyu7U2Sn1hG69HmeGyv9PXYE7ybmAG9HyRTquG26ukoYKYC117RjWVVmcnwUjbGPzUN79DqbVB3QF",
  "key8": "4xJPCXcqdPwP5B3afpx18spkuoc62dxEFcK6NEtxP9RXPa1X32V452LZ1WfhhEYefE2xhuUE1KbyF37Na5oKQQi3",
  "key9": "4JuwWfvGs88LKwpe24k5MZgJorVcHSQs3Gy3ge6PbLXudEZxoBJSafvFGZBJbseVg6WbJKAN8zNeHxzNmt35oY98",
  "key10": "5nsgSrMaAgPyFYsHCCYCFhmVG6PgnZ6avaUqTdcsxGNpomgzGJHG7K2aW1YGR7oXYvd3ByVjvxYgyvzjm1nzhTLb",
  "key11": "3SoT54xUvcd3KaJTW3EjSJEZQJDmZdTr2z3KFMpGyJSAjwUY6gKq3dXKfveDnVHSVUW85GYZ2QjSHh6o4P55RUnW",
  "key12": "4h55gGuyQzuHfRB3Sk6LVn98af5rirRSPDAMCoeDbxPTHhAFy6X2pL1AXCVpbzby9WEeVsM2JQhvF3ZvgW9KaBy2",
  "key13": "2cT4fVpsXwuQRVaMbfJ5BkjzmYDicwpzJKMJSSgJYuKNk3BQoX7TNpnxCFuK5S8MrpSKjVRKU3xPWUFS7WakZXM5",
  "key14": "3J6BRyUF3zR1zWU3bvxUkzkR9zJcDx22UaMc9icaQzRtKfWuqWp8v1ezvE5Fs5VwPUk5YfCcySDsCfnpT2M19kJ6",
  "key15": "2gfZeYmXSMqs5f4VseYqXogyLh7jV3aFTQTuqR6BEdXvRkKCVwUhmdo3bgvwEgwoWE3FpUEwza6QtkyaYqcB62HY",
  "key16": "2C2VeaNwSEp6oPgPGTuH9qSpBVimQoD6VEAwPdbKacwhtsucKqB2qsFuNxXu8RDN4CoBZCXGvcWMEWUjadXq7Z9n",
  "key17": "4vsPx2nbnhwEHkbW32Kx45gfRmqzx8esJpSqf7p4bfnTYxFJtBsfXF3naMyEX8YiHm3JLfBMiMXEYPbef46mebzP",
  "key18": "yLUv2n1JdpNxgrVCEhEncgCJcE9mQVs2VT2EH5WZyEjiduLvEjYxdLsnq3Y3acVhSGLszMAZHNm4zwGYiTdbqzX",
  "key19": "64rh9F7ftFdSCu9Vu1a9ArsnhkMjVnYYapgRCcV4j26jMuEjRvmrwEa3ehGhAmxK1sAF11RTM8eye1zQH73FnENx",
  "key20": "5re4Xe4aPb8vFDHfCiEoitGkKi6oNx2Z7fZ2RygPpEkCr3dtDpxdnfSBqVunryFTSRRBnrFQ73q7QYUC6DUmVkJK",
  "key21": "4iZNqhB5jvKZf1bzAFf73qvCNBvbbxmE6ts5yRKQXybxphvXBbw4DdB4aZPCdAHPkFTQNgGbvEEL9bWeDjoM7ejW",
  "key22": "3vSAqEyz17FY8tap6i2m8BoPpDPh28G8gDJnvFXvtQVUToDtZgCdy9CdBtyj7hof3oQ8Fq4G2uFvykxkADp66GGx",
  "key23": "48WEhpSj8xM7nadmtLP1X9yticmXUYo4rZCY4KWkFKS6k3WWoYkTwBYF5gitKGYhdDPNYsS2DKyo3gS8ERCNFycU",
  "key24": "57dai6sKFwmVpwDuNomSqGLmriRF963eoU1Ak2T8B8uNgKm8Li7biLMQBudtBpQq7dg5jDKmMnm78Tvsiid3nE1n",
  "key25": "4wi8MMdXJaMJvKwgsm1N9K7JmiRwSJFpoWCTTuz5w3hjQ3bPk656cADRkQRkpAm7AA1L3i6sKQpdzTvjv9n83B46",
  "key26": "53YY9PQZjhFfZ4ofZj585NaznWNgvkYGMVmhUShf37J2KzC4jv9fqiDdR1fDKB7pLs7Ff2hVWC9LS8cSgSxJ4EBK",
  "key27": "5MNQKeuc7VjbeLDcm2K2eyKu7uf22aVuKncaxGmfTPMbMpWvMtD55JmFcebrnJKpkHrHX9HAXwMHiVyHdCkNneHR",
  "key28": "44Z5SyUz1ABLaT2jJ1ksZABXhfciRoxVbNyU8pbGaiyDBkuqDqKtzEe52wkuFhYHuYfm8SRmRHAiun22mNbJxfmQ",
  "key29": "43kA8X1E8y9Mw9eLMH8QSdjsDRmvJxL3dejayKps13Yq6UmMR1wpLfuWjwqKa5j8xjh5eDWaisJo3MMXsom5mY7o",
  "key30": "3kWcudoT4nifLYLVF8MpeMA4U4MBydFkjf6VVq7qu5jb2zQvmx2h44zxLHcnrkLK8Qd4jPzDkAdhRx1jrEYr6L2q"
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
