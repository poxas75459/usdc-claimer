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
    "48x43syEdauQSWrDSDmSfyhGw2NuAWv6WUVvGBgJLgbgBMhR4HG3kxrNF247PnFiKBe8KfEfJ9ZUUFYWEtbt5gK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDE3GyjauETcRAAvbzaewkcL8eCrDpSs3xXfcR25kAXDGNuWm59fx94cwEiVTHCU8FcZ9H3rK8zLg15Wo13obbC",
  "key1": "5dVDmKcRKk8bnCJ66aXvTTp8aStNhUaW4Lqwe8GmBw24ynW8Lmc2c2Um2w9DnfCnTEu2gNGqYZC95hV5iHqXc45x",
  "key2": "2fZXeJGtuyG9qeB8DJZQNjJtadj6sHtkhDBFnkVmWkT37zjvs56LuobQ5iF7k8JRtw8qf1iM5VyAsuf4xEsWgw8m",
  "key3": "zGRvZXCWyDAUpTFdAzKUhLwmeuyZn7eDpC1dLms3LhgPzWLrYdwQ4xsjyKT8tnGQ1BJtyZkdXd9YVCFUMKkofdj",
  "key4": "2M6PF1rxeT3jH7k7pEY7SK7pt16GGyZW2XAd7gXKQXiUQnCX7NfTq96yuHMrAU4BEtkL5gzhm3RD4YQBumjPipTi",
  "key5": "3JoaCos1hbRPR41sUEtErgTpiHFcRYhHzW24dYsAGZgSmosCqhJL2D5LHcA8o4G7cTKFpxTET9ZKqxM4uKF1Tx4N",
  "key6": "cAEPdZAasXgeX8T6WWTDsvXZM1VRpdxzbfMqXzrxgFbMZiK1fNZZF2DVHUgigCm2tDRfvMuDXRbq2eBXaepym3N",
  "key7": "HYBUUyX4cet8Sc5DbWyJtL4LaH7d3pN8Cbb6Dxt5F6ocK81PacR6RGxJmsasTYDGQnhFkKpCUFhPcrA6f7Q4Upe",
  "key8": "5JYR8zxpNjqwD9LYFG8ruwKrFvM8chDtykvGLUjqmnhUHP3ne97SQpavhHiosCEnyz8cxjSTvsXdvRNYTZb3Hxwz",
  "key9": "2RWn894jkx3sVwTC9J1neRBZd8fKu3fkrmUCTRt2ohvw93bvgX4GpQz1mJ9rUhS9hooGMbqAnxzkRaWVL7HN6DBu",
  "key10": "3Y1VmJ5QsiScyHDEQVNgiUavxqJ52xSgJKKiLmTtJt7gSb4Sp9rvvqVmd6LFMNALtUYsTgg44ahfqM5JGzsCWgP1",
  "key11": "haX5STArpca3EW6ni5NC5av1hw9GR7D89YsUdPBMEAjPM76AzPc1kQamjw7pA3GuLuDXA6fyjUCE7EAtG4Ara1W",
  "key12": "2wXUHR1nERRaHptPvxuBzmFDADXVuCEoFS5BEARvpw9mmkeUTzW8XfCrx5cmfpAV2WGYN6PbedsYpwtM2fCUUdmw",
  "key13": "4B8mhw3o2BYyLW66i6fWFGzPg7x9RzeEWznj1Utb1TtLpc7ujs2LUoRyfrtCprPA6t6wtBKQgA8QbTLswSASVbTv",
  "key14": "5bSqU6yMkk7Vua2ctW5Y7oyaEzaY1K94Pod5nRDsbWcVLt8ieqxXpxRoapa1pQoQeeGkWGWqshj4p2A6hEjW8jHB",
  "key15": "DB8aio1StcRmeDATh8ueYY9t49Mb1HukzgPKtVs1cdwn6nHDzMQr16wkg81teb9vBZFgrWL7tQA3pqKUVJPepGy",
  "key16": "376U46VToA9FQkZBDgyNzadVA5py2WLf923zqvBRyghkCd5b5bw4oCm9avHm3yn6badrGK9HDo7hQ7mmUbCLttEc",
  "key17": "5VWWjjgP1WaSrTJuSRYBrjPX9gNXU4r3tqaqJRFVhmPnLmu2uwN7p3k9wmkTUkZCxc1HJXWz5G9bbpQPXKHDt8Ay",
  "key18": "4Dn5VY6cchpYWcgdhengRy5Z1exX6gw7BrYBkDhpHkwKtyfMc7Fht27VYihzximd5ntZtq7swz2vuPWgqPtS5BbS",
  "key19": "3rW2fTXhBsvuq9i2M8enYcChw7u1rFgUqVDkxirZYZGMGv2SNCMMu7RYpFZ2ZTtNRzqkJA8LZa1DsoWRQyi6cjbs",
  "key20": "2GR6mR1REjRF5u8RFs9y2z6DbPyNsoVp9ZbbDypJw1oZqE2vESuHsoQomZkWs8D2EuXTgJj4YFdQZfYRXgJ1u6iu",
  "key21": "4KBB4qZqbHiJbsX7dCyTaPNqtTGBd5N4v4KqNs4RUfFxJYjxix2gZhKxiKKmdfBmu1orbCqnVyHsHicD7WQR2XB9",
  "key22": "W328HT3JVJU6p3f4WbvYJHp1Q7zgenzEgbibmcx4UvZfy6w1RJ2qAvyw4zogrWQmUA57E3CaJTccd1GvghG7Hu1",
  "key23": "2JyAGxy9LyXiyWsfFaAAXsSycZzjZj7oLNyfJF6psXVKDmqaNcgEYzwPGyz89iS12fGrxaig7NK5MTWUSVgUsWM2",
  "key24": "675XNtjfzp2sHiXo8jjkNyUt3hAnV9ZLoFx4XpTDa8n9oiSvFGkPHh4Eb8rT12mjq3o6Z2QRyuHChQvpYUAzzbrV",
  "key25": "4X4m8NYwhJot7bUqQ4VsXGib2k3n2FwP1SoPvFC3doZfQ41YcKoJd8DJBwpKRMy8BetCCLQ6JBr1nuZxLRrDuTXC",
  "key26": "47AshVJX3miAfrfpPEa4YWHSxoTvVRrWX94GhWvZs7sr5jQobf5rtD8W43DW4SFcq7r3ExRe3xrcFwJsuFGqewDF",
  "key27": "uAbU7HuPzx9uUCBKmnizGd38x1N2fmXoVd18oNw62VWDKGB3txwPPJDnB4XYJPxxzAjKi5HTF96R1FjoYtC2pN9"
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
