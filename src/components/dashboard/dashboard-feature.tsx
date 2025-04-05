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
    "47Z8yzX76rKmDuFtqiY2TmRt3mDb8JkTwZFZSJR2LDMTJszYSDv9RSJBk5aqYYFBUxYiUgx8mRE2KvjGRCxt43Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJ1EBSf7o5CVogJGyT1d7sVuEyjsrK2X3QfFCRFzZ3hAax8XqCJ4CkpycpyAAM8fZVgrUGn8x1PEEsXcs4haB8u",
  "key1": "Kh7LJEPK8KPkQrQchK44LgTV8TYyYpfnmmMEsNgkzMQwGRjwV9SNswAfpnRbarUBDErLWmkSaw6d67tyzHFAjuJ",
  "key2": "4xEvuXVMpST1HHVNsYSgtUAiWHa8Gzqh9QLXeAKtNa7HC9aYG212Ujc3h4ycWvAJQrHUwAgEo4vXS2jXcBJ6Rt5h",
  "key3": "eyRr9Pex9HR5cCquUBN51CEvT8FevhcWtaTq69CuBGwTm7JSqQjam4r14t4oVwu9z9PPQ5UY6epM5XEdmzu4MLy",
  "key4": "62v8yeGw4A9ZABcAxqS5Kg3649vkH8VxU23BiqoKNiGJBz9HXBuDn212ibbULZam9e551i2S5qLiRKUsuf3cx9kD",
  "key5": "5oHVN1yRvxiWfzrvGB9QdK3iVgLBKNcYmU9nKcmQyUsLPNFT2zr9pHJST7WbokLUZcdVEHExPsrpeMAByUy5gxcA",
  "key6": "67H2sUn1wFQeYLsU2PYYQYU6iAhjbp39buP2LYPVfqxUPdCbCKVst1YJmrHzaPdo1XAgXeL2aaSrqhmeYQwaGQND",
  "key7": "cc1p9uwBepDzu1CzDNiqcNWTgEGEhTaH56ZCvwr1MguxU7SCYxfg3pPaiYT1U1eV74tWvy4yWeDXk4bw81haL7m",
  "key8": "pnrrw9Th28sEhhPTW4wZv7dB6e4KpLv1dTq6F966bYoMno8GzUA7DekEgcUtt9Cb1Qx9NF23goMc4czidtDENi9",
  "key9": "37FMDdYMwjPx3m8zcQecpVYRw86pZwCNfoRYvEe8fXLhNpHjk8ySvhMxx4FmNEfpYGnFYbN6w5AsKBMPdy29T9wb",
  "key10": "5r5vSZsWo8uut8Vh4JnDhLqiupbvQ8HtigGo1MZmX7xi1Nebf2Gxxg9P5TD5CT7wjKBoD4i6Ty8uX7G3tn1eG6WG",
  "key11": "M8C77ewMZFzw2n3BpZtEDcq6D1djwyuKz6NHenkKzdnzPZ8imNFZMqm328xBFqKcvE6gBxPLzga7u3W82uR6nD4",
  "key12": "5vnkZJ2V6Mca8ZRkE4HjgBMd2tfaSVJ9KZ3Drz5JeMDHGbzeeo1fwJVeYnMiDfUu9hThM4zhYjgGNmx4jhofygNA",
  "key13": "4XDhJKyfPYRrGuaPnkWR194KUHUUwQfokp1uxFH4XGnTGhJJP5QwNnqwXGjQE6W1X3XVvuZbh7ftKRKPcSsg97cP",
  "key14": "5ZMPPoLNebtNJqLuFfjRHpsEtDGLAvDeDqefmNzuaSqdhMzpGz73Qhz3QPtAMEuGwaPqthbDHAq1RKgXStkfbSez",
  "key15": "54WEUYXtxTsj7uCPAycKjJ3K1umLUzADdJNXVRuN3h5V2DV8U1rTCbtFCwUUT6bnDBigqkEJyrXMN2fTQSZouuJh",
  "key16": "3KbWRKJx1pEKdvkfdGq1cpGVcv1jiNuG8QhRHkeB9FDcKBFuvE5sdtSis2jYx7pUSyQY9kgReAUkkzN5hTvVX7F8",
  "key17": "2Cb7SjWAiVg6yogYEmb2iM8X7RWrF7WFeNCYTNHfRuvtEN7nZFeFagt3cNN8FtXaQs24rumvi38hYJMprwrwCs8R",
  "key18": "3H7giB9wDXFmhzAFint6FDXAJysxUxd6kXAcYXW8BaBPaPbJvSxVQCfrH3ScPGgNfxrN4W22nbwayDqt4ogNvPGK",
  "key19": "3LBUhM7MK1zv8w4Nkzg7Y3s9jjPgBjSe4XRfb3U9K5rThAiJJAJCjWZxAKprqqeXWBvLdoFN24EqhfbQkVpFsmVu",
  "key20": "JqGxCbjAz6fA2BPS4xGm1CAopMdXk1p5NqfwY3gdVJdVWHgfroQ91aoU4FBrxJVjujYCcWwD5B72j7eSg2EAz8P",
  "key21": "4XHB6CQE9KaM7U38kL5mukefCyobgWZxtpk6pD6drtsQozgoHCAsUsJ1cwbynJK3SXC2GviRtyDuFdByMgnoz4ad",
  "key22": "3uUioAL7CpwWqCgv7eULZ2JSo7TFG3RBoovaecKcPTKj5o7M2giTxMPUmUp2BPnBNDkuJkqkRFoaPFq744xwnWDi",
  "key23": "311s276bfPbTDAdx8RERnN8B192eMECAfMgWWcVsufQL4XmUPCBR9qJdAMribkfuzkRcaQNw63vU9eWYodX4W7W3",
  "key24": "3cqx3Ng9YngUPvG1QnxBfrR7P4pDnsDpM7Fi347v3trC4hpWrHqtzJqXtqriNYY33vqX8oGU2EbF9J2irGGTBjDL",
  "key25": "dfekBJRP5ZqW9zoBS1xdMe2o1PhL8tCiADvfrbT1Q6bP4R5esp2h8qnctAhpVga8tJdXK7cBCqBGURfwBGa7yNm",
  "key26": "gV5weCRPrHP8G8J8jMzzKUDxKieSWySzPD2j8xHtoJe1Y3S77AufBwMX4GkSYSDYvKLrNAvw22tqcCZCQfvm8dp",
  "key27": "32DjCCRjH3DTVbcGLcdcKowmjVLH8YhomokZUDo6ZorMZmkvfQy5vg3G76wCYYnhxdnWAJTmWM62ETVB7HTjDhER",
  "key28": "599YpachcLeAZSR8fTtLCnonnAP5nMZuEndnxir2yvV9vowEJAkVwRGNfhPAW2fe7f3kK8uRdMG7i8sNRLPNjPDd",
  "key29": "4iHxznUMnKFGGX2EYAFBH4HrvAtTtufRKhKRzczDcM2P2PDb1jXDbhNaEf1TMRphu3zWCZtWU6Jqixt8GUKfn36G",
  "key30": "4RQXL75N63xXWaz3BC1cfyR8WtnEpwvcFYq2sj7tZb5mwkLBdty9ubVjjrwvFp7ftf1d8qjjEHCKnfQxYkSwFh8r"
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
