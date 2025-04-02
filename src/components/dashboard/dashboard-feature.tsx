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
    "4VEwMFQ53gDmPbQXQjnZkfQzAfhPeQ7xRQMki1BX16q2HRszs9JdaXB65tk41MPyqfUenBJYtY9EoJ8hyGxQ8YTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39WmsxWcniKPJHwVsQq3qSCjzdVC3SzEupTMnE7GgaNGAtxSVCazr5ax7CXXtFCsMSVs2N3vbWFaz8RUzJr64iws",
  "key1": "4YQpU1bbZP5tzzTUht8uJGbFo4JESvVMipQdjZ1PJB9zj4ocpzh2HeHxQe9yErVxLLSYvmF5LbsfWdCx26Suysz7",
  "key2": "58sqQHBUj4KvmYQmhT6EVPYSDL8we1eEx7yArLCjVnD4TGwqqTM5TEDPDTU4wYP2H994nwdgak8kjxzmuTacAdwa",
  "key3": "2oHieDDKQkMiP7bepu82aSqKz4XqyMsQ3bhSX2rtTyVib7Cg1DKAp6G2DJVnzMksNiMAK63wriFSpNEczJSpf2SZ",
  "key4": "zbYFndZLJb1EEAHeTsEZXTzmAp4TXRN7CwqLgkSUneYfBb3XwKhjwba7jTUeJf6KkoBHTDnQauREPr5h18swLeU",
  "key5": "4zz3gTanuzQuLsWydrUUS6qFQ8xAkPBCF9XxAy5wxZjygB7qsqtiPzRG5T1m9C9UhqfxFNnPeb3QZwrNagH4f6Ta",
  "key6": "uJ9ksCKUeGbDmodUtnWhKpVvUuRmnofsMvxADjq3KPvu2oHF6eWgGod45MhtuVXwxxx93A2sWDKeYjY2qFs9som",
  "key7": "dY1ETqeBU1ViLqB6eeN3ctPFjyNuiRTXkd21bvjkB4MFrfJddXzu2dYvc9cAUAt4wA9NLjm65vayjmNKYrUQqKp",
  "key8": "5iSsmVL45kp9N6hr2LABE1w1G1vnVw12UEfhDy346zrwtVTWxgtZSxYWAYQxDtD7FJJPYRrtCEEBpcWbcjLCwb5L",
  "key9": "3totcnnQsLhzxCt7QMFBMAnfMEeCQ8ooabXKLDtuYC3hwxE8efspxMK7FSAdmchKMZbS6CmBLwFwM1Gwh4PEVXUv",
  "key10": "4KxiS693z2svNmuJWBFGGwf7e9ozzbbpYRNzNiwBRFGHN4URMiwffJ1v3FDC4BJ7PiZHDmfeSw9iNFBDCpZudmYG",
  "key11": "2twqP4QU8sqg5rWjLoTR5CAUavXKEsCXg388ZRzBAWfypSwc9hvG2uX85zFkepD5SjkZTnhp17WvJto2oRgi3TQw",
  "key12": "2gcgurRjXBWrSgurKwJqcEJ1Bmc9LNJwvEDGQXkpxBWeJBBD3vHg6kniiv8hAkQuS71H7yG5fbsYg4Y5SP6o2DJb",
  "key13": "tpwf3WKASiu9TdtTstp1VsDKVh9C3MgBZDaspSHAx3pjY2iR7hJsTzv5J5aMgNZJmVSXWVdykDi2zNWmdQyviyf",
  "key14": "2FbSdH1kM3Wey4asKTJgMDPSfM1qMVw9cZMkiVoZaNPFTzuMEu2C8uUJm2SuZJcqoUmhz3r9Zqqntf4vKE9vEMu1",
  "key15": "46Wm6UBGqTgSmef8sJtggf4fXxe5aaYcX15dnrrfrYCNVfaxaxv9e59y7Pd4CGVQvi5FCY22C9dzBJ8qVwFDyjs1",
  "key16": "3oTnJ7HgA16iyMgA1Xy4sufyjNu3eTKeLrJFPdtofUQNhiBs4yk8zMC18qEAfPY8Fn4NiVZXWdfQA1nZriFqxvvW",
  "key17": "5NkPMW5pTzH7MGGymZVwEcGJ99u1pAzyvxw8AfymZwTfwnX9jW2SavVbLxBrAkptRF7UuULTVrDjDhE4C3TWrCwU",
  "key18": "2pZbw1w7nERyPpwU3wQz8RGmjuhcihtxCPGQ2oThwKjdD19BeenrFxuLnkw2WeGwCSfN4Rqp8VAQ1VfGxUcYh6zA",
  "key19": "aC8nskJhr2bedW92ocmoypA2STVEvCkRdLBENfReuPJajYJcMGBtzFciXpnezzVXB8PZoks2TAxpgWP6YkEYx7J",
  "key20": "5M7r5SaAgooKdzzYFaMT9XFnMBriaBNxmadZokvWskeiRztFWXwwZ7YqTt6wMTMvrUZoEw3fqQYR4najL7oEvnbY",
  "key21": "MVtW8B6KyPYqGiMpPFU75PDv1LVLDrzw6EKfPf1stJNS2yjmRPFE6ytT1y6q6Anaxz9Z79cuxaVUututTgvjc4T",
  "key22": "2sQ8jZAwDFYCW5bA9LHnBbqmydqcgFhbbPmWSpRWh3a26xLHR7Cehx5jStzGCHHhKjCSg3T2k3Ehst3tH7MUb3NS",
  "key23": "23pFUq3HBmgoNMB3L2fTi1GGXyopXBkZvgKtDwxENJvTa6dum8meCEG4sco99pFSeGavqTzVKwoJTzNMjSGticps",
  "key24": "2QMiySNvqk8feVrpgw7ZzATxVyrTFKraCSbpTjoPTRqvhJrTxuntyAcWwyUTpB5qgRUDCKQYuZWQD4E7tn8EQSWH",
  "key25": "Nx2YPedKFZkt6kGQW5BZeMoZXxrE7qqEtLBusaBpUQS86dKGv2otaYX7EK5ttybUqKqsrLf1zMH2M8d9d1bXuA3",
  "key26": "4UQqGYiGCN5SdqyRSqJuiZi9eaVpyKPHGJUGaNxutNf26EcBLZbytPz4my5CWVChC4XFFLoVVJNfzwLAzVNzRXt9",
  "key27": "2GavLF9bQkLqLCf8EYNNDkHN62cvJwTdJUF8dXfgDMU4TkpGB1rjwWJEXH5q3xb5vmeNdEfbMCvQPZp4shh7zcB2",
  "key28": "5B9ffSCAAhDkvrdmRpg66odadg2sU2n5GHwBRJLpUkDqoCMKnu7VveUrxmsKQAnPPBZ2Y2JGxGCiexD8SYaFt1s6"
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
