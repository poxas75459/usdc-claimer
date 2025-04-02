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
    "3pztjidb2JAZS84RffjQMetfwe9noY5YJ3Wk1KWYvVqetsN6ugdY36LSnEH5198Mjnh9tm9i4RBdUT8ejZ5JJzGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHX4SrRFRpKVfZasP3G1aZamnL8gg8HVEy5bZHa5NzHKCiqqMD5XJx2ZRq22xwdmtQ32fzfBbLck732EL8aN4fJ",
  "key1": "5vHVRZvtB66q7pQRFt1wBgd6esdk2n5xvPBbhAzziKv5im6PxPYxWR4FZufPwKpTGzR4LcMSij3X76BbiQWdp5FW",
  "key2": "4Qe7jVZN33ZzpGkkr5r6YdEwSyBNrVM7wgZ57CsW9gPXFqe7aJ9amD1TMCjdjk8scnWkuF629P5VsuEiZoMPFk2C",
  "key3": "4Gwrx5St1XAnJ3QhvtybxDZNuCWGf8uLvBbb6TYb76P1aAoc5Z6QKC6djngJcvtt9UvwrLMDYfxiVetJxPNQHMsC",
  "key4": "HeF2jTcRw3xu37weoEgRqQcV4hSrsq5rKLqcZLnhmKPFYUNLMrZgUVKaBSMvW6r467Zge7MbZK7dmstMh1i4zk6",
  "key5": "4oX3peXCswzDtarjagDXVj4uzGqX98TsRJsgY6LeaWCEiDexXdqaNY86nmuYnWyu1MAagbgS58veydJCeckQxnbc",
  "key6": "5Nd9zh39HhdWzGi3bdh7BJKiZq4mmyPrD9nryDrioidsfBAmGfhkeixw3c3ZkxAwXsgKix32R4JGSeWmsk1VonWE",
  "key7": "CKp4q9SXns2rAw18Aw5QwKbCe1XUVm1LSUbzUhuWapboXMJqREHzXdK3Ci3YXGYQS9qVnGREjGDKmpcWTKWf71w",
  "key8": "4CyF9bGkPMK9xqaxQMWjrg2AfbRUAa1Vy6Chj1soDdkhQPbRZmUnhgX8E65uPhBWj7gPxyHFxHqp9aNDEchAH6Y7",
  "key9": "2XiwzUBoHoivZoCB5X1f5M6A8U9jEEJAicVjeqRmgifH6NenwLspYtFquFNqu9p4SaZNMEkcfrc2yRgKu57YR5As",
  "key10": "51zpLEBuEtcURcS4qzabeDydG4RRFy9vosSbEQ2FKkiuHeqS9WiKbBK1NuFraXG2ZBvr9g9o1E1PxWBBj9vAPCji",
  "key11": "4WuMwVd4ztSGTQEmn4thuRaNcQvJHYaYqk5DnQQUPGd9FEcvUdUBJ87UgZGY53ebD3BZ7xT65tWtVmr3sXndLLdp",
  "key12": "4j4TMonesAA1PF7Ydouo2ieAYoLJ888UuhgCzcJk9SmQigwUdwXPhfEsz6v1BZNPSyu4kiJZ1rZ9jYqWstpZZ4uh",
  "key13": "21WSttZDoMuscPCnKuUV6oGGggRjfKEqPQn5dKWL6REy2ej53BYAZuvWK95WnUEwXp2JkTxzQcn6geR4o6qCZrR5",
  "key14": "5itpUokCT4rAZSMD99xRqRvx811zyVEoG1PVy7V9zUVxrNuNWr9Y7Zgd6DnR8gorcQwjibsVY1T7iEMYbqz1GcN3",
  "key15": "2DD98JoMsMo89b7ExuZrJsB7oHviDR28kwyX7N9fqqJ3WDyH79o9BV5RT6pMP9RZjs1wrVxF4BQWSMjKW8L6uNdm",
  "key16": "2DmpiJ3GTTvnERLRtwPi4k2WkHi7m41PPzQowCRPBccVNgfL5YwUaSzXAVkh8cbhagPwHbzuTTKdNmNRzk6hbWmS",
  "key17": "55KsG8VdafhHLTmPpW4zUCrkGwe4GNdobteFbUwJe8X8C1TQ9q6rVH5U28C1wcgFZFAy4BMLG3E41CSiNYjCk72P",
  "key18": "2rYRY7iXhJbv5jmKvA1ixjAgzeDA8tY28GwuMx6qfdgesuHevgzLVVEjMhD8RQYpb4PVCYx9GauNDE3bRwNCTbtW",
  "key19": "5uxGnoLQxSreSCuseXmiPL9unPihdyRREck5i6G6xSLQZEMjSMMcHHC8FuiSR2ZcdfrGrjhbtBG2rrkBuqsQE6ys",
  "key20": "oF9kCMTTQTBAwQczsGes6cQtXHiwQR7bvU9of2dBHD7jGLzprEmicpwfL2t3z56UAbGwhg1xG9qTW1TWbc6UhWB",
  "key21": "2N3UKpd3Soet7wVRMVWYK3hvfPEoWJQFpB1uuLHGbWnk5D4qPfasNTHkKSb8LhkhXy3Q1pqB2CvoHcE4uKWGE6Jw",
  "key22": "482ZUVZ3jN68RmFwd56cVeDDE8DrnSa6efZSWUtdQbbg9v8F3u5xM5Cb4CC3dVwxeHSKrULW2k1Sj1L3iSijAirX",
  "key23": "2iuvbN3eAuNHhQUVXze2C5V5QMozcvnRLV8Dm1t5P9NW8xuThhYyKt7xdAbYWsKbdHGe6QwhnC5sZNXVmvf6p1Nd",
  "key24": "26LKHUJurrWMjLTcKvF5PN9JazQamc4Bu4Q4768nZ9rzace8eNHCCbyyQiHMbkBzaq6gPSbq2Ub3AL8hbTyBLaC1",
  "key25": "3RQkmFKMhRKDQbDMjKrwFutE4BPciNaau9Jy8MjczdZiQvR9opi76xpZw5fNNfYjdmHaUbpq98aAz5GNHsntUW4K",
  "key26": "2aJDxZDyUzTxWiBjxzDTARVGNdtLT42YHETaBaMdB88iWAqmLvHeqM8d1TS2Sicimc8cVDP83zMarkBHGhcQU7U5",
  "key27": "sxZ8AFN9chT6bkZyCsXa91pmfubqQDiXPvwyeXSQ65rp4K8ntEmButx2cMP9vTdBMR8C9Awr5XHahqtHjMU9QxN",
  "key28": "5sXJDKt9d7cp8FKJ8R8uxcfsmRyExBG3jtRhMtes5xWBQyEHAodJTLMRZQ7njYim7gNKgp4b27kD84d68pWg7GuC"
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
