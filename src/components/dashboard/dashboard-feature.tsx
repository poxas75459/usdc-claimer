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
    "2neKZ5mbfW3Q6aNz5PxaYe6o6UmvfGsAsWXnB2GJbeqYSbEkBjmLz8UwKVyBo9SiwHXgbZrqr6V4Jf1GanKSEMmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijpRc3jWgvLkCjV9NSwUYQAyqZEeAr3eAb7ZNWQYyyg53SLdbVjnTQRtKhPLDEEH3BULFwBHvvtRRJF2bNQwuSa",
  "key1": "2MXFje2WrYiCHT4noD1gLtZRKKgTLpEy1Ay7btQLM8RBpGVLmUcYAhn7Feuaa4eoPHjFRDvrDGxrC72aKvnE8bYz",
  "key2": "5KjB6EUi2vVGAwKYXdFDYveFYaGdGckX5SyWAGs2vbXaC5d4fcXW6VE8sWf3EKoTLkM2hm1qX7j3dTmhXgMyDQbA",
  "key3": "2ynBwqUw4F6JuTDxyN4XwdN5M4F87C6A8oGPH6pVzC7To8dntwUD4VHQS5tPhcJ3iqwbTxzy4k1A7sUYu3UKxhA9",
  "key4": "48tFaYiZjTU4iLoFX9K8Tw6oxCmPA3G8FGD82srvuoAYEVEfEkCfDRpSF1L75CBdhUxvwtNieM3rdPDSzBeaoyfm",
  "key5": "4BjwtwSrSWHj8mYsEfg7fwxekFkswBt9fH9rp5tbC7KGZUAo3L4fL8gfeAMgBrG7vhZ8915QkvGkz2YRrSRxktx1",
  "key6": "35dSxj1YGGfkrCjiaTZEpa3pEzVKxxSNtqfjx1Vb5rT2SvFZZ9LArLrBnQN3LWmGqHAzRMtZ5MSDCdyKJV7TJBPP",
  "key7": "5fYEZ518CWChpgTfuiorNxe67EZY8GHCfsdULURKARzD7uVTzy73X6sDx2Ja12nEtuKRwLDHmZQxbfRUdvsiAWwB",
  "key8": "Z4Lr6AdeeUboCCuQDmMFhk5xK9whEuj526BeDiUYZCLxosaA2MqBUgtDiJPutygvHqrKrkRL1fwwy8u1ViLmx6r",
  "key9": "5PvhstwURtCEApLsETKa2jvtT4YEppitrWLvt8WoyreXTHseaZGPFzXhEgQjSZWQAbv3Xvjj8YVeEZvkyUT1M3xg",
  "key10": "58gVL7t3iZ194uUbHzNyXXJvhEsV9q7MaHHEYKAvPX27ooXHisSSDuLbGvSgU8FsdZSNHcBNeWKp3ZQsUvyiqoM8",
  "key11": "51Es9eSvkPNV2tSTFp7btr7UyjC1iaDYWRKiHyArgnQggjqmsJeh3vjgg5L2KZXcUTEo3BDux7heS7fqe6HW1zb6",
  "key12": "gxP7DKgztFo62pN4MXdCxDzYSy4WvEhMGf8N2uzUevGb1KKDGfWMaCUhGrNFFihob1fjZKnLhAtTF4QKXrUxLEi",
  "key13": "37effXFjDkZLK3UhmsrDtuGxJhsr9SFbW2qSLL6GRrxb5XjvbnLUgf9j2Yi6s5Cwtsj71cREubsgeZVA2eUJYEtp",
  "key14": "3ApUn2isJVWqKHBwuLngDtqzkA5wzCPyzPqsGssDrUeHez3qkau7BpbRXzhyi8PL9CeANFqd7bs11cfgecwt6vWe",
  "key15": "36Sfe5gyzAkWBtT6cegoQirpzaLJzhMGwSsitwFcsdFb3sUSivfFpcsrzcoVMjWLf3gs5YikGmNi3uyFYpYNx5QN",
  "key16": "3aHyymX2HccSWsLYVSRcGixbnufoa4d4pFAjsunMuKgQFAG8tEZoZ3mZeyTARcMxT2p8wLvEGTGY21tJLfmCXxuk",
  "key17": "5Q8CcdPbdesSJk7Nro8o4x2vq72HuJKPppduynmM8ptCFBU7ExJPDRUvp3n4j1zUR6EbEQZ8GoSm5uG8arpV1qCa",
  "key18": "32LPgfsPaTEL7gWqzCYQJ2cgVyh75zJbktC5eYTXJ2UhjmrfGj2CR9DkUn1dRyhR7qK6Pdd5gpsBuHxDSYqgP6JB",
  "key19": "zGm2yUAMBze1YbkgbrCtLWrGqpp3WciSVP8ECs7WKKwNv1zECFLrGfNKQDtsXazhVVtwxQ7xTWPGGJpcMLTTLVq",
  "key20": "2GKz7TTL3XasHW62DXpgFRS5LT3m4nHhYrrLzKHhnvpXakPExMnAH881tNcurvWx8J7mzMKxZr9zpbsiWqwTnsiE",
  "key21": "5qe7V3se5xHLRaykUuYMaAJdwT5boVVuEkQU3d8EiyPgWVY4ETxQG3uQHbUt3iK9Dmd8qbN66E5NpHVti1kwzW5B",
  "key22": "2YYADXFztKarAx78Dh7QhT7BowxqbmffRnAkfA6NmcMQkMKf6pduxw7dkcq4FAJ3h7WJxHuuCP4HpR9xKUKXQbgZ",
  "key23": "1q5MbUxMBdQajch8rBxsfm6jnSLevULTQoFDQqyMs2VycrgMzNMUrbCpZmMXTo4hmrYjjoJ2n6XUGnmsa83zaZU",
  "key24": "2aRtj6w8KEkx2wvyGxnbHM5sej8ziQNDTGistM7gfqZreXSqCeENEJAdngnmx6ZyHNtvcf3faViDH6kg9HXequmu",
  "key25": "2bGvR7fL1BHw4VqzRYsWSYmtfb8puzqYUYhz3v4HqsmsJZbdjXHHLR6Z8dWQX1sXwEFFye1TT3ZgJ1bJc8ABGCxh",
  "key26": "2we8H3dXTVtPgLXhYvidfLh5NV9vMWhXbNFCknLQKFCHcujXJ37fTejQM1SaFtLRFSzqe19ejzQw4afr98Sm4J1",
  "key27": "3jEpjsFZTYPccNbSTdTwHj9DoVfcw8Df1RgceVQ642RRbgqKr53A7DLqC9QUJpYJMKqcqFPBAyjPCEFcfizekjkg",
  "key28": "zj9tp6f5bNbwmLaWrVZc2SttBoMybdJsoj9geM7stPSxEHZ583URHoqivQgP9qeceiCsQdW9mdooSzUSAg4Pty4",
  "key29": "4apByocsApcUpP5HVh1aaE4FdU6Qk8ZsiRqr7DMo2msqASkqXJehdLfyxZ273fLsWoUn3cRxFYtZk7xV4UG8NY5F",
  "key30": "34Nt1QWQhaiYuhgTAbMihkSFLpRVBXALDf8PzrY8HdFQNfEBQW2c7dsfGuuMweAWW4sBevpMeMcwhjV18uCN84vh",
  "key31": "4cE716tAvyJFy7oyrYoPHUoxBbMacZ66BhFeawrRppazna6z1PbVq9TN1VjmA4LPjTbS2Q9dSfvxhKJv2JBDvHQ1",
  "key32": "5VyuhvGyDAYsBK1wxnXcrcJDfUCyHeWdpotaG3hGVD6sQkywnh2ypUBUy5vUK3egCoFTt51Ka1efjUWYJkai9Q1s",
  "key33": "5fKgvGXuXoy6t9Qs2YSfYnCF7rRxCTMNiB2DjZ78Te8cJFfPhJsZha2HJMuZ3sKfXC9fgSyag4EVki2d6qntuezf",
  "key34": "4Q2PgUM2UoVVhVJdAvEaQQXLFNgaH1iatLhajhTXUU8UhN8FJeUUWR6jTKVLPNMMYc8hd3k3qjoyjvzzC3qXmnZw",
  "key35": "TYJXJgdfYtg83QJSfUDEpN7WQnzDNTKKKKvFCdsanFa3a4C5k5aC3sAXVVHvrob94yFSyHmMCoHhUbMwjwQc5qx",
  "key36": "412zkovGK6UhxmTJzqzE1jH3auJmDr5xVsUd4NSbUoFjQ94UEis5Zk3G2V12zxX6X7p3sCEzYig3MwLQQwmXy9Th"
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
