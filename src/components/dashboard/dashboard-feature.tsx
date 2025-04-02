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
    "2WqRUQqHHqnvfvtBbF8nkoyjAEgogeTp4ZePF3spzBrgBE2LeTHm9kwNaRxcw6as9rRiukSPqQJZSJ8Cz49L3Vsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDUJunXdHfrfzkhzDi1JHyS9dx7SrfAL9gaiqdrRUU5iouUSUhnYeRYcJutvLPjzzUUHQSbeyVL6HM6oTmrmsdn",
  "key1": "4Nh6jH4JeeJygqSbcbemWJJ5J91ubBGB3Ps47iyNnwksfMRm3hYkT2HupxC114cq5scnkSyrQe8BBNWutihTFn8Y",
  "key2": "3db2Jp9omi9nCtGongGdNKrVM761R4uKMyzbxY89NSVfUQbn5Ut1w8cruBegms8zUZqoBxKnYVxcpf7GU1bd4cZc",
  "key3": "3sddnFqWC7g8DNn4oSUQu7mzXcP9x6Fk55jh5rtpQxw6AE194G3N3yekfzD2ExGYyuMzvqoaKzn6qh8N33UKQYiS",
  "key4": "2C9Wfj8P86eSTvP2652kmKvJZWpnXF5YePkx59jzneLtMYq48TpfYZcb9ZbK7j5WKn2iabL3UR3BxN4t1i6d1uwy",
  "key5": "5ziCB59NVgBt9mzEu6RiMpcvjYpoB9xt7R4uEmPHPkz2K6MNDSfsv4LzCM9CG7LeGM69twyBqjSNQqxW4G5jDyXB",
  "key6": "3ScytA2jaLVysZQpBD9FXzJbJ7rcNgkK1mtq675NrkXCFgxESJChCCTGSvRvggQH2j1Cey6p7jp2jAHFctDVTTNY",
  "key7": "NHp4fS5ezdeSHSMYpYPTeaeBWU1CXSWcbCoA2viB5JtcKnH2MMRiQ6DbtUL6EH7m6pnr5LKTpT8BZYRQaMkqbDL",
  "key8": "QWrBfLZatCNsT3jEyLjZKk7WAUfwJwoZSr7j2xWPVdbRMJ1bRDEm8CgqH9YrfYEGKuhJp2GtnD2FpMyQbdEHYvy",
  "key9": "YLve9xAfyVoZEkFYWfH599WRzdqA4rNFasDzaEaWF33bcwan5uSggwysPcBnBQeJZvSBfKMg3dhe1kbVvcP8TL3",
  "key10": "2xRxUSHsV4ss6NXJAd914U6gWUDEwnAN2yD3JLfzNfuZWc6tztVrP672WmCorDX8CY7JAZxkaTVRv8RR51cVXC9d",
  "key11": "2bZexUnbKqGdAZWWUjZGigLwqijUKYSioQ8yT3zmcGeQniAyKhjETDTBvXeQciKCz4K7fdcx3arWVTB2Lcm7UA6K",
  "key12": "55L4xUC8ek8MzGbSzuLvZTMusYUZx5mHPNxzt7ZFpbwAAwnzEKw1u6aCKguHv1ZieVBKWs8rAEyBkhYFi4aCHehG",
  "key13": "4wYfNt2rrArrjAc8cPuSGsNLLhRwubbATPNUwx1mj2VmgtWdzwSzLh2HXrLLYqYNHki4G2ETdBrfjrbAN6YAyxsi",
  "key14": "456gKFecMDYNZq3ND8RTXbmJ6CkGr3jdrJynhAnzUjWyyXMwoNobgUAMdnVzM1dY3S4rz2mma8niPvrN2W7L3N7m",
  "key15": "RgRvYdYhvc4VSWHBFiXMpknrEXzgNYHV4cVKJC5eSHUq1Tqu9oNhdHfQzhiDBzBp41L3nJvc3DDVmZQArzkcPUh",
  "key16": "3cw2BFwkpK4mojUCwv5Aa3tuHK84HxGErs6wuZ6teBHmQqnoeZB11tiEyd4sSatGw9c3oT8mtymQan6J2cvUa69E",
  "key17": "5FSzkLPbcLpGxz5UBpiJqexRrcBfyeem7cB2kM3gaW1i8TQNvEWRJNcR7yh84HXm2ADt4sSbzidvvzJj4z6294B2",
  "key18": "3f5e38UiatHNp2yYrH5ku2LGETWubLunFAdje6vJEJN28DWGixBfFWQiDLRiBhZvC886RxUY3FunNtNNsuwcPJgB",
  "key19": "49BtZVC61WGnGUruc4WZd2RrMXJ33NgmvuxXLgpsH83mca38v86zXdVWi1tNaU3uuVWTYY3ihPCjdoD1pz6t8u2R",
  "key20": "5Xw3L8PGCuCHzzqpYGkRLjyVSDnVPuu7aVAuuwc9mZdPuo3JKn42QEk3inozzz9uFB1U1wLohRXp7HNvm1Kbwsok",
  "key21": "cpmriXHbNUgV86bNfS5KDtqgA3y2z6DefkwCkGYqDU9oEUDHhRzYJxfNgyZnx53RuJfZtJexi457WzjrvwmTAnj",
  "key22": "2uxpAaaTeZ5orGwos6XMon62PWsRtGxtapWEDucWgSvfJP9vmCwqP5M4TjqWKtfFGQ1Uk8XbFib1pvRfXVnErVzP",
  "key23": "53s4UX6tbG63V6a7jmf38nZ5evng8ySTa4ZmomMpGZVnGm6wSdqTtyS2hUBn5FsdmY2XXWHcei3aTd5HHcjZQtdU",
  "key24": "2xhP8mniWEws9RkPF2G1pSJmpkquT8JJT2DSxtdoqmLaJ3fTiKvUZV8mpHcruSRLKTCegE14pzXtgkEcNArutXSL",
  "key25": "3zfk1CZs4zmFk3qSLzYTGikELVY6yjsGfE1LLR5DcZcgdykhoR2enQoG8mV7NfMBemgpmfQ4So21PHiN4Xm1XkiJ",
  "key26": "7ibMDrBLAhvBMrmP9nbU7X4VF9Uz2ykMSfjYJZF9U6sSA9hFyDGYxUMJ5CyswTj9NXsoF2FntBbS6Pcx1RdeGdh",
  "key27": "FxtTAuWsaZzZpBQLwSDhW3vx2RZVfkqF112k7KsXpXnPgtDHn9CucPzdsRUAahvuCRR1xk4LkfqWAwsFrRJSQNG",
  "key28": "3tfDfPDMbPct9RcNMrMX9VVjRCNuCZfMQ89iKMx1GcZLS6MjSHi9eaJ54DkRRuspfxkeYmuxda7qJhosjXP63CX8",
  "key29": "5kLzgZB3128pTBDD1eGDB33vGudfcQY922z1WVK6Ub7trgyXry1KW3jcTP9BcZGCXnN1n2LCYhGdAq5UcyXRmHck",
  "key30": "67p47b7S1SrAAE6n4PVY79dTAiqvt93v5W25R2N1E8SsQscHTVZcrjmRBX5fEKX2H8Eih4wfWFKPhKQx9xhAXCj2",
  "key31": "4jHMFJT88kujbDyZzDdCQNpFEkuRqR4Ys5sLyZRgqV77XSZNhmdKs5EQSeWCXeQvLxcaLfvpG1UaSCET9axTDCiS",
  "key32": "42k9ubh4K1awUajnA324ZGSZXwPF67qEMYvtc6uj9GVodzh99yRccVJJ42yCbJjuAkAHG7SgRDAHEXZNBRnwuVCa"
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
