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
    "3C7Cqkw2qxQq9aW8CweUjyzYhkxkE8iXXa4r1SZ8JcTQs2GawXXKsaYNoyvK1PfA3rRnRWp3J3CQ1X959aWXJcUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VNZkyh458TgKo6S1S4wmeGp6Hn7p5qic835TVCBfs9ja8Dn2RJGm5uR3DnAV1EdAASdGYHeUnXne3UWv4DnDXTg",
  "key1": "65FYdAy1fkzhr9cFNSP7yMnzB8GvSAqPBf4UD5iu8LoAwX39U4rmrrka4edYBXrXv4m17jtzcHQiXMGmiMaPxofs",
  "key2": "b8m2jKcA5gdbLTLdenR1bcRY1j6tfwvbcSvFhN2CeCkHPfDMRiK4VWC8366marEoAoiWxmLTLRg9FtwzgPKm4of",
  "key3": "4J1BdTzfZjP57LMemR2JQSWLSjcRF9dfh2QxomFHJ279b9i2mnsk17UgDWogwvSnD6WWwBzvskuyx4fJssHYJd5C",
  "key4": "2EJNnUU9gtVfep23SxuQM2Dk8wYipK9WJ11613RcrVwpBH6WNAoLC5ZmnMBLmzxRucGUCgiJTSsQo37piotAxyBS",
  "key5": "66EoERBhvKguriKnHYEMu6fiLTtnUUYQvxrETYXUtBTNQENzUxUqB3eYvG8hLKpF1GMuqaFEkGyhB3j8TnvHjiMc",
  "key6": "3ErPtrNntgx84ommNWy5D7CE5VbkpN1mXD1AEH99PUoU1H8w7HxeTToYrB1tyMofyyDLmLqKuvb2tJmij4oHnWkF",
  "key7": "5uQpyLr1V3LuELijDZiC1WPkBBBt5LpUPZWHohq7yVfVg1T8ZVsfSnzCMLW3uc7PYtRc9Pi2evKSY2N7u5R6yGjm",
  "key8": "35mS4D5h1NA5k8QH6waXXMQqvZWUHEDibdXjEiyfVq4swL14bHqxT6rVJ2L43AWuYwHq2wBjhWhh5BbyGpCu9Fn7",
  "key9": "kffrpUn9Unb5xuwYcWC1ErZHo7FjysNfUQMDrUDTajyUCUsgCmBoi45F8P1XpSB4SYn9uvgJ4poFntfdLgvitn3",
  "key10": "2vFHgK3UaEReCSnC4fYYMFPzSvRp7kWdy7XUzWVq4KR2LDs5URTepdv1THmn7C9x5TrZoynWw1NooCnMJTooibVy",
  "key11": "39d7idRNzmr6qhirD9cc9coZx2g4uWKLdGqBkZH6u5zMpuzg52gWYWZ56fqoRof2M1yFYyEuDJ99qx1T8odqepJp",
  "key12": "2azsM1Uzp5QVkKy3CiikKDaUmA8PpufpTYWH71KWp274pCVNkrTithgSJ6tF2rkuhHDKoenLd3SJ79kSnCdP2ixg",
  "key13": "5utScp58snT5YvYeZPg3JnxSCdEy9ugioFy6R7suinGPfdLSs8Sa74EhN7P18J7MdREYpM7XSowgeNN85M6bWSfm",
  "key14": "5Zw2SnZGsETDz1Z13LDrNRxq6k1wzxTZ6YXNanuS4UqFJgEgdWvKrSqWozXczf4qgnJF3VbGxLtrBAxNTWW4p84D",
  "key15": "4gkdt7Kqf46mP43dAahqdKWvdEKdYSdgDWew9GHLqdvET6cNo8yvNCmJi5c1p88F96Wueo8QcHnvyofYkiVnVkjY",
  "key16": "5h1Qub7g5mhgviCfMNKz4KjoH4GMXkwDt21kJMh2VvT4QiWyVUjikptgSdGxvWcZSzqX8rV5F7kPwJsrYuLKhWqt",
  "key17": "5V9PR8b7syTHatBK3tMgaSTfAntXXKpoYEMQrZD34F9AoMps4kfoo6mJh5dJ22NxoG6APC73gdDPzYUzjB7dq2vh",
  "key18": "3AVPaYtJB5i7bnPFWVJH8EBwS7L4158YT3W7mAFyiQL1fftcqyz72myz2QNRtG1tJieX447uxoB1kk41HVipvgsu",
  "key19": "2XLBGHFEFyNEwTkeVfCR88QvKnwdEwwAon2gki5kDv5AABv4iE9WQFNS41FskgYe6gcNFc7z4yVwstVicAyVebU2",
  "key20": "5RLHdsm4UtfG5eqFdcgUvTw8HAcpmAX1ZayUYSED1ryD2oZWafQ8PGz9ePMCaoWWcm8u8BUNBDsVrPHPgM4n7HUu",
  "key21": "4sdPfVNQMPujqV2hWMiBVn8oHumUjLX9mY1Z9iJfD6Lqhhj8VWSuEdaQBcR8qwnrvdvPHqLgi8miwM2qvp7GEKXQ",
  "key22": "21Y1YVpqWZe1m8YHaCo1imk7y3D8ggtMtnXjfKNwSd49gZkig6F8EzdoS4ChTgjRvzoWH7eWwvekDoqkL9tZbxDd",
  "key23": "3u4v29Jd1QXnxtSt8uthwmaBMjq7gCXa3gDW7NLri3Z4dK8CzbFjLU1hyAvWn7dz7QRFm7Z7dhaR7xhQwxMRwpM5",
  "key24": "5ruPW2bB9eWjc1PjFcmYyzRzaMC6AztbGpMttFrmexRsJddG6BX6UuXeDVynCfcxK1d68JtLfqoXPtQKZVStoGqp",
  "key25": "5BD2XGPJRQEKMwVQ62h6L8eoD6WKJSxPCaWvWofRmugRTFgW1EdsLeqLh6fSM8rajZPiZe2vQDCGN4ty2YvMukte",
  "key26": "3FiF7cDerwboUEYw3GmpCmnkLbbs6rbD1pw5tP7mCKrLJthriV5pEKdEyuNd3FA8szfAyawqLyxAjdL9DbDt6FXM",
  "key27": "4D6cfVNnxEtt8sfRY8Txj8KHDFYQbTGnQ7sZ3QkKwHF97hawJbjZZksXnjydo3KP8NFMjy98W2zjNdbskBairBvU"
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
