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
    "5qjknwYEdZcYNeBt1zaUAz6BWgi5iqts8E9tqSypUQx9dqaShKbmpwQZK6ufJMVcVuKuUuMEEwvqK7iMEEUjaJfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmRwqyBmV6UpCtYHj97rWF5EwMDPFVwUzT3jHrQFsHKEoDT1HyRJWUFW2RZWFn99E1soqcQoLQ5mumBeo1Uidjv",
  "key1": "3eBfRDFRKoFxPbpZnKnhZ7BJxZskJiQYMQtGBQn1t4gBbiFeVxh8nNMMV25CVqJJDeHWWcvov8NnXEuyAPV4FksY",
  "key2": "2zaLEcWH7h9D1wgcRH2F3LFXWYnDXUftcmMFCStjMawT9LN9AHKpx4ZCaZRw79cTbA7FnHAWn766hRvwE6247URX",
  "key3": "5cdzXJ1qDCwbzZyBppX5BAC4ak97XtVJpvustXVHhso1PfS3BpaVsNpLdvfVizy56P3UppN454FrBh7v4T3Sd9BN",
  "key4": "2TjYoi6zcYF53DUQChrhUemRSgSc3rzq5PMoY7DoFxjjWktgsnVjkd7hSJ3Byy6Tg8MEtDBr6SV2iam4dn2t2RHn",
  "key5": "unnnoLHea2DtK6AWEaW4yjQq85KDu2vfT1Edm4JcEYrc9D4gyAexmxGHEWDSFCAQv77CtkXzCPCFSUdNLMwD2W7",
  "key6": "5pTyw621J744CoQ8FFnStNmnCCe1NCfxVpLBMcxP24knogTZHf3Q6HidHRaXMX6QCpmxeo6vqEhfz3sNWjYnGvXv",
  "key7": "3bmTKdMqz8kLZn1iNtki9H982SuPjP1aJzoHbdtfyNoDtggC7CTYTE61122ukF7LDurw3d6oiREJVwgWhXDFfoSU",
  "key8": "3NRSixh3aiiGjoiMf35Hy6qLtpdrUQXUSJYqWXjzJshAZgxbzi3r9zDsdzgMg2EbepdGRTSLdBPGBrv6NtANQ2Ao",
  "key9": "51zRMSB1uVzx5yUVLbfLgq1ZmphM3NMzhhjjLi22AeXjEDgsBq8T5fyNvvcKk38aSrPZ6NkXNZb74FQKy87gMjkJ",
  "key10": "2TtASHhJEB34uCF74zSRVJEAXoQMs2JF8ABeTLurW3U2ynouHw5KYfwWw5XbRTxD8AkTWSZx7U6muW4aFSVDjiHv",
  "key11": "71NMemw8AUv4Z3b5ohvRGbGMLGiwSTEN2Tpt9HbeeyCbP2sehL56ZaLFduYpXYWcaXfqBbS2VAE9LHfWTSMBwQ2",
  "key12": "5mVsJifdjC62BaZsQBvMb4iwooGeaTG5kuCCmj3Hh3U384LSAc4XtEB7nPZZCgpgeDxYacUXQFhZAX1gQuyNxnrT",
  "key13": "2wg4wjKnCBYPV1GpfSSEgLDeVJBSnjXJQpDSiLPcGZi1iKqrfHS18yNLvpwoNGVDbv2X5u43r4euTNMBKRSpndb1",
  "key14": "4YbPwWvJ35dvoaCKMDi1DcEM6W43vgCtKmyhBkwGCmBp5pkceY1t5LH2eYH2m4Seqk3TucAPYNzjsCkaBCvx5ymc",
  "key15": "fvPUNN3HXzEFTTUP8AzzPKpRhQnKx2aw8EvkX1M8HrRCVbVk6tkBa6K8bamzKqCcscdacpadw4d13NnNAHdxpwq",
  "key16": "3iLhSwHGPk7CKkq2z8jxkYhPhJW7ywH5QJWnrNZLK9XKtcWmz8o8r1qYgVPHoedmjuft6HPSC8hGmTpZ4iy2kBjN",
  "key17": "4N4cPU1xQqwtuAM43b3PHgSuVQGLnqfQGuWobFQuTUqJ6RhiHbFgXxmw3R8u1ksw9dXcuw4aGRh4scE3bsD2naJe",
  "key18": "3259uUjx2WuERK9swJZkJM6HgkMpcDqu4x6QBrNjrG6zqG52u2qGjjDq3TLMLdbWfUcQHcELVnZYBPjn6Hqd18uX",
  "key19": "4KUhd8DnDPKSyqJmQHitG9S2oZy3hwBUx5RRY6GfFKbUriQajFCsdNhic1jXRZ3ZXdVWXPhWajPhXLLS2tnCcxYt",
  "key20": "2piZKbpQHyMEJUX2iBKQCK8xvvHPacH1mY1ZuDPF34RLVoWAE4WFCtBp9ozUJcHmJoJux5AXsJ8P1R6E4nycS15N",
  "key21": "5o3usxymcA8QpZDknyATZKxYzg3Rg276d6D8sMFhyDa6GWavA6punergktC6RNHExmmhjxuS5YKmJzkcEKvn8wvA",
  "key22": "4GpFzEMaxh214xQidUho6PcvAFyTYR9beRzGn4dznshXyheedH7ZnPUahp65Q1nqVRzgUx6XYjogBnvz2gFrgXxA",
  "key23": "2x6og5jXwKZDszSQfjcTKAvK2Uq2HjwcPDTGwLyBu1QNbSNyfQ65XNgD7ZHjTkqZ2yDKRSBhujzgaH5ttrmC95E5",
  "key24": "4F9BtyZ8ruoKaWEzwmNuXWVyB9gLPF1bs4yUCiNiLDMyM9dwwa4ehnqxgkKRTuSC1pysksEtWTk41EtjDaBnpuym",
  "key25": "ex213wyEkKTbSsVdEm7udNUwxsQ7izVtGpgPSzQHr42WyoWaG1oyxdVbrkuDZ4FzFxRZmZKCP5yJhek8qmZ2M5Q",
  "key26": "2gakHNbXu4SHwxvRns88T3zwKXNhvgWVAWdsFyWcab7BxtGjbb8359YfhAnnQUkE4B4fvibqZhnCgzoKpewUnRgd",
  "key27": "5RN4sDMHsmKmxQEFtHCr2QtZabrDKr6ZZx5DUWp38vNXtUef9ux4zrPSeKiiYjuuXEmnBsqDkb216G9FVytksfPo",
  "key28": "23SBpqcVS681FKgSQj89gMJgsqT4QFKZZYN67nNbCGkaP92X781c1376Snqm23HKDkuJvJkHZfGLoktKWktfevTg"
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
