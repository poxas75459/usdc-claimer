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
    "23NGM8LSQ37DfDyCm7LRWjMdu1dFki4YQ7sJR14kYAj5y16CkU48n3H8QMXfmeNuttveQun5aEaPq3eq4j6xLPvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQ2edaXCq87FrTWPCxtWW15rHcWbmhVYqK2DadFTSSfMvGm1f1a1TEYvJJUvMqg89duo3HyDTa4yYDPnzC5BWSE",
  "key1": "pJjyXwksRkepScsci7pyYsNKrt34HwFzqoHBnEKre5f4oBXEM9AMaL5VN7HhS1CpY45QgjCzo6GCEeuQjrqNjhT",
  "key2": "2vgJUbU4yQwiAM2VodYWsy3uPfg3F8A35WzhshAmQN4xEzQAxyRtowQGrJNK6J3j8Lt3sgMuj1wSuxhqWKWVGDro",
  "key3": "598pAs1iGPHB41yFE6oZ1zbWWBo5Uf2k8aS617YK1zCufi6uW85NxbQANqxhzticPpRdybaKhM5D3oorvu5UCdHp",
  "key4": "5q1BphB63WPMMmLR8eS7NppfEmJYtNCSg7F2HwcJhofX7ywrML8Epd7MgwT6F58Fguz6EDDuv1nw5UuxkuiUaxu2",
  "key5": "5v58i3XdsUZLP1SYZKJs7MXRi3YcScHsBJ9LeyBxf4a1VZPLzeFDrr9xYhkTTxxirHNREHAB1FtTaafFacSfnQyf",
  "key6": "5aiBmpWtVzXtE5ifN9wVeTwexw53rz7dkg5n9AEWTTvTvnzRJiywDq8s3EsUEvTs8P5KYNerrt7HuwAeKqna4KeH",
  "key7": "2zGruVgu439jdEHTgrfc963rdHUWmo1N2PGXdBa6KNQ5VYPTgwCtCsRrNZvUu4oCW1MKqFMxZtoGgxYyCMzsQ7md",
  "key8": "13rMjVu91Zf4XaNbdrqwtf7ZSib9fgt1zokU3HfFBcSt8bWFEreDGpUMKTnpw1AKUmgTo41exLUSozny8XpJxnf",
  "key9": "4twHaJF7kSyFBprhLhMvaSJMZQgoUWcckWpQHYVh4DLP8jKbD3td1ddzcrkNf5j6jXFDxPyxKzg3TzfFnD4m7ysX",
  "key10": "3hvf6Vp2z9RadRJYKo5hsKXqXJazwNBdA79ngULZJW2Knp9behPD5SAs4gV4cPWTFF6kDoygttWPyzTJCbyUJ68d",
  "key11": "5jYRJD1FYkW71c1WdtgSbz1fBvyUKQmQWbRYmZbnTSW8TetXy2uDchjpsAfXXfKF38zXJTgVM2nifchnnbWo2puG",
  "key12": "5DvvKXHsrSbiJvx6k6dPVTPNDHSW91iP4vVpBsVAxBZZuPNNLESNH36rshvTParV32cVszx5bHtKhCjpmy7DeGPL",
  "key13": "dZnv9RLa2sWPGYN5Z2ersNqNrmJmcobD4U4PmBvozWEQpXh8yXhce5Jmf5LTwDNdzoHNrfwsMnucRhdMXTb2m2U",
  "key14": "Cwtg1xtQUasVes1SSQFyNu2d5aQC25znivf8cQVFx15u3kGH2rMB1mevoA7mF6YPJZUkwZtRmVxKPyvM6bWaa6k",
  "key15": "52Yv1yQwSayzg4ee6XyY6rrH6U99YGXCfZWMNmPQCArQAY1cps9Ga2KEDerEouQhqnKLfw59CTtZTHtSfdg8yqWL",
  "key16": "5Vhbbd6eQ4pCCYWAqz46oDuSs2SpegwWHqn6jATGMZZ7TFYQ2KoXEEjR3nWa1MoXvySs7qzn9u3xVs5n5LRKtVA9",
  "key17": "4b7ahr8KZMZbP3b8y9JeQmCe6e3g2xjgLJgqXQyappoFdsrmcwToqV2sCPoV7LfSsiiaNPT4K7adgStByJemMQhs",
  "key18": "4kuLRBWtZBz1575FazmDsB9s7Q8Ev1SujxHB7q5GfpB7xLLFYvtEXtXiPRiG9xBfCrZbfsthn6BC5YbopFhfa1GL",
  "key19": "3yBRwgQ7RSzYGDVrHS4mVJejMWsqCieoVMzKAzdKZHsaBUSG1RpEXdZJFHPjFBu3APhpUL1eXw1XLfFjJmh5d32S",
  "key20": "22xLtAyFRUzRi1d3peyAWYDuVHbfMQxCq5kBaM5BVYSiL338yDHU9erj4DqDiZooMPxTwbEuDbndNKCjMC7n4Uvn",
  "key21": "5hzCTeMxormLQtV44RjZhpeYAuKhRYrS7Qd2PLF1vMDPyLzurwsK7uoawE5hBsNfbxDmAZYrVF1zrrSbWnyWEnca",
  "key22": "4YJ9B4Ti8anoaHbb14A3ReBs3H1v8jm5iUE5NCCUh1iqRKt4fBrsWsYN6dfaAJXyjuM69yBywt1eRgiEY3NuoAKw",
  "key23": "36UPHMiZqRp91HCxmAAsNiR9BFWwnABu56ewBPqRtoCLuycP8hJiEZbAdC5i8FX5Y28J4hCULGrfUWQJBB3cW2eE",
  "key24": "2kHZnW1pDC6WQYHnzjZrqPNFi8uaBSJTwYLtDuTrGLhvp5wRK5bGdzsdt11twmWBEca5fuNdJ6oCFg4GwDerbRaT"
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
