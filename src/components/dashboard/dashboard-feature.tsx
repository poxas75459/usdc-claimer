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
    "3SFSC9MbpXvg4UFdip5rncac9hTcRqbgfxrDDqPtGSXtcZ9Jc15zyprnBvPNxZcER6isyh2KsdZULJ5U5QPEWt37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7bLbnSdSocp8QBEJWk828xbxU7o5WQZRKwWenFnJzafvxSv3ZGqXQ3nuLEMumE5Rnq13BpV9ppkcKPZXH68oHh",
  "key1": "2XxVnipXLKLZ5mx1dyVCywMTYqjKVMjNB9FmEciXZrFeHVYq9GeRzZ1LfFz52NrzuFtwZQQcB5CkBM5A9dpsotEz",
  "key2": "DNEQRW1NEkvNU7vdKXVt1VnFjtZwvjV3GByJYf6wDZgtDopTKuiRfG8i9dtqvTWGY8fUPcNeCiygSt6M9Vm2XKg",
  "key3": "2EC3RcpYdNnZn9MnebF5Bvpi1u9sAYKCkbeDVbkwWd8QakMMgRpq91JzYuLJNPoPM6tEBxkuji46idhjoKfmHCe2",
  "key4": "67UF2khPpN5EX1fXfBGBEbyWbNV15VFgPSYjTmTAAckdHCTaqncwgeEtYrdK1mZBEKFxHjMaT8EmxYa17x2YjExY",
  "key5": "4a848cq8pVK39bmzJ6RM1nMXkmtLrMaocG8xmQknHQDoT3CEwE6eFaDsUdvpgphyRajdsgaP53Dmgch4Yy2phNvw",
  "key6": "Cbf6m3dDGV88N3uycM6dyXxMASmYkeeNBi47UjbK3QddRayoDCiQSdvpj15uT55p6dWDRJ2fcSMwgci8KuKFYrm",
  "key7": "3bCDNXfv3Vv4YybqQkdkCHa2EZ5MuSh7c6kDwC9NVaHH9w662p5JDL5dtAxqye5ozNhXkNGBURJNxa928QcA9vS9",
  "key8": "2X5zPcRrhwUaPYx7DHsZR5h33yqfE583VCPxY35cqawRmKTu3nUDc8GQ7GrSXEYufx8HzQzNUqTsUYLgH3WjV5Kt",
  "key9": "A2gRumQ38X5XsjR9hjeLUYwTWr1W9Y1hjbjfwhsPK32zPoHLKW7dqe6aRn6AWSY5kguPvVGsiTSnrXhPnGupA98",
  "key10": "4q9aSLRfUbFTTLrozVS66Lr7ySP1v2eLT3bzxbSP5KkZ5TDhP2Z7pZq8PdSvHTBNghe6bpmkzxDjua2LEKRXuk4d",
  "key11": "4Yi71rbLhkFjKMLsjsRAZ7Cfihgqrj3LQwUAWstxdyytVVni8Zt686eptm79v8zAbkAZAqYtuVU5kYceQzGh4B8U",
  "key12": "KA59hZ7PSpLRg5bdR3oFGRKwwUnYQVzzUrvdFaPJVxpVjdw1RJ3j34qc6cCy2hkKaWi9AscsfxeUyq8zMxR36Wy",
  "key13": "ft7yv2jvy1i1Dgh8p54JBr14mJYGJiXQiFx2J2rWM3LF68jWDQpsRT4ALPAirN9uaC8nxYdsw7gZsuAAc7rJcdy",
  "key14": "V8zcDoaKfS4n2HQ2y7QfPn2JuYry53R67PAVKzTv9qouU2oM3Qo7MdGKqLNJYWE3vN5jQqVPV2wj2rgTca69gMD",
  "key15": "5RFC4Ufph2Cgr51UMF7ZBMmSu4PrFsBaaxM2jWFqAEQ41fJVjTuqwSYtQa137dcRKTVoHLNSTzhJ8rm4oBLWwUUZ",
  "key16": "5ncsnNLAudriwZcZB7WihTEB42co8edWWxtQFx8ozxubsJ8CvL2Nt6P1WtW5MxMfNFYRET7PbQJD7r2d7NqkvJK2",
  "key17": "5m3fwtXC5KAQ74fKBCjSjNSq5GKYqKdHfe9kgW5sTMZmCxHWSwAyV7tcbHGkymdaUEe3WLHRtZ2BfxPLqvfRU3bJ",
  "key18": "2fkjP2uStWSCxSSocBbGG4Chih2oX3Dx1CebRwQNpcuWbA8pviDogHG4eLVnK1LihmUruTqmpKFiCqJWHpYxDTPz",
  "key19": "4cRpkfVkekRw14hSSe7NWMefVAGMX6c4WphfFJwbioFAZ4C2j5EZTp8CJHW989iNzrjg1bUWeRHmJhTmuV9s55SJ",
  "key20": "4LXNqT95TMTLUvvZ3onYjDVUwAuHGuqUVVMQqoKX2XDB4rUfTHW76QCDJHgZx4KSpvikaQGibdP7GeTn3XcF594n",
  "key21": "3ygQByepryhUb3PLfg5reiWzN6oj57C5zRnPkCYG8N5k5oURApTkWqBV3jPxMrp8mVnQ9h8sZ6xXxCycVwyHihPh",
  "key22": "ENDtVJqu1hvk5ijqt561okoA7NoUsYk6J3YQkJZccMPcoGNj9RMPPzzE51mcAF4V8qsuq4N7gedzBGreQo3SaXr",
  "key23": "5EH4LWqQHi5bTE8kKBZrGqerhaBkEqKpNns73WAb3WW6wh5NG1VoFENMLpjt5Zs295sxHXVgjetbK27p8XPjXGSG",
  "key24": "Pu4YYrmtkNNR1NpHz2tBmVU4qfh8ZYbKBohpVMQSFrdu8ZGcKVpavaVM5C23jvX8Wnx93QXTUB5BNCpXRRoXkuB",
  "key25": "22erVUjcBp9YrLE5swr9sjetbk9m7mp3FmHL7M4d7cfdvZiB4YuVU76cBgZiwwmDUWb9vLfbcbCQuvBbHtwctM2j",
  "key26": "3a58MUJt4bomZWnMKXanBpRANU9ecQs45RbLzvhB6amS3Q3fv44XaEjY9CcMjc9ZsJz69NEpmywvtfFv8cZsxZy9",
  "key27": "3JpXh7F6gCM8sbS7zHif5Soit2RiHoWQ7YfagoRnpRgCx81E6HteyG5oM9Xz4XMseaT51xEmQeq6JYYYy5MbQewf",
  "key28": "4ebHJMTgTr8sgrKSFjEVpjmZLFA4MHSJZhQgTySLWSfFfG4Zza9TqacAitc3upahSd9KwXxF76RAZQ2LnLqrtHTh",
  "key29": "31R4mK53qr7E4yj6HfkyPFdVdeQE3bi8tf3GcrNP3AhwKvs2n9L9QrFiGn7E4hiCHsmBSHzZtqbo3FhfLFdJ9TkT",
  "key30": "5E42QdBbFwJjzNPxsV9yMsDuwoMCgii8zBPjrewjgKDHQWZ1mk34w1PEqtRj9PVkdyj6UnhHdDr2mSdDLPoeJjK4",
  "key31": "3fQsX1xxy9rA3JNYRoUiU9N8oLUc2Pn4fRF4okeUmBPyLakdkTjnmUxdKNVCRem2GADvNofqha2NGFbiLYE3nRx8",
  "key32": "4RaTb4fUAn19Awfm2SGezqYfZECnf9441bLWx3a2uiokHwuUh4CzKXvsFZU3wNe9GuLdWEi5EuDq1nAFPCtMoCqv",
  "key33": "3QezvULUafQanPuC3PGRhtYn1DtckVXbc5Js78Wh2pgDHhNGaU26EsDih11rffCdLS6LNjnfZd3gYBdrBjPXGR9Y",
  "key34": "3EojVRG4gzoj9ULHzVNU79477R2rqxFmQe683Y76k17nGuqwV93ukjC6XPop7KnnaV4Pi6YQsPnB1bDkez8RT2ow",
  "key35": "3eA2nQZssGT7QUzphtBu5nrR8ohYQ9H3bqHucBJfjd8YPMMETsJECVoheSqfPZzMVtzeVGdH4vaUioNMFWVacRzo"
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
