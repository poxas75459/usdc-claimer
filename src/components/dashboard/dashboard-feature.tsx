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
    "47n1qEYdbMR6FN4KCFUDYEBUMtELnr8bwb6VUwdjy4QHeoo5EhU5b8es9gTKztbrN9r6iqciLPC2WEnPzXMTKQFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFBEcQr95s8TmFXrSGrbDrBp7FTyqaVsjfCncToWqVah11KQSjqVkjLTejcQvWzaajMe2YReu5WHdCEegduN8jB",
  "key1": "jMW8R4ERLvLfKyFT1nY39n4jSxYPQuRYKNKWhG8eEAEn1LBE4iQbGtZB1W4SWtsnZ2U2ok6qtPzKDZUk2UaRwSk",
  "key2": "4BdHb9ksxz7FosZtozLgXsUianTHViSaxcKcWvUxJDJhm9uDnmnXavSNsyjNbZG6UbAcGc4pfwuNwiPRjFUpHz4S",
  "key3": "5E6EAZpiv7Wagiu7y9yuV9MypAJwGVqBXNWWfcvDZVruHEaW4NZWd7AeY3CogLcb36x7U945iAYisfnwdxDqj5VD",
  "key4": "4vNhsT9SzKAnw4HrhM3VdkovwGpCh5DHiLcgCCugFrTSCvLG7RwQz4Z1P8jXzAWweRWWMfz3PXaqUBwMo1EGtn4v",
  "key5": "5KLanfAaa7mmZgvVWVPiP4d28Q17eBnb5Mvhsf3TSQuNY5WniS5v324UTRNd3kztpWdLhGEMgEkrCJPYZzbf9PJQ",
  "key6": "2WkayJ58qdidAWko9weZqpr3ozQC284L3rPhuQnHAf3H48vJECMgp7Uvf6iD6L7BEV5dLBRSzChwuo13qX8t7fA1",
  "key7": "2mfMFpPAEAyqXPG3CTm3abJRCY5VRCdMcnMmA3QykKZDWaZcqRBjvRGxgWGn4noQoEH38N3hPzTbfkHd6AH3DAqu",
  "key8": "4QAtkc4nuL99hMCCbJnnapP5DQ3U1YBZ7fUJgHQabJ9RGJuZ6Kd3YCwAdQinYy2g88LxtDrhyhmCQckkzKT1fPa8",
  "key9": "36YqQAriXvteww7CYRyC8nVqzGkHP8j2AfjqBsR6uj9eEQdBTMECdMpqh3rTzUrVv5Kk76sM6kdVvfv4oRj63mSK",
  "key10": "52Rndji12B4tud72N5nXn28wFVHsSLb5feZ81oDMmgRkzAEwhCyRsyFi8cBrowPK9qHbULbY2NydwUKwZ6BKo3Ab",
  "key11": "3dX9zv3WuHHSQC3zDjjeJyDQ7EkWV3MzYxqWBG3LTf2UJnpQNCXx5VffDipdVuxnTdurPDyE7pMuZ8ZN5iyUXsBE",
  "key12": "CbVz1ozwxnfES46pdAEE5Hbs5M8rWhJb6bS41F1ns98mFxbTqeA2shAMBZSGT4prigsFecSjEaVoQJHuihn8Sy8",
  "key13": "aSX6xePLYYwN4AtWjNBxeRjbmibFcmMsLqc1mZeaygregJGXdKoWd823qtQudDc6eAH5kRgxrA96bxHdsFdhaej",
  "key14": "2SjwwQKpCjDSzgqyGoXh58yEoGWDk5X3w4vjJTfDYwH32CXMX7Y8SvwYGefobLsoBywHB5Xhwv9y8kibpxHvEd6n",
  "key15": "34ZdvT7UfWRZFCCTLZngGkHq1h6Z39AGLLVB9cVTgxSBoxTzErfNCFsbx9gQMJb3bXSNFNPAFeEyvQS23zq8gUWM",
  "key16": "3SfFSrcS21hA2m6h4NqyFPfRdeWMBvkRLgp7eQvQkB9HHcNJxT6Atj5iCidwtP19WQ7aBqkpm3KNJHEmHWiTthDH",
  "key17": "PSJ2e1wP8qRN2QusTz9FxGmak958rH7HZbJyzzQukV86HrYgk6BkJNvwRBio9jCEwtJsp9bzk9dyq84MS8VffFs",
  "key18": "2Ja62ycuHCfCRj1J5j7JnDmzoKJCGribTWKoTZtxrPqTNjWcLWLSMtPpmqGTXqxSQGr42mQ8iNLr2Ay8dy2iXGjv",
  "key19": "5ANPWfM9H9aGvaAcX6ZevsgTrF7kMxGs3pTKCrxCqEKfbXEinmBoyeKELwpkMJ73kzZJbJPjcVurHWFy5J6y21Go",
  "key20": "oRXhEu16d2FWyWJV4VsEaH1iTNvJAyVNa3xedBo1xkkhwEkzXjjarTAyqbWUyfHNnQdGuLKvwP4SJErwXnUeW3w",
  "key21": "5Cwp8Gp1hvUTQWhaBLyaMnppv1UMXkr6WJKsH8iwa8nC8vaGdsLGFh4GsJ57B4w7VCenoHG7mZazYHkcXwyruR3r",
  "key22": "31c2bopkmdHBetK7DzSBJTRLdiPru6wb19hTSzExyumZ2Dmg1mgnVbwqzSNTEce4VP9iXhBmp94CeCHjxr8UktcB",
  "key23": "4GYhwox2Z6oRrE3Y4TYx93a5Qa94DNTqKvwHyQsjNrCj8DpUBY1ypsc2HGfA7LnxGUSuURoeKqFNrtdpY93UYvUW",
  "key24": "65zBkUeff7u15YJ211vG9YzUett2VxHpZMmP7aUD2jtuN5o57CUVuPM8v3EZyGqzaVFYSyFEy1A6trNkbZEs1tgv",
  "key25": "2zWjTGhTG2hJMzKxW1MUsYfzu2p6h8np7mkkCG3JwqQvd5ZCWcj4kzaoaQgrw5CJu4kAoyQ9DfVk5a52hWwELsVL",
  "key26": "57ZsKzcG4ni1fP9V4BWLabZas9e6aiVDrEaw11jjwjftjzNXxusMMd8f65ioYv4y3PbwwMG1jXcvLKBcPC5UDmHH",
  "key27": "38gQaWKGSGkNTyi4FuukKmaUhqqERs2wYFmHk69veNZ5AR4djbi6nuEwnANc7ZB9gAYLRYvyDCizFNDq3TQcuwqr",
  "key28": "2PSbyoCB78aMFrW6mo9nuBZL3aUJBmaiMsHwf226RtVQy34bJeQoxes8qZxpZjtPGW1293omdJXguemNV3FuafzE",
  "key29": "x9BFSWdovX51SHFC3MiU3GPvk6FhtQisH2JFCjD3hvA5stXzBR4JWRhyqijU6xoSDUrDWvYvQNYLGqtoApbQohs",
  "key30": "c1LNa56dw2CDJXCuUtu9J5yjNr55iJAFpZVZH3r7rRXnfWyNYgGCKC4dC8dQ9bqo7CX8hDhxSR58N2hbDozcQD2",
  "key31": "mbazV8Qr3oEDFDvHZT2peJ54vZRvWtEHQvECrCfvPPVg1fL2wnxdawU51darQWkZb3hrw5oqc33Y9totJvBP9Fm",
  "key32": "2hUaUxg9n2JJX41EEKPcJG1SqPt48h2PSQcqHJm4Fk4BdbJEGS6syENxZ4pbmVv441wvU6VZdceWsut6U3Wuo7VL",
  "key33": "Fe1aEKbAfxHMiBTLiqaX5KNEMkStv4ahJuaPE3C4S48K6v6W9SGjbuX1Njo9FKHZLLoumZGBwjU3F8YAPsSMS7p",
  "key34": "652L4tYS3aAxD6vN4PwJ7Lt7PEFAAdDvuN2dceMUbY3WYZZdXkb34a6ruCYH2Z1kPoL3u533L7pkMe6ChCrw8FDd",
  "key35": "RLAPHfTeqwbKc45k4HgmFamWm6Jmt1C9EhqbzJpaSR6de1WnSLZXMjAjXGm7yu6rNX9sfrURqepp5MfgRRHfCkA",
  "key36": "3J44GN4MgkCzmCb9qhR8YatXePkfS6WygvfVf8JUEAkkcyQfWWj7qzdi81mR3k313XagjRjKxXrBnAx84ycYfBYz",
  "key37": "2ktVGB7KDFtzV71at2sgAu5bf2MDhZigk9uhydNsUmHWGtLh5U5whV8EckrygFGi1B4ogYyMJi4ecyLPuzhfeTca",
  "key38": "4oSU4jjJSfitPSgqrY5aHEHr2Y8aKDmR9xC97aJEAizWnQdb9gXnUk2R5TERDmMq3LWehMAnQDmzeynFPyHan1JU",
  "key39": "CugrNPk6dfCGDRYUMSLzNVKcCuRB7JXzJpwsBMT2BPWtKigiNjiSbK2WpdEeaBrUt8jGJJtuWhsxtp4FCKZheY4",
  "key40": "3RvezjP2JBnrspXYzD53M6DtT8tdpkL7KRZBMqvWVCD3RxPVwryhhZpxVMawuH6zguBKC85R5JPpwd6i412VE8gb",
  "key41": "4T7895ZehUAEFBnykSsZMCZjtzpKKJmasdEW2kMw49CoK56DzefFheVeSVWENEDBY9nFbc1kb6w7q539UdYoiVRP",
  "key42": "TriKTnwmsMVsKj8vAWuZL2UNUGWKaMDE24s33GLGg7p9LRPZ76jUXf1W48qSG6FK3cz22wiZhgMTUzgMM2xaxvK",
  "key43": "YJrK6VZY9PVABLCdKB9LFAVpHWwAEpbPnjtMdtHS1sgAKTYAzv9D9QayFtSJytotxCMcrrxR933ZwNUrepUtMqr",
  "key44": "53PPSvE7HcX3wVoa5q33WgYoomy2MoQbAFqL8mhFAYpJcxS8j63gGL4Frg7xXTn9GZU8wtV9ybE9RvyF8wpV7How",
  "key45": "Xdd57imk1CrsLKqSUKXWC7czwwMwsAo2QggEC7JgH7RenXNpPkVphFuxTqyevrLA7VFSxdtiHoC2ejfJG5Mp7iS",
  "key46": "4Acnn7yLYDnqmyex8RCF43MitbAzdDQdiiT87V6ER1HGgyRX1yVmV2jbsnedxD4Nsv7P4G2kKC6ZkvRAV316631b",
  "key47": "4nqSfyrTFeLW3Ey3deur76JSpPmGyTRydTJPpRtcKy6Ukj8P5uDhzPB8ec1P1EnDGBwHmwo4Yw4kjjsEyEy6Pb9q",
  "key48": "3bTb5o1TdnaSQcqYomLmwGsUwjk2cQoohpAwx3CWSci98xCNETQdEiYrVZ3H9cJxdMKzkdwxe7jtzwDBfMThveKN"
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
