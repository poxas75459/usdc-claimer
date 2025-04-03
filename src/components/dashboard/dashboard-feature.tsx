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
    "3LRGZpds5yCjukEqxgXXeu1KhK6Z2n18vGnaETDW2e31FA9bPp1tmZBCBL3t1WkXucsw7XwbzJrG8bDSH3mnBuUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AaL5EEfvxUrRwo5wzRMoQFomSd3h7dKXegTwSSEzKToiTxKL75QH7zMpcnveYBUWb6erFHUScgy5HMXx9WWqEVc",
  "key1": "39j8NNA6bxFT29zswGuQzMKKugJ6Kq7Qc4PBd2gAhvnTR5C9jCZNc6cLncsV8V4umyKSpFKDTHYsU4B5GqxQ5fYh",
  "key2": "XRkZk1PpYhWZNoQWmYLURBCqgDgP5keCH3JJ3WwC4wX46wjAUdsfJTWYKyLxz1crX48NJemQDKpsQhk48fzDSQQ",
  "key3": "4kgb7iyfYGPHK7jAJrQ5cHQyQ1xUVjJQ8L5mkT9G7k18fhTJ1jmofzjEZxHqUwEA8YFAH7R6cLMcPu2b6dK9gSJx",
  "key4": "3diTv86XL6VARXtn6MaXERQc3fsfe8zYVhFiqp97d2DD2E75kK7QQ3Em8zHaSvc49w59RtDg9PocE8H1BFB6eYCK",
  "key5": "3uCWndQXMRMge8CiTnfZhc1k6PLciZvtDKEJV3cCYqKw7YqRJ1gYcDMEa1zrv9ABndRx2x6MFVSwUATcMJXF3xxB",
  "key6": "3E4rS29GpWttoirhqH5PGjru5Ei7ni8KiJgikiShoUE6x9nXvZrJ5DuuHoHcf4NSTrZsmjkukNQrRrvKv1gQUSsS",
  "key7": "QgPGQRZFTwsmLxmbDkGaVvXjDXxzWFXRTNCVU5k3y6KHJWiyHFZ2Ycsw68Az339XM2kzm4uZ6Aw5HVPNwdob9hU",
  "key8": "3WDP3usP9JopriL4yrapj6HBZ6rM9uJUBk4ziY1RACY1ZEMMyXYn8mqFUhSnUoMsYCAXnBfGTJt6Nv7oHrJPMm18",
  "key9": "cTFFzLAnT1kMANsEQWZg387y6g97Zn1gw9trB3bfiraKHqS4H7HwiDqeaBQ8MtEfhyCnSfo6NGzHAP4qtMt6bU9",
  "key10": "3oDi6M7uGUFUUHdvCEDyAuwtj3FU6nfx1CABwzr3g3CPpQXiwoQ53veBgJS6Fd4T6W2Z4gbg7VquDK7y96Vy1QCF",
  "key11": "2dNSFxMerwZFvEdvAKg8imv6RCdxnGsAVKVxsoJKpaeCMAdC54eqHJJiS7MgieFCn6tjb467GiXPG6S4HecDs74d",
  "key12": "2TYJSKzJDj1fqDaNn4RPddFc9VyKqAjeSoUHoBzR1PCz2y7C8kbn9wAXrMgK9qdFGG2nxztXACVa4pSk9QAaUSfz",
  "key13": "4GjBMm2SfM54DZTv1mvtRADqDwssPPRpEenv5f9cbrWFruXi46ReKSbw7pXbRn8eZjf2KpvqPmswdeADfsaJWcVz",
  "key14": "52n18EYpScyQvN4JPLkZ3YpWE2cDVoZpa6fY5pSU2vgUV9CfG3Z4DxEGkNT8ywBi6jpLorfXqeYEXtrGV3Mt6gdk",
  "key15": "4EwTsyfDsDqkamQMCDtH9WxuhZHw8CoLZw3xjQwwwLCouXe92eg2JyLf5CyQN81wpxNPbjP6FMkhDU5KJB2yoizN",
  "key16": "4WWmdVWBKX7zvA1LemHEkirQLiyZ9nsLiCDjmzD5KJtCrfKBbCdhKKiZ2AA2mygdo31T3AQMehwgitJLWEudsonY",
  "key17": "sPZzzNzirtrMfdpcdTnJ2sDKp6SKYnnr2tzj2ojuivKpFgHcPHKywp58wWy9gxHsTxsjM9G9s1V4obvA8ZqZAJd",
  "key18": "368zfo8tVy8CpSseawkHJUeJ4Yvow2muzYMxbq3ZxZyHo5uMUxqXQmh3tgPPCWGPfmCsdUJf9yokbehfVtWdn8cK",
  "key19": "4XvkBBvvPaSrbVX1yXeVBf4g8aHWfLJKNMpxcHF8C5RmZeH9nxDKCdGkWSqeRPo5U4K19WrR7BPGE2D2SLVR6mvu",
  "key20": "4L1rtWyj55YcABLX8pqAEjf8GrKzJ6W5JE4qbv4vAAaxLsaGLJ5xoeaB85JijuBMWSwmLDNXE2kTEkeT4wMn1kk7",
  "key21": "4CQsp6knjFWDGJ9tbt5GhPCRRzQZCC9i3iwKw7QNnF4V3BDi3rzkNEPXEiZ3g7oap13i4c8XUafUctXmSsxsFyQE",
  "key22": "v8H5FeQnhQ6QzyZYzyD1ZRtMNmBdaG9q2r9z2iwEx52f1ibaQWeDFHPVUijALhiCQdZZU8Bncxe9d8N79wsREGL",
  "key23": "5YYQHLLRQxruQH9FNMgSAEtuiPY7QMuQ1Gm2JhZjr7ejYzoaLjVXM2kazppv3xSF9iKneb7cWTV67Hx8ytAwBNq6",
  "key24": "5f9E1r3ovQD3D1iXvpjX85bnWnhycErpSBJakwJTdANu3914NbRa4ftaRjnqZVJMr6s6Xnn5GDK3eCopMsaLXUv5",
  "key25": "39Lok3aJiBw8bi8D1M8skRxT7dQKKTwsRKb9oxmtMRcaq7WdTsBN71H6kBggeKiZwdtMh3tSbVATV7yfy6yJiAJp",
  "key26": "62cDcvEsgHKQJh21sNeWVTs5FLNtJf4Sv8HnkpsfQURU6Ttueud8x1BBTUoBCvf8H3KtghP95GDkFJqpUzXD1QMd",
  "key27": "5sKzeNWhYWdQbeEEmqu4yDpPws5sQoG4WCpDEmX5CYeFPFbLhuz94G6sC2WYYBuaoJSnfHL7joBwBmFJNVcfP2ip",
  "key28": "5UXHYT68MBixf26fyHiebugFtjoRrxBMNE85fyZ9MABM45Ehz2Z9BvXcgP1gpWou3n2ed5EduHH37W7hy1rCSCWW",
  "key29": "WASgzAhCjVJFvetRaWcfTBoCv6pgtedxHL9VTCsZxPtPro1dVkyHsGtV8b9t2r9BQuA6Mu2YdAf473V3VxQCnY4",
  "key30": "37ZNpEuUacgAmXLhhWNvXDfHn82QDQhJWUFMyurVXo3yy9zJq1K3pww9Et2pWCcDppH5v7xGZsQpu39EKgWbsLK1",
  "key31": "2W67PiMDzPxkCigLngYpRJwMzb8KyuKvaUNcJvF71v4DLsRcXmw9EMqYjspva8x7UhTwuN9bnG8UEPG6oZK5qQFY",
  "key32": "5gTfiuY1yibqTPrEdE9Cq9zBGBU2bHdKgsrH1JHmg6qTj2fEag6AyhrTGaYqKuqF7qM1msXoNL8GbKMAA1MzFzih",
  "key33": "4MdpAAM7jLn8Wa9PHzp5a6T7AxVgeS1KNe38tsBQq1mv9D5CjiuD6BHQmocengUw3PJrZcvNzz4Fh1rmpCrgQoJw",
  "key34": "2owjv6b5RLuALSNyTUWN6MevYj2mByaVpHZV11KQ4E11veE2cSjpkHVNWuMurFAUZdAbD58kUsnwVTfstRV8ND58",
  "key35": "5vWa4B5p1HoRWHPRYVmF22TBHmYen7YAvVwY71LVrCESPZSLrdnca4oS2z4qyCAkct4Jf3QH9kbiyu6A9JmzB2FY",
  "key36": "39oWUdmMwrPvtXAw6jwqMwf1HSLZULC6DMnYnLv8dfxuYdLiidtg44ztcuadJ8VMwcyia9jes12ckvsMKC4fduTg"
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
