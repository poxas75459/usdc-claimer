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
    "3UM1cqfCVWuXVUptjV1JbXnwQoNpGwu2LVRuHEPS7dQVBtkhPzKwx2m7n2MMYQkw2QPyeMsMYK76MZ44xpbrYKdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFKWcXGzRbE8XeemcvXbop82fh7E4dfYmeAgub6RRAe5Mj6fFPtmS9AhiZDM1WWUmTTSfPff32KoAiysLFKv9gS",
  "key1": "2yZP1Y7VEEYpWK3Xgqid9rYqoF8tY3tMJsZuoNSkmLPic3GwJiCzgp9kDS7yduDrSdPwSgrApEyEBpdqt8765v7r",
  "key2": "2aJNPBL63JSZDVatqT3kRyQw1MjbvgwUoWGjj2bs7E2XSsmC25HUKeWzzZbGb4UPXf3YiNcxdLQxgkoT9zdN2rai",
  "key3": "22JeWBxoSfN6ekDbkLqgv1ZsAce12fMb3383qDmcgE9MfDLDr1o4rcYfrCKyMFFDkdu9EtFUdstZv3gVS9ru9PwQ",
  "key4": "5mVqz63ut81VC1zMdKQD4rSTkjm9x1LxVoktNmxUmc6ht3hghUfoZegRV32oqH6Wcn6rLhv76BXhzt83qHDR3s6k",
  "key5": "5oWRokiZC1o7iefpZKtHHCYfR4wcnAUTWQfZVREkfjSYWUjMHKrr6XeY89bfP2YDcKR6G3Bvs6CizQFcPebtyy1N",
  "key6": "4Z2sWez9xbD3mfHMcdTDdhwHgAZPeYQS6k72r7uziBkktzn6hfbqFkSdd7TjrEotkMUwn7JQer2KUffGj5gSgB3d",
  "key7": "2Ef77GJVMDiKpYzt17AnS2fJNarSUgeB7tqU3Jv3QMpnnaDmbLior1UNe3cH1G3CircKTZanGvy9aMFQfxG9WPcB",
  "key8": "36M3PjWniRue1tSx4XuhiBmzbPYCAfZs7gbYcop2ALiMPJpe6Er2eaXSoveBDRLvUsaxDWgWvkHbDSozmKVB3qoS",
  "key9": "5SUajW15vMUDRtdxQ8mni3sM2XNMkuCfm4YMipXhfH5e5pJTUCZLcEMFQ67mkpRuGbqsjWEnfEVBcksYs8NfMMmT",
  "key10": "2EBKoNzuXUZWM2fQsBYy3Vq8baS1BFf579TRGQ6PhfRA38fam4MrtjNTbDCWoWenNfbF8V3bM86mvCWL65dGqxUe",
  "key11": "2vfnJaPxFMMEogNaRHBJBiDHh8DCPN9fmC8KK55hr7ezV9P1zuyrNgA8b3dKisTYhCqNoeyjz7R22C5kMJQDLbYZ",
  "key12": "5xhk71Lt6fMmvVrgJVqhoBfS8nEBET26xoirraEyWckzA4ay9vmxYEhT6fK6FDEa8Amy9uamQKLf1SpJub1k98dz",
  "key13": "ChEfirM9nXr8CfwSwuCt414aRC2mgk2URwWaknUHYeXTgXvD5Z4Eb1iFxhheswhMPzfiVkKWRjn2Zx2wkNgD8KR",
  "key14": "4XkjedsxjSXCecri1Hd7i3wAmMWJfpTwAF49VxdXEk3zzEwFvRHXCWekQ6vhrNgRQoRKy9V32nRSTfbnFWAGh9bc",
  "key15": "ntq4x49T9wc9P1LjN36WVUMGx6iYE2XYoc1qUhMNCqCzUR1y7NMVN3ybDwxpa4dvGATz5VkTcXwuUU89EXTA5Ly",
  "key16": "5c2vBrgJvwLU52GfyVnMpanWePBueCbMYeLQKak8fxbYnkE9wpuSe3DpEyq5XzLXjNi4vSJijmbzcWLzPHJs2PPq",
  "key17": "3H66WjciGMK21X8bMy7n9doPswPPbm4My7E4H1N8Wa7HN2CwzVF8hNaGcm1qgSknXHitA96Wxi1CL1D3fLkhc2Zv",
  "key18": "3GQ3W1KbEuLSy619S8mu4ySZrXNagTYpoRBQNByet8pX4ZzYr5Xq7oSUAxBvmP4hHQ9V7ddJvbn8txSvbMNprf8k",
  "key19": "3V2YktgKAprxA1y87R4ur1GX86Ha8fRx3Ja9Vk3bvUBHh1qn2c58MLjPycYoVJyE3xio1ehv6m5i818ZiVTWiixg",
  "key20": "4A7y8JhQ8F5ZA3gniuGyBRpJPhHrfnKj9n4UgGmbCT7mxuBAW86zZgHn1uiVjKxahYzzZPC17H2ZwEufCA8TYdfo",
  "key21": "4k3gnqhRmTN6DnPzkjZ5drkuYhda2BcVh2yHf7tLU3fVrKPup8Bmw3uZngkChKGVMu9BRE3L3JagtXM12Ncup587",
  "key22": "3jicbJqTMMThw9advW2K3HQ138Ntx6pxfHbPnnedpsEP7BrH3TnQdxYrBiuD5pegxV1FHN6pKtAMAAgwxJTFweAA",
  "key23": "2aFMuxQtXcZVTxZ3k4Q49DJJVGBMcyGhzEPLU2AnB5WSSYbjjXiasz22NNBE4Y3fKtwPMCZ9seP9nKzzext4nbaK",
  "key24": "2sNHqcs5U6L1URvJHUPMJYufBtySA3xnh6JLotjb8w9TSo79muoqz1kScBx2zA52PJoQAq1UVgBPxRZWkm54rHa8",
  "key25": "5SiSbFzovc8NQu57EkgYDwN4coR9QFSmCRuvjiF8RzYNWVkumn4cXDZqvJP2NmDfVzx3PxPDzbNtDLnpKtA8pE9R",
  "key26": "Nq1WXvUvKgiCy1bXWRgWhi2Uz7t9d75GYsCKRfZcmAeBGzQCL48xJzre5Kg8h4bDa9okBqzFr2Jqw1u2nJvvFB6",
  "key27": "1mqmmKupK4heLvRRVb9cb1ANysD6xzTb99HoxEGMkkN5WHFM7GsKHHa8Bah2XXDv6upucJXGs27cHcNqZg89n8g",
  "key28": "2pEKQgMSxtyCFLoXLVfawqzwp9t4HiqKs81h56BMS6tKJsRA4UtqCM5pQBWMv4k1Hyyfzcmu3mo7eE3vR7zEsNSi",
  "key29": "63GNaZtJ62BMjatd5rhyG49wV5XjK3qDnPp8QoFHpdoRSbqxqnmxB9MUQZx6H9Zdr4K98BMTfKWPbGZ1k5UoMyXE",
  "key30": "3h3MWyUSNNBHqyaX66zgFd15KZFhppLE7K5YXz62rbjddZHw92a3C4ygpHWwZNdV36HvbK1mtHkB2nzqEJHZuSBF",
  "key31": "5wCxBi4YFMio5L1E7SZyMk4uqitJvMHuebneGyKTciGWL8CowXFuxLz2rWsACkuE5jQEXwqS59ZzVw1fUPK9YiZe",
  "key32": "4WEixBzF3URtQqHGvWCg6ESREhSFhtDHJ5DLtSKdgkCMzmY2YcTYs7ei9KKzc3ceVXpMb3NDY2h5jyCWzsnF6GRF",
  "key33": "5hHCwaWrLqTE5V3CxUg4D4Gn43w6ybKctstruhBEqGnqDXFWiaJuiNcVRTcnMccedj7H9hxW4WK7q5Bfx3ek1PTU",
  "key34": "3sgqab2N9MPsqzsMZAUx51J1RT5cJrazVGSJpHjmB1NFzueDTQwn1KufqwpajJJen6BW6JucF5ArevFb7rMrc5kU",
  "key35": "2sVcZ112JouAz32ExKgPyRFPFBerP2JuuFo8YZHYfG1zCA48Vfk5sp7QskaHc3NTpbfFrFQkkR1oXJ8a3GYAtRx2",
  "key36": "3Ec5mr6v1V8PyYK3UhAtHtjzogTs5rKho5ph2MLoNotjUY3KQa6kcXr7yfwdAKJf1wyn2nHHQiEopTxoF2Hy1y9K",
  "key37": "38KN9tXNsG45bLR2hZnJjzmxdyD27BKRKBjmCoXSuTq9BvJHvjMEp3RH5FaUWEuEz76BPsj7gCGaVvfCXo4ig5xb",
  "key38": "3fcAyEfjEiZ9CShrJjFex8h5omRSJ5Ap9NietY7G8HMctS44hk7LsduEWkkvdWaUhdXqas2X1jeG3NXyCLvrXv61",
  "key39": "SN2Do4dQ1EoJCGrcm4SY8mmVzsmmo1FbQh8xVRK1w7hoKvSmxCDgeV6eyPe5PrCakVd6M8Tv4oYN2ozESfSr9Kv",
  "key40": "4btpxC3acYhf2ycbptA7upWDhuf1k36pCBYu1785e3g526Su6jwDTnPLdKyJo7tDuCz1xqGArqfuFC4WwW9Wn9dF",
  "key41": "vYHDcFPvKxHS1AakeLVYXZvNd4LojX4MtAxnGRnrCHZ4hpnQjMuxRp7HEvSXdYSfoACRGF7Df44oBKqoiHzuWDt",
  "key42": "PyY1BqgNEitEwUSCvYtN3QoXXwFybXWZ2j7tyDc4wWDH8hk4nWkkigvHV8XDfhrEkPhbftSwk4qRWPHyMFY7nDG",
  "key43": "2LE7nsaewYhCnUGZNZrci9PJ4RZ6Ma9WsqqxcrptdPorevVhickd1pYJkBKuZEhsKNgNy5t4h3G4xvHLSj3cD2Zt",
  "key44": "TtYEbgt32mXi61pBizkWUJdArj6vVKWJDnCqWQbaQ5ZyP8WznnSDQU1jCMDbR4uLfFsTtVx4NQXot19wTmt31wp",
  "key45": "3vKH7xCfZuLk2tDN7mZf4XNQe5TAaHts6iYRvEVdbiFhXsfMaySGPRZGDcbMJqb38ASdQikAaQfhX9pxD6JuJmwc",
  "key46": "4efUyh6eg6comTJKiCJzftdDShysNr9fGky5GD5kKfYA3qorjGAmhbaNn6BoF6oEXgxbXWiQHbiY5tqBPQRkY8vZ",
  "key47": "4BCS6TKXH5MuZb656Mn7nzcoGrB7KqSBbDjbttcH5FH7iUWsgdimjtL9ntRFAVQrrzVqf3dh3qQcmwgnrMFUALnm"
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
