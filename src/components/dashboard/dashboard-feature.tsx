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
    "32eZSrWvxYHDPHPqCavT3W7wbYFr82zetAqGZmWWvSLZVi4sFtAhpzZandWUccAsD6XuTuvWD1fGvphvZzLNfG2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3zcWsigFLgbJRbUJA42h8bGiNNWosrcZpcdkr7QmQ37v4bHJRSdaUeJ9poPnzHaixMDEf6jKV2KZGmFz4S2bXo",
  "key1": "48BhiJ8UWe3wAKH8vdr2c7RMddQXKRQ15LwSPdAuUXxQ6ZxmkDMvj8bGuTBZgrfkwM1vaViGEyNgocsVZVtk53y4",
  "key2": "4zfi3sgADU5q6YT9cTvSqywmnE2uZ7YwTAfr7g1qR7QM85JLpemCWi5GsFgQ5QK1JzPV8hfSfgFRQL3euhgE3kRT",
  "key3": "49w41ACMfQ7StWdAyg8UECJzZcGH2gFTNV2gzJbSzyiyxfzomaSCRATTUPCuyzR9KPGcW1NPPBkJePKj9uoZuhZ2",
  "key4": "2MUVs3krmbtCEnCnLWeq4Be6qVj6gtfTqKYxqQx81RKD1XJMJHqEaZhpZJmubPQ6BAmhZPqxQ1FkWyR5kbsx1hi1",
  "key5": "23uKqXN1jnhuKXe5wuuuY7SDhSFnTP2nRqQGGpHNJYKma1xyMhAgV9utvJDzYHpD4FHfi5NRxZDvDWwrAkZjaWBF",
  "key6": "3fQUKc5CduGAvhc4UfFTxjuTrXtZpB7kD1Rk4N6wHokpvBSrhacPVsDJRCY6V4pCefn5BtiYCQ8kbP2MqExBsrxb",
  "key7": "2qVDzb96cg7GJNxzntpvKWBgueoeH3yRJ3boTXmhwpMpiwNEXLmTzYHmyB6kkR7oQ6bg47zjQbTTBARsobKshPEX",
  "key8": "65n84YbrB9bQNk9EyugHqMsLYJVNeTh3mBfE8Pb1EJwvUj3xTfthQNCqyLLJwf2NSaWKwHiGWf2pSwXoCoTSaMwn",
  "key9": "4eJJsxccCzEDf3znK8fweT4ECxF3128MH8ytdn57YMeD5VitdJAr8MGH4JeZ9bpBteFRMJSDhyH7UL5jK8qS3wPy",
  "key10": "2CejzTZiWg1kRHoU25bFgaspaVHS56NU8EEXAohF3keWV3i9AcUtZCgpEsUVM5LEuLt2icHm3ePKASSKpRhnrnFE",
  "key11": "4zK8GPaZqATvwnX82qKr2HuDJxEKC4MHq2kdbixhwyfBMTMQjDELEJccPg5vkjmzdvuib5KupdefoiDHrWZ43Nx",
  "key12": "3GthoiQY2KiV4xLiUgKWggvgHN9iEGgp7xYKEiVj1XfZbKvdt64Ycp4oJ22rTnmqcrsYwRp3htnegPVdqSXiJkEH",
  "key13": "5WNsY6UNgYX5rBgDd1gtJjGkvi7yLiYMzbdqaAyJ5HYpJ7u4P1kK8Ehzf2Usm3Qn2TN1MPQnnoyeQQ68qrLSdksB",
  "key14": "h7faN1o5RjnKACDg2GfPid76NAoAeDmPPYr2oQZdzAHJhAmvNajYSAz6scGwgsRFeFCrGVKJpt23tvcnUZN41rY",
  "key15": "2T66FCCYqXn5EupEkd5rVYsdrmjHmsKbGxmzxQj4KqY6ybp4Wi7ammie1Ytdg11EcsujDpCJoaQtnLyWihUWopfr",
  "key16": "3HrFyACkLaX8GjX76UupWqYRQGxLmW9RAJNN9Ka8ZKQAsSJKPfuQfQ8RsidvuYgSqsZT5LD7ABSRr5ysqTjHM96W",
  "key17": "5dyqP7YoP7jz5jGsZ7tbuMiEA3Lb8f67zMG2hjhNbedaj7LS3St86xvGeLU4NCVbmaN8K3NBxwQTWmDrhxkHYSFZ",
  "key18": "3MXwJv67KETk9KAvjxjjmBtiscMKm9q8hCRMhwSSNMNZBfuZrXdgTRYGgAMSadEP1yMmtKkxj16FgbLNC3PQP3zM",
  "key19": "2JUBLBxiQbEgR3gZFQGnU9PsN2hU75ruHS88SJpELBEJCUYodjESGGxs1U9nMNU2BPSmNLucpGzdBB7zEyN4uiLy",
  "key20": "4PEvmTBAw1s1E73W8s9BanVixh6AHfzQ6hWNc1e9XDHc3siZfBr3LELknvUqwzx87PRDHGKb7BPTN2XYV7y8bci1",
  "key21": "53uvk5nNZy4zYJ4JvNLr7KbTAjyMe1HJa9WFy9PC9nKiv9MMnYJfvGCPQGuo7ViLEHuYXPiH6PN95YKdtUfur19Q",
  "key22": "2PAug964P4gZVBJHQWd6TC3wZDXpPKtJjKTPGFyYdp4t7HovbAm8GF3szz6SWrrWUth2FtePC2uQQFx2TWVArLu4",
  "key23": "3B79SeYHw2edySyPLggWBPqyiTjEa4sSo9KJcsm3pP1T2CmomQ3iY2MKopTyx4iX1TFZVzg7jxux2iN4gNpL3Anc",
  "key24": "2UkhR74FCTp7UvxG2kJPst2G3hsw6H1LwTVxn2qG4KRer8tDrhqCLzTocso98jdV8dW8R5Xsmru2qVzwXJjaPwkh",
  "key25": "4dcydxo8URK8mT7kwPMpqitdEZNdxJp7LAhBJ2urmdQoLeLTCEcUm8RZqdAse93pcR9LeKXfE21YFgeq4cDptUxv",
  "key26": "3dDynKAQdGfDwfNavT1jzR1aGqcedoTgmYAyY4zrXqikzDwFTbEbvwicNTez16kB9eQwJ824ainVPHzjzq78v3ZY",
  "key27": "6333sqtiqpjWV6jTMLktu8VFgzNpp2xbESg9BfkFoCzkzpN8N4nbMTpwGRWDM5Q6RvTZKNfJLt2SM4Bhfq75Yb7q",
  "key28": "3oNFKSBPZmU18m7YpGmg8NEe6bXg4JbRtVm7UeZ5mVT3AFw9hgUsv3wgNSSYhiKz9Ag5fxNCRoFXT4TJ6nwmYiK1",
  "key29": "gHPS651mRJR9ZV67mySFis7Ni5qanzeTsmcJwp1rrBWiNxREdYM1sCqWiq1yuFLXGd3WCLp77XEFAvNheyn8For",
  "key30": "476H56KmPssvXCFbfMVwgAYtAbnXDUor6bZJcZ87Cjci2aUztCLExq65weUi4vqvfhJ3gnMdcxPV8cXdTi1Jc5Em",
  "key31": "NpohwZLMSJ9UNnbGwDQdhxhrZCoidoeSgv8oVy1q2AkhgvKXWx89nX3Vxq5v413Ndjm4aCJ8ZWqMcLJx7FtTqHT",
  "key32": "4grtYu6s2iEtq5US82dQYBcH821hTquvLmhzrzp7F21cHv8q97nPi7xEqt44fpXsZsvW589GghCqVYhjvdwVoEpV",
  "key33": "5KXZZvBQ6zFCnX1EjToxA1n5Fxd49KbrNPQEDDykwdksmcN1ziGURXoLWsPg73v4JFt6xge2hZgubrjMvmryPz53",
  "key34": "2ERs6cSR2bKZtocf8JtgWAV3Q3bEFmGzvbJN2GcD6uzDu7NRWteXB16ZShZt8ZrJxrrtWebB1nvbpKkYauFNRSDc",
  "key35": "59YiE6AxNrJV7UaY8d488MVTwMu9LDygzPK8oNAfu7VrVpRM7R3dKiyMB7QG8sp1N9H6BzxKorBU8qCB9wbCeFp4",
  "key36": "5nUTPiANzpdSKSZjqFjTJSmuGg1VD4yJovSf8Y6AExx72sRXJ6RSDLmn7DhbZ836KwVkYdUvRAfmvtyMNfPhukeX",
  "key37": "2p4WqzUNzcHExqAsCs8VF3NqywMtn6XqcZZJd5ykJTBjuj1fF9BdcKqtcJbQcYmwXfk6Kr5N6yKcayDgtEY4TbJw",
  "key38": "4eomPs9DoEztyDbqT6MmQQJR4fHgLr19E2gCogHd1gWigcArGCn36XgVYVQdw7zzZNcpaSP5tbXysR4mPih7d7wv"
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
