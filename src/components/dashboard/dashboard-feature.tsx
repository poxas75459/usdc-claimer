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
    "3VuJNPkbJ4CcxpCAMKPMFWMoyqenzfFvhAb9RCQDaKkqQRT7cqyfyne52LGmyApy2cKt5eXq4KogYyErJp2iQrMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gy9eT9FNHHcvBPLVaahsjeLxjzP5QKdAcNBP98YYj73pwBf8R8uRk7R1cYp8iECRX1MmtDhhaWfUfSND6NaMTw6",
  "key1": "4vdJS8acG68nuSESArTLgErSCEQE4Cd4hnDkRsJ9oFeCVzLpNbxvwAwmqt2Cf3UU6qhRBwLtxVF48EL2V5b5cuyi",
  "key2": "5m3FpWL1xBJW2dyYXBE2qrjLRMscA6BDYaNY1GuVHrVQzRYiFcdTt37KcKUArP6epevKeHbMEPKQL7iX2sfXtEu4",
  "key3": "29uV7CQ5X3keCvP7ew9aLdKHz79LLBYgdsecERtRVCE1DBm23EG3Lc8jj4JvCJyKL1JTGL9nUGp9Jf9SHKqG6UAP",
  "key4": "jsjciKS4XrqVzBetiUXm7TzGw1iZtxtfrLKgRHQyEi54JqEYwgedtxzKZTemTkv54mk99fnb3cT9vzr2MecNeEV",
  "key5": "2edv6w5RTg3xXWefL5UdxEyZRAr5UDt2EFCPSJjjZcScUZXYvbDJ7zqDcJgttTpi54ACq52hJyocVXsyJery7Stg",
  "key6": "2sUCtZowcLrfaTgzjqmsEFuLUmz8iAAxAucAZmmLneJxUHMtXBqfugB8giXKfBePAgtWScxBwPK8p2eXawq5vBXK",
  "key7": "4YGYLVaAQASS5vfMyvYyGM4aCDRYhSuwyZxLSKpBownuyRpPBWcmfQ6nU1DiTAPkAxhqar98zamyM1fDhJwN5fdr",
  "key8": "3JNKCi87usARG5ZmCzpNj9dbWAcNktYGfPjDJH1h11kWgWjxtcbL2LTyN5cjfbiQZQNjL6o3v7iNES1nC7NRbQWH",
  "key9": "U94z7MVnuPFTnTHRESS3CKcAxsgBHrGBLAnyygryJrEJTstpAX78miyErg9HFBemHQc5hYri4r9DTM4aGUSDWYt",
  "key10": "U6pLeSMNinuHohien34q9bca9G4ARzhPDWhb7YUH6gkXmJ6TUey2cUug6VXDunL5ECFvjkGzRDBkrtJDPdaE5ax",
  "key11": "5RjQerGyrMJfvWCtNgieLJcTxE58ZVxxNtPNLBP3iPqTiWEkYrEdZjVe3LuMoDkFjZam4h8GQrsRJguaH9vbYKQq",
  "key12": "4nPtE7Ncp2hgdTxHo5ZMcBCDiiyV6NTBmHvTbWuoc2vYjX6qCM5vhvpfyzF5TKmkDNFGfCcUVCx2VdGGmux8wAsF",
  "key13": "2A3wGg28YADNjwjYi2TJQQPDmFkmu9Xae5Vor3Cv7fc3dHtgBNPWv3BQP4URNLFW7EV6TX96XT8RrnfhHdS4hftm",
  "key14": "4WjDqjT4JKGHvwKAV2daNEFf6EGFnumZ6Hwk61pbXymFbffKh2LTnjyUq6ePX18qKssVZHt3Ptd1vZW3uocZb1J5",
  "key15": "2YSE13mGweNGTR2zdmJf2xy6BGLWjabXorGai6z6tcmbYP25cePw7EbLrPmXuM6CZXXGMQ9LnJU54tAMGtxxwKEa",
  "key16": "4DznP3uP3AZ5ubp4ewZ5wzcwDJJP5oPTiwjXbJBJvb2sWrCBz6b8jvacu2JRZfStz8xhvNYho3euMyyBY77mYw8u",
  "key17": "3pwDqCVx23Vuvf7iTD9Z8dchSHsFfAHt4NRd4J6F2reER9Cfd6GshGmAwfFzfEqnFZU2qbQTdYhHbQGMzPr6DPoA",
  "key18": "bDAWhPMgDPuXK1cGsaiEdf4cJrLf9t2GV1R7mEVwi85fcShGx4MdETbQhQDrNkZYrNjE9iywhSB6qsq54jyKpTt",
  "key19": "3yEeXN3fjtmgERNPLaQVLKxbhUEoGVZDyS3rsiXjhssdCMca4eV62gQgWmgD1g8cyVffzRxqM7WLvuue5tVXbCrT",
  "key20": "5Y4RM6egvjyKni91xxSFS8ZJkLVSi8PenENSDmfpR4uBoiSaos7Pfuf9d8T2nsHfeSqWnjhSeefeveCVpD45cnfW",
  "key21": "252ejcHDJ8dUZu46HHhJ4v8yR9cxJD1XmkjNu8FquQVR2wEiXgYsZLr9SALmjpdUYA61aK22XKBodWHC9DPo7Rgr",
  "key22": "2mHxWbwBNVv66x9Xk4gprYiGuJDv7zLhMcrVPJbi1uBi6icQBnK6RmMhR3aVvMibLA5bAbGPeMee7tnPvR5DoXzG",
  "key23": "3ce4KEe9nXceJbHQTKx92XHFE1y1C6cVrRERs2e8zvKhXKBLKHFagYv4J99KUbRpQsAzSzRpYpaoy5JNSw3LW7RT",
  "key24": "25zppNBLHUYZiAfmXysfG7XwZ8MVoiNhwzcMJHvLWUsBd8jG1e4YN8ZgVx33WqbKgTcJ1sQSDPYZQhJojdwnidAn",
  "key25": "5B1woUn155USbo5jHVcB2qFFcAeuu9crT13t9XqoVQqo1CTKkwX7B25FT8HsWqqGV26u7t22Sa4ukgEGrw9eeYJm",
  "key26": "2tzakQbPXE533CSwBAC49ied5C6BwXqVYu2RFKXj3majMkW4KMYwe8JucmXsWDrisGH1G1xedtQNFNpv1obEeHJT",
  "key27": "4WaUJyxVW9SzpnRKMpQADS8qfVBocNpegRqEdpgUmBwX3MtK4VFm28TxbFciZWbNuFbKPxwigv3oeBFqikJcproV",
  "key28": "4sJ13xQ1uGFEcWvYurUvJz33q9C4SzquLKNEXScrmRNbaojf85v373sELskur3WR81F8UQFBvXJoyDyjCdJeEybn",
  "key29": "45NcrbGtujgnfHGvMZE1xDNR82dVh7iVjfEE6odiszRz2mYrKNk5864nY2Zpie4GyGbYfbGTfQcTr2ZzjWPCkWiP"
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
