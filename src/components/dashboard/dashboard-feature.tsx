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
    "2m3HPZyY9tN4B37PxyzBgxdh8fLUXuKRmKsXpF158E2hDwGruLYkbxKueUaG9G7C6cbfeWs8SiQLxgHkY9hQtHdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKNWPf2re6BLXk6271k9u26329igjNpXjiEDjUyNWPjFTz2Mz8Kb2cYcAZ4xYhyxf9pWYpoyuQy7sJ9NHgkFL6z",
  "key1": "42aHiXo1Km4oCHJXc7Yioee8WvwUfa5rD4BRXJ966nxL4oqmW63rLRB9Hx33oiafoF64cYqswJA6DYKKVs2JCsyB",
  "key2": "3s23hpBjUETbqYgVqGUbGZ5gWx1fDxX1cm7ZbzUhTbN42bE55QnBBoJMCJNLqy3R2wEwDnKQmJFdJQxy54XgNVf6",
  "key3": "2TNJAqpejSqZ7d6PcEZDHHBw3V25uWYhFHWG93CJTpqC1UtAK9cNFExRjEimey2i9u6pbCgAXKP7FvC69WApMcQ3",
  "key4": "1DFnReMHhhPNfppA2J6VN6azyFQAsK9vkQZkP9q6nJLnwEEo5ZUaVVcFNj1175Cra5fnCeXcZYkuVBpeqCwNZsx",
  "key5": "5LVkFJ3mywA5ksJuwJm5SrwWyZ7DQbcYPSBLTzeAFn6Pv4wBBwXDhzwBN65wpaSym7ecPzKryAB41jmaMEGwFP77",
  "key6": "31p6CLbKEmHRcFjM9wyB31n4CqwrVNKssPbAVsPw7VyxjgxbJoTPCSoFyQMwczd8sGy4JBu58dPH1aMeftwBJqV",
  "key7": "5ms7kkfgGJiFuCV7ukuzkqJY3Q5jccUx7VnA97GbLYynXfhKMVHKDVvahPyzRoLS1bGgJc5EMidq4yCotAf2QFwx",
  "key8": "o9jE3ZSniJBdAUQD5kPcUPwS1pxhMhku4VDXvkbPbG2wiq3Ws1a3tzx3wW5yMHAYMdN8vnip7m7dLpF941PjZok",
  "key9": "3grGwHbnVi3CEqz7QCRTbm6pXJjzz5BTPCaagp6K7CpNjahqiexLPdPDRiSBPeYa1y58YshtsMDnsFTCR1WUm98q",
  "key10": "4Q1DQUxn4tKQdaXHSAkK6zvphxUJv2yHKT8FWynGPLjDVdbG9fovWVC3HM1Kfknn4fG76hcRq4GUwv9F8ns8eCmj",
  "key11": "27o3Ji4hy5DVEw57cAp2VCfgorCMGcz84uhc88UPKURVLxq2hbydq7Wxse6KXrzo7TfVHVWFNMWrXRrSBySsR1up",
  "key12": "3Rietc3niwr1LFFpyMa3zEYFgcozkr5r2jCPszsxPTxGBEJrWzAMGrRhb7dhAWdbvfwvNKzV4xHaFevy3rLjYSVB",
  "key13": "2sxgge8p7WtETSesJpVRq2u9h3Rbv57cQAacidBKTkqHYSUSSndbgPGnLRuoM49SQxNGC5BaZ3VDirDV9fXSs5GE",
  "key14": "3QQNYfPpkn7JgVUnVJwehtA7xkbAsCoeGFrj5WEceMcqiPtQBfnUcAHoeEVXxpARsBQ9xVgGEjHfXaLJku8zFnqU",
  "key15": "3HQoCC587rQeHNjJc4EJyY8PDLCM85GgLRQNPUoaJGVW9kcNmkLuhs1ELpastbYhKhxkwb23eL3afX4kSmKQzk8n",
  "key16": "4788hzHWdet6nUDLHv1d1HQ744op9bwsBWPRTiqsvoASkHRha1hmixZXug3uSVMANFg2a5xBRhnKhWEuki7GAXbR",
  "key17": "5gQqm58EvAkeZ1Kpu4Lmf48RLzeHAkwHe7U6yzbgiW42NJnzBxy4hngfPuyJCkGBRdTdhFB52tChA6P2ErCgFmnT",
  "key18": "67Z9TPpX88k235LyK7Ttv3a5v2xWziFNb1cD3HMUhaWjsZ7PZG9XhnqaiMzi53WVT3bvwxEtXcZarcb6G1g6bwpS",
  "key19": "26ZsPwwb4n1PHpMJRTnUR5gW3HbpQ7YFQDB74sJCHpqVf6Xn7U33ktyYncWx4TRvW2bUQz1Sm4o839h9HbWjESDm",
  "key20": "kMCEKg7PPBd65SSFQHie3jFpWdb85GfDwAj5TaKK8RTadau7LBWDpCLQoTZ22pQ6fFBayj5YR9qE6qcdktbwEDd",
  "key21": "4D47YDgU3YCRv5t6HJ9EXmohsEXbsFDkMzfdmKNKGwPZc7ytbKvNFnniCNrskDS4YmPKiJReByE8NZwHS4c6qy5C",
  "key22": "2kZVujg1MiKdaR3zme3rfTfiPHQyL6VeCVs4r6JU26DwzecgGunu4p2LRGkUuRKtNVgpGUA6Zw8y7rpbuFcRV5Az",
  "key23": "2rLwbiNefaNrkhpmw9JEFhPtkyWgiauMucw1Y52FC8CJeRfzzTR7KQTyeP5Rqcmp6dymK53fR3dn6AifLHJwkDnr",
  "key24": "nki24RExUmaCgZwQUeEqTLXvwwFZZKRj3HJv8zNLurPCNxFyU5FLig1VDCXCsyPZetxU5CtWGp2Vsfjta6EqE3n",
  "key25": "2PxSGwUmFYwip24BPfd61aHW3yY75ibZGc9oqFncxEHCKrJzRGe1C1kBzxKy6mScDyyzpnm4KGAriDagwt5c8z5R",
  "key26": "411Jq6dVhcKZodEcEzD1vyzoVevu9v1dQagTsU5TmBHAm1ATcC2TqsBdPGr4bjmCPv4CwmaxdgcwpcLQkVDkf71L",
  "key27": "4BJ4tqpQ4FQF132HMgvwqVGLEZWtCQTmbDVQSoCkYbomDbeEiXp74U2JaMTha5wuhnxwUAf9zAEMgFMXX9W3MW8Y",
  "key28": "BfnVA2czzksQvpgN8LHpjiJNQg8tCQVMMdocH1p6XBsnByHGSbzvTbex3SxPztNK2ZDiYqvjQWG7WQ3vKa4YZNh"
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
