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
    "2Ms1Z4ECrZGyFZoY3bFhxRqU7ZBEW9NrMGFTxJHgdsXJSRGDQ6qqvRr7Z1A17rCXNcaevpdjNngXQB72UuW6sic7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BazLcxKu8En6JCb2bCGBYH5PWeBP55qh5Uyyz7RPxibhsacN6yN3K7uhttDsDTo6vprxqpiPCVb8cTyQV2CS3E4",
  "key1": "iV1z6tq8yCmMwRTiyy5ZnD6SHBrBrqwh2cng14LcTqa5EuuHUKZ8PyEgpzfgBGX97AND16KzmBGPCqsT2yezgey",
  "key2": "3SzBQ5d5jFo6CFZJZJMtugwgfW68f32QzWCVv8s8bUjEDb8ZtzEKiF9e4vn6bWUBNA31jUUWrEnAyu5XVbKPUa57",
  "key3": "qDV3eQLSFGdZ6VpUL9NN4ZvCkykJnJA5KX4vcBfBVEFhgZ2VNq6GDtaFsWZ32uFJr5ybztqDfuGz9gAdVnujTdV",
  "key4": "5sTttz9bo6j6NgFKFkD532KnsAYNH6Sdwf4xrB6jP7py2cqkpSuQTj6mxW3oBrwcE5Tmi4vRPxVFbjX8NJmTZS3r",
  "key5": "2uUhkRmUBPRpNQbqZGcfAodPoGLjfS47zgpCzqoFUw5hAdasGRpoeJrXxsnSGCde3ahJseZ6AgAQFny8QU1J4bA1",
  "key6": "2PfBeTdGsfxYmzZQG8KAQVKJMbP3BNV7wsqwhE8R7Rvrib7WgCTs8Kmy8Uc1ik3ehu3EkUNSB9LMeKQJeADwRC2E",
  "key7": "4RibJzY1Kh8KFSvDLERV7y6vYiEvor6J2s4LnaiQP3fBpJvxTEP5VjYHFHayPQV5HPTBKUKAcGH73cvuYPPUv7fY",
  "key8": "4BomB5eoBVaJ3pWLSyBb75Di5G6TiaqdR5NLrJaKjFfVwagQTCEC5u6j6hD1fFUrDHqbNYegkmAMWnpraZnXen65",
  "key9": "3cEpersadVPjWUSSHg7ssFX6arsHmJRsvi9EQ9qpB5jpMcoBXu2UD1jx7T4sKbsMFuQ3Wv6hgEY8zVv2qN5Va61g",
  "key10": "4oXDS6u8ahhwdGoj3F9jF7GS5wsxwciReoAbmqja4PbA4DbfvkZv6xU3knJ3SqdZoGcceEc2XXajmEm1ZmUoGaLD",
  "key11": "5ejd59HWACWm91YLzpe2L5uyW5159bLFhop1GkE73Vh3sbgsTBuHdRyFHyFZzJp1kayGZwEf2umkNLVpdtNRjaRZ",
  "key12": "4xePzzT1hq5EX2pTunDczP6EBaqpy13dSoNwZk2h9gtuSxz4UCpiJJYU8RmYjSvr81KLs5WdtMRqfPtNz1AWvnFB",
  "key13": "F74sS2dy8hFcYuoYRhPDqtG98dfVjztS5y9noecjRfVXpC5su2M7qybeVMnpv33iZXRTci9X31DiywqfDVpnPHA",
  "key14": "2MrurUAC3mU21mYW5CPHJLqEAgxTX9HFXbqe4MKhKEaEPwMSnkSPqvtcwQiGWY4wAhg9Wj1TnXEDVpyDrHKovJqs",
  "key15": "5CjyRaHbfcDkTYRcoE4PQQChYmrKPL2REwG1rvrz4PdRcdgHq65fc5kcqbLQpypttFdZ2eN1kZUBaDaVCtnsAEnZ",
  "key16": "2Uib9dTmmY8KNncqQwmzANNfbNy4VoAKSwEvTKkPFXteRfPMQ2Hf6oTzZry3EPSgE1yJ3CjR9JLntK7H3eRi6hQC",
  "key17": "4p8fr85s41qGALph7pJHW1vUFJDP9BB7NUWKMq5ENU6aD1YYM3NYWqzyNqGNnv4sJaqfqgfTxv535ZMsJ8XKNGs1",
  "key18": "AkpYshiP3jBuNH9Hjj7QVvd4jwM9rB4zGhpyQfKJRAAF8Jo2x4NiLsam6fsFacK6AXfvHQczVmPv5C4vnHtjr2v",
  "key19": "4NpYNz77kUb8247NL4XQHfRSEy4mMjQpoXe5zqZ7J5eTixJMGMifexa6TCA6ruLwiL2i7htQLVRJqyspyGrsLuES",
  "key20": "5h2MGZCrKwww5vvFbE2MBwJmNuCHNNjXokQDoRHeqSbKBo9f73rRrQhh8tggJTpmbaoqzuFVH3pRDBJmNankuZUD",
  "key21": "64rrWdULjD61i7aAasmT75vstqENiijUkovfYn7kLB56XCzgLZBnmZeQhLwgFgvd3Lb1j8VyTByRwzB5Ge5axCVn",
  "key22": "hCFdozEuoxBE7q9GF8xEGWyBju9za8nEFhbWNJBk9RTgEQDi2Lx2WSR4a1iyPyWh4brEDRPLyXoVwYQJDaLdMfm",
  "key23": "tbxZD6SooXbk1Zm4APF42fa8UeS2TW5AcQymARnbSUYsNjwDmJbfydoHni7D2V9ibyx2FrjrFiob7TZheMuyidB",
  "key24": "1DDU8GXZTuBrwAfKwiG3DTgPs3q59swdHXDQTXckXyGcazgxmebUqKiHCh5BdRcCqhfjtjexNe8ZPUTAUXJyJrn",
  "key25": "3aez2ykEJHDu71kVzJ5Y7LPr6PhfdHmxkj5BHDnNHPMscACD5ZBdgVe7qg9ZdB6LSoKjgYBfc5WgVz7nnYdwFpjt",
  "key26": "2zuANXovEvfsfZjAGbMRmoeR6J9DMapH7d9oJdCFL7ntEZXdm8DEGyMHpFQNUCXDxB2V4LB3YTWUP49UX5dKKn2a",
  "key27": "21gLkJU56bsX32sNCS4oiJhMMcZNnACufLWKMxe6f8jCygjcU1G7hNvddzJn6n7BcBEd6fdZnpxsEp81EPEzTTmP",
  "key28": "4BySEkwjDdHC4UPJjvJGD2GeKhHJQ9aPV4KDB2yTN1fDKANjjqYpNn9y2F4oUXnCXNK5uhrnxQJtyY7xMDApvJnb",
  "key29": "5sdvrhPgx5et3iY69oA9Dcwabe6Dz3zstAsw1zHkajCqk75kp4s1PQL9woXwBn2xy9ZuU6cuxpRvGaKkVM83mJjs",
  "key30": "54Yaai3K76u6DNppGBFUnNKHEziJGHQt3Nc1nxTL7yeV95HYDjJFH87Vkvnb5dvdFzPmyH78QaXYCF8YzRMuEqde",
  "key31": "5WCFNztDPTKjGa82D9GK1fqVNzdDLJG6pGRFgk4EKt1njZBx5GY78SCgejNVWEWtgx1pj2pzuEuHwscXiN3ZWK9K",
  "key32": "4gttSG8dJZoQB1DVCf1TdpvhAcEYFwzeSXvx6QE5oQRATyv159QL8fcPPHhDJNHrGaazSpqbsuQkQPJSN7rUrnxN",
  "key33": "3buVFZgXrAuE862Va2mLHYogEJ3nUqsw8fiTmj2G8eE72P6ag36DCmgMJjWciKwcvtjgUkcGLAV5sMc35uxrM4NR",
  "key34": "DVtzLQipo79vzVUYuw9pv3wHDjmWtrheVVxqh99wNdqq1Yy4GmECaVPF9r1VErWDiTC7exMLpBHZtXa4FxGcmbx",
  "key35": "4zqCgxW4WnGqYGZiUAkCk1AbsobWByiH5uRFHCD8kgn1Z7P3E6WPg11L33RChZcRFMo7UzbcK8CLCTfGbgGq3r9q",
  "key36": "3JoU9EiGHTJ26GwNrkLe1GBMgNu6iyjcWLpoxPJnb1j5Ke934ag2UqVHFusaiEPFeHDordXUQJUggyYNw46ixYkC",
  "key37": "2fvV2aAccVu1nRGv6VxQsvcAfyACpsB1MphpQ17YDrsMeqpXd6on4EdixUwCjUpY8ZN2i9XvWRsAmZYm245revBb",
  "key38": "ziczke7M7hoXowQLnaAmnKD6FfHWn5TixG7aen3mg2gXjCFZJz26Gf4jzaRxy8i54pWDJtfjEHb31JoYSh1Fh5a",
  "key39": "5D2YCvQBYtPi42mao3DSQcq14VEgEhnb6K8pj68xhw5S4qbciQ9bTfswciRXCKKFEPa2KawWPaWLaE2uRhHU3RPr",
  "key40": "9eA9HFQ17gXP1UFWAjYScdCToX9WiJQWJMw9iV17aHZqDraGoWrv4FibBevRohVCBtrtF8PZFfJ256jS3ckQNSS",
  "key41": "k3azWQdQRiLGRY3WxPumTnbywgJqPQf4dLQbHXRmH6NBXqaK7vY7SYDCYsDnGPBP5K1Z9nWLda954WwmBK7gSfZ",
  "key42": "5fNNpBLBiJSuscV8SLAwSv9QKJ8TmMkXfraYtdtbDPX8Cyi5731kuqqtmwcZjZ8t5dfhKDgP8qnaA6GFEA5Q3aqA"
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
