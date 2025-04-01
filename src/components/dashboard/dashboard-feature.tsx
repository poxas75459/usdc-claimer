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
    "fRzZZnw2D8fDiKz4ARxRXYBSfbLzVE8diwv3V3KqzfRefBtUjcWjKjDnRxgpfd1UZtq3gbuiYuXZXouyH8yAguu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqomvNH9n5mh7f6gtormu5thTzF7eCUKq7SiL3aA8LQ9q8Qj6pNTQrSeFN4TxrfA8odaWroGnwphA47G8jhcW5g",
  "key1": "4VtFknM3n8wthaMSGyjPYyLaS5SpxwNAEpB3MkEaj8HxLNGhhSt6uMnP3qVhv8n4BBhjsUfSgX2nPe3TuLXxYdVm",
  "key2": "4bKcuKbMvkeMtfRhwE2QSZYK8jVHZ5GbcTgWWa1ymzvVdhpgL7asPnRLuC2cMywaAgBu7n4bvo1YajWSnNbzu8Vq",
  "key3": "4tyQff8WW67HzxxPaqTA5M2BaQjcSTzNhZN4XvBh4mjJXJpNz13WoH2U1mWcT6zmBE8rLfMQJoprZcU3jxBSTZ5B",
  "key4": "2VdQFk33g2CCtSSZneCtySQDQeRcW6c6rnGEgDo3EKFrd9qvGWvWEvYncAL5ZcPCyXm1QmSnkrtze5pCwrFnyLSQ",
  "key5": "22s8kP5xJs8fcGA1CMmYoRELdySN8Tx1PL6apB8ZCkSoEgyyuEbdXgS4b3A9cHET6wf8kdEcZsaGXr4GS8aGL67k",
  "key6": "3DbeeMTGvcuBsJNm4vRrNicLB5mqmFJSvd7454kbHD4WNL1FCCJ7zZt195w4RDLxbcgkmFR7TbeQwauRo6osjVmz",
  "key7": "5325hEn4W3cGKGbFyEW86sajv8HSyAguFVsa4yCLkq49xq5wLLdrbv1PPUXutKnuPgZuECy4FmTyQxMP26mkUGxC",
  "key8": "5UuEmX8gVGJ8kCwDUPuBtG1vqzmk2WLJrMru9uPDcwhB8ibZThTySnoCpRwgRMETaZtvUmXJx5VzfvCbYL5P3faY",
  "key9": "3YALdgFcA37nUACNMs7B1WNVjCUF4QYPgD2oFdTez77Nwtv1tqD4BSFzC4GNinjERmB7QBzkaPLje9K7y3AwdVr",
  "key10": "S2oR44BH4uZ1oewZyMcdg8KGTUG6nzZ5fbrnkbPTjPeMyrpd1eaGJ5rgDcrtxKYHyKvUuQJBSvsnG5ZdxadDV2P",
  "key11": "54TGYL7BrQWGGwckK2PgHa5KAXc9qNFtMU9mKpYc4Y6pXpYu4BUYmhkWcZQJfeGkWgbacWmUjAKVe511fPjL6N8x",
  "key12": "2rYCB78WP1TucSEDae3FQAzN7DnkJCLCPvRbJBaUU4EPZVqZf8ieJSyPJhFyWzvBEcD4yCX12MNDFh5XRdi5m1CX",
  "key13": "66C4EpjaFrqYewBPbLXRTg3JmVLynDrTuwWtzvAw5rSyjXUu8XhaehG7MAGdyABvVTpfenBk4wjMAX647MuHdnpX",
  "key14": "5DfYGKFHAGs1T3ur6saAr3xYeCULxL72TbKAaoFW6poYwe3ie4Kox47ZKE56tNvg5krSsnTec4NvmVnGQECKBoqx",
  "key15": "L99zCucLiHSmUFvM44SqXzPsog1C4HZxWyioahoMDNzttnFVBbwZGpGzydvBzwenQp6uZ94FKQFNU9oePBz5n7r",
  "key16": "3AibtP4cKorC1dAPwms4QSHJQzv96kuigaczTKxxC9jBYzLeytXVUVYVVFFCHWJ8TK94GG2K8f4b96g1h8DM9Lak",
  "key17": "4wrKzsm1NkPgLggs1pK9kQH4UZu154g7N9NtL7quWkkozrBi9bj3fx4r7PeH8AuV7o5xGTUyHhz6RBpt4ntG68bU",
  "key18": "MPBwKKS22Y6rjoBmRZ2JWRXcsx5k9cHdjVMJqtJXjy2Q5aGusrzMKamfG6h1B3SbWVajhEh6FJzc73sbxMeh5Md",
  "key19": "2f26bwJLXXE9M2ZmaChk3wNmdDLohq1bHmubtce9TvktWXfHgrEdAF5znCNcRqvnSmmtrRb1eb6x3PYzkwaAvkbq",
  "key20": "E6PnSUbkEpYK4aDmAbztSTLuLkf6FXrA2S9Up5hsTfX4PprFhbAiChDgxdqCjv6AKojwjisWRuQLjdQtHx2988W",
  "key21": "2VQyCaAErp3Eq4cyJquz9gNsPUVYwWdzRHYV6HbL77uHMcKXHXtqcm2FNZRJ6RAHT44RV1CcJ6jfhjTWLLboh4gd",
  "key22": "2K8nsHDGfHtATJ5CRRxdtht4x8rGb32MRajXcdNminwP5T7EiKRngV6V1Rm3LWXarp1aezVrtPk8BpGiDcN6oeTC",
  "key23": "3jcanweVFVTL7HLCusZFviviRhLjooSkmfX3hm2gWD7j4xHN7adhbiGEEFjiECtZsYKwKtJQutEJBUY5qZrW2qLd",
  "key24": "BS4EXsasHnuuDjR1axJNpMiqzDPuoVr98mvUwaXxpf4oQedxhShu1c8kv8EDhMa65DUfbAqamUqWnyXw3WvKeJx",
  "key25": "4gJzXP7SWLMSHcuT9NcMpS7wfby5u4DehzjnsCopVZJ4bt938na4JvLciH3PZu3u8qn1L2LfjqXckybWqN3i6Sgb",
  "key26": "v93iMPppVUQ7wBX8qVfvGXUXKbRSVH2QyVBUoMph58m2Qrtq3mbSVtquTs4EaD8NGNy9deLUUYm6rS4ykZX7fGU",
  "key27": "YVBrYDSojme1ax8F7nbsZ5v7PBU1TwfMjsMzsKZW56tkkJqAnsVUHZ9T256onjdJm6ttHvmJvqKG5YudogTCTUn",
  "key28": "2f82uvt3kRozJt95Lg1FX12KNeefMTpxUuFNvT7nSKhTbwDF4pNDC45TRv5SA5s4QhHSzbZ18XiE8asWTk9Tz1JL",
  "key29": "BSDCVUB6RYxUcwnwqbohxtWkoR841zLeKpet1jDroV5Fv7iqnJC9x7W28FhPTrYEDPVFkBBNcmy3Sbqs8G3AEyy",
  "key30": "5AgzMs4cemSGicysPYPzdG2p2jWdE9t8GasYCkkyinjBcdjpv9jwWR6TGw8aR7crywJRpb5o7fznxL2gTNC8boLH",
  "key31": "3ozjMi8iyL2LzUCfGtLhVPtPzQf2wctSVWuYE7Sp7yUDrTABdJpTnJvyGLgxH98dkmoN2Si74vnR2jGFkGoziU6N"
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
