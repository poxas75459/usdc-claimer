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
    "4YboWSHYinQEEA7HUHvep2FpfXQ7xNJxbJ7TAXiPFCx8ULrbFEznN27UuLwdm92QDWdgLkD4SgvPMmzFYyPatBdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FwuSzatf5aNnNfwe2o3HJQRqURPnrgVMED4KuKgy5TV6EgkPTdbQztCwWiVd8Mvy6wgf3ZZkRqVWAZcLQaRUEhu",
  "key1": "5KyUwSYPnhsz1PzfLxHERapNJr29GrsNxPAb5igCWztNcY4VwebrHjpsdD7U24u2WXEoMNmW3FGsJG1UV8rByUmB",
  "key2": "3yyEmk917E8brzavCo9KDXVGJXt1YksSYLLtQv7XovehtAXxGmP9QxJodQeoCDUKx35gYjoMfmzTyCnwDrHazZgm",
  "key3": "sRP4tUT4AoE4TRQAz2jySAq1Kjj5P8akUHe1KzsgBeLLccB3BRbEB4FsJ9JzjeGxAwwvZWSjReSVzL7wwFmx6sm",
  "key4": "5XvPbsX4VGHKg4HenAco892rahw9RBucNZF3QiEQoR6e1GaJXmw9dLvvafbv8EgYevWpNKpfyQGMoyvLnVLi59F6",
  "key5": "2aBG8LN6y5LK6kaycDJf3oSRMcPksGiBMUoFHb5jS6hPNUMdNbGsB9Ada3AgtSuFapyqcbmy8QuDpqyfWymAcmNB",
  "key6": "4Ro4d8KiidZVCaDwr9dcwrfbDyUZxEcsyHddzgP25Lg3kQTL62CWp8XsYvcDUBAdvVfs4wVwgVsKGp4LF7A8A1UR",
  "key7": "2QHV9oHern7yfR4n7BEgqgjZSVtCunkf9REbUAj76ThK18VGcdva7cRt99uH8ackDRVTFb5oiPjfeYmUgQY84vqz",
  "key8": "2NJfG1e8T8TRkcpFNZvddRgFs6ySjNznx2YpBSac8uJwW26amUsksPmgWmWuctau5PZYcfTFFobvse7gPWzAJbGD",
  "key9": "4KDnLUqcVRknQWbH36wFjccqMDP3tCB5Jz1TQgGBoatVQfxUj3hVvnrNpcH1HGnbZoUdBctoFJ1RRSsrDDCJz3jJ",
  "key10": "49EU7sCXfTxaqxpCkLn1JAarv38cpnoQ8BSEAotga5mbk2Dt5NgVm4x1gNVQ7kcCAjqYeYXGvLK95Yr8SmfEjM74",
  "key11": "26cHL6w59z8tMiuw3m1pgzDpJJjB5d92VdeACY9DuEq9z29EQbQTiQ4L7tM5RF3gHN8ZWMCDXTkwgqhuyEcjUaav",
  "key12": "4HT7htZuDZYLrCRK3s98ehThCbDmnrPwfR4SBvWRpkCUAG2ZyJgrMy9ZjA6HCMBQ3reUEsgAztwsm2aJDtjPSvdm",
  "key13": "64ydF9DNkrFQ9TPPctDPDJtMQsAAAsGA6z9PiCYsXaEAVH4a43NPDmuYKsLJ8p5JfkWvKag3ku5As1Zsgd8zQcoq",
  "key14": "5PuiLDDJ4PYYxvd7HVx281x66yG8AKCECkLGgf1F6pot9UAahNA5Z6bBk6JovXvohmfZcmqan9XiHcFD3y7ou11j",
  "key15": "pq6mPKw9BRGTDUjgNwrph7qcPe4EJ7K2iSRvPAnnnbL2HqCHLxNjMCjRyxEvncc9Uen79BbaoHdXrydWPyisqaf",
  "key16": "5TtDnHibTdNFQhSKVJBTsCSaewMVSTn69su2NoL5vUooZ83GKXiQJUSXNnazkkSvwQzx5Pkceq8pPpBxADFyppM2",
  "key17": "2VUxDcMX8F6n1iWwYAQSS6UuAs44dTDbiU4T7VgMfg5x7UHCiEFaS9eGtr43WobS1WtmzMCbiPfdXaG3eUKfnekt",
  "key18": "TQ2XgwH6H977HwuECoLhyW8sEV688v8KQLJs7BAncJXzQ9psAEqjnuxPYEw5BQfZfHtmiJsCPHXwja4whDLa5Rc",
  "key19": "2Tm1puGZr5gj7pAmda8qt5GLchSTWNx6sdeSmSUSf2vc51bfj9GDhkaLw6gQUBVBPspf5V5LrJ7RrByof41VySBR",
  "key20": "2JD4DZTYEBZG2n76qgW5BoPKSguMZ6D3UfveuNBJtqTVEtjtp3wENRPk8S3LjDAFQLVvhJgZumHfXayq8CYsucAq",
  "key21": "5tUgtQxFoAfTFV1AFZiwbqjD9KnutER8ZGQzkZrFN1xoGi8tQvrJSpSm9j3AKNKah6R4i4nwLBXJdotF7WqVLbaX",
  "key22": "3TunR6Fs9ddniSoDY2PWTy1VEnj7gzqQtbcxd21xPyLZn1WS8kQnYp4ufbVL7bS2WqGb97UmidjLWFJjG6TrqBEJ",
  "key23": "4tLaug9dyPNqNkzrYdcvZzfsAjcEGAY7dzx2K5tjpyLQdbU7UAvn8eqRmZm75zzWW1fvpzbGcseauDDL6Q5zZeAd",
  "key24": "3GygE2Wt5rBAj17DTU26jk6V2iD8nJoy9rNwPq9fBLJYiFHsnKyrNFbXvyurya99V1PWuPXMas94LnUXbBvq42mh",
  "key25": "2xFU5bEXgqQUbpASerehA5aqNiQ6syfPx8NQC1E2GPm2Ubfwy28eUZBek5ZBxP7v158su8FYzQxU8Yqagha34zAi",
  "key26": "QvbomjcC9e3cgLGXVRVGAqLm7koCN3BKgREZJhSxy4bZytp9JgucfUe79dyFphWgSyT33VTvGagcpe4FVfuyRxS"
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
