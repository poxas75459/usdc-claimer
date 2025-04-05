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
    "4k8EupabdLimmijN1kdqZjLrXayv85g2azdrgKd76xujUUtEudhfa3zabXKX8inMBJdj6tzLswbrpX1gcqo4RkkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XUSy127uhKih8CzdiS8DqWDXSe2gx5Tjnhrx4cz3P8kGGsqw6nLbUzUVFDMgEhSJ1R8cbeGN3ym2q22ewfgxZP",
  "key1": "AEPNeG21LBEeRoRX2oc1eHzPH75SdaFckmHdK7scKxJSpycqJGEhpQchiHjG9iWbCsMWybAp4SWoeaUWXRp4GoT",
  "key2": "384rHawmEZSv9pfU1uFsJ5dwe8xXuSyFb6ND9Wh7GtbA7L35GNQeCkBkvRpqhMnaCnqjRCWjwk4NCDhNJvEfNiiz",
  "key3": "4fo9CnQFTHhwshYBGFei5zmtLukn8M9nN8BE8Ej4g7QzaB4Ha1qVCNJKykp1AdHcrjB2JebQt7KTnYnc22R5wZJw",
  "key4": "2jY2esUrx23KH7EMUkTCy3K5oDWnLmwnCjzsTkYdX5hBJPpPou3vNmwKFFsZtn9ips3wGjS6KRDW9S2PSFKabPhV",
  "key5": "4zrgnonZ5aVMAB8unaZ1FySqXiCNa8qqTCNVEj9iGBpjx7cTY59AFbTYHMDAPkyow1DV1Z1ReNpuMLb7fKiVLXb",
  "key6": "2A77cRPzcnoxua5nyvtVBcukGd25xdxT2VB6V9hv4PWeB1i9vU5cFeqziJPuKAwxgJzT5QR6KVxD29sCvsDxn89V",
  "key7": "5xzk3kjyNAVAC6E987FDZqaUf48szPBMRFyzeALdnQuPVx515ATnbRrhf3tHfpnF197SPUb6C7bJPQB1GaQsmCcx",
  "key8": "5emRhrqMv9JDwBr2BpzfukzUUVCTgnyvuvusxQsTcFT9dzbHpoyqmehxyLuW3Eywsoz3yiskmXYhennNuifs6bNf",
  "key9": "5MSQozMnkhGfnXp5nkbsmStncah1Cam23LFWModxRUKs1PBmg8LA3MWHx9nbX8jYvtHvQr6iu6JuUen1oMoxPVJu",
  "key10": "4gKk8r9ERySz1p1m3C2YaCPT1VJDNcJ5vD8W1CaNwbPW3Ykcx2V3SoCvSoyVgxkgfJ2RMHyAUE7jx8jn9ADv2rit",
  "key11": "4uaKN4fgDutt2xcG9XNx3uZ39HdrBqLAnpnjjbvG4oYXmsXtFcpi5zK4hTWQiwUvsKmV4FAWsdUG7Wj4RvKWB6qN",
  "key12": "5NM1jHohqzeJjLJXnfZupezBrTCb9jpSvk6HfmAyEWUATyFkgSmJQ1CowUh7q8ihszEH9xdnd9gRgX6TUDt8bqkE",
  "key13": "SKBwTWMiHopuDcqv13Er9dSm4HHcksJmM1NNugv6gToYQELQhi6uWKazZm2qwfig9dJNWDY8zoxLdpiMWjyCnYA",
  "key14": "4BA27RUVDSh2pYPBj7Kr47iHp5LvchBraBAkEQ7W1soKQjdPUtpG1y673G8amZp9DgeotWiZ6rKMPnYUayf2Hvaj",
  "key15": "4AHiao5RBiEe9JFpGNAg6PGtoBKW52agiycUQ4w9wGy4wGEbJwMkjeoUZJtT3eDbuGTb97DzM6dZ7CLTwnDjbbYg",
  "key16": "WzWNzrH4tki4BScKSLPZptzCd2PYc9GxU11EjRgVEYoDdKVetPTAEL5sHmNt8ZnidWEreS4nEdh5eVM4FKd3cq2",
  "key17": "2mvRsTcnLJ6bhsTDBXvHCEJnAQgkPQoyC7ZvzWqUh7KybpF2C8BZwKG36ziM5EeMJsDaA1mEcm8RXHKDwEsp6cAa",
  "key18": "22BQTkWuLX7JFYcweiKVuTdvc5J9BMuUMurK66uiw4Z2ntmBXpRzW4kFDSJpyam9tBjzGP3BZKWpHQcccsjaYLVo",
  "key19": "3FQp3H2E9RVpeu81XyW3BdCje8MX1YwGVsmvyjKKxQ88CA3Q2YRceYdZUFrAnjFSJaoLvvpmfvSTGBKuicmM2AxK",
  "key20": "2tmzjZF2LfMRrGtt2fUHbcsNPZvNBPxifUgJYwjH7Be9RU8EaZFdKyjXkGdPjB7YU71X5eJBXftFA6F65uUmW9fv",
  "key21": "22EPwBuZzRYasw5o8U2TVV3GUpXjb2E4v1sHrYunDCcQmqkEx7PQCs6wJmDWoJ46C2m3iJ8MLmTruXvbBg7gQChL",
  "key22": "4urtqigAUd36iP56UYC8cAYC65iJmxvXnCieCf3HBwBt4wY9bjW3aux1bUJ9VxdUNr2Ne4Ax6U8p86LgsopcFSHp",
  "key23": "SZtFfLA54nsqwxyKGVT9ekNWBN3fHXuScgrWh1JLrzQvCWFVtka4M1Djn3mmmUisfjkZsBhdcCmQJ5Hq2boPZ68",
  "key24": "SQuVGjqj7FkkyH6edXcGcd3bk8YrRvXw1vcn9ERf1jJEsubdFvk4XUHrvekXAshAeUKN7w1aPPUmMAoz7Ww1WMy",
  "key25": "5qQeugenvnoiwH32Q61pcLgHxxj1G5gLZbqactidv9yQ5Y1HC9HMfN8r7ANY3nu27JqKWs96Chz72UCJyFwdkeg6",
  "key26": "5NNs3bMUmrEKa7G5wL3VHWoVcnMydXYWgAMhLuyRukrnASWmZxcSTAHoKfktxDc1fFa8uBiQtgUSuiDxRbwDSnMZ"
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
