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
    "M6m4QE2q3hwWLu66KdmEZieKLDYKAVWdgc2kuvWG2aCGTCMQkoT9GTt1XUZKPfrQSHdZxMfyBvgpB1Us8DNpcyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Ch6zuX4XsK3ZMjJNXPVNZeM1SGJUbdaDfTpLuySTNiDyht2PwvRCr7zsL5noxY7f1tuReiPdoer2F9GuzYnRdW",
  "key1": "3MdRq8HLoS8MF3wGvQ9MiJ5xfCn9MTmMVnzJAzqdouev9sfN3G4KCUhmgiZc65ooAJUv8Yopps1LNZFZfqnfhUjN",
  "key2": "2eHhvPA51eS28eTbFLPGVJQsorJwLJxUtaFPNqgoD7kipQG2yqCgywKfynGahHkGtGBeLVktqufaPVUYmgSSaXBk",
  "key3": "2V6Nb8skKh6BFXHYnftKSYFUd6ZJZQTacXN7EXGHY5Mp3ZpbqHzZqiowKQ3CEjNJ19fEnZqub5dmfRXeuNsxXRhf",
  "key4": "4rirwQpdEhmsjEH6jCMeWqFafqBB8M4ybG1uTibkauLCE6smFYJm3jGZpdKDkHn3fcrX5hW2ecE7uLkGX3MrA6Y5",
  "key5": "5p4maphQwB3UAgE36ZWKLSYMAAnKsxxbeEHMdFCz5jh79zbn3F58eusaZ4nKnpEhien5kxUDQ4NB8Mgmfy35qufW",
  "key6": "3gqX23psVr84ZR9W4zZY4aQM2bvSsJNBWJba71HycMCZzX3qtJzFxJinCWQke5Vjod3442yhCRHdS9jtLpMwFAZp",
  "key7": "5CvM22nb7PD6K2vMmbTkeuuuvyxj6wJ15LyEPK8VJXSWo82BiDxGYYEAdWpN2poyXExsedcxWT1z3nCcAmSoposP",
  "key8": "44dk9fZHUVH35JtPVX1WcCmbXuTihGimdDM2YLWmMaaYvSGu87NBKqmeXqBWsLEPFVMtKQeEzDKiic3BDQqanGiw",
  "key9": "WJFWjkiSJWLrfM2oTCbkuSnjnYWU5qfMPTdFFngEwbRbkYb6rbnUas39kEcZNxxemeVLWvkM2iVpLsqQiSDcae8",
  "key10": "5NHyf6CkNpNQZaDgdo6chwMEbaDrE713LfLx5m7cPaMAN7YFMN83LDNEySsCGocFjsPRAzXqmEbei4CMQLV98zsP",
  "key11": "38nzBj9bfGsFN9qXTyCCUepWvu3RYdQxVoN355vrGcNiJaJV2RfhWsk2ZZknsbgKzfJdmyhLgf9wrorNgjtrPfus",
  "key12": "8ryoT8WP6mvH96Tviq91DZFbry4KjREonGQNAi8hYeR2qjwZw78D8kNBhJ4JodjM6Qmx2Wm6zfyZphFsDvwD4au",
  "key13": "4PsniB2UL3iSNGrZ5rFQwDhWZH7MXucFkUpR6YBf31QiagrszscKakBtkjf9HWFQxKaZsbRBdVQRbikffs1ZkAs7",
  "key14": "5NuMbE6dGWMgEpNxgvJGNo99gqbrEtKzJWaMojiYp5eGdJrEDwSMTcWq51GXXnviHcg2BpFkLFiZmETQKXfG7Qus",
  "key15": "4RDi5qqRj8JZZaHaXQf9dBcZ8oBp9mCZ4oSf5VqyozisucKLP3Z23fXJDc7U7iUCNnSeujVbSWj8qmBDPx8SeZkV",
  "key16": "45CrkNuVJm2giLRpt1G7Z9hm5NUDX8WtaCwNEqhDFpxpwAFWCbwqUVLJcZ5GiRh1Zxj2QwVYoENUnipFnta4WJdi",
  "key17": "58jo3QCJTSs3FuqLjsAECUSgohbe3wEnVkj15vbqZ17zqej1vRD7gVc1rbuvq3Z8QkrBWMFLdhbra6feghZWzLjG",
  "key18": "3xUYy3eqcsk6sHUirMtBkiXizVc2FxiKokz37yPczt5E4MTegHsu2RMiyMULwiazqYtm23vdjGyfS7vSQq8fBfV8",
  "key19": "4U9gFk2Px4xzvbR3qTf8VjwUuVuNsjcfrfJjcZhabuDUu8NoFyBMeXMevf2j9XGDD9Vk236NnUFgpRsDemK7hjKP",
  "key20": "4j4omVVrXUNTkaXrmkYqxakEgKrYnJsUeA8cNYm2L1BGGUoHwYmYXorhBgfzLWeTfwTHp53eqS7tTFkgiVT9oKPA",
  "key21": "4dh1NeFzhEiUabemL33bNFBsHWxseccn1sVnonQW2jrz6kLd7NJJcCqeAWD189ZGDc5BbmTUbXPF9vbzEU2pmSwc",
  "key22": "2Cz7L9G8SqknUxmdRjg5abjn1gLCSF8Rr7ypbqkbXhdaDKFJjt3t1YKxS3XCiRDEnXkCWY7ZaDnwGySk5DLSUJVz",
  "key23": "2v84sUb5Duf2BG56rvtrKmiA23wzGheg86J1981gp55tNe2zgJfjJZWJzotWRANqTG2XZqDzwqe7sBLSUgzjjBZW",
  "key24": "3HDg3xR9wPHajaHJv5NUozXhx6Zcow23SJ9mnxGYnakxrWZDKi6rLDw4mrLEjBeZ9NaUNvteCcKEth9VBLKxsSpH"
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
