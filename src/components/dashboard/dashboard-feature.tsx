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
    "2kNw3WmgQ1sLV7ND4VH5JdkjsPypxiir17UfjpXoGsdPGXQQJVRPKQmj5BHLvSxRidEcbdoYoFV7QvYnG2zmNENP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpWGMfkVLMSF6HiUU4RsZo6yrvmrJqLmZDK6jgPhemo315vugxj61YJTqa5DoEg6DiZqx21psfzMCbTcyP65nrx",
  "key1": "22PKHrp7TvTuDWbmeor9hWbNjazDrNwayTrFkZiw5C5v83U7uiWwzMdwGPr1SKuHY2h7VX4EpdgivGFWMA1yz2BE",
  "key2": "EiKN4yj3v9caiQkDNVEuP4d8Mcb2QWbcMteTZH2h9ptHCoqR9jc2baY1P353WoHzvTLPmToEQ7uUU2K2LsMkyoZ",
  "key3": "2DfwkWd1sqoNLiNsN4QL6ub2zcRJNpLiA5LwPkJDakgwxb8FsyRPnKNazHqRHbvsyhZERvTnaSdLxw2hgxXeGyPG",
  "key4": "1SPdcg1zSkb6hpoL7NXBuL6qNpCZCkjHLRAuPftV2cYXDHoqLaMHZU5BHXrK8PJRHXifqkVPLhnmKy46GexqLqi",
  "key5": "5i9cPjCtyywDxUetqhpD1FcPbEiaw6Q1rndq3waz5TuqyZ73gcFmLgxtV7RF5bbSDjtnd9rHqs43BWqv8qTshg9W",
  "key6": "5t2t78S4zJtMkJYhkD2idQ74V3DSbW9cAePYzQC2AqRrcFCzeCSCnr8N5f6b5qAmhd2kgk4gyiRRWCbfjLnBTcA6",
  "key7": "5L6tvioWjqefnzxno3JJ8Cndadg7CUYPdNTwSbgBqY1BnW6swmuZ7xX2C1oqZ5ANeRsH1RrbjcGWpTFrT46soDB1",
  "key8": "21hyMUZpEXUL1uFPE6UnfL9F2oQbDpND2SiTwsLb8SvsU15kJYrSPbLTxZqne8eUsGTTd1h7zKtT4go4Cn4n1bRW",
  "key9": "5zEWqdN2J9LW8uExtuiNpnb96CDynRJhVuzJcNfpxVG325b161x1nhLPS2NJo8AGUtwfpeDxMcrPm8LcUTWCCzTU",
  "key10": "4pfDPT97rZbzCca3fQKJQBMTivmibL9rWAw5m1ubnb1PnHCiyg8ZsiGQ1SaaP3pW2TvGijBvMcVQ4KmY7LcCKK1j",
  "key11": "52wyERz89nG1bSfMfuRF5nCE1GQVng3AxYSQvR1Hyk9TtgPLiT6LEhnmvnCxjPCKU9225KtyGit3bnoJp5QJEoVw",
  "key12": "4ewiU2cCZmBR6G96yesp5pUD1ojBjg733GnqrJiYjKBCb7tDqwKket8R9LwCC9UVsqZe351U8KSXPTtLUTZVxKH5",
  "key13": "KX7SAfUum6ETZtxSUansaXXF3pKCVfSXKy4mRC1ELjsZcpyL6T2RoinkFE6MkkPhySVmFHjTcQaCCDk9Z6EYz4L",
  "key14": "3VNw7ii32tPwQgnAhSzdFeyUFR2qLEq7DMK6aLfaehzHKT4DWyZdTB2Hv9N8Fy3mpyAwLVZzso4pTUzXDYHrgY7",
  "key15": "5yZRB7LfMZYBN1BBnz4GvA6KcLqqApcaP3ueyCXLzRx5o8zxYMVHsmVynb7dVQ4wQdE1G36uc7rfDZDwCRhKyLx7",
  "key16": "31UCY9BhpbJrGF29VmQbkZyoNiLB8gynkP3VPq31S5JPmpiSq6WmyUc2KPRkET97bGWcKbwWcKDXd4rRbNxhXB7f",
  "key17": "4S5eEkZhPwyc4TC4iLzMUHAmyQSCggtavvBMVvG7xZTcPW8gVr7PtARH6NkhWikD9jXL57Swu2a7wWv6yPoHkrBL",
  "key18": "3VijWisBdktEjJBvorXfmVKtN1NJtyGdWyQk9zMcJZmgo6VnvPfceP9vCWKimFwfm6XDTfYMjA2ESUvNUdkZeRtw",
  "key19": "5WR6zSWhEAgbNfL8i1aUbNkcuL86WCtxWRdYNM1H7bHPqMmjXtf2NYrbXWbGD78kZrZjMwfBDsPjUU22AHVRxm4Y",
  "key20": "61oZVd5kt8U3g9hN4QfQcNzBjkdAoPtShLjYUgxDFBdgEeEzVy9Tn3id5cja5igRmv9aoJCFGFipBURYN3TvYChi",
  "key21": "2qZ3BUJMAJwnqmaVNx1WKyYcR9CU3Wye1mK19CF8GwrCnzBJnxjXLbLkNZWjhteWfdU7fiocQ68sbu3fvWFp4F6J",
  "key22": "3AGftQGXrgazBLPNxLZsK6SHV2UvjabQyDEDBtKuN6Tyw36QNgdsAGySUr3wixEEkZjm3dfcHYB9YgQQkUJ71eX4",
  "key23": "2wsjzB6mn48ACLrcvJcufgq4RB8PzwpJtKXmTKrpKhiPcmpU11iEutca2MukQ5oNaxbhxrESwgJzbNVGV4QbUjd6",
  "key24": "5K5sRA5Ld8SouhoQaLRTVgEWncwD64z4CWiB5kwzpPj7a6nxCNmW54pfZsJU5CN75rrdFCg6jeaq9bC4G4hJRhi4",
  "key25": "57NfXZhH75HKUv4sqf2YggHureK66qcm9fyVwB8EtsFUcxWrwsRtXGZgbfZmCasQLaAfXYyC1HNKVyAGoqCCVZ8D",
  "key26": "3udSz4bsVgHyMd1FbviA373xrR1sYQuQLTgaUvMxu92t4wKsVtqXEqrqvv5jKmbKcx3y2c9atjW6nLgu43F9vBqp",
  "key27": "2XCxhRgyeccb8u4L8p6Mq5vpb6ybZ6ETK4oDFUaJdW48vEsoANTTuyjBquoQmX9Vc9P5rE5DyRpysNk2FMfujeyY",
  "key28": "z7zbEdeBvRGX6imhDvtbKKuKgTHjLRKhgC6nYhaYGGfGhYAtBw73EWAd5rehZjayn8mZXcqMUSjRoyHd5uV5L8d",
  "key29": "5Ljigfv9TJVTaZKmHJvxRN2KqFckLkJwckejdpSq6rEqCrFoq34DSMTUmpudecPLKL9pm8SHmAk7PSuyNFBnVN9t",
  "key30": "2p1GSTCjmCUfDnfY3UgJJsCkip5dE1UqTURrbDKkzdS5k9qcsz7oP6qTawgxDVFwVE5epJe19ySrW2WseNXKNS1Y",
  "key31": "4sKpRKHwuCCiRUcEeoFJXj37xy9Ryc1DsfWuSp2BY7T9pki6TfNcCji5svzGMWUGw6guFUubWSft2xUBYSxf7owL",
  "key32": "nMDG6M8H9A7fPDc3UqatqozKXaaFzriGRCribRuRCQvT6FWtZxPjBMn52pqCgxCGsm4Zh1jzZe2utDVKwwtwXxq",
  "key33": "5qE5JzhLqTfQuzNvAE8MW9rKUUNaDMoQ2BHvUzXw1v4FfWPdsWws4mhcwspXPyNR8bQDyfBHqfEzHAh7pr8TKfZq"
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
